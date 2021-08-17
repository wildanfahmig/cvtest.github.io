function colorModeToggle() {
  var now = document.body.style.backgroundColor
  console.log(now)
  if (now === 'rgb(255, 255, 255)') {
    document.body.style.backgroundColor = '#261C2C'
    document.getElementById("header").style.backgroundColor = '#3E2C41'
    document.getElementById("content").style.backgroundColor = '#5C527F'
    document.getElementById("footer").style.backgroundColor = '#6E85B2'
    document.getElementById("content").style.color = '#FFD369'
    document.getElementById("footer").style.color = '#FFD369'
    document.getElementById("button").innerHTML = 'Light Mode'
    document.getElementById("button").style.backgroundColor = '#5C527F'
    document.getElementById("button").style.color = '#FFD369'
  } else {
    document.body.style.backgroundColor = '#FFFFFF'
    document.getElementById("header").style.backgroundColor = '#668284'
    document.getElementById("content").style.backgroundColor = '#E3EDD8'
    document.getElementById("footer").style.backgroundColor = '#007A52'
    document.getElementById("content").style.color = '#000000'
    document.getElementById("footer").style.color = '#000000'
    document.getElementById("button").innerHTML = 'Dark Mode'
    document.getElementById("button").style.backgroundColor = '#E3EDD8'
    document.getElementById("button").style.color = '#000000'
  }
}