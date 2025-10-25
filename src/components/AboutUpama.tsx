import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Award,
  Play,
  Users,
  ChefHat,
  Star,
  VolumeX,
  Volume2,
} from "lucide-react";
import video1 from "@/assets/videos/1.mp4";
import didi1 from "@/assets/didi1.jpeg";

const HerStory = () => {
  const ref = useRef(null);
  const videoRef = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

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

  return (
    <section
      ref={ref}
      className="py-20 relative overflow-hidden bg-fixed bg-cover bg-center"
      style={{ backgroundImage: `url(${didi1})` }}
    >
      {/* Dark Overlay for Better Readability */}
      <div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]" />

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center p-8 lg:p-12">
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* Section Header */}
              <div className="space-y-3">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="flex items-center gap-2 text-primary font-semibold text-lg"
                >
                  <Star className="w-5 h-5 fill-primary" />
                  <span>Her Inspiring Journey</span>
                </motion.div>

                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  The Story of{" "}
                  <span className="text-primary">Upama Mukherjee</span>
                </h2>

                <div className="w-20 h-1 bg-primary rounded-full" />
              </div>

              {/* Achievement Badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-3 mb-6"
              >
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 shadow-sm">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-gray-800">
                    Zee Bangla Rannaghorer Rani 2020
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 shadow-sm">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-gray-800">
                    Zee Bangla Didi No.1 Winner 2025
                  </span>
                </div>
              </motion.div>

              {/* Story Content */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-4 text-gray-700 text-lg leading-relaxed"
              >
                <p>
                  From humble beginnings in 2019, Upama started her culinary
                  journey with simple home deliveries, sharing her passion for
                  authentic Bengali cuisine with her local community.
                </p>

                {/* <p>
                  Her dedication to preserving traditional flavors while embracing innovation 
                  quickly gained recognition. What began as a small home kitchen has now 
                  blossomed into a full-fledged catering service and automatic roti machine 
                  dealership.
                </p> */}

                <p>
                  Today, Upama's Kitchen stands as a testament to her vision -
                  combining time-honored recipes with modern culinary technology
                  to serve Kolkata with excellence and authenticity.
                </p>
              </motion.div>

              {/* Milestones - Uncommented and improved */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-3 gap-4 pt-6"
              >
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <ChefHat className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">2019</div>
                  <div className="text-sm text-gray-600">Journey Began</div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Events Catered</div>
                </div>

                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">3</div>
                  <div className="text-sm text-gray-600">
                    Prestigious Awards
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Video Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Video Container */}
                <div className="aspect-video bg-gray-900 relative">
                  <video
                    ref={videoRef}
                    autoPlay
                    muted={isMuted}
                    loop
                    playsInline
                    className="w-full h-full object-cover cursor-pointer"
                    onClick={togglePlay}
                  >
                    <source src={video1} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  {/* Video Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />

                  {/* Play/Pause Button */}
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 1, duration: 0.5 }}
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-14 h-14 bg-primary/90 backdrop-blur-sm rounded-full flex items-center justify-center transform hover:scale-110 transition-transform duration-300">
                      {isPlaying ? (
                        <div className="w-6 h-6 bg-white rounded-sm"></div>
                      ) : (
                        <Play  className="w-6 h-6 text-white fill-white ml-1" />
                      )}
                    </div>
                  </motion.button>

                  {/* Volume Control */}
                  <button
                    onClick={toggleMute}
                    className="absolute bottom-4 right-4 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-all duration-300 backdrop-blur-sm cursor-pointer z-20"
                  >
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full z-0" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/20 rounded-full z-0" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HerStory;