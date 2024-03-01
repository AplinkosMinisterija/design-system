(function(C,m){typeof exports=="object"&&typeof module<"u"?m(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],m):(C=typeof globalThis<"u"?globalThis:C||self,m(C["design-system"]={},C.React,C["styled-components"]))})(this,function(C,m,l){"use strict";function cr(e){const t=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const i in e)if(i!=="default"){const o=Object.getOwnPropertyDescriptor(e,i);Object.defineProperty(t,i,o.get?o:{enumerable:!0,get:()=>e[i]})}}return t.default=e,Object.freeze(t)}const L=cr(m);var oe={exports:{}},H={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var be;function lr(){if(be)return H;be=1;var e=m,t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function x(h,u,p){var b,$={},j=null,O=null;p!==void 0&&(j=""+p),u.key!==void 0&&(j=""+u.key),u.ref!==void 0&&(O=u.ref);for(b in u)o.call(u,b)&&!d.hasOwnProperty(b)&&($[b]=u[b]);if(h&&h.defaultProps)for(b in u=h.defaultProps,u)$[b]===void 0&&($[b]=u[b]);return{$$typeof:t,type:h,key:j,ref:O,props:$,_owner:s.current}}return H.Fragment=i,H.jsx=x,H.jsxs=x,H}var U={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var we;function ur(){return we||(we=1,process.env.NODE_ENV!=="production"&&function(){var e=m,t=Symbol.for("react.element"),i=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),x=Symbol.for("react.provider"),h=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),b=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),T=Symbol.iterator,F="@@iterator";function W(r){if(r===null||typeof r!="object")return null;var a=T&&r[T]||r[F];return typeof a=="function"?a:null}var R=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function _(r){{for(var a=arguments.length,c=new Array(a>1?a-1:0),f=1;f<a;f++)c[f-1]=arguments[f];tn("error",r,c)}}function tn(r,a,c){{var f=R.ReactDebugCurrentFrame,w=f.getStackAddendum();w!==""&&(a+="%s",c=c.concat([w]));var y=c.map(function(v){return String(v)});y.unshift("Warning: "+a),Function.prototype.apply.call(console[r],console,y)}}var nn=!1,on=!1,an=!1,sn=!1,cn=!1,Ae;Ae=Symbol.for("react.module.reference");function ln(r){return!!(typeof r=="string"||typeof r=="function"||r===o||r===d||cn||r===s||r===p||r===b||sn||r===O||nn||on||an||typeof r=="object"&&r!==null&&(r.$$typeof===j||r.$$typeof===$||r.$$typeof===x||r.$$typeof===h||r.$$typeof===u||r.$$typeof===Ae||r.getModuleId!==void 0))}function un(r,a,c){var f=r.displayName;if(f)return f;var w=a.displayName||a.name||"";return w!==""?c+"("+w+")":c}function ze(r){return r.displayName||"Context"}function M(r){if(r==null)return null;if(typeof r.tag=="number"&&_("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case o:return"Fragment";case i:return"Portal";case d:return"Profiler";case s:return"StrictMode";case p:return"Suspense";case b:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case h:var a=r;return ze(a)+".Consumer";case x:var c=r;return ze(c._context)+".Provider";case u:return un(r,r.render,"ForwardRef");case $:var f=r.displayName||null;return f!==null?f:M(r.type)||"Memo";case j:{var w=r,y=w._payload,v=w._init;try{return M(v(y))}catch{return null}}}return null}var B=Object.assign,X=0,Ne,We,Be,Ve,Ye,He,Ue;function Ge(){}Ge.__reactDisabledLog=!0;function dn(){{if(X===0){Ne=console.log,We=console.info,Be=console.warn,Ve=console.error,Ye=console.group,He=console.groupCollapsed,Ue=console.groupEnd;var r={configurable:!0,enumerable:!0,value:Ge,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}X++}}function fn(){{if(X--,X===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:B({},r,{value:Ne}),info:B({},r,{value:We}),warn:B({},r,{value:Be}),error:B({},r,{value:Ve}),group:B({},r,{value:Ye}),groupCollapsed:B({},r,{value:He}),groupEnd:B({},r,{value:Ue})})}X<0&&_("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var de=R.ReactCurrentDispatcher,fe;function Z(r,a,c){{if(fe===void 0)try{throw Error()}catch(w){var f=w.stack.trim().match(/\n( *(at )?)/);fe=f&&f[1]||""}return`
`+fe+r}}var pe=!1,ee;{var pn=typeof WeakMap=="function"?WeakMap:Map;ee=new pn}function qe(r,a){if(!r||pe)return"";{var c=ee.get(r);if(c!==void 0)return c}var f;pe=!0;var w=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var y;y=de.current,de.current=null,dn();try{if(a){var v=function(){throw Error()};if(Object.defineProperty(v.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(v,[])}catch(D){f=D}Reflect.construct(r,[],v)}else{try{v.call()}catch(D){f=D}r.call(v.prototype)}}else{try{throw Error()}catch(D){f=D}r()}}catch(D){if(D&&f&&typeof D.stack=="string"){for(var g=D.stack.split(`
`),S=f.stack.split(`
`),k=g.length-1,E=S.length-1;k>=1&&E>=0&&g[k]!==S[E];)E--;for(;k>=1&&E>=0;k--,E--)if(g[k]!==S[E]){if(k!==1||E!==1)do if(k--,E--,E<0||g[k]!==S[E]){var P=`
`+g[k].replace(" at new "," at ");return r.displayName&&P.includes("<anonymous>")&&(P=P.replace("<anonymous>",r.displayName)),typeof r=="function"&&ee.set(r,P),P}while(k>=1&&E>=0);break}}}finally{pe=!1,de.current=y,fn(),Error.prepareStackTrace=w}var Y=r?r.displayName||r.name:"",sr=Y?Z(Y):"";return typeof r=="function"&&ee.set(r,sr),sr}function hn(r,a,c){return qe(r,!1)}function gn(r){var a=r.prototype;return!!(a&&a.isReactComponent)}function re(r,a,c){if(r==null)return"";if(typeof r=="function")return qe(r,gn(r));if(typeof r=="string")return Z(r);switch(r){case p:return Z("Suspense");case b:return Z("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case u:return hn(r.render);case $:return re(r.type,a,c);case j:{var f=r,w=f._payload,y=f._init;try{return re(y(w),a,c)}catch{}}}return""}var te=Object.prototype.hasOwnProperty,Je={},Xe=R.ReactDebugCurrentFrame;function ne(r){if(r){var a=r._owner,c=re(r.type,r._source,a?a.type:null);Xe.setExtraStackFrame(c)}else Xe.setExtraStackFrame(null)}function xn(r,a,c,f,w){{var y=Function.call.bind(te);for(var v in r)if(y(r,v)){var g=void 0;try{if(typeof r[v]!="function"){var S=Error((f||"React class")+": "+c+" type `"+v+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[v]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw S.name="Invariant Violation",S}g=r[v](a,v,f,c,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(k){g=k}g&&!(g instanceof Error)&&(ne(w),_("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",f||"React class",c,v,typeof g),ne(null)),g instanceof Error&&!(g.message in Je)&&(Je[g.message]=!0,ne(w),_("Failed %s type: %s",c,g.message),ne(null))}}}var vn=Array.isArray;function he(r){return vn(r)}function mn(r){{var a=typeof Symbol=="function"&&Symbol.toStringTag,c=a&&r[Symbol.toStringTag]||r.constructor.name||"Object";return c}}function bn(r){try{return Ke(r),!1}catch{return!0}}function Ke(r){return""+r}function Qe(r){if(bn(r))return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",mn(r)),Ke(r)}var K=R.ReactCurrentOwner,wn={key:!0,ref:!0,__self:!0,__source:!0},Ze,er,ge;ge={};function yn(r){if(te.call(r,"ref")){var a=Object.getOwnPropertyDescriptor(r,"ref").get;if(a&&a.isReactWarning)return!1}return r.ref!==void 0}function $n(r){if(te.call(r,"key")){var a=Object.getOwnPropertyDescriptor(r,"key").get;if(a&&a.isReactWarning)return!1}return r.key!==void 0}function jn(r,a){if(typeof r.ref=="string"&&K.current&&a&&K.current.stateNode!==a){var c=M(K.current.type);ge[c]||(_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',M(K.current.type),r.ref),ge[c]=!0)}}function kn(r,a){{var c=function(){Ze||(Ze=!0,_("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",a))};c.isReactWarning=!0,Object.defineProperty(r,"key",{get:c,configurable:!0})}}function En(r,a){{var c=function(){er||(er=!0,_("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",a))};c.isReactWarning=!0,Object.defineProperty(r,"ref",{get:c,configurable:!0})}}var Cn=function(r,a,c,f,w,y,v){var g={$$typeof:t,type:r,key:a,ref:c,props:v,_owner:y};return g._store={},Object.defineProperty(g._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(g,"_self",{configurable:!1,enumerable:!1,writable:!1,value:f}),Object.defineProperty(g,"_source",{configurable:!1,enumerable:!1,writable:!1,value:w}),Object.freeze&&(Object.freeze(g.props),Object.freeze(g)),g};function _n(r,a,c,f,w){{var y,v={},g=null,S=null;c!==void 0&&(Qe(c),g=""+c),$n(a)&&(Qe(a.key),g=""+a.key),yn(a)&&(S=a.ref,jn(a,w));for(y in a)te.call(a,y)&&!wn.hasOwnProperty(y)&&(v[y]=a[y]);if(r&&r.defaultProps){var k=r.defaultProps;for(y in k)v[y]===void 0&&(v[y]=k[y])}if(g||S){var E=typeof r=="function"?r.displayName||r.name||"Unknown":r;g&&kn(v,E),S&&En(v,E)}return Cn(r,g,S,w,f,K.current,v)}}var xe=R.ReactCurrentOwner,rr=R.ReactDebugCurrentFrame;function V(r){if(r){var a=r._owner,c=re(r.type,r._source,a?a.type:null);rr.setExtraStackFrame(c)}else rr.setExtraStackFrame(null)}var ve;ve=!1;function me(r){return typeof r=="object"&&r!==null&&r.$$typeof===t}function tr(){{if(xe.current){var r=M(xe.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function On(r){{if(r!==void 0){var a=r.fileName.replace(/^.*[\\\/]/,""),c=r.lineNumber;return`

Check your code at `+a+":"+c+"."}return""}}var nr={};function Sn(r){{var a=tr();if(!a){var c=typeof r=="string"?r:r.displayName||r.name;c&&(a=`

Check the top-level render call using <`+c+">.")}return a}}function or(r,a){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var c=Sn(a);if(nr[c])return;nr[c]=!0;var f="";r&&r._owner&&r._owner!==xe.current&&(f=" It was passed a child from "+M(r._owner.type)+"."),V(r),_('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',c,f),V(null)}}function ir(r,a){{if(typeof r!="object")return;if(he(r))for(var c=0;c<r.length;c++){var f=r[c];me(f)&&or(f,a)}else if(me(r))r._store&&(r._store.validated=!0);else if(r){var w=W(r);if(typeof w=="function"&&w!==r.entries)for(var y=w.call(r),v;!(v=y.next()).done;)me(v.value)&&or(v.value,a)}}}function Tn(r){{var a=r.type;if(a==null||typeof a=="string")return;var c;if(typeof a=="function")c=a.propTypes;else if(typeof a=="object"&&(a.$$typeof===u||a.$$typeof===$))c=a.propTypes;else return;if(c){var f=M(a);xn(c,r.props,"prop",f,r)}else if(a.PropTypes!==void 0&&!ve){ve=!0;var w=M(a);_("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",w||"Unknown")}typeof a.getDefaultProps=="function"&&!a.getDefaultProps.isReactClassApproved&&_("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function Pn(r){{for(var a=Object.keys(r.props),c=0;c<a.length;c++){var f=a[c];if(f!=="children"&&f!=="key"){V(r),_("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",f),V(null);break}}r.ref!==null&&(V(r),_("Invalid attribute `ref` supplied to `React.Fragment`."),V(null))}}function ar(r,a,c,f,w,y){{var v=ln(r);if(!v){var g="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(g+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var S=On(w);S?g+=S:g+=tr();var k;r===null?k="null":he(r)?k="array":r!==void 0&&r.$$typeof===t?(k="<"+(M(r.type)||"Unknown")+" />",g=" Did you accidentally export a JSX literal instead of a component?"):k=typeof r,_("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",k,g)}var E=_n(r,a,c,w,y);if(E==null)return E;if(v){var P=a.children;if(P!==void 0)if(f)if(he(P)){for(var Y=0;Y<P.length;Y++)ir(P[Y],r);Object.freeze&&Object.freeze(P)}else _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ir(P,r)}return r===o?Pn(E):Tn(E),E}}function Rn(r,a,c){return ar(r,a,c,!0)}function Ln(r,a,c){return ar(r,a,c,!1)}var Fn=Ln,Mn=Rn;U.Fragment=o,U.jsx=Fn,U.jsxs=Mn}()),U}process.env.NODE_ENV==="production"?oe.exports=lr():oe.exports=ur();var n=oe.exports;const dr=({color:e="#000"})=>n.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",children:n.jsx("path",{fill:e,d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",children:n.jsx("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})});var ye=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e.DANGER="danger",e.SUCCESS="success",e.TRANSPARENT="transparent",e))(ye||{});const $e=({variant:e="primary",route:t,children:i,height:o=56,padding:s="11px 20px",leftIcon:d,radius:x="28px",buttonPadding:h,rightIcon:u,color:p,type:b,loading:$=!1,className:j,disabled:O=!1,fontWeight:T="600",...F})=>n.jsxs(fr,{className:j,$padding:s,$fontWeight:T,$variant:e,$height:o||40,type:b,disabled:O,$radius:x,...F,children:[d,$?n.jsx(dr,{color:"white"}):i,u]}),fr=l.button`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  height: ${({$height:e})=>`${e}px`};
  border-radius: ${({$radius:e})=>e};
  padding: ${({$padding:e})=>e};
  background-color: ${({$variant:e,theme:t})=>t.colors.buttonBackground[e]};
  color: ${({$variant:e,theme:t})=>t.colors.buttonText[e]};
  border: ${({$variant:e})=>e==="transparent"?"0":"1px"} solid
    ${({$variant:e})=>e!=="transparent"?"transparent":" rgb(35, 31, 32)"};
  font-weight: ${({$fontWeight:e})=>e};
  font-size: 1.8rem;
  :hover {
    background-color: ${({$variant:e,theme:t})=>t.colors.hover[e]};
  }
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
  width: 100%;
`;$e.colors=ye;const pr=$e,hr=({value:e,name:t,onChange:i,disabled:o=!1,label:s,error:d,className:x,intermediate:h})=>n.jsx(n.Fragment,{children:n.jsxs(gr,{disabled:o,className:x,onClick:()=>{!o&&i(!e)},children:[n.jsxs(vr,{intermediate:h,disabled:o,error:d,checked:e,children:[n.jsx(br,{type:"checkbox",name:t,checked:e||!1,disabled:o,onChange:()=>{}}),n.jsx(mr,{checked:e||!1,intermediate:h,disabled:o})]}),n.jsx(xr,{children:s})]})}),gr=l.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,xr=l.div`
  text-align: left;
  font-size: 1.4rem;
  color: #4b5565;
`,vr=l.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: ${({theme:e,checked:t,error:i,intermediate:o})=>t||o?e.colors.primary:i?e.colors.danger:e.colors.border};
  opacity: ${({disabled:e})=>e?.48:1};
`,mr=l.label`
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  cursor: pointer;
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  left: 2px;
  top: 2px;

  background-color: ${({intermediate:e,checked:t})=>e||t?"transparent":"white"};

  &::after {
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    filter: alpha(opacity=0);
    opacity: 0;
    content: '';
    position: absolute;
    width: 11px;
    height: 4px;
    background: transparent;
    top: ${({intermediate:e})=>`${e?2:3}px`};
    left: ${({intermediate:e})=>`${e?.8:1}px`};
    border: 2px solid #fcfff4;
    border-top: none;
    border-right: none;

    ${({intermediate:e})=>e&&`border-left: none;
   
  `}

    ${({checked:e,intermediate:t})=>t||e?`
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      filter: alpha(opacity=100);
      opacity: 1;
  `:""}

    -webkit-transform: rotate(
      ${({intermediate:e})=>`${e?0:-45}deg`}
    );
    -moz-transform: rotate(${({intermediate:e})=>`${e?0:-45}deg`});
    -o-transform: rotate(${({intermediate:e})=>`${e?0:-45}deg`});
    -ms-transform: rotate(${({intermediate:e})=>`${e?0:-45}deg`});
    transform: rotate(${({intermediate:e})=>`${e?0:-45}deg`});
  }
`,br=l.input`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -4px;
  left: -4px;
  z-index: 1;
  opacity: 0;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,wr=hr,yr=({value:e,name:t,onChange:i})=>n.jsx(n.Fragment,{children:n.jsxs($r,{children:[n.jsx(jr,{type:"checkbox",name:t,checked:e,onChange:i}),n.jsx(Q,{})]})}),$r=l.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`,Q=l.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 24px;

  &:before {
    position: absolute;
    content: '';
    height: 18px;
    width: 18px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`,jr=l.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Q} {
    background-color: ${({theme:e})=>e.colors.primary};
  }

  &:focus + ${Q} {
    box-shadow: 0 0 1px ${({theme:e})=>e.colors.primary};
  }

  &:checked + ${Q}:before {
    transform: translateX(20px); // Move the toggle to the right when checked
  }
`,kr=yr,Er=({error:e})=>e?n.jsx(Cr,{children:e}):n.jsx(n.Fragment,{}),Cr=l.label`
  display: inline-block;
  width: 100%;
  color: ${({theme:e})=>e.colors.error};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4rem;
  margin-bottom: 8px;
`,_r=({error:e,showError:t=!0,label:i,className:o,padding:s="0",onClick:d,handleBlur:x,subLabel:h,bottomLabel:u,secondLabel:p,children:b})=>n.jsxs(Or,{tabIndex:-1,onBlur:x,className:o,padding:s,onClick:d,children:[n.jsxs(Sr,{children:[!!i&&n.jsxs(Rr,{children:[n.jsx(Pr,{htmlFor:i,children:i}),!!h&&n.jsx(Lr,{children:h})]}),p]}),b,t&&n.jsx(Er,{error:e}),u&&n.jsx(Tr,{children:u})]}),Or=l.div`
  display: block;
  position: relative;
  padding: ${({padding:e})=>e};
`,Sr=l.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Tr=l.div`
  margin-top: 6px;
  font-size: 1.2rem;
  color: #697586;
`,Pr=l.label`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Rr=l.div`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`,Lr=l.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`,ie=_r,Fr=({value:e,name:t,error:i,readOnly:o=!1,leftIcon:s,rightIcon:d,onChange:x,placeholder:h,type:u="text",disabled:p,height:b=56,selectedValue:$=!1,onInputClick:j,inputMode:O="text",onFocus:T=()=>{},...F})=>n.jsxs(Mr,{$error:!!i,$height:b||40,$disabled:p||!1,children:[s,n.jsx(Dr,{$selectedValue:$,onClick:()=>j?j():null,readOnly:o,type:u,name:t,autoComplete:"off",value:e||"",onChange:W=>{var R;return x&&x(((R=W==null?void 0:W.target)==null?void 0:R.value)||"")},placeholder:h,disabled:p,onFocus:T,inputMode:O,...F}),d]}),Mr=l.div`
  display: flex;
  height: ${({$height:e})=>`${e}px`};
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({theme:e,$error:t})=>t?e.colors.error:e.colors.border};
  opacity: ${({$disabled:e})=>e?.5:1};

  cursor: ${({$disabled:e})=>e?"not-allowed":"text"};
  :focus-within {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 4px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,Dr=l.input`
  border: none;
  padding: 0 12px;
  width: 100%;
  height: 100%;

  cursor: ${({disabled:e})=>e?"not-allowed":"text"};

  background-color: white;
  font-size: 1.6rem;
  color: ${({theme:e})=>e.colors.text.input};

  &:focus {
    outline: none;
  }

  [type='number'] {
    -moz-appearance: textfield;
  }
  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-input-placeholder {
    color: ${({theme:e,$selectedValue:t})=>e.colors.text.input+`${t?"":"8F"}`};
  }
  ::-moz-placeholder {
    color: ${({theme:e,$selectedValue:t})=>e.colors.text.input+`${t?"":"8F"}`};
  }
  ::-ms-placeholder {
    color: ${({theme:e,$selectedValue:t})=>e.colors.text.input+`${t?"":"8F"}`};
  }
  ::placeholder {
    color: ${({theme:e,$selectedValue:t})=>e.colors.text.input+`${t?"":"8F"}`};
  }
`,je=Fr,Ir=({value:e,name:t,error:i,showError:o=!0,readOnly:s=!1,label:d,className:x,leftIcon:h,rightIcon:u,padding:p,onChange:b,subLabel:$,placeholder:j,bottomLabel:O,type:T,disabled:F,height:W,secondLabel:R,onInputClick:_})=>n.jsx(ie,{padding:p,className:x,label:d,subLabel:$,secondLabel:R,error:i,showError:o,bottomLabel:O,children:n.jsx(je,{value:e,name:t,error:i,leftIcon:h,rightIcon:u,onChange:b,disabled:F,height:W,readOnly:s,onInputClick:_,placeholder:j,type:T})});var ke={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Ee=m.createContext&&m.createContext(ke),I=function(){return I=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},I.apply(this,arguments)},Ar=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]]);return i};function Ce(e){return e&&e.map(function(t,i){return m.createElement(t.tag,I({key:i},t.attr),Ce(t.child))})}function G(e){return function(t){return m.createElement(zr,I({attr:I({},e.attr)},t),Ce(e.child))}}function zr(e){var t=function(i){var o=e.attr,s=e.size,d=e.title,x=Ar(e,["attr","size","title"]),h=s||i.size||"1em",u;return i.className&&(u=i.className),e.className&&(u=(u?u+" ":"")+e.className),m.createElement("svg",I({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,o,x,{className:u,style:I(I({color:e.color||i.color},i.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),d&&m.createElement("title",null,d),e.children)};return Ee!==void 0?m.createElement(Ee.Consumer,null,function(i){return t(i)}):t(ke)}function Nr(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z"}}]})(e)}function Wr(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}}]})(e)}function Br(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(e)}function Vr(e){return G({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function Yr(e){return G({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"}}]})(e)}var A=(e=>(e.visibleOn="visibleOn",e.visibleOff="visibleOff",e.logout="logout",e.back="back",e.burger="burger",e.right="right",e))(A||{});const z=({name:e,className:t})=>{switch(e){case"visibleOn":return n.jsx(Wr,{className:t});case"visibleOff":return n.jsx(Nr,{className:t});case"back":return n.jsx(Br,{className:t});case"burger":return n.jsx(Vr,{className:t});case"right":return n.jsx(Yr,{className:t});case"logout":return n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[n.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),n.jsx("polyline",{points:"16 17 21 12 16 7"}),n.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]});default:return null}},Hr=({value:e,secondLabel:t,name:i,error:o,showError:s=!0,label:d,className:x,padding:h,onChange:u,placeholder:p,disabled:b,height:$,onInputClick:j})=>{const[O,T]=m.useState(!1);return n.jsx(ie,{padding:h,secondLabel:t,className:x,label:d,error:o,showError:s,children:n.jsx(je,{value:e,type:O?"text":"password",name:i,error:o,rightIcon:n.jsx(Ur,{onClick:()=>T(!O),children:n.jsx(Gr,{name:O?"visibleOn":"visibleOff"})}),onChange:u,disabled:b,height:$,onInputClick:j,placeholder:p})})},Ur=l.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`,Gr=l(z)`
  color: #9aa4b2;
  font-size: 2rem;
`,qr=Hr,Jr=({options:e,onChange:t,value:i,className:o=""})=>n.jsx(Xr,{className:o,children:n.jsx(Kr,{$numberOfColumns:e.length,children:e.map((s,d)=>n.jsx(Qr,{onClick:()=>t(s.value),$selected:s.value===i,children:s.label},`switch_btn_${d}`))})}),Xr=l.div`
  width: 100%;
  padding: 32px 0;
`,Kr=l.div`
  display: grid;

  grid-template-columns: repeat(${({$numberOfColumns:e})=>e}, 1fr);

  background-color: ${({theme:e})=>e.colors.cardBackground.primary};
  padding: 4px;
  border-radius: 99px;
`,Qr=l.div`
  display: flex;
  background-color: ${({$selected:e})=>e?"rgb(20, 83, 45)":"transparent"};
  color: ${({$selected:e,theme:t})=>e?"white":t.colors.text.primary};
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
`,Zr=Jr,et=({mapHost:e,mapPath:t="/edit?types[]=point&buffer=xl",value:i,onChange:o,...s})=>{const d=m.useRef(null),x=m.useCallback(u=>{var p,b;u.origin===e&&o(JSON.parse((b=(p=u==null?void 0:u.data)==null?void 0:p.mapIframeMsg)==null?void 0:b.data))},[o]);m.useEffect(()=>(window.addEventListener("message",x),()=>window.removeEventListener("message",x)),[x]);const h=()=>{var u,p;i&&((p=(u=d==null?void 0:d.current)==null?void 0:u.contentWindow)==null||p.postMessage({geom:i},"*"))};return n.jsx(rt,{src:`${e}${t}`,ref:d,width:"100%",allowFullScreen:!0,onLoad:h,"aria-hidden":"false",tabIndex:1,...s})},rt=l.iframe`
  height: 400px;
  width: 100%;
  display: block;
  border: 1px solid #d4d5de;
  border-radius: 4px;
  margin-top: 8px;
`;var q=function(){return q=Object.assign||function(e){for(var t,i=1,o=arguments.length;i<o;i++){t=arguments[i];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},q.apply(this,arguments)},tt=function(e,t){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(i[o[s]]=e[o[s]]);return i},_e=!1,ae=m.forwardRef(function(e,t){var i=e.style,o=tt(e,["style"]),s=nt();!_e&&(i!=null&&i.height)&&(_e=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var d=q(q({},i),{height:s?s+"px":"100vh"});return m.createElement("div",q({ref:t,style:d},o))});ae.displayName="Div100vh";function nt(){var e=m.useState(Oe),t=e[0],i=e[1],o=ot();return m.useEffect(function(){if(!o)return;function s(){var d=Oe();i(d)}return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}},[o]),o?t:null}function Oe(){return Se()?window.innerHeight:null}function ot(){var e=m.useState(!1),t=e[0],i=e[1];return m.useEffect(function(){Se()&&i(!0)},[]),t}function Se(){return typeof window<"u"&&typeof document<"u"}const N={mobileS:"(max-width: 320px)",mobileM:"(max-width: 425px)",mobileL:"(max-width: 868px)",desktop:"(min-width: 869px)"},it=e=>{const[t,i]=m.useState(!1),o=m.useCallback(()=>{const s=window.matchMedia(e);i(s.matches)},[e]);return m.useEffect(()=>{o()},[o]),m.useEffect(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[o]),t};/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Te;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Te||(Te={}));function Pe(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function at(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}var Re;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Re||(Re={}));function se(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[i,o]=st(e.path,e.caseSensitive,e.end),s=t.match(i);if(!s)return null;let d=s[0],x=d.replace(/(.)\/+$/,"$1"),h=s.slice(1);return{params:o.reduce((p,b,$)=>{let{paramName:j,isOptional:O}=b;if(j==="*"){let F=h[$]||"";x=d.slice(0,d.length-F.length).replace(/(.)\/+$/,"$1")}const T=h[$];return O&&!T?p[j]=void 0:p[j]=(T||"").replace(/%2F/g,"/"),p},{}),pathname:d,pathnameBase:x,pattern:e}}function st(e,t,i){t===void 0&&(t=!1),i===void 0&&(i=!0),at(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let o=[],s="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(x,h,u)=>(o.push({paramName:h,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(o.push({paramName:"*"}),s+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i?s+="\\/*$":e!==""&&e!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,t?void 0:"i"),o]}const Le=["post","put","patch","delete"];new Set(Le);const ct=["get",...Le];new Set(ct);/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const lt=L.createContext(null);process.env.NODE_ENV!=="production"&&(lt.displayName="DataRouter");const ut=L.createContext(null);process.env.NODE_ENV!=="production"&&(ut.displayName="DataRouterState");const dt=L.createContext(null);process.env.NODE_ENV!=="production"&&(dt.displayName="Await");const ft=L.createContext(null);process.env.NODE_ENV!=="production"&&(ft.displayName="Navigation");const ce=L.createContext(null);process.env.NODE_ENV!=="production"&&(ce.displayName="Location");const pt=L.createContext({outlet:null,matches:[],isDataRoute:!1});process.env.NODE_ENV!=="production"&&(pt.displayName="Route");const ht=L.createContext(null);process.env.NODE_ENV!=="production"&&(ht.displayName="RouteError");function gt(){return L.useContext(ce)!=null}function Fe(){return gt()||(process.env.NODE_ENV!=="production"?Pe(!1,"useLocation() may be used only in the context of a <Router> component."):Pe(!1)),L.useContext(ce).location}new Promise(()=>{});const xt=({label:e,icon:t,onClick:i,isActive:o=!1})=>n.jsxs(vt,{$isActive:o,onClick:i,children:[n.jsx(mt,{children:t?n.jsx(bt,{name:t}):null}),e,n.jsx(z,{name:A.right})]}),vt=l.div`
  cursor: pointer;
  grid-template-columns: 48px 1fr 32px;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  background-color: ${({theme:e})=>e.colors.largeButton.GREY};
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  display: grid;
  text-decoration: none;
  gap: 12px;

  ${({$isActive:e,theme:t})=>e&&`
    background-color: #f5f6fe;
    border: 1px solid ${t.colors.primary};
  `};

  &:hover {
    background-color: #f5f6fe;
    border: 1px solid ${({theme:e})=>e.colors.primary};
  }
`,mt=l.div`
  background-color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`,bt=l(z)``,Me=xt,wt=({visible:e,children:t,onClose:i})=>{const o=m.useCallback(s=>{s.key==="Escape"&&i&&i()},[i]);return m.useEffect(()=>(window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)),[e,o]),e?n.jsx(yt,{onClick:s=>{s.target===s.currentTarget&&i&&i()},children:t}):n.jsx(m.Fragment,{})},yt=l.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  margin: auto;
  background-color: #0b1b607a;
  z-index: 1001;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  overflow-y: auto;
  padding: 16px;
  @media ${N.mobileL} {
    padding: 0px;
  }
`,De=wt,$t=({onClose:e,visible:t=!0,loggedIn:i,routes:o,onLogin:s,onLogout:d,onRouteSelected:x})=>{const h=Fe();return n.jsx(De,{visible:t,onClose:e,children:n.jsx(kt,{children:n.jsxs(Et,{children:[n.jsx(_t,{children:n.jsxs(Ct,{onClick:e,children:[n.jsx(jt,{name:"close"}),"Uždaryti"]})}),n.jsxs(Ot,{children:[n.jsx(St,{children:"Meniu"}),n.jsx(Tt,{children:"Pasirinkite dominančią sritį"})]}),o==null?void 0:o.map((u,p)=>n.jsx(Me,{isActive:!!se({path:u.slug,end:!1},h.pathname),label:u.title||"",icon:u.iconName,onClick:()=>{x(u.slug),e()}},`menu_button_${p}`)),n.jsx(Me,{label:i?"Atsijungti":"Prisijungti",icon:A.logout,onClick:()=>{i?d():(s(),e())}})]})})})},jt=l(z)`
  cursor: pointer;
  font-size: 2.4rem;
`,kt=l(ae)`
  width: 100%;
`,Et=l.div`
  background-color: white;
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 0 16px 24px 16px;
  @media ${N.desktop} {
    max-width: 700px;
    padding: 40px;
    flex-basis: auto;
    border-radius: 16px;
    min-height: fit-content;
  }
`,Ct=l.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 4px;
  text-decoration: none;
  margin: 0 0 0 auto;
`,_t=l.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 48px;
  justify-content: space-between;
  padding: 16px 0;
`,Ot=l.div`
  margin: 16px 0 32px 0;
  justify-content: center;
`,St=l.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
`,Tt=l.div`
  line-height: 26px;
  margin-top: 4px;
  text-align: center;
`,Ie=$t,Pt=({onGoBack:e,onLogin:t,onLogout:i,onRouteSelected:o})=>{const[s,d]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(Rt,{children:[n.jsx(Dt,{onClick:e,children:n.jsx(Mt,{name:A.back})}),n.jsxs(Lt,{onClick:()=>d(!0),children:[n.jsx(Ft,{name:A.burger}),"Meniu"]})]}),n.jsx(Ie,{visible:s,onClose:()=>d(!1),onLogin:t,onLogout:i,onRouteSelected:o})]})},Rt=l.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  background-color: white;
  @media ${N.desktop} {
    display: none;
  }
`,Lt=l.div`
  align-items: center;
  color: ${({theme:e})=>e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`,Ft=l(z)`
  margin-right: 4px;
  font-size: 2.4rem;
`,Mt=l(z)`
  align-items: center;
  display: flex;
  font-size: 2.4rem;
  gap: 4px;
  text-decoration: none;
`,Dt=l.div`
  padding: 16px 16px 16px 0;
`,It=Pt,At=({logo:e,onGoHome:t})=>{const[i,o]=m.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(zt,{children:[n.jsx("div",{onClick:t,children:e}),n.jsxs(Nt,{onClick:()=>o(!0),children:[n.jsx(Wt,{name:A.burger}),"Meniu"]})]}),n.jsx(Ie,{visible:i,onClose:()=>o(!1)})]})},zt=l.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  background-color: white;
  @media ${N.desktop} {
    display: none;
  }
`,Nt=l.div`
  align-items: center;
  color: ${({theme:e})=>e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`,Wt=l(z)`
  margin-right: 4px;
  font-size: 2rem;
`,Bt=At,Vt=({loggedIn:e,loginSlug:t,routes:i,logo:o,onLogin:s,onLogout:d,onRouteSelected:x,currentRoute:h})=>{const u=Fe();return n.jsxs(Ht,{children:[n.jsx(Yt,{children:o}),i.map((p,b)=>n.jsxs(ue,{onClick:()=>x(p.slug),$isActive:!!se({path:p.slug,end:!1},h.slug),children:[n.jsx(J,{name:p.iconName}),n.jsx(le,{children:p.title})]},`sidebar_btn_${p.slug}_${b}`)),n.jsx(Ut,{}),e?n.jsxs(ue,{onClick:()=>d(),$isActive:!1,children:[n.jsx(J,{name:A.logout}),n.jsx(le,{children:"Atsijungti"})]}):n.jsxs(ue,{onClick:s,$isActive:!!se({path:t,end:!1},u.pathname),children:[n.jsx(J,{name:A.logout}),n.jsx(le,{children:"Prisijungti"})]})]})},Yt=l.div`
  margin-bottom: 20px;
`,J=l(z)`
  cursor: pointer;
  font-size: 2.4rem;
  svg {
    stroke: ${({theme:e})=>e.colors.primary};
  }
  rect {
    stroke: ${({theme:e})=>e.colors.primary};
  }
  path {
    stroke: ${({theme:e})=>e.colors.primary};
  }
  circle {
    stroke: ${({theme:e})=>e.colors.primary};
  }
  polyline {
    stroke: ${({theme:e})=>e.colors.primary};
  }
  line {
    stroke: ${({theme:e})=>e.colors.primary};
  }
`,le=l.div`
  font-size: 1.6rem;
  font-weight: 500;
`,Ht=l.nav`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
  height: 100%;
  min-width: 320px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.02);
  gap: 4px;
`,ue=l.div`
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 8px;
  border-radius: 5px;
  transition: all 0.2s ease-out;
  color: ${({theme:e})=>e.colors.text.retroBlack};

  ${({$isActive:e,theme:t})=>e&&`


 ${J} {
  rect {
      stroke: black;
    }
    path {
      stroke: black;
    }
    circle {
      stroke: black;
    }
    polyline {
      stroke: black;
    }
    line {
      stroke: black;
    }
  }

    background-color: ${t.colors.primary};
  
  
  `};

  &:hover ${J} {
    rect {
      stroke: black;
    }
    path {
      stroke: black;
    }
    circle {
      stroke: black;
    }
    polyline {
      stroke: black;
    }
    line {
      stroke: black;
    }
  }

  &:hover {
    background-color: ${({theme:e})=>e.colors.primary};
  }
`,Ut=l.div`
  width: 100%;
  height: 1px;
  background-color: #d4d5de;
  margin: 16px 0;
`,Gt=Vt,qt=({children:e,onScroll:t=()=>{},loggedIn:i,loginSlug:o,currentRoute:s,routes:d,logo:x,onGoHome:h,onGoBack:u,onLogin:p,onLogout:b,onRouteSelected:$})=>{const j=it(N.mobileL);return n.jsxs(Jt,{children:[!j&&n.jsx(Gt,{loggedIn:i,loginSlug:o,routes:d,logo:x,currentRoute:s,onLogin:p,onLogout:b,onRouteSelected:$}),n.jsx(Xt,{onScroll:t,children:n.jsxs(Kt,{children:[s!=null&&s.back?n.jsx(It,{onGoBack:u,onLogin:p,onLogout:b,onRouteSelected:$}):n.jsx(Bt,{logo:x,onGoHome:h}),e]})})]})},Jt=l(ae)`
  width: 100vw;
  display: flex;
`,Xt=l.div`
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  background-color: white;
`,Kt=l.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  @media ${N.desktop} {
    padding: 40px 16px;
    height: fit-content;
    background-color: #f7f7f7;
  }
`,Qt=({children:e,title:t,customSubTitle:i,customTitle:o,currentRoute:s})=>{const d=t||(s==null?void 0:s.title);return n.jsxs(en,{children:[o||d&&n.jsx(rn,{children:d}),i||(s==null?void 0:s.description)&&n.jsx(Zt,{children:s==null?void 0:s.description}),e]})},Zt=l.div`
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: 16px;
`,en=l.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-self: center;
  align-items: center;
  padding: 0 12px;
  background-color: white;
  @media ${N.desktop} {
    max-width: 700px;
    border-radius: 16px;
    margin: 0 auto;
    padding: 40px;
    overflow-y: auto;
    height: fit-content;
  }
`,rn=l.div`
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: 3.2rem;
  font-weight: 800;
  margin: 16px 0;
  text-align: center;
`;C.Button=pr,C.CheckBox=wr,C.ContentLayout=Qt,C.DefaultLayout=qt,C.FieldWrapper=ie,C.MapField=et,C.Modal=De,C.PasswordField=qr,C.Switch=kr,C.Tabs=Zr,C.TextField=Ir,Object.defineProperty(C,Symbol.toStringTag,{value:"Module"})});
