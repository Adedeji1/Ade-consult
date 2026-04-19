import { useInView } from "../hooks/useInView";
import type { CSSProperties, ReactNode, RefObject } from "react";

type FadeUpProps = {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
  className?: string;
};

function FadeUp({ children, delay = 0, style = {}, className = "" }: FadeUpProps) {
  const [ref, inView] = useInView() as [RefObject<HTMLDivElement>, boolean];
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(36px)",
        transition: `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`,
        ...style,
      }}>
      {children}
    </div>
  );
}

export default FadeUp;