import { motion } from 'framer-motion';
import React, { useEffect } from 'react';
import StyledBackdropWrapper from './styles';
import { BackdropWrapperProps } from './types';

const BackdropWrapper: React.FC<BackdropWrapperProps> = ({
  children,
  closeModal,
  hasNoPadding = false,
  smallSize = false,
}) => {
  // Log state
  const dropIn = {
    hidden: {
      y: '-100vh',
      opacity: 0,
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: '100vh',
      opacity: 0,
    },
  };

  // * this willl auto close
  // useEffect(() => {
  //   closeModal()
  // }, [escapePress])

  return (
    <StyledBackdropWrapper>
      <motion.div
        className="backdrop"
        onClick={closeModal}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()} // Prevent click from closing modal
          className={`animated-modal ${hasNoPadding && 'p-0'} ${
            smallSize && 'small'
          }`}
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {children}
        </motion.div>
      </motion.div>
    </StyledBackdropWrapper>
  );
};

export default BackdropWrapper;
