import { useState } from 'react';
import { useNavigate } from 'react-router';
import { Stethoscope, Lock, User, ArrowLeft } from 'lucide-react';
import logoMedConnect from '../../assets/logo-medconnect.png';
export default function LoginMedicoCompleto() {
  const navigate = useNavigate();
  const [crm, setCrm] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulação de login - em produção, validar com backend
    if (crm && senha) {
      navigate('/medico/dashboard-completo');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Back Button */}
        <button
          onClick={() => navigate('/clinica/dashboard-completo')}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Voltar para Clínica</span>
        </button>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl p-8">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <img src={logoMedConnect} alt="MedConnect" className="h-12" />
          </div>

          {/* Title */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-br from-green-500 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Stethoscope className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Área do Médico
            </h2>
            <p className="text-gray-600">
              Acesse o prontuário eletrônico
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                CRM
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  value={crm}
                  onChange={(e) => setCrm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  placeholder="CRM-SP 123456"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={senha}
                  onChange={(e) => setSenha(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none transition-colors"
                  placeholder="••••••••"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-500 to-blue-600 text-white py-3 rounded-lg hover:from-green-600 hover:to-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl"
            >
              Acessar Prontuário
            </button>
          </form>

          {/* Info */}
          <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-200">
            <p className="text-sm text-green-800 text-center">
              <Stethoscope className="w-4 h-4 inline mr-2" />
              Acesso exclusivo para médicos cadastrados
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
