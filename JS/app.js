
function Writesomethin(where, txt) {
	var browserList = document.getElementById(where),
		newItem = document.createElement('li');

	//console.log(where);
	//console.log(txt);

	newItem.textContent = txt;
	browserList.appendChild( newItem );
}

document.body.addEventListener('click', function() {
	Writesomethin('user', 'Ty klikac jeden')
});

Writesomethin('browser', 'Page loaded!');

function Pozdrav(meno) {
	console.log('Ahoj ' + meno + ' hlupak jeden...');
}

function Pocitaj() {
	var Vysledok;
	var a = prompt('Zadaj prve cislo'),
		b = prompt('Zadaj prve cislo');

	Vysledok = parseInt(a) + parseInt(b);

	return console.log(Vysledok)
}

function Bigger() {
	var vacsie;
	var a = prompt('Zadaj prve cislo'),
		b = prompt('Zadaj prve cislo');

	a = parseInt(a);
	b = parseInt(b);

	if (a > b) {
		Quote = 'A je vacsie a teda ' + a;
		console.log(Quote);
		Writesomethin('browser', Quote);
	} else {
		Quote = 'B je vacsie a teda ' + b;
		console.log(Quote);
		Writesomethin('browser', Quote);
    }
}

function Howmuch(pocetProduktov, cenaJedneho) {

	Celkovacena = parseInt(pocetProduktov) * parseInt(cenaJedneho);

	var browserList = document.getElementById('browser');
	var newItem = document.createElement('li');

	newItem.textContent = 'Kupil si ' + pocetProduktov + ' produktov za ' + Celkovacena + ' oiro...';

	return browserList.appendChild(newItem);
}

document.body.addEventListener('keyup', function Keyboardedit(event) {

	//console.log(event.key);

	var oldLeft = getComputedStyle(document.body).left,
		oldTop = getComputedStyle(document.body).top;

	oldLeft = parseInt(oldLeft);
	oldTop = parseInt(oldTop);

	if (event.key == 'ArrowRight') {
		console.log(event.key);
	} else if (event.key == 'ArrowLeft') {
		console.log(event.key);
	} else if (event.key == 'ArrowUp') {
		console.log(event.key);
	} else if (event.key == 'ArrowDown') {
		console.log(event.key);
	};

})

function Sucet(Numbers) {

	var sucetpola = 0;

	for (var i = 0; i < Numbers.length; i++) {
		sucetpola = sucetpola + Numbers[i];
    }

	Writesomethin('browser', 'Sucet pola je: ' + sucetpola);
}

Sucet([1, 3, 5, 1]);

function Kazdedruhe(Numbers) {

	for (var i = 0; i < Numbers.length; i++) {
        if (i%2==0) {
			Writesomethin('browser', 'Kazde druhe je: ' + Numbers[i]);
        }
	}
}

Kazdedruhe([1, 3, 5, 1]);

function ArrayKing(Numbers) {
	var king = 0;
	for (var i = 0; i < Numbers.length; i++) {
		if (Numbers[i] > king) {
			king = Numbers[i];
		}
	}

	return Writesomethin('browser', 'Navacsie cislo v poli je: ' + king);
}

ArrayKing([1, 3, 5, 1]);