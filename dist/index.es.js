import F, { useState as br, useRef as xr, useCallback as yr, useEffect as wr } from "react";
import x from "styled-components";
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
var ke;
function Er() {
  if (ke)
    return Y;
  ke = 1;
  var r = F, o = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, f = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, v = { key: !0, ref: !0, __self: !0, __source: !0 };
  function b(m, c, y) {
    var g, $ = {}, R = null, C = null;
    y !== void 0 && (R = "" + y), c.key !== void 0 && (R = "" + c.key), c.ref !== void 0 && (C = c.ref);
    for (g in c)
      s.call(c, g) && !v.hasOwnProperty(g) && ($[g] = c[g]);
    if (m && m.defaultProps)
      for (g in c = m.defaultProps, c)
        $[g] === void 0 && ($[g] = c[g]);
    return { $$typeof: o, type: m, key: R, ref: C, props: $, _owner: f.current };
  }
  return Y.Fragment = a, Y.jsx = b, Y.jsxs = b, Y;
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
var Oe;
function $r() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = F, o = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), v = Symbol.for("react.profiler"), b = Symbol.for("react.provider"), m = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), y = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), O = Symbol.iterator, A = "@@iterator";
    function D(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = O && e[O] || e[A];
      return typeof t == "function" ? t : null;
    }
    var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function _(e) {
      {
        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          n[i - 1] = arguments[i];
        Le("error", e, n);
      }
    }
    function Le(e, t, n) {
      {
        var i = k.ReactDebugCurrentFrame, p = i.getStackAddendum();
        p !== "" && (t += "%s", n = n.concat([p]));
        var h = n.map(function(d) {
          return String(d);
        });
        h.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, h);
      }
    }
    var Ne = !1, We = !1, Ye = !1, Ve = !1, Be = !1, ae;
    ae = Symbol.for("react.module.reference");
    function Ue(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === s || e === v || Be || e === f || e === y || e === g || Ve || e === C || Ne || We || Ye || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === $ || e.$$typeof === b || e.$$typeof === m || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ae || e.getModuleId !== void 0));
    }
    function Ge(e, t, n) {
      var i = e.displayName;
      if (i)
        return i;
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
        case a:
          return "Portal";
        case v:
          return "Profiler";
        case f:
          return "StrictMode";
        case y:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var t = e;
            return ie(t) + ".Consumer";
          case b:
            var n = e;
            return ie(n._context) + ".Provider";
          case c:
            return Ge(e, e.render, "ForwardRef");
          case $:
            var i = e.displayName || null;
            return i !== null ? i : S(e.type) || "Memo";
          case R: {
            var p = e, h = p._payload, d = p._init;
            try {
              return S(d(h));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, N = 0, se, le, ce, ue, fe, de, pe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function He() {
      {
        if (N === 0) {
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
        N++;
      }
    }
    function Je() {
      {
        if (N--, N === 0) {
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
        N < 0 && _("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = k.ReactCurrentDispatcher, K;
    function B(e, t, n) {
      {
        if (K === void 0)
          try {
            throw Error();
          } catch (p) {
            var i = p.stack.trim().match(/\n( *(at )?)/);
            K = i && i[1] || "";
          }
        return `
` + K + e;
      }
    }
    var Z = !1, U;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      U = new qe();
    }
    function ve(e, t) {
      if (!e || Z)
        return "";
      {
        var n = U.get(e);
        if (n !== void 0)
          return n;
      }
      var i;
      Z = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var h;
      h = X.current, X.current = null, He();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (P) {
              i = P;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (P) {
              i = P;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (P) {
            i = P;
          }
          e();
        }
      } catch (P) {
        if (P && i && typeof P.stack == "string") {
          for (var u = P.stack.split(`
`), j = i.stack.split(`
`), w = u.length - 1, E = j.length - 1; w >= 1 && E >= 0 && u[w] !== j[E]; )
            E--;
          for (; w >= 1 && E >= 0; w--, E--)
            if (u[w] !== j[E]) {
              if (w !== 1 || E !== 1)
                do
                  if (w--, E--, E < 0 || u[w] !== j[E]) {
                    var T = `
` + u[w].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, T), T;
                  }
                while (w >= 1 && E >= 0);
              break;
            }
        }
      } finally {
        Z = !1, X.current = h, Je(), Error.prepareStackTrace = p;
      }
      var L = e ? e.displayName || e.name : "", Te = L ? B(L) : "";
      return typeof e == "function" && U.set(e, Te), Te;
    }
    function Xe(e, t, n) {
      return ve(e, !1);
    }
    function Ke(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function G(e, t, n) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ke(e));
      if (typeof e == "string")
        return B(e);
      switch (e) {
        case y:
          return B("Suspense");
        case g:
          return B("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Xe(e.render);
          case $:
            return G(e.type, t, n);
          case R: {
            var i = e, p = i._payload, h = i._init;
            try {
              return G(h(p), t, n);
            } catch {
            }
          }
        }
      return "";
    }
    var H = Object.prototype.hasOwnProperty, ge = {}, me = k.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var t = e._owner, n = G(e.type, e._source, t ? t.type : null);
        me.setExtraStackFrame(n);
      } else
        me.setExtraStackFrame(null);
    }
    function Ze(e, t, n, i, p) {
      {
        var h = Function.call.bind(H);
        for (var d in e)
          if (h(e, d)) {
            var u = void 0;
            try {
              if (typeof e[d] != "function") {
                var j = Error((i || "React class") + ": " + n + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw j.name = "Invariant Violation", j;
              }
              u = e[d](t, d, i, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              u = w;
            }
            u && !(u instanceof Error) && (J(p), _("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", n, d, typeof u), J(null)), u instanceof Error && !(u.message in ge) && (ge[u.message] = !0, J(p), _("Failed %s type: %s", n, u.message), J(null));
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
    var W = k.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, we, ee;
    ee = {};
    function nr(e) {
      if (H.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function or(e) {
      if (H.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function ar(e, t) {
      if (typeof e.ref == "string" && W.current && t && W.current.stateNode !== t) {
        var n = S(W.current.type);
        ee[n] || (_('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(W.current.type), e.ref), ee[n] = !0);
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
    var lr = function(e, t, n, i, p, h, d) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: n,
        props: d,
        // Record the component responsible for creating this element.
        _owner: h
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function cr(e, t, n, i, p) {
      {
        var h, d = {}, u = null, j = null;
        n !== void 0 && (xe(n), u = "" + n), or(t) && (xe(t.key), u = "" + t.key), nr(t) && (j = t.ref, ar(t, p));
        for (h in t)
          H.call(t, h) && !tr.hasOwnProperty(h) && (d[h] = t[h]);
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (h in w)
            d[h] === void 0 && (d[h] = w[h]);
        }
        if (u || j) {
          var E = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && ir(d, E), j && sr(d, E);
        }
        return lr(e, u, j, p, i, W.current, d);
      }
    }
    var re = k.ReactCurrentOwner, Ee = k.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var t = e._owner, n = G(e.type, e._source, t ? t.type : null);
        Ee.setExtraStackFrame(n);
      } else
        Ee.setExtraStackFrame(null);
    }
    var te;
    te = !1;
    function ne(e) {
      return typeof e == "object" && e !== null && e.$$typeof === o;
    }
    function $e() {
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
    var _e = {};
    function fr(e) {
      {
        var t = $e();
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
        if (_e[n])
          return;
        _e[n] = !0;
        var i = "";
        e && e._owner && e._owner !== re.current && (i = " It was passed a child from " + S(e._owner.type) + "."), M(e), _('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, i), M(null);
      }
    }
    function je(e, t) {
      {
        if (typeof e != "object")
          return;
        if (Q(e))
          for (var n = 0; n < e.length; n++) {
            var i = e[n];
            ne(i) && Re(i, t);
          }
        else if (ne(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = D(e);
          if (typeof p == "function" && p !== e.entries)
            for (var h = p.call(e), d; !(d = h.next()).done; )
              ne(d.value) && Re(d.value, t);
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
        else if (typeof t == "object" && (t.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === $))
          n = t.propTypes;
        else
          return;
        if (n) {
          var i = S(t);
          Ze(n, e.props, "prop", i, e);
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
          var i = t[n];
          if (i !== "children" && i !== "key") {
            M(e), _("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", i), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), _("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    function Ce(e, t, n, i, p, h) {
      {
        var d = Ue(e);
        if (!d) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var j = ur(p);
          j ? u += j : u += $e();
          var w;
          e === null ? w = "null" : Q(e) ? w = "array" : e !== void 0 && e.$$typeof === o ? (w = "<" + (S(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : w = typeof e, _("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, u);
        }
        var E = cr(e, t, n, p, h);
        if (E == null)
          return E;
        if (d) {
          var T = t.children;
          if (T !== void 0)
            if (i)
              if (Q(T)) {
                for (var L = 0; L < T.length; L++)
                  je(T[L], e);
                Object.freeze && Object.freeze(T);
              } else
                _("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              je(T, e);
        }
        return e === s ? pr(E) : dr(E), E;
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
process.env.NODE_ENV === "production" ? oe.exports = Er() : oe.exports = $r();
var l = oe.exports;
const _r = ({ color: r = "#000" }) => /* @__PURE__ */ l.jsx(
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
), Rr = _r;
var Pe = /* @__PURE__ */ ((r) => (r.PRIMARY = "primary", r.SECONDARY = "secondary", r.TERTIARY = "tertiary", r.DANGER = "danger", r.SUCCESS = "success", r.TRANSPARENT = "transparent", r))(Pe || {});
const Fe = ({
  variant: r = "primary",
  route: o,
  children: a,
  height: s = 56,
  padding: f = "11px 20px",
  leftIcon: v,
  radius: b = "28px",
  buttonPadding: m,
  rightIcon: c,
  color: y,
  type: g,
  loading: $ = !1,
  className: R,
  disabled: C = !1,
  fontWeight: O = "600",
  ...A
}) => /* @__PURE__ */ l.jsxs(
  jr,
  {
    className: R,
    $padding: f,
    $fontWeight: O,
    $variant: r,
    $height: s || 40,
    type: g,
    disabled: C,
    $radius: b,
    ...A,
    children: [
      v,
      $ ? /* @__PURE__ */ l.jsx(Rr, { color: "white" }) : a,
      c
    ]
  }
), jr = x.button`
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
const dt = Fe, Cr = ({
  value: r,
  name: o,
  onChange: a,
  disabled: s = !1,
  label: f,
  error: v,
  className: b,
  intermediate: m
}) => /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(
  Tr,
  {
    disabled: s,
    className: b,
    onClick: () => {
      !s && a(!r);
    },
    children: [
      /* @__PURE__ */ l.jsxs(
        Or,
        {
          intermediate: m,
          disabled: s,
          error: v,
          checked: r,
          children: [
            /* @__PURE__ */ l.jsx(
              Pr,
              {
                type: "checkbox",
                name: o,
                checked: r || !1,
                disabled: s,
                onChange: () => {
                }
              }
            ),
            /* @__PURE__ */ l.jsx(Sr, { checked: r || !1, intermediate: m, disabled: s })
          ]
        }
      ),
      /* @__PURE__ */ l.jsx(kr, { children: f })
    ]
  }
) }), Tr = x.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  cursor: ${({ disabled: r }) => r ? "not-allowed" : "pointer"};
`, kr = x.div`
  text-align: left;
  font-size: 1.4rem;
  color: #4b5565;
`, Or = x.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: ${({ theme: r, checked: o, error: a, intermediate: s }) => o || s ? r.colors.primary : a ? r.colors.danger : r.colors.border};
  opacity: ${({ disabled: r }) => r ? 0.48 : 1};
`, Sr = x.label`
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
`, Pr = x.input`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -4px;
  left: -4px;
  z-index: 1;
  opacity: 0;
  cursor: ${({ disabled: r }) => r ? "not-allowed" : "pointer"};
`, pt = Cr, Fr = ({ value: r, name: o, onChange: a }) => /* @__PURE__ */ l.jsx(l.Fragment, { children: /* @__PURE__ */ l.jsxs(Ir, { children: [
  /* @__PURE__ */ l.jsx(Ar, { type: "checkbox", name: o, checked: r, onChange: a }),
  /* @__PURE__ */ l.jsx(q, {})
] }) }), Ir = x.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`, q = x.span`
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
`, Ar = x.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${q} {
    background-color: ${({ theme: r }) => r.colors.primary};
  }

  &:focus + ${q} {
    box-shadow: 0 0 1px ${({ theme: r }) => r.colors.primary};
  }

  &:checked + ${q}:before {
    transform: translateX(20px); // Move the toggle to the right when checked
  }
`, ht = Fr, Dr = ({ error: r }) => r ? /* @__PURE__ */ l.jsx(zr, { children: r }) : /* @__PURE__ */ l.jsx(l.Fragment, {}), zr = x.label`
  display: inline-block;
  width: 100%;
  color: ${({ theme: r }) => r.colors.error};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4rem;
  margin-bottom: 8px;
`, Mr = ({
  error: r,
  showError: o = !0,
  label: a,
  className: s,
  padding: f = "0",
  onClick: v,
  handleBlur: b,
  subLabel: m,
  bottomLabel: c,
  secondLabel: y,
  children: g
}) => /* @__PURE__ */ l.jsxs(
  Lr,
  {
    tabIndex: -1,
    onBlur: b,
    className: s,
    padding: f,
    onClick: v,
    children: [
      /* @__PURE__ */ l.jsxs(Nr, { children: [
        !!a && /* @__PURE__ */ l.jsxs(Vr, { children: [
          /* @__PURE__ */ l.jsx(Yr, { htmlFor: a, children: a }),
          !!m && /* @__PURE__ */ l.jsx(Br, { children: m })
        ] }),
        y
      ] }),
      g,
      o && /* @__PURE__ */ l.jsx(Dr, { error: r }),
      c && /* @__PURE__ */ l.jsx(Wr, { children: c })
    ]
  }
), Lr = x.div`
  display: block;
  position: relative;
  padding: ${({ padding: r }) => r};
`, Nr = x.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, Wr = x.div`
  margin-top: 6px;
  font-size: 1.2rem;
  color: #697586;
`, Yr = x.label`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme: r }) => r.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, Vr = x.div`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`, Br = x.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`, Ie = Mr, Ur = ({
  value: r,
  name: o,
  error: a,
  readOnly: s = !1,
  leftIcon: f,
  rightIcon: v,
  onChange: b,
  placeholder: m,
  type: c = "text",
  disabled: y,
  height: g = 56,
  selectedValue: $ = !1,
  onInputClick: R,
  inputMode: C = "text",
  onFocus: O = () => {
  },
  ...A
}) => /* @__PURE__ */ l.jsxs(Gr, { $error: !!a, $height: g || 40, $disabled: y || !1, children: [
  f,
  /* @__PURE__ */ l.jsx(
    Hr,
    {
      $selectedValue: $,
      onClick: () => R ? R() : null,
      readOnly: s,
      type: c,
      name: o,
      autoComplete: "off",
      value: r || "",
      onChange: (D) => {
        var k;
        return b && b(((k = D == null ? void 0 : D.target) == null ? void 0 : k.value) || "");
      },
      placeholder: m,
      disabled: y,
      onFocus: O,
      inputMode: C,
      ...A
    }
  ),
  v
] }), Gr = x.div`
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
`, Hr = x.input`
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
`, Ae = Ur, Jr = ({
  value: r,
  name: o,
  error: a,
  showError: s = !0,
  readOnly: f = !1,
  label: v,
  className: b,
  leftIcon: m,
  rightIcon: c,
  padding: y,
  onChange: g,
  subLabel: $,
  placeholder: R,
  bottomLabel: C,
  type: O,
  disabled: A,
  height: D,
  secondLabel: k,
  onInputClick: _
}) => /* @__PURE__ */ l.jsx(
  Ie,
  {
    padding: y,
    className: b,
    label: v,
    subLabel: $,
    secondLabel: k,
    error: a,
    showError: s,
    bottomLabel: C,
    children: /* @__PURE__ */ l.jsx(
      Ae,
      {
        value: r,
        name: o,
        error: a,
        leftIcon: m,
        rightIcon: c,
        onChange: g,
        disabled: A,
        height: D,
        readOnly: f,
        onInputClick: _,
        placeholder: R,
        type: O
      }
    )
  }
), vt = Jr;
var De = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Se = F.createContext && F.createContext(De), I = function() {
  return I = Object.assign || function(r) {
    for (var o, a = 1, s = arguments.length; a < s; a++) {
      o = arguments[a];
      for (var f in o)
        Object.prototype.hasOwnProperty.call(o, f) && (r[f] = o[f]);
    }
    return r;
  }, I.apply(this, arguments);
}, qr = function(r, o) {
  var a = {};
  for (var s in r)
    Object.prototype.hasOwnProperty.call(r, s) && o.indexOf(s) < 0 && (a[s] = r[s]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function")
    for (var f = 0, s = Object.getOwnPropertySymbols(r); f < s.length; f++)
      o.indexOf(s[f]) < 0 && Object.prototype.propertyIsEnumerable.call(r, s[f]) && (a[s[f]] = r[s[f]]);
  return a;
};
function ze(r) {
  return r && r.map(function(o, a) {
    return F.createElement(o.tag, I({
      key: a
    }, o.attr), ze(o.child));
  });
}
function Me(r) {
  return function(o) {
    return F.createElement(Xr, I({
      attr: I({}, r.attr)
    }, o), ze(r.child));
  };
}
function Xr(r) {
  var o = function(a) {
    var s = r.attr, f = r.size, v = r.title, b = qr(r, ["attr", "size", "title"]), m = f || a.size || "1em", c;
    return a.className && (c = a.className), r.className && (c = (c ? c + " " : "") + r.className), F.createElement("svg", I({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, s, b, {
      className: c,
      style: I(I({
        color: r.color || a.color
      }, a.style), r.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), v && F.createElement("title", null, v), r.children);
  };
  return Se !== void 0 ? F.createElement(Se.Consumer, null, function(a) {
    return o(a);
  }) : o(De);
}
function Kr(r) {
  return Me({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z" } }] })(r);
}
function Zr(r) {
  return Me({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" } }] })(r);
}
const Qr = ({ name: r, className: o }) => {
  switch (r) {
    case "visibleOn":
      return /* @__PURE__ */ l.jsx(Zr, { className: o });
    case "visibleOff":
      return /* @__PURE__ */ l.jsx(Kr, { className: o });
    default:
      return null;
  }
}, et = Qr, rt = ({
  value: r,
  secondLabel: o,
  name: a,
  error: s,
  showError: f = !0,
  label: v,
  className: b,
  padding: m,
  onChange: c,
  placeholder: y,
  disabled: g,
  height: $,
  onInputClick: R
}) => {
  const [C, O] = br(!1);
  return /* @__PURE__ */ l.jsx(
    Ie,
    {
      padding: m,
      secondLabel: o,
      className: b,
      label: v,
      error: s,
      showError: f,
      children: /* @__PURE__ */ l.jsx(
        Ae,
        {
          value: r,
          type: C ? "text" : "password",
          name: a,
          error: s,
          rightIcon: /* @__PURE__ */ l.jsx(tt, { onClick: () => O(!C), children: /* @__PURE__ */ l.jsx(nt, { name: C ? "visibleOn" : "visibleOff" }) }),
          onChange: c,
          disabled: g,
          height: $,
          onInputClick: R,
          placeholder: y
        }
      )
    }
  );
}, tt = x.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`, nt = x(et)`
  color: #9aa4b2;
  font-size: 2rem;
`, gt = rt, ot = ({ options: r, onChange: o, value: a, className: s = "" }) => /* @__PURE__ */ l.jsx(at, { className: s, children: /* @__PURE__ */ l.jsx(it, { $numberOfColumns: r.length, children: r.map((f, v) => /* @__PURE__ */ l.jsx(
  st,
  {
    onClick: () => o(f.value),
    $selected: f.value === a,
    children: f.label
  },
  `switch_btn_${v}`
)) }) }), at = x.div`
  width: 100%;
  padding: 32px 0;
`, it = x.div`
  display: grid;

  grid-template-columns: repeat(${({ $numberOfColumns: r }) => r}, 1fr);

  background-color: ${({ theme: r }) => r.colors.cardBackground.primary};
  padding: 4px;
  border-radius: 99px;
`, st = x.div`
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
`, mt = ot, lt = ({
  mapHost: r,
  mapPath: o = "/edit?types[]=point&buffer=xl",
  value: a,
  onChange: s,
  ...f
}) => {
  const v = xr(null), b = yr(
    (c) => {
      var y, g;
      c.origin === r && s(JSON.parse((g = (y = c == null ? void 0 : c.data) == null ? void 0 : y.mapIframeMsg) == null ? void 0 : g.data));
    },
    [s]
  );
  wr(() => (window.addEventListener("message", b), () => window.removeEventListener("message", b)), [b]);
  const m = () => {
    var c, y;
    a && ((y = (c = v == null ? void 0 : v.current) == null ? void 0 : c.contentWindow) == null || y.postMessage({ geom: a }, "*"));
  };
  return /* @__PURE__ */ l.jsx(
    ct,
    {
      src: `${r}${o}`,
      ref: v,
      width: "100%",
      allowFullScreen: !0,
      onLoad: m,
      "aria-hidden": "false",
      tabIndex: 1,
      ...f
    }
  );
}, bt = lt, ct = x.iframe`
  height: 400px;
  width: 100%;
  display: block;
  border: 1px solid #d4d5de;
  border-radius: 4px;
  margin-top: 8px;
`;
export {
  dt as Button,
  pt as CheckBox,
  bt as MapField,
  gt as PasswordField,
  ht as Switch,
  mt as Tabs,
  vt as TextField
};
