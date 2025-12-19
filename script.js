

window.addEventListener('load', () => {
    const img = document.getElementById('counter');
    if (img) { 
        const chance = 0.1; 
        if (Math.random() < chance) {
            img.classList.add('kiriban');
            img.title = '🌈キリ番達成！？';
        }
    }
});
