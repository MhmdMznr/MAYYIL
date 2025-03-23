const stars = document.querySelectorAll('.stars span');
const ratingValue = document.getElementById('rating-value');

stars.forEach(star => {
    star.addEventListener('click', () => {
        const value = star.getAttribute('data-value');
        ratingValue.value = value;

        stars.forEach(s => s.classList.remove('active'));
        for (let i = 0; i < value; i++) {
            stars[i].classList.add('active');
        }
    });
});

const form = document.getElementById('contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const rating = ratingValue.value;

    console.log('Form Submitted:', { name, email, message, rating });
    alert('Thank you for contacting us! We will get back to you soon.');
    form.reset();
});