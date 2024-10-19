// BKK Pic Change
let hoverMenuPicBKK = document.getElementById("bkkpic");

function destinationBoxChangeBKK() {
    hoverMenuPicBKK.style.opacity = '0.5'
    document.getElementById("bkktext").style.color = 'black';
}

function destinationBoxReturnBKK() {
    hoverMenuPicBKK.style.opacity = "1"
    document.getElementById("bkktext").style.color = "white" 
}

hoverMenuPicBKK.onmouseover = destinationBoxChangeBKK;
hoverMenuPicBKK.onmouseout = destinationBoxReturnBKK;

// Hanoi Pic Change
let hoverMenuPicHanoi = document.getElementById("hanoipic");

function destinationBoxChangeHanoi() {
    hoverMenuPicHanoi.style.opacity = '0.5'
    document.getElementById("hanoitext").style.color = 'black';
}

function destinationBoxReturnHanoi() {
    hoverMenuPicHanoi.style.opacity = "1"
    document.getElementById("hanoitext").style.color = "white" 
}

hoverMenuPicHanoi.onmouseover = destinationBoxChangeHanoi;
hoverMenuPicHanoi.onmouseout = destinationBoxReturnHanoi;

// Singapore Pic Change
let hoverMenuPicSng = document.getElementById("sngpic");

function destinationBoxChangeSng() {
    hoverMenuPicSng.style.opacity = '0.5'
    document.getElementById("sngtext").style.color = 'black';
}

function destinationBoxReturnSng() {
    hoverMenuPicSng.style.opacity = "1"
    document.getElementById("sngtext").style.color = "white" 
}

hoverMenuPicSng.onmouseover = destinationBoxChangeSng;
hoverMenuPicSng.onmouseout = destinationBoxReturnSng;

// Kuala Lumpur Pic Change
let hoverMenuPicKl = document.getElementById("klpic");

function destinationBoxChangeKl() {
    hoverMenuPicKl.style.opacity = '0.5'
    document.getElementById("kltext").style.color = 'black';
}

function destinationBoxReturnKl() {
    hoverMenuPicKl.style.opacity = "1"
    document.getElementById("kltext").style.color = "white" 
}

hoverMenuPicKl.onmouseover = destinationBoxChangeKl;
hoverMenuPicKl.onmouseout = destinationBoxReturnKl;