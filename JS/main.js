window.addEventListener('load', () => {
    let sounds = document.querySelectorAll('.sound');
    let pads = document.querySelectorAll('.pads div');
    let visual = document.querySelector('.visual');
    let colors = [
        "#4D0011",
        "#BFCAD0",
        "#474440",
        "#738580",
        "#53565A",
        "#444444"
    ];
    //lets get going with the sound here

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function () {
            sounds[index].currentTime = 0;
            sounds[index].play();

            createBubblee(index);
        });
    });

    //create a function that makes bubbles
    let createBubblee = index => {
        let bubblee = document.createElement("div");
        visual.appendChild(bubblee);
        bubblee.style.backgroundColor = colors[index];
        bubblee.style.animation = 'jump 1s ease';
        bubblee.addEventListener('animationend0', function () {
            visual.removeChild(this);
        })
    };
});