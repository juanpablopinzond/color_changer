function getRandomColor() {
    const letters = "0123456789ABCDEF"; //Se define cadena que contiene todos los caracteres posibles para un color hexadecimal entre 0 a F
    let color = "#"; //Se asigna a la variables color el prefijo # que asi es como se da inicio a la composicion de color haxadecimales, que # seguido de 6 caracteres
    for (let i = 0; i < 6; i++) { //se inicializa i en cero que es el indice, la segunda condicion es la que se tiene que cumplir, si se cumple queda como en stand by i con el nuevo valor agregado y se ejecuta el bloque de codigo
        color += letters[Math.floor(Math.random() * 16)]; //Math.random genera un numero entre 0 y 1, lo multiplica entre 0 y 15 y Math.floor redondea al numero entero mas cercano
        //si el resultado es 0.5 y lo multiplica por 3 el resultado sera 1.5 pero Math.floor lo redondea a 1 para obtener el indice deseado.
    }

    return color;
}

let result = document.getElementById("changer");
result.addEventListener("click", function() { document.body.style.backgroundColor = getRandomColor() })

function getRandomInt(min, max) { //Esta funcion genera un numero entre el minimo y el maximo, generando un numero entre 0 y 1 y redondeandolo al numero entre 0 y 255
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomColorRGBA() { //se crean constante y se pasa como parametro los valores de 0 y 255
    const r = getRandomInt(0, 255); //Rojo
    const g = getRandomInt(0, 255); //Verde
    const b = getRandomInt(0, 255); //Azul
    const a = Math.random().toFixed(2); // Valor entre 0 y 1, con dos decimales luego del punto, ejemplo: 0.25, 1.2
    return `rgba(${r}, ${g}, ${b}, ${a})`; // se concateana en el formato rgba y se devuelven las constantes con los valores aleatorios
}

let resultRGBA = document.getElementById("RGBA_changer");
resultRGBA.addEventListener("click", function() { document.body.style.backgroundColor = getRandomColorRGBA() });

//LINEAR AND RADIAL GRADIENT METHOD

function getRandomGradiantNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; // se reemplaza con los parametros establecidos, se genera un mnumero entre 0 a 255
}

function getRandomGradiantColor() {
    const r = getRandomGradiantNumber(0, 255);
    const g = getRandomGradiantNumber(0, 255);
    const b = getRandomGradiantNumber(0, 255);
    const a = Math.random().toFixed(2); // se genera un valor entre 0 y 1 para que sea la opacidad, con dos decimales luego del punto
    return `rgba(${r}, ${g}, ${b}, ${a})` // rgba(100, 210, 89, 0.80); asi es como queda el resultado.
}

function getRandomLinearGradient() {
    const direction = getRandomGradiantNumber(0, 360); // en esta funcion se generan la direccion de los colores en grados entre 0 a 360
    const color1 = getRandomGradiantColor(); // se generan dos colores aleatorios. de tipo rgba
    const color2 = getRandomGradiantColor();
    return `linear-gradient(${direction}deg, ${color1}, ${color2})`; // asi quedaria linear-gradient(360deg, rgba(100, 200, 95), rgba(85, 29, 101), 1.5)
}

function getRandomRadialGradient() { //en esta funcion se genera lo mismo que en la de getRandomLinearGradient
    const colorA = getRandomGradiantColor();
    const colorB = getRandomGradiantColor();
    return `radial-gradient(circle, ${colorA}, ${colorB})`; // queda asi: radial-gradient(circle, rgba(55, 36, 20, 0.45), rgba(110, 230, 39, 1.63))
}

function applyRandomGradient() {
    const gradientType = getRandomGradiantNumber(0, 1); // aqui se generan dos numero, o es el 0 o es el 1
    if (gradientType === 0) { // si gradientType es 0 entonces se aplica el primer bloque de codigo, si es diferente a 0 que seria 1 entonces se aplica el else
        document.body.style.backgroundImage = getRandomLinearGradient();
    } else {
        document.body.style.backgroundImage = getRandomRadialGradient();
    }
}

let resultGradient = document.getElementById("gradient_changer");
resultGradient.addEventListener("click", applyRandomGradient);

function resetDefaultColor() { // En esta funcion se quita todos lo elementos en el fondo usando backgroundImage = "" para los gradiantes y se establece fondo white para los colores de RGBA Y Hexadecimales
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "white";
}

let resetProperty = document.getElementById("reset_button");
resetProperty.addEventListener("click", function() { resetDefaultColor() });

//Si se escribe el evento addEventListener asi addEventListener("click", resetDefaultColor()) lo que se esta haciendo es llamar a la funcion 
//para que se ejecute inmediatamente, lo que va a devolver es un valor de undefined ya que no hay un return explicito que diga lo que se tiene que devolver de manera inmediata.
//Lo que se puede hacer es pasar la funcion como referencia sin que se ejecute de manera inmediata, es decir, sin poner los parentesis.
//o tambien se puede encapsular la funcion dentro de una funcion anonima asi function() { resetDefaultColor() } o ("click", applyRandomGradient).
//Ambos ponen al pendiente la funcion para que solo se llame y se ejecute cuando sucede el evento click