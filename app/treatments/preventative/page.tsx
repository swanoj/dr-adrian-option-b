import { SiteFrame } from "../../_components/site-frame";
import { CtaBand, CtaButton, CtaLink, QuoteBlock, SectionBand, SplitHero } from "../../_components/ui";
import { images } from "../../_lib/images";

export default function PreventativeCarePage() {
  return (
    <SiteFrame>
      <SplitHero
        id="preventative-hero"
        title="Preventative Care to Support Long-Term Health and Resilience"
        lead="Preventative care focuses on maintaining the body's natural strength, energy and balance, helping reduce the impact of stress, lifestyle and genetic factors over time."
        image={images.preventative}
        imageAlt="Preventative care consultation in a calm clinic setting"
      >
        <div className="cta-row">
          <CtaButton href="/book">Book a Consultation</CtaButton>
        </div>
      </SplitHero>

      <SectionBand title="Why Preventative Care Is Important" id="preventative-importance" tone="cream">
        <p className="section-copy">
          Modern life places ongoing demands on the body. Stress, disrupted sleep, digestion issues and reduced
          recovery can gradually affect health and wellbeing. Preventative care helps support the body&apos;s natural
          systems before imbalance becomes a larger issue, maintaining energy, immune function and mental clarity.
        </p>
      </SectionBand>

      <SectionBand title="Who Preventative Care Can Support" id="preventative-who">
        <ul className="section-list">
          <li>Feel generally well but want to stay that way</li>
          <li>Have a high-stress lifestyle or demanding work</li>
          <li>Want to support immune function and energy</li>
          <li>Have family or genetic health considerations</li>
          <li>Are recovering from a period of illness or burnout</li>
          <li>Want to perform well as a parent, professional or business owner</li>
        </ul>
      </SectionBand>

      <SectionBand
        title="A Supportive, Individualised Approach"
        id="preventative-approach"
        tone="mint"
        image={images.clinicInterior}
        imageAlt="Warm clinic interior supporting ongoing preventative care"
        imageSide="left"
      >
        <p className="section-copy">
          Preventative care is tailored to the individual and evolves over time. Care may include acupuncture, herbal
          medicine, dietary guidance, exercise prescription and lifestyle support, chosen to help maintain balance,
          support recovery and reduce the impact of ongoing stress. When sleep improves, digestion settles and the
          nervous system calms, preventative care focuses on maintaining that state, rather than waiting for new
          symptoms to arise.
        </p>
      </SectionBand>

      <SectionBand title="Benefits of Ongoing Preventative Care" id="preventative-benefits">
        <p className="section-copy">Preventative care may help support:</p>
        <ul className="section-list">
          <li>Consistent energy levels</li>
          <li>Improved sleep quality</li>
          <li>Better digestion</li>
          <li>Mental clarity and focus</li>
          <li>Emotional resilience</li>
          <li>Greater capacity to handle the demands of daily commitments</li>
        </ul>
      </SectionBand>

      <SectionBand title="Care That Supports You Beyond Treatment" id="preventative-fit" tone="cream">
        <p className="section-copy">
          Preventative care often follows treatment for specific concerns and works alongside restorative therapies to
          help maintain health and wellbeing over time.
        </p>
        <div className="cta-row">
          <CtaLink href="/treatments/traditional">Traditional Treatments</CtaLink>
          <CtaLink href="/treatments/restorative">Restorative Therapies</CtaLink>
        </div>
      </SectionBand>

      <SectionBand title="Trust Signals" id="preventative-trust">
        <QuoteBlock quote="You always leave feeling refreshed and rejuvenated." author="Guy Hanman" />
        <QuoteBlock quote="Thoughtful, professional and genuinely caring." author="Patient review" />
      </SectionBand>

      <CtaBand title="Interested in Supporting Your Health Long-Term?" id="preventative-cta">
        <CtaButton href="/book">Book a Consultation</CtaButton>
        <CtaLink href="/conditions/womens-health">Explore Conditions We Support</CtaLink>
      </CtaBand>
    </SiteFrame>
  );
}
