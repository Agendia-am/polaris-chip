import { html, css } from "lit";
import { DDD } from "@lrnwebcomponents/d-d-d/d-d-d.js";

export class WhatEver extends DDD {
  static get styles() {
    return [
      super.styles,
      css`
      :host {
        display: block;
      }
      .my-div {
        padding: var(-ddd-spacing-5);
        margin: var(--ddd-spacing-2) var(--ddd-spacing-0);
        color: var(--ddd-theme-default-keystoneYellow);
      }
    `];
  }

  static get properties() {
    return {
      ...super.properties,
      title: { type: String }
    }
  }
}