import { SiteFrame } from "../../_components/site-frame";
import { CtaBand, CtaButton, QuoteBlock, SectionBand, SplitHero } from "../../_components/ui";
import { images } from "../../_lib/images";

export default function StressAnxietyPage() {
  return (
    <SiteFrame>
      <SplitHero
        id="stress-hero"
        title="Natural Support for Stress, Anxiety & Nervous System Balance"
        lead="Dr Adrian provides gentle, personalised Chinese medicine care to help calm the nervous system, improve sleep and restore mental clarity - without relying on medication."
        image={images.stressAnxiety}
        imageAlt="Calming laser therapy treatment for nervous system support"
        meta="Supportive care · Private health rebates · Melbourne"
      >
        <div className="cta-row">
          <CtaButton href="/book">Book a Consultation</CtaButton>
        </div>
      </SplitHero>

      <SectionBand title="How We Support Stress & Anxiety" id="stress-supports">
        <ul className="section-list">
          <li>Ongoing stress or overwhelm</li>
          <li>Anxiety or nervous tension</li>
          <li>Sleep difficulties</li>
          <li>Mental fatigue or brain fog</li>
          <li>Emotional dysregulation</li>
          <li>Difficulty switching off</li>
        </ul>
      </SectionBand>

      <SectionBand
        title="A Whole-of-Body Approach to Stress & Anxiety"
        id="stress-approach"
        tone="cream"
        image={images.restorative}
        imageAlt="Restorative therapy environment in the clinic"
        imageSide="left"
      >
        <p className="section-copy">
          Stress and anxiety affect the body as much as the mind. In Chinese medicine, the nervous system, sleep,
          digestion and energy are closely connected. Dr Adrian works with the body to help regulate the nervous system
          using an integrated approach that may include acupuncture, herbal medicine, lifestyle guidance and gentle
          physical therapies - tailored to your individual needs.
        </p>
      </SectionBand>

      <SectionBand title="Gentle, Supportive Care for the Nervous System" id="stress-different">
        <div className="cards-grid-two">
          <article className="content-card">
            <h3>Non-pharmaceutical support</h3>
            <p>A natural approach that doesn&apos;t rely on medication.</p>
          </article>
          <article className="content-card">
            <h3>Nervous system regulation</h3>
            <p>Supporting calm, balance and resilience rather than suppression.</p>
          </article>
          <article className="content-card">
            <h3>Individualised care</h3>
            <p>No pressure, no rushed protocols.</p>
          </article>
          <article className="content-card">
            <h3>Whole-body focus</h3>
            <p>Addressing sleep, energy and physical tension together.</p>
          </article>
        </div>
      </SectionBand>

      <SectionBand title="What to Expect in a Stress & Anxiety Consultation" id="stress-expect" tone="mint">
        <ul className="section-list">
          <li>A calm, unhurried discussion of what you&apos;re experiencing</li>
          <li>A personalised approach based on your body&apos;s needs</li>
          <li>Gentle treatment using appropriate modalities</li>
          <li>Ongoing support to help maintain balance and resilience</li>
        </ul>
      </SectionBand>

      <SectionBand title="Trusted by People Seeking Calm & Balance" id="stress-trust">
        <QuoteBlock quote="You always leave feeling refreshed and rejuvenated." author="Guy Hanman" />
        <QuoteBlock
          quote="Sometimes when receiving acupuncture I am so blissed out I feel like in 10-15 minutes I get what feels like a whole night's sleep."
          author="Nathyn Costello"
        />
      </SectionBand>

      <SectionBand title="Supporting Calm, Clarity and Resilience" id="stress-philosophy" tone="cream">
        <p className="section-copy">
          Stress and anxiety are part of modern life, but they don&apos;t have to define how you feel day to day. Care
          is designed to support calm, clarity and resilience, helping you feel more grounded in your body over time.
        </p>
      </SectionBand>

      <CtaBand
        title="Ready to Feel More Calm and Supported?"
        copy="Supportive care · Private health rebates · Appointments available"
        id="stress-cta"
      >
        <CtaButton href="/book">Book a Consultation</CtaButton>
      </CtaBand>
    </SiteFrame>
  );
}
