export type Lang = "en" | "ar";

export const translations = {
  en: {
    nav: { about: "About", skills: "Skills", experience: "Experience", projects: "Projects", education: "Education", contact: "Contact" },
    hero: {
      greeting: "Hello, I'm",
      name: "Baher Mikhael Habib Azer",
      title: "Data Analyst | Business Intelligence | Applied AI",
      summary: "Junior Data Analyst specializing in Data Analysis, Business Intelligence, and Applied AI. Skilled in transforming raw data into actionable insights and interactive dashboards.",
      cta_linkedin: "LinkedIn",
      cta_whatsapp: "WhatsApp",
      cta_resume: "Download Resume",
      cta_call: "Call Me",
    },
    about: {
      heading: "About Me",
      p1: "I bring a unique blend of Psychology and Data Analysis to the table. With a Bachelor's degree in Psychology from Alexandria University, I understand human behavior at its core — and I use that understanding to uncover patterns in data that others might miss.",
      p2: "My journey from behavioral science to data analytics has equipped me with a keen eye for identifying trends, understanding user motivations, and translating complex datasets into compelling narratives that drive business decisions.",
      p3: "I specialize in Business Intelligence, building interactive dashboards, and applying AI techniques to solve real-world problems. Every dataset tells a story — I'm here to find it.",
    },
    skills: { heading: "Technical Skills" },
    experience: {
      heading: "Experience",
      items: [
        { title: "Data Analysis Trainee", company: "Digilians – Digital Pioneers Initiative", period: "Dec 2025 – Present", bullets: ["Built relational databases using SQL Server and performed complex queries (Joins, Aggregations).", "Designed interactive Power BI dashboards using DAX and data modeling.", "Applied ETL processes using Python (Pandas, NumPy) and conducted EDA."] },
        { title: "Psychologist & Behavioral Specialist", company: "Bashayer Al Khair Foundation", period: "Feb 2025", bullets: ["Analyzed behavioral datasets improving treatment efficiency by 30%.", "Developed data-driven performance tracking metrics."] },
        { title: "Technical Support Specialist", company: "WE Communications", period: "2023 – 2024", bullets: ["Resolved 40+ issues daily with 95% customer satisfaction.", "Identified recurring trends through data analysis and reporting."] },
        { title: "Pharmacy Assistant", company: "Multiple Pharmacies", period: "2017 – 2022", bullets: ["Managed inventory datasets for 200+ products reducing discrepancies by 15%.", "Analyzed sales records to optimize stock levels."] },
      ],
    },
    projects: {
      heading: "Projects",
      items: [
        { title: "Sales Performance Analysis Dashboard", tools: "SQL Server, Python, Power BI, Excel", description: "Built an interactive Power BI dashboard analyzing retail sales data, revenue trends, and KPIs for data-driven decision making.", github: "https://github.com/baherend" },
        { title: "Customer Churn Prediction Model", tools: "Python, Pandas, Scikit-learn, Matplotlib", description: "Built a machine learning classification model for predicting customer churn with feature engineering and model evaluation.", github: "https://github.com/baherend" },
      ],
    },
    education: { heading: "Education", degree: "Bachelor of Arts in Psychology", school: "Alexandria University", year: "2019" },
    workflow: {
      heading: "My Data Analysis Workflow",
      steps: ["Data Collection", "Data Cleaning", "Exploratory Analysis", "Visualization", "Insights & Reporting"],
    },
    certifications: {
      heading: "Certifications & Training",
      items: ["Digital Pioneers Initiative – Data Analysis Track", "Business Intelligence & Dashboard Development", "Applied AI & Machine Learning Fundamentals"],
    },
    testimonials: { heading: "Testimonials", placeholder: "Testimonials coming soon..." },
    contact: {
      heading: "Get In Touch",
      name: "Your Name",
      email: "Your Email",
      message: "Your Message",
      send: "Send Message",
    },
    footer: { rights: "All rights reserved.", quickLinks: "Quick Links", contactInfo: "Contact Info" },
    tools: { heading: "Data Tools I Use" },
  },
  ar: {
    nav: { about: "عني", skills: "المهارات", experience: "الخبرة", projects: "المشاريع", education: "التعليم", contact: "تواصل" },
    hero: {
      greeting: "مرحباً، أنا",
      name: "باهر ميخائيل حبيب عازر",
      title: "محلل بيانات | ذكاء الأعمال | الذكاء الاصطناعي التطبيقي",
      summary: "محلل بيانات متخصص في تحليل البيانات وذكاء الأعمال والذكاء الاصطناعي التطبيقي. متمكن من تحويل البيانات الخام إلى رؤى قابلة للتنفيذ ولوحات معلومات تفاعلية.",
      cta_linkedin: "لينكدإن",
      cta_whatsapp: "واتساب",
      cta_resume: "تحميل السيرة الذاتية",
      cta_call: "اتصل بي",
    },
    about: {
      heading: "عني",
      p1: "أجمع بين علم النفس وتحليل البيانات بشكل فريد. مع درجة البكالوريوس في علم النفس من جامعة الإسكندرية، أفهم السلوك البشري في جوهره — وأستخدم هذا الفهم لاكتشاف أنماط في البيانات قد يغفلها الآخرون.",
      p2: "رحلتي من العلوم السلوكية إلى تحليل البيانات زودتني بعين ثاقبة لتحديد الاتجاهات وفهم دوافع المستخدمين وترجمة مجموعات البيانات المعقدة إلى سرديات مقنعة تدفع قرارات الأعمال.",
      p3: "أتخصص في ذكاء الأعمال وبناء لوحات المعلومات التفاعلية وتطبيق تقنيات الذكاء الاصطناعي لحل مشاكل العالم الحقيقي.",
    },
    skills: { heading: "المهارات التقنية" },
    experience: {
      heading: "الخبرة",
      items: [
        { title: "متدرب تحليل بيانات", company: "ديجيليانز – مبادرة الرواد الرقميين", period: "ديسمبر 2025 – الحالي", bullets: ["بناء قواعد بيانات علائقية باستخدام SQL Server وتنفيذ استعلامات معقدة.", "تصميم لوحات معلومات تفاعلية باستخدام Power BI و DAX.", "تطبيق عمليات ETL باستخدام Python وإجراء تحليل استكشافي."] },
        { title: "أخصائي نفسي وسلوكي", company: "مؤسسة بشائر الخير", period: "فبراير 2025", bullets: ["تحليل مجموعات البيانات السلوكية لتحسين كفاءة العلاج بنسبة 30%.", "تطوير مقاييس تتبع الأداء المبنية على البيانات."] },
        { title: "أخصائي دعم فني", company: "WE Communications", period: "2023 – 2024", bullets: ["حل أكثر من 40 مشكلة يومياً بنسبة رضا عملاء 95%.", "تحديد الاتجاهات المتكررة من خلال تحليل البيانات والتقارير."] },
        { title: "مساعد صيدلي", company: "صيدليات متعددة", period: "2017 – 2022", bullets: ["إدارة مجموعات بيانات المخزون لأكثر من 200 منتج.", "تحليل سجلات المبيعات لتحسين مستويات المخزون."] },
      ],
    },
    projects: {
      heading: "المشاريع",
      items: [
        { title: "لوحة تحليل أداء المبيعات", tools: "SQL Server, Python, Power BI, Excel", description: "بناء لوحة معلومات تفاعلية لتحليل بيانات مبيعات التجزئة واتجاهات الإيرادات ومؤشرات الأداء.", github: "https://github.com/baherend" },
        { title: "نموذج توقع تسرب العملاء", tools: "Python, Pandas, Scikit-learn, Matplotlib", description: "بناء نموذج تصنيف للتعلم الآلي للتنبؤ بتسرب العملاء مع هندسة الميزات وتقييم النموذج.", github: "https://github.com/baherend" },
      ],
    },
    education: { heading: "التعليم", degree: "بكالوريوس آداب – علم نفس", school: "جامعة الإسكندرية", year: "2019" },
    workflow: {
      heading: "منهجية تحليل البيانات",
      steps: ["جمع البيانات", "تنظيف البيانات", "التحليل الاستكشافي", "التصور البياني", "الرؤى والتقارير"],
    },
    certifications: {
      heading: "الشهادات والتدريب",
      items: ["مبادرة الرواد الرقميين – مسار تحليل البيانات", "ذكاء الأعمال وتطوير لوحات المعلومات", "أساسيات الذكاء الاصطناعي التطبيقي والتعلم الآلي"],
    },
    testimonials: { heading: "آراء العملاء", placeholder: "قريباً..." },
    contact: {
      heading: "تواصل معي",
      name: "اسمك",
      email: "بريدك الإلكتروني",
      message: "رسالتك",
      send: "إرسال",
    },
    footer: { rights: "جميع الحقوق محفوظة.", quickLinks: "روابط سريعة", contactInfo: "معلومات التواصل" },
    tools: { heading: "أدوات البيانات التي أستخدمها" },
  },
} as const;
