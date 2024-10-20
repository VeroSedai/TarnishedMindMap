"use strict";(self.webpackChunkreact_elden_ring_mind_map=self.webpackChunkreact_elden_ring_mind_map||[]).push([[739],{5555:(t,e,o)=>{o.d(e,{D:()=>l});var n=o(3999),r=o(4994);(0,r.y)(),(0,r.y)(),(0,r.y)();var a=n.C`
  * {
    --sv-primary: 98, 16, 204;
    --sv-primary-900: 56, 7, 136;
    --sv-primary-200: 193, 161, 234;
    --sv-secondary: 193, 251, 223;
    --sv-gray: 126, 122, 136;
    --sv-success: 12, 185, 71;
    --sv-danger: 229, 65, 30;
    --sv-black: 19, 18, 21;
    --sv-white: 255, 255, 255;
    --sv-gray-100: 250, 250, 252;
    --sv-gray-200: 233, 229, 239;
    --sv-gray-300: 201, 196, 209;
    --sv-gray-400: 174, 169, 184;
    --sv-gray-500: 126, 122, 136;
    --sv-gray-600: 87, 83, 95;
    --sv-gray-700: 57, 54, 62;
    --sv-gray-800: 38, 36, 42;
  }

  .sv-gray-200 {
    color: rgb(var(--sv-gray-200));
  }

  .sv-gray-400 {
    color: rgb(var(--sv-gray-400));
  }

  .sv-gray-500 {
    color: rgb(var(--sv-gray-500));
  }

  .sv-gray-600 {
    color: rgb(var(--sv-gray-600));
  }

  .sv-gray-700 {
    color: rgb(var(--sv-gray-700));
  }
`;(0,r.y)();var i=n.C`
  .text {
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
  }

  .text-bold {
    font-weight: 700;
  }

  .text-big {
    font-size: 14px;
  }

  .text-small {
    font-size: 10px;
  }
`;(0,r.y)();var s=n.C`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;(0,r.y)();var d=n.C`
  .icon-button {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0);
    border: 0px;
    width: 32px;
    height: 32px;
  }

  .icon-button > superviz-icon {
    display: flex !important;
  }

  .icon-button--xsmall {
    width: 18px;
    height: 18px;
  }

  .icon-button--small {
    width: 24px;
    height: 24px;
  }

  .icon-button--medium {
    width: 32px;
    height: 32px;
  }

  .icon-button--large {
    width: 40px;
    height: 40px;
  }

  .icon-button--clickable {
    cursor: pointer;
    border-radius: 100%;
  }

  .icon-button--clickable:hover:not(.icon-button--no-hover) {
    background: rgb(var(--sv-gray-300));
    transition: 0.25s background-color ease-in;
  }
  
  .icon-button--clickable:focus:not(.icon-button--no-hover) {
    transition: 0.25s background-color ease-in;
    background: rgb(var(--sv-gray-300));
  }
`,l=t=>{var e;class o extends t{constructor(){super(...arguments),this.unsubscribeFrom=[],this.useStore=r.l.bind(this)}connectedCallback(){setTimeout((()=>{var t,e;let o=document.getElementById("superviz-style"),n=this.createCustomColors(),r=document.createElement("style");r.innerHTML=(null==o?void 0:o.innerHTML)||"",null==(t=this.shadowRoot)||t.appendChild(r),n&&(null==(e=this.shadowRoot)||e.appendChild(n))})),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeFrom.forEach((t=>t(this)))}createCustomColors(){if(!r.f.get("colors"))return;let t=document.createElement("style"),e=Object.entries(r.f.get("colors")).map((t=>{let[e,o]=t;return`--${e}: ${o} !important;`})).join(" ");return t.innerHTML=`\n      * {\n        ${e}\n      }\n    `,t}emitEvent(t,e){let o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{composed:!0,bubbles:!0},n=new CustomEvent(t,(0,r.A)({detail:e},o));this.dispatchEvent(n)}}return o.styles=[a,i,s,d,null!=(e=t.styles)?e:[]],o}},9739:(t,e,o)=>{o.r(e),o.d(e,{Modal:()=>l,ModalContainer:()=>v});var n=o(5555),r=o(3999),a=o(4994);(0,a.y)(),(0,a.y)(),(0,a.y)();var i=r.C`
  .modal--overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(var(--sv-gray-400), 0.8);

    z-index: 999;
  }

  .modal--container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;

    z-index: 1000;
  }

  .modal--container > .modal {
    background: #fff;
    min-width: 370px;
    min-height: 150px;
    border-radius: 6px;
  }

  .modal--container > .modal > .modal--header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    background: rgb(var(--sv-gray-200));
    border-radius: 6px 6px 0 0;
  }

  .modal--container > .modal > .modal--header > .text {
    display: flex;
    align-items: center;
  }

  .modal--container > .modal > .modal--header > .close {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: rgb(var(--sv-gray-600));
    cursor: pointer;
  }

  .modal--container > .modal > .modal--body {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 24px 24px 0 24px;
  }

  .modal--container > .modal > .modal--body > .modal--body-content {
    padding: 8px 0;
    text-align: center;
  }

  .modal--container > .modal > .modal--footer {
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 24px;
    padding: 24px;
  }

  .btn {
    width: 150px;
    height: 40px;
    text-transform: uppercase;
  }

  .btn--confirm {
    background: rgb(var(--sv-primary));
    border-radius: 4px;
    border: 1px solid rgb(var(--sv-primary));
    color: #fff;
    cursor: pointer;
  }

  .btn--cancel {
    background: transparent;
    border-radius: 4px;
    border: 1px solid rgb(var(--sv-gray-400));
    color: rgb(var(--sv-gray-400));
    cursor: pointer;
  }
`,s=(0,n.D)(r.a),d=[s.styles,i],l=class extends s{constructor(){super(...arguments),this.getContainer=()=>window.document.querySelector("superviz-modal-container"),this.createContainer=t=>{this.modal=document.createElement("superviz-modal-container"),this.modal.setOptions(t)},this.createModal=t=>{let{detail:e}=t;this.createContainer(e),window.document.body.appendChild(this.modal)},this.destroyModal=()=>{var t;this.modal=void 0,null==(t=this.getContainer())||t.remove()}}firstUpdated(){window.document.body.addEventListener("superviz-modal--open",this.createModal),window.document.body.addEventListener("superviz-modal--close",this.destroyModal)}disconnectedCallback(){this.destroyModal(),window.document.body.removeEventListener("superviz-modal--open",this.createModal),window.document.body.removeEventListener("superviz-modal--close",this.destroyModal)}};l.styles=d,l=(0,a.e)([(0,r.t)("superviz-modal")],l),(0,a.y)();var c=(0,n.D)(r.a),p=[c.styles,i],v=class extends c{constructor(){super(...arguments),this.closeModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--close",{bubbles:!0,composed:!0}))},this.confirmModal=()=>{window.document.body.dispatchEvent(new CustomEvent("superviz-modal--confirm",{bubbles:!0,composed:!0}))}}setOptions(t){this.options=t}render(){return r.V`
      <div class="modal--overlay"></div>
      <div class="modal--container">
        <div class="modal">${(()=>r.V`
        <div class="modal--header">
          <span class="text text-bold sv-gray-600">${this.options.title}</span>
          <div class="close" @click=${this.closeModal}>
            <superviz-icon name="close" size="md"></superviz-icon>
          </div>
        </div>
      `)()} ${(()=>r.V`
        <div class="modal--body">
          <div class="modal--body-content">${this.options.body}</div>
        </div>
      `)()} ${(()=>{if(this.options.footer)return r.V` <div class="modal--footer">${this.options.footer}</div> `;let t=this.options.confirmLabel||"OK",e=this.options.cancelLabel||"Cancel";return this.options.confirm&&this.options.cancel?r.V`
          <div class="modal--footer">
            <button class="text text-bold btn btn--cancel" @click=${this.closeModal}>
              ${e}
            </button>
            <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>
              ${t}
            </button>
          </div>
        `:r.V`
        <div class="modal--footer">
          <button class="text text-bold btn btn--confirm" @click=${this.confirmModal}>
            ${t}
          </button>
        </div>
      `})()}</div>
      </div>
    `}};v.styles=p,v=(0,a.e)([(0,r.t)("superviz-modal-container")],v)}}]);
//# sourceMappingURL=739.f62e80ec.chunk.js.map