!(function (t, e) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? (module.exports = e())
    : typeof define === 'function' && define.amd
    ? define(e)
    : ((t =
        typeof globalThis !== 'undefined'
          ? globalThis
          : t || self).RevealNotes = e());
})(this, function () {
  const t =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : typeof self !== 'undefined'
      ? self
      : {};
  const e = function (t) {
    return t && t.Math == Math && t;
  };
  const n =
    e(typeof globalThis === 'object' && globalThis) ||
    e(typeof window === 'object' && window) ||
    e(typeof self === 'object' && self) ||
    e(typeof t === 'object' && t) ||
    (function () {
      return this;
    })() ||
    Function('return this')();
  const r = {};
  const u = function (t) {
    try {
      return !!t();
    } catch (t) {
      return !0;
    }
  };
  const i = !u(function () {
    return (
      Object.defineProperty({}, 1, {
        get() {
          return 7;
        },
      })[1] != 7
    );
  });
  const a = {};
  const o = {}.propertyIsEnumerable;
  const l = Object.getOwnPropertyDescriptor;
  const s = l && !o.call({ 1: 2 }, 1);
  a.f = s
    ? function (t) {
        const e = l(this, t);
        return !!e && e.enumerable;
      }
    : o;
  const c = function (t, e) {
    return {
      enumerable: !(1 & t),
      configurable: !(2 & t),
      writable: !(4 & t),
      value: e,
    };
  };
  const p = {}.toString;
  const d = function (t) {
    return p.call(t).slice(8, -1);
  };
  const f = d;
  const h = ''.split;
  const g = u(function () {
    return !Object('z').propertyIsEnumerable(0);
  })
    ? function (t) {
        return f(t) == 'String' ? h.call(t, '') : Object(t);
      }
    : Object;
  const D = function (t) {
    if (t == null) throw TypeError(`Can't call method on ${t}`);
    return t;
  };
  const m = g;
  const v = D;
  const y = function (t) {
    return m(v(t));
  };
  const k = function (t) {
    return typeof t === 'object' ? t !== null : typeof t === 'function';
  };
  const A = k;
  const E = function (t, e) {
    if (!A(t)) return t;
    let n;
    let r;
    if (e && typeof (n = t.toString) === 'function' && !A((r = n.call(t))))
      return r;
    if (typeof (n = t.valueOf) === 'function' && !A((r = n.call(t)))) return r;
    if (!e && typeof (n = t.toString) === 'function' && !A((r = n.call(t))))
      return r;
    throw TypeError("Can't convert object to primitive value");
  };
  const b = D;
  const F = function (t) {
    return Object(b(t));
  };
  const C = F;
  const x = {}.hasOwnProperty;
  const w = function (t, e) {
    return x.call(C(t), e);
  };
  const S = k;
  const B = n.document;
  const T = S(B) && S(B.createElement);
  const _ = function (t) {
    return T ? B.createElement(t) : {};
  };
  const z = _;
  const I =
    !i &&
    !u(function () {
      return (
        Object.defineProperty(z('div'), 'a', {
          get() {
            return 7;
          },
        }).a != 7
      );
    });
  const R = i;
  const $ = a;
  const O = c;
  const P = y;
  const L = E;
  const j = w;
  const M = I;
  const N = Object.getOwnPropertyDescriptor;
  r.f = R
    ? N
    : function (t, e) {
        if (((t = P(t)), (e = L(e, !0)), M))
          try {
            return N(t, e);
          } catch (t) {}
        if (j(t, e)) return O(!$.f.call(t, e), t[e]);
      };
  const U = {};
  const q = k;
  const Z = function (t) {
    if (!q(t)) throw TypeError(`${String(t)} is not an object`);
    return t;
  };
  const K = i;
  const J = I;
  const H = Z;
  const W = E;
  const Y = Object.defineProperty;
  U.f = K
    ? Y
    : function (t, e, n) {
        if ((H(t), (e = W(e, !0)), H(n), J))
          try {
            return Y(t, e, n);
          } catch (t) {}
        if ('get' in n || 'set' in n)
          throw TypeError('Accessors not supported');
        return 'value' in n && (t[e] = n.value), t;
      };
  const V = U;
  const X = c;
  const G = i
    ? function (t, e, n) {
        return V.f(t, e, X(1, n));
      }
    : function (t, e, n) {
        return (t[e] = n), t;
      };
  const Q = { exports: {} };
  const tt = n;
  const et = G;
  const nt = function (t, e) {
    try {
      et(tt, t, e);
    } catch (n) {
      tt[t] = e;
    }
    return e;
  };
  const rt = nt;
  const ut = '__core-js_shared__';
  const it = n[ut] || rt(ut, {});
  const at = it;
  const ot = Function.toString;
  typeof at.inspectSource !== 'function' &&
    (at.inspectSource = function (t) {
      return ot.call(t);
    });
  const lt = at.inspectSource;
  const st = lt;
  const ct = n.WeakMap;
  const pt = typeof ct === 'function' && /native code/.test(st(ct));
  const dt = { exports: {} };
  const ft = it;
  (dt.exports = function (t, e) {
    return ft[t] || (ft[t] = void 0 !== e ? e : {});
  })('versions', []).push({
    version: '3.12.1',
    mode: 'global',
    copyright: '© 2021 Denis Pushkarev (zloirock.ru)',
  });
  let ht;
  let gt;
  let Dt;
  let mt = 0;
  const vt = Math.random();
  const yt = function (t) {
    return `Symbol(${String(void 0 === t ? '' : t)})_${(++mt + vt).toString(
      36
    )}`;
  };
  const kt = dt.exports;
  const At = yt;
  const Et = kt('keys');
  const bt = function (t) {
    return Et[t] || (Et[t] = At(t));
  };
  const Ft = {};
  const Ct = pt;
  const xt = k;
  const wt = G;
  const St = w;
  const Bt = it;
  const Tt = bt;
  const _t = Ft;
  const zt = 'Object already initialized';
  const It = n.WeakMap;
  if (Ct || Bt.state) {
    const Rt = Bt.state || (Bt.state = new It());
    const $t = Rt.get;
    const Ot = Rt.has;
    const Pt = Rt.set;
    (ht = function (t, e) {
      if (Ot.call(Rt, t)) throw new TypeError(zt);
      return (e.facade = t), Pt.call(Rt, t, e), e;
    }),
      (gt = function (t) {
        return $t.call(Rt, t) || {};
      }),
      (Dt = function (t) {
        return Ot.call(Rt, t);
      });
  } else {
    const Lt = Tt('state');
    (_t[Lt] = !0),
      (ht = function (t, e) {
        if (St(t, Lt)) throw new TypeError(zt);
        return (e.facade = t), wt(t, Lt, e), e;
      }),
      (gt = function (t) {
        return St(t, Lt) ? t[Lt] : {};
      }),
      (Dt = function (t) {
        return St(t, Lt);
      });
  }
  const jt = {
    set: ht,
    get: gt,
    has: Dt,
    enforce(t) {
      return Dt(t) ? gt(t) : ht(t, {});
    },
    getterFor(t) {
      return function (e) {
        let n;
        if (!xt(e) || (n = gt(e)).type !== t)
          throw TypeError(`Incompatible receiver, ${t} required`);
        return n;
      };
    },
  };
  const Mt = n;
  const Nt = G;
  const Ut = w;
  const qt = nt;
  const Zt = lt;
  const Kt = jt.get;
  const Jt = jt.enforce;
  const Ht = String(String).split('String');
  (Q.exports = function (t, e, n, r) {
    let u;
    const i = !!r && !!r.unsafe;
    let a = !!r && !!r.enumerable;
    const o = !!r && !!r.noTargetGet;
    typeof n === 'function' &&
      (typeof e !== 'string' || Ut(n, 'name') || Nt(n, 'name', e),
      (u = Jt(n)).source ||
        (u.source = Ht.join(typeof e === 'string' ? e : ''))),
      t !== Mt
        ? (i ? !o && t[e] && (a = !0) : delete t[e],
          a ? (t[e] = n) : Nt(t, e, n))
        : a
        ? (t[e] = n)
        : qt(e, n);
  })(Function.prototype, 'toString', function () {
    return (typeof this === 'function' && Kt(this).source) || Zt(this);
  });
  const Wt = n;
  const Yt = n;
  const Vt = function (t) {
    return typeof t === 'function' ? t : void 0;
  };
  const Xt = function (t, e) {
    return arguments.length < 2
      ? Vt(Wt[t]) || Vt(Yt[t])
      : (Wt[t] && Wt[t][e]) || (Yt[t] && Yt[t][e]);
  };
  const Gt = {};
  const Qt = Math.ceil;
  const te = Math.floor;
  const ee = function (t) {
    return isNaN((t = +t)) ? 0 : (t > 0 ? te : Qt)(t);
  };
  const ne = ee;
  const re = Math.min;
  const ue = function (t) {
    return t > 0 ? re(ne(t), 9007199254740991) : 0;
  };
  const ie = ee;
  const ae = Math.max;
  const oe = Math.min;
  const le = function (t, e) {
    const n = ie(t);
    return n < 0 ? ae(n + e, 0) : oe(n, e);
  };
  const se = y;
  const ce = ue;
  const pe = le;
  const de = function (t) {
    return function (e, n, r) {
      let u;
      const i = se(e);
      const a = ce(i.length);
      let o = pe(r, a);
      if (t && n != n) {
        for (; a > o; ) if ((u = i[o++]) != u) return !0;
      } else
        for (; a > o; o++) if ((t || o in i) && i[o] === n) return t || o || 0;
      return !t && -1;
    };
  };
  const fe = { includes: de(!0), indexOf: de(!1) };
  const he = w;
  const ge = y;
  const De = fe.indexOf;
  const me = Ft;
  const ve = function (t, e) {
    let n;
    const r = ge(t);
    let u = 0;
    const i = [];
    for (n in r) !he(me, n) && he(r, n) && i.push(n);
    for (; e.length > u; ) he(r, (n = e[u++])) && (~De(i, n) || i.push(n));
    return i;
  };
  const ye = [
    'constructor',
    'hasOwnProperty',
    'isPrototypeOf',
    'propertyIsEnumerable',
    'toLocaleString',
    'toString',
    'valueOf',
  ];
  const ke = ve;
  const Ae = ye.concat('length', 'prototype');
  Gt.f =
    Object.getOwnPropertyNames ||
    function (t) {
      return ke(t, Ae);
    };
  const Ee = {};
  Ee.f = Object.getOwnPropertySymbols;
  const be = Gt;
  const Fe = Ee;
  const Ce = Z;
  const xe =
    Xt('Reflect', 'ownKeys') ||
    function (t) {
      const e = be.f(Ce(t));
      const n = Fe.f;
      return n ? e.concat(n(t)) : e;
    };
  const we = w;
  const Se = xe;
  const Be = r;
  const Te = U;
  const _e = u;
  const ze = /#|\.prototype\./;
  const Ie = function (t, e) {
    const n = $e[Re(t)];
    return n == Pe || (n != Oe && (typeof e === 'function' ? _e(e) : !!e));
  };
  var Re = (Ie.normalize = function (t) {
    return String(t).replace(ze, '.').toLowerCase();
  });
  var $e = (Ie.data = {});
  var Oe = (Ie.NATIVE = 'N');
  var Pe = (Ie.POLYFILL = 'P');
  const Le = Ie;
  const je = n;
  const Me = r.f;
  const Ne = G;
  const Ue = Q.exports;
  const qe = nt;
  const Ze = function (t, e) {
    for (let n = Se(e), r = Te.f, u = Be.f, i = 0; i < n.length; i++) {
      const a = n[i];
      we(t, a) || r(t, a, u(e, a));
    }
  };
  const Ke = Le;
  const Je = function (t, e) {
    let n;
    let r;
    let u;
    let i;
    let a;
    const o = t.target;
    const l = t.global;
    const s = t.stat;
    if ((n = l ? je : s ? je[o] || qe(o, {}) : (je[o] || {}).prototype))
      for (r in e) {
        if (
          ((i = e[r]),
          (u = t.noTargetGet ? (a = Me(n, r)) && a.value : n[r]),
          !Ke(l ? r : o + (s ? '.' : '#') + r, t.forced) && void 0 !== u)
        ) {
          if (typeof i === typeof u) continue;
          Ze(i, u);
        }
        (t.sham || (u && u.sham)) && Ne(i, 'sham', !0), Ue(n, r, i, t);
      }
  };
  const He = Z;
  const We = function () {
    const t = He(this);
    let e = '';
    return (
      t.global && (e += 'g'),
      t.ignoreCase && (e += 'i'),
      t.multiline && (e += 'm'),
      t.dotAll && (e += 's'),
      t.unicode && (e += 'u'),
      t.sticky && (e += 'y'),
      e
    );
  };
  const Ye = {};
  const Ve = u;
  function Xe(t, e) {
    return RegExp(t, e);
  }
  (Ye.UNSUPPORTED_Y = Ve(function () {
    const t = Xe('a', 'y');
    return (t.lastIndex = 2), t.exec('abcd') != null;
  })),
    (Ye.BROKEN_CARET = Ve(function () {
      const t = Xe('^r', 'gy');
      return (t.lastIndex = 2), t.exec('str') != null;
    }));
  const Ge = We;
  const Qe = Ye;
  const tn = dt.exports;
  const en = RegExp.prototype.exec;
  const nn = tn('native-string-replace', String.prototype.replace);
  let rn = en;
  const un = (function () {
    const t = /a/;
    const e = /b*/g;
    return (
      en.call(t, 'a'), en.call(e, 'a'), t.lastIndex !== 0 || e.lastIndex !== 0
    );
  })();
  const an = Qe.UNSUPPORTED_Y || Qe.BROKEN_CARET;
  const on = void 0 !== /()??/.exec('')[1];
  (un || on || an) &&
    (rn = function (t) {
      let e;
      let n;
      let r;
      let u;
      const i = this;
      const a = an && i.sticky;
      let o = Ge.call(i);
      let l = i.source;
      let s = 0;
      let c = t;
      return (
        a &&
          ((o = o.replace('y', '')).indexOf('g') === -1 && (o += 'g'),
          (c = String(t).slice(i.lastIndex)),
          i.lastIndex > 0 &&
            (!i.multiline || (i.multiline && t[i.lastIndex - 1] !== '\n')) &&
            ((l = `(?: ${l})`), (c = ` ${c}`), s++),
          (n = new RegExp(`^(?:${l})`, o))),
        on && (n = new RegExp(`^${l}$(?!\\s)`, o)),
        un && (e = i.lastIndex),
        (r = en.call(a ? n : i, c)),
        a
          ? r
            ? ((r.input = r.input.slice(s)),
              (r[0] = r[0].slice(s)),
              (r.index = i.lastIndex),
              (i.lastIndex += r[0].length))
            : (i.lastIndex = 0)
          : un && r && (i.lastIndex = i.global ? r.index + r[0].length : e),
        on &&
          r &&
          r.length > 1 &&
          nn.call(r[0], n, function () {
            for (u = 1; u < arguments.length - 2; u++)
              void 0 === arguments[u] && (r[u] = void 0);
          }),
        r
      );
    });
  const ln = rn;
  Je({ target: 'RegExp', proto: !0, forced: /./.exec !== ln }, { exec: ln });
  let sn;
  let cn;
  const pn = Xt('navigator', 'userAgent') || '';
  const dn = n.process;
  const fn = dn && dn.versions;
  const hn = fn && fn.v8;
  hn
    ? (cn = (sn = hn.split('.'))[0] < 4 ? 1 : sn[0] + sn[1])
    : pn &&
      (!(sn = pn.match(/Edge\/(\d+)/)) || sn[1] >= 74) &&
      (sn = pn.match(/Chrome\/(\d+)/)) &&
      (cn = sn[1]);
  const gn = cn && +cn;
  const Dn = gn;
  const mn = u;
  const vn =
    !!Object.getOwnPropertySymbols &&
    !mn(function () {
      return !String(Symbol()) || (!Symbol.sham && Dn && Dn < 41);
    });
  const yn = vn && !Symbol.sham && typeof Symbol.iterator === 'symbol';
  const kn = n;
  const An = dt.exports;
  const En = w;
  const bn = yt;
  const Fn = vn;
  const Cn = yn;
  const xn = An('wks');
  const wn = kn.Symbol;
  const Sn = Cn ? wn : (wn && wn.withoutSetter) || bn;
  const Bn = function (t) {
    return (
      (En(xn, t) && (Fn || typeof xn[t] === 'string')) ||
        (Fn && En(wn, t) ? (xn[t] = wn[t]) : (xn[t] = Sn(`Symbol.${t}`))),
      xn[t]
    );
  };
  const Tn = Q.exports;
  const _n = ln;
  const zn = u;
  const In = Bn;
  const Rn = G;
  const $n = In('species');
  const On = RegExp.prototype;
  const Pn = !zn(function () {
    const t = /./;
    return (
      (t.exec = function () {
        const t = [];
        return (t.groups = { a: '7' }), t;
      }),
      ''.replace(t, '$<a>') !== '7'
    );
  });
  const Ln = 'a'.replace(/./, '$0') === '$0';
  const jn = In('replace');
  const Mn = !!/./[jn] && /./[jn]('a', '$0') === '';
  const Nn = !zn(function () {
    const t = /(?:)/;
    const e = t.exec;
    t.exec = function () {
      return e.apply(this, arguments);
    };
    const n = 'ab'.split(t);
    return n.length !== 2 || n[0] !== 'a' || n[1] !== 'b';
  });
  const Un = function (t, e, n, r) {
    const u = In(t);
    const i = !zn(function () {
      const e = {};
      return (
        (e[u] = function () {
          return 7;
        }),
        ''[t](e) != 7
      );
    });
    const a =
      i &&
      !zn(function () {
        let e = !1;
        let n = /a/;
        return (
          t === 'split' &&
            (((n = {}).constructor = {}),
            (n.constructor[$n] = function () {
              return n;
            }),
            (n.flags = ''),
            (n[u] = /./[u])),
          (n.exec = function () {
            return (e = !0), null;
          }),
          n[u](''),
          !e
        );
      });
    if (
      !i ||
      !a ||
      (t === 'replace' && (!Pn || !Ln || Mn)) ||
      (t === 'split' && !Nn)
    ) {
      const o = /./[u];
      const l = n(
        u,
        ''[t],
        function (t, e, n, r, u) {
          const a = e.exec;
          return a === _n || a === On.exec
            ? i && !u
              ? { done: !0, value: o.call(e, n, r) }
              : { done: !0, value: t.call(n, e, r) }
            : { done: !1 };
        },
        {
          REPLACE_KEEPS_$0: Ln,
          REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Mn,
        }
      );
      const s = l[0];
      const c = l[1];
      Tn(String.prototype, t, s),
        Tn(
          On,
          u,
          e == 2
            ? function (t, e) {
                return c.call(t, this, e);
              }
            : function (t) {
                return c.call(t, this);
              }
        );
    }
    r && Rn(On[u], 'sham', !0);
  };
  const qn =
    Object.is ||
    function (t, e) {
      return t === e ? t !== 0 || 1 / t == 1 / e : t != t && e != e;
    };
  const Zn = d;
  const Kn = ln;
  const Jn = function (t, e) {
    const n = t.exec;
    if (typeof n === 'function') {
      const r = n.call(t, e);
      if (typeof r !== 'object')
        throw TypeError(
          'RegExp exec method returned something other than an Object or null'
        );
      return r;
    }
    if (Zn(t) !== 'RegExp')
      throw TypeError('RegExp#exec called on incompatible receiver');
    return Kn.call(t, e);
  };
  const Hn = Z;
  const Wn = D;
  const Yn = qn;
  const Vn = Jn;
  Un('search', 1, function (t, e, n) {
    return [
      function (e) {
        const n = Wn(this);
        const r = e == null ? void 0 : e[t];
        return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
      },
      function (t) {
        const r = n(e, t, this);
        if (r.done) return r.value;
        const u = Hn(t);
        const i = String(this);
        const a = u.lastIndex;
        Yn(a, 0) || (u.lastIndex = 0);
        const o = Vn(u, i);
        return (
          Yn(u.lastIndex, a) || (u.lastIndex = a), o === null ? -1 : o.index
        );
      },
    ];
  });
  const Xn = ee;
  const Gn = D;
  const Qn = function (t) {
    return function (e, n) {
      let r;
      let u;
      const i = String(Gn(e));
      const a = Xn(n);
      const o = i.length;
      return a < 0 || a >= o
        ? t
          ? ''
          : void 0
        : (r = i.charCodeAt(a)) < 55296 ||
          r > 56319 ||
          a + 1 === o ||
          (u = i.charCodeAt(a + 1)) < 56320 ||
          u > 57343
        ? t
          ? i.charAt(a)
          : r
        : t
        ? i.slice(a, a + 2)
        : u - 56320 + ((r - 55296) << 10) + 65536;
    };
  };
  const tr = { codeAt: Qn(!1), charAt: Qn(!0) }.charAt;
  const er = function (t, e, n) {
    return e + (n ? tr(t, e).length : 1);
  };
  const nr = Z;
  const rr = ue;
  const ur = D;
  const ir = er;
  const ar = Jn;
  function or(t, e) {
    if (!(t instanceof e))
      throw new TypeError('Cannot call a class as a function');
  }
  function lr(t, e) {
    for (let n = 0; n < e.length; n++) {
      const r = e[n];
      (r.enumerable = r.enumerable || !1),
        (r.configurable = !0),
        'value' in r && (r.writable = !0),
        Object.defineProperty(t, r.key, r);
    }
  }
  function sr(t, e, n) {
    return e && lr(t.prototype, e), n && lr(t, n), t;
  }
  function cr(t, e) {
    return (
      (function (t) {
        if (Array.isArray(t)) return t;
      })(t) ||
      (function (t, e) {
        let n =
          t &&
          ((typeof Symbol !== 'undefined' && t[Symbol.iterator]) ||
            t['@@iterator']);
        if (n == null) return;
        let r;
        let u;
        const i = [];
        let a = !0;
        let o = !1;
        try {
          for (
            n = n.call(t);
            !(a = (r = n.next()).done) &&
            (i.push(r.value), !e || i.length !== e);
            a = !0
          );
        } catch (t) {
          (o = !0), (u = t);
        } finally {
          try {
            a || n.return == null || n.return();
          } finally {
            if (o) throw u;
          }
        }
        return i;
      })(t, e) ||
      pr(t, e) ||
      (function () {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        );
      })()
    );
  }
  function pr(t, e) {
    if (t) {
      if (typeof t === 'string') return dr(t, e);
      let n = Object.prototype.toString.call(t).slice(8, -1);
      return (
        n === 'Object' && t.constructor && (n = t.constructor.name),
        n === 'Map' || n === 'Set'
          ? Array.from(t)
          : n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? dr(t, e)
          : void 0
      );
    }
  }
  function dr(t, e) {
    (e == null || e > t.length) && (e = t.length);
    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
    return r;
  }
  function fr(t, e) {
    let n =
      (typeof Symbol !== 'undefined' && t[Symbol.iterator]) || t['@@iterator'];
    if (!n) {
      if (
        Array.isArray(t) ||
        (n = pr(t)) ||
        (e && t && typeof t.length === 'number')
      ) {
        n && (t = n);
        let r = 0;
        const u = function () {};
        return {
          s: u,
          n() {
            return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] };
          },
          e(t) {
            throw t;
          },
          f: u,
        };
      }
      throw new TypeError(
        'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      );
    }
    let i;
    let a = !0;
    let o = !1;
    return {
      s() {
        n = n.call(t);
      },
      n() {
        const t = n.next();
        return (a = t.done), t;
      },
      e(t) {
        (o = !0), (i = t);
      },
      f() {
        try {
          a || n.return == null || n.return();
        } finally {
          if (o) throw i;
        }
      },
    };
  }
  Un('match', 1, function (t, e, n) {
    return [
      function (e) {
        const n = ur(this);
        const r = e == null ? void 0 : e[t];
        return void 0 !== r ? r.call(e, n) : new RegExp(e)[t](String(n));
      },
      function (t) {
        const r = n(e, t, this);
        if (r.done) return r.value;
        const u = nr(t);
        const i = String(this);
        if (!u.global) return ar(u, i);
        const a = u.unicode;
        u.lastIndex = 0;
        for (var o, l = [], s = 0; (o = ar(u, i)) !== null; ) {
          const c = String(o[0]);
          (l[s] = c),
            c === '' && (u.lastIndex = ir(i, rr(u.lastIndex), a)),
            s++;
        }
        return s === 0 ? null : l;
      },
    ];
  });
  const hr = {};
  hr[Bn('toStringTag')] = 'z';
  const gr = String(hr) === '[object z]';
  const Dr = gr;
  const mr = d;
  const vr = Bn('toStringTag');
  const yr =
    mr(
      (function () {
        return arguments;
      })()
    ) == 'Arguments';
  const kr = Dr
    ? mr
    : function (t) {
        let e;
        let n;
        let r;
        return void 0 === t
          ? 'Undefined'
          : t === null
          ? 'Null'
          : typeof (n = (function (t, e) {
              try {
                return t[e];
              } catch (t) {}
            })((e = Object(t)), vr)) === 'string'
          ? n
          : yr
          ? mr(e)
          : (r = mr(e)) == 'Object' && typeof e.callee === 'function'
          ? 'Arguments'
          : r;
      };
  const Ar = gr
    ? {}.toString
    : function () {
        return `[object ${kr(this)}]`;
      };
  const Er = gr;
  const br = Q.exports;
  const Fr = Ar;
  Er || br(Object.prototype, 'toString', Fr, { unsafe: !0 });
  const Cr = F;
  const xr = Math.floor;
  const wr = ''.replace;
  const Sr = /\$([$&'`]|\d{1,2}|<[^>]*>)/g;
  const Br = /\$([$&'`]|\d{1,2})/g;
  const Tr = Un;
  const _r = Z;
  const zr = ue;
  const Ir = ee;
  const Rr = D;
  const $r = er;
  const Or = function (t, e, n, r, u, i) {
    const a = n + t.length;
    const o = r.length;
    let l = Br;
    return (
      void 0 !== u && ((u = Cr(u)), (l = Sr)),
      wr.call(i, l, function (i, l) {
        let s;
        switch (l.charAt(0)) {
          case '$':
            return '$';
          case '&':
            return t;
          case '`':
            return e.slice(0, n);
          case "'":
            return e.slice(a);
          case '<':
            s = u[l.slice(1, -1)];
            break;
          default:
            var c = +l;
            if (c === 0) return i;
            if (c > o) {
              const p = xr(c / 10);
              return p === 0
                ? i
                : p <= o
                ? void 0 === r[p - 1]
                  ? l.charAt(1)
                  : r[p - 1] + l.charAt(1)
                : i;
            }
            s = r[c - 1];
        }
        return void 0 === s ? '' : s;
      })
    );
  };
  const Pr = Jn;
  const Lr = Math.max;
  const jr = Math.min;
  Tr('replace', 2, function (t, e, n, r) {
    const u = r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE;
    const i = r.REPLACE_KEEPS_$0;
    const a = u ? '$' : '$0';
    return [
      function (n, r) {
        const u = Rr(this);
        const i = n == null ? void 0 : n[t];
        return void 0 !== i ? i.call(n, u, r) : e.call(String(u), n, r);
      },
      function (t, r) {
        if ((!u && i) || (typeof r === 'string' && r.indexOf(a) === -1)) {
          const o = n(e, t, this, r);
          if (o.done) return o.value;
        }
        const l = _r(t);
        const s = String(this);
        const c = typeof r === 'function';
        c || (r = String(r));
        const p = l.global;
        if (p) {
          var d = l.unicode;
          l.lastIndex = 0;
        }
        for (var f = []; ; ) {
          var h = Pr(l, s);
          if (h === null) break;
          if ((f.push(h), !p)) break;
          String(h[0]) === '' && (l.lastIndex = $r(s, zr(l.lastIndex), d));
        }
        for (var g, D = '', m = 0, v = 0; v < f.length; v++) {
          h = f[v];
          for (
            var y = String(h[0]),
              k = Lr(jr(Ir(h.index), s.length), 0),
              A = [],
              E = 1;
            E < h.length;
            E++
          )
            A.push(void 0 === (g = h[E]) ? g : String(g));
          const b = h.groups;
          if (c) {
            const F = [y].concat(A, k, s);
            void 0 !== b && F.push(b);
            var C = String(r.apply(void 0, F));
          } else C = Or(y, s, k, A, b, r);
          k >= m && ((D += s.slice(m, k) + C), (m = k + y.length));
        }
        return D + s.slice(m);
      },
    ];
  });
  const Mr = Q.exports;
  const Nr = Z;
  const Ur = u;
  const qr = We;
  const Zr = 'toString';
  const Kr = RegExp.prototype;
  const Jr = Kr.toString;
  const Hr = Ur(function () {
    return Jr.call({ source: 'a', flags: 'b' }) != '/a/b';
  });
  const Wr = Jr.name != Zr;
  (Hr || Wr) &&
    Mr(
      RegExp.prototype,
      Zr,
      function () {
        const t = Nr(this);
        const e = String(t.source);
        const n = t.flags;
        return `/${e}/${String(
          void 0 === n && t instanceof RegExp && !('flags' in Kr)
            ? qr.call(t)
            : n
        )}`;
      },
      { unsafe: !0 }
    );
  const Yr = ve;
  const Vr = ye;
  const Xr =
    Object.keys ||
    function (t) {
      return Yr(t, Vr);
    };
  const Gr = F;
  const Qr = Xr;
  Je(
    {
      target: 'Object',
      stat: !0,
      forced: u(function () {
        Qr(1);
      }),
    },
    {
      keys(t) {
        return Qr(Gr(t));
      },
    }
  );
  let tu;
  const eu = U;
  const nu = Z;
  const ru = Xr;
  const uu = i
    ? Object.defineProperties
    : function (t, e) {
        nu(t);
        for (var n, r = ru(e), u = r.length, i = 0; u > i; )
          eu.f(t, (n = r[i++]), e[n]);
        return t;
      };
  const iu = Xt('document', 'documentElement');
  const au = Z;
  const ou = uu;
  const lu = ye;
  const su = Ft;
  const cu = iu;
  const pu = _;
  const du = bt('IE_PROTO');
  const fu = function () {};
  const hu = function (t) {
    return `<script>${t}</` + `script>`;
  };
  var gu = function () {
    try {
      tu = document.domain && new ActiveXObject('htmlfile');
    } catch (t) {}
    let t;
    let e;
    gu = tu
      ? (function (t) {
          t.write(hu('')), t.close();
          const e = t.parentWindow.Object;
          return (t = null), e;
        })(tu)
      : (((e = pu('iframe')).style.display = 'none'),
        cu.appendChild(e),
        (e.src = String('javascript:')),
        (t = e.contentWindow.document).open(),
        t.write(hu('document.F=Object')),
        t.close(),
        t.F);
    for (let n = lu.length; n--; ) delete gu.prototype[lu[n]];
    return gu();
  };
  su[du] = !0;
  const Du =
    Object.create ||
    function (t, e) {
      let n;
      return (
        t !== null
          ? ((fu.prototype = au(t)),
            (n = new fu()),
            (fu.prototype = null),
            (n[du] = t))
          : (n = gu()),
        void 0 === e ? n : ou(n, e)
      );
    };
  const mu = U;
  const vu = Bn('unscopables');
  const yu = Array.prototype;
  yu[vu] == null && mu.f(yu, vu, { configurable: !0, value: Du(null) });
  const ku = fe.includes;
  const Au = function (t) {
    yu[vu][t] = !0;
  };
  Je(
    { target: 'Array', proto: !0 },
    {
      includes(t) {
        return ku(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  ),
    Au('includes');
  const Eu = k;
  const bu = d;
  const Fu = Bn('match');
  const Cu = function (t) {
    let e;
    return Eu(t) && (void 0 !== (e = t[Fu]) ? !!e : bu(t) == 'RegExp');
  };
  const xu = Cu;
  const wu = Bn('match');
  const Su = function (t) {
    if (xu(t)) throw TypeError("The method doesn't accept regular expressions");
    return t;
  };
  const Bu = D;
  Je(
    {
      target: 'String',
      proto: !0,
      forced: !(function (t) {
        const e = /./;
        try {
          '/./'[t](e);
        } catch (n) {
          try {
            return (e[wu] = !1), '/./'[t](e);
          } catch (t) {}
        }
        return !1;
      })('includes'),
    },
    {
      includes(t) {
        return !!~String(Bu(this)).indexOf(
          Su(t),
          arguments.length > 1 ? arguments[1] : void 0
        );
      },
    }
  );
  const Tu = d;
  const _u =
    Array.isArray ||
    function (t) {
      return Tu(t) == 'Array';
    };
  const zu = E;
  const Iu = U;
  const Ru = c;
  const $u = function (t, e, n) {
    const r = zu(e);
    r in t ? Iu.f(t, r, Ru(0, n)) : (t[r] = n);
  };
  const Ou = u;
  const Pu = gn;
  const Lu = Bn('species');
  const ju = function (t) {
    return (
      Pu >= 51 ||
      !Ou(function () {
        const e = [];
        return (
          ((e.constructor = {})[Lu] = function () {
            return { foo: 1 };
          }),
          e[t](Boolean).foo !== 1
        );
      })
    );
  };
  const Mu = Je;
  const Nu = k;
  const Uu = _u;
  const qu = le;
  const Zu = ue;
  const Ku = y;
  const Ju = $u;
  const Hu = Bn;
  const Wu = ju('slice');
  const Yu = Hu('species');
  const Vu = [].slice;
  const Xu = Math.max;
  Mu(
    { target: 'Array', proto: !0, forced: !Wu },
    {
      slice(t, e) {
        let n;
        let r;
        let u;
        const i = Ku(this);
        const a = Zu(i.length);
        let o = qu(t, a);
        const l = qu(void 0 === e ? a : e, a);
        if (
          Uu(i) &&
          (typeof (n = i.constructor) !== 'function' ||
          (n !== Array && !Uu(n.prototype))
            ? Nu(n) && (n = n[Yu]) === null && (n = void 0)
            : (n = void 0),
          n === Array || void 0 === n)
        )
          return Vu.call(i, o, l);
        for (
          r = new (void 0 === n ? Array : n)(Xu(l - o, 0)), u = 0;
          o < l;
          o++, u++
        )
          o in i && Ju(r, u, i[o]);
        return (r.length = u), r;
      },
    }
  );
  const Gu = D;
  const Qu = /"/g;
  const ti = u;
  const ei = function (t, e, n, r) {
    const u = String(Gu(t));
    let i = `<${e}`;
    return (
      n !== '' && (i += ` ${n}="${String(r).replace(Qu, '&quot;')}"`),
      `${i}>${u}</${e}>`
    );
  };
  Je(
    {
      target: 'String',
      proto: !0,
      forced: (function (t) {
        return ti(function () {
          const e = ''[t]('"');
          return e !== e.toLowerCase() || e.split('"').length > 3;
        });
      })('link'),
    },
    {
      link(t) {
        return ei(this, 'a', 'href', t);
      },
    }
  );
  const ni = u;
  const ri = Je;
  const ui = y;
  const ii = [].join;
  const ai = g != Object;
  const oi = (function (t, e) {
    const n = [][t];
    return (
      !!n &&
      ni(function () {
        n.call(
          null,
          e ||
            function () {
              throw 1;
            },
          1
        );
      })
    );
  })('join', ',');
  ri(
    { target: 'Array', proto: !0, forced: ai || !oi },
    {
      join(t) {
        return ii.call(ui(this), void 0 === t ? ',' : t);
      },
    }
  );
  const li = function (t) {
    if (typeof t !== 'function')
      throw TypeError(`${String(t)} is not a function`);
    return t;
  };
  const si = li;
  const ci = k;
  const pi = _u;
  const di = Bn('species');
  const fi = function (t, e) {
    let n;
    return (
      pi(t) &&
        (typeof (n = t.constructor) !== 'function' ||
        (n !== Array && !pi(n.prototype))
          ? ci(n) && (n = n[di]) === null && (n = void 0)
          : (n = void 0)),
      new (void 0 === n ? Array : n)(e === 0 ? 0 : e)
    );
  };
  const hi = function (t, e, n) {
    if ((si(t), void 0 === e)) return t;
    switch (n) {
      case 0:
        return function () {
          return t.call(e);
        };
      case 1:
        return function (n) {
          return t.call(e, n);
        };
      case 2:
        return function (n, r) {
          return t.call(e, n, r);
        };
      case 3:
        return function (n, r, u) {
          return t.call(e, n, r, u);
        };
    }
    return function () {
      return t.apply(e, arguments);
    };
  };
  const gi = g;
  const Di = F;
  const mi = ue;
  const vi = fi;
  const yi = [].push;
  const ki = function (t) {
    const e = t == 1;
    const n = t == 2;
    const r = t == 3;
    const u = t == 4;
    const i = t == 6;
    const a = t == 7;
    const o = t == 5 || i;
    return function (l, s, c, p) {
      for (
        var d,
          f,
          h = Di(l),
          g = gi(h),
          D = hi(s, c, 3),
          m = mi(g.length),
          v = 0,
          y = p || vi,
          k = e ? y(l, m) : n || a ? y(l, 0) : void 0;
        m > v;
        v++
      )
        if ((o || v in g) && ((f = D((d = g[v]), v, h)), t))
          if (e) k[v] = f;
          else if (f)
            switch (t) {
              case 3:
                return !0;
              case 5:
                return d;
              case 6:
                return v;
              case 2:
                yi.call(k, d);
            }
          else
            switch (t) {
              case 4:
                return !1;
              case 7:
                yi.call(k, d);
            }
      return i ? -1 : r || u ? u : k;
    };
  };
  const Ai = {
    forEach: ki(0),
    map: ki(1),
    filter: ki(2),
    some: ki(3),
    every: ki(4),
    find: ki(5),
    findIndex: ki(6),
    filterOut: ki(7),
  }.map;
  Je(
    { target: 'Array', proto: !0, forced: !ju('map') },
    {
      map(t) {
        return Ai(this, t, arguments.length > 1 ? arguments[1] : void 0);
      },
    }
  );
  const Ei = Z;
  const bi = li;
  const Fi = Bn('species');
  const Ci = Un;
  const xi = Cu;
  const wi = Z;
  const Si = D;
  const Bi = function (t, e) {
    let n;
    const r = Ei(t).constructor;
    return void 0 === r || (n = Ei(r)[Fi]) == null ? e : bi(n);
  };
  const Ti = er;
  const _i = ue;
  const zi = Jn;
  const Ii = ln;
  const Ri = Ye.UNSUPPORTED_Y;
  const $i = [].push;
  const Oi = Math.min;
  const Pi = 4294967295;
  Ci(
    'split',
    2,
    function (t, e, n) {
      let r;
      return (
        (r =
          'abbc'.split(/(b)*/)[1] == 'c' ||
          'test'.split(/(?:)/, -1).length != 4 ||
          'ab'.split(/(?:ab)*/).length != 2 ||
          '.'.split(/(.?)(.?)/).length != 4 ||
          '.'.split(/()()/).length > 1 ||
          ''.split(/.?/).length
            ? function (t, n) {
                const r = String(Si(this));
                const u = void 0 === n ? Pi : n >>> 0;
                if (u === 0) return [];
                if (void 0 === t) return [r];
                if (!xi(t)) return e.call(r, t, u);
                for (
                  var i,
                    a,
                    o,
                    l = [],
                    s =
                      (t.ignoreCase ? 'i' : '') +
                      (t.multiline ? 'm' : '') +
                      (t.unicode ? 'u' : '') +
                      (t.sticky ? 'y' : ''),
                    c = 0,
                    p = new RegExp(t.source, `${s}g`);
                  (i = Ii.call(p, r)) &&
                  !(
                    (a = p.lastIndex) > c &&
                    (l.push(r.slice(c, i.index)),
                    i.length > 1 &&
                      i.index < r.length &&
                      $i.apply(l, i.slice(1)),
                    (o = i[0].length),
                    (c = a),
                    l.length >= u)
                  );

                )
                  p.lastIndex === i.index && p.lastIndex++;
                return (
                  c === r.length
                    ? (!o && p.test('')) || l.push('')
                    : l.push(r.slice(c)),
                  l.length > u ? l.slice(0, u) : l
                );
              }
            : '0'.split(void 0, 0).length
            ? function (t, n) {
                return void 0 === t && n === 0 ? [] : e.call(this, t, n);
              }
            : e),
        [
          function (e, n) {
            const u = Si(this);
            const i = e == null ? void 0 : e[t];
            return void 0 !== i ? i.call(e, u, n) : r.call(String(u), e, n);
          },
          function (t, u) {
            const i = n(r, t, this, u, r !== e);
            if (i.done) return i.value;
            const a = wi(t);
            const o = String(this);
            const l = Bi(a, RegExp);
            const s = a.unicode;
            const c =
              (a.ignoreCase ? 'i' : '') +
              (a.multiline ? 'm' : '') +
              (a.unicode ? 'u' : '') +
              (Ri ? 'g' : 'y');
            const p = new l(Ri ? `^(?:${a.source})` : a, c);
            const d = void 0 === u ? Pi : u >>> 0;
            if (d === 0) return [];
            if (o.length === 0) return zi(p, o) === null ? [o] : [];
            for (var f = 0, h = 0, g = []; h < o.length; ) {
              p.lastIndex = Ri ? 0 : h;
              var D;
              const m = zi(p, Ri ? o.slice(h) : o);
              if (
                m === null ||
                (D = Oi(_i(p.lastIndex + (Ri ? h : 0)), o.length)) === f
              )
                h = Ti(o, h, s);
              else {
                if ((g.push(o.slice(f, h)), g.length === d)) return g;
                for (let v = 1; v <= m.length - 1; v++)
                  if ((g.push(m[v]), g.length === d)) return g;
                h = f = D;
              }
            }
            return g.push(o.slice(f)), g;
          },
        ]
      );
    },
    Ri
  );
  const Li = '\t\n\v\f\r                　\u2028\u2029\ufeff';
  const ji = D;
  const Mi = '[\t\n\v\f\r                　\u2028\u2029\ufeff]';
  const Ni = RegExp(`^${Mi}${Mi}*`);
  const Ui = RegExp(`${Mi + Mi}*$`);
  const qi = function (t) {
    return function (e) {
      let n = String(ji(e));
      return (
        1 & t && (n = n.replace(Ni, '')), 2 & t && (n = n.replace(Ui, '')), n
      );
    };
  };
  const Zi = { start: qi(1), end: qi(2), trim: qi(3) };
  const Ki = u;
  const Ji = Li;
  const Hi = Zi.trim;
  Je(
    {
      target: 'String',
      proto: !0,
      forced: (function (t) {
        return Ki(function () {
          return !!Ji[t]() || '​᠎'[t]() != '​᠎' || Ji[t].name !== t;
        });
      })('trim'),
    },
    {
      trim() {
        return Hi(this);
      },
    }
  );
  const Wi = k;
  const Yi = Z;
  const Vi = function (t) {
    if (!Wi(t) && t !== null)
      throw TypeError(`Can't set ${String(t)} as a prototype`);
    return t;
  };
  const Xi =
    Object.setPrototypeOf ||
    ('__proto__' in {}
      ? (function () {
          let t;
          let e = !1;
          const n = {};
          try {
            (t = Object.getOwnPropertyDescriptor(
              Object.prototype,
              '__proto__'
            ).set).call(n, []),
              (e = n instanceof Array);
          } catch (t) {}
          return function (n, r) {
            return Yi(n), Vi(r), e ? t.call(n, r) : (n.__proto__ = r), n;
          };
        })()
      : void 0);
  const Gi = k;
  const Qi = Xi;
  const ta = Xt;
  const ea = U;
  const na = i;
  const ra = Bn('species');
  const ua = i;
  const ia = n;
  const aa = Le;
  const oa = function (t, e, n) {
    let r;
    let u;
    return (
      Qi &&
        typeof (r = e.constructor) === 'function' &&
        r !== n &&
        Gi((u = r.prototype)) &&
        u !== n.prototype &&
        Qi(t, u),
      t
    );
  };
  const la = U.f;
  const sa = Gt.f;
  const ca = Cu;
  const pa = We;
  const da = Ye;
  const fa = Q.exports;
  const ha = u;
  const ga = jt.enforce;
  const Da = function (t) {
    const e = ta(t);
    const n = ea.f;
    na &&
      e &&
      !e[ra] &&
      n(e, ra, {
        configurable: !0,
        get() {
          return this;
        },
      });
  };
  const ma = Bn('match');
  const va = ia.RegExp;
  const ya = va.prototype;
  const ka = /a/g;
  const Aa = /a/g;
  const Ea = new va(ka) !== ka;
  const ba = da.UNSUPPORTED_Y;
  if (
    ua &&
    aa(
      'RegExp',
      !Ea ||
        ba ||
        ha(function () {
          return (
            (Aa[ma] = !1), va(ka) != ka || va(Aa) == Aa || va(ka, 'i') != '/a/i'
          );
        })
    )
  ) {
    for (
      var Fa = function (t, e) {
          let n;
          const r = this instanceof Fa;
          const u = ca(t);
          const i = void 0 === e;
          if (!r && u && t.constructor === Fa && i) return t;
          Ea
            ? u && !i && (t = t.source)
            : t instanceof Fa && (i && (e = pa.call(t)), (t = t.source)),
            ba && (n = !!e && e.indexOf('y') > -1) && (e = e.replace(/y/g, ''));
          const a = oa(Ea ? new va(t, e) : va(t, e), r ? this : ya, Fa);
          ba && n && (ga(a).sticky = !0);
          return a;
        },
        Ca = function (t) {
          (t in Fa) ||
            la(Fa, t, {
              configurable: !0,
              get() {
                return va[t];
              },
              set(e) {
                va[t] = e;
              },
            });
        },
        xa = sa(va),
        wa = 0;
      xa.length > wa;

    )
      Ca(xa[wa++]);
    (ya.constructor = Fa), (Fa.prototype = ya), fa(ia, 'RegExp', Fa);
  }
  Da('RegExp');
  const Sa = Je;
  const Ba = le;
  const Ta = ee;
  const _a = ue;
  const za = F;
  const Ia = fi;
  const Ra = $u;
  const $a = ju('splice');
  const Oa = Math.max;
  const Pa = Math.min;
  const La = 9007199254740991;
  const ja = 'Maximum allowed length exceeded';
  Sa(
    { target: 'Array', proto: !0, forced: !$a },
    {
      splice(t, e) {
        let n;
        let r;
        let u;
        let i;
        let a;
        let o;
        const l = za(this);
        const s = _a(l.length);
        const c = Ba(t, s);
        const p = arguments.length;
        if (
          (p === 0
            ? (n = r = 0)
            : p === 1
            ? ((n = 0), (r = s - c))
            : ((n = p - 2), (r = Pa(Oa(Ta(e), 0), s - c))),
          s + n - r > La)
        )
          throw TypeError(ja);
        for (u = Ia(l, r), i = 0; i < r; i++)
          (a = c + i) in l && Ra(u, i, l[a]);
        if (((u.length = r), n < r)) {
          for (i = c; i < s - r; i++)
            (o = i + n), (a = i + r) in l ? (l[o] = l[a]) : delete l[o];
          for (i = s; i > s - r + n; i--) delete l[i - 1];
        } else if (n > r)
          for (i = s - r; i > c; i--)
            (o = i + n - 1), (a = i + r - 1) in l ? (l[o] = l[a]) : delete l[o];
        for (i = 0; i < n; i++) l[i + c] = arguments[i + 2];
        return (l.length = s - r + n), u;
      },
    }
  );
  const Ma = { exports: {} };
  function Na() {
    return {
      baseUrl: null,
      breaks: !1,
      gfm: !0,
      headerIds: !0,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    };
  }
  Ma.exports = {
    defaults: {
      baseUrl: null,
      breaks: !1,
      gfm: !0,
      headerIds: !0,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: !0,
      pedantic: !1,
      renderer: null,
      sanitize: !1,
      sanitizer: null,
      silent: !1,
      smartLists: !1,
      smartypants: !1,
      tokenizer: null,
      walkTokens: null,
      xhtml: !1,
    },
    getDefaults: Na,
    changeDefaults(t) {
      Ma.exports.defaults = t;
    },
  };
  const Ua = /[&<>"']/;
  const qa = /[&<>"']/g;
  const Za = /[<>"']|&(?!#?\w+;)/;
  const Ka = /[<>"']|&(?!#?\w+;)/g;
  const Ja = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  };
  const Ha = function (t) {
    return Ja[t];
  };
  const Wa = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;
  function Ya(t) {
    return t.replace(Wa, function (t, e) {
      return (e = e.toLowerCase()) === 'colon'
        ? ':'
        : e.charAt(0) === '#'
        ? e.charAt(1) === 'x'
          ? String.fromCharCode(parseInt(e.substring(2), 16))
          : String.fromCharCode(+e.substring(1))
        : '';
    });
  }
  const Va = /(^|[^\[])\^/g;
  const Xa = /[^\w:]/g;
  const Ga = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;
  const Qa = {};
  const to = /^[^:]+:\/*[^/]*$/;
  const eo = /^([^:]+:)[\s\S]*$/;
  const no = /^([^:]+:\/*[^/]*)[\s\S]*$/;
  function ro(t, e) {
    Qa[` ${t}`] ||
      (to.test(t) ? (Qa[` ${t}`] = `${t}/`) : (Qa[` ${t}`] = uo(t, '/', !0)));
    const n = (t = Qa[` ${t}`]).indexOf(':') === -1;
    return e.substring(0, 2) === '//'
      ? n
        ? e
        : t.replace(eo, '$1') + e
      : e.charAt(0) === '/'
      ? n
        ? e
        : t.replace(no, '$1') + e
      : t + e;
  }
  function uo(t, e, n) {
    const r = t.length;
    if (r === 0) return '';
    for (var u = 0; u < r; ) {
      const i = t.charAt(r - u - 1);
      if (i !== e || n) {
        if (i === e || !n) break;
        u++;
      } else u++;
    }
    return t.substr(0, r - u);
  }
  const io = function (t, e) {
    if (e) {
      if (Ua.test(t)) return t.replace(qa, Ha);
    } else if (Za.test(t)) return t.replace(Ka, Ha);
    return t;
  };
  const ao = Ya;
  const oo = function (t, e) {
    (t = t.source || t), (e = e || '');
    var n = {
      replace(e, r) {
        return (
          (r = (r = r.source || r).replace(Va, '$1')), (t = t.replace(e, r)), n
        );
      },
      getRegex() {
        return new RegExp(t, e);
      },
    };
    return n;
  };
  const lo = function (t, e, n) {
    if (t) {
      let r;
      try {
        r = decodeURIComponent(Ya(n)).replace(Xa, '').toLowerCase();
      } catch (t) {
        return null;
      }
      if (
        r.indexOf('javascript:') === 0 ||
        r.indexOf('vbscript:') === 0 ||
        r.indexOf('data:') === 0
      )
        return null;
    }
    e && !Ga.test(n) && (n = ro(e, n));
    try {
      n = encodeURI(n).replace(/%25/g, '%');
    } catch (t) {
      return null;
    }
    return n;
  };
  const so = { exec() {} };
  const co = function (t) {
    for (var e, n, r = 1; r < arguments.length; r++)
      for (n in (e = arguments[r]))
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    return t;
  };
  const po = function (t, e) {
    const n = t
      .replace(/\|/g, function (t, e, n) {
        for (var r = !1, u = e; --u >= 0 && n[u] === '\\'; ) r = !r;
        return r ? '|' : ' |';
      })
      .split(/ \|/);
    let r = 0;
    if (n.length > e) n.splice(e);
    else for (; n.length < e; ) n.push('');
    for (; r < n.length; r++) n[r] = n[r].trim().replace(/\\\|/g, '|');
    return n;
  };
  const fo = uo;
  const ho = function (t, e) {
    if (t.indexOf(e[1]) === -1) return -1;
    for (let n = t.length, r = 0, u = 0; u < n; u++)
      if (t[u] === '\\') u++;
      else if (t[u] === e[0]) r++;
      else if (t[u] === e[1] && --r < 0) return u;
    return -1;
  };
  const go = function (t) {
    t &&
      t.sanitize &&
      !t.silent &&
      console.warn(
        'marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options'
      );
  };
  const Do = function (t, e) {
    if (e < 1) return '';
    for (var n = ''; e > 1; ) 1 & e && (n += t), (e >>= 1), (t += t);
    return n + t;
  };
  const mo = Ma.exports.defaults;
  const vo = fo;
  const yo = po;
  const ko = io;
  const Ao = ho;
  function Eo(t, e, n) {
    const r = e.href;
    const u = e.title ? ko(e.title) : null;
    const i = t[1].replace(/\\([\[\]])/g, '$1');
    return t[0].charAt(0) !== '!'
      ? { type: 'link', raw: n, href: r, title: u, text: i }
      : { type: 'image', raw: n, href: r, title: u, text: ko(i) };
  }
  const bo = (function () {
    function t(e) {
      or(this, t), (this.options = e || mo);
    }
    return (
      sr(t, [
        {
          key: 'space',
          value(t) {
            const e = this.rules.block.newline.exec(t);
            if (e)
              return e[0].length > 1
                ? { type: 'space', raw: e[0] }
                : { raw: '\n' };
          },
        },
        {
          key: 'code',
          value(t) {
            const e = this.rules.block.code.exec(t);
            if (e) {
              const n = e[0].replace(/^ {1,4}/gm, '');
              return {
                type: 'code',
                raw: e[0],
                codeBlockStyle: 'indented',
                text: this.options.pedantic ? n : vo(n, '\n'),
              };
            }
          },
        },
        {
          key: 'fences',
          value(t) {
            const e = this.rules.block.fences.exec(t);
            if (e) {
              const n = e[0];
              const r = (function (t, e) {
                const n = t.match(/^(\s+)(?:```)/);
                if (n === null) return e;
                const r = n[1];
                return e
                  .split('\n')
                  .map(function (t) {
                    const e = t.match(/^\s+/);
                    return e === null
                      ? t
                      : cr(e, 1)[0].length >= r.length
                      ? t.slice(r.length)
                      : t;
                  })
                  .join('\n');
              })(n, e[3] || '');
              return {
                type: 'code',
                raw: n,
                lang: e[2] ? e[2].trim() : e[2],
                text: r,
              };
            }
          },
        },
        {
          key: 'heading',
          value(t) {
            const e = this.rules.block.heading.exec(t);
            if (e) {
              let n = e[2].trim();
              if (/#$/.test(n)) {
                const r = vo(n, '#');
                this.options.pedantic
                  ? (n = r.trim())
                  : (r && !/ $/.test(r)) || (n = r.trim());
              }
              return {
                type: 'heading',
                raw: e[0],
                depth: e[1].length,
                text: n,
              };
            }
          },
        },
        {
          key: 'nptable',
          value(t) {
            const e = this.rules.block.nptable.exec(t);
            if (e) {
              const n = {
                type: 'table',
                header: yo(e[1].replace(/^ *| *\| *$/g, '')),
                align: e[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                cells: e[3] ? e[3].replace(/\n$/, '').split('\n') : [],
                raw: e[0],
              };
              if (n.header.length === n.align.length) {
                let r;
                let u = n.align.length;
                for (r = 0; r < u; r++)
                  /^ *-+: *$/.test(n.align[r])
                    ? (n.align[r] = 'right')
                    : /^ *:-+: *$/.test(n.align[r])
                    ? (n.align[r] = 'center')
                    : /^ *:-+ *$/.test(n.align[r])
                    ? (n.align[r] = 'left')
                    : (n.align[r] = null);
                for (u = n.cells.length, r = 0; r < u; r++)
                  n.cells[r] = yo(n.cells[r], n.header.length);
                return n;
              }
            }
          },
        },
        {
          key: 'hr',
          value(t) {
            const e = this.rules.block.hr.exec(t);
            if (e) return { type: 'hr', raw: e[0] };
          },
        },
        {
          key: 'blockquote',
          value(t) {
            const e = this.rules.block.blockquote.exec(t);
            if (e) {
              const n = e[0].replace(/^ *> ?/gm, '');
              return { type: 'blockquote', raw: e[0], text: n };
            }
          },
        },
        {
          key: 'list',
          value(t) {
            const e = this.rules.block.list.exec(t);
            if (e) {
              let n;
              let r;
              let u;
              let i;
              let a;
              let o;
              let l;
              let s;
              let c;
              let p = e[0];
              const d = e[2];
              const f = d.length > 1;
              const h = {
                type: 'list',
                raw: p,
                ordered: f,
                start: f ? +d.slice(0, -1) : '',
                loose: !1,
                items: [],
              };
              const g = e[0].match(this.rules.block.item);
              let D = !1;
              let m = g.length;
              u = this.rules.block.listItemStart.exec(g[0]);
              for (let v = 0; v < m; v++) {
                if (
                  ((p = n = g[v]),
                  this.options.pedantic ||
                    ((c = n.match(
                      new RegExp(`\\n\\s*\\n {0,${u[0].length - 1}}\\S`)
                    )) &&
                      ((a =
                        n.length - c.index + g.slice(v + 1).join('\n').length),
                      (h.raw = h.raw.substring(0, h.raw.length - a)),
                      (p = n = n.substring(0, c.index)),
                      (m = v + 1))),
                  v !== m - 1)
                ) {
                  if (
                    ((i = this.rules.block.listItemStart.exec(g[v + 1])),
                    this.options.pedantic
                      ? i[1].length > u[1].length
                      : i[1].length >= u[0].length || i[1].length > 3)
                  ) {
                    g.splice(
                      v,
                      2,
                      g[v] +
                        (!this.options.pedantic &&
                        i[1].length < u[0].length &&
                        !g[v].match(/\n$/)
                          ? ''
                          : '\n') +
                        g[v + 1]
                    ),
                      v--,
                      m--;
                    continue;
                  }
                  (!this.options.pedantic || this.options.smartLists
                    ? i[2][i[2].length - 1] !== d[d.length - 1]
                    : f === (i[2].length === 1)) &&
                    ((a = g.slice(v + 1).join('\n').length),
                    (h.raw = h.raw.substring(0, h.raw.length - a)),
                    (v = m - 1)),
                    (u = i);
                }
                (r = n.length),
                  ~(n = n.replace(/^ *([*+-]|\d+[.)]) ?/, '')).indexOf('\n ') &&
                    ((r -= n.length),
                    (n = this.options.pedantic
                      ? n.replace(/^ {1,4}/gm, '')
                      : n.replace(new RegExp(`^ {1,${r}}`, 'gm'), ''))),
                  (n = vo(n, '\n')),
                  v !== m - 1 && (p += '\n'),
                  (o = D || /\n\n(?!\s*$)/.test(p)),
                  v !== m - 1 && ((D = p.slice(-2) === '\n\n'), o || (o = D)),
                  o && (h.loose = !0),
                  this.options.gfm &&
                    ((s = void 0),
                    (l = /^\[[ xX]\] /.test(n)) &&
                      ((s = n[1] !== ' '),
                      (n = n.replace(/^\[[ xX]\] +/, '')))),
                  h.items.push({
                    type: 'list_item',
                    raw: p,
                    task: l,
                    checked: s,
                    loose: o,
                    text: n,
                  });
              }
              return h;
            }
          },
        },
        {
          key: 'html',
          value(t) {
            const e = this.rules.block.html.exec(t);
            if (e)
              return {
                type: this.options.sanitize ? 'paragraph' : 'html',
                raw: e[0],
                pre:
                  !this.options.sanitizer &&
                  (e[1] === 'pre' || e[1] === 'script' || e[1] === 'style'),
                text: this.options.sanitize
                  ? this.options.sanitizer
                    ? this.options.sanitizer(e[0])
                    : ko(e[0])
                  : e[0],
              };
          },
        },
        {
          key: 'def',
          value(t) {
            const e = this.rules.block.def.exec(t);
            if (e)
              return (
                e[3] && (e[3] = e[3].substring(1, e[3].length - 1)),
                {
                  type: 'def',
                  tag: e[1].toLowerCase().replace(/\s+/g, ' '),
                  raw: e[0],
                  href: e[2],
                  title: e[3],
                }
              );
          },
        },
        {
          key: 'table',
          value(t) {
            const e = this.rules.block.table.exec(t);
            if (e) {
              const n = {
                type: 'table',
                header: yo(e[1].replace(/^ *| *\| *$/g, '')),
                align: e[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
                cells: e[3] ? e[3].replace(/\n$/, '').split('\n') : [],
              };
              if (n.header.length === n.align.length) {
                n.raw = e[0];
                let r;
                let u = n.align.length;
                for (r = 0; r < u; r++)
                  /^ *-+: *$/.test(n.align[r])
                    ? (n.align[r] = 'right')
                    : /^ *:-+: *$/.test(n.align[r])
                    ? (n.align[r] = 'center')
                    : /^ *:-+ *$/.test(n.align[r])
                    ? (n.align[r] = 'left')
                    : (n.align[r] = null);
                for (u = n.cells.length, r = 0; r < u; r++)
                  n.cells[r] = yo(
                    n.cells[r].replace(/^ *\| *| *\| *$/g, ''),
                    n.header.length
                  );
                return n;
              }
            }
          },
        },
        {
          key: 'lheading',
          value(t) {
            const e = this.rules.block.lheading.exec(t);
            if (e)
              return {
                type: 'heading',
                raw: e[0],
                depth: e[2].charAt(0) === '=' ? 1 : 2,
                text: e[1],
              };
          },
        },
        {
          key: 'paragraph',
          value(t) {
            const e = this.rules.block.paragraph.exec(t);
            if (e)
              return {
                type: 'paragraph',
                raw: e[0],
                text:
                  e[1].charAt(e[1].length - 1) === '\n'
                    ? e[1].slice(0, -1)
                    : e[1],
              };
          },
        },
        {
          key: 'text',
          value(t) {
            const e = this.rules.block.text.exec(t);
            if (e) return { type: 'text', raw: e[0], text: e[0] };
          },
        },
        {
          key: 'escape',
          value(t) {
            const e = this.rules.inline.escape.exec(t);
            if (e) return { type: 'escape', raw: e[0], text: ko(e[1]) };
          },
        },
        {
          key: 'tag',
          value(t, e, n) {
            const r = this.rules.inline.tag.exec(t);
            if (r)
              return (
                !e && /^<a /i.test(r[0])
                  ? (e = !0)
                  : e && /^<\/a>/i.test(r[0]) && (e = !1),
                !n && /^<(pre|code|kbd|script)(\s|>)/i.test(r[0])
                  ? (n = !0)
                  : n &&
                    /^<\/(pre|code|kbd|script)(\s|>)/i.test(r[0]) &&
                    (n = !1),
                {
                  type: this.options.sanitize ? 'text' : 'html',
                  raw: r[0],
                  inLink: e,
                  inRawBlock: n,
                  text: this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(r[0])
                      : ko(r[0])
                    : r[0],
                }
              );
          },
        },
        {
          key: 'link',
          value(t) {
            const e = this.rules.inline.link.exec(t);
            if (e) {
              const n = e[2].trim();
              if (!this.options.pedantic && /^</.test(n)) {
                if (!/>$/.test(n)) return;
                const r = vo(n.slice(0, -1), '\\');
                if ((n.length - r.length) % 2 == 0) return;
              } else {
                const u = Ao(e[2], '()');
                if (u > -1) {
                  const i = (e[0].indexOf('!') === 0 ? 5 : 4) + e[1].length + u;
                  (e[2] = e[2].substring(0, u)),
                    (e[0] = e[0].substring(0, i).trim()),
                    (e[3] = '');
                }
              }
              let a = e[2];
              let o = '';
              if (this.options.pedantic) {
                const l = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(a);
                l && ((a = l[1]), (o = l[3]));
              } else o = e[3] ? e[3].slice(1, -1) : '';
              return (
                (a = a.trim()),
                /^</.test(a) &&
                  (a =
                    this.options.pedantic && !/>$/.test(n)
                      ? a.slice(1)
                      : a.slice(1, -1)),
                Eo(
                  e,
                  {
                    href: a ? a.replace(this.rules.inline._escapes, '$1') : a,
                    title: o ? o.replace(this.rules.inline._escapes, '$1') : o,
                  },
                  e[0]
                )
              );
            }
          },
        },
        {
          key: 'reflink',
          value(t, e) {
            let n;
            if (
              (n = this.rules.inline.reflink.exec(t)) ||
              (n = this.rules.inline.nolink.exec(t))
            ) {
              let r = (n[2] || n[1]).replace(/\s+/g, ' ');
              if (!(r = e[r.toLowerCase()]) || !r.href) {
                const u = n[0].charAt(0);
                return { type: 'text', raw: u, text: u };
              }
              return Eo(n, r, n[0]);
            }
          },
        },
        {
          key: 'emStrong',
          value(t, e) {
            const n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : '';
            let r = this.rules.inline.emStrong.lDelim.exec(t);
            if (
              r &&
              (!r[3] ||
                !n.match(
                  /(?:[0-9A-Za-z\xAA\xB2\xB3\xB5\xB9\xBA\xBC-\xBE\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u0660-\u0669\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07C0-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08C7\u0904-\u0939\u093D\u0950\u0958-\u0961\u0966-\u096F\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09E6-\u09F1\u09F4-\u09F9\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A66-\u0A6F\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AE6-\u0AEF\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B66-\u0B6F\u0B71-\u0B77\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0BE6-\u0BF2\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C66-\u0C6F\u0C78-\u0C7E\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CE6-\u0CEF\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D58-\u0D61\u0D66-\u0D78\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DE6-\u0DEF\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F20-\u0F33\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F-\u1049\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u1090-\u1099\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1369-\u137C\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1820-\u1878\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A16\u1A20-\u1A54\u1A80-\u1A89\u1A90-\u1A99\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B50-\u1B59\u1B83-\u1BA0\u1BAE-\u1BE5\u1C00-\u1C23\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2070\u2071\u2074-\u2079\u207F-\u2089\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2150-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2CFD\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u3192-\u3195\u31A0-\u31BF\u31F0-\u31FF\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\u3400-\u4DBF\u4E00-\u9FFC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7CA\uA7F5-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA830-\uA835\uA840-\uA873\uA882-\uA8B3\uA8D0-\uA8D9\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA900-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF-\uA9D9\uA9E0-\uA9E4\uA9E6-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA50-\uAA59\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD07-\uDD33\uDD40-\uDD78\uDD8A\uDD8B\uDE80-\uDE9C\uDEA0-\uDED0\uDEE1-\uDEFB\uDF00-\uDF23\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC58-\uDC76\uDC79-\uDC9E\uDCA7-\uDCAF\uDCE0-\uDCF2\uDCF4\uDCF5\uDCFB-\uDD1B\uDD20-\uDD39\uDD80-\uDDB7\uDDBC-\uDDCF\uDDD2-\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE40-\uDE48\uDE60-\uDE7E\uDE80-\uDE9F\uDEC0-\uDEC7\uDEC9-\uDEE4\uDEEB-\uDEEF\uDF00-\uDF35\uDF40-\uDF55\uDF58-\uDF72\uDF78-\uDF91\uDFA9-\uDFAF]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDCFA-\uDD23\uDD30-\uDD39\uDE60-\uDE7E\uDE80-\uDEA9\uDEB0\uDEB1\uDF00-\uDF27\uDF30-\uDF45\uDF51-\uDF54\uDFB0-\uDFCB\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC52-\uDC6F\uDC83-\uDCAF\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD03-\uDD26\uDD36-\uDD3F\uDD44\uDD47\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDD0-\uDDDA\uDDDC\uDDE1-\uDDF4\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDEF0-\uDEF9\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC50-\uDC59\uDC5F-\uDC61\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE50-\uDE59\uDE80-\uDEAA\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF30-\uDF3B]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCF2\uDCFF-\uDD06\uDD09\uDD0C-\uDD13\uDD15\uDD16\uDD18-\uDD2F\uDD3F\uDD41\uDD50-\uDD59\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC50-\uDC6C\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF2\uDFB0\uDFC0-\uDFD4]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD822\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF50-\uDF59\uDF5B-\uDF61\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE96\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD823[\uDC00-\uDCD5\uDD00-\uDD08]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD834[\uDEE0-\uDEF3\uDF60-\uDF78]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEEB\uDEF0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCC7-\uDCCF\uDD00-\uDD43\uDD4B\uDD50-\uDD59]|\uD83B[\uDC71-\uDCAB\uDCAD-\uDCAF\uDCB1-\uDCB4\uDD01-\uDD2D\uDD2F-\uDD3D\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD83C[\uDD00-\uDD0C]|\uD83E[\uDFF0-\uDFF9]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uD884[\uDC00-\uDF4A])/
                ))
            ) {
              const u = r[1] || r[2] || '';
              if (
                !u ||
                (u && (n === '' || this.rules.inline.punctuation.exec(n)))
              ) {
                let i;
                let a;
                const o = r[0].length - 1;
                let l = o;
                let s = 0;
                const c =
                  r[0][0] === '*'
                    ? this.rules.inline.emStrong.rDelimAst
                    : this.rules.inline.emStrong.rDelimUnd;
                for (
                  c.lastIndex = 0, e = e.slice(-1 * t.length + o);
                  (r = c.exec(e)) != null;

                )
                  if ((i = r[1] || r[2] || r[3] || r[4] || r[5] || r[6]))
                    if (((a = i.length), r[3] || r[4])) l += a;
                    else if (!((r[5] || r[6]) && o % 3) || (o + a) % 3) {
                      if (!((l -= a) > 0)) {
                        if (
                          (l + s - a <= 0 &&
                            !e.slice(c.lastIndex).match(c) &&
                            (a = Math.min(a, a + l + s)),
                          Math.min(o, a) % 2)
                        )
                          return {
                            type: 'em',
                            raw: t.slice(0, o + r.index + a + 1),
                            text: t.slice(1, o + r.index + a),
                          };
                        if (Math.min(o, a) % 2 == 0)
                          return {
                            type: 'strong',
                            raw: t.slice(0, o + r.index + a + 1),
                            text: t.slice(2, o + r.index + a - 1),
                          };
                      }
                    } else s += a;
              }
            }
          },
        },
        {
          key: 'codespan',
          value(t) {
            const e = this.rules.inline.code.exec(t);
            if (e) {
              let n = e[2].replace(/\n/g, ' ');
              const r = /[^ ]/.test(n);
              const u = /^ /.test(n) && / $/.test(n);
              return (
                r && u && (n = n.substring(1, n.length - 1)),
                (n = ko(n, !0)),
                { type: 'codespan', raw: e[0], text: n }
              );
            }
          },
        },
        {
          key: 'br',
          value(t) {
            const e = this.rules.inline.br.exec(t);
            if (e) return { type: 'br', raw: e[0] };
          },
        },
        {
          key: 'del',
          value(t) {
            const e = this.rules.inline.del.exec(t);
            if (e) return { type: 'del', raw: e[0], text: e[2] };
          },
        },
        {
          key: 'autolink',
          value(t, e) {
            let n;
            let r;
            const u = this.rules.inline.autolink.exec(t);
            if (u)
              return (
                (r =
                  u[2] === '@'
                    ? `mailto:${(n = ko(this.options.mangle ? e(u[1]) : u[1]))}`
                    : (n = ko(u[1]))),
                {
                  type: 'link',
                  raw: u[0],
                  text: n,
                  href: r,
                  tokens: [{ type: 'text', raw: n, text: n }],
                }
              );
          },
        },
        {
          key: 'url',
          value(t, e) {
            let n;
            if ((n = this.rules.inline.url.exec(t))) {
              let r;
              let u;
              if (n[2] === '@')
                u = `mailto:${(r = ko(this.options.mangle ? e(n[0]) : n[0]))}`;
              else {
                let i;
                do {
                  (i = n[0]),
                    (n[0] = this.rules.inline._backpedal.exec(n[0])[0]);
                } while (i !== n[0]);
                (r = ko(n[0])), (u = n[1] === 'www.' ? `http://${r}` : r);
              }
              return {
                type: 'link',
                raw: n[0],
                text: r,
                href: u,
                tokens: [{ type: 'text', raw: r, text: r }],
              };
            }
          },
        },
        {
          key: 'inlineText',
          value(t, e, n) {
            let r;
            const u = this.rules.inline.text.exec(t);
            if (u)
              return (
                (r = e
                  ? this.options.sanitize
                    ? this.options.sanitizer
                      ? this.options.sanitizer(u[0])
                      : ko(u[0])
                    : u[0]
                  : ko(this.options.smartypants ? n(u[0]) : u[0])),
                { type: 'text', raw: u[0], text: r }
              );
          },
        },
      ]),
      t
    );
  })();
  const Fo = so;
  const Co = oo;
  const xo = co;
  const wo = {
    newline: /^(?: *(?:\n|$))+/,
    code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
    fences:
      /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?! {0,3}bull )\n*|\s*$)/,
    html: '^ {0,3}(?:<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$))',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    nptable: Fo,
    table: Fo,
    lheading: /^([^\n]+)\n {0,3}(=+|-+) *(?:\n+|$)/,
    _paragraph:
      /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html| +\n)[^\n]+)*)/,
    text: /^[^\n]+/,
    _label: /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/,
    _title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/,
  };
  (wo.def = Co(wo.def)
    .replace('label', wo._label)
    .replace('title', wo._title)
    .getRegex()),
    (wo.bullet = /(?:[*+-]|\d{1,9}[.)])/),
    (wo.item = /^( *)(bull) ?[^\n]*(?:\n(?! *bull ?)[^\n]*)*/),
    (wo.item = Co(wo.item, 'gm').replace(/bull/g, wo.bullet).getRegex()),
    (wo.listItemStart = Co(/^( *)(bull) */)
      .replace('bull', wo.bullet)
      .getRegex()),
    (wo.list = Co(wo.list)
      .replace(/bull/g, wo.bullet)
      .replace(
        'hr',
        '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))'
      )
      .replace('def', `\\n+(?=${wo.def.source})`)
      .getRegex()),
    (wo._tag =
      'address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul'),
    (wo._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/),
    (wo.html = Co(wo.html, 'i')
      .replace('comment', wo._comment)
      .replace('tag', wo._tag)
      .replace(
        'attribute',
        / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/
      )
      .getRegex()),
    (wo.paragraph = Co(wo._paragraph)
      .replace('hr', wo.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('|lheading', '')
      .replace('blockquote', ' {0,3}>')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', wo._tag)
      .getRegex()),
    (wo.blockquote = Co(wo.blockquote)
      .replace('paragraph', wo.paragraph)
      .getRegex()),
    (wo.normal = xo({}, wo)),
    (wo.gfm = xo({}, wo.normal, {
      nptable:
        '^ *([^|\\n ].*\\|.*)\\n {0,3}([-:]+ *\\|[-| :]*)(?:\\n((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
      table:
        '^ *\\|(.+)\\n {0,3}\\|?( *[-:]+[-| :]*)(?:\\n *((?:(?!\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)',
    })),
    (wo.gfm.nptable = Co(wo.gfm.nptable)
      .replace('hr', wo.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', wo._tag)
      .getRegex()),
    (wo.gfm.table = Co(wo.gfm.table)
      .replace('hr', wo.hr)
      .replace('heading', ' {0,3}#{1,6} ')
      .replace('blockquote', ' {0,3}>')
      .replace('code', ' {4}[^\\n]')
      .replace('fences', ' {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n')
      .replace('list', ' {0,3}(?:[*+-]|1[.)]) ')
      .replace('html', '</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|!--)')
      .replace('tag', wo._tag)
      .getRegex()),
    (wo.pedantic = xo({}, wo.normal, {
      html: Co(
        '^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))'
      )
        .replace('comment', wo._comment)
        .replace(
          /tag/g,
          '(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b'
        )
        .getRegex(),
      def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
      heading: /^(#{1,6})(.*)(?:\n+|$)/,
      fences: Fo,
      paragraph: Co(wo.normal._paragraph)
        .replace('hr', wo.hr)
        .replace('heading', ' *#{1,6} *[^\n]')
        .replace('lheading', wo.lheading)
        .replace('blockquote', ' {0,3}>')
        .replace('|fences', '')
        .replace('|list', '')
        .replace('|html', '')
        .getRegex(),
    }));
  const So = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: Fo,
    tag: '^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    reflinkSearch: 'reflink|nolink(?!\\()',
    emStrong: {
      lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
      rDelimAst:
        /\_\_[^_]*?\*[^_]*?\_\_|[punct_](\*+)(?=[\s]|$)|[^punct*_\s](\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|[^punct*_\s](\*+)(?=[^punct*_\s])/,
      rDelimUnd:
        /\*\*[^*]*?\_[^*]*?\*\*|[punct*](\_+)(?=[\s]|$)|[^punct*_\s](\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/,
    },
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: Fo,
    text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
    punctuation: /^([\spunctuation])/,
    _punctuation: '!"#$%&\'()+\\-.,/:;<=>?@\\[\\]`^{|}~',
  };
  (So.punctuation = Co(So.punctuation)
    .replace(/punctuation/g, So._punctuation)
    .getRegex()),
    (So.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g),
    (So.escapedEmSt = /\\\*|\\_/g),
    (So._comment = Co(wo._comment)
      .replace('(?:--\x3e|$)', '--\x3e')
      .getRegex()),
    (So.emStrong.lDelim = Co(So.emStrong.lDelim)
      .replace(/punct/g, So._punctuation)
      .getRegex()),
    (So.emStrong.rDelimAst = Co(So.emStrong.rDelimAst, 'g')
      .replace(/punct/g, So._punctuation)
      .getRegex()),
    (So.emStrong.rDelimUnd = Co(So.emStrong.rDelimUnd, 'g')
      .replace(/punct/g, So._punctuation)
      .getRegex()),
    (So._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g),
    (So._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/),
    (So._email =
      /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/),
    (So.autolink = Co(So.autolink)
      .replace('scheme', So._scheme)
      .replace('email', So._email)
      .getRegex()),
    (So._attribute =
      /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/),
    (So.tag = Co(So.tag)
      .replace('comment', So._comment)
      .replace('attribute', So._attribute)
      .getRegex()),
    (So._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/),
    (So._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/),
    (So._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/),
    (So.link = Co(So.link)
      .replace('label', So._label)
      .replace('href', So._href)
      .replace('title', So._title)
      .getRegex()),
    (So.reflink = Co(So.reflink).replace('label', So._label).getRegex()),
    (So.reflinkSearch = Co(So.reflinkSearch, 'g')
      .replace('reflink', So.reflink)
      .replace('nolink', So.nolink)
      .getRegex()),
    (So.normal = xo({}, So)),
    (So.pedantic = xo({}, So.normal, {
      strong: {
        start: /^__|\*\*/,
        middle:
          /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
        endAst: /\*\*(?!\*)/g,
        endUnd: /__(?!_)/g,
      },
      em: {
        start: /^_|\*/,
        middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
        endAst: /\*(?!\*)/g,
        endUnd: /_(?!_)/g,
      },
      link: Co(/^!?\[(label)\]\((.*?)\)/)
        .replace('label', So._label)
        .getRegex(),
      reflink: Co(/^!?\[(label)\]\s*\[([^\]]*)\]/)
        .replace('label', So._label)
        .getRegex(),
    })),
    (So.gfm = xo({}, So.normal, {
      escape: Co(So.escape).replace('])', '~|])').getRegex(),
      _extended_email:
        /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
      url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
      _backpedal:
        /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
      del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
      text: /^([`~]+|[^`~])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/,
    })),
    (So.gfm.url = Co(So.gfm.url, 'i')
      .replace('email', So.gfm._extended_email)
      .getRegex()),
    (So.breaks = xo({}, So.gfm, {
      br: Co(So.br).replace('{2,}', '*').getRegex(),
      text: Co(So.gfm.text)
        .replace('\\b_', '\\b_| {2,}\\n')
        .replace(/\{2,\}/g, '*')
        .getRegex(),
    }));
  const Bo = { block: wo, inline: So };
  const To = bo;
  const _o = Ma.exports.defaults;
  const zo = Bo.block;
  const Io = Bo.inline;
  const Ro = Do;
  function $o(t) {
    return t
      .replace(/---/g, '—')
      .replace(/--/g, '–')
      .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1‘')
      .replace(/'/g, '’')
      .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1“')
      .replace(/"/g, '”')
      .replace(/\.{3}/g, '…');
  }
  function Oo(t) {
    let e;
    let n;
    let r = '';
    const u = t.length;
    for (e = 0; e < u; e++)
      (n = t.charCodeAt(e)),
        Math.random() > 0.5 && (n = `x${n.toString(16)}`),
        (r += `&#${n};`);
    return r;
  }
  const Po = (function () {
    function t(e) {
      or(this, t),
        (this.tokens = []),
        (this.tokens.links = Object.create(null)),
        (this.options = e || _o),
        (this.options.tokenizer = this.options.tokenizer || new To()),
        (this.tokenizer = this.options.tokenizer),
        (this.tokenizer.options = this.options);
      const n = { block: zo.normal, inline: Io.normal };
      this.options.pedantic
        ? ((n.block = zo.pedantic), (n.inline = Io.pedantic))
        : this.options.gfm &&
          ((n.block = zo.gfm),
          this.options.breaks ? (n.inline = Io.breaks) : (n.inline = Io.gfm)),
        (this.tokenizer.rules = n);
    }
    return (
      sr(
        t,
        [
          {
            key: 'lex',
            value(t) {
              return (
                (t = t.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ')),
                this.blockTokens(t, this.tokens, !0),
                this.inline(this.tokens),
                this.tokens
              );
            },
          },
          {
            key: 'blockTokens',
            value(t) {
              let e;
              let n;
              let r;
              let u;
              const i =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
              const a =
                !(arguments.length > 2 && void 0 !== arguments[2]) ||
                arguments[2];
              for (this.options.pedantic && (t = t.replace(/^ +$/gm, '')); t; )
                if ((e = this.tokenizer.space(t)))
                  (t = t.substring(e.raw.length)), e.type && i.push(e);
                else if ((e = this.tokenizer.code(t)))
                  (t = t.substring(e.raw.length)),
                    (u = i[i.length - 1]) && u.type === 'paragraph'
                      ? ((u.raw += `\n${e.raw}`), (u.text += `\n${e.text}`))
                      : i.push(e);
                else if ((e = this.tokenizer.fences(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.heading(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.nptable(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.hr(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.blockquote(t)))
                  (t = t.substring(e.raw.length)),
                    (e.tokens = this.blockTokens(e.text, [], a)),
                    i.push(e);
                else if ((e = this.tokenizer.list(t))) {
                  for (
                    t = t.substring(e.raw.length), r = e.items.length, n = 0;
                    n < r;
                    n++
                  )
                    e.items[n].tokens = this.blockTokens(
                      e.items[n].text,
                      [],
                      !1
                    );
                  i.push(e);
                } else if ((e = this.tokenizer.html(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if (a && (e = this.tokenizer.def(t)))
                  (t = t.substring(e.raw.length)),
                    this.tokens.links[e.tag] ||
                      (this.tokens.links[e.tag] = {
                        href: e.href,
                        title: e.title,
                      });
                else if ((e = this.tokenizer.table(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.lheading(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if (a && (e = this.tokenizer.paragraph(t)))
                  (t = t.substring(e.raw.length)), i.push(e);
                else if ((e = this.tokenizer.text(t)))
                  (t = t.substring(e.raw.length)),
                    (u = i[i.length - 1]) && u.type === 'text'
                      ? ((u.raw += `\n${e.raw}`), (u.text += `\n${e.text}`))
                      : i.push(e);
                else if (t) {
                  const o = `Infinite loop on byte: ${t.charCodeAt(0)}`;
                  if (this.options.silent) {
                    console.error(o);
                    break;
                  }
                  throw new Error(o);
                }
              return i;
            },
          },
          {
            key: 'inline',
            value(t) {
              let e;
              let n;
              let r;
              let u;
              let i;
              let a;
              const o = t.length;
              for (e = 0; e < o; e++)
                switch ((a = t[e]).type) {
                  case 'paragraph':
                  case 'text':
                  case 'heading':
                    (a.tokens = []), this.inlineTokens(a.text, a.tokens);
                    break;
                  case 'table':
                    for (
                      a.tokens = { header: [], cells: [] },
                        u = a.header.length,
                        n = 0;
                      n < u;
                      n++
                    )
                      (a.tokens.header[n] = []),
                        this.inlineTokens(a.header[n], a.tokens.header[n]);
                    for (u = a.cells.length, n = 0; n < u; n++)
                      for (
                        i = a.cells[n], a.tokens.cells[n] = [], r = 0;
                        r < i.length;
                        r++
                      )
                        (a.tokens.cells[n][r] = []),
                          this.inlineTokens(i[r], a.tokens.cells[n][r]);
                    break;
                  case 'blockquote':
                    this.inline(a.tokens);
                    break;
                  case 'list':
                    for (u = a.items.length, n = 0; n < u; n++)
                      this.inline(a.items[n].tokens);
                }
              return t;
            },
          },
          {
            key: 'inlineTokens',
            value(t) {
              let e;
              let n;
              let r;
              let u;
              let i;
              const a =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : [];
              let o =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
              let l =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
              let s = t;
              if (this.tokens.links) {
                const c = Object.keys(this.tokens.links);
                if (c.length > 0)
                  for (
                    ;
                    (r = this.tokenizer.rules.inline.reflinkSearch.exec(s)) !=
                    null;

                  )
                    c.includes(r[0].slice(r[0].lastIndexOf('[') + 1, -1)) &&
                      (s = `${s.slice(0, r.index)}[${Ro(
                        'a',
                        r[0].length - 2
                      )}]${s.slice(
                        this.tokenizer.rules.inline.reflinkSearch.lastIndex
                      )}`);
              }
              for (
                ;
                (r = this.tokenizer.rules.inline.blockSkip.exec(s)) != null;

              )
                s = `${s.slice(0, r.index)}[${Ro(
                  'a',
                  r[0].length - 2
                )}]${s.slice(this.tokenizer.rules.inline.blockSkip.lastIndex)}`;
              for (
                ;
                (r = this.tokenizer.rules.inline.escapedEmSt.exec(s)) != null;

              )
                s = `${s.slice(0, r.index)}++${s.slice(
                  this.tokenizer.rules.inline.escapedEmSt.lastIndex
                )}`;
              for (; t; )
                if ((u || (i = ''), (u = !1), (e = this.tokenizer.escape(t))))
                  (t = t.substring(e.raw.length)), a.push(e);
                else if ((e = this.tokenizer.tag(t, o, l))) {
                  (t = t.substring(e.raw.length)),
                    (o = e.inLink),
                    (l = e.inRawBlock);
                  const p = a[a.length - 1];
                  p && e.type === 'text' && p.type === 'text'
                    ? ((p.raw += e.raw), (p.text += e.text))
                    : a.push(e);
                } else if ((e = this.tokenizer.link(t)))
                  (t = t.substring(e.raw.length)),
                    e.type === 'link' &&
                      (e.tokens = this.inlineTokens(e.text, [], !0, l)),
                    a.push(e);
                else if ((e = this.tokenizer.reflink(t, this.tokens.links))) {
                  t = t.substring(e.raw.length);
                  const d = a[a.length - 1];
                  e.type === 'link'
                    ? ((e.tokens = this.inlineTokens(e.text, [], !0, l)),
                      a.push(e))
                    : d && e.type === 'text' && d.type === 'text'
                    ? ((d.raw += e.raw), (d.text += e.text))
                    : a.push(e);
                } else if ((e = this.tokenizer.emStrong(t, s, i)))
                  (t = t.substring(e.raw.length)),
                    (e.tokens = this.inlineTokens(e.text, [], o, l)),
                    a.push(e);
                else if ((e = this.tokenizer.codespan(t)))
                  (t = t.substring(e.raw.length)), a.push(e);
                else if ((e = this.tokenizer.br(t)))
                  (t = t.substring(e.raw.length)), a.push(e);
                else if ((e = this.tokenizer.del(t)))
                  (t = t.substring(e.raw.length)),
                    (e.tokens = this.inlineTokens(e.text, [], o, l)),
                    a.push(e);
                else if ((e = this.tokenizer.autolink(t, Oo)))
                  (t = t.substring(e.raw.length)), a.push(e);
                else if (o || !(e = this.tokenizer.url(t, Oo))) {
                  if ((e = this.tokenizer.inlineText(t, l, $o)))
                    (t = t.substring(e.raw.length)),
                      e.raw.slice(-1) !== '_' && (i = e.raw.slice(-1)),
                      (u = !0),
                      (n = a[a.length - 1]) && n.type === 'text'
                        ? ((n.raw += e.raw), (n.text += e.text))
                        : a.push(e);
                  else if (t) {
                    const f = `Infinite loop on byte: ${t.charCodeAt(0)}`;
                    if (this.options.silent) {
                      console.error(f);
                      break;
                    }
                    throw new Error(f);
                  }
                } else (t = t.substring(e.raw.length)), a.push(e);
              return a;
            },
          },
        ],
        [
          {
            key: 'rules',
            get() {
              return { block: zo, inline: Io };
            },
          },
          {
            key: 'lex',
            value(e, n) {
              return new t(n).lex(e);
            },
          },
          {
            key: 'lexInline',
            value(e, n) {
              return new t(n).inlineTokens(e);
            },
          },
        ]
      ),
      t
    );
  })();
  const Lo = Ma.exports.defaults;
  const jo = lo;
  const Mo = io;
  const No = (function () {
    function t(e) {
      or(this, t), (this.options = e || Lo);
    }
    return (
      sr(t, [
        {
          key: 'code',
          value(t, e, n) {
            const r = (e || '').match(/\S*/)[0];
            if (this.options.highlight) {
              const u = this.options.highlight(t, r);
              u != null && u !== t && ((n = !0), (t = u));
            }
            return (
              (t = `${t.replace(/\n$/, '')}\n`),
              r
                ? `<pre><code class="${this.options.langPrefix}${Mo(r, !0)}">${
                    n ? t : Mo(t, !0)
                  }</code></pre>\n`
                : `<pre><code>${n ? t : Mo(t, !0)}</code></pre>\n`
            );
          },
        },
        {
          key: 'blockquote',
          value(t) {
            return `<blockquote>\n${t}</blockquote>\n`;
          },
        },
        {
          key: 'html',
          value(t) {
            return t;
          },
        },
        {
          key: 'heading',
          value(t, e, n, r) {
            return this.options.headerIds
              ? `<h${e} id="${this.options.headerPrefix}${r.slug(
                  n
                )}">${t}</h${e}>\n`
              : `<h${e}>${t}</h${e}>\n`;
          },
        },
        {
          key: 'hr',
          value() {
            return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
          },
        },
        {
          key: 'list',
          value(t, e, n) {
            const r = e ? 'ol' : 'ul';
            return `<${r}${
              e && n !== 1 ? ` start="${n}"` : ''
            }>\n${t}</${r}>\n`;
          },
        },
        {
          key: 'listitem',
          value(t) {
            return `<li>${t}</li>\n`;
          },
        },
        {
          key: 'checkbox',
          value(t) {
            return `<input ${
              t ? 'checked="" ' : ''
            }disabled="" type="checkbox"${this.options.xhtml ? ' /' : ''}> `;
          },
        },
        {
          key: 'paragraph',
          value(t) {
            return `<p>${t}</p>\n`;
          },
        },
        {
          key: 'table',
          value(t, e) {
            return (
              e && (e = `<tbody>${e}</tbody>`),
              `<table>\n<thead>\n${t}</thead>\n${e}</table>\n`
            );
          },
        },
        {
          key: 'tablerow',
          value(t) {
            return `<tr>\n${t}</tr>\n`;
          },
        },
        {
          key: 'tablecell',
          value(t, e) {
            const n = e.header ? 'th' : 'td';
            return `${
              (e.align ? `<${n} align="${e.align}">` : `<${n}>`) + t
            }</${n}>\n`;
          },
        },
        {
          key: 'strong',
          value(t) {
            return `<strong>${t}</strong>`;
          },
        },
        {
          key: 'em',
          value(t) {
            return `<em>${t}</em>`;
          },
        },
        {
          key: 'codespan',
          value(t) {
            return `<code>${t}</code>`;
          },
        },
        {
          key: 'br',
          value() {
            return this.options.xhtml ? '<br/>' : '<br>';
          },
        },
        {
          key: 'del',
          value(t) {
            return `<del>${t}</del>`;
          },
        },
        {
          key: 'link',
          value(t, e, n) {
            if (
              (t = jo(this.options.sanitize, this.options.baseUrl, t)) === null
            )
              return n;
            let r = `<a href="${Mo(t)}"`;
            return e && (r += ` title="${e}"`), (r += `>${n}</a>`);
          },
        },
        {
          key: 'image',
          value(t, e, n) {
            if (
              (t = jo(this.options.sanitize, this.options.baseUrl, t)) === null
            )
              return n;
            let r = `<img src="${t}" alt="${n}"`;
            return (
              e && (r += ` title="${e}"`),
              (r += this.options.xhtml ? '/>' : '>')
            );
          },
        },
        {
          key: 'text',
          value(t) {
            return t;
          },
        },
      ]),
      t
    );
  })();
  const Uo = (function () {
    function t() {
      or(this, t);
    }
    return (
      sr(t, [
        {
          key: 'strong',
          value(t) {
            return t;
          },
        },
        {
          key: 'em',
          value(t) {
            return t;
          },
        },
        {
          key: 'codespan',
          value(t) {
            return t;
          },
        },
        {
          key: 'del',
          value(t) {
            return t;
          },
        },
        {
          key: 'html',
          value(t) {
            return t;
          },
        },
        {
          key: 'text',
          value(t) {
            return t;
          },
        },
        {
          key: 'link',
          value(t, e, n) {
            return `${n}`;
          },
        },
        {
          key: 'image',
          value(t, e, n) {
            return `${n}`;
          },
        },
        {
          key: 'br',
          value() {
            return '';
          },
        },
      ]),
      t
    );
  })();
  const qo = (function () {
    function t() {
      or(this, t), (this.seen = {});
    }
    return (
      sr(t, [
        {
          key: 'serialize',
          value(t) {
            return t
              .toLowerCase()
              .trim()
              .replace(/<[!\/a-z].*?>/gi, '')
              .replace(
                /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g,
                ''
              )
              .replace(/\s/g, '-');
          },
        },
        {
          key: 'getNextSafeSlug',
          value(t, e) {
            let n = t;
            let r = 0;
            if (this.seen.hasOwnProperty(n)) {
              r = this.seen[t];
              do {
                n = `${t}-${++r}`;
              } while (this.seen.hasOwnProperty(n));
            }
            return e || ((this.seen[t] = r), (this.seen[n] = 0)), n;
          },
        },
        {
          key: 'slug',
          value(t) {
            const e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
            const n = this.serialize(t);
            return this.getNextSafeSlug(n, e.dryrun);
          },
        },
      ]),
      t
    );
  })();
  const Zo = No;
  const Ko = Uo;
  const Jo = qo;
  const Ho = Ma.exports.defaults;
  const Wo = ao;
  const Yo = Po;
  const Vo = (function () {
    function t(e) {
      or(this, t),
        (this.options = e || Ho),
        (this.options.renderer = this.options.renderer || new Zo()),
        (this.renderer = this.options.renderer),
        (this.renderer.options = this.options),
        (this.textRenderer = new Ko()),
        (this.slugger = new Jo());
    }
    return (
      sr(
        t,
        [
          {
            key: 'parse',
            value(t) {
              let e;
              let n;
              let r;
              let u;
              let i;
              let a;
              let o;
              let l;
              let s;
              let c;
              let p;
              let d;
              let f;
              let h;
              let g;
              let D;
              let m;
              let v;
              const y =
                !(arguments.length > 1 && void 0 !== arguments[1]) ||
                arguments[1];
              let k = '';
              const A = t.length;
              for (e = 0; e < A; e++)
                switch ((c = t[e]).type) {
                  case 'space':
                    continue;
                  case 'hr':
                    k += this.renderer.hr();
                    continue;
                  case 'heading':
                    k += this.renderer.heading(
                      this.parseInline(c.tokens),
                      c.depth,
                      Wo(this.parseInline(c.tokens, this.textRenderer)),
                      this.slugger
                    );
                    continue;
                  case 'code':
                    k += this.renderer.code(c.text, c.lang, c.escaped);
                    continue;
                  case 'table':
                    for (l = '', o = '', u = c.header.length, n = 0; n < u; n++)
                      o += this.renderer.tablecell(
                        this.parseInline(c.tokens.header[n]),
                        { header: !0, align: c.align[n] }
                      );
                    for (
                      l += this.renderer.tablerow(o),
                        s = '',
                        u = c.cells.length,
                        n = 0;
                      n < u;
                      n++
                    ) {
                      for (
                        o = '', i = (a = c.tokens.cells[n]).length, r = 0;
                        r < i;
                        r++
                      )
                        o += this.renderer.tablecell(this.parseInline(a[r]), {
                          header: !1,
                          align: c.align[r],
                        });
                      s += this.renderer.tablerow(o);
                    }
                    k += this.renderer.table(l, s);
                    continue;
                  case 'blockquote':
                    (s = this.parse(c.tokens)),
                      (k += this.renderer.blockquote(s));
                    continue;
                  case 'list':
                    for (
                      p = c.ordered,
                        d = c.start,
                        f = c.loose,
                        u = c.items.length,
                        s = '',
                        n = 0;
                      n < u;
                      n++
                    )
                      (D = (g = c.items[n]).checked),
                        (m = g.task),
                        (h = ''),
                        g.task &&
                          ((v = this.renderer.checkbox(D)),
                          f
                            ? g.tokens.length > 0 && g.tokens[0].type === 'text'
                              ? ((g.tokens[0].text = `${v} ${g.tokens[0].text}`),
                                g.tokens[0].tokens &&
                                  g.tokens[0].tokens.length > 0 &&
                                  g.tokens[0].tokens[0].type === 'text' &&
                                  (g.tokens[0].tokens[0].text = `${v} ${g.tokens[0].tokens[0].text}`))
                              : g.tokens.unshift({ type: 'text', text: v })
                            : (h += v)),
                        (h += this.parse(g.tokens, f)),
                        (s += this.renderer.listitem(h, m, D));
                    k += this.renderer.list(s, p, d);
                    continue;
                  case 'html':
                    k += this.renderer.html(c.text);
                    continue;
                  case 'paragraph':
                    k += this.renderer.paragraph(this.parseInline(c.tokens));
                    continue;
                  case 'text':
                    for (
                      s = c.tokens ? this.parseInline(c.tokens) : c.text;
                      e + 1 < A && t[e + 1].type === 'text';

                    )
                      s += `\n${
                        (c = t[++e]).tokens
                          ? this.parseInline(c.tokens)
                          : c.text
                      }`;
                    k += y ? this.renderer.paragraph(s) : s;
                    continue;
                  default:
                    var E = `Token with "${c.type}" type was not found.`;
                    if (this.options.silent) return void console.error(E);
                    throw new Error(E);
                }
              return k;
            },
          },
          {
            key: 'parseInline',
            value(t, e) {
              e = e || this.renderer;
              let n;
              let r;
              let u = '';
              const i = t.length;
              for (n = 0; n < i; n++)
                switch ((r = t[n]).type) {
                  case 'escape':
                    u += e.text(r.text);
                    break;
                  case 'html':
                    u += e.html(r.text);
                    break;
                  case 'link':
                    u += e.link(r.href, r.title, this.parseInline(r.tokens, e));
                    break;
                  case 'image':
                    u += e.image(r.href, r.title, r.text);
                    break;
                  case 'strong':
                    u += e.strong(this.parseInline(r.tokens, e));
                    break;
                  case 'em':
                    u += e.em(this.parseInline(r.tokens, e));
                    break;
                  case 'codespan':
                    u += e.codespan(r.text);
                    break;
                  case 'br':
                    u += e.br();
                    break;
                  case 'del':
                    u += e.del(this.parseInline(r.tokens, e));
                    break;
                  case 'text':
                    u += e.text(r.text);
                    break;
                  default:
                    var a = `Token with "${r.type}" type was not found.`;
                    if (this.options.silent) return void console.error(a);
                    throw new Error(a);
                }
              return u;
            },
          },
        ],
        [
          {
            key: 'parse',
            value(e, n) {
              return new t(n).parse(e);
            },
          },
          {
            key: 'parseInline',
            value(e, n) {
              return new t(n).parseInline(e);
            },
          },
        ]
      ),
      t
    );
  })();
  const Xo = bo;
  const Go = No;
  const Qo = Uo;
  const tl = qo;
  const el = co;
  const nl = go;
  const rl = io;
  const ul = Ma.exports.getDefaults;
  const il = Ma.exports.changeDefaults;
  const al = Ma.exports.defaults;
  function ol(t, e, n) {
    if (t == null)
      throw new Error('marked(): input parameter is undefined or null');
    if (typeof t !== 'string')
      throw new Error(
        `marked(): input parameter is of type ${Object.prototype.toString.call(
          t
        )}, string expected`
      );
    if (
      (typeof e === 'function' && ((n = e), (e = null)),
      (e = el({}, ol.defaults, e || {})),
      nl(e),
      n)
    ) {
      let r;
      const u = e.highlight;
      try {
        r = Yo.lex(t, e);
      } catch (t) {
        return n(t);
      }
      const i = function (t) {
        let i;
        if (!t)
          try {
            i = Vo.parse(r, e);
          } catch (e) {
            t = e;
          }
        return (e.highlight = u), t ? n(t) : n(null, i);
      };
      if (!u || u.length < 3) return i();
      if ((delete e.highlight, !r.length)) return i();
      let a = 0;
      return (
        ol.walkTokens(r, function (t) {
          t.type === 'code' &&
            (a++,
            setTimeout(function () {
              u(t.text, t.lang, function (e, n) {
                if (e) return i(e);
                n != null && n !== t.text && ((t.text = n), (t.escaped = !0)),
                  --a === 0 && i();
              });
            }, 0));
        }),
        void (a === 0 && i())
      );
    }
    try {
      const o = Yo.lex(t, e);
      return e.walkTokens && ol.walkTokens(o, e.walkTokens), Vo.parse(o, e);
    } catch (t) {
      if (
        ((t.message +=
          '\nPlease report this to https://github.com/markedjs/marked.'),
        e.silent)
      )
        return `<p>An error occurred:</p><pre>${rl(`${t.message}`, !0)}</pre>`;
      throw t;
    }
  }
  (ol.options = ol.setOptions =
    function (t) {
      return el(ol.defaults, t), il(ol.defaults), ol;
    }),
    (ol.getDefaults = ul),
    (ol.defaults = al),
    (ol.use = function (t) {
      const e = el({}, t);
      if (
        (t.renderer &&
          (function () {
            const n = ol.defaults.renderer || new Go();
            const r = function (e) {
              const r = n[e];
              n[e] = function () {
                for (
                  var u = arguments.length, i = new Array(u), a = 0;
                  a < u;
                  a++
                )
                  i[a] = arguments[a];
                let o = t.renderer[e].apply(n, i);
                return !1 === o && (o = r.apply(n, i)), o;
              };
            };
            for (const u in t.renderer) r(u);
            e.renderer = n;
          })(),
        t.tokenizer &&
          (function () {
            const n = ol.defaults.tokenizer || new Xo();
            const r = function (e) {
              const r = n[e];
              n[e] = function () {
                for (
                  var u = arguments.length, i = new Array(u), a = 0;
                  a < u;
                  a++
                )
                  i[a] = arguments[a];
                let o = t.tokenizer[e].apply(n, i);
                return !1 === o && (o = r.apply(n, i)), o;
              };
            };
            for (const u in t.tokenizer) r(u);
            e.tokenizer = n;
          })(),
        t.walkTokens)
      ) {
        const n = ol.defaults.walkTokens;
        e.walkTokens = function (e) {
          t.walkTokens(e), n && n(e);
        };
      }
      ol.setOptions(e);
    }),
    (ol.walkTokens = function (t, e) {
      let n;
      const r = fr(t);
      try {
        for (r.s(); !(n = r.n()).done; ) {
          const u = n.value;
          switch ((e(u), u.type)) {
            case 'table':
              var i;
              var a = fr(u.tokens.header);
              try {
                for (a.s(); !(i = a.n()).done; ) {
                  const o = i.value;
                  ol.walkTokens(o, e);
                }
              } catch (t) {
                a.e(t);
              } finally {
                a.f();
              }
              var l;
              var s = fr(u.tokens.cells);
              try {
                for (s.s(); !(l = s.n()).done; ) {
                  var c;
                  const p = fr(l.value);
                  try {
                    for (p.s(); !(c = p.n()).done; ) {
                      const d = c.value;
                      ol.walkTokens(d, e);
                    }
                  } catch (t) {
                    p.e(t);
                  } finally {
                    p.f();
                  }
                }
              } catch (t) {
                s.e(t);
              } finally {
                s.f();
              }
              break;
            case 'list':
              ol.walkTokens(u.items, e);
              break;
            default:
              u.tokens && ol.walkTokens(u.tokens, e);
          }
        }
      } catch (t) {
        r.e(t);
      } finally {
        r.f();
      }
    }),
    (ol.parseInline = function (t, e) {
      if (t == null)
        throw new Error(
          'marked.parseInline(): input parameter is undefined or null'
        );
      if (typeof t !== 'string')
        throw new Error(
          `marked.parseInline(): input parameter is of type ${Object.prototype.toString.call(
            t
          )}, string expected`
        );
      (e = el({}, ol.defaults, e || {})), nl(e);
      try {
        const n = Yo.lexInline(t, e);
        return (
          e.walkTokens && ol.walkTokens(n, e.walkTokens), Vo.parseInline(n, e)
        );
      } catch (t) {
        if (
          ((t.message +=
            '\nPlease report this to https://github.com/markedjs/marked.'),
          e.silent)
        )
          return `<p>An error occurred:</p><pre>${rl(
            `${t.message}`,
            !0
          )}</pre>`;
        throw t;
      }
    }),
    (ol.Parser = Vo),
    (ol.parser = Vo.parse),
    (ol.Renderer = Go),
    (ol.TextRenderer = Qo),
    (ol.Lexer = Yo),
    (ol.lexer = Yo.lex),
    (ol.Tokenizer = Xo),
    (ol.Slugger = tl),
    (ol.parse = ol);
  const ll = ol;
  return function () {
    let t;
    let e = null;
    function n() {
      let n;
      !e || e.closed
        ? (((e = window.open(
            'about:blank',
            'reveal.js - Notes',
            'width=1100,height=700'
          )).marked = ll),
          e.document.write(
            "<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\">\n\n\t\t<title>reveal.js - Speaker View</title>\n\n\t\t<style>\n\t\t\tbody {\n\t\t\t\tfont-family: Helvetica;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\n\t\t\t#current-slide,\n\t\t\t#upcoming-slide,\n\t\t\t#speaker-controls {\n\t\t\t\tpadding: 6px;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\t-moz-box-sizing: border-box;\n\t\t\t}\n\n\t\t\t#current-slide iframe,\n\t\t\t#upcoming-slide iframe {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tborder: 1px solid #ddd;\n\t\t\t}\n\n\t\t\t#current-slide .label,\n\t\t\t#upcoming-slide .label {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tleft: 10px;\n\t\t\t\tz-index: 2;\n\t\t\t}\n\n\t\t\t#connection-status {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tz-index: 20;\n\t\t\t\tpadding: 30% 20% 20% 20%;\n\t\t\t\tfont-size: 18px;\n\t\t\t\tcolor: #222;\n\t\t\t\tbackground: #fff;\n\t\t\t\ttext-align: center;\n\t\t\t\tbox-sizing: border-box;\n\t\t\t\tline-height: 1.4;\n\t\t\t}\n\n\t\t\t.overlay-element {\n\t\t\t\theight: 34px;\n\t\t\t\tline-height: 34px;\n\t\t\t\tpadding: 0 10px;\n\t\t\t\ttext-shadow: none;\n\t\t\t\tbackground: rgba( 220, 220, 220, 0.8 );\n\t\t\t\tcolor: #222;\n\t\t\t\tfont-size: 14px;\n\t\t\t}\n\n\t\t\t.overlay-element.interactive:hover {\n\t\t\t\tbackground: rgba( 220, 220, 220, 1 );\n\t\t\t}\n\n\t\t\t#current-slide {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 60%;\n\t\t\t\theight: 100%;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\tpadding-right: 0;\n\t\t\t}\n\n\t\t\t#upcoming-slide {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 40%;\n\t\t\t\theight: 40%;\n\t\t\t\tright: 0;\n\t\t\t\ttop: 0;\n\t\t\t}\n\n\t\t\t/* Speaker controls */\n\t\t\t#speaker-controls {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 40%;\n\t\t\t\tright: 0;\n\t\t\t\twidth: 40%;\n\t\t\t\theight: 60%;\n\t\t\t\toverflow: auto;\n\t\t\t\tfont-size: 18px;\n\t\t\t}\n\n\t\t\t\t.speaker-controls-time.hidden,\n\t\t\t\t.speaker-controls-notes.hidden {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .label,\n\t\t\t\t.speaker-controls-pace .label,\n\t\t\t\t.speaker-controls-notes .label {\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tfont-weight: normal;\n\t\t\t\t\tfont-size: 0.66em;\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\tmargin: 0;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time, .speaker-controls-pace {\n\t\t\t\t\tborder-bottom: 1px solid rgba( 200, 200, 200, 0.5 );\n\t\t\t\t\tmargin-bottom: 10px;\n\t\t\t\t\tpadding: 10px 16px;\n\t\t\t\t\tpadding-bottom: 20px;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .reset-button {\n\t\t\t\t\topacity: 0;\n\t\t\t\t\tfloat: right;\n\t\t\t\t\tcolor: #666;\n\t\t\t\t\ttext-decoration: none;\n\t\t\t\t}\n\t\t\t\t.speaker-controls-time:hover .reset-button {\n\t\t\t\t\topacity: 1;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer,\n\t\t\t\t.speaker-controls-time .clock {\n\t\t\t\t\twidth: 50%;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer,\n\t\t\t\t.speaker-controls-time .clock,\n\t\t\t\t.speaker-controls-time .pacing .hours-value,\n\t\t\t\t.speaker-controls-time .pacing .minutes-value,\n\t\t\t\t.speaker-controls-time .pacing .seconds-value {\n\t\t\t\t\tfont-size: 1.9em;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .timer {\n\t\t\t\t\tfloat: left;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .clock {\n\t\t\t\t\tfloat: right;\n\t\t\t\t\ttext-align: right;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time span.mute {\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing-title {\n\t\t\t\t\tmargin-top: 5px;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.ahead {\n\t\t\t\t\tcolor: blue;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.on-track {\n\t\t\t\t\tcolor: green;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-time .pacing.behind {\n\t\t\t\t\tcolor: red;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-notes {\n\t\t\t\t\tpadding: 10px 16px;\n\t\t\t\t}\n\n\t\t\t\t.speaker-controls-notes .value {\n\t\t\t\t\tmargin-top: 5px;\n\t\t\t\t\tline-height: 1.4;\n\t\t\t\t\tfont-size: 1.2em;\n\t\t\t\t}\n\n\t\t\t/* Layout selector */\n\t\t\t#speaker-layout {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 10px;\n\t\t\t\tright: 10px;\n\t\t\t\tcolor: #222;\n\t\t\t\tz-index: 10;\n\t\t\t}\n\t\t\t\t#speaker-layout select {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\tleft: 0;\n\t\t\t\t\tborder: 0;\n\t\t\t\t\tbox-shadow: 0;\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t\topacity: 0;\n\n\t\t\t\t\tfont-size: 1em;\n\t\t\t\t\tbackground-color: transparent;\n\n\t\t\t\t\t-moz-appearance: none;\n\t\t\t\t\t-webkit-appearance: none;\n\t\t\t\t\t-webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n\t\t\t\t}\n\n\t\t\t\t#speaker-layout select:focus {\n\t\t\t\t\toutline: none;\n\t\t\t\t\tbox-shadow: none;\n\t\t\t\t}\n\n\t\t\t.clear {\n\t\t\t\tclear: both;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Wide */\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\n\t\t\t\twidth: 50%;\n\t\t\t\theight: 45%;\n\t\t\t\tpadding: 6px;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #current-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #upcoming-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 50%;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"wide\"] #speaker-controls {\n\t\t\t\ttop: 45%;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 50%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Tall */\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\n\t\t\t\twidth: 45%;\n\t\t\t\theight: 50%;\n\t\t\t\tpadding: 6px;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #current-slide {\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #upcoming-slide {\n\t\t\t\ttop: 50%;\n\t\t\t\tleft: 0;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"tall\"] #speaker-controls {\n\t\t\t\tpadding-top: 40px;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 45%;\n\t\t\t\twidth: 55%;\n\t\t\t\theight: 100%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t/* Speaker layout: Notes only */\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #current-slide,\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #upcoming-slide {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\n\t\t\tbody[data-speaker-layout=\"notes-only\"] #speaker-controls {\n\t\t\t\tpadding-top: 40px;\n\t\t\t\ttop: 0;\n\t\t\t\tleft: 0;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t\tfont-size: 1.25em;\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 1080px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 16px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 900px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 14px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t@media screen and (max-width: 800px) {\n\t\t\t\tbody[data-speaker-layout=\"default\"] #speaker-controls {\n\t\t\t\t\tfont-size: 12px;\n\t\t\t\t}\n\t\t\t}\n\n\t\t</style>\n\t</head>\n\n\t<body>\n\n\t\t<div id=\"connection-status\">Loading speaker view...</div>\n\n\t\t<div id=\"current-slide\"></div>\n\t\t<div id=\"upcoming-slide\"><span class=\"overlay-element label\">Upcoming</span></div>\n\t\t<div id=\"speaker-controls\">\n\t\t\t<div class=\"speaker-controls-time\">\n\t\t\t\t<h4 class=\"label\">Time <span class=\"reset-button\">Click to Reset</span></h4>\n\t\t\t\t<div class=\"clock\">\n\t\t\t\t\t<span class=\"clock-value\">0:00 AM</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"timer\">\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"clear\"></div>\n\n\t\t\t\t<h4 class=\"label pacing-title\" style=\"display: none\">Pacing – Time to finish current slide</h4>\n\t\t\t\t<div class=\"pacing\" style=\"display: none\">\n\t\t\t\t\t<span class=\"hours-value\">00</span><span class=\"minutes-value\">:00</span><span class=\"seconds-value\">:00</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"speaker-controls-notes hidden\">\n\t\t\t\t<h4 class=\"label\">Notes</h4>\n\t\t\t\t<div class=\"value\"></div>\n\t\t\t</div>\n\t\t</div>\n\t\t<div id=\"speaker-layout\" class=\"overlay-element interactive\">\n\t\t\t<span class=\"speaker-layout-label\"></span>\n\t\t\t<select class=\"speaker-layout-dropdown\"></select>\n\t\t</div>\n\n\t\t<script>\n\n\t\t\t(function() {\n\n\t\t\t\tvar notes,\n\t\t\t\t\tnotesValue,\n\t\t\t\t\tcurrentState,\n\t\t\t\t\tcurrentSlide,\n\t\t\t\t\tupcomingSlide,\n\t\t\t\t\tlayoutLabel,\n\t\t\t\t\tlayoutDropdown,\n\t\t\t\t\tpendingCalls = {},\n\t\t\t\t\tlastRevealApiCallId = 0,\n\t\t\t\t\tconnected = false;\n\n\t\t\t\tvar SPEAKER_LAYOUTS = {\n\t\t\t\t\t'default': 'Default',\n\t\t\t\t\t'wide': 'Wide',\n\t\t\t\t\t'tall': 'Tall',\n\t\t\t\t\t'notes-only': 'Notes only'\n\t\t\t\t};\n\n\t\t\t\tsetupLayout();\n\n\t\t\t\tvar connectionStatus = document.querySelector( '#connection-status' );\n\t\t\t\tvar connectionTimeout = setTimeout( function() {\n\t\t\t\t\tconnectionStatus.innerHTML = 'Error connecting to main window.<br>Please try closing and reopening the speaker view.';\n\t\t\t\t}, 5000 );\n\n\t\t\t\twindow.addEventListener( 'message', function( event ) {\n\n\t\t\t\t\tclearTimeout( connectionTimeout );\n\t\t\t\t\tconnectionStatus.style.display = 'none';\n\n\t\t\t\t\tvar data = JSON.parse( event.data );\n\n\t\t\t\t\t// The overview mode is only useful to the reveal.js instance\n\t\t\t\t\t// where navigation occurs so we don't sync it\n\t\t\t\t\tif( data.state ) delete data.state.overview;\n\n\t\t\t\t\t// Messages sent by the notes plugin inside of the main window\n\t\t\t\t\tif( data && data.namespace === 'reveal-notes' ) {\n\t\t\t\t\t\tif( data.type === 'connect' ) {\n\t\t\t\t\t\t\thandleConnectMessage( data );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( data.type === 'state' ) {\n\t\t\t\t\t\t\thandleStateMessage( data );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( data.type === 'return' ) {\n\t\t\t\t\t\t\tpendingCalls[data.callId](data.result);\n\t\t\t\t\t\t\tdelete pendingCalls[data.callId];\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t// Messages sent by the reveal.js inside of the current slide preview\n\t\t\t\t\telse if( data && data.namespace === 'reveal' ) {\n\t\t\t\t\t\tif( /ready/.test( data.eventName ) ) {\n\t\t\t\t\t\t\t// Send a message back to notify that the handshake is complete\n\t\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ namespace: 'reveal-notes', type: 'connected'} ), '*' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse if( /slidechanged|fragmentshown|fragmenthidden|paused|resumed/.test( data.eventName ) && currentState !== JSON.stringify( data.state ) ) {\n\n\t\t\t\t\t\t\twindow.opener.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ]} ), '*' );\n\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t} );\n\n\t\t\t\t/**\n\t\t\t\t * Asynchronously calls the Reveal.js API of the main frame.\n\t\t\t\t */\n\t\t\t\tfunction callRevealApi( methodName, methodArguments, callback ) {\n\n\t\t\t\t\tvar callId = ++lastRevealApiCallId;\n\t\t\t\t\tpendingCalls[callId] = callback;\n\t\t\t\t\twindow.opener.postMessage( JSON.stringify( {\n\t\t\t\t\t\tnamespace: 'reveal-notes',\n\t\t\t\t\t\ttype: 'call',\n\t\t\t\t\t\tcallId: callId,\n\t\t\t\t\t\tmethodName: methodName,\n\t\t\t\t\t\targuments: methodArguments\n\t\t\t\t\t} ), '*' );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Called when the main window is trying to establish a\n\t\t\t\t * connection.\n\t\t\t\t */\n\t\t\t\tfunction handleConnectMessage( data ) {\n\n\t\t\t\t\tif( connected === false ) {\n\t\t\t\t\t\tconnected = true;\n\n\t\t\t\t\t\tsetupIframes( data );\n\t\t\t\t\t\tsetupKeyboard();\n\t\t\t\t\t\tsetupNotes();\n\t\t\t\t\t\tsetupTimer();\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Called when the main window sends an updated state.\n\t\t\t\t */\n\t\t\t\tfunction handleStateMessage( data ) {\n\n\t\t\t\t\t// Store the most recently set state to avoid circular loops\n\t\t\t\t\t// applying the same state\n\t\t\t\t\tcurrentState = JSON.stringify( data.state );\n\n\t\t\t\t\t// No need for updating the notes in case of fragment changes\n\t\t\t\t\tif ( data.notes ) {\n\t\t\t\t\t\tnotes.classList.remove( 'hidden' );\n\t\t\t\t\t\tnotesValue.style.whiteSpace = data.whitespace;\n\t\t\t\t\t\tif( data.markdown ) {\n\t\t\t\t\t\t\tnotesValue.innerHTML = marked( data.notes );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tnotesValue.innerHTML = data.notes;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\telse {\n\t\t\t\t\t\tnotes.classList.add( 'hidden' );\n\t\t\t\t\t}\n\n\t\t\t\t\t// Update the note slides\n\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'setState', args: [ data.state ] }), '*' );\n\t\t\t\t\tupcomingSlide.contentWindow.postMessage( JSON.stringify({ method: 'next' }), '*' );\n\n\t\t\t\t}\n\n\t\t\t\t// Limit to max one state update per X ms\n\t\t\t\thandleStateMessage = debounce( handleStateMessage, 200 );\n\n\t\t\t\t/**\n\t\t\t\t * Forward keyboard events to the current slide window.\n\t\t\t\t * This enables keyboard events to work even if focus\n\t\t\t\t * isn't set on the current slide iframe.\n\t\t\t\t *\n\t\t\t\t * Block F5 default handling, it reloads and disconnects\n\t\t\t\t * the speaker notes window.\n\t\t\t\t */\n\t\t\t\tfunction setupKeyboard() {\n\n\t\t\t\t\tdocument.addEventListener( 'keydown', function( event ) {\n\t\t\t\t\t\tif( event.keyCode === 116 || ( event.metaKey && event.keyCode === 82 ) ) {\n\t\t\t\t\t\t\tevent.preventDefault();\n\t\t\t\t\t\t\treturn false;\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcurrentSlide.contentWindow.postMessage( JSON.stringify({ method: 'triggerKey', args: [ event.keyCode ] }), '*' );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Creates the preview iframes.\n\t\t\t\t */\n\t\t\t\tfunction setupIframes( data ) {\n\n\t\t\t\t\tvar params = [\n\t\t\t\t\t\t'receiver',\n\t\t\t\t\t\t'progress=false',\n\t\t\t\t\t\t'history=false',\n\t\t\t\t\t\t'transition=none',\n\t\t\t\t\t\t'autoSlide=0',\n\t\t\t\t\t\t'backgroundTransition=none'\n\t\t\t\t\t].join( '&' );\n\n\t\t\t\t\tvar urlSeparator = /\\?/.test(data.url) ? '&' : '?';\n\t\t\t\t\tvar hash = '#/' + data.state.indexh + '/' + data.state.indexv;\n\t\t\t\t\tvar currentURL = data.url + urlSeparator + params + '&postMessageEvents=true' + hash;\n\t\t\t\t\tvar upcomingURL = data.url + urlSeparator + params + '&controls=false' + hash;\n\n\t\t\t\t\tcurrentSlide = document.createElement( 'iframe' );\n\t\t\t\t\tcurrentSlide.setAttribute( 'width', 1280 );\n\t\t\t\t\tcurrentSlide.setAttribute( 'height', 1024 );\n\t\t\t\t\tcurrentSlide.setAttribute( 'src', currentURL );\n\t\t\t\t\tdocument.querySelector( '#current-slide' ).appendChild( currentSlide );\n\n\t\t\t\t\tupcomingSlide = document.createElement( 'iframe' );\n\t\t\t\t\tupcomingSlide.setAttribute( 'width', 640 );\n\t\t\t\t\tupcomingSlide.setAttribute( 'height', 512 );\n\t\t\t\t\tupcomingSlide.setAttribute( 'src', upcomingURL );\n\t\t\t\t\tdocument.querySelector( '#upcoming-slide' ).appendChild( upcomingSlide );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Setup the notes UI.\n\t\t\t\t */\n\t\t\t\tfunction setupNotes() {\n\n\t\t\t\t\tnotes = document.querySelector( '.speaker-controls-notes' );\n\t\t\t\t\tnotesValue = document.querySelector( '.speaker-controls-notes .value' );\n\n\t\t\t\t}\n\n\t\t\t\tfunction getTimings( callback ) {\n\n\t\t\t\t\tcallRevealApi( 'getSlidesAttributes', [], function ( slideAttributes ) {\n\t\t\t\t\t\tcallRevealApi( 'getConfig', [], function ( config ) {\n\t\t\t\t\t\t\tvar totalTime = config.totalTime;\n\t\t\t\t\t\t\tvar minTimePerSlide = config.minimumTimePerSlide || 0;\n\t\t\t\t\t\t\tvar defaultTiming = config.defaultTiming;\n\t\t\t\t\t\t\tif ((defaultTiming == null) && (totalTime == null)) {\n\t\t\t\t\t\t\t\tcallback(null);\n\t\t\t\t\t\t\t\treturn;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t// Setting totalTime overrides defaultTiming\n\t\t\t\t\t\t\tif (totalTime) {\n\t\t\t\t\t\t\t\tdefaultTiming = 0;\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar timings = [];\n\t\t\t\t\t\t\tfor ( var i in slideAttributes ) {\n\t\t\t\t\t\t\t\tvar slide = slideAttributes[ i ];\n\t\t\t\t\t\t\t\tvar timing = defaultTiming;\n\t\t\t\t\t\t\t\tif( slide.hasOwnProperty( 'data-timing' )) {\n\t\t\t\t\t\t\t\t\tvar t = slide[ 'data-timing' ];\n\t\t\t\t\t\t\t\t\ttiming = parseInt(t);\n\t\t\t\t\t\t\t\t\tif( isNaN(timing) ) {\n\t\t\t\t\t\t\t\t\t\tconsole.warn(\"Could not parse timing '\" + t + \"' of slide \" + i + \"; using default of \" + defaultTiming);\n\t\t\t\t\t\t\t\t\t\ttiming = defaultTiming;\n\t\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\ttimings.push(timing);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tif ( totalTime ) {\n\t\t\t\t\t\t\t\t// After we've allocated time to individual slides, we summarize it and\n\t\t\t\t\t\t\t\t// subtract it from the total time\n\t\t\t\t\t\t\t\tvar remainingTime = totalTime - timings.reduce( function(a, b) { return a + b; }, 0 );\n\t\t\t\t\t\t\t\t// The remaining time is divided by the number of slides that have 0 seconds\n\t\t\t\t\t\t\t\t// allocated at the moment, giving the average time-per-slide on the remaining slides\n\t\t\t\t\t\t\t\tvar remainingSlides = (timings.filter( function(x) { return x == 0 }) ).length\n\t\t\t\t\t\t\t\tvar timePerSlide = Math.round( remainingTime / remainingSlides, 0 )\n\t\t\t\t\t\t\t\t// And now we replace every zero-value timing with that average\n\t\t\t\t\t\t\t\ttimings = timings.map( function(x) { return (x==0 ? timePerSlide : x) } );\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tvar slidesUnderMinimum = timings.filter( function(x) { return (x < minTimePerSlide) } ).length\n\t\t\t\t\t\t\tif ( slidesUnderMinimum ) {\n\t\t\t\t\t\t\t\tmessage = \"The pacing time for \" + slidesUnderMinimum + \" slide(s) is under the configured minimum of \" + minTimePerSlide + \" seconds. Check the data-timing attribute on individual slides, or consider increasing the totalTime or minimumTimePerSlide configuration options (or removing some slides).\";\n\t\t\t\t\t\t\t\talert(message);\n\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\tcallback( timings );\n\t\t\t\t\t\t} );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Return the number of seconds allocated for presenting\n\t\t\t\t * all slides up to and including this one.\n\t\t\t\t */\n\t\t\t\tfunction getTimeAllocated( timings, callback ) {\n\n\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\tvar allocated = 0;\n\t\t\t\t\t\tfor (var i in timings.slice(0, currentSlide + 1)) {\n\t\t\t\t\t\t\tallocated += timings[i];\n\t\t\t\t\t\t}\n\t\t\t\t\t\tcallback( allocated );\n\t\t\t\t\t} );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Create the timer and clock and start updating them\n\t\t\t\t * at an interval.\n\t\t\t\t */\n\t\t\t\tfunction setupTimer() {\n\n\t\t\t\t\tvar start = new Date(),\n\t\t\t\t\ttimeEl = document.querySelector( '.speaker-controls-time' ),\n\t\t\t\t\tclockEl = timeEl.querySelector( '.clock-value' ),\n\t\t\t\t\thoursEl = timeEl.querySelector( '.hours-value' ),\n\t\t\t\t\tminutesEl = timeEl.querySelector( '.minutes-value' ),\n\t\t\t\t\tsecondsEl = timeEl.querySelector( '.seconds-value' ),\n\t\t\t\t\tpacingTitleEl = timeEl.querySelector( '.pacing-title' ),\n\t\t\t\t\tpacingEl = timeEl.querySelector( '.pacing' ),\n\t\t\t\t\tpacingHoursEl = pacingEl.querySelector( '.hours-value' ),\n\t\t\t\t\tpacingMinutesEl = pacingEl.querySelector( '.minutes-value' ),\n\t\t\t\t\tpacingSecondsEl = pacingEl.querySelector( '.seconds-value' );\n\n\t\t\t\t\tvar timings = null;\n\t\t\t\t\tgetTimings( function ( _timings ) {\n\n\t\t\t\t\t\ttimings = _timings;\n\t\t\t\t\t\tif (_timings !== null) {\n\t\t\t\t\t\t\tpacingTitleEl.style.removeProperty('display');\n\t\t\t\t\t\t\tpacingEl.style.removeProperty('display');\n\t\t\t\t\t\t}\n\n\t\t\t\t\t\t// Update once directly\n\t\t\t\t\t\t_updateTimer();\n\n\t\t\t\t\t\t// Then update every second\n\t\t\t\t\t\tsetInterval( _updateTimer, 1000 );\n\n\t\t\t\t\t} );\n\n\n\t\t\t\t\tfunction _resetTimer() {\n\n\t\t\t\t\t\tif (timings == null) {\n\t\t\t\t\t\t\tstart = new Date();\n\t\t\t\t\t\t\t_updateTimer();\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t// Reset timer to beginning of current slide\n\t\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n\t\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\n\t\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\n\t\t\t\t\t\t\t\t\tvar previousSlidesTiming = slideEndTiming - currentSlideTiming;\n\t\t\t\t\t\t\t\t\tvar now = new Date();\n\t\t\t\t\t\t\t\t\tstart = new Date(now.getTime() - previousSlidesTiming);\n\t\t\t\t\t\t\t\t\t_updateTimer();\n\t\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\ttimeEl.addEventListener( 'click', function() {\n\t\t\t\t\t\t_resetTimer();\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t} );\n\n\t\t\t\t\tfunction _displayTime( hrEl, minEl, secEl, time) {\n\n\t\t\t\t\t\tvar sign = Math.sign(time) == -1 ? \"-\" : \"\";\n\t\t\t\t\t\ttime = Math.abs(Math.round(time / 1000));\n\t\t\t\t\t\tvar seconds = time % 60;\n\t\t\t\t\t\tvar minutes = Math.floor( time / 60 ) % 60 ;\n\t\t\t\t\t\tvar hours = Math.floor( time / ( 60 * 60 )) ;\n\t\t\t\t\t\thrEl.innerHTML = sign + zeroPadInteger( hours );\n\t\t\t\t\t\tif (hours == 0) {\n\t\t\t\t\t\t\thrEl.classList.add( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\thrEl.classList.remove( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\tminEl.innerHTML = ':' + zeroPadInteger( minutes );\n\t\t\t\t\t\tif (hours == 0 && minutes == 0) {\n\t\t\t\t\t\t\tminEl.classList.add( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\tminEl.classList.remove( 'mute' );\n\t\t\t\t\t\t}\n\t\t\t\t\t\tsecEl.innerHTML = ':' + zeroPadInteger( seconds );\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction _updateTimer() {\n\n\t\t\t\t\t\tvar diff, hours, minutes, seconds,\n\t\t\t\t\t\tnow = new Date();\n\n\t\t\t\t\t\tdiff = now.getTime() - start.getTime();\n\n\t\t\t\t\t\tclockEl.innerHTML = now.toLocaleTimeString( 'en-US', { hour12: true, hour: '2-digit', minute:'2-digit' } );\n\t\t\t\t\t\t_displayTime( hoursEl, minutesEl, secondsEl, diff );\n\t\t\t\t\t\tif (timings !== null) {\n\t\t\t\t\t\t\t_updatePacing(diff);\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t\tfunction _updatePacing(diff) {\n\n\t\t\t\t\t\tgetTimeAllocated( timings, function ( slideEndTimingSeconds ) {\n\t\t\t\t\t\t\tvar slideEndTiming = slideEndTimingSeconds * 1000;\n\n\t\t\t\t\t\t\tcallRevealApi( 'getSlidePastCount', [], function ( currentSlide ) {\n\t\t\t\t\t\t\t\tvar currentSlideTiming = timings[currentSlide] * 1000;\n\t\t\t\t\t\t\t\tvar timeLeftCurrentSlide = slideEndTiming - diff;\n\t\t\t\t\t\t\t\tif (timeLeftCurrentSlide < 0) {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing behind';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse if (timeLeftCurrentSlide < currentSlideTiming) {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing on-track';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\telse {\n\t\t\t\t\t\t\t\t\tpacingEl.className = 'pacing ahead';\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_displayTime( pacingHoursEl, pacingMinutesEl, pacingSecondsEl, timeLeftCurrentSlide );\n\t\t\t\t\t\t\t} );\n\t\t\t\t\t\t} );\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Sets up the speaker view layout and layout selector.\n\t\t\t\t */\n\t\t\t\tfunction setupLayout() {\n\n\t\t\t\t\tlayoutDropdown = document.querySelector( '.speaker-layout-dropdown' );\n\t\t\t\t\tlayoutLabel = document.querySelector( '.speaker-layout-label' );\n\n\t\t\t\t\t// Render the list of available layouts\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\n\t\t\t\t\t\tvar option = document.createElement( 'option' );\n\t\t\t\t\t\toption.setAttribute( 'value', id );\n\t\t\t\t\t\toption.textContent = SPEAKER_LAYOUTS[ id ];\n\t\t\t\t\t\tlayoutDropdown.appendChild( option );\n\t\t\t\t\t}\n\n\t\t\t\t\t// Monitor the dropdown for changes\n\t\t\t\t\tlayoutDropdown.addEventListener( 'change', function( event ) {\n\n\t\t\t\t\t\tsetLayout( layoutDropdown.value );\n\n\t\t\t\t\t}, false );\n\n\t\t\t\t\t// Restore any currently persisted layout\n\t\t\t\t\tsetLayout( getLayout() );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Sets a new speaker view layout. The layout is persisted\n\t\t\t\t * in local storage.\n\t\t\t\t */\n\t\t\t\tfunction setLayout( value ) {\n\n\t\t\t\t\tvar title = SPEAKER_LAYOUTS[ value ];\n\n\t\t\t\t\tlayoutLabel.innerHTML = 'Layout' + ( title ? ( ': ' + title ) : '' );\n\t\t\t\t\tlayoutDropdown.value = value;\n\n\t\t\t\t\tdocument.body.setAttribute( 'data-speaker-layout', value );\n\n\t\t\t\t\t// Persist locally\n\t\t\t\t\tif( supportsLocalStorage() ) {\n\t\t\t\t\t\twindow.localStorage.setItem( 'reveal-speaker-layout', value );\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Returns the ID of the most recently set speaker layout\n\t\t\t\t * or our default layout if none has been set.\n\t\t\t\t */\n\t\t\t\tfunction getLayout() {\n\n\t\t\t\t\tif( supportsLocalStorage() ) {\n\t\t\t\t\t\tvar layout = window.localStorage.getItem( 'reveal-speaker-layout' );\n\t\t\t\t\t\tif( layout ) {\n\t\t\t\t\t\t\treturn layout;\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\n\t\t\t\t\t// Default to the first record in the layouts hash\n\t\t\t\t\tfor( var id in SPEAKER_LAYOUTS ) {\n\t\t\t\t\t\treturn id;\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tfunction supportsLocalStorage() {\n\n\t\t\t\t\ttry {\n\t\t\t\t\t\tlocalStorage.setItem('test', 'test');\n\t\t\t\t\t\tlocalStorage.removeItem('test');\n\t\t\t\t\t\treturn true;\n\t\t\t\t\t}\n\t\t\t\t\tcatch( e ) {\n\t\t\t\t\t\treturn false;\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\tfunction zeroPadInteger( num ) {\n\n\t\t\t\t\tvar str = '00' + parseInt( num );\n\t\t\t\t\treturn str.substring( str.length - 2 );\n\n\t\t\t\t}\n\n\t\t\t\t/**\n\t\t\t\t * Limits the frequency at which a function can be called.\n\t\t\t\t */\n\t\t\t\tfunction debounce( fn, ms ) {\n\n\t\t\t\t\tvar lastTime = 0,\n\t\t\t\t\t\ttimeout;\n\n\t\t\t\t\treturn function() {\n\n\t\t\t\t\t\tvar args = arguments;\n\t\t\t\t\t\tvar context = this;\n\n\t\t\t\t\t\tclearTimeout( timeout );\n\n\t\t\t\t\t\tvar timeSinceLastCall = Date.now() - lastTime;\n\t\t\t\t\t\tif( timeSinceLastCall > ms ) {\n\t\t\t\t\t\t\tfn.apply( context, args );\n\t\t\t\t\t\t\tlastTime = Date.now();\n\t\t\t\t\t\t}\n\t\t\t\t\t\telse {\n\t\t\t\t\t\t\ttimeout = setTimeout( function() {\n\t\t\t\t\t\t\t\tfn.apply( context, args );\n\t\t\t\t\t\t\t\tlastTime = Date.now();\n\t\t\t\t\t\t\t}, ms - timeSinceLastCall );\n\t\t\t\t\t\t}\n\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t})();\n\n\t\t</script>\n\t</body>\n</html>"
          ),
          e
            ? ((n = setInterval(function () {
                e.postMessage(
                  JSON.stringify({
                    namespace: 'reveal-notes',
                    type: 'connect',
                    url: `${window.location.protocol}//${window.location.host}${window.location.pathname}${window.location.search}`,
                    state: t.getState(),
                  }),
                  '*'
                );
              }, 500)),
              window.addEventListener('message', function (u) {
                let i;
                let a;
                let o;
                let l;
                const s = JSON.parse(u.data);
                s &&
                  s.namespace === 'reveal-notes' &&
                  s.type === 'connected' &&
                  (clearInterval(n),
                  t.on('slidechanged', r),
                  t.on('fragmentshown', r),
                  t.on('fragmenthidden', r),
                  t.on('overviewhidden', r),
                  t.on('overviewshown', r),
                  t.on('paused', r),
                  t.on('resumed', r),
                  r()),
                  s &&
                    s.namespace === 'reveal-notes' &&
                    s.type === 'call' &&
                    ((i = s.methodName),
                    (a = s.arguments),
                    (o = s.callId),
                    (l = t[i].apply(t, a)),
                    e.postMessage(
                      JSON.stringify({
                        namespace: 'reveal-notes',
                        type: 'return',
                        result: l,
                        callId: o,
                      }),
                      '*'
                    ));
              }))
            : alert(
                'Speaker view popup failed to open. Please make sure popups are allowed and reopen the speaker view.'
              ))
        : e.focus();
      function r(n) {
        const r = t.getCurrentSlide();
        let u = r.querySelector('aside.notes');
        const i = r.querySelector('.current-fragment');
        const a = {
          namespace: 'reveal-notes',
          type: 'state',
          notes: '',
          markdown: !1,
          whitespace: 'normal',
          state: t.getState(),
        };
        if (
          (r.hasAttribute('data-notes') &&
            ((a.notes = r.getAttribute('data-notes')),
            (a.whitespace = 'pre-wrap')),
          i)
        ) {
          const o = i.querySelector('aside.notes');
          o
            ? (u = o)
            : i.hasAttribute('data-notes') &&
              ((a.notes = i.getAttribute('data-notes')),
              (a.whitespace = 'pre-wrap'),
              (u = null));
        }
        u &&
          ((a.notes = u.innerHTML),
          (a.markdown = typeof u.getAttribute('data-markdown') === 'string')),
          e.postMessage(JSON.stringify(a), '*');
      }
    }
    return {
      id: 'notes',
      init(e) {
        (t = e),
          /receiver/i.test(window.location.search) ||
            (window.location.search.match(/(\?|\&)notes/gi) !== null && n(),
            t.addKeyBinding(
              { keyCode: 83, key: 'S', description: 'Speaker notes view' },
              function () {
                n();
              }
            ));
      },
      open: n,
    };
  };
});
