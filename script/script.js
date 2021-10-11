let list = document.querySelector('#list');
const arr = ['a','b','c','d','e']
arr.forEach(any => {
    const item = document.createElement('li')
    const data = document.createElement(any)
    item.appendChild(data)
    item.appendChild(item)
})

console.log(list)