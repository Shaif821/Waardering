//                  Rond af naar boven
var aantalWaarderingen = Math.ceil(5*Math.random());
var totaalKliks = aantalWaarderingen*Math.random()*5;
var uitvoerStuks = document.getElementById('stuks');
var uitvoerRating = document.getElementById('rating');
var geenSterren = document.querySelectorAll('.geen');



function gevuldeSter(sterNummer, procent) {
    var naam = 'ster' + sterNummer;
    //Zorgt ervoor dat het maar 1 ster bereikt:
    procent = Math.min(procent, 100);
    document.getElementById(naam).style.width = procent+'%';
}


function  gevulDeSterren(rating) {
    //1  moet kleiner zijn dan 6, dan heb je er 5.
    for(var i=1; i<6; i++){
        //elker ster wordt gekleurd
        gevuldeSter(i, rating*100);
        rating --;
    }
}


// willkeurig generen en uitvoeren in DOM
function uitvoeren() {
uitvoerStuks.innerHTML = aantalWaarderingen
//                            Rond af          Zorgt voor kleine getallen
uitvoerRating.innerHTML = Math.ceil(10*totaalKliks/aantalWaarderingen)/10;
gevulDeSterren(Math.ceil(10*totaalKliks/aantalWaarderingen)/10)
}

uitvoeren();


function uitvoerKlik() {
    aantalWaarderingen ++;
    var sternummertje = this.getAttribute('data-role');
    totaalKliks += parseInt(sternummertje);
    uitvoeren();
}
for(var i=0; i<geenSterren.length; i++) {
    geenSterren[i].addEventListener('click', uitvoerKlik);
}