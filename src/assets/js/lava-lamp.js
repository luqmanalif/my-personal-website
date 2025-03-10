// Add this to a new file: src/assets/js/lava-lamp.js

document.addEventListener('DOMContentLoaded', function() {
    // Create the lava lamp container
    const lavaLampContainer = document.createElement('div');
    lavaLampContainer.className = 'lava-lamp-background';
    
    // Create blobs
    for (let i = 0; i < 8; i++) {
      const blob = document.createElement('div');
      blob.className = 'blob';
      lavaLampContainer.appendChild(blob);
    }
    
    // Add the container to the body
    document.body.appendChild(lavaLampContainer);
    
    // Function to add some randomness to blob movement
    function randomizeBlobs() {
      const blobs = document.querySelectorAll('.blob');
      
      blobs.forEach(blob => {
        // Random horizontal position adjustment
        const leftPos = parseFloat(getComputedStyle(blob).left);
        const newLeft = leftPos + (Math.random() * 10 - 5) + '%';
        blob.style.left = newLeft;
        
        // Random size adjustment
        const size = 70 + Math.random() * 100;
        blob.style.width = `${size}px`;
        blob.style.height = `${size}px`;
        
        // Random animation duration adjustment
        const duration = 15 + Math.random() * 15;
        blob.style.animationDuration = `${duration}s`;
      });
    }
    
    // Add subtle randomness occasionally
    setInterval(randomizeBlobs, 30000);
    
    // Initial randomization
    setTimeout(randomizeBlobs, 1000);
  });