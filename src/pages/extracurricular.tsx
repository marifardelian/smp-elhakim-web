'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Navbar } from '../templates/Navbar';

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
  // Added OSIS to the list as well for filtering
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
        <Section yPadding="py-24">
          <div className="text-center">
            <h1 className="mb-6 font-serif text-5xl font-bold">
              Student Life & Activities
            </h1>
            <p className="mx-auto max-w-3xl text-2xl leading-relaxed text-blue-700/80">
              Beyond the classroom: Building Talent, Confidence, and Brotherhood
              through diverse programs.
            </p>
          </div>
        </Section>
      </Background>

      {/* --- MAJOR EVENTS SECTION --- */}
      <Section yPadding="py-20">
        <div className="space-y-24">
          {/* 1. PSA (Pentas Siswa Akhir) */}
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div
              {...({
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
              } as any)}
            >
              <div className="mb-4 inline-block rounded-full bg-orange-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-orange-600">
                Annual Grand Event
              </div>
              <h2 className="mb-6 font-serif text-4xl font-bold text-blue-900">
                Pentas Siswa Akhir (PSA)
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                The &ldquo;Grand Finale&rdquo; art performance completely
                managed by students. From drama, choreography, to lighting—this
                event proves that our students are not just scholars, but
                creators and leaders.
              </p>
              <ul className="space-y-3 text-lg font-medium text-gray-700">
                <li className="flex items-center">
                  <span className="mr-3 text-orange-500">✨</span> Drama &
                  Theater Productions
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-orange-500">✨</span> Giant Stage
                  Design
                </li>
              </ul>
            </motion.div>

            {/* IMAGE: PSA */}
            <motion.div
              {...({
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.8 },
              } as any)}
              className="group relative h-[400px] cursor-pointer overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src="/psa.png"
                alt="Pentas Siswa Akhir Stage"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
            </motion.div>
          </div>

          {/* 2. Jambore (Scouts) */}
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            {/* IMAGE: JAMBORE (Left side) */}
            <motion.div
              {...({
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.8 },
              } as any)}
              className="group relative order-2 h-[400px] cursor-pointer overflow-hidden rounded-3xl shadow-2xl md:order-1"
            >
              <img
                src="/JAMBORE.png"
                alt="Scout Jambore"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
            </motion.div>

            <motion.div
              className="order-1 md:order-2"
              {...({
                initial: { opacity: 0, x: 50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
              } as any)}
            >
              <div className="mb-4 inline-block rounded-full bg-green-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-green-600">
                Adventure & Survival
              </div>
              <h2 className="mb-6 font-serif text-4xl font-bold text-blue-900">
                Jambore & Scouting
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                Our Scout Team (Pramuka) is one of the most active in Aceh
                Besar. We regularly participate in regional Jambore, teaching
                students survival skills, cooking in the wild, leadership, and
                discipline.
              </p>
              <button className="rounded-full bg-blue-900 px-8 py-3 font-bold text-white shadow-md transition hover:bg-blue-800">
                View Achievements
              </button>
            </motion.div>
          </div>

          {/* 3. OSIS (Student Council) - NEW SECTION */}
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <motion.div
              {...({
                initial: { opacity: 0, x: -50 },
                whileInView: { opacity: 1, x: 0 },
                transition: { duration: 0.8 },
              } as any)}
            >
              <div className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-bold uppercase tracking-wider text-blue-600">
                Leadership Body
              </div>
              <h2 className="mb-6 font-serif text-4xl font-bold text-blue-900">
                OSIS (Student Council)
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-gray-600">
                The Organization of Intra-School Students (OSIS) is the
                heartbeat of student leadership. OSIS members manage daily
                discipline, organize school events (like Class Meetings), and
                serve as the bridge between teachers and students.
              </p>
              <ul className="space-y-3 text-lg font-medium text-gray-700">
                <li className="flex items-center">
                  <span className="mr-3 text-blue-500">✨</span> Event
                  Management (Class Meeting)
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-blue-500">✨</span> Discipline &
                  Moral Enforcement
                </li>
                <li className="flex items-center">
                  <span className="mr-3 text-blue-500">✨</span> Monday Flag
                  Ceremony Officers
                </li>
              </ul>
            </motion.div>

            {/* IMAGE: OSIS */}
            <motion.div
              {...({
                initial: { opacity: 0, scale: 0.95 },
                whileInView: { opacity: 1, scale: 1 },
                transition: { duration: 0.8 },
              } as any)}
              className="group relative h-[400px] cursor-pointer overflow-hidden rounded-3xl shadow-2xl"
            >
              <img
                src="/osis.png"
                alt="OSIS Student Council"
                className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent opacity-60 transition-opacity group-hover:opacity-40" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* --- INTERACTIVE CLUBS DIRECTORY --- */}
      <div className="bg-white py-24">
        <Section yPadding="py-0">
          <div className="mb-12 text-center">
            <h2 className="font-serif text-4xl font-bold text-gray-900">
              Find Your Passion
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-xl text-gray-500">
              Explore our diverse extracurricular programs designed to nurture
              every talent.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="mb-16 flex flex-wrap justify-center gap-3">
            {['All', 'Sports', 'Arts', 'Academic', 'Leadership'].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`rounded-full px-6 py-2.5 text-sm font-bold transition-all ${
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
          <motion.div
            {...({ layout: true } as any)}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
          >
            <AnimatePresence>
              {filteredClubs.map((club) => (
                <motion.div
                  {...({
                    layout: true,
                    initial: { opacity: 0, scale: 0.9 },
                    animate: { opacity: 1, scale: 1 },
                    exit: { opacity: 0, scale: 0.9 },
                    transition: { duration: 0.3 },
                  } as any)}
                  key={club.id}
                  className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="mb-6 flex size-16 items-center justify-center rounded-2xl bg-blue-50 text-5xl">
                    {club.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">
                    {club.title}
                  </h3>
                  <p className="mb-4 text-xs font-bold uppercase tracking-widest text-blue-600">
                    {club.category}
                  </p>
                  <p className="leading-relaxed text-gray-600">{club.desc}</p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Section>
      </div>

      <Footer />
    </div>
  );
};

export default Extracurricular;
