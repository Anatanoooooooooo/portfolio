const trailsContainer = document.getElementById('trails');

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    
    trailsContainer.appendChild(trail);

    
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            trailsContainer.removeChild(trail);
        }, 500); // Durée de la transition d'opacité
    }, 100); // Temps avant de commencer à réduire l'opacité
});
