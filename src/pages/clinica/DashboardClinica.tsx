import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Building2,
  Users,
  Calendar,
  TrendingUp,
  DollarSign,
  UserCheck,
  Clock,
  Heart,
  LogOut,
  Bell,
  Settings,
  BarChart3,
  Activity,
  Stethoscope
} from 'lucide-react';

export default function DashboardClinica() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('inicio');

  const handleLogout = () => {
    navigate('/');
  };

  // Dados mockados
  const clinica = {
    nome: 'Clínica São Lucas',
    cnpj: '12.345.678/0001-90',
    endereco: 'Av. Principal, 1000 - São Paulo, SP',
    logo: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop'
  };

  const equipe = [
    {
      id: 1,
      nome: 'Dr. João Carvalho',
      especialidade: 'Cardiologia',
      crm: 'CRM 12345/SP',
      status: 'ativo',
      consultasHoje: 8
    },
    {
      id: 2,
      nome: 'Dra. Ana Costa',
      especialidade: 'Oftalmologia',
      crm: 'CRM 23456/SP',
      status: 'ativo',
      consultasHoje: 6
    },
    {
      id: 3,
      nome: 'Dr. Pedro Lima',
      especialidade: 'Clínico Geral',
      crm: 'CRM 34567/SP',
      status: 'ativo',
      consultasHoje: 10
    },
    {
      id: 4,
      nome: 'Dra. Mariana Silva',
      especialidade: 'Pediatria',
      crm: 'CRM 45678/SP',
      status: 'folga',
      consultasHoje: 0
    }
  ];

  const consultasHoje = [
    { hora: '08:00-09:00', medico: 'Dr. João Carvalho', pacientes: 2, status: 'concluído' },
    { hora: '09:00-10:00', medico: 'Dra. Ana Costa', pacientes: 1, status: 'em andamento' },
    { hora: '10:00-11:00', medico: 'Dr. Pedro Lima', pacientes: 3, status: 'agendado' },
    { hora: '11:00-12:00', medico: 'Dr. João Carvalho', pacientes: 2, status: 'agendado' }
  ];

  const estatisticas = {
    pacientesAtendidosHoje: 45,
    consultasAgendadas: 28,
    medicosAtivos: 3,
    receitaMensal: 'R$ 125.430'
  };

  const pacientesRecentes = [
    {
      id: 1,
      nome: 'Maria Silva Santos',
      medico: 'Dr. João Carvalho',
      hora: '09:30',
      status: 'Em atendimento'
    },
    {
      id: 2,
      nome: 'José Oliveira',
      medico: 'Dra. Ana Costa',
      hora: '10:00',
      status: 'Aguardando'
    },
    {
      id: 3,
      nome: 'Ana Paula Costa',
      medico: 'Dr. Pedro Lima',
      hora: '10:30',
      status: 'Confirmado'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 p-2 rounded-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">MedConnect</h1>
                <p className="text-xs text-gray-600">Área da Clínica</p>
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
            {/* Info da Clínica */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <div className="text-center">
                <img
                  src={clinica.logo}
                  alt="Logo da clínica"
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-purple-100"
                />
                <h2 className="font-bold text-gray-900 mb-1">{clinica.nome}</h2>
                <p className="text-xs text-gray-600 mb-3">CNPJ: {clinica.cnpj}</p>
                <div className="bg-purple-50 rounded-lg p-3 text-xs">
                  <p className="text-purple-700">{clinica.endereco}</p>
                </div>
              </div>
            </div>

            {/* Menu */}
            <nav className="bg-white rounded-xl shadow-sm p-4 space-y-1">
              {[
                { id: 'inicio', label: 'Início', icon: Activity },
                { id: 'equipe', label: 'Equipe Médica', icon: UserCheck },
                { id: 'agenda', label: 'Agenda', icon: Calendar },
                { id: 'pacientes', label: 'Pacientes', icon: Users },
                { id: 'relatorios', label: 'Relatórios', icon: BarChart3 }
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                      activeTab === item.id
                        ? 'bg-purple-50 text-purple-600 font-medium'
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h2>
                  <p className="text-gray-600">Visão geral da {clinica.nome}</p>
                </div>

                {/* Cards de Estatísticas */}
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                    <Users className="w-8 h-8 mb-3 opacity-80" />
                    <p className="text-sm opacity-90">Pacientes Hoje</p>
                    <p className="text-3xl font-bold">{estatisticas.pacientesAtendidosHoje}</p>
                  </div>
                  <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                    <Calendar className="w-8 h-8 mb-3 opacity-80" />
                    <p className="text-sm opacity-90">Consultas Agendadas</p>
                    <p className="text-3xl font-bold">{estatisticas.consultasAgendadas}</p>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white">
                    <UserCheck className="w-8 h-8 mb-3 opacity-80" />
                    <p className="text-sm opacity-90">Médicos Ativos</p>
                    <p className="text-3xl font-bold">{estatisticas.medicosAtivos}</p>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white">
                    <DollarSign className="w-8 h-8 mb-3 opacity-80" />
                    <p className="text-sm opacity-90">Receita Mensal</p>
                    <p className="text-2xl font-bold">{estatisticas.receitaMensal}</p>
                  </div>
                </div>

                {/* Consultas de Hoje */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-purple-600" />
                    Movimentação de Hoje
                  </h3>
                  <div className="space-y-3">
                    {consultasHoje.map((periodo, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="bg-purple-100 text-purple-700 font-semibold text-sm px-3 py-2 rounded-lg">
                              {periodo.hora}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">{periodo.medico}</h4>
                              <p className="text-sm text-gray-600">{periodo.pacientes} paciente(s)</p>
                            </div>
                          </div>
                          <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                            periodo.status === 'concluído'
                              ? 'bg-green-100 text-green-700'
                              : periodo.status === 'em andamento'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {periodo.status === 'concluído' ? 'Concluído' : 
                             periodo.status === 'em andamento' ? 'Em Andamento' : 'Agendado'}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Equipe Ativa */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <UserCheck className="w-5 h-5 text-green-600" />
                      Equipe Ativa Hoje
                    </h3>
                    <div className="space-y-3">
                      {equipe.filter(m => m.status === 'ativo').slice(0, 3).map((medico) => (
                        <div key={medico.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{medico.nome}</p>
                            <p className="text-xs text-gray-600">{medico.especialidade}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs text-gray-500">Consultas</p>
                            <p className="font-bold text-purple-600">{medico.consultasHoje}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Próximos Atendimentos */}
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5 text-blue-600" />
                      Próximos Atendimentos
                    </h3>
                    <div className="space-y-3">
                      {pacientesRecentes.map((paciente) => (
                        <div key={paciente.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">{paciente.nome}</p>
                            <p className="text-xs text-gray-600">{paciente.medico}</p>
                          </div>
                          <div className="text-right">
                            <p className="text-xs font-medium text-gray-900">{paciente.hora}</p>
                            <span className={`text-xs px-2 py-0.5 rounded ${
                              paciente.status === 'Em atendimento'
                                ? 'bg-blue-100 text-blue-700'
                                : paciente.status === 'Aguardando'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {paciente.status}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'equipe' && (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">Equipe Médica</h2>
                  <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                    Adicionar Médico
                  </button>
                </div>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="space-y-4">
                    {equipe.map((medico) => (
                      <div key={medico.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <h3 className="text-lg font-semibold text-gray-900">{medico.nome}</h3>
                              <span className={`text-xs font-medium px-3 py-1 rounded-full ${
                                medico.status === 'ativo'
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-gray-100 text-gray-700'
                              }`}>
                                {medico.status === 'ativo' ? 'Ativo' : 'Folga'}
                              </span>
                            </div>
                            <div className="grid md:grid-cols-3 gap-4 text-sm">
                              <div>
                                <p className="text-gray-500">Especialidade</p>
                                <p className="font-medium text-gray-900">{medico.especialidade}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">CRM</p>
                                <p className="font-medium text-gray-900">{medico.crm}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Consultas Hoje</p>
                                <p className="font-medium text-gray-900">{medico.consultasHoje}</p>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col gap-2 ml-4">
                            <button 
                              onClick={() => navigate('/medico/dashboard')}
                              className="flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm whitespace-nowrap"
                            >
                              <Stethoscope className="w-4 h-4" />
                              Acessar como Médico
                            </button>
                            <button className="px-4 py-2 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors text-sm whitespace-nowrap">
                              Ver Agenda
                            </button>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm whitespace-nowrap">
                              Editar
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'agenda' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Agenda Geral</h2>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="space-y-4">
                    {consultasHoje.map((periodo, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-4">
                            <div className="bg-purple-100 text-purple-700 font-bold text-lg px-4 py-3 rounded-lg">
                              {periodo.hora}
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{periodo.medico}</h3>
                              <p className="text-gray-600">{periodo.pacientes} paciente(s) agendado(s)</p>
                            </div>
                          </div>
                          <span className={`text-sm font-medium px-4 py-2 rounded-full ${
                            periodo.status === 'concluído'
                              ? 'bg-green-100 text-green-700'
                              : periodo.status === 'em andamento'
                              ? 'bg-blue-100 text-blue-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {periodo.status === 'concluído' ? 'Concluído' : 
                             periodo.status === 'em andamento' ? 'Em Andamento' : 'Agendado'}
                          </span>
                        </div>
                        <button className="text-purple-600 hover:text-purple-700 text-sm font-medium">
                          Ver detalhes →
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pacientes' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pacientes</h2>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <div className="space-y-3">
                    {pacientesRecentes.map((paciente) => (
                      <div key={paciente.id} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex justify-between items-center">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{paciente.nome}</h3>
                            <p className="text-sm text-gray-600">Médico: {paciente.medico}</p>
                            <p className="text-sm text-gray-500 mt-1">Horário: {paciente.hora}</p>
                          </div>
                          <div className="flex flex-col gap-2">
                            <span className={`text-sm font-medium px-4 py-2 rounded-full text-center ${
                              paciente.status === 'Em atendimento'
                                ? 'bg-blue-100 text-blue-700'
                                : paciente.status === 'Aguardando'
                                ? 'bg-yellow-100 text-yellow-700'
                                : 'bg-green-100 text-green-700'
                            }`}>
                              {paciente.status}
                            </span>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                              Ver Ficha
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'relatorios' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Relatórios e Análises</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-blue-100 p-3 rounded-lg">
                        <TrendingUp className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Crescimento Mensal</h3>
                        <p className="text-sm text-gray-600">Pacientes atendidos</p>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">+18%</p>
                    <p className="text-sm text-green-600">↑ Comparado ao mês anterior</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-green-100 p-3 rounded-lg">
                        <DollarSign className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Faturamento</h3>
                        <p className="text-sm text-gray-600">Mês atual</p>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{estatisticas.receitaMensal}</p>
                    <p className="text-sm text-green-600">↑ +12% vs mês anterior</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-purple-100 p-3 rounded-lg">
                        <UserCheck className="w-6 h-6 text-purple-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Taxa de Ocupação</h3>
                        <p className="text-sm text-gray-600">Agenda médica</p>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">87%</p>
                    <p className="text-sm text-gray-600">Média semanal</p>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <BarChart3 className="w-6 h-6 text-orange-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Satisfação</h3>
                        <p className="text-sm text-gray-600">Avaliação dos pacientes</p>
                      </div>
                    </div>
                    <p className="text-3xl font-bold text-gray-900 mb-2">4.8/5.0</p>
                    <p className="text-sm text-gray-600">Baseado em 234 avaliações</p>
                  </div>
                </div>

                <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Gerar Relatório Personalizado</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <button className="p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                      <p className="font-medium text-gray-900">Relatório Financeiro</p>
                      <p className="text-sm text-gray-600 mt-1">Receitas e despesas</p>
                    </button>
                    <button className="p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                      <p className="font-medium text-gray-900">Relatório de Atendimentos</p>
                      <p className="text-sm text-gray-600 mt-1">Consultas realizadas</p>
                    </button>
                    <button className="p-4 border-2 border-purple-200 rounded-lg hover:bg-purple-50 transition-colors">
                      <p className="font-medium text-gray-900">Relatório da Equipe</p>
                      <p className="text-sm text-gray-600 mt-1">Performance médica</p>
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