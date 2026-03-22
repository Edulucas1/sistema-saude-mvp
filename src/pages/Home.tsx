import { useNavigate } from 'react-router';
import { User, Building2, Heart } from 'lucide-react';
import logoMedConnect from 'figma:asset/fdd8d35e8286bbfb03a0255f9eeb3eb33167ef71.png';
export default function Home() {
  const navigate = useNavigate();

  const userTypes = [
    {
      title: 'Paciente',
      description: 'Acesse seus dados de saúde, consultas e exames',
      icon: User,
      path: '/paciente/login',
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Clínica',
      description: 'Administre sua clínica e equipe médica',
      icon: Building2,
      path: '/clinica/login',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-br from-blue-500 to-green-500 p-2 rounded-lg">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">MedConnect</h1>
              <p className="text-sm text-gray-600">Sistema Integrado de Gestão de Saúde</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Bem-vindo ao MedConnect
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Escolha seu tipo de acesso para continuar
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {userTypes.map((type) => {
            const Icon = type.icon;
            return (
              <button
                key={type.path}
                onClick={() => navigate(type.path)}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 text-center group hover:-translate-y-2"
              >
                <div className={`bg-gradient-to-br ${type.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {type.title}
                </h3>
                <p className="text-gray-600">
                  {type.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Features */}
        <div className="mt-20 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Recursos do Sistema
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Prontuário Digital</h4>
              <p className="text-sm text-gray-600">Acesso completo ao seu histórico de saúde</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <User className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Gestão de Consultas</h4>
              <p className="text-sm text-gray-600">Agende e gerencie suas consultas</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Building2 className="w-6 h-6 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Integração Total</h4>
              <p className="text-sm text-gray-600">Sistema integrado entre pacientes, médicos e clínicas</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-600 text-sm">
            © 2026 MedConnect - Sistema Integrado de Gestão de Saúde
          </p>
        </div>
      </footer>
    </div>
  );
}