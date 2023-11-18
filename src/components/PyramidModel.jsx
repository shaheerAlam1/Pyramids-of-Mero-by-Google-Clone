import { useGLTF } from "@react-three/drei";
import React from "react";

const PyramidModel = ({ position }) => {
  const model = useGLTF("./model/pyramid.glb");

  return <primitive object={model.scene} position={position} />;
};

export default PyramidModel;

// export default React.forwardRef(PyramidModel);
