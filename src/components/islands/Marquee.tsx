/*
 * Marquee — horizontal, infinite-loop scrolling strip.
 *
 * Used by the Problem section (§4.2) for the stat strip. Renders a
 * Framer Motion `x` translate on a doubled list so the seam is invisible.
 * Respects prefers-reduced-motion: when reduced motion is requested,
 * the strip stops moving and becomes a static horizontally-scrollable row.
 *
 * Content comes from the Astro parent via the `children` prop, rendered
 * twice to build the seamless loop. No content or styling decisions live
 * inside this island.
 */

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface MarqueeProps {
  /** The items to scroll. Rendered twice back-to-back for a seamless loop. */
  readonly children: ReactNode;
  /** Seconds for one full loop. Defaults to 40s (slow, editorial). */
  readonly durationSeconds?: number;
  /** aria-label for the scrolling region. */
  readonly ariaLabel?: string;
}

export default function Marquee({
  children,
  durationSeconds = 40,
  ariaLabel = 'Défilement de statistiques',
}: MarqueeProps): JSX.Element {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        className="marquee marquee--static"
        role="region"
        aria-label={ariaLabel}
      >
        <div className="marquee__track marquee__track--static">{children}</div>
      </div>
    );
  }

  return (
    <div className="marquee" role="region" aria-label={ariaLabel}>
      <motion.div
        className="marquee__track"
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: durationSeconds,
          ease: 'linear',
          repeat: Infinity,
        }}
      >
        {children}
        {/* Duplicate — doubled list creates the seamless loop. */}
        <div aria-hidden="true" style={{ display: 'contents' }}>
          {children}
        </div>
      </motion.div>
      <style>{`
        .marquee {
          overflow: hidden;
          width: 100%;
          mask-image: linear-gradient(
            90deg,
            transparent 0,
            black 6%,
            black 94%,
            transparent 100%
          );
          -webkit-mask-image: linear-gradient(
            90deg,
            transparent 0,
            black 6%,
            black 94%,
            transparent 100%
          );
        }
        .marquee__track {
          display: flex;
          gap: var(--space-8, 3rem);
          width: max-content;
          align-items: center;
        }
        .marquee--static {
          overflow-x: auto;
          scrollbar-width: none;
        }
        .marquee--static::-webkit-scrollbar {
          display: none;
        }
        .marquee__track--static {
          display: flex;
          gap: var(--space-8, 3rem);
          align-items: center;
          padding: 0 var(--space-5, 1.5rem);
        }
      `}</style>
    </div>
  );
}
