function navOpen() {
  var links = document.getElementById("myLinks");
  var hamburgerLink = document.getElementById("icon");
  var topNav = document.getElementsByClassName("topnav")[0];

  if (links.classList.contains('visible')) {
    links.classList.remove('visible');
    hamburgerLink.classList.remove('open');
  } else {
    links.classList.add('visible');
    hamburgerLink.classList.add('open');
  }
}

function dolazim() {
  var number = parseInt(document.getElementById('number').innerText);
  number = number + 1
  document.getElementById('number').innerText = number
}

function openForm() {
  document.getElementById("myForm").style.display = "flex";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

// When the user clicks on <div>, open the popup
function showPopUp() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
