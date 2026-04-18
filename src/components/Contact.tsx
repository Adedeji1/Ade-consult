import { useState } from "react";
import { MessageCircle, Mail, Clock, MapPin, ArrowRight } from "lucide-react";
import FadeUp from "./FadeUp";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.message) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 4000);
      setForm({ name: "", email: "", type: "", message: "" });
    }
  };

  return (
    <section id="contact" style={{ padding: "100px 24px", background: "#F8F9FC" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <FadeUp>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: "#2563EB", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 14 }}>Get In Touch</div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 700, color: "#0A1628", letterSpacing: "-0.5px" }}>
              Let's Build Your Website
            </h2>
            <p style={{ color: "#64748B", fontSize: 16, marginTop: 16, maxWidth: 460, margin: "16px auto 0" }}>
              Tell us about your project and we'll get back to you within 24 hours.
            </p>
          </div>
        </FadeUp>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 40 }} className="ac-contact-grid">
          {/* Contact info */}
          <FadeUp>
            <div>
              <div style={{ marginBottom: 40 }}>
                <h3 style={{ fontSize: 20, fontWeight: 700, color: "#0A1628", marginBottom: 16 }}>Reach Us Directly</h3>
                {[
                  { icon: MessageCircle, label: "WhatsApp", value: "+234 800 000 0000", color: "#22C55E" },
                  { icon: Mail, label: "Email", value: "hello@adeconsults.ng", color: "#2563EB" },
                  { icon: Clock, label: "Response Time", value: "Within 24 hours", color: "#F59E0B" },
                  { icon: MapPin, label: "Based in", value: "Lagos, Nigeria", color: "#EF4444" },
                ].map(c => {
                  const Icon = c.icon;
                  return (
                    <div key={c.label} style={{
                      display: "flex", alignItems: "center", gap: 14,
                      padding: "14px 0", borderBottom: "1px solid #F1F5F9"
                    }}>
                      <div style={{
                        width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                        background: `${c.color}15`,
                        display: "flex", alignItems: "center", justifyContent: "center"
                      }}>
                        <Icon size={18} color={c.color} />
                      </div>
                      <div>
                        <div style={{ fontSize: 11, color: "#94A3B8", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{c.label}</div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: "#0A1628", marginTop: 2 }}>{c.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* CTA note */}
              <div style={{
                background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
                borderRadius: 20, padding: 28, color: "white"
              }}>
                <div style={{ fontSize: 15, fontWeight: 700, marginBottom: 8 }}>Free Project Consultation</div>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,0.7)", lineHeight: 1.7, marginBottom: 16 }}>
                  Not sure what you need? We offer a free 30-minute call to help you decide the best approach.
                </p>
                <a href="https://wa.me/2348000000000" style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "rgba(255,255,255,0.15)", color: "white",
                  padding: "8px 16px", borderRadius: 10, fontSize: 13, fontWeight: 600,
                  textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)"
                }}>
                  <MessageCircle size={14} /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={150}>
            <div style={{
              background: "white", borderRadius: 24, padding: 40,
              border: "1px solid #E2E8F0",
              boxShadow: "0 8px 30px rgba(10,22,40,0.05)"
            }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>🎉</div>
                  <div style={{ fontSize: 20, fontWeight: 700, color: "#0A1628", marginBottom: 8 }}>Message Sent!</div>
                  <div style={{ color: "#64748B", fontSize: 14 }}>We'll get back to you within 24 hours.</div>
                </div>
              ) : (
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="ac-form-row">
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Full Name</label>
                      <input
                        type="text" placeholder="e.g. Adewale Obi" value={form.name}
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        style={{
                          width: "100%", padding: "12px 16px", border: "1.5px solid #E2E8F0",
                          borderRadius: 12, fontSize: 14, outline: "none", fontFamily: "inherit",
                          transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box"
                        }}
                        onFocus={e => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                    <div>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Email Address</label>
                      <input
                        type="email" placeholder="you@example.com" value={form.email}
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        style={{
                          width: "100%", padding: "12px 16px", border: "1.5px solid #E2E8F0",
                          borderRadius: 12, fontSize: 14, outline: "none", fontFamily: "inherit",
                          transition: "border-color 0.2s, box-shadow 0.2s", boxSizing: "border-box"
                        }}
                        onFocus={e => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.1)"; }}
                        onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Business Type</label>
                    <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}
                      style={{
                        width: "100%", padding: "12px 16px", border: "1.5px solid #E2E8F0",
                        borderRadius: 12, fontSize: 14, outline: "none", fontFamily: "inherit",
                        background: "white", cursor: "pointer", boxSizing: "border-box",
                        transition: "border-color 0.2s, box-shadow 0.2s"
                      }}
                      onFocus={e => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                    >
                      <option value="">Select your business type...</option>
                      {["Restaurant / Food", "Salon / Barbershop", "Real Estate", "Clinic / Healthcare", "School / Education", "Consultant / Agency", "Logistics / Delivery", "Personal Brand", "E-commerce / Retail", "Other"].map(o => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label style={{ display: "block", fontSize: 12, fontWeight: 700, color: "#374151", marginBottom: 6, textTransform: "uppercase", letterSpacing: "0.08em" }}>Tell Us About Your Project</label>
                    <textarea
                      placeholder="Describe what you need, your goals, and any specific features..." value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      rows={5}
                      style={{
                        width: "100%", padding: "12px 16px", border: "1.5px solid #E2E8F0",
                        borderRadius: 12, fontSize: 14, outline: "none", fontFamily: "inherit",
                        resize: "vertical", minHeight: 120, boxSizing: "border-box",
                        transition: "border-color 0.2s, box-shadow 0.2s"
                      }}
                      onFocus={e => { e.target.style.borderColor = "#2563EB"; e.target.style.boxShadow = "0 0 0 4px rgba(37,99,235,0.1)"; }}
                      onBlur={e => { e.target.style.borderColor = "#E2E8F0"; e.target.style.boxShadow = "none"; }}
                    />
                  </div>

                  <button
                    onClick={handleSubmit}
                    style={{
                      background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
                      color: "white", border: "none", cursor: "pointer",
                      padding: "15px", borderRadius: 14, fontSize: 15, fontWeight: 700,
                      display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 35px rgba(10,22,40,0.35)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    Send Message <ArrowRight size={16} />
                  </button>
                </div>
              )}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}

export default Contact;