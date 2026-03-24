import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Building2,
  Users,
  Calendar,
  FileText,
  Stethoscope,
  BarChart3,
  LogOut,
  Plus,
  Edit,
  Trash2,
  Search,
  UserPlus,
  Shield
} from 'lucide-react';
import logoMedConnect from '../../assets/logo-medconnect.png';

interface Funcionario {
  id: string;
  nome: string;
  cpf: string;
  dataNascimento: string;
  funcao: string;
  nivelPermissao: 'Administrativo' | 'Padrão';
  email: string;
  telefone: string;
}

interface Paciente {
  id: string;
  nome: string;
  cpf: string;
  dataNascimento: string;
  telefone: string;
  email: string;
  endereco: string;
  tipoSanguineo: string;
}

interface Agendamento {
  id: string;
  paciente: string;
  medico: string;
  data: string;
  horario: string;
  status: string;
  observacoes?: string;
}

export default function DashboardClinicaCompleto() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('inicio');
  const [showModalFuncionario, setShowModalFuncionario] = useState(false);
  const [showModalPaciente, setShowModalPaciente] = useState(false);
  const [showModalAgendamento, setShowModalAgendamento] = useState(false);

  // Estado dos funcionários
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([
    {
      id: '1',
      nome: 'Ana Carolina Santos',
      cpf: '123.456.789-00',
      dataNascimento: '15/05/1990',
      funcao: 'Recepcionista',
      nivelPermissao: 'Padrão',
      email: 'ana@clinica.com',
      telefone: '(11) 98765-4321'
    },
    {
      id: '2',
      nome: 'Roberto Silva',
      cpf: '987.654.321-00',
      dataNascimento: '20/08/1985',
      funcao: 'Gerente Administrativo',
      nivelPermissao: 'Administrativo',
      email: 'roberto@clinica.com',
      telefone: '(11) 97654-3210'
    }
  ]);

  // Estado dos pacientes
  const [pacientes, setPacientes] = useState<Paciente[]>([
    {
      id: '1',
      nome: 'Eduardo Silva Santos',
      cpf: '123.456.789-00',
      dataNascimento: '15/03/1985',
      telefone: '(11) 98765-4321',
      email: 'eduardo@email.com',
      endereco: 'Rua das Flores, 123',
      tipoSanguineo: 'O+'
    },
    {
      id: '2',
      nome: 'Maria Oliveira',
      cpf: '987.654.321-00',
      dataNascimento: '22/07/1992',
      telefone: '(11) 91234-5678',
      email: 'maria@email.com',
      endereco: 'Av. Principal, 456',
      tipoSanguineo: 'A+'
    }
  ]);

  // Estado dos agendamentos
  const [agendamentos, setAgendamentos] = useState<Agendamento[]>([
    {
      id: '1',
      paciente: 'Eduardo Silva Santos',
      medico: 'Dr. Carlos Silva',
      data: '25/03/2026',
      horario: '14:00',
      status: 'Confirmado',
      observacoes: 'Consulta de retorno'
    },
    {
      id: '2',
      paciente: 'Maria Oliveira',
      medico: 'Dra. Ana Santos',
      data: '25/03/2026',
      horario: '15:00',
      status: 'Aguardando',
      observacoes: 'Primeira consulta'
    }
  ]);

  // Conteúdos informativos
  const conteudos = [
    {
      id: '1',
      titulo: 'Importância da Vacinação',
      categoria: 'Prevenção',
      resumo: 'As vacinas são uma das formas mais eficazes de prevenir doenças...',
      data: '15/03/2026'
    },
    {
      id: '2',
      titulo: 'Diabetes: Prevenção e Cuidados',
      categoria: 'Doenças Crônicas',
      resumo: 'O diabetes é uma doença crônica que afeta milhões...',
      data: '10/03/2026'
    }
  ];

  // Equipe médica
  const equipeMedica = [
    {
      id: '1',
      nome: 'Dr. Carlos Silva',
      crm: 'CRM-SP 123456',
      especialidade: 'Cardiologia',
      telefone: '(11) 99999-8888',
      email: 'carlos.silva@clinica.com'
    },
    {
      id: '2',
      nome: 'Dra. Ana Santos',
      crm: 'CRM-SP 654321',
      especialidade: 'Clínica Geral',
      telefone: '(11) 99999-7777',
      email: 'ana.santos@clinica.com'
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const handleAcessarAreaMedico = () => {
    navigate('/medico/login');
  };

  const menuItems = [
    { id: 'inicio', label: 'Início', icon: Building2 },
    { id: 'funcionarios', label: 'Funcionários', icon: Users },
    { id: 'agendamentos', label: 'Agendamentos', icon: Calendar },
    { id: 'equipe-medica', label: 'Equipe Médica', icon: Stethoscope },
    { id: 'conteudos', label: 'Conteúdos', icon: FileText },
    { id: 'relatorios', label: 'Relatórios', icon: BarChart3 }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-purple-700 to-purple-800 text-white flex flex-col">
        <div className="p-6 border-b border-purple-600">
        <img src={logoMedConnect} alt="MedConnect" className="h-35 w-auto object-contain" />
        </div>

        <nav className="flex-1 py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                  activeMenu === item.id
                    ? 'bg-purple-600 border-l-4 border-white'
                    : 'hover:bg-purple-600/50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-6 py-4 hover:bg-purple-600 transition-colors border-t border-purple-600"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm">Sair</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl text-gray-900">
              Painel da <span className="font-semibold">Clínica</span>
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Administrador</span>
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                <Building2 className="w-5 h-5 text-purple-700" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* INÍCIO */}
          {activeMenu === 'inicio' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-blue-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{pacientes.length}</span>
                  </div>
                  <h3 className="text-sm text-gray-600">Pacientes Cadastrados</h3>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-purple-100 p-3 rounded-lg">
                      <Stethoscope className="w-6 h-6 text-purple-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{equipeMedica.length}</span>
                  </div>
                  <h3 className="text-sm text-gray-600">Médicos Ativos</h3>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <Calendar className="w-6 h-6 text-green-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{agendamentos.length}</span>
                  </div>
                  <h3 className="text-sm text-gray-600">Agendamentos Hoje</h3>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center justify-between mb-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <span className="text-2xl font-bold text-gray-900">{funcionarios.length}</span>
                  </div>
                  <h3 className="text-sm text-gray-600">Funcionários</h3>
                </div>
              </div>

              {/* Agendamentos de Hoje */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Agendamentos de Hoje</h2>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Horário</th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Paciente</th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Médico</th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {agendamentos.map((agendamento) => (
                        <tr key={agendamento.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm text-gray-900">{agendamento.horario}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{agendamento.paciente}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{agendamento.medico}</td>
                          <td className="px-6 py-4">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              agendamento.status === 'Confirmado'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {agendamento.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* FUNCIONÁRIOS */}
          {activeMenu === 'funcionarios' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Gerenciamento de Funcionários</h2>
                <button
                  onClick={() => setShowModalFuncionario(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Novo Funcionário
                </button>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Nome</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">CPF</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Função</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Permissão</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {funcionarios.map((funcionario) => (
                      <tr key={funcionario.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{funcionario.nome}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{funcionario.cpf}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{funcionario.funcao}</td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                            funcionario.nivelPermissao === 'Administrativo'
                              ? 'bg-purple-100 text-purple-700'
                              : 'bg-gray-100 text-gray-700'
                          }`}>
                            {funcionario.nivelPermissao === 'Administrativo' && (
                              <Shield className="w-3 h-3" />
                            )}
                            {funcionario.nivelPermissao}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* AGENDAMENTOS */}
          {activeMenu === 'agendamentos' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Gerenciamento de Agendamentos</h2>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowModalPaciente(true)}
                    className="flex items-center gap-2 px-4 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors"
                  >
                    <UserPlus className="w-5 h-5" />
                    Cadastrar Paciente
                  </button>
                  <button
                    onClick={() => setShowModalAgendamento(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                    Novo Agendamento
                  </button>
                </div>
              </div>

              {/* Lista de Pacientes */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Pacientes Cadastrados</h3>
                <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Nome</th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">CPF</th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Telefone</th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Tipo Sanguíneo</th>
                        <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pacientes.map((paciente) => (
                        <tr key={paciente.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">{paciente.nome}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{paciente.cpf}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{paciente.telefone}</td>
                          <td className="px-6 py-4 text-sm text-gray-900">{paciente.tipoSanguineo}</td>
                          <td className="px-6 py-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                                <Edit className="w-4 h-4" />
                              </button>
                              <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Lista de Agendamentos */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Agendamentos</h3>
                <div className="space-y-3">
                  {agendamentos.map((agendamento) => (
                    <div key={agendamento.id} className="bg-white rounded-xl p-6 border border-gray-200">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="bg-purple-100 p-3 rounded-lg">
                            <Calendar className="w-6 h-6 text-purple-600" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900">{agendamento.paciente}</h4>
                            <p className="text-sm text-gray-600">{agendamento.medico}</p>
                            <p className="text-sm text-gray-500 mt-1">
                              {agendamento.data} às {agendamento.horario}
                            </p>
                            {agendamento.observacoes && (
                              <p className="text-sm text-gray-600 mt-2 italic">{agendamento.observacoes}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            agendamento.status === 'Confirmado'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {agendamento.status}
                          </span>
                          <div className="flex gap-2">
                            <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* EQUIPE MÉDICA */}
          {activeMenu === 'equipe-medica' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Equipe Médica</h2>
                <button
                  onClick={handleAcessarAreaMedico}
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <Stethoscope className="w-5 h-5" />
                  Acessar Área do Médico
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {equipeMedica.map((medico) => (
                  <div key={medico.id} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Stethoscope className="w-8 h-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{medico.nome}</h3>
                          <p className="text-sm text-gray-600">{medico.especialidade}</p>
                          <p className="text-sm text-gray-500 mt-1">{medico.crm}</p>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-200 pt-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Email:</span>
                        <span className="text-gray-900">{medico.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <span className="text-gray-500">Telefone:</span>
                        <span className="text-gray-900">{medico.telefone}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-4">
                <p className="text-sm text-blue-800">
                  💡 <strong>Dica:</strong> Clique em "Acessar Área do Médico" para fazer login como médico e acessar o prontuário eletrônico, gerar receitas e atestados.
                </p>
              </div>
            </div>
          )}

          {/* CONTEÚDOS */}
          {activeMenu === 'conteudos' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Conteúdos Informativos</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                  <Plus className="w-5 h-5" />
                  Novo Conteúdo
                </button>
              </div>

              <div className="grid gap-6">
                {conteudos.map((conteudo) => (
                  <div key={conteudo.id} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                            {conteudo.categoria}
                          </span>
                          <span className="text-xs text-gray-500">{conteudo.data}</span>
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{conteudo.titulo}</h3>
                        <p className="text-gray-600">{conteudo.resumo}</p>
                      </div>
                      <div className="flex items-center gap-2 ml-4">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RELATÓRIOS */}
          {activeMenu === 'relatorios' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Relatórios e Estatísticas</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Consultas por Mês</h3>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <BarChart3 className="w-16 h-16" />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    Gráfico de consultas realizadas nos últimos 6 meses
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Pacientes por Especialidade</h3>
                  <div className="h-64 flex items-center justify-center text-gray-400">
                    <BarChart3 className="w-16 h-16" />
                  </div>
                  <p className="text-sm text-gray-600 text-center mt-4">
                    Distribuição de pacientes por especialidade médica
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
