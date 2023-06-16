let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели','');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели','');
    };
}
start();

let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
};

function rememberMyFilms(){
    for(let i = 0; i < 2; i++){
        const a = prompt('один из просмотренных фильмов','');
        const b = prompt('на сколько бы вы его оценили','');
        if(a != null & b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        };
    };
};
// rememberMyFilms();

function detectPersonallLevel(){
    if(personalMovieDB.count < 10){
        alert('Просмотрено мало фильмов');
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        alert('Вы классический зритель');
    }else if(personalMovieDB.count >= 30){
        alert('Вы киноман');
    }else{
        alert('Ошибка');
    };
};
// detectPersonallLevel();

function showMyDB(){
    if(personalMovieDB.privat == false){
        console.log(personalMovieDB);
    }
}
// showMyDB();
function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i-1] = prompt(`ваш любимый жанр под номером ${i}`, '');
    }
};
writeYourGenres();
showMyDB();

