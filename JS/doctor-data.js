const doctors = [

        {
            name: "Dr. Priya Sharma",
            image: "../images/doctors2.jpg",
            speciality: "cardiology",
            specialityName: "Cardiologist",
            clinic: "Sunrise Medical Center New Delhi, Delhi",
            location: "New Delhi, India",
            experience: 10,
            rating: 4.9,
            reviews: 124,
            slots: ["10:00 AM", "11:30 AM", "02:00 PM"],
            description: "Dr. Priya Sharma is an experienced cardiologist providing personalized and trusted heart care to patients.",

            specializations: [
                "Heart Care",
                "Cardiology",
                "ECG",
                "Cardiac Care"
            ],

            about: "Dr. Priya Sharma is a qualified cardiologist with more than 10 years of experience in diagnosing and treating heart-related conditions.",

            education: [
                {
                    degree: "MBBS",
                    college: "AIIMS New Delhi"
                },
                {
                    degree: "MD - Cardiology",
                    college: "Delhi Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "10:00 AM - 2:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "10:00 AM - 2:00 PM"
                },
                {
                    day: "Friday",
                    time: "4:00 PM - 8:00 PM"
                }
            ]
        },

        {
            name: "Dr. Amit Verma",
            image: "../images/doc2.jpg",
            speciality: "dental",
            specialityName: "Dentist",
            clinic: "Smile Care Hospital Gurgaon, Haryana",
            location: "Gurgaon, Haryana",
            experience: 8,
            rating: 4.8,
            reviews: 24,
            slots: ["09:00 AM", "11:30 AM", "01:00 PM"],
            description: "Dr. Amit Verma is an experienced dentist providing comfortable and personalized dental care for patients of all ages.",

            specializations: [
                "Dental Care",
                "Root Canal",
                "Teeth Cleaning",
                "Cosmetic Dentistry"
            ],

            about: "Dr. Amit Verma specializes in preventive and restorative dental care. He focuses on maintaining healthy teeth and providing comfortable treatment with modern dental techniques.",

            education: [
                {
                    degree: "BDS",
                    college: "Government Dental College"
                },
                {
                    degree: "MDS - Dentistry",
                    college: "Delhi Dental University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "9:00 AM - 1:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "11:00 AM - 3:00 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Neha Kapoor",
            image: "../images/doc4.jpg",
            speciality: "dermatology",
            specialityName: "Dermatologist",
            clinic: "Skin & Care Clinic Noida, Uttar Pradesh",
            location: "Noida, Uttar Pradesh",
            experience: 6,
            rating: 4.7,
            reviews: 86,
            slots: ["09:30 AM", "12:30 PM", "03:00 PM"],
            description: "Dr. Neha Kapoor provides specialized skin, hair and cosmetic dermatology care using modern treatment methods.",

            specializations: [
                "Skin Care",
                "Acne Treatment",
                "Hair Care",
                "Cosmetic Dermatology"
            ],

            about: "Dr. Neha Kapoor is a skilled dermatologist with experience in treating common skin and hair conditions. She believes in personalized treatment plans based on every patient's needs.",

            education: [
                {
                    degree: "MBBS",
                    college: "Lady Hardinge Medical College"
                },
                {
                    degree: "MD - Dermatology",
                    college: "Delhi Medical University"
                }
            ],

            availability: [
                {
                    day: "Tuesday",
                    time: "9:30 AM - 1:30 PM"
                },
                {
                    day: "Thursday",
                    time: "12:30 PM - 4:30 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Rohan Gupta",
            image: "../images/doc3.jpg",
            speciality: "general",
            specialityName: "General Physician",
            clinic: "Health Plus Clinic Faridabad, Haryana",
            location: "Faridabad, Haryana",
            experience: 5,
            rating: 4.6,
            reviews: 72,
            slots: ["08:00 AM", "10:30 AM", "01:30 PM"],
            description: "Dr. Rohan Gupta provides comprehensive primary healthcare and focuses on preventive and general medical care.",

            specializations: [
                "General Medicine",
                "Preventive Care",
                "Fever Treatment",
                "Health Checkup"
            ],

            about: "Dr. Rohan Gupta provides primary healthcare services for common illnesses and routine health concerns. He focuses on early diagnosis, prevention and overall well-being.",

            education: [
                {
                    degree: "MBBS",
                    college: "Maulana Azad Medical College"
                },
                {
                    degree: "MD - General Medicine",
                    college: "Delhi Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "8:00 AM - 12:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "10:30 AM - 2:30 PM"
                },
                {
                    day: "Friday",
                    time: "1:30 PM - 5:30 PM"
                }
            ]
        },

        {
            name: "Dr. Anjali Mehta",
            image: "../images/doc5.jpg",
            speciality: "neurology",
            specialityName: "Neurologist",
            clinic: "Neuro Care Hospital Pune, Maharashtra",
            location: "Pune, Maharashtra",
            experience: 12,
            rating: 4.9,
            reviews: 156,
            slots: ["10:00 AM", "01:00 PM", "04:00 PM"],
            description: "Dr. Anjali Mehta specializes in neurological care and provides personalized treatment for brain and nerve conditions.",

            specializations: [
                "Neurology",
                "Migraine Care",
                "Brain Health",
                "Nerve Disorders"
            ],

            about: "Dr. Anjali Mehta is an experienced neurologist who focuses on diagnosing and treating neurological conditions. She provides patient-centered care using modern diagnostic approaches.",

            education: [
                {
                    degree: "MBBS",
                    college: "Seth GS Medical College"
                },
                {
                    degree: "MD - Neurology",
                    college: "Pune Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "10:00 AM - 2:00 PM"
                },
                {
                    day: "Thursday",
                    time: "1:00 PM - 5:00 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Rahul Singh",
            image: "../images/doc6.jpg",
            speciality: "orthopedics",
            specialityName: "Orthopedic Specialist",
            clinic: "Ortho Care Hospital Mumbai, Maharashtra",
            location: "Mumbai, Maharashtra",
            experience: 15,
            rating: 4.8,
            reviews: 132,
            slots: ["09:00 AM", "12:00 PM", "03:30 PM"],
            description: "Dr. Rahul Singh provides expert orthopedic care for bones, joints, muscles and movement-related conditions.",

            specializations: [
                "Joint Care",
                "Bone Health",
                "Sports Injuries",
                "Arthritis Treatment"
            ],

            about: "Dr. Rahul Singh has extensive experience in orthopedic treatment and specializes in joint, bone and sports-related conditions. He focuses on helping patients improve mobility and quality of life.",

            education: [
                {
                    degree: "MBBS",
                    college: "King George Medical University"
                },
                {
                    degree: "MS - Orthopedics",
                    college: "Mumbai Medical University"
                }
            ],

            availability: [
                {
                    day: "Tuesday",
                    time: "9:00 AM - 1:00 PM"
                },
                {
                    day: "Thursday",
                    time: "12:00 PM - 4:00 PM"
                },
                {
                    day: "Saturday",
                    time: "9:30 AM - 1:30 PM"
                }
            ]
        },

        {
            name: "Dr. Sneha Patel",
            image: "../images/doc7.jpg",
            speciality: "pediatrics",
            specialityName: "Pediatrician",
            clinic: "Child Care Clinic Bangalore, Karnataka",
            location: "Bangalore, Karnataka",
            experience: 9,
            rating: 4.9,
            reviews: 110,
            slots: ["10:30 AM", "01:30 PM", "04:30 PM"],
            description: "Dr. Sneha Patel provides compassionate healthcare for children with a focus on healthy growth and development.",

            specializations: [
                "Child Care",
                "Child Nutrition",
                "Vaccination",
                "Pediatric Health"
            ],

            about: "Dr. Sneha Patel specializes in pediatric healthcare and provides preventive and medical care for children. She focuses on creating a comfortable environment for young patients.",

            education: [
                {
                    degree: "MBBS",
                    college: "Bangalore Medical College"
                },
                {
                    degree: "MD - Pediatrics",
                    college: "Karnataka Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "10:30 AM - 2:30 PM"
                },
                {
                    day: "Wednesday",
                    time: "1:30 PM - 5:30 PM"
                },
                {
                    day: "Friday",
                    time: "4:30 PM - 7:30 PM"
                }
            ]
        },

        {
            name: "Dr. Arjun Malhotra",
            image: "../images/doc8.jpg",
            speciality: "cardiology",
            specialityName: "Cardiologist",
            clinic: "Heart Care Hospital Chennai, Tamil Nadu",
            location: "Chennai, Tamil Nadu",
            experience: 18,
            rating: 4.8,
            reviews: 145,
            slots: ["09:30 AM", "12:30 PM", "03:00 PM"],
            description: "Dr. Arjun Malhotra is a senior cardiologist specializing in advanced heart care and cardiovascular treatment.",

            specializations: [
                "Heart Care",
                "Cardiology",
                "ECG",
                "Cardiac Treatment"
            ],

            about: "Dr. Arjun Malhotra is a senior cardiologist with extensive experience in cardiovascular care. He focuses on accurate diagnosis and personalized treatment for heart-related conditions.",

            education: [
                {
                    degree: "MBBS",
                    college: "Madras Medical College"
                },
                {
                    degree: "DM - Cardiology",
                    college: "Chennai Medical University"
                }
            ],

            availability: [
                {
                    day: "Tuesday",
                    time: "9:30 AM - 1:30 PM"
                },
                {
                    day: "Thursday",
                    time: "12:30 PM - 4:30 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Kavita Rao",
            image: "../images/doc9.jpg",
            speciality: "dermatology",
            specialityName: "Dermatologist",
            clinic: "Skin & Care Clinic Kolkata, West Bengal",
            location: "Kolkata, West Bengal",
            experience: 11,
            rating: 4.7,
            reviews: 91,
            slots: ["10:00 AM", "01:00 PM", "05:00 PM"],
            description: "Dr. Kavita Rao provides specialized dermatological care for skin, hair and cosmetic concerns.",

            specializations: [
                "Skin Care",
                "Acne Treatment",
                "Hair Treatment",
                "Cosmetic Care"
            ],

            about: "Dr. Kavita Rao provides personalized dermatology care for various skin and hair conditions. She focuses on safe and effective treatment plans.",

            education: [
                {
                    degree: "MBBS",
                    college: "Medical College Kolkata"
                },
                {
                    degree: "MD - Dermatology",
                    college: "West Bengal Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "10:00 AM - 2:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "1:00 PM - 5:00 PM"
                },
                {
                    day: "Friday",
                    time: "5:00 PM - 8:00 PM"
                }
            ]
        },

        {
            name: "Dr. Vikram Joshi",
            image: "../images/doc10.jpg",
            speciality: "orthopedics",
            specialityName: "Orthopedic Specialist",
            clinic: "Ortho Care Hospital Noida, Uttar Pradesh",
            location: "Noida, Uttar Pradesh",
            experience: 20,
            rating: 4.9,
            reviews: 178,
            slots: ["08:30 AM", "12:00 PM", "04:30 PM"],
            description: "Dr. Vikram Joshi is a senior orthopedic specialist providing advanced care for bones, joints and mobility conditions.",

            specializations: [
                "Joint Replacement",
                "Orthopedics",
                "Sports Injuries",
                "Bone Care"
            ],

            about: "Dr. Vikram Joshi is an experienced orthopedic specialist with more than 20 years of experience. He specializes in joint and bone conditions and advanced orthopedic treatment.",

            education: [
                {
                    degree: "MBBS",
                    college: "King George Medical University"
                },
                {
                    degree: "MS - Orthopedics",
                    college: "Delhi Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "8:30 AM - 12:30 PM"
                },
                {
                    day: "Wednesday",
                    time: "12:00 PM - 4:00 PM"
                },
                {
                    day: "Friday",
                    time: "4:30 PM - 8:00 PM"
                }
            ]
        },

        {
            name: "Dr. Aditya Sharma",
            image: "../images/doc11.jpg",
            speciality: "cardiology",
            specialityName: "Cardiologist",
            clinic: "Life Heart Hospital Delhi, Delhi",
            location: "Delhi, India",
            experience: 14,
            rating: 4.8,
            reviews: 118,
            slots: ["09:00 AM", "12:00 PM", "04:00 PM"],
            description: "Dr. Aditya Sharma provides comprehensive cardiovascular care with a focus on prevention and long-term heart health.",

            specializations: [
                "Heart Care",
                "Cardiology",
                "ECG",
                "Preventive Cardiology"
            ],

            about: "Dr. Aditya Sharma specializes in cardiovascular health and preventive cardiology. He focuses on early diagnosis and long-term management of heart conditions.",

            education: [
                {
                    degree: "MBBS",
                    college: "AIIMS New Delhi"
                },
                {
                    degree: "MD - Cardiology",
                    college: "Delhi Medical University"
                }
            ],

            availability: [
                {
                    day: "Tuesday",
                    time: "9:00 AM - 1:00 PM"
                },
                {
                    day: "Thursday",
                    time: "12:00 PM - 4:00 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Mehul Shah",
            image: "../images/doc12.jpg",
            speciality: "cardiology",
            specialityName: "Cardiologist",
            clinic: "Royal Heart Clinic Mumbai, Maharashtra",
            location: "Mumbai, Maharashtra",
            experience: 14,
            rating: 4.9,
            reviews: 196,
            slots: ["10:00 AM", "01:30 PM", "05:00 PM"],
            description: "Dr. Mehul Shah is a senior cardiologist providing advanced heart care and personalized treatment for cardiovascular conditions.",

            specializations: [
                "Heart Care",
                "Cardiology",
                "ECG",
                "Preventive Cardiology"
            ],
            about: "Dr. Mehul Shah is an experienced cardiologist with a focus on advanced cardiovascular care. He provides personalized treatment plans for patients with heart conditions.",

            education: [
                {
                    degree: "MBBS",
                    college: "Grant Medical College"
                },
                {
                    degree: "MD - Cardiology",
                    college: "Mumbai Medical University"
                }
            ],
            availability: [
                {
                    day: "Monday",
                    time: "10:00 AM - 2:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "1:30 PM - 5:30 PM"
                },
                {
                    day: "Friday",
                    time: "9:00 AM - 1:00 PM"
                }
            ]
        },

        {
            name: "Dr. Tanya Kapoor",
            image: "../images/doc13.jpg",
            speciality: "neurology",
            specialityName: "Neurologist",
            clinic: "Brain Care Center Noida, Uttar Pradesh",
            location: "Noida, Uttar Pradesh",
            experience: 5,
            rating: 4.7,
            reviews: 63,
            slots: ["09:30 AM", "12:30 PM", "03:30 PM"],
            description: "Dr. Tanya Kapoor provides neurological care for headaches, nerve conditions and other brain-related concerns.",

            specializations: [
                "Neurology",
                "Migraine Care",
                "Nerve Disorders",
                "Brain Health"
            ],

            about: "Dr. Tanya Kapoor focuses on neurological diagnosis and treatment. She provides personalized care for common neurological conditions and promotes long-term brain health.",

            education: [
                {
                    degree: "MBBS",
                    college: "Lady Hardinge Medical College"
                },
                {
                    degree: "MD - Neurology",
                    college: "Delhi Medical University"
                }
            ],

            availability: [
                {
                    day: "Tuesday",
                    time: "9:30 AM - 1:30 PM"
                },
                {
                    day: "Thursday",
                    time: "12:30 PM - 4:30 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Harsh Vardhan",
            image: "../images/doc14.jpg",
            speciality: "neurology",
            specialityName: "Neurologist",
            clinic: "Neuro Life Hospital Chennai, Tamil Nadu",
            location: "Chennai, Tamil Nadu",
            experience: 20,
            rating: 4.9,
            reviews: 184,
            slots: ["08:30 AM", "11:30 AM", "04:30 PM"],
            description: "Dr. Harsh Vardhan is a senior neurologist providing advanced neurological diagnosis and treatment.",

            specializations: [
                "Neurology",
                "Brain Disorders",
                "Stroke Care",
                "Nerve Disorders"
            ],

            about: "Dr. Harsh Vardhan has more than 20 years of experience in neurological care. He specializes in complex neurological conditions and personalized treatment plans.",

            education: [
                {
                    degree: "MBBS",
                    college: "Madras Medical College"
                },
                {
                    degree: "DM - Neurology",
                    college: "Chennai Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "8:30 AM - 12:30 PM"
                },
                {
                    day: "Wednesday",
                    time: "11:30 AM - 3:30 PM"
                },
                {
                    day: "Friday",
                    time: "4:30 PM - 8:00 PM"
                }
            ]
        },

        {
            name: "Dr. Ayesha Khan",
            image: "../images/doc15.jpg",
            speciality: "pediatrics",
            specialityName: "Pediatrician",
            clinic: "Care Kids Hospital Mumbai, Maharashtra",
            location: "Mumbai, Maharashtra",
            experience: 7,
            rating: 4.8,
            reviews: 88,
            slots: ["10:00 AM", "01:00 PM", "04:00 PM"],
            description: "Dr. Ayesha Khan provides caring and comprehensive healthcare services for infants, children and teenagers.",

            specializations: [
                "Child Care",
                "Vaccination",
                "Child Nutrition",
                "Pediatric Health"
            ],

            about: "Dr. Ayesha Khan provides pediatric care focused on healthy growth, development and prevention. She creates a friendly environment for children and families.",

            education: [
                {
                    degree: "MBBS",
                    college: "Grant Medical College"
                },
                {
                    degree: "MD - Pediatrics",
                    college: "Mumbai Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "10:00 AM - 2:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "1:00 PM - 5:00 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Nitin Arora",
            image: "../images/doc16.jpg",
            speciality: "pediatrics",
            specialityName: "Pediatrician",
            clinic: "Healthy Child Clinic Kolkata, West Bengal",
            location: "Kolkata, West Bengal",
            experience: 9,
            rating: 4.9,
            reviews: 152,
            slots: ["09:00 AM", "12:30 PM", "03:30 PM"],
            description: "Dr. Nitin Arora specializes in pediatric healthcare and focuses on children's growth, nutrition and preventive care.",

            specializations: [
                "Child Care",
                "Child Nutrition",
                "Vaccination",
                "Growth Monitoring"
            ],

            about: "Dr. Nitin Arora provides complete pediatric care including routine checkups, vaccination and child development monitoring.",

            education: [
                {
                    degree: "MBBS",
                    college: "Medical College Kolkata"
                },
                {
                    degree: "MD - Pediatrics",
                    college: "West Bengal Medical University"
                }
            ],

            availability: [
                {
                    day: "Tuesday",
                    time: "9:00 AM - 1:00 PM"
                },
                {
                    day: "Thursday",
                    time: "12:30 PM - 4:30 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Mohit Saini",
            image: "../images/doc17.jpg",
            speciality: "orthopedics",
            specialityName: "Orthopedic Specialist",
            clinic: "Joint Care Hospital Delhi, Delhi",
            location: "Delhi, India",
            experience: 4,
            rating: 4.6,
            reviews: 52,
            slots: ["10:30 AM", "01:30 PM", "04:30 PM"],
            description: "Dr. Mohit Saini provides orthopedic care for joint, bone and muscle-related conditions.",

            specializations: [
                "Joint Care",
                "Bone Health",
                "Sports Injuries",
                "Pain Management"
            ],

            about: "Dr. Mohit Saini focuses on orthopedic treatment for common bone, joint and muscle conditions. He provides personalized care focused on improving mobility.",

            education: [
                {
                    degree: "MBBS",
                    college: "Maulana Azad Medical College"
                },
                {
                    degree: "MS - Orthopedics",
                    college: "Delhi Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "10:30 AM - 2:30 PM"
                },
                {
                    day: "Wednesday",
                    time: "1:30 PM - 5:30 PM"
                },
                {
                    day: "Friday",
                    time: "4:30 PM - 7:30 PM"
                }
            ]
        },

        {
            name: "Dr. Varun Thakur",
            image: "../images/doc18.jpg",
            speciality: "orthopedics",
            specialityName: "Orthopedic Specialist",
            clinic: "Bone Care Hospital Chennai, Tamil Nadu",
            location: "Chennai, Tamil Nadu",
            experience: 22,
            rating: 4.9,
            reviews: 219,
            slots: ["09:00 AM", "12:00 PM", "05:00 PM"],
            description: "Dr. Varun Thakur is a senior orthopedic specialist with extensive experience in bone and joint care.",

            specializations: [
                "Orthopedics",
                "Joint Replacement",
                "Bone Care",
                "Sports Injuries"
            ],

            about: "Dr. Varun Thakur has more than 20 years of orthopedic experience and specializes in advanced bone and joint treatment. He focuses on restoring mobility and improving quality of life.",

            education: [
                {
                    degree: "MBBS",
                    college: "Madras Medical College"
                },
                {
                    degree: "MS - Orthopedics",
                    college: "Chennai Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "9:00 AM - 1:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "12:00 PM - 4:00 PM"
                },
                {
                    day: "Friday",
                    time: "5:00 PM - 8:00 PM"
                }
            ]
        },

        {
            name: "Dr. Ishita Malhotra",
            image: "../images/doc19.jpg",
            speciality: "dermatology",
            specialityName: "Dermatologist",
            clinic: "Derma Glow Clinic Bangalore, Karnataka",
            location: "Bangalore, Karnataka",
            experience: 8,
            rating: 4.8,
            reviews: 97,
            slots: ["10:00 AM", "01:00 PM", "04:30 PM"],
            description: "Dr. Ishita Malhotra provides personalized dermatology care for skin, hair and cosmetic concerns.",

            specializations: [
                "Skin Care",
                "Acne Treatment",
                "Hair Care",
                "Cosmetic Dermatology"
            ],

            about: "Dr. Ishita Malhotra provides modern dermatological care for skin and hair conditions. She focuses on personalized treatment and healthy skin.",

            education: [
                {
                    degree: "MBBS",
                    college: "Bangalore Medical College"
                },
                {
                    degree: "MD - Dermatology",
                    college: "Karnataka Medical University"
                }
            ],

            availability: [
                {
                    day: "Tuesday",
                    time: "10:00 AM - 2:00 PM"
                },
                {
                    day: "Thursday",
                    time: "1:00 PM - 5:00 PM"
                },
                {
                    day: "Saturday",
                    time: "4:30 PM - 7:30 PM"
                }
            ]
        },

        {
            name: "Dr. Rakesh Sood",
            image: "../images/doc20.jpg",
            speciality: "dermatology",
            specialityName: "Dermatologist",
            clinic: "Advanced Skin Center Delhi, Delhi",
            location: "Delhi, India",
            experience: 16,
            rating: 4.9,
            reviews: 172,
            slots: ["09:30 AM", "12:30 PM", "03:30 PM"],
            description: "Dr. Rakesh Sood is an experienced dermatologist specializing in advanced skin and hair treatments.",

            specializations: [
                "Advanced Skin Care",
                "Hair Treatment",
                "Acne Care",
                "Cosmetic Dermatology"
            ],

            about: "Dr. Rakesh Sood has extensive experience in dermatology and provides advanced treatment for skin and hair conditions with personalized care.",

            education: [
                {
                    degree: "MBBS",
                    college: "AIIMS New Delhi"
                },
                {
                    degree: "MD - Dermatology",
                    college: "Delhi Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "9:30 AM - 1:30 PM"
                },
                {
                    day: "Wednesday",
                    time: "12:30 PM - 4:30 PM"
                },
                {
                    day: "Friday",
                    time: "3:30 PM - 7:30 PM"
                }
            ]
        },

        {
            name: "Dr. Sakshi Jain",
            image: "../images/doc21.jpg",
            speciality: "dental",
            specialityName: "Dentist",
            clinic: "Healthy Smile Clinic Noida, Uttar Pradesh",
            location: "Noida, Uttar Pradesh",
            experience: 6,
            rating: 4.7,
            reviews: 74,
            slots: ["09:00 AM", "12:00 PM", "03:00 PM"],
            description: "Dr. Sakshi Jain provides preventive, restorative and cosmetic dental care for healthy and confident smiles.",

            specializations: [
                "Dental Care",
                "Teeth Cleaning",
                "Root Canal",
                "Cosmetic Dentistry"
            ],

            about: "Dr. Sakshi Jain provides comprehensive dental care with a focus on preventive treatment, oral hygiene and maintaining healthy smiles.",

            education: [
                {
                    degree: "BDS",
                    college: "Government Dental College"
                },
                {
                    degree: "MDS - Dentistry",
                    college: "Delhi Dental University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "9:00 AM - 1:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "12:00 PM - 4:00 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Abhishek Roy",
            image: "../images/doc22.jpg",
            speciality: "dental",
            specialityName: "Dentist",
            clinic: "Premium Dental Hospital Kolkata, West Bengal",
            location: "Kolkata, West Bengal",
            experience: 19,
            rating: 4.9,
            reviews: 163,
            slots: ["10:30 AM", "01:30 PM", "05:00 PM"],
            description: "Dr. Abhishek Roy is an experienced dentist providing advanced dental treatment and personalized oral care.",

            specializations: [
                "Advanced Dentistry",
                "Root Canal",
                "Dental Implants",
                "Cosmetic Dentistry"
            ],

            about: "Dr. Abhishek Roy has extensive dental experience and provides advanced treatment for oral health and cosmetic dental concerns.",

            education: [
                {
                    degree: "BDS",
                    college: "Medical College Kolkata"
                },
                {
                    degree: "MDS - Dentistry",
                    college: "West Bengal Dental University"
                }
            ],

            availability: [
                {
                    day: "Tuesday",
                    time: "10:30 AM - 2:30 PM"
                },
                {
                    day: "Thursday",
                    time: "1:30 PM - 5:30 PM"
                },
                {
                    day: "Friday",
                    time: "5:00 PM - 8:00 PM"
                }
            ]
        },

        {
            name: "Dr. Abhishek Bansal",
            image: "../images/doc23.jpg",
            speciality: "dental",
            specialityName: "Dentist",
            clinic: "Dental Hospital Kolkata, West Bengal",
            location: "Kolkata, West Bengal",
            experience: 18,
            rating: 4.8,
            reviews: 134,
            slots: ["10:00 AM", "01:00 PM", "05:00 PM"],
            description: "Dr. Abhishek Bansal provides comprehensive dental care with a focus on comfortable and effective treatment.",

            specializations: [
                "Dental Care",
                "Root Canal",
                "Oral Health",
                "Cosmetic Dentistry"
            ],

            about: "Dr. Abhishek Bansal is an experienced dentist who provides preventive, restorative and cosmetic dental treatment with a patient-friendly approach.",

            education: [
                {
                    degree: "BDS",
                    college: "Government Dental College"
                },
                {
                    degree: "MDS - Dentistry",
                    college: "West Bengal Dental University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "10:00 AM - 2:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "1:00 PM - 5:00 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },
        
        {
            name: "Dr. Rahul Mehta",
            image: "../images/doctors3.jpg",
            speciality: "neurology",
            specialityName: "Neurologist",
            clinic: "Neuro Care Hospital Mumbai, Maharashtra",
            location: "Mumbai, Maharashtra",
            experience: 8,
            rating: 4.8,
            reviews: 93,
            slots: ["09:00 AM", "12:00 PM", "03:00 PM"],

            description:
                "Dr. Rahul Mehta provides personalized neurological care for brain, nerve and headache-related conditions.",

            specializations: [
                "Neurology",
                "Migraine Care",
                "Brain Health",
                "Nerve Disorders"
            ],

            about:
                "Dr. Rahul Mehta provides neurological consultation and personalized treatment for common brain and nerve conditions.",

            education: [
                {
                    degree: "MBBS",
                    college: "Grant Medical College"
                },
                {
                    degree: "MD - Neurology",
                    college: "Mumbai Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "9:00 AM - 1:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "12:00 PM - 4:00 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Ananya Singh",
            image: "../images/doctors4.jpg",
            speciality: "pediatrics",
            specialityName: "Pediatrician",
            clinic: "Child Care Hospital Bangalore, Karnataka",
            location: "Bangalore, Karnataka",
            experience: 7,
            rating: 4.9,
            reviews: 112,
            slots: ["10:00 AM", "01:00 PM", "04:00 PM"],

            description:
                "Dr. Ananya Singh provides compassionate pediatric care focused on children's health, growth and development.",

            specializations: [
                "Child Care",
                "Vaccination",
                "Child Nutrition",
                "Pediatric Health"
            ],

            about:
                "Dr. Ananya Singh specializes in pediatric healthcare and provides preventive and medical care for infants, children and teenagers.",

            education: [
                {
                    degree: "MBBS",
                    college: "Bangalore Medical College"
                },
                {
                    degree: "MD - Pediatrics",
                    college: "Karnataka Medical University"
                }
            ],

            availability: [
                {
                    day: "Tuesday",
                    time: "10:00 AM - 2:00 PM"
                },
                {
                    day: "Thursday",
                    time: "1:00 PM - 5:00 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Arjun Kapoor",
            image: "../images/doctors5.jpg",
            speciality: "orthopedics",
            specialityName: "Orthopedic Specialist",
            clinic: "Ortho Care Hospital New Delhi, Delhi",
            location: "New Delhi, Delhi",
            experience: 9,
            rating: 4.7,
            reviews: 87,
            slots: ["09:00 AM", "12:00 PM", "03:30 PM"],

            description:
                "Dr. Arjun Kapoor provides orthopedic care for bones, joints, muscles and sports-related injuries.",

            specializations: [
                "Orthopedics",
                "Joint Care",
                "Sports Injuries",
                "Bone Health"
            ],

            about:
                "Dr. Arjun Kapoor focuses on orthopedic treatment for joint, bone and muscle conditions and helps patients improve mobility.",

            education: [
                {
                    degree: "MBBS",
                    college: "Maulana Azad Medical College"
                },
                {
                    degree: "MS - Orthopedics",
                    college: "Delhi Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "9:00 AM - 1:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "12:00 PM - 4:00 PM"
                },
                {
                    day: "Friday",
                    time: "3:30 PM - 7:30 PM"
                }
            ]
        },

        {
            name: "Dr. Neha Verma",
            image: "../images/doctors8.jpg",
            speciality: "dermatology",
            specialityName: "Dermatologist",
            clinic: "Skin Care Clinic Hyderabad, Telangana",
            location: "Hyderabad, Telangana",
            experience: 6,
            rating: 4.8,
            reviews: 96,
            slots: ["09:30 AM", "12:30 PM", "04:00 PM"],

            description:
                "Dr. Neha Verma provides personalized skin and hair care using modern dermatological treatment methods.",

            specializations: [
                "Skin Care",
                "Acne Treatment",
                "Hair Care",
                "Cosmetic Dermatology"
            ],

            about:
                "Dr. Neha Verma provides dermatology care for common skin and hair conditions with a focus on personalized treatment.",

            education: [
                {
                    degree: "MBBS",
                    college: "Osmania Medical College"
                },
                {
                    degree: "MD - Dermatology",
                    college: "Hyderabad Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "9:30 AM - 1:30 PM"
                },
                {
                    day: "Thursday",
                    time: "12:30 PM - 4:30 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Kanika Garg",
            image: "../images/doctors9.jpg",
            speciality: "gynecology",
            specialityName: "Gynecologist",
            clinic: "Women's Care Hospital Jaipur, Rajasthan",
            location: "Jaipur, Rajasthan",
            experience: 12,
            rating: 4.5,
            reviews: 129,
            slots: ["10:00 AM", "01:00 PM", "04:00 PM"],

            description:
                "Dr. Kanika Garg provides comprehensive women's healthcare with a focus on reproductive and general health.",

            specializations: [
                "Women's Health",
                "Gynecology",
                "Pregnancy Care",
                "Reproductive Health"
            ],

            about:
                "Dr. Kanika Garg provides women's healthcare and gynecological consultation with a focus on personalized and preventive care.",

            education: [
                {
                    degree: "MBBS",
                    college: "SMS Medical College Jaipur"
                },
                {
                    degree: "MD - Gynecology",
                    college: "Rajasthan Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "10:00 AM - 2:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "1:00 PM - 5:00 PM"
                },
                {
                    day: "Friday",
                    time: "4:00 PM - 8:00 PM"
                }
            ]
        },

        {
            name: "Dr. Ankush Sharma",
            image: "../images/doctors10.jpg",
            speciality: "ent",
            specialityName: "ENT Specialist",
            clinic: "ENT Care Hospital Pune, Maharashtra",
            location: "Pune, Maharashtra",
            experience: 9,
            rating: 4.9,
            reviews: 89,
            slots: ["09:30 AM", "12:30 PM", "04:00 PM"],

            description:
                "Dr. Ankush Sharma provides specialized care for ear, nose and throat conditions.",

            specializations: [
                "ENT Care",
                "Ear Problems",
                "Nose Treatment",
                "Throat Care"
            ],

            about:
                "Dr. Ankush Sharma specializes in ENT care and provides diagnosis and treatment for common ear, nose and throat conditions.",

            education: [
                {
                    degree: "MBBS",
                    college: "Pune Medical College"
                },
                {
                    degree: "MS - ENT",
                    college: "Maharashtra Medical University"
                }
            ],

            availability: [
                {
                    day: "Tuesday",
                    time: "9:30 AM - 1:30 PM"
                },
                {
                    day: "Thursday",
                    time: "12:30 PM - 4:30 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        },

        {
            name: "Dr. Poornima Mehta",
            image: "../images/doctors11.jpg",
            speciality: "ophthalmology",
            specialityName: "Ophthalmologist",
            clinic: "Vision Care Hospital Chennai, Tamil Nadu",
            location: "Chennai, Tamil Nadu",
            experience: 8,
            rating: 4.6,
            reviews: 69,
            slots: ["09:00 AM", "12:00 PM", "03:30 PM"],

            description:
                "Dr. Poornima Mehta provides comprehensive eye care and treatment for common vision and eye-related conditions.",

            specializations: [
                "Eye Care",
                "Vision Checkup",
                "Eye Treatment",
                "General Ophthalmology"
            ],

            about:
                "Dr. Poornima Mehta provides ophthalmology consultation and routine eye care with a focus on maintaining healthy vision.",

            education: [
                {
                    degree: "MBBS",
                    college: "Madras Medical College"
                },
                {
                    degree: "MS - Ophthalmology",
                    college: "Chennai Medical University"
                }
            ],

            availability: [
                {
                    day: "Monday",
                    time: "9:00 AM - 1:00 PM"
                },
                {
                    day: "Wednesday",
                    time: "12:00 PM - 4:00 PM"
                },
                {
                    day: "Saturday",
                    time: "10:00 AM - 2:00 PM"
                }
            ]
        }
    ];