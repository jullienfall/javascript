var tablica = [10, 'marcin', 30, 40];
console.log(tablica);
console.log(tablica[1]);

//dodajemy elementy
tablica[4] = 'anna';
console.log(tablica);

//dodajemy na koniec element
tablica.push('martyna',50, 90);
console.log(tablica);

//usuwamy elementy - ostatni
tablica.pop();
console.log(tablica);

//dodajemy na poczatek
tablica.unshift('julia', 10, 'piotr');
console.log(tablica);

//usuwa pierwszy element
tablica.shift();
console.log(tablica);

//dlugosc tablicy
console.log(tablica.length);

//laczy do stringa tablice
console.log(tablica.join("-"));

//odwraca kolejnosc
console.log(tablica.reverse());
console.log(tablica);

//sortowanie
console.log(tablica.sort());
console.log(tablica);



