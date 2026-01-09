import { motion, useInView } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import { Play, Video, ArrowLeft } from 'lucide-react';
import rippleVideo from '../../assets/Videos/ripple-effect.mp4';
import mahasatiVideo from '../../assets/Videos/mahasati.mp4';
import gunFightVideo from '../../assets/Videos/gun-fight.mp4';

export function MediaGallerySection() {
  const mediaItems = [
    {
      title: 'Ripple Effect',
      caption: 'Exclusive look at the making of our short film',
      videoSrc: rippleVideo,
    },
    {
      title: 'Mahasati',
      caption: 'Journey of documenting Sati Stones heritage',
      videoSrc: mahasatiVideo,
    },
    {
      title: 'Gun Fight',
      caption: 'Action short film excerpt',
      videoSrc: gunFightVideo,
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const [openVideo, setOpenVideo] = useState(null as string | null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [posters, setPosters] = useState({} as Record<string, string>);

  useEffect(() => {
    if (!openVideo && videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      videoRef.current.currentTime = 0;
    }
  }, [openVideo]);

  const openPlayer = (src: string) => {
    setOpenVideo(src);
    // Try to play immediately on the next frame (keeps user gesture context in most browsers)
    requestAnimationFrame(() => {
      const v = videoRef.current as HTMLVideoElement | null;
      if (!v) return;
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    });
  };

  // Generate a poster image (data URL) from the first frame of local videos
  useEffect(() => {
    const generatePoster = async (src: string, key: string) => {
      try {
        const v = document.createElement('video');
        v.src = src;
        v.crossOrigin = 'anonymous';
        v.muted = true;
        v.preload = 'metadata';

        await new Promise((resolve, reject) => {
          const onLoaded = () => resolve(true);
          v.addEventListener('loadeddata', onLoaded);
          v.addEventListener('error', reject);
        });

        // seek small amount to ensure frame available
        v.currentTime = Math.min(0.5, (v.duration || 0));
        await new Promise((resolve) => v.addEventListener('seeked', resolve, { once: true }));

        const canvas = document.createElement('canvas');
        const w = Math.min(1280, v.videoWidth || 640);
        const h = Math.min(720, v.videoHeight || 360);
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;
        ctx.drawImage(v, 0, 0, w, h);
        const data = canvas.toDataURL('image/jpeg', 0.8);
        setPosters((p: any) => ({ ...p, [key]: data }));
      } catch (e) {
        // ignore poster generation errors
      }
    };

    // generate posters for all items that have a local videoSrc
    const videoItems = mediaItems.filter((m) => (m as any).videoSrc);
    videoItems.forEach((m) => {
      generatePoster((m as any).videoSrc as string, m.title);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (openVideo && videoRef.current) {
      const v = videoRef.current as HTMLVideoElement;
      // try to play, handle promise rejection silently
      v.play()
        .then(() => setIsPlaying(true))
        .catch(() => setIsPlaying(false));
    }
  }, [openVideo]);

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setIsPlaying(true);
    } else {
      v.pause();
      setIsPlaying(false);
    }
  };

  const stopVideo = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
    setIsPlaying(false);
  };

  const skip = (seconds: number) => {
    const v = videoRef.current;
    if (!v) return;
    v.currentTime = Math.max(0, Math.min(v.duration || 0, v.currentTime + seconds));
  };

  const goBack = () => {
    setOpenVideo(null);
    // scroll back to the media section for context
    setTimeout(() => {
      if (ref && ref.current && typeof (ref.current as any).scrollIntoView === 'function') {
        (ref.current as any).scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 150);
  };

  return (
    <section
      id="media"
      ref={ref}
      className="py-24 bg-black relative overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff0a_1px,transparent_1px)] bg-[size:2rem_2rem]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-4 text-amber-500">
            <Video size={20} />
            <span className="text-sm tracking-wider uppercase">Visual Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl text-white mb-4">Media Gallery</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-blue-500 mx-auto" />
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore video content showcasing my work, creative process, and festival
            experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {mediaItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-amber-500/50 transition-all duration-300"
            >
              {/* Video Thumbnail */}
              <div className="relative aspect-video overflow-hidden">
                {/* For the Ripple Effect item, open the custom player modal on click */}
                {item.videoSrc ? (
                  <div
                    onClick={() => openPlayer(item.videoSrc as string)}
                    className="w-full h-full bg-black flex items-center justify-center cursor-pointer relative"
                  >
                    {/* show generated poster if available */}
                    {posters[item.title] ? (
                      <img
                        src={posters[item.title]}
                        alt={`${item.title} poster`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-black" />
                    )}

                    <div className="absolute inset-0 opacity-70 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="flex flex-col items-center gap-3 z-10">
                      <div className="w-16 h-16 rounded-full bg-amber-500/90 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <Play fill="white" className="text-white ml-1" size={24} />
                      </div>
                      <span className="text-white text-sm">Preview Video</span>
                    </div>
                  </div>
                ) : (
                  <img
                    src={(item as any).thumbnail}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
              </div>

              {/* Video Info */}
              <div className="p-5">
                <h3 className="text-white mb-2 group-hover:text-amber-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm">{item.caption}</p>
              </div>
            </motion.div>
          ))}
        </div>
        {/* Video player modal (opens when an item.videoSrc is clicked) */}
        {openVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="w-full max-w-4xl bg-black rounded-xl overflow-hidden">
              <div className="relative bg-black">
                <video
                  ref={videoRef}
                  src={openVideo}
                  className="w-full h-auto max-h-[70vh] bg-black"
                  playsInline
                  controls
                />

                {/* Floating Back icon (visible and prominent) */}
                <button
                  onClick={goBack}
                  className="absolute top-4 left-4 z-40 w-10 h-10 rounded-full bg-amber-500/90 flex items-center justify-center shadow-lg"
                  aria-label="Back"
                >
                  <ArrowLeft size={18} className="text-black" />
                </button>

                {/* Controls */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-3 bg-black/50 rounded-full px-3 py-2 z-30">
                  <button
                    onClick={() => skip(-10)}
                    className="text-white bg-white/5 px-3 py-1 rounded-md"
                  >
                    -10s
                  </button>

                  <button
                    onClick={togglePlay}
                    className="text-white bg-white/5 px-4 py-2 rounded-md"
                  >
                    {isPlaying ? 'Pause' : 'Play'}
                  </button>

                  <button
                    onClick={stopVideo}
                    className="text-white bg-white/5 px-3 py-1 rounded-md"
                  >
                    Stop
                  </button>

                  <button
                    onClick={() => skip(10)}
                    className="text-white bg-white/5 px-3 py-1 rounded-md"
                  >
                    +10s
                  </button>
                </div>

                {/* Close button */}
                <div className="absolute top-3 right-3 flex items-center gap-2 z-30">
                  <button
                    onClick={goBack}
                    className="text-white bg-white/5 px-3 py-1 rounded-md"
                  >
                    Back
                  </button>
                  <button
                    onClick={() => setOpenVideo(null)}
                    className="text-white bg-white/5 px-3 py-1 rounded-md"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Note about embedding */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-gray-600 mt-12 text-sm"
        >
          Video placeholders ready for embedding YouTube, Vimeo, or custom video content
        </motion.p>
      </div>
    </section>
  );
}
