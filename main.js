const gridContainer = document.getElementById('grid-container')

const createBoxElement = (number) => {
    const sizeInPixels = 32 // calculating by px; 32px is roughly 2rem which is the initial size I like
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.width = `${sizeInPixels / number}rem`
    box.style.height = `${sizeInPixels / number}rem`
    return box
}

const createRowOfBoxes = () => {
    const row = document.createElement('div')
    row.classList.add('row')
    return row
}

const createGridFromRows = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const row = createRowOfBoxes()
        for (let j = 0; j < gridSize; j++) {
            const box = createBoxElement(gridSize)
            row.appendChild(box)
        }
        gridContainer.appendChild(row)
    }
}

const selectColor = (color) => {
    const boxes = document.querySelectorAll('.box')
    boxes.forEach(element => {
        element.addEventListener('mouseover', (event) => {
            event.target.style.backgroundColor = color
        })
    })
}

createGridFromRows(50)
selectColor('yellow')