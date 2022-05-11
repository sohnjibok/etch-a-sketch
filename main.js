const gridContainer = document.getElementById('grid-container')

const createBoxElement = (numberOfBoxes) => {
    const sizeInPixels = 32
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.width = `${sizeInPixels / numberOfBoxes}rem`
    box.style.height = `${sizeInPixels / numberOfBoxes}rem`
    return box
}

const createRowContainer = () => {
    const row = document.createElement('div')
    row.classList.add('row')
    return row
}

const createGridFromRows = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const row = createRowContainer()
        for (let j = 0; j < gridSize; j++) {
            const box = createBoxElement(gridSize)
            row.appendChild(box)
        }
        gridContainer.appendChild(row)
    }
}

const activatePen = (event) => {
    event.target.style.backgroundColor = 'black'
}

const toggleDrawOnGrid = (toggleOn) => {
    const boxes = document.querySelectorAll('.box')
    if (toggleOn) {
        boxes.forEach(element => {
            element.addEventListener('mousemove', activatePen)
        })
    } else {
        boxes.forEach(element => {
            element.removeEventListener('mousemove', activatePen)
        })
    }
}

createGridFromRows(50)

const drawButton = document.querySelector('#draw')
let toggleOn = false

gridContainer.addEventListener('click', () => {
    toggleOn = !toggleOn
    toggleDrawOnGrid(toggleOn)
})