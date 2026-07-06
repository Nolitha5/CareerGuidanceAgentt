export const QUESTIONS = [
  {
    id: 'activity',
    text: 'What type of work excites you most?',
    type: 'radio',
    options: [
      { label: 'Creating things',              desc: 'Designs, content, products, or solutions',           value: 'creative'    },
      { label: 'Analysing & solving problems', desc: 'Breaking down complex challenges with logic',        value: 'analytical'  },
      { label: 'Helping & advising people',    desc: 'Teaching, coaching, supporting, or serving others',  value: 'helping'     },
      { label: 'Building physical things',     desc: 'Designing, constructing, or engineering',            value: 'building'    },
      { label: 'Researching & discovering',    desc: 'Experiments, investigations, generating knowledge',  value: 'researching' },
      { label: 'Managing & strategising',      desc: 'Leading teams, running projects, planning',          value: 'managing'    },
    ],
  },
  {
    id: 'strength',
    text: 'What is your biggest natural strength?',
    type: 'radio',
    options: [
      { label: 'Communication & storytelling',      desc: 'Writing, speaking, persuading people',           value: 'communication' },
      { label: 'Logical & analytical thinking',     desc: 'Numbers, patterns, step-by-step reasoning',     value: 'logical'       },
      { label: 'Creativity & visual thinking',      desc: 'Design sense, imagination, original ideas',     value: 'creative'      },
      { label: 'Organisation & attention to detail',desc: 'Systems, accuracy, meticulous checking',        value: 'organized'     },
      { label: 'Leadership & people skills',        desc: 'Motivating, delegating, resolving conflict',    value: 'leadership'    },
      { label: 'Technical & hands-on aptitude',     desc: 'Tools, machines, code, or lab equipment',      value: 'technical'     },
    ],
  },
  {
    id: 'impact',
    text: 'What kind of impact matters most to you?',
    type: 'radio',
    options: [
      { label: 'Commercial impact',    desc: 'Revenue growth, business success, market value',         value: 'commercial'    },
      { label: 'Social impact',        desc: 'Community welfare, education, human wellbeing',          value: 'social'        },
      { label: 'Scientific impact',    desc: 'New knowledge, discovery, innovation',                   value: 'scientific'    },
      { label: 'Aesthetic impact',     desc: 'Beauty, culture, design, media & storytelling',          value: 'aesthetic'     },
      { label: 'Environmental impact', desc: 'Sustainability, conservation, climate',                  value: 'environmental' },
      { label: 'Operational impact',   desc: 'Efficiency, systems reliability, process improvement',  value: 'operational'   },
    ],
  },
  {
    id: 'numbers',
    text: 'How comfortable are you with numbers and quantitative analysis?',
    type: 'radio',
    options: [
      { label: 'Very comfortable — I enjoy math/stats', desc: 'Equations, models, and data feel natural to me',      value: 'high' },
      { label: 'Moderate — I can handle the basics',    desc: "I manage when needed but it's not my favourite",      value: 'mid'  },
      { label: 'I prefer to minimise numbers',          desc: 'I lean toward qualitative, creative, or people work', value: 'low'  },
    ],
  },
  {
    id: 'timeline',
    text: 'How quickly do you want to land your first role?',
    type: 'radio',
    options: [
      { label: '3–6 months (intensive)', desc: 'Bootcamp pace, full-time focus on job-readiness',          value: 'fast'   },
      { label: '6–12 months (balanced)', desc: 'Study part-time while handling other commitments',         value: 'medium' },
      { label: '1–2 years (thorough)',   desc: 'Degree, postgraduate study, or comprehensive self-study',  value: 'slow'   },
    ],
  },
  {
    id: 'goal',
    text: "What's your primary career goal right now?",
    type: 'radio',
    options: [
      { label: 'Land my first job ASAP',       desc: 'Entry-level, any foot in the door',             value: 'firstjob'  },
      { label: 'Build deep specialisation',    desc: 'Become a recognised expert in one area',        value: 'specialist' },
      { label: 'Maximise earning potential',   desc: 'Focus on highest-paying paths and skills',      value: 'money'     },
      { label: 'Make a meaningful difference', desc: 'Work that positively impacts people or planet', value: 'difference' },
      { label: 'Explore before committing',    desc: 'Broad learning before narrowing to a niche',   value: 'explore'   },
    ],
  },
]

export const READINESS = [
  'Polish your LinkedIn profile: professional photo, strong headline, and concise summary',
  'Write a tailored, ATS-friendly CV (1 page for < 2 years experience)',
  'Build a professional portfolio site or GitHub profile showcasing your work',
  'Practise STAR-method answers for behavioural interview questions',
  'Network: connect with 3 professionals per week in your target role',
  'Research 10 target companies and set up job alerts on LinkedIn',
  'Join communities: Discord servers, Reddit forums, or local meetups in your field',
  'Apply to internships and junior roles even before you feel 100% ready',
  'Use mock interview platforms: Pramp, Interviewing.io, or Big Interview',
  'Follow industry thought leaders and read at least one relevant article per day',
]
