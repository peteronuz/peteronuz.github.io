const eyes = [
    { id: 'eye1', color: 'blue', size: 80 },
    { id: 'eye2', color: 'blue', size: 80 },
    { id: 'eye3', color: 'blue', size: 80 },
    { id: 'eye4', color: 'blue', size: 80 },
  ];


  eyes.forEach(eye => {
    const canvas = document.createElement('canvas');
    canvas.width = eye.size * 2;
    canvas.height = eye.size * 2;
    const ctx = canvas.getContext('2d');

    //eye shape
    ctx.beginPath();
    ctx.arc(eye.size, eye.size, eye.size - 10, 0, Math.PI * 2);
    ctx.fillStyle = 'white';
    ctx.fill();
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 5;
    ctx.stroke();

    //iris
    ctx.beginPath();
    ctx.arc(eye.size, eye.size, eye.size / 2, 0, Math.PI * 2);
    ctx.fillStyle = eye.color;
    ctx.fill();

    //pupil
    ctx.beginPath();
    ctx.arc(eye.size, eye.size, eye.size/3, 0, Math.PI * 2);
    ctx.fillStyle = 'black';
    ctx.fill();
    

    document.getElementById(eye.id).appendChild(canvas);
  });

  document.addEventListener( "click", function toggleWords ( event ) {
    // A few variables to help us track important values/references
    var target = event.target, values = [], placed;
    // If the clicked element has multiple values
    if ( target.hasAttribute( "data-values" ) ) {
        // Split those values out into an array
        values = target.getAttribute( "data-values" ).split( "," );
        // Find the location of its current value in the array
        placed = values.indexOf( target.textContent );
        // Set its text to be the next value in the array
        target.textContent = values[ ++placed % values.length ];   
    }
});

//https://stackoverflow.com/questions/22587485/how-do-i-make-an-onclick-function-that-will-change-a-word-when-a-user-clicks-it