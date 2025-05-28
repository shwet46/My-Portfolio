import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const textArray = ['Shweta!', 'a Student', 'a Programmer', 'a Developer'];
  const typingSpeed = 150;
  const deletingSpeed = 75;
  const delayBeforeDelete = 2000;
  const [isTyping, setIsTyping] = useState(true);

  const canvasRef = useRef(null);
  const stars = useRef([]);
  const greyShades = ['#ddd', '#ccc', '#bbb', '#aaa', '#999']; 

  // Typing animation logic
  useEffect(() => {
    let timer;

    if (!isDeleting && displayedText !== textArray[index]) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + textArray[index].charAt(displayedText.length));
      }, typingSpeed);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(displayedText.slice(0, -1));
      }, deletingSpeed);
    } else if (displayedText === textArray[index] && !isDeleting) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBeforeDelete);
    } else if (displayedText === '' && isDeleting) {
      setIsDeleting(false);
      setIndex((prevIndex) => (prevIndex + 1) % textArray.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, index, textArray]);

  // Canvas animation logic
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const createStars = () => {
      stars.current = [];
      const totalStars = 350; 
      for (let i = 0; i < totalStars; i++) {
        const isEdge = Math.random() < 0.6; 
        const x = isEdge
          ? Math.random() < 0.5
            ? Math.random() * (canvas.width * 0.3) 
            : canvas.width * 0.7 + Math.random() * (canvas.width * 0.3) 
          : Math.random() * canvas.width; 

        stars.current.push({
          x: x,
          y: Math.random() * canvas.height,
          size: Math.random() * 1 + 0.5, 
          color: greyShades[Math.floor(Math.random() * greyShades.length)],
        });
      }
    };

    const drawStars = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.current.forEach((star) => {
        ctx.fillStyle = star.color;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    const handleMouseMove = (event) => {
      if (window.innerWidth < 768) return; 

      drawStars();
      const mouse = {
        x: event.clientX,
        y: event.clientY,
      };
      stars.current.forEach((star) => {
        const distance = Math.sqrt((mouse.x - star.x) ** 2 + (mouse.y - star.y) ** 2);
        if (distance < 100) {
          ctx.strokeStyle = star.color;
          ctx.lineWidth = 0.3;
          ctx.beginPath();
          ctx.moveTo(star.x, star.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      });
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createStars();
      drawStars();
    };

    if (window.innerWidth >= 768) {
      createStars();
      drawStars();
      window.addEventListener('mousemove', handleMouseMove);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="home" className="relative pt-28 lg:pt-32">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none block md:block hidden"
      ></canvas>

      <div className="container-h h-[600px] flex items-center lg:gap-2 flex-col md:mb-6 relative z-10">
        <figure className="w-full max-w-[310px]">
          <img
            src="photos/batman.png"
            alt="Profile"
            width={300}
            height={300}
            className="w-full"
          />
        </figure>
        <h1 className="md:text-[55px] text-[26px] font-vsFont text-white">
        Hi, I'm <span className="text-amber-300">{displayedText}<span className={`blinking-cursor ${isTyping ? '' : 'hidden'}` + "text-zinc-300"}>_</span></span>

        </h1>
        <div className="w-full max-w-[820px] text-center">
          <h2 className="font-vsFont md:text-xl text-amber-200 text-md reveal-up">
            I'm into doing creative stuff and problem solving. I use my problem solving ability for competitive programming and combination of both for developing cool projects.<br/>
            To know more about me, 
            scroll down
            <span
              className="material-symbols-rounded text-amber-200 text-3xl animate-bounce ml-2 relative top-4"
              aria-hidden="true"
            >
              arrow_downward
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Home;