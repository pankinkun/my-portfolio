import { useRef } from "react";
import { useInView } from "framer-motion";
import ".././index.css"
export function AnimatedTitle({ children }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} 
      className='text-4xl text-left p-2 border-2 border-b-black border-r-black border-l-slate-100 border-t-slate-100 max-w-fit font-black'>
      <span
        style={{
          transform: isInView ? "none" : "translateX(-200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
        }}
        className="AnimatedTitle"
      >
        {children}
      </span>
    </section>
  );
}

