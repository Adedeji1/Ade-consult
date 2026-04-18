import {
  Zap, Star, Smartphone, DollarSign, Headphones, TrendingUp
} from "lucide-react";
import FadeUp from "./FadeUp";

function WhyChooseUs() {
  const reasons = [
    { icon: Zap, title: "Fast Delivery", text: "Most websites delivered within 7–14 business days without compromising quality." },
    { icon: Star, title: "Clean Professional Design", text: "Designs that reflect your brand and build trust with potential customers instantly." },
    { icon: Smartphone, title: "Mobile First", text: "Every site looks flawless on phones, tablets, and desktops — always." },
    { icon: DollarSign, title: "Affordable Pricing", text: "Premium websites at prices that make sense for small and growing businesses." },
    { icon: Headphones, title: "Ongoing Support", text: "We don't disappear after launch. We offer maintenance and update support." },
    { icon: TrendingUp, title: "Results Focused", text: "Websites designed with conversions in mind — every element serves a purpose." },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "#F8F9FC" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Our Commitment</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px", lineHeight: 1.15 }}>
              Why Businesses Choose<br />Ade Consults
            </h2>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24 }}>
          {reasons.map((r, i) => {
            const Icon = r.icon;
            return (
              <FadeUp key={r.title} delay={i * 80}>
                <div style={{
                  background: "white", borderRadius: 20, padding: "28px",
                  border: "1px solid #E2E8F0", display: "flex", gap: 18, alignItems: "flex-start",
                  transition: "all 0.3s ease"
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "#BFDBFE"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(10,22,40,0.08)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "#E2E8F0"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14, flexShrink: 0,
                    background: "linear-gradient(135deg, #EEF2FF, #DBEAFE)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <Icon size={22} color="#2563EB" />
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "#0A1628", marginBottom: 6 }}>{r.title}</div>
                    <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.65 }}>{r.text}</div>
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

export default WhyChooseUs;