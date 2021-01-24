document.documentElement.classList.remove('no-js');

const links = document.querySelectorAll("a.scroll");
 
for (const link of links) {
  link.addEventListener("click", clickHandler);
}
 
function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;
 
  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

// Animate box-shadow

(function () {
  const safeToAnimate = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  
 if (!safeToAnimate) return;
  
  let xPosition;
  let yPosition;

  let storedXPosition;
  let storedYPosition;

  let windowHeight = window.innerHeight;
  let windowWidth = window.innerWidth;

  function percentage(partialValue, totalValue) {
    return (30 * partialValue) / totalValue;
  }

  // update the CSS vars within request animation frame
  function movePointer() {
    window.requestAnimationFrame(movePointer);
  
    // important, only recalculating if the value changes
    if (storedXPosition === xPosition && storedYPosition === yPosition) return;

    // shift the range from 0 to 100 to -50 to 50 to keep the movement centralised
    x = percentage(xPosition, windowWidth) - 15;
    y = percentage(yPosition, windowHeight) - 15;

    // update the css vars
    document.documentElement.style.setProperty("--mouse-x", `${x}%`);
    document.documentElement.style.setProperty("--mouse-y", `${y}%`);

    // update the stored positions with the current positions
    storedXPosition = xPosition;
    storedYPosition = yPosition;
  }
  window.requestAnimationFrame(movePointer);

  // updating the mouse coordinates
  function updateMouseCoords(event) {
    xPosition = event.clientX; 
    yPosition = event.clientY;
  }
  window.addEventListener("mousemove", updateMouseCoords);

  // update if browser resizes
  function updateWindowSize() {
    windowHeight = window.innerHeight;
    windowWidth = window.innerWidth;
  }
  window.addEventListener("resize", updateWindowSize);
})();