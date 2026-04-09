"use client";
import React, { useRef, useState, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Stars, Html, Float } from "@react-three/drei";
import * as THREE from "three";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaDatabase,
  FaLinux,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiKotlin,
  SiDotnet,
  SiPostgresql,
  SiAndroid,
  SiPrisma,
  SiNginx,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";
import { TbBrandReactNative, TbBrandCSharp } from "react-icons/tb";

const skills = [
  { name: "HTML5", icon: <FaHtml5 />, color: "#e34f26" },
  { name: "CSS3", icon: <FaCss3Alt />, color: "#1572b6" },
  { name: "JS", icon: <FaJs />, color: "#f7df1e" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3c873a" },
  { name: "Express", icon: <SiExpress />, color: "#aaaaaa" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#13aa52" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#38bdf8" },
  { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
  { name: "Docker", icon: <FaDocker />, color: "#2496ed" },
  { name: "AWS", icon: <FaAws />, color: "#ff9900" },
  { name: "Native", icon: <TbBrandReactNative />, color: "#61dafb" },
  { name: "Kotlin", icon: <SiKotlin />, color: "#a97bff" },
  { name: "Compose", icon: <SiAndroid />, color: "#3ddc84" },
  { name: "C#", icon: <TbBrandCSharp />, color: "#9b59b6" },
  { name: "ASP.NET", icon: <SiDotnet />, color: "#512bd4" },
  { name: "SSMS", icon: <FaDatabase />, color: "#e74c3c" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#336791" },
  { name: "SQL", icon: <FaDatabase />, color: "#00aff0" },
  { name: "Prisma", icon: <SiPrisma />, color: "#5a67d8" },
  { name: "Nginx", icon: <SiNginx />, color: "#009900" },
  { name: "Linux", icon: <FaLinux />, color: "#ffd133" },
  { name: "Redux", icon: <SiRedux />, color: "#764abc" },
  { name: "Sockets", icon: <SiSocketdotio />, color: "#ffffff" },
];

// Reusable component for drawing the thin orbit paths
const OrbitRing = ({ radius }) => (
  <mesh rotation={[-Math.PI / 2, 0, 0]}>
    <ringGeometry args={[radius - 0.02, radius + 0.02, 64]} />
    <meshBasicMaterial
      color="#ffffff"
      transparent
      opacity={0.1}
      side={THREE.DoubleSide}
    />
  </mesh>
);

// Individual Skill "Planet"
const SkillNode = ({ skill, radius, angle, speed }) => {
  const groupRef = useRef();
  const [hovered, setHovered] = useState(false);

  // useFrame runs on every frame (60fps) to calculate the new orbit position
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * speed + angle;
    // Basic trigonometry to move in a circle
    groupRef.current.position.x = Math.cos(t) * radius;
    groupRef.current.position.z = Math.sin(t) * radius;
  });

  return (
    <group ref={groupRef}>
      {/* Invisible hit-box for easier hovering */}
      <mesh
        onPointerOver={(e) => {
          e.stopPropagation();
          setHovered(true);
          document.body.style.cursor = "pointer";
        }}
        onPointerOut={() => {
          setHovered(false);
          document.body.style.cursor = "auto";
        }}
      >
        <sphereGeometry args={[0.85, 16, 16]} />
        <meshBasicMaterial transparent opacity={0} depthWrite={false} />
      </mesh>

      {/* The glowing planet core */}
      <mesh>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshStandardMaterial
          color={skill.color}
          emissive={skill.color}
          emissiveIntensity={hovered ? 2.5 : 0.5}
          toneMapped={false}
        />
      </mesh>

      {/* HTML overlay that projects the React Icon onto the 3D space */}
      <Html
        center
        distanceFactor={12}
        zIndexRange={[100, 0]}
        style={{ pointerEvents: "none" }}
      >
        <div
          className="flex flex-col items-center justify-center transition-all duration-300"
          style={{
            color: skill.color,
            filter: `drop-shadow(0 0 12px ${skill.color})`,
            transform: hovered ? "scale(1.5)" : "scale(1)",
          }}
        >
          <div className="text-4xl">{skill.icon}</div>

          {/* Tooltip name that fades in on hover */}
          <div
            className={`mt-2 px-3 py-1 bg-black/80 backdrop-blur-sm border border-white/20 text-white text-sm font-bold rounded-full transition-opacity duration-300 ${hovered ? "opacity-100" : "opacity-0"}`}
          >
            {skill.name}
          </div>
        </div>
      </Html>
    </group>
  );
};

// The main 3D Scene - Now accepts canZoom as a prop!
const GalaxyScene = ({ canZoom }) => {
  // Distribute skills into 3 different orbits
  const orbits = useMemo(() => {
    const rings = [
      { radius: 4.5, speed: 0.2, items: [] }, // Inner Orbit
      { radius: 7.0, speed: 0.12, items: [] }, // Middle Orbit
      { radius: 10.0, speed: 0.08, items: [] }, // Outer Orbit
    ];

    skills.forEach((skill, i) => {
      rings[i % 3].items.push(skill);
    });
    return rings;
  }, []);

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[0, 0, 0]} intensity={2} color="#ffffff" />

      {/* Background Starfield */}
      <Stars
        radius={50}
        depth={50}
        count={3000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />

      {/* Central Core (You / Main Entity) */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={2}>
        <mesh>
          <sphereGeometry args={[1, 64, 64]} />
          <meshStandardMaterial
            color="#ffffff"
            emissive="#38bdf8"
            emissiveIntensity={1.5}
          />
        </mesh>
        <Html center distanceFactor={15}>
          <div className="text-white font-black text-xl tracking-widest uppercase bg-black/50 px-4 py-2 border border-cyan-500/50 rounded backdrop-blur-md pointer-events-none shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            Full Stack
          </div>
        </Html>
      </Float>

      {/* Render Orbits and Planets */}
      {orbits.map((orbit, orbitIndex) => (
        <group key={`orbit-${orbitIndex}`}>
          <OrbitRing radius={orbit.radius} />
          {orbit.items.map((skill, i) => {
            const angle = (i / orbit.items.length) * Math.PI * 2;
            return (
              <SkillNode
                key={skill.name}
                skill={skill}
                radius={orbit.radius}
                angle={angle}
                speed={orbit.speed}
              />
            );
          })}
        </group>
      ))}

      {/* Camera Controls - Dynamic Zoom based on CTRL key */}
      <OrbitControls
        enablePan={false}
        enableZoom={canZoom}
        minDistance={8}
        maxDistance={25}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 1.5} // Prevents looking strictly from below
      />
    </>
  );
};

export default function SkillGalaxy() {
  const [canZoom, setCanZoom] = useState(false);

  // Listen for the Ctrl or Command key to enable zooming
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Control" || e.metaKey) setCanZoom(true);
    };
    const handleKeyUp = (e) => {
      if (e.key === "Control" || e.metaKey) setCanZoom(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#020617] overflow-hidden flex flex-col items-center justify-center">
      {/* Main UI Overlay - Kept clean and minimal */}
      <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center z-10 pointer-events-none w-full px-4">
        <h2 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 tracking-tight drop-shadow-lg mb-3">
          Tech Galaxy
        </h2>
        <p className="text-slate-400 font-medium">
          Click and drag to explore the universe.
        </p>
      </div>

      {/* Sleek Floating Control Hint at the bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
        <div
          className={`flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border transition-all duration-500 ${
            canZoom
              ? "bg-cyan-500/20 border-cyan-400/50 text-cyan-200 shadow-[0_0_20px_rgba(34,211,238,0.3)] scale-105"
              : "bg-white/5 border-white/10 text-slate-400 scale-100"
          }`}
        >
          <kbd className="font-mono text-[10px] bg-black/60 px-1.5 py-0.5 rounded border border-white/20">
            CTRL
          </kbd>
          <span className="text-xs font-semibold tracking-wide uppercase">
            {canZoom ? "Zoom Unlocked" : "+ Scroll to zoom"}
          </span>
        </div>
      </div>

      {/* R3F Canvas Container */}
      <div className="absolute inset-0 cursor-move">
        <Canvas camera={{ position: [0, 8, 18], fov: 60 }}>
          <GalaxyScene canZoom={canZoom} />
        </Canvas>
      </div>

      {/* Vignette effect for depth */}
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(2,6,23,1)]" />
    </section>
  );
}
