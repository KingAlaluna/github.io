let anime_year = null;
let anime_type = null;
let anime_genre = null;
let anime_studio = null;

let server_anime_top = null;
let server_anime = null;


//пагинация
const pgBtnLeft = document.getElementById('pg-btn-left');
const pgBtnRight = document.getElementById('pg-btn-right');
const paginationText = document.getElementById('pagination-text');

let paginationDocument = 1;
let allPaginationDocument = 5;
let paginationAllAnime = 25;

function pagTextContent() {
  paginationText.textContent = paginationDocument + ' / ' + allPaginationDocument;
}
pagTextContent();


//кнопки пагинации
pgBtnLeft.addEventListener('click', async () => {
  if (paginationDocument > 1) {
    paginationDocument -= 1;
    pagTextContent();
    clearRecommengAnime();
        
    let url = 'https://api.jikan.moe/v4/anime';
    
    if (anime_year) {
      url += '?start_date=' + encodeURIComponent(anime_year) + '-01-01&end_date=' + encodeURIComponent(anime_year) + '-12-31' + '&page=' + encodeURIComponent(paginationDocument);
    } else if (anime_type) {
      url += '?type=' + encodeURIComponent(anime_type) + '&page=' + encodeURIComponent(paginationDocument);
    } else if (anime_genre) {
      url += '?genres=' + encodeURIComponent(anime_genre) + '&page=' + encodeURIComponent(paginationDocument);
    } else if (anime_studio) {
      url += '?producers=' + encodeURIComponent(anime_studio) + '&page=' + encodeURIComponent(paginationDocument);
    } else if (animeSearch) {
      url += '?q=' + encodeURIComponent(querys) + '&page=' + encodeURIComponent(paginationDocument);
    } else {
      url += '?page=' + encodeURIComponent(paginationDocument);
    }
    
    server_anime = await fetch(url);
    
    sort_anime();
  }
});

pgBtnRight.addEventListener('click', async () => {
  if (paginationDocument < allPaginationDocument) {
    paginationDocument += 1;
    pagTextContent();
    clearRecommengAnime();
    
    let url = 'https://api.jikan.moe/v4/anime';
    
    if (anime_year) {
      url += '?start_date=' + encodeURIComponent(anime_year) + '-01-01&end_date=' + encodeURIComponent(anime_year) + '-12-31' + '&page=' + encodeURIComponent(paginationDocument);
    } else if (anime_type) {
      url += '?type=' + encodeURIComponent(anime_type) + '&page=' + encodeURIComponent(paginationDocument);
    } else if (anime_genre) {
      url += '?genres=' + encodeURIComponent(anime_genre) + '&page=' + encodeURIComponent(paginationDocument);
    } else if (anime_studio) {
      url += '?producers=' + encodeURIComponent(anime_studio) + '&page=' + encodeURIComponent(paginationDocument);
    } else if (animeSearch) {
      url += '?q=' + encodeURIComponent(querys) + '&page=' + encodeURIComponent(paginationDocument);
    } else {
      url += '?page=' + encodeURIComponent(paginationDocument);
    }
    
    server_anime = await fetch(url);
    
    sort_anime();
  }
});



//отображения аниме
const container_recommend_amine = document.getElementById('container_recommend_amine');
const container_top_10_anime = document.getElementById('container_top_10_anime');
const document_sort_anime = document.getElementById('document_sort_anime');
const button_sort_anime = document.getElementById('button_sort_anime');
const text_top_anime = document.getElementById('text_top_anime');
const text_recommend_anime = document.getElementById('text_recommend_anime');

let click_sort = false;

button_sort_anime.addEventListener('click', () => {
  if (anime_sort == true && anime_sort == false) {
    none_all_docunent();
    main_document.style.display = 'flex';
    button_detalis_click = false;
    anime_sort = false;
  } else {
  if (click_sort == false) {
    document_sort_anime.style.display = 'flex';
    click_sort = true;
    anime_sort = true;
  } else {
    document_sort_anime.style.display = 'none';
    click_sort = false;
    anime_sort = true;
  }
  }
});


//logic sort anime
async function sort_top_anime() {
  try {
  //server logic
  const anime_top_data = await server_anime_top.json();
  const anime_top = anime_top_data.data;
  let anime_top_25 = anime_top.slice(0, 25);
  //кліентська логіка
  anime_top_25.forEach(anime => {
    //container
    let container_anime = document.createElement('div');
    container_anime.className = 'anime_container_1';
    //img
    let top_25_anime = document.createElement('div');
    top_25_anime.className = 'anime_1 all_anime';
    top_25_anime.style.backgroundImage = 'url(' + anime.images.jpg.image_url + ')';
    //назва аніме
    let title_anime = document.createElement('h3');
    title_anime.className = 'anime_title';
    title_anime.textContent = anime.title;
    //оцінка
    let score_anime = document.createElement('div');
    score_anime.className = 'anime_score';
    score_anime.textContent = anime.score ? '★' + anime.score : '';
    //місце
    let rank_anime = document.createElement('div');
    rank_anime.className = 'anime_rank';
    rank_anime.textContent = anime.rank ? '#' + anime.rank : '';
    //віковий рейтинг
    let rating_anime = document.createElement('div');
    rating_anime.className = 'anime_rating';
    let rating_value = anime.rating ?? '';
    if (rating_value !== '') {
      let num = rating_value.match(/\d+/);
      rating_value = num ? num[0] + '+' : '';
    }
    rating_anime.textContent = rating_value;
    //рік
    let year_anime = document.createElement('div');
    year_anime.className = 'anime_year';
    year_anime.textContent = (anime.year ? anime.year : '');
    //click
    container_anime.addEventListener('click', () => {
      information_anime(anime);
    });
    //вложеність
    container_top_10_anime.append(container_anime);
    container_anime.append(top_25_anime, title_anime);
    top_25_anime.append(score_anime, year_anime, rank_anime, rating_anime);
  });
  } catch {
  }
}

async function sort_anime() {
  try {
  //recommend anime
  const anime_data = await server_anime.json();
  const anime = anime_data.data;
  let anime_recommend = anime.slice(0, 25);
  
  //пагинация
  allPaginationDocument = anime_data.pagination.last_visible_page;
  pagTextContent();
  
  //на сайті
  anime_recommend.forEach(anime => {
    //container
    let container_anime = document.createElement('div');
    container_anime.className = 'anime_container_2';
    //img
    let recommend_anime = document.createElement('div');
    recommend_anime.className = 'anime_2 all_anime';
    recommend_anime.style.backgroundImage = 'url(' + anime.images.jpg.image_url + ')';
    //назва аніме
    let title_anime = document.createElement('h3');
    title_anime.className = 'anime_title';
    title_anime.textContent = anime.title;
    //оцінка
    let score_anime = document.createElement('div');
    score_anime.className = 'anime_score';
    score_anime.textContent = anime.score ? '★' + anime.score : '';
    //місце
    let rank_anime = document.createElement('div');
    rank_anime.className = 'anime_rank';
    rank_anime.textContent = anime.rank ? '#' + anime.rank : '';
    //віковий рейтинг
    let rating_anime = document.createElement('div');
    rating_anime.className = 'anime_rating';
    let rating_value = anime.rating ?? '';
    if (rating_value !== '') {
      let num = rating_value.match(/\d+/);
      rating_value = num ? num[0] + '+' : '';
    }
    rating_anime.textContent = rating_value;
    //рік
    let year_anime = document.createElement('div');
    year_anime.className = 'anime_year';
    year_anime.textContent = (anime.year ? anime.year: '');
    //click
    container_anime.addEventListener('click', () => {
      information_anime(anime);
    });
    //вложеність
    container_recommend_amine.append(container_anime);
    container_anime.append(recommend_anime, title_anime);
    recommend_anime.append(score_anime, year_anime, rank_anime, rating_anime);
  });
  } catch {
  }
}

async function start_anime() {
  paginationDocument = 1;
  pagTextContent();
  
  
  clear_anime();
  text_top_anime.textContent = 'Топ 25:';
  text_recommend_anime.textContent = 'Рекомендую:';
  try {
    server_anime_top = await fetch('https://api.jikan.moe/v4/top/anime');
    server_anime = await fetch('https://api.jikan.moe/v4/anime');
    //server_anime = await fetch('https://api.jikan.moe/v4/anime' + '?page=' + encodeURIComponent(paginationDocument));
    sort_top_anime();
    sort_anime();
  } catch {
  }
  animeSearch = false;
}
start_anime();

function clear_anime() {
  container_top_10_anime.innerHTML = '';
  container_recommend_amine.innerHTML = '';
  //document_sort_anime.style.display = 'none';
  none_all_docunent();
  main_document.style.display = 'flex';
  button_detalis_click = false;
  click_sort = false;
}

function clearRecommengAnime() {
  container_recommend_amine.innerHTML = '';
}

//click sort anime
const button_year_sort = document.querySelectorAll('.button_year_sort');
const button_type_sort = document.querySelectorAll('.button_type_sort');
const button_genre_sort = document.querySelectorAll('.button_genre_sort');
const button_studio_sort = document.querySelectorAll('.button_studio_sort');

button_year_sort.forEach(e => {
  e.addEventListener('click', async () => {
    paginationDocument = 1;
    pagTextContent();
    
    
    let year = e.dataset.year;
    let text = e.dataset.text;
    anime_year = year;
    clear_anime();
    text_top_anime.textContent = 'Топ 25 ' + text + ':';
    text_recommend_anime.textContent = 'Рекомендую ' + text + ':';
    try {
      server_anime_top = await fetch('https://api.jikan.moe/v4/anime?start_date=' + encodeURIComponent(anime_year) + '-01-01&end_date=' + encodeURIComponent(anime_year) + '-12-31&order_by=score&sort=desc');
      server_anime = await fetch('https://api.jikan.moe/v4/anime?start_date=' + encodeURIComponent(anime_year) + '-01-01&end_date=' + encodeURIComponent(anime_year) + '-12-31');
      //server_anime = await fetch('https://api.jikan.moe/v4/anime?start_date=' + encodeURIComponent(anime_year) + '-01-01&end_date=' + encodeURIComponent(anime_year) + '-12-31' + '&page=' + encodeURIComponent(paginationDocument));
      sort_top_anime();
      sort_anime();
    } catch {
    }
    anime_sort = true;
    animeSearch = false;
  });
});

button_type_sort.forEach(e => {
  e.addEventListener('click', async () => {
    paginationDocument = 1;
    pagTextContent();
    
    
    let type = e.dataset.type;
    let text = e.dataset.text;
    anime_type = type;
    clear_anime();
    text_top_anime.textContent = 'Топ 25 ' + text + ':';
    text_recommend_anime.textContent = 'Рекомендую ' + text + ':';
    try {
      server_anime_top = await fetch('https://api.jikan.moe/v4/top/anime?type=' + encodeURIComponent(anime_type));
      server_anime = await fetch('https://api.jikan.moe/v4/anime?type=' + encodeURIComponent(anime_type));
      //server_anime = await fetch('https://api.jikan.moe/v4/anime?type=' + encodeURIComponent(anime_type) + '&page=' + encodeURIComponent(paginationDocument));
      sort_top_anime();
      sort_anime();
    } catch {
    }
    anime_sort = true;
    animeSearch = false;
  });
});

button_genre_sort.forEach(e => {
  e.addEventListener('click', async () => {
    paginationDocument = 1;
    pagTextContent();
    
    
    let genre = e.dataset.genre;
    let text = e.dataset.text;
    anime_genre = genre;
    clear_anime();
    text_top_anime.textContent = 'Топ 25 ' + text + ':';
    text_recommend_anime.textContent = 'Рекомендую ' + text + ':';
    try {
      server_anime_top = await fetch('https://api.jikan.moe/v4/anime?genres=' + encodeURIComponent(anime_genre) + '&order_by=score&sort=desc');
      server_anime = await fetch('https://api.jikan.moe/v4/anime?genres=' + encodeURIComponent(anime_genre));
      //server_anime = await fetch('https://api.jikan.moe/v4/anime?genres=' + encodeURIComponent(anime_genre) + '&page=' + encodeURIComponent(paginationDocument));
      sort_top_anime();
      sort_anime();
    } catch {
    }
    anime_sort = true;
    animeSearch = false;
  });
});

button_studio_sort.forEach(e => {
  e.addEventListener('click', async () => {
    paginationDocument = 1;
    pagTextContent();
    
    
    let studio = e.dataset.studio;
    let text = e.dataset.text;
    anime_studio = studio;
    clear_anime();
    text_top_anime.textContent = 'Топ 25 ' + text + ':';
    text_recommend_anime.textContent = 'Рекомендую ' + text + ':';
    try {
      server_anime_top = await fetch('https://api.jikan.moe/v4/anime?producers=' + encodeURIComponent(anime_studio) + '&order_by=score&sort=desc');
      server_anime = await fetch('https://api.jikan.moe/v4/anime?producers=' + encodeURIComponent(anime_studio));
      //server_anime = await fetch('https://api.jikan.moe/v4/anime?producers=' + encodeURIComponent(anime_studio) + '&page=' + encodeURIComponent(paginationDocument));
      sort_top_anime();
      sort_anime();
    } catch {
    }
    anime_sort = true;
    animeSearch = false;
  });
});



