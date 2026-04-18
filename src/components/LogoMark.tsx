function LogoMark({ size = 42 }) {
  return (
    <div style={{
      width: size, height: size,
      background: "linear-gradient(135deg, #0A1628 0%, #1B3B6F 100%)",
      borderRadius: Math.round(size * 0.286),
      display: "flex", alignItems: "center", justifyContent: "center",
      boxShadow: "0 4px 16px rgba(10,22,40,0.3)",
      flexShrink: 0
    }}>
      <span style={{
        fontFamily: "'Cormorant Garamond', serif",
        color: "white", fontSize: size * 0.38, fontWeight: 700, letterSpacing: "-0.5px"
      }}>A&C</span>
    </div>
  );
}

export default LogoMark;