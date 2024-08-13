document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const hiddenMessage = document.getElementById('hiddenMessage');

    revealButton.addEventListener('click', () => {
        hiddenMessage.style.display = 'block';
        revealButton.style.display = 'none';
    });
});
