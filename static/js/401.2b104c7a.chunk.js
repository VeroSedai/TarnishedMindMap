/*! For license information please see 401.2b104c7a.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_elden_ring_mind_map=self.webpackChunkreact_elden_ring_mind_map||[]).push([[401],{5575:(t,e,s)=>{s.d(e,{E:()=>i,a:()=>r,i:()=>n}),(0,s(4994).y)();var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},r=t=>function(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return{_$litDirective$:t,values:s}},n=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this.t=t,this._$AM=e,this.i=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8068:(t,e,s)=>{function i(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let s=new CSSStyleSheet;s.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(e,{n:()=>i}),(0,s(4994).y)()},6505:(t,e,s)=>{s.d(e,{u:()=>o});var i=s(5575),r=s(3999),n=s(4994);(0,n.y)();var o=(0,i.a)(class extends i.i{constructor(t){var e;if(super(t),t.type!==i.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,e){let[s]=e;var i,n;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(let t in s)s[t]&&(null==(i=this.nt)||!i.has(t))&&this.st.add(t);return this.render(s)}let o=t.element.classList;for(let r of this.st)r in s||(o.remove(r),this.st.delete(r));for(let r in s){let t=!!s[r];t===this.st.has(r)||null!=(n=this.nt)&&n.has(r)||(t?(o.add(r),this.st.add(r)):(o.remove(r),this.st.delete(r)))}return r.E}});(0,n.y)()},9401:(t,e,s)=>{s.r(e),s.d(e,{Comments:()=>u});var i,r=s(4994),n=s(6505),o=(s(5575),s(3504)),a=s(8068),l=s(5555),d=s(3999);function h(t){let e=t.querySelector("#superviz-comments");if(e&&!i){let s={childList:!0,attributes:!0,characterData:!0,subtree:!0};i=new MutationObserver((e=>{e.forEach((e=>{e.removedNodes.length&&e.removedNodes.forEach((e=>{"poweredby-footer"===e.id&&function(t){let e=document.createElement("div");e.id="poweredby-footer",e.className="footer";let s=document.createElement("div");s.className="powered-by powered-by--horizontal";let i=document.createElement("a");i.href="https://superviz.com/",i.target="_blank",i.className="link";let r=document.createElement("div");r.textContent="Powered by";let n=document.createElement("img");n.width=48,n.height=8.86,n.src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg",s.appendChild(i),i.appendChild(r),r.appendChild(n),e.appendChild(s);let o=t.getElementById("superviz-comments");o&&o.appendChild(e),h(t)}(t)}))}))})),i.observe(e,s)}}(0,r.y)(),(0,r.y)();var p=(0,l.D)(d.a),c=[p.styles,o.i,o.x],u=class extends p{constructor(){super(),this.annotations=[],this.annotationFilter="All comments",this.waterMarkState=!1,this.participantsList=[],this.side="left"}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then((()=>{a.n.call(this,["comments"])}))}updated(t){super.updated(t),this.updateComplete.then((()=>{this.waterMarkState&&h(this.shadowRoot),t.has("offset")&&this.applyOffset()}))}participantsListed(t){this.participantsList=t}updateAnnotations(t){this.annotations=t}close(){this.emitEvent("close-threads",{})}waterMarkStatus(t){this.waterMarkState=t}setFilter(t){let{detail:e}=t,{filter:{label:s}}=e;this.annotationFilter=s}getOffset(t){return null==t||t<0?"10px":`${t}px`}applyOffset(){let t=this.shadowRoot.querySelector(".superviz-comments");if(!t)return;let{left:e,right:s,top:i,bottom:r}=this.offset;t.style.setProperty("--offset-top",this.getOffset(i)),t.style.setProperty("--offset-bottom",this.getOffset(r)),t.style.setProperty("--offset-right",this.getOffset(s)),t.style.setProperty("--offset-left",this.getOffset(e))}get poweredBy(){return this.waterMarkState?d.V` <div id="poweredby-footer" class="footer">
      <div class="powered-by powered-by--horizontal">
        <a href="https://superviz.com/" target="_blank" class="link">
          <div class="">
            Powered by
            <img
              width="48px"
              height="8.86px"
              src="https://production.cdn.superviz.com/static/superviz-gray-logo.svg"
            />
          </div>
        </a>
      </div>
    </div>`:d.V``}render(){let t={"superviz-comments":!0,"threads-on-left-side":"left"===this.side,"threads-on-right-side":"right"===this.side,"hide-at-right":"right"===this.side&&!this.open,"hide-at-left":"left"===this.side&&!this.open};return d.V`
      <div id="superviz-comments" class=${(0,n.u)(t)}>
        <div class="header">
          <superviz-comments-topbar
            @close-threads=${this.close}
            side=${this.side.split(":")[0]}
          ></superviz-comments-topbar>
        </div>
        <superviz-comments-annotation-filter
          filter=${this.annotationFilter}
          @select=${this.setFilter}
        >
        </superviz-comments-annotation-filter>
        <superviz-comments-content
          annotations=${JSON.stringify(this.annotations)}
          annotationFilter=${this.annotationFilter}
          participantsList=${JSON.stringify(this.participantsList)}
          class="content"
        ></superviz-comments-content>
        ${this.poweredBy}
      </div>
    `}};u.styles=c,u.properties={open:{type:Boolean},annotations:{type:Object},annotationFilter:{type:String},waterMarkState:{type:Boolean},side:{type:String},participantsList:{type:Object},offset:{type:Object}},u=(0,r.e)([(0,d.t)("superviz-comments")],u)}}]);
//# sourceMappingURL=401.2b104c7a.chunk.js.map