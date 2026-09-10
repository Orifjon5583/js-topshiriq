// Topshiriqlar ro'yxati (JavaScript: Loop — for, forEach)
const TASKS_DATA = [
  {
    id: 1,
    category: "for loop",
    badge: "1-topshiriq",
    title: "1 dan 10 gacha bo‘lgan sonlarni chiqarish",
    description: "for siklidan foydalanib, 1 dan 10 gacha bo‘lgan barcha sonlarni ketma-ket konsolga (console.log) chiqaring.",
    hint: "for sikli sintaksisi: for (boshlanish; shart; qadam) { ... }",
    starterCode: "",
    expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
  },
  {
    id: 2,
    category: "for loop",
    badge: "2-topshiriq",
    title: "10 dan 1 gacha teskari sanash",
    description: "for siklidan foydalanib, 10 dan 1 gacha teskari tartibda sonlarni konsolga chiqaring.",
    hint: "Siklni 10 dan boshlab, 1 gacha kamaytirib (i--) boring.",
    starterCode: "",
    expectedOutput: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1"
  },
  {
    id: 3,
    category: "for loop",
    badge: "3-topshiriq",
    title: "1 dan 20 gacha bo‘lgan juft sonlar",
    description: "for siklidan foydalanib, 1 dan 20 gacha bo‘lgan juft sonlarni konsolga chiqaring.",
    hint: "Sonning juftligini tekshirish uchun i % 2 === 0 dan foydalaning.",
    starterCode: "",
    expectedOutput: "2\n4\n6\n8\n10\n12\n14\n16\n18\n20"
  },
  {
    id: 4,
    category: "for loop",
    badge: "4-topshiriq",
    title: "1 dan 15 gacha bo‘lgan toq sonlar",
    description: "for siklidan foydalanib, 1 dan 15 gacha bo‘lgan toq sonlarni konsolga chiqaring.",
    hint: "Toq sonlar uchun i % 2 !== 0 shartidan foydalaning.",
    starterCode: "",
    expectedOutput: "1\n3\n5\n7\n9\n11\n13\n15"
  },
  {
    id: 5,
    category: "for loop",
    badge: "5-topshiriq",
    title: "\"Salom!\" so‘zini 5 marta chiqarish",
    description: "for siklidan foydalanib, \"Salom!\" so‘zini konsolga 5 marta chiqaring.",
    hint: "Sikl 5 marta aylanishi va har bir qadamda konsolga \"Salom!\" chiqarishi kerak.",
    starterCode: "",
    expectedOutput: "Salom!\nSalom!\nSalom!\nSalom!\nSalom!"
  },
  {
    id: 6,
    category: "for loop",
    badge: "6-topshiriq",
    title: "7 sonining ko‘paytirish jadvali",
    description: "for siklidan foydalanib, 7 sonining 1 dan 10 gacha bo‘lgan ko‘paytirish jadvalini konsolga chiqaring.",
    hint: "Har bir qadamda 7 ni sikl o'zgaruvchisiga ko'paytirib konsolga chiqaring.",
    starterCode: "",
    expectedOutput: "7 * 1 = 7\n7 * 2 = 14\n...\n7 * 10 = 70"
  },
  {
    id: 7,
    category: "forEach",
    badge: "7-topshiriq",
    title: "Massivdagi barcha ismlarni chiqarish",
    description: "forEach yordamida quyidagi massivdagi barcha ismlarni konsolga chiqaring:\n\nconst ismlar = ['Anvar', 'Zarina', 'Jasur', 'Nodira'];",
    hint: "massiv.forEach(element => { ... }) sintaksisidan foydalaning.",
    starterCode: "const ismlar = ['Anvar', 'Zarina', 'Jasur', 'Nodira'];\n\n",
    expectedOutput: "Anvar\nZarina\nJasur\nNodira"
  },
  {
    id: 8,
    category: "forEach",
    badge: "8-topshiriq",
    title: "\"Salom, [ism]!\" xabarini chiqarish",
    description: "forEach yordamida quyidagi massivdagi har bir ism uchun \"Salom, [ism]!\" ko‘rinishida xabar chiqaring:\n\nconst ismlar = ['Ali', 'Vali', 'Hasan', 'Husan'];",
    hint: "Har bir ism oldiga \"Salom, \" so'zini qo'shib chiqaring.",
    starterCode: "const ismlar = ['Ali', 'Vali', 'Hasan', 'Husan'];\n\n",
    expectedOutput: "Salom, Ali!\nSalom, Vali!\nSalom, Hasan!\nSalom, Husan!"
  },
  {
    id: 9,
    category: "forEach",
    badge: "9-topshiriq",
    title: "Sonlarni 2 ga ko‘paytirib chiqarish",
    description: "forEach yordamida quyidagi massivdagi barcha sonlarni 2 ga ko‘paytirib, natijani konsolga chiqaring:\n\nconst sonlar = [2, 4, 6, 8, 10];",
    hint: "forEach sikli ichida har bir sonni 2 ga ko'paytiring.",
    starterCode: "const sonlar = [2, 4, 6, 8, 10];\n\n",
    expectedOutput: "4\n8\n12\n16\n20"
  },
  {
    id: 10,
    category: "forEach",
    badge: "10-topshiriq",
    title: "\"Mahsulot: [nom]\" shaklida chiqarish",
    description: "forEach yordamida quyidagi mahsulotlarning har birini \"Mahsulot: [nom]\" ko‘rinishida konsolga chiqaring:\n\nconst mahsulotlar = ['Non', 'Sut', 'Olma', 'Shokolad'];",
    hint: "Mahsulot nomiga \"Mahsulot: \" prefiksini qo'shib chiqaring.",
    starterCode: "const mahsulotlar = ['Non', 'Sut', 'Olma', 'Shokolad'];\n\n",
    expectedOutput: "Mahsulot: Non\nMahsulot: Sut\nMahsulot: Olma\nMahsulot: Shokolad"
  },
  {
    id: 11,
    category: "forEach",
    badge: "11-topshiriq",
    title: "Sonlarga 5 qo‘shib chiqarish",
    description: "forEach yordamida quyidagi sonlarning har biriga 5 qo‘shib, natijani konsolga chiqaring:\n\nconst sonlar = [10, 20, 30, 40, 50];",
    hint: "Har bir songa 5 qo'shib, natijani console.log orqali chiqaring.",
    starterCode: "const sonlar = [10, 20, 30, 40, 50];\n\n",
    expectedOutput: "15\n25\n35\n45\n55"
  },
  {
    id: 12,
    category: "for + forEach",
    badge: "12-topshiriq (Final)",
    title: "for va forEach birgalikda",
    description: "1 dan 10 gacha sonlarni for yordamida, berilgan ismlarni esa forEach yordamida konsolga chiqaring:\n\nconst ismlar = ['Aziz', 'Madina', 'Bobur'];",
    hint: "Oldin for siklini, undan so'ng ismlar massivi uchun forEach ni yozing.",
    starterCode: "const ismlar = ['Aziz', 'Madina', 'Bobur'];\n\n",
    expectedOutput: "1..10 sonlari va ismlar"
  }
];
