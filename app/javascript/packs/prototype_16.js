const particlesQuantity = [48, 64, 82, 96, 108, 120, 142]

const backgroundModel = ['yellow', 'blue', 'orange', 'pink']

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

function getFrame() {
  return document.getElementsByClassName('frame')[0]
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

function generateBackground() {
  // console.log('test')
  return new Promise((resolve, reject) => {
    const backgroundColorClass = sample(backgroundModel)
    const frame = getFrame()
    frame.classList.add(backgroundColorClass)
    console.log('test')

    setBackgroundColorClass(backgroundColorClass).then(resolve)
  })
}
function generateColor() {
  generateBackground()
}

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementsByClassName('prototype_16')[0]

  //Основной фрейм
  const frame = document.createElement('div')
  frame.classList.add('frame')
  container.appendChild(frame)

  //Див для текста
  const divText = document.createElement('div')
  divText.classList.add('div_text')
  container.appendChild(divText)

  //Заголовок
  const header = document.createElement('h1')
  header.classList.add('frame_header')
  header.innerText = 'Генеративная коллекция «Цветник»'
  divText.appendChild(header)

  //Объяснение
  const paragraph = document.createElement('p')
  paragraph.classList.add('frame_p')
  paragraph.innerText =
    ' Создай уникальный платок: подбери композицию и напиши свой текст — все это возможно в нашем сервисе!'
  divText.appendChild(paragraph)

  //Див с кнопками
  const button = document.createElement('div')
  button.classList.add('button')
  container.appendChild(button)

  //Кнопка обновления
  const restoreButton = document.createElement('button')
  restoreButton.classList.add('restore_button')
  restoreButton.href = 'http://localhost:3000/prototypes/16'
  button.appendChild(restoreButton)

  //Кнопка сохранения
  const saveButton = document.createElement('button')
  saveButton.classList.add('save_button')
  saveButton.innerText = 'Сохранить'
  button.appendChild(saveButton)

  //Фрейм текст + цветы
  const background = document.createElement('div')
  background.classList.add('frame_background')
  frame.appendChild(background)

  //Форма текста
  const textElement = document.createElement('h1')
  textElement.classList.add('text')

  //Текст
  const text = sample(texts)
  textElement.innerText = text
  textElement.contentEditable = true
  background.appendChild(textElement)

  //Фрейм с генерацией цветкой
  const additionalBackground = document.createElement('div')
  additionalBackground.classList.add('additional_background')
  background.appendChild(additionalBackground)

  //Генерация цветков
  for (var i = 0; i < sample(particlesQuantity); i++) {
    createFlower(additionalBackground)
  }

  //Генерация цветков
  generateColor()
})
