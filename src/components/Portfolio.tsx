import { ExternalLink, Scissors, Building2, UtensilsCrossed } from "lucide-react";
import FadeUp from "./FadeUp";

function Portfolio() {
  const projects = [
    {
      name: "GlowCuts Barbershop",
      category: "Beauty & Grooming",
      desc: "A sleek, modern booking website for a premium barbershop chain in Lagos. Features online scheduling, gallery, and pricing.",
      gradient: "linear-gradient(135deg, #0A1628 0%, #1B3B6F 100%)",
      accent: "#2563EB",
      icon: Scissors,
    },
    {
      name: "PrimeStay Apartments",
      category: "Real Estate & Hospitality",
      desc: "Elegant property showcase website with virtual tour integration, availability calendar, and direct booking functionality.",
      gradient: "linear-gradient(135deg, #064E3B 0%, #065F46 100%)",
      accent: "#10B981",
      icon: Building2,
    },
    {
      name: "Bella Treats Bakery",
      category: "Food & Lifestyle",
      desc: "Warm, inviting e-commerce site for a bespoke bakery. Custom order forms, WhatsApp integration, and stunning gallery.",
      gradient: "linear-gradient(135deg, #7C2D12 0%, #9A3412 100%)",
      accent: "#F97316",
      icon: UtensilsCrossed,
    },
  ];

  return (
    <section id="work" style={{ padding: "100px 24px", background: "#F8F9FC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Our Work</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px" }}>
              Recent Projects
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
              A glimpse into websites we've crafted for businesses like yours.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28 }}>
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <FadeUp key={p.name} delay={i * 100}>
                <div style={{
                  background: "white", borderRadius: 24, overflow: "hidden",
                  border: "1px solid #E2E8F0",
                  transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)"
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-10px)"; e.currentTarget.style.boxShadow = "0 28px 64px rgba(10,22,40,0.15)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {/* Screenshot placeholder */}
                  <div style={{ height: 200, background: p.gradient, position: "relative", overflow: "hidden" }}>
                    {/* Decorative elements */}
                    <div style={{
                      position: "absolute", inset: 0, display: "flex",
                      flexDirection: "column", padding: 20
                    }}>
                      {/* Mini browser */}
                      <div style={{
                        background: "rgba(255,255,255,0.12)", borderRadius: 10,
                        padding: "10px 14px", backdropFilter: "blur(8px)"
                      }}>
                        <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
                          {["rgba(255,255,255,0.4)", "rgba(255,255,255,0.3)", "rgba(255,255,255,0.2)"].map((c, ci) => (
                            <div key={ci} style={{ width: 7, height: 7, borderRadius: "50%", background: c }} />
                          ))}
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                          <Icon size={16} color="rgba(255,255,255,0.8)" />
                          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 11, fontWeight: 600 }}>{p.name}</span>
                        </div>
                        <div style={{ marginTop: 10, display: "grid", gridTemplateColumns: "2fr 1fr", gap: 6 }}>
                          <div style={{ height: 6, background: "rgba(255,255,255,0.2)", borderRadius: 3 }} />
                          <div style={{ height: 6, background: p.accent, borderRadius: 3, opacity: 0.8 }} />
                          <div style={{ height: 4, background: "rgba(255,255,255,0.15)", borderRadius: 2 }} />
                          <div style={{ height: 4, background: "rgba(255,255,255,0.1)", borderRadius: 2 }} />
                        </div>
                      </div>
                    </div>
                    {/* Category badge */}
                    <div style={{
                      position: "absolute", top: 16, right: 16,
                      background: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)",
                      padding: "4px 10px", borderRadius: 20,
                      fontSize: 10, fontWeight: 600, color: "rgba(255,255,255,0.9)",
                      border: "1px solid rgba(255,255,255,0.2)"
                    }}>
                      {p.category}
                    </div>
                  </div>

                  <div style={{ padding: "24px" }}>
                    <h3 style={{ fontSize: 18, fontWeight: 700, color: "#0A1628", marginBottom: 8 }}>{p.name}</h3>
                    <p style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65, marginBottom: 20 }}>{p.desc}</p>
                    <button style={{
                      display: "flex", alignItems: "center", gap: 7,
                      background: "#F1F5F9", color: "#0A1628", border: "none", cursor: "pointer",
                      padding: "9px 18px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                      transition: "all 0.25s ease"
                    }}
                      onMouseEnter={e => { e.currentTarget.style.background = "#0A1628"; e.currentTarget.style.color = "white"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "#F1F5F9"; e.currentTarget.style.color = "#0A1628"; }}
                    >
                      <ExternalLink size={13} /> Live Preview
                    </button>
                  </div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;