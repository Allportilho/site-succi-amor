import { useEffect, useState } from "react";
import { reasons } from "@/lib/reasons";

export default function DailyReason() {
  const [currentReason, setCurrentReason] = useState<typeof reasons[0] | null>(null);
  const [dayOfYear, setDayOfYear] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Calcular o dia do ano (1-365)
    const today = new Date();
    const startOfYear = new Date(today.getFullYear(), 0, 0);
    const diff = today.getTime() - startOfYear.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayNumber = Math.floor(diff / oneDay);

    setDayOfYear(dayNumber);

    // Obter o motivo correspondente ao dia (array é 0-indexed)
    if (dayNumber > 0 && dayNumber <= reasons.length) {
      setCurrentReason(reasons[dayNumber - 1]);
    } else if (dayNumber > reasons.length) {
      // Se passar de 365 dias, volta ao primeiro motivo
      const cycleIndex = (dayNumber - 1) % reasons.length;
      setCurrentReason(reasons[cycleIndex]);
    }

    setIsLoading(false);
  }, []);

  if (isLoading || !currentReason) {
    return (
      <div className="w-full max-w-4xl mx-auto px-4 py-12">
        <div 
          className="text-center py-20 rounded-lg"
          style={{ backgroundColor: '#F5F1E8' }}
        >
          <p style={{ color: '#8B7355' }} className="font-body text-lg">
            Carregando seu motivo especial...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12">
      {/* Title */}
      <h2 
        className="font-display text-4xl md:text-5xl font-bold text-center mb-8"
        style={{ color: '#722F37' }}
      >
        Motivo do Dia
      </h2>

      {/* Main Reason Card */}
      <div 
        className="relative overflow-hidden rounded-lg shadow-2xl p-8 md:p-12 min-h-96 flex flex-col justify-center items-center"
        style={{
          background: 'linear-gradient(135deg, rgba(245, 241, 232, 0.95), rgba(232, 196, 184, 0.9))',
          borderLeft: '6px solid #D4A574'
        }}
      >
        {/* Decorative Elements */}
        <div 
          className="absolute top-0 right-0 w-32 h-32 opacity-10"
          style={{
            background: 'radial-gradient(circle, #D4A574 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-32 h-32 opacity-10"
          style={{
            background: 'radial-gradient(circle, #D4A574 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        />

        {/* Day Counter */}
        <div 
          className="absolute top-6 left-6 px-4 py-2 rounded-full text-white font-body text-sm font-bold"
          style={{ backgroundColor: 'rgba(114, 47, 55, 0.8)' }}
        >
          Dia {dayOfYear} de 365
        </div>

        {/* Reason Text */}
        <div className="relative z-10 text-center">
          <p 
            className="font-body text-3xl md:text-4xl font-bold mb-4"
            style={{ color: '#722F37' }}
          >
            {currentReason.emoji} {currentReason.title}
          </p>

          <p 
            className="font-body text-lg md:text-xl leading-relaxed mb-6"
            style={{ color: '#722F37' }}
          >
            {currentReason.description}
          </p>

          {/* Heart Icon */}
          <div className="text-5xl md:text-6xl">💕</div>
        </div>

        {/* Motivational Text */}
        <p 
          className="absolute bottom-6 right-6 font-body text-sm italic"
          style={{ color: '#8B7355' }}
        >
          Um motivo a cada dia do ano
        </p>
      </div>

      {/* Progress Bar */}
      <div className="mt-8">
        <div className="flex justify-between mb-2">
          <p style={{ color: '#8B7355' }} className="font-body text-sm">
            Progresso do Ano
          </p>
          <p style={{ color: '#8B7355' }} className="font-body text-sm font-bold">
            {Math.round((dayOfYear / 365) * 100)}%
          </p>
        </div>
        <div 
          className="w-full h-3 rounded-full overflow-hidden"
          style={{ backgroundColor: '#E8C4B8' }}
        >
          <div 
            className="h-full transition-all duration-500 rounded-full"
            style={{
              width: `${(dayOfYear / 365) * 100}%`,
              background: 'linear-gradient(90deg, #D4A574, #722F37)'
            }}
          />
        </div>
      </div>

      {/* Description */}
      <p 
        className="text-center mt-8 font-body italic"
        style={{ color: '#8B7355' }}
      >
        Volte todos os dias para descobrir um novo motivo pelo qual eu te amo 💕
      </p>

      {/* Additional Info */}
      <div 
        className="mt-12 p-6 rounded-lg text-center"
        style={{ backgroundColor: '#F5F1E8' }}
      >
        <p style={{ color: '#5A4A42' }} className="font-body text-sm">
          Este é um presente especial que muda a cada dia. Cada motivo foi escolhido com amor para você.
        </p>
      </div>
    </div>
  );
}
