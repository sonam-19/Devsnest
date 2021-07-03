//displaytime
document.getElementById("myBtn").addEventListener("click", displayDate);

function displayDate() {
  document.getElementById("date").innerHTML = Date();
}

//singleclick
document.getElementById("click").addEventListener("click", click);
function click() {
  document.getElementById("clicks").innerHTML = "clicked once !";
}

// dbl click
document.getElementById("dblclicks").addEventListener("dblclicks", dblclick);
function dblclick() {
  document.getElementById("2clicks").innerHTML = " double clicked!";
}