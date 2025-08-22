'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  const imageVariants = {
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
  <section className="relative overflow-hidden px-4" style={{ height: 'calc(100vh - 72px)' }}>
      {/* Background Video with Parallax Effect */}
      <motion.div
        variants={imageVariants}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <motion.video
          src="https://videos.pexels.com/video-files/8123971/8123971-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10 }}
        />
      </motion.div>

             {/* Animated Background Elements */}
       <div className="absolute inset-0 z-5">
         <motion.div
           className="absolute top-1/4 left-1/4 w-32 sm:w-64 h-32 sm:h-64 bg-[var(--color-primary)]/20 rounded-full blur-3xl"
           animate={{
             x: [0, 50, 0],
             y: [0, -30, 0],
           }}
           transition={{
             duration: 8,
             repeat: Infinity,
             ease: "easeInOut",
           }}
         />
         <motion.div
           className="absolute bottom-1/4 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-[var(--color-accent)]/15 rounded-full blur-3xl"
           animate={{
             x: [0, -40, 0],
             y: [0, 40, 0],
           }}
           transition={{
             duration: 10,
             repeat: Infinity,
             ease: "easeInOut",
           }}
         />
       </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
  className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <motion.h1
            className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 leading-[1.15]"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
          >
            <motion.span
              className="block"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              OrionPartners,
            </motion.span>
            <motion.span
              className="block text-[var(--color-accent)] pb-1 leading-normal drop-shadow-sm"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              la transformation des défis complexes
            </motion.span>
            <motion.span
              className="block text-2xl sm:text-3xl md:text-4xl lg:text-5xl mt-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              en opportunités de croissance durable.
            </motion.span>
          </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8 sm:mb-12">
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto leading-relaxed px-4"
            style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Nous nous distinguons par notre expertise reconnue, nos solutions adaptées à chaque secteur
            et une approche qui combine vision stratégique, excellence opérationnelle et innovation
            technologique.
          </motion.p>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center"
        >
                     <motion.div
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto"
           >
             <Button 
               size="lg" 
               variant="secondary"
               className="w-full sm:w-auto shadow-xl"
               onClick={() => {
                 const contactSection = document.getElementById('contact');
                 if (contactSection) {
                   contactSection.scrollIntoView({ behavior: 'smooth' });
                 }
               }}
             >
               Contactez-nous
             </Button>
           </motion.div>
           
           <motion.div
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="w-full sm:w-auto"
           >
             <Button 
               size="lg" 
               variant="outline" 
               className="w-full sm:w-auto border-2 border-[var(--color-white)] text-[var(--color-white)] hover:bg-[var(--color-white)] hover:text-[var(--color-dark)] backdrop-blur-sm bg-[var(--color-white)]/10"
             >
               Découvrez nos expertises en conseil
             </Button>
           </motion.div>
        </motion.div>

        {/* Floating Elements - Hidden on mobile */}
        <div className="hidden sm:block">
          <motion.div
            className="absolute top-10 right-10 w-20 h-20 border border-white/20 rounded-full"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          
          <motion.div
            className="absolute bottom-20 left-10 w-16 h-16 border border-white/20 rounded-full"
            animate={{
              rotate: -360,
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
