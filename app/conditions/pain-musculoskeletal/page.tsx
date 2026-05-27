import { SiteFrame } from "../../_components/site-frame";
import { CtaBand, CtaButton, QuoteBlock, SectionBand, SplitHero } from "../../_components/ui";
import { images } from "../../_lib/images";

export default function PainMusculoskeletalPage() {
  return (
    <SiteFrame>
      <SplitHero
        id="pain-hero"
        title="Natural Support for Pain & Musculoskeletal Conditions"
        lead="Dr Adrian provides integrated Chinese medicine care for back pain, neck pain, joint pain and injury recovery, combining acupuncture, physical therapy and whole-body support to address pain at its source."
        image={images.painMusculoskeletal}
        imageAlt="Physical therapy and musculoskeletal treatment in clinic"
        meta="Personalised care · Private health rebates · Melbourne"
      >
        <div className="cta-row">
          <CtaButton href="/book">Book a Consultation</CtaButton>
        </div>
      </SplitHero>

      <SectionBand title="Pain & Movement Issues We Support" id="pain-supported">
        <ul className="section-list">
          <li>Back pain</li>
          <li>Neck &amp; shoulder pain</li>
          <li>Joint pain</li>
          <li>Sports &amp; activity-related injuries</li>
          <li>Chronic or recurring pain</li>
          <li>Muscle tightness &amp; restricted movement</li>
        </ul>
      </SectionBand>

      <SectionBand
        title="A Whole-of-Body Approach to Pain Relief"
        id="pain-approach"
        tone="cream"
        image={images.acupuncture}
        imageAlt="Acupuncture treatment for pain relief"
        imageSide="left"
      >
        <p className="section-copy">
          Pain is rarely just a muscle or joint issue. In Chinese medicine, pain is often linked to circulation,
          nervous system regulation and overall balance within the body. Dr Adrian takes an integrated approach,
          combining acupuncture, physical therapy techniques and lifestyle support to reduce pain, improve movement and
          support long-term recovery.
        </p>
      </SectionBand>

      <SectionBand title="More Than a Single-Modality Treatment" id="pain-differentiators">
        <div className="cards-grid-two">
          <article className="content-card">
            <h3>Integrated care</h3>
            <p>Acupuncture, cupping, scraping, joint work and movement support used together, not in isolation.</p>
          </article>
          <article className="content-card">
            <h3>System-level focus</h3>
            <p>Supporting circulation, nervous system regulation and tissue recovery.</p>
          </article>
          <article className="content-card">
            <h3>Not just symptom relief</h3>
            <p>Addressing underlying contributors to recurring pain.</p>
          </article>
          <article className="content-card">
            <h3>Individualised treatment</h3>
            <p>No standardised protocols - care adapts as your body responds.</p>
          </article>
        </div>
      </SectionBand>

      <SectionBand title="What to Expect in a Pain Consultation" id="pain-expect" tone="mint">
        <ul className="section-list">
          <li>Discussion of pain history, movement patterns and lifestyle factors</li>
          <li>Assessment of contributing systems (muscles, circulation, nervous system)</li>
          <li>Personalised treatment using appropriate methods specific to you as an individual</li>
          <li>Ongoing guidance to support recovery and prevent recurrence</li>
        </ul>
      </SectionBand>

      <SectionBand title="Trusted by People Seeking Natural Pain Relief" id="pain-trust">
        <QuoteBlock quote="After each treatment, I feel like a new person." author="David Foo" />
        <QuoteBlock quote="My go-to person for back/neck/shoulder pain relief." author="Thomas Schellings" />
      </SectionBand>

      <SectionBand title="Supporting Recovery, Not Just Temporary Relief" id="pain-philosophy" tone="cream">
        <p className="section-copy">
          Pain management isn&apos;t just about stopping symptoms. Care is designed to support circulation, nervous
          system balance and movement so the body can recover and function more freely over time.
        </p>
      </SectionBand>

      <CtaBand
        title="Ready to Address Pain at Its Source?"
        copy="Supportive care · Private health rebates · Appointments available"
        id="pain-cta"
      >
        <CtaButton href="/book">Book a Consultation</CtaButton>
      </CtaBand>
    </SiteFrame>
  );
}
