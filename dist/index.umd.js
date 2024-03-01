(function(O,T){typeof exports=="object"&&typeof module<"u"?T(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],T):(O=typeof globalThis<"u"?globalThis:O||self,T(O["design-system"]={},O.React,O["styled-components"]))})(this,function(O,T,v){"use strict";var K={exports:{}},W={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie;function Le(){if(ie)return W;ie=1;var r=T,o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,f=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,b={key:!0,ref:!0,__self:!0,__source:!0};function y(g,d,$){var m,E={},R=null,C=null;$!==void 0&&(R=""+$),d.key!==void 0&&(R=""+d.key),d.ref!==void 0&&(C=d.ref);for(m in d)s.call(d,m)&&!b.hasOwnProperty(m)&&(E[m]=d[m]);if(g&&g.defaultProps)for(m in d=g.defaultProps,d)E[m]===void 0&&(E[m]=d[m]);return{$$typeof:o,type:g,key:R,ref:C,props:E,_owner:f.current}}return W.Fragment=i,W.jsx=y,W.jsxs=y,W}var Y={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var se;function We(){return se||(se=1,process.env.NODE_ENV!=="production"&&function(){var r=T,o=Symbol.for("react.element"),i=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),f=Symbol.for("react.strict_mode"),b=Symbol.for("react.profiler"),y=Symbol.for("react.provider"),g=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),$=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),C=Symbol.for("react.offscreen"),P=Symbol.iterator,D="@@iterator";function z(e){if(e===null||typeof e!="object")return null;var t=P&&e[P]||e[D];return typeof t=="function"?t:null}var S=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function _(e){{for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];Or("error",e,n)}}function Or(e,t,n){{var a=S.ReactDebugCurrentFrame,p=a.getStackAddendum();p!==""&&(t+="%s",n=n.concat([p]));var h=n.map(function(u){return String(u)});h.unshift("Warning: "+t),Function.prototype.apply.call(console[e],console,h)}}var kr=!1,Sr=!1,Pr=!1,Fr=!1,Ir=!1,ge;ge=Symbol.for("react.module.reference");function Ar(e){return!!(typeof e=="string"||typeof e=="function"||e===s||e===b||Ir||e===f||e===$||e===m||Fr||e===C||kr||Sr||Pr||typeof e=="object"&&e!==null&&(e.$$typeof===R||e.$$typeof===E||e.$$typeof===y||e.$$typeof===g||e.$$typeof===d||e.$$typeof===ge||e.getModuleId!==void 0))}function Dr(e,t,n){var a=e.displayName;if(a)return a;var p=t.displayName||t.name||"";return p!==""?n+"("+p+")":n}function me(e){return e.displayName||"Context"}function F(e){if(e==null)return null;if(typeof e.tag=="number"&&_("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s:return"Fragment";case i:return"Portal";case b:return"Profiler";case f:return"StrictMode";case $:return"Suspense";case m:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case g:var t=e;return me(t)+".Consumer";case y:var n=e;return me(n._context)+".Provider";case d:return Dr(e,e.render,"ForwardRef");case E:var a=e.displayName||null;return a!==null?a:F(e.type)||"Memo";case R:{var p=e,h=p._payload,u=p._init;try{return F(u(h))}catch{return null}}}return null}var M=Object.assign,V=0,be,xe,ye,we,Ee,_e,$e;function Re(){}Re.__reactDisabledLog=!0;function zr(){{if(V===0){be=console.log,xe=console.info,ye=console.warn,we=console.error,Ee=console.group,_e=console.groupCollapsed,$e=console.groupEnd;var e={configurable:!0,enumerable:!0,value:Re,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}V++}}function Mr(){{if(V--,V===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:M({},e,{value:be}),info:M({},e,{value:xe}),warn:M({},e,{value:ye}),error:M({},e,{value:we}),group:M({},e,{value:Ee}),groupCollapsed:M({},e,{value:_e}),groupEnd:M({},e,{value:$e})})}V<0&&_("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var Z=S.ReactCurrentDispatcher,Q;function q(e,t,n){{if(Q===void 0)try{throw Error()}catch(p){var a=p.stack.trim().match(/\n( *(at )?)/);Q=a&&a[1]||""}return`
`+Q+e}}var ee=!1,H;{var Nr=typeof WeakMap=="function"?WeakMap:Map;H=new Nr}function je(e,t){if(!e||ee)return"";{var n=H.get(e);if(n!==void 0)return n}var a;ee=!0;var p=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var h;h=Z.current,Z.current=null,zr();try{if(t){var u=function(){throw Error()};if(Object.defineProperty(u.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(u,[])}catch(I){a=I}Reflect.construct(e,[],u)}else{try{u.call()}catch(I){a=I}e.call(u.prototype)}}else{try{throw Error()}catch(I){a=I}e()}}catch(I){if(I&&a&&typeof I.stack=="string"){for(var c=I.stack.split(`
`),j=a.stack.split(`
`),x=c.length-1,w=j.length-1;x>=1&&w>=0&&c[x]!==j[w];)w--;for(;x>=1&&w>=0;x--,w--)if(c[x]!==j[w]){if(x!==1||w!==1)do if(x--,w--,w<0||c[x]!==j[w]){var k=`
`+c[x].replace(" at new "," at ");return e.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",e.displayName)),typeof e=="function"&&H.set(e,k),k}while(x>=1&&w>=0);break}}}finally{ee=!1,Z.current=h,Mr(),Error.prepareStackTrace=p}var L=e?e.displayName||e.name:"",Ne=L?q(L):"";return typeof e=="function"&&H.set(e,Ne),Ne}function Lr(e,t,n){return je(e,!1)}function Wr(e){var t=e.prototype;return!!(t&&t.isReactComponent)}function G(e,t,n){if(e==null)return"";if(typeof e=="function")return je(e,Wr(e));if(typeof e=="string")return q(e);switch(e){case $:return q("Suspense");case m:return q("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return Lr(e.render);case E:return G(e.type,t,n);case R:{var a=e,p=a._payload,h=a._init;try{return G(h(p),t,n)}catch{}}}return""}var J=Object.prototype.hasOwnProperty,Te={},Ce=S.ReactDebugCurrentFrame;function X(e){if(e){var t=e._owner,n=G(e.type,e._source,t?t.type:null);Ce.setExtraStackFrame(n)}else Ce.setExtraStackFrame(null)}function Yr(e,t,n,a,p){{var h=Function.call.bind(J);for(var u in e)if(h(e,u)){var c=void 0;try{if(typeof e[u]!="function"){var j=Error((a||"React class")+": "+n+" type `"+u+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[u]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw j.name="Invariant Violation",j}c=e[u](t,u,a,n,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(x){c=x}c&&!(c instanceof Error)&&(X(p),_("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",a||"React class",n,u,typeof c),X(null)),c instanceof Error&&!(c.message in Te)&&(Te[c.message]=!0,X(p),_("Failed %s type: %s",n,c.message),X(null))}}}var Vr=Array.isArray;function re(e){return Vr(e)}function Br(e){{var t=typeof Symbol=="function"&&Symbol.toStringTag,n=t&&e[Symbol.toStringTag]||e.constructor.name||"Object";return n}}function Ur(e){try{return Oe(e),!1}catch{return!0}}function Oe(e){return""+e}function ke(e){if(Ur(e))return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Br(e)),Oe(e)}var B=S.ReactCurrentOwner,qr={key:!0,ref:!0,__self:!0,__source:!0},Se,Pe,te;te={};function Hr(e){if(J.call(e,"ref")){var t=Object.getOwnPropertyDescriptor(e,"ref").get;if(t&&t.isReactWarning)return!1}return e.ref!==void 0}function Gr(e){if(J.call(e,"key")){var t=Object.getOwnPropertyDescriptor(e,"key").get;if(t&&t.isReactWarning)return!1}return e.key!==void 0}function Jr(e,t){if(typeof e.ref=="string"&&B.current&&t&&B.current.stateNode!==t){var n=F(B.current.type);te[n]||(_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',F(B.current.type),e.ref),te[n]=!0)}}function Xr(e,t){{var n=function(){Se||(Se=!0,_("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"key",{get:n,configurable:!0})}}function Kr(e,t){{var n=function(){Pe||(Pe=!0,_("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",t))};n.isReactWarning=!0,Object.defineProperty(e,"ref",{get:n,configurable:!0})}}var Zr=function(e,t,n,a,p,h,u){var c={$$typeof:o,type:e,key:t,ref:n,props:u,_owner:h};return c._store={},Object.defineProperty(c._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(c,"_self",{configurable:!1,enumerable:!1,writable:!1,value:a}),Object.defineProperty(c,"_source",{configurable:!1,enumerable:!1,writable:!1,value:p}),Object.freeze&&(Object.freeze(c.props),Object.freeze(c)),c};function Qr(e,t,n,a,p){{var h,u={},c=null,j=null;n!==void 0&&(ke(n),c=""+n),Gr(t)&&(ke(t.key),c=""+t.key),Hr(t)&&(j=t.ref,Jr(t,p));for(h in t)J.call(t,h)&&!qr.hasOwnProperty(h)&&(u[h]=t[h]);if(e&&e.defaultProps){var x=e.defaultProps;for(h in x)u[h]===void 0&&(u[h]=x[h])}if(c||j){var w=typeof e=="function"?e.displayName||e.name||"Unknown":e;c&&Xr(u,w),j&&Kr(u,w)}return Zr(e,c,j,p,a,B.current,u)}}var ne=S.ReactCurrentOwner,Fe=S.ReactDebugCurrentFrame;function N(e){if(e){var t=e._owner,n=G(e.type,e._source,t?t.type:null);Fe.setExtraStackFrame(n)}else Fe.setExtraStackFrame(null)}var oe;oe=!1;function ae(e){return typeof e=="object"&&e!==null&&e.$$typeof===o}function Ie(){{if(ne.current){var e=F(ne.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function et(e){{if(e!==void 0){var t=e.fileName.replace(/^.*[\\\/]/,""),n=e.lineNumber;return`

Check your code at `+t+":"+n+"."}return""}}var Ae={};function rt(e){{var t=Ie();if(!t){var n=typeof e=="string"?e:e.displayName||e.name;n&&(t=`

Check the top-level render call using <`+n+">.")}return t}}function De(e,t){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var n=rt(t);if(Ae[n])return;Ae[n]=!0;var a="";e&&e._owner&&e._owner!==ne.current&&(a=" It was passed a child from "+F(e._owner.type)+"."),N(e),_('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',n,a),N(null)}}function ze(e,t){{if(typeof e!="object")return;if(re(e))for(var n=0;n<e.length;n++){var a=e[n];ae(a)&&De(a,t)}else if(ae(e))e._store&&(e._store.validated=!0);else if(e){var p=z(e);if(typeof p=="function"&&p!==e.entries)for(var h=p.call(e),u;!(u=h.next()).done;)ae(u.value)&&De(u.value,t)}}}function tt(e){{var t=e.type;if(t==null||typeof t=="string")return;var n;if(typeof t=="function")n=t.propTypes;else if(typeof t=="object"&&(t.$$typeof===d||t.$$typeof===E))n=t.propTypes;else return;if(n){var a=F(t);Yr(n,e.props,"prop",a,e)}else if(t.PropTypes!==void 0&&!oe){oe=!0;var p=F(t);_("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",p||"Unknown")}typeof t.getDefaultProps=="function"&&!t.getDefaultProps.isReactClassApproved&&_("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function nt(e){{for(var t=Object.keys(e.props),n=0;n<t.length;n++){var a=t[n];if(a!=="children"&&a!=="key"){N(e),_("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",a),N(null);break}}e.ref!==null&&(N(e),_("Invalid attribute `ref` supplied to `React.Fragment`."),N(null))}}function Me(e,t,n,a,p,h){{var u=Ar(e);if(!u){var c="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(c+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var j=et(p);j?c+=j:c+=Ie();var x;e===null?x="null":re(e)?x="array":e!==void 0&&e.$$typeof===o?(x="<"+(F(e.type)||"Unknown")+" />",c=" Did you accidentally export a JSX literal instead of a component?"):x=typeof e,_("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",x,c)}var w=Qr(e,t,n,p,h);if(w==null)return w;if(u){var k=t.children;if(k!==void 0)if(a)if(re(k)){for(var L=0;L<k.length;L++)ze(k[L],e);Object.freeze&&Object.freeze(k)}else _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else ze(k,e)}return e===s?nt(w):tt(w),w}}function ot(e,t,n){return Me(e,t,n,!0)}function at(e,t,n){return Me(e,t,n,!1)}var it=at,st=ot;Y.Fragment=s,Y.jsx=it,Y.jsxs=st}()),Y}process.env.NODE_ENV==="production"?K.exports=Le():K.exports=We();var l=K.exports;const Ye=({color:r="#000"})=>l.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",children:l.jsx("path",{fill:r,d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",children:l.jsx("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})});var le=(r=>(r.PRIMARY="primary",r.SECONDARY="secondary",r.TERTIARY="tertiary",r.DANGER="danger",r.SUCCESS="success",r.TRANSPARENT="transparent",r))(le||{});const ce=({variant:r="primary",route:o,children:i,height:s=56,padding:f="11px 20px",leftIcon:b,radius:y="28px",buttonPadding:g,rightIcon:d,color:$,type:m,loading:E=!1,className:R,disabled:C=!1,fontWeight:P="600",...D})=>l.jsxs(Ve,{className:R,$padding:f,$fontWeight:P,$variant:r,$height:s||40,type:m,disabled:C,$radius:y,...D,children:[b,E?l.jsx(Ye,{color:"white"}):i,d]}),Ve=v.button`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  height: ${({$height:r})=>`${r}px`};
  border-radius: ${({$radius:r})=>r};
  padding: ${({$padding:r})=>r};
  background-color: ${({$variant:r,theme:o})=>o.colors.buttonBackground[r]};
  color: ${({$variant:r,theme:o})=>o.colors.buttonText[r]};
  border: ${({$variant:r})=>r==="transparent"?"0":"1px"} solid
    ${({$variant:r})=>r!=="transparent"?"transparent":" rgb(35, 31, 32)"};
  font-weight: ${({$fontWeight:r})=>r};
  font-size: 1.8rem;
  :hover {
    background-color: ${({$variant:r,theme:o})=>o.colors.hover[r]};
  }
  cursor: ${({disabled:r})=>r?"not-allowed":"pointer"};
  opacity: ${({disabled:r})=>r?.6:1};
  width: 100%;
`;ce.colors=le;const Be=ce,Ue=({value:r,name:o,onChange:i,disabled:s=!1,label:f,error:b,className:y,intermediate:g})=>l.jsx(l.Fragment,{children:l.jsxs(qe,{disabled:s,className:y,onClick:()=>{!s&&i(!r)},children:[l.jsxs(Ge,{intermediate:g,disabled:s,error:b,checked:r,children:[l.jsx(Xe,{type:"checkbox",name:o,checked:r||!1,disabled:s,onChange:()=>{}}),l.jsx(Je,{checked:r||!1,intermediate:g,disabled:s})]}),l.jsx(He,{children:f})]})}),qe=v.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  cursor: ${({disabled:r})=>r?"not-allowed":"pointer"};
`,He=v.div`
  text-align: left;
  font-size: 1.4rem;
  color: #4b5565;
`,Ge=v.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: ${({theme:r,checked:o,error:i,intermediate:s})=>o||s?r.colors.primary:i?r.colors.danger:r.colors.border};
  opacity: ${({disabled:r})=>r?.48:1};
`,Je=v.label`
  cursor: ${({disabled:r})=>r?"not-allowed":"pointer"};
  cursor: pointer;
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  left: 2px;
  top: 2px;

  background-color: ${({intermediate:r,checked:o})=>r||o?"transparent":"white"};

  &::after {
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    filter: alpha(opacity=0);
    opacity: 0;
    content: '';
    position: absolute;
    width: 11px;
    height: 4px;
    background: transparent;
    top: ${({intermediate:r})=>`${r?2:3}px`};
    left: ${({intermediate:r})=>`${r?.8:1}px`};
    border: 2px solid #fcfff4;
    border-top: none;
    border-right: none;

    ${({intermediate:r})=>r&&`border-left: none;
   
  `}

    ${({checked:r,intermediate:o})=>o||r?`
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      filter: alpha(opacity=100);
      opacity: 1;
  `:""}

    -webkit-transform: rotate(
      ${({intermediate:r})=>`${r?0:-45}deg`}
    );
    -moz-transform: rotate(${({intermediate:r})=>`${r?0:-45}deg`});
    -o-transform: rotate(${({intermediate:r})=>`${r?0:-45}deg`});
    -ms-transform: rotate(${({intermediate:r})=>`${r?0:-45}deg`});
    transform: rotate(${({intermediate:r})=>`${r?0:-45}deg`});
  }
`,Xe=v.input`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -4px;
  left: -4px;
  z-index: 1;
  opacity: 0;
  cursor: ${({disabled:r})=>r?"not-allowed":"pointer"};
`,Ke=Ue,Ze=({value:r,name:o,onChange:i})=>l.jsx(l.Fragment,{children:l.jsxs(Qe,{children:[l.jsx(er,{type:"checkbox",name:o,checked:r,onChange:i}),l.jsx(U,{})]})}),Qe=v.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`,U=v.span`
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
`,er=v.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${U} {
    background-color: ${({theme:r})=>r.colors.primary};
  }

  &:focus + ${U} {
    box-shadow: 0 0 1px ${({theme:r})=>r.colors.primary};
  }

  &:checked + ${U}:before {
    transform: translateX(20px); // Move the toggle to the right when checked
  }
`,rr=Ze,tr=({error:r})=>r?l.jsx(nr,{children:r}):l.jsx(l.Fragment,{}),nr=v.label`
  display: inline-block;
  width: 100%;
  color: ${({theme:r})=>r.colors.error};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4rem;
  margin-bottom: 8px;
`,or=({error:r,showError:o=!0,label:i,className:s,padding:f="0",onClick:b,handleBlur:y,subLabel:g,bottomLabel:d,secondLabel:$,children:m})=>l.jsxs(ar,{tabIndex:-1,onBlur:y,className:s,padding:f,onClick:b,children:[l.jsxs(ir,{children:[!!i&&l.jsxs(cr,{children:[l.jsx(lr,{htmlFor:i,children:i}),!!g&&l.jsx(ur,{children:g})]}),$]}),m,o&&l.jsx(tr,{error:r}),d&&l.jsx(sr,{children:d})]}),ar=v.div`
  display: block;
  position: relative;
  padding: ${({padding:r})=>r};
`,ir=v.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,sr=v.div`
  margin-top: 6px;
  font-size: 1.2rem;
  color: #697586;
`,lr=v.label`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({theme:r})=>r.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,cr=v.div`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`,ur=v.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`,ue=or,fr=({value:r,name:o,error:i,readOnly:s=!1,leftIcon:f,rightIcon:b,onChange:y,placeholder:g,type:d="text",disabled:$,height:m=56,selectedValue:E=!1,onInputClick:R,inputMode:C="text",onFocus:P=()=>{},...D})=>l.jsxs(dr,{$error:!!i,$height:m||40,$disabled:$||!1,children:[f,l.jsx(pr,{$selectedValue:E,onClick:()=>R?R():null,readOnly:s,type:d,name:o,autoComplete:"off",value:r||"",onChange:z=>{var S;return y&&y(((S=z==null?void 0:z.target)==null?void 0:S.value)||"")},placeholder:g,disabled:$,onFocus:P,inputMode:C,...D}),b]}),dr=v.div`
  display: flex;
  height: ${({$height:r})=>`${r}px`};
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({theme:r,$error:o})=>o?r.colors.error:r.colors.border};
  opacity: ${({$disabled:r})=>r?.5:1};

  cursor: ${({$disabled:r})=>r?"not-allowed":"text"};
  :focus-within {
    border-color: ${({theme:r})=>r.colors.primary};
    box-shadow: 0 0 0 4px ${({theme:r})=>`${r.colors.primary}33`};
  }
`,pr=v.input`
  border: none;
  padding: 0 12px;
  width: 100%;
  height: 100%;

  cursor: ${({disabled:r})=>r?"not-allowed":"text"};

  background-color: white;
  font-size: 1.6rem;
  color: ${({theme:r})=>r.colors.text.input};

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
    color: ${({theme:r,$selectedValue:o})=>r.colors.text.input+`${o?"":"8F"}`};
  }
  ::-moz-placeholder {
    color: ${({theme:r,$selectedValue:o})=>r.colors.text.input+`${o?"":"8F"}`};
  }
  ::-ms-placeholder {
    color: ${({theme:r,$selectedValue:o})=>r.colors.text.input+`${o?"":"8F"}`};
  }
  ::placeholder {
    color: ${({theme:r,$selectedValue:o})=>r.colors.text.input+`${o?"":"8F"}`};
  }
`,fe=fr,hr=({value:r,name:o,error:i,showError:s=!0,readOnly:f=!1,label:b,className:y,leftIcon:g,rightIcon:d,padding:$,onChange:m,subLabel:E,placeholder:R,bottomLabel:C,type:P,disabled:D,height:z,secondLabel:S,onInputClick:_})=>l.jsx(ue,{padding:$,className:y,label:b,subLabel:E,secondLabel:S,error:i,showError:s,bottomLabel:C,children:l.jsx(fe,{value:r,name:o,error:i,leftIcon:g,rightIcon:d,onChange:m,disabled:D,height:z,readOnly:f,onInputClick:_,placeholder:R,type:P})});var de={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},pe=T.createContext&&T.createContext(de),A=globalThis&&globalThis.__assign||function(){return A=Object.assign||function(r){for(var o,i=1,s=arguments.length;i<s;i++){o=arguments[i];for(var f in o)Object.prototype.hasOwnProperty.call(o,f)&&(r[f]=o[f])}return r},A.apply(this,arguments)},vr=globalThis&&globalThis.__rest||function(r,o){var i={};for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&o.indexOf(s)<0&&(i[s]=r[s]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var f=0,s=Object.getOwnPropertySymbols(r);f<s.length;f++)o.indexOf(s[f])<0&&Object.prototype.propertyIsEnumerable.call(r,s[f])&&(i[s[f]]=r[s[f]]);return i};function he(r){return r&&r.map(function(o,i){return T.createElement(o.tag,A({key:i},o.attr),he(o.child))})}function ve(r){return function(o){return T.createElement(gr,A({attr:A({},r.attr)},o),he(r.child))}}function gr(r){var o=function(i){var s=r.attr,f=r.size,b=r.title,y=vr(r,["attr","size","title"]),g=f||i.size||"1em",d;return i.className&&(d=i.className),r.className&&(d=(d?d+" ":"")+r.className),T.createElement("svg",A({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,s,y,{className:d,style:A(A({color:r.color||i.color},i.style),r.style),height:g,width:g,xmlns:"http://www.w3.org/2000/svg"}),b&&T.createElement("title",null,b),r.children)};return pe!==void 0?T.createElement(pe.Consumer,null,function(i){return o(i)}):o(de)}function mr(r){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z"}}]})(r)}function br(r){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}}]})(r)}const xr=({name:r,className:o})=>{switch(r){case"visibleOn":return l.jsx(br,{className:o});case"visibleOff":return l.jsx(mr,{className:o});default:return null}},yr=({value:r,secondLabel:o,name:i,error:s,showError:f=!0,label:b,className:y,padding:g,onChange:d,placeholder:$,disabled:m,height:E,onInputClick:R})=>{const[C,P]=T.useState(!1);return l.jsx(ue,{padding:g,secondLabel:o,className:y,label:b,error:s,showError:f,children:l.jsx(fe,{value:r,type:C?"text":"password",name:i,error:s,rightIcon:l.jsx(wr,{onClick:()=>P(!C),children:l.jsx(Er,{name:C?"visibleOn":"visibleOff"})}),onChange:d,disabled:m,height:E,onInputClick:R,placeholder:$})})},wr=v.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`,Er=v(xr)`
  color: #9aa4b2;
  font-size: 2rem;
`,_r=yr,$r=({options:r,onChange:o,value:i,className:s=""})=>l.jsx(Rr,{className:s,children:l.jsx(jr,{$numberOfColumns:r.length,children:r.map((f,b)=>l.jsx(Tr,{onClick:()=>o(f.value),$selected:f.value===i,children:f.label},`switch_btn_${b}`))})}),Rr=v.div`
  width: 100%;
  padding: 32px 0;
`,jr=v.div`
  display: grid;

  grid-template-columns: repeat(${({$numberOfColumns:r})=>r}, 1fr);

  background-color: ${({theme:r})=>r.colors.cardBackground.primary};
  padding: 4px;
  border-radius: 99px;
`,Tr=v.div`
  display: flex;
  background-color: ${({$selected:r})=>r?"rgb(20, 83, 45)":"transparent"};
  color: ${({$selected:r,theme:o})=>r?"white":o.colors.text.primary};
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
`,Cr=$r;O.Button=Be,O.CheckBox=Ke,O.PasswordField=_r,O.Switch=rr,O.Tabs=Cr,O.TextField=hr,Object.defineProperty(O,Symbol.toStringTag,{value:"Module"})});
