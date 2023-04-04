/* eslint-disable react/no-unknown-property */
import { Canvas } from '@react-three/fiber';
import * as React from 'react';
import { PerspectiveCamera } from 'three/src/cameras/PerspectiveCamera';
import ModelRenderer from './ModelRenderer';

const CanvasRenderer: React.FunctionComponent = () => {
  return (
    <Canvas camera={{ position: [0, 1.5, 1], fov: 60 }}>
      <ModelRenderer />
      <CameraHelper />
    </Canvas>
  );
};

const CameraHelper: React.FunctionComponent = () => {
  const camera = new PerspectiveCamera(60);
  return (
    <group position={[0, 1.75, 1]}>
      <cameraHelper args={[camera]} />
    </group>
  );
};

export default CanvasRenderer;
