// JavaScript Topshiriqlar Tizimi — Asosiy Mantiq

document.addEventListener("DOMContentLoaded", () => {
  // Holat (State)
  const state = {
    studentName: localStorage.getItem("js_student_name") || "",
    studentGroup: localStorage.getItem("js_student_group") || "",
    webhookUrl: localStorage.getItem("js_webhook_url") || "https://script.google.com/macros/s/AKfycbyVw09Dv6gNX8Uyy_ykDhtTbZrg2YxNogcHj5rMJf8OV5R1LD6oLgY96bfIWOIVrXzF/exec",
    currentIndex: 0,
    currentFileName: "",
    solutions: JSON.parse(localStorage.getItem("js_solutions") || "{}"),
    quizAnswers: JSON.parse(localStorage.getItem("js_quiz_answers") || "{}"),
    quizAnswersPart4: JSON.parse(localStorage.getItem("js_quiz_answers_part4") || "{}"),
    quizAnswersPart5: JSON.parse(localStorage.getItem("js_quiz_answers_part5") || "{}"),
    currentQuizIndex: 0,
    currentQuizIndexPart4: 0,
    currentQuizIndexPart5: 0
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
  const partTab3 = document.getElementById("partTab3");
  const partTab4 = document.getElementById("partTab4");
  const partTab5 = document.getElementById("partTab5");
  const stepperTitleText = document.getElementById("stepperTitleText");

  // Workspaces
  const codeWorkspace = document.getElementById("codeWorkspace");
  const quizWorkspace = document.getElementById("quizWorkspace");

  // Quiz DOM Elementlari
  const quizQuestionCard = document.getElementById("quizQuestionCard");
  const quizPartBadge = document.getElementById("quizPartBadge");
  const quizBadge = document.getElementById("quizBadge");
  const quizScoreText = document.getElementById("quizScoreText");
  const quizQuestionTitle = document.getElementById("quizQuestionTitle");
  const quizCodeBox = document.getElementById("quizCodeBox");
  const quizCodeContent = document.getElementById("quizCodeContent");
  const quizOptionsContainer = document.getElementById("quizOptionsContainer");
  const quizFeedbackBox = document.getElementById("quizFeedbackBox");
  const feedbackTitle = document.getElementById("feedbackTitle");
  const feedbackDesc = document.getElementById("feedbackDesc");
  const btnQuizPrev = document.getElementById("btnQuizPrev");
  const btnQuizNext = document.getElementById("btnQuizNext");

  // Quiz Yakuniy Natijalar DOM Elementlari
  const quizResultCard = document.getElementById("quizResultCard");
  const resultBadgeIcon = document.getElementById("resultBadgeIcon");
  const resultTitle = document.getElementById("resultTitle");
  const resultSubtitle = document.getElementById("resultSubtitle");
  const resultCorrectCount = document.getElementById("resultCorrectCount");
  const resultWrongCount = document.getElementById("resultWrongCount");
  const resultPercent = document.getElementById("resultPercent");
  const quizBreakdownList = document.getElementById("quizBreakdownList");
  const btnRestartQuiz = document.getElementById("btnRestartQuiz");
  const btnBackToTasks = document.getElementById("btnBackToTasks");

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
  if (partTab3) {
    partTab3.addEventListener("click", () => {
      switchToPart(3);
    });
  }
  if (partTab4) {
    partTab4.addEventListener("click", () => {
      switchToPart(4);
    });
  }
  if (partTab5) {
    partTab5.addEventListener("click", () => {
      switchToPart(5);
    });
  }

  function switchToPart(partNum) {
    state.currentPart = partNum;
    if (partTab1) partTab1.classList.toggle("active", partNum === 1);
    if (partTab2) partTab2.classList.toggle("active", partNum === 2);
    if (partTab3) partTab3.classList.toggle("active", partNum === 3);
    if (partTab4) partTab4.classList.toggle("active", partNum === 4);
    if (partTab5) partTab5.classList.toggle("active", partNum === 5);

    if (partNum === 3 || partNum === 4 || partNum === 5) {
      if (codeWorkspace) codeWorkspace.style.display = "none";
      if (quizWorkspace) quizWorkspace.style.display = "block";
      initQuizStepper();
      loadQuizQuestion(getCurrentQuizIndex());
      let partDesc = "Oson";
      if (partNum === 4) partDesc = "Amaliy";
      if (partNum === 5) partDesc = "O'zgaruvchilar va Ma'lumot turlari";
      showToast(`${partNum}-Qism: 12 ta ${partDesc} test savollari ochildi!`);
      return;
    }

    if (codeWorkspace) codeWorkspace.style.display = "grid";
    if (quizWorkspace) quizWorkspace.style.display = "none";

    // Shu qismdagi birinchi topshirilmagan (yoki birinchi) topshiriqni topish
    const partTasks = TASKS_DATA.filter(t => t.part === partNum);
    let targetTask = partTasks.find(t => !state.solutions[t.id]) || partTasks[0];
    const targetIndex = TASKS_DATA.findIndex(t => t.id === targetTask.id);

    initStepper(partNum);
    loadTask(targetIndex);
    showToast(`${partNum}-Qism topshiriqlari ochildi!`);
  }

  // ================= 3-QISM, 4-QISM VA 5-QISM: QUIZ (TEST) MANTIQI =================
  // Massivni tasodifiy aralashtirish (Fisher-Yates Shuffle)
  function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  // Savollar va ularning javob variantlarini tasodifiy (random) aralashtirib olish
  function getPreparedQuizData(partNum, forceNew = false) {
    const storageKey = `js_shuffled_quiz_part_${partNum}`;
    if (!forceNew) {
      const cached = localStorage.getItem(storageKey);
      if (cached) {
        try {
          const parsed = JSON.parse(cached);
          if (Array.isArray(parsed) && parsed.length > 0) {
            return parsed;
          }
        } catch (e) {}
      }
    }

    // Asosiy savollar bazasini olish
    let baseData = QUIZ_DATA;
    if (partNum === 4) baseData = QUIZ_DATA_PART4;
    if (partNum === 5) baseData = QUIZ_DATA_PART5;

    // 1. Savollar ketma-ketligini random aralashtirish
    const shuffledQuestions = shuffleArray(baseData).map((q) => {
      // 2. Har bir savolning 4 ta javob variantini ham random aralashtirish
      const originalOptions = q.options.map((optText, optIdx) => ({
        text: optText,
        isCorrect: (optIdx === q.answer)
      }));

      const shuffledOptions = shuffleArray(originalOptions);
      const newAnswerIndex = shuffledOptions.findIndex(o => o.isCorrect);

      return {
        id: q.id,
        question: q.question,
        codeSnippet: q.codeSnippet,
        options: shuffledOptions.map(o => o.text),
        answer: newAnswerIndex,
        explanation: q.explanation
      };
    });

    localStorage.setItem(storageKey, JSON.stringify(shuffledQuestions));
    return shuffledQuestions;
  }

  function getCurrentQuizData() {
    return getPreparedQuizData(state.currentPart);
  }

  function getCurrentQuizAnswers() {
    if (state.currentPart === 5) return state.quizAnswersPart5;
    if (state.currentPart === 4) return state.quizAnswersPart4;
    return state.quizAnswers;
  }

  function setCurrentQuizAnswers(answers) {
    if (state.currentPart === 5) {
      state.quizAnswersPart5 = answers;
      localStorage.setItem("js_quiz_answers_part5", JSON.stringify(answers));
    } else if (state.currentPart === 4) {
      state.quizAnswersPart4 = answers;
      localStorage.setItem("js_quiz_answers_part4", JSON.stringify(answers));
    } else {
      state.quizAnswers = answers;
      localStorage.setItem("js_quiz_answers", JSON.stringify(answers));
    }
  }

  function getCurrentQuizIndex() {
    if (state.currentPart === 5) return state.currentQuizIndexPart5 || 0;
    if (state.currentPart === 4) return state.currentQuizIndexPart4 || 0;
    return state.currentQuizIndex || 0;
  }

  function setCurrentQuizIndex(idx) {
    if (state.currentPart === 5) {
      state.currentQuizIndexPart5 = idx;
    } else if (state.currentPart === 4) {
      state.currentQuizIndexPart4 = idx;
    } else {
      state.currentQuizIndex = idx;
    }
  }

  function getCorrectQuizCount() {
    const answers = getCurrentQuizAnswers();
    return Object.values(answers).filter(a => a && a.isCorrect).length;
  }

  function updateQuizLiveScore() {
    const answers = getCurrentQuizAnswers();
    const answeredCount = Object.keys(answers).length;
    const correctCount = getCorrectQuizCount();
    if (quizScoreText) {
      quizScoreText.textContent = `${correctCount} / ${answeredCount}`;
    }
  }

  function initQuizStepper() {
    stepDotsContainer.innerHTML = "";
    const quizData = getCurrentQuizData();
    const curIdx = getCurrentQuizIndex();
    const answers = getCurrentQuizAnswers();

    let quizTypeTitle = "3-Qism test savollari";
    if (state.currentPart === 4) quizTypeTitle = "4-Qism amaliy test savollari";
    if (state.currentPart === 5) quizTypeTitle = "5-Qism o'zgaruvchilar va turlar testi";

    stepperTitleText.textContent = `${quizTypeTitle} ketma-ketligi`;
    stepCounterText.textContent = `Savol ${curIdx + 1} / ${quizData.length}`;
    const progressPercent = ((curIdx + 1) / quizData.length) * 100;
    progressBarFill.style.width = `${progressPercent}%`;

    quizData.forEach((q, idx) => {
      const dot = document.createElement("button");
      dot.className = "step-dot";
      dot.textContent = idx + 1;
      dot.title = `${state.currentPart}-Qism: ${idx + 1}-savol`;

      const ans = answers[q.id];
      if (ans) {
        dot.classList.add("completed");
        if (ans.isCorrect) {
          dot.style.background = "#10b981";
          dot.style.color = "#ffffff";
          dot.style.borderColor = "#059669";
        } else {
          dot.style.background = "#ef4444";
          dot.style.color = "#ffffff";
          dot.style.borderColor = "#dc2626";
        }
      }
      if (idx === curIdx) {
        dot.classList.add("active");
      }

      dot.addEventListener("click", () => {
        loadQuizQuestion(idx);
      });

      stepDotsContainer.appendChild(dot);
    });
  }

  function loadQuizQuestion(index) {
    const quizData = getCurrentQuizData();
    if (index < 0 || index >= quizData.length) return;
    setCurrentQuizIndex(index);
    const question = quizData[index];
    const answers = getCurrentQuizAnswers();

    if (quizQuestionCard) quizQuestionCard.style.display = "block";
    if (quizResultCard) quizResultCard.style.display = "none";

    initQuizStepper();
    updateQuizLiveScore();

    if (quizPartBadge) quizPartBadge.textContent = `${state.currentPart}-Qism`;
    if (quizBadge) quizBadge.textContent = `${index + 1}-savol`;
    if (quizQuestionTitle) quizQuestionTitle.textContent = question.question;

    if (question.codeSnippet) {
      if (quizCodeBox) quizCodeBox.style.display = "block";
      if (quizCodeContent) quizCodeContent.textContent = question.codeSnippet;
    } else {
      if (quizCodeBox) quizCodeBox.style.display = "none";
    }

    if (quizOptionsContainer) {
      quizOptionsContainer.innerHTML = "";
      const answered = answers[question.id];
      const letters = ["A", "B", "C", "D"];

      question.options.forEach((optText, optIdx) => {
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "quiz-option-btn";

        const letterSpan = document.createElement("span");
        letterSpan.className = "quiz-option-letter";
        letterSpan.textContent = letters[optIdx];

        const textSpan = document.createElement("span");
        textSpan.textContent = optText;

        btn.appendChild(letterSpan);
        btn.appendChild(textSpan);

        if (answered) {
          btn.disabled = true;
          if (optIdx === question.answer) {
            btn.classList.add("correct");
          }
          if (optIdx === answered.selected && !answered.isCorrect) {
            btn.classList.add("wrong");
          }
        } else {
          btn.addEventListener("click", () => {
            selectQuizOption(index, optIdx);
          });
        }

        quizOptionsContainer.appendChild(btn);
      });

      // Tezkor javob izohi qutisi (Feedback)
      if (answered) {
        if (quizFeedbackBox) {
          quizFeedbackBox.style.display = "block";
          if (answered.isCorrect) {
            quizFeedbackBox.className = "quiz-feedback-box correct";
            feedbackTitle.className = "feedback-title text-correct";
            feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-check"></i> Barakalla, to'g'ri javob!`;
          } else {
            quizFeedbackBox.className = "quiz-feedback-box wrong";
            feedbackTitle.className = "feedback-title text-wrong";
            feedbackTitle.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> Noto'g'ri! To'g'ri javob: ${letters[question.answer]}) ${question.options[question.answer]}`;
          }
          feedbackDesc.textContent = question.explanation;
        }
      } else {
        if (quizFeedbackBox) quizFeedbackBox.style.display = "none";
      }
    }

    // Navigatsiya tugmalari
    if (btnQuizPrev) btnQuizPrev.disabled = (index === 0);
    if (btnQuizNext) {
      if (index === quizData.length - 1) {
        btnQuizNext.innerHTML = `<span>Natijalarni ko'rish</span> <i class="fa-solid fa-flag-checkered"></i>`;
      } else {
        btnQuizNext.innerHTML = `<span>Keyingi savol</span> <i class="fa-solid fa-arrow-right"></i>`;
      }
    }
  }

  // Variant tanlanganda — DARHOL NATIJANI KO'RSATISH
  function selectQuizOption(questionIndex, selectedOptionIdx) {
    const quizData = getCurrentQuizData();
    const question = quizData[questionIndex];
    const isCorrect = (selectedOptionIdx === question.answer);
    const answers = getCurrentQuizAnswers();

    answers[question.id] = {
      selected: selectedOptionIdx,
      isCorrect: isCorrect
    };
    setCurrentQuizAnswers(answers);

    // Shu zahoti qayta render qilamiz (to'g'ri/xato yashil/qizil rangda chiqadi)
    loadQuizQuestion(questionIndex);

    if (isCorrect) {
      showToast("To'g'ri javob! 🎉", "success");
    } else {
      showToast("Xato javob! ❌ Tushuntirishni o'qing.", "error");
    }

    // Agar bu oxirgi savol bo'lsa yoki barcha 12 ta savol yechilgan bo'lsa
    const answeredCount = Object.keys(answers).length;
    if (answeredCount === quizData.length) {
      setTimeout(() => {
        showQuizResults();
      }, 1000);
    }
  }

  // Yakuniy tezkor natijalar kartasini ko'rsatish
  function showQuizResults() {
    if (quizQuestionCard) quizQuestionCard.style.display = "none";
    if (quizResultCard) quizResultCard.style.display = "block";

    const quizData = getCurrentQuizData();
    const answers = getCurrentQuizAnswers();
    const correctCount = getCorrectQuizCount();
    const total = quizData.length;
    const wrongCount = total - correctCount;
    const percent = Math.round((correctCount / total) * 100);

    if (resultCorrectCount) resultCorrectCount.textContent = correctCount;
    if (resultWrongCount) resultWrongCount.textContent = wrongCount;
    if (resultPercent) resultPercent.textContent = `${percent}%`;

    let quizLabel = "Oson Test";
    if (state.currentPart === 4) quizLabel = "Amaliy Test";
    if (state.currentPart === 5) quizLabel = "O'zgaruvchilar va Turlar Testi";

    if (resultBadgeIcon && resultTitle && resultSubtitle) {
      if (percent >= 85) {
        resultBadgeIcon.innerHTML = `<i class="fa-solid fa-trophy" style="color: #f59e0b;"></i>`;
        resultTitle.textContent = `${state.currentPart}-Qism (${quizLabel}): Ajoyib Natija! 🏆`;
        resultSubtitle.textContent = `Tabriklaymiz! Siz 12 ta savoldan ${correctCount} tasiga to'g'ri javob berdingiz (${percent}%).`;
      } else if (percent >= 60) {
        resultBadgeIcon.innerHTML = `<i class="fa-solid fa-award" style="color: #3b82f6;"></i>`;
        resultTitle.textContent = `${state.currentPart}-Qism (${quizLabel}): Yaxshi Natija! 🌟`;
        resultSubtitle.textContent = `Yaxshi ko'rsatkich! 12 ta savoldan ${correctCount} tasiga to'g'ri javob berdingiz (${percent}%).`;
      } else {
        resultBadgeIcon.innerHTML = `<i class="fa-solid fa-book-open-reader" style="color: #6366f1;"></i>`;
        resultTitle.textContent = `${state.currentPart}-Qism (${quizLabel}): Yana mashq qiling! 📚`;
        resultSubtitle.textContent = `12 ta savoldan ${correctCount} tasiga to'g'ri javob berdingiz (${percent}%). Qayta urinib ko'ring!`;
      }
    }

    // Har bir savol bo'yicha tahlil ro'yxati
    if (quizBreakdownList) {
      quizBreakdownList.innerHTML = "";
      quizData.forEach((q, idx) => {
        const ans = answers[q.id];
        const item = document.createElement("div");
        item.className = "breakdown-item";

        const isCorr = ans && ans.isCorrect;
        const shortQ = q.question.length > 32 ? q.question.substring(0, 30) + "..." : q.question;
        item.innerHTML = `
          <span><strong>${idx + 1}-savol:</strong> ${shortQ}</span>
          <span class="breakdown-status ${isCorr ? 'correct' : 'wrong'}">
            <i class="fa-solid ${isCorr ? 'fa-check' : 'fa-xmark'}"></i>
            ${isCorr ? "To'g'ri" : "Xato"}
          </span>
        `;
        quizBreakdownList.appendChild(item);
      });
    }

    // Natijani Google Sheets ga ham avtomatik yuborish
    sendQuizResultsToSheets(correctCount, total, percent);
    showToast(`${state.currentPart}-Qism Test yakunlandi! Natijangiz: ${percent}%`, "success");
  }

  // Google Sheets ga test natijasini yuborish
  async function sendQuizResultsToSheets(correct, total, percent) {
    if (!state.webhookUrl) return;
    let quizTitlePart = "3-Qism: 12 ta Oson Test";
    if (state.currentPart === 4) quizTitlePart = "4-Qism: 12 ta Amaliy Test";
    if (state.currentPart === 5) quizTitlePart = "5-Qism: 12 ta O'zgaruvchilar Testi";
    const payload = {
      studentName: state.studentName,
      studentGroup: state.studentGroup,
      taskId: `${state.currentPart}-Qism Test`,
      taskTitle: `${quizTitlePart} (${correct}/${total} — ${percent}%)`,
      part: `${state.currentPart}-Qism`,
      fileName: `quiz_part${state.currentPart}_natija.txt`,
      code: `Talaba: ${state.studentName}\nGuruh: ${state.studentGroup}\nQism: ${state.currentPart}-Qism (${quizTitlePart})\nNatija: ${correct}/${total} ta to'g'ri (${percent}%)\nSana: ${new Date().toLocaleString()}`
    };

    try {
      await fetch(state.webhookUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
    } catch (err) {
      console.warn("Quiz natijasini Sheets ga yuborishda xatolik:", err);
    }
  }

  // Quiz navigatsiya tugmalari eventlari
  if (btnQuizPrev) {
    btnQuizPrev.addEventListener("click", () => {
      const curIdx = getCurrentQuizIndex();
      if (curIdx > 0) {
        loadQuizQuestion(curIdx - 1);
      }
    });
  }

  if (btnQuizNext) {
    btnQuizNext.addEventListener("click", () => {
      const quizData = getCurrentQuizData();
      const curIdx = getCurrentQuizIndex();
      if (curIdx < quizData.length - 1) {
        loadQuizQuestion(curIdx + 1);
      } else {
        showQuizResults();
      }
    });
  }

  if (btnRestartQuiz) {
    btnRestartQuiz.addEventListener("click", () => {
      if (confirm(`${state.currentPart}-Qism testini boshidan qaytadan topshirmoqchimisiz? (Savollar va javoblar qaytadan tasodifiy aralashtiriladi)`)) {
        setCurrentQuizAnswers({});
        setCurrentQuizIndex(0);
        // Yangi random savollar va javob variantlarini generatsiya qilish
        getPreparedQuizData(state.currentPart, true);
        loadQuizQuestion(0);
        showToast(`${state.currentPart}-Qism savollari va javoblari qayta aralashtirildi!`);
      }
    });
  }

  if (btnBackToTasks) {
    btnBackToTasks.addEventListener("click", () => {
      switchToPart(1);
    });
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
    if (partTab1) partTab1.classList.toggle("active", task.part === 1);
    if (partTab2) partTab2.classList.toggle("active", task.part === 2);
    if (partTab3) partTab3.classList.toggle("active", task.part === 3);

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
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
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
