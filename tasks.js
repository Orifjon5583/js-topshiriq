// Topshiriqlar ro'yxati (JavaScript: Loop — for, forEach)
const TASKS_DATA = [
  {
    id: 1,
    category: "for loop",
    badge: "1-topshiriq",
    title: "1 dan 10 gacha bo‘lgan sonlarni chiqarish",
    description: "for siklidan foydalanib, 1 dan 10 gacha bo‘lgan barcha sonlarni ketma-ket konsolga (console.log) chiqaring.",
    hint: "for (let i = 1; i <= 10; i++) { console.log(i); }",
    starterCode: `// 1-topshiriq: 1 dan 10 gacha sonlarni chiqaring\nfor (let i = 1; i <= 10; i++) {\n  console.log(i);\n}`,
    expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10"
  },
  {
    id: 2,
    category: "for loop",
    badge: "2-topshiriq",
    title: "10 dan 1 gacha teskari sanash",
    description: "for siklidan foydalanib, 10 dan 1 gacha teskari tartibda sonlarni konsolga chiqaring.",
    hint: "i = 10 dan boshlab, i >= 1 sharti bilan i-- kamaytirib boring.",
    starterCode: `// 2-topshiriq: 10 dan 1 gacha teskari sanash\nfor (let i = 10; i >= 1; i--) {\n  console.log(i);\n}`,
    expectedOutput: "10\n9\n8\n7\n6\n5\n4\n3\n2\n1"
  },
  {
    id: 3,
    category: "for loop",
    badge: "3-topshiriq",
    title: "1 dan 20 gacha bo‘lgan juft sonlar",
    description: "for siklidan foydalanib, 1 dan 20 gacha bo‘lgan juft sonlarni konsolga chiqaring.",
    hint: "i % 2 === 0 shartidan foydalanishingiz yoki i += 2 qilishingiz mumkin.",
    starterCode: `// 3-topshiriq: 1 dan 20 gacha bo'lgan juft sonlar\nfor (let i = 1; i <= 20; i++) {\n  if (i % 2 === 0) {\n    console.log(i);\n  }\n}`,
    expectedOutput: "2\n4\n6\n8\n10\n12\n14\n16\n18\n20"
  },
  {
    id: 4,
    category: "for loop",
    badge: "4-topshiriq",
    title: "1 dan 15 gacha bo‘lgan toq sonlar",
    description: "for siklidan foydalanib, 1 dan 15 gacha bo‘lgan toq sonlarni konsolga chiqaring.",
    hint: "i % 2 !== 0 shartidan foydalanishingiz mumkin.",
    starterCode: `// 4-topshiriq: 1 dan 15 gacha bo'lgan toq sonlar\nfor (let i = 1; i <= 15; i++) {\n  if (i % 2 !== 0) {\n    console.log(i);\n  }\n}`,
    expectedOutput: "1\n3\n5\n7\n9\n11\n13\n15"
  },
  {
    id: 5,
    category: "for loop",
    badge: "5-topshiriq",
    title: "\"Salom!\" so‘zini 5 marta chiqarish",
    description: "for siklidan foydalanib, \"Salom!\" so‘zini konsolga 5 marta chiqaring.",
    hint: "Sikl 1 dan 5 gacha aylanib, console.log(\"Salom!\") chaqirilishi kerak.",
    starterCode: `// 5-topshiriq: "Salom!" so'zini 5 marta chiqarish\nfor (let i = 1; i <= 5; i++) {\n  console.log("Salom!");\n}`,
    expectedOutput: "Salom!\nSalom!\nSalom!\nSalom!\nSalom!"
  },
  {
    id: 6,
    category: "for loop",
    badge: "6-topshiriq",
    title: "7 sonining ko‘paytirish jadvali",
    description: "for siklidan foydalanib, 7 sonining 1 dan 10 gacha bo‘lgan ko‘paytirish jadvalini konsolga chiqaring.",
    hint: "console.log(`7 * ${i} = ${7 * i}`) ko'rinishida yozing.",
    starterCode: `// 6-topshiriq: 7 ning ko'paytirish jadvali\nfor (let i = 1; i <= 10; i++) {\n  console.log(\`7 * \${i} = \${7 * i}\`);\n}`,
    expectedOutput: "7 * 1 = 7\n7 * 2 = 14\n...\n7 * 10 = 70"
  },
  {
    id: 7,
    category: "forEach",
    badge: "7-topshiriq",
    title: "Massivdagi barcha ismlarni chiqarish",
    description: "forEach yordamida quyidagi massivdagi barcha ismlarni konsolga chiqaring:\n\nconst ismlar = ['Anvar', 'Zarina', 'Jasur', 'Nodira'];",
    hint: "ismlar.forEach(ism => console.log(ism));",
    starterCode: `// 7-topshiriq: ismlarni forEach bilan chiqarish\nconst ismlar = ['Anvar', 'Zarina', 'Jasur', 'Nodira'];\n\nismlar.forEach(function(ism) {\n  console.log(ism);\n});`,
    expectedOutput: "Anvar\nZarina\nJasur\nNodira"
  },
  {
    id: 8,
    category: "forEach",
    badge: "8-topshiriq",
    title: "\"Salom, [ism]!\" xabarini chiqarish",
    description: "forEach yordamida quyidagi massivdagi har bir ism uchun \"Salom, [ism]!\" ko‘rinishida xabar chiqaring:\n\nconst ismlar = ['Ali', 'Vali', 'Hasan', 'Husan'];",
    hint: "ismlar.forEach(ism => console.log(`Salom, ${ism}!`));",
    starterCode: `// 8-topshiriq: "Salom, [ism]!" chiqarish\nconst ismlar = ['Ali', 'Vali', 'Hasan', 'Husan'];\n\nismlar.forEach(ism => {\n  console.log(\`Salom, \${ism}!\`);\n});`,
    expectedOutput: "Salom, Ali!\nSalom, Vali!\nSalom, Hasan!\nSalom, Husan!"
  },
  {
    id: 9,
    category: "forEach",
    badge: "9-topshiriq",
    title: "Sonlarni 2 ga ko‘paytirib chiqarish",
    description: "forEach yordamida quyidagi massivdagi barcha sonlarni 2 ga ko‘paytirib, natijani konsolga chiqaring:\n\nconst sonlar = [2, 4, 6, 8, 10];",
    hint: "sonlar.forEach(son => console.log(son * 2));",
    starterCode: `// 9-topshiriq: sonlarni 2 ga ko'paytirish\nconst sonlar = [2, 4, 6, 8, 10];\n\nsonlar.forEach(son => {\n  console.log(son * 2);\n});`,
    expectedOutput: "4\n8\n12\n16\n20"
  },
  {
    id: 10,
    category: "forEach",
    badge: "10-topshiriq",
    title: "\"Mahsulot: [nom]\" shaklida chiqarish",
    description: "forEach yordamida quyidagi mahsulotlarning har birini \"Mahsulot: [nom]\" ko‘rinishida konsolga chiqaring:\n\nconst mahsulotlar = ['Non', 'Sut', 'Olma', 'Shokolad'];",
    hint: "mahsulotlar.forEach(m => console.log(`Mahsulot: ${m}`));",
    starterCode: `// 10-topshiriq: Mahsulotlarni chiqarish\nconst mahsulotlar = ['Non', 'Sut', 'Olma', 'Shokolad'];\n\nmahsulotlar.forEach(mahsulot => {\n  console.log(\`Mahsulot: \${mahsulot}\`);\n});`,
    expectedOutput: "Mahsulot: Non\nMahsulot: Sut\nMahsulot: Olma\nMahsulot: Shokolad"
  },
  {
    id: 11,
    category: "forEach",
    badge: "11-topshiriq",
    title: "Sonlarga 5 qo‘shib chiqarish",
    description: "forEach yordamida quyidagi sonlarning har biriga 5 qo‘shib, natijani konsolga chiqaring:\n\nconst sonlar = [10, 20, 30, 40, 50];",
    hint: "sonlar.forEach(son => console.log(son + 5));",
    starterCode: `// 11-topshiriq: Sonlarga 5 qo'shish\nconst sonlar = [10, 20, 30, 40, 50];\n\nsonlar.forEach(son => {\n  console.log(son + 5);\n});`,
    expectedOutput: "15\n25\n35\n45\n55"
  },
  {
    id: 12,
    category: "for + forEach",
    badge: "12-topshiriq (Final)",
    title: "for va forEach birgalikda",
    description: "1 dan 10 gacha sonlarni for yordamida, berilgan ismlarni esa forEach yordamida konsolga chiqaring:\n\nconst ismlar = ['Aziz', 'Madina', 'Bobur'];",
    hint: "Avval for sikli bilan 1-10 sonlarni, so'ngra forEach bilan ismlarni chiqaring.",
    starterCode: `// 12-topshiriq: for va forEach birgalikda\nfor (let i = 1; i <= 10; i++) {\n  console.log(i);\n}\n\nconst ismlar = ['Aziz', 'Madina', 'Bobur'];\nismlar.forEach(ism => {\n  console.log(ism);\n});`,
    expectedOutput: "1..10 sonlari va ismlar"
  }
];
