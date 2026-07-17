export interface NavItem {
  label: string;
  href: string;
  key?: "home" | "conditions" | "technology" | "patients" | "blog" | "about" | "contact" | "gallery";
}

export const globalData = {
  brandName: "Avtar Clinic",
  logoIcon: "psychology",
  navItems: [
    { label: "Home", href: "/", key: "home" },
    { label: "About Us", href: "/about", key: "about" },
    { label: "Conditions", href: "/conditions", key: "conditions" },
    { label: "Technology", href: "/procedures", key: "technology" },
    { label: "Patients", href: "/resources", key: "patients" },
    { label: "Gallery", href: "/gallery", key: "gallery" },
    { label: "Blog", href: "/blog", key: "blog" },
    { label: "Contact Us", href: "/contact", key: "contact" }
  ] as NavItem[],
  footer: {
    logoImage: "/brain-wellness.png",
    brandName: "Avtar Health Care Clinic",
    description: "Comprehensive neuro-psychiatry, de-addiction, and family medicine services by Dr. Nilesh Kumar Kanaujiya and Dr. Preeti Chaudhary in Gomti Nagar, Lucknow.",
    socialLinks: [
      { label: "Facebook", icon: "facebook", href: "https://facebook.com" },
      { label: "Instagram", icon: "instagram", href: "https://instagram.com" },
      { label: "YouTube", icon: "youtube", href: "https://youtube.com/" }
    ],
    creditText: "Made by STech Web Solutions",
    creditHref: "https://stechwebsolution.com/",
    businessPhone: "+91 8795028982",
    patientLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Patient Rights", href: "#" },
      { label: "Medical Disclaimer", href: "#" },
      { label: "Contact Us", href: "/contact" }
    ],
    clinicalHours: [
      { days: "Mon - Sat (Evening)", time: "4:30 PM - 8:30 PM" },
      { days: "Sunday", time: "Closed" }
    ],
    supportTagline: "Confidential Consultation & Family Health Support",
    copyright: "© 2026 Avtar Health Care Clinic. All rights reserved."
  }
};

export const homeData = {
  hero: {
    tagline: "Avtar Health Care Clinic",
    title: "Neuro-Psychiatry, De-Addiction & Family Health.",
    titleAccent: "Healing Minds, Enhancing Physical Wellness.",
    description: "Expert psychiatric treatment, de-addiction recovery programs, and family healthcare services led by Dr. Nilesh Kumar Kanaujiya and Dr. Preeti Chaudhary in Gomti Nagar, Lucknow.",
    backgroundImage: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1600&q=80",
    primaryBtn: "Book a Consultation",
    secondaryBtn: "View Our Services"
  },
  stats: [
    { value: "10+ Years", label: "Clinical Excellence" },
    { value: "15,000+", label: "Happy Patients" },
    { value: "2", label: "Expert Doctors" }
  ],
  doctorProfile: {
    tagline: "Lead Consultant Neuro-psychiatrist",
    name: "Dr. Nilesh Kumar Kanaujiya, MBBS, MD, MIPS",
    description: "Dr. Nilesh Kumar Kanaujiya is a leading consultant neuro-psychiatrist specializing in clinical psychiatry, substance de-addiction, child behavior disorders, and mental wellness. Operating in Gomti Nagar, Lucknow, he is dedicated to restoring psychological balance and supporting families through recovery.",
    image: "/dr-nilesh-kumar-kanaujiya.jpeg",
    badgeTitle: "Board Certified",
    badgeDesc: "MD Neuro-Psychiatry Specialist",
    bulletPoints: [
      { icon: "verified", text: "Specialist in Psychiatry & De-Addiction" },
      { icon: "school", text: "Assistant Professor, Integral Medical College" },
      { icon: "groups", text: "Member, Indian Psychiatry Society (MIPS)" }
    ],
    ctaText: "View Full Profile",
    link: "/doctor/dr-nilesh-kumar-kanaujiya"
  },
  services: {
    tagline: "Our Specialties",
    title: "Psychiatric, De-Addiction & Family Medical Care",
    items: [
      {
        title: "Psycho-Sexual Disorder",
        description: "Professional and confidential clinical support for sexual dysfunctions, psychosexual concerns, and related relationship challenges.",
        icon: "favorite",
        link: "/blog/psycho-sexual-disorder"
      },
      {
        title: "Holistic Ayurvedic Care",
        description: "Traditional Ayurvedic consultations, herbal wellness strategies, and mind-body balance programs for comprehensive mental and physical health.",
        icon: "eco",
        link: "/blog/holistic-ayurvedic-care"
      },
      {
        title: "General Medicine",
        description: "Comprehensive primary healthcare, wellness consultations, and chronic disease management (diabetes, thyroid, hypertension).",
        icon: "medical_services",
        link: "/blog/chronic-migraine-management"
      },
      {
        title: "Child Psychiatry",
        description: "Specialist diagnosis and behavioral intervention for ADHD, autism spectrum, learning disabilities, and developmental delays.",
        icon: "child_care",
        link: "/blog/pediatric-adhd-behavior"
      },
      {
        title: "Headache & Migraine",
        description: "Advanced diagnostic profiling and therapeutic management of chronic migraines, tension headaches, and neuralgia.",
        icon: "bolt",
        link: "/blog/chronic-migraine-management"
      },
      {
        title: "Counseling & Therapy",
        description: "Professional psychotherapy sessions for stress management, sleep disorders (insomnia), relationship counseling, and lifestyle health.",
        icon: "spa",
        link: "/blog/insomnia-sleep-disorders"
      }
    ]
  },
  conditions: {
    title: "Conditions We Treat",
    description: "We provide diagnosis and compassionate treatment for a wide spectrum of psychiatric, behavioral, and general medical conditions.",
    buttonText: "View Condition Guide",
    href: '/conditions',
    items: [
      "OCD",
      "Schizophrenia",
      "Seizure Disorder",
      "Psycho-sexual Disorder",
      "Dementia and Alzheimer Disorder",
      "Psycho-Somatic and Chronic pain Disorder",
      "Counselling and Psychotherapy",
      "General medicine",
      "Holistic Ayurvedic Care for a Healthier Mind and Body"
    ]
  },
  technology: {
    tagline: "Clinical Approach",
    title: "Evidence-Based Diagnostics & Recovery",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    items: [
      {
        title: "Digital EEG & Brain Mapping",
        description: "Non-invasive brain electrical activity mapping to assist in diagnosing epilepsy, seizure syndromes, and sleep disorders.",
        icon: "insights"
      },
      {
        title: "Standardized Psychometrics",
        description: "Validated diagnostic scales and psychological testing for precise evaluation of cognitive, ADHD, and emotional profiles.",
        icon: "fact_check"
      },
      {
        title: "De-Addiction Detox Protocols",
        description: "Scientific, medically supervised detoxification procedures to manage withdrawal symptoms safely and comfortably.",
        icon: "spa"
      }
    ]
  },
  patientJourney: {
    tagline: "Your Path to Health",
    title: "The Patient Journey",
    steps: [
      {
        number: "01",
        title: "Clinical Consultation",
        description: "In-depth history taking and initial evaluation of mental and physical symptoms.",
        icon: "forum"
      },
      {
        number: "02",
        title: "Diagnostic Screening",
        description: "Scientific psychometric testing or digital brain mapping if indicated.",
        icon: "biotech"
      },
      {
        number: "03",
        title: "Treatment Plan",
        description: "Development of a personalized medical and therapeutic regimen.",
        icon: "clinical_notes"
      },
      {
        number: "04",
        title: "Wellness & Sobriety",
        description: "Continuous counseling and follow-up tracking to prevent relapse and support health.",
        icon: "healing"
      }
    ]
  },
  testimonials: {
    title: "Patient Success Stories",
    items: [
      {
        stars: 5,
        quote: "Dr. Nilesh Kanaujiya's treatment was life-changing for my severe anxiety. He explained the treatment plan clearly and helped me recover.",
        author: "Rohan S., Patient"
      },
      {
        stars: 5,
        quote: "The de-addiction counseling and support at Avtar Clinic helped my family member overcome long-term alcoholism safely.",
        author: "Pooja D., Family Member"
      },
      {
        stars: 5,
        quote: "Dr. Preeti Chaudhary is a wonderful physician. She manages my chronic hypertension with absolute professionalism and warmth.",
        author: "Virendra K., Patient"
      }
    ]
  },
  appointment: {
    title: "Book Your Consultation",
    description: "Take the first step towards recovery. Complete the form below and our clinic coordinator will contact you within 24 hours.",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    supportTitle: "Support Help Desk",
    supportDesc: "Available for Consultations & Inquiries",
    supportPhone: "+91 8795028982",
    buttonText: "Schedule Appointment",
    services: [
      "Neuro-Psychiatry & De-Addiction Consultation",
      "General Medicine / Family Health Consult",
      "Behavioral & Child Psychiatry Consult",
      "Counseling & Psychotherapy"
    ]
  },
  faqs: [
    {
      question: "What conditions does a neuro-psychiatrist treat?",
      answer: "A neuro-psychiatrist diagnoses and manages conditions that affect both brain function and mental health. This includes clinical depression, anxiety disorders, OCD, de-addiction, ADHD, epilepsy, sleep disorders, and behavioral issues."
    },
    {
      question: "What should I bring to my first consultation?",
      answer: "Please bring all previous medical prescriptions, reports of psychometric screenings or brain mapping, and a list of any current medications you or the patient are taking."
    },
    {
      question: "How does the de-addiction program work?",
      answer: "Our de-addiction program consists of medically supervised outpatient detoxification to manage withdrawal symptoms safely, followed by motivational counseling, relapse prevention therapy, and family support counseling."
    },
    {
      question: "Is patient confidentiality maintained?",
      answer: "Yes, absolute confidentiality is a cornerstone of our clinical practice. All medical histories, discussions, and laboratory reports are strictly private."
    },
    {
      question: "Do you offer family counseling?",
      answer: "Yes. Family participation is highly encouraged, especially in psychiatric treatment and de-addiction, as a supportive home environment is critical for successful recovery."
    },
    {
      question: "Do I need a prior referral to schedule an appointment?",
      answer: "No referral is required. You can schedule a direct appointment for psychiatric, de-addiction, or general medicine consultations by contacting our desk or filling the online form."
    }
  ],
  contactMap: {
    title: "Contact Information",
    description: "Avtar Health Care Clinic is located in Gomti Nagar, Lucknow, providing a private and peaceful setting for your healthcare consultations.",
    details: [
      {
        icon: "location_on",
        title: "Address",
        lines: [
          "Plot No. 26/27, Kaushalpuri,",
          "Near P.S. Lawn, Khargapur,",
          "Gomti Nagar, Lucknow"
        ]
      },
      {
        icon: "call",
        title: "Phone & Contact",
        lines: [
          "Dr. Nilesh Kanaujiya: +91 8795028982",
          "Dr. Preeti Chaudhary: +91 9696424349"
        ]
      },
      {
        icon: "schedule",
        title: "Clinic Hours",
        lines: [
          "Mon - Sat: 4:30 PM - 8:30 PM",
          "Sunday: Closed"
        ]
      }
    ],
    mapImage: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    mapAlt: "Avtar Health Care Clinic Consultation Office in Gomti Nagar, Lucknow",
    mapLocation: "Gomti Nagar, Lucknow",
    pinLabel: "Avtar Health Care Clinic",
    mapEmbedUrl: "https://maps.google.com/maps?q=26.8438297,81.0238095&z=17&hl=en&output=embed"
  }
};

export const conditionsData = {
  hero: {
    tagline: "Comprehensive Care",
    title: "Specialized Care for Psychiatric & General Health",
    description: "Providing expert neuropsychiatric evaluations, dedicated addiction recovery support, and professional family medicine.",
    backgroundImage: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1600&q=80",
    primaryBtn: "Find a Specialist",
    secondaryBtn: "View Treatments"
  },
  categories: {
    title: "Our Primary Clinical Divisions",
    brain: {
      number: "01",
      icon: "psychology",
      title: "Mental Health & Psychiatric Care",
      description: "Our psychiatric team provides comprehensive clinical diagnosis and therapeutic management for mood disorders, severe anxiety states, and chronic mental health conditions, aiming to restore emotional well-being.",
      items: ["Depression & Mood Disorders", "Anxiety & Panic Attacks", "Obsessive Compulsive Disorder", "Schizophrenia & Psychotic States"]
    },
    brainImage: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    brainImageAlt: "A comforting therapy office setting with two chairs facing each other, soft light coming through a window, and green plants, creating a calm and secure space for psychiatric consultation.",
    brainImageTag: "Compassionate Consultation Spaces",
    spine: {
      number: "02",
      icon: "spa",
      title: "De-Addiction & Substance Recovery",
      description: "Medically supervised outpatient detoxification protocols and behavioral therapies designed to manage withdrawal symptoms safely and support long-term sobriety.",
      items: ["Alcohol Withdrawal Management", "Tobacco Cessation Programs", "Substance De-Addiction", "Relapse Prevention Therapy"]
    },
    peripheral: {
      number: "03",
      icon: "medical_services",
      title: "General Medicine & Family Practice",
      description: "Comprehensive medical services including diagnosis and treatment of routine clinical illnesses, management of chronic conditions, and child health screening.",
      cards: [
        {
          title: "Family Healthcare",
          description: "Routine check-ups, diagnostic monitoring, and care for diabetes, thyroid, and hypertension."
        },
        {
          title: "Child Behavioral Screening",
          description: "Developmental checks, pediatric health, and evaluations for ADHD or learning challenges."
        }
      ]
    }
  },
  symptomChecker: {
    title: "When to Seek Professional Guidance",
    description: "Early clinical intervention plays a key role in mental and physical wellness. If you or a loved one are experiencing persistent signs, our team is here to support you.",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    imageAlt: "A patient talking with a doctor in a modern, warm consultation office, expressing a sense of trust and support.",
    items: [
      {
        icon: "warning",
        title: "Persistent Emotional Distress",
        description: "Prolonged sadness, severe mood swings, chronic anxiety, panic attacks, or overwhelming stress that disrupts daily life."
      },
      {
        icon: "spa",
        title: "Substance Dependence",
        description: "Inability to control alcohol, tobacco, or drug consumption, or experiencing physical distress when attempting to stop."
      },
      {
        icon: "health_and_safety",
        title: "Chronic Illness & Symptoms",
        description: "Uncontrolled blood pressure, fluctuations in blood sugar, chronic fatigue, or severe headaches requiring medical assessment."
      }
    ]
  },
  cta: {
    title: "Begin Your Path to Healing & Wellness",
    description: "Schedule a confidential consultation with our medical and psychiatric specialist team today.",
    buttonText: "Book a Consultation",
    footnote: "Prior bookings are recommended for in-person evaluations."
  }
};

export const proceduresData = {
  hero: {
    tagline: "Care & Support",
    title: "Clinical Treatment & Protocols",
    description: "Avtar Health Care Clinic integrates advanced neuro-psychiatry, de-addiction support, and general medicine services to provide a holistic pathway to physical and mental wellness.",
    backgroundImage: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1600&q=80"
  },
  brainSurgery: {
    title: "Psychiatric & De-Addiction Interventions",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    imageAlt: "Clinical Consultation Room",
    imageTag: "Private & Supportive Consulting",
    procedures: [
      {
        title: "Customized Psychiatric Evaluation",
        description: "Comprehensive mental status examinations to diagnose and treat mood disorders, depression, panic states, OCD, and cognitive disorders using evidence-based medical treatments."
      },
      {
        title: "Outpatient De-Addiction Support",
        description: "Tailored clinical programs focused on managing withdrawal symptoms through safe pharmacotherapy, combined with motivational counseling and relapse prevention."
      }
    ],
    quote: "Healing the mind is the first step toward reclaiming a healthy, balanced, and productive life."
  },
  spineSurgery: {
    title: "General Medicine & Family Health Focus",
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
    imageAlt: "General Medical Practice",
    imageTag: "Primary Family Medicine",
    features: [
      {
        icon: "medical_services",
        title: "Chronic Condition Monitoring",
        description: "Continuous diagnostic screening and medicine optimization for patients with diabetes, thyroid issues, and hypertension."
      },
      {
        icon: "health_and_safety",
        title: "Preventative Healthcare",
        description: "Routine physical examinations, diagnostics, and lifestyle counseling to prevent disease and support physical longevity."
      },
      {
        icon: "psychology",
        title: "Pediatric Behavioral Care",
        description: "Developmental screening and therapeutic guidance for children with ADHD, learning challenges, and behavioral changes."
      }
    ]
  },
  technologyIntegration: {
    title: "Diagnostic & Clinical Infrastructure",
    description: "We utilize standard diagnostic tools and validated rating scales to ensure high clinical precision.",
    navigation: {
      title: "Digital Brain Mapping (EEG)",
      subtitle: "Diagnostic Seizure and Sleep Profiling",
      description: "Non-invasive electroencephalogram recording to track brain activity and support evaluation of seizure disorders or sleep patterns.",
      icon: "insights"
    },
    robotics: {
      title: "Diagnostic Screening Accuracy",
      description: "Standardized psychometric rating scales and clinical interviews provide highly reliable, scientific assessments for ADHD, anxiety, and depression.",
      deviationLabel: "Clinical Assessment Reliability Index",
      deviationValue: "99.4%"
    }
  },
  patientSafety: {
    title: "Our 4-Step Patient Care Protocol",
    description: "Every treatment pathway is carefully structured to prioritize patient comfort, safety, and confidentiality.",
    ctaText: "View Clinical Standards",
    steps: [
      {
        number: "01",
        title: "Detailed History",
        description: "Thorough physical check-up and detailed psychiatric history gathering."
      },
      {
        number: "02",
        title: "Personalized Protocol",
        description: "Formulation of a customized treatment plan combining pharmacotherapy and therapy."
      },
      {
        number: "03",
        title: "Progress Evaluation",
        description: "Regular review sessions to track progress, monitor side effects, and optimize medicine dosages."
      },
      {
        number: "04",
        title: "Long-Term Wellness",
        description: "Ongoing counseling, relapse prevention support, and lifestyle guidance to sustain wellness."
      }
    ]
  },
  recovery: {
    title: "Path to Recovery & Wellness",
    description: "Restoring mental and physical health is a continuous journey. Our clinic provides the guidance, medical support, and counseling needed for lasting wellness.",
    stats: [
      { value: "Same Day", label: "Outpatient Discharge" },
      { value: "24/7", label: "Emergency Support Line" },
      { value: "98%", label: "Patient Satisfaction" }
    ]
  }
};

export const resourcesData = {
  hero: {
    title: "Patient Resources",
    description: "Access diagnostic checklists, consultation preparation guides, and clinical information to support your healthcare journey.",
    image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1600&q=80"
  },
  guides: {
    title: "Patient Consultation Guides",
    items: [
      {
        icon: "assignment",
        title: "First Visit Preparation",
        description: "Guidelines on what medical history to bring, list of current medications, and previous psychiatric prescriptions."
      },
      {
        icon: "fact_check",
        title: "Appointment Checklist",
        description: "A quick checklist of arrival times, patient details registration, and what to expect during your first visit."
      },
      {
        icon: "healing",
        title: "Ongoing Treatment Support",
        description: "Important details on adhering to medicine routines, maintaining follow-up sessions, and scheduling counseling."
      }
    ]
  },
  telehealth: {
    portal: {
      title: "Patient Care Portal",
      description: "Access your prescriptions, schedule your next follow-up consultation, and get in touch with our clinical team securely.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
    },
    telehealthCard: {
      icon: "videocam",
      title: "Virtual Consultation",
      description: "Schedule a virtual follow-up appointment with our specialists from home. Highly suitable for routine checks and counseling."
    }
  },
  administrative: {
    title: "Administrative Resources",
    items: [
      { icon: "payments", label: "Consultation & Fees" },
      { icon: "clinical_notes", label: "Prescription Requests" },
      { icon: "gavel", label: "Patient Privacy & Confidentiality" }
    ]
  },
  faqs: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Is a prior appointment required to visit the clinic?",
        answer: "Yes, we highly recommend scheduling your appointment in advance to ensure minimal waiting times and to allow our specialists to dedicate focused time to your consultation."
      },
      {
        question: "Is my psychiatric and medical data kept confidential?",
        answer: "Absolutely. Patient privacy is of utmost importance. All records, psychometric screening scores, and consultation details are kept strictly confidential."
      },
      {
        question: "What should I bring to my first visit?",
        answer: "Please bring any previous prescriptions, reports of brain mapping or laboratory tests, a list of current medicines, and a valid photo ID."
      },
      {
        question: "How long does a typical psychiatric consultation take?",
        answer: "An initial diagnostic consultation takes between 30 to 45 minutes, allowing for detailed history taking. Regular follow-ups usually take 15 to 20 minutes."
      },
      {
        question: "Do you offer online or virtual consultations?",
        answer: "Yes, we offer virtual video appointments for follow-up consults and counseling sessions, allowing you to connect with our team comfortably from home."
      }
    ]
  },
  supportCta: {
    title: "Need assistance?",
    description: "Our clinic coordinators are here to help you schedule appointments and answer any inquiries.",
    phoneLabel: "Support Line",
    phoneValue: "+91 8795028982",
    phoneIcon: "call",
    buttonText: "Contact Coordinator",
    buttonIcon: "send"
  }
};

export interface BlogEntry {
  slug: string;
  title: string;
  category: "Neuro-Psychiatry" | "De-Addiction" | "General Health" | "Therapy & Counseling";
  cardDescription: string;
  fullDescription: string;
  image: string;
  symptoms: string[];
  nonSurgical: string[];
  surgical: string[];
  recoverySteps: string[];
  faqs: { question: string; answer: string }[];
}

export const blogData: BlogEntry[] = [
  {
    slug: "psycho-sexual-disorder",
    title: "Understanding Psycho-Sexual Disorders & Clinical Care",
    category: "Neuro-Psychiatry",
    cardDescription: "A comprehensive guide on symptoms, psychological components of sexual health, and expert therapy.",
    fullDescription: "Psycho-sexual disorders can deeply impact personal relationships, self-esteem, and mental health. These concerns often stem from a combination of psychological, relationship, and physical factors. Our clinic provides a confidential, scientific, and compassionate approach to diagnosis, counselling, and medical treatments to restore confidence and relationship harmony.",
    image: "/psycho-sexual-disorder.png",
    symptoms: [
      "Erectile dysfunction or premature ejaculation with psychological root causes",
      "Loss of sexual desire (hypoactive sexual desire disorder)",
      "Performance anxiety and stress related to intimacy",
      "Pain or discomfort during intimacy (vaginismus or dyspareunia)"
    ],
    nonSurgical: [
      "Cognitive Behavioral Therapy (CBT) and psychosexual therapy",
      "Sensate focus techniques and mindfulness exercises",
      "Relationship and couples counselling to resolve intimacy blocks",
      "Stress reduction and performance anxiety management"
    ],
    surgical: [
      "Comprehensive medical and hormonal evaluations",
      "Evidence-based pharmacotherapy for erectile dysfunction or anxiety",
      "Addressing underlying psychiatric causes like depression or OCD",
      "Consistent follow-ups and medicine management"
    ],
    recoverySteps: [
      "Confidential and detailed clinical history check-up",
      "Identifying physical vs. psychological contributing factors",
      "Setting up a combined medical and psychosexual counselling plan",
      "Regular progress tracking and relationship integration support"
    ],
    faqs: [
      { question: "Are psycho-sexual disorders common?", answer: "Yes, psychosexual concerns are highly common but often underreported due to social stigma. They are highly treatable with professional help." },
      { question: "What is performance anxiety in intimacy?", answer: "Performance anxiety is a psychological block where fear of not performing well leads to physical difficulties. Counselling is very effective in resolving this." },
      { question: "How long does psychosexual therapy take?", answer: "Depending on the complexity, therapy can range from a few weeks to several months, showing progressive improvements along the way." }
    ]
  },
  {
    slug: "holistic-ayurvedic-care",
    title: "Integrating Holistic Ayurvedic Care for Mind & Body",
    category: "General Health",
    cardDescription: "Explore traditional Ayurvedic wellness, lifestyle changes, and herbal therapies for physical and mental balance.",
    fullDescription: "Holistic Ayurvedic care focuses on achieving a balance between mind, body, and consciousness. Through BAMS-certified consultations, we integrate traditional wellness principles with modern lifestyles, managing stress, chronic fatigue, and lifestyle conditions like diabetes and hypertension naturally.",
    image: "/holistic-ayurvedic-care.png",
    symptoms: [
      "Chronic fatigue, low energy levels, and persistent stress",
      "Imbalances in digestion, metabolism, or appetite",
      "Lifestyle conditions like mild hypertension or fluctuating thyroid levels",
      "Sleep issues, restlessness, and lack of mental clarity"
    ],
    nonSurgical: [
      "Personalized dietary guidelines and Ayurvedic nutrition plans",
      "Daily routine guidelines (Dinacharya) for healthy living",
      "Yoga, meditation, and pranayama (breathing exercises) for stress",
      "Natural herbal supplements and wellness formulations"
    ],
    surgical: [
      "Comprehensive Ayurvedic constitution (Prakriti) assessment",
      "Holistic consultation for lifestyle disease management",
      "Regular health monitoring and vitals tracking",
      "Coordinated care integrating modern and traditional approaches"
    ],
    recoverySteps: [
      "Detailed analysis of Prakriti (body type) and lifestyle habits",
      "Formulating a customized herbal, dietary, and routine plan",
      "Gradual detoxifying lifestyle changes and stress management",
      "Monthly wellness check-ups to track vitality and health"
    ],
    faqs: [
      { question: "What is the focus of Holistic Ayurvedic Care?", answer: "It focuses on addressing the root causes of imbalances in the body using natural diet, lifestyle routines, and herbal formulations to promote wellness." },
      { question: "Can Ayurveda help with lifestyle diseases?", answer: "Yes. Lifestyle diseases like diabetes, hypertension, and thyroid disorders respond exceptionally well to Ayurvedic lifestyle modifications and dietary care." },
      { question: "Are Ayurvedic herbs safe to take with general medicines?", answer: "Under the supervision of our qualified physician, Dr. Preeti Chaudhary, Ayurvedic treatments can be safely integrated with other therapies." }
    ]
  },
  {
    slug: "depression-and-mood-disorders",
    title: "Understanding Depression & Mood Disorders",
    category: "Neuro-Psychiatry",
    cardDescription: "A clinical guide on recognizing depressive symptoms, mood swings, and finding the right psychiatric support.",
    fullDescription: "Clinical depression and mood disorders represent significant psychiatric conditions that affect emotional regulation, sleep, and overall energy levels. Our clinic offers comprehensive diagnosis using standard psychometric profiling and personalized pharmacotherapy to restore chemical balance in the brain.",
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Persistent feelings of sadness or emptiness", "Loss of interest in hobbies and daily activities", "Significant fatigue or lack of energy", "Changes in sleep patterns or appetite"],
    nonSurgical: ["Cognitive Behavioral Therapy (CBT) sessions", "Supportive psychotherapy and stress management", "Meditation, physical exercise, and sleep hygiene", "Family support group discussions"],
    surgical: ["Standardized psychiatric evaluation & diagnosis", "Personalized antidepressant medication monitoring", "Regular medicine compliance tracking", "Periodic dosage adjustments based on progress"],
    recoverySteps: ["Detailed clinical interview and symptom assessment", "Formulating a tailored therapeutic and medical plan", "Regular bi-weekly follow-ups to track progress", "Maintenance phase and relapse prevention mapping"],
    faqs: [
      { question: "How long does it take for psychiatric medicines to work?", answer: "Most antidepressant medications require 2 to 4 weeks of consistent compliance before patients notice significant therapeutic benefits." },
      { question: "Is clinical depression curable?", answer: "Depression is highly treatable. With a combination of correct medical treatment, counseling, and lifestyle adjustments, most patients achieve complete recovery." },
      { question: "Can I stop my medicines once I feel better?", answer: "No, stopping psychiatric medicines suddenly can lead to relapses or withdrawal symptoms. Always consult Dr. Nilesh before making any changes." }
    ]
  },
  {
    slug: "alcohol-substance-de-addiction",
    title: "The Path to Sobriety: Outpatient De-Addiction",
    category: "De-Addiction",
    cardDescription: "How medically supervised detoxification and relapse-prevention therapy can guide patients safely through withdrawal.",
    fullDescription: "Overcoming alcohol and substance dependency is a challenging journey that requires medical care. Our clinic provides customized outpatient detoxification protocols to manage physical withdrawal symptoms safely, combined with behavioral counseling to build motivation and prevent relapse.",
    image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Inability to limit alcohol or substance consumption", "Physical tremors or anxiety when attempting to stop", "Neglecting social or professional responsibilities", "Strong cravings or tolerance build-up"],
    nonSurgical: ["Motivational Enhancement Therapy (MET)", "Relapse prevention training and triggers identification", "Individual counseling and behavioral monitoring", "Family education and counseling programs"],
    surgical: ["Medically supervised outpatient detoxification", "Pharmacotherapy for managing withdrawal distress", "Craving-suppressant medications management", "Regular physical health reviews (liver and vitals)"],
    recoverySteps: ["Initial physical and psychiatric dependency profiling", "Initiating the medical detoxification phase", "Transitioning to behavioral therapy and motivation sessions", "Long-term wellness follow-ups and sobriety maintenance"],
    faqs: [
      { question: "Is hospital admission mandatory for de-addiction?", answer: "Not always. We offer structured outpatient de-addiction programs that allow patients to undergo detox and counseling while residing at home." },
      { question: "What is the role of family in de-addiction?", answer: "Family support is critical. We provide specialized family counseling to help build a supportive home environment for the patient's recovery." },
      { question: "How can I prevent a relapse?", answer: "Through continuous counseling, understanding personal triggers, establishing a daily routine, and maintaining regular clinic follow-ups." }
    ]
  },
  {
    slug: "pediatric-adhd-behavior",
    title: "ADHD in Children: Clinical Signs & Support",
    category: "Neuro-Psychiatry",
    cardDescription: "Recognizing attention deficit and hyperactivity in children, and implementing effective behavioral therapy.",
    fullDescription: "Attention Deficit Hyperactivity Disorder (ADHD) is a neurodevelopmental disorder that affects focus, hyperactivity, and self-control in children. Our clinic provides standardized behavioral screening and clinical assessments to help children develop concentration, focus, and social integration skills.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Difficulty sustaining attention in school or play", "Frequent fidgeting or leaving seat in classroom", "Impulsive behaviors and interrupting others", "Forgetfulness or difficulty following instructions"],
    nonSurgical: ["Parent-Child Interaction Therapy (PCIT)", "Structured daily routine and environmental adjustments", "Behavioral reward systems and focus exercises", "School coordination and accommodation counseling"],
    surgical: ["Standardized ADHD diagnostic assessments", "Pediatric behavioral status monitoring", "Targeted pharmaceutical intervention if clinically indicated", "Periodic developmental milestone reviews"],
    recoverySteps: ["Detailed developmental history and clinical interview", "Standardized psychometric rating scales completion", "Custom behavioral and educational support plan setup", "Monthly tracking of academic focus and behavioral progress"],
    faqs: [
      { question: "Are ADHD medicines safe for young children?", answer: "Yes, when prescribed and monitored carefully by a specialist like Dr. Nilesh, medicines are safe and effective in helping children focus." },
      { question: "Can a child outgrow ADHD?", answer: "Many children learn to manage their symptoms successfully as they grow, though some focus challenges may persist into adulthood." },
      { question: "How does therapy help a child with ADHD?", answer: "Behavioral therapy teaches children organizational skills, self-regulation, and how to direct their energy productively." }
    ]
  },
  {
    slug: "chronic-migraine-management",
    title: "Managing Chronic Migraines & Severe Headaches",
    category: "General Health",
    cardDescription: "A physician's guide on identifying headache triggers, medicine management, and preventive lifestyle modifications.",
    fullDescription: "Chronic migraines and tension headaches are debilitating conditions that impact productivity and quality of life. Dr. Preeti Chaudhary offers diagnostic screening to differentiate headache profiles and implements targeted treatment regimens for acute relief and prevention.",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Severe, throbbing pain usually on one side of the head", "Increased sensitivity to light, sound, or strong odors", "Nausea or visual disturbances (aura)", "Tension tightness around forehead or neck"],
    nonSurgical: ["Identifying and documenting headache triggers (diet, sleep)", "Stress management and relaxation exercises", "Ensuring adequate hydration and balanced meal timings", "Therapeutic cold compresses and neck stretches"],
    surgical: ["Clinical diagnostic profiling of headache types", "Prescribing acute pain-relief medications", "Custom preventive pharmacotherapy regimen", "Ongoing monitoring of medicine efficacy"],
    recoverySteps: ["Detailed clinical consultation and trigger profiling", "Initiating the preventive medication plan", "Tracking headache frequency using a daily diary", "Adjusting medicines for optimal control and wellness"],
    faqs: [
      { question: "What is the difference between a migraine and a normal headache?", answer: "Migraines are typically characterized by intense, throbbing pain, often accompanied by nausea, sensitivity to light/sound, and can last from hours to days." },
      { question: "How can lifestyle changes help migraines?", answer: "Maintaining consistent sleep schedules, avoiding skipped meals, staying hydrated, and managing stress can significantly reduce migraine frequency." },
      { question: "Are pain relievers safe for daily use?", answer: "No, excessive use of over-the-counter pain relievers can lead to 'medication overuse headaches'. Always follow your physician's prescriptions." }
    ]
  },
  {
    slug: "insomnia-sleep-disorders",
    title: "Healthy Sleep: Overcoming Insomnia",
    category: "Therapy & Counseling",
    cardDescription: "Effective therapies, sleep hygiene practices, and medical evaluations to manage chronic insomnia and sleep issues.",
    fullDescription: "Chronic insomnia and sleep disturbances are closely linked with anxiety, stress, and physical health challenges. Our clinic provides scientific diagnostic evaluations and counseling support to help patients rebuild natural sleep cycles and improve daily energy.",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=800&q=80",
    symptoms: ["Difficulty falling asleep or staying asleep at night", "Waking up too early and unable to fall back asleep", "Feeling unrefreshed and fatigued during the day", "Irritability, anxiety, or focus difficulties"],
    nonSurgical: ["Cognitive Behavioral Therapy for Insomnia (CBT-I)", "Strict sleep hygiene and stimulus control instructions", "Guided relaxation, mindfulness, and breathing techniques", "Caffeine and screen-time management counseling"],
    surgical: ["Standardized sleep assessment & screening", "Evaluating underlying anxiety or medical triggers", "Short-term sleep medication management if necessary", "Regular follow-ups to transition to natural sleep"],
    recoverySteps: ["Detailed sleep diary tracking and initial consult", "Implementing strict sleep hygiene protocols", "Therapeutic counseling sessions (CBT-I)", "Gradual stabilization of natural sleep-wake cycles"],
    faqs: [
      { question: "What is sleep hygiene?", answer: "Sleep hygiene is a set of practices including maintaining a regular sleep schedule, keeping the bedroom dark/cool, and avoiding screens before bed." },
      { question: "Are sleeping pills addictive?", answer: "Some prescription sleeping pills can cause dependency if used long-term. We focus on short-term, supervised use while addressing root causes." },
      { question: "How does anxiety affect my sleep?", answer: "Anxiety keeps the brain in a state of high alert, making it difficult to relax and fall into deep sleep. Treating the underlying anxiety resolves the sleep issue." }
    ]
  }
];

export const blogPageData = {
  listHero: {
    tagline: "Medical Library & Treatment Guides",
    title: "Psychiatric & Family Health Portal",
    description: "Access complete clinical guides, treatment options, and wellness resources curated by our medical specialists.",
    searchPlaceholder: "Search conditions, symptoms, or wellness topics...",
    backgroundImage: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1600&q=80"
  },
  categories: [
    { key: "All", label: "All Specialties" },
    { key: "Neuro-Psychiatry", label: "Neuro-Psychiatry" },
    { key: "De-Addiction", label: "De-Addiction" },
    { key: "General Health", label: "General Health" },
    { key: "Therapy & Counseling", label: "Therapy & Counseling" }
  ],
  detailPage: {
    specialistTagline: "Primary Specialist",
    specialistSubtitle: "Meet your dedicated medical expert.",
    specialistBadge: "Board Certified",
    journeyTagline: "Your Recovery Journey",
    journeySubtitle: "Guided clinical care every step of the way.",
    journeySteps: [
      { num: "01", name: "Initial Consultation", desc: "Thorough physical and psychiatric check-up to understand your symptoms and medical history." },
      { num: "02", name: "Clinical Assessment", desc: "Standardized diagnostic scales, psychometrics, or digital brain mapping where indicated." },
      { num: "03", name: "Treatment Regimen", desc: "Custom pharmaceutical treatments, counseling schedules, or de-addiction protocols." },
      { num: "04", name: "Relapse & Wellness Care", desc: "Ongoing counseling, wellness checks, and support to maintain health and recovery." }
    ],
    ctaTitle: "Ready to take the next step toward wellness?",
    ctaSubtitle: "Schedule a confidential consultation with our specialist team today.",
    ctaBookBtn: "Book Your Appointment",
    ctaCallBtn: "Call Support Desk",
    ctaPhone: "+91 8795028982",
    nonSurgicalTitle: "Counseling & Therapy",
    nonSurgicalSubtitle: "Psychotherapy & Behavioral Interventions",
    nonSurgicalDesc: "Evidence-based counseling, cognitive behavioral therapy (CBT), and motivation enhancement therapy to support mental wellness.",
    surgicalTitle: "Medical & Clinical Care",
    surgicalSubtitle: "Pharmacotherapy & Outpatient Interventions",
    surgicalDesc: "Medically supervised pharmaceutical management, outpatient detoxification, and advanced clinical assessments overseen by specialists."
  }
};

export const bookingPageData = {
  hero: {
    tagline: "Secure Consultation Booking",
    title: "Schedule Your Clinical Consultation",
    description: "Take the first step towards recovery. Provide your details below, and our coordinator will guide you through the process.",
    backgroundImage: "https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?auto=format&fit=crop&w=1600&q=80"
  },
  preparation: {
    title: "First-Visit Preparation Guide",
    description: "To ensure a comprehensive clinical evaluation, please prepare the following for your appointment:",
    items: [
      { icon: "clinical_notes", title: "Medical Records", text: "Bring copies of your previous clinical histories, summaries, or discharge papers." },
      { icon: "biotech", title: "Diagnostic Imaging", text: "Recent MRIs, CT scans, or X-rays. If on CD, please bring the disc along with written reports." },
      { icon: "medication", title: "Current Medications", text: "A detailed list of all prescription and over-the-counter medications and dosages." },
      { icon: "badge", title: "Insurance & ID", text: "Valid government-issued photo identification and your current health insurance cards." }
    ]
  }
};

export interface DoctorProfile {
  slug: string;
  name: string;
  tagline: string;
  image: string;
  badgeTitle: string;
  badgeDesc: string;
  bulletPoints: { icon: string; text: string }[];
  biography: string;
  experience: string[];
  education: string[];
  spineEndoscopy: string[];
  projectsFieldWork: string[];
  publications: string[];
  conferences: string[];
  paperPresentations: string[];
  leadershipRoles: string[];
  associations: string[];
  tabLabel?: string;
  clinicalFocusTitle?: string;
}

export const doctorsData: DoctorProfile[] = [
  {
    slug: "dr-nilesh-kumar-kanaujiya",
    name: "Dr. Nilesh Kumar Kanaujiya, MBBS, MD, MIPS",
    tagline: "Consultant Neuro-psychiatrist & De-addiction Specialist",
    image: "/dr-nilesh-kumar-kanaujiya.jpeg",
    badgeTitle: "MD Neuro-Psychiatry",
    badgeDesc: "Consultant Psychiatrist",
    bulletPoints: [
      { icon: "verified", text: "Specialist in Psychiatry & De-Addiction" },
      { icon: "school", text: "Assistant Professor, Integral Medical College" },
      { icon: "groups", text: "Member, Indian Psychiatry Society (MIPS)" }
    ],
    biography: "Dr. Nilesh Kumar Kanaujiya is a highly regarded consultant neuro-psychiatrist and de-addiction specialist based in Lucknow. With extensive clinical experience across leading medical institutions, he has served as Assistant Professor at Integral Medical College and Ex-Senior Consultant at Nirvan De-addiction Hospital. Dr. Kanaujiya is dedicated to offering personalized, compassionate treatments for clinical depression, anxiety, OCD, schizophrenia, child behavior disorders (ADHD, Autism), and substance addictions.",
    experience: [
      "Assistant Professor of Psychiatry at Integral Medical College, Lucknow",
      "Ex-Assistant Professor at Dr. K.N.S. Memorial Hospital",
      "Ex-Senior Consultant at Nirvan De-addiction Hospital",
      "Ex-Senior Resident at Era Medical College, Lucknow"
    ],
    education: [
      "Doctor of Medicine (M.D.) in Psychiatry / Neuro-psychiatry",
      "Bachelor of Medicine and Bachelor of Surgery (MBBS)",
      "Membership of the Indian Psychiatry Society (MIPS)"
    ],
    spineEndoscopy: [
      "Expertise in Outpatient Detoxification & Addiction Recovery",
      "Specialization in Cognitive Behavioral Therapy (CBT) Integration",
      "Advanced screening and management of Child ADHD & behavioral issues"
    ],
    projectsFieldWork: [
      "Director, Avtar Community Mental Health & De-addiction campaigns.",
      "Conducted free psychiatric check-up and counseling camps in Lucknow."
    ],
    publications: [
      "Research publications on outpatient de-addiction and psychiatric medicine.",
      "Contributions to clinical studies on mood disorders and adolescent health."
    ],
    conferences: [
      "Regular participant and speaker at the Indian Psychiatry Society annual meets.",
      "Presenter at state-level neuro-psychiatry seminars."
    ],
    paperPresentations: [
      "'Outpatient Management of Alcohol Withdrawal Syndrome' — State Psychiatry Con",
      "'Behavioral Interventions in Pediatric ADHD' — Regional Child Health Symposium"
    ],
    leadershipRoles: [
      "Chief Medical Director, Avtar Health Care Clinic",
      "Lead Advisor, Avtar Rehabilitation & Counseling Services"
    ],
    associations: [
      "Member, Indian Psychiatry Society (MIPS)",
      "Member, Indian Medical Association (IMA)"
    ],
    tabLabel: "Clinical Profile & Psychiatry Focus",
    clinicalFocusTitle: "Psychiatric & De-addiction Focus"
  },
  {
    slug: "dr-preeti-chaudhary",
    name: "Dr. Preeti Chaudhary, BAMS",
    tagline: "Holistic Ayurvedic Care",
    image: "/dr-preeti-chaudhary.jpeg",
    badgeTitle: "BAMS",
    badgeDesc: "General Physician",
    bulletPoints: [
      { icon: "verified", text: "General Medicine & Family Health" },
      { icon: "clinical_notes", text: "Lifestyle Disease Management" },
      { icon: "health_and_safety", text: "Holistic Health Consultations" }
    ],
    biography: "Dr. Preeti Chaudhary is an experienced General Physician dedicated to providing comprehensive family medicine and preventative healthcare. She specializes in managing lifestyle diseases like diabetes, hypertension, and thyroid disorders, while offering holistic wellness and nutritional consultations to support complete family health.",
    experience: [
      "General Physician at Avtar Health Care Clinic, Lucknow (2022 - Present)",
      "Consultant Physician in leading family healthcare clinics in Lucknow"
    ],
    education: [
      "Bachelor of Ayurvedic Medicine and Surgery (BAMS)",
      "Specialized training in Family Medicine & Clinical Wellness"
    ],
    spineEndoscopy: [
      "Clinical Management of Diabetes, Hypertension, and Lifestyle Disorders",
      "Family Medicine & Preventative Health Screenings",
      "Holistic and Ayurvedic Medical Consultation"
    ],
    projectsFieldWork: [
      "Lead Coordinator, Avtar Family Wellness Initiatives.",
      "Conducted free blood pressure and diabetes screening drives in Kaushalpuri and Khargapur."
    ],
    publications: [
      "Clinical articles on integrating traditional and modern approaches to chronic disease management."
    ],
    conferences: [
      "Attended national seminars on Family Medicine and Ayurvedic Practice."
    ],
    paperPresentations: [
      "'Lifestyle Modifications in Managing Type-2 Diabetes' — Family Medicine Forum"
    ],
    leadershipRoles: [
      "Head of General Medicine and Wellness, Avtar Clinic"
    ],
    associations: [
      "Member, Indian Medical Association (IMA)"
    ],
    tabLabel: "Clinical Profile & General Medicine",
    clinicalFocusTitle: "General Medicine & Family Health Focus"
  }
];

export const aboutData = {
  hero: {
    tagline: "About Avtar Clinic",
    title: "About Us",
    description: "Learn about Avtar Health Care Clinic, our mission, our values, and the expert clinical team dedicated to your recovery.",
    backgroundImage: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1600&q=80"
  },
  mission: {
    tagline: "Our Core Mission",
    title: "Dedicated to Excellence in Psychiatric & Family Health Care",
    description: "At Avtar Health Care Clinic, our mission is to provide world-class, comprehensive psychiatric, de-addiction, and family medicine services. We combine evidence-based medicine with compassionate, patient-centered care to heal minds, restore physical health, and enhance the overall quality of life.",
    values: [
      {
        title: "Clinical Excellence",
        description: "Employing validated diagnostic tools and personalized treatment plans for accurate recovery.",
        icon: "biotech"
      },
      {
        title: "Patient Confidentiality",
        description: "Providing a safe, private environment where patients can discuss their health with complete peace of mind.",
        icon: "diversity_1"
      },
      {
        title: "Holistic Wellness",
        description: "Coordinating mental and physical healthcare to support long-term, complete recovery.",
        icon: "clinical_notes"
      }
    ]
  },
  doctorsSection: {
    tagline: "Meet Our Specialists",
    title: "Led by Renowned Medical Practitioners",
    description: "Our clinic is directed by Dr. Nilesh Kumar Kanaujiya and Dr. Preeti Chaudhary, combining psychiatry and general medicine for complete care."
  },
  facility: {
    tagline: "Our Practice Facility",
    title: "A Secure and Healing Environment",
    description: "Avtar Clinic is located in Gomti Nagar, Lucknow, featuring private consultation rooms and a welcoming space designed to protect patient privacy.",
    items: [
      "Private Consultation Rooms",
      "Digital Brain Mapping (EEG)",
      "Standardized Psychometric Testing",
      "Comfortable Waiting Areas"
    ],
    image: "/therapy-room.png"
  }
};

export const contactData = {
  hero: {
    tagline: "Get in Touch",
    title: "Contact Us",
    description: "Have questions or need to make an inquiry? Find our location details, call our desk, or send us a message directly.",
    backgroundImage: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?auto=format&fit=crop&w=1600&q=80"
  },
  form: {
    title: "Send Us a Message",
    description: "Fill out the form below, and our coordinator will respond to your query as soon as possible.",
    buttonText: "Submit Message",
    fields: {
      name: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      subject: "Subject",
      message: "Your Message"
    }
  }
};

export interface GalleryItem {
  src: string;
  title: string;
  category: "Facility" | "Technology" | "Diagnostics" | "Patient Care";
  size: "normal" | "wide" | "tall" | "large";
  description: string;
}

export const galleryData = {
  hero: {
    tagline: "Visual Tour",
    title: "Our Gallery",
    description: "Take a visual tour of Avtar Health Care Clinic, highlighting our consultation suites, brain wave diagnostics, and patient care rooms.",
    backgroundImage: "/serene-wellness.png"
  },
  categories: [
    { key: "All", label: "All Photos" },
    { key: "Facility", label: "Our Facility" },
    { key: "Technology", label: "Technology" },
    { key: "Diagnostics", label: "Diagnostics" },
    { key: "Patient Care", label: "Patient Care" }
  ],
  items: [
    {
      src: "/serene-wellness.png",
      title: "Serene Mindfulness Landscape",
      category: "Patient Care",
      size: "wide",
      description: "A calming nature environment symbolizing mental peace, clarity, and mindfulness."
    },
    {
      src: "/therapy-room.png",
      title: "Therapy Consultation Room",
      category: "Facility",
      size: "normal",
      description: "A comfortable and warm space designed for private counseling, therapy sessions, and psychiatric consultation."
    },
    {
      src: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=800&q=80",
      title: "EEG Brain Mapping Room",
      category: "Technology",
      size: "large",
      description: "Advanced digital EEG equipment used for diagnosing sleep disorders, seizures, and cognitive activity."
    },
    {
      src: "/dr-nilesh-kumar-kanaujiya.jpeg",
      title: "Dr. Nilesh Kumar Kanaujiya",
      category: "Patient Care",
      size: "tall",
      description: "Dr. Nilesh in his private consultation room conducting a patient review."
    },
    {
      src: "/dr-preeti-chaudhary.jpeg",
      title: "Dr. Preeti Chaudhary",
      category: "Patient Care",
      size: "normal",
      description: "Dr. Preeti providing consultation and diagnostic review for family medicine."
    },
    {
      src: "/stitch/asset-07.jpg",
      title: "Therapeutic Consultation",
      category: "Patient Care",
      size: "wide",
      description: "Providing cognitive behavioral therapy and counseling to patients and their families."
    },
    {
      src: "/brain-wellness.png",
      title: "Holistic Mental Growth",
      category: "Technology",
      size: "normal",
      description: "Symbolic illustration of brain wellness, showing cognitive recovery, growth, and psychiatric healing."
    }
  ] as GalleryItem[]
};
