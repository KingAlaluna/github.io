//фільтр жанри шаблон кнопки
function btnGenre(data, text) {
  html.containerSortGenre.insertAdjacentHTML('beforeend', `
    <button class="btn-sort btn-genre-sort" data-genre="${data}" data-text="${text}">${text}</button>
  `);
  return html.containerSortGenre.lastElementChild;
}


//фільтр тип шаблон кнопки
function btnType(data, text) {
  html.containerSortType.insertAdjacentHTML('beforeend', `
    <button class="btn-sort btn-type-sort" data-type="${data}" data-text="${text}">${text}</button>
  `);
  return html.containerSortType.lastElementChild;
}


//фільтр рік шаблон кнопки
function btnYear(data) {
  html.containerSortYear.insertAdjacentHTML('beforeend', `
    <button class="btn-sort btn-year-sort" data-year="${data}" data-text="за ${data} рік">${data}</button>
  `);
  return html.containerSortYear.lastElementChild;
}


//фільтр студія шаблон кнопки
function btnStudio(data, text) {
  html.containerSortStudio.insertAdjacentHTML('beforeend', `
    <button class="btn-sort btn-studio-sort" data-studio="${data}" data-text="Студії ${text}">${text}</button>
  `);
  return html.containerSortStudio.lastElementChild;
}



//всі кнопки жанрів
const allBtnGenre = [
  btnGenre(1, 'Екшен'),
  btnGenre(2, 'Пригоди'),
  btnGenre(4, 'Комедія'),
  btnGenre(8, 'Драма'),
  btnGenre(10, 'Фентезі'),
  btnGenre(14, 'Жахи'),
  btnGenre(7, 'Містика'),
  btnGenre(22, 'Романтика'),
  btnGenre(24, 'Наукова фантастика'),
  btnGenre(36, 'Повсякденність'),
  btnGenre(30, 'Спорт'),
  btnGenre(37, 'Надприродне'),
  btnGenre(41, 'Трилер'),
  btnGenre(27, 'Сьонен'),
  btnGenre(25, 'Сьоджьо'),
  btnGenre(42, 'Сейнен'),
  btnGenre(43, 'Джьосей'),
  btnGenre(15, 'Для дітей'),
  btnGenre(13, 'Історичні'),
  btnGenre(17, 'Бойові мистецтва'),
  btnGenre(18, 'Меха'),
  btnGenre(19, 'Музика'),
  btnGenre(23, 'Школа'),
  btnGenre(31, 'Суперсили'),
  btnGenre(38, 'Військові'),
  btnGenre(39, 'Поліція'),
  btnGenre(40, 'Психологічні'),
  btnGenre(9, 'Еччі'),
  btnGenre(49, 'Еротика'),
  btnGenre(12, 'Хентай')
];


//всі кнопки типів
const allBtnType = [
  btnType('tv', 'Телесеріали'),
  btnType('movie', 'Фільми'),
  btnType('ova', 'OVA'),
  btnType('special', 'Спешели'),
  btnType('ona', 'ONA'),
  btnType('music', 'Музичні відео')
];


//всі кнопки років
const allBtnYear = [];

let year = 2027;

while (year > 1964) {
  year -= 1;
  allBtnYear.push(btnYear(year));
}


//всі кнопки студій
const allBtnStudio = [
  btnStudio(4, 'Bones'),
  btnStudio(10, 'Production I.G'),
  btnStudio(11, 'Madhouse'),
  btnStudio(18, 'Toei Animation'),
  btnStudio(21, 'Studio Ghibli'),
  btnStudio(28, 'OLM'),
  btnStudio(29, 'Nippon Animation'),
  btnStudio(37, 'Studio Deen'),
  btnStudio(43, 'ufotable'),
  btnStudio(44, 'Shaft'),
  btnStudio(47, 'Sunrise'),
  btnStudio(56, 'A-1 Pictures'),
  btnStudio(79, 'Genco'),
  btnStudio(91, 'Studio Pierrot'),
  btnStudio(112, 'Kyoto Animation'),
  btnStudio(314, 'White Fox'),
  btnStudio(569, 'MAPPA'),
  btnStudio(858, 'Wit Studio'),
  btnStudio(1835, 'CloverWorks')
];
