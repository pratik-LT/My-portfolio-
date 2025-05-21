// Toggle menu and navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Close menu/navbar on scroll
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// Typed.js initialization
const typed = new Typed('.multiple-text', {
    strings: ['Computer Science Student.', 'Web Designer.', 'App Developer.'],
    typeSpeed: 80,
    backSpeed: 80,         // Fixed typo: should be 'backSpeed' not 'backspeed'
    backDelay: 1000,
    loop: true
});


// Prevent default for dummy links
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
    });
});



document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    fetch('https://formsubmit.co/ajax/pratikp5967@gmail.com', {
        method: 'post'
    })
    .then(response => {
        if (response.ok) {
            document.getElementById('form-alert').style.display = 'block';
            form.reset();
        } else {
            alert("❌ Something went wrong. Please try again.");
        }
    })
    .catch(error => {
        alert("❌ Network error. Please try again later.");
        console.error(error);
    });
});


 

