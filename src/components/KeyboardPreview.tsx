import React from 'react';
import { CustomKeyboard } from '../types';

interface KeyboardPreviewProps {
  keyboard: CustomKeyboard;
}

const KeyboardPreview: React.FC<KeyboardPreviewProps> = ({ keyboard }) => {
  const totalPrice = [
    keyboard.case?.price || 0,
    keyboard.switches?.price || 0,
    keyboard.keycaps?.price || 0,
    keyboard.plate?.price || 0,
    keyboard.pcb?.price || 0
  ].reduce((sum, price) => sum + price, 0);

  const isComplete = 
    keyboard.case !== null && 
    keyboard.switches !== null && 
    keyboard.keycaps !== null && 
    keyboard.plate !== null && 
    keyboard.pcb !== null;

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Seu Teclado</h2>
      
      <div className="mb-6">
        <div className="relative h-48 rounded-lg overflow-hidden mb-4">
          <img 
            src={keyboard.keycaps?.image || keyboard.case?.image || "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"} 
            alt="Keyboard Preview" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-4 text-white">
              <h3 className="text-xl font-bold">{keyboard.name}</h3>
              <p className="text-sm opacity-90">Criado por {keyboard.username}</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Case:</span>
            <span className="font-medium">{keyboard.case?.name || 'Não selecionado'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Switches:</span>
            <span className="font-medium">{keyboard.switches?.name || 'Não selecionado'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Keycaps:</span>
            <span className="font-medium">{keyboard.keycaps?.name || 'Não selecionado'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Plate:</span>
            <span className="font-medium">{keyboard.plate?.name || 'Não selecionado'}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">PCB:</span>
            <span className="font-medium">{keyboard.pcb?.name || 'Não selecionado'}</span>
          </div>
        </div>
      </div>
      
      <div className="border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Preço Total:</span>
          <span className="text-xl font-bold text-green-600">R$ {totalPrice.toFixed(2)}</span>
        </div>
        
        <div className="text-center">
          {isComplete ? (
            <div className="text-green-600 mb-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Teclado completo!</span>
            </div>
          ) : (
            <div className="text-amber-600 mb-2 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>Faltam componentes</span>
            </div>
          )}
          
          <p className="text-sm text-gray-500 mb-4">
            {isComplete 
              ? 'Seu teclado está pronto para ser salvo e compartilhado!' 
              : 'Selecione todos os componentes para completar seu teclado.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default KeyboardPreview;