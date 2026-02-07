document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for the "reveal" fade-in animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    // Select all elements with the 'reveal' class and start observing
    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('running-text');
    const textToType = "Hi Welcome to my Portfolio";
    let index = 0;

    function startTyping() {
        // Typing Phase
        if (index < textToType.length) {
            textElement.textContent += textToType.charAt(index);
            index++;
            // Typing speed: 100ms per character
            setTimeout(startTyping, 100);
        } 
        else {
            setTimeout(resetAndRepeat, 3000);
        }
    }

    function resetAndRepeat() {
        // Reset Phase
        textElement.textContent = ""; // Clear the text
        index = 0; // Reset the counter
        startTyping(); // Start again
    }

    // Initialize the first run
    startTyping();
});

const profileImg = document.querySelector('.profile-image-container');

if (profileImg) {
    profileImg.addEventListener('mousemove', (e) => {
        const { offsetWidth: width, offsetHeight: height } = profileImg;
        const { offsetX: x, offsetY: y } = e;
        
        const xMove = (x / width - 0.5) * 20;
        const yMove = (y / height - 0.5) * 20;
        
        profileImg.style.transform = `perspective(500px) rotateY(${xMove}deg) rotateX(${-yMove}deg) scale(1.1)`;
    });

    profileImg.addEventListener('mouseleave', () => {
        profileImg.style.transform = `rotate(0deg) scale(1)`;
    });
}

