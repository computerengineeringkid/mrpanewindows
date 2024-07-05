document.addEventListener('DOMContentLoaded', function() {
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    document.addEventListener('mousemove', (e) => {
        customCursor.style.left = `${e.clientX}px`;
        customCursor.style.top = `${e.clientY}px`;
    });

    document.addEventListener('mousedown', () => {
        customCursor.classList.add('clicked');
    });

    document.addEventListener('mouseup', () => {
        customCursor.classList.remove('clicked');
    });

    document.addEventListener('mouseenter', () => {
        customCursor.classList.remove('hidden');
    });

    document.addEventListener('mouseleave', () => {
        customCursor.classList.add('hidden');
    });

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Change cursor color when hovering over the blue areas
    const blueElements = document.querySelectorAll('header, nav, footer');
    blueElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            customCursor.classList.add('black');
        });
        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('black');
        });
    });
});
