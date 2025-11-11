import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';
import { VRButton } from 'three/addons/webxr/VRButton.js';

////////////////////////ESCENA//////////////////
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

		
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				renderer.setAnimationLoop( animate );
				renderer.xr.enabled = true;
				renderer.xr.setReferenceSpaceType( 'local' );
				

				document.body.appendChild( VRButton.createButton( renderer ) );

//SKYBOX/////////////////////////
const loader = new THREE.CubeTextureLoader();
loader.setPath( 'modelos/textures/skybox/' );

const textureCube = loader.load( [
	'px.png', 'nx.png',
	'py.png', 'ny.png',
	'pz.png', 'nz.png'
] );
scene.background = textureCube
////TEXTURA///////////////////
const madera = new THREE.TextureLoader().load('modelos/textures/madera/weathered_brown_planks_diff_16k.jpg' ); 
const madera1 = new THREE.TextureLoader().load('modelos/textures/madera/weathered_brown_planks_nor_gl_16k.exr' ); 
const SUELO = new THREE.MeshPhongMaterial( { map:madera, normalMap:madera1} );

const tapete = new THREE.TextureLoader().load('modelos/textures/alfombra.jpg' ); 
const alfombra = new THREE.MeshPhongMaterial( { map:tapete} );

const PARED = new THREE.TextureLoader().load('modelos/textures/pared.jpg' ); 
const PAREDCITA = new THREE.MeshPhongMaterial( { map:PARED} );

const material34 = new THREE.MeshStandardMaterial({ emissive: 0xffff00, emissiveIntensity: 1, metalness: 0.5, transparent: true, opacity: 0.8 });

//CAMARA////////////////////

const manager = new THREE.LoadingManager();
const loaderFbx = new FBXLoader( manager );

const controls = new OrbitControls( camera, renderer.domElement );
				controls.target.set( 0, 0, 0 );
				controls.update();


	

                
//ESCENA////////////////////////////

const Piso = new THREE.BoxGeometry( 10, 0.2, 10 );
const cube1 = new THREE.Mesh( Piso, SUELO );
scene.add( cube1 );
cube1.position.set(-15,0,5)
cube1.rotation.set(0,1.57,0)

const Piso2 = new THREE.BoxGeometry( 10, 0.2, 10 );
const cube11 = new THREE.Mesh( Piso2, SUELO );
scene.add( cube11 );
cube11.position.set(-5,0,5)
cube11.rotation.set(0,1.57,0)
const Piso3 = new THREE.BoxGeometry( 10, 0.2, 10 );
const cube12 = new THREE.Mesh( Piso3, SUELO );
scene.add( cube12 );
cube12.position.set(5,0,5)
cube12.rotation.set(0,1.57,0)
const Piso4 = new THREE.BoxGeometry( 10, 0.2, 10 );
const cube13 = new THREE.Mesh( Piso4, SUELO );
scene.add( cube13 );
cube13.position.set(15,0,5)
cube13.rotation.set(0,1.57,0)

const Piso5 = new THREE.BoxGeometry( 10, 0.2, 10 );
const cube14 = new THREE.Mesh( Piso5, SUELO );
scene.add( cube14 );
cube14.position.set(-15,0,-5)
cube14.rotation.set(0,1.57,0)
const Piso6 = new THREE.BoxGeometry( 10, 0.2, 10 );
const cube15 = new THREE.Mesh( Piso6, SUELO );
scene.add( cube15 );
cube15.position.set(-5,0,-5)
cube15.rotation.set(0,1.57,0)
const Piso7 = new THREE.BoxGeometry( 10, 0.2, 10 );
const cube16 = new THREE.Mesh( Piso7, SUELO );
scene.add( cube16 );
cube16.position.set(5,0,-5)
cube16.rotation.set(0,1.57,0)

const Piso8 = new THREE.BoxGeometry( 10, 0.2, 10 );
const cube17 = new THREE.Mesh( Piso8, SUELO );
scene.add( cube17 );
cube17.position.set(15,0,-5)
cube17.rotation.set(0,1.57,0)

const Piso9 = new THREE.BoxGeometry( 20, 0.2, 20 );
const cube18 = new THREE.Mesh( Piso9, alfombra );
scene.add( cube18 );
cube18.position.set(10,0,-20)
cube18.rotation.set(0,1.57,0)

const Piso10 = new THREE.BoxGeometry( 20, 0.2, 20 );
const cube19 = new THREE.Mesh( Piso10, alfombra );
scene.add( cube19 );
cube19.position.set(-10,0,-20)
cube19.rotation.set(0,1.57,0)

const ParedSalida = new THREE.BoxGeometry( 40, 20, 1 );
const material7 = new THREE.MeshPhongMaterial( { color: 0xFFF569 } );
const cube5 = new THREE.Mesh( ParedSalida, material7 );
scene.add( cube5);
cube5.position.set(0,5,-30)

const Pared = new THREE.BoxGeometry( 1, 20, 40 );
const cube6 = new THREE.Mesh( Pared, PAREDCITA );
scene.add( cube6);
cube6.position.set(20,5,-10)

const Pared1 = new THREE.BoxGeometry( 1, 20, 40 );
const cube7 = new THREE.Mesh( Pared1, PAREDCITA );
scene.add( cube7);
cube7.position.set(-20,5,-10)

const sal = new THREE.BoxGeometry( 1.5, 10, 1.5 );
const material10 = new THREE.MeshPhongMaterial( { color: 0x2B2B2B} );
const cube8 = new THREE.Mesh( sal, material10 );
scene.add( cube8);
cube8.position.set(-3,5,-29)

const sal1 = new THREE.BoxGeometry( 1.5, 10, 1.5 );
const material11 = new THREE.MeshPhongMaterial( { color: 0x2B2B2B} );
const cube9 = new THREE.Mesh( sal1, material11 );
scene.add( cube9);
cube9.position.set(3,5,-29)

const sal2 = new THREE.BoxGeometry( 7.5, 1.5, 1.5 );
const material12 = new THREE.MeshPhongMaterial( { color: 0x2B2B2B} );
const cube10 = new THREE.Mesh( sal2, material12 );
scene.add( cube10);
cube10.position.set(0,10,-28.9)

const sal3 = new THREE.BoxGeometry( 7, 10, 0.5 );
const material13 = new THREE.MeshBasicMaterial( { color: 0x000000} );
const cube20 = new THREE.Mesh( sal3, material13 );
scene.add( cube20);
cube20.position.set(0,5,-29)

const bara = new THREE.BoxGeometry( 17, 1, 1 );
const material14 = new THREE.MeshPhongMaterial( { color: 0x361B06} );
const cube21 = new THREE.Mesh( bara, material14 );
scene.add( cube21);
cube21.position.set(-11,3,-29)

const bara1 = new THREE.BoxGeometry( 17, 1, 1 );
const material15 = new THREE.MeshPhongMaterial( { color: 0x361B06} );
const cube22 = new THREE.Mesh( bara1, material15 );
scene.add( cube22);
cube22.position.set(11,3,-29)

const bara2 = new THREE.BoxGeometry( 17, 1, 1 );
const cube23 = new THREE.Mesh( bara2, material15 );
scene.add( cube23);
cube23.position.set(-11,10,-29)

const bara3 = new THREE.BoxGeometry( 17, 1, 1 );
const cube24 = new THREE.Mesh( bara3, material15 );
scene.add( cube24);
cube24.position.set(11,10,-29)

const bara4 = new THREE.BoxGeometry( 1, 17, 1 );
const cube25 = new THREE.Mesh( bara4, material15 );
scene.add( cube25);
cube25.position.set(-11,7,-29)

const bara5 = new THREE.BoxGeometry( 1, 17, 1 );
const cube26 = new THREE.Mesh( bara5, material15 );
scene.add(cube26);
cube26.position.set(11,7,-29)

const metal = new THREE.BoxGeometry( 40, 2, 1 );
const material18 = new THREE.MeshPhongMaterial( { color: 0xC7C7C7} );
const cube27 = new THREE.Mesh( metal, material18 );
scene.add(cube27);
cube27.position.set(0,15,-28)

const metal1 = new THREE.BoxGeometry( 2, 2, 40 );
const cube28 = new THREE.Mesh( metal1, material18 );
scene.add(cube28);
cube28.position.set(-20,15.1,-9)

const metal2 = new THREE.BoxGeometry( 2, 2, 40 );
const cube29 = new THREE.Mesh( metal2, material18 );
scene.add(cube29);
cube29.position.set(20,15.1,-9)


  
/////FBX///////////////
loaderFbx.load("modelos/maquina.fbx", function(object){
    object.scale.x=0.013;
    object.scale.y=0.013;
    object.scale.z=0.013;

    object.position.set(0,0.4,-8)
    object.rotation.y = 0;
        scene.add(object)
})
 //tobogan//
loaderFbx.load("modelos/Tobogan.fbx", function(object){
    object.scale.x=0.013;
    object.scale.y=0.013;
    object.scale.z=0.013;

    object.position.set(19,0,3)
    object.rotation.y = 1.55;
        scene.add(object)
})
loaderFbx.load("modelos/Tobogan.fbx", function(object){
    object.scale.x=0.013;
    object.scale.y=0.013;
    object.scale.z=0.013;

    object.position.set(19,0,-7)
    object.rotation.y = 1.55;
        scene.add(object)
})
loaderFbx.load("modelos/Tobogan.fbx", function(object){
    object.scale.x=0.013;
    object.scale.y=0.013;
    object.scale.z=0.013;

    object.position.set(19,0,-18)
    object.rotation.y = 1.55;
        scene.add(object)
})
loaderFbx.load("modelos/Tobogan.fbx", function(object){
    object.scale.x=0.013;
    object.scale.y=0.013;
    object.scale.z=0.013;

    object.position.set(-19,0,3)
    object.rotation.y = -1.55;
        scene.add(object)

})
loaderFbx.load("modelos/Tobogan.fbx", function(object){
    object.scale.x=0.013;
    object.scale.y=0.013;
    object.scale.z=0.013;

    object.position.set(-19,0,-7)
    object.rotation.y = -1.55;
        scene.add(object)
})
loaderFbx.load("modelos/Tobogan.fbx", function(object){
    object.scale.x=0.013;
    object.scale.y=0.013;
    object.scale.z=0.013;

    object.position.set(-19,0,-18)
    object.rotation.y = -1.55;
        scene.add(object)
})
loaderFbx.load("modelos/arbolito.fbx", function(object){
    object.scale.x=0.013;
    object.scale.y=0.013;
    object.scale.z=0.013;

    object.position.set(-8,0,-25)
    object.rotation.y = 0;
        scene.add(object)
})
loaderFbx.load("modelos/Techo.fbx", function(object){
    object.scale.x=0.014;
    object.scale.y=0.014;
    object.scale.z=0.014;

    object.position.set(0,-2,-7)
    object.rotation.y = 0;
        scene.add(object)
})

//REGALOS///////////////////////////////
loaderFbx.load("modelos/REGALOS.fbx", function(object){
    object.scale.x=0.013;
    object.scale.y=0.013;
    object.scale.z=0.013;

    object.position.set(-0.5,-0.5,-23)
    object.rotation.y = 0;
        scene.add(object)
})
loaderFbx.load("modelos/REGALOS.fbx", function(object){
    object.scale.x=0.01;
    object.scale.y=0.01;
    object.scale.z=0.01;

    object.position.set(-25,-0.5,-23)
    object.rotation.y = 0;
        scene.add(object)
})
loaderFbx.load("modelos/ROJO.fbx", function(object){
    object.scale.x=0.01;
    object.scale.y=0.01;
    object.scale.z=0.01;

    object.position.set(0,-0.5,-23)
    object.rotation.y = 0;
        scene.add(object)
})
loaderFbx.load("modelos/AZUL.fbx", function(object){
    object.scale.x=0.01;
    object.scale.y=0.01;
    object.scale.z=0.01;

    object.position.set(5,1,-15)
    object.rotation.y = 0;
        scene.add(object)
})
loaderFbx.load("modelos/VERDE.fbx", function(object){
    object.scale.x=0.01;
    object.scale.y=0.01;
    object.scale.z=0.01;

    object.position.set(2.5,1,-10)
    object.rotation.y = 0;
        scene.add(object)
})
loaderFbx.load("modelos/AMARILLO.fbx", function(object){
    object.scale.x=0.01;
    object.scale.y=0.01;
    object.scale.z=0.01;

    object.position.set(-3.3,0.5,-5)
    object.rotation.y = 0;
        scene.add(object)
})
loaderFbx.load("modelos/Osito.fbx", function(object){
    object.scale.x=0.01;
    object.scale.y=0.01;
    object.scale.z=0.01;

    object.position.set(-0.5,0.7,0)
    object.rotation.y = 4;
        scene.add(object)
})
loaderFbx.load("modelos/ROJO.fbx", function(object){
    object.scale.x=0.017;
    object.scale.y=0.017;
    object.scale.z=0.017;

    object.position.set(-15,0,-3)
    object.rotation.y = 4;
        scene.add(object)
})
loaderFbx.load("modelos/AZUL.fbx", function(object){
    object.scale.x=0.017;
    object.scale.y=0.017;
    object.scale.z=0.017;

    object.position.set(10,0,3)
    object.rotation.y = 4;
        scene.add(object)
})

//personajesssssssssssssssss//
let mixer;
const clock = new THREE.Clock();
loaderFbx.load("modelos/duende.fbx", function(object1){
    object1.scale.x=0.004;
    object1.scale.y=0.004;
    object1.scale.z=0.004;

    object1.position.set(10,0,0)
    object1.rotation.y = 0;
        scene.add(object1)
		 

						mixer = new THREE.AnimationMixer( object1 );

						const action = mixer.clipAction( object1.animations[ 0 ] );
						action.play();
})
let mixer1;
loaderFbx.load("modelos/duende1.fbx", function(object2){
    object2.scale.x=0.004;
    object2.scale.y=0.004;
    object2.scale.z=0.004;

    object2.position.set(-10,0,-10)
    object2.rotation.y = 0;
        scene.add(object2)
		 

						mixer1 = new THREE.AnimationMixer( object2 );

						const action = mixer1.clipAction( object2.animations[ 0 ] );
						action.play();
})
loaderFbx.load("modelos/PAPANOEL.fbx", function(object){
    object.scale.x=0.016;
    object.scale.y=0.016;
    object.scale.z=0.016;

    object.position.set(-10,-0.5,5)
    object.rotation.y = -1;
        scene.add(object)
})

//LAMPARAS//////////////////////
const hilo = new THREE.BoxGeometry( 0.2, 5, 0.2 );
const cube30 = new THREE.Mesh( hilo, material18 );
scene.add(cube30);
cube30.position.set(-12,18,0)

const Lampara1 = new THREE.BoxGeometry( 1, 3, 1 );
const cube31 = new THREE.Mesh( Lampara1, material34 );
scene.add(cube31);
cube31.position.set(-12,16,0)

const hilo1 = new THREE.BoxGeometry( 0.2, 5, 0.2 );
const cube32 = new THREE.Mesh( hilo1, material18 );
scene.add(cube32);
cube32.position.set(12,18,0)

const Lampara2 = new THREE.BoxGeometry( 1, 3, 1 );
const cube33 = new THREE.Mesh( Lampara2, material34 );
scene.add(cube33);
cube33.position.set(12,16,0)

const hilo2 = new THREE.BoxGeometry( 0.2, 5, 0.2 );
const cube34 = new THREE.Mesh( hilo2, material18 );
scene.add(cube34);
cube34.position.set(-12,18,-15)

const Lampara3 = new THREE.BoxGeometry( 1, 3, 1 );
const cube35 = new THREE.Mesh( Lampara3, material34 );
scene.add(cube35);
cube35.position.set(-12,16,-15)

const hilo4 = new THREE.BoxGeometry( 0.2, 5, 0.2 );
const cube36 = new THREE.Mesh( hilo4, material18 );
scene.add(cube36);
cube36.position.set(12,18,-15)

const Lampara5 = new THREE.BoxGeometry( 1, 3, 1 );
const cube37 = new THREE.Mesh( Lampara5, material34 );
scene.add(cube37);
cube37.position.set(12,16,-15)

///LUCES/////////////
const Ambientlight = new THREE.AmbientLight( 0xB5B5B5 ); 
scene.add( Ambientlight );

camera.position.z = 8;
camera.position.y = 2;

const light = new THREE.DirectionalLight(0xFFFFE5, 1);
light.position.set(0,4,7);
scene.add(light);

function animate() {
    const delta = clock.getDelta();

	if ( mixer ) mixer.update( delta );
	if ( mixer1 ) mixer1.update( delta );
  renderer.render( scene, camera );

}