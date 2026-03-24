import { useEffect, useRef, useState } from "react";

interface Song {
  title: string;
  artist: string;
  file: string;
}

const playlist: Song[] = [
  {
    title: "Disfruto",
    artist: "Carla Morrison",
    file: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/disfruto_06b4b694.mp3"
  },
  {
    title: "Those Eyes",
    artist: "NewWest (Home Session)",
    file: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/those-eyes_64d0f262.mp3"
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    file: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/perfect_e418cf26.mp3"
  },
  {
    title: "A Thousand Years",
    artist: "Christina Perri",
    file: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/a-thousand-years_fc9d711b.mp3"
  },
  {
    title: "Si No Estás",
    artist: "Íñigo Quintero",
    file: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/ÍñigoQuintero-SiNoEstás_f32dc95e.mp3"
  },
  {
    title: "Obra de Arte",
    artist: "Succi F. Caetano",
    file: "https://d2xsxph8kpxj0f.cloudfront.net/310519663285313813/6gT9qMBi9VBvUzfjQXozmn/ObradeArteSucciF.Caetano_f15281e1.mp3"
  }
];

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.7);

  const currentSong = playlist[currentSongIndex];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => {
      if (currentSongIndex < playlist.length - 1) {
        setCurrentSongIndex(currentSongIndex + 1);
      } else {
        setCurrentSongIndex(0);
      }
    };

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, [currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error('Autoplay failed:', error);
        });
      }
    } else {
      audio.pause();
    }
  }, [isPlaying, currentSongIndex]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (!currentSong.file) return;
    setIsPlaying(!isPlaying);
  };

  const handlePrevious = () => {
    if (currentSongIndex > 0) {
      setCurrentSongIndex(currentSongIndex - 1);
      setIsPlaying(true);
    }
  };

  const handleNext = () => {
    if (currentSongIndex < playlist.length - 1) {
      setCurrentSongIndex(currentSongIndex + 1);
      setIsPlaying(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (audio) {
      const newTime = parseFloat(e.target.value);
      audio.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div className="w-full py-20 px-4" style={{ backgroundColor: '#F5F1E8' }}>
      <div className="max-w-3xl mx-auto">
        <h2 
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
          style={{ color: '#722F37' }}
        >
          Músicas que lembram você
        </h2>
        <p 
          className="font-body text-lg text-center mb-12"
          style={{ color: '#8B7355' }}
        >
          Músicas que marcam momentos especiais entre nós
        </p>

        <div 
          className="bg-white/90 backdrop-blur-sm rounded-lg p-8 border-2 shadow-2xl relative overflow-hidden"
          style={{ borderColor: '#D4A574' }}
        >
          {/* Decorative Pattern */}
          <div 
            className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none"
            style={{
              backgroundImage: 'url(/images/art-deco-pattern.png)',
              backgroundSize: 'cover'
            }}
          />

          <div className="relative z-10">
            {/* Current Song Info */}
            <div className="text-center mb-8">
              <h3 
                className="font-display text-3xl font-bold mb-2"
                style={{ color: '#722F37' }}
              >
                {currentSong.title}
              </h3>
              <p 
                className="font-body text-lg"
                style={{ color: '#8B7355' }}
              >
                {currentSong.artist}
              </p>
              {currentSongIndex === 0 && (
                <p 
                  className="font-body text-sm mt-2 italic"
                  style={{ color: '#D4A574' }}
                >
                  ✨ Música especial para você
                </p>
              )}
            </div>

            {/* Progress Bar */}
            <div className="mb-6">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                disabled={!currentSong.file}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #D4A574 0%, #D4A574 ${(currentTime / duration) * 100}%, #E5E5E5 ${(currentTime / duration) * 100}%, #E5E5E5 100%)`
                }}
              />
              <div className="flex justify-between mt-2 font-body text-sm" style={{ color: '#8B7355' }}>
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-6 mb-6">
              <button
                onClick={handlePrevious}
                disabled={currentSongIndex === 0}
                className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30"
                style={{ 
                  borderColor: '#D4A574',
                  color: '#722F37'
                }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z"/>
                </svg>
              </button>

              <button
                onClick={togglePlay}
                disabled={!currentSong.file}
                className="w-16 h-16 rounded-full flex items-center justify-center transition-all hover:scale-110 shadow-lg disabled:opacity-50"
                style={{ 
                  backgroundColor: '#D4A574',
                  color: '#FFFFFF'
                }}
              >
                {isPlaying ? (
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                  </svg>
                ) : (
                  <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                )}
              </button>

              <button
                onClick={handleNext}
                disabled={currentSongIndex === playlist.length - 1}
                className="w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all hover:scale-110 disabled:opacity-30"
                style={{ 
                  borderColor: '#D4A574',
                  color: '#722F37'
                }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 18h2V6h-2zm-11-6l8.5-6v12z"/>
                </svg>
              </button>
            </div>

            {/* Volume Control */}
            <div className="flex items-center gap-4">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#8B7355' }}>
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/>
              </svg>
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="flex-1 h-2 rounded-lg appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #D4A574 0%, #D4A574 ${volume * 100}%, #E5E5E5 ${volume * 100}%, #E5E5E5 100%)`
                }}
              />
            </div>

            {/* Playlist */}
            <div className="mt-8 space-y-2">
              {playlist.map((song, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (song.file) {
                      setCurrentSongIndex(index);
                      setIsPlaying(true);
                    }
                  }}
                  disabled={!song.file}
                  className={`w-full text-left p-4 rounded-lg transition-all ${
                    index === currentSongIndex 
                      ? 'bg-gradient-to-r from-rose-100 to-champagne-100' 
                      : 'hover:bg-gray-50'
                  } ${!song.file ? 'opacity-50 cursor-not-allowed' : ''}`}
                  style={{
                    borderLeft: index === currentSongIndex ? '4px solid #D4A574' : '4px solid transparent'
                  }}
                >
                  <div className="font-display font-semibold" style={{ color: '#722F37' }}>
                    {song.title}
                  </div>
                  <div className="font-body text-sm" style={{ color: '#8B7355' }}>
                    {song.artist}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <audio ref={audioRef} src={currentSong.file} autoPlay />
        </div>
      </div>
    </div>
  );
}
