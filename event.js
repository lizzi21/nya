const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const eventsData = [
  {
    title: "Хэллоуин",
    date: "31.10.25",
    description: "16:00",
    description: "Надень своё самое страшное настроение — впереди мурашки и смех!",
  },
  {
    title: "Бэк ту Скулл",
    date: "05.09.2025",
    description: "15:00",
    description: "Учебник по математике загрустил — его замучили проблемы!",
  },
  {
    title: "Новогодняя Вечеринка",
    date: "22.12.25",
    description: "12:00",
    description: "Великолепное праздничное приключение с Сантой! Он обещал захватить с собой лучшие шутки!",
  }
];

let currentIndex = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active');

    const info = slide.querySelector('.slide-info');
    if (info) info.classList.remove('visible');

    if (index === currentIndex) {
      slide.classList.add('active');

      const event = eventsData[index];
      if (info) {
        info.querySelector('h2').textContent = event.title;
        const p = info.querySelectorAll('p');
        p[0].textContent = event.date;
        p[1].textContent = event.description;

        setTimeout(() => {
          info.classList.add('visible');
        }, 100);
      }
    }
  });
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlider();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlider();
});

updateSlider();
