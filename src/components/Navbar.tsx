// "use client";

// import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
// import { Menu, X, ArrowRight } from "lucide-react";
// import LogoMark from "./LogoMark";

// interface NavbarProps {
//   scrollTo: (id: string) => void;
//   menuOpen: boolean;
//   setMenuOpen: Dispatch<SetStateAction<boolean>>;
//   activeSection: string;
// }

// function Navbar({ scrollTo, menuOpen, setMenuOpen, activeSection }: NavbarProps) {
//   const [scrolled, setScrolled] = useState(false);

//   const links = ["home", "services", "work", "pricing", "contact"];

//   // ✅ Sticky scroll detection
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       style={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         right: 0,
//         zIndex: 1000,
//         transition: "all 0.35s ease",
//         background: scrolled ? "rgba(255,255,255,0.75)" : "transparent",
//         backdropFilter: scrolled ? "blur(14px)" : "none",
//         WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
//         borderBottom: scrolled
//           ? "1px solid rgba(0,0,0,0.06)"
//           : "1px solid transparent",
//         boxShadow: scrolled
//           ? "0 8px 30px rgba(0,0,0,0.05)"
//           : "none",
//       }}
//     >
//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           padding: "0 24px",
//           width: "100%",
//         }}
//       >
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             height: scrolled ? 64 : 72,
//             transition: "height 0.3s ease",
//           }}
//         >
//           {/* LOGO */}
//           <button
//             onClick={() => scrollTo("home")}
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 10,
//               background: "none",
//               border: "none",
//               cursor: "pointer",
//             }}
//           >
//             <LogoMark size={38} />
//             <div style={{ textAlign: "left" }}>
//               <div
//                 style={{
//                   fontFamily: "'Cormorant Garamond', serif",
//                   fontSize: 18,
//                   fontWeight: 700,
//                   color: "#0A1628",
//                   lineHeight: 1,
//                 }}
//               >
//                 Ade Consults
//               </div>
//               <div
//                 style={{
//                   fontSize: 9,
//                   color: "#94A3B8",
//                   letterSpacing: "0.15em",
//                   textTransform: "uppercase",
//                 }}
//               >
//                 Web Agency
//               </div>
//             </div>
//           </button>

//           {/* DESKTOP NAV */}
//           <div
//             className="ac-desktop-nav"
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: 28,
//             }}
//           >
//             {links.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => scrollTo(item)}
//                 style={{
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                   fontSize: 14,
//                   fontWeight: 500,
//                   textTransform: "capitalize",
//                   color: activeSection === item ? "#2563EB" : "#475569",
//                   padding: "6px 2px",
//                   position: "relative",
//                   transition: "all 0.25s ease",
//                 }}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}

//                 {/* underline animation */}
//                 <span
//                   style={{
//                     position: "absolute",
//                     bottom: 0,
//                     left: 0,
//                     height: 2,
//                     width: activeSection === item ? "100%" : "0%",
//                     background: "#2563EB",
//                     borderRadius: 2,
//                     transition: "width 0.3s ease",
//                   }}
//                 />
//               </button>
//             ))}

//             {/* CTA */}
//             <button
//               onClick={() => scrollTo("contact")}
//               style={{
//                 background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
//                 color: "white",
//                 border: "none",
//                 cursor: "pointer",
//                 padding: "10px 22px",
//                 borderRadius: 12,
//                 fontSize: 14,
//                 fontWeight: 600,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 6,
//                 transition: "all 0.25s ease",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.transform = "translateY(-2px)";
//                 e.currentTarget.style.boxShadow =
//                   "0 10px 30px rgba(10,22,40,0.25)";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.transform = "translateY(0)";
//                 e.currentTarget.style.boxShadow = "none";
//               }}
//             >
//               Get Started <ArrowRight size={14} />
//             </button>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <button
//             className="ac-hamburger"
//             onClick={() => setMenuOpen(!menuOpen)}
//             style={{
//               background: "none",
//               border: "none",
//               cursor: "pointer",
//               padding: 6,
//               color: "#0A1628",
//             }}
//           >
//             {menuOpen ? <X size={24} /> : <Menu size={24} />}
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         <div
//           style={{
//             overflow: "hidden",
//             maxHeight: menuOpen ? 500 : 0,
//             opacity: menuOpen ? 1 : 0,
//             transform: menuOpen ? "translateY(0)" : "translateY(-10px)",
//             transition: "all 0.35s ease",
//           }}
//         >
//           <div
//             style={{
//               padding: "12px 0 20px",
//               borderTop: "1px solid #E2E8F0",
//             }}
//           >
//             {links.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => {
//                   scrollTo(item);
//                   setMenuOpen(false);
//                 }}
//                 style={{
//                   display: "block",
//                   width: "100%",
//                   textAlign: "left",
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                   padding: "14px 0",
//                   fontSize: 16,
//                   fontWeight: 500,
//                   color:
//                     activeSection === item ? "#2563EB" : "#0A1628",
//                   textTransform: "capitalize",
//                   borderBottom: "1px solid #F1F5F9",
//                 }}
//               >
//                 {item.charAt(0).toUpperCase() + item.slice(1)}
//               </button>
//             ))}

//             <button
//               onClick={() => {
//                 scrollTo("contact");
//                 setMenuOpen(false);
//               }}
//               style={{
//                 background: "linear-gradient(135deg, #0A1628, #1B3B6F)",
//                 color: "white",
//                 border: "none",
//                 cursor: "pointer",
//                 padding: "14px 24px",
//                 borderRadius: 12,
//                 fontSize: 15,
//                 fontWeight: 600,
//                 marginTop: 16,
//                 width: "100%",
//               }}
//             >
//               Get Started
//             </button>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

"use client";

import { useEffect, useState, type Dispatch, type SetStateAction } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import LogoMark from "./LogoMark";

interface NavbarProps {
  scrollTo: (id: string) => void;
  menuOpen: boolean;
  setMenuOpen: Dispatch<SetStateAction<boolean>>;
  activeSection: string;
}

function Navbar({ scrollTo, menuOpen, setMenuOpen, activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const links = ["home", "services", "work", "pricing", "contact"];

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detect screen size (REAL FIX)
  useEffect(() => {
    const checkScreen = () => setIsMobile(window.innerWidth < 768);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(255,255,255,0.8)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: scrolled ? 64 : 72,
            transition: "height 0.3s ease",
          }}
        >
          {/* LOGO */}
          <button
            onClick={() => scrollTo("home")}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <LogoMark size={36} />
            <div>
              <div style={{ fontWeight: 700 }}>Ade Consults</div>
              <div style={{ fontSize: 10, color: "#64748B" }}>Web Agency</div>
            </div>
          </button>

          {/* DESKTOP NAV */}
          {!isMobile && (
            <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
              {links.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 14,
                    color: activeSection === item ? "#2563EB" : "#475569",
                    position: "relative",
                  }}
                >
                  {item}

                  <span
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      height: 2,
                      width: activeSection === item ? "100%" : 0,
                      background: "#2563EB",
                      transition: "width 0.3s",
                    }}
                  />
                </button>
              ))}

              <button
                onClick={() => scrollTo("contact")}
                style={{
                  background: "#0A1628",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: 10,
                  border: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  cursor: "pointer",
                }}
              >
                Get Started <ArrowRight size={14} />
              </button>
            </div>
          )}

          {/* MOBILE HAMBURGER */}
          {isMobile && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          )}
        </div>

        {/* MOBILE MENU */}
        {isMobile && (
          <div
            style={{
              overflow: "hidden",
              maxHeight: menuOpen ? 500 : 0,
              transition: "all 0.3s ease",
            }}
          >
            <div style={{ paddingTop: 10 }}>
              {links.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollTo(item);
                    setMenuOpen(false);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    padding: "12px 0",
                    borderBottom: "1px solid #eee",
                    background: "none",
                    border: "none",
                  }}
                >
                  {item}
                </button>
              ))}

              <button
                onClick={() => scrollTo("contact")}
                style={{
                  marginTop: 10,
                  width: "100%",
                  padding: "12px",
                  background: "#0A1628",
                  color: "#fff",
                  borderRadius: 10,
                  border: "none",
                }}
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;