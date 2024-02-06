import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do
 * 1. 
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.link = "#";
    this.image = "https://upload.wikimedia.org/wikipedia/en/thumb/3/3a/Penn_State_Nittany_Lions_logo.svg/2560px-Penn_State_Nittany_Lions_logo.svg.png";
    this.text = "This is my VSCode card project";
  }

  static get styles() {
    return css`


              :host {
                display: block;
              }
              :root, html, body {
          font-size: 16px; 
          --basic-color: blue;
          /* think of this as a
          base font size that all 'em' 
          values will be multiplied by */
        }
        .btn {
          background-color: yellow;
          color: black;
          font-size: 20px;
          border-radius: 10%;
          padding: 16px 16px 16px 16px;
          margin: 10px 5px 5px 120px;
        }
        img{
          width: 300px;
          margin: 15px;
          border: 10px solid black;
        }
        h1{
          margin: 30px;
        }
        @media screen and (max-width: 800px) and (min-width: 500px){
          .btn {
            display: block;
          }
        }

        @media screen and (max-width: 500px){
          img{
            width: 100px;
          }
        }

        body div div.card.change-color{
        --basic-color: orange;
        }


        .card{
          background-color: blue;
          height: 560px;
          width: 400px;
          border-radius: 10%;
          margin: 8px;
        }
        .duplicate{
          color: red;
          background-color: black;
        }
        .changetitle{
          color: blue;
          background-color: white;
        }

        #cardlist{
          
          display: flex;
          flex-wrap: wrap;
        }


        .changeimage{
          color: yellow;
            background-color: red;
        }
        .changebg {
          color: blue;
            background-color: green;
        }
        .delete {
        color: orange;
            background-color: red; 
        }
    `;
  }

  render() {
    return html`
      <div class="card">
      <h1 class="cardtitle"> ${this.title} </h1>
        <img class="card-image" src="${this.image}">
    <p>${this.text}</p>
        
        <button class="btn">
    <a href="${this.link}">details</a>
      </button>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String},
      image: { type: String},
      text: {type: String},
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
