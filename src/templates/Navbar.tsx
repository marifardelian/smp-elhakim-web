import Link from 'next/link';

import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const Navbar = () => (
  // Sticky navbar with a sleek height (py-3)
  <div className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
    <Section yPadding="py-3">
      <NavbarTwoColumns logo={<Logo xl={false} />}>
        {/* 1. ABOUT Link */}
        <li className="ml-6 flex items-center">
          <Link
            href="/about"
            className="text-sm font-bold uppercase tracking-wider text-gray-700 transition-colors hover:text-blue-900"
          >
            About
          </Link>
        </li>

        {/* 2. PROGRAMS Link */}
        <li className="ml-6 flex items-center">
          <Link
            href="/programs"
            className="text-sm font-bold uppercase tracking-wider text-gray-700 transition-colors hover:text-blue-900"
          >
            Programs
          </Link>
        </li>

        {/* 3. NEW: STUDENT LIFE Link */}
        <li className="ml-6 flex items-center">
          <Link
            href="/extracurricular"
            className="text-sm font-bold uppercase tracking-wider text-gray-700 transition-colors hover:text-blue-900"
          >
            Student Life
          </Link>
        </li>

        {/* 4. ENROLL Button */}
        <li className="ml-8 flex items-center">
          <Link href="/contact">
            <div className="cursor-pointer rounded-md bg-red-600 px-5 py-2 text-xs font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:scale-105 hover:bg-red-700">
              Enroll Now
            </div>
          </Link>
        </li>
      </NavbarTwoColumns>
    </Section>
  </div>
);

export { Navbar };
