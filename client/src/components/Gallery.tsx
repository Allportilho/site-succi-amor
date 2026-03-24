import { useState, useEffect } from 'react';

const galleryImages = [
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/IMG-20260104-WA0113_16e17568.jpg",
    alt: "Nosso momento no rio"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/IMG-20260102-WA0025_e08b37ad.jpg",
    alt: "Celebrando juntos"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/IMG-20251123-WA0028_37eba27d.jpg",
    alt: "Nosso sorriso"
  },
  {
    src: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/IMG_5391_94030aa0.jpg",
    alt: "Momento especial"
  }
];

export default function Gallery() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length);
    }, 10000); // Muda a cada 10 segundos

    return () => clearInterval(interval);
  }, []);

  const currentImage = galleryImages[currentImageIndex];

  return (
    <div className="w-full py-20 px-4" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-4xl mx-auto">
        <h2 
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: '#722F37' }}
        >
          Memórias favoritas
        </h2>
        <p 
          className="font-body text-lg text-center mb-16"
          style={{ color: '#8B7355' }}
        >
          Cada foto é um momento especial que guardamos no coração
        </p>

        {/* Texto Romântico */}
        <div className="mb-12 text-center">
          <p 
            className="font-body text-xl md:text-2xl leading-relaxed italic"
            style={{ color: '#722F37' }}
          >
            "Cada momento ao seu lado é um quadro perfeito que guardo no meu coração. 
            Você é a minha inspiração, meu amor, minha razão de sorrir todos os dias."
          </p>
        </div>

        {/* Carrossel de Fotos */}
        <div className="relative w-full aspect-square rounded-lg overflow-hidden border-4 shadow-2xl luxury-card mb-8 group">
          <img 
            key={currentImageIndex}
            src={currentImage.src} 
            alt={currentImage.alt}
            className="w-full h-full object-cover transition-all duration-1000 animate-fade-in"
            style={{
              animation: 'fade-in 1s ease-in-out forwards'
            }}
          />
          
          {/* Overlay com descrição */}
          <div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end justify-center pb-8"
          >
            <div className="text-center">
              <p className="font-body text-white text-2xl md:text-3xl">
                {currentImage.alt}
              </p>
              <p className="font-body text-white/80 text-sm mt-2">
                {currentImageIndex + 1} de {galleryImages.length}
              </p>
            </div>
          </div>

          {/* Art Deco Corner Decorations */}
          <div 
            className="absolute top-4 right-4 w-8 h-8 pointer-events-none"
            style={{
              background: `
                linear-gradient(135deg, transparent 6px, #D4A574 6px, #D4A574 8px, transparent 8px),
                linear-gradient(225deg, transparent 6px, #D4A574 6px, #D4A574 8px, transparent 8px)
              `,
              backgroundPosition: 'top right',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }}
          />
          <div 
            className="absolute top-4 left-4 w-8 h-8 pointer-events-none"
            style={{
              background: `
                linear-gradient(45deg, transparent 6px, #D4A574 6px, #D4A574 8px, transparent 8px),
                linear-gradient(315deg, transparent 6px, #D4A574 6px, #D4A574 8px, transparent 8px)
              `,
              backgroundPosition: 'top left',
              backgroundSize: '100% 100%',
              backgroundRepeat: 'no-repeat'
            }}
          />
        </div>

        {/* Indicadores de Progresso */}
        <div className="flex justify-center gap-2 mb-8">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentImageIndex 
                  ? 'w-8' 
                  : 'w-2'
              }`}
              style={{
                backgroundColor: index === currentImageIndex ? '#722F37' : '#D4A574'
              }}
              aria-label={`Ir para foto ${index + 1}`}
            />
          ))}
        </div>

        {/* Botões de Navegação */}
        <div className="flex justify-center gap-4">
          <button
            onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex - 1 + galleryImages.length) % galleryImages.length)}
            className="px-6 py-3 rounded-lg font-body font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#D4A574',
              color: '#FFFFFF',
              border: '2px solid #722F37'
            }}
          >
            ← Anterior
          </button>
          <button
            onClick={() => setCurrentImageIndex((prevIndex) => (prevIndex + 1) % galleryImages.length)}
            className="px-6 py-3 rounded-lg font-body font-semibold transition-all duration-300 hover:scale-105"
            style={{
              backgroundColor: '#D4A574',
              color: '#FFFFFF',
              border: '2px solid #722F37'
            }}
          >
            Próxima →
          </button>
        </div>

        <p 
          className="font-body text-base text-center mt-12 italic"
          style={{ color: '#8B7355' }}
        >
          💕 Cada momento ao seu lado é uma memória preciosa que guardo para sempre
        </p>
      </div>
    </div>
  );
}
