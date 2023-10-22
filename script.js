document.getElementById('next').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').appendChild(lists[0]);
}
document.getElementById('prev').onclick = function(){
    let lists = document.querySelectorAll('.item');
    document.getElementById('slide').prepend(lists[lists.length - 1]);
}

 
const toggleCheckbox = document.getElementById('toggle');
toggleCheckbox.addEventListener('change', function () {
var checkbox = document.getElementById("toggle");
    if (checkbox.checked) {
    document.getElementById('changeStyle').href="style.css";
    document.getElementById('owl').src="./images/paper.png";
  } else {
    document.getElementById('changeStyle').href="style1.css";
    document.getElementById('owl').src="./images/owl.png";
  }
})

window.onload = function() {
    var checkbox = document.getElementById("toggle");
    checkbox.checked = true;
    if (checkbox.checked) {
        document.getElementById('changeStyle').href="style.css";
        document.getElementById('owl').src="./images/paper.png";
      } else {
        document.getElementById('changeStyle').href="style1.css";
        document.getElementById('owl').src="./images/owl.png";
      }
  };