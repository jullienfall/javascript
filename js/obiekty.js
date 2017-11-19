var osoba = {
    name: 'marcin',
    height: 170,
    print: function() {
        console.log(this.name);
    }
}
console.log(osoba.name + ' ' + osoba.height);
osoba.print();

osoba.weight = 65;
osoba.printDetail = function () {
    return this.name + ' ' + this.height + ' ' + this.weight;
}
console.log(osoba.printDetail());

// class

class Osoba {
    constructor (imie, nazwisko) {
        this.imie = imie;
        this.nazwisko = nazwisko;
    }
    wyswietlInfo() {
        console.log(this.imie + ' ' + this.nazwisko);
    }
}

var krystian = new Osoba('krystian', 'dziopa');
krystian.wyswietlInfo();

var marcin = new Osoba('marcin', 'nowak');
marcin.wyswietlInfo();
