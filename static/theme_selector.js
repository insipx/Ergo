function set_theme(theme) {
  document.getElementById("themeCSS").href = `/${theme}.css`;
}

function update_theme(event) {
  let theme = event.target.value;
  console.log(theme);
  set_theme(theme);
}

function main() {
  const selector = document.getElementById("theme_selector");

  selector.addEventListener("change", update_theme);
}
