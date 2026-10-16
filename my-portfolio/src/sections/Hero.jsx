import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Stage } from "@react-three/drei";

// 1. Separate component to safely load the 3D Model
const DesktopModel = () => {
  // Path points directly to the public folder
  const modelPath = `${import.meta.env.BASE_URL.replace(
    /\/+$/,
    ""
  )}/models/pc.glb`;
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={1.5} position={[0, -1, 0]} />;
};

// 2. Main Hero Component
const Hero = () => {
  return (
    <section className="hero-container">
      {/* HTML Overlay text content */}
      <div className="hero-content">
        <h1 className="hero-title">
          Hi, I'm <span className="highlight">Sachith Prabhasana</span>
        </h1>
        <p className="hero-subtitle">
          I develop user interfaces, full-stack web applications, and
          interactive experiences.
        </p>
      </div>

      {/* Three.js 3D Canvas Background */}
      <div className="canvas-wrapper">
        <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
          {/* Ambient light so the model isn't completely pitch black */}
          <ambientLight intensity={0.7} />
          {/* Directional light to cast clean highlights */}
          <directionalLight position={[10, 10, 10]} intensity={1.5} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} />

          <Suspense fallback={null}>
            <Stage environment="city" intensity={0.6}>
              <DesktopModel />
            </Stage>
          </Suspense>

          {/* Allows user to drag/rotate the model slightly, disabling zoom keeps it clean */}
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 3}
          />
        </Canvas>
      </div>

      {/* Animated Scroll Mouse Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
