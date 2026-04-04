import { projects } from './projects.js'

/* =========================
   TOOLSKIN INIT (Lenis inside)
========================= */
ToolskinConfig.init()
Toolskin.init()

/* =========================
   THREE SCENE (CUBE SYSTEM)
========================= */

const canvas = document.getElementById('webgl')

const scene = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(
  60,
  window.innerWidth / window.innerHeight,
  0.1,
  100
)

camera.position.z = 4

const renderer = new THREE.WebGLRenderer({
  canvas,
  alpha: true,
  antialias: true
})

renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/* Cube (same feel: wireframe + depth) */
const geometry = new THREE.BoxGeometry(1.5, 1.5, 1.5)
const material = new THREE.MeshBasicMaterial({
  wireframe: true,
  color: 0xffffff
})

const cube = new THREE.Mesh(geometry, material)
scene.add(cube)

/* =========================
   GSAP MOTION SYSTEM
========================= */

/* Idle rotation */
gsap.ticker.add(() => {
  cube.rotation.y += 0.01
  cube.rotation.x += 0.005
  renderer.render(scene, camera)
})

/* Mouse interaction (same feel) */
window.addEventListener('mousemove', (e) => {
  const x = (e.clientX / window.innerWidth - 0.5)
  const y = (e.clientY / window.innerHeight - 0.5)

  gsap.to(cube.rotation, {
    x: y * 2,
    y: x * 2,
    duration: 1.2,
    ease: "power3.out"
  })
})

/* Scroll interaction (important) */
gsap.to(cube.rotation, {
  x: Math.PI,
  scrollTrigger: {
    trigger: "body",
    start: "top top",
    end: "bottom bottom",
    scrub: true
  }
})

/* =========================
   PROJECT GRID RENDER
========================= */

const container = document.getElementById('projects')

projects.forEach((p, i) => {
  const el = document.createElement('div')
  el.className = 'ts-card project'

  el.innerHTML = `
    <img src="${p.mainImage}" class="ts-img">
  `

  container.appendChild(el)
})

/* =========================
   HOVER → CUBE REACTION
========================= */

document.querySelectorAll('.project').forEach((el, i) => {
  el.addEventListener('mouseenter', () => {
    gsap.to(cube.scale, {
      x: 1.6,
      y: 1.6,
      z: 1.6,
      duration: 0.4
    })
  })

  el.addEventListener('mouseleave', () => {
    gsap.to(cube.scale, {
      x: 1,
      y: 1,
      z: 1,
      duration: 0.4
    })
  })
})

/* =========================
   PJAX-LITE NAVIGATION
========================= */

document.body.addEventListener('click', async (e) => {
  const link = e.target.closest('[data-link]')
  if (!link) return

  e.preventDefault()

  const url = link.href

  /* OUT ANIMATION */
  await gsap.to('#app', {
    opacity: 0,
    duration: 0.4
  })

  /* LOAD NEW PAGE */
  const res = await fetch(url)
  const html = await res.text()

  const doc = new DOMParser().parseFromString(html, 'text/html')
  const newContent = doc.querySelector('#app').innerHTML

  document.querySelector('#app').innerHTML = newContent

  /* IN ANIMATION */
  gsap.fromTo('#app',
    { opacity: 0 },
    { opacity: 1, duration: 0.4 }
  )
})

/* =========================
   RESIZE
========================= */

window.addEventListener('resize', () => {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
})