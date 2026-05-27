import { SiteFrame } from "../_components/site-frame";
import { CtaBand, CtaButton, CtaLink, SectionBand, SplitHero } from "../_components/ui";
import { images } from "../_lib/images";

export default function FaqPage() {
  return (
    <SiteFrame>
      <SplitHero
        id="faqs-hero"
        title="Frequently Asked Questions"
        lead="Clear, calm and reassuring guidance to help you understand how care works, what to expect, and how booking and fees are handled."
        image={images.clinicInterior}
        imageAlt="Calm clinic interior at Dr Adrian"
      >
        <div className="cta-row">
          <CtaLink href="/book">Book a Consultation</CtaLink>
        </div>
      </SplitHero>

      <SectionBand title="General Care & Approach" id="faqs-general-care" tone="cream">
        <article className="faq-item">
          <h3 className="faq-question">What does Chinese medicine help with?</h3>
          <p className="faq-answer">
            Chinese medicine supports health by working with the body as an integrated system. Dr Adrian commonly works
            with women&apos;s health concerns, pain and musculoskeletal conditions, stress and anxiety, sleep issues,
            energy levels, and overall wellbeing. Care is always individualised and adapted to each person&apos;s needs.
          </p>
        </article>

        <article className="faq-item">
          <h3 className="faq-question">Is Chinese medicine safe?</h3>
          <p className="faq-answer">
            When practised by a registered Chinese Medicine Practitioner, Chinese medicine is generally considered safe.
            Dr Adrian takes a careful, considered approach and tailors care to the individual. Any existing medical
            conditions or medications are discussed to ensure treatment is appropriate.
          </p>
        </article>

        <article className="faq-item">
          <h3 className="faq-question">Do I need a referral to book an appointment?</h3>
          <p className="faq-answer">No referral is required. You can book directly online.</p>
        </article>
      </SectionBand>

      <SectionBand title="Appointments & What to Expect" id="faqs-appointments">
        <article className="faq-item">
          <h3 className="faq-question">What happens at my first appointment?</h3>
          <p className="faq-answer">
            Your first appointment includes a calm, unhurried discussion about your health history, current concerns,
            and goals. This is followed by personalised care, which may include acupuncture or other supportive
            therapies, depending on what is appropriate for you. You&apos;ll have time to ask questions and understand
            the approach throughout the session.
          </p>
        </article>

        <article className="faq-item">
          <h3 className="faq-question">Will I receive treatment at my first appointment?</h3>
          <p className="faq-answer">
            Yes, in most cases. Your initial consultation usually includes treatment such as acupuncture or other
            appropriate therapies, based on your individual needs.
          </p>
        </article>

        <article className="faq-item">
          <h3 className="faq-question">Does acupuncture hurt?</h3>
          <p className="faq-answer">
            Most people find acupuncture very gentle. Sensations vary, but discomfort is usually minimal. Many patients
            feel deeply relaxed during and after treatment.
          </p>
        </article>

        <article className="faq-item">
          <h3 className="faq-question">How many sessions will I need?</h3>
          <p className="faq-answer">
            This varies depending on your concerns and how your body responds. Some people notice changes quickly,
            while others benefit from a short course of care or ongoing support. This is discussed collaboratively -
            there are no fixed protocols.
          </p>
        </article>
      </SectionBand>

      <SectionBand title="Fees & Pricing" id="faqs-fees-pricing" tone="mint">
        <article className="faq-item">
          <h3 className="faq-question">How much do appointments cost?</h3>
          <p className="faq-answer">
            Fees vary depending on the type and length of the appointment. Dr Adrian offers a reduced initial
            consultation for new patients, which includes a comprehensive health assessment and personalised care.
            Ongoing appointments are priced transparently based on the treatment provided. Full fee details are shown
            clearly when booking online.
          </p>
        </article>

        <article className="faq-item">
          <h3 className="faq-question">What is included in the initial consultation?</h3>
          <p className="faq-answer">
            The initial consultation includes: a comprehensive health assessment and goal-setting session; personalised
            care tailored to your needs; treatment such as acupuncture and/or other appropriate therapies. This
            appointment is longer than standard sessions and is designed to give a thorough understanding of your
            health.
          </p>
        </article>

        <article className="faq-item">
          <h3 className="faq-question">Do you offer packages or longer sessions?</h3>
          <p className="faq-answer">
            Some extended sessions and packages are available where appropriate, including women&apos;s health and
            restorative care options. These are discussed during consultation to ensure they suit your individual needs
            rather than being applied routinely.
          </p>
        </article>

        <article className="faq-item">
          <h3 className="faq-question">Will I be pressured into ongoing treatment or packages?</h3>
          <p className="faq-answer">
            No. Care is discussed collaboratively, and you are always free to decide what feels right for you. There is
            no obligation to continue beyond what you&apos;re comfortable with.
          </p>
        </article>
      </SectionBand>

      <SectionBand title="Treatments & Modalities" id="faqs-treatments">
        <article className="faq-item">
          <h3 className="faq-question">What treatments might be used?</h3>
          <p className="faq-answer">
            Depending on your needs, care may include: acupuncture; Chinese herbal medicine; physical therapies such as
            cupping or gua sha; lifestyle, exercise or dietary guidance. Not all treatments are used for every person.
          </p>
        </article>
      </SectionBand>

      <CtaBand title="Ready to Take the Next Step?" id="faqs-cta">
        <CtaButton href="/book">Book a Consultation</CtaButton>
      </CtaBand>
    </SiteFrame>
  );
}
