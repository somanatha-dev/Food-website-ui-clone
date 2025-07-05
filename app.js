let count = 0;
let dishes = ['dish-1.png','dish-2.png','dish-3.png','dish-4.png'];

let left_btn = document.querySelector(".left-btn");
let right_btn = document.querySelector(".right-btn");
let main_food = document.querySelector("#main-food");

main_food.src = dishes[count];

function changeImage(newSrc) {
    main_food.style.opacity = 0;  // fade out

    setTimeout(() => {
        main_food.src = newSrc;   // change image
        main_food.style.opacity = 1;  // fade in
    }, 300);
}

left_btn.addEventListener("click",()=>{
    count--;
    if (count < 0) {
        count = dishes.length - 1;
    }
    changeImage(dishes[count]);
});

right_btn.addEventListener("click",()=>{
    count++;
    if (count >= dishes.length) {
        count = 0;
    }
    changeImage(dishes[count]);
});