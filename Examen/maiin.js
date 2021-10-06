var contador1 = 0;
var contador2 = 0;
var contador3 = 0;
var contador4 = 0;
var contador5 = 0;
var elementos1 = [];
var elementos2 = [];
var elementos3 = [];
var elementos4 = [];
var elementos5 = [];

function MoverP1(Producto) {
    contador1++;
    var nombre = Producto.getAttribute('nombre');
    var precio = Producto.getAttribute('precio');

    elementos1.push(contador1);
    if(elementos1.length > 0)
    {
        document.getElementById('nom1').innerHTML = nombre;
        document.getElementById('pre1').innerHTML = precio;
        document.getElementById('can1').innerHTML = elementos1.length;
    }
    else
    {
        document.getElementById('Pro1.1').innerHTML = "";
    }
}

function MoverP2(Producto) {
    contador2++;
    var nombre = Producto.getAttribute('nombre');
    var precio = Producto.getAttribute('precio');

    elementos2.push(contador2);
    if(elementos2.length > 0)
    {
        document.getElementById('nom2').innerHTML = nombre;
        document.getElementById('pre2').innerHTML = precio;
        document.getElementById('can2').innerHTML = elementos2.length;
    }
    else
    {
        document.getElementById('Pro1.1').innerHTML = "";
    }
}

function MoverP3(Producto) {
    contador3++;
    var nombre = Producto.getAttribute('nombre');
    var precio = Producto.getAttribute('precio');

    elementos3.push(contador3);
    if(elementos3.length > 0)
    {
        document.getElementById('nom3').innerHTML = nombre;
        document.getElementById('pre3').innerHTML = precio;
        document.getElementById('can3').innerHTML = elementos3.length;
    }
    else
    {
        document.getElementById('Pro1.1').innerHTML = "";
    }
}

function MoverP4(Producto) {
    contador4++;
    var nombre = Producto.getAttribute('nombre');
    var precio = Producto.getAttribute('precio');

    elementos4.push(contador4);
    if(elementos4.length > 0)
    {
        document.getElementById('nom4').innerHTML = nombre;
        document.getElementById('pre4').innerHTML = precio;
        document.getElementById('can4').innerHTML = elementos4.length;
    }
    else
    {
        document.getElementById('Pro1.1').innerHTML = "";
    }
}

function MoverP5(Producto) {
    contador5++;
    var nombre = Producto.getAttribute('nombre');
    var precio = Producto.getAttribute('precio');

    elementos5.push(contador5);
    if(elementos5.length > 0)
    {
        document.getElementById('nom5').innerHTML = nombre;
        document.getElementById('pre5').innerHTML = precio;
        document.getElementById('can5').innerHTML = elementos5.length;

    }
    else
    {
        document.getElementById('Pro1.1').innerHTML = "";
    }
}
function LooL(){
    prefi1= contador1 * 20;
    prefi2= contador2 * 240;
    prefi3= contador3 * 50;
    prefi4= contador4 * 4000;
    prefi5= contador5 * 140;
    prefinal = prefi1 + prefi2 + prefi3 + prefi4 +prefi5;
    if (prefi1>0)
    {
        document.getElementById('tot1').innerHTML = prefi1;
    }else
    {
        document.getElementById('tot1').innerHTML = "";
    }

    if (prefi2>0)
    {
        document.getElementById('tot2').innerHTML = prefi2;
    }else
    {
        document.getElementById('tot2').innerHTML = "";
    }

    if (prefi3>0)
    {
        document.getElementById('tot3').innerHTML = prefi3;
    }else
    {
        document.getElementById('tot3').innerHTML = "";
    }

    if (prefi4>0)
    {
        document.getElementById('tot4').innerHTML = prefi4;
    }else
    {
        document.getElementById('tot4').innerHTML = "";
    }

    if (prefi5>0)
    {
        document.getElementById('tot5').innerHTML = prefi5;
    }else
    {
        document.getElementById('tot5').innerHTML = "";
    }

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