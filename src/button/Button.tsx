import className from 'classnames';

type IButtonProps = {
  xl?: boolean;
  full?: boolean;
  children: string;
};

const Button = (props: IButtonProps) => {
  const btnClass = className(
    // 1. Base Shape & Animation
    'inline-block rounded-full text-center transition-all hover:shadow-xl hover:-translate-y-1',

    // 2. Color (Navy Blue from your logo)
    'bg-blue-900 hover:bg-blue-800 text-white',

    // 3. Conditional Sizing
    {
      'text-lg font-semibold py-4 px-10': props.xl,
      'text-lg font-semibold py-2 px-6': !props.xl,
      'w-full': props.full,
    },
  );

  return <div className={btnClass}>{props.children}</div>;
};

export { Button };
