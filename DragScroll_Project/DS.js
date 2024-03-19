window.addEventListener("DOMContentLoaded",function () {
    const items = document.querySelectorAll('.item');
    items.forEach(item => {
        let r = Math.floor(Math.random() * 255);
        let g = Math.floor(Math.random() * 255);
        let b = Math.floor(Math.random() * 255);
        item.style.background = `rgb(${r},${g},${b})`;
        item.style.border = `10px solid rgb(${r-30},${g-30},${b-30})`
    });
    
    const slider = document.querySelector('.items');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        slider.classList.add('active');
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
        slider.classList.remove('active');
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
        slider.classList.remove('active');

    });

    slider.addEventListener('mousemove', (e) => {
        if(!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const  walk = (x - startX)*3;
        slider.scrollLeft = scrollLeft - walk;
    });


    


});