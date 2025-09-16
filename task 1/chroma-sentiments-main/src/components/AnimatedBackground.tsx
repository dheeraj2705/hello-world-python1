import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: "small" | "medium" | "large";
  delay: number;
}

interface AnimatedBackgroundProps {
  mood: string;
  className?: string;
}

export const AnimatedBackground = ({ mood, className }: AnimatedBackgroundProps) => {
  const [particles, setParticles] = useState<Particle[]>([]);

  // Get mood-specific colors for particles
  const getMoodParticleColor = (mood: string): string => {
    const colors = {
      happy: "rgba(255, 206, 84, 0.7)",      // Golden yellow
      calm: "rgba(72, 187, 120, 0.7)",       // Soft blue-green
      energetic: "rgba(255, 99, 132, 0.7)",  // Vibrant red-pink
      sad: "rgba(99, 102, 241, 0.7)",        // Soft purple-blue
      anxious: "rgba(168, 85, 247, 0.7)",    // Purple
      peaceful: "rgba(52, 211, 153, 0.7)"    // Soft green
    };
    return colors[mood as keyof typeof colors] || "rgba(255, 255, 255, 0.3)";
  };

  useEffect(() => {
    // Generate random particles with mood-specific count
    const particleCount = mood === 'energetic' ? 30 : mood === 'calm' ? 15 : 20;
    const newParticles: Particle[] = [];
    
    for (let i = 0; i < particleCount; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: ["small", "medium", "large"][Math.floor(Math.random() * 3)] as "small" | "medium" | "large",
        delay: Math.random() * 6,
      });
    }
    setParticles(newParticles);
  }, [mood]);

  return (
    <div className={cn("mood-background fixed inset-0 transition-all duration-1000 ease-in-out", `mood-${mood}`, className)}>
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={cn("particle", `particle-${particle.size}`)}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            backgroundColor: getMoodParticleColor(mood),
            animationDuration: mood === 'energetic' ? '3s' : mood === 'calm' ? '8s' : '6s',
          }}
        />
      ))}
      
      {/* Mood-specific overlay effects */}
      {mood === 'energetic' && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-red-500/10 to-orange-500/20 animate-pulse" />
      )}
      {mood === 'happy' && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/10 to-orange-400/15" />
      )}
      {mood === 'calm' && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-400/8 to-teal-400/12" />
      )}
      {mood === 'peaceful' && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-400/8 to-emerald-400/12" />
      )}
      {mood === 'sad' && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-600/10 to-indigo-600/15" />
      )}
      {mood === 'anxious' && (
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-500/10 to-violet-500/15" />
      )}
    </div>
  );
};