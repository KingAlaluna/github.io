const button_detalis_weblite = document.getElementById('button_detalis_weblite');

button_detalis_weblite.addEventListener('click', () => {
  if (button_detalis_click == false) {
    none_all_docunent();
    document_weblite_detalis.style.display = 'flex';
    button_detalis_click = true;
  } else {
    document_weblite_detalis.style.display = 'none';
    main_document.style.display = 'flex';
    button_detalis_click = false;
  }
  click_sort = false;
  none_document(document_sort_anime);
});