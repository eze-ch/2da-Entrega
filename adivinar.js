let numEleg =0;
let numAleat=0;
let continuar2;
let promedioSuerte=0, cantVueltas=0;
let cV=0; //contador de vueltas

class Azar {
    constructor(aciertos, fracasos, suerte) {
        this.aciertos = aciertos;
        this.fracasos = fracasos;
        this.suerte = suerte;
    }
}


function aleat(inferior, superior) {
    let numPosibilidades = superior - inferior;
    let aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}


const vuelta = [];

do {
    alert("Bienvenido al Adivinador... vamos a probar tu suerte");
    alert("Tendrás 5 intentos, en cada uno el numero cambia del 1 al 5");

    vuelta.push(new Azar(0,0,0));
    
    for (let i = 1; i <= 5; i++) {
        numAleat = aleat(1,5);
        numEleg = parseInt(prompt("Elegi un numero del 1 al 5"));
        console.log(numAleat);
    
        if (numEleg == numAleat)
        {
            alert("Acertaste!!");
            vuelta[cV].aciertos++;
        }
        else
        {
            alert("Ni cerca");
            vuelta[cV].fracasos++;
        }
    
        vuelta[cV].suerte = (vuelta[cV].aciertos/i)*10;
        switch (i) {
            case 1:
                if (vuelta[cV].suerte==10)
                    alert("Arrancaste demasiado bien.. ¿Sos algo de HarryPotter?");
                if (vuelta[cV].suerte==0)
                    alert("Bienvenido a las desilusiones de la vida");
                break;
    
            case 2:
                if (vuelta[cV].suerte==10)
                    alert("No te la puedo creer!!");
                if (vuelta[cV].suerte==5)
                    alert("Una de cal y una de arena. Bien ahi");
                if (vuelta[cV].suerte==0)
                    alert("Todavia tenes tiempo");
                break;
    
            case 3:
                if (vuelta[cV].suerte==10)
                    alert("Brujería!!");
                if (vuelta[cV].suerte<10 && vuelta[cV].suerte >=5)
                    alert("Vas bien!");
                if (vuelta[cV].suerte>0 && vuelta[cV].suerte <5)
                    alert("Podria ser mejor");
                if (vuelta[cV].suerte==0)
                    alert("Espero que por lo menos seas carismatico");
                break;
    
            case 4:
                if (vuelta[cV].suerte==10)
                    alert("Deja de estudiar y anda al casino!!!");
                if (vuelta[cV].suerte==7.5)
                    alert("Por favor dejame ser tu amigo!");
                if (vuelta[cV].suerte==5)
                    alert("Nada mal!!");
                if (vuelta[cV].suerte==2.5)
                    alert("Te recomiendo estudiar porque de suerte estas mas o menos");
                if (vuelta[cV].suerte==0)
                    alert("Ya ni el carisma te salva");
                break;
    
            case 4:
                if (vuelta[cV].suerte==10)
                    alert("Deja de estudiar y anda al casino!!!");
                if (vuelta[cV].suerte==7.5)
                    alert("Por favor dejame ser tu amigo!");
                if (vuelta[cV].suerte==5)
                    alert("Nada mal!!");
                if (vuelta[cV].suerte==2.5)
                    alert("Consolate con que hay algunos peor que vos");
                if (vuelta[cV].suerte==0)
                    alert("espero tengas buenos contactos..");
                break;
    
            case 5:
                if (vuelta[cV].suerte==10)
                    alert("Realmente impresionante! Lo tuyo no es humano");
                if (vuelta[cV].suerte==8)
                    alert("Por favor dejame ser tu amigo!");
                if (vuelta[cV].suerte==6)
                    alert("Bastante bien");
                if (vuelta[cV].suerte==4)
                    alert("Un mortal como todos");
                if (vuelta[cV].suerte==2)
                    alert("Supongo que en el amor te va bien");
                if (vuelta[cV].suerte==0)
                    alert("La tenes complicada.. anda buscando alguna herencia por ahi");
                break;
    
            default:
                break;
        }
    
        console.log("Suerte acumulada del 0 al 100: " +(vuelta[cV].suerte*10)+ " %");
        numEleg=0;
    }
    
    console.log("Aciertos: " + vuelta[cV].aciertos);
    console.log("Fracasos: " + vuelta[cV].fracasos);
    console.log("Suerte: " +(vuelta[cV].suerte*10)+ " %");
    
    continuar2 = prompt("Desea probar de nuevo? (si/no)")
    cV++;

} while (continuar2 == "si");

promedioSuerte= vuelta.reduce((acc, vuelta) => acc += vuelta.suerte, 0);
cantVueltas = vuelta.length;
console.log("Suerte acumulada: " +(promedioSuerte*10/cantVueltas)+ " %");



