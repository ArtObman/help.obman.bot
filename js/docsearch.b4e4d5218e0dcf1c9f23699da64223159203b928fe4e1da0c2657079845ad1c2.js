(() => {
  // node_modules/@docsearch/js/dist/esm/index.js
  function e() {
    return e = Object.assign ? Object.assign.bind() : function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, e.apply(null, arguments);
  }
  function t(e2) {
    return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
      return typeof e3;
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
    }, t(e2);
  }
  var n;
  var r;
  var o;
  var i;
  var a;
  var c;
  var u;
  var l;
  var s;
  var f;
  var p;
  var m;
  var v = {};
  var h = [];
  var d = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  var y = Array.isArray;
  function _(e2, t2) {
    for (var n2 in t2) e2[n2] = t2[n2];
    return e2;
  }
  function g(e2) {
    e2 && e2.parentNode && e2.parentNode.removeChild(e2);
  }
  function b(e2, t2, r2) {
    var o2, i2, a2, c2 = {};
    for (a2 in t2) "key" == a2 ? o2 = t2[a2] : "ref" == a2 ? i2 = t2[a2] : c2[a2] = t2[a2];
    if (arguments.length > 2 && (c2.children = arguments.length > 3 ? n.call(arguments, 2) : r2), "function" == typeof e2 && null != e2.defaultProps) for (a2 in e2.defaultProps) void 0 === c2[a2] && (c2[a2] = e2.defaultProps[a2]);
    return S(e2, c2, o2, i2, null);
  }
  function S(e2, t2, n2, i2, a2) {
    var c2 = { type: e2, props: t2, key: n2, ref: i2, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: null == a2 ? ++o : a2, __i: -1, __u: 0 };
    return null == a2 && null != r.vnode && r.vnode(c2), c2;
  }
  function O(e2) {
    return e2.children;
  }
  function w(e2, t2) {
    this.props = e2, this.context = t2;
  }
  function E(e2, t2) {
    if (null == t2) return e2.__ ? E(e2.__, e2.__i + 1) : null;
    for (var n2; t2 < e2.__k.length; t2++) if (null != (n2 = e2.__k[t2]) && null != n2.__e) return n2.__e;
    return "function" == typeof e2.type ? E(e2) : null;
  }
  function j(e2) {
    var t2, n2;
    if (null != (e2 = e2.__) && null != e2.__c) {
      for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++) if (null != (n2 = e2.__k[t2]) && null != n2.__e) {
        e2.__e = e2.__c.base = n2.__e;
        break;
      }
      return j(e2);
    }
  }
  function P(e2) {
    (!e2.__d && (e2.__d = true) && i.push(e2) && !I.__r++ || a !== r.debounceRendering) && ((a = r.debounceRendering) || c)(I);
  }
  function I() {
    var e2, t2, n2, o2, a2, c2, l2, s2;
    for (i.sort(u); e2 = i.shift(); ) e2.__d && (t2 = i.length, o2 = void 0, c2 = (a2 = (n2 = e2).__v).__e, l2 = [], s2 = [], n2.__P && ((o2 = _({}, a2)).__v = a2.__v + 1, r.vnode && r.vnode(o2), R(n2.__P, o2, a2, n2.__n, n2.__P.namespaceURI, 32 & a2.__u ? [c2] : null, l2, null == c2 ? E(a2) : c2, !!(32 & a2.__u), s2), o2.__v = a2.__v, o2.__.__k[o2.__i] = o2, L(l2, o2, s2), o2.__e != c2 && j(o2)), i.length > t2 && i.sort(u));
    I.__r = 0;
  }
  function k(e2, t2, n2, r2, o2, i2, a2, c2, u2, l2, s2) {
    var f2, p2, m2, d2, _2, g2, b2 = r2 && r2.__k || h, w2 = t2.length;
    for (u2 = function(e3, t3, n3, r3, o3) {
      var i3, a3, c3, u3, l3, s3 = n3.length, f3 = s3, p3 = 0;
      for (e3.__k = new Array(o3), i3 = 0; i3 < o3; i3++) null != (a3 = t3[i3]) && "boolean" != typeof a3 && "function" != typeof a3 ? (u3 = i3 + p3, (a3 = e3.__k[i3] = "string" == typeof a3 || "number" == typeof a3 || "bigint" == typeof a3 || a3.constructor == String ? S(null, a3, null, null, null) : y(a3) ? S(O, { children: a3 }, null, null, null) : void 0 === a3.constructor && a3.__b > 0 ? S(a3.type, a3.props, a3.key, a3.ref ? a3.ref : null, a3.__v) : a3).__ = e3, a3.__b = e3.__b + 1, c3 = null, -1 !== (l3 = a3.__i = x(a3, n3, u3, f3)) && (f3--, (c3 = n3[l3]) && (c3.__u |= 2)), null == c3 || null === c3.__v ? (-1 == l3 && p3--, "function" != typeof a3.type && (a3.__u |= 4)) : l3 != u3 && (l3 == u3 - 1 ? p3-- : l3 == u3 + 1 ? p3++ : (l3 > u3 ? p3-- : p3++, a3.__u |= 4))) : e3.__k[i3] = null;
      if (f3) for (i3 = 0; i3 < s3; i3++) null != (c3 = n3[i3]) && !(2 & c3.__u) && (c3.__e == r3 && (r3 = E(c3)), H(c3, c3));
      return r3;
    }(n2, t2, b2, u2, w2), f2 = 0; f2 < w2; f2++) null != (m2 = n2.__k[f2]) && (p2 = -1 === m2.__i ? v : b2[m2.__i] || v, m2.__i = f2, g2 = R(e2, m2, p2, o2, i2, a2, c2, u2, l2, s2), d2 = m2.__e, m2.ref && p2.ref != m2.ref && (p2.ref && M(p2.ref, null, m2), s2.push(m2.ref, m2.__c || d2, m2)), null == _2 && null != d2 && (_2 = d2), 4 & m2.__u || p2.__k === m2.__k ? u2 = D(m2, u2, e2) : "function" == typeof m2.type && void 0 !== g2 ? u2 = g2 : d2 && (u2 = d2.nextSibling), m2.__u &= -7);
    return n2.__e = _2, u2;
  }
  function D(e2, t2, n2) {
    var r2, o2;
    if ("function" == typeof e2.type) {
      for (r2 = e2.__k, o2 = 0; r2 && o2 < r2.length; o2++) r2[o2] && (r2[o2].__ = e2, t2 = D(r2[o2], t2, n2));
      return t2;
    }
    e2.__e != t2 && (t2 && e2.type && !n2.contains(t2) && (t2 = E(e2)), n2.insertBefore(e2.__e, t2 || null), t2 = e2.__e);
    do {
      t2 = t2 && t2.nextSibling;
    } while (null != t2 && 8 == t2.nodeType);
    return t2;
  }
  function C(e2, t2) {
    return t2 = t2 || [], null == e2 || "boolean" == typeof e2 || (y(e2) ? e2.some(function(e3) {
      C(e3, t2);
    }) : t2.push(e2)), t2;
  }
  function x(e2, t2, n2, r2) {
    var o2, i2, a2 = e2.key, c2 = e2.type, u2 = t2[n2];
    if (null === u2 || u2 && a2 == u2.key && c2 === u2.type && !(2 & u2.__u)) return n2;
    if (r2 > (null == u2 || 2 & u2.__u ? 0 : 1)) for (o2 = n2 - 1, i2 = n2 + 1; o2 >= 0 || i2 < t2.length; ) {
      if (o2 >= 0) {
        if ((u2 = t2[o2]) && !(2 & u2.__u) && a2 == u2.key && c2 === u2.type) return o2;
        o2--;
      }
      if (i2 < t2.length) {
        if ((u2 = t2[i2]) && !(2 & u2.__u) && a2 == u2.key && c2 === u2.type) return i2;
        i2++;
      }
    }
    return -1;
  }
  function A(e2, t2, n2) {
    "-" == t2[0] ? e2.setProperty(t2, null == n2 ? "" : n2) : e2[t2] = null == n2 ? "" : "number" != typeof n2 || d.test(t2) ? n2 : n2 + "px";
  }
  function N(e2, t2, n2, r2, o2) {
    var i2;
    e: if ("style" == t2) if ("string" == typeof n2) e2.style.cssText = n2;
    else {
      if ("string" == typeof r2 && (e2.style.cssText = r2 = ""), r2) for (t2 in r2) n2 && t2 in n2 || A(e2.style, t2, "");
      if (n2) for (t2 in n2) r2 && n2[t2] === r2[t2] || A(e2.style, t2, n2[t2]);
    }
    else if ("o" == t2[0] && "n" == t2[1]) i2 = t2 != (t2 = t2.replace(l, "$1")), t2 = t2.toLowerCase() in e2 || "onFocusOut" == t2 || "onFocusIn" == t2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + i2] = n2, n2 ? r2 ? n2.u = r2.u : (n2.u = s, e2.addEventListener(t2, i2 ? p : f, i2)) : e2.removeEventListener(t2, i2 ? p : f, i2);
    else {
      if ("http://www.w3.org/2000/svg" == o2) t2 = t2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" != t2 && "height" != t2 && "href" != t2 && "list" != t2 && "form" != t2 && "tabIndex" != t2 && "download" != t2 && "rowSpan" != t2 && "colSpan" != t2 && "role" != t2 && "popover" != t2 && t2 in e2) try {
        e2[t2] = null == n2 ? "" : n2;
        break e;
      } catch (e3) {
      }
      "function" == typeof n2 || (null == n2 || false === n2 && "-" != t2[4] ? e2.removeAttribute(t2) : e2.setAttribute(t2, "popover" == t2 && 1 == n2 ? "" : n2));
    }
  }
  function T(e2) {
    return function(t2) {
      if (this.l) {
        var n2 = this.l[t2.type + e2];
        if (null == t2.t) t2.t = s++;
        else if (t2.t < n2.u) return;
        return n2(r.event ? r.event(t2) : t2);
      }
    };
  }
  function R(e2, t2, n2, o2, i2, a2, c2, u2, l2, s2) {
    var f2, p2, m2, v2, h2, d2, b2, S2, E2, j2, P2, I2, D2, C2, x2, A2, N2, T2 = t2.type;
    if (void 0 !== t2.constructor) return null;
    128 & n2.__u && (l2 = !!(32 & n2.__u), a2 = [u2 = t2.__e = n2.__e]), (f2 = r.__b) && f2(t2);
    e: if ("function" == typeof T2) try {
      if (S2 = t2.props, E2 = "prototype" in T2 && T2.prototype.render, j2 = (f2 = T2.contextType) && o2[f2.__c], P2 = f2 ? j2 ? j2.props.value : f2.__ : o2, n2.__c ? b2 = (p2 = t2.__c = n2.__c).__ = p2.__E : (E2 ? t2.__c = p2 = new T2(S2, P2) : (t2.__c = p2 = new w(S2, P2), p2.constructor = T2, p2.render = U), j2 && j2.sub(p2), p2.props = S2, p2.state || (p2.state = {}), p2.context = P2, p2.__n = o2, m2 = p2.__d = true, p2.__h = [], p2._sb = []), E2 && null == p2.__s && (p2.__s = p2.state), E2 && null != T2.getDerivedStateFromProps && (p2.__s == p2.state && (p2.__s = _({}, p2.__s)), _(p2.__s, T2.getDerivedStateFromProps(S2, p2.__s))), v2 = p2.props, h2 = p2.state, p2.__v = t2, m2) E2 && null == T2.getDerivedStateFromProps && null != p2.componentWillMount && p2.componentWillMount(), E2 && null != p2.componentDidMount && p2.__h.push(p2.componentDidMount);
      else {
        if (E2 && null == T2.getDerivedStateFromProps && S2 !== v2 && null != p2.componentWillReceiveProps && p2.componentWillReceiveProps(S2, P2), !p2.__e && (null != p2.shouldComponentUpdate && false === p2.shouldComponentUpdate(S2, p2.__s, P2) || t2.__v == n2.__v)) {
          for (t2.__v != n2.__v && (p2.props = S2, p2.state = p2.__s, p2.__d = false), t2.__e = n2.__e, t2.__k = n2.__k, t2.__k.some(function(e3) {
            e3 && (e3.__ = t2);
          }), I2 = 0; I2 < p2._sb.length; I2++) p2.__h.push(p2._sb[I2]);
          p2._sb = [], p2.__h.length && c2.push(p2);
          break e;
        }
        null != p2.componentWillUpdate && p2.componentWillUpdate(S2, p2.__s, P2), E2 && null != p2.componentDidUpdate && p2.__h.push(function() {
          p2.componentDidUpdate(v2, h2, d2);
        });
      }
      if (p2.context = P2, p2.props = S2, p2.__P = e2, p2.__e = false, D2 = r.__r, C2 = 0, E2) {
        for (p2.state = p2.__s, p2.__d = false, D2 && D2(t2), f2 = p2.render(p2.props, p2.state, p2.context), x2 = 0; x2 < p2._sb.length; x2++) p2.__h.push(p2._sb[x2]);
        p2._sb = [];
      } else do {
        p2.__d = false, D2 && D2(t2), f2 = p2.render(p2.props, p2.state, p2.context), p2.state = p2.__s;
      } while (p2.__d && ++C2 < 25);
      p2.state = p2.__s, null != p2.getChildContext && (o2 = _(_({}, o2), p2.getChildContext())), E2 && !m2 && null != p2.getSnapshotBeforeUpdate && (d2 = p2.getSnapshotBeforeUpdate(v2, h2)), u2 = k(e2, y(A2 = null != f2 && f2.type === O && null == f2.key ? f2.props.children : f2) ? A2 : [A2], t2, n2, o2, i2, a2, c2, u2, l2, s2), p2.base = t2.__e, t2.__u &= -161, p2.__h.length && c2.push(p2), b2 && (p2.__E = p2.__ = null);
    } catch (e3) {
      if (t2.__v = null, l2 || null != a2) if (e3.then) {
        for (t2.__u |= l2 ? 160 : 128; u2 && 8 == u2.nodeType && u2.nextSibling; ) u2 = u2.nextSibling;
        a2[a2.indexOf(u2)] = null, t2.__e = u2;
      } else for (N2 = a2.length; N2--; ) g(a2[N2]);
      else t2.__e = n2.__e, t2.__k = n2.__k;
      r.__e(e3, t2, n2);
    }
    else null == a2 && t2.__v == n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : u2 = t2.__e = q(n2.__e, t2, n2, o2, i2, a2, c2, l2, s2);
    return (f2 = r.diffed) && f2(t2), 128 & t2.__u ? void 0 : u2;
  }
  function L(e2, t2, n2) {
    for (var o2 = 0; o2 < n2.length; o2++) M(n2[o2], n2[++o2], n2[++o2]);
    r.__c && r.__c(t2, e2), e2.some(function(t3) {
      try {
        e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
          e3.call(t3);
        });
      } catch (e3) {
        r.__e(e3, t3.__v);
      }
    });
  }
  function q(e2, t2, o2, i2, a2, c2, u2, l2, s2) {
    var f2, p2, m2, h2, d2, _2, b2, S2 = o2.props, O2 = t2.props, w2 = t2.type;
    if ("svg" == w2 ? a2 = "http://www.w3.org/2000/svg" : "math" == w2 ? a2 = "http://www.w3.org/1998/Math/MathML" : a2 || (a2 = "http://www.w3.org/1999/xhtml"), null != c2) {
      for (f2 = 0; f2 < c2.length; f2++) if ((d2 = c2[f2]) && "setAttribute" in d2 == !!w2 && (w2 ? d2.localName == w2 : 3 == d2.nodeType)) {
        e2 = d2, c2[f2] = null;
        break;
      }
    }
    if (null == e2) {
      if (null == w2) return document.createTextNode(O2);
      e2 = document.createElementNS(a2, w2, O2.is && O2), l2 && (r.__m && r.__m(t2, c2), l2 = false), c2 = null;
    }
    if (null === w2) S2 === O2 || l2 && e2.data === O2 || (e2.data = O2);
    else {
      if (c2 = c2 && n.call(e2.childNodes), S2 = o2.props || v, !l2 && null != c2) for (S2 = {}, f2 = 0; f2 < e2.attributes.length; f2++) S2[(d2 = e2.attributes[f2]).name] = d2.value;
      for (f2 in S2) if (d2 = S2[f2], "children" == f2) ;
      else if ("dangerouslySetInnerHTML" == f2) m2 = d2;
      else if (!(f2 in O2)) {
        if ("value" == f2 && "defaultValue" in O2 || "checked" == f2 && "defaultChecked" in O2) continue;
        N(e2, f2, null, d2, a2);
      }
      for (f2 in O2) d2 = O2[f2], "children" == f2 ? h2 = d2 : "dangerouslySetInnerHTML" == f2 ? p2 = d2 : "value" == f2 ? _2 = d2 : "checked" == f2 ? b2 = d2 : l2 && "function" != typeof d2 || S2[f2] === d2 || N(e2, f2, d2, S2[f2], a2);
      if (p2) l2 || m2 && (p2.__html === m2.__html || p2.__html === e2.innerHTML) || (e2.innerHTML = p2.__html), t2.__k = [];
      else if (m2 && (e2.innerHTML = ""), k(e2, y(h2) ? h2 : [h2], t2, o2, i2, "foreignObject" == w2 ? "http://www.w3.org/1999/xhtml" : a2, c2, u2, c2 ? c2[0] : o2.__k && E(o2, 0), l2, s2), null != c2) for (f2 = c2.length; f2--; ) g(c2[f2]);
      l2 || (f2 = "value", "progress" == w2 && null == _2 ? e2.removeAttribute("value") : void 0 !== _2 && (_2 !== e2[f2] || "progress" == w2 && !_2 || "option" == w2 && _2 !== S2[f2]) && N(e2, f2, _2, S2[f2], a2), f2 = "checked", void 0 !== b2 && b2 !== e2[f2] && N(e2, f2, b2, S2[f2], a2));
    }
    return e2;
  }
  function M(e2, t2, n2) {
    try {
      if ("function" == typeof e2) {
        var o2 = "function" == typeof e2.__u;
        o2 && e2.__u(), o2 && null == t2 || (e2.__u = e2(t2));
      } else e2.current = t2;
    } catch (e3) {
      r.__e(e3, n2);
    }
  }
  function H(e2, t2, n2) {
    var o2, i2;
    if (r.unmount && r.unmount(e2), (o2 = e2.ref) && (o2.current && o2.current !== e2.__e || M(o2, null, t2)), null != (o2 = e2.__c)) {
      if (o2.componentWillUnmount) try {
        o2.componentWillUnmount();
      } catch (e3) {
        r.__e(e3, t2);
      }
      o2.base = o2.__P = null;
    }
    if (o2 = e2.__k) for (i2 = 0; i2 < o2.length; i2++) o2[i2] && H(o2[i2], t2, n2 || "function" != typeof e2.type);
    n2 || g(e2.__e), e2.__c = e2.__ = e2.__e = void 0;
  }
  function U(e2, t2, n2) {
    return this.constructor(e2, n2);
  }
  function F(e2, t2, o2) {
    var i2, a2, c2, u2;
    t2 == document && (t2 = document.documentElement), r.__ && r.__(e2, t2), a2 = (i2 = "function" == typeof o2) ? null : o2 && o2.__k || t2.__k, c2 = [], u2 = [], R(t2, e2 = (!i2 && o2 || t2).__k = b(O, null, [e2]), a2 || v, v, t2.namespaceURI, !i2 && o2 ? [o2] : a2 ? null : t2.firstChild ? n.call(t2.childNodes) : null, c2, !i2 && o2 ? o2 : a2 ? a2.__e : t2.firstChild, i2, u2), L(c2, e2, u2);
  }
  function B(e2, t2) {
    F(e2, t2, B);
  }
  function V(e2, t2, r2) {
    var o2, i2, a2, c2, u2 = _({}, e2.props);
    for (a2 in e2.type && e2.type.defaultProps && (c2 = e2.type.defaultProps), t2) "key" == a2 ? o2 = t2[a2] : "ref" == a2 ? i2 = t2[a2] : u2[a2] = void 0 === t2[a2] && void 0 !== c2 ? c2[a2] : t2[a2];
    return arguments.length > 2 && (u2.children = arguments.length > 3 ? n.call(arguments, 2) : r2), S(e2.type, u2, o2 || e2.key, i2 || e2.ref, null);
  }
  n = h.slice, r = { __e: function(e2, t2, n2, r2) {
    for (var o2, i2, a2; t2 = t2.__; ) if ((o2 = t2.__c) && !o2.__) try {
      if ((i2 = o2.constructor) && null != i2.getDerivedStateFromError && (o2.setState(i2.getDerivedStateFromError(e2)), a2 = o2.__d), null != o2.componentDidCatch && (o2.componentDidCatch(e2, r2 || {}), a2 = o2.__d), a2) return o2.__E = o2;
    } catch (t3) {
      e2 = t3;
    }
    throw e2;
  } }, o = 0, w.prototype.setState = function(e2, t2) {
    var n2;
    n2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = _({}, this.state), "function" == typeof e2 && (e2 = e2(_({}, n2), this.props)), e2 && _(n2, e2), null != e2 && this.__v && (t2 && this._sb.push(t2), P(this));
  }, w.prototype.forceUpdate = function(e2) {
    this.__v && (this.__e = true, e2 && this.__h.push(e2), P(this));
  }, w.prototype.render = O, i = [], c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function(e2, t2) {
    return e2.__v.__b - t2.__v.__b;
  }, I.__r = 0, l = /(PointerCapture)$|Capture$/i, s = 0, f = T(false), p = T(true), m = 0;
  var K;
  var W;
  var z;
  var J;
  var Q = 0;
  var $ = [];
  var Z = r;
  var G = Z.__b;
  var Y = Z.__r;
  var X = Z.diffed;
  var ee = Z.__c;
  var te = Z.unmount;
  var ne = Z.__;
  function re(e2, t2) {
    Z.__h && Z.__h(W, e2, Q || t2), Q = 0;
    var n2 = W.__H || (W.__H = { __: [], __h: [] });
    return e2 >= n2.__.length && n2.__.push({}), n2.__[e2];
  }
  function oe(e2) {
    return Q = 1, ie(Se, e2);
  }
  function ie(e2, t2, n2) {
    var r2 = re(K++, 2);
    if (r2.t = e2, !r2.__c && (r2.__ = [n2 ? n2(t2) : Se(void 0, t2), function(e3) {
      var t3 = r2.__N ? r2.__N[0] : r2.__[0], n3 = r2.t(t3, e3);
      t3 !== n3 && (r2.__N = [n3, r2.__[1]], r2.__c.setState({}));
    }], r2.__c = W, !W.u)) {
      var o2 = function(e3, t3, n3) {
        if (!r2.__c.__H) return true;
        var o3 = r2.__c.__H.__.filter(function(e4) {
          return !!e4.__c;
        });
        if (o3.every(function(e4) {
          return !e4.__N;
        })) return !i2 || i2.call(this, e3, t3, n3);
        var a3 = r2.__c.props !== e3;
        return o3.forEach(function(e4) {
          if (e4.__N) {
            var t4 = e4.__[0];
            e4.__ = e4.__N, e4.__N = void 0, t4 !== e4.__[0] && (a3 = true);
          }
        }), i2 && i2.call(this, e3, t3, n3) || a3;
      };
      W.u = true;
      var i2 = W.shouldComponentUpdate, a2 = W.componentWillUpdate;
      W.componentWillUpdate = function(e3, t3, n3) {
        if (this.__e) {
          var r3 = i2;
          i2 = void 0, o2(e3, t3, n3), i2 = r3;
        }
        a2 && a2.call(this, e3, t3, n3);
      }, W.shouldComponentUpdate = o2;
    }
    return r2.__N || r2.__;
  }
  function ae(e2, t2) {
    var n2 = re(K++, 3);
    !Z.__s && be(n2.__H, t2) && (n2.__ = e2, n2.i = t2, W.__H.__h.push(n2));
  }
  function ce(e2, t2) {
    var n2 = re(K++, 4);
    !Z.__s && be(n2.__H, t2) && (n2.__ = e2, n2.i = t2, W.__h.push(n2));
  }
  function ue(e2) {
    return Q = 5, se(function() {
      return { current: e2 };
    }, []);
  }
  function le(e2, t2, n2) {
    Q = 6, ce(function() {
      return "function" == typeof e2 ? (e2(t2()), function() {
        return e2(null);
      }) : e2 ? (e2.current = t2(), function() {
        return e2.current = null;
      }) : void 0;
    }, null == n2 ? n2 : n2.concat(e2));
  }
  function se(e2, t2) {
    var n2 = re(K++, 7);
    return be(n2.__H, t2) && (n2.__ = e2(), n2.__H = t2, n2.__h = e2), n2.__;
  }
  function fe(e2, t2) {
    return Q = 8, se(function() {
      return e2;
    }, t2);
  }
  function pe(e2) {
    var t2 = W.context[e2.__c], n2 = re(K++, 9);
    return n2.c = e2, t2 ? (null == n2.__ && (n2.__ = true, t2.sub(W)), t2.props.value) : e2.__;
  }
  function me(e2, t2) {
    Z.useDebugValue && Z.useDebugValue(t2 ? t2(e2) : e2);
  }
  function ve() {
    var e2 = re(K++, 11);
    if (!e2.__) {
      for (var t2 = W.__v; null !== t2 && !t2.__m && null !== t2.__; ) t2 = t2.__;
      var n2 = t2.__m || (t2.__m = [0, 0]);
      e2.__ = "P" + n2[0] + "-" + n2[1]++;
    }
    return e2.__;
  }
  function he() {
    for (var e2; e2 = $.shift(); ) if (e2.__P && e2.__H) try {
      e2.__H.__h.forEach(_e), e2.__H.__h.forEach(ge), e2.__H.__h = [];
    } catch (t2) {
      e2.__H.__h = [], Z.__e(t2, e2.__v);
    }
  }
  Z.__b = function(e2) {
    W = null, G && G(e2);
  }, Z.__ = function(e2, t2) {
    e2 && t2.__k && t2.__k.__m && (e2.__m = t2.__k.__m), ne && ne(e2, t2);
  }, Z.__r = function(e2) {
    Y && Y(e2), K = 0;
    var t2 = (W = e2.__c).__H;
    t2 && (z === W ? (t2.__h = [], W.__h = [], t2.__.forEach(function(e3) {
      e3.__N && (e3.__ = e3.__N), e3.i = e3.__N = void 0;
    })) : (t2.__h.forEach(_e), t2.__h.forEach(ge), t2.__h = [], K = 0)), z = W;
  }, Z.diffed = function(e2) {
    X && X(e2);
    var t2 = e2.__c;
    t2 && t2.__H && (t2.__H.__h.length && (1 !== $.push(t2) && J === Z.requestAnimationFrame || ((J = Z.requestAnimationFrame) || ye)(he)), t2.__H.__.forEach(function(e3) {
      e3.i && (e3.__H = e3.i), e3.i = void 0;
    })), z = W = null;
  }, Z.__c = function(e2, t2) {
    t2.some(function(e3) {
      try {
        e3.__h.forEach(_e), e3.__h = e3.__h.filter(function(e4) {
          return !e4.__ || ge(e4);
        });
      } catch (n2) {
        t2.some(function(e4) {
          e4.__h && (e4.__h = []);
        }), t2 = [], Z.__e(n2, e3.__v);
      }
    }), ee && ee(e2, t2);
  }, Z.unmount = function(e2) {
    te && te(e2);
    var t2, n2 = e2.__c;
    n2 && n2.__H && (n2.__H.__.forEach(function(e3) {
      try {
        _e(e3);
      } catch (e4) {
        t2 = e4;
      }
    }), n2.__H = void 0, t2 && Z.__e(t2, n2.__v));
  };
  var de = "function" == typeof requestAnimationFrame;
  function ye(e2) {
    var t2, n2 = function() {
      clearTimeout(r2), de && cancelAnimationFrame(t2), setTimeout(e2);
    }, r2 = setTimeout(n2, 100);
    de && (t2 = requestAnimationFrame(n2));
  }
  function _e(e2) {
    var t2 = W, n2 = e2.__c;
    "function" == typeof n2 && (e2.__c = void 0, n2()), W = t2;
  }
  function ge(e2) {
    var t2 = W;
    e2.__c = e2.__(), W = t2;
  }
  function be(e2, t2) {
    return !e2 || e2.length !== t2.length || t2.some(function(t3, n2) {
      return t3 !== e2[n2];
    });
  }
  function Se(e2, t2) {
    return "function" == typeof t2 ? t2(e2) : t2;
  }
  function Oe(e2, t2) {
    for (var n2 in t2) e2[n2] = t2[n2];
    return e2;
  }
  function we(e2, t2) {
    for (var n2 in e2) if ("__source" !== n2 && !(n2 in t2)) return true;
    for (var r2 in t2) if ("__source" !== r2 && e2[r2] !== t2[r2]) return true;
    return false;
  }
  function Ee(e2, t2) {
    var n2 = t2(), r2 = oe({ t: { __: n2, u: t2 } }), o2 = r2[0].t, i2 = r2[1];
    return ce(function() {
      o2.__ = n2, o2.u = t2, je(o2) && i2({ t: o2 });
    }, [e2, n2, t2]), ae(function() {
      return je(o2) && i2({ t: o2 }), e2(function() {
        je(o2) && i2({ t: o2 });
      });
    }, [e2]), n2;
  }
  function je(e2) {
    var t2, n2, r2 = e2.u, o2 = e2.__;
    try {
      var i2 = r2();
      return !((t2 = o2) === (n2 = i2) && (0 !== t2 || 1 / t2 == 1 / n2) || t2 != t2 && n2 != n2);
    } catch (e3) {
      return true;
    }
  }
  function Pe(e2) {
    e2();
  }
  function Ie(e2) {
    return e2;
  }
  function ke() {
    return [false, Pe];
  }
  var De = ce;
  function Ce(e2, t2) {
    this.props = e2, this.context = t2;
  }
  (Ce.prototype = new w()).isPureReactComponent = true, Ce.prototype.shouldComponentUpdate = function(e2, t2) {
    return we(this.props, e2) || we(this.state, t2);
  };
  var xe = r.__b;
  r.__b = function(e2) {
    e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), xe && xe(e2);
  };
  var Ae = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
  var Ne = function(e2, t2) {
    return null == e2 ? null : C(C(e2).map(t2));
  };
  var Te = { map: Ne, forEach: Ne, count: function(e2) {
    return e2 ? C(e2).length : 0;
  }, only: function(e2) {
    var t2 = C(e2);
    if (1 !== t2.length) throw "Children.only";
    return t2[0];
  }, toArray: C };
  var Re = r.__e;
  r.__e = function(e2, t2, n2, r2) {
    if (e2.then) {
      for (var o2, i2 = t2; i2 = i2.__; ) if ((o2 = i2.__c) && o2.__c) return null == t2.__e && (t2.__e = n2.__e, t2.__k = n2.__k), o2.__c(e2, t2);
    }
    Re(e2, t2, n2, r2);
  };
  var Le = r.unmount;
  function qe(e2, t2, n2) {
    return e2 && (e2.__c && e2.__c.__H && (e2.__c.__H.__.forEach(function(e3) {
      "function" == typeof e3.__c && e3.__c();
    }), e2.__c.__H = null), null != (e2 = Oe({}, e2)).__c && (e2.__c.__P === n2 && (e2.__c.__P = t2), e2.__c = null), e2.__k = e2.__k && e2.__k.map(function(e3) {
      return qe(e3, t2, n2);
    })), e2;
  }
  function Me(e2, t2, n2) {
    return e2 && n2 && (e2.__v = null, e2.__k = e2.__k && e2.__k.map(function(e3) {
      return Me(e3, t2, n2);
    }), e2.__c && e2.__c.__P === t2 && (e2.__e && n2.appendChild(e2.__e), e2.__c.__e = true, e2.__c.__P = n2)), e2;
  }
  function He() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Ue(e2) {
    var t2 = e2.__.__c;
    return t2 && t2.__a && t2.__a(e2);
  }
  function Fe() {
    this.i = null, this.l = null;
  }
  r.unmount = function(e2) {
    var t2 = e2.__c;
    t2 && t2.__R && t2.__R(), t2 && 32 & e2.__u && (e2.type = null), Le && Le(e2);
  }, (He.prototype = new w()).__c = function(e2, t2) {
    var n2 = t2.__c, r2 = this;
    null == r2.o && (r2.o = []), r2.o.push(n2);
    var o2 = Ue(r2.__v), i2 = false, a2 = function() {
      i2 || (i2 = true, n2.__R = null, o2 ? o2(c2) : c2());
    };
    n2.__R = a2;
    var c2 = function() {
      if (!--r2.__u) {
        if (r2.state.__a) {
          var e3 = r2.state.__a;
          r2.__v.__k[0] = Me(e3, e3.__c.__P, e3.__c.__O);
        }
        var t3;
        for (r2.setState({ __a: r2.__b = null }); t3 = r2.o.pop(); ) t3.forceUpdate();
      }
    };
    r2.__u++ || 32 & t2.__u || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), e2.then(a2, a2);
  }, He.prototype.componentWillUnmount = function() {
    this.o = [];
  }, He.prototype.render = function(e2, t2) {
    if (this.__b) {
      if (this.__v.__k) {
        var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
        this.__v.__k[0] = qe(this.__b, n2, r2.__O = r2.__P);
      }
      this.__b = null;
    }
    var o2 = t2.__a && b(O, null, e2.fallback);
    return o2 && (o2.__u &= -33), [b(O, null, t2.__a ? null : e2.children), o2];
  };
  var Be = function(e2, t2, n2) {
    if (++n2[1] === n2[0] && e2.l.delete(t2), e2.props.revealOrder && ("t" !== e2.props.revealOrder[0] || !e2.l.size)) for (n2 = e2.i; n2; ) {
      for (; n2.length > 3; ) n2.pop()();
      if (n2[1] < n2[0]) break;
      e2.i = n2 = n2[2];
    }
  };
  function Ve(e2) {
    return this.getChildContext = function() {
      return e2.context;
    }, e2.children;
  }
  function Ke(e2) {
    var t2 = this, n2 = e2.h;
    t2.componentWillUnmount = function() {
      F(null, t2.v), t2.v = null, t2.h = null;
    }, t2.h && t2.h !== n2 && t2.componentWillUnmount(), t2.v || (t2.h = n2, t2.v = { nodeType: 1, parentNode: n2, childNodes: [], contains: function() {
      return true;
    }, appendChild: function(e3) {
      this.childNodes.push(e3), t2.h.appendChild(e3);
    }, insertBefore: function(e3, n3) {
      this.childNodes.push(e3), t2.h.insertBefore(e3, n3);
    }, removeChild: function(e3) {
      this.childNodes.splice(this.childNodes.indexOf(e3) >>> 1, 1), t2.h.removeChild(e3);
    } }), F(b(Ve, { context: t2.context }, e2.__v), t2.v);
  }
  function We(e2, t2) {
    var n2 = b(Ke, { __v: e2, h: t2 });
    return n2.containerInfo = t2, n2;
  }
  (Fe.prototype = new w()).__a = function(e2) {
    var t2 = this, n2 = Ue(t2.__v), r2 = t2.l.get(e2);
    return r2[0]++, function(o2) {
      var i2 = function() {
        t2.props.revealOrder ? (r2.push(o2), Be(t2, e2, r2)) : o2();
      };
      n2 ? n2(i2) : i2();
    };
  }, Fe.prototype.render = function(e2) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t2 = C(e2.children);
    e2.revealOrder && "b" === e2.revealOrder[0] && t2.reverse();
    for (var n2 = t2.length; n2--; ) this.l.set(t2[n2], this.i = [1, 0, this.i]);
    return e2.children;
  }, Fe.prototype.componentDidUpdate = Fe.prototype.componentDidMount = function() {
    var e2 = this;
    this.l.forEach(function(t2, n2) {
      Be(e2, n2, t2);
    });
  };
  var ze = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103;
  var Je = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/;
  var Qe = /^on(Ani|Tra|Tou|BeforeInp|Compo)/;
  var $e = /[A-Z0-9]/g;
  var Ze = "undefined" != typeof document;
  var Ge = function(e2) {
    return ("undefined" != typeof Symbol && "symbol" == t(Symbol()) ? /fil|che|rad/ : /fil|che|ra/).test(e2);
  };
  function Ye(e2, t2, n2) {
    return null == t2.__k && (t2.textContent = ""), F(e2, t2), "function" == typeof n2 && n2(), e2 ? e2.__c : null;
  }
  w.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
    Object.defineProperty(w.prototype, e2, { configurable: true, get: function() {
      return this["UNSAFE_" + e2];
    }, set: function(t2) {
      Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
    } });
  });
  var Xe = r.event;
  function et() {
  }
  function tt() {
    return this.cancelBubble;
  }
  function nt() {
    return this.defaultPrevented;
  }
  r.event = function(e2) {
    return Xe && (e2 = Xe(e2)), e2.persist = et, e2.isPropagationStopped = tt, e2.isDefaultPrevented = nt, e2.nativeEvent = e2;
  };
  var rt;
  var ot = { enumerable: false, configurable: true, get: function() {
    return this.class;
  } };
  var it = r.vnode;
  r.vnode = function(e2) {
    "string" == typeof e2.type && function(e3) {
      var t2 = e3.props, n2 = e3.type, r2 = {}, o2 = -1 === n2.indexOf("-");
      for (var i2 in t2) {
        var a2 = t2[i2];
        if (!("value" === i2 && "defaultValue" in t2 && null == a2 || Ze && "children" === i2 && "noscript" === n2 || "class" === i2 || "className" === i2)) {
          var c2 = i2.toLowerCase();
          "defaultValue" === i2 && "value" in t2 && null == t2.value ? i2 = "value" : "download" === i2 && true === a2 ? a2 = "" : "translate" === c2 && "no" === a2 ? a2 = false : "o" === c2[0] && "n" === c2[1] ? "ondoubleclick" === c2 ? i2 = "ondblclick" : "onchange" !== c2 || "input" !== n2 && "textarea" !== n2 || Ge(t2.type) ? "onfocus" === c2 ? i2 = "onfocusin" : "onblur" === c2 ? i2 = "onfocusout" : Qe.test(i2) && (i2 = c2) : c2 = i2 = "oninput" : o2 && Je.test(i2) ? i2 = i2.replace($e, "-$&").toLowerCase() : null === a2 && (a2 = void 0), "oninput" === c2 && r2[i2 = c2] && (i2 = "oninputCapture"), r2[i2] = a2;
        }
      }
      "select" == n2 && r2.multiple && Array.isArray(r2.value) && (r2.value = C(t2.children).forEach(function(e4) {
        e4.props.selected = -1 != r2.value.indexOf(e4.props.value);
      })), "select" == n2 && null != r2.defaultValue && (r2.value = C(t2.children).forEach(function(e4) {
        e4.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(e4.props.value) : r2.defaultValue == e4.props.value;
      })), t2.class && !t2.className ? (r2.class = t2.class, Object.defineProperty(r2, "className", ot)) : (t2.className && !t2.class || t2.class && t2.className) && (r2.class = r2.className = t2.className), e3.props = r2;
    }(e2), e2.$$typeof = ze, it && it(e2);
  };
  var at = r.__r;
  r.__r = function(e2) {
    at && at(e2), rt = e2.__c;
  };
  var ct = r.diffed;
  r.diffed = function(e2) {
    ct && ct(e2);
    var t2 = e2.props, n2 = e2.__e;
    null != n2 && "textarea" === e2.type && "value" in t2 && t2.value !== n2.value && (n2.value = null == t2.value ? "" : t2.value), rt = null;
  };
  var ut = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
    return rt.__n[e2.__c].props.value;
  }, useCallback: fe, useContext: pe, useDebugValue: me, useDeferredValue: Ie, useEffect: ae, useId: ve, useImperativeHandle: le, useInsertionEffect: De, useLayoutEffect: ce, useMemo: se, useReducer: ie, useRef: ue, useState: oe, useSyncExternalStore: Ee, useTransition: ke } } };
  function lt(e2) {
    return !!e2 && e2.$$typeof === ze;
  }
  var st = { useState: oe, useId: ve, useReducer: ie, useEffect: ae, useLayoutEffect: ce, useInsertionEffect: De, useTransition: ke, useDeferredValue: Ie, useSyncExternalStore: Ee, startTransition: Pe, useRef: ue, useImperativeHandle: le, useMemo: se, useCallback: fe, useContext: pe, useDebugValue: me, version: "18.3.1", Children: Te, render: Ye, hydrate: function(e2, t2, n2) {
    return B(e2, t2), "function" == typeof n2 && n2(), e2 ? e2.__c : null;
  }, unmountComponentAtNode: function(e2) {
    return !!e2.__k && (F(null, e2), true);
  }, createPortal: We, createElement: b, createContext: function(e2, t2) {
    var n2 = { __c: t2 = "__cC" + m++, __: e2, Consumer: function(e3, t3) {
      return e3.children(t3);
    }, Provider: function(e3) {
      var n3, r2;
      return this.getChildContext || (n3 = /* @__PURE__ */ new Set(), (r2 = {})[t2] = this, this.getChildContext = function() {
        return r2;
      }, this.componentWillUnmount = function() {
        n3 = null;
      }, this.shouldComponentUpdate = function(e4) {
        this.props.value !== e4.value && n3.forEach(function(e5) {
          e5.__e = true, P(e5);
        });
      }, this.sub = function(e4) {
        n3.add(e4);
        var t3 = e4.componentWillUnmount;
        e4.componentWillUnmount = function() {
          n3 && n3.delete(e4), t3 && t3.call(e4);
        };
      }), e3.children;
    } };
    return n2.Provider.__ = n2.Consumer.contextType = n2;
  }, createFactory: function(e2) {
    return b.bind(null, e2);
  }, cloneElement: function(e2) {
    return lt(e2) ? V.apply(null, arguments) : e2;
  }, createRef: function() {
    return { current: null };
  }, Fragment: O, isValidElement: lt, isElement: lt, isFragment: function(e2) {
    return lt(e2) && e2.type === O;
  }, isMemo: function(e2) {
    return !!e2 && !!e2.displayName && ("string" == typeof e2.displayName || e2.displayName instanceof String) && e2.displayName.startsWith("Memo(");
  }, findDOMNode: function(e2) {
    return e2 && (e2.base || 1 === e2.nodeType && e2) || null;
  }, Component: w, PureComponent: Ce, memo: function(e2, t2) {
    function n2(e3) {
      var n3 = this.props.ref, r3 = n3 == e3.ref;
      return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e3) || !r3 : we(this.props, e3);
    }
    function r2(t3) {
      return this.shouldComponentUpdate = n2, b(e2, t3);
    }
    return r2.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
  }, forwardRef: function(e2) {
    function t2(t3) {
      var n2 = Oe({}, t3);
      return delete n2.ref, e2(n2, t3.ref || null);
    }
    return t2.$$typeof = Ae, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t2;
  }, flushSync: function(e2, t2) {
    return e2(t2);
  }, unstable_batchedUpdates: function(e2, t2) {
    return e2(t2);
  }, StrictMode: O, Suspense: He, SuspenseList: Fe, lazy: function(e2) {
    var t2, n2, r2;
    function o2(o3) {
      if (t2 || (t2 = e2()).then(function(e3) {
        n2 = e3.default || e3;
      }, function(e3) {
        r2 = e3;
      }), r2) throw r2;
      if (!n2) throw t2;
      return b(n2, o3);
    }
    return o2.displayName = "Lazy", o2.__f = true, o2;
  }, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: ut };
  function ft(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function pt(e2, t2, n2, r2, o2, i2, a2) {
    try {
      var c2 = e2[i2](a2), u2 = c2.value;
    } catch (e3) {
      return void n2(e3);
    }
    c2.done ? t2(u2) : Promise.resolve(u2).then(r2, o2);
  }
  function mt(e2) {
    return function() {
      var t2 = this, n2 = arguments;
      return new Promise(function(r2, o2) {
        var i2 = e2.apply(t2, n2);
        function a2(e3) {
          pt(i2, r2, o2, a2, c2, "next", e3);
        }
        function c2(e3) {
          pt(i2, r2, o2, a2, c2, "throw", e3);
        }
        a2(void 0);
      });
    };
  }
  function vt(e2, n2, r2) {
    return n2 = gt(n2), function(e3, n3) {
      if (n3 && ("object" == t(n3) || "function" == typeof n3)) return n3;
      if (void 0 !== n3) throw new TypeError("Derived constructors may only return object or undefined");
      return function(e4) {
        if (void 0 === e4) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e4;
      }(e3);
    }(e2, St() ? Reflect.construct(n2, r2 || [], gt(e2).constructor) : n2.apply(e2, r2));
  }
  function ht(e2, t2) {
    if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
  }
  function dt(e2, t2, n2) {
    return Object.defineProperty(e2, "prototype", { writable: false }), e2;
  }
  function yt(e2, n2, r2) {
    return (n2 = function(e3) {
      var n3 = function(e4) {
        if ("object" != t(e4) || !e4) return e4;
        var n4 = e4[Symbol.toPrimitive];
        if (void 0 !== n4) {
          var r3 = n4.call(e4, "string");
          if ("object" != t(r3)) return r3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" == t(n3) ? n3 : n3 + "";
    }(n2)) in e2 ? Object.defineProperty(e2, n2, { value: r2, enumerable: true, configurable: true, writable: true }) : e2[n2] = r2, e2;
  }
  function _t() {
    return _t = Object.assign ? Object.assign.bind() : function(e2) {
      for (var t2 = 1; t2 < arguments.length; t2++) {
        var n2 = arguments[t2];
        for (var r2 in n2) ({}).hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
      }
      return e2;
    }, _t.apply(null, arguments);
  }
  function gt(e2) {
    return gt = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
      return e3.__proto__ || Object.getPrototypeOf(e3);
    }, gt(e2);
  }
  function bt(e2, t2) {
    if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
    e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), Object.defineProperty(e2, "prototype", { writable: false }), t2 && Pt(e2, t2);
  }
  function St() {
    try {
      var e2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
      }));
    } catch (e3) {
    }
    return (St = function() {
      return !!e2;
    })();
  }
  function Ot(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function wt(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Ot(Object(n2), true).forEach(function(t3) {
        yt(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ot(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Et(e2, t2) {
    if (null == e2) return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n3 = {};
      for (var r3 in e3) if ({}.hasOwnProperty.call(e3, r3)) {
        if (t3.includes(r3)) continue;
        n3[r3] = e3[r3];
      }
      return n3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], t2.includes(n2) || {}.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function jt() {
    jt = function() {
      return n2;
    };
    var e2, n2 = {}, r2 = Object.prototype, o2 = r2.hasOwnProperty, i2 = Object.defineProperty || function(e3, t2, n3) {
      e3[t2] = n3.value;
    }, a2 = "function" == typeof Symbol ? Symbol : {}, c2 = a2.iterator || "@@iterator", u2 = a2.asyncIterator || "@@asyncIterator", l2 = a2.toStringTag || "@@toStringTag";
    function s2(e3, t2, n3) {
      return Object.defineProperty(e3, t2, { value: n3, enumerable: true, configurable: true, writable: true }), e3[t2];
    }
    try {
      s2({}, "");
    } catch (e3) {
      s2 = function(e4, t2, n3) {
        return e4[t2] = n3;
      };
    }
    function f2(e3, t2, n3, r3) {
      var o3 = t2 && t2.prototype instanceof _2 ? t2 : _2, a3 = Object.create(o3.prototype), c3 = new x2(r3 || []);
      return i2(a3, "_invoke", { value: I2(e3, n3, c3) }), a3;
    }
    function p2(e3, t2, n3) {
      try {
        return { type: "normal", arg: e3.call(t2, n3) };
      } catch (e4) {
        return { type: "throw", arg: e4 };
      }
    }
    n2.wrap = f2;
    var m2 = "suspendedStart", v2 = "suspendedYield", h2 = "executing", d2 = "completed", y2 = {};
    function _2() {
    }
    function g2() {
    }
    function b2() {
    }
    var S2 = {};
    s2(S2, c2, function() {
      return this;
    });
    var O2 = Object.getPrototypeOf, w2 = O2 && O2(O2(A2([])));
    w2 && w2 !== r2 && o2.call(w2, c2) && (S2 = w2);
    var E2 = b2.prototype = _2.prototype = Object.create(S2);
    function j2(e3) {
      ["next", "throw", "return"].forEach(function(t2) {
        s2(e3, t2, function(e4) {
          return this._invoke(t2, e4);
        });
      });
    }
    function P2(e3, n3) {
      function r3(i3, a4, c3, u3) {
        var l3 = p2(e3[i3], e3, a4);
        if ("throw" !== l3.type) {
          var s3 = l3.arg, f3 = s3.value;
          return f3 && "object" == t(f3) && o2.call(f3, "__await") ? n3.resolve(f3.__await).then(function(e4) {
            r3("next", e4, c3, u3);
          }, function(e4) {
            r3("throw", e4, c3, u3);
          }) : n3.resolve(f3).then(function(e4) {
            s3.value = e4, c3(s3);
          }, function(e4) {
            return r3("throw", e4, c3, u3);
          });
        }
        u3(l3.arg);
      }
      var a3;
      i2(this, "_invoke", { value: function(e4, t2) {
        function o3() {
          return new n3(function(n4, o4) {
            r3(e4, t2, n4, o4);
          });
        }
        return a3 = a3 ? a3.then(o3, o3) : o3();
      } });
    }
    function I2(t2, n3, r3) {
      var o3 = m2;
      return function(i3, a3) {
        if (o3 === h2) throw Error("Generator is already running");
        if (o3 === d2) {
          if ("throw" === i3) throw a3;
          return { value: e2, done: true };
        }
        for (r3.method = i3, r3.arg = a3; ; ) {
          var c3 = r3.delegate;
          if (c3) {
            var u3 = k2(c3, r3);
            if (u3) {
              if (u3 === y2) continue;
              return u3;
            }
          }
          if ("next" === r3.method) r3.sent = r3._sent = r3.arg;
          else if ("throw" === r3.method) {
            if (o3 === m2) throw o3 = d2, r3.arg;
            r3.dispatchException(r3.arg);
          } else "return" === r3.method && r3.abrupt("return", r3.arg);
          o3 = h2;
          var l3 = p2(t2, n3, r3);
          if ("normal" === l3.type) {
            if (o3 = r3.done ? d2 : v2, l3.arg === y2) continue;
            return { value: l3.arg, done: r3.done };
          }
          "throw" === l3.type && (o3 = d2, r3.method = "throw", r3.arg = l3.arg);
        }
      };
    }
    function k2(t2, n3) {
      var r3 = n3.method, o3 = t2.iterator[r3];
      if (o3 === e2) return n3.delegate = null, "throw" === r3 && t2.iterator.return && (n3.method = "return", n3.arg = e2, k2(t2, n3), "throw" === n3.method) || "return" !== r3 && (n3.method = "throw", n3.arg = new TypeError("The iterator does not provide a '" + r3 + "' method")), y2;
      var i3 = p2(o3, t2.iterator, n3.arg);
      if ("throw" === i3.type) return n3.method = "throw", n3.arg = i3.arg, n3.delegate = null, y2;
      var a3 = i3.arg;
      return a3 ? a3.done ? (n3[t2.resultName] = a3.value, n3.next = t2.nextLoc, "return" !== n3.method && (n3.method = "next", n3.arg = e2), n3.delegate = null, y2) : a3 : (n3.method = "throw", n3.arg = new TypeError("iterator result is not an object"), n3.delegate = null, y2);
    }
    function D2(e3) {
      var t2 = { tryLoc: e3[0] };
      1 in e3 && (t2.catchLoc = e3[1]), 2 in e3 && (t2.finallyLoc = e3[2], t2.afterLoc = e3[3]), this.tryEntries.push(t2);
    }
    function C2(e3) {
      var t2 = e3.completion || {};
      t2.type = "normal", delete t2.arg, e3.completion = t2;
    }
    function x2(e3) {
      this.tryEntries = [{ tryLoc: "root" }], e3.forEach(D2, this), this.reset(true);
    }
    function A2(n3) {
      if (n3 || "" === n3) {
        var r3 = n3[c2];
        if (r3) return r3.call(n3);
        if ("function" == typeof n3.next) return n3;
        if (!isNaN(n3.length)) {
          var i3 = -1, a3 = function t2() {
            for (; ++i3 < n3.length; ) if (o2.call(n3, i3)) return t2.value = n3[i3], t2.done = false, t2;
            return t2.value = e2, t2.done = true, t2;
          };
          return a3.next = a3;
        }
      }
      throw new TypeError(t(n3) + " is not iterable");
    }
    return g2.prototype = b2, i2(E2, "constructor", { value: b2, configurable: true }), i2(b2, "constructor", { value: g2, configurable: true }), g2.displayName = s2(b2, l2, "GeneratorFunction"), n2.isGeneratorFunction = function(e3) {
      var t2 = "function" == typeof e3 && e3.constructor;
      return !!t2 && (t2 === g2 || "GeneratorFunction" === (t2.displayName || t2.name));
    }, n2.mark = function(e3) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(e3, b2) : (e3.__proto__ = b2, s2(e3, l2, "GeneratorFunction")), e3.prototype = Object.create(E2), e3;
    }, n2.awrap = function(e3) {
      return { __await: e3 };
    }, j2(P2.prototype), s2(P2.prototype, u2, function() {
      return this;
    }), n2.AsyncIterator = P2, n2.async = function(e3, t2, r3, o3, i3) {
      void 0 === i3 && (i3 = Promise);
      var a3 = new P2(f2(e3, t2, r3, o3), i3);
      return n2.isGeneratorFunction(t2) ? a3 : a3.next().then(function(e4) {
        return e4.done ? e4.value : a3.next();
      });
    }, j2(E2), s2(E2, l2, "Generator"), s2(E2, c2, function() {
      return this;
    }), s2(E2, "toString", function() {
      return "[object Generator]";
    }), n2.keys = function(e3) {
      var t2 = Object(e3), n3 = [];
      for (var r3 in t2) n3.push(r3);
      return n3.reverse(), function e4() {
        for (; n3.length; ) {
          var r4 = n3.pop();
          if (r4 in t2) return e4.value = r4, e4.done = false, e4;
        }
        return e4.done = true, e4;
      };
    }, n2.values = A2, x2.prototype = { constructor: x2, reset: function(t2) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = e2, this.done = false, this.delegate = null, this.method = "next", this.arg = e2, this.tryEntries.forEach(C2), !t2) for (var n3 in this) "t" === n3.charAt(0) && o2.call(this, n3) && !isNaN(+n3.slice(1)) && (this[n3] = e2);
    }, stop: function() {
      this.done = true;
      var e3 = this.tryEntries[0].completion;
      if ("throw" === e3.type) throw e3.arg;
      return this.rval;
    }, dispatchException: function(t2) {
      if (this.done) throw t2;
      var n3 = this;
      function r3(r4, o3) {
        return c3.type = "throw", c3.arg = t2, n3.next = r4, o3 && (n3.method = "next", n3.arg = e2), !!o3;
      }
      for (var i3 = this.tryEntries.length - 1; i3 >= 0; --i3) {
        var a3 = this.tryEntries[i3], c3 = a3.completion;
        if ("root" === a3.tryLoc) return r3("end");
        if (a3.tryLoc <= this.prev) {
          var u3 = o2.call(a3, "catchLoc"), l3 = o2.call(a3, "finallyLoc");
          if (u3 && l3) {
            if (this.prev < a3.catchLoc) return r3(a3.catchLoc, true);
            if (this.prev < a3.finallyLoc) return r3(a3.finallyLoc);
          } else if (u3) {
            if (this.prev < a3.catchLoc) return r3(a3.catchLoc, true);
          } else {
            if (!l3) throw Error("try statement without catch or finally");
            if (this.prev < a3.finallyLoc) return r3(a3.finallyLoc);
          }
        }
      }
    }, abrupt: function(e3, t2) {
      for (var n3 = this.tryEntries.length - 1; n3 >= 0; --n3) {
        var r3 = this.tryEntries[n3];
        if (r3.tryLoc <= this.prev && o2.call(r3, "finallyLoc") && this.prev < r3.finallyLoc) {
          var i3 = r3;
          break;
        }
      }
      i3 && ("break" === e3 || "continue" === e3) && i3.tryLoc <= t2 && t2 <= i3.finallyLoc && (i3 = null);
      var a3 = i3 ? i3.completion : {};
      return a3.type = e3, a3.arg = t2, i3 ? (this.method = "next", this.next = i3.finallyLoc, y2) : this.complete(a3);
    }, complete: function(e3, t2) {
      if ("throw" === e3.type) throw e3.arg;
      return "break" === e3.type || "continue" === e3.type ? this.next = e3.arg : "return" === e3.type ? (this.rval = this.arg = e3.arg, this.method = "return", this.next = "end") : "normal" === e3.type && t2 && (this.next = t2), y2;
    }, finish: function(e3) {
      for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
        var n3 = this.tryEntries[t2];
        if (n3.finallyLoc === e3) return this.complete(n3.completion, n3.afterLoc), C2(n3), y2;
      }
    }, catch: function(e3) {
      for (var t2 = this.tryEntries.length - 1; t2 >= 0; --t2) {
        var n3 = this.tryEntries[t2];
        if (n3.tryLoc === e3) {
          var r3 = n3.completion;
          if ("throw" === r3.type) {
            var o3 = r3.arg;
            C2(n3);
          }
          return o3;
        }
      }
      throw Error("illegal catch attempt");
    }, delegateYield: function(t2, n3, r3) {
      return this.delegate = { iterator: A2(t2), resultName: n3, nextLoc: r3 }, "next" === this.method && (this.arg = e2), y2;
    } }, n2;
  }
  function Pt(e2, t2) {
    return Pt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
      return e3.__proto__ = t3, e3;
    }, Pt(e2, t2);
  }
  function It(e2, t2) {
    return function(e3) {
      if (Array.isArray(e3)) return e3;
    }(e2) || function(e3, t3) {
      var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
      if (null != n2) {
        var r2, o2, i2, a2, c2 = [], u2 = true, l2 = false;
        try {
          if (i2 = (n2 = n2.call(e3)).next, 0 === t3) {
            if (Object(n2) !== n2) return;
            u2 = false;
          } else for (; !(u2 = (r2 = i2.call(n2)).done) && (c2.push(r2.value), c2.length !== t3); u2 = true) ;
        } catch (e4) {
          l2 = true, o2 = e4;
        } finally {
          try {
            if (!u2 && null != n2.return && (a2 = n2.return(), Object(a2) !== a2)) return;
          } finally {
            if (l2) throw o2;
          }
        }
        return c2;
      }
    }(e2, t2) || Dt(e2, t2) || function() {
      throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function kt(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return ft(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || Dt(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Dt(e2, t2) {
    if (e2) {
      if ("string" == typeof e2) return ft(e2, t2);
      var n2 = {}.toString.call(e2).slice(8, -1);
      return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? ft(e2, t2) : void 0;
    }
  }
  function Ct(e2) {
    var t2 = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
    return Ct = function(e3) {
      if (null === e3 || !function(e4) {
        try {
          return -1 !== Function.toString.call(e4).indexOf("[native code]");
        } catch (t3) {
          return "function" == typeof e4;
        }
      }(e3)) return e3;
      if ("function" != typeof e3) throw new TypeError("Super expression must either be null or a function");
      if (void 0 !== t2) {
        if (t2.has(e3)) return t2.get(e3);
        t2.set(e3, n2);
      }
      function n2() {
        return function(e4, t3, n3) {
          if (St()) return Reflect.construct.apply(null, arguments);
          var r2 = [null];
          r2.push.apply(r2, t3);
          var o2 = new (e4.bind.apply(e4, r2))();
          return n3 && Pt(o2, n3.prototype), o2;
        }(e3, arguments, gt(this).constructor);
      }
      return n2.prototype = Object.create(e3.prototype, { constructor: { value: n2, enumerable: false, writable: true, configurable: true } }), Pt(n2, e3);
    }, Ct(e2);
  }
  function xt() {
    return st.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, st.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
  }
  function At() {
    return st.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20", "aria-hidden": "true" }, st.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  var Nt = ["translations"];
  var Tt = "Ctrl";
  var Rt = st.forwardRef(function(e2, t2) {
    var n2 = e2.translations, r2 = void 0 === n2 ? {} : n2, o2 = Et(e2, Nt), i2 = r2.buttonText, a2 = void 0 === i2 ? "Search" : i2, c2 = r2.buttonAriaLabel, u2 = void 0 === c2 ? "Search" : c2, l2 = It(oe(null), 2), s2 = l2[0], f2 = l2[1];
    ae(function() {
      "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f2("\u2318") : f2(Tt));
    }, []);
    var p2 = It(s2 === Tt ? [Tt, "Ctrl", st.createElement(xt, null)] : ["Meta", "Command", s2], 3), m2 = p2[0], v2 = p2[1], h2 = p2[2];
    return st.createElement("button", _t({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": "".concat(u2, " (").concat(v2, "+K)") }, o2, { ref: t2 }), st.createElement("span", { className: "DocSearch-Button-Container" }, st.createElement(At, null), st.createElement("span", { className: "DocSearch-Button-Placeholder" }, a2)), st.createElement("span", { className: "DocSearch-Button-Keys" }, null !== s2 && st.createElement(st.Fragment, null, st.createElement(Lt, { reactsToKey: m2 }, h2), st.createElement(Lt, { reactsToKey: "k" }, "K"))));
  });
  function Lt(e2) {
    var t2 = e2.reactsToKey, n2 = e2.children, r2 = It(oe(false), 2), o2 = r2[0], i2 = r2[1];
    return ae(function() {
      if (t2) return window.addEventListener("keydown", e3), window.addEventListener("keyup", n3), function() {
        window.removeEventListener("keydown", e3), window.removeEventListener("keyup", n3);
      };
      function e3(e4) {
        e4.key === t2 && i2(true);
      }
      function n3(e4) {
        e4.key !== t2 && "Meta" !== e4.key || i2(false);
      }
    }, [t2]), st.createElement("kbd", { className: o2 ? "DocSearch-Button-Key DocSearch-Button-Key--pressed" : "DocSearch-Button-Key" }, n2);
  }
  function qt(e2, t2) {
    var n2 = void 0;
    return function() {
      for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++) o2[i2] = arguments[i2];
      n2 && clearTimeout(n2), n2 = setTimeout(function() {
        return e2.apply(void 0, o2);
      }, t2);
    };
  }
  function Mt(e2) {
    return e2.reduce(function(e3, t2) {
      return e3.concat(t2);
    }, []);
  }
  var Ht = 0;
  function Ut(e2) {
    return 0 === e2.collections.length ? 0 : e2.collections.reduce(function(e3, t2) {
      return e3 + t2.items.length;
    }, 0);
  }
  function Ft(e2) {
    return e2 !== Object(e2);
  }
  function Bt(e2, t2) {
    if (e2 === t2) return true;
    if (Ft(e2) || Ft(t2) || "function" == typeof e2 || "function" == typeof t2) return e2 === t2;
    if (Object.keys(e2).length !== Object.keys(t2).length) return false;
    for (var n2 = 0, r2 = Object.keys(e2); n2 < r2.length; n2++) {
      var o2 = r2[n2];
      if (!(o2 in t2)) return false;
      if (!Bt(e2[o2], t2[o2])) return false;
    }
    return true;
  }
  var Vt = function() {
  };
  var Kt = [{ segment: "autocomplete-core", version: "1.17.9" }];
  function Wt(e2) {
    var t2 = e2.item, n2 = e2.items, r2 = void 0 === n2 ? [] : n2;
    return { index: t2.__autocomplete_indexName, items: [t2], positions: [1 + r2.findIndex(function(e3) {
      return e3.objectID === t2.objectID;
    })], queryID: t2.__autocomplete_queryID, algoliaSource: ["autocomplete"] };
  }
  function zt(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  var Jt = ["items"];
  var Qt = ["items"];
  function $t(e2) {
    return $t = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, $t(e2);
  }
  function Zt(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return Gt(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return Gt(e3, t2);
        var n2 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Gt(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Gt(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function Yt(e2, t2) {
    if (null == e2) return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function Xt(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function en(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Xt(Object(n2), true).forEach(function(t3) {
        tn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Xt(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function tn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== $t(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== $t(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === $t(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function nn(e2) {
    return e2.map(function(e3) {
      var t2 = e3.items, n2 = Yt(e3, Jt);
      return en(en({}, n2), {}, { objectIDs: (null == t2 ? void 0 : t2.map(function(e4) {
        return e4.objectID;
      })) || n2.objectIDs });
    });
  }
  function rn(e2) {
    var t2 = e2.items.reduce(function(e3, t3) {
      var n2;
      return e3[t3.__autocomplete_indexName] = (null !== (n2 = e3[t3.__autocomplete_indexName]) && void 0 !== n2 ? n2 : []).concat(t3), e3;
    }, {});
    return Object.keys(t2).map(function(e3) {
      return { index: e3, items: t2[e3], algoliaSource: ["autocomplete"] };
    });
  }
  function on(e2) {
    return e2.objectID && e2.__autocomplete_indexName && e2.__autocomplete_queryID;
  }
  function an(e2) {
    return an = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, an(e2);
  }
  function cn(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return un(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return un(e3, t2);
        var n2 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? un(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function un(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function ln(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function sn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? ln(Object(n2), true).forEach(function(t3) {
        fn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : ln(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function fn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== an(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== an(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === an(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var pn = "2.15.0";
  var mn = "https://cdn.jsdelivr.net/npm/search-insights@".concat(pn, "/dist/search-insights.min.js");
  var vn = qt(function(e2) {
    var t2 = e2.onItemsChange, n2 = e2.items, r2 = e2.insights, o2 = e2.state;
    t2({ insights: r2, insightsEvents: rn({ items: n2 }).map(function(e3) {
      return sn({ eventName: "Items Viewed" }, e3);
    }), state: o2 });
  }, 400);
  function hn(e2) {
    var t2 = function(e3) {
      return sn({ onItemsChange: function(e4) {
        var t3 = e4.insights, n3 = e4.insightsEvents, r3 = e4.state;
        t3.viewedObjectIDs.apply(t3, cn(n3.map(function(e5) {
          return sn(sn({}, e5), {}, { algoliaSource: dn(e5.algoliaSource, r3.context) });
        })));
      }, onSelect: function(e4) {
        var t3 = e4.insights, n3 = e4.insightsEvents, r3 = e4.state;
        t3.clickedObjectIDsAfterSearch.apply(t3, cn(n3.map(function(e5) {
          return sn(sn({}, e5), {}, { algoliaSource: dn(e5.algoliaSource, r3.context) });
        })));
      }, onActive: Vt, __autocomplete_clickAnalytics: true }, e3);
    }(e2), n2 = t2.insightsClient, r2 = t2.insightsInitParams, o2 = t2.onItemsChange, i2 = t2.onSelect, a2 = t2.onActive, c2 = t2.__autocomplete_clickAnalytics, u2 = n2;
    if (n2 || "undefined" != typeof window && function() {
      var e3 = { window }.window, t3 = e3.AlgoliaAnalyticsObject || "aa";
      "string" == typeof t3 && (u2 = e3[t3]), u2 || (e3.AlgoliaAnalyticsObject = t3, e3[t3] || (e3[t3] = function() {
        e3[t3].queue || (e3[t3].queue = []);
        for (var n3 = arguments.length, r3 = new Array(n3), o3 = 0; o3 < n3; o3++) r3[o3] = arguments[o3];
        e3[t3].queue.push(r3);
      }), e3[t3].version = pn, u2 = e3[t3], function(e4) {
        var t4 = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
        try {
          var n3 = e4.document.createElement("script");
          n3.async = true, n3.src = mn, n3.onerror = function() {
            console.error(t4);
          }, document.body.appendChild(n3);
        } catch (e5) {
          console.error(t4);
        }
      }(e3));
    }(), !u2) return {};
    r2 && u2("init", sn({ partial: true }, r2));
    var l2 = function(e3) {
      var t3, n3, r3, o3 = (t3 = function(e4) {
        return function(e5) {
          if (Array.isArray(e5)) return e5;
        }(e4) || function(e5) {
          var t4 = null == e5 ? null : "undefined" != typeof Symbol && e5[Symbol.iterator] || e5["@@iterator"];
          if (null != t4) {
            var n4, r4, o4, i4, a3 = [], c3 = true, u3 = false;
            try {
              for (o4 = (t4 = t4.call(e5)).next; !(c3 = (n4 = o4.call(t4)).done) && (a3.push(n4.value), 2 !== a3.length); c3 = true) ;
            } catch (e6) {
              u3 = true, r4 = e6;
            } finally {
              try {
                if (!c3 && null != t4.return && (i4 = t4.return(), Object(i4) !== i4)) return;
              } finally {
                if (u3) throw r4;
              }
            }
            return a3;
          }
        }(e4) || function(e5) {
          if (e5) {
            if ("string" == typeof e5) return zt(e5, 2);
            var t4 = Object.prototype.toString.call(e5).slice(8, -1);
            return "Object" === t4 && e5.constructor && (t4 = e5.constructor.name), "Map" === t4 || "Set" === t4 ? Array.from(e5) : "Arguments" === t4 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t4) ? zt(e5, 2) : void 0;
          }
        }(e4) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }((e3.version || "").split(".").map(Number)), n3 = t3[0], r3 = t3[1], n3 >= 3 || 2 === n3 && r3 >= 4 || 1 === n3 && r3 >= 10);
      function i3(t4, n4, r4) {
        if (o3 && void 0 !== r4) {
          var i4 = r4[0].__autocomplete_algoliaCredentials, a3 = { "X-Algolia-Application-Id": i4.appId, "X-Algolia-API-Key": i4.apiKey };
          e3.apply(void 0, [t4].concat(Zt(n4), [{ headers: a3 }]));
        } else e3.apply(void 0, [t4].concat(Zt(n4)));
      }
      return { init: function(t4, n4) {
        e3("init", { appId: t4, apiKey: n4 });
      }, setAuthenticatedUserToken: function(t4) {
        e3("setAuthenticatedUserToken", t4);
      }, setUserToken: function(t4) {
        e3("setUserToken", t4);
      }, clickedObjectIDsAfterSearch: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("clickedObjectIDsAfterSearch", nn(t4), t4[0].items);
      }, clickedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("clickedObjectIDs", nn(t4), t4[0].items);
      }, clickedFilters: function() {
        for (var t4 = arguments.length, n4 = new Array(t4), r4 = 0; r4 < t4; r4++) n4[r4] = arguments[r4];
        n4.length > 0 && e3.apply(void 0, ["clickedFilters"].concat(n4));
      }, convertedObjectIDsAfterSearch: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("convertedObjectIDsAfterSearch", nn(t4), t4[0].items);
      }, convertedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && i3("convertedObjectIDs", nn(t4), t4[0].items);
      }, convertedFilters: function() {
        for (var t4 = arguments.length, n4 = new Array(t4), r4 = 0; r4 < t4; r4++) n4[r4] = arguments[r4];
        n4.length > 0 && e3.apply(void 0, ["convertedFilters"].concat(n4));
      }, viewedObjectIDs: function() {
        for (var e4 = arguments.length, t4 = new Array(e4), n4 = 0; n4 < e4; n4++) t4[n4] = arguments[n4];
        t4.length > 0 && t4.reduce(function(e5, t5) {
          var n5 = t5.items, r4 = Yt(t5, Qt);
          return [].concat(Zt(e5), Zt(function(e6) {
            for (var t6 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n6 = [], r5 = 0; r5 < e6.objectIDs.length; r5 += t6) n6.push(en(en({}, e6), {}, { objectIDs: e6.objectIDs.slice(r5, r5 + t6) }));
            return n6;
          }(en(en({}, r4), {}, { objectIDs: (null == n5 ? void 0 : n5.map(function(e6) {
            return e6.objectID;
          })) || r4.objectIDs })).map(function(e6) {
            return { items: n5, payload: e6 };
          })));
        }, []).forEach(function(e5) {
          var t5 = e5.items;
          return i3("viewedObjectIDs", [e5.payload], t5);
        });
      }, viewedFilters: function() {
        for (var t4 = arguments.length, n4 = new Array(t4), r4 = 0; r4 < t4; r4++) n4[r4] = arguments[r4];
        n4.length > 0 && e3.apply(void 0, ["viewedFilters"].concat(n4));
      } };
    }(u2), s2 = { current: [] }, f2 = qt(function(e3) {
      var t3 = e3.state;
      if (t3.isOpen) {
        var n3 = t3.collections.reduce(function(e4, t4) {
          return [].concat(cn(e4), cn(t4.items));
        }, []).filter(on);
        Bt(s2.current.map(function(e4) {
          return e4.objectID;
        }), n3.map(function(e4) {
          return e4.objectID;
        })) || (s2.current = n3, n3.length > 0 && vn({ onItemsChange: o2, items: n3, insights: l2, state: t3 }));
      }
    }, 0);
    return { name: "aa.algoliaInsightsPlugin", subscribe: function(e3) {
      var t3 = e3.setContext, n3 = e3.onSelect, r3 = e3.onActive;
      function o3(e4) {
        t3({ algoliaInsightsPlugin: { __algoliaSearchParameters: sn(sn({}, c2 ? { clickAnalytics: true } : {}), e4 ? { userToken: yn(e4) } : {}), insights: l2 } });
      }
      u2("addAlgoliaAgent", "insights-plugin"), o3(), u2("onUserTokenChange", function(e4) {
        o3(e4);
      }), u2("getUserToken", null, function(e4, t4) {
        o3(t4);
      }), n3(function(e4) {
        var t4 = e4.item, n4 = e4.state, r4 = e4.event, o4 = e4.source;
        on(t4) && i2({ state: n4, event: r4, insights: l2, item: t4, insightsEvents: [sn({ eventName: "Item Selected" }, Wt({ item: t4, items: o4.getItems().filter(on) }))] });
      }), r3(function(e4) {
        var t4 = e4.item, n4 = e4.source, r4 = e4.state, o4 = e4.event;
        on(t4) && a2({ state: r4, event: o4, insights: l2, item: t4, insightsEvents: [sn({ eventName: "Item Active" }, Wt({ item: t4, items: n4.getItems().filter(on) }))] });
      });
    }, onStateChange: function(e3) {
      var t3 = e3.state;
      f2({ state: t3 });
    }, __autocomplete_pluginOptions: e2 };
  }
  function dn() {
    var e2, t2 = arguments.length > 1 ? arguments[1] : void 0;
    return [].concat(cn(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []), ["autocomplete-internal"], cn(null !== (e2 = t2.algoliaInsightsPlugin) && void 0 !== e2 && e2.__automaticInsights ? ["autocomplete-automatic"] : []));
  }
  function yn(e2) {
    return "number" == typeof e2 ? e2.toString() : e2;
  }
  function _n(e2, t2) {
    var n2 = t2;
    return { then: function(t3, r2) {
      return _n(e2.then(bn(t3, n2, e2), bn(r2, n2, e2)), n2);
    }, catch: function(t3) {
      return _n(e2.catch(bn(t3, n2, e2)), n2);
    }, finally: function(t3) {
      return t3 && n2.onCancelList.push(t3), _n(e2.finally(bn(t3 && function() {
        return n2.onCancelList = [], t3();
      }, n2, e2)), n2);
    }, cancel: function() {
      n2.isCanceled = true;
      var e3 = n2.onCancelList;
      n2.onCancelList = [], e3.forEach(function(e4) {
        e4();
      });
    }, isCanceled: function() {
      return true === n2.isCanceled;
    } };
  }
  function gn(e2) {
    return _n(e2, { isCanceled: false, onCancelList: [] });
  }
  function bn(e2, t2, n2) {
    return e2 ? function(n3) {
      return t2.isCanceled ? n3 : e2(n3);
    } : n2;
  }
  function Sn(e2, t2, n2, r2) {
    if (!n2) return null;
    if (e2 < 0 && (null === t2 || null !== r2 && 0 === t2)) return n2 + e2;
    var o2 = (null === t2 ? -1 : t2) + e2;
    return o2 <= -1 || o2 >= n2 ? null === r2 ? null : 0 : o2;
  }
  function On(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function wn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? On(Object(n2), true).forEach(function(t3) {
        En(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : On(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function En(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== jn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== jn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === jn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function jn(e2) {
    return jn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, jn(e2);
  }
  function Pn(e2) {
    var t2 = function(e3) {
      var t3 = e3.collections.map(function(e4) {
        return e4.items.length;
      }).reduce(function(e4, t4, n3) {
        var r3 = (e4[n3 - 1] || 0) + t4;
        return e4.push(r3), e4;
      }, []).reduce(function(t4, n3) {
        return n3 <= e3.activeItemId ? t4 + 1 : t4;
      }, 0);
      return e3.collections[t3];
    }(e2);
    if (!t2) return null;
    var n2 = t2.items[function(e3) {
      for (var t3 = e3.state, n3 = e3.collection, r3 = false, o2 = 0, i2 = 0; false === r3; ) {
        var a2 = t3.collections[o2];
        if (a2 === n3) {
          r3 = true;
          break;
        }
        i2 += a2.items.length, o2++;
      }
      return t3.activeItemId - i2;
    }({ state: e2, collection: t2 })], r2 = t2.source;
    return { item: n2, itemInputValue: r2.getItemInputValue({ item: n2, state: e2 }), itemUrl: r2.getItemUrl({ item: n2, state: e2 }), source: r2 };
  }
  function In(e2, t2, n2) {
    return [e2, null == n2 ? void 0 : n2.sourceId, t2].filter(Boolean).join("-").replace(/\s/g, "");
  }
  var kn = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
  function Dn(e2) {
    return e2.nativeEvent || e2;
  }
  function Cn(e2) {
    return Cn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Cn(e2);
  }
  function xn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function An(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Cn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Cn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Cn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Nn(e2) {
    return Nn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Nn(e2);
  }
  function Tn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Rn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Tn(Object(n2), true).forEach(function(t3) {
        Ln(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Tn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Ln(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Nn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Nn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Nn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function qn(e2) {
    return qn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, qn(e2);
  }
  function Mn(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function Hn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Un(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Hn(Object(n2), true).forEach(function(t3) {
        Fn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Hn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Fn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== qn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== qn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === qn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Bn(e2) {
    return Bn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Bn(e2);
  }
  function Vn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Kn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Vn(Object(n2), true).forEach(function(t3) {
        Wn(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Vn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Wn(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Bn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Bn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Bn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function zn(e2) {
    return zn = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, zn(e2);
  }
  function Jn(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Qn(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Jn(Object(n2), true).forEach(function(t3) {
        $n(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Jn(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function $n(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== zn(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== zn(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === zn(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Zn(e2) {
    return function(e3) {
      if (Array.isArray(e3)) return Gn(e3);
    }(e2) || function(e3) {
      if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"]) return Array.from(e3);
    }(e2) || function(e3, t2) {
      if (e3) {
        if ("string" == typeof e3) return Gn(e3, t2);
        var n2 = Object.prototype.toString.call(e3).slice(8, -1);
        return "Object" === n2 && e3.constructor && (n2 = e3.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e3) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? Gn(e3, t2) : void 0;
      }
    }(e2) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function Gn(e2, t2) {
    (null == t2 || t2 > e2.length) && (t2 = e2.length);
    for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
    return r2;
  }
  function Yn(e2) {
    return Boolean(e2.execute);
  }
  function Xn(e2) {
    var t2 = e2.reduce(function(e3, t3) {
      if (!Yn(t3)) return e3.push(t3), e3;
      var n2 = t3.searchClient, r2 = t3.execute, o2 = t3.requesterId, i2 = t3.requests, a2 = e3.find(function(e4) {
        return Yn(t3) && Yn(e4) && e4.searchClient === n2 && Boolean(o2) && e4.requesterId === o2;
      });
      if (a2) {
        var c2;
        (c2 = a2.items).push.apply(c2, Zn(i2));
      } else {
        var u2 = { execute: r2, requesterId: o2, items: i2, searchClient: n2 };
        e3.push(u2);
      }
      return e3;
    }, []).map(function(e3) {
      if (!Yn(e3)) return Promise.resolve(e3);
      var t3 = e3, n2 = t3.execute, r2 = t3.items;
      return n2({ searchClient: t3.searchClient, requests: r2 });
    });
    return Promise.all(t2).then(function(e3) {
      return Mt(e3);
    });
  }
  function er(e2) {
    return er = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, er(e2);
  }
  var tr = ["event", "nextState", "props", "query", "refresh", "store"];
  function nr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function rr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? nr(Object(n2), true).forEach(function(t3) {
        or(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : nr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function or(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== er(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== er(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === er(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var ir;
  var ar;
  var cr;
  var ur = null;
  var lr = (ir = -1, ar = -1, cr = void 0, function(e2) {
    var t2 = ++ir;
    return Promise.resolve(e2).then(function(e3) {
      return cr && t2 < ar ? cr : (ar = t2, cr = e3, e3);
    });
  });
  function sr(e2) {
    var t2 = e2.event, n2 = e2.nextState, r2 = void 0 === n2 ? {} : n2, o2 = e2.props, i2 = e2.query, a2 = e2.refresh, c2 = e2.store, u2 = function(e3, t3) {
      if (null == e3) return {};
      var n3, r3, o3 = function(e4, t4) {
        if (null == e4) return {};
        var n4, r4, o4 = {}, i4 = Object.keys(e4);
        for (r4 = 0; r4 < i4.length; r4++) n4 = i4[r4], t4.indexOf(n4) >= 0 || (o4[n4] = e4[n4]);
        return o4;
      }(e3, t3);
      if (Object.getOwnPropertySymbols) {
        var i3 = Object.getOwnPropertySymbols(e3);
        for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t3.indexOf(n3) >= 0 || Object.prototype.propertyIsEnumerable.call(e3, n3) && (o3[n3] = e3[n3]);
      }
      return o3;
    }(e2, tr);
    ur && o2.environment.clearTimeout(ur);
    var l2 = u2.setCollections, s2 = u2.setIsOpen, f2 = u2.setQuery, p2 = u2.setActiveItemId, m2 = u2.setStatus, v2 = u2.setContext;
    if (f2(i2), p2(o2.defaultActiveItemId), !i2 && false === o2.openOnFocus) {
      var h2, d2 = c2.getState().collections.map(function(e3) {
        return rr(rr({}, e3), {}, { items: [] });
      });
      m2("idle"), l2(d2), s2(null !== (h2 = r2.isOpen) && void 0 !== h2 ? h2 : o2.shouldPanelOpen({ state: c2.getState() }));
      var y2 = gn(lr(d2).then(function() {
        return Promise.resolve();
      }));
      return c2.pendingRequests.add(y2);
    }
    m2("loading"), ur = o2.environment.setTimeout(function() {
      m2("stalled");
    }, o2.stallThreshold);
    var _2 = gn(lr(o2.getSources(rr({ query: i2, refresh: a2, state: c2.getState() }, u2)).then(function(e3) {
      return Promise.all(e3.map(function(e4) {
        return Promise.resolve(e4.getItems(rr({ query: i2, refresh: a2, state: c2.getState() }, u2))).then(function(t3) {
          return function(e5, t4, n3) {
            if (o3 = e5, Boolean(null == o3 ? void 0 : o3.execute)) {
              var r3 = "algolia" === e5.requesterId ? Object.assign.apply(Object, [{}].concat(Zn(Object.keys(n3.context).map(function(e6) {
                var t5;
                return null === (t5 = n3.context[e6]) || void 0 === t5 ? void 0 : t5.__algoliaSearchParameters;
              })))) : {};
              return Qn(Qn({}, e5), {}, { requests: e5.queries.map(function(n4) {
                return { query: "algolia" === e5.requesterId ? Qn(Qn({}, n4), {}, { params: Qn(Qn({}, r3), n4.params) }) : n4, sourceId: t4, transformResponse: e5.transformResponse };
              }) });
            }
            var o3;
            return { items: e5, sourceId: t4 };
          }(t3, e4.sourceId, c2.getState());
        });
      })).then(Xn).then(function(t3) {
        var n3, r3 = t3.some(function(e4) {
          return function(e5) {
            return !Array.isArray(e5) && Boolean(null == e5 ? void 0 : e5._automaticInsights);
          }(e4.items);
        });
        return r3 && v2({ algoliaInsightsPlugin: rr(rr({}, (null === (n3 = c2.getState().context) || void 0 === n3 ? void 0 : n3.algoliaInsightsPlugin) || {}), {}, { __automaticInsights: r3 }) }), function(e4, t4, n4) {
          return t4.map(function(t5) {
            var r4, o3 = e4.filter(function(e5) {
              return e5.sourceId === t5.sourceId;
            }), i3 = o3.map(function(e5) {
              return e5.items;
            }), a3 = o3[0].transformResponse, c3 = a3 ? a3({ results: r4 = i3, hits: r4.map(function(e5) {
              return e5.hits;
            }).filter(Boolean), facetHits: r4.map(function(e5) {
              var t6;
              return null === (t6 = e5.facetHits) || void 0 === t6 ? void 0 : t6.map(function(e6) {
                return { label: e6.value, count: e6.count, _highlightResult: { label: { value: e6.highlighted } } };
              });
            }).filter(Boolean) }) : i3;
            return t5.onResolve({ source: t5, results: i3, items: c3, state: n4.getState() }), c3.every(Boolean), 'The `getItems` function from source "'.concat(t5.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"), { source: t5, items: c3 };
          });
        }(t3, e3, c2);
      }).then(function(e4) {
        return function(e5) {
          var t3 = e5.props, n3 = e5.state, r3 = e5.collections.reduce(function(e6, t4) {
            return Kn(Kn({}, e6), {}, Wn({}, t4.source.sourceId, Kn(Kn({}, t4.source), {}, { getItems: function() {
              return Mt(t4.items);
            } })));
          }, {}), o3 = t3.plugins.reduce(function(e6, t4) {
            return t4.reshape ? t4.reshape(e6) : e6;
          }, { sourcesBySourceId: r3, state: n3 }).sourcesBySourceId;
          return Mt(t3.reshape({ sourcesBySourceId: o3, sources: Object.values(o3), state: n3 })).filter(Boolean).map(function(e6) {
            return { source: e6, items: e6.getItems() };
          });
        }({ collections: e4, props: o2, state: c2.getState() });
      });
    }))).then(function(e3) {
      var n3;
      m2("idle"), l2(e3);
      var f3 = o2.shouldPanelOpen({ state: c2.getState() });
      s2(null !== (n3 = r2.isOpen) && void 0 !== n3 ? n3 : o2.openOnFocus && !i2 && f3 || f3);
      var p3 = Pn(c2.getState());
      if (null !== c2.getState().activeItemId && p3) {
        var v3 = p3.item, h3 = p3.itemInputValue, d3 = p3.itemUrl, y3 = p3.source;
        y3.onActive(rr({ event: t2, item: v3, itemInputValue: h3, itemUrl: d3, refresh: a2, source: y3, state: c2.getState() }, u2));
      }
    }).finally(function() {
      m2("idle"), ur && o2.environment.clearTimeout(ur);
    });
    return c2.pendingRequests.add(_2);
  }
  function fr(e2) {
    return fr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, fr(e2);
  }
  var pr = ["event", "props", "refresh", "store"];
  function mr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function vr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? mr(Object(n2), true).forEach(function(t3) {
        hr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : mr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function hr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== fr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== fr(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === fr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function dr(e2) {
    return dr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, dr(e2);
  }
  var yr = ["props", "refresh", "store"];
  var _r = ["inputElement", "formElement", "panelElement"];
  var gr = ["inputElement"];
  var br = ["inputElement", "maxLength"];
  var Sr = ["source"];
  var Or = ["item", "source"];
  function wr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Er(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? wr(Object(n2), true).forEach(function(t3) {
        jr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : wr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function jr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== dr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== dr(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === dr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Pr(e2, t2) {
    if (null == e2) return {};
    var n2, r2, o2 = function(e3, t3) {
      if (null == e3) return {};
      var n3, r3, o3 = {}, i3 = Object.keys(e3);
      for (r3 = 0; r3 < i3.length; r3++) n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
      return o3;
    }(e2, t2);
    if (Object.getOwnPropertySymbols) {
      var i2 = Object.getOwnPropertySymbols(e2);
      for (r2 = 0; r2 < i2.length; r2++) n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
    }
    return o2;
  }
  function Ir(e2) {
    return Ir = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Ir(e2);
  }
  function kr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Dr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? kr(Object(n2), true).forEach(function(t3) {
        Cr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : kr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Cr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Ir(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Ir(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Ir(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function xr(e2) {
    var t2, n2, r2, o2, i2 = e2.plugins, a2 = e2.options, c2 = null === (t2 = ((null === (n2 = a2.__autocomplete_metadata) || void 0 === n2 ? void 0 : n2.userAgents) || [])[0]) || void 0 === t2 ? void 0 : t2.segment, u2 = c2 ? Cr({}, c2, Object.keys((null === (r2 = a2.__autocomplete_metadata) || void 0 === r2 ? void 0 : r2.options) || {})) : {};
    return { plugins: i2.map(function(e3) {
      return { name: e3.name, options: Object.keys(e3.__autocomplete_pluginOptions || []) };
    }), options: Dr({ "autocomplete-core": Object.keys(a2) }, u2), ua: Kt.concat((null === (o2 = a2.__autocomplete_metadata) || void 0 === o2 ? void 0 : o2.userAgents) || []) };
  }
  function Ar(e2) {
    var t2, n2 = e2.state;
    return false === n2.isOpen || null === n2.activeItemId ? null : (null === (t2 = Pn(n2)) || void 0 === t2 ? void 0 : t2.itemInputValue) || null;
  }
  function Nr(e2) {
    return Nr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Nr(e2);
  }
  function Tr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Rr(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Tr(Object(n2), true).forEach(function(t3) {
        Lr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Tr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Lr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Nr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Nr(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Nr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  var qr = function(e2, t2) {
    switch (t2.type) {
      case "setActiveItemId":
      case "mousemove":
        return Rr(Rr({}, e2), {}, { activeItemId: t2.payload });
      case "setQuery":
        return Rr(Rr({}, e2), {}, { query: t2.payload, completion: null });
      case "setCollections":
        return Rr(Rr({}, e2), {}, { collections: t2.payload });
      case "setIsOpen":
        return Rr(Rr({}, e2), {}, { isOpen: t2.payload });
      case "setStatus":
        return Rr(Rr({}, e2), {}, { status: t2.payload });
      case "setContext":
        return Rr(Rr({}, e2), {}, { context: Rr(Rr({}, e2.context), t2.payload) });
      case "ArrowDown":
        var n2 = Rr(Rr({}, e2), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : Sn(1, e2.activeItemId, Ut(e2), t2.props.defaultActiveItemId) });
        return Rr(Rr({}, n2), {}, { completion: Ar({ state: n2 }) });
      case "ArrowUp":
        var r2 = Rr(Rr({}, e2), {}, { activeItemId: Sn(-1, e2.activeItemId, Ut(e2), t2.props.defaultActiveItemId) });
        return Rr(Rr({}, r2), {}, { completion: Ar({ state: r2 }) });
      case "Escape":
        return e2.isOpen ? Rr(Rr({}, e2), {}, { activeItemId: null, isOpen: false, completion: null }) : Rr(Rr({}, e2), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
      case "submit":
        return Rr(Rr({}, e2), {}, { activeItemId: null, isOpen: false, status: "idle" });
      case "reset":
        return Rr(Rr({}, e2), {}, { activeItemId: true === t2.props.openOnFocus ? t2.props.defaultActiveItemId : null, status: "idle", completion: null, query: "" });
      case "focus":
        return Rr(Rr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e2.query)) && t2.props.shouldPanelOpen({ state: e2 }) });
      case "blur":
        return t2.props.debug ? e2 : Rr(Rr({}, e2), {}, { isOpen: false, activeItemId: null });
      case "mouseleave":
        return Rr(Rr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId });
      default:
        return "The reducer action ".concat(JSON.stringify(t2.type), " is not supported."), e2;
    }
  };
  function Mr(e2) {
    return Mr = "function" == typeof Symbol && "symbol" == t(Symbol.iterator) ? function(e3) {
      return t(e3);
    } : function(e3) {
      return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : t(e3);
    }, Mr(e2);
  }
  function Hr(e2, t2) {
    var n2 = Object.keys(e2);
    if (Object.getOwnPropertySymbols) {
      var r2 = Object.getOwnPropertySymbols(e2);
      t2 && (r2 = r2.filter(function(t3) {
        return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
      })), n2.push.apply(n2, r2);
    }
    return n2;
  }
  function Ur(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = null != arguments[t2] ? arguments[t2] : {};
      t2 % 2 ? Hr(Object(n2), true).forEach(function(t3) {
        Fr(e2, t3, n2[t3]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Hr(Object(n2)).forEach(function(t3) {
        Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
      });
    }
    return e2;
  }
  function Fr(e2, t2, n2) {
    return (t2 = function(e3) {
      var t3 = function(e4) {
        if ("object" !== Mr(e4) || null === e4) return e4;
        var t4 = e4[Symbol.toPrimitive];
        if (void 0 !== t4) {
          var n3 = t4.call(e4, "string");
          if ("object" !== Mr(n3)) return n3;
          throw new TypeError("@@toPrimitive must return a primitive value.");
        }
        return String(e4);
      }(e3);
      return "symbol" === Mr(t3) ? t3 : String(t3);
    }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
  }
  function Br(e2) {
    var t2 = [], n2 = function(e3, t3) {
      var n3, r3 = "undefined" != typeof window ? window : {}, o3 = e3.plugins || [];
      return Un(Un({ debug: false, openOnFocus: false, enterKeyHint: void 0, ignoreCompositionEvents: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, insights: void 0, environment: r3, shouldPanelOpen: function(e4) {
        return Ut(e4.state) > 0;
      }, reshape: function(e4) {
        return e4.sources;
      } }, e3), {}, { id: null !== (n3 = e3.id) && void 0 !== n3 ? n3 : "autocomplete-".concat(Ht++), plugins: o3, initialState: Un({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e3.initialState), onStateChange: function(t4) {
        var n4;
        null === (n4 = e3.onStateChange) || void 0 === n4 || n4.call(e3, t4), o3.forEach(function(e4) {
          var n5;
          return null === (n5 = e4.onStateChange) || void 0 === n5 ? void 0 : n5.call(e4, t4);
        });
      }, onSubmit: function(t4) {
        var n4;
        null === (n4 = e3.onSubmit) || void 0 === n4 || n4.call(e3, t4), o3.forEach(function(e4) {
          var n5;
          return null === (n5 = e4.onSubmit) || void 0 === n5 ? void 0 : n5.call(e4, t4);
        });
      }, onReset: function(t4) {
        var n4;
        null === (n4 = e3.onReset) || void 0 === n4 || n4.call(e3, t4), o3.forEach(function(e4) {
          var n5;
          return null === (n5 = e4.onReset) || void 0 === n5 ? void 0 : n5.call(e4, t4);
        });
      }, getSources: function(n4) {
        return Promise.all([].concat(function(e4) {
          return function(e5) {
            if (Array.isArray(e5)) return Mn(e5);
          }(e4) || function(e5) {
            if ("undefined" != typeof Symbol && null != e5[Symbol.iterator] || null != e5["@@iterator"]) return Array.from(e5);
          }(e4) || function(e5, t4) {
            if (e5) {
              if ("string" == typeof e5) return Mn(e5, t4);
              var n5 = Object.prototype.toString.call(e5).slice(8, -1);
              return "Object" === n5 && e5.constructor && (n5 = e5.constructor.name), "Map" === n5 || "Set" === n5 ? Array.from(e5) : "Arguments" === n5 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n5) ? Mn(e5, t4) : void 0;
            }
          }(e4) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }(o3.map(function(e4) {
          return e4.getSources;
        })), [e3.getSources]).filter(Boolean).map(function(e4) {
          return function(e5, t4) {
            var n5 = [];
            return Promise.resolve(e5(t4)).then(function(e6) {
              return Promise.all(e6.filter(function(e7) {
                return Boolean(e7);
              }).map(function(e7) {
                if (e7.sourceId, n5.includes(e7.sourceId)) throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e7.sourceId), " is not unique."));
                n5.push(e7.sourceId);
                var t5 = { getItemInputValue: function(e8) {
                  return e8.state.query;
                }, getItemUrl: function() {
                }, onSelect: function(e8) {
                  (0, e8.setIsOpen)(false);
                }, onActive: Vt, onResolve: Vt };
                Object.keys(t5).forEach(function(e8) {
                  t5[e8].__default = true;
                });
                var r4 = wn(wn({}, t5), e7);
                return Promise.resolve(r4);
              }));
            });
          }(e4, n4);
        })).then(function(e4) {
          return Mt(e4);
        }).then(function(e4) {
          return e4.map(function(e5) {
            return Un(Un({}, e5), {}, { onSelect: function(n5) {
              e5.onSelect(n5), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onSelect) || void 0 === t4 ? void 0 : t4.call(e6, n5);
              });
            }, onActive: function(n5) {
              e5.onActive(n5), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onActive) || void 0 === t4 ? void 0 : t4.call(e6, n5);
              });
            }, onResolve: function(n5) {
              e5.onResolve(n5), t3.forEach(function(e6) {
                var t4;
                return null === (t4 = e6.onResolve) || void 0 === t4 ? void 0 : t4.call(e6, n5);
              });
            } });
          });
        });
      }, navigator: Un({ navigate: function(e4) {
        var t4 = e4.itemUrl;
        r3.location.assign(t4);
      }, navigateNewTab: function(e4) {
        var t4 = e4.itemUrl, n4 = r3.open(t4, "_blank", "noopener");
        null == n4 || n4.focus();
      }, navigateNewWindow: function(e4) {
        var t4 = e4.itemUrl;
        r3.open(t4, "_blank", "noopener");
      } }, e3.navigator) });
    }(e2, t2), r2 = function(e3, t3, n3) {
      var r3, o3 = t3.initialState;
      return { getState: function() {
        return o3;
      }, dispatch: function(r4, i3) {
        var a3 = function(e4) {
          for (var t4 = 1; t4 < arguments.length; t4++) {
            var n4 = null != arguments[t4] ? arguments[t4] : {};
            t4 % 2 ? xn(Object(n4), true).forEach(function(t5) {
              An(e4, t5, n4[t5]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e4, Object.getOwnPropertyDescriptors(n4)) : xn(Object(n4)).forEach(function(t5) {
              Object.defineProperty(e4, t5, Object.getOwnPropertyDescriptor(n4, t5));
            });
          }
          return e4;
        }({}, o3);
        o3 = e3(o3, { type: r4, props: t3, payload: i3 }), n3({ state: o3, prevState: a3 });
      }, pendingRequests: (r3 = [], { add: function(e4) {
        return r3.push(e4), e4.finally(function() {
          r3 = r3.filter(function(t4) {
            return t4 !== e4;
          });
        });
      }, cancelAll: function() {
        r3.forEach(function(e4) {
          return e4.cancel();
        });
      }, isEmpty: function() {
        return 0 === r3.length;
      } }) };
    }(qr, n2, function(e3) {
      var t3, r3, i3 = e3.prevState, l3 = e3.state;
      if (n2.onStateChange(Ur({ prevState: i3, state: l3, refresh: a2, navigator: n2.navigator }, o2)), !u2() && null !== (t3 = l3.context) && void 0 !== t3 && null !== (r3 = t3.algoliaInsightsPlugin) && void 0 !== r3 && r3.__automaticInsights && false !== n2.insights) {
        var s2 = hn({ __autocomplete_clickAnalytics: false });
        n2.plugins.push(s2), c2([s2]);
      }
    }), o2 = function(e3) {
      var t3 = e3.store;
      return { setActiveItemId: function(e4) {
        t3.dispatch("setActiveItemId", e4);
      }, setQuery: function(e4) {
        t3.dispatch("setQuery", e4);
      }, setCollections: function(e4) {
        var n3 = 0, r3 = e4.map(function(e5) {
          return Rn(Rn({}, e5), {}, { items: Mt(e5.items).map(function(e6) {
            return Rn(Rn({}, e6), {}, { __autocomplete_id: n3++ });
          }) });
        });
        t3.dispatch("setCollections", r3);
      }, setIsOpen: function(e4) {
        t3.dispatch("setIsOpen", e4);
      }, setStatus: function(e4) {
        t3.dispatch("setStatus", e4);
      }, setContext: function(e4) {
        t3.dispatch("setContext", e4);
      } };
    }({ store: r2 }), i2 = function(e3) {
      var t3 = e3.props, n3 = e3.refresh, r3 = e3.store, o3 = Pr(e3, yr);
      return { getEnvironmentProps: function(e4) {
        var n4 = e4.inputElement, o4 = e4.formElement, i3 = e4.panelElement;
        function a3(e5) {
          !r3.getState().isOpen && r3.pendingRequests.isEmpty() || e5.target === n4 || false === [o4, i3].some(function(t4) {
            return (n5 = t4) === (r4 = e5.target) || n5.contains(r4);
            var n5, r4;
          }) && (r3.dispatch("blur", null), t3.debug || r3.pendingRequests.cancelAll());
        }
        return Er({ onTouchStart: a3, onMouseDown: a3, onTouchMove: function(e5) {
          false !== r3.getState().isOpen && n4 === t3.environment.document.activeElement && e5.target !== n4 && n4.blur();
        } }, Pr(e4, _r));
      }, getRootProps: function(e4) {
        return Er({ role: "combobox", "aria-expanded": r3.getState().isOpen, "aria-haspopup": "listbox", "aria-controls": r3.getState().isOpen ? r3.getState().collections.map(function(e5) {
          var n4 = e5.source;
          return In(t3.id, "list", n4);
        }).join(" ") : void 0, "aria-labelledby": In(t3.id, "label") }, e4);
      }, getFormProps: function(e4) {
        return e4.inputElement, Er({ action: "", noValidate: true, role: "search", onSubmit: function(i3) {
          var a3;
          i3.preventDefault(), t3.onSubmit(Er({ event: i3, refresh: n3, state: r3.getState() }, o3)), r3.dispatch("submit", null), null === (a3 = e4.inputElement) || void 0 === a3 || a3.blur();
        }, onReset: function(i3) {
          var a3;
          i3.preventDefault(), t3.onReset(Er({ event: i3, refresh: n3, state: r3.getState() }, o3)), r3.dispatch("reset", null), null === (a3 = e4.inputElement) || void 0 === a3 || a3.focus();
        } }, Pr(e4, gr));
      }, getLabelProps: function(e4) {
        return Er({ htmlFor: In(t3.id, "input"), id: In(t3.id, "label") }, e4);
      }, getInputProps: function(e4) {
        var i3;
        function a3(e5) {
          (t3.openOnFocus || Boolean(r3.getState().query)) && sr(Er({ event: e5, props: t3, query: r3.getState().completion || r3.getState().query, refresh: n3, store: r3 }, o3)), r3.dispatch("focus", null);
        }
        var c3 = e4 || {};
        c3.inputElement;
        var u3 = c3.maxLength, l3 = void 0 === u3 ? 512 : u3, s2 = Pr(c3, br), f2 = Pn(r3.getState()), p2 = function(e5) {
          return Boolean(e5 && e5.match(kn));
        }((null === (i3 = t3.environment.navigator) || void 0 === i3 ? void 0 : i3.userAgent) || ""), m2 = t3.enterKeyHint || (null != f2 && f2.itemUrl && !p2 ? "go" : "search");
        return Er({ "aria-autocomplete": "both", "aria-activedescendant": r3.getState().isOpen && null !== r3.getState().activeItemId ? In(t3.id, "item-".concat(r3.getState().activeItemId), null == f2 ? void 0 : f2.source) : void 0, "aria-controls": r3.getState().isOpen ? r3.getState().collections.map(function(e5) {
          var n4 = e5.source;
          return In(t3.id, "list", n4);
        }).join(" ") : void 0, "aria-labelledby": In(t3.id, "label"), value: r3.getState().completion || r3.getState().query, id: In(t3.id, "input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: m2, spellCheck: "false", autoFocus: t3.autoFocus, placeholder: t3.placeholder, maxLength: l3, type: "search", onChange: function(e5) {
          var i4 = e5.currentTarget.value;
          t3.ignoreCompositionEvents && Dn(e5).isComposing ? o3.setQuery(i4) : sr(Er({ event: e5, props: t3, query: i4.slice(0, l3), refresh: n3, store: r3 }, o3));
        }, onCompositionEnd: function(e5) {
          sr(Er({ event: e5, props: t3, query: e5.currentTarget.value.slice(0, l3), refresh: n3, store: r3 }, o3));
        }, onKeyDown: function(e5) {
          Dn(e5).isComposing || function(e6) {
            var t4 = e6.event, n4 = e6.props, r4 = e6.refresh, o4 = e6.store, i4 = function(e7, t5) {
              if (null == e7) return {};
              var n5, r5, o5 = function(e8, t6) {
                if (null == e8) return {};
                var n6, r6, o6 = {}, i6 = Object.keys(e8);
                for (r6 = 0; r6 < i6.length; r6++) n6 = i6[r6], t6.indexOf(n6) >= 0 || (o6[n6] = e8[n6]);
                return o6;
              }(e7, t5);
              if (Object.getOwnPropertySymbols) {
                var i5 = Object.getOwnPropertySymbols(e7);
                for (r5 = 0; r5 < i5.length; r5++) n5 = i5[r5], t5.indexOf(n5) >= 0 || Object.prototype.propertyIsEnumerable.call(e7, n5) && (o5[n5] = e7[n5]);
              }
              return o5;
            }(e6, pr);
            if ("ArrowUp" === t4.key || "ArrowDown" === t4.key) {
              var a4 = function() {
                var e7 = Pn(o4.getState()), t5 = n4.environment.document.getElementById(In(n4.id, "item-".concat(o4.getState().activeItemId), null == e7 ? void 0 : e7.source));
                t5 && (t5.scrollIntoViewIfNeeded ? t5.scrollIntoViewIfNeeded(false) : t5.scrollIntoView(false));
              }, c4 = function() {
                var e7 = Pn(o4.getState());
                if (null !== o4.getState().activeItemId && e7) {
                  var n5 = e7.item, a5 = e7.itemInputValue, c5 = e7.itemUrl, u5 = e7.source;
                  u5.onActive(vr({ event: t4, item: n5, itemInputValue: a5, itemUrl: c5, refresh: r4, source: u5, state: o4.getState() }, i4));
                }
              };
              t4.preventDefault(), false === o4.getState().isOpen && (n4.openOnFocus || Boolean(o4.getState().query)) ? sr(vr({ event: t4, props: n4, query: o4.getState().query, refresh: r4, store: o4 }, i4)).then(function() {
                o4.dispatch(t4.key, { nextActiveItemId: n4.defaultActiveItemId }), c4(), setTimeout(a4, 0);
              }) : (o4.dispatch(t4.key, {}), c4(), a4());
            } else if ("Escape" === t4.key) t4.preventDefault(), o4.dispatch(t4.key, null), o4.pendingRequests.cancelAll();
            else if ("Tab" === t4.key) o4.dispatch("blur", null), o4.pendingRequests.cancelAll();
            else if ("Enter" === t4.key) {
              if (null === o4.getState().activeItemId || o4.getState().collections.every(function(e7) {
                return 0 === e7.items.length;
              })) return void (n4.debug || o4.pendingRequests.cancelAll());
              t4.preventDefault();
              var u4 = Pn(o4.getState()), l4 = u4.item, s3 = u4.itemInputValue, f3 = u4.itemUrl, p3 = u4.source;
              if (t4.metaKey || t4.ctrlKey) void 0 !== f3 && (p3.onSelect(vr({ event: t4, item: l4, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i4)), n4.navigator.navigateNewTab({ itemUrl: f3, item: l4, state: o4.getState() }));
              else if (t4.shiftKey) void 0 !== f3 && (p3.onSelect(vr({ event: t4, item: l4, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i4)), n4.navigator.navigateNewWindow({ itemUrl: f3, item: l4, state: o4.getState() }));
              else if (t4.altKey) ;
              else {
                if (void 0 !== f3) return p3.onSelect(vr({ event: t4, item: l4, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i4)), void n4.navigator.navigate({ itemUrl: f3, item: l4, state: o4.getState() });
                sr(vr({ event: t4, nextState: { isOpen: false }, props: n4, query: s3, refresh: r4, store: o4 }, i4)).then(function() {
                  p3.onSelect(vr({ event: t4, item: l4, itemInputValue: s3, itemUrl: f3, refresh: r4, source: p3, state: o4.getState() }, i4));
                });
              }
            }
          }(Er({ event: e5, props: t3, refresh: n3, store: r3 }, o3));
        }, onFocus: a3, onBlur: Vt, onClick: function(n4) {
          e4.inputElement !== t3.environment.document.activeElement || r3.getState().isOpen || a3(n4);
        } }, s2);
      }, getPanelProps: function(e4) {
        return Er({ onMouseDown: function(e5) {
          e5.preventDefault();
        }, onMouseLeave: function() {
          r3.dispatch("mouseleave", null);
        } }, e4);
      }, getListProps: function(e4) {
        var n4 = e4 || {}, r4 = n4.source, o4 = Pr(n4, Sr);
        return Er({ role: "listbox", "aria-labelledby": In(t3.id, "label"), id: In(t3.id, "list", r4) }, o4);
      }, getItemProps: function(e4) {
        var i3 = e4.item, a3 = e4.source, c3 = Pr(e4, Or);
        return Er({ id: In(t3.id, "item-".concat(i3.__autocomplete_id), a3), role: "option", "aria-selected": r3.getState().activeItemId === i3.__autocomplete_id, onMouseMove: function(e5) {
          if (i3.__autocomplete_id !== r3.getState().activeItemId) {
            r3.dispatch("mousemove", i3.__autocomplete_id);
            var t4 = Pn(r3.getState());
            if (null !== r3.getState().activeItemId && t4) {
              var a4 = t4.item, c4 = t4.itemInputValue, u3 = t4.itemUrl, l3 = t4.source;
              l3.onActive(Er({ event: e5, item: a4, itemInputValue: c4, itemUrl: u3, refresh: n3, source: l3, state: r3.getState() }, o3));
            }
          }
        }, onMouseDown: function(e5) {
          e5.preventDefault();
        }, onClick: function(e5) {
          var c4 = a3.getItemInputValue({ item: i3, state: r3.getState() }), u3 = a3.getItemUrl({ item: i3, state: r3.getState() });
          (u3 ? Promise.resolve() : sr(Er({ event: e5, nextState: { isOpen: false }, props: t3, query: c4, refresh: n3, store: r3 }, o3))).then(function() {
            a3.onSelect(Er({ event: e5, item: i3, itemInputValue: c4, itemUrl: u3, refresh: n3, source: a3, state: r3.getState() }, o3));
          });
        } }, c3);
      } };
    }(Ur({ props: n2, refresh: a2, store: r2, navigator: n2.navigator }, o2));
    function a2() {
      return sr(Ur({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n2, navigator: n2.navigator, query: r2.getState().query, refresh: a2, store: r2 }, o2));
    }
    function c2(e3) {
      e3.forEach(function(e4) {
        var r3;
        return null === (r3 = e4.subscribe) || void 0 === r3 ? void 0 : r3.call(e4, Ur(Ur({}, o2), {}, { navigator: n2.navigator, refresh: a2, onSelect: function(e5) {
          t2.push({ onSelect: e5 });
        }, onActive: function(e5) {
          t2.push({ onActive: e5 });
        }, onResolve: function(e5) {
          t2.push({ onResolve: e5 });
        } }));
      });
    }
    function u2() {
      return n2.plugins.some(function(e3) {
        return "aa.algoliaInsightsPlugin" === e3.name;
      });
    }
    if (n2.insights && !u2()) {
      var l2 = "boolean" == typeof n2.insights ? {} : n2.insights;
      n2.plugins.push(hn(l2));
    }
    return c2(n2.plugins), function(e3) {
      var t3, n3, r3 = e3.metadata, o3 = e3.environment;
      if (null === (t3 = o3.navigator) || void 0 === t3 || null === (n3 = t3.userAgent) || void 0 === n3 ? void 0 : n3.includes("Algolia Crawler")) {
        var i3 = o3.document.createElement("meta"), a3 = o3.document.querySelector("head");
        i3.name = "algolia:metadata", setTimeout(function() {
          i3.content = JSON.stringify(r3), a3.appendChild(i3);
        }, 0);
      }
    }({ metadata: xr({ plugins: n2.plugins, options: e2 }), environment: n2.environment }), Ur(Ur({ refresh: a2, navigator: n2.navigator }, i2), o2);
  }
  function Vr(e2) {
    var t2 = e2.translations, n2 = (void 0 === t2 ? {} : t2).searchByText, r2 = void 0 === n2 ? "Search by" : n2;
    return st.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, st.createElement("span", { className: "DocSearch-Label" }, r2), st.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, st.createElement("defs", null, st.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), st.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), st.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), st.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), st.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), st.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), st.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), st.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), st.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), st.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
  }
  function Kr(e2) {
    return st.createElement("svg", { width: "15", height: "15", "aria-label": e2.ariaLabel, role: "img" }, st.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e2.children));
  }
  function Wr(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.selectText, o2 = void 0 === r2 ? "to select" : r2, i2 = n2.selectKeyAriaLabel, a2 = void 0 === i2 ? "Enter key" : i2, c2 = n2.navigateText, u2 = void 0 === c2 ? "to navigate" : c2, l2 = n2.navigateUpKeyAriaLabel, s2 = void 0 === l2 ? "Arrow up" : l2, f2 = n2.navigateDownKeyAriaLabel, p2 = void 0 === f2 ? "Arrow down" : f2, m2 = n2.closeText, v2 = void 0 === m2 ? "to close" : m2, h2 = n2.closeKeyAriaLabel, d2 = void 0 === h2 ? "Escape key" : h2, y2 = n2.searchByText, _2 = void 0 === y2 ? "Search by" : y2;
    return st.createElement(st.Fragment, null, st.createElement("div", { className: "DocSearch-Logo" }, st.createElement(Vr, { translations: { searchByText: _2 } })), st.createElement("ul", { className: "DocSearch-Commands" }, st.createElement("li", null, st.createElement("kbd", { className: "DocSearch-Commands-Key" }, st.createElement(Kr, { ariaLabel: a2 }, st.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), st.createElement("span", { className: "DocSearch-Label" }, o2)), st.createElement("li", null, st.createElement("kbd", { className: "DocSearch-Commands-Key" }, st.createElement(Kr, { ariaLabel: p2 }, st.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), st.createElement("kbd", { className: "DocSearch-Commands-Key" }, st.createElement(Kr, { ariaLabel: s2 }, st.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), st.createElement("span", { className: "DocSearch-Label" }, u2)), st.createElement("li", null, st.createElement("kbd", { className: "DocSearch-Commands-Key" }, st.createElement(Kr, { ariaLabel: d2 }, st.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), st.createElement("span", { className: "DocSearch-Label" }, v2))));
  }
  function zr(e2) {
    var t2 = e2.hit, n2 = e2.children;
    return st.createElement("a", { href: t2.url }, n2);
  }
  function Jr() {
    return st.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, st.createElement("g", { fill: "none", fillRule: "evenodd" }, st.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, st.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), st.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, st.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
  }
  function Qr() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, st.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), st.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
  }
  function $r() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function Zr() {
    return st.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, st.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), st.createElement("path", { d: "M8 17l-6-6 6-6" })));
  }
  var Gr = function() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  };
  function Yr(e2) {
    switch (e2.type) {
      case "lvl1":
        return st.createElement(Gr, null);
      case "content":
        return st.createElement(eo, null);
      default:
        return st.createElement(Xr, null);
    }
  }
  function Xr() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
  }
  function eo() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function to() {
    return st.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, st.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
  }
  function no() {
    return st.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, st.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
  }
  function ro() {
    return st.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, st.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
  }
  function oo(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.titleText, o2 = void 0 === r2 ? "Unable to fetch results" : r2, i2 = n2.helpText, a2 = void 0 === i2 ? "You might want to check your network connection." : i2;
    return st.createElement("div", { className: "DocSearch-ErrorScreen" }, st.createElement("div", { className: "DocSearch-Screen-Icon" }, st.createElement(no, null)), st.createElement("p", { className: "DocSearch-Title" }, o2), st.createElement("p", { className: "DocSearch-Help" }, a2));
  }
  var io = ["translations"];
  function ao(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Et(e2, io), o2 = n2.noResultsText, i2 = void 0 === o2 ? "No results for" : o2, a2 = n2.suggestedQueryText, c2 = void 0 === a2 ? "Try searching for" : a2, u2 = n2.reportMissingResultsText, l2 = void 0 === u2 ? "Believe this query should return results?" : u2, s2 = n2.reportMissingResultsLinkText, f2 = void 0 === s2 ? "Let us know." : s2, p2 = r2.state.context.searchSuggestions;
    return st.createElement("div", { className: "DocSearch-NoResults" }, st.createElement("div", { className: "DocSearch-Screen-Icon" }, st.createElement(ro, null)), st.createElement("p", { className: "DocSearch-Title" }, i2, ' "', st.createElement("strong", null, r2.state.query), '"'), p2 && p2.length > 0 && st.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, st.createElement("p", { className: "DocSearch-Help" }, c2, ":"), st.createElement("ul", null, p2.slice(0, 3).reduce(function(e3, t3) {
      return [].concat(kt(e3), [st.createElement("li", { key: t3 }, st.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
        r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
      } }, t3))]);
    }, []))), r2.getMissingResultsUrl && st.createElement("p", { className: "DocSearch-Help" }, "".concat(l2, " "), st.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
  }
  var co = ["hit", "attribute", "tagName"];
  function uo(e2, t2) {
    return t2.split(".").reduce(function(e3, t3) {
      return null != e3 && e3[t3] ? e3[t3] : null;
    }, e2);
  }
  function lo(e2) {
    var t2 = e2.hit, n2 = e2.attribute, r2 = e2.tagName;
    return b(void 0 === r2 ? "span" : r2, wt(wt({}, Et(e2, co)), {}, { dangerouslySetInnerHTML: { __html: uo(t2, "_snippetResult.".concat(n2, ".value")) || uo(t2, n2) } }));
  }
  function so(e2) {
    return e2.collection && 0 !== e2.collection.items.length ? st.createElement("section", { className: "DocSearch-Hits" }, st.createElement("div", { className: "DocSearch-Hit-source" }, e2.title), st.createElement("ul", e2.getListProps(), e2.collection.items.map(function(t2, n2) {
      return st.createElement(fo, _t({ key: [e2.title, t2.objectID].join(":"), item: t2, index: n2 }, e2));
    }))) : null;
  }
  function fo(e2) {
    var t2 = e2.item, n2 = e2.index, r2 = e2.renderIcon, o2 = e2.renderAction, i2 = e2.getItemProps, a2 = e2.onItemClick, c2 = e2.collection, u2 = e2.hitComponent, l2 = It(st.useState(false), 2), s2 = l2[0], f2 = l2[1], p2 = It(st.useState(false), 2), m2 = p2[0], v2 = p2[1], h2 = st.useRef(null), d2 = u2;
    return st.createElement("li", _t({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child", s2 && "DocSearch-Hit--deleting", m2 && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
      h2.current && h2.current();
    } }, i2({ item: t2, source: c2.source, onClick: function(e3) {
      a2(t2, e3);
    } })), st.createElement(d2, { hit: t2 }, st.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n2 }), t2.hierarchy[t2.type] && "lvl1" === t2.type && st.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, st.createElement(lo, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && st.createElement(lo, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), t2.hierarchy[t2.type] && ("lvl2" === t2.type || "lvl3" === t2.type || "lvl4" === t2.type || "lvl5" === t2.type || "lvl6" === t2.type) && st.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, st.createElement(lo, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), st.createElement(lo, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), "content" === t2.type && st.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, st.createElement(lo, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), st.createElement(lo, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), o2({ item: t2, runDeleteTransition: function(e3) {
      f2(true), h2.current = e3;
    }, runFavoriteTransition: function(e3) {
      v2(true), h2.current = e3;
    } }))));
  }
  function po(e2, t2, n2) {
    return e2.reduce(function(e3, r2) {
      var o2 = t2(r2);
      return e3.hasOwnProperty(o2) || (e3[o2] = []), e3[o2].length < (n2 || 5) && e3[o2].push(r2), e3;
    }, {});
  }
  function mo(e2) {
    return e2;
  }
  function vo(e2) {
    return 1 === e2.button || e2.altKey || e2.ctrlKey || e2.metaKey || e2.shiftKey;
  }
  function ho() {
  }
  var yo = /(<mark>|<\/mark>)/g;
  var _o = RegExp(yo.source);
  function go(e2) {
    var t2, n2, r2 = e2;
    if (!r2.__docsearch_parent && !e2._highlightResult) return e2.hierarchy.lvl0;
    var o2 = r2.__docsearch_parent ? null === (t2 = r2.__docsearch_parent) || void 0 === t2 || null === (t2 = t2._highlightResult) || void 0 === t2 || null === (t2 = t2.hierarchy) || void 0 === t2 ? void 0 : t2.lvl0 : null === (n2 = e2._highlightResult) || void 0 === n2 || null === (n2 = n2.hierarchy) || void 0 === n2 ? void 0 : n2.lvl0;
    return o2 ? o2.value && _o.test(o2.value) ? o2.value.replace(yo, "") : o2.value : e2.hierarchy.lvl0;
  }
  function bo(e2) {
    return st.createElement("div", { className: "DocSearch-Dropdown-Container" }, e2.state.collections.map(function(t2) {
      if (0 === t2.items.length) return null;
      var n2 = go(t2.items[0]);
      return st.createElement(so, _t({}, e2, { key: t2.source.sourceId, title: n2, collection: t2, renderIcon: function(e3) {
        var n3, r2 = e3.item, o2 = e3.index;
        return st.createElement(st.Fragment, null, r2.__docsearch_parent && st.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, st.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r2.__docsearch_parent !== (null === (n3 = t2.items[o2 + 1]) || void 0 === n3 ? void 0 : n3.__docsearch_parent) ? st.createElement("path", { d: "M8 6v21M20 27H8.3" }) : st.createElement("path", { d: "M8 6v42M20 27H8.3" }))), st.createElement("div", { className: "DocSearch-Hit-icon" }, st.createElement(Yr, { type: r2.type })));
      }, renderAction: function() {
        return st.createElement("div", { className: "DocSearch-Hit-action" }, st.createElement(Zr, null));
      } }));
    }), e2.resultsFooterComponent && st.createElement("section", { className: "DocSearch-HitsFooter" }, st.createElement(e2.resultsFooterComponent, { state: e2.state })));
  }
  var So = ["translations"];
  function Oo(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Et(e2, So), o2 = n2.recentSearchesTitle, i2 = void 0 === o2 ? "Recent" : o2, a2 = n2.noRecentSearchesText, c2 = void 0 === a2 ? "No recent searches" : a2, u2 = n2.saveRecentSearchButtonTitle, l2 = void 0 === u2 ? "Save this search" : u2, s2 = n2.removeRecentSearchButtonTitle, f2 = void 0 === s2 ? "Remove this search from history" : s2, p2 = n2.favoriteSearchesTitle, m2 = void 0 === p2 ? "Favorite" : p2, v2 = n2.removeFavoriteSearchButtonTitle, h2 = void 0 === v2 ? "Remove this search from favorites" : v2;
    return "idle" === r2.state.status && false === r2.hasCollections ? r2.disableUserPersonalization ? null : st.createElement("div", { className: "DocSearch-StartScreen" }, st.createElement("p", { className: "DocSearch-Help" }, c2)) : false === r2.hasCollections ? null : st.createElement("div", { className: "DocSearch-Dropdown-Container" }, st.createElement(so, _t({}, r2, { title: i2, collection: r2.state.collections[0], renderIcon: function() {
      return st.createElement("div", { className: "DocSearch-Hit-icon" }, st.createElement(Qr, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n3 = e3.runFavoriteTransition, o3 = e3.runDeleteTransition;
      return st.createElement(st.Fragment, null, st.createElement("div", { className: "DocSearch-Hit-action" }, st.createElement("button", { className: "DocSearch-Hit-action-button", title: l2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n3(function() {
          r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, st.createElement(to, null))), st.createElement("div", { className: "DocSearch-Hit-action" }, st.createElement("button", { className: "DocSearch-Hit-action-button", title: f2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), o3(function() {
          r2.recentSearches.remove(t3), r2.refresh();
        });
      } }, st.createElement($r, null))));
    } })), st.createElement(so, _t({}, r2, { title: m2, collection: r2.state.collections[1], renderIcon: function() {
      return st.createElement("div", { className: "DocSearch-Hit-icon" }, st.createElement(to, null));
    }, renderAction: function(e3) {
      var t3 = e3.item, n3 = e3.runDeleteTransition;
      return st.createElement("div", { className: "DocSearch-Hit-action" }, st.createElement("button", { className: "DocSearch-Hit-action-button", title: h2, type: "submit", onClick: function(e4) {
        e4.preventDefault(), e4.stopPropagation(), n3(function() {
          r2.favoriteSearches.remove(t3), r2.refresh();
        });
      } }, st.createElement($r, null)));
    } })));
  }
  var wo = ["translations"];
  var Eo = st.memo(function(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Et(e2, wo);
    if ("error" === r2.state.status) return st.createElement(oo, { translations: null == n2 ? void 0 : n2.errorScreen });
    var o2 = r2.state.collections.some(function(e3) {
      return e3.items.length > 0;
    });
    return r2.state.query ? false === o2 ? st.createElement(ao, _t({}, r2, { translations: null == n2 ? void 0 : n2.noResultsScreen })) : st.createElement(bo, r2) : st.createElement(Oo, _t({}, r2, { hasCollections: o2, translations: null == n2 ? void 0 : n2.startScreen }));
  }, function(e2, t2) {
    return "loading" === t2.state.status || "stalled" === t2.state.status;
  });
  var jo = ["translations"];
  function Po(e2) {
    var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = Et(e2, jo), o2 = n2.resetButtonTitle, i2 = void 0 === o2 ? "Clear the query" : o2, a2 = n2.resetButtonAriaLabel, c2 = void 0 === a2 ? "Clear the query" : a2, u2 = n2.cancelButtonText, l2 = void 0 === u2 ? "Cancel" : u2, s2 = n2.cancelButtonAriaLabel, f2 = void 0 === s2 ? "Cancel" : s2, p2 = n2.searchInputLabel, m2 = void 0 === p2 ? "Search" : p2, v2 = r2.getFormProps({ inputElement: r2.inputRef.current }).onReset;
    return st.useEffect(function() {
      r2.autoFocus && r2.inputRef.current && r2.inputRef.current.focus();
    }, [r2.autoFocus, r2.inputRef]), st.useEffect(function() {
      r2.isFromSelection && r2.inputRef.current && r2.inputRef.current.select();
    }, [r2.isFromSelection, r2.inputRef]), st.createElement(st.Fragment, null, st.createElement("form", { className: "DocSearch-Form", onSubmit: function(e3) {
      e3.preventDefault();
    }, onReset: v2 }, st.createElement("label", _t({ className: "DocSearch-MagnifierLabel" }, r2.getLabelProps()), st.createElement(At, null), st.createElement("span", { className: "DocSearch-VisuallyHiddenForAccessibility" }, m2)), st.createElement("div", { className: "DocSearch-LoadingIndicator" }, st.createElement(Jr, null)), st.createElement("input", _t({ className: "DocSearch-Input", ref: r2.inputRef }, r2.getInputProps({ inputElement: r2.inputRef.current, autoFocus: r2.autoFocus, maxLength: 64 }))), st.createElement("button", { type: "reset", title: i2, className: "DocSearch-Reset", "aria-label": c2, hidden: !r2.state.query }, st.createElement($r, null))), st.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f2, onClick: r2.onClose }, l2));
  }
  var Io = ["_highlightResult", "_snippetResult"];
  function ko(e2) {
    var t2 = e2.key, n2 = e2.limit, r2 = void 0 === n2 ? 5 : n2, o2 = function(e3) {
      return false === function() {
        var e4 = "__TEST_KEY__";
        try {
          return localStorage.setItem(e4, ""), localStorage.removeItem(e4), true;
        } catch (e5) {
          return false;
        }
      }() ? { setItem: function() {
      }, getItem: function() {
        return [];
      } } : { setItem: function(t3) {
        return window.localStorage.setItem(e3, JSON.stringify(t3));
      }, getItem: function() {
        var t3 = window.localStorage.getItem(e3);
        return t3 ? JSON.parse(t3) : [];
      } };
    }(t2), i2 = o2.getItem().slice(0, r2);
    return { add: function(e3) {
      var t3 = e3;
      t3._highlightResult, t3._snippetResult;
      var n3 = Et(t3, Io), a2 = i2.findIndex(function(e4) {
        return e4.objectID === n3.objectID;
      });
      a2 > -1 && i2.splice(a2, 1), i2.unshift(n3), i2 = i2.slice(0, r2), o2.setItem(i2);
    }, remove: function(e3) {
      i2 = i2.filter(function(t3) {
        return t3.objectID !== e3.objectID;
      }), o2.setItem(i2);
    }, getAll: function() {
      return i2;
    } };
  }
  function Do(e2) {
    var t2, n2 = "algolia-client-js-".concat(e2.key);
    function r2() {
      return void 0 === t2 && (t2 = e2.localStorage || window.localStorage), t2;
    }
    function o2() {
      return JSON.parse(r2().getItem(n2) || "{}");
    }
    function i2(e3) {
      r2().setItem(n2, JSON.stringify(e3));
    }
    return { get: function(t3, n3) {
      var r3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return Promise.resolve().then(function() {
        var n4, r4, a2;
        return n4 = e2.timeToLive ? 1e3 * e2.timeToLive : null, r4 = o2(), i2(a2 = Object.fromEntries(Object.entries(r4).filter(function(e3) {
          return void 0 !== It(e3, 2)[1].timestamp;
        }))), n4 && i2(Object.fromEntries(Object.entries(a2).filter(function(e3) {
          var t4 = It(e3, 2)[1], r5 = (/* @__PURE__ */ new Date()).getTime();
          return !(t4.timestamp + n4 < r5);
        }))), o2()[JSON.stringify(t3)];
      }).then(function(e3) {
        return Promise.all([e3 ? e3.value : n3(), void 0 !== e3]);
      }).then(function(e3) {
        var t4 = It(e3, 2), n4 = t4[0], o3 = t4[1];
        return Promise.all([n4, o3 || r3.miss(n4)]);
      }).then(function(e3) {
        return It(e3, 1)[0];
      });
    }, set: function(e3, t3) {
      return Promise.resolve().then(function() {
        var i3 = o2();
        return i3[JSON.stringify(e3)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: t3 }, r2().setItem(n2, JSON.stringify(i3)), t3;
      });
    }, delete: function(e3) {
      return Promise.resolve().then(function() {
        var t3 = o2();
        delete t3[JSON.stringify(e3)], r2().setItem(n2, JSON.stringify(t3));
      });
    }, clear: function() {
      return Promise.resolve().then(function() {
        r2().removeItem(n2);
      });
    } };
  }
  function Co(e2) {
    var t2 = kt(e2.caches), n2 = t2.shift();
    return void 0 === n2 ? { get: function(e3, t3) {
      var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return t3().then(function(e4) {
        return Promise.all([e4, n3.miss(e4)]);
      }).then(function(e4) {
        return It(e4, 1)[0];
      });
    }, set: function(e3, t3) {
      return Promise.resolve(t3);
    }, delete: function(e3) {
      return Promise.resolve();
    }, clear: function() {
      return Promise.resolve();
    } } : { get: function(e3, r2) {
      var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } };
      return n2.get(e3, r2, o2).catch(function() {
        return Co({ caches: t2 }).get(e3, r2, o2);
      });
    }, set: function(e3, r2) {
      return n2.set(e3, r2).catch(function() {
        return Co({ caches: t2 }).set(e3, r2);
      });
    }, delete: function(e3) {
      return n2.delete(e3).catch(function() {
        return Co({ caches: t2 }).delete(e3);
      });
    }, clear: function() {
      return n2.clear().catch(function() {
        return Co({ caches: t2 }).clear();
      });
    } };
  }
  function xo() {
    var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
    return { get: function(n2, r2) {
      var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
        return Promise.resolve();
      } }, i2 = JSON.stringify(n2);
      if (i2 in t2) return Promise.resolve(e2.serializable ? JSON.parse(t2[i2]) : t2[i2]);
      var a2 = r2();
      return a2.then(function(e3) {
        return o2.miss(e3);
      }).then(function() {
        return a2;
      });
    }, set: function(n2, r2) {
      return t2[JSON.stringify(n2)] = e2.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
    }, delete: function(e3) {
      return delete t2[JSON.stringify(e3)], Promise.resolve();
    }, clear: function() {
      return t2 = {}, Promise.resolve();
    } };
  }
  function Ao(e2) {
    var t2 = e2.algoliaAgents, n2 = e2.client, r2 = e2.version, o2 = function(e3) {
      var t3 = { value: "Algolia for JavaScript (".concat(e3, ")"), add: function(e4) {
        var n3 = "; ".concat(e4.segment).concat(void 0 !== e4.version ? " (".concat(e4.version, ")") : "");
        return -1 === t3.value.indexOf(n3) && (t3.value = "".concat(t3.value).concat(n3)), t3;
      } };
      return t3;
    }(r2).add({ segment: n2, version: r2 });
    return t2.forEach(function(e3) {
      return o2.add(e3);
    }), o2;
  }
  var No = 12e4;
  function To(e2) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "up", n2 = Date.now();
    return wt(wt({}, e2), {}, { status: t2, lastUpdate: n2, isUp: function() {
      return "up" === t2 || Date.now() - n2 > No;
    }, isTimedOut: function() {
      return "timed out" === t2 && Date.now() - n2 <= No;
    } });
  }
  var Ro = function() {
    function e2(t2, n2) {
      var r2;
      return ht(this, e2), yt(r2 = vt(this, e2, [t2]), "name", "AlgoliaError"), n2 && (r2.name = n2), r2;
    }
    return bt(e2, Ct(Error)), dt(e2);
  }();
  var Lo = function() {
    function e2(t2, n2, r2) {
      var o2;
      return ht(this, e2), yt(o2 = vt(this, e2, [t2, r2]), "stackTrace", void 0), o2.stackTrace = n2, o2;
    }
    return bt(e2, Ro), dt(e2);
  }();
  var qo = function() {
    function e2(t2) {
      return ht(this, e2), vt(this, e2, ["Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.", t2, "RetryError"]);
    }
    return bt(e2, Lo), dt(e2);
  }();
  var Mo = function() {
    function e2(t2, n2, r2) {
      var o2, i2 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "ApiError";
      return ht(this, e2), yt(o2 = vt(this, e2, [t2, r2, i2]), "status", void 0), o2.status = n2, o2;
    }
    return bt(e2, Lo), dt(e2);
  }();
  var Ho = function() {
    function e2(t2, n2) {
      var r2;
      return ht(this, e2), yt(r2 = vt(this, e2, [t2, "DeserializationError"]), "response", void 0), r2.response = n2, r2;
    }
    return bt(e2, Ro), dt(e2);
  }();
  var Uo = function() {
    function e2(t2, n2, r2, o2) {
      var i2;
      return ht(this, e2), yt(i2 = vt(this, e2, [t2, n2, o2, "DetailedApiError"]), "error", void 0), i2.error = r2, i2;
    }
    return bt(e2, Mo), dt(e2);
  }();
  function Fo(e2, t2, n2) {
    var r2, o2 = (r2 = n2, Object.keys(r2).filter(function(e3) {
      return void 0 !== r2[e3];
    }).sort().map(function(e3) {
      return "".concat(e3, "=").concat(encodeURIComponent("[object Array]" === Object.prototype.toString.call(r2[e3]) ? r2[e3].join(",") : r2[e3]).replace(/\+/g, "%20"));
    }).join("&")), i2 = "".concat(e2.protocol, "://").concat(e2.url).concat(e2.port ? ":".concat(e2.port) : "", "/").concat("/" === t2.charAt(0) ? t2.substring(1) : t2);
    return o2.length && (i2 += "?".concat(o2)), i2;
  }
  function Bo(e2, t2) {
    if ("GET" !== e2.method && (void 0 !== e2.data || void 0 !== t2.data)) {
      var n2 = Array.isArray(e2.data) ? e2.data : wt(wt({}, e2.data), t2.data);
      return JSON.stringify(n2);
    }
  }
  function Vo(e2, t2, n2) {
    var r2 = wt(wt(wt({ Accept: "application/json" }, e2), t2), n2), o2 = {};
    return Object.keys(r2).forEach(function(e3) {
      var t3 = r2[e3];
      o2[e3.toLowerCase()] = t3;
    }), o2;
  }
  function Ko(e2) {
    try {
      return JSON.parse(e2.content);
    } catch (t2) {
      throw new Ho(t2.message, e2);
    }
  }
  function Wo(e2, t2) {
    var n2 = e2.content, r2 = e2.status;
    try {
      var o2 = JSON.parse(n2);
      return "error" in o2 ? new Uo(o2.message, r2, o2.error, t2) : new Mo(o2.message, r2, t2);
    } catch (e3) {
    }
    return new Mo(n2, r2, t2);
  }
  function zo(e2) {
    return e2.map(function(e3) {
      return Jo(e3);
    });
  }
  function Jo(e2) {
    var t2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
    return wt(wt({}, e2), {}, { request: wt(wt({}, e2.request), {}, { headers: wt(wt({}, e2.request.headers), t2) }) });
  }
  var Qo = ["appId", "apiKey", "authMode", "algoliaAgents"];
  var $o = ["params"];
  var Zo = "5.19.0";
  function Go(e2) {
    return [{ url: "".concat(e2, "-dsn.algolia.net"), accept: "read", protocol: "https" }, { url: "".concat(e2, ".algolia.net"), accept: "write", protocol: "https" }].concat(function(e3) {
      for (var t2 = e3, n2 = e3.length - 1; n2 > 0; n2--) {
        var r2 = Math.floor(Math.random() * (n2 + 1)), o2 = e3[n2];
        t2[n2] = e3[r2], t2[r2] = o2;
      }
      return t2;
    }([{ url: "".concat(e2, "-1.algolianet.com"), accept: "readWrite", protocol: "https" }, { url: "".concat(e2, "-2.algolianet.com"), accept: "readWrite", protocol: "https" }, { url: "".concat(e2, "-3.algolianet.com"), accept: "readWrite", protocol: "https" }]));
  }
  var Yo = "3.9.0";
  var Xo = ["footer", "searchBox"];
  function ei(e2) {
    var t2 = e2.appId, n2 = e2.apiKey, r2 = e2.indexName, o2 = e2.placeholder, i2 = void 0 === o2 ? "Search docs" : o2, a2 = e2.searchParameters, c2 = e2.maxResultsPerGroup, u2 = e2.onClose, l2 = void 0 === u2 ? ho : u2, s2 = e2.transformItems, f2 = void 0 === s2 ? mo : s2, p2 = e2.hitComponent, m2 = void 0 === p2 ? zr : p2, v2 = e2.resultsFooterComponent, h2 = void 0 === v2 ? function() {
      return null;
    } : v2, d2 = e2.navigator, y2 = e2.initialScrollY, _2 = void 0 === y2 ? 0 : y2, g2 = e2.transformSearchClient, b2 = void 0 === g2 ? mo : g2, S2 = e2.disableUserPersonalization, O2 = void 0 !== S2 && S2, w2 = e2.initialQuery, E2 = void 0 === w2 ? "" : w2, j2 = e2.translations, P2 = void 0 === j2 ? {} : j2, I2 = e2.getMissingResultsUrl, k2 = e2.insights, D2 = void 0 !== k2 && k2, C2 = P2.footer, x2 = P2.searchBox, A2 = Et(P2, Xo), N2 = It(st.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), T2 = N2[0], R2 = N2[1], L2 = st.useRef(null), q2 = st.useRef(null), M2 = st.useRef(null), H2 = st.useRef(null), U2 = st.useRef(null), F2 = st.useRef(10), B2 = st.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 64) : "").current, V2 = st.useRef(E2 || B2).current, K2 = function(e3, t3, n3) {
      return st.useMemo(function() {
        var r3 = function(e4, t4) {
          if (!e4 || "string" != typeof e4) throw new Error("`appId` is missing.");
          if (!t4 || "string" != typeof t4) throw new Error("`apiKey` is missing.");
          return function(e5) {
            var t5 = e5.appId, n4 = e5.apiKey, r4 = e5.authMode, o3 = e5.algoliaAgents, i3 = Et(e5, Qo), a3 = function(e6, t6) {
              var n5 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "WithinHeaders", r5 = { "x-algolia-api-key": t6, "x-algolia-application-id": e6 };
              return { headers: function() {
                return "WithinHeaders" === n5 ? r5 : {};
              }, queryParameters: function() {
                return "WithinQueryParameters" === n5 ? r5 : {};
              } };
            }(t5, n4, r4), c3 = function(e6) {
              var t6 = e6.hosts, n5 = e6.hostsCache, r5 = e6.baseHeaders, o4 = e6.logger, i4 = e6.baseQueryParameters, a4 = e6.algoliaAgent, c4 = e6.timeouts, u3 = e6.requester, l3 = e6.requestsCache, s3 = e6.responsesCache;
              function f3(e7) {
                return p3.apply(this, arguments);
              }
              function p3() {
                return (p3 = mt(jt().mark(function e7(t7) {
                  var r6, o5, i5, a5, c5;
                  return jt().wrap(function(e8) {
                    for (; ; ) switch (e8.prev = e8.next) {
                      case 0:
                        return e8.next = 2, Promise.all(t7.map(function(e9) {
                          return n5.get(e9, function() {
                            return Promise.resolve(To(e9));
                          });
                        }));
                      case 2:
                        return r6 = e8.sent, o5 = r6.filter(function(e9) {
                          return e9.isUp();
                        }), i5 = r6.filter(function(e9) {
                          return e9.isTimedOut();
                        }), a5 = [].concat(kt(o5), kt(i5)), c5 = a5.length > 0 ? a5 : t7, e8.abrupt("return", { hosts: c5, getTimeout: function(e9, t8) {
                          return (0 === i5.length && 0 === e9 ? 1 : i5.length + 3 + e9) * t8;
                        } });
                      case 8:
                      case "end":
                        return e8.stop();
                    }
                  }, e7);
                }))).apply(this, arguments);
              }
              function m3(e7, t7) {
                return v3.apply(this, arguments);
              }
              function v3() {
                return v3 = mt(jt().mark(function e7(l4, s4) {
                  var p4, m4, v4, h3, d3, y3, _3, g3, b3, S3, O3, w3, E3, j3 = arguments;
                  return jt().wrap(function(e8) {
                    for (; ; ) switch (e8.prev = e8.next) {
                      case 0:
                        if (p4 = !(j3.length > 2 && void 0 !== j3[2]) || j3[2], m4 = [], v4 = Bo(l4, s4), h3 = Vo(r5, l4.headers, s4.headers), d3 = "GET" === l4.method ? wt(wt({}, l4.data), s4.data) : {}, y3 = wt(wt(wt({}, i4), l4.queryParameters), d3), a4.value && (y3["x-algolia-agent"] = a4.value), s4 && s4.queryParameters) for (_3 = 0, g3 = Object.keys(s4.queryParameters); _3 < g3.length; _3++) b3 = g3[_3], s4.queryParameters[b3] && "[object Object]" !== Object.prototype.toString.call(s4.queryParameters[b3]) ? y3[b3] = s4.queryParameters[b3].toString() : y3[b3] = s4.queryParameters[b3];
                        return S3 = 0, O3 = function() {
                          var e9 = mt(jt().mark(function e10(t7, r6) {
                            var i5, a5, f4, d4, _4, g4;
                            return jt().wrap(function(e11) {
                              for (; ; ) switch (e11.prev = e11.next) {
                                case 0:
                                  if (void 0 !== (i5 = t7.pop())) {
                                    e11.next = 3;
                                    break;
                                  }
                                  throw new qo(zo(m4));
                                case 3:
                                  return a5 = wt(wt({}, c4), s4.timeouts), f4 = { data: v4, headers: h3, method: l4.method, url: Fo(i5, l4.path, y3), connectTimeout: r6(S3, a5.connect), responseTimeout: r6(S3, p4 ? a5.read : a5.write) }, d4 = function(e12) {
                                    var n6 = { request: f4, response: e12, host: i5, triesLeft: t7.length };
                                    return m4.push(n6), n6;
                                  }, e11.next = 8, u3.send(f4);
                                case 8:
                                  if (w4 = (b4 = _4 = e11.sent).isTimedOut, E4 = b4.status, !(w4 || function(e12) {
                                    return !e12.isTimedOut && !~~e12.status;
                                  }({ isTimedOut: w4, status: E4 }) || 2 != ~~(E4 / 100) && 4 != ~~(E4 / 100))) {
                                    e11.next = 16;
                                    break;
                                  }
                                  return g4 = d4(_4), _4.isTimedOut && S3++, o4.info("Retryable failure", Jo(g4)), e11.next = 15, n5.set(i5, To(i5, _4.isTimedOut ? "timed out" : "down"));
                                case 15:
                                  return e11.abrupt("return", O3(t7, r6));
                                case 16:
                                  if (2 != ~~(_4.status / 100)) {
                                    e11.next = 18;
                                    break;
                                  }
                                  return e11.abrupt("return", Ko(_4));
                                case 18:
                                  throw d4(_4), Wo(_4, m4);
                                case 20:
                                case "end":
                                  return e11.stop();
                              }
                              var b4, w4, E4;
                            }, e10);
                          }));
                          return function(t7, n6) {
                            return e9.apply(this, arguments);
                          };
                        }(), w3 = t6.filter(function(e9) {
                          return "readWrite" === e9.accept || (p4 ? "read" === e9.accept : "write" === e9.accept);
                        }), e8.next = 13, f3(w3);
                      case 13:
                        return E3 = e8.sent, e8.abrupt("return", O3(kt(E3.hosts).reverse(), E3.getTimeout));
                      case 15:
                      case "end":
                        return e8.stop();
                    }
                  }, e7);
                })), v3.apply(this, arguments);
              }
              return { hostsCache: n5, requester: u3, timeouts: c4, logger: o4, algoliaAgent: a4, baseHeaders: r5, baseQueryParameters: i4, hosts: t6, request: function(e7) {
                var t7 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n6 = e7.useReadTransporter || "GET" === e7.method;
                if (!n6) return m3(e7, t7, n6);
                var o5 = function() {
                  return m3(e7, t7);
                };
                if (true !== (t7.cacheable || e7.cacheable)) return o5();
                var a5 = { request: e7, requestOptions: t7, transporter: { queryParameters: i4, headers: r5 } };
                return s3.get(a5, function() {
                  return l3.get(a5, function() {
                    return l3.set(a5, o5()).then(function(e8) {
                      return Promise.all([l3.delete(a5), e8]);
                    }, function(e8) {
                      return Promise.all([l3.delete(a5), Promise.reject(e8)]);
                    }).then(function(e8) {
                      var t8 = It(e8, 2);
                      return t8[0], t8[1];
                    });
                  });
                }, { miss: function(e8) {
                  return s3.set(a5, e8);
                } });
              }, requestsCache: l3, responsesCache: s3 };
            }(wt(wt({ hosts: Go(t5) }, i3), {}, { algoliaAgent: Ao({ algoliaAgents: o3, client: "Lite", version: Zo }), baseHeaders: wt(wt({ "content-type": "text/plain" }, a3.headers()), i3.baseHeaders), baseQueryParameters: wt(wt({}, a3.queryParameters()), i3.baseQueryParameters) }));
            return { transporter: c3, appId: t5, apiKey: n4, clearCache: function() {
              return Promise.all([c3.requestsCache.clear(), c3.responsesCache.clear()]).then(function() {
              });
            }, get _ua() {
              return c3.algoliaAgent.value;
            }, addAlgoliaAgent: function(e6, t6) {
              c3.algoliaAgent.add({ segment: e6, version: t6 });
            }, setClientApiKey: function(e6) {
              var t6 = e6.apiKey;
              r4 && "WithinHeaders" !== r4 ? c3.baseQueryParameters["x-algolia-api-key"] = t6 : c3.baseHeaders["x-algolia-api-key"] = t6;
            }, searchForHits: function(e6, t6) {
              return this.search(e6, t6);
            }, searchForFacets: function(e6, t6) {
              return this.search(e6, t6);
            }, customPost: function(e6, t6) {
              var n5 = e6.path, r5 = e6.parameters, o4 = e6.body;
              if (!n5) throw new Error("Parameter `path` is required when calling `customPost`.");
              var i4 = { method: "POST", path: "/{path}".replace("{path}", n5), queryParameters: r5 || {}, headers: {}, data: o4 || {} };
              return c3.request(i4, t6);
            }, getRecommendations: function(e6, t6) {
              if (e6 && Array.isArray(e6) && (e6 = { requests: e6 }), !e6) throw new Error("Parameter `getRecommendationsParams` is required when calling `getRecommendations`.");
              if (!e6.requests) throw new Error("Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.");
              var n5 = { method: "POST", path: "/1/indexes/*/recommendations", queryParameters: {}, headers: {}, data: e6, useReadTransporter: true, cacheable: true };
              return c3.request(n5, t6);
            }, search: function(e6, t6) {
              if (e6 && Array.isArray(e6)) {
                var n5 = { requests: e6.map(function(e7) {
                  var t7 = e7.params, n6 = Et(e7, $o);
                  return "facet" === n6.type ? wt(wt(wt({}, n6), t7), {}, { type: "facet" }) : wt(wt(wt({}, n6), t7), {}, { facet: void 0, maxFacetHits: void 0, facetQuery: void 0 });
                }) };
                e6 = n5;
              }
              if (!e6) throw new Error("Parameter `searchMethodParams` is required when calling `search`.");
              if (!e6.requests) throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");
              var r5 = { method: "POST", path: "/1/indexes/*/queries", queryParameters: {}, headers: {}, data: e6, useReadTransporter: true, cacheable: true };
              return c3.request(r5, t6);
            } };
          }(wt({ appId: e4, apiKey: t4, timeouts: { connect: 1e3, read: 2e3, write: 3e4 }, logger: { debug: function(e5, t5) {
            return Promise.resolve();
          }, info: function(e5, t5) {
            return Promise.resolve();
          }, error: function(e5, t5) {
            return Promise.resolve();
          } }, requester: { send: function(e5) {
            return new Promise(function(t5) {
              var n4 = new XMLHttpRequest();
              n4.open(e5.method, e5.url, true), Object.keys(e5.headers).forEach(function(t6) {
                return n4.setRequestHeader(t6, e5.headers[t6]);
              });
              var r4, o3 = function(e6, r5) {
                return setTimeout(function() {
                  n4.abort(), t5({ status: 0, content: r5, isTimedOut: true });
                }, e6);
              }, i3 = o3(e5.connectTimeout, "Connection timeout");
              n4.onreadystatechange = function() {
                n4.readyState > n4.OPENED && void 0 === r4 && (clearTimeout(i3), r4 = o3(e5.responseTimeout, "Socket timeout"));
              }, n4.onerror = function() {
                0 === n4.status && (clearTimeout(i3), clearTimeout(r4), t5({ content: n4.responseText || "Network request failed", status: n4.status, isTimedOut: false }));
              }, n4.onload = function() {
                clearTimeout(i3), clearTimeout(r4), t5({ content: n4.responseText, status: n4.status, isTimedOut: false });
              }, n4.send(e5.data);
            });
          } }, algoliaAgents: [{ segment: "Browser" }], authMode: "WithinQueryParameters", responsesCache: xo(), requestsCache: xo({ serializable: false }), hostsCache: Co({ caches: [Do({ key: "".concat(Zo, "-").concat(e4) }), xo()] }) }, void 0));
        }(e3, t3);
        return r3.addAlgoliaAgent("docsearch", Yo), false === /docsearch.js \(.*\)/.test(r3.transporter.algoliaAgent.value) && r3.addAlgoliaAgent("docsearch-react", Yo), n3(r3);
      }, [e3, t3, n3]);
    }(t2, n2, b2), W2 = st.useRef(ko({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r2), limit: 10 })).current, z2 = st.useRef(ko({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r2), limit: 0 === W2.getAll().length ? 7 : 4 })).current, J2 = st.useCallback(function(e3) {
      if (!O2) {
        var t3 = "content" === e3.type ? e3.__docsearch_parent : e3;
        t3 && -1 === W2.getAll().findIndex(function(e4) {
          return e4.objectID === t3.objectID;
        }) && z2.add(t3);
      }
    }, [W2, z2, O2]), Q2 = st.useCallback(function(e3) {
      if (T2.context.algoliaInsightsPlugin && e3.__autocomplete_id) {
        var t3 = e3, n3 = { eventName: "Item Selected", index: t3.__autocomplete_indexName, items: [t3], positions: [e3.__autocomplete_id], queryID: t3.__autocomplete_queryID };
        T2.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n3);
      }
    }, [T2.context.algoliaInsightsPlugin]), $2 = st.useMemo(function() {
      return Br({ id: "docsearch", defaultActiveItemId: 0, placeholder: i2, openOnFocus: true, initialState: { query: V2, context: { searchSuggestions: [] } }, insights: D2, navigator: d2, onStateChange: function(e3) {
        R2(e3.state);
      }, getSources: function(e3) {
        var o3 = e3.query, i3 = e3.state, u3 = e3.setContext, s3 = e3.setStatus;
        if (!o3) return O2 ? [] : [{ sourceId: "recentSearches", onSelect: function(e4) {
          var t3 = e4.item, n3 = e4.event;
          J2(t3), vo(n3) || l2();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return z2.getAll();
        } }, { sourceId: "favoriteSearches", onSelect: function(e4) {
          var t3 = e4.item, n3 = e4.event;
          J2(t3), vo(n3) || l2();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return W2.getAll();
        } }];
        var p3 = Boolean(D2);
        return K2.search({ requests: [wt({ query: o3, indexName: r2, attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(F2.current), "hierarchy.lvl2:".concat(F2.current), "hierarchy.lvl3:".concat(F2.current), "hierarchy.lvl4:".concat(F2.current), "hierarchy.lvl5:".concat(F2.current), "hierarchy.lvl6:".concat(F2.current), "content:".concat(F2.current)], snippetEllipsisText: "\u2026", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20, clickAnalytics: p3 }, a2)] }).catch(function(e4) {
          throw "RetryError" === e4.name && s3("error"), e4;
        }).then(function(e4) {
          var o4 = e4.results[0], a3 = o4.hits, s4 = o4.nbHits, m3 = po(a3, function(e5) {
            return go(e5);
          }, c2);
          i3.context.searchSuggestions.length < Object.keys(m3).length && u3({ searchSuggestions: Object.keys(m3) }), u3({ nbHits: s4 });
          var v3 = {};
          return p3 && (v3 = { __autocomplete_indexName: r2, __autocomplete_queryID: o4.queryID, __autocomplete_algoliaCredentials: { appId: t2, apiKey: n2 } }), Object.values(m3).map(function(e5, t3) {
            return { sourceId: "hits".concat(t3), onSelect: function(e6) {
              var t4 = e6.item, n3 = e6.event;
              J2(t4), vo(n3) || l2();
            }, getItemUrl: function(e6) {
              return e6.item.url;
            }, getItems: function() {
              return Object.values(po(e5, function(e6) {
                return e6.hierarchy.lvl1;
              }, c2)).map(f2).map(function(e6) {
                return e6.map(function(t4) {
                  var n3 = null, r3 = e6.find(function(e7) {
                    return "lvl1" === e7.type && e7.hierarchy.lvl1 === t4.hierarchy.lvl1;
                  });
                  return "lvl1" !== t4.type && r3 && (n3 = r3), wt(wt({}, t4), {}, { __docsearch_parent: n3 }, v3);
                });
              }).flat();
            } };
          });
        });
      } });
    }, [r2, a2, c2, K2, l2, z2, W2, J2, V2, i2, d2, f2, O2, D2, t2, n2]), Z2 = $2.getEnvironmentProps, G2 = $2.getRootProps, Y2 = $2.refresh;
    return function(e3) {
      var t3 = e3.getEnvironmentProps, n3 = e3.panelElement, r3 = e3.formElement, o3 = e3.inputElement;
      st.useEffect(function() {
        if (n3 && r3 && o3) {
          var e4 = t3({ panelElement: n3, formElement: r3, inputElement: o3 }), i3 = e4.onTouchStart, a3 = e4.onTouchMove;
          return window.addEventListener("touchstart", i3), window.addEventListener("touchmove", a3), function() {
            window.removeEventListener("touchstart", i3), window.removeEventListener("touchmove", a3);
          };
        }
      }, [t3, n3, r3, o3]);
    }({ getEnvironmentProps: Z2, panelElement: H2.current, formElement: M2.current, inputElement: U2.current }), function(e3) {
      var t3 = e3.container;
      st.useEffect(function() {
        if (t3) {
          var e4 = t3.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), n3 = e4[0], r3 = e4[e4.length - 1];
          return t3.addEventListener("keydown", o3), function() {
            t3.removeEventListener("keydown", o3);
          };
        }
        function o3(e5) {
          "Tab" === e5.key && (e5.shiftKey ? document.activeElement === n3 && (e5.preventDefault(), r3.focus()) : document.activeElement === r3 && (e5.preventDefault(), n3.focus()));
        }
      }, [t3]);
    }({ container: L2.current }), st.useEffect(function() {
      return document.body.classList.add("DocSearch--active"), function() {
        var e3, t3;
        document.body.classList.remove("DocSearch--active"), null === (e3 = (t3 = window).scrollTo) || void 0 === e3 || e3.call(t3, 0, _2);
      };
    }, []), st.useLayoutEffect(function() {
      var e3 = window.innerWidth - document.body.clientWidth;
      return document.body.style.marginRight = "".concat(e3, "px"), function() {
        document.body.style.marginRight = "0px";
      };
    }, []), st.useEffect(function() {
      window.matchMedia("(max-width: 768px)").matches && (F2.current = 5);
    }, []), st.useEffect(function() {
      H2.current && (H2.current.scrollTop = 0);
    }, [T2.query]), st.useEffect(function() {
      V2.length > 0 && (Y2(), U2.current && U2.current.focus());
    }, [V2, Y2]), st.useEffect(function() {
      function e3() {
        if (q2.current) {
          var e4 = 0.01 * window.innerHeight;
          q2.current.style.setProperty("--docsearch-vh", "".concat(e4, "px"));
        }
      }
      return e3(), window.addEventListener("resize", e3), function() {
        window.removeEventListener("resize", e3);
      };
    }, []), st.createElement("div", _t({ ref: L2 }, G2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", "stalled" === T2.status && "DocSearch-Container--Stalled", "error" === T2.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e3) {
      e3.target === e3.currentTarget && l2();
    } }), st.createElement("div", { className: "DocSearch-Modal", ref: q2 }, st.createElement("header", { className: "DocSearch-SearchBar", ref: M2 }, st.createElement(Po, _t({}, $2, { state: T2, autoFocus: 0 === V2.length, inputRef: U2, isFromSelection: Boolean(V2) && V2 === B2, translations: x2, onClose: l2 }))), st.createElement("div", { className: "DocSearch-Dropdown", ref: H2 }, st.createElement(Eo, _t({}, $2, { indexName: r2, state: T2, hitComponent: m2, resultsFooterComponent: h2, disableUserPersonalization: O2, recentSearches: z2, favoriteSearches: W2, inputRef: U2, translations: A2, getMissingResultsUrl: I2, onItemClick: function(e3, t3) {
      Q2(e3), J2(e3), vo(t3) || l2();
    } }))), st.createElement("footer", { className: "DocSearch-Footer" }, st.createElement(Wr, { translations: C2 }))));
  }
  function ti(e2) {
    var t2, n2, r2 = st.useRef(null), o2 = It(st.useState(false), 2), i2 = o2[0], a2 = o2[1], c2 = It(st.useState((null == e2 ? void 0 : e2.initialQuery) || void 0), 2), u2 = c2[0], l2 = c2[1], s2 = st.useCallback(function() {
      a2(true);
    }, [a2]), f2 = st.useCallback(function() {
      a2(false), l2(null == e2 ? void 0 : e2.initialQuery);
    }, [a2, e2.initialQuery]);
    return function(e3) {
      var t3 = e3.isOpen, n3 = e3.onOpen, r3 = e3.onClose, o3 = e3.onInput, i3 = e3.searchButtonRef;
      st.useEffect(function() {
        function e4(e5) {
          var a3;
          if ("Escape" === e5.code && t3 || "k" === (null === (a3 = e5.key) || void 0 === a3 ? void 0 : a3.toLowerCase()) && (e5.metaKey || e5.ctrlKey) || !function(e6) {
            var t4 = e6.target, n4 = t4.tagName;
            return t4.isContentEditable || "INPUT" === n4 || "SELECT" === n4 || "TEXTAREA" === n4;
          }(e5) && "/" === e5.key && !t3) return e5.preventDefault(), void (t3 ? r3() : document.body.classList.contains("DocSearch--active") || n3());
          i3 && i3.current === document.activeElement && o3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e5.keyCode)) && o3(e5);
        }
        return window.addEventListener("keydown", e4), function() {
          window.removeEventListener("keydown", e4);
        };
      }, [t3, n3, r3, o3, i3]);
    }({ isOpen: i2, onOpen: s2, onClose: f2, onInput: st.useCallback(function(e3) {
      a2(true), l2(e3.key);
    }, [a2, l2]), searchButtonRef: r2 }), st.createElement(st.Fragment, null, st.createElement(Rt, { ref: r2, translations: null == e2 || null === (t2 = e2.translations) || void 0 === t2 ? void 0 : t2.button, onClick: s2 }), i2 && We(st.createElement(ei, _t({}, e2, { initialScrollY: window.scrollY, initialQuery: u2, translations: null == e2 || null === (n2 = e2.translations) || void 0 === n2 ? void 0 : n2.modal, onClose: f2 })), document.body));
  }
  function ni(t2) {
    Ye(st.createElement(ti, e({}, t2, { transformSearchClient: function(e2) {
      return e2.addAlgoliaAgent("docsearch.js", Yo), t2.transformSearchClient ? t2.transformSearchClient(e2) : e2;
    } })), function(e2) {
      var t3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
      return "string" == typeof e2 ? t3.document.querySelector(e2) : e2;
    }(t2.container, t2.environment));
  }

  // <stdin>
  ni({
    appId: "ER865HD7LN",
    apiKey: "56b4cffcb36dc6b444754b5cdf907917",
    container: "#docsearch",
    debug: false,
    indexName: "help-yagpdb",
    insights: true
  });
  var onClick = function() {
    document.getElementsByClassName("DocSearch-Button")[0].click();
  };
  document.getElementById("searchToggleMobile").onclick = onClick;
  document.getElementById("searchToggleDesktop").onclick = onClick;
})();
/*! Bundled license information:

@docsearch/js/dist/esm/index.js:
  (*! @docsearch/js 3.9.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com *)
*/
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL25vZGVfbW9kdWxlcy9wcmVhY3QvZGlzdC9wcmVhY3QubW9kdWxlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ub2RlX21vZHVsZXMvcHJlYWN0L2hvb2tzL2Rpc3QvaG9va3MubW9kdWxlLmpzIiwgIi4uL25vZGVfbW9kdWxlcy9ub2RlX21vZHVsZXMvcHJlYWN0L2NvbXBhdC9kaXN0L2NvbXBhdC5tb2R1bGUuanMiLCAiLi4vbm9kZV9tb2R1bGVzL0Bkb2NzZWFyY2gvZG9jc2VhcmNoLXJlYWN0L2Rpc3QvZXNtL2luZGV4LmpzIiwgIi4uL25vZGVfbW9kdWxlcy9AZG9jc2VhcmNoL2pzL3NyYy9kb2NzZWFyY2gudHN4IiwgIjxzdGRpbj4iXSwKICAic291cmNlc0NvbnRlbnQiOiBbInZhciBuLGwsdSx0LGkscixvLGUsZixjLHMsYSxoLHA9e30sdj1bXSx5PS9hY2l0fGV4KD86c3xnfG58cHwkKXxycGh8Z3JpZHxvd3N8bW5jfG50d3xpbmVbY2hdfHpvb3xeb3JkfGl0ZXJhL2ksZD1BcnJheS5pc0FycmF5O2Z1bmN0aW9uIHcobixsKXtmb3IodmFyIHUgaW4gbCluW3VdPWxbdV07cmV0dXJuIG59ZnVuY3Rpb24gXyhuKXtuJiZuLnBhcmVudE5vZGUmJm4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChuKX1mdW5jdGlvbiBnKGwsdSx0KXt2YXIgaSxyLG8sZT17fTtmb3IobyBpbiB1KVwia2V5XCI9PW8/aT11W29dOlwicmVmXCI9PW8/cj11W29dOmVbb109dVtvXTtpZihhcmd1bWVudHMubGVuZ3RoPjImJihlLmNoaWxkcmVuPWFyZ3VtZW50cy5sZW5ndGg+Mz9uLmNhbGwoYXJndW1lbnRzLDIpOnQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGwmJm51bGwhPWwuZGVmYXVsdFByb3BzKWZvcihvIGluIGwuZGVmYXVsdFByb3BzKXZvaWQgMD09PWVbb10mJihlW29dPWwuZGVmYXVsdFByb3BzW29dKTtyZXR1cm4gbShsLGUsaSxyLG51bGwpfWZ1bmN0aW9uIG0obix0LGkscixvKXt2YXIgZT17dHlwZTpuLHByb3BzOnQsa2V5OmkscmVmOnIsX19rOm51bGwsX186bnVsbCxfX2I6MCxfX2U6bnVsbCxfX2M6bnVsbCxjb25zdHJ1Y3Rvcjp2b2lkIDAsX192Om51bGw9PW8/Kyt1Om8sX19pOi0xLF9fdTowfTtyZXR1cm4gbnVsbD09byYmbnVsbCE9bC52bm9kZSYmbC52bm9kZShlKSxlfWZ1bmN0aW9uIGIoKXtyZXR1cm57Y3VycmVudDpudWxsfX1mdW5jdGlvbiBrKG4pe3JldHVybiBuLmNoaWxkcmVufWZ1bmN0aW9uIHgobixsKXt0aGlzLnByb3BzPW4sdGhpcy5jb250ZXh0PWx9ZnVuY3Rpb24gQyhuLGwpe2lmKG51bGw9PWwpcmV0dXJuIG4uX18/QyhuLl9fLG4uX19pKzEpOm51bGw7Zm9yKHZhciB1O2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXJldHVybiB1Ll9fZTtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiBuLnR5cGU/QyhuKTpudWxsfWZ1bmN0aW9uIFMobil7dmFyIGwsdTtpZihudWxsIT0obj1uLl9fKSYmbnVsbCE9bi5fX2Mpe2ZvcihuLl9fZT1uLl9fYy5iYXNlPW51bGwsbD0wO2w8bi5fX2subGVuZ3RoO2wrKylpZihudWxsIT0odT1uLl9fa1tsXSkmJm51bGwhPXUuX19lKXtuLl9fZT1uLl9fYy5iYXNlPXUuX19lO2JyZWFrfXJldHVybiBTKG4pfX1mdW5jdGlvbiBNKG4peyghbi5fX2QmJihuLl9fZD0hMCkmJmkucHVzaChuKSYmIVAuX19yKyt8fHIhPT1sLmRlYm91bmNlUmVuZGVyaW5nKSYmKChyPWwuZGVib3VuY2VSZW5kZXJpbmcpfHxvKShQKX1mdW5jdGlvbiBQKCl7dmFyIG4sdSx0LHIsbyxmLGMscztmb3IoaS5zb3J0KGUpO249aS5zaGlmdCgpOyluLl9fZCYmKHU9aS5sZW5ndGgscj12b2lkIDAsZj0obz0odD1uKS5fX3YpLl9fZSxjPVtdLHM9W10sdC5fX1AmJigocj13KHt9LG8pKS5fX3Y9by5fX3YrMSxsLnZub2RlJiZsLnZub2RlKHIpLGoodC5fX1AscixvLHQuX19uLHQuX19QLm5hbWVzcGFjZVVSSSwzMiZvLl9fdT9bZl06bnVsbCxjLG51bGw9PWY/QyhvKTpmLCEhKDMyJm8uX191KSxzKSxyLl9fdj1vLl9fdixyLl9fLl9fa1tyLl9faV09cix6KGMscixzKSxyLl9fZSE9ZiYmUyhyKSksaS5sZW5ndGg+dSYmaS5zb3J0KGUpKTtQLl9fcj0wfWZ1bmN0aW9uICQobixsLHUsdCxpLHIsbyxlLGYsYyxzKXt2YXIgYSxoLHksZCx3LF8sZz10JiZ0Ll9fa3x8dixtPWwubGVuZ3RoO2ZvcihmPUkodSxsLGcsZixtKSxhPTA7YTxtO2ErKyludWxsIT0oeT11Ll9fa1thXSkmJihoPS0xPT09eS5fX2k/cDpnW3kuX19pXXx8cCx5Ll9faT1hLF89aihuLHksaCxpLHIsbyxlLGYsYyxzKSxkPXkuX19lLHkucmVmJiZoLnJlZiE9eS5yZWYmJihoLnJlZiYmVihoLnJlZixudWxsLHkpLHMucHVzaCh5LnJlZix5Ll9fY3x8ZCx5KSksbnVsbD09dyYmbnVsbCE9ZCYmKHc9ZCksNCZ5Ll9fdXx8aC5fX2s9PT15Ll9faz9mPUEoeSxmLG4pOlwiZnVuY3Rpb25cIj09dHlwZW9mIHkudHlwZSYmdm9pZCAwIT09Xz9mPV86ZCYmKGY9ZC5uZXh0U2libGluZykseS5fX3UmPS03KTtyZXR1cm4gdS5fX2U9dyxmfWZ1bmN0aW9uIEkobixsLHUsdCxpKXt2YXIgcixvLGUsZixjLHM9dS5sZW5ndGgsYT1zLGg9MDtmb3Iobi5fX2s9bmV3IEFycmF5KGkpLHI9MDtyPGk7cisrKW51bGwhPShvPWxbcl0pJiZcImJvb2xlYW5cIiE9dHlwZW9mIG8mJlwiZnVuY3Rpb25cIiE9dHlwZW9mIG8/KGY9citoLChvPW4uX19rW3JdPVwic3RyaW5nXCI9PXR5cGVvZiBvfHxcIm51bWJlclwiPT10eXBlb2Ygb3x8XCJiaWdpbnRcIj09dHlwZW9mIG98fG8uY29uc3RydWN0b3I9PVN0cmluZz9tKG51bGwsbyxudWxsLG51bGwsbnVsbCk6ZChvKT9tKGsse2NoaWxkcmVuOm99LG51bGwsbnVsbCxudWxsKTp2b2lkIDA9PT1vLmNvbnN0cnVjdG9yJiZvLl9fYj4wP20oby50eXBlLG8ucHJvcHMsby5rZXksby5yZWY/by5yZWY6bnVsbCxvLl9fdik6bykuX189bixvLl9fYj1uLl9fYisxLGU9bnVsbCwtMSE9PShjPW8uX19pPUwobyx1LGYsYSkpJiYoYS0tLChlPXVbY10pJiYoZS5fX3V8PTIpKSxudWxsPT1lfHxudWxsPT09ZS5fX3Y/KC0xPT1jJiZoLS0sXCJmdW5jdGlvblwiIT10eXBlb2Ygby50eXBlJiYoby5fX3V8PTQpKTpjIT1mJiYoYz09Zi0xP2gtLTpjPT1mKzE/aCsrOihjPmY/aC0tOmgrKyxvLl9fdXw9NCkpKTpuLl9fa1tyXT1udWxsO2lmKGEpZm9yKHI9MDtyPHM7cisrKW51bGwhPShlPXVbcl0pJiYwPT0oMiZlLl9fdSkmJihlLl9fZT09dCYmKHQ9QyhlKSkscShlLGUpKTtyZXR1cm4gdH1mdW5jdGlvbiBBKG4sbCx1KXt2YXIgdCxpO2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIG4udHlwZSl7Zm9yKHQ9bi5fX2ssaT0wO3QmJmk8dC5sZW5ndGg7aSsrKXRbaV0mJih0W2ldLl9fPW4sbD1BKHRbaV0sbCx1KSk7cmV0dXJuIGx9bi5fX2UhPWwmJihsJiZuLnR5cGUmJiF1LmNvbnRhaW5zKGwpJiYobD1DKG4pKSx1Lmluc2VydEJlZm9yZShuLl9fZSxsfHxudWxsKSxsPW4uX19lKTtkb3tsPWwmJmwubmV4dFNpYmxpbmd9d2hpbGUobnVsbCE9bCYmOD09bC5ub2RlVHlwZSk7cmV0dXJuIGx9ZnVuY3Rpb24gSChuLGwpe3JldHVybiBsPWx8fFtdLG51bGw9PW58fFwiYm9vbGVhblwiPT10eXBlb2Ygbnx8KGQobik/bi5zb21lKGZ1bmN0aW9uKG4pe0gobixsKX0pOmwucHVzaChuKSksbH1mdW5jdGlvbiBMKG4sbCx1LHQpe3ZhciBpLHIsbz1uLmtleSxlPW4udHlwZSxmPWxbdV07aWYobnVsbD09PWZ8fGYmJm89PWYua2V5JiZlPT09Zi50eXBlJiYwPT0oMiZmLl9fdSkpcmV0dXJuIHU7aWYodD4obnVsbCE9ZiYmMD09KDImZi5fX3UpPzE6MCkpZm9yKGk9dS0xLHI9dSsxO2k+PTB8fHI8bC5sZW5ndGg7KXtpZihpPj0wKXtpZigoZj1sW2ldKSYmMD09KDImZi5fX3UpJiZvPT1mLmtleSYmZT09PWYudHlwZSlyZXR1cm4gaTtpLS19aWYocjxsLmxlbmd0aCl7aWYoKGY9bFtyXSkmJjA9PSgyJmYuX191KSYmbz09Zi5rZXkmJmU9PT1mLnR5cGUpcmV0dXJuIHI7cisrfX1yZXR1cm4tMX1mdW5jdGlvbiBUKG4sbCx1KXtcIi1cIj09bFswXT9uLnNldFByb3BlcnR5KGwsbnVsbD09dT9cIlwiOnUpOm5bbF09bnVsbD09dT9cIlwiOlwibnVtYmVyXCIhPXR5cGVvZiB1fHx5LnRlc3QobCk/dTp1K1wicHhcIn1mdW5jdGlvbiBGKG4sbCx1LHQsaSl7dmFyIHI7bjppZihcInN0eWxlXCI9PWwpaWYoXCJzdHJpbmdcIj09dHlwZW9mIHUpbi5zdHlsZS5jc3NUZXh0PXU7ZWxzZXtpZihcInN0cmluZ1wiPT10eXBlb2YgdCYmKG4uc3R5bGUuY3NzVGV4dD10PVwiXCIpLHQpZm9yKGwgaW4gdCl1JiZsIGluIHV8fFQobi5zdHlsZSxsLFwiXCIpO2lmKHUpZm9yKGwgaW4gdSl0JiZ1W2xdPT09dFtsXXx8VChuLnN0eWxlLGwsdVtsXSl9ZWxzZSBpZihcIm9cIj09bFswXSYmXCJuXCI9PWxbMV0pcj1sIT0obD1sLnJlcGxhY2UoZixcIiQxXCIpKSxsPWwudG9Mb3dlckNhc2UoKWluIG58fFwib25Gb2N1c091dFwiPT1sfHxcIm9uRm9jdXNJblwiPT1sP2wudG9Mb3dlckNhc2UoKS5zbGljZSgyKTpsLnNsaWNlKDIpLG4ubHx8KG4ubD17fSksbi5sW2wrcl09dSx1P3Q/dS51PXQudToodS51PWMsbi5hZGRFdmVudExpc3RlbmVyKGwscj9hOnMscikpOm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihsLHI/YTpzLHIpO2Vsc2V7aWYoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPT1pKWw9bC5yZXBsYWNlKC94bGluayhIfDpoKS8sXCJoXCIpLnJlcGxhY2UoL3NOYW1lJC8sXCJzXCIpO2Vsc2UgaWYoXCJ3aWR0aFwiIT1sJiZcImhlaWdodFwiIT1sJiZcImhyZWZcIiE9bCYmXCJsaXN0XCIhPWwmJlwiZm9ybVwiIT1sJiZcInRhYkluZGV4XCIhPWwmJlwiZG93bmxvYWRcIiE9bCYmXCJyb3dTcGFuXCIhPWwmJlwiY29sU3BhblwiIT1sJiZcInJvbGVcIiE9bCYmXCJwb3BvdmVyXCIhPWwmJmwgaW4gbil0cnl7bltsXT1udWxsPT11P1wiXCI6dTticmVhayBufWNhdGNoKG4pe31cImZ1bmN0aW9uXCI9PXR5cGVvZiB1fHwobnVsbD09dXx8ITE9PT11JiZcIi1cIiE9bFs0XT9uLnJlbW92ZUF0dHJpYnV0ZShsKTpuLnNldEF0dHJpYnV0ZShsLFwicG9wb3ZlclwiPT1sJiYxPT11P1wiXCI6dSkpfX1mdW5jdGlvbiBPKG4pe3JldHVybiBmdW5jdGlvbih1KXtpZih0aGlzLmwpe3ZhciB0PXRoaXMubFt1LnR5cGUrbl07aWYobnVsbD09dS50KXUudD1jKys7ZWxzZSBpZih1LnQ8dC51KXJldHVybjtyZXR1cm4gdChsLmV2ZW50P2wuZXZlbnQodSk6dSl9fX1mdW5jdGlvbiBqKG4sdSx0LGkscixvLGUsZixjLHMpe3ZhciBhLGgscCx2LHksZyxtLGIsQyxTLE0sUCxJLEEsSCxMLFQsRj11LnR5cGU7aWYodm9pZCAwIT09dS5jb25zdHJ1Y3RvcilyZXR1cm4gbnVsbDsxMjgmdC5fX3UmJihjPSEhKDMyJnQuX191KSxvPVtmPXUuX19lPXQuX19lXSksKGE9bC5fX2IpJiZhKHUpO246aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgRil0cnl7aWYoYj11LnByb3BzLEM9XCJwcm90b3R5cGVcImluIEYmJkYucHJvdG90eXBlLnJlbmRlcixTPShhPUYuY29udGV4dFR5cGUpJiZpW2EuX19jXSxNPWE/Uz9TLnByb3BzLnZhbHVlOmEuX186aSx0Ll9fYz9tPShoPXUuX19jPXQuX19jKS5fXz1oLl9fRTooQz91Ll9fYz1oPW5ldyBGKGIsTSk6KHUuX19jPWg9bmV3IHgoYixNKSxoLmNvbnN0cnVjdG9yPUYsaC5yZW5kZXI9QiksUyYmUy5zdWIoaCksaC5wcm9wcz1iLGguc3RhdGV8fChoLnN0YXRlPXt9KSxoLmNvbnRleHQ9TSxoLl9fbj1pLHA9aC5fX2Q9ITAsaC5fX2g9W10saC5fc2I9W10pLEMmJm51bGw9PWguX19zJiYoaC5fX3M9aC5zdGF0ZSksQyYmbnVsbCE9Ri5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJihoLl9fcz09aC5zdGF0ZSYmKGguX19zPXcoe30saC5fX3MpKSx3KGguX19zLEYuZ2V0RGVyaXZlZFN0YXRlRnJvbVByb3BzKGIsaC5fX3MpKSksdj1oLnByb3BzLHk9aC5zdGF0ZSxoLl9fdj11LHApQyYmbnVsbD09Ri5nZXREZXJpdmVkU3RhdGVGcm9tUHJvcHMmJm51bGwhPWguY29tcG9uZW50V2lsbE1vdW50JiZoLmNvbXBvbmVudFdpbGxNb3VudCgpLEMmJm51bGwhPWguY29tcG9uZW50RGlkTW91bnQmJmguX19oLnB1c2goaC5jb21wb25lbnREaWRNb3VudCk7ZWxzZXtpZihDJiZudWxsPT1GLmdldERlcml2ZWRTdGF0ZUZyb21Qcm9wcyYmYiE9PXYmJm51bGwhPWguY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyYmaC5jb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKGIsTSksIWguX19lJiYobnVsbCE9aC5zaG91bGRDb21wb25lbnRVcGRhdGUmJiExPT09aC5zaG91bGRDb21wb25lbnRVcGRhdGUoYixoLl9fcyxNKXx8dS5fX3Y9PXQuX192KSl7Zm9yKHUuX192IT10Ll9fdiYmKGgucHJvcHM9YixoLnN0YXRlPWguX19zLGguX19kPSExKSx1Ll9fZT10Ll9fZSx1Ll9faz10Ll9fayx1Ll9fay5zb21lKGZ1bmN0aW9uKG4pe24mJihuLl9fPXUpfSksUD0wO1A8aC5fc2IubGVuZ3RoO1ArKyloLl9faC5wdXNoKGguX3NiW1BdKTtoLl9zYj1bXSxoLl9faC5sZW5ndGgmJmUucHVzaChoKTticmVhayBufW51bGwhPWguY29tcG9uZW50V2lsbFVwZGF0ZSYmaC5jb21wb25lbnRXaWxsVXBkYXRlKGIsaC5fX3MsTSksQyYmbnVsbCE9aC5jb21wb25lbnREaWRVcGRhdGUmJmguX19oLnB1c2goZnVuY3Rpb24oKXtoLmNvbXBvbmVudERpZFVwZGF0ZSh2LHksZyl9KX1pZihoLmNvbnRleHQ9TSxoLnByb3BzPWIsaC5fX1A9bixoLl9fZT0hMSxJPWwuX19yLEE9MCxDKXtmb3IoaC5zdGF0ZT1oLl9fcyxoLl9fZD0hMSxJJiZJKHUpLGE9aC5yZW5kZXIoaC5wcm9wcyxoLnN0YXRlLGguY29udGV4dCksSD0wO0g8aC5fc2IubGVuZ3RoO0grKyloLl9faC5wdXNoKGguX3NiW0hdKTtoLl9zYj1bXX1lbHNlIGRve2guX19kPSExLEkmJkkodSksYT1oLnJlbmRlcihoLnByb3BzLGguc3RhdGUsaC5jb250ZXh0KSxoLnN0YXRlPWguX19zfXdoaWxlKGguX19kJiYrK0E8MjUpO2guc3RhdGU9aC5fX3MsbnVsbCE9aC5nZXRDaGlsZENvbnRleHQmJihpPXcodyh7fSxpKSxoLmdldENoaWxkQ29udGV4dCgpKSksQyYmIXAmJm51bGwhPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUmJihnPWguZ2V0U25hcHNob3RCZWZvcmVVcGRhdGUodix5KSksZj0kKG4sZChMPW51bGwhPWEmJmEudHlwZT09PWsmJm51bGw9PWEua2V5P2EucHJvcHMuY2hpbGRyZW46YSk/TDpbTF0sdSx0LGkscixvLGUsZixjLHMpLGguYmFzZT11Ll9fZSx1Ll9fdSY9LTE2MSxoLl9faC5sZW5ndGgmJmUucHVzaChoKSxtJiYoaC5fX0U9aC5fXz1udWxsKX1jYXRjaChuKXtpZih1Ll9fdj1udWxsLGN8fG51bGwhPW8paWYobi50aGVuKXtmb3IodS5fX3V8PWM/MTYwOjEyODtmJiY4PT1mLm5vZGVUeXBlJiZmLm5leHRTaWJsaW5nOylmPWYubmV4dFNpYmxpbmc7b1tvLmluZGV4T2YoZildPW51bGwsdS5fX2U9Zn1lbHNlIGZvcihUPW8ubGVuZ3RoO1QtLTspXyhvW1RdKTtlbHNlIHUuX19lPXQuX19lLHUuX19rPXQuX19rO2wuX19lKG4sdSx0KX1lbHNlIG51bGw9PW8mJnUuX192PT10Ll9fdj8odS5fX2s9dC5fX2ssdS5fX2U9dC5fX2UpOmY9dS5fX2U9Tih0Ll9fZSx1LHQsaSxyLG8sZSxjLHMpO3JldHVybihhPWwuZGlmZmVkKSYmYSh1KSwxMjgmdS5fX3U/dm9pZCAwOmZ9ZnVuY3Rpb24geihuLHUsdCl7Zm9yKHZhciBpPTA7aTx0Lmxlbmd0aDtpKyspVih0W2ldLHRbKytpXSx0WysraV0pO2wuX19jJiZsLl9fYyh1LG4pLG4uc29tZShmdW5jdGlvbih1KXt0cnl7bj11Ll9faCx1Ll9faD1bXSxuLnNvbWUoZnVuY3Rpb24obil7bi5jYWxsKHUpfSl9Y2F0Y2gobil7bC5fX2Uobix1Ll9fdil9fSl9ZnVuY3Rpb24gTih1LHQsaSxyLG8sZSxmLGMscyl7dmFyIGEsaCx2LHksdyxnLG0sYj1pLnByb3BzLGs9dC5wcm9wcyx4PXQudHlwZTtpZihcInN2Z1wiPT14P289XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiOlwibWF0aFwiPT14P289XCJodHRwOi8vd3d3LnczLm9yZy8xOTk4L01hdGgvTWF0aE1MXCI6b3x8KG89XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIpLG51bGwhPWUpZm9yKGE9MDthPGUubGVuZ3RoO2ErKylpZigodz1lW2FdKSYmXCJzZXRBdHRyaWJ1dGVcImluIHc9PSEheCYmKHg/dy5sb2NhbE5hbWU9PXg6Mz09dy5ub2RlVHlwZSkpe3U9dyxlW2FdPW51bGw7YnJlYWt9aWYobnVsbD09dSl7aWYobnVsbD09eClyZXR1cm4gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoayk7dT1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMobyx4LGsuaXMmJmspLGMmJihsLl9fbSYmbC5fX20odCxlKSxjPSExKSxlPW51bGx9aWYobnVsbD09PXgpYj09PWt8fGMmJnUuZGF0YT09PWt8fCh1LmRhdGE9ayk7ZWxzZXtpZihlPWUmJm4uY2FsbCh1LmNoaWxkTm9kZXMpLGI9aS5wcm9wc3x8cCwhYyYmbnVsbCE9ZSlmb3IoYj17fSxhPTA7YTx1LmF0dHJpYnV0ZXMubGVuZ3RoO2ErKyliWyh3PXUuYXR0cmlidXRlc1thXSkubmFtZV09dy52YWx1ZTtmb3IoYSBpbiBiKWlmKHc9YlthXSxcImNoaWxkcmVuXCI9PWEpO2Vsc2UgaWYoXCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT1hKXY9dztlbHNlIGlmKCEoYSBpbiBrKSl7aWYoXCJ2YWx1ZVwiPT1hJiZcImRlZmF1bHRWYWx1ZVwiaW4ga3x8XCJjaGVja2VkXCI9PWEmJlwiZGVmYXVsdENoZWNrZWRcImluIGspY29udGludWU7Rih1LGEsbnVsbCx3LG8pfWZvcihhIGluIGspdz1rW2FdLFwiY2hpbGRyZW5cIj09YT95PXc6XCJkYW5nZXJvdXNseVNldElubmVySFRNTFwiPT1hP2g9dzpcInZhbHVlXCI9PWE/Zz13OlwiY2hlY2tlZFwiPT1hP209dzpjJiZcImZ1bmN0aW9uXCIhPXR5cGVvZiB3fHxiW2FdPT09d3x8Rih1LGEsdyxiW2FdLG8pO2lmKGgpY3x8diYmKGguX19odG1sPT09di5fX2h0bWx8fGguX19odG1sPT09dS5pbm5lckhUTUwpfHwodS5pbm5lckhUTUw9aC5fX2h0bWwpLHQuX19rPVtdO2Vsc2UgaWYodiYmKHUuaW5uZXJIVE1MPVwiXCIpLCQodSxkKHkpP3k6W3ldLHQsaSxyLFwiZm9yZWlnbk9iamVjdFwiPT14P1wiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiOm8sZSxmLGU/ZVswXTppLl9fayYmQyhpLDApLGMscyksbnVsbCE9ZSlmb3IoYT1lLmxlbmd0aDthLS07KV8oZVthXSk7Y3x8KGE9XCJ2YWx1ZVwiLFwicHJvZ3Jlc3NcIj09eCYmbnVsbD09Zz91LnJlbW92ZUF0dHJpYnV0ZShcInZhbHVlXCIpOnZvaWQgMCE9PWcmJihnIT09dVthXXx8XCJwcm9ncmVzc1wiPT14JiYhZ3x8XCJvcHRpb25cIj09eCYmZyE9PWJbYV0pJiZGKHUsYSxnLGJbYV0sbyksYT1cImNoZWNrZWRcIix2b2lkIDAhPT1tJiZtIT09dVthXSYmRih1LGEsbSxiW2FdLG8pKX1yZXR1cm4gdX1mdW5jdGlvbiBWKG4sdSx0KXt0cnl7aWYoXCJmdW5jdGlvblwiPT10eXBlb2Ygbil7dmFyIGk9XCJmdW5jdGlvblwiPT10eXBlb2Ygbi5fX3U7aSYmbi5fX3UoKSxpJiZudWxsPT11fHwobi5fX3U9bih1KSl9ZWxzZSBuLmN1cnJlbnQ9dX1jYXRjaChuKXtsLl9fZShuLHQpfX1mdW5jdGlvbiBxKG4sdSx0KXt2YXIgaSxyO2lmKGwudW5tb3VudCYmbC51bm1vdW50KG4pLChpPW4ucmVmKSYmKGkuY3VycmVudCYmaS5jdXJyZW50IT09bi5fX2V8fFYoaSxudWxsLHUpKSxudWxsIT0oaT1uLl9fYykpe2lmKGkuY29tcG9uZW50V2lsbFVubW91bnQpdHJ5e2kuY29tcG9uZW50V2lsbFVubW91bnQoKX1jYXRjaChuKXtsLl9fZShuLHUpfWkuYmFzZT1pLl9fUD1udWxsfWlmKGk9bi5fX2spZm9yKHI9MDtyPGkubGVuZ3RoO3IrKylpW3JdJiZxKGlbcl0sdSx0fHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBuLnR5cGUpO3R8fF8obi5fX2UpLG4uX19jPW4uX189bi5fX2U9dm9pZCAwfWZ1bmN0aW9uIEIobixsLHUpe3JldHVybiB0aGlzLmNvbnN0cnVjdG9yKG4sdSl9ZnVuY3Rpb24gRCh1LHQsaSl7dmFyIHIsbyxlLGY7dD09ZG9jdW1lbnQmJih0PWRvY3VtZW50LmRvY3VtZW50RWxlbWVudCksbC5fXyYmbC5fXyh1LHQpLG89KHI9XCJmdW5jdGlvblwiPT10eXBlb2YgaSk/bnVsbDppJiZpLl9fa3x8dC5fX2ssZT1bXSxmPVtdLGoodCx1PSghciYmaXx8dCkuX19rPWcoayxudWxsLFt1XSksb3x8cCxwLHQubmFtZXNwYWNlVVJJLCFyJiZpP1tpXTpvP251bGw6dC5maXJzdENoaWxkP24uY2FsbCh0LmNoaWxkTm9kZXMpOm51bGwsZSwhciYmaT9pOm8/by5fX2U6dC5maXJzdENoaWxkLHIsZikseihlLHUsZil9ZnVuY3Rpb24gRShuLGwpe0QobixsLEUpfWZ1bmN0aW9uIEcobCx1LHQpe3ZhciBpLHIsbyxlLGY9dyh7fSxsLnByb3BzKTtmb3IobyBpbiBsLnR5cGUmJmwudHlwZS5kZWZhdWx0UHJvcHMmJihlPWwudHlwZS5kZWZhdWx0UHJvcHMpLHUpXCJrZXlcIj09bz9pPXVbb106XCJyZWZcIj09bz9yPXVbb106ZltvXT12b2lkIDA9PT11W29dJiZ2b2lkIDAhPT1lP2Vbb106dVtvXTtyZXR1cm4gYXJndW1lbnRzLmxlbmd0aD4yJiYoZi5jaGlsZHJlbj1hcmd1bWVudHMubGVuZ3RoPjM/bi5jYWxsKGFyZ3VtZW50cywyKTp0KSxtKGwudHlwZSxmLGl8fGwua2V5LHJ8fGwucmVmLG51bGwpfWZ1bmN0aW9uIEoobixsKXt2YXIgdT17X19jOmw9XCJfX2NDXCIraCsrLF9fOm4sQ29uc3VtZXI6ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5jaGlsZHJlbihsKX0sUHJvdmlkZXI6ZnVuY3Rpb24obil7dmFyIHUsdDtyZXR1cm4gdGhpcy5nZXRDaGlsZENvbnRleHR8fCh1PW5ldyBTZXQsKHQ9e30pW2xdPXRoaXMsdGhpcy5nZXRDaGlsZENvbnRleHQ9ZnVuY3Rpb24oKXtyZXR1cm4gdH0sdGhpcy5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3U9bnVsbH0sdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9ZnVuY3Rpb24obil7dGhpcy5wcm9wcy52YWx1ZSE9PW4udmFsdWUmJnUuZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fZT0hMCxNKG4pfSl9LHRoaXMuc3ViPWZ1bmN0aW9uKG4pe3UuYWRkKG4pO3ZhciBsPW4uY29tcG9uZW50V2lsbFVubW91bnQ7bi5jb21wb25lbnRXaWxsVW5tb3VudD1mdW5jdGlvbigpe3UmJnUuZGVsZXRlKG4pLGwmJmwuY2FsbChuKX19KSxuLmNoaWxkcmVufX07cmV0dXJuIHUuUHJvdmlkZXIuX189dS5Db25zdW1lci5jb250ZXh0VHlwZT11fW49di5zbGljZSxsPXtfX2U6ZnVuY3Rpb24obixsLHUsdCl7Zm9yKHZhciBpLHIsbztsPWwuX187KWlmKChpPWwuX19jKSYmIWkuX18pdHJ5e2lmKChyPWkuY29uc3RydWN0b3IpJiZudWxsIT1yLmdldERlcml2ZWRTdGF0ZUZyb21FcnJvciYmKGkuc2V0U3RhdGUoci5nZXREZXJpdmVkU3RhdGVGcm9tRXJyb3IobikpLG89aS5fX2QpLG51bGwhPWkuY29tcG9uZW50RGlkQ2F0Y2gmJihpLmNvbXBvbmVudERpZENhdGNoKG4sdHx8e30pLG89aS5fX2QpLG8pcmV0dXJuIGkuX19FPWl9Y2F0Y2gobCl7bj1sfXRocm93IG59fSx1PTAsdD1mdW5jdGlvbihuKXtyZXR1cm4gbnVsbCE9biYmbnVsbD09bi5jb25zdHJ1Y3Rvcn0seC5wcm90b3R5cGUuc2V0U3RhdGU9ZnVuY3Rpb24obixsKXt2YXIgdTt1PW51bGwhPXRoaXMuX19zJiZ0aGlzLl9fcyE9PXRoaXMuc3RhdGU/dGhpcy5fX3M6dGhpcy5fX3M9dyh7fSx0aGlzLnN0YXRlKSxcImZ1bmN0aW9uXCI9PXR5cGVvZiBuJiYobj1uKHcoe30sdSksdGhpcy5wcm9wcykpLG4mJncodSxuKSxudWxsIT1uJiZ0aGlzLl9fdiYmKGwmJnRoaXMuX3NiLnB1c2gobCksTSh0aGlzKSl9LHgucHJvdG90eXBlLmZvcmNlVXBkYXRlPWZ1bmN0aW9uKG4pe3RoaXMuX192JiYodGhpcy5fX2U9ITAsbiYmdGhpcy5fX2gucHVzaChuKSxNKHRoaXMpKX0seC5wcm90b3R5cGUucmVuZGVyPWssaT1bXSxvPVwiZnVuY3Rpb25cIj09dHlwZW9mIFByb21pc2U/UHJvbWlzZS5wcm90b3R5cGUudGhlbi5iaW5kKFByb21pc2UucmVzb2x2ZSgpKTpzZXRUaW1lb3V0LGU9ZnVuY3Rpb24obixsKXtyZXR1cm4gbi5fX3YuX19iLWwuX192Ll9fYn0sUC5fX3I9MCxmPS8oUG9pbnRlckNhcHR1cmUpJHxDYXB0dXJlJC9pLGM9MCxzPU8oITEpLGE9TyghMCksaD0wO2V4cG9ydHt4IGFzIENvbXBvbmVudCxrIGFzIEZyYWdtZW50LEcgYXMgY2xvbmVFbGVtZW50LEogYXMgY3JlYXRlQ29udGV4dCxnIGFzIGNyZWF0ZUVsZW1lbnQsYiBhcyBjcmVhdGVSZWYsZyBhcyBoLEUgYXMgaHlkcmF0ZSx0IGFzIGlzVmFsaWRFbGVtZW50LGwgYXMgb3B0aW9ucyxEIGFzIHJlbmRlcixIIGFzIHRvQ2hpbGRBcnJheX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcmVhY3QubW9kdWxlLmpzLm1hcFxuIiwgImltcG9ydHtvcHRpb25zIGFzIG59ZnJvbVwicHJlYWN0XCI7dmFyIHQscix1LGksbz0wLGY9W10sYz1uLGU9Yy5fX2IsYT1jLl9fcix2PWMuZGlmZmVkLGw9Yy5fX2MsbT1jLnVubW91bnQscz1jLl9fO2Z1bmN0aW9uIGQobix0KXtjLl9faCYmYy5fX2gocixuLG98fHQpLG89MDt2YXIgdT1yLl9fSHx8KHIuX19IPXtfXzpbXSxfX2g6W119KTtyZXR1cm4gbj49dS5fXy5sZW5ndGgmJnUuX18ucHVzaCh7fSksdS5fX1tuXX1mdW5jdGlvbiBoKG4pe3JldHVybiBvPTEscChELG4pfWZ1bmN0aW9uIHAobix1LGkpe3ZhciBvPWQodCsrLDIpO2lmKG8udD1uLCFvLl9fYyYmKG8uX189W2k/aSh1KTpEKHZvaWQgMCx1KSxmdW5jdGlvbihuKXt2YXIgdD1vLl9fTj9vLl9fTlswXTpvLl9fWzBdLHI9by50KHQsbik7dCE9PXImJihvLl9fTj1bcixvLl9fWzFdXSxvLl9fYy5zZXRTdGF0ZSh7fSkpfV0sby5fX2M9ciwhci51KSl7dmFyIGY9ZnVuY3Rpb24obix0LHIpe2lmKCFvLl9fYy5fX0gpcmV0dXJuITA7dmFyIHU9by5fX2MuX19ILl9fLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hIW4uX19jfSk7aWYodS5ldmVyeShmdW5jdGlvbihuKXtyZXR1cm4hbi5fX059KSlyZXR1cm4hY3x8Yy5jYWxsKHRoaXMsbix0LHIpO3ZhciBpPW8uX19jLnByb3BzIT09bjtyZXR1cm4gdS5mb3JFYWNoKGZ1bmN0aW9uKG4pe2lmKG4uX19OKXt2YXIgdD1uLl9fWzBdO24uX189bi5fX04sbi5fX049dm9pZCAwLHQhPT1uLl9fWzBdJiYoaT0hMCl9fSksYyYmYy5jYWxsKHRoaXMsbix0LHIpfHxpfTtyLnU9ITA7dmFyIGM9ci5zaG91bGRDb21wb25lbnRVcGRhdGUsZT1yLmNvbXBvbmVudFdpbGxVcGRhdGU7ci5jb21wb25lbnRXaWxsVXBkYXRlPWZ1bmN0aW9uKG4sdCxyKXtpZih0aGlzLl9fZSl7dmFyIHU9YztjPXZvaWQgMCxmKG4sdCxyKSxjPXV9ZSYmZS5jYWxsKHRoaXMsbix0LHIpfSxyLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mfXJldHVybiBvLl9fTnx8by5fX31mdW5jdGlvbiB5KG4sdSl7dmFyIGk9ZCh0KyssMyk7IWMuX19zJiZDKGkuX19ILHUpJiYoaS5fXz1uLGkuaT11LHIuX19ILl9faC5wdXNoKGkpKX1mdW5jdGlvbiBfKG4sdSl7dmFyIGk9ZCh0KyssNCk7IWMuX19zJiZDKGkuX19ILHUpJiYoaS5fXz1uLGkuaT11LHIuX19oLnB1c2goaSkpfWZ1bmN0aW9uIEEobil7cmV0dXJuIG89NSxUKGZ1bmN0aW9uKCl7cmV0dXJue2N1cnJlbnQ6bn19LFtdKX1mdW5jdGlvbiBGKG4sdCxyKXtvPTYsXyhmdW5jdGlvbigpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIG4/KG4odCgpKSxmdW5jdGlvbigpe3JldHVybiBuKG51bGwpfSk6bj8obi5jdXJyZW50PXQoKSxmdW5jdGlvbigpe3JldHVybiBuLmN1cnJlbnQ9bnVsbH0pOnZvaWQgMH0sbnVsbD09cj9yOnIuY29uY2F0KG4pKX1mdW5jdGlvbiBUKG4scil7dmFyIHU9ZCh0KyssNyk7cmV0dXJuIEModS5fX0gscikmJih1Ll9fPW4oKSx1Ll9fSD1yLHUuX19oPW4pLHUuX199ZnVuY3Rpb24gcShuLHQpe3JldHVybiBvPTgsVChmdW5jdGlvbigpe3JldHVybiBufSx0KX1mdW5jdGlvbiB4KG4pe3ZhciB1PXIuY29udGV4dFtuLl9fY10saT1kKHQrKyw5KTtyZXR1cm4gaS5jPW4sdT8obnVsbD09aS5fXyYmKGkuX189ITAsdS5zdWIocikpLHUucHJvcHMudmFsdWUpOm4uX199ZnVuY3Rpb24gUChuLHQpe2MudXNlRGVidWdWYWx1ZSYmYy51c2VEZWJ1Z1ZhbHVlKHQ/dChuKTpuKX1mdW5jdGlvbiBiKG4pe3ZhciB1PWQodCsrLDEwKSxpPWgoKTtyZXR1cm4gdS5fXz1uLHIuY29tcG9uZW50RGlkQ2F0Y2h8fChyLmNvbXBvbmVudERpZENhdGNoPWZ1bmN0aW9uKG4sdCl7dS5fXyYmdS5fXyhuLHQpLGlbMV0obil9KSxbaVswXSxmdW5jdGlvbigpe2lbMV0odm9pZCAwKX1dfWZ1bmN0aW9uIGcoKXt2YXIgbj1kKHQrKywxMSk7aWYoIW4uX18pe2Zvcih2YXIgdT1yLl9fdjtudWxsIT09dSYmIXUuX19tJiZudWxsIT09dS5fXzspdT11Ll9fO3ZhciBpPXUuX19tfHwodS5fX209WzAsMF0pO24uX189XCJQXCIraVswXStcIi1cIitpWzFdKyt9cmV0dXJuIG4uX199ZnVuY3Rpb24gaigpe2Zvcih2YXIgbjtuPWYuc2hpZnQoKTspaWYobi5fX1AmJm4uX19IKXRyeXtuLl9fSC5fX2guZm9yRWFjaCh6KSxuLl9fSC5fX2guZm9yRWFjaChCKSxuLl9fSC5fX2g9W119Y2F0Y2godCl7bi5fX0guX19oPVtdLGMuX19lKHQsbi5fX3YpfX1jLl9fYj1mdW5jdGlvbihuKXtyPW51bGwsZSYmZShuKX0sYy5fXz1mdW5jdGlvbihuLHQpe24mJnQuX19rJiZ0Ll9fay5fX20mJihuLl9fbT10Ll9fay5fX20pLHMmJnMobix0KX0sYy5fX3I9ZnVuY3Rpb24obil7YSYmYShuKSx0PTA7dmFyIGk9KHI9bi5fX2MpLl9fSDtpJiYodT09PXI/KGkuX19oPVtdLHIuX19oPVtdLGkuX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLl9fTiYmKG4uX189bi5fX04pLG4uaT1uLl9fTj12b2lkIDB9KSk6KGkuX19oLmZvckVhY2goeiksaS5fX2guZm9yRWFjaChCKSxpLl9faD1bXSx0PTApKSx1PXJ9LGMuZGlmZmVkPWZ1bmN0aW9uKG4pe3YmJnYobik7dmFyIHQ9bi5fX2M7dCYmdC5fX0gmJih0Ll9fSC5fX2gubGVuZ3RoJiYoMSE9PWYucHVzaCh0KSYmaT09PWMucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHwoKGk9Yy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpfHx3KShqKSksdC5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXtuLmkmJihuLl9fSD1uLmkpLG4uaT12b2lkIDB9KSksdT1yPW51bGx9LGMuX19jPWZ1bmN0aW9uKG4sdCl7dC5zb21lKGZ1bmN0aW9uKG4pe3RyeXtuLl9faC5mb3JFYWNoKHopLG4uX19oPW4uX19oLmZpbHRlcihmdW5jdGlvbihuKXtyZXR1cm4hbi5fX3x8QihuKX0pfWNhdGNoKHIpe3Quc29tZShmdW5jdGlvbihuKXtuLl9faCYmKG4uX19oPVtdKX0pLHQ9W10sYy5fX2UocixuLl9fdil9fSksbCYmbChuLHQpfSxjLnVubW91bnQ9ZnVuY3Rpb24obil7bSYmbShuKTt2YXIgdCxyPW4uX19jO3ImJnIuX19IJiYoci5fX0guX18uZm9yRWFjaChmdW5jdGlvbihuKXt0cnl7eihuKX1jYXRjaChuKXt0PW59fSksci5fX0g9dm9pZCAwLHQmJmMuX19lKHQsci5fX3YpKX07dmFyIGs9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lO2Z1bmN0aW9uIHcobil7dmFyIHQscj1mdW5jdGlvbigpe2NsZWFyVGltZW91dCh1KSxrJiZjYW5jZWxBbmltYXRpb25GcmFtZSh0KSxzZXRUaW1lb3V0KG4pfSx1PXNldFRpbWVvdXQociwxMDApO2smJih0PXJlcXVlc3RBbmltYXRpb25GcmFtZShyKSl9ZnVuY3Rpb24geihuKXt2YXIgdD1yLHU9bi5fX2M7XCJmdW5jdGlvblwiPT10eXBlb2YgdSYmKG4uX19jPXZvaWQgMCx1KCkpLHI9dH1mdW5jdGlvbiBCKG4pe3ZhciB0PXI7bi5fX2M9bi5fXygpLHI9dH1mdW5jdGlvbiBDKG4sdCl7cmV0dXJuIW58fG4ubGVuZ3RoIT09dC5sZW5ndGh8fHQuc29tZShmdW5jdGlvbih0LHIpe3JldHVybiB0IT09bltyXX0pfWZ1bmN0aW9uIEQobix0KXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0P3Qobik6dH1leHBvcnR7cSBhcyB1c2VDYWxsYmFjayx4IGFzIHVzZUNvbnRleHQsUCBhcyB1c2VEZWJ1Z1ZhbHVlLHkgYXMgdXNlRWZmZWN0LGIgYXMgdXNlRXJyb3JCb3VuZGFyeSxnIGFzIHVzZUlkLEYgYXMgdXNlSW1wZXJhdGl2ZUhhbmRsZSxfIGFzIHVzZUxheW91dEVmZmVjdCxUIGFzIHVzZU1lbW8scCBhcyB1c2VSZWR1Y2VyLEEgYXMgdXNlUmVmLGggYXMgdXNlU3RhdGV9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aG9va3MubW9kdWxlLmpzLm1hcFxuIiwgImltcG9ydHtDb21wb25lbnQgYXMgbixjcmVhdGVFbGVtZW50IGFzIHQsb3B0aW9ucyBhcyBlLHRvQ2hpbGRBcnJheSBhcyByLEZyYWdtZW50IGFzIHUscmVuZGVyIGFzIG8saHlkcmF0ZSBhcyBpLGNyZWF0ZUNvbnRleHQgYXMgYyxjcmVhdGVSZWYgYXMgbCxjbG9uZUVsZW1lbnQgYXMgZn1mcm9tXCJwcmVhY3RcIjtleHBvcnR7Q29tcG9uZW50LEZyYWdtZW50LGNyZWF0ZUNvbnRleHQsY3JlYXRlRWxlbWVudCxjcmVhdGVSZWZ9ZnJvbVwicHJlYWN0XCI7aW1wb3J0e3VzZVN0YXRlIGFzIGEsdXNlTGF5b3V0RWZmZWN0IGFzIHMsdXNlRWZmZWN0IGFzIGgsdXNlQ2FsbGJhY2sgYXMgdix1c2VDb250ZXh0IGFzIGQsdXNlRGVidWdWYWx1ZSBhcyBwLHVzZUlkIGFzIG0sdXNlSW1wZXJhdGl2ZUhhbmRsZSBhcyB5LHVzZU1lbW8gYXMgXyx1c2VSZWR1Y2VyIGFzIGIsdXNlUmVmIGFzIFN9ZnJvbVwicHJlYWN0L2hvb2tzXCI7ZXhwb3J0KmZyb21cInByZWFjdC9ob29rc1wiO2Z1bmN0aW9uIGcobix0KXtmb3IodmFyIGUgaW4gdCluW2VdPXRbZV07cmV0dXJuIG59ZnVuY3Rpb24gRShuLHQpe2Zvcih2YXIgZSBpbiBuKWlmKFwiX19zb3VyY2VcIiE9PWUmJiEoZSBpbiB0KSlyZXR1cm4hMDtmb3IodmFyIHIgaW4gdClpZihcIl9fc291cmNlXCIhPT1yJiZuW3JdIT09dFtyXSlyZXR1cm4hMDtyZXR1cm4hMX1mdW5jdGlvbiBDKG4sdCl7dmFyIGU9dCgpLHI9YSh7dDp7X186ZSx1OnR9fSksdT1yWzBdLnQsbz1yWzFdO3JldHVybiBzKGZ1bmN0aW9uKCl7dS5fXz1lLHUudT10LHgodSkmJm8oe3Q6dX0pfSxbbixlLHRdKSxoKGZ1bmN0aW9uKCl7cmV0dXJuIHgodSkmJm8oe3Q6dX0pLG4oZnVuY3Rpb24oKXt4KHUpJiZvKHt0OnV9KX0pfSxbbl0pLGV9ZnVuY3Rpb24geChuKXt2YXIgdCxlLHI9bi51LHU9bi5fXzt0cnl7dmFyIG89cigpO3JldHVybiEoKHQ9dSk9PT0oZT1vKSYmKDAhPT10fHwxL3Q9PTEvZSl8fHQhPXQmJmUhPWUpfWNhdGNoKG4pe3JldHVybiEwfX1mdW5jdGlvbiBSKG4pe24oKX1mdW5jdGlvbiB3KG4pe3JldHVybiBufWZ1bmN0aW9uIGsoKXtyZXR1cm5bITEsUl19dmFyIEk9cztmdW5jdGlvbiBOKG4sdCl7dGhpcy5wcm9wcz1uLHRoaXMuY29udGV4dD10fWZ1bmN0aW9uIE0obixlKXtmdW5jdGlvbiByKG4pe3ZhciB0PXRoaXMucHJvcHMucmVmLHI9dD09bi5yZWY7cmV0dXJuIXImJnQmJih0LmNhbGw/dChudWxsKTp0LmN1cnJlbnQ9bnVsbCksZT8hZSh0aGlzLnByb3BzLG4pfHwhcjpFKHRoaXMucHJvcHMsbil9ZnVuY3Rpb24gdShlKXtyZXR1cm4gdGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGU9cix0KG4sZSl9cmV0dXJuIHUuZGlzcGxheU5hbWU9XCJNZW1vKFwiKyhuLmRpc3BsYXlOYW1lfHxuLm5hbWUpK1wiKVwiLHUucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9ITAsdS5fX2Y9ITAsdX0oTi5wcm90b3R5cGU9bmV3IG4pLmlzUHVyZVJlYWN0Q29tcG9uZW50PSEwLE4ucHJvdG90eXBlLnNob3VsZENvbXBvbmVudFVwZGF0ZT1mdW5jdGlvbihuLHQpe3JldHVybiBFKHRoaXMucHJvcHMsbil8fEUodGhpcy5zdGF0ZSx0KX07dmFyIFQ9ZS5fX2I7ZS5fX2I9ZnVuY3Rpb24obil7bi50eXBlJiZuLnR5cGUuX19mJiZuLnJlZiYmKG4ucHJvcHMucmVmPW4ucmVmLG4ucmVmPW51bGwpLFQmJlQobil9O3ZhciBBPVwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlN5bWJvbC5mb3ImJlN5bWJvbC5mb3IoXCJyZWFjdC5mb3J3YXJkX3JlZlwiKXx8MzkxMTtmdW5jdGlvbiBEKG4pe2Z1bmN0aW9uIHQodCl7dmFyIGU9Zyh7fSx0KTtyZXR1cm4gZGVsZXRlIGUucmVmLG4oZSx0LnJlZnx8bnVsbCl9cmV0dXJuIHQuJCR0eXBlb2Y9QSx0LnJlbmRlcj10LHQucHJvdG90eXBlLmlzUmVhY3RDb21wb25lbnQ9dC5fX2Y9ITAsdC5kaXNwbGF5TmFtZT1cIkZvcndhcmRSZWYoXCIrKG4uZGlzcGxheU5hbWV8fG4ubmFtZSkrXCIpXCIsdH12YXIgTD1mdW5jdGlvbihuLHQpe3JldHVybiBudWxsPT1uP251bGw6cihyKG4pLm1hcCh0KSl9LE89e21hcDpMLGZvckVhY2g6TCxjb3VudDpmdW5jdGlvbihuKXtyZXR1cm4gbj9yKG4pLmxlbmd0aDowfSxvbmx5OmZ1bmN0aW9uKG4pe3ZhciB0PXIobik7aWYoMSE9PXQubGVuZ3RoKXRocm93XCJDaGlsZHJlbi5vbmx5XCI7cmV0dXJuIHRbMF19LHRvQXJyYXk6cn0sRj1lLl9fZTtlLl9fZT1mdW5jdGlvbihuLHQsZSxyKXtpZihuLnRoZW4pZm9yKHZhciB1LG89dDtvPW8uX187KWlmKCh1PW8uX19jKSYmdS5fX2MpcmV0dXJuIG51bGw9PXQuX19lJiYodC5fX2U9ZS5fX2UsdC5fX2s9ZS5fX2spLHUuX19jKG4sdCk7RihuLHQsZSxyKX07dmFyIFU9ZS51bm1vdW50O2Z1bmN0aW9uIFYobix0LGUpe3JldHVybiBuJiYobi5fX2MmJm4uX19jLl9fSCYmKG4uX19jLl9fSC5fXy5mb3JFYWNoKGZ1bmN0aW9uKG4pe1wiZnVuY3Rpb25cIj09dHlwZW9mIG4uX19jJiZuLl9fYygpfSksbi5fX2MuX19IPW51bGwpLG51bGwhPShuPWcoe30sbikpLl9fYyYmKG4uX19jLl9fUD09PWUmJihuLl9fYy5fX1A9dCksbi5fX2M9bnVsbCksbi5fX2s9bi5fX2smJm4uX19rLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gVihuLHQsZSl9KSksbn1mdW5jdGlvbiBXKG4sdCxlKXtyZXR1cm4gbiYmZSYmKG4uX192PW51bGwsbi5fX2s9bi5fX2smJm4uX19rLm1hcChmdW5jdGlvbihuKXtyZXR1cm4gVyhuLHQsZSl9KSxuLl9fYyYmbi5fX2MuX19QPT09dCYmKG4uX19lJiZlLmFwcGVuZENoaWxkKG4uX19lKSxuLl9fYy5fX2U9ITAsbi5fX2MuX19QPWUpKSxufWZ1bmN0aW9uIFAoKXt0aGlzLl9fdT0wLHRoaXMubz1udWxsLHRoaXMuX19iPW51bGx9ZnVuY3Rpb24gaihuKXt2YXIgdD1uLl9fLl9fYztyZXR1cm4gdCYmdC5fX2EmJnQuX19hKG4pfWZ1bmN0aW9uIHoobil7dmFyIGUscix1O2Z1bmN0aW9uIG8obyl7aWYoZXx8KGU9bigpKS50aGVuKGZ1bmN0aW9uKG4pe3I9bi5kZWZhdWx0fHxufSxmdW5jdGlvbihuKXt1PW59KSx1KXRocm93IHU7aWYoIXIpdGhyb3cgZTtyZXR1cm4gdChyLG8pfXJldHVybiBvLmRpc3BsYXlOYW1lPVwiTGF6eVwiLG8uX19mPSEwLG99ZnVuY3Rpb24gQigpe3RoaXMuaT1udWxsLHRoaXMubD1udWxsfWUudW5tb3VudD1mdW5jdGlvbihuKXt2YXIgdD1uLl9fYzt0JiZ0Ll9fUiYmdC5fX1IoKSx0JiYzMiZuLl9fdSYmKG4udHlwZT1udWxsKSxVJiZVKG4pfSwoUC5wcm90b3R5cGU9bmV3IG4pLl9fYz1mdW5jdGlvbihuLHQpe3ZhciBlPXQuX19jLHI9dGhpcztudWxsPT1yLm8mJihyLm89W10pLHIuby5wdXNoKGUpO3ZhciB1PWooci5fX3YpLG89ITEsaT1mdW5jdGlvbigpe298fChvPSEwLGUuX19SPW51bGwsdT91KGMpOmMoKSl9O2UuX19SPWk7dmFyIGM9ZnVuY3Rpb24oKXtpZighLS1yLl9fdSl7aWYoci5zdGF0ZS5fX2Epe3ZhciBuPXIuc3RhdGUuX19hO3IuX192Ll9fa1swXT1XKG4sbi5fX2MuX19QLG4uX19jLl9fTyl9dmFyIHQ7Zm9yKHIuc2V0U3RhdGUoe19fYTpyLl9fYj1udWxsfSk7dD1yLm8ucG9wKCk7KXQuZm9yY2VVcGRhdGUoKX19O3IuX191Kyt8fDMyJnQuX191fHxyLnNldFN0YXRlKHtfX2E6ci5fX2I9ci5fX3YuX19rWzBdfSksbi50aGVuKGksaSl9LFAucHJvdG90eXBlLmNvbXBvbmVudFdpbGxVbm1vdW50PWZ1bmN0aW9uKCl7dGhpcy5vPVtdfSxQLnByb3RvdHlwZS5yZW5kZXI9ZnVuY3Rpb24obixlKXtpZih0aGlzLl9fYil7aWYodGhpcy5fX3YuX19rKXt2YXIgcj1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLG89dGhpcy5fX3YuX19rWzBdLl9fYzt0aGlzLl9fdi5fX2tbMF09Vih0aGlzLl9fYixyLG8uX19PPW8uX19QKX10aGlzLl9fYj1udWxsfXZhciBpPWUuX19hJiZ0KHUsbnVsbCxuLmZhbGxiYWNrKTtyZXR1cm4gaSYmKGkuX191Jj0tMzMpLFt0KHUsbnVsbCxlLl9fYT9udWxsOm4uY2hpbGRyZW4pLGldfTt2YXIgSD1mdW5jdGlvbihuLHQsZSl7aWYoKytlWzFdPT09ZVswXSYmbi5sLmRlbGV0ZSh0KSxuLnByb3BzLnJldmVhbE9yZGVyJiYoXCJ0XCIhPT1uLnByb3BzLnJldmVhbE9yZGVyWzBdfHwhbi5sLnNpemUpKWZvcihlPW4uaTtlOyl7Zm9yKDtlLmxlbmd0aD4zOyllLnBvcCgpKCk7aWYoZVsxXTxlWzBdKWJyZWFrO24uaT1lPWVbMl19fTtmdW5jdGlvbiBaKG4pe3JldHVybiB0aGlzLmdldENoaWxkQ29udGV4dD1mdW5jdGlvbigpe3JldHVybiBuLmNvbnRleHR9LG4uY2hpbGRyZW59ZnVuY3Rpb24gWShuKXt2YXIgZT10aGlzLHI9bi5oO2UuY29tcG9uZW50V2lsbFVubW91bnQ9ZnVuY3Rpb24oKXtvKG51bGwsZS52KSxlLnY9bnVsbCxlLmg9bnVsbH0sZS5oJiZlLmghPT1yJiZlLmNvbXBvbmVudFdpbGxVbm1vdW50KCksZS52fHwoZS5oPXIsZS52PXtub2RlVHlwZToxLHBhcmVudE5vZGU6cixjaGlsZE5vZGVzOltdLGNvbnRhaW5zOmZ1bmN0aW9uKCl7cmV0dXJuITB9LGFwcGVuZENoaWxkOmZ1bmN0aW9uKG4pe3RoaXMuY2hpbGROb2Rlcy5wdXNoKG4pLGUuaC5hcHBlbmRDaGlsZChuKX0saW5zZXJ0QmVmb3JlOmZ1bmN0aW9uKG4sdCl7dGhpcy5jaGlsZE5vZGVzLnB1c2gobiksZS5oLmluc2VydEJlZm9yZShuLHQpfSxyZW1vdmVDaGlsZDpmdW5jdGlvbihuKXt0aGlzLmNoaWxkTm9kZXMuc3BsaWNlKHRoaXMuY2hpbGROb2Rlcy5pbmRleE9mKG4pPj4+MSwxKSxlLmgucmVtb3ZlQ2hpbGQobil9fSksbyh0KFose2NvbnRleHQ6ZS5jb250ZXh0fSxuLl9fdiksZS52KX1mdW5jdGlvbiAkKG4sZSl7dmFyIHI9dChZLHtfX3Y6bixoOmV9KTtyZXR1cm4gci5jb250YWluZXJJbmZvPWUscn0oQi5wcm90b3R5cGU9bmV3IG4pLl9fYT1mdW5jdGlvbihuKXt2YXIgdD10aGlzLGU9aih0Ll9fdikscj10LmwuZ2V0KG4pO3JldHVybiByWzBdKyssZnVuY3Rpb24odSl7dmFyIG89ZnVuY3Rpb24oKXt0LnByb3BzLnJldmVhbE9yZGVyPyhyLnB1c2godSksSCh0LG4scikpOnUoKX07ZT9lKG8pOm8oKX19LEIucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbihuKXt0aGlzLmk9bnVsbCx0aGlzLmw9bmV3IE1hcDt2YXIgdD1yKG4uY2hpbGRyZW4pO24ucmV2ZWFsT3JkZXImJlwiYlwiPT09bi5yZXZlYWxPcmRlclswXSYmdC5yZXZlcnNlKCk7Zm9yKHZhciBlPXQubGVuZ3RoO2UtLTspdGhpcy5sLnNldCh0W2VdLHRoaXMuaT1bMSwwLHRoaXMuaV0pO3JldHVybiBuLmNoaWxkcmVufSxCLnByb3RvdHlwZS5jb21wb25lbnREaWRVcGRhdGU9Qi5wcm90b3R5cGUuY29tcG9uZW50RGlkTW91bnQ9ZnVuY3Rpb24oKXt2YXIgbj10aGlzO3RoaXMubC5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7SChuLGUsdCl9KX07dmFyIHE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLmZvciYmU3ltYm9sLmZvcihcInJlYWN0LmVsZW1lbnRcIil8fDYwMTAzLEc9L14oPzphY2NlbnR8YWxpZ25tZW50fGFyYWJpY3xiYXNlbGluZXxjYXB8Y2xpcCg/IVBhdGhVKXxjb2xvcnxkb21pbmFudHxmaWxsfGZsb29kfGZvbnR8Z2x5cGgoPyFSKXxob3JpenxpbWFnZSghUyl8bGV0dGVyfGxpZ2h0aW5nfG1hcmtlcig/IUh8V3xVKXxvdmVybGluZXxwYWludHxwb2ludGVyfHNoYXBlfHN0b3B8c3RyaWtldGhyb3VnaHxzdHJva2V8dGV4dCg/IUwpfHRyYW5zZm9ybXx1bmRlcmxpbmV8dW5pY29kZXx1bml0c3x2fHZlY3Rvcnx2ZXJ0fHdvcmR8d3JpdGluZ3x4KD8hQykpW0EtWl0vLEo9L15vbihBbml8VHJhfFRvdXxCZWZvcmVJbnB8Q29tcG8pLyxLPS9bQS1aMC05XS9nLFE9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGRvY3VtZW50LFg9ZnVuY3Rpb24obil7cmV0dXJuKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2woKT8vZmlsfGNoZXxyYWQvOi9maWx8Y2hlfHJhLykudGVzdChuKX07ZnVuY3Rpb24gbm4obix0LGUpe3JldHVybiBudWxsPT10Ll9fayYmKHQudGV4dENvbnRlbnQ9XCJcIiksbyhuLHQpLFwiZnVuY3Rpb25cIj09dHlwZW9mIGUmJmUoKSxuP24uX19jOm51bGx9ZnVuY3Rpb24gdG4obix0LGUpe3JldHVybiBpKG4sdCksXCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZSgpLG4/bi5fX2M6bnVsbH1uLnByb3RvdHlwZS5pc1JlYWN0Q29tcG9uZW50PXt9LFtcImNvbXBvbmVudFdpbGxNb3VudFwiLFwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wc1wiLFwiY29tcG9uZW50V2lsbFVwZGF0ZVwiXS5mb3JFYWNoKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShuLnByb3RvdHlwZSx0LHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXNbXCJVTlNBRkVfXCIrdF19LHNldDpmdW5jdGlvbihuKXtPYmplY3QuZGVmaW5lUHJvcGVydHkodGhpcyx0LHtjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITAsdmFsdWU6bn0pfX0pfSk7dmFyIGVuPWUuZXZlbnQ7ZnVuY3Rpb24gcm4oKXt9ZnVuY3Rpb24gdW4oKXtyZXR1cm4gdGhpcy5jYW5jZWxCdWJibGV9ZnVuY3Rpb24gb24oKXtyZXR1cm4gdGhpcy5kZWZhdWx0UHJldmVudGVkfWUuZXZlbnQ9ZnVuY3Rpb24obil7cmV0dXJuIGVuJiYobj1lbihuKSksbi5wZXJzaXN0PXJuLG4uaXNQcm9wYWdhdGlvblN0b3BwZWQ9dW4sbi5pc0RlZmF1bHRQcmV2ZW50ZWQ9b24sbi5uYXRpdmVFdmVudD1ufTt2YXIgY24sbG49e2VudW1lcmFibGU6ITEsY29uZmlndXJhYmxlOiEwLGdldDpmdW5jdGlvbigpe3JldHVybiB0aGlzLmNsYXNzfX0sZm49ZS52bm9kZTtlLnZub2RlPWZ1bmN0aW9uKG4pe1wic3RyaW5nXCI9PXR5cGVvZiBuLnR5cGUmJmZ1bmN0aW9uKG4pe3ZhciB0PW4ucHJvcHMsZT1uLnR5cGUsdT17fSxvPS0xPT09ZS5pbmRleE9mKFwiLVwiKTtmb3IodmFyIGkgaW4gdCl7dmFyIGM9dFtpXTtpZighKFwidmFsdWVcIj09PWkmJlwiZGVmYXVsdFZhbHVlXCJpbiB0JiZudWxsPT1jfHxRJiZcImNoaWxkcmVuXCI9PT1pJiZcIm5vc2NyaXB0XCI9PT1lfHxcImNsYXNzXCI9PT1pfHxcImNsYXNzTmFtZVwiPT09aSkpe3ZhciBsPWkudG9Mb3dlckNhc2UoKTtcImRlZmF1bHRWYWx1ZVwiPT09aSYmXCJ2YWx1ZVwiaW4gdCYmbnVsbD09dC52YWx1ZT9pPVwidmFsdWVcIjpcImRvd25sb2FkXCI9PT1pJiYhMD09PWM/Yz1cIlwiOlwidHJhbnNsYXRlXCI9PT1sJiZcIm5vXCI9PT1jP2M9ITE6XCJvXCI9PT1sWzBdJiZcIm5cIj09PWxbMV0/XCJvbmRvdWJsZWNsaWNrXCI9PT1sP2k9XCJvbmRibGNsaWNrXCI6XCJvbmNoYW5nZVwiIT09bHx8XCJpbnB1dFwiIT09ZSYmXCJ0ZXh0YXJlYVwiIT09ZXx8WCh0LnR5cGUpP1wib25mb2N1c1wiPT09bD9pPVwib25mb2N1c2luXCI6XCJvbmJsdXJcIj09PWw/aT1cIm9uZm9jdXNvdXRcIjpKLnRlc3QoaSkmJihpPWwpOmw9aT1cIm9uaW5wdXRcIjpvJiZHLnRlc3QoaSk/aT1pLnJlcGxhY2UoSyxcIi0kJlwiKS50b0xvd2VyQ2FzZSgpOm51bGw9PT1jJiYoYz12b2lkIDApLFwib25pbnB1dFwiPT09bCYmdVtpPWxdJiYoaT1cIm9uaW5wdXRDYXB0dXJlXCIpLHVbaV09Y319XCJzZWxlY3RcIj09ZSYmdS5tdWx0aXBsZSYmQXJyYXkuaXNBcnJheSh1LnZhbHVlKSYmKHUudmFsdWU9cih0LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9LTEhPXUudmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKX0pKSxcInNlbGVjdFwiPT1lJiZudWxsIT11LmRlZmF1bHRWYWx1ZSYmKHUudmFsdWU9cih0LmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKG4pe24ucHJvcHMuc2VsZWN0ZWQ9dS5tdWx0aXBsZT8tMSE9dS5kZWZhdWx0VmFsdWUuaW5kZXhPZihuLnByb3BzLnZhbHVlKTp1LmRlZmF1bHRWYWx1ZT09bi5wcm9wcy52YWx1ZX0pKSx0LmNsYXNzJiYhdC5jbGFzc05hbWU/KHUuY2xhc3M9dC5jbGFzcyxPYmplY3QuZGVmaW5lUHJvcGVydHkodSxcImNsYXNzTmFtZVwiLGxuKSk6KHQuY2xhc3NOYW1lJiYhdC5jbGFzc3x8dC5jbGFzcyYmdC5jbGFzc05hbWUpJiYodS5jbGFzcz11LmNsYXNzTmFtZT10LmNsYXNzTmFtZSksbi5wcm9wcz11fShuKSxuLiQkdHlwZW9mPXEsZm4mJmZuKG4pfTt2YXIgYW49ZS5fX3I7ZS5fX3I9ZnVuY3Rpb24obil7YW4mJmFuKG4pLGNuPW4uX19jfTt2YXIgc249ZS5kaWZmZWQ7ZS5kaWZmZWQ9ZnVuY3Rpb24obil7c24mJnNuKG4pO3ZhciB0PW4ucHJvcHMsZT1uLl9fZTtudWxsIT1lJiZcInRleHRhcmVhXCI9PT1uLnR5cGUmJlwidmFsdWVcImluIHQmJnQudmFsdWUhPT1lLnZhbHVlJiYoZS52YWx1ZT1udWxsPT10LnZhbHVlP1wiXCI6dC52YWx1ZSksY249bnVsbH07dmFyIGhuPXtSZWFjdEN1cnJlbnREaXNwYXRjaGVyOntjdXJyZW50OntyZWFkQ29udGV4dDpmdW5jdGlvbihuKXtyZXR1cm4gY24uX19uW24uX19jXS5wcm9wcy52YWx1ZX0sdXNlQ2FsbGJhY2s6dix1c2VDb250ZXh0OmQsdXNlRGVidWdWYWx1ZTpwLHVzZURlZmVycmVkVmFsdWU6dyx1c2VFZmZlY3Q6aCx1c2VJZDptLHVzZUltcGVyYXRpdmVIYW5kbGU6eSx1c2VJbnNlcnRpb25FZmZlY3Q6SSx1c2VMYXlvdXRFZmZlY3Q6cyx1c2VNZW1vOl8sdXNlUmVkdWNlcjpiLHVzZVJlZjpTLHVzZVN0YXRlOmEsdXNlU3luY0V4dGVybmFsU3RvcmU6Qyx1c2VUcmFuc2l0aW9uOmt9fX0sdm49XCIxOC4zLjFcIjtmdW5jdGlvbiBkbihuKXtyZXR1cm4gdC5iaW5kKG51bGwsbil9ZnVuY3Rpb24gcG4obil7cmV0dXJuISFuJiZuLiQkdHlwZW9mPT09cX1mdW5jdGlvbiBtbihuKXtyZXR1cm4gcG4obikmJm4udHlwZT09PXV9ZnVuY3Rpb24geW4obil7cmV0dXJuISFuJiYhIW4uZGlzcGxheU5hbWUmJihcInN0cmluZ1wiPT10eXBlb2Ygbi5kaXNwbGF5TmFtZXx8bi5kaXNwbGF5TmFtZSBpbnN0YW5jZW9mIFN0cmluZykmJm4uZGlzcGxheU5hbWUuc3RhcnRzV2l0aChcIk1lbW8oXCIpfWZ1bmN0aW9uIF9uKG4pe3JldHVybiBwbihuKT9mLmFwcGx5KG51bGwsYXJndW1lbnRzKTpufWZ1bmN0aW9uIGJuKG4pe3JldHVybiEhbi5fX2smJihvKG51bGwsbiksITApfWZ1bmN0aW9uIFNuKG4pe3JldHVybiBuJiYobi5iYXNlfHwxPT09bi5ub2RlVHlwZSYmbil8fG51bGx9dmFyIGduPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LEVuPWZ1bmN0aW9uKG4sdCl7cmV0dXJuIG4odCl9LENuPXUseG49cG4sUm49e3VzZVN0YXRlOmEsdXNlSWQ6bSx1c2VSZWR1Y2VyOmIsdXNlRWZmZWN0OmgsdXNlTGF5b3V0RWZmZWN0OnMsdXNlSW5zZXJ0aW9uRWZmZWN0OkksdXNlVHJhbnNpdGlvbjprLHVzZURlZmVycmVkVmFsdWU6dyx1c2VTeW5jRXh0ZXJuYWxTdG9yZTpDLHN0YXJ0VHJhbnNpdGlvbjpSLHVzZVJlZjpTLHVzZUltcGVyYXRpdmVIYW5kbGU6eSx1c2VNZW1vOl8sdXNlQ2FsbGJhY2s6dix1c2VDb250ZXh0OmQsdXNlRGVidWdWYWx1ZTpwLHZlcnNpb246XCIxOC4zLjFcIixDaGlsZHJlbjpPLHJlbmRlcjpubixoeWRyYXRlOnRuLHVubW91bnRDb21wb25lbnRBdE5vZGU6Ym4sY3JlYXRlUG9ydGFsOiQsY3JlYXRlRWxlbWVudDp0LGNyZWF0ZUNvbnRleHQ6YyxjcmVhdGVGYWN0b3J5OmRuLGNsb25lRWxlbWVudDpfbixjcmVhdGVSZWY6bCxGcmFnbWVudDp1LGlzVmFsaWRFbGVtZW50OnBuLGlzRWxlbWVudDp4bixpc0ZyYWdtZW50Om1uLGlzTWVtbzp5bixmaW5kRE9NTm9kZTpTbixDb21wb25lbnQ6bixQdXJlQ29tcG9uZW50Ok4sbWVtbzpNLGZvcndhcmRSZWY6RCxmbHVzaFN5bmM6RW4sdW5zdGFibGVfYmF0Y2hlZFVwZGF0ZXM6Z24sU3RyaWN0TW9kZTpDbixTdXNwZW5zZTpQLFN1c3BlbnNlTGlzdDpCLGxhenk6eixfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRDpobn07ZXhwb3J0e08gYXMgQ2hpbGRyZW4sTiBhcyBQdXJlQ29tcG9uZW50LENuIGFzIFN0cmljdE1vZGUsUCBhcyBTdXNwZW5zZSxCIGFzIFN1c3BlbnNlTGlzdCxobiBhcyBfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCxfbiBhcyBjbG9uZUVsZW1lbnQsZG4gYXMgY3JlYXRlRmFjdG9yeSwkIGFzIGNyZWF0ZVBvcnRhbCxSbiBhcyBkZWZhdWx0LFNuIGFzIGZpbmRET01Ob2RlLEVuIGFzIGZsdXNoU3luYyxEIGFzIGZvcndhcmRSZWYsdG4gYXMgaHlkcmF0ZSx4biBhcyBpc0VsZW1lbnQsbW4gYXMgaXNGcmFnbWVudCx5biBhcyBpc01lbW8scG4gYXMgaXNWYWxpZEVsZW1lbnQseiBhcyBsYXp5LE0gYXMgbWVtbyxubiBhcyByZW5kZXIsUiBhcyBzdGFydFRyYW5zaXRpb24sYm4gYXMgdW5tb3VudENvbXBvbmVudEF0Tm9kZSxnbiBhcyB1bnN0YWJsZV9iYXRjaGVkVXBkYXRlcyx3IGFzIHVzZURlZmVycmVkVmFsdWUsSSBhcyB1c2VJbnNlcnRpb25FZmZlY3QsQyBhcyB1c2VTeW5jRXh0ZXJuYWxTdG9yZSxrIGFzIHVzZVRyYW5zaXRpb24sdm4gYXMgdmVyc2lvbn07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb21wYXQubW9kdWxlLmpzLm1hcFxuIiwgImltcG9ydCBlLHt1c2VTdGF0ZSBhcyB0LHVzZUVmZmVjdCBhcyByLGNyZWF0ZUVsZW1lbnQgYXMgbn1mcm9tXCJyZWFjdFwiO2ltcG9ydHtjcmVhdGVQb3J0YWwgYXMgb31mcm9tXCJyZWFjdC1kb21cIjtmdW5jdGlvbiBpKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciByPTAsbj1BcnJheSh0KTtyPHQ7cisrKW5bcl09ZVtyXTtyZXR1cm4gbn1mdW5jdGlvbiBhKGUsdCxyLG4sbyxpLGEpe3RyeXt2YXIgYz1lW2ldKGEpLHU9Yy52YWx1ZX1jYXRjaChlKXtyZXR1cm4gdm9pZCByKGUpfWMuZG9uZT90KHUpOlByb21pc2UucmVzb2x2ZSh1KS50aGVuKG4sbyl9ZnVuY3Rpb24gYyhlKXtyZXR1cm4gZnVuY3Rpb24oKXt2YXIgdD10aGlzLHI9YXJndW1lbnRzO3JldHVybiBuZXcgUHJvbWlzZSgoZnVuY3Rpb24obixvKXt2YXIgaT1lLmFwcGx5KHQscik7ZnVuY3Rpb24gYyhlKXthKGksbixvLGMsdSxcIm5leHRcIixlKX1mdW5jdGlvbiB1KGUpe2EoaSxuLG8sYyx1LFwidGhyb3dcIixlKX1jKHZvaWQgMCl9KSl9fWZ1bmN0aW9uIHUoZSx0LHIpe3JldHVybiB0PXAodCksZnVuY3Rpb24oZSx0KXtpZih0JiYoXCJvYmplY3RcIj09dHlwZW9mIHR8fFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpKXJldHVybiB0O2lmKHZvaWQgMCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkRlcml2ZWQgY29uc3RydWN0b3JzIG1heSBvbmx5IHJldHVybiBvYmplY3Qgb3IgdW5kZWZpbmVkXCIpO3JldHVybiBmdW5jdGlvbihlKXtpZih2b2lkIDA9PT1lKXRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtyZXR1cm4gZX0oZSl9KGUsZCgpP1JlZmxlY3QuY29uc3RydWN0KHQscnx8W10scChlKS5jb25zdHJ1Y3Rvcik6dC5hcHBseShlLHIpKX1mdW5jdGlvbiBsKGUsdCl7aWYoIShlIGluc3RhbmNlb2YgdCkpdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKX1mdW5jdGlvbiBzKGUsdCxyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsXCJwcm90b3R5cGVcIix7d3JpdGFibGU6ITF9KSxlfWZ1bmN0aW9uIGYoZSx0LHIpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9dHlwZW9mIGV8fCFlKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgbj1yLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9dHlwZW9mIG4pcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT10eXBlb2YgdD90OnQrXCJcIn0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24gbSgpe3JldHVybiBtPU9iamVjdC5hc3NpZ24/T2JqZWN0LmFzc2lnbi5iaW5kKCk6ZnVuY3Rpb24oZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9YXJndW1lbnRzW3RdO2Zvcih2YXIgbiBpbiByKSh7fSkuaGFzT3duUHJvcGVydHkuY2FsbChyLG4pJiYoZVtuXT1yW25dKX1yZXR1cm4gZX0sbS5hcHBseShudWxsLGFyZ3VtZW50cyl9ZnVuY3Rpb24gcChlKXtyZXR1cm4gcD1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKTpmdW5jdGlvbihlKXtyZXR1cm4gZS5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihlKX0scChlKX1mdW5jdGlvbiB2KGUsdCl7aWYoXCJmdW5jdGlvblwiIT10eXBlb2YgdCYmbnVsbCE9PXQpdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpO2UucHJvdG90eXBlPU9iamVjdC5jcmVhdGUodCYmdC5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTplLHdyaXRhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMH19KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcInByb3RvdHlwZVwiLHt3cml0YWJsZTohMX0pLHQmJlMoZSx0KX1mdW5jdGlvbiBkKCl7dHJ5e3ZhciBlPSFCb29sZWFuLnByb3RvdHlwZS52YWx1ZU9mLmNhbGwoUmVmbGVjdC5jb25zdHJ1Y3QoQm9vbGVhbixbXSwoZnVuY3Rpb24oKXt9KSkpfWNhdGNoKGUpe31yZXR1cm4oZD1mdW5jdGlvbigpe3JldHVybiEhZX0pKCl9ZnVuY3Rpb24gaChlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24geShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9oKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7ZihlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6aChPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBnKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgcixuLG89ZnVuY3Rpb24oZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciByPXt9O2Zvcih2YXIgbiBpbiBlKWlmKHt9Lmhhc093blByb3BlcnR5LmNhbGwoZSxuKSl7aWYodC5pbmNsdWRlcyhuKSljb250aW51ZTtyW25dPWVbbl19cmV0dXJuIHJ9KGUsdCk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIGk9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtmb3Iobj0wO248aS5sZW5ndGg7bisrKXI9aVtuXSx0LmluY2x1ZGVzKHIpfHx7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUscikmJihvW3JdPWVbcl0pfXJldHVybiBvfWZ1bmN0aW9uIGIoKXtiPWZ1bmN0aW9uKCl7cmV0dXJuIHR9O3ZhciBlLHQ9e30scj1PYmplY3QucHJvdG90eXBlLG49ci5oYXNPd25Qcm9wZXJ0eSxvPU9iamVjdC5kZWZpbmVQcm9wZXJ0eXx8ZnVuY3Rpb24oZSx0LHIpe2VbdF09ci52YWx1ZX0saT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2w/U3ltYm9sOnt9LGE9aS5pdGVyYXRvcnx8XCJAQGl0ZXJhdG9yXCIsYz1pLmFzeW5jSXRlcmF0b3J8fFwiQEBhc3luY0l0ZXJhdG9yXCIsdT1pLnRvU3RyaW5nVGFnfHxcIkBAdG9TdHJpbmdUYWdcIjtmdW5jdGlvbiBsKGUsdCxyKXtyZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pLGVbdF19dHJ5e2woe30sXCJcIil9Y2F0Y2goZSl7bD1mdW5jdGlvbihlLHQscil7cmV0dXJuIGVbdF09cn19ZnVuY3Rpb24gcyhlLHQscixuKXt2YXIgaT10JiZ0LnByb3RvdHlwZSBpbnN0YW5jZW9mIHk/dDp5LGE9T2JqZWN0LmNyZWF0ZShpLnByb3RvdHlwZSksYz1uZXcgeChufHxbXSk7cmV0dXJuIG8oYSxcIl9pbnZva2VcIix7dmFsdWU6RChlLHIsYyl9KSxhfWZ1bmN0aW9uIGYoZSx0LHIpe3RyeXtyZXR1cm57dHlwZTpcIm5vcm1hbFwiLGFyZzplLmNhbGwodCxyKX19Y2F0Y2goZSl7cmV0dXJue3R5cGU6XCJ0aHJvd1wiLGFyZzplfX19dC53cmFwPXM7dmFyIG09XCJzdXNwZW5kZWRTdGFydFwiLHA9XCJzdXNwZW5kZWRZaWVsZFwiLHY9XCJleGVjdXRpbmdcIixkPVwiY29tcGxldGVkXCIsaD17fTtmdW5jdGlvbiB5KCl7fWZ1bmN0aW9uIGcoKXt9ZnVuY3Rpb24gUygpe312YXIgTz17fTtsKE8sYSwoZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pKTt2YXIgdz1PYmplY3QuZ2V0UHJvdG90eXBlT2YsRT13JiZ3KHcoQyhbXSkpKTtFJiZFIT09ciYmbi5jYWxsKEUsYSkmJihPPUUpO3ZhciBqPVMucHJvdG90eXBlPXkucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoTyk7ZnVuY3Rpb24gUChlKXtbXCJuZXh0XCIsXCJ0aHJvd1wiLFwicmV0dXJuXCJdLmZvckVhY2goKGZ1bmN0aW9uKHQpe2woZSx0LChmdW5jdGlvbihlKXtyZXR1cm4gdGhpcy5faW52b2tlKHQsZSl9KSl9KSl9ZnVuY3Rpb24gSShlLHQpe2Z1bmN0aW9uIHIobyxpLGEsYyl7dmFyIHU9ZihlW29dLGUsaSk7aWYoXCJ0aHJvd1wiIT09dS50eXBlKXt2YXIgbD11LmFyZyxzPWwudmFsdWU7cmV0dXJuIHMmJlwib2JqZWN0XCI9PXR5cGVvZiBzJiZuLmNhbGwocyxcIl9fYXdhaXRcIik/dC5yZXNvbHZlKHMuX19hd2FpdCkudGhlbigoZnVuY3Rpb24oZSl7cihcIm5leHRcIixlLGEsYyl9KSwoZnVuY3Rpb24oZSl7cihcInRocm93XCIsZSxhLGMpfSkpOnQucmVzb2x2ZShzKS50aGVuKChmdW5jdGlvbihlKXtsLnZhbHVlPWUsYShsKX0pLChmdW5jdGlvbihlKXtyZXR1cm4gcihcInRocm93XCIsZSxhLGMpfSkpfWModS5hcmcpfXZhciBpO28odGhpcyxcIl9pbnZva2VcIix7dmFsdWU6ZnVuY3Rpb24oZSxuKXtmdW5jdGlvbiBvKCl7cmV0dXJuIG5ldyB0KChmdW5jdGlvbih0LG8pe3IoZSxuLHQsbyl9KSl9cmV0dXJuIGk9aT9pLnRoZW4obyxvKTpvKCl9fSl9ZnVuY3Rpb24gRCh0LHIsbil7dmFyIG89bTtyZXR1cm4gZnVuY3Rpb24oaSxhKXtpZihvPT09dil0aHJvdyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7aWYobz09PWQpe2lmKFwidGhyb3dcIj09PWkpdGhyb3cgYTtyZXR1cm57dmFsdWU6ZSxkb25lOiEwfX1mb3Iobi5tZXRob2Q9aSxuLmFyZz1hOzspe3ZhciBjPW4uZGVsZWdhdGU7aWYoYyl7dmFyIHU9ayhjLG4pO2lmKHUpe2lmKHU9PT1oKWNvbnRpbnVlO3JldHVybiB1fX1pZihcIm5leHRcIj09PW4ubWV0aG9kKW4uc2VudD1uLl9zZW50PW4uYXJnO2Vsc2UgaWYoXCJ0aHJvd1wiPT09bi5tZXRob2Qpe2lmKG89PT1tKXRocm93IG89ZCxuLmFyZztuLmRpc3BhdGNoRXhjZXB0aW9uKG4uYXJnKX1lbHNlXCJyZXR1cm5cIj09PW4ubWV0aG9kJiZuLmFicnVwdChcInJldHVyblwiLG4uYXJnKTtvPXY7dmFyIGw9Zih0LHIsbik7aWYoXCJub3JtYWxcIj09PWwudHlwZSl7aWYobz1uLmRvbmU/ZDpwLGwuYXJnPT09aCljb250aW51ZTtyZXR1cm57dmFsdWU6bC5hcmcsZG9uZTpuLmRvbmV9fVwidGhyb3dcIj09PWwudHlwZSYmKG89ZCxuLm1ldGhvZD1cInRocm93XCIsbi5hcmc9bC5hcmcpfX19ZnVuY3Rpb24gayh0LHIpe3ZhciBuPXIubWV0aG9kLG89dC5pdGVyYXRvcltuXTtpZihvPT09ZSlyZXR1cm4gci5kZWxlZ2F0ZT1udWxsLFwidGhyb3dcIj09PW4mJnQuaXRlcmF0b3IucmV0dXJuJiYoci5tZXRob2Q9XCJyZXR1cm5cIixyLmFyZz1lLGsodCxyKSxcInRocm93XCI9PT1yLm1ldGhvZCl8fFwicmV0dXJuXCIhPT1uJiYoci5tZXRob2Q9XCJ0aHJvd1wiLHIuYXJnPW5ldyBUeXBlRXJyb3IoXCJUaGUgaXRlcmF0b3IgZG9lcyBub3QgcHJvdmlkZSBhICdcIituK1wiJyBtZXRob2RcIikpLGg7dmFyIGk9ZihvLHQuaXRlcmF0b3Isci5hcmcpO2lmKFwidGhyb3dcIj09PWkudHlwZSlyZXR1cm4gci5tZXRob2Q9XCJ0aHJvd1wiLHIuYXJnPWkuYXJnLHIuZGVsZWdhdGU9bnVsbCxoO3ZhciBhPWkuYXJnO3JldHVybiBhP2EuZG9uZT8oclt0LnJlc3VsdE5hbWVdPWEudmFsdWUsci5uZXh0PXQubmV4dExvYyxcInJldHVyblwiIT09ci5tZXRob2QmJihyLm1ldGhvZD1cIm5leHRcIixyLmFyZz1lKSxyLmRlbGVnYXRlPW51bGwsaCk6YTooci5tZXRob2Q9XCJ0aHJvd1wiLHIuYXJnPW5ldyBUeXBlRXJyb3IoXCJpdGVyYXRvciByZXN1bHQgaXMgbm90IGFuIG9iamVjdFwiKSxyLmRlbGVnYXRlPW51bGwsaCl9ZnVuY3Rpb24gQShlKXt2YXIgdD17dHJ5TG9jOmVbMF19OzEgaW4gZSYmKHQuY2F0Y2hMb2M9ZVsxXSksMiBpbiBlJiYodC5maW5hbGx5TG9jPWVbMl0sdC5hZnRlckxvYz1lWzNdKSx0aGlzLnRyeUVudHJpZXMucHVzaCh0KX1mdW5jdGlvbiBfKGUpe3ZhciB0PWUuY29tcGxldGlvbnx8e307dC50eXBlPVwibm9ybWFsXCIsZGVsZXRlIHQuYXJnLGUuY29tcGxldGlvbj10fWZ1bmN0aW9uIHgoZSl7dGhpcy50cnlFbnRyaWVzPVt7dHJ5TG9jOlwicm9vdFwifV0sZS5mb3JFYWNoKEEsdGhpcyksdGhpcy5yZXNldCghMCl9ZnVuY3Rpb24gQyh0KXtpZih0fHxcIlwiPT09dCl7dmFyIHI9dFthXTtpZihyKXJldHVybiByLmNhbGwodCk7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgdC5uZXh0KXJldHVybiB0O2lmKCFpc05hTih0Lmxlbmd0aCkpe3ZhciBvPS0xLGk9ZnVuY3Rpb24gcigpe2Zvcig7KytvPHQubGVuZ3RoOylpZihuLmNhbGwodCxvKSlyZXR1cm4gci52YWx1ZT10W29dLHIuZG9uZT0hMSxyO3JldHVybiByLnZhbHVlPWUsci5kb25lPSEwLHJ9O3JldHVybiBpLm5leHQ9aX19dGhyb3cgbmV3IFR5cGVFcnJvcih0eXBlb2YgdCtcIiBpcyBub3QgaXRlcmFibGVcIil9cmV0dXJuIGcucHJvdG90eXBlPVMsbyhqLFwiY29uc3RydWN0b3JcIix7dmFsdWU6Uyxjb25maWd1cmFibGU6ITB9KSxvKFMsXCJjb25zdHJ1Y3RvclwiLHt2YWx1ZTpnLGNvbmZpZ3VyYWJsZTohMH0pLGcuZGlzcGxheU5hbWU9bChTLHUsXCJHZW5lcmF0b3JGdW5jdGlvblwiKSx0LmlzR2VuZXJhdG9yRnVuY3Rpb249ZnVuY3Rpb24oZSl7dmFyIHQ9XCJmdW5jdGlvblwiPT10eXBlb2YgZSYmZS5jb25zdHJ1Y3RvcjtyZXR1cm4hIXQmJih0PT09Z3x8XCJHZW5lcmF0b3JGdW5jdGlvblwiPT09KHQuZGlzcGxheU5hbWV8fHQubmFtZSkpfSx0Lm1hcms9ZnVuY3Rpb24oZSl7cmV0dXJuIE9iamVjdC5zZXRQcm90b3R5cGVPZj9PYmplY3Quc2V0UHJvdG90eXBlT2YoZSxTKTooZS5fX3Byb3RvX189UyxsKGUsdSxcIkdlbmVyYXRvckZ1bmN0aW9uXCIpKSxlLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKGopLGV9LHQuYXdyYXA9ZnVuY3Rpb24oZSl7cmV0dXJue19fYXdhaXQ6ZX19LFAoSS5wcm90b3R5cGUpLGwoSS5wcm90b3R5cGUsYywoZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30pKSx0LkFzeW5jSXRlcmF0b3I9SSx0LmFzeW5jPWZ1bmN0aW9uKGUscixuLG8saSl7dm9pZCAwPT09aSYmKGk9UHJvbWlzZSk7dmFyIGE9bmV3IEkocyhlLHIsbixvKSxpKTtyZXR1cm4gdC5pc0dlbmVyYXRvckZ1bmN0aW9uKHIpP2E6YS5uZXh0KCkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZG9uZT9lLnZhbHVlOmEubmV4dCgpfSkpfSxQKGopLGwoaix1LFwiR2VuZXJhdG9yXCIpLGwoaixhLChmdW5jdGlvbigpe3JldHVybiB0aGlzfSkpLGwoaixcInRvU3RyaW5nXCIsKGZ1bmN0aW9uKCl7cmV0dXJuXCJbb2JqZWN0IEdlbmVyYXRvcl1cIn0pKSx0LmtleXM9ZnVuY3Rpb24oZSl7dmFyIHQ9T2JqZWN0KGUpLHI9W107Zm9yKHZhciBuIGluIHQpci5wdXNoKG4pO3JldHVybiByLnJldmVyc2UoKSxmdW5jdGlvbiBlKCl7Zm9yKDtyLmxlbmd0aDspe3ZhciBuPXIucG9wKCk7aWYobiBpbiB0KXJldHVybiBlLnZhbHVlPW4sZS5kb25lPSExLGV9cmV0dXJuIGUuZG9uZT0hMCxlfX0sdC52YWx1ZXM9Qyx4LnByb3RvdHlwZT17Y29uc3RydWN0b3I6eCxyZXNldDpmdW5jdGlvbih0KXtpZih0aGlzLnByZXY9MCx0aGlzLm5leHQ9MCx0aGlzLnNlbnQ9dGhpcy5fc2VudD1lLHRoaXMuZG9uZT0hMSx0aGlzLmRlbGVnYXRlPW51bGwsdGhpcy5tZXRob2Q9XCJuZXh0XCIsdGhpcy5hcmc9ZSx0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChfKSwhdClmb3IodmFyIHIgaW4gdGhpcylcInRcIj09PXIuY2hhckF0KDApJiZuLmNhbGwodGhpcyxyKSYmIWlzTmFOKCtyLnNsaWNlKDEpKSYmKHRoaXNbcl09ZSl9LHN0b3A6ZnVuY3Rpb24oKXt0aGlzLmRvbmU9ITA7dmFyIGU9dGhpcy50cnlFbnRyaWVzWzBdLmNvbXBsZXRpb247aWYoXCJ0aHJvd1wiPT09ZS50eXBlKXRocm93IGUuYXJnO3JldHVybiB0aGlzLnJ2YWx9LGRpc3BhdGNoRXhjZXB0aW9uOmZ1bmN0aW9uKHQpe2lmKHRoaXMuZG9uZSl0aHJvdyB0O3ZhciByPXRoaXM7ZnVuY3Rpb24gbyhuLG8pe3JldHVybiBjLnR5cGU9XCJ0aHJvd1wiLGMuYXJnPXQsci5uZXh0PW4sbyYmKHIubWV0aG9kPVwibmV4dFwiLHIuYXJnPWUpLCEhb31mb3IodmFyIGk9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO2k+PTA7LS1pKXt2YXIgYT10aGlzLnRyeUVudHJpZXNbaV0sYz1hLmNvbXBsZXRpb247aWYoXCJyb290XCI9PT1hLnRyeUxvYylyZXR1cm4gbyhcImVuZFwiKTtpZihhLnRyeUxvYzw9dGhpcy5wcmV2KXt2YXIgdT1uLmNhbGwoYSxcImNhdGNoTG9jXCIpLGw9bi5jYWxsKGEsXCJmaW5hbGx5TG9jXCIpO2lmKHUmJmwpe2lmKHRoaXMucHJldjxhLmNhdGNoTG9jKXJldHVybiBvKGEuY2F0Y2hMb2MsITApO2lmKHRoaXMucHJldjxhLmZpbmFsbHlMb2MpcmV0dXJuIG8oYS5maW5hbGx5TG9jKX1lbHNlIGlmKHUpe2lmKHRoaXMucHJldjxhLmNhdGNoTG9jKXJldHVybiBvKGEuY2F0Y2hMb2MsITApfWVsc2V7aWYoIWwpdGhyb3cgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtpZih0aGlzLnByZXY8YS5maW5hbGx5TG9jKXJldHVybiBvKGEuZmluYWxseUxvYyl9fX19LGFicnVwdDpmdW5jdGlvbihlLHQpe2Zvcih2YXIgcj10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7cj49MDstLXIpe3ZhciBvPXRoaXMudHJ5RW50cmllc1tyXTtpZihvLnRyeUxvYzw9dGhpcy5wcmV2JiZuLmNhbGwobyxcImZpbmFsbHlMb2NcIikmJnRoaXMucHJldjxvLmZpbmFsbHlMb2Mpe3ZhciBpPW87YnJlYWt9fWkmJihcImJyZWFrXCI9PT1lfHxcImNvbnRpbnVlXCI9PT1lKSYmaS50cnlMb2M8PXQmJnQ8PWkuZmluYWxseUxvYyYmKGk9bnVsbCk7dmFyIGE9aT9pLmNvbXBsZXRpb246e307cmV0dXJuIGEudHlwZT1lLGEuYXJnPXQsaT8odGhpcy5tZXRob2Q9XCJuZXh0XCIsdGhpcy5uZXh0PWkuZmluYWxseUxvYyxoKTp0aGlzLmNvbXBsZXRlKGEpfSxjb21wbGV0ZTpmdW5jdGlvbihlLHQpe2lmKFwidGhyb3dcIj09PWUudHlwZSl0aHJvdyBlLmFyZztyZXR1cm5cImJyZWFrXCI9PT1lLnR5cGV8fFwiY29udGludWVcIj09PWUudHlwZT90aGlzLm5leHQ9ZS5hcmc6XCJyZXR1cm5cIj09PWUudHlwZT8odGhpcy5ydmFsPXRoaXMuYXJnPWUuYXJnLHRoaXMubWV0aG9kPVwicmV0dXJuXCIsdGhpcy5uZXh0PVwiZW5kXCIpOlwibm9ybWFsXCI9PT1lLnR5cGUmJnQmJih0aGlzLm5leHQ9dCksaH0sZmluaXNoOmZ1bmN0aW9uKGUpe2Zvcih2YXIgdD10aGlzLnRyeUVudHJpZXMubGVuZ3RoLTE7dD49MDstLXQpe3ZhciByPXRoaXMudHJ5RW50cmllc1t0XTtpZihyLmZpbmFsbHlMb2M9PT1lKXJldHVybiB0aGlzLmNvbXBsZXRlKHIuY29tcGxldGlvbixyLmFmdGVyTG9jKSxfKHIpLGh9fSxjYXRjaDpmdW5jdGlvbihlKXtmb3IodmFyIHQ9dGhpcy50cnlFbnRyaWVzLmxlbmd0aC0xO3Q+PTA7LS10KXt2YXIgcj10aGlzLnRyeUVudHJpZXNbdF07aWYoci50cnlMb2M9PT1lKXt2YXIgbj1yLmNvbXBsZXRpb247aWYoXCJ0aHJvd1wiPT09bi50eXBlKXt2YXIgbz1uLmFyZztfKHIpfXJldHVybiBvfX10aHJvdyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKX0sZGVsZWdhdGVZaWVsZDpmdW5jdGlvbih0LHIsbil7cmV0dXJuIHRoaXMuZGVsZWdhdGU9e2l0ZXJhdG9yOkModCkscmVzdWx0TmFtZTpyLG5leHRMb2M6bn0sXCJuZXh0XCI9PT10aGlzLm1ldGhvZCYmKHRoaXMuYXJnPWUpLGh9fSx0fWZ1bmN0aW9uIFMoZSx0KXtyZXR1cm4gUz1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKTpmdW5jdGlvbihlLHQpe3JldHVybiBlLl9fcHJvdG9fXz10LGV9LFMoZSx0KX1mdW5jdGlvbiBPKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGV9KGUpfHxmdW5jdGlvbihlLHQpe3ZhciByPW51bGw9PWU/bnVsbDpcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZlW1N5bWJvbC5pdGVyYXRvcl18fGVbXCJAQGl0ZXJhdG9yXCJdO2lmKG51bGwhPXIpe3ZhciBuLG8saSxhLGM9W10sdT0hMCxsPSExO3RyeXtpZihpPShyPXIuY2FsbChlKSkubmV4dCwwPT09dCl7aWYoT2JqZWN0KHIpIT09cilyZXR1cm47dT0hMX1lbHNlIGZvcig7ISh1PShuPWkuY2FsbChyKSkuZG9uZSkmJihjLnB1c2gobi52YWx1ZSksYy5sZW5ndGghPT10KTt1PSEwKTt9Y2F0Y2goZSl7bD0hMCxvPWV9ZmluYWxseXt0cnl7aWYoIXUmJm51bGwhPXIucmV0dXJuJiYoYT1yLnJldHVybigpLE9iamVjdChhKSE9PWEpKXJldHVybn1maW5hbGx5e2lmKGwpdGhyb3cgb319cmV0dXJuIGN9fShlLHQpfHxFKGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiB3KGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBpKGUpfShlKXx8ZnVuY3Rpb24oZSl7aWYoXCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmbnVsbCE9ZVtTeW1ib2wuaXRlcmF0b3JdfHxudWxsIT1lW1wiQEBpdGVyYXRvclwiXSlyZXR1cm4gQXJyYXkuZnJvbShlKX0oZSl8fEUoZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gRShlLHQpe2lmKGUpe2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXJldHVybiBpKGUsdCk7dmFyIHI9e30udG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtyZXR1cm5cIk9iamVjdFwiPT09ciYmZS5jb25zdHJ1Y3RvciYmKHI9ZS5jb25zdHJ1Y3Rvci5uYW1lKSxcIk1hcFwiPT09cnx8XCJTZXRcIj09PXI/QXJyYXkuZnJvbShlKTpcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3Qocik/aShlLHQpOnZvaWQgMH19ZnVuY3Rpb24gaihlKXt2YXIgdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBNYXA/bmV3IE1hcDp2b2lkIDA7cmV0dXJuIGo9ZnVuY3Rpb24oZSl7aWYobnVsbD09PWV8fCFmdW5jdGlvbihlKXt0cnl7cmV0dXJuLTEhPT1GdW5jdGlvbi50b1N0cmluZy5jYWxsKGUpLmluZGV4T2YoXCJbbmF0aXZlIGNvZGVdXCIpfWNhdGNoKHQpe3JldHVyblwiZnVuY3Rpb25cIj09dHlwZW9mIGV9fShlKSlyZXR1cm4gZTtpZihcImZ1bmN0aW9uXCIhPXR5cGVvZiBlKXRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtpZih2b2lkIDAhPT10KXtpZih0LmhhcyhlKSlyZXR1cm4gdC5nZXQoZSk7dC5zZXQoZSxyKX1mdW5jdGlvbiByKCl7cmV0dXJuIGZ1bmN0aW9uKGUsdCxyKXtpZihkKCkpcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0LmFwcGx5KG51bGwsYXJndW1lbnRzKTt2YXIgbj1bbnVsbF07bi5wdXNoLmFwcGx5KG4sdCk7dmFyIG89bmV3KGUuYmluZC5hcHBseShlLG4pKTtyZXR1cm4gciYmUyhvLHIucHJvdG90eXBlKSxvfShlLGFyZ3VtZW50cyxwKHRoaXMpLmNvbnN0cnVjdG9yKX1yZXR1cm4gci5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlLnByb3RvdHlwZSx7Y29uc3RydWN0b3I6e3ZhbHVlOnIsZW51bWVyYWJsZTohMSx3cml0YWJsZTohMCxjb25maWd1cmFibGU6ITB9fSksUyhyLGUpfSxqKGUpfWZ1bmN0aW9uIFAoKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOlwiMTVcIixoZWlnaHQ6XCIxNVwiLGNsYXNzTmFtZTpcIkRvY1NlYXJjaC1Db250cm9sLUtleS1JY29uXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk00LjUwNSA0LjQ5NmgyTTUuNTA1IDUuNDk2djVNOC4yMTYgNC40OTZsLjA1NSA1Ljk5M00xMCA3LjVjLjMzMy4zMzMuNS42NjcuNSAxdjJNMTIuMzI2IDQuNXY1Ljk5Nk04LjM4NCA0LjQ5NmMxLjY3NCAwIDIuMTE2IDAgMi4xMTYgMS41cy0uNDQyIDEuNS0yLjExNiAxLjVNMy4yMDUgOS4zMDNjLS4wOS40NDgtLjI3NyAxLjIxLTEuMjQxIDEuMjAzQzEgMTAuNS41IDkuNTEzLjUgOFY3YzAtMS41Ny41LTIuNSAxLjQ2NC0yLjQ5NC45NjQuMDA2IDEuMTM0LjU5OCAxLjI0IDEuMzQyTTEyLjU1MyAxMC41aDEuOTUzXCIsc3Ryb2tlV2lkdGg6XCIxLjJcIixzdHJva2U6XCJjdXJyZW50Q29sb3JcIixmaWxsOlwibm9uZVwiLHN0cm9rZUxpbmVjYXA6XCJzcXVhcmVcIn0pKX1mdW5jdGlvbiBJKCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt3aWR0aDpcIjIwXCIsaGVpZ2h0OlwiMjBcIixjbGFzc05hbWU6XCJEb2NTZWFyY2gtU2VhcmNoLUljb25cIix2aWV3Qm94OlwiMCAwIDIwIDIwXCIsXCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwifSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTQuMzg2IDE0LjM4Nmw0LjA4NzcgNC4wODc3LTQuMDg3Ny00LjA4NzdjLTIuOTQxOCAyLjk0MTktNy43MTE1IDIuOTQxOS0xMC42NTMzIDAtMi45NDE5LTIuOTQxOC0yLjk0MTktNy43MTE1IDAtMTAuNjUzMyAyLjk0MTgtMi45NDE5IDcuNzExNS0yLjk0MTkgMTAuNjUzMyAwIDIuOTQxOSAyLjk0MTggMi45NDE5IDcuNzExNSAwIDEwLjY1MzN6XCIsc3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcIm5vbmVcIixmaWxsUnVsZTpcImV2ZW5vZGRcIixzdHJva2VMaW5lY2FwOlwicm91bmRcIixzdHJva2VMaW5lam9pbjpcInJvdW5kXCJ9KSl9dmFyIEQ9W1widHJhbnNsYXRpb25zXCJdLGs9XCJDdHJsXCI7dmFyIEE9ZS5mb3J3YXJkUmVmKChmdW5jdGlvbihuLG8pe3ZhciBpPW4udHJhbnNsYXRpb25zLGE9dm9pZCAwPT09aT97fTppLGM9ZyhuLEQpLHU9YS5idXR0b25UZXh0LGw9dm9pZCAwPT09dT9cIlNlYXJjaFwiOnUscz1hLmJ1dHRvbkFyaWFMYWJlbCxmPXZvaWQgMD09PXM/XCJTZWFyY2hcIjpzLHA9Tyh0KG51bGwpLDIpLHY9cFswXSxkPXBbMV07cigoZnVuY3Rpb24oKXtcInVuZGVmaW5lZFwiIT10eXBlb2YgbmF2aWdhdG9yJiYoLyhNYWN8aVBob25lfGlQb2R8aVBhZCkvaS50ZXN0KG5hdmlnYXRvci5wbGF0Zm9ybSk/ZChcIuKMmFwiKTpkKGspKX0pLFtdKTt2YXIgaD1PKHY9PT1rP1trLFwiQ3RybFwiLGUuY3JlYXRlRWxlbWVudChQLG51bGwpXTpbXCJNZXRhXCIsXCJDb21tYW5kXCIsdl0sMykseT1oWzBdLGI9aFsxXSxTPWhbMl07cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLG0oe3R5cGU6XCJidXR0b25cIixjbGFzc05hbWU6XCJEb2NTZWFyY2ggRG9jU2VhcmNoLUJ1dHRvblwiLFwiYXJpYS1sYWJlbFwiOlwiXCIuY29uY2F0KGYsXCIgKFwiKS5jb25jYXQoYixcIitLKVwiKX0sYyx7cmVmOm99KSxlLmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1CdXR0b24tQ29udGFpbmVyXCJ9LGUuY3JlYXRlRWxlbWVudChJLG51bGwpLGUuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUJ1dHRvbi1QbGFjZWhvbGRlclwifSxsKSksZS5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtQnV0dG9uLUtleXNcIn0sbnVsbCE9PXYmJmUuY3JlYXRlRWxlbWVudChlLkZyYWdtZW50LG51bGwsZS5jcmVhdGVFbGVtZW50KF8se3JlYWN0c1RvS2V5Onl9LFMpLGUuY3JlYXRlRWxlbWVudChfLHtyZWFjdHNUb0tleTpcImtcIn0sXCJLXCIpKSkpfSkpO2Z1bmN0aW9uIF8obil7dmFyIG89bi5yZWFjdHNUb0tleSxpPW4uY2hpbGRyZW4sYT1PKHQoITEpLDIpLGM9YVswXSx1PWFbMV07cmV0dXJuIHIoKGZ1bmN0aW9uKCl7aWYobylyZXR1cm4gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZSksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHQpLGZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZSksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHQpfTtmdW5jdGlvbiBlKGUpe2Uua2V5PT09byYmdSghMCl9ZnVuY3Rpb24gdChlKXtlLmtleSE9PW8mJlwiTWV0YVwiIT09ZS5rZXl8fHUoITEpfX0pLFtvXSksZS5jcmVhdGVFbGVtZW50KFwia2JkXCIse2NsYXNzTmFtZTpjP1wiRG9jU2VhcmNoLUJ1dHRvbi1LZXkgRG9jU2VhcmNoLUJ1dHRvbi1LZXktLXByZXNzZWRcIjpcIkRvY1NlYXJjaC1CdXR0b24tS2V5XCJ9LGkpfWZ1bmN0aW9uIHgoZSx0KXt2YXIgcj12b2lkIDA7cmV0dXJuIGZ1bmN0aW9uKCl7Zm9yKHZhciBuPWFyZ3VtZW50cy5sZW5ndGgsbz1uZXcgQXJyYXkobiksaT0wO2k8bjtpKyspb1tpXT1hcmd1bWVudHNbaV07ciYmY2xlYXJUaW1lb3V0KHIpLHI9c2V0VGltZW91dCgoZnVuY3Rpb24oKXtyZXR1cm4gZS5hcHBseSh2b2lkIDAsbyl9KSx0KX19ZnVuY3Rpb24gQyhlKXtyZXR1cm4gZS5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUuY29uY2F0KHQpfSksW10pfXZhciBOPTA7ZnVuY3Rpb24gVChlKXtyZXR1cm4gMD09PWUuY29sbGVjdGlvbnMubGVuZ3RoPzA6ZS5jb2xsZWN0aW9ucy5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIGUrdC5pdGVtcy5sZW5ndGh9KSwwKX1mdW5jdGlvbiBMKGUpe3JldHVybiBlIT09T2JqZWN0KGUpfWZ1bmN0aW9uIFIoZSx0KXtpZihlPT09dClyZXR1cm4hMDtpZihMKGUpfHxMKHQpfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiBlfHxcImZ1bmN0aW9uXCI9PXR5cGVvZiB0KXJldHVybiBlPT09dDtpZihPYmplY3Qua2V5cyhlKS5sZW5ndGghPT1PYmplY3Qua2V5cyh0KS5sZW5ndGgpcmV0dXJuITE7Zm9yKHZhciByPTAsbj1PYmplY3Qua2V5cyhlKTtyPG4ubGVuZ3RoO3IrKyl7dmFyIG89bltyXTtpZighKG8gaW4gdCkpcmV0dXJuITE7aWYoIVIoZVtvXSx0W29dKSlyZXR1cm4hMX1yZXR1cm4hMH12YXIgcT1mdW5jdGlvbigpe307dmFyIE09W3tzZWdtZW50OlwiYXV0b2NvbXBsZXRlLWNvcmVcIix2ZXJzaW9uOlwiMS4xNy45XCJ9XTtmdW5jdGlvbiBIKGUpe3ZhciB0PWUuaXRlbSxyPWUuaXRlbXMsbj12b2lkIDA9PT1yP1tdOnI7cmV0dXJue2luZGV4OnQuX19hdXRvY29tcGxldGVfaW5kZXhOYW1lLGl0ZW1zOlt0XSxwb3NpdGlvbnM6WzErbi5maW5kSW5kZXgoKGZ1bmN0aW9uKGUpe3JldHVybiBlLm9iamVjdElEPT09dC5vYmplY3RJRH0pKV0scXVlcnlJRDp0Ll9fYXV0b2NvbXBsZXRlX3F1ZXJ5SUQsYWxnb2xpYVNvdXJjZTpbXCJhdXRvY29tcGxldGVcIl19fWZ1bmN0aW9uIEIoZSx0KXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZX0oZSl8fGZ1bmN0aW9uKGUsdCl7dmFyIHI9bnVsbD09ZT9udWxsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJmVbU3ltYm9sLml0ZXJhdG9yXXx8ZVtcIkBAaXRlcmF0b3JcIl07aWYobnVsbCE9cil7dmFyIG4sbyxpLGEsYz1bXSx1PSEwLGw9ITE7dHJ5e2lmKGk9KHI9ci5jYWxsKGUpKS5uZXh0LDA9PT10KTtlbHNlIGZvcig7ISh1PShuPWkuY2FsbChyKSkuZG9uZSkmJihjLnB1c2gobi52YWx1ZSksYy5sZW5ndGghPT10KTt1PSEwKTt9Y2F0Y2goZSl7bD0hMCxvPWV9ZmluYWxseXt0cnl7aWYoIXUmJm51bGwhPXIucmV0dXJuJiYoYT1yLnJldHVybigpLE9iamVjdChhKSE9PWEpKXJldHVybn1maW5hbGx5e2lmKGwpdGhyb3cgb319cmV0dXJuIGN9fShlLHQpfHxmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gRihlLHQpO3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09ciYmZS5jb25zdHJ1Y3RvciYmKHI9ZS5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09cnx8XCJTZXRcIj09PXIpcmV0dXJuIEFycmF5LmZyb20oZSk7aWYoXCJBcmd1bWVudHNcIj09PXJ8fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHIpKXJldHVybiBGKGUsdCl9KGUsdCl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKX0oKX1mdW5jdGlvbiBGKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciByPTAsbj1uZXcgQXJyYXkodCk7cjx0O3IrKyluW3JdPWVbcl07cmV0dXJuIG59dmFyIFU9W1wiaXRlbXNcIl0sSz1bXCJpdGVtc1wiXTtmdW5jdGlvbiBWKGUpe3JldHVybiBWPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LFYoZSl9ZnVuY3Rpb24geihlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gSihlKX0oZSl8fGZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJm51bGwhPWVbU3ltYm9sLml0ZXJhdG9yXXx8bnVsbCE9ZVtcIkBAaXRlcmF0b3JcIl0pcmV0dXJuIEFycmF5LmZyb20oZSl9KGUpfHxmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gSihlLHQpO3ZhciByPU9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChlKS5zbGljZSg4LC0xKTtcIk9iamVjdFwiPT09ciYmZS5jb25zdHJ1Y3RvciYmKHI9ZS5jb25zdHJ1Y3Rvci5uYW1lKTtpZihcIk1hcFwiPT09cnx8XCJTZXRcIj09PXIpcmV0dXJuIEFycmF5LmZyb20oZSk7aWYoXCJBcmd1bWVudHNcIj09PXJ8fC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHIpKXJldHVybiBKKGUsdCl9KGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIEooZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIHI9MCxuPW5ldyBBcnJheSh0KTtyPHQ7cisrKW5bcl09ZVtyXTtyZXR1cm4gbn1mdW5jdGlvbiBRKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgcixuLG89ZnVuY3Rpb24oZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciByLG4sbz17fSxpPU9iamVjdC5rZXlzKGUpO2ZvcihuPTA7bjxpLmxlbmd0aDtuKyspcj1pW25dLHQuaW5kZXhPZihyKT49MHx8KG9bcl09ZVtyXSk7cmV0dXJuIG99KGUsdCk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIGk9T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtmb3Iobj0wO248aS5sZW5ndGg7bisrKXI9aVtuXSx0LmluZGV4T2Yocik+PTB8fE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChlLHIpJiYob1tyXT1lW3JdKX1yZXR1cm4gb31mdW5jdGlvbiBXKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBaKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP1coT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtHKGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpXKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIEcoZSx0LHIpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9PVYoZSl8fG51bGw9PT1lKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgbj1yLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9PVYobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09Vih0KT90OlN0cmluZyh0KX0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24gWShlKXtyZXR1cm4gZS5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0PWUuaXRlbXMscj1RKGUsVSk7cmV0dXJuIFooWih7fSxyKSx7fSx7b2JqZWN0SURzOihudWxsPT10P3ZvaWQgMDp0Lm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUub2JqZWN0SUR9KSkpfHxyLm9iamVjdElEc30pfSkpfWZ1bmN0aW9uICQoZSl7dmFyIHQscixuLG89KHQ9QigoZS52ZXJzaW9ufHxcIlwiKS5zcGxpdChcIi5cIikubWFwKE51bWJlciksMikscj10WzBdLG49dFsxXSxyPj0zfHwyPT09ciYmbj49NHx8MT09PXImJm4+PTEwKTtmdW5jdGlvbiBpKHQscixuKXtpZihvJiZ2b2lkIDAhPT1uKXt2YXIgaT1uWzBdLl9fYXV0b2NvbXBsZXRlX2FsZ29saWFDcmVkZW50aWFscyxhPXtcIlgtQWxnb2xpYS1BcHBsaWNhdGlvbi1JZFwiOmkuYXBwSWQsXCJYLUFsZ29saWEtQVBJLUtleVwiOmkuYXBpS2V5fTtlLmFwcGx5KHZvaWQgMCxbdF0uY29uY2F0KHoociksW3toZWFkZXJzOmF9XSkpfWVsc2UgZS5hcHBseSh2b2lkIDAsW3RdLmNvbmNhdCh6KHIpKSl9cmV0dXJue2luaXQ6ZnVuY3Rpb24odCxyKXtlKFwiaW5pdFwiLHthcHBJZDp0LGFwaUtleTpyfSl9LHNldEF1dGhlbnRpY2F0ZWRVc2VyVG9rZW46ZnVuY3Rpb24odCl7ZShcInNldEF1dGhlbnRpY2F0ZWRVc2VyVG9rZW5cIix0KX0sc2V0VXNlclRva2VuOmZ1bmN0aW9uKHQpe2UoXCJzZXRVc2VyVG9rZW5cIix0KX0sY2xpY2tlZE9iamVjdElEc0FmdGVyU2VhcmNoOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsdD1uZXcgQXJyYXkoZSkscj0wO3I8ZTtyKyspdFtyXT1hcmd1bWVudHNbcl07dC5sZW5ndGg+MCYmaShcImNsaWNrZWRPYmplY3RJRHNBZnRlclNlYXJjaFwiLFkodCksdFswXS5pdGVtcyl9LGNsaWNrZWRPYmplY3RJRHM6ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PW5ldyBBcnJheShlKSxyPTA7cjxlO3IrKyl0W3JdPWFyZ3VtZW50c1tyXTt0Lmxlbmd0aD4wJiZpKFwiY2xpY2tlZE9iamVjdElEc1wiLFkodCksdFswXS5pdGVtcyl9LGNsaWNrZWRGaWx0ZXJzOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkodCksbj0wO248dDtuKyspcltuXT1hcmd1bWVudHNbbl07ci5sZW5ndGg+MCYmZS5hcHBseSh2b2lkIDAsW1wiY2xpY2tlZEZpbHRlcnNcIl0uY29uY2F0KHIpKX0sY29udmVydGVkT2JqZWN0SURzQWZ0ZXJTZWFyY2g6ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PW5ldyBBcnJheShlKSxyPTA7cjxlO3IrKyl0W3JdPWFyZ3VtZW50c1tyXTt0Lmxlbmd0aD4wJiZpKFwiY29udmVydGVkT2JqZWN0SURzQWZ0ZXJTZWFyY2hcIixZKHQpLHRbMF0uaXRlbXMpfSxjb252ZXJ0ZWRPYmplY3RJRHM6ZnVuY3Rpb24oKXtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCx0PW5ldyBBcnJheShlKSxyPTA7cjxlO3IrKyl0W3JdPWFyZ3VtZW50c1tyXTt0Lmxlbmd0aD4wJiZpKFwiY29udmVydGVkT2JqZWN0SURzXCIsWSh0KSx0WzBdLml0ZW1zKX0sY29udmVydGVkRmlsdGVyczpmdW5jdGlvbigpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoLHI9bmV3IEFycmF5KHQpLG49MDtuPHQ7bisrKXJbbl09YXJndW1lbnRzW25dO3IubGVuZ3RoPjAmJmUuYXBwbHkodm9pZCAwLFtcImNvbnZlcnRlZEZpbHRlcnNcIl0uY29uY2F0KHIpKX0sdmlld2VkT2JqZWN0SURzOmZ1bmN0aW9uKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsdD1uZXcgQXJyYXkoZSkscj0wO3I8ZTtyKyspdFtyXT1hcmd1bWVudHNbcl07dC5sZW5ndGg+MCYmdC5yZWR1Y2UoKGZ1bmN0aW9uKGUsdCl7dmFyIHI9dC5pdGVtcyxuPVEodCxLKTtyZXR1cm5bXS5jb25jYXQoeihlKSx6KGZ1bmN0aW9uKGUpe2Zvcih2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MjAscj1bXSxuPTA7bjxlLm9iamVjdElEcy5sZW5ndGg7bis9dClyLnB1c2goWihaKHt9LGUpLHt9LHtvYmplY3RJRHM6ZS5vYmplY3RJRHMuc2xpY2UobixuK3QpfSkpO3JldHVybiByfShaKFooe30sbikse30se29iamVjdElEczoobnVsbD09cj92b2lkIDA6ci5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLm9iamVjdElEfSkpKXx8bi5vYmplY3RJRHN9KSkubWFwKChmdW5jdGlvbihlKXtyZXR1cm57aXRlbXM6cixwYXlsb2FkOmV9fSkpKSl9KSxbXSkuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pdGVtcztyZXR1cm4gaShcInZpZXdlZE9iamVjdElEc1wiLFtlLnBheWxvYWRdLHQpfSkpfSx2aWV3ZWRGaWx0ZXJzOmZ1bmN0aW9uKCl7Zm9yKHZhciB0PWFyZ3VtZW50cy5sZW5ndGgscj1uZXcgQXJyYXkodCksbj0wO248dDtuKyspcltuXT1hcmd1bWVudHNbbl07ci5sZW5ndGg+MCYmZS5hcHBseSh2b2lkIDAsW1widmlld2VkRmlsdGVyc1wiXS5jb25jYXQocikpfX19ZnVuY3Rpb24gWChlKXt2YXIgdD1lLml0ZW1zLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXt2YXIgcjtyZXR1cm4gZVt0Ll9fYXV0b2NvbXBsZXRlX2luZGV4TmFtZV09KG51bGwhPT0ocj1lW3QuX19hdXRvY29tcGxldGVfaW5kZXhOYW1lXSkmJnZvaWQgMCE9PXI/cjpbXSkuY29uY2F0KHQpLGV9KSx7fSk7cmV0dXJuIE9iamVjdC5rZXlzKHQpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJue2luZGV4OmUsaXRlbXM6dFtlXSxhbGdvbGlhU291cmNlOltcImF1dG9jb21wbGV0ZVwiXX19KSl9ZnVuY3Rpb24gZWUoZSl7cmV0dXJuIGUub2JqZWN0SUQmJmUuX19hdXRvY29tcGxldGVfaW5kZXhOYW1lJiZlLl9fYXV0b2NvbXBsZXRlX3F1ZXJ5SUR9ZnVuY3Rpb24gdGUoZSl7cmV0dXJuIHRlPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LHRlKGUpfWZ1bmN0aW9uIHJlKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBuZShlKX0oZSl8fGZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJm51bGwhPWVbU3ltYm9sLml0ZXJhdG9yXXx8bnVsbCE9ZVtcIkBAaXRlcmF0b3JcIl0pcmV0dXJuIEFycmF5LmZyb20oZSl9KGUpfHxmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gbmUoZSx0KTt2YXIgcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PXImJmUuY29uc3RydWN0b3ImJihyPWUuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PXJ8fFwiU2V0XCI9PT1yKXJldHVybiBBcnJheS5mcm9tKGUpO2lmKFwiQXJndW1lbnRzXCI9PT1yfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChyKSlyZXR1cm4gbmUoZSx0KX0oZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gbmUoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIHI9MCxuPW5ldyBBcnJheSh0KTtyPHQ7cisrKW5bcl09ZVtyXTtyZXR1cm4gbn1mdW5jdGlvbiBvZShlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24gaWUoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/b2UoT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXthZShlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6b2UoT2JqZWN0KHIpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gYWUoZSx0LHIpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9PXRlKGUpfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgcj1lW1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09cil7dmFyIG49ci5jYWxsKGUsdHx8XCJkZWZhdWx0XCIpO2lmKFwib2JqZWN0XCIhPT10ZShuKSlyZXR1cm4gbjt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuKFwic3RyaW5nXCI9PT10P1N0cmluZzpOdW1iZXIpKGUpfShlLFwic3RyaW5nXCIpO3JldHVyblwic3ltYm9sXCI9PT10ZSh0KT90OlN0cmluZyh0KX0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9dmFyIGNlPVwiMi4xNS4wXCIsdWU9XCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvbnBtL3NlYXJjaC1pbnNpZ2h0c0BcIi5jb25jYXQoY2UsXCIvZGlzdC9zZWFyY2gtaW5zaWdodHMubWluLmpzXCIpLGxlPXgoKGZ1bmN0aW9uKGUpe3ZhciB0PWUub25JdGVtc0NoYW5nZSxyPWUuaXRlbXMsbj1lLmluc2lnaHRzLG89ZS5zdGF0ZTt0KHtpbnNpZ2h0czpuLGluc2lnaHRzRXZlbnRzOlgoe2l0ZW1zOnJ9KS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBpZSh7ZXZlbnROYW1lOlwiSXRlbXMgVmlld2VkXCJ9LGUpfSkpLHN0YXRlOm99KX0pLDQwMCk7ZnVuY3Rpb24gc2UoZSl7dmFyIHQ9ZnVuY3Rpb24oZSl7cmV0dXJuIGllKHtvbkl0ZW1zQ2hhbmdlOmZ1bmN0aW9uKGUpe3ZhciB0PWUuaW5zaWdodHMscj1lLmluc2lnaHRzRXZlbnRzLG49ZS5zdGF0ZTt0LnZpZXdlZE9iamVjdElEcy5hcHBseSh0LHJlKHIubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gaWUoaWUoe30sZSkse30se2FsZ29saWFTb3VyY2U6ZmUoZS5hbGdvbGlhU291cmNlLG4uY29udGV4dCl9KX0pKSkpfSxvblNlbGVjdDpmdW5jdGlvbihlKXt2YXIgdD1lLmluc2lnaHRzLHI9ZS5pbnNpZ2h0c0V2ZW50cyxuPWUuc3RhdGU7dC5jbGlja2VkT2JqZWN0SURzQWZ0ZXJTZWFyY2guYXBwbHkodCxyZShyLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGllKGllKHt9LGUpLHt9LHthbGdvbGlhU291cmNlOmZlKGUuYWxnb2xpYVNvdXJjZSxuLmNvbnRleHQpfSl9KSkpKX0sb25BY3RpdmU6cSxfX2F1dG9jb21wbGV0ZV9jbGlja0FuYWx5dGljczohMH0sZSl9KGUpLHI9dC5pbnNpZ2h0c0NsaWVudCxuPXQuaW5zaWdodHNJbml0UGFyYW1zLG89dC5vbkl0ZW1zQ2hhbmdlLGk9dC5vblNlbGVjdCxhPXQub25BY3RpdmUsYz10Ll9fYXV0b2NvbXBsZXRlX2NsaWNrQW5hbHl0aWNzLHU9cjtpZihyfHxmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KWUoe3dpbmRvdzp3aW5kb3d9KX0oKGZ1bmN0aW9uKGUpe3ZhciB0PWUud2luZG93LHI9dC5BbGdvbGlhQW5hbHl0aWNzT2JqZWN0fHxcImFhXCI7XCJzdHJpbmdcIj09dHlwZW9mIHImJih1PXRbcl0pLHV8fCh0LkFsZ29saWFBbmFseXRpY3NPYmplY3Q9cix0W3JdfHwodFtyXT1mdW5jdGlvbigpe3Rbcl0ucXVldWV8fCh0W3JdLnF1ZXVlPVtdKTtmb3IodmFyIGU9YXJndW1lbnRzLmxlbmd0aCxuPW5ldyBBcnJheShlKSxvPTA7bzxlO28rKyluW29dPWFyZ3VtZW50c1tvXTt0W3JdLnF1ZXVlLnB1c2gobil9KSx0W3JdLnZlcnNpb249Y2UsdT10W3JdLGZ1bmN0aW9uKGUpe3ZhciB0PVwiW0F1dG9jb21wbGV0ZV06IENvdWxkIG5vdCBsb2FkIHNlYXJjaC1pbnNpZ2h0cy5qcy4gUGxlYXNlIGxvYWQgaXQgbWFudWFsbHkgZm9sbG93aW5nIGh0dHBzOi8vYWxnLmxpL2luc2lnaHRzLWF1dG9jb21wbGV0ZVwiO3RyeXt2YXIgcj1lLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7ci5hc3luYz0hMCxyLnNyYz11ZSxyLm9uZXJyb3I9ZnVuY3Rpb24oKXtjb25zb2xlLmVycm9yKHQpfSxkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHIpfWNhdGNoKGUpe2NvbnNvbGUuZXJyb3IodCl9fSh0KSl9KSksIXUpcmV0dXJue307biYmdShcImluaXRcIixpZSh7cGFydGlhbDohMH0sbikpO3ZhciBsPSQodSkscz17Y3VycmVudDpbXX0sZj14KChmdW5jdGlvbihlKXt2YXIgdD1lLnN0YXRlO2lmKHQuaXNPcGVuKXt2YXIgcj10LmNvbGxlY3Rpb25zLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm5bXS5jb25jYXQocmUoZSkscmUodC5pdGVtcykpfSksW10pLmZpbHRlcihlZSk7UihzLmN1cnJlbnQubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZS5vYmplY3RJRH0pKSxyLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUub2JqZWN0SUR9KSkpfHwocy5jdXJyZW50PXIsci5sZW5ndGg+MCYmbGUoe29uSXRlbXNDaGFuZ2U6byxpdGVtczpyLGluc2lnaHRzOmwsc3RhdGU6dH0pKX19KSwwKTtyZXR1cm57bmFtZTpcImFhLmFsZ29saWFJbnNpZ2h0c1BsdWdpblwiLHN1YnNjcmliZTpmdW5jdGlvbihlKXt2YXIgdD1lLnNldENvbnRleHQscj1lLm9uU2VsZWN0LG49ZS5vbkFjdGl2ZTtmdW5jdGlvbiBvKGUpe3Qoe2FsZ29saWFJbnNpZ2h0c1BsdWdpbjp7X19hbGdvbGlhU2VhcmNoUGFyYW1ldGVyczppZShpZSh7fSxjP3tjbGlja0FuYWx5dGljczohMH06e30pLGU/e3VzZXJUb2tlbjptZShlKX06e30pLGluc2lnaHRzOmx9fSl9dShcImFkZEFsZ29saWFBZ2VudFwiLFwiaW5zaWdodHMtcGx1Z2luXCIpLG8oKSx1KFwib25Vc2VyVG9rZW5DaGFuZ2VcIiwoZnVuY3Rpb24oZSl7byhlKX0pKSx1KFwiZ2V0VXNlclRva2VuXCIsbnVsbCwoZnVuY3Rpb24oZSx0KXtvKHQpfSkpLHIoKGZ1bmN0aW9uKGUpe3ZhciB0PWUuaXRlbSxyPWUuc3RhdGUsbj1lLmV2ZW50LG89ZS5zb3VyY2U7ZWUodCkmJmkoe3N0YXRlOnIsZXZlbnQ6bixpbnNpZ2h0czpsLGl0ZW06dCxpbnNpZ2h0c0V2ZW50czpbaWUoe2V2ZW50TmFtZTpcIkl0ZW0gU2VsZWN0ZWRcIn0sSCh7aXRlbTp0LGl0ZW1zOm8uZ2V0SXRlbXMoKS5maWx0ZXIoZWUpfSkpXX0pfSkpLG4oKGZ1bmN0aW9uKGUpe3ZhciB0PWUuaXRlbSxyPWUuc291cmNlLG49ZS5zdGF0ZSxvPWUuZXZlbnQ7ZWUodCkmJmEoe3N0YXRlOm4sZXZlbnQ6byxpbnNpZ2h0czpsLGl0ZW06dCxpbnNpZ2h0c0V2ZW50czpbaWUoe2V2ZW50TmFtZTpcIkl0ZW0gQWN0aXZlXCJ9LEgoe2l0ZW06dCxpdGVtczpyLmdldEl0ZW1zKCkuZmlsdGVyKGVlKX0pKV19KX0pKX0sb25TdGF0ZUNoYW5nZTpmdW5jdGlvbihlKXt2YXIgdD1lLnN0YXRlO2Yoe3N0YXRlOnR9KX0sX19hdXRvY29tcGxldGVfcGx1Z2luT3B0aW9uczplfX1mdW5jdGlvbiBmZSgpe3ZhciBlLHQ9YXJndW1lbnRzLmxlbmd0aD4xP2FyZ3VtZW50c1sxXTp2b2lkIDA7cmV0dXJuW10uY29uY2F0KHJlKGFyZ3VtZW50cy5sZW5ndGg+MCYmdm9pZCAwIT09YXJndW1lbnRzWzBdP2FyZ3VtZW50c1swXTpbXSksW1wiYXV0b2NvbXBsZXRlLWludGVybmFsXCJdLHJlKG51bGwhPT0oZT10LmFsZ29saWFJbnNpZ2h0c1BsdWdpbikmJnZvaWQgMCE9PWUmJmUuX19hdXRvbWF0aWNJbnNpZ2h0cz9bXCJhdXRvY29tcGxldGUtYXV0b21hdGljXCJdOltdKSl9ZnVuY3Rpb24gbWUoZSl7cmV0dXJuXCJudW1iZXJcIj09dHlwZW9mIGU/ZS50b1N0cmluZygpOmV9ZnVuY3Rpb24gcGUoZSx0KXt2YXIgcj10O3JldHVybnt0aGVuOmZ1bmN0aW9uKHQsbil7cmV0dXJuIHBlKGUudGhlbihkZSh0LHIsZSksZGUobixyLGUpKSxyKX0sY2F0Y2g6ZnVuY3Rpb24odCl7cmV0dXJuIHBlKGUuY2F0Y2goZGUodCxyLGUpKSxyKX0sZmluYWxseTpmdW5jdGlvbih0KXtyZXR1cm4gdCYmci5vbkNhbmNlbExpc3QucHVzaCh0KSxwZShlLmZpbmFsbHkoZGUodCYmZnVuY3Rpb24oKXtyZXR1cm4gci5vbkNhbmNlbExpc3Q9W10sdCgpfSxyLGUpKSxyKX0sY2FuY2VsOmZ1bmN0aW9uKCl7ci5pc0NhbmNlbGVkPSEwO3ZhciBlPXIub25DYW5jZWxMaXN0O3Iub25DYW5jZWxMaXN0PVtdLGUuZm9yRWFjaCgoZnVuY3Rpb24oZSl7ZSgpfSkpfSxpc0NhbmNlbGVkOmZ1bmN0aW9uKCl7cmV0dXJuITA9PT1yLmlzQ2FuY2VsZWR9fX1mdW5jdGlvbiB2ZShlKXtyZXR1cm4gcGUoZSx7aXNDYW5jZWxlZDohMSxvbkNhbmNlbExpc3Q6W119KX1mdW5jdGlvbiBkZShlLHQscil7cmV0dXJuIGU/ZnVuY3Rpb24ocil7cmV0dXJuIHQuaXNDYW5jZWxlZD9yOmUocil9OnJ9ZnVuY3Rpb24gaGUoZSx0LHIsbil7aWYoIXIpcmV0dXJuIG51bGw7aWYoZTwwJiYobnVsbD09PXR8fG51bGwhPT1uJiYwPT09dCkpcmV0dXJuIHIrZTt2YXIgbz0obnVsbD09PXQ/LTE6dCkrZTtyZXR1cm4gbzw9LTF8fG8+PXI/bnVsbD09PW4/bnVsbDowOm99ZnVuY3Rpb24geWUoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIGdlKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP3llKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7YmUoZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOnllKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIGJlKGUsdCxyKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPT1TZShlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09U2UobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09U2UodCk/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIFNlKGUpe3JldHVybiBTZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxTZShlKX1mdW5jdGlvbiBPZShlKXt2YXIgdD1mdW5jdGlvbihlKXt2YXIgdD1lLmNvbGxlY3Rpb25zLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaXRlbXMubGVuZ3RofSkpLnJlZHVjZSgoZnVuY3Rpb24oZSx0LHIpe3ZhciBuPShlW3ItMV18fDApK3Q7cmV0dXJuIGUucHVzaChuKSxlfSksW10pLnJlZHVjZSgoZnVuY3Rpb24odCxyKXtyZXR1cm4gcjw9ZS5hY3RpdmVJdGVtSWQ/dCsxOnR9KSwwKTtyZXR1cm4gZS5jb2xsZWN0aW9uc1t0XX0oZSk7aWYoIXQpcmV0dXJuIG51bGw7dmFyIHI9dC5pdGVtc1tmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZS5zdGF0ZSxyPWUuY29sbGVjdGlvbixuPSExLG89MCxpPTA7ITE9PT1uOyl7dmFyIGE9dC5jb2xsZWN0aW9uc1tvXTtpZihhPT09cil7bj0hMDticmVha31pKz1hLml0ZW1zLmxlbmd0aCxvKyt9cmV0dXJuIHQuYWN0aXZlSXRlbUlkLWl9KHtzdGF0ZTplLGNvbGxlY3Rpb246dH0pXSxuPXQuc291cmNlO3JldHVybntpdGVtOnIsaXRlbUlucHV0VmFsdWU6bi5nZXRJdGVtSW5wdXRWYWx1ZSh7aXRlbTpyLHN0YXRlOmV9KSxpdGVtVXJsOm4uZ2V0SXRlbVVybCh7aXRlbTpyLHN0YXRlOmV9KSxzb3VyY2U6bn19ZnVuY3Rpb24gd2UoZSx0LHIpe3JldHVybltlLG51bGw9PXI/dm9pZCAwOnIuc291cmNlSWQsdF0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCItXCIpLnJlcGxhY2UoL1xccy9nLFwiXCIpfXZhciBFZT0vKChndHxzbSktfGdhbGF4eSBuZXh1cyl8c2Ftc3VuZ1stIF18c2Ftc3VuZ2Jyb3dzZXIvaTtmdW5jdGlvbiBqZShlKXtyZXR1cm4gZS5uYXRpdmVFdmVudHx8ZX1mdW5jdGlvbiBQZShlKXtyZXR1cm4gUGU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sUGUoZSl9ZnVuY3Rpb24gSWUoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIERlKGUsdCxyKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPT1QZShlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09UGUobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09UGUodCk/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIGtlKGUsdCxyKXt2YXIgbixvPXQuaW5pdGlhbFN0YXRlO3JldHVybntnZXRTdGF0ZTpmdW5jdGlvbigpe3JldHVybiBvfSxkaXNwYXRjaDpmdW5jdGlvbihuLGkpe3ZhciBhPWZ1bmN0aW9uKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP0llKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7RGUoZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOkllKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfSh7fSxvKTtvPWUobyx7dHlwZTpuLHByb3BzOnQscGF5bG9hZDppfSkscih7c3RhdGU6byxwcmV2U3RhdGU6YX0pfSxwZW5kaW5nUmVxdWVzdHM6KG49W10se2FkZDpmdW5jdGlvbihlKXtyZXR1cm4gbi5wdXNoKGUpLGUuZmluYWxseSgoZnVuY3Rpb24oKXtuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gdCE9PWV9KSl9KSl9LGNhbmNlbEFsbDpmdW5jdGlvbigpe24uZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuY2FuY2VsKCl9KSl9LGlzRW1wdHk6ZnVuY3Rpb24oKXtyZXR1cm4gMD09PW4ubGVuZ3RofX0pfX1mdW5jdGlvbiBBZShlKXtyZXR1cm4gQWU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sQWUoZSl9ZnVuY3Rpb24gX2UoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIHhlKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP19lKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7Q2UoZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOl9lKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIENlKGUsdCxyKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPT1BZShlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09QWUobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09QWUodCk/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIE5lKGUpe3JldHVybiBOZT1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxOZShlKX1mdW5jdGlvbiBUZShlKXtyZXR1cm4gZnVuY3Rpb24oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gTGUoZSl9KGUpfHxmdW5jdGlvbihlKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2YgU3ltYm9sJiZudWxsIT1lW1N5bWJvbC5pdGVyYXRvcl18fG51bGwhPWVbXCJAQGl0ZXJhdG9yXCJdKXJldHVybiBBcnJheS5mcm9tKGUpfShlKXx8ZnVuY3Rpb24oZSx0KXtpZighZSlyZXR1cm47aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUpcmV0dXJuIExlKGUsdCk7dmFyIHI9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpLnNsaWNlKDgsLTEpO1wiT2JqZWN0XCI9PT1yJiZlLmNvbnN0cnVjdG9yJiYocj1lLmNvbnN0cnVjdG9yLm5hbWUpO2lmKFwiTWFwXCI9PT1yfHxcIlNldFwiPT09cilyZXR1cm4gQXJyYXkuZnJvbShlKTtpZihcIkFyZ3VtZW50c1wiPT09cnx8L14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QocikpcmV0dXJuIExlKGUsdCl9KGUpfHxmdW5jdGlvbigpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpfSgpfWZ1bmN0aW9uIExlKGUsdCl7KG51bGw9PXR8fHQ+ZS5sZW5ndGgpJiYodD1lLmxlbmd0aCk7Zm9yKHZhciByPTAsbj1uZXcgQXJyYXkodCk7cjx0O3IrKyluW3JdPWVbcl07cmV0dXJuIG59ZnVuY3Rpb24gUmUoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIHFlKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP1JlKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7TWUoZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOlJlKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIE1lKGUsdCxyKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPT1OZShlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09TmUobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09TmUodCk/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIEhlKGUsdCl7dmFyIHIsbj1cInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdzp7fSxvPWUucGx1Z2luc3x8W107cmV0dXJuIHFlKHFlKHtkZWJ1ZzohMSxvcGVuT25Gb2N1czohMSxlbnRlcktleUhpbnQ6dm9pZCAwLGlnbm9yZUNvbXBvc2l0aW9uRXZlbnRzOiExLHBsYWNlaG9sZGVyOlwiXCIsYXV0b0ZvY3VzOiExLGRlZmF1bHRBY3RpdmVJdGVtSWQ6bnVsbCxzdGFsbFRocmVzaG9sZDozMDAsaW5zaWdodHM6dm9pZCAwLGVudmlyb25tZW50Om4sc2hvdWxkUGFuZWxPcGVuOmZ1bmN0aW9uKGUpe3JldHVybiBUKGUuc3RhdGUpPjB9LHJlc2hhcGU6ZnVuY3Rpb24oZSl7cmV0dXJuIGUuc291cmNlc319LGUpLHt9LHtpZDpudWxsIT09KHI9ZS5pZCkmJnZvaWQgMCE9PXI/cjpcImF1dG9jb21wbGV0ZS1cIi5jb25jYXQoTisrKSxwbHVnaW5zOm8saW5pdGlhbFN0YXRlOnFlKHthY3RpdmVJdGVtSWQ6bnVsbCxxdWVyeTpcIlwiLGNvbXBsZXRpb246bnVsbCxjb2xsZWN0aW9uczpbXSxpc09wZW46ITEsc3RhdHVzOlwiaWRsZVwiLGNvbnRleHQ6e319LGUuaW5pdGlhbFN0YXRlKSxvblN0YXRlQ2hhbmdlOmZ1bmN0aW9uKHQpe3ZhciByO251bGw9PT0ocj1lLm9uU3RhdGVDaGFuZ2UpfHx2b2lkIDA9PT1yfHxyLmNhbGwoZSx0KSxvLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciByO3JldHVybiBudWxsPT09KHI9ZS5vblN0YXRlQ2hhbmdlKXx8dm9pZCAwPT09cj92b2lkIDA6ci5jYWxsKGUsdCl9KSl9LG9uU3VibWl0OmZ1bmN0aW9uKHQpe3ZhciByO251bGw9PT0ocj1lLm9uU3VibWl0KXx8dm9pZCAwPT09cnx8ci5jYWxsKGUsdCksby5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgcjtyZXR1cm4gbnVsbD09PShyPWUub25TdWJtaXQpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmNhbGwoZSx0KX0pKX0sb25SZXNldDpmdW5jdGlvbih0KXt2YXIgcjtudWxsPT09KHI9ZS5vblJlc2V0KXx8dm9pZCAwPT09cnx8ci5jYWxsKGUsdCksby5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgcjtyZXR1cm4gbnVsbD09PShyPWUub25SZXNldCl8fHZvaWQgMD09PXI/dm9pZCAwOnIuY2FsbChlLHQpfSkpfSxnZXRTb3VyY2VzOmZ1bmN0aW9uKHIpe3JldHVybiBQcm9taXNlLmFsbChbXS5jb25jYXQoVGUoby5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmdldFNvdXJjZXN9KSkpLFtlLmdldFNvdXJjZXNdKS5maWx0ZXIoQm9vbGVhbikubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZnVuY3Rpb24oZSx0KXt2YXIgcj1bXTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUodCkpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBQcm9taXNlLmFsbChlLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIEJvb2xlYW4oZSl9KSkubWFwKChmdW5jdGlvbihlKXtpZihlLnNvdXJjZUlkLHIuaW5jbHVkZXMoZS5zb3VyY2VJZCkpdGhyb3cgbmV3IEVycm9yKFwiW0F1dG9jb21wbGV0ZV0gVGhlIGBzb3VyY2VJZGAgXCIuY29uY2F0KEpTT04uc3RyaW5naWZ5KGUuc291cmNlSWQpLFwiIGlzIG5vdCB1bmlxdWUuXCIpKTtyLnB1c2goZS5zb3VyY2VJZCk7dmFyIHQ9e2dldEl0ZW1JbnB1dFZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBlLnN0YXRlLnF1ZXJ5fSxnZXRJdGVtVXJsOmZ1bmN0aW9uKCl7fSxvblNlbGVjdDpmdW5jdGlvbihlKXsoMCxlLnNldElzT3BlbikoITEpfSxvbkFjdGl2ZTpxLG9uUmVzb2x2ZTpxfTtPYmplY3Qua2V5cyh0KS5mb3JFYWNoKChmdW5jdGlvbihlKXt0W2VdLl9fZGVmYXVsdD0hMH0pKTt2YXIgbj1nZShnZSh7fSx0KSxlKTtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG4pfSkpKX0pKX0oZSxyKX0pKSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIEMoZSl9KSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIGUubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gcWUocWUoe30sZSkse30se29uU2VsZWN0OmZ1bmN0aW9uKHIpe2Uub25TZWxlY3QociksdC5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gbnVsbD09PSh0PWUub25TZWxlY3QpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LmNhbGwoZSxyKX0pKX0sb25BY3RpdmU6ZnVuY3Rpb24ocil7ZS5vbkFjdGl2ZShyKSx0LmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBudWxsPT09KHQ9ZS5vbkFjdGl2ZSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuY2FsbChlLHIpfSkpfSxvblJlc29sdmU6ZnVuY3Rpb24ocil7ZS5vblJlc29sdmUociksdC5mb3JFYWNoKChmdW5jdGlvbihlKXt2YXIgdDtyZXR1cm4gbnVsbD09PSh0PWUub25SZXNvbHZlKXx8dm9pZCAwPT09dD92b2lkIDA6dC5jYWxsKGUscil9KSl9fSl9KSl9KSl9LG5hdmlnYXRvcjpxZSh7bmF2aWdhdGU6ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pdGVtVXJsO24ubG9jYXRpb24uYXNzaWduKHQpfSxuYXZpZ2F0ZU5ld1RhYjpmdW5jdGlvbihlKXt2YXIgdD1lLml0ZW1Vcmwscj1uLm9wZW4odCxcIl9ibGFua1wiLFwibm9vcGVuZXJcIik7bnVsbD09cnx8ci5mb2N1cygpfSxuYXZpZ2F0ZU5ld1dpbmRvdzpmdW5jdGlvbihlKXt2YXIgdD1lLml0ZW1Vcmw7bi5vcGVuKHQsXCJfYmxhbmtcIixcIm5vb3BlbmVyXCIpfX0sZS5uYXZpZ2F0b3IpfSl9ZnVuY3Rpb24gQmUoZSl7cmV0dXJuIEJlPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LEJlKGUpfWZ1bmN0aW9uIEZlKGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBVZShlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9GZShPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe0tlKGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpGZShPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBLZShlLHQscil7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT09QmUoZSl8fG51bGw9PT1lKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgbj1yLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9PUJlKG4pKXJldHVybiBuO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PXQ/U3RyaW5nOk51bWJlcikoZSl9KGUsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09PUJlKHQpP3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiBWZShlKXtyZXR1cm4gVmU9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sVmUoZSl9ZnVuY3Rpb24gemUoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIEplKGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP3plKE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7UWUoZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOnplKE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIFFlKGUsdCxyKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPT1WZShlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09VmUobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09VmUodCk/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIFdlKGUpe3JldHVybiBmdW5jdGlvbihlKXtpZihBcnJheS5pc0FycmF5KGUpKXJldHVybiBaZShlKX0oZSl8fGZ1bmN0aW9uKGUpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiBTeW1ib2wmJm51bGwhPWVbU3ltYm9sLml0ZXJhdG9yXXx8bnVsbCE9ZVtcIkBAaXRlcmF0b3JcIl0pcmV0dXJuIEFycmF5LmZyb20oZSl9KGUpfHxmdW5jdGlvbihlLHQpe2lmKCFlKXJldHVybjtpZihcInN0cmluZ1wiPT10eXBlb2YgZSlyZXR1cm4gWmUoZSx0KTt2YXIgcj1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSkuc2xpY2UoOCwtMSk7XCJPYmplY3RcIj09PXImJmUuY29uc3RydWN0b3ImJihyPWUuY29uc3RydWN0b3IubmFtZSk7aWYoXCJNYXBcIj09PXJ8fFwiU2V0XCI9PT1yKXJldHVybiBBcnJheS5mcm9tKGUpO2lmKFwiQXJndW1lbnRzXCI9PT1yfHwvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChyKSlyZXR1cm4gWmUoZSx0KX0oZSl8fGZ1bmN0aW9uKCl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIil9KCl9ZnVuY3Rpb24gWmUoZSx0KXsobnVsbD09dHx8dD5lLmxlbmd0aCkmJih0PWUubGVuZ3RoKTtmb3IodmFyIHI9MCxuPW5ldyBBcnJheSh0KTtyPHQ7cisrKW5bcl09ZVtyXTtyZXR1cm4gbn1mdW5jdGlvbiBHZShlKXtyZXR1cm4gQm9vbGVhbihlLmV4ZWN1dGUpfWZ1bmN0aW9uIFllKGUsdCxyKXtpZihvPWUsQm9vbGVhbihudWxsPT1vP3ZvaWQgMDpvLmV4ZWN1dGUpKXt2YXIgbj1cImFsZ29saWFcIj09PWUucmVxdWVzdGVySWQ/T2JqZWN0LmFzc2lnbi5hcHBseShPYmplY3QsW3t9XS5jb25jYXQoV2UoT2JqZWN0LmtleXMoci5jb250ZXh0KS5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBudWxsPT09KHQ9ci5jb250ZXh0W2VdKXx8dm9pZCAwPT09dD92b2lkIDA6dC5fX2FsZ29saWFTZWFyY2hQYXJhbWV0ZXJzfSkpKSkpOnt9O3JldHVybiBKZShKZSh7fSxlKSx7fSx7cmVxdWVzdHM6ZS5xdWVyaWVzLm1hcCgoZnVuY3Rpb24ocil7cmV0dXJue3F1ZXJ5OlwiYWxnb2xpYVwiPT09ZS5yZXF1ZXN0ZXJJZD9KZShKZSh7fSxyKSx7fSx7cGFyYW1zOkplKEplKHt9LG4pLHIucGFyYW1zKX0pOnIsc291cmNlSWQ6dCx0cmFuc2Zvcm1SZXNwb25zZTplLnRyYW5zZm9ybVJlc3BvbnNlfX0pKX0pfXZhciBvO3JldHVybntpdGVtczplLHNvdXJjZUlkOnR9fWZ1bmN0aW9uICRlKGUpe3ZhciB0PWUucmVkdWNlKChmdW5jdGlvbihlLHQpe2lmKCFHZSh0KSlyZXR1cm4gZS5wdXNoKHQpLGU7dmFyIHI9dC5zZWFyY2hDbGllbnQsbj10LmV4ZWN1dGUsbz10LnJlcXVlc3RlcklkLGk9dC5yZXF1ZXN0cyxhPWUuZmluZCgoZnVuY3Rpb24oZSl7cmV0dXJuIEdlKHQpJiZHZShlKSYmZS5zZWFyY2hDbGllbnQ9PT1yJiZCb29sZWFuKG8pJiZlLnJlcXVlc3RlcklkPT09b30pKTtpZihhKXt2YXIgYzsoYz1hLml0ZW1zKS5wdXNoLmFwcGx5KGMsV2UoaSkpfWVsc2V7dmFyIHU9e2V4ZWN1dGU6bixyZXF1ZXN0ZXJJZDpvLGl0ZW1zOmksc2VhcmNoQ2xpZW50OnJ9O2UucHVzaCh1KX1yZXR1cm4gZX0pLFtdKS5tYXAoKGZ1bmN0aW9uKGUpe2lmKCFHZShlKSlyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGUpO3ZhciB0PWUscj10LmV4ZWN1dGUsbj10Lml0ZW1zO3JldHVybiByKHtzZWFyY2hDbGllbnQ6dC5zZWFyY2hDbGllbnQscmVxdWVzdHM6bn0pfSkpO3JldHVybiBQcm9taXNlLmFsbCh0KS50aGVuKChmdW5jdGlvbihlKXtyZXR1cm4gQyhlKX0pKX1mdW5jdGlvbiBYZShlLHQscil7cmV0dXJuIHQubWFwKChmdW5jdGlvbih0KXt2YXIgbixvPWUuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm4gZS5zb3VyY2VJZD09PXQuc291cmNlSWR9KSksaT1vLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaXRlbXN9KSksYT1vWzBdLnRyYW5zZm9ybVJlc3BvbnNlLGM9YT9hKHtyZXN1bHRzOm49aSxoaXRzOm4ubWFwKChmdW5jdGlvbihlKXtyZXR1cm4gZS5oaXRzfSkpLmZpbHRlcihCb29sZWFuKSxmYWNldEhpdHM6bi5tYXAoKGZ1bmN0aW9uKGUpe3ZhciB0O3JldHVybiBudWxsPT09KHQ9ZS5mYWNldEhpdHMpfHx2b2lkIDA9PT10P3ZvaWQgMDp0Lm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJue2xhYmVsOmUudmFsdWUsY291bnQ6ZS5jb3VudCxfaGlnaGxpZ2h0UmVzdWx0OntsYWJlbDp7dmFsdWU6ZS5oaWdobGlnaHRlZH19fX0pKX0pKS5maWx0ZXIoQm9vbGVhbil9KTppO3JldHVybiB0Lm9uUmVzb2x2ZSh7c291cmNlOnQscmVzdWx0czppLGl0ZW1zOmMsc3RhdGU6ci5nZXRTdGF0ZSgpfSksYy5ldmVyeShCb29sZWFuKSwnVGhlIGBnZXRJdGVtc2AgZnVuY3Rpb24gZnJvbSBzb3VyY2UgXCInLmNvbmNhdCh0LnNvdXJjZUlkLCdcIiBtdXN0IHJldHVybiBhbiBhcnJheSBvZiBpdGVtcyBidXQgcmV0dXJuZWQgJykuY29uY2F0KEpTT04uc3RyaW5naWZ5KHZvaWQgMCksXCIuXFxuXFxuRGlkIHlvdSBmb3JnZXQgdG8gcmV0dXJuIGl0ZW1zP1xcblxcblNlZTogaHR0cHM6Ly93d3cuYWxnb2xpYS5jb20vZG9jL3VpLWxpYnJhcmllcy9hdXRvY29tcGxldGUvY29yZS1jb25jZXB0cy9zb3VyY2VzLyNwYXJhbS1nZXRpdGVtc1wiKSx7c291cmNlOnQsaXRlbXM6Y319KSl9ZnVuY3Rpb24gZXQoZSl7cmV0dXJuIGV0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LGV0KGUpfXZhciB0dD1bXCJldmVudFwiLFwibmV4dFN0YXRlXCIsXCJwcm9wc1wiLFwicXVlcnlcIixcInJlZnJlc2hcIixcInN0b3JlXCJdO2Z1bmN0aW9uIHJ0KGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBudChlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9ydChPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe290KGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpydChPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBvdChlLHQscil7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT09ZXQoZSl8fG51bGw9PT1lKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgbj1yLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9PWV0KG4pKXJldHVybiBuO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PXQ/U3RyaW5nOk51bWJlcikoZSl9KGUsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09PWV0KHQpP3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX1mdW5jdGlvbiBpdChlLHQpe2lmKG51bGw9PWUpcmV0dXJue307dmFyIHIsbixvPWZ1bmN0aW9uKGUsdCl7aWYobnVsbD09ZSlyZXR1cm57fTt2YXIgcixuLG89e30saT1PYmplY3Qua2V5cyhlKTtmb3Iobj0wO248aS5sZW5ndGg7bisrKXI9aVtuXSx0LmluZGV4T2Yocik+PTB8fChvW3JdPWVbcl0pO3JldHVybiBvfShlLHQpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBpPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7Zm9yKG49MDtuPGkubGVuZ3RoO24rKylyPWlbbl0sdC5pbmRleE9mKHIpPj0wfHxPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZSxyKSYmKG9bcl09ZVtyXSl9cmV0dXJuIG99dmFyIGF0LGN0LHV0LGx0PW51bGwsc3Q9KGF0PS0xLGN0PS0xLHV0PXZvaWQgMCxmdW5jdGlvbihlKXt2YXIgdD0rK2F0O3JldHVybiBQcm9taXNlLnJlc29sdmUoZSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIHV0JiZ0PGN0P3V0OihjdD10LHV0PWUsZSl9KSl9KTtmdW5jdGlvbiBmdChlKXt2YXIgdD1lLmV2ZW50LHI9ZS5uZXh0U3RhdGUsbj12b2lkIDA9PT1yP3t9OnIsbz1lLnByb3BzLGk9ZS5xdWVyeSxhPWUucmVmcmVzaCxjPWUuc3RvcmUsdT1pdChlLHR0KTtsdCYmby5lbnZpcm9ubWVudC5jbGVhclRpbWVvdXQobHQpO3ZhciBsPXUuc2V0Q29sbGVjdGlvbnMscz11LnNldElzT3BlbixmPXUuc2V0UXVlcnksbT11LnNldEFjdGl2ZUl0ZW1JZCxwPXUuc2V0U3RhdHVzLHY9dS5zZXRDb250ZXh0O2lmKGYoaSksbShvLmRlZmF1bHRBY3RpdmVJdGVtSWQpLCFpJiYhMT09PW8ub3Blbk9uRm9jdXMpe3ZhciBkLGg9Yy5nZXRTdGF0ZSgpLmNvbGxlY3Rpb25zLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIG50KG50KHt9LGUpLHt9LHtpdGVtczpbXX0pfSkpO3AoXCJpZGxlXCIpLGwoaCkscyhudWxsIT09KGQ9bi5pc09wZW4pJiZ2b2lkIDAhPT1kP2Q6by5zaG91bGRQYW5lbE9wZW4oe3N0YXRlOmMuZ2V0U3RhdGUoKX0pKTt2YXIgeT12ZShzdChoKS50aGVuKChmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKX0pKSk7cmV0dXJuIGMucGVuZGluZ1JlcXVlc3RzLmFkZCh5KX1wKFwibG9hZGluZ1wiKSxsdD1vLmVudmlyb25tZW50LnNldFRpbWVvdXQoKGZ1bmN0aW9uKCl7cChcInN0YWxsZWRcIil9KSxvLnN0YWxsVGhyZXNob2xkKTt2YXIgZz12ZShzdChvLmdldFNvdXJjZXMobnQoe3F1ZXJ5OmkscmVmcmVzaDphLHN0YXRlOmMuZ2V0U3RhdGUoKX0sdSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBQcm9taXNlLmFsbChlLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShlLmdldEl0ZW1zKG50KHtxdWVyeTppLHJlZnJlc2g6YSxzdGF0ZTpjLmdldFN0YXRlKCl9LHUpKSkudGhlbigoZnVuY3Rpb24odCl7cmV0dXJuIFllKHQsZS5zb3VyY2VJZCxjLmdldFN0YXRlKCkpfSkpfSkpKS50aGVuKCRlKS50aGVuKChmdW5jdGlvbih0KXt2YXIgcixuPXQuc29tZSgoZnVuY3Rpb24oZSl7cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiFBcnJheS5pc0FycmF5KGUpJiZCb29sZWFuKG51bGw9PWU/dm9pZCAwOmUuX2F1dG9tYXRpY0luc2lnaHRzKX0oZS5pdGVtcyl9KSk7biYmdih7YWxnb2xpYUluc2lnaHRzUGx1Z2luOm50KG50KHt9LChudWxsPT09KHI9Yy5nZXRTdGF0ZSgpLmNvbnRleHQpfHx2b2lkIDA9PT1yP3ZvaWQgMDpyLmFsZ29saWFJbnNpZ2h0c1BsdWdpbil8fHt9KSx7fSx7X19hdXRvbWF0aWNJbnNpZ2h0czpufSl9KTtyZXR1cm4gWGUodCxlLGMpfSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBmdW5jdGlvbihlKXt2YXIgdD1lLmNvbGxlY3Rpb25zLHI9ZS5wcm9wcyxuPWUuc3RhdGUsbz10LnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gVWUoVWUoe30sZSkse30sS2Uoe30sdC5zb3VyY2Uuc291cmNlSWQsVWUoVWUoe30sdC5zb3VyY2UpLHt9LHtnZXRJdGVtczpmdW5jdGlvbigpe3JldHVybiBDKHQuaXRlbXMpfX0pKSl9KSx7fSksaT1yLnBsdWdpbnMucmVkdWNlKChmdW5jdGlvbihlLHQpe3JldHVybiB0LnJlc2hhcGU/dC5yZXNoYXBlKGUpOmV9KSx7c291cmNlc0J5U291cmNlSWQ6byxzdGF0ZTpufSkuc291cmNlc0J5U291cmNlSWQ7cmV0dXJuIEMoci5yZXNoYXBlKHtzb3VyY2VzQnlTb3VyY2VJZDppLHNvdXJjZXM6T2JqZWN0LnZhbHVlcyhpKSxzdGF0ZTpufSkpLmZpbHRlcihCb29sZWFuKS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybntzb3VyY2U6ZSxpdGVtczplLmdldEl0ZW1zKCl9fSkpfSh7Y29sbGVjdGlvbnM6ZSxwcm9wczpvLHN0YXRlOmMuZ2V0U3RhdGUoKX0pfSkpfSkpKSkudGhlbigoZnVuY3Rpb24oZSl7dmFyIHI7cChcImlkbGVcIiksbChlKTt2YXIgZj1vLnNob3VsZFBhbmVsT3Blbih7c3RhdGU6Yy5nZXRTdGF0ZSgpfSk7cyhudWxsIT09KHI9bi5pc09wZW4pJiZ2b2lkIDAhPT1yP3I6by5vcGVuT25Gb2N1cyYmIWkmJmZ8fGYpO3ZhciBtPU9lKGMuZ2V0U3RhdGUoKSk7aWYobnVsbCE9PWMuZ2V0U3RhdGUoKS5hY3RpdmVJdGVtSWQmJm0pe3ZhciB2PW0uaXRlbSxkPW0uaXRlbUlucHV0VmFsdWUsaD1tLml0ZW1VcmwseT1tLnNvdXJjZTt5Lm9uQWN0aXZlKG50KHtldmVudDp0LGl0ZW06dixpdGVtSW5wdXRWYWx1ZTpkLGl0ZW1Vcmw6aCxyZWZyZXNoOmEsc291cmNlOnksc3RhdGU6Yy5nZXRTdGF0ZSgpfSx1KSl9fSkpLmZpbmFsbHkoKGZ1bmN0aW9uKCl7cChcImlkbGVcIiksbHQmJm8uZW52aXJvbm1lbnQuY2xlYXJUaW1lb3V0KGx0KX0pKTtyZXR1cm4gYy5wZW5kaW5nUmVxdWVzdHMuYWRkKGcpfWZ1bmN0aW9uIG10KGUpe3JldHVybiBtdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxtdChlKX12YXIgcHQ9W1wiZXZlbnRcIixcInByb3BzXCIsXCJyZWZyZXNoXCIsXCJzdG9yZVwiXTtmdW5jdGlvbiB2dChlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24gZHQoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/dnQoT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtodChlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6dnQoT2JqZWN0KHIpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gaHQoZSx0LHIpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9PW10KGUpfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgcj1lW1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09cil7dmFyIG49ci5jYWxsKGUsdHx8XCJkZWZhdWx0XCIpO2lmKFwib2JqZWN0XCIhPT1tdChuKSlyZXR1cm4gbjt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuKFwic3RyaW5nXCI9PT10P1N0cmluZzpOdW1iZXIpKGUpfShlLFwic3RyaW5nXCIpO3JldHVyblwic3ltYm9sXCI9PT1tdCh0KT90OlN0cmluZyh0KX0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24geXQoZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciByLG4sbz1mdW5jdGlvbihlLHQpe2lmKG51bGw9PWUpcmV0dXJue307dmFyIHIsbixvPXt9LGk9T2JqZWN0LmtleXMoZSk7Zm9yKG49MDtuPGkubGVuZ3RoO24rKylyPWlbbl0sdC5pbmRleE9mKHIpPj0wfHwob1tyXT1lW3JdKTtyZXR1cm4gb30oZSx0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO2ZvcihuPTA7bjxpLmxlbmd0aDtuKyspcj1pW25dLHQuaW5kZXhPZihyKT49MHx8T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUscikmJihvW3JdPWVbcl0pfXJldHVybiBvfWZ1bmN0aW9uIGd0KGUpe3JldHVybiBndD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxndChlKX12YXIgYnQ9W1wicHJvcHNcIixcInJlZnJlc2hcIixcInN0b3JlXCJdLFN0PVtcImlucHV0RWxlbWVudFwiLFwiZm9ybUVsZW1lbnRcIixcInBhbmVsRWxlbWVudFwiXSxPdD1bXCJpbnB1dEVsZW1lbnRcIl0sd3Q9W1wiaW5wdXRFbGVtZW50XCIsXCJtYXhMZW5ndGhcIl0sRXQ9W1wic291cmNlXCJdLGp0PVtcIml0ZW1cIixcInNvdXJjZVwiXTtmdW5jdGlvbiBQdChlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24gSXQoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/UHQoT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtEdChlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6UHQoT2JqZWN0KHIpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gRHQoZSx0LHIpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9PWd0KGUpfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgcj1lW1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09cil7dmFyIG49ci5jYWxsKGUsdHx8XCJkZWZhdWx0XCIpO2lmKFwib2JqZWN0XCIhPT1ndChuKSlyZXR1cm4gbjt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuKFwic3RyaW5nXCI9PT10P1N0cmluZzpOdW1iZXIpKGUpfShlLFwic3RyaW5nXCIpO3JldHVyblwic3ltYm9sXCI9PT1ndCh0KT90OlN0cmluZyh0KX0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24ga3QoZSx0KXtpZihudWxsPT1lKXJldHVybnt9O3ZhciByLG4sbz1mdW5jdGlvbihlLHQpe2lmKG51bGw9PWUpcmV0dXJue307dmFyIHIsbixvPXt9LGk9T2JqZWN0LmtleXMoZSk7Zm9yKG49MDtuPGkubGVuZ3RoO24rKylyPWlbbl0sdC5pbmRleE9mKHIpPj0wfHwob1tyXT1lW3JdKTtyZXR1cm4gb30oZSx0KTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgaT1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO2ZvcihuPTA7bjxpLmxlbmd0aDtuKyspcj1pW25dLHQuaW5kZXhPZihyKT49MHx8T2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKGUscikmJihvW3JdPWVbcl0pfXJldHVybiBvfWZ1bmN0aW9uIEF0KGUpe3ZhciB0PWUucHJvcHMscj1lLnJlZnJlc2gsbj1lLnN0b3JlLG89a3QoZSxidCk7cmV0dXJue2dldEVudmlyb25tZW50UHJvcHM6ZnVuY3Rpb24oZSl7dmFyIHI9ZS5pbnB1dEVsZW1lbnQsbz1lLmZvcm1FbGVtZW50LGk9ZS5wYW5lbEVsZW1lbnQ7ZnVuY3Rpb24gYShlKXshbi5nZXRTdGF0ZSgpLmlzT3BlbiYmbi5wZW5kaW5nUmVxdWVzdHMuaXNFbXB0eSgpfHxlLnRhcmdldD09PXJ8fCExPT09W28saV0uc29tZSgoZnVuY3Rpb24odCl7cmV0dXJuIHI9dCxuPWUudGFyZ2V0LHI9PT1ufHxyLmNvbnRhaW5zKG4pO3ZhciByLG59KSkmJihuLmRpc3BhdGNoKFwiYmx1clwiLG51bGwpLHQuZGVidWd8fG4ucGVuZGluZ1JlcXVlc3RzLmNhbmNlbEFsbCgpKX1yZXR1cm4gSXQoe29uVG91Y2hTdGFydDphLG9uTW91c2VEb3duOmEsb25Ub3VjaE1vdmU6ZnVuY3Rpb24oZSl7ITEhPT1uLmdldFN0YXRlKCkuaXNPcGVuJiZyPT09dC5lbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50JiZlLnRhcmdldCE9PXImJnIuYmx1cigpfX0sa3QoZSxTdCkpfSxnZXRSb290UHJvcHM6ZnVuY3Rpb24oZSl7cmV0dXJuIEl0KHtyb2xlOlwiY29tYm9ib3hcIixcImFyaWEtZXhwYW5kZWRcIjpuLmdldFN0YXRlKCkuaXNPcGVuLFwiYXJpYS1oYXNwb3B1cFwiOlwibGlzdGJveFwiLFwiYXJpYS1jb250cm9sc1wiOm4uZ2V0U3RhdGUoKS5pc09wZW4/bi5nZXRTdGF0ZSgpLmNvbGxlY3Rpb25zLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHI9ZS5zb3VyY2U7cmV0dXJuIHdlKHQuaWQsXCJsaXN0XCIscil9KSkuam9pbihcIiBcIik6dm9pZCAwLFwiYXJpYS1sYWJlbGxlZGJ5XCI6d2UodC5pZCxcImxhYmVsXCIpfSxlKX0sZ2V0Rm9ybVByb3BzOmZ1bmN0aW9uKGUpe3JldHVybiBlLmlucHV0RWxlbWVudCxJdCh7YWN0aW9uOlwiXCIsbm9WYWxpZGF0ZTohMCxyb2xlOlwic2VhcmNoXCIsb25TdWJtaXQ6ZnVuY3Rpb24oaSl7dmFyIGE7aS5wcmV2ZW50RGVmYXVsdCgpLHQub25TdWJtaXQoSXQoe2V2ZW50OmkscmVmcmVzaDpyLHN0YXRlOm4uZ2V0U3RhdGUoKX0sbykpLG4uZGlzcGF0Y2goXCJzdWJtaXRcIixudWxsKSxudWxsPT09KGE9ZS5pbnB1dEVsZW1lbnQpfHx2b2lkIDA9PT1hfHxhLmJsdXIoKX0sb25SZXNldDpmdW5jdGlvbihpKXt2YXIgYTtpLnByZXZlbnREZWZhdWx0KCksdC5vblJlc2V0KEl0KHtldmVudDppLHJlZnJlc2g6cixzdGF0ZTpuLmdldFN0YXRlKCl9LG8pKSxuLmRpc3BhdGNoKFwicmVzZXRcIixudWxsKSxudWxsPT09KGE9ZS5pbnB1dEVsZW1lbnQpfHx2b2lkIDA9PT1hfHxhLmZvY3VzKCl9fSxrdChlLE90KSl9LGdldExhYmVsUHJvcHM6ZnVuY3Rpb24oZSl7cmV0dXJuIEl0KHtodG1sRm9yOndlKHQuaWQsXCJpbnB1dFwiKSxpZDp3ZSh0LmlkLFwibGFiZWxcIil9LGUpfSxnZXRJbnB1dFByb3BzOmZ1bmN0aW9uKGUpe3ZhciBpO2Z1bmN0aW9uIGEoZSl7KHQub3Blbk9uRm9jdXN8fEJvb2xlYW4obi5nZXRTdGF0ZSgpLnF1ZXJ5KSkmJmZ0KEl0KHtldmVudDplLHByb3BzOnQscXVlcnk6bi5nZXRTdGF0ZSgpLmNvbXBsZXRpb258fG4uZ2V0U3RhdGUoKS5xdWVyeSxyZWZyZXNoOnIsc3RvcmU6bn0sbykpLG4uZGlzcGF0Y2goXCJmb2N1c1wiLG51bGwpfXZhciBjPWV8fHt9O2MuaW5wdXRFbGVtZW50O3ZhciB1PWMubWF4TGVuZ3RoLGw9dm9pZCAwPT09dT81MTI6dSxzPWt0KGMsd3QpLGY9T2Uobi5nZXRTdGF0ZSgpKSxtPWZ1bmN0aW9uKGUpe3JldHVybiBCb29sZWFuKGUmJmUubWF0Y2goRWUpKX0oKG51bGw9PT0oaT10LmVudmlyb25tZW50Lm5hdmlnYXRvcil8fHZvaWQgMD09PWk/dm9pZCAwOmkudXNlckFnZW50KXx8XCJcIikscD10LmVudGVyS2V5SGludHx8KG51bGwhPWYmJmYuaXRlbVVybCYmIW0/XCJnb1wiOlwic2VhcmNoXCIpO3JldHVybiBJdCh7XCJhcmlhLWF1dG9jb21wbGV0ZVwiOlwiYm90aFwiLFwiYXJpYS1hY3RpdmVkZXNjZW5kYW50XCI6bi5nZXRTdGF0ZSgpLmlzT3BlbiYmbnVsbCE9PW4uZ2V0U3RhdGUoKS5hY3RpdmVJdGVtSWQ/d2UodC5pZCxcIml0ZW0tXCIuY29uY2F0KG4uZ2V0U3RhdGUoKS5hY3RpdmVJdGVtSWQpLG51bGw9PWY/dm9pZCAwOmYuc291cmNlKTp2b2lkIDAsXCJhcmlhLWNvbnRyb2xzXCI6bi5nZXRTdGF0ZSgpLmlzT3Blbj9uLmdldFN0YXRlKCkuY29sbGVjdGlvbnMubWFwKChmdW5jdGlvbihlKXt2YXIgcj1lLnNvdXJjZTtyZXR1cm4gd2UodC5pZCxcImxpc3RcIixyKX0pKS5qb2luKFwiIFwiKTp2b2lkIDAsXCJhcmlhLWxhYmVsbGVkYnlcIjp3ZSh0LmlkLFwibGFiZWxcIiksdmFsdWU6bi5nZXRTdGF0ZSgpLmNvbXBsZXRpb258fG4uZ2V0U3RhdGUoKS5xdWVyeSxpZDp3ZSh0LmlkLFwiaW5wdXRcIiksYXV0b0NvbXBsZXRlOlwib2ZmXCIsYXV0b0NvcnJlY3Q6XCJvZmZcIixhdXRvQ2FwaXRhbGl6ZTpcIm9mZlwiLGVudGVyS2V5SGludDpwLHNwZWxsQ2hlY2s6XCJmYWxzZVwiLGF1dG9Gb2N1czp0LmF1dG9Gb2N1cyxwbGFjZWhvbGRlcjp0LnBsYWNlaG9sZGVyLG1heExlbmd0aDpsLHR5cGU6XCJzZWFyY2hcIixvbkNoYW5nZTpmdW5jdGlvbihlKXt2YXIgaT1lLmN1cnJlbnRUYXJnZXQudmFsdWU7dC5pZ25vcmVDb21wb3NpdGlvbkV2ZW50cyYmamUoZSkuaXNDb21wb3Npbmc/by5zZXRRdWVyeShpKTpmdChJdCh7ZXZlbnQ6ZSxwcm9wczp0LHF1ZXJ5Omkuc2xpY2UoMCxsKSxyZWZyZXNoOnIsc3RvcmU6bn0sbykpfSxvbkNvbXBvc2l0aW9uRW5kOmZ1bmN0aW9uKGUpe2Z0KEl0KHtldmVudDplLHByb3BzOnQscXVlcnk6ZS5jdXJyZW50VGFyZ2V0LnZhbHVlLnNsaWNlKDAsbCkscmVmcmVzaDpyLHN0b3JlOm59LG8pKX0sb25LZXlEb3duOmZ1bmN0aW9uKGUpe2plKGUpLmlzQ29tcG9zaW5nfHxmdW5jdGlvbihlKXt2YXIgdD1lLmV2ZW50LHI9ZS5wcm9wcyxuPWUucmVmcmVzaCxvPWUuc3RvcmUsaT15dChlLHB0KTtpZihcIkFycm93VXBcIj09PXQua2V5fHxcIkFycm93RG93blwiPT09dC5rZXkpe3ZhciBhPWZ1bmN0aW9uKCl7dmFyIGU9T2Uoby5nZXRTdGF0ZSgpKSx0PXIuZW52aXJvbm1lbnQuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQod2Uoci5pZCxcIml0ZW0tXCIuY29uY2F0KG8uZ2V0U3RhdGUoKS5hY3RpdmVJdGVtSWQpLG51bGw9PWU/dm9pZCAwOmUuc291cmNlKSk7dCYmKHQuc2Nyb2xsSW50b1ZpZXdJZk5lZWRlZD90LnNjcm9sbEludG9WaWV3SWZOZWVkZWQoITEpOnQuc2Nyb2xsSW50b1ZpZXcoITEpKX0sYz1mdW5jdGlvbigpe3ZhciBlPU9lKG8uZ2V0U3RhdGUoKSk7aWYobnVsbCE9PW8uZ2V0U3RhdGUoKS5hY3RpdmVJdGVtSWQmJmUpe3ZhciByPWUuaXRlbSxhPWUuaXRlbUlucHV0VmFsdWUsYz1lLml0ZW1VcmwsdT1lLnNvdXJjZTt1Lm9uQWN0aXZlKGR0KHtldmVudDp0LGl0ZW06cixpdGVtSW5wdXRWYWx1ZTphLGl0ZW1Vcmw6YyxyZWZyZXNoOm4sc291cmNlOnUsc3RhdGU6by5nZXRTdGF0ZSgpfSxpKSl9fTt0LnByZXZlbnREZWZhdWx0KCksITE9PT1vLmdldFN0YXRlKCkuaXNPcGVuJiYoci5vcGVuT25Gb2N1c3x8Qm9vbGVhbihvLmdldFN0YXRlKCkucXVlcnkpKT9mdChkdCh7ZXZlbnQ6dCxwcm9wczpyLHF1ZXJ5Om8uZ2V0U3RhdGUoKS5xdWVyeSxyZWZyZXNoOm4sc3RvcmU6b30saSkpLnRoZW4oKGZ1bmN0aW9uKCl7by5kaXNwYXRjaCh0LmtleSx7bmV4dEFjdGl2ZUl0ZW1JZDpyLmRlZmF1bHRBY3RpdmVJdGVtSWR9KSxjKCksc2V0VGltZW91dChhLDApfSkpOihvLmRpc3BhdGNoKHQua2V5LHt9KSxjKCksYSgpKX1lbHNlIGlmKFwiRXNjYXBlXCI9PT10LmtleSl0LnByZXZlbnREZWZhdWx0KCksby5kaXNwYXRjaCh0LmtleSxudWxsKSxvLnBlbmRpbmdSZXF1ZXN0cy5jYW5jZWxBbGwoKTtlbHNlIGlmKFwiVGFiXCI9PT10LmtleSlvLmRpc3BhdGNoKFwiYmx1clwiLG51bGwpLG8ucGVuZGluZ1JlcXVlc3RzLmNhbmNlbEFsbCgpO2Vsc2UgaWYoXCJFbnRlclwiPT09dC5rZXkpe2lmKG51bGw9PT1vLmdldFN0YXRlKCkuYWN0aXZlSXRlbUlkfHxvLmdldFN0YXRlKCkuY29sbGVjdGlvbnMuZXZlcnkoKGZ1bmN0aW9uKGUpe3JldHVybiAwPT09ZS5pdGVtcy5sZW5ndGh9KSkpcmV0dXJuIHZvaWQoci5kZWJ1Z3x8by5wZW5kaW5nUmVxdWVzdHMuY2FuY2VsQWxsKCkpO3QucHJldmVudERlZmF1bHQoKTt2YXIgdT1PZShvLmdldFN0YXRlKCkpLGw9dS5pdGVtLHM9dS5pdGVtSW5wdXRWYWx1ZSxmPXUuaXRlbVVybCxtPXUuc291cmNlO2lmKHQubWV0YUtleXx8dC5jdHJsS2V5KXZvaWQgMCE9PWYmJihtLm9uU2VsZWN0KGR0KHtldmVudDp0LGl0ZW06bCxpdGVtSW5wdXRWYWx1ZTpzLGl0ZW1Vcmw6ZixyZWZyZXNoOm4sc291cmNlOm0sc3RhdGU6by5nZXRTdGF0ZSgpfSxpKSksci5uYXZpZ2F0b3IubmF2aWdhdGVOZXdUYWIoe2l0ZW1Vcmw6ZixpdGVtOmwsc3RhdGU6by5nZXRTdGF0ZSgpfSkpO2Vsc2UgaWYodC5zaGlmdEtleSl2b2lkIDAhPT1mJiYobS5vblNlbGVjdChkdCh7ZXZlbnQ6dCxpdGVtOmwsaXRlbUlucHV0VmFsdWU6cyxpdGVtVXJsOmYscmVmcmVzaDpuLHNvdXJjZTptLHN0YXRlOm8uZ2V0U3RhdGUoKX0saSkpLHIubmF2aWdhdG9yLm5hdmlnYXRlTmV3V2luZG93KHtpdGVtVXJsOmYsaXRlbTpsLHN0YXRlOm8uZ2V0U3RhdGUoKX0pKTtlbHNlIGlmKHQuYWx0S2V5KTtlbHNle2lmKHZvaWQgMCE9PWYpcmV0dXJuIG0ub25TZWxlY3QoZHQoe2V2ZW50OnQsaXRlbTpsLGl0ZW1JbnB1dFZhbHVlOnMsaXRlbVVybDpmLHJlZnJlc2g6bixzb3VyY2U6bSxzdGF0ZTpvLmdldFN0YXRlKCl9LGkpKSx2b2lkIHIubmF2aWdhdG9yLm5hdmlnYXRlKHtpdGVtVXJsOmYsaXRlbTpsLHN0YXRlOm8uZ2V0U3RhdGUoKX0pO2Z0KGR0KHtldmVudDp0LG5leHRTdGF0ZTp7aXNPcGVuOiExfSxwcm9wczpyLHF1ZXJ5OnMscmVmcmVzaDpuLHN0b3JlOm99LGkpKS50aGVuKChmdW5jdGlvbigpe20ub25TZWxlY3QoZHQoe2V2ZW50OnQsaXRlbTpsLGl0ZW1JbnB1dFZhbHVlOnMsaXRlbVVybDpmLHJlZnJlc2g6bixzb3VyY2U6bSxzdGF0ZTpvLmdldFN0YXRlKCl9LGkpKX0pKX19fShJdCh7ZXZlbnQ6ZSxwcm9wczp0LHJlZnJlc2g6cixzdG9yZTpufSxvKSl9LG9uRm9jdXM6YSxvbkJsdXI6cSxvbkNsaWNrOmZ1bmN0aW9uKHIpe2UuaW5wdXRFbGVtZW50IT09dC5lbnZpcm9ubWVudC5kb2N1bWVudC5hY3RpdmVFbGVtZW50fHxuLmdldFN0YXRlKCkuaXNPcGVufHxhKHIpfX0scyl9LGdldFBhbmVsUHJvcHM6ZnVuY3Rpb24oZSl7cmV0dXJuIEl0KHtvbk1vdXNlRG93bjpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCl9LG9uTW91c2VMZWF2ZTpmdW5jdGlvbigpe24uZGlzcGF0Y2goXCJtb3VzZWxlYXZlXCIsbnVsbCl9fSxlKX0sZ2V0TGlzdFByb3BzOmZ1bmN0aW9uKGUpe3ZhciByPWV8fHt9LG49ci5zb3VyY2Usbz1rdChyLEV0KTtyZXR1cm4gSXQoe3JvbGU6XCJsaXN0Ym94XCIsXCJhcmlhLWxhYmVsbGVkYnlcIjp3ZSh0LmlkLFwibGFiZWxcIiksaWQ6d2UodC5pZCxcImxpc3RcIixuKX0sbyl9LGdldEl0ZW1Qcm9wczpmdW5jdGlvbihlKXt2YXIgaT1lLml0ZW0sYT1lLnNvdXJjZSxjPWt0KGUsanQpO3JldHVybiBJdCh7aWQ6d2UodC5pZCxcIml0ZW0tXCIuY29uY2F0KGkuX19hdXRvY29tcGxldGVfaWQpLGEpLHJvbGU6XCJvcHRpb25cIixcImFyaWEtc2VsZWN0ZWRcIjpuLmdldFN0YXRlKCkuYWN0aXZlSXRlbUlkPT09aS5fX2F1dG9jb21wbGV0ZV9pZCxvbk1vdXNlTW92ZTpmdW5jdGlvbihlKXtpZihpLl9fYXV0b2NvbXBsZXRlX2lkIT09bi5nZXRTdGF0ZSgpLmFjdGl2ZUl0ZW1JZCl7bi5kaXNwYXRjaChcIm1vdXNlbW92ZVwiLGkuX19hdXRvY29tcGxldGVfaWQpO3ZhciB0PU9lKG4uZ2V0U3RhdGUoKSk7aWYobnVsbCE9PW4uZ2V0U3RhdGUoKS5hY3RpdmVJdGVtSWQmJnQpe3ZhciBhPXQuaXRlbSxjPXQuaXRlbUlucHV0VmFsdWUsdT10Lml0ZW1VcmwsbD10LnNvdXJjZTtsLm9uQWN0aXZlKEl0KHtldmVudDplLGl0ZW06YSxpdGVtSW5wdXRWYWx1ZTpjLGl0ZW1Vcmw6dSxyZWZyZXNoOnIsc291cmNlOmwsc3RhdGU6bi5nZXRTdGF0ZSgpfSxvKSl9fX0sb25Nb3VzZURvd246ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpfSxvbkNsaWNrOmZ1bmN0aW9uKGUpe3ZhciBjPWEuZ2V0SXRlbUlucHV0VmFsdWUoe2l0ZW06aSxzdGF0ZTpuLmdldFN0YXRlKCl9KSx1PWEuZ2V0SXRlbVVybCh7aXRlbTppLHN0YXRlOm4uZ2V0U3RhdGUoKX0pOyh1P1Byb21pc2UucmVzb2x2ZSgpOmZ0KEl0KHtldmVudDplLG5leHRTdGF0ZTp7aXNPcGVuOiExfSxwcm9wczp0LHF1ZXJ5OmMscmVmcmVzaDpyLHN0b3JlOm59LG8pKSkudGhlbigoZnVuY3Rpb24oKXthLm9uU2VsZWN0KEl0KHtldmVudDplLGl0ZW06aSxpdGVtSW5wdXRWYWx1ZTpjLGl0ZW1Vcmw6dSxyZWZyZXNoOnIsc291cmNlOmEsc3RhdGU6bi5nZXRTdGF0ZSgpfSxvKSl9KSl9fSxjKX19fWZ1bmN0aW9uIF90KGUpe3JldHVybiBfdD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfSxfdChlKX1mdW5jdGlvbiB4dChlLHQpe3ZhciByPU9iamVjdC5rZXlzKGUpO2lmKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpe3ZhciBuPU9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7dCYmKG49bi5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsdCkuZW51bWVyYWJsZX0pKSksci5wdXNoLmFwcGx5KHIsbil9cmV0dXJuIHJ9ZnVuY3Rpb24gQ3QoZSl7Zm9yKHZhciB0PTE7dDxhcmd1bWVudHMubGVuZ3RoO3QrKyl7dmFyIHI9bnVsbCE9YXJndW1lbnRzW3RdP2FyZ3VtZW50c1t0XTp7fTt0JTI/eHQoT2JqZWN0KHIpLCEwKS5mb3JFYWNoKChmdW5jdGlvbih0KXtOdChlLHQsclt0XSl9KSk6T2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnM/T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhyKSk6eHQoT2JqZWN0KHIpKS5mb3JFYWNoKChmdW5jdGlvbih0KXtPYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iocix0KSl9KSl9cmV0dXJuIGV9ZnVuY3Rpb24gTnQoZSx0LHIpe3JldHVybih0PWZ1bmN0aW9uKGUpe3ZhciB0PWZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIiE9PV90KGUpfHxudWxsPT09ZSlyZXR1cm4gZTt2YXIgcj1lW1N5bWJvbC50b1ByaW1pdGl2ZV07aWYodm9pZCAwIT09cil7dmFyIG49ci5jYWxsKGUsdHx8XCJkZWZhdWx0XCIpO2lmKFwib2JqZWN0XCIhPT1fdChuKSlyZXR1cm4gbjt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIil9cmV0dXJuKFwic3RyaW5nXCI9PT10P1N0cmluZzpOdW1iZXIpKGUpfShlLFwic3RyaW5nXCIpO3JldHVyblwic3ltYm9sXCI9PT1fdCh0KT90OlN0cmluZyh0KX0odCkpaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTpyLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1yLGV9ZnVuY3Rpb24gVHQoZSl7dmFyIHQscixuLG8saT1lLnBsdWdpbnMsYT1lLm9wdGlvbnMsYz1udWxsPT09KHQ9KChudWxsPT09KHI9YS5fX2F1dG9jb21wbGV0ZV9tZXRhZGF0YSl8fHZvaWQgMD09PXI/dm9pZCAwOnIudXNlckFnZW50cyl8fFtdKVswXSl8fHZvaWQgMD09PXQ/dm9pZCAwOnQuc2VnbWVudCx1PWM/TnQoe30sYyxPYmplY3Qua2V5cygobnVsbD09PShuPWEuX19hdXRvY29tcGxldGVfbWV0YWRhdGEpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLm9wdGlvbnMpfHx7fSkpOnt9O3JldHVybntwbHVnaW5zOmkubWFwKChmdW5jdGlvbihlKXtyZXR1cm57bmFtZTplLm5hbWUsb3B0aW9uczpPYmplY3Qua2V5cyhlLl9fYXV0b2NvbXBsZXRlX3BsdWdpbk9wdGlvbnN8fFtdKX19KSksb3B0aW9uczpDdCh7XCJhdXRvY29tcGxldGUtY29yZVwiOk9iamVjdC5rZXlzKGEpfSx1KSx1YTpNLmNvbmNhdCgobnVsbD09PShvPWEuX19hdXRvY29tcGxldGVfbWV0YWRhdGEpfHx2b2lkIDA9PT1vP3ZvaWQgMDpvLnVzZXJBZ2VudHMpfHxbXSl9fWZ1bmN0aW9uIEx0KGUpe3ZhciB0LHI9ZS5zdGF0ZTtyZXR1cm4hMT09PXIuaXNPcGVufHxudWxsPT09ci5hY3RpdmVJdGVtSWQ/bnVsbDoobnVsbD09PSh0PU9lKHIpKXx8dm9pZCAwPT09dD92b2lkIDA6dC5pdGVtSW5wdXRWYWx1ZSl8fG51bGx9ZnVuY3Rpb24gUnQoZSl7cmV0dXJuIFJ0PVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LFJ0KGUpfWZ1bmN0aW9uIHF0KGUsdCl7dmFyIHI9T2JqZWN0LmtleXMoZSk7aWYoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyl7dmFyIG49T2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTt0JiYobj1uLmZpbHRlcigoZnVuY3Rpb24odCl7cmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSx0KS5lbnVtZXJhYmxlfSkpKSxyLnB1c2guYXBwbHkocixuKX1yZXR1cm4gcn1mdW5jdGlvbiBNdChlKXtmb3IodmFyIHQ9MTt0PGFyZ3VtZW50cy5sZW5ndGg7dCsrKXt2YXIgcj1udWxsIT1hcmd1bWVudHNbdF0/YXJndW1lbnRzW3RdOnt9O3QlMj9xdChPYmplY3QociksITApLmZvckVhY2goKGZ1bmN0aW9uKHQpe0h0KGUsdCxyW3RdKX0pKTpPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycz9PYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHIpKTpxdChPYmplY3QocikpLmZvckVhY2goKGZ1bmN0aW9uKHQpe09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihyLHQpKX0pKX1yZXR1cm4gZX1mdW5jdGlvbiBIdChlLHQscil7cmV0dXJuKHQ9ZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oZSx0KXtpZihcIm9iamVjdFwiIT09UnQoZSl8fG51bGw9PT1lKXJldHVybiBlO3ZhciByPWVbU3ltYm9sLnRvUHJpbWl0aXZlXTtpZih2b2lkIDAhPT1yKXt2YXIgbj1yLmNhbGwoZSx0fHxcImRlZmF1bHRcIik7aWYoXCJvYmplY3RcIiE9PVJ0KG4pKXJldHVybiBuO3Rocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKX1yZXR1cm4oXCJzdHJpbmdcIj09PXQ/U3RyaW5nOk51bWJlcikoZSl9KGUsXCJzdHJpbmdcIik7cmV0dXJuXCJzeW1ib2xcIj09PVJ0KHQpP3Q6U3RyaW5nKHQpfSh0KSlpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOnIsZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPXIsZX12YXIgQnQ9ZnVuY3Rpb24oZSx0KXtzd2l0Y2godC50eXBlKXtjYXNlXCJzZXRBY3RpdmVJdGVtSWRcIjpjYXNlXCJtb3VzZW1vdmVcIjpyZXR1cm4gTXQoTXQoe30sZSkse30se2FjdGl2ZUl0ZW1JZDp0LnBheWxvYWR9KTtjYXNlXCJzZXRRdWVyeVwiOnJldHVybiBNdChNdCh7fSxlKSx7fSx7cXVlcnk6dC5wYXlsb2FkLGNvbXBsZXRpb246bnVsbH0pO2Nhc2VcInNldENvbGxlY3Rpb25zXCI6cmV0dXJuIE10KE10KHt9LGUpLHt9LHtjb2xsZWN0aW9uczp0LnBheWxvYWR9KTtjYXNlXCJzZXRJc09wZW5cIjpyZXR1cm4gTXQoTXQoe30sZSkse30se2lzT3Blbjp0LnBheWxvYWR9KTtjYXNlXCJzZXRTdGF0dXNcIjpyZXR1cm4gTXQoTXQoe30sZSkse30se3N0YXR1czp0LnBheWxvYWR9KTtjYXNlXCJzZXRDb250ZXh0XCI6cmV0dXJuIE10KE10KHt9LGUpLHt9LHtjb250ZXh0Ok10KE10KHt9LGUuY29udGV4dCksdC5wYXlsb2FkKX0pO2Nhc2VcIkFycm93RG93blwiOnZhciByPU10KE10KHt9LGUpLHt9LHthY3RpdmVJdGVtSWQ6dC5wYXlsb2FkLmhhc093blByb3BlcnR5KFwibmV4dEFjdGl2ZUl0ZW1JZFwiKT90LnBheWxvYWQubmV4dEFjdGl2ZUl0ZW1JZDpoZSgxLGUuYWN0aXZlSXRlbUlkLFQoZSksdC5wcm9wcy5kZWZhdWx0QWN0aXZlSXRlbUlkKX0pO3JldHVybiBNdChNdCh7fSxyKSx7fSx7Y29tcGxldGlvbjpMdCh7c3RhdGU6cn0pfSk7Y2FzZVwiQXJyb3dVcFwiOnZhciBuPU10KE10KHt9LGUpLHt9LHthY3RpdmVJdGVtSWQ6aGUoLTEsZS5hY3RpdmVJdGVtSWQsVChlKSx0LnByb3BzLmRlZmF1bHRBY3RpdmVJdGVtSWQpfSk7cmV0dXJuIE10KE10KHt9LG4pLHt9LHtjb21wbGV0aW9uOkx0KHtzdGF0ZTpufSl9KTtjYXNlXCJFc2NhcGVcIjpyZXR1cm4gZS5pc09wZW4/TXQoTXQoe30sZSkse30se2FjdGl2ZUl0ZW1JZDpudWxsLGlzT3BlbjohMSxjb21wbGV0aW9uOm51bGx9KTpNdChNdCh7fSxlKSx7fSx7YWN0aXZlSXRlbUlkOm51bGwscXVlcnk6XCJcIixzdGF0dXM6XCJpZGxlXCIsY29sbGVjdGlvbnM6W119KTtjYXNlXCJzdWJtaXRcIjpyZXR1cm4gTXQoTXQoe30sZSkse30se2FjdGl2ZUl0ZW1JZDpudWxsLGlzT3BlbjohMSxzdGF0dXM6XCJpZGxlXCJ9KTtjYXNlXCJyZXNldFwiOnJldHVybiBNdChNdCh7fSxlKSx7fSx7YWN0aXZlSXRlbUlkOiEwPT09dC5wcm9wcy5vcGVuT25Gb2N1cz90LnByb3BzLmRlZmF1bHRBY3RpdmVJdGVtSWQ6bnVsbCxzdGF0dXM6XCJpZGxlXCIsY29tcGxldGlvbjpudWxsLHF1ZXJ5OlwiXCJ9KTtjYXNlXCJmb2N1c1wiOnJldHVybiBNdChNdCh7fSxlKSx7fSx7YWN0aXZlSXRlbUlkOnQucHJvcHMuZGVmYXVsdEFjdGl2ZUl0ZW1JZCxpc09wZW46KHQucHJvcHMub3Blbk9uRm9jdXN8fEJvb2xlYW4oZS5xdWVyeSkpJiZ0LnByb3BzLnNob3VsZFBhbmVsT3Blbih7c3RhdGU6ZX0pfSk7Y2FzZVwiYmx1clwiOnJldHVybiB0LnByb3BzLmRlYnVnP2U6TXQoTXQoe30sZSkse30se2lzT3BlbjohMSxhY3RpdmVJdGVtSWQ6bnVsbH0pO2Nhc2VcIm1vdXNlbGVhdmVcIjpyZXR1cm4gTXQoTXQoe30sZSkse30se2FjdGl2ZUl0ZW1JZDp0LnByb3BzLmRlZmF1bHRBY3RpdmVJdGVtSWR9KTtkZWZhdWx0OnJldHVyblwiVGhlIHJlZHVjZXIgYWN0aW9uIFwiLmNvbmNhdChKU09OLnN0cmluZ2lmeSh0LnR5cGUpLFwiIGlzIG5vdCBzdXBwb3J0ZWQuXCIpLGV9fTtmdW5jdGlvbiBGdChlKXtyZXR1cm4gRnQ9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0sRnQoZSl9ZnVuY3Rpb24gVXQoZSx0KXt2YXIgcj1PYmplY3Qua2V5cyhlKTtpZihPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKXt2YXIgbj1PYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpO3QmJihuPW4uZmlsdGVyKChmdW5jdGlvbih0KXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLHQpLmVudW1lcmFibGV9KSkpLHIucHVzaC5hcHBseShyLG4pfXJldHVybiByfWZ1bmN0aW9uIEt0KGUpe2Zvcih2YXIgdD0xO3Q8YXJndW1lbnRzLmxlbmd0aDt0Kyspe3ZhciByPW51bGwhPWFyZ3VtZW50c1t0XT9hcmd1bWVudHNbdF06e307dCUyP1V0KE9iamVjdChyKSwhMCkuZm9yRWFjaCgoZnVuY3Rpb24odCl7VnQoZSx0LHJbdF0pfSkpOk9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzP09iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMocikpOlV0KE9iamVjdChyKSkuZm9yRWFjaCgoZnVuY3Rpb24odCl7T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCxPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHIsdCkpfSkpfXJldHVybiBlfWZ1bmN0aW9uIFZ0KGUsdCxyKXtyZXR1cm4odD1mdW5jdGlvbihlKXt2YXIgdD1mdW5jdGlvbihlLHQpe2lmKFwib2JqZWN0XCIhPT1GdChlKXx8bnVsbD09PWUpcmV0dXJuIGU7dmFyIHI9ZVtTeW1ib2wudG9QcmltaXRpdmVdO2lmKHZvaWQgMCE9PXIpe3ZhciBuPXIuY2FsbChlLHR8fFwiZGVmYXVsdFwiKTtpZihcIm9iamVjdFwiIT09RnQobikpcmV0dXJuIG47dGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpfXJldHVybihcInN0cmluZ1wiPT09dD9TdHJpbmc6TnVtYmVyKShlKX0oZSxcInN0cmluZ1wiKTtyZXR1cm5cInN5bWJvbFwiPT09RnQodCk/dDpTdHJpbmcodCl9KHQpKWluIGU/T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7dmFsdWU6cixlbnVtZXJhYmxlOiEwLGNvbmZpZ3VyYWJsZTohMCx3cml0YWJsZTohMH0pOmVbdF09cixlfWZ1bmN0aW9uIHp0KGUpe3ZhciB0PVtdLHI9SGUoZSx0KSxuPWtlKEJ0LHIsKGZ1bmN0aW9uKGUpe3ZhciB0LG4saT1lLnByZXZTdGF0ZSxsPWUuc3RhdGU7aWYoci5vblN0YXRlQ2hhbmdlKEt0KHtwcmV2U3RhdGU6aSxzdGF0ZTpsLHJlZnJlc2g6YSxuYXZpZ2F0b3I6ci5uYXZpZ2F0b3J9LG8pKSwhdSgpJiZudWxsIT09KHQ9bC5jb250ZXh0KSYmdm9pZCAwIT09dCYmbnVsbCE9PShuPXQuYWxnb2xpYUluc2lnaHRzUGx1Z2luKSYmdm9pZCAwIT09biYmbi5fX2F1dG9tYXRpY0luc2lnaHRzJiYhMSE9PXIuaW5zaWdodHMpe3ZhciBzPXNlKHtfX2F1dG9jb21wbGV0ZV9jbGlja0FuYWx5dGljczohMX0pO3IucGx1Z2lucy5wdXNoKHMpLGMoW3NdKX19KSksbz1mdW5jdGlvbihlKXt2YXIgdD1lLnN0b3JlO3JldHVybntzZXRBY3RpdmVJdGVtSWQ6ZnVuY3Rpb24oZSl7dC5kaXNwYXRjaChcInNldEFjdGl2ZUl0ZW1JZFwiLGUpfSxzZXRRdWVyeTpmdW5jdGlvbihlKXt0LmRpc3BhdGNoKFwic2V0UXVlcnlcIixlKX0sc2V0Q29sbGVjdGlvbnM6ZnVuY3Rpb24oZSl7dmFyIHI9MCxuPWUubWFwKChmdW5jdGlvbihlKXtyZXR1cm4geGUoeGUoe30sZSkse30se2l0ZW1zOkMoZS5pdGVtcykubWFwKChmdW5jdGlvbihlKXtyZXR1cm4geGUoeGUoe30sZSkse30se19fYXV0b2NvbXBsZXRlX2lkOnIrK30pfSkpfSl9KSk7dC5kaXNwYXRjaChcInNldENvbGxlY3Rpb25zXCIsbil9LHNldElzT3BlbjpmdW5jdGlvbihlKXt0LmRpc3BhdGNoKFwic2V0SXNPcGVuXCIsZSl9LHNldFN0YXR1czpmdW5jdGlvbihlKXt0LmRpc3BhdGNoKFwic2V0U3RhdHVzXCIsZSl9LHNldENvbnRleHQ6ZnVuY3Rpb24oZSl7dC5kaXNwYXRjaChcInNldENvbnRleHRcIixlKX19fSh7c3RvcmU6bn0pLGk9QXQoS3Qoe3Byb3BzOnIscmVmcmVzaDphLHN0b3JlOm4sbmF2aWdhdG9yOnIubmF2aWdhdG9yfSxvKSk7ZnVuY3Rpb24gYSgpe3JldHVybiBmdChLdCh7ZXZlbnQ6bmV3IEV2ZW50KFwiaW5wdXRcIiksbmV4dFN0YXRlOntpc09wZW46bi5nZXRTdGF0ZSgpLmlzT3Blbn0scHJvcHM6cixuYXZpZ2F0b3I6ci5uYXZpZ2F0b3IscXVlcnk6bi5nZXRTdGF0ZSgpLnF1ZXJ5LHJlZnJlc2g6YSxzdG9yZTpufSxvKSl9ZnVuY3Rpb24gYyhlKXtlLmZvckVhY2goKGZ1bmN0aW9uKGUpe3ZhciBuO3JldHVybiBudWxsPT09KG49ZS5zdWJzY3JpYmUpfHx2b2lkIDA9PT1uP3ZvaWQgMDpuLmNhbGwoZSxLdChLdCh7fSxvKSx7fSx7bmF2aWdhdG9yOnIubmF2aWdhdG9yLHJlZnJlc2g6YSxvblNlbGVjdDpmdW5jdGlvbihlKXt0LnB1c2goe29uU2VsZWN0OmV9KX0sb25BY3RpdmU6ZnVuY3Rpb24oZSl7dC5wdXNoKHtvbkFjdGl2ZTplfSl9LG9uUmVzb2x2ZTpmdW5jdGlvbihlKXt0LnB1c2goe29uUmVzb2x2ZTplfSl9fSkpfSkpfWZ1bmN0aW9uIHUoKXtyZXR1cm4gci5wbHVnaW5zLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVyblwiYWEuYWxnb2xpYUluc2lnaHRzUGx1Z2luXCI9PT1lLm5hbWV9KSl9aWYoci5pbnNpZ2h0cyYmIXUoKSl7dmFyIGw9XCJib29sZWFuXCI9PXR5cGVvZiByLmluc2lnaHRzP3t9OnIuaW5zaWdodHM7ci5wbHVnaW5zLnB1c2goc2UobCkpfXJldHVybiBjKHIucGx1Z2lucyksZnVuY3Rpb24oZSl7dmFyIHQscixuPWUubWV0YWRhdGEsbz1lLmVudmlyb25tZW50O2lmKG51bGw9PT0odD1vLm5hdmlnYXRvcil8fHZvaWQgMD09PXR8fG51bGw9PT0ocj10LnVzZXJBZ2VudCl8fHZvaWQgMD09PXI/dm9pZCAwOnIuaW5jbHVkZXMoXCJBbGdvbGlhIENyYXdsZXJcIikpe3ZhciBpPW8uZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm1ldGFcIiksYT1vLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJoZWFkXCIpO2kubmFtZT1cImFsZ29saWE6bWV0YWRhdGFcIixzZXRUaW1lb3V0KChmdW5jdGlvbigpe2kuY29udGVudD1KU09OLnN0cmluZ2lmeShuKSxhLmFwcGVuZENoaWxkKGkpfSksMCl9fSh7bWV0YWRhdGE6VHQoe3BsdWdpbnM6ci5wbHVnaW5zLG9wdGlvbnM6ZX0pLGVudmlyb25tZW50OnIuZW52aXJvbm1lbnR9KSxLdChLdCh7cmVmcmVzaDphLG5hdmlnYXRvcjpyLm5hdmlnYXRvcn0saSksbyl9ZnVuY3Rpb24gSnQodCl7dmFyIHI9dC50cmFuc2xhdGlvbnMsbj0odm9pZCAwPT09cj97fTpyKS5zZWFyY2hCeVRleHQsbz12b2lkIDA9PT1uP1wiU2VhcmNoIGJ5XCI6bjtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOlwiaHR0cHM6Ly93d3cuYWxnb2xpYS5jb20vcmVmL2RvY3NlYXJjaC8/dXRtX3NvdXJjZT1cIi5jb25jYXQod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lLFwiJnV0bV9tZWRpdW09cmVmZXJyYWwmdXRtX2NvbnRlbnQ9cG93ZXJlZF9ieSZ1dG1fY2FtcGFpZ249ZG9jc2VhcmNoXCIpLHRhcmdldDpcIl9ibGFua1wiLHJlbDpcIm5vb3BlbmVyIG5vcmVmZXJyZXJcIn0sZS5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtTGFiZWxcIn0sbyksZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOlwiNzdcIixoZWlnaHQ6XCIxOVwiLFwiYXJpYS1sYWJlbFwiOlwiQWxnb2xpYVwiLHJvbGU6XCJpbWdcIixpZDpcIkxheWVyXzFcIix4bWxuczpcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsdmlld0JveDpcIjAgMCAyMTk2LjIgNTAwXCJ9LGUuY3JlYXRlRWxlbWVudChcImRlZnNcIixudWxsLGUuY3JlYXRlRWxlbWVudChcInN0eWxlXCIsbnVsbCxcIi5jbHMtMSwuY2xzLTJ7ZmlsbDojMDAzZGZmO30uY2xzLTJ7ZmlsbC1ydWxlOmV2ZW5vZGQ7fVwiKSksZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtjbGFzc05hbWU6XCJjbHMtMlwiLGQ6XCJNMTA3MC4zOCwyNzUuM1Y1LjkxYzAtMy42My0zLjI0LTYuMzktNi44Mi01LjgzbC01MC40Niw3Ljk0Yy0yLjg3LC40NS00Ljk5LDIuOTMtNC45OSw1Ljg0bC4xNywyNzMuMjJjMCwxMi45MiwwLDkyLjcsOTUuOTcsOTUuNDksMy4zMywuMSw2LjA5LTIuNTgsNi4wOS01Ljkxdi00MC43OGMwLTIuOTYtMi4xOS01LjUxLTUuMTItNS44NC0zNC44NS00LjAxLTM0Ljg1LTQ3LjU3LTM0Ljg1LTU0LjcyWlwifSksZS5jcmVhdGVFbGVtZW50KFwicmVjdFwiLHtjbGFzc05hbWU6XCJjbHMtMVwiLHg6XCIxODQ1Ljg4XCIseTpcIjEwNC43M1wiLHdpZHRoOlwiNjIuNThcIixoZWlnaHQ6XCIyNzcuOVwiLHJ4OlwiNS45XCIscnk6XCI1LjlcIn0pLGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7Y2xhc3NOYW1lOlwiY2xzLTJcIixkOlwiTTE4NTEuNzgsNzEuMzhoNTAuNzdjMy4yNiwwLDUuOS0yLjY0LDUuOS01LjlWNS45YzAtMy42Mi0zLjI0LTYuMzktNi44Mi01LjgzbC01MC43Nyw3Ljk1Yy0yLjg3LC40NS00Ljk5LDIuOTItNC45OSw1LjgzdjUxLjYyYzAsMy4yNiwyLjY0LDUuOSw1LjksNS45WlwifSksZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtjbGFzc05hbWU6XCJjbHMtMlwiLGQ6XCJNMTc2NC4wMywyNzUuM1Y1LjkxYzAtMy42My0zLjI0LTYuMzktNi44Mi01LjgzbC01MC40Niw3Ljk0Yy0yLjg3LC40NS00Ljk5LDIuOTMtNC45OSw1Ljg0bC4xNywyNzMuMjJjMCwxMi45MiwwLDkyLjcsOTUuOTcsOTUuNDksMy4zMywuMSw2LjA5LTIuNTgsNi4wOS01Ljkxdi00MC43OGMwLTIuOTYtMi4xOS01LjUxLTUuMTItNS44NC0zNC44NS00LjAxLTM0Ljg1LTQ3LjU3LTM0Ljg1LTU0LjcyWlwifSksZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtjbGFzc05hbWU6XCJjbHMtMlwiLGQ6XCJNMTYzMS45NSwxNDIuNzJjLTExLjE0LTEyLjI1LTI0LjgzLTIxLjY1LTQwLjc4LTI4LjMxLTE1LjkyLTYuNTMtMzMuMjYtOS44NS01Mi4wNy05Ljg1LTE4Ljc4LDAtMzYuMTUsMy4xNy01MS45Miw5Ljg1LTE1LjU5LDYuNjYtMjkuMjksMTYuMDUtNDAuNzYsMjguMzEtMTEuNDcsMTIuMjMtMjAuMzgsMjYuODctMjYuNzYsNDQuMDMtNi4zOCwxNy4xNy05LjI0LDM3LjM3LTkuMjQsNTguMzYsMCwyMC45OSwzLjE5LDM2Ljg3LDkuNTUsNTQuMjEsNi4zOCwxNy4zMiwxNS4xNCwzMi4xMSwyNi40NSw0NC4zNiwxMS4yOSwxMi4yMywyNC44MywyMS42Miw0MC42LDI4LjQ2LDE1Ljc3LDYuODMsNDAuMTIsMTAuMzMsNTIuNCwxMC40OCwxMi4yNSwwLDM2Ljc4LTMuODIsNTIuNy0xMC40OCwxNS45Mi02LjY4LDI5LjQ2LTE2LjIzLDQwLjc4LTI4LjQ2LDExLjI5LTEyLjI1LDIwLjA1LTI3LjA0LDI2LjI1LTQ0LjM2LDYuMjItMTcuMzQsOS4yNC0zMy4yMiw5LjI0LTU0LjIxLDAtMjAuOTktMy4zNC00MS4xOS0xMC4wMy01OC4zNi02LjM4LTE3LjE3LTE1LjE0LTMxLjgtMjYuNDMtNDQuMDNabS00NC40MywxNjMuNzVjLTExLjQ3LDE1Ljc1LTI3LjU2LDIzLjctNDguMDksMjMuNy0yMC41NSwwLTM2LjYzLTcuOC00OC4xLTIzLjctMTEuNDctMTUuNzUtMTcuMjEtMzQuMDEtMTcuMjEtNjEuMiwwLTI2Ljg5LDUuNTktNDkuMTQsMTcuMDYtNjQuODcsMTEuNDUtMTUuNzUsMjcuNTQtMjMuNTIsNDguMDctMjMuNTIsMjAuNTUsMCwzNi42Myw3Ljc4LDQ4LjA5LDIzLjUyLDExLjQ3LDE1LjU3LDE3LjM2LDM3Ljk4LDE3LjM2LDY0Ljg3LDAsMjcuMTktNS43Miw0NS4zLTE3LjE5LDYxLjJaXCJ9KSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2NsYXNzTmFtZTpcImNscy0yXCIsZDpcIk04OTQuNDIsMTA0LjczaC00OS4zM2MtNDguMzYsMC05MC45MSwyNS40OC0xMTUuNzUsNjQuMS0xNC41MiwyMi41OC0yMi45OSw0OS42My0yMi45OSw3OC43MywwLDQ0Ljg5LDIwLjEzLDg0LjkyLDUxLjU5LDExMS4xLDIuOTMsMi42LDYuMDUsNC45OCw5LjMxLDcuMTQsMTIuODYsOC40OSwyOC4xMSwxMy40Nyw0NC41MiwxMy40NywxLjIzLDAsMi40Ni0uMDMsMy42OC0uMDksLjM2LS4wMiwuNzEtLjA1LDEuMDctLjA3LC44Ny0uMDUsMS43NS0uMTEsMi42Mi0uMiwuMzQtLjAzLC42OC0uMDgsMS4wMi0uMTIsLjkxLS4xLDEuODItLjIxLDIuNzMtLjM0LC4yMS0uMDMsLjQyLS4wNywuNjMtLjEsMzIuODktNS4wNyw2MS41Ni0zMC44Miw3MC45LTYyLjgxdjU3LjgzYzAsMy4yNiwyLjY0LDUuOSw1LjksNS45aDUwLjQyYzMuMjYsMCw1LjktMi42NCw1LjktNS45VjExMC42M2MwLTMuMjYtMi42NC01LjktNS45LTUuOWgtNTYuMzJabTAsMjA2LjkyYy0xMi4yLDEwLjE2LTI3Ljk3LDEzLjk4LTQ0Ljg0LDE1LjEyLS4xNiwuMDEtLjMzLC4wMy0uNDksLjA0LTEuMTIsLjA3LTIuMjQsLjEtMy4zNiwuMS00Mi4yNCwwLTc3LjEyLTM1Ljg5LTc3LjEyLTc5LjM3LDAtMTAuMjUsMS45Ni0yMC4wMSw1LjQyLTI4Ljk4LDExLjIyLTI5LjEyLDM4Ljc3LTQ5Ljc0LDcxLjA2LTQ5Ljc0aDQ5LjMzdjE0Mi44M1pcIn0pLGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7Y2xhc3NOYW1lOlwiY2xzLTJcIixkOlwiTTIxMzMuOTcsMTA0LjczaC00OS4zM2MtNDguMzYsMC05MC45MSwyNS40OC0xMTUuNzUsNjQuMS0xNC41MiwyMi41OC0yMi45OSw0OS42My0yMi45OSw3OC43MywwLDQ0Ljg5LDIwLjEzLDg0LjkyLDUxLjU5LDExMS4xLDIuOTMsMi42LDYuMDUsNC45OCw5LjMxLDcuMTQsMTIuODYsOC40OSwyOC4xMSwxMy40Nyw0NC41MiwxMy40NywxLjIzLDAsMi40Ni0uMDMsMy42OC0uMDksLjM2LS4wMiwuNzEtLjA1LDEuMDctLjA3LC44Ny0uMDUsMS43NS0uMTEsMi42Mi0uMiwuMzQtLjAzLC42OC0uMDgsMS4wMi0uMTIsLjkxLS4xLDEuODItLjIxLDIuNzMtLjM0LC4yMS0uMDMsLjQyLS4wNywuNjMtLjEsMzIuODktNS4wNyw2MS41Ni0zMC44Miw3MC45LTYyLjgxdjU3LjgzYzAsMy4yNiwyLjY0LDUuOSw1LjksNS45aDUwLjQyYzMuMjYsMCw1LjktMi42NCw1LjktNS45VjExMC42M2MwLTMuMjYtMi42NC01LjktNS45LTUuOWgtNTYuMzJabTAsMjA2LjkyYy0xMi4yLDEwLjE2LTI3Ljk3LDEzLjk4LTQ0Ljg0LDE1LjEyLS4xNiwuMDEtLjMzLC4wMy0uNDksLjA0LTEuMTIsLjA3LTIuMjQsLjEtMy4zNiwuMS00Mi4yNCwwLTc3LjEyLTM1Ljg5LTc3LjEyLTc5LjM3LDAtMTAuMjUsMS45Ni0yMC4wMSw1LjQyLTI4Ljk4LDExLjIyLTI5LjEyLDM4Ljc3LTQ5Ljc0LDcxLjA2LTQ5Ljc0aDQ5LjMzdjE0Mi44M1pcIn0pLGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7Y2xhc3NOYW1lOlwiY2xzLTJcIixkOlwiTTEzMTQuMDUsMTA0LjczaC00OS4zM2MtNDguMzYsMC05MC45MSwyNS40OC0xMTUuNzUsNjQuMS0xMS43OSwxOC4zNC0xOS42LDM5LjY0LTIyLjExLDYyLjU5LS41OCw1LjMtLjg4LDEwLjY4LS44OCwxNi4xNHMuMzEsMTEuMTUsLjkzLDE2LjU5YzQuMjgsMzguMDksMjMuMTQsNzEuNjEsNTAuNjYsOTQuNTIsMi45MywyLjYsNi4wNSw0Ljk4LDkuMzEsNy4xNCwxMi44Niw4LjQ5LDI4LjExLDEzLjQ3LDQ0LjUyLDEzLjQ3aDBjMTcuOTksMCwzNC42MS01LjkzLDQ4LjE2LTE1Ljk3LDE2LjI5LTExLjU4LDI4Ljg4LTI4LjU0LDM0LjQ4LTQ3Ljc1djUwLjI2aC0uMTF2MTEuMDhjMCwyMS44NC01LjcxLDM4LjI3LTE3LjM0LDQ5LjM2LTExLjYxLDExLjA4LTMxLjA0LDE2LjYzLTU4LjI1LDE2LjYzLTExLjEyLDAtMjguNzktLjU5LTQ2LjYtMi40MS0yLjgzLS4yOS01LjQ2LDEuNS02LjI3LDQuMjJsLTEyLjc4LDQzLjExYy0xLjAyLDMuNDYsMS4yNyw3LjAyLDQuODMsNy41MywyMS41MiwzLjA4LDQyLjUyLDQuNjgsNTQuNjUsNC42OCw0OC45MSwwLDg1LjE2LTEwLjc1LDEwOC44OS0zMi4yMSwyMS40OC0xOS40MSwzMy4xNS00OC44OSwzNS4yLTg4LjUyVjExMC42M2MwLTMuMjYtMi42NC01LjktNS45LTUuOWgtNTYuMzJabTAsNjQuMXMuNjUsMTM5LjEzLDAsMTQzLjM2Yy0xMi4wOCw5Ljc3LTI3LjExLDEzLjU5LTQzLjQ5LDE0LjctLjE2LC4wMS0uMzMsLjAzLS40OSwuMDQtMS4xMiwuMDctMi4yNCwuMS0zLjM2LC4xLTEuMzIsMC0yLjYzLS4wMy0zLjk0LS4xLTQwLjQxLTIuMTEtNzQuNTItMzcuMjYtNzQuNTItNzkuMzgsMC0xMC4yNSwxLjk2LTIwLjAxLDUuNDItMjguOTgsMTEuMjItMjkuMTIsMzguNzctNDkuNzQsNzEuMDYtNDkuNzRoNDkuMzNaXCJ9KSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2NsYXNzTmFtZTpcImNscy0xXCIsZDpcIk0yNDkuODMsMEMxMTMuMywwLDIsMTEwLjA5LC4wMywyNDYuMTZjLTIsMTM4LjE5LDExMC4xMiwyNTIuNywyNDguMzMsMjUzLjUsNDIuNjgsLjI1LDgzLjc5LTEwLjE5LDEyMC4zLTMwLjAzLDMuNTYtMS45Myw0LjExLTYuODMsMS4wOC05LjUxbC0yMy4zOC0yMC43MmMtNC43NS00LjIxLTExLjUxLTUuNC0xNy4zNi0yLjkyLTI1LjQ4LDEwLjg0LTUzLjE3LDE2LjM4LTgxLjcxLDE2LjAzLTExMS42OC0xLjM3LTIwMS45MS05NC4yOS0yMDAuMTMtMjA1Ljk2LDEuNzYtMTEwLjI2LDkyLTE5OS40MSwyMDIuNjctMTk5LjQxaDIwMi42OVY0MDcuNDFsLTExNS0xMDIuMThjLTMuNzItMy4zMS05LjQyLTIuNjYtMTIuNDIsMS4zMS0xOC40NiwyNC40NC00OC41MywzOS42NC04MS45MywzNy4zNC00Ni4zMy0zLjItODMuODctNDAuNS04Ny4zNC04Ni44MS00LjE1LTU1LjI0LDM5LjYzLTEwMS41Miw5NC0xMDEuNTIsNDkuMTgsMCw4OS42OCwzNy44NSw5My45MSw4NS45NSwuMzgsNC4yOCwyLjMxLDguMjcsNS41MiwxMS4xMmwyOS45NSwyNi41NWMzLjQsMy4wMSw4Ljc5LDEuMTcsOS42My0zLjMsMi4xNi0xMS41NSwyLjkyLTIzLjU4LDIuMDctMzUuOTItNC44Mi03MC4zNC02MS44LTEyNi45My0xMzIuMTctMTMxLjI2LTgwLjY4LTQuOTctMTQ4LjEzLDU4LjE0LTE1MC4yNywxMzcuMjUtMi4wOSw3Ny4xLDYxLjA4LDE0My41NiwxMzguMTksMTQ1LjI2LDMyLjE5LC43MSw2Mi4wMy05LjQxLDg2LjE0LTI2Ljk1bDE1MC4yNiwxMzMuMmM2LjQ0LDUuNzEsMTYuNjEsMS4xNCwxNi42MS03LjQ3VjkuNDhDNDk5LjY2LDQuMjUsNDk1LjQyLDAsNDkwLjE4LDBIMjQ5LjgzWlwifSkpKX1mdW5jdGlvbiBRdCh0KXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOlwiMTVcIixoZWlnaHQ6XCIxNVwiLFwiYXJpYS1sYWJlbFwiOnQuYXJpYUxhYmVsLHJvbGU6XCJpbWdcIn0sZS5jcmVhdGVFbGVtZW50KFwiZ1wiLHtmaWxsOlwibm9uZVwiLHN0cm9rZTpcImN1cnJlbnRDb2xvclwiLHN0cm9rZUxpbmVjYXA6XCJyb3VuZFwiLHN0cm9rZUxpbmVqb2luOlwicm91bmRcIixzdHJva2VXaWR0aDpcIjEuMlwifSx0LmNoaWxkcmVuKSl9ZnVuY3Rpb24gV3QodCl7dmFyIHI9dC50cmFuc2xhdGlvbnMsbj12b2lkIDA9PT1yP3t9OnIsbz1uLnNlbGVjdFRleHQsaT12b2lkIDA9PT1vP1widG8gc2VsZWN0XCI6byxhPW4uc2VsZWN0S2V5QXJpYUxhYmVsLGM9dm9pZCAwPT09YT9cIkVudGVyIGtleVwiOmEsdT1uLm5hdmlnYXRlVGV4dCxsPXZvaWQgMD09PXU/XCJ0byBuYXZpZ2F0ZVwiOnUscz1uLm5hdmlnYXRlVXBLZXlBcmlhTGFiZWwsZj12b2lkIDA9PT1zP1wiQXJyb3cgdXBcIjpzLG09bi5uYXZpZ2F0ZURvd25LZXlBcmlhTGFiZWwscD12b2lkIDA9PT1tP1wiQXJyb3cgZG93blwiOm0sdj1uLmNsb3NlVGV4dCxkPXZvaWQgMD09PXY/XCJ0byBjbG9zZVwiOnYsaD1uLmNsb3NlS2V5QXJpYUxhYmVsLHk9dm9pZCAwPT09aD9cIkVzY2FwZSBrZXlcIjpoLGc9bi5zZWFyY2hCeVRleHQsYj12b2lkIDA9PT1nP1wiU2VhcmNoIGJ5XCI6ZztyZXR1cm4gZS5jcmVhdGVFbGVtZW50KGUuRnJhZ21lbnQsbnVsbCxlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUxvZ29cIn0sZS5jcmVhdGVFbGVtZW50KEp0LHt0cmFuc2xhdGlvbnM6e3NlYXJjaEJ5VGV4dDpifX0pKSxlLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtQ29tbWFuZHNcIn0sZS5jcmVhdGVFbGVtZW50KFwibGlcIixudWxsLGUuY3JlYXRlRWxlbWVudChcImtiZFwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtQ29tbWFuZHMtS2V5XCJ9LGUuY3JlYXRlRWxlbWVudChRdCx7YXJpYUxhYmVsOmN9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMiAzLjUzMDg4djNjMCAxLTEgMi0yIDJINE03IDExLjUzMDg4bC0zLTMgMy0zXCJ9KSkpLGUuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUxhYmVsXCJ9LGkpKSxlLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLG51bGwsZS5jcmVhdGVFbGVtZW50KFwia2JkXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1Db21tYW5kcy1LZXlcIn0sZS5jcmVhdGVFbGVtZW50KFF0LHthcmlhTGFiZWw6cH0sZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTcuNSAzLjV2OE0xMC41IDguNWwtMyAzLTMtM1wifSkpKSxlLmNyZWF0ZUVsZW1lbnQoXCJrYmRcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUNvbW1hbmRzLUtleVwifSxlLmNyZWF0ZUVsZW1lbnQoUXQse2FyaWFMYWJlbDpmfSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNNy41IDExLjV2LThNMTAuNSA2LjVsLTMtMy0zIDNcIn0pKSksZS5jcmVhdGVFbGVtZW50KFwic3BhblwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtTGFiZWxcIn0sbCkpLGUuY3JlYXRlRWxlbWVudChcImxpXCIsbnVsbCxlLmNyZWF0ZUVsZW1lbnQoXCJrYmRcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUNvbW1hbmRzLUtleVwifSxlLmNyZWF0ZUVsZW1lbnQoUXQse2FyaWFMYWJlbDp5fSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTMuNjE2NyA4LjkzNmMtLjEwNjUuMzU4My0uNjg4My45NjItMS40ODc1Ljk2Mi0uNzk5MyAwLTEuNjUzLS45MTY1LTEuNjUzLTIuMTI1OHYtLjU2NzhjMC0xLjI1NDguNzg5Ni0yLjEwMTYgMS42NTMtMi4xMDE2Ljg2MzQgMCAxLjM2MDEuNDc3OCAxLjQ4NzUgMS4wNzI0TTkgNmMtLjEzNTItLjQ3MzUtLjc1MDYtLjkyMTktMS40Ni0uODk3Mi0uNzA5Mi4wMjQ2LTEuMzQ0LjU3LTEuMzQ0IDEuMjE2NnMuNDE5OC44ODEyIDEuMzQ0NS45ODA1QzguNDY1IDcuMzk5MiA4Ljk2OCA3LjkzMzcgOSA4LjVjLjAzMi41NjYzLS40NTQgMS4zOTgtMS40NTk1IDEuMzk4QzYuNjU5MyA5Ljg5OCA2IDkgNS45NjMgOC40ODUxbS0xLjQ3NDguNTM2OGMtLjI2MzUuNTk0MS0uODA5OS44NzYtMS41NDQzLjg3NnMtMS43MDczLS42MjQ4LTEuNzA3My0yLjIwNHYtLjQ2MDNjMC0xLjA0MTYuNzIxLTIuMTMxIDEuNzA3My0yLjEzMS45ODY0IDAgMS42NDI1IDEuMDMxIDEuNTQ0MyAyLjI0OTJoLTIuOTU2XCJ9KSkpLGUuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUxhYmVsXCJ9LGQpKSkpfWZ1bmN0aW9uIFp0KHQpe3ZhciByPXQuaGl0LG49dC5jaGlsZHJlbjtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOnIudXJsfSxuKX1mdW5jdGlvbiBHdCgpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7dmlld0JveDpcIjAgMCAzOCAzOFwiLHN0cm9rZTpcImN1cnJlbnRDb2xvclwiLHN0cm9rZU9wYWNpdHk6XCIuNVwifSxlLmNyZWF0ZUVsZW1lbnQoXCJnXCIse2ZpbGw6XCJub25lXCIsZmlsbFJ1bGU6XCJldmVub2RkXCJ9LGUuY3JlYXRlRWxlbWVudChcImdcIix7dHJhbnNmb3JtOlwidHJhbnNsYXRlKDEgMSlcIixzdHJva2VXaWR0aDpcIjJcIn0sZS5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIse3N0cm9rZU9wYWNpdHk6XCIuM1wiLGN4OlwiMThcIixjeTpcIjE4XCIscjpcIjE4XCJ9KSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMzYgMThjMC05Ljk0LTguMDYtMTgtMTgtMThcIn0sZS5jcmVhdGVFbGVtZW50KFwiYW5pbWF0ZVRyYW5zZm9ybVwiLHthdHRyaWJ1dGVOYW1lOlwidHJhbnNmb3JtXCIsdHlwZTpcInJvdGF0ZVwiLGZyb206XCIwIDE4IDE4XCIsdG86XCIzNjAgMTggMThcIixkdXI6XCIxc1wiLHJlcGVhdENvdW50OlwiaW5kZWZpbml0ZVwifSkpKSkpfWZ1bmN0aW9uIFl0KCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt3aWR0aDpcIjIwXCIsaGVpZ2h0OlwiMjBcIix2aWV3Qm94OlwiMCAwIDIwIDIwXCJ9LGUuY3JlYXRlRWxlbWVudChcImdcIix7c3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcIm5vbmVcIixmaWxsUnVsZTpcImV2ZW5vZGRcIixzdHJva2VMaW5lY2FwOlwicm91bmRcIixzdHJva2VMaW5lam9pbjpcInJvdW5kXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0zLjE4IDYuNmE4LjIzIDguMjMgMCAxMTEyLjkzIDkuOTRoMGE4LjIzIDguMjMgMCAwMS0xMS42MyAwXCJ9KSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNNi40NCA3LjI1SDIuNTVWMy4zNk0xMC40NSA2djUuNk0xMC40NSAxMS42TDEzIDEzXCJ9KSkpfWZ1bmN0aW9uICR0KCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt3aWR0aDpcIjIwXCIsaGVpZ2h0OlwiMjBcIix2aWV3Qm94OlwiMCAwIDIwIDIwXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xMCAxMGw1LjA5LTUuMDlMMTAgMTBsNS4wOSA1LjA5TDEwIDEwem0wIDBMNC45MSA0LjkxIDEwIDEwbC01LjA5IDUuMDlMMTAgMTB6XCIsc3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcIm5vbmVcIixmaWxsUnVsZTpcImV2ZW5vZGRcIixzdHJva2VMaW5lY2FwOlwicm91bmRcIixzdHJva2VMaW5lam9pbjpcInJvdW5kXCJ9KSl9ZnVuY3Rpb24gWHQoKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtU2VsZWN0LUljb25cIix3aWR0aDpcIjIwXCIsaGVpZ2h0OlwiMjBcIix2aWV3Qm94OlwiMCAwIDIwIDIwXCJ9LGUuY3JlYXRlRWxlbWVudChcImdcIix7c3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcIm5vbmVcIixmaWxsUnVsZTpcImV2ZW5vZGRcIixzdHJva2VMaW5lY2FwOlwicm91bmRcIixzdHJva2VMaW5lam9pbjpcInJvdW5kXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xOCAzdjRjMCAyLTIgNC00IDRIMlwifSksZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTggMTdsLTYtNiA2LTZcIn0pKSl9dmFyIGVyPWZ1bmN0aW9uKCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt3aWR0aDpcIjIwXCIsaGVpZ2h0OlwiMjBcIix2aWV3Qm94OlwiMCAwIDIwIDIwXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xNyA2djEyYzAgLjUyLS4yIDEtMSAxSDRjLS43IDAtMS0uMzMtMS0xVjJjMC0uNTUuNDItMSAxLTFoOGw1IDV6TTE0IDhoLTMuMTNjLS41MSAwLS44Ny0uMzQtLjg3LS44N1Y0XCIsc3Ryb2tlOlwiY3VycmVudENvbG9yXCIsZmlsbDpcIm5vbmVcIixmaWxsUnVsZTpcImV2ZW5vZGRcIixzdHJva2VMaW5lam9pbjpcInJvdW5kXCJ9KSl9O2Z1bmN0aW9uIHRyKHQpe3N3aXRjaCh0LnR5cGUpe2Nhc2VcImx2bDFcIjpyZXR1cm4gZS5jcmVhdGVFbGVtZW50KGVyLG51bGwpO2Nhc2VcImNvbnRlbnRcIjpyZXR1cm4gZS5jcmVhdGVFbGVtZW50KG5yLG51bGwpO2RlZmF1bHQ6cmV0dXJuIGUuY3JlYXRlRWxlbWVudChycixudWxsKX19ZnVuY3Rpb24gcnIoKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOlwiMjBcIixoZWlnaHQ6XCIyMFwiLHZpZXdCb3g6XCIwIDAgMjAgMjBcIn0sZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTEzIDEzaDQtNFY4SDd2NWg2djQtNEg3VjhIM2g0VjN2NWg2VjN2NWg0LTR2NXptLTYgMHY0LTRIM2g0elwiLHN0cm9rZTpcImN1cnJlbnRDb2xvclwiLGZpbGw6XCJub25lXCIsZmlsbFJ1bGU6XCJldmVub2RkXCIsc3Ryb2tlTGluZWNhcDpcInJvdW5kXCIsc3Ryb2tlTGluZWpvaW46XCJyb3VuZFwifSkpfWZ1bmN0aW9uIG5yKCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcInN2Z1wiLHt3aWR0aDpcIjIwXCIsaGVpZ2h0OlwiMjBcIix2aWV3Qm94OlwiMCAwIDIwIDIwXCJ9LGUuY3JlYXRlRWxlbWVudChcInBhdGhcIix7ZDpcIk0xNyA1SDNoMTR6bTAgNUgzaDE0em0wIDVIM2gxNHpcIixzdHJva2U6XCJjdXJyZW50Q29sb3JcIixmaWxsOlwibm9uZVwiLGZpbGxSdWxlOlwiZXZlbm9kZFwiLHN0cm9rZUxpbmVqb2luOlwicm91bmRcIn0pKX1mdW5jdGlvbiBvcigpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7d2lkdGg6XCIyMFwiLGhlaWdodDpcIjIwXCIsdmlld0JveDpcIjAgMCAyMCAyMFwifSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTAgMTQuMkw1IDE3bDEtNS42LTQtNCA1LjUtLjcgMi41LTUgMi41IDUgNS42LjgtNCA0IC45IDUuNXpcIixzdHJva2U6XCJjdXJyZW50Q29sb3JcIixmaWxsOlwibm9uZVwiLGZpbGxSdWxlOlwiZXZlbm9kZFwiLHN0cm9rZUxpbmVqb2luOlwicm91bmRcIn0pKX1mdW5jdGlvbiBpcigpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJzdmdcIix7d2lkdGg6XCI0MFwiLGhlaWdodDpcIjQwXCIsdmlld0JveDpcIjAgMCAyMCAyMFwiLGZpbGw6XCJub25lXCIsZmlsbFJ1bGU6XCJldmVub2RkXCIsc3Ryb2tlOlwiY3VycmVudENvbG9yXCIsc3Ryb2tlTGluZWNhcDpcInJvdW5kXCIsc3Ryb2tlTGluZWpvaW46XCJyb3VuZFwifSxlLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNMTkgNC44YTE2IDE2IDAgMDAtMi0xLjJtLTMuMy0xLjJBMTYgMTYgMCAwMDEuMSA0LjdNMTYuNyA4YTEyIDEyIDAgMDAtMi44LTEuNE0xMCA2YTEyIDEyIDAgMDAtNi43IDJNMTIuMyAxNC43YTQgNCAwIDAwLTQuNSAwTTE0LjUgMTEuNEE4IDggMCAwMDEwIDEwTTMgMTZMMTggMk0xMCAxOGgwXCJ9KSl9ZnVuY3Rpb24gYXIoKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse3dpZHRoOlwiNDBcIixoZWlnaHQ6XCI0MFwiLHZpZXdCb3g6XCIwIDAgMjAgMjBcIixmaWxsOlwibm9uZVwiLGZpbGxSdWxlOlwiZXZlbm9kZFwiLHN0cm9rZTpcImN1cnJlbnRDb2xvclwiLHN0cm9rZUxpbmVjYXA6XCJyb3VuZFwiLHN0cm9rZUxpbmVqb2luOlwicm91bmRcIn0sZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTE1LjUgNC44YzIgMyAxLjcgNy0xIDkuN2gwbDQuMyA0LjMtNC4zLTQuM2E3LjggNy44IDAgMDEtOS44IDFtLTIuMi0yLjJBNy44IDcuOCAwIDAxMTMuMiAyLjRNMiAxOEwxOCAyXCJ9KSl9ZnVuY3Rpb24gY3IodCl7dmFyIHI9dC50cmFuc2xhdGlvbnMsbj12b2lkIDA9PT1yP3t9OnIsbz1uLnRpdGxlVGV4dCxpPXZvaWQgMD09PW8/XCJVbmFibGUgdG8gZmV0Y2ggcmVzdWx0c1wiOm8sYT1uLmhlbHBUZXh0LGM9dm9pZCAwPT09YT9cIllvdSBtaWdodCB3YW50IHRvIGNoZWNrIHlvdXIgbmV0d29yayBjb25uZWN0aW9uLlwiOmE7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtRXJyb3JTY3JlZW5cIn0sZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1TY3JlZW4tSWNvblwifSxlLmNyZWF0ZUVsZW1lbnQoaXIsbnVsbCkpLGUuY3JlYXRlRWxlbWVudChcInBcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLVRpdGxlXCJ9LGkpLGUuY3JlYXRlRWxlbWVudChcInBcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhlbHBcIn0sYykpfXZhciB1cj1bXCJ0cmFuc2xhdGlvbnNcIl07ZnVuY3Rpb24gbHIodCl7dmFyIHI9dC50cmFuc2xhdGlvbnMsbj12b2lkIDA9PT1yP3t9OnIsbz1nKHQsdXIpLGk9bi5ub1Jlc3VsdHNUZXh0LGE9dm9pZCAwPT09aT9cIk5vIHJlc3VsdHMgZm9yXCI6aSxjPW4uc3VnZ2VzdGVkUXVlcnlUZXh0LHU9dm9pZCAwPT09Yz9cIlRyeSBzZWFyY2hpbmcgZm9yXCI6YyxsPW4ucmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0LHM9dm9pZCAwPT09bD9cIkJlbGlldmUgdGhpcyBxdWVyeSBzaG91bGQgcmV0dXJuIHJlc3VsdHM/XCI6bCxmPW4ucmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dCxtPXZvaWQgMD09PWY/XCJMZXQgdXMga25vdy5cIjpmLHA9by5zdGF0ZS5jb250ZXh0LnNlYXJjaFN1Z2dlc3Rpb25zO3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLU5vUmVzdWx0c1wifSxlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLVNjcmVlbi1JY29uXCJ9LGUuY3JlYXRlRWxlbWVudChhcixudWxsKSksZS5jcmVhdGVFbGVtZW50KFwicFwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtVGl0bGVcIn0sYSwnIFwiJyxlLmNyZWF0ZUVsZW1lbnQoXCJzdHJvbmdcIixudWxsLG8uc3RhdGUucXVlcnkpLCdcIicpLHAmJnAubGVuZ3RoPjAmJmUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtTm9SZXN1bHRzLVByZWZpbGwtTGlzdFwifSxlLmNyZWF0ZUVsZW1lbnQoXCJwXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IZWxwXCJ9LHUsXCI6XCIpLGUuY3JlYXRlRWxlbWVudChcInVsXCIsbnVsbCxwLnNsaWNlKDAsMykucmVkdWNlKChmdW5jdGlvbih0LHIpe3JldHVybltdLmNvbmNhdCh3KHQpLFtlLmNyZWF0ZUVsZW1lbnQoXCJsaVwiLHtrZXk6cn0sZS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1QcmVmaWxsXCIsa2V5OnIsdHlwZTpcImJ1dHRvblwiLG9uQ2xpY2s6ZnVuY3Rpb24oKXtvLnNldFF1ZXJ5KHIudG9Mb3dlckNhc2UoKStcIiBcIiksby5yZWZyZXNoKCksby5pbnB1dFJlZi5jdXJyZW50LmZvY3VzKCl9fSxyKSldKX0pLFtdKSkpLG8uZ2V0TWlzc2luZ1Jlc3VsdHNVcmwmJmUuY3JlYXRlRWxlbWVudChcInBcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhlbHBcIn0sXCJcIi5jb25jYXQocyxcIiBcIiksZS5jcmVhdGVFbGVtZW50KFwiYVwiLHtocmVmOm8uZ2V0TWlzc2luZ1Jlc3VsdHNVcmwoe3F1ZXJ5Om8uc3RhdGUucXVlcnl9KSx0YXJnZXQ6XCJfYmxhbmtcIixyZWw6XCJub29wZW5lciBub3JlZmVycmVyXCJ9LG0pKSl9dmFyIHNyPVtcImhpdFwiLFwiYXR0cmlidXRlXCIsXCJ0YWdOYW1lXCJdO2Z1bmN0aW9uIGZyKGUsdCl7cmV0dXJuIHQuc3BsaXQoXCIuXCIpLnJlZHVjZSgoZnVuY3Rpb24oZSx0KXtyZXR1cm4gbnVsbCE9ZSYmZVt0XT9lW3RdOm51bGx9KSxlKX1mdW5jdGlvbiBtcihlKXt2YXIgdD1lLmhpdCxyPWUuYXR0cmlidXRlLG89ZS50YWdOYW1lLGk9dm9pZCAwPT09bz9cInNwYW5cIjpvLGE9ZyhlLHNyKTtyZXR1cm4gbihpLHkoeSh7fSxhKSx7fSx7ZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw6e19faHRtbDpmcih0LFwiX3NuaXBwZXRSZXN1bHQuXCIuY29uY2F0KHIsXCIudmFsdWVcIikpfHxmcih0LHIpfX0pKX1mdW5jdGlvbiBwcih0KXtyZXR1cm4gdC5jb2xsZWN0aW9uJiYwIT09dC5jb2xsZWN0aW9uLml0ZW1zLmxlbmd0aD9lLmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXRzXCJ9LGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGl0LXNvdXJjZVwifSx0LnRpdGxlKSxlLmNyZWF0ZUVsZW1lbnQoXCJ1bFwiLHQuZ2V0TGlzdFByb3BzKCksdC5jb2xsZWN0aW9uLml0ZW1zLm1hcCgoZnVuY3Rpb24ocixuKXtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KHZyLG0oe2tleTpbdC50aXRsZSxyLm9iamVjdElEXS5qb2luKFwiOlwiKSxpdGVtOnIsaW5kZXg6bn0sdCkpfSkpKSk6bnVsbH1mdW5jdGlvbiB2cih0KXt2YXIgcj10Lml0ZW0sbj10LmluZGV4LG89dC5yZW5kZXJJY29uLGk9dC5yZW5kZXJBY3Rpb24sYT10LmdldEl0ZW1Qcm9wcyxjPXQub25JdGVtQ2xpY2ssdT10LmNvbGxlY3Rpb24sbD10LmhpdENvbXBvbmVudCxzPU8oZS51c2VTdGF0ZSghMSksMiksZj1zWzBdLHA9c1sxXSx2PU8oZS51c2VTdGF0ZSghMSksMiksZD12WzBdLGg9dlsxXSx5PWUudXNlUmVmKG51bGwpLGc9bDtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KFwibGlcIixtKHtjbGFzc05hbWU6W1wiRG9jU2VhcmNoLUhpdFwiLHIuX19kb2NzZWFyY2hfcGFyZW50JiZcIkRvY1NlYXJjaC1IaXQtLUNoaWxkXCIsZiYmXCJEb2NTZWFyY2gtSGl0LS1kZWxldGluZ1wiLGQmJlwiRG9jU2VhcmNoLUhpdC0tZmF2b3JpdGluZ1wiXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIiBcIiksb25UcmFuc2l0aW9uRW5kOmZ1bmN0aW9uKCl7eS5jdXJyZW50JiZ5LmN1cnJlbnQoKX19LGEoe2l0ZW06cixzb3VyY2U6dS5zb3VyY2Usb25DbGljazpmdW5jdGlvbihlKXtjKHIsZSl9fSkpLGUuY3JlYXRlRWxlbWVudChnLHtoaXQ6cn0sZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtQ29udGFpbmVyXCJ9LG8oe2l0ZW06cixpbmRleDpufSksci5oaWVyYXJjaHlbci50eXBlXSYmXCJsdmwxXCI9PT1yLnR5cGUmJmUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGl0LWNvbnRlbnQtd3JhcHBlclwifSxlLmNyZWF0ZUVsZW1lbnQobXIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtdGl0bGVcIixoaXQ6cixhdHRyaWJ1dGU6XCJoaWVyYXJjaHkubHZsMVwifSksci5jb250ZW50JiZlLmNyZWF0ZUVsZW1lbnQobXIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtcGF0aFwiLGhpdDpyLGF0dHJpYnV0ZTpcImNvbnRlbnRcIn0pKSxyLmhpZXJhcmNoeVtyLnR5cGVdJiYoXCJsdmwyXCI9PT1yLnR5cGV8fFwibHZsM1wiPT09ci50eXBlfHxcImx2bDRcIj09PXIudHlwZXx8XCJsdmw1XCI9PT1yLnR5cGV8fFwibHZsNlwiPT09ci50eXBlKSYmZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtY29udGVudC13cmFwcGVyXCJ9LGUuY3JlYXRlRWxlbWVudChtcix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC10aXRsZVwiLGhpdDpyLGF0dHJpYnV0ZTpcImhpZXJhcmNoeS5cIi5jb25jYXQoci50eXBlKX0pLGUuY3JlYXRlRWxlbWVudChtcix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1wYXRoXCIsaGl0OnIsYXR0cmlidXRlOlwiaGllcmFyY2h5Lmx2bDFcIn0pKSxcImNvbnRlbnRcIj09PXIudHlwZSYmZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtY29udGVudC13cmFwcGVyXCJ9LGUuY3JlYXRlRWxlbWVudChtcix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC10aXRsZVwiLGhpdDpyLGF0dHJpYnV0ZTpcImNvbnRlbnRcIn0pLGUuY3JlYXRlRWxlbWVudChtcix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1wYXRoXCIsaGl0OnIsYXR0cmlidXRlOlwiaGllcmFyY2h5Lmx2bDFcIn0pKSxpKHtpdGVtOnIscnVuRGVsZXRlVHJhbnNpdGlvbjpmdW5jdGlvbihlKXtwKCEwKSx5LmN1cnJlbnQ9ZX0scnVuRmF2b3JpdGVUcmFuc2l0aW9uOmZ1bmN0aW9uKGUpe2goITApLHkuY3VycmVudD1lfX0pKSkpfWZ1bmN0aW9uIGRyKGUsdCxyKXtyZXR1cm4gZS5yZWR1Y2UoKGZ1bmN0aW9uKGUsbil7dmFyIG89dChuKTtyZXR1cm4gZS5oYXNPd25Qcm9wZXJ0eShvKXx8KGVbb109W10pLGVbb10ubGVuZ3RoPChyfHw1KSYmZVtvXS5wdXNoKG4pLGV9KSx7fSl9ZnVuY3Rpb24gaHIoZSl7cmV0dXJuIGV9ZnVuY3Rpb24geXIoZSl7cmV0dXJuIDE9PT1lLmJ1dHRvbnx8ZS5hbHRLZXl8fGUuY3RybEtleXx8ZS5tZXRhS2V5fHxlLnNoaWZ0S2V5fWZ1bmN0aW9uIGdyKCl7fXZhciBicj0vKDxtYXJrPnw8XFwvbWFyaz4pL2csU3I9UmVnRXhwKGJyLnNvdXJjZSk7ZnVuY3Rpb24gT3IoZSl7dmFyIHQscixuPWU7aWYoIW4uX19kb2NzZWFyY2hfcGFyZW50JiYhZS5faGlnaGxpZ2h0UmVzdWx0KXJldHVybiBlLmhpZXJhcmNoeS5sdmwwO3ZhciBvPW4uX19kb2NzZWFyY2hfcGFyZW50P251bGw9PT0odD1uLl9fZG9jc2VhcmNoX3BhcmVudCl8fHZvaWQgMD09PXR8fG51bGw9PT0odD10Ll9oaWdobGlnaHRSZXN1bHQpfHx2b2lkIDA9PT10fHxudWxsPT09KHQ9dC5oaWVyYXJjaHkpfHx2b2lkIDA9PT10P3ZvaWQgMDp0Lmx2bDA6bnVsbD09PShyPWUuX2hpZ2hsaWdodFJlc3VsdCl8fHZvaWQgMD09PXJ8fG51bGw9PT0ocj1yLmhpZXJhcmNoeSl8fHZvaWQgMD09PXI/dm9pZCAwOnIubHZsMDtyZXR1cm4gbz9vLnZhbHVlJiZTci50ZXN0KG8udmFsdWUpP28udmFsdWUucmVwbGFjZShicixcIlwiKTpvLnZhbHVlOmUuaGllcmFyY2h5Lmx2bDB9ZnVuY3Rpb24gd3IodCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtRHJvcGRvd24tQ29udGFpbmVyXCJ9LHQuc3RhdGUuY29sbGVjdGlvbnMubWFwKChmdW5jdGlvbihyKXtpZigwPT09ci5pdGVtcy5sZW5ndGgpcmV0dXJuIG51bGw7dmFyIG49T3Ioci5pdGVtc1swXSk7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChwcixtKHt9LHQse2tleTpyLnNvdXJjZS5zb3VyY2VJZCx0aXRsZTpuLGNvbGxlY3Rpb246cixyZW5kZXJJY29uOmZ1bmN0aW9uKHQpe3ZhciBuLG89dC5pdGVtLGk9dC5pbmRleDtyZXR1cm4gZS5jcmVhdGVFbGVtZW50KGUuRnJhZ21lbnQsbnVsbCxvLl9fZG9jc2VhcmNoX3BhcmVudCYmZS5jcmVhdGVFbGVtZW50KFwic3ZnXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtVHJlZVwiLHZpZXdCb3g6XCIwIDAgMjQgNTRcIn0sZS5jcmVhdGVFbGVtZW50KFwiZ1wiLHtzdHJva2U6XCJjdXJyZW50Q29sb3JcIixmaWxsOlwibm9uZVwiLGZpbGxSdWxlOlwiZXZlbm9kZFwiLHN0cm9rZUxpbmVjYXA6XCJyb3VuZFwiLHN0cm9rZUxpbmVqb2luOlwicm91bmRcIn0sby5fX2RvY3NlYXJjaF9wYXJlbnQhPT0obnVsbD09PShuPXIuaXRlbXNbaSsxXSl8fHZvaWQgMD09PW4/dm9pZCAwOm4uX19kb2NzZWFyY2hfcGFyZW50KT9lLmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIse2Q6XCJNOCA2djIxTTIwIDI3SDguM1wifSk6ZS5jcmVhdGVFbGVtZW50KFwicGF0aFwiLHtkOlwiTTggNnY0Mk0yMCAyN0g4LjNcIn0pKSksZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtaWNvblwifSxlLmNyZWF0ZUVsZW1lbnQodHIse3R5cGU6by50eXBlfSkpKX0scmVuZGVyQWN0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGl0LWFjdGlvblwifSxlLmNyZWF0ZUVsZW1lbnQoWHQsbnVsbCkpfX0pKX0pKSx0LnJlc3VsdHNGb290ZXJDb21wb25lbnQmJmUuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdHNGb290ZXJcIn0sZS5jcmVhdGVFbGVtZW50KHQucmVzdWx0c0Zvb3RlckNvbXBvbmVudCx7c3RhdGU6dC5zdGF0ZX0pKSl9dmFyIEVyPVtcInRyYW5zbGF0aW9uc1wiXTtmdW5jdGlvbiBqcih0KXt2YXIgcj10LnRyYW5zbGF0aW9ucyxuPXZvaWQgMD09PXI/e306cixvPWcodCxFciksaT1uLnJlY2VudFNlYXJjaGVzVGl0bGUsYT12b2lkIDA9PT1pP1wiUmVjZW50XCI6aSxjPW4ubm9SZWNlbnRTZWFyY2hlc1RleHQsdT12b2lkIDA9PT1jP1wiTm8gcmVjZW50IHNlYXJjaGVzXCI6YyxsPW4uc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlLHM9dm9pZCAwPT09bD9cIlNhdmUgdGhpcyBzZWFyY2hcIjpsLGY9bi5yZW1vdmVSZWNlbnRTZWFyY2hCdXR0b25UaXRsZSxwPXZvaWQgMD09PWY/XCJSZW1vdmUgdGhpcyBzZWFyY2ggZnJvbSBoaXN0b3J5XCI6Zix2PW4uZmF2b3JpdGVTZWFyY2hlc1RpdGxlLGQ9dm9pZCAwPT09dj9cIkZhdm9yaXRlXCI6dixoPW4ucmVtb3ZlRmF2b3JpdGVTZWFyY2hCdXR0b25UaXRsZSx5PXZvaWQgMD09PWg/XCJSZW1vdmUgdGhpcyBzZWFyY2ggZnJvbSBmYXZvcml0ZXNcIjpoO3JldHVyblwiaWRsZVwiPT09by5zdGF0ZS5zdGF0dXMmJiExPT09by5oYXNDb2xsZWN0aW9ucz9vLmRpc2FibGVVc2VyUGVyc29uYWxpemF0aW9uP251bGw6ZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1TdGFydFNjcmVlblwifSxlLmNyZWF0ZUVsZW1lbnQoXCJwXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IZWxwXCJ9LHUpKTohMT09PW8uaGFzQ29sbGVjdGlvbnM/bnVsbDplLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLURyb3Bkb3duLUNvbnRhaW5lclwifSxlLmNyZWF0ZUVsZW1lbnQocHIsbSh7fSxvLHt0aXRsZTphLGNvbGxlY3Rpb246by5zdGF0ZS5jb2xsZWN0aW9uc1swXSxyZW5kZXJJY29uOmZ1bmN0aW9uKCl7cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGl0LWljb25cIn0sZS5jcmVhdGVFbGVtZW50KFl0LG51bGwpKX0scmVuZGVyQWN0aW9uOmZ1bmN0aW9uKHQpe3ZhciByPXQuaXRlbSxuPXQucnVuRmF2b3JpdGVUcmFuc2l0aW9uLGk9dC5ydW5EZWxldGVUcmFuc2l0aW9uO3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoZS5GcmFnbWVudCxudWxsLGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGl0LWFjdGlvblwifSxlLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1hY3Rpb24tYnV0dG9uXCIsdGl0bGU6cyx0eXBlOlwic3VibWl0XCIsb25DbGljazpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSxuKChmdW5jdGlvbigpe28uZmF2b3JpdGVTZWFyY2hlcy5hZGQociksby5yZWNlbnRTZWFyY2hlcy5yZW1vdmUociksby5yZWZyZXNoKCl9KSl9fSxlLmNyZWF0ZUVsZW1lbnQob3IsbnVsbCkpKSxlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1hY3Rpb25cIn0sZS5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1IaXQtYWN0aW9uLWJ1dHRvblwiLHRpdGxlOnAsdHlwZTpcInN1Ym1pdFwiLG9uQ2xpY2s6ZnVuY3Rpb24oZSl7ZS5wcmV2ZW50RGVmYXVsdCgpLGUuc3RvcFByb3BhZ2F0aW9uKCksaSgoZnVuY3Rpb24oKXtvLnJlY2VudFNlYXJjaGVzLnJlbW92ZShyKSxvLnJlZnJlc2goKX0pKX19LGUuY3JlYXRlRWxlbWVudCgkdCxudWxsKSkpKX19KSksZS5jcmVhdGVFbGVtZW50KHByLG0oe30sbyx7dGl0bGU6ZCxjb2xsZWN0aW9uOm8uc3RhdGUuY29sbGVjdGlvbnNbMV0scmVuZGVySWNvbjpmdW5jdGlvbigpe3JldHVybiBlLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1pY29uXCJ9LGUuY3JlYXRlRWxlbWVudChvcixudWxsKSl9LHJlbmRlckFjdGlvbjpmdW5jdGlvbih0KXt2YXIgcj10Lml0ZW0sbj10LnJ1bkRlbGV0ZVRyYW5zaXRpb247cmV0dXJuIGUuY3JlYXRlRWxlbWVudChcImRpdlwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSGl0LWFjdGlvblwifSxlLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUhpdC1hY3Rpb24tYnV0dG9uXCIsdGl0bGU6eSx0eXBlOlwic3VibWl0XCIsb25DbGljazpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCksZS5zdG9wUHJvcGFnYXRpb24oKSxuKChmdW5jdGlvbigpe28uZmF2b3JpdGVTZWFyY2hlcy5yZW1vdmUociksby5yZWZyZXNoKCl9KSl9fSxlLmNyZWF0ZUVsZW1lbnQoJHQsbnVsbCkpKX19KSkpfXZhciBQcj1bXCJ0cmFuc2xhdGlvbnNcIl0sSXI9ZS5tZW1vKChmdW5jdGlvbih0KXt2YXIgcj10LnRyYW5zbGF0aW9ucyxuPXZvaWQgMD09PXI/e306cixvPWcodCxQcik7aWYoXCJlcnJvclwiPT09by5zdGF0ZS5zdGF0dXMpcmV0dXJuIGUuY3JlYXRlRWxlbWVudChjcix7dHJhbnNsYXRpb25zOm51bGw9PW4/dm9pZCAwOm4uZXJyb3JTY3JlZW59KTt2YXIgaT1vLnN0YXRlLmNvbGxlY3Rpb25zLnNvbWUoKGZ1bmN0aW9uKGUpe3JldHVybiBlLml0ZW1zLmxlbmd0aD4wfSkpO3JldHVybiBvLnN0YXRlLnF1ZXJ5PyExPT09aT9lLmNyZWF0ZUVsZW1lbnQobHIsbSh7fSxvLHt0cmFuc2xhdGlvbnM6bnVsbD09bj92b2lkIDA6bi5ub1Jlc3VsdHNTY3JlZW59KSk6ZS5jcmVhdGVFbGVtZW50KHdyLG8pOmUuY3JlYXRlRWxlbWVudChqcixtKHt9LG8se2hhc0NvbGxlY3Rpb25zOmksdHJhbnNsYXRpb25zOm51bGw9PW4/dm9pZCAwOm4uc3RhcnRTY3JlZW59KSl9KSwoZnVuY3Rpb24oZSx0KXtyZXR1cm5cImxvYWRpbmdcIj09PXQuc3RhdGUuc3RhdHVzfHxcInN0YWxsZWRcIj09PXQuc3RhdGUuc3RhdHVzfSkpLERyPVtcInRyYW5zbGF0aW9uc1wiXTtmdW5jdGlvbiBrcih0KXt2YXIgcj10LnRyYW5zbGF0aW9ucyxuPXZvaWQgMD09PXI/e306cixvPWcodCxEciksaT1uLnJlc2V0QnV0dG9uVGl0bGUsYT12b2lkIDA9PT1pP1wiQ2xlYXIgdGhlIHF1ZXJ5XCI6aSxjPW4ucmVzZXRCdXR0b25BcmlhTGFiZWwsdT12b2lkIDA9PT1jP1wiQ2xlYXIgdGhlIHF1ZXJ5XCI6YyxsPW4uY2FuY2VsQnV0dG9uVGV4dCxzPXZvaWQgMD09PWw/XCJDYW5jZWxcIjpsLGY9bi5jYW5jZWxCdXR0b25BcmlhTGFiZWwscD12b2lkIDA9PT1mP1wiQ2FuY2VsXCI6Zix2PW4uc2VhcmNoSW5wdXRMYWJlbCxkPXZvaWQgMD09PXY/XCJTZWFyY2hcIjp2LGg9by5nZXRGb3JtUHJvcHMoe2lucHV0RWxlbWVudDpvLmlucHV0UmVmLmN1cnJlbnR9KS5vblJlc2V0O3JldHVybiBlLnVzZUVmZmVjdCgoZnVuY3Rpb24oKXtvLmF1dG9Gb2N1cyYmby5pbnB1dFJlZi5jdXJyZW50JiZvLmlucHV0UmVmLmN1cnJlbnQuZm9jdXMoKX0pLFtvLmF1dG9Gb2N1cyxvLmlucHV0UmVmXSksZS51c2VFZmZlY3QoKGZ1bmN0aW9uKCl7by5pc0Zyb21TZWxlY3Rpb24mJm8uaW5wdXRSZWYuY3VycmVudCYmby5pbnB1dFJlZi5jdXJyZW50LnNlbGVjdCgpfSksW28uaXNGcm9tU2VsZWN0aW9uLG8uaW5wdXRSZWZdKSxlLmNyZWF0ZUVsZW1lbnQoZS5GcmFnbWVudCxudWxsLGUuY3JlYXRlRWxlbWVudChcImZvcm1cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUZvcm1cIixvblN1Ym1pdDpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCl9LG9uUmVzZXQ6aH0sZS5jcmVhdGVFbGVtZW50KFwibGFiZWxcIixtKHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtTWFnbmlmaWVyTGFiZWxcIn0sby5nZXRMYWJlbFByb3BzKCkpLGUuY3JlYXRlRWxlbWVudChJLG51bGwpLGUuY3JlYXRlRWxlbWVudChcInNwYW5cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLVZpc3VhbGx5SGlkZGVuRm9yQWNjZXNzaWJpbGl0eVwifSxkKSksZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1Mb2FkaW5nSW5kaWNhdG9yXCJ9LGUuY3JlYXRlRWxlbWVudChHdCxudWxsKSksZS5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIixtKHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtSW5wdXRcIixyZWY6by5pbnB1dFJlZn0sby5nZXRJbnB1dFByb3BzKHtpbnB1dEVsZW1lbnQ6by5pbnB1dFJlZi5jdXJyZW50LGF1dG9Gb2N1czpvLmF1dG9Gb2N1cyxtYXhMZW5ndGg6NjR9KSkpLGUuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLHt0eXBlOlwicmVzZXRcIix0aXRsZTphLGNsYXNzTmFtZTpcIkRvY1NlYXJjaC1SZXNldFwiLFwiYXJpYS1sYWJlbFwiOnUsaGlkZGVuOiFvLnN0YXRlLnF1ZXJ5fSxlLmNyZWF0ZUVsZW1lbnQoJHQsbnVsbCkpKSxlLmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLUNhbmNlbFwiLHR5cGU6XCJyZXNldFwiLFwiYXJpYS1sYWJlbFwiOnAsb25DbGljazpvLm9uQ2xvc2V9LHMpKX12YXIgQXI9W1wiX2hpZ2hsaWdodFJlc3VsdFwiLFwiX3NuaXBwZXRSZXN1bHRcIl07ZnVuY3Rpb24gX3IoZSl7cmV0dXJuITE9PT1mdW5jdGlvbigpe3ZhciBlPVwiX19URVNUX0tFWV9fXCI7dHJ5e3JldHVybiBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShlLFwiXCIpLGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGUpLCEwfWNhdGNoKGUpe3JldHVybiExfX0oKT97c2V0SXRlbTpmdW5jdGlvbigpe30sZ2V0SXRlbTpmdW5jdGlvbigpe3JldHVybltdfX06e3NldEl0ZW06ZnVuY3Rpb24odCl7cmV0dXJuIHdpbmRvdy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShlLEpTT04uc3RyaW5naWZ5KHQpKX0sZ2V0SXRlbTpmdW5jdGlvbigpe3ZhciB0PXdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShlKTtyZXR1cm4gdD9KU09OLnBhcnNlKHQpOltdfX19ZnVuY3Rpb24geHIoZSl7dmFyIHQ9ZS5rZXkscj1lLmxpbWl0LG49dm9pZCAwPT09cj81OnIsbz1fcih0KSxpPW8uZ2V0SXRlbSgpLnNsaWNlKDAsbik7cmV0dXJue2FkZDpmdW5jdGlvbihlKXt2YXIgdD1lO3QuX2hpZ2hsaWdodFJlc3VsdCx0Ll9zbmlwcGV0UmVzdWx0O3ZhciByPWcodCxBciksYT1pLmZpbmRJbmRleCgoZnVuY3Rpb24oZSl7cmV0dXJuIGUub2JqZWN0SUQ9PT1yLm9iamVjdElEfSkpO2E+LTEmJmkuc3BsaWNlKGEsMSksaS51bnNoaWZ0KHIpLGk9aS5zbGljZSgwLG4pLG8uc2V0SXRlbShpKX0scmVtb3ZlOmZ1bmN0aW9uKGUpe2k9aS5maWx0ZXIoKGZ1bmN0aW9uKHQpe3JldHVybiB0Lm9iamVjdElEIT09ZS5vYmplY3RJRH0pKSxvLnNldEl0ZW0oaSl9LGdldEFsbDpmdW5jdGlvbigpe3JldHVybiBpfX19ZnVuY3Rpb24gQ3IoZSl7dmFyIHQscj1cImFsZ29saWEtY2xpZW50LWpzLVwiLmNvbmNhdChlLmtleSk7ZnVuY3Rpb24gbigpe3JldHVybiB2b2lkIDA9PT10JiYodD1lLmxvY2FsU3RvcmFnZXx8d2luZG93LmxvY2FsU3RvcmFnZSksdH1mdW5jdGlvbiBvKCl7cmV0dXJuIEpTT04ucGFyc2UobigpLmdldEl0ZW0ocil8fFwie31cIil9ZnVuY3Rpb24gaShlKXtuKCkuc2V0SXRlbShyLEpTT04uc3RyaW5naWZ5KGUpKX1yZXR1cm57Z2V0OmZ1bmN0aW9uKHQscil7dmFyIG49YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnttaXNzOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfX07cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7dmFyIHIsbixhO3JldHVybiByPWUudGltZVRvTGl2ZT8xZTMqZS50aW1lVG9MaXZlOm51bGwsbj1vKCksaShhPU9iamVjdC5mcm9tRW50cmllcyhPYmplY3QuZW50cmllcyhuKS5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiB2b2lkIDAhPT1PKGUsMilbMV0udGltZXN0YW1wfSkpKSksciYmaShPYmplY3QuZnJvbUVudHJpZXMoT2JqZWN0LmVudHJpZXMoYSkuZmlsdGVyKChmdW5jdGlvbihlKXt2YXIgdD1PKGUsMilbMV0sbj0obmV3IERhdGUpLmdldFRpbWUoKTtyZXR1cm4hKHQudGltZXN0YW1wK3I8bil9KSkpKSxvKClbSlNPTi5zdHJpbmdpZnkodCldfSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBQcm9taXNlLmFsbChbZT9lLnZhbHVlOnIoKSx2b2lkIDAhPT1lXSl9KSkudGhlbigoZnVuY3Rpb24oZSl7dmFyIHQ9TyhlLDIpLHI9dFswXSxvPXRbMV07cmV0dXJuIFByb21pc2UuYWxsKFtyLG98fG4ubWlzcyhyKV0pfSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBPKGUsMSlbMF19KSl9LHNldDpmdW5jdGlvbihlLHQpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKChmdW5jdGlvbigpe3ZhciBpPW8oKTtyZXR1cm4gaVtKU09OLnN0cmluZ2lmeShlKV09e3RpbWVzdGFtcDoobmV3IERhdGUpLmdldFRpbWUoKSx2YWx1ZTp0fSxuKCkuc2V0SXRlbShyLEpTT04uc3RyaW5naWZ5KGkpKSx0fSkpfSxkZWxldGU6ZnVuY3Rpb24oZSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oKGZ1bmN0aW9uKCl7dmFyIHQ9bygpO2RlbGV0ZSB0W0pTT04uc3RyaW5naWZ5KGUpXSxuKCkuc2V0SXRlbShyLEpTT04uc3RyaW5naWZ5KHQpKX0pKX0sY2xlYXI6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoZnVuY3Rpb24oKXtuKCkucmVtb3ZlSXRlbShyKX0pKX19fWZ1bmN0aW9uIE5yKGUpe3ZhciB0PXcoZS5jYWNoZXMpLHI9dC5zaGlmdCgpO3JldHVybiB2b2lkIDA9PT1yP3tnZXQ6ZnVuY3Rpb24oZSx0KXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e21pc3M6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9fTtyZXR1cm4gdCgpLnRoZW4oKGZ1bmN0aW9uKGUpe3JldHVybiBQcm9taXNlLmFsbChbZSxyLm1pc3MoZSldKX0pKS50aGVuKChmdW5jdGlvbihlKXtyZXR1cm4gTyhlLDEpWzBdfSkpfSxzZXQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHQpfSxkZWxldGU6ZnVuY3Rpb24oZSl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfSxjbGVhcjpmdW5jdGlvbigpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKX19OntnZXQ6ZnVuY3Rpb24oZSxuKXt2YXIgbz1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06e21pc3M6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCl9fTtyZXR1cm4gci5nZXQoZSxuLG8pLmNhdGNoKChmdW5jdGlvbigpe3JldHVybiBOcih7Y2FjaGVzOnR9KS5nZXQoZSxuLG8pfSkpfSxzZXQ6ZnVuY3Rpb24oZSxuKXtyZXR1cm4gci5zZXQoZSxuKS5jYXRjaCgoZnVuY3Rpb24oKXtyZXR1cm4gTnIoe2NhY2hlczp0fSkuc2V0KGUsbil9KSl9LGRlbGV0ZTpmdW5jdGlvbihlKXtyZXR1cm4gci5kZWxldGUoZSkuY2F0Y2goKGZ1bmN0aW9uKCl7cmV0dXJuIE5yKHtjYWNoZXM6dH0pLmRlbGV0ZShlKX0pKX0sY2xlYXI6ZnVuY3Rpb24oKXtyZXR1cm4gci5jbGVhcigpLmNhdGNoKChmdW5jdGlvbigpe3JldHVybiBOcih7Y2FjaGVzOnR9KS5jbGVhcigpfSkpfX19ZnVuY3Rpb24gVHIoKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06e3NlcmlhbGl6YWJsZTohMH0sdD17fTtyZXR1cm57Z2V0OmZ1bmN0aW9uKHIsbil7dmFyIG89YXJndW1lbnRzLmxlbmd0aD4yJiZ2b2lkIDAhPT1hcmd1bWVudHNbMl0/YXJndW1lbnRzWzJdOnttaXNzOmZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfX0saT1KU09OLnN0cmluZ2lmeShyKTtpZihpIGluIHQpcmV0dXJuIFByb21pc2UucmVzb2x2ZShlLnNlcmlhbGl6YWJsZT9KU09OLnBhcnNlKHRbaV0pOnRbaV0pO3ZhciBhPW4oKTtyZXR1cm4gYS50aGVuKChmdW5jdGlvbihlKXtyZXR1cm4gby5taXNzKGUpfSkpLnRoZW4oKGZ1bmN0aW9uKCl7cmV0dXJuIGF9KSl9LHNldDpmdW5jdGlvbihyLG4pe3JldHVybiB0W0pTT04uc3RyaW5naWZ5KHIpXT1lLnNlcmlhbGl6YWJsZT9KU09OLnN0cmluZ2lmeShuKTpuLFByb21pc2UucmVzb2x2ZShuKX0sZGVsZXRlOmZ1bmN0aW9uKGUpe3JldHVybiBkZWxldGUgdFtKU09OLnN0cmluZ2lmeShlKV0sUHJvbWlzZS5yZXNvbHZlKCl9LGNsZWFyOmZ1bmN0aW9uKCl7cmV0dXJuIHQ9e30sUHJvbWlzZS5yZXNvbHZlKCl9fX1mdW5jdGlvbiBMcihlKXt2YXIgdD1lLmFsZ29saWFBZ2VudHMscj1lLmNsaWVudCxuPWUudmVyc2lvbixvPWZ1bmN0aW9uKGUpe3ZhciB0PXt2YWx1ZTpcIkFsZ29saWEgZm9yIEphdmFTY3JpcHQgKFwiLmNvbmNhdChlLFwiKVwiKSxhZGQ6ZnVuY3Rpb24oZSl7dmFyIHI9XCI7IFwiLmNvbmNhdChlLnNlZ21lbnQpLmNvbmNhdCh2b2lkIDAhPT1lLnZlcnNpb24/XCIgKFwiLmNvbmNhdChlLnZlcnNpb24sXCIpXCIpOlwiXCIpO3JldHVybi0xPT09dC52YWx1ZS5pbmRleE9mKHIpJiYodC52YWx1ZT1cIlwiLmNvbmNhdCh0LnZhbHVlKS5jb25jYXQocikpLHR9fTtyZXR1cm4gdH0obikuYWRkKHtzZWdtZW50OnIsdmVyc2lvbjpufSk7cmV0dXJuIHQuZm9yRWFjaCgoZnVuY3Rpb24oZSl7cmV0dXJuIG8uYWRkKGUpfSkpLG99dmFyIFJyPTEyZTQ7ZnVuY3Rpb24gcXIoZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOlwidXBcIixyPURhdGUubm93KCk7cmV0dXJuIHkoeSh7fSxlKSx7fSx7c3RhdHVzOnQsbGFzdFVwZGF0ZTpyLGlzVXA6ZnVuY3Rpb24oKXtyZXR1cm5cInVwXCI9PT10fHxEYXRlLm5vdygpLXI+UnJ9LGlzVGltZWRPdXQ6ZnVuY3Rpb24oKXtyZXR1cm5cInRpbWVkIG91dFwiPT09dCYmRGF0ZS5ub3coKS1yPD1Scn19KX12YXIgTXI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQscil7dmFyIG47cmV0dXJuIGwodGhpcyxlKSxmKG49dSh0aGlzLGUsW3RdKSxcIm5hbWVcIixcIkFsZ29saWFFcnJvclwiKSxyJiYobi5uYW1lPXIpLG59cmV0dXJuIHYoZSxqKEVycm9yKSkscyhlKX0oKSxIcj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxyLG4pe3ZhciBvO3JldHVybiBsKHRoaXMsZSksZihvPXUodGhpcyxlLFt0LG5dKSxcInN0YWNrVHJhY2VcIix2b2lkIDApLG8uc3RhY2tUcmFjZT1yLG99cmV0dXJuIHYoZSxNcikscyhlKX0oKSxCcj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCl7cmV0dXJuIGwodGhpcyxlKSx1KHRoaXMsZSxbXCJVbnJlYWNoYWJsZSBob3N0cyAtIHlvdXIgYXBwbGljYXRpb24gaWQgbWF5IGJlIGluY29ycmVjdC4gSWYgdGhlIGVycm9yIHBlcnNpc3RzLCBwbGVhc2UgcmVhY2ggb3V0IHRvIHRoZSBBbGdvbGlhIFN1cHBvcnQgdGVhbTogaHR0cHM6Ly9hbGcubGkvc3VwcG9ydC5cIix0LFwiUmV0cnlFcnJvclwiXSl9cmV0dXJuIHYoZSxIcikscyhlKX0oKSxGcj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxyLG4pe3ZhciBvLGk9YXJndW1lbnRzLmxlbmd0aD4zJiZ2b2lkIDAhPT1hcmd1bWVudHNbM10/YXJndW1lbnRzWzNdOlwiQXBpRXJyb3JcIjtyZXR1cm4gbCh0aGlzLGUpLGYobz11KHRoaXMsZSxbdCxuLGldKSxcInN0YXR1c1wiLHZvaWQgMCksby5zdGF0dXM9cixvfXJldHVybiB2KGUsSHIpLHMoZSl9KCksVXI9ZnVuY3Rpb24oKXtmdW5jdGlvbiBlKHQscil7dmFyIG47cmV0dXJuIGwodGhpcyxlKSxmKG49dSh0aGlzLGUsW3QsXCJEZXNlcmlhbGl6YXRpb25FcnJvclwiXSksXCJyZXNwb25zZVwiLHZvaWQgMCksbi5yZXNwb25zZT1yLG59cmV0dXJuIHYoZSxNcikscyhlKX0oKSxLcj1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxyLG4sbyl7dmFyIGk7cmV0dXJuIGwodGhpcyxlKSxmKGk9dSh0aGlzLGUsW3QscixvLFwiRGV0YWlsZWRBcGlFcnJvclwiXSksXCJlcnJvclwiLHZvaWQgMCksaS5lcnJvcj1uLGl9cmV0dXJuIHYoZSxGcikscyhlKX0oKTtmdW5jdGlvbiBWcihlLHQscil7dmFyIG4sbz0obj1yLE9iamVjdC5rZXlzKG4pLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIHZvaWQgMCE9PW5bZV19KSkuc29ydCgpLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuXCJcIi5jb25jYXQoZSxcIj1cIikuY29uY2F0KGVuY29kZVVSSUNvbXBvbmVudChcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobltlXSk/bltlXS5qb2luKFwiLFwiKTpuW2VdKS5yZXBsYWNlKC9cXCsvZyxcIiUyMFwiKSl9KSkuam9pbihcIiZcIikpLGk9XCJcIi5jb25jYXQoZS5wcm90b2NvbCxcIjovL1wiKS5jb25jYXQoZS51cmwpLmNvbmNhdChlLnBvcnQ/XCI6XCIuY29uY2F0KGUucG9ydCk6XCJcIixcIi9cIikuY29uY2F0KFwiL1wiPT09dC5jaGFyQXQoMCk/dC5zdWJzdHJpbmcoMSk6dCk7cmV0dXJuIG8ubGVuZ3RoJiYoaSs9XCI/XCIuY29uY2F0KG8pKSxpfWZ1bmN0aW9uIHpyKGUsdCl7aWYoXCJHRVRcIiE9PWUubWV0aG9kJiYodm9pZCAwIT09ZS5kYXRhfHx2b2lkIDAhPT10LmRhdGEpKXt2YXIgcj1BcnJheS5pc0FycmF5KGUuZGF0YSk/ZS5kYXRhOnkoeSh7fSxlLmRhdGEpLHQuZGF0YSk7cmV0dXJuIEpTT04uc3RyaW5naWZ5KHIpfX1mdW5jdGlvbiBKcihlLHQscil7dmFyIG49eSh5KHkoe0FjY2VwdDpcImFwcGxpY2F0aW9uL2pzb25cIn0sZSksdCksciksbz17fTtyZXR1cm4gT2JqZWN0LmtleXMobikuZm9yRWFjaCgoZnVuY3Rpb24oZSl7dmFyIHQ9bltlXTtvW2UudG9Mb3dlckNhc2UoKV09dH0pKSxvfWZ1bmN0aW9uIFFyKGUpe3RyeXtyZXR1cm4gSlNPTi5wYXJzZShlLmNvbnRlbnQpfWNhdGNoKHQpe3Rocm93IG5ldyBVcih0Lm1lc3NhZ2UsZSl9fWZ1bmN0aW9uIFdyKGUsdCl7dmFyIHI9ZS5jb250ZW50LG49ZS5zdGF0dXM7dHJ5e3ZhciBvPUpTT04ucGFyc2Uocik7cmV0dXJuXCJlcnJvclwiaW4gbz9uZXcgS3Ioby5tZXNzYWdlLG4sby5lcnJvcix0KTpuZXcgRnIoby5tZXNzYWdlLG4sdCl9Y2F0Y2goZSl7fXJldHVybiBuZXcgRnIocixuLHQpfWZ1bmN0aW9uIFpyKGUpe3JldHVybiBlLm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIEdyKGUpfSkpfWZ1bmN0aW9uIEdyKGUpe3ZhciB0PWUucmVxdWVzdC5oZWFkZXJzW1wieC1hbGdvbGlhLWFwaS1rZXlcIl0/e1wieC1hbGdvbGlhLWFwaS1rZXlcIjpcIioqKioqXCJ9Ont9O3JldHVybiB5KHkoe30sZSkse30se3JlcXVlc3Q6eSh5KHt9LGUucmVxdWVzdCkse30se2hlYWRlcnM6eSh5KHt9LGUucmVxdWVzdC5oZWFkZXJzKSx0KX0pfSl9dmFyIFlyPVtcImFwcElkXCIsXCJhcGlLZXlcIixcImF1dGhNb2RlXCIsXCJhbGdvbGlhQWdlbnRzXCJdLCRyPVtcInBhcmFtc1wiXSxYcj1cIjUuMTkuMFwiO2Z1bmN0aW9uIGVuKGUpe3JldHVyblt7dXJsOlwiXCIuY29uY2F0KGUsXCItZHNuLmFsZ29saWEubmV0XCIpLGFjY2VwdDpcInJlYWRcIixwcm90b2NvbDpcImh0dHBzXCJ9LHt1cmw6XCJcIi5jb25jYXQoZSxcIi5hbGdvbGlhLm5ldFwiKSxhY2NlcHQ6XCJ3cml0ZVwiLHByb3RvY29sOlwiaHR0cHNcIn1dLmNvbmNhdChmdW5jdGlvbihlKXtmb3IodmFyIHQ9ZSxyPWUubGVuZ3RoLTE7cj4wO3ItLSl7dmFyIG49TWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpKihyKzEpKSxvPWVbcl07dFtyXT1lW25dLHRbbl09b31yZXR1cm4gdH0oW3t1cmw6XCJcIi5jb25jYXQoZSxcIi0xLmFsZ29saWFuZXQuY29tXCIpLGFjY2VwdDpcInJlYWRXcml0ZVwiLHByb3RvY29sOlwiaHR0cHNcIn0se3VybDpcIlwiLmNvbmNhdChlLFwiLTIuYWxnb2xpYW5ldC5jb21cIiksYWNjZXB0OlwicmVhZFdyaXRlXCIscHJvdG9jb2w6XCJodHRwc1wifSx7dXJsOlwiXCIuY29uY2F0KGUsXCItMy5hbGdvbGlhbmV0LmNvbVwiKSxhY2NlcHQ6XCJyZWFkV3JpdGVcIixwcm90b2NvbDpcImh0dHBzXCJ9XSkpfWZ1bmN0aW9uIHRuKGUpe3ZhciB0PWUuYXBwSWQscj1lLmFwaUtleSxuPWUuYXV0aE1vZGUsbz1lLmFsZ29saWFBZ2VudHMsaT1nKGUsWXIpLGE9ZnVuY3Rpb24oZSx0KXt2YXIgcj1hcmd1bWVudHMubGVuZ3RoPjImJnZvaWQgMCE9PWFyZ3VtZW50c1syXT9hcmd1bWVudHNbMl06XCJXaXRoaW5IZWFkZXJzXCIsbj17XCJ4LWFsZ29saWEtYXBpLWtleVwiOnQsXCJ4LWFsZ29saWEtYXBwbGljYXRpb24taWRcIjplfTtyZXR1cm57aGVhZGVyczpmdW5jdGlvbigpe3JldHVyblwiV2l0aGluSGVhZGVyc1wiPT09cj9uOnt9fSxxdWVyeVBhcmFtZXRlcnM6ZnVuY3Rpb24oKXtyZXR1cm5cIldpdGhpblF1ZXJ5UGFyYW1ldGVyc1wiPT09cj9uOnt9fX19KHQscixuKSx1PWZ1bmN0aW9uKGUpe3ZhciB0PWUuaG9zdHMscj1lLmhvc3RzQ2FjaGUsbj1lLmJhc2VIZWFkZXJzLG89ZS5sb2dnZXIsaT1lLmJhc2VRdWVyeVBhcmFtZXRlcnMsYT1lLmFsZ29saWFBZ2VudCx1PWUudGltZW91dHMsbD1lLnJlcXVlc3RlcixzPWUucmVxdWVzdHNDYWNoZSxmPWUucmVzcG9uc2VzQ2FjaGU7ZnVuY3Rpb24gbShlKXtyZXR1cm4gcC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gcCgpe3JldHVybihwPWMoYigpLm1hcmsoKGZ1bmN0aW9uIGUodCl7dmFyIG4sbyxpLGEsYztyZXR1cm4gYigpLndyYXAoKGZ1bmN0aW9uKGUpe2Zvcig7Oylzd2l0Y2goZS5wcmV2PWUubmV4dCl7Y2FzZSAwOnJldHVybiBlLm5leHQ9MixQcm9taXNlLmFsbCh0Lm1hcCgoZnVuY3Rpb24oZSl7cmV0dXJuIHIuZ2V0KGUsKGZ1bmN0aW9uKCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZShxcihlKSl9KSl9KSkpO2Nhc2UgMjpyZXR1cm4gbj1lLnNlbnQsbz1uLmZpbHRlcigoZnVuY3Rpb24oZSl7cmV0dXJuIGUuaXNVcCgpfSkpLGk9bi5maWx0ZXIoKGZ1bmN0aW9uKGUpe3JldHVybiBlLmlzVGltZWRPdXQoKX0pKSxhPVtdLmNvbmNhdCh3KG8pLHcoaSkpLGM9YS5sZW5ndGg+MD9hOnQsZS5hYnJ1cHQoXCJyZXR1cm5cIix7aG9zdHM6YyxnZXRUaW1lb3V0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuKDA9PT1pLmxlbmd0aCYmMD09PWU/MTppLmxlbmd0aCszK2UpKnR9fSk7Y2FzZSA4OmNhc2VcImVuZFwiOnJldHVybiBlLnN0b3AoKX19KSxlKX0pKSkpLmFwcGx5KHRoaXMsYXJndW1lbnRzKX1mdW5jdGlvbiB2KGUsdCl7cmV0dXJuIGQuYXBwbHkodGhpcyxhcmd1bWVudHMpfWZ1bmN0aW9uIGQoKXtyZXR1cm4gZD1jKGIoKS5tYXJrKChmdW5jdGlvbiBlKHMsZil7dmFyIHAsdixkLGgsZyxTLE8sRSxqLFAsSSxELGssQT1hcmd1bWVudHM7cmV0dXJuIGIoKS53cmFwKChmdW5jdGlvbihlKXtmb3IoOzspc3dpdGNoKGUucHJldj1lLm5leHQpe2Nhc2UgMDppZihwPSEoQS5sZW5ndGg+MiYmdm9pZCAwIT09QVsyXSl8fEFbMl0sdj1bXSxkPXpyKHMsZiksaD1KcihuLHMuaGVhZGVycyxmLmhlYWRlcnMpLGc9XCJHRVRcIj09PXMubWV0aG9kP3koeSh7fSxzLmRhdGEpLGYuZGF0YSk6e30sUz15KHkoeSh7fSxpKSxzLnF1ZXJ5UGFyYW1ldGVycyksZyksYS52YWx1ZSYmKFNbXCJ4LWFsZ29saWEtYWdlbnRcIl09YS52YWx1ZSksZiYmZi5xdWVyeVBhcmFtZXRlcnMpZm9yKE89MCxFPU9iamVjdC5rZXlzKGYucXVlcnlQYXJhbWV0ZXJzKTtPPEUubGVuZ3RoO08rKylqPUVbT10sZi5xdWVyeVBhcmFtZXRlcnNbal0mJlwiW29iamVjdCBPYmplY3RdXCIhPT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZi5xdWVyeVBhcmFtZXRlcnNbal0pP1Nbal09Zi5xdWVyeVBhcmFtZXRlcnNbal0udG9TdHJpbmcoKTpTW2pdPWYucXVlcnlQYXJhbWV0ZXJzW2pdO3JldHVybiBQPTAsST1mdW5jdGlvbigpe3ZhciBlPWMoYigpLm1hcmsoKGZ1bmN0aW9uIGUodCxuKXt2YXIgaSxhLGMsbSxnLE87cmV0dXJuIGIoKS53cmFwKChmdW5jdGlvbihlKXtmb3IoOzspc3dpdGNoKGUucHJldj1lLm5leHQpe2Nhc2UgMDppZih2b2lkIDAhPT0oaT10LnBvcCgpKSl7ZS5uZXh0PTM7YnJlYWt9dGhyb3cgbmV3IEJyKFpyKHYpKTtjYXNlIDM6cmV0dXJuIGE9eSh5KHt9LHUpLGYudGltZW91dHMpLGM9e2RhdGE6ZCxoZWFkZXJzOmgsbWV0aG9kOnMubWV0aG9kLHVybDpWcihpLHMucGF0aCxTKSxjb25uZWN0VGltZW91dDpuKFAsYS5jb25uZWN0KSxyZXNwb25zZVRpbWVvdXQ6bihQLHA/YS5yZWFkOmEud3JpdGUpfSxtPWZ1bmN0aW9uKGUpe3ZhciByPXtyZXF1ZXN0OmMscmVzcG9uc2U6ZSxob3N0OmksdHJpZXNMZWZ0OnQubGVuZ3RofTtyZXR1cm4gdi5wdXNoKHIpLHJ9LGUubmV4dD04LGwuc2VuZChjKTtjYXNlIDg6aWYodz12b2lkIDAsRT12b2lkIDAsdz0oYj1nPWUuc2VudCkuaXNUaW1lZE91dCxFPWIuc3RhdHVzLCEod3x8ZnVuY3Rpb24oZSl7dmFyIHQ9ZS5pc1RpbWVkT3V0LHI9ZS5zdGF0dXM7cmV0dXJuIXQmJiF+fnJ9KHtpc1RpbWVkT3V0Oncsc3RhdHVzOkV9KXx8MiE9fn4oRS8xMDApJiY0IT1+fihFLzEwMCkpKXtlLm5leHQ9MTY7YnJlYWt9cmV0dXJuIE89bShnKSxnLmlzVGltZWRPdXQmJlArKyxvLmluZm8oXCJSZXRyeWFibGUgZmFpbHVyZVwiLEdyKE8pKSxlLm5leHQ9MTUsci5zZXQoaSxxcihpLGcuaXNUaW1lZE91dD9cInRpbWVkIG91dFwiOlwiZG93blwiKSk7Y2FzZSAxNTpyZXR1cm4gZS5hYnJ1cHQoXCJyZXR1cm5cIixJKHQsbikpO2Nhc2UgMTY6aWYoMiE9fn4oZy5zdGF0dXMvMTAwKSl7ZS5uZXh0PTE4O2JyZWFrfXJldHVybiBlLmFicnVwdChcInJldHVyblwiLFFyKGcpKTtjYXNlIDE4OnRocm93IG0oZyksV3IoZyx2KTtjYXNlIDIwOmNhc2VcImVuZFwiOnJldHVybiBlLnN0b3AoKX12YXIgYix3LEV9KSxlKX0pKSk7cmV0dXJuIGZ1bmN0aW9uKHQscil7cmV0dXJuIGUuYXBwbHkodGhpcyxhcmd1bWVudHMpfX0oKSxEPXQuZmlsdGVyKChmdW5jdGlvbihlKXtyZXR1cm5cInJlYWRXcml0ZVwiPT09ZS5hY2NlcHR8fChwP1wicmVhZFwiPT09ZS5hY2NlcHQ6XCJ3cml0ZVwiPT09ZS5hY2NlcHQpfSkpLGUubmV4dD0xMyxtKEQpO2Nhc2UgMTM6cmV0dXJuIGs9ZS5zZW50LGUuYWJydXB0KFwicmV0dXJuXCIsSSh3KGsuaG9zdHMpLnJldmVyc2UoKSxrLmdldFRpbWVvdXQpKTtjYXNlIDE1OmNhc2VcImVuZFwiOnJldHVybiBlLnN0b3AoKX19KSxlKX0pKSksZC5hcHBseSh0aGlzLGFyZ3VtZW50cyl9cmV0dXJue2hvc3RzQ2FjaGU6cixyZXF1ZXN0ZXI6bCx0aW1lb3V0czp1LGxvZ2dlcjpvLGFsZ29saWFBZ2VudDphLGJhc2VIZWFkZXJzOm4sYmFzZVF1ZXJ5UGFyYW1ldGVyczppLGhvc3RzOnQscmVxdWVzdDpmdW5jdGlvbihlKXt2YXIgdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06e30scj1lLnVzZVJlYWRUcmFuc3BvcnRlcnx8XCJHRVRcIj09PWUubWV0aG9kO2lmKCFyKXJldHVybiB2KGUsdCxyKTt2YXIgbz1mdW5jdGlvbigpe3JldHVybiB2KGUsdCl9O2lmKCEwIT09KHQuY2FjaGVhYmxlfHxlLmNhY2hlYWJsZSkpcmV0dXJuIG8oKTt2YXIgYT17cmVxdWVzdDplLHJlcXVlc3RPcHRpb25zOnQsdHJhbnNwb3J0ZXI6e3F1ZXJ5UGFyYW1ldGVyczppLGhlYWRlcnM6bn19O3JldHVybiBmLmdldChhLChmdW5jdGlvbigpe3JldHVybiBzLmdldChhLChmdW5jdGlvbigpe3JldHVybiBzLnNldChhLG8oKSkudGhlbigoZnVuY3Rpb24oZSl7cmV0dXJuIFByb21pc2UuYWxsKFtzLmRlbGV0ZShhKSxlXSl9KSwoZnVuY3Rpb24oZSl7cmV0dXJuIFByb21pc2UuYWxsKFtzLmRlbGV0ZShhKSxQcm9taXNlLnJlamVjdChlKV0pfSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3ZhciB0PU8oZSwyKTtyZXR1cm4gdFswXSx0WzFdfSkpfSkpfSkse21pc3M6ZnVuY3Rpb24oZSl7cmV0dXJuIGYuc2V0KGEsZSl9fSl9LHJlcXVlc3RzQ2FjaGU6cyxyZXNwb25zZXNDYWNoZTpmfX0oeSh5KHtob3N0czplbih0KX0saSkse30se2FsZ29saWFBZ2VudDpMcih7YWxnb2xpYUFnZW50czpvLGNsaWVudDpcIkxpdGVcIix2ZXJzaW9uOlhyfSksYmFzZUhlYWRlcnM6eSh5KHtcImNvbnRlbnQtdHlwZVwiOlwidGV4dC9wbGFpblwifSxhLmhlYWRlcnMoKSksaS5iYXNlSGVhZGVycyksYmFzZVF1ZXJ5UGFyYW1ldGVyczp5KHkoe30sYS5xdWVyeVBhcmFtZXRlcnMoKSksaS5iYXNlUXVlcnlQYXJhbWV0ZXJzKX0pKTtyZXR1cm57dHJhbnNwb3J0ZXI6dSxhcHBJZDp0LGFwaUtleTpyLGNsZWFyQ2FjaGU6ZnVuY3Rpb24oKXtyZXR1cm4gUHJvbWlzZS5hbGwoW3UucmVxdWVzdHNDYWNoZS5jbGVhcigpLHUucmVzcG9uc2VzQ2FjaGUuY2xlYXIoKV0pLnRoZW4oKGZ1bmN0aW9uKCl7fSkpfSxnZXQgX3VhKCl7cmV0dXJuIHUuYWxnb2xpYUFnZW50LnZhbHVlfSxhZGRBbGdvbGlhQWdlbnQ6ZnVuY3Rpb24oZSx0KXt1LmFsZ29saWFBZ2VudC5hZGQoe3NlZ21lbnQ6ZSx2ZXJzaW9uOnR9KX0sc2V0Q2xpZW50QXBpS2V5OmZ1bmN0aW9uKGUpe3ZhciB0PWUuYXBpS2V5O24mJlwiV2l0aGluSGVhZGVyc1wiIT09bj91LmJhc2VRdWVyeVBhcmFtZXRlcnNbXCJ4LWFsZ29saWEtYXBpLWtleVwiXT10OnUuYmFzZUhlYWRlcnNbXCJ4LWFsZ29saWEtYXBpLWtleVwiXT10fSxzZWFyY2hGb3JIaXRzOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHRoaXMuc2VhcmNoKGUsdCl9LHNlYXJjaEZvckZhY2V0czpmdW5jdGlvbihlLHQpe3JldHVybiB0aGlzLnNlYXJjaChlLHQpfSxjdXN0b21Qb3N0OmZ1bmN0aW9uKGUsdCl7dmFyIHI9ZS5wYXRoLG49ZS5wYXJhbWV0ZXJzLG89ZS5ib2R5O2lmKCFyKXRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBgcGF0aGAgaXMgcmVxdWlyZWQgd2hlbiBjYWxsaW5nIGBjdXN0b21Qb3N0YC5cIik7dmFyIGk9e21ldGhvZDpcIlBPU1RcIixwYXRoOlwiL3twYXRofVwiLnJlcGxhY2UoXCJ7cGF0aH1cIixyKSxxdWVyeVBhcmFtZXRlcnM6bnx8e30saGVhZGVyczp7fSxkYXRhOm98fHt9fTtyZXR1cm4gdS5yZXF1ZXN0KGksdCl9LGdldFJlY29tbWVuZGF0aW9uczpmdW5jdGlvbihlLHQpe2UmJkFycmF5LmlzQXJyYXkoZSkmJihlPXtyZXF1ZXN0czplfSk7aWYoIWUpdGhyb3cgbmV3IEVycm9yKFwiUGFyYW1ldGVyIGBnZXRSZWNvbW1lbmRhdGlvbnNQYXJhbXNgIGlzIHJlcXVpcmVkIHdoZW4gY2FsbGluZyBgZ2V0UmVjb21tZW5kYXRpb25zYC5cIik7aWYoIWUucmVxdWVzdHMpdGhyb3cgbmV3IEVycm9yKFwiUGFyYW1ldGVyIGBnZXRSZWNvbW1lbmRhdGlvbnNQYXJhbXMucmVxdWVzdHNgIGlzIHJlcXVpcmVkIHdoZW4gY2FsbGluZyBgZ2V0UmVjb21tZW5kYXRpb25zYC5cIik7dmFyIHI9e21ldGhvZDpcIlBPU1RcIixwYXRoOlwiLzEvaW5kZXhlcy8qL3JlY29tbWVuZGF0aW9uc1wiLHF1ZXJ5UGFyYW1ldGVyczp7fSxoZWFkZXJzOnt9LGRhdGE6ZSx1c2VSZWFkVHJhbnNwb3J0ZXI6ITAsY2FjaGVhYmxlOiEwfTtyZXR1cm4gdS5yZXF1ZXN0KHIsdCl9LHNlYXJjaDpmdW5jdGlvbihlLHQpe2lmKGUmJkFycmF5LmlzQXJyYXkoZSkpe3ZhciByPXtyZXF1ZXN0czplLm1hcCgoZnVuY3Rpb24oZSl7dmFyIHQ9ZS5wYXJhbXMscj1nKGUsJHIpO3JldHVyblwiZmFjZXRcIj09PXIudHlwZT95KHkoeSh7fSxyKSx0KSx7fSx7dHlwZTpcImZhY2V0XCJ9KTp5KHkoeSh7fSxyKSx0KSx7fSx7ZmFjZXQ6dm9pZCAwLG1heEZhY2V0SGl0czp2b2lkIDAsZmFjZXRRdWVyeTp2b2lkIDB9KX0pKX07ZT1yfWlmKCFlKXRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBgc2VhcmNoTWV0aG9kUGFyYW1zYCBpcyByZXF1aXJlZCB3aGVuIGNhbGxpbmcgYHNlYXJjaGAuXCIpO2lmKCFlLnJlcXVlc3RzKXRocm93IG5ldyBFcnJvcihcIlBhcmFtZXRlciBgc2VhcmNoTWV0aG9kUGFyYW1zLnJlcXVlc3RzYCBpcyByZXF1aXJlZCB3aGVuIGNhbGxpbmcgYHNlYXJjaGAuXCIpO3ZhciBuPXttZXRob2Q6XCJQT1NUXCIscGF0aDpcIi8xL2luZGV4ZXMvKi9xdWVyaWVzXCIscXVlcnlQYXJhbWV0ZXJzOnt9LGhlYWRlcnM6e30sZGF0YTplLHVzZVJlYWRUcmFuc3BvcnRlcjohMCxjYWNoZWFibGU6ITB9O3JldHVybiB1LnJlcXVlc3Qobix0KX19fXZhciBybj1cIjMuOS4wXCI7ZnVuY3Rpb24gbm4odCxyLG4pe3JldHVybiBlLnVzZU1lbW8oKGZ1bmN0aW9uKCl7dmFyIGU9ZnVuY3Rpb24oZSx0LHIpe2lmKCFlfHxcInN0cmluZ1wiIT10eXBlb2YgZSl0aHJvdyBuZXcgRXJyb3IoXCJgYXBwSWRgIGlzIG1pc3NpbmcuXCIpO2lmKCF0fHxcInN0cmluZ1wiIT10eXBlb2YgdCl0aHJvdyBuZXcgRXJyb3IoXCJgYXBpS2V5YCBpcyBtaXNzaW5nLlwiKTtyZXR1cm4gdG4oeSh7YXBwSWQ6ZSxhcGlLZXk6dCx0aW1lb3V0czp7Y29ubmVjdDoxZTMscmVhZDoyZTMsd3JpdGU6M2U0fSxsb2dnZXI6e2RlYnVnOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfSxpbmZvOmZ1bmN0aW9uKGUsdCl7cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpfSxlcnJvcjpmdW5jdGlvbihlLHQpe3JldHVybiBQcm9taXNlLnJlc29sdmUoKX19LHJlcXVlc3Rlcjp7c2VuZDpmdW5jdGlvbihlKXtyZXR1cm4gbmV3IFByb21pc2UoKGZ1bmN0aW9uKHQpe3ZhciByPW5ldyBYTUxIdHRwUmVxdWVzdDtyLm9wZW4oZS5tZXRob2QsZS51cmwsITApLE9iamVjdC5rZXlzKGUuaGVhZGVycykuZm9yRWFjaCgoZnVuY3Rpb24odCl7cmV0dXJuIHIuc2V0UmVxdWVzdEhlYWRlcih0LGUuaGVhZGVyc1t0XSl9KSk7dmFyIG4sbz1mdW5jdGlvbihlLG4pe3JldHVybiBzZXRUaW1lb3V0KChmdW5jdGlvbigpe3IuYWJvcnQoKSx0KHtzdGF0dXM6MCxjb250ZW50Om4saXNUaW1lZE91dDohMH0pfSksZSl9LGk9byhlLmNvbm5lY3RUaW1lb3V0LFwiQ29ubmVjdGlvbiB0aW1lb3V0XCIpO3Iub25yZWFkeXN0YXRlY2hhbmdlPWZ1bmN0aW9uKCl7ci5yZWFkeVN0YXRlPnIuT1BFTkVEJiZ2b2lkIDA9PT1uJiYoY2xlYXJUaW1lb3V0KGkpLG49byhlLnJlc3BvbnNlVGltZW91dCxcIlNvY2tldCB0aW1lb3V0XCIpKX0sci5vbmVycm9yPWZ1bmN0aW9uKCl7MD09PXIuc3RhdHVzJiYoY2xlYXJUaW1lb3V0KGkpLGNsZWFyVGltZW91dChuKSx0KHtjb250ZW50OnIucmVzcG9uc2VUZXh0fHxcIk5ldHdvcmsgcmVxdWVzdCBmYWlsZWRcIixzdGF0dXM6ci5zdGF0dXMsaXNUaW1lZE91dDohMX0pKX0sci5vbmxvYWQ9ZnVuY3Rpb24oKXtjbGVhclRpbWVvdXQoaSksY2xlYXJUaW1lb3V0KG4pLHQoe2NvbnRlbnQ6ci5yZXNwb25zZVRleHQsc3RhdHVzOnIuc3RhdHVzLGlzVGltZWRPdXQ6ITF9KX0sci5zZW5kKGUuZGF0YSl9KSl9fSxhbGdvbGlhQWdlbnRzOlt7c2VnbWVudDpcIkJyb3dzZXJcIn1dLGF1dGhNb2RlOlwiV2l0aGluUXVlcnlQYXJhbWV0ZXJzXCIscmVzcG9uc2VzQ2FjaGU6VHIoKSxyZXF1ZXN0c0NhY2hlOlRyKHtzZXJpYWxpemFibGU6ITF9KSxob3N0c0NhY2hlOk5yKHtjYWNoZXM6W0NyKHtrZXk6XCJcIi5jb25jYXQoWHIsXCItXCIpLmNvbmNhdChlKX0pLFRyKCldfSl9LHIpKX0odCxyKTtyZXR1cm4gZS5hZGRBbGdvbGlhQWdlbnQoXCJkb2NzZWFyY2hcIixybiksITE9PT0vZG9jc2VhcmNoLmpzIFxcKC4qXFwpLy50ZXN0KGUudHJhbnNwb3J0ZXIuYWxnb2xpYUFnZW50LnZhbHVlKSYmZS5hZGRBbGdvbGlhQWdlbnQoXCJkb2NzZWFyY2gtcmVhY3RcIixybiksbihlKX0pLFt0LHIsbl0pfXZhciBvbj1bXCJmb290ZXJcIixcInNlYXJjaEJveFwiXTtmdW5jdGlvbiBhbih0KXt2YXIgcj10LmFwcElkLG49dC5hcGlLZXksbz10LmluZGV4TmFtZSxpPXQucGxhY2Vob2xkZXIsYT12b2lkIDA9PT1pP1wiU2VhcmNoIGRvY3NcIjppLGM9dC5zZWFyY2hQYXJhbWV0ZXJzLHU9dC5tYXhSZXN1bHRzUGVyR3JvdXAsbD10Lm9uQ2xvc2Uscz12b2lkIDA9PT1sP2dyOmwsZj10LnRyYW5zZm9ybUl0ZW1zLHA9dm9pZCAwPT09Zj9ocjpmLHY9dC5oaXRDb21wb25lbnQsZD12b2lkIDA9PT12P1p0OnYsaD10LnJlc3VsdHNGb290ZXJDb21wb25lbnQsYj12b2lkIDA9PT1oP2Z1bmN0aW9uKCl7cmV0dXJuIG51bGx9OmgsUz10Lm5hdmlnYXRvcix3PXQuaW5pdGlhbFNjcm9sbFksRT12b2lkIDA9PT13PzA6dyxqPXQudHJhbnNmb3JtU2VhcmNoQ2xpZW50LFA9dm9pZCAwPT09aj9ocjpqLEk9dC5kaXNhYmxlVXNlclBlcnNvbmFsaXphdGlvbixEPXZvaWQgMCE9PUkmJkksaz10LmluaXRpYWxRdWVyeSxBPXZvaWQgMD09PWs/XCJcIjprLF89dC50cmFuc2xhdGlvbnMseD12b2lkIDA9PT1fP3t9Ol8sQz10LmdldE1pc3NpbmdSZXN1bHRzVXJsLE49dC5pbnNpZ2h0cyxUPXZvaWQgMCE9PU4mJk4sTD14LmZvb3RlcixSPXguc2VhcmNoQm94LHE9Zyh4LG9uKSxNPU8oZS51c2VTdGF0ZSh7cXVlcnk6XCJcIixjb2xsZWN0aW9uczpbXSxjb21wbGV0aW9uOm51bGwsY29udGV4dDp7fSxpc09wZW46ITEsYWN0aXZlSXRlbUlkOm51bGwsc3RhdHVzOlwiaWRsZVwifSksMiksSD1NWzBdLEI9TVsxXSxGPWUudXNlUmVmKG51bGwpLFU9ZS51c2VSZWYobnVsbCksSz1lLnVzZVJlZihudWxsKSxWPWUudXNlUmVmKG51bGwpLHo9ZS51c2VSZWYobnVsbCksSj1lLnVzZVJlZigxMCksUT1lLnVzZVJlZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93P3dpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLnNsaWNlKDAsNjQpOlwiXCIpLmN1cnJlbnQsVz1lLnVzZVJlZihBfHxRKS5jdXJyZW50LFo9bm4ocixuLFApLEc9ZS51c2VSZWYoeHIoe2tleTpcIl9fRE9DU0VBUkNIX0ZBVk9SSVRFX1NFQVJDSEVTX19cIi5jb25jYXQobyksbGltaXQ6MTB9KSkuY3VycmVudCxZPWUudXNlUmVmKHhyKHtrZXk6XCJfX0RPQ1NFQVJDSF9SRUNFTlRfU0VBUkNIRVNfX1wiLmNvbmNhdChvKSxsaW1pdDowPT09Ry5nZXRBbGwoKS5sZW5ndGg/Nzo0fSkpLmN1cnJlbnQsJD1lLnVzZUNhbGxiYWNrKChmdW5jdGlvbihlKXtpZighRCl7dmFyIHQ9XCJjb250ZW50XCI9PT1lLnR5cGU/ZS5fX2RvY3NlYXJjaF9wYXJlbnQ6ZTt0JiYtMT09PUcuZ2V0QWxsKCkuZmluZEluZGV4KChmdW5jdGlvbihlKXtyZXR1cm4gZS5vYmplY3RJRD09PXQub2JqZWN0SUR9KSkmJlkuYWRkKHQpfX0pLFtHLFksRF0pLFg9ZS51c2VDYWxsYmFjaygoZnVuY3Rpb24oZSl7aWYoSC5jb250ZXh0LmFsZ29saWFJbnNpZ2h0c1BsdWdpbiYmZS5fX2F1dG9jb21wbGV0ZV9pZCl7dmFyIHQ9ZSxyPXtldmVudE5hbWU6XCJJdGVtIFNlbGVjdGVkXCIsaW5kZXg6dC5fX2F1dG9jb21wbGV0ZV9pbmRleE5hbWUsaXRlbXM6W3RdLHBvc2l0aW9uczpbZS5fX2F1dG9jb21wbGV0ZV9pZF0scXVlcnlJRDp0Ll9fYXV0b2NvbXBsZXRlX3F1ZXJ5SUR9O0guY29udGV4dC5hbGdvbGlhSW5zaWdodHNQbHVnaW4uaW5zaWdodHMuY2xpY2tlZE9iamVjdElEc0FmdGVyU2VhcmNoKHIpfX0pLFtILmNvbnRleHQuYWxnb2xpYUluc2lnaHRzUGx1Z2luXSksZWU9ZS51c2VNZW1vKChmdW5jdGlvbigpe3JldHVybiB6dCh7aWQ6XCJkb2NzZWFyY2hcIixkZWZhdWx0QWN0aXZlSXRlbUlkOjAscGxhY2Vob2xkZXI6YSxvcGVuT25Gb2N1czohMCxpbml0aWFsU3RhdGU6e3F1ZXJ5OlcsY29udGV4dDp7c2VhcmNoU3VnZ2VzdGlvbnM6W119fSxpbnNpZ2h0czpULG5hdmlnYXRvcjpTLG9uU3RhdGVDaGFuZ2U6ZnVuY3Rpb24oZSl7QihlLnN0YXRlKX0sZ2V0U291cmNlczpmdW5jdGlvbihlKXt2YXIgdD1lLnF1ZXJ5LGk9ZS5zdGF0ZSxhPWUuc2V0Q29udGV4dCxsPWUuc2V0U3RhdHVzO2lmKCF0KXJldHVybiBEP1tdOlt7c291cmNlSWQ6XCJyZWNlbnRTZWFyY2hlc1wiLG9uU2VsZWN0OmZ1bmN0aW9uKGUpe3ZhciB0PWUuaXRlbSxyPWUuZXZlbnQ7JCh0KSx5cihyKXx8cygpfSxnZXRJdGVtVXJsOmZ1bmN0aW9uKGUpe3JldHVybiBlLml0ZW0udXJsfSxnZXRJdGVtczpmdW5jdGlvbigpe3JldHVybiBZLmdldEFsbCgpfX0se3NvdXJjZUlkOlwiZmF2b3JpdGVTZWFyY2hlc1wiLG9uU2VsZWN0OmZ1bmN0aW9uKGUpe3ZhciB0PWUuaXRlbSxyPWUuZXZlbnQ7JCh0KSx5cihyKXx8cygpfSxnZXRJdGVtVXJsOmZ1bmN0aW9uKGUpe3JldHVybiBlLml0ZW0udXJsfSxnZXRJdGVtczpmdW5jdGlvbigpe3JldHVybiBHLmdldEFsbCgpfX1dO3ZhciBmPUJvb2xlYW4oVCk7cmV0dXJuIFouc2VhcmNoKHtyZXF1ZXN0czpbeSh7cXVlcnk6dCxpbmRleE5hbWU6byxhdHRyaWJ1dGVzVG9SZXRyaWV2ZTpbXCJoaWVyYXJjaHkubHZsMFwiLFwiaGllcmFyY2h5Lmx2bDFcIixcImhpZXJhcmNoeS5sdmwyXCIsXCJoaWVyYXJjaHkubHZsM1wiLFwiaGllcmFyY2h5Lmx2bDRcIixcImhpZXJhcmNoeS5sdmw1XCIsXCJoaWVyYXJjaHkubHZsNlwiLFwiY29udGVudFwiLFwidHlwZVwiLFwidXJsXCJdLGF0dHJpYnV0ZXNUb1NuaXBwZXQ6W1wiaGllcmFyY2h5Lmx2bDE6XCIuY29uY2F0KEouY3VycmVudCksXCJoaWVyYXJjaHkubHZsMjpcIi5jb25jYXQoSi5jdXJyZW50KSxcImhpZXJhcmNoeS5sdmwzOlwiLmNvbmNhdChKLmN1cnJlbnQpLFwiaGllcmFyY2h5Lmx2bDQ6XCIuY29uY2F0KEouY3VycmVudCksXCJoaWVyYXJjaHkubHZsNTpcIi5jb25jYXQoSi5jdXJyZW50KSxcImhpZXJhcmNoeS5sdmw2OlwiLmNvbmNhdChKLmN1cnJlbnQpLFwiY29udGVudDpcIi5jb25jYXQoSi5jdXJyZW50KV0sc25pcHBldEVsbGlwc2lzVGV4dDpcIuKAplwiLGhpZ2hsaWdodFByZVRhZzpcIjxtYXJrPlwiLGhpZ2hsaWdodFBvc3RUYWc6XCI8L21hcms+XCIsaGl0c1BlclBhZ2U6MjAsY2xpY2tBbmFseXRpY3M6Zn0sYyldfSkuY2F0Y2goKGZ1bmN0aW9uKGUpe3Rocm93XCJSZXRyeUVycm9yXCI9PT1lLm5hbWUmJmwoXCJlcnJvclwiKSxlfSkpLnRoZW4oKGZ1bmN0aW9uKGUpe3ZhciB0PWUucmVzdWx0c1swXSxjPXQuaGl0cyxsPXQubmJIaXRzLG09ZHIoYywoZnVuY3Rpb24oZSl7cmV0dXJuIE9yKGUpfSksdSk7aS5jb250ZXh0LnNlYXJjaFN1Z2dlc3Rpb25zLmxlbmd0aDxPYmplY3Qua2V5cyhtKS5sZW5ndGgmJmEoe3NlYXJjaFN1Z2dlc3Rpb25zOk9iamVjdC5rZXlzKG0pfSksYSh7bmJIaXRzOmx9KTt2YXIgdj17fTtyZXR1cm4gZiYmKHY9e19fYXV0b2NvbXBsZXRlX2luZGV4TmFtZTpvLF9fYXV0b2NvbXBsZXRlX3F1ZXJ5SUQ6dC5xdWVyeUlELF9fYXV0b2NvbXBsZXRlX2FsZ29saWFDcmVkZW50aWFsczp7YXBwSWQ6cixhcGlLZXk6bn19KSxPYmplY3QudmFsdWVzKG0pLm1hcCgoZnVuY3Rpb24oZSx0KXtyZXR1cm57c291cmNlSWQ6XCJoaXRzXCIuY29uY2F0KHQpLG9uU2VsZWN0OmZ1bmN0aW9uKGUpe3ZhciB0PWUuaXRlbSxyPWUuZXZlbnQ7JCh0KSx5cihyKXx8cygpfSxnZXRJdGVtVXJsOmZ1bmN0aW9uKGUpe3JldHVybiBlLml0ZW0udXJsfSxnZXRJdGVtczpmdW5jdGlvbigpe3JldHVybiBPYmplY3QudmFsdWVzKGRyKGUsKGZ1bmN0aW9uKGUpe3JldHVybiBlLmhpZXJhcmNoeS5sdmwxfSksdSkpLm1hcChwKS5tYXAoKGZ1bmN0aW9uKGUpe3JldHVybiBlLm1hcCgoZnVuY3Rpb24odCl7dmFyIHI9bnVsbCxuPWUuZmluZCgoZnVuY3Rpb24oZSl7cmV0dXJuXCJsdmwxXCI9PT1lLnR5cGUmJmUuaGllcmFyY2h5Lmx2bDE9PT10LmhpZXJhcmNoeS5sdmwxfSkpO3JldHVyblwibHZsMVwiIT09dC50eXBlJiZuJiYocj1uKSx5KHkoe30sdCkse30se19fZG9jc2VhcmNoX3BhcmVudDpyfSx2KX0pKX0pKS5mbGF0KCl9fX0pKX0pKX19KX0pLFtvLGMsdSxaLHMsWSxHLCQsVyxhLFMscCxELFQscixuXSksdGU9ZWUuZ2V0RW52aXJvbm1lbnRQcm9wcyxyZT1lZS5nZXRSb290UHJvcHMsbmU9ZWUucmVmcmVzaDtyZXR1cm4gZnVuY3Rpb24odCl7dmFyIHI9dC5nZXRFbnZpcm9ubWVudFByb3BzLG49dC5wYW5lbEVsZW1lbnQsbz10LmZvcm1FbGVtZW50LGk9dC5pbnB1dEVsZW1lbnQ7ZS51c2VFZmZlY3QoKGZ1bmN0aW9uKCl7aWYobiYmbyYmaSl7dmFyIGU9cih7cGFuZWxFbGVtZW50Om4sZm9ybUVsZW1lbnQ6byxpbnB1dEVsZW1lbnQ6aX0pLHQ9ZS5vblRvdWNoU3RhcnQsYT1lLm9uVG91Y2hNb3ZlO3JldHVybiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIix0KSx3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLGEpLGZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsdCksd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIixhKX19fSksW3IsbixvLGldKX0oe2dldEVudmlyb25tZW50UHJvcHM6dGUscGFuZWxFbGVtZW50OlYuY3VycmVudCxmb3JtRWxlbWVudDpLLmN1cnJlbnQsaW5wdXRFbGVtZW50OnouY3VycmVudH0pLGZ1bmN0aW9uKHQpe3ZhciByPXQuY29udGFpbmVyO2UudXNlRWZmZWN0KChmdW5jdGlvbigpe2lmKHIpe3ZhciBlPXIucXVlcnlTZWxlY3RvckFsbChcImFbaHJlZl06bm90KFtkaXNhYmxlZF0pLCBidXR0b246bm90KFtkaXNhYmxlZF0pLCBpbnB1dDpub3QoW2Rpc2FibGVkXSlcIiksdD1lWzBdLG49ZVtlLmxlbmd0aC0xXTtyZXR1cm4gci5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLG8pLGZ1bmN0aW9uKCl7ci5yZW1vdmVFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLG8pfX1mdW5jdGlvbiBvKGUpe1wiVGFiXCI9PT1lLmtleSYmKGUuc2hpZnRLZXk/ZG9jdW1lbnQuYWN0aXZlRWxlbWVudD09PXQmJihlLnByZXZlbnREZWZhdWx0KCksbi5mb2N1cygpKTpkb2N1bWVudC5hY3RpdmVFbGVtZW50PT09biYmKGUucHJldmVudERlZmF1bHQoKSx0LmZvY3VzKCkpKX19KSxbcl0pfSh7Y29udGFpbmVyOkYuY3VycmVudH0pLGUudXNlRWZmZWN0KChmdW5jdGlvbigpe3JldHVybiBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoXCJEb2NTZWFyY2gtLWFjdGl2ZVwiKSxmdW5jdGlvbigpe3ZhciBlLHQ7ZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKFwiRG9jU2VhcmNoLS1hY3RpdmVcIiksbnVsbD09PShlPSh0PXdpbmRvdykuc2Nyb2xsVG8pfHx2b2lkIDA9PT1lfHxlLmNhbGwodCwwLEUpfX0pLFtdKSxlLnVzZUxheW91dEVmZmVjdCgoZnVuY3Rpb24oKXt2YXIgZT13aW5kb3cuaW5uZXJXaWR0aC1kb2N1bWVudC5ib2R5LmNsaWVudFdpZHRoO3JldHVybiBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblJpZ2h0PVwiXCIuY29uY2F0KGUsXCJweFwiKSxmdW5jdGlvbigpe2RvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luUmlnaHQ9XCIwcHhcIn19KSxbXSksZS51c2VFZmZlY3QoKGZ1bmN0aW9uKCl7d2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjhweClcIikubWF0Y2hlcyYmKEouY3VycmVudD01KX0pLFtdKSxlLnVzZUVmZmVjdCgoZnVuY3Rpb24oKXtWLmN1cnJlbnQmJihWLmN1cnJlbnQuc2Nyb2xsVG9wPTApfSksW0gucXVlcnldKSxlLnVzZUVmZmVjdCgoZnVuY3Rpb24oKXtXLmxlbmd0aD4wJiYobmUoKSx6LmN1cnJlbnQmJnouY3VycmVudC5mb2N1cygpKX0pLFtXLG5lXSksZS51c2VFZmZlY3QoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSgpe2lmKFUuY3VycmVudCl7dmFyIGU9LjAxKndpbmRvdy5pbm5lckhlaWdodDtVLmN1cnJlbnQuc3R5bGUuc2V0UHJvcGVydHkoXCItLWRvY3NlYXJjaC12aFwiLFwiXCIuY29uY2F0KGUsXCJweFwiKSl9fXJldHVybiBlKCksd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixlKSxmdW5jdGlvbigpe3dpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsZSl9fSksW10pLGUuY3JlYXRlRWxlbWVudChcImRpdlwiLG0oe3JlZjpGfSxyZSh7XCJhcmlhLWV4cGFuZGVkXCI6ITB9KSx7Y2xhc3NOYW1lOltcIkRvY1NlYXJjaFwiLFwiRG9jU2VhcmNoLUNvbnRhaW5lclwiLFwic3RhbGxlZFwiPT09SC5zdGF0dXMmJlwiRG9jU2VhcmNoLUNvbnRhaW5lci0tU3RhbGxlZFwiLFwiZXJyb3JcIj09PUguc3RhdHVzJiZcIkRvY1NlYXJjaC1Db250YWluZXItLUVycm9yZWRcIl0uZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpLHJvbGU6XCJidXR0b25cIix0YWJJbmRleDowLG9uTW91c2VEb3duOmZ1bmN0aW9uKGUpe2UudGFyZ2V0PT09ZS5jdXJyZW50VGFyZ2V0JiZzKCl9fSksZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1Nb2RhbFwiLHJlZjpVfSxlLmNyZWF0ZUVsZW1lbnQoXCJoZWFkZXJcIix7Y2xhc3NOYW1lOlwiRG9jU2VhcmNoLVNlYXJjaEJhclwiLHJlZjpLfSxlLmNyZWF0ZUVsZW1lbnQoa3IsbSh7fSxlZSx7c3RhdGU6SCxhdXRvRm9jdXM6MD09PVcubGVuZ3RoLGlucHV0UmVmOnosaXNGcm9tU2VsZWN0aW9uOkJvb2xlYW4oVykmJlc9PT1RLHRyYW5zbGF0aW9uczpSLG9uQ2xvc2U6c30pKSksZS5jcmVhdGVFbGVtZW50KFwiZGl2XCIse2NsYXNzTmFtZTpcIkRvY1NlYXJjaC1Ecm9wZG93blwiLHJlZjpWfSxlLmNyZWF0ZUVsZW1lbnQoSXIsbSh7fSxlZSx7aW5kZXhOYW1lOm8sc3RhdGU6SCxoaXRDb21wb25lbnQ6ZCxyZXN1bHRzRm9vdGVyQ29tcG9uZW50OmIsZGlzYWJsZVVzZXJQZXJzb25hbGl6YXRpb246RCxyZWNlbnRTZWFyY2hlczpZLGZhdm9yaXRlU2VhcmNoZXM6RyxpbnB1dFJlZjp6LHRyYW5zbGF0aW9uczpxLGdldE1pc3NpbmdSZXN1bHRzVXJsOkMsb25JdGVtQ2xpY2s6ZnVuY3Rpb24oZSx0KXtYKGUpLCQoZSkseXIodCl8fHMoKX19KSkpLGUuY3JlYXRlRWxlbWVudChcImZvb3RlclwiLHtjbGFzc05hbWU6XCJEb2NTZWFyY2gtRm9vdGVyXCJ9LGUuY3JlYXRlRWxlbWVudChXdCx7dHJhbnNsYXRpb25zOkx9KSkpKX1mdW5jdGlvbiBjbih0KXt2YXIgcj10LmlzT3BlbixuPXQub25PcGVuLG89dC5vbkNsb3NlLGk9dC5vbklucHV0LGE9dC5zZWFyY2hCdXR0b25SZWY7ZS51c2VFZmZlY3QoKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gZShlKXt2YXIgdDtpZihcIkVzY2FwZVwiPT09ZS5jb2RlJiZyfHxcImtcIj09PShudWxsPT09KHQ9ZS5rZXkpfHx2b2lkIDA9PT10P3ZvaWQgMDp0LnRvTG93ZXJDYXNlKCkpJiYoZS5tZXRhS2V5fHxlLmN0cmxLZXkpfHwhZnVuY3Rpb24oZSl7dmFyIHQ9ZS50YXJnZXQscj10LnRhZ05hbWU7cmV0dXJuIHQuaXNDb250ZW50RWRpdGFibGV8fFwiSU5QVVRcIj09PXJ8fFwiU0VMRUNUXCI9PT1yfHxcIlRFWFRBUkVBXCI9PT1yfShlKSYmXCIvXCI9PT1lLmtleSYmIXIpcmV0dXJuIGUucHJldmVudERlZmF1bHQoKSx2b2lkKHI/bygpOmRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiRG9jU2VhcmNoLS1hY3RpdmVcIil8fG4oKSk7YSYmYS5jdXJyZW50PT09ZG9jdW1lbnQuYWN0aXZlRWxlbWVudCYmaSYmL1thLXpBLVowLTldLy50ZXN0KFN0cmluZy5mcm9tQ2hhckNvZGUoZS5rZXlDb2RlKSkmJmkoZSl9cmV0dXJuIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLGUpLGZ1bmN0aW9uKCl7d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZSl9fSksW3IsbixvLGksYV0pfWZ1bmN0aW9uIHVuKHQpe3ZhciByLG4saT1lLnVzZVJlZihudWxsKSxhPU8oZS51c2VTdGF0ZSghMSksMiksYz1hWzBdLHU9YVsxXSxsPU8oZS51c2VTdGF0ZSgobnVsbD09dD92b2lkIDA6dC5pbml0aWFsUXVlcnkpfHx2b2lkIDApLDIpLHM9bFswXSxmPWxbMV0scD1lLnVzZUNhbGxiYWNrKChmdW5jdGlvbigpe3UoITApfSksW3VdKSx2PWUudXNlQ2FsbGJhY2soKGZ1bmN0aW9uKCl7dSghMSksZihudWxsPT10P3ZvaWQgMDp0LmluaXRpYWxRdWVyeSl9KSxbdSx0LmluaXRpYWxRdWVyeV0pO3JldHVybiBjbih7aXNPcGVuOmMsb25PcGVuOnAsb25DbG9zZTp2LG9uSW5wdXQ6ZS51c2VDYWxsYmFjaygoZnVuY3Rpb24oZSl7dSghMCksZihlLmtleSl9KSxbdSxmXSksc2VhcmNoQnV0dG9uUmVmOml9KSxlLmNyZWF0ZUVsZW1lbnQoZS5GcmFnbWVudCxudWxsLGUuY3JlYXRlRWxlbWVudChBLHtyZWY6aSx0cmFuc2xhdGlvbnM6bnVsbD09dHx8bnVsbD09PShyPXQudHJhbnNsYXRpb25zKXx8dm9pZCAwPT09cj92b2lkIDA6ci5idXR0b24sb25DbGljazpwfSksYyYmbyhlLmNyZWF0ZUVsZW1lbnQoYW4sbSh7fSx0LHtpbml0aWFsU2Nyb2xsWTp3aW5kb3cuc2Nyb2xsWSxpbml0aWFsUXVlcnk6cyx0cmFuc2xhdGlvbnM6bnVsbD09dHx8bnVsbD09PShuPXQudHJhbnNsYXRpb25zKXx8dm9pZCAwPT09bj92b2lkIDA6bi5tb2RhbCxvbkNsb3NlOnZ9KSksZG9jdW1lbnQuYm9keSkpfWV4cG9ydHt1biBhcyBEb2NTZWFyY2gsQSBhcyBEb2NTZWFyY2hCdXR0b24sYW4gYXMgRG9jU2VhcmNoTW9kYWwsY24gYXMgdXNlRG9jU2VhcmNoS2V5Ym9hcmRFdmVudHMscm4gYXMgdmVyc2lvbn07XG4iLCAiaW1wb3J0IHR5cGUgeyBEb2NTZWFyY2hQcm9wcyBhcyBEb2NTZWFyY2hDb21wb25lbnRQcm9wcyB9IGZyb20gJ0Bkb2NzZWFyY2gvcmVhY3QnO1xuaW1wb3J0IHsgRG9jU2VhcmNoLCB2ZXJzaW9uIH0gZnJvbSAnQGRvY3NlYXJjaC9yZWFjdCc7XG5pbXBvcnQgUmVhY3QsIHsgcmVuZGVyIH0gZnJvbSAncHJlYWN0L2NvbXBhdCc7XG5cbmZ1bmN0aW9uIGdldEhUTUxFbGVtZW50KHZhbHVlOiBIVE1MRWxlbWVudCB8IHN0cmluZywgZW52aXJvbm1lbnQ6IERvY1NlYXJjaFByb3BzWydlbnZpcm9ubWVudCddID0gd2luZG93KTogSFRNTEVsZW1lbnQge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBlbnZpcm9ubWVudC5kb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxFbGVtZW50Pih2YWx1ZSkhO1xuICB9XG5cbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5pbnRlcmZhY2UgRG9jU2VhcmNoUHJvcHMgZXh0ZW5kcyBEb2NTZWFyY2hDb21wb25lbnRQcm9wcyB7XG4gIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBzdHJpbmc7XG4gIGVudmlyb25tZW50PzogdHlwZW9mIHdpbmRvdztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRvY3NlYXJjaChwcm9wczogRG9jU2VhcmNoUHJvcHMpOiB2b2lkIHtcbiAgcmVuZGVyKFxuICAgIDxEb2NTZWFyY2hcbiAgICAgIHsuLi5wcm9wc31cbiAgICAgIHRyYW5zZm9ybVNlYXJjaENsaWVudD17KHNlYXJjaENsaWVudCkgPT4ge1xuICAgICAgICBzZWFyY2hDbGllbnQuYWRkQWxnb2xpYUFnZW50KCdkb2NzZWFyY2guanMnLCB2ZXJzaW9uKTtcblxuICAgICAgICByZXR1cm4gcHJvcHMudHJhbnNmb3JtU2VhcmNoQ2xpZW50ID8gcHJvcHMudHJhbnNmb3JtU2VhcmNoQ2xpZW50KHNlYXJjaENsaWVudCkgOiBzZWFyY2hDbGllbnQ7XG4gICAgICB9fVxuICAgIC8+LFxuICAgIGdldEhUTUxFbGVtZW50KHByb3BzLmNvbnRhaW5lciwgcHJvcHMuZW52aXJvbm1lbnQpLFxuICApO1xufVxuIiwgImltcG9ydCBkb2NzZWFyY2ggZnJvbSBcIkBkb2NzZWFyY2gvanNcIjtcblxuZG9jc2VhcmNoKHtcbiAgYXBwSWQ6IFwiRVI4NjVIRDdMTlwiLFxuICBhcGlLZXk6IFwiNTZiNGNmZmNiMzZkYzZiNDQ0NzU0YjVjZGY5MDc5MTdcIixcbiAgY29udGFpbmVyOiBcIiNkb2NzZWFyY2hcIixcbiAgZGVidWc6IGZhbHNlLFxuICBpbmRleE5hbWU6IFwiaGVscC15YWdwZGJcIixcbiAgaW5zaWdodHM6IHRydWVcbn0pO1xuXG5jb25zdCBvbkNsaWNrID0gZnVuY3Rpb24gKCkge1xuICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiRG9jU2VhcmNoLUJ1dHRvblwiKVswXS5jbGljaygpO1xufTtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hUb2dnbGVNb2JpbGVcIikub25jbGljayA9IG9uQ2xpY2s7XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaFRvZ2dsZURlc2t0b3BcIikub25jbGljayA9IG9uQ2xpY2s7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTyxNQUFBO0FBQUEsTUFBQTtBQUFBLE1BQUE7QUFBQSxNQUFBO0FBQUEsTUFBQTtBQUFBLE1BQUE7QUFBQSxNQUFBO0FBQUEsTUFBQTtBQUFBLE1BQUE7QUFBQSxNQUFBO0FBQUEsTUFBQTtBQUFBLE1BQUE7QUFBQSxNQWdCTUEsSUFBZ0MsQ0FBRztBQWhCekMsTUFpQk1DLElBQVksQ0FBQTtBQWpCbEIsTUFrQk1DLElBQ1o7QUFuQk0sTUFtQk4sSUFBQSxNQUFBO0FBQUEsV0FBQSxFQUFBQyxJQUFBQyxJQUFBO0FBQUEsYUFBQUMsTUFBQUQsR0FBQSxDQUFBRCxHQUFBRSxFQUFBLElBQUFELEdBQUFDLEVBQUE7QUFBQSxXQUFBRjtFQUFBO0FBQUEsV0FBQSxFQUFBQSxJQUFBO0FBQUEsSUFBQUEsTUFBQUEsR0FBQSxjQUFBQSxHQUFBLFdBQUEsWUFBQUEsRUFBQTtFQUFBO0FBQUEsV0FBQSxFQUFBQSxJQUFBQyxJQUFBRSxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsSUFBQUMsSUFBQUMsS0FBQSxDQUFBO0FBQUEsU0FBQUQsTUFBQUwsR0FBQSxVQUFBSyxLQUFBRixLQUFBSCxHQUFBSyxFQUFBLElBQUEsU0FBQUEsS0FBQUQsS0FBQUosR0FBQUssRUFBQSxJQUFBQyxHQUFBRCxFQUFBLElBQUFMLEdBQUFLLEVBQUE7QUFBQSxRQUFBLFVBQUEsU0FBQSxNQUFBQyxHQUFBLFdBQUEsVUFBQSxTQUFBLElBQUEsRUFBQSxLQUFBLFdBQUEsQ0FBQSxJQUFBSixLQUFBLGNBQUEsT0FBQUgsTUFBQSxRQUFBQSxHQUFBLGFBQUEsTUFBQU0sTUFBQU4sR0FBQSxhQUFBLFlBSndCUSxHQUFBQSxFQUFBQSxNQUFBQSxHQUFBQSxFQUFBQSxJQUFBQSxHQUFBQSxhQUFBQSxFQUFBQTtBQUFBQSxXQUFBQSxFQUFBQSxJQUFBQSxJQUFBQSxJQUFBQSxJQUFBQSxJQUFBQTtFQUFBQTtBQUFBQSxXQUFBQSxFQUFBQSxJQUFBQSxJQUFBQSxJQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxRQUFBQSxLQUFBQSxFQUFBQSxNQUFBQSxJQUFBQSxPQUFBQSxJQUFBQSxLQUFBQSxJQUFBQSxLQUFBQSxJQUFBQSxLQUFBQSxNQUFBQSxJQUFBQSxNQUFBQSxLQUFBQSxHQUFBQSxLQUFBQSxNQUFBQSxLQUFBQSxNQUFBQSxhQUFBQSxRQUFBQSxLQUFBQSxRQUFBQSxLQUFBQSxFQUFBQSxJQUFBQSxJQUFBQSxLQUFBQSxJQUFBQSxLQUFBQSxFQUFBQTtBQUFBQSxXQUFBQSxRQUFBQSxNQUFBQSxRQUFBQSxFQUFBQSxTQUFBQSxFQUFBQSxNQUFBQSxFQUFBQSxHQUFBQTtFQUFBQTtBQUFBQSxXQUFBQSxFQUFBQSxJQUFBQTtBQUFBQSxXQUFBQSxHQUFBQTtFQUFBQTtBQUFBQSxXQUFBQSxFQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxTQUFBQSxRQUFBQSxJQUFBQSxLQUFBQSxVQUFBQTtFQUFBQTtBQUFBQSxXQUFBQSxFQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxRQUFBQSxRQUFBQSxHQUFBQSxRQUFBQSxHQUFBQSxLQUFBQSxFQUFBQSxHQUFBQSxJQUFBQSxHQUFBQSxNQUFBQSxDQUFBQSxJQUFBQTtBQUFBQSxhQUFBQSxJQUFBQSxLQUFBQSxHQUFBQSxJQUFBQSxRQUFBQSxLQUFBQSxLQUFBQSxTQUFBQSxLQUFBQSxHQUFBQSxJQUFBQSxFQUFBQSxNQUFBQSxRQUFBQSxHQUFBQSxJQUFBQSxRQUFBQSxHQUFBQTtBQUFBQSxXQUFBQSxjQUFBQSxPQUFBQSxHQUFBQSxPQUFBQSxFQUFBQSxFQUFBQSxJQUFBQTtFQUFBQTtBQUFBQSxXQUFBQSxFQUFBQSxJQUFBQTtBQUFBQSxRQUFBQSxJQUFBQTtBQUFBQSxRQUFBQSxTQUFBQSxLQUFBQSxHQUFBQSxPQUFBQSxRQUFBQSxHQUFBQSxLQUFBQTtBQUFBQSxXQUFBQSxHQUFBQSxNQUFBQSxHQUFBQSxJQUFBQSxPQUFBQSxNQUFBQSxLQUFBQSxHQUFBQSxLQUFBQSxHQUFBQSxJQUFBQSxRQUFBQSxLQUFBQSxLQUFBQSxTQUFBQSxLQUFBQSxHQUFBQSxJQUFBQSxFQUFBQSxNQUFBQSxRQUFBQSxHQUFBQSxLQUFBQTtBQUFBQSxRQUFBQSxHQUFBQSxNQUFBQSxHQUFBQSxJQUFBQSxPQUFBQSxHQUFBQTtBQUFBQTtNQUFBQTtBQUFBQSxhQUFBQSxFQUFBQSxFQUFBQTtJQUFBQTtFQUFBQTtBQUFBQSxXQUFBQSxFQUFBQSxJQUFBQTtBQUFBQSxLQUFBQSxDQUFBQSxHQUFBQSxRQUFBQSxHQUFBQSxNQUFBQSxTQUFBQSxFQUFBQSxLQUFBQSxFQUFBQSxLQUFBQSxDQUFBQSxFQUFBQSxTQUFBQSxNQUFBQSxFQUFBQSx3QkFBQUEsSUFBQUEsRUFBQUEsc0JBQUFBLEdBQUFBLENBQUFBO0VBQUFBO0FBQUFBLFdBQUFBLElBQUFBO0FBQUFBLFFBQUFBLElBQUFBLElBQUFBLElBQUFBLElBQUFBLElBQUFBLElBQUFBLElBQUFBO0FBQUFBLFNBQUFBLEVBQUFBLEtBQUFBLENBQUFBLEdBQUFBLEtBQUFBLEVBQUFBLE1BQUFBLElBQUFBLENBQUFBLEdBQUFBLFFBQUFBLEtBQUFBLEVBQUFBLFFBQUFBLEtBQUFBLFFBQUFBLE1BQUFBLE1BQUFBLEtBQUFBLElBQUFBLEtBQUFBLEtBQUFBLEtBQUFBLENBQUFBLEdBQUFBLEtBQUFBLENBQUFBLEdBQUFBLEdBQUFBLFNBQUFBLEtBQUFBLEVBQUFBLENBQUFBLEdBQUFBLEVBQUFBLEdBQUFBLE1BQUFBLEdBQUFBLE1BQUFBLEdBQUFBLEVBQUFBLFNBQUFBLEVBQUFBLE1BQUFBLEVBQUFBLEdBQUFBLEVBQUFBLEdBQUFBLEtBQUFBLElBQUFBLElBQUFBLEdBQUFBLEtBQUFBLEdBQUFBLElBQUFBLGNBZkcsS0FBQUYsR0FBQSxNQUFBLENBQUFDLEVBQUEsSUFBQSxNQUFBRSxJQUFBLFFBQUFGLEtBQUEsRUFBQUQsRUFBQSxJQUFBQyxJQUFBLENBQUEsRUFBQSxLQUFBRCxH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QyxHQUFBLE1BQUEsTUFBQVEsTUFBQSxRQUFBSCxHQUFBLEtBQUFOLEdBQUEsTUFBQTtBQUFBLGFBQUFDLEdBQUEsT0FBQVEsS0FBQSxNQVBJLEtBQUFFLE1BQUEsS0FBQUEsR0FBQSxZQUFBQSxHQUFBLGNBQUEsQ0FBQUEsS0FBQUEsR0FBQTtBQUFBLFFBQUFMLEdBQUFBLEdBQUEsUUFBQUssRUFBQSxDQUFBLElBQUEsTUFBQVYsR0FBQSxNQUFBVTtNQUFBLE1BQUEsTUFBQWtCLEtBQUF2QixHQUFBLFFBQUF1QixPQUFBLEdBQUF2QixHQUFBdUIsRUFBQSxDQUFBO1VBQUEsQ0FBQTVCLEdBQUEsTUFBQUMsR0FBQSxLQUFBRCxHQUFBLE1BQUFDLEdBQUE7QUFBQSxRQUFBLElBQUFGLElBQUFDLElBQUFDLEVBQUE7SUFBQTtRQUFBLFNBQUFJLE1BQUFMLEdBQUEsT0FBQUMsR0FBQSxPQUFBRCxHQUFBLE1BQUFDLEdBQUEsS0FBQUQsR0FBQSxNQUFBQyxHQUFBLE9BQUFTLEtBQUFWLEdBQUEsTUFBQSxFQUFBQyxHQUFBLEtBQUFELElBQUFDLElBQUFFLElBQUFDLElBQUFDLElBQUFDLElBQUFFLElBQUFDLEVBQUE7QUFBQSxZQUFBRSxLQUFBLEVBQUEsV0FBQUEsR0FBQVgsRUFBQSxHQUFBLE1BQUFBLEdBQUEsTUFBQSxTQUFBVTtFQUFBO0FBQUEsV0FBQSxFQUFBWCxJQUFBQyxJQUFBQyxJQUFBO0FBQUEsYUFBQUUsS0FBQSxHQUFBQSxLQUFBRixHQUFBLFFBQUFFLEtBQUEsR0FBQUYsR0FBQUUsRUFBQSxHQUFBRixHQUFBLEVBQUFFLEVBQUEsR0FBQUYsR0FBQSxFQUFBRSxFQUFBLENBQUE7QUFBQSxNQUFBLE9BQUEsRUFBQSxJQUFBSCxJQUFBRCxFQUFBLEdBQUFBLEdBQUEsS0FBQSxTQUFBQyxJQUFBO0FBQUEsVUFBQTtBQUFBLFFBQUFELEtBQUFDLEdBQUEsS0FBQUEsR0FBQSxNQUFBLENBQUEsR0FBQUQsR0FBQSxLQUFBLFNBQUFBLElBQUE7QUFBQSxVQUFBQSxHQUFBLEtBQUFDLEVBQUE7UUFB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LElBQUEsQ0FBQTtFQUFBO0FBQUEsV0FBQSxFQUFBRCxJQUFBQyxJQUFBRSxJQUFBO0FBQUEsUUFBQUMsSUFBQUMsSUFBQUMsSUFBQUMsSUFBQUksS0FBQSxFQUFBLENBQUEsR0FBQVgsR0FBQSxLQUFBO0FBQUEsU0FBQU0sTUFBQU4sR0FBQSxRQUFBQSxHQUFBLEtBQUEsaUJBQUFPLEtBQUFQLEdBQUEsS0FBQSxlQUFBQyxHQUFBLFVBQUFLLEtBQUFGLEtBQUFILEdBQUFLLEVBQUEsSUFBQSxTQUFBQSxLQUFBRCxLQUFBSixHQUFBSyxFQUFBLElBQUFLLEdBQUFMLEVBQUEsSUFBQSxXQUFBTCxHQUFBSyxFQUFBLEtBQUEsV0FHTkUsS0FBQUEsR0FBQUEsRUFBQUEsSUFBQUEsR0FBQUEsRUFBQUE7QUFBQUEsV0FBQUEsVUFBQUEsU0FBQUEsTUFBQUEsR0FBQUEsV0FBQUEsVUFBQUEsU0FBQUEsSUFBQUEsRUFBQUEsS0FBQUEsV0FBQUEsQ0FBQUEsSUFBQUEsS0FBQUEsRUFBQUEsR0FBQUEsTUFBQUEsSUFBQUEsTUFBQUEsR0FBQUEsS0FBQUEsTUFBQUEsR0FBQUEsS0FBQUEsSUFBQUE7RUFBQUE7QUFBQUEsTUFBQUEsRUFBQUEsT0FBQUEsSUFBQUEsRUFBQUEsS0FBQUEsU0FBQUEsSUFBQUEsSUFBQUEsSUFBQUEsSUFBQUE7QUFBQUEsYUFBQUEsSUFBQUEsSUFBQUEsSUFBQUEsS0FBQUEsR0FBQUEsS0FBQUEsTUFBQUEsS0FBQUEsR0FBQUEsUUFBQUEsQ0FBQUEsR0FBQUEsR0FBQUEsS0FBQUE7QUFBQUEsV0FBQUEsS0FBQUEsR0FBQUEsZ0JBQUFBLFFBQUFBLEdBQUFBLDZCQUFBQSxHQUFBQSxTQUFBQSxHQUFBQSx5QkFBQUEsRUFBQUEsQ0FBQUEsR0FBQUEsS0FBQUEsR0FBQUEsTUFBQUEsUUFBQUEsR0FBQUEsc0JBQUFBLEdBQUFBLGtCQUFBQSxJQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxLQUFBQSxHQUFBQSxNQUFBQSxHQUFBQSxRQUFBQSxHQUFBQSxNQUFBQTtJQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxNQUFBQSxLQUFBQTtJQUFBQTtBQUFBQSxVQUFBQTtFQUFBQSxFQUFBQSxHQUFBQSxJQUFBQSxHQUFBQSxFQUFBQSxVQUFBQSxXQUFBQSxTQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxRQUFBQTtBQUFBQSxJQUFBQSxLQUFBQSxRQUFBQSxLQUFBQSxPQUFBQSxLQUFBQSxRQUFBQSxLQUFBQSxRQUFBQSxLQUFBQSxNQUFBQSxLQUFBQSxNQUFBQSxFQUFBQSxDQUFBQSxHQUFBQSxLQUFBQSxLQUFBQSxHQUFBQSxjQUFBQSxPQUFBQSxPQUFBQSxLQUFBQSxHQUFBQSxFQUFBQSxDQUFBQSxHQUFBQSxFQUFBQSxHQUFBQSxLQUFBQSxLQUFBQSxJQUFBQSxNQUFBQSxFQUFBQSxJQUFBQSxFQUFBQSxHQUFBQSxRQUFBQSxNQUFBQSxLQUFBQSxRQUFBQSxNQUFBQSxLQUFBQSxJQUFBQSxLQUFBQSxFQUFBQSxHQUFBQSxFQUFBQSxJQUFBQTtFQUFBQSxHQUFBQSxFQUFBQSxVQUFBQSxjQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxTQUFBQSxRQUFBQSxLQUFBQSxNQUFBQSxNQUFBQSxNQUFBQSxLQUFBQSxJQUFBQSxLQUFBQSxFQUFBQSxHQUFBQSxFQUFBQSxJQUFBQTtFQUFBQSxHQUFBQSxFQUFBQSxVQUFBQSxTQUFBQSxHQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxJQUFBQSxjQUFBQSxPQUFBQSxVQUFBQSxRQUFBQSxVQUFBQSxLQUFBQSxLQUFBQSxRQUFBQSxRQUFBQSxDQUFBQSxJQUFBQSxZQUFBQSxJQUFBQSxTQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxXQUFBQSxHQUFBQSxJQUFBQSxNQUFBQSxHQUFBQSxJQUFBQTtFQUFBQSxHQUFBQSxFQUFBQSxNQUFBQSxHQUFBQSxJQUFBQSwrQkFBQUEsSUFBQUEsR0FBQUEsSUFBQUEsRUFBQUEsS0FBQUEsR0FBQUEsSUFBQUEsRUFBQUEsSUFBQUEsR0FBQUEsSUFBQUE7QUNiekIsTUFBSVA7QUFBSixNQUdJRTtBQUhKLE1BTUlRO0FBTkosTUF5QklOO0FB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QSxXQUFBO0FBQUEsTUFBQUMsR0FBQSxLQUFBRixJQUFBRSxHQUFBLElBQUFILElBQUEsR0FBQUcsRUFBQSxLQUFBQyxHQUFBLEVBQUEsR0FBQUQsR0FBQSxDQUFBO0lBQUEsR0FBQSxDQUFBSixJQUFBRSxJQUFBRCxFQUFBLENBQUEsR0FBQSxHQUFBLFdBQUE7QUFBQSxhQUFBLEdBQUFHLEVBQUEsS0FBQUMsR0FBQSxFQUFBLEdBQUFELEdBQUEsQ0FBQSxHQUFBSixHQUFBLFdBQUE7QUFBQSxXQUFBSSxFQUFBLEtBQUFDLEdBQUEsRUFBQSxHQUFBRCxHQUFBLENBQUE7TUFBQSxDQUFBO0lBQUEsR0FBQSxDQUFBSixFQUFBLENBQUEsR0FBQUU7RUFBQTtBQUFBLFdBQUEsR0FBQUYsSUFBQTtBQUFBLFFBUW1CQyxJQUFHRCxJQUFBQSxLQUFBQSxHQUFBQSxHQUFBQSxLQUFBQSxHQUFBQTtBQUFBQSxRQUFBQTtBQUFBQSxVQUFBQSxLQUFBQSxHQUFBQTtBQUFBQSxhQUFBQSxHQUFIQyxLQUFBQSxTQUFHRCxLQUFBQSxRQUNLLE1BQU5DLE1BQVcsSUFBSUEsTUFBTSxJQUFJRCxPQUFRQyxNQUFNQSxNQUFLRCxNQUFNQTtJQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxhQUFBQTtJQUFBQTtFQUFBQTtBQUFBQSxXQUFBQSxHQUFBQSxJQUFBQTtBQUFBQSxJQUFBQSxHQUFBQTtFQUFBQTtBQUFBQSxXQUFBQSxHQUFBQSxJQUFBQTtBQUFBQSxXQUFBQTtFQUFBQTtBQUFBQSxXQUFBQSxLQUFBQTtBQUFBQSxXQUFBQSxDQUFBQSxPQUFBQSxFQUFBQTtFQUFBQTtBQUFBQSxNQUFBQSxLQUFBQTtBQUFBQSxXQUFBQSxHQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxTQUFBQSxRQUFBQSxJQUFBQSxLQUFBQSxVQUFBQTtFQUFBQTtBQUFBQSxHQUFBQSxHQUFBQSxZQUFBQSxJQUFBQSxLQUFBQSx1QkFBQUEsTUFBQUEsR0FBQUEsVUFBQUEsd0JBQUFBLFNBQUFBLElBQUFBLElBQUFBO0FBQUFBLFdBQUFBLEdBQUFBLEtBQUFBLE9BQUFBLEVBQUFBLEtBQUFBLEdBQUFBLEtBQUFBLE9BQUFBLEVBQUFBO0VBQUFBO0FBQUFBLE1BQUFBLEtBQUFBLEVBQUFBO0FBQUFBLElBQUFBLE1BQUFBLFNBQUFBLElBQUFBO0FBQUFBLElBQUFBLEdBQUFBLFFBQUFBLEdBQUFBLEtBQUFBLE9BQUFBLEdBQUFBLFFBQUFBLEdBQUFBLE1BQUFBLE1BQUFBLEdBQUFBLEtBQUFBLEdBQUFBLE1BQUFBLE9BQUFBLE1BQUFBLEdBQUFBLEVBQUFBO0VBQUFBO0FBQUFBLE1BQUFBLEtBQUFBLGVBQUFBLE9BQUFBLFVBQUFBLE9BQUFBLE9BQUFBLE9BQUFBLElBQUFBLG1CQUFBQSxLQUFBQTtBQUFBQSxNQUFBQSxLQUFBQSxTQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxXQUFBQSxRQUFBQSxLQUFBQSxPQUFBQSxFQUFBQSxFQUFBQSxFQUFBQSxFQUFBQSxJQUFBQSxFQUFBQSxDQUFBQTtFQUFBQTtBQUFBQSxNQUFBQSxLQUFBQSxFQUFBQSxLQUFBQSxJQUFBQSxTQUFBQSxJQUFBQSxPQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxXQUFBQSxLQUFBQSxFQUFBQSxFQUFBQSxFQUFBQSxTQUFBQTtFQUFBQSxHQUFBQSxNQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxRQUFBQSxLQUFBQSxFQUFBQSxFQUFBQTtBQUFBQSxRQUFBQSxNQUFBQSxHQUFBQSxPQUFBQSxPQUFBQTtBQUFBQSxXQUFBQSxHQUFBQSxDQUFBQTtFQUFBQSxHQUFBQSxTQUFBQSxFQUFBQTtBQUFBQSxNQUFBQSxLQUFBQSxFQUFBQTtBQUFBQSxJQUFBQSxNQUFBQSxTQUFBQSxJQUFBQSxJQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxRQUFBQSxHQUFBQTtBQUFBQSxlQUFBQSxJQUFBQSxLQUFBQSxJQUFBQSxLQUFBQSxHQUFBQSxLQUFBQSxNQUFBQSxLQUFBQSxHQUFBQSxRQUFBQSxHQUFBQSxJQUFBQSxRQUFBQSxRQUFBQSxHQUFBQSxRQUFBQSxHQUFBQSxNQUFBQSxHQUFBQSxLQUFBQSxHQUFBQSxNQUFBQSxHQUFBQSxNQUFBQSxHQUFBQSxJQUFBQSxJQUFBQSxFQUFBQTs7QUFBQUEsT0FBQUEsSUFBQUEsSUFBQUEsSUFBQUEsRUFBQUE7RUFBQUE7QUFBQUEsTUFBQUEsS0FBQUEsRUFBQUE7QUFBQUEsV0FBQUEsR0FBQUEsSUFBQUEsSUFBQUEsSUFBQUE7QUFBQUEsV0FBQUEsT0FBQUEsR0FBQUEsT0FBQUEsR0FBQUEsSUFBQUEsUUFBQUEsR0FBQUEsSUFBQUEsSUFBQUEsR0FBQUEsUUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsb0JBQUFBLE9BQUFBLEdBQUFBLE9BQUFBLEdBQUFBLElBQUFBO0lBQUFBLENBQUFBLEdBQUFBLEdBQUFBLElBQUFBLE1BQUFBLE9BQUFBLFNBQUFBLEtBQUFBLEdBQUFBLENBQUFBLEdBQUFBLEVBQUFBLEdBQUFBLFFBQUFBLEdBQUFBLElBQUFBLFFBQUFBLE9BQUFBLEdBQUFBLElBQUFBLE1BQUFBLEtBQUFBLEdBQUFBLE1BQUFBLE9BQUFBLEdBQUFBLE1BQUFBLEdBQUFBLE9BQUFBLEdBQUFBLElBQUFBLElBQUFBLFNBQUFBLElBQUFBO0FBQUFBLGFBQUFBLEdBQUFBLElBQUFBLElBQUFBLEVBQUFBO0lBQUFBLENBQUFBLElBQUFBO0VBQUFBO0FBQUFBLFdBQUFBLEdBQUFBLElBQUFBLElBQUFBLElBQUFBO0FBQUFBLFdBQUFBLE1BQUFBLE9BQUFBLEdBQUFBLE1BQUFBLE1BQUFBLEdBQUFBLE1BQUFBLEdBQUFBLE9BQUFBLEdBQUFBLElBQUFBLElBQUFBLFNBQUFBLElBQUFBO0FBQUFBLGFBQUFBLEdBQUFBLElBQUFBLElBQUFBLEVBQUFBO0lBQUFBLENBQUFBLEdBQUFBLEdBQUFBLE9BQUFBLEdBQUFBLElBQUFBLFFBQUFBLE9BQUFBLEdBQUFBLE9BQUFBLEdBQUFBLFlBQUFBLEdBQUFBLEdBQUFBLEdBQUFBLEdBQUFBLElBQUFBLE1BQUFBLE1BQUFBLEdBQUFBLElBQUFBLE1BQUFBLE1BQUFBO0VBQUFBO0FBQUFBLFdBQUFBLEtBQUFBO0FBQUFBLFNBQUFBLE1BQUFBLEdBQUFBLEtBQUFBLElBQUFBLE1BQUFBLEtBQUFBLE1BQUFBO0VBQUFBO0FBQUFBLFdBQUFBLEdBQUFBLElBQUFBO0FBQUFBLFFBQUFBLEtBQUFBLEdBQUFBLEdBQUFBO0FBQUFBLFdBQUFBLE1BQUFBLEdBQUFBLE9BQUFBLEdBQUFBLElBQUFBLEVBQUFBO0VBQUFBO0FBQUFBLFdBQUFBLEtBQUFBO0FBQUFBLFNBQUFBLElBQUFBLE1BQUFBLEtBQUFBLElBQUFBO0VBQUFBO0FBQUFBLElBQUFBLFVBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFFBQUFBLEtBQUFBLEdBQUFBO0FBQUFBLElBQUFBLE1BQUFBLEdBQUFBLE9BQUFBLEdBQUFBLElBQUFBLEdBQUFBLE1BQUFBLEtBQUFBLEdBQUFBLFFBQUFBLEdBQUFBLE9BQUFBLE9BQUFBLE1BQUFBLEdBQUFBLEVBQUFBO0VBQUFBLElBQUFBLEdBQUFBLFlBQUFBLElBQUFBLEtBQUFBLE1BQUFBLFNBQUFBLElBQUFBLElBQUFBO0FBQUFBLFFBQUFBLEtBQUFBLEdBQUFBLEtBQUFBLEtBQUFBO0FBQUFBLFlBQUFBLEdBQUFBLE1BQUFBLEdBQUFBLElBQUFBLENBQUFBLElBQUFBLEdBQUFBLEVBQUFBLEtBQUFBLEVBQUFBO0FBQUFBLFFBQUFBLEtBQUFBLEdBQUFBLEdBQUFBLEdBQUFBLEdBQUFBLEtBQUFBLE9BQUFBLEtBQUFBLFdBQUFBO0FBQUFBLE1BQUFBLE9BQUFBLEtBQUFBLE1BQUFBLEdBQUFBLE1BQUFBLE1BQUFBLEtBQUFBLEdBQUFBLEVBQUFBLElBQUFBLEdBQUFBO0lBQUFBO0FBQUFBLElBQUFBLEdBQUFBLE1BQUFBO0FBQUFBLFFBQUFBLEtBQUFBLFdBQUFBO0FBQUFBLFVBQUFBLENBQUFBLEVBQUFBLEdBQUFBLEtBQUFBO0FBQUFBLFlBQUFBLEdBQUFBLE1BQUFBLEtBQUFBO0FBQUFBLGNBQUFBLEtBQUFBLEdBQUFBLE1BQUFBO0FBQUFBLFVBQUFBLEdBQUFBLElBQUFBLElBQUFBLENBQUFBLElBQUFBLEdBQUFBLElBQUFBLEdBQUFBLElBQUFBLEtBQUFBLEdBQUFBLElBQUFBLEdBQUFBO1FBQUFBO0FBQUFBLFlBQUFBO0FBQUFBLGFBQUFBLEdBQUFBLFNBQUFBLEVBQUFBLEtBQUFBLEdBQUFBLE1BQUFBLEtBQUFBLENBQUFBLEdBQUFBLEtBQUFBLEdBQUFBLEVBQUFBLElBQUFBLElBQUFBLENBQUFBLEdBQUFBLFlBQUFBO01BQUFBO0lBQUFBO0FBQUFBLElBQUFBLEdBQUFBLFNBQUFBLEtBQUFBLEdBQUFBLE9BQUFBLEdBQUFBLFNBQUFBLEVBQUFBLEtBQUFBLEdBQUFBLE1BQUFBLEdBQUFBLElBQUFBLElBQUFBLENBQUFBLEVBQUFBLENBQUFBLEdBQUFBLEdBQUFBLEtBQUFBLElBQUFBLEVBQUFBO0VBQUFBLEdBQUFBLEdBQUFBLFVBQUFBLHVCQUFBQSxXQUFBQTtBQUFBQSxTQUFBQSxJQUFBQSxDQUFBQTtFQUFBQSxHQUFBQSxHQUFBQSxVQUFBQSxTQUFBQSxTQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxRQUFBQSxLQUFBQSxLQUFBQTtBQUFBQSxVQUFBQSxLQUFBQSxJQUFBQSxLQUFBQTtBQUFBQSxZQUFBQSxLQUFBQSxTQUFBQSxjQUFBQSxLQUFBQSxHQUFBQSxLQUFBQSxLQUFBQSxJQUFBQSxJQUFBQSxDQUFBQSxFQUFBQTtBQUFBQSxhQUFBQSxJQUFBQSxJQUFBQSxDQUFBQSxJQUFBQSxHQUFBQSxLQUFBQSxLQUFBQSxJQUFBQSxHQUFBQSxNQUFBQSxHQUFBQSxHQUFBQTtNQUFBQTtBQUFBQSxXQUFBQSxNQUFBQTtJQUFBQTtBQUFBQSxRQUFBQSxLQUFBQSxHQUFBQSxPQUFBQSxFQUFBQSxHQUFBQSxNQUFBQSxHQUFBQSxRQUFBQTtBQUFBQSxXQUFBQSxPQUFBQSxHQUFBQSxPQUFBQSxNQUFBQSxDQUFBQSxFQUFBQSxHQUFBQSxNQUFBQSxHQUFBQSxNQUFBQSxPQUFBQSxHQUFBQSxRQUFBQSxHQUFBQSxFQUFBQTtFQUFBQTtBQUFBQSxNQUFBQSxLQUFBQSxTQUFBQSxJQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxRQUFBQSxFQUFBQSxHQUFBQSxDQUFBQSxNQUFBQSxHQUFBQSxDQUFBQSxLQUFBQSxHQUFBQSxFQUFBQSxPQUFBQSxFQUFBQSxHQUFBQSxHQUFBQSxNQUFBQSxnQkFBQUEsUUFBQUEsR0FBQUEsTUFBQUEsWUFBQUEsQ0FBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsTUFBQUEsTUFBQUEsS0FBQUEsR0FBQUEsR0FBQUEsTUFBQUE7QUFBQUEsYUFBQUEsR0FBQUEsU0FBQUEsSUFBQUEsQ0FBQUEsR0FBQUEsSUFBQUEsRUFBQUE7QUFBQUEsVUFBQUEsR0FBQUEsQ0FBQUEsSUFBQUEsR0FBQUEsQ0FBQUEsRUFBQUE7QUFBQUEsTUFBQUEsR0FBQUEsSUFBQUEsS0FBQUEsR0FBQUEsQ0FBQUE7SUFBQUE7RUFBQUE7QUFBQUEsV0FBQUEsR0FBQUEsSUFBQUE7QUFBQUEsV0FBQUEsS0FBQUEsa0JBQUFBLFdBQUFBO0FBQUFBLGFBQUFBLEdBQUFBO0lBQUFBLEdBQUFBLEdBQUFBO0VBQUFBO0FBQUFBLFdBQUFBLEdBQUFBLElBQUFBO0FBQUFBLFFBQUFBLEtBQUFBLE1BQUFBLEtBQUFBLEdBQUFBO0FBQUFBLElBQUFBLEdBQUFBLHVCQUFBQSxXQUFBQTtBQUFBQSxRQUFBQSxNQUFBQSxHQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxJQUFBQSxNQUFBQSxHQUFBQSxJQUFBQTtJQUFBQSxHQUFBQSxHQUFBQSxLQUFBQSxHQUFBQSxNQUFBQSxNQUFBQSxHQUFBQSxxQkFBQUEsR0FBQUEsR0FBQUEsTUFBQUEsR0FBQUEsSUFBQUEsSUFBQUEsR0FBQUEsSUFBQUEsRUFBQUEsVUFBQUEsR0FBQUEsWUFBQUEsSUFBQUEsWUFBQUEsQ0FBQUEsR0FBQUEsVUFBQUEsV0FBQUE7QUFBQUEsYUFBQUE7SUFBQUEsR0FBQUEsYUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsV0FBQUEsV0FBQUEsS0FBQUEsRUFBQUEsR0FBQUEsR0FBQUEsRUFBQUEsWUFBQUEsRUFBQUE7SUFBQUEsR0FBQUEsY0FBQUEsU0FBQUEsSUFBQUEsSUFBQUE7QUFBQUEsV0FBQUEsV0FBQUEsS0FBQUEsRUFBQUEsR0FBQUEsR0FBQUEsRUFBQUEsYUFBQUEsSUFBQUEsRUFBQUE7SUFBQUEsR0FBQUEsYUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsV0FBQUEsV0FBQUEsT0FBQUEsS0FBQUEsV0FBQUEsUUFBQUEsRUFBQUEsTUFBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsR0FBQUEsRUFBQUEsWUFBQUEsRUFBQUE7SUFBQUEsRUFBQUEsSUFBQUEsRUFBQUEsRUFBQUEsSUFBQUEsRUFBQUEsU0FBQUEsR0FBQUEsUUFBQUEsR0FBQUEsR0FBQUEsR0FBQUEsR0FBQUEsR0FBQUEsQ0FBQUE7RUFBQUE7QUFBQUEsV0FBQUEsR0FBQUEsSUFBQUEsSUFBQUE7QUFBQUEsUUFBQUEsS0FBQUEsRUFBQUEsSUFBQUEsRUFBQUEsS0FBQUEsSUFBQUEsR0FBQUEsR0FBQUEsQ0FBQUE7QUFBQUEsV0FBQUEsR0FBQUEsZ0JBQUFBLElBQUFBO0VBQUFBO0FBQUFBLEdBQUFBLEdBQUFBLFlBQUFBLElBQUFBLEtBQUFBLE1BQUFBLFNBQUFBLElBQUFBO0FBQUFBLFFBQUFBLEtBQUFBLE1BQUFBLEtBQUFBLEdBQUFBLEdBQUFBLEdBQUFBLEdBQUFBLEtBQUFBLEdBQUFBLEVBQUFBLElBQUFBLEVBQUFBO0FBQUFBLFdBQUFBLEdBQUFBLENBQUFBLEtBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFVBQUFBLEtBQUFBLFdBQUFBO0FBQUFBLFFBQUFBLEdBQUFBLE1BQUFBLGVBQUFBLEdBQUFBLEtBQUFBLEVBQUFBLEdBQUFBLEdBQUFBLElBQUFBLElBQUFBLEVBQUFBLEtBQUFBLEdBQUFBO01BQUFBO0FBQUFBLE1BQUFBLEtBQUFBLEdBQUFBLEVBQUFBLElBQUFBLEdBQUFBO0lBQUFBO0VBQUFBLEdBQUFBLEdBQUFBLFVBQUFBLFNBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFNBQUFBLElBQUFBLE1BQUFBLEtBQUFBLElBQUFBLG9CQUFBQTtBQUFBQSxRQUFBQSxLQUFBQSxFQUFBQSxHQUFBQSxRQUFBQTtBQUFBQSxJQUFBQSxHQUFBQSxlQUFBQSxRQUFBQSxHQUFBQSxZQUFBQSxDQUFBQSxLQUFBQSxHQUFBQSxRQUFBQTtBQUFBQSxhQUFBQSxLQUFBQSxHQUFBQSxRQUFBQSxPQUFBQSxNQUFBQSxFQUFBQSxJQUFBQSxHQUFBQSxFQUFBQSxHQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxHQUFBQSxHQUFBQSxLQUFBQSxDQUFBQSxDQUFBQTtBQUFBQSxXQUFBQSxHQUFBQTtFQUFBQSxHQUFBQSxHQUFBQSxVQUFBQSxxQkFBQUEsR0FBQUEsVUFBQUEsb0JBQUFBLFdBQUFBO0FBQUFBLFFBQUFBLEtBQUFBO0FBQUFBLFNBQUFBLEVBQUFBLFFBQUFBLFNBQUFBLElBQUFBLElBQUFBO0FBQUFBLFNBQUFBLElBQUFBLElBQUFBLEVBQUFBO0lBQUFBLENBQUFBO0VBQUFBO0FBQUFBLE1BQUFBLEtBQUFBLGVBQUFBLE9BQUFBLFVBQUFBLE9BQUFBLE9BQUFBLE9BQUFBLElBQUFBLGVBQUFBLEtBQUFBO0FBQUFBLE1BQUFBLEtBQUFBO0FBQUFBLE1BQUFBLEtBQUFBO0FBQUFBLE1BQUFBLEtBQUFBO0FBQUFBLE1BQUFBLEtBQUFBLGVBQUFBLE9BQUFBO0FBQUFBLE1BQUFBLEtBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFlBQUFBLGVBQUFBLE9BQUFBLFVBQUFBLFlBQUFBLEVBQUFBLE9BQUFBLENBQUFBLElBQUFBLGdCQUFBQSxjQUFBQSxLQUFBQSxFQUFBQTtFQUFBQTtBQUFBQSxXQUFBQSxHQUFBQSxJQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxXQUFBQSxRQUFBQSxHQUFBQSxRQUFBQSxHQUFBQSxjQUFBQSxLQUFBQSxFQUFBQSxJQUFBQSxFQUFBQSxHQUFBQSxjQUFBQSxPQUFBQSxNQUFBQSxHQUFBQSxHQUFBQSxLQUFBQSxHQUFBQSxNQUFBQTtFQUFBQTtBQUFBQSxJQUFBQSxVQUFBQSxtQkFBQUEsQ0FBQUEsR0FBQUEsQ0FBQUEsc0JBQUFBLDZCQUFBQSxxQkFBQUEsRUFBQUEsUUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsV0FBQUEsZUFBQUEsRUFBQUEsV0FBQUEsSUFBQUEsRUFBQUEsY0FBQUEsTUFBQUEsS0FBQUEsV0FBQUE7QUFBQUEsYUFBQUEsS0FBQUEsWUFBQUEsRUFBQUE7SUFBQUEsR0FBQUEsS0FBQUEsU0FBQUEsSUFBQUE7QUFBQUEsYUFBQUEsZUFBQUEsTUFBQUEsSUFBQUEsRUFBQUEsY0FBQUEsTUFBQUEsVUFBQUEsTUFBQUEsT0FBQUEsR0FBQUEsQ0FBQUE7SUFBQUEsRUFBQUEsQ0FBQUE7RUFBQUEsQ0FBQUE7QUFBQUEsTUFBQUEsS0FBQUEsRUFBQUE7QUFBQUEsV0FBQUEsS0FBQUE7RUFBQUE7QUFBQUEsV0FBQUEsS0FBQUE7QUFBQUEsV0FBQUEsS0FBQUE7RUFBQUE7QUFBQUEsV0FBQUEsS0FBQUE7QUFBQUEsV0FBQUEsS0FBQUE7RUFBQUE7QUFBQUEsSUFBQUEsUUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsV0FBQUEsT0FBQUEsS0FBQUEsR0FBQUEsRUFBQUEsSUFBQUEsR0FBQUEsVUFBQUEsSUFBQUEsR0FBQUEsdUJBQUFBLElBQUFBLEdBQUFBLHFCQUFBQSxJQUFBQSxHQUFBQSxjQUFBQTtFQUFBQTtBQUFBQSxNQUFBQTtBQUFBQSxNQUFBQSxLQUFBQSxFQUFBQSxZQUFBQSxPQUFBQSxjQUFBQSxNQUFBQSxLQUFBQSxXQUFBQTtBQUFBQSxXQUFBQSxLQUFBQTtFQUFBQSxFQUFBQTtBQUFBQSxNQUFBQSxLQUFBQSxFQUFBQTtBQUFBQSxJQUFBQSxRQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxnQkFBQUEsT0FBQUEsR0FBQUEsUUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsVUFBQUEsS0FBQUEsR0FBQUEsT0FBQUEsS0FBQUEsR0FBQUEsTUFBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsS0FBQUEsT0FBQUEsR0FBQUEsUUFBQUEsR0FBQUE7QUFBQUEsZUFBQUEsTUFBQUEsSUFBQUE7QUFBQUEsWUFBQUEsS0FBQUEsR0FBQUEsRUFBQUE7QUFBQUEsWUFBQUEsRUFBQUEsWUFBQUEsTUFBQUEsa0JBQUFBLE1BQUFBLFFBQUFBLE1BQUFBLE1BQUFBLGVBQUFBLE1BQUFBLGVBQUFBLE1BQUFBLFlBQUFBLE1BQUFBLGdCQUFBQSxLQUFBQTtBQUFBQSxjQUFBQSxLQUFBQSxHQUFBQSxZQUFBQTtBQUFBQSw2QkFBQUEsTUFBQUEsV0FBQUEsTUFBQUEsUUFBQUEsR0FBQUEsUUFBQUEsS0FBQUEsVUFBQUEsZUFBQUEsTUFBQUEsU0FBQUEsS0FBQUEsS0FBQUEsS0FBQUEsZ0JBQUFBLE1BQUFBLFNBQUFBLEtBQUFBLEtBQUFBLFFBQUFBLFFBQUFBLEdBQUFBLENBQUFBLEtBQUFBLFFBQUFBLEdBQUFBLENBQUFBLElBQUFBLG9CQUFBQSxLQUFBQSxLQUFBQSxlQUFBQSxlQUFBQSxNQUFBQSxZQUFBQSxNQUFBQSxlQUFBQSxNQUFBQSxHQUFBQSxHQUFBQSxJQUFBQSxJQUFBQSxjQUFBQSxLQUFBQSxLQUFBQSxjQUFBQSxhQUFBQSxLQUFBQSxLQUFBQSxlQUFBQSxHQUFBQSxLQUFBQSxFQUFBQSxNQUFBQSxLQUFBQSxNQUFBQSxLQUFBQSxLQUFBQSxZQUFBQSxNQUFBQSxHQUFBQSxLQUFBQSxFQUFBQSxJQUFBQSxLQUFBQSxHQUFBQSxRQUFBQSxJQUFBQSxLQUFBQSxFQUFBQSxZQUFBQSxJQUFBQSxTQUFBQSxPQUFBQSxLQUFBQSxTQUFBQSxjQUFBQSxNQUFBQSxHQUFBQSxLQUFBQSxFQUFBQSxNQUFBQSxLQUFBQSxtQkFBQUEsR0FBQUEsRUFBQUEsSUFBQUE7UUFBQUE7TUFBQUE7QUFBQUEsa0JBQUFBLE1BQUFBLEdBQUFBLFlBQUFBLE1BQUFBLFFBQUFBLEdBQUFBLEtBQUFBLE1BQUFBLEdBQUFBLFFBQUFBLEVBQUFBLEdBQUFBLFFBQUFBLEVBQUFBLFFBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFFBQUFBLEdBQUFBLE1BQUFBLFdBQUFBLE1BQUFBLEdBQUFBLE1BQUFBLFFBQUFBLEdBQUFBLE1BQUFBLEtBQUFBO01BQUFBLENBQUFBLElBQUFBLFlBQUFBLE1BQUFBLFFBQUFBLEdBQUFBLGlCQUFBQSxHQUFBQSxRQUFBQSxFQUFBQSxHQUFBQSxRQUFBQSxFQUFBQSxRQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxRQUFBQSxHQUFBQSxNQUFBQSxXQUFBQSxHQUFBQSxXQUFBQSxNQUFBQSxHQUFBQSxhQUFBQSxRQUFBQSxHQUFBQSxNQUFBQSxLQUFBQSxJQUFBQSxHQUFBQSxnQkFBQUEsR0FBQUEsTUFBQUE7TUFBQUEsQ0FBQUEsSUFBQUEsR0FBQUEsU0FBQUEsQ0FBQUEsR0FBQUEsYUFBQUEsR0FBQUEsUUFBQUEsR0FBQUEsT0FBQUEsT0FBQUEsZUFBQUEsSUFBQUEsYUFBQUEsRUFBQUEsTUFBQUEsR0FBQUEsYUFBQUEsQ0FBQUEsR0FBQUEsU0FBQUEsR0FBQUEsU0FBQUEsR0FBQUEsZUFBQUEsR0FBQUEsUUFBQUEsR0FBQUEsWUFBQUEsR0FBQUEsWUFBQUEsR0FBQUEsUUFBQUE7SUFBQUEsRUFBQUEsRUFBQUEsR0FBQUEsR0FBQUEsV0FBQUEsSUFBQUEsTUFBQUEsR0FBQUEsRUFBQUE7RUFBQUE7QUFBQUEsTUFBQUEsS0FBQUEsRUFBQUE7QUFBQUEsSUFBQUEsTUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsVUFBQUEsR0FBQUEsRUFBQUEsR0FBQUEsS0FBQUEsR0FBQUE7RUFBQUE7QUFBQUEsTUFBQUEsS0FBQUEsRUFBQUE7QUFBQUEsSUFBQUEsU0FBQUEsU0FBQUEsSUFBQUE7QUFBQUEsVUFBQUEsR0FBQUEsRUFBQUE7QUFBQUEsUUFBQUEsS0FBQUEsR0FBQUEsT0FBQUEsS0FBQUEsR0FBQUE7QUFBQUEsWUFBQUEsTUFBQUEsZUFBQUEsR0FBQUEsUUFBQUEsV0FBQUEsTUFBQUEsR0FBQUEsVUFBQUEsR0FBQUEsVUFBQUEsR0FBQUEsUUFBQUEsUUFBQUEsR0FBQUEsUUFBQUEsS0FBQUEsR0FBQUEsUUFBQUEsS0FBQUE7RUFBQUE7QUFBQUEsTUFBQUEsS0FBQUEsRUFBQUEsd0JBQUFBLEVBQUFBLFNBQUFBLEVBQUFBLGFBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFdBQUFBLEdBQUFBLElBQUFBLEdBQUFBLEdBQUFBLEVBQUFBLE1BQUFBO0VBQUFBLEdBQUFBLGFBQUFBLElBQUFBLFlBQUFBLElBQUFBLGVBQUFBLElBQUFBLGtCQUFBQSxJQUFBQSxXQUFBQSxJQUFBQSxPQUFBQSxJQUFBQSxxQkFBQUEsSUFBQUEsb0JBQUFBLElBQUFBLGlCQUFBQSxJQUFBQSxTQUFBQSxJQUFBQSxZQUFBQSxJQUFBQSxRQUFBQSxJQUFBQSxVQUFBQSxJQUFBQSxzQkFBQUEsSUFBQUEsZUFBQUEsR0FBQUEsRUFBQUEsRUFBQUE7QUFBQUEsV0FBQUEsR0FBQUEsSUFBQUE7QUFBQUEsV0FBQUEsQ0FBQUEsQ0FBQUEsTUFBQUEsR0FBQUEsYUFBQUE7RUFBQUE7QUFBQUEsTUFBQUEsS0FBQUEsRUFBQUEsVUFBQUEsSUFBQUEsT0FBQUEsSUFBQUEsWUFBQUEsSUFBQUEsV0FBQUEsSUFBQUEsaUJBQUFBLElBQUFBLG9CQUFBQSxJQUFBQSxlQUFBQSxJQUFBQSxrQkFBQUEsSUFBQUEsc0JBQUFBLElBQUFBLGlCQUFBQSxJQUFBQSxRQUFBQSxJQUFBQSxxQkFBQUEsSUFBQUEsU0FBQUEsSUFBQUEsYUFBQUEsSUFBQUEsWUFBQUEsSUFBQUEsZUFBQUEsSUFBQUEsU0FBQUEsVUFBQUEsVUFBQUEsSUFBQUEsUUFBQUEsSUFBQUEsU0FBQUEsU0FBQUEsSUFBQUEsSUFBQUEsSUFBQUE7QUFBQUEsV0FBQUEsRUFBQUEsSUFBQUEsRUFBQUEsR0FBQUEsY0FBQUEsT0FBQUEsTUFBQUEsR0FBQUEsR0FBQUEsS0FBQUEsR0FBQUEsTUFBQUE7RUFBQUEsR0FBQUEsd0JBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFdBQUFBLENBQUFBLENBQUFBLEdBQUFBLFFBQUFBLEVBQUFBLE1BQUFBLEVBQUFBLEdBQUFBO0VBQUFBLEdBQUFBLGNBQUFBLElBQUFBLGVBQUFBLEdBQUFBLGVBQUFBLFNBQUFBLElBQUFBLElBQUFBO0FBQUFBLFFBQUFBLEtBQUFBLEVBQUFBLEtBQUFBLEtBQUFBLFNBQUFBLEtBQUFBLElBQUFBLElBQUFBLFVBQUFBLFNBQUFBLElBQUFBLElBQUFBO0FBQUFBLGFBQUFBLEdBQUFBLFNBQUFBLEVBQUFBO0lBQUFBLEdBQUFBLFVBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFVBQUFBLElBQUFBO0FBQUFBLGFBQUFBLEtBQUFBLG9CQUFBQSxLQUFBQSxvQkFBQUEsUUFBQUEsS0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUEsSUFBQUEsTUFBQUEsS0FBQUEsa0JBQUFBLFdBQUFBO0FBQUFBLGVBQUFBO01BQUFBLEdBQUFBLEtBQUFBLHVCQUFBQSxXQUFBQTtBQUFBQSxRQUFBQSxLQUFBQTtNQUFBQSxHQUFBQSxLQUFBQSx3QkFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsYUFBQUEsTUFBQUEsVUFBQUEsR0FBQUEsU0FBQUEsR0FBQUEsUUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsVUFBQUEsR0FBQUEsTUFBQUEsTUFBQUEsRUFBQUEsRUFBQUE7UUFBQUEsQ0FBQUE7TUFBQUEsR0FBQUEsS0FBQUEsTUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsUUFBQUEsR0FBQUEsSUFBQUEsRUFBQUE7QUFBQUEsWUFBQUEsS0FBQUEsR0FBQUE7QUFBQUEsUUFBQUEsR0FBQUEsdUJBQUFBLFdBQUFBO0FBQUFBLFVBQUFBLE1BQUFBLEdBQUFBLE9BQUFBLEVBQUFBLEdBQUFBLE1BQUFBLEdBQUFBLEtBQUFBLEVBQUFBO1FBQUFBO01BQUFBLElBQUFBLEdBQUFBO0lBQUFBLEVBQUFBO0FBQUFBLFdBQUFBLEdBQUFBLFNBQUFBLEtBQUFBLEdBQUFBLFNBQUFBLGNBQUFBO0VBQUFBLEdBQUFBLGVBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFdBQUFBLEVBQUFBLEtBQUFBLE1BQUFBLEVBQUFBO0VBQUFBLEdBQUFBLGNBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFdBQUFBLEdBQUFBLEVBQUFBLElBQUFBLEVBQUFBLE1BQUFBLE1BQUFBLFNBQUFBLElBQUFBO0VBQUFBLEdBQUFBLFdBQUFBLFdBQUFBO0FBQUFBLFdBQUFBLEVBQUFBLFNBQUFBLEtBQUFBO0VBQUFBLEdBQUFBLFVBQUFBLEdBQUFBLGdCQUFBQSxJQUFBQSxXQUFBQSxJQUFBQSxZQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxXQUFBQSxHQUFBQSxFQUFBQSxLQUFBQSxHQUFBQSxTQUFBQTtFQUFBQSxHQUFBQSxRQUFBQSxTQUFBQSxJQUFBQTtBQUFBQSxXQUFBQSxDQUFBQSxDQUFBQSxNQUFBQSxDQUFBQSxDQUFBQSxHQUFBQSxnQkFBQUEsWUFBQUEsT0FBQUEsR0FBQUEsZUFBQUEsR0FBQUEsdUJBQUFBLFdBQUFBLEdBQUFBLFlBQUFBLFdBQUFBLE9BQUFBO0VBQUFBLEdBQUFBLGFBQUFBLFNBQUFBLElBQUFBO0FBQUFBLFdBQUFBLE9BQUFBLEdBQUFBLFFBQUFBLE1BQUFBLEdBQUFBLFlBQUFBLE9BQUFBO0VBQUFBLEdBQUFBLFdBQUFBLEdBQUFBLGVBQUFBLElBQUFBLE1BQUFBLFNBQUFBLElBQUFBLElBQUFBO0FBQUFBLGFBQUFBLEdBQUFBLElBQUFBO0FBQUFBLFVBQUFBLEtBQUFBLEtBQUFBLE1BQUFBLEtBQUFBLEtBQUFBLE1BQUFBLEdBQUFBO0FBQUFBLGFBQUFBLENBQUFBLE1BQUFBLE9BQUFBLEdBQUFBLE9BQUFBLEdBQUFBLElBQUFBLElBQUFBLEdBQUFBLFVBQUFBLE9BQUFBLEtBQUFBLENBQUFBLEdBQUFBLEtBQUFBLE9BQUFBLEVBQUFBLEtBQUFBLENBQUFBLEtBQUFBLEdBQUFBLEtBQUFBLE9BQUFBLEVBQUFBO0lBQUFBO0FBQUFBLGFBQUFBLEdBQUFBLElBQUFBO0FBQUFBLGFBQUFBLEtBQUFBLHdCQUFBQSxJQUFBQSxFQUFBQSxJQUFBQSxFQUFBQTtJQUFBQTtBQUFBQSxXQUFBQSxHQUFBQSxjQUFBQSxXQUFBQSxHQUFBQSxlQUFBQSxHQUFBQSxRQUFBQSxLQUFBQSxHQUFBQSxVQUFBQSxtQkFBQUEsTUFBQUEsR0FBQUEsTUFBQUEsTUFBQUE7RUFBQUEsR0FBQUEsWUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsYUFBQUEsR0FBQUEsSUFBQUE7QUFBQUEsVUFBQUEsS0FBQUEsR0FBQUEsQ0FBQUEsR0FBQUEsRUFBQUE7QUFBQUEsYUFBQUEsT0FBQUEsR0FBQUEsS0FBQUEsR0FBQUEsSUFBQUEsR0FBQUEsT0FBQUEsSUFBQUE7SUFBQUE7QUFBQUEsV0FBQUEsR0FBQUEsV0FBQUEsSUFBQUEsR0FBQUEsU0FBQUEsSUFBQUEsR0FBQUEsVUFBQUEsbUJBQUFBLEdBQUFBLE1BQUFBLE1BQUFBLEdBQUFBLGNBQUFBLGlCQUFBQSxHQUFBQSxlQUFBQSxHQUFBQSxRQUFBQSxLQUFBQTtFQUFBQSxHQUFBQSxXQUFBQSxTQUFBQSxJQUFBQSxJQUFBQTtBQUFBQSxXQUFBQSxHQUFBQSxFQUFBQTtFQUFBQSxHQUFBQSx5QkFBQUEsU0FBQUEsSUFBQUEsSUFBQUE7QUFBQUEsV0FBQUEsR0FBQUEsRUFBQUE7RUFBQUEsR0FBQUEsWUFBQUEsR0FBQUEsVUFBQUEsSUFBQUEsY0FBQUEsSUFBQUEsTUFBQUEsU0FBQUEsSUFBQUE7QUFBQUEsUUFBQUEsSUFBQUEsSUFBQUE7QUFBQUEsYUFBQUEsR0FBQUEsSUFBQUE7QUFBQUEsVUFBQUEsT0FBQUEsS0FBQUEsR0FBQUEsR0FBQUEsS0FBQUEsU0FBQUEsSUFBQUE7QUFBQUEsUUFBQUEsS0FBQUEsR0FBQUEsV0FBQUE7TUFBQUEsR0FBQUEsU0FBQUEsSUFBQUE7QUFBQUEsUUFBQUEsS0FBQUE7TUFBQUEsQ0FBQUEsR0FBQUEsR0FBQUEsT0FBQUE7QUFBQUEsVUFBQUEsQ0FBQUEsR0FBQUEsT0FBQUE7QUFBQUEsYUFBQUEsRUFBQUEsSUFBQUEsRUFBQUE7SUFBQUE7QUFBQUEsV0FBQUEsR0FBQUEsY0FBQUEsUUFBQUEsR0FBQUEsTUFBQUEsTUFBQUE7RUFBQUEsR0FBQUEsb0RBQUFBLEdBQUFBO0FDL0J3QyxXQUFTSyxHQUFFTCxJQUFFQyxJQUFBQTtBQUFBQSxLQUFJLFFBQU1BLE1BQUdBLEtBQUVELEdBQUV3QyxZQUFVdkMsS0FBRUQsR0FBRXdDO0FBQVEsYUFBUXJDLEtBQUUsR0FBRUQsS0FBRXlFLE1BQU0xRSxFQUFBQSxHQUFHRSxLQUFFRixJQUFFRSxLQUFJRCxDQUFBQSxHQUFFQyxFQUFBQSxJQUFHSCxHQUFFRyxFQUFBQTtBQUFHLFdBQU9EO0VBQUM7QUFBQyxXQUFTSSxH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O0FDaUJ0cTBHLFdBQVNraEIsR0FBVWp1QixJQUFBQTtBQUN4Qmt1QixPQUNFQyxHQUFBMW1CLGNBQUMybUIsSUFBU0MsRUFBQSxDQUFBLEdBQ0pydUIsSUFBSyxFQUNUc29CLHVCQUF1QixTQUFDblcsSUFBQUE7QUFHdEIsYUFGQUEsR0FBYXVZLGdCQUFnQixnQkFBZ0JqaEIsRUFBQUEsR0FFdEN6SixHQUFNc29CLHdCQUF3QnRvQixHQUFNc29CLHNCQUFzQm5XLEVBQUFBLElBQWdCQTtJQUNuRixFQUFBLENBQUEsQ0FBQSxHQXJCTixTQUF3QnZSLElBQUFBO0FBQStGLFVBQWxFMlMsS0FBMEN2UixVQUFBeEMsU0FBQSxLQUFBLFdBQUF3QyxVQUFBLENBQUEsSUFBQUEsVUFBQSxDQUFBLElBQUc4RztBQUNoRyxhQUFxQixZQUFBLE9BQVZsSSxLQUNGMlMsR0FBWTdHLFNBQVN5UCxjQUEyQnZiLEVBQUFBLElBR2xEQTtJQUNULEVBaUJtQlosR0FBTXdzQixXQUFXeHNCLEdBQU11VCxXQUFBQSxDQUFBQTtFQUUxQzs7O0FDM0JBLEtBQVU7QUFBQSxJQUNSLE9BQU87QUFBQSxJQUNQLFFBQVE7QUFBQSxJQUNSLFdBQVc7QUFBQSxJQUNYLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxJQUNYLFVBQVU7QUFBQSxFQUNaLENBQUM7QUFFRCxNQUFNLFVBQVUsV0FBWTtBQUMxQixhQUFTLHVCQUF1QixrQkFBa0IsRUFBRSxDQUFDLEVBQUUsTUFBTTtBQUFBLEVBQy9EO0FBRUEsV0FBUyxlQUFlLG9CQUFvQixFQUFFLFVBQVU7QUFDeEQsV0FBUyxlQUFlLHFCQUFxQixFQUFFLFVBQVU7IiwKICAibmFtZXMiOiBbInAiLCAidiIsICJ5IiwgImUiLCAidCIsICJuIiwgInIiLCAibyIsICJpIiwgImEiLCAiYyIsICJ1bmRlZmluZWQiLCAibCIsICJzIiwgInUiLCAiZiIsICJtIiwgImQiLCAiXyIsICJnIiwgImIiLCAidyIsICJoIiwgIlMiLCAiRSIsICJqIiwgIlAiLCAiSSIsICJEIiwgIkMiLCAieCIsICJBIiwgIk4iLCAiVCIsICJPIiwgIl9fYiIsICJfX3IiLCAiZGlmZmVkIiwgIl9fYyIsICJ1bm1vdW50IiwgIl9fIiwgIl9faCIsICJfX0giLCAibGVuZ3RoIiwgInB1c2giLCAiX19OIiwgInNldFN0YXRlIiwgImZpbHRlciIsICJldmVyeSIsICJjYWxsIiwgInRoaXMiLCAicHJvcHMiLCAiZm9yRWFjaCIsICJzaG91bGRDb21wb25lbnRVcGRhdGUiLCAiY29tcG9uZW50V2lsbFVwZGF0ZSIsICJfX2UiLCAiX19zIiwgImN1cnJlbnQiLCAiRiIsICJjb25jYXQiLCAicSIsICJjb250ZXh0IiwgInN1YiIsICJ2YWx1ZSIsICJ1c2VEZWJ1Z1ZhbHVlIiwgIl9fdiIsICJfX20iLCAic2hpZnQiLCAiX19QIiwgInoiLCAiQiIsICJfX2siLCAicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwgInNvbWUiLCAiayIsICJjbGVhclRpbWVvdXQiLCAiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCAic2V0VGltZW91dCIsICJBcnJheSIsICJkb25lIiwgIlByb21pc2UiLCAicmVzb2x2ZSIsICJ0aGVuIiwgImFyZ3VtZW50cyIsICJhcHBseSIsICJfdHlwZW9mIiwgIlR5cGVFcnJvciIsICJSZWZlcmVuY2VFcnJvciIsICJSZWZsZWN0IiwgImNvbnN0cnVjdCIsICJjb25zdHJ1Y3RvciIsICJPYmplY3QiLCAiZGVmaW5lUHJvcGVydHkiLCAid3JpdGFibGUiLCAiU3ltYm9sIiwgInRvUHJpbWl0aXZlIiwgIlN0cmluZyIsICJlbnVtZXJhYmxlIiwgImNvbmZpZ3VyYWJsZSIsICJhc3NpZ24iLCAiYmluZCIsICJoYXNPd25Qcm9wZXJ0eSIsICJzZXRQcm90b3R5cGVPZiIsICJnZXRQcm90b3R5cGVPZiIsICJfX3Byb3RvX18iLCAicHJvdG90eXBlIiwgImNyZWF0ZSIsICJCb29sZWFuIiwgInZhbHVlT2YiLCAia2V5cyIsICJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCAiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwgImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCAiZGVmaW5lUHJvcGVydGllcyIsICJpbmNsdWRlcyIsICJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsICJpdGVyYXRvciIsICJhc3luY0l0ZXJhdG9yIiwgInRvU3RyaW5nVGFnIiwgInR5cGUiLCAiYXJnIiwgIndyYXAiLCAiX2ludm9rZSIsICJfX2F3YWl0IiwgIkVycm9yIiwgIm1ldGhvZCIsICJkZWxlZ2F0ZSIsICJzZW50IiwgIl9zZW50IiwgImRpc3BhdGNoRXhjZXB0aW9uIiwgImFicnVwdCIsICJyZXR1cm4iLCAicmVzdWx0TmFtZSIsICJuZXh0IiwgIm5leHRMb2MiLCAidHJ5TG9jIiwgImNhdGNoTG9jIiwgImZpbmFsbHlMb2MiLCAiYWZ0ZXJMb2MiLCAidHJ5RW50cmllcyIsICJjb21wbGV0aW9uIiwgInJlc2V0IiwgImlzTmFOIiwgImRpc3BsYXlOYW1lIiwgImlzR2VuZXJhdG9yRnVuY3Rpb24iLCAibmFtZSIsICJtYXJrIiwgImF3cmFwIiwgIkFzeW5jSXRlcmF0b3IiLCAiYXN5bmMiLCAicmV2ZXJzZSIsICJwb3AiLCAidmFsdWVzIiwgInByZXYiLCAiY2hhckF0IiwgInNsaWNlIiwgInN0b3AiLCAicnZhbCIsICJjb21wbGV0ZSIsICJmaW5pc2giLCAiY2F0Y2giLCAiZGVsZWdhdGVZaWVsZCIsICJpc0FycmF5IiwgImZyb20iLCAidG9TdHJpbmciLCAidGVzdCIsICJNYXAiLCAiRnVuY3Rpb24iLCAiaW5kZXhPZiIsICJoYXMiLCAiZ2V0IiwgInNldCIsICJjcmVhdGVFbGVtZW50IiwgIndpZHRoIiwgImhlaWdodCIsICJjbGFzc05hbWUiLCAic3Ryb2tlV2lkdGgiLCAic3Ryb2tlIiwgImZpbGwiLCAic3Ryb2tlTGluZWNhcCIsICJ2aWV3Qm94IiwgImZpbGxSdWxlIiwgInN0cm9rZUxpbmVqb2luIiwgImZvcndhcmRSZWYiLCAidHJhbnNsYXRpb25zIiwgImJ1dHRvblRleHQiLCAiYnV0dG9uQXJpYUxhYmVsIiwgIm5hdmlnYXRvciIsICJwbGF0Zm9ybSIsICJyZWYiLCAiRnJhZ21lbnQiLCAicmVhY3RzVG9LZXkiLCAiY2hpbGRyZW4iLCAid2luZG93IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAicmVtb3ZlRXZlbnRMaXN0ZW5lciIsICJrZXkiLCAicmVkdWNlIiwgImNvbGxlY3Rpb25zIiwgIml0ZW1zIiwgIkwiLCAiUiIsICJNIiwgInNlZ21lbnQiLCAidmVyc2lvbiIsICJIIiwgIml0ZW0iLCAiaW5kZXgiLCAiX19hdXRvY29tcGxldGVfaW5kZXhOYW1lIiwgInBvc2l0aW9ucyIsICJmaW5kSW5kZXgiLCAib2JqZWN0SUQiLCAicXVlcnlJRCIsICJfX2F1dG9jb21wbGV0ZV9xdWVyeUlEIiwgImFsZ29saWFTb3VyY2UiLCAiVSIsICJLIiwgIlYiLCAiSiIsICJRIiwgIlciLCAiWiIsICJHIiwgIlkiLCAibWFwIiwgIm9iamVjdElEcyIsICJYIiwgImVlIiwgInRlIiwgInJlIiwgIm5lIiwgIm9lIiwgImllIiwgImFlIiwgImNlIiwgInVlIiwgImxlIiwgIm9uSXRlbXNDaGFuZ2UiLCAiaW5zaWdodHMiLCAic3RhdGUiLCAiaW5zaWdodHNFdmVudHMiLCAiZXZlbnROYW1lIiwgInNlIiwgInZpZXdlZE9iamVjdElEcyIsICJmZSIsICJvblNlbGVjdCIsICJjbGlja2VkT2JqZWN0SURzQWZ0ZXJTZWFyY2giLCAib25BY3RpdmUiLCAiX19hdXRvY29tcGxldGVfY2xpY2tBbmFseXRpY3MiLCAiaW5zaWdodHNDbGllbnQiLCAiaW5zaWdodHNJbml0UGFyYW1zIiwgIkFsZ29saWFBbmFseXRpY3NPYmplY3QiLCAicXVldWUiLCAiZG9jdW1lbnQiLCAic3JjIiwgIm9uZXJyb3IiLCAiY29uc29sZSIsICJlcnJvciIsICJib2R5IiwgImFwcGVuZENoaWxkIiwgInBhcnRpYWwiLCAic3BsaXQiLCAiTnVtYmVyIiwgIl9fYXV0b2NvbXBsZXRlX2FsZ29saWFDcmVkZW50aWFscyIsICJhcHBJZCIsICJhcGlLZXkiLCAiaGVhZGVycyIsICJpbml0IiwgInNldEF1dGhlbnRpY2F0ZWRVc2VyVG9rZW4iLCAic2V0VXNlclRva2VuIiwgImNsaWNrZWRPYmplY3RJRHMiLCAiY2xpY2tlZEZpbHRlcnMiLCAiY29udmVydGVkT2JqZWN0SURzQWZ0ZXJTZWFyY2giLCAiY29udmVydGVkT2JqZWN0SURzIiwgImNvbnZlcnRlZEZpbHRlcnMiLCAicGF5bG9hZCIsICJ2aWV3ZWRGaWx0ZXJzIiwgImlzT3BlbiIsICJzdWJzY3JpYmUiLCAic2V0Q29udGV4dCIsICJhbGdvbGlhSW5zaWdodHNQbHVnaW4iLCAiX19hbGdvbGlhU2VhcmNoUGFyYW1ldGVycyIsICJjbGlja0FuYWx5dGljcyIsICJ1c2VyVG9rZW4iLCAibWUiLCAiZXZlbnQiLCAic291cmNlIiwgImdldEl0ZW1zIiwgIm9uU3RhdGVDaGFuZ2UiLCAiX19hdXRvY29tcGxldGVfcGx1Z2luT3B0aW9ucyIsICJfX2F1dG9tYXRpY0luc2lnaHRzIiwgInBlIiwgImRlIiwgImZpbmFsbHkiLCAib25DYW5jZWxMaXN0IiwgImNhbmNlbCIsICJpc0NhbmNlbGVkIiwgInZlIiwgImhlIiwgInllIiwgImdlIiwgImJlIiwgIlNlIiwgIk9lIiwgImFjdGl2ZUl0ZW1JZCIsICJjb2xsZWN0aW9uIiwgIml0ZW1JbnB1dFZhbHVlIiwgImdldEl0ZW1JbnB1dFZhbHVlIiwgIml0ZW1VcmwiLCAiZ2V0SXRlbVVybCIsICJ3ZSIsICJzb3VyY2VJZCIsICJqb2luIiwgInJlcGxhY2UiLCAiRWUiLCAiamUiLCAibmF0aXZlRXZlbnQiLCAiUGUiLCAiSWUiLCAiRGUiLCAiQWUiLCAiX2UiLCAieGUiLCAiQ2UiLCAiTmUiLCAiTGUiLCAiUmUiLCAicWUiLCAiTWUiLCAiQmUiLCAiRmUiLCAiVWUiLCAiS2UiLCAiVmUiLCAiemUiLCAiSmUiLCAiUWUiLCAiV2UiLCAiWmUiLCAiR2UiLCAiZXhlY3V0ZSIsICIkZSIsICJzZWFyY2hDbGllbnQiLCAicmVxdWVzdGVySWQiLCAicmVxdWVzdHMiLCAiZmluZCIsICJhbGwiLCAiZXQiLCAidHQiLCAicnQiLCAibnQiLCAib3QiLCAiYXQiLCAiY3QiLCAidXQiLCAibHQiLCAic3QiLCAiZnQiLCAibmV4dFN0YXRlIiwgInF1ZXJ5IiwgInJlZnJlc2giLCAic3RvcmUiLCAiZW52aXJvbm1lbnQiLCAic2V0Q29sbGVjdGlvbnMiLCAic2V0SXNPcGVuIiwgInNldFF1ZXJ5IiwgInNldEFjdGl2ZUl0ZW1JZCIsICJzZXRTdGF0dXMiLCAiZGVmYXVsdEFjdGl2ZUl0ZW1JZCIsICJvcGVuT25Gb2N1cyIsICJnZXRTdGF0ZSIsICJzaG91bGRQYW5lbE9wZW4iLCAicGVuZGluZ1JlcXVlc3RzIiwgImFkZCIsICJzdGFsbFRocmVzaG9sZCIsICJnZXRTb3VyY2VzIiwgInF1ZXJpZXMiLCAicGFyYW1zIiwgInRyYW5zZm9ybVJlc3BvbnNlIiwgIl9hdXRvbWF0aWNJbnNpZ2h0cyIsICJyZXN1bHRzIiwgImhpdHMiLCAiZmFjZXRIaXRzIiwgImxhYmVsIiwgImNvdW50IiwgIl9oaWdobGlnaHRSZXN1bHQiLCAiaGlnaGxpZ2h0ZWQiLCAib25SZXNvbHZlIiwgIkpTT04iLCAic3RyaW5naWZ5IiwgInBsdWdpbnMiLCAicmVzaGFwZSIsICJzb3VyY2VzQnlTb3VyY2VJZCIsICJzb3VyY2VzIiwgIm10IiwgInB0IiwgInZ0IiwgImR0IiwgImh0IiwgImd0IiwgImJ0IiwgIlN0IiwgIk90IiwgInd0IiwgIkV0IiwgImp0IiwgIlB0IiwgIkl0IiwgIkR0IiwgImt0IiwgIl90IiwgInh0IiwgIkN0IiwgIk50IiwgIlR0IiwgIm9wdGlvbnMiLCAiX19hdXRvY29tcGxldGVfbWV0YWRhdGEiLCAidXNlckFnZW50cyIsICJ1YSIsICJMdCIsICJSdCIsICJxdCIsICJNdCIsICJIdCIsICJCdCIsICJzdGF0dXMiLCAibmV4dEFjdGl2ZUl0ZW1JZCIsICJkZWJ1ZyIsICJGdCIsICJVdCIsICJLdCIsICJWdCIsICJ6dCIsICJlbnRlcktleUhpbnQiLCAiaWdub3JlQ29tcG9zaXRpb25FdmVudHMiLCAicGxhY2Vob2xkZXIiLCAiYXV0b0ZvY3VzIiwgImlkIiwgImluaXRpYWxTdGF0ZSIsICJvblN1Ym1pdCIsICJvblJlc2V0IiwgIl9fZGVmYXVsdCIsICJuYXZpZ2F0ZSIsICJsb2NhdGlvbiIsICJuYXZpZ2F0ZU5ld1RhYiIsICJvcGVuIiwgImZvY3VzIiwgIm5hdmlnYXRlTmV3V2luZG93IiwgImRpc3BhdGNoIiwgInByZXZTdGF0ZSIsICJjYW5jZWxBbGwiLCAiaXNFbXB0eSIsICJfX2F1dG9jb21wbGV0ZV9pZCIsICJnZXRFbnZpcm9ubWVudFByb3BzIiwgImlucHV0RWxlbWVudCIsICJmb3JtRWxlbWVudCIsICJwYW5lbEVsZW1lbnQiLCAidGFyZ2V0IiwgImNvbnRhaW5zIiwgIm9uVG91Y2hTdGFydCIsICJvbk1vdXNlRG93biIsICJvblRvdWNoTW92ZSIsICJhY3RpdmVFbGVtZW50IiwgImJsdXIiLCAiZ2V0Um9vdFByb3BzIiwgInJvbGUiLCAiZ2V0Rm9ybVByb3BzIiwgImFjdGlvbiIsICJub1ZhbGlkYXRlIiwgInByZXZlbnREZWZhdWx0IiwgImdldExhYmVsUHJvcHMiLCAiaHRtbEZvciIsICJnZXRJbnB1dFByb3BzIiwgIm1heExlbmd0aCIsICJtYXRjaCIsICJ1c2VyQWdlbnQiLCAiYXV0b0NvbXBsZXRlIiwgImF1dG9Db3JyZWN0IiwgImF1dG9DYXBpdGFsaXplIiwgInNwZWxsQ2hlY2siLCAib25DaGFuZ2UiLCAiY3VycmVudFRhcmdldCIsICJpc0NvbXBvc2luZyIsICJvbkNvbXBvc2l0aW9uRW5kIiwgIm9uS2V5RG93biIsICJnZXRFbGVtZW50QnlJZCIsICJzY3JvbGxJbnRvVmlld0lmTmVlZGVkIiwgInNjcm9sbEludG9WaWV3IiwgIm1ldGFLZXkiLCAiY3RybEtleSIsICJzaGlmdEtleSIsICJhbHRLZXkiLCAib25Gb2N1cyIsICJvbkJsdXIiLCAib25DbGljayIsICJnZXRQYW5lbFByb3BzIiwgIm9uTW91c2VMZWF2ZSIsICJnZXRMaXN0UHJvcHMiLCAiZ2V0SXRlbVByb3BzIiwgIm9uTW91c2VNb3ZlIiwgIkV2ZW50IiwgIm1ldGFkYXRhIiwgInF1ZXJ5U2VsZWN0b3IiLCAiY29udGVudCIsICJKdCIsICJzZWFyY2hCeVRleHQiLCAiaHJlZiIsICJob3N0bmFtZSIsICJyZWwiLCAieG1sbnMiLCAicngiLCAicnkiLCAiUXQiLCAiYXJpYUxhYmVsIiwgIld0IiwgInNlbGVjdFRleHQiLCAic2VsZWN0S2V5QXJpYUxhYmVsIiwgIm5hdmlnYXRlVGV4dCIsICJuYXZpZ2F0ZVVwS2V5QXJpYUxhYmVsIiwgIm5hdmlnYXRlRG93bktleUFyaWFMYWJlbCIsICJjbG9zZVRleHQiLCAiY2xvc2VLZXlBcmlhTGFiZWwiLCAiWnQiLCAiaGl0IiwgInVybCIsICJHdCIsICJzdHJva2VPcGFjaXR5IiwgInRyYW5zZm9ybSIsICJjeCIsICJjeSIsICJhdHRyaWJ1dGVOYW1lIiwgInRvIiwgImR1ciIsICJyZXBlYXRDb3VudCIsICJZdCIsICIkdCIsICJYdCIsICJlciIsICJ0ciIsICJuciIsICJyciIsICJvciIsICJpciIsICJhciIsICJjciIsICJ0aXRsZVRleHQiLCAiaGVscFRleHQiLCAidXIiLCAibHIiLCAibm9SZXN1bHRzVGV4dCIsICJzdWdnZXN0ZWRRdWVyeVRleHQiLCAicmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0IiwgInJlcG9ydE1pc3NpbmdSZXN1bHRzTGlua1RleHQiLCAic2VhcmNoU3VnZ2VzdGlvbnMiLCAidG9Mb3dlckNhc2UiLCAiaW5wdXRSZWYiLCAiZ2V0TWlzc2luZ1Jlc3VsdHNVcmwiLCAic3IiLCAiZnIiLCAibXIiLCAiYXR0cmlidXRlIiwgInRhZ05hbWUiLCAiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCAiX19odG1sIiwgInByIiwgInRpdGxlIiwgInZyIiwgInJlbmRlckljb24iLCAicmVuZGVyQWN0aW9uIiwgIm9uSXRlbUNsaWNrIiwgImhpdENvbXBvbmVudCIsICJ1c2VTdGF0ZSIsICJ1c2VSZWYiLCAiX19kb2NzZWFyY2hfcGFyZW50IiwgIm9uVHJhbnNpdGlvbkVuZCIsICJoaWVyYXJjaHkiLCAicnVuRGVsZXRlVHJhbnNpdGlvbiIsICJydW5GYXZvcml0ZVRyYW5zaXRpb24iLCAiZHIiLCAiaHIiLCAieXIiLCAiYnV0dG9uIiwgImdyIiwgImJyIiwgIlNyIiwgIlJlZ0V4cCIsICJPciIsICJsdmwwIiwgIndyIiwgInJlc3VsdHNGb290ZXJDb21wb25lbnQiLCAiRXIiLCAianIiLCAicmVjZW50U2VhcmNoZXNUaXRsZSIsICJub1JlY2VudFNlYXJjaGVzVGV4dCIsICJzYXZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGUiLCAicmVtb3ZlUmVjZW50U2VhcmNoQnV0dG9uVGl0bGUiLCAiZmF2b3JpdGVTZWFyY2hlc1RpdGxlIiwgInJlbW92ZUZhdm9yaXRlU2VhcmNoQnV0dG9uVGl0bGUiLCAiaGFzQ29sbGVjdGlvbnMiLCAiZGlzYWJsZVVzZXJQZXJzb25hbGl6YXRpb24iLCAic3RvcFByb3BhZ2F0aW9uIiwgImZhdm9yaXRlU2VhcmNoZXMiLCAicmVjZW50U2VhcmNoZXMiLCAicmVtb3ZlIiwgIlByIiwgIklyIiwgIm1lbW8iLCAiZXJyb3JTY3JlZW4iLCAibm9SZXN1bHRzU2NyZWVuIiwgInN0YXJ0U2NyZWVuIiwgIkRyIiwgImtyIiwgInJlc2V0QnV0dG9uVGl0bGUiLCAicmVzZXRCdXR0b25BcmlhTGFiZWwiLCAiY2FuY2VsQnV0dG9uVGV4dCIsICJjYW5jZWxCdXR0b25BcmlhTGFiZWwiLCAic2VhcmNoSW5wdXRMYWJlbCIsICJ1c2VFZmZlY3QiLCAiaXNGcm9tU2VsZWN0aW9uIiwgInNlbGVjdCIsICJoaWRkZW4iLCAib25DbG9zZSIsICJBciIsICJ4ciIsICJsaW1pdCIsICJsb2NhbFN0b3JhZ2UiLCAic2V0SXRlbSIsICJyZW1vdmVJdGVtIiwgImdldEl0ZW0iLCAicGFyc2UiLCAiX3NuaXBwZXRSZXN1bHQiLCAic3BsaWNlIiwgInVuc2hpZnQiLCAiZ2V0QWxsIiwgIkNyIiwgIm1pc3MiLCAidGltZVRvTGl2ZSIsICJmcm9tRW50cmllcyIsICJlbnRyaWVzIiwgInRpbWVzdGFtcCIsICJEYXRlIiwgImdldFRpbWUiLCAiZGVsZXRlIiwgImNsZWFyIiwgIk5yIiwgImNhY2hlcyIsICJUciIsICJzZXJpYWxpemFibGUiLCAiTHIiLCAiYWxnb2xpYUFnZW50cyIsICJjbGllbnQiLCAiUnIiLCAicXIiLCAibm93IiwgImxhc3RVcGRhdGUiLCAiaXNVcCIsICJpc1RpbWVkT3V0IiwgIk1yIiwgIkhyIiwgInN0YWNrVHJhY2UiLCAiQnIiLCAiRnIiLCAiVXIiLCAicmVzcG9uc2UiLCAiS3IiLCAiVnIiLCAic29ydCIsICJlbmNvZGVVUklDb21wb25lbnQiLCAicHJvdG9jb2wiLCAicG9ydCIsICJzdWJzdHJpbmciLCAienIiLCAiZGF0YSIsICJKciIsICJBY2NlcHQiLCAiUXIiLCAibWVzc2FnZSIsICJXciIsICJaciIsICJHciIsICJyZXF1ZXN0IiwgIllyIiwgIiRyIiwgIlhyIiwgImVuIiwgImFjY2VwdCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJybiIsICJvbiIsICJhbiIsICJpbmRleE5hbWUiLCAic2VhcmNoUGFyYW1ldGVycyIsICJtYXhSZXN1bHRzUGVyR3JvdXAiLCAidHJhbnNmb3JtSXRlbXMiLCAiaW5pdGlhbFNjcm9sbFkiLCAidHJhbnNmb3JtU2VhcmNoQ2xpZW50IiwgImluaXRpYWxRdWVyeSIsICJmb290ZXIiLCAic2VhcmNoQm94IiwgImdldFNlbGVjdGlvbiIsICJ1c2VNZW1vIiwgImF1dGhNb2RlIiwgInF1ZXJ5UGFyYW1ldGVycyIsICJob3N0cyIsICJob3N0c0NhY2hlIiwgImJhc2VIZWFkZXJzIiwgImxvZ2dlciIsICJiYXNlUXVlcnlQYXJhbWV0ZXJzIiwgImFsZ29saWFBZ2VudCIsICJ0aW1lb3V0cyIsICJyZXF1ZXN0ZXIiLCAicmVxdWVzdHNDYWNoZSIsICJyZXNwb25zZXNDYWNoZSIsICJnZXRUaW1lb3V0IiwgInBhdGgiLCAiY29ubmVjdFRpbWVvdXQiLCAiY29ubmVjdCIsICJyZXNwb25zZVRpbWVvdXQiLCAicmVhZCIsICJ3cml0ZSIsICJob3N0IiwgInRyaWVzTGVmdCIsICJzZW5kIiwgImluZm8iLCAidXNlUmVhZFRyYW5zcG9ydGVyIiwgImNhY2hlYWJsZSIsICJyZXF1ZXN0T3B0aW9ucyIsICJ0cmFuc3BvcnRlciIsICJyZWplY3QiLCAiY2xlYXJDYWNoZSIsICJfdWEiLCAiYWRkQWxnb2xpYUFnZW50IiwgInNldENsaWVudEFwaUtleSIsICJzZWFyY2hGb3JIaXRzIiwgInNlYXJjaCIsICJzZWFyY2hGb3JGYWNldHMiLCAiY3VzdG9tUG9zdCIsICJwYXJhbWV0ZXJzIiwgImdldFJlY29tbWVuZGF0aW9ucyIsICJmYWNldCIsICJtYXhGYWNldEhpdHMiLCAiZmFjZXRRdWVyeSIsICJYTUxIdHRwUmVxdWVzdCIsICJzZXRSZXF1ZXN0SGVhZGVyIiwgImFib3J0IiwgIm9ucmVhZHlzdGF0ZWNoYW5nZSIsICJyZWFkeVN0YXRlIiwgIk9QRU5FRCIsICJyZXNwb25zZVRleHQiLCAib25sb2FkIiwgIiQiLCAidXNlQ2FsbGJhY2siLCAiYXR0cmlidXRlc1RvUmV0cmlldmUiLCAiYXR0cmlidXRlc1RvU25pcHBldCIsICJzbmlwcGV0RWxsaXBzaXNUZXh0IiwgImhpZ2hsaWdodFByZVRhZyIsICJoaWdobGlnaHRQb3N0VGFnIiwgImhpdHNQZXJQYWdlIiwgIm5iSGl0cyIsICJsdmwxIiwgImZsYXQiLCAiY29udGFpbmVyIiwgInF1ZXJ5U2VsZWN0b3JBbGwiLCAiY2xhc3NMaXN0IiwgInNjcm9sbFRvIiwgInVzZUxheW91dEVmZmVjdCIsICJpbm5lcldpZHRoIiwgImNsaWVudFdpZHRoIiwgInN0eWxlIiwgIm1hcmdpblJpZ2h0IiwgIm1hdGNoTWVkaWEiLCAibWF0Y2hlcyIsICJzY3JvbGxUb3AiLCAiaW5uZXJIZWlnaHQiLCAic2V0UHJvcGVydHkiLCAidGFiSW5kZXgiLCAidW4iLCAib25PcGVuIiwgIm9uSW5wdXQiLCAic2VhcmNoQnV0dG9uUmVmIiwgImNvZGUiLCAiaXNDb250ZW50RWRpdGFibGUiLCAiZnJvbUNoYXJDb2RlIiwgImtleUNvZGUiLCAic2Nyb2xsWSIsICJtb2RhbCIsICJkb2NzZWFyY2giLCAicmVuZGVyIiwgIlJlYWN0IiwgIkRvY1NlYXJjaCIsICJfZXh0ZW5kcyJdCn0K
