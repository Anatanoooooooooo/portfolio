const trailsContainer = document.getElementById('trails');

document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.className = 'trail';
    trail.style.left = `${e.pageX}px`;
    trail.style.top = `${e.pageY}px`;
    
    trailsContainer.appendChild(trail);

    // Supprimer le tracé après un certain temps
    setTimeout(() => {
        trail.style.opacity = '0';
        setTimeout(() => {
            trailsContainer.removeChild(trail);
        }, 500); // Correspond à la durée de la transition d'opacité
    }, 100); // Temps avant de commencer à réduire l'opacité
});

function changeGradientPosition() {
    // Générer une position aléatoire
    const randomX = Math.random() * 100; // Valeur entre 0 et 100
    const randomY = Math.random() * 100; // Valeur entre 0 et 100
    
    // Modifier le style du body
    document.body.style.backgroundPosition = `${randomX}% ${randomY}%`;
}

// Changer la position toutes les 2 secondes
setInterval(changeGradientPosition, 200);