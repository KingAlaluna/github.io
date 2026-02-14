function darkTheme() {
  document.documentElement.dataset.theme = 'dark';
  //активна кнопка нижнього банера
  data.activeBtnBottomBanner.style.background = 'var(--gradient-5)';
  //theme
  html.btnTheme.style.backgroundImage = 'url(img/style/dark-theme.svg)';
  data.darkTheme = true;
}

function lightTheme() {
  document.documentElement.dataset.theme = 'light';
  //активна кнопка нижнього банера
  data.activeBtnBottomBanner.style.background = 'var(--gradient-5)';
  //theme
  html.btnTheme.style.backgroundImage = 'url(img/style/light-theme.svg)';
  data.darkTheme = false;
}

html.btnTheme.addEventListener('click', () => {
  if (data.darkTheme == false) {
    darkTheme();
  } else {
    lightTheme();
  }
});



//для системноі теми
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  darkTheme();
} else {
  lightTheme();
}