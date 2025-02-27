import React, { useState } from 'react';
import { useKeyboard } from '../context/KeyboardContext';
import KeyboardCard from '../components/KeyboardCard';
import { Search, Filter } from 'lucide-react';

const CommunityPage: React.FC = () => {
  const { keyboards } = useKeyboard();
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState<'recent' | 'popular'>('recent');
  
  const filteredKeyboards = keyboards.filter(keyboard => 
    keyboard.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    keyboard.username.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const sortedKeyboards = [...filteredKeyboards].sort((a, b) => {
    if (sortBy === 'recent') {
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    } else {
      return b.likes - a.likes;
    }
  });
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Comunidade de Teclados</h1>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Buscar por nome ou usuário..."
            />
          </div>
          
          <div className="flex items-center">
            <div className="mr-2 flex items-center">
              <Filter className="h-5 w-5 text-gray-500 mr-1" />
              <span className="text-gray-700">Ordenar por:</span>
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'recent' | 'popular')}
              className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 py-2 px-3"
            >
              <option value="recent">Mais Recentes</option>
              <option value="popular">Mais Populares</option>
            </select>
          </div>
        </div>
      </div>
      
      {sortedKeyboards.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">Nenhum teclado encontrado com os critérios de busca.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedKeyboards.map(keyboard => (
            <KeyboardCard key={keyboard.id} keyboard={keyboard} detailed />
          ))}
        </div>
      )}
    </div>
  );
};

export default CommunityPage;