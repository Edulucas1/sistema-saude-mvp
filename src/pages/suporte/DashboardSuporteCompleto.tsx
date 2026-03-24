import { useState } from 'react';
import { useNavigate } from 'react-router';
import {
  Shield,
  Building2,
  FileText,
  LogOut,
  Plus,
  Search,
  Edit,
  Trash2,
  Save,
  X,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Clock,
  CreditCard,
  Package,
  MessageSquare,
  Power,
  Ban,
  Filter,
  Calendar,
  TrendingUp,
  Users,
  Receipt
} from 'lucide-react';
import logoMedConnect from '../../assets/logo-medconnect.png';

interface Empresa {
  id: string;
  nomeEmpresa: string;
  cnpj: string;
  inscricaoEstadual: string;
  endereco: string;
  telefone: string;
  email: string;
  contato: string;
  banco: string;
  agencia: string;
  conta: string;
  status: 'Ativa' | 'Em Teste' | 'Suspensa';
  plano: string;
  valorMensal: number;
  dataVencimento: string;
  dataCriacao: string;
}

interface Plano {
  id: string;
  nome: string;
  valor: number;
  descricao: string;
  recursos: {
    usuarios: number;
    armazenamento: string;
    suporte: string;
  };
}

interface Pagamento {
  id: string;
  empresaId: string;
  empresaNome: string;
  valor: number;
  dataVencimento: string;
  dataPagamento?: string;
  status: 'Pago' | 'Pendente' | 'Vencido';
  mesReferencia: string;
}

interface Ticket {
  id: string;
  empresaId: string;
  empresaNome: string;
  titulo: string;
  descricao: string;
  status: 'Aberto' | 'Em Andamento' | 'Resolvido';
  prioridade: 'Alta' | 'Média' | 'Baixa';
  dataCriacao: string;
  dataResolucao?: string;
}

export default function DashboardSuporteCompleto() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('inicio');
  const [showModalEmpresa, setShowModalEmpresa] = useState(false);
  const [showModalPlano, setShowModalPlano] = useState(false);
  const [showModalTicket, setShowModalTicket] = useState(false);
  const [showModalPagamento, setShowModalPagamento] = useState(false);
  const [editingEmpresa, setEditingEmpresa] = useState<Empresa | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filtroStatus, setFiltroStatus] = useState<string>('Todos');

  // Estado das empresas
  const [empresas, setEmpresas] = useState<Empresa[]>([
    {
      id: '1',
      nomeEmpresa: 'Clínica São Lucas',
      cnpj: '12.345.678/0001-99',
      inscricaoEstadual: '123.456.789.012',
      endereco: 'Rua das Flores, 123 - São Paulo/SP',
      telefone: '(11) 3000-0000',
      email: 'contato@clinicasaolucas.com.br',
      contato: 'Dr. João Silva',
      banco: 'Banco do Brasil',
      agencia: '1234-5',
      conta: '12345-6',
      status: 'Ativa',
      plano: 'Premium',
      valorMensal: 499.90,
      dataVencimento: '10/04/2026',
      dataCriacao: '10/01/2025'
    },
    {
      id: '2',
      nomeEmpresa: 'Hospital Santa Maria',
      cnpj: '98.765.432/0001-00',
      inscricaoEstadual: '987.654.321.000',
      endereco: 'Av. Principal, 500 - São Paulo/SP',
      telefone: '(11) 3100-0000',
      email: 'admin@hospitalsantamaria.com.br',
      contato: 'Dra. Maria Santos',
      banco: 'Itaú',
      agencia: '5678-9',
      conta: '67890-1',
      status: 'Ativa',
      plano: 'Empresarial',
      valorMensal: 999.90,
      dataVencimento: '15/04/2026',
      dataCriacao: '15/12/2024'
    },
    {
      id: '3',
      nomeEmpresa: 'Clínica Vida Nova',
      cnpj: '11.222.333/0001-44',
      inscricaoEstadual: '111.222.333.444',
      endereco: 'Rua Central, 200 - São Paulo/SP',
      telefone: '(11) 3200-0000',
      email: 'contato@vidanova.com.br',
      contato: 'Dr. Pedro Costa',
      banco: 'Bradesco',
      agencia: '9012-3',
      conta: '34567-8',
      status: 'Em Teste',
      plano: 'Básico',
      valorMensal: 0,
      dataVencimento: '30/04/2026',
      dataCriacao: '01/03/2026'
    },
    {
      id: '4',
      nomeEmpresa: 'Consultório Dr. Silva',
      cnpj: '44.555.666/0001-77',
      inscricaoEstadual: '444.555.666.777',
      endereco: 'Rua da Saúde, 50 - São Paulo/SP',
      telefone: '(11) 3300-0000',
      email: 'contato@drsilva.com.br',
      contato: 'Dr. Carlos Silva',
      banco: 'Caixa',
      agencia: '4567-8',
      conta: '89012-3',
      status: 'Suspensa',
      plano: 'Premium',
      valorMensal: 499.90,
      dataVencimento: '10/03/2026',
      dataCriacao: '10/06/2024'
    }
  ]);

  // Estado dos planos
  const [planos, setPlanos] = useState<Plano[]>([
    {
      id: '1',
      nome: 'Básico',
      valor: 0,
      descricao: 'Plano de teste por 30 dias',
      recursos: {
        usuarios: 5,
        armazenamento: '5GB',
        suporte: 'Email'
      }
    },
    {
      id: '2',
      nome: 'Premium',
      valor: 499.90,
      descricao: 'Para clínicas pequenas e médias',
      recursos: {
        usuarios: 20,
        armazenamento: '50GB',
        suporte: 'Email + Chat'
      }
    },
    {
      id: '3',
      nome: 'Empresarial',
      valor: 999.90,
      descricao: 'Para hospitais e grandes clínicas',
      recursos: {
        usuarios: 100,
        armazenamento: '500GB',
        suporte: '24/7 Prioritário'
      }
    }
  ]);

  // Estado dos pagamentos
  const [pagamentos, setPagamentos] = useState<Pagamento[]>([
    {
      id: '1',
      empresaId: '1',
      empresaNome: 'Clínica São Lucas',
      valor: 499.90,
      dataVencimento: '10/03/2026',
      dataPagamento: '09/03/2026',
      status: 'Pago',
      mesReferencia: 'Março/2026'
    },
    {
      id: '2',
      empresaId: '2',
      empresaNome: 'Hospital Santa Maria',
      valor: 999.90,
      dataVencimento: '15/03/2026',
      dataPagamento: '14/03/2026',
      status: 'Pago',
      mesReferencia: 'Março/2026'
    },
    {
      id: '3',
      empresaId: '1',
      empresaNome: 'Clínica São Lucas',
      valor: 499.90,
      dataVencimento: '10/04/2026',
      status: 'Pendente',
      mesReferencia: 'Abril/2026'
    },
    {
      id: '4',
      empresaId: '4',
      empresaNome: 'Consultório Dr. Silva',
      valor: 499.90,
      dataVencimento: '10/03/2026',
      status: 'Vencido',
      mesReferencia: 'Março/2026'
    }
  ]);

  // Estado dos tickets
  const [tickets, setTickets] = useState<Ticket[]>([
    {
      id: '1',
      empresaId: '1',
      empresaNome: 'Clínica São Lucas',
      titulo: 'Erro ao acessar prontuário',
      descricao: 'Não consigo acessar o prontuário de alguns pacientes',
      status: 'Aberto',
      prioridade: 'Alta',
      dataCriacao: '23/03/2026'
    },
    {
      id: '2',
      empresaId: '2',
      empresaNome: 'Hospital Santa Maria',
      titulo: 'Dúvida sobre relatórios',
      descricao: 'Como gerar relatório de consultas por período?',
      status: 'Resolvido',
      prioridade: 'Baixa',
      dataCriacao: '20/03/2026',
      dataResolucao: '21/03/2026'
    },
    {
      id: '3',
      empresaId: '3',
      empresaNome: 'Clínica Vida Nova',
      titulo: 'Integração com laboratório',
      descricao: 'Preciso integrar com sistema externo de laboratório',
      status: 'Em Andamento',
      prioridade: 'Média',
      dataCriacao: '22/03/2026'
    }
  ]);

  const [formData, setFormData] = useState<Empresa>({
    id: '',
    nomeEmpresa: '',
    cnpj: '',
    inscricaoEstadual: '',
    endereco: '',
    telefone: '',
    email: '',
    contato: '',
    banco: '',
    agencia: '',
    conta: '',
    status: 'Em Teste',
    plano: 'Básico',
    valorMensal: 0,
    dataVencimento: '',
    dataCriacao: new Date().toLocaleDateString('pt-BR')
  });

  // Cálculos de estatísticas
  const stats = {
    receitaMensal: pagamentos
      .filter(p => p.status === 'Pago' && p.mesReferencia === 'Março/2026')
      .reduce((sum, p) => sum + p.valor, 0),
    empresasAtivas: empresas.filter(e => e.status === 'Ativa').length,
    empresasVencidas: empresas.filter(e => e.status === 'Suspensa').length,
    empresasTeste: empresas.filter(e => e.status === 'Em Teste').length,
    totalRecebido: pagamentos.filter(p => p.status === 'Pago').reduce((sum, p) => sum + p.valor, 0),
    pendencias: pagamentos.filter(p => p.status === 'Pendente' || p.status === 'Vencido').length
  };

  const handleLogout = () => {
    navigate('/');
  };

  const handleOpenModal = (empresa?: Empresa) => {
    if (empresa) {
      setFormData(empresa);
      setEditingEmpresa(empresa);
    } else {
      setFormData({
        id: '',
        nomeEmpresa: '',
        cnpj: '',
        inscricaoEstadual: '',
        endereco: '',
        telefone: '',
        email: '',
        contato: '',
        banco: '',
        agencia: '',
        conta: '',
        status: 'Em Teste',
        plano: 'Básico',
        valorMensal: 0,
        dataVencimento: '',
        dataCriacao: new Date().toLocaleDateString('pt-BR')
      });
      setEditingEmpresa(null);
    }
    setShowModalEmpresa(true);
  };

  const handleCloseModal = () => {
    setShowModalEmpresa(false);
    setEditingEmpresa(null);
  };

  const handleSaveEmpresa = () => {
    if (editingEmpresa) {
      setEmpresas(empresas.map(e => e.id === editingEmpresa.id ? formData : e));
    } else {
      const newEmpresa = { ...formData, id: Date.now().toString() };
      setEmpresas([...empresas, newEmpresa]);
    }
    handleCloseModal();
  };

  const handleDeleteEmpresa = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta empresa?')) {
      setEmpresas(empresas.filter(e => e.id !== id));
    }
  };

  const handleToggleStatus = (id: string, novoStatus: 'Ativa' | 'Suspensa') => {
    setEmpresas(empresas.map(e => 
      e.id === id ? { ...e, status: novoStatus } : e
    ));
  };

  const handleMarcarPago = (pagamentoId: string) => {
    setPagamentos(pagamentos.map(p => 
      p.id === pagamentoId ? { ...p, status: 'Pago', dataPagamento: new Date().toLocaleDateString('pt-BR') } : p
    ));
  };

  const handleResolverTicket = (ticketId: string) => {
    setTickets(tickets.map(t => 
      t.id === ticketId ? { ...t, status: 'Resolvido', dataResolucao: new Date().toLocaleDateString('pt-BR') } : t
    ));
  };

  const filteredEmpresas = empresas.filter(e => {
    const matchesSearch = e.nomeEmpresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         e.cnpj.includes(searchTerm);
    const matchesStatus = filtroStatus === 'Todos' || e.status === filtroStatus;
    return matchesSearch && matchesStatus;
  });

  const menuItems = [
    { id: 'inicio', label: 'Início', icon: Shield },
    { id: 'empresas', label: 'Empresas', icon: Building2 },
    { id: 'financeiro', label: 'Financeiro', icon: DollarSign },
    { id: 'planos', label: 'Planos', icon: Package },
    { id: 'suporte', label: 'Suporte', icon: MessageSquare }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-red-600 to-red-700 text-white flex flex-col">
        <div className="p-6 border-b border-red-500">
          
          {/* LOGO OFICIAL MEDCONNECT AQUI */}
          <div className="bg-white p-3 mb-4 rounded-lg flex justify-center shadow-md">
            <img src={logoMedConnect} alt="MedConnect" className="h-10 w-auto object-contain" />
          </div>
          
          <div className="bg-red-500/30 rounded-lg p-3">
            <p className="text-sm font-semibold">Administrador Sistema</p>
            <p className="text-xs text-red-100">Acesso Total</p>
          </div>
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
                    ? 'bg-red-500 border-l-4 border-white'
                    : 'hover:bg-red-500/50'
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
          className="flex items-center gap-3 px-6 py-4 hover:bg-red-500 transition-colors border-t border-red-500"
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
              Painel <span className="font-semibold">Administrativo</span>
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Suporte</span>
              <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-red-600" />
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
                <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <DollarSign className="w-8 h-8" />
                  </div>
                  <p className="text-sm opacity-90 mb-1">Receita Mensal</p>
                  <p className="text-3xl font-bold">R$ {stats.receitaMensal.toFixed(2)}</p>
                </div>

                <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <p className="text-sm opacity-90 mb-1">Empresas Ativas</p>
                  <p className="text-3xl font-bold">{stats.empresasAtivas}</p>
                </div>

                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <AlertTriangle className="w-8 h-8" />
                  </div>
                  <p className="text-sm opacity-90 mb-1">Empresas Vencidas</p>
                  <p className="text-3xl font-bold">{stats.empresasVencidas}</p>
                </div>

                <div className="bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <Clock className="w-8 h-8" />
                  </div>
                  <p className="text-sm opacity-90 mb-1">Em Teste</p>
                  <p className="text-3xl font-bold">{stats.empresasTeste}</p>
                </div>
              </div>

              {/* Resumo Rápido */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5 text-orange-600" />
                    Pendências Financeiras
                  </h3>
                  <div className="space-y-2">
                    {pagamentos.filter(p => p.status !== 'Pago').slice(0, 3).map((pag) => (
                      <div key={pag.id} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{pag.empresaNome}</p>
                          <p className="text-xs text-gray-600">Venc: {pag.dataVencimento}</p>
                        </div>
                        <span className="text-sm font-bold text-orange-600">
                          R$ {pag.valor.toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-600" />
                    Tickets Abertos
                  </h3>
                  <div className="space-y-2">
                    {tickets.filter(t => t.status !== 'Resolvido').slice(0, 3).map((ticket) => (
                      <div key={ticket.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{ticket.titulo}</p>
                          <p className="text-xs text-gray-600">{ticket.empresaNome}</p>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          ticket.prioridade === 'Alta' ? 'bg-red-100 text-red-700' :
                          ticket.prioridade === 'Média' ? 'bg-yellow-100 text-yellow-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {ticket.prioridade}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Lista de Empresas Resumida */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Empresas Cadastradas</h3>
                <div className="space-y-2">
                  {empresas.slice(0, 5).map((empresa) => (
                    <div key={empresa.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Building2 className="w-5 h-5 text-gray-600" />
                        <div>
                          <p className="text-sm font-medium text-gray-900">{empresa.nomeEmpresa}</p>
                          <p className="text-xs text-gray-600">{empresa.plano} - R$ {empresa.valorMensal.toFixed(2)}/mês</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                        empresa.status === 'Ativa' ? 'bg-green-100 text-green-700' :
                        empresa.status === 'Em Teste' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {empresa.status === 'Ativa' && '🟢'}
                        {empresa.status === 'Em Teste' && '🟡'}
                        {empresa.status === 'Suspensa' && '🔴'}
                        {empresa.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* EMPRESAS */}
          {activeMenu === 'empresas' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Gerenciamento de Empresas</h2>
                <button
                  onClick={() => handleOpenModal()}
                  className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                >
                  <Plus className="w-5 h-5" />
                  Nova Empresa
                </button>
              </div>

              {/* Filtros */}
              <div className="flex gap-4 mb-6">
                <div className="relative flex-1 max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="Buscar por nome ou CNPJ..."
                  />
                </div>
                <select
                  value={filtroStatus}
                  onChange={(e) => setFiltroStatus(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                >
                  <option value="Todos">Todos os Status</option>
                  <option value="Ativa">Ativa</option>
                  <option value="Em Teste">Em Teste</option>
                  <option value="Suspensa">Suspensa</option>
                </select>
              </div>

              {/* Empresas List */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Empresa</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">CNPJ</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Plano</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Status</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Vencimento</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmpresas.map((empresa) => (
                      <tr key={empresa.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{empresa.nomeEmpresa}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{empresa.cnpj}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">
                          {empresa.plano} <span className="text-gray-600">(R$ {empresa.valorMensal.toFixed(2)})</span>
                        </td>
                        <td className="px-6 py-4">
                          <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                            empresa.status === 'Ativa' ? 'bg-green-100 text-green-700' :
                            empresa.status === 'Em Teste' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {empresa.status === 'Ativa' && '🟢'}
                            {empresa.status === 'Em Teste' && '🟡'}
                            {empresa.status === 'Suspensa' && '🔴'}
                            {empresa.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-900">{empresa.dataVencimento}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOpenModal(empresa)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                              title="Editar"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            {empresa.status === 'Ativa' ? (
                              <button
                                onClick={() => handleToggleStatus(empresa.id, 'Suspensa')}
                                className="p-2 text-orange-600 hover:bg-orange-50 rounded-lg transition-colors"
                                title="Suspender"
                              >
                                <Ban className="w-4 h-4" />
                              </button>
                            ) : (
                              <button
                                onClick={() => handleToggleStatus(empresa.id, 'Ativa')}
                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                title="Ativar"
                              >
                                <Power className="w-4 h-4" />
                              </button>
                            )}
                            <button
                              onClick={() => handleDeleteEmpresa(empresa.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                              title="Excluir"
                            >
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

          {/* FINANCEIRO */}
          {activeMenu === 'financeiro' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900">Controle Financeiro</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Plus className="w-5 h-5" />
                  Gerar Cobrança
                </button>
              </div>

              {/* Stats Financeiro */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Total Recebido</p>
                      <p className="text-2xl font-bold text-gray-900">R$ {stats.totalRecebido.toFixed(2)}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-orange-100 p-3 rounded-lg">
                      <Clock className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Pendências</p>
                      <p className="text-2xl font-bold text-gray-900">{stats.pendencias}</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <Receipt className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Receita Mensal</p>
                      <p className="text-2xl font-bold text-gray-900">R$ {stats.receitaMensal.toFixed(2)}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Histórico de Pagamentos */}
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Histórico de Pagamentos</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 border-b border-gray-200">
                      <tr>
                        <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Empresa</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Mês</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Valor</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Vencimento</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Status</th>
                        <th className="text-left px-4 py-3 text-sm font-medium text-gray-600">Ações</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pagamentos.map((pag) => (
                        <tr key={pag.id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="px-4 py-3 text-sm font-medium text-gray-900">{pag.empresaNome}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{pag.mesReferencia}</td>
                          <td className="px-4 py-3 text-sm text-gray-900 font-semibold">R$ {pag.valor.toFixed(2)}</td>
                          <td className="px-4 py-3 text-sm text-gray-900">{pag.dataVencimento}</td>
                          <td className="px-4 py-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              pag.status === 'Pago' ? 'bg-green-100 text-green-700' :
                              pag.status === 'Pendente' ? 'bg-yellow-100 text-yellow-700' :
                              'bg-red-100 text-red-700'
                            }`}>
                              {pag.status}
                            </span>
                          </td>
                          <td className="px-4 py-3">
                            {pag.status !== 'Pago' && (
                              <button
                                onClick={() => handleMarcarPago(pag.id)}
                                className="px-3 py-1 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
                              >
                                Marcar como Pago
                              </button>
                            )}
                            {pag.status === 'Pago' && pag.dataPagamento && (
                              <span className="text-xs text-gray-600">Pago em {pag.dataPagamento}</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* PLANOS */}
          {activeMenu === 'planos' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Gerenciamento de Planos</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Plus className="w-5 h-5" />
                  Novo Plano
                </button>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {planos.map((plano) => (
                  <div key={plano.id} className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-red-500 transition-colors">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{plano.nome}</h3>
                        <p className="text-sm text-gray-600 mt-1">{plano.descricao}</p>
                      </div>
                      <Package className="w-8 h-8 text-red-600" />
                    </div>
                    
                    <div className="mb-6">
                      <span className="text-3xl font-bold text-gray-900">R$ {plano.valor.toFixed(2)}</span>
                      <span className="text-gray-600">/mês</span>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Users className="w-4 h-4 text-green-600" />
                        <span>Até {plano.recursos.usuarios} usuários</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Building2 className="w-4 h-4 text-blue-600" />
                        <span>{plano.recursos.armazenamento} de armazenamento</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <MessageSquare className="w-4 h-4 text-purple-600" />
                        <span>Suporte: {plano.recursos.suporte}</span>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <button className="flex-1 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                        <Edit className="w-4 h-4 inline mr-1" />
                        Editar
                      </button>
                      <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* SUPORTE */}
          {activeMenu === 'suporte' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Central de Suporte</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Plus className="w-5 h-5" />
                  Novo Ticket
                </button>
              </div>

              {/* Stats Suporte */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-red-100 p-3 rounded-lg">
                      <AlertTriangle className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Abertos</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {tickets.filter(t => t.status === 'Aberto').length}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-yellow-100 p-3 rounded-lg">
                      <Clock className="w-5 h-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Em Andamento</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {tickets.filter(t => t.status === 'Em Andamento').length}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-4 border border-gray-200">
                  <div className="flex items-center gap-3">
                    <div className="bg-green-100 p-3 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Resolvidos</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {tickets.filter(t => t.status === 'Resolvido').length}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lista de Tickets */}
              <div className="space-y-4">
                {tickets.map((ticket) => (
                  <div key={ticket.id} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{ticket.titulo}</h3>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            ticket.status === 'Aberto' ? 'bg-red-100 text-red-700' :
                            ticket.status === 'Em Andamento' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {ticket.status}
                          </span>
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            ticket.prioridade === 'Alta' ? 'bg-red-100 text-red-700' :
                            ticket.prioridade === 'Média' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {ticket.prioridade}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">{ticket.descricao}</p>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <Building2 className="w-4 h-4" />
                            {ticket.empresaNome}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {ticket.dataCriacao}
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2 ml-4">
                        {ticket.status !== 'Resolvido' && (
                          <button
                            onClick={() => handleResolverTicket(ticket.id)}
                            className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors whitespace-nowrap"
                          >
                            Resolver
                          </button>
                        )}
                        <button className="px-4 py-2 border border-gray-300 text-gray-700 text-sm rounded-lg hover:bg-gray-50 transition-colors">
                          Detalhes
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Modal Empresa - mantém o mesmo do código anterior */}
      {showModalEmpresa && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto">
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-bold text-gray-900">
                {editingEmpresa ? 'Editar Empresa' : 'Nova Empresa'}
              </h3>
              <button
                onClick={handleCloseModal}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome da Empresa *
                  </label>
                  <input
                    type="text"
                    value={formData.nomeEmpresa}
                    onChange={(e) => setFormData({ ...formData, nomeEmpresa: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="Ex: Clínica São Lucas"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    CNPJ *
                  </label>
                  <input
                    type="text"
                    value={formData.cnpj}
                    onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="00.000.000/0000-00"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inscrição Estadual
                  </label>
                  <input
                    type="text"
                    value={formData.inscricaoEstadual}
                    onChange={(e) => setFormData({ ...formData, inscricaoEstadual: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="000.000.000.000"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Endereço *
                  </label>
                  <input
                    type="text"
                    value={formData.endereco}
                    onChange={(e) => setFormData({ ...formData, endereco: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="Rua, número, bairro, cidade/UF"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone *
                  </label>
                  <input
                    type="tel"
                    value={formData.telefone}
                    onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="(00) 0000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="contato@empresa.com.br"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pessoa de Contato
                  </label>
                  <input
                    type="text"
                    value={formData.contato}
                    onChange={(e) => setFormData({ ...formData, contato: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="Nome do responsável"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Plano
                  </label>
                  <select
                    value={formData.plano}
                    onChange={(e) => setFormData({ ...formData, plano: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  >
                    {planos.map(p => (
                      <option key={p.id} value={p.nome}>{p.nome}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Status
                  </label>
                  <select
                    value={formData.status}
                    onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                  >
                    <option value="Ativa">Ativa</option>
                    <option value="Em Teste">Em Teste</option>
                    <option value="Suspensa">Suspensa</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <h4 className="font-semibold text-gray-900 mb-3 mt-4">Dados Bancários</h4>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Banco
                  </label>
                  <input
                    type="text"
                    value={formData.banco}
                    onChange={(e) => setFormData({ ...formData, banco: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="Nome do banco"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Agência
                  </label>
                  <input
                    type="text"
                    value={formData.agencia}
                    onChange={(e) => setFormData({ ...formData, agencia: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="0000-0"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Conta
                  </label>
                  <input
                    type="text"
                    value={formData.conta}
                    onChange={(e) => setFormData({ ...formData, conta: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="00000-0"
                  />
                </div>
              </div>

              <div className="flex gap-3 mt-6">
                <button
                  onClick={handleSaveEmpresa}
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
                >
                  <Save className="w-5 h-5" />
                  Salvar Empresa
                </button>
                <button
                  onClick={handleCloseModal}
                  className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}