import { OrbitControls } from "@react-three/drei";
import gsap from "gsap";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef, useState } from "react";
import PyramidModel from "./PyramidModel";
import { useMemo } from "react";
import { useGLTF, useMatcapTexture } from "@react-three/drei";
import { MeshBasicMaterial, MeshStandardMaterial } from "three";
import { useEffect } from "react";

// import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export default function MeoreExperience({ section }) {
  const model = useGLTF("./model/pyramid.glb");
  const chamberModel = useGLTF("./model/chamber.glb");
  const chapelModel = useGLTF("./model/chapel.glb");
  const [showChapel, setShowChapel] = useState(false);
  // const [matcapTexture] = useMatcapTexture("./textures/matcap.jpg");

  const { camera: myCamera } = useThree();

  useEffect(() => {
    if (section === 0) {
      if (showChapel) {
        setShowChapel(false);
      }
      //model animate to position pyramid postion = [0, -1.3, 0]
      gsap.to(myCamera.position, {
        x: -1.6785902651202775,
        y: -0.4700510573273299,
        z: 4.081910591638225,
        // delay: 7,
        duration: 2,
        // ease: "power2.inOut",
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
      gsap.to(model.scene.position, {
        x: 0,
        y: -1.3,
        z: 0,
        // delay: 7,
        duration: 2,
        // ease: "power2.inOut",
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
    }
    if (section === 1) {
      if (showChapel) {
        setShowChapel(false);
      }
      // model animate to position pyramid postion = [2, -0.5, 0]
      gsap.to(myCamera.position, {
        x: 2.9166169935447744,
        y: 0.8762371620758526,
        z: 4.976915384330257,

        duration: 2,
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
      gsap.to(model.scene.position, {
        x: 2,
        y: -0.5,
        z: 0,
        duration: 2,
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
    }
    if (section === 2) {
      if (showChapel) {
        setShowChapel(false);
      }
      gsap.to(myCamera.position, {
        // model animate to positionposition={[2, -1.5, 0]}

        x: 6.127628483436481,
        y: -0.08552289239503011,
        z: 1.539766513350705,

        // delay: 3,
        duration: 2,
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
      gsap.to(model.scene.position, {
        x: 2,
        y: -1.5,
        z: 0,
        duration: 2,
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
    }
    if (section === 3) {
      if (showChapel) {
        setShowChapel(false);
      }
      const tl3 = gsap.timeline({
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
      tl3
        .to(myCamera.position, {
          x: 1.6746898787332118,
          y: -0.3045002396265362,
          z: -3.383071892745241,
          duration: 2,
        })
        .to(
          model.scene.position,
          {
            x: -1,
            y: -1,
            z: 0,
            duration: 2,
          },
          0
        );
    }
    if (section === 4) {
      if (showChapel) {
        setShowChapel(false);
      }
      const tl4 = gsap.timeline({
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
      tl4
        .to(myCamera.position, {
          //model animate to position position={[-1, -1.2, 1.2]}

          x: -3.782495462317633,
          y: 0.45357093854212904,
          z: -2.2464639942286089,
          // delay: 3,
          duration: 1.2,
          onUpdate: () => {
            myCamera.lookAt(0, 0, 0);
          },
        })
        .to(
          myCamera.position,
          {
            //model animate to position position={[-1, -1.2, 1.2]}

            x: -4.782495462317633,
            y: 0.45357093854212904,
            z: 1.2464639942286089,
            // delay: 3,
            duration: 1,
            onUpdate: () => {
              myCamera.lookAt(0, 0, 0);
            },
          },
          "-=0.2"
        )
        .to(
          model.scene.position,
          {
            x: -1,
            y: -1.2,
            z: 1.2,
            duration: 0.5,
            onUpdate: () => {
              myCamera.lookAt(0, 0, 0);
            },
          },
          0
        );
      // gsap.to(myCamera.position, {
      //   //model animate to position position={[-1, -1.2, 1.2]}

      //   x: -4.782495462317633,
      //   y: 0.45357093854212904,
      //   z: 1.2464639942286089,
      //   // delay: 3,
      //   duration: 2,
      //   onUpdate: () => {
      //     myCamera.lookAt(0, 0, 0);
      //   },
      // });
      // gsap.to(model.scene.position, {
      //   x: -1,
      //   y: -1.2,
      //   z: 1.2,
      //   duration: 2,
      //   onUpdate: () => {
      //     myCamera.lookAt(0, 0, 0);
      //   },
      // });
    }
    if (section === 5) {
      setShowChapel(true);
      const timeline = gsap.timeline({
        onUpdate: () => {
          myCamera.lookAt(0, 0, 0);
        },
      });
      timeline
        .to(myCamera.position, {
          x: 0.19864844175966473,
          y: -0.9384469137181228,
          z: 4.818441110245435,
          duration: 1,
        })
        .to(
          model.scene.position,
          {
            x: 0,
            y: -1.2,
            z: 1.2,
            duration: 1,
          },
          0
        )
        .to(myCamera.position, {
          x: 0.3,
          y: -1,
          z: 3.5,
          duration: 1,
        });
    }
    if (section === 6) {
      setShowChapel(true);
      const timeline = gsap.timeline({
        // onUpdate: () => {
        //   myCamera.lookAt(chamberModel.scene.position);
        // },
      });
      timeline.to(myCamera.position, {
        x: 0.3,
        y: -1,
        z: 3.3,
        duration: 1,
      });

      // .to(myCamera.rotation, {
      //   x: 0,
      //   y: Math.PI / 2,
      //   z: 0,
      //   duration: 2,
      // });
    }
    if (section === 7) {
      const timeline = gsap.timeline({
        onUpdate: () => {
          myCamera.lookAt(chamberModel.scene.position);
        },
      });
      timeline.to(myCamera.position, {
        x: 0.19864844175966473,
        y: -0.9384469137181228,
        z: 5.818441110245435,
        duration: 1,
      });
      // .to(model.scene.position, {
      //   x: 4,
      //   y: 0,
      //   z: 1.2,
      //   duration: 2,
      // })
      // .to(
      //   chamberModel.scene.position,
      //   {
      //     x: 0,
      //     y: -1,
      //     z: 0,
      //     duration: 2,
      //   },
      //   1
      // );
      // .to(myCamera.position, {
      //   x: 1,
      //   y: -1,
      //   z: 8,
      //   duration: 2,
      //   // onUpdate: () => {
      //   //   myCamera.lookAt(0, -1, 0);
      //   // },
      // });

      // .to(myCamera.position, {
      //   x: 0.3,
      //   y: -1,
      //   z: 3.5,
      //   duration: 1,
      // });
    }
  }, [myCamera, section]);

  const mesh = model.scene.children[0];
  const chapelMesh = chapelModel.scene.children[0].children[0];

  mesh.material.color.set("#A26F46");
  mesh.material.fog = false;
  chapelMesh.material.color.set("#A26F46");
  chapelModel.scene.visible = showChapel;
  // chapelModel.scene.children[0].material.color.set("#A26F46");

  // const chapelMesh = chapelModel.scene.children[0];
  // chapelMesh.material.color.set("#A15E30");
  // chamberModel.scene.visible = true;

  // console.log(chamberModel.scene.children[0].material.color.set("red"));
  // chamberModel.scene.children[0].material.wireframe = true;
  // chamberModel.scene.children[0].material.color.set("#E9702F");

  // chamberModel.scene.children[0].color.set("orange");

  //   console.log(viewport);
  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight position={[1, 2, 3]} intensity={2.5} />
      <ambientLight intensity={0.5} />
      <fog attach="fog" args={["ivory", 0, 10]} />

      {/* <PyramidModel position={[0, -1.3, 0]} /> */}
      <primitive object={model.scene} position={[0, -1.3, 0]} />
      <primitive object={chapelModel.scene} position={[0.1, -1.3, 1.2]} />
      {/* <primitive object={chamberModel.scene} position={[0, -1, 0]} /> */}
    </>
  );
}
