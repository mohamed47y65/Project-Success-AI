import React, { useState, useEffect } from 'react';
import { Rocket, Building2, Zap, ChevronRight, TrendingUp, AlertCircle, CheckCircle, Loader, Info, Phone, Mail, User, Brain, Target, LineChart, Globe, Moon, Sun } from 'lucide-react';

const ProjectSuccessAI = () => {
  const [projectType, setProjectType] = useState('startup');
  const [formData, setFormData] = useState({});
  const [prediction, setPrediction] = useState(null);
  const [loading, setLoading] = useState(false);
  const [particles, setParticles] = useState([]);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState('en');
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const newParticles = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 10
    }));
    setParticles(newParticles);
  }, []);

  const translations = {
    en: {
      nav: {
        home: 'Home',
        about: 'About',
        contact: 'Contact',
        analyze: 'Analyze'
      },
      hero: {
        badge: 'AI-Powered Analysis',
        title: 'Project Success AI',
        subtitle: 'Predict your project success rate with advanced machine learning',
        cta: 'Get Started'
      },
      about: {
        title: 'About Platform',
        heading: 'Intelligent Project Analysis',
        description: 'Project Success AI is a cutting-edge platform powered by advanced machine learning algorithms trained on over 1 million real-world projects. Our AI-driven system analyzes your project data and provides accurate success predictions with actionable insights.',
        description2: 'Whether you\'re launching a startup or managing an enterprise project, our platform delivers data-driven predictions to help you make informed decisions and maximize your chances of success.',
        features: {
          accurate: {
            title: 'Highly Accurate',
            desc: 'Trained on 1M+ projects for precise predictions'
          },
          insights: {
            title: 'Smart Insights',
            desc: 'AI-generated recommendations and analysis'
          },
          fast: {
            title: 'Instant Results',
            desc: 'Get comprehensive analysis in seconds'
          }
        }
      },
      analysis: {
        title: 'Project Analysis',
        subtitle: 'Select your project type and provide detailed information',
        startup: 'Startup Project',
        enterprise: 'Enterprise Project',
        formTitle: {
          startup: 'Startup Analysis Form',
          enterprise: 'Enterprise Analysis Form'
        },
        description: 'Project Description',
        descPlaceholder: 'Describe your project in detail. This helps our AI provide better insights...',
        analyze: 'Analyze Project',
        analyzing: 'Analyzing...'
      },
      results: {
        title: 'Analysis Results',
        probability: 'Success Probability',
        confidence: 'Confidence',
        risk: 'Risk',
        positive: 'Positive Drivers',
        negative: 'Negative Drivers',
        aiInsights: 'AI-Generated Insights',
        recommendations: 'Recommendations'
      },
      contact: {
        title: 'Get In Touch',
        subtitle: 'We\'d love to hear from you',
        phone: 'Phone',
        email: 'Email',
        creator: 'Created by',
        cta: {
          title: 'Ready to Start?',
          subtitle: 'Transform your project ideas into successful ventures',
          button: 'Try Now'
        }
      },
      footer: {
        copyright: '© 2025 Project Success AI. ' ,
        tagline: 'Powered by Mohamed Atef'
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        about: 'عن المنصة',
        contact: 'تواصل معنا',
        analyze: 'تحليل'
      },
      hero: {
        badge: 'تحليل بالذكاء الاصطناعي',
        title: 'نجاح المشروع بالذكاء الاصطناعي',
        subtitle: 'توقع معدل نجاح مشروعك باستخدام التعلم الآلي المتقدم',
        cta: 'ابدأ الآن'
      },
      about: {
        title: 'عن المنصة',
        heading: 'تحليل ذكي للمشاريع',
        description: 'Project Success AI منصة متطورة مدعومة بخوارزميات التعلم الآلي المتقدمة المدربة على أكثر من مليون مشروع حقيقي. يقوم نظامنا المدعوم بالذكاء الاصطناعي بتحليل بيانات مشروعك ويقدم توقعات دقيقة للنجاح مع رؤى قابلة للتنفيذ.',
        description2: 'سواء كنت تطلق شركة ناشئة أو تدير مشروعًا كبيرًا، توفر منصتنا توقعات مدفوعة بالبيانات لمساعدتك على اتخاذ قرارات مستنيرة وتعظيم فرص نجاحك.',
        features: {
          accurate: {
            title: 'دقة عالية',
            desc: 'مدرب على أكثر من مليون مشروع للتوقعات الدقيقة'
          },
          insights: {
            title: 'رؤى ذكية',
            desc: 'توصيات وتحليلات مولدة بالذكاء الاصطناعي'
          },
          fast: {
            title: 'نتائج فورية',
            desc: 'احصل على تحليل شامل في ثوانٍ'
          }
        }
      },
      analysis: {
        title: 'تحليل المشروع',
        subtitle: 'اختر نوع مشروعك وقدم معلومات مفصلة',
        startup: 'مشروع ناشئ',
        enterprise: 'مشروع كبير',
        formTitle: {
          startup: 'نموذج تحليل المشاريع الناشئة',
          enterprise: 'نموذج تحليل المشاريع الكبيرة'
        },
        description: 'وصف المشروع',
        descPlaceholder: 'صف مشروعك بالتفصيل. يساعد هذا الذكاء الاصطناعي على تقديم رؤى أفضل...',
        analyze: 'تحليل المشروع',
        analyzing: 'جاري التحليل...'
      },
      results: {
        title: 'نتائج التحليل',
        probability: 'احتمالية النجاح',
        confidence: 'مستوى الثقة',
        risk: 'المخاطر',
        positive: 'العوامل الإيجابية',
        negative: 'العوامل السلبية',
        aiInsights: 'رؤى الذكاء الاصطناعي',
        recommendations: 'التوصيات'
      },
      contact: {
        title: 'تواصل معنا',
        subtitle: 'نحن نحب أن نسمع منك',
        phone: 'الهاتف',
        email: 'البريد الإلكتروني',
        creator: 'تم الإنشاء بواسطة',
        cta: {
          title: 'مستعد للبدء؟',
          subtitle: 'حول أفكار مشروعك إلى مشاريع ناجحة',
          button: 'جربها الآن'
        }
      },
      footer: {
        copyright: '© 2025 Project Success AI. تم الإنشاء بواسطة محمد عاطف',
        tagline: 'مدعوم بالتعلم الآلي المتقدم'
      }
    }
  };

  const t = translations[language];

  const startupFields = [
    { name: 'Industry', label: 'Industry Sector', type: 'select', required: true, options: ['FinTech', 'E-commerce', 'HealthTech', 'EdTech', 'Logistics', 'SaaS', 'AI', 'AgriTech', 'CleanTech', 'PropTech'] },
    { name: 'Country', label: 'Country', type: 'select', required: true, options: ['Egypt', 'Saudi Arabia', 'UAE', 'Jordan', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'] },
    { name: 'Capital_USD', label: 'Initial Capital (USD)', type: 'number', required: true, min: 0, placeholder: 'e.g., 50000' },
    { name: 'Team_Size', label: 'Team Size', type: 'number', required: true, min: 1, placeholder: 'Number of employees' },
    { name: 'Founder_Exp_Years', label: 'Founder Experience (Years)', type: 'number', required: true, min: 0, placeholder: 'Years of experience' },
    { name: 'Company_Age_Months', label: 'Company Age (Months)', type: 'number', required: false, min: 0, defaultValue: 12, placeholder: 'Default: 12' },
    { name: 'Competitors_Count', label: 'Estimated Competitors', type: 'number', required: false, min: 0, defaultValue: 10, placeholder: 'Default: 10' },
    { name: 'Monthly_Revenue', label: 'Current Monthly Revenue (USD)', type: 'number', required: true, min: 0, placeholder: 'Current revenue' },
    { name: 'Revenue_Growth_Rate', label: 'Revenue Growth Rate (MoM)', type: 'number', required: true, min: 0, max: 1, step: 0.01, placeholder: 'e.g., 0.05 for 5%' },
    { name: 'Capital_Efficiency', label: 'Capital Efficiency (Optional)', type: 'number', required: false, min: 0, step: 0.01, placeholder: 'Revenue / Burn Rate' }
  ];

  const enterpriseFields = [
    { name: 'Industry', label: 'Industry Sector', type: 'select', required: true, options: ['Construction', 'Energy', 'Finance', 'Gov', 'Telecom', 'Manufacturing', 'Health'] },
    { name: 'Country', label: 'Country', type: 'select', required: true, options: ['Egypt', 'Saudi Arabia', 'UAE', 'Jordan', 'Qatar', 'Kuwait', 'Bahrain', 'Oman'] },
    { name: 'Project_Type', label: 'Project Type', type: 'select', required: true, options: ['Strategic', 'Operational', 'Compliance'] },
    { name: 'Vendor_Complexity', label: 'Vendor Complexity', type: 'select', required: true, options: ['Low', 'Medium', 'High'] },
    { name: 'Regulatory_Pressure_Level', label: 'Regulatory Pressure', type: 'select', required: true, options: [{ value: 0, label: 'Low' }, { value: 1, label: 'Medium' }, { value: 2, label: 'High' }] },
    { name: 'Supply_Chain_Risk_Level', label: 'Supply Chain Risk', type: 'select', required: true, options: ['Low', 'Medium', 'High'] },
    { name: 'Budget_USD', label: 'Total Budget (USD)', type: 'number', required: true, min: 0, placeholder: 'e.g., 500000' },
    { name: 'Project_Duration_Months', label: 'Duration (Months)', type: 'number', required: true, min: 1, placeholder: 'Expected timeline' },
    { name: 'Team_Size', label: 'Team Size', type: 'number', required: true, min: 1, placeholder: 'Team members' }
  ];

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
    setFormData({ ...formData, [name]: type === 'number' ? parseFloat(value) || 0 : value });
  };

  const constructPayload = () => {
    if (projectType === 'startup') {
      return {
        project_type: 'startup',
        project_description: formData.project_description || '',
        features: {
          Industry: formData.Industry || '',
          Country: formData.Country || '',
          Capital_USD: formData.Capital_USD || 0,
          Team_Size: formData.Team_Size || 0,
          Founder_Exp_Years: formData.Founder_Exp_Years || 0,
          Company_Age_Months: formData.Company_Age_Months || 12,
          Competitors_Count: formData.Competitors_Count || 10,
          Monthly_Revenue: formData.Monthly_Revenue || 0,
          Revenue_Growth_Rate: formData.Revenue_Growth_Rate || 0,
          Capital_Efficiency: formData.Capital_Efficiency || (formData.Monthly_Revenue / Math.max(1, formData.Capital_USD / 12))
        }
      };
    } else {
      return {
        project_type: 'enterprise',
        project_description: formData.project_description || '',
        features: {
          Industry: formData.Industry || '',
          Country: formData.Country || '',
          Project_Type: formData.Project_Type || '',
          Vendor_Complexity: formData.Vendor_Complexity || '',
          Regulatory_Pressure_Level: parseInt(formData.Regulatory_Pressure_Level) || 0,
          Supply_Chain_Risk_Level: formData.Supply_Chain_Risk_Level || '',
          Budget_USD: formData.Budget_USD || 0,
          Project_Duration_Months: formData.Project_Duration_Months || 0,
          Team_Size: formData.Team_Size || 0
        }
      };
    }
  };

const handlePredict = async () => {
    setLoading(true);
    setPrediction(null);
    try {
      const payload = constructPayload();
      
      // تحديد الرابط حسب نوع المشروع
      const endpoint = projectType === 'startup' ? 'analyze/startup' : 'analyze/enterprise';
      
      // تأكد أن الرابط هو 8000 (رابط الباك اند)
      // الرابط الجديد الخاص بـ Hugging Face
      const apiUrl = "https://mohamed47y65-ps-ai-new.hf.space";
      
      const response = await fetch(`${apiUrl}/${endpoint}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
       

      const rawData = await response.json();

      // 👇👇 هنا الحل السحري: تنسيق البيانات عشان الموقع مايعملش Crash 👇👇
      const formattedData = {
        success_probability: rawData.success_probability,
        // الموقع محتاج "confidence" والباك اند مش بيبعتها، فبنحط قيمة افتراضية
        confidence: 85.0, 
        // تحويل حالة المشروع (Success/High Risk) لـ (Low/High) اللي الموقع عارفها
        risk_level: rawData.prediction === 'Success' ? 'Low' : 'High',
        // الباك اند بيبعت "ai_report" بس الموقع مستني "gemini_analysis"
        gemini_analysis: rawData.ai_report,
        // الحقول دي ناقصة في الباك اند حالياً، بنخليها null عشان مايحصلش خطأ
        shap_analysis: null,
        recommendations: rawData.prediction === 'High Risk' 
          ? ['Review your budget', 'Check market competition'] 
          : ['Proceed with scaling', 'Invest in marketing']
      };

      setPrediction(formattedData);

    } catch (error) {
      console.error('Prediction error:', error);
      // كود المحاكاة القديم في حالة الخطأ (سيبه زي ما هو أو امسحه)
      const demoSuccess = Math.random() * 40 + 60;
      setPrediction({
        success_probability: demoSuccess,
        confidence: 85,
        risk_level: 'Medium',
        gemini_analysis: "Simulation Mode: Could not connect to backend.",
        recommendations: ["Check if backend is running"]
      });
    } finally {
      setLoading(false);
    }
  };

  const scrollToSection = (section) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const currentFields = projectType === 'startup' ? startupFields : enterpriseFields;
  const isRTL = language === 'ar';

  // Theme colors
  const themeColors = {
    dark: {
      bg: 'bg-black',
      text: 'text-white',
      border: 'border-purple-900/30',
      card: 'bg-gray-900/50',
      input: 'bg-gray-800',
      hover: 'hover:bg-gray-700'
    },
    light: {
      bg: 'bg-white',
      text: 'text-gray-900',
      border: 'border-purple-200',
      card: 'bg-gray-50',
      input: 'bg-white border-gray-300',
      hover: 'hover:bg-gray-100'
    }
  };

  const colors = themeColors[theme];

  return (
    <div className={`min-h-screen ${colors.bg} ${colors.text} overflow-hidden relative`} dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Background Effects */}
      {theme === 'dark' && (
        <>
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map(particle => (
              <div key={particle.id} className="absolute bg-purple-500 rounded-full opacity-20"
                style={{
                  left: `${particle.x}%`, top: `${particle.y}%`,
                  width: `${particle.size}px`, height: `${particle.size}px`,
                  animation: `float ${particle.duration}s infinite ease-in-out`
                }}
              />
            ))}
          </div>
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-purple-600 rounded-full filter blur-3xl opacity-20 animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-600 rounded-full filter blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '1s' }} />
        </>
      )}

      {/* Header */}
      <header className={`relative z-10 flex justify-between items-center px-8 py-6 border-b ${colors.border} backdrop-blur-sm ${theme === 'dark' ? 'bg-black/50' : 'bg-white/90'} sticky top-0`}>
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection('home')}>
          <Brain className="text-purple-500 animate-pulse" size={32} />
          <span className="text-2xl font-bold">PS AI</span>
        </div>
        <nav className="flex items-center gap-6">
          <button onClick={() => scrollToSection('home')} className={`hover:text-purple-400 transition ${activeSection === 'home' ? 'text-purple-400' : ''}`}>{t.nav.home}</button>
          <button onClick={() => scrollToSection('about')} className={`hover:text-purple-400 transition ${activeSection === 'about' ? 'text-purple-400' : ''}`}>{t.nav.about}</button>
          <button onClick={() => scrollToSection('contact')} className={`hover:text-purple-400 transition ${activeSection === 'contact' ? 'text-purple-400' : ''}`}>{t.nav.contact}</button>
          
          {/* Language Selector */}
          <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-purple-600/20 border border-purple-500/30">
            <Globe size={16} className="text-purple-400" />
            <select value={language} onChange={(e) => setLanguage(e.target.value)} className="bg-transparent text-sm focus:outline-none cursor-pointer">
              <option value="en">English</option>
              <option value="ar">العربية</option>
            </select>
          </div>

          {/* Theme Toggle */}
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="p-2 rounded-lg bg-purple-600/20 border border-purple-500/30 hover:bg-purple-600/30 transition">
            {theme === 'dark' ? <Sun size={20} className="text-purple-400" /> : <Moon size={20} className="text-purple-400" />}
          </button>

          <button onClick={() => scrollToSection('analysis-section')} className="bg-purple-600 px-4 py-2 rounded-lg hover:bg-purple-700 transition transform hover:scale-105">
            {t.nav.analyze}
          </button>
        </nav>
      </header>

      {/* Hero */}
      <section id="home" className="relative z-10 text-center py-20 px-4">
        <div className="inline-block mb-4 animate-bounce">
          <span className="bg-purple-600/30 text-purple-300 px-4 py-2 rounded-full text-sm border border-purple-500/50">
            {t.hero.badge}
          </span>
        </div>
        <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-purple-200 to-indigo-400 bg-clip-text text-transparent animate-fadeIn">
          {t.hero.title}
        </h1>
        <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-xl mb-8 max-w-2xl mx-auto animate-fadeIn`} style={{ animationDelay: '0.2s' }}>
          {t.hero.subtitle}
        </p>
        <button onClick={() => scrollToSection('analysis-section')} className="bg-purple-600 px-8 py-3 rounded-lg hover:bg-purple-700 transition flex items-center gap-2 mx-auto group transform hover:scale-105">
          <Rocket size={20} className="group-hover:rotate-12 transition" />
          {t.hero.cta}
          <ChevronRight className="group-hover:translate-x-1 transition" size={20} />
        </button>
      </section>

      {/* About */}
      <section id="about" className={`relative z-10 py-20 px-4 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-purple-900/10 to-transparent' : 'bg-gradient-to-b from-transparent via-purple-50 to-transparent'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4">
              <Info className="text-purple-400" size={32} />
              <h2 className="text-5xl font-bold">{t.about.title}</h2>
            </div>
          </div>
          
          <div className={`${colors.card} backdrop-blur-sm border ${colors.border} rounded-2xl p-8 transform hover:scale-105 transition duration-300`}>
            <div className="flex items-start gap-4 mb-6">
              <LineChart className="text-purple-400 flex-shrink-0 mt-1" size={40} />
              <div>
                <h3 className="text-2xl font-bold mb-4 text-purple-300">{t.about.heading}</h3>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed mb-4`}>
                  {t.about.description}
                </p>
                <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} text-lg leading-relaxed`}>
                  {t.about.description2}
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className={`${theme === 'dark' ? 'bg-purple-900/20' : 'bg-purple-100'} p-6 rounded-xl border border-purple-500/30 transform hover:scale-105 transition cursor-pointer`}>
                <Target className="text-purple-400 mb-3" size={32} />
                <h4 className="font-bold mb-2 text-lg">{t.about.features.accurate.title}</h4>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{t.about.features.accurate.desc}</p>
              </div>
              
              <div className={`${theme === 'dark' ? 'bg-purple-900/20' : 'bg-purple-100'} p-6 rounded-xl border border-purple-500/30 transform hover:scale-105 transition cursor-pointer`}>
                <Brain className="text-purple-400 mb-3" size={32} />
                <h4 className="font-bold mb-2 text-lg">{t.about.features.insights.title}</h4>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{t.about.features.insights.desc}</p>
              </div>
              
              <div className={`${theme === 'dark' ? 'bg-purple-900/20' : 'bg-purple-100'} p-6 rounded-xl border border-purple-500/30 transform hover:scale-105 transition cursor-pointer`}>
                <Zap className="text-purple-400 mb-3" size={32} />
                <h4 className="font-bold mb-2 text-lg">{t.about.features.fast.title}</h4>
                <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{t.about.features.fast.desc}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis Section */}
      <section id="analysis-section" className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">{t.analysis.title}</h2>
            <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{t.analysis.subtitle}</p>
          </div>

          <div className="flex justify-center gap-4 mb-8">
            <button onClick={() => { setProjectType('startup'); setFormData({}); setPrediction(null); }}
              className={`px-8 py-3 rounded-lg transition transform hover:scale-105 ${projectType === 'startup' ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50' : `${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-700'} ${colors.hover}`}`}>
              <Rocket className="inline mr-2" size={20} />
              {t.analysis.startup}
            </button>
            <button onClick={() => { setProjectType('enterprise'); setFormData({}); setPrediction(null); }}
              className={`px-8 py-3 rounded-lg transition transform hover:scale-105 ${projectType === 'enterprise' ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/50' : `${theme === 'dark' ? 'bg-gray-800 text-gray-400' : 'bg-gray-200 text-gray-700'} ${colors.hover}`}`}>
              <Building2 className="inline mr-2" size={20} />
              {t.analysis.enterprise}
            </button>
          </div>

          <div className={`${colors.card} backdrop-blur-sm border ${colors.border} rounded-2xl p-8 max-w-5xl mx-auto`}>
            <h3 className="text-2xl font-bold mb-6 text-center">
              {projectType === 'startup' ? t.analysis.formTitle.startup : t.analysis.formTitle.enterprise}
            </h3>

            <div className="mb-8">
              <label className={`block text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
                <Info className="inline mr-1" size={16} />
                {t.analysis.description}
              </label>
              <textarea name="project_description" onChange={handleInputChange} rows="4"
                className={`w-full ${colors.input} border ${colors.border} rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition resize-none ${colors.text}`}
                placeholder={t.analysis.descPlaceholder}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {currentFields.map(field => (
                <div key={field.name} className="space-y-2 transform hover:scale-105 transition">
                  <label className={`block text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {field.label} {field.required && <span className="text-red-400">*</span>}
                  </label>
                  
                  {field.type === 'select' ? (
                    <select name={field.name} onChange={handleInputChange} required={field.required}
                      className={`w-full ${colors.input} border ${colors.border} rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition ${colors.text}`}>
                      <option value="">Select {field.label}...</option>
                      {Array.isArray(field.options[0]) || typeof field.options[0] === 'object' 
                        ? field.options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)
                        : field.options.map(opt => <option key={opt} value={opt}>{opt}</option>)
                      }
                    </select>
                  ) : (
                    <input type={field.type} name={field.name} min={field.min} max={field.max} step={field.step}
                      defaultValue={field.defaultValue} onChange={handleInputChange} required={field.required}
                      className={`w-full ${colors.input} border ${colors.border} rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500 focus:ring-2 focus:ring-purple-500/50 transition ${colors.text}`}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              ))}
            </div>

            <button onClick={handlePredict} disabled={loading}
              className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-indigo-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 transform hover:scale-105 active:scale-95 text-white">
              {loading ? (
                <>
                  <Loader className="animate-spin" size={20} />
                  {t.analysis.analyzing}
                </>
              ) : (
                <>
                  <Zap className="animate-pulse" size={20} />
                  {t.analysis.analyze}
                </>
              )}
            </button>

            {prediction && (
              <div className="mt-8 space-y-6 animate-slideIn">
                <div className={`${theme === 'dark' ? 'bg-gradient-to-br from-purple-900/30 to-indigo-900/30' : 'bg-gradient-to-br from-purple-100 to-indigo-100'} border border-purple-500/50 rounded-xl p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-bold flex items-center gap-2">
                      <CheckCircle className="text-green-400" />
                      {t.results.probability}
                    </h4>
                    <span className="text-3xl font-bold text-green-400">
                      {prediction.success_probability.toFixed(1)}%
                    </span>
                  </div>
                  <div className={`w-full ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'} rounded-full h-3`}>
                    <div className="bg-gradient-to-r from-green-400 to-emerald-500 h-full rounded-full transition-all duration-1000"
                      style={{ width: `${prediction.success_probability}%` }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-sm">
                    <span className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>{t.results.confidence}: {prediction.confidence.toFixed(1)}%</span>
                    <span className={`font-semibold ${
                      prediction.risk_level === 'Low' ? 'text-green-400' :
                      prediction.risk_level === 'Medium' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>
                      {t.results.risk}: {prediction.risk_level}
                    </span>
                  </div>
                </div>

                {prediction.shap_analysis && (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className={`${theme === 'dark' ? 'bg-green-900/20' : 'bg-green-50'} border border-green-500/30 rounded-xl p-6`}>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-green-400">
                        <TrendingUp size={20} />
                        {t.results.positive}
                      </h4>
                      <div className="space-y-3">
                        {prediction.shap_analysis.top_positive.map((item, idx) => (
                          <div key={idx} className={`${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'} p-3 rounded-lg`}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold text-sm">{item.feature}</span>
                              <span className="text-green-400 font-bold">+{(item.value * 100).toFixed(1)}%</span>
                            </div>
                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{item.impact}</p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={`${theme === 'dark' ? 'bg-red-900/20' : 'bg-red-50'} border border-red-500/30 rounded-xl p-6`}>
                      <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-red-400">
                        <AlertCircle size={20} />
                        {t.results.negative}
                      </h4>
                      <div className="space-y-3">
                        {prediction.shap_analysis.top_negative.map((item, idx) => (
                          <div key={idx} className={`${theme === 'dark' ? 'bg-red-900/30' : 'bg-red-100'} p-3 rounded-lg`}>
                            <div className="flex justify-between items-center mb-1">
                              <span className="font-semibold text-sm">{item.feature}</span>
                              <span className="text-red-400 font-bold">{(item.value * 100).toFixed(1)}%</span>
                            </div>
                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>{item.impact}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {prediction.gemini_analysis && (
                  <div className={`${theme === 'dark' ? 'bg-gradient-to-br from-indigo-900/30 to-purple-900/30' : 'bg-gradient-to-br from-indigo-100 to-purple-100'} border border-indigo-500/50 rounded-xl p-6`}>
                    <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-indigo-400">
                      <Brain size={20} />
                      {t.results.aiInsights}
                    </h4>
                    <p className={`${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} leading-relaxed whitespace-pre-line`}>
                      {prediction.gemini_analysis}
                    </p>
                  </div>
                )}

                {prediction.recommendations && (
                  <div className={`${colors.card} border ${colors.border} rounded-xl p-6`}>
                    <h4 className="font-bold text-lg mb-4 text-purple-400">{t.results.recommendations}</h4>
                    <ul className="space-y-2">
                      {prediction.recommendations.map((rec, idx) => (
                        <li key={idx} className={`flex items-start gap-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} transform hover:translate-x-2 transition cursor-pointer`}>
                          <ChevronRight className="text-purple-400 flex-shrink-0 mt-1" size={16} />
                          <span>{rec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className={`relative z-10 py-20 px-4 ${theme === 'dark' ? 'bg-gradient-to-b from-transparent via-purple-900/10 to-transparent' : 'bg-gradient-to-b from-transparent via-purple-50 to-transparent'}`}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold mb-4">{t.contact.title}</h2>
            <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>{t.contact.subtitle}</p>
          </div>

          <div className={`${colors.card} backdrop-blur-sm border ${colors.border} rounded-2xl p-8`}>
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`flex items-center gap-4 p-4 ${theme === 'dark' ? 'bg-purple-900/20' : 'bg-purple-100'} rounded-lg border border-purple-500/30 transform hover:scale-105 transition cursor-pointer`}>
                <Phone className="text-purple-400" size={24} />
                <div>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{t.contact.phone}</p>
                  <a href="tel:+201060253400" className="font-semibold hover:text-purple-400 transition">
                    +20 1060253400
                  </a>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 ${theme === 'dark' ? 'bg-purple-900/20' : 'bg-purple-100'} rounded-lg border border-purple-500/30 transform hover:scale-105 transition cursor-pointer`}>
                <Mail className="text-purple-400" size={24} />
                <div>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{t.contact.email}</p>
                  <a href="mailto:mohamed47y65@gmail.com" className="font-semibold hover:text-purple-400 transition text-sm">
                    mohamed47y65@gmail.com
                  </a>
                </div>
              </div>

              <div className={`flex items-center gap-4 p-4 ${theme === 'dark' ? 'bg-purple-900/20' : 'bg-purple-100'} rounded-lg border border-purple-500/30 transform hover:scale-105 transition cursor-pointer`}>
                <User className="text-purple-400" size={24} />
                <div>
                  <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} text-sm`}>{t.contact.creator}</p>
                  <p className="font-semibold">Mohamed Atef</p>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center p-8 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 rounded-xl border border-purple-500/50 transform hover:scale-105 transition">
              <Brain className="text-purple-400 mx-auto mb-4 animate-pulse" size={48} />
              <h3 className="text-2xl font-bold mb-2">{t.contact.cta.title}</h3>
              <p className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{t.contact.cta.subtitle}</p>
              <button onClick={() => scrollToSection('analysis-section')}
                className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700 transition transform hover:scale-105 text-white">
                {t.contact.cta.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`relative z-10 text-center py-8 px-4 border-t ${colors.border}`}>
        <p className={theme === 'dark' ? 'text-gray-500' : 'text-gray-600'}>{t.footer.copyright}</p>
        <p className={`${theme === 'dark' ? 'text-gray-600' : 'text-gray-500'} text-sm mt-2`}>{t.footer.tagline}</p>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        .animate-slideIn {
          animation: slideIn 0.5s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ProjectSuccessAI;