// 穴埋め部分のクリック表示機能
document.addEventListener('DOMContentLoaded', () => {
    const blankContainers = document.querySelectorAll('.blank-container');
    
    blankContainers.forEach(container => {
        container.addEventListener('click', () => {
            container.classList.toggle('revealed');
        });
    });

    // フラッシュカード機能
    const flashcardData = [
        { id: 1, question: 'Fe(OH)₂の色', answer: '緑白色' },
        { id: 2, question: 'Fe(OH)₃の色', answer: '赤褐色' },
        { id: 3, question: 'Cu(OH)₂の色', answer: '青白色' },
        { id: 4, question: 'Zn(OH)₂の色', answer: '白色' },
        { id: 5, question: 'Al(OH)₃の色', answer: '白色' },
        { id: 6, question: 'Cr(OH)₃の色', answer: '灰緑色' },
        { id: 7, question: 'Ni(OH)₂の色', answer: '緑色' },
        { id: 8, question: 'Co(OH)₂の色', answer: '桃色' },
        { id: 9, question: 'Mn(OH)₂の色', answer: '淡桃色' },
        { id: 10, question: 'Ag₂Oの色', answer: '褐色' },
        { id: 11, question: 'CuSの色', answer: '黒色' },
        { id: 12, question: 'PbSの色', answer: '黒色' },
        { id: 13, question: 'HgSの色', answer: '黒色' },
        { id: 14, question: 'CdSの色', answer: '黄色' },
        { id: 15, question: 'ZnSの色', answer: '白色' },
        { id: 16, question: 'FeSの色', answer: '黒色' },
        { id: 17, question: 'MnSの色', answer: '淡桃色' },
        { id: 18, question: 'NiSの色', answer: '黒色' },
        { id: 19, question: 'AgClの色', answer: '白色' },
        { id: 20, question: 'AgBrの色', answer: '淡黄色' },
        { id: 21, question: 'AgIの色', answer: '黄色' },
        { id: 22, question: 'PbCl₂の色', answer: '白色' },
        { id: 23, question: 'PbI₂の色', answer: '黄色' },
        { id: 24, question: 'BaSO₄の色', answer: '白色' },
        { id: 25, question: 'CaSO₄の色', answer: '白色' },
        { id: 26, question: 'CaCO₃の色', answer: '白色' },
        { id: 27, question: '[Cu(NH₃)₄]²⁺の色', answer: '深青色' },
        { id: 28, question: '[Cu(OH)₄]²⁻の色', answer: '深青色' },
        { id: 29, question: 'Cu(H₂O)₆²⁺の色', answer: '青色' },
        { id: 30, question: '[Ag(NH₃)₂]⁺の色', answer: '無色' },
        { id: 31, question: '[Ag(S₂O₃)₂]³⁻の色', answer: '無色' },
        { id: 32, question: '[Ag(CN)₂]⁻の色', answer: '無色' },
        { id: 33, question: '[Zn(NH₃)₄]²⁺の色', answer: '無色' },
        { id: 34, question: '[Zn(OH)₄]²⁻の色', answer: '無色' },
        { id: 35, question: '[Al(OH)₄]⁻の色', answer: '無色' },
        { id: 36, question: 'CrO₄²⁻の色', answer: '黄色' },
        { id: 37, question: 'Cr₂O₇²⁻の色', answer: '橙色' },
        { id: 38, question: 'Cr³⁺の色', answer: '緑色' },
        { id: 39, question: 'Fe²⁺ + [Fe(CN)₆]³⁻の沈殿名', answer: 'ターンブルブルー' },
        { id: 40, question: 'Fe³⁺ + [Fe(CN)₆]⁴⁻の沈殿名', answer: 'ヘキサシアノ鉄(II)酸鉄(III) (紺青)' },
        { id: 41, question: 'Fe³⁺ + SCN⁻の色', answer: '血赤色' },
        { id: 42, question: 'Fe³⁺ + フェノールの色', answer: '紫色' },
        { id: 43, question: 'Co²⁺ (水和イオン)の色', answer: '桃色' },
        { id: 44, question: '[Co(NH₃)₆]³⁺の色', answer: '黄褐色' },
        { id: 45, question: 'CoCl₄²⁻の色', answer: '青色' },
        { id: 46, question: 'Ni²⁺ (水和イオン)の色', answer: '緑色' },
        { id: 47, question: '[Ni(NH₃)₆]²⁺の色', answer: '青紫色' },
        { id: 48, question: 'Ni²⁺ + ジメチルグリオキシムの色', answer: '赤色沈殿' },
        { id: 49, question: 'Zn(OH)₂ + 塩基の反応式', answer: '2OH⁻ → [Zn(OH)₄]²⁻' },
        { id: 50, question: 'Al(OH)₃ + 塩基の反応式', answer: 'OH⁻ → [Al(OH)₄]⁻' },
        { id: 51, question: 'Cr(OH)₃ + 塩基の反応式', answer: '3OH⁻ → [Cr(OH)₆]³⁻' },
        { id: 52, question: 'AgClの溶解性', answer: 'NH₃に可溶' },
        { id: 53, question: 'AgBrの溶解性', answer: '濃NH₃に可溶' },
        { id: 54, question: 'AgIの溶解性', answer: 'NH₃に不溶' },
        { id: 55, question: '2CrO₄²⁻ + 2H⁺ ⇄ ?', answer: 'Cr₂O₇²⁻ + H₂O' },
        { id: 56, question: 'クロム酸イオン、酸性溶液での色', answer: '橙色 (Cr₂O₇²⁻)' },
        { id: 57, question: 'クロム酸イオン、塩基性溶液での色', answer: '黄色 (CrO₄²⁻)' },
        { id: 58, question: 'MnO₄⁻が酸性溶液で還元されると?', answer: '赤紫色 → Mn²⁺ (淡桃色)' },
        { id: 59, question: 'MnO₄⁻が中性・塩基性溶液で還元されると?', answer: 'MnO₂ (黒褐色沈殿)' }
    ];

    let currentCards = [];
    let currentIndex = 0;
    let isRevealed = false;

    const startBtn = document.getElementById('startBtn');
    const flashcardArea = document.getElementById('flashcardArea');
    const flashcard = document.getElementById('flashcard');
    const wordDisplay = document.getElementById('wordDisplay');
    const meaningDisplay = document.getElementById('meaningDisplay');
    const progressText = document.getElementById('progressText');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const revealBtn = document.getElementById('revealBtn');
    const errorMsg = document.getElementById('errorMsg');

    startBtn.addEventListener('click', startPractice);
    flashcard.addEventListener('click', toggleReveal);
    revealBtn.addEventListener('click', toggleReveal);
    prevBtn.addEventListener('click', showPrevCard);
    nextBtn.addEventListener('click', showNextCard);

    function startPractice() {
        const startNum = parseInt(document.getElementById('startNum').value);
        const endNum = parseInt(document.getElementById('endNum').value);
        const shouldShuffle = document.getElementById('shuffleCheck').checked;

        // バリデーション
        if (startNum < 1 || endNum > 59 || startNum > endNum) {
            errorMsg.textContent = '範囲が正しくありません (1〜59)';
            return;
        }

        errorMsg.textContent = '';

        // 指定範囲のカードを取得
        currentCards = flashcardData.filter(card => card.id >= startNum && card.id <= endNum);

        // シャッフル
        if (shouldShuffle) {
            currentCards = shuffleArray([...currentCards]);
        }

        currentIndex = 0;
        flashcardArea.classList.remove('hidden');
        showCard();
        
        // ページをフラッシュカードまでスクロール
        flashcardArea.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    function showCard() {
        if (currentCards.length === 0) return;

        const card = currentCards[currentIndex];
        wordDisplay.textContent = card.question;
        meaningDisplay.textContent = card.answer;
        meaningDisplay.classList.add('hidden');
        isRevealed = false;

        progressText.textContent = `${currentIndex + 1} / ${currentCards.length}`;
        revealBtn.textContent = '答えを表示';

        // ボタンの状態を更新
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex === currentCards.length - 1;
    }

    function toggleReveal() {
        if (currentCards.length === 0) return;

        isRevealed = !isRevealed;
        if (isRevealed) {
            meaningDisplay.classList.remove('hidden');
            revealBtn.textContent = '答えを隠す';
        } else {
            meaningDisplay.classList.add('hidden');
            revealBtn.textContent = '答えを表示';
        }
    }

    function showPrevCard() {
        if (currentIndex > 0) {
            currentIndex--;
            showCard();
        }
    }

    function showNextCard() {
        if (currentIndex < currentCards.length - 1) {
            currentIndex++;
            showCard();
        }
    }

    function shuffleArray(array) {
        const newArray = [...array];
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    }
});
