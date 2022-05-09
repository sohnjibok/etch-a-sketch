const container = document.getElementById('container')

const createBox = () => {
    const box = document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);
    return box;
}

    