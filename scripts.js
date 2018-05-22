console.log(window);
console.log(document);
var klawisz = document.getElementsByClassName('button');
for (var i = 0; i < klawisz.length; i++) {
  alert(klawisz[i].innerText);
  console.log(klawisz[i].innerText);
}