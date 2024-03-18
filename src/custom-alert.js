import { LitElement, html, css } from 'lit';



export class CustomAlert extends LitElement {

  static get tag() {
    return 'custom-alert';
  }

  constructor() {
    super();
    this.title = "Alert Alert!!";
    this.text = "This is an important message";
    this.description = "Pay attention to this important message!!!"
    this.open = false;
    this.sticky = false;
    this.color = "red";
  }

  static get styles() {
    return css`

              :host {
                display: block;
              }
              :root, html, body {
          font-size: 16px; 
        }

        .card{
          height: 130px;
          width: 1430px;
          border-radius: 0%;
          margin: 8px;
        }
        
        #cardlist{
          
          display: flex;
          flex-wrap: wrap;
        }

        .button {
          border-radius: 10%;
          padding: 16px 16px 16px 16px;
          margin: 10px 5px 5px 5px;
          color: black;
          font-size: 20px;
          background-color: yellow;
        }
       
        :host([sticky]) {
           position: sticky;
           top: 0;
           z-index: 20;
        }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.open = true;
    }
    else {
      this.open = false;
    }
  }
  
  toggleOpen() {
    this.open = !this.open;
  }


  openView(){
    return html`
      <div class="card" style="background-color:${this.color}">
      <h1 class="cardtitle"> ${this.title} </h1>
      <button class="button" @click="${this.toggleOpen}"></button>
        <div>
          <slot>${this.description}</slot>
        </div>
      </details>
     </div>
    `;
  }


  closedView(){
    return html`
        <div class="card" style="background-color:${this.color}">
          <button class="button" @click="${this.toggleOpen}"></button>
     </div>
    
    `;
  }


  render() {
      // return (open) ? this.openView() : this.closedView;

    if(this.open){
      return this.openView();
    }
    else{
      return this.closedView();
    }

  }

  static get properties() {
    return {
      title: { type: String },
      text: {type: String},
      description: {type: String},
      open: {type: Boolean, reflect: true},
      sticky: {type: Boolean, reflect: true },
      color: {type: String},
    };
  }
}

globalThis.customElements.define(CustomAlert.tag, CustomAlert);


const myCards = document.querySelectorAll('custom-alert');