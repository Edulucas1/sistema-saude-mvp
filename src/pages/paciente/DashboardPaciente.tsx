import { useState,useEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  Home,
  Activity,
  FileText,
  User,
  HelpCircle,
  Stethoscope,
  Syringe,
  Pill,
  Calendar,
  FlaskConical,
  LogOut
} from 'lucide-react';

export default function DashboardPaciente() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('inicio');

  const handleLogout = () => {
    navigate('/');
  };

  // 1. Estados para guardar os dados reais (substituem os dados fixos)
  const [paciente, setPaciente] = useState({ nome: 'Carregando...', primeiroNome: '...' });
  const [historicoRede, setHistoricoRede] = useState([]);
  const [carregando, setCarregando] = useState(true);

  // 2. O useEffect busca os dados no Back-end assim que o Dashboard abre
  useEffect(() => {
    // Busca dados do paciente (ajuste o endereço se necessário)
    fetch('http://localhost:3001/api/pacientes') 
      .then(resposta => resposta.json())
      .then(dados => {
        // Se o banco retornar uma lista, pegamos o primeiro paciente
        const dadosPaciente = Array.isArray(dados) ? dados[0] : dados;
        setPaciente(dadosPaciente);
        setCarregando(false);
      })
      .catch(erro => {
        console.error("Erro ao buscar dados do banco:", erro);
        setCarregando(false);
      });
  }, []); // Os colchetes vazios indicam que isso só roda UMA VEZ ao abrir a página
  const menuItems = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'minha-saude', label: 'Minha Saúde', icon: Activity },
    { id: 'conteudos', label: 'Conteúdos', icon: FileText },
    { id: 'perfil', label: 'Meu Perfil', icon: User },
    { id: 'duvidas', label: 'Dúvidas Frequentes', icon: HelpCircle }
  ];

  const saudeCards = [
    { id: 'consultas', label: 'Consultas', icon: Stethoscope, color: 'bg-blue-50' },
    { id: 'vacinas', label: 'Vacinas', icon: Syringe, color: 'bg-blue-50' },
    { id: 'exames', label: 'Exames', icon: FlaskConical, color: 'bg-blue-50' },
    { id: 'medicamentos', label: 'Medicamentos', icon: Pill, color: 'bg-blue-50' },
    { id: 'agendamentos', label: 'Agendamentos', icon: Calendar, color: 'bg-blue-50' }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-700 to-blue-800 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-blue-600">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
              <Activity className="w-5 h-5 text-blue-700" />
            </div>
            <span className="font-bold text-lg">MedConnect</span>
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                  activeMenu === item.id
                    ? 'bg-blue-600 border-l-4 border-white'
                    : 'hover:bg-blue-600/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-6 py-4 hover:bg-blue-600 transition-colors border-t border-blue-600"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Sair</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl text-gray-900">
              Olá, <span className="font-semibold">{paciente.primeiroNome}</span>
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Paciente</span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-700" />
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-8">
          {activeMenu === 'inicio' && (
            <div className="space-y-6">
              {/* Banner Azul */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">Mantenha a sua rede atualizada!</h2>
                  <p className="text-sm text-blue-100">
                    Autorize as clínicas parceiras e obtenha um atendimento médico para
                    <br />
                    um atendimento mais rápido e preciso.
                  </p>
                </div>
                <button className="bg-white text-blue-700 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-colors whitespace-nowrap">
                  Gerir Autorizações
                </button>
              </div>

              {/* Minha Saúde */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Minha Saúde</h2>
                <div className="grid grid-cols-5 gap-4">
                  {saudeCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <button
                        key={card.id}
                        className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 flex flex-col items-center justify-center gap-3 group"
                      >
                        <div className={`${card.color} p-4 rounded-lg group-hover:scale-110 transition-transform`}>
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{card.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Histórico na Rede */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Histórico na Rede</h2>
                  <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                    Ver todo o histórico
                  </button>
                </div>

                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Data</th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Clínica / Unidade</th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Profissional</th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Região</th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Ação</th>
                      </tr>
                    </thead>
                    <tbody>
                      {historicoRede.map((item, index) => (
                        <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-900">{item.data}</td>
                          <td className="px-6 py-4 text-sm text-gray-900 flex items-center gap-2">
                            <Activity className="w-4 h-4 text-blue-600" />
                            {item.clinica}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-900">{item.profissional}</td>
                          <td className="px-6 py-4">
                            <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                              item.regiao === 'Consulta Real'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-blue-100 text-blue-700'
                            }`}>
                              {item.regiao}
                            </span>
                          </td>
                          <td className="px-6 py-4">
                            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                              {item.detalhes}
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'minha-saude' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Minha Saúde</h2>
              <div className="bg-white rounded-xl p-8 text-center">
                <Activity className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Seus dados de saúde em um só lugar
                </h3>
                <p className="text-gray-600">
                  Acesse consultas, exames, vacinas e medicamentos de forma centralizada.
                </p>
              </div>
            </div>
          )}

          {activeMenu === 'conteudos' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conteúdos</h2>
              <div className="bg-white rounded-xl p-8 text-center">
                <FileText className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Conteúdos informativos sobre saúde
                </h3>
                <p className="text-gray-600">
                  Artigos, dicas e orientações para cuidar melhor da sua saúde.
                </p>
              </div>
            </div>
          )}

          {activeMenu === 'perfil' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Meu Perfil</h2>
              <div className="bg-white rounded-xl p-8">
                <div className="flex items-start gap-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{paciente.nome}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500 mb-1">CPF</p>
                        <p className="font-medium text-gray-900">123.456.789-00</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Data de Nascimento</p>
                        <p className="font-medium text-gray-900">15/03/1985</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Tipo Sanguíneo</p>
                        <p className="font-medium text-gray-900">O+</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 mb-1">Email</p>
                        <p className="font-medium text-gray-900">eduardo@email.com</p>
                      </div>
                    </div>
                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      Editar Perfil
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMenu === 'duvidas' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dúvidas Frequentes</h2>
              <div className="bg-white rounded-xl p-6 space-y-4">
                {[
                  {
                    pergunta: 'Como agendar uma consulta?',
                    resposta: 'Você pode agendar consultas através da seção "Agendamentos" no menu Minha Saúde.'
                  },
                  {
                    pergunta: 'Como acessar meus exames?',
                    resposta: 'Seus exames ficam disponíveis na seção "Exames" e podem ser baixados em PDF.'
                  },
                  {
                    pergunta: 'Como autorizar clínicas parceiras?',
                    resposta: 'Use o botão "Gerir Autorizações" no banner principal para gerenciar suas autorizações.'
                  }
                ].map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-blue-600" />
                      {item.pergunta}
                    </h3>
                    <p className="text-sm text-gray-600 ml-7">{item.resposta}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
