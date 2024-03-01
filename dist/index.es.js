import F, { useState as br } from "react";
import m from "styled-components";
var oe = { exports: {} }, Y = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function xr() {
  if (Oe)
    return Y;
  Oe = 1;
  var r = F, o = Symbol.for("react.element"), i = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, b = { key: !0, ref: !0, __self: !0, __source: !0 };
  function y(v, d, $) {
    var g, E = {}, R = null, C = null;
    $ !== void 0 && (R = "" + $), d.key !== void 0 && (R = "" + d.key), d.ref !== void 0 && (C = d.ref);
    for (g in d)
      s.call(d, g) && !b.hasOwnProperty(g) && (E[g] = d[g]);
    if (v && v.defaultProps)
      for (g in d = v.defaultProps, d)
        E[g] === void 0 && (E[g] = d[g]);
    return { $$typeof: o, type: v, key: R, ref: C, props: E, _owner: f.current };
  }
  return Y.Fragment = i, Y.jsx = y, Y.jsxs = y, Y;
}
var V = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function yr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var r = F, o = Symbol.for("react.element"), i = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), y = Symbol.for("react.provider"), v = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), $ = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), E = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), k = Symbol.iterator, A = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = k && e[k] || e[A];
      return typeof t == "function" ? t : null;
    }
    var O = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), a = 1; a < t; a++)
          n[a - 1] = arguments[a];
        Ne("error", e, n);
      }
    }
    function Ne(e, t, n) {
      {
        var a = O.ReactDebugCurrentFrame, p = a.getStackAddendum();
        p !== "" && (t += "%s", n = n.concat([p]));
        var h = n.map(function(u) {
          return String(u);
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var We = !1, Le = !1, Ye = !1, Ve = !1, Be = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === b || Be || e === f || e === $ || e === g || Ve || e === C || We || Le || Ye || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === E || e.$$typeof === y || e.$$typeof === v || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function He(e, t, n) {
      var a = e.displayName;
      if (a)
        return a;
      var p = t.displayName || t.name || "";
      return p !== "" ? n + "(" + p + ")" : n;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && _("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case s:
          return "Fragment";
        case i:
          return "Portal";
        case b:
          return "Profiler";
        case f:
          return "StrictMode";
        case $:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case v:
            var t = e;
            return ie(t) + ".Consumer";
          case y:
            var n = e;
            return ie(n._context) + ".Provider";
          case d:
            return He(e, e.render, "ForwardRef");
          case E:
            var a = e.displayName || null;
            return a !== null ? a : S(e.type) || "Memo";
          case R: {
            var p = e, h = p._payload, u = p._init;
            try {
              return S(u(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, W = 0, se, le, ce, ue, fe, de, pe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function Ge() {
      {
        if (W === 0) {
          se = console.log, le = console.info, ce = console.warn, ue = console.error, fe = console.group, de = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        W++;
      }
    }
    function qe() {
      {
        if (W--, W === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: se
            }),
            info: z({}, e, {
              value: le
            }),
            warn: z({}, e, {
              value: ce
            }),
            error: z({}, e, {
              value: ue
            }),
            group: z({}, e, {
              value: fe
            }),
            groupCollapsed: z({}, e, {
              value: de
            }),
            groupEnd: z({}, e, {
              value: pe
            })
          });
        }
        W < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = O.ReactCurrentDispatcher, K;
    function B(e, t, n) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (p) {
            var a = p.stack.trim().match(/\n( *(at )?)/);
            K = a && a[1] || "";
          }
        return `
` + K + e;
      }
    }
    var Z = !1, U;
    {
      var Je = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Je();
    }
    function ve(e, t) {
      if (!e || Z)
        return "";
      {
        var n = U.get(e);
        if (n !== void 0)
          return n;
      }
      var a;
      Z = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = X.current, X.current = null, Ge();
      try {
        if (t) {
          var u = function() {
            throw Error();
          };
          if (Object.defineProperty(u.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(u, []);
            } catch (P) {
              a = P;
            }
            Reflect.construct(e, [], u);
          } else {
            try {
              u.call();
            } catch (P) {
              a = P;
            }
            e.call(u.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            a = P;
          }
          e();
        }
      } catch (P) {
        if (P && a && typeof P.stack == "string") {
          for (var c = P.stack.split(`
`), j = a.stack.split(`
`), x = c.length - 1, w = j.length - 1; x >= 1 && w >= 0 && c[x] !== j[w]; )
            w--;
          for (; x >= 1 && w >= 0; x--, w--)
            if (c[x] !== j[w]) {
              if (x !== 1 || w !== 1)
                do
                  if (x--, w--, w < 0 || c[x] !== j[w]) {
                    var T = `
` + c[x].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, T), T;
                  }
                while (x >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = h, qe(), Error.prepareStackTrace = p;
      }
      var N = e ? e.displayName || e.name : "", Te = N ? B(N) : "";
      return typeof e == "function" && U.set(e, Te), Te;
    }
    function Xe(e, t, n) {
      return ve(e, !1);
    }
    function Ke(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function H(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ke(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case $:
          return B("Suspense");
        case g:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Xe(e.render);
          case E:
            return H(e.type, t, n);
          case R: {
            var a = e, p = a._payload, h = a._init;
            try {
              return H(h(p), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var G = Object.prototype.hasOwnProperty, ge = {}, me = O.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var t = e._owner, n = H(e.type, e._source, t ? t.type : null);
        me.setExtraStackFrame(n);
      } else
        me.setExtraStackFrame(null);
    }
    function Ze(e, t, n, a, p) {
      {
        var h = Function.call.bind(G);
        for (var u in e)
          if (h(e, u)) {
            var c = void 0;
            try {
              if (typeof e[u] != "function") {
                var j = Error((a || "React class") + ": " + n + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              c = e[u](t, u, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              c = x;
            }
            c && !(c instanceof Error) && (q(p), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, u, typeof c), q(null)), c instanceof Error && !(c.message in ge) && (ge[c.message] = !0, q(p), _("Failed %s type: %s", n, c.message), q(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Q(e) {
      return Qe(e);
    }
    function er(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, n = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return n;
      }
    }
    function rr(e) {
      try {
        return be(e), !1;
      } catch {
        return !0;
      }
    }
    function be(e) {
      return "" + e;
    }
    function xe(e) {
      if (rr(e))
        return _("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(e)), be(e);
    }
    var L = O.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, we, ee;
    ee = {};
    function nr(e) {
      if (G.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (G.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, t) {
      if (typeof e.ref == "string" && L.current && t && L.current.stateNode !== t) {
        var n = S(L.current.type);
        ee[n] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(L.current.type), e.ref), ee[n] = !0);
      }
    }
    function ir(e, t) {
      {
        var n = function() {
          ye || (ye = !0, _("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
    }
    function sr(e, t) {
      {
        var n = function() {
          we || (we = !0, _("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
    }
    var lr = function(e, t, n, a, p, h, u) {
      var c = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: u,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return c._store = {}, Object.defineProperty(c._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(c, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(c, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(c.props), Object.freeze(c)), c;
    };
    function cr(e, t, n, a, p) {
      {
        var h, u = {}, c = null, j = null;
        n !== void 0 && (xe(n), c = "" + n), or(t) && (xe(t.key), c = "" + t.key), nr(t) && (j = t.ref, ar(t, p));
        for (h in t)
          G.call(t, h) && !tr.hasOwnProperty(h) && (u[h] = t[h]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (h in x)
            u[h] === void 0 && (u[h] = x[h]);
        }
        if (c || j) {
          var w = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && ir(u, w), j && sr(u, w);
        }
        return lr(e, c, j, p, a, L.current, u);
      }
    }
    var re = O.ReactCurrentOwner, Ee = O.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var t = e._owner, n = H(e.type, e._source, t ? t.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function _e() {
      {
        if (re.current) {
          var e = S(re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ur(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + t + ":" + n + ".";
        }
        return "";
      }
    }
    var $e = {};
    function fr(e) {
      {
        var t = _e();
        if (!t) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (t = `

Check the top-level render call using <` + n + ">.");
        }
        return t;
      }
    }
    function Re(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var n = fr(t);
        if ($e[n])
          return;
        $e[n] = !0;
        var a = "";
        e && e._owner && e._owner !== re.current && (a = " It was passed a child from " + S(e._owner.type) + "."), M(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), M(null);
      }
    }
    function je(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var n = 0; n < e.length; n++) {
            var a = e[n];
            ne(a) && Re(a, t);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = D(e);
          if (typeof p == "function" && p !== e.entries)
            for (var h = p.call(e), u; !(u = h.next()).done; )
              ne(u.value) && Re(u.value, t);
        }
      }
    }
    function dr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var n;
        if (typeof t == "function")
          n = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === E))
          n = t.propTypes;
        else
          return;
        if (n) {
          var a = S(t);
          Ze(n, e.props, "prop", a, e);
        } else if (t.PropTypes !== void 0 && !te) {
          te = !0;
          var p = S(t);
          _("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && _("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(e) {
      {
        for (var t = Object.keys(e.props), n = 0; n < t.length; n++) {
          var a = t[n];
          if (a !== "children" && a !== "key") {
            M(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    function Ce(e, t, n, a, p, h) {
      {
        var u = Ue(e);
        if (!u) {
          var c = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (c += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = ur(p);
          j ? c += j : c += _e();
          var x;
          e === null ? x = "null" : Q(e) ? x = "array" : e !== void 0 && e.$$typeof === o ? (x = "<" + (S(e.type) || "Unknown") + " />", c = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, c);
        }
        var w = cr(e, t, n, p, h);
        if (w == null)
          return w;
        if (u) {
          var T = t.children;
          if (T !== void 0)
            if (a)
              if (Q(T)) {
                for (var N = 0; N < T.length; N++)
                  je(T[N], e);
                Object.freeze && Object.freeze(T);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(T, e);
        }
        return e === s ? pr(w) : dr(w), w;
      }
    }
    function hr(e, t, n) {
      return Ce(e, t, n, !0);
    }
    function vr(e, t, n) {
      return Ce(e, t, n, !1);
    }
    var gr = vr, mr = hr;
    V.Fragment = s, V.jsx = gr, V.jsxs = mr;
  }()), V;
}
process.env.NODE_ENV === "production" ? oe.exports = xr() : oe.exports = yr();
var l = oe.exports;
const wr = ({ color: r = "#000" }) => /* @__PURE__ */ l.jsx(
  "svg",
  {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "40px",
    height: "40px",
    viewBox: "0 0 50 50",
    children: /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: r,
        d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",
        children: /* @__PURE__ */ l.jsx(
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
), Er = wr;
var Pe = /* @__PURE__ */ ((r) => (r.PRIMARY = "primary", r.SECONDARY = "secondary", r.TERTIARY = "tertiary", r.DANGER = "danger", r.SUCCESS = "success", r.TRANSPARENT = "transparent", r))(Pe || {});
const Fe = ({
  variant: r = "primary",
  route: o,
  children: i,
  height: s = 56,
  padding: f = "11px 20px",
  leftIcon: b,
  radius: y = "28px",
  buttonPadding: v,
  rightIcon: d,
  color: $,
  type: g,
  loading: E = !1,
  className: R,
  disabled: C = !1,
  fontWeight: k = "600",
  ...A
}) => /* @__PURE__ */ l.jsxs(
  _r,
  {
    className: R,
    $padding: f,
    $fontWeight: k,
    $variant: r,
    $height: s || 40,
    type: g,
    disabled: C,
    $radius: y,
    ...A,
    children: [
      b,
      E ? /* @__PURE__ */ l.jsx(Er, { color: "white" }) : i,
      d
    ]
  }
), _r = m.button`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  height: ${({ $height: r }) => `${r}px`};
  border-radius: ${({ $radius: r }) => r};
  padding: ${({ $padding: r }) => r};
  background-color: ${({ $variant: r, theme: o }) => o.colors.buttonBackground[r]};
  color: ${({ $variant: r, theme: o }) => o.colors.buttonText[r]};
  border: ${({ $variant: r }) => r === "transparent" ? "0" : "1px"} solid
    ${({ $variant: r }) => r !== "transparent" ? "transparent" : " rgb(35, 31, 32)"};
  font-weight: ${({ $fontWeight: r }) => r};
  font-size: 1.8rem;
  :hover {
    background-color: ${({ $variant: r, theme: o }) => o.colors.hover[r]};
  }
  cursor: ${({ disabled: r }) => r ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: r }) => r ? 0.6 : 1};
  width: 100%;
`;
Fe.colors = Pe;
const st = Fe, $r = ({
  value: r,
  name: o,
  onChange: i,
  disabled: s = !1,
  label: f,
  error: b,
  className: y,
  intermediate: v
}) => /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(
  Rr,
  {
    disabled: s,
    className: y,
    onClick: () => {
      !s && i(!r);
    },
    children: [
      /* @__PURE__ */ l.jsxs(
        Cr,
        {
          intermediate: v,
          disabled: s,
          error: b,
          checked: r,
          children: [
            /* @__PURE__ */ l.jsx(
              Or,
              {
                type: "checkbox",
                name: o,
                checked: r || !1,
                disabled: s,
                onChange: () => {
                }
              }
            ),
            /* @__PURE__ */ l.jsx(Tr, { checked: r || !1, intermediate: v, disabled: s })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(jr, { children: f })
    ]
  }
) }), Rr = m.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  cursor: ${({ disabled: r }) => r ? "not-allowed" : "pointer"};
`, jr = m.div`
  text-align: left;
  font-size: 1.4rem;
  color: #4b5565;
`, Cr = m.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: ${({ theme: r, checked: o, error: i, intermediate: s }) => o || s ? r.colors.primary : i ? r.colors.danger : r.colors.border};
  opacity: ${({ disabled: r }) => r ? 0.48 : 1};
`, Tr = m.label`
  cursor: ${({ disabled: r }) => r ? "not-allowed" : "pointer"};
  cursor: pointer;
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  left: 2px;
  top: 2px;

  background-color: ${({ intermediate: r, checked: o }) => r || o ? "transparent" : "white"};

  &::after {
    -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
    filter: alpha(opacity=0);
    opacity: 0;
    content: '';
    position: absolute;
    width: 11px;
    height: 4px;
    background: transparent;
    top: ${({ intermediate: r }) => `${r ? 2 : 3}px`};
    left: ${({ intermediate: r }) => `${r ? 0.8 : 1}px`};
    border: 2px solid #fcfff4;
    border-top: none;
    border-right: none;

    ${({ intermediate: r }) => r && `border-left: none;
   
  `}

    ${({ checked: r, intermediate: o }) => o || r ? `
      -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(Opacity=100)";
      filter: alpha(opacity=100);
      opacity: 1;
  ` : ""}

    -webkit-transform: rotate(
      ${({ intermediate: r }) => `${r ? 0 : -45}deg`}
    );
    -moz-transform: rotate(${({ intermediate: r }) => `${r ? 0 : -45}deg`});
    -o-transform: rotate(${({ intermediate: r }) => `${r ? 0 : -45}deg`});
    -ms-transform: rotate(${({ intermediate: r }) => `${r ? 0 : -45}deg`});
    transform: rotate(${({ intermediate: r }) => `${r ? 0 : -45}deg`});
  }
`, Or = m.input`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -4px;
  left: -4px;
  z-index: 1;
  opacity: 0;
  cursor: ${({ disabled: r }) => r ? "not-allowed" : "pointer"};
`, lt = $r, kr = ({ value: r, name: o, onChange: i }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(Sr, { children: [
  /* @__PURE__ */ l.jsx(Pr, { type: "checkbox", name: o, checked: r, onChange: i }),
  /* @__PURE__ */ l.jsx(J, {})
] }) }), Sr = m.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`, J = m.span`
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
`, Pr = m.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${J} {
    background-color: ${({ theme: r }) => r.colors.primary};
  }

  &:focus + ${J} {
    box-shadow: 0 0 1px ${({ theme: r }) => r.colors.primary};
  }

  &:checked + ${J}:before {
    transform: translateX(20px); // Move the toggle to the right when checked
  }
`, ct = kr, Fr = ({ error: r }) => r ? /* @__PURE__ */ l.jsx(Ir, { children: r }) : /* @__PURE__ */ l.jsx(l.Fragment, {}), Ir = m.label`
  display: inline-block;
  width: 100%;
  color: ${({ theme: r }) => r.colors.error};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4rem;
  margin-bottom: 8px;
`, Ar = ({
  error: r,
  showError: o = !0,
  label: i,
  className: s,
  padding: f = "0",
  onClick: b,
  handleBlur: y,
  subLabel: v,
  bottomLabel: d,
  secondLabel: $,
  children: g
}) => /* @__PURE__ */ l.jsxs(
  Dr,
  {
    tabIndex: -1,
    onBlur: y,
    className: s,
    padding: f,
    onClick: b,
    children: [
      /* @__PURE__ */ l.jsxs(zr, { children: [
        !!i && /* @__PURE__ */ l.jsxs(Wr, { children: [
          /* @__PURE__ */ l.jsx(Nr, { htmlFor: i, children: i }),
          !!v && /* @__PURE__ */ l.jsx(Lr, { children: v })
        ] }),
        $
      ] }),
      g,
      o && /* @__PURE__ */ l.jsx(Fr, { error: r }),
      d && /* @__PURE__ */ l.jsx(Mr, { children: d })
    ]
  }
), Dr = m.div`
  display: block;
  position: relative;
  padding: ${({ padding: r }) => r};
`, zr = m.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, Mr = m.div`
  margin-top: 6px;
  font-size: 1.2rem;
  color: #697586;
`, Nr = m.label`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme: r }) => r.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Wr = m.div`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`, Lr = m.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`, Ie = Ar, Yr = ({
  value: r,
  name: o,
  error: i,
  readOnly: s = !1,
  leftIcon: f,
  rightIcon: b,
  onChange: y,
  placeholder: v,
  type: d = "text",
  disabled: $,
  height: g = 56,
  selectedValue: E = !1,
  onInputClick: R,
  inputMode: C = "text",
  onFocus: k = () => {
  },
  ...A
}) => /* @__PURE__ */ l.jsxs(Vr, { $error: !!i, $height: g || 40, $disabled: $ || !1, children: [
  f,
  /* @__PURE__ */ l.jsx(
    Br,
    {
      $selectedValue: E,
      onClick: () => R ? R() : null,
      readOnly: s,
      type: d,
      name: o,
      autoComplete: "off",
      value: r || "",
      onChange: (D) => {
        var O;
        return y && y(((O = D == null ? void 0 : D.target) == null ? void 0 : O.value) || "");
      },
      placeholder: v,
      disabled: $,
      onFocus: k,
      inputMode: C,
      ...A
    }
  ),
  b
] }), Vr = m.div`
  display: flex;
  height: ${({ $height: r }) => `${r}px`};
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme: r, $error: o }) => o ? r.colors.error : r.colors.border};
  opacity: ${({ $disabled: r }) => r ? 0.5 : 1};

  cursor: ${({ $disabled: r }) => r ? "not-allowed" : "text"};
  :focus-within {
    border-color: ${({ theme: r }) => r.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme: r }) => `${r.colors.primary}33`};
  }
`, Br = m.input`
  border: none;
  padding: 0 12px;
  width: 100%;
  height: 100%;

  cursor: ${({ disabled: r }) => r ? "not-allowed" : "text"};

  background-color: white;
  font-size: 1.6rem;
  color: ${({ theme: r }) => r.colors.text.input};

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
    color: ${({ theme: r, $selectedValue: o }) => r.colors.text.input + `${o ? "" : "8F"}`};
  }
  ::-moz-placeholder {
    color: ${({ theme: r, $selectedValue: o }) => r.colors.text.input + `${o ? "" : "8F"}`};
  }
  ::-ms-placeholder {
    color: ${({ theme: r, $selectedValue: o }) => r.colors.text.input + `${o ? "" : "8F"}`};
  }
  ::placeholder {
    color: ${({ theme: r, $selectedValue: o }) => r.colors.text.input + `${o ? "" : "8F"}`};
  }
`, Ae = Yr, Ur = ({
  value: r,
  name: o,
  error: i,
  showError: s = !0,
  readOnly: f = !1,
  label: b,
  className: y,
  leftIcon: v,
  rightIcon: d,
  padding: $,
  onChange: g,
  subLabel: E,
  placeholder: R,
  bottomLabel: C,
  type: k,
  disabled: A,
  height: D,
  secondLabel: O,
  onInputClick: _
}) => /* @__PURE__ */ l.jsx(
  Ie,
  {
    padding: $,
    className: y,
    label: b,
    subLabel: E,
    secondLabel: O,
    error: i,
    showError: s,
    bottomLabel: C,
    children: /* @__PURE__ */ l.jsx(
      Ae,
      {
        value: r,
        name: o,
        error: i,
        leftIcon: v,
        rightIcon: d,
        onChange: g,
        disabled: A,
        height: D,
        readOnly: f,
        onInputClick: _,
        placeholder: R,
        type: k
      }
    )
  }
), ut = Ur;
var De = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Se = F.createContext && F.createContext(De), I = function() {
  return I = Object.assign || function(r) {
    for (var o, i = 1, s = arguments.length; i < s; i++) {
      o = arguments[i];
      for (var f in o)
        Object.prototype.hasOwnProperty.call(o, f) && (r[f] = o[f]);
    }
    return r;
  }, I.apply(this, arguments);
}, Hr = function(r, o) {
  var i = {};
  for (var s in r)
    Object.prototype.hasOwnProperty.call(r, s) && o.indexOf(s) < 0 && (i[s] = r[s]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var f = 0, s = Object.getOwnPropertySymbols(r); f < s.length; f++)
      o.indexOf(s[f]) < 0 && Object.prototype.propertyIsEnumerable.call(r, s[f]) && (i[s[f]] = r[s[f]]);
  return i;
};
function ze(r) {
  return r && r.map(function(o, i) {
    return F.createElement(o.tag, I({
      key: i
    }, o.attr), ze(o.child));
  });
}
function Me(r) {
  return function(o) {
    return F.createElement(Gr, I({
      attr: I({}, r.attr)
    }, o), ze(r.child));
  };
}
function Gr(r) {
  var o = function(i) {
    var s = r.attr, f = r.size, b = r.title, y = Hr(r, ["attr", "size", "title"]), v = f || i.size || "1em", d;
    return i.className && (d = i.className), r.className && (d = (d ? d + " " : "") + r.className), F.createElement("svg", I({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, i.attr, s, y, {
      className: d,
      style: I(I({
        color: r.color || i.color
      }, i.style), r.style),
      height: v,
      width: v,
      xmlns: "http://www.w3.org/2000/svg"
    }), b && F.createElement("title", null, b), r.children);
  };
  return Se !== void 0 ? F.createElement(Se.Consumer, null, function(i) {
    return o(i);
  }) : o(De);
}
function qr(r) {
  return Me({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z" } }] })(r);
}
function Jr(r) {
  return Me({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" } }] })(r);
}
const Xr = ({ name: r, className: o }) => {
  switch (r) {
    case "visibleOn":
      return /* @__PURE__ */ l.jsx(Jr, { className: o });
    case "visibleOff":
      return /* @__PURE__ */ l.jsx(qr, { className: o });
    default:
      return null;
  }
}, Kr = Xr, Zr = ({
  value: r,
  secondLabel: o,
  name: i,
  error: s,
  showError: f = !0,
  label: b,
  className: y,
  padding: v,
  onChange: d,
  placeholder: $,
  disabled: g,
  height: E,
  onInputClick: R
}) => {
  const [C, k] = br(!1);
  return /* @__PURE__ */ l.jsx(
    Ie,
    {
      padding: v,
      secondLabel: o,
      className: y,
      label: b,
      error: s,
      showError: f,
      children: /* @__PURE__ */ l.jsx(
        Ae,
        {
          value: r,
          type: C ? "text" : "password",
          name: i,
          error: s,
          rightIcon: /* @__PURE__ */ l.jsx(Qr, { onClick: () => k(!C), children: /* @__PURE__ */ l.jsx(et, { name: C ? "visibleOn" : "visibleOff" }) }),
          onChange: d,
          disabled: g,
          height: E,
          onInputClick: R,
          placeholder: $
        }
      )
    }
  );
}, Qr = m.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`, et = m(Kr)`
  color: #9aa4b2;
  font-size: 2rem;
`, ft = Zr, rt = ({ options: r, onChange: o, value: i, className: s = "" }) => /* @__PURE__ */ l.jsx(tt, { className: s, children: /* @__PURE__ */ l.jsx(nt, { $numberOfColumns: r.length, children: r.map((f, b) => /* @__PURE__ */ l.jsx(
  ot,
  {
    onClick: () => o(f.value),
    $selected: f.value === i,
    children: f.label
  },
  `switch_btn_${b}`
)) }) }), tt = m.div`
  width: 100%;
  padding: 32px 0;
`, nt = m.div`
  display: grid;

  grid-template-columns: repeat(${({ $numberOfColumns: r }) => r}, 1fr);

  background-color: ${({ theme: r }) => r.colors.cardBackground.primary};
  padding: 4px;
  border-radius: 99px;
`, ot = m.div`
  display: flex;
  background-color: ${({ $selected: r }) => r ? "rgb(20, 83, 45)" : "transparent"};
  color: ${({ $selected: r, theme: o }) => r ? "white" : o.colors.text.primary};
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
`, dt = rt;
export {
  st as Button,
  lt as CheckBox,
  ft as PasswordField,
  ct as Switch,
  dt as Tabs,
  ut as TextField
};
