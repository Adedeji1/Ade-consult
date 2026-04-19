import { useState, useEffect } from "react";
import { Star, ArrowRight, ChevronRight } from "lucide-react";
import FadeUp from "./FadeUp";
import BrowserMockup from "./BrowserMockup";

interface HeroProps {
  scrollTo: (id: string) => void;
}

function Hero({ scrollTo }: HeroProps) {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => { setTimeout(() => setLoaded(true), 100); }, []);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      paddingTop: 72, position: "relative", overflow: "hidden",
      background: "linear-gradient(160deg, #F8F9FC 0%, #EEF2FF 100%)"
    }}>
      {/* Dot grid */}
      <div style={{
        position: "absolute", inset: 0, zIndex: 0,
        backgroundImage: "radial-gradient(#CBD5E1 1px, transparent 1px)",
        backgroundSize: "28px 28px", opacity: 0.5
      }} />
      {/* Gradient orbs */}
      <div style={{
        position: "absolute", top: "10%", right: "5%", width: 600, height: 600,
        borderRadius: "50%", zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)"
      }} />
      <div style={{
        position: "absolute", bottom: "5%", left: "-5%", width: 500, height: 500,
        borderRadius: "50%", zIndex: 0, pointerEvents: "none",
        background: "radial-gradient(circle, rgba(10,22,40,0.05) 0%, transparent 70%)"
      }} />

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", position: "relative", zIndex: 1, width: "100%" }}>
        <div className="ac-hero-grid">
          {/* Left */}
          <div style={{ maxWidth: 580 }}>
            <div style={{
              opacity: loaded ? 1 : 0, transform: loaded ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.8s ease, transform 0.8s ease"
            }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "linear-gradient(135deg, rgba(37,99,235,0.1), rgba(37,99,235,0.05))",
                border: "1px solid rgba(37,99,235,0.2)",
                padding: "6px 14px", borderRadius: 100, marginBottom: 28
              }}>
                <Star size={12} fill="#2563EB" color="#2563EB" />
                <span style={{ fontSize: 12, fontWeight: 600, color: "#2563EB", letterSpacing: "0.05em" }}>
                  Professional Web Design Agency
                </span>
              </div>
            </div>

            <div style={{
              opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(24px)",
              transition: "opacity 0.8s ease 100ms, transform 0.8s ease 100ms"
            }}>
              <h1 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(40px, 5vw, 64px)",
                fontWeight: 700, lineHeight: 1.1,
                color: "#0A1628", marginBottom: 24, letterSpacing: "-1px"
              }}>
                Helping Small Businesses{" "}
                <span style={{
                  background: "linear-gradient(135deg, #1B3B6F, #2563EB)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                  backgroundClip: "text"
                }}>Grow Online</span>{" "}
                With Professional Websites
              </h1>
            </div>

            <div style={{
              opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(24px)",
              transition: "opacity 0.8s ease 200ms, transform 0.8s ease 200ms"
            }}>
              <p style={{
                fontSize: "clamp(15px, 2vw, 17px)", color: "#64748B", lineHeight: 1.75,
                marginBottom: 40, maxWidth: 480
              }}>
                We build fast, modern, and conversion-focused websites that help your business attract more customers and look credible online.
              </p>
            </div>

            <div style={{
              opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(24px)",
              transition: "opacity 0.8s ease 300ms, transform 0.8s ease 300ms",
              display: "flex", gap: 14, flexWrap: "wrap"
            }}>
              <button onClick={() => scrollTo("contact")} style={{
                background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
                color: "white", border: "none", cursor: "pointer",
                padding: "14px 28px", borderRadius: 14, fontSize: 15, fontWeight: 600,
                display: "flex", alignItems: "center", gap: 8, transition: "all 0.3s ease"
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 12px 35px rgba(10,22,40,0.35)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                Get a Free Quote <ArrowRight size={16} />
              </button>
              <button onClick={() => scrollTo("work")} style={{
                background: "white", color: "#0A1628",
                border: "2px solid #E2E8F0", cursor: "pointer",
                padding: "14px 28px", borderRadius: 14, fontSize: 15, fontWeight: 600,
                display: "flex", alignItems: "center", gap: 8, transition: "all 0.3s ease"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#0A1628"; e.currentTarget.style.transform = "translateY(-3px)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                View Work <ChevronRight size={16} />
              </button>
            </div>

            {/* Stats */}
            <div style={{
              display: "flex", gap: 32, marginTop: 48,
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.8s ease 500ms"
            }}>
              {[{ val: "50+", label: "Projects Delivered" }, { val: "98%", label: "Client Satisfaction" }, { val: "3 Days", label: "Avg. Response Time" }].map(s => (
                <div key={s.label}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 700, color: "#0A1628" }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "#94A3B8", fontWeight: 500, marginTop: 2 }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Browser Mockup */}
          <div style={{
            opacity: loaded ? 1 : 0, transform: loaded ? "none" : "translateY(40px) scale(0.95)",
            transition: "opacity 0.9s ease 200ms, transform 0.9s ease 200ms"
          }} className="ac-hero-right">
            <BrowserMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;