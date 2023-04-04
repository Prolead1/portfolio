/* eslint-disable react/no-unknown-property */
import { OrbitControls } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import * as React from 'react';
import { Model } from './Mymodel';

const ModelRenderer: React.FunctionComponent = () => {
  return (
    <>
      <ambientLight intensity={1.25} />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={0.4} />
      <React.Suspense fallback={null}>
        <Model />
      </React.Suspense>
      <OrbitControls
        enableZoom={true}
        autoRotate={false}
        autoRotateSpeed={0.5}
        enableDamping={true}
        enablePan={false}
      />
    </>
  );
};

export default ModelRenderer;
