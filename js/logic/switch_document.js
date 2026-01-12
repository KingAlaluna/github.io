//класи
const all_document = document.querySelectorAll('.documents');
const button_switch_document = document.querySelectorAll('.button_switch_document');
const button_bottom_banner = document.querySelectorAll('.button_bottom_banner');
//айді
const button_main_document = document.getElementById('button_main_document');
const main_document = document.getElementById('main_document');
const document_search = document.getElementById('document_search');
const document_profile = document.getElementById('document_profile');
const document_register = document.getElementById('document_register');
const document_anime = document.getElementById('document_anime');
const document_weblite_detalis = document.getElementById('document_weblite_detalis');

let button_detalis_click = false;
let anime_sort = false;

//сховати сторінки
function none_all_docunent() {
  all_document.forEach(documents => {
    documents.style.display = 'none';
  });
}
function none_document(documents) {
  documents.style.display = 'none';
}

button_main_document.addEventListener('click', () => {
  none_all_docunent();
  button_detalis_click = false;
  anime_sort = false;
  main_document.style.display = 'flex';
  start_anime();
});

//міняємо стилі активних кнопок
let active_button_bottom_banner = button_main_document;

button_bottom_banner.forEach(button => {
  button.addEventListener('click', () => {
    active_button_bottom_banner.style.background = 'var(--gradient-3)';
    active_button_bottom_banner = button;
    active_button_bottom_banner.style.background = 'var(--gradient-5)';
  });
});
