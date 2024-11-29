import React, { useState } from 'react';
import { CourseSelection } from './components/RegistrationForm/CourseSelection';
import { PersonalInfo } from './components/RegistrationForm/PersonalInfo';
import { DisabilityInfo } from './components/RegistrationForm/DisabilityInfo';
import { EmploymentInfo } from './components/RegistrationForm/EmploymentInfo';
import { AddressInfo } from './components/RegistrationForm/AddressInfo';
import { DemographicInfo } from './components/RegistrationForm/DemographicInfo';
import { getFieldError } from './utils/validation';

function App() {
  const [formData, setFormData] = useState({
    course: '',
    // Personal Info
    firstName: '',
    secondName: '',
    firstLastName: '',
    secondLastName: '',
    birthDate: '',
    documentType: '',
    documentNumber: '',
    civilStatus: '',
    email: '',
    phone: '',
    // Address Info
    country: '',
    city: '',
    address: '',
    // Disability Info
    none: false,
    motor: false,
    hearing: false,
    cognitive: false,
    deafblind: false,
    speech: false,
    other: false,
    otherDisability: '',
    // Employment Info
    employmentStatus: '',
    // Demographic Info
    children: '',
    indigenous: false,
    afrocolombian: false,
    raizal: false,
    rom: false,
  });

  const handleChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all text fields before submission
    const fieldsToValidate = ['firstName', 'firstLastName', 'documentNumber', 'email', 'phone'];
    const errors = fieldsToValidate
      .map(field => ({
        field,
        error: getFieldError(field, formData[field as keyof typeof formData] as string)
      }))
      .filter(({ error }) => error !== null);

    if (errors.length > 0) {
      const errorMessages = errors.map(({ field, error }) => `${field}: ${error}`).join('\n');
      alert('Por favor corrija los siguientes errores:\n\n' + errorMessages);
      return;
    }

    // If validation passes, submit the form
    console.log('Form submitted:', formData);
    alert('Formulario enviado con éxito!');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Formulario de Inscripción a Carrera
          </h1>

          <CourseSelection
            value={formData.course}
            onChange={(value) => handleChange('course', value)}
          />

          <hr className="my-8" />

          <PersonalInfo
            values={formData}
            onChange={handleChange}
          />

          <hr className="my-8" />

          <AddressInfo
            values={formData}
            onChange={handleChange}
          />

          <hr className="my-8" />

          <DisabilityInfo
            values={formData}
            onChange={handleChange}
          />

          <hr className="my-8" />

          <EmploymentInfo
            values={formData}
            onChange={handleChange}
          />

          <hr className="my-8" />

          <DemographicInfo
            values={formData}
            onChange={handleChange}
          />

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Enviar Inscripción
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;