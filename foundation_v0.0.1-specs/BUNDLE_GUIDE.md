# Toolskin Bundle Guide - No Node.js Required!

## The Problem

You want all external libraries (Lenis, Locomotive) included in your main JavaScript file so your HTML stays clean:

**Current (Multiple Scripts):**
```html
<script src="lenis.min.js"></script>
<script src="locomotive.min.js"></script>
<script src="toolskin.js"></script>
```

**Goal (Single Script):**
```html
<script src="toolskin.bundle.js"></script>
```

---

## Solution: PowerShell Bundle Script

### Method 1: Automatic Build (Recommended)

1. **Run the build script:**
   ```powershell
   .\build-bundle.ps1
   ```

2. **Use the generated bundle:**
   ```html
   <link rel="stylesheet" href="toolskin.css">
   <script src="toolskin.bundle.js"></script>
   ```

That's it! The script automatically:
- Downloads Lenis from CDN
- Downloads Locomotive from CDN
- Combines them with `toolskin.js`
- Creates `toolskin.bundle.js`

---

### Method 2: Manual Bundle (No Internet)

If you already have the libraries downloaded:

1. **Create a new file `toolskin.bundle.js`**

2. **Paste in this order:**
   ```javascript
   // 1. Lenis code
   // [Copy entire contents of lenis.min.js]
   
   // 2. Locomotive code
   // [Copy entire contents of locomotive-scroll.min.js]
   
   // 3. Toolskin code
   // [Copy entire contents of toolskin.js]
   
   console.log('✓ Toolskin Bundle loaded');
   ```

3. **Save and use:**
   ```html
   <script src="toolskin.bundle.js"></script>
   ```

---

## File Structure

### Development Setup (Separate Files)
```
project/
├── toolskin.css
├── toolskin.js                    # Core framework
├── showcase.html                   # Loads CDN + toolskin.js
└── build-bundle.ps1               # Build script
```

### Production Setup (Bundled)
```
project/
├── toolskin.css
├── toolskin.bundle.js             # All-in-one file
└── index.html                     # Clean HTML!
```

---

## HTML Setup Comparison

### Development (Multiple Files - Current)
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="toolskin.css">
  
  <!-- External dependencies from CDN -->
  <script src="https://unpkg.com/lenis@1.3.18/dist/lenis.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js"></script>
  
  <!-- Toolskin Framework -->
  <script src="toolskin.js"></script>
  
  <!-- Configuration -->
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      if (!Toolskin.config) {
        Toolskin.init({
          smoothScroll: { enabled: true },
          locomotiveScroll: { enabled: true },
          theme: { mode: 'dark' },
        });
      }
    });
  </script>
</head>
<body>
  <!-- Your content -->
</body>
</html>
```

### Production (Bundled - Clean)
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="toolskin.css">
  <script src="toolskin.bundle.js"></script>
  
  <!-- Optional: Custom configuration -->
  <script>
    window.addEventListener('DOMContentLoaded', () => {
      if (!Toolskin.config) {
        Toolskin.init({
          smoothScroll: { enabled: true },
          locomotiveScroll: { enabled: true },
          theme: { mode: 'dark' },
        });
      }
    });
  </script>
</head>
<body>
  <!-- Your content -->
</body>
</html>
```

---

## Building the Bundle

### Using PowerShell (Windows)

```powershell
# Navigate to project directory
cd "D:\Mis Documentos\Projects\Toolskin Framework\_TOOLSKIN_DESIGN_YSTEM_FRAMEWORK"

# Run build script
.\build-bundle.ps1

# Output: toolskin.bundle.js created
```

### Using Bash (Mac/Linux)

Create `build-bundle.sh`:
```bash
#!/bin/bash

echo "🎨 Toolskin Bundle Builder"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━"

# Download dependencies
curl -o temp_lenis.js https://unpkg.com/lenis@1.3.18/dist/lenis.min.js
curl -o temp_locomotive.js https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js

# Create bundle
cat > toolskin.bundle.js << 'EOF'
/*! Toolskin Bundle v2.0.0 */
'use strict';

/* LENIS */
EOF

cat temp_lenis.js >> toolskin.bundle.js

cat >> toolskin.bundle.js << 'EOF'

/* LOCOMOTIVE */
EOF

cat temp_locomotive.js >> toolskin.bundle.js

cat >> toolskin.bundle.js << 'EOF'

/* TOOLSKIN */
EOF

cat toolskin.js >> toolskin.bundle.js

# Cleanup
rm temp_lenis.js temp_locomotive.js

echo "✓ Bundle created: toolskin.bundle.js"
```

---

## Configuration in Bundle Mode

The bundle auto-initializes with defaults. To customize:

```html
<script src="toolskin.bundle.js"></script>
<script>
  // Wait for bundle to load
  window.addEventListener('DOMContentLoaded', () => {
    // Only init if not already initialized
    if (!Toolskin.config) {
      Toolskin.init({
        smoothScroll: { enabled: true, duration: 1.5 },
        locomotiveScroll: { enabled: true, autoDetect: true },
        theme: { mode: 'light' },
        layout: { containerMaxWidth: '1200px' },
      });
    }
  });
</script>
```

---

## Advantages of Bundling

### Benefits
✅ **Single HTTP request** instead of 3  
✅ **Cleaner HTML** - no CDN links  
✅ **Offline capable** - no internet dependency  
✅ **Faster loading** - no DNS lookups  
✅ **Version control** - bundle specific versions  
✅ **No CORS issues** - everything is local  

### Trade-offs
⚠️ **Larger file size** (~100-150KB total)  
⚠️ **Manual updates** - rebuild when updating dependencies  
⚠️ **No CDN caching** - can't share cached versions across sites  

---

## File Sizes

| File | Size (approx) |
|------|---------------|
| `lenis.min.js` | ~20 KB |
| `locomotive-scroll.min.js` | ~30 KB |
| `toolskin.js` | ~40 KB |
| **`toolskin.bundle.js`** | **~90 KB** |
| `toolskin.css` | ~60 KB |

**Total page weight:** ~150 KB (CSS + JS bundle)

---

## When to Use Which Approach

### Use Separate Files (Development) When:
- Actively developing
- Need to debug individual libraries
- Want browser caching per library
- Using source maps
- Frequently updating Toolskin

### Use Bundle (Production) When:
- Deploying to production
- Want clean HTML
- Offline capability needed
- Minimizing HTTP requests
- Stable versions locked

---

## Updating the Bundle

When you update `toolskin.js`:

1. **Re-run build script:**
   ```powershell
   .\build-bundle.ps1
   ```

2. **Bundle is regenerated** with latest `toolskin.js`

3. **External libraries stay the same** (unless you change URLs in script)

---

## Troubleshooting

### "Toolskin is not defined"
- Ensure `toolskin.bundle.js` is loaded before your config script
- Check browser console for loading errors
- Verify bundle was created successfully

### "Lenis is not defined"
- Bundle wasn't built correctly
- Lenis code wasn't included
- Re-run build script

### "Cannot read property 'init' of undefined"
- Script loading order issue
- Wrap init in `DOMContentLoaded` event
- Check `if (!Toolskin.config)` before init

---

## Alternative: No Build Step (URL Loading)

If you don't want to run the build script, you can create the bundle manually once:

1. Open these URLs in browser:
   - https://unpkg.com/lenis@1.3.18/dist/lenis.min.js
   - https://cdn.jsdelivr.net/npm/locomotive-scroll@4.1.4/dist/locomotive-scroll.min.js

2. Copy the source code from each

3. Create `toolskin.bundle.js` and paste in order:
   ```javascript
   // [Lenis code here]
   // [Locomotive code here]
   // [toolskin.js code here]
   ```

4. Save and use!

---

## Best Practice Recommendation

**For most users:**

1. **Development:** Use CDN links (current showcase.html setup)
2. **Production:** Run `build-bundle.ps1` once and use bundle
3. **Keep both versions** in your project

**Directory structure:**
```
project/
├── toolskin.css               # Always needed
├── toolskin.js                # Development version
├── toolskin.bundle.js         # Production version (generated)
├── build-bundle.ps1           # Build script
├── showcase.html              # Development demo (CDN)
└── index.html                 # Production site (bundle)
```

---

**Version**: 2.0.0  
**Last Updated**: March 8, 2026  
**No Node.js Required!** 🎉
