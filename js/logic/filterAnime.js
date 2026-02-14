//очистити фільтр
function clearFilter() {
  data.animeYear = null;
  data.animeType = null;
  data.animeGenre = null;
  data.animeStudio = null;
}


//шаблон фільтра
function filter(props) {
  props.btn.forEach(e => {
    e.addEventListener('click', async () => {
      clearAnime();
      clearFilter();
      data.paginationPage = 1;
      pagTextContent();
      
      
      let filter = e.dataset[props.dataset];
      let text = e.dataset.text;
      
      data[props.anime] = filter;
      
      html.textTopAnime.textContent = `Топ 25 ${text}:`;
      html.textRecomendAnime.textContent = `Рекомендую ${text}:`;
      
      data.serverTopAnime = await fetch(`https://api.jikan.moe/v4/anime?${props.animeUrl()}&order_by=score&sort=desc`);
      data.serverAnime = await fetch(`https://api.jikan.moe/v4/anime?${props.animeUrl()}&page=${encodeURIComponent(data.paginationPage)}`);
        
      sortTopAnime();
      sortAnime();
    });
  });
}


// роки фільтер 
filter({
  btn: allBtnYear,
  dataset: 'year',
  anime: 'animeYear',
  animeUrl: () => `start_date=${encodeURIComponent(data.animeYear)}-01-01&end_date=${encodeURIComponent(data.animeYear)}-12-31`,
});


//тип фільтер
filter({
  btn: allBtnType,
  dataset: 'type',
  anime: 'animeType',
  animeUrl: () => `type=${encodeURIComponent(data.animeType)}`,
});


//жанри фільтр
filter({
  btn: allBtnGenre,
  dataset: 'genre',
  anime: 'animeGenre',
  animeUrl: () => `genres=${encodeURIComponent(data.animeGenre)}`,
});


//студія фільтр
filter({
  btn: allBtnStudio,
  dataset: 'studio',
  anime: 'animeStudio',
  animeUrl: () => `producers=${encodeURIComponent(data.animeStudio)}`,
});

