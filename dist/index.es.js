import S, { useState as N, useRef as Mr, useCallback as ge, useEffect as V, forwardRef as Lr } from "react";
import c from "styled-components";
var he = { exports: {} }, G = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Ir() {
  if (Be)
    return G;
  Be = 1;
  var e = S, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(x, u, m) {
    var b, $ = {}, k = null, _ = null;
    m !== void 0 && (k = "" + m), u.key !== void 0 && (k = "" + u.key), u.ref !== void 0 && (_ = u.ref);
    for (b in u)
      o.call(u, b) && !f.hasOwnProperty(b) && ($[b] = u[b]);
    if (x && x.defaultProps)
      for (b in u = x.defaultProps, u)
        $[b] === void 0 && ($[b] = u[b]);
    return { $$typeof: t, type: x, key: k, ref: _, props: $, _owner: s.current };
  }
  return G.Fragment = a, G.jsx = h, G.jsxs = h, G;
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
var Ye;
function zr() {
  return Ye || (Ye = 1, process.env.NODE_ENV !== "production" && function() {
    var e = S, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), x = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), $ = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), _ = Symbol.for("react.offscreen"), T = Symbol.iterator, z = "@@iterator";
    function A(r) {
      if (r === null || typeof r != "object")
        return null;
      var i = T && r[T] || r[z];
      return typeof i == "function" ? i : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(r) {
      {
        for (var i = arguments.length, l = new Array(i > 1 ? i - 1 : 0), d = 1; d < i; d++)
          l[d - 1] = arguments[d];
        rr("error", r, l);
      }
    }
    function rr(r, i, l) {
      {
        var d = R.ReactDebugCurrentFrame, v = d.getStackAddendum();
        v !== "" && (i += "%s", l = l.concat([v]));
        var y = l.map(function(g) {
          return String(g);
        });
        y.unshift("Warning: " + i), Function.prototype.apply.call(console[r], console, y);
      }
    }
    var tr = !1, nr = !1, ir = !1, or = !1, ar = !1, ve;
    ve = Symbol.for("react.module.reference");
    function sr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === o || r === f || ar || r === s || r === m || r === b || or || r === _ || tr || nr || ir || typeof r == "object" && r !== null && (r.$$typeof === k || r.$$typeof === $ || r.$$typeof === h || r.$$typeof === x || r.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === ve || r.getModuleId !== void 0));
    }
    function lr(r, i, l) {
      var d = r.displayName;
      if (d)
        return d;
      var v = i.displayName || i.name || "";
      return v !== "" ? l + "(" + v + ")" : l;
    }
    function me(r) {
      return r.displayName || "Context";
    }
    function P(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case o:
          return "Fragment";
        case a:
          return "Portal";
        case f:
          return "Profiler";
        case s:
          return "StrictMode";
        case m:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case x:
            var i = r;
            return me(i) + ".Consumer";
          case h:
            var l = r;
            return me(l._context) + ".Provider";
          case u:
            return lr(r, r.render, "ForwardRef");
          case $:
            var d = r.displayName || null;
            return d !== null ? d : P(r.type) || "Memo";
          case k: {
            var v = r, y = v._payload, g = v._init;
            try {
              return P(g(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, H = 0, be, ye, we, $e, je, ke, Ee;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function cr() {
      {
        if (H === 0) {
          be = console.log, ye = console.info, we = console.warn, $e = console.error, je = console.group, ke = console.groupCollapsed, Ee = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        H++;
      }
    }
    function ur() {
      {
        if (H--, H === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, r, {
              value: be
            }),
            info: D({}, r, {
              value: ye
            }),
            warn: D({}, r, {
              value: we
            }),
            error: D({}, r, {
              value: $e
            }),
            group: D({}, r, {
              value: je
            }),
            groupCollapsed: D({}, r, {
              value: ke
            }),
            groupEnd: D({}, r, {
              value: Ee
            })
          });
        }
        H < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ie = R.ReactCurrentDispatcher, oe;
    function Q(r, i, l) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (v) {
            var d = v.stack.trim().match(/\n( *(at )?)/);
            oe = d && d[1] || "";
          }
        return `
` + oe + r;
      }
    }
    var ae = !1, Z;
    {
      var dr = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new dr();
    }
    function _e(r, i) {
      if (!r || ae)
        return "";
      {
        var l = Z.get(r);
        if (l !== void 0)
          return l;
      }
      var d;
      ae = !0;
      var v = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = ie.current, ie.current = null, cr();
      try {
        if (i) {
          var g = function() {
            throw Error();
          };
          if (Object.defineProperty(g.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(g, []);
            } catch (F) {
              d = F;
            }
            Reflect.construct(r, [], g);
          } else {
            try {
              g.call();
            } catch (F) {
              d = F;
            }
            r.call(g.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            d = F;
          }
          r();
        }
      } catch (F) {
        if (F && d && typeof F.stack == "string") {
          for (var p = F.stack.split(`
`), C = d.stack.split(`
`), w = p.length - 1, j = C.length - 1; w >= 1 && j >= 0 && p[w] !== C[j]; )
            j--;
          for (; w >= 1 && j >= 0; w--, j--)
            if (p[w] !== C[j]) {
              if (w !== 1 || j !== 1)
                do
                  if (w--, j--, j < 0 || p[w] !== C[j]) {
                    var O = `
` + p[w].replace(" at new ", " at ");
                    return r.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", r.displayName)), typeof r == "function" && Z.set(r, O), O;
                  }
                while (w >= 1 && j >= 0);
              break;
            }
        }
      } finally {
        ae = !1, ie.current = y, ur(), Error.prepareStackTrace = v;
      }
      var Y = r ? r.displayName || r.name : "", We = Y ? Q(Y) : "";
      return typeof r == "function" && Z.set(r, We), We;
    }
    function fr(r, i, l) {
      return _e(r, !1);
    }
    function pr(r) {
      var i = r.prototype;
      return !!(i && i.isReactComponent);
    }
    function ee(r, i, l) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return _e(r, pr(r));
      if (typeof r == "string")
        return Q(r);
      switch (r) {
        case m:
          return Q("Suspense");
        case b:
          return Q("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case u:
            return fr(r.render);
          case $:
            return ee(r.type, i, l);
          case k: {
            var d = r, v = d._payload, y = d._init;
            try {
              return ee(y(v), i, l);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, Oe = {}, Re = R.ReactDebugCurrentFrame;
    function te(r) {
      if (r) {
        var i = r._owner, l = ee(r.type, r._source, i ? i.type : null);
        Re.setExtraStackFrame(l);
      } else
        Re.setExtraStackFrame(null);
    }
    function hr(r, i, l, d, v) {
      {
        var y = Function.call.bind(re);
        for (var g in r)
          if (y(r, g)) {
            var p = void 0;
            try {
              if (typeof r[g] != "function") {
                var C = Error((d || "React class") + ": " + l + " type `" + g + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[g] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              p = r[g](i, g, d, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              p = w;
            }
            p && !(p instanceof Error) && (te(v), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", l, g, typeof p), te(null)), p instanceof Error && !(p.message in Oe) && (Oe[p.message] = !0, te(v), E("Failed %s type: %s", l, p.message), te(null));
          }
      }
    }
    var gr = Array.isArray;
    function se(r) {
      return gr(r);
    }
    function xr(r) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, l = i && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return l;
      }
    }
    function vr(r) {
      try {
        return Se(r), !1;
      } catch {
        return !0;
      }
    }
    function Se(r) {
      return "" + r;
    }
    function Te(r) {
      if (vr(r))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xr(r)), Se(r);
    }
    var U = R.ReactCurrentOwner, mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Pe, Fe, le;
    le = {};
    function br(r) {
      if (re.call(r, "ref")) {
        var i = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function yr(r) {
      if (re.call(r, "key")) {
        var i = Object.getOwnPropertyDescriptor(r, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function wr(r, i) {
      if (typeof r.ref == "string" && U.current && i && U.current.stateNode !== i) {
        var l = P(U.current.type);
        le[l] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(U.current.type), r.ref), le[l] = !0);
      }
    }
    function $r(r, i) {
      {
        var l = function() {
          Pe || (Pe = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function jr(r, i) {
      {
        var l = function() {
          Fe || (Fe = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        l.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var kr = function(r, i, l, d, v, y, g) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: i,
        ref: l,
        props: g,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: v
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function Er(r, i, l, d, v) {
      {
        var y, g = {}, p = null, C = null;
        l !== void 0 && (Te(l), p = "" + l), yr(i) && (Te(i.key), p = "" + i.key), br(i) && (C = i.ref, wr(i, v));
        for (y in i)
          re.call(i, y) && !mr.hasOwnProperty(y) && (g[y] = i[y]);
        if (r && r.defaultProps) {
          var w = r.defaultProps;
          for (y in w)
            g[y] === void 0 && (g[y] = w[y]);
        }
        if (p || C) {
          var j = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          p && $r(g, j), C && jr(g, j);
        }
        return kr(r, p, C, v, d, U.current, g);
      }
    }
    var ce = R.ReactCurrentOwner, Me = R.ReactDebugCurrentFrame;
    function B(r) {
      if (r) {
        var i = r._owner, l = ee(r.type, r._source, i ? i.type : null);
        Me.setExtraStackFrame(l);
      } else
        Me.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function de(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Le() {
      {
        if (ce.current) {
          var r = P(ce.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function Cr(r) {
      {
        if (r !== void 0) {
          var i = r.fileName.replace(/^.*[\\\/]/, ""), l = r.lineNumber;
          return `

Check your code at ` + i + ":" + l + ".";
        }
        return "";
      }
    }
    var Ie = {};
    function _r(r) {
      {
        var i = Le();
        if (!i) {
          var l = typeof r == "string" ? r : r.displayName || r.name;
          l && (i = `

Check the top-level render call using <` + l + ">.");
        }
        return i;
      }
    }
    function ze(r, i) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var l = _r(i);
        if (Ie[l])
          return;
        Ie[l] = !0;
        var d = "";
        r && r._owner && r._owner !== ce.current && (d = " It was passed a child from " + P(r._owner.type) + "."), B(r), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, d), B(null);
      }
    }
    function Ae(r, i) {
      {
        if (typeof r != "object")
          return;
        if (se(r))
          for (var l = 0; l < r.length; l++) {
            var d = r[l];
            de(d) && ze(d, i);
          }
        else if (de(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var v = A(r);
          if (typeof v == "function" && v !== r.entries)
            for (var y = v.call(r), g; !(g = y.next()).done; )
              de(g.value) && ze(g.value, i);
        }
      }
    }
    function Or(r) {
      {
        var i = r.type;
        if (i == null || typeof i == "string")
          return;
        var l;
        if (typeof i == "function")
          l = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === $))
          l = i.propTypes;
        else
          return;
        if (l) {
          var d = P(i);
          hr(l, r.props, "prop", d, r);
        } else if (i.PropTypes !== void 0 && !ue) {
          ue = !0;
          var v = P(i);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", v || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(r) {
      {
        for (var i = Object.keys(r.props), l = 0; l < i.length; l++) {
          var d = i[l];
          if (d !== "children" && d !== "key") {
            B(r), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), B(null);
            break;
          }
        }
        r.ref !== null && (B(r), E("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    function De(r, i, l, d, v, y) {
      {
        var g = sr(r);
        if (!g) {
          var p = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = Cr(v);
          C ? p += C : p += Le();
          var w;
          r === null ? w = "null" : se(r) ? w = "array" : r !== void 0 && r.$$typeof === t ? (w = "<" + (P(r.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : w = typeof r, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, p);
        }
        var j = Er(r, i, l, v, y);
        if (j == null)
          return j;
        if (g) {
          var O = i.children;
          if (O !== void 0)
            if (d)
              if (se(O)) {
                for (var Y = 0; Y < O.length; Y++)
                  Ae(O[Y], r);
                Object.freeze && Object.freeze(O);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(O, r);
        }
        return r === o ? Rr(j) : Or(j), j;
      }
    }
    function Sr(r, i, l) {
      return De(r, i, l, !0);
    }
    function Tr(r, i, l) {
      return De(r, i, l, !1);
    }
    var Pr = Tr, Fr = Sr;
    J.Fragment = o, J.jsx = Pr, J.jsxs = Fr;
  }()), J;
}
process.env.NODE_ENV === "production" ? he.exports = Ir() : he.exports = zr();
var n = he.exports;
const Ar = ({ color: e = "#000" }) => /* @__PURE__ */ n.jsx(
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
), Dr = Ar;
var Ge = /* @__PURE__ */ ((e) => (e.PRIMARY = "primary", e.SECONDARY = "secondary", e.TERTIARY = "tertiary", e.DANGER = "danger", e.SUCCESS = "success", e.TRANSPARENT = "transparent", e))(Ge || {});
const Je = ({
  variant: e = "primary",
  route: t,
  children: a,
  height: o = 56,
  padding: s = "11px 20px",
  leftIcon: f,
  radius: h = "28px",
  buttonPadding: x,
  rightIcon: u,
  color: m,
  type: b,
  loading: $ = !1,
  className: k,
  disabled: _ = !1,
  fontWeight: T = "600",
  ...z
}) => /* @__PURE__ */ n.jsxs(
  Wr,
  {
    className: k,
    $padding: s,
    $fontWeight: T,
    $variant: e,
    $height: o || 40,
    type: b,
    disabled: _,
    $radius: h,
    ...z,
    children: [
      f,
      $ ? /* @__PURE__ */ n.jsx(Dr, { color: "white" }) : a,
      u
    ]
  }
), Wr = c.button`
  display: flex;
  justify-content: center;
  gap: 12px;
  align-items: center;
  height: ${({ $height: e }) => `${e}px`};
  border-radius: ${({ $radius: e }) => e};
  padding: ${({ $padding: e }) => e};
  background-color: ${({ $variant: e, theme: t }) => t.colors.buttonBackground[e]};
  color: ${({ $variant: e, theme: t }) => t.colors.buttonText[e]};
  border: ${({ $variant: e }) => e === "transparent" ? "0" : "1px"} solid
    ${({ $variant: e }) => e !== "transparent" ? "transparent" : " rgb(35, 31, 32)"};
  font-weight: ${({ $fontWeight: e }) => e};
  font-size: 1.8rem;
  :hover {
    background-color: ${({ $variant: e, theme: t }) => t.colors.hover[e]};
  }
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  opacity: ${({ disabled: e }) => e ? 0.6 : 1};
  width: 100%;
`;
Je.colors = Ge;
const yn = Je, Br = ({
  value: e,
  name: t,
  onChange: a,
  disabled: o = !1,
  label: s,
  error: f,
  className: h,
  intermediate: x
}) => /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsxs(
  Yr,
  {
    disabled: o,
    className: h,
    onClick: () => {
      !o && a(!e);
    },
    children: [
      /* @__PURE__ */ n.jsxs(
        Nr,
        {
          intermediate: x,
          disabled: o,
          error: f,
          checked: e,
          children: [
            /* @__PURE__ */ n.jsx(
              Ur,
              {
                type: "checkbox",
                name: t,
                checked: e || !1,
                disabled: o,
                onChange: () => {
                }
              }
            ),
            /* @__PURE__ */ n.jsx(Hr, { checked: e || !1, intermediate: x, disabled: o })
          ]
        }
      ),
      /* @__PURE__ */ n.jsx(Vr, { children: s })
    ]
  }
) }), Yr = c.div`
  display: grid;
  grid-template-columns: 28px 1fr;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
`, Vr = c.div`
  text-align: left;
  font-size: 1.4rem;
  color: #4b5565;
`, Nr = c.div`
  position: relative;
  width: 18px;
  height: 18px;
  border-radius: 2px;
  background-color: ${({ theme: e, checked: t, error: a, intermediate: o }) => t || o ? e.colors.primary : a ? e.colors.danger : e.colors.border};
  opacity: ${({ disabled: e }) => e ? 0.48 : 1};
`, Hr = c.label`
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
  cursor: pointer;
  position: absolute;
  z-index: 0;
  width: 14px;
  height: 14px;
  left: 2px;
  top: 2px;

  background-color: ${({ intermediate: e, checked: t }) => e || t ? "transparent" : "white"};

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

    ${({ checked: e, intermediate: t }) => t || e ? `
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
`, Ur = c.input`
  position: absolute;
  width: 20px;
  height: 20px;
  top: -4px;
  left: -4px;
  z-index: 1;
  opacity: 0;
  cursor: ${({ disabled: e }) => e ? "not-allowed" : "pointer"};
`, wn = Br, Gr = ({ value: e, name: t, onChange: a }) => /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsxs(Jr, { children: [
  /* @__PURE__ */ n.jsx(qr, { type: "checkbox", name: t, checked: e, onChange: a }),
  /* @__PURE__ */ n.jsx(ne, {})
] }) }), Jr = c.label`
  position: relative;
  display: inline-block;
  width: 44px;
  height: 24px;
`, ne = c.span`
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
`, qr = c.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + ${ne} {
    background-color: ${({ theme: e }) => e.colors.primary};
  }

  &:focus + ${ne} {
    box-shadow: 0 0 1px ${({ theme: e }) => e.colors.primary};
  }

  &:checked + ${ne}:before {
    transform: translateX(20px); // Move the toggle to the right when checked
  }
`, $n = Gr, Xr = ({ error: e }) => e ? /* @__PURE__ */ n.jsx(Kr, { children: e }) : /* @__PURE__ */ n.jsx(n.Fragment, {}), Kr = c.label`
  display: inline-block;
  width: 100%;
  color: ${({ theme: e }) => e.colors.error};
  font-size: 1.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2.4rem;
  margin-bottom: 8px;
`, Qr = ({
  error: e,
  showError: t = !0,
  label: a,
  className: o,
  padding: s = "0",
  onClick: f,
  handleBlur: h,
  subLabel: x,
  bottomLabel: u,
  secondLabel: m,
  children: b
}) => /* @__PURE__ */ n.jsxs(
  Zr,
  {
    tabIndex: -1,
    onBlur: h,
    className: o,
    padding: s,
    onClick: f,
    children: [
      /* @__PURE__ */ n.jsxs(et, { children: [
        !!a && /* @__PURE__ */ n.jsxs(nt, { children: [
          /* @__PURE__ */ n.jsx(tt, { htmlFor: a, children: a }),
          !!x && /* @__PURE__ */ n.jsx(it, { children: x })
        ] }),
        m
      ] }),
      b,
      t && /* @__PURE__ */ n.jsx(Xr, { error: e }),
      u && /* @__PURE__ */ n.jsx(rt, { children: u })
    ]
  }
), Zr = c.div`
  display: block;
  position: relative;
  padding: ${({ padding: e }) => e};
`, et = c.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`, rt = c.div`
  margin-top: 6px;
  font-size: 1.2rem;
  color: #697586;
`, tt = c.label`
  text-align: left;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme: e }) => e.colors.text.primary};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`, nt = c.div`
  display: flex;
  align-items: center;
  min-height: 2.4rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 4px;
`, it = c.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`, qe = Qr, ot = ({
  value: e,
  name: t,
  error: a,
  readOnly: o = !1,
  leftIcon: s,
  rightIcon: f,
  onChange: h,
  placeholder: x,
  type: u = "text",
  disabled: m,
  height: b = 56,
  selectedValue: $ = !1,
  onInputClick: k,
  inputMode: _ = "text",
  onFocus: T = () => {
  },
  ...z
}) => /* @__PURE__ */ n.jsxs(at, { $error: !!a, $height: b || 40, $disabled: m || !1, children: [
  s,
  /* @__PURE__ */ n.jsx(
    st,
    {
      $selectedValue: $,
      onClick: () => k ? k() : null,
      readOnly: o,
      type: u,
      name: t,
      autoComplete: "off",
      value: e || "",
      onChange: (A) => {
        var R;
        return h && h(((R = A == null ? void 0 : A.target) == null ? void 0 : R.value) || "");
      },
      placeholder: x,
      disabled: m,
      onFocus: T,
      inputMode: _,
      ...z
    }
  ),
  f
] }), at = c.div`
  display: flex;
  height: ${({ $height: e }) => `${e}px`};
  background-color: white;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid ${({ theme: e, $error: t }) => t ? e.colors.error : e.colors.border};
  opacity: ${({ $disabled: e }) => e ? 0.5 : 1};

  cursor: ${({ $disabled: e }) => e ? "not-allowed" : "text"};
  :focus-within {
    border-color: ${({ theme: e }) => e.colors.primary};
    box-shadow: 0 0 0 4px ${({ theme: e }) => `${e.colors.primary}33`};
  }
`, st = c.input`
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
    color: ${({ theme: e, $selectedValue: t }) => e.colors.text.input + `${t ? "" : "8F"}`};
  }
  ::-moz-placeholder {
    color: ${({ theme: e, $selectedValue: t }) => e.colors.text.input + `${t ? "" : "8F"}`};
  }
  ::-ms-placeholder {
    color: ${({ theme: e, $selectedValue: t }) => e.colors.text.input + `${t ? "" : "8F"}`};
  }
  ::placeholder {
    color: ${({ theme: e, $selectedValue: t }) => e.colors.text.input + `${t ? "" : "8F"}`};
  }
`, Xe = ot, lt = ({
  value: e,
  name: t,
  error: a,
  showError: o = !0,
  readOnly: s = !1,
  label: f,
  className: h,
  leftIcon: x,
  rightIcon: u,
  padding: m,
  onChange: b,
  subLabel: $,
  placeholder: k,
  bottomLabel: _,
  type: T,
  disabled: z,
  height: A,
  secondLabel: R,
  onInputClick: E
}) => /* @__PURE__ */ n.jsx(
  qe,
  {
    padding: m,
    className: h,
    label: f,
    subLabel: $,
    secondLabel: R,
    error: a,
    showError: o,
    bottomLabel: _,
    children: /* @__PURE__ */ n.jsx(
      Xe,
      {
        value: e,
        name: t,
        error: a,
        leftIcon: x,
        rightIcon: u,
        onChange: b,
        disabled: z,
        height: A,
        readOnly: s,
        onInputClick: E,
        placeholder: k,
        type: T
      }
    )
  }
), jn = lt;
var Ke = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ve = S.createContext && S.createContext(Ke), M = function() {
  return M = Object.assign || function(e) {
    for (var t, a = 1, o = arguments.length; a < o; a++) {
      t = arguments[a];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, M.apply(this, arguments);
}, ct = function(e, t) {
  var a = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (a[o[s]] = e[o[s]]);
  return a;
};
function Qe(e) {
  return e && e.map(function(t, a) {
    return S.createElement(t.tag, M({
      key: a
    }, t.attr), Qe(t.child));
  });
}
function K(e) {
  return function(t) {
    return S.createElement(ut, M({
      attr: M({}, e.attr)
    }, t), Qe(e.child));
  };
}
function ut(e) {
  var t = function(a) {
    var o = e.attr, s = e.size, f = e.title, h = ct(e, ["attr", "size", "title"]), x = s || a.size || "1em", u;
    return a.className && (u = a.className), e.className && (u = (u ? u + " " : "") + e.className), S.createElement("svg", M({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, o, h, {
      className: u,
      style: M(M({
        color: e.color || a.color
      }, a.style), e.style),
      height: x,
      width: x,
      xmlns: "http://www.w3.org/2000/svg"
    }), f && S.createElement("title", null, f), e.children);
  };
  return Ve !== void 0 ? S.createElement(Ve.Consumer, null, function(a) {
    return t(a);
  }) : t(Ke);
}
function dt(e) {
  return K({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0zm0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M12 6a9.77 9.77 0 018.82 5.5 9.647 9.647 0 01-2.41 3.12l1.41 1.41c1.39-1.23 2.49-2.77 3.18-4.53C21.27 7.11 17 4 12 4c-1.27 0-2.49.2-3.64.57l1.65 1.65C10.66 6.09 11.32 6 12 6zm-1.07 1.14L13 9.21c.57.25 1.03.71 1.28 1.28l2.07 2.07c.08-.34.14-.7.14-1.07C16.5 9.01 14.48 7 12 7c-.37 0-.72.05-1.07.14zM2.01 3.87l2.68 2.68A11.738 11.738 0 001 11.5C2.73 15.89 7 19 12 19c1.52 0 2.98-.29 4.32-.82l3.42 3.42 1.41-1.41L3.42 2.45 2.01 3.87zm7.5 7.5l2.61 2.61c-.04.01-.08.02-.12.02a2.5 2.5 0 01-2.5-2.5c0-.05.01-.08.01-.13zm-3.4-3.4l1.75 1.75a4.6 4.6 0 00-.36 1.78 4.507 4.507 0 006.27 4.14l.98.98c-.88.24-1.8.38-2.75.38a9.77 9.77 0 01-8.82-5.5c.7-1.43 1.72-2.61 2.93-3.53z" } }] })(e);
}
function ft(e) {
  return K({ tag: "svg", attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0V0z" } }, { tag: "path", attr: { d: "M12 6a9.77 9.77 0 018.82 5.5C19.17 14.87 15.79 17 12 17s-7.17-2.13-8.82-5.5A9.77 9.77 0 0112 6m0-2C7 4 2.73 7.11 1 11.5 2.73 15.89 7 19 12 19s9.27-3.11 11-7.5C21.27 7.11 17 4 12 4zm0 5a2.5 2.5 0 010 5 2.5 2.5 0 010-5m0-2c-2.48 0-4.5 2.02-4.5 4.5S9.52 16 12 16s4.5-2.02 4.5-4.5S14.48 7 12 7z" } }] })(e);
}
function pt(e) {
  return K({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "19", y1: "12", x2: "5", y2: "12" } }, { tag: "polyline", attr: { points: "12 19 5 12 12 5" } }] })(e);
}
function ht(e) {
  return K({ tag: "svg", attr: { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }, child: [{ tag: "line", attr: { x1: "3", y1: "12", x2: "21", y2: "12" } }, { tag: "line", attr: { x1: "3", y1: "6", x2: "21", y2: "6" } }, { tag: "line", attr: { x1: "3", y1: "18", x2: "21", y2: "18" } }] })(e);
}
function gt(e) {
  return K({ tag: "svg", attr: { viewBox: "0 0 320 512" }, child: [{ tag: "path", attr: { d: "M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" } }] })(e);
}
var L = /* @__PURE__ */ ((e) => (e.visibleOn = "visibleOn", e.visibleOff = "visibleOff", e.logout = "logout", e.back = "back", e.burger = "burger", e.right = "right", e))(L || {});
const xt = ({ name: e, className: t }) => {
  switch (e) {
    case "visibleOn":
      return /* @__PURE__ */ n.jsx(ft, { className: t });
    case "visibleOff":
      return /* @__PURE__ */ n.jsx(dt, { className: t });
    case "back":
      return /* @__PURE__ */ n.jsx(pt, { className: t });
    case "burger":
      return /* @__PURE__ */ n.jsx(ht, { className: t });
    case "right":
      return /* @__PURE__ */ n.jsx(gt, { className: t });
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
          className: t,
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
}, I = xt, vt = ({
  value: e,
  secondLabel: t,
  name: a,
  error: o,
  showError: s = !0,
  label: f,
  className: h,
  padding: x,
  onChange: u,
  placeholder: m,
  disabled: b,
  height: $,
  onInputClick: k
}) => {
  const [_, T] = N(!1);
  return /* @__PURE__ */ n.jsx(
    qe,
    {
      padding: x,
      secondLabel: t,
      className: h,
      label: f,
      error: o,
      showError: s,
      children: /* @__PURE__ */ n.jsx(
        Xe,
        {
          value: e,
          type: _ ? "text" : "password",
          name: a,
          error: o,
          rightIcon: /* @__PURE__ */ n.jsx(mt, { onClick: () => T(!_), children: /* @__PURE__ */ n.jsx(bt, { name: _ ? "visibleOn" : "visibleOff" }) }),
          onChange: u,
          disabled: b,
          height: $,
          onInputClick: k,
          placeholder: m
        }
      )
    }
  );
}, mt = c.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 12px;
  cursor: pointer;
`, bt = c(I)`
  color: #9aa4b2;
  font-size: 2rem;
`, kn = vt, yt = ({ options: e, onChange: t, value: a, className: o = "" }) => /* @__PURE__ */ n.jsx(wt, { className: o, children: /* @__PURE__ */ n.jsx($t, { $numberOfColumns: e.length, children: e.map((s, f) => /* @__PURE__ */ n.jsx(
  jt,
  {
    onClick: () => t(s.value),
    $selected: s.value === a,
    children: s.label
  },
  `switch_btn_${f}`
)) }) }), wt = c.div`
  width: 100%;
  padding: 32px 0;
`, $t = c.div`
  display: grid;

  grid-template-columns: repeat(${({ $numberOfColumns: e }) => e}, 1fr);

  background-color: ${({ theme: e }) => e.colors.cardBackground.primary};
  padding: 4px;
  border-radius: 99px;
`, jt = c.div`
  display: flex;
  background-color: ${({ $selected: e }) => e ? "rgb(20, 83, 45)" : "transparent"};
  color: ${({ $selected: e, theme: t }) => e ? "white" : t.colors.text.primary};
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  font-size: 18px;
  font-weight: 500;
  border-radius: 99px;
  cursor: pointer;
`, En = yt, kt = ({
  mapHost: e,
  mapPath: t = "/edit?types[]=point&buffer=xl",
  value: a,
  onChange: o,
  ...s
}) => {
  const f = Mr(null), h = ge(
    (u) => {
      var m, b;
      u.origin === e && o(JSON.parse((b = (m = u == null ? void 0 : u.data) == null ? void 0 : m.mapIframeMsg) == null ? void 0 : b.data));
    },
    [o]
  );
  V(() => (window.addEventListener("message", h), () => window.removeEventListener("message", h)), [h]);
  const x = () => {
    var u, m;
    a && ((m = (u = f == null ? void 0 : f.current) == null ? void 0 : u.contentWindow) == null || m.postMessage({ geom: a }, "*"));
  };
  return /* @__PURE__ */ n.jsx(
    Et,
    {
      src: `${e}${t}`,
      ref: f,
      width: "100%",
      allowFullScreen: !0,
      onLoad: x,
      "aria-hidden": "false",
      tabIndex: 1,
      ...s
    }
  );
}, Cn = kt, Et = c.iframe`
  height: 400px;
  width: 100%;
  display: block;
  border: 1px solid #d4d5de;
  border-radius: 4px;
  margin-top: 8px;
`;
var q = function() {
  return q = Object.assign || function(e) {
    for (var t, a = 1, o = arguments.length; a < o; a++) {
      t = arguments[a];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, q.apply(this, arguments);
}, Ct = function(e, t) {
  var a = {};
  for (var o in e)
    Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (a[o] = e[o]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, o = Object.getOwnPropertySymbols(e); s < o.length; s++)
      t.indexOf(o[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[s]) && (a[o[s]] = e[o[s]]);
  return a;
}, Ne = !1, xe = Lr(function(e, t) {
  var a = e.style, o = Ct(e, ["style"]), s = _t();
  !Ne && (a != null && a.height) && (Ne = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
  var f = q(q({}, a), { height: s ? s + "px" : "100vh" });
  return S.createElement("div", q({ ref: t, style: f }, o));
});
xe.displayName = "Div100vh";
function _t() {
  var e = N(He), t = e[0], a = e[1], o = Ot();
  return V(function() {
    if (!o)
      return;
    function s() {
      var f = He();
      a(f);
    }
    return window.addEventListener("resize", s), function() {
      return window.removeEventListener("resize", s);
    };
  }, [o]), o ? t : null;
}
function He() {
  return Ze() ? window.innerHeight : null;
}
function Ot() {
  var e = N(!1), t = e[0], a = e[1];
  return V(function() {
    Ze() && a(!0);
  }, []), t;
}
function Ze() {
  return typeof window < "u" && typeof document < "u";
}
const W = {
  mobileS: "(max-width: 320px)",
  mobileM: "(max-width: 425px)",
  mobileL: "(max-width: 868px)",
  desktop: "(min-width: 869px)"
}, Rt = (e) => {
  const [t, a] = N(!1), o = ge(() => {
    const s = window.matchMedia(e);
    a(s.matches);
  }, [e]);
  return V(() => {
    o();
  }, [o]), V(() => (window.addEventListener("resize", o), () => window.removeEventListener("resize", o)), [o]), t;
}, St = ({ label: e, icon: t, onClick: a, isActive: o = !1 }) => /* @__PURE__ */ n.jsxs(Tt, { $isActive: o, onClick: a, children: [
  /* @__PURE__ */ n.jsx(Pt, { children: t ? /* @__PURE__ */ n.jsx(Ft, { name: t }) : null }),
  e,
  /* @__PURE__ */ n.jsx(I, { name: L.right })
] }), Tt = c.div`
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

  ${({ $isActive: e, theme: t }) => e && `
    background-color: #f5f6fe;
    border: 1px solid ${t.colors.primary};
  `};

  &:hover {
    background-color: #f5f6fe;
    border: 1px solid ${({ theme: e }) => e.colors.primary};
  }
`, Pt = c.div`
  background-color: white;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
`, Ft = c(I)``, Ue = St, Mt = ({ visible: e, children: t, onClose: a }) => {
  const o = ge(
    (s) => {
      s.key === "Escape" && a && a();
    },
    [a]
  );
  return V(() => (window.addEventListener("keydown", o), () => window.removeEventListener("keydown", o)), [e, o]), e ? /* @__PURE__ */ n.jsx(
    Lt,
    {
      onClick: (s) => {
        s.target === s.currentTarget && a && a();
      },
      children: t
    }
  ) : /* @__PURE__ */ n.jsx(S.Fragment, {});
}, Lt = c.div`
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
`, It = Mt, zt = ({ onClose: e, visible: t = !0, loggedIn: a, currentRoute: o, routes: s, onLogin: f, onLogout: h, onRouteSelected: x }) => /* @__PURE__ */ n.jsx(It, { visible: t, onClose: e, children: /* @__PURE__ */ n.jsx(Dt, { children: /* @__PURE__ */ n.jsxs(Wt, { children: [
  /* @__PURE__ */ n.jsx(Yt, { children: /* @__PURE__ */ n.jsxs(Bt, { onClick: e, children: [
    /* @__PURE__ */ n.jsx(At, { name: "close" }),
    "Uždaryti"
  ] }) }),
  /* @__PURE__ */ n.jsxs(Vt, { children: [
    /* @__PURE__ */ n.jsx(Nt, { children: "Meniu" }),
    /* @__PURE__ */ n.jsx(Ht, { children: "Pasirinkite dominančią sritį" })
  ] }),
  s == null ? void 0 : s.map((u, m) => /* @__PURE__ */ n.jsx(
    Ue,
    {
      isActive: u.slug === o.slug,
      label: u.title || "",
      icon: u.iconName,
      onClick: () => {
        x(u.slug), e();
      }
    },
    `menu_button_${m}`
  )),
  /* @__PURE__ */ n.jsx(
    Ue,
    {
      label: a ? "Atsijungti" : "Prisijungti",
      icon: L.logout,
      onClick: () => {
        a ? h() : (f(), e());
      }
    }
  )
] }) }) }), At = c(I)`
  cursor: pointer;
  font-size: 2.4rem;
`, Dt = c(xe)`
  width: 100%;
`, Wt = c.div`
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
`, Bt = c.div`
  align-items: center;
  display: flex;
  font-weight: 600;
  gap: 4px;
  text-decoration: none;
  margin: 0 0 0 auto;
`, Yt = c.div`
  align-items: center;
  display: flex;
  gap: 8px;
  height: 48px;
  justify-content: space-between;
  padding: 16px 0;
`, Vt = c.div`
  margin: 16px 0 32px 0;
  justify-content: center;
`, Nt = c.div`
  font-size: 32px;
  font-weight: 800;
  text-align: center;
`, Ht = c.div`
  line-height: 26px;
  margin-top: 4px;
  text-align: center;
`, er = zt, Ut = ({ onGoBack: e, onLogin: t, onLogout: a, onRouteSelected: o, currentRoute: s }) => {
  const [f, h] = N(!1);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(Gt, { children: [
      /* @__PURE__ */ n.jsx(Kt, { onClick: e, children: /* @__PURE__ */ n.jsx(Xt, { name: L.back }) }),
      /* @__PURE__ */ n.jsxs(Jt, { onClick: () => h(!0), children: [
        /* @__PURE__ */ n.jsx(qt, { name: L.burger }),
        "Meniu"
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(er, { visible: f, onClose: () => h(!1), onLogin: t, onLogout: a, onRouteSelected: o, currentRoute: s })
  ] });
}, Gt = c.div`
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
`, Jt = c.div`
  align-items: center;
  color: ${({ theme: e }) => e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`, qt = c(I)`
  margin-right: 4px;
  font-size: 2.4rem;
`, Xt = c(I)`
  align-items: center;
  display: flex;
  font-size: 2.4rem;
  gap: 4px;
  text-decoration: none;
`, Kt = c.div`
  padding: 16px 16px 16px 0;
`, Qt = Ut, Zt = ({ logo: e, onGoHome: t }) => {
  const [a, o] = N(!1);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(en, { children: [
      /* @__PURE__ */ n.jsx("div", { onClick: t, children: e }),
      /* @__PURE__ */ n.jsxs(rn, { onClick: () => o(!0), children: [
        /* @__PURE__ */ n.jsx(tn, { name: L.burger }),
        "Meniu"
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(er, { visible: a, onClose: () => o(!1) })
  ] });
}, en = c.div`
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
`, rn = c.div`
  align-items: center;
  color: ${({ theme: e }) => e.colors.text.primary};
  display: flex;
  font-weight: 600;
  gap: 4px;
`, tn = c(I)`
  margin-right: 4px;
  font-size: 2rem;
`, nn = Zt, on = ({ loggedIn: e, loginSlug: t, routes: a, logo: o, onLogin: s, onLogout: f, onRouteSelected: h, currentRoute: x }) => /* @__PURE__ */ n.jsxs(sn, { children: [
  /* @__PURE__ */ n.jsx(an, { children: o }),
  a.map((u, m) => /* @__PURE__ */ n.jsxs(
    pe,
    {
      onClick: () => h(u.slug),
      $isActive: u.slug === x.slug,
      children: [
        /* @__PURE__ */ n.jsx(X, { name: u.iconName }),
        /* @__PURE__ */ n.jsx(fe, { children: u.title })
      ]
    },
    `sidebar_btn_${u.slug}_${m}`
  )),
  /* @__PURE__ */ n.jsx(ln, {}),
  e ? /* @__PURE__ */ n.jsxs(pe, { onClick: () => f(), $isActive: !1, children: [
    /* @__PURE__ */ n.jsx(X, { name: L.logout }),
    /* @__PURE__ */ n.jsx(fe, { children: "Atsijungti" })
  ] }) : /* @__PURE__ */ n.jsxs(
    pe,
    {
      onClick: s,
      $isActive: t === x.slug,
      children: [
        /* @__PURE__ */ n.jsx(X, { name: L.logout }),
        /* @__PURE__ */ n.jsx(fe, { children: "Prisijungti" })
      ]
    }
  )
] }), an = c.div`
  margin-bottom: 20px;
`, X = c(I)`
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
`, fe = c.div`
  font-size: 1.6rem;
  font-weight: 500;
`, sn = c.nav`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 32px;
  height: 100%;
  min-width: 320px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.02);
  gap: 4px;
`, pe = c.div`
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  padding: 12px 8px;
  border-radius: 5px;
  transition: all 0.2s ease-out;
  color: ${({ theme: e }) => e.colors.text.retroBlack};

  ${({ $isActive: e, theme: t }) => e && `


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

    background-color: ${t.colors.primary};
  
  
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
    background-color: ${({ theme: e }) => e.colors.primary};
  }
`, ln = c.div`
  width: 100%;
  height: 1px;
  background-color: #d4d5de;
  margin: 16px 0;
`, cn = on, un = ({ children: e, onScroll: t = () => {
}, loggedIn: a, loginSlug: o, currentRoute: s, routes: f, logo: h, onGoHome: x, onGoBack: u, onLogin: m, onLogout: b, onRouteSelected: $ }) => {
  const k = Rt(W.mobileL);
  return /* @__PURE__ */ n.jsxs(dn, { children: [
    !k && /* @__PURE__ */ n.jsx(cn, { loggedIn: a, loginSlug: o, routes: f, logo: h, currentRoute: s, onLogin: m, onLogout: b, onRouteSelected: $ }),
    /* @__PURE__ */ n.jsx(fn, { onScroll: t, children: /* @__PURE__ */ n.jsxs(pn, { children: [
      s != null && s.back ? /* @__PURE__ */ n.jsx(Qt, { onGoBack: u, onLogin: m, onLogout: b, onRouteSelected: $, currentRoute: s }) : /* @__PURE__ */ n.jsx(nn, { logo: h, onGoHome: x }),
      e
    ] }) })
  ] });
}, _n = un, dn = c(xe)`
  width: 100vw;
  display: flex;
`, fn = c.div`
  width: 100%;
  min-height: 100%;
  overflow-y: scroll;
  background-color: white;
`, pn = c.div`
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
`, hn = ({ children: e, title: t, customSubTitle: a, customTitle: o, currentRoute: s }) => {
  const f = t || (s == null ? void 0 : s.title);
  return /* @__PURE__ */ n.jsxs(xn, { children: [
    o || f && /* @__PURE__ */ n.jsx(vn, { children: f }),
    a || (s == null ? void 0 : s.description) && /* @__PURE__ */ n.jsx(gn, { children: s == null ? void 0 : s.description }),
    e
  ] });
}, On = hn, gn = c.div`
  color: ${({ theme: e }) => e.colors.text.primary};
  margin-bottom: 16px;
`, xn = c.div`
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
`, vn = c.div`
  color: ${({ theme: e }) => e.colors.text.primary};
  font-size: 3.2rem;
  font-weight: 800;
  margin: 16px 0;
  text-align: center;
`;
export {
  yn as Button,
  wn as CheckBox,
  On as ContentLayout,
  _n as DefaultLayout,
  qe as FieldWrapper,
  Cn as MapField,
  It as Modal,
  kn as PasswordField,
  $n as Switch,
  En as Tabs,
  jn as TextField
};
