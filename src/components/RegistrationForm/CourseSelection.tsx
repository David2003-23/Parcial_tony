import React from 'react';
import { School } from 'lucide-react';

const courses = [
  'ADMINISTRACIÓN DE EMPRESAS',
  'BACTERIOLOGÍA',
  'CONTADURÍA PÚBLICA',
  'DERECHO',
  'ENFERMERÍA',
  'INGENIERÍA DE SISTEMAS',
  'INSTRUMENTACIÓN QUIRÚRGICA | CARTAGENA',
  'LICENCIATURA EN EDUCACIÓN INFANTIL',
  'MEDICINA',
  'ODONTOLOGÍA',
  'TECNOLOGÍA EN ATENCIÓN PREHOSPITALARIA',
  'TECNOLOGÍA EN ESTÉTICA Y COSMETOLOGÍA',
  'TECNOLOGÍA EN MECÁNICA DENTAL',
  'TRABAJO SOCIAL'
];

export function CourseSelection({ value, onChange }: { 
  value: string; 
  onChange: (value: string) => void;
}) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-lg font-semibold text-gray-700">
        <School className="h-5 w-5" />
        ¿En qué carrera desea inscribirse? <span className="text-red-500">*</span>
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
      >
        <option value="">Seleccione una carrera</option>
        {courses.map((course) => (
          <option key={course} value={course}>
            {course}
          </option>
        ))}
      </select>
    </div>
  );
}