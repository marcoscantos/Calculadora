function realizarOperacion(operacion) {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    let resultado;

    if (isNaN(num1) || isNaN(num2)) {
        resultado = "Por favor ingresa números válidos.";
    } else {
        switch (operacion) {
            case 'suma':
                resultado = num1 + num2;
                break;
            case 'dividir':
                resultado2 = num2 !== 0 ? num1 / num2 : "No se puede dividir entre cero.";
                break;
            default:
                resultado = "Operación no válida.";
        }
    }

    document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
}
