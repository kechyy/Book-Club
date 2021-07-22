
const template = document.createElement('template');
template.innerHTML = `
<style>
  .page-sidebar {
    width: 100%;
    min-height: 100vh;
  }

  .sidebar-nav {
    position: absolute;
    width: 80%;
  }

  .sidebar-nav .sidebar-nav-ul {
    list-style: none;
    margin: 0;
    padding: 0px;
  }
  .sidebar-nav-ul li {
    padding-bottom: 15px
  }
  .sidebar-nav-ul li a {
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    text-decoration: none;
    color: #000000;
  }
  .sidebar-nav-ul li.active a{
    color: #65C100;
  }

  .sidebar-nav-ul .nav-link {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: start;
    align-items: flex-start;
    justify-content: space-between;
  }

  .sidebar-nav-ul li.title span {
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
  }

  .back, .logo {
    display: none;
  }
  

  .bottom-divider{
    border-bottom: 1px solid #eeeeee;
    margin: 0px -40px;
    margin-bottom: 30px;
  }

  @media screen and  (max-width: 1111px) {
    
    /**.page-sidebar {
      display: none;
    }**/

    .back, .logo {
      display: block;
      width: 100%;
    }
    .logo {
      padding : 20px 0px;
    }
    .click-hide {
      display: none !important;
    }
    .click-show {
      display: block !important;
    }

    .page-header-new {
      padding: 20px 0px !important;
    }
  }
</style>
<aside class="page-sidebar">
  <div class="back">
    <img id="back" />
  </div>
  <div class="logo">
    <img id="logo" />
  </div>
  <nav class="nav sidebar-nav">
    <ul class="sidebar-nav-ul">
      
      <li class="active">
        <a href="#"  class="nav-link">
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <span>Profile</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <span>Notifications</span>
          <img id="badge" />
        </a>
      </li>
      <li class="bottom-divider"></li>

      <li class="title"><span>Explore</span></li>
      <li class="nav-title2">
        <a href="#" class="nav-link">
          <span>Books</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <span>Genres</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <span>Authors</span>
        </a>
      </li>
       <li class="bottom-divider"></li>

       <li class="title"><span>My Books</span></li>
      <li>
        <a href="#" class="nav-link">
          <span>Queued</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <span>Currently Borrowed</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <span>Favourites</span>
        </a>
      </li>
      <li>
        <a href="#" class="nav-link">
          <span>History</span>
        </a>
      </li>
      <li class="bottom-divider"></li>

    </ul>
  </nav>
</aside>
`;

export default class SideBar extends HTMLElement {
   //Called when the Web Component is created
  constructor() {
    super();
    // Create a shadow root
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Selects Dom image attributes and set them
    this.shadowRoot.querySelector('#badge').src =
    this.getAttribute("badge");
    this.shadowRoot.querySelector('#back').src =
    this.getAttribute("back");
    this.shadowRoot.querySelector('#logo').src =
    this.getAttribute("logo")
  }
  
   //Web Components API lifecycle method to listen when component is added to the DOM
  connectedCallback() {
    // Defines all Selectors
    const back = this.shadowRoot.querySelector('.back');
    const sidebarMenu = document.querySelector('.sidebar-menu');

    // Hide sidebar menu when the back button is clicked
    const hideSidebarMenu =  e => {
      e.preventDefault();
      sidebarMenu.style.visibility = 'hidden';
    }

    back.addEventListener('click', hideSidebarMenu);
  }
  // Disconnect from all event listeners
   disconnectedCallback() {
    back.removeEventListener();
  }
}






