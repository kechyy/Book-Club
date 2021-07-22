const template = document.createElement('template');
template.innerHTML = `
<style>
 /** ---- General type selector styles ----------- **/
  ul {
    list-style: none;
  }
  a,
  button {
    color: inherit;
  }
  a {
    text-decoration: none;
  }
  button {
    background: none;
    cursor: pointer;
  }
  input {
    -webkit-appearance: none;
  }
  label {
    cursor: pointer;
  }
  input[type="placeholder"]{
    font-family: Ubuntu;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    color: #999999;
  }
  button,
  input {
    border: none;
  }

   /** ---- Header size extra large screen ----------- **/
  .page-header {
    width: 100%;
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    z-index: 999999999;
    height:  70px
    background: #FFFFFF;
    opacity: 97%;
    border: 1px solid #EEEEEE;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.05);

  }

   /** ---- Page container ----------- **/
  .container {
    margin: auto;
    padding-bottom: 0px;
    background: #fff;
    width: calc(100% - 60px);
    padding: 0px 35px;
  }

  #logo-responsive, 
  #responsive-search-btn,
  .navbar-top .back  {
    display: none;
  }

  .navbar-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .navbar-top > * {
    flex: 1.3;
  }

  .search-box {
    flex: 2;
    display: flex;
    padding: 3px;
    height: 40px;
  }
  .search-box input {
    border: 1px solid #ccc;
    padding: 15px;
    width: 100%;
  }
  .search-box .search-btn {
    background: #F9F9FB;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    padding:10px;
  }


  .navbar-top .nav-ul {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .navbar-top .nav-ul li {
    padding: 0px 15px;
    padding-bottom: 20px;
    margin-bottom: -20px;
  }

  .navbar-top .nav-ul li:last-child {
    padding-right: 0px;
    padding-bottom: 0px;
  }

  .navbar-top .hamburger {
    background-color: transparent;
    border: 0;
    cursor: pointer;
    font-size: 20px;
    display: none;
  }

  .navbar-top .hamburger:focus {
    outline: none; 
  }

  .nav-ul .badge  {
      position: relative;
  }
  .nav-ul #badge {
      position: absolute;
      left: 22px;
      right: 0px;
      top: -9px;
  }

  .search-box datalist {
    position: absolute;
    background-color: white;
    border: 1px solid blue;
    border-radius: 0 0 5px 5px;
    border-top: none;
    font-family: sans-serif;
    width: 350px;
    padding: 5px;

  }

  option {
    background-color: white;
    padding: 6px 10px;
    color: #666;
    margin-bottom: 1px;
    font-size: 13px;
    cursor: pointer;
  }
  option span {
    color: #ccc;
  }

  option:hover, .active{
    background-color: lightblue;
  }


  @media screen and  (max-width: 814px) {
    
    .container {
      width: 90%;
      margin: 0 auto;
      background-color: #fff;
    }
    
    .navbar-brand #logo, 
    .search-box input, 
    .search-box .search-btn {
      display: none;
    }

    .navbar-brand #logo-responsive, .search-box #responsive-search-btn {
      display: block;
    }
    
    .navbar-brand {
      flex: 0;
    }
    .navbar-top {
      flex: 0;
    }
    .navbar-top .nav-ul {
      padding-left: 10px;
    }


    .search-box {
      flex: 10;
      justify-content: flex-end;
    }
    .search-box #responsive-search-btn {
      border: none;
      background: none;
      padding: 0px;
    }

    .navbar-top .hamburger {
      display: inline-block;
      flex: 0;
      margin-left: -20px;
    }

    .navbar-top #badge {
      left: 22px;
    }

  .navbar-top .back {
      flex: 1;
      margin-right: 10px;
      margin-left: -15px
    }
    
    .data-list {
      width: 100%;
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

  @media screen and  (max-width: 1111px) {
    .navbar-top .hamburger {
      display: inline-block;
      flex: 0;
      margin-left: -20px;
    }
  }
</style>
  <div class="page-header">
    <div class="container navbar-top">

       <button class="back">
        <img id="back" />
       </button>
      
        <button class="hamburger">
          <slot name="hamburger"></slot>
        </button>
        <a href="#" class="navbar-brand">
          <img id="logo" />
          <img id="logo-responsive" />
        </a>

        <form class="search-box" id="search-box">
          <input id="search-input" autocomplete="off" list="" name="books" placeholder="Search books, genres, authors etc.">

          <datalist id="books">
            <option value="Internet Explorer">Internet Explorer</option>
            <option>Built to Last - <span>Jim Collins, Jerry I. Poras..</span></option>
            <option>Four Steps to The Epiphany - James McEnroe</option>
            <option>The Lean Start Up - Eric Reiss</option>
            <option>No Excuses - Brian Tracy</option>
          </datalist>

          <button class="search-btn">
            <img id="search" />
          </button>
          <button id="responsive-search-btn">
            <img id="responsive-search" />
          </button>
        </form>

        <nav class="navbar">
          <ul class="nav-ul">
              <li>
                <a href="#">
                  <img id="library" />
                </a>
              </li>
              <li class="badge">
                  <img id="notification" />
                  <img id="badge" />
              </li>
              <li><a href="#"><img id="avatar" /></a></li>
          </ul>
        </nav>
    </div>   
  </div>
`;

export default class Header extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector('#logo').src =
    this.getAttribute("logo")
    this.shadowRoot.querySelector('#logo-responsive').src =
    this.getAttribute("logoResponsive")
    this.shadowRoot.querySelector('#search').src =
    this.getAttribute("search")
    this.shadowRoot.querySelector('#responsive-search').src =
    this.getAttribute("search")
    this.shadowRoot.querySelector('#library').src =
    this.getAttribute("library")
    this.shadowRoot.querySelector('#notification').src =
    this.getAttribute("notification")
    this.shadowRoot.querySelector('#avatar').src =
    this.getAttribute("avatar")
    // this.shadowRoot.querySelector('#hamburger').src =
    // this.getAttribute("hamburger")
    this.shadowRoot.querySelector('#badge').src =
    this.getAttribute("badge")
    this.shadowRoot.querySelector('#back').src =
    this.getAttribute("back")
  }

  connectedCallback() {

    // Defines all Selectors
    const pageHeader =  this.shadowRoot.querySelector('.page-header');
    const navbar =  this.shadowRoot.querySelector('.navbar');
    const searchInput =  this.shadowRoot.querySelector('#search-input');
    const searchBtn =  this.shadowRoot.querySelector('.search-btn');
    const navbarBrand =  this.shadowRoot.querySelector('.navbar-brand');
    const hamburger =  this.shadowRoot.querySelector('.hamburger');
    const back =  this.shadowRoot.querySelector('.back');
    const responsiveSearchBtn = this.shadowRoot.querySelector('#responsive-search-btn');
    
     // Restyle datalist
    const books = this.shadowRoot.querySelector('#books');
    const sidebarMenu = document.querySelector('.sidebar-menu');

    const currentFocus = -1;
    // Get mediaQuery breakpoint
    const mediaQuery = window.matchMedia('(max-width: 767px)');
    const sidebarMediaQuery = window.matchMedia('(max-width: 1111px)');

    // Hide or remove header elements when responsiveSearchBtn is clicked
    const hideRemoveHeaderElements = e => {
      e.preventDefault();
      pageHeader.classList.add("page-header-new")
      navbar.classList.add("click-hide");
      responsiveSearchBtn.classList.add("click-hide");
      searchInput.classList.add("click-show");
      searchBtn.classList.add("click-show");
      navbarBrand.classList.add("click-hide");
      hamburger.classList.add("click-hide");
      back.classList.add("click-show");
    }
    
    // Hide or remove header elements when back button is clicked
    const hideRemoveHeaderElementsOnBack = e => {
      e.preventDefault();
      pageHeader.classList.remove("page-header-new")
      navbar.classList.remove("click-hide");
      responsiveSearchBtn.classList.remove("click-hide");
      searchInput.classList.remove("click-show");
      searchBtn.classList.remove("click-show");
      navbarBrand.classList.remove("click-hide");
      hamburger.classList.remove("click-hide");
      back.classList.remove("click-show");
    }

     const styleDataList = (e) => {
      books.style.display = 'block';
      books.style.width = '40.5%';
      books.style.marginTop = '50px';
      books.style.border = 'none';
      books.style.background = '#fff';
      searchInput.style.borderRadius = "5px 5px 0 0";
      
      // Check if the media query is true
      if (mediaQuery.matches) {
        
        // Then trigger an alert
        books.style.width = '95%';
        books.style.display = 'block';
        books.style.marginTop = '60px';
        books.style.left= '20px';
      }  
    };

    const addActiveToselectedOption = function(e) {
      if(e.keyCode == 40){
        currentFocus++
      addActive(books.options);
      }
      else if(e.keyCode == 38){
        currentFocus--
      addActive(books.options);
      }
      else if(e.keyCode == 13){
        e.preventDefault();
        if (currentFocus > -1) {
          if (books.options) books.options[currentFocus].click();
        }
      }
    }

    const addActive = (x) => {
      if (!x) return false;
      removeActive(x);
      if (currentFocus >= x.length) currentFocus = 0;
      if (currentFocus < 0) 
        currentFocus = (x.length - 1);
      x[currentFocus].classList.add("active");
    }

    const removeActive = (x) => {
      for (var i = 0; i < x.length; i++) {
        x[i].classList.remove("active");
      }
    }
    // Hide sidebar menu when the mediaQuery matches 1111px
    if(sidebarMediaQuery.matches) {
      sidebarMenu.style.visibility = 'hidden';
    }
    const displaySideMenu = () => {
      sidebarMenu.style.visibility = 'visible';
      sidebarMenu.style.transition = 'all 0.3s';
    }

    for (let option of books.options) {
      option.onclick = function () {
        searchInput.value = option.value;
        books.style.display = 'none';
        searchInput.style.borderRadius = "5px";
      }
    };

    // Event Listeners
    responsiveSearchBtn.addEventListener('click', hideRemoveHeaderElements);
    back.addEventListener('click', hideRemoveHeaderElementsOnBack);
    searchInput.addEventListener('focus', styleDataList);
    hamburger.addEventListener('click', displaySideMenu);
  }

  // Disconnect event listeners
  disconnectedCallback() {
    hamburger.removeEventListener();
    back.removeEventListener();
    responsiveSearchBtn.removeEventListener();
    searchInput.removeEventListener();
  }
}




