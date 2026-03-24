interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

const events: TimelineEvent[] = [
  {
    year: "06 de Outubro",
    title: "Nosso Primeiro Contato",
    description: "Aquele dia em que EU te mandei uma mensagem no Instagram. Não sabia que aquela simples mensagem mudaria minha vida para sempre. Você se tornou a pessoa mais importante do meu mundo."
  },
  {
    year: "06 de Novembro",
    title: "Oficializamos Nosso Amor",
    description: "O dia em que você se tornou minha namorada. Aquele momento em que tudo ficou oficial e meu coração nunca esteve tão cheio de alegria. Começou oficialmente o melhor período da minha vida."
  },
  {
    year: "Últimos 2 Meses",
    title: "Uma Eternidade de Momentos",
    description: "Apenas 2 meses, mas parecem quase 1 ano de namoro. Cada dia ao seu lado é tão intenso, tão especial, que o tempo passa diferente. Vivemos tantos momentos incríveis juntos que parece que estamos juntos há muito mais tempo."
  },
  {
    year: "Cada Dia",
    title: "Nossos Momentos Especiais",
    description: "Risos, abraços, conversas até tarde, planos para o futuro. Cada momento com você é um tesouro que guardo no meu coração. Você tornou minha vida muito mais colorida e significativa."
  },
  {
    year: "17 de Janeiro",
    title: "Seu Aniversário Especial",
    description: "Celebrando você, meu amor. Que este dia seja tão especial quanto você é para mim. Que todos os seus sonhos se realizem e que eu possa estar ao seu lado em cada um deles. 💕"
  }
];

export default function Timeline() {
  return (
    <div className="w-full py-20 px-4" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-4xl mx-auto">
        <h2 
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: '#722F37' }}
        >
          Nossa Linha do Tempo
        </h2>
        <p 
          className="font-body text-lg text-center mb-16"
          style={{ color: '#8B7355' }}
        >
          Cada momento ao seu lado é uma página preciosa da nossa história
        </p>
        
        <div className="relative">
          {/* Vertical Line */}
          <div 
            className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full"
            style={{
              background: 'linear-gradient(180deg, #D4A574, #E8C4B8, #D4A574)'
            }}
          />
          
          {events.map((event, index) => (
            <div
              key={index}
              className={`relative mb-16 animate-fade-in-up ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                maxWidth: '100%'
              }}
            >
              <div className="md:w-1/2 md:inline-block">
                {/* Year Badge */}
                <div 
                  className={`inline-block mb-4 ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                >
                  <div 
                    className="font-decorative text-2xl md:text-3xl font-bold px-6 py-2 rounded-full border-2 inline-block"
                    style={{ 
                      color: '#722F37',
                      borderColor: '#D4A574',
                      backgroundColor: 'rgba(255, 255, 255, 0.9)'
                    }}
                  >
                    {event.year}
                  </div>
                </div>
                
                {/* Event Card */}
                <div 
                  className={`bg-white/90 backdrop-blur-sm rounded-lg p-6 md:p-8 border-2 shadow-xl relative overflow-hidden luxury-card ${
                    index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'
                  }`}
                  style={{ borderColor: '#D4A574' }}
                >
                  {/* Decorative Pattern */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 opacity-10 pointer-events-none"
                    style={{
                      backgroundImage: 'url(/images/art-deco-pattern.png)',
                      backgroundSize: 'cover'
                    }}
                  />
                  
                  <h3 
                    className="font-display text-2xl md:text-3xl font-bold mb-3 relative z-10"
                    style={{ color: '#722F37' }}
                  >
                    {event.title}
                  </h3>
                  <p 
                    className="font-body text-base md:text-lg leading-relaxed relative z-10"
                    style={{ color: '#5A4A42' }}
                  >
                    {event.description}
                  </p>
                </div>
              </div>
              
              {/* Heart Decoration on Timeline */}
              <div 
                className="absolute left-1/2 top-0 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 z-20 hidden md:block"
              >
                <img 
                  src="/images/timeline-decoration.png" 
                  alt="" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
