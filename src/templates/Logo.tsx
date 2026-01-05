import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // Determine size: bigger if xl is true, standard for navbar
  // 'h-12' (48px) is a good standard navbar size
  const sizeClass = props.xl ? 'h-20 w-auto' : 'h-12 w-auto';

  return (
    <div className="flex items-center">
      {/* 1. The Logo Image */}
      <img
        src="/logo.png"
        alt={`${AppConfig.site_name} Logo`}
        className={`${sizeClass} mr-3`}
      />

      {/* 2. The Text Name (Optional - delete this block if you only want the icon) */}
      <span
        className={`font-bold text-gray-900 ${props.xl ? 'text-3xl' : 'text-xl'}`}
      >
        {AppConfig.site_name}
      </span>
    </div>
  );
};

export { Logo };
