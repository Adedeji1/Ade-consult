import { useInView } from "../hooks/useInView";

function FadeUp({ children, delay = 0, style = {}, className = "" }) {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={className} style={{
      opacity: inView ? 1 : 0,
      transform: inView ? "translateY(0)" : "translateY(36px)",
      transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
      ...style
    }}>
      {children}
    </div>
  );
}

export default FadeUp;