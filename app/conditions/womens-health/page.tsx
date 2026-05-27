import { SiteFrame } from "../../_components/site-frame";
import { CtaBand, CtaButton, QuoteBlock, SectionBand, SplitHero } from "../../_components/ui";
import { images } from "../../_lib/images";

export default function WomensHealthPage() {
  return (
    <SiteFrame>
      <SplitHero
        id="womens-health-hero"
        title="Holistic Women's Health Support Using Natural Medicine"
        lead="Dr Adrian provides personalised Chinese medicine care to support fertility, hormonal balance, menopause, energy and sleep, using a gentle, non-pharmaceutical approach."
        image={images.womensHealth}
        imageAlt="Treatment room setup for women's health consultations"
        meta="Personalised care · Private health rebates · Melbourne"
      >
        <div className="cta-row">
          <CtaButton href="/book">Book a Consultation</CtaButton>
        </div>
      </SplitHero>

      <SectionBand title="How We Support Women's Health" id="womens-health-conditions">
        <ul className="section-list">
          <li>Fertility support</li>
          <li>Menstrual &amp; gynaecological health</li>
          <li>Hormonal balance</li>
          <li>Menopausal support</li>
          <li>Energy &amp; fatigue</li>
          <li>Sleep issues</li>
          <li>Brain fog &amp; mental clarity</li>
          <li>Sexual function</li>
        </ul>
      </SectionBand>

      <SectionBand
        title="A Whole-of-Body Approach to Women's Health"
        id="womens-health-approach"
        tone="cream"
        image={images.traditional}
        imageAlt="Herbal medicine consultation with Dr Adrian"
        imageSide="left"
      >
        <p className="section-copy">
          Women&apos;s health concerns are rarely isolated to one system. In Chinese medicine, hormonal balance,
          energy, sleep and reproductive health are closely connected. Dr Adrian uses an integrated approach that may
          include acupuncture, herbal medicine, physical therapy, dietary guidance and lifestyle care, tailored to your
          individual needs and stage of life.
        </p>
      </SectionBand>

      <SectionBand title="What Makes This Approach Different" id="womens-health-differentiators">
        <div className="cards-grid-two">
          <article className="content-card">
            <h3>Non-pharmaceutical support</h3>
            <p>A natural approach that works with the body, not against it.</p>
          </article>
          <article className="content-card">
            <h3>Individualised care</h3>
            <p>No one-size-fits-all protocols.</p>
          </article>
          <article className="content-card">
            <h3>System-level focus</h3>
            <p>Supporting liver and kidney function, nervous system regulation, and whole-body balance.</p>
          </article>
          <article className="content-card">
            <h3>Integrated care</h3>
            <p>Combining multiple modalities for greater effectiveness.</p>
          </article>
        </div>
      </SectionBand>

      <SectionBand title="What to Expect in a Women's Health Consultation" id="womens-health-expect" tone="mint">
        <ul className="section-list">
          <li>A thorough discussion of your health history and concerns</li>
          <li>A personalised treatment plan</li>
          <li>Gentle treatment using appropriate modalities</li>
          <li>Ongoing support and guidance</li>
        </ul>
      </SectionBand>

      <SectionBand title="Trusted by Women Seeking Natural Health Support" id="womens-health-trust">
        <QuoteBlock
          quote="His compassionate, thoughtful approach combined with his extensive knowledge made such a big difference."
          author="Mona Mehraban"
        />
        <QuoteBlock
          quote="What truly sets him apart is his unwavering patience and willingness to go the extra mile to make sure we feel comfortable and see real results."
          author="Vivi Zhou"
        />
      </SectionBand>

      <SectionBand title="Supporting Balance Through Each Stage of Life" id="womens-health-philosophy" tone="cream">
        <p className="section-copy">
          Women&apos;s health changes across life stages. Care is designed to support balance, resilience and wellbeing,
          whether you&apos;re trying to conceive, navigating hormonal changes, or simply wanting to feel more like
          yourself again.
        </p>
      </SectionBand>

      <CtaBand
        title="Ready to Begin Your Women's Health Journey?"
        copy="Supportive care · Private health rebates · Appointments available"
        id="womens-health-cta"
      >
        <CtaButton href="/book">Book a Consultation</CtaButton>
      </CtaBand>
    </SiteFrame>
  );
}
