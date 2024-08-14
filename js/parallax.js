window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;

    // Slow scroll for image section
    const imageSection = document.querySelector('.parallax-image');
    imageSection.style.transform = 'translateY(' + scrollPosition * 0.5 + 'px)';

    // Faster scroll for text section
    const textSection = document.querySelector('.parallax-text-section');
    textSection.style.transform = 'translateY(' + scrollPosition * 1.2 + 'px)';
});