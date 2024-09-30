document.addEventListener('DOMContentLoaded', function() {
    function sumar(a, b) {
        return a + b;
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
        }

        document.getElementById('resultado').textContent = "Resultado: " + resultado;
    };
});
