import React from 'react';
import styles from './navstyle.styl';
import { Link } from 'react-router'
import menuTop from '../../img/menu-top.png';
import menuBottom from '../../img/menu-top.png';
import menuMiddle from '../../img/menu-middle.png';


const Nav = (props) => {
  return (
    <nav>
      <input type="checkbox" id="checkbox_toggle" />
      <label htmlFor="checkbox_toggle" className="nav__toggle">
          <div className="nav__dash nav__dash--top"></div>
          <div className="nav__dash nav__dash--middle"></div>
          <div className="nav__dash nav__dash--bottom"></div>
          {/* <img src={menuTop} alt="menu-item" className="nav__top" />
            <img src={menuMiddle} alt="menu-item" className="nav__middle" />
            <img src={menuBottom} alt="menu-item" className="nav__bottom" /> */}
      </label>
      <h3 className="nav__title">{props.title}</h3>
      <ul className="nav__list">
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/beers">Beers</Link></li>
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  title: React.PropTypes.string,
};

export default Nav;
