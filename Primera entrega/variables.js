let edad // Variable global

function validaEdad(){
    edad = prompt("Ingrese una edad")
    if (edad >= 18){
        alert("✅ Usted puede ingresar al establecimiento")
    }
    else{
        alert("⛔ Usted es menor de edad, no puede ingresar al establecimiento")
    }
}

function precios(){
    const mensaje = ("Ingrese el código de la bebida que quiere comprar: \n\n" +
    "a) 🥤 Fernet cola $800 \n" +
    "b) 🥃 Vodka jugo $800 \n" +
    "c) 🍹 Mojito $1000 \n" +
    "d) 🍾 Destornillador $1100 \n" +
    "e) 🍷 Daiquiri $1200 \n\n" +
    "PRESIONE F PARA FINALIZAR"
)

    while (edad >= 18){
    let seleccion = prompt(mensaje).toLowerCase().trim()
        if(seleccion !== 'a' && seleccion !== 'b' && seleccion !== 'c' && seleccion !== 'd' && seleccion !== 'e' && seleccion !== 'f'){
            alert("🚫 Código inválido")
        }
        else if(seleccion === 'f'){
            return
        }

    }

    return seleccion
    
}

precios()