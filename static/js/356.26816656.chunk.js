/*! For license information please see 356.26816656.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_elden_ring_mind_map=self.webpackChunkreact_elden_ring_mind_map||[]).push([[356],{9356:(t,e,s)=>{s.r(e),s.d(e,{CommentsAnnotationFilter:()=>p});var i=s(4994),n=s(6505),r=(s(5575),s(3504)),l=s(8068),o=s(5555),a=s(3999);(0,i.y)();var c=(0,o.D)(a.a),d=[c.styles,r.l],h=[{label:"All comments"},{label:"Resolved comments"}],p=class extends c{constructor(){super(),this.selectClick=()=>{this.caret="down"===this.caret?"up":"down"},this.dropdownOptionsHandler=t=>{let{detail:e}=t;this.emitEvent("select",{filter:e}),this.selectClick()},this.caret="down"}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then((()=>{l.n.call(this,["comments"])}))}render(){let t="All comments"===this.filter?h[0].label:h[1].label;h[0].active="All comments"===this.filter,h[1].active="Resolved comments"===this.filter;let e={text:!0,"text-bold":!0,"select-content":!0,"comments__filter__selected-label":!0,"sv-gray-500":"down"===this.caret,"sv-gray-700":"up"===this.caret};return a.V`
      <div class="comments__filter-container">
        <div class="comments__filter">
          <superviz-dropdown
            options=${JSON.stringify(h)}
            position="bottom-left"
            right-offset="100px"
            @click=${this.selectClick}
            @selected=${this.dropdownOptionsHandler}
            @close=${this.selectClick}
            classesPrefix="comments__dropdown"
            parentComponent="comments"
          >
            <div class="comments__filter__toggle-button" slot="dropdown">
              <span class=${(0,n.u)(e)}>${t}</span>
              <div class="comments__filter__icon">
                <superviz-icon name=${this.caret} size="xs"></superviz-icon>
              </div>
            </div>
          </superviz-dropdown>
        </div>
      </div>
    `}};p.styles=d,p.properties={filter:{type:String},caret:{type:String}},p=(0,i.e)([(0,a.t)("superviz-comments-annotation-filter")],p)},5575:(t,e,s)=>{s.d(e,{E:()=>i,a:()=>n,i:()=>r}),(0,s(4994).y)();var i={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},n=t=>function(){for(var e=arguments.length,s=new Array(e),i=0;i<e;i++)s[i]=arguments[i];return{_$litDirective$:t,values:s}},r=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,s){this.t=t,this._$AM=e,this.i=s}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8068:(t,e,s)=>{function i(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let s=new CSSStyleSheet;s.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(e,{n:()=>i}),(0,s(4994).y)()},6505:(t,e,s)=>{s.d(e,{u:()=>l});var i=s(5575),n=s(3999),r=s(4994);(0,r.y)();var l=(0,i.a)(class extends i.i{constructor(t){var e;if(super(t),t.type!==i.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,e){let[s]=e;var i,r;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(let t in s)s[t]&&(null==(i=this.nt)||!i.has(t))&&this.st.add(t);return this.render(s)}let l=t.element.classList;for(let n of this.st)n in s||(l.remove(n),this.st.delete(n));for(let n in s){let t=!!s[n];t===this.st.has(n)||null!=(r=this.nt)&&r.has(n)||(t?(l.add(n),this.st.add(n)):(l.remove(n),this.st.delete(n)))}return n.E}});(0,r.y)()}}]);
//# sourceMappingURL=356.26816656.chunk.js.map