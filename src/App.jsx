import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HeaderPage from './Page/HeaderPage';
import IntroPage from './Page/IntroPage';
import CarouselPage from './Page/CarouselPage';
import FormPage from './Page/FormPage';
import FooterPage from './Page/FooterPage';
import NosTravauxFaitPage from './Page/WorkPage';
import LoginFormPage from './Page/LoginFormPage';
import Dashboard from './Components/Dashboard';
import ExpertisePage from './Page/ExpertisePage';
import Responsive from './Components/Responsive'; 
import ProfilePage from './Page/ProfilePage'
import './App.css';

function App() {
  return (
    <Responsive>
      <Router>
        <>
          <HeaderPage />
          <Routes>
            <Route path="/" element={
              <>
                <CarouselPage />
                <IntroPage />
              </>
            } />
            <Route path="/work" element={<NosTravauxFaitPage />} />
            <Route path="/expertise" element={<ExpertisePage />} />
            <Route path="/contact" element={<FormPage />} />
            <Route path='/login' element={<LoginFormPage />} />
            <Route path='/dashboard' element={<Dashboard />} /> 
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
          <FooterPage />
        </>
      </Router>
    </Responsive>
  );
}

export default App;
