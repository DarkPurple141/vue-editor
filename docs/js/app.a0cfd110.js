(function(t){function e(e){for(var r,s,a=e[0],u=e[1],c=e[2],_=0,f=[];_<a.length;_++)s=a[_],o[s]&&f.push(o[s][0]),o[s]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(t[r]=u[r]);l&&l(e);while(f.length)f.shift()();return i.push.apply(i,c||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},o={1:0},i=[];function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=e,a=a.slice();for(var c=0;c<a.length;c++)e(a[c]);var l=u;i.push([12,0]),n()})({12:function(t,e,n){t.exports=n("Vtdi")},"3VBx":function(t,e,n){},"5I4F":function(t,e,n){"use strict";var r=n("NxrL"),o=n.n(r);o.a},AMmL:function(t,e,n){},AdH2:function(t,e,n){"use strict";var r=n("v1YH"),o=n.n(r);o.a},FI18:function(t,e,n){},HRMd:function(t,e,n){},I4TH:function(t,e,n){"use strict";var r=n("zf5b"),o=n.n(r);o.a},JYJI:function(t,e,n){},NxrL:function(t,e,n){},OSzT:function(t,e,n){"use strict";var r=n("pRiM"),o=n.n(r);o.a},Vtdi:function(t,e,n){"use strict";n.r(e);n("VRzm");var r=n("Kw5r"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],s=(n("rAmE"),n("KHd+")),a={},u=Object(s["a"])(a,o,i,!1,null,null,null),c=u.exports,l=n("jE9Z"),_=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"editor"}},[n("EditorWindow",{attrs:{file:t.file}})],1)},f=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"panes"},[n("EditorPane",[n("EditorControlBar",{attrs:{slot:"controls"},slot:"controls"}),n("EditPadContainer",{attrs:{slot:"main",file:t.file},slot:"main"})],1),n("EditorPane",[n("EditConsole",{attrs:{slot:"main"},slot:"main"})],1)],1)},d=[],m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pane"},[t._t("controls"),t._t("main")],2)},v=[],E={},b=E,h=(n("yqCU"),Object(s["a"])(b,m,v,!1,null,"50617b78",null)),g=h.exports,x=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"nav"},[n("nav",{staticClass:"nav-inner"},[n("div",{staticClass:"nav-block file-name"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.fname,expression:"fname"}],staticClass:"file-name-input",attrs:{type:"text",placeholder:"Filename"},domProps:{value:t.fname},on:{change:t.fname_handler,input:function(e){e.target.composing||(t.fname=e.target.value)}}})]),n("div",{staticClass:"nav-block controls"},[n("EditorControls")],1)])])},w=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controls"},t._l(t.controls,function(e,r){return n("select",{key:r,staticClass:"control-grp"},[n("optgroup",{attrs:{label:e.label}},t._l(e.items,function(e,r){return n("option",{key:r,domProps:{value:e}},[t._v(t._s(e))])}))])}))},C=[],P={data:function(){return{controls:[{label:"Font Size",items:["12px","16px","20px"]},{label:"Indent",items:["2","4","8"]}]}}},M=P,y=(n("rZQS"),Object(s["a"])(M,O,C,!1,null,"aeec988e",null)),D=y.exports,j={components:{EditorControls:D},data:function(){return{fname:""}},methods:{fname_handler:function(){this.fname&&this.$store.commit("FNAME",this.fname)}}},T=j,A=(n("nULr"),Object(s["a"])(T,x,w,!1,null,"4438e472",null)),R=A.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"texteditor-frame"},[n("EditorSidebar",{attrs:{rows:t.rows}}),n("EditorTextarea",{attrs:{file:t.file,rows:t.rows}})],1)},I=[],L=(n("KKXr"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[n("div",{staticClass:"text edit"},[n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.edit,expression:"edit"}],staticClass:"editpad",attrs:{rows:t.rows,cols:"80"},domProps:{value:t.edit},on:{input:[function(e){e.target.composing||(t.edit=e.target.value)},t.commit_edit],keydown:function(e){return"button"in e||!t._k(e.keyCode,"tab",9,e.key,"Tab")?(e.stopPropagation(),t.tab_handler(e)):null}}})]),n("div",{staticClass:"text"},[n("EditRenderArea",{attrs:{file:{content:t.edit,ftype:t.file_type}}})],1)])}),K=[],S=(n("xfY5"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"render"},["md"==t.file.ftype?n("div",{domProps:{innerHTML:t._s(t.markdown)}}):n("div",[n("div",{domProps:{innerHTML:t._s(t.language)}})])])}),$=[],U=n("DlQD"),B=n.n(U),W=n("vRKo"),q=n.n(W);B.a.setOptions({highlight:function(t){return q.a.highlightAuto(t).value}});var H={props:{file:{ftype:String,content:String}},computed:{markdown:function(){return B()(this.file.content)},language:function(){return B()("```".concat(this.file.ftype,"\n").concat(this.file.content,"\n```"))}}},N=H,z=(n("x/RE"),Object(s["a"])(N,S,$,!1,null,"32e2c54e",null)),V=z.exports,F={components:{EditRenderArea:V},data:function(){return{edit:""}},props:{rows:Number},methods:{commit_edit:function(){this.$store.commit("EDIT",this.edit)},tab_handler:function(t){t.preventDefault();var e=t.target.selectionEnd;this.edit=this.edit.substring(0,e)+"\t"+this.edit.substring(e,this.length),setTimeout(function(){return t.target.setSelectionRange(e+1,e+1)},0)}},computed:{file_type:function(){return this.$store.getters.ftype}}},J=F,Y=(n("I4TH"),Object(s["a"])(J,L,K,!1,null,"3e6a4048",null)),Q=Y.exports,Z=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sidebar"},t._l(t.rows,function(e){return n("p",{key:e,staticClass:"line-number"},[t._v(t._s(e))])}))},X=[],G={props:{rows:Number}},tt=G,et=(n("q2P0"),Object(s["a"])(tt,Z,X,!1,null,"6a3e04ff",null)),nt=et.exports,rt={props:{file:String},components:{EditorSidebar:nt,EditorTextarea:Q},computed:{rows:function(){return this.file.split("\n").length}}},ot=rt,it=(n("AdH2"),Object(s["a"])(ot,k,I,!1,null,"b6020230",null)),st=it.exports,at=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"console"},[n("div",{staticClass:"exec"},[n("button",{attrs:{type:"button",name:"Run"},on:{click:function(e){e.preventDefault(),t.$store.dispatch("execute")}}},[t._v("Run")])]),t._v("\n   "+t._s(t.script)+"\n")])},ut=[],ct={computed:{script:function(){return this.$store.state.file.output||"Script output will appear here."}}},lt=ct,_t=(n("5I4F"),Object(s["a"])(lt,at,ut,!1,null,"1b1d4639",null)),ft=_t.exports,pt={name:"EditorWindow",components:{EditorPane:g,EditorControlBar:R,EditPadContainer:st,EditConsole:ft},props:{file:String}},dt=pt,mt=(n("OSzT"),Object(s["a"])(dt,p,d,!1,null,"4d0b7b7b",null)),vt=mt.exports,Et={name:"Editor",components:{EditorWindow:vt},computed:{file:function(){return this.$store.state.file.contents}}},bt=Et,ht=(n("ptvM"),Object(s["a"])(bt,_,f,!1,null,null,null)),gt=ht.exports;r["a"].use(l["a"]);var xt=new l["a"]({routes:[{path:"/",name:"Editor",component:gt}]}),wt=n("wNa6");n("cIuC");r["a"].config.productionTip=!1,new r["a"]({router:xt,store:wt["a"],render:function(t){return t(c)}}).$mount("#app")},nULr:function(t,e,n){"use strict";var r=n("3VBx"),o=n.n(r);o.a},pRiM:function(t,e,n){},pt4y:function(t,e,n){},ptvM:function(t,e,n){"use strict";var r=n("HRMd"),o=n.n(r);o.a},q2P0:function(t,e,n){"use strict";var r=n("AMmL"),o=n.n(r);o.a},q6ma:function(t,e,n){},rAmE:function(t,e,n){"use strict";var r=n("q6ma"),o=n.n(r);o.a},rZQS:function(t,e,n){"use strict";var r=n("pt4y"),o=n.n(r);o.a},v1YH:function(t,e,n){},wNa6:function(module,__webpack_exports__,__webpack_require__){"use strict";var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("KKXr"),core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("VRzm"),core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__),vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("Kw5r"),vuex__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("L2JU");vue__WEBPACK_IMPORTED_MODULE_2__["a"].use(vuex__WEBPACK_IMPORTED_MODULE_3__["a"]);var logger=console.log;console.log=function(t){return logger(t),t},__webpack_exports__["a"]=new vuex__WEBPACK_IMPORTED_MODULE_3__["a"].Store({state:{file:{contents:"",fname:"",output:""},config:{tabsize:4,fontsize:"12px"}},getters:{lines:function(t){var e=t.file;return e.contents.split("\n").length},ftype:function(t){var e=t.file;try{return e.fname.split(".")[1]||"md"}catch(t){return"md"}}},mutations:{EDIT:function(t,e){var n=t.file;n.contents=e},FNAME:function(t,e){var n=t.file;n.fname=e},EVAL:function(t,e){var n=t.file;n.output=e}},actions:{execute:function execute(_ref6){var state=_ref6.state,commit=_ref6.commit;console.log("eval");try{var output=eval(state.file.contents);commit("EVAL",output)}catch(t){commit("EVAL",t.message)}}}})},"x/RE":function(t,e,n){"use strict";var r=n("FI18"),o=n.n(r);o.a},yqCU:function(t,e,n){"use strict";var r=n("JYJI"),o=n.n(r);o.a},zf5b:function(t,e,n){}});
//# sourceMappingURL=app.a0cfd110.js.map