import { Globe, Star } from "lucide-react";

function BrowserMockup() {
  return (
    <div style={{
      background: "white",
      borderRadius: 20,
      boxShadow: "0 30px 80px rgba(10,22,40,0.2), 0 4px 20px rgba(10,22,40,0.08)",
      overflow: "hidden",
      border: "1px solid #E2E8F0",
      animation: "acFloat 5s ease-in-out infinite"
    }}>
      {/* Browser chrome */}
      <div style={{
        background: "#F1F5F9", padding: "12px 16px",
        display: "flex", alignItems: "center", gap: 12,
        borderBottom: "1px solid #E2E8F0"
      }}>
        <div style={{ display: "flex", gap: 6 }}>
          {["#FF5F57", "#FFBD2E", "#28C840"].map(c => (
            <div key={c} style={{ width: 11, height: 11, borderRadius: "50%", background: c }} />
          ))}
        </div>
        <div style={{
          flex: 1, background: "white", borderRadius: 6, padding: "5px 12px",
          fontSize: 11, color: "#94A3B8", border: "1px solid #E2E8F0",
          display: "flex", alignItems: "center", gap: 5
        }}>
          <Globe size={10} color="#94A3B8" />
          www.glowcuts.com.ng
        </div>
      </div>
      {/* Fake website content */}
      <div style={{ background: "#FAFBFE" }}>
        {/* Fake nav */}
        <div style={{
          background: "#0A1628", padding: "12px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between"
        }}>
          <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
            <div style={{ width: 22, height: 22, background: "#2563EB", borderRadius: 5 }} />
            <div style={{ color: "white", fontSize: 11, fontWeight: 700 }}>GlowCuts</div>
          </div>
          <div style={{ display: "flex", gap: 14 }}>
            {["Home", "Services", "Book"].map(n => (
              <div key={n} style={{ color: "rgba(255,255,255,0.6)", fontSize: 9 }}>{n}</div>
            ))}
          </div>
        </div>
        {/* Hero block */}
        <div style={{ padding: "24px 20px 16px", background: "linear-gradient(135deg, #0A1628 0%, #1B3B6F 100%)" }}>
          <div style={{ color: "rgba(255,255,255,0.5)", fontSize: 8, marginBottom: 4 }}>✦ PREMIUM BARBERSHOP</div>
          <div style={{ color: "white", fontSize: 16, fontWeight: 700, fontFamily: "serif", lineHeight: 1.2, marginBottom: 8 }}>Look Sharp,<br />Feel Confident</div>
          <div style={{ display: "inline-block", background: "#2563EB", color: "white", fontSize: 9, padding: "6px 14px", borderRadius: 6, fontWeight: 600 }}>Book Now</div>
        </div>
        {/* Service cards */}
        <div style={{ padding: "16px 20px", display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
          {["Haircut", "Beard Trim", "Full Groom"].map((s, i) => (
            <div key={s} style={{
              background: "white", borderRadius: 10, padding: "12px 10px",
              border: "1px solid #E2E8F0", textAlign: "center"
            }}>
              <div style={{
                width: 28, height: 28, borderRadius: 8, marginBottom: 6,
                background: ["#EEF2FF", "#F0FDF4", "#FFF7ED"][i],
                margin: "0 auto 6px"
              }} />
              <div style={{ fontSize: 9, fontWeight: 600, color: "#0A1628" }}>{s}</div>
              <div style={{ fontSize: 8, color: "#94A3B8", marginTop: 2 }}>₦5,000</div>
            </div>
          ))}
        </div>
        {/* Footer bar */}
        <div style={{
          background: "#F8F9FC", padding: "10px 20px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          borderTop: "1px solid #E2E8F0"
        }}>
          <div style={{ display: "flex", gap: 4 }}>
            {[1,2,3,4,5].map(s => <Star key={s} size={8} fill="#FBBF24" color="#FBBF24" />)}
          </div>
          <div style={{ fontSize: 8, color: "#94A3B8" }}>4.9 · 200+ reviews</div>
        </div>
      </div>
    </div>
  );
}

export default BrowserMockup;