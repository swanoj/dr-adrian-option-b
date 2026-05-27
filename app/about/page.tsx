import Link from "next/link";
import { SiteFrame } from "../_components/site-frame";
import { CtaBand, CtaButton, CtaLink, QuoteBlock, SectionBand, SplitHero } from "../_components/ui";
import { images } from "../_lib/images";

export default function AboutPage() {
  return (
    <SiteFrame>
      <SplitHero
        title="Dr Adrian"
        lead="Dr Adrian is a registered Chinese Medicine Practitioner and acupuncturist with over 15 years of clinical experience. He has extensive university training in Traditional Chinese Medicine and continues to refine his practice by combining traditional approaches with modern therapeutic techniques. His care integrates acupuncture, Chinese herbal medicine, physical therapies such as cupping, and lifestyle guidance to support each patient's individual needs. Dr Adrian has worked with a wide range of patients and conditions, with a particular interest in fertility, women's health, respiratory issues, and musculoskeletal pain. Patients describe him as thoughtful and thorough. He takes time to listen, understand the whole picture, and tailor care accordingly."
        image={images.aboutProfile}
        imageAlt="Portrait of Dr Adrian in the clinic"
        imagePosition="object-top"
        meta="Mon 8am–7pm · Tue Closed · Wed 8am–7pm · Thu 8am–7pm · Fri Closed · Sat 8am–4pm · Sun Closed"
      >
        <div className="cta-row">
          <CtaButton href="/book">Book a Consultation</CtaButton>
        </div>
        <p className="hero-meta">Hours subject to change — please book online for availability.</p>
      </SplitHero>

      <SectionBand title="A Considered, Whole-Body Approach to Health" tone="cream">
        <p className="section-copy">
          Dr Adrian&apos;s approach focuses on working with the body as an integrated system, supporting balance,
          clarity and resilience rather than treating symptoms in isolation. Care is unhurried, personalised, and
          adapted as the body responds over time.
        </p>
        <div className="cta-row">
          <CtaLink href="#about-supporting">Learn more about Dr Adrian&apos;s philosophy &amp; approach</CtaLink>
        </div>
      </SectionBand>

      <SectionBand title="Navigation to Supporting Pages" id="about-supporting" image={images.shopfront} imageAlt="Dr Adrian clinic shopfront">
        <div className="cards-grid-two">
          <article className="content-card">
            <h3>Philosophy &amp; Approach</h3>
            <p className="card-sub-label">How Dr Adrian thinks about health and care</p>
            <p>
              Dr Adrian&apos;s approach is grounded in the understanding that the body functions as an interconnected
              whole. Symptoms are not viewed in isolation, but as part of broader patterns involving the nervous
              system, internal organs, musculoskeletal system, and lifestyle factors. Rather than overriding the
              body&apos;s signals, his care focuses on supporting the body&apos;s natural ability to regulate, adapt and
              restore balance over time.
            </p>
          </article>
          <article className="content-card">
            <h3>What to Expect</h3>
            <p className="card-sub-label">What happens in an appointment and how care unfolds</p>
            <p>
              Appointments with Dr Adrian are calm, unhurried and centred around understanding the whole picture of
              your health. Your first visit typically begins with a detailed conversation about your concerns, health
              history and how your body has been feeling. Treatment may involve acupuncture, herbal medicine, physical
              therapies or lifestyle guidance. Ongoing care is flexible and evolves as your body responds.
            </p>
          </article>
        </div>
      </SectionBand>

      <SectionBand title="Trust Signals" tone="mint">
        <QuoteBlock quote="Thoughtful, professional and genuinely caring." author="Patient review" />
        <QuoteBlock quote="I felt listened to and supported from the first visit." author="Patient review" />
      </SectionBand>

      <CtaBand title="Ready to Begin Care?">
        <CtaButton href="/book">Book a Consultation</CtaButton>
        <CtaLink href="/conditions/womens-health">Explore Conditions We Support</CtaLink>
      </CtaBand>
    </SiteFrame>
  );
}
