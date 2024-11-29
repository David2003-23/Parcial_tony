import React from 'react';
import { Users } from 'lucide-react';

const populations = [
  { id: 'none', label: 'Ninguna' },
  { id: 'indigenous', label: 'Indígenas' },
  { id: 'afrocolombian', label: 'Afrocolombianos' },
  { id: 'raizal', label: 'Raizales' },
  { id: 'rom', label: 'Pueblo ROM o Gitano' }
];

const childrenOptions = [
  { value: '0', label: 'No tengo' },
  { value: '1', label: '1 hijo' },
  { value: '2', label: '2 hijos' },
  { value: '3', label: '3 hijos' },
  { value: '4', label: '4 hijos' },
  { value: '5+', label: 'Más de 4 hijos' }
];

export function DemographicInfo({ values, onChange }: {
  values: any;
  onChange: (field: string, value: any) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <Users className="h-6 w-6" />
        Encuesta Personal
      </h2>

      <div className="space-y-6">
        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">¿Tiene usted hijos?</p>
          <div className="space-y-2">
            {childrenOptions.map((option) => (
              <label key={option.value} className="flex items-center space-x-3">
                <input
                  type="radio"
                  name="children"
                  value={option.value}
                  checked={values.children === option.value}
                  onChange={(e) => onChange('children', e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="text-gray-700">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700 mb-3">
            ¿Se reconoce como parte de alguna de las siguientes poblaciones?
          </p>
          <div className="space-y-2">
            {populations.map((population) => (
              <label key={population.id} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={values[population.id]}
                  onChange={(e) => onChange(population.id, e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700">{population.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}