import { useState } from "react";

interface Card {
  emoji: string;
  title: string;
  message: string;
}

const cards: Card[] = [
  {
    emoji: "💖",
    title: "Seu Sorriso",
    message: "Seu sorriso ilumina meu dia de uma forma que palavras não conseguem descrever. É a primeira coisa que penso quando acordo e a última antes de dormir. Cada vez que você sorri, meu coração se enche de alegria e gratidão por ter você na minha vida."
  },
  {
    emoji: "✨",
    title: "Sua Essência",
    message: "A forma como você se importa com os outros, sua gentileza natural e seu coração generoso fazem de você alguém verdadeiramente especial. Você torna o mundo um lugar melhor apenas por existir nele."
  },
  {
    emoji: "🌹",
    title: "Sua Beleza",
    message: "Sua beleza vai muito além do que os olhos podem ver. É a forma como você pensa, como você ama, como você sonha. Você é linda por dentro e por fora, e cada dia descubro algo novo para admirar em você."
  },
  {
    emoji: "✨",
    title: "Seus Olhos",
    message: "Esses olhos deixam as estrelas com inveja. Me perco olhando neles, como se estivesse vagando na imensidão do espaço. Neles encontro paz, amor, esperança e um universo inteiro de sentimentos. Seus olhos são a janela para sua alma linda."
  },
  {
    emoji: "🎵",
    title: "Nossa Conexão",
    message: "A conexão que temos é única e especial. Você me entende sem que eu precise dizer uma palavra. Nos momentos silenciosos ao seu lado, sinto uma paz que nunca encontrei em nenhum outro lugar."
  },
  {
    emoji: "💝",
    title: "Nosso Futuro",
    message: "Quando penso no futuro, você está em cada sonho, em cada plano, em cada momento que imagino. Mal posso esperar para viver todas as aventuras que ainda estão por vir ao seu lado, construindo nossa história juntos."
  }
];

export default function InteractiveCards() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCard = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-6xl mx-auto">
        <h2 
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: '#722F37' }}
        >
          Detalhes que me fazem te amar
        </h2>
        <p 
          className="font-body text-lg text-center mb-4"
          style={{ color: '#8B7355' }}
        >
          Se eu tivesse que listar todos os motivos, este site não seria grande o suficiente...
        </p>
        <p 
          className="font-body text-base text-center mb-16 italic"
          style={{ color: '#A89B8E' }}
        >
          Mas aqui estão alguns deles
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div
              key={index}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleCard(index)}
                className="w-full text-left"
              >
                <div 
                  className={`bg-white border-2 rounded-lg p-6 shadow-lg transition-all duration-400 relative overflow-hidden ${
                    expandedIndex === index ? 'luxury-card' : 'hover:scale-105 hover:shadow-xl'
                  }`}
                  style={{ 
                    borderColor: expandedIndex === index ? '#722F37' : '#D4A574',
                    minHeight: expandedIndex === index ? '280px' : '160px'
                  }}
                >
                  {/* Decorative Corner */}
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: 'url(/images/art-deco-pattern.png)',
                      backgroundSize: 'cover'
                    }}
                  />
                  
                  <div className="relative z-10">
                    <div className="text-5xl mb-4 text-center">
                      {card.emoji}
                    </div>
                    
                    <h3 
                      className="font-display text-2xl font-bold text-center mb-3"
                      style={{ color: '#722F37' }}
                    >
                      {card.title}
                    </h3>
                    
                    {expandedIndex === index && (
                      <p 
                        className="font-body text-base leading-relaxed animate-fade-in-up"
                        style={{ color: '#5A4A42' }}
                      >
                        {card.message}
                      </p>
                    )}
                    
                    <div className="text-center mt-4">
                      <span 
                        className="font-body text-sm"
                        style={{ color: '#D4A574' }}
                      >
                        {expandedIndex === index ? '▲ Fechar' : '▼ Ler mais'}
                      </span>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>
        
        <p 
          className="font-body text-lg text-center mt-12 italic"
          style={{ color: '#8B7355' }}
        >
          ...e infinitos outros motivos que estão guardados no meu coração 💕
        </p>
      </div>
    </div>
  );
}
