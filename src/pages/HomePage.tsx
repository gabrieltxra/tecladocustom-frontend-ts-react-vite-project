import React from 'react';
import { Link } from 'react-router-dom';
import { Keyboard, PenTool as Tool, Users, Upload } from 'lucide-react';
import { useKeyboard } from '../context/KeyboardContext';
import KeyboardCard from '../components/KeyboardCard';

const HomePage: React.FC = () => {
  const { keyboards } = useKeyboard();
  const featuredKeyboards = keyboards.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Construa o Teclado Mecânico dos Seus Sonhos
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Personalize cada detalhe, compartilhe suas criações e inspire-se com a comunidade de entusiastas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/builder" 
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-md"
            >
              Começar a Construir
            </Link>
            <Link 
              to="/community" 
              className="bg-transparent border-2 border-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold text-lg transition-colors"
            >
              Ver Comunidade
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Keyboard className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Escolha as Peças</h3>
              <p className="text-gray-600">
                Selecione entre uma variedade de cases, switches, keycaps, plates e PCBs para o seu teclado ideal.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tool className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalize</h3>
              <p className="text-gray-600">
                Combine as peças para criar um teclado único que atenda às suas preferências de estilo e desempenho.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Upload className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Compartilhe</h3>
              <p className="text-gray-600">
                Salve e compartilhe sua criação com a comunidade para receber feedback e inspirar outros entusiastas.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Comunidade</h3>
              <p className="text-gray-600">
                Conecte-se com outros entusiastas, dê feedback em seus projetos e descubra novas ideias.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Keyboards Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold">Teclados em Destaque</h2>
            <Link to="/community" className="text-indigo-600 hover:text-indigo-800 font-medium">
              Ver Todos →
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredKeyboards.map(keyboard => (
              <KeyboardCard key={keyboard.id} keyboard={keyboard} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Criar Seu Teclado?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comece agora mesmo a construir o teclado mecânico dos seus sonhos e junte-se à nossa comunidade de entusiastas.
          </p>
          <Link 
            to="/builder" 
            className="bg-indigo-600 hover:bg-indigo-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors inline-block"
          >
            Começar a Construir
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;