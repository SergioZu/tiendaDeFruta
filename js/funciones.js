var cantidadFruta=new Array(0,0,0,0,0,0,0,0,0,0);
var precioFruta=new Array(0.80,1.20,2,3.60,1.10,3.40,6,0.90,1.60,2.10);
var nombrefruta=new Array("Platano","Manzana","Pera","Sandia","Melon","Kiwi","Naranja","Pomelo","Melocoton","Cereza");
var precioTotal=new Array(0,0,0,0,0,0,0,0,0,0);

var total=0;
var aux=0;
var divEscribir;

function almacen(num){

    for(var i=0;i<10;i++){
        if(i==num){
            aux++;
            cantidadFruta[i]++;
            precioTotal[i]=parseFloat(cantidadFruta[i])*parseFloat( precioFruta[i]);
            total+=parseFloat(precioTotal[i]);
        }
    }
    
}



function enviar(){
    divEscribir=document.getElementById("final");
    for (var i = 0; i < 10; i++) {
        if(cantidadFruta[i]!=0){
            divEscribir.innerHTML
            +="<p>"+nombrefruta[i]+" --- "+cantidadFruta[i]+"Kilo</p>";
        }
       
    }
    divEscribir.innerHTML+="<p> Precio Total: "+total+"Kilo</p>";
    divEscribir.innerHTML+="<p> Precio Medio:"+parseInt(total/aux)+"€</p>";
    total=0;
    aux=0;
}