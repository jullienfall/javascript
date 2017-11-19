var liczba = 10;
var liczba2 = 20;
liczba += liczba2;
console.log(liczba);

var liczba3 = 30;
var liczba4 = '30';

/*== wartosci sa takie same
===wartosci i typ sa takie same
*/

if (liczba3 === liczba4) {
    console.log('prawda');
}
else {
    console.log('falsz');
}

if ('2' == 2 && (8 < 4)) {
    console.log('prawda2');
}
else {
    console.log('nieprawda');
}

//operator warunkowy ?
var wynik = (liczba < 0) ? -1 : 1;
console.log(wynik);