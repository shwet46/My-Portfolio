import { useEffect, useRef } from "react";

const Banner = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let dots = [];
    const arrayColors = ["#eee", "#545454", "#596d91", "#bb5a68", "#696541"];


    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initializeDots = () => {
      dots = [];
      for (let index = 0; index < 50; index++) {
        dots.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 5,
          color: arrayColors[Math.floor(Math.random() * arrayColors.length)],
        });
      }
    };

    const drawDots = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((dot) => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleMouseMove = (event) => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawDots();
      const mouse = {
        x: event.pageX - canvas.getBoundingClientRect().left,
        y: event.pageY - canvas.getBoundingClientRect().top,
      };
      dots.forEach((dot) => {
        const distance = Math.sqrt(
          (mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2
        );
        if (distance < 300) {
          ctx.strokeStyle = dot.color;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(dot.x, dot.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const addEventListeners = () => {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseout", drawDots);
      window.addEventListener("resize", () => {
        resizeCanvas();
        initializeDots();
        drawDots();
      });
    };

    resizeCanvas();
    initializeDots();
    drawDots();
    addEventListeners();

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseout", drawDots);
      window.removeEventListener("resize", drawDots);
    };
  }, []);

  return (
    <div className="relative w-full h-screen flex items-center justify-center">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-300 uppercase">
          React Banner
        </h1>
        <button className="mt-6 px-6 py-2 border border-gray-300 rounded-full bg-gradient-to-b from-transparent to-gray-100 text-white hover:bg-purple-300 hover:text-black shadow-lg transition duration-500">
          Hover Me
        </button>
      </div>
    </div>
  );
};

export default Banner;
