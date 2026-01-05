import { AppConfig } from '../utils/AppConfig';

const Footer = () => (
  // Reduced 'py-8' to 'py-6'. Removed <Section> to kill extra space.
  <div className="bg-gray-100 py-6 text-center text-sm">
    <div className="mx-auto max-w-screen-lg px-3">
      {/* 1. School Name & Address */}
      <div className="mb-4">
        <h3 className="text-lg font-bold text-gray-900">
          SMP Islam Cendekia El-Hakim
        </h3>
        <p className="mt-1 text-gray-600">
          Jl. Tgk. Meunara VIII, Lr. PLN, Desa Garot, Aceh Besar
          <br />
          Phone: +62 651-41027 | Email: info@smpislamcendekia.sch.id
        </p>
      </div>

      {/* 2. Links (Privacy | Portal) */}
      <div className="mb-4 flex justify-center gap-4 font-medium text-blue-800">
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>
        <span>|</span>
        <a href="#" className="hover:underline">
          Student Portal
        </a>
      </div>

      {/* 3. Copyright (Smaller text) */}
      <div className="text-xs text-gray-400">
        © Copyright {new Date().getFullYear()} {AppConfig.site_name}. All
        rights reserved.
      </div>
    </div>
  </div>
);

export { Footer };
