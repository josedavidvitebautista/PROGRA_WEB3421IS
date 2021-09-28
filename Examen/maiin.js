var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var contador4 = 0;
var contador5 = 0;
function MoverP1(Producto) {
    contador1++;
    var nombre = Producto.getAttribute('nombre');
    var precio = Producto.getAttribute('precio');

    //ElementoxElemento
    document.getElementById('Pro1.1').innerHTML += '<tr><td>'+nombre+'</td><td>'+precio+'</td><td>'+ 1 +'</td><td>'+20+'</td></tr>';

    //Elemntox1
    //document.getElementById('1').innerHTML = contador1;
}

function MoverP2(Producto) {
    contador2++;
    var nombre = Producto.getAttribute('nombre');
    var precio = Producto.getAttribute('precio');

    //ElementoxElemento
    document.getElementById('Pro1.1').innerHTML += '<tr><td>' + nombre + '</td><td>' + precio + '</td><td>' + 1 + '</td><td>' + 240 + '</td></tr>';

    //Elemntox1
    //document.getElementById('2').innerHTML = contador2;
}

function MoverP3(Producto) {
    contador3++;
    var nombre = Producto.getAttribute('nombre');
    var precio = Producto.getAttribute('precio');

    //ElementoxElemento
    document.getElementById('Pro1.1').innerHTML += '<tr><td>' + nombre + '</td><td>' + precio + '</td><td>' + 1 + '</td><td>' + 50 + '</td></tr>';

    //Elemntox1
    //document.getElementById('3').innerHTML = contador3;
}

function MoverP4(Producto) {
    contador4++;
    var nombre = Producto.getAttribute('nombre');
    var precio = Producto.getAttribute('precio');

    //ElementoxElemento
    document.getElementById('Pro1.1').innerHTML += '<tr><td>' + nombre + '</td><td>' + precio + '</td><td>' + 1 + '</td><td>' + 4000 + '</td></tr>';

    //Elemntox1
    //document.getElementById('4').innerHTML = contador4;
}

function MoverP5(Producto) {
    contador5++;
    var nombre = Producto.getAttribute('nombre');
    var precio = Producto.getAttribute('precio');

    //ElementoxElemento
    document.getElementById('Pro1.1').innerHTML += '<tr><td>' + nombre + '</td><td>' + precio + '</td><td>' + 1 + '</td><td>' + 140 + '</td></tr>';

    //Elemntox1
    //document.getElementById('5').innerHTML = contador5;
}
function LooL(){
    prefi1= contador1 * 20;
    prefi2= contador2 * 240;
    prefi3= contador3 * 50;
    prefi4= contador4 * 4000;
    prefi5= contador5 * 140;
//alert("Libretas " + contador1 + ", Teclado " + contador2 + ", Audifono " + contador3 + ", Monitor " + contador4 + ", Mouse " + contador5 + ", Se Pueden Visulizar Mejor En La Grafica :v");
    prefinal = prefi1 + prefi2 + prefi3 + prefi4 +prefi5;
    document.getElementById('Total').innerHTML = prefinal ;
    var ctx= document.getElementById("myChart").getContext("2d");
    var myChart= new Chart(ctx,{
        type:"pie",
        data:{
            labels:['Libretas: '+ contador1,'Teclado: '+ contador2,'Audifono: '+ contador3,'Monitor: '+ contador4,'Mouse: '+ contador5],
            datasets:[{
                label:'Num datos',
                data:[contador1 , contador2, contador3, contador4, contador5],
                backgroundColor:[
                    'rgba(255,51,51,0.5)',
                    'rgba(51,255,57,0.5)',
                    'rgba(51,255,246,0.5)',
                    'rgba(54,51,255,0.5)',
                    'rgb(200,0,255)',
                ]
            }]
        },
        options:{
            scales:{
                yAxes:[{
                    ticks:{
                        beginAtZero:true
                    }
                }]
            }
        }
    });
}