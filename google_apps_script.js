/**
 * GOOGLE APPS SCRIPT KODI (2 ta qismni alohida varaqlarga ajratuvchi)
 * 
 * Ushbu kod topshiriqlarni avtomatik tarzda Google Sheets da:
 * - "1-Qism" varag'iga (1..12 topshiriqlar)
 * - "2-Qism" varag'iga (13..22 topshiriqlar)
 * alohida-alohida tartibli qilib yozadi!
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
    
    const now = new Date();
    const formattedDate = Utilities.formatDate(now, "GMT+5", "yyyy-MM-dd HH:mm:ss");
    
    const studentName = data.studentName || "Noma'lum";
    const studentGroup = data.studentGroup || "-";
    const taskId = parseInt(data.taskId) || 1;
    const taskTitle = data.taskTitle || "-";
    const fileName = data.fileName || "editor_kod.js";
    const code = data.code || "";
    
    // Qismni aniqlash (1-Qism yoki 2-Qism)
    let sheetName = "1-Qism";
    let partName = "1-Qism";
    if (data.part === "2-Qism" || taskId > 12) {
      sheetName = "2-Qism";
      partName = "2-Qism";
    }
    
    // Kerakli varaqni topish yoki yangi yaratish
    let sheet = ss.getSheetByName(sheetName);
    if (!sheet) {
      sheet = ss.insertSheet(sheetName);
    }
    
    // Agar ushbu varaq bo'sh bo'lsa, sarlavhalarni qo'yish
    if (sheet.getLastRow() === 0) {
      const headers = [
        "Vaqt", 
        "Qism",
        "O'quvchi Ismi", 
        "Guruhi / Telefon", 
        "Topshiriq №", 
        "Topshiriq Nomi", 
        "Yuklangan Fayl", 
        "Yechim Kodi"
      ];
      sheet.appendRow(headers);
      
      // Sarlavha dizayni
      const headerRange = sheet.getRange(1, 1, 1, headers.length);
      headerRange.setFontWeight("bold");
      // 1-qism ko'k, 2-qism binafsharang/yashil
      const headerBg = (sheetName === "1-Qism") ? "#3b82f6" : "#8b5cf6";
      headerRange.setBackground(headerBg);
      headerRange.setFontColor("#ffffff");
      sheet.setFrozenRows(1);
    }
    
    // Yangi qator qo'shish
    sheet.appendRow([
      formattedDate,
      partName,
      studentName,
      studentGroup,
      taskId,
      taskTitle,
      fileName,
      code
    ]);
    
    return ContentService.createTextOutput(JSON.stringify({
      status: "success",
      message: `${sheetName} ga muvaffaqiyatli saqlandi!`,
      sheetName: sheetName,
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
    message: "Google Apps Script Webhook (1-Qism & 2-Qism) faol holatda!"
  })).setMimeType(ContentService.MimeType.JSON);
}
