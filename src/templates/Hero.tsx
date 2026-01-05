'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import { Background } from '../background/Background';
import { Button } from '../button/Button';
import { Section } from '../layout/Section';
import { Logo } from './Logo'; // <--- 1. Import the Logo component
import { Navbar } from './Navbar';

const Hero = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start start', 'end start'],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacityText = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <div ref={targetRef} className="relative">
      <Navbar />

      <Background color="bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative">
        {/* --- Parallax Background Blobs --- */}
        <motion.div
          style={{ y: yBg } as any}
          className="absolute right-[-100px] top-[-100px] size-[500px] rounded-full bg-blue-200 opacity-20 blur-3xl"
        />
        <motion.div
          style={{ y: yBg } as any}
          className="absolute bottom-0 left-[-50px] size-[400px] rounded-full bg-red-100 opacity-20 blur-3xl"
        />

        {/* --- Main Content --- */}
        <Section yPadding="pt-12 pb-32">
          <motion.div
            style={{ y: yText, opacity: opacityText } as any}
            className="flex flex-col items-center text-center"
          >
            {/* --- 2. THE BIG HERO LOGO --- */}
            <motion.div
              {...({
                initial: { opacity: 0, scale: 0.8 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.8, ease: 'easeOut' },
              } as any)}
              className="mb-8" // Adds space below the logo
            >
              {/* xl={true} makes it the big version defined in Logo.tsx */}
              <Logo xl={true} />
            </motion.div>
            {/* --------------------------- */}

            {/* Animated Badge */}
            <motion.div
              {...({
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.3 },
              } as any)} // Increased delay slightly
              className="mb-6 rounded-full bg-blue-100 px-4 py-1.5 text-sm font-semibold text-blue-800"
            >
              Open Registration 2026
            </motion.div>

            {/* Main Title */}
            <motion.h1
              {...({
                initial: { opacity: 0, scale: 0.9 },
                animate: { opacity: 1, scale: 1 },
                transition: { delay: 0.4, duration: 0.8 },
              } as any)} // Increased delay slightly
              className="xl:text-7xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl"
            >
              <span className="block font-serif text-blue-900">
                SMP ISLAM CENDEKIA
              </span>
              <span className="block text-red-600">EL-HAKIM</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              {...({
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                transition: { delay: 0.6, duration: 1 },
              } as any)}
              className="mt-6 max-w-2xl text-xl text-slate-600"
            >
              Building the generation of <strong>Qur&apos;anic Leaders</strong>{' '}
              with modern science and character in Aceh Besar.
            </motion.p>

            {/* Buttons */}
            <motion.div
              {...({
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { delay: 0.8 },
              } as any)}
              className="mt-8 flex gap-4"
            >
              <Link href="/contact">
                <motion.div
                  {...({
                    whileHover: { scale: 1.05 },
                    whileTap: { scale: 0.95 },
                  } as any)}
                >
                  <Button xl>Enroll Now</Button>
                </motion.div>
              </Link>

              <Link href="/programs">
                <motion.div
                  {...({
                    whileHover: { scale: 1.05, backgroundColor: '#f1f5f9' },
                    whileTap: { scale: 0.95 },
                  } as any)}
                  className="cursor-pointer rounded-full border-2 border-slate-200 px-8 py-4 font-semibold text-slate-600 transition"
                >
                  View Programs
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </Section>
      </Background>
    </div>
  );
};

export { Hero };
