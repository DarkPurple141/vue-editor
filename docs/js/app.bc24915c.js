(function(t){function e(e){for(var r,a,s=e[0],l=e[1],c=e[2],f=0,d=[];f<s.length;f++)a=s[f],i[a]&&d.push(i[a][0]),i[a]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==i[l]&&(r=!1)}r&&(o.splice(e--,1),t=a(a.s=n[0]))}return t}var r={},i={1:0},o=[];function a(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=r,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)a.d(n,r,function(e){return t[e]}.bind(null,r));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([11,0]),n()})({"0fQD":function(t,e,n){"use strict";var r=n("PUwj"),i=n.n(r);i.a},11:function(t,e,n){t.exports=n("Vtdi")},Bkfg:function(t,e,n){"use strict";var r=n("wjss"),i=n.n(r);i.a},CKse:function(t,e,n){"use strict";var r=n("I+fp"),i=n.n(r);i.a},"DS/w":function(t,e,n){"use strict";var r=n("RzDG"),i=n.n(r);i.a},HRMd:function(t,e,n){},"I+fp":function(t,e,n){},JM6w:function(t,e,n){"use strict";var r=n("qO4B"),i=n.n(r);i.a},PUwj:function(t,e,n){},QXqI:function(t,e,n){},RzDG:function(t,e,n){},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var r=n("Kw5r"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},o=[],a=(n("rAmE"),n("KHd+")),s={},l=Object(a["a"])(s,i,o,!1,null,null,null),c=l.exports,u=n("jE9Z"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"editor"}},[n("EditorWindow",{attrs:{file:t.file}})],1)},d=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panes"},[n("EditorPane",[n("EditorControlBar",{attrs:{slot:"controls"},slot:"controls"}),n("EditPadContainer",{attrs:{slot:"main",file:t.file},slot:"main"})],1),n("EditorPane",[n("EditRenderArea",{attrs:{slot:"main",file:t.rendered},slot:"main"})],1)],1)},m=[],v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pane"},[t._t("controls"),t._t("main")],2)},h=[],b={},g=b,_=(n("JM6w"),Object(a["a"])(g,v,h,!1,null,"22996c9a",null)),E=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"nav"},[n("nav",{staticClass:"nav-inner"},[n("div",{staticClass:"nav-block file-name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fname,expression:"fname"}],staticClass:"file-name-input",attrs:{type:"text",placeholder:"Filename"},domProps:{value:t.fname},on:{change:t.fname_handler,input:function(e){e.target.composing||(t.fname=e.target.value)}}})]),n("div",{staticClass:"nav-block controls"},[n("EditorControls")],1)])])},y=[],x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controls"},t._l(t.controls,function(e,r){return n("select",{key:r,staticClass:"control-grp"},[n("optgroup",{attrs:{label:e.label}},t._l(e.items,function(e,r){return n("option",{key:r,domProps:{value:e}},[t._v(t._s(e))])}))])}))},C=[],j={data:function(){return{controls:[{label:"Font Size",items:["12px","16px","20px"]},{label:"Indent",items:["2","4","8"]}]}}},O=j,P=(n("rZQS"),Object(a["a"])(O,x,C,!1,null,"aeec988e",null)),S=P.exports,$={components:{EditorControls:S},data:function(){return{fname:""}},methods:{fname_handler:function(){console.log("fname HERE"),this.fname&&this.$store.commit("FNAME",this.fname)}}},k=$,M=(n("Bkfg"),Object(a["a"])(k,w,y,!1,null,"58037cb3",null)),T=M.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"texteditor-frame"},[n("EditorSidebar",{attrs:{rows:t.rows}}),n("EditorTextarea",{attrs:{file:t.file,rows:t.rows}})],1)},D=[],I=(n("KKXr"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("div",{staticClass:"text edit"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit,expression:"edit"}],staticClass:"editpad",attrs:{rows:t.rows,cols:"80"},domProps:{value:t.edit},on:{input:[function(e){e.target.composing||(t.edit=e.target.value)},t.commit_edit],keydown:function(e){return"button"in e||!t._k(e.keyCode,"tab",9,e.key,"Tab")?(e.stopPropagation(),t.tab_handler(e)):null}}})]),n("div",{staticClass:"text"},[n("EditRenderArea",{attrs:{file:{content:t.edit,ftype:t.file_type}}})],1)])}),A=[],K=(n("xfY5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"render"},["md"==t.file.ftype?n("div",{domProps:{innerHTML:t._s(t.markdown)}}):n("div",[n("div",{domProps:{innerHTML:t._s(t.language)}}),n("div",{staticClass:"console"})])])}),Q=[],q=n("DlQD"),B=n.n(q),F=n("vRKo"),G=n.n(F);B.a.setOptions({highlight:function(t){return G.a.highlightAuto(t).value}});var H={props:{file:{ftype:String,content:String}},computed:{markdown:function(){return B()(this.file.content)},language:function(){return B()("```".concat(this.file.ftype,"\n").concat(this.file.content,"\n```"))}}},N=H,J=(n("hF2C"),Object(a["a"])(N,K,Q,!1,null,"24846d4f",null)),z=J.exports,L={components:{EditRenderArea:z},data:function(){return{edit:""}},props:{rows:Number},methods:{commit_edit:function(){this.$store.commit("EDIT",this.edit)},tab_handler:function(t){t.preventDefault();var e=t.target.selectionEnd;this.edit=this.edit.substring(0,e)+"    "+this.edit.substring(e,this.length),setTimeout(function(){return t.target.setSelectionRange(e+1,e+1)},0)}},computed:{file_type:function(){return this.$store.getters.ftype}}},U=L,V=(n("DS/w"),Object(a["a"])(U,I,A,!1,null,"286b6123",null)),W=V.exports,X=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},t._l(t.rows,function(e){return n("p",{key:e,staticClass:"line-number"},[t._v(t._s(e))])}))},Z=[],Y={props:{rows:Number}},tt=Y,et=(n("CKse"),Object(a["a"])(tt,X,Z,!1,null,"55103880",null)),nt=et.exports,rt={props:{file:String},components:{EditorSidebar:nt,EditorTextarea:W},computed:{rows:function(){return this.file.split("\n").length+1}}},it=rt,ot=(n("xjGn"),Object(a["a"])(it,R,D,!1,null,"9669ddde",null)),at=ot.exports,st={name:"EditorWindow",components:{EditorPane:E,EditorControlBar:T,EditPadContainer:at,EditRenderArea:z},props:{file:String},computed:{rendered:function(){return{content:this.file,ftype:this.$store.getters.ftype}}}},lt=st,ct=(n("0fQD"),Object(a["a"])(lt,p,m,!1,null,"0150d884",null)),ut=ct.exports,ft={name:"Editor",components:{EditorWindow:ut},computed:{file:function(){return this.$store.state.file.contents}}},dt=ft,pt=(n("ptvM"),Object(a["a"])(dt,f,d,!1,null,null,null)),mt=pt.exports;r["a"].use(u["a"]);var vt=new u["a"]({routes:[{path:"/",name:"Editor",component:mt}]}),ht=n("L2JU");r["a"].use(ht["a"]);var bt=new ht["a"].Store({state:{file:{contents:"",fname:""}},getters:{lines:function(t){var e=t.file;return e.contents.split("\n").length},ftype:function(t){var e=t.file;try{return e.fname.split(".")[1]||"md"}catch(t){return"md"}}},mutations:{EDIT:function(t,e){var n=t.file;n.contents=e},FNAME:function(t,e){var n=t.file;n.fname=e}},actions:{}});n("cIuC");r["a"].config.productionTip=!1,new r["a"]({router:vt,store:bt,render:function(t){return t(c)}}).$mount("#app")},hF2C:function(t,e,n){"use strict";var r=n("QXqI"),i=n.n(r);i.a},hGTI:function(t,e,n){},pt4y:function(t,e,n){},ptvM:function(t,e,n){"use strict";var r=n("HRMd"),i=n.n(r);i.a},q6ma:function(t,e,n){},qO4B:function(t,e,n){},rAmE:function(t,e,n){"use strict";var r=n("q6ma"),i=n.n(r);i.a},rZQS:function(t,e,n){"use strict";var r=n("pt4y"),i=n.n(r);i.a},wjss:function(t,e,n){},xjGn:function(t,e,n){"use strict";var r=n("hGTI"),i=n.n(r);i.a}});
//# sourceMappingURL=app.bc24915c.js.map