const quotes = [
    "Simplicity is the ultimate sophistication. - Leonardo Da Vinci",
    "Code is the modern Invention",
    "Learning never exhausts the mind. - Leonardo Da Vinci",
    "Build not only systems, but understanding.",
    "The noblest pleasure is the joy of understanding.- Leonardo Da Vinci"
];

let quoteIndex = 0;
const quoteElement = document.createElement("div");
quoteElement.style.position = "fixed";
quoteElement.style.bottom = "20px";
quoteElement.style.left = "50%";
quoteElement.style.transform = "translateX(-50%)";
quoteElement.style.color = "#00ff90";
quoteElement.style.fontStyle = "italic";
quoteElement.style.opacity = "0.4"; // increase from 0.2 to 0.4 or more
quoteElement.style.fontSize = "1rem";
quoteElement.style.zIndex = "10";
quoteElement.style.pointerEvents = "none";
quoteElement.style.textAlign = "center";
quoteElement.style.maxWidth = "90%";
quoteElement.style.lineHeight = "1.5";
quoteElement.style.textShadow = "0 0 3px #00ff90, 0 0 5px #00ff90";

document.body.appendChild(quoteElement);

function rotateQuote(){
    quoteElement.textContent = quotes[quoteIndex];
    quoteIndex = (quoteIndex + 1) % quotes.length;

}

rotateQuote();
setInterval(rotateQuote, 7000);

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});


const glow = document.createElement("div");
glow.style.position = "fixed";
glow.style.width= "12px";
glow.style.height= "12px";
glow.style.borderRadius= "50%";
glow.style.background= "#00ff90";
glow.style.boxShadow= "0 0 8px #00ff90";
glow.style.pointerEvents ="none";
glow.style.zIndex= "10";
document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {
  glow.style.top = `${e.clientY}px`;
  glow.style.left = `${e.clientX}px`;
});

const terminalLines = [
    "> Initializing Pablo Baena's Portfolio.....",
    "> Loading modules: background.js, skills.py, passion.css",
    "> Connected to brain.core [ok]",
    "> Welcome, visitor_0137"
];

let tIndex = 0;
let charIndex= 0;
const terminal = document.getElementById("terminalText");

function typeTerminal(){
    if (tIndex < terminalLines.length){
        const line = terminalLines[tIndex];
        if (charIndex < line.length){
            terminal.textContent += line.charAt(charIndex);
            charIndex++;
            setTimeout(typeTerminal,40);
        }else{
            terminal.textContent += "\n";
            tIndex++;
            charIndex = 0;
            setTimeout(typeTerminal, 500);
        }
    }
}

window.onload = () =>{
    typeTerminal();
    rotateQuote();
};

const typingText = [
  "Simplicity is the ultimate sophistication.",
  "Learning never exhausts the mind.",
  "Crafting code with curiosity and courage.",
  "From circuits to syntax, the evolution continues."
];

let typingIndex = 0;
let letterIndex = 0;

function typeWriterEffect() {
  const element = document.getElementById("typewriter");
  if (!element) return;

  if (letterIndex < typingText[typingIndex].length) {
    element.textContent += typingText[typingIndex].charAt(letterIndex);
    letterIndex++;
    setTimeout(typeWriterEffect, 70);
  } else {
    setTimeout(() => {
      element.textContent = "";
      letterIndex = 0;
      typingIndex = (typingIndex + 1) % typingText.length;
      typeWriterEffect();
    }, 3000);
  }
}

// Start after terminal finishes
setTimeout(typeWriterEffect, 5000);
