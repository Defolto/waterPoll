const btn = document.querySelector('button')
const water = document.querySelector('.water')

let fill = 100
let timer = null

function toggleWater(status) {
    if (status) {
        timer = setInterval(() => {
            console.log(1);
        
            if (fill == 0) {
                fill = 100
            }
        
            fill -= 1
            water.style.top = fill + "%"
        
            if (fill == 0) {
                btn.innerHTML = "Спустить воду"
            } else {
                btn.innerHTML = "Залить водой"
            }
        }, 100);
    } else{
        clearInterval(timer)
        timer = null
    }
}

btn.addEventListener("mousedown", ()=>{
    toggleWater(true)
})

btn.addEventListener('mouseup', ()=>{
    toggleWater(false)
})