const gridContainer = document.getElementById('grid-container')

const createBox = (number) => {
    const size = 32 // calculating by px; 32px is roughly 2rem which is the initial size I like
    const box = document.createElement('div')
    box.classList.add('box')
    box.style.width = `${size / number}rem`
    box.style.height = `${size / number}rem`
    return box
}

const createRow = () => {
    const row = document.createElement('div')
    row.classList.add('row')
    return row
}

const createGrid = (gridSize) => {
    for (let i = 0; i < gridSize; i++) {
        const row = createRow()
        for (let j = 0; j < gridSize; j++) {
            const box = createBox(gridSize)
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

createGrid(30)
selectColor('blue')