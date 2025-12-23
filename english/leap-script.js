// データの定義（1801〜1860の部分のみ抜粋。必要に応じて追加してください）
const fullQuizData = [
    { id: 1801, term: "efficient", definition: "効率的な", sentences: [{ jp: "効率的な方法", en_blanked: "an ( ) method", answer: "efficient" }] },
    { id: 1802, term: "domestic", definition: "国内の、家庭の", sentences: [{ jp: "国内市場", en_blanked: "the ( ) market", answer: "domestic" }] },
    // ... 中略 ...
    { id: 1860, term: "fundamental", definition: "根本的な", sentences: [{ jp: "根本的な変化", en_blanked: "a ( ) change", answer: "fundamental" }] }
];

let quizQuestions = [];
let currentIndex = 0;
let score = 0;

// 要素の取得
const setupScreen = document.getElementById('setup-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const questionContainer = document.getElementById('currentQuestionContainer');

// 範囲プリセットの生成
const testRangeList = document.getElementById('testRangeList');
for (let i = 1561; i < 1935; i += 50) {
    const end = Math.min(i + 49, 1935);
    const btn = document.createElement('button');
    btn.className = 'range-preset-btn';
    btn.textContent = `${i}-${end}`;
    btn.onclick = () => {
        document.getElementById('startId').value = i;
        document.getElementById('endId').value = end;
        testRangeList.classList.add('hidden');
    };
    testRangeList.appendChild(btn);
}

document.getElementById('testRangeToggleBtn').onclick = () => testRangeList.classList.toggle('hidden');

// クイズ開始
document.getElementById('startQuizBtn').onclick = () => {
    const start = parseInt(document.getElementById('startId').value);
    const end = parseInt(document.getElementById('endId').value);
    const mode = document.getElementById('quizMode').value;
    const isShuffle = document.getElementById('shuffleCheck').checked;

    const filtered = fullQuizData.filter(item => item.id >= start && item.id <= end);
    if (filtered.length === 0) {
        document.getElementById('rangeErrorFeedback').textContent = "範囲内のデータが見つかりません。";
        return;
    }

    quizQuestions = prepareQuestions(filtered, mode);
    if (isShuffle) quizQuestions.sort(() => Math.random() - 0.5);

    currentIndex = 0;
    score = 0;
    setupScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    showQuestion();
};

function prepareQuestions(data, mode) {
    return data.map(item => {
        const sent = item.sentences[0];
        if (mode === 'en-ja') return { q: item.term, a: item.definition, type: 'word' };
        if (mode === 'ja-en') return { q: item.definition, a: item.term, type: 'word' };
        if (mode === 'first-sentence-mc') {
            return { q: sent.en_blanked.replace('( )', '____'), hint: sent.jp, a: sent.answer, type: 'mc', options: generateOptions(sent.answer) };
        }
        return { q: sent.en_blanked.replace('( )', '____'), hint: sent.jp, a: sent.answer, type: 'input' };
    });
}

function generateOptions(correct) {
    let opts = [correct];
    while(opts.length < 4) {
        let dummy = fullQuizData[Math.floor(Math.random() * fullQuizData.length)].term;
        if(!opts.includes(dummy)) opts.push(dummy);
    }
    return opts.sort(() => Math.random() - 0.5);
}

function showQuestion() {
    const item = quizQuestions[currentIndex];
    document.getElementById('progressText').textContent = `問題 ${currentIndex + 1} / ${quizQuestions.length}`;
    document.getElementById('checkAnswerBtn').classList.remove('hidden');
    document.getElementById('nextQuestionBtn').classList.add('hidden');

    let html = `<div class="flashcard">`;
    if (item.type === 'word') {
        html += `<div class="word-display">${item.q}</div>
                 <div class="meaning-display hidden" id="answer-box">${item.a}</div>`;
    } else if (item.type === 'mc') {
        html += `<div style="font-size:1rem; color:#7f8c8d; margin-bottom:10px;">${item.hint}</div>
                 <div class="word-display" style="font-size:1.6rem;">${item.q}</div>
                 <div class="options-container">`;
        item.options.forEach(opt => {
            html += `<button class="option-btn" onclick="checkAnswerMC('${opt}', '${item.a}', this)">${opt}</button>`;
        });
        html += `</div><div class="meaning-display hidden" id="answer-box">正解: ${item.a}</div>`;
    } else {
        html += `<div style="font-size:1rem; color:#7f8c8d; margin-bottom:10px;">${item.hint}</div>
                 <div class="word-display" style="font-size:1.6rem;">${item.q}</div>
                 <input type="text" id="userInput" class="answer-input" placeholder="解答を入力" autocomplete="off">
                 <div class="meaning-display hidden" id="answer-box">正解: ${item.a}</div>`;
    }
    html += `</div>`;
    questionContainer.innerHTML = html;
}

window.checkAnswerMC = (selected, correct, btn) => {
    const btns = document.querySelectorAll('.option-btn');
    btns.forEach(b => b.disabled = true);
    if (selected === correct) {
        btn.classList.add('correct-choice');
        score++;
    } else {
        btn.classList.add('incorrect-choice');
        btns.forEach(b => { if(b.textContent === correct) b.classList.add('correct-choice'); });
    }
    document.getElementById('answer-box').classList.remove('hidden');
    document.getElementById('checkAnswerBtn').classList.add('hidden');
    document.getElementById('nextQuestionBtn').classList.remove('hidden');
};

document.getElementById('checkAnswerBtn').onclick = () => {
    const item = quizQuestions[currentIndex];
    if (item.type === 'input') {
        const input = document.getElementById('userInput').value.trim().toLowerCase();
        if (input === item.a.toLowerCase()) score++;
    }
    document.getElementById('answer-box').classList.remove('hidden');
    document.getElementById('checkAnswerBtn').classList.add('hidden');
    document.getElementById('nextQuestionBtn').classList.remove('hidden');
};

document.getElementById('nextQuestionBtn').onclick = () => {
    currentIndex++;
    if (currentIndex < quizQuestions.length) {
        showQuestion();
    } else {
        showResults();
    }
};

function showResults() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    document.getElementById('finalScore').textContent = `${score} / ${quizQuestions.length} 正解`;
}

document.getElementById('backToTopBtn').onclick = () => location.reload();
