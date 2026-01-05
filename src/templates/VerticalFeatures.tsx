import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';
import { FadeIn } from '../utils/Animation';

const VerticalFeatures = () => (
  <Section
    title="Excellence in Education"
    description="We provide a balanced curriculum that integrates academic excellence with strong moral values."
  >
    {/* 1. TAHFIZ PROGRAM */}
    <FadeIn delay={0.2}>
      <VerticalFeatureRow
        title="Tahfizul Quran Program"
        description="Our flagship program focuses on producing a generation of Hafiz. We target 5 Juz per year with an emphasis on proper Tajweed and Makhraj, ensuring students carry the Quran in their hearts."
        image="/tahfiz.png"
        imageAlt="Tahfiz Program"
      />
    </FadeIn>

    {/* 2. LEADERSHIP & OSIS */}
    <FadeIn delay={0.4}>
      <VerticalFeatureRow
        title="Leadership & OSIS"
        description="We mold future leaders. Through our active Student Council (OSIS) and Scouting programs, students learn real-world responsibility, event management, and discipline."
        image="/osis.png"
        imageAlt="Student Leadership"
        reverse
      />
    </FadeIn>

    {/* 3. PSA & EXTRACURRICULAR */}
    <FadeIn delay={0.6}>
      <VerticalFeatureRow
        title="Creative Arts (PSA) & Extracurriculars"
        description="We believe in holistic growth. Beyond our grand annual 'Pentas Siswa Akhir' (PSA), students explore their passions through diverse clubs including Archery, Futsal, Science Club, and Calligraphy."
        image="/psa.png"
        imageAlt="Arts and Extracurriculars"
      />
    </FadeIn>
  </Section>
);

export { VerticalFeatures };
