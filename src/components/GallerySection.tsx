import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Play, Expand, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Import your assets
import rotiMachineVideo from '@/assets/videos/roti.mp4';
import attaDoughVideo from '@/assets/videos/atta-dough.mp4';
import luchi from '@/assets/videos/luchi.mp4';
import machineUse from '@/assets/videos/machine-use.mp4';
import galleryImage3 from '@/assets/award (2).jpeg';
import galleryImage4 from '@/assets/award (1).jpeg';
import kochuri from '@/assets/videos/roti-machine.mp4';
import awardShow from '@/assets/videos/award-show.mp4';
import zeeWinner from '@/assets/zeewinner (4).jpeg';
import didi1 from '@/assets/ddi1 (1).jpeg';
import didi2 from '@/assets/ddi1 (3).jpeg';
import zeeWinner2 from '@/assets/zeewinner (2).jpeg';

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Gallery items - mix of videos and images
  const galleryItems = [
    {
      type: 'video',
      src: rotiMachineVideo,
      thumbnail: '/path-to-roti-machine-thumbnail.jpg', // Add thumbnails for better performance
      title: 'Automatic Roti Making Machine',
      description: 'State-of-the-art technology for perfect rotis'
    },
    {
      type: 'video',
      src: attaDoughVideo,
      thumbnail: '/path-to-atta-dough-thumbnail.jpg',
      title: 'Atta Dough Preparation',
      description: 'Traditional methods meet modern efficiency'
    },
    {
      type: 'video',
      src: luchi,
      title: 'Freshly Made Luchis',
      description: 'Perfectly cooked and served warm'
    },
    {
      type: 'video',
      src: kochuri,
      title: 'Kochuri Making Process',
      description: 'A glimpse into the art of making Kochuris'
    },
    {
      type: 'video',
      src: machineUse,
      title: 'Machine Setup',
      description: 'Professional arrangements for events'
    },
    {
      type: 'video',
      src: awardShow,
      title: 'Award Ceremony',
      description: 'Celebrating culinary excellence'
    },
     {
      type: 'image',
      src: galleryImage3,
      title: 'Award Winning Cuisine',
      description: 'Recognition for culinary excellence'
    },
    {
      type: 'image',
      src: galleryImage4,
      title: 'Award Winning Cuisine',
      description: 'Recognition for culinary excellence'
    },
    {
      type: 'image',
      src: zeeWinner,
      title: 'Leadership Conclave Winner',
      description: 'Zee Bangla Leadership Conclave Award'
    },
    {
      type: 'image',
      src: zeeWinner2,
      title: 'Leadership Conclave Winner',
      description: 'Zee Bangla Leadership Conclave Award'
    },
    {
      type: 'image',
      src: didi1,
      title: 'Didi no1 winner',
      description: 'Reality Show Award'
    },
    {
      type: 'image',
      src: didi2,
      title: 'Didi no1 winner',
      description: 'Reality Show Award'
    },
  ];

  const openModal = (index) => {
    setSelectedMedia(galleryItems[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedMedia(null);
  };

  const nextMedia = () => {
    const nextIndex = (currentIndex + 1) % galleryItems.length;
    setSelectedMedia(galleryItems[nextIndex]);
    setCurrentIndex(nextIndex);
  };

  const prevMedia = () => {
    const prevIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setSelectedMedia(galleryItems[prevIndex]);
    setCurrentIndex(prevIndex);
  };

  return (
    <>
      <section ref={ref} className=" bg-gradient-to-br from-slate-50 to-slate-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary rounded-full translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our <span className="text-primary">Gallery</span>
            </h2>
            <div className="w-24 h-1 bg-primary rounded-full mx-auto mb-6" />
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Witness the excellence of Upama's Kitchen through our state-of-the-art machinery 
              and memorable culinary moments
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-8"
          >
            {galleryItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
                onClick={() => openModal(index)}
              >
                {/* Media Container */}
                <div className="aspect-square relative overflow-hidden">
                  {item.type === 'video' ? (
                    <>
                      <video
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        poster={item.thumbnail}
                      >
                        <source src={item.src} type="video/mp4" />
                      </video>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                          <Play className="w-6 h-6 text-white fill-white ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <img
                        src={item.src}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                    </>
                  )}

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Expand className="w-6 h-6 text-white bg-black/50 rounded p-1 backdrop-blur-sm" />
                  </div>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* View Full Gallery Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center"
          >
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 mb-6 rounded-full"
            >
              <Link to="/gallery">
                View Full Gallery
                <Expand className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Modal for Expanded View */}
      {selectedMedia && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 z-10 text-white hover:text-primary transition-colors duration-200"
          >
            <X size={32} />
          </button>

          {/* Navigation Buttons */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevMedia();
            }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary transition-colors duration-200"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextMedia();
            }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary transition-colors duration-200"
          >
            <ChevronRight size={40} />
          </button>

          {/* Media Content */}
          <div
            className="relative max-w-6xl max-h-[90vh] w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'video' ? (
              <div className="relative">
                <video
                  autoPlay
                  controls
                  muted={false}
                  className="w-full h-auto max-h-[80vh] rounded-lg"
                >
                  <source src={selectedMedia.src} type="video/mp4" />
                </video>
                <div className="absolute bottom-4 left-4 text-white bg-black/50 rounded px-3 py-1 backdrop-blur-sm">
                  <Play className="w-4 h-4 inline mr-2" />
                  Video
                </div>
              </div>
            ) : (
              <div className="relative">
                <img
                  src={selectedMedia.src}
                  alt={selectedMedia.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
                <div className="absolute bottom-4 left-4 text-white bg-black/50 rounded px-3 py-1 backdrop-blur-sm">
                  Photo
                </div>
              </div>
            )}

            {/* Caption */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white rounded-lg px-6 py-3 backdrop-blur-sm text-center min-w-[300px]">
              <h3 className="font-semibold text-lg">{selectedMedia.title}</h3>
              <p className="text-sm text-gray-200">{selectedMedia.description}</p>
            </div>
          </div>

          {/* Index Indicator */}
          <div className="absolute bottom-4 right-4 text-white bg-black/50 rounded px-3 py-1 backdrop-blur-sm">
            {currentIndex + 1} / {galleryItems.length}
          </div>
        </motion.div>
      )}
    </>
  );
};

export default GallerySection;