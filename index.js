var html = document.querySelector('html');
var ball = document.querySelector('#ball');
var target = document.querySelector('#target');

var x = 0;
var y = 0;

/** Atribui posicao do mouse como centro do componente (Realizando deslocamento) */
function _mover(event){
    let top, left;

    switch (event.key) {
        case 'ArrowRight':
        left = (x += 100) + "px";
        top = y + "px";
            break;
        case 'ArrowDown':
        left = x + "px";
        top = (y += 100) + "px";
            break;
        case 'ArrowLeft':
        left = (x -= 100) + "px";
        top = y + "px";
            break;
        case 'ArrowUp':
        left = x + "px";
        top = (y -= 100) + "px";
            break;
    
        default:
            return;
    }

    var head = document.querySelector('head');
    var style = document.querySelector('#root-style');

    var classRoot = ':root{'
        + '--top: calc(' + top + " - 1.5em);"
        + '--left: calc(' + left + " - 1.5em);"
    + '}';

    if(!style){
        style = document.createElement('style');
        style.setAttribute('id','root-style');
        style.innerHTML = classRoot;

        head.innerHTML = head.innerHTML + style.outerHTML;
    } else {
        style.innerHTML = classRoot;
    }

    console.log('Moveu!');
}

html.addEventListener('keydown', function(event){
    _mover(event);
})

html.click();