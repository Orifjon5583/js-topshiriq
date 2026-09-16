// Topshiriqlar ro'yxati (1-Qism: 1..12 va 2-Qism: 13..22)
const TASKS_DATA = [
  // ================= 1-QISM (Loop — for, forEach) =================
  {
    id: 1,
    part: 1,
    category: "for loop",
    badge: "1-topshiriq",
    partBadge: "1-Qism",
    title: "1 dan 10 gacha bo‘lgan sonlarni chiqarish",
    description: "for siklidan foydalanib, 1 dan 10 gacha bo‘lgan barcha sonlarni ketma-ket konsolga (console.log) chiqaring.",
    hint: "for sikli sintaksisi: for (boshlanish; shart; qadam) { ... }",
    starterCode: "",
    expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
  },
  {
    id: 2,
    part: 1,
    category: "for loop",
    badge: "2-topshiriq",
    partBadge: "1-Qism",
    title: "10 dan 1 gacha teskari sanash",
    description: "for siklidan foydalanib, 10 dan 1 gacha teskari tartibda sonlarni konsolga chiqaring.",
    hint: "Siklni 10 dan boshlab, 1 gacha kamaytirib (i--) boring.",
    starterCode: "",
    expectedOutput: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1"
  },
  {
    id: 3,
    part: 1,
    category: "for loop",
    badge: "3-topshiriq",
    partBadge: "1-Qism",
    title: "1 dan 20 gacha bo‘lgan juft sonlar",
    description: "for siklidan foydalanib, 1 dan 20 gacha bo‘lgan juft sonlarni konsolga chiqaring.",
    hint: "Sonning juftligini tekshirish uchun i % 2 === 0 dan foydalaning.",
    starterCode: "",
    expectedOutput: "2\n4\n6\n8\n10\n12\n14\n16\n18\n20"
  },
  {
    id: 4,
    part: 1,
    category: "for loop",
    badge: "4-topshiriq",
    partBadge: "1-Qism",
    title: "1 dan 15 gacha bo‘lgan toq sonlar",
    description: "for siklidan foydalanib, 1 dan 15 gacha bo‘lgan toq sonlarni konsolga chiqaring.",
    hint: "Toq sonlar uchun i % 2 !== 0 shartidan foydalaning.",
    starterCode: "",
    expectedOutput: "1\n3\n5\n7\n9\n11\n13\n15"
  },
  {
    id: 5,
    part: 1,
    category: "for loop",
    badge: "5-topshiriq",
    partBadge: "1-Qism",
    title: "\"Salom!\" so‘zini 5 marta chiqarish",
    description: "for siklidan foydalanib, \"Salom!\" so‘zini konsolga 5 marta chiqaring.",
    hint: "Sikl 5 marta aylanishi va har bir qadamda konsolga \"Salom!\" chiqarishi kerak.",
    starterCode: "",
    expectedOutput: "Salom!\nSalom!\nSalom!\nSalom!\nSalom!"
  },
  {
    id: 6,
    part: 1,
    category: "for loop",
    badge: "6-topshiriq",
    partBadge: "1-Qism",
    title: "7 sonining ko‘paytirish jadvali",
    description: "for siklidan foydalanib, 7 sonining 1 dan 10 gacha bo‘lgan ko‘paytirish jadvalini konsolga chiqaring.",
    hint: "Har bir qadamda 7 ni sikl o'zgaruvchisiga ko'paytirib konsolga chiqaring.",
    starterCode: "",
    expectedOutput: "7 * 1 = 7\n7 * 2 = 14\n...\n7 * 10 = 70"
  },
  {
    id: 7,
    part: 1,
    category: "forEach",
    badge: "7-topshiriq",
    partBadge: "1-Qism",
    title: "Massivdagi barcha ismlarni chiqarish",
    description: "forEach yordamida quyidagi massivdagi barcha ismlarni konsolga chiqaring:\n\nconst ismlar = ['Anvar', 'Zarina', 'Jasur', 'Nodira'];",
    hint: "massiv.forEach(element => { ... }) sintaksisidan foydalaning.",
    starterCode: "const ismlar = ['Anvar', 'Zarina', 'Jasur', 'Nodira'];\n\n",
    expectedOutput: "Anvar\nZarina\nJasur\nNodira"
  },
  {
    id: 8,
    part: 1,
    category: "forEach",
    badge: "8-topshiriq",
    partBadge: "1-Qism",
    title: "\"Salom, [ism]!\" xabarini chiqarish",
    description: "forEach yordamida quyidagi massivdagi har bir ism uchun \"Salom, [ism]!\" ko‘rinishida xabar chiqaring:\n\nconst ismlar = ['Ali', 'Vali', 'Hasan', 'Husan'];",
    hint: "Har bir ism oldiga \"Salom, \" so'zini qo'shib chiqaring.",
    starterCode: "const ismlar = ['Ali', 'Vali', 'Hasan', 'Husan'];\n\n",
    expectedOutput: "Salom, Ali!\nSalom, Vali!\nSalom, Hasan!\nSalom, Husan!"
  },
  {
    id: 9,
    part: 1,
    category: "forEach",
    badge: "9-topshiriq",
    partBadge: "1-Qism",
    title: "Sonlarni 2 ga ko‘paytirib chiqarish",
    description: "forEach yordamida quyidagi massivdagi barcha sonlarni 2 ga ko‘paytirib, natijani konsolga chiqaring:\n\nconst sonlar = [2, 4, 6, 8, 10];",
    hint: "forEach sikli ichida har bir sonni 2 ga ko'paytiring.",
    starterCode: "const sonlar = [2, 4, 6, 8, 10];\n\n",
    expectedOutput: "4\n8\n12\n16\n20"
  },
  {
    id: 10,
    part: 1,
    category: "forEach",
    badge: "10-topshiriq",
    partBadge: "1-Qism",
    title: "\"Mahsulot: [nom]\" shaklida chiqarish",
    description: "forEach yordamida quyidagi mahsulotlarning har birini \"Mahsulot: [nom]\" ko‘rinishida konsolga chiqaring:\n\nconst mahsulotlar = ['Non', 'Sut', 'Olma', 'Shokolad'];",
    hint: "Mahsulot nomiga \"Mahsulot: \" prefiksini qo'shib chiqaring.",
    starterCode: "const mahsulotlar = ['Non', 'Sut', 'Olma', 'Shokolad'];\n\n",
    expectedOutput: "Mahsulot: Non\nMahsulot: Sut\nMahsulot: Olma\nMahsulot: Shokolad"
  },
  {
    id: 11,
    part: 1,
    category: "forEach",
    badge: "11-topshiriq",
    partBadge: "1-Qism",
    title: "Sonlarga 5 qo‘shib chiqarish",
    description: "forEach yordamida quyidagi sonlarning har biriga 5 qo‘shib, natijani konsolga chiqaring:\n\nconst sonlar = [10, 20, 30, 40, 50];",
    hint: "Har bir songa 5 qo'shib, natijani console.log orqali chiqaring.",
    starterCode: "const sonlar = [10, 20, 30, 40, 50];\n\n",
    expectedOutput: "15\n25\n35\n45\n55"
  },
  {
    id: 12,
    part: 1,
    category: "for + forEach",
    badge: "12-topshiriq (1-Qism yakuni)",
    partBadge: "1-Qism",
    title: "for va forEach birgalikda",
    description: "1 dan 10 gacha sonlarni for yordamida, berilgan ismlarni esa forEach yordamida konsolga chiqaring:\n\nconst ismlar = ['Aziz', 'Madina', 'Bobur'];",
    hint: "Oldin for siklini, undan so'ng ismlar massivi uchun forEach ni yozing.",
    starterCode: "const ismlar = ['Aziz', 'Madina', 'Bobur'];\n\n",
    expectedOutput: "1..10 sonlari va ismlar"
  },

  // ================= 2-QISM (Loop & Massivlar bilan ishlash) =================
  {
    id: 13,
    part: 2,
    category: "for loop",
    badge: "13-topshiriq (2-Qism, 1)",
    partBadge: "2-Qism",
    title: "5 ga bo‘linadigan sonlarni chiqarish",
    description: "for siklidan foydalanib, 1 dan 50 gacha bo‘lgan sonlar orasidan faqat 5 ga qoldiqsiz bo‘linadigan sonlarni konsolga chiqaring.",
    hint: "Sonning 5 ga bo'linishini tekshirish uchun i % 5 === 0 shartidan foydalaning.",
    starterCode: "",
    expectedOutput: "5\n10\n15\n20\n25\n30\n35\n40\n45\n50"
  },
  {
    id: 14,
    part: 2,
    category: "for loop",
    badge: "14-topshiriq (2-Qism, 2)",
    partBadge: "2-Qism",
    title: "1 dan 100 gacha sonlar yig‘indisini hisoblash",
    description: "for sikli yordamida 1 dan 100 gacha bo‘lgan barcha sonlarning umumiy yig‘indisini hisoblab, oxirida natijani konsolga chiqaring.",
    hint: "Sikldan oldin let yigindi = 0; oching va har bir qadamda yigindi += i qiling.",
    starterCode: "let yigindi = 0;\n\n// Kodingizni bu yerga yozing\n",
    expectedOutput: "5050"
  },
  {
    id: 15,
    part: 2,
    category: "for loop",
    badge: "15-topshiriq (2-Qism, 3)",
    partBadge: "2-Qism",
    title: "1 dan 10 gacha sonlarning kvadratlarini chiqarish",
    description: "for siklidan foydalanib, 1 dan 10 gacha bo‘lgan sonlarning har birining kvadratini (i * i) konsolga chiqaring.",
    hint: "console.log(i * i) yoki console.log(i ** 2) dan foydalaning.",
    starterCode: "",
    expectedOutput: "1\n4\n9\n16\n25\n36\n49\n64\n81\n100"
  },
  {
    id: 16,
    part: 2,
    category: "for loop",
    badge: "16-topshiriq (2-Qism, 4)",
    partBadge: "2-Qism",
    title: "Ham 3 ga, ham 5 ga bo‘linadigan sonlar",
    description: "for sikli yordamida 1 dan 30 gacha bo‘lgan sonlar orasidan bir vaqtning o‘zida ham 3 ga, ham 5 ga bo‘linadigan sonlarni konsolga chiqaring.",
    hint: "i % 3 === 0 && i % 5 === 0 shartini tekshiring.",
    starterCode: "",
    expectedOutput: "15\n30"
  },
  {
    id: 17,
    part: 2,
    category: "for loop",
    badge: "17-topshiriq (2-Qism, 5)",
    partBadge: "2-Qism",
    title: "So‘z harflarini ketma-ket chiqarish",
    description: "for sikli yordamida \"JAVASCRIPT\" so‘zining har bir harfini alohida qatorda konsolga chiqaring.",
    hint: "soz.length gacha for sikli aylanib, console.log(soz[i]) qiling.",
    starterCode: "const soz = \"JAVASCRIPT\";\n\n// Kodingizni bu yerga yozing\n",
    expectedOutput: "J\nA\nV\nA\nS\nC\nR\nI\nP\nT"
  },
  {
    id: 18,
    part: 2,
    category: "forEach",
    badge: "18-topshiriq (2-Qism, 6)",
    partBadge: "2-Qism",
    title: "Massivdagi barcha sonlar yig‘indisini hisoblash",
    description: "forEach yordamida quyidagi massivdagi barcha sonlar yig‘indisini hisoblab, oxirida umumiy yig‘indini konsolga chiqaring:\n\nconst sonlar = [5, 10, 15, 20, 25];",
    hint: "Tashqarida let jami = 0; oching va forEach ichida har bir sonni jami ga qo'shib boring.",
    starterCode: "const sonlar = [5, 10, 15, 20, 25];\nlet jami = 0;\n\n// Kodingizni bu yerga yozing\n",
    expectedOutput: "75"
  },
  {
    id: 19,
    part: 2,
    category: "forEach",
    badge: "19-topshiriq (2-Qism, 7)",
    partBadge: "2-Qism",
    title: "So‘zlarning uzunligini (length) chiqarish",
    description: "forEach yordamida quyidagi massivdagi har bir meva nomini va uning nechta harfdan iboratligini konsolga chiqaring:\n(Masalan: \"Olma — 4 ta harf\")\n\nconst mevalar = ['Olma', 'Banan', 'Gilos', 'Shaftoli'];",
    hint: "Template literal yordamida `${meva} — ${meva.length} ta harf` shaklida chiqaring.",
    starterCode: "const mevalar = ['Olma', 'Banan', 'Gilos', 'Shaftoli'];\n\n// Kodingizni bu yerga yozing\n",
    expectedOutput: "Olma — 4 ta harf\nBanan — 5 ta harf\nGilos — 5 ta harf\nShaftoli — 8 ta harf"
  },
  {
    id: 20,
    part: 2,
    category: "forEach",
    badge: "20-topshiriq (2-Qism, 8)",
    partBadge: "2-Qism",
    title: "Ismlarni katta harflarga (toUpperCase) o‘girish",
    description: "forEach yordamida quyidagi massivdagi barcha ismlarni to‘liq katta harflarda (toUpperCase) konsolga chiqaring:\n\nconst ismlar = ['dilshod', 'madina', 'umid', 'shahlo'];",
    hint: "ism.toUpperCase() metodidan foydalaning.",
    starterCode: "const ismlar = ['dilshod', 'madina', 'umid', 'shahlo'];\n\n// Kodingizni bu yerga yozing\n",
    expectedOutput: "DILSHOD\nMADINA\nUMID\nSHAHLO"
  },
  {
    id: 21,
    part: 2,
    category: "forEach",
    badge: "21-topshiriq (2-Qism, 9)",
    partBadge: "2-Qism",
    title: "Foydalanuvchilar ma‘lumotini chiqarish",
    description: "forEach yordamida quyidagi obyektlar massividagi har bir foydalanuvchini \"Ismi: [ism], Yoshi: [yosh]\" shaklida konsolga chiqaring:\n\nconst users = [{ism: 'Ali', yosh: 20}, {ism: 'Vali', yosh: 25}, {ism: 'Salim', yosh: 18}];",
    hint: "user.ism va user.yosh xususiyatlaridan foydalaning.",
    starterCode: "const users = [\n  { ism: 'Ali', yosh: 20 },\n  { ism: 'Vali', yosh: 25 },\n  { ism: 'Salim', yosh: 18 }\n];\n\n// Kodingizni bu yerga yozing\n",
    expectedOutput: "Ismi: Ali, Yoshi: 20\nIsmi: Vali, Yoshi: 25\nIsmi: Salim, Yoshi: 18"
  },
  {
    id: 22,
    part: 2,
    category: "forEach",
    badge: "22-topshiriq (2-Qism yakuni)",
    partBadge: "2-Qism",
    title: "Faqat 70 dan yuqori bo‘lgan baholarni chiqarish",
    description: "forEach yordamida quyidagi baholar massividan faqat 70 dan katta bo‘lganlarini konsolga chiqaring:\n\nconst baholar = [55, 80, 45, 90, 72, 60, 100];",
    hint: "forEach ichida if (baho > 70) shartidan foydalaning.",
    starterCode: "const baholar = [55, 80, 45, 90, 72, 60, 100];\n\n// Kodingizni bu yerga yozing\n",
    expectedOutput: "80\n90\n72\n100"
  }
];

// ================= 3-QISM (Oson Test Savollari — Quiz) =================
const QUIZ_DATA = [
  {
    id: 1,
    question: "JavaScript'da 'for' siklining to'g'ri yozilish tartibi qaysi?",
    codeSnippet: null,
    options: [
      "for (boshlanish; shart; qadam)",
      "for (shart; boshlanish; qadam)",
      "for (qadam; shart; boshlanish)",
      "for (boshlanish; qadam; shart)"
    ],
    answer: 0,
    explanation: "for siklida har doim avval boshlang'ich qiymat (let i = 0), keyin shart (i < 10) va oxirida qadam (i++) yoziladi."
  },
  {
    id: 2,
    question: "Siklda 'i++' amali nima vazifani bajaradi?",
    codeSnippet: "for (let i = 0; i < 5; i++)",
    options: [
      "i qiymatini 1 taga kamaytiradi",
      "i qiymatini 1 taga oshiradi",
      "i qiymatini 2 ga ko'paytiradi",
      "Siklni darhol to'xtatadi"
    ],
    answer: 1,
    explanation: "i++ (inkrement) amali o'zgaruvchi qiymatini 1 taga oshirish (i = i + 1) uchun ishlatiladi."
  },
  {
    id: 3,
    question: "Quyidagi massivning '.length' xususiyati nimaga teng?",
    codeSnippet: "const mevalar = ['Olma', 'Banan', 'Gilos'];\nconsole.log(mevalar.length);",
    options: [
      "2",
      "3",
      "4",
      "0"
    ],
    answer: 1,
    explanation: "Massivda jami 3 ta element bor, shuning uchun .length qiymati 3 ga teng."
  },
  {
    id: 4,
    question: "Siklni muddatidan oldin butunlay to'xtatib, undan chiqib ketish uchun qaysi kalit so'z ishlatiladi?",
    codeSnippet: null,
    options: [
      "continue",
      "stop",
      "break",
      "exit"
    ],
    answer: 2,
    explanation: "'break' operatori bajarilayotgan siklni darhol butunlay to'xtatadi."
  },
  {
    id: 5,
    question: "Siklning faqat joriy qadamini o'tkazib yuborib, keyingi qadamga o'tish uchun nima ishlatiladi?",
    codeSnippet: null,
    options: [
      "continue",
      "break",
      "pass",
      "skip"
    ],
    answer: 0,
    explanation: "'continue' joriy aylanishni to'xtatib, siklning keyingi qadamiga o'tadi."
  },
  {
    id: 6,
    question: "'forEach' metodi asosan qaysi ma'lumot turi ustida sikl aylanish uchun mo'ljallangan?",
    codeSnippet: null,
    options: [
      "Faqat Raqamlar (Number)",
      "Massivlar (Array)",
      "Faqat Mantiqiy qiymatlar (Boolean)",
      "HTML teglar"
    ],
    answer: 1,
    explanation: "'forEach' massivlarning (Array) ichki metodi bo'lib, har bir element bo'yicha ketma-ket yurib chiqadi."
  },
  {
    id: 7,
    question: "Quyidagi kod konsolga necha marta \"Salom\" so'zini chiqaradi?",
    codeSnippet: "for (let i = 0; i < 4; i++) {\n  console.log(\"Salom\");\n}",
    options: [
      "3 marta",
      "4 marta",
      "5 marta",
      "Cheksiz marta"
    ],
    answer: 1,
    explanation: "i = 0, 1, 2, 3 holatlari uchun jami 4 marta sikl bajariladi va 4 marta \"Salom\" chiqadi."
  },
  {
    id: 8,
    question: "Sonning juft ekanligini qaysi ifoda to'g'ri tekshiradi?",
    codeSnippet: null,
    options: [
      "son / 2 === 0",
      "son % 2 === 0",
      "son * 2 === 0",
      "son % 2 === 1"
    ],
    answer: 1,
    explanation: "Juft sonlarni 2 ga bo'lganda qoldiq 0 bo'ladi, buni JavaScript'da 'son % 2 === 0' tekshiradi."
  },
  {
    id: 9,
    question: "Quyidagi kod konsolga nima chiqaradi?",
    codeSnippet: "const tillar = ['HTML', 'CSS', 'JS'];\nconsole.log(tillar[1]);",
    options: [
      "HTML",
      "CSS",
      "JS",
      "undefined"
    ],
    answer: 1,
    explanation: "Massiv indekslari 0 dan boshlanadi. 0-indeks 'HTML', 1-indeks esa 'CSS' hisoblanadi."
  },
  {
    id: 10,
    question: "forEach(function(item, index) { ... }) funksiyasidagi 'item' nimani bildiradi?",
    codeSnippet: "ismlar.forEach((item, index) => {\n  console.log(item);\n});",
    options: [
      "Massivning uzunligini",
      "Elementning tartib raqamini (indeksini)",
      "Massivdagi joriy elementning o'zini",
      "Butun boshli massivni"
    ],
    answer: 2,
    explanation: "Birinchi parametr 'item' (yoki 'el') massivdagi har bir navbatdagi element qiymatini ifodalaydi."
  },
  {
    id: 11,
    question: "Quyidagi teskari sikl nechtadan boshlanib nechagacha aylanadi?",
    codeSnippet: "for (let i = 5; i >= 1; i--) {\n  console.log(i);\n}",
    options: [
      "1 dan 5 gacha o'sib boradi",
      "5 dan 1 gacha kamayib boradi (5, 4, 3, 2, 1)",
      "5 dan 0 gacha aylanadi",
      "Faqat 5 sonini chiqaradi"
    ],
    answer: 1,
    explanation: "i = 5 dan boshlanadi va i >= 1 sharti bajarilgunicha i-- (kamayish) bilan 5, 4, 3, 2, 1 sonlarini chiqaradi."
  },
  {
    id: 12,
    question: "Quyidagi kod ishlashi natijasida 'yigindi' o'zgaruvchisining yakuniy qiymati qancha bo'ladi?",
    codeSnippet: "let yigindi = 0;\nconst sonlar = [10, 20, 30];\nsonlar.forEach(son => {\n  yigindi += son;\n});\nconsole.log(yigindi);",
    options: [
      "30",
      "60",
      "102030",
      "0"
    ],
    answer: 1,
    explanation: "10 + 20 + 30 = 60. forEach sikli har bir sonni yigindi o'zgaruvchisiga qo'shib boradi."
  }
];
