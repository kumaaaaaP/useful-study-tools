// --- Data ---
const sections = [
    {
        id: 1,
        title: "物質の構成と結合",
        icon: "atom",
        intro: `
            <div class="space-y-4 text-gray-700 leading-relaxed">
                <p>次の文章を読んで、あとの問いに答えよ。必要ならば、アボガドロ定数 <span class="italic">N</span><sub>A</sub> = 6.0 × 10<sup>23</sup> /mol を用いよ。</p>
                <div class="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                    <p>イオン結合は、陽性の強い <span class="font-bold border-b-2 border-blue-400 px-1">(ア)</span> 元素のイオンと、陰性の強い <span class="font-bold border-b-2 border-blue-400 px-1">(イ)</span> 元素のイオンが結びつく結合である。</p>
                    <p class="mt-2">たとえば、ナトリウム Na はイオンになると <span class="font-bold border-b-2 border-blue-400 px-1">( A )</span> 型の電子配置、塩素 Cl はイオンになると <span class="font-bold border-b-2 border-blue-400 px-1">( B )</span> 型の電子配置となる。</p>
                    <p class="mt-2">(i) <u>このイオン結合は、粒子どうしが静電気力 (クーロン力) で結びついており、結合の力は強い。</u></p>
                    <p class="mt-2">(ii) <u>異なる原子どうしの共有結合では、共有電子対は <span class="font-bold border-b-2 border-blue-400 px-1">(エ)</span> の大きい原子の側に引き寄せられる</u>ため、結合に極性が生じる。</p>
                </div>
            </div>`,
        questions: [
            {
                id: "1-1",
                title: "問1 空欄補充",
                content: `<p>(1) (ア)～(エ)に当てはまる語の組合せを選べ。</p>
                          <div class="overflow-x-auto mt-2">
                            <table class="min-w-full text-sm border">
                                <tr class="bg-gray-50">
                                    <th class="border px-2 py-1"></th><th class="border px-2 py-1">ア</th><th class="border px-2 py-1">イ</th><th class="border px-2 py-1">ウ</th><th class="border px-2 py-1">エ</th>
                                </tr>
                                <tr><td class="border px-2 py-1 font-bold">⑥</td><td class="border px-2 py-1">金属</td><td class="border px-2 py-1">非金属</td><td class="border px-2 py-1">価電子</td><td class="border px-2 py-1">電気陰性度</td></tr>
                            </table>
                          </div>`,
                answer: "(1) ⑥ , (2) ②",
                explanation: "Na+はNeと同じ、Cl-はArと同じ電子配置になります。共有電子対を引く力は電気陰性度です。"
            },
            {
                id: "1-2",
                title: "問2 結晶格子",
                content: "

[Image of NaCl crystal lattice structure]
 <p>NaClの単位格子の一辺の長さは 0.56 nm です。単位格子に含まれるNaClは何組ですか？</p>",
                answer: "(1) 4組 , (2) 26 cm³",
                explanation: "単位格子内のCl-は 1/8×8 + 1/2×6 = 4個。Na+も4個なので合計4組です。"
            }
        ]
    },
    {
        id: 2,
        title: "酸・塩基と溶液の性質",
        icon: "flask-conical",
        intro: `<p>濃度未知の酢酸 20mL を 0.10 mol/L NaOH で滴定しました。</p>
                `,
        questions: [
            {
                id: "2-1",
                title: "A 酢酸の中和滴定",
                content: "問1: 酢酸水溶液の濃度は何 mol/L か。中和点は 10.0 mL とします。",
                answer: "5.0 × 10⁻² mol/L",
                explanation: "1 × c × 20 = 1 × 0.10 × 10 より、c = 0.050 となります。"
            }
        ]
    }
];

// --- Application Logic ---

function renderApp() {
    renderTabs();
    renderSection(sections[0].id);
}

function renderTabs() {
    const nav = document.getElementById('nav-tabs');
    nav.innerHTML = sections.map(s => `
        <button onclick="renderSection(${s.id})" id="tab-${s.id}" class="tab-btn flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 shadow-sm bg-white text-gray-600 hover:bg-gray-100 border border-gray-200">
            <i data-lucide="${s.icon}" class="w-6 h-6"></i>
            <span class="font-bold">第${s.id}問</span>
        </button>
    `).join('');
    lucide.createIcons();
}

function renderSection(sectionId) {
    // Update Tab Styles
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('bg-blue-600', 'text-white', 'shadow-md', 'ring-2', 'ring-blue-300');
        btn.classList.add('bg-white', 'text-gray-600');
    });
    const activeTab = document.getElementById(`tab-${sectionId}`);
    activeTab.classList.add('bg-blue-600', 'text-white', 'shadow-md', 'ring-2', 'ring-blue-300');
    activeTab.classList.remove('bg-white', 'text-gray-600');

    const section = sections.find(s => s.id === sectionId);
    const container = document.getElementById('section-container');

    container.innerHTML = `
        <div class="animate-fade-in">
            <div class="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
                <h2 class="text-2xl font-bold text-gray-800 mb-4 flex items-center border-b pb-4">
                    <span class="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm mr-3">第${section.id}問</span>
                    ${section.title}
                </h2>
                ${section.intro ? `<div class="mb-6 bg-blue-50 p-5 rounded-lg border border-blue-100 text-gray-700">${section.intro}</div>` : ''}
            </div>
            <div class="space-y-6">
                ${section.questions.map(q => `
                    <div class="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                        <div class="bg-gray-50 px-6 py-4 border-b border-gray-100">
                            <h3 class="font-bold text-lg text-gray-800">${q.title}</h3>
                        </div>
                        <div class="p-6">
                            <div class="text-gray-800 leading-relaxed mb-6">${q.content}</div>
                            <div class="mt-8 border-t pt-6">
                                <button onclick="toggleAnswer('${q.id}')" class="flex items-center justify-center px-6 py-3 rounded-lg font-bold bg-blue-600 text-white hover:bg-blue-700 shadow-md transition-colors">
                                    解答・解説を見る
                                </button>
                                <div id="ans-${q.id}" class="hidden mt-6 bg-green-50 rounded-lg border border-green-100 overflow-hidden">
                                    <div class="p-6 border-b border-green-100 bg-green-100/50">
                                        <h4 class="font-bold text-green-800 mb-2">【解答】</h4>
                                        <div class="text-green-900">${q.answer}</div>
                                    </div>
                                    <div class="p-6 bg-white text-gray-700">
                                        <h4 class="font-bold text-blue-600 mb-2">【解説】</h4>
                                        ${q.explanation}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    lucide.createIcons();
}

function toggleAnswer(id) {
    const el = document.getElementById(`ans-${id}`);
    const isHidden = el.classList.contains('hidden');
    
    if (isHidden) {
        el.classList.remove('hidden');
        el.classList.add('animate-slide-down');
    } else {
        el.classList.add('hidden');
    }
}

// Start the app
window.onload = renderApp;
