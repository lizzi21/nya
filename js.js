
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
  
  
  
  
  
  /*document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const url = this.getAttribute('href');
  
      fetch(url)
        .then(response => {
          if (!response.ok) {
            // Если статус не 2xx, редирект на 404
            window.location.href = '404.html';
            return;
          }
          return response.text();
        })
        .then(text => {
          // Если содержимое пустое — тоже редирект на 404
          if (!text || text.trim() === '') {
            window.location.href = '404.html';
          } else {
            window.location.href = url;
          }
        })
        .catch(() => {
          // В случае ошибок сети и прочего — редирект
          window.location.href = '404.html';
        });
    });
  });
  
  */
  





  const imageWrapper = document.querySelector('.image-wrapper');
const hoverCircle = document.querySelector('.hover-circle');

imageWrapper.addEventListener('click', () => {
  imageWrapper.classList.toggle('clicked');
});

  imageWrapper.addEventListener('mousemove', (e) => {
    const rect = imageWrapper.getBoundingClientRect();
    const x = e.clientX;
    const y = e.clientY;

    hoverCircle.style.left = `${x}px`;
    hoverCircle.style.top = `${y}px`;
    hoverCircle.style.opacity = 1;
  });

  imageWrapper.addEventListener('mouseleave', () => {
    hoverCircle.style.opacity = 0;
  });






  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = '404.html';
    });
  });

 
 src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.min.js"
  
    const openBook = document.getElementById("openBook");
    const viewer = document.getElementById("bookViewer");
    const closeViewer = document.getElementById("closeViewer");
    const canvas = document.getElementById("pdfCanvas");
    const ctx = canvas.getContext("2d");
    let pdfDoc = null;
    let pageNum = 1;

    pdfjsLib.getDocument("book.pdf").promise.then(function (pdfDoc_) {
      pdfDoc = pdfDoc_;
      renderPage(pageNum);
    });

    function renderPage(num) {
      pdfDoc.getPage(num).then(function (page) {
        const viewport = page.getViewport({ scale: 1.5 });
        canvas.height = viewport.height;
        canvas.width = viewport.width;
        const renderContext = {
          canvasContext: ctx,
          viewport: viewport,
        };
        page.render(renderContext);
      });
    }

    document.getElementById("nextPage").addEventListener("click", () => {
      if (pageNum < pdfDoc.numPages) {
        pageNum++;
        renderPage(pageNum);
      }
    });

    document.getElementById("prevPage").addEventListener("click", () => {
      if (pageNum > 1) {
        pageNum--;
        renderPage(pageNum);
      }
    });

    openBook.addEventListener("click", () => {
      viewer.style.display = "flex";
    });

    closeViewer.addEventListener("click", () => {
      viewer.style.display = "none";
    });