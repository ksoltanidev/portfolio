import React, { useRef, useEffect, useState } from "react";
import * as dat from 'dat.gui'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { BufferGeometryUtils } from 'three/examples/jsm/utils/BufferGeometryUtils.js'
//import waterVertexShader from 'glslify-loader!../../shaders/grass/vertex.glsl'
//import waterFragmenthader from '!!raw-loader!glslify-loader!../../shaders/grass/fragment.glsl'
//import waterVertexShader from '../../shaders/grass/vertex.glsl'
// import whiteBladeVertexShader from '../../shaders/whiteBlade/vertex.glsl'
// import whiteBladeFragmenthader from '../../shaders/whiteBlade/fragment.glsl'
//import {BufferGeometryUtils} from 'three/examples/jsm/utils/BufferGeometryUtils.js'

//const waterVertexShader = require('raw-loader!glslify-loader!../../shaders/grass/vertex.glsl')

import waterVertexShader from "../../shaders/grass/vertex.js"
import waterFragmenthader from "../../shaders/grass/fragment.js"
import PageEnum from "../../types/PageEnum";
import CameraPosition from "./cameraPositions"
import { gsap } from "gsap";
import { duration } from "@mui/material";

type Props = {
    currentPage: PageEnum
}
let camera: THREE.PerspectiveCamera;

function ThreeScene({ currentPage }: Props) {
    //const [camera, setCamera] = useState<THREE.PerspectiveCamera>()
    const canvasRef = useRef(null);

    /**
     * Debug
     */
    const gui = new dat.GUI({
        width: 400,
    })
    gui.hide()
    /**
     * Sizes
     */
    const sizes = {
        width: window.innerWidth,
        height: window.innerHeight
    }

    useEffect(() => {
        if (CameraPosition && camera) {
            if (currentPage === PageEnum.HOME) {
                gsap.to(camera.position, CameraPosition.TOP.position);
                gsap.to(camera.rotation, CameraPosition.TOP.rotation);
            } else if (currentPage === PageEnum.STORY) {
                gsap.to(camera.position, CameraPosition.TREE_BOTTOM.position);
                gsap.to(camera.rotation, CameraPosition.TREE_BOTTOM.rotation);
            } else if (currentPage === PageEnum.SKILLS) {
                gsap.to(camera.position, CameraPosition.FRONT.position)
                gsap.to(camera.rotation, CameraPosition.FRONT.rotation);
            } else if (currentPage === PageEnum.PROJECTS) {
                gsap.to(camera.position, CameraPosition.ROCK_FLAT.position);
                gsap.to(camera.rotation, CameraPosition.ROCK_FLAT.rotation);
            } else if (currentPage === PageEnum.CONTACT) {
                gsap.to(camera.position, CameraPosition.ROCK_1.position)
                gsap.to(camera.rotation, CameraPosition.ROCK_1.rotation);
            }
        }
    }, [currentPage])

    useEffect(() => {
        // @ts-ignore
        if (!canvasRef.current.children[0]) {
            // === THREE.JS CODE START ===
            const scene = new THREE.Scene();
            scene.background = new THREE.Color("#161313");
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

            camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.01, 40000);
            camera.position.set(15, 2, -4)
            camera.rotation.set(CameraPosition.HOME.rotation.x, CameraPosition.HOME.rotation.y, CameraPosition.HOME.rotation.z, "XYZ")

            const skyboxMaterials = [
                // textureLoader.load("./skybox/space_ft.png"),
                // textureLoader.load("./skybox/space_bk.png"),
                // textureLoader.load("./skybox/space_up.png"),
                // textureLoader.load("./skybox/space_dn.png"),
                // textureLoader.load("./skybox/space_rt.png"),
                // textureLoader.load("./skybox/space_lf.png")
                textureLoader.load("./skybox1/1.png"),
                textureLoader.load("./skybox1/2.png"),
                textureLoader.load("./skybox1/3.png"),
                textureLoader.load("./skybox1/4.png"),
                textureLoader.load("./skybox1/5.png"),
                textureLoader.load("./skybox1/6.png")
            ].map(t => new THREE.MeshBasicMaterial({ map: t }));
            skyboxMaterials.forEach(m => m.side = THREE.BackSide)

            console.log(skyboxMaterials)

            const skyboxGeometry = new THREE.BoxGeometry(20000, 20000, 20000);
            const skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterials)
            scene.add(skybox)
            // gui.add(camera.position, "x").min(-30).max(30).step(0.01).name("Camera X");
            // gui.add(camera.position, "y").min(-30).max(30).step(0.01).name("Camera Y");
            // gui.add(camera.position, "z").min(-30).max(30).step(0.01).name("Camera Z");

            /**
             * Renderer
             */
            // @ts-ignore
            const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true, /*alpha: true*/ });
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
                depthColor: '#000000',
                surfaceColor: '#147faa',
            }
            const grassMaterial = new THREE.ShaderMaterial({
                vertexShader: waterVertexShader,
                fragmentShader: waterFragmenthader,
                side: THREE.DoubleSide,
                uniforms: {
                    uTime: { value: 0.0 },
                    uBigWavesSpeed: { value: 1 },
                    uBigWavesElevation: { value: 0.12 },
                    uBigWavesFrequency: { value: new THREE.Vector2(4, 1.5) },
                    uDepthColor: { value: new THREE.Color(grassParameter.depthColor) },
                    uSurfaceColor: { value: new THREE.Color(grassParameter.surfaceColor) },
                    //uColorOffset : {value: 0.35},
                    //uColorMultiplier : {value: 0.7},
                }
            })

            gui.add(grassMaterial.uniforms.uBigWavesElevation, "value").min(0).max(1).step(0.001).name("Grass Waves Elevation");
            gui.add(grassMaterial.uniforms.uBigWavesFrequency.value, "x").min(0.1).max(20).step(0.01).name("Grass Waves Frequency.X");
            gui.add(grassMaterial.uniforms.uBigWavesFrequency.value, "y").min(0.1).max(20).step(0.01).name("Grass Waves Frequency.Z");
            gui.add(grassMaterial.uniforms.uBigWavesSpeed, "value").min(0).max(5).step(0.01).name("Grass Waves Speed");
            gui.addColor(grassParameter, "depthColor").name("depht Color").onChange(() => grassMaterial.uniforms.uDepthColor.value.set(grassParameter.depthColor));
            gui.addColor(grassParameter, "surfaceColor").name("surface Color").onChange(() => grassMaterial.uniforms.uSurfaceColor.value.set(grassParameter.surfaceColor));

            /**
             * WORLD
             */

            gltfLoader.load(
                'world.glb',
                (gltf) => {
                    gltf.scene.traverse((child) => {
                        //let obj = child.clone()
                        //console.log(child)
                        // @ts-ignore
                        if (child.name === "Light1" || child.name === 'Light2') child.material = lanternMaterial;
                        // @ts-ignore
                        else if (child.name === "ruban1" || child.name === 'ruban2' || child.name === 'ruban_base') child.material = rubanMaterial;
                        //else if (child.name === "Grass" ) child.material = grassMaterial;
                        // else if (child.name === "fullBlade1" ) {
                        //     child.material = bladeWhiteMaterial;
                        //     blade1 = child;
                        // }
                        // else if (child.name === "fullBlade2" ) child.material = bladeWhiteMaterial;
                        // @ts-ignore
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
                                    // @ts-ignore
                                    let grassGeometries = [];
                                    grass_gltf.scene.traverse((particle) => {
                                        if (particle.name !== 'Scene') {
                                            // @ts-ignore
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
                                    // @ts-ignore
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
            // @ts-ignore
            const controls = new OrbitControls(camera, canvas)

            /**
             * Animate
             */
            const clock = new THREE.Clock()
            // @ts-ignore
            function animate() {
                const elapsedTime = clock.getElapsedTime()
                grassMaterial.uniforms.uTime.value = elapsedTime;

                // Update controls
                //controls.update()


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
            // @ts-ignore
            function onPositionChange(o) {
                console.log("position: ", o.target.object.position);
                console.log("position: ", o.target.object.rotation);
            }
            controls.addEventListener('change', onPositionChange);

            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
                 controls.removeEventListener('change', onPositionChange);
            };
        }
    }, [])

    return (
        <canvas ref={canvasRef} style={{ height: '100vh', width: '100vw' }}>
        </canvas>
    )
}

export default ThreeScene;