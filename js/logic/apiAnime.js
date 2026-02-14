//пагінація
function pagTextContent() {
  html.paginationText.textContent = data.paginationPage + ' / ' + data.allPaginationPage;
}
pagTextContent();


//обробник пагінації
async function pagination() {
  pagTextContent();
  clearRecommengAnime();
  
  let url = 'https://api.jikan.moe/v4/anime';
  
  if (data.animeYear) {
    url += '?start_date=' + encodeURIComponent(data.animeYear) + '-01-01&end_date=' + encodeURIComponent(data.animeYear) + '-12-31' + '&page=' + encodeURIComponent(data.paginationPage);
  } else if (data.animeType) {
    url += '?type=' + encodeURIComponent(data.animeType) + '&page=' + encodeURIComponent(data.paginationPage);
  } else if (data.animeGenre) {
    url += '?genres=' + encodeURIComponent(data.animeGenre) + '&page=' + encodeURIComponent(data.paginationPage);
  } else if (data.animeStudio) {
    url += '?producers=' + encodeURIComponent(data.animeStudio) + '&page=' + encodeURIComponent(data.paginationPage);
  } else if (data.animeSearch) {
    url += '?q=' + encodeURIComponent(data.querys) + '&page=' + encodeURIComponent(data.paginationPage);
  } else {
    url += '?page=' + encodeURIComponent(data.paginationPage);
  }
  
  data.serverAnime = await fetch(url);
  
  sortAnime();
}


//кнопка пагінации назад
html.pgBtnLeft.addEventListener('click', async () => {
  if (data.paginationPage > 1) {
    data.paginationPage -= 1;
    pagination();
  }
});


//кнопка пагінації далі
html.pgBtnRight.addEventListener('click', async () => {
  if (data.paginationPage < data.allPaginationPage) {
    data.paginationPage += 1;
    pagination();
  }
});



//відображення аниме
html.btnSortAnime.addEventListener('click', () => {
  if (data.animeSort == false) {
    html.pageSortAnime.style.display = 'flex';
    data.animeSort = true;
  } else {
    html.pageSortAnime.style.display = 'none';
    data.animeSort = false;
  }
});



//
//показати / сортувати топ аніме
//
//загальна логіка
function animeFor(animeArray, containers, version) {
  animeArray.forEach(anime => {

    // дані
    const ratingMatch = anime.rating?.match(/\d+/);
    const rating = ratingMatch ? ratingMatch[0] + '+' : '';
    const score = anime.score ? '★' + anime.score : '';
    const rank = anime.rank ? '#' + anime.rank : '';

    // створюємо головний контейнер аніме
    const container = document.createElement('div');
    container.className = `anime-container-${version || 1}`;

    // html аніме
    container.innerHTML = `
      <div class="anime-${version || 1} all-anime" style="background-image: url('${anime.images.jpg.image_url}')">
        <div class="anime-score">${score}</div>
        <div class="anime-year">${anime.year || ''}</div>
        <div class="anime-rank">${rank}</div>
        <div class="anime-rating">${rating}</div>
      </div>
      <h3 class="anime-title">${anime.title}</h3>
    `;
  
    //дії
    container.addEventListener('click', () => {
      infoAnime(anime);
      window.history.pushState({page: 'anime'}, '');
    });
    html[containers].append(container);
    
  });
}


//топ аніме
async function sortTopAnime() {
  try {
  //server logic
  const animeTopData = await data.serverTopAnime.json();
  const animeTop = animeTopData.data;
  let animeTop25 = animeTop.slice(0, 25);
  
  //кліентська логіка
  animeFor(animeTop25, 'containerTop10Anime');
  } catch {
  }
}


//аніме рекомендації
async function sortAnime() {
  try {
  //recommend anime
  const animeData = await data.serverAnime.json();
  const anime = animeData.data;
  let animeRecommend = anime.slice(0, 25);
  
  //пагінація
  data.allPaginationPage = animeData.pagination.last_visible_page;
  pagTextContent();
  
  //на сайті
  animeFor(animeRecommend, 'containerRecommendAmine', 2);
  } catch {
  }
}


//старт відображення аніме
async function startAnime() {
  paginationDocument = 1;
  pagTextContent();
  
  
  clearAnime();
  html.textTopAnime.textContent = 'Топ 25:';
  html.textRecomendAnime.textContent = 'Рекомендую:';
  try {
    data.serverTopAnime = await fetch('https://api.jikan.moe/v4/top/anime');
    data.serverAnime = await fetch('https://api.jikan.moe/v4/anime');
    
    sortTopAnime();
    sortAnime();
  } catch {
  }
  animeSearch = false;
}
startAnime();


//очистить списки аниме
function clearAnime() {
  html.containerTop10Anime.innerHTML = '';
  html.containerRecommendAmine.innerHTML = '';
  noneAllPage();
  html.mainPage.style.display = 'flex';
}


//очтстити рекомендації аніме
function clearRecommengAnime() {
  html.containerRecommendAmine.innerHTML = '';
}


