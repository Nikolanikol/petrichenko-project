let numberOfFilms = prompt('Сколько фильмов вы уже просмотрели','');
let personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
};

for(let i = 0; i < 2; i++){
    const a = prompt('один из просмотренных фильмов','');
    const b = prompt('на сколько бы вы его оценили','');
    if(a != null & b != null && a != '' && b != '' && a.length < 50 && b.length < 50) {
        personalMovieDB.movies[a] = b;
    } else {
        i--;
    }
}
if(personalMovieDB.count < 10){
    alert('Просмотрено мало фильмов');
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    alert('Вы классический зритель');
}else if(personalMovieDB.count >= 30){
    alert('Вы киноман');
}else{
    alert('Ошибка');
}



console.log(personalMovieDB);

