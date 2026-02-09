const dotenv = require('dotenv');
const connectDB = require('../config/db');
const Certificate = require('../models/Certificate');

dotenv.config();

const seedCertificates = async () => {
  try {
    await connectDB();

    const sampleCertificates = [
      {
        certificateNumber: 'ITA/25/23-24/039',
        studentName: 'AYUSH SHARMA',
        courseName: 'Instrumentation Technician Foundations',
        issueDate: new Date('2024-08-15'),
      },
      {
        certificateNumber: 'ITA/21/21-21/025',
        studentName: 'SALIK SALAM KHAN',
        courseName: 'Advanced Process Control',
        issueDate: new Date('2021-11-10'),
      },
      {
        certificateNumber: 'ITA/25/20-22/037',
        studentName: 'SHAYAQUE KARIM',
        courseName: 'Instrumentation Technician Foundations',
        issueDate: new Date('2022-02-05'),
      },
    ];

    await Certificate.deleteMany({});
    await Certificate.insertMany(sampleCertificates);

    console.log('Sample certificates inserted.');
    process.exit(0);
  } catch (error) {
    console.error('Failed to seed certificates:', error.message);
    process.exit(1);
  }
};

seedCertificates();
