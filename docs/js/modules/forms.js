const modalForm = document.querySelector(".contact-form__modal");
const title = document.querySelector('.modal__title')
const contactForm = document.querySelector('.contact-form');
const inputs = document.querySelectorAll('.contact-form__input');

  modalForm.addEventListener('submit', e => {
    e.preventDefault();
    showModal();
    modalForm.innerHTML = '';
    title.textContent = 'Готово! Мы перезвоним Вам в течение 10 минут!';  
    setTimeout(() => {
      title.textContent = 'заполните форму заявки и мы перезвоним вам в течении 10 минут';
      modalForm.innerHTML = `
      <input class="contact-form__input" required placeholder="Ваше имя" type="text" name="name">
      <input class="contact-form__input" required placeholder="Ваш Телефон" type="text" name="phone">
      <input class="contact-form__input" required placeholder="Ваш e-mail" type="email" name="email">
      <button class="button consultation__button">заказать консультацию</button>
      `;
    }, 2000);
  })

  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    showModal();
    modalForm.innerHTML = '';
    title.textContent = 'Готово! Мы перезвоним Вам в течение 10 минут!';
    contactForm.reset();
    setTimeout(() => {
      hideModal();
      title.textContent = 'заполните форму заявки и мы перезвоним вам в течении 10 минут';
      modalForm.innerHTML = `
      <input class="contact-form__input" required placeholder="Ваше имя" type="text" name="name">
      <input class="contact-form__input" required placeholder="Ваш Телефон" type="text" name="phone">
      <input class="contact-form__input" required placeholder="Ваш e-mail" type="email" name="email">
      <button class="button consultation__button">заказать консультацию</button>
      `;
    }, 2000);
    })