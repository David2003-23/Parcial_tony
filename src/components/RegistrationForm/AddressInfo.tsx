import React from 'react';
import { MapPin } from 'lucide-react';

export function AddressInfo({ values, onChange }: {
  values: any;
  onChange: (field: string, value: string) => void;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <MapPin className="h-6 w-6" />
        Dirección Residencial
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            País <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={values.country}
            onChange={(e) => onChange('country', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Ej: Colombia"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ciudad <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={values.city}
            onChange={(e) => onChange('city', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Ej: Bogotá"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">
            Dirección <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            required
            value={values.address}
            onChange={(e) => onChange('address', e.target.value)}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
            placeholder="Ej: Calle 123 # 45-67"
          />
        </div>
      </div>
    </div>
  );
}