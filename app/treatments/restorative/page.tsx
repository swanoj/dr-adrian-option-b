import { SiteFrame } from "../../_components/site-frame";
import { CtaBand, CtaButton, CtaLink, QuoteBlock, SectionBand, SplitHero } from "../../_components/ui";
import { images } from "../../_lib/images";

export default function RestorativeTherapiesPage() {
  return (
    <SiteFrame>
      <SplitHero
        id="restorative-hero"
        title="Restorative Therapies to Support Recovery and Resilience"
        lead="Restorative therapies focus on supporting the body's natural ability to heal, recover and function well, helping you rebuild balance, energy and resilience over time."
        image={images.restorative}
        imageAlt="Restorative therapy treatment in the clinic"
      >
        <div className="cta-row">
          <CtaButton href="/book">Book a Consultation</CtaButton>
        </div>
      </SplitHero>

      <SectionBand title="What Are Restorative Therapies?" id="restorative-what" tone="cream">
        <p className="section-copy">
          Restorative therapies work with the body&apos;s physiology and natural healing processes to support recovery
          and long-term health. Rather than focusing on isolated symptoms, restorative care helps people rebuild
          capacity, regulate stress and strengthen the foundations of wellbeing.
        </p>
      </SectionBand>

      <SectionBand title="Why Restorative Care Is Important" id="restorative-importance">
        <p className="section-copy">
          Many people move from one issue to the next without fully recovering. Ongoing stress, disrupted sleep and
          limited recovery time can gradually reduce the body&apos;s ability to cope. Restorative therapies support
          recovery by helping the body return to a more balanced, resilient state, improving how it responds to
          physical, emotional and mental demands.
        </p>
      </SectionBand>

      <SectionBand title="What Restorative Therapies May Include" id="restorative-includes" tone="mint">
        <div className="cards-grid-two">
          <article className="content-card">
            <h3>Breathing exercises</h3>
            <p>Supporting nervous system regulation and relaxation.</p>
          </article>
          <article className="content-card">
            <h3>Healthy habit support</h3>
            <p>Guidance around sleep, movement and recovery.</p>
          </article>
          <article className="content-card">
            <h3>Self-care practices</h3>
            <p>Helping integrate care into daily life.</p>
          </article>
          <article className="content-card">
            <h3>Informed decision-making</h3>
            <p>Supporting understanding of health choices and practices.</p>
          </article>
        </div>
        <p className="section-copy">This is not prescriptive or rigid - care adapts to the individual.</p>
      </SectionBand>

      <SectionBand
        title="How Restorative Therapies Fit Into Care"
        id="restorative-fit"
        image={images.heroHome}
        imageAlt="Integrated restorative care consultation"
        imageSide="left"
      >
        <p className="section-copy">
          Restorative therapies often complement traditional treatments and preventative care. While treatment may
          address specific concerns and preventative care helps maintain balance, restorative therapies focus on
          rebuilding capacity and resilience, supporting the body between and beyond treatment phases.
        </p>
        <div className="cta-row">
          <CtaLink href="/treatments/traditional">Traditional Treatments</CtaLink>
          <CtaLink href="/treatments/preventative">Preventative Care</CtaLink>
        </div>
      </SectionBand>

      <SectionBand title="Supporting an Active Role in Your Health" id="restorative-partnership" tone="cream">
        <p className="section-copy">
          Restorative care empowers people to take an active, informed role in their health, helping them understand
          their bodies, recognise patterns and make supportive choices over time. This partnership approach encourages
          confidence, awareness and long-term wellbeing.
        </p>
      </SectionBand>

      <SectionBand title="Trust Signals" id="restorative-trust">
        <QuoteBlock quote="I felt listened to and supported from the first visit." author="Patient review" />
        <QuoteBlock quote="Professional, considerate, safe. Highly recommended." author="Dean Johnston" />
      </SectionBand>

      <CtaBand title="Interested in Supporting Your Recovery and Resilience?" id="restorative-cta">
        <CtaButton href="/book">Book a Consultation</CtaButton>
        <CtaLink href="/conditions/womens-health">Explore Conditions We Support</CtaLink>
      </CtaBand>
    </SiteFrame>
  );
}
