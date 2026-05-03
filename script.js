// ---------- 多語言詞庫 ----------
const translations = {
    "zh-Hant": {
        nav_home: "首頁", nav_resume: "數碼履歷", nav_portfolio: "作品集", nav_gallery: "生活剪影",
        hero_title: "謝鑫達", hero_desc: "生物醫學工程 · 實踐者", explore_btn: "✨ 探索我的履歷",
        home_quote1: "「務實、專注、不斷突破 — 工程師的浪漫在於解決問題。」",
        home_quote2: "籃球場上的團隊配合，實驗室裡的精密測量，茶席間的靜心沉澱 — 皆是我生活的組成。",
        home_quote3: "現為香港大學生物醫學工程四年級生，致力於醫療器材開發與跨領域整合。",
        resume_title: "數碼履歷", name_cn: "謝鑫達", job_title: "BEng Biomedical Engineering (HKU)",
        about_title: "📖 關於我", 
        about_desc: "香港大學生物醫學工程四年級生，務實的工程實踐者。專注於運用工程思維解決真實醫療問題，熱衷於從設計到實作的完整流程。課餘喜歡籃球、網球、游泳等運動，也享受賽車與遊戲帶來的專注挑戰，並透過茶文化、咖啡與攝影沉澱思考。相信耐心與紀律是工程師與運動員的共同基石。",
        skills_title: "⚙️ 技能描述",
        exp_title: "💼 工作經驗",
        exp1_title: "Koln 3D Technology (Medical) Limited - 暑期實習生",
        exp1_desc: "參與3D列印金屬植入物設計流程、手術導板應用、SLA/FDM 設備維護。",
        exp2_title: "皮膚電極界面實驗室 - 研究助理",
        exp2_desc: "電化學阻抗譜(EIS)分析、電路測試設備操作、生物材料導電性研究。",
        project_title: "📌 專案經驗",
        edu_title: "🎓 教育背景",
        edu_university_text: "香港大學 生物醫學工程學士 (2022-2026) | CGPA 3.00/4.30",
        edu_courses_text: "核心課程：醫學影像、生物力學、生醫訊號、生物材料、統計分析",
        edu_secondary_name: "福建中學（觀塘） (2016-2022)",
        edu_secondary_courses: "修讀物理、生物、化學、數學",
        hobby_title: "❤️ 愛好",
        portfolio_title: "作品集錦",
        photoessay_title: "📸 照片散文 —《登岳陽樓記》影像紀行",
        microfilm_title: "🎬 微電影作品",
        gallery_title: "生活剪影",
        pdf_title: "《登岳陽樓記》影像散文集",
        pdf_desc: "以鏡頭追尋范仲淹筆下的洞庭氣象，融合個人反思與古典詩詞。共收錄15幅攝影作品，包含岳陽樓、洞庭湖、臨風閣等，並附拍攝參數與創作隨筆。",
        pdf_action: "📄 點此開啟 PDF (完整作品)",
        film1_title: "《方圓之間》",
        film1_desc: "關於筷子的故事 — 從華人餐具的象徵到中華文化的哲學內涵。一場商業倫理與文化價值的思辨。",
        proj1_title: "畢業專題：3D列印手術導板與導航系統",
        proj1_desc: "設計與優化客製化骨科手術工具，研究結構輕量化、耐用性與系統穩定性 (2025.08 - 至今)。",
        proj2_title: "整合專題：脈搏血氧儀軟硬體設計",
        proj2_desc: "硬體設計與組裝 (探頭建模/3D列印、電路焊接)、測試主機板與感測器，並進行心理壓力對心率影響的先導研究 (2024.09-12)。",
        proj3_title: "跨專業協作實踐 (IPCP)",
        proj3_desc: "提出工程在呼吸道感染問題中的角色，分析醫療器材的有效性，學習跨部門協作 (2024.09-10)。",
        proj4_title: "工程訓練 (Engineering Training)",
        proj4_desc: "學習多種工程工具與軟體，實際操作機械與電機電子設備 (2024.05-08)。",
        proj5_title: "基於MATLAB的生醫訊號量測與分析",
        proj5_desc: "量測ECG、PPG、PCG、EMG等訊號，使用MATLAB進行傅立葉轉換與不同取樣率比較 (2024.02-03)。",
        proj6_title: "Grand Challenge：深度學習於腦血管疾病之應用",
        proj6_desc: "研究深度學習/CNN改善醫學影像分析 (CT/MRI)，探討靈敏度、特異性與臨床可行性 (2023.09-12)。",
        skill_python: "Python / MATLAB / R",
        skill_solidworks: "SolidWorks / KiCad / Blender",
        skill_arduino: "Arduino / 電路測試",
        skill_matlab: "MATLAB 生醫訊號處理",
        skill_3dprint: "3D 列印 (SLA/FDM)",
        skill_photo: "攝影 / 後製",
        hobby_basketball: "🏀 籃球",
        hobby_tennis: "🎾 網球",
        hobby_gaming: "🎮 遊戲",
        hobby_racing: "🏎️ 賽車",
        hobby_swim: "🏊 游泳",
        hobby_tea: "🍵 茶文化",
        hobby_paint: "🎨 繪畫",
        hobby_camera: "📷 攝影",
        hobby_coffee: "☕ 咖啡"
    },
    "zh-Hans": {
        nav_home: "首页", nav_resume: "数码履历", nav_portfolio: "作品集", nav_gallery: "生活剪影",
        hero_title: "谢鑫达", hero_desc: "生物医学工程 · 实践者", explore_btn: "✨ 探索我的履历",
        home_quote1: "「务实、专注、不断突破 — 工程师的浪漫在于解决问题。」",
        home_quote2: "篮球场上的团队配合，实验室里的精密测量，茶席间的静心沉淀 — 皆是我生活的组成。",
        home_quote3: "现为香港大学生物医学工程四年级生，致力于医疗器械开发与跨领域整合。",
        resume_title: "数码履历", name_cn: "谢鑫达", job_title: "BEng Biomedical Engineering (HKU)",
        about_title: "📖 关于我",
        about_desc: "香港大学生物医学工程四年级生，务实的工程实践者。专注于运用工程思维解决真实医疗问题，热衷于从设计到实作的完整流程。课余喜欢篮球、网球、游泳等运动，也享受赛车与游戏带来的专注挑战，并通过茶文化、咖啡与摄影沉淀思考。相信耐心与纪律是工程师与运动员的共同基石。",
        skills_title: "⚙️ 技能描述",
        exp_title: "💼 工作经验",
        exp1_title: "Koln 3D Technology (Medical) Limited - 暑期实习生",
        exp1_desc: "参与3D打印金属植入物设计流程、手术导板应用、SLA/FDM 设备维护。",
        exp2_title: "皮肤电极界面实验室 - 研究助理",
        exp2_desc: "电化学阻抗谱(EIS)分析、电路测试设备操作、生物材料导电性研究。",
        project_title: "📌 专案经验",
        edu_title: "🎓 教育背景",
        edu_university_text: "香港大学 生物医学工程学士 (2022-2026) | CGPA 3.00/4.30",
        edu_courses_text: "核心课程：医学影像、生物力学、生医信号、生物材料、统计分析",
        edu_secondary_name: "福建中学（观塘） (2016-2022)",
        edu_secondary_courses: "修读物理、生物、化学、数学",
        hobby_title: "❤️ 爱好",
        portfolio_title: "作品集锦",
        photoessay_title: "📸 照片散文 —《登岳阳楼记》影像纪行",
        microfilm_title: "🎬 微电影作品",
        gallery_title: "生活剪影",
        pdf_title: "《登岳阳楼记》影像散文集",
        pdf_desc: "以镜头追寻范仲淹笔下的洞庭气象，融合个人反思与古典诗词。共收录15幅摄影作品，包含岳阳楼、洞庭湖、临风阁等，并附拍摄参数与创作随笔。",
        pdf_action: "📄 点此开启 PDF (完整作品)",
        film1_title: "《方圆之间》",
        film1_desc: "关于筷子的故事 — 从华人餐具的象征到中华文化的哲学内涵。一场商业伦理与文化价值的思辨。",
        proj1_title: "毕业专题：3D打印手术导板与导航系统",
        proj1_desc: "设计与优化客制化骨科手术工具，研究结构轻量化、耐用性与系统稳定性 (2025.08 - 至今)。",
        proj2_title: "整合专题：脉搏血氧仪软硬件设计",
        proj2_desc: "硬件设计与组装 (探头建模/3D打印、电路焊接)、测试主板与传感器，并进行心理压力对心率影响的先导研究 (2024.09-12)。",
        proj3_title: "跨专业协作实践 (IPCP)",
        proj3_desc: "提出工程在呼吸道感染问题中的角色，分析医疗器材的有效性，学习跨部门协作 (2024.09-10)。",
        proj4_title: "工程训练 (Engineering Training)",
        proj4_desc: "学习多种工程工具与软件，实际操作机械与电机电子设备 (2024.05-08)。",
        proj5_title: "基于MATLAB的生医讯号量测与分析",
        proj5_desc: "量测ECG、PPG、PCG、EMG等讯号，使用MATLAB进行傅立叶转换与不同取样率比较 (2024.02-03)。",
        proj6_title: "Grand Challenge：深度学习于脑血管疾病之应用",
        proj6_desc: "研究深度学习/CNN改善医学影像分析 (CT/MRI)，探讨灵敏度、特异性与临床可行性 (2023.09-12)。",
        skill_python: "Python / MATLAB / R",
        skill_solidworks: "SolidWorks / KiCad / Blender",
        skill_arduino: "Arduino / 电路测试",
        skill_matlab: "MATLAB 生医信号处理",
        skill_3dprint: "3D 打印 (SLA/FDM)",
        skill_photo: "摄影 / 后期",
        hobby_basketball: "🏀 篮球",
        hobby_tennis: "🎾 网球",
        hobby_gaming: "🎮 游戏",
        hobby_racing: "🏎️ 赛车",
        hobby_swim: "🏊 游泳",
        hobby_tea: "🍵 茶文化",
        hobby_paint: "🎨 绘画",
        hobby_camera: "📷 摄影",
        hobby_coffee: "☕ 咖啡"
    },
    "en": {
        nav_home: "Home", nav_resume: "Digital Resume", nav_portfolio: "Portfolio", nav_gallery: "Life Gallery",
        hero_title: "Tse Yam Tat", hero_desc: "Biomedical Engineering · Doer", explore_btn: "✨ Explore My Resume",
        home_quote1: "“Practical, focused, constantly breaking through — the romance of an engineer lies in solving problems.”",
        home_quote2: "Teamwork on the basketball court, precise measurements in the lab, quiet moments of reflection over tea — all compose my life.",
        home_quote3: "Final-year BME student at HKU, dedicated to medical device development and cross-disciplinary integration.",
        resume_title: "Digital Resume", name_cn: "Tse Yam Tat", job_title: "BEng Biomedical Engineering (HKU)",
        about_title: "📖 About Me",
        about_desc: "Final-year BME student at HKU, a pragmatic engineering practitioner. Focused on solving real medical problems with engineering thinking, passionate about the entire process from design to implementation. Outside academics, I enjoy basketball, tennis, swimming, and the focused challenges of racing and gaming, while tea culture, coffee, and photography offer moments of reflection. I believe patience and discipline are the common ground for engineers and athletes.",
        skills_title: "⚙️ Technical Skills",
        exp_title: "💼 Work Experience",
        exp1_title: "Koln 3D Technology (Medical) Ltd - Summer Intern",
        exp1_desc: "Participated in 3D-printed metal implant design, surgical guides, SLA/FDM maintenance.",
        exp2_title: "Skin Electrode Interfaces Lab - Research Assistant",
        exp2_desc: "EIS analysis, circuit testing, biomaterial conductivity research.",
        project_title: "📌 Project Experience",
        edu_title: "🎓 Education",
        edu_university_text: "The University of Hong Kong, BEng Biomedical Engineering (2022-2026) | CGPA 3.00/4.30",
        edu_courses_text: "Core courses: Medical Imaging, Biomechanics, Biomedical Signals, Biomaterials, Statistical Analysis",
        edu_secondary_name: "Fukien Secondary School (Kwun Tong) (2016-2022)",
        edu_secondary_courses: "Studied Physics, Biology, Chemistry, Mathematics",
        hobby_title: "❤️ Hobbies",
        portfolio_title: "Portfolio",
        photoessay_title: "📸 Photo Essay — Ascending Yueyang Tower",
        microfilm_title: "🎬 Micro-Film",
        gallery_title: "Life Snapshots",
        pdf_title: "“Ascending Yueyang Tower” Photo Essay Collection",
        pdf_desc: "A photographic journey through Fan Zhongyan’s classical prose, capturing the spirit of Dongting Lake, Yueyang Tower, and personal reflections. Includes 15 images with camera data and notes.",
        pdf_action: "📄 Open PDF (Full Work)",
        film1_title: "“Between Square & Round”",
        film1_desc: "A story about chopsticks — from the symbol of Chinese tableware to the philosophical essence of Chinese culture. A debate on business ethics and cultural values.",
        proj1_title: "Final Year Project: 3D-Printed Surgical Templates & Navigation",
        proj1_desc: "Designing and optimizing customized orthopedic surgical tools; studying lightweighting, durability, and system stability (08/2025–present).",
        proj2_title: "Integrated Project: Pulse Oximeter Hardware & Software",
        proj2_desc: "Hardware design (3D probe modeling, soldering), testing of mainboards/sensors, and pilot study on psychological stress effects on heart rate (09-12/2024).",
        proj3_title: "Interprofessional Collaborative Practice (IPCP)",
        proj3_desc: "Proposed engineering solutions for respiratory infection issues, analyzed medical device effectiveness, learned cross-department collaboration (09-10/2024).",
        proj4_title: "Engineering Training",
        proj4_desc: "Applied various engineering tools/software, hands-on operation of mechanical and electrical equipment (05-08/2024).",
        proj5_title: "Biomedical Signal Measurement & Analysis using MATLAB",
        proj5_desc: "Measured ECG, PPG, PCG, EMG; processed signals with Fourier transform; compared sampling rate effects (02-03/2024).",
        proj6_title: "Grand Challenge: Deep Learning for Cerebrovascular Diseases",
        proj6_desc: "Investigated DL/CNN to improve medical imaging (CT/MRI); discussed sensitivity, specificity, and clinical feasibility (09-12/2023).",
        skill_python: "Python / MATLAB / R",
        skill_solidworks: "SolidWorks / KiCad / Blender",
        skill_arduino: "Arduino / Circuit Testing",
        skill_matlab: "MATLAB Biomedical Signal Processing",
        skill_3dprint: "3D Printing (SLA/FDM)",
        skill_photo: "Photography / Post-processing",
        hobby_basketball: "🏀 Basketball",
        hobby_tennis: "🎾 Tennis",
        hobby_gaming: "🎮 Gaming",
        hobby_racing: "🏎️ Racing",
        hobby_swim: "🏊 Swimming",
        hobby_tea: "🍵 Tea Culture",
        hobby_paint: "🎨 Painting",
        hobby_camera: "📷 Photography",
        hobby_coffee: "☕ Coffee"
    }
};

// 配置常量
const PHOTO_ESSAY_IMAGE = "image_yueyang.jpg";
const PHOTO_PDF_URL = "Assignment1_TseYamTat.pdf";
const microFilms = [
    { 
        img: "https://img.youtube.com/vi/ETPkGgL8zXc/hqdefault.jpg", 
        titleKey: "film1_title", 
        descKey: "film1_desc", 
        url: "https://youtu.be/ETPkGgL8zXc" 
    }
];
const lifeImages = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg"];

let currentLang = "zh-Hant";

// 渲染專案經驗
function renderProjects() {
    const container = document.getElementById("project-list");
    if (!container) return;
    const projKeys = ["proj1", "proj2", "proj3", "proj4", "proj5", "proj6"];
    const html = projKeys.map(key => {
        const title = translations[currentLang][`${key}_title`];
        const desc = translations[currentLang][`${key}_desc`];
        return `<div class="exp-item"><div class="exp-title">${title}</div><div class="exp-desc" style="font-size:0.9rem; margin-top:4px;">${desc}</div></div>`;
    }).join('');
    container.innerHTML = html;
}

// 渲染技能標籤
function renderSkills() {
    const container = document.getElementById("skills-tags");
    if (!container) return;
    const skills = [
        translations[currentLang].skill_python,
        translations[currentLang].skill_solidworks,
        translations[currentLang].skill_arduino,
        translations[currentLang].skill_matlab,
        translations[currentLang].skill_3dprint,
        translations[currentLang].skill_photo
    ];
    container.innerHTML = skills.map(s => `<span>${s}</span>`).join('');
}

// 渲染愛好標籤
function renderHobbies() {
    const container = document.getElementById("hobby-tags");
    if (!container) return;
    const hobbies = [
        translations[currentLang].hobby_basketball,
        translations[currentLang].hobby_tennis,
        translations[currentLang].hobby_gaming,
        translations[currentLang].hobby_racing,
        translations[currentLang].hobby_swim,
        translations[currentLang].hobby_tea,
        translations[currentLang].hobby_paint,
        translations[currentLang].hobby_camera,
        translations[currentLang].hobby_coffee
    ];
    container.innerHTML = hobbies.map(h => `<span>${h}</span>`).join('');
}

// 渲染教育背景（核心课程使用 edu-subtext）
function renderEducation() {
    const container = document.getElementById("education-list");
    if (!container) return;
    const t = translations[currentLang];
    const html = `
        <div class="edu-item">
            <img class="edu-logo" src="hkubme.png" alt="HKU logo" onerror="this.style.display='none'">
            <div class="edu-text">${t.edu_university_text}</div>
        </div>
        <div class="edu-item courses-item">
            <div class="edu-subtext">${t.edu_courses_text}</div>
        </div>
        <div class="edu-item">
            <img class="edu-logo" src="fss.png" alt="Fukien Secondary School logo" onerror="this.style.display='none'">
            <div class="edu-text">${t.edu_secondary_name}</div>
            <div class="edu-subtext">${t.edu_secondary_courses}</div>
        </div>
    `;
    container.innerHTML = html;
}

// 照片散文卡片
function renderPhotoEssay() {
    const container = document.getElementById("photo-essay-grid");
    if (!container) return;
    const t = translations[currentLang];
    const html = `
        <div class="portfolio-card" onclick="window.open('${PHOTO_PDF_URL}', '_blank')">
            <img class="portfolio-img" src="${PHOTO_ESSAY_IMAGE}" alt="Yueyang Tower Photo Essay" onerror="this.src='https://picsum.photos/id/96/400/300'">
            <div class="portfolio-info">
                <h4>${t.pdf_title}</h4>
                <p>${t.pdf_desc}</p>
                <div style="font-size:0.75rem; color:#b56576; margin-top:8px;">📄 ${t.pdf_action}</div>
            </div>
        </div>
    `;
    container.innerHTML = html;
}

// 微電影卡片
function renderMicrofilms() {
    const filmGrid = document.getElementById("microfilm-grid");
    if (!filmGrid) return;
    filmGrid.innerHTML = microFilms.map(film => `
        <div class="portfolio-card" onclick="window.open('${film.url}', '_blank')">
            <img class="portfolio-img" src="${film.img}" alt="microfilm">
            <div class="portfolio-info">
                <h4>${translations[currentLang][film.titleKey]}</h4>
                <p>${translations[currentLang][film.descKey]}</p>
                <div style="font-size:0.75rem; color:#b56576; margin-top:8px;">▶ 點此觀看 YouTube</div>
            </div>
        </div>
    `).join('');
}

// 生活剪影
function renderGallery() {
    const galleryDiv = document.getElementById("gallery-grid");
    if (!galleryDiv) return;
    if (lifeImages.length === 0) {
        galleryDiv.innerHTML = '<p style="grid-column:1/-1; text-align:center;">請在 LifePhoto 資料夾中加入照片，並更新 script.js 中的 lifeImages 陣列。</p>';
        return;
    }
    const html = lifeImages.map(filename => `
        <div class="gallery-item">
            <img src="LifePhoto/${filename}" alt="life moment" onerror="this.src='https://picsum.photos/id/10/400/400'">
        </div>
    `).join('');
    galleryDiv.innerHTML = html;
}

// 應用語言
function applyLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    renderSkills();
    renderHobbies();
    renderEducation();
    renderProjects();
    renderPhotoEssay();
    renderMicrofilms();
    renderGallery();
    
    const footer = document.getElementById("footer-text");
    if (lang === "en") footer.innerText = "© 2025 Tse Yam Tat Eric · Between Square & Round, Engineering & Life";
    else if (lang === "zh-Hans") footer.innerText = "© 2025 谢鑫达 Eric TSE · 方圆之间，工程与生活";
    else footer.innerText = "© 2025 謝鑫達 Eric TSE · 方圓之間，工程與生活";
    
    document.querySelectorAll(".lang-btn").forEach(btn => {
        if (btn.dataset.lang === lang) btn.classList.add("active");
        else btn.classList.remove("active");
    });
}

// 頁面切換
function showPage(pageId) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active-page"));
    document.getElementById(pageId).classList.add("active-page");
    document.querySelectorAll(".nav-links a").forEach(link => {
        const pageVal = link.dataset.page;
        const match = (pageVal === "home" && pageId === "home-page") ||
                      (pageVal === "resume" && pageId === "resume-page") ||
                      (pageVal === "portfolio" && pageId === "portfolio-page") ||
                      (pageVal === "gallery" && pageId === "gallery-page");
        if (match) link.classList.add("active");
        else link.classList.remove("active");
    });
}

// 初始化
function init() {
    renderSkills();
    renderHobbies();
    renderEducation();
    renderProjects();
    renderPhotoEssay();
    renderMicrofilms();
    renderGallery();
    applyLanguage("zh-Hant");
    showPage("home-page");
    
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const pageType = link.dataset.page;
            const target = { home: "home-page", resume: "resume-page", portfolio: "portfolio-page", gallery: "gallery-page" }[pageType];
            if (target) showPage(target);
        });
    });
    const exploreBtn = document.querySelector("[data-explore-btn]");
    if (exploreBtn) exploreBtn.addEventListener("click", (e) => {
        e.preventDefault();
        showPage("resume-page");
    });
    document.querySelectorAll(".lang-btn").forEach(btn => {
        btn.addEventListener("click", () => applyLanguage(btn.dataset.lang));
    });
}

init();
feather.replace();