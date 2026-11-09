const formulario = document.querySelector('#formulario-inicio');
const error = document.querySelector('#error');

const campos = [
    { selector: '#nombre', nombre: 'el nombre del estudiante' },
    { selector: '#categoria', nombre: 'la categoría' },
    { selector: '#dificultad', nombre: 'la dificultad' }
];

// Aviso si el usuario fue redirigido desde el cuestionario sin datos
const aviso = sessionStorage.getItem('aviso');
if (aviso) {
    error.textContent = aviso;
    sessionStorage.removeItem('aviso');
    error.scrollIntoView({ block: 'center' });
}

function limpiarErrores() {
    campos.forEach(function(campo) {
        const el = document.querySelector(campo.selector);
        el.removeAttribute('aria-invalid');
        el.removeAttribute('aria-describedby');
    });
}

// Campos que siguen marcados con error
function camposConError() {
    return campos.filter(function(campo) {
        return document.querySelector(campo.selector).getAttribute('aria-invalid') === 'true';
    });
}

// Muestra solo lo que aún falta; si no falta nada, borra el aviso
function actualizarAviso() {
    const pendientes = camposConError();
    error.textContent = pendientes.length === 0
        ? ''
        : 'Falta completar: ' + pendientes.map(function(c) { return c.nombre; }).join(', ') + '.';
}

// Al corregir un campo, se retira su marca de error y se actualiza el aviso
campos.forEach(function(campo) {
    const el = document.querySelector(campo.selector);
    el.addEventListener('input', function() {
        if (el.getAttribute('aria-invalid') === 'true' && el.value.trim() !== '') {
            el.removeAttribute('aria-invalid');
            el.removeAttribute('aria-describedby');
            actualizarAviso();
        } else if (camposConError().length === 0) {
            error.textContent = '';
        }
    });
});

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    limpiarErrores();

    const invalidos = campos.filter(function(campo) {
        return document.querySelector(campo.selector).value.trim() === '';
    });

    if (invalidos.length > 0) {
        const lista = invalidos.map(function(c) { return c.nombre; });
        error.textContent = 'Falta completar: ' + lista.join(', ') + '.';

        invalidos.forEach(function(campo) {
            const el = document.querySelector(campo.selector);
            el.setAttribute('aria-invalid', 'true');
            el.setAttribute('aria-describedby', 'error');
        });

        document.querySelector(invalidos[0].selector).focus();
        return;
    }

    error.textContent = '';

    sessionStorage.setItem('nombre', document.querySelector('#nombre').value.trim());
    sessionStorage.setItem('categoria', document.querySelector('#categoria').value);
    sessionStorage.setItem('dificultad', document.querySelector('#dificultad').value);

    window.location.href = 'quiz.html';
});
