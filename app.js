const CUHK_ACHIEVEMENTS_URL = "data/achievements.json";
const GENERIC_ACHIEVEMENTS_URL = "data/achievements.generic.json";
const SCHOOLS_URL = "data/schools.json";
const RESULT_KEY = "graduation-achievement-result";
const SCHOOL_KEY = "graduation-achievement-school";

const defaultSchools = [
  {
    id: "香港中文大学-深圳",
    name: "香港中文大学（深圳）",
    displayName: "香港中文大学（深圳）",
    shareName: "香港中文大学（深圳）",
    logo: "svg/香港中文大学（深圳）-logo.svg",
    logoVersion: "",
    logoTone: "original",
  },
];

const defaultAchievements = [
  {
    id: "change-major",
    title: "后悔药",
    description: "转一次专业",
    rarity: "rare",
    icon: "后悔",
  },
  {
    id: "late-drop",
    title: "明年再战",
    description: "进行一次latedrop",
    rarity: "rare",
    icon: "明年",
  },
  {
    id: "campus-run",
    title: "跑步健将",
    description: "完成30次校园跑打卡",
    rarity: "uncommon",
    icon: "跑步",
  },
  {
    id: "competition-entry",
    title: "重在参与",
    description: "参与一次比赛",
    rarity: "common",
    icon: "重在",
  },
  {
    id: "campus-expedition",
    title: "山上风儿好喧嚣",
    description: "从下园徒步去上园",
    rarity: "uncommon",
    icon: "山上",
  },
  {
    id: "parallel-campus",
    title: "平行宇宙",
    description: "成坐校巴前往另一个校园参加活动",
    rarity: "common",
    icon: "平行",
  },
  {
    id: "research-or-internship",
    title: "初出茅庐",
    description: "加入科研项目或开始一段实习",
    rarity: "common",
    icon: "初出",
  },
  {
    id: "student-assistant",
    title: "勤工俭学",
    description: "担任学助拿到补贴",
    rarity: "uncommon",
    icon: "勤工",
  },
  {
    id: "library-overnight",
    title: "图书馆之夜",
    description: "期末在图书馆通宵复习",
    rarity: "rare",
    icon: "图书",
  },
  {
    id: "closing-signal",
    title: "归家的信号",
    description: "学到图书馆闭馆才离开",
    rarity: "uncommon",
    icon: "归家",
  },
  {
    id: "formal-dinner",
    title: "大美食家",
    description: "参加一次高桌晚宴并只吃前菜",
    rarity: "rare",
    icon: "美食",
  },
  {
    id: "delivery-misroute",
    title: "真假美猴王",
    description: "老南门的外卖点到新南门；vice versa",
    rarity: "rare",
    icon: "真假",
  },
  {
    id: "volunteer-trip",
    title: "周游列国",
    description: "参与一次支教任务",
    rarity: "rare",
    icon: "周游",
  },
  {
    id: "club-join",
    title: "找到组织",
    description: "加入一个学会或社团",
    rarity: "common",
    icon: "组织",
  },
  {
    id: "stage-star",
    title: "校园明星",
    description: "参与一场大型演出/才艺表演",
    rarity: "rare",
    icon: "明星",
  },
  {
    id: "new-beginning",
    title: "新的开始",
    description: "开学报道认识新同学",
    rarity: "common",
    icon: "新的",
  },
  {
    id: "campus-art-photo",
    title: "大书法家",
    description: "与墨宝战士的作品合影",
    rarity: "uncommon",
    icon: "书法",
  },
  {
    id: "phone-pillar",
    title: "走路呆看手机",
    description: "走路看手机撞到柱子",
    rarity: "legendary",
    icon: "手机",
  },
  {
    id: "campus-animal",
    title: "最好的伙伴",
    description: "和校内小猫进行互动",
    rarity: "common",
    icon: "伙伴",
  },
  {
    id: "campus-vehicle",
    title: "风驰电掣",
    description: "在校园内乘坐电瓶车",
    rarity: "common",
    icon: "风驰",
  },
  {
    id: "exam-donation",
    title: "大慈善家",
    description: "参加语言考试或者GRE考试",
    rarity: "uncommon",
    icon: "慈善",
  },
  {
    id: "last-day-review",
    title: "大冒险家",
    description: "期末考前一天开始复习",
    rarity: "rare",
    icon: "冒险",
  },
  {
    id: "business-presentation",
    title: "商业精英",
    description: "穿着商务套装进行一次pre",
    rarity: "uncommon",
    icon: "商业",
  },
  {
    id: "long-name-master",
    title: "口才大师",
    description: "快速完整说出旧图的全称",
    rarity: "legendary",
    icon: "口才",
  }
];

const defaultGenericAchievements = [
  {
    id: "change-major",
    title: "后悔药",
    description: "完成一次转专业、转方向或培养方案调整",
    rarity: "rare",
    icon: "CM",
  },
  {
    id: "late-drop",
    title: "明年再战",
    description: "退选、重修或放弃一门课",
    rarity: "rare",
    icon: "LD",
  },
  {
    id: "campus-run",
    title: "跑步健将",
    description: "完成 30 次体育打卡或运动记录",
    rarity: "uncommon",
    icon: "CR",
  },
  {
    id: "competition-entry",
    title: "重在参与",
    description: "参与一次比赛、竞赛或校园挑战",
    rarity: "common",
    icon: "CP",
  },
  {
    id: "campus-expedition",
    title: "校园远征",
    description: "徒步走完一次很长的校园路线",
    rarity: "uncommon",
    icon: "EX",
  },
  {
    id: "parallel-campus",
    title: "平行宇宙",
    description: "前往另一个校区、园区或城市参加活动",
    rarity: "common",
    icon: "PC",
  },
  {
    id: "research-or-internship",
    title: "初出茅庐",
    description: "加入科研项目或开始一段实习",
    rarity: "common",
    icon: "RI",
  },
  {
    id: "student-assistant",
    title: "勤工俭学",
    description: "担任助教、助研或学生助理并拿到补贴",
    rarity: "uncommon",
    icon: "SA",
  },
  {
    id: "library-overnight",
    title: "图书馆之夜",
    description: "期末在图书馆通宵复习",
    rarity: "rare",
    icon: "LO",
  },
  {
    id: "closing-signal",
    title: "闭馆信号",
    description: "学到图书馆闭馆才离开",
    rarity: "uncommon",
    icon: "CL",
  },
  {
    id: "formal-dinner",
    title: "正式饭局",
    description: "参加一次学校晚宴、学院晚餐或正式聚餐",
    rarity: "rare",
    icon: "FD",
  },
  {
    id: "delivery-misroute",
    title: "外卖迷航",
    description: "外卖送错校门、楼栋、宿舍区或取餐点",
    rarity: "rare",
    icon: "DG",
  },
  {
    id: "volunteer-trip",
    title: "周游列国",
    description: "参与一次支教、志愿、交流或社会实践项目",
    rarity: "rare",
    icon: "VT",
  },
  {
    id: "club-join",
    title: "找到组织",
    description: "加入一个社团、学会或学生组织",
    rarity: "common",
    icon: "CJ",
  },
  {
    id: "stage-star",
    title: "校园明星",
    description: "参与一场大型演出、晚会或才艺表演",
    rarity: "rare",
    icon: "SS",
  },
  {
    id: "new-beginning",
    title: "新的开始",
    description: "开学报道时认识新同学",
    rarity: "common",
    icon: "NB",
  },
  {
    id: "campus-art-photo",
    title: "文化打卡",
    description: "与校园展览、书法、雕塑或艺术作品合影",
    rarity: "uncommon",
    icon: "CA",
  },
  {
    id: "phone-pillar",
    title: "低头族警告",
    description: "走路看手机撞到柱子、门或其他障碍物",
    rarity: "legendary",
    icon: "PP",
  },
  {
    id: "campus-animal",
    title: "最好的伙伴",
    description: "和校园里的猫、狗、鸟或其他动物互动",
    rarity: "common",
    icon: "AN",
  },
  {
    id: "campus-vehicle",
    title: "风驰电掣",
    description: "乘坐校车、电瓶车或其他校园交通工具",
    rarity: "common",
    icon: "CV",
  },
  {
    id: "exam-donation",
    title: "大慈善家",
    description: "参加语言考试、GRE 或其他高价考试",
    rarity: "uncommon",
    icon: "GE",
  },
  {
    id: "last-day-review",
    title: "大冒险家",
    description: "考试前一天才开始系统复习",
    rarity: "rare",
    icon: "AR",
  },
  {
    id: "business-presentation",
    title: "商业精英",
    description: "穿着正装完成一次 presentation 或正式汇报",
    rarity: "uncommon",
    icon: "BP",
  },
  {
    id: "long-name-master",
    title: "口才大师",
    description: "快速完整说出学校某个超长建筑、学院或机构名称",
    rarity: "legendary",
    icon: "LN",
  },
];

const rarityLabels = {
  common: "普通",
  uncommon: "优秀",
  rare: "稀有",
  legendary: "传说",
};

const rarityRanks = {
  common: 1,
  uncommon: 2,
  rare: 3,
  legendary: 4,
};

function compareAchievements(a, b) {
  const unlockedDelta = Number(Boolean(b.unlocked)) - Number(Boolean(a.unlocked));
  if (unlockedDelta) return unlockedDelta;

  const rarityDelta = (rarityRanks[b.rarity] || 0) - (rarityRanks[a.rarity] || 0);
  if (rarityDelta) return rarityDelta;

  return (a.index || 0) - (b.index || 0);
}

function sortAchievementsForDisplay(items, unlockedIds) {
  return items
    .map((item, index) => ({ ...item, index, unlocked: unlockedIds.has(item.id) }))
    .sort(compareAchievements);
}

async function getAchievements(url, fallback) {
  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error(`Failed to load achievements: ${response.status}`);
    const items = await response.json();
    return Array.isArray(items) ? items.map(normalizeAchievement) : fallback;
  } catch {
    return fallback;
  }
}

async function getSchools() {
  try {
    const response = await fetch(SCHOOLS_URL, { cache: "no-store" });
    if (!response.ok) throw new Error(`Failed to load schools: ${response.status}`);
    const items = await response.json();
    return Array.isArray(items) ? items.map(normalizeSchool) : defaultSchools;
  } catch {
    return defaultSchools;
  }
}

function normalizeAchievement(item) {
  return {
    id: String(item.id || crypto.randomUUID()),
    title: String(item.title || "").trim(),
    description: String(item.description || "").trim(),
    rarity: ["common", "uncommon", "rare", "legendary"].includes(item.rarity) ? item.rarity : "common",
    icon: String(item.icon || "").trim().toUpperCase().slice(0, 2),
  };
}

function cleanSchoolName(value) {
  return String(value ?? "")
    .replace(/[-_\s]*logo$/i, "")
    .replace(/[-_\s]*校徽$/i, "")
    .trim();
}

function normalizeSchool(item, options = {}) {
  const preserveCustomNames = Boolean(options.preserveCustomNames);
  const name = cleanSchoolName(item.name || item.displayName) || "学校";
  const displayName = cleanSchoolName(item.displayName);
  const shareName = cleanSchoolName(item.shareName);

  return {
    id: cleanSchoolName(item.id || name) || name,
    name,
    displayName: preserveCustomNames ? displayName : displayName || name,
    shareName: preserveCustomNames ? shareName : shareName || displayName || name,
    logo: String(item.logo || defaultSchools[0].logo).trim(),
    logoVersion: item.logoVersion ? String(item.logoVersion) : "",
    logoTone: item.logoTone === "white" ? "white" : "original",
  };
}

function getLogoSrc(school) {
  const version = school.logoVersion ? `?v=${encodeURIComponent(school.logoVersion)}` : "";
  return `${school.logo}${version}`;
}

function formatResultDate(dateValue, unlocked) {
  if (!unlocked) return "尚未解锁";
  const date = dateValue ? new Date(`${dateValue}T00:00:00`) : new Date();
  const formatted = new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
  return `解锁时间：${formatted}`;
}

function initHome() {
  const profilePanel = document.querySelector("#profile-panel");
  const profileForm = document.querySelector("#profile-form");
  const surveyPanel = document.querySelector("#survey-panel");
  const surveyForm = document.querySelector("#survey-form");
  const surveyList = document.querySelector("#survey-list");
  const surveyTemplate = document.querySelector("#survey-template");
  const surveyCount = document.querySelector("#survey-count");
  const schoolTitle = document.querySelector("#school-display-title");
  const schoolLogo = document.querySelector("#school-logo");
  const schoolSelect = document.querySelector("#school-select");
  const logoToneInputs = document.querySelectorAll('input[name="logo-tone"]');
  const displaySchoolNameInput = document.querySelector("#display-school-name");
  const shareSchoolNameInput = document.querySelector("#share-school-name");
  const nicknameInput = document.querySelector("#nickname");
  const profilePreviewLogo = document.querySelector("#profile-preview-logo");
  const profilePreviewName = document.querySelector("#profile-preview-name");
  const profilePreviewNickname = document.querySelector("#profile-preview-nickname");
  const resultPanel = document.querySelector("#result-panel");
  const summaryMeta = document.querySelector("#summary-meta");
  const editProfileButton = document.querySelector("#edit-profile");
  const retakeButton = document.querySelector("#retake-survey");
  const shareButton = document.querySelector("#make-share-image");
  const shareModal = document.querySelector("#share-modal");
  const closeShareModal = document.querySelector("#close-share-modal");
  const sharePreview = document.querySelector("#share-preview");
  const downloadShareImage = document.querySelector("#download-share-image");
  const grid = document.querySelector("#achievement-grid");
  const template = document.querySelector("#achievement-template");
  const filters = document.querySelectorAll(".filter");
  const resultName = document.querySelector("#result-name");
  const unlockedCount = document.querySelector("#unlocked-count");
  const totalCount = document.querySelector("#total-count");
  const visibleCount = document.querySelector("#visible-count");
  const progressBar = document.querySelector("#progress-bar");
  let activeFilter = "all";
  let schools = [];
  let currentSchool = defaultSchools[0];
  let cuhkAchievements = [];
  let genericAchievements = [];
  let achievementMode = "";
  let achievements = [];
  let result = null;

  function getStoredResult() {
    const stored = localStorage.getItem(RESULT_KEY);
    if (!stored) return null;

    try {
      const parsed = JSON.parse(stored);
      if (parsed.version !== 3 || !parsed.nickname) {
        localStorage.removeItem(RESULT_KEY);
        return null;
      }
      return parsed;
    } catch {
      localStorage.removeItem(RESULT_KEY);
      return null;
    }
  }

  function showProfile() {
    summaryMeta.classList.add("hidden");
    resultPanel.classList.add("hidden");
    surveyPanel.classList.add("hidden");
    profilePanel.classList.remove("hidden");
  }

  function showSurvey() {
    summaryMeta.classList.add("hidden");
    profilePanel.classList.add("hidden");
    resultPanel.classList.add("hidden");
    surveyPanel.classList.remove("hidden");
  }

  function showResult() {
    summaryMeta.classList.remove("hidden");
    profilePanel.classList.add("hidden");
    surveyPanel.classList.add("hidden");
    resultPanel.classList.remove("hidden");
  }

  function getStoredSchool() {
    const stored = localStorage.getItem(SCHOOL_KEY);
    if (!stored) return null;

    try {
      return normalizeSchool(JSON.parse(stored));
    } catch {
      localStorage.removeItem(SCHOOL_KEY);
      return null;
    }
  }

  function saveSchool(school) {
    localStorage.setItem(SCHOOL_KEY, JSON.stringify(school));
  }

  function syncLogoToneControls() {
    logoToneInputs.forEach((input) => {
      input.checked = input.value === currentSchool.logoTone;
    });
  }

  function getSelectedLogoTone() {
    return [...logoToneInputs].find((input) => input.checked)?.value || "original";
  }

  function applyLogoTone(image, tone = currentSchool.logoTone) {
    image.classList.toggle("logo-white", tone === "white");
  }

  function syncProfilePreview() {
    profilePreviewLogo.src = getLogoSrc(currentSchool);
    applyLogoTone(profilePreviewLogo, currentSchool.logoTone);
    profilePreviewName.textContent = currentSchool.displayName || "等待填写校名";
    profilePreviewNickname.textContent = nicknameInput.value.trim() || "等待填写昵称";
  }

  function syncDraftProfilePreview() {
    profilePreviewLogo.src = getLogoSrc(currentSchool);
    applyLogoTone(profilePreviewLogo, getSelectedLogoTone());
    profilePreviewName.textContent = cleanSchoolName(displaySchoolNameInput.value) || "等待填写校名";
    profilePreviewNickname.textContent = nicknameInput.value.trim() || "等待填写昵称";
  }

  function applySchool(school, options = {}) {
    currentSchool = normalizeSchool(school, options);
    const titleName = currentSchool.displayName || currentSchool.name;
    schoolTitle.textContent = titleName;
    schoolTitle.setAttribute("aria-label", titleName);
    document.title = `${titleName} · 毕业成就馆`;
    schoolLogo.src = getLogoSrc(currentSchool);
    schoolLogo.alt = "";
    applyLogoTone(schoolLogo, currentSchool.logoTone);
    syncLogoToneControls();
    displaySchoolNameInput.value = currentSchool.displayName;
    shareSchoolNameInput.value = currentSchool.shareName;
    saveSchool(currentSchool);
    syncProfilePreview();
    if (cuhkAchievements.length && genericAchievements.length) syncAchievementsForSchool();
  }

  function isCuhkShenzhen(school) {
    const text = `${school.id} ${school.name} ${school.logo}`.toLowerCase();
    return (
      text.includes("香港中文大学（深圳）") ||
      text.includes("香港中文大学(深圳)") ||
      text.includes("香港中文大学-深圳") ||
      text.includes("港中深") ||
      text.includes("cuhk")
    );
  }

  function syncAchievementsForSchool() {
    const nextMode = isCuhkShenzhen(currentSchool) ? "cuhk" : "generic";
    if (achievementMode === nextMode) return;

    achievementMode = nextMode;
    achievements = nextMode === "cuhk" ? cuhkAchievements : genericAchievements;
    renderSurvey();
    if (result) renderResult();
  }

  function populateSchoolSelect() {
    schoolSelect.replaceChildren();
    schools.forEach((school) => {
      const option = document.createElement("option");
      option.value = school.id;
      option.textContent = school.name;
      schoolSelect.append(option);
    });
  }

  function collectSchoolFromInputs() {
    return {
      ...currentSchool,
      displayName: cleanSchoolName(displaySchoolNameInput.value),
      shareName: cleanSchoolName(shareSchoolNameInput.value),
      logoTone: getSelectedLogoTone(),
    };
  }

  function renderSurvey() {
    surveyCount.textContent = `${achievements.length} 项`;
    surveyList.replaceChildren();

    achievements.forEach((achievement) => {
      const node = surveyTemplate.content.firstElementChild.cloneNode(true);
      const checkbox = node.querySelector('input[type="checkbox"]');
      const dateInput = node.querySelector('input[type="date"]');
      checkbox.value = achievement.id;
      node.querySelector("strong").textContent = achievement.title;
      node.querySelector("small").textContent = achievement.description;
      checkbox.addEventListener("change", () => {
        dateInput.required = checkbox.checked;
        if (checkbox.checked && !dateInput.value) dateInput.valueAsDate = new Date();
      });
      surveyList.append(node);
    });
  }

  function renderResult() {
    const unlockedIds = new Set(result?.unlockedIds || []);
    const unlocked = achievements.filter((item) => unlockedIds.has(item.id)).length;
    const filtered = sortAchievementsForDisplay(achievements, unlockedIds)
      .filter((item) => {
        if (activeFilter === "unlocked") return item.unlocked;
        if (activeFilter === "locked") return !item.unlocked;
        if (activeFilter === "rare") return ["rare", "legendary"].includes(item.rarity);
        return true;
      });

    resultName.textContent = result?.nickname || "您";
    unlockedCount.textContent = unlocked;
    totalCount.textContent = achievements.length;
    visibleCount.textContent = `${filtered.length} 项`;
    const percent = achievements.length ? Math.round((unlocked / achievements.length) * 100) : 0;
    progressBar.style.width = `${percent}%`;
    grid.replaceChildren();

    filtered.forEach((achievement) => {
      const node = template.content.firstElementChild.cloneNode(true);
      node.classList.toggle("locked", !achievement.unlocked);
      node.querySelector(".badge").textContent = achievement.icon || achievement.title.slice(0, 2).toUpperCase();
      node.querySelector(".badge").dataset.rarity = achievement.rarity;
      node.querySelector("h3").textContent = achievement.title;
      node.querySelector("p").textContent = achievement.description;
      node.querySelector("time").textContent = formatResultDate(result?.unlockedDates?.[achievement.id], achievement.unlocked);
      node.querySelector(".rarity").textContent = rarityLabels[achievement.rarity] || "普通";
      node.querySelector(".global-stat strong").textContent = getGlobalRate(achievement);
      grid.append(node);
    });
  }

  filters.forEach((button) => {
    button.addEventListener("click", () => {
      filters.forEach((item) => item.classList.remove("active"));
      button.classList.add("active");
      activeFilter = button.dataset.filter;
      renderResult();
    });
  });

  profileForm.addEventListener("submit", (event) => {
    event.preventDefault();
    applySchool(collectSchoolFromInputs(), { preserveCustomNames: true });
    showSurvey();
  });

  editProfileButton.addEventListener("click", () => {
    showProfile();
  });

  surveyForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const checkedInputs = [...surveyForm.querySelectorAll('input[type="checkbox"]:checked')];
    const unlockedIds = checkedInputs.map((input) => input.value);
    const unlockedDates = Object.fromEntries(
      checkedInputs.map((input) => {
        const dateInput = input.closest(".survey-item").querySelector('input[type="date"]');
        return [input.value, dateInput.value];
      }),
    );
    result = {
      version: 3,
      nickname: nicknameInput.value.trim(),
      unlockedIds,
      unlockedDates,
      generatedAt: new Date().toISOString(),
    };
    localStorage.setItem(RESULT_KEY, JSON.stringify(result));
    showResult();
    renderResult();
  });

  retakeButton.addEventListener("click", () => {
    localStorage.removeItem(RESULT_KEY);
    result = null;
    surveyForm.reset();
    surveyForm.querySelectorAll('input[type="date"]').forEach((input) => {
      input.required = false;
      input.value = "";
    });
    activeFilter = "all";
    filters.forEach((item) => item.classList.toggle("active", item.dataset.filter === "all"));
    showProfile();
  });

  shareButton.addEventListener("click", async () => {
    const imageUrl = await createShareImage(achievements, result, currentSchool);
    sharePreview.src = imageUrl;
    downloadShareImage.href = imageUrl;
    shareModal.classList.remove("hidden");
  });

  closeShareModal.addEventListener("click", () => {
    shareModal.classList.add("hidden");
  });

  shareModal.addEventListener("click", (event) => {
    if (event.target === shareModal) shareModal.classList.add("hidden");
  });

  schoolSelect.addEventListener("change", () => {
    const selected = schools.find((school) => school.id === schoolSelect.value) || schools[0];
    applySchool({ ...selected, logoTone: currentSchool.logoTone });
  });

  displaySchoolNameInput.addEventListener("input", () => {
    syncDraftProfilePreview();
  });

  shareSchoolNameInput.addEventListener("input", () => {
    syncDraftProfilePreview();
  });

  logoToneInputs.forEach((input) => {
    input.addEventListener("change", () => {
      syncDraftProfilePreview();
    });
  });

  nicknameInput.addEventListener("input", () => {
    syncDraftProfilePreview();
  });

  Promise.all([
    getAchievements(CUHK_ACHIEVEMENTS_URL, defaultAchievements),
    getAchievements(GENERIC_ACHIEVEMENTS_URL, defaultGenericAchievements),
    getSchools(),
  ]).then(([cuhkItems, genericItems, schoolItems]) => {
    cuhkAchievements = cuhkItems;
    genericAchievements = genericItems;
    schools = schoolItems;
    populateSchoolSelect();
    const storedSchool = getStoredSchool();
    const storedBaseSchool = storedSchool
      ? schools.find((school) => school.id === storedSchool.id || school.name === storedSchool.name)
      : null;
    const initialSchool = storedSchool
      ? {
          ...(storedBaseSchool || storedSchool),
          displayName: storedSchool.displayName,
          shareName: storedSchool.shareName,
          logoTone: storedSchool.logoTone,
        }
      : schools[0] || defaultSchools[0];
    schoolSelect.value = initialSchool.id;
    applySchool(initialSchool);
    result = getStoredResult();
    if (result) {
      nicknameInput.value = result.nickname;
      syncProfilePreview();
      showResult();
      renderResult();
    } else {
      showProfile();
    }
  });
}

async function createShareImage(achievements, result, school) {
  const unlockedIds = new Set(result?.unlockedIds || []);
  const unlockedAchievements = achievements.filter((item) => unlockedIds.has(item.id));
  const list = sortAchievementsForDisplay(achievements, unlockedIds);
  const nickname = result?.nickname || "你";
  const percent = achievements.length ? Math.round((unlockedAchievements.length / achievements.length) * 100) : 0;
  const canvas = document.createElement("canvas");
  const width = 1080;
  const listStartY = 650;
  const rowHeight = 132;
  const footerSpace = 150;
  const height = Math.max(1920, listStartY + list.length * rowHeight + footerSpace);
  const scale = window.devicePixelRatio || 1;
  canvas.width = width * scale;
  canvas.height = height * scale;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;
  const ctx = canvas.getContext("2d");
  ctx.scale(scale, scale);

  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, "#263f55");
  gradient.addColorStop(0.42, "#172637");
  gradient.addColorStop(1, "#0f1924");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  const glow = ctx.createRadialGradient(770, 218, 20, 770, 218, 520);
  glow.addColorStop(0, "rgba(229, 168, 35, 0.14)");
  glow.addColorStop(0.28, "rgba(102, 192, 244, 0.09)");
  glow.addColorStop(0.72, "rgba(42, 72, 96, 0.04)");
  glow.addColorStop(1, "rgba(102, 192, 244, 0)");
  ctx.fillStyle = glow;
  ctx.fillRect(360, 0, width - 360, 620);

  ctx.fillStyle = "#dcdedf";
  ctx.font = "900 38px Trebuchet MS, Noto Sans SC, sans-serif";
  drawFittedText(ctx, school.shareName || school.displayName, 76, 96, 470, 38, 24, "900");

  const logo = await loadImage(getLogoSrc(school));
  ctx.save();
  ctx.shadowColor = "rgba(0, 0, 0, 0.58)";
  ctx.shadowBlur = 34;
  ctx.shadowOffsetX = 0;
  ctx.shadowOffsetY = 16;
  drawFixedHeightImage(ctx, school.logoTone === "white" ? createMonochromeLogo(logo) : logo, 770, 92, 250, 330);
  ctx.restore();

  ctx.fillStyle = "#8f98a0";
  ctx.font = "28px Trebuchet MS, sans-serif";
  ctx.fillText("个人资料 / 毕业纪念 / 成就", 76, 178);

  ctx.fillStyle = "#edf4fb";
  ctx.font = "700 88px Trebuchet MS, sans-serif";
  drawWrappedText(ctx, nickname, 76, 318, 500, 96, 1);

  ctx.fillStyle = "#c7d5e0";
  ctx.font = "36px Trebuchet MS, sans-serif";
  ctx.fillText(`已解锁 ${unlockedAchievements.length}/${achievements.length} 个成就`, 76, 410);

  drawProgress(ctx, 76, 452, 928, 28, percent);
  ctx.fillStyle = "#66c0f4";
  ctx.font = "700 54px Trebuchet MS, sans-serif";
  ctx.fillText(`${percent}%`, 76, 555);

  let y = listStartY;
  list.forEach((achievement) => {
    const unlocked = unlockedIds.has(achievement.id);
    const dateText = formatShareDate(result?.unlockedDates?.[achievement.id], unlocked);
    drawShareAchievement(ctx, achievement, unlocked, dateText, 76, y, 928);
    y += rowHeight;
  });

  ctx.fillStyle = "#8f98a0";
  ctx.font = "26px Trebuchet MS, sans-serif";
  ctx.fillText("由毕业成就馆生成", 76, height - 76);
  ctx.textAlign = "right";
  ctx.fillText(new Intl.DateTimeFormat("zh-CN").format(new Date()), width - 76, height - 76);
  ctx.textAlign = "left";

  return canvas.toDataURL("image/png");
}

function formatShareDate(dateValue, unlocked) {
  if (!unlocked) return "未解锁";
  if (!dateValue) return "已解锁";
  return `已解锁 · ${new Intl.DateTimeFormat("zh-CN").format(new Date(`${dateValue}T00:00:00`))}`;
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function drawFittedText(ctx, text, x, y, maxWidth, maxSize, minSize, weight = "700") {
  let size = maxSize;
  const family = "Trebuchet MS, Noto Sans SC, sans-serif";
  do {
    ctx.font = `${weight} ${size}px ${family}`;
    if (ctx.measureText(text).width <= maxWidth || size <= minSize) break;
    size -= 1;
  } while (size >= minSize);
  ctx.fillText(text, x, y);
}

function drawProgress(ctx, x, y, width, height, percent) {
  ctx.fillStyle = "#05080c";
  ctx.fillRect(x, y, width, height);
  const gradient = ctx.createLinearGradient(x, y, x + width, y);
  gradient.addColorStop(0, "#66c0f4");
  gradient.addColorStop(1, "#b8e45c");
  ctx.fillStyle = gradient;
  ctx.fillRect(x, y, Math.round(width * (percent / 100)), height);
}

function drawFixedHeightImage(ctx, image, centerX, y, height, maxWidth) {
  const imageWidth = image.naturalWidth || image.width || maxWidth;
  const imageHeight = image.naturalHeight || image.height || height;
  let drawHeight = height;
  let drawWidth = imageWidth * (drawHeight / imageHeight);

  if (drawWidth > maxWidth) {
    drawWidth = maxWidth;
    drawHeight = imageHeight * (drawWidth / imageWidth);
  }

  ctx.drawImage(image, centerX - drawWidth / 2, y + (height - drawHeight) / 2, drawWidth, drawHeight);
}

function createMonochromeLogo(image) {
  const width = image.naturalWidth || image.width || 512;
  const height = image.naturalHeight || image.height || 512;
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  ctx.drawImage(image, 0, 0, width, height);
  ctx.globalCompositeOperation = "source-in";
  ctx.fillStyle = "#f3f7fb";
  ctx.fillRect(0, 0, width, height);
  return canvas;
}

function roundedRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawShareAchievement(ctx, achievement, unlocked, dateText, x, y, width) {
  ctx.globalAlpha = unlocked ? 1 : 0.48;
  const rowGradient = ctx.createLinearGradient(x, y, x + width, y);
  rowGradient.addColorStop(0, "#263747");
  rowGradient.addColorStop(1, "#16202b");
  ctx.fillStyle = rowGradient;
  ctx.fillRect(x, y, width, 112);

  ctx.fillStyle = getBadgeColor(achievement.rarity);
  ctx.fillRect(x + 18, y + 18, 76, 76);
  ctx.fillStyle = "#08131c";
  ctx.font = "900 28px Trebuchet MS, sans-serif";
  ctx.textAlign = "center";
  ctx.fillText(achievement.icon || achievement.title.slice(0, 2).toUpperCase(), x + 56, y + 64);

  ctx.textAlign = "left";
  ctx.fillStyle = "#c7d5e0";
  ctx.font = "32px Trebuchet MS, sans-serif";
  ctx.fillText(achievement.title, x + 116, y + 44);
  ctx.fillStyle = "#8f98a0";
  ctx.font = "23px Trebuchet MS, sans-serif";
  drawWrappedText(ctx, achievement.description, x + 116, y + 78, width - 330, 28, 1);

  ctx.textAlign = "right";
  ctx.fillStyle = unlocked ? "#66c0f4" : "#8f98a0";
  ctx.font = "22px Trebuchet MS, sans-serif";
  ctx.fillText(dateText, x + width - 20, y + 62);
  ctx.textAlign = "left";
  ctx.globalAlpha = 1;
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, maxLines) {
  const chars = [...text];
  let line = "";
  let lines = 0;

  chars.forEach((char, index) => {
    const testLine = line + char;
    const isLast = index === chars.length - 1;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(lines + 1 === maxLines ? `${line.slice(0, -1)}...` : line, x, y + lines * lineHeight);
      lines += 1;
      line = char;
      return;
    }

    line = testLine;
    if (isLast && lines < maxLines) ctx.fillText(line, x, y + lines * lineHeight);
  });
}

function getBadgeColor(rarity) {
  if (rarity === "legendary") return "#ff6f8f";
  if (rarity === "rare") return "#ffd166";
  if (rarity === "uncommon") return "#b8e45c";
  return "#67c1f5";
}

function getGlobalRate(achievement) {
  const rates = {
    common: 82,
    uncommon: 53,
    rare: 18,
    legendary: 4,
  };
  const seed = [...achievement.id].reduce((sum, char) => sum + char.charCodeAt(0), 0) % 9;
  return `${Math.max(1, rates[achievement.rarity] - seed)}%`;
}

if (document.body.dataset.page === "home") {
  initHome();
}
