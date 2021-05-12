function showModal() {
  modal.classList.remove('hide');
  document.querySelector('body').style.overflow = "hidden";
}

function hideModal() {
  modal.classList.add('hide');
  document.querySelector('body').style.overflow = "";
}

const modal = document.querySelector('.modal');
let buttons = [];
function update() {
  buttons.push(document.querySelector('.promo__button'));
buttons.push(document.querySelector('.header__button'));
document.querySelectorAll('.catalog__button').forEach(button => {
  buttons.push(button);
})

buttons.forEach(button => {
  button.addEventListener("click", e => {
    showModal();
  })
})
}
update();
modal.addEventListener('click', e => {
  if ( (!e.target.classList.contains('modal__content') && !e.target.classList.contains('contact-form') && !e.target.classList.contains('contact-form__input') && !e.target.classList.contains('modal__title') && !e.target.classList.contains('consultation__button')) || e.target.classList.contains('modal__close')) {
    hideModal();
  }
})

