'use client';

import { motion } from 'framer-motion';
import React from 'react';

// TRICK: We treat 'motion.div' as 'any' to stop TypeScript from complaining about missing props.
const MotionDiv = motion.div as any;

export const FadeIn = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => (
  <MotionDiv
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-100px' }}
    transition={{ duration: 0.8, delay, ease: 'easeOut' }}
  >
    {children}
  </MotionDiv>
);
