// fecha.js

// Función para actualizar la fecha en el HTML
function actualizarFecha() {
    // Obteniendo la fecha actual
    const today = new Date();
    
    // Definiendo los meses y las partes opcionales para cada uno
    const months = [
        { full: 'January', short: 'Jan' },
        { full: 'February', short: 'Feb' },
        { full: 'March', short: 'Mar' },
        { full: 'April', short: 'Apr' },
        { full: 'May', short: 'May' }, // Mayo no necesita ajuste
        { full: 'June', short: 'Jun' },
        { full: 'July', short: 'Jul' },
        { full: 'August', short: 'Aug' },
        { full: 'September', short: 'Sep' },
        { full: 'October', short: 'Oct' },
        { full: 'November', short: 'Nov' },
        { full: 'December', short: 'Dec' }
    ];
    
    // Extrayendo la parte completa y la abreviada del mes actual
    const monthIndex = today.getMonth();
    const monthFull = months[monthIndex].full;
    const monthShort = months[monthIndex].short;

    // Estableciendo los elementos de la fecha
    document.querySelector('.month').innerHTML = `${monthShort}<span>${monthFull.substring(monthShort.length)}</span>`;
    document.querySelector('.day').textContent = today.getDate();
    document.querySelector('.year').textContent = `, ${today.getFullYear()}`;
}

// Llamando a la función para actualizar la fecha cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', actualizarFecha);
