let backgroundColorClass = ''

function getBackgroundColorClass() {
  return backgroundColorClass
}

function setBackgroundColorClass(className) {
  return new Promise(function (resolve, reject) {
    backgroundColorClass = className
    resolve()
  })
}

export { getBackgroundColorClass, setBackgroundColorClass }
