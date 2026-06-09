import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { ContactLink } from "@/components/Interactive";

export default function ContactPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />
      <section style={{ padding: "4rem 2.5rem", flex: 1, display: "grid", gridTemplateColumns: "1fr 2fr", gap: "4rem", alignItems: "start", borderBottom: "0.5px solid var(--border)" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>Contact</p>
        <div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "2rem" }}>
            Let's work<br />
            <span style={{ fontStyle: "italic", color: "var(--blue-accent)" }}>together</span>
          </h1>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "15px", lineHeight: 1.9, color: "rgba(240,238,232,0.75)", marginBottom: "3rem", maxWidth: "480px" }}>
            Available for brand identity, apparel design, art direction, and motion projects. Based in Kingston — working globally.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", borderTop: "0.5px solid var(--border)", paddingTop: "2rem" }}>
            <ContactLink href="mailto:ottopowell6@gmail.com" label="Email" value="ottopowell6@gmail.com" />
            <ContactLink href="https://www.instagram.com/playboisasuke" label="Instagram" value="@playboisasuke" external />
            <ContactLink href="https://www.behance.net/ottopowell" label="Behance" value="behance.net/ottopowell" external />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
