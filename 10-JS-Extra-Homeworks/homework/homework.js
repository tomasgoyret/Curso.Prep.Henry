// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  var arrayFinal = [];
  for( var key in objeto){
    var array = [key,objeto[key]];
    arrayFinal.push(array);
  }
  return arrayFinal;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var contara={};
  var alfabeto = "abcdefghijklmnñopqrstuvwxyz";
  for (var i=0; i<alfabeto.length; i++){
    var contador = 0;
    for( var j=0; j<string.length; j++){
      if ( alfabeto[i] === string[j]){
        contador = contador + 1; 
      }
    }
    if(contador !==0){
      contara[alfabeto[i]] = contador;
    }
  }
  return contara;
}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var stringMin = "";
  var string = "";
  for (var i=0; i<s.length; i++){
    if ( s[i] === s[i].toUpperCase()){
      string = string + s[i];
    }
  }
  for (var i=0; i<s.length; i++){
    if ( s[i] === s[i].toLowerCase()){
      stringMin = stringMin + s[i];
    }
  }
  return string+stringMin;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  array = str.split(" ");
  for (var i=0; i<array.length ;i++){
    var reves1 = array[i].split("").reverse().join("")
    array[i] = reves1;
  }
  var reves = array.join(" ");
  return reves;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  var numString = numero.toString();
  var numeroInverso = numString.split("").reverse().join("");
  var numeroReves = parseInt(numeroInverso);
  if ( numero === numeroReves){
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var stringFinal ="";
  var arrayCadena = cadena.split("");
  for (var i=0; i<arrayCadena.length; i++){
    if ( arrayCadena[i] !== "a" && arrayCadena[i] !=="b" && arrayCadena[i] !=="c"){
      stringFinal = stringFinal + arrayCadena[i];
    }
  }
  return stringFinal;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a,b){
    return a.length - b.length;
  })
  return arr;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí
  var array =[];
  for (var i=0; i<arreglo1.length; i++){
    for(var j=0; j<arreglo2.length; j++){
      if ( arreglo1[i] === arreglo2[j]){
        array.push(arreglo1[i]);
      }
    }
  }
  return array;
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

