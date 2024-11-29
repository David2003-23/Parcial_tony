import React, { useState } from 'react';
import { User, Calendar, CreditCard, Mail, Phone } from 'lucide-react';
import { getFieldError } from '../../utils/validation';

const documentTypes = ['Cédula de Ciudadanía', 'Tarjeta de Identidad', 'Pasaporte', 'Cédula de Extranjería'];
const civilStatus = ['Soltero(a)', 'Casado(a)', 'Divorciado(a)', 'Viudo(a)', 'Unión Libre'];

export function PersonalInfo({ values, onChange }: {
  values: any;
  onChange: (field: string, value: string) => void;
}) {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleInputChange = (field: string, value: string) => {
    const error = getFieldError(field, value);
    setErrors(prev => ({
      ...prev,
      [field]: error || ''
    }));
    onChange(field, value);
  };

  const getInputClassName = (field: string) => {
    return `mt-1 block w-full rounded-md ${
      errors[field]
        ? 'border-red-300 focus:border-red-500 focus:ring-red-500'
        : 'border-gray-300 focus:border-blue-500 focus:ring-blue-500'
    } shadow-sm`;
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <User className="h-6 w-6" />
        Información Personal
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Primer Nombre <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={values.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            className={getInputClassName('firstName')}
            placeholder="Ej: Juan"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Segundo Nombre
          </label>
          <input
            type="text"
            value={values.secondName}
            onChange={(e) => handleInputChange('secondName', e.target.value)}
            className={getInputClassName('secondName')}
            placeholder="Ej: Carlos"
          />
          {errors.secondName && (
            <p className="mt-1 text-sm text-red-600">{errors.secondName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Primer Apellido <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={values.firstLastName}
            onChange={(e) => handleInputChange('firstLastName', e.target.value)}
            className={getInputClassName('firstLastName')}
            placeholder="Ej: Pérez"
          />
          {errors.firstLastName && (
            <p className="mt-1 text-sm text-red-600">{errors.firstLastName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Segundo Apellido
          </label>
          <input
            type="text"
            value={values.secondLastName}
            onChange={(e) => handleInputChange('secondLastName', e.target.value)}
            className={getInputClassName('secondLastName')}
            placeholder="Ej: Gómez"
          />
          {errors.secondLastName && (
            <p className="mt-1 text-sm text-red-600">{errors.secondLastName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            Fecha de nacimiento <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            required
            value={values.birthDate}
            onChange={(e) => onChange('birthDate', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
            <CreditCard className="h-4 w-4" />
            Tipo de documento <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={values.documentType}
            onChange={(e) => onChange('documentType', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Seleccione tipo de documento</option>
            {documentTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Número de Documento <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={values.documentNumber}
            onChange={(e) => handleInputChange('documentNumber', e.target.value)}
            className={getInputClassName('documentNumber')}
            placeholder="Ej: 1234567890"
          />
          {errors.documentNumber && (
            <p className="mt-1 text-sm text-red-600">{errors.documentNumber}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Estado Civil <span className="text-red-500">*</span>
          </label>
          <select
            required
            value={values.civilStatus}
            onChange={(e) => onChange('civilStatus', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
          >
            <option value="">Seleccione estado civil</option>
            {civilStatus.map((status) => (
              <option key={status} value={status}>{status}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
            <Mail className="h-4 w-4" />
            Correo electrónico <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            required
            value={values.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            className={getInputClassName('email')}
            placeholder="ejemplo@correo.com"
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 flex items-center gap-1">
            <Phone className="h-4 w-4" />
            Teléfono <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            required
            value={values.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            className={getInputClassName('phone')}
            placeholder="Ej: 3001234567"
          />
          {errors.phone && (
            <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
          )}
        </div>
      </div>
    </div>
  );
}