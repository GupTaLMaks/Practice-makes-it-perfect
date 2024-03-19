window.addEventListener("DOMContentLoaded",function () {
    const pressed = [];
    const secretCode = 'guptalmaks';
    window.alert("Find the Konami Code");
    window.alert("Tips : github username");
    window.addEventListener('keyup', (e)=> {
        pressed.push(e.key),
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
        console.log(pressed.join());
        if(pressed.join('').includes(secretCode)) {
            window.alert('GG WP');
        }
    })
});