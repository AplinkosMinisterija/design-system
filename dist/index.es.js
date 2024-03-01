import * as E from "react";
import N, { useState as H, useRef as nr, useCallback as je, useEffect as Y, forwardRef as ir } from "react";
import d from "styled-components";
var be = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var et;
function or() {
  if (et)
    return q;
  et = 1;
  var e = N, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(h, c, v) {
    var g, y = {}, $ = null, _ = null;
    v !== void 0 && ($ = "" + v), c.key !== void 0 && ($ = "" + c.key), c.ref !== void 0 && (_ = c.ref);
    for (g in c)
      i.call(c, g) && !u.hasOwnProperty(g) && (y[g] = c[g]);
    if (h && h.defaultProps)
      for (g in c = h.defaultProps, c)
        y[g] === void 0 && (y[g] = c[g]);
    return { $$typeof: r, type: h, key: $, ref: _, props: y, _owner: o.current };
  }
  return q.Fragment = n, q.jsx = f, q.jsxs = f, q;
}
var X = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var tt;
function ar() {
  return tt || (tt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = N, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), h = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), v = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), R = Symbol.iterator, L = "@@iterator";
    function z(t) {
      if (t === null || typeof t != "object")
        return null;
      var s = R && t[R] || t[L];
      return typeof s == "function" ? s : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(t) {
      {
        for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++)
          l[p - 1] = arguments[p];
        Et("error", t, l);
      }
    }
    function Et(t, s, l) {
      {
        var p = P.ReactDebugCurrentFrame, b = p.getStackAddendum();
        b !== "" && (s += "%s", l = l.concat([b]));
        var w = l.map(function(m) {
          return String(m);
        });
        w.unshift("Warning: " + s), Function.prototype.apply.call(console[t], console, w);
      }
    }
    var kt = !1, Ct = !1, _t = !1, Ot = !1, Rt = !1, Se;
    Se = Symbol.for("react.module.reference");
    function St(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === i || t === u || Rt || t === o || t === v || t === g || Ot || t === _ || kt || Ct || _t || typeof t == "object" && t !== null && (t.$$typeof === $ || t.$$typeof === y || t.$$typeof === f || t.$$typeof === h || t.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === Se || t.getModuleId !== void 0));
    }
    function Tt(t, s, l) {
      var p = t.displayName;
      if (p)
        return p;
      var b = s.displayName || s.name || "";
      return b !== "" ? l + "(" + b + ")" : l;
    }
    function Te(t) {
      return t.displayName || "Context";
    }
    function M(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case o:
          return "StrictMode";
        case v:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case h:
            var s = t;
            return Te(s) + ".Consumer";
          case f:
            var l = t;
            return Te(l._context) + ".Provider";
          case c:
            return Tt(t, t.render, "ForwardRef");
          case y:
            var p = t.displayName || null;
            return p !== null ? p : M(t.type) || "Memo";
          case $: {
            var b = t, w = b._payload, m = b._init;
            try {
              return M(m(w));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, J = 0, Pe, Ne, Le, Me, Ie, De, Fe;
    function Ae() {
    }
    Ae.__reactDisabledLog = !0;
    function Pt() {
      {
        if (J === 0) {
          Pe = console.log, Ne = console.info, Le = console.warn, Me = console.error, Ie = console.group, De = console.groupCollapsed, Fe = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Ae,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        J++;
      }
    }
    function Nt() {
      {
        if (J--, J === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, t, {
              value: Pe
            }),
            info: W({}, t, {
              value: Ne
            }),
            warn: W({}, t, {
              value: Le
            }),
            error: W({}, t, {
              value: Me
            }),
            group: W({}, t, {
              value: Ie
            }),
            groupCollapsed: W({}, t, {
              value: De
            }),
            groupEnd: W({}, t, {
              value: Fe
            })
          });
        }
        J < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var le = P.ReactCurrentDispatcher, ce;
    function ee(t, s, l) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (b) {
            var p = b.stack.trim().match(/\n( *(at )?)/);
            ce = p && p[1] || "";
          }
        return `
` + ce + t;
      }
    }
    var ue = !1, te;
    {
      var Lt = typeof WeakMap == "function" ? WeakMap : Map;
      te = new Lt();
    }
    function ze(t, s) {
      if (!t || ue)
        return "";
      {
        var l = te.get(t);
        if (l !== void 0)
          return l;
      }
      var p;
      ue = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var w;
      w = le.current, le.current = null, Pt();
      try {
        if (s) {
          var m = function() {
            throw Error();
          };
          if (Object.defineProperty(m.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(m, []);
            } catch (I) {
              p = I;
            }
            Reflect.construct(t, [], m);
          } else {
            try {
              m.call();
            } catch (I) {
              p = I;
            }
            t.call(m.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (I) {
            p = I;
          }
          t();
        }
      } catch (I) {
        if (I && p && typeof I.stack == "string") {
          for (var x = I.stack.split(`
`), O = p.stack.split(`
`), j = x.length - 1, k = O.length - 1; j >= 1 && k >= 0 && x[j] !== O[k]; )
            k--;
          for (; j >= 1 && k >= 0; j--, k--)
            if (x[j] !== O[k]) {
              if (j !== 1 || k !== 1)
                do
                  if (j--, k--, k < 0 || x[j] !== O[k]) {
                    var T = `
` + x[j].replace(" at new ", " at ");
                    return t.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", t.displayName)), typeof t == "function" && te.set(t, T), T;
                  }
                while (j >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        ue = !1, le.current = w, Nt(), Error.prepareStackTrace = b;
      }
      var U = t ? t.displayName || t.name : "", Ze = U ? ee(U) : "";
      return typeof t == "function" && te.set(t, Ze), Ze;
    }
    function Mt(t, s, l) {
      return ze(t, !1);
    }
    function It(t) {
      var s = t.prototype;
      return !!(s && s.isReactComponent);
    }
    function re(t, s, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return ze(t, It(t));
      if (typeof t == "string")
        return ee(t);
      switch (t) {
        case v:
          return ee("Suspense");
        case g:
          return ee("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Mt(t.render);
          case y:
            return re(t.type, s, l);
          case $: {
            var p = t, b = p._payload, w = p._init;
            try {
              return re(w(b), s, l);
            } catch {
            }
          }
        }
      return "";
    }
    var ne = Object.prototype.hasOwnProperty, We = {}, Be = P.ReactDebugCurrentFrame;
    function ie(t) {
      if (t) {
        var s = t._owner, l = re(t.type, t._source, s ? s.type : null);
        Be.setExtraStackFrame(l);
      } else
        Be.setExtraStackFrame(null);
    }
    function Dt(t, s, l, p, b) {
      {
        var w = Function.call.bind(ne);
        for (var m in t)
          if (w(t, m)) {
            var x = void 0;
            try {
              if (typeof t[m] != "function") {
                var O = Error((p || "React class") + ": " + l + " type `" + m + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[m] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw O.name = "Invariant Violation", O;
              }
              x = t[m](s, m, p, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              x = j;
            }
            x && !(x instanceof Error) && (ie(b), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", l, m, typeof x), ie(null)), x instanceof Error && !(x.message in We) && (We[x.message] = !0, ie(b), C("Failed %s type: %s", l, x.message), ie(null));
          }
      }
    }
    var Ft = Array.isArray;
    function de(t) {
      return Ft(t);
    }
    function At(t) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, l = s && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function zt(t) {
      try {
        return Ve(t), !1;
      } catch {
        return !0;
      }
    }
    function Ve(t) {
      return "" + t;
    }
    function Ue(t) {
      if (zt(t))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", At(t)), Ve(t);
    }
    var G = P.ReactCurrentOwner, Wt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ye, He, fe;
    fe = {};
    function Bt(t) {
      if (ne.call(t, "ref")) {
        var s = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Vt(t) {
      if (ne.call(t, "key")) {
        var s = Object.getOwnPropertyDescriptor(t, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Ut(t, s) {
      if (typeof t.ref == "string" && G.current && s && G.current.stateNode !== s) {
        var l = M(G.current.type);
        fe[l] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', M(G.current.type), t.ref), fe[l] = !0);
      }
    }
    function Yt(t, s) {
      {
        var l = function() {
          Ye || (Ye = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Ht(t, s) {
      {
        var l = function() {
          He || (He = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Jt = function(t, s, l, p, b, w, m) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: s,
        ref: l,
        props: m,
        // Record the component responsible for creating this element.
        _owner: w
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function Gt(t, s, l, p, b) {
      {
        var w, m = {}, x = null, O = null;
        l !== void 0 && (Ue(l), x = "" + l), Vt(s) && (Ue(s.key), x = "" + s.key), Bt(s) && (O = s.ref, Ut(s, b));
        for (w in s)
          ne.call(s, w) && !Wt.hasOwnProperty(w) && (m[w] = s[w]);
        if (t && t.defaultProps) {
          var j = t.defaultProps;
          for (w in j)
            m[w] === void 0 && (m[w] = j[w]);
        }
        if (x || O) {
          var k = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          x && Yt(m, k), O && Ht(m, k);
        }
        return Jt(t, x, O, b, p, G.current, m);
      }
    }
    var pe = P.ReactCurrentOwner, Je = P.ReactDebugCurrentFrame;
    function V(t) {
      if (t) {
        var s = t._owner, l = re(t.type, t._source, s ? s.type : null);
        Je.setExtraStackFrame(l);
      } else
        Je.setExtraStackFrame(null);
    }
    var he;
    he = !1;
    function ge(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Ge() {
      {
        if (pe.current) {
          var t = M(pe.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function qt(t) {
      {
        if (t !== void 0) {
          var s = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + s + ":" + l + ".";
        }
        return "";
      }
    }
    var qe = {};
    function Xt(t) {
      {
        var s = Ge();
        if (!s) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (s = `

Check the top-level render call using <` + l + ">.");
        }
        return s;
      }
    }
    function Xe(t, s) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = Xt(s);
        if (qe[l])
          return;
        qe[l] = !0;
        var p = "";
        t && t._owner && t._owner !== pe.current && (p = " It was passed a child from " + M(t._owner.type) + "."), V(t), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, p), V(null);
      }
    }
    function Ke(t, s) {
      {
        if (typeof t != "object")
          return;
        if (de(t))
          for (var l = 0; l < t.length; l++) {
            var p = t[l];
            ge(p) && Xe(p, s);
          }
        else if (ge(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var b = z(t);
          if (typeof b == "function" && b !== t.entries)
            for (var w = b.call(t), m; !(m = w.next()).done; )
              ge(m.value) && Xe(m.value, s);
        }
      }
    }
    function Kt(t) {
      {
        var s = t.type;
        if (s == null || typeof s == "string")
          return;
        var l;
        if (typeof s == "function")
          l = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === y))
          l = s.propTypes;
        else
          return;
        if (l) {
          var p = M(s);
          Dt(l, t.props, "prop", p, t);
        } else if (s.PropTypes !== void 0 && !he) {
          he = !0;
          var b = M(s);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Qt(t) {
      {
        for (var s = Object.keys(t.props), l = 0; l < s.length; l++) {
          var p = s[l];
          if (p !== "children" && p !== "key") {
            V(t), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), V(null);
            break;
          }
        }
        t.ref !== null && (V(t), C("Invalid attribute `ref` supplied to `React.Fragment`."), V(null));
      }
    }
    function Qe(t, s, l, p, b, w) {
      {
        var m = St(t);
        if (!m) {
          var x = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var O = qt(b);
          O ? x += O : x += Ge();
          var j;
          t === null ? j = "null" : de(t) ? j = "array" : t !== void 0 && t.$$typeof === r ? (j = "<" + (M(t.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : j = typeof t, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, x);
        }
        var k = Gt(t, s, l, b, w);
        if (k == null)
          return k;
        if (m) {
          var T = s.children;
          if (T !== void 0)
            if (p)
              if (de(T)) {
                for (var U = 0; U < T.length; U++)
                  Ke(T[U], t);
                Object.freeze && Object.freeze(T);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ke(T, t);
        }
        return t === i ? Qt(k) : Kt(k), k;
      }
    }
    function Zt(t, s, l) {
      return Qe(t, s, l, !0);
    }
    function er(t, s, l) {
      return Qe(t, s, l, !1);
    }
    var tr = er, rr = Zt;
    X.Fragment = i, X.jsx = tr, X.jsxs = rr;
  }()), X;
}
process.env.NODE_ENV === "production" ? be.exports = or() : be.exports = ar();
var a = be.exports;
const sr = ({ color: e = "#000" }) => /* @__PURE__ */ a.jsx(
  "svg",
  {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "40px",
    height: "40px",
    viewBox: "0 0 50 50",
    children: /* @__PURE__ */ a.jsx(
      "path",
      {
        fill: e,
        d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",
        children: /* @__PURE__ */ a.jsx(
          "animateTransform",
          {
            attributeType: "xml",
            attributeName: "transform",
            type: "rotate",
            from: "0 25 25",
            to: "360 25 25",
            dur: "0.6s",
            repeatCount: "indefinite"
          }
        )
      }
    )
  }
), lr = sr;
var lt = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.TERTIARY = "tertiary", e.DANGER = "danger", e.SUCCESS = "success", e.TRANSPARENT = "transparent", e))(lt || {});
const ct = ({
  variant: e = "primary",
  route: r,
  children: n,
  height: i = 56,
  padding: o = "11px 20px",
  leftIcon: u,
  radius: f = "28px",
  buttonPadding: h,
  rightIcon: c,
  color: v,
  type: g,
  loading: y = !1,
  className: $,
  disabled: _ = !1,
  fontWeight: R = "600",
  ...L
}) => /* @__PURE__ */ a.jsxs(
  cr,
  {
    className: $,
    $padding: o,
    $fontWeight: R,
    $variant: e,
    $height: i || 40,
    type: g,
    disabled: _,
    $radius: f,
    ...L,
    children: [
      u,
      y ? /* @__PURE__ */ a.jsx(lr, { color: "white" }) : n,
      c
    ]
  }
), cr = d.button`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  height: ${({ $height: e }) => `${e}px`};
  border-radius: ${({ $radius: e }) => e};
  padding: ${({ $padding: e }) => e};
  background-color: ${({ $variant: e, theme: r }) => r.colors.buttonBackground[e]};
  color: ${({ $variant: e, theme: r }) => r.colors.buttonText[e]};
  border: ${({ $variant: e }) => e === "transparent" ? "0" : "1px"} solid
    ${({ $variant: e }) => e !== "transparent" ? "transparent" : " rgb(35, 31, 32)"};
  font-weight: ${({ $fontWeight: e }) => e};
  font-size: 1.8rem;
  :hover {
    background-color: ${({ $variant: e, theme: r }) => r.colors.hover[e]};
  }
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
  width: 100%;
`;
ct.colors = lt;
const si = ct, ur = ({
  value: e,
  name: r,
  onChange: n,
  disabled: i = !1,
  label: o,
  error: u,
  className: f,
  intermediate: h
}) => /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs(
  dr,
  {
    disabled: i,
    className: f,
    onClick: () => {
      !i && n(!e);
    },
    children: [
      /* @__PURE__ */ a.jsxs(
        pr,
        {
          intermediate: h,
          disabled: i,
          error: u,
          checked: e,
          children: [
            /* @__PURE__ */ a.jsx(
              gr,
              {
                type: "checkbox",
                name: r,
                checked: e || !1,
                disabled: i,
                onChange: () => {
                }
              }
            ),
            /* @__PURE__ */ a.jsx(hr, { checked: e || !1, intermediate: h, disabled: i })
          ]
        }
      ),
      /* @__PURE__ */ a.jsx(fr, { children: o })
    ]
  }
) }), dr = d.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
`, fr = d.div`
  text-align: left;
  font-size: 1.4rem;
  color: #4b5565;
`, pr = d.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: ${({ theme: e, checked: r, error: n, intermediate: i }) => r || i ? e.colors.primary : n ? e.colors.danger : e.colors.border};
  opacity: ${({ disabled: e }) => e ? 0.48 : 1};
`, hr = d.label`
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  cursor: pointer;
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  left: 2px;
  top: 2px;

  background-color: ${({ intermediate: e, checked: r }) => e || r ? "transparent" : "white"};

  &::after {
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    filter: alpha(opacity=0);
    opacity: 0;
    content: '';
    position: absolute;
    width: 11px;
    height: 4px;
    background: transparent;
    top: ${({ intermediate: e }) => `${e ? 2 : 3}px`};
    left: ${({ intermediate: e }) => `${e ? 0.8 : 1}px`};
    border: 2px solid #fcfff4;
    border-top: none;
    border-right: none;

    ${({ intermediate: e }) => e && `border-left: none;
   
  `}

    ${({ checked: e, intermediate: r }) => r || e ? `
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      filter: alpha(opacity=100);
      opacity: 1;
  ` : ""}

    -webkit-transform: rotate(
      ${({ intermediate: e }) => `${e ? 0 : -45}deg`}
    );
    -moz-transform: rotate(${({ intermediate: e }) => `${e ? 0 : -45}deg`});
    -o-transform: rotate(${({ intermediate: e }) => `${e ? 0 : -45}deg`});
    -ms-transform: rotate(${({ intermediate: e }) => `${e ? 0 : -45}deg`});
    transform: rotate(${({ intermediate: e }) => `${e ? 0 : -45}deg`});
  }
`, gr = d.input`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -4px;
  left: -4px;
  z-index: 1;
  opacity: 0;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
`, li = ur, vr = ({ value: e, name: r, onChange: n }) => /* @__PURE__ */ a.jsx(a.Fragment, { children: /* @__PURE__ */ a.jsxs(xr, { children: [
  /* @__PURE__ */ a.jsx(mr, { type: "checkbox", name: r, checked: e, onChange: n }),
  /* @__PURE__ */ a.jsx(oe, {})
] }) }), xr = d.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`, oe = d.span`
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
`, mr = d.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${oe} {
    background-color: ${({ theme: e }) => e.colors.primary};
  }

  &:focus + ${oe} {
    box-shadow: 0 0 1px ${({ theme: e }) => e.colors.primary};
  }

  &:checked + ${oe}:before {
    transform: translateX(20px); // Move the toggle to the right when checked
  }
`, ci = vr, br = ({ error: e }) => e ? /* @__PURE__ */ a.jsx(yr, { children: e }) : /* @__PURE__ */ a.jsx(a.Fragment, {}), yr = d.label`
  display: inline-block;
  width: 100%;
  color: ${({ theme: e }) => e.colors.error};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4rem;
  margin-bottom: 8px;
`, wr = ({
  error: e,
  showError: r = !0,
  label: n,
  className: i,
  padding: o = "0",
  onClick: u,
  handleBlur: f,
  subLabel: h,
  bottomLabel: c,
  secondLabel: v,
  children: g
}) => /* @__PURE__ */ a.jsxs(
  $r,
  {
    tabIndex: -1,
    onBlur: f,
    className: i,
    padding: o,
    onClick: u,
    children: [
      /* @__PURE__ */ a.jsxs(jr, { children: [
        !!n && /* @__PURE__ */ a.jsxs(Cr, { children: [
          /* @__PURE__ */ a.jsx(kr, { htmlFor: n, children: n }),
          !!h && /* @__PURE__ */ a.jsx(_r, { children: h })
        ] }),
        v
      ] }),
      g,
      r && /* @__PURE__ */ a.jsx(br, { error: e }),
      c && /* @__PURE__ */ a.jsx(Er, { children: c })
    ]
  }
), $r = d.div`
  display: block;
  position: relative;
  padding: ${({ padding: e }) => e};
`, jr = d.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, Er = d.div`
  margin-top: 6px;
  font-size: 1.2rem;
  color: #697586;
`, kr = d.label`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Cr = d.div`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`, _r = d.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`, ut = wr, Or = ({
  value: e,
  name: r,
  error: n,
  readOnly: i = !1,
  leftIcon: o,
  rightIcon: u,
  onChange: f,
  placeholder: h,
  type: c = "text",
  disabled: v,
  height: g = 56,
  selectedValue: y = !1,
  onInputClick: $,
  inputMode: _ = "text",
  onFocus: R = () => {
  },
  ...L
}) => /* @__PURE__ */ a.jsxs(Rr, { $error: !!n, $height: g || 40, $disabled: v || !1, children: [
  o,
  /* @__PURE__ */ a.jsx(
    Sr,
    {
      $selectedValue: y,
      onClick: () => $ ? $() : null,
      readOnly: i,
      type: c,
      name: r,
      autoComplete: "off",
      value: e || "",
      onChange: (z) => {
        var P;
        return f && f(((P = z == null ? void 0 : z.target) == null ? void 0 : P.value) || "");
      },
      placeholder: h,
      disabled: v,
      onFocus: R,
      inputMode: _,
      ...L
    }
  ),
  u
] }), Rr = d.div`
  display: flex;
  height: ${({ $height: e }) => `${e}px`};
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme: e, $error: r }) => r ? e.colors.error : e.colors.border};
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};

  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "text"};
  :focus-within {
    border-color: ${({ theme: e }) => e.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme: e }) => `${e.colors.primary}33`};
  }
`, Sr = d.input`
  border: none;
  padding: 0 12px;
  width: 100%;
  height: 100%;

  cursor: ${({ disabled: e }) => e ? "not-allowed" : "text"};

  background-color: white;
  font-size: 1.6rem;
  color: ${({ theme: e }) => e.colors.text.input};

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
    color: ${({ theme: e, $selectedValue: r }) => e.colors.text.input + `${r ? "" : "8F"}`};
  }
  ::-moz-placeholder {
    color: ${({ theme: e, $selectedValue: r }) => e.colors.text.input + `${r ? "" : "8F"}`};
  }
  ::-ms-placeholder {
    color: ${({ theme: e, $selectedValue: r }) => e.colors.text.input + `${r ? "" : "8F"}`};
  }
  ::placeholder {
    color: ${({ theme: e, $selectedValue: r }) => e.colors.text.input + `${r ? "" : "8F"}`};
  }
`, dt = Or, Tr = ({
  value: e,
  name: r,
  error: n,
  showError: i = !0,
  readOnly: o = !1,
  label: u,
  className: f,
  leftIcon: h,
  rightIcon: c,
  padding: v,
  onChange: g,
  subLabel: y,
  placeholder: $,
  bottomLabel: _,
  type: R,
  disabled: L,
  height: z,
  secondLabel: P,
  onInputClick: C
}) => /* @__PURE__ */ a.jsx(
  ut,
  {
    padding: v,
    className: f,
    label: u,
    subLabel: y,
    secondLabel: P,
    error: n,
    showError: i,
    bottomLabel: _,
    children: /* @__PURE__ */ a.jsx(
      dt,
      {
        value: e,
        name: r,
        error: n,
        leftIcon: h,
        rightIcon: c,
        onChange: g,
        disabled: L,
        height: z,
        readOnly: o,
        onInputClick: C,
        placeholder: $,
        type: R
      }
    )
  }
), ui = Tr;
var ft = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, rt = N.createContext && N.createContext(ft), D = function() {
  return D = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, D.apply(this, arguments);
}, Pr = function(e, r) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && r.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      r.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
  return n;
};
function pt(e) {
  return e && e.map(function(r, n) {
    return N.createElement(r.tag, D({
      key: n
    }, r.attr), pt(r.child));
  });
}
function Z(e) {
  return function(r) {
    return N.createElement(Nr, D({
      attr: D({}, e.attr)
    }, r), pt(e.child));
  };
}
function Nr(e) {
  var r = function(n) {
    var i = e.attr, o = e.size, u = e.title, f = Pr(e, ["attr", "size", "title"]), h = o || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), N.createElement("svg", D({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, i, f, {
      className: c,
      style: D(D({
        color: e.color || n.color
      }, n.style), e.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && N.createElement("title", null, u), e.children);
  };
  return rt !== void 0 ? N.createElement(rt.Consumer, null, function(n) {
    return r(n);
  }) : r(ft);
}
function Lr(e) {
  return Z({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z" } }] })(e);
}
function Mr(e) {
  return Z({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" } }] })(e);
}
function Ir(e) {
  return Z({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "19", y1: "12", x2: "5", y2: "12" } }, { tag: "polyline", attr: { points: "12 19 5 12 12 5" } }] })(e);
}
function Dr(e) {
  return Z({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "3", y1: "12", x2: "21", y2: "12" } }, { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" } }, { tag: "line", attr: { x1: "3", y1: "18", x2: "21", y2: "18" } }] })(e);
}
function Fr(e) {
  return Z({ tag: "svg", attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" } }] })(e);
}
var F = /* @__PURE__ */ ((e) => (e.visibleOn = "visibleOn", e.visibleOff = "visibleOff", e.logout = "logout", e.back = "back", e.burger = "burger", e.right = "right", e))(F || {});
const Ar = ({ name: e, className: r }) => {
  switch (e) {
    case "visibleOn":
      return /* @__PURE__ */ a.jsx(Mr, { className: r });
    case "visibleOff":
      return /* @__PURE__ */ a.jsx(Lr, { className: r });
    case "back":
      return /* @__PURE__ */ a.jsx(Ir, { className: r });
    case "burger":
      return /* @__PURE__ */ a.jsx(Dr, { className: r });
    case "right":
      return /* @__PURE__ */ a.jsx(Fr, { className: r });
    case "logout":
      return /* @__PURE__ */ a.jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "none",
          stroke: "currentColor",
          strokeWidth: "2",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          className: r,
          children: [
            /* @__PURE__ */ a.jsx("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
            /* @__PURE__ */ a.jsx("polyline", { points: "16 17 21 12 16 7" }),
            /* @__PURE__ */ a.jsx("line", { x1: "21", y1: "12", x2: "9", y2: "12" })
          ]
        }
      );
    default:
      return null;
  }
}, A = Ar, zr = ({
  value: e,
  secondLabel: r,
  name: n,
  error: i,
  showError: o = !0,
  label: u,
  className: f,
  padding: h,
  onChange: c,
  placeholder: v,
  disabled: g,
  height: y,
  onInputClick: $
}) => {
  const [_, R] = H(!1);
  return /* @__PURE__ */ a.jsx(
    ut,
    {
      padding: h,
      secondLabel: r,
      className: f,
      label: u,
      error: i,
      showError: o,
      children: /* @__PURE__ */ a.jsx(
        dt,
        {
          value: e,
          type: _ ? "text" : "password",
          name: n,
          error: i,
          rightIcon: /* @__PURE__ */ a.jsx(Wr, { onClick: () => R(!_), children: /* @__PURE__ */ a.jsx(Br, { name: _ ? "visibleOn" : "visibleOff" }) }),
          onChange: c,
          disabled: g,
          height: y,
          onInputClick: $,
          placeholder: v
        }
      )
    }
  );
}, Wr = d.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`, Br = d(A)`
  color: #9aa4b2;
  font-size: 2rem;
`, di = zr, Vr = ({ options: e, onChange: r, value: n, className: i = "" }) => /* @__PURE__ */ a.jsx(Ur, { className: i, children: /* @__PURE__ */ a.jsx(Yr, { $numberOfColumns: e.length, children: e.map((o, u) => /* @__PURE__ */ a.jsx(
  Hr,
  {
    onClick: () => r(o.value),
    $selected: o.value === n,
    children: o.label
  },
  `switch_btn_${u}`
)) }) }), Ur = d.div`
  width: 100%;
  padding: 32px 0;
`, Yr = d.div`
  display: grid;

  grid-template-columns: repeat(${({ $numberOfColumns: e }) => e}, 1fr);

  background-color: ${({ theme: e }) => e.colors.cardBackground.primary};
  padding: 4px;
  border-radius: 99px;
`, Hr = d.div`
  display: flex;
  background-color: ${({ $selected: e }) => e ? "rgb(20, 83, 45)" : "transparent"};
  color: ${({ $selected: e, theme: r }) => e ? "white" : r.colors.text.primary};
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
`, fi = Vr, Jr = ({
  mapHost: e,
  mapPath: r = "/edit?types[]=point&buffer=xl",
  value: n,
  onChange: i,
  ...o
}) => {
  const u = nr(null), f = je(
    (c) => {
      var v, g;
      c.origin === e && i(JSON.parse((g = (v = c == null ? void 0 : c.data) == null ? void 0 : v.mapIframeMsg) == null ? void 0 : g.data));
    },
    [i]
  );
  Y(() => (window.addEventListener("message", f), () => window.removeEventListener("message", f)), [f]);
  const h = () => {
    var c, v;
    n && ((v = (c = u == null ? void 0 : u.current) == null ? void 0 : c.contentWindow) == null || v.postMessage({ geom: n }, "*"));
  };
  return /* @__PURE__ */ a.jsx(
    Gr,
    {
      src: `${e}${r}`,
      ref: u,
      width: "100%",
      allowFullScreen: !0,
      onLoad: h,
      "aria-hidden": "false",
      tabIndex: 1,
      ...o
    }
  );
}, pi = Jr, Gr = d.iframe`
  height: 400px;
  width: 100%;
  display: block;
  border: 1px solid #d4d5de;
  border-radius: 4px;
  margin-top: 8px;
`;
var K = function() {
  return K = Object.assign || function(e) {
    for (var r, n = 1, i = arguments.length; n < i; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, K.apply(this, arguments);
}, qr = function(e, r) {
  var n = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && r.indexOf(i) < 0 && (n[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, i = Object.getOwnPropertySymbols(e); o < i.length; o++)
      r.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]]);
  return n;
}, nt = !1, Ee = ir(function(e, r) {
  var n = e.style, i = qr(e, ["style"]), o = Xr();
  !nt && (n != null && n.height) && (nt = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
  var u = K(K({}, n), { height: o ? o + "px" : "100vh" });
  return N.createElement("div", K({ ref: r, style: u }, i));
});
Ee.displayName = "Div100vh";
function Xr() {
  var e = H(it), r = e[0], n = e[1], i = Kr();
  return Y(function() {
    if (!i)
      return;
    function o() {
      var u = it();
      n(u);
    }
    return window.addEventListener("resize", o), function() {
      return window.removeEventListener("resize", o);
    };
  }, [i]), i ? r : null;
}
function it() {
  return ht() ? window.innerHeight : null;
}
function Kr() {
  var e = H(!1), r = e[0], n = e[1];
  return Y(function() {
    ht() && n(!0);
  }, []), r;
}
function ht() {
  return typeof window < "u" && typeof document < "u";
}
const B = {
  mobileS: "(max-width: 320px)",
  mobileM: "(max-width: 425px)",
  mobileL: "(max-width: 868px)",
  desktop: "(min-width: 869px)"
}, Qr = (e) => {
  const [r, n] = H(!1), i = je(() => {
    const o = window.matchMedia(e);
    n(o.matches);
  }, [e]);
  return Y(() => {
    i();
  }, [i]), Y(() => (window.addEventListener("resize", i), () => window.removeEventListener("resize", i)), [i]), r;
};
/**
 * @remix-run/router v1.15.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function ye() {
  return ye = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, ye.apply(this, arguments);
}
var ot;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(ot || (ot = {}));
function S(e, r) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(r);
}
function ke(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
function gt(e) {
  let r = {};
  if (e) {
    let n = e.indexOf("#");
    n >= 0 && (r.hash = e.substr(n), e = e.substr(0, n));
    let i = e.indexOf("?");
    i >= 0 && (r.search = e.substr(i), e = e.substr(0, i)), e && (r.pathname = e);
  }
  return r;
}
var at;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(at || (at = {}));
function we(e, r) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [n, i] = Zr(e.path, e.caseSensitive, e.end), o = r.match(n);
  if (!o)
    return null;
  let u = o[0], f = u.replace(/(.)\/+$/, "$1"), h = o.slice(1);
  return {
    params: i.reduce((v, g, y) => {
      let {
        paramName: $,
        isOptional: _
      } = g;
      if ($ === "*") {
        let L = h[y] || "";
        f = u.slice(0, u.length - L.length).replace(/(.)\/+$/, "$1");
      }
      const R = h[y];
      return _ && !R ? v[$] = void 0 : v[$] = (R || "").replace(/%2F/g, "/"), v;
    }, {}),
    pathname: u,
    pathnameBase: f,
    pattern: e
  };
}
function Zr(e, r, n) {
  r === void 0 && (r = !1), n === void 0 && (n = !0), ke(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let i = [], o = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (f, h, c) => (i.push({
    paramName: h,
    isOptional: c != null
  }), c ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (i.push({
    paramName: "*"
  }), o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? o += "\\/*$" : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"), [new RegExp(o, r ? void 0 : "i"), i];
}
function en(e, r) {
  r === void 0 && (r = "/");
  let {
    pathname: n,
    search: i = "",
    hash: o = ""
  } = typeof e == "string" ? gt(e) : e;
  return {
    pathname: n ? n.startsWith("/") ? n : tn(n, r) : r,
    search: sn(i),
    hash: ln(o)
  };
}
function tn(e, r) {
  let n = r.replace(/\/+$/, "").split("/");
  return e.split("/").forEach((o) => {
    o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
  }), n.length > 1 ? n.join("/") : "/";
}
function ve(e, r, n, i) {
  return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + r + "` field [" + JSON.stringify(i) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function rn(e) {
  return e.filter((r, n) => n === 0 || r.route.path && r.route.path.length > 0);
}
function nn(e, r) {
  let n = rn(e);
  return r ? n.map((i, o) => o === e.length - 1 ? i.pathname : i.pathnameBase) : n.map((i) => i.pathnameBase);
}
function on(e, r, n, i) {
  i === void 0 && (i = !1);
  let o;
  typeof e == "string" ? o = gt(e) : (o = ye({}, e), S(!o.pathname || !o.pathname.includes("?"), ve("?", "pathname", "search", o)), S(!o.pathname || !o.pathname.includes("#"), ve("#", "pathname", "hash", o)), S(!o.search || !o.search.includes("#"), ve("#", "search", "hash", o)));
  let u = e === "" || o.pathname === "", f = u ? "/" : o.pathname, h;
  if (f == null)
    h = n;
  else {
    let y = r.length - 1;
    if (!i && f.startsWith("..")) {
      let $ = f.split("/");
      for (; $[0] === ".."; )
        $.shift(), y -= 1;
      o.pathname = $.join("/");
    }
    h = y >= 0 ? r[y] : "/";
  }
  let c = en(o, h), v = f && f !== "/" && f.endsWith("/"), g = (u || f === ".") && n.endsWith("/");
  return !c.pathname.endsWith("/") && (v || g) && (c.pathname += "/"), c;
}
const an = (e) => e.join("/").replace(/\/\/+/g, "/"), sn = (e) => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, ln = (e) => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e, vt = ["post", "put", "patch", "delete"];
new Set(vt);
const cn = ["get", ...vt];
new Set(cn);
/**
 * React Router v6.22.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
function $e() {
  return $e = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
    }
    return e;
  }, $e.apply(this, arguments);
}
const Ce = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (Ce.displayName = "DataRouter");
const un = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (un.displayName = "DataRouterState");
const dn = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (dn.displayName = "Await");
const _e = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (_e.displayName = "Navigation");
const Oe = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (Oe.displayName = "Location");
const ae = /* @__PURE__ */ E.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (ae.displayName = "Route");
const fn = /* @__PURE__ */ E.createContext(null);
process.env.NODE_ENV !== "production" && (fn.displayName = "RouteError");
function xt() {
  return E.useContext(Oe) != null;
}
function Re() {
  return xt() || (process.env.NODE_ENV !== "production" ? S(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : S(!1)), E.useContext(Oe).location;
}
const mt = "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function bt(e) {
  E.useContext(_e).static || E.useLayoutEffect(e);
}
function se() {
  let {
    isDataRoute: e
  } = E.useContext(ae);
  return e ? xn() : pn();
}
function pn() {
  xt() || (process.env.NODE_ENV !== "production" ? S(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useNavigate() may be used only in the context of a <Router> component."
  ) : S(!1));
  let e = E.useContext(Ce), {
    basename: r,
    future: n,
    navigator: i
  } = E.useContext(_e), {
    matches: o
  } = E.useContext(ae), {
    pathname: u
  } = Re(), f = JSON.stringify(nn(o, n.v7_relativeSplatPath)), h = E.useRef(!1);
  return bt(() => {
    h.current = !0;
  }), E.useCallback(function(v, g) {
    if (g === void 0 && (g = {}), process.env.NODE_ENV !== "production" && ke(h.current, mt), !h.current)
      return;
    if (typeof v == "number") {
      i.go(v);
      return;
    }
    let y = on(v, JSON.parse(f), u, g.relative === "path");
    e == null && r !== "/" && (y.pathname = y.pathname === "/" ? r : an([r, y.pathname])), (g.replace ? i.replace : i.push)(y, g.state, g);
  }, [r, i, f, u, e]);
}
var yt = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e;
}(yt || {}), wt = /* @__PURE__ */ function(e) {
  return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e;
}(wt || {});
function $t(e) {
  return e + " must be used within a data router.  See https://reactrouter.com/routers/picking-a-router.";
}
function hn(e) {
  let r = E.useContext(Ce);
  return r || (process.env.NODE_ENV !== "production" ? S(!1, $t(e)) : S(!1)), r;
}
function gn(e) {
  let r = E.useContext(ae);
  return r || (process.env.NODE_ENV !== "production" ? S(!1, $t(e)) : S(!1)), r;
}
function vn(e) {
  let r = gn(e), n = r.matches[r.matches.length - 1];
  return n.route.id || (process.env.NODE_ENV !== "production" ? S(!1, e + ' can only be used on routes that contain a unique "id"') : S(!1)), n.route.id;
}
function xn() {
  let {
    router: e
  } = hn(yt.UseNavigateStable), r = vn(wt.UseNavigateStable), n = E.useRef(!1);
  return bt(() => {
    n.current = !0;
  }), E.useCallback(function(o, u) {
    u === void 0 && (u = {}), process.env.NODE_ENV !== "production" && ke(n.current, mt), n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, $e({
      fromRouteId: r
    }, u)));
  }, [e, r]);
}
new Promise(() => {
});
const mn = ({ label: e, icon: r, onClick: n, isActive: i = !1 }) => /* @__PURE__ */ a.jsxs(bn, { $isActive: i, onClick: n, children: [
  /* @__PURE__ */ a.jsx(yn, { children: r ? /* @__PURE__ */ a.jsx(wn, { name: r }) : null }),
  e,
  /* @__PURE__ */ a.jsx(A, { name: F.right })
] }), bn = d.div`
  cursor: pointer;
  grid-template-columns: 48px 1fr 32px;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  background-color: ${({ theme: e }) => e.colors.largeButton.GREY};
  border: 1px solid transparent;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  display: grid;
  text-decoration: none;
  gap: 12px;

  ${({ $isActive: e, theme: r }) => e && `
    background-color: #f5f6fe;
    border: 1px solid ${r.colors.primary};
  `};

  &:hover {
    background-color: #f5f6fe;
    border: 1px solid ${({ theme: e }) => e.colors.primary};
  }
`, yn = d.div`
  background-color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`, wn = d(A)``, st = mn, $n = ({ visible: e, children: r, onClose: n }) => {
  const i = je(
    (o) => {
      o.key === "Escape" && n && n();
    },
    [n]
  );
  return Y(() => (window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i)), [e, i]), e ? /* @__PURE__ */ a.jsx(
    jn,
    {
      onClick: (o) => {
        o.target === o.currentTarget && n && n();
      },
      children: r
    }
  ) : /* @__PURE__ */ a.jsx(N.Fragment, {});
}, jn = d.div`
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
  @media ${B.mobileL} {
    padding: 0px;
  }
`, En = $n, kn = ({ onClose: e, visible: r = !0, loggedIn: n, loginSlug: i, onLogout: o, routes: u }) => {
  const f = se(), h = Re();
  return /* @__PURE__ */ a.jsx(En, { visible: r, onClose: e, children: /* @__PURE__ */ a.jsx(_n, { children: /* @__PURE__ */ a.jsxs(On, { children: [
    /* @__PURE__ */ a.jsx(Sn, { children: /* @__PURE__ */ a.jsxs(Rn, { onClick: e, children: [
      /* @__PURE__ */ a.jsx(Cn, { name: "close" }),
      "Uždaryti"
    ] }) }),
    /* @__PURE__ */ a.jsxs(Tn, { children: [
      /* @__PURE__ */ a.jsx(Pn, { children: "Meniu" }),
      /* @__PURE__ */ a.jsx(Nn, { children: "Pasirinkite dominančią sritį" })
    ] }),
    u == null ? void 0 : u.map((c, v) => /* @__PURE__ */ a.jsx(
      st,
      {
        isActive: !!we({ path: c.slug, end: !1 }, h.pathname),
        label: c.title || "",
        icon: c.iconName,
        onClick: () => {
          f(c.slug), e();
        }
      },
      `menu_button_${v}`
    )),
    /* @__PURE__ */ a.jsx(
      st,
      {
        label: n ? "Atsijungti" : "Prisijungti",
        icon: F.logout,
        onClick: () => {
          n ? o() : (f(i), e());
        }
      }
    )
  ] }) }) });
}, Cn = d(A)`
  cursor: pointer;
  font-size: 2.4rem;
`, _n = d(Ee)`
  width: 100%;
`, On = d.div`
  background-color: white;
  position: relative;
  width: 100%;
  min-height: 100%;
  padding: 0 16px 24px 16px;
  @media ${B.desktop} {
    max-width: 700px;
    padding: 40px;
    flex-basis: auto;
    border-radius: 16px;
    min-height: fit-content;
  }
`, Rn = d.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 4px;
  text-decoration: none;
  margin: 0 0 0 auto;
`, Sn = d.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 48px;
  justify-content: space-between;
  padding: 16px 0;
`, Tn = d.div`
  margin: 16px 0 32px 0;
  justify-content: center;
`, Pn = d.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
`, Nn = d.div`
  line-height: 26px;
  margin-top: 4px;
  text-align: center;
`, jt = kn, Ln = () => {
  const [e, r] = H(!1), n = se();
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(Mn, { children: [
      /* @__PURE__ */ a.jsx(An, { onClick: () => n(-1), children: /* @__PURE__ */ a.jsx(Fn, { name: F.back }) }),
      /* @__PURE__ */ a.jsxs(In, { onClick: () => r(!0), children: [
        /* @__PURE__ */ a.jsx(Dn, { name: F.burger }),
        "Meniu"
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(jt, { visible: e, onClose: () => r(!1) })
  ] });
}, Mn = d.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  background-color: white;
  @media ${B.desktop} {
    display: none;
  }
`, In = d.div`
  align-items: center;
  color: ${({ theme: e }) => e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`, Dn = d(A)`
  margin-right: 4px;
  font-size: 2.4rem;
`, Fn = d(A)`
  align-items: center;
  display: flex;
  font-size: 2.4rem;
  gap: 4px;
  text-decoration: none;
`, An = d.div`
  padding: 16px 16px 16px 0;
`, zn = Ln, Wn = ({ logo: e }) => {
  const r = se(), [n, i] = H(!1);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(Bn, { children: [
      /* @__PURE__ */ a.jsx("div", { onClick: () => r("/"), children: e }),
      /* @__PURE__ */ a.jsxs(Vn, { onClick: () => i(!0), children: [
        /* @__PURE__ */ a.jsx(Un, { name: F.burger }),
        "Meniu"
      ] })
    ] }),
    /* @__PURE__ */ a.jsx(jt, { visible: n, onClose: () => i(!1) })
  ] });
}, Bn = d.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 80px;
  justify-content: space-between;
  padding: 16px;
  width: 100%;
  background-color: white;
  @media ${B.desktop} {
    display: none;
  }
`, Vn = d.div`
  align-items: center;
  color: ${({ theme: e }) => e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`, Un = d(A)`
  margin-right: 4px;
  font-size: 2rem;
`, Yn = Wn, Hn = ({ loggedIn: e, routes: r, onLogout: n, logo: i, loginSlug: o, currentRoute: u }) => {
  const f = se(), h = Re();
  return /* @__PURE__ */ a.jsxs(Gn, { children: [
    /* @__PURE__ */ a.jsx(Jn, { children: i }),
    r.map((c, v) => /* @__PURE__ */ a.jsxs(
      me,
      {
        onClick: () => f(c.slug),
        $isActive: !!we({ path: c.slug, end: !1 }, u.slug),
        children: [
          /* @__PURE__ */ a.jsx(Q, { name: c.iconName }),
          /* @__PURE__ */ a.jsx(xe, { children: c.title })
        ]
      },
      `sidebar_btn_${c.slug}_${v}`
    )),
    /* @__PURE__ */ a.jsx(qn, {}),
    e ? /* @__PURE__ */ a.jsxs(me, { onClick: () => n(), $isActive: !1, children: [
      /* @__PURE__ */ a.jsx(Q, { name: F.logout }),
      /* @__PURE__ */ a.jsx(xe, { children: "Atsijungti" })
    ] }) : /* @__PURE__ */ a.jsxs(
      me,
      {
        onClick: () => f(o),
        $isActive: !!we({ path: o, end: !1 }, h.pathname),
        children: [
          /* @__PURE__ */ a.jsx(Q, { name: F.logout }),
          /* @__PURE__ */ a.jsx(xe, { children: "Prisijungti" })
        ]
      }
    )
  ] });
}, Jn = d.div`
  margin-bottom: 20px;
`, Q = d(A)`
  cursor: pointer;
  font-size: 2.4rem;
  svg {
    stroke: ${({ theme: e }) => e.colors.primary};
  }
  rect {
    stroke: ${({ theme: e }) => e.colors.primary};
  }
  path {
    stroke: ${({ theme: e }) => e.colors.primary};
  }
  circle {
    stroke: ${({ theme: e }) => e.colors.primary};
  }
  polyline {
    stroke: ${({ theme: e }) => e.colors.primary};
  }
  line {
    stroke: ${({ theme: e }) => e.colors.primary};
  }
`, xe = d.div`
  font-size: 1.6rem;
  font-weight: 500;
`, Gn = d.nav`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
  height: 100%;
  min-width: 320px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.02);
  gap: 4px;
`, me = d.div`
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 8px;
  border-radius: 5px;
  transition: all 0.2s ease-out;
  color: ${({ theme: e }) => e.colors.text.retroBlack};

  ${({ $isActive: e, theme: r }) => e && `


 ${Q} {
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

  &:hover ${Q} {
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
    background-color: ${({ theme: e }) => e.colors.primary};
  }
`, qn = d.div`
  width: 100%;
  height: 1px;
  background-color: #d4d5de;
  margin: 16px 0;
`, Xn = Hn, Kn = ({ children: e, onScroll: r = () => {
}, loggedIn: n, currentRoute: i, routes: o, logo: u }) => {
  const f = Qr(B.mobileL);
  return /* @__PURE__ */ a.jsxs(Qn, { children: [
    !f && /* @__PURE__ */ a.jsx(Xn, { loggedIn: n, routes: o, logo: u, currentRoute: i }),
    /* @__PURE__ */ a.jsx(Zn, { onScroll: r, children: /* @__PURE__ */ a.jsxs(ei, { children: [
      i != null && i.back ? /* @__PURE__ */ a.jsx(zn, {}) : /* @__PURE__ */ a.jsx(Yn, { logo: u }),
      e
    ] }) })
  ] });
}, hi = Kn, Qn = d(Ee)`
  width: 100vw;
  display: flex;
`, Zn = d.div`
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  background-color: white;
`, ei = d.div`
  display: flex;
  width: 100%;
  min-height: 100%;
  flex-direction: column;
  align-items: center;
  @media ${B.desktop} {
    padding: 40px 16px;
    height: fit-content;
    background-color: #f7f7f7;
  }
`, ti = ({ children: e, title: r, customSubTitle: n, customTitle: i, currentRoute: o }) => {
  const u = r || (o == null ? void 0 : o.title);
  return /* @__PURE__ */ a.jsxs(ni, { children: [
    i || u && /* @__PURE__ */ a.jsx(ii, { children: u }),
    n || (o == null ? void 0 : o.description) && /* @__PURE__ */ a.jsx(ri, { children: o == null ? void 0 : o.description }),
    e
  ] });
}, gi = ti, ri = d.div`
  color: ${({ theme: e }) => e.colors.text.primary};
  margin-bottom: 16px;
`, ni = d.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  align-self: center;
  align-items: center;
  padding: 0 12px;
  background-color: white;
  @media ${B.desktop} {
    max-width: 700px;
    border-radius: 16px;
    margin: 0 auto;
    padding: 40px;
    overflow-y: auto;
    height: fit-content;
  }
`, ii = d.div`
  color: ${({ theme: e }) => e.colors.text.primary};
  font-size: 3.2rem;
  font-weight: 800;
  margin: 16px 0;
  text-align: center;
`;
export {
  si as Button,
  li as CheckBox,
  gi as ContentLayout,
  hi as DefaultLayout,
  ut as FieldWrapper,
  pi as MapField,
  En as Modal,
  di as PasswordField,
  ci as Switch,
  fi as Tabs,
  ui as TextField
};
