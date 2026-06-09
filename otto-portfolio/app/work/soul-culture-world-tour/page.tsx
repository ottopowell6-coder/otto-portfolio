import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { HoverLink, HoverNavBlock } from "@/components/Interactive";

export const metadata = {
  title: "Soul Culture World Tour Drop | Otto Powell",
  description: "The second Soul Culture collection. Jamaican parishes listed like world cities. The shirt is the souvenir.",
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
    <div style={{ padding: "1.25rem 2.5rem", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)", display: "flex", alignItems: "center", gap: "1rem" }}>
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

function FullImage({ src, alt, aspect = "3/2" }: { src: string; alt: string; aspect?: string }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: aspect, overflow: "hidden", borderBottom: "0.5px solid var(--border)" }}>
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} unoptimized />
    </div>
  );
}

function TwoCol({ left, right, leftAlt, rightAlt }: { left: string; right: string; leftAlt: string; rightAlt: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "0.5px solid var(--border)" }}>
      <div style={{ position: "relative", aspectRatio: "3/4", borderRight: "0.5px solid var(--border)" }}>
        <Image src={left} alt={leftAlt} fill style={{ objectFit: "cover" }} unoptimized />
      </div>
      <div style={{ position: "relative", aspectRatio: "3/4" }}>
        <Image src={right} alt={rightAlt} fill style={{ objectFit: "cover" }} unoptimized />
      </div>
    </div>
  );
}

function ThreeCol({ images }: { images: { src: string; alt: string }[] }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", borderBottom: "0.5px solid var(--border)" }}>
      {images.map(({ src, alt }, i) => (
        <div key={i} style={{ position: "relative", aspectRatio: "3/4", borderRight: i < 2 ? "0.5px solid var(--border)" : undefined }}>
          <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} unoptimized />
        </div>
      ))}
    </div>
  );
}

export default function WorldTourDropPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <header style={{ padding: "3rem 2.5rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "flex-end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <HoverLink href="/">← Work</HoverLink>
            <span style={{ color: "var(--border)", fontSize: "11px" }}>/</span>
            <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>04</span>
          </div>
          <h1 style={{ ...syne, fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Soul Culture{" "}
            <span style={{ fontStyle: "italic", color: "var(--blue-accent)" }}>World Tour Drop</span>
          </h1>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", marginBottom: "0.5rem", flexWrap: "wrap" }}>
            {["Art Direction", "Apparel", "Campaign"].map((tag) => (
              <span key={tag} style={{ ...mono, fontSize: "10px", color: "var(--blue-accent)", letterSpacing: "0.08em", textTransform: "uppercase", border: "0.5px solid var(--navy-bright)", padding: "4px 10px", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>2025</span>
        </div>
      </header>

      {/* Magazine cover as hero */}
      <FullImage src="/projects/world-tour-drop/magazine-cover.png" alt="Soul Culture Magazine Vol. 7 cover" aspect="3/4" />

      {/* Overview */}
      <section style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <Label>Overview</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            Soul Culture is my brand. I am the designer, the creative director, and the owner. The World Tour Drop is the second collection, built from scratch around a problem I could not stop thinking about.
          </Body>
          <Body>
            Every Jamaican themed t-shirt on the market looks the same. Flag colours, outdated typography, tourist graphics that have nothing to do with how Jamaican culture actually feels from the inside. This drop was built to fix that.
          </Body>
        </div>
      </section>

      {/* Specs */}
      <section style={{ padding: "2rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
        {[
          { label: "Collection", value: "Vol. 2 — World Tour" },
          { label: "Type", value: "Raydis / Estrella" },
          { label: "Colourway", value: "Black, Green, Gold" },
          { label: "Released", value: "March 2025" },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ ...mono, fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
            <p style={{ ...syne, fontSize: "13px", fontWeight: 500, color: "var(--white)", lineHeight: 1.5 }}>{value}</p>
          </div>
        ))}
      </section>

      {/* Tee graphic full */}
      <FullImage src="/projects/world-tour-drop/tee-graphic.png" alt="Soul Culture Tour tee graphic" aspect="1/1" />

      <Divider label="The Concept" />

      <section style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <Label>The Concept</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            World tours are what artists do when they blow up internationally. But most people never leave. They tour their own parishes, their own corners, their own lives. The back of the shirt lists all fourteen Jamaican parishes the same way a concert tour tee lists world cities.
          </Body>
          <Body>
            That tension is the whole point. You do not have to leave to have made a journey worth documenting. Soul Culture stands on the idea that every person carries their own rhythm, heritage and journey. The shirt is the souvenir.
          </Body>
        </div>
      </section>

      {/* Tee mockup clean */}
      <FullImage src="/projects/world-tour-drop/tee-mockup-clean.png" alt="Soul Culture Tour tee clean mockup" aspect="1/1" />

      <Divider label="The Design" />

      <section style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <Label>The Design</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            Black base. Raydis as the primary type system, Estrella for supporting details. The grunge texture treatment was intentional -- it had to feel worn and lived in, not freshly printed. The face graphic behind the parish list was pulled from a moodboard built around raw Jamaican street imagery: gold teeth, heavy contrast, texture that carries weight.
          </Body>
          <Body>
            Front carries the world tour emblem. Back carries the parishes. Both sides designed to work together without being too matched. The colour palette pulls directly from the Jamaican flag -- black for strength, green for growth and vintage contrast, gold for warmth and a premium tour feel.
          </Body>
          <Body>
            The type direction was inspired by vintage world tour concert posters, city stamps and travel routes, blended with urban streetwear energy. The goal was something that felt culturally specific without being decorative about it.
          </Body>
        </div>
      </section>

      {/* Editorial spread */}
      <FullImage src="/projects/world-tour-drop/editorial-spread.png" alt="Behind the Collection editorial spread" aspect="16/9" />

      <Divider label="The Campaign" />

      <section style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <Label>The Campaign</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            Everything after the shirt was also mine. Promotional posters, social media rollout graphics, teaser content and the full campaign visual system were all designed and directed in-house. The drop was presented through Soul Culture Magazine Volume 7 -- a full fashion editorial titled Behind The Collection.
          </Body>
          <Body>
            Presenting a t-shirt drop as a fashion magazine was a deliberate choice. It puts the work in conversation with brands operating at a completely different level. That was the point.
          </Body>
        </div>
      </section>

      {/* Campaign graphics */}
      <TwoCol
        left="/projects/world-tour-drop/crt-launch.jpg"
        leftAlt="CRT launch graphic"
        right="/projects/world-tour-drop/film-strip-poster.jpg"
        rightAlt="Film strip campaign poster"
      />

      <TwoCol
        left="/projects/world-tour-drop/follow-your-soul.jpg"
        leftAlt="Follow Your Soul poster"
        right="/projects/world-tour-drop/sales-poster.png"
        rightAlt="Soul Culture sales campaign poster"
      />

      <FullImage src="/projects/world-tour-drop/campaign-poster.jpg" alt="Soul Culture World Tour campaign poster" aspect="1/1" />

      <Divider label="The Photoshoot" />

      <section style={{ padding: "2rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <Label>Credits</Label>
        <div style={{ display: "flex", gap: "3rem" }}>
          {[
            { label: "Photography", value: "Kevron Dunkley" },
            { label: "Talent", value: "Crystal Campbell" },
            { label: "Creative Direction", value: "Otto Powell" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ ...mono, fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
              <p style={{ ...syne, fontSize: "13px", fontWeight: 500, color: "var(--white)" }}>{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Photoshoot grid */}
      <TwoCol left="/projects/world-tour-drop/shoot-18.jpg" leftAlt="Campaign shoot" right="/projects/world-tour-drop/shoot-19.jpg" rightAlt="Campaign shoot" />
      <TwoCol left="/projects/world-tour-drop/shoot-13.jpg" leftAlt="Campaign shoot" right="/projects/world-tour-drop/shoot-14.jpg" rightAlt="Campaign shoot" />
      <FullImage src="/projects/world-tour-drop/shoot-06.jpg" alt="Campaign shoot" aspect="3/4" />
      <ThreeCol images={[
        { src: "/projects/world-tour-drop/shoot-07.jpg", alt: "Campaign shoot" },
        { src: "/projects/world-tour-drop/shoot-08.jpg", alt: "Campaign shoot" },
        { src: "/projects/world-tour-drop/shoot-17.jpg", alt: "Campaign shoot" },
      ]} />
      <TwoCol left="/projects/world-tour-drop/shoot-04.jpg" leftAlt="Campaign shoot" right="/projects/world-tour-drop/shoot-05.jpg" rightAlt="Campaign shoot" />
      <FullImage src="/projects/world-tour-drop/shoot-20.jpg" alt="Campaign shoot" aspect="3/4" />
      <ThreeCol images={[
        { src: "/projects/world-tour-drop/shoot-09.jpg", alt: "Campaign shoot" },
        { src: "/projects/world-tour-drop/shoot-10.jpg", alt: "Campaign shoot" },
        { src: "/projects/world-tour-drop/shoot-03.jpg", alt: "Campaign shoot" },
      ]} />
      <TwoCol left="/projects/world-tour-drop/shoot-15.jpg" leftAlt="Campaign shoot" right="/projects/world-tour-drop/shoot-16.jpg" rightAlt="Campaign shoot" />
      <FullImage src="/projects/world-tour-drop/tee-on-asphalt.jpg" alt="Tee on asphalt" aspect="1/1" />
      <TwoCol left="/projects/world-tour-drop/shoot-01.jpg" leftAlt="Campaign shoot" right="/projects/world-tour-drop/shoot-02.jpg" rightAlt="Campaign shoot" />

      {/* Behance */}
      <div style={{ padding: "2rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}>
        <HoverLink href="https://www.behance.net/gallery/220965679/Soul-Culture-World-Tour-Drop-Art-Direction" external>
          View full project on Behance ↗
        </HoverLink>
      </div>

      {/* Prev / Next */}
      <nav style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "0.5px solid var(--border)" }}>
        <HoverNavBlock href="/work/soul-culture-brand-guidelines" label="← Previous" title="Soul Culture — Brand Guidelines" align="left" />
        <HoverNavBlock href="/work/jamaica-world-cup" label="Next →" title="Jamaica to the World Cup" align="right" />
      </nav>

      <Footer />
    </div>
  );
}
