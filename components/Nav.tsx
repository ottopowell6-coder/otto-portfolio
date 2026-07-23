"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.75rem var(--px)",
        borderBottom: "0.5px solid var(--border)",
        position: "sticky",
        top: 0,
        background: "var(--black)",
        zIndex: 100,
      }}
    >
      <Link
        href="/"
        style={{
          fontFamily: "'Syne', sans-serif",
          fontSize: "13px",
          fontWeight: 600,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--white)",
        }}
      >
        Otto Powell
      </Link>

      <ul
        style={{
          display: "flex",
          gap: "2rem",
          listStyle: "none",
        }}
      >
        {[
          { label: "Work", href: "/" },
          { label: "Info", href: "/info" },
          { label: "Contact", href: "/contact" },
        ].map(({ label, href }) => (
          <li key={href}>
            <Link
              href={href}
              style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "11px",
                letterSpacing: "0.05em",
                color:
                  pathname === href ? "var(--white)" : "var(--muted)",
                transition: "color 0.2s",
              }}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
