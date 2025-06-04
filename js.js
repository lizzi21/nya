
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
  
  