function cardCat1(){
    var image = document.querySelector('#current-cat');
    image.setAttribute('src', 'images/cat1.jpg');
    var titleCat1 = document.querySelector('#current-title').textContent = 'Cat1';
    var contentCat1 = document.querySelector('#current-content').textContent = 'I am a beautiful cat №1';
}

function cardCat2(){
    var image = document.querySelector('#current-cat');
    image.setAttribute('src', 'images/cat2.jpg');
    var titleCat2 = document.querySelector('#current-title').textContent = 'Cat2';
    var contentCat2 = document.querySelector('#current-content').textContent = 'I am a beautiful cat №2';
}

function cardCat3(){
    var image = document.querySelector('#current-cat');
    image.setAttribute('src', 'images/cat3.jpg');
    var titleCat2 = document.querySelector('#current-title').textContent = 'Cat3';
    var contentCat2 = document.querySelector('#current-content').textContent = 'I am a beautiful cat №3';
}

function addNewCat(){
    var newCat = document.querySelector('#cat-info').innerHTML += '<tr><td>Jessica</td><td>England</td><td>2019</td></tr>';
}


function changeTopicMoon(){
    var switcherImg = document.querySelector('img');
    switcherImg.setAttribute('src', 'images/moon.svg'); 
    switcherImg.setAttribute('alt', 'moon');
    switcherImg.setAttribute('class', 'moon-background');
    var bodyContentMoon = document.querySelector('body'); 
    bodyContentMoon.setAttribute('class', 'body-content');
}





