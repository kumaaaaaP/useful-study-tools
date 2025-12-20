// 単語データ
const allWords = [
    { english: "vital", japanese: "(～にとって)非常に重要な(to, for～)； 生命の" },
    { english: "vivid", japanese: "生き生きとした, 鮮やかな" },
    { english: "revive", japanese: "～を生き返らせる, 生き返る" },
    { english: "essential", japanese: "(～にとって)重要な, 必要不可欠な(to, for～)； 本質的な" },
    { english: "indispensable", japanese: "(～にとって)重要な, 必要不可欠な(to, for～)" },
    { english: "crucial", japanese: "決定的な, 極めて重要な" },
    { english: "significance", japanese: "重要性" },
    { english: "consequence", japanese: "結果, 重要さ" },
    { english: "matter", japanese: "事柄, 問題； 重要である" },
    { english: "count", japanese: "～を数える； 重要である" },
    { english: "make a difference", japanese: "重要である" },
    { english: "trivial", japanese: "ささいな, ありふれた" },
    { english: "trifle", japanese: "ささいな事, くだらない事" },
    { english: "transact", japanese: "～(業務・取引)を処理する、行う" },
    { english: "ornament", japanese: "装飾" },
    { english: "corridor", japanese: "廊下" },
    { english: "warrant", japanese: "～を保証する； 正当化する" },
    { english: "mischief", japanese: "いたずら、悪さ" }
];

let currentRangeWords = [];
let currentIndex = 0;

// DOM要素の取得
const startNumberInput = document.getElementById('startNumber');
const endNumberInput = document.getElementById('endNumber');
const shuffleCheckbox = document.getElementById('shuffleCheckbox');
const startButton = document.getElementById('startButton');
const wordDisplay = document.getElementById('wordDisplay');
const meaningDisplay = document.getElementById('meaningDisplay');
const meaningText = document.getElementById('meaningText');
const flashcard = document.getElementById('flashcard');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const progressDisplay = document.getElementById('progressDisplay');
const messageDisplay = document.getElementById('messageDisplay');

/**
 * 配列をランダムにシャッフルする（フィッシャー・イェーツの手法）
 */
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

/**
 * エラーメッセージを表示する
 */
function showMessage(message) {
    messageDisplay.textContent = message;
    messageDisplay.classList.toggle('hidden', !message);
}

/**
 * 現在の単語を画面に表示する
 */
function displayWord(index) {
    if (currentRangeWords.length === 0) {
        wordDisplay.textContent = "READY";
        meaningDisplay.classList.add('hidden');
        prevButton.disabled = true;
        nextButton.disabled = true;
        progressDisplay.textContent = "0 / 0";
        return;
    }

    const currentWord = currentRangeWords[index];
    wordDisplay.textContent = currentWord.english;
    meaningText.textContent = currentWord.japanese;
    meaningDisplay.classList.add('hidden'); // 新しい単語の時は意味を隠す
    
    // ボタンの有効/無効制御
    prevButton.disabled = (currentIndex === 0);
    nextButton.disabled = (currentIndex === currentRangeWords.length - 1);
    
    // 進捗表示
    progressDisplay.textContent = `${currentIndex + 1} / ${currentRangeWords.length}`;
}

// 演習開始ボタンのクリックイベント
startButton.addEventListener('click', () => {
    showMessage('');
    const startNum = parseInt(startNumberInput.value);
    const endNum = parseInt(endNumberInput.value);

    // 入力バリデーション
    if (isNaN(startNum) || isNaN(endNum) || startNum < 1 || endNum < 1) {
        showMessage("開始番号と終了番号を入力してください。");
        return;
    }
    if (startNum > endNum) {
        showMessage("開始番号は終了番号以下にしてください。");
        return;
    }
    if (startNum > allWords.length || endNum > allWords.length) {
        showMessage(`1から${allWords.length}の範囲で入力してください。`);
        return;
    }

    // 指定範囲の単語を抽出
    let tempWords = allWords.slice(startNum - 1, endNum);
    
    // シャッフル設定の適用
    currentRangeWords = shuffleCheckbox.checked ? shuffleArray(tempWords) : tempWords;
    
    currentIndex = 0;
    displayWord(currentIndex);
});

// カードをクリックした時に意味を表示/非表示
flashcard.addEventListener('click', () => {
    if (currentRangeWords.length > 0) {
        meaningDisplay.classList.toggle('hidden');
    }
});

// 「次へ」ボタン
nextButton.addEventListener('click', () => {
    if (currentIndex < currentRangeWords.length - 1) {
        currentIndex++;
        displayWord(currentIndex);
    }
});

// 「前へ」ボタン
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayWord(currentIndex);
    }
});

// 初期表示
window.onload = () => displayWord(0);
