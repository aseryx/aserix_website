import { useEffect, useRef, useState } from 'react';
import { useTheme } from '../../context/ThemeContext.jsx';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);
  const { theme } = useTheme();
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

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let isPaused = false;

    const isDark = theme === 'dark';
    // Brand orange #EB5E28 — tuned per mode so edges read as a graph, not noise
    const nodeRgb = isDark ? '255, 148, 98' : '185, 58, 18';
    const edgeRgb = isDark ? '255, 160, 110' : '160, 55, 22';
    const nodeAlphaRange = isDark ? [0.35, 0.8] : [0.3, 0.7];
    const maxEdgeAlpha = isDark ? 0.4 : 0.3;
    const ringAlpha = isDark ? 0.16 : 0.12;

    const resizeCanvas = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      return { width, height };
    };

    let { width, height } = resizeCanvas();

    const particleCount = Math.min(Math.floor(width / 16), 42);
    const connectionDistance = 150;
    const cellSize = connectionDistance;
    const speed = 0.22;

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * speed;
        this.vy = (Math.random() - 0.5) * speed;
        this.size = Math.random() * 1.8 + 1.4;
        this.alpha =
          nodeAlphaRange[0] + Math.random() * (nodeAlphaRange[1] - nodeAlphaRange[0]);
        this.pulse = Math.random() * Math.PI * 2;
        this.pulseSpeed = 0.008 + Math.random() * 0.012;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += this.pulseSpeed;
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        this.x = Math.max(0, Math.min(width, this.x));
        this.y = Math.max(0, Math.min(height, this.y));
      }

      draw() {
        const glow = 0.85 + Math.sin(this.pulse) * 0.15;
        const r = this.size * glow;

        // Soft halo — reads as a graph node, not a speck
        ctx.beginPath();
        ctx.arc(this.x, this.y, r * 2.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeRgb}, ${ringAlpha * this.alpha})`;
        ctx.fill();

        // Core
        ctx.beginPath();
        ctx.arc(this.x, this.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${nodeRgb}, ${this.alpha})`;
        ctx.fill();
      }
    }

    const init = () => {
      particles = Array.from({ length: particleCount }, () => new Particle());
    };

    const getCellKey = (x, y) => {
      const col = Math.floor(x / cellSize);
      const row = Math.floor(y / cellSize);
      return `${col},${row}`;
    };

    const buildGrid = () => {
      const grid = new Map();
      for (let i = 0; i < particles.length; i++) {
        const key = getCellKey(particles[i].x, particles[i].y);
        if (!grid.has(key)) grid.set(key, []);
        grid.get(key).push(i);
      }
      return grid;
    };

    const drawConnections = (grid) => {
      const checked = new Set();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        const col = Math.floor(p.x / cellSize);
        const row = Math.floor(p.y / cellSize);

        for (let dc = -1; dc <= 1; dc++) {
          for (let dr = -1; dr <= 1; dr++) {
            const neighbors = grid.get(`${col + dc},${row + dr}`);
            if (!neighbors) continue;

            for (const j of neighbors) {
              if (j <= i) continue;
              const pairKey = `${i}-${j}`;
              if (checked.has(pairKey)) continue;
              checked.add(pairKey);

              const q = particles[j];
              const dx = p.x - q.x;
              const dy = p.y - q.y;
              const distance = Math.sqrt(dx * dx + dy * dy);

              if (distance < connectionDistance) {
                const t = 1 - distance / connectionDistance;
                const alpha = t * t * maxEdgeAlpha;
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${edgeRgb}, ${alpha})`;
                ctx.lineWidth = 0.75 + t * 0.75;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(q.x, q.y);
                ctx.stroke();
              }
            }
          }
        }
      }
    };

    const animate = () => {
      if (!isPaused) {
        ctx.clearRect(0, 0, width, height);
        const grid = buildGrid();
        drawConnections(grid);
        for (let i = 0; i < particles.length; i++) {
          particles[i].update();
          particles[i].draw();
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      ({ width, height } = resizeCanvas());
      init();
    };

    const handleVisibilityChange = () => {
      isPaused = document.hidden;
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, [reducedMotion, theme]);

  if (reducedMotion) return null;

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none opacity-80 dark:opacity-85 mix-blend-multiply dark:mix-blend-screen"
      aria-hidden="true"
    />
  );
};

export default ParticlesBackground;
