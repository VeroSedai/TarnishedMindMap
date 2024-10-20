"use strict";(self.webpackChunkreact_elden_ring_mind_map=self.webpackChunkreact_elden_ring_mind_map||[]).push([[83],{3083:(e,t,s)=>{s.r(t),s.d(t,{CommentsAnnotationResolved:()=>c});var i=s(3504),n=s(8068),o=s(5555),d=s(3999),a=s(4994);(0,a.y)();var l=(0,o.D)(d.a),m=[l.styles,i.m],c=class extends l{constructor(){super(),this.setTimer=()=>{clearTimeout(this.timeout),this.isCanceled=!1,this.timeout=setTimeout((()=>{this.isCanceled||(this.timeToHide=0,this.isCanceled=!1,this.hide())}),this.timeToHide)},this.timeToHide=1e4,this.isCanceled=!1}firstUpdated(e){super.firstUpdated(e),this.updateComplete.then((()=>{n.n.call(this,["comments"]),this.setTimer()}))}hide(){this.emitEvent("hide",{},{bubbles:!1,composed:!1})}undone(){this.isCanceled=!0,this.hide(),this.emitEvent("undo-resolve",{type:"undo-resolve",resolved:!1},{bubbles:!1,composed:!1}),clearTimeout(this.timeout)}render(){return 0===this.timeToHide||this.isCanceled?d.V``:d.V`
      <div class="comments__annotation-resolved">
        <span class="text text-big sv-gray-700 comments__annotation-resolved__text"
          >You resolved this comment</span
        >
        <button
          id="undone"
          @click=${this.undone}
          class="icon-button icon-button--clickable icon-button--medium comments__annotation-resolved__unresolve_button"
        >
          <superviz-icon name="undo" size="md"></superviz-icon>
        </button>
      </div>
    `}};c.styles=m,c.properties={timeToHide:{type:Number},isCanceled:{type:Boolean}},c=(0,a.e)([(0,d.t)("superviz-comments-annotation-resolved")],c)},8068:(e,t,s)=>{function i(e){let t=document.getElementById(`superviz-${e}-styles`);if(!t)return;let s=new CSSStyleSheet;s.replaceSync(t.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,s]}s.d(t,{n:()=>i}),(0,s(4994).y)()}}]);
//# sourceMappingURL=83.32d6b835.chunk.js.map