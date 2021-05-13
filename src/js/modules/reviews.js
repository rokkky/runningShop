class Review {
  constructor (imgSrc, name, status, descr) {
    this.imgSrc = imgSrc;
    this.name = name;
    this.status = status;
    this.descr = descr;
  }
  render() {
    let review = document.createElement('div');
    review.classList.add('review__item');
    review.innerHTML = ` 
    <img src="${this.imgSrc}" class="review__img">
          <div class="review__content">
            <div class="review__name">${this.name}</div>
            <div class="review__status">${this.status}</div>
            <div class="review__descr">${this.descr}</div>
          </div>
    `;
    document.querySelector('.review__wrapper').append(review);
  }
}

const irina = new Review (
  "../img/review/irina.png",
  "Ирина Иванченко",
  "2 полумарафона",
  "Не знала, что себе купить - обратилась к ребятам из RunSmart - подобрали пульсометр, который подошёл именно под мои цели и финансовые возможности. Через некоторое время решила обновить гаджет - не раздумывая обратилась туда же. Новые цели - новый гаджет! Спасибо, RunSmart!"
);
const ivan = new Review (
  "../img/review/ivan.png",
  "Иван Сёмочкин",
  "1 полумарафон",
  "Крутая штука-пульсометр. Обычно без них бегал. Оказывается только хуже себе делал. Купил пульсометр, ещё в подарок получил тренировку. Со мной вместе провели первую тренировку, научили пользоваться новым гаджетом. Также объяснили основы анатомии, составили план тренировок на месяц вперёд.С ними подготовился к своему первому полумарафону! Спасибо!!!"
);
const julia = new Review (
  "../img/review/julia.png",
  "Юлия Дашкина",
  "2 полумарафона",
  "Долго не могла начать бегать, т.к. до этого несколько раз начинала, но становилось тяжело и я бросала. От друзей услышала о RunSmart и о беге с контролем пульса и решила попробовать. Позвонила, ребята поинтересовались моими целями и подобрали очень интересный вариант со скидкой! Теперь бегаю и наслаждаюсь бегом! Пробежала уже 2 полумарафона и несколько более коротких забегов и не намерена останавливаться! Спасибо!!!"
)

irina.render();
ivan.render();
julia.render();
