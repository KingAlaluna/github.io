//логіка пошуку аніме
const input_search = document.getElementById('input_search');
const button_search = document.getElementById('button_search');

let animeSearch = false;
let querys = null;


async function performSearch() {
  const query = input_search.value.trim();
  querys = query;
  if (query) {
    clear_anime();
    text_top_anime.textContent = 'Топ 25 ' + query + ':';
    text_recommend_anime.textContent = 'Рекомендую ' + query + ':';
    
    try {
      server_anime_top = await fetch('https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(query) + '&order_by=score&sort=desc');
      server_anime = await fetch('https://api.jikan.moe/v4/anime?q=' + encodeURIComponent(query));
      
      sort_top_anime();
      sort_anime();
    } catch (e) {
      console.error("Ошибка поиска");
    }
    
    input_search.value = '';
    input_search.blur();
    animeSearch = true;
  }
}

button_search.addEventListener('click', performSearch);

input_search.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    performSearch();
  }
});
