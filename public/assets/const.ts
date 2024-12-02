export const navbar = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Study Abroad",
    href: "/study",
  },
  {
    title: "Contacts",
    href: "#",
  },
];
export const experienceItems = [
  {
    id: 1,
    image: "/assets/icons/experience-icon-book.svg",
    title: "1000+ Partners",
    description:
      "over 1000+ partners worldwide enter the best universities in the world",
  },
  {
    id: 2,
    image: "/assets/icons/experience-icon-experts.svg",
    title: "Experts",
    description: "We are experts in our field. help you reach new heights",
  },
  {
    id: 3,
    image: "/assets/icons/experience-icon-time.svg",
    title: "Time",
    description:
      "we will help you save your time and nerves when applying to the best university.",
  },
  {
    id: 4,
    image: "/assets/icons/experience-icon-price.svg",
    title: "Affordable prices",
    description:
      "reasonable prices will always please you. sign up for a consultation",
  },
];
export const exams = [
  {
    id: 1,
    image: "/assets/images/exams-image-one.png",
    title: "aptis",
    subtitle: "Choose Aptis for your assessment needs",
    description:
      "Aptis is a computer basedtest which provides fast results reliably marked by our exsaminest.",
  },
  {
    id: 2,
    image: "/assets/images/exams-image-two.png",
    title: "iELTS",
    subtitle: "Here’s all you need to know about IELTS",
    description:
      "IELTS (the International English Language Testing is the world’s most popular.",
  },
  {
    id: 3,
    image: "/assets/images/exams-image-three.png",
    title: "other exams",
    subtitle: "There are a variety of competitive exams besides.",
    description:
      "But covering them is no big deal. Just study ncert books for these.",
  },
];
// contact information
export const inputs = [
  {
    id: 1,
    type: "text",
    placeholder: "First Name",
    name: "FirstName",
    required: "First Name is required",
  },
  {
    id: 2,
    type: "text",
    placeholder: "Last Name",
    name: "LastName",
    required: "Last Name is required",
  },
  {
    id: 3,
    type: "number",
    placeholder: "Phone",
    name: "Phone",
    required: "Phone number is required",
    pattern: {
      value: /^\996\d{3}\d{3}\d{3}$/,
      message: "Invalid phone number format. Use 996222017686 like this",
    },
  },
  {
    id: 4,
    type: "email",
    placeholder: "Email",
    name: "Email",
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Invalid email format",
    },
  },
];
