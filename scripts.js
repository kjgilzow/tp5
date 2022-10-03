window.onload = function() {
  s = document.createElement("style");
  s.innerHTML = "#title { font-size: 350% }";
  document.head.appendChild(s);

  document.querySelector("#ingredients").onclick = function() {
    this.classList.toggle("showMe");
  }

  document.querySelector("#equipment").onclick = function() {
    this.classList.toggle("showMe");
  }

  document.querySelector("#directions").onclick = function() {
    this.classList.toggle("showMe");
  }

  document.querySelector("#extra").onclick = function() {
    this.classList.toggle("showMe");
  }

  document.querySelector("#directions ol").innerHTML += "<li>Enjoy your cookies and have a magical day!</li>";
}