// JavaScript Topshiriqlar Tizimi — Asosiy Mantiq

document.addEventListener("DOMContentLoaded", () => {
  // Holat (State)
  const state = {
    studentName: localStorage.getItem("js_student_name") || "",
    studentGroup: localStorage.getItem("js_student_group") || "",
    webhookUrl: localStorage.getItem("js_webhook_url") || "https://script.google.com/macros/s/AKfycbyVw09Dv6gNX8Uyy_ykDhtTbZrg2YxNogcHj5rMJf8OV5R1LD6oLgY96bfIWOIVrXzF/exec",
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
  const taskPartBadge = document.getElementById("taskPartBadge");
  const taskBadge = document.getElementById("taskBadge");
  const taskCategory = document.getElementById("taskCategory");
  const taskTitle = document.getElementById("taskTitle");
  const taskDescription = document.getElementById("taskDescription");
  const taskHint = document.getElementById("taskHint");
  const taskExpected = document.getElementById("taskExpected");

  // Qismlar (Part tabs)
  const partTab1 = document.getElementById("partTab1");
  const partTab2 = document.getElementById("partTab2");
  const stepperTitleText = document.getElementById("stepperTitleText");

  // Holatda joriy qism
  state.currentPart = 1;

  // Kod muharriri
  const codeEditor = document.getElementById("codeEditor");
  const charCount = document.getElementById("charCount");

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

  // Qismlar tablari bosilganda
  if (partTab1) {
    partTab1.addEventListener("click", () => {
      switchToPart(1);
    });
  }
  if (partTab2) {
    partTab2.addEventListener("click", () => {
      switchToPart(2);
    });
  }

  function switchToPart(partNum) {
    state.currentPart = partNum;
    partTab1.classList.toggle("active", partNum === 1);
    partTab2.classList.toggle("active", partNum === 2);

    // Shu qismdagi birinchi topshirilmagan (yoki birinchi) topshiriqni topish
    const partTasks = TASKS_DATA.filter(t => t.part === partNum);
    let targetTask = partTasks.find(t => !state.solutions[t.id]) || partTasks[0];
    const targetIndex = TASKS_DATA.findIndex(t => t.id === targetTask.id);

    initStepper(partNum);
    loadTask(targetIndex);
    showToast(`${partNum}-Qism topshiriqlari ochildi!`);
  }

  // Stepper tugmalarini hosil qilish
  function initStepper(partNum = state.currentPart || 1) {
    stepDotsContainer.innerHTML = "";
    stepperTitleText.textContent = `${partNum}-Qism topshiriqlar ketma-ketligi`;

    const partTasks = TASKS_DATA.filter(t => t.part === partNum);

    partTasks.forEach((task, pIdx) => {
      const globalIdx = TASKS_DATA.findIndex(t => t.id === task.id);
      const dot = document.createElement("button");
      dot.className = "step-dot";
      dot.textContent = pIdx + 1; // 1-qismda 1..12, 2-qismda 1..10
      dot.title = `[${task.partBadge}] ${task.badge}: ${task.title}`;

      if (state.solutions[task.id]) {
        dot.classList.add("completed");
      }
      if (globalIdx === state.currentIndex) {
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => {
        // Oldingi yechilgan yoki navbatdagi topshiriqqa o'tish
        if (globalIdx <= state.currentIndex || state.solutions[task.id]) {
          loadTask(globalIdx);
        } else {
          showToast(`Oldin ${TASKS_DATA[state.currentIndex]?.badge || 'navbatdagi'}ni topshiring!`, "error");
        }
      });

      stepDotsContainer.appendChild(dot);
    });
  }

  // Topshiriqni ekranga yuklash
  function loadTask(index) {
    state.currentIndex = index;
    const task = TASKS_DATA[index];
    state.currentPart = task.part;

    // Qism tablarini yangilash
    if (partTab1 && partTab2) {
      partTab1.classList.toggle("active", task.part === 1);
      partTab2.classList.toggle("active", task.part === 2);
    }

    // Stepper holatini yangilash
    initStepper(task.part);
    stepCounterText.textContent = `Topshiriq ${task.id} / ${TASKS_DATA.length}`;
    const progressPercent = ((index + 1) / TASKS_DATA.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;

    // Topshiriq matnlari
    if (taskPartBadge) taskPartBadge.textContent = task.partBadge;
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
    } else {
      codeEditor.value = task.starterCode || "";
    }

    updateCharCount();
    consoleOutput.textContent = `// [${task.partBadge}] ${task.badge} yuklandi. Kodingizni yozing va sinab ko'ring!`;
    consoleOutput.style.color = "#38bdf8";

    // Oxirgi topshiriq bo'lsa tugma matni o'zgaradi
    if (index === TASKS_DATA.length - 1) {
      submitBtnText.textContent = "Topshirish va Yakunlash";
      submitBtnIcon.className = "fa-solid fa-flag-checkered";
    } else if (task.id === 12) {
      submitBtnText.textContent = "1-Qismni yakunlab, 2-Qismga o'tish";
      submitBtnIcon.className = "fa-solid fa-forward-step";
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
      taskTitle: `[${currentTask.partBadge}] ${currentTask.title}`,
      part: currentTask.partBadge,
      fileName: "editor_kod.js",
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
      partBadge: currentTask.partBadge,
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
        showToast(`[${currentTask.partBadge}] ${currentTask.badge} Google Sheets ga saqlandi!`);
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

    // Agar 12-topshiriq topshirilgan bo'lsa, 1-qism tugagani haqida maxsus xabar
    if (currentTask.id === 12) {
      showToast("🎉 1-Qism yakunlandi! Endi 2-Qism topshiriqlariga o'tamiz!", "success");
    }

    // Keyingi topshiriqqa o'tish
    if (state.currentIndex < TASKS_DATA.length - 1) {
      loadTask(state.currentIndex + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // Hamma 22 ta topshiriq yakunlandi!
      renderSummary();
      showScreen(completeScreen);
      showToast("Tabriklaymiz! Barcha 22 ta topshiriq yakunlandi!", "success");
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
        <td><span class="badge-part" style="font-size: 11px; padding: 2px 6px; margin-right: 6px;">${task.partBadge}</span> <strong>${task.badge}</strong></td>
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

  // Mavzu (Theme) - Tungi va Kunduzgi rejim
  const currentTheme = localStorage.getItem("js_theme") || "light";
  const themeLightBtn = document.getElementById("themeLightBtn");
  const themeDarkBtn = document.getElementById("themeDarkBtn");
  const btnCloseSettingsBtn = document.getElementById("btnCloseSettingsBtn");

  function setTheme(theme) {
    if (theme === "dark") {
      document.body.classList.add("dark");
      if (themeDarkBtn) themeDarkBtn.classList.add("active");
      if (themeLightBtn) themeLightBtn.classList.remove("active");
    } else {
      document.body.classList.remove("dark");
      if (themeLightBtn) themeLightBtn.classList.add("active");
      if (themeDarkBtn) themeDarkBtn.classList.remove("active");
    }
    localStorage.setItem("js_theme", theme);
  }

  // Dastlabki rejimni yuklash
  setTheme(currentTheme);

  if (themeLightBtn) {
    themeLightBtn.addEventListener("click", () => {
      setTheme("light");
      showToast("Kunduzgi rejim yoqildi ☀️");
    });
  }

  if (themeDarkBtn) {
    themeDarkBtn.addEventListener("click", () => {
      setTheme("dark");
      showToast("Tungi rejim yoqildi 🌙");
    });
  }

  // Sozlamalar modali
  btnSettings.addEventListener("click", () => {
    settingsModal.classList.add("open");
  });

  btnCloseSettings.addEventListener("click", () => {
    settingsModal.classList.remove("open");
  });

  if (btnCloseSettingsBtn) {
    btnCloseSettingsBtn.addEventListener("click", () => {
      settingsModal.classList.remove("open");
    });
  }

  settingsModal.addEventListener("click", (e) => {
    if (e.target === settingsModal) {
      settingsModal.classList.remove("open");
    }
  });
});
