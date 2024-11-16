let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, .1, 100)
camera.position.z = 5
scene.add(camera)

let box = new THREE.BoxGeometry(1, 1, 1)
let material = new THREE.MeshBasicMaterial({color: "red"})
let mesh = new THREE.Mesh(box, material)
scene.add(mesh)



const canvas = document.querySelector("#draw")
let renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.render(scene, camera)

function animate(){
    window.requestAnimationFrame(animate)
    renderer.render(scene, camera)
    mesh.rotation.z += 0.01
    mesh.rotation.x += 0.01
}
animate()
