import React from 'react';

export const ImageAutoSlider = () => {
  // Images for the infinite scroll - diverse fashion models, full body shots
  // High quality, 8k-like resolution feel from Unsplash
  const images = [
    "https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=2574&auto=format&fit=crop", // Black dress, full body
    "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=2574&auto=format&fit=crop", // Men's suit, full body
    "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=2572&auto=format&fit=crop", // Chic fashion, full body
    "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?q=80&w=2574&auto=format&fit=crop", // Men's coat, full body
    "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=2574&auto=format&fit=crop", // Elegant dress, full body
    "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?q=80&w=2574&auto=format&fit=crop", // Men's street style, full body
    "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?q=80&w=2574&auto=format&fit=crop", // Vintage style, full body
    "https://images.unsplash.com/photo-1605763240004-7d93b172d7db?q=80&w=2574&auto=format&fit=crop", // Plus size fashion, full body
  ];

  // Duplicate images for seamless loop
  const duplicatedImages = [...images, ...images];

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .infinite-scroll {
          animation: scroll-right 40s linear infinite; /* Slower animation for better viewing */
        }
        
        /* Pause animation on hover */
        .infinite-scroll:hover {
          animation-play-state: paused;
        }

        .scroll-container {
          mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(
            90deg,
            transparent 0%,
            black 5%,
            black 95%,
            transparent 100%
          );
        }

        .image-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }

        .image-item:hover {
          transform: scale(1.02);
          filter: brightness(1.1);
        }
      `}</style>
      
      <div className="w-full py-20 bg-zinc-950/50 relative overflow-hidden flex flex-col items-center justify-center border-t border-b border-white/5">
        
        <div className="text-center mb-10 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Resultados Ultra-Realistas</h3>
            <p className="text-zinc-400">Modelos de corpo inteiro para valorizar cada detalhe do look.</p>
        </div>

        {/* Scrolling images container */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="scroll-container w-full max-w-[100vw]">
            <div className="infinite-scroll flex gap-6 w-max px-6">
              {duplicatedImages.map((image, index) => (
                <div
                  key={index}
                  className="image-item flex-shrink-0 w-64 h-[400px] md:w-80 md:h-[500px] rounded-xl overflow-hidden shadow-2xl border border-white/10"
                >
                  <img
                    src={image}
                    alt={`Modelo IA ${index}`}
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
