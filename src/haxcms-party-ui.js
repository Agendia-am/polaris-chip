import "@lrnwebcomponents/rpg-character/rpg-character.js";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";
import { html, css } from "lit";

export class HaxcmsPartyUi extends DDD {
  static get tag() {
    return "haxcms-party-ui";
  }

  constructor() {
    super();
    this.party = [];
    this.textInput = '';
  }

  static get styles() {
    return [
      super.styles,
      css`
        :host {
          display: center;
        }
        .block {
          width: var(--haxcms-party-ui-container, 90vw);
          padding: var(--ddd-spacing-);
          background-color: var(--ddd-theme-default-roarMaxlight);
        }

        .container {
          margin: var(--ddd-spacing-4);
          padding: var(--ddd-spacing-6);
          border: 10px solid var(--ddd-theme-default-nittanyNavy);
          box-shadow: -5px 0 0 0 black, 5px 0 0 0 black, 0 -5px 0 0 black,
            0 5px 0 0 black;
        }

        .title {
          font-family: "Press Start 2P", system-ui;
          background-color: (var(--ddd-theme-default-roarMaxlight), white);
          color: var(--ddd-theme-default-beaverBlue);
          margin: 0px 0px 50px 30px;
          text-align: center;
          animation: blinker 1s linear infinite;
        }

        .button-panel {
          display: flex;
          margin-left: var(--ddd-spacing-4);
        }

        .party {
          display: flex;
        }

        .search-input {
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: 200px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-slateMaxLight);
          color: var(--ddd-theme-default-wonderPurple);
          box-shadow: -5px 0 0 0 black, 5px 0 0 0 black, 0 -5px 0 0 black,
            0 5px 0 0 black;
        }

        .add-button {
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: 150px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-futureLime);
          color: var(--ddd-theme-default-wonderPurple);
          box-shadow: -5px 0 0 0 black, 5px 0 0 0 black, 0 -5px 0 0 black,
            0 5px 0 0 black;
        }

        .remove-button { 
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: 150px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-original87Pink);
          color:var(--ddd-theme-default-slateMaxLight);
          box-shadow: -5px 0 0 0 black, 5px 0 0 0 black, 0 -5px 0 0 black,
            0 5px 0 0 black;
        }
        .save-button { 
          font-family: "Press Start 2P", system-ui;
          font-size: var(--ddd-font-size-3xs);
          min-width: 150px;
          margin: var(--ddd-spacing-3);
          padding: var(--ddd-spacing-5);
          background-color: var(--ddd-theme-default-link);
          color: var(--ddd-theme-default-slateMaxLight);
          box-shadow: -5px 0 0 0 black, 5px 0 0 0 black, 0 -5px 0 0 black,
            0 5px 0 0 black;
        }

        button:hover {
          background-color: var(--ddd-theme-default-keystoneYellow);
          color: var(--ddd-theme-default-potentialMidnight);
        }
       
        @keyframes blinker {
          50% {
            opacity: 0;
          }
        }
        @media screen and (min-width: 600px) {
          .container {
            width: 65%;
    `];
  }

  handleInput(event) {
    const textInput = event.target.value;

    if (this.textInput.length > 10) { // setting a character limit
      event.target.value = textInput.slice(0, 10);
    } else {
      const invalidCharacters = textInput.match(/[^a-z0-9]/g);
      if (!invalidCharacters) { // checking if there no invalid characters
        this.textInput = textInput; // do nothing to the text
      } else if (invalidCharacters) { // checking if there are invalid characters
        alert('ERROR: You have entered invalid characters.');
        event.target.value = textInput.replace(invalidCharacters[0], ''); // replacing invalid character with a space
      }
    }
  }

  addUser() {
    if (this.textInput == '') { //checking if the textinput is empty
      alert('ERROR: Cannot add empty users.');
    } else { // if not empty
      if (this.party.includes(this.textInput)) { //checking if user is already in party
        alert('ERROR: User is already in party.');
      } else {
        this.party = [...this.party, this.textInput]; // adding user to party
      }
    }
  }

  removeUser(u) {
    const i = this.party.indexOf(u);

    if (i !== -1) {
      this.party.splice(i, 1);
      this.party = [...this.party];
    }   
  }

  saveData() {
    alert('Saved party');
    this.makeItRain();  
  }

  render() {
    return html`
      <confetti-container id="confetti">
        <div class="block">
          <h1 class="title">CHOOSE YOUR PARTY</h1>
          <div class="container">
            <div class="button-panel">
              <input
                type="search"
                class="search-input"
                placeholder="Search party member..."
                .value="${this.textInput}"
                @input="${this.handleInput}"
              />
              <button class="add-button" @click="${this.addUser}">Add</button>
            </div>
          <div>
            <p><span>Current Users:</span></p>        
            <div class="party">
              ${this.party.map(user => html`
                <div class="rpg-container">
                  <rpg-character seed="${user}"></rpg-character>
                  <p>${user}</p>
                  <button class="remove-button" @click="${() => this.removeUser(user)}">Remove</button>
                </div>
              `)}       
            </div>
            <button class="save-button" @click="${this.saveData}">
              Save Party Members
            </button>
          </div>
        </div>
      </confetti-container>
    `;
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

  static get properties() {
    return {
      party: { type: Array, reflect: true },
      textInput: { type: String },
    };
  }
}

globalThis.customElements.define(HaxcmsPartyUi.tag, HaxcmsPartyUi);