const container = document.querySelector('.container')
const Text = document.querySelector('#text')
const totalTime = 7500
const breathIn = (totalTime / 5) * 2
const holdTime = totalTime / 5
breatheAnimation()
function breatheAnimation() {
  Text.innerHTML = 'Breath In !'
  container.className = 'container grow'
  setTimeout(() => {
    Text.innerHTML = 'Hold'
    setTimeout(() => {
      Text.innerHTML = 'Breathe Out'
      container.className = 'container shrink'
    }, holdTime)
  }, breathIn)
}
setInterval(breatheAnimation, totalTime)
