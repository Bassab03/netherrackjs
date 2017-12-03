window.addEventListener('load', redirect, false);

function redirect() {
  window.location.href = document.querySelector("#redirecturl").innerHTML;
}
