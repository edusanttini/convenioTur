import React, { Suspense, useEffect, useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useAnimations, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { isMobile } from "react-device-detect";
import CanvasLoader from "../Loader";

const Jaguar = () => {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("./jaguar/scene.gltf");
  const clock = new THREE.Clock();
  const [animationIndex, setAnimationIndex] = useState(0);
  const mixer = useRef();

  useEffect(() => {
    if (animations && animations.length > 0) {
      const newMixer = new THREE.AnimationMixer(scene);
      mixer.current = newMixer;
      // Loop through each animation and set up actions with correct duration
      animations.forEach((animation, index) => {
        const action = newMixer.clipAction(animation);
        action.setLoop(THREE.LoopRepeat);
        action.time = 0; // Start from the beginning
        action.reset();
        action.clampWhenFinished = true;
        action.setDuration(animation.duration);
        if (index === animationIndex) {
          action.play();
        }
      });
      newMixer.cache = true;
      const animate = () => {
        const delta = clock.getDelta();
        newMixer.update(delta);
        requestAnimationFrame(animate);
      };
      animate();

      return () => newMixer.stopAllAction();
    }
  }, [animations, scene, animationIndex]);
      
  return (
    <>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <spotLight position={[-20, 50, 10]} intensity={1} />
      <pointLight intensity={0.5} />
      <primitive
        object={scene}
        ref={modelRef}
        scale={0.019}
        position={[0, -1, 0]}
      />
      </>
  );
};

const JaguarCanvas = () => {
  const isLowPerformanceDevice = () => {
    const nav = window.navigator;
    return nav && (nav.hardwareConcurrency <=2 || nav.deviceMemory <=4);
  }

  const position = isMobile ? [25, 5, 5] : [20, 3, 5];
  const fov = isMobile ? 15 : 25;
  return (
    isLowPerformanceDevice() ? (
      <div>This device may have trouble rendering the scene.</div>
    ) : (
      <Canvas dpr={[1, 2]} camera={{ position: position, fov: fov }} gl={{ preserveDrawingBuffer: true }}>
        <ambientLight intensity={1}/>
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls autoRotate autoRotateSpeed={0.05} enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
          <Jaguar/>
        </Suspense>
        <Preload all />
      </Canvas>
    )
  );
};

export default JaguarCanvas;
