//html елементи
const i = (id) => document.getElementById(id);
const c = (classes) => document.querySelectorAll(`.${classes}`);


const html = {
  //загальне
  weblite: i('weblite'),
  allPage: c('page'),
  inputSearch: i('input-search'),
  video: i('video'),
  
  
  //контейнери
  containerInfoAnime1: i('container-info-anime-1'),
  
  containerTop10Anime: i('container-top-10-anime'),
  containerRecommendAmine: i('container-recommend-amine'),
  
  containerSortGenre: i('container-sort-genre'),
  containerSortType: i('container-sort-type'),
  containerSortYear: i('container-sort-year'),
  containerSortStudio: i('container-sort-studio'),
  
  
  //кнопки
  btnTheme: i('btn-theme-2'),
  btnSearch: i('btn-search'),
  btnswitchPage: c('btn-switch-page'),
  btnBottomBanner: c('btn-bottom-banner'),
  btnMainPage: i('btn-main-page'),
  btnSortAnime: i('btn-sort-anime'),

  btnMyProject: i('btn-my-project'),
  btnDetailsWeblite: i('btn-detalis-weblite'),
  
  btnTopPage: i('btn-top-page'),
  btnBottomPage: i('btn-bottom-page'),
  btnTopPage2: i('btn-top-page-2'),
  btnBottomPage2: i('btn-bottom-page-2'),
  
  pgBtnLeft: i('pg-btn-left'),
  pgBtnRight: i('pg-btn-right'),
  
  
  
  //сторінки
  mainPage: i('main-page'),
  pageSortAnime: i('page-sort-anime'),
  pageSearch: i('page-search'),
  pageMyProject: i('page-my-project'),
  pageWebliteDetalis: i('page-weblite-detalis'),
  pageAnime: i('page-anime'),
  scrollPage: c('scroll-page'),
  
  
  //текст
  textTopAnime: i('text-top-anime'),
  textRecomendAnime: i('text-recommend-anime'),
  nameViewingAnime: i('name-viewing-anime'),
  synopsisAnime: i('synopsis-anime'),
  paginationText: i('pagination-text'),
};


//всі дані
const data = {
  darkTheme: false,
  activeBtnBottomBanner: html.btnMainPage,
  
  
  //аніме
  animeSort: false,
  animeSearch: false,
  querys: null,
  serverTopAnime: null,
  serverAnime: null,
  animeType: null,
  animeYear: null,
  animeGenre: null,
  animeStudio: null,
  
  
  //пагінація
  paginationPage: 1,
  allPaginationPage: 5,
  paginationAllAnime: 25,
};