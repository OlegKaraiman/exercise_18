function myCounter() {
    let currentCount = 0;
    let step = 1;
    let start = 0;

    function counter() {
        return currentCount = +currentCount + +step;
    }
    counter.reset = function() {
        return currentCount = start;
    };
    counter.set = function(value) {
        start = value;
        return currentCount = start;
    };
    counter.step = function(value) {
        return step = value;
    };

    return counter;
}
const fbCounter = myCounter();
const vkCounter = myCounter();

document.querySelector('#fb').addEventListener('click', () => {
    document.getElementById('calckFb').innerHTML = fbCounter();
});
document.querySelector('#vk').addEventListener('click', () => {
    document.getElementById('calckVk').innerHTML = vkCounter();
});

document.querySelector('#vkStep').addEventListener('click', () => {
    vkCounter.step(prompt());
});

document.querySelector('#fbStep').addEventListener('click', () => {
    fbCounter.step(prompt());
});

document.querySelector('#vkStart').addEventListener('click', () => {
    vkCounter.set(prompt());
});

document.querySelector('#fbStart').addEventListener('click', () => {
    fbCounter.set(prompt());
});

document.querySelector('#vkReset').addEventListener('click', () => {
    document.getElementById('calckVk').innerHTML = vkCounter.reset();
});

document.querySelector('#fbReset').addEventListener('click', () => {
    document.getElementById('calckFb').innerHTML = fbCounter.reset();
});
