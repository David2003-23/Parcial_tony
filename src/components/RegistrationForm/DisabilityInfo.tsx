import React from 'react';
import { Heart } from 'lucide-react';

const disabilities = [
  { id: 'none', label: 'Ninguna' },
  { id: 'motor', label: 'Discapacidad motriz' },
  { id: 'hearing', label: 'Discapacidad sorda' },
  { id: 'cognitive', label: 'Discapacidad cognitiva' },
  { id: 'deafblind', label: 'Sordoceguera' },
  { id: 'speech', label: 'Trastorno de la voz y el habla' },
  { id: 'other', label: 'Otra' }
];

export function DisabilityInfo({ values, onChange }: {
  values: any;
  onChange: (field: string, value: any) => void;
}) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <Heart className="h-6 w-6" />
        Información de Discapacidad
      </h2>

      <div className="space-y-4">
        <p className="text-sm text-gray-600">¿Cuenta con alguna discapacidad?</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {disabilities.map((disability) => (
            <label key={disability.id} className="flex items-center space-x-3">
              <input
                type="checkbox"
                checked={values[disability.id]}
                onChange={(e) => onChange(disability.id, e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">{disability.label}</span>
            </label>
          ))}
        </div>

        {values.other && (
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              ¿Diga cuál es su otra discapacidad?
            </label>
            <input
              type="text"
              value={values.otherDisability}
              onChange={(e) => onChange('otherDisability', e.target.value)}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              placeholder="Especifique su discapacidad"
            />
          </div>
        )}
      </div>
    </div>
  );
}