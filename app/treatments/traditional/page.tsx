import { SiteFrame } from "../../_components/site-frame";
import { CtaBand, CtaButton, CtaLink, QuoteBlock, SectionBand, SplitHero } from "../../_components/ui";
import { images } from "../../_lib/images";

export default function TraditionalTreatmentsPage() {
  return (
    <SiteFrame>
      <SplitHero
        id="traditional-hero"
        title="Traditional Treatments That Support Whole-Body Health"
        lead="Dr Adrian uses an integrated Chinese medicine approach, combining acupuncture, herbal medicine, physical therapy and lifestyle care, to support balance, energy and long-term wellbeing."
        image={images.traditional}
        imageAlt="Traditional herbal medicine consultation with Dr Adrian"
      >
        <div className="cta-row">
          <CtaButton href="/book">Book a Consultation</CtaButton>
        </div>
      </SplitHero>

      <SectionBand title="An Integrated Approach to Health" id="traditional-introduction" tone="cream">
        <p className="section-copy">
          Traditional Chinese Medicine is a complete medical system that works with the body&apos;s natural ability to
          regulate, heal and restore balance. Rather than focusing on a single symptom or structure, care considers
          how the musculoskeletal system, internal organs, nervous system and lifestyle factors interact.
        </p>
      </SectionBand>

      <SectionBand title="The Five Core Treatment Methods" id="traditional-five-methods">
        <article className="content-card">
          <h3>1. Acupuncture - Releasing Blocks to Health</h3>
          <p>
            Acupuncture helps release underlying blocks that interfere with health, supporting the musculoskeletal
            system, internal organs and nervous system.
          </p>
          <ul className="section-list">
            <li>Reduce pain by influencing neurological transmitters</li>
            <li>Relax muscles and improve circulation</li>
            <li>Calm the mind and nervous system</li>
            <li>Many people describe deep relaxation or &quot;bliss&quot; during and after treatment</li>
          </ul>
        </article>

        <article className="content-card">
          <h3>2. Herbal Medicine - Natural, Non-Pharmaceutical Support</h3>
          <p>
            Herbal medicine uses carefully selected plant extracts to help regulate and balance the body. Prescriptions
            are tailored to the individual and adjusted as the body responds.
          </p>
          <ul className="section-list">
            <li>Non-pharmaceutical approach</li>
            <li>Plant-based formulations</li>
            <li>Non-addictive</li>
            <li>Minimal to no side effects compared with many pharmaceutical alternatives</li>
          </ul>
        </article>

        <article className="content-card">
          <h3>3. Physical Therapy - Whole-Body Treatment</h3>
          <p>
            While physiotherapists, chiropractors and osteopaths specialise in specific modalities, Chinese medicine
            integrates physical therapies into a whole-of-body approach.
          </p>
          <ul className="section-list">
            <li>Massage</li>
            <li>Joint manipulation</li>
            <li>Cupping - promotes circulation, releases muscle tension and clears excess heat</li>
            <li>Scraping (gua sha) - deep tissue release to free restricted muscle fibres and calm the nervous system</li>
          </ul>
        </article>

        <article className="content-card">
          <h3>4. Exercise Prescription - Movement as Supportive Care</h3>
          <p>
            Exercise prescription supports recovery, energy and long-term health - not just fitness. Movement
            recommendations are tailored to support treatment outcomes and individual capacity.
          </p>
        </article>

        <article className="content-card">
          <h3>5. Dietary Therapy - Supporting the Body Through Food</h3>
          <p>
            Dietary therapy considers the nature of foods - whether they warm or cool the body - rather than focusing
            only on nutritional content. Guidance is provided to support treatment effectiveness, digestion, energy and
            ongoing balance.
          </p>
        </article>
      </SectionBand>

      <SectionBand title="Why Traditional Treatments Are Used" id="traditional-why" tone="mint">
        <ul className="section-list">
          <li>Moisten or dry the body as needed</li>
          <li>Support metabolic function</li>
          <li>Improve energy and vitality</li>
          <li>Enhance mental clarity and brain function</li>
          <li>Support emotional wellbeing</li>
        </ul>
      </SectionBand>

      <SectionBand title="Part of a Broader Care Approach" id="traditional-bridge">
        <p className="section-copy">
          Traditional treatments are often combined with preventative care and restorative therapies to support both
          recovery and long-term health.
        </p>
        <div className="cta-row">
          <CtaLink href="/treatments/preventative">Preventative Care</CtaLink>
          <CtaLink href="/treatments/restorative">Restorative Therapies</CtaLink>
        </div>
      </SectionBand>

      <SectionBand title="Trust Signals" id="traditional-trust">
        <QuoteBlock quote="Professional, considerate, safe. Highly recommended." author="Dean Johnston" />
        <QuoteBlock
          quote="The experience never feels like his focus is on the business - it's always on me as the patient."
          author="Nathyn Costello"
        />
      </SectionBand>

      <CtaBand title="Interested in Learning More or Beginning Care?" id="traditional-cta">
        <CtaButton href="/book">Book a Consultation</CtaButton>
        <CtaLink href="/conditions/womens-health">Explore Conditions We Support</CtaLink>
      </CtaBand>
    </SiteFrame>
  );
}
