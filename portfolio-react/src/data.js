// Data structure organized by technology
export const projectsByTech = {
  react: [
    {
      id: 'react-portfolio',
      title: 'Kalp Shah - Portfolio Website',
      description: 'Modern React-based portfolio website with routing and responsive design',
      image: 'portfolio.jpg',
      link: '#',
      technologies: ['React', 'React Router', 'CSS3'],
      tech: 'React'
    },
    {
      id: 'react-ecommerce',
      title: 'E-commerce Dashboard',
      description: 'Full-featured e-commerce dashboard with product management',
      image: 'ecommerce.jpg',
      link: '#',
      technologies: ['React', 'Redux', 'Axios'],
      tech: 'React'
    }
  ],
  javascript: [
    {
      id: 'js-notes',
      title: 'Magic Notes App',
      description: 'A notes application with local storage integration and dynamic features',
      image: 'notes.jpg',
      link: 'https://kalpshah01.github.io/resume_projects/textnotes.html',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      tech: 'JavaScript'
    },
    {
      id: 'js-resume-checker',
      title: 'Resume Checker',
      description: 'Validates resumes and checks for essential keywords in web development',
      image: 'resume.jpg',
      link: 'https://kalpshah01.github.io/resume_projects/resumechecker.html',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      tech: 'JavaScript'
    },
    {
      id: 'js-todo',
      title: 'Todo List Manager',
      description: 'Advanced todo list with categories, priorities, and local storage persistence',
      image: 'todo.jpg',
      link: '#',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      tech: 'JavaScript'
    }
  ],
  css: [
    {
      id: 'css-landing',
      title: 'Creative Landing Page',
      description: 'Beautiful landing page with advanced CSS animations and flexbox layout',
      image: 'landing.jpg',
      link: '#',
      technologies: ['HTML', 'CSS', 'Animations'],
      tech: 'CSS'
    },
    {
      id: 'css-portfolio',
      title: 'Original Portfolio Site',
      description: 'Responsive portfolio website built with pure HTML and CSS',
      image: 'old-portfolio.jpg',
      link: '#',
      technologies: ['HTML', 'CSS', 'Responsive Design'],
      tech: 'CSS'
    }
  ],
  html: [
    {
      id: 'html-resume',
      title: 'Resume Page',
      description: 'Well-structured semantic HTML resume page',
      image: 'resume-page.jpg',
      link: '#',
      technologies: ['HTML', 'Semantic HTML'],
      tech: 'HTML'
    },
    {
      id: 'html-portfolio',
      title: 'HTML Portfolio Template',
      description: 'Complete portfolio template built with pure HTML structure',
      image: 'html-portfolio.jpg',
      link: '#',
      technologies: ['HTML', 'Structure'],
      tech: 'HTML'
    }
  ],
  php: [
    {
      id: 'php-food-delivery',
      title: 'Online Food Delivery',
      description: 'A comprehensive full-stack food delivery platform with order management',
      image: 'food.jpg',
      link: 'http://onlinefooddelivery.infy.uk/ronlinefood/index.php',
      technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
      tech: 'PHP'
    }
  ],
  mysql: [
    {
      id: 'mysql-database-design',
      title: 'Database Management System',
      description: 'Complex database design and management for web applications',
      image: 'database.jpg',
      link: '#',
      technologies: ['MySQL', 'Database Design', 'SQL'],
      tech: 'MySQL'
    }
  ],
  python: [
    {
      id: 'python-automation',
      title: 'Python Automation Scripts',
      description: 'Various automation scripts for web scraping and data processing',
      image: 'automation.jpg',
      link: '#',
      technologies: ['Python', 'Automation', 'Web Scraping'],
      tech: 'Python'
    }
  ],
  'full stack': [
    {
      id: 'mern-ecommerce',
      title: 'MERN E-commerce Platform',
      description: 'Full-stack e-commerce application with MERN stack',
      image: 'mern.jpg',
      link: '#',
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js'],
      tech: 'Full Stack'
    },
    {
      id: 'php-cms',
      title: 'Content Management System',
      description: 'Custom CMS built with PHP and MySQL',
      image: 'cms.jpg',
      link: '#',
      technologies: ['PHP', 'MySQL', 'JavaScript'],
      tech: 'Full Stack'
    }
  ],
  websocket: [
    {
      id: 'websocket-chat',
      title: 'Real-time Chat Application',
      description: 'WebSocket-based chat application with real-time messaging',
      image: 'chat.jpg',
      link: '#',
      technologies: ['WebSocket', 'Node.js', 'JavaScript'],
      tech: 'WebSocket'
    }
  ],
  'socket.io': [
    {
      id: 'socket-io-game',
      title: 'Multiplayer Game',
      description: 'Real-time multiplayer game using Socket.io',
      image: 'game.jpg',
      link: '#',
      technologies: ['Socket.io', 'Node.js', 'JavaScript'],
      tech: 'Socket.io'
    }
  ],
  firebase: [
    {
      id: 'firebase-app',
      title: 'Firebase-powered App',
      description: 'Application using Firebase for backend services',
      image: 'firebase.jpg',
      link: '#',
      technologies: ['Firebase', 'JavaScript', 'React'],
      tech: 'Firebase'
    }
  ]
};

// All projects in one array (for other sections)
export const allProjects = [
  {
    id: '1',
    title: 'Online Food Delivery',
    description: 'A comprehensive full-stack food delivery platform with order management',
    image: 'food.jpg',
    link: 'http://onlinefooddelivery.infy.uk/ronlinefood/index.php',
    technologies: ['HTML', 'CSS', 'PHP', 'MySQL'],
    category: 'fullstack',
    tech: 'PHP'
  },
  {
    id: '2',
    title: 'Resume Checker',
    description: 'Validates resumes and checks for essential keywords in web development',
    image: 'resume.jpg',
    link: 'https://kalpshah01.github.io/resume_projects/resumechecker.html',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    tech: 'JavaScript'
  },
  {
    id: '3',
    title: 'Magic Notes',
    description: 'A notes application with local storage integration',
    image: 'notes.jpg',
    link: 'https://kalpshah01.github.io/resume_projects/textnotes.html',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    category: 'frontend',
    tech: 'JavaScript'
  }
];

export const education = [
  {
    id: '1',
    degree: 'MERN Stack Development',
    institution: 'Red & White Multimedia Education',
    duration: '2025 – currently pursuing',
    details: 'Full-stack web development with MongoDB, Express.js, React, and Node.js'
  },
  {
    id: '2',
    degree: 'Master of Computer Applications',
    institution: 'Pursuing - Hemchandracharya North Gujarat University (HNGU)',
    duration: '2025 Onwards',
    details: 'Advanced studies in computer applications and software development'
  },
  {
    id: '3',
    degree: 'Bachelor of Computer Applications',
    institution: 'SMT.C.S.S.SHAH BCA COLLEGE, DEESA',
    duration: 'June 2022 to March 2025',
    gpa: '9.0 CGPA'
  },
  {
    id: '4',
    degree: 'Higher Secondary (12th)',
    institution: 'Sardar Patel School, Deesa',
    duration: 'Year: 2022',
    percentage: '85%'
  },
  {
    id: '5',
    degree: 'Secondary (10th)',
    institution: 'Sardar Patel School, Deesa',
    duration: 'Year: 2020',
    percentage: '80%'
  }
];

export const experience = [
  {
    id: '1',
    title: 'DG Intern Hub',
    organization: 'Internship Program',
    duration: '1 Month Internship',
    months: '1 month',
    description: 'Comprehensive internship program focusing on practical experience in web development and industry practices.'
  },
  {
    id: '2',
    title: 'Technology Training Intern',
    organization: 'Sardar Patel High School, City',
    duration: 'July 2024 - August 2024',
    months: '2 months',
    description: 'Worked as a Technology Training Intern where I trained staff on using various technology tools, helping them integrate technology into their daily work. Developed strong communication, presentation, and technical skills.'
  }
];

export const skillProgress = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'JavaScript', percentage: 75 },
  { name: 'React', percentage: 80 },
  { name: 'PHP', percentage: 70 },
  { name: 'MySQL', percentage: 70 },
  { name: 'Python', percentage: 70 }
];

export const frontendTechs = ['HTML', 'CSS', 'JavaScript', 'React'];
export const backendTechs = ['PHP', 'MySQL', 'Python'];
export const realTimeTechs = ['WebSocket', 'Socket.io', 'Firebase'];
