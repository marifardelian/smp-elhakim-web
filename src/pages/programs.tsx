import { motion } from 'framer-motion';

import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Navbar } from '../templates/Navbar';

// Card Component Helper
const ProgramCard = ({
  title,
  desc,
  color,
  className,
}: {
  title: string;
  desc: string;
  color: string;
  className?: string;
}) => (
  <motion.div
    {...({ whileHover: { y: -10 } } as any)}
    className={`rounded-2xl border-t-4 p-8 shadow-lg ${color} bg-white ${className}`}
  >
    <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
    <p className="text-gray-600">{desc}</p>
  </motion.div>
);

const Programs = () => (
  <div className="bg-gray-50 text-gray-600 antialiased">
    <Navbar />

    <Section yPadding="py-20">
      <div className="mb-16 text-center">
        <h1 className="font-serif text-4xl font-bold text-blue-900">
          Our Academic Programs
        </h1>
        <p className="mt-4 text-lg text-gray-500">
          Holistic development for every student.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {/* Existing Cards */}
        <ProgramCard
          title="Tahfiz Al-Quran"
          desc="Intensive memorization program targeting 5 Juz per year with proper Tajweed and Makhraj."
          color="border-green-500"
        />
        <ProgramCard
          title="Science & Tech"
          desc="Modern curriculum featuring Computer Lab access, Coding basics, and Science experiments."
          color="border-blue-500"
        />
        <ProgramCard
          title="Scouting (Pramuka)"
          desc="Award-winning scout team focusing on survival skills, leadership, and discipline."
          color="border-red-500"
        />
        <ProgramCard
          title="Language Club"
          desc="Weekly Arabic and English public speaking circles (Muhadharah) to build confidence."
          color="border-yellow-500"
        />
        <ProgramCard
          title="Sports"
          desc="Archery, Futsal, and Badminton facilities to keep the body healthy and active."
          color="border-purple-500"
        />
        <ProgramCard
          title="Boarding School"
          desc="Full boarding facilities with 24/7 mentorship and Islamic environment."
          color="border-indigo-500"
        />
      </div>
    </Section>

    <Footer />
  </div>
);

export default Programs;
