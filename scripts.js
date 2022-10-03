window.onload = function() {
  s = document.createElement("style");
  s.innerHTML = "h1 { font-size: 350% }";
  document.head.appendChild(s);
}

colorChange = document.querySelector("h1");
colorChange.onclick = function() {
  s.innerHTML = "h1 { color: teal }";
  document.head.appendChild(s);
}

/* const list = element.classList;
list.toggle("colorChange");
*/

function myFunction() {
  document.getElementById("title").classList.toggle("colorChange");
  document.head.appendChild(s);
}
// after I added the appendChild, it toggles when I click on the ingredients header but none of the other headers and not the title itself
//now that I've added the hideMe and showMe code, it no longer toggles on ingredients or at all

// these still are not working, I think because it's calling the header ids not the ul li which is what css made invisible

hideMe = document.querySelector("#ingredients ul li", "#directions ul li", "#equipment ol li", "#icinghead", "#extra ol li");
hideMe.onclick = function() {
  s.innerHTML = "'#ingredients ul li', '#directions ul li', '#equipment ol li', '#icinghead', '#extra ol li' { visibility: visible }";
  s.innerHTML = "'#ingredients ul li', '#directions ul li', '#equipment ol li', '#icinghead', '#extra ol li' { display: block }";
  document.head.appendChild(s);
}


/*
showMe = document.querySelectorAll("ol");
if (showMe.length == 0) {
  console.log("No object returned.");
} else {
  console.log("Objects found:" + showMe.length);
}
for (x=0; x < showMe.length; x++) {
  showMe.onlick = function() {
    s.innerHTML = "{ visibility: visible }";
    s.innerHTML = "{ display: block }";
  }
}
*/