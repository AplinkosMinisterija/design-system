import * as M from "react";
import T, { useState as H, useRef as Bt, useCallback as ve, useEffect as Y, forwardRef as Vt } from "react";
import c from "styled-components";
var ge = { exports: {} }, q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function Yt() {
  if (Ye)
    return q;
  Ye = 1;
  var e = T, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function x(h, u, p) {
    var m, w = {}, $ = null, C = null;
    p !== void 0 && ($ = "" + p), u.key !== void 0 && ($ = "" + u.key), u.ref !== void 0 && (C = u.ref);
    for (m in u)
      o.call(u, m) && !d.hasOwnProperty(m) && (w[m] = u[m]);
    if (h && h.defaultProps)
      for (m in u = h.defaultProps, u)
        w[m] === void 0 && (w[m] = u[m]);
    return { $$typeof: r, type: h, key: $, ref: C, props: w, _owner: s.current };
  }
  return q.Fragment = a, q.jsx = x, q.jsxs = x, q;
}
var J = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Ht() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var e = T, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), x = Symbol.for("react.provider"), h = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), O = Symbol.iterator, P = "@@iterator";
    function z(t) {
      if (t === null || typeof t != "object")
        return null;
      var i = O && t[O] || t[P];
      return typeof i == "function" ? i : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(t) {
      {
        for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), f = 1; f < i; f++)
          l[f - 1] = arguments[f];
        ct("error", t, l);
      }
    }
    function ct(t, i, l) {
      {
        var f = S.ReactDebugCurrentFrame, b = f.getStackAddendum();
        b !== "" && (i += "%s", l = l.concat([b]));
        var y = l.map(function(v) {
          return String(v);
        });
        y.unshift("Warning: " + i), Function.prototype.apply.call(console[t], console, y);
      }
    }
    var ut = !1, dt = !1, ft = !1, pt = !1, ht = !1, ye;
    ye = Symbol.for("react.module.reference");
    function gt(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === d || ht || t === s || t === p || t === m || pt || t === C || ut || dt || ft || typeof t == "object" && t !== null && (t.$$typeof === $ || t.$$typeof === w || t.$$typeof === x || t.$$typeof === h || t.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === ye || t.getModuleId !== void 0));
    }
    function xt(t, i, l) {
      var f = t.displayName;
      if (f)
        return f;
      var b = i.displayName || i.name || "";
      return b !== "" ? l + "(" + b + ")" : l;
    }
    function we(t) {
      return t.displayName || "Context";
    }
    function L(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case a:
          return "Portal";
        case d:
          return "Profiler";
        case s:
          return "StrictMode";
        case p:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case h:
            var i = t;
            return we(i) + ".Consumer";
          case x:
            var l = t;
            return we(l._context) + ".Provider";
          case u:
            return xt(t, t.render, "ForwardRef");
          case w:
            var f = t.displayName || null;
            return f !== null ? f : L(t.type) || "Memo";
          case $: {
            var b = t, y = b._payload, v = b._init;
            try {
              return L(v(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var N = Object.assign, U = 0, $e, je, ke, Ee, Ce, _e, Oe;
    function Re() {
    }
    Re.__reactDisabledLog = !0;
    function vt() {
      {
        if (U === 0) {
          $e = console.log, je = console.info, ke = console.warn, Ee = console.error, Ce = console.group, _e = console.groupCollapsed, Oe = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: Re,
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
        U++;
      }
    }
    function mt() {
      {
        if (U--, U === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: N({}, t, {
              value: $e
            }),
            info: N({}, t, {
              value: je
            }),
            warn: N({}, t, {
              value: ke
            }),
            error: N({}, t, {
              value: Ee
            }),
            group: N({}, t, {
              value: Ce
            }),
            groupCollapsed: N({}, t, {
              value: _e
            }),
            groupEnd: N({}, t, {
              value: Oe
            })
          });
        }
        U < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = S.ReactCurrentDispatcher, ae;
    function Z(t, i, l) {
      {
        if (ae === void 0)
          try {
            throw Error();
          } catch (b) {
            var f = b.stack.trim().match(/\n( *(at )?)/);
            ae = f && f[1] || "";
          }
        return `
` + ae + t;
      }
    }
    var se = !1, ee;
    {
      var bt = typeof WeakMap == "function" ? WeakMap : Map;
      ee = new bt();
    }
    function Se(t, i) {
      if (!t || se)
        return "";
      {
        var l = ee.get(t);
        if (l !== void 0)
          return l;
      }
      var f;
      se = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ie.current, ie.current = null, vt();
      try {
        if (i) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (F) {
              f = F;
            }
            Reflect.construct(t, [], v);
          } else {
            try {
              v.call();
            } catch (F) {
              f = F;
            }
            t.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            f = F;
          }
          t();
        }
      } catch (F) {
        if (F && f && typeof F.stack == "string") {
          for (var g = F.stack.split(`
`), _ = f.stack.split(`
`), j = g.length - 1, k = _.length - 1; j >= 1 && k >= 0 && g[j] !== _[k]; )
            k--;
          for (; j >= 1 && k >= 0; j--, k--)
            if (g[j] !== _[k]) {
              if (j !== 1 || k !== 1)
                do
                  if (j--, k--, k < 0 || g[j] !== _[k]) {
                    var R = `
` + g[j].replace(" at new ", " at ");
                    return t.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", t.displayName)), typeof t == "function" && ee.set(t, R), R;
                  }
                while (j >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        se = !1, ie.current = y, mt(), Error.prepareStackTrace = b;
      }
      var V = t ? t.displayName || t.name : "", Ve = V ? Z(V) : "";
      return typeof t == "function" && ee.set(t, Ve), Ve;
    }
    function yt(t, i, l) {
      return Se(t, !1);
    }
    function wt(t) {
      var i = t.prototype;
      return !!(i && i.isReactComponent);
    }
    function te(t, i, l) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Se(t, wt(t));
      if (typeof t == "string")
        return Z(t);
      switch (t) {
        case p:
          return Z("Suspense");
        case m:
          return Z("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            return yt(t.render);
          case w:
            return te(t.type, i, l);
          case $: {
            var f = t, b = f._payload, y = f._init;
            try {
              return te(y(b), i, l);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, Te = {}, Pe = S.ReactDebugCurrentFrame;
    function ne(t) {
      if (t) {
        var i = t._owner, l = te(t.type, t._source, i ? i.type : null);
        Pe.setExtraStackFrame(l);
      } else
        Pe.setExtraStackFrame(null);
    }
    function $t(t, i, l, f, b) {
      {
        var y = Function.call.bind(re);
        for (var v in t)
          if (y(t, v)) {
            var g = void 0;
            try {
              if (typeof t[v] != "function") {
                var _ = Error((f || "React class") + ": " + l + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              g = t[v](i, v, f, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              g = j;
            }
            g && !(g instanceof Error) && (ne(b), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", l, v, typeof g), ne(null)), g instanceof Error && !(g.message in Te) && (Te[g.message] = !0, ne(b), E("Failed %s type: %s", l, g.message), ne(null));
          }
      }
    }
    var jt = Array.isArray;
    function le(t) {
      return jt(t);
    }
    function kt(t) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, l = i && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return l;
      }
    }
    function Et(t) {
      try {
        return Le(t), !1;
      } catch {
        return !0;
      }
    }
    function Le(t) {
      return "" + t;
    }
    function Fe(t) {
      if (Et(t))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", kt(t)), Le(t);
    }
    var G = S.ReactCurrentOwner, Ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Me, De, ce;
    ce = {};
    function _t(t) {
      if (re.call(t, "ref")) {
        var i = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ot(t) {
      if (re.call(t, "key")) {
        var i = Object.getOwnPropertyDescriptor(t, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function Rt(t, i) {
      if (typeof t.ref == "string" && G.current && i && G.current.stateNode !== i) {
        var l = L(G.current.type);
        ce[l] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', L(G.current.type), t.ref), ce[l] = !0);
      }
    }
    function St(t, i) {
      {
        var l = function() {
          Me || (Me = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Tt(t, i) {
      {
        var l = function() {
          De || (De = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Pt = function(t, i, l, f, b, y, v) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: i,
        ref: l,
        props: v,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: f
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Lt(t, i, l, f, b) {
      {
        var y, v = {}, g = null, _ = null;
        l !== void 0 && (Fe(l), g = "" + l), Ot(i) && (Fe(i.key), g = "" + i.key), _t(i) && (_ = i.ref, Rt(i, b));
        for (y in i)
          re.call(i, y) && !Ct.hasOwnProperty(y) && (v[y] = i[y]);
        if (t && t.defaultProps) {
          var j = t.defaultProps;
          for (y in j)
            v[y] === void 0 && (v[y] = j[y]);
        }
        if (g || _) {
          var k = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          g && St(v, k), _ && Tt(v, k);
        }
        return Pt(t, g, _, b, f, G.current, v);
      }
    }
    var ue = S.ReactCurrentOwner, Ae = S.ReactDebugCurrentFrame;
    function B(t) {
      if (t) {
        var i = t._owner, l = te(t.type, t._source, i ? i.type : null);
        Ae.setExtraStackFrame(l);
      } else
        Ae.setExtraStackFrame(null);
    }
    var de;
    de = !1;
    function fe(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Ie() {
      {
        if (ue.current) {
          var t = L(ue.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Ft(t) {
      {
        if (t !== void 0) {
          var i = t.fileName.replace(/^.*[\\\/]/, ""), l = t.lineNumber;
          return `

Check your code at ` + i + ":" + l + ".";
        }
        return "";
      }
    }
    var ze = {};
    function Mt(t) {
      {
        var i = Ie();
        if (!i) {
          var l = typeof t == "string" ? t : t.displayName || t.name;
          l && (i = `

Check the top-level render call using <` + l + ">.");
        }
        return i;
      }
    }
    function Ne(t, i) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var l = Mt(i);
        if (ze[l])
          return;
        ze[l] = !0;
        var f = "";
        t && t._owner && t._owner !== ue.current && (f = " It was passed a child from " + L(t._owner.type) + "."), B(t), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, f), B(null);
      }
    }
    function We(t, i) {
      {
        if (typeof t != "object")
          return;
        if (le(t))
          for (var l = 0; l < t.length; l++) {
            var f = t[l];
            fe(f) && Ne(f, i);
          }
        else if (fe(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var b = z(t);
          if (typeof b == "function" && b !== t.entries)
            for (var y = b.call(t), v; !(v = y.next()).done; )
              fe(v.value) && Ne(v.value, i);
        }
      }
    }
    function Dt(t) {
      {
        var i = t.type;
        if (i == null || typeof i == "string")
          return;
        var l;
        if (typeof i == "function")
          l = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === w))
          l = i.propTypes;
        else
          return;
        if (l) {
          var f = L(i);
          $t(l, t.props, "prop", f, t);
        } else if (i.PropTypes !== void 0 && !de) {
          de = !0;
          var b = L(i);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function At(t) {
      {
        for (var i = Object.keys(t.props), l = 0; l < i.length; l++) {
          var f = i[l];
          if (f !== "children" && f !== "key") {
            B(t), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), B(null);
            break;
          }
        }
        t.ref !== null && (B(t), E("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    function Be(t, i, l, f, b, y) {
      {
        var v = gt(t);
        if (!v) {
          var g = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = Ft(b);
          _ ? g += _ : g += Ie();
          var j;
          t === null ? j = "null" : le(t) ? j = "array" : t !== void 0 && t.$$typeof === r ? (j = "<" + (L(t.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : j = typeof t, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, g);
        }
        var k = Lt(t, i, l, b, y);
        if (k == null)
          return k;
        if (v) {
          var R = i.children;
          if (R !== void 0)
            if (f)
              if (le(R)) {
                for (var V = 0; V < R.length; V++)
                  We(R[V], t);
                Object.freeze && Object.freeze(R);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(R, t);
        }
        return t === o ? At(k) : Dt(k), k;
      }
    }
    function It(t, i, l) {
      return Be(t, i, l, !0);
    }
    function zt(t, i, l) {
      return Be(t, i, l, !1);
    }
    var Nt = zt, Wt = It;
    J.Fragment = o, J.jsx = Nt, J.jsxs = Wt;
  }()), J;
}
process.env.NODE_ENV === "production" ? ge.exports = Yt() : ge.exports = Ht();
var n = ge.exports;
const Ut = ({ color: e = "#000" }) => /* @__PURE__ */ n.jsx(
  "svg",
  {
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    x: "0px",
    y: "0px",
    width: "40px",
    height: "40px",
    viewBox: "0 0 50 50",
    children: /* @__PURE__ */ n.jsx(
      "path",
      {
        fill: e,
        d: "M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z",
        children: /* @__PURE__ */ n.jsx(
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
), Gt = Ut;
var Ze = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.TERTIARY = "tertiary", e.DANGER = "danger", e.SUCCESS = "success", e.TRANSPARENT = "transparent", e))(Ze || {});
const et = ({
  variant: e = "primary",
  route: r,
  children: a,
  height: o = 56,
  padding: s = "11px 20px",
  leftIcon: d,
  radius: x = "28px",
  buttonPadding: h,
  rightIcon: u,
  color: p,
  type: m,
  loading: w = !1,
  className: $,
  disabled: C = !1,
  fontWeight: O = "600",
  ...P
}) => /* @__PURE__ */ n.jsxs(
  qt,
  {
    className: $,
    $padding: s,
    $fontWeight: O,
    $variant: e,
    $height: o || 40,
    type: m,
    disabled: C,
    $radius: x,
    ...P,
    children: [
      d,
      w ? /* @__PURE__ */ n.jsx(Gt, { color: "white" }) : a,
      u
    ]
  }
), qt = c.button`
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
et.colors = Ze;
const In = et, Jt = ({
  value: e,
  name: r,
  onChange: a,
  disabled: o = !1,
  label: s,
  error: d,
  className: x,
  intermediate: h
}) => /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsxs(
  Xt,
  {
    disabled: o,
    className: x,
    onClick: () => {
      !o && a(!e);
    },
    children: [
      /* @__PURE__ */ n.jsxs(
        Qt,
        {
          intermediate: h,
          disabled: o,
          error: d,
          checked: e,
          children: [
            /* @__PURE__ */ n.jsx(
              er,
              {
                type: "checkbox",
                name: r,
                checked: e || !1,
                disabled: o,
                onChange: () => {
                }
              }
            ),
            /* @__PURE__ */ n.jsx(Zt, { checked: e || !1, intermediate: h, disabled: o })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx(Kt, { children: s })
    ]
  }
) }), Xt = c.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
`, Kt = c.div`
  text-align: left;
  font-size: 1.4rem;
  color: #4b5565;
`, Qt = c.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: ${({ theme: e, checked: r, error: a, intermediate: o }) => r || o ? e.colors.primary : a ? e.colors.danger : e.colors.border};
  opacity: ${({ disabled: e }) => e ? 0.48 : 1};
`, Zt = c.label`
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
`, er = c.input`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -4px;
  left: -4px;
  z-index: 1;
  opacity: 0;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
`, zn = Jt, tr = ({ value: e, name: r, onChange: a }) => /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsxs(rr, { children: [
  /* @__PURE__ */ n.jsx(nr, { type: "checkbox", name: r, checked: e, onChange: a }),
  /* @__PURE__ */ n.jsx(oe, {})
] }) }), rr = c.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`, oe = c.span`
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
`, nr = c.input`
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
`, Nn = tr, or = ({ error: e }) => e ? /* @__PURE__ */ n.jsx(ir, { children: e }) : /* @__PURE__ */ n.jsx(n.Fragment, {}), ir = c.label`
  display: inline-block;
  width: 100%;
  color: ${({ theme: e }) => e.colors.error};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4rem;
  margin-bottom: 8px;
`, ar = ({
  error: e,
  showError: r = !0,
  label: a,
  className: o,
  padding: s = "0",
  onClick: d,
  handleBlur: x,
  subLabel: h,
  bottomLabel: u,
  secondLabel: p,
  children: m
}) => /* @__PURE__ */ n.jsxs(
  sr,
  {
    tabIndex: -1,
    onBlur: x,
    className: o,
    padding: s,
    onClick: d,
    children: [
      /* @__PURE__ */ n.jsxs(lr, { children: [
        !!a && /* @__PURE__ */ n.jsxs(dr, { children: [
          /* @__PURE__ */ n.jsx(ur, { htmlFor: a, children: a }),
          !!h && /* @__PURE__ */ n.jsx(fr, { children: h })
        ] }),
        p
      ] }),
      m,
      r && /* @__PURE__ */ n.jsx(or, { error: e }),
      u && /* @__PURE__ */ n.jsx(cr, { children: u })
    ]
  }
), sr = c.div`
  display: block;
  position: relative;
  padding: ${({ padding: e }) => e};
`, lr = c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, cr = c.div`
  margin-top: 6px;
  font-size: 1.2rem;
  color: #697586;
`, ur = c.label`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, dr = c.div`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`, fr = c.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`, tt = ar, pr = ({
  value: e,
  name: r,
  error: a,
  readOnly: o = !1,
  leftIcon: s,
  rightIcon: d,
  onChange: x,
  placeholder: h,
  type: u = "text",
  disabled: p,
  height: m = 56,
  selectedValue: w = !1,
  onInputClick: $,
  inputMode: C = "text",
  onFocus: O = () => {
  },
  ...P
}) => /* @__PURE__ */ n.jsxs(hr, { $error: !!a, $height: m || 40, $disabled: p || !1, children: [
  s,
  /* @__PURE__ */ n.jsx(
    gr,
    {
      $selectedValue: w,
      onClick: () => $ ? $() : null,
      readOnly: o,
      type: u,
      name: r,
      autoComplete: "off",
      value: e || "",
      onChange: (z) => {
        var S;
        return x && x(((S = z == null ? void 0 : z.target) == null ? void 0 : S.value) || "");
      },
      placeholder: h,
      disabled: p,
      onFocus: O,
      inputMode: C,
      ...P
    }
  ),
  d
] }), hr = c.div`
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
`, gr = c.input`
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
`, rt = pr, xr = ({
  value: e,
  name: r,
  error: a,
  showError: o = !0,
  readOnly: s = !1,
  label: d,
  className: x,
  leftIcon: h,
  rightIcon: u,
  padding: p,
  onChange: m,
  subLabel: w,
  placeholder: $,
  bottomLabel: C,
  type: O,
  disabled: P,
  height: z,
  secondLabel: S,
  onInputClick: E
}) => /* @__PURE__ */ n.jsx(
  tt,
  {
    padding: p,
    className: x,
    label: d,
    subLabel: w,
    secondLabel: S,
    error: a,
    showError: o,
    bottomLabel: C,
    children: /* @__PURE__ */ n.jsx(
      rt,
      {
        value: e,
        name: r,
        error: a,
        leftIcon: h,
        rightIcon: u,
        onChange: m,
        disabled: P,
        height: z,
        readOnly: s,
        onInputClick: E,
        placeholder: $,
        type: O
      }
    )
  }
), Wn = xr;
var nt = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ue = T.createContext && T.createContext(nt), D = function() {
  return D = Object.assign || function(e) {
    for (var r, a = 1, o = arguments.length; a < o; a++) {
      r = arguments[a];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, D.apply(this, arguments);
}, vr = function(e, r) {
  var a = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && r.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      r.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (a[o[s]] = e[o[s]]);
  return a;
};
function ot(e) {
  return e && e.map(function(r, a) {
    return T.createElement(r.tag, D({
      key: a
    }, r.attr), ot(r.child));
  });
}
function Q(e) {
  return function(r) {
    return T.createElement(mr, D({
      attr: D({}, e.attr)
    }, r), ot(e.child));
  };
}
function mr(e) {
  var r = function(a) {
    var o = e.attr, s = e.size, d = e.title, x = vr(e, ["attr", "size", "title"]), h = s || a.size || "1em", u;
    return a.className && (u = a.className), e.className && (u = (u ? u + " " : "") + e.className), T.createElement("svg", D({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, o, x, {
      className: u,
      style: D(D({
        color: e.color || a.color
      }, a.style), e.style),
      height: h,
      width: h,
      xmlns: "http://www.w3.org/2000/svg"
    }), d && T.createElement("title", null, d), e.children);
  };
  return Ue !== void 0 ? T.createElement(Ue.Consumer, null, function(a) {
    return r(a);
  }) : r(nt);
}
function br(e) {
  return Q({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z" } }] })(e);
}
function yr(e) {
  return Q({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" } }] })(e);
}
function wr(e) {
  return Q({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "19", y1: "12", x2: "5", y2: "12" } }, { tag: "polyline", attr: { points: "12 19 5 12 12 5" } }] })(e);
}
function $r(e) {
  return Q({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "3", y1: "12", x2: "21", y2: "12" } }, { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" } }, { tag: "line", attr: { x1: "3", y1: "18", x2: "21", y2: "18" } }] })(e);
}
function jr(e) {
  return Q({ tag: "svg", attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" } }] })(e);
}
var A = /* @__PURE__ */ ((e) => (e.visibleOn = "visibleOn", e.visibleOff = "visibleOff", e.logout = "logout", e.back = "back", e.burger = "burger", e.right = "right", e))(A || {});
const kr = ({ name: e, className: r }) => {
  switch (e) {
    case "visibleOn":
      return /* @__PURE__ */ n.jsx(yr, { className: r });
    case "visibleOff":
      return /* @__PURE__ */ n.jsx(br, { className: r });
    case "back":
      return /* @__PURE__ */ n.jsx(wr, { className: r });
    case "burger":
      return /* @__PURE__ */ n.jsx($r, { className: r });
    case "right":
      return /* @__PURE__ */ n.jsx(jr, { className: r });
    case "logout":
      return /* @__PURE__ */ n.jsxs(
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
            /* @__PURE__ */ n.jsx("path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" }),
            /* @__PURE__ */ n.jsx("polyline", { points: "16 17 21 12 16 7" }),
            /* @__PURE__ */ n.jsx("line", { x1: "21", y1: "12", x2: "9", y2: "12" })
          ]
        }
      );
    default:
      return null;
  }
}, I = kr, Er = ({
  value: e,
  secondLabel: r,
  name: a,
  error: o,
  showError: s = !0,
  label: d,
  className: x,
  padding: h,
  onChange: u,
  placeholder: p,
  disabled: m,
  height: w,
  onInputClick: $
}) => {
  const [C, O] = H(!1);
  return /* @__PURE__ */ n.jsx(
    tt,
    {
      padding: h,
      secondLabel: r,
      className: x,
      label: d,
      error: o,
      showError: s,
      children: /* @__PURE__ */ n.jsx(
        rt,
        {
          value: e,
          type: C ? "text" : "password",
          name: a,
          error: o,
          rightIcon: /* @__PURE__ */ n.jsx(Cr, { onClick: () => O(!C), children: /* @__PURE__ */ n.jsx(_r, { name: C ? "visibleOn" : "visibleOff" }) }),
          onChange: u,
          disabled: m,
          height: w,
          onInputClick: $,
          placeholder: p
        }
      )
    }
  );
}, Cr = c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`, _r = c(I)`
  color: #9aa4b2;
  font-size: 2rem;
`, Bn = Er, Or = ({ options: e, onChange: r, value: a, className: o = "" }) => /* @__PURE__ */ n.jsx(Rr, { className: o, children: /* @__PURE__ */ n.jsx(Sr, { $numberOfColumns: e.length, children: e.map((s, d) => /* @__PURE__ */ n.jsx(
  Tr,
  {
    onClick: () => r(s.value),
    $selected: s.value === a,
    children: s.label
  },
  `switch_btn_${d}`
)) }) }), Rr = c.div`
  width: 100%;
  padding: 32px 0;
`, Sr = c.div`
  display: grid;

  grid-template-columns: repeat(${({ $numberOfColumns: e }) => e}, 1fr);

  background-color: ${({ theme: e }) => e.colors.cardBackground.primary};
  padding: 4px;
  border-radius: 99px;
`, Tr = c.div`
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
`, Vn = Or, Pr = ({
  mapHost: e,
  mapPath: r = "/edit?types[]=point&buffer=xl",
  value: a,
  onChange: o,
  ...s
}) => {
  const d = Bt(null), x = ve(
    (u) => {
      var p, m;
      u.origin === e && o(JSON.parse((m = (p = u == null ? void 0 : u.data) == null ? void 0 : p.mapIframeMsg) == null ? void 0 : m.data));
    },
    [o]
  );
  Y(() => (window.addEventListener("message", x), () => window.removeEventListener("message", x)), [x]);
  const h = () => {
    var u, p;
    a && ((p = (u = d == null ? void 0 : d.current) == null ? void 0 : u.contentWindow) == null || p.postMessage({ geom: a }, "*"));
  };
  return /* @__PURE__ */ n.jsx(
    Lr,
    {
      src: `${e}${r}`,
      ref: d,
      width: "100%",
      allowFullScreen: !0,
      onLoad: h,
      "aria-hidden": "false",
      tabIndex: 1,
      ...s
    }
  );
}, Yn = Pr, Lr = c.iframe`
  height: 400px;
  width: 100%;
  display: block;
  border: 1px solid #d4d5de;
  border-radius: 4px;
  margin-top: 8px;
`;
var X = function() {
  return X = Object.assign || function(e) {
    for (var r, a = 1, o = arguments.length; a < o; a++) {
      r = arguments[a];
      for (var s in r)
        Object.prototype.hasOwnProperty.call(r, s) && (e[s] = r[s]);
    }
    return e;
  }, X.apply(this, arguments);
}, Fr = function(e, r) {
  var a = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && r.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      r.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (a[o[s]] = e[o[s]]);
  return a;
}, Ge = !1, me = Vt(function(e, r) {
  var a = e.style, o = Fr(e, ["style"]), s = Mr();
  !Ge && (a != null && a.height) && (Ge = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
  var d = X(X({}, a), { height: s ? s + "px" : "100vh" });
  return T.createElement("div", X({ ref: r, style: d }, o));
});
me.displayName = "Div100vh";
function Mr() {
  var e = H(qe), r = e[0], a = e[1], o = Dr();
  return Y(function() {
    if (!o)
      return;
    function s() {
      var d = qe();
      a(d);
    }
    return window.addEventListener("resize", s), function() {
      return window.removeEventListener("resize", s);
    };
  }, [o]), o ? r : null;
}
function qe() {
  return it() ? window.innerHeight : null;
}
function Dr() {
  var e = H(!1), r = e[0], a = e[1];
  return Y(function() {
    it() && a(!0);
  }, []), r;
}
function it() {
  return typeof window < "u" && typeof document < "u";
}
const W = {
  mobileS: "(max-width: 320px)",
  mobileM: "(max-width: 425px)",
  mobileL: "(max-width: 868px)",
  desktop: "(min-width: 869px)"
}, Ar = (e) => {
  const [r, a] = H(!1), o = ve(() => {
    const s = window.matchMedia(e);
    a(s.matches);
  }, [e]);
  return Y(() => {
    o();
  }, [o]), Y(() => (window.addEventListener("resize", o), () => window.removeEventListener("resize", o)), [o]), r;
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
var Je;
(function(e) {
  e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE";
})(Je || (Je = {}));
function Xe(e, r) {
  if (e === !1 || e === null || typeof e > "u")
    throw new Error(r);
}
function Ir(e, r) {
  if (!e) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {
    }
  }
}
var Ke;
(function(e) {
  e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error";
})(Ke || (Ke = {}));
function xe(e, r) {
  typeof e == "string" && (e = {
    path: e,
    caseSensitive: !1,
    end: !0
  });
  let [a, o] = zr(e.path, e.caseSensitive, e.end), s = r.match(a);
  if (!s)
    return null;
  let d = s[0], x = d.replace(/(.)\/+$/, "$1"), h = s.slice(1);
  return {
    params: o.reduce((p, m, w) => {
      let {
        paramName: $,
        isOptional: C
      } = m;
      if ($ === "*") {
        let P = h[w] || "";
        x = d.slice(0, d.length - P.length).replace(/(.)\/+$/, "$1");
      }
      const O = h[w];
      return C && !O ? p[$] = void 0 : p[$] = (O || "").replace(/%2F/g, "/"), p;
    }, {}),
    pathname: d,
    pathnameBase: x,
    pattern: e
  };
}
function zr(e, r, a) {
  r === void 0 && (r = !1), a === void 0 && (a = !0), Ir(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".'));
  let o = [], s = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^${}|()[\]]/g, "\\$&").replace(/\/:([\w-]+)(\?)?/g, (x, h, u) => (o.push({
    paramName: h,
    isOptional: u != null
  }), u ? "/?([^\\/]+)?" : "/([^\\/]+)"));
  return e.endsWith("*") ? (o.push({
    paramName: "*"
  }), s += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : a ? s += "\\/*$" : e !== "" && e !== "/" && (s += "(?:(?=\\/|$))"), [new RegExp(s, r ? void 0 : "i"), o];
}
const at = ["post", "put", "patch", "delete"];
new Set(at);
const Nr = ["get", ...at];
new Set(Nr);
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
const Wr = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (Wr.displayName = "DataRouter");
const Br = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (Br.displayName = "DataRouterState");
const Vr = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (Vr.displayName = "Await");
const Yr = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (Yr.displayName = "Navigation");
const be = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (be.displayName = "Location");
const Hr = /* @__PURE__ */ M.createContext({
  outlet: null,
  matches: [],
  isDataRoute: !1
});
process.env.NODE_ENV !== "production" && (Hr.displayName = "Route");
const Ur = /* @__PURE__ */ M.createContext(null);
process.env.NODE_ENV !== "production" && (Ur.displayName = "RouteError");
function Gr() {
  return M.useContext(be) != null;
}
function st() {
  return Gr() || (process.env.NODE_ENV !== "production" ? Xe(
    !1,
    // TODO: This error is probably because they somehow have 2 versions of the
    // router loaded. We can help them understand how to avoid that.
    "useLocation() may be used only in the context of a <Router> component."
  ) : Xe(!1)), M.useContext(be).location;
}
new Promise(() => {
});
const qr = ({ label: e, icon: r, onClick: a, isActive: o = !1 }) => /* @__PURE__ */ n.jsxs(Jr, { $isActive: o, onClick: a, children: [
  /* @__PURE__ */ n.jsx(Xr, { children: r ? /* @__PURE__ */ n.jsx(Kr, { name: r }) : null }),
  e,
  /* @__PURE__ */ n.jsx(I, { name: A.right })
] }), Jr = c.div`
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
`, Xr = c.div`
  background-color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Kr = c(I)``, Qe = qr, Qr = ({ visible: e, children: r, onClose: a }) => {
  const o = ve(
    (s) => {
      s.key === "Escape" && a && a();
    },
    [a]
  );
  return Y(() => (window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o)), [e, o]), e ? /* @__PURE__ */ n.jsx(
    Zr,
    {
      onClick: (s) => {
        s.target === s.currentTarget && a && a();
      },
      children: r
    }
  ) : /* @__PURE__ */ n.jsx(T.Fragment, {});
}, Zr = c.div`
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
`, en = Qr, tn = ({ onClose: e, visible: r = !0, loggedIn: a, routes: o, onLogin: s, onLogout: d, onRouteSelected: x }) => {
  const h = st();
  return /* @__PURE__ */ n.jsx(en, { visible: r, onClose: e, children: /* @__PURE__ */ n.jsx(nn, { children: /* @__PURE__ */ n.jsxs(on, { children: [
    /* @__PURE__ */ n.jsx(sn, { children: /* @__PURE__ */ n.jsxs(an, { onClick: e, children: [
      /* @__PURE__ */ n.jsx(rn, { name: "close" }),
      "Uždaryti"
    ] }) }),
    /* @__PURE__ */ n.jsxs(ln, { children: [
      /* @__PURE__ */ n.jsx(cn, { children: "Meniu" }),
      /* @__PURE__ */ n.jsx(un, { children: "Pasirinkite dominančią sritį" })
    ] }),
    o == null ? void 0 : o.map((u, p) => /* @__PURE__ */ n.jsx(
      Qe,
      {
        isActive: !!xe({ path: u.slug, end: !1 }, h.pathname),
        label: u.title || "",
        icon: u.iconName,
        onClick: () => {
          x(u.slug), e();
        }
      },
      `menu_button_${p}`
    )),
    /* @__PURE__ */ n.jsx(
      Qe,
      {
        label: a ? "Atsijungti" : "Prisijungti",
        icon: A.logout,
        onClick: () => {
          a ? d() : (s(), e());
        }
      }
    )
  ] }) }) });
}, rn = c(I)`
  cursor: pointer;
  font-size: 2.4rem;
`, nn = c(me)`
  width: 100%;
`, on = c.div`
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
`, an = c.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 4px;
  text-decoration: none;
  margin: 0 0 0 auto;
`, sn = c.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 48px;
  justify-content: space-between;
  padding: 16px 0;
`, ln = c.div`
  margin: 16px 0 32px 0;
  justify-content: center;
`, cn = c.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
`, un = c.div`
  line-height: 26px;
  margin-top: 4px;
  text-align: center;
`, lt = tn, dn = ({ onGoBack: e, onLogin: r, onLogout: a, onRouteSelected: o }) => {
  const [s, d] = H(!1);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(fn, { children: [
      /* @__PURE__ */ n.jsx(xn, { onClick: e, children: /* @__PURE__ */ n.jsx(gn, { name: A.back }) }),
      /* @__PURE__ */ n.jsxs(pn, { onClick: () => d(!0), children: [
        /* @__PURE__ */ n.jsx(hn, { name: A.burger }),
        "Meniu"
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(lt, { visible: s, onClose: () => d(!1), onLogin: r, onLogout: a, onRouteSelected: o })
  ] });
}, fn = c.div`
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
`, pn = c.div`
  align-items: center;
  color: ${({ theme: e }) => e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`, hn = c(I)`
  margin-right: 4px;
  font-size: 2.4rem;
`, gn = c(I)`
  align-items: center;
  display: flex;
  font-size: 2.4rem;
  gap: 4px;
  text-decoration: none;
`, xn = c.div`
  padding: 16px 16px 16px 0;
`, vn = dn, mn = ({ logo: e, onGoHome: r }) => {
  const [a, o] = H(!1);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(bn, { children: [
      /* @__PURE__ */ n.jsx("div", { onClick: r, children: e }),
      /* @__PURE__ */ n.jsxs(yn, { onClick: () => o(!0), children: [
        /* @__PURE__ */ n.jsx(wn, { name: A.burger }),
        "Meniu"
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(lt, { visible: a, onClose: () => o(!1) })
  ] });
}, bn = c.div`
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
`, yn = c.div`
  align-items: center;
  color: ${({ theme: e }) => e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`, wn = c(I)`
  margin-right: 4px;
  font-size: 2rem;
`, $n = mn, jn = ({ loggedIn: e, loginSlug: r, routes: a, logo: o, onLogin: s, onLogout: d, onRouteSelected: x, currentRoute: h }) => {
  const u = st();
  return /* @__PURE__ */ n.jsxs(En, { children: [
    /* @__PURE__ */ n.jsx(kn, { children: o }),
    a.map((p, m) => /* @__PURE__ */ n.jsxs(
      he,
      {
        onClick: () => x(p.slug),
        $isActive: !!xe({ path: p.slug, end: !1 }, h.slug),
        children: [
          /* @__PURE__ */ n.jsx(K, { name: p.iconName }),
          /* @__PURE__ */ n.jsx(pe, { children: p.title })
        ]
      },
      `sidebar_btn_${p.slug}_${m}`
    )),
    /* @__PURE__ */ n.jsx(Cn, {}),
    e ? /* @__PURE__ */ n.jsxs(he, { onClick: () => d(), $isActive: !1, children: [
      /* @__PURE__ */ n.jsx(K, { name: A.logout }),
      /* @__PURE__ */ n.jsx(pe, { children: "Atsijungti" })
    ] }) : /* @__PURE__ */ n.jsxs(
      he,
      {
        onClick: s,
        $isActive: !!xe({ path: r, end: !1 }, u.pathname),
        children: [
          /* @__PURE__ */ n.jsx(K, { name: A.logout }),
          /* @__PURE__ */ n.jsx(pe, { children: "Prisijungti" })
        ]
      }
    )
  ] });
}, kn = c.div`
  margin-bottom: 20px;
`, K = c(I)`
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
`, pe = c.div`
  font-size: 1.6rem;
  font-weight: 500;
`, En = c.nav`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
  height: 100%;
  min-width: 320px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.02);
  gap: 4px;
`, he = c.div`
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 8px;
  border-radius: 5px;
  transition: all 0.2s ease-out;
  color: ${({ theme: e }) => e.colors.text.retroBlack};

  ${({ $isActive: e, theme: r }) => e && `


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

    background-color: ${r.colors.primary};
  
  
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
    background-color: ${({ theme: e }) => e.colors.primary};
  }
`, Cn = c.div`
  width: 100%;
  height: 1px;
  background-color: #d4d5de;
  margin: 16px 0;
`, _n = jn, On = ({ children: e, onScroll: r = () => {
}, loggedIn: a, loginSlug: o, currentRoute: s, routes: d, logo: x, onGoHome: h, onGoBack: u, onLogin: p, onLogout: m, onRouteSelected: w }) => {
  const $ = Ar(W.mobileL);
  return /* @__PURE__ */ n.jsxs(Rn, { children: [
    !$ && /* @__PURE__ */ n.jsx(_n, { loggedIn: a, loginSlug: o, routes: d, logo: x, currentRoute: s, onLogin: p, onLogout: m, onRouteSelected: w }),
    /* @__PURE__ */ n.jsx(Sn, { onScroll: r, children: /* @__PURE__ */ n.jsxs(Tn, { children: [
      s != null && s.back ? /* @__PURE__ */ n.jsx(vn, { onGoBack: u, onLogin: p, onLogout: m, onRouteSelected: w }) : /* @__PURE__ */ n.jsx($n, { logo: x, onGoHome: h }),
      e
    ] }) })
  ] });
}, Hn = On, Rn = c(me)`
  width: 100vw;
  display: flex;
`, Sn = c.div`
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  background-color: white;
`, Tn = c.div`
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
`, Pn = ({ children: e, title: r, customSubTitle: a, customTitle: o, currentRoute: s }) => {
  const d = r || (s == null ? void 0 : s.title);
  return /* @__PURE__ */ n.jsxs(Fn, { children: [
    o || d && /* @__PURE__ */ n.jsx(Mn, { children: d }),
    a || (s == null ? void 0 : s.description) && /* @__PURE__ */ n.jsx(Ln, { children: s == null ? void 0 : s.description }),
    e
  ] });
}, Un = Pn, Ln = c.div`
  color: ${({ theme: e }) => e.colors.text.primary};
  margin-bottom: 16px;
`, Fn = c.div`
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
`, Mn = c.div`
  color: ${({ theme: e }) => e.colors.text.primary};
  font-size: 3.2rem;
  font-weight: 800;
  margin: 16px 0;
  text-align: center;
`;
export {
  In as Button,
  zn as CheckBox,
  Un as ContentLayout,
  Hn as DefaultLayout,
  tt as FieldWrapper,
  Yn as MapField,
  en as Modal,
  Bn as PasswordField,
  Nn as Switch,
  Vn as Tabs,
  Wn as TextField
};
