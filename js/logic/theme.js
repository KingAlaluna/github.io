//id
const button_theme = document.getElementById('button_theme');

let dark_theme = false;

function dark_themes() {
  //css
  document.documentElement.style.setProperty('--border-color', '#CBD2DC');
  document.documentElement.style.setProperty('--color-000', '#fff');
  document.documentElement.style.setProperty('--color-999', '#333');
  document.documentElement.style.setProperty('--color-333', '#999');
  document.documentElement.style.setProperty('--gradient-1', 'linear-gradient(165deg, #101229 0%, #161E4F 40%, #101010 90%)');
  document.documentElement.style.setProperty('--gradient-2', 'linear-gradient(155deg, #101010 10%, #161E4F 60%, #101229 100%)');
  document.documentElement.style.setProperty('--gradient-3', 'linear-gradient(155deg, #21517F 0%, #092C64 90%)');
  document.documentElement.style.setProperty('--gradient-4', 'linear-gradient(155deg, #0a1929 0%, #1e3a5f 30%, #0d1b2a 70%)');
  //active button bottom banner
  active_button_bottom_banner.style.background = 'var(--gradient-5)';
  //theme
  button_theme.style.backgroundImage = 'url(img/style/dark_theme.svg)';
  dark_theme = true;
}

function light_themes() {
  //css
  document.documentElement.style.setProperty('--border-color', '#101229');
  document.documentElement.style.setProperty('--color-000', '#000');
  document.documentElement.style.setProperty('--color-999', '#999');
  document.documentElement.style.setProperty('--color-333', '#333');
  document.documentElement.style.setProperty('--gradient-1', 'linear-gradient(165deg, #F6FBFF 0%, #E8B6C2 90%)');
  document.documentElement.style.setProperty('--gradient-2', 'linear-gradient(155deg, #E8B6C2 0%, #F6FBFF 90%)');
  document.documentElement.style.setProperty('--gradient-3', 'linear-gradient(155deg, #F0A7B2 0%, #B86776 90%)');
  document.documentElement.style.setProperty('--gradient-4', 'linear-gradient(155deg, #FEE4E5 0%, #fff 30%, #DDCDCD 70%)');
  //active button bottom banner
  active_button_bottom_banner.style.background = 'var(--gradient-5)';
  //theme
  button_theme.style.backgroundImage = 'url(img/style/light_theme.svg)';
  dark_theme = false;
}

button_theme.addEventListener('click', () => {
  if (dark_theme == false) {
    dark_themes();
  } else {
    light_themes();
  }
});


//для системноі теми
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  dark_theme = true;
  dark_themes();
} else {
  dark_theme = false;
  light_themes();
}
