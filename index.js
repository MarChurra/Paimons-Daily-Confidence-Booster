import { genshinStickers as stickers } from '/GenshinData.js'

//Variables 
const backgroundEmblems = document.getElementsByClassName('Emblem')
const getQuoteBtn = document.getElementById('get-quote-btn')
const closeBtn = document.getElementById('closeBtn')
const quoteModal = document.getElementById('quoteModal')
let quoteModalOpen = false

//Open Modal
getQuoteBtn.addEventListener('click', generateModal)

//Close Modal


//Generate Modal
function generateModal(stickers) {
    const modalInner = document.getElementById('quote-modal-inner')
    quoteModal.classList.toggle('hidden')
    document.querySelector('.main-content-container').classList.add('hidden')
}


// Emblem Event Caller
for (let i = 0; i < backgroundEmblems.length; i++) {
    backgroundEmblems[i].addEventListener('click', changeBackground);
}

//Change Background
function changeBackground(e) {

    const emblemId = e.target.id
    let backgrounds = document.getElementsByClassName('background')

    for (let background of backgrounds) {
        background.style.display = "none";
    }

    if (emblemId === "mondstadEmblem") {
        let mondstadBackground = document.getElementById("mondstadBackground")
        mondstadBackground.style.display = "block"
    }

    else if (emblemId === "liyueEmblem") {
        let liyueBackground = document.getElementById("liyueBackground")
        liyueBackground.style.display = "block"
    }

    else if (emblemId === "inazumaEmblem") {
        let inazumaBackground = document.getElementById("inazumaBackground")
        inazumaBackground.style.display = "block"
    }

    else if (emblemId === "sumeruEmblem") {
        let sumeruBackground = document.getElementById("sumeruBackground")
        sumeruBackground.style.display = "block"
    }

    else if (emblemId === "fontaineEmblem") {
        let fontaineBackground = document.getElementById("fontaineBackground")
        fontaineBackground.style.display = "block"
    }
}










