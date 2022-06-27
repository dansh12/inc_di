let plus = document.querySelector("#p_btn");
let minus = document.querySelector("#m_btn");
let reset = document.querySelector("#r_btn");
let box = document.querySelector("#box");


let number = box.value;





plus.addEventListener('click', function(){
    number = box.value;
    number++;
    box.value = number;
});
minus.addEventListener('click', function(){
    number = box.value;
    number--;
    box.value = number;
});
reset.addEventListener('click', function(){
    number = 0;
    box.value = number;
});