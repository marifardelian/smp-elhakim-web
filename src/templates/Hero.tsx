import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Navbar } from './Navbar';

const Hero = () => (
  <Background color="bg-gradient-to-br from-blue-50 via-white to-blue-50">
    <Navbar />

    <Section yPadding="pt-16 pb-32">
      <div className="px-4 text-center">
        {/* --- 1. HERO LOGO (Added as requested) --- */}
        <div className="mb-6 flex justify-center">
          <img
            src="/logo.png"
            alt="SMP El-Hakim Logo"
            className="h-auto w-32 drop-shadow-md transition-transform hover:scale-105 md:w-48"
          />
        </div>

        {/* --- 2. BADGE --- */}
        <div className="mb-4 inline-block">
          <span className="rounded-full bg-blue-100 px-6 py-2 text-sm font-bold tracking-wide text-blue-800 shadow-sm">
            Open Registration 2026
          </span>
        </div>

        {/* --- 3. TITLE (Formatted: SMP ISLAM / CENDEKIA / EL-HAKIM) --- */}
        <h1 className="mb-6 font-serif text-4xl font-extrabold leading-tight text-blue-900 md:text-6xl">
          SMP ISLAM <br />
          <span className="text-blue-700">CENDEKIA</span> <br />
          <span className="text-red-600">EL-HAKIM</span>
        </h1>

        {/* --- 4. DESCRIPTION --- */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-gray-600 md:text-2xl">
          Building the generation of{' '}
          <strong className="text-blue-900">Qur&apos;anic Leaders</strong> with
          modern science and character in Aceh Besar.
        </p>

        {/* --- 5. BUTTONS --- */}
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Link href="/contact">
            <button className="w-full rounded-full bg-blue-900 px-8 py-4 text-lg font-bold text-white shadow-lg transition-all hover:scale-105 hover:bg-blue-800 sm:w-auto">
              Enroll Now
            </button>
          </Link>

          <Link href="/programs">
            <button className="w-full rounded-full border-2 border-blue-900 bg-white px-8 py-4 text-lg font-bold text-blue-900 shadow-md transition-all hover:bg-blue-50 sm:w-auto">
              View Programs
            </button>
          </Link>
        </div>
      </div>
    </Section>
  </Background>
);

export { Hero };
