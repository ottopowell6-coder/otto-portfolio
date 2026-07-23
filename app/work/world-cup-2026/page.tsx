import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { HoverLink, HoverNavBlock } from "@/components/Interactive";

export const metadata = {
  title: "90 Mins Ago — World Cup 2026 | Otto Powell",
  description:
    "Thirty plus custom graphics made for 90 Mins Ago across the 2026 World Cup — art direction built on album cover references, physical object formats, cultural narratives, and player identity.",
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

function Body({ children, muted = false }: { children: React.ReactNode; muted?: boolean }) {
  return (
    <p style={{ ...syne, fontSize: "15px", lineHeight: 1.9, color: muted ? "rgba(240,238,232,0.6)" : "rgba(240,238,232,0.75)", maxWidth: "640px" }}>
      {children}
    </p>
  );
}

type Piece = { src: string; tag: string; title: string; caption: string; aspect?: string };

function PieceCard({ src, tag, title, caption, aspect = "4/5" }: Piece) {
  return (
    <div style={{ borderRight: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
      <div style={{ position: "relative", width: "100%", aspectRatio: aspect }}>
        <Image src={src} alt={title} fill style={{ objectFit: "cover" }} unoptimized />
      </div>
      <div style={{ padding: "1.1rem 1.25rem 1.5rem" }}>
        <span style={{ ...mono, fontSize: "9px", color: "var(--blue-accent)", letterSpacing: "0.1em", textTransform: "uppercase", display: "block", marginBottom: "0.4rem" }}>
          {tag}
        </span>
        <h3 style={{ ...syne, fontSize: "15px", fontWeight: 700, marginBottom: "0.5rem" }}>{title}</h3>
        <p style={{ ...syne, fontSize: "13px", lineHeight: 1.7, color: "rgba(240,238,232,0.65)" }}>{caption}</p>
      </div>
    </div>
  );
}

function PieceGrid({ pieces, cols = "var(--grid-3)" }: { pieces: Piece[]; cols?: string }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: cols, borderTop: "0.5px solid var(--border)" }}>
      {pieces.map((p) => (
        <PieceCard key={p.title} {...p} />
      ))}
    </div>
  );
}

const references: Piece[] = [
  {
    src: "/projects/world-cup-2026/references/jude-bellingham.jpg",
    tag: "Ref — Oasis",
    title: "(What's the Story?) Jude Bellingham",
    caption:
      "A direct recreation of Oasis's \"(What's the Story) Morning Glory?\" cover — the same empty London backstreet, the same two figures walking away from camera, down to the grain and flattened terrace-house perspective.",
  },
  {
    src: "/projects/world-cup-2026/references/england-vs-norway.jpg",
    tag: "Ref — Skepta",
    title: "England vs Norway",
    caption:
      "Built in the duotone orange-and-blue halftone of Skepta's \"Ignorance Is Bliss,\" using a tight 3x3 grid of match details instead of one hero image to match the fragmented, mosaic feel of the original cover.",
  },
  {
    src: "/projects/world-cup-2026/references/england-vs-mexico.jpg",
    tag: "Ref — Dave",
    title: "England vs Mexico, Harry Kane",
    caption:
      "Kane's face is replaced with a glowing blue haze, lifted from the obscured-figure motif running through Dave's \"Psychodrama\" artwork, where identity dissolves into symbol rather than portrait.",
  },
  {
    src: "/projects/world-cup-2026/references/harry-kane.jpg",
    tag: "Ref — Dave",
    title: "Harry Kane",
    caption: "A second treatment from the same \"Psychodrama\" reference, isolating Kane in the same obscured-glow language against total black.",
  },
  {
    src: "/projects/world-cup-2026/references/england-vs-croatia.jpg",
    tag: "Ref — Skepta",
    title: "England vs Croatia",
    caption:
      "Rendered as a weathered first-class postage stamp, aged paper texture and all, echoing the collage-and-stamp visual language across Skepta's \"Konnichiwa.\"",
  },
];

const formats: Piece[] = [
  {
    src: "/projects/world-cup-2026/formats/olise-x-mbappe.jpg",
    tag: "Format — Trading card",
    title: "Olise x Mbappé",
    caption:
      "Built as a full Yu-Gi-Oh trading card, complete with a star-rarity rating, a card number, and its own written special ability — \"Link Summon / Effect: 2 Man Step.\" The card sits inside a torn foil pack, treating the partnership as something you'd pull and immediately want to keep.",
  },
  {
    src: "/projects/world-cup-2026/formats/swiss-vs-qatar.jpg",
    tag: "Format — Postage stamp",
    title: "Switzerland vs Qatar",
    caption: "A vintage postage stamp in deep crimson and cream, kickoff time worked into the design like an old-world postmark: \"ten in the morning.\"",
  },
  {
    src: "/projects/world-cup-2026/formats/netherlands-vs-sweden.jpg",
    tag: "Format — Backstage pass",
    title: "Netherlands vs Sweden",
    caption: "A laminated backstage pass on an orange lanyard, marking the only team that hadn't lost in ninety minutes across the whole tournament.",
  },
  {
    src: "/projects/world-cup-2026/formats/group-stage-cassettes.jpg",
    tag: "Format — Cassette spine",
    title: "Group Stage Fixtures",
    caption: "Mexico vs South Africa, USA vs Paraguay, Czechia vs South Korea, Bosnia vs Canada — rendered as a stack of cassette spines, flags doing the work labels usually do.",
  },
  {
    src: "/projects/world-cup-2026/formats/england-vs-argentina-cassette.jpg",
    tag: "Format — Cassette",
    title: "England vs Argentina",
    caption: "A cassette labeled \"the original soundtrack for your World Cup finals, 2026.\"",
  },
  {
    src: "/projects/world-cup-2026/formats/joga-bonito.jpg",
    tag: "Format — Blood bag",
    title: "Joga Bonito, Brazil",
    caption: "A blood donation bag rendered in gold-toned liquid, labeled \"Brasil B+, Joga Bonito\" — treated as something written into the biology of the shirt.",
  },
  {
    src: "/projects/world-cup-2026/formats/france-vs-paraguay-belt.jpg",
    tag: "Format — Title belt",
    title: "France vs Paraguay",
    caption: "A WWE World Heavyweight Championship belt, both crests set into the side plates, the matchup scrawled across the center plate like a challenger's tag.",
  },
  {
    src: "/projects/world-cup-2026/formats/germany-vs-curacao.jpg",
    tag: "No reference",
    title: "Germany vs Curaçao",
    caption: "No concept, no borrowed language — just execution. Some pieces in this series exist to prove the floor is high even without a story to lean on.",
  },
];

const narratives: Piece[] = [
  {
    src: "/projects/world-cup-2026/narratives/mexico-vs-south-korea.jpg",
    tag: "Narrative",
    title: "Mexico vs South Korea",
    caption:
      "A dragon and a tiger locked jaw to jaw inside a single ink-circle illustration, quetzalcoatl against baekho, rendered in a faded terracotta woodblock style that reads like it was pulled from an old scroll.",
  },
  {
    src: "/projects/world-cup-2026/narratives/norway-vs-brazil.jpg",
    tag: "Narrative",
    title: "Norway vs Brazil",
    caption: "Christ the Redeemer on its mountaintop, with a horned Viking helmet and Norway's flag set on the rocks in front of the statue — one nation's landmark standing over the other's claim staked at its base.",
  },
  {
    src: "/projects/world-cup-2026/narratives/brazil-vs-morocco.jpg",
    tag: "Narrative — Blanco",
    title: "Brazil vs Morocco",
    caption: "Titled \"Brilliant Mind II\" after Blanco's song and cover art of the same name, whose lyric \"caught a Brazilian vibe\" is the reason the title fits. A clinical brain scan split down the middle, each hemisphere colored in a flag.",
  },
  {
    src: "/projects/world-cup-2026/narratives/japan-vs-netherlands.jpg",
    tag: "Narrative — Blue Lock",
    title: "Japan vs Netherlands",
    caption: "Built from Blue Lock manga cover language — heavy chains across the frame, halftone dot shading, oversized broken type spelling out the matchup.",
  },
  {
    src: "/projects/world-cup-2026/narratives/france-vs-morocco.jpg",
    tag: "Narrative",
    title: "France vs Morocco",
    caption: "Started from one line stuck in my head: \"hang it in the Louvre.\" Built an ornate, gilded frame around the celebration photo to earn it.",
  },
  {
    src: "/projects/world-cup-2026/narratives/spain-vs-france.jpg",
    tag: "Narrative — Fixture tension",
    title: "Spain vs France",
    caption: "A single anatomical heart pierced by a dagger wrapped in Spain's flag. France arrived as favorites. Spain ended the run the way that image suggests.",
  },
  {
    src: "/projects/world-cup-2026/narratives/england-vs-norway-2.jpg",
    tag: "Narrative",
    title: "England vs Norway",
    caption: "Two warrior helmets in near-total darkness, only rim light catching the metal — Anglo-Saxons and Norsemen facing off centuries after the history books say they last did.",
  },
  {
    src: "/projects/world-cup-2026/narratives/france-vs-senegal.jpg",
    tag: "Narrative",
    title: "France vs Senegal",
    caption: "A hand caught mid-toss, dice frozen in the air beneath it. Two of the strongest sides from their confederations, rendered as literal chance.",
  },
  {
    src: "/projects/world-cup-2026/narratives/portugal-vs-spain.jpg",
    tag: "Narrative",
    title: "Portugal vs Spain",
    caption: "Ronaldo, back to camera, walking off. \"The dream ends here.\"",
  },
];

const people: Piece[] = [
  {
    src: "/projects/world-cup-2026/people/michael-olise.jpg",
    tag: "Personality",
    title: "Michael Olise, France",
    caption: "Olise reads as quiet and nonchalant on the pitch, but he's a serious Playboi Carti fan underneath that — sharp pink lightning-shard graphics and a bold serif wordmark carry that energy instead of a generic hero shot.",
  },
  {
    src: "/projects/world-cup-2026/people/mbappe-star.jpg",
    tag: "Legacy",
    title: "Kylian Mbappé",
    caption: "France Superstar, All Time Great — framed inside a layered star motif, treating him as an institution of the tournament rather than a single standout performance.",
  },
  {
    src: "/projects/world-cup-2026/people/mbappe-series.jpg",
    tag: "Legacy series",
    title: "Teenage Kicks → Super-Star",
    caption: "A three-part chapter piece tracing Mbappé's international career: 2018's breakout, 2022's captaincy and weight of expectation, 2026's undisputed superstardom — treated as one unfolding story.",
  },
  {
    src: "/projects/world-cup-2026/people/vozinha.jpg",
    tag: "Performance",
    title: "Vozinha, Cape Verde",
    caption: "Built in Cape Verde's national colors, a ring of stars circling the ball to mirror the flag's own emblem, made after a genuinely standout individual display.",
  },
  {
    src: "/projects/world-cup-2026/people/cape-verde.jpg",
    tag: "Historic run",
    title: "Cape Verde",
    caption: "A single golden goalkeeping glove rendered like a trophy object against total black, marking their first ever World Cup and a statement result against Argentina.",
  },
  {
    src: "/projects/world-cup-2026/people/spain-champions.jpg",
    tag: "Champions",
    title: "Spain, World Cup 2026 Champions",
    caption: "Players and trophy set inside a circular championship seal, sun-ray type radiating out from the center — the graphic built like an official crest rather than a social post.",
  },
  {
    src: "/projects/world-cup-2026/people/spain-vs-belgium.jpg",
    tag: "Round of 26",
    title: "Spain vs Belgium",
    caption: "Match imagery set inside the tournament's own \"26\" numeral, treating the fixture as inseparable from the World Cup identity around it.",
  },
  {
    src: "/projects/world-cup-2026/people/argentina-vs-algeria.jpg",
    tag: "Personality",
    title: "Argentina vs Algeria",
    caption: "Messi, rendered almost like a pencil sketch, three stars held above him doing the talking about what he's carrying into this tournament.",
  },
];

const lastDance: Piece[] = [
  { src: "/projects/world-cup-2026/lastdance/neymar.jpg", tag: "Brazil", title: "Neymar", caption: "" },
  { src: "/projects/world-cup-2026/lastdance/james-rodriguez.jpg", tag: "Colombia", title: "James Rodríguez", caption: "" },
  { src: "/projects/world-cup-2026/lastdance/modric.jpg", tag: "Croatia", title: "Modrić", caption: "" },
  { src: "/projects/world-cup-2026/lastdance/bench.jpg", tag: "Teammates", title: "The Bench", caption: "" },
  { src: "/projects/world-cup-2026/lastdance/serbia.jpg", tag: "Serbia", title: "Captain", caption: "" },
];

const polaroidCount = 291;
const polaroids = Array.from({ length: polaroidCount }, (_, i) => `/projects/world-cup-2026/polaroids/pola-${String(i + 1).padStart(3, "0")}.jpg`);

export default function WorldCup2026Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />

      {/* Header */}
      <header style={{ padding: "3rem var(--px) 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-header)", gap: "2rem", alignItems: "flex-end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <HoverLink href="/">← Work</HoverLink>
            <span style={{ color: "var(--border)", fontSize: "11px" }}>/</span>
            <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>10</span>
          </div>
          <h1 style={{ ...syne, fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            90 Mins Ago{" "}
            <span style={{ fontStyle: "italic", color: "var(--blue-accent)" }}>World Cup 2026</span>
          </h1>
          <p style={{ ...mono, fontSize: "11px", color: "var(--muted)", marginTop: "0.75rem", letterSpacing: "0.04em" }}>
            Thirty plus graphics, made after the whistle, not before it
          </p>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", marginBottom: "0.5rem", flexWrap: "wrap" }}>
            {["Art Direction", "Graphic Design", "Sports"].map((tag) => (
              <span key={tag} style={{ ...mono, fontSize: "10px", color: "var(--blue-accent)", letterSpacing: "0.08em", textTransform: "uppercase", border: "0.5px solid var(--navy-bright)", padding: "4px 10px", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{ ...mono, fontSize: "11px", color: "var(--muted)" }}>2026</span>
        </div>
      </header>

      {/* Hero image */}
      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", borderBottom: "0.5px solid var(--border)" }}>
        <Image src="/projects/world-cup-2026/references/jude-bellingham.jpg" alt="(What's the Story?) Jude Bellingham" fill style={{ objectFit: "cover" }} unoptimized />
      </div>

      {/* About */}
      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>About</Label>
        <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <Body>
            When my friend, who runs 90 Mins Ago, brought me in for the World Cup, the brief came with an unusual advantage: no deadline pressure. Match timing meant most of these graphics went up after the final whistle instead of racing to beat it.
          </Body>
          <Body>
            That constraint became the entire philosophy behind the project. Every piece here had time to be considered, referenced, and built properly, rather than assembled fast enough to catch a trending moment. Thirty plus graphics came out of that approach, across six distinct creative systems, spanning the full tournament from group stage to final.
          </Body>
        </div>
      </section>

      {/* Specs */}
      <section style={{ padding: "2rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-4)", gap: "2rem" }}>
        {[
          { label: "Client", value: "90 Mins Ago" },
          { label: "Role", value: "Design & Art Direction" },
          { label: "Output", value: "30+ Graphics, 200+ Polaroids" },
          { label: "Year", value: "2026" },
        ].map(({ label, value }) => (
          <div key={label}>
            <p style={{ ...mono, fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
            <p style={{ ...syne, fontSize: "13px", fontWeight: 500, color: "var(--white)", lineHeight: 1.5 }}>{value}</p>
          </div>
        ))}
      </section>

      {/* 01 References */}
      <Divider label="01 — The References" />
      <section style={{ padding: "2.5rem var(--px) 0", borderBottom: "none" }}>
        <Body muted>
          Every England graphic pulls its color, composition, and typography from a specific album cover — treating the match like it belonged on a record sleeve.
        </Body>
      </section>
      <div style={{ padding: "2rem 0 0" }}>
        <PieceGrid pieces={references} />
      </div>

      {/* 02 Formats */}
      <Divider label="02 — The Formats" />
      <section style={{ padding: "2.5rem var(--px) 0" }}>
        <Body muted>
          A poster gets scrolled past. An object gets picked up. These pieces stopped functioning as posters and became things people already recognize.
        </Body>
      </section>
      <div style={{ padding: "2rem 0 0" }}>
        <PieceGrid pieces={formats} />
      </div>

      {/* 03 Narratives */}
      <Divider label="03 — The Narratives" />
      <section style={{ padding: "2.5rem var(--px) 0" }}>
        <Body muted>
          Some fixtures carried a story too big for a straight photo to hold, whether pulled from folklore and pop culture, or built entirely from the tension of the matchup itself.
        </Body>
      </section>
      <div style={{ padding: "2rem 0 0" }}>
        <PieceGrid pieces={narratives} />
      </div>

      {/* 04 People */}
      <Divider label="04 — The People" />
      <section style={{ padding: "2.5rem var(--px) 0" }}>
        <Body muted>
          The strongest pieces in this project aren't about what happened on the pitch — they're about who the player is when the cameras aren't rolling.
        </Body>
      </section>
      <div style={{ padding: "2rem 0 0" }}>
        <PieceGrid pieces={people} />
      </div>

      {/* 05 The Last Dance — own full dark section */}
      <section style={{ background: "#000", padding: "4.5rem var(--px)", borderTop: "0.5px solid var(--border)", borderBottom: "0.5px solid var(--border)" }}>
        <div style={{ maxWidth: "760px", marginBottom: "3rem" }}>
          <span style={{ ...mono, fontSize: "10px", color: "var(--blue-accent)", letterSpacing: "0.12em", textTransform: "uppercase" }}>05 — The Last Dance</span>
          <h2 style={{ ...syne, fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 700, margin: "1rem 0 1.5rem", lineHeight: 1.15 }}>
            This is the series I needed to get right.
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <Body>
              Neymar. James Rodríguez. Modrić. Players we grew up watching, and for most of them, this is genuinely their last World Cup. After this they don't disappear overnight, they just fade, slowly, out of the present and into memory. That idea needed to be felt rather than explained.
            </Body>
            <Body>
              So instead of a sharp, defined portrait, I used Photoshop's Blend If tool to dissolve each player into a cream background. Pulled the blacks out, softened the whites, let the edges disappear into the page. Heavy grain on top. The gap between the raw press photo and the finished piece is the whole point of the series. One is documentation. The other is emotion.
            </Body>
          </div>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "var(--grid-3)", gap: "1px", background: "rgba(255,255,255,0.08)" }}>
          {lastDance.map((p) => (
            <div key={p.title} style={{ background: "#000" }}>
              <div style={{ position: "relative", width: "100%", aspectRatio: "4/5", filter: "grayscale(0.1)" }}>
                <Image src={p.src} alt={p.title} fill style={{ objectFit: "cover" }} unoptimized />
              </div>
              <p style={{ ...mono, fontSize: "10px", color: "rgba(240,238,232,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", padding: "0.75rem 1rem" }}>
                {p.title} — {p.tag}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 06 Polaroids */}
      <Divider label="06 — The Polaroids" />
      <section style={{ padding: "2.5rem var(--px) 2rem" }}>
        <Body muted>
          Running underneath nearly every hero graphic in this project is a polaroid — the real, unedited moment from the match itself. Over two hundred of them exist across the full campaign. They're the connective tissue of the whole page, proof sitting directly beside interpretation.
        </Body>
      </section>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(var(--pola-cols, 6), 1fr)",
          gap: "2px",
          background: "var(--border)",
          borderTop: "0.5px solid var(--border)",
          borderBottom: "0.5px solid var(--border)",
        }}
        className="polaroid-wall"
      >
        {polaroids.map((src, i) => (
          <div key={src} style={{ position: "relative", width: "100%", aspectRatio: "1/1", background: "#050505" }}>
            <Image
              src={src}
              alt={`90 Mins Ago World Cup 2026 match documentation ${i + 1}`}
              fill
              style={{ objectFit: "cover" }}
              unoptimized
              loading={i < 12 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Closing note */}
      <section style={{ padding: "3rem var(--px)", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem" }}>
        <Label>Note</Label>
        <Body>
          No brief asked for any of this. It came from being given room to think, and choosing to use it.
        </Body>
      </section>

      {/* Prev / Next */}
      <nav style={{ display: "grid", gridTemplateColumns: "var(--grid-2)", borderBottom: "0.5px solid var(--border)" }}>
        <HoverNavBlock href="/work/dir-by-hinds" label="← Previous" title="Dir. By Hind$ — Brand Identity & Apparel" align="left" />
        <div />
      </nav>

      <Footer />
    </div>
  );
}
