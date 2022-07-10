function vero() {
    let oldFilm = document.getElementById('showText1');
    oldFilm.textContent = 'Σωστή απάντηση'
    let imageCorrect = document.getElementById('imageCorrect1');
    let imageWrong = document.getElementById('imageWrong1');
    imageCorrect.style.display = 'block';
    imageWrong.style.display = "none";
}

function falso() {
    let oldFilm = document.getElementById('showText1');
    oldFilm.textContent = 'Λάθος απάντηση'
    let imageCorrect = document.getElementById('imageCorrect1');
    let imageWrong = document.getElementById('imageWrong1');
    imageWrong.style.display = "block";
    imageCorrect.style.display = 'none'
}

function showBond() {
let valore = document.getElementById('myInput1');
let imageCorrect = document.getElementById('imageCorrect5');
let imageWrong = document.getElementById('imageWrong5');

if(valore.value== ""){
alert('Παρακαλώ συμπλήρωσε το όνομα!')
}

let regex = /Roger Moore|roger moore|Moore|moore/gi;
if(regex.test(valore.value)){
    showText5.textContent = 'Σωστή απάντηση';
    imageCorrect.style.display = 'block'
    imageWrong.style.display = "none";
} else {showText5.textContent = 'Λάθος απάντηση';
    imageWrong.style.display = "block";
    imageCorrect.style.display = 'none'}
}

function showCastle() {
let valore2 = document.getElementById('myInput2');
let imageCorrect = document.getElementById('imageCorrect6');
let imageWrong = document.getElementById('imageWrong6');

if(valore2.value== ""){
alert('Παρακαλώ συμπλήρωσε τη λέξη!')
}

let regex2 = /Νέο|νεο|Νεο|νέο/gi;
if(regex2.test(valore2.value)){
    showText6.textContent = 'Σωστή απάντηση';
    imageWrong.style.display = "none";
    imageCorrect.style.display = 'block'
} else {showText6.textContent = 'Λάθος απάντηση'
    imageWrong.style.display = "block";
    imageCorrect.style.display = 'none' }
}

function showActorTrue() {
    showText2.textContent = 'Σωστή απάντηση'
    let imageCorrect = document.getElementById('imageCorrect2');
    let imageWrong = document.getElementById('imageWrong2');
    imageWrong.style.display = "none";
    imageCorrect.style.display = 'block'
}

function showActorFalse() {
    showText2.textContent = 'Λάθος απάντηση'
    let imageCorrect = document.getElementById('imageCorrect2');
    let imageWrong = document.getElementById('imageWrong2');
    imageWrong.style.display = "block";
    imageCorrect.style.display = 'none'
}


function showAdvertTrue(){
    showText4.textContent = 'Σωστή απάντηση';
    window.location = "https://www.youtube.com/watch?v=Jgvd-5Dt9gs/";
    let imageCorrect = document.getElementById('imageCorrect4');
    let imageWrong = document.getElementById('imageWrong4');
    imageWrong.style.display = "none";
    imageCorrect.style.display = 'block'
}

function showAdvertFalse(){
    showText4.textContent = 'Λάθος απάντηση'
    let imageCorrect = document.getElementById('imageCorrect4');
    let imageWrong = document.getElementById('imageWrong4');
    imageWrong.style.display = "block";
    imageCorrect.style.display = 'none'
}


function showComposerTrue(){
    showText3.textContent = 'Σωστή απάντηση';
    let imageCorrect = document.getElementById('imageCorrect3');
    let imageWrong = document.getElementById('imageWrong3');
    imageWrong.style.display = "none";
    imageCorrect.style.display = 'block'
}

function showComposerFalse(){
    showText3.textContent = 'Λάθος απάντηση'
    let imageCorrect = document.getElementById('imageCorrect3');
    let imageWrong = document.getElementById('imageWrong3');
    imageWrong.style.display = "block";
    imageCorrect.style.display = 'none'
}

