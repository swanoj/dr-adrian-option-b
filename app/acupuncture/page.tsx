import { SiteFrame } from "../_components/site-frame";
import { CtaBand, CtaButton, CtaLink, SectionBand, SplitHero } from "../_components/ui";
import { images } from "../_lib/images";

export default function AcupuncturePage() {
  return (
    <SiteFrame>
      <SplitHero
        id="acupuncture-hero"
        title="Acupuncture Melbourne | Traditional & Contemporary Chinese Medicine"
        lead="Acupuncture designed around the individual, supporting pain, stress, women's health, recovery and overall wellbeing."
        image={images.acupuncture}
        imageAlt="Acupuncture treatment session with Dr Adrian"
        meta="Personalised care · Private health rebates · Melbourne"
      >
        <div className="cta-row">
          <CtaButton href="/book">Book an Appointment</CtaButton>
          <CtaLink href="#acupuncture-expect">Learn What to Expect</CtaLink>
        </div>
      </SplitHero>

      <SectionBand title="How Acupuncture Can Support Your Health" id="acupuncture-supports" tone="cream">
        <p className="section-copy">
          Acupuncture can support a wide range of concerns by working with the body as an integrated system. These
          tiles help you quickly see the areas most relevant to you.
        </p>
        <div className="cards-grid-two">
          <article className="content-card">
            <h3>Pain &amp; Injury</h3>
          </article>
          <article className="content-card">
            <h3>Women&apos;s Health</h3>
          </article>
          <article className="content-card">
            <h3>Stress &amp; Anxiety</h3>
          </article>
          <article className="content-card">
            <h3>Sleep &amp; Fatigue</h3>
          </article>
          <article className="content-card">
            <h3>Recovery &amp; Performance</h3>
          </article>
          <article className="content-card">
            <h3>Preventative Wellbeing</h3>
          </article>
        </div>
      </SectionBand>

      <SectionBand
        title="What Acupuncture Feels Like"
        id="acupuncture-feels-like"
        image={images.painMusculoskeletal}
        imageAlt="Gentle acupuncture and physical therapy in clinic"
        imageSide="left"
      >
        <p className="section-copy">
          Most people are surprised by how gentle acupuncture feels. Sensations are usually mild and short-lived, such
          as a soft ache, warmth or heaviness around the area. Many people feel deeply relaxed during and after
          treatment, and some describe a sense of calm or lightness that continues into the day. Acupuncture is always
          tailored to your comfort level. Needles are very fine, and they can be adjusted or removed if anything feels
          too strong. Your experience is checked in with throughout the session, so you feel informed, safe and in
          control.
        </p>
        <div className="cards-grid-two">
          <article className="content-card">
            <h3>Sensations you may notice</h3>
            <p>Soft ache, warmth, heaviness, and deep relaxation during or after treatment.</p>
          </article>
          <article className="content-card">
            <h3>How your comfort is supported</h3>
            <p>Needles are fine, care is tailored, and adjustments are made throughout your session.</p>
          </article>
        </div>
      </SectionBand>

      <SectionBand title="Modern Acupuncture Applications" id="acupuncture-modern-applications" tone="mint">
        <p className="section-copy">
          Acupuncture can be applied in different ways to support both traditional health concerns and modern lifestyle
          demands.
        </p>
        <ul className="section-list">
          <li>Traditional acupuncture</li>
          <li>Cosmetic acupuncture</li>
          <li>Sports recovery</li>
          <li>Injury support</li>
          <li>Nervous system regulation</li>
          <li>Energy &amp; wellbeing</li>
          <li>Recovery &amp; restoration</li>
        </ul>
      </SectionBand>

      <SectionBand title="Why People Choose Acupuncture with Dr Adrian" id="acupuncture-why-adrian">
        <div className="cards-grid-two">
          <article className="content-card">
            <h3>Personalised care</h3>
            <p>Each treatment is tailored to your health history, current concerns and how your body responds over time.</p>
          </article>
          <article className="content-card">
            <h3>Integrated treatments</h3>
            <p>Acupuncture is combined with herbal medicine, physical therapies and lifestyle guidance where appropriate.</p>
          </article>
          <article className="content-card">
            <h3>Calm, unhurried approach</h3>
            <p>Appointments allow time to listen, understand and explain what is being done and why.</p>
          </article>
          <article className="content-card">
            <h3>Contemporary and traditional balance</h3>
            <p>Classical Chinese medicine principles are combined with modern therapeutic techniques.</p>
          </article>
          <article className="content-card">
            <h3>Non-rushed appointments</h3>
            <p>Sessions are designed to feel considered and thorough, not rushed or transactional.</p>
          </article>
        </div>
      </SectionBand>

      <SectionBand title="What to Expect in an Acupuncture Appointment" id="acupuncture-expect" tone="cream">
        <div className="stack-list">
          <article className="stack-item">
            <h3>Step 1: A calm, unhurried conversation</h3>
            <p>Your appointment begins with a discussion about your health history, current concerns and goals.</p>
          </article>
          <article className="stack-item">
            <h3>Step 2: Gentle assessment and treatment plan</h3>
            <p>
              Dr Adrian considers how your symptoms relate to the broader body system and discusses a treatment
              approach with you.
            </p>
          </article>
          <article className="stack-item">
            <h3>Step 3: Acupuncture and supportive therapies</h3>
            <p>
              Very fine needles may be used alongside other methods such as cupping, gentle physical therapies or
              herbal support, depending on what is appropriate for you.
            </p>
          </article>
          <article className="stack-item">
            <h3>Step 4: Clothing and comfort</h3>
            <p>
              Comfortable clothing is recommended. You may be asked to adjust clothing slightly to access certain
              areas, and your privacy is always respected.
            </p>
          </article>
          <article className="stack-item">
            <h3>Step 5: Duration and aftercare</h3>
            <p>
              Appointments allow time for treatment and post-session guidance. Simple aftercare recommendations may be
              given to support how you feel after treatment.
            </p>
          </article>
        </div>
      </SectionBand>

      <CtaBand
        title="Ready to Start Your Wellbeing Journey?"
        copy="Supportive care · Private health rebates · Calm, personalised approach"
        id="acupuncture-cta"
      >
        <CtaButton href="/book">Book an Appointment</CtaButton>
      </CtaBand>
    </SiteFrame>
  );
}
