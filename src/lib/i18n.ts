export type Lang = "en" | "ar";

export const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      skills: "Skills",
      workflow: "Workflow",
      experience: "Experience",
      education: "Education",
      certifications: "Certifications",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Baher Mikhael Habib Azer",
      positioning: "Turning Data Into Decisions.",
      title: "Junior Data Scientist | Data Analyst | Applied AI",
      summary:
        "Junior Data Scientist and Data Analyst turning raw data into actionable insights using Python, SQL, machine learning, Power BI, and modern AI techniques such as computer vision, LLMs, and RAG.",
      differentiator:
        "Combining analytical thinking with a background in Behavioral Psychology to understand both the data and the human behavior behind it.",
      cta_projects: "View Projects",
      cta_resume: "Download Resume",
      cta_linkedin: "LinkedIn",
      cta_github: "GitHub",
      cta_whatsapp: "WhatsApp",
      panel: {
        kpi_label: "Pipeline",
        kpi_value: "Data → Insight",
        kpi_note: "Illustrative analytics preview",
        trend: "Trend Analysis",
        stack: "Core Stack",
        tags: ["EDA", "ETL", "BI", "Visualization"],
      },
    },
    about: {
      heading: "About Me",
      kicker: "Analytics with a human lens",
      p1: "I am a Junior Data Scientist and Data Analyst with a background in Behavioral Psychology, focused on turning complex datasets into clear insights that support better decisions.",
      p2: "My work covers the analytics lifecycle — from data cleaning and exploratory analysis to SQL querying, dashboard development, statistical analysis, predictive analytics, and data storytelling.",
      p3: "I work with Python (Pandas, NumPy, scikit-learn, Plotly), SQL, Power BI, and Excel, and build machine learning and AI systems with PyTorch, TensorFlow/Keras, OpenCV, and LLMs.",
      p4: "My psychology background gives me an additional perspective when analyzing customer behavior, trends, patterns, and human-centered data.",
      cards: [
        { label: "Data Science", value: "Machine Learning" },
        { label: "Psychology", value: "Behavioral Insight" },
        { label: "Applied AI", value: "Intelligent Analytics" },
      ],
    },
    skills: {
      heading: "Skills & Tools",
      kicker: "Competencies across the analytics stack",
      groups: [
        {
          title: "Data Analytics",
          items: ["EDA", "Data Cleaning", "Data Wrangling", "Statistical Analysis", "Trend Analysis", "Data Storytelling", "Customer Segmentation", "Predictive Analytics"],
        },
        {
          title: "Business Intelligence",
          items: ["Power BI", "DAX", "Data Modeling", "KPI Dashboards", "Excel", "Pivot Tables", "Power Query", "BI Reporting"],
        },
        {
          title: "Programming & Data",
          items: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "Plotly", "SQL", "SQL Server", "Jupyter Notebook", "Git & GitHub", "ETL Pipelines"],
        },
        {
          title: "AI & Machine Learning",
          items: ["Machine Learning", "scikit-learn", "PyTorch", "TensorFlow", "Keras", "CNN", "LSTM", "Computer Vision", "OpenCV", "NLP", "LLMs", "RAG", "Embeddings"],
        },
      ],
    },
    tools: { heading: "Data Tools I Use", kicker: "Daily working environment" },
    workflow: {
      heading: "My Data Analysis Workflow",
      kicker: "How a question becomes a decision",
      steps: [
        { title: "Data Collection", desc: "Gathering data from databases, files, and APIs." },
        { title: "Data Cleaning", desc: "Handling missing values, duplicates, and data types." },
        { title: "Exploratory Analysis", desc: "Profiling distributions, relationships, and outliers." },
        { title: "Visualization", desc: "Dashboards and charts that expose the signal." },
        { title: "Insights & Reporting", desc: "Clear recommendations for decision makers." },
      ],
    },
    experience: {
      heading: "Experience",
      kicker: "Analytical work across data, behavior, and support",
      items: [
        {
          title: "Data Analysis & Applied AI Trainee",
          company: "Digital Pioneers Initiative / Digilians",
          period: "Dec 2025 – Present",
          tag: "Training / Scholarship",
          bullets: [
            "Building relational databases with SQL Server and writing complex queries (joins, aggregations, window functions).",
            "Designing interactive Power BI dashboards using DAX and dimensional data modeling.",
            "Applying ETL workflows with Python (Pandas, NumPy) and conducting exploratory data analysis.",
          ],
        },
        {
          title: "Psychologist & Behavioral Specialist",
          company: "Bashayer Al Khair Foundation",
          period: "Feb 2025",
          tag: "Behavioral Data",
          bullets: [
            "Analyzed behavioral data patterns for 15+ cases.",
            "Used quantitative metrics to track treatment progress.",
          ],
        },
        {
          title: "Technical Support Specialist (Voice Account)",
          company: "WE Communications (Telecom)",
          period: "2023 – 2024",
          tag: "Telecom",
          bullets: [
            "Resolved 40+ technical issues daily with approximately 95% CSAT.",
            "Identified recurring technical trends across support cases.",
          ],
        },
        {
          title: "Pharmacy Assistant",
          company: "Multiple Pharmacies",
          period: "2017 – 2022",
          tag: "Inventory Data",
          bullets: [
            "Managed inventory data for 200+ products.",
            "Reduced stock discrepancies through structured tracking.",
          ],
        },
      ],
    },
    projects: {
      heading: "Featured Projects",
      kicker: "Real analytics and applied AI case studies",
      labels: { problem: "Problem", built: "What I built", capabilities: "Key capabilities", tech: "Technology", repo: "View on GitHub", noRepo: "Private / no public repository" },
      items: [
        {
          "category": "Applied AI · Multimodal",
          "title": "Interview IQ: Multimodal Interview Intelligence System",
          "subtitle": "Graduation project · speech, text, and visual signals",
          "problem": "Interview evaluation relies on subjective impressions rather than structured signals.",
          "built": "Developed an AI platform that fuses speech, text, and visual signals into unified performance scores through separate NLP, computer vision, and audio pipelines, with a FastAPI backend.",
          "capabilities": [
            "Speech, text, and visual signal fusion",
            "NLP, computer vision, and audio pipelines",
            "LoRA fine-tuning of transformer models",
            "FastAPI backend"
          ],
          "tech": [
            "Python",
            "PyTorch",
            "OpenCV",
            "Librosa",
            "Transformers",
            "FastAPI"
          ],
          "github": "https://github.com/baherend/InterviewIQ",
          "featured": true
        },
        {
          "category": "Deep Learning · Computer Vision",
          "title": "Smart-City CCTV Violence Detection System",
          "subtitle": "ResNet18 + LSTM video classification",
          "problem": "Manual CCTV monitoring cannot scale across city-wide camera networks.",
          "built": "Built a ResNet18 + LSTM video classifier in PyTorch for Normal, Violence, and Weaponized categories, reaching 99.8% test accuracy on the dataset's pre-segmented 1-second clips and evaluating full-length clips (67.1%) to expose generalization limits.",
          "capabilities": [
            "Normal / Violence / Weaponized classes",
            "99.8% test accuracy on 1-second clips",
            "67.1% on full-length clips (generalization check)",
            "Interactive Plotly probability timeline"
          ],
          "tech": [
            "Python",
            "PyTorch",
            "ResNet18",
            "LSTM",
            "OpenCV",
            "scikit-learn",
            "Plotly"
          ],
          "github": "https://github.com/baherend/Smart-City-CCTV-Violence-Detection",
          "featured": true
        },
        {
          "category": "Applied AI · Football Analytics",
          "title": "Football Analytics RAG System",
          "subtitle": "FIFA World Cup 2022 · StatsBomb data",
          "problem": "Match event data is rich but hard to explore for non-technical users who just want to ask a question.",
          "built": "Built a Retrieval-Augmented Generation system over StatsBomb FIFA World Cup 2022 data that allows users to ask natural-language questions about matches, players, and teams.",
          "capabilities": [
            "64 World Cup matches, 2,835 indexed documents",
            "Hybrid information retrieval",
            "BM25 lexical retrieval",
            "Dense embeddings",
            "Reciprocal Rank Fusion",
            "Structured & semantic query routing",
            "ChromaDB",
            "LLM response generation",
            "Streamlit interface"
          ],
          "tech": [
            "Python",
            "RAG",
            "ChromaDB",
            "BM25",
            "Embeddings",
            "Streamlit",
            "OpenRouter"
          ],
          "github": "https://github.com/baherend/Football-Analytics-RAG-FULL",
          "featured": true
        },
        {
          "category": "Data Analytics",
          "title": "E-Commerce Sales Analysis",
          "subtitle": "Exploratory analysis, segmentation & business insights",
          "problem": "Understanding what drives revenue, which customers matter most, and how demand moves over time.",
          "built": "End-to-end analytics project in Python on ~542K retail transactions covering data cleaning, exploratory data analysis, customer segmentation, market basket analysis, and time-based sales patterns.",
          "capabilities": [
            "~542K transactions analyzed",
            "5,268 duplicates removed, 9,071 returns isolated",
            "Exploratory Data Analysis",
            "Customer Segmentation (3 tiers)",
            "Market Basket Analysis",
            "Business Insights"
          ],
          "tech": [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Jupyter Notebook"
          ],
          "github": "https://github.com/baherend/E-Commerce-Sales-Analysis",
          "featured": true
        },
        {
          "category": "Applied AI · Audio Signal Analysis",
          "title": "Audio Doctor: Call Review Prototype",
          "subtitle": "Arabic call-center calls · acoustic evidence only",
          "problem": "Reviewing recorded customer-service calls manually is slow, and team leaders need objective evidence of call quality.",
          "built": "Built a Streamlit prototype that lets call-center team leaders review recorded Arabic calls from acoustic and timing evidence only, with exportable JSON/PDF call reviews.",
          "capabilities": [
            "Stereo channel validation",
            "RMS-based activity gating",
            "Windowed vocal-activation classification (Wav2Vec2)",
            "Hold and dead-air detection",
            "Unit-tested pipeline"
          ],
          "tech": [
            "Python",
            "PyTorch",
            "Wav2Vec2",
            "Streamlit",
            "pytest"
          ],
          "github": "https://github.com/baherend/audio-review",
          "featured": false
        },
        {
          "category": "Business Intelligence",
          "title": "End-to-End Data Analysis & Visualization",
          "subtitle": "SQL Server database + Excel KPI dashboard",
          "problem": "Reporting spread across flat files with no consistent data model or KPI definitions.",
          "built": "Designed a relational database using SQL Server and developed an interactive Excel dashboard for KPI analysis and business insights.",
          "capabilities": [
            "SQL Server",
            "Data Modeling",
            "Excel",
            "Dashboard Development",
            "KPIs",
            "Business Insights"
          ],
          "tech": [
            "SQL Server",
            "Excel",
            "Power Query"
          ],
          "github": "",
          "featured": false
        },
      ],
    },
    education: {
      heading: "Education",
      kicker: "Data training built on a behavioral science foundation",
      items: [
        { degree: "Data Analysis & Applied Artificial Intelligence", school: "Digital Pioneers — Digilians Scholarship · MCIT & Egyptian Military Academy", year: "Dec 2025 – Expected Nov 2026", note: "Intensive applied training in SQL, Python, Power BI, statistics, and machine learning." },
        { degree: "Bachelor of Arts in Psychology", school: "Alexandria University", year: "2019", note: "Foundation for behavioral analysis, human-centered data thinking, and research methods." },
        { degree: "Cognitive Behavioral Therapy Diploma", school: "Wataneya Institute", year: "2019", note: "Structured assessment and progress tracking through measurable behavioral indicators." },
      ],
    },
    certifications: {
      heading: "Certifications",
      kicker: "Verified analytics and BI credentials",
      items: [
        { name: "Power BI Data Analyst Associate (PL-300)", issuer: "Microsoft Certified", priority: true },
        { name: "Azure Data Fundamentals (DP-900)", issuer: "Microsoft Certified", priority: true },
        { name: "Google Data Analytics Professional Certificate", issuer: "Google", priority: true },
        { name: "Machine Learning with Python", issuer: "IBM", priority: false },
        { name: "Introduction to Deep Learning & Neural Networks with Keras", issuer: "IBM", priority: false },
        { name: "Preparing Data for Analysis with Microsoft Excel", issuer: "Microsoft", priority: false },
        { name: "Data Analysis with R Programming", issuer: "Google", priority: false },
      ],
    },
    contact: {
      heading: "Get In Touch",
      kicker: "Open to Data Scientist, Data Analyst and BI roles",
      blurb: "The fastest way to reach me is email or LinkedIn. I usually reply within a day.",
      emailCta: "Email Me",
      whatsappCta: "WhatsApp",
    },
    footer: { rights: "All rights reserved.", quickLinks: "Quick Links", contactInfo: "Contact Info", tagline: "Data Scientist • Data Analyst • Applied AI" },
  },
  ar: {
    nav: {
      about: "عني",
      projects: "المشاريع",
      skills: "المهارات",
      workflow: "المنهجية",
      experience: "الخبرة",
      education: "التعليم",
      certifications: "الشهادات",
      contact: "تواصل",
    },
    hero: {
      greeting: "مرحباً، أنا",
      name: "باهر ميخائيل حبيب عازر",
      positioning: "أحوّل البيانات إلى قرارات.",
      title: "عالم بيانات مبتدئ | محلل بيانات | الذكاء الاصطناعي التطبيقي",
      summary:
        "عالم بيانات مبتدئ ومحلل بيانات أحوّل البيانات الخام إلى رؤى عملية باستخدام Python و SQL والتعلم الآلي و Power BI وتقنيات الذكاء الاصطناعي الحديثة مثل الرؤية الحاسوبية والنماذج اللغوية الكبيرة و RAG.",
      differentiator:
        "أجمع بين التفكير التحليلي وخلفية في علم النفس السلوكي لفهم البيانات والسلوك البشري الذي يقف خلفها.",
      cta_projects: "استعرض المشاريع",
      cta_resume: "تحميل السيرة الذاتية",
      cta_linkedin: "لينكدإن",
      cta_github: "جيت هاب",
      cta_whatsapp: "واتساب",
      panel: {
        kpi_label: "المسار",
        kpi_value: "بيانات → رؤية",
        kpi_note: "عرض توضيحي للتحليلات",
        trend: "تحليل الاتجاه",
        stack: "الأدوات الأساسية",
        tags: ["تحليل استكشافي", "ETL", "ذكاء أعمال", "تصور بياني"],
      },
    },
    about: {
      heading: "عني",
      kicker: "تحليلات بمنظور إنساني",
      p1: "أنا عالم بيانات مبتدئ ومحلل بيانات بخلفية في علم النفس السلوكي، أركز على تحويل مجموعات البيانات المعقدة إلى رؤى واضحة تدعم اتخاذ قرارات أفضل.",
      p2: "يغطي عملي دورة حياة التحليل كاملة — من تنظيف البيانات والتحليل الاستكشافي إلى استعلامات SQL وتطوير لوحات المعلومات والتحليل الإحصائي والتحليلات التنبؤية وسرد البيانات.",
      p3: "أعمل باستخدام Python (Pandas و NumPy و scikit-learn و Plotly) و SQL و Power BI و Excel، وأبني أنظمة تعلم آلي وذكاء اصطناعي باستخدام PyTorch و TensorFlow/Keras و OpenCV والنماذج اللغوية الكبيرة.",
      p4: "خلفيتي في علم النفس تمنحني منظوراً إضافياً عند تحليل سلوك العملاء والاتجاهات والأنماط والبيانات المرتكزة على الإنسان.",
      cards: [
        { label: "علم البيانات", value: "التعلم الآلي" },
        { label: "علم النفس", value: "رؤية سلوكية" },
        { label: "الذكاء الاصطناعي التطبيقي", value: "تحليلات ذكية" },
      ],
    },
    skills: {
      heading: "المهارات والأدوات",
      kicker: "كفاءات في منظومة التحليل",
      groups: [
        {
          title: "تحليل البيانات",
          items: ["التحليل الاستكشافي", "تنظيف البيانات", "معالجة البيانات", "التحليل الإحصائي", "تحليل الاتجاهات", "سرد البيانات", "تقسيم العملاء", "التحليلات التنبؤية"],
        },
        {
          title: "ذكاء الأعمال",
          items: ["Power BI", "DAX", "نمذجة البيانات", "لوحات مؤشرات الأداء", "Excel", "الجداول المحورية", "Power Query", "تقارير ذكاء الأعمال"],
        },
        {
          title: "البرمجة والبيانات",
          items: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "Plotly", "SQL", "SQL Server", "Jupyter Notebook", "Git & GitHub", "خطوط ETL"],
        },
        {
          title: "الذكاء الاصطناعي والتعلم الآلي",
          items: ["التعلم الآلي", "scikit-learn", "PyTorch", "TensorFlow", "Keras", "CNN", "LSTM", "الرؤية الحاسوبية", "OpenCV", "معالجة اللغة", "النماذج اللغوية الكبيرة", "RAG", "التمثيلات المتجهة"],
        },
      ],
    },
    tools: { heading: "أدوات البيانات التي أستخدمها", kicker: "بيئة العمل اليومية" },
    workflow: {
      heading: "منهجية تحليل البيانات",
      kicker: "كيف يتحول السؤال إلى قرار",
      steps: [
        { title: "جمع البيانات", desc: "من قواعد البيانات والملفات وواجهات البرمجة." },
        { title: "تنظيف البيانات", desc: "معالجة القيم المفقودة والتكرارات وأنواع البيانات." },
        { title: "التحليل الاستكشافي", desc: "دراسة التوزيعات والعلاقات والقيم الشاذة." },
        { title: "التصور البياني", desc: "لوحات ورسوم توضح الإشارة داخل البيانات." },
        { title: "الرؤى والتقارير", desc: "توصيات واضحة لصنّاع القرار." },
      ],
    },
    experience: {
      heading: "الخبرة",
      kicker: "عمل تحليلي بين البيانات والسلوك والدعم",
      items: [
        {
          title: "متدرب تحليل بيانات وذكاء اصطناعي تطبيقي",
          company: "مبادرة الرواد الرقميين / ديجيليانز",
          period: "ديسمبر 2025 – الحالي",
          tag: "تدريب / منحة",
          bullets: [
            "بناء قواعد بيانات علائقية باستخدام SQL Server وكتابة استعلامات معقدة.",
            "تصميم لوحات معلومات تفاعلية في Power BI باستخدام DAX ونمذجة البيانات.",
            "تطبيق مسارات ETL باستخدام Python وإجراء تحليل استكشافي للبيانات.",
          ],
        },
        {
          title: "أخصائي نفسي وسلوكي",
          company: "مؤسسة بشائر الخير",
          period: "فبراير 2025",
          tag: "بيانات سلوكية",
          bullets: ["تحليل أنماط البيانات السلوكية لأكثر من 15 حالة.", "استخدام مقاييس كمية لتتبع تقدم العلاج."],
        },
        {
          title: "أخصائي دعم فني (خدمة الصوت)",
          company: "WE Communications (اتصالات)",
          period: "2023 – 2024",
          tag: "اتصالات",
          bullets: ["حل أكثر من 40 مشكلة فنية يومياً برضا عملاء يقارب 95%.", "تحديد الاتجاهات الفنية المتكررة."],
        },
        {
          title: "مساعد صيدلي",
          company: "صيدليات متعددة",
          period: "2017 – 2022",
          tag: "بيانات المخزون",
          bullets: ["إدارة بيانات المخزون لأكثر من 200 منتج.", "تقليل فروق المخزون من خلال تتبع منظم."],
        },
      ],
    },
    projects: {
      heading: "المشاريع المميزة",
      kicker: "دراسات حالة حقيقية في التحليل والذكاء الاصطناعي",
      labels: { problem: "المشكلة", built: "ما بنيته", capabilities: "أهم القدرات", tech: "التقنيات", repo: "عرض على GitHub", noRepo: "مستودع غير عام" },
      items: [
        {
          "category": "ذكاء اصطناعي تطبيقي · متعدد الوسائط",
          "title": "Interview IQ: نظام ذكاء المقابلات متعدد الوسائط",
          "subtitle": "مشروع التخرج · إشارات الصوت والنص والصورة",
          "problem": "تقييم المقابلات يعتمد على انطباعات شخصية بدل إشارات منظمة.",
          "built": "تطوير منصة ذكاء اصطناعي تدمج إشارات الكلام والنص والصورة في درجات أداء موحدة عبر مسارات منفصلة لمعالجة اللغة والرؤية الحاسوبية والصوت، مع واجهة خلفية بـ FastAPI.",
          "capabilities": [
            "دمج إشارات الكلام والنص والصورة",
            "مسارات معالجة اللغة والرؤية الحاسوبية والصوت",
            "ضبط نماذج Transformers بتقنية LoRA",
            "واجهة خلفية FastAPI"
          ],
          "tech": [
            "Python",
            "PyTorch",
            "OpenCV",
            "Librosa",
            "Transformers",
            "FastAPI"
          ],
          "github": "https://github.com/baherend/InterviewIQ",
          "featured": true
        },
        {
          "category": "تعلم عميق · رؤية حاسوبية",
          "title": "نظام كشف العنف من كاميرات المدن الذكية",
          "subtitle": "تصنيف الفيديو بـ ResNet18 + LSTM",
          "problem": "المراقبة اليدوية للكاميرات لا تتوسع على مستوى المدينة.",
          "built": "بناء مصنّف فيديو ResNet18 + LSTM باستخدام PyTorch للفئات: عادي، عنف، مسلح، بدقة اختبار 99.8% على مقاطع الثانية الواحدة الجاهزة، مع تقييم على المقاطع الكاملة (67.1%) لكشف حدود التعميم.",
          "capabilities": [
            "تصنيف ثلاثي الفئات",
            "دقة اختبار 99.8% على مقاطع الثانية الواحدة",
            "67.1% على المقاطع الكاملة (اختبار التعميم)",
            "مخطط احتمالات تفاعلي بـ Plotly"
          ],
          "tech": [
            "Python",
            "PyTorch",
            "ResNet18",
            "LSTM",
            "OpenCV",
            "scikit-learn",
            "Plotly"
          ],
          "github": "https://github.com/baherend/Smart-City-CCTV-Violence-Detection",
          "featured": true
        },
        {
          "category": "ذكاء اصطناعي تطبيقي · تحليلات كرة القدم",
          "title": "نظام RAG لتحليلات كرة القدم",
          "subtitle": "كأس العالم 2022 · بيانات StatsBomb",
          "problem": "بيانات أحداث المباريات غنية لكن يصعب استكشافها على غير المتخصصين.",
          "built": "بناء نظام توليد معزز بالاسترجاع على بيانات StatsBomb لكأس العالم 2022 يتيح طرح أسئلة بلغة طبيعية عن المباريات واللاعبين والفرق.",
          "capabilities": [
            "64 مباراة و2,835 وثيقة مفهرسة",
            "استرجاع هجين",
            "استرجاع BM25",
            "تمثيلات متجهة كثيفة",
            "دمج الترتيب التبادلي",
            "توجيه الاستعلامات",
            "ChromaDB",
            "توليد الردود بنموذج لغوي",
            "واجهة Streamlit"
          ],
          "tech": [
            "Python",
            "RAG",
            "ChromaDB",
            "BM25",
            "Embeddings",
            "Streamlit",
            "OpenRouter"
          ],
          "github": "https://github.com/baherend/Football-Analytics-RAG-FULL",
          "featured": true
        },
        {
          "category": "تحليل بيانات",
          "title": "تحليل مبيعات التجارة الإلكترونية",
          "subtitle": "تحليل استكشافي وتقسيم عملاء ورؤى أعمال",
          "problem": "فهم محركات الإيرادات وأهم شرائح العملاء وتغير الطلب عبر الزمن.",
          "built": "مشروع تحليلي متكامل بلغة Python على نحو 542 ألف عملية بيع يغطي تنظيف البيانات والتحليل الاستكشافي وتقسيم العملاء وتحليل سلة المشتريات وأنماط المبيعات عبر الزمن.",
          "capabilities": [
            "تحليل نحو 542 ألف عملية",
            "إزالة 5,268 تكرار وعزل 9,071 مرتجع",
            "التحليل الاستكشافي",
            "تقسيم العملاء (3 شرائح)",
            "تحليل سلة المشتريات",
            "رؤى الأعمال"
          ],
          "tech": [
            "Python",
            "Pandas",
            "NumPy",
            "Matplotlib",
            "Seaborn",
            "Jupyter Notebook"
          ],
          "github": "https://github.com/baherend/E-Commerce-Sales-Analysis",
          "featured": true
        },
        {
          "category": "ذكاء اصطناعي تطبيقي · تحليل الإشارات الصوتية",
          "title": "Audio Doctor: نموذج مراجعة المكالمات",
          "subtitle": "مكالمات مراكز الاتصال العربية · أدلة صوتية فقط",
          "problem": "مراجعة مكالمات خدمة العملاء المسجلة يدوياً بطيئة، ويحتاج قادة الفرق إلى أدلة موضوعية على جودة المكالمة.",
          "built": "بناء نموذج أولي بـ Streamlit يتيح لقادة فرق مراكز الاتصال مراجعة المكالمات العربية المسجلة اعتماداً على الأدلة الصوتية والزمنية فقط، مع تقارير JSON/PDF قابلة للتصدير.",
          "capabilities": [
            "التحقق من قنوات الاستريو",
            "تحديد النشاط بقياس RMS",
            "تصنيف النشاط الصوتي بنوافذ زمنية (Wav2Vec2)",
            "كشف الانتظار والصمت",
            "مسار معالجة مغطى باختبارات"
          ],
          "tech": [
            "Python",
            "PyTorch",
            "Wav2Vec2",
            "Streamlit",
            "pytest"
          ],
          "github": "https://github.com/baherend/audio-review",
          "featured": false
        },
        {
          "category": "ذكاء الأعمال",
          "title": "تحليل وتصور بيانات متكامل",
          "subtitle": "قاعدة بيانات SQL Server ولوحة Excel",
          "problem": "تقارير متفرقة بين ملفات دون نموذج بيانات موحد أو مؤشرات واضحة.",
          "built": "تصميم قاعدة بيانات علائقية باستخدام SQL Server وتطوير لوحة Excel تفاعلية لتحليل مؤشرات الأداء ورؤى الأعمال.",
          "capabilities": [
            "SQL Server",
            "نمذجة البيانات",
            "Excel",
            "تطوير لوحات المعلومات",
            "مؤشرات الأداء",
            "رؤى الأعمال"
          ],
          "tech": [
            "SQL Server",
            "Excel",
            "Power Query"
          ],
          "github": "",
          "featured": false
        },
      ],
    },
    education: {
      heading: "التعليم",
      kicker: "تدريب بيانات على أساس من العلوم السلوكية",
      items: [
        { degree: "تحليل البيانات والذكاء الاصطناعي التطبيقي", school: "منحة الرواد الرقميين — ديجيليانز · وزارة الاتصالات والكلية الحربية", year: "ديسمبر 2025 – متوقع نوفمبر 2026", note: "تدريب تطبيقي مكثف على SQL و Python و Power BI والإحصاء والتعلم الآلي." },
        { degree: "بكالوريوس آداب – علم النفس", school: "جامعة الإسكندرية", year: "2019", note: "أساس للتحليل السلوكي والتفكير المرتكز على الإنسان ومناهج البحث." },
        { degree: "دبلوم العلاج المعرفي السلوكي", school: "معهد وطنية", year: "2019", note: "تقييم منظم وتتبع التقدم عبر مؤشرات سلوكية قابلة للقياس." },
      ],
    },
    certifications: {
      heading: "الشهادات",
      kicker: "شهادات معتمدة في التحليل وذكاء الأعمال",
      items: [
        { name: "محلل بيانات Power BI معتمد (PL-300)", issuer: "Microsoft Certified", priority: true },
        { name: "أساسيات بيانات Azure (DP-900)", issuer: "Microsoft Certified", priority: true },
        { name: "شهادة Google المهنية في تحليل البيانات", issuer: "Google", priority: true },
        { name: "التعلم الآلي باستخدام Python", issuer: "IBM", priority: false },
        { name: "مقدمة في التعلم العميق والشبكات العصبية مع Keras", issuer: "IBM", priority: false },
        { name: "تحضير البيانات للتحليل باستخدام Excel", issuer: "Microsoft", priority: false },
        { name: "تحليل البيانات بلغة R", issuer: "Google", priority: false },
      ],
    },
    contact: {
      heading: "تواصل معي",
      kicker: "متاح لفرص علم البيانات وتحليل البيانات وذكاء الأعمال",
      blurb: "أسرع طريقة للتواصل هي البريد الإلكتروني أو لينكدإن. أرد عادةً خلال يوم.",
      emailCta: "أرسل بريداً",
      whatsappCta: "واتساب",
    },
    footer: { rights: "جميع الحقوق محفوظة.", quickLinks: "روابط سريعة", contactInfo: "معلومات التواصل", tagline: "عالم بيانات • محلل بيانات • الذكاء الاصطناعي التطبيقي" },
  },
} as const;
