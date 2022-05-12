const gridContainer = document.getElementById('grid-container')

const createBoxElement = (sizeOfBoxes) => {
    const sizeInPixels = 35
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.width = `${sizeInPixels / sizeOfBoxes}rem`
    box.style.height = `${sizeInPixels / sizeOfBoxes}rem`
    return box
}

const createRowOfBoxes = (boxesInRow) => {
    const row = document.createElement('div')
    row.classList.add('row')
    for (let i = 0; i < boxesInRow; i++) {
        const box = createBoxElement(boxesInRow)
        row.appendChild(box)
    }
    return row
}

const createGridFromRows = (numberOfRows) => {
    if (gridContainer.firstChild) clearGrid()
    for (let i = 0; i < numberOfRows; i++) {
        const row = createRowOfBoxes(numberOfRows)
        gridContainer.appendChild(row)
    }
}

const clearGrid = () => {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}

const resetBrushClickedClass = () => {
    [regularBrushBtn, shadingBrushBtn, randomBrushBtn, eraserBrushBtn]
        .forEach(button => button.classList.remove('button-clicked'))
}

const turnOffOtherButtons = () => {
    regularBrushIsOn = false
    eraserBrushIsOn = false
}

const toggleButtonClicked = (button) => {
    resetBrushClickedClass()
    button.classList.toggle('button-clicked')
}

const activateBoxColorChange = (event) => {
    if(regularBrushIsOn) event.target.style.backgroundColor = color.value
    if (eraserBrushIsOn) event.target.style.backgroundColor = 'white'
}

const toggleRegularBrush = (event) => {
    toggleButtonClicked(event.target)
    turnOffOtherButtons()
    regularBrushIsOn = !regularBrushIsOn
}

const toggleEraserBrush = (event) => {
    toggleButtonClicked(event.target)
    turnOffOtherButtons()
    eraserBrushIsOn = !eraserBrushIsOn
}

const toggleDrawOnGrid = (beginDrawing) => {
    const boxes = document.querySelectorAll('.box')
    if (beginDrawing) {
        boxes.forEach(element => {
            element.addEventListener('mousemove', activateBoxColorChange)
        })
    } else {
        boxes.forEach(element => {
            element.removeEventListener('mousemove', activateBoxColorChange)
        })
    }
}

createGridFromRows(10) // initial grid size

const [regularBrushBtn, shadingBrushBtn, randomBrushBtn, eraserBrushBtn,
    color, potatoRes, lowRes, medRes, highRes, extremeRes, lifeLikeRes] =
    ['regularBrush', 'shadingBrush', 'randomBrush', 'eraserBrush',
        'color', 'potatoRes', 'lowRes', 'medRes', 'highRes', 'extremeRes', 'lifeLikeRes']
        .map(className => document.getElementsByClassName(className)).map(item => item[0])

// Brush buttons
regularBrushBtn.addEventListener('click', (event) => toggleRegularBrush(event))
let regularBrushIsOn = false

eraserBrushBtn.addEventListener('click', (event) => toggleEraserBrush(event))
let eraserBrushIsOn = false

// Resolution buttons
potatoRes.addEventListener('click', () => createGridFromRows(10))
lowRes.addEventListener('click', () => createGridFromRows(20))
medRes.addEventListener('click', () => createGridFromRows(40))
highRes.addEventListener('click', () => createGridFromRows(60))
extremeRes.addEventListener('click', () => createGridFromRows(80))
lifeLikeRes.addEventListener('click', () => createGridFromRows(100))

let beginDrawing = false
gridContainer.addEventListener('click', () => {
    beginDrawing = !beginDrawing
    toggleDrawOnGrid(beginDrawing)
})

