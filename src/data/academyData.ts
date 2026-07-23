export interface Course {
  id: string;
  title: string;
  category: 'Secondary' | 'Higher Secondary' | 'Foundation';
  grades: string;
  boards: string[];
  subjects: string[];
  description: string;
  badge?: string;
  features: string[];
}

export interface Review {
  id: string;
  name: string;
  role: string;
  rating: number;
  comment: string;
  tag: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Classroom' | 'Faculty' | 'Students' | 'Campus';
  imageUrl: string;
  caption: string;
}

export const ACADEMY_DATA = {
  name: 'Siddhantha Academy',
  tagline: 'Focused Learning with Personal Attention',
  shortDescription: 'Premier women-owned coaching institute in Kudasan, Gandhinagar. Small batch sizes, dedicated faculty, and proven conceptual clarity for CBSE & GSEB students.',
  address: {
    street: 'Keshav Aaradhyam, B-213-214, Prominent Hotel Rd',
    locality: 'Kudasan',
    city: 'Gandhinagar',
    state: 'Gujarat',
    pincode: '382421',
    fullAddress: 'Keshav Aaradhyam, B-213-214, Prominent Hotel Rd, Kudasan, Gandhinagar, Gujarat 382421'
  },
  phone: '099044 32121',
  phoneFormatted: '+91 99044 32121',
  rawPhoneNumber: '919904432121',
  whatsappUrl: 'https://wa.me/919904432121?text=Hello%20Siddhantha%20Academy,%20I%20want%20to%20inquire%20about%20coaching%20classes.',
  mapsUrl: 'https://maps.google.com/?q=Siddhantha+Academy+Keshav+Aaradhyam+Kudasan+Gandhinagar',
  googleMapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3667.4332822453664!2d72.6325!3d23.1905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e830000000001%3A0x0!2sKeshav%20Aaradhyam%2C%20Kudasan%2C%20Gandhinagar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
  social: {
    instagram: 'https://instagram.com/siddhantha_academy',
    facebook: 'https://facebook.com/siddhanthaacademy',
    whatsapp: 'https://wa.me/919904432121'
  },
  stats: [
    { label: 'Batch Size Limit', value: 'Small & Focused' },
    { label: 'Faculty Guidance', value: '100% Individual Care' },
    { label: 'Target Boards', value: 'CBSE & GSEB' },
    { label: 'Ownership', value: 'Women-Led Excellence' }
  ]
};

export const COURSES: Course[] = [
  {
    id: 'sec-8-10',
    title: 'Class 8th, 9th & 10th (Secondary Foundation)',
    category: 'Secondary',
    grades: 'Class 8, 9 & 10',
    boards: ['CBSE', 'GSEB (English & Gujarati Medium)'],
    subjects: ['Mathematics', 'Science', 'English', 'Social Science'],
    description: 'Comprehensive curriculum building strong core concepts, logical problem-solving, and exam confidence for board readiness.',
    badge: 'Popular Choice',
    features: [
      'Small batch strength for 1-on-1 focus',
      'Regular test series & feedback',
      'Special focus on improving weak areas',
      'Interactive doubt-solving sessions'
    ]
  },
  {
    id: 'sci-11-12',
    title: 'Class 11th & 12th Science Stream',
    category: 'Higher Secondary',
    grades: 'Class 11 & 12',
    boards: ['CBSE', 'GSEB'],
    subjects: ['Physics', 'Chemistry', 'Mathematics (PCM)', 'Biology (PCB)'],
    description: 'Rigorous subject training with deep conceptual understanding, numerical mastery, and board exam strategy.',
    badge: 'High Impact',
    features: [
      'In-depth numerical & concept clarification',
      'Board pattern Mock Tests & revision',
      'Experienced science specialist faculty',
      'Personal progress tracking'
    ]
  },
  {
    id: 'comm-11-12',
    title: 'Class 11th & 12th Commerce Stream',
    category: 'Higher Secondary',
    grades: 'Class 11 & 12',
    boards: ['CBSE', 'GSEB'],
    subjects: ['Elements of Accounts', 'Economics', 'Statistics', 'Organization of Commerce (O.C.)'],
    description: 'Structured commerce coaching ensuring strong fundamentals in accountancy calculations, economic theory, and statistics.',
    badge: 'Career Oriented',
    features: [
      'Step-by-step practical accounting practice',
      'Conceptual clarity on economics & stats',
      'Exam technique and answer writing skills',
      'Personal attention from expert teachers'
    ]
  },
  {
    id: 'foundation-mentorship',
    title: 'Personalized Mentorship & Subject Support',
    category: 'Foundation',
    grades: 'All School Grades',
    boards: ['CBSE', 'GSEB'],
    subjects: ['Custom Subject Focus', 'Doubt Clearing', 'Exam Preparation'],
    description: 'Tailored study assistance and regular individual mentoring for students who need extra care to excel.',
    features: [
      'Dedicated guidance for slow learners',
      'Customized pace matching student needs',
      'Friendly and approachable environment',
      'Regular parent-teacher updates'
    ]
  }
];

export const WHY_CHOOSE_US = [
  {
    title: 'Personal Attention',
    description: 'We maintain small batch sizes so every student receives direct, individual guidance from faculty without getting lost in crowded classrooms.',
    iconName: 'UserCheck'
  },
  {
    title: 'Weak Student Improvement Focus',
    description: 'Special care and customized learning pace designed to build confidence in students struggling with specific subjects or topics.',
    iconName: 'TrendingUp'
  },
  {
    title: 'Friendly & Approachable Teachers',
    description: 'Cooperative, student-first faculty members who create a comfortable environment where students never hesitate to ask doubts.',
    iconName: 'Smile'
  },
  {
    title: 'Detailed Concept Explanation',
    description: 'Focus on root-cause understanding rather than rote memorization, laying a rock-solid foundation for future competitive academic success.',
    iconName: 'BookOpenCheck'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'rev-1',
    name: 'Parent / Student Review',
    role: 'Local Resident, Kudasan',
    rating: 5,
    comment: 'The strength of the class is less and the faculties give full attention to every student. Really happy with the progress.',
    tag: 'Verified Google Review',
    date: 'Recent'
  },
  {
    id: 'rev-2',
    name: 'GSEB Student Parent',
    role: 'Gandhinagar',
    rating: 5,
    comment: 'Good staff, take personal interest in child improvement. Concept clarity is given high importance here.',
    tag: 'Verified Google Review',
    date: 'Recent'
  },
  {
    id: 'rev-3',
    name: 'Class 10 Student',
    role: 'Kudasan Branch',
    rating: 5,
    comment: 'Best coaching classes in Kudasan! Teachers are extremely supportive and explain every detail until we understand completely.',
    tag: 'Verified Google Review',
    date: 'Recent'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Modern Classroom Learning',
    category: 'Classroom',
    imageUrl: '/images/hero_classroom.jpg',
    caption: 'Small batch size environment ensuring every student stays engaged.'
  },
  {
    id: 'gal-2',
    title: '1-on-1 Personal Guidance',
    category: 'Faculty',
    imageUrl: '/images/faculty_personal_attention.jpg',
    caption: 'Experienced female faculty providing step-by-step concept clarification.'
  },
  {
    id: 'gal-3',
    title: 'Peer Discussion & Study Session',
    category: 'Students',
    imageUrl: '/images/study_environment.jpg',
    caption: 'Collaborative, friendly, and focused study culture.'
  },
  {
    id: 'gal-4',
    title: 'Siddhantha Academy Entrance & Reception',
    category: 'Campus',
    imageUrl: '/images/academy_front_reception.jpg',
    caption: 'Welcoming and safe educational environment located at Keshav Aaradhyam, Kudasan.'
  }
];
