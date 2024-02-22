import { LitElement, html, css } from 'lit';

export class CounterApp extends LitElement {

  static get tag() {
    return 'counter-app';
  }

  constructor() {
    super();
    this.title = "Counter App";
    this.max = 25;
    this.min = 10;
    this.number = 16;
  }

  static get styles() {
    return css`
        :host {
            align-items: center;
        }

        :root, html, body {
          text-align: center;
          margin: 10px;
          padding: 10px;
          font-size: 20px;
        }

        .number {
            color: black;
            font-size: 64px;
            text-align: center;
         }
         .yellow {
          color: yellow;
        }
        
        .blue {
          color: blue;
        }

        .pink {
          color: pink;
        }

        .green {
          color: green;
        }

        .plus {
          background-color: red;
          color: black;
          font-size: 20px;
          border-radius: 50%;
          padding: 16px 16px 16px 16px;
          margin: 10px 5px 5px 120px;
          border: red;
    
        }
        .minus {
          background-color: black;
          color: red;
          font-size: 20px;
          border-radius: 50%;
          padding: 16px 16px 16px 16px;
          margin: 10px 5px 5px 120px;
          border: red;
         
        }
        
        .card{
          background-color: gray;
          height: 460px;
          width: 400px;
          border-radius: 0%;
          margin: 8px;
        }
        button:hover {
        background-color: limegreen;
      }
      button:focus {
  background-color: limegreen;
}
    `;
  }

  add() {
    if (this.number < this.max) {
        this.number += 1;
        if (this.number === 21) {
            this.makeItRain();
        }
    }
  }

  subtract() {
    if (this.number > this.min) {
        this.number -= 1;
        if (this.number === 21) {
            this.makeItRain();
        }
    }
  }

  makeItRain() {
    import("@lrnwebcomponents/multiple-choice/lib/confetti-container.js").then(
      (module) => {
        setTimeout(() => {
          this.shadowRoot.querySelector("#confetti").setAttribute("popped", "");
        }, 0);
      }
    );
  }

  render() {
    let numberColorClass = '';
    if (this.number === 18) {
      numberColorClass = 'yellow';
    } else if (this.number === 21) {
      numberColorClass = 'blue';
    } else if (this.number === 25) {
      numberColorClass = 'green';
    } else if (this.number === this.min) {
      numberColorClass = 'pink';
    }

    return html`
    <confetti-container id="confetti">
    <div class="card">
      <div class="counter-app">
        <h1 class="number ${numberColorClass}">${this.number}</h1>
        <button @click=${this.subtract} class="minus">-</button>
        <button @click=${this.add} class="plus">+</button>
        <confetti-container id="confetti"></confetti-container>
    </div>
    </div>
    </confetti-container>
    `;
  }

  static get properties() {
    return {
      number: { type: Number, reflect: true },
      min: { type: Number, reflect: true},
      max: { type: Number, reflect: true},
    };
  }
}

globalThis.customElements.define(CounterApp.tag, CounterApp);