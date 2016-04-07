var aantalGev
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


gevulDeSterren(3,2);