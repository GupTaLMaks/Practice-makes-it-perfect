window.addEventListener("DOMContentLoaded",function () {
    const triggers = document.querySelectorAll('a');
    const highlight = document.createElement('span');
    highlight.classList.add('highlight');
    document.body.appendChild(highlight);

    function highlightlink() {
        const linkCoords = this.getBoundingClientRect();
        highlight.style.width = `${linkCoords.width}px`;
        highlight.style.height = `${linkCoords.height}px`;
        highlight.style.transform = `translate(${window.scrollX+linkCoords.left-5}px, ${window.scrollY+linkCoords.top-5}px)`;
    }

    triggers.forEach(a => a.addEventListener('mouseenter', highlightlink));
});