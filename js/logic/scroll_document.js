const scroll_document = document.querySelectorAll('.scroll_document');
const button_top_document_2 = document.getElementById('button_top_document_2');
const button_bottom_document_2 = document.getElementById('button_bottom_document_2');

//function scroll document
function scrollToTop() {
  scroll_document.forEach(e => {
    e.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}
function scrollToBottom() {
  scroll_document.forEach(e => {
    e.scrollTo({
      top: e.scrollHeight,
      behavior: 'smooth',
    });
  });
}

//click button scroll
button_top_document.addEventListener('click', () => {
  scrollToTop();
});
button_bottom_document.addEventListener('click', () => {
  scrollToBottom();
});
button_top_document_2.addEventListener('click', () => {
  scrollToTop();
});
button_bottom_document_2.addEventListener('click', () => {
  scrollToBottom();
});


//стилі для кнопок під час скрола
function styleScroll() {
  scroll_document.forEach(e => {
    e.addEventListener('scroll', () => {
      let scrollTop = e.scrollTop;
      let scrollHeight = e.scrollHeight;
      let clientHeight = e.clientHeight;
      let timer = null;
      
      button_top_document.style.display = 'none';
      button_bottom_document.style.display = 'none';
      
      clearTimeout(timer);
      
      timer = setTimeout(() => {
        if (scrollTop > clientHeight * 0.5) {
          button_top_document.style.display = 'block';
        }
        if (scrollTop + clientHeight < scrollHeight - clientHeight * 0.5) {
          button_bottom_document.style.display = 'block';
        }
      }, 10);
    });
  });
}
styleScroll();

