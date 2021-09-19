//import './style.css'
import React, {useRef, useEffect} from "react";
import * as dat from 'dat.gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { FlyControls} from 'three/examples/jsm/controls/FlyControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader.js'
import {BufferGeometryUtils} from 'three/examples/jsm/utils/BufferGeometryUtils.js'
//import waterVertexShader from 'glslify-loader!../../shaders/grass/vertex.glsl'
//import waterFragmenthader from '!!raw-loader!glslify-loader!../../shaders/grass/fragment.glsl'
//import waterVertexShader from '../../shaders/grass/vertex.glsl'
// import whiteBladeVertexShader from '../../shaders/whiteBlade/vertex.glsl'
// import whiteBladeFragmenthader from '../../shaders/whiteBlade/fragment.glsl'
//import {BufferGeometryUtils} from 'three/examples/jsm/utils/BufferGeometryUtils.js'

//const waterVertexShader = require('raw-loader!glslify-loader!../../shaders/grass/vertex.glsl')

import waterVertexShader from "../../shaders/grass/vertex.js"
import waterFragmenthader from "../../shaders/grass/fragment.js"

function ThreeScene() {
    const canvasRef = useRef(null);

    /**
     * Base
     */
    // Debug
    // const gui = new dat.GUI({
    //     width: 400,
    // })

    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    useEffect(() => {
        if (!canvasRef.current.children[0]) {
            // === THREE.JS CODE START ===
            const scene = new THREE.Scene();
            scene.background = new THREE.Color( "#161313" );
            const canvas = canvasRef.current;

            /**
             * Loaders
             */
            // Texture loader
            const textureLoader = new THREE.TextureLoader()
            // GLTF loader
            const gltfLoader = new GLTFLoader()

            /**
             * Textures
             */
            const bakedTexture = textureLoader.load('world.jpg')
            /**
             * Camera
             */
            // const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 100);
            
            const camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.01, 1000 );
            camera.position.set(15, 2, -4)
            camera.rotation.set(2.66, 0.2, -2.3, "XYZ")

            // gui.add(camera.position, "x").min(-30).max(30).step(0.01).name("Camera X");
            // gui.add(camera.position, "y").min(-30).max(30).step(0.01).name("Camera Y");
            // gui.add(camera.position, "z").min(-30).max(30).step(0.01).name("Camera Z");

            /**
             * Renderer
             */
            const renderer = new THREE.WebGLRenderer({canvas: canvas, antialias: true, /*alpha: true*/ });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            renderer.outputEncoding = THREE.sRGBEncoding

            //canvasRef.current.appendChild(renderer.domElement);

            /**
             * MATERIALS
             */
            const lanternMaterial = new THREE.MeshBasicMaterial({ color: '#ffffe5' })
            const rubanMaterial = new THREE.MeshBasicMaterial({ color: '#330000' })
            const bakedMaterial = new THREE.MeshBasicMaterial({ map: bakedTexture })
            bakedTexture.flipY = false
            bakedTexture.encoding = THREE.sRGBEncoding

            const grassParameter = {
                depthColor : '#000000',
                surfaceColor : '#147faa',
            }
            const grassMaterial = new THREE.ShaderMaterial({
                vertexShader : waterVertexShader,
                fragmentShader : waterFragmenthader,
                side: THREE.DoubleSide,
                uniforms : {
                    uTime : { value: 0.0},
                    uBigWavesSpeed : { value: 1},
                    uBigWavesElevation : {value: 0.12},
                    uBigWavesFrequency : {value: new THREE.Vector2(4, 1.5)},
                    uDepthColor: { value: new THREE.Color(grassParameter.depthColor)},
                    uSurfaceColor: { value: new THREE.Color(grassParameter.surfaceColor)},
                    //uColorOffset : {value: 0.35},
                    //uColorMultiplier : {value: 0.7},
                }
            })

            // gui.add(grassMaterial.uniforms.uBigWavesElevation, "value").min(0).max(1).step(0.001).name("Grass Waves Elevation");
            // gui.add(grassMaterial.uniforms.uBigWavesFrequency.value, "x").min(0.1).max(20).step(0.01).name("Grass Waves Frequency.X");
            // gui.add(grassMaterial.uniforms.uBigWavesFrequency.value, "y").min(0.1).max(20).step(0.01).name("Grass Waves Frequency.Z");
            // gui.add(grassMaterial.uniforms.uBigWavesSpeed, "value").min(0).max(5).step(0.01).name("Grass Waves Speed");
            // gui.addColor(grassParameter, "depthColor").name("depht Color").onChange(() => grassMaterial.uniforms.uDepthColor.value.set(grassParameter.depthColor));
            // gui.addColor(grassParameter, "surfaceColor").name("surface Color").onChange(() => grassMaterial.uniforms.uSurfaceColor.value.set(grassParameter.surfaceColor));

            /**
             * WORLD
             */

            gltfLoader.load(
                'world.glb',
                (gltf) => {
                    gltf.scene.traverse((child) => {
                        //let obj = child.clone()
                        //console.log(child)
                        if (child.name === "Light1" || child.name === 'Light2') child.material = lanternMaterial;
                        else if (child.name === "ruban1" || child.name === 'ruban2' || child.name === 'ruban_base') child.material = rubanMaterial;
                        //else if (child.name === "Grass" ) child.material = grassMaterial;
                        // else if (child.name === "fullBlade1" ) {
                        //     child.material = bladeWhiteMaterial;
                        //     blade1 = child;
                        // }
                        // else if (child.name === "fullBlade2" ) child.material = bladeWhiteMaterial;
                        else child.material = bakedMaterial
                        //child.material = bakedMaterial
                    })
                    scene.add(gltf.scene)
                }
            )

            /**
             * GRASS
             */

             gltfLoader.load(
                'customGrass.glb', //the grass base model
                (grass_gltf) => {
                    grass_gltf.scene.traverse((grassMesh) => {
                        if (grassMesh.name === "CustomGrass") {
                            gltfLoader.load(
                                'grass_particles.glb', //Vertices with final model position/scale/rotation
                                (grass_gltf) => {
                                    let grassGeometries = [];
                                    grass_gltf.scene.traverse((particle) => {
                                        if (particle.name !== 'Scene'){
                                            const tGrassGeometry = grassMesh.geometry.clone();
                                            tGrassGeometry.rotateZ(particle.rotation.z);
                                            tGrassGeometry.rotateY(particle.rotation.y);
                                            tGrassGeometry.rotateX(particle.rotation.x);
                                            if (particle.scale.x > 0.05) tGrassGeometry.scale(particle.scale.x, particle.scale.x, particle.scale.x);
                                            else tGrassGeometry.scale(0.05, 0.05, 0.05);
                                            tGrassGeometry.translate(particle.position.x, particle.position.y, particle.position.z);
                                            grassGeometries.push(tGrassGeometry);
                                            
                                        }
                                    });
                                    const AllGrassGeometries = BufferGeometryUtils.mergeBufferGeometries(grassGeometries);
                                    const m = new THREE.Mesh(AllGrassGeometries, grassMaterial);
                                    scene.add(m);
                                }
                            )
                        }
                    });
                }
            )

            /**
             * Controls
             */
            const controls = new OrbitControls(camera, canvas)

            /**
             * Animate
             */
            const clock = new THREE.Clock()
            function animate(){
                const elapsedTime = clock.getElapsedTime()
                grassMaterial.uniforms.uTime.value = elapsedTime;

                // Update controls
                controls.update()
                //controls.update(elapsedTime)

                
                renderer.render(scene, camera);
                requestAnimationFrame(animate); 
            };
            animate();


            /**
             * handle threeJS frame resize
             */
             const handleResize = () => {
                sizes.width = window.innerWidth;
                sizes.height = window.innerHeight;
                camera.aspect = sizes.width / sizes.height;
                camera.updateProjectionMatrix();
                renderer.setSize(sizes.width, sizes.height);
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
            }
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('resize', handleResize);
              };
        }
    },[])

    return (
        <canvas ref={canvasRef} style={{height: '100vh', width: '100vw'}}>

        </canvas>
    )
}

export default ThreeScene;