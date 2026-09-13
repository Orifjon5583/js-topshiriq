# JavaScript Topshiriqlar Tizimi (1-Qism va 2-Qism)

Ushbu platforma o'quvchilarga JavaScript loop mavzularidagi 22 ta topshiriqni (2 ta qismga bo'lingan) bosqichma-bosqich yechish, kodini muharrirda tekshirib topshirish va natijalarni avtomatik ravishda **Google Sheets** jadvaliga saqlash imkonini beradi.

### Qismlar:
- **1-Qism (1 - 12 topshiriqlar):** `for` va `forEach` asosiy masalalari.
- **2-Qism (13 - 22 topshiriqlar):** `for`, `forEach`, yig'indi hisoblash, massivlar va obyektlar bilan amaliy masalalar.

---

## Loyiha Fayllari

- `index.html` — Asosiy zamonaviy veb-sahifa (UI/UX, 1-Qism va 2-Qism tablari)
- `style.css` — Dizayn, animatsiyalar, Dark/Light rejim va stepper uslublari
- `app.js` — Topshiriqlar oqimi, sinash konsoli va Google Sheets ga yuborish mantiqi
- `tasks.js` — Jami 22 ta topshiriqning to'liq shartlari va maslahatlari
- `google_apps_script.js` — Google Sheets ga ma'lumotlarni qabul qilib yozuvchi Apps Script kodi

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
