window.addEventListener("DOMContentLoaded",function () {
    const speed = document.querySelector('.speed');
    const bar = speed.querySelector('.speed-bar');
    const video = document.querySelector('.video');
    let isDown = false;

    speed.addEventListener('mousedown', () => {isDown=true});
    speed.addEventListener('mouseup', () => {isDown=false});
    speed.addEventListener('mouseleave', () => {isDown=false});

    speed.addEventListener('mousemove',function(e) {
        if(!isDown) return;
        e.preventDefault();
        const y = e.pageY - this.offsetTop;
        const percent = y / this. offsetHeight;
        const min = 0.4;
        const max = 4;
        const height = Math.round(percent * 100) + '%';
        const pbRate = percent * (max - min) + min;
        bar.style.height = height;
        bar.textContent = pbRate.toFixed(2) + 'x';
        video.playbackRate = pbRate;
    })
});