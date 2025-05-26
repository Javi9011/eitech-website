const images = {
    outsourcing: 'https://www.eitech.com.co/wp-content/uploads/2023/03/outsourcing-1.jpg',
    arriendo: 'https://www.eitech.com.co/wp-content/uploads/2023/03/arriendo-1.jpg',
    servicio_tecnico: 'https://www.eitech.com.co/wp-content/uploads/2023/03/servicio-tecnico-1.jpg'
};

// Descargar imágenes
Object.entries(images).forEach(([key, url]) => {
    fetch(url)
        .then(response => response.blob())
        .then(blob => {
            const a = document.createElement('a');
            a.href = URL.createObjectURL(blob);
            a.download = `${key}.jpg`;
            a.click();
        })
        .catch(error => console.error(`Error descargando ${key}:`, error));
});
