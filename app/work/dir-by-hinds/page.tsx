import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { HoverLink, HoverNavBlock } from "@/components/Interactive";

export const metadata = {
  title: "Dir. By Hind$ — Brand Identity & Apparel | Otto Powell",
  description: "Logo design and apparel graphics for Jamaican creative director Hind$. SD card mark, three colourways, full tee system.",
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

function FullImage({ src, alt, aspect = "1/1" }: { src: string; alt: string; aspect?: string }) {
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

function ThreeCol({ images, aspect = "1/1" }: { images: { src: string; alt: string }[]; aspect?: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "var(--grid-3)", borderBottom: "0.5px solid var(--border)" }}>
      {images.map(({ src, alt }, i) => (
        <div key={i} style={{ position: "relative", aspectRatio: aspect, borderRight: i < 2 ? "0.5px solid var(--border)" : undefined }}>
          <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} unoptimized />
        </div>
      ))}
    </div>
  );
}

export default function DirByHindsPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <header style={{ padding: "3rem var(--px) 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-header)", gap: "2rem", alignItems: "flex-end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <HoverLink href="/">← Work</HoverLink>
            <span style={{ color: "var(--border)", fontSize: "11px" }}>/</span>
            <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>09</span>
          </div>
          <h1 style={{ ...syne, fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Dir. By Hind${" "}
            <span style={{ fontStyle: "italic", color: "var(--blue-accent)" }}>Brand Identity & Apparel</span>
          </h1>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", marginBottom: "0.5rem", flexWrap: "wrap" }}>
            {["Brand Identity", "Apparel", "Logo Design"].map((tag) => (
              <span key={tag} style={{ ...mono, fontSize: "10px", color: "var(--blue-accent)", letterSpacing: "0.08em", textTransform: "uppercase", border: "0.5px solid var(--navy-bright)", padding: "4px 10px", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>2024</span>
        </div>
      </header>

      {/* Hero -- red logo on black */}
      <FullImage src="/projects/dir-by-hinds/logo_red.png" alt="Dir. By Hind$ logo red on black" aspect="1/1" />

      {/* Overview */}
      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>Overview</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            Hind$ is a Jamaican creative director building a name in music video direction, campaign production and visual storytelling. Photoshoots, visualizers, music videos, creative direction. The work is cinematic and grounded, shot in the streets of Jamaica with intention behind every frame.
          </Body>
          <Body>
            He needed a logo that could hold its own anywhere his name appears. The mark had to work on a screen credit, a watermark, a social page and a thumbnail without losing anything. Strong enough to hold up at scale, detailed enough to carry weight up close.
          </Body>
        </div>
      </section>

      {/* Specs */}
      <section style={{ padding: "2rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-4)", gap: "2rem" }}>
        {[
          { label: "Client", value: "Hind$ / Creative Director" },
          { label: "Deliverables", value: "Logo, Colourways, Apparel" },
          { label: "Colourways", value: "Red/Black, Black/White, Red/White" },
          { label: "Year", value: "2024" },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ ...mono, fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
            <p style={{ ...syne, fontSize: "13px", fontWeight: 500, color: "var(--white)", lineHeight: 1.5 }}>{value}</p>
          </div>
        ))}
      </section>

      <Divider label="The Icon" />

      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>The SD Card Mark</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            The SD card was the right call. Memory cards are where footage lives before it becomes something real. The whole idea of direction is about capturing a vision and making it exist. The icon earns its meaning without explaining itself.
          </Body>
          <Body>
            The wordmark sits inside the card label area, stacked in bold condensed type, weighted to read hard at any size. No extras. The concept does the work.
          </Body>
        </div>
      </section>

      {/* Three logo colourways */}
      <ThreeCol
        aspect="1/1"
        images={[
          { src: "/projects/dir-by-hinds/logo_black.png", alt: "Dir. By Hind$ logo black" },
          { src: "/projects/dir-by-hinds/logo_red.png", alt: "Dir. By Hind$ logo red on black" },
          { src: "/projects/dir-by-hinds/logo_white.png", alt: "Dir. By Hind$ logo white" },
        ]}
      />

      <Divider label="Colourways" />

      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>The System</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            Three colourways cover every context. Red on black for the primary mark. Black on white for clean rollouts. Red on white when the background calls for it. The system was built to travel without needing to be adjusted every time.
          </Body>
        </div>
      </section>

      {/* Artboards */}
      <FullImage src="/projects/dir-by-hinds/artboard_1.png" alt="Dir. By Hind$ identity artboard" aspect="16/9" />
      <FullImage src="/projects/dir-by-hinds/artboard_2.png" alt="Dir. By Hind$ identity artboard" aspect="16/9" />
      <FullImage src="/projects/dir-by-hinds/artboard_3.png" alt="Dir. By Hind$ identity artboard" aspect="16/9" />

      <Divider label="The Apparel" />

      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>Tee System</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            The t-shirt graphic extends the brand off the screen and onto something physical. The front carries the SD card logo small on the chest -- restrained and precise. The back is where it opens up.
          </Body>
          <Body>
            "Vision Directed" runs large across the back in a mixed type treatment: a flowing script leading into a heavy editorial serif, staggered to read diagonally across the shirt. The tagline "Merging creativity with precision. By Hind$" sits tight to the type. "Est. 25' -- Confident, but never arrogant." reads underneath as a quiet personal statement from the brand.
          </Body>
          <Body>
            A row of film industry marks anchors the bottom: Kodak Film, MPAA Rating, Dolby Digital, Panavision, SDDS, Creative Commons. Every mark on that shirt belongs to the world Hind$ is stepping into.
          </Body>
        </div>
      </section>

      {/* Tee fronts */}
      <ThreeCol
        aspect="1/1"
        images={[
          { src: "/projects/dir-by-hinds/tee_front_red.png", alt: "Dir. By Hind$ tee front red print" },
          { src: "/projects/dir-by-hinds/tee_front_grey.png", alt: "Dir. By Hind$ tee front grey print" },
          { src: "/projects/dir-by-hinds/tee_front_white.png", alt: "Dir. By Hind$ tee front white" },
        ]}
      />

      {/* Tee backs */}
      <ThreeCol
        aspect="1/1"
        images={[
          { src: "/projects/dir-by-hinds/tee_back_red.png", alt: "Dir. By Hind$ tee back red print" },
          { src: "/projects/dir-by-hinds/tee_back_grey.png", alt: "Dir. By Hind$ tee back grey print" },
          { src: "/projects/dir-by-hinds/tee_back_white.png", alt: "Dir. By Hind$ tee back white" },
        ]}
      />

      {/* IRL shot */}
      <FullImage src="/projects/dir-by-hinds/irl_tee.jpg" alt="Dir. By Hind$ tee IRL" aspect="3/4" />

      {/* Closing */}
      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>Note</Label>
        <Body>
          Hind$ is at the beginning of something. The logo just had to be ready before the work was.
        </Body>
      </section>

      {/* Behance */}
      <div style={{ padding: "2rem var(--px)", borderBottom: "0.5px solid var(--border)" }}>
        <HoverLink href="https://www.behance.net/gallery/242888939/Dir-By-HindS-Brand-Identity-Apparel-Design" external>
          View full project on Behance ↗
        </HoverLink>
      </div>

      {/* Prev / Next */}
      <nav style={{ display: "grid", gridTemplateColumns: "var(--grid-2)", borderBottom: "0.5px solid var(--border)" }}>
        <HoverNavBlock href="/work/aura-by-tash" label="← Previous" title="Aura by Tash — Brand Identity" align="left" />
        <div />
      </nav>

      <Footer />
    </div>
  );
}
