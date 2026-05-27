import { SiteFrame } from "../_components/site-frame";
import { CtaBand, CtaButton, CtaLink, SectionBand, SplitHero } from "../_components/ui";
import { images } from "../_lib/images";

export default function PrivacyPage() {
  return (
    <SiteFrame>
      <SplitHero
        id="privacy-hero"
        title="Privacy Policy"
        lead="Your privacy matters. This policy explains how personal information is handled in a clear, respectful and practical way."
        image={images.shopfront}
        imageAlt="Exterior view of Dr Adrian clinic"
      />

      <SectionBand title="A Warm Introduction" id="privacy-intro" tone="cream">
        <p className="section-copy">
          Dr Adrian is committed to protecting your personal information and handling it responsibly. Information is
          collected only where needed to provide safe, appropriate care and to support a smooth booking and clinic
          experience.
        </p>
      </SectionBand>

      <SectionBand title="3. Information We Collect" id="privacy-3-information-collected">
        <p className="section-copy">
          Information may include your contact details, appointment information, health history relevant to care, and
          communication records. Only information necessary to provide care and manage appointments is collected.
        </p>
      </SectionBand>

      <SectionBand title="4. How Information Is Used" id="privacy-4-use-of-information" tone="cream">
        <p className="section-copy">
          Personal information is used to provide treatment, manage appointments, communicate about care, process
          payments, and meet legal or professional obligations. Information is not used for unrelated purposes.
        </p>
      </SectionBand>

      <SectionBand title="5. Disclosure of Information" id="privacy-5-disclosure">
        <p className="section-copy">
          Personal information is not sold or shared for marketing. Information may be disclosed where required by law
          or where you have provided consent for coordination of care.
        </p>
      </SectionBand>

      <SectionBand title="6. Storage and Security" id="privacy-6-storage-security" tone="cream">
        <p className="section-copy">
          Reasonable steps are taken to protect personal information from misuse, loss, unauthorised access, and
          disclosure. Records are retained according to applicable legal and professional requirements.
        </p>
      </SectionBand>

      <SectionBand title="7. Access and Correction" id="privacy-7-access-correction">
        <p className="section-copy">
          You may request access to your personal information and ask for corrections where information is inaccurate or
          incomplete, subject to legal and professional limits.
        </p>
      </SectionBand>

      <SectionBand title="8. Cookies and Website Data" id="privacy-8-cookies" tone="cream">
        <p className="section-copy">
          Website tools may use cookies or analytics to improve performance and user experience. These tools do not
          replace clinical records and are used only for normal website operation and improvement.
        </p>
      </SectionBand>

      <SectionBand title="9. Third-Party Services and Links" id="privacy-9-third-party">
        <p className="section-copy">
          Third-party services such as booking platforms or payment providers may have their own privacy practices.
          Where third-party tools are used, only necessary information is shared to complete the requested service.
        </p>
      </SectionBand>

      <SectionBand title="10. Updates to This Policy" id="privacy-10-updates" tone="cream">
        <p className="section-copy">
          This policy may be updated from time to time to reflect service, legal or operational changes. The latest
          version will be available on this page.
        </p>
      </SectionBand>

      <SectionBand title="11. Contact" id="privacy-11-contact">
        <p className="section-copy">
          If you have questions about privacy or how your information is handled, please contact the clinic directly.
        </p>
        <div className="cta-row">
          <CtaLink href="/book">Book a Consultation</CtaLink>
          <CtaLink href="/faqs">Read FAQs</CtaLink>
        </div>
      </SectionBand>

      <SectionBand title="Future-Proofing Note" id="privacy-future-proofing" tone="mint">
        <p className="section-copy">
          As booking systems and digital tools evolve, this privacy policy can be expanded with additional details while
          maintaining the same clear and human style used throughout the site.
        </p>
      </SectionBand>

      <CtaBand title="Need help before booking?">
        <CtaButton href="/faqs">Read FAQs</CtaButton>
        <CtaLink href="/book">Book a Consultation</CtaLink>
      </CtaBand>
    </SiteFrame>
  );
}
