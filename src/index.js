import Header from './components/Header.js';
import App from './components/App.js';
import SideBar from './components/SideBar.js';
import BookCard from './components/BookCard.js';
import Hamburger from './components/Hamburger.js';

// Define shadow dom elements on main DOM
window.customElements.define('sidebar-component', SideBar);
window.customElements.define('header-component', Header);
window.customElements.define('app-component', App);
window.customElements.define('book-card-component', BookCard);
window.customElements.define('hamburger-component', Hamburger);
