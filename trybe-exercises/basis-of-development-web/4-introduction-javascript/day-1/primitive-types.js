let patientId = 50;
let isEnrolled = true;
const patientInfo = {
  firstName: 'Ana',
  lastName: 'Santos',
};
const patientEmail = 'ana@email.com';

console.log("Type patientId: " + typeof patientId + ", isEnrolled: " + typeof isEnrolled + ", const patientInfo -> firstName: " + typeof patientInfo.firstName + ", lastName: " + typeof patientInfo.lastName + ", patientEmail: " + typeof patientEmail);

// PatientAge has not been defined.
console.log("Error undefined: patientAge --> " + typeof patientAge);

const base = 5;
const height = 8;

const area = base * height;
console.log("\n\n" +
  "Base: " + base + 
  "\nAltura: " + height +
  "\nArea: " + area
  );

  const perimeter = 2 * (base + height);
  console.log ("\nPermimetro: " + perimeter);
