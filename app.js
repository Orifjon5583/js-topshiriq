// JavaScript Topshiriqlar Tizimi — Asosiy Mantiq

document.addEventListener("DOMContentLoaded", () => {
  // Holat (State)
  const state = {
    studentName: localStorage.getItem("js_student_name") || "",
    studentGroup: localStorage.getItem("js_student_group") || "",
    webhookUrl: localStorage.getItem("js_webhook_url") || "",
    currentIndex: 0,
    currentFileName: "",
    solutions: JSON.parse(localStorage.getItem("js_solutions") || "{}")
  };

  // DOM Elementlar
  const startScreen = document.getElementById("startScreen");
  const taskScreen = document.getElementById("taskScreen");
  const completeScreen = document.getElementById("completeScreen");

  const studentForm = document.getElementById("studentForm");
  const studentNameInput = document.getElementById("studentNameInput");
  const studentGroupInput = document.getElementById("studentGroupInput");

  const headerUserInfo = document.getElementById("headerUserInfo");
  const headerUserName = document.getElementById("headerUserName");

  // Stepper elementlar
  const stepDotsContainer = document.getElementById("stepDotsContainer");
  const stepCounterText = document.getElementById("stepCounterText");
  const progressBarFill = document.getElementById("progressBarFill");

  // Task ma'lumotlari
  const taskBadge = document.getElementById("taskBadge");
  const taskCategory = document.getElementById("taskCategory");
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");
  const taskHint = document.getElementById("taskHint");
  const taskExpected = document.getElementById("taskExpected");

  // Kod muharriri va yuklash
  const codeEditor = document.getElementById("codeEditor");
  const charCount = document.getElementById("charCount");
  const dropZone = document.getElementById("dropZone");
  const fileInput = document.getElementById("fileInput");
  const fileInfoBar = document.getElementById("fileInfoBar");
  const uploadedFileName = document.getElementById("uploadedFileName");
  const btnRemoveFile = document.getElementById("btnRemoveFile");

  const tabCodeBtn = document.getElementById("tabCodeBtn");
  const tabFileBtn = document.getElementById("tabFileBtn");
  const tabCode = document.getElementById("tabCode");
  const tabFile = document.getElementById("tabFile");

  // Konsol va harakatlar
  const consoleOutput = document.getElementById("consoleOutput");
  const btnClearConsole = document.getElementById("btnClearConsole");
  const btnRunCode = document.getElementById("btnRunCode");
  const btnSubmitTask = document.getElementById("btnSubmitTask");
  const submitBtnText = document.getElementById("submitBtnText");
  const submitBtnIcon = document.getElementById("submitBtnIcon");

  // Settings Modal
  const btnSettings = document.getElementById("btnSettings");
  const settingsModal = document.getElementById("settingsModal");
  const btnCloseSettings = document.getElementById("btnCloseSettings");
  const btnSaveSettings = document.getElementById("btnSaveSettings");
  const webhookUrlInput = document.getElementById("webhookUrlInput");

  // Natijalar xulosasi
  const summaryTableBody = document.getElementById("summaryTableBody");
  const btnRestart = document.getElementById("btnRestart");

  // Toast
  const toast = document.getElementById("toast");
  const toastMsg = document.getElementById("toastMsg");

  // Toast xabarnomasini chiqarish
  function showToast(message, type = "success") {
    toastMsg.textContent = message;
    toast.className = `toast show ${type}`;
    setTimeout(() => {
      toast.className = "toast";
    }, 3500);
  }

  // Sahifalar almashinuvi
  function showScreen(screen) {
    [startScreen, taskScreen, completeScreen].forEach(s => s.classList.remove("active"));
    screen.classList.add("active");
  }

  // Dastlabki tekshiruv: agar o'quvchi ma'lumoti bo'lsa
  if (state.studentName && state.studentGroup) {
    studentNameInput.value = state.studentName;
    studentGroupInput.value = state.studentGroup;
    updateUserHeader();
    
    // Agar oldin qaysidir topshiriqlar topshirilgan bo'lsa, birinchi topshirilmaganiga o'tamiz
    let nextIndex = 0;
    while (nextIndex < TASKS_DATA.length && state.solutions[TASKS_DATA[nextIndex].id]) {
      nextIndex++;
    }
    if (nextIndex >= TASKS_DATA.length) {
      renderSummary();
      showScreen(completeScreen);
    } else {
      state.currentIndex = nextIndex;
      initStepper();
      loadTask(state.currentIndex);
      showScreen(taskScreen);
    }
  }

  // Headerda foydalanuvchini ko'rsatish
  function updateUserHeader() {
    if (state.studentName) {
      headerUserInfo.style.display = "flex";
      headerUserName.textContent = state.studentName;
    }
  }

  // Ro'yxatdan o'tish (Boshlash formasi)
  studentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = studentNameInput.value.trim();
    const group = studentGroupInput.value.trim();

    if (!name || !group) {
      showToast("Iltimos, barcha maydonlarni to'ldiring!", "error");
      return;
    }

    state.studentName = name;
    state.studentGroup = group;
    localStorage.setItem("js_student_name", name);
    localStorage.setItem("js_student_group", group);

    updateUserHeader();
    initStepper();
    loadTask(0);
    showScreen(taskScreen);
    showToast(`Xush kelibsiz, ${name}! Topshiriqlarni boshlaymiz.`);
  });

  // Stepper tugmalarini hosil qilish
  function initStepper() {
    stepDotsContainer.innerHTML = "";
    TASKS_DATA.forEach((task, idx) => {
      const dot = document.createElement("button");
      dot.className = "step-dot";
      dot.textContent = idx + 1;
      dot.title = `${task.badge}: ${task.title}`;

      if (state.solutions[task.id]) {
        dot.classList.add("completed");
      }
      if (idx === state.currentIndex) {
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => {
        // Faqat oldingi yechilgan yoki navbatdagi topshiriqqa o'tishga ruxsat
        if (idx <= state.currentIndex || state.solutions[task.id]) {
          loadTask(idx);
        } else {
          showToast(`Oldin ${state.currentIndex + 1}-topshiriqni topshiring!`, "error");
        }
      });

      stepDotsContainer.appendChild(dot);
    });
  }

  // Topshiriqni ekranga yuklash
  function loadTask(index) {
    state.currentIndex = index;
    const task = TASKS_DATA[index];

    // Stepper holatini yangilash
    stepCounterText.textContent = `Topshiriq ${index + 1} / ${TASKS_DATA.length}`;
    const progressPercent = ((index + 1) / TASKS_DATA.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;

    const dots = stepDotsContainer.querySelectorAll(".step-dot");
    dots.forEach((dot, idx) => {
      dot.classList.toggle("active", idx === index);
      if (state.solutions[TASKS_DATA[idx]?.id]) {
        dot.classList.add("completed");
      }
    });

    // Topshiriq matnlari
    taskBadge.textContent = task.badge;
    taskCategory.textContent = task.category;
    taskTitle.textContent = task.title;
    taskDescription.textContent = task.description;
    taskHint.textContent = task.hint;
    taskExpected.textContent = task.expectedOutput;

    // Yechim kodi
    const savedSolution = state.solutions[task.id];
    if (savedSolution) {
      codeEditor.value = savedSolution.code;
      if (savedSolution.fileName && savedSolution.fileName !== "editor_kod.js") {
        showFileBar(savedSolution.fileName);
      } else {
        hideFileBar();
      }
    } else {
      codeEditor.value = task.starterCode || "";
      hideFileBar();
    }

    updateCharCount();
    consoleOutput.textContent = `// ${task.badge} yuklandi. Kodingizni yozing va sinab ko'ring!`;
    consoleOutput.style.color = "#38bdf8";

    // Oxirgi topshiriq bo'lsa tugma matni o'zgaradi
    if (index === TASKS_DATA.length - 1) {
      submitBtnText.textContent = "Topshirish va Yakunlash";
      submitBtnIcon.className = "fa-solid fa-flag-checkered";
    } else {
      submitBtnText.textContent = "Topshirish va Keyingisi";
      submitBtnIcon.className = "fa-solid fa-arrow-right";
    }
  }

  // Belgilar soni
  function updateCharCount() {
    charCount.textContent = `${codeEditor.value.length} ta belgi`;
  }
  codeEditor.addEventListener("input", updateCharCount);

  // Editor'da Tab bosilganda 2 ta bo'sh joy qoldirish
  codeEditor.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = codeEditor.selectionStart;
      const end = codeEditor.selectionEnd;
      codeEditor.value = codeEditor.value.substring(0, start) + "  " + codeEditor.value.substring(end);
      codeEditor.selectionStart = codeEditor.selectionEnd = start + 2;
    }
  });

  // Tablarni almashtirish
  tabCodeBtn.addEventListener("click", () => {
    tabCodeBtn.classList.add("active");
    tabFileBtn.classList.remove("active");
    tabCode.classList.add("active");
    tabFile.classList.remove("active");
  });

  tabFileBtn.addEventListener("click", () => {
    tabFileBtn.classList.add("active");
    tabCodeBtn.classList.remove("active");
    tabFile.classList.add("active");
    tabCode.classList.remove("active");
  });

  // Fayl yuklash (Drag & Drop va Input)
  dropZone.addEventListener("click", (e) => {
    if (e.target.closest("#btnRemoveFile")) return;
    fileInput.click();
  });

  dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dropZone.classList.add("dragover");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragover");
  });

  dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragover");
    if (e.dataTransfer.files.length > 0) {
      handleFile(e.dataTransfer.files[0]);
    }
  });

  fileInput.addEventListener("change", (e) => {
    if (e.target.files.length > 0) {
      handleFile(e.target.files[0]);
    }
  });

  function handleFile(file) {
    if (!file.name.endsWith(".js") && file.type !== "text/javascript") {
      showToast("Faqat .js kengaytmali fayllarni yuklash mumkin!", "error");
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target.result;
      codeEditor.value = content;
      updateCharCount();
      state.currentFileName = file.name;
      showFileBar(file.name);
      showToast(`"${file.name}" kodi yuklandi!`);

      // Avtomatik kod oynasiga o'tkazish
      tabCodeBtn.click();
    };
    reader.readAsText(file);
  }

  function showFileBar(name) {
    uploadedFileName.textContent = name;
    fileInfoBar.style.display = "flex";
  }

  function hideFileBar() {
    state.currentFileName = "";
    fileInfoBar.style.display = "none";
    fileInput.value = "";
  }

  btnRemoveFile.addEventListener("click", (e) => {
    e.stopPropagation();
    hideFileBar();
    showToast("Yuklangan fayl olib tashlandi.");
  });

  // Kodni ishlatish (Test Console)
  btnRunCode.addEventListener("click", () => {
    const code = codeEditor.value.trim();
    if (!code) {
      consoleOutput.textContent = "// Xato: Sinab ko'rish uchun kod yozing!";
      consoleOutput.style.color = "#ef4444";
      return;
    }

    consoleOutput.textContent = "";
    consoleOutput.style.color = "#38bdf8";

    const logs = [];
    const originalLog = console.log;
    const originalError = console.error;
    const originalWarn = console.warn;

    console.log = (...args) => {
      logs.push(args.map(a => typeof a === "object" ? JSON.stringify(a) : String(a)).join(" "));
    };
    console.error = (...args) => {
      logs.push("XATO: " + args.join(" "));
    };
    console.warn = (...args) => {
      logs.push("OGOHLANTIRISH: " + args.join(" "));
    };

    try {
      // Kodni xavfsiz Function orqali ishga tushirish
      const runner = new Function(code);
      runner();

      if (logs.length === 0) {
        consoleOutput.textContent = "// Kod muvaffaqiyatli bajarildi, lekin console.log chiqarmadi.";
      } else {
        consoleOutput.textContent = logs.join("\n");
      }
    } catch (err) {
      consoleOutput.textContent = `// Sintaksis yoki bajarish xatosi:\n${err.message}`;
      consoleOutput.style.color = "#ef4444";
    } finally {
      // Asl konsolni tiklash
      console.log = originalLog;
      console.error = originalError;
      console.warn = originalWarn;
    }
  });

  btnClearConsole.addEventListener("click", () => {
    consoleOutput.textContent = "// Konsol tozalandi.";
  });

  // Topshiriqni topshirish va keyingisiga o'tish
  btnSubmitTask.addEventListener("click", async () => {
    const code = codeEditor.value.trim();
    if (!code) {
      showToast("Iltimos, yechim kodingizni kiriting!", "error");
      return;
    }

    const currentTask = TASKS_DATA[state.currentIndex];
    const payload = {
      studentName: state.studentName,
      studentGroup: state.studentGroup,
      taskId: currentTask.id,
      taskTitle: currentTask.title,
      fileName: state.currentFileName || "editor_kod.js",
      code: code
    };

    // Tugmani yuklanish holatiga qo'yish
    btnSubmitTask.disabled = true;
    submitBtnText.textContent = "Google Sheets ga yuborilmoqda...";
    submitBtnIcon.className = "spinner";

    // 1. Lokal xotirada saqlash
    state.solutions[currentTask.id] = {
      taskId: currentTask.id,
      taskTitle: currentTask.title,
      fileName: payload.fileName,
      code: code,
      date: new Date().toLocaleTimeString()
    };
    localStorage.setItem("js_solutions", JSON.stringify(state.solutions));

    // 2. Google Sheets Webhook ga yuborish (agar URL sozlangan bo'lsa)
    const webhookUrl = state.webhookUrl;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          mode: "no-cors", // Google Apps Script Web App uchun zarur
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(payload)
        });
        showToast(`${currentTask.badge} Google Sheets ga muvaffaqiyatli saqlandi!`);
      } catch (error) {
        console.warn("Google Sheets ga yuborishda xatolik:", error);
        showToast(`${currentTask.badge} lokal saqlandi (Google Sheets ulanmadi).`, "warning");
      }
    } else {
      showToast(`${currentTask.badge} qabul qilindi va saqlandi!`);
    }

    // Tugmani tiklash
    btnSubmitTask.disabled = false;
    submitBtnText.textContent = "Topshirish va Keyingisi";
    submitBtnIcon.className = "fa-solid fa-arrow-right";

    // Stepper dot-ni completed qilish
    const currentDot = stepDotsContainer.children[state.currentIndex];
    if (currentDot) currentDot.classList.add("completed");

    // Keyingi topshiriqqa o'tish
    if (state.currentIndex < TASKS_DATA.length - 1) {
      loadTask(state.currentIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Hamma topshiriq yakunlandi!
      renderSummary();
      showScreen(completeScreen);
      showToast("Tabriklaymiz! Barcha 12 ta topshiriq yakunlandi!", "success");
    }
  });

  // Yakuniy xulosa jadvali
  function renderSummary() {
    summaryTableBody.innerHTML = "";
    TASKS_DATA.forEach(task => {
      const tr = document.createElement("tr");
      const sol = state.solutions[task.id];
      const statusBadge = sol 
        ? `<span style="color:#10b981; font-weight:700;"><i class="fa-solid fa-circle-check"></i> Topshirildi (${sol.date})</span>`
        : `<span style="color:#ef4444; font-weight:700;"><i class="fa-solid fa-circle-xmark"></i> Topshirilmadi</span>`;

      tr.innerHTML = `
        <td><strong>${task.badge}</strong></td>
        <td>${task.title}</td>
        <td>${statusBadge}</td>
      `;
      summaryTableBody.appendChild(tr);
    });
  }

  // Boshidan qayta topshirish
  btnRestart.addEventListener("click", () => {
    if (confirm("Rostdan ham barcha topshiriqlarni boshidan boshlamoqchimisiz?")) {
      state.solutions = {};
      localStorage.removeItem("js_solutions");
      initStepper();
      loadTask(0);
      showScreen(taskScreen);
    }
  });

  // Sozlamalar modali
  btnSettings.addEventListener("click", () => {
    webhookUrlInput.value = state.webhookUrl;
    settingsModal.classList.add("open");
  });

  btnCloseSettings.addEventListener("click", () => {
    settingsModal.classList.remove("open");
  });

  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.remove("open");
    }
  });

  btnSaveSettings.addEventListener("click", () => {
    const url = webhookUrlInput.value.trim();
    state.webhookUrl = url;
    localStorage.setItem("js_webhook_url", url);
    settingsModal.classList.remove("open");
    showToast("Google Sheets havolasi saqlandi!");
  });
});
