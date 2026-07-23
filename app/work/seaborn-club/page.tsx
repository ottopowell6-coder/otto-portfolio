import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { HoverLink, HoverNavBlock } from "@/components/Interactive";

export const metadata = {
  title: "Seaborn Club — Brand Identity | Otto Powell",
  description: "A Kingston-born swimwear brand identity built on radical inclusivity. Full visual system, packaging, illustrated assets, and social campaign.",
};

const mono: React.CSSProperties = { fontFamily: "'DM Mono', monospace" };
const syne: React.CSSProperties = { fontFamily: "'Syne', sans-serif" };

function Label({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ ...mono, fontSize: "10px", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>
      {children}
    </p>
  );
}

function Divider({ label }: { label: string }) {
  return (
    <div style={{ padding: "1.25rem var(--px)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)", display: "flex", alignItems: "center", gap: "1rem" }}>
      <span style={{ ...mono, fontSize: "10px", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase", flexShrink: 0 }}>{label}</span>
      <div style={{ flex: 1, height: "0.5px", background: "var(--border)" }} />
    </div>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ ...syne, fontSize: "15px", lineHeight: 1.9, color: "rgba(240,238,232,0.75)", maxWidth: "640px" }}>
      {children}
    </p>
  );
}

function FullImage({ src, alt, aspect = "16/9" }: { src: string; alt: string; aspect?: string }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: aspect, overflow: "hidden", borderBottom: "0.5px solid var(--border)" }}>
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} unoptimized />
    </div>
  );
}

function TwoCol({ left, right, leftAlt, rightAlt, aspect = "1/1" }: { left: string; right: string; leftAlt: string; rightAlt: string; aspect?: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "var(--grid-2)", borderBottom: "0.5px solid var(--border)" }}>
      <div style={{ position: "relative", aspectRatio: aspect, borderRight: "0.5px solid var(--border)" }}>
        <Image src={left} alt={leftAlt} fill style={{ objectFit: "cover" }} unoptimized />
      </div>
      <div style={{ position: "relative", aspectRatio: aspect }}>
        <Image src={right} alt={rightAlt} fill style={{ objectFit: "cover" }} unoptimized />
      </div>
    </div>
  );
}

function SwatchRow() {
  const swatches = [
    { name: "Sunset Coral", hex: "#F45B5B", note: "Heat, joy, presence" },
    { name: "Island Turquoise", hex: "#1FB6AA", note: "Shallow water, fresh contrast" },
    { name: "Golden Mango", hex: "#F4B740", note: "Warmth, celebration, melanin-forward" },
    { name: "Deep Cocoa", hex: "#3B1F1F", note: "Warm anchor, richer than black" },
  ];
  return (
    <div style={{ display: "grid", gridTemplateColumns: "var(--grid-4)", borderBottom: "0.5px solid var(--border)" }}>
      {swatches.map(({ name, hex, note }, i) => (
        <div key={name} style={{ borderRight: i < 3 ? "0.5px solid var(--border)" : undefined }}>
          <div style={{ background: hex, aspectRatio: "1/1", width: "100%" }} />
          <div style={{ padding: "1.25rem" }}>
            <p style={{ ...mono, fontSize: "11px", color: hex, marginBottom: "4px" }}>{hex}</p>
            <p style={{ ...syne, fontSize: "13px", fontWeight: 600, color: "var(--white)", marginBottom: "4px" }}>{name}</p>
            <p style={{ ...mono, fontSize: "10px", color: "var(--muted)" }}>{note}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function SeabornClubPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <header style={{ padding: "3rem var(--px) 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-header)", gap: "2rem", alignItems: "flex-end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <HoverLink href="/">← Work</HoverLink>
            <span style={{ color: "var(--border)", fontSize: "11px" }}>/</span>
            <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>06</span>
          </div>
          <h1 style={{ ...syne, fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Seaborn Club{" "}
            <span style={{ fontStyle: "italic", color: "var(--blue-accent)" }}>Brand Identity</span>
          </h1>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", marginBottom: "0.5rem", flexWrap: "wrap" }}>
            {["Brand Identity", "Spec Work", "Campaign"].map((tag) => (
              <span key={tag} style={{ ...mono, fontSize: "10px", color: "var(--blue-accent)", letterSpacing: "0.08em", textTransform: "uppercase", border: "0.5px solid var(--navy-bright)", padding: "4px 10px", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>2025</span>
        </div>
      </header>

      {/* Hero */}
      <FullImage src="/projects/seaborn-club/header.png" alt="Seaborn Club brand header" aspect="16/6" />

      {/* Overview */}
      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>Overview</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            Seaborn Club is a spec brand identity for a Kingston-born swimwear label. No client, no brief handed down. A creative problem I set for myself and built a full system around.
          </Body>
          <Body>
            The swimwear market is full of brands chasing an unattainable luxury aesthetic -- exclusive by design, aspirational by default. That approach has consistently left Black women and diverse communities with brands that feel like they were not made for them. Seaborn Club was built to fill that gap.
          </Body>
          <Body>
            Exclusivity is overrated. The brand is built on radical inclusivity, specifically celebrating Black women, and positions itself as a stylish, confident, playful alternative to everything the market currently defaults to. The only membership requirement is a love for the water.
          </Body>
        </div>
      </section>

      {/* Specs */}
      <section style={{ padding: "2rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-4)", gap: "2rem" }}>
        {[
          { label: "Type", value: "Spec Work" },
          { label: "Typography", value: "Cooper Std / Inter Medium" },
          { label: "Deliverables", value: "Logo, Campaign, Packaging, Social" },
          { label: "Year", value: "2025" },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ ...mono, fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
            <p style={{ ...syne, fontSize: "13px", fontWeight: 500, color: "var(--white)", lineHeight: 1.5 }}>{value}</p>
          </div>
        ))}
      </section>

      <Divider label="The Identity" />

      {/* Logo animation embed */}
      <div style={{ borderBottom: "0.5px solid var(--border)", background: "#000", display: "flex", justifyContent: "center", padding: "3rem var(--px)" }}>
        <div style={{ position: "relative", width: "min(400px, 100%)", aspectRatio: "9/16", overflow: "hidden", borderRadius: "2px" }}>
          <iframe
            src="https://www.youtube.com/embed/wGpvF6V9Nyk"
            title="Seaborn Club logo animation"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
          />
        </div>
      </div>

      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>The Logo</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            The logo is a hand-drawn bikini on a washing line, still dripping. It captures the pause between adventures -- the moment after you come out of the water, suit still wet, day just starting. Playful without being childish.
          </Body>
          <Body>
            The animated version brings it to life with ocean sound design rooted in Kingston. The wordmark pairs Cooper Std for "Seaborn" -- warm, nostalgic, beach-worn -- with Inter Medium for "Club" -- clean, modern, no nonsense. Personality and clarity in the same breath.
          </Body>
        </div>
      </section>

      {/* Logo + wordmark sheets */}
      <TwoCol left="/projects/seaborn-club/logo.png" leftAlt="Seaborn Club logo variations" right="/projects/seaborn-club/wordmark.png" rightAlt="Seaborn Club wordmark variations" aspect="4/3" />

      <Divider label="Colour System" />

      {/* Custom swatch row */}
      <SwatchRow />

      {/* Colour palette image */}
      <FullImage src="/projects/seaborn-club/colour_palette.png" alt="Seaborn Club colour palette" aspect="4/3" />

      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>Colour Logic</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            Four colours built specifically to pop on deeper skin tones and feel like the Caribbean actually looks -- not how tourist brands imagine it. High saturation used with intention, not decoration.
          </Body>
          <Body>
            Colours are paired in approved combinations only: Sunset Coral with Golden Mango, Golden Mango with Island Turquoise, Island Turquoise with Deep Cocoa, Deep Cocoa with Sunset Coral. Two per layout, one dominant, one accent. That constraint is what keeps the palette feeling coherent across every touchpoint.
          </Body>
        </div>
      </section>

      <Divider label="Illustrated Assets" />

      <FullImage src="/projects/seaborn-club/illustrated_assets.png" alt="Seaborn Club illustrated asset library" aspect="3/4" />

      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>Asset Library</Label>
        <Body>
          A hand-drawn illustration library covering everything from tropical fruit and beach gear to full scenes of island leisure. These run across every touchpoint -- packaging, tote bags, social posts, hang tags -- giving the brand infinite storytelling range without losing coherence. The secondary visual language that holds the whole system together.
        </Body>
      </section>

      <Divider label="Campaign" />

      {/* Social posts */}
      <TwoCol left="/projects/seaborn-club/poster_1.png" leftAlt="Seaborn Club poster" right="/projects/seaborn-club/poster_2.png" rightAlt="Seaborn Club poster" aspect="4/5" />
      <TwoCol left="/projects/seaborn-club/poster_3.png" leftAlt="Seaborn Club poster" right="/projects/seaborn-club/poster_4.png" rightAlt="Seaborn Club poster" aspect="4/5" />
      <TwoCol left="/projects/seaborn-club/poster_5.png" leftAlt="Seaborn Club poster" right="/projects/seaborn-club/poster_6.png" rightAlt="Seaborn Club poster" aspect="4/5" />

      {/* IG mockup */}
      <FullImage src="/projects/seaborn-club/ig_mockup.png" alt="Seaborn Club Instagram mockup" aspect="16/9" />
      <FullImage src="/projects/seaborn-club/social_post.png" alt="Seaborn Club social media post" aspect="4/5" />

      {/* Poster mockup */}
      <FullImage src="/projects/seaborn-club/poster_mockup.png" alt="Seaborn Club bus stop poster mockup" aspect="3/4" />

      <Divider label="Packaging & Merch" />

      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>Touchpoints</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            The hang tag functions as a membership credential. Golden Mango base, Sunset Coral type, limited edition colourway detail on the back. Curated artifact, not mass market product.
          </Body>
          <Body>
            The brand box carries the full illustration pattern wrapped with a Sunset Coral band. The tote carries the wordmark over the repeat illustration system. Every physical touchpoint reinforces the same world.
          </Body>
        </div>
      </section>

      <FullImage src="/projects/seaborn-club/packaging.png" alt="Seaborn Club brand box packaging" aspect="16/9" />
      <FullImage src="/projects/seaborn-club/tote_bag.png" alt="Seaborn Club tote bag" aspect="16/9" />
      <FullImage src="/projects/seaborn-club/deliverables.png" alt="Seaborn Club full deliverables overview" aspect="3/4" />

      {/* Behance */}
      <div style={{ padding: "2rem var(--px)", borderBottom: "0.5px solid var(--border)" }}>
        <HoverLink href="https://www.behance.net/gallery/241721619/Seaborn-Club-Brand-Identity" external>
          View full project on Behance ↗
        </HoverLink>
      </div>

      {/* Prev / Next */}
      <nav style={{ display: "grid", gridTemplateColumns: "var(--grid-2)", borderBottom: "0.5px solid var(--border)" }}>
        <HoverNavBlock href="/work/jamaica-world-cup" label="← Previous" title="Jamaica to the World Cup" align="left" />
        <HoverNavBlock href="/work/narthstar" label="Next →" title="Narthstar — Apparel & Art Direction" align="right" />
      </nav>

      <Footer />
    </div>
  );
}
