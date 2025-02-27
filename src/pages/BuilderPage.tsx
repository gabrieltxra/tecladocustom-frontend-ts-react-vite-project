import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useKeyboard } from '../context/KeyboardContext';
import PartSelector from '../components/PartSelector';
import KeyboardPreview from '../components/KeyboardPreview';
import { Save, RotateCcw } from 'lucide-react';

const BuilderPage: React.FC = () => {
  const navigate = useNavigate();
  const { 
    currentBuild, 
    setCurrentBuild, 
    getPartsByType, 
    addKeyboard,
    resetBuild
  } = useKeyboard();
  
  const [keyboardName, setKeyboardName] = useState(currentBuild.name);
  const [activeTab, setActiveTab] = useState<'case' | 'switches' | 'keycaps' | 'plate' | 'pcb'>('case');
  
  const handleSelectPart = (part: any) => {
    setCurrentBuild(prev => ({
      ...prev,
      [part.type]: part
    }));
  };
  
  const handleSaveKeyboard = () => {
    if (keyboardName.trim() === '') {
      alert('Por favor, dê um nome ao seu teclado.');
      return;
    }
    
    const isComplete = 
      currentBuild.case !== null && 
      currentBuild.switches !== null && 
      currentBuild.keycaps !== null && 
      currentBuild.plate !== null && 
      currentBuild.pcb !== null;
    
    if (!isComplete) {
      if (!confirm('Seu teclado não está completo. Deseja salvá-lo mesmo assim?')) {
        return;
      }
    }
    
    addKeyboard({
      ...currentBuild,
      name: keyboardName
    });
    
    resetBuild();
    navigate('/community');
  };
  
  const handleReset = () => {
    if (confirm('Tem certeza que deseja resetar o seu teclado?')) {
      resetBuild();
      setKeyboardName('Meu Teclado Custom');
    }
  };
  
  const tabClasses = (tab: string) => 
    `px-4 py-2 font-medium rounded-t-lg ${
      activeTab === tab 
        ? 'bg-white text-indigo-600 border-t border-l border-r border-gray-200' 
        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
    }`;
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Construa Seu Teclado</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column - Keyboard Preview */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <div className="mb-6">
              <label htmlFor="keyboard-name" className="block text-sm font-medium text-gray-700 mb-1">
                Nome do Teclado
              </label>
              <input
                type="text"
                id="keyboard-name"
                value={keyboardName}
                onChange={(e) => setKeyboardName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Digite um nome para seu teclado"
              />
            </div>
            
            <KeyboardPreview keyboard={{ ...currentBuild, name: keyboardName }} />
            
            <div className="mt-6 flex gap-4">
              <button
                onClick={handleSaveKeyboard}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md flex items-center justify-center"
              >
                <Save className="h-5 w-5 mr-2" />
                Salvar Teclado
              </button>
              
              <button
                onClick={handleReset}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md flex items-center justify-center"
              >
                <RotateCcw className="h-5 w-5 mr-2" />
                Resetar
              </button>
            </div>
          </div>
        </div>
        
        {/* Right Column - Part Selection */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex border-b">
              <button 
                onClick={() => setActiveTab('case')} 
                className={tabClasses('case')}
              >
                Case
              </button>
              <button 
                onClick={() => setActiveTab('switches')} 
                className={tabClasses('switches')}
              >
                Switches
              </button>
              <button 
                onClick={() => setActiveTab('keycaps')} 
                className={tabClasses('keycaps')}
              >
                Keycaps
              </button>
              <button 
                onClick={() => setActiveTab('plate')} 
                className={tabClasses('plate')}
              >
                Plate
              </button>
              <button 
                onClick={() => setActiveTab('pcb')} 
                className={tabClasses('pcb')}
              >
                PCB
              </button>
            </div>
            
            <div className="p-6">
              {activeTab === 'case' && (
                <PartSelector
                  parts={getPartsByType('case')}
                  selectedPart={currentBuild.case}
                  onSelect={handleSelectPart}
                  type="case"
                />
              )}
              
              {activeTab === 'switches' && (
                <PartSelector
                  parts={getPartsByType('switches')}
                  selectedPart={currentBuild.switches}
                  onSelect={handleSelectPart}
                  type="switches"
                />
              )}
              
              {activeTab === 'keycaps' && (
                <PartSelector
                  parts={getPartsByType('keycaps')}
                  selectedPart={currentBuild.keycaps}
                  onSelect={handleSelectPart}
                  type="keycaps"
                />
              )}
              
              {activeTab === 'plate' && (
                <PartSelector
                  parts={getPartsByType('plate')}
                  selectedPart={currentBuild.plate}
                  onSelect={handleSelectPart}
                  type="plate"
                />
              )}
              
              {activeTab === 'pcb' && (
                <PartSelector
                  parts={getPartsByType('pcb')}
                  selectedPart={currentBuild.pcb}
                  onSelect={handleSelectPart}
                  type="pcb"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuilderPage;