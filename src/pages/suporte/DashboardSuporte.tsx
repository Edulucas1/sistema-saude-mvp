import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
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
  X
} from 'lucide-react';
import logoMedConnect from "../../assets/logo-medconnect.png";

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
}

export default function DashboardSuporte() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('empresas');
  const [showModal, setShowModal] = useState(false);
  const [editingEmpresa, setEditingEmpresa] = useState<Empresa | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  // Estado para conteúdos informativos
  const [conteudos, setConteudos] = useState([
    { id: '1', titulo: 'Importância da Vacinação', categoria: 'Prevenção', conteudo: 'As vacinas são essenciais...' },
    { id: '2', titulo: 'Diabetes: Prevenção e Cuidados', categoria: 'Doenças Crônicas', conteudo: 'O diabetes é uma doença...' }
  ]);

  // Mock de empresas cadastradas
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
      conta: '12345-6'
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
    conta: ''
  });

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
        conta: ''
      });
      setEditingEmpresa(null);
    }
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingEmpresa(null);
  };

  const handleSaveEmpresa = () => {
    if (editingEmpresa) {
      // Editar empresa existente
      setEmpresas(empresas.map(e => e.id === editingEmpresa.id ? formData : e));
    } else {
      // Adicionar nova empresa
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

  const filteredEmpresas = empresas.filter(e =>
    e.nomeEmpresa.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.cnpj.includes(searchTerm)
  );

  const menuItems = [
    { id: 'empresas', label: 'Empresas', icon: Building2 },
    { id: 'conteudos', label: 'Conteúdos Informativos', icon: FileText }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-red-600 to-red-700 text-white flex flex-col">
        {/* Logo */}
        <div className="p-6 border-b border-red-500">
        <img src={logoMedConnect} alt="MedConnect" className="h-35 w-auto object-contain" />
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

        {/* Logout */}
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
        {/* Header */}
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

        {/* Content */}
        <div className="p-8">
          {activeMenu === 'empresas' && (
            <div>
              {/* Header Empresas */}
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

              {/* Search */}
              <div className="mb-6">
                <div className="relative max-w-md">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none"
                    placeholder="Buscar por nome ou CNPJ..."
                  />
                </div>
              </div>

              {/* Empresas List */}
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b border-gray-200">
                    <tr>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Empresa</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">CNPJ</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Contato</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Telefone</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEmpresas.map((empresa) => (
                      <tr key={empresa.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm text-gray-900 font-medium">{empresa.nomeEmpresa}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{empresa.cnpj}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{empresa.contato}</td>
                        <td className="px-6 py-4 text-sm text-gray-900">{empresa.telefone}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOpenModal(empresa)}
                              className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDeleteEmpresa(empresa.id)}
                              className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
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

          {activeMenu === 'conteudos' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Conteúdos Informativos</h2>
                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors">
                  <Plus className="w-5 h-5" />
                  Novo Conteúdo
                </button>
              </div>

              <div className="grid gap-4">
                {conteudos.map((conteudo) => (
                  <div key={conteudo.id} className="bg-white rounded-xl p-6 border border-gray-200">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{conteudo.titulo}</h3>
                        <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium mb-3">
                          {conteudo.categoria}
                        </span>
                        <p className="text-gray-600 text-sm">{conteudo.conteudo}</p>
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
        </div>
      </main>

      {/* Modal Empresa */}
      {showModal && (
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
