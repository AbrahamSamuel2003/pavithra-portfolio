// All portfolio content lives here. Edit this file to update the site.

export const profile = {
  name: 'Pavithra S',
  first: 'Pavithra',
  role: 'Software Developer',
  tagline:
    'I build practical software solutions using web development, Python, machine learning and NLP.',
  badge: 'Fresher • Passout 2026',
  email: 'lishakinshily@gmail.com',
  phone: '+91 93615 75090',
  phoneHref: 'tel:+919361575090',
  linkedin: 'https://www.linkedin.com/in/pavithra-s-234210311',
  github: '', // add her GitHub profile URL here to show it in the nav/footer/contact
  resume: '/Pavithra_S_Resume.pdf',
  location: 'Tirunelveli, India',
  photo: '/pavithra.webp',
  about:
    "I'm a motivated software developer with hands-on experience in web development, machine learning, NLP and computer vision projects. I enjoy building practical applications and continuously learning modern technologies.",
}

export const navLinks = [
  ['about', 'About'],
  ['skills', 'Skills'],
  ['projects', 'Projects'],
  ['experience', 'Experience'],
  ['education', 'Education'],
  ['contact', 'Contact'],
]

export const orbitBadges = ['Python', 'NLP', 'OpenCV', 'BERT', 'Gradio']

export const aboutChips = [
  { label: 'MCA', value: '2024–2026' },
  { label: 'BCA', value: '2021–2024' },
  { label: 'Location', value: 'Tirunelveli, India' },
]

export const skills = [
  { title: 'Programming', items: ['Python', 'Java', 'JavaScript', 'PHP', 'C', 'C++'] },
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'Bootstrap'] },
  { title: 'Database', items: ['SQL', 'MongoDB'] },
  { title: 'AI / Machine Learning', items: ['NLP', 'Machine Learning', 'OpenCV'] },
  { title: 'Tools & Technologies', items: ['Android Studio', 'Git', 'GitHub', 'Gradio'] },
  { title: 'Focus Areas', items: ['Software Development', 'Web Development', 'NLP'] },
]

// Add `demo` and/or `code` URLs to a project and a link button appears automatically.
export const projects = [
  {
    n: 1,
    date: '03 / 2026',
    title: 'Sentiment Analysis Model & UI',
    text: 'Trained and evaluated sentiment analysis models including BERT, RoBERTa and DistilBERT. Developed an interactive Gradio interface to compare model performance.',
    tags: ['Python', 'NLP', 'BERT', 'RoBERTa', 'DistilBERT', 'Gradio'],
    demo: '',
    code: '',
  },
  {
    n: 2,
    date: '10 / 2025',
    title: 'Jackfruit Bulb Estimator',
    text: 'Built a machine learning solution using OpenCV to estimate edible jackfruit bulbs. Applied image processing and mathematical formulas to support yield estimation.',
    tags: ['Python', 'OpenCV', 'Machine Learning'],
    demo: '',
    code: '',
  },
  {
    n: 3,
    date: '04 / 2024',
    title: 'Fish Shop Management System',
    text: 'Developed a management system for inventory and order handling. Implemented search and filtering functionality for efficient stock management.',
    tags: ['Web Development', 'Database', 'Management System'],
    demo: '',
    code: '',
  },
]

export const experience = [
  {
    when: '05 / 2023',
    title: 'Google Map Place Picker Project',
    sub: 'Internship / Project Experience',
    text: 'Developed a Google Maps-based location picker for efficient place searching. Integrated Google Maps API for accurate location retrieval and interactive map functionality.',
  },
]

export const education = [
  { when: '2024–2026', title: 'Master of Computer Applications' },
  { when: '2021–2024', title: 'Bachelor of Computer Applications' },
  { when: 'Class XII', title: '86.6%' },
  { when: 'Class X', title: '81%' },
]

export const activities = [
  { when: '2021–2022', title: 'Class Representative' },
  { when: 'Inter-college', title: 'Coordinator for Inter-college Events' },
]
