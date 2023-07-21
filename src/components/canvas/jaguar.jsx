import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";
import { useAnimation } from "framer-motion";

function Model(props) {
    const group = useRef()
    const { nodes, materials, animations } = useGLTF('./jaguar/scene.gltf')
    const { actions } = useAnimations(animations, group)
    const [name, setName] = useState("roar");
    const [isClick, setIsClick] = useState(false);

    const handleClick = () => {
      console.log('oioe')
      setName("roar");
      setIsClick(true);
    };

  useEffect(() => {
    console.log("animatins", actions)
    actions?.stand.play();
    if(isClick) {
      console.log('oioe', actions)
      actions?.stand.stop();
      actions[name].reset().play()
      
    }
  })

    return (
      <group ref={group} {...props} dispose={null}>
        <group name="Sketchfab_Scene">
          <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
            <group name="4f502088e11e478bb05e862f4f9bb16afbx" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Object_2">
                <group name="RootNode">
                  <group name="Jaguar_Geo01">
                    <group name="body01" />
                    <group name="jaws01" />
                    <group name="whiskers01" />
                  </group>
                  <group name="ambientLight1">
                    <group name="Object_9" rotation={[Math.PI / 2, 0, 0]}>
                      <group name="Object_10" />
                    </group>
                  </group>
                  <group name="Master_ctrl01">
                    <group name="joints01">
                      <group name="Object_13">
                        <primitive scale={0.019} object={nodes._rootJoint} />
                        <skinnedMesh onClick={handleClick} name="Object_15" geometry={nodes.Object_15.geometry} material={materials.Default_Material} skeleton={nodes.Object_15.skeleton} />
                        <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.Default_Material} skeleton={nodes.Object_16.skeleton} />
                        <skinnedMesh name="Object_17" geometry={nodes.Object_17.geometry} material={materials.Default_Material} skeleton={nodes.Object_17.skeleton} />
                      </group>
                    </group>
                    <group name="leg_r_g_ctrl01">
                      <group name="leg_r_ctrl01" position={[-14.44, 0, -106.56]}>
                        <group name="ankle_r_tarsus_pivot01" position={[0, 36.18, -0.07]}>
                          <group name="toe_r_tip_pivot01" position={[-0.61, -36.18, 25.55]}>
                            <group name="swivel_r_foot_pivot01" position={[0.61, 10.31, -20.75]}>
                              <group name="toe_r_tap_pivot01">
                                <group name="ik_r_tarsusl01" />
                                <group name="ik_r_toes01" position={[0, -4.64, 7.37]} />
                              </group>
                              <group name="heel_r_foot_peel_pivot01" rotation={[0.18, 0, 0]}>
                                <group name="ik_femur_r_tibia01" position={[0, 25.87, -4.8]} />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="leg_r_g_Polev01" position={[20.44, 0, 99]}>
                          <group name="leg_r_Polev01" position={[-20.44, 28.59, 122.07]} />
                        </group>
                      </group>
                    </group>
                    <group name="arm_l_g_ctrl01">
                      <group name="arm_l_ctrl01" position={[14.44, 0, 43]}>
                        <group name="ankle_l_carpal_pivot01" position={[0, 24.44, 3]}>
                          <group name="finger_l_tip_pivot01" position={[0.41, -24.44, 25.4]}>
                            <group name="swivel_l_hand_pivot01" position={[-0.41, 10.48, -22.28]}>
                              <group name="finger_l_tap_pivot01">
                                <group name="ik_l_carpal01" />
                                <group name="ik_l_fingers01" position={[0, -4.5, 7.69]} />
                              </group>
                              <group name="heel_l_hand_peel_pivot01" rotation={[0.19, 0, 0]}>
                                <group name="ik_humerus_l_radius01" position={[0, 13.95, -3.12]} />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="arm_l_g_Polev01" position={[-20.44, 0, -63]}>
                          <group name="arm_l_Polev01" position={[20.44, 28.59, -142.1]} />
                        </group>
                      </group>
                    </group>
                    <group name="arm_r_g_ctrl01">
                      <group name="arm_r_ctrl01" position={[-14.44, 0, 63]}>
                        <group name="ankle_r_carpal_pivot01" position={[0, 24.44, 3]}>
                          <group name="finger_r_tip_pivot01" position={[-0.41, -24.44, 25.4]}>
                            <group name="swivel_r_hand_pivot01" position={[0.41, 10.48, -22.28]}>
                              <group name="finger_r_tap_pivot01">
                                <group name="ik_r_carpal01" />
                                <group name="ik_r_fingers01" position={[0, -4.5, 7.69]} />
                              </group>
                              <group name="heel_r_hand_peel_pivot01">
                                <group name="ik_humerus_r_radius01" position={[0, 13.95, -3.12]} />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="arm_r_g_Polev01" position={[20.44, 0, -63]}>
                          <group name="arm_r_Polev01" position={[-20.44, 28.59, -142.1]} />
                        </group>
                      </group>
                    </group>
                    <group name="leg_l_g_ctrl01">
                      <group name="leg_l_ctrl01" position={[14.44, 0, -67.24]}>
                        <group name="ankle_l_tarsus_pivot01" position={[0, 36.18, -0.07]}>
                          <group name="toe_l_tip_pivot01" position={[0.61, -36.18, 25.55]}>
                            <group name="swivel_l_foot_pivot01" position={[-0.61, 10.31, -20.75]}>
                              <group name="toe_l_tap_pivot01">
                                <group name="ik_l_tarsusl01" />
                                <group name="ik_l_toes01" position={[0, -4.64, 7.36]} />
                              </group>
                              <group name="heel_l_foot_peel_pivot01" rotation={[-0.28, 0, 0]}>
                                <group name="ik_femur_l_tibia01" position={[0, 25.87, -4.8]} />
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="leg_l_g_Polev01" position={[-20.44, 0, 99]}>
                          <group name="leg_l_Polev01" position={[20.44, 28.59, 122.07]} />
                        </group>
                      </group>
                    </group>
                    <group name="root_g_ctrl01">
                      <group name="root_ctrl01" position={[0, 106.32, -72.12]}>
                        <group name="spine_g_ctrl_a01" position={[0, -106.32, 72.12]}>
                          <group name="spine_ctrl_a01" position={[0, 106.32, -37.56]}>
                            <group name="spine_g_ctrl_b01" position={[0, -106.32, 37.56]}>
                              <group name="spine_ctrl_b01" position={[0, 106.32, -3]}>
                                <group name="spine_g_ctrl_c01" position={[0, -106.32, 3]}>
                                  <group name="spine_ctrl_c01" position={[0, 106.32, 31.56]}>
                                    <group name="shoulders_g_ctrl01" position={[0, -106.32, -31.56]}>
                                      <group name="shoulders_ctrl01" position={[0, 106.32, 66.12]}>
                                        <group name="neck_g_ctrl01" position={[0, -106.32, -66.12]}>
                                          <group name="neck_ctrl01" position={[0, 0, 82.17]} rotation={[-0.12, 0, 0]}>
                                            <group name="head_g_ctrl01" position={[0, -115.06, -82.17]}>
                                              <group name="head_ctrl01" position={[0, 124.31, 109]} rotation={[0.28, 0, 0]}>
                                                <group name="lowerjaw_g_ctrl01" position={[0, -124.31, -109]}>
                                                  <group name="lowerjaw_ctrl01" position={[0, 118.47, 122.72]} rotation={[-Math.PI / 6, 0, 0]}>
                                                    <group name="low_lip_g_ctrl01" position={[0, -118.47, -122.72]}>
                                                      <group name="low_lip_ctrl01" position={[0, 0, 150.74]} />
                                                    </group>
                                                  </group>
                                                </group>
                                                <group name="whiskers_l_g_ctrl01" position={[0, -124.31, -109]}>
                                                  <group name="whiskers_l_ctrl01" position={[8.44, 13, 156.65]} />
                                                </group>
                                                <group name="whiskers_r_g_ctrl01" position={[0, -124.31, -109]}>
                                                  <group name="whiskers_r_ctrl01" position={[-8.44, 13, 156.65]} />
                                                </group>
                                                <group name="nose_g_ctrl01" position={[0, -124.31, -109]}>
                                                  <group name="nose_ctrl01" position={[0, 6, 162.13]} />
                                                </group>
                                                <group name="eyebrow_l_g_ctrl01" position={[0, -124.31, -109]}>
                                                  <group name="eyebrow_l_ctrl01" position={[11.59, 7, 147.05]} />
                                                </group>
                                                <group name="eyebrow_r_g_ctrl01" position={[0, -124.31, -109]}>
                                                  <group name="eyebrow_r_ctrl01" position={[-11.59, 7, 147.05]} />
                                                </group>
                                                <group name="lip_l_g_ctrl01" position={[0, -124.31, -109]}>
                                                  <group name="lip_l_ctrl01" position={[10.17, 23.63, 60]} />
                                                </group>
                                                <group name="lip_r_g_ctrl01" position={[0, -124.31, -109]}>
                                                  <group name="lip_r_ctrl01" position={[-10.17, 23.63, 60]} />
                                                </group>
                                                <group name="ear_l_g_ctrl01" position={[0, -124.31, -109]}>
                                                  <group name="ear_l_ctrl01" position={[18.09, 137.7, 115.61]} />
                                                </group>
                                                <group name="ear_r_g_ctrl01" position={[0, -124.31, -109]}>
                                                  <group name="ear_r_ctrl01" position={[-18.09, 137.7, 115.61]} />
                                                </group>
                                                <group name="eyelids_l_g_box01" position={[0, -124.31, -109]}>
                                                  <group name="eyelids_l_box01" position={[20, 129.03, 143.17]}>
                                                    <group name="eyelids_l_g_ctrl01" position={[-20, -129.03, -143.17]}>
                                                      <group name="eyelids_l_ctrl01" position={[20, 1, 143.17]} />
                                                    </group>
                                                  </group>
                                                </group>
                                                <group name="eyelids_r_g_box01" position={[0, -124.31, -109]}>
                                                  <group name="eyelids_r_box01" position={[-20, 129.03, 143.17]}>
                                                    <group name="eyelids_r_g_ctrl01" position={[20, -129.03, -143.17]}>
                                                      <group name="eyelids_r_ctrl01" position={[-20, 1, 143.17]} />
                                                    </group>
                                                  </group>
                                                </group>
                                              </group>
                                            </group>
                                          </group>
                                        </group>
                                        <group name="humerus_l_g_ctrl01" position={[0, -106.32, -66.12]}>
                                          <group name="humerus_l_ctrl01" position={[20.44, 12, 12]}>
                                            <group name="shoulderblade_l_g_ctrl01" position={[-20.44, -92.18, -70.95]}>
                                              <group name="shoulderblade_l_ctrl01" position={[17.12, 92.18, 70.95]} rotation={[-0.7, 0, 0]} />
                                            </group>
                                          </group>
                                        </group>
                                        <group name="humerus_r_g_ctrl01" position={[0, -106.32, -66.12]}>
                                          <group name="humerus_r_ctrl01" position={[-20.44, 12, 12]}>
                                            <group name="shoulderblade_r_g_ctrl01" position={[20.44, -92.18, -70.95]}>
                                              <group name="shoulderblade_r_ctrl01" position={[-17.12, 92.18, 70.95]} />
                                            </group>
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="tail_g_ctrl_a01" position={[0, -106.32, 72.12]}>
                          <group name="tail_ctrl_a01" position={[0, 125.44, -100.14]} rotation={[-0.7, -0.04, -0.03]}>
                            <group name="tail_g_ctrl_b01" position={[0, -125.44, 100.14]}>
                              <group name="tail_ctrl_b01" position={[0, 119.54, -116.39]} rotation={[-0.14, -0.05, -0.01]}>
                                <group name="tail_g_ctrl_c01" position={[0, -119.54, 116.39]}>
                                  <group name="tail_ctrl_c01" position={[0, 114.51, -132.92]} rotation={[-0.14, -0.05, -0.01]}>
                                    <group name="tail_g_ctrl_d01" position={[0, -114.51, 132.92]}>
                                      <group name="tail_ctrl_d01" position={[0, 110.34, -149.69]} rotation={[-0.14, -0.05, -0.01]}>
                                        <group name="tail_g_ctrl_e01" position={[0, -110.34, 149.69]}>
                                          <group name="tail_ctrl_e01" position={[0, 107.06, -166.66]} rotation={[-0.14, -0.05, -0.01]}>
                                            <group name="tail_g_ctrl_f01" position={[0, -107.06, 166.66]}>
                                              <group name="tail_ctrl_f01" position={[0, 104.68, -183.77]} rotation={[0.45, -0.05, 0.02]}>
                                                <group name="tail_g_ctrl_g01" position={[0, -104.68, 183.77]}>
                                                  <group name="tail_ctrl_g01" position={[0, 103.19, -200.99]} rotation={[0.45, -0.05, 0.02]}>
                                                    <group name="tail_g_ctrl_h01" position={[0, -103.19, 200.99]}>
                                                      <group name="tail_ctrl_h01" position={[0, 102.6, -218.26]} rotation={[0.45, -0.05, 0.02]} />
                                                    </group>
                                                  </group>
                                                </group>
                                              </group>
                                            </group>
                                          </group>
                                        </group>
                                      </group>
                                    </group>
                                  </group>
                                </group>
                              </group>
                            </group>
                          </group>
                        </group>
                        <group name="femur_l_g_ctrl01" position={[0, -106.32, 72.12]}>
                          <group name="femur_l_ctrl01" position={[20.44, 107.48, -10]} />
                        </group>
                        <group name="femur_r_g_ctrl01" position={[0, -106.32, 72.12]}>
                          <group name="femur_r_ctrl01" position={[-20.44, 107.48, -10]} />
                        </group>
                      </group>
                    </group>
                  </group>
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    )
  }

const Jaguar = () => {
  /*const modelRef = useRef();
  const { scene, animations } = useGLTF("./jaguar/scene.gltf");
  const clock = new THREE.Clock();
  const [animationIndex, setAnimationIndex] = useState(8);
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length > 0) {
        console.log("animations", animations);
      const newMixer = new THREE.AnimationMixer(scene);
      mixer.current = newMixer;
      const action = newMixer.clipAction(animations[animationIndex]);
      action.setLoop(THREE.LoopRepeat);
      action.time = 1.58;
      action.reset().play();
      newMixer.cache = true;
      const animationDuration = 1.58; // Animation duration in seconds
      let animationTime = 0;

      const animate = () => {
        const delta = clock.getDelta();
        newMixer.update(delta);
        animationTime += delta;
        animationTime %= animationDuration;

        requestAnimationFrame(animate);
      };

      animate();
      return () => newMixer.stopAllAction();
    }
  }, [animations, scene, animationIndex]);*/

/*  const handleClick = () => {



    const newAnimationIndex = 6;
  setAnimationIndex(newAnimationIndex);
const action = mixer.current.clipAction(animations[newAnimationIndex]);
action.reset().play();
  };*/
    

      
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight position={[-20, 50, 10]} intensity={1} />
      <pointLight intensity={1} />
      <primitive
        object={scene}
        ref={modelRef}
        scale={0.019}
        position={[0, -3.25, -1.5]}
        rotation={[0, Math.PI / 2, 0]}
      />
    </mesh>
  );
};

const JaguarCanvas = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
        <ambientLight intensity={1}/>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={true} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Model />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default JaguarCanvas;
