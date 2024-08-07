import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float, OrbitControls, Preload, useTexture } from '@react-three/drei';

import CanvasLoader from '../Loader';

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32]} />
        <meshNormalMaterial flatShading />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          map={decal}
        />
      </mesh>
    </Float>
  )
}


const BallCanvas = ({ icon }) => {
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    if (!initialized) {
      setInitialized(true);
    }
  }, [initialized]);

  if (!initialized) {
    return <div></div>
  }

  return (
    <Canvas frameloop='demand'
      gl={{ preserveDrawingBuffer: true, alpha: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
        />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  )
}

export default BallCanvas