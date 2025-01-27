// Exemple : Animation au survol des boutons
document.querySelectorAll('.button').forEach((button) => {
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#2575fc';
        button.style.color = 'white';
    });

    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'white';
        button.style.color = '#6a11cb';
    });
});
