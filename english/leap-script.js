const fullQuizData = [
            { id: 1561, term: "disrupt", definition: "[他] （活動の進行など）をかき乱す", sentences: [
                { jp: "鉄道のダイヤを乱す", en_blanked: "( ) the train schedule", answer: "disrupt" }
            ]},
            { id: 1562, term: "interfere", definition: "[自] （with ～）（～を）邪魔する，干渉する", sentences: [
                { jp: "その音楽は私の勉強の邪魔になった。", en_blanked: "The music ( ) with my studies.", answer: "interfered" }
            ]},
            { id: 1563, term: "confront", definition: "[他] ①（困難などが人）に立ちふさがる ②（人が困難など）に直面する，立ち向かう", sentences: [
                { jp: "私たちは困難に直面していた。", en_blanked: "Some difficulties ( ) us.", answer: "confronted" },
                { jp: "試練に直面する", en_blanked: "be ( ) with hardships", answer: "confronted" }
            ]},
            { id: 1564, term: "hinder", definition: "[他] ～を妨げる", sentences: [
                { jp: "経済成長を妨げる", en_blanked: "( ) economic growth", answer: "hinder" }
            ]},
            { id: 1565, term: "explode", definition: "[自] ①爆発する [他] ②爆発的に増加する", sentences: [
                { jp: "倉庫で爆弾が爆発した。", en_blanked: "A bomb ( ) in the warehouse.", answer: "exploded" },
                { jp: "この都市の人口は爆発的に増えた。", en_blanked: "This town's population ( ).", answer: "exploded" }
            ]},
            { id: 1566, term: "collide", definition: "[自] （with ～）（～と）衝突する", sentences: [
                { jp: "バスがトラックと（正面）衝突した。", en_blanked: "A bus ( ) (head-on) with a truck.", answer: "collided" }
            ]},
            { id: 1567, term: "nephew", definition: "[名] 甥", sentences: [
                { jp: "甥にお年玉として5,000円をあげた。", en_blanked: "I gave my ( ) 5,000 yen as a New Year's present.", answer: "nephew" }
            ]},
            { id: 1568, term: "spouse", definition: "[名] 配偶者", sentences: [
                { jp: "従業員とその配偶者", en_blanked: "the employees and their ( )", answer: "spouses" }
            ]},
            { id: 1569, term: "heir", definition: "[名] 相続人，後継者", sentences: [
                { jp: "王位の継承者", en_blanked: "the ( ) to the throne", answer: "heir" }
            ]},
            { id: 1570, term: "folk", definition: "[名] ①民族 ②人々", sentences: [
                { jp: "民話（民族固有の説話）", en_blanked: "a ( ) tale", answer: "folk" },
                { jp: "「故郷の人々」（フォスター作詞作曲）", en_blanked: "'Old ( ) at Home'", answer: "Folks" }
            ]},
            { id: 1571, term: "peer", definition: "[名] ①（－s）同等の人，同輩 [自] ②（よく見えなくて）じっと見る", sentences: [
                { jp: "同等の者同士で集まると気が楽だ。", en_blanked: "It is easy to relax among your ( ).", answer: "peers" },
                { jp: "闇に目を凝らす", en_blanked: "( ) into the darkness", answer: "peer" }
            ]},
            { id: 1572, term: "proceed", definition: "[自] ①（順を追って）進む ②（to do）（さらに続けて）～する", sentences: [
                { jp: "まず、3番ゲートへお進みください。", en_blanked: "First, please ( ) to Gate 3.", answer: "proceed" },
                { jp: "彼は上着を脱ぎ、さらに靴ひもをゆるめた。", en_blanked: "He took off his jacket and ( ) to untie his shoelaces.", answer: "proceeded" }
            ]},
            { id: 1573, term: "navigate", definition: "[他] ①（旅などで）進路を決める [自] ②～を航行する，誘導する", sentences: [
                { jp: "星によって進路を決める", en_blanked: "( ) by the stars", answer: "navigate" },
                { jp: "太平洋を航行する", en_blanked: "( ) the Pacific Ocean", answer: "navigate" }
            ]},
            { id: 1574, term: "roam", definition: "[自] 歩き回る", sentences: [
                { jp: "世界を歩き回る", en_blanked: "( ) around the world", answer: "roam" }
            ]},
            { id: 1575, term: "flee", definition: "[自] 逃亡する", sentences: [
                { jp: "隣国へ逃亡する", en_blanked: "( ) to neighboring countries", answer: "flee" }
            ]},
            { id: 1576, term: "retreat", definition: "[自] ①退く [名] ②撤退，退却", sentences: [
                { jp: "彼は私を見ると部屋に入っていった（部屋の中に退いた）。", en_blanked: "When he saw me, he ( ) into the room.", answer: "retreated" },
                { jp: "ナポレオンのモスクワからの撤退", en_blanked: "Napoleon's ( ) from Moscow", answer: "retreat" }
            ]},
            { id: 1577, term: "crawl", definition: "[自] 這って進む，這うように進む", sentences: [
                { jp: "午前4時にベッドに這うように入る", en_blanked: "( ) into bed at four in the morning", answer: "crawl" }
            ]},
            { id: 1578, term: "drift", definition: "[自] 漂う", sentences: [
                { jp: "波に漂う船", en_blanked: "a boat ( ) on the waves", answer: "drifting" }
            ]},
            { id: 1579, term: "alter", definition: "[他] ～を変える", sentences: [
                { jp: "これによって事実が変わる（事実を変える）わけではない。", en_blanked: "This does not ( ) the fact.", answer: "alter" }
            ]},
            { id: 1580, term: "convert", definition: "[他] ①（A into B）（A）を（Bに）転換する [自] ②〜を改宗させる", sentences: [
                { jp: "地下室を事務室にする（転換する）", en_blanked: "( ) the basement into an office", answer: "convert" },
                { jp: "キリスト教へ改宗する（改宗させられる）", en_blanked: "be ( ) to Christianity", answer: "converted" }
            ]},
            { id: 1581, term: "shrink", definition: "[自] ①縮む ②（数量が）減る [他] ③～を減少させる，減らす", sentences: [
                { jp: "このシャツは縮んだ。", en_blanked: "This shirt has ( ).", answer: "shrunk" },
                { jp: "少子化（減っている出生率）", en_blanked: "the ( ) birthrate", answer: "shrinking" },
                { jp: "赤字を減少させる", en_blanked: "( ) the deficit", answer: "shrink" }
            ]},
            { id: 1582, term: "wither", definition: "[自] しおれる，しぼむ", sentences: [
                { jp: "暑さで花がしおれた。", en_blanked: "The flower ( ) in the heat.", answer: "withered" }
            ]},
            { id: 1583, term: "transition", definition: "[名] 移り変わり，推移", sentences: [
                { jp: "季節の移り変わり", en_blanked: "seasonal ( )", answer: "transitions" }
            ]},
            { id: 1584, term: "distortion", definition: "[名] 歪めること", sentences: [
                { jp: "事実を歪めること", en_blanked: "a ( ) of the facts", answer: "distortion" }
            ]},
            { id: 1585, term: "enhance", definition: "[他] ～を向上させる", sentences: [
                { jp: "美意識を磨く（向上させる）", en_blanked: "( ) my aesthetic sense", answer: "enhance" }
            ]},
            { id: 1586, term: "reinforce", definition: "[他] ～を補強する", sentences: [
                { jp: "当て布で上着のひじを補強する", en_blanked: "( ) the elbows of a jacket with patches", answer: "reinforce" }
            ]},
            { id: 1587, term: "foster", definition: "[他] ①（才能など）を育成する ②～の里親になる[形] ③里親の", sentences: [
                { jp: "地域内の良い関係を育てる", en_blanked: "( ) good community relationships", answer: "foster" },
                { jp: "孤児の里親になる", en_blanked: "( ) an orphan", answer: "foster" },
                { jp: "里親", en_blanked: "a ( ) parent", answer: "foster" }
            ]},
            { id: 1588, term: "breakdown", definition: "[名] ①崩壊 ②故障 ③衰弱", sentences: [
                { jp: "家庭の崩壊を経験する", en_blanked: "experience a family ( )", answer: "breakdown" },
                { jp: "システムの故障", en_blanked: "a system ( )", answer: "breakdown" },
                { jp: "神経衰弱（ノイローゼ）を患う", en_blanked: "suffer a nervous ( )", answer: "breakdown" }
            ]},
            { id: 1589, term: "collapse", definition: "[自] ①崩壊する，倒れる [名] ②崩壊，倒れること", sentences: [
                { jp: "雪の重みで崩壊する", en_blanked: "( ) under the weight of the snow", answer: "collapse" },
                { jp: "ベルリンの壁の崩壊", en_blanked: "the ( ) of the Berlin Wall", answer: "collapse" }
            ]},
            { id: 1590, term: "render", definition: "[他] ①（SVOC）（O）を（C）にする ②（援助など）を与える", sentences: [
                { jp: "彼の発言に彼女は言葉を失った（彼女を話せない状態にした）。", en_blanked: "His remark ( ) her speechless.", answer: "rendered" },
                { jp: "援助する（援助を与える）", en_blanked: "( ) assistance", answer: "render" }
            ]},
            { id: 1591, term: "impair", definition: "[他] （人間が機能など）を低下させる，損なう", sentences: [
                { jp: "アルコールは思考力を低下させる。", en_blanked: "Alcohol ( ) your ability to think.", answer: "impairs" }
            ]},
            { id: 1592, term: "deteriorate", definition: "[自] 悪化する", sentences: [
                { jp: "水質が急速に悪化している。", en_blanked: "Water quality is ( ) rapidly.", answer: "deteriorating" }
            ]},
            { id: 1593, term: "undermine", definition: "[他] ～を弱める，揺るがす", sentences: [
                { jp: "日本の社会福祉制度を揺るがす", en_blanked: "( ) Japan's social welfare system", answer: "undermine" }
            ]},
            { id: 1594, term: "tackle", definition: "[他] ～に取り組む", sentences: [
                { jp: "失業問題に取り組む", en_blanked: "( ) the unemployment problem", answer: "tackle" }
            ]},
            { id: 1595, term: "disposal", definition: "[名] ①（at one’s -）〜を自由にする ②処分，廃棄", sentences: [
                { jp: "大金が自由に使える", en_blanked: "have a lot of money at my ( )", answer: "disposal" },
                { jp: "廃棄物処理", en_blanked: "waste ( )", answer: "disposal" }
            ]},
            { id: 1596, term: "confine", definition: "[他] ①～を閉じ込める ②（活動など）を制限する", sentences: [
                { jp: "私たちは小部屋に閉じ込められた。", en_blanked: "We were ( ) to a small room.", answer: "confined" },
                { jp: "事故の後、車いす（の生活）を余儀なくされる", en_blanked: "be ( ) to a wheelchair after the accident", answer: "confined" }
            ]},
            { id: 1597, term: "designate", definition: "[他] （通例，受け身で）〜を指定する", sentences: [
                { jp: "指定された喫煙場所", en_blanked: "a ( ) smoking area", answer: "designated" }
            ]},
            { id: 1598, term: "regulate", definition: "[他] ①（主に規則によって）～を規制する ②（機能など）を調整する", sentences: [
                { jp: "大気汚染を規制する", en_blanked: "( ) air pollution", answer: "regulate" },
                { jp: "代謝を調整するホルモン", en_blanked: "a hormone that ( ) metabolism", answer: "regulates" }
            ]},
            { id: 1599, term: "prohibit", definition: "[他] ～を禁じる", sentences: [
                { jp: "私たちは副業を禁止されている。", en_blanked: "We are ( ) from holding second jobs.", answer: "prohibited" }
            ]},
            { id: 1600, term: "refrain", definition: "[自] （from ～）（～を）控える", sentences: [
                { jp: "たばこはお控えください。", en_blanked: "Please ( ) from smoking.", answer: "refrain" }
            ]},
            { id: 1601, term: "curb", definition: "[他] ①～を抑制する [名] ②縁石", sentences: [
                { jp: "病気の蔓延を抑制する", en_blanked: "( ) the spread of the disease", answer: "curb" },
                { jp: "縁石に乗り上げる", en_blanked: "drive over the ( )", answer: "curb" }
            ]},
            { id: 1602, term: "restrain", definition: "[他] ～を抑制する", sentences: [
                { jp: "やっとのことで怒りを抑える", en_blanked: "( ) my anger with difficulty", answer: "restrain" }
            ]},
            { id: 1603, term: "halt", definition: "[他] ①～を止める [自] ②止まる [名] ③停止", sentences: [
                { jp: "捕鯨を止める", en_blanked: "( ) the hunting of whales", answer: "halt" },
                { jp: "「止まれ！」と兵士は言った。", en_blanked: "\"( )!\" said the soldier.", answer: "Halt" },
                { jp: "列車が（突然）停止した。", en_blanked: "The train came to a ( ).", answer: "halt" }
            ]},
            { id: 1604, term: "animate", definition: "[他] ①～を活気づける ②～をアニメ化する", sentences: [
                { jp: "議論を活気づける", en_blanked: "( ) the discussion", answer: "animate" },
                { jp: "ディズニーのアニメ映画（アニメ化された映画）", en_blanked: "an ( ) Disney film", answer: "animated" }
            ]},
            { id: 1605, term: "spur", definition: "[他] ①～を駆り立てる，促す [名] ②拍車，刺激，動機", sentences: [
                { jp: "経済成長を促す", en_blanked: "( ) economic growth", answer: "spur" },
                { jp: "その場の勢いで", en_blanked: "on the ( ) of the moment", answer: "spur" }
            ]},
            { id: 1606, term: "urge", definition: "[他] ①～をせき立てる，～に強く勧める [名] ②（何かがしたい）衝動", sentences: [
                { jp: "彼に休むよう強く勧める", en_blanked: "( ) him to rest", answer: "urge" },
                { jp: "魚が食べたくて仕方ない（魚を食べたい衝動を持つ）", en_blanked: "have an ( ) to eat some fish", answer: "urge" }
            ]},
            { id: 1607, term: "lure", definition: "[他] ①～を誘い込む [名] ②魅力，誘惑", sentences: [
                { jp: "シカを罠に誘い込む", en_blanked: "( ) a deer into a trap", answer: "lure" },
                { jp: "ハワイの魅力", en_blanked: "the ( ) of Hawaii", answer: "lure" }
            ]},
            { id: 1608, term: "stimulate", definition: "[他] ～を刺激する", sentences: [
                { jp: "光に刺激されて植物は育つ（光が植物の成長を刺激する）。", en_blanked: "Light ( ) plant growth.", answer: "stimulates" }
            ]},
            { id: 1609, term: "compel", definition: "[他] （A to do）（A）に（～することを）強制する", sentences: [
                { jp: "スキャンダルのため辞職せざるを得ない（辞職を強いられている）と感じる", en_blanked: "feel ( ) to resign because of the scandal.", answer: "compelled" }
            ]},
            { id: 1610, term: "dictate", definition: "[他] ①～を書き取らせる ②～を命令する，規定する", sentences: [
                { jp: "秘書にメモを書き取らせる", en_blanked: "( ) a memo to my secretary", answer: "dictate" },
                { jp: "伝統的に中国人は新年を盛大に祝うことと決まっている（伝統が規定する）。", en_blanked: "Tradition ( ) that Chinese people celebrate the New Year lavishly.", answer: "dictates" }
            ]},
            { id: 1611, term: "blur", definition: "[他] ①～をぼやかす [自] ②ぼやける", sentences: [
                { jp: "涙で視界がぼやけた（視界をぼやかした）。", en_blanked: "Tears ( ) my vision.", answer: "blurred" },
                { jp: "視界がぼやけた。", en_blanked: "My vision has ( ).", answer: "blurred" }
            ]},
            { id: 1612, term: "divert", definition: "[他] ①（川など）の方向を変える ②（注意など）をそらす", sentences: [
                { jp: "川の流れ（の進路）を変える", en_blanked: "( ) the course of a stream", answer: "divert" },
                { jp: "彼の注意をそらす", en_blanked: "( ) his attention", answer: "divert" }
            ]},
            { id: 1613, term: "reverse", definition: "[他] ①～を逆転する，覆す [名] ②逆 [形] ③逆の", sentences: [
                { jp: "その決定を覆す", en_blanked: "( ) the decision", answer: "reverse" },
                { jp: "その逆が正しい。", en_blanked: "The ( ) is the case.", answer: "reverse" },
                { jp: "逆の順番で", en_blanked: "in ( ) order", answer: "reverse" }
            ]},
            { id: 1614, term: "supplement", definition: "[他] ①（栄養，収入など）を補う [名] ②補助，栄養補助食品 [名] ③付録", sentences: [
                { jp: "アルバイトをして収入を補う", en_blanked: "( ) my salary by working part-time", answer: "supplement" },
                { jp: "ビタミンの栄養補助食品をとる", en_blanked: "take a vitamin ( )", answer: "supplement" },
                { jp: "雑誌の付録", en_blanked: "a magazine ( )", answer: "supplement" }
            ]},
            { id: 1615, term: "pose", definition: "[他] ～をもたらす", sentences: [
                { jp: "汚染が魚に脅威をもたらす。", en_blanked: "Pollution ( ) a threat to fish.", answer: "poses" }
            ]},
            { id: 1616, term: "stroll", definition: "[自] 散策する", sentences: [
                { jp: "土手を散策する", en_blanked: "( ) along the riverbank", answer: "stroll" }
            ]},
            { id: 1617, term: "shrug", definition: "[他] ①（肩）をすくめる [自] ②肩をすくめる", sentences: [
                { jp: "肩をすくめる", en_blanked: "( ) my shoulders", answer: "shrug" },
                { jp: "肩をすくめて歩き去る", en_blanked: "( ) and walk away", answer: "shrug" }
            ]},
            { id: 1618, term: "sniff", definition: "[自] ①（くんくん）臭いをかぐ ②（かぜや泣いて）鼻をすする", sentences: [
                { jp: "イヌが敷物の匂いをくんくんかいでいる。", en_blanked: "The dog is ( ) at the rug.", answer: "sniffing" },
                { jp: "鼻をすすり、くしゃみをする", en_blanked: "( ) and sneeze", answer: "sniff" }
            ]},
            { id: 1619, term: "embrace", definition: "[他] ①～を抱擁する ②（思想など）を受け入れる", sentences: [
                { jp: "彼の娘を抱擁する", en_blanked: "( ) his daughter", answer: "embrace" },
                { jp: "さまざまな価値観を受け入れる", en_blanked: "( ) many different values", answer: "embrace" }
            ]},
            { id: 1620, term: "betray", definition: "[他] ①～を裏切る ②～を漏らす，（うっかり）さらけ出す", sentences: [
                { jp: "彼女の親友を裏切る", en_blanked: "( ) her close friend", answer: "betray" },
                { jp: "彼女は声で緊張していることがばれた（声が緊張をさらけ出した）。", en_blanked: "Her voice ( ) her nervousness.", answer: "betrayed" }
            ]},
            { id: 1621, term: "deceive", definition: "[他] ～をだます", sentences: [
                { jp: "私はだまされて、キャシーは女性だと信じていた。", en_blanked: "I was ( ) into believing that Kathy was a woman.", answer: "deceived" }
            ]},
            { id: 1622, term: "bully", definition: "[他] ①～をいじめる [名] ②いじめっ子", sentences: [
                { jp: "幼い子どもたちをいじめるな。", en_blanked: "Don't ( ) small children.", answer: "bully" },
                { jp: "彼は高校時代、いじめっ子だった。", en_blanked: "He was a ( ) in high school.", answer: "bully" }
            ]},
            { id: 1623, term: "squeeze", definition: "[他] ①（果汁など）を搾る ②（手、指で）～を強く押す", sentences: [
                { jp: "オレンジからジュースを搾る", en_blanked: "( ) juice from an orange", answer: "squeeze" },
                { jp: "列車内に人々を押し込む", en_blanked: "( ) people into a train", answer: "squeeze" }
            ]},
            { id: 1624, term: "insert", definition: "[他] ①～を差し込む ②（語句など）を書き込む", sentences: [
                { jp: "自動改札機に切符を入れる", en_blanked: "( ) a ticket into an automatic ticket gate", answer: "insert" },
                { jp: "空欄にコメントを書き込む", en_blanked: "( ) my comments in the space", answer: "insert" }
            ]},
            { id: 1625, term: "detach", definition: "[他] （A from B）（A）を（Bから）切り離す", sentences: [
                { jp: "上着からフードを取り外す", en_blanked: "( ) the hood from a jacket", answer: "detach" }
            ]},
            { id: 1626, term: "withdraw", definition: "[他] ①～を引っ込める②（預金など）を引き出す [自] ③退く", sentences: [
                { jp: "市場から製品を回収する", en_blanked: "( ) a product from the market", answer: "withdraw" },
                { jp: "ATMから300ドルを引き出す", en_blanked: "( ) $300 from an ATM", answer: "withdraw" },
                { jp: "戦闘地帯から撤退する", en_blanked: "( ) from the war zone", answer: "withdraw" }
            ]},
            { id: 1627, term: "withstand", definition: "[他] ～に耐える", sentences: [
                { jp: "大地震に耐えられる建物", en_blanked: "a building that can ( ) major earthquakes", answer: "withstand" }
            ]},
            { id: 1628, term: "exert", definition: "[他] （力、影響力など）を働かせる", sentences: [
                { jp: "強いリーダーシップを発揮する", en_blanked: "( ) strong leadership", answer: "exert" }
            ]},
            { id: 1629, term: "compile", definition: "[他] ～をまとめる，編集する", sentences: [
                { jp: "報告書のためにデータをまとめる", en_blanked: "( ) data for a report", answer: "compile" }
            ]},
            { id: 1630, term: "browse", definition: "[自] ①拾い読みする [他] ②～を拾い読みする", sentences: [
                { jp: "写真にざっと目を通す", en_blanked: "( ) through the photographs", answer: "browse" },
                { jp: "インターネットを閲覧する", en_blanked: "( ) the internet", answer: "browse" }
            ]},
            { id: 1631, term: "manipulate", definition: "[他] ～を操作する", sentences: [
                { jp: "世論を操作する", en_blanked: "( ) public opinion", answer: "manipulate" }
            ]},
            { id: 1632, term: "implement", definition: "[他] ①（契約、計画など）を実行する [名] ②（単純な）道具", sentences: [
                { jp: "政治改革を実行する", en_blanked: "( ) political reform", answer: "implement" },
                { jp: "農機具", en_blanked: "farming ( )", answer: "implements" }
            ]},
            { id: 1633, term: "execute", definition: "[他] ①～を遂行する，実行する ②～を処刑する", sentences: [
                { jp: "月曜日からその計画を実行する", en_blanked: "( ) the plan from Monday", answer: "execute" },
                { jp: "その殺人犯を処刑する", en_blanked: "( ) the murderer", answer: "execute" }
            ]},
            { id: 1634, term: "host", definition: "[他] ①（大会など）を主催する [名] ②（a - of）多くの③（客を接待する）主人(※女性を含む)，主催者，開催地", sentences: [
                { jp: "オリンピックを主催する", en_blanked: "( ) the Olympic Games", answer: "host" },
                { jp: "多くの困難", en_blanked: "a ( ) of difficulties", answer: "host" },
                { jp: "主催者が玄関で私たちに挨拶した。", en_blanked: "Our ( ) greeted us at the door.", answer: "host" }
            ]},
            { id: 1635, term: "mount", definition: "[他] ①～を据え付ける②（馬、自転車）に乗る [自] ③増加する", sentences: [
                { jp: "ドライブレコーダーを搭載した車", en_blanked: "a car ( ) with a drive recorder", answer: "mounted" },
                { jp: "馬に乗る", en_blanked: "( ) a horse", answer: "mount" },
                { jp: "中東で緊張が高まっている。", en_blanked: "Tension is ( ) in the Middle East.", answer: "mounting" }
            ]},
            { id: 1636, term: "discharge", definition: "[他] ①～を排出する ②（職務、任地などから）～を解放する", sentences: [
                { jp: "黒い煙を出す", en_blanked: "( ) black smoke", answer: "discharge" },
                { jp: "海軍を除隊になる（海軍から解放される）", en_blanked: "be ( ) from the navy", answer: "discharged" }
            ]},
            { id: 1637, term: "drain", definition: "[他] ①～の水を抜く ②～の水分を切る [自] ③（液体が）流出する，乾く", sentences: [
                { jp: "風呂の水を抜く", en_blanked: "( ) the bathtub", answer: "drain" },
                { jp: "ゆでたスパゲッティの水分を切る", en_blanked: "( ) the cooked spaghetti", answer: "drain" },
                { jp: "この運動場は水はけがよくない。", en_blanked: "This playground does not ( ) well.", answer: "drain" }
            ]},
            { id: 1638, term: "soak", definition: "[他] ①～を浸す [自] ②（up）（日光、考えなど）を吸収する", sentences: [
                { jp: "雨でびしょ濡れになる", en_blanked: "get ( ) in the rain", answer: "soaked" },
                { jp: "新しい考えを吸収する", en_blanked: "( ) up new ideas", answer: "soak" }
            ]},
            { id: 1639, term: "suspend", definition: "[他] ①～をつるす ②～を中断する [自] ③〜を停職（停学）にする", sentences: [
                { jp: "天井からつるされているランプ", en_blanked: "a lamp ( ) from the ceiling", answer: "suspended" },
                { jp: "フェリーの運行を中断する", en_blanked: "( ) the ferry service", answer: "suspend" },
                { jp: "停学になる（停学にさせられる）", en_blanked: "be ( ) from school", answer: "suspended" }
            ]},
            { id: 1640, term: "extract", definition: "[他] ①～を取り出す，抽出する [名] ②抽出したもの，抜粋", sentences: [
                { jp: "オリーブの実から油を抽出する", en_blanked: "( ) oil from olives", answer: "extract" },
                { jp: "その小説の抜粋", en_blanked: "( ) from the novel", answer: "extracts" }
            ]},
            { id: 1641, term: "summon", definition: "[他] ①～を呼ぶ，召喚する ，喚問する②（勇気など）を奮い立たせる", sentences: [
                { jp: "その大使は即座に本国に召喚された。", en_blanked: "The ambassador was immediately ( ) home.", answer: "summoned" },
                { jp: "全力を出す", en_blanked: "( ) (up) all my strength", answer: "summon" }
            ]},
            { id: 1642, term: "embark", definition: "[自] （on ～）（～に）着手する，乗り込む", sentences: [
                { jp: "巨大なプロジェクトに着手する", en_blanked: "( ) on a huge project", answer: "embark" }
            ]},
            { id: 1643, term: "thrust", definition: "[他] ①～を強く押しつける ②（刀物で）～を突き刺す", sentences: [
                { jp: "かばんに札束を詰め込む", en_blanked: "( ) piles of banknotes into the bag", answer: "thrust" },
                { jp: "牛肉にフォークを突き刺す", en_blanked: "( ) a fork into the piece of beef", answer: "thrust" }
            ]},
            { id: 1644, term: "penetrate", definition: "[他] ①～に入り込む ②～を貫通する [自] ③貫通する，入る", sentences: [
                { jp: "新たな市場に入り込む", en_blanked: "( ) new markets", answer: "penetrate" },
                { jp: "弾丸が彼の足を貫通した。", en_blanked: "The bullet ( ) his leg.", answer: "penetrated" },
                { jp: "地中深くに入り込む", en_blanked: "( ) deep into the ground", answer: "penetrate" }
            ]},
            { id: 1645, term: "intrude", definition: "[自] （on ～）（～に）立ち入る", sentences: [
                { jp: "彼女のプライバシーに立ち入るな。", en_blanked: "Don't ( ) on her privacy.", answer: "intrude" }
            ]},
            { id: 1646, term: "evade", definition: "[他] ～を逃れる", sentences: [
                { jp: "税金を逃れる", en_blanked: "( ) taxes", answer: "evade" }
            ]},
            { id: 1647, term: "utilize", definition: "[他] ～を利用する", sentences: [
                { jp: "太陽エネルギーはさまざまな目的で利用できる（利用され得る）。", en_blanked: "Solar energy can be ( ) for various purposes.", answer: "utilized" }
            ]},
            { id: 1648, term: "spin", definition: "[自] ①ぐるぐる回る [他] ②～を回す ③～を紡ぐ", sentences: [
                { jp: "熱で頭がくらくらする。", en_blanked: "My head is ( ) with a fever.", answer: "spinning" },
                { jp: "こまを回す", en_blanked: "( ) a top", answer: "spin" },
                { jp: "綿を紡いで糸にする", en_blanked: "( ) cotton into threads", answer: "spin" }
            ]},
            { id: 1649, term: "plunge", definition: "[自] ①（into ～）（～に）突っ込む [他] ②（A into B）（A）を（Bに）突っ込む", sentences: [
                { jp: "そのヘリコプターは海に突っ込んだ。", en_blanked: "The helicopter ( ) into the ocean.", answer: "plunged" },
                { jp: "水に手をつっこむ", en_blanked: "( ) my hand into the water", answer: "plunge" }
            ]},
            { id: 1650, term: "rattle", definition: "[自] ①ガタガタ鳴る [他] ②～を鳴らす [名] ③ガラガラ", sentences: [
                { jp: "ガタガタ音がする古いバス", en_blanked: "a ( ) old bus", answer: "rattling" },
                { jp: "（チャリンチャリンと）小銭を鳴らす", en_blanked: "( ) some change", answer: "rattle" },
                { jp: "赤ん坊のガラガラ", en_blanked: "a baby's ( )", answer: "rattle" }
            ]},
            { id: 1651, term: "vanish", definition: "[自] 消える", sentences: [
                { jp: "そのマジシャンは跡形もなく消えた。", en_blanked: "The magician ( ) without trace.", answer: "vanished" }
            ]},
            { id: 1652, term: "cease", definition: "[他] （to do / doing）～しなくなる", sentences: [
                { jp: "東ドイツは1990年に存在しなくなった", en_blanked: "East Germany ( ) to exist in 1990.", answer: "ceased" }
            ]},
            { id: 1653, term: "haste", definition: "[名] 急ぐこと（不可算）", sentences: [
                { jp: "慌てる（急ぐ）と損をする。", en_blanked: "( ) makes waste.", answer: "Haste" }
            ]},
            { id: 1654, term: "conceal", definition: "[他] ～を隠す", sentences: [
                { jp: "生徒たちは先生にその事実を隠した。", en_blanked: "The students ( ) the facts from the teacher.", answer: "concealed" }
            ]},
            { id: 1655, term: "disguise", definition: "[他] ①～を（偽装して）隠す ②（oneself as 〜）〜に変装する [名] ③変装", sentences: [
                { jp: "笑顔で悲しみを隠す", en_blanked: "( ) my sorrow with a smile", answer: "disguise" },
                { jp: "海賊に変装する", en_blanked: "( ) myself as a pirate", answer: "disguise" },
                { jp: "変装している王女", en_blanked: "a princess in ( )", answer: "disguise" }
            ]},
            { id: 1656, term: "coincide", definition: "[自] ①（with ～）（～と）同時に起きる ②（with ～）（～と）一致する", sentences: [
                { jp: "その日は私の誕生日と重なった（同時に起きた）。", en_blanked: "That day ( ) with my birthday.", answer: "coincided" },
                { jp: "彼女と我々の見解は一致していた。", en_blanked: "Her views ( ) with ours.", answer: "coincided" }
            ]},
            { id: 1657, term: "prevail", definition: "[自] ①（考え、習慣などが）普及している ②（最後に人，考えが）優勢となる", sentences: [
                { jp: "その国では仏教が隅々まで普及している。", en_blanked: "Buddhism ( ) throughout the country.", answer: "prevails" },
                { jp: "うそをつこうと思ったが、良識が勝った。", en_blanked: "I considered lying, but common sense ( ).", answer: "prevailed" }
            ]},
            { id: 1658, term: "sustain", definition: "[他] （生命など）を維持する，支える", sentences: [
                { jp: "地球上の生命を支える", en_blanked: "( ) life on Earth", answer: "sustain" }
            ]},
            { id: 1659, term: "linger", definition: "[自] ①（いつまでも）残る ②（on）長居する", sentences: [
                { jp: "エレベーターの中に強烈な臭いが残っていた。", en_blanked: "A strong smell ( ) in the elevator.", answer: "lingered" },
                { jp: "多くのファンがホールに残っていた。", en_blanked: "A lot of fans ( ) (on) in the hall.", answer: "lingered" }
            ]},
            { id: 1660, term: "revive", definition: "[自] ①生き返る，よみがえる [他] ②～を生き返らせる", sentences: [
                { jp: "経済は不況以降もち直し始めている。", en_blanked: "The economy is beginning to ( ) after the slump.", answer: "revive" },
                { jp: "映画産業をよみがえらせる", en_blanked: "( ) the film industry", answer: "revive" }
            ]},
            { id: 1661, term: "resume", definition: "[他] ①～を再開する [自] ②再開する [名] ③履歴書④概要，レジュメ", sentences: [
                { jp: "仕事を再開する", en_blanked: "( ) work", answer: "resume" },
                { jp: "会議が再開した。", en_blanked: "The meeting has ( ).", answer: "resumed" },
                { jp: "履歴書の書き方を教えていただけませんか。", en_blanked: "Could you show me how to write a ( )?", answer: "resume" },
                { jp: "その日の出来事の概要", en_blanked: "a ( ) of the day's events", answer: "resume" }
            ]},
            { id: 1662, term: "inspect", definition: "[他] ～を検査する", sentences: [
                { jp: "定期的にエレベーターを検査する", en_blanked: "( ) the elevators regularly", answer: "inspect" }
            ]},
            { id: 1663, term: "investigate", definition: "[他] ①（研究班などが）～を調査する ②（警察が）〜を捜査する", sentences: [
                { jp: "ウナギの生態を調査する", en_blanked: "( ) the ecology of eels", answer: "investigate" },
                { jp: "その殺人事件を調査する", en_blanked: "( ) the murder case", answer: "investigate" }
            ]},
            { id: 1664, term: "detect", definition: "[他] ～を探知する，（病気など）を発見する，（うそなど）を見抜く", sentences: [
                { jp: "微量の麻薬を検出する", en_blanked: "( ) a small amount of drug", answer: "detect" }
            ]},
            { id: 1665, term: "discern", definition: "[他] ～を見分ける", sentences: [
                { jp: "そのささいな違いを見分ける", en_blanked: "( ) the slight difference", answer: "discern" }
            ]},
            { id: 1666, term: "expedition", definition: "[名] （研究、探求、戦争目的の）探検，遠征②探検隊", sentences: [
                { jp: "北極点への遠征", en_blanked: "an ( ) to the North Pole", answer: "expedition" },
                { jp: "南極観測（探検）隊", en_blanked: "the Antarctic ( )", answer: "expedition" }
            ]},
            { id: 1667, term: "enroll", definition: "[自] ①（in ～）（～に）入学する [他] ②（be ～ed）在籍している", sentences: [
                { jp: "ヨガのクラスに入る", en_blanked: "( ) in yoga classes", answer: "enroll" },
                { jp: "この大学には2,000人の学生が在籍している。", en_blanked: "2,000 students are ( ) at this college.", answer: "enrolled" }
            ]},
            { id: 1668, term: "discipline", definition: "[他] ①～をしつける [名] ②しつけ，規律 ③（学問）分野", sentences: [
                { jp: "子どもをしつける", en_blanked: "( ) children", answer: "discipline" },
                { jp: "規律を守る（破る）", en_blanked: "keep/break ( )", answer: "discipline" },
                { jp: "学問分野", en_blanked: "an academic ( )", answer: "discipline" }
            ]},
            { id: 1669, term: "cram", definition: "[自] ①詰め込み勉強をする [他] ②～を詰め込む [名] ③詰め込み", sentences: [
                { jp: "試験のために詰め込み勉強をする", en_blanked: "( ) for the exam", answer: "cram" },
                { jp: "かばんに本を詰め込む", en_blanked: "( ) books into my bag", answer: "cram" },
                { jp: "塾に通う", en_blanked: "go to ( ) school", answer: "cram" }
            ]},
            { id: 1670, term: "faculty", definition: "[名] ①（生まれ持った）能力 ②（大学の）学部 ③（大学の）全教員", sentences: [
                { jp: "聴力", en_blanked: "the ( ) of hearing", answer: "faculty" },
                { jp: "工学部", en_blanked: "the ( ) of Engineering", answer: "Faculty" },
                { jp: "教授会", en_blanked: "a ( ) meeting", answer: "faculty" }
            ]},
            { id: 1671, term: "tuition", definition: "[名] ①授業料 ②（少人数での）授業", sentences: [
                { jp: "授業料を銀行振込で払う", en_blanked: "pay my ( ) by bank transfer", answer: "tuition" },
                { jp: "ロシア語の授業をする", en_blanked: "give ( ) in Russian", answer: "tuition" }
            ]},
            { id: 1672, term: "diploma", definition: "[名] 卒業証書", sentences: [
                { jp: "卒業証書を受け取る", en_blanked: "receive my ( )", answer: "diploma" }
            ]},
            { id: 1673, term: "mentor", definition: "[他] ①～を指導する [名] ②（会社、大学などでの）指導者", sentences: [
                { jp: "新入社員を指導する", en_blanked: "( ) new recruits", answer: "mentor" },
                { jp: "若社長の教育係", en_blanked: "a ( ) to the young president", answer: "mentor" }
            ]},
            { id: 1674, term: "ethic", definition: "[名] ①（-s）（社会や職業上の）倫理（観）②（伝統に守られた）倫理", sentences: [
                { jp: "医療倫理", en_blanked: "medical ( )", answer: "ethics" },
                { jp: "勤勉という古い倫理観", en_blanked: "the old ( ) of hard work", answer: "ethic" }
            ]},
            { id: 1675, term: "astronomy", definition: "[名] 天文学", sentences: [
                { jp: "天文学における謎", en_blanked: "mysteries in ( )", answer: "astronomy" }
            ]},
            { id: 1676, term: "archaeologist", definition: "[名] 考古学者", sentences: [
                { jp: "その考古学者が古代のつぼを掘り出した。", en_blanked: "The ( ) dug up an ancient pot.", answer: "archaeologist" }
            ]},
            { id: 1677, term: "anthropologist", definition: "[名] （文化）人類学者", sentences: [
                { jp: "ネアンデルタール人を研究する人類学者", en_blanked: "( ) studying about Neanderthals", answer: "anthropologists" }
            ]},
            { id: 1678, term: "perceive", definition: "[他] ①（A as B）（A）を（Bだと）認識する ②～を知覚する", sentences: [
                { jp: "その発見を飛躍的進歩と認識する", en_blanked: "( ) the discovery as a major breakthrough", answer: "perceive" },
                { jp: "彼の表情の変化に気づく", en_blanked: "( ) a change in his expression", answer: "perceive" }
            ]},
            { id: 1679, term: "grasp", definition: "[他] ①～を理解する ②～をつかむ[名] ③理解，つかむこと", sentences: [
                { jp: "人生の意味を理解する", en_blanked: "( ) the meaning of life", answer: "grasp" },
                { jp: "しっかりと彼の腕をつかむ", en_blanked: "( ) his arm firmly", answer: "grasp" },
                { jp: "私の理解を超える", en_blanked: "beyond my ( )", answer: "grasp" }
            ]},
            { id: 1680, term: "conceive", definition: "[他] ①～を思い浮かべる ②～を妊娠する[自] ③（of 〜）（〜を）想像する", sentences: [
                { jp: "よいアイデアを思いつく", en_blanked: "( ) a good idea", answer: "conceive" },
                { jp: "ベティは（子どもを）妊娠した。", en_blanked: "Betty ( ) a child.", answer: "conceived" },
                { jp: "戦争のない世界を想像する", en_blanked: "( ) of a world without war", answer: "conceive" }
            ]},
            { id: 1681, term: "anticipate", definition: "[他] ①～を予想する ②～を期待する", sentences: [
                { jp: "顧客の要求を予想する", en_blanked: "( ) customers' needs", answer: "anticipate" },
                { jp: "彼の到着を楽しみにして待つ", en_blanked: "eagerly ( ) his arrival", answer: "anticipate" }
            ]},
            { id: 1682, term: "foresee", definition: "[他] ～を予知する", sentences: [
                { jp: "誰にも未来を予知することはできない。", en_blanked: "No one can ( ) the future.", answer: "foresee" }
            ]},
            { id: 1683, term: "speculate", definition: "[自] ①推測する ②（株、土地などに）投機をする", sentences: [
                { jp: "未来のことを推測する", en_blanked: "( ) about the future", answer: "speculate" },
                { jp: "株に投機する", en_blanked: "( ) in stocks", answer: "speculate" }
            ]},
            { id: 1684, term: "infer", definition: "[他] （A from B）（BからA）を推測する", sentences: [
                { jp: "文脈から意味を推測する", en_blanked: "( ) the meaning from the context", answer: "infer" }
            ]},
            { id: 1685, term: "deduce", definition: "[他] （A from B）（BからA）を推定する", sentences: [
                { jp: "これらの数字から何を推測しますか。", en_blanked: "What do you ( ) from these figures?", answer: "deduce" }
            ]},
            { id: 1686, term: "ponder", definition: "[他] ～を熟考する", sentences: [
                { jp: "より多くの観光客を町に招致する方法を熟考する", en_blanked: "( ) ways to bring more tourists to the town", answer: "ponder" }
            ]},
            { id: 1687, term: "contemplate", definition: "[他] ～を熟考する", sentences: [
                { jp: "彼女との結婚をじっくり考える", en_blanked: "( ) marrying her", answer: "contemplate" }
            ]},
            { id: 1688, term: "assure", definition: "[他] ～に保証する，確信させる", sentences: [
                { jp: "医者は彼女の命に危険はないと私に保証してくれた。", en_blanked: "The doctor ( ) me that her life was not in danger.", answer: "assured" }
            ]},
            { id: 1689, term: "assess", definition: "[他] ～を評価する，査定する", sentences: [
                { jp: "その方法の効率を査定する", en_blanked: "( ) the method's efficiency", answer: "assess" }
            ]},
            { id: 1690, term: "evaluate", definition: "[他] ～を（正しく）評価する", sentences: [
                { jp: "従業員の仕事ぶりを（正しく）評価する", en_blanked: "( ) the employees' performances", answer: "evaluate" }
            ]},
            { id: 1691, term: "verify", definition: "[他] （事実かどうか）を確かめる，検証する", sentences: [
                { jp: "実験結果を検証する", en_blanked: "( ) the test results", answer: "verify" }
            ]},
            { id: 1692, term: "compromise", definition: "[自] ①（with ～）（～と）妥協する [他] ②（主義など）を曲げる [名] ③妥協", sentences: [
                { jp: "この点で彼と妥協する", en_blanked: "( ) with him on this", answer: "compromise" },
                { jp: "私の信念を曲げる", en_blanked: "( ) my beliefs", answer: "compromise" },
                { jp: "その計画について妥協する", en_blanked: "make a ( ) about the plan", answer: "compromise" }
            ]},
            { id: 1693, term: "reconcile", definition: "[他] ①（A with B）（A）を（Bと）調和させる，和解させる [自] ②（oneself to ～）（～を）仕方なく受け入れる", sentences: [
                { jp: "理想と現実との折り合いをつける", en_blanked: "( ) an ideal with reality", answer: "reconcile" },
                { jp: "現実を（仕方なく）受け入れる", en_blanked: "( ) myself to reality", answer: "reconcile" }
            ]},
            { id: 1694, term: "alert", definition: "[形] ①油断のない，用心深い [名] ②（公的な）警戒", sentences: [
                { jp: "私たちはどんな危険にも対処できるように用心している。", en_blanked: "We are ( ) to any possible danger.", answer: "alert" },
                { jp: "津波警報が出された。", en_blanked: "A tsunami ( ) was issued.", answer: "alert" }
            ]},
            { id: 1695, term: "stereotype", definition: "[名] 固定観念", sentences: [
                { jp: "人種による固定観念", en_blanked: "racial ( )", answer: "stereotypes" } 
            ]},
            { id: 1696, term: "perspective", definition: "[名] ①（経験などで得られる）視点（可算）②（大局的な）見方，遠近法（不可算）", sentences: [
                { jp: "新たな視点を得る", en_blanked: "gain a fresh ( )", answer: "perspective" },
                { jp: "状況を大局的に見据える", en_blanked: "keep the situation in ( )", answer: "perspective" }
            ]},
            { id: 1697, term: "prospect", definition: "[名] 見通し", sentences: [
                { jp: "自分が父親になることを考える（見通す）と、わくわくすると同時に不安だった。", en_blanked: "I was both excited and worried at the ( ) of becoming a father.", answer: "prospect" }
            ]},
            { id: 1698, term: "vow", definition: "[自] ①誓い [他] ②～を誓う", sentences: [
                { jp: "二度とたばこは吸わないと誓う（誓いをする）", en_blanked: "make a ( ) never to smoke again", answer: "vow" },
                { jp: "永遠の愛を誓う", en_blanked: "( ) eternal love", answer: "vow" }
            ]},
            { id: 1699, term: "intuition", definition: "[名] 直感", sentences: [
                { jp: "自分の直感に頼る", en_blanked: "rely on my ( )", answer: "intuition" }
            ]},
            { id: 1700, term: "illusion", definition: "[名] 幻想", sentences: [
                { jp: "ジェシーは彼が自分のことを愛しているという幻想を抱いている。", en_blanked: "Jessi is under the ( ) that he loves her.", answer: "illusion" }
            ]},
            { id: 1701, term: "criterion", definition: "[名] 基準", sentences: [
                { jp: "ワインを判断する基準", en_blanked: "the ( ) for judging wine", answer: "criteria" } 
            ]},
            { id: 1702, term: "tolerate", definition: "[他] ①～を大目に見る，我慢する", sentences: [
                { jp: "不当な扱いに耐える", en_blanked: "( ) unfair treatment", answer: "tolerate" }
            ]},
            { id: 1703, term: "overlook", definition: "[他] ①〜を（うっかり）見落とす ②（人の欠点やミスなど）を見逃す ③（場所が）～を見渡す", sentences: [
                { jp: "ある大切な証拠を見落とす", en_blanked: "( ) some important evidence", answer: "overlook" },
                { jp: "今回は君のミスを見逃そう。", en_blanked: "I'll ( ) your mistake this time.", answer: "overlook" },
                { jp: "私の部屋からセーヌ川が見渡せる。", en_blanked: "My room ( ) the Seine.", answer: "overlooks" }
            ]},
            { id: 1704, term: "grain", definition: "[名] ①穀物 ②粒，少量", sentences: [
                { jp: "日本の穀物消費量", en_blanked: "Japan's consumption of ( )", answer: "grain" },
                { jp: "少量の塩", en_blanked: "a ( ) of salt", answer: "grain" }
            ]},
            { id: 1705, term: "drought", definition: "[名] 干ばつ", sentences: [
                { jp: "その村は厳しい干ばつに見舞われた。", en_blanked: "The village was hit by a severe ( ).", answer: "drought" }
            ]},
            { id: 1706, term: "irrigation", definition: "[名] 灌漑", sentences: [
                { jp: "灌漑用水", en_blanked: "water for ( )", answer: "irrigation" }
            ]},
            { id: 1707, term: "spectacle", definition: "[名] ①（きわめて印象的な）光景 ②（大がかりな）見世物", sentences: [
                { jp: "夕日は実にすばらしい眺めだった。", en_blanked: "The sunset was quite a ( ).", answer: "spectacle" },
                { jp: "その開会式は壮大な見せ物だった", en_blanked: "The opening ceremony was a magnificent ( ).", answer: "spectacle" }
            ]},
            { id: 1708, term: "altitude", definition: "[名] 標高，高度", sentences: [
                { jp: "高度10,000メートルで", en_blanked: "at an ( ) of 10,000 meters", answer: "altitude" }
            ]},
            { id: 1709, term: "catastrophe", definition: "[名] 大災害，災難", sentences: [
                { jp: "地震、洪水、干ばつのような自然の大災害", en_blanked: "natural ( ) such as earthquakes, floods, and droughts", answer: "catastrophes" }
            ]},
            { id: 1710, term: "decay", definition: "[名] ①腐敗 [自] ②腐敗する，衰える", sentences: [
                { jp: "虫歯（歯の腐敗）になる", en_blanked: "develop tooth ( )", answer: "decay" },
                { jp: "女王の権威は衰えてきている。", en_blanked: "The queen's authority is ( ).", answer: "decaying" }
            ]},
            { id: 1711, term: "erosion", definition: "[名] 侵食", sentences: [
                { jp: "その海岸線の侵食", en_blanked: "the ( ) of the coastline", answer: "erosion" }
            ]},
            { id: 1712, term: "flame", definition: "[名] 炎", sentences: [
                { jp: "ろうそくの火", en_blanked: "a candle ( )", answer: "flame" }
            ]},
            { id: 1713, term: "galaxy", definition: "[名] 銀河", sentences: [
                { jp: "アンドロメダ銀河", en_blanked: "the Andromeda ( )", answer: "Galaxy" }
            ]},
            { id: 1714, term: "meteor", definition: "[名] 流星，隕石", sentences: [
                { jp: "流星が夜空を横切った。", en_blanked: "A ( ) shot across the night sky.", answer: "meteor" }
            ]},
            { id: 1715, term: "chill", definition: "[名] ①寒気 [他] ②～を冷やす", sentences: [
                { jp: "外に立っていたので、冷えた。", en_blanked: "I got a ( ) from standing outside.", answer: "chill" },
                { jp: "オレンジジュースの缶を冷やす", en_blanked: "( ) a can of orange juice", answer: "chill" }
            ]},
            { id: 1716, term: "meadow", definition: "[名] 草地，牧草地", sentences: [
                { jp: "牧草地を走り抜ける", en_blanked: "run through the ( )", answer: "meadow" }
            ]},
            { id: 1717, term: "exploit", definition: "[他] ①（自然の力など）を利用する ②～を搾取する", sentences: [
                { jp: "天然資源を利用する", en_blanked: "( ) natural resources", answer: "exploit" },
                { jp: "外国人労働者を搾取する", en_blanked: "( ) foreign workers", answer: "exploit" }
            ]},
            { id: 1718, term: "contaminate", definition: "[他] ～を汚染する", sentences: [
                { jp: "化学物質で汚染された魚", en_blanked: "fish ( ) with chemicals", answer: "contaminated" }
            ]},
            { id: 1719, term: "erupt", definition: "[自] （火山が）噴火する", sentences: [
                { jp: "周期的に噴火する", en_blanked: "( ) at regular intervals", answer: "erupt" }
            ]},
            { id: 1720, term: "evaporate", definition: "[自] 蒸発する", sentences: [
                { jp: "水は熱せられると蒸発する。", en_blanked: "Water ( ) when it is heated.", answer: "evaporates" }
            ]},
            { id: 1721, term: "fertile", definition: "[形] 肥沃な，肥えた", sentences: [
                { jp: "肥沃な土地", en_blanked: "( ) soil", answer: "fertile" }
            ]},
            { id: 1722, term: "roar", definition: "[自] ①ほえる [名] ②うなり声，怒号，轟音", sentences: [
                { jp: "ライオンがほえた。", en_blanked: "The lion ( ).", answer: "roared" },
                { jp: "（走る）車の轟音", en_blanked: "the ( ) of the traffic", answer: "roar" }
            ]},
            { id: 1723, term: "inhabit", definition: "[他] ～に生息している，ある", sentences: [
                { jp: "ニュージーランドに生息する鳥", en_blanked: "birds that ( ) New Zealand", answer: "inhabit" }
            ]},
            { id: 1724, term: "nurture", definition: "[他] ①～を育てる ②養育，教育", sentences: [
                { jp: "新たな産業を育む", en_blanked: "( ) new industries", answer: "nurture" },
                { jp: "氏より育ち（生まれより教育）。", en_blanked: "( ) is above nature.", answer: "Nurture" }
            ]},
            { id: 1725, term: "owl", definition: "[名] フクロウ", sentences: [
                { jp: "フクロウは昼に眠って、夜に狩りをする。", en_blanked: "( ) sleep by day and hunt by night.", answer: "Owls" }
            ]},
            { id: 1726, term: "instinct", definition: "[名] 本能", sentences: [
                { jp: "鳥は本能的に飛び方を習得する。", en_blanked: "Birds learn to fly by ( ).", answer: "instinct" }
            ]},
            { id: 1727, term: "prey", definition: "[名] ①餌食 [自] ②（on ～）餌食にする", sentences: [
                { jp: "シマウマはライオンの餌食になることがある。", en_blanked: "Zebras sometimes fall ( ) to lions.", answer: "prey" },
                { jp: "ネコはネズミを餌食にする。", en_blanked: "Cats ( ) on mice.", answer: "prey" }
            ]},
            { id: 1728, term: "timber", definition: "[名] 材木", sentences: [
                { jp: "材木商", en_blanked: "a ( ) dealer", answer: "timber" }
            ]},
            { id: 1729, term: "fabric", definition: "[名] ①布地，織物②組織，構造", sentences: [
                { jp: "汗を吸収しやすい布地", en_blanked: "sweat-absorbing ( )", answer: "fabric" },
                { jp: "私たちの社会の構造", en_blanked: "the ( ) of our society", answer: "fabric" }
            ]},
            { id: 1730, term: "textile", definition: "[名] ①織物 [形] ②織物の", sentences: [
                { jp: "織物を織る", en_blanked: "weave ( )", answer: "textiles" },
                { jp: "織物業界", en_blanked: "the ( ) industry", answer: "textile" }
            ]},
            { id: 1731, term: "weave", definition: "[他] ①～を織る ②～を編む", sentences: [
                { jp: "羊毛から布地を織る", en_blanked: "( ) fabric from wool", answer: "weave" },
                { jp: "竹を編んでかごを作る", en_blanked: "( ) bamboo into a basket", answer: "weave" }
            ]},
            { id: 1732, term: "competent", definition: "[形] 有能な", sentences: [
                { jp: "有能な翻訳者", en_blanked: "a ( ) translator", answer: "competent" }
            ]},
            { id: 1733, term: "optimistic", definition: "[形] 楽観的な", sentences: [
                { jp: "彼の将来を楽観する（楽観的な考えをもつ）", en_blanked: "have an ( ) view of his future", answer: "optimistic" }
            ]},
            { id: 1734, term: "patriotic", definition: "[形] 愛国的な", sentences: [
                { jp: "人々は海外に出ると愛国的になるものだ。", en_blanked: "People feel more ( ) when they are abroad.", answer: "patriotic" }
            ]},
            { id: 1735, term: "naughty", definition: "[形] いたずらな", sentences: [
                { jp: "サムは本当にいたずらだけど、同時にかわいいんだ。", en_blanked: "Sam is really ( ), but at the same time he is so cute.", answer: "naughty" }
            ]},
            { id: 1736, term: "vigorous", definition: "[形] ①（人、活動が）精力的な ②活発な", sentences: [
                { jp: "精力的な支持者", en_blanked: "a ( ) supporter", answer: "vigorous" },
                { jp: "激しい（活発な）運動をする", en_blanked: "get ( ) exercise", answer: "vigorous" }
            ]},
            { id: 1737, term: "solitary", definition: "[形] ①（人が）孤高の ②ただひとつの", sentences: [
                { jp: "一人でする（孤高の）何時間もの散歩", en_blanked: "long ( ) walks", answer: "solitary" },
                { jp: "その町で唯一のホテル", en_blanked: "the town's ( ) hotel", answer: "solitary" }
            ]},
            { id: 1738, term: "vulgar", definition: "[形] ①品がない ②（冗談などが）卑わいな", sentences: [
                { jp: "エミリーはとてもきれいだけど、ふるまいは少し品がない。", en_blanked: "Emily is very beautiful, but she is a little ( ) in her manner.", answer: "vulgar" },
                { jp: "彼の卑わいな冗談", en_blanked: "his ( ) jokes", answer: "vulgar" }
            ]},
            { id: 1739, term: "skeptical", definition: "[形] 懐疑的な", sentences: [
                { jp: "科学者は懐疑的であるべきだ。", en_blanked: "Scientists should be ( ).", answer: "skeptical" }
            ]},
            { id: 1740, term: "haunt", definition: "[他] ①（亡霊、考えなどが）～につきまとう，出没する [名] ②好んで行く場所，たまり場", sentences: [
                { jp: "まだ後悔している（後悔につきまとわれている）。", en_blanked: "I am still ( ) by regret.", answer: "haunted" }, 
                { jp: "そのカフェは私が好んで行く場所だ。", en_blanked: "The café is my favorite ( ).", answer: "haunt" }
            ]},
            { id: 1741, term: "obsessed", definition: "[形] （with [by] ～）（～に）取りつかれて，頭が一杯で", sentences: [
                { jp: "リサは体重ばかり気にしている（体重のことで頭が一杯だ）。", en_blanked: "Lisa is ( ) with her weight.", answer: "obsessed" }
            ]},
            { id: 1742, term: "intent", definition: "[形] ①（on ～）（～に）没頭した，決心した [名] ②意図", sentences: [
                { jp: "仕事に没頭していた", en_blanked: "I was ( ) on my work.", answer: "intent" },
                { jp: "あなたを傷つけるつもりはなかった。", en_blanked: "It was not my ( ) to hurt you.", answer: "intent" }
            ]},
            { id: 1743, term: "indulge", definition: "[自] ①（in ～）（～に）ふける [他] ②～を思いのままにさせる", sentences: [
                { jp: "飲酒にふける", en_blanked: "( ) in drinking", answer: "indulge" },
                { jp: "私のわがままを聞いてくれる人（私を思いのままにさせる人）", en_blanked: "someone who ( ) me", answer: "indulges" }
            ]},
            { id: 1744, term: "cling", definition: "[自] （to ～）（～に）固執する，しがみつく", sentences: [
                { jp: "彼の腕にしがみつく", en_blanked: "( ) to his arm", answer: "cling" }
            ]},
            { id: 1745, term: "flaw", definition: "[名] 欠陥", sentences: [
                { jp: "その会社はブレーキ系統に欠陥のある車をリコールした。", en_blanked: "The company recalled cars that had a ( ) in their braking system.", answer: "flaw" }
            ]},
            { id: 1746, term: "defect", definition: "[名] 欠陥", sentences: [
                { jp: "その製品の欠陥", en_blanked: "a ( ) in that product", answer: "defect" }
            ]},
            { id: 1747, term: "trait", definition: "[名] 特性", sentences: [
                { jp: "皮膚の色は遺伝特性だ。", en_blanked: "Skin color is a genetic ( ).", answer: "trait" }
            ]},
            { id: 1748, term: "analogy", definition: "[名] 類似点，例え", sentences: [
                { jp: "脳をコンピュータに例える（脳とコンピュータの類似点を示す）", en_blanked: "draw an ( ) between the brain and a computer", answer: "analogy" }
            ]},
            { id: 1749, term: "parallel", definition: "[名] ①類似（物） [形] ②（to ～）（～と）平行の，類似した", sentences: [
                { jp: "20世紀には類似するものがない", en_blanked: "have no ( ) in the 20th century", answer: "parallel" },
                { jp: "平行する2直線は交わらない。", en_blanked: "Two ( ) lines never meet.", answer: "parallel" }
            ]},
            { id: 1750, term: "crucial", definition: "[形] 重大な", sentences: [
                { jp: "その交渉で（極めて）重要な役割を演じる", en_blanked: "play a ( ) role in the negotiations ", answer: "crucial" }
            ]},
            { id: 1751, term: "primary", definition: "[形] ①主な，第1の ②初期の，原始の", sentences: [
                { jp: "私の今の一番の関心は君の幸福だ。", en_blanked: "My ( ) concern is your well-being.", answer: "primary" },
                { jp: "初期医療 (＊地域の臨床医による診断など ) ", en_blanked: " ( ) care", answer: "primary" }
            ]},
            { id: 1752, term: "integral", definition: "[形] ①不可欠な ②完全な", sentences: [
                { jp: "私たちの生活の不可欠な一部", en_blanked: "an ( ) part of our lives", answer: "integral" }, 
                { jp: "彼の3つのインタビューの完全な録音", en_blanked: "the ( ) recording of his three interviews", answer: "integral" }
            ]},
            { id: 1753, term: "vital", definition: "[形] 不可欠な，極めて重要な", sentences: [
                { jp: "カルシウムは健康な骨に不可欠だ。", en_blanked: "Calcium is ( ) for healthy bones.", answer: "vital" }
            ]},
            { id: 1754, term: "profound", definition: "[形] 深い", sentences: [
                { jp: "人間に深い影響を与える", en_blanked: "have a ( ) impact on humans", answer: "profound" }
            ]},
            { id: 1755, term: "grim", definition: "[形] （状況などが）厳しい", sentences: [
                { jp: "厳しい現実に直面する", en_blanked: "face a ( ) reality", answer: "grim" } 
            ]},
            { id: 1756, term: "fierce", definition: "[形] ①（競争，嵐などが）厳しい  ②どう猛な", sentences: [
                { jp: "激しい競争", en_blanked: "( ) competition", answer: "fierce" }, 
                { jp: "どう猛な番犬", en_blanked: "a ( ) guard dog", answer: "fierce" }
            ]},
            { id: 1757, term: "harsh", definition: "[形] 厳しい", sentences: [
                { jp: "アラスカの厳しい気候", en_blanked: "Alaska’s ( ) climate", answer: "harsh" }
            ]},
            { id: 1758, term: "savage", definition: "[形] （とても）容赦ない，どう猛な", sentences: [
                { jp: "政府への容赦ない攻撃", en_blanked: "a ( ) attack on the government", answer: "savage" }
            ]},
            { id: 1759, term: "acute", definition: "[形] ①深刻な ②鋭い ③急性の", sentences: [
                { jp: "深刻な問題", en_blanked: "an ( ) problem", answer: "acute" }, 
                { jp: "鋭い嗅覚", en_blanked: "an ( ) sense of smell", answer: "acute" }, 
                { jp: "急性アルコール中毒", en_blanked: "( ) alcohol poisoning", answer: "acute" }
            ]},
            { id: 1760, term: "ambiguous", definition: "[形] 曖昧な", sentences: [
                { jp: "（どっちともとれる）曖昧な返事", en_blanked: "an ( ) reply", answer: "ambiguous" }
            ]},
            { id: 1761, term: "obscure", definition: "[形] ①ぼやけた，わかりにくい ②無名の", sentences: [
                { jp: "（聞いたことがなく）よくわからない問題◇（質問内容が）はっきりしない問題", en_blanked: "an ( ) problem ◇a vague problem", answer: "obscure" },
                { jp: "無名のバンド", en_blanked: "an ( ) band", answer: "obscure" }
            ]},
            { id: 1762, term: "misleading", definition: "[形] 誤解を招く，紛らわしい", sentences: [
                { jp: "誤解を招く記事", en_blanked: "a ( ) article", answer: "misleading" }
            ]},
            { id: 1763, term: "straightforward", definition: "[形] ①（方法などが）わかりやすい  ②（人や行動が）率直な", sentences: [
                { jp: "このプログラムのインストールはかなりわかりやすい。", en_blanked: "Installing this program is quite ( )", answer: "straightforward" },
                { jp: "彼はいつも率直だ。", en_blanked: "He is always ( ).", answer: "straightforward" }
            ]},
            { id: 1764, term: "explicit", definition: "[形] （発言や文章などが）明確な", sentences: [
                { jp: "明確な指示", en_blanked: "( ) instructions", answer: "explicit" }
            ]},
            { id: 1765, term: "sophisticated", definition: "[形] ①（機械，システムが）高度な ②洗練された，教養のある", sentences: [
                { jp: "高度な警報システム", en_blanked: "a ( ) alarm system", answer: "sophisticated" },
                { jp: "洗練されたレストラン", en_blanked: "a ( ) restaurant", answer: "sophisticated" }
            ]},
            { id: 1766, term: "ingenious", definition: "[形] 独創的な", sentences: [
                { jp: "ノミを駆除する独創的な装置", en_blanked: "an ( ) device to get rid of fleas", answer: "ingenious" }
            ]},
            { id: 1767, term: "decent", definition: "[形] まともな，きちんとした", sentences: [
                { jp: "私はまずまずの給料をもらっている。", en_blanked: "I’m paid a ( ) salary.", answer: "decent" }
            ]},
            { id: 1768, term: "thrive", definition: "[自] ①（会社などが）好調である，繁栄する ②（動［植］物などが）健康に育つ", sentences: [
                { jp: "IT業界は好調だ。", en_blanked: "The IT industry is ( ).", answer: "thriving" },
                { jp: "うちの子どもたちはすくすく育っている。", en_blanked: "Our children are ( ).", answer: "thriving" }
            ]},
            { id: 1769, term: "wit", definition: "[名] 機知，機知に富んだ人", sentences: [
                { jp: "機知に富んだ男性", en_blanked: "a man of great ( )", answer: "wit" }
            ]},
            { id: 1770, term: "affluent", definition: "[形] 裕福な", sentences: [
                { jp: "裕福な地域で育つ", en_blanked: "grow up in an ( ) area", answer: "affluent" }
            ]},
            { id: 1771, term: "elaborate", definition: "[自] ①手の込んだ，凝った [他] ②〜を苦労して作り上げる [自] ③（on〜）（〜を）詳しく話す", sentences: [
                { jp: "手の込んだ食事", en_blanked: "an ( ) meal", answer: "elaborate" },
                { jp: "計画を練り上げる", en_blanked: "( ) the plan", answer: "elaborate" },
                { jp: "状況を詳しく述べる", en_blanked: "( ) on the circumstances", answer: "elaborate" }
            ]},
            { id: 1772, term: "prompt", definition: "[形] ①迅速な [他] ②〜に促す", sentences: [
                { jp: "即答（迅速な返答）", en_blanked: "a ( ) reply", answer: "prompt" },
                { jp: "どうしてそんなものを買う気になったの（何があなたに買うように促したのか）？", en_blanked: "What ( ) you to buy that ?", answer: "prompted" }
            ]},
            { id: 1773, term: "swift", definition: "[形] 素早い", sentences: [
                { jp: "素早い回復", en_blanked: "a ( ) recovery", answer: "swift" }
            ]},
            { id: 1774, term: "mighty", definition: "[形] 強力な", sentences: [
                { jp: "《ことわざ》ペンは剣より強し。", en_blanked: "The pen is ( ) than the sword.", answer: "mightier" }
            ]},
            { id: 1775, term: "renowned", definition: "[形] 有名な", sentences: [
                { jp: "鶏肉のから揚げで有名な店", en_blanked: "a restaurant ( ) for its deep-fried chicken", answer: "renowned" }
            ]},
            { id: 1776, term: "dim", definition: "[形] ①薄暗い ②（記憶などが）ぼんやりした [他] ③～を暗くする", sentences: [
                { jp: "薄暗い明かり", en_blanked: "a ( ) light", answer: "dim" },
                { jp: "ぼんやりした記憶", en_blanked: "a ( ) memory", answer: "dim" },
                { jp: "照明を暗くする", en_blanked: "( ) the light", answer: "dim" }
            ]},
            { id: 1777, term: "gloomy", definition: "[形] ①薄暗い ②陰気な，悲観的な", sentences: [
                { jp: "薄暗く古びた部屋", en_blanked: "a ( ) old room", answer: "gloomy" },
                { jp: "悲観的な予想", en_blanked: "a ( ) forecast", answer: "gloomy" }
            ]},
            { id: 1778, term: "barren", definition: "[形] 不毛な", sentences: [
                { jp: "草木も生えない（不毛な）岩山", en_blanked: "a ( ), rocky mountain", answer: "barren" }
            ]},
            { id: 1779, term: "idle", definition: "[形] ①（仕事がなく）何もしていない ②怠惰な [他] ③（away）（〜を）何もしないでいる", sentences: [
                { jp: "午前中何もせずに座っている", en_blanked: "sit ( ) in the morning", answer: "idle" },
                { jp: "怠惰な労働者たち", en_blanked: "( ) workers", answer: "idle" },
                { jp: "午後を何もしないで過ごす", en_blanked: "( ) away the afternoon", answer: "idle" }
            ]},
            { id: 1780, term: "tiresome", definition: "[形] 退屈する，うんざりする", sentences: [
                { jp: "退屈な講義", en_blanked: "a ( ) lecture", answer: "tiresome" }
            ]},
            { id: 1781, term: "static", definition: "[形] 静的な，（経済などで）変化のない，変化のない", sentences: [
                { jp: "静電気がピリッときた。", en_blanked: "I got a shock from ( ) electricity.", answer: "static" }
            ]},
            { id: 1782, term: "clumsy", definition: "[形] 不器用な", sentences: [
                { jp: "手先が不器用だ。（↔︎手先が器用だ）", en_blanked: "I am ( ) with my hands.（I am good with my hands.）", answer: "clumsy" }
            ]},
            { id: 1783, term: "ignorant", definition: "[形] 無知の", sentences: [
                { jp: "ドリスは世間知らずだ（世間について無知だ）。", en_blanked: "Doris is ( ) of the world.", answer: "ignorant" }
            ]},
            { id: 1784, term: "reckless", definition: "[形] 無謀な", sentences: [
                { jp: "無謀な運転", en_blanked: "( ) driving", answer: "reckless" }
            ]},
            { id: 1785, term: "arbitrary", definition: "[形] 独断的な，勝手な", sentences: [
                { jp: "独断的な決定をする", en_blanked: "make an ( ) decision", answer: "arbitrary" }
            ]},
            { id: 1786, term: "foul", definition: "[形] ①（味，匂いなどが）不快な [名] ②（スポーツなどの）違反，ファウル", sentences: [
                { jp: "不快な匂い", en_blanked: "a ( ) smell", answer: "foul" },
                { jp: "その反則に対してレッドカードが出された。", en_blanked: "A red card was given for the ( ).", answer: "foul" }
            ]},
            { id: 1787, term: "shabby", definition: "[形] みすぼらしい，おんぼろの", sentences: [
                { jp: "みすぼらしい上着", en_blanked: "a ( ) jacket", answer: "shabby" }
            ]},
            { id: 1788, term: "monotonous", definition: "[形] 単調な", sentences: [
                { jp: "この町での生活は単調だ。", en_blanked: "Life in this town is ( ).", answer: "monotonous" }
            ]},
            { id: 1789, term: "crude", definition: "[形] ①粗末な，粗野な ②加工されていない", sentences: [
                { jp: "粗末なつり橋", en_blanked: "a ( ) rope bridge", answer: "crude" },
                { jp: "原油（加工されていない油）", en_blanked: "( ) oil", answer: "crude" }
            ]},
            { id: 1790, term: "fragile", definition: "[形] 壊れやすい，もろい", sentences: [
                { jp: "壊れやすい陶磁器", en_blanked: "( ) china", answer: "fragile" }
            ]},
            { id: 1791, term: "vulnerable", definition: "[自] ①傷つきやすい，弱い ②（非難，攻撃を）受けやすい，（病気に）かかりやすい", sentences: [
                { jp: "紙は湿気に弱い。", en_blanked: "Paper is ( ) to moisture.", answer: "vulnerable" },
                { jp: "高血圧の人は心臓病にかかりやすい。", en_blanked: "People with high blood pressure are ( ) to heart disease.", answer: "vulnerable" }
            ]},
            { id: 1792, term: "rust", definition: "[名] ①さび [自] ②さびる", sentences: [
                { jp: "その自転車はさびついていた（さびで覆われていた）。", en_blanked: "The bicycle was covered in ( ).", answer: "rust" },
                { jp: "そのパイプはさびていた。", en_blanked: "The pipe ( ).", answer: "rusted" }
            ]},
            { id: 1793, term: "plight", definition: "[名] 窮状，苦境", sentences: [
                { jp: "貧困に生きる子どもの窮状", en_blanked: "the ( ) of children living in poverty", answer: "plight" } 
            ]},
            { id: 1794, term: "conventional", definition: "[形] 従来の，慣習的な", sentences: [
                { jp: "通常兵器（従来の兵器）（＊「最新の兵器」ではないことを示唆（↔︎核兵器））", en_blanked: "( ) weapons", answer: "conventional" }
            ]},
            { id: 1795, term: "innate", definition: "[形] （才能などが）先天的な，生まれつきの", sentences: [
                { jp: "人を笑わせる先天的な才能", en_blanked: "an ( ) ability to and make people laugh", answer: "innate" }
            ]},
            { id: 1796, term: "exotic", definition: "[形] ①（動［植］物が）外来の ②異国情緒のある", sentences: [
                { jp: "外来植物", en_blanked: "( ) plants", answer: "exotic" },
                { jp: "異国情緒の漂うホテル", en_blanked: "a hotel with an ( ) atmosphere", answer: "exotic" }
            ]},
            { id: 1797, term: "tame", definition: "[名] ①飼い慣らされた，従順な[他] ②〜を飼い慣らす", sentences: [
                { jp: "おとなしい（飼い慣らされた）犬", en_blanked: "a ( ) dog", answer: "tame" },
                { jp: "ライオンを飼い慣らすには時間がかかる。", en_blanked: "It takes a long time to ( ) a lion.", answer: "tame" }
            ]},
            { id: 1798, term: "solemn", definition: "[形] ①（場所，祝祭が）厳粛な，（音楽が）荘厳な ②（態度が）真面目な", sentences: [
                { jp: "厳粛な儀式", en_blanked: "a ( ) ceremony", answer: "solemn" },
                { jp: "彼は突然真顔（彼の顔は真面目）になった。", en_blanked: "His face suddenly grew ( ).", answer: "solemn" }
            ]},
            { id: 1799, term: "manifest", definition: "[形] ①明らかな ②（姿勢，感情など）を明らかにする", sentences: [
                { jp: "明白な間違い", en_blanked: "a ( ) error", answer: "manifest" },
                { jp: "不満を表す", en_blanked: "( )dissatisfaction", answer: "manifest" }
            ]},
            { id: 1800, term: "dense", definition: "[形] 密集した，（霧などが）濃い", sentences: [
                { jp: "濃い霧", en_blanked: "a ( ) fog", answer: "dense" }
            ]},
            { id: 1801, term: "superficial", definition: "[形] 表面的な", sentences: [
                { jp: "日本史に関する表面的な知識", en_blanked: "a ( ) knowledge of Japanese history", answer: "superficial" }
            ]},
            { id: 1802, term: "transparent", definition: "[形] 透明な", sentences: [
                { jp: "透明なガラス", en_blanked: "( ) glass", answer: "transparent" }
            ]},
            { id: 1803, term: "consistent", definition: "[形] ①（with ～）矛盾のない，一致している ②安定した，不変の", sentences: [
                { jp: "彼の発言は，行動と一致していない．", en_blanked: "His words are not ( ) with his behavior.", answer: "consistent" },
                { jp: "安定したペースで走る", en_blanked: "run at a ( ) pace", answer: "consistent" }
            ]},
            { id: 1804, term: "coherent", definition: "[形] 一貫している", sentences: [
                { jp: "その出来事の一貫した説明をする", en_blanked: "give a ( ) account of the event", answer: "coherent" }
            ]},
            { id: 1805, term: "universal", definition: "[形] 普遍的な", sentences: [
                { jp: "「時は金なり」は普遍的な真理だ．", en_blanked: "”Time is money” is a ( ) truth.", answer: "universal" }
            ]},
            { id: 1806, term: "upright", definition: "[副] ①直立して [形] ②直立した", sentences: [
                { jp: "直立歩行する（直立して歩く）◇四つん這いで歩く", en_blanked: "walk ( ) ◇walk on all fours", answer: "upright" },
                { jp: "直立した状態で", en_blanked: "in an ( ) position", answer: "upright" }
            ]},
            { id: 1807, term: "underlying", definition: "[形] 根底にある", sentences: [
                { jp: "その問題の根底にある原因", en_blanked: "the ( ) cause of the problem", answer: "underlying" }
            ]},
            { id: 1808, term: "spontaneous", definition: "[形] 自然発生的な", sentences: [
                { jp: "群衆から自然に起こった声援", en_blanked: "a ( ) cheer from the crowd", answer: "spontaneous" }
            ]},
            { id: 1809, term: "mock", definition: "[形] ①模擬の，見せかけの [他] ②（からかって）～をまねる [他] ③～をあざける", sentences: [
                { jp: "模擬試験", en_blanked: "a ( ) exam", answer: "mock" },
                { jp: "その先生の口まねをする（話し方をまねる）", en_blanked: "( ) the way the teacher talks", answer: "mock" },
                { jp: "これ以上私をばかにするな．", en_blanked: "Don't ( ) me any more.", answer: "mock" }
            ]},
            { id: 1810, term: "liable", definition: "[形] ①（to do）～しがちだ ②（to ～）（病気などに）かかりやすい ③（for ～）（～に対して）（法的に）責任がある", sentences: [
                { jp: "メグはミスをしやすい．", en_blanked: "Meg is ( ) to make mistakes.", answer: "liable" },
                { jp: "けがをしやすい", en_blanked: "be ( ) to injury", answer: "liable" },
                { jp: "その事故の責任を負う", en_blanked: "be ( ) for the accident", answer: "liable" }
            ]},
            { id: 1811, term: "converse", definition: "[名] ①正反対 [形] ②正反対の [自] ③（with ～）（～と）会話する", sentences: [
                { jp: "逆もまた真なり", en_blanked: "The ( ) is also true.", answer: "converse" },
                { jp: "逆の見方", en_blanked: "the ( ) point of view", answer: "converse" },
                { jp: "スペイン人と会話する", en_blanked: "( ) with a Spanish person", answer: "converse" }
            ]},
            { id: 1812, term: "preliminary", definition: "[形] ①予備的な，事前の ②予選の [名] ③予選", sentences: [
                { jp: "事前の市場調査", en_blanked: "( ) market research", answer: "preliminary" },
                { jp: "予選", en_blanked: "a ( ) round", answer: "preliminary" },
                { jp: "予選で敗退する", en_blanked: "be eliminated in the ( )", answer: "preliminaries" }
            ]},
            { id: 1813, term: "version", definition: "[名] ①（個人的な）解釈，意見 ②（製品などの）～版", sentences: [
                { jp: "その出来事についての彼自身の解釈", en_blanked: "his own ( ) of the episode", answer: "version" },
                { jp: "そのソフトウェアの最新版", en_blanked: "the latest ( ) of the software", answer: "version" }
            ]},
            { id: 1814, term: "indigenous", definition: "[形] （動[植]物，民族が）固有の", sentences: [
                { jp: "オーストラリアの固有の民族", en_blanked: "a people ( ) to Australia", answer: "indigenous" }
            ]},
            { id: 1815, term: "decline", definition: "[自] ①減る，衰退する [他] ②～を断る [名] ③衰退，減少", sentences: [
                { jp: "教育水準が下がっている.", en_blanked: "Educational standards are ( ).", answer: "declining" },
                { jp: "彼の夕食の誘いを断る", en_blanked: "( ) his invitation to dinner", answer: "decline" },
                { jp: "失業率の急激な減少", en_blanked: "a sharp ( ) in unemployment", answer: "decline" }
            ]},
            { id: 1816, term: "multiply", definition: "[他] ①～を増やす  ②（A by B）（A）に（Bを）掛ける [自] ③増える", sentences: [
                { jp: "私たちの利益を増やす", en_blanked: "( ) our profits", answer: "multiply" },
                { jp: "8×6＝48", en_blanked: "8 ( ) by 6 is 48.", answer: "multiplied" },
                { jp: "昆虫は夏に増殖する.", en_blanked: "Insects ( ) in summer.", answer: "multiply" }
            ]},
            { id: 1817, term: "soar", definition: "[自] ①（価格，温度が）急上昇する  ②（鳥が）舞い上がる", sentences: [
                { jp: "ここ数年で地価が急騰した．", en_blanked: "Land prices have ( ) in the last few years.", answer: "soared" },
                { jp: "ワシが空高く舞い上がった", en_blanked: "An eagle ( ) in the sky.", answer: "soared" }
            ]},
            { id: 1818, term: "accumulate", definition: "[他] ①～を蓄積する [自] ②蓄積する", sentences: [
                { jp: "知識を蓄積する", en_blanked: "( ) knowledge", answer: "accumulate" },
                { jp: "脂肪は尻回りに蓄積しがちだ.", en_blanked: "Fat tends to ( ) around the hips.", answer: "accumulate" }
            ]},
            { id: 1819, term: "exceed", definition: "[他] ～を越える", sentences: [
                { jp: "制限速度を上回る", en_blanked: "( ) the speed limit", answer: "exceed" }
            ]},
            { id: 1820, term: "abundant", definition: "[形] 豊富な", sentences: [
                { jp: "カナダは天然資源が豊富だ（天然資源において豊かだ）．", en_blanked: "Canada is ( ) in natural resources.", answer: "abundant" }
            ]},
            { id: 1821, term: "ample", definition: "[形] 豊富な", sentences: [
                { jp: "成功する十分な機会を彼に与える", en_blanked: "give him ( ) opportunity to succeed", answer: "ample" }
            ]},
            { id: 1822, term: "gross", definition: "[形] ①総計の  ②（食べ物，行動などが）ひどい", sentences: [
                { jp: "国民総生産", en_blanked: "the ( ) national product (GNP)", answer: "gross" },
                { jp: "彼の行動は本当にひどかった．", en_blanked: "His behavior was really ( ).", answer: "gross" }
            ]},
            { id: 1823, term: "infinite", definition: "[形] 無限の", sentences: [
                { jp: "無限の星", en_blanked: "an ( ) number of stars", answer: "infinite" }
            ]},
            { id: 1824, term: "sole", definition: "[形] ①唯一の [名] ②足の裏，靴底", sentences: [
                { jp: "その事故の唯一の生存者", en_blanked: "the ( ) survivor of the accident", answer: "sole" },
                { jp: "ゴム底の靴", en_blanked: "a shoe with a rubber ( )", answer: "sole" }
            ]},
            { id: 1825, term: "heap", definition: "[名] ①山 ②（a ー of 〜）たくさんの～", sentences: [
                { jp: "落ち葉を集めて山にする", en_blanked: "gather fallen leaves into a ( )", answer: "heap" },
                { jp: "大盛りのフライドポテト", en_blanked: "a ( ) of French fries", answer: "heap" }
            ]},
            { id: 1826, term: "fraction", definition: "[名] ①少量 ②分数，端数", sentences: [
                { jp: "その費用のほんの一部", en_blanked: "a ( ) of the cost", answer: "fraction" },
                { jp: "端数を切り捨てる", en_blanked: "round off a ( )", answer: "fraction" }
            ]},
            { id: 1827, term: "simultaneous", definition: "[形] 同時の", sentences: [
                { jp: "同時通訳を務める", en_blanked: "work as a ( ) interpreter", answer: "simultaneous" }
            ]},
            { id: 1828, term: "medieval", definition: "[形] 中世の", sentences: [
                { jp: "中世（の時代）に", en_blanked: "in ( ) times", answer: "medieval" }
            ]},
            { id: 1829, term: "decade", definition: "[名] 10年", sentences: [
                { jp: "数十年間", en_blanked: "for ( )", answer: "decades" }
            ]},
            { id: 1830, term: "dawn", definition: "[名] ①夜明け [自] ②夜が明ける [自] ③（on ～）（～に）わかり始める", sentences: [
                { jp: "私たちは夜明けに家を出た．", en_blanked: "We left home at ( ).", answer: "dawn" },
                { jp: "夜が明け始めた.", en_blanked: "The day began to ( ).", answer: "dawn" },
                { jp: "真実が（私に）わかり始めてきた．", en_blanked: "The truth ( ) on me.", answer: "dawned" }
            ]},
            { id: 1831, term: "span", definition: "[名] ①（継続した）期間 ②（集中力，注意力，機械の持続）期間", sentences: [
                { jp: "5年という期間", en_blanked: "over a ( ) of five years", answer: "span" },
                { jp: "ゾウの平均寿命（生きている期間）", en_blanked: "the average life ( ) of elephants", answer: "span" }
            ]},
            { id: 1832, term: "expire", definition: "[自] 期限が切れる", sentences: [
                { jp: "この免許はいつ期限が切れますか？", en_blanked: "When does this license ( )?", answer: "expire" }
            ]},
            { id: 1833, term: "postpone", definition: "[他] ～を延期する", sentences: [
                { jp: "明日まで会議を延期する", en_blanked: "( ) the meeting until tomorrow", answer: "postpone" }
            ]},
            { id: 1834, term: "equip", definition: "[他] ①～を装備させる，備え付ける  ②（人）に（知識や能力などを）身につけさせる", sentences: [
                { jp: "これらのLED照明には人工知能が搭載されている．", en_blanked: "These LED lights are ( ) with artificial intelligence.", answer: "equipped" },
                { jp: "息子に十分な教育を与える", en_blanked: "( ) my son with good education", answer: "equip" }
            ]},
            { id: 1835, term: "transmit", definition: "[他] ①～を送る，伝える ②（病気など）をうつす", sentences: [
                { jp: "世界中にニュースを伝える", en_blanked: "( ) news all around the world", answer: "transmit" },
                { jp: "病気をうつす", en_blanked: "( ) a disease", answer: "transmit" }
            ]},
            { id: 1836, term: "endow", definition: "[他] ～を授ける", sentences: [
                { jp: "彼にはユーモアのセンスがある（ユーモアのセンスを授けられている）．", en_blanked: "He is ( ) with a sense of humor.", answer: "endowed" }
            ]},
            { id: 1837, term: "inherit", definition: "[他] ～を受け継ぐ", sentences: [
                { jp: "祖父からその土地を受け継ぐ", en_blanked: "( ) the land from my grandfather", answer: "inherit" }
            ]},
            { id: 1838, term: "retrieve", definition: "[他] ①～を回収する，取り戻す ②（ファイルなど）を検索する", sentences: [
                { jp: "フライトレコーダーを回収する", en_blanked: "( ) the flight recorder", answer: "retrieve" },
                { jp: "ファイルを検索する", en_blanked: "( ) a file", answer: "retrieve" }
            ]},
            { id: 1839, term: "displace", definition: "[他] ①～に取って代わる  ②（戦争，災害などで）～を（故郷などから）追い出す", sentences: [
                { jp: "天然ガスが石炭に取って代わった．", en_blanked: "Natural gas has ( ) coal.", answer: "displaced" },
                { jp: "内戦によって故郷を追われる（追い出される）", en_blanked: "be ( ) by the civil war", answer: "displaced" }
            ]},
            { id: 1840, term: "bond", definition: "[名] ①きずな ②公債，社債", sentences: [
                { jp: "母と子のきずな", en_blanked: "the ( ) between mother and child", answer: "bond" },
                { jp: "国債を買う", en_blanked: "buy government ( )", answer: "bonds" }
            ]},
            { id: 1841, term: "ornament", definition: "[名] （小さな）飾り，置物", sentences: [
                { jp: "クリスマスツリーの飾り", en_blanked: "Christmas tree ( )", answer: "ornaments" }
            ]},
            { id: 1842, term: "certificate", definition: "[名] 証明書，免許状，鑑定書", sentences: [
                { jp: "出生［死亡，婚姻］証明書", en_blanked: "a birth ［death, marriage］ ( )", answer: "certificate" }
            ]},
            { id: 1843, term: "accommodation", definition: "[名] （〈米〉ーs）宿泊施設", sentences: [
                { jp: "学生用の宿泊施設", en_blanked: "student ( )", answer: "accommodations" }
            ]},
            { id: 1844, term: "intersection", definition: "[名] 交差点", sentences: [
                { jp: "交差点を左に曲がってください．", en_blanked: "Turn left at the ( ).", answer: "intersection" }
            ]},
            { id: 1845, term: "pavement", definition: "[名] （主に〈英〉）歩道", sentences: [
                { jp: "歩道上に放置された自転車", en_blanked: "bicycles left on the ( )", answer: "pavement" }
            ]},
            { id: 1846, term: "pedestrian", definition: "[名] 歩行者", sentences: [
                { jp: "歩道橋（歩行者用の橋）", en_blanked: "a ( ) bridge", answer: "pedestrian" }
            ]},
            { id: 1847, term: "excursion", definition: "[名] 小旅行，遠足", sentences: [
                { jp: "動物園への学校遠足", en_blanked: "a school ( ) to a zoo", answer: "excursion" }
            ]},
            { id: 1848, term: "itinerary", definition: "[名] 旅程（表）", sentences: [
                { jp: "この行程はタイトすぎるようだ．", en_blanked: "This ( ) looks too tight.", answer: "itinerary" }
            ]},
            { id: 1849, term: "token", definition: "[名] ①（as a ー of）（～の）しるし（として） ②（バスなどで使われる）代用硬貨，トークン ③〈英〉商品引換券", sentences: [
                { jp: "私の感謝のしるしとして", en_blanked: "as a ( ) of my thanks", answer: "token" },
                { jp: "地下鉄（バス）用トークン", en_blanked: "a subway (bus) ( )", answer: "token" },
                { jp: "10,000円のギフト券", en_blanked: "a 10,000-yen gift ( )", answer: "token" }
            ]},
            { id: 1850, term: "detergent", definition: "[名] 洗剤", sentences: [
                { jp: "洗濯洗剤で洗う", en_blanked: "wash with laundry ( )", answer: "detergent" }
            ]},
            { id: 1851, term: "purchase", definition: "[他] ①～を購入する [名] ②購入（品）", sentences: [
                { jp: "ニューヨークでマンションを購入する", en_blanked: "( ) an apartment in N.Y.", answer: "purchase" },
                { jp: "高級車の購入", en_blanked: "the ( ) of a luxury car", answer: "purchase" }
            ]},
            { id: 1852, term: "dwell", definition: "[自] ①住む  ②（on ～）（～をくどくど）考える", sentences: [
                { jp: "洞窟に住む", en_blanked: "( ) in a cave", answer: "dwell" },
                { jp: "過去についてくどくど考える", en_blanked: "( ) on the past", answer: "dwell" }
            ]},
            { id: 1853, term: "juvenile", definition: "[形] 青少年の", sentences: [
                { jp: "青少年の非行", en_blanked: "( ) delinquency", answer: "juvenile" }
            ]},
            { id: 1854, term: "adolescent", definition: "[名] ①思春期の若者 [形] ②思春期の", sentences: [
                { jp: "内気な思春期の若者", en_blanked: "a shy ( )", answer: "adolescent" },
                { jp: "思春期の少年", en_blanked: "( ) boys", answer: "adolescent" }
            ]},
            { id: 1855, term: "initial", definition: "[形] ①最初の [名] ②頭文字，イニシャル", sentences: [
                { jp: "その病気の初期段階", en_blanked: "the ( ) stages of the disease", answer: "initial" },
                { jp: "彼女のイニシャルはA.N.です．", en_blanked: "Her ( ) are A. N.", answer: "initials" }
            ]},
            { id: 1856, term: "precede", definition: "[他] ～に先行する", sentences: [
                { jp: "英語では主語は動詞の前に来る．", en_blanked: "In English, the subject ( ) the verb.", answer: "precedes" }
            ]},
            { id: 1857, term: "phase", definition: "[名] 段階", sentences: [
                { jp: "チョウの一生の4つの段階", en_blanked: "four ( ) in the lifecycle of a butterfly", answer: "phases" }
            ]},
            { id: 1858, term: "priority", definition: "[名] 優先（事項）", sentences: [
                { jp: "安全が最優先だ", en_blanked: "Safety is our highest ( ).", answer: "priority" }
            ]},
            { id: 1859, term: "premise", definition: "[名] ①前提 ②（ーs）（建物を含めた）敷地", sentences: [
                { jp: "皆平等であるという前提", en_blanked: "the ( ) that everyone is equal", answer: "premise" },
                { jp: "敷地内は禁煙です．", en_blanked: "Smoking is not allowed on the ( ).", answer: "premises" }
            ]},
            { id: 1860, term: "legend", definition: "[名] ①伝説，言い伝え ②伝説的人物", sentences: [
                { jp: "伝説によると", en_blanked: "according to ( )", answer: "legend" },
                { jp: "ボクシングの生きた伝説（的人物）", en_blanked: "a living ( ) of boxing", answer: "legend" }
            ]},
            { id: 1861, term: "masterpiece", definition: "[名] 傑作", sentences: [
                { jp: "レオナルド・ダ・ヴィンチの傑作", en_blanked: "a ( ) by [×of] Leonardo da Vinci", answer: "masterpiece" }
            ]},
            { id: 1862, term: "ritual", definition: "[名] ①（宗教的）儀式 [形] ②儀式の", sentences: [
                { jp: "儀式を行う", en_blanked: "perform a ( )", answer: "ritual" },
                { jp: "儀式の舞踊", en_blanked: "( ) dances", answer: "ritual" }
            ]},
            { id: 1863, term: "worship", definition: "[名] ①崇拝，礼拝 [他] ②～を崇拝する [自] ③（神社などに）お参りする", sentences: [
                { jp: "崇拝の対象", en_blanked: "an object of ( )", answer: "worship" },
                { jp: "偶像を崇拝する", en_blanked: "( ) an idol", answer: "worship" },
                { jp: "神社でお参りする", en_blanked: "( ) at a shrine", answer: "worship" }
            ]},
            { id: 1864, term: "advent", definition: "[名] ①到来 ②（the A-）キリストの降誕", sentences: [
                { jp: "新技術の到来", en_blanked: "the ( ) of new technology", answer: "advent" },
                { jp: "降臨節", en_blanked: "the ( ) season", answer: "Advent" } 
            ]},
            { id: 1865, term: "swear", definition: "[自] ①誓う [他] ②罵る", sentences: [
                { jp: "聖書に（手をのせて）誓う", en_blanked: "( ) on the Bible", answer: "swear" },
                { jp: "彼女の夫を罵る", en_blanked: "( ) at her husband", answer: "swear" }
            ]},
            { id: 1866, term: "confess", definition: "[自] ①（to ～）（～を）白状する [他] ②～を認める", sentences: [
                { jp: "犯罪を白状する", en_blanked: "( ) to the crime", answer: "confess" },
                { jp: "無知を認める", en_blanked: "( ) my ignorance", answer: "confess" }
            ]},
            { id: 1867, term: "verbal", definition: "[形] 言葉による", sentences: [
                { jp: "言葉による意思疎通", en_blanked: "( ) communication", answer: "verbal" }
            ]},
            { id: 1868, term: "oral", definition: "[形] ①口述の ②口の", sentences: [
                { jp: "15分間の口述試験", en_blanked: "a 15-minute ( ) exam", answer: "oral" },
                { jp: "口腔（口の）外科", en_blanked: "( ) surgery", answer: "oral" }
            ]},
            { id: 1869, term: "eloquent", definition: "[形] 雄弁な", sentences: [
                { jp: "雄弁な演説をする", en_blanked: "make an ( ) speech", answer: "eloquent" }
            ]},
            { id: 1870, term: "linguistic", definition: "[形] 言語の，言語学の", sentences: [
                { jp: "子どもの言語能力", en_blanked: "a child's ( ) ability", answer: "linguistic" }
            ]},
            { id: 1871, term: "plot", definition: "[名] ①（小説，演劇などの）筋 ②悪だくみ，陰謀", sentences: [
                { jp: "その映画の筋", en_blanked: "the ( ) of the movie", answer: "plot" },
                { jp: "彼はその陰謀に荷担していた．", en_blanked: "He was involved in the ( ).", answer: "plot" }
            ]},
            { id: 1872, term: "draft", definition: "[名] ①下書き，草稿 [他] ②～を徴兵する [名] ③（-beer）生の（ビール）", sentences: [
                { jp: "スピーチの原稿を書く", en_blanked: "write a ( ) of my speech", answer: "draft" },
                { jp: "軍に徴兵される", en_blanked: "be ( ) into the army", answer: "drafted" },
                { jp: "生ビールを飲む", en_blanked: "drink ( ) beer", answer: "draft" }
            ]},
            { id: 1873, term: "statement", definition: "[名] ①述べたこと，声明 ②（給与などの）明細書", sentences: [
                { jp: "これらの記述は正しい．", en_blanked: "These ( ) are true.", answer: "statements" },
                { jp: "銀行取引明細書", en_blanked: "a bank ( )", answer: "statement" }
            ]},
            { id: 1874, term: "paradox", definition: "[名] 逆説", sentences: [
                { jp: "「急がば回れ」は一種の逆説だ．", en_blanked: "\"Make haste slowly\" is a kind of ( ).", answer: "paradox" }
            ]},
            { id: 1875, term: "slang", definition: "[名] （集合的に）俗語", sentences: [
                { jp: "「cool」は「nice」の俗語だ．", en_blanked: "\"Cool\" is ( ) for \"nice.\"", answer: "slang" }
            ]},
            { id: 1876, term: "riddle", definition: "[名] なぞなぞ，謎", sentences: [
                { jp: "このなぞなぞがわかるかな．", en_blanked: "Can you solve this ( )?", answer: "riddle" }
            ]},
            { id: 1877, term: "clarify", definition: "[他] ～を明らかにする", sentences: [
                { jp: "言いたいことを明確にします．", en_blanked: "Let me ( ) my point.", answer: "clarify" }
            ]},
            { id: 1878, term: "exhibit", definition: "[他] ①～を展示する ②～を示す [名] ③展示物，展覧会", sentences: [
                { jp: "ホールに展示されているポスター", en_blanked: "posters ( ) in the hall", answer: "exhibited" },
                { jp: "音楽の素晴らしい才能を見せる", en_blanked: "( ) a great talent for music", answer: "exhibit" },
                { jp: "恐竜の展示品", en_blanked: "dinosaur ( )", answer: "exhibits" }
            ]},
            { id: 1879, term: "portray", definition: "[他] ～を描く", sentences: [
                { jp: "利己的な人間としてその人物を描く", en_blanked: "( ) the character as a selfish person", answer: "portray" }
            ]},
            { id: 1880, term: "attribute", definition: "[他] ①（A to B）（A）を（B）のせいだとする [名] ②特性，属性", sentences: [
                { jp: "彼の長生きは毎日1杯のワインのおかげだと考える", en_blanked: "( ) his longevity to a glass of wine every day", answer: "attribute" },
                { jp: "偉大な指導者の資質を備えている", en_blanked: "have the ( ) of a great leader", answer: "attributes" }
            ]},
            { id: 1881, term: "console", definition: "[他] ～を慰める", sentences: [
                { jp: "嘆き悲しんでいるだちを慰める", en_blanked: "( ) a grieving friend", answer: "console" }
            ]},
            { id: 1882, term: "arouse", definition: "[他] ～を呼び起こす", sentences: [
                { jp: "そのタイトルが私たちの興味をかき立てた．", en_blanked: "The title ( ) our interest.", answer: "aroused" }
            ]},
            { id: 1883, term: "distract", definition: "[他] ①（注意，意識など）をそらす [他] ②～の気を紛らす", sentences: [
                { jp: "誰かが私の名前を呼ぶ声に気をそらされた.", en_blanked: "I was ( ) by someone calling my name.", answer: "distracted" },
                { jp: "私の悩みを気を紛らす", en_blanked: "( ) me from my worries", answer: "distract" }
            ]},
            { id: 1884, term: "plead", definition: "[自] ①（with ～）（～に）懇願する [他] ②～を申し立てる", sentences: [
                { jp: "彼に留まるように懇願する", en_blanked: "( ) with him to stay", answer: "plead" },
                { jp: "無罪を主張します．", en_blanked: "I ( ) not guilty.", answer: "plead" }
            ]},
            { id: 1885, term: "yearn", definition: "[自] ①切望する [他] ②～を切望する", sentences: [
                { jp: "自由を切望する", en_blanked: "( ) for freedom", answer: "yearn" },
                { jp: "パイロットになりたくて仕方ない（パイロットになることを切望する）", en_blanked: "( ) to be a pilot", answer: "yearn" }
            ]},
            { id: 1886, term: "long", definition: "[自] （for ～）（～を）切望する", sentences: [
                { jp: "平和を切望する", en_blanked: "( ) for peace", answer: "long" }
            ]},
            { id: 1887, term: "adore", definition: "[他] ～を熱愛している", sentences: [
                { jp: "マットは孫を溺愛している．", en_blanked: "Matt ( ) his grandchildren.", answer: "adores" }
            ]},
            { id: 1888, term: "utter", definition: "[他] ①（叫び声など）を発する [形] ②まったくの", sentences: [
                { jp: "びっくりして叫び声を発する", en_blanked: "( ) a cry of shock", answer: "utter" },
                { jp: "まったくのパニック状態で", en_blanked: "in an ( ) panic", answer: "utter" }
            ]},
            { id: 1889, term: "exclaim", definition: "[自] （驚き，怒りなどで）叫ぶ", sentences: [
                { jp: "「なんてことなの！」と彼女は叫んだ．", en_blanked: "\"Oh my God!\" she ( ).", answer: "exclaimed" }
            ]},
            { id: 1890, term: "lament", definition: "[他] ～を深く悲しむ，嘆く", sentences: [
                { jp: "指導者の死を深く悲しむ", en_blanked: "( ) the death of the leader", answer: "lament" }
            ]},
            { id: 1891, term: "shed", definition: "[他] ①（涙など）を流す ②（光）を当てる ③～を取り除く ④（ヘビなどが）（皮）を脱ぐ，(木が葉っぱ）を落とす", sentences: [
                { jp: "涙［血］を流す", en_blanked: "( ) tears [blood]", answer: "shed" },
                { jp: "問題を解明する（問題に光を当てる）", en_blanked: "( ) light on the problem", answer: "shed" },
                { jp: "悪い印象を払拭する", en_blanked: "( ) a bad image", answer: "shed" },
                { jp: "ヘビは定期的に脱皮する（皮を脱ぐ）．", en_blanked: "A snake regularly ( ) its skin.", answer: "sheds" }
            ]},
            { id: 1892, term: "resent", definition: "[他] ～に憤慨する", sentences: [
                { jp: "上司の無礼なふるまいに憤慨する", en_blanked: "( ) my boss's rude behavior", answer: "resent" }
            ]},
            { id: 1893, term: "dread", definition: "[他] ①～を恐れる [名] ②恐怖", sentences: [
                { jp: "歯医者に行くことを恐れる", en_blanked: "( ) going to the dentist", answer: "dread" },
                { jp: "深い恐怖心", en_blanked: "a deep sense of ( )", answer: "dread" }
            ]},
            { id: 1894, term: "startle", definition: "[他] ～を驚かせる", sentences: [
                { jp: "私は彼の声で驚いた．", en_blanked: "I was ( ) by his voice.", answer: "startled" }
            ]},
            { id: 1895, term: "thrill", definition: "[他] ①～をぞくぞく［わくわく］させる [名] ②スリル", sentences: [
                { jp: "彼女の演技は私をぞくぞくさせた．", en_blanked: "Her performance ( ) me.", answer: "thrilled" },
                { jp: "誕生日のサプライズに彼はわくわくした．", en_blanked: "His birthday surprise gave him a ( ).", answer: "thrill" }
            ]},
            { id: 1896, term: "humiliate", definition: "[他] ～に恥をかかせる", sentences: [
                { jp: "彼は友人の前で私に恥をかかせた．", en_blanked: "He ( ) me in front of my friends.", answer: "humiliated" }
            ]},
            { id: 1897, term: "blush", definition: "[自] ①赤面する [名] ②赤面", sentences: [
                { jp: "顔を赤らめ，顔をそらす", en_blanked: "( ) and look away", answer: "blush" },
                { jp: "彼の顔に赤面が現れた（赤面が彼の顔に現れた）．", en_blanked: "A ( ) came over his face.", answer: "blush" }
            ]},
            { id: 1898, term: "frown", definition: "[自] ①（on ～）（～に）眉をひそめる [名] ②しかめっ面", sentences: [
                { jp: "彼の行動に眉をひそめる", en_blanked: "( ) on his behavior", answer: "frown" },
                { jp: "困惑して彼女にしかめる", en_blanked: "look at her with a puzzled ( )", answer: "frown" }
            ]},
            { id: 1899, term: "dismay", definition: "[他] ①～を狼狽させる [名] ②狼狽", sentences: [
                { jp: "修理代に狼狽した（狼狽させられた）．", en_blanked: "I was ( ) at the cost of the repair.", answer: "dismayed" },
                { jp: "狼狽したことに", en_blanked: "to my ( )", answer: "dismay" }
            ]},
            { id: 1900, term: "bewilder", definition: "[他] （通例，受け身）～を当惑させる", sentences: [
                { jp: "終わりのない事務処理に当惑した（当惑させられた）．", en_blanked: "I was ( ) by endless paperwork.", answer: "bewildered" }
            ]},
            { id: 1901, term: "perplex", definition: "[他] ～を困惑させる", sentences: [
                { jp: "彼女の奇妙な癖は私を困惑させた．", en_blanked: "Her strange habit ( ) me.", answer: "perplexed" }
            ]},
            { id: 1902, term: "disgust", definition: "[他] ①～に嫌悪を抱かせる [名] ②嫌悪", sentences: [
                { jp: "彼の態度はいつも私をむかつかせる．", en_blanked: "His attitudes always ( ) me.", answer: "disgust" },
                { jp: "彼の振る舞いに嫌悪感を抱く", en_blanked: "feel ( ) at his behavior", answer: "disgust" }
            ]},
            { id: 1903, term: "despise", definition: "[他] ～を軽蔑する", sentences: [
                { jp: "うわさ話ばかりしているため，近所の人たちを軽蔑する", en_blanked: "( ) the neighbors because they are always gossiping", answer: "despise" }
            ]},
            { id: 1904, term: "furious", definition: "[形] 激怒した", sentences: [
                { jp: "彼が赤ちゃんを車の中に放置したことに対して激怒した．", en_blanked: "I was ( ) with him for leaving the baby alone in the car.", answer: "furious" }
            ]},
            { id: 1905, term: "intimate", definition: "[形] ①親密な ②（知識などが）深い", sentences: [
                { jp: "親密な会話", en_blanked: "an ( ) conversation", answer: "intimate" },
                { jp: "彼の日本に関する深い知識", en_blanked: "his ( ) knowledge of Japan", answer: "intimate" }
            ]},
            { id: 1906, term: "intriguing", definition: "[形] 興味深い", sentences: [
                { jp: "興味深い結果", en_blanked: "( ) results", answer: "intriguing" }
            ]},
            { id: 1907, term: "conscience", definition: "[名] 良心", sentences: [
                { jp: "良心に従う", en_blanked: "follow my ( )", answer: "conscience" }
            ]},
            { id: 1908, term: "self-esteem", definition: "[名] 自尊心", sentences: [
                { jp: "自尊心を高める", en_blanked: "build my ( )", answer: "self-esteem" }
            ]},
            { id: 1909, term: "mercy", definition: "[名] ①慈悲，情け ②幸運", sentences: [
                { jp: "慈悲を乞う", en_blanked: "beg for ( )", answer: "mercy" },
                { jp: "シートベルトをしていたのは幸いだった．", en_blanked: "It was a ( ) that we had seat belts.", answer: "mercy" }
            ]},
            { id: 1910, term: "aspiration", definition: "[名] 熱望", sentences: [
                { jp: "平和への望み", en_blanked: "( ) for peace", answer: "aspirations" }
            ]},
            { id: 1911, term: "grief", definition: "[名] （人の死などに対する）深い悲しみ", sentences: [
                { jp: "グレッグは彼女の死に対して深い悲しみに暮れている．", en_blanked: "Greg is in deep ( ) over her death.", answer: "grief" }
            ]},
            { id: 1912, term: "distress", definition: "[名] ①苦しみ，苦悩 [他] ②～を苦しめる", sentences: [
                { jp: "ヘンリーはひどく苦しい状況にいる．", en_blanked: "Henry is in great ( ).", answer: "distress" },
                { jp: "そのニュースは本当に辛かった（私を苦しめた）．", en_blanked: "The news deeply ( ) me.", answer: "distressed" }
            ]},
            { id: 1913, term: "apprehension", definition: "[名] ①不安 ②逮捕", sentences: [
                { jp: "不安で気分が悪い", en_blanked: "feel sick with ( )", answer: "apprehension" },
                { jp: "密輸業者の逮捕", en_blanked: "the ( ) of smugglers", answer: "apprehension" }
            ]},
            { id: 1914, term: "melancholy", definition: "[名] 憂うつ，ふさぎ込み", sentences: [
                { jp: "アンジーはふさぎ込んでいた．", en_blanked: "Angie was lost in ( ).", answer: "melancholy" }
            ]},
            { id: 1915, term: "contempt", definition: "[名] 軽蔑", sentences: [
                { jp: "ブランドの服に夢中になっている人々を軽蔑している", en_blanked: "feel ( ) for people obsessed with designer clothes", answer: "contempt" }
            ]},
            { id: 1916, term: "insult", definition: "[名] ①侮辱 [他] ②～を侮辱する", sentences: [
                { jp: "彼女の態度を侮辱と受け取る", en_blanked: "take her attitude as an ( )", answer: "insult" },
                { jp: "誰も賛同してくれなかったので侮辱されたと感じた．", en_blanked: "I felt ( ) when nobody agreed with me.", answer: "insulted" }
            ]},
            { id: 1917, term: "nuisance", definition: "[名] 迷惑（になるもの）", sentences: [
                { jp: "本当に迷惑なもの", en_blanked: "a real ( )", answer: "nuisance" }
            ]},
            { id: 1918, term: "menace", definition: "[名] （to ～）（～にとっての）厄介なもの［人］，脅威", sentences: [
                { jp: "この酔って暴れる人は周りの者にとって厄介な存在だ．", en_blanked: "This drunk, violent man is a ( ) to those around him.", answer: "menace" }
            ]},
            { id: 1919, term: "verge", definition: "[名] ①瀬戸際，寸前 ②道路べり，（場所の）縁", sentences: [
                { jp: "アンは泣き出す寸前だった．", en_blanked: "Anne was on the ( ) of tears.", answer: "verge" },
                { jp: "その湖の縁", en_blanked: "the ( ) of the lake", answer: "verge" },
            ]},
            { id: 1920, term: "incentive", definition: "[名] 励み", sentences: [
                { jp: "一生懸命働く励み", en_blanked: "an ( ) to work hard", answer: "incentive" }
            ]},
            { id: 1921, term: "outcome", definition: "[名] 結果", sentences: [
                { jp: "この選挙の結果を予想する", en_blanked: "predict the ( ) of this election", answer: "outcome" }
            ]},
            { id: 1922, term: "thorough", definition: "[形] 完全な，徹底的な", sentences: [
                { jp: "家の大（徹底的な）掃除をする", en_blanked: "do a ( ) cleaning of the house", answer: "thorough" }
            ]},
            { id: 1923, term: "adequate", definition: "[形] 十分な，適切な", sentences: [
                { jp: "彼の給料は家族を養うに十分だ．", en_blanked: "His salary is ( ) to support his family.", answer: "adequate" }
            ]},
            { id: 1924, term: "overall", definition: "[形] ①全体的な，全面的な [副] ②全体的に，全面的に", sentences: [
                { jp: "全体的な見積もり", en_blanked: "an ( ) estimate", answer: "overall" },
                { jp: "全体的に見て，物価はまだ高い．", en_blanked: "( ), prices are still high.", answer: "Overall" }
            ]},
            { id: 1925, term: "ultimate", definition: "[形] 究極の，最終の", sentences: [
                { jp: "私たちの最終的な目標", en_blanked: "our ( ) goal", answer: "ultimate" }
            ]},
            { id: 1926, term: "genuine", definition: "[形] ①（感情が）心からの ②（絵画などが）本物の", sentences: [
                { jp: "エジソンに対する心からの敬意", en_blanked: "a ( ) respect for Edison", answer: "genuine" },
                { jp: "本物のピカソ（の作品）", en_blanked: "a ( ) Picasso", answer: "genuine" }
            ]},
            { id: 1927, term: "radical", definition: "[形] ①根本的な，抜本的な ②過激な", sentences: [
                { jp: "抜本的な改革の必要性", en_blanked: "the need for ( ) reform", answer: "radical" },
                { jp: "過激な雑誌", en_blanked: "a ( ) magazine", answer: "radical" }
            ]},
            { id: 1928, term: "drastic", definition: "[形] 抜本的な，思い切った", sentences: [
                { jp: "抜本的な措置を講じる", en_blanked: "take ( ) measures", answer: "drastic" }
            ]},
            { id: 1929, term: "trivial", definition: "[形] ささいな", sentences: [
                { jp: "そんなささいなことで悩むな", en_blanked: "Don't worry about such a ( ) matter.", answer: "trivial" }
            ]},
            { id: 1930, term: "virtually", definition: "[副] 事実上", sentences: [
                { jp: "それは事実上不可能だ．", en_blanked: "That is ( ) impossible.", answer: "virtually" }
            ]},
            { id: 1931, term: "abruptly", definition: "[副] 不意に，突然", sentences: [
                { jp: "前の車が不意に止まった．", en_blanked: "The car in front stopped ( ).", answer: "abruptly" }
            ]},
            { id: 1932, term: "deliberately", definition: "[副] ①故意に ②慎重に", sentences: [
                { jp: "手紙を故意に机の上に置く", en_blanked: "leave the letter on the desk ( ).", answer: "deliberately" },
                { jp: "ゆっくりと慎重に話す", en_blanked: "speak slowly and ( ).", answer: "deliberately" }
            ]},
            { id: 1933, term: "hence", definition: "[副] だから，それゆえに", sentences: [
                { jp: "道路が凍っていた．それゆえ，車の運転は危険だった．", en_blanked: "The roads were icy; ( ) driving was not safe.", answer: "hence" }
            ]},
            { id: 1934, term: "namely", definition: "[副] すなわち", sentences: [
                { jp: "2つの基本的な問題．すなわち時間とお金．", en_blanked: "two basic problems; ( ), time and money", answer: "namely" }
            ]},
            { id: 1935, term: "whereas", definition: "[接] ～だが一方", sentences: [
                { jp: "トムは無口だが一方，彼の弟はかなりおしゃべりだ．", en_blanked: "Tom is quiet, ( ) his brother is rather talkative.", answer: "whereas" }
            ]}
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
