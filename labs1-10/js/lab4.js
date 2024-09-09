// Punto 1: Tabla de cuadrados y cubos
function tablaCuadradosCubos() {
    const numero = parseInt(prompt("Introduce un número:"));

    document.write("<table border='1'>");
    document.write("<tr><th>Número</th><th>Cuadrado</th><th>Cubo</th></tr>");

    for (let i = 1; i <= numero; i++) {
        document.write(`<tr><td>${i}</td><td>${i**2}</td><td>${i**3}</td></tr>`);
    }

    document.write("</table>");
}

// Punto 2: Suma de dos números aleatorios
function sumaAleatoria() {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const startTime = new Date();

    const respuesta = parseInt(prompt(`¿Cuál es la suma de ${num1} + ${num2}?`));
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;

    if (respuesta === num1 + num2) {
        document.write(`<p>Correcto! Tomaste ${timeTaken} segundos en responder.</p>`);
    } else {
        document.write(`<p>Incorrecto. La respuesta correcta era ${num1 + num2}. Tomaste ${timeTaken} segundos en responder.</p>`);
    }
}

// Punto 3: Contador de números en un arreglo
function contador(arr) {
    let negativos = 0, ceros = 0, positivos = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            negativos++;
        } else if (arr[i] === 0) {
            ceros++;
        } else {
            positivos++;
        }
    }

    return { negativos, ceros, positivos };
}

// Ejemplo de uso de la función contador
const resultadoContador = contador([-1, 0, 5, -3, 8, 0, -2, 4]);
console.log(resultadoContador);  // { negativos: 3, ceros: 2, positivos: 3 }

// Punto 4: Promedios de arreglos en una matriz
function promedios(matriz) {
    const promediosArray = [];

    for (let i = 0; i < matriz.length; i++) {
        const suma = matriz[i].reduce((acc, val) => acc + val, 0);
        const promedio = suma / matriz[i].length;
        promediosArray.push(promedio);
    }

    return promediosArray;
}

// Ejemplo de uso de la función promedios
const matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
const resultadoPromedios = promedios(matriz);
console.log(resultadoPromedios);  // [2, 5, 8]

// Punto 5: Inverso de un número
function inverso(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}

// Ejemplo de uso de la función inverso
const numeroInverso = inverso(12345);
console.log(numeroInverso);  // 54321

// Punto 6: Teorema de Pitágoras
function TrianguloRectangulo(a, b) {
    this.a = a;
    this.b = b;

    this.calcularHipotenusa = function() {
        return Math.sqrt(this.a**2 + this.b**2);
    };

    this.calcularLado = function(hipotenusa) {
        return Math.sqrt(hipotenusa**2 - this.b**2);
    };

    this.mostrarResultados = function() {
        const hipotenusa = this.calcularHipotenusa();
        document.write(`<p>Dados los lados 'a' = ${this.a} y 'b' = ${this.b}, la hipotenusa 'c' es: ${hipotenusa.toFixed(2)}</p>`);
        
        const ladoCalculado = this.calcularLado(hipotenusa);
        document.write(`<p>Dada la hipotenusa 'c' = ${hipotenusa.toFixed(2)} y el lado 'b' = ${this.b}, el otro lado 'a' es: ${ladoCalculado.toFixed(2)}</p>`);
    };
}

const triangulo = new TrianguloRectangulo(3, 4);
triangulo.mostrarResultados();


