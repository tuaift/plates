const particlesQuantity = [48, 64, 82, 96, 108, 120, 142]

// [class-name, min-diameter, max-diameter, min-layer, max-layer]

const texts = ['bouquet 2022', 'цветы против пуль', 'цветник', 'поле весны']

const flowerTypes = [
  ['first', 100, 200, 2, 4],
  ['second', 100, 200, 2, 4],
  ['third', 100, 200, 2, 4],
  ['fifth', 100, 200, 2, 4],
  ['fourth', 100, 200, 2, 4],
  // ['circle-black',              30,  70,   1, 1],
  ['sixth', 100, 150, 2, 4],
  // ['large-circle-black',        900, 1500, 1, 1],
  ['seventh', 100, 150, 2, 4]
]

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min
}

function sample(array) {
  return array[Math.floor(Math.random() * array.length)]
}

function createFlower(additionalBackground) {
  const flowerElement = document.createElement('div')
  const flowerType = sample(flowerTypes)
  flowerElement.classList.add('flower')

  const top = getRandomArbitrary(-100, 550)
  const left = getRandomArbitrary(-100, 550)
  const size = getRandomArbitrary(flowerType[1], flowerType[2])

  flowerElement.style.top = [top, 'px'].join('')
  flowerElement.style.left = [left, 'px'].join('')

  flowerElement.style.zIndex = Math.floor(
    getRandomArbitrary(flowerType[3], flowerType[4])
  )

  flowerElement.classList.add(flowerType[0])
  additionalBackground.appendChild(flowerElement)
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_16')[0]

  const frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)

  const background = document.createElement('div')
  background.classList.add('frame_background')
  frame.appendChild(background)

  const textElement = document.createElement('h1')
  textElement.classList.add('text')

  const text = sample(texts)
  textElement.innerText = text
  textElement.contentEditable = true
  background.appendChild(textElement)

  const additionalBackground = document.createElement('div')
  additionalBackground.classList.add('additional_background')
  background.appendChild(additionalBackground)

  for (var i = 0; i < sample(particlesQuantity); i++) {
    createFlower(additionalBackground)
  }
})
