const link = document.createElement('link');
const template = document.createElement('template');
template.innerHTML = `
<style>

 /** ---- General type selector styles ----------- **/
  * {
    font-family: Ubuntu;
    font-weight: normal;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  
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

  input[type='placeholder'] {
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

 /** ---- Page size extra large screen ----------- **/
.page-main {
    position: absolute;
    width: calc(100% - 300px);
    padding: 30px;
    background: #FFFFFF;
    box-shadow: -10px 0px 40px rgba(0, 0, 0, 0.1);
    min-height: 100vh;
    left: 300px;
    top: 83px;
    z-index: 222;
    transition: 0.5;
 }

  /** ---- Page container ----------- **/
 .container {
  position: absolute;
  width: 100%;
  background: #FFFFFF;
 }
 
.carousel, .recently-added {
  position: relative;
  width: 92%;
  margin: 0 auto;
  z-index: 2;
}
.recently-added {
  top: 120px;
}

 /** ---- Book listings ----------- **/
.book-display {
  display: flex;
  flex-wrap: wrap;
}
.book-display div {
 width: 33%;
 margin-bottom: 26px;
}

 /** ---- Page section title ----------- **/
.book-category-title {
 font-family: Ubuntu;
 font-style: normal;
 font-weight: normal;
 font-size: 16px;
 line-height: 16px;
 letter-spacing: 3px;
 text-transform: uppercase;
 padding-bottom: 24px;
 border-bottom: 1px solid #EEE;
 margin-bottom: 25px;
 margin-top: 40px;
 width: 93%;
}

 /** ---- Carousel main container ----------- **/
.main-carousel {
  background: #FFFFFF;
  box-shadow: 0px 30px 30px rgba(0, 0, 0, 0.15);  
}
.carousel-cell {
  width: 20%;
  height: 310px;
  margin-right: 20px;
  background: #FFFFFF;
  counter-reset: carousel-cell;
}
/**  ---- increament Images in carousel cells ---- **/
.carousel-cell img {
  counter-increment: carousel-cell;
}

/**  ---- Add counter numbers ---- **/
.carousel-cell img:empty::after {
  content: counter(carousel-cell) ;
}

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  line-height: 200px;
  font-size: 80px;
  color: white;
}


/*! Flickity v2.2.2
https://flickity.metafizzy.co
---------------------------------------------- */

.flickity-enabled {
  position: relative;
}

.flickity-enabled:focus {
  outline: none;
}

.flickity-viewport {
  overflow: hidden;
  position: relative;
  height: 100%;
}

.flickity-slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

/* draggable */

.flickity-enabled.is-draggable {
  -webkit-tap-highlight-color: transparent;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.flickity-enabled.is-draggable .flickity-viewport {
  cursor: move;
  cursor: -webkit-grab;
  cursor: grab;
}

.flickity-enabled.is-draggable .flickity-viewport.is-pointer-down {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

/* ---- flickity-button ---- */

.flickity-button {
  position: absolute;
  background: hsla(0, 0%, 100%, 0.75);
  border: none;
  color: #333;
}

.flickity-button:hover {
  background: white;
  cursor: pointer;
}

.flickity-button:focus {
  outline: none;
  box-shadow: 0 0 0 5px #19f;
}

.flickity-button:active {
  opacity: 0.6;
}

.flickity-button:disabled {
  opacity: 0.3;
  cursor: auto;
  /* prevent disabled button from capturing pointer up event. #716 */
  pointer-events: none;
}

.flickity-button-icon {
  fill: currentColor;
}

/* ---- previous/next buttons ---- */

.flickity-prev-next-button {
  top: 50%;
  width: 44px;
  height: 44px;
  border-radius: 50%;
  /* vertically center */
  transform: translateY(-50%);
}

.flickity-prev-next-button.previous {
  left: 10px;
}
.flickity-prev-next-button.next {
  right: 10px;
}
/* right to left */
.flickity-rtl .flickity-prev-next-button.previous {
  left: auto;
  right: 10px;
}
.flickity-rtl .flickity-prev-next-button.next {
  right: auto;
  left: 10px;
}

.flickity-prev-next-button .flickity-button-icon {
  position: absolute;
  left: 20%;
  top: 20%;
  width: 60%;
  height: 60%;
}

/* ---- page dots ---- */

.flickity-page-dots {
  position: absolute;
  width: 100%;
  bottom: -25px;
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: center;
  line-height: 1;
}

.flickity-rtl .flickity-page-dots {
  direction: rtl;
}

.flickity-page-dots .dot {
  display: inline-block;
  width: 10px;
  height: 10px;
  margin: 0 8px;
  background: #333;
  border-radius: 50%;
  opacity: 0.25;
  cursor: pointer;
}

.flickity-page-dots .dot.is-selected {
  opacity: 1;
}

/** ---- Responsive mobile devices ----------- **/
@media screen and  (max-width: 569px) {
  .page-main {
   width: 100%;
   left: 0;
   right 0;
   padding: 0px;
  }
  .book-display, .book-display div {
    width: 100%
  }

  /** ---- Responsive carousel on mobile devices ----------- **/
  .carousel-cell {
    width: 25%;
    height: 200px;
  }
  .carousel-cell img {
    min-width: 160px;
    height: 200px;
  }
}

/* Responsive small devices ------------- */
@media screen and (min-width : 570px) and (max-width: 814px) {
  
  /** ---- Page screen size ----------- **/
  .page-main {
   width: 100%;
   padding: 0px;
   left: 0;
   right 0;
  }
  
  .book-display div {
    width: 50%;
  }
   /** ---- Responsive carousel on small devices ----------- **/
  .carousel-cell {
    width: 30%;
    height: 300px;
  }
  .carousel-cell img {
    min-width: 220px;
    height: 320px;
  }
}

/* Responsive large devices ----------- */
@media screen and (min-width : 814px) and (max-width: 1111px) {

   /** ---- Page size ----------- **/
  .page-main {
   width: 100%;
   left: 0;
   right 0;
  }
  .book-display div {
    width: 33.2%;
  }
}
</style>

<main class="page-main">
  <div class="container">

    <!-- Featured books carousel section starts here -->
    <section class="carousel">
      <h3 class="book-category-title">FEATURED BOOKS</h3>
      <!-- Flickity HTML init -->
      <div class="main-carousel" >
        <div class="carousel-cell"><img id="image-slide1" /></div>
        <div class="carousel-cell"><img id="image-slide2" /></div>
        <div class="carousel-cell"><img id="image-slide3" /></div>
        <div class="carousel-cell"><img id="image-slide4" /></div>
        <div class="carousel-cell"><img id="image-slide5" /></div>
      </div>
    </section>
    <!-- Featured books carousel section ends here -->
    
    <!-- ---- Recently added books section starts here ----------- -->
    <section class="recently-added">
      <h3 class="book-category-title">RECENTLY ADDED</h3>
       
      <!-- ---- Books lisitng ----------- -->
      <div class="book-display">
      <!-- ---- slot attribute created by the <slot> element ----------- -->
        <div>
          <slot name="book1" />
        </div>
        <div>
          <slot name="book2" />
        </div>
        <div>
          <slot name="book3" />
        </div>
        <div>
          <slot name="book4" />
        </div>
        <div>
          <slot name="book5" />
        </div>
      </div>
    
      <!-- ---- All books listing ----------- -->
      <h3 class="book-category-title">ALL BOOKS</h3>
      <div class="book-display">
      <!-- ---- slot attribute created by the <slot> element --------- -->
        <div>
          <slot name="book6" />
        </div>
        <div>
          <slot name="book7" />
        </div>
        <div>
          <slot name="book8" />
        </div>
          <div>
          <slot name="book9" />
        </div>
        <div>
          <slot name="book10" />
        </div>
        <div>
          <slot name="book11" />
        </div>
          <div>
          <slot name="book12" />
        </div>
        <div>
          <slot name="book13" />
        </div>
        <div>
          <slot name="book14" />
        </div>
          <div>
          <slot name="book15" />
        </div>
        <div>
          <slot name="book16" />
        </div>
        <div>
          <slot name="book17" />
        </div>
      </div>
    </section>
    <!-- Recently added books section ends here -->

  </div>
</main>
`;

export default class App extends HTMLElement {
  
  //Called when the Web Component is created
  constructor() {
   
    // Always call super first in constructor
    super();

    // Create a shadow root
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(template.content.cloneNode(true));
     
    // Selects Carousel images 
    this.shadowRoot.querySelector('#image-slide1').src = this.getAttribute("imageSlide1");
    this.shadowRoot.querySelector('#image-slide2').src = this.getAttribute("imageSlide2");
    this.shadowRoot.querySelector('#image-slide3').src = this.getAttribute("imageSlide3");
    this.shadowRoot.querySelector('#image-slide4').src = this.getAttribute("imageSlide4");
    this.shadowRoot.querySelector('#image-slide5').src = this.getAttribute("imageSlide5");
    
  }

  //Web Components API lifecycle method to listen when component is added to the DOM
  connectedCallback() {

   //Main carousel option setups
   var elem = this.shadowRoot.querySelector('.main-carousel');
    var flkty = new Flickity( elem, {
      // options
      cellAlign: 'left',
      contain: true,
      lazyLoad: true,
      imagesLoaded: true,
      pageDots: true,
      wrapAround: true,
      adaptiveHeight: false,
      freeScroll: true,
    });

 }
}






