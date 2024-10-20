/*! For license information please see 801.da77fd88.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_elden_ring_mind_map=self.webpackChunkreact_elden_ring_mind_map||[]).push([[801],{6801:(t,e,n)=>{n.r(e),n.d(e,{CommentsAnnotationItem:()=>h});var s=n(4994),i=n(6505),a=(n(5575),n(3504)),o=n(8068),r=n(5555),l=n(3999);(0,s.y)();var d=(0,r.D)(l.a),m=[d.styles,a.p],h=class extends d{constructor(){super(...arguments),this.selectAnnotation=t=>{let{uuid:e}=this.annotation;document.body.dispatchEvent(new CustomEvent("select-annotation",{detail:{uuid:e}}))},this.resolveAnnotation=t=>{let{detail:e}=t,{uuid:n}=this.annotation,{resolved:s,type:i}=e,a="resolve-annotation"===i&&"All comments"===this.annotationFilter;this.emitEvent("resolve-annotation",{uuid:n,resolved:s}),a&&(this.shouldShowUndoResolved=!0)},this.hideUndoResolved=()=>{this.shouldShowUndoResolved=!1},this.generateExpandedCommentsTemplate=(t,e)=>{var n,s,i,a;return 0===e?l.V``:l.V`
      <superviz-comments-comment-item
        uuid=${t.uuid}
        avatar=${null==(a=null==(i=null==(s=null==(n=this.annotation)?void 0:n.comments)?void 0:s.at(e))?void 0:i.participant)?void 0:a.avatar}
        username=${t.participant.name||"Anonymous"}
        text=${t.text}
        createdAt=${t.createdAt}
        annotationId=${this.annotation.uuid}
        participantsList=${JSON.stringify(this.participantsList)}
        mentions=${JSON.stringify(t.mentions)}
        class="comments__replies"
      ></superviz-comments-comment-item>
    `},this.updateEditMode=t=>{let{detail:{editing:e}}=t;this.hideInput=e}}firstUpdated(t){super.firstUpdated(t),this.updateComplete.then((()=>{o.n.call(this,["comments"])}))}get filterIsAll(){return"All comments"===this.annotationFilter}get filterIsResolved(){return"Resolved comments"===this.annotationFilter}get shouldHideAnnotation(){return{hidden:this.resolved&&this.filterIsAll||!this.resolved&&this.filterIsResolved}}get replies(){return[...this.annotation.comments].splice(1).length}get repliesSize(){return this.replies>=5?5:this.replies}get replyText(){return 1!==this.replies?"replies":"reply"}get isSelected(){return this.selected===this.annotation.uuid}get annotationClasses(){return{comments__thread:!0,"comments__thread--selected":this.isSelected,"extra-space-bottom":this.replies}}get mainAnnotationClasses(){return{"comments__main-annotation":!0,"comments__main-annotation--selected":this.isSelected}}get hrClasses(){return{"sv-hr":!0,hidden:this.isLastAnnotation}}get avatarCommentsClasses(){return{"avatars-comments":!0,"comment-avatar--expand":!this.expandComments&&this.replies>1,invisible:!(!this.expandComments&&this.replies>=1)}}get containerWrapperClasses(){return{"comments-container-wrapper":!0,show:this.isSelected&&this.expandComments}}get commentsClasses(){return{"comments-container":!0,"comment-item--expand":this.isSelected&&this.expandComments,show:this.isSelected&&this.expandComments}}updated(t){if(t.has("selected")){let t=this.selected===this.annotation.uuid;this.expandComments=t}}createComment(t){let{detail:e}=t,{text:n,mentions:s}=e;this.emitEvent("create-comment",{uuid:this.annotation.uuid,mentions:s,text:n})}generateAvatarCommentsTemplate(){var t,e,n,s,i,a;let o=[];for(let r=1;r<=this.repliesSize;r++)null!=(e=null==(t=this.annotation.comments[r])?void 0:t.participant)&&e.avatar?o.push(l.V`
          <div class="avatar">
            <img src=${null==(s=null==(n=this.annotation.comments[r])?void 0:n.participant)?void 0:s.avatar} />
          </div>
        `):o.push(l.V`
          <div class="avatar">
            <p class="text text-bold">
              ${(null==(a=null==(i=this.annotation.comments[r])?void 0:i.participant.name[0])?void 0:a.toUpperCase())||"A"}
            </p>
          </div>
        `);return l.V`
      ${o}
      <div class="text text-big sv-gray-500">${this.replies} ${this.replyText}</div>
    `}annotationResolvedTemplate(){return this.shouldShowUndoResolved?l.V`
      <superviz-comments-annotation-resolved
        @undo-resolve=${this.resolveAnnotation}
        @hide=${this.hideUndoResolved}
        class=${(0,i.u)({hidden:this.filterIsResolved,"comments__resolved-annotation-message":!0})}
      >
      </superviz-comments-annotation-resolved>
    `:l.V``}get inputClasses(){return{"hide-input":this.hideInput}}get wrapperClasses(){return{wrapper:!0,"show-wrapper":!this.resolved&&this.filterIsAll||this.resolved&&this.filterIsResolved}}render(){var t,e,n,s,a,o,r,d,m,h,c;let p={"comments__complete-annotation":!0,"comments__hide-complete-annotation":this.shouldShowUndoResolved};return l.V`
      <div class="${(0,i.u)(p)}">
        ${this.annotationResolvedTemplate()}

        <div class=${(0,i.u)(this.wrapperClasses)}>
          <div class=${(0,i.u)(this.shouldHideAnnotation)}>
            <div class=${(0,i.u)(this.annotationClasses)} @click=${this.selectAnnotation}>
              <div class=${(0,i.u)(this.mainAnnotationClasses)}>
                <superviz-comments-comment-item
                  uuid=${null==(t=this.annotation.comments)?void 0:t[0].uuid}
                  annotationId=${this.annotation.uuid}
                  username=${(null==(n=null==(e=this.annotation.comments)?void 0:e[0].participant)?void 0:n.name)||"Anonymous"}
                  text=${null==(s=this.annotation.comments)?void 0:s[0].text}
                  createdAt=${null==(a=this.annotation.comments)?void 0:a[0].createdAt}
                  participantsList=${JSON.stringify(this.participantsList)}
                  primaryComment
                  avatar=${null==(m=null==(d=null==(r=null==(o=this.annotation)?void 0:o.comments)?void 0:r.at(0))?void 0:d.participant)?void 0:m.avatar}
                  resolvable
                  ?resolved=${this.resolved}
                  annotationFilter=${this.annotationFilter}
                  @resolve-annotation=${this.resolveAnnotation}
                  mentions=${JSON.stringify(null==(h=this.annotation.comments)?void 0:h[0].mentions)}
                  class="comments__annotation"
                  @edit-comment=${this.updateEditMode}
                ></superviz-comments-comment-item>
              </div>

              <div class=${(0,i.u)(this.containerWrapperClasses)}>
                <div class=${(0,i.u)(this.commentsClasses)}>
                  ${null==(c=this.annotation.comments)?void 0:c.map(this.generateExpandedCommentsTemplate)}
                  <span class=${(0,i.u)(this.inputClasses)}>
                    <superviz-comments-comment-input
                      @create-comment=${this.createComment}
                      eventType="create-comment"
                      @click=${t=>t.stopPropagation()}
                      placeholder="Reply"
                      participantsList=${JSON.stringify(this.participantsList)}
                    ></superviz-comments-comment-input>
                  </span>
                </div>
              </div>
              <div class=${(0,i.u)(this.avatarCommentsClasses)}>
                <div class="avatar-container">${this.generateAvatarCommentsTemplate()}</div>
              </div>
            </div>
            <div class=${(0,i.u)(this.hrClasses)}></div>
          </div>
        </div>
      </div>
    `}};h.styles=m,h.properties={annotation:{type:Object},expandComments:{type:Boolean},selected:{type:String,reflect:!0},resolved:{type:Boolean},shouldShowUndoResolved:{type:Boolean},isLastAnnotation:{type:Boolean},annotationFilter:{type:String},participantsList:{type:Object},hideInput:{type:Boolean}},h=(0,s.e)([(0,l.t)("superviz-comments-annotation-item")],h)},5575:(t,e,n)=>{n.d(e,{E:()=>s,a:()=>i,i:()=>a}),(0,n(4994).y)();var s={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},i=t=>function(){for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];return{_$litDirective$:t,values:n}},a=class{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,n){this.t=t,this._$AM=e,this.i=n}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},8068:(t,e,n)=>{function s(t){let e=document.getElementById(`superviz-${t}-styles`);if(!e)return;let n=new CSSStyleSheet;n.replaceSync(e.textContent),this.shadowRoot.adoptedStyleSheets=[...this.shadowRoot.adoptedStyleSheets,n]}n.d(e,{n:()=>s}),(0,n(4994).y)()},6505:(t,e,n)=>{n.d(e,{u:()=>o});var s=n(5575),i=n(3999),a=n(4994);(0,a.y)();var o=(0,s.a)(class extends s.i{constructor(t){var e;if(super(t),t.type!==s.E.ATTRIBUTE||"class"!==t.name||(null==(e=t.strings)?void 0:e.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return" "+Object.keys(t).filter((e=>t[e])).join(" ")+" "}update(t,e){let[n]=e;var s,a;if(void 0===this.st){this.st=new Set,void 0!==t.strings&&(this.nt=new Set(t.strings.join(" ").split(/\s/).filter((t=>""!==t))));for(let t in n)n[t]&&(null==(s=this.nt)||!s.has(t))&&this.st.add(t);return this.render(n)}let o=t.element.classList;for(let i of this.st)i in n||(o.remove(i),this.st.delete(i));for(let i in n){let t=!!n[i];t===this.st.has(i)||null!=(a=this.nt)&&a.has(i)||(t?(o.add(i),this.st.add(i)):(o.remove(i),this.st.delete(i)))}return i.E}});(0,a.y)()}}]);
//# sourceMappingURL=801.da77fd88.chunk.js.map