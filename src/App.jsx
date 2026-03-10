import React, { useState } from 'react';
import { 
  Home, 
  Activity, 
  FileText, 
  User, 
  HelpCircle, 
  Pill, 
  Syringe, 
  TestTube, 
  Stethoscope, 
  CalendarPlus 
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('inicio');

  // Dados simulados (Mock data) para o MVP
  const paciente = {
    nome: "Eduardo",
    idade: 22,
    tipoSangue: "O+"
  };

  const menuItems = [
    { id: 'inicio', icon: Home, label: 'Início' },
    { id: 'saude', icon: Activity, label: 'Minha Saúde' },
    { id: 'conteudos', icon: FileText, label: 'Conteúdos' },
    { id: 'perfil', icon: User, label: 'Meu Perfil' },
    { id: 'ajuda', icon: HelpCircle, label: 'Dúvidas Frequentes' },
  ];

  const acoesRapidas = [
    { icon: Stethoscope, label: 'Consultas', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: Syringe, label: 'Vacinas', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: TestTube, label: 'Exames', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: Pill, label: 'Medicamentos', color: 'text-blue-600', bg: 'bg-blue-100' },
    { icon: CalendarPlus, label: 'Agendamentos', color: 'text-blue-600', bg: 'bg-blue-100' },
  ];

  const historicoRecente = [
    { data: '15 Out 2023', clinica: 'Clínica Central', medico: 'Dr. Silva', tipo: 'Consulta Geral' },
    { data: '02 Set 2023', clinica: 'Laboratório Vida', medico: '-', tipo: 'Hemograma Completo' },
  ];

  return (
    <div className="flex h-screen bg-gray-50 font-sans">
      
      {/* Barra Lateral (Sidebar) */}
      <aside className="w-64 bg-[#144b82] text-white flex flex-col hidden md:flex">
        <div className="p-6 flex items-center space-x-3">
          <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center grid grid-cols-2 gap-0.5 p-1">
            <div className="bg-blue-500 rounded-sm w-full h-full"></div>
            <div className="bg-orange-500 rounded-sm w-full h-full"></div>
            <div className="bg-red-500 rounded-sm w-full h-full"></div>
            <div className="bg-green-500 rounded-sm w-full h-full"></div>
          </div>
          <span className="text-xl font-bold tracking-wide">Saúde<span className="text-orange-400">Digital</span></span>
        </div>
        
        <nav className="flex-1 mt-6">
          <ul className="space-y-2">
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-6 py-3 transition-colors ${
                    activeTab === item.id 
                      ? 'bg-blue-800 border-l-4 border-orange-400' 
                      : 'hover:bg-[#1a5b9c] border-l-4 border-transparent'
                  }`}
                >
                  <item.icon size={20} className={activeTab === item.id ? 'text-orange-400' : 'text-gray-300'} />
                  <span className="font-medium">{item.label}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Conteúdo Principal */}
      <main className="flex-1 overflow-y-auto">
        {/* Cabeçalho */}
        <header className="bg-white p-6 shadow-sm flex justify-between items-center sticky top-0 z-10">
          <h1 className="text-2xl font-light text-blue-900">
            Olá, <span className="font-bold">{paciente.nome}</span>
          </h1>
          <div className="flex items-center space-x-4">
            <div className="text-right hidden sm:block">
              <p className="text-sm font-bold text-gray-800">Paciente</p>
              <p className="text-xs text-gray-500">Sangue: {paciente.tipoSangue}</p>
            </div>
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-800 font-bold">
              {paciente.nome.charAt(0)}
            </div>
          </div>
        </header>

        {/* Área de Conteúdo */}
        <div className="p-6 max-w-6xl mx-auto space-y-8">
          
          {/* Banner de Aviso (Simulando Campanhas) */}
          <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-2xl p-6 text-white shadow-md flex justify-between items-center">
            <div>
              <h2 className="text-xl font-bold mb-2">Mantenha a sua rede atualizada!</h2>
              <p className="text-blue-100 text-sm max-w-md">
                Autorize as clínicas parceiras a acederem ao seu histórico médico para um atendimento mais rápido e preciso.
              </p>
            </div>
            <button className="bg-white text-blue-700 px-4 py-2 rounded-lg font-bold shadow-sm hover:bg-gray-50 transition-colors">
              Gerir Autorizações
            </button>
          </div>

          {/* Secção: Minha Saúde (Ações Rápidas) */}
          <section>
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Minha Saúde</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {acoesRapidas.map((acao, index) => (
                <button key={index} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center justify-center hover:shadow-md hover:-translate-y-1 transition-all group">
                  <div className={`w-14 h-14 ${acao.bg} rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <acao.icon className={acao.color} size={28} />
                  </div>
                  <span className="text-sm font-medium text-gray-700 text-center">{acao.label}</span>
                </button>
              ))}
            </div>
          </section>

          {/* Secção: Histórico Recente (A "Mágica" da Rede) */}
          <section>
            <div className="flex justify-between items-center mb-4 border-b pb-2">
              <h3 className="text-lg font-bold text-gray-800">Histórico na Rede</h3>
              <button className="text-sm text-blue-600 font-medium hover:underline">Ver todo o histórico</button>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 text-gray-600 text-sm border-b">
                    <th className="p-4 font-medium">Data</th>
                    <th className="p-4 font-medium">Clínica / Unidade</th>
                    <th className="p-4 font-medium">Profissional</th>
                    <th className="p-4 font-medium">Registo</th>
                    <th className="p-4 font-medium text-right">Ação</th>
                  </tr>
                </thead>
                <tbody className="text-sm text-gray-700">
                  {historicoRecente.map((item, index) => (
                    <tr key={index} className="border-b last:border-0 hover:bg-gray-50">
                      <td className="p-4 font-medium">{item.data}</td>
                      <td className="p-4 flex items-center space-x-2">
                        <Activity size={16} className="text-blue-500" />
                        <span>{item.clinica}</span>
                      </td>
                      <td className="p-4">{item.medico}</td>
                      <td className="p-4">
                        <span className="bg-green-100 text-green-800 py-1 px-3 rounded-full text-xs font-medium">
                          {item.tipo}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        <button className="text-blue-600 hover:text-blue-800 font-medium text-sm">Ver Detalhes</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}