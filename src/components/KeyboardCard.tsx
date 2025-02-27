import React, { useState } from 'react';
import { CustomKeyboard } from '../types';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { useKeyboard } from '../context/KeyboardContext';

interface KeyboardCardProps {
  keyboard: CustomKeyboard;
  detailed?: boolean;
}

const KeyboardCard: React.FC<KeyboardCardProps> = ({ keyboard, detailed = false }) => {
  const { toggleLike, addComment } = useKeyboard();
  const [comment, setComment] = useState('');
  const [showComments, setShowComments] = useState(detailed);

  const handleLike = () => {
    toggleLike(keyboard.id);
  };

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      addComment(keyboard.id, {
        userId: 'user-temp',
        username: 'Você',
        content: comment
      });
      setComment('');
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('pt-BR', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(date);
  };

  const totalPrice = [
    keyboard.case?.price || 0,
    keyboard.switches?.price || 0,
    keyboard.keycaps?.price || 0,
    keyboard.plate?.price || 0,
    keyboard.pcb?.price || 0
  ].reduce((sum, price) => sum + price, 0);

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={keyboard.keycaps?.image || keyboard.case?.image || "https://images.unsplash.com/photo-1595225476474-87563907a212?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"} 
          alt={keyboard.name} 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
          <h3 className="text-white text-xl font-bold">{keyboard.name}</h3>
          <p className="text-gray-200 text-sm">por {keyboard.username}</p>
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-700">
            {formatDate(keyboard.createdAt)}
          </span>
          <span className="font-bold text-green-600">
            R$ {totalPrice.toFixed(2)}
          </span>
        </div>
        
        {detailed && (
          <div className="mb-4 space-y-2">
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Case:</span> {keyboard.case?.name || 'Nenhum'}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Switches:</span> {keyboard.switches?.name || 'Nenhum'}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Keycaps:</span> {keyboard.keycaps?.name || 'Nenhum'}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Plate:</span> {keyboard.plate?.name || 'Nenhum'}
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">PCB:</span> {keyboard.pcb?.name || 'Nenhum'}
            </p>
          </div>
        )}
        
        <div className="flex justify-between items-center border-t pt-3">
          <button 
            onClick={handleLike}
            className="flex items-center text-gray-600 hover:text-red-500 transition-colors"
          >
            <Heart className="h-5 w-5 mr-1" />
            <span>{keyboard.likes}</span>
          </button>
          
          <button 
            onClick={() => setShowComments(!showComments)}
            className="flex items-center text-gray-600 hover:text-blue-500 transition-colors"
          >
            <MessageCircle className="h-5 w-5 mr-1" />
            <span>{keyboard.comments.length}</span>
          </button>
          
          <button className="flex items-center text-gray-600 hover:text-green-500 transition-colors">
            <Share2 className="h-5 w-5 mr-1" />
            <span>Compartilhar</span>
          </button>
        </div>
      </div>
      
      {showComments && (
        <div className="bg-gray-50 p-4 border-t">
          <h4 className="font-medium mb-2">Comentários</h4>
          
          <div className="space-y-3 mb-4">
            {keyboard.comments.map(comment => (
              <div key={comment.id} className="bg-white p-3 rounded shadow-sm">
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{comment.username}</span>
                  <span className="text-xs text-gray-500">{formatDate(comment.createdAt)}</span>
                </div>
                <p className="text-gray-700 text-sm">{comment.content}</p>
              </div>
            ))}
            
            {keyboard.comments.length === 0 && (
              <p className="text-gray-500 text-sm">Nenhum comentário ainda. Seja o primeiro!</p>
            )}
          </div>
          
          <form onSubmit={handleSubmitComment} className="flex">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Adicione um comentário..."
              className="flex-1 border rounded-l px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
            <button 
              type="submit"
              className="bg-indigo-600 text-white px-4 py-2 rounded-r hover:bg-indigo-700 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default KeyboardCard;