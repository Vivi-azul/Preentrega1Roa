let nombre = prompt("ingrese su nombre").toUpperCase();
let Concierto = prompt("Comprar Entradas para Concierto");

if(Concierto === "si"){
    alert("Información valores a Concierto de Chancho en Piedra");
    alert("Platea 20.000 Cancha 30.000 Vip 50.000");

let platea = (20000);
let cancha = (30000);
let vip = (50000);

for(let i= "Number"; i<=20; i++){
    let resultado = numero * i;
    alert(`${numero} x ${i} = ${resultado}`);
}

let valor = Number(prompt("Ingrese Monto a cancelar"));
let moneda = Number(prompt("Con cuánto pagará?"));
let cambio = (moneda - valor);
alert("Tu cambio es de cambio" + " " + cambio);


}else
alert("Que tengas un buen día");