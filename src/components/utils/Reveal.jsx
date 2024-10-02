import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation, useIsPresent } from 'framer-motion';

export default function Reveal({ children, width = "fit-content" }) {
  const ref = useRef(null);
  const mainControls = useAnimation();
  const slideControls = useAnimation();
  const inView = useInView(ref, { once: false });
  const isPresent = useIsPresent();

  useEffect(() => {
    if (inView) {
      mainControls.start('visible');
      slideControls.start('visible');
    } else 
    {
      mainControls.start('hidden');
      slideControls.start('hidden');
    }
  }, [inView]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 75 },
        }}
        ref={ref}
        animate={mainControls}
        initial="hidden"
        transition={{ duration: 0.5 }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        animate={slideControls}
        initial="hidden"
        transition={{ duration: 0.5, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          right: 0,
          left: 0,
          background: "black",
          zIndex: 20,
        }}
      >
      </motion.div>
    </div>

  );
}