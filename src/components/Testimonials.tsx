import { Star } from "lucide-react";
import FadeUp from "./FadeUp";

function Testimonials() {
  const testimonials = [
    { name: "Chidi Okafor", role: "Owner, GlowCuts Barbershop", text: "Ade Consults transformed our online presence. We started getting 3x more bookings within the first month of launching our new website." },
    { name: "Adaeze Nwosu", role: "Manager, PrimeStay Apartments", text: "Professional, responsive, and incredibly talented. They captured exactly what we needed and delivered ahead of schedule." },
    { name: "Fatima Sule", role: "Founder, Bella Treats Bakery", text: "I had no idea how much a great website would change my business. The orders started rolling in almost immediately after launch!" },
  ];

  return (
    <section style={{ padding: "100px 24px", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Client Stories</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px" }}>
              What Our Clients Say
            </h2>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24 }}>
          {testimonials.map((t, i) => (
            <FadeUp key={t.name} delay={i * 100}>
              <div style={{
                background: "#F8F9FC", borderRadius: 20, padding: "32px",
                border: "1px solid #E2E8F0", position: "relative",
                transition: "all 0.3s ease"
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = "0 16px 45px rgba(10,22,40,0.1)"; e.currentTarget.style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", gap: 3, marginBottom: 20 }}>
                  {[1,2,3,4,5].map(s => <Star key={s} size={14} fill="#FBBF24" color="#FBBF24" />)}
                </div>
                <p style={{ fontSize: 15, color: "#374151", lineHeight: 1.7, marginBottom: 24, fontStyle: "italic" }}>
                  "{t.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{
                    width: 44, height: 44, borderRadius: "50%",
                    background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "white", fontSize: 16, fontWeight: 700
                  }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 700, color: "#0A1628" }}>{t.name}</div>
                    <div style={{ fontSize: 12, color: "#94A3B8" }}>{t.role}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;