/* EVOLVE site i18n — EN/AR toggle with RTL support. No build step, vanilla JS. */
(function () {
    "use strict";

    var T = {
        // Common
        skip_link: { en: "Skip to content", ar: "تخطَّ إلى المحتوى" },
        subtitle: { en: "AISU HUE Community", ar: "مجتمع AISU HUE" },
        nav_home: { en: "Home", ar: "الرئيسية" },
        nav_team: { en: "Team", ar: "الفريق" },
        nav_committees: { en: "Committees", ar: "اللجان" },
        nav_join: { en: "Join", ar: "انضم إلينا" },
        footer_cta_title: { en: "Ready to commit to the future?", ar: "مستعد للالتزام بالمستقبل؟" },
        footer_cta_desc: { en: "Join a community where your contributions are measured in lines of code, impact, and growth.", ar: "انضم لمجتمع تُقاس فيه مساهمتك بأسطر الكود والأثر والنمو." },
        footer_cta_desc_long: { en: "Join a community where your contributions are measured in lines of code, impact, and growth. Open to all students at Horus University.", ar: "انضم لمجتمع تُقاس فيه مساهمتك بأسطر الكود والأثر والنمو. مفتوح لجميع طلاب جامعة حورس." },
        footer_cta_apply: { en: "Apply for Membership", ar: "قدّم طلب الانضمام" },
        footer_cta_github: { en: "View GitHub", ar: "عرض GitHub" },
        footer_copyright: { en: "© 2026 EVOLVE Community. Open Source.", ar: "© 2026 مجتمع EVOLVE. مفتوح المصدر." },
        focus_areas_label: { en: "Focus Areas", ar: "مجالات التركيز" },
        learn_more: { en: "Learn more →", ar: "اعرف المزيد ←" },
        technical_label: { en: "Technical", ar: "اللجان التقنية" },
        non_technical_label: { en: "Non-Technical", ar: "اللجان غير التقنية" },

        // index.html
        hero_badge: { en: "150+ Members · System Status: Active", ar: "+150 عضو · حالة النظام: نشط" },
        hero_title: {
            en: 'Building the <br />\n<span class="text-primary font-bold">operating system</span> <br />\nfor Egypt\'s <br />\nfuture innovators.',
            ar: 'نحن نبني <br />\n<span class="text-primary font-bold">نظام التشغيل</span> <br />\nلمبدعي مصر <br />\nالقادمين.'
        },
        hero_subtext: { en: "EVOLVE isn't just a club, it's an open-source engine designed to bridge the gap between academic theory and real-world impact through collaborative technology.", ar: "EVOLVE ليس مجرد نادٍ، بل محرك مفتوح المصدر مصمم لسد الفجوة بين النظرية الأكاديمية والأثر الواقعي من خلال التكنولوجيا التعاونية." },
        param_technical: { en: "Technical Depth", ar: "العمق التقني" },
        param_cross: { en: "Cross-Discipline", ar: "التداخل بين التخصصات" },
        param_open: { en: "Open Source", ar: "مفتوح المصدر" },
        about_kicker: { en: "About", ar: "عن المجتمع" },
        about_title: { en: "What is EVOLVE?", ar: "ما هو EVOLVE؟" },
        about_body: {
            en: "EVOLVE is an open-source student community of 150+ students at Horus University, built around open access to knowledge for every student. We're organized into 8 committees — technical and non-technical — so there's a real place for whatever you're good at.",
            ar: "EVOLVE هو مجتمع طلابي مفتوح المصدر يضم أكثر من 150 طالبًا في جامعة حورس، يتمحور حول إتاحة المعرفة لكل طالب. نحن منظمون في 8 لجان تقنية وغير تقنية، بحيث يكون هناك مكان حقيقي لما تجيده."
        },
        pillar_learn: { en: "Learn", ar: "تعلّم" },
        pillar_build: { en: "Build", ar: "ابنِ" },
        pillar_share: { en: "Share", ar: "شارِك" },
        pillar_evolve: { en: "Evolve", ar: "تطوّر" },
        architecture_kicker: { en: "Architecture", ar: "البنية" },
        framework_title: { en: "The EVOLVE Framework", ar: "إطار عمل EVOLVE" },
        pillar1_title: { en: "Radically Open Source", ar: "مفتوح المصدر بالكامل" },
        pillar1_body: { en: "Knowledge is not proprietary. Every project, codebase, and research paper we produce is public by default. We build in public to accelerate learning for everyone, not just our members.", ar: "المعرفة ليست حكرًا على أحد. كل مشروع وكود وبحث ننتجه متاح للعامة افتراضيًا. نبني في العلن لتسريع التعلم للجميع، وليس فقط لأعضائنا." },
        pillar2_title: { en: "Applied, Not Abstract", ar: "تطبيقي وليس نظري فقط" },
        pillar2_body: { en: "Theory is the foundation; application is the structure. We focus on shipping tangible products and tools that solve actual problems within our ecosystem and beyond.", ar: "النظرية هي الأساس، والتطبيق هو البنية. نركز على تقديم منتجات وأدوات ملموسة تحل مشاكل حقيقية داخل مجتمعنا وخارجه." },
        pillar3_title: { en: "Ecosystem Advancement", ar: "تطوير المنظومة" },
        pillar3_body: { en: "Our ultimate KPI is the growth of Egypt's tech capability. We are creating a talent pipeline that is technically robust and globally competitive from day one.", ar: "هدفنا الأساسي هو نمو القدرات التقنية في مصر. نحن نبني جيلًا موهوبًا تقنيًا وقادرًا على المنافسة عالميًا منذ اليوم الأول." },
        composition_kicker: { en: "Composition", ar: "التكوين" },
        composition_title: { en: 'Cross-Discipline<br />Intelligence', ar: 'ذكاء<br />متعدد التخصصات' },
        composition_body: { en: "Innovation happens at the intersection. EVOLVE is built on the belief that technical prowess needs creative direction, and creative vision needs technical execution.", ar: "الابتكار يحدث عند نقطة التقاطع. EVOLVE مبني على فكرة أن القوة التقنية تحتاج توجيهًا إبداعيًا، وأن الرؤية الإبداعية تحتاج تنفيذًا تقنيًا." },
        explore_committees: { en: "Explore our Committees", ar: "استكشف لجاننا" },
        technical_core_title: { en: "Technical Core", ar: "النواة التقنية" },
        technical_core_body: { en: "AI/ML engineers, data scientists, and full-stack developers working on open-source libraries, datasets, and software for the MENA region.", ar: "مهندسو ذكاء اصطناعي وتعلم آلة، وعلماء بيانات، ومطورو full-stack يعملون على مكتبات مفتوحة المصدر وبيانات وبرمجيات لمنطقة الشرق الأوسط وشمال أفريقيا." },
        creative_core_title: { en: "Creative & Non-Technical", ar: "الإبداعية وغير التقنية" },
        creative_core_body: { en: "HR, PR, Events, Media, and Content Creation — the committees that translate what we build into stories, events, and a community people want to join.", ar: "الموارد البشرية والعلاقات العامة والفعاليات والميديا وصناعة المحتوى — اللجان التي تحول ما نبنيه إلى قصص وفعاليات ومجتمع يريد الناس الانضمام إليه." },

        // team.html
        team_title: { en: "Our Structure", ar: "هيكلنا" },
        team_board_status: { en: "Board: Announcing Soon", ar: "مجلس الإدارة: سيُعلن قريبًا" },
        team_status: { en: "Status: Active", ar: "الحالة: نشط" },
        team_blurb: { en: "150+ students. One open-source community, organized around Learn, Build, Share, Evolve — open access to knowledge for every student at Horus University.", ar: "+150 طالب. مجتمع واحد مفتوح المصدر، منظم حول تعلّم، ابنِ، شارِك، تطوّر — إتاحة المعرفة لكل طالب في جامعة حورس." },
        team_leadership: { en: "Leadership", ar: "القيادة" },
        team_leadership_research: { en: "Leadership & Research", ar: "القيادة والبحث العلمي" },
        coming_soon: { en: "Coming Soon", ar: "قريبًا" },
        role_president: { en: "President", ar: "الرئيس" },
        role_copresident: { en: "Co-President & Scientific Research Lead", ar: "نائب الرئيس ومسؤول البحث العلمي" },
        role_hr: { en: "HR Lead", ar: "مسؤول الموارد البشرية" },
        role_pr: { en: "PR Lead", ar: "مسؤول العلاقات العامة" },
        role_tech: { en: "Technology & Software Lead", ar: "مسؤول التكنولوجيا والبرمجيات" },
        role_ai: { en: "AI/ML Lead", ar: "مسؤول الذكاء الاصطناعي وتعلم الآلة" },
        role_cyber: { en: "Cybersecurity/CTFs Lead", ar: "مسؤول الأمن السيبراني" },
        role_events: { en: "Events & Operations Lead", ar: "مسؤول الفعاليات والعمليات" },
        role_media: { en: "Media Lead", ar: "مسؤول الميديا" },
        role_content: { en: "Content Creation Lead", ar: "مسؤول صناعة المحتوى" },

        // tracks.html
        committees_badge: { en: "150+ MEMBERS · 8 COMMITTEES", ar: "+150 عضو · 8 لجان" },
        committees_title: { en: "Our Committees", ar: "لجاننا" },
        committees_desc: { en: "Every student who joins EVOLVE finds a home in one of these 8 committees — technical or not, there's a seat for you.", ar: "كل طالب ينضم لـ EVOLVE يجد مكانه في واحدة من هذه اللجان الثمانية — تقنية أو غير تقنية، هناك مقعد لك." },
        ai_card_desc: { en: "Machine learning, deep learning, and NLP.", ar: "تعلم الآلة، التعلم العميق، ومعالجة اللغة الطبيعية." },
        cyber_card_desc: { en: "Ethical hacking, network security, and CTFs.", ar: "الاختراق الأخلاقي، أمن الشبكات، ومسابقات CTF." },
        tech_card_desc: { en: "Web development, data analysis, mobile, and robotics.", ar: "تطوير الويب، تحليل البيانات، تطبيقات الموبايل، والروبوتيك." },

        // Committee detail pages: name / lead / 4 focus areas each
        hr_name: { en: "Human Resources", ar: "الموارد البشرية" },
        hr_lead: { en: "The backbone of the community. HR builds and supports the team — from recruiting new members to keeping the culture strong as EVOLVE grows past 150 students.", ar: "العمود الفقري للمجتمع. لجنة الموارد البشرية تدير التوظيف، وتدعم الأعضاء، وتحافظ على ثقافة داخلية قوية مع نمو EVOLVE ليضم أكثر من 150 طالبًا." },
        hr_fa1_t: { en: "Recruitment & Onboarding", ar: "التوظيف والانضمام" },
        hr_fa1_d: { en: "Finding and welcoming new members.", ar: "إيجاد أعضاء جدد والترحيب بهم." },
        hr_fa2_t: { en: "Member Support", ar: "دعم الأعضاء" },
        hr_fa2_d: { en: "Handling grievances and member satisfaction.", ar: "متابعة شكاوى الأعضاء ورضاهم." },
        hr_fa3_t: { en: "Internal Culture & Events", ar: "الثقافة الداخلية والفعاليات" },
        hr_fa3_d: { en: "Bonding activities and team spirit.", ar: "أنشطة تقارب الأعضاء وروح الفريق." },
        hr_fa4_t: { en: "Team Development", ar: "تطوير الفرق" },
        hr_fa4_d: { en: "Growing leaders from within.", ar: "بناء قادة من داخل المجتمع." },

        pr_name: { en: "Public Relations", ar: "العلاقات العامة" },
        pr_lead: { en: "The voice of EVOLVE. PR manages the community's image, external partnerships with Horus University and beyond, and tells our story to the world.", ar: "صوت EVOLVE. لجنة العلاقات العامة تدير صورة المجتمع، والشراكات الخارجية مع جامعة حورس وخارجها، وتحكي قصتنا للعالم." },
        pr_fa1_t: { en: "External Communication", ar: "التواصل الخارجي" },
        pr_fa1_d: { en: "Handling sponsorships and university relations.", ar: "إدارة الرعاية والعلاقات مع الجامعة." },
        pr_fa2_t: { en: "Partnerships & Sponsorships", ar: "الشراكات والرعاية" },
        pr_fa2_d: { en: "Building relationships that grow the community.", ar: "بناء علاقات تنمّي المجتمع." },
        pr_fa3_t: { en: "Marketing Strategy", ar: "استراتيجية التسويق" },
        pr_fa3_d: { en: "Planning campaigns for events and recruitment.", ar: "التخطيط لحملات الفعاليات والتوظيف." },
        pr_fa4_t: { en: "Community Outreach", ar: "التواصل المجتمعي" },
        pr_fa4_d: { en: "Connecting EVOLVE with the wider student body.", ar: "ربط EVOLVE بجموع الطلاب." },

        events_name: { en: "Events & Operations", ar: "الفعاليات والعمليات" },
        events_lead: { en: "The engine room. Events & Operations makes sure every workshop, hackathon, and meetup runs smoothly — from venue booking to logistics on the day.", ar: "غرفة المحرك. لجنة الفعاليات والعمليات تضمن سير كل ورشة عمل وهاكاثون ولقاء بسلاسة، من حجز القاعات إلى التنفيذ يوم الفعالية." },
        events_fa1_t: { en: "Event Planning", ar: "تخطيط الفعاليات" },
        events_fa1_d: { en: "Turning ideas into scheduled, staffed events.", ar: "تحويل الأفكار إلى فعاليات مجدولة ومنظمة." },
        events_fa2_t: { en: "Logistics & Venues", ar: "اللوجستيات والقاعات" },
        events_fa2_d: { en: "Booking spaces and sourcing materials.", ar: "حجز الأماكن وتأمين المستلزمات." },
        events_fa3_t: { en: "Hackathons & Workshops", ar: "الهاكاثونات وورش العمل" },
        events_fa3_d: { en: "Running our flagship technical events.", ar: "تنظيم أبرز فعالياتنا التقنية." },
        events_fa4_t: { en: "On-the-day Operations", ar: "التنفيذ يوم الفعالية" },
        events_fa4_d: { en: "Making sure everything runs on time.", ar: "متابعة سير كل شيء في موعده." },

        media_name: { en: "Media", ar: "الميديا" },
        media_lead: { en: "The creative lens. Media shapes EVOLVE's visual identity through photography, videography, and graphic design.", ar: "العدسة الإبداعية. لجنة الميديا تشكل الهوية البصرية لـ EVOLVE من خلال التصوير الفوتوغرافي والفيديو والتصميم الجرافيكي." },
        media_fa1_t: { en: "Photography", ar: "التصوير الفوتوغرافي" },
        media_fa1_d: { en: "Capturing events and community moments.", ar: "توثيق الفعاليات ولحظات المجتمع." },
        media_fa2_t: { en: "Videography", ar: "تصوير الفيديو" },
        media_fa2_d: { en: "Recap videos and highlight reels.", ar: "فيديوهات تلخيصية ولقطات مميزة." },
        media_fa3_t: { en: "Graphic Design", ar: "التصميم الجرافيكي" },
        media_fa3_d: { en: "Posters, banners, and visual identity.", ar: "الملصقات واللافتات والهوية البصرية." },
        media_fa4_t: { en: "Social Media Visuals", ar: "محتوى السوشيال ميديا البصري" },
        media_fa4_d: { en: "Content built for Instagram and TikTok.", ar: "محتوى مصمم لإنستغرام وتيك توك." },

        content_name: { en: "Content Creation", ar: "صناعة المحتوى" },
        content_lead: { en: "The voice behind the screen. Content Creation produces the educational posts, guides, and stories that spread EVOLVE's knowledge to every student at Horus.", ar: "الصوت خلف الشاشة. لجنة صناعة المحتوى تنتج المنشورات التعليمية والأدلة والقصص التي تنشر معرفة EVOLVE لكل طالب في حورس." },
        content_fa1_t: { en: "Educational Content", ar: "المحتوى التعليمي" },
        content_fa1_d: { en: "Breaking down technical topics for everyone.", ar: "تبسيط المواضيع التقنية للجميع." },
        content_fa2_t: { en: "Guides & Documentation", ar: "الأدلة والتوثيق" },
        content_fa2_d: { en: "Keeping community knowledge accessible.", ar: "الحفاظ على معرفة المجتمع متاحة للجميع." },
        content_fa3_t: { en: "Social Media Copy", ar: "محتوى السوشيال ميديا" },
        content_fa3_d: { en: "Writing captions, scripts, and announcements.", ar: "كتابة التعليقات والنصوص والإعلانات." },
        content_fa4_t: { en: "Storytelling", ar: "رواية القصص" },
        content_fa4_d: { en: "Turning what we build into stories worth sharing.", ar: "تحويل ما نبنيه إلى قصص تستحق المشاركة." },

        ai_name: { en: "AI/ML", ar: "الذكاء الاصطناعي وتعلم الآلة" },
        ai_lead: { en: "Dive deep into the mathematical foundations and practical applications of modern AI — from classical machine learning to state-of-the-art large language models.", ar: "تعمق في الأسس الرياضية والتطبيقات العملية للذكاء الاصطناعي الحديث، من خوارزميات التعلم الآلي الكلاسيكية إلى نماذج اللغة الكبيرة." },
        ai_fa1_t: { en: "Machine Learning", ar: "تعلم الآلة" },
        ai_fa1_d: { en: "Supervised & unsupervised learning, Scikit-learn.", ar: "التعلم الخاضع وغير الخاضع للإشراف، Scikit-learn." },
        ai_fa2_t: { en: "Deep Learning", ar: "التعلم العميق" },
        ai_fa2_d: { en: "Neural networks, CNNs, RNNs, Transformers.", ar: "الشبكات العصبية، CNNs، RNNs، Transformers." },
        ai_fa3_t: { en: "NLP", ar: "معالجة اللغة الطبيعية" },
        ai_fa3_d: { en: "Text processing, sentiment analysis, LLMs.", ar: "معالجة النصوص، تحليل المشاعر، نماذج اللغة الكبيرة." },
        ai_fa4_t: { en: "Computer Vision", ar: "رؤية الحاسوب" },
        ai_fa4_d: { en: "Image classification, object detection, OpenCV.", ar: "تصنيف الصور، اكتشاف الكائنات، OpenCV." },

        cyber_name: { en: "Cybersecurity/CTFs", ar: "الأمن السيبراني" },
        cyber_lead: { en: "Defend the digital frontier. Learn offensive (Red Team) and defensive (Blue Team) security, and compete in CTFs (Capture The Flag) as a team.", ar: "دافع عن الجبهة الرقمية. تعلم استراتيجيات الهجوم (Red Team) والدفاع (Blue Team)، وتنافس في مسابقات CTF كفريق واحد." },
        cyber_fa1_t: { en: "Ethical Hacking & Pen Testing", ar: "الاختراق الأخلاقي واختبار الاختراق" },
        cyber_fa1_d: { en: "Finding and responsibly reporting vulnerabilities.", ar: "اكتشاف الثغرات والإبلاغ عنها بمسؤولية." },
        cyber_fa2_t: { en: "Network Security", ar: "أمن الشبكات" },
        cyber_fa2_d: { en: "Traffic analysis and infrastructure defense.", ar: "تحليل حركة البيانات والدفاع عن البنية التحتية." },
        cyber_fa3_t: { en: "Cryptography", ar: "التشفير" },
        cyber_fa3_d: { en: "Encryption, hashing, and steganography.", ar: "التشفير، التجزئة، وإخفاء المعلومات." },
        cyber_fa4_t: { en: "CTF Competitions", ar: "مسابقات CTF" },
        cyber_fa4_d: { en: "Practicing and competing as a team.", ar: "التدريب والمنافسة كفريق واحد." },

        tech_name: { en: "Technology & Software", ar: "التكنولوجيا والبرمجيات" },
        tech_lead: { en: "The build engine of EVOLVE. From web platforms to embedded hardware, this committee is where ideas become working software.", ar: "محرك البناء في EVOLVE. من مواقع الويب إلى الأنظمة المدمجة، هنا تتحول الأفكار إلى برمجيات فعلية." },
        tech_fa1_t: { en: "Web Development", ar: "تطوير الويب" },
        tech_fa1_d: { en: "Full-stack apps with modern frameworks.", ar: "تطبيقات full-stack بأطر عمل حديثة." },
        tech_fa2_t: { en: "Data Analysis", ar: "تحليل البيانات" },
        tech_fa2_d: { en: "Turning raw data into insights with Python.", ar: "تحويل البيانات الخام إلى رؤى باستخدام Python." },
        tech_fa3_t: { en: "Mobile (Flutter)", ar: "تطبيقات الموبايل (Flutter)" },
        tech_fa3_d: { en: "Cross-platform apps from a single codebase.", ar: "تطبيقات متعددة المنصات من كود واحد." },
        tech_fa4_t: { en: "Robotics & Embedded Systems", ar: "الروبوتيك والأنظمة المدمجة" },
        tech_fa4_d: { en: "Bridging the physical and digital worlds.", ar: "الربط بين العالمين المادي والرقمي." }
    };

    function currentLang() {
        try { return localStorage.getItem("evolve_lang") || "en"; } catch (e) { return "en"; }
    }

    function applyLang(lang) {
        document.documentElement.lang = lang;
        document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
        var nodes = document.querySelectorAll("[data-i18n]");
        for (var i = 0; i < nodes.length; i++) {
            var key = nodes[i].getAttribute("data-i18n");
            var entry = T[key];
            if (entry && entry[lang] != null) {
                nodes[i].innerHTML = entry[lang];
            }
        }
        var label = document.getElementById("lang-toggle-label");
        var labelMobile = document.getElementById("lang-toggle-label-mobile");
        if (label) label.textContent = lang === "ar" ? "English" : "العربية";
        if (labelMobile) labelMobile.textContent = lang === "ar" ? "EN" : "AR";
    }

    function setLang(lang) {
        try { localStorage.setItem("evolve_lang", lang); } catch (e) { }
        applyLang(lang);
    }

    function toggleLang() {
        setLang(currentLang() === "ar" ? "en" : "ar");
    }

    function init() {
        applyLang(currentLang());
        var btn = document.getElementById("lang-toggle");
        var btnMobile = document.getElementById("lang-toggle-mobile");
        if (btn) btn.addEventListener("click", toggleLang);
        if (btnMobile) btnMobile.addEventListener("click", toggleLang);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", init);
    } else {
        init();
    }
})();
