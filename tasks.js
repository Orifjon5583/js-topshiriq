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

// ================= 4-QISM (Amaliy Test Savollari — 2-Bosqich Quiz) =================
const QUIZ_DATA_PART4 = [
  {
    id: 1,
    question: "'break' operatori if sharti ichida bajarilganda natija nima bo'ladi?",
    codeSnippet: "for (let i = 1; i <= 5; i++) {\n  if (i === 3) break;\n  console.log(i);\n}",
    options: [
      "1 va 2 chiqadi",
      "1, 2, 3 chiqadi",
      "1, 2, 4, 5 chiqadi",
      "3, 4, 5 chiqadi"
    ],
    answer: 0,
    explanation: "i = 3 bo'lganda 'break' ishga tushadi va butun sikl darhol to'xtaydi. Shuning uchun faqat 1 va 2 chiqadi."
  },
  {
    id: 2,
    question: "'continue' operatori ishlaganda qaysi sonlar konsolga chiqadi?",
    codeSnippet: "for (let i = 1; i <= 4; i++) {\n  if (i === 2) continue;\n  console.log(i);\n}",
    options: [
      "1, 2, 3, 4",
      "1, 3, 4",
      "Faqat 2",
      "1 va 2"
    ],
    answer: 1,
    explanation: "i = 2 bo'lganda 'continue' joriy qadamni o'tkazib yuboradi, shuning uchun 2 konsolga chiqmaydi, qolgan 1, 3, 4 chiqadi."
  },
  {
    id: 3,
    question: "Ushbu sikl nima uchun cheksiz (infinite loop) bo'lib qoladi?",
    codeSnippet: "for (let i = 0; i < 5; ) {\n  console.log(i);\n}",
    options: [
      "Sikl sharti xato yozilgan",
      "Qadam (i++) yozilmagani uchun i qiymati doim 0 bo'lib qolaveradi",
      "Sikl 0 dan boshlangani uchun",
      "let o'rniga const ishlatilishi kerak"
    ],
    answer: 1,
    explanation: "Siklda i qiymatini o'zgartiruvchi qadam (inkrement i++) yo'q, shuning uchun i < 5 sharti doim rost bo'lib qoladi va cheksiz aylanadi."
  },
  {
    id: 4,
    question: "Ushbu kod bajarilgach, 'juftlar' massivi tarkibi qanday bo'ladi?",
    codeSnippet: "const juftlar = [];\nfor (let i = 1; i <= 6; i++) {\n  if (i % 2 === 0) juftlar.push(i);\n}\nconsole.log(juftlar);",
    options: [
      "[1, 3, 5]",
      "[2, 4, 6]",
      "[6]",
      "3"
    ],
    answer: 1,
    explanation: "1 dan 6 gacha bo'lgan juft sonlar (2, 4, 6) push() metodi orqali massivga yig'iladi: [2, 4, 6]."
  },
  {
    id: 5,
    question: "forEach metodidagi ikkinchi 'i' (index) parametri yordamida nima ekranga chiqadi?",
    codeSnippet: "const harflar = ['A', 'B', 'C'];\nharflar.forEach((harf, i) => {\n  if (i === 1) console.log(harf);\n});",
    options: [
      "A",
      "B",
      "C",
      "1"
    ],
    answer: 1,
    explanation: "Massiv indekslari 0 dan boshlanadi. 0-indeks 'A', 1-indeks esa 'B'. Shuning uchun 'B' konsolga chiqadi."
  },
  {
    id: 6,
    question: "Ushbu ichma-ich (nested) siklda 'sanoq' o'zgaruvchisi oxirida nechaga teng bo'ladi?",
    codeSnippet: "let sanoq = 0;\nfor (let i = 0; i < 3; i++) {\n  for (let j = 0; j < 2; j++) {\n    sanoq++;\n  }\n}\nconsole.log(sanoq);",
    options: [
      "5",
      "6",
      "9",
      "3"
    ],
    answer: 1,
    explanation: "Tashqi sikl 3 marta, ichki sikl har birida 2 marta aylanadi: 3 * 2 = 6 marta sanoq++ bajariladi."
  },
  {
    id: 7,
    question: "Matnning oxirgi belgisini olish uchun qaysi indeks to'g'ri ishlatilgan?",
    codeSnippet: "const soz = \"SALOM\";\nconsole.log(soz[soz.length - 1]);",
    options: [
      "S",
      "M",
      "undefined",
      "5"
    ],
    answer: 1,
    explanation: "soz.length = 5, soz[4] esa oxirgi 'M' harfini bildiradi (indekslar 0 dan boshlanganligi uchun length - 1 bo'ladi)."
  },
  {
    id: 8,
    question: "for siklida hisoblagich 'const' bilan e'lon qilinsa nima yuz beradi?",
    codeSnippet: "for (const i = 0; i < 3; i++) {\n  console.log(i);\n}",
    options: [
      "0, 1, 2 sonlari normal chiqadi",
      "TypeError xatolik beradi (const qiymatini i++ bilan o'zgartirib bo'lmaydi)",
      "Faqat 0 chiqadi",
      "Cheksiz 0 soni chiqadi"
    ],
    answer: 1,
    explanation: "const o'zgaruvchi qiymatini qayta o'zgartirib bo'lmaydi. i++ amali i = i + 1 ga teng bo'lgani sababli TypeError xatolik yuzaga keladi."
  },
  {
    id: 9,
    question: "Ushbu algoritm massivdan qanday natijani topib konsolga chiqaradi?",
    codeSnippet: "const sonlar = [14, 5, 89, 23];\nlet max = sonlar[0];\nsonlar.forEach(son => {\n  if (son > max) max = son;\n});\nconsole.log(max);",
    options: [
      "14",
      "89",
      "23",
      "5"
    ],
    answer: 1,
    explanation: "Har bir son 'max' bilan taqqoslanadi va eng kattasi (89) max ga o'zlashtirilib oxirida chiqariladi."
  },
  {
    id: 10,
    question: "Quyidagi obyektlar massividan qaysi meva nomlari filtrlanib chiqadi?",
    codeSnippet: "const mevalar = [\n  { nom: 'Olma', narx: 8000 },\n  { nom: 'Uzum', narx: 15000 },\n  { nom: 'Nok', narx: 12000 }\n];\nmevalar.forEach(m => {\n  if (m.narx > 10000) console.log(m.nom);\n});",
    options: [
      "Olma",
      "Uzum va Nok",
      "Faqat Nok",
      "Barcha mevalar"
    ],
    answer: 1,
    explanation: "Narxi 10000 dan yuqori bo'lgan mevalar Uzum (15000) va Nok (12000) bo'lib, ikkalasi konsolga chiqadi."
  },
  {
    id: 11,
    question: "JavaScript 'for...of' siklida 'rang' o'zgaruvchisiga nima kelib tushadi?",
    codeSnippet: "const ranglar = ['Qizil', 'Yashil', 'Ko‘k'];\nfor (let rang of ranglar) {\n  console.log(rang);\n}",
    options: [
      "Massiv elementlarining indekslari (0, 1, 2)",
      "Massiv elementlarining o'zi ('Qizil', 'Yashil', 'Ko‘k')",
      "Massiv uzunligi (3)",
      "Faqat birinchi element"
    ],
    answer: 1,
    explanation: "'for...of' to'g'ridan-to'g'ri massiv elementlarining qiymatlari bo'yicha aylanadi, indekslar uchun esa 'for...in' ishlatiladi."
  },
  {
    id: 12,
    question: "Sikl ichida satrlarni birlashtirish natijasida konsolga nima chiqadi?",
    codeSnippet: "let natija = \"\";\nfor (let i = 1; i <= 3; i++) {\n  natija += i + \"-\";\n}\nconsole.log(natija);",
    options: [
      "\"1-2-3-\"",
      "\"6-\"",
      "\"123\"",
      "\"1- 2- 3-\""
    ],
    answer: 0,
    explanation: "Har bir qadamda natijaga i va '-' belgisi qo'shiladi: '1-' + '2-' + '3-' natijada '1-2-3-' hosil bo'ladi."
  }
];

// ================= 5-QISM (O'zgaruvchilar, let/const, Ma'lumot Turlari & typeof) =================
const QUIZ_DATA_PART5 = [
  {
    id: 1,
    question: "Dasturlashda o'zgaruvchi (variable) nima vazifani bajaradi?",
    codeSnippet: "let yosh = 18;\nconsole.log(yosh);",
    options: [
      "Ma'lumotlarni xotirada saqlash va ulardan qayta foydalanish uchun",
      "Faqat HTML sahifani bezash uchun",
      "Faqat kompyuterni o'chirish uchun",
      "Internet tezligini oshirish uchun"
    ],
    answer: 0,
    explanation: "O'zgaruvchi kompyuter xotirasidagi ma'lumot saqlanadigan qutichaga o'xshaydi. Unga qiymat yuklab, dastur davomida qayta ishlatishimiz mumkin."
  },
  {
    id: 2,
    question: "JavaScript'da o'zgaruvchi nomi qaysi belgi bilan boshlanishi MUMKIN EMAS?",
    codeSnippet: null,
    options: [
      "Lotin harfi bilan (masalan: ism)",
      "Raqam bilan (masalan: 1foydalanuvchi)",
      "Pastki chiziq bilan (masalan: _yosh)",
      "Dollar belgisi bilan (masalan: $narx)"
    ],
    answer: 1,
    explanation: "O'zgaruvchi nomi hech qachon raqam bilan boshlanishi mumkin emas (masalan '1ism' xato, lekin 'ism1' to'g'ri)."
  },
  {
    id: 3,
    question: "Quyidagi kodda '=' belgisi qanday ma'noni bildiradi?",
    codeSnippet: "let shahar = \"Toshkent\";",
    options: [
      "Tenglikni tekshiradi",
      "O'ng tarafdagi qiymatni chap tarafdagi o'zgaruvchiga o'zlashtiradi (biriktiradi)",
      "Ikkala qiymatni bir-biriga qo'shadi",
      "Xatolik keltirib chiqaradi"
    ],
    answer: 1,
    explanation: "Bitta tenglik belgisi (=) o'zlashtirish operatori (assignment operator) hisoblanib, o'ng tarafdagi ma'lumotni o'zgaruvchiga biriktiradi."
  },
  {
    id: 4,
    question: "'let' va 'const' kalit so'zlari orasidagi asosiy farq nima?",
    codeSnippet: null,
    options: [
      "'let' o'zgaruvchan qiymatlar uchun, 'const' esa o'zgarmas (konstanta) qiymatlar uchun",
      "'const' faqat raqamlar uchun, 'let' faqat matnlar uchun ishlatiladi",
      "Ular orasida hech qanday farq yo'q",
      "'let' eski JavaScript, 'const' esa yangi JavaScript"
    ],
    answer: 0,
    explanation: "'let' bilan e'lon qilingan o'zgaruvchi qiymatini keyinchalik o'zgartirish mumkin, 'const' (constant) esa o'zgarmas bo'lib, qiymatini qayta o'zgartirib bo'lmaydi."
  },
  {
    id: 5,
    question: "Quyidagi kod bajarilganda konsolda qanday xatolik yuzaga keladi?",
    codeSnippet: "const PI = 3.14;\nPI = 3.15;",
    options: [
      "TypeError: Assignment to constant variable",
      "SyntaxError: Invalid name",
      "ReferenceError: PI is not defined",
      "Hech qanday xatolik bo'lmaydi"
    ],
    answer: 0,
    explanation: "const bilan e'lon qilingan o'zgaruvchiga qayta qiymat berish taqiqlangan, shuning uchun 'TypeError: Assignment to constant variable' xatosi chiqadi."
  },
  {
    id: 6,
    question: "Quyidagi kod yozilganda nima sodir bo'ladi?",
    codeSnippet: "const parol;",
    options: [
      "SyntaxError: Missing initializer in const declaration",
      "O'zgaruvchi qiymati avtomatik 'undefined' bo'ladi",
      "O'zgaruvchi qiymati avtomatik 0 bo'ladi",
      "Kod xatosiz ishlaydi"
    ],
    answer: 0,
    explanation: "const o'zgaruvchisi e'lon qilingan vaqtdayoq unga darhol qiymat berilishi shart (masalan: const parol = '1234';). Aks holda 'SyntaxError' yuzaga keladi."
  },
  {
    id: 7,
    question: "JavaScript'da matn (string) ma'lumot turini hosil qilish uchun qaysi belgilardan foydalanish mumkin?",
    codeSnippet: "const a = 'Salom';\nconst b = \"Dunyo\";\nconst c = `JavaScript`;",
    options: [
      "Yakka qo'shtirnoq (' '), juft qo'shtirnoq (\" \") va bektik (` `)",
      "Faqat juft qo'shtirnoq (\" \")",
      "Faqat qavslar ( )",
      "Faqat figurali qavslar { }"
    ],
    answer: 0,
    explanation: "JavaScript'da String (matn) turlari bittalik (' '), ikkitalik (\" \") yoki bektik (` `) belgilariga o'ralgan holda yozilishi mumkin."
  },
  {
    id: 8,
    question: "Boolean (mantiqiy) ma'lumot turi qanday qiymatlarni qabul qiladi?",
    codeSnippet: "let darsBoshlandimi = true;\nlet yomgirYogyaptimi = false;",
    options: [
      "Faqat true (rost) yoki false (yolg'on)",
      "0 dan 100 gacha bo'lgan raqamlarni",
      "Har qanday so'zlarni",
      "Faqat bo'sh qiymatlarni"
    ],
    answer: 0,
    explanation: "Boolean turi faqat ikkita qiymatdan birini qabul qiladi: true (rost / ha) yoki false (yolg'on / yo'q)."
  },
  {
    id: 9,
    question: "'null' qiymati JavaScript'da nimani anglatadi?",
    codeSnippet: "let foydalanuvchi = null;",
    options: [
      "Qasddan bo'sh qilib belgilangan yoki mavjud bo'lmagan qiymatni",
      "Cheksiz katta sonni",
      "Dastur qotib qolganini",
      "0 raqamini"
    ],
    answer: 0,
    explanation: "'null' — dasturchi tomonidan qasddan beriladigan 'bo'sh / hech narsa yo'q' degan qiymatdir. 'undefined' esa hali qiymat berilmaganlikni bildiradi."
  },
  {
    id: 10,
    question: "Quyidagi kod konsolga nima chiqaradi?",
    codeSnippet: "console.log(typeof \"JavaScript\");\nconsole.log(typeof 2026);",
    options: [
      "\"string\" va \"number\"",
      "\"text\" va \"digit\"",
      "\"word\" va \"int\"",
      "\"undefined\" va \"null\""
    ],
    answer: 0,
    explanation: "typeof operatori qiymatning turini aniqlaydi: matn uchun 'string', har qanday son uchun 'number' qaytaradi."
  },
  {
    id: 11,
    question: "Quyidagi mashhur JavaScript holatida konsolga nima chiqadi?",
    codeSnippet: "console.log(typeof null);",
    options: [
      "\"object\"",
      "\"null\"",
      "\"undefined\"",
      "\"number\""
    ],
    answer: 0,
    explanation: "JavaScript yaratilgan davrdan qolgan mashhur xususiyatga ko'ra, typeof null har doim 'object' deb qaytaradi."
  },
  {
    id: 12,
    question: "E'lon qilinmagan (mavjud bo'lmagan) o'zgaruvchini ishlatishga uringanda qanday xato chiqadi?",
    codeSnippet: "console.log(nomalumOzgaruvchi);",
    options: [
      "ReferenceError: nomalumOzgaruvchi is not defined",
      "TypeError: Invalid type",
      "SyntaxError: Unexpected token",
      "Hech qanday xato chiqmaydi"
    ],
    answer: 0,
    explanation: "E'lon qilinmagan o'zgaruvchiga murojaat qilinganda brauzer 'ReferenceError' (manzil / havola xatosi) beradi."
  }
];


