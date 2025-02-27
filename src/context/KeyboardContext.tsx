import React, { createContext, useContext, useState, useEffect } from 'react';
import { CustomKeyboard, KeyboardPart } from '../types';
import { keyboardParts } from '../data/parts';
import { sampleKeyboards } from '../data/keyboards';

interface KeyboardContextType {
  parts: KeyboardPart[];
  keyboards: CustomKeyboard[];
  currentBuild: CustomKeyboard;
  setCurrentBuild: React.Dispatch<React.SetStateAction<CustomKeyboard>>;
  addKeyboard: (keyboard: CustomKeyboard) => void;
  addComment: (keyboardId: string, comment: { userId: string; username: string; content: string }) => void;
  toggleLike: (keyboardId: string) => void;
  getPartsByType: (type: KeyboardPart['type']) => KeyboardPart[];
  resetBuild: () => void;
}

const defaultBuild: CustomKeyboard = {
  id: '',
  name: 'Meu Teclado Custom',
  userId: 'user-temp',
  username: 'Você',
  case: null,
  switches: null,
  keycaps: null,
  plate: null,
  pcb: null,
  createdAt: new Date().toISOString(),
  likes: 0,
  comments: []
};

const KeyboardContext = createContext<KeyboardContextType | undefined>(undefined);

export const KeyboardProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [parts] = useState<KeyboardPart[]>(keyboardParts);
  const [keyboards, setKeyboards] = useState<CustomKeyboard[]>(sampleKeyboards);
  const [currentBuild, setCurrentBuild] = useState<CustomKeyboard>({ ...defaultBuild });

  const getPartsByType = (type: KeyboardPart['type']) => {
    return parts.filter(part => part.type === type);
  };

  const addKeyboard = (keyboard: CustomKeyboard) => {
    const newKeyboard = {
      ...keyboard,
      id: `kb-${Date.now()}`,
      createdAt: new Date().toISOString()
    };
    setKeyboards(prev => [newKeyboard, ...prev]);
  };

  const addComment = (keyboardId: string, comment: { userId: string; username: string; content: string }) => {
    setKeyboards(prev => 
      prev.map(kb => 
        kb.id === keyboardId 
          ? {
              ...kb,
              comments: [
                ...kb.comments,
                {
                  id: `comment-${Date.now()}`,
                  ...comment,
                  createdAt: new Date().toISOString()
                }
              ]
            }
          : kb
      )
    );
  };

  const toggleLike = (keyboardId: string) => {
    setKeyboards(prev => 
      prev.map(kb => 
        kb.id === keyboardId 
          ? { ...kb, likes: kb.likes + 1 }
          : kb
      )
    );
  };

  const resetBuild = () => {
    setCurrentBuild({ ...defaultBuild });
  };

  return (
    <KeyboardContext.Provider
      value={{
        parts,
        keyboards,
        currentBuild,
        setCurrentBuild,
        addKeyboard,
        addComment,
        toggleLike,
        getPartsByType,
        resetBuild
      }}
    >
      {children}
    </KeyboardContext.Provider>
  );
};

export const useKeyboard = () => {
  const context = useContext(KeyboardContext);
  if (context === undefined) {
    throw new Error('useKeyboard must be used within a KeyboardProvider');
  }
  return context;
};