import { CheckCircle, ArrowRight } from "lucide-react";
import FadeUp from "./FadeUp";

function Pricing({ scrollTo }) {
  const plans = [
    {
      name: "Starter",
      price: "₦150,000",
      featured: false,
      features: ["1 Page Website", "Mobile Responsive", "WhatsApp Chat Integration", "Contact Form", "Basic SEO Setup", "2 Revision Rounds"],
    },
    {
      name: "Business",
      price: "₦300,000",
      featured: true,
      badge: "Most Popular",
      features: ["Up to 5 Pages", "Full SEO Setup", "Fast Performance Optimization", "Google Maps Integration", "Premium Custom Design", "Priority Support", "4 Revision Rounds"],
    },
    {
      name: "Premium",
      price: "₦500,000",
      featured: false,
      features: ["Custom Design & Branding", "Advanced Animations", "Booking & Scheduling Features", "Priority Support", "Full Technical Setup", "E-commerce Ready", "6 Revision Rounds"],
    },
  ];

  return (
    <section id="pricing" style={{ padding: "100px 24px", background: "white" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Transparent Pricing</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px" }}>
              Simple Pricing
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>
              No hidden fees. No surprises. Just great websites at fair prices.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24, alignItems: "start" }}>
          {plans.map((plan, i) => (
            <FadeUp key={plan.name} delay={i * 100}>
              <div style={{
                borderRadius: 24, padding: 32, position: "relative",
                background: plan.featured ? "linear-gradient(145deg, #0A1628 0%, #1B3B6F 100%)" : "white",
                border: plan.featured ? "none" : "1px solid #E2E8F0",
                boxShadow: plan.featured ? "0 28px 70px rgba(10,22,40,0.35)" : "none",
                transform: plan.featured ? "scale(1.02)" : "none",
                transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)"
              }}
                onMouseEnter={e => { if (!plan.featured) { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 50px rgba(10,22,40,0.12)"; } }}
                onMouseLeave={e => { if (!plan.featured) { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; } }}
              >
                {plan.badge && (
                  <div style={{
                    position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                    background: "linear-gradient(135deg, #2563EB, #60A5FA)",
                    color: "white", padding: "5px 18px", borderRadius: 100,
                    fontSize: 11, fontWeight: 700, letterSpacing: "0.06em",
                    whiteSpace: "nowrap"
                  }}>
                    {plan.badge}
                  </div>
                )}

                <div style={{ marginBottom: 8 }}>
                  <span style={{ fontSize: 13, fontWeight: 700, color: plan.featured ? "rgba(255,255,255,0.6)" : "#94A3B8", letterSpacing: "0.1em", textTransform: "uppercase" }}>{plan.name}</span>
                </div>
                <div style={{ marginBottom: 28 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 40, fontWeight: 700, color: plan.featured ? "white" : "#0A1628" }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: 13, color: plan.featured ? "rgba(255,255,255,0.5)" : "#94A3B8", marginLeft: 4 }}>starting from</span>
                </div>

                <div style={{ height: 1, background: plan.featured ? "rgba(255,255,255,0.1)" : "#F1F5F9", marginBottom: 24 }} />

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 12 }}>
                  {plan.features.map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: plan.featured ? "rgba(255,255,255,0.85)" : "#374151" }}>
                      <CheckCircle size={16} color={plan.featured ? "#60A5FA" : "#2563EB"} fill={plan.featured ? "rgba(96,165,250,0.15)" : "rgba(37,99,235,0.08)"} />
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => scrollTo("contact")}
                  style={{
                    width: "100%", padding: "13px", borderRadius: 14, fontSize: 14, fontWeight: 700,
                    cursor: "pointer", border: "none", transition: "all 0.3s ease",
                    background: plan.featured ? "white" : "transparent",
                    color: plan.featured ? "#0A1628" : "#0A1628",
                    border: plan.featured ? "none" : "2px solid #0A1628"
                  }}
                  onMouseEnter={e => {
                    if (plan.featured) { e.currentTarget.style.background = "#EEF2FF"; e.currentTarget.style.transform = "translateY(-2px)"; }
                    else { e.currentTarget.style.background = "#0A1628"; e.currentTarget.style.color = "white"; }
                  }}
                  onMouseLeave={e => {
                    if (plan.featured) { e.currentTarget.style.background = "white"; e.currentTarget.style.transform = "translateY(0)"; }
                    else { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#0A1628"; }
                  }}
                >
                  Choose Plan
                </button>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={200}>
          <p style={{ textAlign: "center", color: "#94A3B8", fontSize: 13, marginTop: 32 }}>
            All plans include domain consultation, basic hosting guidance, and post-launch support. <span style={{ color: "#2563EB", fontWeight: 600 }}>Custom quotes available</span> for larger projects.
          </p>
        </FadeUp>
      </div>
    </section>
  );
}

export default Pricing;