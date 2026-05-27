import Link from "next/link";
import { ReactNode } from "react";

type SiteFrameProps = {
  children: ReactNode;
};

export function SiteFrame({ children }: SiteFrameProps) {
  return (
    <main id="site-root" className="site-root">
      <div className="site-meta-bar">
        <p className="site-meta-copy">Built on Wix Studio</p>
      </div>
      <header id="site-header" className="site-header">
        <div className="site-header-shell">
          <div className="site-header-inner">
            <div className="header-badge-wrap">
              <p className="header-badge-title">Acupuncture</p>
              <p className="header-badge-sub">Rebates &amp; insurance</p>
            </div>
            <div className="site-header-brand header-brand-center">
              <Link className="brand-link" href="/" aria-label="Dr Adrian home">
                <img className="brand-logo-main" src="/logos/dr-adrian-logo-main.svg" alt="Dr Adrian logo" />
              </Link>
            </div>
            <div className="header-badge-wrap header-badge-right">
              <p className="header-badge-title">Whole</p>
              <p className="header-badge-sub">health care</p>
            </div>
          </div>
          <div className="header-action-row">
            <div className="site-nav-scroll">
              <nav id="primary-nav" className="site-nav" aria-label="Primary navigation">
                <Link className="site-nav-link" href="/">
                  Home
                </Link>
                <Link className="site-nav-link" href="/about">
                  About
                </Link>
                <Link className="site-nav-link" href="/conditions/womens-health">
                  Women&apos;s Health
                </Link>
                <Link className="site-nav-link" href="/conditions/pain-musculoskeletal">
                  Pain &amp; Musculoskeletal
                </Link>
                <Link className="site-nav-link" href="/conditions/stress-anxiety">
                  Stress &amp; Anxiety
                </Link>
                <Link className="site-nav-link" href="/treatments/traditional">
                  Traditional Treatments
                </Link>
                <Link className="site-nav-link" href="/treatments/preventative">
                  Preventative Care
                </Link>
                <Link className="site-nav-link" href="/treatments/restorative">
                  Restorative Therapies
                </Link>
                <Link className="site-nav-link" href="/acupuncture">
                  Acupuncture
                </Link>
                <Link className="site-nav-link" href="/faqs">
                  FAQs
                </Link>
                <Link className="site-nav-link" href="/privacy">
                  Privacy
                </Link>
              </nav>
            </div>
            <Link className="header-book-link header-book-link-primary" href="/book">
              Book Online
            </Link>
          </div>
        </div>
      </header>

      <div className="site-content-shell">
        <div className="page-wrap">{children}</div>
      </div>

      <footer className="site-footer">
        <div className="site-footer-inner">
          <div className="footer-brand-col">
            <img className="brand-logo-compact" src="/logos/dr-adrian-logo-compact.svg" alt="Dr Adrian wordmark" />
            <p className="footer-title">WELLBEING DONE WELL</p>
            <p className="footer-subtitle">Contemporary &amp; Traditional Chinese Medicine in Melbourne</p>
          </div>
          <div className="footer-links-grid">
            <div className="footer-links-col">
              <p className="footer-col-title">Menu</p>
              <div className="footer-links">
                <Link className="footer-link" href="/">
                  Home
                </Link>
                <Link className="footer-link" href="/about">
                  About
                </Link>
                <Link className="footer-link" href="/book">
                  Book Online
                </Link>
              </div>
            </div>
            <div className="footer-links-col">
              <p className="footer-col-title">Explore</p>
              <div className="footer-links">
                <Link className="footer-link" href="/conditions/womens-health">
                  Women&apos;s Health
                </Link>
                <Link className="footer-link" href="/conditions/pain-musculoskeletal">
                  Pain &amp; Musculoskeletal
                </Link>
                <Link className="footer-link" href="/conditions/stress-anxiety">
                  Stress &amp; Anxiety
                </Link>
              </div>
            </div>
            <div className="footer-links-col">
              <p className="footer-col-title">Legal</p>
              <div className="footer-links">
                <Link className="footer-link" href="/faqs">
                  FAQs
                </Link>
                <Link className="footer-link" href="/privacy">
                  Privacy
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
