(function(_,b){typeof exports=="object"&&typeof module<"u"?b(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],b):(_=typeof globalThis<"u"?globalThis:_||self,b(_["design-system"]={},_.React,_["styled-components"]))})(this,function(_,b,f){"use strict";function jt(e){const r=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(e){for(const n in e)if(n!=="default"){const i=Object.getOwnPropertyDescriptor(e,n);Object.defineProperty(r,n,i.get?i:{enumerable:!0,get:()=>e[n]})}}return r.default=e,Object.freeze(r)}const E=jt(b);var se={exports:{}},H={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Se;function Et(){if(Se)return H;Se=1;var e=b,r=Symbol.for("react.element"),n=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,o=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,u={key:!0,ref:!0,__self:!0,__source:!0};function d(h,c,v){var g,y={},j=null,S=null;v!==void 0&&(j=""+v),c.key!==void 0&&(j=""+c.key),c.ref!==void 0&&(S=c.ref);for(g in c)i.call(c,g)&&!u.hasOwnProperty(g)&&(y[g]=c[g]);if(h&&h.defaultProps)for(g in c=h.defaultProps,c)y[g]===void 0&&(y[g]=c[g]);return{$$typeof:r,type:h,key:j,ref:S,props:y,_owner:o.current}}return H.Fragment=n,H.jsx=d,H.jsxs=d,H}var J={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Te;function kt(){return Te||(Te=1,process.env.NODE_ENV!=="production"&&function(){var e=b,r=Symbol.for("react.element"),n=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),u=Symbol.for("react.profiler"),d=Symbol.for("react.provider"),h=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),v=Symbol.for("react.suspense"),g=Symbol.for("react.suspense_list"),y=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),P=Symbol.iterator,M="@@iterator";function B(t){if(t===null||typeof t!="object")return null;var s=P&&t[P]||t[M];return typeof s=="function"?s:null}var N=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function O(t){{for(var s=arguments.length,l=new Array(s>1?s-1:0),p=1;p<s;p++)l[p-1]=arguments[p];Cn("error",t,l)}}function Cn(t,s,l){{var p=N.ReactDebugCurrentFrame,w=p.getStackAddendum();w!==""&&(s+="%s",l=l.concat([w]));var $=l.map(function(m){return String(m)});$.unshift("Warning: "+s),Function.prototype.apply.call(console[t],console,$)}}var _n=!1,On=!1,Sn=!1,Tn=!1,Rn=!1,Ze;Ze=Symbol.for("react.module.reference");function Pn(t){return!!(typeof t=="string"||typeof t=="function"||t===i||t===u||Rn||t===o||t===v||t===g||Tn||t===S||_n||On||Sn||typeof t=="object"&&t!==null&&(t.$$typeof===j||t.$$typeof===y||t.$$typeof===d||t.$$typeof===h||t.$$typeof===c||t.$$typeof===Ze||t.getModuleId!==void 0))}function Ln(t,s,l){var p=t.displayName;if(p)return p;var w=s.displayName||s.name||"";return w!==""?l+"("+w+")":l}function et(t){return t.displayName||"Context"}function D(t){if(t==null)return null;if(typeof t.tag=="number"&&O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case i:return"Fragment";case n:return"Portal";case u:return"Profiler";case o:return"StrictMode";case v:return"Suspense";case g:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case h:var s=t;return et(s)+".Consumer";case d:var l=t;return et(l._context)+".Provider";case c:return Ln(t,t.render,"ForwardRef");case y:var p=t.displayName||null;return p!==null?p:D(t.type)||"Memo";case j:{var w=t,$=w._payload,m=w._init;try{return D(m($))}catch{return null}}}return null}var V=Object.assign,K=0,tt,rt,nt,it,ot,at,st;function lt(){}lt.__reactDisabledLog=!0;function Nn(){{if(K===0){tt=console.log,rt=console.info,nt=console.warn,it=console.error,ot=console.group,at=console.groupCollapsed,st=console.groupEnd;var t={configurable:!0,enumerable:!0,value:lt,writable:!0};Object.defineProperties(console,{info:t,log:t,warn:t,error:t,group:t,groupCollapsed:t,groupEnd:t})}K++}}function Mn(){{if(K--,K===0){var t={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:V({},t,{value:tt}),info:V({},t,{value:rt}),warn:V({},t,{value:nt}),error:V({},t,{value:it}),group:V({},t,{value:ot}),groupCollapsed:V({},t,{value:at}),groupEnd:V({},t,{value:st})})}K<0&&O("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var ye=N.ReactCurrentDispatcher,$e;function re(t,s,l){{if($e===void 0)try{throw Error()}catch(w){var p=w.stack.trim().match(/\n( *(at )?)/);$e=p&&p[1]||""}return`
`+$e+t}}var je=!1,ne;{var Dn=typeof WeakMap=="function"?WeakMap:Map;ne=new Dn}function ct(t,s){if(!t||je)return"";{var l=ne.get(t);if(l!==void 0)return l}var p;je=!0;var w=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var $;$=ye.current,ye.current=null,Nn();try{if(s){var m=function(){throw Error()};if(Object.defineProperty(m.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(m,[])}catch(I){p=I}Reflect.construct(t,[],m)}else{try{m.call()}catch(I){p=I}t.call(m.prototype)}}else{try{throw Error()}catch(I){p=I}t()}}catch(I){if(I&&p&&typeof I.stack=="string"){for(var x=I.stack.split(`
`),T=p.stack.split(`
`),k=x.length-1,C=T.length-1;k>=1&&C>=0&&x[k]!==T[C];)C--;for(;k>=1&&C>=0;k--,C--)if(x[k]!==T[C]){if(k!==1||C!==1)do if(k--,C--,C<0||x[k]!==T[C]){var L=`
`+x[k].replace(" at new "," at ");return t.displayName&&L.includes("<anonymous>")&&(L=L.replace("<anonymous>",t.displayName)),typeof t=="function"&&ne.set(t,L),L}while(k>=1&&C>=0);break}}}finally{je=!1,ye.current=$,Mn(),Error.prepareStackTrace=w}var Y=t?t.displayName||t.name:"",$t=Y?re(Y):"";return typeof t=="function"&&ne.set(t,$t),$t}function In(t,s,l){return ct(t,!1)}function Fn(t){var s=t.prototype;return!!(s&&s.isReactComponent)}function ie(t,s,l){if(t==null)return"";if(typeof t=="function")return ct(t,Fn(t));if(typeof t=="string")return re(t);switch(t){case v:return re("Suspense");case g:return re("SuspenseList")}if(typeof t=="object")switch(t.$$typeof){case c:return In(t.render);case y:return ie(t.type,s,l);case j:{var p=t,w=p._payload,$=p._init;try{return ie($(w),s,l)}catch{}}}return""}var oe=Object.prototype.hasOwnProperty,ut={},ft=N.ReactDebugCurrentFrame;function ae(t){if(t){var s=t._owner,l=ie(t.type,t._source,s?s.type:null);ft.setExtraStackFrame(l)}else ft.setExtraStackFrame(null)}function An(t,s,l,p,w){{var $=Function.call.bind(oe);for(var m in t)if($(t,m)){var x=void 0;try{if(typeof t[m]!="function"){var T=Error((p||"React class")+": "+l+" type `"+m+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof t[m]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw T.name="Invariant Violation",T}x=t[m](s,m,p,l,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(k){x=k}x&&!(x instanceof Error)&&(ae(w),O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",p||"React class",l,m,typeof x),ae(null)),x instanceof Error&&!(x.message in ut)&&(ut[x.message]=!0,ae(w),O("Failed %s type: %s",l,x.message),ae(null))}}}var zn=Array.isArray;function Ee(t){return zn(t)}function Wn(t){{var s=typeof Symbol=="function"&&Symbol.toStringTag,l=s&&t[Symbol.toStringTag]||t.constructor.name||"Object";return l}}function Bn(t){try{return dt(t),!1}catch{return!0}}function dt(t){return""+t}function pt(t){if(Bn(t))return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Wn(t)),dt(t)}var Q=N.ReactCurrentOwner,Vn={key:!0,ref:!0,__self:!0,__source:!0},ht,gt,ke;ke={};function Un(t){if(oe.call(t,"ref")){var s=Object.getOwnPropertyDescriptor(t,"ref").get;if(s&&s.isReactWarning)return!1}return t.ref!==void 0}function Yn(t){if(oe.call(t,"key")){var s=Object.getOwnPropertyDescriptor(t,"key").get;if(s&&s.isReactWarning)return!1}return t.key!==void 0}function Hn(t,s){if(typeof t.ref=="string"&&Q.current&&s&&Q.current.stateNode!==s){var l=D(Q.current.type);ke[l]||(O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',D(Q.current.type),t.ref),ke[l]=!0)}}function Jn(t,s){{var l=function(){ht||(ht=!0,O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",s))};l.isReactWarning=!0,Object.defineProperty(t,"key",{get:l,configurable:!0})}}function qn(t,s){{var l=function(){gt||(gt=!0,O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",s))};l.isReactWarning=!0,Object.defineProperty(t,"ref",{get:l,configurable:!0})}}var Gn=function(t,s,l,p,w,$,m){var x={$$typeof:r,type:t,key:s,ref:l,props:m,_owner:$};return x._store={},Object.defineProperty(x._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(x,"_self",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.defineProperty(x,"_source",{configurable:!1,enumerable:!1,writable:!1,value:w}),Object.freeze&&(Object.freeze(x.props),Object.freeze(x)),x};function Xn(t,s,l,p,w){{var $,m={},x=null,T=null;l!==void 0&&(pt(l),x=""+l),Yn(s)&&(pt(s.key),x=""+s.key),Un(s)&&(T=s.ref,Hn(s,w));for($ in s)oe.call(s,$)&&!Vn.hasOwnProperty($)&&(m[$]=s[$]);if(t&&t.defaultProps){var k=t.defaultProps;for($ in k)m[$]===void 0&&(m[$]=k[$])}if(x||T){var C=typeof t=="function"?t.displayName||t.name||"Unknown":t;x&&Jn(m,C),T&&qn(m,C)}return Gn(t,x,T,w,p,Q.current,m)}}var Ce=N.ReactCurrentOwner,vt=N.ReactDebugCurrentFrame;function U(t){if(t){var s=t._owner,l=ie(t.type,t._source,s?s.type:null);vt.setExtraStackFrame(l)}else vt.setExtraStackFrame(null)}var _e;_e=!1;function Oe(t){return typeof t=="object"&&t!==null&&t.$$typeof===r}function xt(){{if(Ce.current){var t=D(Ce.current.type);if(t)return`

Check the render method of \``+t+"`."}return""}}function Kn(t){{if(t!==void 0){var s=t.fileName.replace(/^.*[\\\/]/,""),l=t.lineNumber;return`

Check your code at `+s+":"+l+"."}return""}}var mt={};function Qn(t){{var s=xt();if(!s){var l=typeof t=="string"?t:t.displayName||t.name;l&&(s=`

Check the top-level render call using <`+l+">.")}return s}}function bt(t,s){{if(!t._store||t._store.validated||t.key!=null)return;t._store.validated=!0;var l=Qn(s);if(mt[l])return;mt[l]=!0;var p="";t&&t._owner&&t._owner!==Ce.current&&(p=" It was passed a child from "+D(t._owner.type)+"."),U(t),O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',l,p),U(null)}}function wt(t,s){{if(typeof t!="object")return;if(Ee(t))for(var l=0;l<t.length;l++){var p=t[l];Oe(p)&&bt(p,s)}else if(Oe(t))t._store&&(t._store.validated=!0);else if(t){var w=B(t);if(typeof w=="function"&&w!==t.entries)for(var $=w.call(t),m;!(m=$.next()).done;)Oe(m.value)&&bt(m.value,s)}}}function Zn(t){{var s=t.type;if(s==null||typeof s=="string")return;var l;if(typeof s=="function")l=s.propTypes;else if(typeof s=="object"&&(s.$$typeof===c||s.$$typeof===y))l=s.propTypes;else return;if(l){var p=D(s);An(l,t.props,"prop",p,t)}else if(s.PropTypes!==void 0&&!_e){_e=!0;var w=D(s);O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",w||"Unknown")}typeof s.getDefaultProps=="function"&&!s.getDefaultProps.isReactClassApproved&&O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function ei(t){{for(var s=Object.keys(t.props),l=0;l<s.length;l++){var p=s[l];if(p!=="children"&&p!=="key"){U(t),O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",p),U(null);break}}t.ref!==null&&(U(t),O("Invalid attribute `ref` supplied to `React.Fragment`."),U(null))}}function yt(t,s,l,p,w,$){{var m=Pn(t);if(!m){var x="";(t===void 0||typeof t=="object"&&t!==null&&Object.keys(t).length===0)&&(x+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var T=Kn(w);T?x+=T:x+=xt();var k;t===null?k="null":Ee(t)?k="array":t!==void 0&&t.$$typeof===r?(k="<"+(D(t.type)||"Unknown")+" />",x=" Did you accidentally export a JSX literal instead of a component?"):k=typeof t,O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",k,x)}var C=Xn(t,s,l,w,$);if(C==null)return C;if(m){var L=s.children;if(L!==void 0)if(p)if(Ee(L)){for(var Y=0;Y<L.length;Y++)wt(L[Y],t);Object.freeze&&Object.freeze(L)}else O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else wt(L,t)}return t===i?ei(C):Zn(C),C}}function ti(t,s,l){return yt(t,s,l,!0)}function ri(t,s,l){return yt(t,s,l,!1)}var ni=ri,ii=ti;J.Fragment=i,J.jsx=ni,J.jsxs=ii}()),J}process.env.NODE_ENV==="production"?se.exports=Et():se.exports=kt();var a=se.exports;const Ct=({color:e="#000"})=>a.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",children:a.jsx("path",{fill:e,d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",children:a.jsx("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})});var Re=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e.DANGER="danger",e.SUCCESS="success",e.TRANSPARENT="transparent",e))(Re||{});const Pe=({variant:e="primary",route:r,children:n,height:i=56,padding:o="11px 20px",leftIcon:u,radius:d="28px",buttonPadding:h,rightIcon:c,color:v,type:g,loading:y=!1,className:j,disabled:S=!1,fontWeight:P="600",...M})=>a.jsxs(_t,{className:j,$padding:o,$fontWeight:P,$variant:e,$height:i||40,type:g,disabled:S,$radius:d,...M,children:[u,y?a.jsx(Ct,{color:"white"}):n,c]}),_t=f.button`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  height: ${({$height:e})=>`${e}px`};
  border-radius: ${({$radius:e})=>e};
  padding: ${({$padding:e})=>e};
  background-color: ${({$variant:e,theme:r})=>r.colors.buttonBackground[e]};
  color: ${({$variant:e,theme:r})=>r.colors.buttonText[e]};
  border: ${({$variant:e})=>e==="transparent"?"0":"1px"} solid
    ${({$variant:e})=>e!=="transparent"?"transparent":" rgb(35, 31, 32)"};
  font-weight: ${({$fontWeight:e})=>e};
  font-size: 1.8rem;
  :hover {
    background-color: ${({$variant:e,theme:r})=>r.colors.hover[e]};
  }
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  opacity: ${({disabled:e})=>e?.6:1};
  width: 100%;
`;Pe.colors=Re;const Ot=Pe,St=({value:e,name:r,onChange:n,disabled:i=!1,label:o,error:u,className:d,intermediate:h})=>a.jsx(a.Fragment,{children:a.jsxs(Tt,{disabled:i,className:d,onClick:()=>{!i&&n(!e)},children:[a.jsxs(Pt,{intermediate:h,disabled:i,error:u,checked:e,children:[a.jsx(Nt,{type:"checkbox",name:r,checked:e||!1,disabled:i,onChange:()=>{}}),a.jsx(Lt,{checked:e||!1,intermediate:h,disabled:i})]}),a.jsx(Rt,{children:o})]})}),Tt=f.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,Rt=f.div`
  text-align: left;
  font-size: 1.4rem;
  color: #4b5565;
`,Pt=f.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: ${({theme:e,checked:r,error:n,intermediate:i})=>r||i?e.colors.primary:n?e.colors.danger:e.colors.border};
  opacity: ${({disabled:e})=>e?.48:1};
`,Lt=f.label`
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
  cursor: pointer;
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  left: 2px;
  top: 2px;

  background-color: ${({intermediate:e,checked:r})=>e||r?"transparent":"white"};

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

    ${({checked:e,intermediate:r})=>r||e?`
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
`,Nt=f.input`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -4px;
  left: -4px;
  z-index: 1;
  opacity: 0;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,Mt=St,Dt=({value:e,name:r,onChange:n})=>a.jsx(a.Fragment,{children:a.jsxs(It,{children:[a.jsx(Ft,{type:"checkbox",name:r,checked:e,onChange:n}),a.jsx(Z,{})]})}),It=f.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`,Z=f.span`
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
`,Ft=f.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${Z} {
    background-color: ${({theme:e})=>e.colors.primary};
  }

  &:focus + ${Z} {
    box-shadow: 0 0 1px ${({theme:e})=>e.colors.primary};
  }

  &:checked + ${Z}:before {
    transform: translateX(20px); // Move the toggle to the right when checked
  }
`,At=Dt,zt=({error:e})=>e?a.jsx(Wt,{children:e}):a.jsx(a.Fragment,{}),Wt=f.label`
  display: inline-block;
  width: 100%;
  color: ${({theme:e})=>e.colors.error};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4rem;
  margin-bottom: 8px;
`,Bt=({error:e,showError:r=!0,label:n,className:i,padding:o="0",onClick:u,handleBlur:d,subLabel:h,bottomLabel:c,secondLabel:v,children:g})=>a.jsxs(Vt,{tabIndex:-1,onBlur:d,className:i,padding:o,onClick:u,children:[a.jsxs(Ut,{children:[!!n&&a.jsxs(Jt,{children:[a.jsx(Ht,{htmlFor:n,children:n}),!!h&&a.jsx(qt,{children:h})]}),v]}),g,r&&a.jsx(zt,{error:e}),c&&a.jsx(Yt,{children:c})]}),Vt=f.div`
  display: block;
  position: relative;
  padding: ${({padding:e})=>e};
`,Ut=f.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,Yt=f.div`
  margin-top: 6px;
  font-size: 1.2rem;
  color: #697586;
`,Ht=f.label`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,Jt=f.div`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`,qt=f.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`,le=Bt,Gt=({value:e,name:r,error:n,readOnly:i=!1,leftIcon:o,rightIcon:u,onChange:d,placeholder:h,type:c="text",disabled:v,height:g=56,selectedValue:y=!1,onInputClick:j,inputMode:S="text",onFocus:P=()=>{},...M})=>a.jsxs(Xt,{$error:!!n,$height:g||40,$disabled:v||!1,children:[o,a.jsx(Kt,{$selectedValue:y,onClick:()=>j?j():null,readOnly:i,type:c,name:r,autoComplete:"off",value:e||"",onChange:B=>{var N;return d&&d(((N=B==null?void 0:B.target)==null?void 0:N.value)||"")},placeholder:h,disabled:v,onFocus:P,inputMode:S,...M}),u]}),Xt=f.div`
  display: flex;
  height: ${({$height:e})=>`${e}px`};
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({theme:e,$error:r})=>r?e.colors.error:e.colors.border};
  opacity: ${({$disabled:e})=>e?.5:1};

  cursor: ${({$disabled:e})=>e?"not-allowed":"text"};
  :focus-within {
    border-color: ${({theme:e})=>e.colors.primary};
    box-shadow: 0 0 0 4px ${({theme:e})=>`${e.colors.primary}33`};
  }
`,Kt=f.input`
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
    color: ${({theme:e,$selectedValue:r})=>e.colors.text.input+`${r?"":"8F"}`};
  }
  ::-moz-placeholder {
    color: ${({theme:e,$selectedValue:r})=>e.colors.text.input+`${r?"":"8F"}`};
  }
  ::-ms-placeholder {
    color: ${({theme:e,$selectedValue:r})=>e.colors.text.input+`${r?"":"8F"}`};
  }
  ::placeholder {
    color: ${({theme:e,$selectedValue:r})=>e.colors.text.input+`${r?"":"8F"}`};
  }
`,Le=Gt,Qt=({value:e,name:r,error:n,showError:i=!0,readOnly:o=!1,label:u,className:d,leftIcon:h,rightIcon:c,padding:v,onChange:g,subLabel:y,placeholder:j,bottomLabel:S,type:P,disabled:M,height:B,secondLabel:N,onInputClick:O})=>a.jsx(le,{padding:v,className:d,label:u,subLabel:y,secondLabel:N,error:n,showError:i,bottomLabel:S,children:a.jsx(Le,{value:e,name:r,error:n,leftIcon:h,rightIcon:c,onChange:g,disabled:M,height:B,readOnly:o,onInputClick:O,placeholder:j,type:P})});var Ne={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Me=b.createContext&&b.createContext(Ne),F=function(){return F=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},F.apply(this,arguments)},Zt=function(e,r){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)r.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]]);return n};function De(e){return e&&e.map(function(r,n){return b.createElement(r.tag,F({key:n},r.attr),De(r.child))})}function q(e){return function(r){return b.createElement(er,F({attr:F({},e.attr)},r),De(e.child))}}function er(e){var r=function(n){var i=e.attr,o=e.size,u=e.title,d=Zt(e,["attr","size","title"]),h=o||n.size||"1em",c;return n.className&&(c=n.className),e.className&&(c=(c?c+" ":"")+e.className),b.createElement("svg",F({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,i,d,{className:c,style:F(F({color:e.color||n.color},n.style),e.style),height:h,width:h,xmlns:"http://www.w3.org/2000/svg"}),u&&b.createElement("title",null,u),e.children)};return Me!==void 0?b.createElement(Me.Consumer,null,function(n){return r(n)}):r(Ne)}function tr(e){return q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z"}}]})(e)}function rr(e){return q({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}}]})(e)}function nr(e){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(e)}function ir(e){return q({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function or(e){return q({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"}}]})(e)}var A=(e=>(e.visibleOn="visibleOn",e.visibleOff="visibleOff",e.logout="logout",e.back="back",e.burger="burger",e.right="right",e))(A||{});const z=({name:e,className:r})=>{switch(e){case"visibleOn":return a.jsx(rr,{className:r});case"visibleOff":return a.jsx(tr,{className:r});case"back":return a.jsx(nr,{className:r});case"burger":return a.jsx(ir,{className:r});case"right":return a.jsx(or,{className:r});case"logout":return a.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:r,children:[a.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),a.jsx("polyline",{points:"16 17 21 12 16 7"}),a.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]});default:return null}},ar=({value:e,secondLabel:r,name:n,error:i,showError:o=!0,label:u,className:d,padding:h,onChange:c,placeholder:v,disabled:g,height:y,onInputClick:j})=>{const[S,P]=b.useState(!1);return a.jsx(le,{padding:h,secondLabel:r,className:d,label:u,error:i,showError:o,children:a.jsx(Le,{value:e,type:S?"text":"password",name:n,error:i,rightIcon:a.jsx(sr,{onClick:()=>P(!S),children:a.jsx(lr,{name:S?"visibleOn":"visibleOff"})}),onChange:c,disabled:g,height:y,onInputClick:j,placeholder:v})})},sr=f.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`,lr=f(z)`
  color: #9aa4b2;
  font-size: 2rem;
`,cr=ar,ur=({options:e,onChange:r,value:n,className:i=""})=>a.jsx(fr,{className:i,children:a.jsx(dr,{$numberOfColumns:e.length,children:e.map((o,u)=>a.jsx(pr,{onClick:()=>r(o.value),$selected:o.value===n,children:o.label},`switch_btn_${u}`))})}),fr=f.div`
  width: 100%;
  padding: 32px 0;
`,dr=f.div`
  display: grid;

  grid-template-columns: repeat(${({$numberOfColumns:e})=>e}, 1fr);

  background-color: ${({theme:e})=>e.colors.cardBackground.primary};
  padding: 4px;
  border-radius: 99px;
`,pr=f.div`
  display: flex;
  background-color: ${({$selected:e})=>e?"rgb(20, 83, 45)":"transparent"};
  color: ${({$selected:e,theme:r})=>e?"white":r.colors.text.primary};
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
`,hr=ur,gr=({mapHost:e,mapPath:r="/edit?types[]=point&buffer=xl",value:n,onChange:i,...o})=>{const u=b.useRef(null),d=b.useCallback(c=>{var v,g;c.origin===e&&i(JSON.parse((g=(v=c==null?void 0:c.data)==null?void 0:v.mapIframeMsg)==null?void 0:g.data))},[i]);b.useEffect(()=>(window.addEventListener("message",d),()=>window.removeEventListener("message",d)),[d]);const h=()=>{var c,v;n&&((v=(c=u==null?void 0:u.current)==null?void 0:c.contentWindow)==null||v.postMessage({geom:n},"*"))};return a.jsx(vr,{src:`${e}${r}`,ref:u,width:"100%",allowFullScreen:!0,onLoad:h,"aria-hidden":"false",tabIndex:1,...o})},vr=f.iframe`
  height: 400px;
  width: 100%;
  display: block;
  border: 1px solid #d4d5de;
  border-radius: 4px;
  margin-top: 8px;
`;var G=function(){return G=Object.assign||function(e){for(var r,n=1,i=arguments.length;n<i;n++){r=arguments[n];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},G.apply(this,arguments)},xr=function(e,r){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&r.indexOf(i)<0&&(n[i]=e[i]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,i=Object.getOwnPropertySymbols(e);o<i.length;o++)r.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(e,i[o])&&(n[i[o]]=e[i[o]]);return n},Ie=!1,ce=b.forwardRef(function(e,r){var n=e.style,i=xr(e,["style"]),o=mr();!Ie&&(n!=null&&n.height)&&(Ie=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var u=G(G({},n),{height:o?o+"px":"100vh"});return b.createElement("div",G({ref:r,style:u},i))});ce.displayName="Div100vh";function mr(){var e=b.useState(Fe),r=e[0],n=e[1],i=br();return b.useEffect(function(){if(!i)return;function o(){var u=Fe();n(u)}return window.addEventListener("resize",o),function(){return window.removeEventListener("resize",o)}},[i]),i?r:null}function Fe(){return Ae()?window.innerHeight:null}function br(){var e=b.useState(!1),r=e[0],n=e[1];return b.useEffect(function(){Ae()&&n(!0)},[]),r}function Ae(){return typeof window<"u"&&typeof document<"u"}const W={mobileS:"(max-width: 320px)",mobileM:"(max-width: 425px)",mobileL:"(max-width: 868px)",desktop:"(min-width: 869px)"},wr=e=>{const[r,n]=b.useState(!1),i=b.useCallback(()=>{const o=window.matchMedia(e);n(o.matches)},[e]);return b.useEffect(()=>{i()},[i]),b.useEffect(()=>(window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)),[i]),r};/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function ue(){return ue=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},ue.apply(this,arguments)}var ze;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(ze||(ze={}));function R(e,r){if(e===!1||e===null||typeof e>"u")throw new Error(r)}function fe(e,r){if(!e){typeof console<"u"&&console.warn(r);try{throw new Error(r)}catch{}}}function We(e){let r={};if(e){let n=e.indexOf("#");n>=0&&(r.hash=e.substr(n),e=e.substr(0,n));let i=e.indexOf("?");i>=0&&(r.search=e.substr(i),e=e.substr(0,i)),e&&(r.pathname=e)}return r}var Be;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(Be||(Be={}));function de(e,r){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,i]=yr(e.path,e.caseSensitive,e.end),o=r.match(n);if(!o)return null;let u=o[0],d=u.replace(/(.)\/+$/,"$1"),h=o.slice(1);return{params:i.reduce((v,g,y)=>{let{paramName:j,isOptional:S}=g;if(j==="*"){let M=h[y]||"";d=u.slice(0,u.length-M.length).replace(/(.)\/+$/,"$1")}const P=h[y];return S&&!P?v[j]=void 0:v[j]=(P||"").replace(/%2F/g,"/"),v},{}),pathname:u,pathnameBase:d,pattern:e}}function yr(e,r,n){r===void 0&&(r=!1),n===void 0&&(n=!0),fe(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let i=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(d,h,c)=>(i.push({paramName:h,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(i.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,r?void 0:"i"),i]}function $r(e,r){r===void 0&&(r="/");let{pathname:n,search:i="",hash:o=""}=typeof e=="string"?We(e):e;return{pathname:n?n.startsWith("/")?n:jr(n,r):r,search:Or(i),hash:Sr(o)}}function jr(e,r){let n=r.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function pe(e,r,n,i){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+r+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function Er(e){return e.filter((r,n)=>n===0||r.route.path&&r.route.path.length>0)}function kr(e,r){let n=Er(e);return r?n.map((i,o)=>o===e.length-1?i.pathname:i.pathnameBase):n.map(i=>i.pathnameBase)}function Cr(e,r,n,i){i===void 0&&(i=!1);let o;typeof e=="string"?o=We(e):(o=ue({},e),R(!o.pathname||!o.pathname.includes("?"),pe("?","pathname","search",o)),R(!o.pathname||!o.pathname.includes("#"),pe("#","pathname","hash",o)),R(!o.search||!o.search.includes("#"),pe("#","search","hash",o)));let u=e===""||o.pathname==="",d=u?"/":o.pathname,h;if(d==null)h=n;else{let y=r.length-1;if(!i&&d.startsWith("..")){let j=d.split("/");for(;j[0]==="..";)j.shift(),y-=1;o.pathname=j.join("/")}h=y>=0?r[y]:"/"}let c=$r(o,h),v=d&&d!=="/"&&d.endsWith("/"),g=(u||d===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(v||g)&&(c.pathname+="/"),c}const _r=e=>e.join("/").replace(/\/\/+/g,"/"),Or=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Sr=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e,Ve=["post","put","patch","delete"];new Set(Ve);const Tr=["get",...Ve];new Set(Tr);/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function he(){return he=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},he.apply(this,arguments)}const ge=E.createContext(null);process.env.NODE_ENV!=="production"&&(ge.displayName="DataRouter");const Rr=E.createContext(null);process.env.NODE_ENV!=="production"&&(Rr.displayName="DataRouterState");const Pr=E.createContext(null);process.env.NODE_ENV!=="production"&&(Pr.displayName="Await");const ve=E.createContext(null);process.env.NODE_ENV!=="production"&&(ve.displayName="Navigation");const xe=E.createContext(null);process.env.NODE_ENV!=="production"&&(xe.displayName="Location");const ee=E.createContext({outlet:null,matches:[],isDataRoute:!1});process.env.NODE_ENV!=="production"&&(ee.displayName="Route");const Lr=E.createContext(null);process.env.NODE_ENV!=="production"&&(Lr.displayName="RouteError");function Ue(){return E.useContext(xe)!=null}function me(){return Ue()||(process.env.NODE_ENV!=="production"?R(!1,"useLocation() may be used only in the context of a <Router> component."):R(!1)),E.useContext(xe).location}const Ye="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function He(e){E.useContext(ve).static||E.useLayoutEffect(e)}function te(){let{isDataRoute:e}=E.useContext(ee);return e?Fr():Nr()}function Nr(){Ue()||(process.env.NODE_ENV!=="production"?R(!1,"useNavigate() may be used only in the context of a <Router> component."):R(!1));let e=E.useContext(ge),{basename:r,future:n,navigator:i}=E.useContext(ve),{matches:o}=E.useContext(ee),{pathname:u}=me(),d=JSON.stringify(kr(o,n.v7_relativeSplatPath)),h=E.useRef(!1);return He(()=>{h.current=!0}),E.useCallback(function(v,g){if(g===void 0&&(g={}),process.env.NODE_ENV!=="production"&&fe(h.current,Ye),!h.current)return;if(typeof v=="number"){i.go(v);return}let y=Cr(v,JSON.parse(d),u,g.relative==="path");e==null&&r!=="/"&&(y.pathname=y.pathname==="/"?r:_r([r,y.pathname])),(g.replace?i.replace:i.push)(y,g.state,g)},[r,i,d,u,e])}var Je=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(Je||{}),qe=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(qe||{});function Ge(e){return e+" must be used within a data router.  See https://reactrouter.com/routers/picking-a-router."}function Mr(e){let r=E.useContext(ge);return r||(process.env.NODE_ENV!=="production"?R(!1,Ge(e)):R(!1)),r}function Dr(e){let r=E.useContext(ee);return r||(process.env.NODE_ENV!=="production"?R(!1,Ge(e)):R(!1)),r}function Ir(e){let r=Dr(e),n=r.matches[r.matches.length-1];return n.route.id||(process.env.NODE_ENV!=="production"?R(!1,e+' can only be used on routes that contain a unique "id"'):R(!1)),n.route.id}function Fr(){let{router:e}=Mr(Je.UseNavigateStable),r=Ir(qe.UseNavigateStable),n=E.useRef(!1);return He(()=>{n.current=!0}),E.useCallback(function(o,u){u===void 0&&(u={}),process.env.NODE_ENV!=="production"&&fe(n.current,Ye),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,he({fromRouteId:r},u)))},[e,r])}new Promise(()=>{});const Ar=({label:e,icon:r,onClick:n,isActive:i=!1})=>a.jsxs(zr,{$isActive:i,onClick:n,children:[a.jsx(Wr,{children:r?a.jsx(Br,{name:r}):null}),e,a.jsx(z,{name:A.right})]}),zr=f.div`
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

  ${({$isActive:e,theme:r})=>e&&`
    background-color: #f5f6fe;
    border: 1px solid ${r.colors.primary};
  `};

  &:hover {
    background-color: #f5f6fe;
    border: 1px solid ${({theme:e})=>e.colors.primary};
  }
`,Wr=f.div`
  background-color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`,Br=f(z)``,Xe=Ar,Vr=({visible:e,children:r,onClose:n})=>{const i=b.useCallback(o=>{o.key==="Escape"&&n&&n()},[n]);return b.useEffect(()=>(window.addEventListener("keydown",i),()=>window.removeEventListener("keydown",i)),[e,i]),e?a.jsx(Ur,{onClick:o=>{o.target===o.currentTarget&&n&&n()},children:r}):a.jsx(b.Fragment,{})},Ur=f.div`
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
  @media ${W.mobileL} {
    padding: 0px;
  }
`,Ke=Vr,Yr=({onClose:e,visible:r=!0,loggedIn:n,loginSlug:i,onLogout:o,routes:u})=>{const d=te(),h=me();return a.jsx(Ke,{visible:r,onClose:e,children:a.jsx(Jr,{children:a.jsxs(qr,{children:[a.jsx(Xr,{children:a.jsxs(Gr,{onClick:e,children:[a.jsx(Hr,{name:"close"}),"Uždaryti"]})}),a.jsxs(Kr,{children:[a.jsx(Qr,{children:"Meniu"}),a.jsx(Zr,{children:"Pasirinkite dominančią sritį"})]}),u==null?void 0:u.map((c,v)=>a.jsx(Xe,{isActive:!!de({path:c.slug,end:!1},h.pathname),label:c.title||"",icon:c.iconName,onClick:()=>{d(c.slug),e()}},`menu_button_${v}`)),a.jsx(Xe,{label:n?"Atsijungti":"Prisijungti",icon:A.logout,onClick:()=>{n?o():(d(i),e())}})]})})})},Hr=f(z)`
  cursor: pointer;
  font-size: 2.4rem;
`,Jr=f(ce)`
  width: 100%;
`,qr=f.div`
  background-color: white;
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 0 16px 24px 16px;
  @media ${W.desktop} {
    max-width: 700px;
    padding: 40px;
    flex-basis: auto;
    border-radius: 16px;
    min-height: fit-content;
  }
`,Gr=f.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 4px;
  text-decoration: none;
  margin: 0 0 0 auto;
`,Xr=f.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 48px;
  justify-content: space-between;
  padding: 16px 0;
`,Kr=f.div`
  margin: 16px 0 32px 0;
  justify-content: center;
`,Qr=f.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
`,Zr=f.div`
  line-height: 26px;
  margin-top: 4px;
  text-align: center;
`,Qe=Yr,en=()=>{const[e,r]=b.useState(!1),n=te();return a.jsxs(a.Fragment,{children:[a.jsxs(tn,{children:[a.jsx(an,{onClick:()=>n(-1),children:a.jsx(on,{name:A.back})}),a.jsxs(rn,{onClick:()=>r(!0),children:[a.jsx(nn,{name:A.burger}),"Meniu"]})]}),a.jsx(Qe,{visible:e,onClose:()=>r(!1)})]})},tn=f.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  background-color: white;
  @media ${W.desktop} {
    display: none;
  }
`,rn=f.div`
  align-items: center;
  color: ${({theme:e})=>e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`,nn=f(z)`
  margin-right: 4px;
  font-size: 2.4rem;
`,on=f(z)`
  align-items: center;
  display: flex;
  font-size: 2.4rem;
  gap: 4px;
  text-decoration: none;
`,an=f.div`
  padding: 16px 16px 16px 0;
`,sn=en,ln=({logo:e})=>{const r=te(),[n,i]=b.useState(!1);return a.jsxs(a.Fragment,{children:[a.jsxs(cn,{children:[a.jsx("div",{onClick:()=>r("/"),children:e}),a.jsxs(un,{onClick:()=>i(!0),children:[a.jsx(fn,{name:A.burger}),"Meniu"]})]}),a.jsx(Qe,{visible:n,onClose:()=>i(!1)})]})},cn=f.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  background-color: white;
  @media ${W.desktop} {
    display: none;
  }
`,un=f.div`
  align-items: center;
  color: ${({theme:e})=>e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`,fn=f(z)`
  margin-right: 4px;
  font-size: 2rem;
`,dn=ln,pn=({loggedIn:e,routes:r,onLogout:n,logo:i,loginSlug:o,currentRoute:u})=>{const d=te(),h=me();return a.jsxs(gn,{children:[a.jsx(hn,{children:i}),r.map((c,v)=>a.jsxs(we,{onClick:()=>d(c.slug),$isActive:!!de({path:c.slug,end:!1},u.slug),children:[a.jsx(X,{name:c.iconName}),a.jsx(be,{children:c.title})]},`sidebar_btn_${c.slug}_${v}`)),a.jsx(vn,{}),e?a.jsxs(we,{onClick:()=>n(),$isActive:!1,children:[a.jsx(X,{name:A.logout}),a.jsx(be,{children:"Atsijungti"})]}):a.jsxs(we,{onClick:()=>d(o),$isActive:!!de({path:o,end:!1},h.pathname),children:[a.jsx(X,{name:A.logout}),a.jsx(be,{children:"Prisijungti"})]})]})},hn=f.div`
  margin-bottom: 20px;
`,X=f(z)`
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
`,be=f.div`
  font-size: 1.6rem;
  font-weight: 500;
`,gn=f.nav`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
  height: 100%;
  min-width: 320px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.02);
  gap: 4px;
`,we=f.div`
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 8px;
  border-radius: 5px;
  transition: all 0.2s ease-out;
  color: ${({theme:e})=>e.colors.text.retroBlack};

  ${({$isActive:e,theme:r})=>e&&`


 ${X} {
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

    background-color: ${r.colors.primary};
  
  
  `};

  &:hover ${X} {
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
`,vn=f.div`
  width: 100%;
  height: 1px;
  background-color: #d4d5de;
  margin: 16px 0;
`,xn=pn,mn=({children:e,onScroll:r=()=>{},loggedIn:n,currentRoute:i,routes:o,logo:u})=>{const d=wr(W.mobileL);return a.jsxs(bn,{children:[!d&&a.jsx(xn,{loggedIn:n,routes:o,logo:u,currentRoute:i}),a.jsx(wn,{onScroll:r,children:a.jsxs(yn,{children:[i!=null&&i.back?a.jsx(sn,{}):a.jsx(dn,{logo:u}),e]})})]})},bn=f(ce)`
  width: 100vw;
  display: flex;
`,wn=f.div`
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  background-color: white;
`,yn=f.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  @media ${W.desktop} {
    padding: 40px 16px;
    height: fit-content;
    background-color: #f7f7f7;
  }
`,$n=({children:e,title:r,customSubTitle:n,customTitle:i,currentRoute:o})=>{const u=r||(o==null?void 0:o.title);return a.jsxs(En,{children:[i||u&&a.jsx(kn,{children:u}),n||(o==null?void 0:o.description)&&a.jsx(jn,{children:o==null?void 0:o.description}),e]})},jn=f.div`
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: 16px;
`,En=f.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-self: center;
  align-items: center;
  padding: 0 12px;
  background-color: white;
  @media ${W.desktop} {
    max-width: 700px;
    border-radius: 16px;
    margin: 0 auto;
    padding: 40px;
    overflow-y: auto;
    height: fit-content;
  }
`,kn=f.div`
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: 3.2rem;
  font-weight: 800;
  margin: 16px 0;
  text-align: center;
`;_.Button=Ot,_.CheckBox=Mt,_.ContentLayout=$n,_.DefaultLayout=mn,_.FieldWrapper=le,_.MapField=gr,_.Modal=Ke,_.PasswordField=cr,_.Switch=At,_.Tabs=hr,_.TextField=Qt,Object.defineProperty(_,Symbol.toStringTag,{value:"Module"})});
