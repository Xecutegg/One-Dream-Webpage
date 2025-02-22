let navbar = document.querySelector('.header .flex .navbar');
let menubtn = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menubtn.onclick = () => {
    navbar.classList.toggle('active');
    menubtn.classList.toggle('fa-times'); 
}

window.onscroll = () => {
    navbar.classList.remove('active');
    menubtn.classList.remove('fa-times');

    if(window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

function toggleAnswer(element) {
    let answer = element.querySelector('.faq-answer');
    let sign = element.querySelector('.faq-question span');
    if (answer.style.display === 'block') {
        answer.style.display = 'none';
        sign.textContent = '+';
    } else {
        answer.style.display = 'block';
        sign.textContent = '-';
    }
}

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const country = document.getElementById('country').value;
    const message = document.getElementById('message').value;
    
    console.log("Form Submitted:", { name, email, phone, country, message });
    alert("Message Sent Successfully!");
    
    this.reset();
});