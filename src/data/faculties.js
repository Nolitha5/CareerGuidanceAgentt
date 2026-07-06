export const FACULTIES = [
  {
    id: 'arts', name: 'Arts & Design', icon: '🎨', color: '#db2777',
    desc: 'Graphic Design, Animation, UX/UI, Creative Strategy',
    paths: [
      {
        id:'graphic', icon:'✏️', title:'Graphic Designer',
        subtitle:'Create visual identities, marketing materials, and brand assets',
        salary:{ entry:'R35K–R55K', mid:'R60K–R90K' },
        certifications:['Adobe Certified Professional','Google UX Design Certificate','Canva Design Certification (free)','HubSpot Digital Marketing (free)'],
        courses:['Graphic Design Specialization – Coursera (CalArts)','Adobe Creative Cloud Tutorials (free)','Typography & Layout – Skillshare','Logo Design Masterclass – Udemy'],
        skills:['Adobe Illustrator / Photoshop','Typography','Colour Theory','InDesign','Brand Identity'],
        jobReadiness:['Build a Behance portfolio with 10+ projects','Create a mock brand identity for a local business','Enter design competitions (99designs, Dribbble)','Freelance on Fiverr or Upwork to build client experience'],
        weights:{ activity:{creative:10,helping:3,managing:2}, strength:{creative:10,communication:5,organized:4}, impact:{aesthetic:10,commercial:5,social:3}, numbers:{low:9,mid:5,high:2}, goal:{firstjob:6,specialist:6,money:5,difference:4,explore:5} }
      },
      {
        id:'ux', icon:'🖱️', title:'UX / UI Designer',
        subtitle:'Design digital products people love to use',
        salary:{ entry:'R55K–R75K', mid:'R85K–R120K' },
        certifications:['Google UX Design Certificate – Coursera','Interaction Design Foundation (IxDF)','Adobe XD Certification','Nielsen Norman Group UX Certificate'],
        courses:['Google UX Design – Coursera (free audit)','Figma Crash Course – YouTube (free)','UI/UX Bootcamp – Udemy','Zero to Mastery – Complete Web & Mobile Designer'],
        skills:['Figma / Adobe XD','Wireframing & Prototyping','User Research','Usability Testing','Design Systems'],
        jobReadiness:['Build 3 full UX case studies with research + solution','Conduct real user interviews for a project','Share work on Dribbble & Behance','Apply for junior/associate designer roles or internships'],
        weights:{ activity:{creative:8,analytical:5,helping:7,building:3}, strength:{creative:8,logical:5,communication:6,organized:5}, impact:{aesthetic:8,social:7,commercial:5}, numbers:{mid:7,low:5,high:4}, goal:{firstjob:7,specialist:7,money:6,difference:5,explore:5} }
      },
      {
        id:'animation', icon:'🎬', title:'Animator / Motion Graphics Artist',
        subtitle:'Bring ideas to life through 2D/3D animation and motion design',
        salary:{ entry:'R40K–R60K', mid:'R65K–R100K' },
        certifications:['Adobe Certified Professional (After Effects)','School of Motion Certificate','Blender Fundamentals (free)','LinkedIn Learning Animation Certificate'],
        courses:['School of Motion – Motion Design','After Effects for Beginners – YouTube (free)','Blender Guru Complete Course (free)','3D Animation – Coursera'],
        skills:['Adobe After Effects','Blender / Maya','Storyboarding','Cinema 4D','Character Rigging'],
        jobReadiness:['Create a 60-second demo reel showcasing best work','Post process breakdowns on Instagram / YouTube','Contribute to student or indie film projects','Pitch animated explainer videos to small businesses'],
        weights:{ activity:{creative:12,building:4}, strength:{creative:11,technical:6,communication:3}, impact:{aesthetic:11,social:4,commercial:4}, numbers:{low:9,mid:4,high:1}, goal:{specialist:9,firstjob:5,difference:4,explore:6} }
      },
      {
        id:'brand', icon:'📣', title:'Brand & Creative Strategist',
        subtitle:'Shape how organizations communicate their identity and message',
        salary:{ entry:'R45K–R65K', mid:'R75K–R110K' },
        certifications:['HubSpot Content Marketing (free)','Google Digital Marketing & E-commerce','Meta Blueprint (free)','Canva Brand Kit Pro'],
        courses:['Brand Strategy – Coursera','Creative Direction – LinkedIn Learning','Marketing Fundamentals – Google (free)','Copywriting Masterclass – Udemy'],
        skills:['Brand Strategy','Visual Identity','Market Research','Campaign Planning','Copywriting'],
        jobReadiness:['Volunteer brand/comms work for an NGO or startup','Build 3 creative strategy case studies','Grow a personal creative social media account','Intern at an advertising or branding agency'],
        weights:{ activity:{creative:7,managing:6,helping:5,analytical:4}, strength:{communication:9,creative:8,leadership:5,organized:6}, impact:{commercial:8,aesthetic:8,social:5}, numbers:{mid:6,low:5,high:4}, goal:{money:7,specialist:6,firstjob:5,explore:6} }
      },
    ],
  },

  {
    id: 'econ', name: 'Economics & Finance', icon: '💰', color: '#d97706',
    desc: 'Financial Analysis, Investment, Actuarial Science, Research',
    paths: [
      {
        id:'finanalyst', icon:'📈', title:'Financial Analyst',
        subtitle:'Evaluate investments, model financials, and support business decisions',
        salary:{ entry:'R55K–R75K', mid:'R85K–R130K' },
        certifications:['CFA Level 1 (CFA Institute)','FMVA – Financial Modeling & Valuation Analyst (CFI)','Bloomberg Market Concepts (free)','Microsoft Excel Expert'],
        courses:['Financial Analysis – CFI (free intro)','Excel for Finance – Udemy','Investment Analysis – Coursera (Yale)','Corporate Finance – edX'],
        skills:['Financial Modeling','Excel / VBA','DCF & Comparable Valuation','Bloomberg Terminal','Power BI / Tableau'],
        jobReadiness:['Build 3 financial models (DCF, LBO, M&A)','Get Bloomberg BMC certificate (free, ~8 hrs)','Network via CFA Institute student events','Apply to analyst graduate programs & finance internships'],
        weights:{ activity:{analytical:10,managing:5}, strength:{logical:10,organized:7,technical:5}, impact:{commercial:10,operational:5}, numbers:{high:12,mid:6,low:0}, goal:{money:10,specialist:7,firstjob:6,explore:4,difference:3} }
      },
      {
        id:'actuary', icon:'📉', title:'Actuary',
        subtitle:'Use math and statistics to assess risk in insurance, pensions, and finance',
        salary:{ entry:'R65K–R85K', mid:'R100K–R160K' },
        certifications:['SOA / IFoA Actuarial Exams (CT/CM series)','Society of Actuaries exam prep','Actuarial Science University Certificate','SAS Base Programmer'],
        courses:['Actuarial Mathematics – Coursera','Probability & Statistics – MIT OpenCourseWare (free)','Excel for Actuaries – Udemy','R for Statistical Computing – Coursera'],
        skills:['Actuarial Mathematics','R / Python','Probability & Statistics','Risk Modeling','Pension & Insurance Products'],
        jobReadiness:['Pass at least 2 actuarial professional exams','Join actuarial student society (SOA/IFoA)','Seek actuarial internships at insurers or consulting firms','Build an R-based risk analysis project'],
        weights:{ activity:{analytical:10,researching:7}, strength:{logical:12,technical:8,organized:8}, impact:{commercial:6,operational:7,social:4}, numbers:{high:15,mid:5,low:0}, goal:{specialist:10,money:9,firstjob:4,explore:3,difference:3} }
      },
      {
        id:'economist', icon:'🌍', title:'Economist / Research Analyst',
        subtitle:'Analyse economic trends, inform policy, and produce research insights',
        salary:{ entry:'R50K–R70K', mid:'R75K–R110K' },
        certifications:['Google Data Analytics Certificate','SAS Base Programmer','Stata / R Statistical Software Certification','Certificate in Policy Analysis'],
        courses:['Economics for Everyone – edX','Econometrics – Coursera (Duke)','Policy Analysis – Harvard Online (free)','Stata for Economists – Udemy'],
        skills:['Econometrics','Policy Analysis','R / STATA / Python','Report & Brief Writing','Macroeconomic Modelling'],
        jobReadiness:['Publish a research paper or policy brief','Intern at a central bank, research institute, or think tank','Build a portfolio of data analysis projects','Present findings at a student economics conference'],
        weights:{ activity:{analytical:9,researching:9,helping:4}, strength:{logical:10,communication:8,organized:6}, impact:{social:8,scientific:7,commercial:6}, numbers:{high:10,mid:7,low:2}, goal:{specialist:8,difference:8,explore:7,money:5,firstjob:4} }
      },
      {
        id:'ibanking', icon:'🏦', title:'Investment Banking Analyst',
        subtitle:'Execute M&A deals, capital markets transactions, and financial advisory',
        salary:{ entry:'R85K–R110K', mid:'R130K–R200K+' },
        certifications:['CFA Level 1','FMVA (CFI – Financial Modeling)','Bloomberg BMC (free)','Wall Street Prep / Breaking Into Wall Street'],
        courses:['Investment Banking – Wall Street Prep','Excel Crash Course – CFI (free)','M&A Financial Modeling – Breaking Into Wall Street','Financial Statement Analysis – Coursera'],
        skills:['Financial Modeling','Merger & Acquisition Analysis','Pitch Deck Creation','Bloomberg','Networking & Deal Origination'],
        jobReadiness:['Network aggressively: 5 LinkedIn outreach messages/week','Apply to spring weeks & summer analyst programs early','Build and present a mock M&A pitch deck','Cold email analysts for informational interviews'],
        weights:{ activity:{analytical:9,managing:7}, strength:{logical:10,leadership:7,organized:7,communication:8}, impact:{commercial:12,operational:5}, numbers:{high:12,mid:5,low:0}, goal:{money:12,specialist:7,firstjob:7,explore:4,difference:2} }
      },
    ],
  },

  {
    id: 'eng', name: 'Engineering & Built Environment', icon: '⚙️', color: '#ea580c',
    desc: 'Civil, Mechanical, Electrical Engineering, Architecture',
    paths: [
      {
        id:'civil', icon:'🏗️', title:'Civil / Structural Engineer',
        subtitle:'Design and oversee construction of infrastructure and structures',
        salary:{ entry:'R55K–R75K', mid:'R80K–R120K' },
        certifications:['EIT (Engineer in Training)','AutoCAD Certified User (Autodesk)','ECSA Candidacy Registration (SA)','PMP – Project Management Professional'],
        courses:['AutoCAD for Engineers – Coursera','Structural Analysis – MIT OCW (free)','SAP2000 / ETABS Tutorials – YouTube (free)','Construction Project Management – Coursera'],
        skills:['AutoCAD / Revit','Structural Analysis (ETABS, SAP2000)','Project Planning','Site Supervision','Civil 3D'],
        jobReadiness:['Complete ECSA candidacy & log working experience','Gain hands-on site exposure through internships','Build a CAD portfolio (10+ drawings)','Join SAICE or IStructE student chapter'],
        weights:{ activity:{building:12,analytical:7}, strength:{technical:10,logical:9,organized:7}, impact:{operational:8,social:7,environmental:5}, numbers:{high:8,mid:7,low:2}, goal:{specialist:8,difference:6,firstjob:6,money:7,explore:4} }
      },
      {
        id:'mechanical', icon:'🔩', title:'Mechanical Engineer',
        subtitle:'Design and develop machines, products, and mechanical systems',
        salary:{ entry:'R55K–R75K', mid:'R80K–R115K' },
        certifications:['SOLIDWORKS Certified Associate (CSWA)','ANSYS Mechanical Certification','Six Sigma Green Belt (ASQ)','EIT (Engineer in Training)'],
        courses:['CAD & CAM – Coursera','Thermodynamics – MIT OCW (free)','SOLIDWORKS – Udemy','Manufacturing Processes – edX'],
        skills:['SOLIDWORKS / AutoCAD','FEA Analysis (ANSYS)','Thermodynamics & Fluid Mechanics','MATLAB','Manufacturing Processes'],
        jobReadiness:['Design and 3D-print a working mechanical component','Participate in engineering competitions (e.g., SAIIE)','Apply for graduate engineer development programs','Register as a candidate engineer with ECSA'],
        weights:{ activity:{building:10,analytical:8,creative:4}, strength:{technical:10,logical:9,organized:7}, impact:{operational:8,commercial:6,environmental:5}, numbers:{high:9,mid:7,low:1}, goal:{specialist:8,money:7,firstjob:6,explore:5,difference:4} }
      },
      {
        id:'electrical', icon:'⚡', title:'Electrical / Electronics Engineer',
        subtitle:'Design power systems, circuits, and embedded technology solutions',
        salary:{ entry:'R58K–R78K', mid:'R85K–R120K' },
        certifications:['EIT (Engineer in Training)','MATLAB Onramp (MathWorks, free)','Cisco CCNA (IoT & Embedded)','PLC Programming Certificate'],
        courses:['Circuit Analysis – MIT OCW (free)','MATLAB for Engineers – Coursera','PLC Programming – Udemy','Power Systems – edX'],
        skills:['Circuit Design & PCB Layout (KiCad)','PLC Programming','MATLAB / Simulink','Power Systems','Embedded C / Python'],
        jobReadiness:['Build an electronics project and document it on GitHub','Join IEEE student chapter','Intern at a utility company, manufacturer, or tech firm','Register as candidate engineer (ECSA)'],
        weights:{ activity:{building:10,analytical:9,researching:4}, strength:{technical:11,logical:10,organized:6}, impact:{operational:8,commercial:6,scientific:5}, numbers:{high:10,mid:6,low:1}, goal:{specialist:9,money:7,firstjob:6,explore:4,difference:4} }
      },
      {
        id:'architect', icon:'🏛️', title:'Architect / Urban Designer',
        subtitle:'Design buildings and urban spaces that are functional, safe, and inspiring',
        salary:{ entry:'R45K–R65K', mid:'R70K–R110K' },
        certifications:['SACAP Candidate Architect Registration (SA)','Autodesk Revit Certified User','LEED Green Associate','SketchUp Certified (free badge)'],
        courses:['Architectural Design – Coursera','Revit for Beginners – Udemy','SketchUp Training – official tutorials (free)','Urban Planning & the City – edX (MIT)'],
        skills:['Revit / AutoCAD','SketchUp','Lumion / V-Ray Rendering','Sustainable Design','Urban Planning'],
        jobReadiness:['Build a design portfolio (10 projects, varied typologies)','Intern at an architectural firm for practical hours','Register with SACAP as a candidate architect','Enter architectural design competitions (student awards)'],
        weights:{ activity:{building:10,creative:9,analytical:5}, strength:{creative:9,technical:8,organized:7,logical:6}, impact:{aesthetic:8,social:7,environmental:7,operational:5}, numbers:{mid:7,low:5,high:5}, goal:{specialist:9,difference:7,firstjob:4,explore:6,money:5} }
      },
    ],
  },

  {
    id: 'hum', name: 'Humanities', icon: '📖', color: '#7c3aed',
    desc: 'Writing, HR, Policy, Journalism, Social Research',
    paths: [
      {
        id:'writer', icon:'✍️', title:'Content Writer / Copywriter',
        subtitle:'Craft compelling content for brands, media, and digital platforms',
        salary:{ entry:'R35K–R50K', mid:'R55K–R85K' },
        certifications:['HubSpot Content Marketing (free)','Google Digital Garage (free)','SEO Fundamentals – Semrush Academy (free)','AWAI Copywriting Certification'],
        courses:['Copywriting Secrets – Udemy','Content Strategy – Coursera (Northwestern)','SEO Writing – Yoast Academy (free)','Data Journalism – Knight Center (free)'],
        skills:['SEO Writing','Content Strategy','Storytelling & Narrative','Copy Editing','Social Media Writing'],
        jobReadiness:['Start a blog or Medium publication (publish 10 articles)','Build a writing portfolio with 10 diverse samples','Pitch articles to online publications','Freelance on Upwork or ProBlogger Job Board'],
        weights:{ activity:{creative:9,helping:6,analytical:3}, strength:{communication:12,creative:8,organized:5}, impact:{social:7,aesthetic:7,commercial:5}, numbers:{low:10,mid:5,high:2}, goal:{firstjob:9,explore:7,difference:6,specialist:5,money:5} }
      },
      {
        id:'hr', icon:'🤝', title:'Human Resources Specialist',
        subtitle:'Attract, develop, and retain talent within organizations',
        salary:{ entry:'R40K–R58K', mid:'R65K–R95K' },
        certifications:['SHRM-CP (Society for Human Resource Management)','PHR (Professional in Human Resources)','SABPP Registration (SA)','LinkedIn Talent Solutions Badge (free)'],
        courses:['Human Resource Management – Coursera (U of Minnesota)','HR Analytics – AIHR (free intro)','Labour Law Fundamentals – local providers','People Analytics – edX'],
        skills:['Recruitment & Selection','Labour Law','HR Analytics','HRIS Systems (SAP / Workday)','Training & Development'],
        jobReadiness:['Intern in an HR department (even 3 months counts)','Learn one HRIS system (many have free trials)','Join SABPP or SHRM as a student member','Study the Labour Relations Act (LRA) thoroughly'],
        weights:{ activity:{helping:11,managing:8,analytical:5}, strength:{leadership:9,communication:11,organized:8}, impact:{social:11,operational:6,commercial:4}, numbers:{mid:6,low:5,high:4}, goal:{difference:9,firstjob:7,specialist:6,explore:5,money:5} }
      },
      {
        id:'policy', icon:'🏛️', title:'Policy Analyst / Public Administrator',
        subtitle:'Research, develop, and evaluate policies for government and NGOs',
        salary:{ entry:'R45K–R62K', mid:'R68K–R100K' },
        certifications:['Certificate in Public Policy (university CPD)','PRINCE2 Foundation / PMP','Research Methods Certification – Coursera','GIS Fundamentals – ESRI'],
        courses:['Public Policy Analysis – Coursera','Research Methods – edX (MIT)','Data for Policy – FutureLearn','African Development – online (UNISA / AU)'],
        skills:['Policy Writing & Analysis','Stakeholder Engagement','Qualitative & Quantitative Research','Report Writing','Government Processes & Law'],
        jobReadiness:['Intern at a government department, NGO, or think tank','Publish policy opinion pieces on platforms like Daily Maverick','Join political science or public policy student societies','Build a portfolio of research reports and policy briefs'],
        weights:{ activity:{analytical:9,researching:9,helping:7}, strength:{logical:9,communication:9,organized:7}, impact:{social:11,scientific:6,operational:5}, numbers:{high:7,mid:9,low:4}, goal:{difference:11,specialist:8,explore:6,money:4,firstjob:5} }
      },
      {
        id:'journalism', icon:'📰', title:'Journalist / Media Practitioner',
        subtitle:'Investigate, report, and tell stories that inform the public',
        salary:{ entry:'R32K–R50K', mid:'R55K–R85K' },
        certifications:['Google News Initiative Training (free)','Reuters Digital Journalism Certificate (free)','SA Media & Communications membership (SANEF/MISA)','Podcast Production – LinkedIn Learning'],
        courses:['Investigative Journalism – Coursera','Digital Storytelling – edX','Video Journalism – Knight Center (free)','Data Journalism – MOOC (free)'],
        skills:['Investigative Reporting','Video / Audio Production','Social Media Newsgathering','Ethics & Media Law','Data Journalism (Excel / Datawrapper)'],
        jobReadiness:['Write for your campus newspaper or start a news blog','Build a multimedia portfolio (text, audio, video)','Pitch stories to online news platforms','Join SANEF or MISA as a student member (SA)'],
        weights:{ activity:{creative:8,helping:7,researching:8,analytical:5}, strength:{communication:12,creative:7,organized:5}, impact:{social:10,aesthetic:5,scientific:3}, numbers:{low:9,mid:5,high:2}, goal:{difference:10,firstjob:7,explore:7,specialist:5,money:4} }
      },
    ],
  },

  {
    id: 'ict', name: 'Information & Communication Technology', icon: '💻', color: '#4f46e5',
    desc: 'Software Dev, Data Science, Cybersecurity, Cloud, AI/ML',
    paths: [
      {
        id:'dev', icon:'👨‍💻', title:'Software Developer',
        subtitle:'Build web apps, mobile apps, and software products',
        salary:{ entry:'R65K–R85K', mid:'R95K–R140K' },
        certifications:['Meta Front-End Developer – Coursera','Google IT Automation with Python','AWS Certified Developer','Microsoft Azure Developer Associate'],
        courses:['The Odin Project (free, full-stack)','CS50 – Harvard (free)','JavaScript30 by Wes Bos (free)','Full Stack Open – University of Helsinki (free)'],
        skills:['Python / JavaScript','React or Vue.js','Git & GitHub','REST APIs','SQL Basics'],
        jobReadiness:['Build 3 portfolio projects and host on GitHub','Deploy a live project (Vercel / Netlify)','Practice LeetCode (Easy → Medium difficulty)','Contribute to an open-source project'],
        weights:{ activity:{building:9,creative:6,analytical:5}, strength:{technical:10,logical:9,creative:5,organized:6}, impact:{commercial:7,operational:6,social:5}, numbers:{high:7,mid:8,low:3}, goal:{firstjob:7,money:7,specialist:7,explore:6,difference:4} }
      },
      {
        id:'data', icon:'📊', title:'Data Analyst / Data Scientist',
        subtitle:'Extract insights from data to drive business decisions',
        salary:{ entry:'R60K–R80K', mid:'R95K–R145K' },
        certifications:['Google Data Analytics – Coursera','IBM Data Science Professional Certificate','Microsoft Power BI Data Analyst (PL-300)','Tableau Desktop Specialist'],
        courses:['Kaggle Free ML Courses (free)','DataCamp Data Analyst Track','SQL for Data Science – UC Davis (Coursera)','Statistics with Python – Coursera'],
        skills:['Python (Pandas, NumPy)','SQL','Tableau / Power BI','Statistics','Machine Learning Basics'],
        jobReadiness:['Complete 2–3 Kaggle competitions','Publish analysis notebooks on GitHub','Create a public Tableau dashboard','Build a portfolio with data storytelling writeups'],
        weights:{ activity:{analytical:11,researching:7}, strength:{logical:10,technical:8,organized:6}, impact:{commercial:7,scientific:7,operational:6}, numbers:{high:12,mid:7,low:1}, goal:{specialist:8,money:7,firstjob:6,explore:6,difference:5} }
      },
      {
        id:'cyber', icon:'🛡️', title:'Cybersecurity Analyst',
        subtitle:'Defend organizations against cyber threats and attacks',
        salary:{ entry:'R65K–R85K', mid:'R95K–R140K' },
        certifications:['CompTIA Security+','CompTIA Network+','Google Cybersecurity Certificate (Coursera)','Certified Ethical Hacker (CEH)'],
        courses:['TryHackMe Learning Paths (free tier)','Cybersecurity Essentials – Cisco (free)','IBM Cybersecurity Analyst – Coursera','Professor Messer Security+ (free, YouTube)'],
        skills:['Networking Fundamentals','Linux Command Line','Threat Analysis','SIEM Tools','Python Scripting'],
        jobReadiness:['Complete TryHackMe SOC Level 1 path','Set up a home lab using VirtualBox','Earn CompTIA Network+ before Security+','Practice on HackTheBox or PicoCTF'],
        weights:{ activity:{analytical:8,building:5,researching:6}, strength:{logical:10,technical:9,organized:7}, impact:{social:7,operational:8,commercial:5}, numbers:{mid:7,high:5,low:5}, goal:{firstjob:7,specialist:8,money:7,explore:5,difference:5} }
      },
      {
        id:'cloud', icon:'☁️', title:'Cloud / DevOps Engineer',
        subtitle:'Build and manage scalable cloud infrastructure and pipelines',
        salary:{ entry:'R70K–R90K', mid:'R105K–R160K' },
        certifications:['AWS Cloud Practitioner (CLF-C02)','AWS Solutions Architect Associate','Google Associate Cloud Engineer','Microsoft Azure Fundamentals (AZ-900)'],
        courses:['AWS Skill Builder (free tier)','Docker & Kubernetes – TechWorld with Nana (YouTube, free)','Cloud Computing Fundamentals – Coursera','A Cloud Guru (subscription)'],
        skills:['Linux & Bash Scripting','Docker & Kubernetes','CI/CD Pipelines (GitHub Actions)','Terraform (IaC)','AWS / Azure / GCP Services'],
        jobReadiness:['Earn AWS Cloud Practitioner first','Deploy a containerized app on AWS or GCP','Build a CI/CD pipeline with GitHub Actions','Document everything in a public GitHub repo'],
        weights:{ activity:{building:9,analytical:7,managing:5}, strength:{technical:11,logical:9,organized:7}, impact:{commercial:7,operational:9}, numbers:{mid:7,high:6,low:5}, goal:{money:9,specialist:8,firstjob:6,explore:6,difference:4} }
      },
      {
        id:'aiml', icon:'🤖', title:'AI / Machine Learning Engineer',
        subtitle:'Design, train, and deploy intelligent models and AI systems',
        salary:{ entry:'R80K–R105K', mid:'R125K–R185K' },
        certifications:['DeepLearning.AI TensorFlow Developer','AWS Certified Machine Learning Specialty','Google Professional ML Engineer','IBM AI Engineering Professional (Coursera)'],
        courses:['fast.ai – Practical Deep Learning (free)','Andrew Ng ML Specialization – Coursera','Hugging Face NLP Course (free)','CS231n – Stanford (YouTube, free)'],
        skills:['Python (PyTorch / TensorFlow)','Linear Algebra & Calculus','ML Model Training & Evaluation','Model Deployment (APIs, Docker)','Data Preprocessing'],
        jobReadiness:['Build 2 ML projects and publish on GitHub','Compete in a Kaggle competition (top 25% target)','Read 5 key ML papers on ArXiv','Contribute to an open-source ML library'],
        weights:{ activity:{analytical:9,researching:9,building:5}, strength:{logical:11,technical:10,organized:6}, impact:{scientific:9,commercial:6,operational:6}, numbers:{high:14,mid:5,low:0}, goal:{specialist:9,money:8,explore:5,difference:6,firstjob:3} }
      },
    ],
  },

  {
    id: 'mgmt', name: 'Management Sciences', icon: '📋', color: '#0d9488',
    desc: 'Business Analysis, Project Management, Marketing, Entrepreneurship',
    paths: [
      {
        id:'bizanalyst', icon:'📐', title:'Business Analyst',
        subtitle:'Bridge business needs and technology to drive organizational improvement',
        salary:{ entry:'R55K–R72K', mid:'R80K–R115K' },
        certifications:['ECBA – Entry Certificate in Business Analysis (IIBA)','PMI-PBA (Professional in Business Analysis)','Microsoft Power BI Certification','Agile / Scrum Fundamentals'],
        courses:['Business Analysis Fundamentals – Udemy','SQL for Business Analysts – DataCamp','Requirements Engineering – Coursera','Agile Business Analysis – LinkedIn Learning'],
        skills:['Requirements Gathering','Process Modelling (BPMN)','SQL','Power BI / Tableau','Stakeholder Management'],
        jobReadiness:['Complete a requirements documentation project end-to-end','Learn SQL and build one Power BI dashboard','Obtain ECBA certification','Apply for BA graduate programmes at consulting firms'],
        weights:{ activity:{analytical:10,managing:7,helping:7}, strength:{logical:10,organized:9,communication:8,technical:5}, impact:{commercial:9,operational:8,social:4}, numbers:{high:9,mid:8,low:3}, goal:{firstjob:7,specialist:7,money:7,explore:6,difference:4} }
      },
      {
        id:'pm', icon:'📅', title:'Project Manager',
        subtitle:'Lead teams to deliver projects on time, within scope and budget',
        salary:{ entry:'R55K–R75K', mid:'R85K–R130K' },
        certifications:['CAPM – Certified Associate in Project Management (PMI)','PRINCE2 Foundation','Certified Scrum Master (CSM)','Google Project Management – Coursera'],
        courses:['Google Project Management – Coursera (free audit)','Agile Project Management – edX','Microsoft Project – Udemy','PMP Exam Prep – various providers'],
        skills:['Stakeholder Management','Risk Management','Agile & Waterfall Methodologies','Microsoft Project / Jira','Budgeting & Scheduling'],
        jobReadiness:['Lead a real student or community project end-to-end','Earn CAPM or PRINCE2 Foundation certification','Build a project management portfolio with lessons learned','Join PMI student chapter for networking'],
        weights:{ activity:{managing:12,helping:7,analytical:6}, strength:{leadership:11,organized:11,communication:9}, impact:{operational:10,commercial:7,social:6}, numbers:{mid:8,high:5,low:5}, goal:{specialist:8,money:8,firstjob:8,difference:6,explore:5} }
      },
      {
        id:'marketing', icon:'📱', title:'Digital Marketer',
        subtitle:'Grow brands and audiences through digital channels and data-driven campaigns',
        salary:{ entry:'R40K–R58K', mid:'R65K–R100K' },
        certifications:['Google Digital Marketing & E-commerce (Coursera)','HubSpot Marketing Hub (free)','Meta Blueprint (free)','Google Analytics (GA4, free)'],
        courses:['Digital Marketing – Google (free)','Marketing Analytics – Coursera (Meta)','Social Media Marketing – HubSpot (free)','Email Marketing – Mailchimp Academy (free)'],
        skills:['SEO & SEM','Social Media Marketing','Email Marketing','Google & Meta Ads','Analytics & Reporting'],
        jobReadiness:['Run a real or mock digital campaign with measurable results','Build a marketing portfolio with campaign case studies','Grow a social media account to 500+ followers','Freelance for a small local business (offer free first project)'],
        weights:{ activity:{creative:7,analytical:7,helping:6,managing:5}, strength:{communication:10,creative:8,organized:6,logical:5}, impact:{commercial:10,aesthetic:6,social:5}, numbers:{mid:8,high:6,low:5}, goal:{firstjob:9,money:8,explore:7,specialist:6,difference:4} }
      },
      {
        id:'entrepreneur', icon:'🚀', title:'Entrepreneur / Startup Founder',
        subtitle:'Build and launch your own venture or lead innovation within organizations',
        salary:{ entry:'Variable', mid:'Uncapped' },
        certifications:['Wharton Entrepreneurship Specialization (Coursera)','NYDA / Seda Entrepreneurship Programme (SA)','Google for Startups Resources (free)','Lean Startup Methodology – various'],
        courses:['Entrepreneurship – Coursera (Wharton)','Business Model Canvas – Strategyzer (free)','Pitch Deck Masterclass – Udemy','Design Thinking – IDEO (free)'],
        skills:['Business Modelling & Validation','Pitching & Fundraising','Customer Discovery','Financial Planning (basic)','MVP Development'],
        jobReadiness:['Conduct 50 customer discovery interviews','Build and launch an MVP (no-code tools are fine)','Apply for incubators: LaunchLab, Allan Gray Orbis (SA)','Enter a student startup pitch competition'],
        weights:{ activity:{managing:9,creative:8,building:7,helping:6}, strength:{leadership:12,communication:9,creative:7,logical:6}, impact:{commercial:8,social:8,operational:6}, numbers:{mid:7,high:6,low:6}, goal:{money:10,difference:9,specialist:7,explore:9,firstjob:4} }
      },
    ],
  },

  {
    id: 'sci', name: 'Science', icon: '🔬', color: '#16a34a',
    desc: 'Research, Environmental Science, Biomedical, Data Science',
    paths: [
      {
        id:'researcher', icon:'🧪', title:'Research Scientist / Laboratory Analyst',
        subtitle:'Conduct experiments, generate knowledge, and publish findings',
        salary:{ entry:'R45K–R65K', mid:'R70K–R110K' },
        certifications:['Good Laboratory Practice (GLP) Certification','HPCSA Registration – relevant field (SA)','ISO 17025 Awareness Training','Scientific Writing – Coursera (Duke)'],
        courses:['Laboratory Techniques – Coursera','Research Methods – edX (MIT, free)','Statistics for Scientists – Coursera','Scientific Writing & Publishing – Coursera'],
        skills:['Lab Techniques & Safety Protocols','Statistical Analysis (R / SPSS)','Scientific Writing','Experimental Design','Peer Review & Publication'],
        jobReadiness:['Complete an honours or postgraduate research project','Co-author or publish a peer-reviewed paper','Apply for CSIR, NRF, or industry internships','Build an academic CV with publications and presentations'],
        weights:{ activity:{researching:13,analytical:9}, strength:{logical:10,technical:8,organized:9,communication:5}, impact:{scientific:13,social:6,environmental:5}, numbers:{high:11,mid:6,low:1}, goal:{specialist:11,difference:9,explore:6,money:4,firstjob:3} }
      },
      {
        id:'enviro', icon:'🌿', title:'Environmental Scientist / Ecologist',
        subtitle:'Study and protect natural systems from pollution and climate change',
        salary:{ entry:'R45K–R62K', mid:'R68K–R100K' },
        certifications:['EAPASA Registration (SA)','GIS Certificate – ESRI / QGIS (free)','Environmental Impact Assessment (EIA) Training','COP / IAIA Membership'],
        courses:['Environmental Science – Coursera','GIS for Environmental Management – Udemy','Climate Change – edX (SDG Academy)','R for Environmental Science – Coursera'],
        skills:['GIS Mapping (ArcGIS / QGIS)','Field Sampling Techniques','Environmental Legislation','Data Analysis (R)','EIA Report Writing'],
        jobReadiness:['Volunteer for conservation or field research projects','Learn QGIS (free software, free tutorials)','Intern at an environmental consulting firm','Join IAIA or WESSA as a student member (SA)'],
        weights:{ activity:{researching:10,analytical:8,building:3,helping:4}, strength:{logical:8,technical:7,organized:8,communication:6}, impact:{environmental:13,scientific:8,social:7}, numbers:{high:8,mid:8,low:3}, goal:{difference:11,specialist:9,explore:7,money:4,firstjob:4} }
      },
      {
        id:'biomedical', icon:'🧬', title:'Biomedical Scientist / Clinical Researcher',
        subtitle:'Advance human health through laboratory research and clinical trials',
        salary:{ entry:'R48K–R68K', mid:'R75K–R115K' },
        certifications:['HPCSA Registration – Medical Science (SA)','Good Clinical Practice (GCP) Certification (free, NIHR)','Clinical Research Coordinator Certificate','ICH-GCP e-learning (free)'],
        courses:['Clinical Research – Coursera (Johns Hopkins)','Biostatistics – edX','Drug Discovery – Coursera','Medical Laboratory Science – university CPD'],
        skills:['Clinical Trial Protocols','Biostatistics (SPSS / R)','Molecular & Cell Biology Techniques','Regulatory Affairs','Research Ethics'],
        jobReadiness:['Volunteer as a research assistant on an active study','Complete free GCP certification (mandatory for clinical roles)','Intern at a hospital, CRO, or pharma company','Apply for NRF or MRC bursaries / fellowships'],
        weights:{ activity:{researching:11,analytical:8,helping:6}, strength:{logical:10,technical:10,organized:9}, impact:{social:9,scientific:11,operational:5}, numbers:{high:11,mid:7,low:1}, goal:{difference:10,specialist:10,money:5,firstjob:4,explore:5} }
      },
      {
        id:'datasci', icon:'📡', title:'Data Scientist (Science)',
        subtitle:'Apply statistical modelling to scientific and research datasets',
        salary:{ entry:'R65K–R85K', mid:'R95K–R145K' },
        certifications:['Google Data Analytics – Coursera','IBM Data Science Professional Certificate','SAS Base Programmer','Bioinformatics Specialization – Coursera (UCSD)'],
        courses:['R for Data Science – free online (r4ds.hadley.nz)','Statistics with Python – Coursera','Bioinformatics – Coursera (UCSD)','Scientific Python – various (free)'],
        skills:['R / Python','Statistical Modelling','Bioinformatics','Data Visualization','MATLAB'],
        jobReadiness:['Publish a data analysis of a real scientific dataset on GitHub','Participate in a Kaggle or DrivenData science competition','Build a portfolio of reproducible analyses (R Markdown / Jupyter)','Apply for data science roles in biotech, pharma, or research institutes'],
        weights:{ activity:{analytical:11,researching:9}, strength:{logical:11,technical:9,organized:6}, impact:{scientific:10,commercial:6,operational:6,social:5}, numbers:{high:13,mid:6,low:0}, goal:{specialist:9,money:7,firstjob:5,explore:7,difference:7} }
      },
    ],
  },
]

// ── LEGACY SCORING (fallback when real data not loaded) ───────────────────────
function scoreLegacy(faculty, answers) {
  const scoringKeys = ['activity', 'strength', 'impact', 'numbers', 'goal']
  return faculty.paths
    .map(path => {
      let score = 0
      scoringKeys.forEach(qId => {
        const ans  = answers[qId]
        const wmap = path.weights[qId]
        if (!ans || !wmap) return
        const vals = Array.isArray(ans) ? ans : [ans]
        vals.forEach(v => { if (wmap[v]) score += wmap[v] })
      })
      return { ...path, score, scoringMode: 'legacy' }
    })
    .sort((a, b) => b.score - a.score)
}

// ── REAL-DATA SCORING (when career_data.json is loaded) ──────────────────────
import { answersToSkillVector, scoreCareerFromData } from './skillsMap.js'

/**
 * Maps dataset career names → our internal path IDs.
 * Add more mappings here as you discover the 12 career names from the dataset.
 */
const CAREER_NAME_TO_PATH_ID = {
  'Software Engineer':   'software',
  'Data Analyst':        'data',
  'Business Analyst':    'bizanalyst',
  'Financial Analyst':   'finance',
  'Marketing Manager':   'marketing',
  'HR Manager':          'hr',
  'Accountant':          'accounting',
  'Mechanical Engineer': 'mechanical',
  'Civil Engineer':      'civil',
  'Research Scientist':  'research',
  'Counselor':           'counseling',
  'Psychologist':        'counseling',
  'Sales Executive':     'sales',
  'Sales Assistant':     'sales',
  'Clerk':               'admin',
  'Administrative Clerk':'admin',
  'Graphic Designer':    'graphic',
  'Software Developer':  'software',
  'Data Scientist':      'data',
  'Web Developer':       'software',
}

function scoreRealData(faculty, answers, careerData) {
  const skillVector = answersToSkillVector(answers)

  // Score every career in the dataset
  const dataScores = Object.entries(careerData.careers).map(([name, entry]) => {
    let score = scoreCareerFromData(entry, skillVector)

    // Boost if this career's primary faculties include the selected faculty
    if (entry.primary_faculties?.includes(faculty.id)) score *= 1.3

    return { dataName: name, score, entry }
  })

  // Match dataset careers → our path objects in this faculty
  const pathScores = new Map()  // pathId → best score from dataset

  dataScores.forEach(({ dataName, score }) => {
    const pathId = CAREER_NAME_TO_PATH_ID[dataName]
    if (!pathId) return
    const existing = pathScores.get(pathId) || 0
    if (score > existing) pathScores.set(pathId, score)
  })

  // Score all paths in this faculty
  return faculty.paths
    .map(path => {
      // Real data score (if we matched this path)
      const realScore = pathScores.get(path.id) || 0

      // Legacy score as a tiebreaker / supplement
      const scoringKeys = ['activity', 'strength', 'impact', 'numbers', 'goal']
      let legacyScore = 0
      scoringKeys.forEach(qId => {
        const ans  = answers[qId]
        const wmap = path.weights[qId]
        if (!ans || !wmap) return
        const vals = Array.isArray(ans) ? ans : [ans]
        vals.forEach(v => { if (wmap[v]) legacyScore += wmap[v] })
      })

      // Blend: 70% real data, 30% legacy (so paths with no dataset match still rank)
      const score = realScore > 0
        ? realScore * 0.7 + legacyScore * 0.3
        : legacyScore

      return { ...path, score, scoringMode: realScore > 0 ? 'real-data' : 'legacy' }
    })
    .sort((a, b) => b.score - a.score)
}

/**
 * Main scoring function.
 * Pass `careerData` (loaded from /career_data.json) to use real data.
 * Falls back to legacy weighted scoring when careerData is null/undefined.
 */
export function scorePaths(faculty, answers, careerData = null) {
  if (careerData?.careers && Object.keys(careerData.careers).length > 0) {
    return scoreRealData(faculty, answers, careerData)
  }
  return scoreLegacy(faculty, answers)
}
