"use client";
import Link from "next/link";

export function HoverRow({
  href,
  num,
  title,
  tags,
  year,
}: {
  href: string;
  num: string;
  title: string;
  tags: string[];
  year: string;
}) {
  return (
    <Link
      href={href}
      style={{
        display: "grid",
        gridTemplateColumns: "var(--grid-row)",
        alignItems: "center",
        gap: "var(--gap-row)",
        padding: "1.5rem var(--px)",
        borderBottom: "0.5px solid var(--border)",
        transition: "background 0.15s",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.background = "rgba(240,238,232,0.025)";
        const arrow = e.currentTarget.querySelector(".arrow") as HTMLElement;
        if (arrow) { arrow.style.transform = "translateX(4px)"; arrow.style.color = "var(--blue-accent)"; }
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.background = "transparent";
        const arrow = e.currentTarget.querySelector(".arrow") as HTMLElement;
        if (arrow) { arrow.style.transform = "translateX(0)"; arrow.style.color = "var(--muted)"; }
      }}
    >
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>
        {num}
      </span>
      <div style={{ minWidth: 0 }}>
        <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "15px", fontWeight: 600, letterSpacing: "-0.01em", marginBottom: "4px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
          {title}
        </p>
        <div style={{ display: "flex", gap: "12px" }}>
          {tags.map((tag) => (
            <span key={tag} style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.05em", textTransform: "uppercase" }}>
              — {tag}
            </span>
          ))}
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexShrink: 0 }}>
        <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "11px", color: "var(--muted)" }}>
          {year}
        </span>
        <span className="arrow" style={{ fontSize: "16px", color: "var(--muted)", transition: "transform 0.2s, color 0.2s", display: "inline-block" }}>
          →
        </span>
      </div>
    </Link>
  );
}

export function HoverLink({
  href,
  children,
  external,
  style,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
  style?: React.CSSProperties;
}) {
  const base: React.CSSProperties = {
    fontFamily: "'DM Mono', monospace",
    fontSize: "11px",
    color: "var(--muted)",
    letterSpacing: "0.05em",
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    transition: "color 0.2s",
    cursor: "pointer",
    ...style,
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={base}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--white)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={href}
      style={base}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--white)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--muted)")}
    >
      {children}
    </Link>
  );
}

export function HoverNavBlock({
  href,
  label,
  title,
  align,
}: {
  href: string;
  label: string;
  title: string;
  align: "left" | "right";
}) {
  return (
    <Link
      href={href}
      style={{
        padding: "1.75rem var(--px)",
        borderRight: align === "left" ? "0.5px solid var(--border)" : undefined,
        textAlign: align,
        transition: "background 0.15s",
        display: "block",
      }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "rgba(240,238,232,0.025)")}
      onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "transparent")}
    >
      <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "6px" }}>
        {label}
      </p>
      <p style={{ fontFamily: "'Syne', sans-serif", fontSize: "14px", fontWeight: 600, color: "var(--white)" }}>
        {title}
      </p>
    </Link>
  );
}

export function ContactLink({
  href,
  label,
  value,
  external,
}: {
  href: string;
  label: string;
  value: string;
  external?: boolean;
}) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "0.5rem",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: "1.5rem",
        borderBottom: "0.5px solid var(--border)",
      }}
    >
      <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "10px", color: "var(--muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </span>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        style={{ fontFamily: "'Syne', sans-serif", fontSize: "14px", fontWeight: 500, color: "var(--white)", transition: "color 0.2s", display: "flex", alignItems: "center", gap: "6px" }}
        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--blue-accent)")}
        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "var(--white)")}
      >
        {value} ↗
      </a>
    </div>
  );
}
