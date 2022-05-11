const gridContainer = document.getElementById('grid-container')

const createBoxElement = (numberOfBoxes) => {
    const sizeInPixels = 32
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.width = `${sizeInPixels / numberOfBoxes}rem`
    box.style.height = `${sizeInPixels / numberOfBoxes}rem`
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

const createGridFromRows = (boxesInRow) => {
    for (let i = 0; i < boxesInRow; i++) {
        const row = createRowOfBoxes(boxesInRow)
        gridContainer.appendChild(row)
    }
}

createGridFromRows(10)


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