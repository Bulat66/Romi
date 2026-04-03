
let slider = document.getElementById('slider');


let current_Index = 0;
let slide_collection = document.getElementsByClassName('slide');
// let step_length = 150;
// slide_collection[0].style.transform = `translateX(${step_length}px)`;

// Превращаем живую коллекцию в обычный массив для удобства
let slides = Array.from(document.getElementsByClassName('slide'));

function flipping() {

	let reference = slider.offsetWidth;
    // 1. Берем самую верхнюю карту (первую в массиве)
    let currentCard = slides.shift(); 

    // 2. Анимируем её вылет
    currentCard.style.transform = "translateX(-125%) rotate(-15deg)";
    // currentCard.style.opacity = "0"; // Можно добавить прозрачность для красоты

    setTimeout(() => {
        // 3. Кладем её в конец массива
        slides.push(currentCard);

        // 4. Обновляем положение ВСЕХ карт в колоде
        slides.forEach((slide, index) => {
            // Чем меньше индекс в массиве, тем выше карта
            slide.style.zIndex = slides.length - index; 
            
            // Сдвигаем их "вверх" по визуальной лестнице
            slide.style.top = (index * 10) + "px";
            slide.style.left = (index * 10) + "px";
            
            // Если ты менял ширину в CSS (280, 260, 240), можно менять и её:
            slide.style.width = (reference - index * 20) + "px";
        });

        // 5. Возвращаем улетевшую карту на место (она уже с новым z-index)
        currentCard.style.transform = "translateX(0px) rotate(0deg)";
        // currentCard.style.opacity = "1";
        
    }, 750);
}

setInterval(flipping, 2000);
// function flipping(){

// 	let card = slide_collection[current_Index];
// 	card.style.transform = `translateX(-450px) rotate(-15deg)`;
// 	// card.style.transform = `rotate(-15deg)`;

// 	setTimeout(() => {
// 		card.style.zIndex = 0;
// 		card.style.transform = `translateX(0px)`;
// 	}, 750);

// 	current_Index++;
// 	if(current_Index >= slide_collection.length){
// 		current_Index = 0;
// 	}
// 	// e.style.transform = `translateX(${-step_length}px)`;
// 	// e.style.zIndex -= 2;
// 	// e.style.transform = `translateX(${step_length}px)`;
// 	// console.log('try');
// }

// setInterval(flipping, 1000);