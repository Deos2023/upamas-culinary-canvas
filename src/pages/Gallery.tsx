import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Play, Pause, Volume2, VolumeX, Phone, MessageCircle } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import heroImage from '@/assets/1.jpeg';
import weddingImage from '@/assets/machine.jpeg';
import bengaliBreakfast from '@/assets/award (2).jpeg';
import rotiMachine from '@/assets/4.jpeg';
import image1 from '@/assets/5.jpeg';
import image2 from '@/assets/roti.jpeg';
import image3 from '@/assets/ddi1 (3).jpeg';
import image4 from '@/assets/ddi1 (1).jpeg';
import image5 from '@/assets/9.jpeg';
import image6 from '@/assets/10.jpeg';
import image8 from '@/assets/award (1).jpeg';
import image9 from '@/assets/rannaghor (2).jpeg';
import chart from "@/assets/images/chart.jpeg";

import video1 from "@/assets/videos/1.mp4";
import video2 from "@/assets/videos/2.mp4";
import video3 from "@/assets/videos/machine.mp4";
import video4 from "@/assets/videos/machine2.mp4";
import video5 from "@/assets/videos/machine3.mp4";
import video6 from "@/assets/videos/machine4.mp4";
import video7 from "@/assets/videos/roti.mp4";
import video8 from "@/assets/videos/WhatsApp Video 2025-10-23 at 16.07.16.mp4";
import video9 from "@/assets/videos/WhatsApp Video 2025-10-23 at 16.07.51.mp4";
import video10 from "@/assets/videos/WhatsApp Video 2025-10-23 at 16.07.31.mp4";
import video11 from "@/assets/videos/WhatsApp Video 2025-10-23 at 16.07.32.mp4";
import video12 from "@/assets/videos/WhatsApp Video 2025-10-23 at 16.07.34.mp4";

const VideoPlayer = ({ src, title, category }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
    const video = videoRef.current;
    
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    if (video) {
      video.addEventListener('play', handlePlay);
      video.addEventListener('pause', handlePause);
      video.addEventListener('ended', handleEnded);
    }

    return () => {
      if (video) {
        video.removeEventListener('play', handlePlay);
        video.removeEventListener('pause', handlePause);
        video.removeEventListener('ended', handleEnded);
      }
    };
  }, []);

  return (
    <div 
      className="relative aspect-square overflow-hidden group cursor-pointer bg-gray-900"
      onMouseEnter={() => {
        setIsHovered(true);
        setShowControls(true);
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setTimeout(() => setShowControls(false), 2000);
      }}
      onTouchStart={() => setShowControls(true)}
      onTouchEnd={() => setTimeout(() => setShowControls(false), 3000)}
      onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform transition-transform duration-300 group-hover:translate-y-0 translate-y-2">
        <p className="text-xs md:text-sm font-semibold text-primary mb-1 md:mb-2 tracking-wide uppercase">
          {category}
        </p>
        <h3 className="text-base md:text-xl font-bold leading-tight">{title}</h3>
      </div>

      {/* Video Controls */}
      <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 ${
        showControls ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
      }`}>
        <div className="flex items-center gap-2 md:gap-3 bg-black/60 backdrop-blur-md rounded-full px-3 md:px-5 py-2 md:py-4 border border-white/20">
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className="text-white hover:text-primary transition-all duration-200 hover:scale-110"
          >
            {isPlaying ? <Pause size={18} className="md:w-5 md:h-5" /> : <Play size={18} className="ml-0.5 md:w-5 md:h-5" />}
          </button>
          <div className="w-px h-4 md:h-6 bg-white/40"></div>
          <button
            onClick={toggleMute}
            className="text-white hover:text-primary transition-all duration-200 hover:scale-110"
          >
            {isMuted ? <VolumeX size={16} className="md:w-5 md:h-5" /> : <Volume2 size={16} className="md:w-5 md:h-5" />}
          </button>
        </div>
      </div>

      {/* Play Indicator when not playing */}
      {!isPlaying && !showControls && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-primary/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-2xl">
            <Play size={20} className="text-white ml-0.5 md:ml-1 md:w-7 md:h-7" />
          </div>
        </div>
      )}

      {/* Video Badge */}
      <div className="absolute top-3 right-3 md:top-4 md:right-4">
        <div className="bg-primary/90 text-white text-xs font-semibold px-2 py-1 md:px-3 md:py-1.5 rounded-full backdrop-blur-sm">
          VIDEO
        </div>
      </div>
    </div>
  );
};

const ImageCard = ({ src, title, category }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="relative aspect-square overflow-hidden group cursor-pointer bg-gray-900"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={src}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      
      {/* Gradient Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-80'
      }`} />
      
      {/* Content Overlay */}
      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white transform transition-all duration-500 group-hover:translate-y-0 translate-y-4">
        <p className="text-xs md:text-sm font-semibold text-primary mb-1 md:mb-2 tracking-wide uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
          {category}
        </p>
        <h3 className="text-base md:text-xl font-bold leading-tight transform transition-transform duration-500 group-hover:translate-y-0 translate-y-2">
          {title}
        </h3>
      </div>

      {/* Image Badge */}
      <div className="absolute top-3 right-3 md:top-4 md:right-4">
        <div className="bg-white/90 text-gray-900 text-xs font-semibold px-2 py-1 md:px-3 md:py-1.5 rounded-full backdrop-blur-sm">
          PHOTO
        </div>
      </div>
    </div>
  );
};

const Gallery = () => {
  const galleryItems = [
    // Images
    { type: 'image', src: heroImage, title: 'Premium Catering Setup', category: 'Events' },
    { type: 'image', src: weddingImage, title: 'Machine Setup', category: 'Equipment' },
    { type: 'image', src: bengaliBreakfast, title: 'Conclave Winner', category: 'Awards' },
    { type: 'image', src: rotiMachine, title: 'Customer Greeting', category: 'Events' },
    { type: 'image', src: image1, title: 'Customer Satisfaction', category: 'Events' },
    { type: 'image', src: image2, title: 'Roti Making', category: 'Food' },
    { type: 'image', src: image3, title: 'Didi No. 1 Winner', category: 'Awards' },
    { type: 'image', src: image4, title: 'Didi No. 1 Moment', category: 'Awards' },
    { type: 'image', src: image5, title: 'Grand Event', category: 'Events' },
    { type: 'image', src: image6, title: 'Catering Service', category: 'Events' },
    { type: 'image', src: image8, title: 'Leadership Conclave Winner', category: 'Awards' },
    { type: 'image', src: image9, title: 'Ranna Ghorer rani', category: 'Awards' },
    { type: 'image', src: chart, title: 'Business Chart', category: 'Business' },

    // Videos
    { type: 'video', src: video1, title: 'Life Story of Upama', category: 'Documentary' },
    { type: 'video', src: video2, title: 'Vlog: A Day in the Kitchen', category: 'Vlog' },
    { type: 'video', src: video3, title: 'Roti Machine Demo', category: 'Equipment' },
    { type: 'video', src: video4, title: 'Atta Dough Preparation', category: 'Equipment' },
    { type: 'video', src: video5, title: 'Machine Operation', category: 'Equipment' },
    { type: 'video', src: video6, title: 'Roti Production', category: 'Equipment' },
    { type: 'video', src: video7, title: 'Fresh Roti Making', category: 'Food' },
    { type: 'video', src: video8, title: 'Event Catering', category: 'Events' },
    { type: 'video', src: video9, title: 'Roti Making', category: 'Equipment' },
    { type: 'video', src: video10, title: 'Kitchen Operations', category: 'Equipment' },
    { type: 'video', src: video11, title: 'Food Preparation', category: 'Food' },
    { type: 'video', src: video12, title: 'Event Setup', category: 'Events' },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100/50">
      {/* Enhanced Hero Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-primary/20 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl md:blur-3xl" />
          <div className="absolute bottom-0 right-0 w-56 h-56 md:w-80 md:h-80 bg-secondary rounded-full translate-x-1/2 translate-y-1/2 blur-2xl md:blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 text-white">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <div className="w-24 md:w-32 h-1 md:h-1.5 bg-primary rounded-full mx-auto mb-6 md:mb-8" />
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              Discover the excellence of Upama's Kitchen through our culinary creations, 
              successful events, and state-of-the-art equipment demonstrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Gallery Grid */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 md:mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              Visual <span className="text-primary">Showcase</span>
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Explore our journey through captivating visuals and demonstrations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.05,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl border-0 transition-all duration-500 group-hover:border-primary/20">
                  {item.type === 'image' ? (
                    <ImageCard 
                      src={item.src} 
                      title={item.title} 
                      category={item.category} 
                    />
                  ) : (
                    <VideoPlayer 
                      src={item.src} 
                      title={item.title} 
                      category={item.category} 
                    />
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-primary/30 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-48 h-48 md:w-64 md:h-64 bg-white rounded-full translate-x-1/2 -translate-y-1/2 blur-2xl md:blur-3xl" />
          <div className="absolute bottom-0 left-0 w-56 h-56 md:w-80 md:h-80 bg-primary rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl md:blur-3xl" />
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
              Ready to Create <span className="text-primary">Magic</span> Together?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              Let us make your celebration unforgettable with our exquisite cuisine, 
              professional service, and state-of-the-art equipment
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
              <motion.a
                href="tel:+918240594541"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-primary text-white rounded-xl md:rounded-2xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl text-sm md:text-base w-full sm:w-auto justify-center"
              >
                <Phone size={18} className="md:w-5 md:h-5" />
                Call: 8240594541
              </motion.a>
              
              <motion.a
                href="https://wa.me/918240594541"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-[#25D366] text-white rounded-xl md:rounded-2xl font-semibold hover:bg-[#128C7E] transition-all duration-300 shadow-lg md:shadow-2xl hover:shadow-xl md:hover:shadow-3xl text-sm md:text-base w-full sm:w-auto justify-center"
              >
                <MessageCircle size={18} className="md:w-5 md:h-5" />
                WhatsApp Us
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;