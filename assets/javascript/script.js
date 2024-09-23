
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const arrowRight = document.querySelector('.arrow-right');
const arrowLeft = document.querySelector('.arrow-left');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
    currentSlide = index;
}


if (arrowRight) {
    arrowRight.addEventListener('click', () => {
        const nextSlide = (currentSlide + 1) % slides.length;
        showSlide(nextSlide);
    });
}

if (arrowLeft) {
    arrowLeft.addEventListener('click', () => {
        const prevSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(prevSlide);
    });
}


const loginModal = document.querySelector('.login-modal');
const loginBtn = document.querySelector('.login');
const loginCloseBtn = document.querySelector('.login-modal .close-btn');


if (loginBtn && loginModal) {
    loginBtn.addEventListener('click', function (e) {
        e.preventDefault();
        loginModal.classList.add('active');
    });
}

if (loginCloseBtn) {
    loginCloseBtn.addEventListener('click', function () {
        loginModal.classList.remove('active');
    });
}

window.addEventListener('click', function (event) {
    if (event.target === loginModal) {
        loginModal.classList.remove('active');
    }
});


const productCards = document.querySelectorAll('.product-card');
const productModal = document.querySelector('.custom-modal');


productCards.forEach(card => {
    card.addEventListener('click', () => {
       
        const title = card.getAttribute('data-title');
        const imageSrc = card.getAttribute('data-image');
        const description = card.getAttribute('data-description');
        const price = card.getAttribute('data-price');

       
        if (productModal) {
            productModal.querySelector('.modal-product-title').innerText = title;
            productModal.querySelector('.modal-product-image').src = imageSrc;
            productModal.querySelector('.modal-product-description').innerText = description;
            productModal.querySelector('.modal-product-price').innerText = price;

            
            productModal.classList.add('active');
        }
    });
});


const closeButtons = document.querySelectorAll('.close-btn');
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.custom-modal');
        if (modal) {
            modal.classList.remove('active');
        }
    });
});

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('custom-modal')) {
        event.target.classList.remove('active');
    }
});
