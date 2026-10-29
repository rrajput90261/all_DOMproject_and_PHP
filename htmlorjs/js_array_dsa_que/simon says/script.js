 let score = document.getElementById("score")
 let btn = document.querySelectorAll(".btn")
 let p = document.querySelector("p")
 let arr = ['red','green','blue','yellow']
 let seq = []
 let usrseq = []
 let level = 0
 let highscore =0
let h2 = document.querySelector('h2')

let start = false
document.addEventListener("keypress",e=>{
    let random = Math.floor(Math.random()*arr.length)
    if(start){
        return
    }
    start = true
    flash(arr[random])
    seq.push([random])
    h2.innerHTML = 'simon says'
    levelup()
})

document.addEventListener("click",e=>{
    let random = Math.floor(Math.random()*arr.length)
    if(start){
        return
    }
    start = true
    flash(arr[random])
    seq.push(arr[random])
    h2.innerHTML = 'simon says'
    levelup()
})
btn.forEach(e=>{
    e.addEventListener("click",(e)=>{
        e.target.classList.add("flash")
        e.stopPropagation()
        setTimeout(() => {
            e.target.classList.remove("flash")
        }, 320);
        usrseq.push(e.target.id)
        setTimeout(()=>{
             check(usrseq.length-1)
        },320)
    })
})

function select(){
    let random = Math.floor(Math.random()*arr.length)
    flash(arr[random])
    seq.push(arr[random])
}

function levelup(){
    usrseq = []
    level++
    p.innerHTML = `<h3>level:${level}</h3>`
    highscore = level;
    score.innerHTML = highscore
}

function flash(b){
     let btn = document.querySelector(`#${b}`)
     btn.classList.add("flash")
     setTimeout(() => {
        btn.classList.remove("flash")
     },230 );

}

function check(idx){
    if(usrseq[idx]==seq[idx]){
        if(usrseq.length == seq.length){
            select()
            levelup()
        }
    }else{
        p.innerHTML =`<h3>wrong</h3>`
        document.body.classList.add("error")
        h2.innerHTML = `press any key or click to restart the game ...`
        setTimeout(()=>{
            document.body.classList.remove("error")
        },1000)
        start= false
        reset()
    }
}

function reset(){
    start = false
    highscore = 0
    level = 0
    seq = []
    usrseq =[]
}