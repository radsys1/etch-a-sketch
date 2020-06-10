

function theStart() {
    let numberOfGrid = prompt('Please input number of grids');
    const holder = document.querySelector('#holder');
    const div = document.createElement('div');
    div.classList.add('container');
    holder.appendChild(div);

    function createColumns(num) {

        for (let i = 0; i<(num*num); i++) {
        const column = document.createElement('item');
        column.classList.add('item');
        div.appendChild(column)
    }
}

createColumns(numberOfGrid);


document.querySelector('.container').style.display = 'grid';
document.querySelector('.container').style.gridTemplateColumns = `repeat(${numberOfGrid}, auto)`;

let items = Array.from(document.querySelectorAll('.item'));

const createHooverEffect = (array) => {
    array.map((item) => {
        item.style.height = `${960/numberOfGrid}px`;
        item.style.width = `${960/numberOfGrid}px`;
        item.addEventListener('mouseover', ()=> item.classList.add('hovered'))
    });
}

createHooverEffect(items);
}

theStart();





const multi = document.querySelector('#multi');
const black = document.querySelector('#black');
const reset = document.querySelector('#resetcolor');
const restart = document.querySelector('#again')

reset.addEventListener('click', ()=> {
    let items = Array.from(document.querySelectorAll('item'));
    items.forEach(item => item.classList.remove('hovered'));
})

restart.addEventListener('click',()=> {
    document.querySelector('#holder').innerHTML = '';
    theStart();
})

multi.addEventListener('click', function(event) {
    let items = Array.from(document.querySelectorAll('item'));
    items.forEach(item => item.classList.remove('hovered'));
    items.forEach((item) => {
        item.addEventListener('mouseover', function(event) {
            this.style.backGroudnColor = `
                rgb(${this.event.screenX/10}, ${this.event.screenY/10}, ${this.event.screenX/10})`;
        })
    })
})







