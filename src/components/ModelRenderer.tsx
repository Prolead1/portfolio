/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as React from 'react';
import { Model } from './Mymodel';

const ModelRenderer: React.FunctionComponent = () => {
  return (
    <Canvas camera={{ position: [0, 3, 10], fov: 25 }}>
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <React.Suspense fallback={null}>
        <Model />
      </React.Suspense>
      <OrbitControls
        enableZoom={false}
        autoRotate={true}
        autoRotateSpeed={0.5}
        enableDamping={true}
        enablePan={false}
      />
    </Canvas>
  );
};

export default ModelRenderer;
