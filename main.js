function impuestos(precio, moneda) {
    switch (moneda) {
        case "pesos":
            return precio + precio * 0.76;
        case "dolares":
            const precioDolar = precio * 246.98;
            return parseFloat(precioDolar + precioDolar * 0.76).toFixed(2); // A DECIDIR parseFloat().toFixed(2)
    }
}

let calculo = true;
while (calculo) {
    const precio = parseFloat(prompt("Ingrese el precio de su compra en el exterior: "));
    const moneda = prompt("¿En qué moneda esta el precio de su profucto? Ingrese 'pesos' o 'dolares' ");
    const resultado = impuestos(precio, moneda);
    alert("El precio total es ARS$ " + resultado);
    calculo = confirm("¿Desea calcular otro impuesto?");
}