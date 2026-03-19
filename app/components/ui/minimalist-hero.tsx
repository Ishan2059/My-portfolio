import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the props interface for type safety and reusability
interface MinimalistHeroProps {
  logoText: string;
  mainText: string;
  readMoreLink: string;
  imageSrc: string;
  imageAlt: string;
  overlayText: {
    part1: string;
    part2: string;
  };
  socialLinks: { icon: LucideIcon; href: string }[];
  locationText: string;
  className?: string;
}

// Helper component for social media icons
const SocialIcon = ({ href, icon: Icon }: { href: string; icon: LucideIcon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-foreground/60 transition-colors hover:text-foreground">
    <Icon className="h-5 w-5" />
  </a>
);

// The main reusable Hero Section component
export const MinimalistHero = ({
  logoText,
  mainText,
  readMoreLink,
  imageSrc,
  imageAlt,
  overlayText,
  socialLinks,
  locationText,
  className,
}: MinimalistHeroProps) => {
  return (
    <div
      id="hero"
      className={cn(
        'relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-background font-sans',
        className
      )}
    >
      {/* Main Content Area */}
      <div className="relative grid w-full flex-grow grid-cols-1 items-center md:grid-cols-3 gap-8 pt-24 sm:pt-32 px-4 sm:px-6 lg:px-16 xl:px-32">
        {/* Left Text Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="z-20 order-2 md:order-1 text-center md:text-left"
        >
          <p className="mx-auto max-w-xs text-sm leading-relaxed text-foreground/80 md:mx-0">{mainText}</p>
          <a href={readMoreLink} className="mt-4 inline-block text-sm font-medium text-foreground underline decoration-from-font">
            Read More
          </a>
        </motion.div>

        {/* Center Image with Yellow Circle Background */}
        <div className="relative order-1 md:order-2 flex justify-center items-center h-full">
          {/* Yellow Circle Background */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="absolute z-0 h-[220px] w-[220px] rounded-full bg-yellow-400/90 sm:h-[280px] sm:w-[280px] md:h-[380px] md:w-[380px] lg:h-[480px] lg:w-[480px]"
          ></motion.div>

          {/* Profile Image */}
          <motion.img
            src={imageSrc}
            alt={imageAlt}
            className="relative z-10 h-[320px] w-[230px] sm:h-[420px] sm:w-[300px] md:h-[500px] md:w-[350px] lg:h-[600px] lg:w-[420px] object-cover object-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.onerror = null;
              target.src = `https://placehold.co/400x600/000000/ffffff?text=Image+Not+Found`;
            }}
          />
        </div>

        {/* Right Text - Larger Size */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="z-20 order-3 flex items-center justify-center text-center md:justify-start"
        >
          <h1 className="text-5xl font-extrabold text-foreground sm:text-6xl md:text-8xl lg:text-9xl leading-tight">
            {overlayText.part1}
            <br />
            {overlayText.part2}
          </h1>
        </motion.div>
      </div>

      {/* Location Text - Bottom Right */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.3 }}
        className="z-30 absolute bottom-6 right-4 sm:right-6 md:right-12 xl:right-32 pointer-events-none select-none text-xs font-medium text-foreground/80 uppercase tracking-wider"
      >
        {locationText}
      </motion.div>
    </div>
  );
};