import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="Admissions for 2026 are now open."
      subtitle="Seats are limited. Secure your child's future today."
      button={
        <Link href="/contact">
          <Button>Apply for Admission</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
