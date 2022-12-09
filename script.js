//loading

window.onload = function() {
  document.getElementById("_loading").style.display = "none";
}

//bio

const bio = document.getElementById("bio");
let desc = bio.innerHTML;
bio.innerHTML = desc.trim();