function wypiszWKonsoli() {
    console.log('Wywolanie funkcji');
}
wypiszWKonsoli();

function dodawanie(parametr1,parametr2) {
/*    console.log(parametr1 + parametr2);
    console.log('123');*/
    
    return parametr1 + parametr2;
}

//console.log(dodawanie(4,5));
var wynik = dodawanie(4,5);
console.log(wynik);

console.log(10 + wynik);

function mnozenie(parametr3,parametr4) {
    console.log(parametr3 * parametr4);
}
mnozenie(dodawanie(4,5),4);