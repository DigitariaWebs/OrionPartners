"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}

function Counter({ end, duration, prefix = "", suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const currentCount = countRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentCount) {
      observer.observe(currentCount);
    }

    return () => {
      if (currentCount) {
        observer.unobserve(currentCount);
      }
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

      if (progress < 1) {
        setCount(Math.floor(end * progress));
        animationFrame = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [end, duration, isInView]);

  return (
    <div
      ref={countRef}
      className="text-4xl font-serif font-bold mb-2"
      style={{ color: 'var(--color-accent)' }}
    >
      {prefix}
      {count}
      {suffix}
    </div>
  );
}

export default function Stats() {
  return (
    <section
      className="py-16"
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-text-on-dark)",
      }}
    >
      <div className="max-w-7xl mx-auto ">
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div>
              <Counter end={5} duration={2} suffix="+" />
              <div className="text-sm uppercase tracking-wider">
                nationalités représentées
                <div className="mt-1">au sein du cabinet</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <Counter end={10} duration={2} suffix="+" />
              <div className="text-sm uppercase tracking-wider">
                associés, managers
                <div className="mt-1">et consultants</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div>
              <Counter end={15} duration={2} suffix="+" />
              <div className="text-sm uppercase tracking-wider">
                années d&apos;expérience cumulée
                <div className="mt-1 text-sm upper-case">
                  Des experts issus des cabinets variés.
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div>
              <Counter end={100} duration={2} suffix="%" />
              <div className="text-sm uppercase tracking-wider">
                d&apos;implication des associés et des consultants seniors
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
