function searchbar(search) {
  let t = "search2(" + "'" + search + "'" + ")"
  let z = "[" + "search=" + "'" + search + "'" + "]"
  let x = document.createElement("input")
  x.setAttribute("id", search)
  x.setAttribute("onkeyup", t)
  x.setAttribute("type", "text")
  x.setAttribute("autocomplete", "off")
  let y = document.querySelectorAll(z)
  let treewf = document.querySelector(z).hasAttribute("plhlder")
  if (treewf == true) {
    let wee = document.querySelector(z).getAttribute("plhlder")
    if (wee.value == "null") {
      wee = "search"
    }
    x.setAttribute("placeholder", wee)
  }
  for (let i = 0; i < y.length; i++) {
    y[i].append(x)
  }
}
let tr = ""
let tri = document.getElementsByTagName("searchbar")
for (let i = 0; i < tri.length; i++) {
  tr = tri[i].getAttribute("search")
  searchbar(tr)
}
//searchbar('search')

function search2(search) {
  let input = document.getElementById(search).value
  input = input.toLowerCase();
  let x = document.getElementsByClassName(search);
  for (i = 0; i < x.length; i++) {
    if (x[i].innerText.toLowerCase().includes(input)) {
      x[i].style.display = "inline-block";
    } else {
      x[i].style.display = "none";
    }
  }
}


function tosearch() {
  document.getElementById("searchbar").focus();
}
// let iconlist = document.getElementById("iconslist")
// for (let i = 0; i < iconlist.length; i++) {
//   //if (i > 1 && i / 5 == 1) {
//   iconlist[i].innerHTML = iconlist[i].innerHTML + "<br>"
//   //}
// }
document.getElementById("dgs").click();
function filter(group){
    let y = document.getElementsByClassName("searchgroup")
		let t = document.getElementsByClassName("srchfiltbtn")
    if (group == "all"){
        for (let i = 0 ; i < y.length ; i++){
            y[i].style.display = "block"
        }
				for (let i = 0 ; i < t.length ; i++){
				t[i].classList.remove("currentfilter")
}
				console.log(y.length)
        document.getElementById("dgs").classList.add("currentfilter")
    }
    else {
        let x = document.getElementById(group)
        for (let i = 0 ; i < y.length ; i++){
            y[i].style.display = "none"
        }
				for (let i = 0 ; i < t.length ; i++){
				t[i].classList.remove("currentfilter")
}
        x.style.display = "block"
        let z = group + "-link"
        document.getElementById(z).classList.add("currentfilter")
    }
}
console.log(document.getElementsByClassName('currentfilter').length)
function tes() {
  let x = document.getElementById("res")
  if (x.innerHTML == "volume-up") {
    x.innerHTML = "mute"
  } else if (x.innerHTML == "mute") {
    x.innerHTML = "volume-up"
  }
}
      var buttons = document.getElementsByClassName("button");
      var activeSheet = document.getElementById("active-stylesheet");
      var clearStorageButton = document.getElementById("clear-storage");

      // Test to see if localStorage already has a value stored
      if (localStorage.getItem("lastActiveSheet")) {
        activeSheet.setAttribute("href", localStorage.getItem("lastActiveSheet"));
      } else {
        activeSheet.setAttribute("href", "color2.css") /*"https://cdn.jsdelivr.net/gh/Sideswipe5/Red-CSS@latest/*/
      }

      // Assign the event lister to each button
      for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", switchStyle);
      }
      // Create a button to clear localStorage
      clearStorageButton.addEventListener("click", clearStorage);

      // Set the #active-stylesheet to be the light or dark stylesheet
      function switchStyle() {
        var selectedSheet = this.getAttribute("data-stylesheet");
        activeSheet.setAttribute("href", selectedSheet);
        localStorage.setItem("lastActiveSheet", selectedSheet);
      }

      // Wrapper function to localStorage.clear
      function clearStorage() {
        localStorage.clear();
      }

function er() {
  let x = document.getElementById("ret")
  if (x.innerHTML == "status-online") {
    x.innerHTML = "status-offline"
  } else if (x.innerHTML == "status-offline") {
    x.innerHTML = "status-online"
  }
}
let space = document.getElementsByTagName("s_")
for (let i = 0 ; i < space.length ; i++){
    space[i].innerHTML = "&nbsp"
}
function themeSwitch(){
    let x = document.getElementById("theme")
    let y = x.getAttribute("data-stylesheet")
    if (y == "color1.css"){
        x.setAttribute("data-stylesheet","color2.css")
    } 
    if (y == "color2.css"){
        x.setAttribute("data-stylesheet","color1.css")
    }
}
function copy(id){
var copyText = document.getElementById(id);

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);

  // Alert the copied text
   var tooltip = document.getElementById("myTooltip")
   tooltip.innerHTML = "Copied Text";
   document.getElementById("copyicon").innerHTML = "check"
   setTimeout(resete,3000);
}
function resete(){
    document.getElementById("copyicon").innerHTML = "duplicate"
}
function outFunc() {
  var tooltip = document.getElementById("myTooltip")
  tooltip.innerHTML = "Copy to Clipboard"
}
