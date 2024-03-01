(function(k,x){typeof exports=="object"&&typeof module<"u"?x(exports,require("react"),require("styled-components")):typeof define=="function"&&define.amd?define(["exports","react","styled-components"],x):(k=typeof globalThis<"u"?globalThis:k||self,x(k["design-system"]={},k.React,k["styled-components"]))})(this,function(k,x,c){"use strict";var ne={exports:{}},H={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xe;function er(){if(xe)return H;xe=1;var e=x,t=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f={key:!0,ref:!0,__self:!0,__source:!0};function m(p,u,w){var y,E={},_=null,S=null;w!==void 0&&(_=""+w),u.key!==void 0&&(_=""+u.key),u.ref!==void 0&&(S=u.ref);for(y in u)o.call(u,y)&&!f.hasOwnProperty(y)&&(E[y]=u[y]);if(p&&p.defaultProps)for(y in u=p.defaultProps,u)E[y]===void 0&&(E[y]=u[y]);return{$$typeof:t,type:p,key:_,ref:S,props:E,_owner:s.current}}return H.Fragment=a,H.jsx=m,H.jsxs=m,H}var N={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ve;function rr(){return ve||(ve=1,process.env.NODE_ENV!=="production"&&function(){var e=x,t=Symbol.for("react.element"),a=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),f=Symbol.for("react.profiler"),m=Symbol.for("react.provider"),p=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.for("react.offscreen"),R=Symbol.iterator,D="@@iterator";function W(r){if(r===null||typeof r!="object")return null;var i=R&&r[R]||r[D];return typeof i=="function"?i:null}var P=e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function C(r){{for(var i=arguments.length,l=new Array(i>1?i-1:0),d=1;d<i;d++)l[d-1]=arguments[d];It("error",r,l)}}function It(r,i,l){{var d=P.ReactDebugCurrentFrame,v=d.getStackAddendum();v!==""&&(i+="%s",l=l.concat([v]));var b=l.map(function(g){return String(g)});b.unshift("Warning: "+i),Function.prototype.apply.call(console[r],console,b)}}var zt=!1,At=!1,Dt=!1,Wt=!1,Bt=!1,Te;Te=Symbol.for("react.module.reference");function Yt(r){return!!(typeof r=="string"||typeof r=="function"||r===o||r===f||Bt||r===s||r===w||r===y||Wt||r===S||zt||At||Dt||typeof r=="object"&&r!==null&&(r.$$typeof===_||r.$$typeof===E||r.$$typeof===m||r.$$typeof===p||r.$$typeof===u||r.$$typeof===Te||r.getModuleId!==void 0))}function Vt(r,i,l){var d=r.displayName;if(d)return d;var v=i.displayName||i.name||"";return v!==""?l+"("+v+")":l}function Pe(r){return r.displayName||"Context"}function F(r){if(r==null)return null;if(typeof r.tag=="number"&&C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case o:return"Fragment";case a:return"Portal";case f:return"Profiler";case s:return"StrictMode";case w:return"Suspense";case y:return"SuspenseList"}if(typeof r=="object")switch(r.$$typeof){case p:var i=r;return Pe(i)+".Consumer";case m:var l=r;return Pe(l._context)+".Provider";case u:return Vt(r,r.render,"ForwardRef");case E:var d=r.displayName||null;return d!==null?d:F(r.type)||"Memo";case _:{var v=r,b=v._payload,g=v._init;try{return F(g(b))}catch{return null}}}return null}var B=Object.assign,q=0,Re,Fe,Le,Me,Ie,ze,Ae;function De(){}De.__reactDisabledLog=!0;function Ht(){{if(q===0){Re=console.log,Fe=console.info,Le=console.warn,Me=console.error,Ie=console.group,ze=console.groupCollapsed,Ae=console.groupEnd;var r={configurable:!0,enumerable:!0,value:De,writable:!0};Object.defineProperties(console,{info:r,log:r,warn:r,error:r,group:r,groupCollapsed:r,groupEnd:r})}q++}}function Nt(){{if(q--,q===0){var r={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:B({},r,{value:Re}),info:B({},r,{value:Fe}),warn:B({},r,{value:Le}),error:B({},r,{value:Me}),group:B({},r,{value:Ie}),groupCollapsed:B({},r,{value:ze}),groupEnd:B({},r,{value:Ae})})}q<0&&C("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var le=P.ReactCurrentDispatcher,ce;function Q(r,i,l){{if(ce===void 0)try{throw Error()}catch(v){var d=v.stack.trim().match(/\n( *(at )?)/);ce=d&&d[1]||""}return`
`+ce+r}}var ue=!1,Z;{var Ut=typeof WeakMap=="function"?WeakMap:Map;Z=new Ut}function We(r,i){if(!r||ue)return"";{var l=Z.get(r);if(l!==void 0)return l}var d;ue=!0;var v=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var b;b=le.current,le.current=null,Ht();try{if(i){var g=function(){throw Error()};if(Object.defineProperty(g.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(g,[])}catch(L){d=L}Reflect.construct(r,[],g)}else{try{g.call()}catch(L){d=L}r.call(g.prototype)}}else{try{throw Error()}catch(L){d=L}r()}}catch(L){if(L&&d&&typeof L.stack=="string"){for(var h=L.stack.split(`
`),O=d.stack.split(`
`),j=h.length-1,$=O.length-1;j>=1&&$>=0&&h[j]!==O[$];)$--;for(;j>=1&&$>=0;j--,$--)if(h[j]!==O[$]){if(j!==1||$!==1)do if(j--,$--,$<0||h[j]!==O[$]){var T=`
`+h[j].replace(" at new "," at ");return r.displayName&&T.includes("<anonymous>")&&(T=T.replace("<anonymous>",r.displayName)),typeof r=="function"&&Z.set(r,T),T}while(j>=1&&$>=0);break}}}finally{ue=!1,le.current=b,Nt(),Error.prepareStackTrace=v}var V=r?r.displayName||r.name:"",Ze=V?Q(V):"";return typeof r=="function"&&Z.set(r,Ze),Ze}function Gt(r,i,l){return We(r,!1)}function qt(r){var i=r.prototype;return!!(i&&i.isReactComponent)}function ee(r,i,l){if(r==null)return"";if(typeof r=="function")return We(r,qt(r));if(typeof r=="string")return Q(r);switch(r){case w:return Q("Suspense");case y:return Q("SuspenseList")}if(typeof r=="object")switch(r.$$typeof){case u:return Gt(r.render);case E:return ee(r.type,i,l);case _:{var d=r,v=d._payload,b=d._init;try{return ee(b(v),i,l)}catch{}}}return""}var re=Object.prototype.hasOwnProperty,Be={},Ye=P.ReactDebugCurrentFrame;function te(r){if(r){var i=r._owner,l=ee(r.type,r._source,i?i.type:null);Ye.setExtraStackFrame(l)}else Ye.setExtraStackFrame(null)}function Jt(r,i,l,d,v){{var b=Function.call.bind(re);for(var g in r)if(b(r,g)){var h=void 0;try{if(typeof r[g]!="function"){var O=Error((d||"React class")+": "+l+" type `"+g+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof r[g]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw O.name="Invariant Violation",O}h=r[g](i,g,d,l,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(j){h=j}h&&!(h instanceof Error)&&(te(v),C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",d||"React class",l,g,typeof h),te(null)),h instanceof Error&&!(h.message in Be)&&(Be[h.message]=!0,te(v),C("Failed %s type: %s",l,h.message),te(null))}}}var Xt=Array.isArray;function de(r){return Xt(r)}function Kt(r){{var i=typeof Symbol=="function"&&Symbol.toStringTag,l=i&&r[Symbol.toStringTag]||r.constructor.name||"Object";return l}}function Qt(r){try{return Ve(r),!1}catch{return!0}}function Ve(r){return""+r}function He(r){if(Qt(r))return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Kt(r)),Ve(r)}var J=P.ReactCurrentOwner,Zt={key:!0,ref:!0,__self:!0,__source:!0},Ne,Ue,fe;fe={};function en(r){if(re.call(r,"ref")){var i=Object.getOwnPropertyDescriptor(r,"ref").get;if(i&&i.isReactWarning)return!1}return r.ref!==void 0}function rn(r){if(re.call(r,"key")){var i=Object.getOwnPropertyDescriptor(r,"key").get;if(i&&i.isReactWarning)return!1}return r.key!==void 0}function tn(r,i){if(typeof r.ref=="string"&&J.current&&i&&J.current.stateNode!==i){var l=F(J.current.type);fe[l]||(C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',F(J.current.type),r.ref),fe[l]=!0)}}function nn(r,i){{var l=function(){Ne||(Ne=!0,C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};l.isReactWarning=!0,Object.defineProperty(r,"key",{get:l,configurable:!0})}}function on(r,i){{var l=function(){Ue||(Ue=!0,C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",i))};l.isReactWarning=!0,Object.defineProperty(r,"ref",{get:l,configurable:!0})}}var an=function(r,i,l,d,v,b,g){var h={$$typeof:t,type:r,key:i,ref:l,props:g,_owner:b};return h._store={},Object.defineProperty(h._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(h,"_self",{configurable:!1,enumerable:!1,writable:!1,value:d}),Object.defineProperty(h,"_source",{configurable:!1,enumerable:!1,writable:!1,value:v}),Object.freeze&&(Object.freeze(h.props),Object.freeze(h)),h};function sn(r,i,l,d,v){{var b,g={},h=null,O=null;l!==void 0&&(He(l),h=""+l),rn(i)&&(He(i.key),h=""+i.key),en(i)&&(O=i.ref,tn(i,v));for(b in i)re.call(i,b)&&!Zt.hasOwnProperty(b)&&(g[b]=i[b]);if(r&&r.defaultProps){var j=r.defaultProps;for(b in j)g[b]===void 0&&(g[b]=j[b])}if(h||O){var $=typeof r=="function"?r.displayName||r.name||"Unknown":r;h&&nn(g,$),O&&on(g,$)}return an(r,h,O,v,d,J.current,g)}}var pe=P.ReactCurrentOwner,Ge=P.ReactDebugCurrentFrame;function Y(r){if(r){var i=r._owner,l=ee(r.type,r._source,i?i.type:null);Ge.setExtraStackFrame(l)}else Ge.setExtraStackFrame(null)}var he;he=!1;function ge(r){return typeof r=="object"&&r!==null&&r.$$typeof===t}function qe(){{if(pe.current){var r=F(pe.current.type);if(r)return`

Check the render method of \``+r+"`."}return""}}function ln(r){{if(r!==void 0){var i=r.fileName.replace(/^.*[\\\/]/,""),l=r.lineNumber;return`

Check your code at `+i+":"+l+"."}return""}}var Je={};function cn(r){{var i=qe();if(!i){var l=typeof r=="string"?r:r.displayName||r.name;l&&(i=`

Check the top-level render call using <`+l+">.")}return i}}function Xe(r,i){{if(!r._store||r._store.validated||r.key!=null)return;r._store.validated=!0;var l=cn(i);if(Je[l])return;Je[l]=!0;var d="";r&&r._owner&&r._owner!==pe.current&&(d=" It was passed a child from "+F(r._owner.type)+"."),Y(r),C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',l,d),Y(null)}}function Ke(r,i){{if(typeof r!="object")return;if(de(r))for(var l=0;l<r.length;l++){var d=r[l];ge(d)&&Xe(d,i)}else if(ge(r))r._store&&(r._store.validated=!0);else if(r){var v=W(r);if(typeof v=="function"&&v!==r.entries)for(var b=v.call(r),g;!(g=b.next()).done;)ge(g.value)&&Xe(g.value,i)}}}function un(r){{var i=r.type;if(i==null||typeof i=="string")return;var l;if(typeof i=="function")l=i.propTypes;else if(typeof i=="object"&&(i.$$typeof===u||i.$$typeof===E))l=i.propTypes;else return;if(l){var d=F(i);Jt(l,r.props,"prop",d,r)}else if(i.PropTypes!==void 0&&!he){he=!0;var v=F(i);C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",v||"Unknown")}typeof i.getDefaultProps=="function"&&!i.getDefaultProps.isReactClassApproved&&C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function dn(r){{for(var i=Object.keys(r.props),l=0;l<i.length;l++){var d=i[l];if(d!=="children"&&d!=="key"){Y(r),C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",d),Y(null);break}}r.ref!==null&&(Y(r),C("Invalid attribute `ref` supplied to `React.Fragment`."),Y(null))}}function Qe(r,i,l,d,v,b){{var g=Yt(r);if(!g){var h="";(r===void 0||typeof r=="object"&&r!==null&&Object.keys(r).length===0)&&(h+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var O=ln(v);O?h+=O:h+=qe();var j;r===null?j="null":de(r)?j="array":r!==void 0&&r.$$typeof===t?(j="<"+(F(r.type)||"Unknown")+" />",h=" Did you accidentally export a JSX literal instead of a component?"):j=typeof r,C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",j,h)}var $=sn(r,i,l,v,b);if($==null)return $;if(g){var T=i.children;if(T!==void 0)if(d)if(de(T)){for(var V=0;V<T.length;V++)Ke(T[V],r);Object.freeze&&Object.freeze(T)}else C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Ke(T,r)}return r===o?dn($):un($),$}}function fn(r,i,l){return Qe(r,i,l,!0)}function pn(r,i,l){return Qe(r,i,l,!1)}var hn=pn,gn=fn;N.Fragment=o,N.jsx=hn,N.jsxs=gn}()),N}process.env.NODE_ENV==="production"?ne.exports=er():ne.exports=rr();var n=ne.exports;const tr=({color:e="#000"})=>n.jsx("svg",{version:"1.1",xmlns:"http://www.w3.org/2000/svg",x:"0px",y:"0px",width:"40px",height:"40px",viewBox:"0 0 50 50",children:n.jsx("path",{fill:e,d:"M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",children:n.jsx("animateTransform",{attributeType:"xml",attributeName:"transform",type:"rotate",from:"0 25 25",to:"360 25 25",dur:"0.6s",repeatCount:"indefinite"})})});var me=(e=>(e.PRIMARY="primary",e.SECONDARY="secondary",e.TERTIARY="tertiary",e.DANGER="danger",e.SUCCESS="success",e.TRANSPARENT="transparent",e))(me||{});const be=({variant:e="primary",route:t,children:a,height:o=56,padding:s="11px 20px",leftIcon:f,radius:m="28px",buttonPadding:p,rightIcon:u,color:w,type:y,loading:E=!1,className:_,disabled:S=!1,fontWeight:R="600",...D})=>n.jsxs(nr,{className:_,$padding:s,$fontWeight:R,$variant:e,$height:o||40,type:y,disabled:S,$radius:m,...D,children:[f,E?n.jsx(tr,{color:"white"}):a,u]}),nr=c.button`
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
`;be.colors=me;const ir=be,or=({value:e,name:t,onChange:a,disabled:o=!1,label:s,error:f,className:m,intermediate:p})=>n.jsx(n.Fragment,{children:n.jsxs(ar,{disabled:o,className:m,onClick:()=>{!o&&a(!e)},children:[n.jsxs(lr,{intermediate:p,disabled:o,error:f,checked:e,children:[n.jsx(ur,{type:"checkbox",name:t,checked:e||!1,disabled:o,onChange:()=>{}}),n.jsx(cr,{checked:e||!1,intermediate:p,disabled:o})]}),n.jsx(sr,{children:s})]})}),ar=c.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,sr=c.div`
  text-align: left;
  font-size: 1.4rem;
  color: #4b5565;
`,lr=c.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: ${({theme:e,checked:t,error:a,intermediate:o})=>t||o?e.colors.primary:a?e.colors.danger:e.colors.border};
  opacity: ${({disabled:e})=>e?.48:1};
`,cr=c.label`
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
`,ur=c.input`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -4px;
  left: -4px;
  z-index: 1;
  opacity: 0;
  cursor: ${({disabled:e})=>e?"not-allowed":"pointer"};
`,dr=or,fr=({value:e,name:t,onChange:a})=>n.jsx(n.Fragment,{children:n.jsxs(pr,{children:[n.jsx(hr,{type:"checkbox",name:t,checked:e,onChange:a}),n.jsx(X,{})]})}),pr=c.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`,X=c.span`
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
`,hr=c.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${X} {
    background-color: ${({theme:e})=>e.colors.primary};
  }

  &:focus + ${X} {
    box-shadow: 0 0 1px ${({theme:e})=>e.colors.primary};
  }

  &:checked + ${X}:before {
    transform: translateX(20px); // Move the toggle to the right when checked
  }
`,gr=fr,xr=({error:e})=>e?n.jsx(vr,{children:e}):n.jsx(n.Fragment,{}),vr=c.label`
  display: inline-block;
  width: 100%;
  color: ${({theme:e})=>e.colors.error};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4rem;
  margin-bottom: 8px;
`,mr=({error:e,showError:t=!0,label:a,className:o,padding:s="0",onClick:f,handleBlur:m,subLabel:p,bottomLabel:u,secondLabel:w,children:y})=>n.jsxs(br,{tabIndex:-1,onBlur:m,className:o,padding:s,onClick:f,children:[n.jsxs(wr,{children:[!!a&&n.jsxs($r,{children:[n.jsx(jr,{htmlFor:a,children:a}),!!p&&n.jsx(kr,{children:p})]}),w]}),y,t&&n.jsx(xr,{error:e}),u&&n.jsx(yr,{children:u})]}),br=c.div`
  display: block;
  position: relative;
  padding: ${({padding:e})=>e};
`,wr=c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`,yr=c.div`
  margin-top: 6px;
  font-size: 1.2rem;
  color: #697586;
`,jr=c.label`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({theme:e})=>e.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`,$r=c.div`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`,kr=c.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`,ie=mr,Er=({value:e,name:t,error:a,readOnly:o=!1,leftIcon:s,rightIcon:f,onChange:m,placeholder:p,type:u="text",disabled:w,height:y=56,selectedValue:E=!1,onInputClick:_,inputMode:S="text",onFocus:R=()=>{},...D})=>n.jsxs(Cr,{$error:!!a,$height:y||40,$disabled:w||!1,children:[s,n.jsx(_r,{$selectedValue:E,onClick:()=>_?_():null,readOnly:o,type:u,name:t,autoComplete:"off",value:e||"",onChange:W=>{var P;return m&&m(((P=W==null?void 0:W.target)==null?void 0:P.value)||"")},placeholder:p,disabled:w,onFocus:R,inputMode:S,...D}),f]}),Cr=c.div`
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
`,_r=c.input`
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
`,we=Er,Or=({value:e,name:t,error:a,showError:o=!0,readOnly:s=!1,label:f,className:m,leftIcon:p,rightIcon:u,padding:w,onChange:y,subLabel:E,placeholder:_,bottomLabel:S,type:R,disabled:D,height:W,secondLabel:P,onInputClick:C})=>n.jsx(ie,{padding:w,className:m,label:f,subLabel:E,secondLabel:P,error:a,showError:o,bottomLabel:S,children:n.jsx(we,{value:e,name:t,error:a,leftIcon:p,rightIcon:u,onChange:y,disabled:D,height:W,readOnly:s,onInputClick:C,placeholder:_,type:R})});var ye={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},je=x.createContext&&x.createContext(ye),M=function(){return M=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++){t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},M.apply(this,arguments)},Sr=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(a[o[s]]=e[o[s]]);return a};function $e(e){return e&&e.map(function(t,a){return x.createElement(t.tag,M({key:a},t.attr),$e(t.child))})}function U(e){return function(t){return x.createElement(Tr,M({attr:M({},e.attr)},t),$e(e.child))}}function Tr(e){var t=function(a){var o=e.attr,s=e.size,f=e.title,m=Sr(e,["attr","size","title"]),p=s||a.size||"1em",u;return a.className&&(u=a.className),e.className&&(u=(u?u+" ":"")+e.className),x.createElement("svg",M({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},a.attr,o,m,{className:u,style:M(M({color:e.color||a.color},a.style),e.style),height:p,width:p,xmlns:"http://www.w3.org/2000/svg"}),f&&x.createElement("title",null,f),e.children)};return je!==void 0?x.createElement(je.Consumer,null,function(a){return t(a)}):t(ye)}function Pr(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z"}}]})(e)}function Rr(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z"}}]})(e)}function Fr(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"19",y1:"12",x2:"5",y2:"12"}},{tag:"polyline",attr:{points:"12 19 5 12 12 5"}}]})(e)}function Lr(e){return U({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"3",y1:"12",x2:"21",y2:"12"}},{tag:"line",attr:{x1:"3",y1:"6",x2:"21",y2:"6"}},{tag:"line",attr:{x1:"3",y1:"18",x2:"21",y2:"18"}}]})(e)}function Mr(e){return U({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"}}]})(e)}var I=(e=>(e.visibleOn="visibleOn",e.visibleOff="visibleOff",e.logout="logout",e.back="back",e.burger="burger",e.right="right",e))(I||{});const z=({name:e,className:t})=>{switch(e){case"visibleOn":return n.jsx(Rr,{className:t});case"visibleOff":return n.jsx(Pr,{className:t});case"back":return n.jsx(Fr,{className:t});case"burger":return n.jsx(Lr,{className:t});case"right":return n.jsx(Mr,{className:t});case"logout":return n.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:t,children:[n.jsx("path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"}),n.jsx("polyline",{points:"16 17 21 12 16 7"}),n.jsx("line",{x1:"21",y1:"12",x2:"9",y2:"12"})]});default:return null}},Ir=({value:e,secondLabel:t,name:a,error:o,showError:s=!0,label:f,className:m,padding:p,onChange:u,placeholder:w,disabled:y,height:E,onInputClick:_})=>{const[S,R]=x.useState(!1);return n.jsx(ie,{padding:p,secondLabel:t,className:m,label:f,error:o,showError:s,children:n.jsx(we,{value:e,type:S?"text":"password",name:a,error:o,rightIcon:n.jsx(zr,{onClick:()=>R(!S),children:n.jsx(Ar,{name:S?"visibleOn":"visibleOff"})}),onChange:u,disabled:y,height:E,onInputClick:_,placeholder:w})})},zr=c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`,Ar=c(z)`
  color: #9aa4b2;
  font-size: 2rem;
`,Dr=Ir,Wr=({options:e,onChange:t,value:a,className:o=""})=>n.jsx(Br,{className:o,children:n.jsx(Yr,{$numberOfColumns:e.length,children:e.map((s,f)=>n.jsx(Vr,{onClick:()=>t(s.value),$selected:s.value===a,children:s.label},`switch_btn_${f}`))})}),Br=c.div`
  width: 100%;
  padding: 32px 0;
`,Yr=c.div`
  display: grid;

  grid-template-columns: repeat(${({$numberOfColumns:e})=>e}, 1fr);

  background-color: ${({theme:e})=>e.colors.cardBackground.primary};
  padding: 4px;
  border-radius: 99px;
`,Vr=c.div`
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
`,Hr=Wr,Nr=({mapHost:e,mapPath:t="/edit?types[]=point&buffer=xl",value:a,onChange:o,...s})=>{const f=x.useRef(null),m=x.useCallback(u=>{var w,y;u.origin===e&&o(JSON.parse((y=(w=u==null?void 0:u.data)==null?void 0:w.mapIframeMsg)==null?void 0:y.data))},[o]);x.useEffect(()=>(window.addEventListener("message",m),()=>window.removeEventListener("message",m)),[m]);const p=()=>{var u,w;a&&((w=(u=f==null?void 0:f.current)==null?void 0:u.contentWindow)==null||w.postMessage({geom:a},"*"))};return n.jsx(Ur,{src:`${e}${t}`,ref:f,width:"100%",allowFullScreen:!0,onLoad:p,"aria-hidden":"false",tabIndex:1,...s})},Ur=c.iframe`
  height: 400px;
  width: 100%;
  display: block;
  border: 1px solid #d4d5de;
  border-radius: 4px;
  margin-top: 8px;
`;var G=function(){return G=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++){t=arguments[a];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},G.apply(this,arguments)},Gr=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,o=Object.getOwnPropertySymbols(e);s<o.length;s++)t.indexOf(o[s])<0&&Object.prototype.propertyIsEnumerable.call(e,o[s])&&(a[o[s]]=e[o[s]]);return a},ke=!1,oe=x.forwardRef(function(e,t){var a=e.style,o=Gr(e,["style"]),s=qr();!ke&&(a!=null&&a.height)&&(ke=!0,console.warn("<Div100vh /> overrides the height property of the style prop"));var f=G(G({},a),{height:s?s+"px":"100vh"});return x.createElement("div",G({ref:t,style:f},o))});oe.displayName="Div100vh";function qr(){var e=x.useState(Ee),t=e[0],a=e[1],o=Jr();return x.useEffect(function(){if(!o)return;function s(){var f=Ee();a(f)}return window.addEventListener("resize",s),function(){return window.removeEventListener("resize",s)}},[o]),o?t:null}function Ee(){return Ce()?window.innerHeight:null}function Jr(){var e=x.useState(!1),t=e[0],a=e[1];return x.useEffect(function(){Ce()&&a(!0)},[]),t}function Ce(){return typeof window<"u"&&typeof document<"u"}const A={mobileS:"(max-width: 320px)",mobileM:"(max-width: 425px)",mobileL:"(max-width: 868px)",desktop:"(min-width: 869px)"},Xr=e=>{const[t,a]=x.useState(!1),o=x.useCallback(()=>{const s=window.matchMedia(e);a(s.matches)},[e]);return x.useEffect(()=>{o()},[o]),x.useEffect(()=>(window.addEventListener("resize",o),()=>window.removeEventListener("resize",o)),[o]),t},Kr=({label:e,icon:t,onClick:a,isActive:o=!1})=>n.jsxs(Qr,{$isActive:o,onClick:a,children:[n.jsx(Zr,{children:t||null}),e,n.jsx(z,{name:I.right})]}),Qr=c.div`
  cursor: pointer;
  grid-template-columns: 48px 1fr 32px;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  background-color: ${({theme:e})=>e.colors.GREY};
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
`,Zr=c.div`
  background-color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`,_e=Kr,et=({visible:e,children:t,onClose:a})=>{const o=x.useCallback(s=>{s.key==="Escape"&&a&&a()},[a]);return x.useEffect(()=>(window.addEventListener("keydown",o),()=>window.removeEventListener("keydown",o)),[e,o]),e?n.jsx(rt,{onClick:s=>{s.target===s.currentTarget&&a&&a()},children:t}):n.jsx(x.Fragment,{})},rt=c.div`
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
  @media ${A.mobileL} {
    padding: 0px;
  }
`,Oe=et,tt=({visible:e=!0,loggedIn:t,currentRoute:a,routes:o,onLogin:s,onLogout:f,onRouteSelected:m,onClose:p})=>n.jsx(Oe,{visible:e,onClose:p,children:n.jsx(it,{children:n.jsxs(ot,{children:[n.jsx(st,{children:n.jsxs(at,{onClick:p,children:[n.jsx(nt,{name:"close"}),"Uždaryti"]})}),n.jsxs(lt,{children:[n.jsx(ct,{children:"Meniu"}),n.jsx(ut,{children:"Pasirinkite dominančią sritį"})]}),o==null?void 0:o.map((u,w)=>n.jsx(_e,{isActive:u.slug===(a==null?void 0:a.slug),label:u.title||"",icon:u.icon,onClick:()=>{m(u.slug),p()}},`menu_button_${w}`)),n.jsx(_e,{label:t?"Atsijungti":"Prisijungti",icon:n.jsx(z,{name:I.logout}),onClick:()=>{t?f():(s(),p())}})]})})}),nt=c(z)`
  cursor: pointer;
  font-size: 2.4rem;
`,it=c(oe)`
  width: 100%;
`,ot=c.div`
  background-color: white;
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 0 16px 24px 16px;
  @media ${A.desktop} {
    max-width: 700px;
    padding: 40px;
    flex-basis: auto;
    border-radius: 16px;
    min-height: fit-content;
  }
`,at=c.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 4px;
  text-decoration: none;
  margin: 0 0 0 auto;
`,st=c.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 48px;
  justify-content: space-between;
  padding: 16px 0;
`,lt=c.div`
  margin: 16px 0 32px 0;
  justify-content: center;
`,ct=c.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
`,ut=c.div`
  line-height: 26px;
  margin-top: 4px;
  text-align: center;
`,Se=tt,dt=e=>{const{onGoBack:t}=e,[a,o]=x.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(ft,{children:[n.jsx(xt,{onClick:t,children:n.jsx(gt,{name:I.back})}),n.jsxs(pt,{onClick:()=>o(!0),children:[n.jsx(ht,{name:I.burger}),"Meniu"]})]}),n.jsx(Se,{visible:a,onClose:()=>o(!1),...e})]})},ft=c.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  background-color: white;
  @media ${A.desktop} {
    display: none;
  }
`,pt=c.div`
  align-items: center;
  color: ${({theme:e})=>e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`,ht=c(z)`
  margin-right: 4px;
  font-size: 2.4rem;
`,gt=c(z)`
  align-items: center;
  display: flex;
  font-size: 2.4rem;
  gap: 4px;
  text-decoration: none;
`,xt=c.div`
  padding: 16px 16px 16px 0;
`,vt=dt,mt=e=>{const{onGoHome:t,logo:a}=e,[o,s]=x.useState(!1);return n.jsxs(n.Fragment,{children:[n.jsxs(bt,{children:[n.jsx("div",{onClick:t,children:a}),n.jsxs(wt,{onClick:()=>s(!0),children:[n.jsx(yt,{name:I.burger}),"Meniu"]})]}),n.jsx(Se,{visible:o,onClose:()=>s(!1),...e})]})},bt=c.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  background-color: white;
  @media ${A.desktop} {
    display: none;
  }
`,wt=c.div`
  align-items: center;
  color: ${({theme:e})=>e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`,yt=c(z)`
  margin-right: 4px;
  font-size: 2rem;
`,jt=mt,$t=({loggedIn:e,loginSlug:t,routes:a,logo:o,onLogin:s,onLogout:f,onRouteSelected:m,currentRoute:p})=>n.jsxs(Et,{children:[n.jsx(kt,{children:o}),a.map((u,w)=>n.jsxs(se,{onClick:()=>m(u.slug),$isActive:u.slug===(p==null?void 0:p.slug),children:[u.icon,n.jsx(ae,{children:u.title})]},`sidebar_btn_${u.slug}_${w}`)),n.jsx(Ct,{}),e?n.jsxs(se,{onClick:()=>f(),$isActive:!1,children:[n.jsx(K,{name:I.logout}),n.jsx(ae,{children:"Atsijungti"})]}):n.jsxs(se,{onClick:s,$isActive:t===(p==null?void 0:p.slug),children:[n.jsx(K,{name:I.logout}),n.jsx(ae,{children:"Prisijungti"})]})]}),kt=c.div`
  margin-bottom: 20px;
`,K=c(z)`
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
`,ae=c.div`
  font-size: 1.6rem;
  font-weight: 500;
`,Et=c.nav`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
  height: 100%;
  min-width: 320px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.02);
  gap: 4px;
`,se=c.div`
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 8px;
  border-radius: 5px;
  transition: all 0.2s ease-out;
  color: ${({theme:e})=>e.colors.text.retroBlack};

  ${({$isActive:e,theme:t})=>e&&`


 ${K} {
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

  &:hover ${K} {
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
`,Ct=c.div`
  width: 100%;
  height: 1px;
  background-color: #d4d5de;
  margin: 16px 0;
`,_t=$t,Ot=e=>{var s;const{children:t,onScroll:a=()=>{}}=e,o=Xr(A.mobileL);return n.jsxs(St,{children:[!o&&n.jsx(_t,{...e}),n.jsx(Tt,{onScroll:a,children:n.jsxs(Pt,{children:[(s=e==null?void 0:e.currentRoute)!=null&&s.back?n.jsx(vt,{...e}):n.jsx(jt,{...e}),t]})})]})},St=c(oe)`
  width: 100vw;
  display: flex;
`,Tt=c.div`
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  background-color: white;
`,Pt=c.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  @media ${A.desktop} {
    padding: 40px 16px;
    height: fit-content;
    background-color: #f7f7f7;
  }
`,Rt=({children:e,title:t,customSubTitle:a,customTitle:o,currentRoute:s})=>{const f=t||(s==null?void 0:s.title);return n.jsxs(Lt,{children:[o||f&&n.jsx(Mt,{children:f}),a||(s==null?void 0:s.description)&&n.jsx(Ft,{children:s==null?void 0:s.description}),e]})},Ft=c.div`
  color: ${({theme:e})=>e.colors.text.primary};
  margin-bottom: 16px;
`,Lt=c.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-self: center;
  align-items: center;
  padding: 0 12px;
  background-color: white;
  @media ${A.desktop} {
    max-width: 700px;
    border-radius: 16px;
    margin: 0 auto;
    padding: 40px;
    overflow-y: auto;
    height: fit-content;
  }
`,Mt=c.div`
  color: ${({theme:e})=>e.colors.text.primary};
  font-size: 3.2rem;
  font-weight: 800;
  margin: 16px 0;
  text-align: center;
`;k.Button=ir,k.CheckBox=dr,k.ContentLayout=Rt,k.DefaultLayout=Ot,k.FieldWrapper=ie,k.MapField=Nr,k.Modal=Oe,k.PasswordField=Dr,k.Switch=gr,k.Tabs=Hr,k.TextField=Or,Object.defineProperty(k,Symbol.toStringTag,{value:"Module"})});
