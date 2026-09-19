/**
 * =========================================================================
 * GOOGLE APPS SCRIPT KODI (5 ta qismni avtomatik alohida varaqlarga ajratuvchi)
 * =========================================================================
 * 
 * Ushbu kod barcha 5 ta qism natijalarini Google Sheets jadvalingizda:
 * - "1-Qism" (1..12 kodli topshiriqlar) — Moviy rang
 * - "2-Qism" (13..22 amaliy topshiriqlar) — Binafsha rang
 * - "3-Qism" (Oson test — 12 ta savol) — To'q sariq rang
 * - "4-Qism" (Amaliy test — 12 ta savol) — Yashil rang
 * - "5-Qism" (O'zgaruvchilar va turlar testi — 12 ta savol) — Pushti rang
 * alohida varaqlarga (Sheets) tartibli va chiroyli tarzda saqlaydi!
 */

function doPost(e) {
  try {
    const ss = SpreadsheetApp.getActiveSpreadsheet();
    
    let data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else {
      data = e.parameter;
    }
    
    // Toshkent vaqti bilan sanani olish
    const now = new Date();
    const formattedDate = Utilities.formatDate(now, "GMT+5", "yyyy-MM-dd HH:mm:ss");
    
    const studentName = data.studentName || "Noma'lum";
    const studentGroup = data.studentGroup || "-";
    const taskId = data.taskId || 1;
    const taskTitle = data.taskTitle || "-";
    const fileName = data.fileName || "kod.js";
    const code = data.code || "";
    
    // Qismni aniqlash (1-Qism, 2-Qism, 3-Qism, 4-Qism, 5-Qism)
    let sheetName = "1-Qism";
    if (data.part) {
      sheetName = data.part;
    } else if (typeof taskId === "number" && taskId > 12) {
      sheetName = "2-Qism";
    }
    
    // Kerakli varaqni (Sheet) topish yoki yangi ochish
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }
    
    // Agar varaq yangi va bo'sh bo'lsa, sarlavha qatorini yaratamiz
    const isQuizPart = (sheetName === "3-Qism" || sheetName === "4-Qism" || sheetName === "5-Qism");
    
    if (sheet.getLastRow() === 0) {
      const headers = isQuizPart ? [
        "Vaqt",
        "Qism",
        "O'quvchi Ismi",
        "Guruhi / Telefon",
        "To'g'ri (Soni)",
        "Xato (Soni)",
        "Foiz (%)",
        "Umumiy Ball",
        "Test Nomi",
        "Batafsil Natija"
      ] : [
        "Vaqt",
        "Qism",
        "O'quvchi Ismi",
        "Guruhi / Telefon",
        "Topshiriq №",
        "Topshiriq Nomi",
        "Fayl Nomi",
        "Yechim Kodi"
      ];
      
      sheet.appendRow(headers);
      
      // Sarlavha qatori dizayni
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      headerRange.setFontColor("#ffffff");
      headerRange.setFontSize(11);
      
      // Har bir qism uchun o'ziga xos rang
      let headerBg = "#2563eb"; // 1-Qism: Moviy
      if (sheetName === "2-Qism") headerBg = "#7c3aed"; // 2-Qism: Binafsha
      else if (sheetName === "3-Qism") headerBg = "#d97706"; // 3-Qism: To'q sariq
      else if (sheetName === "4-Qism") headerBg = "#059669"; // 4-Qism: Yashil
      else if (sheetName === "5-Qism") headerBg = "#db2777"; // 5-Qism: Pushti
      
      headerRange.setBackground(headerBg);
      sheet.setFrozenRows(1);
      
      // Ustunlar kengligini qulay qilib sozlash
      if (isQuizPart) {
        sheet.setColumnWidth(1, 160); // Vaqt
        sheet.setColumnWidth(2, 90);  // Qism
        sheet.setColumnWidth(3, 180); // O'quvchi Ismi
        sheet.setColumnWidth(4, 160); // Guruhi / Telefon
        sheet.setColumnWidth(5, 120); // To'g'ri (Soni)
        sheet.setColumnWidth(6, 120); // Xato (Soni)
        sheet.setColumnWidth(7, 100); // Foiz (%)
        sheet.setColumnWidth(8, 120); // Umumiy Ball
        sheet.setColumnWidth(9, 260); // Test Nomi
        sheet.setColumnWidth(10, 400); // Batafsil Natija
      } else {
        sheet.setColumnWidth(1, 160); // Vaqt
        sheet.setColumnWidth(2, 90);  // Qism
        sheet.setColumnWidth(3, 180); // O'quvchi Ismi
        sheet.setColumnWidth(4, 160); // Guruhi / Telefon
        sheet.setColumnWidth(5, 120); // Topshiriq №
        sheet.setColumnWidth(6, 260); // Nomi
        sheet.setColumnWidth(7, 140); // Fayl
        sheet.setColumnWidth(8, 400); // Kod / Natija
      }
    }
    
    // Ma'lumotlarni yangi qator sifatida yozish
    if (isQuizPart) {
      sheet.appendRow([
        formattedDate,
        sheetName,
        studentName,
        studentGroup,
        data.correctCount !== undefined ? data.correctCount : "",
        data.wrongCount !== undefined ? data.wrongCount : "",
        data.percent || "",
        data.scoreText || "",
        taskTitle,
        code
      ]);
    } else {
      sheet.appendRow([
        formattedDate,
        sheetName,
        studentName,
        studentGroup,
        taskId,
        taskTitle,
        fileName,
        code
      ]);
    }
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: `Ma'lumot ${sheetName} varag'iga muvaffaqiyatli yozildi!`,
      sheet: sheetName,
      time: formattedDate
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
    message: "Google Apps Script Webhook (1..5 Qismlar) to'liq faol holatda ishlamoqda!"
  })).setMimeType(ContentService.MimeType.JSON);
}
