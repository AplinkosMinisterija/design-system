import S, { useState as N, useRef as Lr, useCallback as ge, useEffect as V, forwardRef as Mr } from "react";
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
  var e = S, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function v(x, u, b) {
    var y, j = {}, E = null, C = null;
    b !== void 0 && (E = "" + b), u.key !== void 0 && (E = "" + u.key), u.ref !== void 0 && (C = u.ref);
    for (y in u)
      i.call(u, y) && !f.hasOwnProperty(y) && (j[y] = u[y]);
    if (x && x.defaultProps)
      for (y in u = x.defaultProps, u)
        j[y] === void 0 && (j[y] = u[y]);
    return { $$typeof: t, type: x, key: E, ref: C, props: j, _owner: s.current };
  }
  return G.Fragment = a, G.jsx = v, G.jsxs = v, G;
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
    var e = S, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), v = Symbol.for("react.provider"), x = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), b = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), T = Symbol.iterator, z = "@@iterator";
    function A(r) {
      if (r === null || typeof r != "object")
        return null;
      var o = T && r[T] || r[z];
      return typeof o == "function" ? o : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(r) {
      {
        for (var o = arguments.length, l = new Array(o > 1 ? o - 1 : 0), d = 1; d < o; d++)
          l[d - 1] = arguments[d];
        rr("error", r, l);
      }
    }
    function rr(r, o, l) {
      {
        var d = R.ReactDebugCurrentFrame, g = d.getStackAddendum();
        g !== "" && (o += "%s", l = l.concat([g]));
        var m = l.map(function(h) {
          return String(h);
        });
        m.unshift("Warning: " + o), Function.prototype.apply.call(console[r], console, m);
      }
    }
    var tr = !1, nr = !1, or = !1, ir = !1, ar = !1, ve;
    ve = Symbol.for("react.module.reference");
    function sr(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === i || r === f || ar || r === s || r === b || r === y || ir || r === C || tr || nr || or || typeof r == "object" && r !== null && (r.$$typeof === E || r.$$typeof === j || r.$$typeof === v || r.$$typeof === x || r.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === ve || r.getModuleId !== void 0));
    }
    function lr(r, o, l) {
      var d = r.displayName;
      if (d)
        return d;
      var g = o.displayName || o.name || "";
      return g !== "" ? l + "(" + g + ")" : l;
    }
    function me(r) {
      return r.displayName || "Context";
    }
    function P(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case i:
          return "Fragment";
        case a:
          return "Portal";
        case f:
          return "Profiler";
        case s:
          return "StrictMode";
        case b:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case x:
            var o = r;
            return me(o) + ".Consumer";
          case v:
            var l = r;
            return me(l._context) + ".Provider";
          case u:
            return lr(r, r.render, "ForwardRef");
          case j:
            var d = r.displayName || null;
            return d !== null ? d : P(r.type) || "Memo";
          case E: {
            var g = r, m = g._payload, h = g._init;
            try {
              return P(h(m));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, H = 0, be, ye, we, $e, je, ke, Ee;
    function _e() {
    }
    _e.__reactDisabledLog = !0;
    function cr() {
      {
        if (H === 0) {
          be = console.log, ye = console.info, we = console.warn, $e = console.error, je = console.group, ke = console.groupCollapsed, Ee = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: _e,
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
        H < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = R.ReactCurrentDispatcher, ie;
    function Q(r, o, l) {
      {
        if (ie === void 0)
          try {
            throw Error();
          } catch (g) {
            var d = g.stack.trim().match(/\n( *(at )?)/);
            ie = d && d[1] || "";
          }
        return `
` + ie + r;
      }
    }
    var ae = !1, Z;
    {
      var dr = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new dr();
    }
    function Ce(r, o) {
      if (!r || ae)
        return "";
      {
        var l = Z.get(r);
        if (l !== void 0)
          return l;
      }
      var d;
      ae = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var m;
      m = oe.current, oe.current = null, cr();
      try {
        if (o) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (F) {
              d = F;
            }
            Reflect.construct(r, [], h);
          } else {
            try {
              h.call();
            } catch (F) {
              d = F;
            }
            r.call(h.prototype);
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
`), _ = d.stack.split(`
`), w = p.length - 1, $ = _.length - 1; w >= 1 && $ >= 0 && p[w] !== _[$]; )
            $--;
          for (; w >= 1 && $ >= 0; w--, $--)
            if (p[w] !== _[$]) {
              if (w !== 1 || $ !== 1)
                do
                  if (w--, $--, $ < 0 || p[w] !== _[$]) {
                    var O = `
` + p[w].replace(" at new ", " at ");
                    return r.displayName && O.includes("<anonymous>") && (O = O.replace("<anonymous>", r.displayName)), typeof r == "function" && Z.set(r, O), O;
                  }
                while (w >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        ae = !1, oe.current = m, ur(), Error.prepareStackTrace = g;
      }
      var Y = r ? r.displayName || r.name : "", We = Y ? Q(Y) : "";
      return typeof r == "function" && Z.set(r, We), We;
    }
    function fr(r, o, l) {
      return Ce(r, !1);
    }
    function pr(r) {
      var o = r.prototype;
      return !!(o && o.isReactComponent);
    }
    function ee(r, o, l) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Ce(r, pr(r));
      if (typeof r == "string")
        return Q(r);
      switch (r) {
        case b:
          return Q("Suspense");
        case y:
          return Q("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case u:
            return fr(r.render);
          case j:
            return ee(r.type, o, l);
          case E: {
            var d = r, g = d._payload, m = d._init;
            try {
              return ee(m(g), o, l);
            } catch {
            }
          }
        }
      return "";
    }
    var re = Object.prototype.hasOwnProperty, Oe = {}, Re = R.ReactDebugCurrentFrame;
    function te(r) {
      if (r) {
        var o = r._owner, l = ee(r.type, r._source, o ? o.type : null);
        Re.setExtraStackFrame(l);
      } else
        Re.setExtraStackFrame(null);
    }
    function hr(r, o, l, d, g) {
      {
        var m = Function.call.bind(re);
        for (var h in r)
          if (m(r, h)) {
            var p = void 0;
            try {
              if (typeof r[h] != "function") {
                var _ = Error((d || "React class") + ": " + l + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _.name = "Invariant Violation", _;
              }
              p = r[h](o, h, d, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              p = w;
            }
            p && !(p instanceof Error) && (te(g), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", l, h, typeof p), te(null)), p instanceof Error && !(p.message in Oe) && (Oe[p.message] = !0, te(g), k("Failed %s type: %s", l, p.message), te(null));
          }
      }
    }
    var gr = Array.isArray;
    function se(r) {
      return gr(r);
    }
    function xr(r) {
      {
        var o = typeof Symbol == "function" && Symbol.toStringTag, l = o && r[Symbol.toStringTag] || r.constructor.name || "Object";
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
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", xr(r)), Se(r);
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
        var o = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function yr(r) {
      if (re.call(r, "key")) {
        var o = Object.getOwnPropertyDescriptor(r, "key").get;
        if (o && o.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function wr(r, o) {
      if (typeof r.ref == "string" && U.current && o && U.current.stateNode !== o) {
        var l = P(U.current.type);
        le[l] || (k('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', P(U.current.type), r.ref), le[l] = !0);
      }
    }
    function $r(r, o) {
      {
        var l = function() {
          Pe || (Pe = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        l.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function jr(r, o) {
      {
        var l = function() {
          Fe || (Fe = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", o));
        };
        l.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var kr = function(r, o, l, d, g, m, h) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: o,
        ref: l,
        props: h,
        // Record the component responsible for creating this element.
        _owner: m
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
        value: g
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function Er(r, o, l, d, g) {
      {
        var m, h = {}, p = null, _ = null;
        l !== void 0 && (Te(l), p = "" + l), yr(o) && (Te(o.key), p = "" + o.key), br(o) && (_ = o.ref, wr(o, g));
        for (m in o)
          re.call(o, m) && !mr.hasOwnProperty(m) && (h[m] = o[m]);
        if (r && r.defaultProps) {
          var w = r.defaultProps;
          for (m in w)
            h[m] === void 0 && (h[m] = w[m]);
        }
        if (p || _) {
          var $ = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          p && $r(h, $), _ && jr(h, $);
        }
        return kr(r, p, _, g, d, U.current, h);
      }
    }
    var ce = R.ReactCurrentOwner, Le = R.ReactDebugCurrentFrame;
    function B(r) {
      if (r) {
        var o = r._owner, l = ee(r.type, r._source, o ? o.type : null);
        Le.setExtraStackFrame(l);
      } else
        Le.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function de(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function Me() {
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
    function _r(r) {
      {
        if (r !== void 0) {
          var o = r.fileName.replace(/^.*[\\\/]/, ""), l = r.lineNumber;
          return `

Check your code at ` + o + ":" + l + ".";
        }
        return "";
      }
    }
    var Ie = {};
    function Cr(r) {
      {
        var o = Me();
        if (!o) {
          var l = typeof r == "string" ? r : r.displayName || r.name;
          l && (o = `

Check the top-level render call using <` + l + ">.");
        }
        return o;
      }
    }
    function ze(r, o) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var l = Cr(o);
        if (Ie[l])
          return;
        Ie[l] = !0;
        var d = "";
        r && r._owner && r._owner !== ce.current && (d = " It was passed a child from " + P(r._owner.type) + "."), B(r), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, d), B(null);
      }
    }
    function Ae(r, o) {
      {
        if (typeof r != "object")
          return;
        if (se(r))
          for (var l = 0; l < r.length; l++) {
            var d = r[l];
            de(d) && ze(d, o);
          }
        else if (de(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var g = A(r);
          if (typeof g == "function" && g !== r.entries)
            for (var m = g.call(r), h; !(h = m.next()).done; )
              de(h.value) && ze(h.value, o);
        }
      }
    }
    function Or(r) {
      {
        var o = r.type;
        if (o == null || typeof o == "string")
          return;
        var l;
        if (typeof o == "function")
          l = o.propTypes;
        else if (typeof o == "object" && (o.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        o.$$typeof === j))
          l = o.propTypes;
        else
          return;
        if (l) {
          var d = P(o);
          hr(l, r.props, "prop", d, r);
        } else if (o.PropTypes !== void 0 && !ue) {
          ue = !0;
          var g = P(o);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof o.getDefaultProps == "function" && !o.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(r) {
      {
        for (var o = Object.keys(r.props), l = 0; l < o.length; l++) {
          var d = o[l];
          if (d !== "children" && d !== "key") {
            B(r), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), B(null);
            break;
          }
        }
        r.ref !== null && (B(r), k("Invalid attribute `ref` supplied to `React.Fragment`."), B(null));
      }
    }
    function De(r, o, l, d, g, m) {
      {
        var h = sr(r);
        if (!h) {
          var p = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _ = _r(g);
          _ ? p += _ : p += Me();
          var w;
          r === null ? w = "null" : se(r) ? w = "array" : r !== void 0 && r.$$typeof === t ? (w = "<" + (P(r.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : w = typeof r, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, p);
        }
        var $ = Er(r, o, l, g, m);
        if ($ == null)
          return $;
        if (h) {
          var O = o.children;
          if (O !== void 0)
            if (d)
              if (se(O)) {
                for (var Y = 0; Y < O.length; Y++)
                  Ae(O[Y], r);
                Object.freeze && Object.freeze(O);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(O, r);
        }
        return r === i ? Rr($) : Or($), $;
      }
    }
    function Sr(r, o, l) {
      return De(r, o, l, !0);
    }
    function Tr(r, o, l) {
      return De(r, o, l, !1);
    }
    var Pr = Tr, Fr = Sr;
    J.Fragment = i, J.jsx = Pr, J.jsxs = Fr;
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
  height: i = 56,
  padding: s = "11px 20px",
  leftIcon: f,
  radius: v = "28px",
  buttonPadding: x,
  rightIcon: u,
  color: b,
  type: y,
  loading: j = !1,
  className: E,
  disabled: C = !1,
  fontWeight: T = "600",
  ...z
}) => /* @__PURE__ */ n.jsxs(
  Wr,
  {
    className: E,
    $padding: s,
    $fontWeight: T,
    $variant: e,
    $height: i || 40,
    type: y,
    disabled: C,
    $radius: v,
    ...z,
    children: [
      f,
      j ? /* @__PURE__ */ n.jsx(Dr, { color: "white" }) : a,
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
  disabled: i = !1,
  label: s,
  error: f,
  className: v,
  intermediate: x
}) => /* @__PURE__ */ n.jsx(n.Fragment, { children: /* @__PURE__ */ n.jsxs(
  Yr,
  {
    disabled: i,
    className: v,
    onClick: () => {
      !i && a(!e);
    },
    children: [
      /* @__PURE__ */ n.jsxs(
        Nr,
        {
          intermediate: x,
          disabled: i,
          error: f,
          checked: e,
          children: [
            /* @__PURE__ */ n.jsx(
              Ur,
              {
                type: "checkbox",
                name: t,
                checked: e || !1,
                disabled: i,
                onChange: () => {
                }
              }
            ),
            /* @__PURE__ */ n.jsx(Hr, { checked: e || !1, intermediate: x, disabled: i })
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
  background-color: ${({ theme: e, checked: t, error: a, intermediate: i }) => t || i ? e.colors.primary : a ? e.colors.danger : e.colors.border};
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
  className: i,
  padding: s = "0",
  onClick: f,
  handleBlur: v,
  subLabel: x,
  bottomLabel: u,
  secondLabel: b,
  children: y
}) => /* @__PURE__ */ n.jsxs(
  Zr,
  {
    tabIndex: -1,
    onBlur: v,
    className: i,
    padding: s,
    onClick: f,
    children: [
      /* @__PURE__ */ n.jsxs(et, { children: [
        !!a && /* @__PURE__ */ n.jsxs(nt, { children: [
          /* @__PURE__ */ n.jsx(tt, { htmlFor: a, children: a }),
          !!x && /* @__PURE__ */ n.jsx(ot, { children: x })
        ] }),
        b
      ] }),
      y,
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
`, ot = c.div`
  display: inline-block;
  font-size: 1.2rem;
  font-weight: 600;
  color: #0b1f518f;
  max-width: 130px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 2rem;
`, qe = Qr, it = ({
  value: e,
  name: t,
  error: a,
  readOnly: i = !1,
  leftIcon: s,
  rightIcon: f,
  onChange: v,
  placeholder: x,
  type: u = "text",
  disabled: b,
  height: y = 56,
  selectedValue: j = !1,
  onInputClick: E,
  inputMode: C = "text",
  onFocus: T = () => {
  },
  ...z
}) => /* @__PURE__ */ n.jsxs(at, { $error: !!a, $height: y || 40, $disabled: b || !1, children: [
  s,
  /* @__PURE__ */ n.jsx(
    st,
    {
      $selectedValue: j,
      onClick: () => E ? E() : null,
      readOnly: i,
      type: u,
      name: t,
      autoComplete: "off",
      value: e || "",
      onChange: (A) => {
        var R;
        return v && v(((R = A == null ? void 0 : A.target) == null ? void 0 : R.value) || "");
      },
      placeholder: x,
      disabled: b,
      onFocus: T,
      inputMode: C,
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
`, Xe = it, lt = ({
  value: e,
  name: t,
  error: a,
  showError: i = !0,
  readOnly: s = !1,
  label: f,
  className: v,
  leftIcon: x,
  rightIcon: u,
  padding: b,
  onChange: y,
  subLabel: j,
  placeholder: E,
  bottomLabel: C,
  type: T,
  disabled: z,
  height: A,
  secondLabel: R,
  onInputClick: k
}) => /* @__PURE__ */ n.jsx(
  qe,
  {
    padding: b,
    className: v,
    label: f,
    subLabel: j,
    secondLabel: R,
    error: a,
    showError: i,
    bottomLabel: C,
    children: /* @__PURE__ */ n.jsx(
      Xe,
      {
        value: e,
        name: t,
        error: a,
        leftIcon: x,
        rightIcon: u,
        onChange: y,
        disabled: z,
        height: A,
        readOnly: s,
        onInputClick: k,
        placeholder: E,
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
}, Ve = S.createContext && S.createContext(Ke), L = function() {
  return L = Object.assign || function(e) {
    for (var t, a = 1, i = arguments.length; a < i; a++) {
      t = arguments[a];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, L.apply(this, arguments);
}, ct = function(e, t) {
  var a = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (a[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
      t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (a[i[s]] = e[i[s]]);
  return a;
};
function Qe(e) {
  return e && e.map(function(t, a) {
    return S.createElement(t.tag, L({
      key: a
    }, t.attr), Qe(t.child));
  });
}
function K(e) {
  return function(t) {
    return S.createElement(ut, L({
      attr: L({}, e.attr)
    }, t), Qe(e.child));
  };
}
function ut(e) {
  var t = function(a) {
    var i = e.attr, s = e.size, f = e.title, v = ct(e, ["attr", "size", "title"]), x = s || a.size || "1em", u;
    return a.className && (u = a.className), e.className && (u = (u ? u + " " : "") + e.className), S.createElement("svg", L({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, a.attr, i, v, {
      className: u,
      style: L(L({
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
var M = /* @__PURE__ */ ((e) => (e.visibleOn = "visibleOn", e.visibleOff = "visibleOff", e.logout = "logout", e.back = "back", e.burger = "burger", e.right = "right", e))(M || {});
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
  error: i,
  showError: s = !0,
  label: f,
  className: v,
  padding: x,
  onChange: u,
  placeholder: b,
  disabled: y,
  height: j,
  onInputClick: E
}) => {
  const [C, T] = N(!1);
  return /* @__PURE__ */ n.jsx(
    qe,
    {
      padding: x,
      secondLabel: t,
      className: v,
      label: f,
      error: i,
      showError: s,
      children: /* @__PURE__ */ n.jsx(
        Xe,
        {
          value: e,
          type: C ? "text" : "password",
          name: a,
          error: i,
          rightIcon: /* @__PURE__ */ n.jsx(mt, { onClick: () => T(!C), children: /* @__PURE__ */ n.jsx(bt, { name: C ? "visibleOn" : "visibleOff" }) }),
          onChange: u,
          disabled: y,
          height: j,
          onInputClick: E,
          placeholder: b
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
`, kn = vt, yt = ({ options: e, onChange: t, value: a, className: i = "" }) => /* @__PURE__ */ n.jsx(wt, { className: i, children: /* @__PURE__ */ n.jsx($t, { $numberOfColumns: e.length, children: e.map((s, f) => /* @__PURE__ */ n.jsx(
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
  onChange: i,
  ...s
}) => {
  const f = Lr(null), v = ge(
    (u) => {
      var b, y;
      u.origin === e && i(JSON.parse((y = (b = u == null ? void 0 : u.data) == null ? void 0 : b.mapIframeMsg) == null ? void 0 : y.data));
    },
    [i]
  );
  V(() => (window.addEventListener("message", v), () => window.removeEventListener("message", v)), [v]);
  const x = () => {
    var u, b;
    a && ((b = (u = f == null ? void 0 : f.current) == null ? void 0 : u.contentWindow) == null || b.postMessage({ geom: a }, "*"));
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
}, _n = kt, Et = c.iframe`
  height: 400px;
  width: 100%;
  display: block;
  border: 1px solid #d4d5de;
  border-radius: 4px;
  margin-top: 8px;
`;
var q = function() {
  return q = Object.assign || function(e) {
    for (var t, a = 1, i = arguments.length; a < i; a++) {
      t = arguments[a];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, q.apply(this, arguments);
}, _t = function(e, t) {
  var a = {};
  for (var i in e)
    Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (a[i] = e[i]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, i = Object.getOwnPropertySymbols(e); s < i.length; s++)
      t.indexOf(i[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[s]) && (a[i[s]] = e[i[s]]);
  return a;
}, Ne = !1, xe = Mr(function(e, t) {
  var a = e.style, i = _t(e, ["style"]), s = Ct();
  !Ne && (a != null && a.height) && (Ne = !0, console.warn("<Div100vh /> overrides the height property of the style prop"));
  var f = q(q({}, a), { height: s ? s + "px" : "100vh" });
  return S.createElement("div", q({ ref: t, style: f }, i));
});
xe.displayName = "Div100vh";
function Ct() {
  var e = N(He), t = e[0], a = e[1], i = Ot();
  return V(function() {
    if (!i)
      return;
    function s() {
      var f = He();
      a(f);
    }
    return window.addEventListener("resize", s), function() {
      return window.removeEventListener("resize", s);
    };
  }, [i]), i ? t : null;
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
  const [t, a] = N(!1), i = ge(() => {
    const s = window.matchMedia(e);
    a(s.matches);
  }, [e]);
  return V(() => {
    i();
  }, [i]), V(() => (window.addEventListener("resize", i), () => window.removeEventListener("resize", i)), [i]), t;
}, St = ({ label: e, icon: t, onClick: a, isActive: i = !1 }) => /* @__PURE__ */ n.jsxs(Tt, { $isActive: i, onClick: a, children: [
  /* @__PURE__ */ n.jsx(Pt, { children: t ? /* @__PURE__ */ n.jsx(Ft, { name: t }) : null }),
  e,
  /* @__PURE__ */ n.jsx(I, { name: M.right })
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
`, Ft = c(I)``, Ue = St, Lt = ({ visible: e, children: t, onClose: a }) => {
  const i = ge(
    (s) => {
      s.key === "Escape" && a && a();
    },
    [a]
  );
  return V(() => (window.addEventListener("keydown", i), () => window.removeEventListener("keydown", i)), [e, i]), e ? /* @__PURE__ */ n.jsx(
    Mt,
    {
      onClick: (s) => {
        s.target === s.currentTarget && a && a();
      },
      children: t
    }
  ) : /* @__PURE__ */ n.jsx(S.Fragment, {});
}, Mt = c.div`
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
`, It = Lt, zt = ({
  onClose: e,
  visible: t = !0,
  loggedIn: a,
  currentRoute: i,
  routes: s,
  onLogin: f,
  onLogout: v,
  onRouteSelected: x
}) => /* @__PURE__ */ n.jsx(It, { visible: t, onClose: e, children: /* @__PURE__ */ n.jsx(Dt, { children: /* @__PURE__ */ n.jsxs(Wt, { children: [
  /* @__PURE__ */ n.jsx(Yt, { children: /* @__PURE__ */ n.jsxs(Bt, { onClick: e, children: [
    /* @__PURE__ */ n.jsx(At, { name: "close" }),
    "Uždaryti"
  ] }) }),
  /* @__PURE__ */ n.jsxs(Vt, { children: [
    /* @__PURE__ */ n.jsx(Nt, { children: "Meniu" }),
    /* @__PURE__ */ n.jsx(Ht, { children: "Pasirinkite dominančią sritį" })
  ] }),
  s == null ? void 0 : s.map((u, b) => /* @__PURE__ */ n.jsx(
    Ue,
    {
      isActive: u.slug === i.slug,
      label: u.title || "",
      icon: u.iconName,
      onClick: () => {
        x(u.slug), e();
      }
    },
    `menu_button_${b}`
  )),
  /* @__PURE__ */ n.jsx(
    Ue,
    {
      label: a ? "Atsijungti" : "Prisijungti",
      icon: M.logout,
      onClick: () => {
        a ? v() : (f(), e());
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
`, er = zt, Ut = (e) => {
  const { onGoBack: t } = e, [a, i] = N(!1);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(Gt, { children: [
      /* @__PURE__ */ n.jsx(Kt, { onClick: t, children: /* @__PURE__ */ n.jsx(Xt, { name: M.back }) }),
      /* @__PURE__ */ n.jsxs(Jt, { onClick: () => i(!0), children: [
        /* @__PURE__ */ n.jsx(qt, { name: M.burger }),
        "Meniu"
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(er, { visible: a, ...e })
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
`, Qt = Ut, Zt = (e) => {
  const { onGoHome: t, logo: a } = e, [i, s] = N(!1);
  return /* @__PURE__ */ n.jsxs(n.Fragment, { children: [
    /* @__PURE__ */ n.jsxs(en, { children: [
      /* @__PURE__ */ n.jsx("div", { onClick: t, children: a }),
      /* @__PURE__ */ n.jsxs(rn, { onClick: () => s(!0), children: [
        /* @__PURE__ */ n.jsx(tn, { name: M.burger }),
        "Meniu"
      ] })
    ] }),
    /* @__PURE__ */ n.jsx(er, { visible: i, ...e })
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
`, nn = Zt, on = ({
  loggedIn: e,
  loginSlug: t,
  routes: a,
  logo: i,
  onLogin: s,
  onLogout: f,
  onRouteSelected: v,
  currentRoute: x
}) => /* @__PURE__ */ n.jsxs(sn, { children: [
  /* @__PURE__ */ n.jsx(an, { children: i }),
  a.map((u, b) => /* @__PURE__ */ n.jsxs(
    pe,
    {
      onClick: () => v(u.slug),
      $isActive: u.slug === x.slug,
      children: [
        /* @__PURE__ */ n.jsx(X, { name: u.iconName }),
        /* @__PURE__ */ n.jsx(fe, { children: u.title })
      ]
    },
    `sidebar_btn_${u.slug}_${b}`
  )),
  /* @__PURE__ */ n.jsx(ln, {}),
  e ? /* @__PURE__ */ n.jsxs(pe, { onClick: () => f(), $isActive: !1, children: [
    /* @__PURE__ */ n.jsx(X, { name: M.logout }),
    /* @__PURE__ */ n.jsx(fe, { children: "Atsijungti" })
  ] }) : /* @__PURE__ */ n.jsxs(pe, { onClick: s, $isActive: t === x.slug, children: [
    /* @__PURE__ */ n.jsx(X, { name: M.logout }),
    /* @__PURE__ */ n.jsx(fe, { children: "Prisijungti" })
  ] })
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
`, cn = on, un = (e) => {
  var s;
  const { children: t, onScroll: a = () => {
  } } = e, i = Rt(W.mobileL);
  return /* @__PURE__ */ n.jsxs(dn, { children: [
    !i && /* @__PURE__ */ n.jsx(cn, { ...e }),
    /* @__PURE__ */ n.jsx(fn, { onScroll: a, children: /* @__PURE__ */ n.jsxs(pn, { children: [
      (s = e == null ? void 0 : e.currentRoute) != null && s.back ? /* @__PURE__ */ n.jsx(Qt, { ...e }) : /* @__PURE__ */ n.jsx(nn, { ...e }),
      t
    ] }) })
  ] });
}, Cn = un, dn = c(xe)`
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
`, hn = ({ children: e, title: t, customSubTitle: a, customTitle: i, currentRoute: s }) => {
  const f = t || (s == null ? void 0 : s.title);
  return /* @__PURE__ */ n.jsxs(xn, { children: [
    i || f && /* @__PURE__ */ n.jsx(vn, { children: f }),
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
  Cn as DefaultLayout,
  qe as FieldWrapper,
  _n as MapField,
  It as Modal,
  kn as PasswordField,
  $n as Switch,
  En as Tabs,
  jn as TextField
};
