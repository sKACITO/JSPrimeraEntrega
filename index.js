let nombreUsuario = prompt("Ingrese su nombre para ingresar a la página de Ferretería Martín")
for (let i=1; i<=3; i++)
if (nombreUsuario != "") {
    alert ("Bienvenido a Ferretería Martín, " +nombreUsuario + "!")
    break;
} else {  
    alert("Ingresaste un espacio en blanco, bienvenido anonimo!")
    break;
    }

let productoUsuario = prompt("¿Qué tipo de herramienta está buscando?\n 1. Manuales")
while (productoUsuario != "salir") {
while (productoUsuario == 1 || 2) {
    let seleccionUsuario = prompt("Tenemos para ofrecerle las siguientes herramientas manuales: \n 1. Maza Gherardi $2500\n 2. Martillo Galponero Gherardi $2000\n 3. Corta Fierro Gherardi 300mm $1500\n 4. Comprar ")
    switch (seleccionUsuario){
        case "1":
            let precioMaza = "$2500"
        alert("Seleccionaste la Maza Gherardi, el precio es de: " +precioMaza)
        break;
        case "2": 
            let precioMartillo = "$2000"
        alert("Seleccionaste el Martillo Galponero Gherardi, el precio es de: " +precioMartillo)
        break;
        case "3": 
            let precioCorta = "$1500"
        alert("Seleccionaste el Corta Fierro Gherardi 300mm, el precio es de: " +precioCorta)
        break;
        case "4":
            while (seleccionUsuario == 4) {
                let formaPago = prompt("¿De qué manera va a abonar el producto? \n 1. Efectivo \n 2. Transferencia \n 3. Tarjeta de débito \n 4. Tarjeta de crédito")
                switch (formaPago) {
                    case "1":
                        alert("Seleccionaste forma de pago en efectivo, accedes a un 5% de descuento.")
                        break;
                    case "2":
                        alert("Seleccionaste forma de pago por transferencia, accedes a un 5% de descuento.")
                        break;
                    case "3":
                        alert("Seleccionaste forma de pago con tarjeta de débito, el precio se mantiene.")
                        break;
                    case "4":
                        alert("Seleccionaste forma de pago con tarjeta de débito, el precio se mantiene.")
                        break;
                    }
                }
            }
        }
    }




