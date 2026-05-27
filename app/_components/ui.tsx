import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";

type SplitHeroProps = {
  title: string;
  lead: ReactNode;
  image: string;
  imageAlt: string;
  imagePosition?: "object-center" | "object-top";
  meta?: ReactNode;
  children?: ReactNode;
  id?: string;
};

export function SplitHero({
  title,
  lead,
  image,
  imageAlt,
  imagePosition = "object-center",
  meta,
  children,
  id,
}: SplitHeroProps) {
  return (
    <header className="split-hero wix-parity-hero" id={id}>
      <div className="split-hero-copy">
        <div className="split-hero-copy-inner">
          <h1 className="page-title">{title}</h1>
          <p className="page-lead">{lead}</p>
          {children ? <div className="split-hero-actions">{children}</div> : null}
          {meta ? <p className="hero-meta">{meta}</p> : null}
        </div>
      </div>
      <div className="split-hero-media">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="(max-width: 980px) 100vw, 50vw"
          className={`split-hero-image ${imagePosition}`}
        />
      </div>
    </header>
  );
}

export function BrandAnchor() {
  return (
    <section className="brand-anchor" aria-label="Brand anchor">
      <div className="brand-anchor-copy">
        <p className="brand-anchor-kicker">WELLBEING DONE WELL</p>
        <p className="brand-anchor-title">Contemporary &amp; Traditional Chinese Medicine in Melbourne</p>
        <p className="brand-anchor-sub">Supporting balance, clarity and long-term health</p>
      </div>
      <div className="brand-anchor-media">
        <Image
          src="/images/shopfront-exterior.jpg"
          alt="Dr Adrian clinic shopfront exterior in Melbourne"
          fill
          sizes="(max-width: 980px) 100vw, 420px"
          className="brand-anchor-image object-center"
        />
      </div>
    </section>
  );
}

type SectionBandProps = {
  title?: string;
  id?: string;
  tone?: "surface" | "cream" | "mint" | "charcoal";
  children: ReactNode;
  image?: string;
  imageAlt?: string;
  imageSide?: "left" | "right";
};

export function SectionBand({
  title,
  id,
  tone = "surface",
  children,
  image,
  imageAlt,
  imageSide = "right",
}: SectionBandProps) {
  const hasImage = Boolean(image && imageAlt);

  return (
    <section className={`section-band tone-${tone}${hasImage ? " has-media" : ""}`} id={id}>
      {hasImage && imageSide === "left" ? (
        <div className="section-band-media">
          <Image src={image!} alt={imageAlt!} fill sizes="(max-width: 980px) 100vw, 420px" className="section-band-image object-center" />
        </div>
      ) : null}
      <div className="section-band-inner">
        {title ? <h2 className="section-title">{title}</h2> : null}
        <div className="section-band-content">{children}</div>
      </div>
      {hasImage && imageSide === "right" ? (
        <div className="section-band-media">
          <Image src={image!} alt={imageAlt!} fill sizes="(max-width: 980px) 100vw, 420px" className="section-band-image object-center" />
        </div>
      ) : null}
    </section>
  );
}

type CtaBandProps = {
  title: string;
  copy?: ReactNode;
  id?: string;
  children: ReactNode;
};

export function CtaBand({ title, copy, id, children }: CtaBandProps) {
  return (
    <section className="cta-band" id={id}>
      <div className="cta-band-inner">
        <h2 className="section-title">{title}</h2>
        {copy ? <p className="section-copy">{copy}</p> : null}
        <div className="cta-row">{children}</div>
      </div>
    </section>
  );
}

export function CtaButton({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="cta-button cta-primary cta-pill" href={href}>
      {children}
    </Link>
  );
}

export function CtaLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link className="cta-link cta-secondary cta-pill" href={href}>
      {children}
    </Link>
  );
}

export function QuoteBlock({ quote, author }: { quote: string; author: string }) {
  return (
    <blockquote className="quote-block">
      &quot;{quote}&quot;
      <p className="quote-author">{author}</p>
    </blockquote>
  );
}

export function FeatureImage({
  src,
  alt,
  caption,
  aspect = "landscape",
}: {
  src: string;
  alt: string;
  caption?: string;
  aspect?: "landscape" | "portrait" | "square";
}) {
  return (
    <figure className={`feature-image aspect-${aspect}`}>
      <div className="feature-image-frame">
        <Image src={src} alt={alt} fill sizes="(max-width: 980px) 100vw, 560px" className="feature-image-photo object-center" />
      </div>
      {caption ? <figcaption className="feature-image-caption">{caption}</figcaption> : null}
    </figure>
  );
}
