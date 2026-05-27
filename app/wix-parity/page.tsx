import { Montserrat } from "next/font/google";

const wellbeingFont = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

export default function WixParityPage() {
  return (
    <main id="wixv3-root" className="wixv3-root">
      <section id="wixv3-first-fold" className="wixv3-first-fold">
        <div className="wixv3-built-row">
          <p className="wixv3-built-copy">Built on WIXSTUDIO</p>
        </div>

        <header id="wixv3-hero-head" className="wixv3-hero-head">
          <div className="wixv3-head-top">
            <div className="wixv3-acu-box">
              <p className="wixv3-acu-title">ACUPUNCTURE</p>
              <p className="wixv3-acu-sub">REBATES &amp; INSURANCE &gt;</p>
            </div>
            <div className="wixv3-brand-lockup">
              <img className="wixv3-brand-logo" src="/assets/wix_downloads/Dr_Adrian_Branding_2026_Logo_Dev_v1-08.svg" alt="Dr Adrian logo" />
              <p className="wixv3-brand-subline">Traditional, Contemporary Chinese Medicine</p>
            </div>
            <div className="wixv3-whole-box">
              <p className="wixv3-whole-line">WHOLE</p>
              <p className="wixv3-whole-line">HEALTH</p>
              <p className="wixv3-whole-line">CARED</p>
            </div>
          </div>

          <div className="wixv3-revive-band">
            <img className="wixv3-revive-word" src="/assets/wix_downloads/DRA_Logo_2026_Headlines_Print_Web_Revive-05.svg" alt="Revive and Thrive" />
          </div>
        </header>

        <div className="wixv3-hero-core">
          <div className="wixv3-side-logos">
            <img className="wixv3-side-round" src="/assets/left-round-a.png" alt="Association mark" />
            <p className="wixv3-side-bupa">Bupa</p>
            <p className="wixv3-side-ahm">ahm</p>
            <p className="wixv3-side-medibank">medibank</p>
          </div>

          <img className="wixv3-hero-model" src="/assets/wix-hero-superman.png" alt="Hero model pose" />

          <div className="wixv3-wellbeing-block">
            <h1 className={`${wellbeingFont.className} wixv3-wellbeing-text`} aria-label="WELLBEINGDONEWELL">
              <span className="wixv3-wellbeing-dark">WELL</span>
              <span className="wixv3-wellbeing-mint">BEING</span>
              <span className="wixv3-wellbeing-dark">DONE</span>
              <span className="wixv3-wellbeing-mint">WELL</span>
            </h1>
            <p className="wixv3-wellbeing-subline">MELBOURNE&apos;S PRINCIPAL CHINESE MEDICINE PRACTICE</p>
            <a className="wixv3-appointments-link" href="https://yorryconcepts.wixstudio.com/drad-c2-v25-2/book-online">
              APPOINTMENTS
            </a>
          </div>

          <div className="wixv3-right-dots" aria-hidden="true">
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
            <span className="wixv3-dot"></span>
          </div>
        </div>

        <div className="wixv3-modality-strip">
          <p className="wixv3-modality-copy">THERAPY | SLEEP DISORDERS | PAEDIATRICS | DEPRESSION | ANXIETY | ACUPUNCTURE</p>
        </div>
      </section>

      <section id="wixv3-first-card" className="wixv3-first-card">
        <div className="wixv3-card-shell">
          <h2 className="wixv3-card-title">TRADITIONAL CHINESE MEDICINE &amp; CONTEMPORARY THERAPIES:</h2>
          <p className="wixv3-card-script">Prescribed with Expert Personal Care</p>
          <img className="wixv3-card-icon-strip" src="/assets/first-card-icon-strip.png" alt="Traditional and contemporary modality icons" />
          <p className="wixv3-card-body">
            Doctor Adrian incorporates the five major, traditional modalities of Chinese Medicine and has developed
            each of them to the highest standards; Acupuncture, Herbal Medicine, Massage and Physical Therapy, Chinese
            Dietary Nutrition Therapy and Exercise Prescription.
          </p>
        </div>
      </section>
    </main>
  );
}
