import Link from 'next/link';
import { useState } from 'react';

import { Section } from '../layout/Section';
import { Logo } from './Logo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
      <Section yPadding="py-3">
        <div className="flex flex-wrap items-center justify-between">
          {/* --- FIXED: CLICKABLE LOGO --- */}
          <div>
            <Link href="/" className="cursor-pointer">
              <Logo xl={false} />
            </Link>
          </div>
          {/* ----------------------------- */}

          {/* HAMBURGER BUTTON (Mobile) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none md:hidden"
          >
            <svg
              className="size-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* NAVIGATION LINKS */}
          <div
            className={`${isOpen ? 'block' : 'hidden'} mt-4 w-full md:mt-0 md:block md:w-auto`}
          >
            <ul className="flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium md:flex-row md:items-center md:space-x-8 md:border-0 md:bg-transparent md:p-0">
              <li>
                <Link
                  href="/about"
                  className="block rounded py-2 pl-3 pr-4 text-sm font-bold uppercase tracking-wide text-gray-700 hover:bg-blue-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-900"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/programs"
                  className="block rounded py-2 pl-3 pr-4 text-sm font-bold uppercase tracking-wide text-gray-700 hover:bg-blue-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-900"
                >
                  Programs
                </Link>
              </li>

              <li>
                <Link
                  href="/extracurricular"
                  className="block rounded py-2 pl-3 pr-4 text-sm font-bold uppercase tracking-wide text-gray-700 hover:bg-blue-100 md:p-0 md:hover:bg-transparent md:hover:text-blue-900"
                >
                  Student Life
                </Link>
              </li>

              <li className="mt-4 md:mt-0">
                <Link href="/contact">
                  <div className="cursor-pointer rounded-md bg-red-600 px-5 py-2 text-center text-xs font-bold uppercase tracking-wide text-white shadow-md transition-transform hover:scale-105 hover:bg-red-700">
                    Enroll Now
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </div>
  );
};

export { Navbar };
