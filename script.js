// Scroll Animation

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll(
    "section, .project-card, .skill-card, .stat"
).forEach((el) => {

    el.classList.add("fade");

    observer.observe(el);

});