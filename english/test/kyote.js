document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('.toggle');
    toggles.forEach(toggle => {
        toggle.addEventListener('click', () => {
            const exp = toggle.nextElementSibling;
            exp.style.display = exp.style.display === 'block' ? 'none' : 'block';
            toggle.textContent = exp.style.display === 'block' ? '解説を隠す' : '解説を表示';
        });
    });

    const submitBtn = document.getElementById('submitBtn');
    const scoreDiv = document.getElementById('score');
    const form = document.getElementById('quizForm');

    // 正解のマップ (ツールから入手した正解をここに設定)
    const answers = {
        'q1_1': '4',
        'q1_2': '1',
        'q1_3': '4',
        'q1_4': '3',
        'q1_5': '1',
        // 第2問 A
        'q2a_1': '1',
        // ... 全ての問の正解を追加 (例: 'q6a_1': '6' など、複数選択の場合は調整)
    };

    submitBtn.addEventListener('click', () => {
        let score = 0;
        const total = Object.keys(answers).length;
        for (const [key, value] of Object.entries(answers)) {
            const selected = form.querySelector(`input[name="${key}"]:checked`);
            if (selected && selected.value === value) {
                score++;
            }
        }
        scoreDiv.textContent = `得点: ${score} / ${total}`;
    });
});
