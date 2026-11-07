
const bancoPreguntas = {
    html: {
        facil: [
            {
                pregunta: "¿Qué significa HTML?",
                opciones: [
                    "HyperText Markup Language",
                    "HighText Machine Language",
                    "HyperTool Multi Language"
                ],
                correcta: "HyperText Markup Language",
                explicacion: "HTML significa HyperText Markup Language y se utiliza para estructurar páginas web."
            },
            {
                pregunta: "¿Qué etiqueta se utiliza para crear un párrafo?",
                opciones: ["<p>", "<h1>", "<div>"],
                correcta: "<p>",
                explicacion: "La etiqueta <p> permite crear párrafos de texto."
            },
            {
                pregunta: "¿Qué etiqueta permite insertar una imagen?",
                opciones: ["<img>", "<image>", "<picture-text>"],
                correcta: "<img>",
                explicacion: "La etiqueta <img> permite insertar imágenes en una página web."
            }
        ],
        medio: [
            {
                pregunta: "¿Qué atributo se utiliza para indicar la dirección de una imagen?",
                opciones: ["src", "href", "alt"],
                correcta: "src",
                explicacion: "El atributo src indica la ruta o dirección del archivo de imagen."
            },
            {
                pregunta: "¿Qué etiqueta se utiliza para crear un enlace?",
                opciones: ["<a>", "<link>", "<url>"],
                correcta: "<a>",
                explicacion: "La etiqueta <a> permite crear enlaces hacia otras páginas o recursos."
            },
            {
                pregunta: "¿Qué elemento representa el contenido principal de una página?",
                opciones: ["<main>", "<footer>", "<aside>"],
                correcta: "<main>",
                explicacion: "El elemento <main> identifica el contenido principal del documento."
            }
        ],
        dificil: [
            {
                pregunta: "¿Qué atributo permite relacionar una etiqueta label con un campo de formulario?",
                opciones: ["for", "name", "target"],
                correcta: "for",
                explicacion: "El atributo for de label debe coincidir con el id del campo asociado."
            },
            {
                pregunta: "¿Qué atributo de un formulario define el método de envío de datos?",
                opciones: ["method", "action", "enctype"],
                correcta: "method",
                explicacion: "El atributo method define cómo se envían los datos, por ejemplo mediante GET o POST."
            },
            {
                pregunta: "¿Qué atributo permite que un campo de formulario no pueda enviarse vacío?",
                opciones: ["required", "placeholder", "disabled"],
                correcta: "required",
                explicacion: "El atributo required establece que el campo debe completarse antes de enviar el formulario."
            }
        ]
    },

    css: {
        facil: [
            {
                pregunta: "¿Para qué se utiliza CSS?",
                opciones: [
                    "Para dar estilo a las páginas web",
                    "Para crear bases de datos",
                    "Para programar servidores"
                ],
                correcta: "Para dar estilo a las páginas web",
                explicacion: "CSS permite controlar colores, tamaños, espacios y presentación de los elementos."
            },
            {
                pregunta: "¿Qué propiedad cambia el color del texto?",
                opciones: ["color", "background", "font-size"],
                correcta: "color",
                explicacion: "La propiedad color define el color del texto."
            },
            {
                pregunta: "¿Qué símbolo se utiliza para seleccionar una clase en CSS?",
                opciones: [".", "#", "*"],
                correcta: ".",
                explicacion: "El punto permite seleccionar elementos mediante una clase."
            }
        ],
        medio: [
            {
                pregunta: "¿Qué propiedad permite cambiar el espacio interno de un elemento?",
                opciones: ["padding", "margin", "border"],
                correcta: "padding",
                explicacion: "Padding controla el espacio entre el contenido y el borde del elemento."
            },
            {
                pregunta: "¿Qué propiedad permite organizar elementos con Flexbox?",
                opciones: ["display: flex", "position: fixed", "float: left"],
                correcta: "display: flex",
                explicacion: "Display: flex activa el modelo Flexbox para organizar elementos."
            },
            {
                pregunta: "¿Qué propiedad modifica el tamaño de la letra?",
                opciones: ["font-size", "text-align", "font-style"],
                correcta: "font-size",
                explicacion: "Font-size permite definir el tamaño del texto."
            }
        ],
        dificil: [
            {
                pregunta: "¿Qué propiedad permite definir columnas en CSS Grid?",
                opciones: ["grid-template-columns", "flex-direction", "column-gap"],
                correcta: "grid-template-columns",
                explicacion: "Grid-template-columns define la cantidad y el tamaño de las columnas."
            },
            {
                pregunta: "¿Qué unidad relativa depende del tamaño de fuente del elemento raíz?",
                opciones: ["rem", "em", "px"],
                correcta: "rem",
                explicacion: "La unidad rem se calcula con respecto al tamaño de fuente del elemento raíz HTML."
            },
            {
                pregunta: "¿Qué pseudoclase se activa cuando el cursor pasa sobre un elemento?",
                opciones: [":hover", "::before", ":checked"],
                correcta: ":hover",
                explicacion: "La pseudoclase :hover aplica estilos cuando el puntero está sobre un elemento."
            }
        ]
    },

    javascript: {
        facil: [
            {
                pregunta: "¿Qué palabra se utiliza para declarar una variable que puede cambiar?",
                opciones: ["let", "const", "static"],
                correcta: "let",
                explicacion: "Let permite declarar variables cuyo valor puede modificarse."
            },
            {
                pregunta: "¿Qué función muestra un mensaje emergente?",
                opciones: ["alert()", "print()", "promptText()"],
                correcta: "alert()",
                explicacion: "Alert muestra una ventana emergente con un mensaje."
            },
            {
                pregunta: "¿Qué símbolo se utiliza para escribir comentarios de una línea?",
                opciones: ["//", "<!-- -->", "**"],
                correcta: "//",
                explicacion: "Las dos barras permiten escribir comentarios de una sola línea."
            }
        ],
        medio: [
            {
                pregunta: "¿Qué método permite seleccionar un elemento por su ID?",
                opciones: [
                    "document.getElementById()",
                    "document.getElementsByClassName()",
                    "document.createElement()"
                ],
                correcta: "document.getElementById()",
                explicacion: "Este método busca y devuelve el elemento que tiene el ID indicado."
            },
            {
                pregunta: "¿Qué estructura permite repetir instrucciones mientras se cumpla una condición?",
                opciones: ["while", "if", "switch"],
                correcta: "while",
                explicacion: "El ciclo while repite instrucciones mientras su condición sea verdadera."
            },
            {
                pregunta: "¿Qué método agrega un elemento al final de un arreglo?",
                opciones: ["push()", "pop()", "shift()"],
                correcta: "push()",
                explicacion: "Push agrega uno o varios elementos al final de un arreglo."
            }
        ],
        dificil: [
            {
                pregunta: "¿Qué método permite ejecutar una función cuando ocurre un evento?",
                opciones: ["addEventListener()", "querySelector()", "innerHTML"],
                correcta: "addEventListener()",
                explicacion: "AddEventListener registra una función que se ejecutará cuando ocurra un evento."
            },
            {
                pregunta: "¿Qué devuelve una función que no tiene una instrucción return?",
                opciones: ["undefined", "null", "false"],
                correcta: "undefined",
                explicacion: "En JavaScript, una función sin return devuelve undefined."
            },
            {
                pregunta: "¿Qué método transforma un texto JSON en un objeto de JavaScript?",
                opciones: ["JSON.parse()", "JSON.stringify()", "JSON.object()"],
                correcta: "JSON.parse()",
                explicacion: "JSON.parse convierte una cadena JSON en un valor de JavaScript."
            }
        ]
    }
};

// Obtener los datos del estudiante
const nombre = sessionStorage.getItem("nombre");
const categoria = sessionStorage.getItem("categoria");
const dificultadGuardada = sessionStorage.getItem("dificultad");

// Normalizar la dificultad
function normalizarDificultad(valor) {
    return valor
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

const dificultad = dificultadGuardada
    ? normalizarDificultad(dificultadGuardada)
    : "";

// Verificar los datos
if (
    !nombre ||
    !bancoPreguntas[categoria] ||
    !bancoPreguntas[categoria][dificultad]
) {
    window.location.href = "index.html";
}

// Seleccionar preguntas según categoría y dificultad
const preguntasDisponibles = bancoPreguntas[categoria][dificultad];

// Mezclar preguntas
function mezclar(array) {
    const copia = [...array];

    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    return copia;
}

const preguntas = mezclar(preguntasDisponibles);

let indiceActual = 0;
let puntuacion = 0;
let respuestas = [];
let respuestaProcesada = false;

// Elementos HTML
const saludo = document.querySelector("#saludo-estudiante");
const progreso = document.querySelector("#progreso");
const barraInterior = document.querySelector("#barra-progreso-interior");
const formulario = document.querySelector("#formulario-respuestas");
const preguntaElemento = document.querySelector("#pregunta");
const opcionesElemento = document.querySelector("#opciones");
const mensaje = document.querySelector("#mensaje");
const botonResponder = document.querySelector("#boton-responder");

// Mostrar saludo
saludo.textContent = `¡Vamos, ${nombre}! Demuestra lo que sabes.`;

// Mostrar pregunta
function mostrarPregunta() {
    const preguntaActual = preguntas[indiceActual];

    preguntaElemento.textContent = preguntaActual.pregunta;
    opcionesElemento.innerHTML = "";
    mensaje.textContent = "";

    progreso.textContent = `Pregunta ${indiceActual + 1} de ${preguntas.length}`;

    barraInterior.style.width =
        `${((indiceActual + 1) / preguntas.length) * 100}%`;

    const opcionesMezcladas = mezclar(preguntaActual.opciones);

    opcionesMezcladas.forEach((opcion, indice) => {
        const etiqueta = document.createElement("label");
        const radio = document.createElement("input");

        radio.type = "radio";
        radio.name = "respuesta";
        radio.value = opcion;
        radio.required = true;

        etiqueta.appendChild(radio);
        etiqueta.appendChild(document.createTextNode(" " + opcion));

        opcionesElemento.appendChild(etiqueta);
    });
}

// Comprobar respuesta
formulario.addEventListener("submit", function(evento) {
    evento.preventDefault();

    // Si ya respondió, avanzar
    if (respuestaProcesada) {
        indiceActual++;

        if (indiceActual < preguntas.length) {
            respuestaProcesada = false;
            mostrarPregunta();
            botonResponder.textContent = "Confirmar respuesta";
        } else {
            finalizarQuiz();
        }

        return;
    }

    // Obtener respuesta seleccionada
    const seleccionada = document.querySelector(
        'input[name="respuesta"]:checked'
    );

    if (!seleccionada) {
        mensaje.textContent = "Selecciona una respuesta antes de continuar.";
        return;
    }

    const preguntaActual = preguntas[indiceActual];
    const respuestaUsuario = seleccionada.value;
    const esCorrecta = respuestaUsuario === preguntaActual.correcta;

    // Mostrar resultado de la respuesta
    if (esCorrecta) {
        puntuacion++;
        mensaje.textContent = "¡Correcto! " + preguntaActual.explicacion;
    } else {
        mensaje.textContent =
            "Respuesta incorrecta. La respuesta correcta es: " +
            preguntaActual.correcta + ". " +
            preguntaActual.explicacion;
    }

    // Guardar respuesta
    respuestas.push({
        pregunta: preguntaActual.pregunta,
        respuestaUsuario: respuestaUsuario,
        respuestaCorrecta: preguntaActual.correcta,
        esCorrecta: esCorrecta
    });

    // Cambiar estado del cuestionario
    respuestaProcesada = true;
    botonResponder.textContent = "Siguiente pregunta";
});

// Guardar resultados
function finalizarQuiz() {
    const resultado = {
        nombre: nombre,
        categoria: categoria,
        dificultad: dificultad,
        puntuacion: puntuacion,
        total: preguntas.length,
        respuestas: respuestas
    };

    sessionStorage.setItem("resultados", JSON.stringify(resultado));

    window.location.href = "resultados.html";
}

// Iniciar cuestionario
mostrarPregunta();
