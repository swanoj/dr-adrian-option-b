import Link from "next/link";
import { SiteFrame } from "./_components/site-frame";
import { BrandAnchor, CtaBand, CtaButton, CtaLink, QuoteBlock, SectionBand, SplitHero } from "./_components/ui";
import { images } from "./_lib/images";

export default function HomePage() {
  return (
    <SiteFrame>
      <SplitHero
        title="Natural, Evidence-Based Support for Stress, Pain and Women's Health"
        lead="Dr Adrian uses a holistic Chinese medicine approach; combining acupuncture, herbal medicine, physical therapy and lifestyle care to support health naturally, without pharmaceuticals."
        image={images.heroHome}
        imageAlt="Dr Adrian in consultation with a patient in a warm treatment room"
        meta="Personalised care · Private health rebates · Melbourne"
      >
        <div className="cta-row">
          <CtaButton href="/book">Book a Consultation</CtaButton>
          <CtaLink href="/conditions/womens-health">Explore Conditions We Support</CtaLink>
        </div>
      </SplitHero>

      <BrandAnchor />

      <SectionBand title="Condition Pathways">
        <div className="cards-grid">
          <article className="content-card">
            <h3>Women&apos;s Health &amp; Hormonal Support</h3>
            <p>Natural, non-pharmaceutical support for fertility, hormonal balance, menopause, energy and sleep.</p>
            <div className="cta-row">
              <Link className="cta-button" href="/conditions/womens-health">
                Learn More
              </Link>
            </div>
          </article>
          <article className="content-card">
            <h3>Pain &amp; Musculoskeletal Relief</h3>
            <p>
              An integrated approach to back pain, neck pain, joint pain and injury recovery; addressing root causes,
              not just symptoms.
            </p>
            <div className="cta-row">
              <Link className="cta-button" href="/conditions/pain-musculoskeletal">
                Learn More
              </Link>
            </div>
          </article>
          <article className="content-card">
            <h3>Stress, Anxiety &amp; Nervous System Support</h3>
            <p>Gentle, effective care to calm the nervous system, improve sleep and restore mental clarity.</p>
            <div className="cta-row">
              <Link className="cta-button" href="/conditions/stress-anxiety">
                Learn More
              </Link>
            </div>
          </article>
        </div>
      </SectionBand>

      <SectionBand
        title="A Whole-of-Body Approach to Health"
        tone="cream"
        image={images.clinicInterior}
        imageAlt="Warm clinic interior at Dr Adrian"
      >
        <p className="section-copy">
          Rather than treating symptoms in isolation, Dr Adrian works with the body as an integrated system.
          Supporting muscles, nerves, organs and the nervous system together. Care is tailored and unique for each
          individual and may include; acupuncture, herbal medicine, physical therapy, dietary guidance and lifestyle
          guidance.
        </p>
      </SectionBand>

      <SectionBand title="Trusted by Patients Seeking Natural, Effective Care" tone="mint">
        <QuoteBlock
          quote="What truly sets him apart is his unwavering patience and willingness to go the extra mile to make sure we feel comfortable."
          author="Vivi Zhou"
        />
        <QuoteBlock
          quote="The experience never feels like his focus is on the business - it's always on me as the patient."
          author="Nathyn Costello"
        />
        <QuoteBlock quote="Professional, considerate, safe. Highly recommended." author="Dean Johnston" />
      </SectionBand>

      <SectionBand title="Medicine That Works With Your Body">
        <p className="section-copy">
          Traditional Chinese Medicine focuses on supporting the body&apos;s natural ability to regulate, heal and
          restore balance. By working with the body rather than overriding it, care aims to improve energy, mental
          clarity, resilience and long-term wellbeing.
        </p>
        <div className="cta-row">
          <CtaLink href="/about">Learn more about Dr Adrian&apos;s approach</CtaLink>
        </div>
      </SectionBand>

      <SectionBand title="Services" tone="cream">
        <ul className="section-list">
          <li>Traditional Treatments</li>
          <li>Preventative Care</li>
          <li>Restorative Therapies</li>
        </ul>
        <div className="cta-row">
          <CtaLink href="/treatments/traditional">Traditional Treatments</CtaLink>
          <CtaLink href="/treatments/preventative">Preventative Care</CtaLink>
          <CtaLink href="/treatments/restorative">Restorative Therapies</CtaLink>
        </div>
      </SectionBand>

      <CtaBand title="Ready to Take the Next Step Toward Better Health?" copy="Appointments available · Private health rebates · Supportive care">
        <CtaButton href="/book">Book a Consultation</CtaButton>
      </CtaBand>
    </SiteFrame>
  );
}
