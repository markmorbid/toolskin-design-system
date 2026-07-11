// --- START OF FILE ordinals-canvas-background.js ---

/**
 * Ordinals Canvas Background Generator
 * Creates an animated grid background with random inscription images
 * 
 * Usage: Add this to your plugin and call via shortcode
 * Shortcode: [ordinals_canvas_bg container_selector="#my-container" json_url="..." animation="float"]
 * Note: Use snake_case for shortcode attributes (e.g., container_selector, json_url, grid_size).
 * The JS will automatically handle converting them from data attributes.
 */

(function() {
    'use strict';

    class OrdinalsCanvasBackground {
        constructor(options) {
            // Core options
            this.containerSelector = options.containerSelector;
            this.jsonUrl = options.jsonUrl;
            
            // NEW: Fallback & Overlay Options
            this.fallbackImageUrl = options.fallbackImageUrl || null;
            this.overlayEnabled = (options.overlayEnabled === 'true'); // Convert string to boolean
            this.overlayOpacity = parseFloat(options.overlayOpacity) || 0.7;
            
            this.isMobile = window.innerWidth <= 768;
            this.mobileGridSize = 5;      // Force a 5-column grid on mobile for performance.
            this.mobileRandomCount = 20;  // Only load & process 20 images on mobile.
            this.maxImageProcessSize = 256; // Resize all inscriptions to a max of 256x256px.

            if (this.isMobile) {
                console.log("📱 Mobile device detected. Applying performance optimizations.");
                this.gridSize = this.mobileGridSize;
                this.randomCount = this.mobileRandomCount;
            } else {
                this.gridSize = parseInt(options.gridSize) || 8;
                this.randomCount = parseInt(options.randomCount) || 30;
            }
            // Animation & Style Options
            this.animation = options.animation || 'float';
            
            this.imageOpacity = parseFloat(options.opacity) || 1;
            this.animationSpeed = parseFloat(options.speed) || 1;
            this.blur = parseInt(options.blur) || 0;
            
            
            this.container = null;
            this.canvas = null;
            this.ctx = null;
            this.inscriptions = [];
            this.images = [];
            this.animationFrame = null;
            this.tiles = [];
            this.isInitialized = false;
            this.observer = null;
            
            

            this.handleResize = this.handleResize.bind(this);
            this.init();
        }


        async init() {
            if (this.isInitialized) return;
            try {
                this.container = document.querySelector(this.containerSelector);
                if (!this.container) return;
                
                this.applyFallbackImage();
                await this.waitForContainerSize();
                await this.fetchInscriptions();
                this.createCanvas();
                
                if (this.overlayEnabled) this.createOverlay();
                
                console.log('🖼️ Loading and processing images...');
                await this.loadAndProcessImages(); // MODIFIED: Call the new processing function
                console.log(`✅ Processed ${this.images.length} images.`);
                
                this.calculateTiles();
                this.setupIntersectionObserver();
                window.addEventListener('resize', this.handleResize);
                this.isInitialized = true;
                
                setTimeout(() => {
                    if (this.container) this.container.style.backgroundImage = 'none';
                    if (this.canvas) this.canvas.style.opacity = 1;
                }, 100);

                console.log(`✅ Canvas for ${this.containerSelector} is initialized.`);
                
            } catch (error) {
                console.error('❌ Failed to initialize canvas background:', error);
            }
        }
        
        async loadAndProcessImages() {
            const promises = this.inscriptions.map(inscription => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.crossOrigin = 'anonymous';
                    img.onload = async () => {
                        const processedImg = await this.processAndResizeImage(img);
                        resolve(processedImg);
                    };
                    img.onerror = () => resolve(null);
                    img.src = `https://ordinals.com/content/${inscription.id}`;
                });
            });

            const loadedImages = await Promise.all(promises);
            this.images = loadedImages.filter(img => img !== null);
            
            if (this.images.length === 0) {
                throw new Error('No images could be loaded or processed.');
            }
        }

        // NEW: Core image optimization function
        processAndResizeImage(fullSizeImg) {
            return new Promise(resolve => {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');
                
                const size = Math.min(this.maxImageProcessSize, fullSizeImg.width, fullSizeImg.height);
                canvas.width = size;
                canvas.height = size;
                
                // Draw the large image onto the small canvas, effectively resizing it.
                ctx.drawImage(fullSizeImg, 0, 0, size, size);
                
                // Create a new, lightweight Image object from the small canvas data.
                const smallImg = new Image();
                smallImg.onload = () => resolve(smallImg);
                smallImg.onerror = () => resolve(null);
                smallImg.src = canvas.toDataURL('image/jpeg', 0.8); // Use JPEG for smaller file size
            });
        }
        
         // NEW: Method to set up the Intersection Observer
        setupIntersectionObserver() {
            const options = {
                root: null, // observes intersections relative to the viewport
                rootMargin: '0px',
                threshold: 0.01 // Fire callback when even 1% of the element is visible
            };

            this.observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Element is in view: start the animation
                        console.log(`▶️ Canvas for ${this.containerSelector} entered viewport, starting animation.`);
                        this.startAnimation();
                    } else {
                        // Element is out of view: stop the animation
                        console.log(`⏸️ Canvas for ${this.containerSelector} left viewport, stopping animation.`);
                        this.stopAnimation();
                    }
                });
            }, options);

            // Start observing the container element
            this.observer.observe(this.container);
        }
         // NEW: Method to apply fallback image
        applyFallbackImage() {
            if (this.fallbackImageUrl && this.container) {
                console.log('Applying fallback image:', this.fallbackImageUrl);
                this.container.style.backgroundImage = `url(${this.fallbackImageUrl})`;
                this.container.style.backgroundSize = 'cover';
                this.container.style.backgroundPosition = 'center center';
                this.container.style.backgroundAttachment = 'fixed';
            }
        }
        
         waitForContainerSize() {
            return new Promise(resolve => {
                const check = () => {
                    const rect = this.container.getBoundingClientRect();
                    if (rect.width > 0 && rect.height > 0) {
                        resolve();
                    } else {
                        requestAnimationFrame(check);
                    }
                };
                check();
            });
        }

        async fetchInscriptions() {
            const response = await fetch(this.jsonUrl);
            if (!response.ok) throw new Error(`Failed to fetch inscriptions from ${this.jsonUrl} (Status: ${response.status})`);
            
            const data = await response.json();
            this.inscriptions = data.inscriptions || [];
            
            this.inscriptions = this.getRandomInscriptions(this.randomCount);
        }

        getRandomInscriptions(count) {
            const shuffled = [...this.inscriptions].sort(() => Math.random() - 0.5);
            return shuffled.slice(0, Math.min(count, shuffled.length));
        }

        createCanvas() {
            const wrapper = document.createElement('div');
            wrapper.className = 'ordinals-canvas-background';
            wrapper.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                pointer-events: none;
                z-index: 0;
            `;

            // Inside the createCanvas() method
            this.canvas = document.createElement('canvas');
            this.canvas.style.cssText = `
                width: 100%;
                height: 100%;
                opacity: 0;
                transition: opacity 1.5s ease-in-out;
                ${this.blur > 0 ? `filter: blur(${this.blur}px);` : ''}
            `;
            
            this.ctx = this.canvas.getContext('2d', { alpha: true });
            
            wrapper.appendChild(this.canvas);
            
            // IMPROVEMENT: Only set position if it's static, to avoid overriding user styles.
            if (window.getComputedStyle(this.container).position === 'static') {
                this.container.style.position = 'relative';
            }
            this.container.insertBefore(wrapper, this.container.firstChild);

            // Set initial canvas size
            this.resizeCanvas();
        }

         createOverlay() {
            const overlay = document.createElement('div');
            overlay.className = 'ordinals-canvas-overlay';
            
            // NEW: Use overlayOpacity to create the gradient
            const darkValue = this.overlayOpacity;
            const lightValue = this.overlayOpacity * 0.5; // Lighter at the top
            
            overlay.style.cssText = `
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: linear-gradient(to bottom, rgba(0,0,0,${lightValue}), rgba(0,0,0,${darkValue}));
                pointer-events: none;
                z-index: 1;
            `;
            
            const wrapper = this.container.querySelector('.ordinals-canvas-background');
            if (wrapper) {
               this.container.insertBefore(overlay, wrapper.nextSibling);
            }
        }

        resizeCanvas() {
            const rect = this.container.getBoundingClientRect();
            // IMPROVEMENT: Use devicePixelRatio for sharper rendering on high-DPI screens
            const dpr = window.devicePixelRatio || 1;
            this.canvas.width = rect.width * dpr;
            this.canvas.height = rect.height * dpr;
            this.ctx.scale(dpr, dpr);
            
            // Apply CSS size separately
            this.canvas.style.width = `${rect.width}px`;
            this.canvas.style.height = `${rect.height}px`;
            
            this.calculateTiles();
        }

        calculateTiles() {
            this.tiles = [];
            if (this.images.length === 0) return;

            const rect = this.container.getBoundingClientRect();
            const tileSize = rect.width / this.gridSize;
            const rows = Math.ceil(rect.height / tileSize) + 1;
            const cols = this.gridSize + 1;
            
            // --- NEW: "Shuffled Deck" randomization logic ---
            let imageIndices = Array.from({ length: this.images.length }, (_, i) => i);
            let currentIndex = this.images.length; // Start at the end to force initial shuffle

            const getNextShuffledImage = () => {
                if (currentIndex >= this.images.length) {
                    // Fisher-Yates shuffle algorithm for perfect shuffling
                    for (let i = imageIndices.length - 1; i > 0; i--) {
                        const j = Math.floor(Math.random() * (i + 1));
                        [imageIndices[i], imageIndices[j]] = [imageIndices[j], imageIndices[i]];
                    }
                    currentIndex = 0;
                }
                const imageIndex = imageIndices[currentIndex];
                currentIndex++;
                return this.images[imageIndex];
            };
            // ---

            for (let row = -1; row < rows; row++) {
                for (let col = -1; col < cols; col++) {
                    this.tiles.push({
                        x: col * tileSize,
                        y: row * tileSize,
                        baseY: row * tileSize,
                        size: tileSize,
                        image: getNextShuffledImage(), // Use the new shuffled getter
                        offset: Math.random() * Math.PI * 2,
                        speed: 0.5 + Math.random() * 1.5,
                        rotation: 0,
                        scale: 1,
                        opacity: this.imageOpacity
                    });
                }
            }
        }

        async loadImages() {
            const promises = this.inscriptions.map(inscription => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.crossOrigin = 'anonymous';
                    img.onload = () => resolve(img);
                    img.onerror = () => resolve(null); // Don't reject, just resolve with null
                    img.src = `https://ordinals.com/content/${inscription.id}`;
                });
            });

            const loadedImages = await Promise.all(promises);
            this.images = loadedImages.filter(img => img !== null);
            
            if (this.images.length === 0) {
                throw new Error('No images could be loaded.');
            }
        }

        startAnimation() {
            if (this.animationFrame) cancelAnimationFrame(this.animationFrame);
            
            let startTime = Date.now();

            const animate = () => {
                const currentTime = Date.now();
                const elapsed = (currentTime - startTime) / 1000;

                const rect = this.container.getBoundingClientRect();
                this.ctx.clearRect(0, 0, rect.width, rect.height);

                this.tiles.forEach((tile, index) => {
                    if (!tile.image) return;

                    this.ctx.save();
                    this.ctx.globalAlpha = tile.opacity;

                    switch (this.animation) {
                        case 'float': this.animateFloat(tile, elapsed); break;
                        case 'slide': this.animateSlide(tile, elapsed); break;
                        case 'zoom': this.animateZoom(tile, elapsed); break;
                        case 'parallax': this.animateParallax(tile, elapsed, index); break;
                        case 'wave': this.animateWave(tile, elapsed); break;
                        default: this.animateFloat(tile, elapsed);
                    }

                    const x = tile.x + tile.size / 2;
                    const y = tile.y + tile.size / 2;

                    this.ctx.translate(x, y);
                    this.ctx.rotate(tile.rotation);
                    this.ctx.scale(tile.scale, tile.scale);
                    
                    this.ctx.drawImage(tile.image, -tile.size / 2, -tile.size / 2, tile.size, tile.size);

                    this.ctx.restore();
                });

                this.animationFrame = requestAnimationFrame(animate);
            };
            animate();
        }
        // NEW: Method to stop the animation loop
        stopAnimation() {
            if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
                this.animationFrame = null;
            }
        }

        animateFloat(tile, elapsed) {
            tile.y = tile.baseY + Math.sin(elapsed * this.animationSpeed + tile.offset) * 10;
        }

        animateSlide(tile, elapsed) {
            const canvasHeight = this.container.getBoundingClientRect().height;
            const totalHeight = canvasHeight + tile.size * 2;
            tile.y = (tile.baseY + elapsed * 20 * this.animationSpeed) % totalHeight - tile.size;
        }

        animateZoom(tile, elapsed) {
            tile.scale = 1 + Math.sin(elapsed * this.animationSpeed + tile.offset) * 0.1;
        }

        animateParallax(tile, elapsed, index) {
            const canvasHeight = this.container.getBoundingClientRect().height;
            const layer = index % 3;
            const speed = (layer + 1) * 0.3 * this.animationSpeed;
            const totalHeight = canvasHeight + tile.size * 2;
            tile.y = (tile.baseY + elapsed * 10 * speed) % totalHeight - tile.size;
        }

        animateWave(tile, elapsed) {
            tile.y = tile.baseY + Math.sin(elapsed * this.animationSpeed + tile.x / 100) * 20;
        }

        handleResize() {
            if (!this.container) return;
            this.resizeCanvas();
        }

        destroy() {
            if (this.animationFrame) {
                cancelAnimationFrame(this.animationFrame);
            }
            if (this.observer) {
                this.observer.disconnect();
            }
            this.stopAnimation(); // Make sure animation is stopped
            window.removeEventListener('resize', this.handleResize);
            const wrapper = this.container.querySelector('.ordinals-canvas-background');
            const overlay = this.container.querySelector('.ordinals-canvas-overlay');
            if (wrapper) wrapper.remove();
            if (overlay) overlay.remove();
        }
    }

    // --- INITIALIZATION LOGIC ---

    function initCanvasBackgrounds() {
        const elements = document.querySelectorAll('[data-ordinals-canvas-bg]');
        elements.forEach((element) => {
            if (element.dataset.initialized) return;
            element.dataset.initialized = 'true';

            new OrdinalsCanvasBackground({
                containerSelector: element.dataset.containerSelector,
                jsonUrl: element.dataset.jsonUrl,
                // NEW: Pass new options from data attributes to the class
                fallbackImageUrl: element.dataset.fallbackImageUrl,
                overlayEnabled: element.dataset.overlayEnabled,
                overlayOpacity: element.dataset.overlayOpacity,
                // Existing options
                animation: element.dataset.animation,
                gridSize: element.dataset.gridSize,
                opacity: element.dataset.opacity,
                speed: element.dataset.speed,
                blur: element.dataset.blur,
                randomCount: element.dataset.randomCount
            });
        });
    }
    
    if (document.readyState === 'complete') {
        initCanvasBackgrounds();
    } else {
        window.addEventListener('load', initCanvasBackgrounds);
    }
    

})();