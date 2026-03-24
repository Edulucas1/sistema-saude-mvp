import { useState } from 'react';
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
  LogOut,
  Plus,
  Download,
  AlertCircle,
  Edit,
  Save
} from 'lucide-react';
import logoMedConnect from '../../assets/logo-medconnect.png';

export default function DashboardPacienteCompleto() {
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState('inicio');
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);
  const [editingProfile, setEditingProfile] = useState(false);

  // Estado do perfil do paciente
  const [perfil, setPerfil] = useState({
    nome: 'Eduardo Silva Santos',
    dataNascimento: '15/03/1985',
    tipoSanguineo: 'O+',
    email: 'eduardo@email.com',
    nomeMae: 'Maria Silva Santos',
    endereco: 'Rua das Flores, 123 - Centro',
    cidade: 'São Paulo',
    estado: 'SP',
    cep: '01234-567',
    telefone: '(11) 98765-4321',
    cpf: '123.456.789-00'
  });

  // Dados mockados - Consultas
  const [consultas] = useState([
    {
      id: '1',
      data: '15/10/2023',
      horario: '14:30',
      medico: 'Dr. Carlos Silva',
      especialidade: 'Cardiologia',
      local: 'Clínica Central - São Paulo/SP',
      status: 'Realizada',
      observacoes: 'Consulta de rotina. Pressão arterial normal.'
    },
    {
      id: '2',
      data: '02/09/2023',
      horario: '10:00',
      medico: 'Dra. Ana Santos',
      especialidade: 'Clínica Geral',
      local: 'Hospital São Lucas - São Paulo/SP',
      status: 'Realizada',
      observacoes: 'Check-up anual completo.'
    },
    {
      id: '3',
      data: '20/07/2023',
      horario: '16:00',
      medico: 'Dr. Pedro Oliveira',
      especialidade: 'Ortopedia',
      local: 'Clínica Ortoped - São Paulo/SP',
      status: 'Realizada',
      observacoes: 'Avaliação de dor no joelho direito.'
    }
  ]);

  // Dados mockados - Vacinas
  const [vacinas] = useState([
    { id: '1', nome: 'COVID-19 (Pfizer)', data: '10/01/2024', dose: '4ª dose', lote: 'ABC123', local: 'UBS Central' },
    { id: '2', nome: 'Influenza (Gripe)', data: '15/04/2023', dose: 'Dose anual', lote: 'FLU456', local: 'UBS Central' },
    { id: '3', nome: 'Tétano', data: '20/03/2020', dose: 'Reforço', lote: 'TET789', local: 'Hospital Municipal' },
    { id: '4', nome: 'Febre Amarela', data: '10/02/2015', dose: 'Dose única', lote: 'FA321', local: 'Clínica de Vacinação' }
  ]);

  // Dados mockados - Exames
  const [exames] = useState([
    {
      id: '1',
      nome: 'Hemograma Completo',
      data: '05/10/2023',
      laboratorio: 'Laboratório Vida',
      medico: 'Dra. Ana Santos',
      status: 'Concluído',
      resultado: 'Normal'
    },
    {
      id: '2',
      nome: 'Colesterol Total e Frações',
      data: '05/10/2023',
      laboratorio: 'Laboratório Vida',
      medico: 'Dr. Carlos Silva',
      status: 'Concluído',
      resultado: 'Colesterol LDL levemente elevado'
    },
    {
      id: '3',
      nome: 'Glicemia em Jejum',
      data: '05/10/2023',
      laboratorio: 'Laboratório Vida',
      medico: 'Dra. Ana Santos',
      status: 'Concluído',
      resultado: 'Normal - 92 mg/dL'
    },
    {
      id: '4',
      nome: 'Raio-X Tórax',
      data: '22/07/2023',
      laboratorio: 'Centro de Imagem',
      medico: 'Dr. Pedro Oliveira',
      status: 'Concluído',
      resultado: 'Sem alterações'
    }
  ]);

  // Dados mockados - Medicações
  const [medicacoes] = useState([
    {
      id: '1',
      nome: 'Losartana 50mg',
      medico: 'Dr. Carlos Silva',
      dataInicio: '15/10/2023',
      dosagem: '1 comprimido pela manhã',
      observacao: 'Uso contínuo para controle de pressão arterial',
      ativo: true
    },
    {
      id: '2',
      nome: 'Sinvastatina 20mg',
      medico: 'Dr. Carlos Silva',
      dataInicio: '15/10/2023',
      dosagem: '1 comprimido à noite',
      observacao: 'Para controle do colesterol',
      ativo: true
    },
    {
      id: '3',
      nome: 'Dipirona 500mg',
      medico: 'Dra. Ana Santos',
      dataInicio: '02/09/2023',
      dosagem: 'Conforme necessário',
      observacao: 'Uso ocasional para dor',
      ativo: false
    }
  ]);

  // Alergias medicamentosas
  const alergias = ['Penicilina', 'AAS (Ácido Acetilsalicílico)'];

  // Dados mockados - Agendamentos
  const [agendamentos] = useState([
    {
      id: '1',
      data: '25/03/2026',
      horario: '14:00',
      medico: 'Dr. Carlos Silva',
      especialidade: 'Cardiologia',
      local: 'Clínica Central',
      status: 'Confirmado'
    },
    {
      id: '2',
      data: '10/04/2026',
      horario: '10:30',
      medico: 'Dra. Ana Santos',
      especialidade: 'Clínica Geral',
      local: 'Hospital São Lucas',
      status: 'Aguardando Confirmação'
    }
  ]);

  // Conteúdos informativos
  const conteudos = [
    {
      id: '1',
      titulo: 'Importância da Vacinação',
      categoria: 'Prevenção',
      resumo: 'As vacinas são uma das formas mais eficazes de prevenir doenças. Entenda por que manter a carteira de vacinação em dia é fundamental para sua saúde.',
      data: '15/03/2026'
    },
    {
      id: '2',
      titulo: 'Diabetes: Prevenção e Cuidados',
      categoria: 'Doenças Crônicas',
      resumo: 'O diabetes é uma doença crônica que afeta milhões de pessoas. Saiba como prevenir e controlar a doença com hábitos saudáveis.',
      data: '10/03/2026'
    },
    {
      id: '3',
      titulo: 'Hipertensão: O que você precisa saber',
      categoria: 'Doenças Crônicas',
      resumo: 'A hipertensão arterial é conhecida como "assassina silenciosa". Aprenda a controlar sua pressão e viver com mais qualidade.',
      data: '05/03/2026'
    }
  ];

  const handleLogout = () => {
    navigate('/');
  };

  const handleSaveProfile = () => {
    setEditingProfile(false);
    // Aqui seria enviado para o backend
  };

  const menuItems = [
    { id: 'inicio', label: 'Início', icon: Home },
    { id: 'minha-saude', label: 'Minha Saúde', icon: Activity },
    { id: 'conteudos', label: 'Conteúdos', icon: FileText },
    { id: 'perfil', label: 'Meu Perfil', icon: User },
    { id: 'duvidas', label: 'Dúvidas Frequentes', icon: HelpCircle }
  ];

  const saudeCards = [
    { id: 'consultas', label: 'Consultas', icon: Stethoscope },
    { id: 'vacinas', label: 'Vacinas', icon: Syringe },
    { id: 'exames', label: 'Exames', icon: FlaskConical },
    { id: 'medicamentos', label: 'Medicamentos', icon: Pill },
    { id: 'agendamentos', label: 'Agendamentos', icon: Calendar }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-blue-700 to-blue-800 text-white flex flex-col">
        <div className="p-6 border-b border-blue-600">
         <img src={logoMedConnect} alt="MedConnect" className="h-35 w-auto object-contain" />
        </div>

        <nav className="flex-1 py-6">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveMenu(item.id);
                  setActiveSubMenu(null);
                }}
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
        <header className="bg-white border-b border-gray-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl text-gray-900">
              Olá, <span className="font-semibold">{perfil.nome.split(' ')[0]}</span>
            </h1>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>Paciente</span>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="w-5 h-5 text-blue-700" />
              </div>
            </div>
          </div>
        </header>

        <div className="p-8">
          {/* INÍCIO */}
          {activeMenu === 'inicio' && (
            <div className="space-y-6">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl p-6 text-white flex items-center justify-between">
                <div className="flex-1">
                  <h2 className="text-xl font-semibold mb-2">Mantenha a sua rede atualizada!</h2>
                  <p className="text-sm text-blue-100">
                    Autorize as clínicas parceiras e obtenha um atendimento médico mais rápido e preciso.
                  </p>
                </div>
                <button className="bg-white text-blue-700 px-6 py-2.5 rounded-lg font-medium hover:bg-blue-50 transition-colors whitespace-nowrap">
                  Gerir Autorizações
                </button>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Minha Saúde</h2>
                <div className="grid grid-cols-5 gap-4">
                  {saudeCards.map((card) => {
                    const Icon = card.icon;
                    return (
                      <button
                        key={card.id}
                        onClick={() => {
                          setActiveMenu('minha-saude');
                          setActiveSubMenu(card.id);
                        }}
                        className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200 flex flex-col items-center justify-center gap-3 group"
                      >
                        <div className="bg-blue-50 p-4 rounded-lg group-hover:scale-110 transition-transform">
                          <Icon className="w-8 h-8 text-blue-600" />
                        </div>
                        <span className="text-sm font-medium text-gray-700">{card.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">Próximos Agendamentos</h2>
                </div>
                <div className="grid gap-3">
                  {agendamentos.slice(0, 2).map((agendamento) => (
                    <div key={agendamento.id} className="bg-white rounded-xl p-4 border border-gray-200 flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="bg-blue-100 p-3 rounded-lg">
                          <Calendar className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{agendamento.medico}</h3>
                          <p className="text-sm text-gray-600">{agendamento.especialidade} - {agendamento.local}</p>
                          <p className="text-sm text-gray-500">{agendamento.data} às {agendamento.horario}</p>
                        </div>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        agendamento.status === 'Confirmado'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {agendamento.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* MINHA SAÚDE */}
          {activeMenu === 'minha-saude' && (
            <div>
              <div className="flex gap-2 mb-6 border-b border-gray-200 pb-4 overflow-x-auto">
                {saudeCards.map((card) => {
                  const Icon = card.icon;
                  return (
                    <button
                      key={card.id}
                      onClick={() => setActiveSubMenu(card.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-colors ${
                        activeSubMenu === card.id
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {card.label}
                    </button>
                  );
                })}
              </div>

              {/* CONSULTAS */}
              {activeSubMenu === 'consultas' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Histórico de Consultas</h2>
                  <div className="space-y-4">
                    {consultas.map((consulta) => (
                      <div key={consulta.id} className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                              <Stethoscope className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{consulta.medico}</h3>
                              <p className="text-sm text-gray-600">{consulta.especialidade}</p>
                            </div>
                          </div>
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            {consulta.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-4 mb-3">
                          <div>
                            <p className="text-xs text-gray-500 mb-1">Data e Hora</p>
                            <p className="text-sm font-medium text-gray-900">{consulta.data} - {consulta.horario}</p>
                          </div>
                          <div className="col-span-2">
                            <p className="text-xs text-gray-500 mb-1">Local</p>
                            <p className="text-sm font-medium text-gray-900">{consulta.local}</p>
                          </div>
                        </div>
                        {consulta.observacoes && (
                          <div className="bg-gray-50 rounded-lg p-3 mt-3">
                            <p className="text-xs text-gray-500 mb-1">Observações</p>
                            <p className="text-sm text-gray-700">{consulta.observacoes}</p>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* VACINAS */}
              {activeSubMenu === 'vacinas' && (
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-gray-900">Carteira de Vacinação</h2>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                      <Plus className="w-5 h-5" />
                      Adicionar Vacina
                    </button>
                  </div>
                  <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                    <table className="w-full">
                      <thead className="bg-gray-50 border-b border-gray-200">
                        <tr>
                          <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Vacina</th>
                          <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Data</th>
                          <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Dose</th>
                          <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Lote</th>
                          <th className="text-left px-6 py-3 text-sm font-medium text-gray-600">Local</th>
                        </tr>
                      </thead>
                      <tbody>
                        {vacinas.map((vacina) => (
                          <tr key={vacina.id} className="border-b border-gray-100 hover:bg-gray-50">
                            <td className="px-6 py-4 text-sm font-medium text-gray-900">{vacina.nome}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{vacina.data}</td>
                            <td className="px-6 py-4 text-sm text-gray-900">{vacina.dose}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{vacina.lote}</td>
                            <td className="px-6 py-4 text-sm text-gray-600">{vacina.local}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}

              {/* EXAMES */}
              {activeSubMenu === 'exames' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Resultados de Exames</h2>
                  <div className="space-y-4">
                    {exames.map((exame) => (
                      <div key={exame.id} className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="bg-purple-100 p-2 rounded-lg">
                                <FlaskConical className="w-5 h-5 text-purple-600" />
                              </div>
                              <div>
                                <h3 className="text-lg font-semibold text-gray-900">{exame.nome}</h3>
                                <p className="text-sm text-gray-600">Data: {exame.data}</p>
                              </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                              <div>
                                <p className="text-xs text-gray-500">Laboratório</p>
                                <p className="text-sm font-medium text-gray-900">{exame.laboratorio}</p>
                              </div>
                              <div>
                                <p className="text-xs text-gray-500">Solicitado por</p>
                                <p className="text-sm font-medium text-gray-900">{exame.medico}</p>
                              </div>
                            </div>
                            <div className="mt-3 bg-gray-50 rounded-lg p-3">
                              <p className="text-xs text-gray-500 mb-1">Resultado</p>
                              <p className="text-sm text-gray-900">{exame.resultado}</p>
                            </div>
                          </div>
                          <button className="ml-4 flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                            <Download className="w-4 h-4" />
                            <span className="text-sm">Baixar PDF</span>
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* MEDICAMENTOS */}
              {activeSubMenu === 'medicamentos' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Medicamentos</h2>
                  
                  {/* Alergias */}
                  <div className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-red-900 mb-2">Alergias Medicamentosas</h3>
                        <div className="flex flex-wrap gap-2">
                          {alergias.map((alergia, index) => (
                            <span key={index} className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                              {alergia}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Medicamentos Ativos */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Medicamentos em Uso</h3>
                  <div className="space-y-3 mb-6">
                    {medicacoes.filter(m => m.ativo).map((medicacao) => (
                      <div key={medicacao.id} className="bg-white rounded-xl p-4 border border-gray-200">
                        <div className="flex items-start gap-4">
                          <div className="bg-green-100 p-3 rounded-lg">
                            <Pill className="w-6 h-6 text-green-600" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 mb-1">{medicacao.nome}</h4>
                            <p className="text-sm text-gray-600 mb-2">{medicacao.dosagem}</p>
                            <div className="grid grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="text-gray-500">Médico:</span> <span className="text-gray-900">{medicacao.medico}</span>
                              </div>
                              <div>
                                <span className="text-gray-500">Início:</span> <span className="text-gray-900">{medicacao.dataInicio}</span>
                              </div>
                            </div>
                            {medicacao.observacao && (
                              <p className="text-sm text-gray-600 mt-2 italic">{medicacao.observacao}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Medicamentos Anteriores */}
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Histórico</h3>
                  <div className="space-y-3">
                    {medicacoes.filter(m => !m.ativo).map((medicacao) => (
                      <div key={medicacao.id} className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                        <div className="flex items-start gap-4">
                          <div className="bg-gray-200 p-3 rounded-lg">
                            <Pill className="w-6 h-6 text-gray-500" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-700 mb-1">{medicacao.nome}</h4>
                            <p className="text-sm text-gray-500">{medicacao.dosagem}</p>
                          </div>
                          <span className="px-3 py-1 bg-gray-300 text-gray-700 rounded-full text-xs">Inativo</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* AGENDAMENTOS */}
              {activeSubMenu === 'agendamentos' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Meus Agendamentos</h2>
                  <div className="space-y-4">
                    {agendamentos.map((agendamento) => (
                      <div key={agendamento.id} className="bg-white rounded-xl p-6 border border-gray-200">
                        <div className="flex items-start justify-between">
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-100 p-3 rounded-lg">
                              <Calendar className="w-6 h-6 text-blue-600" />
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900 mb-1">{agendamento.medico}</h3>
                              <p className="text-sm text-gray-600 mb-3">{agendamento.especialidade}</p>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <p className="text-xs text-gray-500">Data e Hora</p>
                                  <p className="text-sm font-medium text-gray-900">{agendamento.data} às {agendamento.horario}</p>
                                </div>
                                <div>
                                  <p className="text-xs text-gray-500">Local</p>
                                  <p className="text-sm font-medium text-gray-900">{agendamento.local}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-end gap-3">
                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                              agendamento.status === 'Confirmado'
                                ? 'bg-green-100 text-green-700'
                                : 'bg-yellow-100 text-yellow-700'
                            }`}>
                              {agendamento.status}
                            </span>
                            <button className="text-sm text-red-600 hover:text-red-700">Cancelar</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {!activeSubMenu && (
                <div className="text-center py-12">
                  <Activity className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">
                    Selecione uma opção acima
                  </h3>
                  <p className="text-gray-500">
                    Escolha uma das categorias para visualizar suas informações de saúde
                  </p>
                </div>
              )}
            </div>
          )}

          {/* CONTEÚDOS */}
          {activeMenu === 'conteudos' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Conteúdos Informativos</h2>
              <div className="grid gap-6">
                {conteudos.map((conteudo) => (
                  <div key={conteudo.id} className="bg-white rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium">
                        {conteudo.categoria}
                      </span>
                      <span className="text-xs text-gray-500">{conteudo.data}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{conteudo.titulo}</h3>
                    <p className="text-gray-600 mb-4">{conteudo.resumo}</p>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                      Ler mais →
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PERFIL */}
          {activeMenu === 'perfil' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Meu Perfil</h2>
                {!editingProfile ? (
                  <button
                    onClick={() => setEditingProfile(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Edit className="w-5 h-5" />
                    Editar Perfil
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={handleSaveProfile}
                      className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
                    >
                      <Save className="w-5 h-5" />
                      Salvar
                    </button>
                    <button
                      onClick={() => setEditingProfile(false)}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      Cancelar
                    </button>
                  </div>
                )}
              </div>

              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-12 h-12 text-blue-600" />
                  </div>
                  <div className="flex-1 grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome Completo</label>
                      <input
                        type="text"
                        value={perfil.nome}
                        onChange={(e) => setPerfil({ ...perfil, nome: e.target.value })}
                        disabled={!editingProfile}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CPF</label>
                      <input
                        type="text"
                        value={perfil.cpf}
                        disabled
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Data de Nascimento</label>
                      <input
                        type="text"
                        value={perfil.dataNascimento}
                        onChange={(e) => setPerfil({ ...perfil, dataNascimento: e.target.value })}
                        disabled={!editingProfile}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Tipo Sanguíneo</label>
                      <input
                        type="text"
                        value={perfil.tipoSanguineo}
                        onChange={(e) => setPerfil({ ...perfil, tipoSanguineo: e.target.value })}
                        disabled={!editingProfile}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={perfil.email}
                        onChange={(e) => setPerfil({ ...perfil, email: e.target.value })}
                        disabled={!editingProfile}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Telefone</label>
                      <input
                        type="tel"
                        value={perfil.telefone}
                        onChange={(e) => setPerfil({ ...perfil, telefone: e.target.value })}
                        disabled={!editingProfile}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Nome da Mãe</label>
                      <input
                        type="text"
                        value={perfil.nomeMae}
                        onChange={(e) => setPerfil({ ...perfil, nomeMae: e.target.value })}
                        disabled={!editingProfile}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Endereço</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Logradouro</label>
                      <input
                        type="text"
                        value={perfil.endereco}
                        onChange={(e) => setPerfil({ ...perfil, endereco: e.target.value })}
                        disabled={!editingProfile}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">CEP</label>
                      <input
                        type="text"
                        value={perfil.cep}
                        onChange={(e) => setPerfil({ ...perfil, cep: e.target.value })}
                        disabled={!editingProfile}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Cidade</label>
                      <input
                        type="text"
                        value={perfil.cidade}
                        onChange={(e) => setPerfil({ ...perfil, cidade: e.target.value })}
                        disabled={!editingProfile}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Estado</label>
                      <input
                        type="text"
                        value={perfil.estado}
                        onChange={(e) => setPerfil({ ...perfil, estado: e.target.value })}
                        disabled={!editingProfile}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none disabled:bg-gray-50 disabled:text-gray-600"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* DÚVIDAS */}
          {activeMenu === 'duvidas' && (
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Dúvidas Frequentes</h2>
              <div className="space-y-4">
                {[
                  {
                    pergunta: 'Como agendar uma consulta?',
                    resposta: 'Você pode agendar consultas através da seção "Agendamentos" no menu Minha Saúde ou diretamente com a clínica de sua preferência.'
                  },
                  {
                    pergunta: 'Como acessar meus exames?',
                    resposta: 'Seus exames ficam disponíveis na seção "Exames" dentro de Minha Saúde. Você pode visualizar os resultados e baixar em PDF.'
                  },
                  {
                    pergunta: 'Como autorizar clínicas parceiras?',
                    resposta: 'Use o botão "Gerir Autorizações" no banner principal da página inicial para gerenciar quais clínicas podem acessar seus dados.'
                  },
                  {
                    pergunta: 'Como atualizar minha carteira de vacinação?',
                    resposta: 'Acesse a seção "Vacinas" em Minha Saúde e clique no botão "Adicionar Vacina" para registrar novas doses.'
                  },
                  {
                    pergunta: 'Meus dados estão seguros?',
                    resposta: 'Sim! Utilizamos criptografia de ponta e seguimos todas as normas da LGPD para garantir a segurança e privacidade dos seus dados.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
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
