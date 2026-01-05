import className from 'classnames';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

type IVerticalFeatureRowProps = {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center sm:w-1/2 sm:px-6">
        <h3 className="font-serif text-3xl font-bold text-blue-900">
          {props.title}
        </h3>
        <div className="mt-6 text-xl leading-9 text-gray-600">
          {props.description}
        </div>
      </div>

      <div className="w-full p-6 sm:w-1/2">
        {/* Rounded Image with no background blob */}
        <motion.div
          {...({
            whileHover: { scale: 1.02 },
            transition: { duration: 0.3 },
          } as any)}
          className="overflow-hidden rounded-3xl shadow-xl"
        >
          <img
            src={`${router.basePath}${props.image}`}
            alt={props.imageAlt}
            className="h-auto w-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
