var palabra = prompt ("Ingresa Una Palabra");
var contador = palabra.length;
var letra = prompt("Ingresa Una Letra");

for (var i=0; i<palabra.length; i++)
{
    if(letra == palabra[i]){
        prompt("Bien, Ahora Ingresa Otra Letra")
    }
}

