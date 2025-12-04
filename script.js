// -------------------------------
// Scripts
// -------------------------------

// -------------------------------
// Static Noise Background
// -------------------------------
const canvas = document.getElementById("staticCanvas");
const ctx = canvas.getContext("2d");

// Adjust canvas size to window
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

// Render TV static animation
function renderStatic() {
  const imageData = ctx.createImageData(canvas.width, canvas.height);
  const pixels = imageData.data;

  for (let i = 0; i < pixels.length; i += 4) {
    const shade = Math.random() * 255;

    pixels[i] = shade;     // R
    pixels[i + 1] = shade; // G
    pixels[i + 2] = shade; // B
    pixels[i + 3] = 255;   // A
  }

  ctx.putImageData(imageData, 0, 0);
  requestAnimationFrame(renderStatic);
}

renderStatic();


// -------------------------------
// ADD ANY OTHER SCRIPT FUNCTIONS HERE
// Example: Nav animations, buttons, interactions, etc.
// -------------------------------

// Example placeholder:
console.log("script.js loaded successfully.");
