//text
const name_viewing_anime = document.getElementById('name_viewing_anime');
const img_viewing_anime = document.getElementById('img_viewing_anime');
const score_viewing_anime = document.getElementById('score_viewing_anime');
const score_by_viewing_anime = document.getElementById('score_by_viewing_anime');
const rank_viewing_anime = document.getElementById('rank_viewing_anime');
const popularity_viewing_anime = document.getElementById('popularity_viewing_anime');
const members_viewing_anime = document.getElementById('members_viewing_anime');
const favorites_viewing_anime = document.getElementById('favorites_viewing_anime');
const demographics_viewing_anime = document.getElementById('demographics_viewing_anime');
const rating_viewing_anime = document.getElementById('rating_viewing_anime');
const year_viewing_anime = document.getElementById('year_viewing_anime');
const season_viewing_anime = document.getElementById('season_viewing_anime');
const aired_viewing_anime = document.getElementById('aired_viewing_anime');
const episode_viewing_anime = document.getElementById('episode_viewing_anime');
const duration_viewing_anime = document.getElementById('duration_viewing_anime');
const status_viewing_anime = document.getElementById('status_viewing_anime');
const airing_viewing_anime = document.getElementById('airing_viewing_anime');
const studios_viewing_anime = document.getElementById('studios_viewing_anime');
const type_viewing_anime = document.getElementById('type_viewing_anime');
const source_viewing_anime = document.getElementById('source_viewing_anime');
const genre_viewing_anime = document.getElementById('genre_viewing_anime');
const themes_viewing_anime = document.getElementById('themes_viewing_anime');
const synopsis_anime = document.getElementById('synopsis_anime');
//video
const video = document.getElementById('video');

function information_anime(anime) {
  none_all_docunent();
  document_anime.style.display = 'flex';
  
  //text
  name_viewing_anime.textContent = anime?.title ? anime.title : 'невідомо...';
  img_viewing_anime.src = anime?.images?.jpg?.image_url ? anime.images.jpg.image_url : '';
  
  score_viewing_anime.textContent = 'Оцінка: ' + (anime?.score ? anime.score + '★' : 'невідомо');
  score_by_viewing_anime.textContent = 'Кількість оцінок: ' + (anime?.scored_by ? anime.scored_by : 'невідомо');
  rank_viewing_anime.textContent = 'Місце в рейтингу: ' + (anime?.rank ? anime.rank : 'невідомо');
  popularity_viewing_anime.textContent = 'Місце по популярності: ' + (anime?.popularity ? anime.popularity : 'невідомо');
  members_viewing_anime.textContent = 'Кількість користувачів: ' + (anime?.members ? anime.members : 'невідомо');
  favorites_viewing_anime.textContent = 'Додали в вибранне: ' + (anime?.favorites ? anime.favorites : 'невідомо');
  
  demographics_viewing_anime.textContent = 'Цільова аудиторія: ' + 
    (anime?.demographics?.[0]?.name ? anime.demographics[0].name : 'невідомо');
  
  rating_viewing_anime.textContent = 'Вікове обмеження: ' + (anime?.rating ? anime.rating : 'невідомо');
  year_viewing_anime.textContent = 'Рік випуску: ' + (anime?.year ? anime.year : 'невідомо');
  season_viewing_anime.textContent = 'Місяць випуску: ' + (anime?.season ? anime.season : 'невідомо');
  aired_viewing_anime.textContent = 'Повна дата випуску: ' + (anime?.aired?.string ? anime.aired.string : 'невідомо');
  episode_viewing_anime.textContent = 'Кількість серій: ' + (anime?.episodes ? anime.episodes : 'невідомо');
  duration_viewing_anime.textContent = 'Тривалість серії: ' + (anime?.duration ? anime.duration : 'невідомо');
  status_viewing_anime.textContent = 'Статус: ' + (anime?.status ? anime.status : 'невідомо');
  airing_viewing_anime.textContent = 'Чи виходить тепер: ' + (anime?.airing ? 'Так' : 'Ні');
  
  studios_viewing_anime.textContent = 'Студія: ' + 
    (anime?.studios?.length > 0 ? anime.studios.map(e => e.name).join(', ') : 'невідомо');
  
  type_viewing_anime.textContent = 'Тип: ' + (anime?.type ? anime.type : 'невідомо');
  source_viewing_anime.textContent = 'Первинне джерело: ' + (anime?.source ? anime.source : 'невідомо');
  
  genre_viewing_anime.textContent = 'Жанри: ' + 
    (anime?.genres?.length > 0 ? anime.genres.map(e => e.name).join(', ') : 'невідомо');
  
  themes_viewing_anime.textContent = 'Теми: ' + 
    (anime?.themes?.length > 0 ? anime.themes.map(e => e.name).join(', ') : 'невідомо');
  
  synopsis_anime.textContent = anime?.synopsis ? anime.synopsis : 'Опис відсутній...';
  
  //video
  video.src = anime.trailer.embed_url;
}