document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        document.getElementById('menu-toggle').checked = false;
    });
});

document.addEventListener('DOMContentLoaded', () => {n
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1 // Triggers when 10% of the element is visible
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));
});

document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.getElementById('running-text');
    const textToType = "Hello, Welcome to my Portfolio!";
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
        textElement.textContent = ""; 
        index = 0; 
        startTyping(); 
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

