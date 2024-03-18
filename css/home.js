let Text = document.getElementById('text');
let Sky = document.getElementById('Sky');
let stars = document.getElementById('stars');

const change = src => {
    document.getElementById('main').src = src
}

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    Text.style.left = value * -2 + 'px';
    Sky.style.top = value * -.5 + 'px';
    stars.style.left = value * 1 + 'px';
});