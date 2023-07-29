import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedPageProps {
    children: ReactNode;
  }

const AnimatedPage: React.FC<AnimatedPageProps> = ({ children }) => {

    const animations = {

        initial: { opacity: 0, x: 100},
        animate: { opacity: 1, x: 0},
        exit: { opacity: 0, x: -100}

    };
    
    return (

      <motion.div
        variants={animations}
        initial='initial'
        animate='animate'
        exit='exit'
        transition={{ duration: 1 }}
      >
        {children}
      </motion.div>

    );
  }
  
  export default AnimatedPage;