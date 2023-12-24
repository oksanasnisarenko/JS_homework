'use strict';

let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}
start(); 

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};


function rememberMyFilms () {
	for (let i = 0; i < 2; i++) {
		const a = prompt('Один из последних просмотренных фильмов?', ''),
			b = prompt('На сколько оцените его?', '');	 
		if (a != null && b != null && a != '' && b != '' && a.length < 50) {
			personalMovieDB.movies[a] = b;
			console.log('done');
		} else {
			console.log('error');
			i--;
		}	
	}
}
rememberMyFilms ();

function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		console.log('Просмотрено довольно мало фильмов');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		console.log('Вы классический зритель');
	} else if (personalMovieDB.count >= 30) {
		console.log('Вы киноман');
	} else {
		console.log('Произошла ошибка');
	}
}
detectPersonalLevel();

function showMyDB(hidden) {
	if (!hidden) {
		console.log(personalMovieDB);
	}
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
	}
}

writeYourGenres();




function calculateVolumeAndArea(length) {
	if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
		return 'При вычислении произошла ошибка';
	}
	let volume = 0,
		area = 0;
	
	volume = length * length * length;
	area = 6 * (length * length);
	return `Обьем куба: ${volume}, площа всей поверхности: ${area}`;
}

calculateVolumeAndArea(3);

function getCoupeNumber(place) {
	if (typeof(place) !== 'number' || place < 0 || !Number.isInteger(place)) {
		return console.log('Ошибка. Проверьте правильность введенного номера места');
	} else if (place === 0 || place > 36) {
		return console.log('Таких мест в вагоне не существует');
	} else {
		return console.log(Math.ceil(place / 4));
	}

}
getCoupeNumber(33);