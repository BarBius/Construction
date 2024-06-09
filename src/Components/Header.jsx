import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <nav className="navigation">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/expertise">Expertises</Link></li>
          <li><Link to="/work">Réalisations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/login">Connexion</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
