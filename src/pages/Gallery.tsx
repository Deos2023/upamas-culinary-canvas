import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import heroImage from '@/assets/1.jpeg';
import weddingImage from '@/assets/2.jpeg';
import bengaliBreakfast from '@/assets/3.jpeg';
import rotiMachine from '@/assets/4.jpeg';
import image1 from '@/assets/5.jpeg'
import image2 from '@/assets/6.jpeg'
import image3 from '@/assets/7.jpeg'
import image4 from '@/assets/8.jpeg'
import image5 from '@/assets/9.jpeg'
import image6 from '@/assets/10.jpeg'
import image8 from '@/assets/food.jpeg'
import image9 from '@/assets/food2.jpeg'

import video1 from "@/assets/videos/1.mp4"
import video2 from "@/assets/videos/2.mp4"
import video3 from "@/assets/videos/machine.mp4"
import video4 from "@/assets/videos/machine2.mp4"
import video5 from "@/assets/videos/machine3.mp4"
import video6 from "@/assets/videos/machine4.mp4"
import video7 from "@/assets/videos/roti.mp4"
import video8 from "@/assets/videos/WhatsApp Video 2025-10-23 at 16.07.16.mp4"
import video9 from "@/assets/videos/WhatsApp Video 2025-10-23 at 16.07.51.mp4"
import video10 from "@/assets/videos/WhatsApp Video 2025-10-23 at 16.07.31.mp4"
import video11 from "@/assets/videos/WhatsApp Video 2025-10-23 at 16.07.32.mp4"
import video12 from "@/assets/videos/WhatsApp Video 2025-10-23 at 16.07.34.mp4"

const VideoPlayer = ({ src, title, category }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  useEffect(() => {
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
      className="relative aspect-square overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <video
        ref={videoRef}
        src={src}
        muted={isMuted}
        loop
        playsInline
        preload="metadata"
        className="w-full h-full object-cover"
        poster={heroImage} // Fallback poster
      />
      
      {/* Overlay with controls */}
      <div className={`absolute inset-0 bg-gradient-to-t from-black/70 to-transparent transition-opacity duration-300 ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`}>
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <p className="text-sm font-medium text-primary mb-1">{category}</p>
          <h3 className="text-lg font-bold">{title}</h3>
        </div>
        
        {/* Video Controls */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-3 bg-black/50 backdrop-blur-sm rounded-full px-4 py-3">
          <button
            onClick={togglePlay}
            className="text-white hover:text-primary transition-colors"
          >
            {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <div className="w-px h-6 bg-white/30"></div>
          <button
            onClick={toggleMute}
            className="text-white hover:text-primary transition-colors"
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
        </div>
      </div>

      {/* Play button overlay when not hovered and not playing */}
      {!isPlaying && !isHovered && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="w-12 h-12 bg-primary/80 rounded-full flex items-center justify-center">
            <Play size={24} className="text-white ml-1" />
          </div>
        </div>
      )}
    </div>
  );
};

const Gallery = () => {
  const galleryItems = [
    // Images
    { type: 'image', src: heroImage, title: 'Premium Catering Setup', category: 'Events' },
    { type: 'image', src: weddingImage, title: 'Awards & Recognition', category: 'Awards' },
    { type: 'image', src: bengaliBreakfast, title: 'Traditional Breakfast', category: 'Food' },
    { type: 'image', src: rotiMachine, title: 'Roti Machine Setup', category: 'Equipment' },
    { type: 'image', src: image1, title: 'Food Presentation', category: 'Food' },
    { type: 'image', src: image2, title: 'Event Setup', category: 'Events' },
    { type: 'image', src: image3, title: 'Delicious Dishes', category: 'Food' },
    { type: 'image', src: image4, title: 'Kitchen Equipment', category: 'Equipment' },
    { type: 'image', src: image5, title: 'Grand Event', category: 'Events' },
    { type: 'image', src: image6, title: 'Catering Service', category: 'Events' },
    { type: 'image', src: image8, title: 'Food Platter', category: 'Food' },
    { type: 'image', src: image9, title: 'Traditional Bengali Food', category: 'Food' },
    
    // Videos
    { type: 'video', src: video1, title: 'Catering Service in Action', category: 'Events' },
    { type: 'video', src: video2, title: 'Food Preparation', category: 'Food' },
    { type: 'video', src: video3, title: 'Roti Machine Demo', category: 'Equipment' },
    { type: 'video', src: video4, title: 'Automatic Roti Making', category: 'Equipment' },
    { type: 'video', src: video5, title: 'Machine Operation', category: 'Equipment' },
    { type: 'video', src: video6, title: 'Roti Production', category: 'Equipment' },
    { type: 'video', src: video7, title: 'Fresh Roti Making', category: 'Food' },
    { type: 'video', src: video8, title: 'Event Catering', category: 'Events' },
    { type: 'video', src: video9, title: 'Food Service', category: 'Events' },
    { type: 'video', src: video10, title: 'WhatsApp Video', category: 'Events' },
    { type: 'video', src: video11, title: 'WhatsApp Video', category: 'Events' },
    { type: 'video', src: video12, title: 'WhatsApp Video', category: 'Events' },
  ];

  return (
    <main className="overflow-x-hidden">
      {/* Hero */}
      <section className="py-20 bg-gradient-to-br from-black/60 to-secondary/20">
        <div className="container mx-auto px-4 text-center bg-black/60 py-12 rounded-lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
              Our <span className="text-primary">Gallery</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A glimpse into our delicious creations, successful events, and equipment demonstrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="group cursor-pointer"
              >
                <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow border-0">
                  {item.type === 'image' ? (
                    <div className="relative aspect-square overflow-hidden">
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                          <p className="text-sm font-medium text-primary mb-1">{item.category}</p>
                          <h3 className="text-lg font-bold">{item.title}</h3>
                        </div>
                      </div>
                    </div>
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

      {/* CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Want Us to Create <span className="text-primary">Magic</span> at Your Event?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let us make your celebration memorable with our delicious food and professional service
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="tel:+918240594541"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition"
            >
              Call: 8240594541
            </motion.a>
            <motion.a
              href="https://wa.me/918240594541"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="inline-block px-8 py-4 bg-[#25D366] text-white rounded-lg font-semibold hover:bg-[#128C7E] transition"
            >
              WhatsApp Us
            </motion.a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;