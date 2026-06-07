import { notFound } from "next/navigation";
import Image from "next/image";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { HoverLink, HoverNavBlock } from "@/components/Interactive";
import { projects } from "@/lib/projects";

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) return {};
  return { title: `${project.title} — Otto Powell`, description: project.description };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((p) => p.id === slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.id === slug);
  const prev = projects[currentIndex - 1] ?? null;
  const next = projects[currentIndex + 1] ?? null;

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />

      <header style={{ padding: "3rem 2.5rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr auto", gap: "2rem", alignItems: "flex-end" }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
            <HoverLink href="/">← Work</HoverLink>
            <span style={{ color: "var(--border)", fontSize: "11px" }}>/</span>
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>{project.num}</span>
          </div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.05 }}>
            {project.title}
          </h1>
        </div>
        <div style={{ textAlign: "right", flexShrink: 0 }}>
          <div style={{ display: "flex", gap: "8px", justifyContent: "flex-end", marginBottom: "0.5rem", flexWrap: "wrap" }}>
            {project.tags.map((tag) => (
              <span key={tag} style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--blue-accent)", letterSpacing: "0.08em", textTransform: "uppercase", border: "0.5px solid var(--navy-bright)", padding: "4px 10px", borderRadius: "2px" }}>
                {tag}
              </span>
            ))}
          </div>
          <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>{project.year}</span>
        </div>
      </header>

      <div style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderBottom: "0.5px solid var(--border)" }}>
        <Image src={project.coverImage} alt={project.title} fill style={{ objectFit: "cover" }} priority unoptimized />
      </div>

      <section style={{ padding: "3rem 2.5rem", borderBottom: "0.5px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>About</p>
        <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "15px", fontWeight: 400, lineHeight: 1.85, color: "rgba(240,238,232,0.75)", maxWidth: "640px" }}>
          {project.description}
        </p>
      </section>

      {project.images.slice(1).map((img, i) => (
        <div key={i} style={{ position: "relative", width: "100%", aspectRatio: "16/9", overflow: "hidden", borderBottom: "0.5px solid var(--border)" }}>
          <Image src={img} alt={`${project.title} — image ${i + 2}`} fill style={{ objectFit: "cover" }} unoptimized />
        </div>
      ))}

      <div style={{ padding: "2rem 2.5rem", borderBottom: "0.5px solid var(--border)" }}>
        <HoverLink href={project.behanceUrl} external>
          View full project on Behance ↗
        </HoverLink>
      </div>

      <nav style={{ display: "grid", gridTemplateColumns: "1fr 1fr", borderBottom: "0.5px solid var(--border)" }}>
        {prev
          ? <HoverNavBlock href={"/work/" + prev.id} label="← Previous" title={prev.title} align="left" />
          : <div />
        }
        {next
          ? <HoverNavBlock href={"/work/" + next.id} label="Next →" title={next.title} align="right" />
          : <div />
        }
      </nav>

      <Footer />
    </div>
  );
}
