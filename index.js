// javascript
const image = document.querySelector('.save-img')
const menuImage = document.querySelector('.menu-img')
const popUp = document.querySelector('popup-menu')
const popUpStyles = window.getComputedStyle(popUp)


menuImage.addEventListener('click', () => {
  if (popUpStyles.getPropertyValue('display') === 'none') {
    popUp.style.display = 'block'
  } else {
    popUp.style.display = 'none'
  }
})

function toggleImg(x) {
  if(x.src === './assets/save.svg') {
    x.src = './assets/save-filled.svg'
  } else {
    x.src = './assets/save.svg'
  }
}