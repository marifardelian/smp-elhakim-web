import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  // CHANGED: 'h-14' (56px) is the perfect "Sleek" size.
  // It is visible but not huge.
  const size = props.xl ? 'h-32' : 'h-14';

  return (
    <div className="flex items-center">
      <img
        src="/logo.png"
        alt={AppConfig.site_name}
        className={`${size} w-auto object-contain`}
      />
    </div>
  );
};

export { Logo };
