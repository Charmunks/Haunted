var bg = document.getElementById('bg');
var main = document.getElementById('main');
var ghostcont = document.getElementById('ghostcont');



function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function play() {
  var count = 0.01
  while (count < 0.5) {
  bg.style = `background: linear-gradient(rgba(255,255,255, ${count}), rgba(255,255,255,${count})), url(background.png); background-size: cover;background-position: center top; background-repeat: no-repeat; background-attachment: fixed;`
  main.style = `opacity: ${count * 2};`
  ghostcont.style = `opacity: ${count * 2};`
  count += 0.01
  await delay(10)
}
}

function userMove() {
  console.log("User has interacted with the page!");
  document.removeEventListener('mousemove', userMove);
  document.removeEventListener('keydown', userMove);
  document.removeEventListener('touchstart', userMove);
  play()
}

document.addEventListener('mousemove', userMove);
document.addEventListener('keydown', userMove);
document.addEventListener('touchstart', userMove);



