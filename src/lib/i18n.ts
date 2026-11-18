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
      title: "Junior Data Analyst",
      summary:
        "Junior Data Analyst with a background in Psychology and hands-on project experience in data cleaning, exploratory analysis, customer segmentation, and football analytics. I use Python, SQL, Power BI, and Excel to uncover patterns and communicate findings that support informed decisions.",
      differentiator:
        "Combining analytical thinking, behavioral understanding, and clear communication to interpret data in its human and business context.",
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
      p1: "I am a Junior Data Analyst with a background in Psychology, focused on exploring data, identifying meaningful patterns, and turning findings into clear insights that support better decisions.",
      p2: "My project work spans data cleaning, exploratory data analysis, customer segmentation, SQL database querying, KPI reporting, and dashboard development — from preparing raw data to communicating practical findings.",
      p3: "I use Python (Pandas, NumPy, Matplotlib, Seaborn, and Plotly), SQL, Power BI, and Excel for analysis and visualization. I also have project experience applying machine learning and AI techniques.",
      p4: "My academic background in Psychology, along with experience in behavioral support and children’s skill development, strengthened my ability to observe patterns, track progress, and communicate findings with empathy and clarity.",
      cards: [
        { label: "Data Analytics", value: "Insight Generation" },
        { label: "Psychology", value: "Behavioral Understanding" },
        { label: "Business Intelligence", value: "Reporting & Dashboards" },
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
      kicker: "Data analytics, business intelligence, and applied AI case studies",
      labels: { problem: "Problem", built: "Project overview", capabilities: "Key capabilities", tech: "Technology", repo: "View on GitHub", noRepo: "No public repository" },
      items: [
        {
          "category": "Data Analytics",
          "title": "Retail E-Commerce Sales Analysis & Customer Segmentation",
          "image": "/project-previews/ecommerce-analytics.svg",
          "imageAlt": "Illustrative e-commerce analytics dashboard preview",
          "subtitle": "~542K transactions · EDA, customer segmentation & market basket analysis",
          "problem": "Raw retail transactions can hide the real sales picture when customer IDs are missing, duplicate rows and product returns are not handled carefully.",
          "built": "Analyzed approximately 542K retail transactions, handled 135K+ missing CustomerID values, removed 5,268 duplicate rows, and isolated 9,071 returns to support more reliable net-sales analysis. Explored hourly and daily demand, identified frequently co-purchased products, and grouped customers into three spending-frequency segments to develop practical marketing, merchandising and staffing recommendations.",
          "capabilities": [
            "Data cleaning and transaction-quality checks",
            "Hourly and daily sales-pattern analysis",
            "Customer segmentation using purchase frequency and monetary value",
            "Market Basket Analysis and product associations",
            "Actionable recommendations for marketing, merchandising and operations"
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
          "category": "Business Intelligence",
          "title": "End-to-End Data Analysis & Visualization",
          "image": "/project-previews/sql-excel-bi.svg",
          "imageAlt": "Illustrative SQL Server and Excel KPI dashboard preview",
          "subtitle": "SQL Server relational database · Excel KPI dashboard",
          "problem": "Business reporting is harder to maintain when data is spread across files without a consistent relational structure or clear KPI view.",
          "built": "Designed a relational database in SQL Server and developed an interactive Excel dashboard to organize information, monitor key performance indicators, and communicate findings through clear visual reporting. Project insights were also shared on LinkedIn.",
          "capabilities": [
            "Relational database design",
            "SQL querying",
            "Excel dashboard development",
            "KPI tracking and visualization",
            "Business insight communication"
          ],
          "tech": [
            "SQL Server",
            "SQL",
            "Microsoft Excel",
            "Power Query"
          ],
          "github": "",
          "featured": true
        },
        {
          "category": "Data Analytics · Football Performance",
          "title": "Football Analytics RAG System",
          "image": "https://raw.githubusercontent.com/baherend/Football-Analytics-RAG-FULL/competition-portability/assets/football-rag-banner.png",
          "imageAlt": "Football Analytics RAG project banner",
          "subtitle": "StatsBomb · FIFA World Cup 2022 baseline · EPL 2015/16 validation on development branch",
          "problem": "Football event data contains detailed match, team and player information, but answering performance questions reliably requires both structured statistical calculations and relevant contextual evidence.",
          "built": "Built a StatsBomb-based football analytics and RAG system. Its structured layer extracts and resolves metrics including xG, goals, assists, passing, passes under pressure, final-third passes, carries, pressures, defensive actions and goalkeeper actions. A hybrid retrieval layer combines BM25 with dense embeddings using Reciprocal Rank Fusion (RRF), while query routing directs numeric questions to structured calculations and descriptive questions to evidence retrieval. The competition-portability branch validates the pipeline on EPL 2015/16 in addition to the FIFA World Cup 2022 baseline.",
          "capabilities": [
            "Structured match, team and player performance metrics",
            "xG, passing, pressure, carries, defensive and goalkeeper statistics",
            "Hybrid BM25 + dense retrieval with Reciprocal Rank Fusion",
            "Structured and semantic query routing with evidence-aware answers",
            "WC2022 retrieval benchmark (24 cases): 91.7% Hit@5 and 75.4% nDCG@5",
            "Arabic-aware queries and EPL 2015/16 portability validation on the development branch"
          ],
          "tech": [
            "Python",
            "StatsBomb Open Data",
            "BM25",
            "Sentence Transformers",
            "ChromaDB",
            "Streamlit",
            "OpenRouter"
          ],
          "github": "https://github.com/baherend/Football-Analytics-RAG-FULL/tree/competition-portability",
          "featured": true
        },
        {
          "category": "Applied AI · Audio Signal Analysis",
          "title": "Audio Doctor: Stereo Call Review Prototype",
          "image": "/project-previews/audio-doctor.svg",
          "imageAlt": "Illustrative stereo call audio review timeline",
          "subtitle": "Arabic customer-service calls · acoustic and timing evidence only",
          "problem": "Team leaders need a structured way to review call activity, pauses, hold candidates and overlapping speech without relying only on manual listening.",
          "built": "Developed a Streamlit prototype that analyzes authorized stereo WAV recordings using a fixed left-agent/right-customer channel convention, 2-second windows and a 1-second hop. The pipeline combines RMS-based activity gating with a Wav2Vec2 vocal-activation classifier, then produces channel summaries, an activity timeline, heuristic Hold candidates, Dead Air and overlap alerts, and a consolidated Final Call Review with JSON/PDF export. It does not transcribe speech, infer sentiment, or perform speaker diarization.",
          "capabilities": [
            "Stereo input validation and channel-quality checks",
            "RMS-based activity detection and time-aligned summaries",
            "Three-class vocal-activation inference using Wav2Vec2",
            "Prototype Hold, Dead Air and overlap evidence",
            "Final Call Review with JSON and PDF export"
          ],
          "tech": [
            "Python",
            "Streamlit",
            "PyTorch",
            "Wav2Vec2",
            "NumPy",
            "ReportLab",
            "pytest"
          ],
          "github": "https://github.com/baherend/audio-review",
          "featured": false
        },
        {
          "category": "Applied AI · Multimodal · Team Project",
          "title": "InterviewIQ: Multimodal Interview Intelligence Platform",
          "image": "https://raw.githubusercontent.com/baherend/InterviewIQ/main/assets/interviewiq-banner.png",
          "imageAlt": "InterviewIQ project banner",
          "subtitle": "Graduation project · team of 5 · individual contribution: Arabic speech-emotion model",
          "problem": "Interview practice benefits from feedback that considers both what a candidate says and how the answer is delivered, supported by traceable evidence rather than unsupported scores.",
          "built": "Contributed to a five-member team building a multimodal interview platform. My individual contribution was training an Arabic speech-emotion classifier using Wav2Vec2-XLSR-53 + BiLSTM on the BAVED dataset to classify Low, Neutral and High vocal-emotion intensity, improving Neutral-class precision from 0.79 to 0.86. The wider platform includes audio analysis, speech recognition and NLP, computer-vision components, and a multimodal fusion test harness; full persisted production fusion remains under development.",
          "capabilities": [
            "Arabic speech-emotion model training (individual contribution)",
            "Neutral-class precision improved from 0.79 to 0.86",
            "Audio delivery analysis and speech recognition",
            "Evidence-based NLP answer evaluation",
            "Computer-vision analysis and multimodal fusion test harness"
          ],
          "tech": [
            "Python",
            "PyTorch",
            "Wav2Vec2-XLSR-53",
            "BiLSTM",
            "BAVED",
            "Transformers",
            "Librosa",
            "FastAPI",
            "React",
            "PostgreSQL"
          ],
          "github": "https://github.com/baherend/InterviewIQ",
          "featured": false
        },
        {
          "category": "Deep Learning · Computer Vision · Team Project",
          "title": "Smart-City CCTV Violence Detection System",
          "image": "https://raw.githubusercontent.com/baherend/Smart-City-CCTV-Violence-Detection/main/assets/scvd-banner.png",
          "imageAlt": "Smart City CCTV project banner",
          "subtitle": "Team 4 · ResNet18 + LSTM · temporal CCTV video analysis",
          "problem": "Manually reviewing long CCTV recordings is time-consuming; security teams need tools that can highlight potentially relevant time segments for human review.",
          "built": "Team project developed by Team 4. The system classifies video windows into Normal, Violence and Weaponized classes using frozen ImageNet-pretrained ResNet18 frame features and a two-layer LSTM. It achieved 99.8% test accuracy on 477 predefined one-second test clips; on a separate 82-clip full-length test split, accuracy was 67.1% and Violence-class F1 was 0.00, showing a clear generalization limitation. The analysis dashboard adds sliding-window predictions, temporal smoothing, event merging, Plotly timelines, optional YOLO11n person boxes for visual context, and Arabic review reports. It is a human-review aid, not an aggressor-identification system.",
          "capabilities": [
            "Three-class video classification: Normal, Violence and Weaponized",
            "99.8% on predefined one-second clips; 67.1% on full-length clips",
            "Sliding-window analysis, temporal smoothing and incident timelines",
            "Plotly probability charts and Arabic review reports",
            "YOLO11n person boxes for scene context only"
          ],
          "tech": [
            "Python",
            "PyTorch",
            "ResNet18",
            "LSTM",
            "OpenCV",
            "YOLO11n",
            "Plotly",
            "Gradio",
            "Streamlit"
          ],
          "github": "https://github.com/baherend/Smart-City-CCTV-Violence-Detection",
          "featured": false
        }
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
      kicker: "Open to Junior Data Analyst, Data Analyst and BI opportunities",
      blurb: "The fastest way to reach me is email or LinkedIn. I usually reply within a day.",
      emailCta: "Email Me",
      whatsappCta: "WhatsApp",
    },
    footer: { rights: "All rights reserved.", quickLinks: "Quick Links", contactInfo: "Contact Info", tagline: "Junior Data Analyst • Data Analytics • Business Intelligence" },
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
      title: "محلل بيانات مبتدئ",
      summary:
        "محلل بيانات مبتدئ بخلفية أكاديمية في علم النفس وخبرة عملية من خلال مشروعات في تنظيف البيانات وتحليلها استكشافياً وتقسيم العملاء وتحليلات كرة القدم. أستخدم Python و SQL و Power BI و Excel لاكتشاف الأنماط وعرض النتائج التي تدعم اتخاذ قرارات أفضل.",
      differentiator:
        "أجمع بين التفكير التحليلي وفهم السلوك البشري والقدرة على التواصل الواضح لتفسير البيانات في سياقها الإنساني والعملي.",
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
      p1: "أنا محلل بيانات مبتدئ بخلفية أكاديمية في علم النفس، أركز على استكشاف البيانات واكتشاف الأنماط وتحويل النتائج إلى رؤى واضحة تدعم اتخاذ قرارات أفضل.",
      p2: "تشمل مشروعاتي تنظيف البيانات وتحليلها استكشافياً وتقسيم العملاء والاستعلام عن قواعد البيانات باستخدام SQL وإعداد تقارير مؤشرات الأداء وتطوير لوحات المعلومات، بدايةً من تجهيز البيانات الخام وحتى عرض النتائج العملية.",
      p3: "أستخدم Python (Pandas و NumPy و Matplotlib و Seaborn و Plotly) و SQL و Power BI و Excel في التحليل والتصور البياني، ولدي أيضاً خبرة من خلال المشروعات في تطبيق تقنيات التعلم الآلي والذكاء الاصطناعي.",
      p4: "دراستي لعلم النفس وخبرتي في الدعم السلوكي وتنمية مهارات الأطفال عززت قدرتي على ملاحظة الأنماط ومتابعة التقدم والتواصل بوضوح واهتمام.",
      cards: [
        { label: "تحليل البيانات", value: "استخراج الرؤى" },
        { label: "علم النفس", value: "فهم السلوك" },
        { label: "ذكاء الأعمال", value: "التقارير ولوحات المعلومات" },
      ],
    },
    skills: {
      heading: "المهارات والأدوات",
      kicker: "كفاءات في منظومة التحليل",
      groups: [
        {
          title: "تحليل البيانات",
          items: [
        {
          "category": "تحليل البيانات",
          "title": "تحليل مبيعات التجارة الإلكترونية وتقسيم العملاء",
          "subtitle": "نحو 542 ألف معاملة · تحليل استكشافي وتقسيم العملاء وتحليل سلة المشتريات",
          "problem": "قد تخفي معاملات البيع الصورة الحقيقية للأداء عند وجود معرّفات عملاء مفقودة أو سجلات مكررة أو مرتجعات لم تتم معالجتها بشكل صحيح.",
          "built": "حللت نحو 542 ألف معاملة بيع، وتعاملت مع أكثر من 135 ألف قيمة مفقودة في CustomerID، وأزلت 5,268 سجلًا مكررًا، وعزلت 9,071 معاملة مرتجعة لدعم تحليل أدق لصافي المبيعات. درست أنماط الطلب حسب الساعة واليوم، وحددت المنتجات التي تُشترى معًا، وقسمت العملاء إلى ثلاث شرائح وفق تكرار الشراء وقيمته، ثم استخلصت توصيات عملية للتسويق والعرض والعمليات.",
          "capabilities": [
            "تنظيف البيانات والتحقق من جودة المعاملات",
            "تحليل أنماط المبيعات حسب الساعة واليوم",
            "تقسيم العملاء وفق تكرار الشراء والقيمة المالية",
            "تحليل سلة المشتريات والعلاقات بين المنتجات",
            "توصيات قابلة للتنفيذ للتسويق والعرض والعمليات"
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
          "category": "ذكاء الأعمال",
          "title": "مشروع متكامل لتحليل البيانات وتصورها",
          "subtitle": "قاعدة بيانات علائقية باستخدام SQL Server · لوحة مؤشرات Excel",
          "problem": "تصبح التقارير أصعب في الإدارة عندما تكون البيانات موزعة بين ملفات متعددة دون هيكل علائقي موحد أو متابعة واضحة لمؤشرات الأداء.",
          "built": "صممت قاعدة بيانات علائقية باستخدام SQL Server وطورت لوحة Excel تفاعلية لتنظيم المعلومات ومتابعة مؤشرات الأداء الرئيسية وعرض النتائج بصريًا. كما شاركت رؤى المشروع على LinkedIn.",
          "capabilities": [
            "تصميم قواعد البيانات العلائقية",
            "كتابة استعلامات SQL",
            "تطوير لوحات معلومات باستخدام Excel",
            "متابعة مؤشرات الأداء والتصور البياني",
            "عرض رؤى الأعمال"
          ],
          "tech": [
            "SQL Server",
            "SQL",
            "Microsoft Excel",
            "Power Query"
          ],
          "github": "",
          "featured": true
        },
        {
          "category": "تحليل البيانات · تحليلات كرة القدم",
          "title": "نظام تحليلات كرة القدم المعزز بالاسترجاع RAG",
          "subtitle": "بيانات StatsBomb · كأس العالم 2022 · التحقق من الدوري الإنجليزي 2015/16 على فرع التطوير",
          "problem": "تحتوي بيانات أحداث كرة القدم على تفاصيل دقيقة عن المباريات والفرق واللاعبين، لكن الإجابة الموثوقة عن أسئلة الأداء تحتاج إلى حسابات إحصائية منظمة واسترجاع للسياق المناسب.",
          "built": "طورت نظامًا لتحليلات كرة القدم يعتمد على بيانات StatsBomb ونموذج RAG. تستخرج الطبقة المنظمة وتحسب مؤشرات مثل xG والأهداف والتمريرات والتمريرات تحت الضغط وتمريرات الثلث الأخير والانطلاقات بالكرة والضغط والأفعال الدفاعية وإحصاءات حراس المرمى. وتجمع طبقة الاسترجاع الهجين بين BM25 والتمثيلات المتجهة باستخدام Reciprocal Rank Fusion، مع توجيه الأسئلة الرقمية إلى الحسابات المنظمة والأسئلة الوصفية إلى استرجاع الأدلة. وقد تم التحقق من قابلية تشغيل المسار على موسم الدوري الإنجليزي 2015/16 في فرع competition-portability بجانب خط الأساس لكأس العالم 2022.",
          "capabilities": [
            "استخراج مؤشرات أداء منظمة للمباريات والفرق واللاعبين",
            "إحصاءات xG والتمريرات والضغط والانطلاقات والأفعال الدفاعية والحراس",
            "استرجاع هجين يجمع BM25 والتمثيلات المتجهة وRRF",
            "توجيه الأسئلة المنظمة والدلالية مع إجابات مدعومة بالأدلة",
            "تقييم استرجاع كأس العالم 2022 على 24 حالة: Hit@5 بنسبة 91.7% وnDCG@5 بنسبة 75.4%",
            "دعم الاستعلامات العربية والتحقق من قابلية التشغيل على الدوري الإنجليزي في فرع التطوير"
          ],
          "tech": [
            "Python",
            "StatsBomb Open Data",
            "BM25",
            "Sentence Transformers",
            "ChromaDB",
            "Streamlit",
            "OpenRouter"
          ],
          "github": "https://github.com/baherend/Football-Analytics-RAG-FULL/tree/competition-portability",
          "featured": true
        },
        {
          "category": "ذكاء اصطناعي تطبيقي · تحليل الإشارات الصوتية",
          "title": "Audio Doctor: نموذج أولي لمراجعة المكالمات",
          "subtitle": "مكالمات خدمة عملاء عربية · أدلة صوتية وزمنية فقط",
          "problem": "يحتاج قادة الفرق إلى طريقة منظمة لمراجعة نشاط المكالمة وفترات الانتظار والصمت وتداخل الكلام بدل الاعتماد على الاستماع اليدوي وحده.",
          "built": "طورت نموذجًا أوليًا باستخدام Streamlit لتحليل ملفات WAV ثنائية القناة المصرح باستخدامها، وفق convention ثابت: القناة اليسرى للموظف واليمنى للعميل، مع نوافذ مدتها ثانيتان وخطوة زمنية ثانية واحدة. يجمع المسار بين قياس النشاط باستخدام RMS ومصنف Wav2Vec2 لمستويات النشاط الصوتي، ثم ينتج ملخصات لكل قناة وخطًا زمنيًا للنشاط ومؤشرات انتظار تقديرية وتنبيهات للصمت والتداخل ومراجعة نهائية للمكالمة قابلة للتصدير بصيغتي JSON وPDF. لا يقوم المشروع بتفريغ الكلام إلى نص أو استنتاج المشاعر أو تمييز المتحدثين.",
          "capabilities": [
            "التحقق من ملف الاستريو وجودة القنوات",
            "تحديد النشاط باستخدام RMS وملخصات زمنية",
            "تصنيف النشاط الصوتي إلى ثلاث فئات باستخدام Wav2Vec2",
            "مؤشرات أولية للانتظار والصمت وتداخل الكلام",
            "مراجعة نهائية للمكالمة مع تصدير JSON وPDF"
          ],
          "tech": [
            "Python",
            "Streamlit",
            "PyTorch",
            "Wav2Vec2",
            "NumPy",
            "ReportLab",
            "pytest"
          ],
          "github": "https://github.com/baherend/audio-review",
          "featured": false
        },
        {
          "category": "ذكاء اصطناعي تطبيقي · متعدد الوسائط · مشروع جماعي",
          "title": "InterviewIQ: منصة ذكاء اصطناعي لتحليل المقابلات",
          "subtitle": "مشروع التخرج · فريق من 5 أفراد · مساهمتي: نموذج تحليل الانفعال الصوتي العربي",
          "problem": "يستفيد التدريب على المقابلات من تقييم يراعي محتوى إجابة المرشح وطريقة إلقائها، مع الاعتماد على أدلة قابلة للتتبع بدلًا من درجات غير مدعومة.",
          "built": "شاركت ضمن فريق من خمسة أفراد في تطوير منصة متعددة الوسائط لتحليل المقابلات. كانت مساهمتي الفردية تدريب مصنف عربي لتحليل الانفعال الصوتي باستخدام Wav2Vec2-XLSR-53 مع BiLSTM على مجموعة بيانات BAVED، لتصنيف شدة الانفعال الصوتي إلى منخفض ومحايد ومرتفع، مع تحسين Precision للفئة المحايدة من 0.79 إلى 0.86. وتشمل المنصة الأوسع تحليل الصوت والتعرف على الكلام ومعالجة اللغة والرؤية الحاسوبية وبيئة اختبار لدمج الوسائط؛ أما الدمج الإنتاجي الكامل مع حفظ النتائج فما زال قيد التطوير.",
          "capabilities": [
            "تدريب نموذج تحليل الانفعال الصوتي العربي (مساهمتي الفردية)",
            "تحسين Precision للفئة المحايدة من 0.79 إلى 0.86",
            "تحليل الصوت والتعرف على الكلام",
            "تقييم الإجابات باستخدام NLP والأدلة المرجعية",
            "تحليل الرؤية الحاسوبية وبيئة اختبار الدمج متعدد الوسائط"
          ],
          "tech": [
            "Python",
            "PyTorch",
            "Wav2Vec2-XLSR-53",
            "BiLSTM",
            "BAVED",
            "Transformers",
            "Librosa",
            "FastAPI",
            "React",
            "PostgreSQL"
          ],
          "github": "https://github.com/baherend/InterviewIQ",
          "featured": false
        },
        {
          "category": "تعلم عميق · رؤية حاسوبية · مشروع جماعي",
          "title": "نظام كشف العنف من كاميرات المدن الذكية",
          "subtitle": "الفريق الرابع · ResNet18 + LSTM · تحليل زمني لفيديوهات المراقبة",
          "problem": "تستغرق مراجعة تسجيلات كاميرات المراقبة الطويلة يدويًا وقتًا كبيرًا؛ وتحتاج فرق الأمن إلى أدوات تحدد المقاطع الزمنية التي تستحق المراجعة البشرية.",
          "built": "مشروع جماعي نفذه الفريق الرابع. يصنف النظام نوافذ الفيديو إلى طبيعي وعنف وعنف مسلح باستخدام خصائص إطارات مستخرجة من ResNet18 مدرب مسبقًا ومجمّد، تليها شبكة LSTM من طبقتين. حقق دقة 99.8% على 477 مقطع اختبار محدد مسبقًا بطول ثانية واحدة؛ بينما بلغت الدقة 67.1% على مجموعة اختبار منفصلة من 82 مقطعًا كاملًا، مع F1 يساوي صفرًا لفئة العنف، ما يوضح وجود محدودية في التعميم. وتضيف لوحة التحليل التنبؤ عبر نوافذ زمنية متداخلة وتنعيم الاحتمالات ودمج الأحداث ومخططات Plotly ومربعات YOLO11n للأشخاص بغرض إظهار سياق المشهد وتقارير مراجعة عربية. النظام أداة مساعدة للمراجعة البشرية وليس لتحديد المعتدي.",
          "capabilities": [
            "تصنيف الفيديو إلى طبيعي وعنف وعنف مسلح",
            "دقة 99.8% على المقاطع المحددة بطول ثانية و67.1% على المقاطع الكاملة",
            "تحليل النوافذ الزمنية وتنعيم النتائج وإنشاء خط زمني للحوادث",
            "مخططات احتمالات بـ Plotly وتقارير مراجعة عربية",
            "مربعات YOLO11n لإظهار الأشخاص في المشهد فقط"
          ],
          "tech": [
            "Python",
            "PyTorch",
            "ResNet18",
            "LSTM",
            "OpenCV",
            "YOLO11n",
            "Plotly",
            "Gradio",
            "Streamlit"
          ],
          "github": "https://github.com/baherend/Smart-City-CCTV-Violence-Detection",
          "featured": false
        }
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
      kicker: "دراسات في تحليل البيانات وذكاء الأعمال والذكاء الاصطناعي التطبيقي",
      labels: { problem: "المشكلة", built: "نظرة عامة على المشروع", capabilities: "أهم القدرات", tech: "التقنيات", repo: "عرض على GitHub", noRepo: "لا يوجد مستودع عام" },
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
      kicker: "متاح لفرص محلل بيانات مبتدئ وتحليل البيانات وذكاء الأعمال",
      blurb: "أسرع طريقة للتواصل هي البريد الإلكتروني أو لينكدإن. أرد عادةً خلال يوم.",
      emailCta: "أرسل بريداً",
      whatsappCta: "واتساب",
    },
    footer: { rights: "جميع الحقوق محفوظة.", quickLinks: "روابط سريعة", contactInfo: "معلومات التواصل", tagline: "محلل بيانات مبتدئ • تحليل البيانات • ذكاء الأعمال" },
  },
} as const;
