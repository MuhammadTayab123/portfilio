import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Workstation() {
  return <group rotation={[0.02, -0.22, 0]}>
    {/* Monitor frame and glass */}
    <mesh position={[0, 0.65, 0]} castShadow><boxGeometry args={[2.65, 1.72, 0.16]} /><meshStandardMaterial color="#25243a" metalness={0.72} roughness={0.28}/></mesh>
    <mesh position={[0, 0.66, 0.09]}><planeGeometry args={[2.48, 1.54]}/><meshBasicMaterial color="#10152a"/></mesh>
    <mesh position={[0, 0.66, 0.105]}><planeGeometry args={[2.42, 1.48]}/><meshBasicMaterial color="#151b32"/></mesh>
    {/* Minimal code editor lines */}
    {Array.from({length:7},(_,i)=><mesh key={i} position={[-0.82+(i%3)*0.12,1.12-i*0.16,0.112]}><boxGeometry args={[0.72+(i%3)*0.16,0.025,0.006]}/><meshBasicMaterial color={i%3===0?"#a78bfa":i%3===1?"#65d6c4":"#7583a9"}/></mesh>)}
    <mesh position={[-0.88,0.98,0.115]}><boxGeometry args={[0.035,0.42,0.008]}/><meshBasicMaterial color="#b69cff"/></mesh>
    {/* Stand and base */}
    <mesh position={[0,-0.38,0]}><boxGeometry args={[0.22,0.48,0.18]}/><meshStandardMaterial color="#45435c" metalness={0.8} roughness={0.25}/></mesh>
    <mesh position={[0,-0.64,0.03]}><boxGeometry args={[0.9,0.08,0.48]}/><meshStandardMaterial color="#35334c" metalness={0.8} roughness={0.25}/></mesh>
    {/* Desktop tower */}
    <mesh position={[1.95,-0.05,-0.05]} castShadow><boxGeometry args={[0.68,1.65,0.9]}/><meshStandardMaterial color="#202034" metalness={0.55} roughness={0.32}/></mesh>
    <mesh position={[1.95,-0.05,0.408]}><planeGeometry args={[0.54,1.48]}/><meshBasicMaterial color="#17172b"/></mesh>
    <mesh position={[1.95,0.42,0.42]}><boxGeometry args={[0.035,0.58,0.012]}/><meshBasicMaterial color="#9b7bff"/></mesh>
    <mesh position={[1.95,-0.18,0.42]}><boxGeometry args={[0.035,0.36,0.012]}/><meshBasicMaterial color="#5dd6c1"/></mesh>
    {/* Keyboard */}
    <mesh position={[0,-1.03,0.78]} rotation={[-0.12,0,0]}><boxGeometry args={[2.05,0.12,0.58]}/><meshStandardMaterial color="#34334b" metalness={0.55} roughness={0.35}/></mesh>
    {Array.from({length:4},(_,row)=>Array.from({length:13},(_,col)=><mesh key={`${row}-${col}`} position={[-0.92+col*0.153,-0.955,0.56+row*0.135]}><boxGeometry args={[0.105,0.035,0.09]}/><meshStandardMaterial color={(row+col)%5===0?"#7962c7":"#77748c"} roughness={0.5}/></mesh>))}
    {/* Desk surface and subtle neon accent */}
    <mesh position={[0,-1.23,0.35]}><boxGeometry args={[5.3,0.1,2.5]}/><meshStandardMaterial color="#171827" metalness={0.35} roughness={0.55}/></mesh>
    <mesh position={[0,-1.175,1.58]}><boxGeometry args={[4.6,0.012,0.018]}/><meshBasicMaterial color="#8d70ed"/></mesh>
    <pointLight position={[-1.2,1.4,1.8]} intensity={1.2} color="#9b7bff" distance={5}/>
    <pointLight position={[2,-0.1,1.4]} intensity={0.8} color="#5dd6c1" distance={3}/>
  </group>;
}

export default function ComputerScene() {
  return <div className="three-scene" aria-label="Interactive 3D computer workstation"><Canvas frameloop="demand" dpr={[1,1.25]} camera={{position:[5,2.3,7],fov:34}} gl={{antialias:false,powerPreference:"low-power",alpha:true}}><ambientLight intensity={0.65}/><directionalLight position={[-4,6,5]} intensity={1.4}/><Workstation/><OrbitControls enablePan={false} enableZoom={false} minPolarAngle={1.15} maxPolarAngle={1.8} rotateSpeed={0.55}/></Canvas></div>;
}
