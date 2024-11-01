//Sergi Escarré
var color1
var color2
var color3
var color4

let canvas1;

function setup() {
    canvas1 = createCanvas(500, 500);  // Define el tamaño del lienzo
    canvas1.parent('canvas1');  // Asigna el canvas al div con id="canvas1"
    //dins la funció del setup col·loquem les 4 variables de color creades anteriorment. Posam la variable i li diem que és igual a un color que pot variar entre 0 i 255, tant com amb el red, com amb el green, com amb el blue. Això ho repetim amb les 4 variables de color. Amb això aconseguim que cada vegada que li donem a play cada variable reprodueixi un color diferent.
  color1 = color(random(0,255), random(0,255), random(0,255));
  color2 = color(random(0,255), random(0,255), random(0,255));
  color3 = color(random(0,255), random(0,255), random(0,255));
  color4 = color(random(0,255), random(0,255), random(0,255));
  
}

function draw() {
  background(220);
  
  //patro2 dins la funció draw. Posem que la amplada o diametre del patro és la mateixa que la variable 'z', és a dir, la seva pròpia amplada (del patro 1).
  patro2(z);
  
  /*Aquesta és la condició utilitzada per crear la diagonal de diferent color(patro1.1). En aquest cas es crea la variable 'w' per dur a terme el següent:
  PER la variable 'w', que és igual a 1, si aquesta és menor a la amplada del canvas es suma a sí mateixa (formant cada vegada un nombre més gran). A més, SI 'w' divisible entre dos sense deixar residu, es dibuixa el patro1.1, en el que les variables 'x' i 'y' es multipliquen per 'w', formant així la diagonal (ja que 'w' es suma a sí mateixa).
  La funció del IF en aquest cas és que només res reprodueixi el patro 1.1 de manera que sempre quedi damunt l'altre patró, ja que sense aquest IF es reprodueix moltes vegades i més comprimit.*/
  
  for (var w=1; w<=18; w++){ 
    if(w%2 == 0){
     patro11(x*w, y*w,z);
    }
  }
  
  //En aquesta condició s'utilitza el procés anterior però a la inversa, per així crear la diagonal oposada. En aquest cas, la variable utilitzada és 'n', i volem que sigui igual a 18. Sempre que 'n' és major o igual a 1, aquesta es resta a sí mateixa. Per tant, aquest patró es repetirà 18 vegades, i d'aquestes 18 vegades, només quan el residu resultant de n/2 sigui 0, es dibuixarà el patró 1.1, començant des de baix a l'esquerra (x, 400), i acabant en la part superior dreta del canvas. Ja que mentre que n es multiplica amb x, fent-lo més gran, la y es fa més petitaja que es va restant per un nombre cada vegada més gran (y*n).
  for (var n=18; n>=1; n--){
    if(n%2 == 0){
      patro11(x*n, 400 - (y*n), z);
    }
  }
}

//funció 'patro2. Amb aquesta funció aconseguim que el 'patro1'es reprodueixi tant de manera vertical com horitzontal per tot el canvas. El que fa aquesta funció és que PER la variable 'i', que és igual a 0, si aquesta és menor o igual que la amplada del canvas, la 'i' es suma al que denominam com diametre (en el nostre cas la amplada). El mateix passa amb la variable 'j', però amb la alçada. Tot això s'aplica a la funció 'patró1', on la 'i' fa de 'x', i la 'j' fa de z. Per tant, si la 'i' o la 'j' son menors a la amplada o alçada del canvas, aquestes es sumen al diametre o amplada del nostre patró, reporoduint aquest patró de esquerra a dreta i de dalt a baix per tot el canvas. Per tant, com que volem que el patro es repeteixien la seba pròpia amblada perque quedi sempre aferrat un devora l'altre, utilitzarem la variable 'z' com a element de repetició per les variables 'i' i 'j'.
function patro2(diametre) {
  for(var i=0; i<=width; i=i+diametre){
    for(var j=0; j<=height; j=j+diametre){
      patro1(i, j, diametre);
     }
  }
}


//a continuació, les variables utilitzades per crear el patro1 i el patro1.1
var x = 20 //la variable x representa la x del canvas
var y = 20 //la variable y representa la variable y del canvas
var z = 40 //la variable z representa la amplada del patro1 i 1.1
var g = 8  //la variable g representa el gruix del punt, i també el diametre del cercle

//patró 1: és el patro principal del mosaic, format pel següent:
function patro1(x, y, z){
  strokeWeight(1);
  stroke(color2);
  fill(color1);
  boto(x-20, y-20, z); //el botó del robot de l'exerici 1 (que és un quadrat), de color variable i amb el seu marge de 1px de gruix.
  fill(color3);
  noStroke();
  ellipse(x, y, z, z/3); //dues el·lipses que formen cuna flor de color variable
  fill(color3);
  ellipse(x, y, z/3, z);
  fill(color4);
  circle(x, y, g); //el crecle situat al centre de la flor amb un color variable i diametre 'g'(8)
  strokeWeight(g);
  stroke(color2);
  point(x-20, y-20); //punt situat al marge esquerre del nostre patró amb el mateix color que el marge del quadrat, amb un gruix 'g'.
 
}

//El patró 1.1 repeteix el mateix que el patró 1, pero els colors estan "invertits", de manera que tots els seus elements són els mateixos que al patró 1.
function patro11(x, y, z){
  strokeWeight(1);
  stroke(color2);
  fill(color3);
  boto(x-20, y-20, z);
  noStroke();
  fill(color1);
  ellipse(x, y, z, z/3);
  fill(color1);
  ellipse(x, y, z/3, z);
  fill(color2);
  circle(x, y, g);
  strokeWeight(g);
  stroke(color4);
  point(x-20, y-20);
  stroke(color2);
  point(x+20, y-20); //aquest dos punts finals, s'han afegit per un motiu estètic, ja que aquest patró s'oposa al patró1, i el punt del patró1 quedava tallat pel cantó del quadrat d'aquest patró.
  point(x-20, y+20);
  point(x+20, y+20);
}

//Aquesta és la funció del robot de l'exercici 1 escollida per aquest exercici. Bàsicament és un quadrat.
function boto(x, y, z){
  rect(x, y, z);
}

/*Què és una variable? 
Una variable és un element de programació en el que es poden emmagatzemar diferents coses com dades, les quals les pots modificar al teu gust.

Un exemple d'aquest programa és la variable pel color. En aquest cas, crees una variable amb el nom dessitjat, i l'apropies d'un color o colors aleatoris amb 'random'. Una vegada creada la variable la pots utilitzar amb fill o stroke, i tots aquells elements amb aquesta variable compartiran el mateix color. Per tant, si dessitges canviar el color de tots aquelles elements, tan sols has de canviar la variable.*/
