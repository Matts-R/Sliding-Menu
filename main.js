const marker = document.querySelector('#marker');
const menuItem = document.querySelectorAll('ul li a');

function indicator(e) {
    marker.style.top = e.offsetTop + 'px'
    marker.style.width = e.offsetWidth + 'px'
}


menuItem.forEach(link => {
    link.addEventListener('mousemove', (e) => {
        indicator(e.target);
    })
})