// src/assets/js/lava-lamp.js

document.addEventListener('DOMContentLoaded', function() {
    // Create the lava lamp container if it doesn't exist yet
    if (!document.querySelector('.lava-lamp-background')) {
      console.log('Initializing lava lamp effect');
      
      // Create the lava lamp container
      const lavaLampContainer = document.createElement('div');
      lavaLampContainer.className = 'lava-lamp-background';
      
      // Create blobs with full-screen distribution
      for (let i = 0; i < 12; i++) { // Increased number of blobs
        const blob = document.createElement('div');
        blob.className = 'blob';
        
        // Set initial random positions throughout the entire screen
        const leftPos = 5 + Math.random() * 90;
        const topPos = Math.random() * 100;
        
        blob.style.left = `${leftPos}%`;
        blob.style.top = `${topPos}%`;
        
        // Vary blob sizes with more subtle differences
        const size = 80 + Math.random() * 140;
        blob.style.width = `${size}px`;
        blob.style.height = `${size}px`;
        
        // Much longer animation durations for smoother movement
        const duration = 40 + Math.random() * 60; // 40-100s for very slow movements
        const delay = Math.random() * 20; // More staggered starts
        blob.style.animationDuration = `${duration}s`;
        blob.style.animationDelay = `${delay}s`;
        
        // Randomize animation direction
        const animationName = Math.random() > 0.5 ? 'float-up' : 'float-down';
        blob.style.animationName = animationName;
        
        // Add linear animation timing for smoother motion
        blob.style.animationTimingFunction = 'linear';
        
        // Add infinite repetition to avoid restarts
        blob.style.animationIterationCount = 'infinite';
        
        lavaLampContainer.appendChild(blob);
      }
      
      // Insert the container at the beginning of the body
      document.body.insertBefore(lavaLampContainer, document.body.firstChild);
      
      // Function to make very subtle adjustments to blobs
      function subtleAdjustBlobs() {
        const blobs = document.querySelectorAll('.blob');
        
        blobs.forEach(blob => {
          // Very small horizontal position adjustment
          const leftPos = Math.max(5, Math.min(95, parseFloat(blob.style.left) + (Math.random() * 6 - 3)));
          
          // Apply changes with CSS transitions for smoothness
          blob.style.transition = 'left 30s ease-in-out, width 30s ease-in-out, height 30s ease-in-out';
          blob.style.left = `${leftPos}%`;
          
          // Subtle size adjustment
          const currentSize = parseFloat(blob.style.width);
          const newSize = Math.max(80, Math.min(220, currentSize + (Math.random() * 20 - 10)));
          blob.style.width = `${newSize}px`;
          blob.style.height = `${newSize}px`;
        });
      }
      
      // Add very subtle randomness with long intervals
      setInterval(subtleAdjustBlobs, 45000); // Adjust every 45 seconds
      
      // Initial subtle adjustment after a delay
      setTimeout(subtleAdjustBlobs, 15000);
    } else {
      console.log('Lava lamp container already exists');
    }
  });
  
  // Add a window load event to ensure everything is ready
  window.addEventListener('load', function() {
    console.log('Window loaded, ensuring lava lamp is visible');
    const lavaLampContainer = document.querySelector('.lava-lamp-background');
    
    if (lavaLampContainer) {
      // Make sure it's visible and has the right z-index
      lavaLampContainer.style.display = 'block';
      lavaLampContainer.style.zIndex = '-1';
      
      // Ensure all blobs have the appropriate settings
      const blobs = document.querySelectorAll('.blob');
      blobs.forEach(blob => {
        // Make sure transitions are enabled
        blob.style.transition = 'opacity 1s ease-in-out';
      });
    }
  });