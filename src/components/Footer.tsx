import React from 'react';
import { Keyboard, Github, Twitter, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Keyboard className="h-8 w-8 text-indigo-400 mr-2" />
            <span className="text-xl font-bold">TecladoCustom</span>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="#" className="hover:text-indigo-400 transition-colors">
              <Instagram className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-4 md:mb-0">
              <h3 className="text-lg font-semibold mb-2">Sobre Nós</h3>
              <p className="text-gray-400 max-w-md">
                TecladoCustom é a plataforma ideal para entusiastas de teclados mecânicos personalizados.
                Construa, compartilhe e descubra teclados únicos criados pela comunidade.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-2">Links Rápidos</h3>
              <ul className="text-gray-400">
                <li className="mb-1"><a href="#" className="hover:text-indigo-400 transition-colors">Início</a></li>
                <li className="mb-1"><a href="#" className="hover:text-indigo-400 transition-colors">Construir</a></li>
                <li className="mb-1"><a href="#" className="hover:text-indigo-400 transition-colors">Comunidade</a></li>
                <li className="mb-1"><a href="#" className="hover:text-indigo-400 transition-colors">Contato</a></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} TecladoCustom. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;