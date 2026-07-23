import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { HoverLink, HoverNavBlock } from "@/components/Interactive";

export const metadata = {
  title: "Design Recap 2025 | Otto Powell",
  description: "Two motion pieces documenting 2025 — a mixed media recap reel and a Spotify Wrapped-inspired design concept.",
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

function VideoEmbed({ videoId, title, isShort }: { videoId: string; title: string; isShort?: boolean }) {
  return (
    <div style={{ borderBottom: "0.5px solid var(--border)", background: "#000", display: "flex", justifyContent: "center", padding: "3rem var(--px)" }}>
      <div style={{
        position: "relative",
        width: isShort ? "min(400px, 100%)" : "100%",
        aspectRatio: isShort ? "9/16" : "16/9",
        overflow: "hidden",
        borderRadius: "2px",
      }}>
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </div>
  );
}

export default function DesignRecap2025Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <header style={{ padding: "3rem var(--px) 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-header)", gap: "2rem", alignItems: "flex-end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <HoverLink href="/">← Work</HoverLink>
            <span style={{ color: "var(--border)", fontSize: "11px" }}>/</span>
            <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>02</span>
          </div>
          <h1 style={{ ...syne, fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Design Recap{" "}
            <span style={{ fontStyle: "italic", color: "var(--blue-accent)" }}>2025</span>
          </h1>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", marginBottom: "0.5rem", flexWrap: "wrap" }}>
            {["Motion", "Branding", "Editorial"].map((tag) => (
              <span key={tag} style={{ ...mono, fontSize: "10px", color: "var(--blue-accent)", letterSpacing: "0.08em", textTransform: "uppercase", border: "0.5px solid var(--navy-bright)", padding: "4px 10px", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>2025</span>
        </div>
      </header>

      {/* Overview */}
      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>Overview</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            Two motion pieces. One year. Both are documents of 2025 but they approach it differently — one as a raw creative reel, one as a full design concept built around a recognizable cultural format.
          </Body>
          <Body>
            The through line between them is the same thing that runs through all the work: texture, rhythm, and a design sensibility that treats motion as a language not a decoration.
          </Body>
        </div>
      </section>

      <Divider label="Part 01 — Recap Reel" />

      {/* Video 1 */}
      <VideoEmbed videoId="gbSSvDvW0Gw" title="2025 Recap Reel" isShort />

      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>Recap Reel</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            The recap reel pulls selected work and key moments from 2025 and turns them into a single cohesive sequence. The approach was mixed media — layered imagery, collage elements, tactile surfaces — paired with digital motion to connect the physical and digital sides of the work.
          </Body>
          <Body>
            The animation is not decorative. Fluid transitions, kinetic typography, and rhythmic motion are doing the storytelling. The goal was not just to show finished pieces but to capture process, experimentation, and the momentum behind the work.
          </Body>
          <Body>
            Texture was a deliberate choice throughout. It adds depth and character that clean digital work alone does not have. That contrast between rough and precise is something that shows up across everything I make.
          </Body>
        </div>
      </section>

      <Divider label="Part 02 — 2025 Wrapped" />

      {/* Video 2 */}
      <VideoEmbed videoId="8HQZLm75y_s" title="2025 Wrapped Design Concept" isShort />

      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>2025 Wrapped</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            The Wrapped piece takes the Spotify Wrapped format — one of the most recognized year-in-review structures in digital culture — and reinterprets it as a design exercise. Not a data product. A visual reflection of my creative and cultural landscape in 2025 told through layout, typography, and motion.
          </Body>
          <Body>
            The design treats visual elements as modular components. Each frame feels distinct but stays part of the same system. Bold composition, strong typographic hierarchy, and intentional use of texture and colour give it personality without losing coherence.
          </Body>
          <Body>
            The motion gives it pacing. Smooth transitions and kinetic typography turn what could be a static recap into something that actually moves like the year felt. Taking a format everyone already knows and making it yours is its own kind of design problem. This is how I solved it.
          </Body>
        </div>
      </section>

      {/* Specs */}
      <section style={{ padding: "2rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-4)", gap: "2rem" }}>
        {[
          { label: "Tools", value: "After Effects, Photoshop" },
          { label: "Format", value: "Vertical Short" },
          { label: "Output", value: "Social / Digital" },
          { label: "Year", value: "2025" },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ ...mono, fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
            <p style={{ ...syne, fontSize: "13px", fontWeight: 500, color: "var(--white)", lineHeight: 1.5 }}>{value}</p>
          </div>
        ))}
      </section>

      {/* Behance */}
      <div style={{ padding: "2rem var(--px)", borderBottom: "0.5px solid var(--border)" }}>
        <HoverLink href="https://www.behance.net/gallery/241688411/Design-Recap-2025" external>
          View full project on Behance ↗
        </HoverLink>
      </div>

      {/* Prev / Next */}
      <nav style={{ display: "grid", gridTemplateColumns: "var(--grid-2)", borderBottom: "0.5px solid var(--border)" }}>
        <HoverNavBlock href="/work/soul-culture-magazine" label="← Previous" title="Soul Culture Magazine Vol. 1" align="left" />
        <HoverNavBlock href="/work/soul-culture-brand-guidelines" label="Next →" title="Soul Culture — Brand Guidelines" align="right" />
      </nav>

      <Footer />
    </div>
  );
}
