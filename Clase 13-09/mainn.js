//var n1 = 30;
//var n2 =20;
//var test =0;
//if (n1<n2)
//{
    //console.log("n1 es menor que  n2");
//}
//else{
    //console.log("n1 es mayor que n2");
//}

//n1=100;
//console.log(n1);
//console.log(test);

//function suma()
//{
    //let resultado = n1 + n2;
    //return resultado;
//}
var elementos3 = ["hola",1,8.5,true,5,7,8,9,10];
var elementos4 = [];

elementos4.push(elementos3);

for (let i=0; i<elementos4.length;i++)
{
    console.log(elementos4[i]);
}

var palabra = "Hola Mundo";
var contenedor = [];
contenedor.push(palabra);
var final = palabra.split("");
console.log(final);

var persona = {
    "Datos Generales" : {
        "Nombre" : "José David",
        "Apellidos" : "Vite Bautista",
        "Edad" : "19"
    },
    "Lenguajes Programacion": {
        "Lenguaje1" : "JavaScrip",
        "Lenguaje2" : "C#",
    },
    "Generos Musicales" : {
        "Rock": "",
        "Psytrance":"",
        "Alternativo":"",
        "Future Funk" : "",
        "Rap ENG" : "",
        "Trap ENG" : "",
        "Dubstep" : ""
    },
    "Escualas" : {
        "Kinder": "Antonio Caso",
        "Primaria" : "Benito Juarez",
        "Secundaria" : "OFC. 128 LIC. BENITO JUAREZ",
        "Preparatoria" : "CETis 141 Dr. Manuel Gamio",
        "Universidad" : "Universidad Politecnica De Tecamac"
    },
    "Habito :v" : {
        "Ver" : "Peliculas, Series, Animes 7w7",
        "Escuchar Musica" : "",
        "Dormir :v" : ""
    }
}
console.log(persona);




