// console.log("hello 3js");
// console.log(THREE)

//scene 
const scene = new THREE.Scene()

//red cube - we get the code of this from threejs.org docs -> Object 3d -> mesh 
//geometry -> box geoometry 
const geometry = new THREE.BoxGeometry(1,1,1)//box geometry from the 3 var  
const material = new THREE.MeshBasicMaterial({color : '#FEBFBF'})

const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

//sizes 
const sizes = {
    width : 1000 , 
    height : 1000 
}

//camera 
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3 
camera.position.x = 2
camera.position.y = 1


scene.add(camera)
 
//renderer creating 
//the dom element including here 
const canvas = document.querySelector('.webgl')
console.log(canvas)

const renderer = new THREE.WebGLRenderer({
    //canvas: canvas
    canvas : canvas
})
renderer.setSize(sizes.width,sizes.height)

renderer.render(scene,camera)
//first render , call the render method on the rendered with the scene and the camera as parameters 
//we need to move the camera inside ,we are outside 
//to transform an object ,we can use the : position rotation and scale 
//we could also move the cube but we'll move the camera 
//the position property is object we move in the xyz axis 
//3js considers the forward/backward axis to be in z 
//move the cam backwards befoe the render 
