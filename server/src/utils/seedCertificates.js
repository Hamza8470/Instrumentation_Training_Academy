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
      {
        certificateNumber: 'ITA/21/23-23/023',
        studentName: 'TAUFEEQ AADIL',
        courseName: 'QA/QC Inspector- Instrumentation',
        issueDate: new Date('2023-04-10'),
      },
      {
        certificateNumber: 'ITA/25/20-22/034',
        studentName: 'TAUFEEQ AADIL',
        courseName: 'Diploma in Industrial Instrumentation',
        issueDate: new Date('2022-09-01'),
      },
      {
        certificateNumber: 'ITA/22/20-22/030',
        studentName: 'MD NIGAR',
        courseName: 'Diploma in Industrial Instrumentation',
        issueDate: new Date('2022-09-15'),
      },
      {
        certificateNumber: 'ITA/20/22-24/028',
        studentName: 'MD SHAHBAJ',
        courseName: 'Diploma in Industrial Instrumentation',
        issueDate: new Date('2024-10-08'),
      },
      {
        certificateNumber: 'ITA/25/21-22/40',
        studentName: 'MD DANISH IQBAL',
        courseName: 'Diploma in Industrial Instrumentation',
        issueDate: new Date('2022-09-01'),
      },
      {
        certificateNumber: 'ITA/25/20-22/038',
        studentName: 'ZEESHAN HUSSAIN',
        courseName: 'Diploma in Industrial Instrumentation',
        issueDate: new Date('2022-09-01'),
      },
      {
        certificateNumber: 'ITA/25/20-22/036',
        studentName: 'MD SAJID ALAM',
        courseName: 'Diploma in Industrial Instrumentation',
        issueDate: new Date('2022-09-01'),
      },
      {
        certificateNumber: 'ITA/23/22-24/031',
        studentName: 'FIROZ ALAM',
        courseName: 'Diploma in Industrial Instrumentation',
        issueDate: new Date('2024-09-15'),
      },
      {
        certificateNumber: 'ITA/24/22-24/032',
        studentName: 'MD. IRFAN PERWEJ',
        courseName: 'Diploma in Industrial Instrumentation',
        issueDate: new Date('2024-09-15'),
      },
      {
        certificateNumber: 'ITA/25/22-24/033',
        studentName: 'SOHAIL IMAM',
        courseName: 'Diploma in Industrial Instrumentation',
        issueDate: new Date('2024-09-15'),
      },
      {
        certificateNumber: 'ITA/21/21-21/026',
        studentName: 'SHAYAQUE KARIM',
        courseName: 'QA/QC Inspector- Instrumentation',
        issueDate: new Date('2023-04-10'),
      },
      {
        certificateNumber: 'ITA/25/20-22/035',
        studentName: 'MOHAMMED MINHAZ ALI',
        courseName: 'Diploma in Industrial Instrumentation',
        issueDate: new Date('2022-09-01'),
      },
      {
        certificateNumber: 'ITA/21/20-21/029',
        studentName: 'MOHAMMAD KAMAL AKHTAR',
        courseName: 'Diploma in Industrial Instrumentation',
        issueDate: new Date('2021-11-14'),
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
