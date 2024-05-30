import { genshinStickers as stickers } from '/GenshinData.js'

//DOM Variables 
const backgroundEmblems = document.getElementsByClassName('Emblem')
const getQuoteBtn = document.getElementById('get-quote-btn')
const closeBtn = document.getElementById('closeBtn')
const quoteModal = document.getElementById('quoteModal')
const selectEmotion = document.getElementById("selectEmotion")
let modalOpen = false


//Open Modal
getQuoteBtn.addEventListener('click', openModal)


function openModal() {
    quoteModal.classList.toggle('hidden')
    document.querySelector('.main-content-container').classList.add('hidden')
    modalOpen = true
    renderModalContent(stickers)
}

//Generate Modal
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

//Change Background and Background Music
for (let i = 0; i < backgroundEmblems.length; i++) {
    backgroundEmblems[i].addEventListener('click', changeBackground);
}

function changeBackground(e) {

    const emblemId = e.target.id;
    let backgrounds = document.getElementsByClassName('background')
    let currentAudio = document.getElementById('currentAudio')
    let themeSrc

    for (let background of backgrounds) {
        background.style.display = "none"
    }

    const backgroundMap = {
        "mondstadEmblem": "mondstadBackground",
        "liyueEmblem": "liyueBackground",
        "inazumaEmblem": "inazumaBackground",
        "sumeruEmblem": "sumeruBackground",
        "fontaineEmblem": "fontaineBackground"
    }

    const audioMap = {
        "mondstadEmblem": "Music/Mondstad_Theme.mp3",
        "liyueEmblem": "Music/Liyue_Theme.mp3",
        "inazumaEmblem": "Music/Inazuma_Theme.mp3",
        "sumeruEmblem": "Music/Sumeru_Theme.mp3",
        "fontaineEmblem": "Music/Fontaine_Theme.mp3"
    }

    const backgroundId = backgroundMap[emblemId];
    if (backgroundId) {
        document.getElementById(backgroundId).style.display = "block"
        themeSrc = audioMap[emblemId];
    }

    if (themeSrc) {
        currentAudio.src = themeSrc;
    }
}

//Control Audio 
const disableAudio = document.getElementById('enableAudioBtn')
const enableAudio = document.getElementById('disabledAudioBtn')
const currentAudio = document.getElementById('currentAudio')

disableAudio.addEventListener('click', function () {
    currentAudio.muted = true
    disableAudio.classList.toggle('hidden')
    enableAudio.classList.toggle('hidden')
})

enableAudio.addEventListener('click', function () {
    currentAudio.muted = false
    enableAudio.classList.toggle('hidden')
    disableAudio.classList.toggle('hidden')
})

//Play Audio upon page refresh / Load
playButton.addEventListener('click', function () {
    var audio = document.getElementById('currentAudio')
    var playButton = document.getElementById('playButton')
    audio.play().then(() => {
        playButton.classList.toggle('hidden')
    }).catch(function (error) {
        console.error('Error attempting to play audio:', error)
    })
})

//Capture Screenshot
document.getElementById('saveBtn').addEventListener('click', function () {

    document.getElementById('quoteModal').style.backgroundColor = "#476887"

    html2canvas(document.getElementById('quoteModal')).then(function (canvas) {
        let link = document.createElement('a')
        link.href = canvas.toDataURL()
        link.download = 'screenshot.png'
        link.click()
        displayNotification()
        document.getElementById('notification').style.visibility = 'visible'
        document.getElementById('quoteModal').style.backgroundColor = ""
    })
})

function displayNotification() {
    setTimeout(function () {
        document.getElementById('notification').style.visibility = 'hidden'
    }, 2000)
}










