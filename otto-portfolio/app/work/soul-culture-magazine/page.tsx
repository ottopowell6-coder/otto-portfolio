import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { HoverLink, HoverNavBlock } from "@/components/Interactive";

export const metadata = {
  title: "Soul Culture Magazine Vol. 1 — Dancehall | Otto Powell",
  description: "A 24-page editorial magazine documenting the brand, the creative process, and the people behind the Vol. 3 drop.",
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

function Spread({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ position: "relative", width: "100%", aspectRatio: "4/3", overflow: "hidden", borderBottom: "0.5px solid var(--border)" }}>
      <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} unoptimized />
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

export default function SoulCultureMagazinePage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <header style={{ padding: "3rem 2.5rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "flex-end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <HoverLink href="/">← Work</HoverLink>
            <span style={{ color: "var(--border)", fontSize: "11px" }}>/</span>
            <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>01</span>
          </div>
          <h1 style={{ ...syne, fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            Soul Culture Magazine Vol. 1<br />
            <span style={{ fontStyle: "italic", color: "var(--blue-accent)" }}>Dancehall</span>
          </h1>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", marginBottom: "0.5rem", flexWrap: "wrap" }}>
            {["Editorial", "Art Direction", "Print Design"].map((tag) => (
              <span key={tag} style={{ ...mono, fontSize: "10px", color: "var(--blue-accent)", letterSpacing: "0.08em", textTransform: "uppercase", border: "0.5px solid var(--navy-bright)", padding: "4px 10px", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>2026</span>
        </div>
      </header>

      {/* Cover */}
      <Spread src="/projects/soul-culture-magazine/cover_page_mockup.png" alt="Soul Culture Magazine Vol. 1 cover" />

      {/* Overview */}
      <section style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <Label>Overview</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            Soul Culture is a clothing brand, a graphic design studio, and a creative community founded in Kingston, Jamaica. Most streetwear drops live and die on social media. A post, a repost, two weeks of attention, then nothing. Vol. 3 needed something that lasted longer than an algorithm.
          </Body>
          <Body>
            What started as a pamphlet became a 24-page editorial magazine documenting the brand, the creative process, and the people behind the drop. It is not a lookbook. It is not a catalogue. It is a cultural document built around a single argument: Dancehall is one of the most globally recognized musical exports Jamaica has ever produced and Jamaican streetwear has never treated it with the seriousness it deserves.
          </Body>
          <Body>This magazine is the beginning of changing that.</Body>
        </div>
      </section>

      {/* Specs */}
      <section style={{ padding: "2rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
        {[
          { label: "Format", value: "A5 Print + Digital PDF" },
          { label: "Pages", value: "24" },
          { label: "Software", value: "Adobe InDesign" },
          { label: "Distribution", value: "Ships with every Vol. 3 order" },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ ...mono, fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
            <p style={{ ...syne, fontSize: "13px", fontWeight: 500, color: "var(--white)", lineHeight: 1.5 }}>{value}</p>
          </div>
        ))}
      </section>

      {/* Pages 1-2: Foreword */}
      <Spread src="/projects/soul-culture-magazine/page1_and_2.png" alt="Foreword / Soul Culture Origin" />

      {/* Pages 3-4: TOC + Credits */}
      <Spread src="/projects/soul-culture-magazine/page_3_and_4.png" alt="Table of contents and credits" />

      <Divider label="The Brief" />

      <section style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <Label>The Brief</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            There was no client. No brief handed down from above. The brief was self-directed and it came from a real frustration. Jamaican brands have spent too long chasing an American aesthetic to seem international. The irony is that Jamaica has always been internationally relevant without trying. The culture exports itself. The world has always come to us.
          </Body>
          <Body>
            Soul Culture's position is simple. Stop designing like we are from somewhere else. Treat Jamaican identity with the same intentionality that international brands treat theirs. Every page in this magazine is built around that position.
          </Body>
        </div>
      </section>

      {/* Pages 5-6: Before Vol. 3 */}
      <Spread src="/projects/soul-culture-magazine/page_5_and_6.png" alt="Before Vol. 3 — where it came from" />

      {/* Pages 7-8: Section 01 opener */}
      <Spread src="/projects/soul-culture-magazine/page_7-8.png" alt="Section 01 — Soul Culture" />

      <Divider label="Structure" />

      <section style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <Label>Structure</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {[
            { num: "01", title: "Soul Culture", body: "The brand origin, what Soul Culture actually is as a studio and community, and why graphic design became the foundation of everything." },
            { num: "02", title: "Showcase", body: "A curated showcase featuring photographer Nassan Okean and designers Shane Ramos and Sammy — three creatives whose work sits at the same intersection of culture and craft that Soul Culture is built on." },
            { num: "03", title: "Behind the Drop", body: "Breaking down the design decisions made for each of the four Vol. 3 garments and showing the evolution from first concept to final design." },
          ].map(({ num, title, body }) => (
            <div key={num} style={{ display: "grid", gridTemplateColumns: "2.5rem 1fr", gap: "1.5rem", padding: "2rem 0", borderBottom: "0.5px solid var(--border)" }}>
              <span style={{ ...mono, fontSize: "11px", color: "var(--muted)", paddingTop: "3px" }}>{num}</span>
              <div>
                <p style={{ ...syne, fontSize: "14px", fontWeight: 700, marginBottom: "0.5rem", color: "var(--white)" }}>{title}</p>
                <Body>{body}</Body>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pages 9-10: What Soul Culture Is */}
      <Spread src="/projects/soul-culture-magazine/page_9-10.png" alt="What Soul Culture Is" />

      {/* Pages 11-12: Why Graphic Design section opener */}
      <Spread src="/projects/soul-culture-magazine/page_11-12.png" alt="Section 01.1 — Why Graphic Design" />

      <Divider label="Editorial Voice" />

      <section style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <Label>Editorial Voice</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            The writing in this magazine is first person and unfiltered. It does not read like brand copy. It reads like someone telling you the truth about how something got built, what went wrong, what clicked, and what it all actually means.
          </Body>
          <Body>
            That voice was a deliberate decision. Soul Culture is not a brand that invented itself a community to seem more authentic. The community came first. The magazine had to reflect that or it would have contradicted everything the brand stands for.
          </Body>
        </div>
      </section>

      {/* Pages 13-14: Why Graphic Design continued */}
      <Spread src="/projects/soul-culture-magazine/page_13-14.png" alt="Why Graphic Design — continued" />

      {/* Pages 15-16: Showcase opener */}
      <Spread src="/projects/soul-culture-magazine/page_15-16.png" alt="Section 02 — Showcase" />

      <Divider label="The Showcase" />

      <section style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <Label>The Showcase</Label>
        <div style={{ display: "flex", flexDirection: "column" }}>
          {[
            { name: "Nassan Okean", handle: "@nassanokean", role: "Photography", body: "Nassan shoots the way a designer thinks. Every shoot feels like a world that was built deliberately rather than a moment that was captured. That intersection of photography and design thinking is exactly what Soul Culture is built on." },
            { name: "Shane Ramos", handle: "@theshaneramoss", role: "Graphic Design", body: "Shane works in the same visual language Soul Culture works in. Dark, considered, culturally rooted. His work was the first thing that confirmed this design style has real range across the creative industry." },
            { name: "Sammy", handle: "@solosteppinsammy", role: "Graphic Design", body: "Discipline made visible. The output, the consistency, the industry placements. Proof that showing up every day without waiting for the perfect moment is its own form of talent." },
          ].map(({ name, handle, role, body }) => (
            <div key={name} style={{ padding: "2rem 0", borderBottom: "0.5px solid var(--border)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "0.75rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <p style={{ ...syne, fontSize: "14px", fontWeight: 700, color: "var(--white)" }}>{name}</p>
                <div style={{ display: "flex", gap: "1rem" }}>
                  <span style={{ ...mono, fontSize: "10px", color: "var(--muted)", textTransform: "uppercase", letterSpacing: "0.08em" }}>{role}</span>
                  <span style={{ ...mono, fontSize: "10px", color: "var(--blue-accent)" }}>{handle}</span>
                </div>
              </div>
              <Body>{body}</Body>
            </div>
          ))}
        </div>
      </section>

      {/* Pages 17-18: Behind the Drop / The Designs */}
      <Spread src="/projects/soul-culture-magazine/page_17-18.png" alt="Section 03 — Behind the Drop, The Designs" />

      {/* Pages 19-20: What's Next */}
      <Spread src="/projects/soul-culture-magazine/page_19-20.png" alt="What's Next" />

      {/* Back cover */}
      <Spread src="/projects/soul-culture-magazine/back_cover.png" alt="Soul Culture Magazine back cover" />

      {/* Credits */}
      <section style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <Label>Credits</Label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
          {[
            { label: "Creative Direction & Design", value: "Otto Powell / @playboisasuke" },
            { label: "Photography Featured", value: "Nassan Okean / @nassanokean" },
            { label: "Graphic Designers Featured", value: "Shane Ramos, Sammy" },
            { label: "Printed in", value: "Kingston, Jamaica" },
            { label: "Published by", value: "Soul Culture, 2026" },
            { label: "Format", value: "A5 Print + Digital PDF" },
          ].map(({ label, value }) => (
            <div key={label}>
              <p style={{ ...mono, fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
              <p style={{ ...syne, fontSize: "13px", fontWeight: 500, color: "var(--white)", lineHeight: 1.5 }}>{value}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Behance */}
      <div style={{ padding: "2rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}>
        <HoverLink href="https://www.behance.net/gallery/250652313/Soul-Culture-Magazine-Vol-1-Dancehall" external>
          View full project on Behance ↗
        </HoverLink>
      </div>

      {/* Next project nav */}
      <nav style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "0.5px solid var(--border)" }}>
        <div />
        <HoverNavBlock href="/work/design-recap-2025" label="Next →" title="Design Recap 2025" align="right" />
      </nav>

      <Footer />
    </div>
  );
}
