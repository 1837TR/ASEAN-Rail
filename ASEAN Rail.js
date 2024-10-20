//Main Menu Hover Animation
document.getElementsByClassName('menubox')[0].onmouseover = function() {
    document.getElementById("timepricebox").style.paddingLeft = "25px";
}

document.getElementsByClassName('menubox')[0].onmouseout = function() {
    document.getElementById("timepricebox").style.paddingLeft = "3%";
}

document.getElementsByClassName('menubox')[1].onmouseover = function() {
    document.getElementById("routemapbox").style.paddingLeft = "25px";
}

document.getElementsByClassName('menubox')[1].onmouseout = function() {
    document.getElementById("routemapbox").style.paddingLeft = "3%";
}

document.getElementsByClassName('menubox')[2].onmouseover = function() {
    document.getElementById("amenitiesbox").style.paddingLeft = "25px";
}

document.getElementsByClassName('menubox')[2].onmouseout = function() {
    document.getElementById("amenitiesbox").style.paddingLeft = "3%";
}


//Main Menu OnClick Scroll

document.getElementsByClassName('menubox')[0].onclick = function () {
    document.getElementById('logisticssectitle').scrollIntoView();
};

document.getElementsByClassName('menubox')[1].onclick = function () {
    document.getElementById('routessectitle').scrollIntoView();
};

document.getElementsByClassName('menubox')[2].onclick = function () {
    document.getElementById('amenitiessectitle').scrollIntoView();
};

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

function BKKLink() {
    window.open('https://www.lonelyplanet.com/thailand/bangkok' , '_blank');
}
hoverMenuPicBKK.onclick = BKKLink;

// Vientiane Pic Change
let hoverMenuPicVientiane = document.getElementById("vientianepic");

function destinationBoxChangeVientiane() {
    hoverMenuPicVientiane.style.opacity = '0.5'
    document.getElementById("vientianetext").style.color = 'black';
}

function destinationBoxReturnVientiane() {
    hoverMenuPicVientiane.style.opacity = "1"
    document.getElementById("vientianetext").style.color = "white" 
}

hoverMenuPicVientiane.onmouseover = destinationBoxChangeVientiane;
hoverMenuPicVientiane.onmouseout = destinationBoxReturnVientiane;

function VientianeLink() {
    window.open('https://www.nomadicmatt.com/travel-guides/laos-travel-guide/vientiane/' , '_blank');
}
hoverMenuPicVientiane.onclick = VientianeLink;

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

function sngLink() {
    window.open('https://www.visitsingapore.com/' , '_blank');
}
hoverMenuPicSng.onclick = sngLink;


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

function klLink() {
    window.open('https://www.lonelyplanet.com/malaysia/kuala-lumpur' , '_blank');
}
hoverMenuPicKl.onclick = klLink;

//Map

let kunmingTextBox = document.getElementsByClassName('textbox')[0];
let kunmingText = document.getElementsByClassName('text')[0];
let kunmingMapPoint = document.getElementsByClassName('mappoint')[0];

function kunmingCityNamePopUp() {
    kunmingTextBox.style.display = "inline";
    kunmingText.style.display = "inline";
    kunmingMapPoint.style.fill = "#F6EC5F";
}

function kunmingCityNameRevert() {
    kunmingTextBox.style.display = "none";
    kunmingText.style.display = "none";
    kunmingMapPoint.style.fill = "#DD4F40";
}

kunmingMapPoint.onmouseover = kunmingCityNamePopUp;
kunmingMapPoint.onmouseout = kunmingCityNameRevert;

let vientianeTextBox = document.getElementsByClassName('textbox')[1];
let vientianeMapPoint = document.getElementsByClassName('mappoint')[1];
let vientianeText = document.getElementsByClassName('text')[1];

function vientianeCityNamePopUp() {
    vientianeMapPoint.style.fill = "#F6EC5F";
    vientianeTextBox.style.display = "inline";
    vientianeText.style.display = "inline";
}

function vientianeCityNameRevert(){
    vientianeMapPoint.style.fill = "#DD4F40";
    vientianeTextBox.style.display = "none";
    vientianeText.style.display = "none";
}

vientianeMapPoint.onmouseover = vientianeCityNamePopUp;
vientianeMapPoint.onmouseout = vientianeCityNameRevert;

let khonkaenTextBox = document.getElementsByClassName('textbox')[2];
let khonkaenText = document.getElementsByClassName('text')[2];
let khonkaenMapPoint = document.getElementsByClassName('mappoint')[8];

khonkaenMapPoint.onmouseover = function() {
    khonkaenMapPoint.style.fill = '#F6EC5F';
    khonkaenText.style.display = "inline";
    khonkaenTextBox.style.display = "inline";
};

khonkaenMapPoint.onmouseout = function() {
    khonkaenMapPoint.style.fill = '#DD4F40';
    khonkaenText.style.display = "none";
    khonkaenTextBox.style.display = "none";
};

let phuketTextBox = document.getElementsByClassName('textbox')[5];
let phuketText = document.getElementsByClassName('text')[5];
let phuketMapPoint = document.getElementsByClassName('mappoint')[3];

phuketMapPoint.onmouseover = function() {
    phuketMapPoint.style.fill = "#F6EC5F";
    phuketText.style.display = "inline";
    phuketTextBox.style.display = "inline";
}

phuketMapPoint.onmouseout = function() {
    phuketMapPoint.style.fill = "#DD4F40";
    phuketTextBox.style.display = "none";
    phuketText.style.display = "none";
}

let bkkMapPoint = document.getElementsByClassName('mappoint')[2];
let bkkText = document.getElementsByClassName('text')[3];
let bkkTextBox = document.getElementsByClassName('textbox')[3];

bkkMapPoint.onmouseover = function() {
   bkkMapPoint.style.fill = "#F6EC5F";
   bkkText.style.display = "inline";
   bkkTextBox.style.display = "inline";
}

bkkMapPoint.onmouseout = function() {
    bkkMapPoint.style.fill = "#DD4F40";
    bkkTextBox.style.display = "none";
    bkkText.style.display = "none";
}


let huahinMapPoint = document.getElementsByClassName('mappoint')[7];
let huahinText = document.getElementsByClassName('text')[4];
let huahinTextBox = document.getElementsByClassName('textbox')[4];

huahinMapPoint.onmouseover = function() {
   huahinMapPoint.style.fill = "#F6EC5F";
   huahinText.style.display = "inline";
   huahinTextBox.style.display = "inline";
}

huahinMapPoint.onmouseout = function() {
    huahinMapPoint.style.fill = "#DD4F40";
    huahinTextBox.style.display = "none";
    huahinText.style.display = "none";
}

let johorMapPoint = document.getElementsByClassName('mappoint')[4];
let johorText = document.getElementsByClassName('text')[7];
let johorTextBox = document.getElementsByClassName('textbox')[7];

johorMapPoint.onmouseover = function() {
   johorMapPoint.style.fill = "#F6EC5F";
   johorText.style.display = "inline";
   johorTextBox.style.display = "inline";
}

johorMapPoint.onmouseout = function() {
    johorMapPoint.style.fill = "#DD4F40";
    johorTextBox.style.display = "none";
    johorText.style.display = "none";
}

let singaporeMapPoint = document.getElementsByClassName('mappoint')[5];
let singaporeText = document.getElementsByClassName('text')[8];
let singaporeTextBox = document.getElementsByClassName('textbox')[8];

singaporeMapPoint.onmouseover = function() {
   singaporeMapPoint.style.fill = "#F6EC5F";
   singaporeText.style.display = "inline";
   singaporeTextBox.style.display = "inline";
}

singaporeMapPoint.onmouseout = function() {
    singaporeMapPoint.style.fill = "#DD4F40";
    singaporeTextBox.style.display = "none";
    singaporeText.style.display = "none";
}

let penangMapPoint = document.getElementsByClassName('mappoint')[6];
let penangText = document.getElementsByClassName('text')[9];
let penangTextBox = document.getElementsByClassName('textbox')[9];

penangMapPoint.onmouseover = function() {
   penangMapPoint.style.fill = "#F6EC5F";
   penangText.style.display = "inline";
   penangTextBox.style.display = "inline";
}

penangMapPoint.onmouseout = function() {
    penangMapPoint.style.fill = "#DD4F40";
    penangTextBox.style.display = "none";
    penangText.style.display = "none";
}

let kualalumpurMapPoint = document.getElementsByClassName('mappoint')[9];
let kualalumpurText = document.getElementsByClassName('text')[6];
let kualalumpurTextBox = document.getElementsByClassName('textbox')[6];

kualalumpurMapPoint.onmouseover = function() {
   kualalumpurMapPoint.style.fill = "#F6EC5F";
   kualalumpurText.style.display = "inline";
   kualalumpurTextBox.style.display = "inline";
}

kualalumpurMapPoint.onmouseout = function() {
    kualalumpurMapPoint.style.fill = "#DD4F40";
    kualalumpurTextBox.style.display = "none";
    kualalumpurText.style.display = "none";
}

//Selecting Origins or Destinations
let originSearchButton = document.getElementById('searchbyoriginsbutton');
let moveTheButton = document.getElementsByClassName('movedbuttons')[0];
let buttonsToMove = document.getElementsByClassName('searchbytitleandbuttons')[0];

function showOriginSearch() {
   document.getElementsByClassName('searchformsandtable')[0].style.display = 'block';
   document.getElementById('searchbyoriginform').style.display = 'block';
   document.getElementById('searchbydestinationform').style.display = 'none';
   originSearchButton.style.display = 'none';
   document.getElementById('originsearchbutton').style.display = 'block';
   document.getElementById('destinationsearchbutton').style.display = 'none';
   document.getElementById('searchbybuttontitle').innerHTML = "Switch to";
   document.getElementsByClassName('searchbytitleandbuttons')[0].style.justifyContent = "end";
   moveTheButton.appendChild(buttonsToMove);
   if (document.getElementById('searchbydestinationsbutton').style.display === 'none') {
     document.getElementById('searchbydestinationsbutton').style.display = 'block';
   }
   
}

originSearchButton.onclick = showOriginSearch

let destinationSearchButton = document.getElementById('searchbydestinationsbutton');

function showDestinationSearch() {
   document.getElementsByClassName('searchformsandtable')[0].style.display = 'block';
   destinationSearchButton.style.display = 'none';
   document.getElementById('searchbydestinationform').style.display = 'block';
   document.getElementById('searchbyoriginform').style.display = 'none';
   document.getElementById('originsearchbutton').style.display = 'none';
   document.getElementById('destinationsearchbutton').style.display = 'block';
   document.getElementById('searchbybuttontitle').innerHTML = "Switch to";
   document.getElementsByClassName('searchbytitleandbuttons')[0].style.justifyContent = "end";
   moveTheButton.appendChild(buttonsToMove);
   if (document.getElementById('searchbyoriginsbutton').style.display === 'none') {
    document.getElementById('searchbyoriginsbutton').style.display = 'block';
  }
}

destinationSearchButton.onclick = showDestinationSearch

//Searching Table
function filterByOrigin() {
   let originSearch = document.getElementById('origin').value;
   let originCells = document.getElementsByClassName('origin');

for (let i = 0; i < originCells.length; i++) {
    let originData = originCells[i];
    let originRow = originData.parentElement;
    if (originData.innerText.includes(originSearch)) {
        originRow.classList.remove('notResult');
    } else {
        originRow.classList.add('notResult')
    };
}
}

function filterByDestination() {
    let destinationSearch = document.getElementById('destination').value;
    let destinationCells = document.getElementsByClassName('destination');
 
 for (let i = 0; i < destinationCells.length; i++) {
     let destinationData = destinationCells[i];
     let destinationRow = destinationData.parentElement;
     if (destinationData.innerText.includes(destinationSearch)) {
         destinationRow.classList.remove('notResult');
     } else {
         destinationRow.classList.add('notResult')
     };
 }
 }

 // Amenities Pic Slider
 let slidesContainer = document.getElementsByClassName('amenitiespicscon')[0];
 let slide = document.querySelector(".slide");
 let leftButton = document.getElementById('buttonleft');
 let rightButton = document.getElementById('buttonright');

 function slideWidth() {
    let slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
 }

 leftButton.onclick = slideWidth;

 function slideWidthback() {
    let slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
 }

 rightButton.onclick = slideWidthback;