//Nav Bar
let navButton = document.getElementById('navbutton');
let buttonMenu = document.getElementsByClassName('buttonmenu')[0];
let closeButton = document.getElementById('closebutton');

function buttonHover() {
    buttonMenu.style.display = 'flex';
    navButton.style.transform = 'rotate(-90deg)';
    navButton.style.backgroundColor = '#fff';
    navButton.style.color = '#000';
};

navButton.onmouseenter = buttonHover;

function buttonMenuClose() {
    buttonMenu.style.display = 'none';
    navButton.style.display = 'block';
    navButton.style.transform = 'rotate(0deg)';
    navButton.style.backgroundColor = '#000';
    navButton.style.color = '#fff';
    closeButton.style.display = 'none';
}

function buttonClick() {
    if (window.innerWidth > 500) {
        navButton.style.backgroundColor = '#fff';
        navButton.style.color = '#000';
        buttonMenu.style.display = 'flex';
    }  else {
        buttonMenu.style.display = 'grid';
        buttonMenu.style.gridTemplateRows = 'repeat(2, auto)';
        buttonMenu.style.gridTemplateColumns = 'repeat(2, auto)';
        navButton.style.display = 'none';
        closeButton.style.display = 'inline';
    }
}

navButton.onclick = buttonClick;
buttonMenu.onmouseleave = buttonMenuClose;
closeButton.onclick = buttonMenuClose;


//Ticket Button
let ticketButton = document.getElementsByClassName('landingbooknow')[0];
let ticketMenu = document.getElementsByClassName('ticketsearch')[0];

ticketButton.onclick = function openTicketSearch() {
     ticketMenu.style.display = 'block';
}



//Main Menu Hover Animation
document.getElementsByClassName('menubox')[0].onmouseover = function() {
    document.getElementById("timepricebox").style.paddingLeft = "6%";
}

document.getElementsByClassName('menubox')[0].onmouseout = function() {
    document.getElementById("timepricebox").style.paddingLeft = "3%";
}

document.getElementsByClassName('menubox')[1].onmouseover = function() {
    document.getElementById("routemapbox").style.paddingLeft = "6%";
}

document.getElementsByClassName('menubox')[1].onmouseout = function() {
    document.getElementById("routemapbox").style.paddingLeft = "3%";
}

document.getElementsByClassName('menubox')[2].onmouseover = function() {
    document.getElementById("amenitiesbox").style.paddingLeft = "6%";
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

let svgCon = document.getElementsByTagName('svg')[0];
let screenWidth = window.innerWidth;
let firstNum = (parseInt(screenWidth) - 1500) / 2 * -1;

function slidingSVGCon() {
    svgCon.setAttribute('viewBox' , `${firstNum} 0 ${screenWidth} 600`);
};

slidingSVGCon(); 

console.log(svgCon.getAttribute('viewBox'));

let kunmingText = document.getElementsByClassName('text')[0];
let kunmingMapPoint = document.getElementsByClassName('mappoint')[0];

function kunmingCityNamePopUp() {
    kunmingText.style.display = "inline";
    kunmingMapPoint.style.fill = "#DD4F40";
}

function kunmingCityNameRevert() {
    kunmingText.style.display = "none";
    kunmingMapPoint.style.fill = "#487ab9";
}

kunmingMapPoint.onmouseover = kunmingCityNamePopUp;
kunmingMapPoint.onmouseout = kunmingCityNameRevert;

let vientianeTextBox = document.getElementsByClassName('textbox')[0];
let vientianeMapPoint = document.getElementsByClassName('mappoint')[1];
let vientianeText = document.getElementsByClassName('text')[8];

function vientianeCityNamePopUp() {
    vientianeMapPoint.style.fill = "#DD4F40";
    vientianeTextBox.style.display = "inline";
    vientianeText.style.display = "inline";
}

function vientianeCityNameRevert(){
    vientianeMapPoint.style.fill = "#487ab9";
    vientianeTextBox.style.display = "none";
    vientianeText.style.display = "none";
}

vientianeMapPoint.onmouseover = vientianeCityNamePopUp;
vientianeMapPoint.onmouseout = vientianeCityNameRevert;

let khonkaenTextBox = document.getElementsByClassName('textbox')[1];
let khonkaenText2 = document.getElementsByClassName('text')[9];
let khonkaenText = document.getElementsByClassName('text')[10];
let khonkaenMapPoint = document.getElementsByClassName('mappoint')[2];

khonkaenMapPoint.onmouseover = function() {
    khonkaenMapPoint.style.fill = '#DD4F40';
    khonkaenText.style.display = "inline";
    khonkaenTextBox.style.display = "inline";
    khonkaenText2.style.display = "inline";
};

khonkaenMapPoint.onmouseout = function() {
    khonkaenMapPoint.style.fill = '#487ab9';
    khonkaenText.style.display = "none";
    khonkaenText2.style.display = "none";
    khonkaenTextBox.style.display = "none";
};

let phuketText = document.getElementsByClassName('text')[1];
let phuketMapPoint = document.getElementsByClassName('mappoint')[5];

phuketMapPoint.onmouseover = function() {
    phuketMapPoint.style.fill = "#DD4F40";
    phuketText.style.display = "inline";
}

phuketMapPoint.onmouseout = function() {
    phuketMapPoint.style.fill = "#487ab9";
    phuketText.style.display = "none";
}

let bkkMapPoint = document.getElementsByClassName('mappoint')[3];
let bkkText = document.getElementsByClassName('text')[7];

bkkMapPoint.onmouseover = function() {
   bkkMapPoint.style.fill = "#DD4F40";
   bkkText.style.display = "inline";
}

bkkMapPoint.onmouseout = function() {
    bkkMapPoint.style.fill = "#487ab9";
    bkkText.style.display = "none";
}


let huahinMapPoint = document.getElementsByClassName('mappoint')[4];
let huahinText = document.getElementsByClassName('text')[2];

huahinMapPoint.onmouseover = function() {
   huahinMapPoint.style.fill = "#DD4F40";
   huahinText.style.display = "inline";
}

huahinMapPoint.onmouseout = function() {
    huahinMapPoint.style.fill = "#487ab9";
    huahinText.style.display = "none";
}

let johorMapPoint = document.getElementsByClassName('mappoint')[8];
let johorText = document.getElementsByClassName('text')[5];

johorMapPoint.onmouseover = function() {
   johorMapPoint.style.fill = "#DD4F40";
   johorText.style.display = "inline";
}

johorMapPoint.onmouseout = function() {
    johorMapPoint.style.fill = "#487ab9";
    johorText.style.display = "none";
}

let singaporeMapPoint = document.getElementsByClassName('mappoint')[9];
let singaporeText = document.getElementsByClassName('text')[6];

singaporeMapPoint.onmouseover = function() {
   singaporeMapPoint.style.fill = "#DD4F40";
   singaporeText.style.display = "inline";
}

singaporeMapPoint.onmouseout = function() {
    singaporeMapPoint.style.fill = "#487ab9";
    singaporeText.style.display = "none";
}

let penangMapPoint = document.getElementsByClassName('mappoint')[6];
let penangText = document.getElementsByClassName('text')[3];

penangMapPoint.onmouseover = function() {
   penangMapPoint.style.fill = "#DD4F40";
   penangText.style.display = "inline";
}

penangMapPoint.onmouseout = function() {
    penangMapPoint.style.fill = "#487ab9";
    penangText.style.display = "none";
}

let kualalumpurMapPoint = document.getElementsByClassName('mappoint')[7];
let kualalumpurText = document.getElementsByClassName('text')[4];

kualalumpurMapPoint.onmouseover = function() {
   kualalumpurMapPoint.style.fill = "#DD4F40";
   kualalumpurText.style.display = "inline";
}

kualalumpurMapPoint.onmouseout = function() {
    kualalumpurMapPoint.style.fill = "#487ab9";
    kualalumpurText.style.display = "none";
};

   //new
//Timetable and PriceMatrix Search

let pricesButton = document.getElementById('pricebutton');
let timetablesButton = document.getElementById('timetablebutton');
let priceMatrix = document.getElementById('pricematrixandlabels');
let timetableSouth = document.getElementById('timetablesouth');
let timetableNorth = document.getElementById('timetablenorth');
let priceOriginFilterSearchButton = document.getElementById('pricefiltersearchbutton');
let resetFilterSearchButton = document.getElementById('resetbutton');
let searchHeader = document.getElementsByClassName('searchheader')[0];
let searchHeaderText = document.getElementById('searchbyheader');
let timetablesLabelN = document.getElementsByClassName('timetablelabel')[0];
let timetablesLabelS = document.getElementsByClassName('timetablelabel')[1];

function checkScreenforOverflow () {
    if (window.innerWidth > 1130) {
    priceMatrix.style.overflowX = 'hidden';
}
};

checkScreenforOverflow();
window.onresize = checkScreenforOverflow;

pricesButton.onclick = function showPriceMatrix() {
    priceMatrix.style.display = 'block';
    timetableSouth.style.display = 'none';
    timetableNorth.style.display = 'none';
    timetablesLabelS.style.display = 'none';
    timetablesLabelN.style.display = 'none';
    searchHeader.style.justifyContent = 'left';
    searchHeader.style.marginLeft = '5%';
    searchHeaderText.innerHTML = "Switch to";
    pricesButton.style.display = 'none';
    if (timetablesButton.style.display === 'none') {
        timetablesButton.style.display = 'block';
    }
}

timetablesButton.onclick = function showTimetables() {
    timetableSouth.style.display = 'block';
    timetableNorth.style.display = 'block';
    timetablesLabelS.style.display = 'block';
    timetablesLabelN.style.display = 'block';
    priceMatrix.style.display = 'none';
    searchHeader.style.justifyContent = 'left';
    searchHeader.style.marginLeft = '5%';
    searchHeaderText.innerHTML = "Switch to";
    timetablesButton.style.display = 'none';
    if (pricesButton.style.display === 'none') {
        pricesButton.style.display = 'block';
    }
}

priceOriginFilterSearchButton.onclick = function filterPriceByOrigin() {
    let priceOriginSearch = document.getElementById('origins').value;
    let priceOriginCells = document.getElementsByClassName('ori');

    for (let i = 0; i < priceOriginCells.length; i++) {
        let priceOriginData = priceOriginCells[i];
        if (!priceOriginData.innerText.includes(priceOriginSearch)) {
            priceOriginData.classList.add('notResult');
        };
    };
    priceOriginFilterSearchButton.style.display = 'none';
    resetFilterSearchButton.style.display = 'block';
}

resetFilterSearchButton.onclick = function resetFilterSearch () {
    let priceOriginCells = document.getElementsByClassName('ori');

    for (let i = 0; i < priceOriginCells.length; i++) {
        let priceOriginData = priceOriginCells[i];
            priceOriginData.classList.remove('notResult');
    };
    priceMatrix.style.display = 'block';
    resetFilterSearchButton.style.display = 'none';
    priceOriginFilterSearchButton.style.display = 'block';
}



//timetables formula
function addTimesPngToPhk () {
  let penangTimes = document.getElementsByClassName('pngd');
  let phuketTimes = document.getElementsByClassName('phkd');

   for (let i = 0; i < penangTimes.length; i++) {
    let penangTimeD = penangTimes[i];
    let phuketTimeD = phuketTimes[i];

  let penangTime = penangTimeD.textContent.split(':');
  let hours = parseInt(penangTime[0]);
  let minutes = parseInt(penangTime[1]);

  let totalMinutes = hours * 60 + minutes + 123;
  let newHours = Math.floor(totalMinutes / 60) % 24;
  let newMinutes = totalMinutes % 60;
  let newPhuketTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
  phuketTimeD.textContent = newPhuketTime;
}
};

addTimesPngToPhk();

function addTimesPhkToHhn () {
    let huaHinTimes = document.getElementsByClassName('hhnd');
    let phuketTimes = document.getElementsByClassName('phkd');
    for (let i = 0; i < phuketTimes.length; i++) {
        let phuketTimeD = phuketTimes[i];
        let huaHinTimeD = huaHinTimes[i];

        let phuketTime = phuketTimeD.textContent.split(':');
        let hours = parseInt(phuketTime[0]);
        let minutes = parseInt(phuketTime[1]);

        let totalMinutes = hours * 60 + minutes + 130;
        let newHours = Math.floor(totalMinutes / 60) % 24;
        let newMinutes = totalMinutes % 60;
        let newHuaHinTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
        huaHinTimeD.textContent = newHuaHinTime;
    }
};

addTimesPhkToHhn ();

function addTimesHhnToBKK () {
    let huaHinTimes = document.getElementsByClassName('hhnd');
    let BKKTimes = document.getElementsByClassName('bkkd');

    for (let i = 0; i < huaHinTimes.length; i++) {
        let huaHinTimeD = huaHinTimes[i];
        let BKKTimeD = BKKTimes[i];

        let huaHinTime = huaHinTimeD.textContent.split(':');
        let hours = parseInt(huaHinTime[0]);
        let minutes = parseInt(huaHinTime[1]);

        let totalMinutes = hours * 60 + minutes + 40;
        let newHours = Math.floor(totalMinutes / 60) % 24;
        let newMinutes = totalMinutes % 60;
        let newBKKTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
        BKKTimeD.textContent = newBKKTime;
    }
};

addTimesHhnToBKK ();

function addTimesBKKToKhn () {
    let BKKTimes = document.getElementsByClassName('bkkd');
    let khnTimes = document.getElementsByClassName('khnd');

    for (let i = 0; i < BKKTimes.length; i++) {
        let BKKTimeD = BKKTimes[i];
        let khnTimeD = khnTimes[i];

        let BKKTime = BKKTimeD.textContent.split(':');
        let hours = parseInt(BKKTime[0]);
        let minutes = parseInt(BKKTime[1]);

        let totalMinutes = hours * 60 + minutes + 80;
        let newHours = Math.floor(totalMinutes / 60) % 24;
        let newMinutes = totalMinutes % 60;
        let newkhnTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
        khnTimeD.textContent = newkhnTime;
    }
};

addTimesBKKToKhn ();

function addTimeskhnToVnt () {
    let khnTimes = document.getElementsByClassName('bkkd');
    let vntTimes = document.getElementsByClassName('vntd');

    for (let i = 0; i < khnTimes.length; i++) {
        let khnTimeD = khnTimes[i];
        let vntTimeD = vntTimes[i];

        let khnTime = khnTimeD.textContent.split(':');
        let hours = parseInt(khnTime[0]);
        let minutes = parseInt(khnTime[1]);

        let totalMinutes = hours * 60 + minutes + 53;
        let newHours = Math.floor(totalMinutes / 60) % 24;
        let newMinutes = totalMinutes % 60;
        let newvntTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
        vntTimeD.textContent = newvntTime;
    }
};

addTimeskhnToVnt ();

function addTimesvntToKnm () {
    let vntTimes = document.getElementsByClassName('bkkd');
    let knmTimes = document.getElementsByClassName('knmd');

    for (let i = 0; i < vntTimes.length; i++) {
        let vntTimeD = vntTimes[i];
        let knmTimeD = knmTimes[i];

        let vntTime = vntTimeD.textContent.split(':');
        let hours = parseInt(vntTime[0]);
        let minutes = parseInt(vntTime[1]);

        let totalMinutes = hours * 60 + minutes + 260;
        let newHours = Math.floor(totalMinutes / 60) % 24;
        let newMinutes = totalMinutes % 60;
        let newknmTime = `${newHours.toString().padStart(2, '0')}:${newMinutes.toString().padStart(2, '0')}`;
        knmTimeD.textContent = newknmTime;
    }
};

addTimesvntToKnm ();


let timetableSouthbound = document.getElementById('timetablesouth');


function reverseTableRows(tableId) {
    let table = document.getElementById(tableId);
    let rows = Array.from(table.rows);
    for (let i = rows.length - 1; i >= 0; i--) {
        table.appendChild(rows[i]);
    }
}

function southboundReverse(tableId) {
    let table = document.getElementById(tableId);
    let rows = Array.from(table.rows);
    rows.reverse();
    return rows.map(row => row.outerHTML).join('');
}

document.getElementById('timetablesouth').innerHTML = southboundReverse('timetablenorth');

let table = document.getElementById('pricematrix');


let a = 1302;
let b = 264;
let c = 400;
let d = 202;
let e = 650;
let f = 615;
let g = 330;
let h = 331;
let j = 34;

let priceMatrixT = document.getElementById('pricematrix');
let rowsPM = priceMatrixT.getElementsByTagName('tr');

function calcPrice() {


    for (let i = 0; i < rowsPM.length; i++) {
        let cellsPM = rowsPM[i].getElementsByTagName('td');
        for (let j = 0; j < cellsPM.length; j++) {
            if (cellsPM[j].classList.contains('j')) {
                let currentValue = parseInt(cellsPM[j].textContent);
                let newValue = currentValue + 34;
                cellsPM[j].textContent = newValue;
            }
            if (cellsPM[j].classList.contains('h')) {
                let currentValue = parseInt(cellsPM[j].textContent);
                let newValue = currentValue + 331;
                cellsPM[j].textContent = newValue;
            }
            if (cellsPM[j].classList.contains('g')) {
                let currentValue = parseInt(cellsPM[j].textContent);
                let newValue = currentValue + 330;
                cellsPM[j].textContent = newValue;
            }
            if (cellsPM[j].classList.contains('f')) {
                let currentValue = parseInt(cellsPM[j].textContent);
                let newValue = currentValue + 615;
                cellsPM[j].textContent = newValue;
            }
            if (cellsPM[j].classList.contains('e')) {
                let currentValue = parseInt(cellsPM[j].textContent);
                let newValue = currentValue + 650;
                cellsPM[j].textContent = newValue;
            }
            if (cellsPM[j].classList.contains('d')) {
                let currentValue = parseInt(cellsPM[j].textContent);
                let newValue = currentValue + 202;
                cellsPM[j].textContent = newValue;
            }
            if (cellsPM[j].classList.contains('c')) {
                let currentValue = parseInt(cellsPM[j].textContent);
                let newValue = currentValue + 400;
                cellsPM[j].textContent = newValue;
            }
            if (cellsPM[j].classList.contains('b')) {
                let currentValue = parseInt(cellsPM[j].textContent);
                let newValue = currentValue + 264;
                cellsPM[j].textContent = newValue;
            }
            if (cellsPM[j].classList.contains('a')) {
                let currentValue = parseInt(cellsPM[j].textContent);
                let newValue = currentValue + 1302;
                cellsPM[j].textContent = newValue;
            }
            let km = parseInt(cellsPM[j].textContent);
            const cost = km * 20;
            cellsPM[j].textContent = `${parseInt(cost)} JPY`;
            }
    }
}

calcPrice ();

let THBbutton = document.getElementById('THBButton');

THBbutton.onclick = function changeToTHB () {
    for (let i = 0; i < rowsPM.length; i++) {
        let cellsPM = rowsPM[i].getElementsByTagName('td');
        for (let j = 0; j < cellsPM.length; j++) {
            let JPY = parseInt(cellsPM[j].textContent);
            let THB = JPY / 4.5;
            cellsPM[j].textContent = `${parseInt(THB)} THB`;
        }
    }
    THBbutton.style.display = 'none';
    JPYbutton.style.display = 'block';
    colorVoid();
}

let JPYbutton = document.getElementById('JPYButton');

JPYbutton.onclick = function changetoJPY () {
    for (let i = 0; i < rowsPM.length; i++) {
        let cellsPM = rowsPM[i].getElementsByTagName('td');
        for (let j = 0; j < cellsPM.length; j++) {
            let THB = parseInt(cellsPM[j].textContent);
            let JPY = THB * 4.5;
            cellsPM[j].textContent = `${parseInt(JPY)} JPY`;
        } 
    }
    THBbutton.style.display = 'block';
    JPYbutton.style.display = 'none';
    colorVoid();
}

function colorVoid() {
    for (let i = 0; i < rowsPM.length; i++) {
        let cellsPM = rowsPM[i].getElementsByTagName('td');
        for (let j = 0; j < cellsPM.length; j++) {
            if (cellsPM[j].classList.contains('void')) {
               let voidCells = cellsPM[j]
               voidCells.style.backgroundColor = 'grey';
               voidCells.textContent = '';
            } else if (cellsPM[j].classList.contains('cornerbox')) {
                let cornerBox = cellsPM[j]
                cornerBox.textContent = '';
            }
}
}
}

colorVoid();

     //old
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

originSearchButton.onclick = showOriginSearch;

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

      //above old


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