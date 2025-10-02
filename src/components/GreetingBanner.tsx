import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import greetings from '@/data/greetings';
import { Sparkles } from 'lucide-react';

const GreetingBanner = () => {
  const [greeting, setGreeting] = useState('');
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    // Pick random greeting on mount
    const randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    setGreeting(randomGreeting);

    // Typing effect
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= randomGreeting.length) {
        setDisplayText(randomGreeting.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <motion.div
      className="relative px-4 py-8 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      {/* Background gradient blob */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent rounded-3xl blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="relative z-10">
        <motion.div
          className="flex items-start gap-2 mb-3"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
        >
          <Sparkles className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
          <motion.h2
            className="font-script text-3xl md:text-4xl text-foreground leading-tight"
            animate={{
              y: [0, -4, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {displayText}
            <motion.span
              className="inline-block w-0.5 h-8 bg-primary ml-1 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />
          </motion.h2>
        </motion.div>

        {/* Subtle sparkle particles */}
        <div className="absolute top-4 right-4 space-y-2">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-1 h-1 rounded-full bg-primary/40"
              animate={{
                scale: [0, 1.5, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default GreetingBanner;
