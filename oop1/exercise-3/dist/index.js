"use strict";
class Person {
    constructor(first, last, age, address) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.address = address;
    }
}
class MedicalStaff extends Person {
    constructor(staffID, firstName, lastName, age, address, position, department) {
        super(firstName, lastName, age, address);
        this.staffID = staffID;
        this.position = position;
        this.department = department;
    }
    staffInfo() {
        console.log(this);
    }
}
class Patient extends Person {
    constructor(id, first, last, age, address, phoneNumber, emergencyContact, medicalHistory) {
        super(first, last, age, address);
        this.patientID = id;
        this.phoneNumber = phoneNumber;
        this.emergencyContact = emergencyContact;
        this.medicalHistory = medicalHistory;
    }
    patientInfo() {
        console.log(this);
    }
    updateMedicalHistory(newEntry) {
        this.medicalHistory.push(newEntry);
    }
}
class Doctor extends MedicalStaff {
    constructor(doctorID, first, last, age, address, staffID, department, availability, ageRange) {
        super(staffID, first, last, age, address, "Doctor", department); // Empty string for department as it's not relevant for doctors
        this.doctorID = doctorID;
        this.availability = availability;
        this.ageRange = ageRange;
    }
    doctorInfo() {
        console.log(this);
    }
}
class Appointment {
    constructor(patient, doctor, date, time) {
        this.patient = patient;
        this.doctor = doctor;
        this.date = date;
        this.time = time;
        this.status = "Planned"; // Default status is planned
    }
    appInfo() {
        console.log(this);
    }
    markAsCompleted() {
        this.status = "Completed";
    }
    markAsCanceled() {
        this.status = "Canceled";
    }
}
class MedicalRecord {
    constructor(patient, doctor, diagnosis, prescription) {
        this.patient = patient;
        this.doctor = doctor;
        this.diagnosis = diagnosis;
        this.prescription = prescription;
    }
    recordInfo() {
        console.log(this);
    }
}
class Hospital {
    constructor(patients, doctors, appointments, medicalRecords) {
        this.patients = patients;
        this.doctors = doctors;
        this.appointments = appointments;
        this.medicalRecords = medicalRecords;
    }
    //  getters
    getAllAppointmentsInfo() {
        return this.appointments;
    }
    getAppointmentsByDocIdInfo(appointments, id) {
        const filteredApps = appointments.filter((app) => id === app.doctor.staffID);
        console.log(filteredApps);
    }
    getAppointmentsByPatientIdInfo(appointments, id) {
        const filteredApps = appointments.filter((app) => id === app.patient.patientID);
        console.log(filteredApps);
    }
    appointmentsByDateInfo(appointments, date) {
        const filteredApps = appointments.filter((app) => date === app.date);
        console.log(filteredApps);
    }
    searchDoctorBySpecialty(specialty) {
        return this.doctors.filter((doctor) => doctor.department === specialty);
    }
    getMedicalRecords(patient) {
        return this.medicalRecords.filter((record) => record.patient === patient);
    }
    getDoctorSchedule(doctor, date) {
        return this.appointments.filter((appointment) => appointment.doctor === doctor && appointment.date === date);
    }
    getDoctorAvailability(doctor, date) {
        const doctorSchedule = this.getDoctorSchedule(doctor, date);
        const bookedTimes = doctorSchedule.map((appointment) => appointment.time);
        const allTimes = doctor.availability;
        return allTimes.filter((timeSlot) => !bookedTimes.includes(timeSlot.startTime));
    }
    // setters
    addNewPatient(patient) {
        this.patients.push(patient);
        return this.patients;
    }
    addNewDoctor(doctor) {
        this.doctors.push(doctor);
        return this.doctors;
    }
    createMedicalRecord(patient, doctor, diagnosis, prescription) {
        const medicalRecord = new MedicalRecord(patient, doctor, diagnosis, prescription);
        this.medicalRecords.push(medicalRecord);
    }
    updateDoctorAvailability(doctor, date, time) {
        const updatedAvailability = doctor.availability.filter((timeSlot) => timeSlot.startTime !== time);
        doctor.availability = updatedAvailability;
    }
    addNewAppointment(appointment) {
        const isSlotAvailable = this.appointments.every((existingAppointment) => existingAppointment.doctor !== appointment.doctor ||
            existingAppointment.date !== appointment.date ||
            existingAppointment.time !== appointment.time);
        if (isSlotAvailable) {
            this.appointments.push(appointment);
            this.updateDoctorAvailability(appointment.doctor, appointment.date, appointment.time);
        }
        else {
            console.log("The appointment slot is already taken.");
        }
        return this.appointments;
    }
}
// ******hardcode testing****** credit: chat gpt ;)
// The doctor's availabilities are not getting updated automatically yet, to update a doctor's availability do it manually, we are sorry for the inconvenience.
const patient1 = new Patient("P001", "John", "Doe", 30, "123 Main St", "555-1234", "Emergency Contact 1", []);
const patient2 = new Patient("P002", "Jane", "Smith", 25, "456 Elm St", "555-5678", "Emergency Contact 2", []);
const doctor1 = new Doctor("D001", "Dr. Emily", "Davis", 35, "456 Oak St", "S001", "Cardiology", [
    { startTime: "9:00 AM", endTime: "12:00 PM" },
    { startTime: "2:00 PM", endTime: "5:00 PM" },
], { min: 18, max: 118 });
const doctor2 = new Doctor("D002", "Dr. Michael", "Miller", 40, "789 Elm St", "S002", "Pediatrics", [
    { startTime: "8:00 AM", endTime: "11:00 AM" },
    { startTime: "1:00 PM", endTime: "4:00 PM" },
], { min: 0, max: 5 });
const appointment1 = new Appointment(patient1, doctor1, "2023-08-30", "10:00 AM");
const appointment2 = new Appointment(patient2, doctor2, "2023-08-31", "9:00 AM");
const medicalRecord1 = new MedicalRecord(patient1, doctor1, "Common cold", "Rest and drink fluids.");
const medicalRecord2 = new MedicalRecord(patient2, doctor2, "Stomach ache", "Prescribed antacids.");
const hospital = new Hospital([patient1, patient2], [doctor1, doctor2], [appointment1, appointment2], [medicalRecord1, medicalRecord2]);
// console.log("All Appointments:");
// console.log(hospital.getAllAppointmentsInfo());
// console.log("\nAppointments for Doctor D001:");
// hospital.getAppointmentsByDocIdInfo(hospital.appointments, "D001");
// console.log("\nAppointments for Patient P002:");
// hospital.getAppointmentsByPatientIdInfo(hospital.appointments, "P002");
// console.log("\nAppointments on 2023-08-30:");
// hospital.appointmentsByDateInfo(hospital.appointments, "2023-08-30");
// console.log("\nDoctors in Cardiology:");
// console.log(hospital.searchDoctorBySpecialty("Cardiology"));
// console.log("\nMedical Records for Patient P001:");
// console.log(hospital.getMedicalRecords(patient1));
// console.log("\nDoctor D002's Schedule on 2023-08-31:");
// console.log(hospital.getDoctorSchedule(doctor2, "2023-08-31"));
// console.log("\nDoctor D001's Available Times on 2023-08-30:");
// console.log(hospital.getDoctorAvailability(doctor1, "2023-08-30"));
// console.log("\nAdding New Patient:");
// const newPatient = new Patient(
//     "P003",
//     "Alice",
//     "Johnson",
//     28,
//     "789 Pine St",
//     "555-9876",
//     "Emergency Contact 3",
//     []
// );
// console.log(hospital.addNewPatient(newPatient));
// console.log("\nAdding New Doctor:");
// const newDoctor = new Doctor(
//     "D003",
//     "Dr. Robert",
//     "White",
//     45,
//     "234 Maple St",
//     "S003",
//     "Orthopedics",
//     [
//         { startTime: "10:00 AM", endTime: "1:00 PM" },
//         { startTime: "3:00 PM", endTime: "6:00 PM" },
//     ],
//     { min: 5, max: 18 }
// );
// console.log(hospital.addNewDoctor(newDoctor));
// console.log("\nCreating New Medical Record:");
// hospital.createMedicalRecord(
//     patient1,
//     doctor1,
//     "Fever",
//     "Prescribed fever reducer."
// );
// console.log(hospital.getMedicalRecords(patient1));
// console.log("\nAdding New Appointment:");
// const newAppointment = new Appointment(
//     patient2,
//     doctor2,
//     "2023-09-01",
//     "11:00 AM"
// );
// console.log(hospital.addNewAppointment(newAppointment));
// // Checking the doctor's availability
// console.log("Doctor D001's Availability on 2023-08-30:");
// console.log(hospital.getDoctorAvailability(doctor1, "2023-08-30"));
// // Creating a new appointment
// const newAppointment = new Appointment(
//     patient1,
//     doctor1,
//     "2023-08-30",
//     "10:00 AM"
// );
// // Adding the new appointment to the hospital
// hospital.addNewAppointment(newAppointment);
// // Checking the updated doctor's availability
// console.log("\nDoctor D001's Updated Availability on 2023-08-30:");
// console.log(hospital.getDoctorAvailability(doctor1, "2023-08-30"));
