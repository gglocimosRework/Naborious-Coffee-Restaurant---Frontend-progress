const menuWrapper = document.querySelector('.menu-wrapper');
const links = document.querySelectorAll('.scroll-link');
const menu = document.getElementById("mobileMenu");

const cards = document.querySelectorAll('.product-card');
const modal = document.getElementById('productModal');
const overlay = document.getElementById('overlay');

const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalPrice = document.getElementById('modalPrice');
const closeModal = document.getElementById('closeModal');


links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();

    const targetId = link.dataset.target; 
    const targetSection = document.getElementById(targetId);

    targetSection.scrollIntoView({ behavior: 'smooth' });

     document.getElementById("mobileMenu").classList.remove("active");
  });
});

function toggleMenu() {
    menu.classList.toggle("active");
}


document.addEventListener('mousemove', (e) => {
    const triggerDistance = 105.5; 
if (window.innerWidth - e.clientX <= triggerDistance) {
        menu.classList.add('active'); 
} else if (e.clientX < window.innerWidth - menu.offsetWidth) {
        menu.classList.remove('active');
    }
});

cards.forEach(card => {
  card.addEventListener('click', () => {
    modalImage.src = card.dataset.image;
    modalTitle.textContent = card.dataset.title;
    modalDescription.textContent = card.dataset.description;
    modalPrice.textContent = card.dataset.price;

    modal.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

function closeProductModal() {
  modal.classList.remove('active');
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

overlay.addEventListener('click', closeProductModal);
closeModal.addEventListener('click', closeProductModal);

document.querySelectorAll('.buy-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    alert('Ordering system coming soon!');
  });
});

let darkmode = localStorage.getItem('darkmode') === 'true';
const themeSwitch = document.getElementById('theme-switch');

const enableDarkmode = () => {
  document.body.classList.add('darkmode');
  localStorage.setItem('darkmode', 'true');
}

const disableDarkmode = () => {
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkmode', 'false');
}

updateTheme();

function updateTheme() {
  
  if (darkmode) {
    enableDarkmode()
   } else {
    disableDarkmode()
   }
  }

  themeSwitch.addEventListener('click', () => {
    darkmode = !darkmode;
    updateTheme();
    updateLogo();

  if (darkmode) {
    enableDarkmode();
  } else {
    disableDarkmode();
  }
  });

  const logoBrand = document.getElementById('logo');

  const lightLogoSrc = './images/logo.jpeg';

  const darkLogoSrc = './images/logo-dark.jpeg';

  function updateLogo() {
    if (document.body.classList.contains('darkmode')) {
      logoBrand.src = darkLogoSrc;
    } else {
      logoBrand.src = lightLogoSrc;
    }
  }

  updateLogo();