let numEleg =0;
let numAleat=0;
let continuar2;
let cV=0; //contador de vueltas

class Azar {
    constructor(aciertos, fracasos, suerte) {
        this.aciertos = aciertos;
        this.fracasos = fracasos;
        this.suerte = suerte;
    }
}

const vuelta = [];

function aleat(inferior, superior) {
    let numPosibilidades = superior - inferior;
    let aleatorio = Math.random() * (numPosibilidades + 1);
    aleatorio = Math.floor(aleatorio);
    return inferior + aleatorio;
}


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
    
        suerte = (vuelta[cV].aciertos/i)*10;
        switch (i) {
            case 1:
                if (suerte==10)
                    alert("Arrancaste demasiado bien.. ¿Sos algo de HarryPotter?");
                if (suerte==0)
                    alert("Bienvenido a las desilusiones de la vida");
                break;
    
            case 2:
                if (suerte==10)
                    alert("No te la puedo creer!!");
                if (suerte==5)
                    alert("Una de cal y una de arena. Bien ahi");
                if (suerte==0)
                    alert("Todavia tenes tiempo");
                break;
    
            case 3:
                if (suerte==10)
                    alert("Brujería!!");
                if (suerte<10 && suerte >=5)
                    alert("Vas bien!");
                if (suerte>0 && suerte <5)
                    alert("Podria ser mejor");
                if (suerte==0)
                    alert("Espero que por lo menos seas carismatico");
                break;
    
            case 4:
                if (suerte==10)
                    alert("Deja de estudiar y anda al casino!!!");
                if (suerte==7.5)
                    alert("Por favor dejame ser tu amigo!");
                if (suerte==5)
                    alert("Nada mal!!");
                if (suerte==2.5)
                    alert("Te recomiendo estudiar porque de suerte estas mas o menos");
                if (suerte==0)
                    alert("Ya ni el carisma te salva");
                break;
    
            case 4:
                if (suerte==10)
                    alert("Deja de estudiar y anda al casino!!!");
                if (suerte==7.5)
                    alert("Por favor dejame ser tu amigo!");
                if (suerte==5)
                    alert("Nada mal!!");
                if (suerte==2.5)
                    alert("Consolate con que hay algunos peor que vos");
                if (suerte==0)
                    alert("espero tengas buenos contactos..");
                break;
    
            case 5:
                if (suerte==10)
                    alert("Realmente impresionante! Lo tuyo no es humano");
                if (suerte==8)
                    alert("Por favor dejame ser tu amigo!");
                if (suerte==6)
                    alert("Bastante bien");
                if (suerte==4)
                    alert("Un mortal como todos");
                if (suerte==2)
                    alert("Supongo que en el amor te va bien");
                if (suerte==0)
                    alert("La tenes complicada.. anda buscando alguna herencia por ahi");
                break;
    
            default:
                break;
        }
    
        console.log("Suerte acumulada del 0 al 100: " +(suerte*10)+ " %");
        numEleg=0;
    }
    
    cV++;

    console.log("Aciertos: " + aciertos);
    console.log("Fracasos: " + fracasos);
    console.log("Suerte: " +(suerte*10)+ " %");
    
    continuar2 = prompt("Desea probar de nuevo? (si/no)")

} while (continuar2 == "si");




