let form = document.querySelector('form');
let modal = document.querySelector('.success-modal');
let overlay = document.querySelector('.overlay');
let close = document.querySelector('.close');

// open
form.addEventListener('submit', (e) => {
  e.preventDefault();
  form.reset();

  modal.classList.add('active');
  overlay.classList.add('active');  
});

// close by close button
close.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');  
});

// close by overlay
overlay.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');  
});