import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function Countdown() {
  // Data do início do namoro: 06 de Novembro de 2025
  const startDate = new Date("2025-11-06T00:00:00");
  
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date() - +startDate;
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: "Dias", value: timeLeft.days },
    { label: "Horas", value: timeLeft.hours },
    { label: "Minutos", value: timeLeft.minutes },
    { label: "Segundos", value: timeLeft.seconds },
  ];

  return (
    <div className="w-full py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="font-display text-3xl md:text-4xl font-bold mb-4"
          style={{ color: '#722F37' }}
        >
          Estamos juntos há...
        </h2>
        <p 
          className="font-body text-lg md:text-xl mb-12"
          style={{ color: '#8B7355' }}
        >
          construindo nossa história 💕
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {timeUnits.map((unit, index) => (
            <div
              key={unit.label}
              className="relative animate-fade-in-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Art Deco Frame */}
              <div 
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  background: `
                    linear-gradient(135deg, transparent 10px, #D4A574 10px, #D4A574 12px, transparent 12px),
                    linear-gradient(225deg, transparent 10px, #D4A574 10px, #D4A574 12px, transparent 12px),
                    linear-gradient(315deg, transparent 10px, #D4A574 10px, #D4A574 12px, transparent 12px),
                    linear-gradient(45deg, transparent 10px, #D4A574 10px, #D4A574 12px, transparent 12px)
                  `,
                  backgroundPosition: 'top left, top right, bottom right, bottom left',
                  backgroundSize: '50% 50%',
                  backgroundRepeat: 'no-repeat'
                }}
              />
              
              <div 
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 md:p-8 border-2 shadow-lg relative overflow-hidden"
                style={{ borderColor: '#D4A574' }}
              >
                {/* Decorative Pattern */}
                <div 
                  className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: 'url(/images/art-deco-pattern.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />
                
                <div className="relative z-10">
                  <div 
                    className="font-decorative text-5xl md:text-6xl font-bold mb-2 gradient-text"
                    style={{ letterSpacing: '0.05em' }}
                  >
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div 
                    className="font-body text-sm md:text-base uppercase tracking-wider"
                    style={{ color: '#8B7355' }}
                  >
                    {unit.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
