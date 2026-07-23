import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function InfoPage() {
  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Nav />
      <section style={{ padding: "4rem var(--px)", flex: 1, display: "grid", gridTemplateColumns: "var(--grid-about)", gap: "4rem", alignItems: "start", borderBottom: "0.5px solid var(--border)" }}>
        <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.12em", textTransform: "uppercase" }}>About</p>
        <div>
          <h1 style={{ fontFamily: "'Syne', sans-serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "2rem" }}>
            Otto Powell
          </h1>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "15px", lineHeight: 1.9, color: "rgba(240,238,232,0.75)", marginBottom: "1.5rem", maxWidth: "560px" }}>
            Graphic designer and art director based in Kingston, Jamaica. I work across brand identity, apparel design, motion graphics, and 3D, with everything rooted in a design sensibility shaped by Jamaican culture and streetwear.
          </p>
          <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "15px", lineHeight: 1.9, color: "rgba(240,238,232,0.75)", marginBottom: "3rem", maxWidth: "560px" }}>
            I run Soul Culture, a creative studio and streetwear brand I founded, and take on freelance brand identity, apparel, and motion work under my own name. Three years in, building toward the international market.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "var(--grid-2)", gap: "2rem", borderTop: "0.5px solid var(--border)", paddingTop: "2rem" }}>
            {[
              { label: "Based", value: "Kingston, Jamaica" },
              { label: "Studio", value: "Soul Culture" },
              { label: "Availability", value: "Open for work" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{label}</p>
                <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "13px", fontWeight: 500, color: "var(--white)", lineHeight: 1.5 }}>{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
