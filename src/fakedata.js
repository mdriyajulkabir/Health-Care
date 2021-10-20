const fakedata = [
    {
        departmentName: "Dental Care",
        description: "Dentistry, the professional care of teeth, including professional oral hygiene and dental surgery",
        availableDoctor: 3,
        id: 1,
        url: "https://images.unsplash.com/photo-1551601651-71a596031b84?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=575&q=80"
      },
    {
        departmentName: "Baby Care",
        description: "Bringing home a new baby is exciting, fun, and sometimes scary, especially if you are a first-time parent",
        availableDoctor: 5,
        id: 2,
        url: "https://media.istockphoto.com/photos/deep-in-dreamland-picture-id1095811396?s=612x612"
      },
    {
        departmentName: "Precise Diagnosis",
        description: "Getting diagnosis right has always been the cornerstone of healthcare",
        availableDoctor: 2,
        id: 3,
        url: "https://as1.ftcdn.net/v2/jpg/02/37/60/50/500_F_237605015_wWxm6JRkaNYjJdD0wqvFZOhHUU0S7N1u.jpg"
      },
    {
        departmentName: "Gynecological",
        description: "The resurgence of COVID-19 cases following the emergence of the delta variant has strained hospitals and healthcare systems across the country and has started to impact our region as well",
        availableDoctor: 6,
        id: 4,
        url: "https://image.freepik.com/free-photo/pregnant-woman-with-ultrasound-photo-sitting-bed_1303-27132.jpg"
      },
    {
        departmentName: "Cardiology",
        description: "When a patient has a PFO, or hole in the heart, doctors are left with a decision: to close or not to close.",
        availableDoctor: 5,
        id: 5,
        url: "https://as1.ftcdn.net/v2/jpg/02/33/75/52/1000_F_233755218_MyiwNDELehYutwyE1RRIro8ysHO4z6PB.jpg"
      },
    {
        departmentName: "Neurology",
        description: "Our day-to-day lives as trainees are replete with personal and clinical experiences that—when shared—offer the opportunity for others to learn and reflect as well.",
        availableDoctor: 6,
        id: 6,
        url: "https://as1.ftcdn.net/v2/jpg/01/67/78/22/1000_F_167782221_vX6dGPAjrcyMXdOdoBacMWr62McnXQlJ.jpg"
      },
    {
        departmentName: "Medicine & Diabetes",
        description: "There is a well-known terminology disparity between laypeople and health professionals. Using the Unified Medical Language System (UMLS)",
        availableDoctor: 4,
        id: 7,
        url: "https://images.unsplash.com/photo-1542884748-2b87b36c6b90?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
      },
    {
        departmentName: "Skin & Sex",
        description: "A significantly decreased skin extensibility time in the pre-menstrual phase was found (25th day) when compared with the 10th day in the young group, while the older one did not reveal significant changes",
        availableDoctor: 3,
        id: 8,
        url: "https://images.unsplash.com/photo-1564594228700-4b5ae46c70c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=581&q=80"
      },
    {
        departmentName: "Test Covid-19",
        description: "The world continues to face a life-threatening viral pandemic. The virus underlying the COVID-19 disease, SARS-CoV-2, has caused over 98 million confirmed cases and 2.2 million deaths since January 2020.",
        availableDoctor: 6,
        id: 9,
        url: "https://media.istockphoto.com/photos/corona-virus-covid19-blue-picture-id1218271661?s=612x612"
      },
      
]








const doctors = [
  {
    name: 'Dr. Mahibbur Rashid',
    subject: 'Heart specialist',
    qualification: 'MBBS (Dhaka), D-Card (D.U) M.D (Cardiology)',
    time: '6.00 PM to 8.30 PM, Friday Closed',
    id: 1,
    doctor_url: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  },
  {
    name: 'Prof.Dr.Zehad Khan',
    subject: 'Heart specialist',
    qualification: 'MCPS, FCPS, FRCP (Glasgow), FACC (USA)',
    time: '7.00 PM to 8.30 PM, Friday Closed',
    id: 2,
    doctor_url: 'https://image.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg'
  },
  {
    name: 'Dr. Sakina Anwar',
    subject: 'Tnternal Medicine',
    qualification: 'MBBS,MD.',
    time: '10.00 AM to 1.30 PM, Friday Closed',
    id: 3,
    doctor_url: 'https://image.freepik.com/free-photo/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254.jpg'
  },
  {
    name: 'Professor Dr. Md. Lutful Kabir',
    subject: 'Medicine',
    qualification: 'MRCP (UK), FRCP (London).',
    time: '4.00 PM to 7.30 PM, Friday Closed',
    id: 4,
    doctor_url: 'https://image.freepik.com/free-photo/portrait-smiling-male-doctor_171337-1532.jpg'
  },
  {
    name: 'Professor Dr. Masuda Begum Ranu',
    subject: 'Gynecology & Obstetrics',
    qualification: 'FCPS (Gynae & Obs), D-Med (UK).',
    time: '4.00 PM to 8.30 PM, Friday Closed',
    id: 5,
    doctor_url: 'https://image.freepik.com/free-photo/female-doctor-hospital-with-stethoscope_23-2148827775.jpg'
  },
  {
    name: 'Prof. Dr. S M. Siddiqur Rahman',
    subject: 'Interventional & Clinical Cardiology',
    qualification: ' MBBS (Dhaka), D-Card (D.U) M.D (Cardiology)',
    time: '11.00 AM to 1.00 PM, Friday Closed',
    id: 6,
    doctor_url: 'https://image.freepik.com/free-photo/african-american-medical-doctor-man-with-mask-isolated-gray-background_231208-2230.jpg'
  },
  {
    name: 'Prof. Dr. Md. Kamrul Ahsan',
    subject: 'Spine Surgery',
    qualification: ' MBBS (Dhaka), D-Card (D.U) M.D (Surgery)',
    time: '4.00 PM to 1.00 PM, Friday Closed',
    id: 7,
    doctor_url: 'https://image.freepik.com/free-photo/healthcare-workers-medicine-covid-19-pandemic-self-quarantine-concept-smiling-attractive-doctor-scrubs-glasses-stethoscope-neck-cross-arms-chest-ready-help-patients_1258-58772.jpg'
  },
  {
    name: 'Professor Dr. Mainul Haque Sarker',
    subject: 'Neuro & Spine Surgery',
    qualification: ' MBBS (Dhaka), D-Card (D.U) M.D (Surgery)',
    time: '7.00 PM to 10.00 PM, Friday Closed',
    id: 8,
    doctor_url: 'https://img.freepik.com/free-photo/cheerful-doctor-gesturing-thumb-up_23-2147896156.jpg?size=338&ext=jpg'
  },
  {
    name: 'Professor Dr. M. Ferdous',
    subject: 'Skin, Allergy & VD Specialist',
    qualification: ' MBBS (USA), MD (Dermatology)',
    time: '4.00 PM to 7.00 PM, Friday Closed',
    id: 9,
    doctor_url: 'https://image.freepik.com/free-photo/smiling-adult-slavic-man-doctor-uniform-with-stethoscope-thumbing-up_141793-124175.jpg'
  },
  {
    name: 'Dr. Mrs. Fida Hassan Laboni',
    subject: 'Back Pain',
    qualification: ' BSPT, SRP, MS (Physio), Ph.D.',
    time: '4.00 PM to 7.00 PM, Friday Closed',
    id: 10,
    doctor_url: 'https://image.freepik.com/free-photo/smiling-young-female-doctor-wearing-medical-robe-with-stethoscope-holding-paper-question-note-showing-thumb-up-isolated-green-background_141793-118920.jpg'
  },
  {
    name: 'Dr. Afsana Hoqus',
    subject: 'Neurology & Medicine',
    qualification: 'FCPS, FRCP, FACP (USA), DCN(London)',
    time: '9.00 PM to 12.00 AM, Friday Closed',
    id: 11,
    doctor_url: 'https://image.freepik.com/free-photo/annoyed-young-pretty-caucasian-girl-doctor-uniform-with-stethoscope-holding-question-note-keeping-hand-open_141793-124457.jpg'
  },
  {
    name: 'Dr. Mrs. Arobi Dil',
    subject: 'Gastrenterology & Liver',
    qualification: 'FCPS, Fellowship Gastroenterology & Hepatology.',
    time: '9.00 PM to 12.00 AM, Friday Closed',
    id: 12,
    doctor_url: 'https://image.freepik.com/free-photo/annoyed-young-pretty-caucasian-girl-doctor-uniform-with-stethoscope-holding-question-note-keeping-hand-open_141793-124457.jpg'
  }
]