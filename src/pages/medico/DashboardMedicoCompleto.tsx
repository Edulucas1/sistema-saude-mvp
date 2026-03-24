import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import {
  Stethoscope,
  Users,
  FileText,
  LogOut,
  User,
  Calendar,
  Save,
  Bell,
  Settings,
  Activity,
  FlaskConical,
  ClipboardList,
  X
} from 'lucide-react';
import logoMedConnect from '../../assets/logo-medconnect.png';

interface Paciente {
  id: string;
  nome: string;
  cpf: string;
  dataNascimento: string;
  idade: number;
  sexo: string;
  tipoSanguineo: string;
  endereco: string;
  telefone: string;
  email: string;
  horario?: string;
  tipo?: string;
  status?: string;
}

export default function DashboardMedicoCompleto() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState('inicio');
  const [pacienteSelecionado, setPacienteSelecionado] = useState<Paciente | null>(null);
  const [showProntuario, setShowProntuario] = useState(false);
  const [showReceituario, setShowReceituario] = useState(false);
  const [showAtestado, setShowAtestado] = useState(false);
  const [showDeclaracao, setShowDeclaracao] = useState(false);
  const [showSolicitacaoExames, setShowSolicitacaoExames] = useState(false);

  // Dados do médico (pode vir do state ou mock)
  const medico = location.state?.medico || {
    nome: 'Dr. João Carvalho',
    crm: 'CRM 12345/SP',
    especialidade: 'Cardiologia'
  };

  // Stats
  const stats = {
    consultasHoje: 4,
    pacientesAtivos: 156,
    examesPendentes: 2,
    proximaConsulta: '09:00'
  };

  // Agenda do dia (mock)
  const [agendaDia] = useState<Paciente[]>([
    {
      id: '1',
      nome: 'Maria Silva Santos',
      horario: '09:00',
      tipo: 'Consulta de Retorno',
      status: 'Confirmado',
      cpf: '123.456.789-00',
      dataNascimento: '15/03/1985',
      idade: 41,
      sexo: 'Feminino',
      tipoSanguineo: 'O+',
      endereco: 'Rua das Flores, 123',
      telefone: '(11) 98765-4321',
      email: 'maria@email.com'
    },
    {
      id: '2',
      nome: 'José Oliveira',
      horario: '10:00',
      tipo: 'Primeira Consulta',
      status: 'Confirmado',
      cpf: '987.654.321-00',
      dataNascimento: '22/07/1992',
      idade: 33,
      sexo: 'Masculino',
      tipoSanguineo: 'A+',
      endereco: 'Av. Principal, 456',
      telefone: '(11) 91234-5678',
      email: 'jose@email.com'
    },
    {
      id: '3',
      nome: 'Ana Paula Costa',
      horario: '11:00',
      tipo: 'Exame de Rotina',
      status: 'Aguardando',
      cpf: '456.789.123-00',
      dataNascimento: '10/12/1978',
      idade: 47,
      sexo: 'Feminino',
      tipoSanguineo: 'B+',
      endereco: 'Rua Central, 789',
      telefone: '(11) 99876-5432',
      email: 'ana@email.com'
    },
    {
      id: '4',
      nome: 'Pedro Santos',
      horario: '14:00',
      tipo: 'Consulta de Retorno',
      status: 'Confirmado',
      cpf: '321.654.987-00',
      dataNascimento: '05/05/1990',
      idade: 35,
      sexo: 'Masculino',
      tipoSanguineo: 'AB+',
      endereco: 'Av. Paulista, 1000',
      telefone: '(11) 97654-3210',
      email: 'pedro@email.com'
    }
  ]);

  // Exames pendentes
  const examesPendentes = [
    {
      id: '1',
      nome: 'Ecocardiograma',
      paciente: 'Maria Silva Santos'
    },
    {
      id: '2',
      nome: 'Teste Ergométrico',
      paciente: 'José Oliveira'
    }
  ];

  // Estado do Prontuário
  const [prontuario, setProntuario] = useState({
    queixaPrincipal: '',
    historiaDoencaAtual: '',
    historicoMedico: '',
    medicamentosEmUso: '',
    alergias: '',
    exameFisico: '',
    hipoteseDiagnostica: '',
    conduta: '',
    observacoes: ''
  });

  // Estado do Receituário
  const [receituario, setReceituario] = useState({
    data: new Date().toLocaleDateString('pt-BR'),
    medicamentos: [
      { nome: '', dosagem: '', frequencia: '', duracao: '', observacoes: '' }
    ],
    orientacoes: ''
  });

  // Estado do Atestado
  const [atestado, setAtestado] = useState({
    data: new Date().toLocaleDateString('pt-BR'),
    texto: '',
    diasAfastamento: '1',
    cid10: ''
  });

  // Estado da Declaração
  const [declaracao, setDeclaracao] = useState({
    data: new Date().toLocaleDateString('pt-BR'),
    texto: '',
    horarioInicio: '',
    horarioFim: ''
  });

  // Estado da Solicitação de Exames
  const [solicitacaoExames, setSolicitacaoExames] = useState({
    data: new Date().toLocaleDateString('pt-BR'),
    exames: [
      { nome: '', observacoes: '' }
    ],
    indicacaoClinica: '',
    urgente: false
  });

  const handleLogout = () => {
    navigate('/');
  };

  const handleIniciarConsulta = (paciente: Paciente) => {
    setPacienteSelecionado(paciente);
    setShowProntuario(true);
    // Resetar prontuário
    setProntuario({
      queixaPrincipal: '',
      historiaDoencaAtual: '',
      historicoMedico: '',
      medicamentosEmUso: '',
      alergias: '',
      exameFisico: '',
      hipoteseDiagnostica: '',
      conduta: '',
      observacoes: ''
    });
  };

  const handleGerarReceita = () => {
    setReceituario({
      data: new Date().toLocaleDateString('pt-BR'),
      medicamentos: [
        { nome: '', dosagem: '', frequencia: '', duracao: '', observacoes: '' }
      ],
      orientacoes: ''
    });
    setShowReceituario(true);
  };

  const handleGerarAtestado = () => {
    if (pacienteSelecionado) {
      const texto = `Atesto para os devidos fins que o(a) paciente ${pacienteSelecionado.nome}, portador(a) do CPF ${pacienteSelecionado.cpf}, esteve sob meus cuidados profissionais nesta data, necessitando de 1 dia(s) de afastamento de suas atividades, a partir de ${new Date().toLocaleDateString('pt-BR')}.\n\nCID-10: [CÓDIGO CID]\n\nFica, portanto, justificada sua ausência no período acima mencionado.`;
      setAtestado({
        ...atestado,
        texto,
        data: new Date().toLocaleDateString('pt-BR')
      });
    }
    setShowAtestado(true);
  };

  const handleGerarDeclaracao = () => {
    if (pacienteSelecionado) {
      const texto = `Declaro para os devidos fins que o(a) Sr(a). ${pacienteSelecionado.nome}, portador(a) do CPF ${pacienteSelecionado.cpf}, esteve em consulta médica nesta data, das [HORÁRIO INÍCIO] às [HORÁRIO FIM].\n\nPor ser verdade, firmo a presente declaração.`;
      setDeclaracao({
        ...declaracao,
        texto,
        data: new Date().toLocaleDateString('pt-BR')
      });
    }
    setShowDeclaracao(true);
  };

  const handleSolicitarExames = () => {
    setSolicitacaoExames({
      data: new Date().toLocaleDateString('pt-BR'),
      exames: [
        { nome: '', observacoes: '' }
      ],
      indicacaoClinica: '',
      urgente: false
    });
    setShowSolicitacaoExames(true);
  };

  const menuItems = [
    { id: 'inicio', label: 'Início', icon: Activity },
    { id: 'agenda', label: 'Agenda', icon: Calendar },
    { id: 'pacientes', label: 'Pacientes', icon: Users },
    { id: 'exames', label: 'Exames', icon: FlaskConical },
    { id: 'prescricoes', label: 'Prescrições', icon: ClipboardList }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b border-gray-200">
          
          {/* LOGO OFICIAL MEDCONNECT AQUI */}
          <div className="mb-6 flex flex-col items-start gap-1">
            <img src={logoMedConnect} alt="MedConnect" className="h-34 w-auto object-contain" />
            <p className="text-xs text-green-600 font-bold uppercase tracking-widest pl-1 mt-1">Área do Médico</p>
          </div>

          <div className="flex items-center gap-3 bg-green-50 rounded-lg p-3">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <Stethoscope className="w-6 h-6 text-green-600" />
            </div>
            <div>
              <h3 className="font-semibold text-sm text-gray-900">{medico.nome}</h3>
              <p className="text-xs text-gray-600">{medico.crm}</p>
              <p className="text-xs text-green-600 font-medium">{medico.especialidade}</p>
            </div>
          </div>
        </div>

        <nav className="flex-1 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setActiveMenu(item.id)}
                className={`w-full flex items-center gap-3 px-6 py-3 transition-colors ${
                  activeMenu === item.id
                    ? 'bg-green-50 text-green-700 border-r-4 border-green-700'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-6 py-4 text-red-600 hover:bg-red-50 transition-colors border-t border-gray-200"
        >
          <LogOut className="w-5 h-5" />
          <span className="text-sm font-medium">Sair</span>
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {activeMenu === 'inicio' && `Bem-vindo, ${medico.nome.split(' ')[1]}!`}
                {activeMenu === 'agenda' && 'Agenda'}
                {activeMenu === 'pacientes' && 'Pacientes'}
                {activeMenu === 'exames' && 'Exames'}
                {activeMenu === 'prescricoes' && 'Prescrições'}
              </h1>
              {activeMenu === 'inicio' && (
                <p className="text-sm text-gray-600">Hoje é segunda-feira, 23 de março de 2026</p>
              )}
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                <Settings className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* INÍCIO */}
          {activeMenu === 'inicio' && (
            <div className="space-y-6">
              {/* Stats Cards */}
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="w-8 h-8" />
                    <div>
                      <p className="text-sm opacity-90">Consultas Hoje</p>
                      <p className="text-3xl font-bold">{stats.consultasHoje}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8" />
                    <div>
                      <p className="text-sm opacity-90">Pacientes Ativos</p>
                      <p className="text-3xl font-bold">{stats.pacientesAtivos}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl p-6 text-white shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-8 h-8" />
                    <div>
                      <p className="text-sm opacity-90">Exames Pendentes</p>
                      <p className="text-3xl font-bold">{stats.examesPendentes}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl p-6 text-white shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <Activity className="w-8 h-8" />
                    <div>
                      <p className="text-sm opacity-90">Próxima Consulta</p>
                      <p className="text-3xl font-bold">{stats.proximaConsulta}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Agenda de Hoje */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-green-600" />
                    Agenda de Hoje
                  </h2>
                  <a href="#" className="text-sm text-green-600 hover:text-green-700 font-medium">
                    Ver agenda completa →
                  </a>
                </div>
                <div className="space-y-3">
                  {agendaDia.map((paciente) => (
                    <div key={paciente.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-lg">
                          {paciente.horario}
                        </span>
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">{paciente.nome}</h4>
                          <p className="text-xs text-gray-600">{paciente.tipo}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                          paciente.status === 'Confirmado'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-yellow-100 text-yellow-700'
                        }`}>
                          {paciente.status}
                        </span>
                        <button
                          onClick={() => handleIniciarConsulta(paciente)}
                          className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                        >
                          Iniciar
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exames Pendentes */}
              {examesPendentes.length > 0 && (
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2 mb-4">
                    <FlaskConical className="w-5 h-5 text-orange-600" />
                    Exames Pendentes de Análise
                  </h2>
                  <div className="space-y-2">
                    {examesPendentes.map((exame) => (
                      <div key={exame.id} className="flex items-center justify-between p-4 bg-orange-50 rounded-lg">
                        <div>
                          <h4 className="text-sm font-semibold text-gray-900">{exame.nome}</h4>
                          <p className="text-xs text-gray-600">Paciente: {exame.paciente}</p>
                        </div>
                        <button className="px-4 py-2 bg-orange-600 text-white text-sm rounded-lg hover:bg-orange-700 transition-colors">
                          Analisar
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* AGENDA */}
          {activeMenu === 'agenda' && (
            <div>
              <p className="text-sm text-gray-600 mb-6">Visualize sua agenda completa</p>
              <div className="space-y-3">
                {agendaDia.map((paciente) => (
                  <div key={paciente.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                          <User className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{paciente.nome}</h3>
                          <p className="text-sm text-gray-600">{paciente.tipo}</p>
                          <p className="text-sm text-gray-500 mt-1">Horário: {paciente.horario}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => handleIniciarConsulta(paciente)}
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
                      >
                        <Stethoscope className="w-5 h-5" />
                        Iniciar Consulta
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PACIENTES */}
          {activeMenu === 'pacientes' && (
            <div>
              <p className="text-sm text-gray-600 mb-6">Lista de todos os pacientes</p>
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Nome</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">CPF</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Idade</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Tipo Sanguíneo</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agendaDia.map((paciente) => (
                      <tr key={paciente.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">{paciente.nome}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{paciente.cpf}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{paciente.idade} anos</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{paciente.tipoSanguineo}</td>
                        <td className="px-6 py-4">
                          <button
                            onClick={() => handleIniciarConsulta(paciente)}
                            className="text-sm text-green-600 hover:text-green-700 font-medium"
                          >
                            Ver Prontuário
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* EXAMES */}
          {activeMenu === 'exames' && (
            <div>
              <p className="text-sm text-gray-600 mb-6">Exames pendentes de análise</p>
              <div className="space-y-3">
                {examesPendentes.map((exame) => (
                  <div key={exame.id} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 p-3 rounded-lg">
                          <FlaskConical className="w-6 h-6 text-orange-600" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{exame.nome}</h3>
                          <p className="text-sm text-gray-600">Paciente: {exame.paciente}</p>
                        </div>
                      </div>
                      <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors">
                        Analisar Resultados
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PRESCRIÇÕES */}
          {activeMenu === 'prescricoes' && (
            <div>
              <p className="text-sm text-gray-600 mb-6">Histórico de prescrições</p>
              <div className="bg-white rounded-xl p-8 text-center shadow-sm">
                <ClipboardList className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Histórico de Prescrições
                </h3>
                <p className="text-gray-500">
                  As prescrições geradas serão exibidas aqui
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal Prontuário */}
      {showProntuario && pacienteSelecionado && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-auto">
          <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-gray-900">Prontuário Médico</h3>
                <p className="text-sm text-gray-600">{pacienteSelecionado.nome} - {pacienteSelecionado.cpf}</p>
              </div>
              <button
                onClick={() => setShowProntuario(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Dados do Paciente */}
              <div className="bg-blue-50 rounded-lg p-4">
                <h4 className="font-semibold text-gray-900 mb-3">Dados do Paciente</h4>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">Nome:</span> <span className="font-medium">{pacienteSelecionado.nome}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Idade:</span> <span className="font-medium">{pacienteSelecionado.idade} anos</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Sexo:</span> <span className="font-medium">{pacienteSelecionado.sexo}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Tipo Sanguíneo:</span> <span className="font-medium">{pacienteSelecionado.tipoSanguineo}</span>
                  </div>
                  <div className="col-span-2">
                    <span className="text-gray-600">Telefone:</span> <span className="font-medium">{pacienteSelecionado.telefone}</span>
                  </div>
                </div>
              </div>

              {/* Queixa Principal */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Queixa Principal *
                </label>
                <textarea
                  value={prontuario.queixaPrincipal}
                  onChange={(e) => setProntuario({ ...prontuario, queixaPrincipal: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                  placeholder="Ex: Dor no peito há 2 dias..."
                />
              </div>

              {/* História da Doença Atual */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  História da Doença Atual (HDA)
                </label>
                <textarea
                  value={prontuario.historiaDoencaAtual}
                  onChange={(e) => setProntuario({ ...prontuario, historiaDoencaAtual: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                  placeholder="Descreva a história da doença atual..."
                />
              </div>

              {/* Grid de 2 colunas */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Histórico Médico
                  </label>
                  <textarea
                    value={prontuario.historicoMedico}
                    onChange={(e) => setProntuario({ ...prontuario, historicoMedico: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                    placeholder="Doenças prévias, cirurgias..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Medicamentos em Uso
                  </label>
                  <textarea
                    value={prontuario.medicamentosEmUso}
                    onChange={(e) => setProntuario({ ...prontuario, medicamentosEmUso: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                    placeholder="Medicamentos que o paciente já utiliza..."
                  />
                </div>
              </div>

              {/* Alergias */}
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <label className="block text-sm font-medium text-red-900 mb-2">
                  ⚠️ Alergias Medicamentosas
                </label>
                <textarea
                  value={prontuario.alergias}
                  onChange={(e) => setProntuario({ ...prontuario, alergias: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 border border-red-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none resize-none bg-white"
                  placeholder="Liste as alergias medicamentosas conhecidas..."
                />
              </div>

              {/* Exame Físico */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Exame Físico
                </label>
                <textarea
                  value={prontuario.exameFisico}
                  onChange={(e) => setProntuario({ ...prontuario, exameFisico: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                  placeholder="Pressão arterial, ausculta cardíaca, palpação..."
                />
              </div>

              {/* Hipótese Diagnóstica */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Hipótese Diagnóstica / CID-10
                </label>
                <textarea
                  value={prontuario.hipoteseDiagnostica}
                  onChange={(e) => setProntuario({ ...prontuario, hipoteseDiagnostica: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                  placeholder="Ex: Hipertensão Arterial Sistêmica - CID I10"
                />
              </div>

              {/* Conduta */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Conduta / Plano Terapêutico
                </label>
                <textarea
                  value={prontuario.conduta}
                  onChange={(e) => setProntuario({ ...prontuario, conduta: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                  placeholder="Prescrição, orientações, retorno..."
                />
              </div>

              {/* Observações */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Observações Adicionais
                </label>
                <textarea
                  value={prontuario.observacoes}
                  onChange={(e) => setProntuario({ ...prontuario, observacoes: e.target.value })}
                  rows={2}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none resize-none"
                  placeholder="Outras observações..."
                />
              </div>

              {/* Botões de Ação */}
              <div className="border-t border-gray-200 pt-6">
                <h4 className="font-semibold text-gray-900 mb-4">Gerar Documentos</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <button
                    onClick={handleGerarReceita}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    Receituário
                  </button>
                  <button
                    onClick={handleGerarAtestado}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    Atestado
                  </button>
                  <button
                    onClick={handleGerarDeclaracao}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    Declaração
                  </button>
                  <button
                    onClick={handleSolicitarExames}
                    className="flex items-center justify-center gap-2 px-4 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors"
                  >
                    <FileText className="w-5 h-5" />
                    Exames
                  </button>
                </div>
              </div>

              {/* Botões de Salvar */}
              <div className="flex gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-semibold">
                  <Save className="w-5 h-5" />
                  Salvar Prontuário
                </button>
                <button
                  onClick={() => setShowProntuario(false)}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}