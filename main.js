
const formulario = document.querySelector('#formulario-inicio');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const nombre = document.querySelector('#nombre').value.trim();
    const categoria = document.querySelector('#categoria').value;
    const dificultad = document.querySelector('#dificultad').value;

    const error = document.querySelector('#error');

    if (nombre === '' || categoria === '' || dificultad === '') {
        error.textContent = 'Completa todos los campos para continuar.';
        return;
    }

    sessionStorage.setItem('nombre', nombre);
    sessionStorage.setItem('categoria', categoria);
    sessionStorage.setItem('dificultad', dificultad);

    window.location.href = 'quiz.html';
});
