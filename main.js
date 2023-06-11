let numberOfFilms = prompt('Сколько фильмов вы уже просмотрели','');
let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
};
const a = prompt('один из просмотренных фильмов','');
const b = prompt('на сколько бы вы его оценили','');
const c = prompt('один из просмотренных фильмов','');
const d = prompt('на сколько бы вы его оценили','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);