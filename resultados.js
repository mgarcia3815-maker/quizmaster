
// 1. Obtener los datos guardados por el cuestionario
const datosGuardados = sessionStorage.getItem('resultados');

// 2. Seleccionar los elementos HTML
const nombreEstudiante = document.querySelector('#nombre-estudiante');
const puntuacionHTML = document.querySelector('#puntuacion');
const porcentajeHTML = document.querySelector('#porcentaje');
const revisionHTML = document.querySelector('#revision');

// 3. Comprobar si existen resultados
if (datosGuardados === null) {
    nombreEstudiante.textContent = 'No hay resultados disponibles.';
    puntuacionHTML.textContent = 'Primero debes completar un cuestionario.';
    porcentajeHTML.textContent = '0%';
} else {

    // 4. Convertir los datos guardados en un objeto JavaScript
    const resultados = JSON.parse(datosGuardados);

    // 5. Calcular el porcentaje obtenido
    const porcentaje = Math.round(
        (resultados.puntuacion / resultados.total) * 100
    );

    // 6. Mostrar los datos del estudiante
    nombreEstudiante.textContent = `Estudiante: ${resultados.nombre}`;

    puntuacionHTML.textContent =
        `${resultados.puntuacion} de ${resultados.total} respuestas correctas`;

    porcentajeHTML.textContent = `${porcentaje}%`;

    // 7. Mostrar la revisión de respuestas
    revisionHTML.replaceChildren();

    resultados.respuestas.forEach((respuesta, indice) => {

        const contenedor = document.createElement('div');
        const pregunta = document.createElement('h4');
        const respuestaUsuario = document.createElement('p');
        const respuestaCorrecta = document.createElement('p');
        const estado = document.createElement('p');

        pregunta.textContent =
            `Pregunta ${indice + 1}: ${respuesta.pregunta}`;

        respuestaUsuario.textContent =
            `Tu respuesta: ${respuesta.respuestaUsuario}`;

        respuestaCorrecta.textContent =
            `Respuesta correcta: ${respuesta.respuestaCorrecta}`;

        estado.textContent = respuesta.esCorrecta
            ? '¡Respuesta correcta!'
            : 'Respuesta incorrecta';

        contenedor.append(
            pregunta,
            respuestaUsuario,
            respuestaCorrecta,
            estado
        );

        revisionHTML.appendChild(contenedor);
    });
}
