import { motion } from 'framer-motion';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { Footer } from '../templates/Footer';
import { Navbar } from '../templates/Navbar';

const About = () => (
  <div className="text-gray-600 antialiased">
    <Navbar />

    {/* Header Section */}
    <Background color="bg-gray-100">
      <Section yPadding="py-16">
        <div className="text-center">
          <h1 className="font-serif text-4xl font-bold text-blue-900">
            About Our School
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Building Character Since 2010
          </p>
        </div>
      </Section>
    </Background>

    {/* Content Section */}
    <Section yPadding="py-16">
      <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        {/* Left: Text */}
        <motion.div
          {...({
            initial: { opacity: 0, x: -50 },
            whileInView: { opacity: 1, x: 0 },
            transition: { duration: 0.8 },
          } as any)}
        >
          <h3 className="mb-4 text-2xl font-bold text-blue-900">Our History</h3>
          <p className="mb-6 leading-relaxed">
            SMP Islam Cendekia El-Hakim was established with a noble vision: to
            combine modern education with traditional Islamic values. Located in
            the heart of Aceh Besar, we have grown from a small study circle
            into a premier institution producing Hafiz and leaders.
          </p>

          <h3 className="mb-4 text-2xl font-bold text-red-600">Our Mission</h3>
          <ul className="list-disc space-y-2 pl-5">
            <li>To produce a generation that memorizes the Qur&apos;an.</li>
            <li>To instill strong moral character (Akhlaqul Karimah).</li>
            <li>To achieve academic excellence in Science and Technology.</li>
          </ul>
        </motion.div>

        {/* Right: Real School Image */}
        <motion.div
          {...({
            initial: { opacity: 0, scale: 0.9 },
            whileInView: { opacity: 1, scale: 1 },
            transition: { duration: 0.8 },
          } as any)}
          className="relative h-80 overflow-hidden rounded-2xl shadow-2xl"
        >
          <img
            src="/school.jpeg"
            alt="School Building"
            className="size-full object-cover"
          />
        </motion.div>
      </div>
    </Section>

    <Footer />
  </div>
);

export default About;
