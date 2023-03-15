let turn = "X"
let gameover = false;
let clickSound = new Audio("asset/click.wav")
let bgMusic = new Audio("asset/bg.mp3")

// bgMusic.play()
const changeTurn = ()=>{
    return turn === "X"?"O": "X"
}

const checkWin = ()=>{
    let boxtext = document.getElementsByClassName('symbol');
    let winner = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
      ]
      winner.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "") ){
            document.querySelector('.game-status').innerText = boxtext[e[0]].innerText + " Won"
            gameover = true
            document.querySelector('.img').getElementsByTagName('img')[0].style.width = "200px";
        }
      })
}

// Game logic
let boxes = document.getElementsByClassName("X-O")
Array.from(boxes).forEach(element => {
    let symbol = element.querySelector(".symbol")
    element.addEventListener('click', (e)=>{
        if(symbol.innerText === ''){
            symbol.innerText = turn
            turn = changeTurn()
            // clickSound.play();
            checkWin();
            if (!gameover){
                document.getElementsByClassName("game-status")[0].innerText = "Its your turn " +turn+ " yielder"
            }
        }
    })
})

restart.addEventListener('click', ()=> {
    let symbols = document.querySelectorAll(".symbol")
    Array.from(symbols).forEach(element => {
        element.innerText = ""
    })
    turn = "X"
    gameover = false
    document.getElementsByClassName("game-status")[0].innerText = "Its your turn " +turn+ " yielder"
    document.querySelector('.img').getElementsByTagName('img')[0].style.width = "0px"
})