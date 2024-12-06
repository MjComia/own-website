const dynamicBackground = document.querySelector('.welcome-luzon');

const gradients = [
    'linear-gradient(to right, #ff7e5f, #feb47b)',
    'linear-gradient(to right, #6a11cb, #2575fc)',
    'linear-gradient(to right, #12c2e9, #c471ed, #f64f59)',
    'linear-gradient(to right, #fbc2eb, #a6c1ee)',
    'linear-gradient(to right, #ff9a9e, #fecfef)',
    'linear-gradient(to right, #c2e59c, #64b3f4)',
];
let currentIndex = 0;

function changeTextGradient() {
    dynamicBackground.style.background = gradients[currentIndex];
    dynamicBackground.style.backgroundClip = 'text';
    dynamicBackground.style.webkitBackgroundClip = 'text';
    dynamicBackground.style.webkitTextFillColor = 'transparent';

    currentIndex = (currentIndex + 1) % gradients.length;
}

setInterval(changeTextGradient, 5000);
