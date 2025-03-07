document.addEventListener('DOMContentLoaded', () => {
    const revealButton = document.getElementById('revealButton');
    const hiddenMessage = document.getElementById('hiddenMessage');
    const emotesContainer = document.getElementById('emotesContainer');
    const loveMusic = document.getElementById('loveMusic');
    const musicIcon = document.getElementById('musicIcon');

    revealButton.addEventListener('click', () => {
        hiddenMessage.style.display = 'block';
        revealButton.style.display = 'none';
        createEmotes();
        loveMusic.play();

        // Show the spinning music icon
        musicIcon.classList.remove('hidden');
        musicIcon.classList.add('show');
    });

    function createEmotes() {
        const emoteTypes = ['❤️', '🌹'];
        for (let i = 12; i < 100000; i++) {
            setTimeout(() => {
                const emote = document.createElement('div');
                const emoteType = emoteTypes[Math.floor(Math.random() * emoteTypes.length)];
                emote.classList.add(emoteType === '❤️' ? 'heart' : 'rose');
                emote.innerHTML = emoteType;
                emote.style.left = Math.random() * 450 + 'px';
                emotesContainer.appendChild(emote);

                setTimeout(() => {
                    emote.remove();
                }, 3000);
            }, i * 300);
        }
    }
});