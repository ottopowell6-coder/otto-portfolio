import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { HoverRow } from "@/components/Interactive";
import { projects } from "@/lib/projects";

export default function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />

      <section style={{ padding: "4rem var(--px) 3rem", borderBottom: "0.5px solid var(--border)", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", gap: "2rem" }}>
        <div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.4rem, 5.5vw, 4.5rem)", fontWeight: 800, lineHeight: 0.95, letterSpacing: "-0.03em", marginBottom: "1.5rem" }}>
            Graphic Designer<br />
            <span style={{ fontStyle: "italic", color: "var(--blue-accent)" }}>& Art Director</span>
          </h1>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "12px", color: "var(--muted)", lineHeight: 1.8, maxWidth: "300px", letterSpacing: "0.02em" }}>
            Brand identity, apparel design, motion & 3D — rooted in Kingston, building for the world.
          </p>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "0.5rem", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "6px" }}>
            <span style={{ display: "inline-block", width: "6px", height: "6px", background: "var(--blue-accent)", borderRadius: "50%" }} />
            Available for work
          </p>
          <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
            Kingston, Jamaica
          </p>
        </div>
      </section>

      <div style={{ padding: "1.25rem var(--px)", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid var(--border)" }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Selected Work</span>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--muted)" }}>{String(projects.length).padStart(2, "0")} Projects</span>
      </div>

      <ul style={{ listStyle: "none", flex: 1 }}>
        {projects.map((project) => (
          <li key={project.id}>
            <HoverRow
              href={project.id === "soul-culture-vol-3" ? "/work/soul-culture-magazine" : project.id === "design-recap-2025" ? "/work/design-recap-2025" : project.id === "soul-culture-world-tour" ? "/work/soul-culture-world-tour" : project.id === "seaborn-club" ? "/work/seaborn-club" : project.id === "dir-by-hinds" ? "/work/dir-by-hinds" : "/work/" + project.id}
              num={project.num}
              title={project.title}
              tags={project.tags}
              year={project.year}
            />
          </li>
        ))}
      </ul>

      <Footer />
    </div>
  );
}
