export const navbar = [
  {
    name: {
      en: "Home",
      ru: "Главная",
    },
    href: "/",
  },
  {
    name: {
      en: "About Us",
      ru: "О Нас",
    },
    href: "/about",
  },
  {
    name: {
      en: "Study Abroad",
      ru: "Учиться за границей",
    },
    href: "/study",
  },
  {
    name: {
      en: "Contacts",
      ru: "Контакты",
    },
    href: "/#contact",
  },
];
export const experienceItems = [
  {
    id: 1,
    image: "/assets/icons/experience-icon-book.svg",
    title: {
      en: "1000+ Partners",
      ru: "1000+ партнеров",
    },
    description: {
      en: "over 1000+ partners worldwide enter the best universities in the world",
      ru: "первые 1000+ партнеров мира вступают в лучшие университеты в мире",
    },
  },
  {
    id: 2,
    image: "/assets/icons/experience-icon-experts.svg",
    title: {
      en: "Experts",
      ru: "Эксперты",
    },
    description: {
      en: "We are experts in our field. help you reach new heights",
      ru: "Мы эксперты в нашем деле. помогите достичь новых высот",
    },
  },
  {
    id: 3,
    image: "/assets/icons/experience-icon-time.svg",
    title: {
      en: "Time",
      ru: "Время",
    },
    description: {
      en: "we will help you save your time and nerves when applying to the best university.",
      ru: "«Мы поможем вам сэкономить время и нервы при поступлении в лучший университет».",
    },
  },
  {
    id: 4,
    image: "/assets/icons/experience-icon-price.svg",
    title: {
      en: "Affordable prices",
      ru: "Бесплатные цены",
    },

    description: {
      en: "reasonable prices will always please you. sign up for a consultation",
      ru: "реальные цены всегда будут приятными. зарегистрируйтесь на консультацию",
    },
  },
];
export const exams = [
  {
    id: 1,
    image: "/assets/images/exams-image-one.png",
    title: {
      en: "Aptis",
      ru: "Аптис",
    },
    subtitle: {
      en: "Choose Aptis for your assessment needs",
      ru: "Выберите Аптис для ваших нужд ассессмента",
    },
    description: {
      en: "Aptis is a computer-based test which provides fast results reliably marked by our examiners.",
      ru: "Аптис - это компьютерное тестовое задание, которое выдаёт быструю оценку настоящими экспертами.",
    },
  },
  {
    id: 2,
    image: "/assets/images/exams-image-two.png",
    title: {
      en: "iELTS",
      ru: "iELTS",
    },
    subtitle: {
      en: "Here’s all you need to know about IELTS",
      ru: "Здесь все, что вам нужно знать о IELTS",
    },
    description: {
      en: "IELTS (the International English Language Testing is the world’s most popular.",
      ru: "IELTS (Тестовое английский язык - это самое популярное в мире.",
    },
  },
  {
    id: 3,
    image: "/assets/images/exams-image-three.png",
    title: {
      en: "other exams",
      ru: "другие экзамены",
    },
    subtitle: {
      en: "There are a variety of competitive exams besides.",
      ru: "«Кроме того, есть множество конкурсных экзаменов».",
    },
    description: {
      en: "But covering them is no big deal. Just study ncert books for these.",
      ru: "«Но охватить их не составит большого труда. Просто изучите специальные книги по ним».",
    },
  },
];
// contact information
export const inputs = [
  {
    id: 1,
    type: "text",
    placeholder: {
      en: "First Name",
      ru: "Ваше Имя",
    },
    name: "FirstName",
    required: "First Name is required",
  },
  {
    id: 2,
    type: "text",
    placeholder: {
      en: "Last Name",
      ru: "Ваша фамилия",
    },
    name: "LastName",
    required: "Last Name is required",
  },
  {
    id: 3,
    type: "text",
    placeholder: {
      en: "Phone Number",
      ru: "Ваш Телефон",
    },
    name: "Phone",
    required: "Phone number is required",
    pattern: {
      value: /^\+996 \d{3} \d{3} \d{3}$/,
      message: "Invalid phone number format. Use 996222017686 like this",
    },
  },
  {
    id: 4,
    type: "email",
    placeholder: {
      en: "Email",
      ru: "Ваша Электронная Почта",
    },
    name: "Email",
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email format",
    },
  },
];
// our team

export const teamItems = [
  {
    id: 1,
    img: "/assets/images/about-teacher-1.png",
    title: "Miss.Anushin oont ",
    subtitle: {
      en: "CEO & co-Founder",
      ru: "генеральный директор и сооснователь",
    },
  },
  {
    id: 2,
    img: "/assets/images/about-teacher-2.png",
    title: "Mr.Vishmas S.",
    subtitle: {
      en: "CTO & co-Founder",
      ru: "Технический директор и соучредитель",
    },
  },
  {
    id: 3,
    img: "/assets/images/about-teacher-3.png",
    title: "Miss.Tanisha kaduu ",
    subtitle: {
      en: "VP Of Technology",
      ru: "Вице-президент по технологиям",
    },
  },
  {
    id: 4,
    img: "/assets/images/about-teacher-4.png",
    title: "Mr.KL Rahul",
    subtitle: {
      en: "Head of design",
      ru: "Руководитель отдела дизайна",
    },
  },
  {
    id: 5,
    img: "/assets/images/about-teacher-5.png",
    title: "Miss.vashika g.",
    subtitle: {
      en: "vP Of Finance",
      ru: "вице-президент по финансам",
    },
  },
  {
    id: 6,
    img: "/assets/images/about-teacher-6.png",
    title: "Mr.Aryan Singh ",
    subtitle: {
      en: "Head of Marketing",
      ru: "Руководитель отдела маркетинга",
    },
  },
];
