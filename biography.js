// biography.js

// 1. Wait for the entire HTML document to load before running the code
document.addEventListener('DOMContentLoaded', function() {
    
    // 2. Select all buttons that have the class 'detail-toggle'
    const detailButtons = document.querySelectorAll('.detail-toggle');
    
    // 3. Loop through each button we found
    detailButtons.forEach(button => {
        
        // 4. Add an event listener to each button that listens for a 'click'
        button.addEventListener('click', function() {
            
            // 'this' refers to the specific button that was clicked
            
            // 5. Find the next sibling element that has the class 'detailed-info'
            const detailSection = this.nextElementSibling;
            
            // 6. Toggle the 'hidden' class on that detail section
            // If it has 'hidden', it removes it (making it visible)
            // If it doesn't have 'hidden', it adds it (making it hidden)
            detailSection.classList.toggle('hidden');

            // 7. Change the button text based on the current state
            if (detailSection.classList.contains('hidden')) {
                // If the info is hidden, button should say 'Read Detailed Analysis'
                this.textContent = 'Read Detailed Analysis';
            } else {
                // If the info is visible, button should say 'Hide Analysis'
                this.textContent = 'Hide Analysis';
            }
        });
    });
});