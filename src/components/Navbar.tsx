import { Menu, X, ArrowRight } from "lucide-react";
import LogoMark from "./LogoMark";

function Navbar({ scrolled, scrollTo, menuOpen, setMenuOpen, activeSection }) {
  const links = ["home", "services", "work", "pricing", "contact"];
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      background: scrolled ? "rgba(248,249,252,0.92)" : "transparent",
      backdropFilter: scrolled ? "blur(20px)" : "none",
      WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
      borderBottom: scrolled ? "1px solid rgba(203,213,225,0.7)" : "1px solid transparent",
      transition: "all 0.4s ease",
    }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 72 }}>
          <button onClick={() => scrollTo("home")} style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer" }}>
            <LogoMark size={40} />
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: "#0A1628", lineHeight: 1, letterSpacing: "-0.3px" }}>Ade Consults</div>
              <div style={{ fontSize: 9, color: "#94A3B8", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 500 }}>Web Agency</div>
            </div>
          </button>

          {/* Desktop links */}
          <div className="ac-desktop-nav">
            {links.map(item => (
              <button key={item} onClick={() => scrollTo(item)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontSize: 14, fontWeight: 500, textTransform: "capitalize",
                color: activeSection === item ? "#2563EB" : "#475569",
                padding: "6px 2px", position: "relative", transition: "color 0.2s"
              }}>
                {item === "services" ? "Services" : item.charAt(0).toUpperCase() + item.slice(1)}
                {activeSection === item && (
                  <span style={{
                    position: "absolute", bottom: 0, left: 0, right: 0, height: 2,
                    background: "#2563EB", borderRadius: 2
                  }} />
                )}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} style={{
              background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
              color: "white", border: "none", cursor: "pointer",
              padding: "10px 22px", borderRadius: 12, fontSize: 14, fontWeight: 600,
              transition: "all 0.3s ease", display: "flex", alignItems: "center", gap: 6
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(10,22,40,0.35)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Get Started <ArrowRight size={14} />
            </button>
          </div>

          {/* Hamburger */}
          <button className="ac-hamburger" onClick={() => setMenuOpen(!menuOpen)}
            style={{ background: "none", border: "none", cursor: "pointer", padding: 6, color: "#0A1628" }}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div style={{
          maxHeight: menuOpen ? 400 : 0, overflow: "hidden",
          transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)",
        }}>
          <div style={{ padding: "8px 0 20px", borderTop: "1px solid #E2E8F0" }}>
            {links.map(item => (
              <button key={item} onClick={() => scrollTo(item)} style={{
                display: "block", width: "100%", textAlign: "left",
                background: "none", border: "none", cursor: "pointer",
                padding: "13px 0", fontSize: 16, fontWeight: 500,
                color: activeSection === item ? "#2563EB" : "#0A1628",
                textTransform: "capitalize", borderBottom: "1px solid #F1F5F9"
              }}>
                {item === "services" ? "Services" : item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            <button onClick={() => scrollTo("contact")} style={{
              background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
              color: "white", border: "none", cursor: "pointer",
              padding: "13px 24px", borderRadius: 12, fontSize: 15, fontWeight: 600,
              marginTop: 16, width: "100%"
            }}>
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;