// controla la inimacion en moviles
    window.addEventListener('load', function() {
    // Función para detectar si se trata de un dispositivo móvil
    function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || (typeof window.orientation !== "undefined") || (navigator.userAgent.indexOf('IEMobile') !== -1);
    }

    // Función para eliminar elementos específicos en dispositivos móviles
    function eliminarEnDispositivoMovil() {
    if (isMobileDevice()) {
    var spans = document.querySelectorAll('.marco span');
    spans.forEach(function(span) {
    span.parentNode.removeChild(span);
    });
}}
    
    // Llamar a la función para eliminar elementos en dispositivos móviles
    eliminarEnDispositivoMovil();
    });
