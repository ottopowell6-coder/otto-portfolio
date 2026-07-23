"use client";

export default function Footer() {
  return (
    <footer style={{ padding: "2rem var(--px)", display: "flex", flexWrap: "wrap", gap: "1rem", justifyContent: "space-between", alignItems: "center", borderTop: "0.5px solid var(--border)", marginTop: "auto" }}>
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>
        © 2026 Otto Powell — Soul Culture
      </span>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1.5rem" }}>
        {[
          { label: "Behance", href: "https://www.behance.net/ottopowell" },
          { label: "Instagram", href: "https://www.instagram.com/playboisasuke" },
          { label: "Email", href: "mailto:ottopowell6@gmail.com" },
        ].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--white)")}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
          >
            {label}
          </a>
        ))}
      </div>
    </footer>
  );
}
