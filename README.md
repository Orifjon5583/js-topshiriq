# JavaScript Topshiriqlar Tizimi (Loop — for, forEach)

Ushbu platforma o'quvchilarga JavaScript loop mavzularidagi 12 ta topshiriqni bosqichma-bosqich yechish, kodini (.js fayl yoki brauzer muharririda) topshirish va natijalarni avtomatik ravishda **Google Sheets** jadvaliga saqlash imkonini beradi.

---

## Loyiha Fayllari

- `index.html` — Asosiy zamonaviy veb-sahifa (UI/UX)
- `style.css` — Dizayn, animatsiyalar, editor va stepper uslublari
- `app.js` — Topshiriqlar oqimi, fayl o'qish, brauzerda sinash va Google Sheets ga yuborish mantiqi
- `tasks.js` — Siz bergan 12 ta topshiriqning to'liq shartlari, maslahatlari va boshlang'ich kodlari
- `google_apps_script.js` — Google Sheets ga ma'lumotlarni qabul qilib yozuvchi bepul Apps Script kodi

---

## Tizim qanday ishlaydi?

1. **Kirish**: O'quvchi o'zining **Ism-familiyasi** va **Guruh/Telefoni**ni kiritadi.
2. **Ketma-ket topshiriqlar**:
   - 1-topshiriq sharti va kutilayotgan natijasi chiqadi.
   - O'quvchi `.js` faylini yuklaydi yoki to'g'ridan-to'g'ri kod muharririda yozadi.
   - **"Kodni ishlatish (Test)"** tugmasi orqali o'z kodi konsolda to'g'ri ishlayotganini tekshirib ko'ra oladi.
   - **"Topshirish va Keyingisi"** tugmasini bosganda, o'quvchi ma'lumotlari va yechim kodi Google Sheets jadvaliga tushadi va avtomatik 2-topshiriq ochiladi!
3. **Yakunlash**: 12-topshiriq topshirilgach, umumiy xulosa va tabriknoma ekrani ko'rsatiladi.

---

## Google Sheets ga ulash (2 daqiqalik qo'llanma):

1. Brauzerda [Google Sheets](https://sheets.google.com) ga kiring va yangi bo'sh jadval yarating.
2. Yuqori menyudan **Kengaytmalar (Extensions) -> Apps Script** bo'limiga kiring.
3. Loyihadagi `google_apps_script.js` faylidagi barcha kodni nusxalab, Apps Script muharririga joylashtiring.
4. Yuqoridagi **Saqlash (Disk belgisi)** tugmasini bosing.
5. O'ng yuqoridagi ko'k **"Deploy" (Joylashtirish) -> "New deployment"** tugmasini bosing:
   - Chap tarafdagi tishli g'ildirakdan **"Web app"** ni tanlang.
   - **Execute as**: "Me" (O'zim)
   - **Who has access**: **"Anyone"** (Hamma / Lyuboy polzovatel) qilib belgilang. *(Juda muhim)*
6. **Deploy** tugmasini bosing va hisobingizga ruxsat bering (Review Permissions -> hisob -> Advanced -> Go to ... (unsafe) -> Allow).
7. Berilgan **Web app URL** manzilini nusxalab oling.
8. Veb-sahifani ochib, o'ng yuqoridagi **Sozlamalar (Tishli g'ildirak)** belgisini bosing va URL manzilni qo'yib, **"Saqlash"** tugmasini bosing.

Hammasi tayyor! Endi o'quvchi har bir topshiriqni yuborganida Google Sheets jadvalingizda avtomatik yangi qator paydo bo'ladi.
