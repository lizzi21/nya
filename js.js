
  window.addEventListener('load', () => {
    document.querySelector('.footer').classList.add('show');
  });


 window.addEventListener('scroll', () => {
    const footer = document.getElementById('footer');
    const triggerPoint = window.scrollY + window.innerHeight;
    const revealPoint = document.body.scrollHeight * 0.85; 
  
    if (triggerPoint >= revealPoint) {
      footer.classList.add('show');
    }
  });
  
  
  
  
  
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const url = this.getAttribute('href');
  
      fetch(url, { method: 'HEAD' })
        .then(response => {
          if (response.ok) {
            window.location.href = url;
          } else {
            window.location.href = '404.html';
          }
        })
        .catch(() => {
          window.location.href = '404.html';
        });
    });
  });
  
  





  const imageWrapper = document.querySelector('.image-wrapper');
const hoverCircle = document.querySelector('.hover-circle');

imageWrapper.addEventListener('click', () => {
  imageWrapper.classList.toggle('clicked');
});

imageWrapper.addEventListener('mousemove', (e) => {
  const rect = imageWrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  hoverCircle.style.left = `${x}px`;
  hoverCircle.style.top = `${y}px`;
  hoverCircle.style.display = 'block';
});

imageWrapper.addEventListener('mouseleave', () => {
  hoverCircle.style.display = 'none';
});
