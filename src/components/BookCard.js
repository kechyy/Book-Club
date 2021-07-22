
const template = document.createElement('template');
template.innerHTML = `
<style>
  * {
    font-family: Ubuntu;
    font-weight: normal;
  }

  .book-card {
    display: flex;
    font-size: 0.8em;
    align-items: center;
  }
  .book-card img {
    margin-right: 15px;
  }
  .book-card div {
    width: 100%;
  }
 
}
</style>
<!-- ------ Bookcard Component ------ -->
<div class="book-card">
  <img id="book"/>
  <div>
    <slot  name="book-info" />
  </div>
</div>
`;

export default class BookCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));

    // Get book attribute from  main dom and set to book image source
    this.shadowRoot.querySelector('#book').src = 
    this.getAttribute('book');
  }
}






