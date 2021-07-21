import { NavLink } from 'react-router-dom';
import st from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink to="/" exact className={st.link} activeClassName={st.activeLink}>
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={st.link}
      activeClassName={st.activeLink}
    >
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;
