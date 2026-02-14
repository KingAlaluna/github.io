//відобразити інформацію про аніме
function infoAnime(anime) {
  noneAllPage();
  html.pageAnime.style.display = 'flex';
  
  //загальне
  html.nameViewingAnime.textContent = anime?.title ? anime.title : 'невідомо...';
  html.synopsisAnime.textContent = anime?.synopsis ? anime.synopsis : 'Опис відсутній...';
  html.video.src = anime.trailer.embed_url;
  
  
  //додати інформацію
  html.containerInfoAnime1.innerHTML = `
    <img class="anime-3" src="${anime?.images?.jpg?.image_url ? anime.images.jpg.image_url : ''}">
    
    <div id="container-info-anime-2">
      <h2>Оцінка: ${(anime?.score ? anime.score + '★' : 'невідомо')}</h2>
      
      <h3 class="text-no-margin">Кількість оцінок: ${(anime?.scored_by ? anime.scored_by : 'невідомо')}</h3>
      <h3 class="text-no-margin">Місце в рейтингу: ${(anime?.rank ? anime.rank : 'невідомо')}</h3>
      <h3 class="text-no-margin">Місце по популярності: ${(anime?.popularity ? anime.popularity : 'невідомо')}</h3>
      <h3 class="text-no-margin">Кількість користувачів: ${(anime?.members ? anime.members : 'невідомо')}</h3>
      <h3 class="text-no-margin">Додали в вибранне: ${(anime?.favorites ? anime.favorites : 'невідомо')}</h3>
      <h3 class="text-no-margin">Цільова аудиторія: ${(anime?.demographics?.[0]?.name ? anime.demographics[0].name : 'невідомо')}</h3>
      <h3 class="text-no-margin">Вікове обмеження: ${(anime?.rating ? anime.rating : 'невідомо')}</h3>
      <h3 class="text-no-margin">Рік випуску: ${(anime?.year ? anime.year : 'невідомо')}</h3>
      <h3 class="text-no-margin">Місяць випуску: ${(anime?.season ? anime.season : 'невідомо')}</h3>
      <h3 class="text-no-margin">Повна дата випуску: ${(anime?.aired?.string ? anime.aired.string : 'невідомо')}</h3>
      <h3 class="text-no-margin">Кількість серій: ${(anime?.episodes ? anime.episodes : 'невідомо')}</h3>
      <h3 class="text-no-margin">Тривалість серії: ${(anime?.duration ? anime.duration : 'невідомо')}</h3>
      <h3 class="text-no-margin">Статус: ${(anime?.status ? anime.status : 'невідомо')}</h3>
      <h3 class="text-no-margin">Чи виходить тепер: ${(anime?.airing ? 'Так' : 'Ні')}</h3>
      <h3 class="text-no-margin">Студія: ${(anime?.studios?.length > 0 ? anime.studios.map(e => e.name).join(', ') : 'невідомо')}</h3>
      <h3 class="text-no-margin">Тип: ${(anime?.type ? anime.type : 'невідомо')}</h3>
      <h3 class="text-no-margin">Первинне джерело: ${(anime?.source ? anime.source : 'невідомо')}</h3>
      <h3 class="text-no-margin">Жанри: ${(anime?.genres?.length > 0 ? anime.genres.map(e => e.name).join(', ') : 'невідомо')}</h3>
      <h3 class="text-no-margin">Теми: ${(anime?.themes?.length > 0 ? anime.themes.map(e => e.name).join(', ') : 'невідомо')}</h3>
      
      <br>
    </div>
  `;
}


//обробник системноі кнопки назад
window.history.replaceState({ page: 'main' }, '');

window.onpopstate = function(event) {
    noneAllPage(); 
    html.mainPage.style.display = 'flex';
};
