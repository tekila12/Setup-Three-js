import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Eyeball from "./Eyeball";
import './App.css';

function App() {
  return (
    <div className="App">
    <Canvas clasName="canvas">
        <OrbitControls enableZoom={false} />
        <ambientLight intensity={0.5} />
        <directionalLight position={[-2, 5, 2]} />
        <Suspense fallback={null}>
          <Eyeball scale={25.01}  position={[1, 1, 2]} />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default App;
