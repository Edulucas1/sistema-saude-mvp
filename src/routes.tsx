import { createBrowserRouter } from 'react-router-dom'; 
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import Contato from './pages/Contato';
import LoginPaciente from './pages/paciente/LoginPaciente';
import DashboardPaciente from './pages/paciente/DashboardPaciente';
import LoginMedico from './pages/medico/LoginMedico';
import DashboardMedico from './pages/medico/DashboardMedico';
import LoginClinica from './pages/clinica/LoginClinica';
import DashboardClinica from './pages/clinica/DashboardClinica';

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
    element: <DashboardPaciente />
  },
  {
    path: '/medico/login',
    element: <LoginMedico />
  },
  {
    path: '/medico/dashboard',
    element: <DashboardMedico />
  },
  {
    path: '/clinica/login',
    element: <LoginClinica />
  },
  {
    path: '/clinica/dashboard',
    element: <DashboardClinica />
  }
]);