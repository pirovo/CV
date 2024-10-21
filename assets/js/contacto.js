document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Obtener los valores del formulario
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Aquí puedes agregar validación adicional si lo deseas
        
        // Simulación de envío (reemplaza esto con tu lógica de envío real)
        console.log('Enviando formulario...');
        console.log('Nombre:', name);
        console.log('Email:', email);
        console.log('Mensaje:', message);
        
        // Simulación de respuesta del servidor
        setTimeout(() => {
            alert('¡Mensaje enviado con éxito!');
            form.reset(); // Limpiar el formulario después del envío
        }, 1000);
        
        // Aquí es donde normalmente enviarías los datos a tu servidor
        // Puedes usar fetch() o axios para hacer una solicitud POST a tu backend
    });
});
