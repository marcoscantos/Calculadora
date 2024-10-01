
document.addEventListener('DOMContentLoaded', function() {
    function sumar(a, b) {
        return a + b;
    }

    function restar(a, b) {
        return a - b;
    }

    function multiplicar(a, b) {
        return a * b;
    }

    window.realizarOperacion = function(operacion) {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);

        if (isNaN(num1) || isNaN(num2)) {
            document.getElementById('resultado').textContent = "Prueba con otro numero";
            return;
        }

        let resultado;
        if (operacion === 'suma') {
            resultado = sumar(num1, num2);
        } else if (operacion === 'resta') {
            resultado = restar(num1, num2);
        } else if (operacion === 'multiplicacion') {
            resultado = multiplicar(num1, num2);
        }

        document.getElementById('resultado').textContent = "Resultado: " + resultado;
    };
});

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
