import {
  MeshReflectorMaterial,
  Float,
  Text,
  Html,
  PivotControls,
  TransformControls,
  OrbitControls,
} from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

export default function Experience({ section }) {
  const cube = useRef();
  const sphere = useRef();
  useFrame((state, delta) => {
    const myCamera = state.camera;
    if (section === 0) {
      gsap.to(myCamera.position, {
        x: 4,
        y: 2,
        z: 8,
        // delay: 7,
        duration: 3,
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
    }
    if (section === 1) {
      gsap.to(myCamera.position, {
        x: -4,
        y: 2,
        z: 3,

        duration: 3,
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
    }
    if (section === 2) {
      gsap.to(myCamera.position, {
        x: 0,
        y: 1,
        z: -8,

        // delay: 3,
        duration: 3,
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
    }
  });
  return (
    <>
      {/* <OrbitControls makeDefault /> */}

      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <PivotControls
        anchor={[0, 0, 0]}
        depthTest={false}
        lineWidth={4}
        axisColors={["#9381ff", "#ff4d6d", "#7ae582"]}
        scale={200}
        fixed={true}
      >
        <mesh ref={sphere} position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color="orange" />
          {/* <Html
            position={[1, 1, 0]}
            wrapperClass="label"
            center
            distanceFactor={8}
            occlude={[sphere, cube]}
          >
            <h2>hello world from h2</h2>
            <img
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"
              width={300}
            />
            <button>Click me please</button>
            That's a sphere 👍
          </Html> */}
        </mesh>
      </PivotControls>

      <mesh ref={cube} position-x={2} scale={1.5}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <TransformControls object={cube} />

      <mesh position-y={-1} rotation-x={-Math.PI * 0.5} scale={10}>
        <planeGeometry />
        <MeshReflectorMaterial
          resolution={512}
          blur={[1000, 1000]}
          mixBlur={1}
          mirror={0.5}
          color="greenyellow"
        />
      </mesh>

      <Float speed={5} floatIntensity={2}>
        <Text
          font="./bangers-v20-latin-regular.woff"
          fontSize={1}
          color="salmon"
          position-y={2}
          maxWidth={2}
          textAlign="center"
        >
          I LOVE R3F
        </Text>
      </Float>
    </>
  );
}
