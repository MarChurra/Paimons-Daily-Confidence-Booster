import { genshinStickers as stickers } from '/GenshinData.js'

//DOM Variables 
const backgroundEmblems = document.getElementsByClassName('Emblem')
const getQuoteBtn = document.getElementById('get-quote-btn')
const closeBtn = document.getElementById('closeBtn')
const quoteModal = document.getElementById('quoteModal')
const saveBtn = document.getElementById('saveBtn')
const selectEmotion = document.getElementById("selectEmotion")
let modalOpen = false


//Open Modal
getQuoteBtn.addEventListener('click', openModal)

//Close Modal
closeBtn.addEventListener('click', function () {
    closeModal()
})

function closeModal() {
    quoteModal.classList.toggle('hidden')
    document.querySelector('.main-content-container').classList.remove('hidden')
    modalOpen = false
}

window.addEventListener('mouseup', function (e) {
    if (modalOpen && !e.target.closest('#quoteModal')) {
        closeModal();
    }
})

//Open Modal
function openModal() {
    const modalInner = document.getElementById('quote-modal-inner')
    quoteModal.classList.toggle('hidden')
    document.querySelector('.main-content-container').classList.add('hidden')
    modalOpen = true
    renderModalContent(stickers)
}

function retrieveMatchingEmotion(stickers) {
    const selectedEmotion = selectEmotion.value
    const matchingStickers = stickers.filter(sticker => sticker.emotionTag === selectedEmotion)
    if (matchingStickers.length > 0) {
        const randomIndex = Math.floor(Math.random() * matchingStickers.length)
        const randomSticker = matchingStickers[randomIndex]
        return randomSticker
    }
}

function renderModalContent(stickers) {
    let modalContent = ``
    const retrievedSticker = retrieveMatchingEmotion(stickers)

    modalContent += `
        <img class="sticker" src="${retrievedSticker.image}"></img>
        <p>${retrievedSticker.quote}</p>
        `
    document.getElementById("quote-modal-inner").innerHTML = modalContent
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










