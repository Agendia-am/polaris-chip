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
    this.fancy = false;
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
        :host([fancy]) {
          display: block;
          background-color: pink;
          border: 2px solid fuchsia;
          box-shadow: 10px 5px 5px red;
        }
    `;
  }

  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    }
    else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div class="card">
      <h1 class="cardtitle"> ${this.title} </h1>
        <img class="card-image" src="${this.image}">
    <p>${this.text}</p>
        
      <details ?open="${this.fancy}" @toggle="${this.openChanged}">
        <summary>Description</summary>
        <div>
          <slot>${this.description}</slot>
        </div>
      </details>
     </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      link: { type: String},
      image: { type: String},
      text: {type: String},
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);

const duplicateButton = document.querySelector('.duplicate');
const changeTitleButton = document.querySelector('.changetitle');
const changeImageButton = document.querySelector('.changeimage');
const changeBgButton = document.querySelector('.changebg');
const deleteButton = document.querySelector('.delete');

const myCards = document.querySelectorAll('my-card');

function duplicateCard() {
  myCards.forEach(card => {
      const duplicate = card.cloneNode(true);
      card.parentNode.insertBefore(duplicate, card.nextSibling);
  });
}

function changeTitle() {
  if (myCards.length > 0) {
      myCards[0].title = "I saw Usher perform at the super bowl";
  }
}

function changeImage() {
  if (myCards.length > 0) {
      myCards[0].image = "https://media.istockphoto.com/id/182466618/photo/fruit-ring-breakfast-cereal.jpg?s=1024x1024&w=is&k=20&c=Vz2edH1jpzkT1-GGNsQAITk1XjU4HWhTZuRzp1KcXW8=";
  }
}

function changeBackground() {
  if (myCards.length > 0) {
      myCards[0].style.backgroundColor = red;
  }
}

function deleteCard() {
  if (myCards.length > 0) {
      myCards[0].remove();
  }
}

duplicateButton.addEventListener('click', duplicateCard);
changeTitleButton.addEventListener('click', changeTitle);
changeImageButton.addEventListener('click', changeImage);
changeBgButton.addEventListener('click', changeBackground);
deleteButton.addEventListener('click', deleteCard);