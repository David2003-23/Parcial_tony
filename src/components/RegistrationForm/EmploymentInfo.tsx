import React from 'react';
import { Briefcase } from 'lucide-react';

export function EmploymentInfo({ values, onChange }: {
  values: any;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <Briefcase className="h-6 w-6" />
        Información Laboral
      </h2>

      <div className="space-y-2">
        <p className="text-sm text-gray-600">¿Usted trabaja actualmente?</p>
        <div className="space-y-2">
          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="employment"
              value="unemployed"
              checked={values.employmentStatus === 'unemployed'}
              onChange={(e) => onChange('employmentStatus', e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-gray-700">No estoy trabajando</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="employment"
              value="employed"
              checked={values.employmentStatus === 'employed'}
              onChange={(e) => onChange('employmentStatus', e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-gray-700">Sí, empleado</span>
          </label>

          <label className="flex items-center space-x-3">
            <input
              type="radio"
              name="employment"
              value="self-employed"
              checked={values.employmentStatus === 'self-employed'}
              onChange={(e) => onChange('employmentStatus', e.target.value)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            />
            <span className="text-gray-700">Sí, independiente</span>
          </label>
        </div>
      </div>
    </div>
  );
}