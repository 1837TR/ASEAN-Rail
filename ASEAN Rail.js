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

//Selecting Origins or Destinations
let originSearchButton = document.getElementById('searchbyoriginsbutton');

function showOriginSearch() {
   document.getElementsByClassName('searchformsandtable')[0].style.display = 'block';
   document.getElementById('searchbyoriginform').style.display = 'block';
   document.getElementById('searchbydestinationform').style.display = 'none';
   originSearchButton.style.display = 'none';
   document.getElementById('originsearchbutton').style.display = 'block';
   document.getElementById('destinationsearchbutton').style.display = 'none';
   document.getElementById('searchbybuttontitle').innerHTML = "Switch to";
   document.getElementsByClassName('searchbytitleandbuttons')[0].style.justifyContent = "start";
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
   document.getElementsByClassName('searchbytitleandbuttons')[0].style.justifyContent = "start";
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