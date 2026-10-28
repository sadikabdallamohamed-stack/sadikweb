
console.log("Welcome to Sadik's Portfolio!");

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
        console.log(`Navigating to ${link.textContent}`);
    });
});
