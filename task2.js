'use strict'

const table = document.getElementById('auto-table')
const colorHandler = document.getElementById('color-chooser')
const mainDiagonal = []

const getRandomColor = () => {
    const numbers = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += numbers[Math.floor(Math.random() * numbers.length)]
    }

    return color
}

let counter = 0
for (let row = 0; row < 6; row++) {
    const tr = document.createElement("tr")
    for (let col = 0; col < 6; col++) {
        const td = document.createElement("td")
        td.textContent = ++counter

        if (row === col) mainDiagonal.push(td)
        tr.appendChild(td)

        if (counter !== 3) continue // at this only to my variant cell
        td.addEventListener("mouseenter", () => td.style.backgroundColor = getRandomColor())
        td.addEventListener("click", () => td.style.backgroundColor = colorHandler.value)
        td.addEventListener("dblclick", () => mainDiagonal.forEach(td => td.style.backgroundColor = colorHandler.value))
    }
    table.appendChild(tr)
}