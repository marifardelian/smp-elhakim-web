'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Navbar } from '../templates/Navbar';

// --- THE FIX: Create a "Lawless" Component ---
const MotionDiv = motion.div as any;

// --- DATA: List of Extracurriculars ---
const clubs = [
  {
    id: 1,
    category: 'Sports',
    title: 'Archery',
    icon: '🏹',
    desc: 'Sunnah sport training focus and patience.',
  },
  {
    id: 2,
    category: 'Sports',
    title: 'Futsal Team',
    icon: '⚽',
    desc: 'Competitive team fostering teamwork and stamina.',
  },
  {
    id: 3,
    category: 'Sports',
    title: 'Badminton',
    icon: '🏸',
    desc: 'Weekly training for agility and reflex.',
  },
  {
    id: 4,
    category: 'Arts',
    title: 'Calligraphy (Khat)',
    icon: '✒️',
    desc: 'The art of beautiful Islamic writing.',
  },
  {
    id: 5,
    category: 'Arts',
    title: 'Nasyid & Vitals',
    icon: '🎤',
    desc: 'Vocal training for Islamic performances.',
  },
  {
    id: 6,
    category: 'Academic',
    title: 'English Club',
    icon: '🗣️',
    desc: 'Public speaking and debate forum.',
  },
  {
    id: 7,
    category: 'Academic',
    title: 'Science & Robot',
    icon: '🤖',
    desc: 'Experiments and basic robotics logic.',
  },
  {
    id: 8,
    category: 'Leadership',
    title: 'Scouts (Pramuka)',
    icon: '⚜️',
    desc: 'Survival skills, camping, and discipline.',
  },
  {
    id: 9,
    category: 'Leadership',
    title: 'OSIS',
    icon: '👔',
    desc: 'Student Council managing school events and discipline.',
  },
];

const Extracurricular = () => {
  const [filter, setFilter] = useState('All');

  const filteredClubs =
    filter === 'All' ? clubs : clubs.filter((c) => c.category === filter);

  return (
    <div className="bg-gray-50 text-gray-600 antialiased">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <Background color="bg-blue-50 text-blue-900 border-b border-blue-100">
        <Section yPadding="py-16 md:py-24">
          <div className="px-4 text-center">
            <h1 className="mb-4 font-serif text-3xl font-bold md:mb-6 md:text-5xl">
              Student Life & Activities
            </h1>
            <p className="mx-auto max-w-3xl text-lg leading-relaxed text-blue-700/80 md:text-2xl">
              Beyond the classroom: Building Talent, Confidence, and Brotherhood
              through diverse programs.
            </p>
          </div>
        </Section>
      </Background>

      {/* --- MAJOR EVENTS SECTION --- */}
      <Section yPadding="py-12 md:py-20">
        <div className="space-y-16 md:space-y-24">
          {/* 1. PSA (Pentas Siswa Akhir) */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="mb-4 inline-block rounded-full bg-orange-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-orange-600 md:text-sm">
                Annual Grand Event
              </div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-blue-900 md:mb-6 md:text-4xl">
                Pentas Siswa Akhir (PSA)
              </h2>
              {/* --- FIXED LINE BELOW: Used &quot; instead of " --- */}
              <p className="mb-6 text-base leading-relaxed text-gray-600 md:mb-8 md:text-lg">
                The &quot;Grand Finale&quot; art performance completely managed
                by students. From drama, choreography, to lighting—this event
                proves that our students are not just scholars, but creators and
                leaders.
              </p>
              <ul className="space-y-2 text-base font-medium text-gray-700 md:space-y-3 md:text-lg">
                <li className="flex items-center">
                  <span className="mr-3 text-orange-500">✨</span> Drama &
                  Theater Productions
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-orange-500">✨</span> Giant Stage
                  Design
                </li>
              </ul>
            </MotionDiv>

            {/* IMAGE: PSA */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="group relative order-1 h-64 cursor-pointer overflow-hidden rounded-3xl shadow-2xl md:order-2 md:h-[400px]"
            >
              <img
                src="/psa.png"
                alt="Pentas Siswa Akhir Stage"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
            </MotionDiv>
          </div>

          {/* 2. Jambore (Scouts) */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            {/* IMAGE: JAMBORE */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="group relative h-64 cursor-pointer overflow-hidden rounded-3xl shadow-2xl md:h-[400px]"
            >
              <img
                src="/jambore.png"
                alt="Scout Jambore"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
            </MotionDiv>

            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="mb-4 inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-600 md:text-sm">
                Adventure & Survival
              </div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-blue-900 md:mb-6 md:text-4xl">
                Jambore & Scouting
              </h2>
              <p className="mb-6 text-base leading-relaxed text-gray-600 md:mb-8 md:text-lg">
                Our Scout Team (Pramuka) is one of the most active in Aceh
                Besar. We regularly participate in regional Jambore, teaching
                students survival skills, cooking in the wild, leadership, and
                discipline.
              </p>
              <button className="rounded-full bg-blue-900 px-6 py-2 text-sm font-bold text-white shadow-md transition hover:bg-blue-800 md:px-8 md:py-3 md:text-base">
                View Achievements
              </button>
            </MotionDiv>
          </div>

          {/* 3. OSIS (Student Council) */}
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-12">
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1"
            >
              <div className="mb-4 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-600 md:text-sm">
                Leadership Body
              </div>
              <h2 className="mb-4 font-serif text-3xl font-bold text-blue-900 md:mb-6 md:text-4xl">
                OSIS (Student Council)
              </h2>
              <p className="mb-6 text-base leading-relaxed text-gray-600 md:mb-8 md:text-lg">
                The Organization of Intra-School Students (OSIS) is the
                heartbeat of student leadership. OSIS members manage daily
                discipline, organize school events (like Class Meetings), and
                serve as the bridge between teachers and students.
              </p>
              <ul className="space-y-2 text-base font-medium text-gray-700 md:space-y-3 md:text-lg">
                <li className="flex items-center">
                  <span className="mr-3 text-blue-500">✨</span> Event
                  Management (Class Meeting)
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-blue-500">✨</span> Discipline &
                  Moral Enforcement
                </li>
              </ul>
            </MotionDiv>

            {/* IMAGE: OSIS */}
            <MotionDiv
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="group relative order-1 h-64 cursor-pointer overflow-hidden rounded-3xl shadow-2xl md:order-2 md:h-[400px]"
            >
              <img
                src="/osis.png"
                alt="OSIS Student Council"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
            </MotionDiv>
          </div>
        </div>
      </Section>

      {/* --- INTERACTIVE CLUBS DIRECTORY --- */}
      <div className="bg-white py-16 md:py-24">
        <Section yPadding="py-0">
          <div className="mb-8 px-4 text-center md:mb-12">
            <h2 className="font-serif text-3xl font-bold text-gray-900 md:text-4xl">
              Find Your Passion
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500 md:text-xl">
              Explore our diverse extracurricular programs designed to nurture
              every talent.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="mb-10 flex flex-wrap justify-center gap-2 px-2 md:mb-16 md:gap-3">
            {['All', 'Sports', 'Arts', 'Academic', 'Leadership'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-4 py-2 text-xs font-bold transition-all md:px-6 md:text-sm ${
                  filter === cat
                    ? 'bg-blue-900 text-white shadow-md'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <MotionDiv
            layout
            className="grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 md:gap-8 md:px-0 lg:grid-cols-4"
          >
            <AnimatePresence>
              {filteredClubs.map((club) => (
                <MotionDiv
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  key={club.id}
                  className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl md:p-8"
                >
                  <div className="mb-4 flex size-14 items-center justify-center rounded-2xl bg-blue-50 text-4xl md:mb-6 md:size-16 md:text-5xl">
                    {club.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 md:text-xl">
                    {club.title}
                  </h3>
                  <p className="mb-3 text-xs font-bold uppercase tracking-widest text-blue-600 md:mb-4">
                    {club.category}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                    {club.desc}
                  </p>
                </MotionDiv>
              ))}
            </AnimatePresence>
          </MotionDiv>
        </Section>
      </div>

      <Footer />
    </div>
  );
};

export default Extracurricular;
