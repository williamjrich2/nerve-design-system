import { useEffect, useRef } from 'react';

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    const stars: { rx: number; ry: number; z: number; radius: number; alpha: number; driftX: number; driftY: number }[] = [];
    const numStars = Math.floor((width * height) / 4500);

    for (let i = 0; i < numStars; i++) {
      stars.push({
        rx: Math.random(),
        ry: Math.random(),
        z: Math.random() * 2 + 0.5,
        radius: Math.random() * 0.5 + 0.1,
        alpha: Math.random() * 0.8 + 0.1,
        driftX: 0,
        driftY: 0,
      });
    }

    let animationFrameId: number;
    let scrollY = window.scrollY;
    let targetScrollY = window.scrollY;

    const handleScroll = () => {
      targetScrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const render = () => {
      scrollY += (targetScrollY - scrollY) * 0.1;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
      ctx.fillRect(0, 0, width, height);

      stars.forEach((star) => {
        star.driftX += 0.05 * star.z;
        star.driftY -= 0.05 * star.z;

        const parallaxOffsetY = scrollY * (star.z * 0.15);
        const parallaxOffsetX = scrollY * (star.z * 0.02);

        let x = star.rx * width + star.driftX - parallaxOffsetX;
        let y = star.ry * height + star.driftY - parallaxOffsetY;

        let drawX = x % width;
        if (drawX < 0) drawX += width;

        let drawY = y % height;
        if (drawY < 0) drawY += height;

        ctx.beginPath();
        ctx.arc(drawX, drawY, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: '#000' }}
    />
  );
}
