const selectA = document.querySelector('.select-A')
const selectB = document.querySelector('.select-B')
const mainButton = document.querySelector('.main-button')

function convertValue() {
const converterDe = document.querySelector('.currency-A')
const converterPara = document.querySelector('.currency-B')
const inputZim = document.querySelector('.main-input').value

const dollarToday = 5.72
const euroToday = 6.11
const libraToday = 7.32
const bitcoinToday = 348507.29

if (selectA.value == "real") {
    converterDe.innerHTML = new Intl.NumberFormat ('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(inputZim)
} 
//-----------------------------------------------------------------
if (selectB.value == "dollar") {
    converterPara.innerHTML = new Intl.NumberFormat ('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(inputZim / dollarToday)
}
if (selectB.value == "euro") {
    converterPara.innerHTML = new Intl.NumberFormat ('de-DE', {
        style: 'currency',
        currency: 'EUR'
    }).format(inputZim / euroToday)
}
if (selectB.value == "libra") {
    converterPara.innerHTML = new Intl.NumberFormat ('en-UK', {
        style: 'currency',
        currency: 'GBP'
    }).format(inputZim / libraToday)
}
if (selectB.value == "bitcoin") {
    converterPara.innerHTML = new Intl.NumberFormat ('en-US', {
        style: 'currency',
        currency: 'BTC'
    }).format(inputZim / bitcoinToday)
}
}

function convertEvent() {
const imgA = document.querySelector('.img-A')
const paragA = document.querySelector('.p-A')

const imgB = document.querySelector('.img-B')
const paragB = document.querySelector('.p-B')

if (selectA.value == "real") {
    imgA.src = 'assets/real.png'
    paragA.innerHTML = 'Real Brasileiro'
}
//-----------------------------------------------------------------
if (selectB.value == "dollar") {
    imgB.src = 'assets/dollar.png'
    paragB.innerHTML = 'Dólar Americano'
}
if (selectB.value == "euro") {
    imgB.src = 'assets/euro.png'
    paragB.innerHTML = 'Euro'
}
if (selectB.value == "libra") {
    imgB.src = 'assets/libra.png'
    paragB.innerHTML = 'Libra'
}
if (selectB.value == "bitcoin") {
    imgB.src = 'assets/bitcoin.png'
    paragB.innerHTML = 'Bitcoin'
}
convertValue()
}

selectA.addEventListener('change', convertEvent)
selectB.addEventListener('change', convertEvent)
mainButton.addEventListener('click', convertValue)