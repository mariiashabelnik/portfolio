import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let lastScrollY = 0;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create dots
    const dots = [];
    const dotCount = 80; // Reduced from 100 for smoother performance
    for (let i = 0; i < dotCount; i++) {
      dots.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speed: Math.random() * 0.3 + 0.1, // Reduced speed for smoother movement
      });
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw dots
      ctx.fillStyle = 'rgba(150, 150, 150, 0.3)'; // Increased from 0.2
      dots.forEach(dot => {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size * 1.2, 0, Math.PI * 2); // Increased size
        ctx.fill();
      });

      // Draw connections
      ctx.strokeStyle = 'rgba(150, 150, 150, 0.15)'; // Increased from 0.1
      ctx.lineWidth = 1; // Increased from 0.8
      dots.forEach((dot1, i) => {
        dots.slice(i + 1).forEach(dot2 => {
          const dx = dot1.x - dot2.x;
          const dy = dot1.y - dot2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 180) { // Increased connection distance
            ctx.beginPath();
            ctx.moveTo(dot1.x, dot1.y);
            ctx.lineTo(dot2.x, dot2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Handle scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollDiff = scrollY - lastScrollY;
      
      dots.forEach(dot => {
        dot.y += scrollDiff * dot.speed * 0.15; // Reduced movement speed
        if (dot.y > canvas.height) dot.y = 0;
        if (dot.y < 0) dot.y = canvas.height;
      });
      
      lastScrollY = scrollY;
    };

    window.addEventListener('scroll', handleScroll);
    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10"
    />
  );
};

export default AnimatedBackground; 