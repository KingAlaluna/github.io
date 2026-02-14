//логіка пошуку аніме
async function performSearch() {
  const query = html.inputSearch.value.trim();
  data.querys = query;
  if (query) {
    clearAnime();
    clearFilter();
    data.paginationPage = 1;
    pagTextContent();
    
    html.textTopAnime.textContent = 'Топ 25 ' + query + ':';
    html.textRecomendAnime.textContent = 'Рекомендую ' + query + ':';
    
    try {
      data.serverTopAnime = await fetch('https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(query) + '&order_by=score&sort=desc');
      data.serverAnime = await fetch('https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(query));
      
      sortTopAnime();
      sortAnime();
    } catch (e) {
      console.error("Ошибка поиска");
    }
    
    html.inputSearch.blur();
    data.animeSearch = true;
  }
}


html.btnSearch.addEventListener('click', performSearch);

html.inputSearch.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});
