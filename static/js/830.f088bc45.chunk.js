/*! For license information please see 830.f088bc45.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_elden_ring_mind_map=self.webpackChunkreact_elden_ring_mind_map||[]).push([[830],{5575:(t,e,i)=>{i.d(e,{E:()=>s,a:()=>o,i:()=>n}),(0,i(4994).y)();var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},o=t=>function(){for(var e=arguments.length,i=new Array(e),s=0;s<e;s++)i[s]=arguments[s];return{_$litDirective$:t,values:i}},n=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this.t=t,this._$AM=e,this.i=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8068:(t,e,i)=>{function s(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let i=new CSSStyleSheet;i.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,i]}i.d(e,{n:()=>s}),(0,i(4994).y)()},6505:(t,e,i)=>{i.d(e,{u:()=>r});var s=i(5575),o=i(3999),n=i(4994);(0,n.y)();var r=(0,s.a)(class extends s.i{constructor(t){var e;if(super(t),t.type!==s.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,e){let[i]=e;var s,n;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(let t in i)i[t]&&(null==(s=this.nt)||!s.has(t))&&this.st.add(t);return this.render(i)}let r=t.element.classList;for(let o of this.st)o in i||(r.remove(o),this.st.delete(o));for(let o in i){let t=!!i[o];t===this.st.has(o)||null!=(n=this.nt)&&n.has(o)||(t?(r.add(o),this.st.add(o)):(r.remove(o),this.st.delete(o)))}return o.E}});(0,n.y)()},5555:(t,e,i)=>{i.d(e,{D:()=>d});var s=i(3999),o=i(4994);(0,o.y)(),(0,o.y)(),(0,o.y)();var n=s.C`
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
`;(0,o.y)();var r=s.C`
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
`;(0,o.y)();var a=s.C`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;(0,o.y)();var l=s.C`
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
`,d=t=>{var e;class i extends t{constructor(){super(...arguments),this.unsubscribeFrom=[],this.useStore=o.l.bind(this)}connectedCallback(){setTimeout((()=>{var t,e;let i=document.getElementById("superviz-style"),s=this.createCustomColors(),o=document.createElement("style");o.innerHTML=(null==i?void 0:i.innerHTML)||"",null==(t=this.shadowRoot)||t.appendChild(o),s&&(null==(e=this.shadowRoot)||e.appendChild(s))})),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeFrom.forEach((t=>t(this)))}createCustomColors(){if(!o.f.get("colors"))return;let t=document.createElement("style"),e=Object.entries(o.f.get("colors")).map((t=>{let[e,i]=t;return`--${e}: ${i} !important;`})).join(" ");return t.innerHTML=`\n      * {\n        ${e}\n      }\n    `,t}emitEvent(t,e){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{composed:!0,bubbles:!0},s=new CustomEvent(t,(0,o.A)({detail:e},i));this.dispatchEvent(s)}}return i.styles=[n,r,a,l,null!=(e=t.styles)?e:[]],i}},5830:(t,e,i)=>{i.r(e),i.d(e,{Dropdown:()=>h});var s=i(6505),o=(i(5575),i(8068)),n=i(5555),r=i(3999),a=i(4994);(0,a.y)(),(0,a.y)();var l=r.C`
  .dropdown {
    position: relative;
    z-index: 100;
  }

  .dropdown-content {
    display: flex;
  }

  .select-clicked {
    border: 2px #26489a solid;
  }

  .dropdown-list {
    position: relative;
    z-index: 101;
  }

  .header {
    display: grid;
    grid-template-rows: 1fr 1px;
    align-items: center;
    padding: 0 10px;
    min-height: 42px;
    font-size: 16px;
    color: rgb(var(--sv-gray-600));
  }

  .menu {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    opacity: 0;
    display: none;
    background: #fff;
    padding: 0;
    z-index: 1;
    transition: 0.2s;
    border-radius: 3px;
  }

  .items {
    list-style: none;
    padding: 0;
    color: #9fa5b5;
    margin: 0;
  }

  .text.username {
    font-size: 14px;
    text-align: left;

    display: inline-block;
    vertical-align: middle;
    line-height: normal;
    padding: 8px 0;
  }

  .items li {
    color: rgb(var(--sv-gray-600));
    text-transform: uppercase;
    padding: 0 10px;
    cursor: pointer;
    min-width: 103px;
    min-height: 32px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;
    height: 42px;
  }

  .sv-icon {
    width: 40px;
    height: 40px;
    background-color: red;
  }

  .active {
    background: rgb(var(--sv-gray-200));
  }

  .items li:hover {
    background: rgb(var(--sv-gray-200));
  }

  .menu-open {
    display: block;
    opacity: 1;
    position: fixed;
  }

  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-300));
    padding: 0px;
    margin: 0px;
    justify-self: flex-end;
  }

  .option-label {
    white-space: nowrap;
    line-height: 1;
  }

  .who-is-online__controls__item__icon {
    line-height: 1;
  }

  .who-is-online__controls__item {
    align-items: center;
  }

  @media (max-width: 780px) {
    .menu--top-left,
    .menu--top-center,
    .menu--top-right {
      bottom: 36px;
    }
  }
`,d=(0,n.D)(r.a),p=[d.styles,l],h=class extends d{constructor(){super(),this.menu=void 0,this.onClickOutDropdown=t=>{if(t.stopPropagation(),!this.open)return;let e=t.composedPath(),i=this.shadowRoot.querySelector(".dropdown-content"),s=this.shadowRoot.querySelector(".dropdown-list"),o=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],n=e.includes(i),r=e.includes(s),a=e.includes(o);n||r||a||this.close()},this.close=()=>{this.open=!1,this.emitEvent("close",{bubbles:!1,composed:!1})},this.callbackSelected=t=>{let{label:e}=t;this.open=!1,this.emitEvent("selected",(0,a.g)((0,a.A)({},this.returnData),{label:e}),{bubbles:!1,composed:!0})},this.adjustPosition=()=>{this.open?(this.setHorizontalPosition(),this.setPositionVertical(),this.animationFrame=requestAnimationFrame(this.adjustPosition)):cancelAnimationFrame(this.animationFrame)},this.tooltip=()=>{if(!this.canShowTooltip)return"";let t=this.lastParticipant?"tooltip-top":"tooltip-bottom";return r.V` <superviz-tooltip
      tooltipData=${JSON.stringify(this.tooltipData)}
      ?shiftTooltipLeft=${this.shiftTooltipLeft}
      tooltipVerticalPosition=${t}
      classesPrefix="${this.tooltipPrefix}__tooltip"
      parentComponent=${this.parentComponent}
    ></superviz-tooltip>`},this.showTooltip=!1,this.returnData={}}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then((()=>{this.menu=this.shadowRoot.querySelector(".menu"),o.n.call(this,[this.parentComponent])}))}disconnectedCallback(){super.disconnectedCallback(),document.removeEventListener("click",this.onClickOutDropdown);let t=this.shadowRoot.querySelector(".dropdown");null==t||t.removeEventListener("mouseenter",(()=>{this.showTooltip=!0})),null==t||t.removeEventListener("mouseleave",(()=>{this.showTooltip=!1}))}updated(t){if(t.has("open")){if(this.emitEvent("toggle-dropdown-state",{open:this.open,font:this.name},{bubbles:!1,composed:!1}),this.open)return document.addEventListener("click",this.onClickOutDropdown),void(this.animationFrame=requestAnimationFrame(this.adjustPosition));document.removeEventListener("click",this.onClickOutDropdown)}}setHorizontalPosition(){let t=this.shadowRoot.querySelector('slot[name="dropdown"]'),{left:e,right:i,width:s}=t.parentElement.getBoundingClientRect(),{width:o}=this.menu.getBoundingClientRect(),n=e-(o-s)/2<0,r=i+(o-s)/2>window.innerWidth;return this.shiftTooltipLeft?(this.menu.style.left=`${e+8}px`,this.menu.style.right="",void(this.menu.style.transform="translate(0, 0)")):n||r?n?void(r||(this.menu.style.right="",this.menu.style.left=i-s+"px",this.menu.style.transform="translate(0, 0)")):(this.menu.style.left="",this.menu.style.right=window.innerWidth-i+"px",void(this.menu.style.transform="translate(0, 0)")):(this.menu.style.left=`${e}px`,this.menu.style.right="",void(this.menu.style.transform=`translate(calc(-50% + ${s/2}px), 0)`))}setPositionVertical(){let t=this.shadowRoot.querySelector('slot[name="dropdown"]'),{top:e,bottom:i}=t.parentElement.getBoundingClientRect(),{height:s}=this.menu.getBoundingClientRect(),o=this.shiftTooltipLeft?-2:8;if(!(i+s+o>window.innerHeight))return this.menu.style.bottom="",void(this.menu.style.top=`${i+o}px`);this.menu.style.top="auto",this.menu.style.bottom=`${window.innerHeight-e+o}px`}get renderHeader(){return this.name?r.V` <div class="header ${this.getClass("header")}">
      <span class="text username ${this.getClass("title")}">${this.name}</span>
      <span class="sv-hr ${this.getClass("divisor")}"></span>
    </div>`:r.V``}toggle(){this.disabled||(this.open=!this.open,this.emitEvent("open",{open:this.open}))}getIcon(t){if(t)return r.V`
      <span class=${this.getClass("item__icon")}>
        <superviz-icon name="${t}" size="sm"></superviz-icon>
      </span>
    `}getLabel(t){return r.V`<span class="option-label ${this.getClass("item__label")}">${t}</span>`}get listOptions(){return this.options.map((t=>{let{label:e,icon:i,active:o}=t,n={text:!0,[this.getClass("item")]:!0,"text-bold":!0,active:o};return r.V`<li @click=${()=>this.callbackSelected({label:e})} class=${(0,s.u)(n)}>
        ${this.getIcon(i)} ${this.getLabel(e)}
      </li>`}))}getClass(t){return`${this.classesPrefix}__${t}`}render(){let t={menu:!0,"menu-open":this.open,"menu-left":"left"===this.align,"menu-right":"right"===this.align,"who-is-online-dropdown":this.name};return r.V`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
        ${this.tooltip()}
      </div>
      <div class="dropdown-list">
        <div class=${(0,s.u)(t)}>
          ${this.renderHeader}
          <ul class="${this.getClass("items")} items">
            ${this.listOptions}
          </ul>
        </div>
      </div>
    `}};h.styles=p,h.properties={open:{type:Boolean},disabled:{type:Boolean},align:{type:String},options:{type:Array},icons:{type:Array},name:{type:String},tooltipData:{type:Object},showTooltip:{type:Boolean},dropdown:{type:Object},canShowTooltip:{type:Boolean},drodpdownSizes:{type:Object},shiftTooltipLeft:{type:Boolean},lastParticipant:{type:Boolean},classesPrefix:{type:String},parentComponent:{type:String},tooltipPrefix:{type:String},returnData:{type:Object}},h=(0,a.e)([(0,r.t)("superviz-dropdown")],h)}}]);
//# sourceMappingURL=830.f088bc45.chunk.js.map