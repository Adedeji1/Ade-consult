import {
  UtensilsCrossed, Scissors, Building2, Heart, School, Briefcase, Truck, UserCircle
} from "lucide-react";
import FadeUp from "./FadeUp";

function WhoWeHelp() {
  const industries = [
    { icon: UtensilsCrossed, title: "Restaurants", text: "Menus, reservations & online ordering" },
    { icon: Scissors, title: "Salons & Spas", text: "Booking systems & portfolio showcases" },
    { icon: Building2, title: "Real Estate", text: "Property listings & agent profiles" },
    { icon: Heart, title: "Clinics", text: "Appointment booking & services info" },
    { icon: School, title: "Schools", text: "Admissions, events & e-learning portals" },
    { icon: Briefcase, title: "Consultants", text: "Professional credibility & lead capture" },
    { icon: Truck, title: "Logistics", text: "Tracking, quotes & service coverage" },
    { icon: UserCircle, title: "Personal Brands", text: "Portfolio, bio & speaking credentials" },
  ];

  return (
    <section id="services" style={{ padding: "100px 24px", background: "white" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Tailored For Your Industry</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px", lineHeight: 1.15 }}>
              Who We Help
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, marginTop: 16, maxWidth: 500, margin: "16px auto 0" }}>
              We specialize in creating websites for businesses that want to stand out and grow.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 20 }}>
          {industries.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeUp key={item.title} delay={i * 60}>
                <div style={{
                  background: "#F8F9FC", borderRadius: 20, padding: "28px 24px",
                  border: "1px solid #E2E8F0", cursor: "default",
                  transition: "all 0.35s cubic-bezier(0.34,1.56,0.64,1)"
                }}
                  onMouseEnter={e => {
                    e.currentTarget.style.transform = "translateY(-8px)";
                    e.currentTarget.style.boxShadow = "0 20px 50px rgba(10,22,40,0.12)";
                    e.currentTarget.style.background = "white";
                    e.currentTarget.style.borderColor = "#BFDBFE";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.background = "#F8F9FC";
                    e.currentTarget.style.borderColor = "#E2E8F0";
                  }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 14,
                    background: "linear-gradient(135deg, #EEF2FF, #DBEAFE)",
                    display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16
                  }}>
                    <Icon size={22} color="#2563EB" />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: "#0A1628", marginBottom: 6 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: "#64748B", lineHeight: 1.55 }}>{item.text}</div>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhoWeHelp;