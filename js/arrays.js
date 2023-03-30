// Ejercicio 1
const arrayLength = () => {
    let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    document.getElementById("result1a").innerHTML = "La longitud del array es " + letras.length;
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}

const arrayElement = () => {
    let letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'];
    document.getElementById("result1b").innerHTML = "Una letra aleatoria cualquiera: " + letras[getRandomInt(letras.length)];
}

// Ejercicio 2
const listArray = () => {
    const listaPlanetas = ["Mercurio", "Venus", "Tierra", "Martes", "Júpiter", "Saturno", "Urano" , "Neptuno"];
    let resultado = `La lista de planetas del sistema solar es:<ol>`
    for (let i = 0 ; i < listaPlanetas.length; i++) {
        resultado += `<li>${listaPlanetas[i]}</li>`
    }
    document.getElementById("result2").innerHTML = `${resultado}</ol>`;
}

// Ejercicio 3
const repleaceArray = (valor1, valor2) => {
    let array = ["DOM", "BOM", "Funciones", "Arrays"];
    let index = array.indexOf(valor1);
    if (index !== -1) {
        array[index] = valor2;
    }
    document.getElementById("result3a").innerHTML = JSON.stringify(array);
}

const copyArray = () => {
    let array = ["DOM", "BOM", "Funciones", "Arrays"];
    let newarray = array.slice([array.length - 2 , array.length]);
    document.getElementById("result3b").innerHTML = JSON.stringify(newarray);
}

const indiceArray = (item) => {
    let array = ["DOM", "BOM", "Funciones", "Arrays"];
    let index = array.indexOf(item);
    document.getElementById("result3c").innerHTML = "El elemento 'Funciones' ocupa la posición: " + index;
}

// Ejercicio 4
const convertToArray = (str) => {
    // let str = document.getElementById("frase").innerHTML;
    let arr = Array.from(str);
    document.getElementById("result4a").innerHTML = JSON.stringify(arr);
    return arr;
}

const invertArray = (str) => {
    let arr = convertToArray(str);
    arr.reverse();
    document.getElementById("result4b").innerHTML = JSON.stringify(arr);
    return arr;
}

const convertToString = (str) => {
    let arr = convertToArray(str);
    let strNew = "";

    arr.reverse();
    arr.map (e => strNew += e)
    document.getElementById("result4c").innerHTML = strNew;
    return strNew;
}

// Ejercicio 5
const jointArray = () => {
    let arrayUno = [1, 2, 3];
    let arrayDos = [4, 5, 6];
    let arrayTres = [];
    let iMax = arrayUno.length + arrayDos.length;
    let turno = true;

    for (let i = 0; i < iMax; i++) {
        arrayTres.push( (turno) ? arrayUno.splice(0 , 1) : arrayDos.splice(0 , 1));
        turno = !turno;
    }
    document.getElementById("result5a").innerHTML = arrayTres;
    document.getElementById("result5b").innerHTML = `Ahora arrayUno = ${JSON.stringify(arrayUno)} y arrayDos = ${JSON.stringify(arrayDos)} están vacios`;
}

// Ejercicio 6
const splitArray = () => {
    let array = [14, 52, 3, 78, 109, 33, 11, 10, 2, 223, 87];
    let arrayPares = [];
    let arrayImpares = [];

    for (let i = 0; i < array.length; i++) {
        (array[i]%2 == 0) ? arrayPares.push(array[i]) : arrayImpares.push(array[i]);
        }
    document.getElementById("result6a").innerHTML = `Estos son los números pares ${JSON.stringify(arrayPares)} y estos son los impares ${JSON.stringify(arrayImpares)} por separado.`;
    let arrayFull = arrayPares.concat(arrayImpares);
    document.getElementById("result6b").innerHTML = `Aquí los hemos unido en un único array ${JSON.stringify(arrayFull)}`;
}

// Ejercicio 7 
const mayoresQue = (num) => {
    let array = [14, 52, 3, 78, 109, 33, 11, 10, 2, 223, 87];
    const result = array.filter(e => e > num);
    document.getElementById("result7").innerHTML = `Entre los números de entrada existen  ${result.length} que son mayores de ${num} y son estos ${JSON.stringify(result)}`;
}

// Ejercicio 8
const findSimilars = () => {
    const javascript1 = ["DOM", "BOM", "Funciones", "Arrays"];
    const javascript2 = ["Objetos", "Arrays", "ParseInt"];

    const similars = [];
    javascript1.forEach ( element =>
        (javascript2.includes(element)) ? similars.push(element) : null
    );

    document.getElementById("result8").innerHTML = `En los array existen ${similars.length} elementos identicos, que son ${JSON.stringify(similars)}`;
}

// Ejercicio 9
const showWinners = () => {
    const raceFinishers = ["Sandra Key", "Hoyt Brock", "Lee Hart", "Maya Jenkins", "Nathaniel Ramsey"]
    const [primero, segundo, tercero, ...rest] = raceFinishers;

    document.getElementById("result9").innerHTML = `El primer lugar corresponde a: ${primero}<br> El segundo lugar es de ${segundo}<br> El tercero en llegar ha sido ${tercero} <br><br> ... y el resto de personas que completaron la carrera son ${rest}`;
}


// Ejercicio 10
const showName = () => {
    let person =  {
        "givenname": "Kibo",
        "surename": "Dorsey",
        "country": "Nigeria",
        "city": "Chernihiv",
        "postalZip": "2286",
        "address": "822-3418 Vestibulum St.",
        "phone": "(357) 412-8520",
        "email": "urna@hotmail.couk",
        "birthdate": "Jul 27, 2023"
    }

    person["fullname"] = person.givenname.concat(' ', person.surename);
    document.getElementById("result10").innerHTML = `El nombre completo de esta pesona es: ${person.fullname}`;

}

// Ejercicio 11
const showCountry = () => {
    let person =  {
        "givenname": "Kibo",
        "surename": "Dorsey",
        "country": "Nigeria",
        "city": "Chernihiv",
        "postalZip": "2286",
        "address": "822-3418 Vestibulum St.",
        "phone": "(357) 412-8520",
        "email": "urna@hotmail.couk",
        "birthdate": "Jul 27, 2023"
    }

    person["fullname"] = person.givenname.concat(' ', person.surename);
    let {fullname, country, email, birthdate} = person;
    document.getElementById("result10a").innerHTML = `${fullname} vive en ${country}`;
}

const showEmail = () => {
    let person =  {
        "givenname": "Kibo",
        "surename": "Dorsey",
        "country": "Nigeria",
        "city": "Chernihiv",
        "postalZip": "2286",
        "address": "822-3418 Vestibulum St.",
        "phone": "(357) 412-8520",
        "email": "urna@hotmail.couk",
        "birthdate": "Jul 27, 2023"
    }

    person["fullname"] = person.givenname.concat(' ', person.surename);
    let {fullname, country, email, birthdate} = person;
    document.getElementById("result10b").innerHTML = `El correo electrónico de ${fullname} es ${email}`;
}

const showBrithdate = () => {
    let person =  {
        "givenname": "Kibo",
        "surename": "Dorsey",
        "country": "Nigeria",
        "city": "Chernihiv",
        "postalZip": "2286",
        "address": "822-3418 Vestibulum St.",
        "phone": "(357) 412-8520",
        "email": "urna@hotmail.couk",
        "birthdate": "Jul 27, 2023"
    }

    person["fullname"] = person.givenname.concat(' ', person.surename);
    let {fullname, country, email, birthdate} = person;
    document.getElementById("result10c").innerHTML = `${fullname} nacio el ${birthdate}`;
}

// Ejercicio 12
const whereTheyLive = () => {
    let data = [
        {
            "name": "Idona Chase",
            "country": "Sweden",
            "city": "Bydgoszcz",
            "postalZip": "384915",
            "address": "P.O. Box 611, 8363 Sed, Av.",
            "phone": "(241) 575-5841",
            "email": "ultrices.vivamus@hotmail.couk",
            "birthdate": "Oct 17, 2022"
        },
        {
            "name": "Brittany Dejesus",
            "country": "Sweden",
            "city": "Ciudad Apodaca",
            "postalZip": "076253",
            "address": "Ap #293-2807 Placerat. Ave",
            "phone": "1-789-898-3175",
            "email": "nam.interdum@icloud.net",
            "birthdate": "Sep 9, 2022"
        },
        {
            "name": "Kadeem Boyle",
            "country": "Russian Federation",
            "city": "Mitú",
            "postalZip": "168219",
            "address": "P.O. Box 500, 5701 Et Avenue",
            "phone": "(565) 343-5612",
            "email": "a.sollicitudin@google.ca",
            "birthdate": "Apr 2, 2023"
        },
        {
            "name": "Ezekiel Collier",
            "country": "Pakistan",
            "city": "Anklam",
            "postalZip": "28844",
            "address": "Ap #495-7132 Vulputate Road",
            "phone": "1-602-837-5678",
            "email": "ullamcorper@aol.edu",
            "birthdate": "May 13, 2022"
        },
        {
            "name": "Tanner Kirk",
            "country": "Spain",
            "city": "Falun",
            "postalZip": "27842",
            "address": "Ap #631-1463 Vestibulum, St.",
            "phone": "(556) 726-0354",
            "email": "tempor@aol.edu",
            "birthdate": "May 14, 2022"
        }
    ];

    let listadepaises = [];
    data.forEach (e =>
        (listadepaises.includes(e.country)) ? null : listadepaises.push(e.country)
        );
    
    document.getElementById("result12").innerHTML = `Estas personas viven en un total de ${listadepaises.length} paises diferentes, los cuales son ${JSON.stringify(listadepaises)}`;
}

// Ejercicio 13
const showTheRecipe = () => {
    const receta = {
        "titulo": "Salmon al horno",
        "tiempoElaboracion": 10,
        "tiempoCoccion": 10,
        "comensales": 2,
        "ingredientes": [
            "2 lomos de salmón fresco",
            "80g de mayonesa",
            "1 clara de huevo",
            "1 diente de ajo",
            "1 limón",
            "sal"],
        "instrucciones": "Encendemos el horno, con calor arriba y abajo, a 200º C. Limpiamos y secamos los lomos de salmón, asegurando que no quedan escamas en la piel. Sazonamos, colocamos en una fuente de horno y reservamos. Pelamos el diente de ajo, rallamos la mitad y lo mezclamos con la mayonesa. Añadimos un poco de ralladura de limón y removemos. Batimos la clara de huevo a punto de nieve. Mezclamos con la mayonesa suavemente y con movimientos envolventes para que no pierda el aire incorporado con el batido. Extendemos una capa de la espuma de mayonesa sobre los lomos de salmón, introducimos en el horno y cocemos durante 10 minutos (el tiempo exacto dependerá del grosor de los lomos). Si, una vez hecho el salmón, la superficie no se dorara y quisiéramos darle un poco de color, añadimos un toque de grill final."
    }

    document.getElementById("result13").innerHTML = `
        <h3>${receta.titulo}</h3>
        <p>Tiempo de elaboración: ${receta.tiempoElaboracion}</p>
        <p>Ingredientes: ${receta.ingredientes.toString()}</p>
        `;
}

// Ejercicio 14
const name14 = () => {
}

// Ejercicio 15
const name15 = () => {
}
