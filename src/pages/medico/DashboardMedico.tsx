import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Stethoscope,
  Calendar,
  Users,
  FileText,
  Clock,
  Heart,
  LogOut,
  Bell,
  Settings,
  Search,
  Plus,
  Activity
} from 'lucide-react';

export default function DashboardMedico() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('inicio');
  const [searchQuery, setSearchQuery] = useState('');

  const handleLogout = () => {
    navigate('/');
  };

  // Dados mockados
  const medico = {
    nome: 'Dr. João Carvalho',
    crm: 'CRM 12345/SP',
    especialidade: 'Cardiologia',
    foto: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop'
  };

  const agendaHoje = [
    {
      id: 1,
      horario: '09:00',
      paciente: 'Maria Silva Santos',
      tipo: 'Consulta de Retorno',
      status: 'confirmado'
    },
    {
      id: 2,
      horario: '10:00',
      paciente: 'José Oliveira',
      tipo: 'Primeira Consulta',
      status: 'confirmado'
    },
    {
      id: 3,
      horario: '11:00',
      paciente: 'Ana Paula Costa',
      tipo: 'Exame de Rotina',
      status: 'aguardando'
    },
    {
      id: 4,
      horario: '14:00',
      paciente: 'Pedro Santos',
      tipo: 'Consulta de Retorno',
      status: 'confirmado'
    }
  ];

  const pacientesRecentes = [
    {
      id: 1,
      nome: 'Maria Silva Santos',
      idade: 41,
      ultimaConsulta: '20/03/2026',
      condicao: 'Hipertensão',
      prioridade: 'normal'
    },
    {
      id: 2,
      nome: 'José Oliveira',
      idade: 55,
      ultimaConsulta: '18/03/2026',
      condicao: 'Diabetes Tipo 2',
      prioridade: 'alta'
    },
    {
      id: 3,
      nome: 'Ana Paula Costa',
      idade: 33,
      ultimaConsulta: '15/03/2026',
      condicao: 'Rotina',
      prioridade: 'normal'
    }
  ];

  const examesPendentes = [
    {
      id: 1,
      paciente: 'Maria Silva Santos',
      exame: 'Ecocardiograma',
      solicitado: '15/03/2026',
      status: 'Pendente'
    },
    {
      id: 2,
      paciente: 'José Oliveira',
      exame: 'Holter 24h',
      solicitado: '18/03/2026',
      status: 'Em análise'
    }
  ];

  const estatisticas = {
    consultasHoje: agendaHoje.length,
    pacientesAtivos: 156,
    examesPendentes: examesPendentes.length,
    proximaConsulta: '09:00'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-green-500 to-green-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MedConnect</h1>
                <p className="text-xs text-gray-600">Área do Médico</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut className="w-5 h-5" />
                <span className="text-sm font-medium">Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Perfil */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="text-center">
                <img
                  src={medico.foto}
                  alt="Foto do médico"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-green-100"
                />
                <h2 className="font-bold text-gray-900 mb-1">{medico.nome}</h2>
                <p className="text-sm text-gray-600 mb-1">{medico.crm}</p>
                <div className="bg-green-50 rounded-lg p-2 text-sm mt-3">
                  <p className="text-green-700 font-medium">{medico.especialidade}</p>
                </div>
              </div>
            </div>

            {/* Menu */}
            <nav className="bg-white rounded-xl shadow-sm p-4 space-y-1">
              {[
                { id: 'inicio', label: 'Início', icon: Activity },
                { id: 'agenda', label: 'Agenda', icon: Calendar },
                { id: 'pacientes', label: 'Pacientes', icon: Users },
                { id: 'exames', label: 'Exames', icon: FileText },
                { id: 'prescricoes', label: 'Prescrições', icon: Stethoscope }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-green-50 text-green-600 font-medium'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            {activeTab === 'inicio' && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Bem-vindo, {medico.nome.split(' ')[1]}!
                  </h2>
                  <p className="text-gray-600">Hoje é {new Date().toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                {/* Cards de Estatísticas */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                    <Calendar className="w-8 h-8 mb-3 opacity-80" />
                    <p className="text-sm opacity-90">Consultas Hoje</p>
                    <p className="text-3xl font-bold">{estatisticas.consultasHoje}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                    <Users className="w-8 h-8 mb-3 opacity-80" />
                    <p className="text-sm opacity-90">Pacientes Ativos</p>
                    <p className="text-3xl font-bold">{estatisticas.pacientesAtivos}</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                    <FileText className="w-8 h-8 mb-3 opacity-80" />
                    <p className="text-sm opacity-90">Exames Pendentes</p>
                    <p className="text-3xl font-bold">{estatisticas.examesPendentes}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                    <Clock className="w-8 h-8 mb-3 opacity-80" />
                    <p className="text-sm opacity-90">Próxima Consulta</p>
                    <p className="text-3xl font-bold">{estatisticas.proximaConsulta}</p>
                  </div>
                </div>

                {/* Agenda de Hoje */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-green-600" />
                      Agenda de Hoje
                    </h3>
                    <button className="text-green-600 hover:text-green-700 text-sm font-medium">
                      Ver agenda completa →
                    </button>
                  </div>
                  <div className="space-y-3">
                    {agendaHoje.map((consulta) => (
                      <div key={consulta.id} className="border border-gray-200 rounded-lg p-4 hover:border-green-300 transition-colors">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="bg-green-100 text-green-700 font-bold text-sm px-3 py-2 rounded-lg">
                              {consulta.horario}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{consulta.paciente}</h4>
                              <p className="text-sm text-gray-600">{consulta.tipo}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                              consulta.status === 'confirmado' 
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {consulta.status === 'confirmado' ? 'Confirmado' : 'Aguardando'}
                            </span>
                            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                              Iniciar
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Exames Pendentes */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5 text-orange-600" />
                    Exames Pendentes de Análise
                  </h3>
                  <div className="space-y-3">
                    {examesPendentes.map((exame) => (
                      <div key={exame.id} className="border border-gray-200 rounded-lg p-4 flex justify-between items-center hover:border-orange-300 transition-colors">
                        <div>
                          <h4 className="font-semibold text-gray-900">{exame.exame}</h4>
                          <p className="text-sm text-gray-600">Paciente: {exame.paciente}</p>
                          <p className="text-xs text-gray-500 mt-1">Solicitado em: {exame.solicitado}</p>
                        </div>
                        <button className="px-4 py-2 bg-orange-50 text-orange-600 rounded-lg hover:bg-orange-100 transition-colors font-medium">
                          Analisar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'agenda' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Agenda</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Plus className="w-5 h-5" />
                    Novo Agendamento
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="space-y-4">
                    {agendaHoje.map((consulta) => (
                      <div key={consulta.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="bg-green-100 text-green-700 font-bold text-lg px-4 py-3 rounded-lg">
                              {consulta.horario}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{consulta.paciente}</h3>
                              <p className="text-gray-600">{consulta.tipo}</p>
                            </div>
                          </div>
                          <span className={`text-sm font-medium px-4 py-2 rounded-full ${
                            consulta.status === 'confirmado' 
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {consulta.status === 'confirmado' ? 'Confirmado' : 'Aguardando Confirmação'}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            Iniciar Atendimento
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Ver Prontuário
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Remarcar
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pacientes' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Meus Pacientes</h2>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Buscar paciente..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    />
                  </div>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="space-y-4">
                    {pacientesRecentes.map((paciente) => (
                      <div key={paciente.id} className="border border-gray-200 rounded-lg p-6 hover:border-green-300 transition-colors">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-lg font-semibold text-gray-900">{paciente.nome}</h3>
                              {paciente.prioridade === 'alta' && (
                                <span className="bg-red-100 text-red-700 text-xs font-medium px-2 py-1 rounded">
                                  Prioridade Alta
                                </span>
                              )}
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500">Idade</p>
                                <p className="font-medium text-gray-900">{paciente.idade} anos</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Última Consulta</p>
                                <p className="font-medium text-gray-900">{paciente.ultimaConsulta}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Condição</p>
                                <p className="font-medium text-gray-900">{paciente.condicao}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 ml-4">
                            <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm whitespace-nowrap">
                              Ver Prontuário
                            </button>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm whitespace-nowrap">
                              Agendar Consulta
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'exames' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Exames para Análise</h2>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="space-y-4">
                    {examesPendentes.map((exame) => (
                      <div key={exame.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{exame.exame}</h3>
                            <p className="text-gray-600">Paciente: {exame.paciente}</p>
                            <p className="text-sm text-gray-500 mt-1">Solicitado em: {exame.solicitado}</p>
                          </div>
                          <span className={`text-sm font-medium px-4 py-2 rounded-full ${
                            exame.status === 'Pendente'
                              ? 'bg-yellow-100 text-yellow-700'
                              : 'bg-blue-100 text-blue-700'
                          }`}>
                            {exame.status}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                            Analisar Resultado
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Ver Prontuário
                          </button>
                          <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors">
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'prescricoes' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Prescrições</h2>
                  <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    <Plus className="w-5 h-5" />
                    Nova Prescrição
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="text-center py-12">
                    <Stethoscope className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Gerencie suas prescrições médicas
                    </h3>
                    <p className="text-gray-600 mb-6">
                      Crie e acompanhe prescrições para seus pacientes de forma digital e segura.
                    </p>
                    <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium">
                      Criar Primeira Prescrição
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}