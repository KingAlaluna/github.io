//сховати сторінки
function noneAllPage() {
  html.allPage.forEach(p => {
    p.style.display = 'none';
  });
  data.animeSort = false;
  html.inputSearch.value = '';
  data.animeSearch = false;
}
noneAllPage();

html.mainPage.style.display = 'flex';

function nonePage(page) {
  page.style.display = 'none';
  data.animeSort = false;
}

html.btnMainPage.addEventListener('click', () => {
  noneAllPage();
  html.mainPage.style.display = 'flex';
  clearAnime();
  clearFilter();
  data.paginationPage = 1;
  pagTextContent();
  startAnime();
});


//міняємо стилі активних кнопок
html.btnBottomBanner.forEach(e => {
  e.addEventListener('click', () => {
    data.activeBtnBottomBanner.style.background = 'var(--gradient-3)';
    data.activeBtnBottomBanner = e;
    data.activeBtnBottomBanner.style.background = 'var(--gradient-5)';
  });
});

