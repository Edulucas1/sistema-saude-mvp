import { useNavigate } from 'react-router';
import {
  Activity,
  Check,
  Users,
  Shield,
  Clock,
  BarChart3,
  Smartphone,
  HeartPulse,
  Stethoscope,
  Calendar,
  FileText,
  Star,
  ArrowRight,
  Menu,
  X
} from 'lucide-react';
import { useState } from 'react';
import logoMedConnect from '../assets/logo-medconnect.png';

export default function LandingPage() {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const features = [
    {
      icon: Users,
      title: 'Gestão Completa de Pacientes',
      description: 'Centralize todos os dados dos seus pacientes em um único lugar seguro e acessível.'
    },
    {
      icon: Calendar,
      title: 'Agendamento Inteligente',
      description: 'Sistema de agendamento automatizado que otimiza a agenda da sua clínica.'
    },
    {
      icon: FileText,
      title: 'Prontuário Eletrônico',
      description: 'Prontuários digitais completos com histórico médico detalhado e seguro.'
    },
    {
      icon: BarChart3,
      title: 'Relatórios e Análises',
      description: 'Dashboards completos com métricas e indicadores para tomada de decisão.'
    },
    {
      icon: Shield,
      title: 'Segurança e Privacidade',
      description: 'Proteção total dos dados seguindo LGPD e melhores práticas de segurança.'
    },
    {
      icon: Smartphone,
      title: 'Acesso Mobile',
      description: 'Acesse de qualquer dispositivo, a qualquer hora e em qualquer lugar.'
    }
  ];

  const benefits = [
    'Redução de até 60% no tempo administrativo',
    'Aumento de 40% na satisfação dos pacientes',
    'Zero papel e processos 100% digitais',
    'Suporte técnico especializado 24/7',
    'Integração com laboratórios e farmácias',
    'Conformidade total com LGPD'
  ];

  const testimonials = [
    {
      name: 'Dra. Maria Silva',
      role: 'Diretora Clínica São Lucas',
      content: 'O MedConnect transformou completamente nossa gestão. Reduzimos o tempo administrativo pela metade e melhoramos muito o atendimento.',
      rating: 5
    },
    {
      name: 'Dr. João Santos',
      role: 'Cardiologista',
      content: 'Sistema intuitivo e completo. Consigo acessar o histórico dos pacientes de forma rápida e segura.',
      rating: 5
    },
    {
      name: 'Ana Costa',
      role: 'Administradora',
      content: 'A melhor decisão que tomamos foi migrar para o MedConnect. O suporte é excelente e a plataforma é muito estável.',
      rating: 5
    }
  ];

  const plans = [
    {
      name: 'Starter',
      price: 'R$ 199',
      period: '/mês',
      description: 'Ideal para consultórios individuais',
      features: [
        'Até 2 médicos',
        '500 pacientes ativos',
        'Prontuário eletrônico',
        'Agendamento online',
        'Suporte por email'
      ]
    },
    {
      name: 'Professional',
      price: 'R$ 499',
      period: '/mês',
      description: 'Perfeito para clínicas médias',
      features: [
        'Até 10 médicos',
        '2.000 pacientes ativos',
        'Prontuário eletrônico',
        'Agendamento online',
        'Relatórios avançados',
        'Suporte prioritário'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Personalizado',
      period: '',
      description: 'Para hospitais e grandes clínicas',
      features: [
        'Médicos ilimitados',
        'Pacientes ilimitados',
        'Todos os recursos',
        'API customizada',
        'Suporte 24/7',
        'Treinamento dedicado'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
             <img src={logoMedConnect} alt="MedConnect" className="h-34 w-auto object-contain" />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#recursos" className="text-gray-600 hover:text-gray-900 transition-colors">
                Recursos
              </a>
              <a href="#beneficios" className="text-gray-600 hover:text-gray-900 transition-colors">
                Benefícios
              </a>
              <a href="#planos" className="text-gray-600 hover:text-gray-900 transition-colors">
                Planos
              </a>
              <a href="#depoimentos" className="text-gray-600 hover:text-gray-900 transition-colors">
                Depoimentos
              </a>
              <button
                onClick={() => navigate('/home')}
                className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/contato')}
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Teste Grátis
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-900" />
              ) : (
                <Menu className="w-6 h-6 text-gray-900" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <nav className="px-4 py-4 space-y-3">
              <a href="#recursos" className="block py-2 text-gray-600">
                Recursos
              </a>
              <a href="#beneficios" className="block py-2 text-gray-600">
                Benefícios
              </a>
              <a href="#planos" className="block py-2 text-gray-600">
                Planos
              </a>
              <a href="#depoimentos" className="block py-2 text-gray-600">
                Depoimentos
              </a>
              <button
                onClick={() => navigate('/home')}
                className="block w-full text-left py-2 text-blue-600 font-medium"
              >
                Login
              </button>
              <button
                onClick={() => navigate('/contato')}
                className="block w-full px-6 py-2 bg-blue-600 text-white rounded-lg font-medium"
              >
                Teste Grátis
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <HeartPulse className="w-4 h-4" />
                Tecnologia para o futuro da saúde
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Gestão de Saúde
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {' '}Completa e Inteligente
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                A plataforma que conecta pacientes, médicos e clínicas em um sistema
                integrado, seguro e fácil de usar. Simplifique sua gestão e ofereça
                um atendimento excepcional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => navigate('/contato')}
                  className="group px-8 py-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-all font-semibold text-lg flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Quero testar gratuitamente
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => navigate('/home')}
                  className="px-8 py-4 border-2 border-gray-300 text-gray-900 rounded-xl hover:border-gray-400 transition-colors font-semibold text-lg"
                >
                  Fazer Login
                </button>
              </div>
              <div className="mt-8 flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>14 dias grátis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Sem cartão de crédito</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5 text-green-600" />
                  <span>Suporte incluído</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Stethoscope className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Dashboard Médico</h3>
                    <p className="text-sm text-gray-600">Em tempo real</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Pacientes Atendidos</span>
                      <span className="text-2xl font-bold text-blue-600">847</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full" style={{ width: '75%' }}></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-green-50 rounded-lg p-4">
                      <Calendar className="w-6 h-6 text-green-600 mb-2" />
                      <p className="text-2xl font-bold text-gray-900">28</p>
                      <p className="text-sm text-gray-600">Consultas Hoje</p>
                    </div>
                    <div className="bg-purple-50 rounded-lg p-4">
                      <Clock className="w-6 h-6 text-purple-600 mb-2" />
                      <p className="text-2xl font-bold text-gray-900">98%</p>
                      <p className="text-sm text-gray-600">Taxa de Satisfação</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20"></div>
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-purple-600 rounded-full blur-3xl opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">10k+</p>
              <p className="text-gray-600">Pacientes Ativos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">500+</p>
              <p className="text-gray-600">Médicos</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">150+</p>
              <p className="text-gray-600">Clínicas</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-blue-600 mb-2">98%</p>
              <p className="text-gray-600">Satisfação</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="recursos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recursos Completos para sua Clínica
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tudo que você precisa para gerenciar sua clínica de forma profissional
              e eficiente, em uma única plataforma.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-200"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="beneficios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Por que escolher o MedConnect?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Nossa plataforma foi desenvolvida por profissionais da saúde e
                tecnologia, pensando em cada detalhe para facilitar o seu dia a dia.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-700">{benefit}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">
                Comece agora mesmo!
              </h3>
              <p className="text-blue-100 mb-8">
                Teste grátis por 14 dias. Sem compromisso, sem cartão de crédito.
                Cancele quando quiser.
              </p>
              <button
                onClick={() => navigate('/contato')}
                className="w-full px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg flex items-center justify-center gap-2"
              >
                Iniciar teste gratuito
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Planos que se adaptam ao seu negócio
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para sua clínica
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-2xl p-8 ${
                  plan.popular
                    ? 'ring-2 ring-blue-600 shadow-xl relative'
                    : 'border border-gray-200'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-600">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate('/contato')}
                  className={`w-full px-6 py-3 rounded-lg font-semibold transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'border-2 border-gray-300 text-gray-900 hover:border-gray-400'
                  }`}
                >
                  Começar agora
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="depoimentos" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600">
              Veja como o MedConnect está transformando clínicas em todo o Brasil
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-6">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Pronto para transformar sua clínica?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Junte-se a centenas de clínicas que já estão usando o MedConnect
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => navigate('/contato')}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl hover:bg-blue-50 transition-colors font-semibold text-lg"
            >
              Quero testar gratuitamente
            </button>
            <button
              onClick={() => navigate('/contato')}
              className="px-8 py-4 border-2 border-white text-white rounded-xl hover:bg-white/10 transition-colors font-semibold text-lg"
            >
              Entre em contato
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <img src={logoMedConnect} alt="MedConnect" className="h-8" />
              </div>
              <p className="text-gray-400 text-sm">
                Sistema Integrado de Gestão de Saúde
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Produto</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#recursos" className="hover:text-white transition-colors">Recursos</a></li>
                <li><a href="#planos" className="hover:text-white transition-colors">Planos</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Segurança</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Sobre</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Carreiras</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Suporte</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Central de Ajuda</a></li>
                <li><a href="/contato" className="hover:text-white transition-colors">Contato</a></li>
                <li><a href="/home" className="hover:text-white transition-colors">Login</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>© 2026 MedConnect - Todos os direitos reservados</p>
          </div>
        </div>
      </footer>
    </div>
  );
}