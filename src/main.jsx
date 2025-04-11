import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import 'lenis/dist/lenis.css';

const loaderStyles = document.createElement('style');
loaderStyles.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');

  .loader-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121212;
    z-index: 9999;
    font-family: 'Fira Code', monospace;
    opacity: 0;
    animation: fadeIn 1s forwards;
    padding: 20px;
    text-align: center;
  }
  
  .loader-container.fade-out {
    animation: fadeOut 1s forwards;
  }
  
  @keyframes fadeIn {
    from { opacity: 1; }
    to { opacity: 1; }
  }
  
  @keyframes fadeOut {
    from { opacity: 1; }
    to { opacity: 0; }
  }
  
  .quote-container {
    position: relative;
    max-width: 1000px;
    padding: 10px;
    word-wrap: break-word;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 600px) {
    .quote-container {
      width: 200px;
    }
  }
  
  .typing-text {
    color: #ffffff;
    font-size: 24px;
    letter-spacing: 0.5px;
    line-height: 1.5;
    margin: 0;
    white-space: nowrap;
    overflow: hidden;
  }
  
  .blinking-cursor {
    color: #fffffd;
    animation: blink 0.7s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
`;
document.head.appendChild(loaderStyles);

(function() {
  const loaderElement = document.createElement('div');
  loaderElement.className = 'loader-container';
  
  loaderElement.innerHTML = `
    <div class="quote-container">
      <p class="typing-text">
        <span id="typed-text"></span><span class="blinking-cursor">|</span>
      </p>
    </div>
  `;
  
  document.body.appendChild(loaderElement);
  
  const fullQuote = window.innerWidth <= 600 ? "Loading..." : "It's not who I am underneath, but what I do, that defines me.";
  const typedTextElement = document.getElementById('typed-text');
  let charIndex = 0;
  
  setTimeout(() => {
    const typeInterval = setInterval(() => {
      if (!typedTextElement) {
        clearInterval(typeInterval);
        return;
      }
      
      if (charIndex < fullQuote.length) {
        typedTextElement.textContent += fullQuote.charAt(charIndex);
        charIndex++;
      } else {
        clearInterval(typeInterval);
        
        setTimeout(() => {
          loaderElement.classList.add('fade-out');
          setTimeout(() => {
            loaderElement.remove();
          }, 1000);
        }, 2000);
      }
    }, 80);
  }, 1000);
})();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);