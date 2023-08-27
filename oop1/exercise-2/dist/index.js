"use strict";
class Person {
    constructor(first, last) {
        this.firstName = first;
        this.lastName = last;
    }
}
class Patient extends Person {
    constructor(id, first, last) {
        super(first, last);
        this.patientID = id;
    }
    patientInfo() {
        console.log(this);
    }
}
class Doctor extends Person {
    constructor(id, first, last) {
        super(first, last);
        this.doctorID = id;
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
    }
    appInfo() {
        console.log(this);
    }
}
class Hospital {
    constructor(patients, doctors, appointments) {
        this.patients = patients;
        this.doctors = doctors;
        this.appointments = appointments;
    }
    addNewPatient(patient) {
        this.patients.push(patient);
        return this.patients;
    }
    addNewDoctor(doctor) {
        this.doctors.push(doctor);
        return this.doctors;
    }
    addNewAppointment(appointment) {
        this.appointments.push(appointment);
        return this.appointments;
    }
    allAppointmentsInfo(appointments) {
        appointments.forEach((app) => console.log(app));
    }
    appointmentsByDocIdInfo(appointments, id) {
        const filteredApps = appointments.filter((app) => id === app.doctor.doctorID);
        console.log(filteredApps);
    }
    appointmentsByPatientIdInfo(appointments, id) {
        const filteredApps = appointments.filter((app) => id === app.patient.patientID);
        console.log(filteredApps);
    }
    appointmentsByDateInfo(appointments, date) {
        const filteredApps = appointments.filter((app) => date === app.date);
        console.log(filteredApps);
    }
}
// testings
// Creating instances of Patients
const patient1 = new Patient("P001", "Alice", "Smith");
const patient2 = new Patient("P002", "Bob", "Johnson");
// Creating instances of Doctors
const doctor1 = new Doctor("D001", "Dr. Emily", "Davis");
const doctor2 = new Doctor("D002", "Dr. Michael", "Miller");
// Creating instances of Appointments
const appointment1 = new Appointment(patient1, doctor1, "2023-08-30", "10:00 AM");
const appointment2 = new Appointment(patient2, doctor2, "2023-08-31", "2:30 PM");
// Creating an instance of Hospital
const hospital = new Hospital([], [], []);
// Adding patients and doctors to the hospital
hospital.addNewPatient(patient1);
hospital.addNewPatient(patient2);
hospital.addNewDoctor(doctor1);
hospital.addNewDoctor(doctor2);
// Adding appointments to the hospital
hospital.addNewAppointment(appointment1);
hospital.addNewAppointment(appointment2);
// Displaying all appointments
console.log("All Appointments:");
hospital.allAppointmentsInfo(hospital.appointments);
// Displaying appointments by doctor ID
console.log("\nAppointments by Doctor ID (D001):");
hospital.appointmentsByDocIdInfo(hospital.appointments, "D001");
// Displaying appointments by patient ID
console.log("\nAppointments by Patient ID (P002):");
hospital.appointmentsByPatientIdInfo(hospital.appointments, "P002");
// Displaying appointments by date
console.log("\nAppointments on Date (2023-08-31):");
hospital.appointmentsByDateInfo(hospital.appointments, "2023-08-31");
