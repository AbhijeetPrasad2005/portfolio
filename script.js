/* Typing Effect */

const text = [
    "Python Developer",
    "Backend Developer",
    "Flask Developer",
    "Software Engineer"
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

    if(count === text.length){
        count = 0;
    }

    currentText = text[count];

    letter = currentText.slice(0, ++index);

    document.getElementById("typing").textContent = letter;

    if(letter.length === currentText.length){

        count++;
        index = 0;

        setTimeout(type,1200);

    }else{

        setTimeout(type,100);

    }

})();

/* Scroll Animation */

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(
"section,.project-card,.skill-card,.stat"
).forEach(el => {

    el.classList.add("fade");

    observer.observe(el);

});