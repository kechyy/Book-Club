const template = document.createElement('template');

template.innerHTML = `
 <style>
   .hamburger {
   background-color: transparent;
   border: 0;
   cursor: pointer;
   font-size: 20px;
   display: none;
  }
  .hamburger:focus {
   outline: none; 
  }
  .hamburger {
    display: inline-block;
    flex: 0;
    margin-left: -20px;
  }
 </style>
<!-- ------ Hamburger Component ------ -->
 <button class="hamburger">
   <img id="hamburger"/>
 </button>

`;

export default class Hamburger extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // Get hamburger attribute from main dom and set to image source
    this.shadowRoot.querySelector('#hamburger').src =
    this.getAttribute("hamburger")
  }
}
