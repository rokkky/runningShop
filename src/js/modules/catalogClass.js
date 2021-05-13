class CatalogItem {
  constructor (id, category, imgSrc, name, descr, oldPrice, newPrice) {
    this.id = id;
    this.category = category;
    this.imgSrc = imgSrc;
    this.name = name;
    this.descr = descr;
    this.oldPrice = oldPrice;
    this.newPrice = newPrice;
  }
  render() {
    let item = document.createElement('div');
    item.classList.add('catalog__item');
    item.setAttribute('id', this.id);
    item.innerHTML = `
      <img src="${this.imgSrc}" class="catalog__img" alt="${this.name}">
      <div class="catalog__name">${this.name}</div>
      <div class="catalog__descr">${this.descr}</div>
      <div class="catalog__purchase"> 
        <div class="catalog__price">
          <div class="catalog__old-price">${this.oldPrice}</div> 
          <div class="catalog__current-price">${this.newPrice}</div>
        </div>
        <button class="button catalog__button ">купить</button>
      </div>
     
      `;
      document.querySelector('.catalog__wrapper').append(item);
  }
}

const fitness = [];
const running = [];
const triathlon = [];

const ft1 = new CatalogItem (
  "1",
  "fitness",
  "../img/any_clock.png",
  "Пульсометр Polar FT1",
  "Для первых шагов в тренировках, основанных на сердечном ритме",
  "4750 руб.",
  "4500 руб."
)
fitness.push(ft1);
ft1.render();

const ft2 = new CatalogItem (
  "2",
  "fitness",
  "../img/any_clock.png",
  "Пульсометр Polar FT2",
  "Для первых шагов в тренировках, основанных на сердечном ритме",
  "5000 руб.",
  "4800 руб."
)
fitness.push(ft2);
ft2.render();

const ft3 = new CatalogItem (
  "3",
  "fitness",
  "../img/any_clock.png",
  "Пульсометр Polar FT3",
  "Для первых шагов в тренировках, основанных на сердечном ритме",
  "4000 руб.",
  "3800 руб."
)
fitness.push(ft3);
ft3.render();

const suu1 = new CatalogItem (
  "4",
  "running",
  "../img/any_clock.png",
  "Пульсометр Suunto M1",
  "Пульсометр начального уровня с комфортным тканевым ремешком",
  "5750 руб.",
  "5500 руб."
)
running.push(suu1);


const suu2 = new CatalogItem (
  "5",
  "running",
  "../img/any_clock.png",
  "Пульсометр Suunto M2",
  "Пульсометр начального уровня с комфортным тканевым ремешком",
  "5350 руб.",
  "5100 руб."
)
running.push(suu2);


const suu3 = new CatalogItem (
  "6",
  "running",
  "../img/any_clock.png",
  "Пульсометр Suunto M3",
  "Пульсометр начального уровня с комфортным тканевым ремешком",
  "5150 руб.",
  "4800 руб."
)
running.push(suu3);


const tr1 = new CatalogItem (
  "7",
  "running",
  "../img/any_clock.png",
  "Пульсометр Polar TR1",
  "Улучшенная версия классического пульсометра Polar",
  "6000 руб.",
  "5800 руб."
)
triathlon.push(tr1);


const tr2 = new CatalogItem (
  "8",
  "running",
  "../img/any_clock.png",
  "Пульсометр Polar TR2",
  "Улучшенная версия классического пульсометра Polar",
  "6100 руб.",
  "5900 руб."
)
triathlon.push(tr2);


const tr3 = new CatalogItem (
  "9",
  "running",
  "../img/any_clock.png",
  "Пульсометр Polar TR3",
  "Улучшенная версия классического пульсометра Polar",
  "6200 руб.",
  "6000 руб."
)
triathlon.push(tr3);



const navigation = document.querySelector('.catalog__navigation');
const navigationItems = document.querySelectorAll('.catalog__selector');
const wrapper = document.querySelector('.catalog__wrapper');

navigation.addEventListener('click', e => {
  if (e.target.classList.contains('catalog__selector')) {
    e.target.style.transition = '0.5s';
  navigationItems.forEach(item => {
    item.classList.remove('catalog__selector_active');
  })
  e.target.classList.add('catalog__selector_active');
  }


  if (e.target.classList.contains('fitness')) {
    wrapper.innerHTML = '';
    fitness.forEach(item => {
      item.render();
    })
    buttons = [];
    update();
  } else if (e.target.classList.contains('running')) {
    wrapper.innerHTML = '';
    running.forEach(item => {
      item.render();
    })
    buttons = [];
    update();
  } else if (e.target.classList.contains('triathlon')) {
    wrapper.innerHTML = '';
    triathlon.forEach(item => {
      item.render();
    })
    buttons = [];
    update();
  }
})
