/*
 * ScrollReveal — fades + lifts children into view on first viewport entry.
 *
 * Uses Framer Motion's `useInView` with `once: true`. Respects
 * `prefers-reduced-motion`: if the user has reduced-motion set, the
 * children render immediately with no animation.
 *
 * The island wraps an Astro default slot (passed as `children`) so the
 * reveal is content-agnostic — it wraps cards, stat rows, section bodies
 * without knowing what's inside.
 */

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef, type ReactNode } from 'react';

export interface ScrollRevealProps {
  readonly children: ReactNode;
  /** Stagger delay in seconds (for sibling reveals). */
  readonly delay?: number;
  /** Amount translated on Y before reveal, in rem. Defaults to 1rem. */
  readonly lift?: number;
  /** Duration in seconds. Defaults to 0.55s. */
  readonly duration?: number;
  /** Custom class hook for the wrapping div. */
  readonly className?: string;
  /** Render element. Default `div`. */
  readonly as?: 'div' | 'li' | 'article' | 'section';
}

export default function ScrollReveal({
  children,
  delay = 0,
  lift = 1,
  duration = 0.55,
  className,
  as = 'div',
}: ScrollRevealProps): JSX.Element {
  const ref = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(ref, { once: true, margin: '0px 0px -10% 0px' });

  const initial = prefersReducedMotion
    ? { opacity: 1, y: 0 }
    : { opacity: 0, y: `${lift}rem` };

  const animate =
    prefersReducedMotion || inView
      ? { opacity: 1, y: 0 }
      : initial;

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      ref={ref as never}
      initial={initial}
      animate={animate}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}
