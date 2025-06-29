function createSlider(sliderId, eventsData) {
    const slides = document.querySelectorAll(`#${sliderId} .slide`);
    const prevBtn = document.getElementById(`prev${sliderId.slice(-1)}`);
    const nextBtn = document.getElementById(`next${sliderId.slice(-1)}`);
  
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
            setTimeout(() => info.classList.add('visible'), 100);
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
  }
  
  
  const slider1Events = [
    { title: "Хэллоуин", 
    date: "31/10/25",
    description: "Надень своё самое страшное настроение — впереди мурашки и смех!" },
    
    { title: "Back to School", 
    date: "05/09/25",
     description: "Учебник по математике загрустил — его замучили проблемы!" },
    
     { title: "Новый год", 
        date: "22/12/25", 
        description: "Великолепное праздничное приключение с Сантой! Он обещал захватить с собой лучшие шутки!" }
  ];
  
  const slider2Events = [
    { title: "Карнавальная Вечеринка", 
        date: "07/08/25 12:00", 
        description: "Вечеринка, на которой дети в костюмах бегают быстрее, чем родители успевают говорить «осторожно»!" },
    
        { title: "Кино-Вечер", 
            date: "07/08/25", 
            description: "Внимание на экран! Ну ладно, не на экран — на того, кто опять сел на пульт и переключил мультики!" }
  ];
  
  const slider3Events = [
    { title: "«Важность детства»: Лекция для родителей", 
        date: "28/06/2025", 
        description: "Открытый форум" },
    
        { title: "Let's talk we have so much to say", 
            date: "4/07/2025", 
            description: "Открытый форум" }
  ];
  
 
  createSlider('slider1', slider1Events);
  createSlider('slider2', slider2Events);
  createSlider('slider3', slider3Events);
  