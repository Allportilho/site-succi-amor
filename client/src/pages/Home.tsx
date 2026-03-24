import { useEffect, useState } from "react";
import Countdown from "@/components/Countdown";
import Timeline from "@/components/Timeline";
import InteractiveCards from "@/components/InteractiveCards";
import DailyReason from "@/components/DailyReason";
import MusicPlayer from "@/components/MusicPlayer";
import Gallery from "@/components/Gallery";
import RainEffect from "@/components/RainEffect";

export default function Home() {
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIndicator(false);
      } else {
        setShowScrollIndicator(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth"
    });
  };

  return (
    <div className="min-h-screen">
      {/* Rain Effect - Chuva de Corações */}
      <RainEffect />
      
      {/* Floating Hearts Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="floating-heart absolute"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 2}s`,
              fontSize: `${1 + Math.random()}rem`
            }}
          >
            💕
          </div>
        ))}
      </div>

      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/hero-background_3c6dda5b.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 241, 232, 0.7), rgba(232, 196, 184, 0.6))'
          }}
        />

        {/* Art Deco Corner Decorations */}
        <div 
          className="absolute top-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-40"
          style={{
            background: `
              linear-gradient(135deg, transparent 20px, #D4A574 20px, #D4A574 22px, transparent 22px),
              linear-gradient(135deg, transparent 30px, #D4A574 30px, #D4A574 32px, transparent 32px),
              linear-gradient(135deg, transparent 40px, #D4A574 40px, #D4A574 42px, transparent 42px)
            `,
            backgroundPosition: 'top left',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div 
          className="absolute top-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-40"
          style={{
            background: `
              linear-gradient(225deg, transparent 20px, #D4A574 20px, #D4A574 22px, transparent 22px),
              linear-gradient(225deg, transparent 30px, #D4A574 30px, #D4A574 32px, transparent 32px),
              linear-gradient(225deg, transparent 40px, #D4A574 40px, #D4A574 42px, transparent 42px)
            `,
            backgroundPosition: 'top right',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div 
          className="absolute bottom-0 left-0 w-32 h-32 md:w-48 md:h-48 opacity-40"
          style={{
            background: `
              linear-gradient(45deg, transparent 20px, #D4A574 20px, #D4A574 22px, transparent 22px),
              linear-gradient(45deg, transparent 30px, #D4A574 30px, #D4A574 32px, transparent 32px),
              linear-gradient(45deg, transparent 40px, #D4A574 40px, #D4A574 42px, transparent 42px)
            `,
            backgroundPosition: 'bottom left',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <div 
          className="absolute bottom-0 right-0 w-32 h-32 md:w-48 md:h-48 opacity-40"
          style={{
            background: `
              linear-gradient(315deg, transparent 20px, #D4A574 20px, #D4A574 22px, transparent 22px),
              linear-gradient(315deg, transparent 30px, #D4A574 30px, #D4A574 32px, transparent 32px),
              linear-gradient(315deg, transparent 40px, #D4A574 40px, #D4A574 42px, transparent 42px)
            `,
            backgroundPosition: 'bottom right',
            backgroundSize: '100% 100%',
            backgroundRepeat: 'no-repeat'
          }}
        />

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <p 
            className="font-body text-lg md:text-xl mb-6 italic animate-fade-in-up"
            style={{ 
              color: '#8B7355',
              animationDelay: '0ms'
            }}
          >
            Para a pessoa mais especial do meu mundo...
          </p>

          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-fade-in-up"
            style={{ 
              color: '#722F37',
              lineHeight: '1.1',
              animationDelay: '200ms'
            }}
          >
            Você é a melhor parte da minha vida
          </h1>

          <h2 
            className="font-decorative text-4xl md:text-6xl lg:text-7xl font-bold mb-8 gradient-text animate-fade-in-up"
            style={{ 
              letterSpacing: '0.1em',
              animationDelay: '400ms'
            }}
          >
            NOSSO INFINITO PARTICULAR
          </h2>

          <p 
            className="font-body text-base md:text-lg max-w-2xl mx-auto leading-relaxed animate-fade-in-up"
            style={{ 
              color: '#5A4A42',
              animationDelay: '600ms'
            }}
          >
            Esse site não é sobre um dia... é sobre tudo que vivemos juntos.
          </p>

          {/* Decorative Line */}
          <div 
            className="w-32 h-1 mx-auto my-8 animate-fade-in-up"
            style={{ 
              background: 'linear-gradient(90deg, transparent, #D4A574, transparent)',
              animationDelay: '800ms'
            }}
          />
        </div>

        {/* Scroll Indicator */}
        {showScrollIndicator && (
          <button
            onClick={scrollToContent}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
            style={{ color: '#D4A574' }}
          >
            <svg 
              className="w-8 h-8" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        )}
      </section>

      {/* Countdown Section */}
      <section style={{ backgroundColor: '#FFFFFF' }}>
        <Countdown />
      </section>

      {/* Interactive Cards Section */}
      <InteractiveCards />

      {/* Daily Reason Section */}
      <section style={{ backgroundColor: '#FFFFFF', paddingTop: '80px', paddingBottom: '80px' }}>
        <DailyReason />
      </section>

      {/* Timeline Section */}
      <Timeline />

      {/* Music Player Section */}
      <MusicPlayer />

      {/* Gallery Section */}
      <Gallery />

      {/* Final Message Section */}
      <section 
        className="py-20 px-4 relative overflow-hidden"
        style={{ 
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/hero-background_3c6dda5b.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(245, 241, 232, 0.9), rgba(232, 196, 184, 0.8))'
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 
            className="font-display text-5xl md:text-6xl font-bold mb-8"
            style={{ color: '#722F37' }}
          >
            Pra você, sempre
          </h2>

          <div 
            className="font-body text-lg md:text-xl leading-relaxed space-y-6 mb-12"
            style={{ color: '#5A4A42' }}
          >
            <p>
              Isso aqui não é só um site...
            </p>

            <p>
              É um pedacinho de tudo que eu sinto por você.
            </p>

            <p>
              Não é sobre datas, nem momentos específicos...
            </p>

            <p>
              É sobre o quanto você mudou minha vida.
            </p>

            <p>
              E se depender de mim...
            </p>

            <p>
              Ainda temos muita história pra escrever juntos.
            </p>

            <p className="text-2xl md:text-3xl font-display font-bold" style={{ color: '#D4A574' }}>
              💕 💕 💕
            </p>
          </div>

          <p 
            className="font-body text-lg italic"
            style={{ color: '#8B7355' }}
          >
            Com todo meu amor e admiração,<br />
            <span className="font-decorative text-2xl gradient-text">Seu amor infinito</span>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-8 px-4 text-center"
        style={{ backgroundColor: '#722F37' }}
      >
        <p className="font-body text-sm" style={{ color: '#F5F1E8' }}>
          Feito com 💕 para Succi • {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}
