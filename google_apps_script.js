/**
 * GOOGLE APPS SCRIPT KODI
 * 
 * Ushbu kodni Google Sheets jadvalingizga joylashtirish bo'yicha ko'rsatma:
 * 1. Google Sheets (https://sheets.google.com) da yangi bo'sh jadval oching.
 * 2. Yuqori menyudan "Kengaytmalar" (Extensions) -> "Apps Script" bo'limiga kiring.
 * 3. Ochilgan oynadagi barcha kodni o'chirib, ushbu fayldagi kodni to'liq nusxalab qo'ying (Paste).
 * 4. Yuqoridagi "Saqlash" (Disk belgisi) tugmasini bosing.
 * 5. O'ng yuqoridagi ko'k "Deploy" (Joylashtirish) -> "New deployment" (Yangi joylashtirish) ni bosing.
 * 6. Chap tomondagi tishli g'ildirak (sozlama) belgisidan "Web app" ni tanlang.
 * 7. Sozlamalarni quyidagicha belgilang:
 *    - Description: "JS Topshiriqlar Webhook"
 *    - Execute as: "Me" (O'zim)
 *    - Who has access: "Anyone" (Hamma / Lyuboy polzovatel)  <--- JUDA MUHIM!
 * 8. "Deploy" tugmasini bosing va ruxsatlarni tasdiqlang (Review Permissions -> hisobingizni tanlang -> Advanced -> Go to ... (unsafe) -> Allow).
 * 9. Chiqqan "Web app URL" havolasini nusxalab oling (masalan: https://script.google.com/macros/s/.../exec).
 * 10. Ushbu URL havolani o'quvchi topshiriq tizimi sozlamalariga kiriting!
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Agar jadval bo'sh bo'lsa, sarlavhalarni avtomatik qo'yish
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Vaqt", 
        "O'quvchi Ismi", 
        "Guruhi / Telefon", 
        "Topshiriq №", 
        "Topshiriq Nomi", 
        "Yuklangan Fayl", 
        "Yechim Kodi"
      ];
      sheet.appendRow(headers);
      
      // Sarlavha dizayni (qalin shrift, fon rangi)
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setBackground("#3b82f6");
      headerRange.setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
    
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    
    const now = new Date();
    const formattedDate = Utilities.formatDate(now, "GMT+5", "yyyy-MM-dd HH:mm:ss");
    
    const studentName = data.studentName || "Noma'lum";
    const studentGroup = data.studentGroup || "-";
    const taskId = data.taskId || "-";
    const taskTitle = data.taskTitle || "-";
    const fileName = data.fileName || "Kiritilgan kod";
    const code = data.code || "";
    
    // Yangi qator qo'shish
    sheet.appendRow([
      formattedDate,
      studentName,
      studentGroup,
      taskId,
      taskTitle,
      fileName,
      code
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: "Topshiriq muvaffaqiyatli saqlandi!",
      receivedAt: formattedDate
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      status: "error",
      message: error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    status: "ok",
    message: "Google Apps Script Webhook faol holatda!"
  })).setMimeType(ContentService.MimeType.JSON);
}
