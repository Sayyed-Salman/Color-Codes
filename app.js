let colorBtn = document.getElementById('press');
let midBox = document.getElementById('mid-box');
let cname = document.getElementById('color-name');
colorBtn.addEventListener('click',changeColor)

function changeColor(){
    let color = generateRandomColor();
    document.body.style.backgroundColor = color;
    midBox.style.backgroundColor = color;
    cname.innerHTML = color;
}

function generateRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
