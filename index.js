function draw() {
    var canvas = document.getElementById('canvas')
    var ctx = canvas.getContext('2d');
    var img = new Image();
    img.onload = function() {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
    };
    img.src = 'city.jpeg';
}

function setupZoom() {
    const elem = document.getElementById('canvas');
    const panzoom = Panzoom(elem, {
        maxScale: 20
    });
    elem.addEventListener('wheel', panzoom.zoomWithWheel);
}