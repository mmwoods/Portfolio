// CountUp Effect
const countUp = (number, time, target) => {
    for (let i = 0; i <= number; i++) {
        setTimeout(function(){
            $(target).html(i);
        }, i * (time / number));
    }
};

// Intersection Observer
const targets = document.querySelectorAll('.counter');
const count = target => {
    const io = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const number = counter.getAttribute('data-number');

                countUp(number, 1800, counter);

               observer.disconnect();
           }
        });
    });

    io.observe(target);
};

targets.forEach(count);

// Navigation Links
const highlightMenu = () => {
    $('.nav-item').on('click', function(){
        $('.nav-item').removeClass('active');
        $(this).addClass('active');
    });
}

highlightMenu();