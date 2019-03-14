function countUp(number, time, target){
    for (let i = 0; i <= number; i++) {
        setTimeout(function(){
            $(target).html(i);
        }, i * (time / number));
    }
};

$(document).ready(function(){
    countUp(200, 800, '#count-stores');
    countUp(10, 800, '#count-managed');
    countUp(15, 800, '#count-theme');
});