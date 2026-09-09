import { useEffect, useRef, useState } from 'react';

const CROSSFADE_MS = 800;
const LEAD_MS = 850;

/**
 * Dual-buffer hero video so loop seams crossfade instead of hard-cutting.
 */
const HeroVideoBackground = ({ src = '/hero-bg.mp4' }) => {
  const aRef = useRef(null);
  const bRef = useRef(null);
  const activeRef = useRef(0);
  const fadingRef = useRef(false);
  const [active, setActive] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    const onChange = (e) => setReducedMotion(e.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (reducedMotion) return undefined;

    const videos = [aRef.current, bRef.current];
    if (!videos[0] || !videos[1]) return undefined;

    let rafId = 0;
    let fadeTimer = 0;
    let alive = true;

    activeRef.current = 0;
    fadingRef.current = false;
    setActive(0);

    const playSafe = (video) => {
      const p = video.play();
      if (p && typeof p.catch === 'function') p.catch(() => {});
    };

    const startCrossfade = () => {
      if (!alive || fadingRef.current) return;
      const from = activeRef.current;
      const to = 1 - from;
      const next = videos[to];
      if (!next || !Number.isFinite(next.duration) || next.duration === 0) return;

      fadingRef.current = true;
      try {
        next.currentTime = 0;
      } catch {
        /* ignore seek errors mid-load */
      }
      playSafe(next);
      activeRef.current = to;
      setActive(to);

      window.clearTimeout(fadeTimer);
      fadeTimer = window.setTimeout(() => {
        if (!alive) return;
        const prev = videos[from];
        if (prev) {
          prev.pause();
          try {
            prev.currentTime = 0;
          } catch {
            /* ignore */
          }
        }
        fadingRef.current = false;
      }, CROSSFADE_MS + 80);
    };

    const tick = () => {
      if (!alive) return;
      const current = videos[activeRef.current];
      if (current && !current.paused && Number.isFinite(current.duration) && current.duration > 0) {
        const remainingMs = (current.duration - current.currentTime) * 1000;
        if (remainingMs <= LEAD_MS) startCrossfade();
      } else if (current && current.paused && current.ended) {
        startCrossfade();
      } else if (current && current.paused && !document.hidden) {
        playSafe(current);
      }
      rafId = requestAnimationFrame(tick);
    };

    videos.forEach((v) => {
      v.muted = true;
      v.defaultMuted = true;
      v.playsInline = true;
      v.loop = false;
      v.preload = 'auto';
      try {
        v.currentTime = 0;
      } catch {
        /* ignore */
      }
      v.pause();
    });

    playSafe(videos[0]);
    rafId = requestAnimationFrame(tick);

    const onVisibility = () => {
      const current = videos[activeRef.current];
      if (document.hidden) {
        videos.forEach((v) => v.pause());
      } else if (current) {
        playSafe(current);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      alive = false;
      cancelAnimationFrame(rafId);
      window.clearTimeout(fadeTimer);
      document.removeEventListener('visibilitychange', onVisibility);
      videos.forEach((v) => v.pause());
    };
  }, [reducedMotion, src]);

  const layerClass =
    'absolute inset-0 w-full h-full object-cover transition-opacity ease-in-out';

  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none opacity-50 dark:opacity-[0.58] grayscale-[0.15] dark:grayscale-[0.2] dark:brightness-90 mix-blend-multiply dark:mix-blend-normal"
      aria-hidden="true"
    >
      {reducedMotion ? (
        <video
          src={src}
          className="absolute inset-0 w-full h-full object-cover"
          muted
          playsInline
          preload="metadata"
        />
      ) : (
        <>
          <video
            ref={aRef}
            src={src}
            className={layerClass}
            style={{
              transitionDuration: `${CROSSFADE_MS}ms`,
              opacity: active === 0 ? 1 : 0,
              zIndex: active === 0 ? 2 : 1,
            }}
            muted
            playsInline
            preload="auto"
          />
          <video
            ref={bRef}
            src={src}
            className={layerClass}
            style={{
              transitionDuration: `${CROSSFADE_MS}ms`,
              opacity: active === 1 ? 1 : 0,
              zIndex: active === 1 ? 2 : 1,
            }}
            muted
            playsInline
            preload="auto"
          />
        </>
      )}
    </div>
  );
};

export default HeroVideoBackground;
