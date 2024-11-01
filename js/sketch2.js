new p5(function(p) {
  // Variables globales
  var color1;
  var color2;
  var color3;
  var color4;
  var color5;
  var lineas = 2;
  var lineas2 = 1;
  var lineas3 = 5;

  p.setup = function() {
    var canvas2 = p.createCanvas(500, 500);  // Define el tamaño del lienzo
    canvas2.parent('canvas2');  // Asigna el canvas al div con id="canvas2"
    p.background(0, 0, 255);  // Llenamos de azul como ejemplo
    // Asignar colores a las variables
    color1 = 'white';
    color2 = 'black';
    color3 = 'red';
    color4 = 200;  // Si usas un valor numérico como color
    color5 = 'blue';
  };

  p.draw = function() {
    p.background(0);
    // Ejecutar la función de patrón
    patro2(30);
  };

  // Función para crear un patrón repetido
  function patro2(diametre) {
    for (var i = 0; i <= p.width; i = i + diametre) {
      for (var j = 0; j < p.height; j = j + diametre) {
        if (j / diametre % 2 == 0) {
          patro1(i, j, diametre);
        } else {
          objecte2(i, j, diametre);
        }
      }
    }
  }

  // Función que dibuja el primer objeto
  function patro1(x, y, cosa) {
    p.fill(color1);
    p.stroke(color3);
    p.strokeWeight(lineas);
    p.circle(x, y, cosa);
    p.line(x - cosa / 2, y - cosa / 2, x + cosa / 2, y + cosa / 2);
    p.line(x - cosa / 2, y + cosa / 2, x + cosa / 2, y - cosa / 2);
    p.fill(color3);
    p.stroke(color1);
    p.rect(x - cosa / 4, y - cosa / 4, cosa / 2, cosa / 2);
    p.fill(color2);
    p.strokeWeight(lineas2);
    p.circle(x, y, cosa / 2);
    p.stroke(color1);
    p.strokeWeight(lineas3);
    p.point(x, y);
  }

  // Función que dibuja el segundo objeto
  function objecte2(x, y, cosa) {
    p.fill(color1);
    p.stroke(color5);
    p.strokeWeight(lineas);
    p.circle(x, y, cosa);
    p.line(x - cosa / 2, y - cosa / 2, x + cosa / 2, y + cosa / 2);
    p.line(x - cosa / 2, y + cosa / 2, x + cosa / 2, y - cosa / 2);
    p.fill(color5);
    p.stroke(color1);
    p.rect(x - cosa / 4, y - cosa / 4, cosa / 2, cosa / 2);
    p.fill(color2);
    p.strokeWeight(lineas2);
    p.circle(x, y, cosa / 2);
    p.stroke(color1);
    p.strokeWeight(lineas3);
    p.point(x, y);
  }
});
