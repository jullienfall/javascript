var jsonOsoby = {
    'osoby': [
        {
            imie: 'krystian', 
            nazwisko: 'dziopa',
            zainteresowania: [
                {nazwa: 'podroze'},
                {nazwa: 'koszykowka'}
            ]
        },
        {
            imie: 'dominik', 
            nazwisko: 'nowak',
            zainteresowania: [
                {nazwa: 'pilka'},
                {nazwa: 'plywanie'}
            ]
        },
        {
            imie: 'klaudia', 
            nazwisko: 'kowalska',
            zainteresowania: [
                {nazwa: 'ksiazka'},
                {nazwa: 'gotowanie'}
            ]
        }
    ]
}

for (var i=0; i < jsonOsoby.osoby.length; i++) {
    for (var j=0; j < jsonOsoby.osoby[i].zainteresowania.length; j++) {
        console.log(jsonOsoby.osoby[i].zainteresowania[j].nazwa)
    }
}

console.log(jsonOsoby.osoby[2].zainteresowania[0].nazwa);

for (var i = 0; i < jsonOsoby.osoby.length; i++) {
    console.log(jsonOsoby.osoby[i].imie);
}

jsonOsoby.osoby.forEach(function(element, index) {
    console.log(element.imie + ' ' + element.nazwisko);
})