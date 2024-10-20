/*! For license information please see 921.992ddc9a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_elden_ring_mind_map=self.webpackChunkreact_elden_ring_mind_map||[]).push([[921],{5575:(e,t,i)=>{i.d(t,{E:()=>o,a:()=>n,i:()=>s}),(0,i(4994).y)();var o={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=e=>function(){for(var t=arguments.length,i=new Array(t),o=0;o<t;o++)i[o]=arguments[o];return{_$litDirective$:e,values:i}},s=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,i){this.t=e,this._$AM=t,this.i=i}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}}},8068:(e,t,i)=>{function o(e){let t=document.getElementById(`superviz-${e}-styles`);if(!t)return;let i=new CSSStyleSheet;i.replaceSync(t.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,i]}i.d(t,{n:()=>o}),(0,i(4994).y)()},966:(e,t,i)=>{i.d(t,{j:()=>w});var o=i(5575),n=i(3999),s=i(4994);(0,s.y)(),(0,s.y)();var{I:r}=n.J,l=()=>document.createComment(""),a=(e,t,i)=>{var o;let n=e._$AA.parentNode,s=void 0===t?e._$AB:t._$AA;if(void 0===i){let t=n.insertBefore(l(),s),o=n.insertBefore(l(),s);i=new r(t,o,e,e.options)}else{let t=i._$AB.nextSibling,r=i._$AM,l=r!==e;if(l){let t;null==(o=i._$AQ)||o.call(i,e),i._$AM=e,void 0!==i._$AP&&(t=e._$AU)!==r._$AU&&i._$AP(t)}if(t!==s||l){let e=i._$AA;for(;e!==t;){let t=e.nextSibling;n.insertBefore(e,s),e=t}}}return i},p=function(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e;return e._$AI(t,i),e},d={},c=e=>{var t;null==(t=e._$AP)||t.call(e,!1,!0);let i=e._$AA,o=e._$AB.nextSibling;for(;i!==o;){let e=i.nextSibling;i.remove(),i=e}},h=(e,t,i)=>{let o=new Map;for(let n=t;n<=i;n++)o.set(e[n],n);return o},w=(0,o.a)(class extends o.i{constructor(e){if(super(e),e.type!==o.E.CHILD)throw Error("repeat() can only be used in text expressions")}dt(e,t,i){let o;void 0===i?i=t:void 0!==t&&(o=t);let n=[],s=[],r=0;for(let l of e)n[r]=o?o(l,r):r,s[r]=i(l,r),r++;return{values:s,keys:n}}render(e,t,i){return this.dt(e,t,i).values}update(e,t){let[i,o,s]=t;var r;let l=(e=>e._$AH)(e),{values:w,keys:u}=this.dt(i,o,s);if(!Array.isArray(l))return this.ut=u,w;let v,g,_=null!=(r=this.ut)?r:this.ut=[],m=[],f=0,x=l.length-1,y=0,b=w.length-1;for(;f<=x&&y<=b;)if(null===l[f])f++;else if(null===l[x])x--;else if(_[f]===u[y])m[y]=p(l[f],w[y]),f++,y++;else if(_[x]===u[b])m[b]=p(l[x],w[b]),x--,b--;else if(_[f]===u[b])m[b]=p(l[f],w[b]),a(e,m[b+1],l[f]),f++,b--;else if(_[x]===u[y])m[y]=p(l[x],w[y]),a(e,l[f],l[x]),x--,y++;else if(void 0===v&&(v=h(u,y,b),g=h(_,f,x)),v.has(_[f]))if(v.has(_[x])){let t=g.get(u[y]),i=void 0!==t?l[t]:null;if(null===i){let t=a(e,l[f]);p(t,w[y]),m[y]=t}else m[y]=p(i,w[y]),a(e,l[f],i),l[t]=null;y++}else c(l[x]),x--;else c(l[f]),f++;for(;y<=b;){let t=a(e,m[b+1]);p(t,w[y]),m[y++]=t}for(;f<=x;){let e=l[f++];null!==e&&c(e)}return this.ut=u,function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:d;e._$AH=t}(e,m),n.E}});(0,s.y)()},6505:(e,t,i)=>{i.d(t,{u:()=>r});var o=i(5575),n=i(3999),s=i(4994);(0,s.y)();var r=(0,o.a)(class extends o.i{constructor(e){var t;if(super(e),e.type!==o.E.ATTRIBUTE||"class"!==e.name||(null==(t=e.strings)?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter((t=>e[t])).join(" ")+" "}update(e,t){let[i]=t;var o,s;if(void 0===this.st){this.st=new Set,void 0!==e.strings&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter((e=>""!==e))));for(let e in i)i[e]&&(null==(o=this.nt)||!o.has(e))&&this.st.add(e);return this.render(i)}let r=e.element.classList;for(let n of this.st)n in i||(r.remove(n),this.st.delete(n));for(let n in i){let e=!!i[n];e===this.st.has(n)||null!=(s=this.nt)&&s.has(n)||(e?(r.add(n),this.st.add(n)):(r.remove(n),this.st.delete(n)))}return n.E}});(0,s.y)()},5555:(e,t,i)=>{i.d(t,{D:()=>p});var o=i(3999),n=i(4994);(0,n.y)(),(0,n.y)(),(0,n.y)();var s=o.C`
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
`;(0,n.y)();var r=o.C`
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
`;(0,n.y)();var l=o.C`
  .sv-hr {
    width: 100%;
    height: 1px;
    background: rgb(var(--sv-gray-200));
    padding: 0px;
    margin: 0px;
    position: relative;
  }
`;(0,n.y)();var a=o.C`
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
`,p=e=>{var t;class i extends e{constructor(){super(...arguments),this.unsubscribeFrom=[],this.useStore=n.l.bind(this)}connectedCallback(){setTimeout((()=>{var e,t;let i=document.getElementById("superviz-style"),o=this.createCustomColors(),n=document.createElement("style");n.innerHTML=(null==i?void 0:i.innerHTML)||"",null==(e=this.shadowRoot)||e.appendChild(n),o&&(null==(t=this.shadowRoot)||t.appendChild(o))})),super.connectedCallback()}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribeFrom.forEach((e=>e(this)))}createCustomColors(){if(!n.f.get("colors"))return;let e=document.createElement("style"),t=Object.entries(n.f.get("colors")).map((e=>{let[t,i]=e;return`--${t}: ${i} !important;`})).join(" ");return e.innerHTML=`\n      * {\n        ${t}\n      }\n    `,e}emitEvent(e,t){let i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{composed:!0,bubbles:!0},o=new CustomEvent(e,(0,n.A)({detail:t},i));this.dispatchEvent(o)}}return i.styles=[s,r,l,a,null!=(t=e.styles)?t:[]],i}},921:(e,t,i)=>{i.r(t),i.d(t,{WhoIsOnline:()=>u,WhoIsOnlineDropdown:()=>x,WhoIsOnlineMessages:()=>_});var o=i(966),n=i(4994),s=i(6505),r=(i(5575),i(8068)),l=i(5555),a=i(3999);(0,n.y)(),(0,n.y)(),(0,n.y)(),(0,n.y)();var p=a.C`
  .who-is-online__participant-list {
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
  }

  .who-is-online {
    display: flex;
    flex-direction: column;
    position: fixed;
    z-index: 99;
  }

  .who-is-online__presence-control-message__text {
    margin: 0;
  }

  .who-is-online__participant {
    border-radius: 50%;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    transition: opacity 0.3s ease-in-out;
    border: 2px solid #878291;
    border-radius: 50%;
    max-width: 40px;
    flex: 1 0 40px;
  }

  .followed {
    border-style: dashed !important;
    animation: rotate 15s linear infinite;
  }

  .followed .who-is-online__participant__avatar {
    animation: nullifyRotate 15s linear infinite;
  }

  .private {
    opacity: 0.3;
  }

  @keyframes rotate {
    100% {
      transform: rotate(1turn);
    }
  }

  @keyframes nullifyRotate {
    100% {
      transform: rotate(-1turn);
    }
  }

  .who-is-online__participant.disable-dropdown {
    cursor: default;
  }

  .who-is-online__participant__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans';
    font-size: 14px;
    line-height: 14px;
    line-height: 14px;
    font-weight: bold;
    color: #26242a;
    object-fit: contain;
  }

  .superviz-who-is-online__excess {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Roboto;
    font-size: 14px;
    line-height: 16px;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    color: #aea9b8;
  }

  .excess_participants:hover,
  .excess_participants--open {
    background-color: #aea9b8 !important;
  }

  .excess_participants:hover > div,
  .excess_participants--open > div {
    color: #fff !important;
  }

  @media (max-width: 780px) {
    .who-is-online__participant {
      width: 32px;
      height: 32px;
    }

    .who-is-online__participant {
      flex: 1 0 32px;
      max-width: 32px;
    }

    .who-is-online__participant__avatar {
      width: 24px;
      height: 24px;
    }

    .who-is-online__participant-list {
      gap: 8px;
    }

    .superviz-who-is-online__excess {
      width: 24px;
      height: 24px;
      font-size: 12px;
      line-height: 12px;
    }
  }
`;(0,n.y)();var d=a.C`
  .dropdown {
    position: relative;
  }

  .who-is-online__extra-participant {
    display: flex;
    user-select: none;
    align-items: center;
    justify-items: start;
    gap: 4px;
    width: 100%;
    padding: 10px;
    border-radius: 2px;
    position: relative;
    cursor: pointer;
  }

  .who-is-online__extra-participant.disable-dropdown {
    cursor: default;
  }

  .who-is-online__extra-participant:hover,
  .who-is-online__extra-participant--selected {
    background-color: rgb(var(--sv-gray-200));
  }

  .who-is-online__participant {
    border-radius: 50%;
    box-sizing: border-box;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    border: 2px solid #878291;
    border-radius: 50%;
    max-width: 40px;
    flex: 1 0 40px;
  }

  .who-is-online__participant__avatar {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Open Sans';
    font-size: 14px;
    line-height: 14px;
    font-weight: bold;
    color: #26242a;
    object-fit: contain;
  }

  .dropdown-list {
    position: relative;
    display: flex;
    flex-direction: column;
    z-index: 100;
  }

  .dropdown-list > div {
    padding: 4px;
    width: 216px;
    box-sizing: border-box;
  }

  .who-is-online__extras-dropdown {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    opacity: 0;
    display: none;
    background: #fff;
    padding: 0;
    z-index: 1;
    transition: 0.2s;
    border-radius: 3px;
    max-height: 240px;
    overflow: auto;
  }

  .who-is-online__extras-dropdown superviz-dropdown:hover {
    z-index: 999;
    position: relative;
  }

  .who-is-online__extras__arrow-icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .menu--bottom {
    top: 4px;
    min-width: 103px;
    position: absolute;
    right: 0;
  }

  .menu--top {
    bottom: 44px;
    min-width: 103px;
    position: absolute;
    right: 0px;
  }

  .menu-open {
    display: block;
    opacity: 1;
  }

  .superviz-who-is-online-dropdown__tooltip {
    background-color: rgb(var(--sv-gray-600));
    padding: 8px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    align-items: center;
    position: absolute;
    top: 52px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 2px;
    opacity: 0;
    cursor: default;
    display: none;
    transition: opacity 0.2s ease-in-out display 0s;
  }

  .superviz-who-is-online-dropdown__tooltip-arrow {
    width: 13px;
    height: 13px;
    position: absolute;
    top: 0px;
    left: 50%;
    transform: rotate(45deg) translateX(-50%);
    background-color: rgb(var(--sv-gray-600));
    border-top-left-radius: 3px;
  }

  .dropdown-content:hover + .superviz-who-is-online-dropdown__tooltip {
    opacity: 1;
    display: block;
  }

  .tooltip-content {
    margin: 0;
    font-family: roboto;
    white-space: nowrap;
    text-align: center;
    color: white;
    font-size: 14px;
  }

  .who-is-online__extras__username {
    font-size: 14px;
    line-height: 20px;
    font-family: 'Open sans';
    color: rgb(var(--sv-gray-600));
  }

  .icon {
    flex: 1;
    justify-content: flex-end;
    display: flex;
  }

  .hide-icon {
    display: none;
  }

  @media (max-width: 780px) {
    .sv-icon,
    .who-is-online__participant {
      width: 32px;
      height: 32px;
    }

    .who-is-online__participant {
      flex: 1 0 32px;
      max-width: 32px;
    }

    .who-is-online__participant__avatar {
      width: 24px;
      height: 24px;
    }

    .dropdown-list > div {
      width: 192px;
    }

    .menu--top {
      bottom: 36px;
    }

    .superviz-who-is-online-dropdown__tooltip {
      top: 44px;
    }
  }
`;(0,n.y)();var c=a.C`
  .who-is-online__controls-messages {
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-top: 4px;
  }

  .who-is-online__presence-control-message {
    box-sizing: border-box;
    font-size: 12px;
    padding: 8px 10px;
    font-family: 'Roboto';
    border-radius: 6px;
    background-color: #fff;
    color: rgb(var(--sv-gray-700));
    border: 2px solid #e0e0e0;
    white-space: nowrap;
  }

  .who-is-online__pcm__text {
    margin: 0;
  }

  .who-is-online__presence-control-message span {
    margin-left: 3px;
    text-decoration: underline;
    cursor: pointer;
  }

  .left-side {
    left: 0;
  }

  .right-side {
    right: 0;
  }

  .left-side .who-is-online__presence-control-message {
    align-self: flex-start;
  }

  .right-side .who-is-online__presence-control-message {
    align-self: flex-end;
  }

  .bottom-side {
    bottom: auto;
    top: calc(100% + 5px);
  }

  .top-side {
    top: auto;
    bottom: calc(100% + 5px);
  }
`,h=(0,l.D)(a.a),w=[h.styles,p],u=class extends h{constructor(){super(),this.onClickOutDropdown=e=>{let{detail:t}=e;this.open=t.open},this.toggleShowTooltip=()=>{this.showTooltip=!this.showTooltip},this.dropdownOptionsHandler=e=>{let{detail:{label:t,participantId:i,source:o}}=e;switch(t){case"go to":this.handleGoTo(i);break;case"follow":this.handleLocalFollow(i,o);break;case"unfollow":this.handleLocalUnfollow();break;case"private mode":this.handlePrivate(i);break;case"leave private mode":this.handleCancelPrivate(i);break;case"everyone follows me":this.handleFollow(i,o);break;case"stop followers":this.handleStopFollow();break;case"gather all":this.handleGatherAll(i)}},this.position="top: 20px; right: 40px;",this.showTooltip=!0,this.open=!1;let{localParticipant:e}=this.useStore("global-store"),{participants:t,following:i,extras:o,disablePresenceControls:n}=this.useStore("who-is-online-store");t.subscribe((e=>{this.participants=e})),i.subscribe(),n.subscribe(),o.subscribe((e=>{this.amountOfExtras=e.length})),e.subscribe((e=>{var t,i;let o=null==(t=e.activeComponents)?void 0:t.some((e=>e.toLowerCase().includes("presence")));this.localParticipantData={id:e.id,joinedPresence:null==(i=e.activeComponents)?void 0:i.some((e=>e.toLowerCase().includes("presence")))},this.disableDropdown=!o}))}firstUpdated(e){super.firstUpdated(e),r.n.call(this,"who-is-online")}toggleOpen(){this.open=!this.open}dropdownPosition(e){if(1===this.participants.length)return"bottom-center";if(0===e)return"bottom-right";let t=this.participants.length>4,i=e+1===this.participants.length;return t||!i?"bottom-center":"bottom-left"}renderExtras(){var e;if(!this.amountOfExtras)return;let t={"who-is-online__participant":!0,excess_participants:!0,"excess_participants--open":this.open};return a.V`
      <superviz-who-is-online-dropdown
        @selected=${this.dropdownOptionsHandler}
        @clickout=${this.onClickOutDropdown}
        ?disableDropdown=${this.disableDropdown}
        ?showSeeMoreTooltip=${this.showTooltip}
        @toggle=${this.toggleOpen}
        @toggle-dropdown-state=${this.toggleShowTooltip}
        ?localParticipantJoinedPresence=${null==(e=this.localParticipantData)?void 0:e.joinedPresence}
        classesPrefix="who-is-online__controls"
        parentComponent="who-is-online"
        tooltipPrefix="who-is-online"
      >
        <div class=${(0,s.u)(t)} slot="dropdown">
          <div class="superviz-who-is-online__excess who-is-online__extras">
            +${this.amountOfExtras}
          </div>
        </div>
      </superviz-who-is-online-dropdown>
    `}getAvatar(e){let{color:t,imageUrl:i,firstLetter:o,letterColor:n}=e;return i?a.V` <img
        class="who-is-online__participant__avatar"
        style="background-color: ${t}"
        src=${i}
      />`:a.V`<div
      class="who-is-online__participant__avatar"
      style="background-color: ${t}; color: ${n}"
    >
      ${o}
    </div>`}cancelPrivate(){this.isPrivate=void 0,this.emitEvent("realtime.private-mode",{id:this.localParticipantData.id})}renderParticipants(){return this.participants.length?a.V`
      ${(0,o.j)(this.participants,(e=>e.id),((e,t)=>{var i;let{avatar:o,id:n,name:r,tooltip:l,controls:p,disableDropdown:d,isLocalParticipant:c}=e,h=this.dropdownPosition(t),w={"who-is-online__participant":!0,"disable-dropdown":d,followed:(null==(i=this.following)?void 0:i.id)===n||this.everyoneFollowsMe&&c,private:c&&this.isPrivate};return a.V`
            <superviz-dropdown
              options=${JSON.stringify(p)}
              returnData=${JSON.stringify({participantId:n,source:"participants"})}
              position=${h}
              name=${r}
              tooltipData=${JSON.stringify(l)}
              classesPrefix="who-is-online__controls"
              parentComponent="who-is-online"
              tooltipPrefix="who-is-online"
              ?disabled=${d}
              ?canShowTooltip=${this.showTooltip}
              @selected=${this.dropdownOptionsHandler}
              @toggle-dropdown-state=${this.toggleShowTooltip}
            >
              <div
                slot="dropdown"
                class=${(0,s.u)(w)}
                style="border-color: ${o.color}"
              >
                ${this.getAvatar(o)}
              </div>
            </superviz-dropdown>
          `}))}
    `:a.V``}handleGoTo(e){this.emitEvent("realtime.go-to-participant",{id:e})}handleLocalFollow(e,t){let{following:i}=this.useStore("who-is-online-store"),o=this.useStore("who-is-online-store")[t].value,{id:n,name:s,avatar:{color:r}}=o.find((t=>{let{id:i}=t;return i===e}));this.everyoneFollowsMe&&this.handleStopFollow(),i.publish({name:s,id:n,color:r}),this.emitEvent("realtime.local-follow-participant",{id:n,source:t})}handleLocalUnfollow(){let{following:e}=this.useStore("who-is-online-store");e.publish(void 0),this.emitEvent("realtime.local-follow-participant",{id:void 0})}handlePrivate(e){this.everyoneFollowsMe&&this.handleStopFollow(),this.emitEvent("realtime.private-mode",{id:e,isPrivate:!0}),this.isPrivate=!0}handleCancelPrivate(e){this.emitEvent("realtime.private-mode",{id:e,isPrivate:!1}),this.isPrivate=!1}handleFollow(e,t){this.isPrivate&&this.cancelPrivate();let i=this.useStore("who-is-online-store")[t].value,{id:o,name:n,avatar:{color:s}}=i.find((t=>{let{id:i}=t;return i===e}));this.everyoneFollowsMe=!0;let{following:r}=this.useStore("who-is-online-store");r.publish(void 0),this.emitEvent("realtime.follow-participant",{id:o,name:n,color:s})}handleStopFollow(){this.everyoneFollowsMe=!1,this.emitEvent("realtime.follow-participant",void 0)}handleGatherAll(e){this.isPrivate&&this.cancelPrivate(),this.emitEvent("realtime.gather",{id:e})}updated(e){super.updated(e),this.updateComplete.then((()=>{let e=this.shadowRoot.querySelector(".who-is-online");if(!e)return;let t=this.position.includes("left")?"flex-start":"flex-end",i=`${this.position} align-items: ${t};`;e.setAttribute("style",i)}))}render(){return a.V`<div class="who-is-online who-is-online">
      <div class="who-is-online__participant-list">
        ${this.renderParticipants()} ${this.renderExtras()}
      </div>
      <superviz-who-is-online-messages
        ?everyoneFollowsMe=${this.everyoneFollowsMe}
        ?isPrivate=${this.isPrivate}
        @stop-following=${this.handleLocalUnfollow}
        @cancel-private=${this.cancelPrivate}
        @stop-everyone-follows-me=${this.handleStopFollow}
      ></superviz-who-is-online-messages>
    </div> `}};u.styles=w,u.properties={position:{type:String},open:{type:Boolean},localParticipantColor:{type:String},isPrivate:{type:Boolean},everyoneFollowsMe:{type:Boolean},showTooltip:{type:Boolean}},u=(0,n.e)([(0,a.t)("superviz-who-is-online")],u),(0,n.y)(),(0,n.y)(),(0,n.y)();var v=(0,l.D)(a.a),g=[v.styles,c],_=class extends v{constructor(){super(),this.repositionMessages=()=>{let{following:e,everyoneFollowsMe:t,isPrivate:i}=this;if(e||t||i)return this.repositionInVerticalDirection(),this.repositionInHorizontalDirection(),void(this.animationFrame=window.requestAnimationFrame(this.repositionMessages));window.cancelAnimationFrame(this.animationFrame)};let{localParticipant:e}=this.useStore("global-store");e.subscribe((e=>{var t,i;this.participantColor=null!=(i=null==(t=e.slot)?void 0:t.color)?i:n.i.gray}));let{following:t}=this.useStore("who-is-online-store");t.subscribe()}firstUpdated(e){super.firstUpdated(e),r.n.call(this,"who-is-online")}updated(e){super.updated(e),["following","everyoneFollowsMe","isPrivate"].some((t=>e.has(t)))&&this.repositionMessages()}repositionInVerticalDirection(){let e=window.innerHeight/2,{top:t}=this.parentElement.getBoundingClientRect();this.verticalSide=t<e?"bottom-side":"top-side"}repositionInHorizontalDirection(){let e=window.innerWidth/2,{left:t}=this.parentElement.getBoundingClientRect();this.horizontalSide=t<e?"left-side":"right-side"}stopFollowing(){this.emitEvent("stop-following",{})}cancelPrivate(){this.emitEvent("cancel-private",{})}stopEveryoneFollowsMe(){this.emitEvent("stop-everyone-follows-me",{})}followingMessage(){if(!this.following)return"";let{name:e,color:t}=this.following;return a.V`<div
      class="who-is-online__following-message who-is-online__presence-control-message who-is-online__pcm"
      style="border-color: ${t}"
    >
      <p class="who-is-online__presence-control-message__text who-is-online__pcm__text">
        Following: ${e}
        <span
          class="who-is-online__presence-control-message__cancel-action-button who-is-online__pcm__cancel-action-button"
          @click=${this.stopFollowing}
          >Stop</span
        >
      </p>
    </div>`}everyoneFollowsMeMessage(){return this.everyoneFollowsMe?a.V`<div
      class="who-is-online__follow-me-message who-is-online__presence-control-message who-is-online__pcm"
      style="border-color: ${this.participantColor}"
    >
      <p class="who-is-online__presence-control-message__text who-is-online__pcm__text">
        Everyone is following you
        <span
          class="who-is-online__presence-control-message__cancel-action-button who-is-online__pcm__cancel-action-button"
          @click=${this.stopEveryoneFollowsMe}
          >Stop</span
        >
      </p>
    </div>`:""}privateMessage(){return this.isPrivate?a.V`<div
      class="who-is-online__private-mode-message who-is-online__presence-control-message who-is-online__pcm"
      style="border-color: ${this.participantColor}"
    >
      <p class="who-is-online__presence-control-message__text who-is-online__pcm__text">
        You are in Private Mode
        <span
          class="who-is-online__presence-control-message__cancel-action-button who-is-online__pcm__cancel-action-button"
          @click=${this.cancelPrivate}
          >Cancel</span
        >
      </p>
    </div>`:""}render(){let e={"who-is-online__controls-messages":!0,[this.verticalSide]:!0,[this.horizontalSide]:!0};return a.V` <div class=${(0,s.u)(e)}>
      ${this.followingMessage()} ${this.everyoneFollowsMeMessage()} ${this.privateMessage()}
    </div>`}};_.styles=g,_.properties={everyoneFollowsMe:{type:Boolean},isPrivate:{type:Boolean},verticalSide:{type:String},horizontalSide:{type:String}},_=(0,n.e)([(0,a.t)("superviz-who-is-online-messages")],_),(0,n.y)();var m=(0,l.D)(a.a),f=[m.styles,d],x=class extends m{constructor(){super(),this.onClickOutDropdown=e=>{if(e.stopPropagation(),!this.open)return;let t=e.composedPath(),i=this.shadowRoot.querySelector(".dropdown-content"),o=this.shadowRoot.querySelector(".dropdown-list"),n=this.shadowRoot.querySelector('slot[name="dropdown"]').assignedElements()[0],s=t.includes(i),r=t.includes(o),l=t.includes(n);s||r||l||this.close()},this.close=()=>{this.open=!1,this.selected="",this.emitEvent("clickout",{bubbles:!1,composed:!1})},this.selectParticipant=(e,t)=>()=>{t||(this.selected=e)},this.toggleShowTooltip=e=>{let{detail:{open:t}}=e;this.showParticipantTooltip=!this.showParticipantTooltip,t||(this.selected="")},this.tooltip=()=>this.showSeeMoreTooltip?a.V`<superviz-tooltip
      tooltipData=${JSON.stringify({name:"See more"})}
      classesPrefix="who-is-online__tooltip"
      parentComponent="who-is-online"
    ></superviz-tooltip>`:"",this.repositionDropdown=()=>{this.open&&this.parentElement?(this.repositionInVerticalDirection(),this.repositionInHorizontalDirection(),this.animationFrame=window.requestAnimationFrame(this.repositionDropdown)):window.cancelAnimationFrame(this.animationFrame)},this.repositionInVerticalDirection=()=>{let{bottom:e,top:t,height:i}=this.parentElement.getBoundingClientRect();if(t+i/2>window.innerHeight/2)return this.dropdownList.style.setProperty("bottom",window.innerHeight-t+8+"px"),void this.dropdownList.style.setProperty("top","");this.dropdownList.style.setProperty("top",`${e+8}px`),this.dropdownList.style.setProperty("bottom","")},this.repositionInHorizontalDirection=()=>{let{right:e,left:t}=this.parentElement.getBoundingClientRect();this.dropdownList.style.setProperty("right",window.innerWidth-e+"px"),this.dropdownList.style.setProperty("left",`${t}px`)},this.selected="",this.showParticipantTooltip=!0;let{extras:e}=this.useStore("who-is-online-store");e.subscribe((e=>{this.participants=e}))}firstUpdated(e){this.shadowRoot.querySelector(".who-is-online__extras-dropdown").scrollTop=0,r.n.call(this,"who-is-online"),this.dropdownList=this.shadowRoot.querySelector(".dropdown-list"),this.dropdownList.style.position="fixed"}updated(e){if(e.has("open")){if(this.emitEvent("toggle-dropdown-state",{open:this.open,font:"toggle"}),this.open)return void document.addEventListener("click",this.onClickOutDropdown);document.removeEventListener("click",this.onClickOutDropdown)}}getAvatar(e){let{color:t,imageUrl:i,firstLetter:o,letterColor:n}=e;return i?a.V` <img
        class="who-is-online__participant__avatar"
        style="background-color: ${t}"
        src=${i}
      />`:a.V`<div
      class="who-is-online__participant__avatar"
      style="background-color: ${t}; color: ${n}"
    >
      ${o}
    </div>`}renderParticipants(){if(!this.participants)return;let e=this.participants.length-1;return(0,o.j)(this.participants,(e=>e.id),((t,i)=>{let{disableDropdown:o,id:n,avatar:r,controls:l,tooltip:p,name:d}=t,c={"who-is-online__extra-participant":!0,"who-is-online__extra-participant--selected":this.selected===n,"disable-dropdown":o},h={"who-is-online__extras__arrow-icon":!0,"hide-icon":o},w=i===e;return a.V`
        <superviz-dropdown
          options=${JSON.stringify(l)}
          returnData=${JSON.stringify({participantId:n,source:"extras"})}
          tooltipData=${JSON.stringify(p)}
          position="bottom-right"
          classesPrefix="who-is-online__controls"
          parentComponent="who-is-online"
          tooltipPrefix="who-is-online"
          ?disabled=${o}
          ?canShowTooltip=${this.showParticipantTooltip}
          ?shiftTooltipLeft=${!0}
          ?lastParticipant=${w}
          @toggle-dropdown-state=${this.toggleShowTooltip}
          @selected=${this.close}
        >
        <div 
          class=${(0,s.u)(c)} 
          @click=${this.selectParticipant(n,o)} slot="dropdown">
            <div class="who-is-online__participant" style="border-color: 
            ${r.color}">
              ${this.getAvatar(r)}
            </div>
            <span class="who-is-online__extras__username">${d}</span>
            <superviz-icon 
              class=${(0,s.u)(h)} 
              name="right" 
              color="var(--sv-gray-600)"
              size="sm"
            >
          </superviz-icon>
          </div>
        </div>
      </superviz-dropdown>
      `}))}toggle(){this.open=!this.open,this.open&&(this.selected="",this.repositionDropdown())}get menuClasses(){return{"who-is-online__extras-dropdown":!0,"menu--bottom":"bottom-side"===this.position,"menu--top":"top-side"===this.position,"menu-open":this.open}}render(){return a.V`
      <div class="dropdown">
        <div class="dropdown-content" @click=${this.toggle}>
          <slot name="dropdown"></slot>
        </div>
        ${this.tooltip()}
      </div>
      <div class="dropdown-list">
        <div class=${(0,s.u)(this.menuClasses)}>${this.renderParticipants()}</div>
      </div>
    `}};x.styles=f,x.properties={open:{type:Boolean},align:{type:String},position:{type:String},selected:{type:String},disableDropdown:{type:Boolean},showSeeMoreTooltip:{type:Boolean},showParticipantTooltip:{type:Boolean},localParticipantJoinedPresence:{type:Boolean},dropdownList:{type:Object}},x=(0,n.e)([(0,a.t)("superviz-who-is-online-dropdown")],x)}}]);
//# sourceMappingURL=921.992ddc9a.chunk.js.map