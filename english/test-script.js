document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const contents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const target = tab.dataset.target;

            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    const toggleButtons = document.querySelectorAll('.toggle-hints-btn');
    toggleButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const panel = btn.parentElement.nextElementSibling;
            panel.classList.toggle('hidden');
            btn.textContent = panel.classList.contains('hidden') ? '和訳・解説を表示' : '解説を閉じる';
        });
    });
});
