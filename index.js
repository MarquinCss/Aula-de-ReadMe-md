const darkModeButton = document.getElementById('dark-mode-button');
const stylesheet = document.getElementById('stylesheet');

darkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Dark';
    } else {
        darkModeButton.textContent = 'Light';
    }
});