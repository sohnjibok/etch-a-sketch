const container = document.getElementById('container')

const createBox = () => {
    const box = document.createElement('div');
    box.classList.add('box');
    return box;
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
            const box = createBox()
            row.appendChild(box)
        }
        container.appendChild(row)
    }
}

createGrid(16)



