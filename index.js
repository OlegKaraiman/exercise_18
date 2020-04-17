function Mycounter() {
    let currentCount1 = 1;
    let currentCount = 0;
    function counter() {

        return currentCount = +currentCount1 + +currentCount;
    }
    counter.reset = function () {
        currentCount = '0';
        currentCount1 = '1';
    };
    counter.set = function (value) {
        return currentCount = value;
    };
    counter.step = function (value) {
        return currentCount1 = value;
    };

    return counter;
}

const fbCounter = Mycounter();
const vkCounter = Mycounter();


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
    vkCounter.reset();
    document.getElementById('calckVk').innerHTML = '0';
});

document.querySelector('#fbReset').addEventListener('click', () => {
    fbCounter.reset();
    document.getElementById('calckFb').innerHTML = '0';

});