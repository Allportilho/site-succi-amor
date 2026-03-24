import { useEffect, useState } from "react";

interface Particle {
  id: string;
  type: "petal" | "heart";
  left: number;
  duration: number;
  delay: number;
  emoji: string;
}

export default function RainEffect() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Criar partículas iniciais
    const initialParticles: Particle[] = [];
    const hearts = ["💕", "💖", "💗", "💝"];

    for (let i = 0; i < 30; i++) {
      const type = "heart";
      const emojiList = hearts;
      
      initialParticles.push({
        id: `particle-${i}`,
        type,
        left: Math.random() * 100,
        duration: 8 + Math.random() * 6,
        delay: Math.random() * 2,
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)]
      });
    }

    setParticles(initialParticles);

    // Adicionar novas partículas periodicamente
    const interval = setInterval(() => {
      const hearts = ["💕", "💖", "💗", "💝"];
      const newParticle: Particle = {
        id: `particle-${Date.now()}-${Math.random()}`,
        type: "heart",
        left: Math.random() * 100,
        duration: 8 + Math.random() * 6,
        delay: 0,
        emoji: hearts[Math.floor(Math.random() * hearts.length)]
      };

      setParticles(prev => [...prev, newParticle]);

      // Remover partículas antigas para não sobrecarregar
      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== newParticle.id));
      }, (newParticle.duration + newParticle.delay) * 1000);
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`rain-particle ${particle.type}`}
          style={{
            left: `${particle.left}%`,
            top: "-10vh",
            animation: `rain-fall ${particle.duration}s linear ${particle.delay}s infinite`,
            "--tx": `${(Math.random() - 0.5) * 100}px`,
            fontSize: `${1 + Math.random() * 1.5}rem`,
            opacity: 0.7 + Math.random() * 0.3,
          } as React.CSSProperties & { "--tx": string }}
        >
          {particle.emoji}
        </div>
      ))}
    </div>
  );
}
