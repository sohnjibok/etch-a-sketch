const gridContainer = document.getElementById('grid-container')

const createBoxElement = (sizeOfBoxes) => {
    const sizeInPixels = 32
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
    if(gridContainer.firstChild) clearGrid()
    for (let i = 0; i < numberOfRows; i++) {
        const row = createRowOfBoxes(numberOfRows)
        gridContainer.appendChild(row)
    }
}

const clearGrid = () => {
    while(gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild)
    }
}


let elements = {};
['lowRes','medRes','highRes'].forEach(item => elements = {...elements, [item] : document.getElementsByClassName(item)})
const {lowRes, medRes, highRes} = elements
lowRes[0].addEventListener('click', () => createGridFromRows(10))
medRes[0].addEventListener('click', () => createGridFromRows(30))
highRes[0].addEventListener('click', () => createGridFromRows(60))


console.log(gridContainer.firstChild)



const activateBoxColorChange = (event) => {
    event.target.style.backgroundColor = 'black'
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

let beginDrawing = false
gridContainer.addEventListener('click', () => {
    beginDrawing = !beginDrawing
    toggleDrawOnGrid(beginDrawing)
})