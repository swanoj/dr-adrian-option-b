import { SiteFrame } from "../_components/site-frame";
import { CtaBand, CtaButton, CtaLink, SectionBand, SplitHero } from "../_components/ui";
import { images } from "../_lib/images";

export default function BookPage() {
  return (
    <SiteFrame>
      <SplitHero
        id="booking-intro"
        title="Let's find the right appointment for you."
        lead="Answer a few simple questions so your appointment can match what you're looking for. You can always change your choice later if needed."
        image={images.booking}
        imageAlt="Welcoming clinic space for booking consultations"
      />

      <SectionBand title="What would you like support with?" id="booking-step-2" tone="cream">
        <div className="cards-grid-two">
          <article className="content-card">
            <h3>Pain &amp; Recovery</h3>
            <p>Pain, injury or movement issues.</p>
          </article>
          <article className="content-card">
            <h3>Women&apos;s Health</h3>
            <p>Fertility, hormonal support, energy and sleep.</p>
          </article>
          <article className="content-card">
            <h3>Stress &amp; Sleep</h3>
            <p>Nervous system support, anxiety and sleep quality.</p>
          </article>
          <article className="content-card">
            <h3>General Wellbeing</h3>
            <p>Preventative care and ongoing health support.</p>
          </article>
          <article className="content-card">
            <h3>Existing Patient</h3>
            <p>Follow-up or ongoing care.</p>
          </article>
        </div>
      </SectionBand>

      <SectionBand title="Choose an appointment type" id="booking-step-3">
        <div className="cards-grid-two">
          <article className="content-card">
            <h3>Initial Consultation</h3>
            <p>
              A longer first appointment to understand your health history, current concerns and goals, followed by
              personalised treatment.
            </p>
          </article>
          <article className="content-card">
            <h3>30 Minute Follow-Up</h3>
            <p>A shorter session for ongoing care or focused follow-up on a specific concern.</p>
          </article>
          <article className="content-card">
            <h3>60 Minute Holistic Session</h3>
            <p>A longer session allowing time for acupuncture and additional supportive therapies where appropriate.</p>
          </article>
        </div>
      </SectionBand>

      <SectionBand
        title="Select a day and time"
        id="booking-step-4"
        tone="mint"
        image={images.shopfront}
        imageAlt="Dr Adrian clinic exterior in Melbourne"
        imageSide="left"
      >
        <p className="section-copy">
          Available times are shown based on your chosen appointment type. If you can&apos;t find a suitable time, you
          can adjust your selection or contact the clinic.
        </p>
        <div className="stack-list">
          <article className="stack-item">
            <h3>Booking Summary</h3>
            <p>Concern type, appointment type, date and time, and clinic location are confirmed before final booking.</p>
          </article>
        </div>
      </SectionBand>

      <SectionBand title="Booking Notes" id="booking-notes">
        <ul className="section-list">
          <li>Avoid long forms before calendar selection.</li>
          <li>Keep required fields minimal.</li>
          <li>Use a calm, human tone throughout each step.</li>
          <li>Provide guidance without restricting user choices.</li>
        </ul>
      </SectionBand>

      <CtaBand title="Ready to Book?" id="booking-cta">
        <CtaButton href="#booking-step-4">Book a Consultation</CtaButton>
        <CtaLink href="/faqs">Read FAQs</CtaLink>
      </CtaBand>
    </SiteFrame>
  );
}
