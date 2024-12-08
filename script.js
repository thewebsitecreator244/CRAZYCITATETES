let image = document.getElementById("image");

let images = [
            '1.png',
            '2.png',
            '3.png',
            '4.png',
            '5.png',
            '6.png',
        ]

let randomImg = getRandomElement(images);

// Скрывает текущие цитату и изображение
function hide() {
    image.classList.remove('show');
    quote.classList.remove('show');
    // Показывает следующие цитату и изображение с задержкой в пол секунды, чтобы успел сработать transition
    setTimeout(show, 500);
}

// Показывает новые цитату и изображение 
function show() {
    // Проверяет кол-во символов в тексте. Если их меньше 48, то меняет шрифт и выравнивает текст по центру, иначе - стандартные стили
    if (randomQuote.length <= 48) {
        quote.style.fontSize = '42px';
        quote.style.justifyContent = 'center';
    } else {
        quote.style.fontSize = '';
        quote.style.justifyContent = '';
    }

    image.src = 'images/' + randomImg;
    // Тут нужно добавить изменение текстового содержимого объекта quote

    image.classList.add('show');
    quote.classList.add('show');
}
