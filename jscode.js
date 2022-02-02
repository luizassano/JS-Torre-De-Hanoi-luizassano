const aside = document.querySelector("aside")
const mainSection = document.querySelector(".main--container")
const body = document.getElementsByTagName("body")[0]
let fBar = []
let sBar = {}
let tBar = {}
let fDisc = {}
let sDisc = {}
let tDisc = {}
let qDisc = {}
let cDisc = {}
let click = true
let selectedDisc = []
let selectedDiscWidth = 0
let divCount = {}
let counter = 0
let numberOfDiscs = 0


function createContent(num) {
    numberOfDiscs = num
    let count = document.createElement('div')
    count.id = "contador"
    aside.appendChild(count)


    let bar1 = document.createElement("div")
    bar1.id = "firstBar"
    bar1.classList.add("bar")
    let bar2 = document.createElement("div")
    bar2.id = "secondBar"
    bar2.classList.add("bar")
    let bar3 = document.createElement("div")
    bar3.id = "thirdBar"
    bar3.classList.add("bar")

    mainSection.appendChild(bar1)
    mainSection.appendChild(bar2)
    mainSection.appendChild(bar3)

    for (let i = 1; i <= num; i++) {
        let disc = document.createElement("div")
        disc.classList.add("disc")
        disc.id = `disc-${i}`
        bar1.appendChild(disc)
        fDisc = document.getElementById("disc-1")
        sDisc = document.getElementById("disc-2")
        tDisc = document.getElementById("disc-3")
        qDisc = document.getElementById("disc-4")
        cDisc = document.getElementById("disc-5")
    }

    fBar = bar1
    sBar = bar2
    tBar = bar3
    divCount = count
}
createContent(4)

let contador = document.querySelector('#contador p')

function discMove(e) {
    let targetedEl = e.target
    if (targetedEl.classList[0] === "bar" && click === true && targetedEl.lastElementChild !== null) {
        selectedDisc = targetedEl.lastElementChild
        selectedDiscWidth = selectedDisc.clientWidth
        click = false
    } else if (targetedEl.classList[0] === "bar" && click === false) {
        if (targetedEl.lastElementChild === null) {
            targetedEl.appendChild(selectedDisc)
            counter ++
        } else if (targetedEl.lastElementChild !== null && targetedEl.lastElementChild.clientWidth > selectedDiscWidth) {
            targetedEl.appendChild(selectedDisc)
            counter ++  
        }
        click = true
    }
    divCount.innerText = counter +' Movimentos'
    vitory()
}

divCount.innerText = counter +' Movimentos'
mainSection.addEventListener("click",discMove )

function resetar(){
    
    if (numberOfDiscs === 3){
        fBar.appendChild(fDisc)
        fBar.appendChild(sDisc)
        fBar.appendChild(tDisc)
    }else if(numberOfDiscs === 4){
        fBar.appendChild(fDisc)
        fBar.appendChild(sDisc)
        fBar.appendChild(tDisc)
        fBar.appendChild(qDisc)
    }else if(numberOfDiscs === 5){
        fBar.appendChild(fDisc)
        fBar.appendChild(sDisc)
        fBar.appendChild(tDisc)
        fBar.appendChild(qDisc)
        fBar.appendChild(cDisc)
    }
    counter = 0
    divCount.innerText = counter +' Movimentos'
}

let resetButton = document.querySelector('#resetButton');

resetButton.addEventListener('click',resetar)

function vitory() {
    let tBarDiscs = document.querySelectorAll('#thirdBar .disc')
    if (tBarDiscs.length === numberOfDiscs) {
        const modal = document.createElement("div")
        const paragraph= document.createElement("p")
        const span= document.createElement("span")
        span.innerText='X'
        paragraph.innerText = 'Parabéns você ganhou!!'
        paragraph.classList.add('msg')
        modal.classList.add("modal")
        paragraph.appendChild(span)
        modal.appendChild(paragraph)
        body.appendChild(modal)
        span.addEventListener('click', function(e){
            e.target.closest('div').style.display="none"
        })

    }
    
}




function remover(){
    mainSection.removeChild(fBar)
    mainSection.removeChild(sBar)
    mainSection.removeChild(tBar)
    aside.removeChild(divCount)
}

function dificuldadeFacil(){
    remover()
    createContent(3)
    resetar()
}

function dificuldadeMedio(){
    remover()
    createContent(4)
    resetar()
}

function dificuldadeDificil(){
    remover()
    createContent(5)
    resetar()
}
let easy = document.getElementById('easyButton');

easy.addEventListener('click',dificuldadeFacil)

let medio = document.getElementById('medioButton');

medio.addEventListener('click',dificuldadeMedio)

let hard = document.getElementById('hardButton');

hard.addEventListener('click',dificuldadeDificil)