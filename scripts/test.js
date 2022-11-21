const obras = [
    {id: 1, img: './media/draw.jpeg', txt: "untitled, 2022, 80x60cm"},
    {id: 2, img: './media/em.png', txt: "mii"},
    {id: 3, img: './media/fr.png', txt: "frog"},
    {id: 4, img: './media/blo.png', txt: "idk"},
    {id: 5, img: './media/mew.png', txt: "mewtwo"},
    {id: 6, img: './media/place.jpg', txt: "a place"},
]

console.log (...obras)
console.log("hi, testing js integration, i forgot how to do this")
var randomItem = obras[Math.floor(Math.random()*obras.length)]
console.log(randomItem.img)

const indexgallery = document.getElementById('drawing')

indexgallery.innerHTML = "<img src="+randomItem.img+">  <p>"+randomItem.txt+"</p>"





