import { AtSign, Globe, Link, Share2, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import LogoMark from "./LogoMark";

type FooterProps = {
  scrollTo: (section: string) => void;
};

function Footer({ scrollTo }: FooterProps) {
  return (
    <footer style={{ background: "#0A1628", color: "white", padding: "72px 24px 32px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: 48, marginBottom: 64 }} className="ac-footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <LogoMark size={44} />
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, lineHeight: 1 }}>Ade Consults</div>
                <div style={{ fontSize: 10, color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Web Agency</div>
              </div>
            </div>
            <p style={{ fontSize: 14, color: "rgba(255,255,255,0.6)", lineHeight: 1.75, maxWidth: 280 }}>
              We help small and medium-sized businesses grow online with professional, conversion-focused websites.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
              {[Globe, Share2, Link, AtSign].map((Icon, i) => (
                <button key={i} style={{
                  width: 38, height: 38, borderRadius: 10, background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.25s ease"
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "#2563EB"; e.currentTarget.style.borderColor = "#2563EB"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
                >
                  <Icon size={15} color="white" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 20 }}>Navigate</div>
            {["home", "services", "work", "pricing", "contact"].map(link => (
              <button key={link} onClick={() => scrollTo(link)} style={{
                display: "block", background: "none", border: "none", cursor: "pointer",
                color: "rgba(255,255,255,0.65)", fontSize: 14, padding: "6px 0",
                textTransform: "capitalize", textAlign: "left", transition: "color 0.2s"
              }}
                onMouseEnter={e => e.currentTarget.style.color = "white"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.65)"}
              >
                {link === "services" ? "Services" : link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 20 }}>Services</div>
            {["Business Websites", "E-commerce", "Landing Pages", "SEO Setup", "Website Redesign", "Maintenance"].map(s => (
              <div key={s} style={{ color: "rgba(255,255,255,0.65)", fontSize: 14, padding: "6px 0" }}>{s}</div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.15em", marginBottom: 20 }}>Contact</div>
            {[
              { icon: MessageCircle, text: "+234 800 000 0000" },
              { icon: Mail, text: "hello@adeconsults.ng" },
              { icon: MapPin, text: "Lagos, Nigeria" },
              { icon: Clock, text: "Mon–Fri, 9am – 6pm" },
            ].map(c => {
              const Icon = c.icon;
              return (
                <div key={c.text} style={{ display: "flex", alignItems: "center", gap: 10, padding: "7px 0", color: "rgba(255,255,255,0.65)", fontSize: 14 }}>
                  <Icon size={14} color="#2563EB" /> {c.text}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          paddingTop: 28, borderTop: "1px solid rgba(255,255,255,0.08)",
          display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 12
        }}>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            © {new Date().getFullYear()} Ade Consults. All rights reserved.
          </div>
          <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>
            Built with ❤️ for Nigerian businesses
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;