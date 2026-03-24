import { createBrowserRouter } from 'react-router';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Contato from './pages/Contato';
import LoginPaciente from './pages/paciente/LoginPaciente';
import DashboardPaciente from './pages/paciente/DashboardPaciente';
import DashboardPacienteCompleto from './pages/paciente/DashboardPacienteCompleto';
import LoginMedico from './pages/medico/LoginMedico';
import LoginMedicoCompleto from './pages/medico/LoginMedicoCompleto';
import DashboardMedico from './pages/medico/DashboardMedico';
import DashboardMedicoCompleto from './pages/medico/DashboardMedicoCompleto';
import LoginClinica from './pages/clinica/LoginClinica';
import DashboardClinica from './pages/clinica/DashboardClinica';
import DashboardClinicaCompleto from './pages/clinica/DashboardClinicaCompleto';
import LoginSuporte from './pages/suporte/LoginSuporte';
import DashboardSuporte from './pages/suporte/DashboardSuporte';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />
  },
  {
    path: '/home',
    element: <Home />
  },
  {
    path: '/contato',
    element: <Contato />
  },
  {
    path: '/paciente/login',
    element: <LoginPaciente />
  },
  {
    path: '/paciente/dashboard',
    element: <DashboardPacienteCompleto />
  },
  {
    path: '/medico/login',
    element: <LoginMedicoCompleto />
  },
  {
    path: '/medico/dashboard',
    element: <DashboardMedico />
  },
  {
    path: '/medico/dashboard-completo',
    element: <DashboardMedicoCompleto />
  },
  {
    path: '/clinica/login',
    element: <LoginClinica />
  },
  {
    path: '/clinica/dashboard',
    element: <DashboardClinicaCompleto />
  },
  {
    path: '/clinica/dashboard-completo',
    element: <DashboardClinicaCompleto />
  },
  {
    path: '/suporte/login',
    element: <LoginSuporte />
  },
  {
    path: '/suporte/dashboard',
    element: <DashboardSuporte />
  }
]);