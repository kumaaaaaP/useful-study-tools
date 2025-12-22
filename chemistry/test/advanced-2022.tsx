import React, { useState, useEffect } from 'react';
import { BookOpen, ChevronDown, ChevronUp, FlaskConical, Atom, Droplets, Thermometer, CheckCircle, HelpCircle, Menu, X } from 'lucide-react';

// --- Types ---
type Question = {
  id: string;
  title: string;
  content: React.ReactNode;
  answer: string | React.ReactNode;
  explanation: React.ReactNode;
};

type Section = {
  id: number;
  title: string;
  icon: React.ReactNode;
  intro?: React.ReactNode;
  questions: Question[];
};

// --- Components ---

const ChemicalFormula = ({ children }: { children: React.ReactNode }) => (
  <span className="font-mono bg-gray-100 px-1 rounded text-sm text-gray-800 inline-block align-middle mx-0.5">
    {children}
  </span>
);

const Sub = ({ children }: { children: React.ReactNode }) => (
  <sub className="text-xs">{children}</sub>
);

const Sup = ({ children }: { children: React.ReactNode }) => (
  <sup className="text-xs">{children}</sup>
);

// --- Data ---

const sections: Section[] = [
  {
    id: 1,
    title: "物質の構成と結合",
    icon: <Atom className="w-6 h-6" />,
    intro: (
      <div className="space-y-4 text-gray-700 leading-relaxed">
        <p>
          次の文章を読んで、あとの問いに答えよ。必要ならば、アボガドロ定数 <span className="font-serif italic">N</span><Sub>A</Sub> = 6.0 × 10<Sup>23</Sup> /mol を用いよ。
        </p>
        <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
          <p>
            イオン結合は、陽性の強い <span className="font-bold border-b-2 border-blue-400 px-1">(ア)</span> 元素のイオンと、陰性の強い <span className="font-bold border-b-2 border-blue-400 px-1">(イ)</span> 元素のイオンが結びつく結合である。それぞれのイオンは、電子を放出または受け取ることによって貴ガス型の電子配置となり、安定に存在する。
          </p>
          <p className="mt-2">
            たとえば、ナトリウム Na はイオンになると <span className="font-bold border-b-2 border-blue-400 px-1">( A )</span> 型の電子配置、塩素 Cl はイオンになると <span className="font-bold border-b-2 border-blue-400 px-1">( B )</span> 型の電子配置となることでそれぞれ安定に存在する。NaCl の結晶は、これらのイオンどうしがイオン結合している。
          </p>
          <p className="mt-2">
            (i) <u>このイオン結合は、粒子どうしが静電気力 (クーロン力) で結びついており、結合の力は強い。</u> このため、一般に融点、沸点は高く、常温で固体であるものが多い。また、イオン結合によってつくられるイオン結晶は一般に水に溶けやすい。水に溶解すると、陽イオンと陰イオンはばらばらの状態に分かれる。これを電離という。
          </p>
          <p className="mt-2">
            共有結合は、結合する <span className="font-bold border-b-2 border-blue-400 px-1">(イ)</span> 元素の原子どうしが、互いにいくつかの電子を出し合い、共有電子対を形成する。<span className="font-bold border-b-2 border-blue-400 px-1">(ウ)</span> は、典型元素において周期表の右側の元素ほど多くなるが、18族の貴ガス元素は、共有結合に寄与する電子がなく、単原子分子として存在するためゼロとなる。
          </p>
          <p className="mt-2">
            (ii) <u>異なる原子どうしの共有結合では、共有電子対は <span className="font-bold border-b-2 border-blue-400 px-1">(エ)</span> の大きい原子の側に引き寄せられる</u>ため、結合に極性が生じる。これにより、分子全体として極性を生じるものもあり、その代表が水分子である。
          </p>
        </div>
      </div>
    ),
    questions: [
      {
        id: "1-1",
        title: "問1 空欄補充",
        content: (
          <div className="space-y-4">
            <p>(1) (ア)～(エ)に当てはまる語の組合せとして最も適当なものを、次の①～⑥のうちから1つ選べ。</p>
            <div className="overflow-x-auto">
              <table className="min-w-full text-sm text-left text-gray-500 border border-gray-200">
                <thead className="bg-gray-50 text-gray-700 font-bold">
                  <tr>
                    <th className="px-4 py-2 border"></th>
                    <th className="px-4 py-2 border">ア</th>
                    <th className="px-4 py-2 border">イ</th>
                    <th className="px-4 py-2 border">ウ</th>
                    <th className="px-4 py-2 border">エ</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { id: 1, a: "非金属", b: "金属", c: "最外殻電子", d: "電子親和力" },
                    { id: 2, a: "非金属", b: "金属", c: "最外殻電子", d: "電気陰性度" },
                    { id: 3, a: "非金属", b: "金属", c: "価電子", d: "電子親和力" },
                    { id: 4, a: "金属", b: "非金属", c: "最外殻電子", d: "電気陰性度" },
                    { id: 5, a: "金属", b: "非金属", c: "価電子", d: "電子親和力" },
                    { id: 6, a: "金属", b: "非金属", c: "価電子", d: "電気陰性度" },
                  ].map((row) => (
                    <tr key={row.id} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-4 py-2 font-bold text-center border">{row.id}</td>
                      <td className="px-4 py-2 border">{row.a}</td>
                      <td className="px-4 py-2 border">{row.b}</td>
                      <td className="px-4 py-2 border">{row.c}</td>
                      <td className="px-4 py-2 border">{row.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4">(2) (A), (B)に当てはまる元素の組合せとして最も適当なものを、次の①～④のうちから1つ選べ。</p>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
              <div className="border p-2 rounded text-center">① A: Ne, B: Ne</div>
              <div className="border p-2 rounded text-center">② A: Ne, B: Ar</div>
              <div className="border p-2 rounded text-center">③ A: Ar, B: Ne</div>
              <div className="border p-2 rounded text-center">④ A: Ar, B: Ar</div>
            </div>
          </div>
        ),
        answer: (
          <div className="font-bold text-lg">
            (1) ⑥ <br />
            (2) ②
          </div>
        ),
        explanation: (
          <div className="space-y-2">
            <h4 className="font-bold text-blue-600">【解説】</h4>
            <p><strong>(1)</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li><strong>(ア)(イ):</strong> 陽性が強い（陽イオンになりやすい）のは<strong>金属</strong>元素、陰性が強い（陰イオンになりやすい）のは<strong>非金属</strong>元素です。</li>
              <li><strong>(ウ):</strong> 共有結合に関与する電子のことを指します。18族でゼロになるということから、これは<strong>価電子</strong>です（最外殻電子数はHe以外8個ですが、価電子数は0と扱います）。</li>
              <li><strong>(エ):</strong> 共有電子対を引き寄せる強さの尺度は<strong>電気陰性度</strong>です。</li>
              <li>よって、<strong>⑥</strong>が正解です。</li>
            </ul>
            <p className="mt-4"><strong>(2)</strong></p>
            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-700">
              <li>Na (原子番号11) は電子を1個失って Na<Sup>+</Sup> になり、Ne (原子番号10) と同じ電子配置になります。</li>
              <li>Cl (原子番号17) は電子を1個受け取って Cl<Sup>-</Sup> になり、Ar (原子番号18) と同じ電子配置になります。</li>
              <li>よって、<strong>(A) Ne, (B) Ar</strong> の組合せである<strong>②</strong>が正解です。</li>
            </ul>
          </div>
        )
      },
      {
        id: "1-2",
        title: "問2 結晶格子",
        content: (
          <div className="space-y-4">
            <p>下線部(i)について、塩化ナトリウム NaCl の結晶は単位格子をとっている。これに関して、次の設問に答えよ。</p>
            <div className="bg-gray-100 p-4 rounded text-center text-sm">
              <p>※ 図：NaCl型単位格子（Na<Sup>+</Sup>とCl<Sup>-</Sup>が交互に配列）</p>
              <p>単位格子の一辺の長さ：0.56 nm</p>
            </div>
            <p>(1) 単位格子には、NaCl が何組分含まれているか。整数値で答えよ。</p>
            <p>(2) 塩化ナトリウム 1mol の結晶の体積は何 cm<Sup>3</Sup> になるか。5.6<Sup>3</Sup> = 176、1nm = 1.0 × 10<Sup>-7</Sup> cm として有効数字2桁で答えよ。</p>
          </div>
        ),
        answer: (
          <div className="font-bold text-lg">
            (1) 4 組分 <br />
            (2) 26 cm<Sup>3</Sup>
          </div>
        ),
        explanation: (
          <div className="space-y-2">
            <h4 className="font-bold text-blue-600">【解説】</h4>
            <p><strong>(1)</strong> NaCl型単位格子中のイオンの数：</p>
            <ul className="list-disc list-inside ml-2">
              <li>Cl<Sup>-</Sup>（面心立方配置）: 頂点(1/8 × 8) + 面心(1/2 × 6) = <strong>4個</strong></li>
              <li>Na<Sup>+</Sup>（八面体間隙）: 辺の中央(1/4 × 12) + 体心(1 × 1) = <strong>4個</strong></li>
            </ul>
            <p>よって、NaCl のペアとしては <strong>4組</strong> 含まれます。</p>

            <p className="mt-4"><strong>(2)</strong> 比例計算を行います。</p>
            <p>単位格子の体積 <span className="font-mono">V = (0.56 nm)<Sup>3</Sup> = (5.6 × 10<Sup>-8</Sup> cm)<Sup>3</Sup></span></p>
            <p>与えられた <span className="font-mono">5.6<Sup>3</Sup> = 176</span> を用いて、<br/>
            <span className="font-mono">V = 176 × 10<Sup>-24</Sup> = 1.76 × 10<Sup>-22</Sup> cm<Sup>3</Sup></span></p>
            <p>この中に 4組 (4/N<Sub>A</Sub> mol) のNaClが含まれるので、1molあたりの体積 <span className="font-mono italic">x</span> は：</p>
            <div className="bg-gray-50 p-2 rounded font-mono text-sm">
              1.76 × 10<Sup>-22</Sup> : 4 = x : 6.0 × 10<Sup>23</Sup><br/>
              4x = 1.76 × 10<Sup>-22</Sup> × 6.0 × 10<Sup>23</Sup><br/>
              4x = 10.56 × 10 = 105.6<br/>
              x = 26.4
            </div>
            <p>有効数字2桁で <strong>26 cm<Sup>3</Sup></strong> となります。</p>
          </div>
        )
      },
      {
        id: "1-3",
        title: "問3～問5 記述・思考",
        content: (
          <div className="space-y-4">
            <p><strong>問3</strong> 下線部(i)について、イオン結合の強さは静電気力に依存する。臭化カリウム(KBr)、酸化マグネシウム(MgO)、塩化ナトリウム(NaCl) の結晶を融点が高い順に並べ、化学式で答えよ。</p>
            <p><strong>問4</strong> 下線部(i)について、塩化ナトリウムの水溶液では、Na<Sup>+</Sup> は Cl<Sup>-</Sup> と結合せず、水和している。水和した Na<Sup>+</Sup> はどのようなかたちで存在しているか。「静電気力」という語句を用いて、簡潔に説明せよ。</p>
            <p><strong>問5</strong> 下線部(ii)について、塩化水素は共有結合分子だが、電離した水素イオンが水分子と結合して安定に存在する（オキソニウムイオン）。このとき生じた共有結合を特に何というか。</p>
          </div>
        ),
        answer: (
          <div className="space-y-2 font-bold text-lg">
            <p>問3: MgO &gt; NaCl &gt; KBr</p>
            <p className="text-base font-normal">問4: Na<Sup>+</Sup> は、水分子の酸素原子（負に帯電している側）と静電気力で結びつき、取り囲まれている。</p>
            <p>問5: 配位結合</p>
          </div>
        ),
        explanation: (
          <div className="space-y-2">
            <h4 className="font-bold text-blue-600">【解説】</h4>
            <p><strong>問3</strong> クーロン力 <span className="font-serif italic">F</span> ∝ <span className="font-serif italic">q</span><Sub>1</Sub><span className="font-serif italic">q</span><Sub>2</Sub> / <span className="font-serif italic">r</span><Sup>2</Sup> （電荷の積に比例し、距離の2乗に反比例）で考えます。</p>
            <ul className="list-disc list-inside ml-2">
              <li>MgO: 2価のイオン同士 (2×2=4)。イオン半径も小さく距離が近い。→ 最も結合が強い。</li>
              <li>NaCl: 1価のイオン同士 (1×1=1)。</li>
              <li>KBr: 1価のイオン同士。K<Sup>+</Sup>, Br<Sup>-</Sup>はNa<Sup>+</Sup>, Cl<Sup>-</Sup>よりイオン半径が大きく、距離が遠い。→ 結合が弱い。</li>
            </ul>
            <p>よって、<strong>MgO &gt; NaCl &gt; KBr</strong>。</p>

            <p className="mt-4"><strong>問4</strong> 水分子は極性を持ち、酸素原子側が負(δ-)、水素原子側が正(δ+)に帯電しています。陽イオンである Na<Sup>+</Sup> は、水分子の負の側（酸素原子）と静電気的に引き合って囲まれます（水和）。</p>

            <p className="mt-4"><strong>問5</strong> H<Sup>+</Sup> は電子を持たないため、水分子の非共有電子対を一方的に提供されて結合します。これを<strong>配位結合</strong>といいます。</p>
          </div>
        )
      }
    ]
  },
  {
    id: 2,
    title: "酸・塩基と溶液の性質",
    icon: <FlaskConical className="w-6 h-6" />,
    intro: (
      <div className="space-y-4">
        <p>
          <strong>A</strong> 濃度未知の酢酸水溶液 20 mL をコニカルビーカーに取って、0.10 mol/L の水酸化ナトリウム水溶液で滴定したところ、下図のような滴定曲線が得られた。
        </p>
        <div className="bg-gray-50 border p-4 rounded text-center h-48 flex items-center justify-center">
          <div className="text-gray-500 italic">
             [グラフイメージ]<br/>
             縦軸：pH (0～14)<br/>
             横軸：NaOH滴下量 (mL)<br/>
             pH3付近からスタートし、<br/>
             10mL付近でpHジャンプ（中和点 pH約9）<br/>
             その後pH12-13付近で一定
          </div>
        </div>
        <p>
          <strong>B</strong> 純水の沸点は100℃であるが、塩化ナトリウムなどを溶かすと沸点が上がる（沸点上昇）。
        </p>
      </div>
    ),
    questions: [
      {
        id: "2-1",
        title: "A 酢酸の中和滴定",
        content: (
          <div className="space-y-4">
            <p><strong>問1</strong> 酢酸水溶液の濃度は何 mol/L か。有効数字2桁で答えよ。（中和点は 10.0 mL とする）</p>
            <p><strong>問2</strong> 滴定前の酢酸水溶液のpHは 3.0 であった。このとき、酢酸の電離度はいくらか。有効数字2桁で答えよ。</p>
            <p><strong>問3</strong> 次の塩のうち、水溶液が<strong>酸性</strong>を示すものをすべて選び、番号で答えよ。</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
              <span>① NaCl</span>
              <span>② Na<Sub>2</Sub>CO<Sub>3</Sub></span>
              <span>③ NaHCO<Sub>3</Sub></span>
              <span>④ Na<Sub>2</Sub>SO<Sub>4</Sub></span>
              <span>⑤ NaHSO<Sub>4</Sub></span>
              <span>⑥ NH<Sub>4</Sub>Cl</span>
              <span>⑦ CaCl<Sub>2</Sub></span>
              <span>⑧ KNO<Sub>3</Sub></span>
            </div>
            <p><strong>問4</strong> 次の反応式で、下線部①～④の化学種のうち、ブレンステッドの定義で<strong>塩基</strong>としてはたらくものをすべて選び、番号で答えよ。</p>
            <div className="bg-gray-100 p-2 text-center font-mono">
              <span className="border-b-2 border-red-400 mx-1">①</span>CH<Sub>3</Sub>COO<Sup>-</Sup> + <span className="border-b-2 border-red-400 mx-1">②</span>H<Sub>2</Sub>O ⇄ <span className="border-b-2 border-red-400 mx-1">③</span>CH<Sub>3</Sub>COOH + <span className="border-b-2 border-red-400 mx-1">④</span>OH<Sup>-</Sup>
            </div>
          </div>
        ),
        answer: (
          <div className="font-bold">
            問1: 5.0 × 10<Sup>-2</Sup> mol/L <br />
            問2: 2.0 × 10<Sup>-2</Sup> <br />
            問3: ⑤, ⑥ <br />
            問4: ①, ④
          </div>
        ),
        explanation: (
          <div className="space-y-2">
            <h4 className="font-bold text-blue-600">【解説】</h4>
            <p><strong>問1</strong> (酸の価数 × 濃度 × 体積) = (塩基の価数 × 濃度 × 体積) より</p>
            <p className="font-mono ml-4">1 × c × (20/1000) = 1 × 0.10 × (10/1000)</p>
            <p className="font-mono ml-4">20c = 1</p>
            <p className="font-mono ml-4">c = 0.050 = <strong>5.0 × 10<Sup>-2</Sup> mol/L</strong></p>

            <p className="mt-4"><strong>問2</strong> pH = 3.0 より [H<Sup>+</Sup>] = 1.0 × 10<Sup>-3</Sup> mol/L。</p>
            <p>電離度 α = [H<Sup>+</Sup>] / c = (1.0 × 10<Sup>-3</Sup>) / (5.0 × 10<Sup>-2</Sup>) = 1/50 = 0.020 = <strong>2.0 × 10<Sup>-2</Sup></strong></p>

            <p className="mt-4"><strong>問3</strong> 塩の液性判定：</p>
            <ul className="list-disc list-inside ml-2 text-sm">
              <li>強酸＋強塩基→中性 (NaCl, Na<Sub>2</Sub>SO<Sub>4</Sub>, CaCl<Sub>2</Sub>, KNO<Sub>3</Sub>)</li>
              <li>弱酸＋強塩基→塩基性 (Na<Sub>2</Sub>CO<Sub>3</Sub>, NaHCO<Sub>3</Sub>) ※加水分解</li>
              <li>強酸＋弱塩基→<strong>酸性</strong> (⑥ NH<Sub>4</Sub>Cl) ※加水分解</li>
              <li>硫酸水素ナトリウム (⑤ NaHSO<Sub>4</Sub>) は強酸のHが残っている酸性塩で、電離してH<Sup>+</Sup>を出すため<strong>酸性</strong>。</li>
            </ul>

            <p className="mt-4"><strong>問4</strong> ブレンステッドの塩基＝H<Sup>+</Sup>を受け取るもの。</p>
            <ul className="list-disc list-inside ml-2">
              <li>右向き反応: ① CH<Sub>3</Sub>COO<Sup>-</Sup> は H<Sup>+</Sup> を受け取って CH<Sub>3</Sub>COOH になる→<strong>塩基</strong>。</li>
              <li>左向き反応: ④ OH<Sup>-</Sup> は H<Sup>+</Sup> を受け取って H<Sub>2</Sub>O になる→<strong>塩基</strong>。</li>
            </ul>
          </div>
        )
      },
      {
        id: "2-2",
        title: "B 沸点上昇",
        content: (
          <div className="space-y-4">
            <p><strong>問5</strong> 不揮発性物質を溶媒に加えると蒸気圧が下がる現象を何というか。</p>
            <p><strong>問6</strong> 純水 100 g にスクロース 1.0 × 10<Sup>-2</Sup> mol が溶解している水溶液の沸点を測定すると、100.052 ℃であった。水のモル沸点上昇 <span className="italic">K<Sub>b</Sub></span> を、単位も含めて有効数字2桁で答えよ。</p>
            <p><strong>問7</strong> 純水 1.0 kg に塩化カルシウム CaCl<Sub>2</Sub> を溶かし、その水溶液の沸点を測定すると、100.078 ℃であった。溶かした塩化カルシウムは何 g か。有効数字2桁で答えよ。（CaCl<Sub>2</Sub> = 111、完全電離とする）</p>
          </div>
        ),
        answer: (
          <div className="font-bold">
            問5: 蒸気圧降下 <br />
            問6: 0.52 K⋅kg/mol <br />
            問7: 5.6 g
          </div>
        ),
        explanation: (
          <div className="space-y-2">
            <h4 className="font-bold text-blue-600">【解説】</h4>
            <p><strong>問6</strong> 沸点上昇度 Δt = <span className="italic">K<Sub>b</Sub></span> × m（質量モル濃度）</p>
            <p>Δt = 0.052 K</p>
            <p>m = 1.0 × 10<Sup>-2</Sup> mol / 0.100 kg = 0.10 mol/kg</p>
            <p>0.052 = <span className="italic">K<Sub>b</Sub></span> × 0.10  ⇒ <strong><span className="italic">K<Sub>b</Sub></span> = 0.52 K⋅kg/mol</strong></p>

            <p className="mt-4"><strong>問7</strong> CaCl<Sub>2</Sub> → Ca<Sup>2+</Sup> + 2Cl<Sup>-</Sup> なので、粒子数は3倍になる点に注意。</p>
            <p>Δt = 0.078 K</p>
            <p>CaCl<Sub>2</Sub>の物質量を <span className="italic">n</span> mol とすると、質量モル濃度は <span className="italic">n</span> / 1.0 kg。</p>
            <p>粒子の総濃度は 3<span className="italic">n</span> mol/kg。</p>
            <p>0.078 = 0.52 × 3<span className="italic">n</span></p>
            <p>3<span className="italic">n</span> = 0.078 / 0.52 = 0.15</p>
            <p><span className="italic">n</span> = 0.050 mol</p>
            <p>質量 = 0.050 mol × 111 g/mol = 5.55 g</p>
            <p>有効数字2桁で <strong>5.6 g</strong>。</p>
          </div>
        )
      }
    ]
  },
  {
    id: 3,
    title: "酸化還元滴定",
    icon: <Droplets className="w-6 h-6" />,
    intro: (
      <div className="space-y-4">
        <p>実験1: 濃度不明の過マンガン酸カリウム水溶液で、過酸化水素水（希釈済み）を滴定。</p>
        <p>実験2: 分解した過酸化水素水の濃度を求めるため、ヨウ化カリウムと反応させ、遊離したヨウ素をチオ硫酸ナトリウムで滴定（逆滴定）。</p>
      </div>
    ),
    questions: [
      {
        id: "3-1",
        title: "酸化還元の計算",
        content: (
          <div className="space-y-4">
            <p><strong>問1</strong> 実験1で使用した過酸化水素水（3.4%, 密度1.0g/cm<Sup>3</Sup>）の初期モル濃度は何 mol/L か。H<Sub>2</Sub>O<Sub>2</Sub>=34。</p>
            <p><strong>問2</strong> 過マンガン酸カリウム滴定の終点をどう判断するか。「物質名」を含め説明せよ。</p>
            <p><strong>問3</strong> 反応式: <br/><code className="text-xs bg-gray-100 p-1 block my-1">2KMnO<Sub>4</Sub> + 3H<Sub>2</Sub>SO<Sub>4</Sub> + 5H<Sub>2</Sub>O<Sub>2</Sub> → 2MnSO<Sub>4</Sub> + K<Sub>2</Sub>SO<Sub>4</Sub> + 8H<Sub>2</Sub>O + 5O<Sub>2</Sub></code><br/>過酸化水素の半反応式（電子e<Sup>-</Sup>を含む）を書け。</p>
            <p><strong>問4</strong> 過酸化水素は酸化剤にも還元剤にもなる。以下の反応ア～ウでの働きとして正しい組み合わせを選べ。<br/>
            ア：K<Sub>2</Sub>Cr<Sub>2</Sub>O<Sub>7</Sub>と反応して酸素発生<br/>
            イ：KIと反応してI<Sub>2</Sub>生成<br/>
            ウ：MnO<Sub>2</Sub>（触媒）で分解
            </p>
            <p><strong>問5</strong> 実験2の結果（Na<Sub>2</Sub>S<Sub>2</Sub>O<Sub>3</Sub>滴下量16.0mL）から、過酸化水素は何%分解したと考えられるか。問1の値と比較して答えよ。</p>
          </div>
        ),
        answer: (
          <div className="font-bold text-sm md:text-base">
            問1: 1.0 mol/L <br />
            問2: 過マンガン酸カリウムの赤紫色が消えなくなった時点 <br />
            問3: H<Sub>2</Sub>O<Sub>2</Sub> → O<Sub>2</Sub> + 2H<Sup>+</Sup> + 2e<Sup>-</Sup> <br />
            問4: ⑤ (ア:還元剤, イ:酸化剤, ウ:両方) <br />
            問5: 20 %
          </div>
        ),
        explanation: (
          <div className="space-y-2">
            <h4 className="font-bold text-blue-600">【解説】</h4>
            <p><strong>問1</strong> 密度1.0g/cm<Sup>3</Sup>より、1L = 1000g。その中の3.4%がH<Sub>2</Sub>O<Sub>2</Sub>。</p>
            <p>質量: 1000 × 0.034 = 34 g</p>
            <p>物質量: 34 g / 34 g/mol = 1.0 mol</p>
            <p>濃度: <strong>1.0 mol/L</strong></p>

            <p className="mt-4"><strong>問5</strong> 逆滴定の流れ。</p>
            <ol className="list-decimal list-inside ml-2 space-y-1">
              <li>H<Sub>2</Sub>O<Sub>2</Sub> + 2I<Sup>-</Sup> + 2H<Sup>+</Sup> → I<Sub>2</Sub> + 2H<Sub>2</Sub>O (H<Sub>2</Sub>O<Sub>2</Sub> : I<Sub>2</Sub> = 1 : 1)</li>
              <li>I<Sub>2</Sub> + 2S<Sub>2</Sub>O<Sub>3</Sub><Sup>2-</Sup> → 2I<Sup>-</Sup> + S<Sub>4</Sub>O<Sub>6</Sub><Sup>2-</Sup> (I<Sub>2</Sub> : S<Sub>2</Sub>O<Sub>3</Sub><Sup>2-</Sup> = 1 : 2)</li>
            </ol>
            <p>まとめると、H<Sub>2</Sub>O<Sub>2</Sub> : Na<Sub>2</Sub>S<Sub>2</Sub>O<Sub>3</Sub> = 1 : 2。</p>
            <p>希釈後のH<Sub>2</Sub>O<Sub>2</Sub>濃度を <span className="italic">x</span> mol/L とすると（10mL使用）、</p>
            <p><span className="italic">x</span> × (10/1000) × 2 = 0.10 × (16.0/1000)</p>
            <p>20<span className="italic">x</span> = 1.6 ⇒ <span className="italic">x</span> = 0.080 mol/L</p>
            <p>希釈前（10倍）は 0.80 mol/L。</p>
            <p>初期濃度 1.0 mol/L からの減少分は 0.20 mol/L。</p>
            <p>分解率 = 0.20 / 1.0 = 0.20 = <strong>20%</strong></p>
          </div>
        )
      }
    ]
  },
  {
    id: 4,
    title: "気体の性質・蒸気圧",
    icon: <Thermometer className="w-6 h-6" />,
    intro: (
      <div className="space-y-4">
        <p>一端を閉じた断面積 1.0 cm<Sup>2</Sup> のガラス管に水銀を満たして倒立させた（トリチェリの実験）。</p>
        <ul className="list-disc list-inside bg-gray-50 p-4 rounded text-sm">
          <li>大気圧: 760 mmHg (= 1.0 × 10<Sup>5</Sup> Pa)</li>
          <li>温度: 77 ℃ (= 350 K)</li>
          <li>図ア: 水銀柱の高さ 760 mm, 上部空間の長さ 240 mm (1000-760)</li>
          <li>図イ: 水少量を注入後、水銀柱の高さ 460 mm, 上部に水滴あり（気液平衡）</li>
        </ul>
      </div>
    ),
    questions: [
      {
        id: "4-1",
        title: "蒸気圧の計算",
        content: (
          <div className="space-y-4">
            <p><strong>問1</strong> 図アにおいて、ガラス管上部の空間の圧力は何 Pa か。</p>
            <p><strong>問2</strong> 図イのとき（水銀柱 460 mm, 水滴あり）、ガラス管内の水蒸気圧は何 mmHg か。</p>
            <p><strong>問3</strong> 図イのとき、ガラス管上部の水蒸気の物質量は何 mol か。有効数字2桁で答えよ。</p>
            <p><strong>問4</strong> 図イから、温度一定でガラス管を押し下げ、管上端の高さを760mmとした（空間を圧縮）。このとき水銀柱の高さは何 mm か。</p>
            <p><strong>問5</strong> その後、100℃に加熱したところ、水滴は残っていた。このときの水銀柱の高さは何 mm か。（100℃での飽和蒸気圧 = 760 mmHg）</p>
          </div>
        ),
        answer: (
          <div className="font-bold">
            問1: 0 Pa <br />
            問2: 3.0 × 10<Sup>2</Sup> mmHg <br />
            問3: 7.3 × 10<Sup>-4</Sup> mol <br />
            問4: 4.6 × 10<Sup>2</Sup> mm <br />
            問5: 0 mm
          </div>
        ),
        explanation: (
          <div className="space-y-2">
            <h4 className="font-bold text-blue-600">【解説】</h4>
            <p><strong>問1</strong> 大気圧(760)と水銀柱(760)が釣り合っているため、上部は真空（トリチェリの真空）。<strong>0 Pa</strong>。</p>

            <p className="mt-4"><strong>問2</strong> 大気圧 = 水銀柱の圧力 + 水蒸気圧 <br/>
            760 = 460 + <span className="italic">P</span><Sub>H2O</Sub> <br/>
            <span className="italic">P</span><Sub>H2O</Sub> = <strong>300 mmHg</strong></p>

            <p className="mt-4"><strong>問3</strong> 気体の状態方程式 <span className="italic">PV = nRT</span> を使う。</p>
            <ul className="list-disc list-inside text-sm ml-2">
              <li>P = (300/760) × 1.0 × 10<Sup>5</Sup> Pa</li>
              <li>V = (1000 - 460) mm × 1.0 cm<Sup>2</Sup> = 54 cm<Sup>3</Sup> = 0.054 L</li>
              <li>T = 77 + 273 = 350 K</li>
            </ul>
            <p className="text-sm bg-gray-100 p-2 rounded overflow-x-auto">
              n = PV / RT <br/>
              = {`{ (300/760) × 10^5 × 0.054 }`} / {`{ 8.3 × 10^3 × 350 }`} <br/>
              ≈ 7.33 × 10<Sup>-4</Sup>
            </p>
            <p>答え: <strong>7.3 × 10<Sup>-4</Sup> mol</strong></p>

            <p className="mt-4"><strong>問4</strong> 水滴が残っている（気液平衡）限り、温度一定なら蒸気圧は一定（300 mmHg）。<br/>
            水銀柱の高さ = 大気圧 - 蒸気圧 = 760 - 300 = <strong>460 mm</strong>。<br/>
            （管を下げても、水蒸気が凝縮して液体になるだけで、圧力バランスは変わらない）</p>

            <p className="mt-4"><strong>問5</strong> 100℃での水の飽和蒸気圧は 760 mmHg（大気圧と同じ）。<br/>
            水銀柱の高さ = 大気圧 - 蒸気圧 = 760 - 760 = <strong>0 mm</strong>。<br/>
            （管内はすべて水蒸気の圧力で満たされ、水銀面が容器の液面と同じ高さまで下がる）</p>
          </div>
        )
      }
    ]
  }
];

const App = () => {
  const [activeSectionId, setActiveSectionId] = useState<number>(1);
  const [openAnswers, setOpenAnswers] = useState<Record<string, boolean>>({});

  const toggleAnswer = (questionId: string) => {
    setOpenAnswers(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const activeSection = sections.find(s => s.id === activeSectionId);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <BookOpen className="w-8 h-8" />
            <div>
              <h1 className="text-xl md:text-2xl font-bold tracking-tight">2022 化学 アドバンスト模試</h1>
              <p className="text-xs md:text-sm text-blue-200">問題 & 解答・解説デジタルワークブック</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center md:justify-start">
          {sections.map(section => (
            <button
              key={section.id}
              onClick={() => setActiveSectionId(section.id)}
              className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 shadow-sm
                ${activeSectionId === section.id 
                  ? 'bg-blue-600 text-white shadow-md ring-2 ring-blue-300 ring-offset-1' 
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'}`}
            >
              {section.icon}
              <span className="font-bold">第{section.id}問</span>
            </button>
          ))}
        </div>

        {/* Active Section Content */}
        {activeSection && (
          <div className="animate-fade-in">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center border-b pb-4">
                <span className="bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm mr-3">第{activeSection.id}問</span>
                {activeSection.title}
              </h2>
              {activeSection.intro && (
                <div className="mb-6 bg-blue-50 p-5 rounded-lg border border-blue-100 text-gray-700">
                  {activeSection.intro}
                </div>
              )}
            </div>

            <div className="space-y-6">
              {activeSection.questions.map((q, idx) => (
                <div key={q.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                  {/* Question Header */}
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-100 flex justify-between items-center">
                    <h3 className="font-bold text-lg text-gray-800">{q.title}</h3>
                  </div>
                  
                  {/* Question Body */}
                  <div className="p-6">
                    <div className="text-gray-800 leading-relaxed mb-6">
                      {q.content}
                    </div>

                    {/* Interaction Area */}
                    <div className="mt-8 border-t pt-6">
                      <button
                        onClick={() => toggleAnswer(q.id)}
                        className={`flex items-center justify-center w-full md:w-auto px-6 py-3 rounded-lg font-bold transition-colors duration-200
                          ${openAnswers[q.id] 
                            ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' 
                            : 'bg-blue-600 text-white hover:bg-blue-700 shadow-md'}`}
                      >
                        {openAnswers[q.id] ? (
                          <>
                            <ChevronUp className="w-5 h-5 mr-2" />
                            解答・解説を閉じる
                          </>
                        ) : (
                          <>
                            <HelpCircle className="w-5 h-5 mr-2" />
                            解答・解説を見る
                          </>
                        )}
                      </button>

                      {/* Answer & Explanation (Accordion) */}
                      {openAnswers[q.id] && (
                        <div className="mt-6 bg-green-50 rounded-lg border border-green-100 overflow-hidden animate-slide-down">
                          <div className="p-6 border-b border-green-100 bg-green-100/50">
                            <div className="flex items-start">
                              <CheckCircle className="w-6 h-6 text-green-600 mr-3 mt-1 flex-shrink-0" />
                              <div>
                                <h4 className="font-bold text-green-800 mb-2">【解答】</h4>
                                <div className="text-green-900">{q.answer}</div>
                              </div>
                            </div>
                          </div>
                          <div className="p-6 bg-white text-gray-700">
                            {q.explanation}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-gray-400 py-8 mt-12 text-center">
        <p className="text-sm">Based on 2022 Advanced Chemistry Mock Exam</p>
      </footer>
    </div>
  );
};

export default App;
