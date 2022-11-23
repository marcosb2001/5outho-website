const obras = [
    {id: 1, img: './media/art/draw.jpeg', txt: "untitled, 2022, 80x60cm"},
    {id: 2, img: './media/art/walking.gif', txt: "walking, 2022, animation"},
    {id: 3, img: './media/art/huhu.png', txt: "gaguuusad, 2022, digital"},
    {id: 4, img: './media/art/weatcher4.png', txt: "creepy, 2022, digital"},
    {id: 5, img: './media/art/hutnwood2.png', txt: "fruitful hunt, 2022, digital"},
    {id: 6, img: './media/art/place.jpg', txt: "a place"},
]

console.log("hello, im  testing js integration, i kinda forgot how to do this out of not practicing often enough so...pls don't make fun of me if my code sucks..")
var randomItem = obras[Math.floor(Math.random()*obras.length)]
console.log(randomItem.img)

const indexgallery = document.getElementById('drawing')

indexgallery.innerHTML = "<img src="+randomItem.img+"> <p>"+randomItem.txt+"</p>"





