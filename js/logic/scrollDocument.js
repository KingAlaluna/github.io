//скролити сторінки
function scrollToTop() {
  html.scrollPage.forEach(e => {
    e.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

function scrollToBottom() {
  html.scrollPage.forEach(e => {
    e.scrollTo({
      top: e.scrollHeight,
      behavior: 'smooth',
    });
  });
}

//click button scroll
html.btnTopPage.addEventListener('click', () => {
  scrollToTop();
});
html.btnBottomPage.addEventListener('click', () => {
  scrollToBottom();
});
html.btnTopPage2.addEventListener('click', () => {
  scrollToTop();
});
html.btnBottomPage2.addEventListener('click', () => {
  scrollToBottom();
});


//стилі для кнопок під час скрола
function styleScroll() {
  html.scrollPage.forEach(e => {
    e.addEventListener('scroll', () => {
      let scrollTop = e.scrollTop;
      let scrollHeight = e.scrollHeight;
      let clientHeight = e.clientHeight;
      let timer = null;
      
      html.btnTopPage.style.display = 'none';
      html.btnBottomPage.style.display = 'none';
      
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        if (scrollTop > clientHeight * 0.5) {
          html.btnTopPage.style.display = 'block';
        }
        if (scrollTop + clientHeight < scrollHeight - clientHeight * 0.5) {
          html.btnBottomPage.style.display = 'block';
        }
      }, 10);
    });
  });
}
styleScroll();

