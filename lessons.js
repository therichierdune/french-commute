// 강의 데이터
// - fr: 프랑스어, pron: 한글 발음 힌트(대략), mean/ko: 뜻
// - summary: 다음 강의 맨 처음에 "지난 시간 요약"으로 보여 줄 2~3줄.
// - section type: text / words / grammar / conj / tip / quiz

const LESSONS = [
  // ───────────── 1강 ─────────────
  {
    title: "하루를 여는 인사말",
    goal: "아침·저녁 인사와 '고맙습니다', '죄송합니다'를 말할 수 있어요.",
    summary: [
      "낮 Bonjour, 저녁 Bonsoir, 친구끼리 Salut.",
      "고맙습니다 Merci, 죄송합니다·저기요 Excusez-moi / Pardon.",
      "프랑스어는 단어 끝 자음을 대부분 읽지 않아요 (Salut → '쌀뤼')."
    ],
    sections: [
      {
        type: "text",
        title: "오늘 할 일",
        body: "하루에 가장 많이 쓰는 인사말 8개를 익혀요. 🔊 버튼을 눌러 소리를 듣고, 작게 따라 말해 보세요. 대괄호 [ ] 안의 한글은 대략적인 발음이에요. 진짜 소리는 🔊로 확인하세요!"
      },
      {
        type: "words",
        title: "인사말 8개",
        items: [
          { fr: "Bonjour", pron: "봉주르", mean: "안녕하세요 (아침~낮)", note: "가게에 들어갈 때도 꼭 해요" },
          { fr: "Bonsoir", pron: "봉수아르", mean: "안녕하세요 (저녁)" },
          { fr: "Salut", pron: "쌀뤼", mean: "안녕 (친구끼리)", note: "만날 때·헤어질 때 둘 다 써요" },
          { fr: "Merci", pron: "메르시", mean: "고맙습니다" },
          { fr: "Merci beaucoup", pron: "메르시 보꾸", mean: "정말 고맙습니다" },
          { fr: "Excusez-moi", pron: "엑스뀌제 무아", mean: "죄송합니다 / 저기요", note: "점원을 부를 때도 써요" },
          { fr: "Au revoir", pron: "오 르부아르", mean: "안녕히 가세요" },
          { fr: "Bonne nuit", pron: "본 뉘", mean: "안녕히 주무세요" }
        ]
      },
      {
        type: "tip",
        body: "프랑스어는 <b>단어 끝의 자음을 대부분 읽지 않아요.</b> Salut의 t, beaucoup의 p가 소리 나지 않는 이유예요. 마치 '묵음 글자'가 꼬리에 붙어 있는 것처럼 생각하세요. 단, c·r·f·l은 끝에 와도 읽는 경우가 많아요 (Bonjou<b>r</b>, Merc<b>i</b>)."
      },
      {
        type: "dialogue",
        title: "오늘의 회화",
        scene: "출근길, 단골 카페에서",
        lines: [
          { who: "민지", fr: "Bonjour !", pron: "봉주르", ko: "안녕하세요!" },
          { who: "점원", fr: "Bonjour !", pron: "봉주르", ko: "안녕하세요!" },
          { who: "민지", fr: "Merci beaucoup !", pron: "메르시 보꾸", ko: "(커피를 받고) 정말 고맙습니다!" },
          { who: "점원", fr: "Au revoir !", pron: "오 르부아르", ko: "안녕히 가세요!" }
        ]
      },
      { type: "drill" },
      {
        type: "quiz",
        items: [
          { q: "저녁에 퇴근하며 만난 이웃에게 하는 인사는?", options: ["Bonjour", "Bonsoir", "Bonne nuit"], answer: 1, explain: "저녁 인사는 Bonsoir예요." },
          { q: "'Salut'의 마지막 t는 어떻게 읽을까요?", options: ["'트'로 읽는다", "읽지 않는다", "'드'로 읽는다"], answer: 1, explain: "끝 자음은 대부분 묵음이라 '쌀뤼'예요." },
          { q: "카페에서 점원을 부를 때 쓰는 말은?", options: ["Au revoir", "Excusez-moi", "Salut"], answer: 1, explain: "Excusez-moi는 '죄송합니다'와 '저기요' 둘 다 돼요." },
          { q: "'Merci beaucoup'의 뜻은?", options: ["안녕히 가세요", "죄송합니다", "정말 고맙습니다"], answer: 2, explain: "Merci(고마워요) + beaucoup(많이)!" }
        ]
      }
    ]
  },

  // ───────────── 2강 ─────────────
  {
    title: "자기소개 — Je m'appelle ○○",
    goal: "'제 이름은 ○○입니다', '저는 한국인입니다'로 나를 소개할 수 있어요.",
    summary: [
      "Je m'appelle ○○ = 제 이름은 ○○입니다.",
      "Je suis ○○ = 저는 ○○입니다. 여자는 단어 끝에 e를 붙여요 (coréen → coréenne).",
      "첫 만남: Enchanté(e) = 반갑습니다."
    ],
    sections: [
      {
        type: "words",
        title: "오늘의 단어",
        items: [
          { fr: "je", pron: "주", mean: "나, 저" },
          { fr: "Enchanté / Enchantée", pron: "엉셩떼", mean: "반갑습니다 (처음 만났을 때)", note: "말하는 사람이 여자면 끝에 e (발음은 같아요)" },
          { fr: "Je m'appelle…", pron: "주 마뻴", mean: "제 이름은 ~입니다" },
          { fr: "coréen / coréenne", pron: "꼬레앙 / 꼬레엔", mean: "한국인 (남 / 여)" },
          { fr: "employé / employée", pron: "엉쁠루아이에", mean: "회사원 (남 / 여)" },
          { fr: "étudiant / étudiante", pron: "에뛰디엉 / 에뛰디엉뜨", mean: "학생 (남 / 여)" },
          { fr: "oui / non", pron: "위 / 농", mean: "네 / 아니요" }
        ]
      },
      {
        type: "grammar",
        title: "Je m'appelle / Je suis",
        body: "자기소개에 필요한 틀은 딱 두 개예요.<br>· <b>Je m'appelle</b> + 이름 = 제 이름은 ~입니다<br>· <b>Je suis</b> + 국적·직업 = 저는 ~입니다<br>프랑스어는 국적·직업 앞에 '한 명의' 같은 말(관사)을 붙이지 않아요.",
        examples: [
          { fr: "Je m'appelle Minji.", pron: "주 마뻴 민지", ko: "제 이름은 민지입니다." },
          { fr: "Je suis coréenne.", pron: "주 쒸 꼬레엔", ko: "저는 한국인입니다. (여자)" },
          { fr: "Je suis employé.", pron: "주 쒸 엉쁠루아이에", ko: "저는 회사원입니다. (남자)" },
          { fr: "Enchanté !", pron: "엉셩떼", ko: "반갑습니다!" }
        ]
      },
      {
        type: "tip",
        body: "프랑스어 단어에는 <b>남자 모양 / 여자 모양</b>이 있어요. 기본형 끝에 <b>e</b>를 붙이면 여자 모양이 돼요. 옷에 리본을 하나 다는 느낌이에요. coréen → coréenn<b>e</b>, étudiant → étudiant<b>e</b>. e가 붙으면 앞의 묵음 자음이 살아나서 소리가 달라지기도 해요 (étudian<b>t</b>e → '뜨')."
      },
      {
        type: "dialogue",
        title: "오늘의 회화",
        scene: "회사에 새로 온 동료 폴과 인사해요",
        lines: [
          { who: "폴", fr: "Bonjour ! Je m'appelle Paul.", pron: "봉주르 주 마뻴 뽈", ko: "안녕하세요! 제 이름은 폴이에요." },
          { who: "민지", fr: "Enchantée ! Je m'appelle Minji.", pron: "엉셩떼 주 마뻴 민지", ko: "반가워요! 제 이름은 민지예요." },
          { who: "폴", fr: "Enchanté !", pron: "엉셩떼", ko: "반가워요!" },
          { who: "민지", fr: "Je suis coréenne. Je suis employée.", pron: "주 쒸 꼬레엔 주 쒸 엉쁠루아이에", ko: "저는 한국인이에요. 회사원이에요." }
        ]
      },
      { type: "drill" },
      {
        type: "quiz",
        items: [
          { q: "'Je m'appelle Jisu'의 뜻은?", options: ["저는 지수를 좋아해요", "제 이름은 지수입니다", "지수는 학생입니다"], answer: 1, explain: "Je m'appelle = 제 이름은 ~입니다." },
          { q: "여성이 '저는 학생입니다'라고 할 때는?", options: ["Je suis étudiant.", "Je suis étudiante.", "Je m'appelle étudiante."], answer: 1, explain: "여성이면 끝에 e를 붙여 étudiante." },
          { q: "처음 만난 사람에게 '반갑습니다'는?", options: ["Enchanté", "Au revoir", "Bonne nuit"], answer: 0, explain: "Enchanté(e) = 반갑습니다." },
          { q: "'non'의 뜻은?", options: ["네", "아니요", "고맙습니다"], answer: 1, explain: "oui = 네, non = 아니요." }
        ]
      }
    ]
  },

  // ───────────── 3강 ─────────────
  {
    title: "être 동사 — 나는, 너는, 그는 ~이다",
    goal: "'~이다'를 뜻하는 être를 주어 6개에 맞게 바꿔 말할 수 있어요.",
    summary: [
      "être(~이다): je suis, tu es, il/elle est, nous sommes, vous êtes, ils/elles sont.",
      "tu = 친한 사이의 '너', vous = 처음 보는 사람·윗사람에게 쓰는 '당신' (+ '너희').",
      "C'est ~ = 이것은(그건) ~이에요."
    ],
    sections: [
      {
        type: "text",
        title: "동사가 옷을 갈아입어요",
        body: "프랑스어 동사는 주어가 누구냐에 따라 모양이 바뀌어요. 같은 사람이 회사·집·운동할 때 옷을 갈아입는 것과 비슷해요. 오늘은 가장 중요한 동사 <b>être</b>(~이다)의 옷 6벌을 볼게요."
      },
      {
        type: "words",
        title: "오늘의 단어",
        items: [
          { fr: "un ami / une amie", pron: "앙 나미 / 윈 아미", mean: "친구 (남 / 여)" },
          { fr: "un collègue", pron: "앙 꼴레그", mean: "동료" },
          { fr: "le bureau", pron: "르 뷔로", mean: "사무실, 책상" },
          { fr: "Et toi ?", pron: "에 뚜아", mean: "너는? (되물을 때)" },
          { fr: "C'est…", pron: "쎄", mean: "이것은(그건) ~이에요" }
        ]
      },
      {
        type: "conj",
        title: "être 변화표",
        verb: "être [에트르] = ~이다",
        items: [
          { p: "je", f: "suis", pron: "주 쒸", ko: "나는 ~이다" },
          { p: "tu", f: "es", pron: "뛰 에", ko: "너는 ~이다" },
          { p: "il / elle", f: "est", pron: "일 레 / 엘 레", ko: "그는 / 그녀는 ~이다" },
          { p: "nous", f: "sommes", pron: "누 쏨", ko: "우리는 ~이다" },
          { p: "vous", f: "êtes", pron: "부 제뜨", ko: "당신은 / 너희는 ~이다" },
          { p: "ils / elles", f: "sont", pron: "일 쏭 / 엘 쏭", ko: "그들은 ~이다" }
        ]
      },
      {
        type: "grammar",
        title: "예문으로 익히기",
        body: "앞 단어 끝 자음과 뒤 단어 첫 모음이 이어서 소리 나는 걸 <b>연음(liaison)</b>이라고 해요. vous êtes가 '부 제뜨'로 들리는 이유예요.",
        examples: [
          { fr: "Tu es étudiant ?", pron: "뛰 에 에뛰디엉", ko: "너 학생이야?" },
          { fr: "Elle est coréenne.", pron: "엘 레 꼬레엔", ko: "그녀는 한국인이에요." },
          { fr: "Nous sommes collègues.", pron: "누 쏨 꼴레그", ko: "우리는 동료예요." },
          { fr: "C'est mon bureau.", pron: "쎄 몽 뷔로", ko: "여기가 제 사무실이에요." }
        ]
      },
      {
        type: "tip",
        body: "<b>tu</b>와 <b>vous</b>는 한국어의 반말·존댓말과 비슷해요. 처음 만난 사람, 가게 점원, 회사 윗사람에게는 <b>vous</b>를 쓰면 안전해요. 상대가 tu로 말해 오면 그때 tu로 바꿔도 돼요."
      },
      {
        type: "dialogue",
        title: "오늘의 회화",
        scene: "점심시간, 폴과 이야기해요",
        lines: [
          { who: "민지", fr: "Paul, tu es étudiant ?", pron: "뽈 뛰 에 에뛰디엉", ko: "폴, 너 학생이야?" },
          { who: "폴", fr: "Non. Je suis employé. Et toi ?", pron: "농 주 쒸 엉쁠루아이에 에 뚜아", ko: "아니. 나는 회사원이야. 너는?" },
          { who: "민지", fr: "Je suis employée aussi.", pron: "주 쒸 엉쁠루아이에 오씨", ko: "나도 회사원이야. (aussi = ~도)" },
          { who: "폴", fr: "Nous sommes collègues !", pron: "누 쏨 꼴레그", ko: "우리는 동료구나!" }
        ]
      },
      { type: "drill" },
      {
        type: "quiz",
        items: [
          { q: "'nous ___ coréens' 빈칸에 들어갈 말은?", options: ["sont", "sommes", "êtes"], answer: 1, explain: "nous(우리) 짝꿍은 sommes." },
          { q: "처음 보는 손님에게 쓰는 '당신'은?", options: ["tu", "vous", "il"], answer: 1, explain: "정중하게는 vous!" },
          { q: "'Il est employé'의 뜻은?", options: ["그는 회사원이에요", "나는 회사원이에요", "그들은 회사원이에요"], answer: 0, explain: "il = 그, est = ~이다." },
          { q: "'C'est'의 뜻은?", options: ["나는 ~이다", "이것은(그건) ~이다", "~이 아니다"], answer: 1, explain: "C'est ~ = 이것은 ~이에요. 정말 자주 써요." }
        ]
      }
    ]
  },

  // ───────────── 4강 ─────────────
  {
    title: "명사의 성별과 관사 — un, une, le, la",
    goal: "명사 앞에 붙는 관사로 남성·여성 명사를 구별할 수 있어요.",
    summary: [
      "모든 명사에 남성·여성이 있어요. 관사와 한 세트로 외우기!",
      "'하나의' 남성 un, 여성 une / '그' 남성 le, 여성 la, 복수 les.",
      "모음 앞의 le·la는 l'로 줄어요 (l'eau = 물)."
    ],
    sections: [
      {
        type: "text",
        title: "단어에도 성별이 있어요",
        body: "프랑스어는 사람뿐 아니라 <b>물건에도 남성·여성</b>이 있어요. 커피는 남성, 바게트는 여성! 이유는 없으니 단어를 외울 때 관사를 '이름표'처럼 꼭 같이 외우세요."
      },
      {
        type: "words",
        title: "오늘의 단어 (관사와 함께!)",
        items: [
          { fr: "un café", pron: "앙 꺄페", mean: "커피 한 잔 (남성)" },
          { fr: "une baguette", pron: "윈 바게뜨", mean: "바게트 하나 (여성)" },
          { fr: "un livre", pron: "앙 리브르", mean: "책 한 권 (남성)" },
          { fr: "une voiture", pron: "윈 부아뛰르", mean: "자동차 한 대 (여성)" },
          { fr: "le métro", pron: "르 메트로", mean: "지하철 (남성)" },
          { fr: "la maison", pron: "라 메종", mean: "집 (여성)" },
          { fr: "l'eau", pron: "로", mean: "물 (여성)", note: "la + eau → l'eau" },
          { fr: "les amis", pron: "레 자미", mean: "친구들 (복수)", note: "복수는 남녀 상관없이 les" }
        ]
      },
      {
        type: "grammar",
        title: "관사 한눈에 보기",
        body: "· <b>un / une</b> = 어떤, 하나의 (처음 말할 때)<br>· <b>le / la</b> = 그 (이미 아는 것, 일반적인 것)<br>· <b>les</b> = 그것들 (복수)<br>· 모음·h로 시작하면 le, la → <b>l'</b>",
        examples: [
          { fr: "C'est un café.", pron: "쎄 땅 꺄페", ko: "이건 커피예요." },
          { fr: "Le café est bon.", pron: "르 꺄페 에 봉", ko: "그 커피는 맛있어요." },
          { fr: "Je prends le métro.", pron: "주 프렁 르 메트로", ko: "저는 지하철을 타요." }
        ]
      },
      {
        type: "dialogue",
        title: "오늘의 회화",
        scene: "아침, 민지 책상 위를 보며",
        lines: [
          { who: "폴", fr: "C'est un livre ?", pron: "쎄 땅 리브르", ko: "이거 책이야?" },
          { who: "민지", fr: "Oui, c'est un livre.", pron: "위 쎄 땅 리브르", ko: "응, 책이야." },
          { who: "폴", fr: "Et le café ?", pron: "에 르 꺄페", ko: "그 커피는?" },
          { who: "민지", fr: "Le café est bon !", pron: "르 꺄페 에 봉", ko: "그 커피 맛있어!" }
        ]
      },
      { type: "drill" },
      {
        type: "quiz",
        items: [
          { q: "baguette 앞에 붙는 '하나의'는?", options: ["un", "une", "le"], answer: 1, explain: "baguette는 여성 → une baguette." },
          { q: "'물'을 관사와 함께 쓰면?", options: ["la eau", "le eau", "l'eau"], answer: 2, explain: "모음 앞이라 l'eau로 줄여요." },
          { q: "'친구들' 앞의 관사는?", options: ["les", "la", "un"], answer: 0, explain: "복수는 les." },
          { q: "'le métro'의 뜻은?", options: ["자동차", "지하철", "집"], answer: 1, explain: "출근길 단골 단어 le métro!" }
        ]
      }
    ]
  },

  // ───────────── 5강 ─────────────
  {
    title: "avoir 동사와 숫자 1~10",
    goal: "'~을 가지고 있다'를 뜻하는 avoir와 숫자 1~10을 말할 수 있어요.",
    summary: [
      "avoir(가지다): j'ai, tu as, il/elle a, nous avons, vous avez, ils/elles ont.",
      "나이는 '가지다'로 말해요: J'ai 30 ans = 저는 30살이에요.",
      "숫자 1~10: un deux trois quatre cinq six sept huit neuf dix."
    ],
    sections: [
      {
        type: "conj",
        title: "avoir 변화표",
        verb: "avoir [아부아르] = 가지다, 있다",
        items: [
          { p: "j'", f: "ai", pron: "제", ko: "나는 가지고 있다", },
          { p: "tu", f: "as", pron: "뛰 아" },
          { p: "il / elle", f: "a", pron: "일 라 / 엘 라" },
          { p: "nous", f: "avons", pron: "누 자봉" },
          { p: "vous", f: "avez", pron: "부 자베" },
          { p: "ils / elles", f: "ont", pron: "일 종 / 엘 종" }
        ]
      },
      {
        type: "tip",
        body: "je 다음에 모음이 오면 <b>j'</b>로 줄어요. je ai가 아니라 <b>j'ai</b>! 두 모음이 부딪히는 걸 싫어해서 하나를 빼고 붙여 버리는 거예요. 4강의 l'eau와 같은 원리예요."
      },
      {
        type: "words",
        title: "숫자 1~10",
        items: [
          { fr: "un · deux · trois", pron: "앙 · 되 · 트루아", mean: "1 · 2 · 3" },
          { fr: "quatre · cinq · six", pron: "꺄트르 · 쌩끄 · 씨스", mean: "4 · 5 · 6" },
          { fr: "sept · huit · neuf", pron: "쎄뜨 · 위뜨 · 뇌프", mean: "7 · 8 · 9" },
          { fr: "dix", pron: "디스", mean: "10" },
          { fr: "un an / ans", pron: "앙 넝 / 엉", mean: "~살, ~년" }
        ]
      },
      {
        type: "grammar",
        title: "avoir로 말하기",
        body: "한국어로는 '~이 있어요', '~살이에요'라고 하는 표현을 프랑스어는 <b>avoir(가지다)</b>로 말해요. 나이도 '30년을 가지고 있다'라고 표현하는 거죠.",
        examples: [
          { fr: "J'ai un frère.", pron: "제 앙 프레르", ko: "저는 남자 형제가 한 명 있어요." },
          { fr: "J'ai trente ans.", pron: "제 트렁 떵", ko: "저는 30살이에요." },
          { fr: "Vous avez un stylo ?", pron: "부 자베 앙 스띨로", ko: "펜 있으세요?" }
        ]
      },
      {
        type: "dialogue",
        title: "오늘의 회화",
        scene: "회의 시작 전, 펜이 없어요",
        lines: [
          { who: "폴", fr: "Tu as un stylo ?", pron: "뛰 아 앙 스띨로", ko: "너 펜 있어?" },
          { who: "민지", fr: "Oui, j'ai deux stylos.", pron: "위 제 되 스띨로", ko: "응, 펜 두 개 있어." },
          { who: "폴", fr: "Merci !", pron: "메르시", ko: "고마워!" },
          { who: "민지", fr: "Vous avez un stylo, Julie ?", pron: "부 자베 앙 스띨로 쥘리", ko: "쥘리 씨, 펜 있으세요?" }
        ]
      },
      { type: "drill" },
      {
        type: "quiz",
        items: [
          { q: "'je + ai'는 어떻게 쓸까요?", options: ["je ai", "j'ai", "jai"], answer: 1, explain: "모음 앞 je는 j'로 줄여요." },
          { q: "'vous ___ un stylo ?' 빈칸은?", options: ["avez", "avons", "ont"], answer: 0, explain: "vous의 짝꿍은 avez." },
          { q: "숫자 'huit'는?", options: ["6", "8", "9"], answer: 1, explain: "huit [위뜨] = 8." },
          { q: "프랑스어로 나이를 말할 때 쓰는 동사는?", options: ["être", "avoir", "aller"], answer: 1, explain: "J'ai 30 ans처럼 avoir를 써요." }
        ]
      }
    ]
  },

  // ───────────── 6강 ─────────────
  {
    title: "부정문 — ne … pas",
    goal: "'~이 아니에요', '~하지 않아요'를 말할 수 있어요.",
    summary: [
      "부정은 동사를 ne와 pas로 샌드위치: Je ne suis pas…",
      "모음 앞 ne → n': Je n'ai pas…",
      "말할 때는 ne를 자주 빼요: C'est pas grave (괜찮아요)."
    ],
    sections: [
      {
        type: "words",
        title: "오늘의 단어",
        items: [
          { fr: "fatigué / fatiguée", pron: "파띠게", mean: "피곤한 (남 / 여)" },
          { fr: "content / contente", pron: "꽁떵 / 꽁떵뜨", mean: "기쁜, 만족한" },
          { fr: "en retard", pron: "엉 르따르", mean: "늦은, 지각한" },
          { fr: "malade", pron: "말라드", mean: "아픈" },
          { fr: "très", pron: "트레", mean: "아주, 매우" },
          { fr: "Ce n'est pas grave.", pron: "쓰 네 빠 그라브", mean: "괜찮아요 (별일 아니에요)" }
        ]
      },
      {
        type: "grammar",
        title: "ne + 동사 + pas",
        body: "부정문은 동사를 <b>ne</b>와 <b>pas</b> 사이에 끼워요. 동사를 빵 두 장 사이에 넣는 <b>샌드위치</b>를 떠올리세요! 🥪<br>· Je <b>suis</b> fatigué → Je <b>ne</b> suis <b>pas</b> fatigué<br>· 모음 앞에선 ne → <b>n'</b>",
        examples: [
          { fr: "Je ne suis pas en retard.", pron: "주 느 쒸 빠 엉 르따르", ko: "저 안 늦었어요." },
          { fr: "Il n'est pas malade.", pron: "일 네 빠 말라드", ko: "그는 아프지 않아요." },
          { fr: "Je n'ai pas de voiture.", pron: "주 네 빠 드 부아뛰르", ko: "저는 차가 없어요." },
          { fr: "Elle est très contente.", pron: "엘 레 트레 꽁떵뜨", ko: "그녀는 아주 기뻐요." }
        ]
      },
      {
        type: "tip",
        body: "'~이 없다'고 할 때는 un, une가 <b>de</b>로 바뀌어요. J'ai <b>une</b> voiture → Je n'ai pas <b>de</b> voiture. 지금은 '없다 = pas de'로 통째로 기억하면 충분해요."
      },
      {
        type: "dialogue",
        title: "오늘의 회화",
        scene: "폴이 회의에 늦게 들어왔어요",
        lines: [
          { who: "폴", fr: "Pardon, je suis en retard !", pron: "빠르동 주 쒸 엉 르따르", ko: "미안, 나 늦었어!" },
          { who: "민지", fr: "Ce n'est pas grave.", pron: "쓰 네 빠 그라브", ko: "괜찮아." },
          { who: "폴", fr: "Tu es fatiguée ?", pron: "뛰 에 파띠게", ko: "너 피곤해?" },
          { who: "민지", fr: "Non, je ne suis pas fatiguée.", pron: "농 주 느 쒸 빠 파띠게", ko: "아니, 안 피곤해." }
        ]
      },
      { type: "drill" },
      {
        type: "quiz",
        items: [
          { q: "'Je suis fatigué'를 부정문으로 바꾸면?", options: ["Je pas suis fatigué.", "Je ne suis pas fatigué.", "Ne je suis pas fatigué."], answer: 1, explain: "동사 suis를 ne와 pas로 샌드위치!" },
          { q: "'Je ___ ai pas de voiture' 빈칸은?", options: ["ne", "n'", "pas"], answer: 1, explain: "ai가 모음이라 ne → n'." },
          { q: "'Ce n'est pas grave'의 뜻은?", options: ["괜찮아요", "아파요", "늦었어요"], answer: 0, explain: "실수한 사람에게 해 주는 따뜻한 말이에요." },
          { q: "'en retard'의 뜻은?", options: ["피곤한", "늦은", "기쁜"], answer: 1, explain: "출근길에 제일 피하고 싶은 단어 en retard!" }
        ]
      }
    ]
  },

  // ───────────── 7강 ─────────────
  {
    title: "-er 동사 — 일하다, 살다, 좋아하다",
    goal: "규칙대로 바뀌는 -er 동사로 일상 문장을 만들 수 있어요.",
    summary: [
      "-er 동사는 er를 떼고 꼬리 -e, -es, -e, -ons, -ez, -ent를 붙여요.",
      "je·tu·il·ils 꼬리는 소리가 같아요 (parle, parles, parlent 모두 '빠를').",
      "J'habite à Séoul. Je travaille. J'aime le café."
    ],
    sections: [
      {
        type: "words",
        title: "오늘의 동사",
        items: [
          { fr: "parler", pron: "빠를레", mean: "말하다" },
          { fr: "travailler", pron: "트라바이에", mean: "일하다" },
          { fr: "habiter", pron: "아비떼", mean: "살다 (거주하다)" },
          { fr: "aimer", pron: "에메", mean: "좋아하다, 사랑하다" },
          { fr: "manger", pron: "멍제", mean: "먹다" },
          { fr: "écouter", pron: "에꾸떼", mean: "듣다" }
        ]
      },
      {
        type: "conj",
        title: "parler 변화표 (모든 -er 동사 공통)",
        verb: "parl<b>er</b> → parl + 꼬리",
        items: [
          { p: "je", f: "parle", pron: "주 빠를" },
          { p: "tu", f: "parles", pron: "뛰 빠를" },
          { p: "il / elle", f: "parle", pron: "일 빠를" },
          { p: "nous", f: "parlons", pron: "누 빠를롱" },
          { p: "vous", f: "parlez", pron: "부 빠를레" },
          { p: "ils / elles", f: "parlent", pron: "일 빠를", ko: "끝의 ent는 소리 안 나요" }
        ]
      },
      {
        type: "grammar",
        title: "예문으로 익히기",
        body: "프랑스어 동사의 90% 정도가 -er 동사예요. 꼬리 바꾸는 규칙 하나만 알면 수백 개 동사를 한꺼번에 쓸 수 있는 <b>만능 열쇠</b>예요. 🔑",
        examples: [
          { fr: "J'habite à Séoul.", pron: "자비뜨 아 쎄울", ko: "저는 서울에 살아요." },
          { fr: "Je travaille dans une banque.", pron: "주 트라바이 덩 쥔 벙끄", ko: "저는 은행에서 일해요." },
          { fr: "Vous parlez anglais ?", pron: "부 빠를레 정글레", ko: "영어 하세요?" },
          { fr: "J'aime le café.", pron: "젬 르 꺄페", ko: "저는 커피를 좋아해요." }
        ]
      },
      {
        type: "dialogue",
        title: "오늘의 회화",
        scene: "폴과 사는 곳 이야기를 해요",
        lines: [
          { who: "폴", fr: "Tu habites à Séoul ?", pron: "뛰 아비뜨 아 쎄울", ko: "너 서울에 살아?" },
          { who: "민지", fr: "Oui, j'habite à Séoul. Et toi ?", pron: "위 자비뜨 아 쎄울 에 뚜아", ko: "응, 서울에 살아. 너는?" },
          { who: "폴", fr: "J'habite à Paris. Je travaille à Paris.", pron: "자비뜨 아 빠리 주 트라바이 아 빠리", ko: "나는 파리에 살아. 파리에서 일해." },
          { who: "민지", fr: "J'aime Paris !", pron: "젬 빠리", ko: "나 파리 좋아해!" }
        ]
      },
      { type: "drill" },
      {
        type: "quiz",
        items: [
          { q: "travailler를 nous에 맞추면?", options: ["nous travaille", "nous travaillons", "nous travaillez"], answer: 1, explain: "nous의 꼬리는 -ons." },
          { q: "'ils parlent'의 ent는?", options: ["'엉'으로 읽는다", "읽지 않는다", "'뜨'로 읽는다"], answer: 1, explain: "동사 끝 -ent는 묵음! '일 빠를'." },
          { q: "'J'habite à Busan'의 뜻은?", options: ["부산에서 일해요", "부산에 살아요", "부산을 좋아해요"], answer: 1, explain: "habiter = 살다." },
          { q: "'je + aime'는?", options: ["je aime", "j'aime", "j'aimes"], answer: 1, explain: "모음 앞 je → j'." }
        ]
      }
    ]
  },

  // ───────────── 8강 ─────────────
  {
    title: "질문하기 — 무엇, 어디, 언제",
    goal: "'이게 뭐예요?', '어디예요?' 같은 질문을 할 수 있어요.",
    summary: [
      "가장 쉬운 질문: 문장 끝을 올려 말하기 (Tu es fatigué ? ↗).",
      "Est-ce que + 문장 ? = ~인가요?",
      "의문사: Qu'est-ce que c'est ?(뭐예요) · Où(어디) · Quand(언제) · Comment(어떻게) · Combien(얼마)."
    ],
    sections: [
      {
        type: "words",
        title: "의문사 6개",
        items: [
          { fr: "Qu'est-ce que c'est ?", pron: "께스끄 쎄", mean: "이게 뭐예요?" },
          { fr: "Où", pron: "우", mean: "어디" },
          { fr: "Quand", pron: "껑", mean: "언제" },
          { fr: "Comment", pron: "꼬멍", mean: "어떻게" },
          { fr: "Combien", pron: "꽁비앙", mean: "얼마, 몇" },
          { fr: "Qui", pron: "끼", mean: "누구" }
        ]
      },
      {
        type: "grammar",
        title: "질문을 만드는 두 가지 방법",
        body: "① 문장은 그대로 두고 <b>끝만 올려</b> 말하기 ↗ (가장 쉬움, 일상에서 제일 많이 써요)<br>② 문장 앞에 <b>Est-ce que</b>(에스끄)를 붙이기 — '~인가요?'라는 물음표 모자를 씌운다고 생각하세요.",
        examples: [
          { fr: "Tu es fatigué ?", pron: "뛰 에 파띠게 ↗", ko: "너 피곤해?" },
          { fr: "Est-ce que vous parlez coréen ?", pron: "에스끄 부 빠를레 꼬레앙", ko: "한국어 하세요?" },
          { fr: "Où est le métro ?", pron: "우 에 르 메트로", ko: "지하철역 어디예요?" },
          { fr: "Comment ça va ?", pron: "꼬멍 싸 바", ko: "잘 지내요? (어떻게 지내요?)" }
        ]
      },
      {
        type: "tip",
        body: "<b>Ça va ?</b>(싸 바)는 프랑스인이 하루에 수십 번 하는 말이에요. 묻는 것도 Ça va ? ↗, 대답도 Ça va ! ↘(잘 지내요). 억양만 바꾸면 질문과 대답이 돼요."
      },
      {
        type: "dialogue",
        title: "오늘의 회화",
        scene: "파리 출장, 길에서 지하철역을 물어요",
        lines: [
          { who: "민지", fr: "Excusez-moi, où est le métro ?", pron: "엑스뀌제 무아 우 에 르 메트로", ko: "실례합니다, 지하철역 어디예요?" },
          { who: "행인", fr: "Le métro ? C'est là.", pron: "르 메트로 쎄 라", ko: "지하철요? 저기예요. (là = 저기)" },
          { who: "민지", fr: "Merci beaucoup !", pron: "메르시 보꾸", ko: "정말 고맙습니다!" },
          { who: "행인", fr: "Bonne journée !", pron: "본 주르네", ko: "좋은 하루 보내세요!" }
        ]
      },
      { type: "drill" },
      {
        type: "quiz",
        items: [
          { q: "'어디'를 뜻하는 의문사는?", options: ["Quand", "Où", "Qui"], answer: 1, explain: "Où [우] = 어디." },
          { q: "물건을 가리키며 '이게 뭐예요?'는?", options: ["Qu'est-ce que c'est ?", "Comment ça va ?", "Où est-ce ?"], answer: 0, explain: "Qu'est-ce que c'est ? [께스끄 쎄]." },
          { q: "'Est-ce que'의 역할은?", options: ["부정을 만든다", "질문을 만든다", "과거를 만든다"], answer: 1, explain: "문장 앞에 붙이면 질문이 돼요." },
          { q: "'Ça va ?'에 대한 자연스러운 대답은?", options: ["Ça va !", "Au revoir.", "Enchanté."], answer: 0, explain: "Ça va ! = 잘 지내요!" }
        ]
      }
    ]
  },

  // ───────────── 9강 ─────────────
  {
    title: "카페에서 주문하기 — Je voudrais…",
    goal: "카페에서 공손하게 주문하고 계산할 수 있어요.",
    summary: [
      "Je voudrais ○○, s'il vous plaît = ○○ 주세요 (공손하게).",
      "C'est combien ? = 얼마예요?  L'addition, s'il vous plaît = 계산서 주세요.",
      "가게에 들어가면 먼저 Bonjour! 인사가 예의예요."
    ],
    sections: [
      {
        type: "words",
        title: "오늘의 단어",
        items: [
          { fr: "Je voudrais…", pron: "주 부드레", mean: "~을 원합니다 (공손한 주문)" },
          { fr: "s'il vous plaît", pron: "씰 부 쁠레", mean: "부탁합니다 (please)" },
          { fr: "un croissant", pron: "앙 크루아썽", mean: "크루아상 하나" },
          { fr: "un thé", pron: "앙 떼", mean: "차 한 잔" },
          { fr: "un café crème", pron: "앙 꺄페 크렘", mean: "카페라테 비슷한 커피" },
          { fr: "C'est combien ?", pron: "쎄 꽁비앙", mean: "얼마예요?" },
          { fr: "l'addition", pron: "라디씨옹", mean: "계산서" },
          { fr: "euros", pron: "외로", mean: "유로 (돈 단위)" }
        ]
      },
      {
        type: "grammar",
        title: "주문의 공식",
        body: "<b>Bonjour</b> → <b>Je voudrais</b> + 메뉴 + <b>s'il vous plaît</b> → <b>Merci</b><br>이 순서는 주문용 레시피예요. 메뉴 칸만 바꿔 끼우면 어디서든 쓸 수 있어요.",
        examples: [
          { fr: "Bonjour ! Je voudrais un café, s'il vous plaît.", pron: "봉주르 주 부드레 앙 꺄페 씰 부 쁠레", ko: "안녕하세요! 커피 한 잔 주세요." },
          { fr: "Et un croissant, s'il vous plaît.", pron: "에 앙 크루아썽 씰 부 쁠레", ko: "그리고 크루아상 하나요." },
          { fr: "C'est combien ?", pron: "쎄 꽁비앙", ko: "얼마예요?" },
          { fr: "Ça fait cinq euros.", pron: "싸 페 쌩 꾀로", ko: "5유로입니다." }
        ]
      },
      {
        type: "tip",
        body: "프랑스에서는 가게·카페에 들어가면 <b>Bonjour</b>를 꼭 먼저 말해요. 인사 없이 바로 주문하면 무례하게 느낄 수 있어요. Bonjour 한마디가 서비스를 바꾸는 마법의 주문이에요. ✨"
      },
      {
        type: "dialogue",
        title: "오늘의 회화",
        scene: "파리의 카페에서 아침을 주문해요",
        lines: [
          { who: "점원", fr: "Bonjour !", pron: "봉주르", ko: "안녕하세요!" },
          { who: "민지", fr: "Bonjour ! Je voudrais un café crème, s'il vous plaît.", pron: "봉주르 주 부드레 앙 꺄페 크렘 씰 부 쁠레", ko: "안녕하세요! 카페 크렘 한 잔 주세요." },
          { who: "민지", fr: "Et un croissant. C'est combien ?", pron: "에 앙 크루아썽 쎄 꽁비앙", ko: "그리고 크루아상 하나요. 얼마예요?" },
          { who: "점원", fr: "Ça fait cinq euros.", pron: "싸 페 쌩 꾀로", ko: "5유로입니다." },
          { who: "민지", fr: "Merci !", pron: "메르시", ko: "고맙습니다!" }
        ]
      },
      { type: "drill" },
      {
        type: "quiz",
        items: [
          { q: "공손하게 '~ 주세요'라고 주문할 때 쓰는 말은?", options: ["Je voudrais", "Je suis", "J'ai"], answer: 0, explain: "Je voudrais = ~을 원합니다 (공손)." },
          { q: "'s'il vous plaît'의 뜻은?", options: ["고맙습니다", "부탁합니다", "죄송합니다"], answer: 1, explain: "영어 please와 같아요." },
          { q: "다 먹고 계산서를 달라고 할 때는?", options: ["Un thé, s'il vous plaît.", "L'addition, s'il vous plaît.", "C'est un café."], answer: 1, explain: "l'addition = 계산서." },
          { q: "'Ça fait trois euros'의 뜻은?", options: ["3유로입니다", "30유로입니다", "3시입니다"], answer: 0, explain: "trois = 3, Ça fait ~ = ~입니다(금액)." }
        ]
      }
    ]
  },

  // ───────────── 10강 ─────────────
  {
    title: "aller 동사와 시간 — 회사에 가요, 8시예요",
    goal: "'~에 가요'와 '지금 몇 시예요?'를 말할 수 있어요.",
    summary: [
      "aller(가다): je vais, tu vas, il/elle va, nous allons, vous allez, ils/elles vont.",
      "à + le = au (au bureau), à + la = à la (à la maison).",
      "Il est huit heures = 8시예요. Quelle heure est-il ? = 몇 시예요?"
    ],
    sections: [
      {
        type: "conj",
        title: "aller 변화표 (불규칙!)",
        verb: "aller [알레] = 가다",
        items: [
          { p: "je", f: "vais", pron: "주 베" },
          { p: "tu", f: "vas", pron: "뛰 바" },
          { p: "il / elle", f: "va", pron: "일 바" },
          { p: "nous", f: "allons", pron: "누 잘롱" },
          { p: "vous", f: "allez", pron: "부 잘레" },
          { p: "ils / elles", f: "vont", pron: "일 봉" }
        ]
      },
      {
        type: "words",
        title: "오늘의 단어",
        items: [
          { fr: "au bureau", pron: "오 뷔로", mean: "사무실에, 회사에" },
          { fr: "au travail", pron: "오 트라바이", mean: "일하러, 직장에" },
          { fr: "à la maison", pron: "알 라 메종", mean: "집에" },
          { fr: "Quelle heure est-il ?", pron: "껠 뢰르 에띨", mean: "몇 시예요?" },
          { fr: "Il est huit heures.", pron: "일 레 위 뙤르", mean: "8시예요." },
          { fr: "et demie", pron: "에 드미", mean: "~시 반" }
        ]
      },
      {
        type: "grammar",
        title: "à + 장소 = ~에",
        body: "'~에'는 <b>à</b>예요. 그런데 à와 le가 만나면 한 몸이 되어 <b>au</b>가 돼요 (à + le → au). à la는 그대로 둬요.<br>시간은 <b>Il est</b> + 숫자 + <b>heures</b>로 말해요.",
        examples: [
          { fr: "Je vais au bureau.", pron: "주 베 오 뷔로", ko: "저는 회사에 가요." },
          { fr: "Tu vas à la maison ?", pron: "뛰 바 알 라 메종", ko: "너 집에 가?" },
          { fr: "Il est huit heures et demie.", pron: "일 레 위 뙤르 에 드미", ko: "8시 반이에요." },
          { fr: "Je suis en retard !", pron: "주 쒸 엉 르따르", ko: "저 늦었어요!" }
        ]
      },
      {
        type: "tip",
        body: "<b>Comment ça va ?</b>의 va가 바로 aller예요! 직역하면 '그거 어떻게 가고 있어요?' = 잘 지내요? 이렇게 배운 단어들이 서로 연결되기 시작했어요. 10강까지 온 걸 축하해요! 🎉"
      },
      {
        type: "dialogue",
        title: "오늘의 회화",
        scene: "아침, 지하철역에서 폴을 만났어요",
        lines: [
          { who: "폴", fr: "Salut, Minji ! Tu vas au bureau ?", pron: "쌀뤼 민지 뛰 바 오 뷔로", ko: "안녕, 민지! 회사 가?" },
          { who: "민지", fr: "Oui. Quelle heure est-il ?", pron: "위 껠 뢰르 에띨", ko: "응. 지금 몇 시야?" },
          { who: "폴", fr: "Il est huit heures et demie.", pron: "일 레 위 뙤르 에 드미", ko: "8시 반이야." },
          { who: "민지", fr: "Oh là là ! Je suis en retard !", pron: "올 랄라 주 쒸 엉 르따르", ko: "어머나! 나 늦었다!" }
        ]
      },
      { type: "drill" },
      {
        type: "quiz",
        items: [
          { q: "'je ___ au bureau' 빈칸은?", options: ["va", "vais", "allons"], answer: 1, explain: "je의 짝꿍은 vais." },
          { q: "à + le는?", options: ["à le", "au", "aux"], answer: 1, explain: "à + le → au (au bureau)." },
          { q: "'몇 시예요?'는?", options: ["C'est combien ?", "Quelle heure est-il ?", "Comment ça va ?"], answer: 1, explain: "Quelle heure est-il ? [껠 뢰르 에띨]." },
          { q: "'Il est sept heures'의 뜻은?", options: ["7시예요", "7살이에요", "7유로예요"], answer: 0, explain: "sept = 7, heures = 시." }
        ]
      }
    ]
  }
];
