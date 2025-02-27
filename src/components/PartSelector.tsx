import React from 'react';
import { KeyboardPart } from '../types';

interface PartSelectorProps {
  parts: KeyboardPart[];
  selectedPart: KeyboardPart | null;
  onSelect: (part: KeyboardPart) => void;
  type: KeyboardPart['type'];
}

const PartSelector: React.FC<PartSelectorProps> = ({ parts, selectedPart, onSelect, type }) => {
  const typeLabels: Record<KeyboardPart['type'], string> = {
    case: 'Case',
    switches: 'Switches',
    keycaps: 'Keycaps',
    plate: 'Plate',
    pcb: 'PCB'
  };

  return (
    <div className="mb-8">
      <h3 className="text-lg font-semibold mb-3">{typeLabels[type]}</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {parts.map(part => (
          <div 
            key={part.id}
            onClick={() => onSelect(part)}
            className={`border rounded-lg overflow-hidden cursor-pointer transition-all ${
              selectedPart?.id === part.id 
                ? 'border-indigo-500 ring-2 ring-indigo-300 shadow-md' 
                : 'border-gray-200 hover:shadow-md'
            }`}
          >
            <div className="h-32 overflow-hidden">
              <img 
                src={part.image} 
                alt={part.name} 
                className="w-full h-full object-cover"
              />
            </div>
            
            <div className="p-3">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">{part.name}</h4>
                  <p className="text-sm text-gray-600">{part.brand}</p>
                </div>
                <span className="font-bold text-green-600">R$ {part.price.toFixed(2)}</span>
              </div>
              
              <p className="text-sm text-gray-500 mt-2 line-clamp-2">{part.description}</p>
              
              {part.color && (
                <div className="mt-2 flex items-center">
                  <span className="text-xs text-gray-500 mr-1">Cor:</span>
                  <span className="text-xs">{part.color}</span>
                </div>
              )}
              
              {part.material && (
                <div className="mt-1 flex items-center">
                  <span className="text-xs text-gray-500 mr-1">Material:</span>
                  <span className="text-xs">{part.material}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartSelector;