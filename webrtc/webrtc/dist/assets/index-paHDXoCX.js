;(function () {
  const o = document.createElement('link').relList
  if (o && o.supports && o.supports('modulepreload')) return
  for (const d of document.querySelectorAll('link[rel="modulepreload"]')) r(d)
  new MutationObserver((d) => {
    for (const S of d) if (S.type === 'childList') for (const R of S.addedNodes) R.tagName === 'LINK' && R.rel === 'modulepreload' && r(R)
  }).observe(document, { childList: !0, subtree: !0 })
  function h(d) {
    const S = {}
    return d.integrity && (S.integrity = d.integrity), d.referrerPolicy && (S.referrerPolicy = d.referrerPolicy), d.crossOrigin === 'use-credentials' ? (S.credentials = 'include') : d.crossOrigin === 'anonymous' ? (S.credentials = 'omit') : (S.credentials = 'same-origin'), S
  }
  function r(d) {
    if (d.ep) return
    d.ep = !0
    const S = h(d)
    fetch(d.href, S)
  }
})()
function Sm(c) {
  return c && c.__esModule && Object.prototype.hasOwnProperty.call(c, 'default') ? c.default : c
}
var yf = { exports: {} },
  Cu = {}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var yd
function pm() {
  if (yd) return Cu
  yd = 1
  var c = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.fragment')
  function h(r, d, S) {
    var R = null
    if ((S !== void 0 && (R = '' + S), d.key !== void 0 && (R = '' + d.key), 'key' in d)) {
      S = {}
      for (var _ in d) _ !== 'key' && (S[_] = d[_])
    } else S = d
    return (d = S.ref), { $$typeof: c, type: r, key: R, ref: d !== void 0 ? d : null, props: S }
  }
  return (Cu.Fragment = o), (Cu.jsx = h), (Cu.jsxs = h), Cu
}
var gd
function bm() {
  return gd || ((gd = 1), (yf.exports = pm())), yf.exports
}
var yt = bm(),
  gf = { exports: {} },
  Hu = {},
  Sf = { exports: {} },
  pf = {}
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Sd
function Em() {
  return (
    Sd ||
      ((Sd = 1),
      (function (c) {
        function o(G, tt) {
          var W = G.length
          G.push(tt)
          t: for (; 0 < W; ) {
            var St = (W - 1) >>> 1,
              v = G[St]
            if (0 < d(v, tt)) (G[St] = tt), (G[W] = v), (W = St)
            else break t
          }
        }
        function h(G) {
          return G.length === 0 ? null : G[0]
        }
        function r(G) {
          if (G.length === 0) return null
          var tt = G[0],
            W = G.pop()
          if (W !== tt) {
            G[0] = W
            t: for (var St = 0, v = G.length, N = v >>> 1; St < N; ) {
              var k = 2 * (St + 1) - 1,
                K = G[k],
                X = k + 1,
                ft = G[X]
              if (0 > d(K, W)) X < v && 0 > d(ft, K) ? ((G[St] = ft), (G[X] = W), (St = X)) : ((G[St] = K), (G[k] = W), (St = k))
              else if (X < v && 0 > d(ft, W)) (G[St] = ft), (G[X] = W), (St = X)
              else break t
            }
          }
          return tt
        }
        function d(G, tt) {
          var W = G.sortIndex - tt.sortIndex
          return W !== 0 ? W : G.id - tt.id
        }
        if (((c.unstable_now = void 0), typeof performance == 'object' && typeof performance.now == 'function')) {
          var S = performance
          c.unstable_now = function () {
            return S.now()
          }
        } else {
          var R = Date,
            _ = R.now()
          c.unstable_now = function () {
            return R.now() - _
          }
        }
        var p = [],
          m = [],
          H = 1,
          B = null,
          O = 3,
          x = !1,
          D = !1,
          Y = !1,
          j = typeof setTimeout == 'function' ? setTimeout : null,
          L = typeof clearTimeout == 'function' ? clearTimeout : null,
          q = typeof setImmediate < 'u' ? setImmediate : null
        function I(G) {
          for (var tt = h(m); tt !== null; ) {
            if (tt.callback === null) r(m)
            else if (tt.startTime <= G) r(m), (tt.sortIndex = tt.expirationTime), o(p, tt)
            else break
            tt = h(m)
          }
        }
        function ht(G) {
          if (((Y = !1), I(G), !D))
            if (h(p) !== null) (D = !0), qe()
            else {
              var tt = h(m)
              tt !== null && Pt(ht, tt.startTime - G)
            }
        }
        var F = !1,
          Tt = -1,
          qt = 5,
          Xt = -1
        function Q() {
          return !(c.unstable_now() - Xt < qt)
        }
        function et() {
          if (F) {
            var G = c.unstable_now()
            Xt = G
            var tt = !0
            try {
              t: {
                ;(D = !1), Y && ((Y = !1), L(Tt), (Tt = -1)), (x = !0)
                var W = O
                try {
                  e: {
                    for (I(G), B = h(p); B !== null && !(B.expirationTime > G && Q()); ) {
                      var St = B.callback
                      if (typeof St == 'function') {
                        ;(B.callback = null), (O = B.priorityLevel)
                        var v = St(B.expirationTime <= G)
                        if (((G = c.unstable_now()), typeof v == 'function')) {
                          ;(B.callback = v), I(G), (tt = !0)
                          break e
                        }
                        B === h(p) && r(p), I(G)
                      } else r(p)
                      B = h(p)
                    }
                    if (B !== null) tt = !0
                    else {
                      var N = h(m)
                      N !== null && Pt(ht, N.startTime - G), (tt = !1)
                    }
                  }
                  break t
                } finally {
                  ;(B = null), (O = W), (x = !1)
                }
                tt = void 0
              }
            } finally {
              tt ? $t() : (F = !1)
            }
          }
        }
        var $t
        if (typeof q == 'function')
          $t = function () {
            q(et)
          }
        else if (typeof MessageChannel < 'u') {
          var Be = new MessageChannel(),
            Oe = Be.port2
          ;(Be.port1.onmessage = et),
            ($t = function () {
              Oe.postMessage(null)
            })
        } else
          $t = function () {
            j(et, 0)
          }
        function qe() {
          F || ((F = !0), $t())
        }
        function Pt(G, tt) {
          Tt = j(function () {
            G(c.unstable_now())
          }, tt)
        }
        ;(c.unstable_IdlePriority = 5),
          (c.unstable_ImmediatePriority = 1),
          (c.unstable_LowPriority = 4),
          (c.unstable_NormalPriority = 3),
          (c.unstable_Profiling = null),
          (c.unstable_UserBlockingPriority = 2),
          (c.unstable_cancelCallback = function (G) {
            G.callback = null
          }),
          (c.unstable_continueExecution = function () {
            D || x || ((D = !0), qe())
          }),
          (c.unstable_forceFrameRate = function (G) {
            0 > G || 125 < G ? console.error('forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported') : (qt = 0 < G ? Math.floor(1e3 / G) : 5)
          }),
          (c.unstable_getCurrentPriorityLevel = function () {
            return O
          }),
          (c.unstable_getFirstCallbackNode = function () {
            return h(p)
          }),
          (c.unstable_next = function (G) {
            switch (O) {
              case 1:
              case 2:
              case 3:
                var tt = 3
                break
              default:
                tt = O
            }
            var W = O
            O = tt
            try {
              return G()
            } finally {
              O = W
            }
          }),
          (c.unstable_pauseExecution = function () {}),
          (c.unstable_requestPaint = function () {}),
          (c.unstable_runWithPriority = function (G, tt) {
            switch (G) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break
              default:
                G = 3
            }
            var W = O
            O = G
            try {
              return tt()
            } finally {
              O = W
            }
          }),
          (c.unstable_scheduleCallback = function (G, tt, W) {
            var St = c.unstable_now()
            switch ((typeof W == 'object' && W !== null ? ((W = W.delay), (W = typeof W == 'number' && 0 < W ? St + W : St)) : (W = St), G)) {
              case 1:
                var v = -1
                break
              case 2:
                v = 250
                break
              case 5:
                v = 1073741823
                break
              case 4:
                v = 1e4
                break
              default:
                v = 5e3
            }
            return (v = W + v), (G = { id: H++, callback: tt, priorityLevel: G, startTime: W, expirationTime: v, sortIndex: -1 }), W > St ? ((G.sortIndex = W), o(m, G), h(p) === null && G === h(m) && (Y ? (L(Tt), (Tt = -1)) : (Y = !0), Pt(ht, W - St))) : ((G.sortIndex = v), o(p, G), D || x || ((D = !0), qe())), G
          }),
          (c.unstable_shouldYield = Q),
          (c.unstable_wrapCallback = function (G) {
            var tt = O
            return function () {
              var W = O
              O = tt
              try {
                return G.apply(this, arguments)
              } finally {
                O = W
              }
            }
          })
      })(pf)),
    pf
  )
}
var pd
function Tm() {
  return pd || ((pd = 1), (Sf.exports = Em())), Sf.exports
}
var bf = { exports: {} },
  lt = {}
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bd
function Rm() {
  if (bd) return lt
  bd = 1
  var c = Symbol.for('react.transitional.element'),
    o = Symbol.for('react.portal'),
    h = Symbol.for('react.fragment'),
    r = Symbol.for('react.strict_mode'),
    d = Symbol.for('react.profiler'),
    S = Symbol.for('react.consumer'),
    R = Symbol.for('react.context'),
    _ = Symbol.for('react.forward_ref'),
    p = Symbol.for('react.suspense'),
    m = Symbol.for('react.memo'),
    H = Symbol.for('react.lazy'),
    B = Symbol.iterator
  function O(v) {
    return v === null || typeof v != 'object' ? null : ((v = (B && v[B]) || v['@@iterator']), typeof v == 'function' ? v : null)
  }
  var x = {
      isMounted: function () {
        return !1
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    D = Object.assign,
    Y = {}
  function j(v, N, k) {
    ;(this.props = v), (this.context = N), (this.refs = Y), (this.updater = k || x)
  }
  ;(j.prototype.isReactComponent = {}),
    (j.prototype.setState = function (v, N) {
      if (typeof v != 'object' && typeof v != 'function' && v != null) throw Error('takes an object of state variables to update or a function which returns an object of state variables.')
      this.updater.enqueueSetState(this, v, N, 'setState')
    }),
    (j.prototype.forceUpdate = function (v) {
      this.updater.enqueueForceUpdate(this, v, 'forceUpdate')
    })
  function L() {}
  L.prototype = j.prototype
  function q(v, N, k) {
    ;(this.props = v), (this.context = N), (this.refs = Y), (this.updater = k || x)
  }
  var I = (q.prototype = new L())
  ;(I.constructor = q), D(I, j.prototype), (I.isPureReactComponent = !0)
  var ht = Array.isArray,
    F = { H: null, A: null, T: null, S: null },
    Tt = Object.prototype.hasOwnProperty
  function qt(v, N, k, K, X, ft) {
    return (k = ft.ref), { $$typeof: c, type: v, key: N, ref: k !== void 0 ? k : null, props: ft }
  }
  function Xt(v, N) {
    return qt(v.type, N, void 0, void 0, void 0, v.props)
  }
  function Q(v) {
    return typeof v == 'object' && v !== null && v.$$typeof === c
  }
  function et(v) {
    var N = { '=': '=0', ':': '=2' }
    return (
      '$' +
      v.replace(/[=:]/g, function (k) {
        return N[k]
      })
    )
  }
  var $t = /\/+/g
  function Be(v, N) {
    return typeof v == 'object' && v !== null && v.key != null ? et('' + v.key) : N.toString(36)
  }
  function Oe() {}
  function qe(v) {
    switch (v.status) {
      case 'fulfilled':
        return v.value
      case 'rejected':
        throw v.reason
      default:
        switch (
          (typeof v.status == 'string'
            ? v.then(Oe, Oe)
            : ((v.status = 'pending'),
              v.then(
                function (N) {
                  v.status === 'pending' && ((v.status = 'fulfilled'), (v.value = N))
                },
                function (N) {
                  v.status === 'pending' && ((v.status = 'rejected'), (v.reason = N))
                },
              )),
          v.status)
        ) {
          case 'fulfilled':
            return v.value
          case 'rejected':
            throw v.reason
        }
    }
    throw v
  }
  function Pt(v, N, k, K, X) {
    var ft = typeof v
    ;(ft === 'undefined' || ft === 'boolean') && (v = null)
    var at = !1
    if (v === null) at = !0
    else
      switch (ft) {
        case 'bigint':
        case 'string':
        case 'number':
          at = !0
          break
        case 'object':
          switch (v.$$typeof) {
            case c:
            case o:
              at = !0
              break
            case H:
              return (at = v._init), Pt(at(v._payload), N, k, K, X)
          }
      }
    if (at)
      return (
        (X = X(v)),
        (at = K === '' ? '.' + Be(v, 0) : K),
        ht(X)
          ? ((k = ''),
            at != null && (k = at.replace($t, '$&/') + '/'),
            Pt(X, N, k, '', function (Ut) {
              return Ut
            }))
          : X != null && (Q(X) && (X = Xt(X, k + (X.key == null || (v && v.key === X.key) ? '' : ('' + X.key).replace($t, '$&/') + '/') + at)), N.push(X)),
        1
      )
    at = 0
    var kt = K === '' ? '.' : K + ':'
    if (ht(v)) for (var dt = 0; dt < v.length; dt++) (K = v[dt]), (ft = kt + Be(K, dt)), (at += Pt(K, N, k, ft, X))
    else if (((dt = O(v)), typeof dt == 'function')) for (v = dt.call(v), dt = 0; !(K = v.next()).done; ) (K = K.value), (ft = kt + Be(K, dt++)), (at += Pt(K, N, k, ft, X))
    else if (ft === 'object') {
      if (typeof v.then == 'function') return Pt(qe(v), N, k, K, X)
      throw ((N = String(v)), Error('Objects are not valid as a React child (found: ' + (N === '[object Object]' ? 'object with keys {' + Object.keys(v).join(', ') + '}' : N) + '). If you meant to render a collection of children, use an array instead.'))
    }
    return at
  }
  function G(v, N, k) {
    if (v == null) return v
    var K = [],
      X = 0
    return (
      Pt(v, K, '', '', function (ft) {
        return N.call(k, ft, X++)
      }),
      K
    )
  }
  function tt(v) {
    if (v._status === -1) {
      var N = v._result
      ;(N = N()),
        N.then(
          function (k) {
            ;(v._status === 0 || v._status === -1) && ((v._status = 1), (v._result = k))
          },
          function (k) {
            ;(v._status === 0 || v._status === -1) && ((v._status = 2), (v._result = k))
          },
        ),
        v._status === -1 && ((v._status = 0), (v._result = N))
    }
    if (v._status === 1) return v._result.default
    throw v._result
  }
  var W =
    typeof reportError == 'function'
      ? reportError
      : function (v) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var N = new window.ErrorEvent('error', { bubbles: !0, cancelable: !0, message: typeof v == 'object' && v !== null && typeof v.message == 'string' ? String(v.message) : String(v), error: v })
            if (!window.dispatchEvent(N)) return
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', v)
            return
          }
          console.error(v)
        }
  function St() {}
  return (
    (lt.Children = {
      map: G,
      forEach: function (v, N, k) {
        G(
          v,
          function () {
            N.apply(this, arguments)
          },
          k,
        )
      },
      count: function (v) {
        var N = 0
        return (
          G(v, function () {
            N++
          }),
          N
        )
      },
      toArray: function (v) {
        return (
          G(v, function (N) {
            return N
          }) || []
        )
      },
      only: function (v) {
        if (!Q(v)) throw Error('React.Children.only expected to receive a single React element child.')
        return v
      },
    }),
    (lt.Component = j),
    (lt.Fragment = h),
    (lt.Profiler = d),
    (lt.PureComponent = q),
    (lt.StrictMode = r),
    (lt.Suspense = p),
    (lt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F),
    (lt.act = function () {
      throw Error('act(...) is not supported in production builds of React.')
    }),
    (lt.cache = function (v) {
      return function () {
        return v.apply(null, arguments)
      }
    }),
    (lt.cloneElement = function (v, N, k) {
      if (v == null) throw Error('The argument must be a React element, but you passed ' + v + '.')
      var K = D({}, v.props),
        X = v.key,
        ft = void 0
      if (N != null) for (at in (N.ref !== void 0 && (ft = void 0), N.key !== void 0 && (X = '' + N.key), N)) !Tt.call(N, at) || at === 'key' || at === '__self' || at === '__source' || (at === 'ref' && N.ref === void 0) || (K[at] = N[at])
      var at = arguments.length - 2
      if (at === 1) K.children = k
      else if (1 < at) {
        for (var kt = Array(at), dt = 0; dt < at; dt++) kt[dt] = arguments[dt + 2]
        K.children = kt
      }
      return qt(v.type, X, void 0, void 0, ft, K)
    }),
    (lt.createContext = function (v) {
      return (v = { $$typeof: R, _currentValue: v, _currentValue2: v, _threadCount: 0, Provider: null, Consumer: null }), (v.Provider = v), (v.Consumer = { $$typeof: S, _context: v }), v
    }),
    (lt.createElement = function (v, N, k) {
      var K,
        X = {},
        ft = null
      if (N != null) for (K in (N.key !== void 0 && (ft = '' + N.key), N)) Tt.call(N, K) && K !== 'key' && K !== '__self' && K !== '__source' && (X[K] = N[K])
      var at = arguments.length - 2
      if (at === 1) X.children = k
      else if (1 < at) {
        for (var kt = Array(at), dt = 0; dt < at; dt++) kt[dt] = arguments[dt + 2]
        X.children = kt
      }
      if (v && v.defaultProps) for (K in ((at = v.defaultProps), at)) X[K] === void 0 && (X[K] = at[K])
      return qt(v, ft, void 0, void 0, null, X)
    }),
    (lt.createRef = function () {
      return { current: null }
    }),
    (lt.forwardRef = function (v) {
      return { $$typeof: _, render: v }
    }),
    (lt.isValidElement = Q),
    (lt.lazy = function (v) {
      return { $$typeof: H, _payload: { _status: -1, _result: v }, _init: tt }
    }),
    (lt.memo = function (v, N) {
      return { $$typeof: m, type: v, compare: N === void 0 ? null : N }
    }),
    (lt.startTransition = function (v) {
      var N = F.T,
        k = {}
      F.T = k
      try {
        var K = v(),
          X = F.S
        X !== null && X(k, K), typeof K == 'object' && K !== null && typeof K.then == 'function' && K.then(St, W)
      } catch (ft) {
        W(ft)
      } finally {
        F.T = N
      }
    }),
    (lt.unstable_useCacheRefresh = function () {
      return F.H.useCacheRefresh()
    }),
    (lt.use = function (v) {
      return F.H.use(v)
    }),
    (lt.useActionState = function (v, N, k) {
      return F.H.useActionState(v, N, k)
    }),
    (lt.useCallback = function (v, N) {
      return F.H.useCallback(v, N)
    }),
    (lt.useContext = function (v) {
      return F.H.useContext(v)
    }),
    (lt.useDebugValue = function () {}),
    (lt.useDeferredValue = function (v, N) {
      return F.H.useDeferredValue(v, N)
    }),
    (lt.useEffect = function (v, N) {
      return F.H.useEffect(v, N)
    }),
    (lt.useId = function () {
      return F.H.useId()
    }),
    (lt.useImperativeHandle = function (v, N, k) {
      return F.H.useImperativeHandle(v, N, k)
    }),
    (lt.useInsertionEffect = function (v, N) {
      return F.H.useInsertionEffect(v, N)
    }),
    (lt.useLayoutEffect = function (v, N) {
      return F.H.useLayoutEffect(v, N)
    }),
    (lt.useMemo = function (v, N) {
      return F.H.useMemo(v, N)
    }),
    (lt.useOptimistic = function (v, N) {
      return F.H.useOptimistic(v, N)
    }),
    (lt.useReducer = function (v, N, k) {
      return F.H.useReducer(v, N, k)
    }),
    (lt.useRef = function (v) {
      return F.H.useRef(v)
    }),
    (lt.useState = function (v) {
      return F.H.useState(v)
    }),
    (lt.useSyncExternalStore = function (v, N, k) {
      return F.H.useSyncExternalStore(v, N, k)
    }),
    (lt.useTransition = function () {
      return F.H.useTransition()
    }),
    (lt.version = '19.0.0'),
    lt
  )
}
var Ed
function Df() {
  return Ed || ((Ed = 1), (bf.exports = Rm())), bf.exports
}
var Ef = { exports: {} },
  Jt = {}
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Td
function Am() {
  if (Td) return Jt
  Td = 1
  var c = Df()
  function o(p) {
    var m = 'https://react.dev/errors/' + p
    if (1 < arguments.length) {
      m += '?args[]=' + encodeURIComponent(arguments[1])
      for (var H = 2; H < arguments.length; H++) m += '&args[]=' + encodeURIComponent(arguments[H])
    }
    return 'Minified React error #' + p + '; visit ' + m + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  }
  function h() {}
  var r = {
      d: {
        f: h,
        r: function () {
          throw Error(o(522))
        },
        D: h,
        C: h,
        L: h,
        m: h,
        X: h,
        S: h,
        M: h,
      },
      p: 0,
      findDOMNode: null,
    },
    d = Symbol.for('react.portal')
  function S(p, m, H) {
    var B = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return { $$typeof: d, key: B == null ? null : '' + B, children: p, containerInfo: m, implementation: H }
  }
  var R = c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
  function _(p, m) {
    if (p === 'font') return ''
    if (typeof m == 'string') return m === 'use-credentials' ? m : ''
  }
  return (
    (Jt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Jt.createPortal = function (p, m) {
      var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
      if (!m || (m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)) throw Error(o(299))
      return S(p, m, null, H)
    }),
    (Jt.flushSync = function (p) {
      var m = R.T,
        H = r.p
      try {
        if (((R.T = null), (r.p = 2), p)) return p()
      } finally {
        ;(R.T = m), (r.p = H), r.d.f()
      }
    }),
    (Jt.preconnect = function (p, m) {
      typeof p == 'string' && (m ? ((m = m.crossOrigin), (m = typeof m == 'string' ? (m === 'use-credentials' ? m : '') : void 0)) : (m = null), r.d.C(p, m))
    }),
    (Jt.prefetchDNS = function (p) {
      typeof p == 'string' && r.d.D(p)
    }),
    (Jt.preinit = function (p, m) {
      if (typeof p == 'string' && m && typeof m.as == 'string') {
        var H = m.as,
          B = _(H, m.crossOrigin),
          O = typeof m.integrity == 'string' ? m.integrity : void 0,
          x = typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0
        H === 'style' ? r.d.S(p, typeof m.precedence == 'string' ? m.precedence : void 0, { crossOrigin: B, integrity: O, fetchPriority: x }) : H === 'script' && r.d.X(p, { crossOrigin: B, integrity: O, fetchPriority: x, nonce: typeof m.nonce == 'string' ? m.nonce : void 0 })
      }
    }),
    (Jt.preinitModule = function (p, m) {
      if (typeof p == 'string')
        if (typeof m == 'object' && m !== null) {
          if (m.as == null || m.as === 'script') {
            var H = _(m.as, m.crossOrigin)
            r.d.M(p, { crossOrigin: H, integrity: typeof m.integrity == 'string' ? m.integrity : void 0, nonce: typeof m.nonce == 'string' ? m.nonce : void 0 })
          }
        } else m == null && r.d.M(p)
    }),
    (Jt.preload = function (p, m) {
      if (typeof p == 'string' && typeof m == 'object' && m !== null && typeof m.as == 'string') {
        var H = m.as,
          B = _(H, m.crossOrigin)
        r.d.L(p, H, { crossOrigin: B, integrity: typeof m.integrity == 'string' ? m.integrity : void 0, nonce: typeof m.nonce == 'string' ? m.nonce : void 0, type: typeof m.type == 'string' ? m.type : void 0, fetchPriority: typeof m.fetchPriority == 'string' ? m.fetchPriority : void 0, referrerPolicy: typeof m.referrerPolicy == 'string' ? m.referrerPolicy : void 0, imageSrcSet: typeof m.imageSrcSet == 'string' ? m.imageSrcSet : void 0, imageSizes: typeof m.imageSizes == 'string' ? m.imageSizes : void 0, media: typeof m.media == 'string' ? m.media : void 0 })
      }
    }),
    (Jt.preloadModule = function (p, m) {
      if (typeof p == 'string')
        if (m) {
          var H = _(m.as, m.crossOrigin)
          r.d.m(p, { as: typeof m.as == 'string' && m.as !== 'script' ? m.as : void 0, crossOrigin: H, integrity: typeof m.integrity == 'string' ? m.integrity : void 0 })
        } else r.d.m(p)
    }),
    (Jt.requestFormReset = function (p) {
      r.d.r(p)
    }),
    (Jt.unstable_batchedUpdates = function (p, m) {
      return p(m)
    }),
    (Jt.useFormState = function (p, m, H) {
      return R.H.useFormState(p, m, H)
    }),
    (Jt.useFormStatus = function () {
      return R.H.useHostTransitionStatus()
    }),
    (Jt.version = '19.0.0'),
    Jt
  )
}
var Rd
function Om() {
  if (Rd) return Ef.exports
  Rd = 1
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
      } catch (o) {
        console.error(o)
      }
  }
  return c(), (Ef.exports = Am()), Ef.exports
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ad
function zm() {
  if (Ad) return Hu
  Ad = 1
  var c = Tm(),
    o = Df(),
    h = Om()
  function r(t) {
    var e = 'https://react.dev/errors/' + t
    if (1 < arguments.length) {
      e += '?args[]=' + encodeURIComponent(arguments[1])
      for (var l = 2; l < arguments.length; l++) e += '&args[]=' + encodeURIComponent(arguments[l])
    }
    return 'Minified React error #' + t + '; visit ' + e + ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  }
  function d(t) {
    return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11))
  }
  var S = Symbol.for('react.element'),
    R = Symbol.for('react.transitional.element'),
    _ = Symbol.for('react.portal'),
    p = Symbol.for('react.fragment'),
    m = Symbol.for('react.strict_mode'),
    H = Symbol.for('react.profiler'),
    B = Symbol.for('react.provider'),
    O = Symbol.for('react.consumer'),
    x = Symbol.for('react.context'),
    D = Symbol.for('react.forward_ref'),
    Y = Symbol.for('react.suspense'),
    j = Symbol.for('react.suspense_list'),
    L = Symbol.for('react.memo'),
    q = Symbol.for('react.lazy'),
    I = Symbol.for('react.offscreen'),
    ht = Symbol.for('react.memo_cache_sentinel'),
    F = Symbol.iterator
  function Tt(t) {
    return t === null || typeof t != 'object' ? null : ((t = (F && t[F]) || t['@@iterator']), typeof t == 'function' ? t : null)
  }
  var qt = Symbol.for('react.client.reference')
  function Xt(t) {
    if (t == null) return null
    if (typeof t == 'function') return t.$$typeof === qt ? null : t.displayName || t.name || null
    if (typeof t == 'string') return t
    switch (t) {
      case p:
        return 'Fragment'
      case _:
        return 'Portal'
      case H:
        return 'Profiler'
      case m:
        return 'StrictMode'
      case Y:
        return 'Suspense'
      case j:
        return 'SuspenseList'
    }
    if (typeof t == 'object')
      switch (t.$$typeof) {
        case x:
          return (t.displayName || 'Context') + '.Provider'
        case O:
          return (t._context.displayName || 'Context') + '.Consumer'
        case D:
          var e = t.render
          return (t = t.displayName), t || ((t = e.displayName || e.name || ''), (t = t !== '' ? 'ForwardRef(' + t + ')' : 'ForwardRef')), t
        case L:
          return (e = t.displayName || null), e !== null ? e : Xt(t.type) || 'Memo'
        case q:
          ;(e = t._payload), (t = t._init)
          try {
            return Xt(t(e))
          } catch {}
      }
    return null
  }
  var Q = o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    et = Object.assign,
    $t,
    Be
  function Oe(t) {
    if ($t === void 0)
      try {
        throw Error()
      } catch (l) {
        var e = l.stack.trim().match(/\n( *(at )?)/)
        ;($t = (e && e[1]) || ''),
          (Be =
            -1 <
            l.stack.indexOf(`
    at`)
              ? ' (<anonymous>)'
              : -1 < l.stack.indexOf('@')
                ? '@unknown:0:0'
                : '')
      }
    return (
      `
` +
      $t +
      t +
      Be
    )
  }
  var qe = !1
  function Pt(t, e) {
    if (!t || qe) return ''
    qe = !0
    var l = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (e) {
              var C = function () {
                throw Error()
              }
              if (
                (Object.defineProperty(C.prototype, 'props', {
                  set: function () {
                    throw Error()
                  },
                }),
                typeof Reflect == 'object' && Reflect.construct)
              ) {
                try {
                  Reflect.construct(C, [])
                } catch (A) {
                  var T = A
                }
                Reflect.construct(t, [], C)
              } else {
                try {
                  C.call()
                } catch (A) {
                  T = A
                }
                t.call(C.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (A) {
                T = A
              }
              ;(C = t()) && typeof C.catch == 'function' && C.catch(function () {})
            }
          } catch (A) {
            if (A && T && typeof A.stack == 'string') return [A.stack, T.stack]
          }
          return [null, null]
        },
      }
      a.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot'
      var u = Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot, 'name')
      u && u.configurable && Object.defineProperty(a.DetermineComponentFrameRoot, 'name', { value: 'DetermineComponentFrameRoot' })
      var n = a.DetermineComponentFrameRoot(),
        i = n[0],
        f = n[1]
      if (i && f) {
        var s = i.split(`
`),
          g = f.split(`
`)
        for (u = a = 0; a < s.length && !s[a].includes('DetermineComponentFrameRoot'); ) a++
        for (; u < g.length && !g[u].includes('DetermineComponentFrameRoot'); ) u++
        if (a === s.length || u === g.length) for (a = s.length - 1, u = g.length - 1; 1 <= a && 0 <= u && s[a] !== g[u]; ) u--
        for (; 1 <= a && 0 <= u; a--, u--)
          if (s[a] !== g[u]) {
            if (a !== 1 || u !== 1)
              do
                if ((a--, u--, 0 > u || s[a] !== g[u])) {
                  var z =
                    `
` + s[a].replace(' at new ', ' at ')
                  return t.displayName && z.includes('<anonymous>') && (z = z.replace('<anonymous>', t.displayName)), z
                }
              while (1 <= a && 0 <= u)
            break
          }
      }
    } finally {
      ;(qe = !1), (Error.prepareStackTrace = l)
    }
    return (l = t ? t.displayName || t.name : '') ? Oe(l) : ''
  }
  function G(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return Oe(t.type)
      case 16:
        return Oe('Lazy')
      case 13:
        return Oe('Suspense')
      case 19:
        return Oe('SuspenseList')
      case 0:
      case 15:
        return (t = Pt(t.type, !1)), t
      case 11:
        return (t = Pt(t.type.render, !1)), t
      case 1:
        return (t = Pt(t.type, !0)), t
      default:
        return ''
    }
  }
  function tt(t) {
    try {
      var e = ''
      do (e += G(t)), (t = t.return)
      while (t)
      return e
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      )
    }
  }
  function W(t) {
    var e = t,
      l = t
    if (t.alternate) for (; e.return; ) e = e.return
    else {
      t = e
      do (e = t), e.flags & 4098 && (l = e.return), (t = e.return)
      while (t)
    }
    return e.tag === 3 ? l : null
  }
  function St(t) {
    if (t.tag === 13) {
      var e = t.memoizedState
      if ((e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)), e !== null)) return e.dehydrated
    }
    return null
  }
  function v(t) {
    if (W(t) !== t) throw Error(r(188))
  }
  function N(t) {
    var e = t.alternate
    if (!e) {
      if (((e = W(t)), e === null)) throw Error(r(188))
      return e !== t ? null : t
    }
    for (var l = t, a = e; ; ) {
      var u = l.return
      if (u === null) break
      var n = u.alternate
      if (n === null) {
        if (((a = u.return), a !== null)) {
          l = a
          continue
        }
        break
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === l) return v(u), t
          if (n === a) return v(u), e
          n = n.sibling
        }
        throw Error(r(188))
      }
      if (l.return !== a.return) (l = u), (a = n)
      else {
        for (var i = !1, f = u.child; f; ) {
          if (f === l) {
            ;(i = !0), (l = u), (a = n)
            break
          }
          if (f === a) {
            ;(i = !0), (a = u), (l = n)
            break
          }
          f = f.sibling
        }
        if (!i) {
          for (f = n.child; f; ) {
            if (f === l) {
              ;(i = !0), (l = n), (a = u)
              break
            }
            if (f === a) {
              ;(i = !0), (a = n), (l = u)
              break
            }
            f = f.sibling
          }
          if (!i) throw Error(r(189))
        }
      }
      if (l.alternate !== a) throw Error(r(190))
    }
    if (l.tag !== 3) throw Error(r(188))
    return l.stateNode.current === l ? t : e
  }
  function k(t) {
    var e = t.tag
    if (e === 5 || e === 26 || e === 27 || e === 6) return t
    for (t = t.child; t !== null; ) {
      if (((e = k(t)), e !== null)) return e
      t = t.sibling
    }
    return null
  }
  var K = Array.isArray,
    X = h.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ft = { pending: !1, data: null, method: null, action: null },
    at = [],
    kt = -1
  function dt(t) {
    return { current: t }
  }
  function Ut(t) {
    0 > kt || ((t.current = at[kt]), (at[kt] = null), kt--)
  }
  function Et(t, e) {
    kt++, (at[kt] = t.current), (t.current = e)
  }
  var ze = dt(null),
    Na = dt(null),
    ll = dt(null),
    Lu = dt(null)
  function Gu(t, e) {
    switch ((Et(ll, e), Et(Na, t), Et(ze, null), (t = e.nodeType), t)) {
      case 9:
      case 11:
        e = (e = e.documentElement) && (e = e.namespaceURI) ? Vs(e) : 0
        break
      default:
        if (((t = t === 8 ? e.parentNode : e), (e = t.tagName), (t = t.namespaceURI))) (t = Vs(t)), (e = Ks(t, e))
        else
          switch (e) {
            case 'svg':
              e = 1
              break
            case 'math':
              e = 2
              break
            default:
              e = 0
          }
    }
    Ut(ze), Et(ze, e)
  }
  function Wl() {
    Ut(ze), Ut(Na), Ut(ll)
  }
  function ii(t) {
    t.memoizedState !== null && Et(Lu, t)
    var e = ze.current,
      l = Ks(e, t.type)
    e !== l && (Et(Na, t), Et(ze, l))
  }
  function Xu(t) {
    Na.current === t && (Ut(ze), Ut(Na)), Lu.current === t && (Ut(Lu), (zu._currentValue = ft))
  }
  var ci = Object.prototype.hasOwnProperty,
    fi = c.unstable_scheduleCallback,
    ri = c.unstable_cancelCallback,
    Wd = c.unstable_shouldYield,
    Fd = c.unstable_requestPaint,
    De = c.unstable_now,
    Pd = c.unstable_getCurrentPriorityLevel,
    xf = c.unstable_ImmediatePriority,
    Nf = c.unstable_UserBlockingPriority,
    Qu = c.unstable_NormalPriority,
    Id = c.unstable_LowPriority,
    Bf = c.unstable_IdlePriority,
    th = c.log,
    eh = c.unstable_setDisableYieldValue,
    Ba = null,
    le = null
  function lh(t) {
    if (le && typeof le.onCommitFiberRoot == 'function')
      try {
        le.onCommitFiberRoot(Ba, t, void 0, (t.current.flags & 128) === 128)
      } catch {}
  }
  function al(t) {
    if ((typeof th == 'function' && eh(t), le && typeof le.setStrictMode == 'function'))
      try {
        le.setStrictMode(Ba, t)
      } catch {}
  }
  var ae = Math.clz32 ? Math.clz32 : nh,
    ah = Math.log,
    uh = Math.LN2
  function nh(t) {
    return (t >>>= 0), t === 0 ? 32 : (31 - ((ah(t) / uh) | 0)) | 0
  }
  var wu = 128,
    Zu = 4194304
  function Dl(t) {
    var e = t & 42
    if (e !== 0) return e
    switch (t & -t) {
      case 1:
        return 1
      case 2:
        return 2
      case 4:
        return 4
      case 8:
        return 8
      case 16:
        return 16
      case 32:
        return 32
      case 64:
        return 64
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t & 4194176
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560
      case 67108864:
        return 67108864
      case 134217728:
        return 134217728
      case 268435456:
        return 268435456
      case 536870912:
        return 536870912
      case 1073741824:
        return 0
      default:
        return t
    }
  }
  function Vu(t, e) {
    var l = t.pendingLanes
    if (l === 0) return 0
    var a = 0,
      u = t.suspendedLanes,
      n = t.pingedLanes,
      i = t.warmLanes
    t = t.finishedLanes !== 0
    var f = l & 134217727
    return f !== 0 ? ((l = f & ~u), l !== 0 ? (a = Dl(l)) : ((n &= f), n !== 0 ? (a = Dl(n)) : t || ((i = f & ~i), i !== 0 && (a = Dl(i))))) : ((f = l & ~u), f !== 0 ? (a = Dl(f)) : n !== 0 ? (a = Dl(n)) : t || ((i = l & ~i), i !== 0 && (a = Dl(i)))), a === 0 ? 0 : e !== 0 && e !== a && !(e & u) && ((u = a & -a), (i = e & -e), u >= i || (u === 32 && (i & 4194176) !== 0)) ? e : a
  }
  function qa(t, e) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & e) === 0
  }
  function ih(t, e) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
        return e + 250
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e + 5e3
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1
      default:
        return -1
    }
  }
  function qf() {
    var t = wu
    return (wu <<= 1), !(wu & 4194176) && (wu = 128), t
  }
  function Yf() {
    var t = Zu
    return (Zu <<= 1), !(Zu & 62914560) && (Zu = 4194304), t
  }
  function oi(t) {
    for (var e = [], l = 0; 31 > l; l++) e.push(t)
    return e
  }
  function Ya(t, e) {
    ;(t.pendingLanes |= e), e !== 268435456 && ((t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0))
  }
  function ch(t, e, l, a, u, n) {
    var i = t.pendingLanes
    ;(t.pendingLanes = l), (t.suspendedLanes = 0), (t.pingedLanes = 0), (t.warmLanes = 0), (t.expiredLanes &= l), (t.entangledLanes &= l), (t.errorRecoveryDisabledLanes &= l), (t.shellSuspendCounter = 0)
    var f = t.entanglements,
      s = t.expirationTimes,
      g = t.hiddenUpdates
    for (l = i & ~l; 0 < l; ) {
      var z = 31 - ae(l),
        C = 1 << z
      ;(f[z] = 0), (s[z] = -1)
      var T = g[z]
      if (T !== null)
        for (g[z] = null, z = 0; z < T.length; z++) {
          var A = T[z]
          A !== null && (A.lane &= -536870913)
        }
      l &= ~C
    }
    a !== 0 && jf(t, a, 0), n !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= n & ~(i & ~e))
  }
  function jf(t, e, l) {
    ;(t.pendingLanes |= e), (t.suspendedLanes &= ~e)
    var a = 31 - ae(e)
    ;(t.entangledLanes |= e), (t.entanglements[a] = t.entanglements[a] | 1073741824 | (l & 4194218))
  }
  function Lf(t, e) {
    var l = (t.entangledLanes |= e)
    for (t = t.entanglements; l; ) {
      var a = 31 - ae(l),
        u = 1 << a
      ;(u & e) | (t[a] & e) && (t[a] |= e), (l &= ~u)
    }
  }
  function Gf(t) {
    return (t &= -t), 2 < t ? (8 < t ? (t & 134217727 ? 32 : 268435456) : 8) : 2
  }
  function Xf() {
    var t = X.p
    return t !== 0 ? t : ((t = window.event), t === void 0 ? 32 : od(t.type))
  }
  function fh(t, e) {
    var l = X.p
    try {
      return (X.p = t), e()
    } finally {
      X.p = l
    }
  }
  var ul = Math.random().toString(36).slice(2),
    Vt = '__reactFiber$' + ul,
    It = '__reactProps$' + ul,
    Fl = '__reactContainer$' + ul,
    si = '__reactEvents$' + ul,
    rh = '__reactListeners$' + ul,
    oh = '__reactHandles$' + ul,
    Qf = '__reactResources$' + ul,
    ja = '__reactMarker$' + ul
  function di(t) {
    delete t[Vt], delete t[It], delete t[si], delete t[rh], delete t[oh]
  }
  function _l(t) {
    var e = t[Vt]
    if (e) return e
    for (var l = t.parentNode; l; ) {
      if ((e = l[Fl] || l[Vt])) {
        if (((l = e.alternate), e.child !== null || (l !== null && l.child !== null)))
          for (t = ks(t); t !== null; ) {
            if ((l = t[Vt])) return l
            t = ks(t)
          }
        return e
      }
      ;(t = l), (l = t.parentNode)
    }
    return null
  }
  function Pl(t) {
    if ((t = t[Vt] || t[Fl])) {
      var e = t.tag
      if (e === 5 || e === 6 || e === 13 || e === 26 || e === 27 || e === 3) return t
    }
    return null
  }
  function La(t) {
    var e = t.tag
    if (e === 5 || e === 26 || e === 27 || e === 6) return t.stateNode
    throw Error(r(33))
  }
  function Il(t) {
    var e = t[Qf]
    return e || (e = t[Qf] = { hoistableStyles: new Map(), hoistableScripts: new Map() }), e
  }
  function Yt(t) {
    t[ja] = !0
  }
  var wf = new Set(),
    Zf = {}
  function Ml(t, e) {
    ta(t, e), ta(t + 'Capture', e)
  }
  function ta(t, e) {
    for (Zf[t] = e, t = 0; t < e.length; t++) wf.add(e[t])
  }
  var Ye = !(typeof window > 'u' || typeof window.document > 'u' || typeof window.document.createElement > 'u'),
    sh = RegExp('^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'),
    Vf = {},
    Kf = {}
  function dh(t) {
    return ci.call(Kf, t) ? !0 : ci.call(Vf, t) ? !1 : sh.test(t) ? (Kf[t] = !0) : ((Vf[t] = !0), !1)
  }
  function Ku(t, e, l) {
    if (dh(e))
      if (l === null) t.removeAttribute(e)
      else {
        switch (typeof l) {
          case 'undefined':
          case 'function':
          case 'symbol':
            t.removeAttribute(e)
            return
          case 'boolean':
            var a = e.toLowerCase().slice(0, 5)
            if (a !== 'data-' && a !== 'aria-') {
              t.removeAttribute(e)
              return
            }
        }
        t.setAttribute(e, '' + l)
      }
  }
  function Ju(t, e, l) {
    if (l === null) t.removeAttribute(e)
    else {
      switch (typeof l) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(e)
          return
      }
      t.setAttribute(e, '' + l)
    }
  }
  function je(t, e, l, a) {
    if (a === null) t.removeAttribute(l)
    else {
      switch (typeof a) {
        case 'undefined':
        case 'function':
        case 'symbol':
        case 'boolean':
          t.removeAttribute(l)
          return
      }
      t.setAttributeNS(e, l, '' + a)
    }
  }
  function re(t) {
    switch (typeof t) {
      case 'bigint':
      case 'boolean':
      case 'number':
      case 'string':
      case 'undefined':
        return t
      case 'object':
        return t
      default:
        return ''
    }
  }
  function Jf(t) {
    var e = t.type
    return (t = t.nodeName) && t.toLowerCase() === 'input' && (e === 'checkbox' || e === 'radio')
  }
  function hh(t) {
    var e = Jf(t) ? 'checked' : 'value',
      l = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
      a = '' + t[e]
    if (!t.hasOwnProperty(e) && typeof l < 'u' && typeof l.get == 'function' && typeof l.set == 'function') {
      var u = l.get,
        n = l.set
      return (
        Object.defineProperty(t, e, {
          configurable: !0,
          get: function () {
            return u.call(this)
          },
          set: function (i) {
            ;(a = '' + i), n.call(this, i)
          },
        }),
        Object.defineProperty(t, e, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a
          },
          setValue: function (i) {
            a = '' + i
          },
          stopTracking: function () {
            ;(t._valueTracker = null), delete t[e]
          },
        }
      )
    }
  }
  function $u(t) {
    t._valueTracker || (t._valueTracker = hh(t))
  }
  function $f(t) {
    if (!t) return !1
    var e = t._valueTracker
    if (!e) return !0
    var l = e.getValue(),
      a = ''
    return t && (a = Jf(t) ? (t.checked ? 'true' : 'false') : t.value), (t = a), t !== l ? (e.setValue(t), !0) : !1
  }
  function ku(t) {
    if (((t = t || (typeof document < 'u' ? document : void 0)), typeof t > 'u')) return null
    try {
      return t.activeElement || t.body
    } catch {
      return t.body
    }
  }
  var mh = /[\n"\\]/g
  function oe(t) {
    return t.replace(mh, function (e) {
      return '\\' + e.charCodeAt(0).toString(16) + ' '
    })
  }
  function hi(t, e, l, a, u, n, i, f) {
    ;(t.name = ''), i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean' ? (t.type = i) : t.removeAttribute('type'), e != null ? (i === 'number' ? ((e === 0 && t.value === '') || t.value != e) && (t.value = '' + re(e)) : t.value !== '' + re(e) && (t.value = '' + re(e))) : (i !== 'submit' && i !== 'reset') || t.removeAttribute('value'), e != null ? mi(t, i, re(e)) : l != null ? mi(t, i, re(l)) : a != null && t.removeAttribute('value'), u == null && n != null && (t.defaultChecked = !!n), u != null && (t.checked = u && typeof u != 'function' && typeof u != 'symbol'), f != null && typeof f != 'function' && typeof f != 'symbol' && typeof f != 'boolean' ? (t.name = '' + re(f)) : t.removeAttribute('name')
  }
  function kf(t, e, l, a, u, n, i, f) {
    if ((n != null && typeof n != 'function' && typeof n != 'symbol' && typeof n != 'boolean' && (t.type = n), e != null || l != null)) {
      if (!((n !== 'submit' && n !== 'reset') || e != null)) return
      ;(l = l != null ? '' + re(l) : ''), (e = e != null ? '' + re(e) : l), f || e === t.value || (t.value = e), (t.defaultValue = e)
    }
    ;(a = a ?? u), (a = typeof a != 'function' && typeof a != 'symbol' && !!a), (t.checked = f ? t.checked : !!a), (t.defaultChecked = !!a), i != null && typeof i != 'function' && typeof i != 'symbol' && typeof i != 'boolean' && (t.name = i)
  }
  function mi(t, e, l) {
    ;(e === 'number' && ku(t.ownerDocument) === t) || t.defaultValue === '' + l || (t.defaultValue = '' + l)
  }
  function ea(t, e, l, a) {
    if (((t = t.options), e)) {
      e = {}
      for (var u = 0; u < l.length; u++) e['$' + l[u]] = !0
      for (l = 0; l < t.length; l++) (u = e.hasOwnProperty('$' + t[l].value)), t[l].selected !== u && (t[l].selected = u), u && a && (t[l].defaultSelected = !0)
    } else {
      for (l = '' + re(l), e = null, u = 0; u < t.length; u++) {
        if (t[u].value === l) {
          ;(t[u].selected = !0), a && (t[u].defaultSelected = !0)
          return
        }
        e !== null || t[u].disabled || (e = t[u])
      }
      e !== null && (e.selected = !0)
    }
  }
  function Wf(t, e, l) {
    if (e != null && ((e = '' + re(e)), e !== t.value && (t.value = e), l == null)) {
      t.defaultValue !== e && (t.defaultValue = e)
      return
    }
    t.defaultValue = l != null ? '' + re(l) : ''
  }
  function Ff(t, e, l, a) {
    if (e == null) {
      if (a != null) {
        if (l != null) throw Error(r(92))
        if (K(a)) {
          if (1 < a.length) throw Error(r(93))
          a = a[0]
        }
        l = a
      }
      l == null && (l = ''), (e = l)
    }
    ;(l = re(e)), (t.defaultValue = l), (a = t.textContent), a === l && a !== '' && a !== null && (t.value = a)
  }
  function la(t, e) {
    if (e) {
      var l = t.firstChild
      if (l && l === t.lastChild && l.nodeType === 3) {
        l.nodeValue = e
        return
      }
    }
    t.textContent = e
  }
  var vh = new Set('animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(' '))
  function Pf(t, e, l) {
    var a = e.indexOf('--') === 0
    l == null || typeof l == 'boolean' || l === '' ? (a ? t.setProperty(e, '') : e === 'float' ? (t.cssFloat = '') : (t[e] = '')) : a ? t.setProperty(e, l) : typeof l != 'number' || l === 0 || vh.has(e) ? (e === 'float' ? (t.cssFloat = l) : (t[e] = ('' + l).trim())) : (t[e] = l + 'px')
  }
  function If(t, e, l) {
    if (e != null && typeof e != 'object') throw Error(r(62))
    if (((t = t.style), l != null)) {
      for (var a in l) !l.hasOwnProperty(a) || (e != null && e.hasOwnProperty(a)) || (a.indexOf('--') === 0 ? t.setProperty(a, '') : a === 'float' ? (t.cssFloat = '') : (t[a] = ''))
      for (var u in e) (a = e[u]), e.hasOwnProperty(u) && l[u] !== a && Pf(t, u, a)
    } else for (var n in e) e.hasOwnProperty(n) && Pf(t, n, e[n])
  }
  function vi(t) {
    if (t.indexOf('-') === -1) return !1
    switch (t) {
      case 'annotation-xml':
      case 'color-profile':
      case 'font-face':
      case 'font-face-src':
      case 'font-face-uri':
      case 'font-face-format':
      case 'font-face-name':
      case 'missing-glyph':
        return !1
      default:
        return !0
    }
  }
  var yh = new Map([
      ['acceptCharset', 'accept-charset'],
      ['htmlFor', 'for'],
      ['httpEquiv', 'http-equiv'],
      ['crossOrigin', 'crossorigin'],
      ['accentHeight', 'accent-height'],
      ['alignmentBaseline', 'alignment-baseline'],
      ['arabicForm', 'arabic-form'],
      ['baselineShift', 'baseline-shift'],
      ['capHeight', 'cap-height'],
      ['clipPath', 'clip-path'],
      ['clipRule', 'clip-rule'],
      ['colorInterpolation', 'color-interpolation'],
      ['colorInterpolationFilters', 'color-interpolation-filters'],
      ['colorProfile', 'color-profile'],
      ['colorRendering', 'color-rendering'],
      ['dominantBaseline', 'dominant-baseline'],
      ['enableBackground', 'enable-background'],
      ['fillOpacity', 'fill-opacity'],
      ['fillRule', 'fill-rule'],
      ['floodColor', 'flood-color'],
      ['floodOpacity', 'flood-opacity'],
      ['fontFamily', 'font-family'],
      ['fontSize', 'font-size'],
      ['fontSizeAdjust', 'font-size-adjust'],
      ['fontStretch', 'font-stretch'],
      ['fontStyle', 'font-style'],
      ['fontVariant', 'font-variant'],
      ['fontWeight', 'font-weight'],
      ['glyphName', 'glyph-name'],
      ['glyphOrientationHorizontal', 'glyph-orientation-horizontal'],
      ['glyphOrientationVertical', 'glyph-orientation-vertical'],
      ['horizAdvX', 'horiz-adv-x'],
      ['horizOriginX', 'horiz-origin-x'],
      ['imageRendering', 'image-rendering'],
      ['letterSpacing', 'letter-spacing'],
      ['lightingColor', 'lighting-color'],
      ['markerEnd', 'marker-end'],
      ['markerMid', 'marker-mid'],
      ['markerStart', 'marker-start'],
      ['overlinePosition', 'overline-position'],
      ['overlineThickness', 'overline-thickness'],
      ['paintOrder', 'paint-order'],
      ['panose-1', 'panose-1'],
      ['pointerEvents', 'pointer-events'],
      ['renderingIntent', 'rendering-intent'],
      ['shapeRendering', 'shape-rendering'],
      ['stopColor', 'stop-color'],
      ['stopOpacity', 'stop-opacity'],
      ['strikethroughPosition', 'strikethrough-position'],
      ['strikethroughThickness', 'strikethrough-thickness'],
      ['strokeDasharray', 'stroke-dasharray'],
      ['strokeDashoffset', 'stroke-dashoffset'],
      ['strokeLinecap', 'stroke-linecap'],
      ['strokeLinejoin', 'stroke-linejoin'],
      ['strokeMiterlimit', 'stroke-miterlimit'],
      ['strokeOpacity', 'stroke-opacity'],
      ['strokeWidth', 'stroke-width'],
      ['textAnchor', 'text-anchor'],
      ['textDecoration', 'text-decoration'],
      ['textRendering', 'text-rendering'],
      ['transformOrigin', 'transform-origin'],
      ['underlinePosition', 'underline-position'],
      ['underlineThickness', 'underline-thickness'],
      ['unicodeBidi', 'unicode-bidi'],
      ['unicodeRange', 'unicode-range'],
      ['unitsPerEm', 'units-per-em'],
      ['vAlphabetic', 'v-alphabetic'],
      ['vHanging', 'v-hanging'],
      ['vIdeographic', 'v-ideographic'],
      ['vMathematical', 'v-mathematical'],
      ['vectorEffect', 'vector-effect'],
      ['vertAdvY', 'vert-adv-y'],
      ['vertOriginX', 'vert-origin-x'],
      ['vertOriginY', 'vert-origin-y'],
      ['wordSpacing', 'word-spacing'],
      ['writingMode', 'writing-mode'],
      ['xmlnsXlink', 'xmlns:xlink'],
      ['xHeight', 'x-height'],
    ]),
    gh = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
  function Wu(t) {
    return gh.test('' + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
  }
  var yi = null
  function gi(t) {
    return (t = t.target || t.srcElement || window), t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === 3 ? t.parentNode : t
  }
  var aa = null,
    ua = null
  function tr(t) {
    var e = Pl(t)
    if (e && (t = e.stateNode)) {
      var l = t[It] || null
      t: switch (((t = e.stateNode), e.type)) {
        case 'input':
          if ((hi(t, l.value, l.defaultValue, l.defaultValue, l.checked, l.defaultChecked, l.type, l.name), (e = l.name), l.type === 'radio' && e != null)) {
            for (l = t; l.parentNode; ) l = l.parentNode
            for (l = l.querySelectorAll('input[name="' + oe('' + e) + '"][type="radio"]'), e = 0; e < l.length; e++) {
              var a = l[e]
              if (a !== t && a.form === t.form) {
                var u = a[It] || null
                if (!u) throw Error(r(90))
                hi(a, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
              }
            }
            for (e = 0; e < l.length; e++) (a = l[e]), a.form === t.form && $f(a)
          }
          break t
        case 'textarea':
          Wf(t, l.value, l.defaultValue)
          break t
        case 'select':
          ;(e = l.value), e != null && ea(t, !!l.multiple, e, !1)
      }
    }
  }
  var Si = !1
  function er(t, e, l) {
    if (Si) return t(e, l)
    Si = !0
    try {
      var a = t(e)
      return a
    } finally {
      if (((Si = !1), (aa !== null || ua !== null) && (Nn(), aa && ((e = aa), (t = ua), (ua = aa = null), tr(e), t)))) for (e = 0; e < t.length; e++) tr(t[e])
    }
  }
  function Ga(t, e) {
    var l = t.stateNode
    if (l === null) return null
    var a = l[It] || null
    if (a === null) return null
    l = a[e]
    t: switch (e) {
      case 'onClick':
      case 'onClickCapture':
      case 'onDoubleClick':
      case 'onDoubleClickCapture':
      case 'onMouseDown':
      case 'onMouseDownCapture':
      case 'onMouseMove':
      case 'onMouseMoveCapture':
      case 'onMouseUp':
      case 'onMouseUpCapture':
      case 'onMouseEnter':
        ;(a = !a.disabled) || ((t = t.type), (a = !(t === 'button' || t === 'input' || t === 'select' || t === 'textarea'))), (t = !a)
        break t
      default:
        t = !1
    }
    if (t) return null
    if (l && typeof l != 'function') throw Error(r(231, e, typeof l))
    return l
  }
  var pi = !1
  if (Ye)
    try {
      var Xa = {}
      Object.defineProperty(Xa, 'passive', {
        get: function () {
          pi = !0
        },
      }),
        window.addEventListener('test', Xa, Xa),
        window.removeEventListener('test', Xa, Xa)
    } catch {
      pi = !1
    }
  var nl = null,
    bi = null,
    Fu = null
  function lr() {
    if (Fu) return Fu
    var t,
      e = bi,
      l = e.length,
      a,
      u = 'value' in nl ? nl.value : nl.textContent,
      n = u.length
    for (t = 0; t < l && e[t] === u[t]; t++);
    var i = l - t
    for (a = 1; a <= i && e[l - a] === u[n - a]; a++);
    return (Fu = u.slice(t, 1 < a ? 1 - a : void 0))
  }
  function Pu(t) {
    var e = t.keyCode
    return 'charCode' in t ? ((t = t.charCode), t === 0 && e === 13 && (t = 13)) : (t = e), t === 10 && (t = 13), 32 <= t || t === 13 ? t : 0
  }
  function Iu() {
    return !0
  }
  function ar() {
    return !1
  }
  function te(t) {
    function e(l, a, u, n, i) {
      ;(this._reactName = l), (this._targetInst = u), (this.type = a), (this.nativeEvent = n), (this.target = i), (this.currentTarget = null)
      for (var f in t) t.hasOwnProperty(f) && ((l = t[f]), (this[f] = l ? l(n) : n[f]))
      return (this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? Iu : ar), (this.isPropagationStopped = ar), this
    }
    return (
      et(e.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0
          var l = this.nativeEvent
          l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != 'unknown' && (l.returnValue = !1), (this.isDefaultPrevented = Iu))
        },
        stopPropagation: function () {
          var l = this.nativeEvent
          l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != 'unknown' && (l.cancelBubble = !0), (this.isPropagationStopped = Iu))
        },
        persist: function () {},
        isPersistent: Iu,
      }),
      e
    )
  }
  var Ul = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (t) {
        return t.timeStamp || Date.now()
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    tn = te(Ul),
    Qa = et({}, Ul, { view: 0, detail: 0 }),
    Sh = te(Qa),
    Ei,
    Ti,
    wa,
    en = et({}, Qa, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Ai,
      button: 0,
      buttons: 0,
      relatedTarget: function (t) {
        return t.relatedTarget === void 0 ? (t.fromElement === t.srcElement ? t.toElement : t.fromElement) : t.relatedTarget
      },
      movementX: function (t) {
        return 'movementX' in t ? t.movementX : (t !== wa && (wa && t.type === 'mousemove' ? ((Ei = t.screenX - wa.screenX), (Ti = t.screenY - wa.screenY)) : (Ti = Ei = 0), (wa = t)), Ei)
      },
      movementY: function (t) {
        return 'movementY' in t ? t.movementY : Ti
      },
    }),
    ur = te(en),
    ph = et({}, en, { dataTransfer: 0 }),
    bh = te(ph),
    Eh = et({}, Qa, { relatedTarget: 0 }),
    Ri = te(Eh),
    Th = et({}, Ul, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Rh = te(Th),
    Ah = et({}, Ul, {
      clipboardData: function (t) {
        return 'clipboardData' in t ? t.clipboardData : window.clipboardData
      },
    }),
    Oh = te(Ah),
    zh = et({}, Ul, { data: 0 }),
    nr = te(zh),
    Dh = { Esc: 'Escape', Spacebar: ' ', Left: 'ArrowLeft', Up: 'ArrowUp', Right: 'ArrowRight', Down: 'ArrowDown', Del: 'Delete', Win: 'OS', Menu: 'ContextMenu', Apps: 'ContextMenu', Scroll: 'ScrollLock', MozPrintableKey: 'Unidentified' },
    _h = { 8: 'Backspace', 9: 'Tab', 12: 'Clear', 13: 'Enter', 16: 'Shift', 17: 'Control', 18: 'Alt', 19: 'Pause', 20: 'CapsLock', 27: 'Escape', 32: ' ', 33: 'PageUp', 34: 'PageDown', 35: 'End', 36: 'Home', 37: 'ArrowLeft', 38: 'ArrowUp', 39: 'ArrowRight', 40: 'ArrowDown', 45: 'Insert', 46: 'Delete', 112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6', 118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12', 144: 'NumLock', 145: 'ScrollLock', 224: 'Meta' },
    Mh = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
  function Uh(t) {
    var e = this.nativeEvent
    return e.getModifierState ? e.getModifierState(t) : (t = Mh[t]) ? !!e[t] : !1
  }
  function Ai() {
    return Uh
  }
  var Ch = et({}, Qa, {
      key: function (t) {
        if (t.key) {
          var e = Dh[t.key] || t.key
          if (e !== 'Unidentified') return e
        }
        return t.type === 'keypress' ? ((t = Pu(t)), t === 13 ? 'Enter' : String.fromCharCode(t)) : t.type === 'keydown' || t.type === 'keyup' ? _h[t.keyCode] || 'Unidentified' : ''
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Ai,
      charCode: function (t) {
        return t.type === 'keypress' ? Pu(t) : 0
      },
      keyCode: function (t) {
        return t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0
      },
      which: function (t) {
        return t.type === 'keypress' ? Pu(t) : t.type === 'keydown' || t.type === 'keyup' ? t.keyCode : 0
      },
    }),
    Hh = te(Ch),
    xh = et({}, en, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }),
    ir = te(xh),
    Nh = et({}, Qa, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Ai }),
    Bh = te(Nh),
    qh = et({}, Ul, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Yh = te(qh),
    jh = et({}, en, {
      deltaX: function (t) {
        return 'deltaX' in t ? t.deltaX : 'wheelDeltaX' in t ? -t.wheelDeltaX : 0
      },
      deltaY: function (t) {
        return 'deltaY' in t ? t.deltaY : 'wheelDeltaY' in t ? -t.wheelDeltaY : 'wheelDelta' in t ? -t.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Lh = te(jh),
    Gh = et({}, Ul, { newState: 0, oldState: 0 }),
    Xh = te(Gh),
    Qh = [9, 13, 27, 32],
    Oi = Ye && 'CompositionEvent' in window,
    Za = null
  Ye && 'documentMode' in document && (Za = document.documentMode)
  var wh = Ye && 'TextEvent' in window && !Za,
    cr = Ye && (!Oi || (Za && 8 < Za && 11 >= Za)),
    fr = ' ',
    rr = !1
  function or(t, e) {
    switch (t) {
      case 'keyup':
        return Qh.indexOf(e.keyCode) !== -1
      case 'keydown':
        return e.keyCode !== 229
      case 'keypress':
      case 'mousedown':
      case 'focusout':
        return !0
      default:
        return !1
    }
  }
  function sr(t) {
    return (t = t.detail), typeof t == 'object' && 'data' in t ? t.data : null
  }
  var na = !1
  function Zh(t, e) {
    switch (t) {
      case 'compositionend':
        return sr(e)
      case 'keypress':
        return e.which !== 32 ? null : ((rr = !0), fr)
      case 'textInput':
        return (t = e.data), t === fr && rr ? null : t
      default:
        return null
    }
  }
  function Vh(t, e) {
    if (na) return t === 'compositionend' || (!Oi && or(t, e)) ? ((t = lr()), (Fu = bi = nl = null), (na = !1), t) : null
    switch (t) {
      case 'paste':
        return null
      case 'keypress':
        if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
          if (e.char && 1 < e.char.length) return e.char
          if (e.which) return String.fromCharCode(e.which)
        }
        return null
      case 'compositionend':
        return cr && e.locale !== 'ko' ? null : e.data
      default:
        return null
    }
  }
  var Kh = { color: !0, date: !0, datetime: !0, 'datetime-local': !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 }
  function dr(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase()
    return e === 'input' ? !!Kh[t.type] : e === 'textarea'
  }
  function hr(t, e, l, a) {
    aa ? (ua ? ua.push(a) : (ua = [a])) : (aa = a), (e = Ln(e, 'onChange')), 0 < e.length && ((l = new tn('onChange', 'change', null, l, a)), t.push({ event: l, listeners: e }))
  }
  var Va = null,
    Ka = null
  function Jh(t) {
    Gs(t, 0)
  }
  function ln(t) {
    var e = La(t)
    if ($f(e)) return t
  }
  function mr(t, e) {
    if (t === 'change') return e
  }
  var vr = !1
  if (Ye) {
    var zi
    if (Ye) {
      var Di = 'oninput' in document
      if (!Di) {
        var yr = document.createElement('div')
        yr.setAttribute('oninput', 'return;'), (Di = typeof yr.oninput == 'function')
      }
      zi = Di
    } else zi = !1
    vr = zi && (!document.documentMode || 9 < document.documentMode)
  }
  function gr() {
    Va && (Va.detachEvent('onpropertychange', Sr), (Ka = Va = null))
  }
  function Sr(t) {
    if (t.propertyName === 'value' && ln(Ka)) {
      var e = []
      hr(e, Ka, t, gi(t)), er(Jh, e)
    }
  }
  function $h(t, e, l) {
    t === 'focusin' ? (gr(), (Va = e), (Ka = l), Va.attachEvent('onpropertychange', Sr)) : t === 'focusout' && gr()
  }
  function kh(t) {
    if (t === 'selectionchange' || t === 'keyup' || t === 'keydown') return ln(Ka)
  }
  function Wh(t, e) {
    if (t === 'click') return ln(e)
  }
  function Fh(t, e) {
    if (t === 'input' || t === 'change') return ln(e)
  }
  function Ph(t, e) {
    return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e)
  }
  var ue = typeof Object.is == 'function' ? Object.is : Ph
  function Ja(t, e) {
    if (ue(t, e)) return !0
    if (typeof t != 'object' || t === null || typeof e != 'object' || e === null) return !1
    var l = Object.keys(t),
      a = Object.keys(e)
    if (l.length !== a.length) return !1
    for (a = 0; a < l.length; a++) {
      var u = l[a]
      if (!ci.call(e, u) || !ue(t[u], e[u])) return !1
    }
    return !0
  }
  function pr(t) {
    for (; t && t.firstChild; ) t = t.firstChild
    return t
  }
  function br(t, e) {
    var l = pr(t)
    t = 0
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = t + l.textContent.length), t <= e && a >= e)) return { node: l, offset: e - t }
        t = a
      }
      t: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling
            break t
          }
          l = l.parentNode
        }
        l = void 0
      }
      l = pr(l)
    }
  }
  function Er(t, e) {
    return t && e ? (t === e ? !0 : t && t.nodeType === 3 ? !1 : e && e.nodeType === 3 ? Er(t, e.parentNode) : 'contains' in t ? t.contains(e) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(e) & 16) : !1) : !1
  }
  function Tr(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window
    for (var e = ku(t.document); e instanceof t.HTMLIFrameElement; ) {
      try {
        var l = typeof e.contentWindow.location.href == 'string'
      } catch {
        l = !1
      }
      if (l) t = e.contentWindow
      else break
      e = ku(t.document)
    }
    return e
  }
  function _i(t) {
    var e = t && t.nodeName && t.nodeName.toLowerCase()
    return e && ((e === 'input' && (t.type === 'text' || t.type === 'search' || t.type === 'tel' || t.type === 'url' || t.type === 'password')) || e === 'textarea' || t.contentEditable === 'true')
  }
  function Ih(t, e) {
    var l = Tr(e)
    e = t.focusedElem
    var a = t.selectionRange
    if (l !== e && e && e.ownerDocument && Er(e.ownerDocument.documentElement, e)) {
      if (a !== null && _i(e)) {
        if (((t = a.start), (l = a.end), l === void 0 && (l = t), 'selectionStart' in e)) (e.selectionStart = t), (e.selectionEnd = Math.min(l, e.value.length))
        else if (((l = ((t = e.ownerDocument || document) && t.defaultView) || window), l.getSelection)) {
          l = l.getSelection()
          var u = e.textContent.length,
            n = Math.min(a.start, u)
          ;(a = a.end === void 0 ? n : Math.min(a.end, u)), !l.extend && n > a && ((u = a), (a = n), (n = u)), (u = br(e, n))
          var i = br(e, a)
          u && i && (l.rangeCount !== 1 || l.anchorNode !== u.node || l.anchorOffset !== u.offset || l.focusNode !== i.node || l.focusOffset !== i.offset) && ((t = t.createRange()), t.setStart(u.node, u.offset), l.removeAllRanges(), n > a ? (l.addRange(t), l.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), l.addRange(t)))
        }
      }
      for (t = [], l = e; (l = l.parentNode); ) l.nodeType === 1 && t.push({ element: l, left: l.scrollLeft, top: l.scrollTop })
      for (typeof e.focus == 'function' && e.focus(), e = 0; e < t.length; e++) (l = t[e]), (l.element.scrollLeft = l.left), (l.element.scrollTop = l.top)
    }
  }
  var t0 = Ye && 'documentMode' in document && 11 >= document.documentMode,
    ia = null,
    Mi = null,
    $a = null,
    Ui = !1
  function Rr(t, e, l) {
    var a = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument
    Ui || ia == null || ia !== ku(a) || ((a = ia), 'selectionStart' in a && _i(a) ? (a = { start: a.selectionStart, end: a.selectionEnd }) : ((a = ((a.ownerDocument && a.ownerDocument.defaultView) || window).getSelection()), (a = { anchorNode: a.anchorNode, anchorOffset: a.anchorOffset, focusNode: a.focusNode, focusOffset: a.focusOffset })), ($a && Ja($a, a)) || (($a = a), (a = Ln(Mi, 'onSelect')), 0 < a.length && ((e = new tn('onSelect', 'select', null, e, l)), t.push({ event: e, listeners: a }), (e.target = ia))))
  }
  function Cl(t, e) {
    var l = {}
    return (l[t.toLowerCase()] = e.toLowerCase()), (l['Webkit' + t] = 'webkit' + e), (l['Moz' + t] = 'moz' + e), l
  }
  var ca = { animationend: Cl('Animation', 'AnimationEnd'), animationiteration: Cl('Animation', 'AnimationIteration'), animationstart: Cl('Animation', 'AnimationStart'), transitionrun: Cl('Transition', 'TransitionRun'), transitionstart: Cl('Transition', 'TransitionStart'), transitioncancel: Cl('Transition', 'TransitionCancel'), transitionend: Cl('Transition', 'TransitionEnd') },
    Ci = {},
    Ar = {}
  Ye && ((Ar = document.createElement('div').style), 'AnimationEvent' in window || (delete ca.animationend.animation, delete ca.animationiteration.animation, delete ca.animationstart.animation), 'TransitionEvent' in window || delete ca.transitionend.transition)
  function Hl(t) {
    if (Ci[t]) return Ci[t]
    if (!ca[t]) return t
    var e = ca[t],
      l
    for (l in e) if (e.hasOwnProperty(l) && l in Ar) return (Ci[t] = e[l])
    return t
  }
  var Or = Hl('animationend'),
    zr = Hl('animationiteration'),
    Dr = Hl('animationstart'),
    e0 = Hl('transitionrun'),
    l0 = Hl('transitionstart'),
    a0 = Hl('transitioncancel'),
    _r = Hl('transitionend'),
    Mr = new Map(),
    Ur = 'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel'.split(' ')
  function Ee(t, e) {
    Mr.set(t, e), Ml(e, [t])
  }
  var se = [],
    fa = 0,
    Hi = 0
  function an() {
    for (var t = fa, e = (Hi = fa = 0); e < t; ) {
      var l = se[e]
      se[e++] = null
      var a = se[e]
      se[e++] = null
      var u = se[e]
      se[e++] = null
      var n = se[e]
      if (((se[e++] = null), a !== null && u !== null)) {
        var i = a.pending
        i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)), (a.pending = u)
      }
      n !== 0 && Cr(l, u, n)
    }
  }
  function un(t, e, l, a) {
    ;(se[fa++] = t), (se[fa++] = e), (se[fa++] = l), (se[fa++] = a), (Hi |= a), (t.lanes |= a), (t = t.alternate), t !== null && (t.lanes |= a)
  }
  function xi(t, e, l, a) {
    return un(t, e, l, a), nn(t)
  }
  function il(t, e) {
    return un(t, null, null, e), nn(t)
  }
  function Cr(t, e, l) {
    t.lanes |= l
    var a = t.alternate
    a !== null && (a.lanes |= l)
    for (var u = !1, n = t.return; n !== null; ) (n.childLanes |= l), (a = n.alternate), a !== null && (a.childLanes |= l), n.tag === 22 && ((t = n.stateNode), t === null || t._visibility & 1 || (u = !0)), (t = n), (n = n.return)
    u && e !== null && t.tag === 3 && ((n = t.stateNode), (u = 31 - ae(l)), (n = n.hiddenUpdates), (t = n[u]), t === null ? (n[u] = [e]) : t.push(e), (e.lane = l | 536870912))
  }
  function nn(t) {
    if (50 < pu) throw ((pu = 0), (Lc = null), Error(r(185)))
    for (var e = t.return; e !== null; ) (t = e), (e = t.return)
    return t.tag === 3 ? t.stateNode : null
  }
  var ra = {},
    Hr = new WeakMap()
  function de(t, e) {
    if (typeof t == 'object' && t !== null) {
      var l = Hr.get(t)
      return l !== void 0 ? l : ((e = { value: t, source: e, stack: tt(e) }), Hr.set(t, e), e)
    }
    return { value: t, source: e, stack: tt(e) }
  }
  var oa = [],
    sa = 0,
    cn = null,
    fn = 0,
    he = [],
    me = 0,
    xl = null,
    Le = 1,
    Ge = ''
  function Nl(t, e) {
    ;(oa[sa++] = fn), (oa[sa++] = cn), (cn = t), (fn = e)
  }
  function xr(t, e, l) {
    ;(he[me++] = Le), (he[me++] = Ge), (he[me++] = xl), (xl = t)
    var a = Le
    t = Ge
    var u = 32 - ae(a) - 1
    ;(a &= ~(1 << u)), (l += 1)
    var n = 32 - ae(e) + u
    if (30 < n) {
      var i = u - (u % 5)
      ;(n = (a & ((1 << i) - 1)).toString(32)), (a >>= i), (u -= i), (Le = (1 << (32 - ae(e) + u)) | (l << u) | a), (Ge = n + t)
    } else (Le = (1 << n) | (l << u) | a), (Ge = t)
  }
  function Ni(t) {
    t.return !== null && (Nl(t, 1), xr(t, 1, 0))
  }
  function Bi(t) {
    for (; t === cn; ) (cn = oa[--sa]), (oa[sa] = null), (fn = oa[--sa]), (oa[sa] = null)
    for (; t === xl; ) (xl = he[--me]), (he[me] = null), (Ge = he[--me]), (he[me] = null), (Le = he[--me]), (he[me] = null)
  }
  var Wt = null,
    Qt = null,
    ot = !1,
    Te = null,
    _e = !1,
    qi = Error(r(519))
  function Bl(t) {
    var e = Error(r(418, ''))
    throw (Fa(de(e, t)), qi)
  }
  function Nr(t) {
    var e = t.stateNode,
      l = t.type,
      a = t.memoizedProps
    switch (((e[Vt] = t), (e[It] = a), l)) {
      case 'dialog':
        ct('cancel', e), ct('close', e)
        break
      case 'iframe':
      case 'object':
      case 'embed':
        ct('load', e)
        break
      case 'video':
      case 'audio':
        for (l = 0; l < Eu.length; l++) ct(Eu[l], e)
        break
      case 'source':
        ct('error', e)
        break
      case 'img':
      case 'image':
      case 'link':
        ct('error', e), ct('load', e)
        break
      case 'details':
        ct('toggle', e)
        break
      case 'input':
        ct('invalid', e), kf(e, a.value, a.defaultValue, a.checked, a.defaultChecked, a.type, a.name, !0), $u(e)
        break
      case 'select':
        ct('invalid', e)
        break
      case 'textarea':
        ct('invalid', e), Ff(e, a.value, a.defaultValue, a.children), $u(e)
    }
    ;(l = a.children), (typeof l != 'string' && typeof l != 'number' && typeof l != 'bigint') || e.textContent === '' + l || a.suppressHydrationWarning === !0 || Zs(e.textContent, l) ? (a.popover != null && (ct('beforetoggle', e), ct('toggle', e)), a.onScroll != null && ct('scroll', e), a.onScrollEnd != null && ct('scrollend', e), a.onClick != null && (e.onclick = Gn), (e = !0)) : (e = !1), e || Bl(t)
  }
  function Br(t) {
    for (Wt = t.return; Wt; )
      switch (Wt.tag) {
        case 3:
        case 27:
          _e = !0
          return
        case 5:
        case 13:
          _e = !1
          return
        default:
          Wt = Wt.return
      }
  }
  function ka(t) {
    if (t !== Wt) return !1
    if (!ot) return Br(t), (ot = !0), !1
    var e = !1,
      l
    if (((l = t.tag !== 3 && t.tag !== 27) && ((l = t.tag === 5) && ((l = t.type), (l = !(l !== 'form' && l !== 'button') || lf(t.type, t.memoizedProps))), (l = !l)), l && (e = !0), e && Qt && Bl(t), Br(t), t.tag === 13)) {
      if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t)) throw Error(r(317))
      t: {
        for (t = t.nextSibling, e = 0; t; ) {
          if (t.nodeType === 8)
            if (((l = t.data), l === '/$')) {
              if (e === 0) {
                Qt = Ae(t.nextSibling)
                break t
              }
              e--
            } else (l !== '$' && l !== '$!' && l !== '$?') || e++
          t = t.nextSibling
        }
        Qt = null
      }
    } else Qt = Wt ? Ae(t.stateNode.nextSibling) : null
    return !0
  }
  function Wa() {
    ;(Qt = Wt = null), (ot = !1)
  }
  function Fa(t) {
    Te === null ? (Te = [t]) : Te.push(t)
  }
  var Pa = Error(r(460)),
    qr = Error(r(474)),
    Yi = { then: function () {} }
  function Yr(t) {
    return (t = t.status), t === 'fulfilled' || t === 'rejected'
  }
  function rn() {}
  function jr(t, e, l) {
    switch (((l = t[l]), l === void 0 ? t.push(e) : l !== e && (e.then(rn, rn), (e = l)), e.status)) {
      case 'fulfilled':
        return e.value
      case 'rejected':
        throw ((t = e.reason), t === Pa ? Error(r(483)) : t)
      default:
        if (typeof e.status == 'string') e.then(rn, rn)
        else {
          if (((t = pt), t !== null && 100 < t.shellSuspendCounter)) throw Error(r(482))
          ;(t = e),
            (t.status = 'pending'),
            t.then(
              function (a) {
                if (e.status === 'pending') {
                  var u = e
                  ;(u.status = 'fulfilled'), (u.value = a)
                }
              },
              function (a) {
                if (e.status === 'pending') {
                  var u = e
                  ;(u.status = 'rejected'), (u.reason = a)
                }
              },
            )
        }
        switch (e.status) {
          case 'fulfilled':
            return e.value
          case 'rejected':
            throw ((t = e.reason), t === Pa ? Error(r(483)) : t)
        }
        throw ((Ia = e), Pa)
    }
  }
  var Ia = null
  function Lr() {
    if (Ia === null) throw Error(r(459))
    var t = Ia
    return (Ia = null), t
  }
  var da = null,
    tu = 0
  function on(t) {
    var e = tu
    return (tu += 1), da === null && (da = []), jr(da, t, e)
  }
  function eu(t, e) {
    ;(e = e.props.ref), (t.ref = e !== void 0 ? e : null)
  }
  function sn(t, e) {
    throw e.$$typeof === S ? Error(r(525)) : ((t = Object.prototype.toString.call(e)), Error(r(31, t === '[object Object]' ? 'object with keys {' + Object.keys(e).join(', ') + '}' : t)))
  }
  function Gr(t) {
    var e = t._init
    return e(t._payload)
  }
  function Xr(t) {
    function e(b, y) {
      if (t) {
        var E = b.deletions
        E === null ? ((b.deletions = [y]), (b.flags |= 16)) : E.push(y)
      }
    }
    function l(b, y) {
      if (!t) return null
      for (; y !== null; ) e(b, y), (y = y.sibling)
      return null
    }
    function a(b) {
      for (var y = new Map(); b !== null; ) b.key !== null ? y.set(b.key, b) : y.set(b.index, b), (b = b.sibling)
      return y
    }
    function u(b, y) {
      return (b = Sl(b, y)), (b.index = 0), (b.sibling = null), b
    }
    function n(b, y, E) {
      return (b.index = E), t ? ((E = b.alternate), E !== null ? ((E = E.index), E < y ? ((b.flags |= 33554434), y) : E) : ((b.flags |= 33554434), y)) : ((b.flags |= 1048576), y)
    }
    function i(b) {
      return t && b.alternate === null && (b.flags |= 33554434), b
    }
    function f(b, y, E, U) {
      return y === null || y.tag !== 6 ? ((y = Cc(E, b.mode, U)), (y.return = b), y) : ((y = u(y, E)), (y.return = b), y)
    }
    function s(b, y, E, U) {
      var w = E.type
      return w === p ? z(b, y, E.props.children, U, E.key) : y !== null && (y.elementType === w || (typeof w == 'object' && w !== null && w.$$typeof === q && Gr(w) === y.type)) ? ((y = u(y, E.props)), eu(y, E), (y.return = b), y) : ((y = Mn(E.type, E.key, E.props, null, b.mode, U)), eu(y, E), (y.return = b), y)
    }
    function g(b, y, E, U) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== E.containerInfo || y.stateNode.implementation !== E.implementation ? ((y = Hc(E, b.mode, U)), (y.return = b), y) : ((y = u(y, E.children || [])), (y.return = b), y)
    }
    function z(b, y, E, U, w) {
      return y === null || y.tag !== 7 ? ((y = Vl(E, b.mode, U, w)), (y.return = b), y) : ((y = u(y, E)), (y.return = b), y)
    }
    function C(b, y, E) {
      if ((typeof y == 'string' && y !== '') || typeof y == 'number' || typeof y == 'bigint') return (y = Cc('' + y, b.mode, E)), (y.return = b), y
      if (typeof y == 'object' && y !== null) {
        switch (y.$$typeof) {
          case R:
            return (E = Mn(y.type, y.key, y.props, null, b.mode, E)), eu(E, y), (E.return = b), E
          case _:
            return (y = Hc(y, b.mode, E)), (y.return = b), y
          case q:
            var U = y._init
            return (y = U(y._payload)), C(b, y, E)
        }
        if (K(y) || Tt(y)) return (y = Vl(y, b.mode, E, null)), (y.return = b), y
        if (typeof y.then == 'function') return C(b, on(y), E)
        if (y.$$typeof === x) return C(b, zn(b, y), E)
        sn(b, y)
      }
      return null
    }
    function T(b, y, E, U) {
      var w = y !== null ? y.key : null
      if ((typeof E == 'string' && E !== '') || typeof E == 'number' || typeof E == 'bigint') return w !== null ? null : f(b, y, '' + E, U)
      if (typeof E == 'object' && E !== null) {
        switch (E.$$typeof) {
          case R:
            return E.key === w ? s(b, y, E, U) : null
          case _:
            return E.key === w ? g(b, y, E, U) : null
          case q:
            return (w = E._init), (E = w(E._payload)), T(b, y, E, U)
        }
        if (K(E) || Tt(E)) return w !== null ? null : z(b, y, E, U, null)
        if (typeof E.then == 'function') return T(b, y, on(E), U)
        if (E.$$typeof === x) return T(b, y, zn(b, E), U)
        sn(b, E)
      }
      return null
    }
    function A(b, y, E, U, w) {
      if ((typeof U == 'string' && U !== '') || typeof U == 'number' || typeof U == 'bigint') return (b = b.get(E) || null), f(y, b, '' + U, w)
      if (typeof U == 'object' && U !== null) {
        switch (U.$$typeof) {
          case R:
            return (b = b.get(U.key === null ? E : U.key) || null), s(y, b, U, w)
          case _:
            return (b = b.get(U.key === null ? E : U.key) || null), g(y, b, U, w)
          case q:
            var nt = U._init
            return (U = nt(U._payload)), A(b, y, E, U, w)
        }
        if (K(U) || Tt(U)) return (b = b.get(E) || null), z(y, b, U, w, null)
        if (typeof U.then == 'function') return A(b, y, E, on(U), w)
        if (U.$$typeof === x) return A(b, y, E, zn(y, U), w)
        sn(y, U)
      }
      return null
    }
    function Z(b, y, E, U) {
      for (var w = null, nt = null, V = y, J = (y = 0), Gt = null; V !== null && J < E.length; J++) {
        V.index > J ? ((Gt = V), (V = null)) : (Gt = V.sibling)
        var st = T(b, V, E[J], U)
        if (st === null) {
          V === null && (V = Gt)
          break
        }
        t && V && st.alternate === null && e(b, V), (y = n(st, y, J)), nt === null ? (w = st) : (nt.sibling = st), (nt = st), (V = Gt)
      }
      if (J === E.length) return l(b, V), ot && Nl(b, J), w
      if (V === null) {
        for (; J < E.length; J++) (V = C(b, E[J], U)), V !== null && ((y = n(V, y, J)), nt === null ? (w = V) : (nt.sibling = V), (nt = V))
        return ot && Nl(b, J), w
      }
      for (V = a(V); J < E.length; J++) (Gt = A(V, b, J, E[J], U)), Gt !== null && (t && Gt.alternate !== null && V.delete(Gt.key === null ? J : Gt.key), (y = n(Gt, y, J)), nt === null ? (w = Gt) : (nt.sibling = Gt), (nt = Gt))
      return (
        t &&
          V.forEach(function (Ol) {
            return e(b, Ol)
          }),
        ot && Nl(b, J),
        w
      )
    }
    function P(b, y, E, U) {
      if (E == null) throw Error(r(151))
      for (var w = null, nt = null, V = y, J = (y = 0), Gt = null, st = E.next(); V !== null && !st.done; J++, st = E.next()) {
        V.index > J ? ((Gt = V), (V = null)) : (Gt = V.sibling)
        var Ol = T(b, V, st.value, U)
        if (Ol === null) {
          V === null && (V = Gt)
          break
        }
        t && V && Ol.alternate === null && e(b, V), (y = n(Ol, y, J)), nt === null ? (w = Ol) : (nt.sibling = Ol), (nt = Ol), (V = Gt)
      }
      if (st.done) return l(b, V), ot && Nl(b, J), w
      if (V === null) {
        for (; !st.done; J++, st = E.next()) (st = C(b, st.value, U)), st !== null && ((y = n(st, y, J)), nt === null ? (w = st) : (nt.sibling = st), (nt = st))
        return ot && Nl(b, J), w
      }
      for (V = a(V); !st.done; J++, st = E.next()) (st = A(V, b, J, st.value, U)), st !== null && (t && st.alternate !== null && V.delete(st.key === null ? J : st.key), (y = n(st, y, J)), nt === null ? (w = st) : (nt.sibling = st), (nt = st))
      return (
        t &&
          V.forEach(function (gm) {
            return e(b, gm)
          }),
        ot && Nl(b, J),
        w
      )
    }
    function _t(b, y, E, U) {
      if ((typeof E == 'object' && E !== null && E.type === p && E.key === null && (E = E.props.children), typeof E == 'object' && E !== null)) {
        switch (E.$$typeof) {
          case R:
            t: {
              for (var w = E.key; y !== null; ) {
                if (y.key === w) {
                  if (((w = E.type), w === p)) {
                    if (y.tag === 7) {
                      l(b, y.sibling), (U = u(y, E.props.children)), (U.return = b), (b = U)
                      break t
                    }
                  } else if (y.elementType === w || (typeof w == 'object' && w !== null && w.$$typeof === q && Gr(w) === y.type)) {
                    l(b, y.sibling), (U = u(y, E.props)), eu(U, E), (U.return = b), (b = U)
                    break t
                  }
                  l(b, y)
                  break
                } else e(b, y)
                y = y.sibling
              }
              E.type === p ? ((U = Vl(E.props.children, b.mode, U, E.key)), (U.return = b), (b = U)) : ((U = Mn(E.type, E.key, E.props, null, b.mode, U)), eu(U, E), (U.return = b), (b = U))
            }
            return i(b)
          case _:
            t: {
              for (w = E.key; y !== null; ) {
                if (y.key === w)
                  if (y.tag === 4 && y.stateNode.containerInfo === E.containerInfo && y.stateNode.implementation === E.implementation) {
                    l(b, y.sibling), (U = u(y, E.children || [])), (U.return = b), (b = U)
                    break t
                  } else {
                    l(b, y)
                    break
                  }
                else e(b, y)
                y = y.sibling
              }
              ;(U = Hc(E, b.mode, U)), (U.return = b), (b = U)
            }
            return i(b)
          case q:
            return (w = E._init), (E = w(E._payload)), _t(b, y, E, U)
        }
        if (K(E)) return Z(b, y, E, U)
        if (Tt(E)) {
          if (((w = Tt(E)), typeof w != 'function')) throw Error(r(150))
          return (E = w.call(E)), P(b, y, E, U)
        }
        if (typeof E.then == 'function') return _t(b, y, on(E), U)
        if (E.$$typeof === x) return _t(b, y, zn(b, E), U)
        sn(b, E)
      }
      return (typeof E == 'string' && E !== '') || typeof E == 'number' || typeof E == 'bigint' ? ((E = '' + E), y !== null && y.tag === 6 ? (l(b, y.sibling), (U = u(y, E)), (U.return = b), (b = U)) : (l(b, y), (U = Cc(E, b.mode, U)), (U.return = b), (b = U)), i(b)) : l(b, y)
    }
    return function (b, y, E, U) {
      try {
        tu = 0
        var w = _t(b, y, E, U)
        return (da = null), w
      } catch (V) {
        if (V === Pa) throw V
        var nt = Se(29, V, null, b.mode)
        return (nt.lanes = U), (nt.return = b), nt
      } finally {
      }
    }
  }
  var ql = Xr(!0),
    Qr = Xr(!1),
    ha = dt(null),
    dn = dt(0)
  function wr(t, e) {
    ;(t = Fe), Et(dn, t), Et(ha, e), (Fe = t | e.baseLanes)
  }
  function ji() {
    Et(dn, Fe), Et(ha, ha.current)
  }
  function Li() {
    ;(Fe = dn.current), Ut(ha), Ut(dn)
  }
  var ve = dt(null),
    Me = null
  function cl(t) {
    var e = t.alternate
    Et(Nt, Nt.current & 1), Et(ve, t), Me === null && (e === null || ha.current !== null || e.memoizedState !== null) && (Me = t)
  }
  function Zr(t) {
    if (t.tag === 22) {
      if ((Et(Nt, Nt.current), Et(ve, t), Me === null)) {
        var e = t.alternate
        e !== null && e.memoizedState !== null && (Me = t)
      }
    } else fl()
  }
  function fl() {
    Et(Nt, Nt.current), Et(ve, ve.current)
  }
  function Xe(t) {
    Ut(ve), Me === t && (Me = null), Ut(Nt)
  }
  var Nt = dt(0)
  function hn(t) {
    for (var e = t; e !== null; ) {
      if (e.tag === 13) {
        var l = e.memoizedState
        if (l !== null && ((l = l.dehydrated), l === null || l.data === '$?' || l.data === '$!')) return e
      } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
        if (e.flags & 128) return e
      } else if (e.child !== null) {
        ;(e.child.return = e), (e = e.child)
        continue
      }
      if (e === t) break
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return null
        e = e.return
      }
      ;(e.sibling.return = e.return), (e = e.sibling)
    }
    return null
  }
  var u0 =
      typeof AbortController < 'u'
        ? AbortController
        : function () {
            var t = [],
              e = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  t.push(a)
                },
              })
            this.abort = function () {
              ;(e.aborted = !0),
                t.forEach(function (l) {
                  return l()
                })
            }
          },
    n0 = c.unstable_scheduleCallback,
    i0 = c.unstable_NormalPriority,
    Bt = { $$typeof: x, Consumer: null, Provider: null, _currentValue: null, _currentValue2: null, _threadCount: 0 }
  function Gi() {
    return { controller: new u0(), data: new Map(), refCount: 0 }
  }
  function lu(t) {
    t.refCount--,
      t.refCount === 0 &&
        n0(i0, function () {
          t.controller.abort()
        })
  }
  var au = null,
    Xi = 0,
    ma = 0,
    va = null
  function c0(t, e) {
    if (au === null) {
      var l = (au = [])
      ;(Xi = 0),
        (ma = Jc()),
        (va = {
          status: 'pending',
          value: void 0,
          then: function (a) {
            l.push(a)
          },
        })
    }
    return Xi++, e.then(Vr, Vr), e
  }
  function Vr() {
    if (--Xi === 0 && au !== null) {
      va !== null && (va.status = 'fulfilled')
      var t = au
      ;(au = null), (ma = 0), (va = null)
      for (var e = 0; e < t.length; e++) (0, t[e])()
    }
  }
  function f0(t, e) {
    var l = [],
      a = {
        status: 'pending',
        value: null,
        reason: null,
        then: function (u) {
          l.push(u)
        },
      }
    return (
      t.then(
        function () {
          ;(a.status = 'fulfilled'), (a.value = e)
          for (var u = 0; u < l.length; u++) (0, l[u])(e)
        },
        function (u) {
          for (a.status = 'rejected', a.reason = u, u = 0; u < l.length; u++) (0, l[u])(void 0)
        },
      ),
      a
    )
  }
  var Kr = Q.S
  Q.S = function (t, e) {
    typeof e == 'object' && e !== null && typeof e.then == 'function' && c0(t, e), Kr !== null && Kr(t, e)
  }
  var Yl = dt(null)
  function Qi() {
    var t = Yl.current
    return t !== null ? t : pt.pooledCache
  }
  function mn(t, e) {
    e === null ? Et(Yl, Yl.current) : Et(Yl, e.pool)
  }
  function Jr() {
    var t = Qi()
    return t === null ? null : { parent: Bt._currentValue, pool: t }
  }
  var rl = 0,
    ut = null,
    mt = null,
    Ct = null,
    vn = !1,
    ya = !1,
    jl = !1,
    yn = 0,
    uu = 0,
    ga = null,
    r0 = 0
  function Mt() {
    throw Error(r(321))
  }
  function wi(t, e) {
    if (e === null) return !1
    for (var l = 0; l < e.length && l < t.length; l++) if (!ue(t[l], e[l])) return !1
    return !0
  }
  function Zi(t, e, l, a, u, n) {
    return (rl = n), (ut = e), (e.memoizedState = null), (e.updateQueue = null), (e.lanes = 0), (Q.H = t === null || t.memoizedState === null ? Ll : ol), (jl = !1), (n = l(a, u)), (jl = !1), ya && (n = kr(e, l, a, u)), $r(t), n
  }
  function $r(t) {
    Q.H = Ue
    var e = mt !== null && mt.next !== null
    if (((rl = 0), (Ct = mt = ut = null), (vn = !1), (uu = 0), (ga = null), e)) throw Error(r(300))
    t === null || jt || ((t = t.dependencies), t !== null && On(t) && (jt = !0))
  }
  function kr(t, e, l, a) {
    ut = t
    var u = 0
    do {
      if ((ya && (ga = null), (uu = 0), (ya = !1), 25 <= u)) throw Error(r(301))
      if (((u += 1), (Ct = mt = null), t.updateQueue != null)) {
        var n = t.updateQueue
        ;(n.lastEffect = null), (n.events = null), (n.stores = null), n.memoCache != null && (n.memoCache.index = 0)
      }
      ;(Q.H = Gl), (n = e(l, a))
    } while (ya)
    return n
  }
  function o0() {
    var t = Q.H,
      e = t.useState()[0]
    return (e = typeof e.then == 'function' ? nu(e) : e), (t = t.useState()[0]), (mt !== null ? mt.memoizedState : null) !== t && (ut.flags |= 1024), e
  }
  function Vi() {
    var t = yn !== 0
    return (yn = 0), t
  }
  function Ki(t, e, l) {
    ;(e.updateQueue = t.updateQueue), (e.flags &= -2053), (t.lanes &= ~l)
  }
  function Ji(t) {
    if (vn) {
      for (t = t.memoizedState; t !== null; ) {
        var e = t.queue
        e !== null && (e.pending = null), (t = t.next)
      }
      vn = !1
    }
    ;(rl = 0), (Ct = mt = ut = null), (ya = !1), (uu = yn = 0), (ga = null)
  }
  function ee() {
    var t = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }
    return Ct === null ? (ut.memoizedState = Ct = t) : (Ct = Ct.next = t), Ct
  }
  function Ht() {
    if (mt === null) {
      var t = ut.alternate
      t = t !== null ? t.memoizedState : null
    } else t = mt.next
    var e = Ct === null ? ut.memoizedState : Ct.next
    if (e !== null) (Ct = e), (mt = t)
    else {
      if (t === null) throw ut.alternate === null ? Error(r(467)) : Error(r(310))
      ;(mt = t), (t = { memoizedState: mt.memoizedState, baseState: mt.baseState, baseQueue: mt.baseQueue, queue: mt.queue, next: null }), Ct === null ? (ut.memoizedState = Ct = t) : (Ct = Ct.next = t)
    }
    return Ct
  }
  var gn
  gn = function () {
    return { lastEffect: null, events: null, stores: null, memoCache: null }
  }
  function nu(t) {
    var e = uu
    return (uu += 1), ga === null && (ga = []), (t = jr(ga, t, e)), (e = ut), (Ct === null ? e.memoizedState : Ct.next) === null && ((e = e.alternate), (Q.H = e === null || e.memoizedState === null ? Ll : ol)), t
  }
  function Sn(t) {
    if (t !== null && typeof t == 'object') {
      if (typeof t.then == 'function') return nu(t)
      if (t.$$typeof === x) return Kt(t)
    }
    throw Error(r(438, String(t)))
  }
  function $i(t) {
    var e = null,
      l = ut.updateQueue
    if ((l !== null && (e = l.memoCache), e == null)) {
      var a = ut.alternate
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (e = {
              data: a.data.map(function (u) {
                return u.slice()
              }),
              index: 0,
            })))
    }
    if ((e == null && (e = { data: [], index: 0 }), l === null && ((l = gn()), (ut.updateQueue = l)), (l.memoCache = e), (l = e.data[e.index]), l === void 0)) for (l = e.data[e.index] = Array(t), a = 0; a < t; a++) l[a] = ht
    return e.index++, l
  }
  function Qe(t, e) {
    return typeof e == 'function' ? e(t) : e
  }
  function pn(t) {
    var e = Ht()
    return ki(e, mt, t)
  }
  function ki(t, e, l) {
    var a = t.queue
    if (a === null) throw Error(r(311))
    a.lastRenderedReducer = l
    var u = t.baseQueue,
      n = a.pending
    if (n !== null) {
      if (u !== null) {
        var i = u.next
        ;(u.next = n.next), (n.next = i)
      }
      ;(e.baseQueue = u = n), (a.pending = null)
    }
    if (((n = t.baseState), u === null)) t.memoizedState = n
    else {
      e = u.next
      var f = (i = null),
        s = null,
        g = e,
        z = !1
      do {
        var C = g.lane & -536870913
        if (C !== g.lane ? (rt & C) === C : (rl & C) === C) {
          var T = g.revertLane
          if (T === 0) s !== null && (s = s.next = { lane: 0, revertLane: 0, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), C === ma && (z = !0)
          else if ((rl & T) === T) {
            ;(g = g.next), T === ma && (z = !0)
            continue
          } else (C = { lane: 0, revertLane: g.revertLane, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), s === null ? ((f = s = C), (i = n)) : (s = s.next = C), (ut.lanes |= T), (pl |= T)
          ;(C = g.action), jl && l(n, C), (n = g.hasEagerState ? g.eagerState : l(n, C))
        } else (T = { lane: C, revertLane: g.revertLane, action: g.action, hasEagerState: g.hasEagerState, eagerState: g.eagerState, next: null }), s === null ? ((f = s = T), (i = n)) : (s = s.next = T), (ut.lanes |= C), (pl |= C)
        g = g.next
      } while (g !== null && g !== e)
      if ((s === null ? (i = n) : (s.next = f), !ue(n, t.memoizedState) && ((jt = !0), z && ((l = va), l !== null)))) throw l
      ;(t.memoizedState = n), (t.baseState = i), (t.baseQueue = s), (a.lastRenderedState = n)
    }
    return u === null && (a.lanes = 0), [t.memoizedState, a.dispatch]
  }
  function Wi(t) {
    var e = Ht(),
      l = e.queue
    if (l === null) throw Error(r(311))
    l.lastRenderedReducer = t
    var a = l.dispatch,
      u = l.pending,
      n = e.memoizedState
    if (u !== null) {
      l.pending = null
      var i = (u = u.next)
      do (n = t(n, i.action)), (i = i.next)
      while (i !== u)
      ue(n, e.memoizedState) || (jt = !0), (e.memoizedState = n), e.baseQueue === null && (e.baseState = n), (l.lastRenderedState = n)
    }
    return [n, a]
  }
  function Wr(t, e, l) {
    var a = ut,
      u = Ht(),
      n = ot
    if (n) {
      if (l === void 0) throw Error(r(407))
      l = l()
    } else l = e()
    var i = !ue((mt || u).memoizedState, l)
    if ((i && ((u.memoizedState = l), (jt = !0)), (u = u.queue), Ii(Ir.bind(null, a, u, t), [t]), u.getSnapshot !== e || i || (Ct !== null && Ct.memoizedState.tag & 1))) {
      if (((a.flags |= 2048), Sa(9, Pr.bind(null, a, u, l, e), { destroy: void 0 }, null), pt === null)) throw Error(r(349))
      n || rl & 60 || Fr(a, e, l)
    }
    return l
  }
  function Fr(t, e, l) {
    ;(t.flags |= 16384), (t = { getSnapshot: e, value: l }), (e = ut.updateQueue), e === null ? ((e = gn()), (ut.updateQueue = e), (e.stores = [t])) : ((l = e.stores), l === null ? (e.stores = [t]) : l.push(t))
  }
  function Pr(t, e, l, a) {
    ;(e.value = l), (e.getSnapshot = a), to(e) && eo(t)
  }
  function Ir(t, e, l) {
    return l(function () {
      to(e) && eo(t)
    })
  }
  function to(t) {
    var e = t.getSnapshot
    t = t.value
    try {
      var l = e()
      return !ue(t, l)
    } catch {
      return !0
    }
  }
  function eo(t) {
    var e = il(t, 2)
    e !== null && Ft(e, t, 2)
  }
  function Fi(t) {
    var e = ee()
    if (typeof t == 'function') {
      var l = t
      if (((t = l()), jl)) {
        al(!0)
        try {
          l()
        } finally {
          al(!1)
        }
      }
    }
    return (e.memoizedState = e.baseState = t), (e.queue = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Qe, lastRenderedState: t }), e
  }
  function lo(t, e, l, a) {
    return (t.baseState = l), ki(t, mt, typeof a == 'function' ? a : Qe)
  }
  function s0(t, e, l, a, u) {
    if (Tn(t)) throw Error(r(485))
    if (((t = e.action), t !== null)) {
      var n = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: 'pending',
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i)
        },
      }
      Q.T !== null ? l(!0) : (n.isTransition = !1), a(n), (l = e.pending), l === null ? ((n.next = e.pending = n), ao(e, n)) : ((n.next = l.next), (e.pending = l.next = n))
    }
  }
  function ao(t, e) {
    var l = e.action,
      a = e.payload,
      u = t.state
    if (e.isTransition) {
      var n = Q.T,
        i = {}
      Q.T = i
      try {
        var f = l(u, a),
          s = Q.S
        s !== null && s(i, f), uo(t, e, f)
      } catch (g) {
        Pi(t, e, g)
      } finally {
        Q.T = n
      }
    } else
      try {
        ;(n = l(u, a)), uo(t, e, n)
      } catch (g) {
        Pi(t, e, g)
      }
  }
  function uo(t, e, l) {
    l !== null && typeof l == 'object' && typeof l.then == 'function'
      ? l.then(
          function (a) {
            no(t, e, a)
          },
          function (a) {
            return Pi(t, e, a)
          },
        )
      : no(t, e, l)
  }
  function no(t, e, l) {
    ;(e.status = 'fulfilled'), (e.value = l), io(e), (t.state = l), (e = t.pending), e !== null && ((l = e.next), l === e ? (t.pending = null) : ((l = l.next), (e.next = l), ao(t, l)))
  }
  function Pi(t, e, l) {
    var a = t.pending
    if (((t.pending = null), a !== null)) {
      a = a.next
      do (e.status = 'rejected'), (e.reason = l), io(e), (e = e.next)
      while (e !== a)
    }
    t.action = null
  }
  function io(t) {
    t = t.listeners
    for (var e = 0; e < t.length; e++) (0, t[e])()
  }
  function co(t, e) {
    return e
  }
  function fo(t, e) {
    if (ot) {
      var l = pt.formState
      if (l !== null) {
        t: {
          var a = ut
          if (ot) {
            if (Qt) {
              e: {
                for (var u = Qt, n = _e; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null
                    break e
                  }
                  if (((u = Ae(u.nextSibling)), u === null)) {
                    u = null
                    break e
                  }
                }
                ;(n = u.data), (u = n === 'F!' || n === 'F' ? u : null)
              }
              if (u) {
                ;(Qt = Ae(u.nextSibling)), (a = u.data === 'F!')
                break t
              }
            }
            Bl(a)
          }
          a = !1
        }
        a && (e = l[0])
      }
    }
    return (l = ee()), (l.memoizedState = l.baseState = e), (a = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: co, lastRenderedState: e }), (l.queue = a), (l = Do.bind(null, ut, a)), (a.dispatch = l), (a = Fi(!1)), (n = uc.bind(null, ut, !1, a.queue)), (a = ee()), (u = { state: e, dispatch: null, action: t, pending: null }), (a.queue = u), (l = s0.bind(null, ut, u, n, l)), (u.dispatch = l), (a.memoizedState = t), [e, l, !1]
  }
  function ro(t) {
    var e = Ht()
    return oo(e, mt, t)
  }
  function oo(t, e, l) {
    ;(e = ki(t, e, co)[0]), (t = pn(Qe)[0]), (e = typeof e == 'object' && e !== null && typeof e.then == 'function' ? nu(e) : e)
    var a = Ht(),
      u = a.queue,
      n = u.dispatch
    return l !== a.memoizedState && ((ut.flags |= 2048), Sa(9, d0.bind(null, u, l), { destroy: void 0 }, null)), [e, n, t]
  }
  function d0(t, e) {
    t.action = e
  }
  function so(t) {
    var e = Ht(),
      l = mt
    if (l !== null) return oo(e, l, t)
    Ht(), (e = e.memoizedState), (l = Ht())
    var a = l.queue.dispatch
    return (l.memoizedState = t), [e, a, !1]
  }
  function Sa(t, e, l, a) {
    return (t = { tag: t, create: e, inst: l, deps: a, next: null }), (e = ut.updateQueue), e === null && ((e = gn()), (ut.updateQueue = e)), (l = e.lastEffect), l === null ? (e.lastEffect = t.next = t) : ((a = l.next), (l.next = t), (t.next = a), (e.lastEffect = t)), t
  }
  function ho() {
    return Ht().memoizedState
  }
  function bn(t, e, l, a) {
    var u = ee()
    ;(ut.flags |= t), (u.memoizedState = Sa(1 | e, l, { destroy: void 0 }, a === void 0 ? null : a))
  }
  function En(t, e, l, a) {
    var u = Ht()
    a = a === void 0 ? null : a
    var n = u.memoizedState.inst
    mt !== null && a !== null && wi(a, mt.memoizedState.deps) ? (u.memoizedState = Sa(e, l, n, a)) : ((ut.flags |= t), (u.memoizedState = Sa(1 | e, l, n, a)))
  }
  function mo(t, e) {
    bn(8390656, 8, t, e)
  }
  function Ii(t, e) {
    En(2048, 8, t, e)
  }
  function vo(t, e) {
    return En(4, 2, t, e)
  }
  function yo(t, e) {
    return En(4, 4, t, e)
  }
  function go(t, e) {
    if (typeof e == 'function') {
      t = t()
      var l = e(t)
      return function () {
        typeof l == 'function' ? l() : e(null)
      }
    }
    if (e != null)
      return (
        (t = t()),
        (e.current = t),
        function () {
          e.current = null
        }
      )
  }
  function So(t, e, l) {
    ;(l = l != null ? l.concat([t]) : null), En(4, 4, go.bind(null, e, t), l)
  }
  function tc() {}
  function po(t, e) {
    var l = Ht()
    e = e === void 0 ? null : e
    var a = l.memoizedState
    return e !== null && wi(e, a[1]) ? a[0] : ((l.memoizedState = [t, e]), t)
  }
  function bo(t, e) {
    var l = Ht()
    e = e === void 0 ? null : e
    var a = l.memoizedState
    if (e !== null && wi(e, a[1])) return a[0]
    if (((a = t()), jl)) {
      al(!0)
      try {
        t()
      } finally {
        al(!1)
      }
    }
    return (l.memoizedState = [a, e]), a
  }
  function ec(t, e, l) {
    return l === void 0 || rl & 1073741824 ? (t.memoizedState = e) : ((t.memoizedState = l), (t = Ts()), (ut.lanes |= t), (pl |= t), l)
  }
  function Eo(t, e, l, a) {
    return ue(l, e) ? l : ha.current !== null ? ((t = ec(t, l, a)), ue(t, e) || (jt = !0), t) : rl & 42 ? ((t = Ts()), (ut.lanes |= t), (pl |= t), e) : ((jt = !0), (t.memoizedState = l))
  }
  function To(t, e, l, a, u) {
    var n = X.p
    X.p = n !== 0 && 8 > n ? n : 8
    var i = Q.T,
      f = {}
    ;(Q.T = f), uc(t, !1, e, l)
    try {
      var s = u(),
        g = Q.S
      if ((g !== null && g(f, s), s !== null && typeof s == 'object' && typeof s.then == 'function')) {
        var z = f0(s, a)
        iu(t, e, z, fe(t))
      } else iu(t, e, a, fe(t))
    } catch (C) {
      iu(t, e, { then: function () {}, status: 'rejected', reason: C }, fe())
    } finally {
      ;(X.p = n), (Q.T = i)
    }
  }
  function h0() {}
  function lc(t, e, l, a) {
    if (t.tag !== 5) throw Error(r(476))
    var u = Ro(t).queue
    To(
      t,
      u,
      e,
      ft,
      l === null
        ? h0
        : function () {
            return Ao(t), l(a)
          },
    )
  }
  function Ro(t) {
    var e = t.memoizedState
    if (e !== null) return e
    e = { memoizedState: ft, baseState: ft, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Qe, lastRenderedState: ft }, next: null }
    var l = {}
    return (e.next = { memoizedState: l, baseState: l, baseQueue: null, queue: { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: Qe, lastRenderedState: l }, next: null }), (t.memoizedState = e), (t = t.alternate), t !== null && (t.memoizedState = e), e
  }
  function Ao(t) {
    var e = Ro(t).next.queue
    iu(t, e, {}, fe())
  }
  function ac() {
    return Kt(zu)
  }
  function Oo() {
    return Ht().memoizedState
  }
  function zo() {
    return Ht().memoizedState
  }
  function m0(t) {
    for (var e = t.return; e !== null; ) {
      switch (e.tag) {
        case 24:
        case 3:
          var l = fe()
          t = hl(l)
          var a = ml(e, t, l)
          a !== null && (Ft(a, e, l), ru(a, e, l)), (e = { cache: Gi() }), (t.payload = e)
          return
      }
      e = e.return
    }
  }
  function v0(t, e, l) {
    var a = fe()
    ;(l = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null }), Tn(t) ? _o(e, l) : ((l = xi(t, e, l, a)), l !== null && (Ft(l, t, a), Mo(l, e, a)))
  }
  function Do(t, e, l) {
    var a = fe()
    iu(t, e, l, a)
  }
  function iu(t, e, l, a) {
    var u = { lane: a, revertLane: 0, action: l, hasEagerState: !1, eagerState: null, next: null }
    if (Tn(t)) _o(e, u)
    else {
      var n = t.alternate
      if (t.lanes === 0 && (n === null || n.lanes === 0) && ((n = e.lastRenderedReducer), n !== null))
        try {
          var i = e.lastRenderedState,
            f = n(i, l)
          if (((u.hasEagerState = !0), (u.eagerState = f), ue(f, i))) return un(t, e, u, 0), pt === null && an(), !1
        } catch {
        } finally {
        }
      if (((l = xi(t, e, u, a)), l !== null)) return Ft(l, t, a), Mo(l, e, a), !0
    }
    return !1
  }
  function uc(t, e, l, a) {
    if (((a = { lane: 2, revertLane: Jc(), action: a, hasEagerState: !1, eagerState: null, next: null }), Tn(t))) {
      if (e) throw Error(r(479))
    } else (e = xi(t, l, a, 2)), e !== null && Ft(e, t, 2)
  }
  function Tn(t) {
    var e = t.alternate
    return t === ut || (e !== null && e === ut)
  }
  function _o(t, e) {
    ya = vn = !0
    var l = t.pending
    l === null ? (e.next = e) : ((e.next = l.next), (l.next = e)), (t.pending = e)
  }
  function Mo(t, e, l) {
    if (l & 4194176) {
      var a = e.lanes
      ;(a &= t.pendingLanes), (l |= a), (e.lanes = l), Lf(t, l)
    }
  }
  var Ue = { readContext: Kt, use: Sn, useCallback: Mt, useContext: Mt, useEffect: Mt, useImperativeHandle: Mt, useLayoutEffect: Mt, useInsertionEffect: Mt, useMemo: Mt, useReducer: Mt, useRef: Mt, useState: Mt, useDebugValue: Mt, useDeferredValue: Mt, useTransition: Mt, useSyncExternalStore: Mt, useId: Mt }
  ;(Ue.useCacheRefresh = Mt), (Ue.useMemoCache = Mt), (Ue.useHostTransitionStatus = Mt), (Ue.useFormState = Mt), (Ue.useActionState = Mt), (Ue.useOptimistic = Mt)
  var Ll = {
    readContext: Kt,
    use: Sn,
    useCallback: function (t, e) {
      return (ee().memoizedState = [t, e === void 0 ? null : e]), t
    },
    useContext: Kt,
    useEffect: mo,
    useImperativeHandle: function (t, e, l) {
      ;(l = l != null ? l.concat([t]) : null), bn(4194308, 4, go.bind(null, e, t), l)
    },
    useLayoutEffect: function (t, e) {
      return bn(4194308, 4, t, e)
    },
    useInsertionEffect: function (t, e) {
      bn(4, 2, t, e)
    },
    useMemo: function (t, e) {
      var l = ee()
      e = e === void 0 ? null : e
      var a = t()
      if (jl) {
        al(!0)
        try {
          t()
        } finally {
          al(!1)
        }
      }
      return (l.memoizedState = [a, e]), a
    },
    useReducer: function (t, e, l) {
      var a = ee()
      if (l !== void 0) {
        var u = l(e)
        if (jl) {
          al(!0)
          try {
            l(e)
          } finally {
            al(!1)
          }
        }
      } else u = e
      return (a.memoizedState = a.baseState = u), (t = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: t, lastRenderedState: u }), (a.queue = t), (t = t.dispatch = v0.bind(null, ut, t)), [a.memoizedState, t]
    },
    useRef: function (t) {
      var e = ee()
      return (t = { current: t }), (e.memoizedState = t)
    },
    useState: function (t) {
      t = Fi(t)
      var e = t.queue,
        l = Do.bind(null, ut, e)
      return (e.dispatch = l), [t.memoizedState, l]
    },
    useDebugValue: tc,
    useDeferredValue: function (t, e) {
      var l = ee()
      return ec(l, t, e)
    },
    useTransition: function () {
      var t = Fi(!1)
      return (t = To.bind(null, ut, t.queue, !0, !1)), (ee().memoizedState = t), [!1, t]
    },
    useSyncExternalStore: function (t, e, l) {
      var a = ut,
        u = ee()
      if (ot) {
        if (l === void 0) throw Error(r(407))
        l = l()
      } else {
        if (((l = e()), pt === null)) throw Error(r(349))
        rt & 60 || Fr(a, e, l)
      }
      u.memoizedState = l
      var n = { value: l, getSnapshot: e }
      return (u.queue = n), mo(Ir.bind(null, a, n, t), [t]), (a.flags |= 2048), Sa(9, Pr.bind(null, a, n, l, e), { destroy: void 0 }, null), l
    },
    useId: function () {
      var t = ee(),
        e = pt.identifierPrefix
      if (ot) {
        var l = Ge,
          a = Le
        ;(l = (a & ~(1 << (32 - ae(a) - 1))).toString(32) + l), (e = ':' + e + 'R' + l), (l = yn++), 0 < l && (e += 'H' + l.toString(32)), (e += ':')
      } else (l = r0++), (e = ':' + e + 'r' + l.toString(32) + ':')
      return (t.memoizedState = e)
    },
    useCacheRefresh: function () {
      return (ee().memoizedState = m0.bind(null, ut))
    },
  }
  ;(Ll.useMemoCache = $i),
    (Ll.useHostTransitionStatus = ac),
    (Ll.useFormState = fo),
    (Ll.useActionState = fo),
    (Ll.useOptimistic = function (t) {
      var e = ee()
      e.memoizedState = e.baseState = t
      var l = { pending: null, lanes: 0, dispatch: null, lastRenderedReducer: null, lastRenderedState: null }
      return (e.queue = l), (e = uc.bind(null, ut, !0, l)), (l.dispatch = e), [t, e]
    })
  var ol = {
    readContext: Kt,
    use: Sn,
    useCallback: po,
    useContext: Kt,
    useEffect: Ii,
    useImperativeHandle: So,
    useInsertionEffect: vo,
    useLayoutEffect: yo,
    useMemo: bo,
    useReducer: pn,
    useRef: ho,
    useState: function () {
      return pn(Qe)
    },
    useDebugValue: tc,
    useDeferredValue: function (t, e) {
      var l = Ht()
      return Eo(l, mt.memoizedState, t, e)
    },
    useTransition: function () {
      var t = pn(Qe)[0],
        e = Ht().memoizedState
      return [typeof t == 'boolean' ? t : nu(t), e]
    },
    useSyncExternalStore: Wr,
    useId: Oo,
  }
  ;(ol.useCacheRefresh = zo),
    (ol.useMemoCache = $i),
    (ol.useHostTransitionStatus = ac),
    (ol.useFormState = ro),
    (ol.useActionState = ro),
    (ol.useOptimistic = function (t, e) {
      var l = Ht()
      return lo(l, mt, t, e)
    })
  var Gl = {
    readContext: Kt,
    use: Sn,
    useCallback: po,
    useContext: Kt,
    useEffect: Ii,
    useImperativeHandle: So,
    useInsertionEffect: vo,
    useLayoutEffect: yo,
    useMemo: bo,
    useReducer: Wi,
    useRef: ho,
    useState: function () {
      return Wi(Qe)
    },
    useDebugValue: tc,
    useDeferredValue: function (t, e) {
      var l = Ht()
      return mt === null ? ec(l, t, e) : Eo(l, mt.memoizedState, t, e)
    },
    useTransition: function () {
      var t = Wi(Qe)[0],
        e = Ht().memoizedState
      return [typeof t == 'boolean' ? t : nu(t), e]
    },
    useSyncExternalStore: Wr,
    useId: Oo,
  }
  ;(Gl.useCacheRefresh = zo),
    (Gl.useMemoCache = $i),
    (Gl.useHostTransitionStatus = ac),
    (Gl.useFormState = so),
    (Gl.useActionState = so),
    (Gl.useOptimistic = function (t, e) {
      var l = Ht()
      return mt !== null ? lo(l, mt, t, e) : ((l.baseState = t), [t, l.queue.dispatch])
    })
  function nc(t, e, l, a) {
    ;(e = t.memoizedState), (l = l(a, e)), (l = l == null ? e : et({}, e, l)), (t.memoizedState = l), t.lanes === 0 && (t.updateQueue.baseState = l)
  }
  var ic = {
    isMounted: function (t) {
      return (t = t._reactInternals) ? W(t) === t : !1
    },
    enqueueSetState: function (t, e, l) {
      t = t._reactInternals
      var a = fe(),
        u = hl(a)
      ;(u.payload = e), l != null && (u.callback = l), (e = ml(t, u, a)), e !== null && (Ft(e, t, a), ru(e, t, a))
    },
    enqueueReplaceState: function (t, e, l) {
      t = t._reactInternals
      var a = fe(),
        u = hl(a)
      ;(u.tag = 1), (u.payload = e), l != null && (u.callback = l), (e = ml(t, u, a)), e !== null && (Ft(e, t, a), ru(e, t, a))
    },
    enqueueForceUpdate: function (t, e) {
      t = t._reactInternals
      var l = fe(),
        a = hl(l)
      ;(a.tag = 2), e != null && (a.callback = e), (e = ml(t, a, l)), e !== null && (Ft(e, t, l), ru(e, t, l))
    },
  }
  function Uo(t, e, l, a, u, n, i) {
    return (t = t.stateNode), typeof t.shouldComponentUpdate == 'function' ? t.shouldComponentUpdate(a, n, i) : e.prototype && e.prototype.isPureReactComponent ? !Ja(l, a) || !Ja(u, n) : !0
  }
  function Co(t, e, l, a) {
    ;(t = e.state), typeof e.componentWillReceiveProps == 'function' && e.componentWillReceiveProps(l, a), typeof e.UNSAFE_componentWillReceiveProps == 'function' && e.UNSAFE_componentWillReceiveProps(l, a), e.state !== t && ic.enqueueReplaceState(e, e.state, null)
  }
  function Xl(t, e) {
    var l = e
    if ('ref' in e) {
      l = {}
      for (var a in e) a !== 'ref' && (l[a] = e[a])
    }
    if ((t = t.defaultProps)) {
      l === e && (l = et({}, l))
      for (var u in t) l[u] === void 0 && (l[u] = t[u])
    }
    return l
  }
  var Rn =
    typeof reportError == 'function'
      ? reportError
      : function (t) {
          if (typeof window == 'object' && typeof window.ErrorEvent == 'function') {
            var e = new window.ErrorEvent('error', { bubbles: !0, cancelable: !0, message: typeof t == 'object' && t !== null && typeof t.message == 'string' ? String(t.message) : String(t), error: t })
            if (!window.dispatchEvent(e)) return
          } else if (typeof process == 'object' && typeof process.emit == 'function') {
            process.emit('uncaughtException', t)
            return
          }
          console.error(t)
        }
  function Ho(t) {
    Rn(t)
  }
  function xo(t) {
    console.error(t)
  }
  function No(t) {
    Rn(t)
  }
  function An(t, e) {
    try {
      var l = t.onUncaughtError
      l(e.value, { componentStack: e.stack })
    } catch (a) {
      setTimeout(function () {
        throw a
      })
    }
  }
  function Bo(t, e, l) {
    try {
      var a = t.onCaughtError
      a(l.value, { componentStack: l.stack, errorBoundary: e.tag === 1 ? e.stateNode : null })
    } catch (u) {
      setTimeout(function () {
        throw u
      })
    }
  }
  function cc(t, e, l) {
    return (
      (l = hl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        An(t, e)
      }),
      l
    )
  }
  function qo(t) {
    return (t = hl(t)), (t.tag = 3), t
  }
  function Yo(t, e, l, a) {
    var u = l.type.getDerivedStateFromError
    if (typeof u == 'function') {
      var n = a.value
      ;(t.payload = function () {
        return u(n)
      }),
        (t.callback = function () {
          Bo(e, l, a)
        })
    }
    var i = l.stateNode
    i !== null &&
      typeof i.componentDidCatch == 'function' &&
      (t.callback = function () {
        Bo(e, l, a), typeof u != 'function' && (bl === null ? (bl = new Set([this])) : bl.add(this))
        var f = a.stack
        this.componentDidCatch(a.value, { componentStack: f !== null ? f : '' })
      })
  }
  function y0(t, e, l, a, u) {
    if (((l.flags |= 32768), a !== null && typeof a == 'object' && typeof a.then == 'function')) {
      if (((e = l.alternate), e !== null && fu(e, l, u, !0), (l = ve.current), l !== null)) {
        switch (l.tag) {
          case 13:
            return Me === null ? Qc() : l.alternate === null && Dt === 0 && (Dt = 3), (l.flags &= -257), (l.flags |= 65536), (l.lanes = u), a === Yi ? (l.flags |= 16384) : ((e = l.updateQueue), e === null ? (l.updateQueue = new Set([a])) : e.add(a), Zc(t, a, u)), !1
          case 22:
            return (l.flags |= 65536), a === Yi ? (l.flags |= 16384) : ((e = l.updateQueue), e === null ? ((e = { transitions: null, markerInstances: null, retryQueue: new Set([a]) }), (l.updateQueue = e)) : ((l = e.retryQueue), l === null ? (e.retryQueue = new Set([a])) : l.add(a)), Zc(t, a, u)), !1
        }
        throw Error(r(435, l.tag))
      }
      return Zc(t, a, u), Qc(), !1
    }
    if (ot) return (e = ve.current), e !== null ? (!(e.flags & 65536) && (e.flags |= 256), (e.flags |= 65536), (e.lanes = u), a !== qi && ((t = Error(r(422), { cause: a })), Fa(de(t, l)))) : (a !== qi && ((e = Error(r(423), { cause: a })), Fa(de(e, l))), (t = t.current.alternate), (t.flags |= 65536), (u &= -u), (t.lanes |= u), (a = de(a, l)), (u = cc(t.stateNode, a, u)), Tc(t, u), Dt !== 4 && (Dt = 2)), !1
    var n = Error(r(520), { cause: a })
    if (((n = de(n, l)), gu === null ? (gu = [n]) : gu.push(n), Dt !== 4 && (Dt = 2), e === null)) return !0
    ;(a = de(a, l)), (l = e)
    do {
      switch (l.tag) {
        case 3:
          return (l.flags |= 65536), (t = u & -u), (l.lanes |= t), (t = cc(l.stateNode, a, t)), Tc(l, t), !1
        case 1:
          if (((e = l.type), (n = l.stateNode), (l.flags & 128) === 0 && (typeof e.getDerivedStateFromError == 'function' || (n !== null && typeof n.componentDidCatch == 'function' && (bl === null || !bl.has(n)))))) return (l.flags |= 65536), (u &= -u), (l.lanes |= u), (u = qo(u)), Yo(u, t, l, a), Tc(l, u), !1
      }
      l = l.return
    } while (l !== null)
    return !1
  }
  var jo = Error(r(461)),
    jt = !1
  function wt(t, e, l, a) {
    e.child = t === null ? Qr(e, null, l, a) : ql(e, t.child, l, a)
  }
  function Lo(t, e, l, a, u) {
    l = l.render
    var n = e.ref
    if ('ref' in a) {
      var i = {}
      for (var f in a) f !== 'ref' && (i[f] = a[f])
    } else i = a
    return wl(e), (a = Zi(t, e, l, i, n, u)), (f = Vi()), t !== null && !jt ? (Ki(t, e, u), we(t, e, u)) : (ot && f && Ni(e), (e.flags |= 1), wt(t, e, a, u), e.child)
  }
  function Go(t, e, l, a, u) {
    if (t === null) {
      var n = l.type
      return typeof n == 'function' && !Uc(n) && n.defaultProps === void 0 && l.compare === null ? ((e.tag = 15), (e.type = n), Xo(t, e, n, a, u)) : ((t = Mn(l.type, null, a, e, e.mode, u)), (t.ref = e.ref), (t.return = e), (e.child = t))
    }
    if (((n = t.child), !yc(t, u))) {
      var i = n.memoizedProps
      if (((l = l.compare), (l = l !== null ? l : Ja), l(i, a) && t.ref === e.ref)) return we(t, e, u)
    }
    return (e.flags |= 1), (t = Sl(n, a)), (t.ref = e.ref), (t.return = e), (e.child = t)
  }
  function Xo(t, e, l, a, u) {
    if (t !== null) {
      var n = t.memoizedProps
      if (Ja(n, a) && t.ref === e.ref)
        if (((jt = !1), (e.pendingProps = a = n), yc(t, u))) t.flags & 131072 && (jt = !0)
        else return (e.lanes = t.lanes), we(t, e, u)
    }
    return fc(t, e, l, a, u)
  }
  function Qo(t, e, l) {
    var a = e.pendingProps,
      u = a.children,
      n = (e.stateNode._pendingVisibility & 2) !== 0,
      i = t !== null ? t.memoizedState : null
    if ((cu(t, e), a.mode === 'hidden' || n)) {
      if (e.flags & 128) {
        if (((a = i !== null ? i.baseLanes | l : l), t !== null)) {
          for (u = e.child = t.child, n = 0; u !== null; ) (n = n | u.lanes | u.childLanes), (u = u.sibling)
          e.childLanes = n & ~a
        } else (e.childLanes = 0), (e.child = null)
        return wo(t, e, a, l)
      }
      if (l & 536870912) (e.memoizedState = { baseLanes: 0, cachePool: null }), t !== null && mn(e, i !== null ? i.cachePool : null), i !== null ? wr(e, i) : ji(), Zr(e)
      else return (e.lanes = e.childLanes = 536870912), wo(t, e, i !== null ? i.baseLanes | l : l, l)
    } else i !== null ? (mn(e, i.cachePool), wr(e, i), fl(), (e.memoizedState = null)) : (t !== null && mn(e, null), ji(), fl())
    return wt(t, e, u, l), e.child
  }
  function wo(t, e, l, a) {
    var u = Qi()
    return (u = u === null ? null : { parent: Bt._currentValue, pool: u }), (e.memoizedState = { baseLanes: l, cachePool: u }), t !== null && mn(e, null), ji(), Zr(e), t !== null && fu(t, e, a, !0), null
  }
  function cu(t, e) {
    var l = e.ref
    if (l === null) t !== null && t.ref !== null && (e.flags |= 2097664)
    else {
      if (typeof l != 'function' && typeof l != 'object') throw Error(r(284))
      ;(t === null || t.ref !== l) && (e.flags |= 2097664)
    }
  }
  function fc(t, e, l, a, u) {
    return wl(e), (l = Zi(t, e, l, a, void 0, u)), (a = Vi()), t !== null && !jt ? (Ki(t, e, u), we(t, e, u)) : (ot && a && Ni(e), (e.flags |= 1), wt(t, e, l, u), e.child)
  }
  function Zo(t, e, l, a, u, n) {
    return wl(e), (e.updateQueue = null), (l = kr(e, a, l, u)), $r(t), (a = Vi()), t !== null && !jt ? (Ki(t, e, n), we(t, e, n)) : (ot && a && Ni(e), (e.flags |= 1), wt(t, e, l, n), e.child)
  }
  function Vo(t, e, l, a, u) {
    if ((wl(e), e.stateNode === null)) {
      var n = ra,
        i = l.contextType
      typeof i == 'object' && i !== null && (n = Kt(i)),
        (n = new l(a, n)),
        (e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = ic),
        (e.stateNode = n),
        (n._reactInternals = e),
        (n = e.stateNode),
        (n.props = a),
        (n.state = e.memoizedState),
        (n.refs = {}),
        bc(e),
        (i = l.contextType),
        (n.context = typeof i == 'object' && i !== null ? Kt(i) : ra),
        (n.state = e.memoizedState),
        (i = l.getDerivedStateFromProps),
        typeof i == 'function' && (nc(e, l, i, a), (n.state = e.memoizedState)),
        typeof l.getDerivedStateFromProps == 'function' || typeof n.getSnapshotBeforeUpdate == 'function' || (typeof n.UNSAFE_componentWillMount != 'function' && typeof n.componentWillMount != 'function') || ((i = n.state), typeof n.componentWillMount == 'function' && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == 'function' && n.UNSAFE_componentWillMount(), i !== n.state && ic.enqueueReplaceState(n, n.state, null), su(e, a, n, u), ou(), (n.state = e.memoizedState)),
        typeof n.componentDidMount == 'function' && (e.flags |= 4194308),
        (a = !0)
    } else if (t === null) {
      n = e.stateNode
      var f = e.memoizedProps,
        s = Xl(l, f)
      n.props = s
      var g = n.context,
        z = l.contextType
      ;(i = ra), typeof z == 'object' && z !== null && (i = Kt(z))
      var C = l.getDerivedStateFromProps
      ;(z = typeof C == 'function' || typeof n.getSnapshotBeforeUpdate == 'function'), (f = e.pendingProps !== f), z || (typeof n.UNSAFE_componentWillReceiveProps != 'function' && typeof n.componentWillReceiveProps != 'function') || ((f || g !== i) && Co(e, n, a, i)), (dl = !1)
      var T = e.memoizedState
      ;(n.state = T), su(e, a, n, u), ou(), (g = e.memoizedState), f || T !== g || dl ? (typeof C == 'function' && (nc(e, l, C, a), (g = e.memoizedState)), (s = dl || Uo(e, l, s, a, T, g, i)) ? (z || (typeof n.UNSAFE_componentWillMount != 'function' && typeof n.componentWillMount != 'function') || (typeof n.componentWillMount == 'function' && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == 'function' && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == 'function' && (e.flags |= 4194308)) : (typeof n.componentDidMount == 'function' && (e.flags |= 4194308), (e.memoizedProps = a), (e.memoizedState = g)), (n.props = a), (n.state = g), (n.context = i), (a = s)) : (typeof n.componentDidMount == 'function' && (e.flags |= 4194308), (a = !1))
    } else {
      ;(n = e.stateNode), Ec(t, e), (i = e.memoizedProps), (z = Xl(l, i)), (n.props = z), (C = e.pendingProps), (T = n.context), (g = l.contextType), (s = ra), typeof g == 'object' && g !== null && (s = Kt(g)), (f = l.getDerivedStateFromProps), (g = typeof f == 'function' || typeof n.getSnapshotBeforeUpdate == 'function') || (typeof n.UNSAFE_componentWillReceiveProps != 'function' && typeof n.componentWillReceiveProps != 'function') || ((i !== C || T !== s) && Co(e, n, a, s)), (dl = !1), (T = e.memoizedState), (n.state = T), su(e, a, n, u), ou()
      var A = e.memoizedState
      i !== C || T !== A || dl || (t !== null && t.dependencies !== null && On(t.dependencies))
        ? (typeof f == 'function' && (nc(e, l, f, a), (A = e.memoizedState)), (z = dl || Uo(e, l, z, a, T, A, s) || (t !== null && t.dependencies !== null && On(t.dependencies))) ? (g || (typeof n.UNSAFE_componentWillUpdate != 'function' && typeof n.componentWillUpdate != 'function') || (typeof n.componentWillUpdate == 'function' && n.componentWillUpdate(a, A, s), typeof n.UNSAFE_componentWillUpdate == 'function' && n.UNSAFE_componentWillUpdate(a, A, s)), typeof n.componentDidUpdate == 'function' && (e.flags |= 4), typeof n.getSnapshotBeforeUpdate == 'function' && (e.flags |= 1024)) : (typeof n.componentDidUpdate != 'function' || (i === t.memoizedProps && T === t.memoizedState) || (e.flags |= 4), typeof n.getSnapshotBeforeUpdate != 'function' || (i === t.memoizedProps && T === t.memoizedState) || (e.flags |= 1024), (e.memoizedProps = a), (e.memoizedState = A)), (n.props = a), (n.state = A), (n.context = s), (a = z))
        : (typeof n.componentDidUpdate != 'function' || (i === t.memoizedProps && T === t.memoizedState) || (e.flags |= 4), typeof n.getSnapshotBeforeUpdate != 'function' || (i === t.memoizedProps && T === t.memoizedState) || (e.flags |= 1024), (a = !1))
    }
    return (n = a), cu(t, e), (a = (e.flags & 128) !== 0), n || a ? ((n = e.stateNode), (l = a && typeof l.getDerivedStateFromError != 'function' ? null : n.render()), (e.flags |= 1), t !== null && a ? ((e.child = ql(e, t.child, null, u)), (e.child = ql(e, null, l, u))) : wt(t, e, l, u), (e.memoizedState = n.state), (t = e.child)) : (t = we(t, e, u)), t
  }
  function Ko(t, e, l, a) {
    return Wa(), (e.flags |= 256), wt(t, e, l, a), e.child
  }
  var rc = { dehydrated: null, treeContext: null, retryLane: 0 }
  function oc(t) {
    return { baseLanes: t, cachePool: Jr() }
  }
  function sc(t, e, l) {
    return (t = t !== null ? t.childLanes & ~l : 0), e && (t |= pe), t
  }
  function Jo(t, e, l) {
    var a = e.pendingProps,
      u = !1,
      n = (e.flags & 128) !== 0,
      i
    if (((i = n) || (i = t !== null && t.memoizedState === null ? !1 : (Nt.current & 2) !== 0), i && ((u = !0), (e.flags &= -129)), (i = (e.flags & 32) !== 0), (e.flags &= -33), t === null)) {
      if (ot) {
        if ((u ? cl(e) : fl(), ot)) {
          var f = Qt,
            s
          if ((s = f)) {
            t: {
              for (s = f, f = _e; s.nodeType !== 8; ) {
                if (!f) {
                  f = null
                  break t
                }
                if (((s = Ae(s.nextSibling)), s === null)) {
                  f = null
                  break t
                }
              }
              f = s
            }
            f !== null ? ((e.memoizedState = { dehydrated: f, treeContext: xl !== null ? { id: Le, overflow: Ge } : null, retryLane: 536870912 }), (s = Se(18, null, null, 0)), (s.stateNode = f), (s.return = e), (e.child = s), (Wt = e), (Qt = null), (s = !0)) : (s = !1)
          }
          s || Bl(e)
        }
        if (((f = e.memoizedState), f !== null && ((f = f.dehydrated), f !== null))) return f.data === '$!' ? (e.lanes = 16) : (e.lanes = 536870912), null
        Xe(e)
      }
      return (f = a.children), (a = a.fallback), u ? (fl(), (u = e.mode), (f = hc({ mode: 'hidden', children: f }, u)), (a = Vl(a, u, l, null)), (f.return = e), (a.return = e), (f.sibling = a), (e.child = f), (u = e.child), (u.memoizedState = oc(l)), (u.childLanes = sc(t, i, l)), (e.memoizedState = rc), a) : (cl(e), dc(e, f))
    }
    if (((s = t.memoizedState), s !== null && ((f = s.dehydrated), f !== null))) {
      if (n) e.flags & 256 ? (cl(e), (e.flags &= -257), (e = mc(t, e, l))) : e.memoizedState !== null ? (fl(), (e.child = t.child), (e.flags |= 128), (e = null)) : (fl(), (u = a.fallback), (f = e.mode), (a = hc({ mode: 'visible', children: a.children }, f)), (u = Vl(u, f, l, null)), (u.flags |= 2), (a.return = e), (u.return = e), (a.sibling = u), (e.child = a), ql(e, t.child, null, l), (a = e.child), (a.memoizedState = oc(l)), (a.childLanes = sc(t, i, l)), (e.memoizedState = rc), (e = u))
      else if ((cl(e), f.data === '$!')) {
        if (((i = f.nextSibling && f.nextSibling.dataset), i)) var g = i.dgst
        ;(i = g), (a = Error(r(419))), (a.stack = ''), (a.digest = i), Fa({ value: a, source: null, stack: null }), (e = mc(t, e, l))
      } else if ((jt || fu(t, e, l, !1), (i = (l & t.childLanes) !== 0), jt || i)) {
        if (((i = pt), i !== null)) {
          if (((a = l & -l), a & 42)) a = 1
          else
            switch (a) {
              case 2:
                a = 1
                break
              case 8:
                a = 4
                break
              case 32:
                a = 16
                break
              case 128:
              case 256:
              case 512:
              case 1024:
              case 2048:
              case 4096:
              case 8192:
              case 16384:
              case 32768:
              case 65536:
              case 131072:
              case 262144:
              case 524288:
              case 1048576:
              case 2097152:
              case 4194304:
              case 8388608:
              case 16777216:
              case 33554432:
                a = 64
                break
              case 268435456:
                a = 134217728
                break
              default:
                a = 0
            }
          if (((a = a & (i.suspendedLanes | l) ? 0 : a), a !== 0 && a !== s.retryLane)) throw ((s.retryLane = a), il(t, a), Ft(i, t, a), jo)
        }
        f.data === '$?' || Qc(), (e = mc(t, e, l))
      } else f.data === '$?' ? ((e.flags |= 128), (e.child = t.child), (e = C0.bind(null, t)), (f._reactRetry = e), (e = null)) : ((t = s.treeContext), (Qt = Ae(f.nextSibling)), (Wt = e), (ot = !0), (Te = null), (_e = !1), t !== null && ((he[me++] = Le), (he[me++] = Ge), (he[me++] = xl), (Le = t.id), (Ge = t.overflow), (xl = e)), (e = dc(e, a.children)), (e.flags |= 4096))
      return e
    }
    return u ? (fl(), (u = a.fallback), (f = e.mode), (s = t.child), (g = s.sibling), (a = Sl(s, { mode: 'hidden', children: a.children })), (a.subtreeFlags = s.subtreeFlags & 31457280), g !== null ? (u = Sl(g, u)) : ((u = Vl(u, f, l, null)), (u.flags |= 2)), (u.return = e), (a.return = e), (a.sibling = u), (e.child = a), (a = u), (u = e.child), (f = t.child.memoizedState), f === null ? (f = oc(l)) : ((s = f.cachePool), s !== null ? ((g = Bt._currentValue), (s = s.parent !== g ? { parent: g, pool: g } : s)) : (s = Jr()), (f = { baseLanes: f.baseLanes | l, cachePool: s })), (u.memoizedState = f), (u.childLanes = sc(t, i, l)), (e.memoizedState = rc), a) : (cl(e), (l = t.child), (t = l.sibling), (l = Sl(l, { mode: 'visible', children: a.children })), (l.return = e), (l.sibling = null), t !== null && ((i = e.deletions), i === null ? ((e.deletions = [t]), (e.flags |= 16)) : i.push(t)), (e.child = l), (e.memoizedState = null), l)
  }
  function dc(t, e) {
    return (e = hc({ mode: 'visible', children: e }, t.mode)), (e.return = t), (t.child = e)
  }
  function hc(t, e) {
    return ps(t, e, 0, null)
  }
  function mc(t, e, l) {
    return ql(e, t.child, null, l), (t = dc(e, e.pendingProps.children)), (t.flags |= 2), (e.memoizedState = null), t
  }
  function $o(t, e, l) {
    t.lanes |= e
    var a = t.alternate
    a !== null && (a.lanes |= e), Sc(t.return, e, l)
  }
  function vc(t, e, l, a, u) {
    var n = t.memoizedState
    n === null ? (t.memoizedState = { isBackwards: e, rendering: null, renderingStartTime: 0, last: a, tail: l, tailMode: u }) : ((n.isBackwards = e), (n.rendering = null), (n.renderingStartTime = 0), (n.last = a), (n.tail = l), (n.tailMode = u))
  }
  function ko(t, e, l) {
    var a = e.pendingProps,
      u = a.revealOrder,
      n = a.tail
    if ((wt(t, e, a.children, l), (a = Nt.current), a & 2)) (a = (a & 1) | 2), (e.flags |= 128)
    else {
      if (t !== null && t.flags & 128)
        t: for (t = e.child; t !== null; ) {
          if (t.tag === 13) t.memoizedState !== null && $o(t, l, e)
          else if (t.tag === 19) $o(t, l, e)
          else if (t.child !== null) {
            ;(t.child.return = t), (t = t.child)
            continue
          }
          if (t === e) break t
          for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) break t
            t = t.return
          }
          ;(t.sibling.return = t.return), (t = t.sibling)
        }
      a &= 1
    }
    switch ((Et(Nt, a), u)) {
      case 'forwards':
        for (l = e.child, u = null; l !== null; ) (t = l.alternate), t !== null && hn(t) === null && (u = l), (l = l.sibling)
        ;(l = u), l === null ? ((u = e.child), (e.child = null)) : ((u = l.sibling), (l.sibling = null)), vc(e, !1, u, l, n)
        break
      case 'backwards':
        for (l = null, u = e.child, e.child = null; u !== null; ) {
          if (((t = u.alternate), t !== null && hn(t) === null)) {
            e.child = u
            break
          }
          ;(t = u.sibling), (u.sibling = l), (l = u), (u = t)
        }
        vc(e, !0, l, null, n)
        break
      case 'together':
        vc(e, !1, null, null, void 0)
        break
      default:
        e.memoizedState = null
    }
    return e.child
  }
  function we(t, e, l) {
    if ((t !== null && (e.dependencies = t.dependencies), (pl |= e.lanes), !(l & e.childLanes)))
      if (t !== null) {
        if ((fu(t, e, l, !1), (l & e.childLanes) === 0)) return null
      } else return null
    if (t !== null && e.child !== t.child) throw Error(r(153))
    if (e.child !== null) {
      for (t = e.child, l = Sl(t, t.pendingProps), e.child = l, l.return = e; t.sibling !== null; ) (t = t.sibling), (l = l.sibling = Sl(t, t.pendingProps)), (l.return = e)
      l.sibling = null
    }
    return e.child
  }
  function yc(t, e) {
    return t.lanes & e ? !0 : ((t = t.dependencies), !!(t !== null && On(t)))
  }
  function g0(t, e, l) {
    switch (e.tag) {
      case 3:
        Gu(e, e.stateNode.containerInfo), sl(e, Bt, t.memoizedState.cache), Wa()
        break
      case 27:
      case 5:
        ii(e)
        break
      case 4:
        Gu(e, e.stateNode.containerInfo)
        break
      case 10:
        sl(e, e.type, e.memoizedProps.value)
        break
      case 13:
        var a = e.memoizedState
        if (a !== null) return a.dehydrated !== null ? (cl(e), (e.flags |= 128), null) : l & e.child.childLanes ? Jo(t, e, l) : (cl(e), (t = we(t, e, l)), t !== null ? t.sibling : null)
        cl(e)
        break
      case 19:
        var u = (t.flags & 128) !== 0
        if (((a = (l & e.childLanes) !== 0), a || (fu(t, e, l, !1), (a = (l & e.childLanes) !== 0)), u)) {
          if (a) return ko(t, e, l)
          e.flags |= 128
        }
        if (((u = e.memoizedState), u !== null && ((u.rendering = null), (u.tail = null), (u.lastEffect = null)), Et(Nt, Nt.current), a)) break
        return null
      case 22:
      case 23:
        return (e.lanes = 0), Qo(t, e, l)
      case 24:
        sl(e, Bt, t.memoizedState.cache)
    }
    return we(t, e, l)
  }
  function Wo(t, e, l) {
    if (t !== null)
      if (t.memoizedProps !== e.pendingProps) jt = !0
      else {
        if (!yc(t, l) && !(e.flags & 128)) return (jt = !1), g0(t, e, l)
        jt = !!(t.flags & 131072)
      }
    else (jt = !1), ot && e.flags & 1048576 && xr(e, fn, e.index)
    switch (((e.lanes = 0), e.tag)) {
      case 16:
        t: {
          t = e.pendingProps
          var a = e.elementType,
            u = a._init
          if (((a = u(a._payload)), (e.type = a), typeof a == 'function')) Uc(a) ? ((t = Xl(a, t)), (e.tag = 1), (e = Vo(null, e, a, t, l))) : ((e.tag = 0), (e = fc(null, e, a, t, l)))
          else {
            if (a != null) {
              if (((u = a.$$typeof), u === D)) {
                ;(e.tag = 11), (e = Lo(null, e, a, t, l))
                break t
              } else if (u === L) {
                ;(e.tag = 14), (e = Go(null, e, a, t, l))
                break t
              }
            }
            throw ((e = Xt(a) || a), Error(r(306, e, '')))
          }
        }
        return e
      case 0:
        return fc(t, e, e.type, e.pendingProps, l)
      case 1:
        return (a = e.type), (u = Xl(a, e.pendingProps)), Vo(t, e, a, u, l)
      case 3:
        t: {
          if ((Gu(e, e.stateNode.containerInfo), t === null)) throw Error(r(387))
          var n = e.pendingProps
          ;(u = e.memoizedState), (a = u.element), Ec(t, e), su(e, n, null, l)
          var i = e.memoizedState
          if (((n = i.cache), sl(e, Bt, n), n !== u.cache && pc(e, [Bt], l, !0), ou(), (n = i.element), u.isDehydrated))
            if (((u = { element: n, isDehydrated: !1, cache: i.cache }), (e.updateQueue.baseState = u), (e.memoizedState = u), e.flags & 256)) {
              e = Ko(t, e, n, l)
              break t
            } else if (n !== a) {
              ;(a = de(Error(r(424)), e)), Fa(a), (e = Ko(t, e, n, l))
              break t
            } else for (Qt = Ae(e.stateNode.containerInfo.firstChild), Wt = e, ot = !0, Te = null, _e = !0, l = Qr(e, null, n, l), e.child = l; l; ) (l.flags = (l.flags & -3) | 4096), (l = l.sibling)
          else {
            if ((Wa(), n === a)) {
              e = we(t, e, l)
              break t
            }
            wt(t, e, n, l)
          }
          e = e.child
        }
        return e
      case 26:
        return cu(t, e), t === null ? ((l = Is(e.type, null, e.pendingProps, null)) ? (e.memoizedState = l) : ot || ((l = e.type), (t = e.pendingProps), (a = Xn(ll.current).createElement(l)), (a[Vt] = e), (a[It] = t), Zt(a, l, t), Yt(a), (e.stateNode = a))) : (e.memoizedState = Is(e.type, t.memoizedProps, e.pendingProps, t.memoizedState)), null
      case 27:
        return ii(e), t === null && ot && ((a = e.stateNode = Ws(e.type, e.pendingProps, ll.current)), (Wt = e), (_e = !0), (Qt = Ae(a.firstChild))), (a = e.pendingProps.children), t !== null || ot ? wt(t, e, a, l) : (e.child = ql(e, null, a, l)), cu(t, e), e.child
      case 5:
        return t === null && ot && ((u = a = Qt) && ((a = J0(a, e.type, e.pendingProps, _e)), a !== null ? ((e.stateNode = a), (Wt = e), (Qt = Ae(a.firstChild)), (_e = !1), (u = !0)) : (u = !1)), u || Bl(e)), ii(e), (u = e.type), (n = e.pendingProps), (i = t !== null ? t.memoizedProps : null), (a = n.children), lf(u, n) ? (a = null) : i !== null && lf(u, i) && (e.flags |= 32), e.memoizedState !== null && ((u = Zi(t, e, o0, null, null, l)), (zu._currentValue = u)), cu(t, e), wt(t, e, a, l), e.child
      case 6:
        return t === null && ot && ((t = l = Qt) && ((l = $0(l, e.pendingProps, _e)), l !== null ? ((e.stateNode = l), (Wt = e), (Qt = null), (t = !0)) : (t = !1)), t || Bl(e)), null
      case 13:
        return Jo(t, e, l)
      case 4:
        return Gu(e, e.stateNode.containerInfo), (a = e.pendingProps), t === null ? (e.child = ql(e, null, a, l)) : wt(t, e, a, l), e.child
      case 11:
        return Lo(t, e, e.type, e.pendingProps, l)
      case 7:
        return wt(t, e, e.pendingProps, l), e.child
      case 8:
        return wt(t, e, e.pendingProps.children, l), e.child
      case 12:
        return wt(t, e, e.pendingProps.children, l), e.child
      case 10:
        return (a = e.pendingProps), sl(e, e.type, a.value), wt(t, e, a.children, l), e.child
      case 9:
        return (u = e.type._context), (a = e.pendingProps.children), wl(e), (u = Kt(u)), (a = a(u)), (e.flags |= 1), wt(t, e, a, l), e.child
      case 14:
        return Go(t, e, e.type, e.pendingProps, l)
      case 15:
        return Xo(t, e, e.type, e.pendingProps, l)
      case 19:
        return ko(t, e, l)
      case 22:
        return Qo(t, e, l)
      case 24:
        return wl(e), (a = Kt(Bt)), t === null ? ((u = Qi()), u === null && ((u = pt), (n = Gi()), (u.pooledCache = n), n.refCount++, n !== null && (u.pooledCacheLanes |= l), (u = n)), (e.memoizedState = { parent: a, cache: u }), bc(e), sl(e, Bt, u)) : (t.lanes & l && (Ec(t, e), su(e, null, null, l), ou()), (u = t.memoizedState), (n = e.memoizedState), u.parent !== a ? ((u = { parent: a, cache: a }), (e.memoizedState = u), e.lanes === 0 && (e.memoizedState = e.updateQueue.baseState = u), sl(e, Bt, a)) : ((a = n.cache), sl(e, Bt, a), a !== u.cache && pc(e, [Bt], l, !0))), wt(t, e, e.pendingProps.children, l), e.child
      case 29:
        throw e.pendingProps
    }
    throw Error(r(156, e.tag))
  }
  var gc = dt(null),
    Ql = null,
    Ze = null
  function sl(t, e, l) {
    Et(gc, e._currentValue), (e._currentValue = l)
  }
  function Ve(t) {
    ;(t._currentValue = gc.current), Ut(gc)
  }
  function Sc(t, e, l) {
    for (; t !== null; ) {
      var a = t.alternate
      if (((t.childLanes & e) !== e ? ((t.childLanes |= e), a !== null && (a.childLanes |= e)) : a !== null && (a.childLanes & e) !== e && (a.childLanes |= e), t === l)) break
      t = t.return
    }
  }
  function pc(t, e, l, a) {
    var u = t.child
    for (u !== null && (u.return = t); u !== null; ) {
      var n = u.dependencies
      if (n !== null) {
        var i = u.child
        n = n.firstContext
        t: for (; n !== null; ) {
          var f = n
          n = u
          for (var s = 0; s < e.length; s++)
            if (f.context === e[s]) {
              ;(n.lanes |= l), (f = n.alternate), f !== null && (f.lanes |= l), Sc(n.return, l, t), a || (i = null)
              break t
            }
          n = f.next
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(r(341))
        ;(i.lanes |= l), (n = i.alternate), n !== null && (n.lanes |= l), Sc(i, l, t), (i = null)
      } else i = u.child
      if (i !== null) i.return = u
      else
        for (i = u; i !== null; ) {
          if (i === t) {
            i = null
            break
          }
          if (((u = i.sibling), u !== null)) {
            ;(u.return = i.return), (i = u)
            break
          }
          i = i.return
        }
      u = i
    }
  }
  function fu(t, e, l, a) {
    t = null
    for (var u = e, n = !1; u !== null; ) {
      if (!n) {
        if (u.flags & 524288) n = !0
        else if (u.flags & 262144) break
      }
      if (u.tag === 10) {
        var i = u.alternate
        if (i === null) throw Error(r(387))
        if (((i = i.memoizedProps), i !== null)) {
          var f = u.type
          ue(u.pendingProps.value, i.value) || (t !== null ? t.push(f) : (t = [f]))
        }
      } else if (u === Lu.current) {
        if (((i = u.alternate), i === null)) throw Error(r(387))
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(zu) : (t = [zu]))
      }
      u = u.return
    }
    t !== null && pc(e, t, l, a), (e.flags |= 262144)
  }
  function On(t) {
    for (t = t.firstContext; t !== null; ) {
      if (!ue(t.context._currentValue, t.memoizedValue)) return !0
      t = t.next
    }
    return !1
  }
  function wl(t) {
    ;(Ql = t), (Ze = null), (t = t.dependencies), t !== null && (t.firstContext = null)
  }
  function Kt(t) {
    return Fo(Ql, t)
  }
  function zn(t, e) {
    return Ql === null && wl(t), Fo(t, e)
  }
  function Fo(t, e) {
    var l = e._currentValue
    if (((e = { context: e, memoizedValue: l, next: null }), Ze === null)) {
      if (t === null) throw Error(r(308))
      ;(Ze = e), (t.dependencies = { lanes: 0, firstContext: e }), (t.flags |= 524288)
    } else Ze = Ze.next = e
    return l
  }
  var dl = !1
  function bc(t) {
    t.updateQueue = { baseState: t.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, lanes: 0, hiddenCallbacks: null }, callbacks: null }
  }
  function Ec(t, e) {
    ;(t = t.updateQueue), e.updateQueue === t && (e.updateQueue = { baseState: t.baseState, firstBaseUpdate: t.firstBaseUpdate, lastBaseUpdate: t.lastBaseUpdate, shared: t.shared, callbacks: null })
  }
  function hl(t) {
    return { lane: t, tag: 0, payload: null, callback: null, next: null }
  }
  function ml(t, e, l) {
    var a = t.updateQueue
    if (a === null) return null
    if (((a = a.shared), At & 2)) {
      var u = a.pending
      return u === null ? (e.next = e) : ((e.next = u.next), (u.next = e)), (a.pending = e), (e = nn(t)), Cr(t, null, l), e
    }
    return un(t, a, e, l), nn(t)
  }
  function ru(t, e, l) {
    if (((e = e.updateQueue), e !== null && ((e = e.shared), (l & 4194176) !== 0))) {
      var a = e.lanes
      ;(a &= t.pendingLanes), (l |= a), (e.lanes = l), Lf(t, l)
    }
  }
  function Tc(t, e) {
    var l = t.updateQueue,
      a = t.alternate
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var u = null,
        n = null
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var i = { lane: l.lane, tag: l.tag, payload: l.payload, callback: null, next: null }
          n === null ? (u = n = i) : (n = n.next = i), (l = l.next)
        } while (l !== null)
        n === null ? (u = n = e) : (n = n.next = e)
      } else u = n = e
      ;(l = { baseState: a.baseState, firstBaseUpdate: u, lastBaseUpdate: n, shared: a.shared, callbacks: a.callbacks }), (t.updateQueue = l)
      return
    }
    ;(t = l.lastBaseUpdate), t === null ? (l.firstBaseUpdate = e) : (t.next = e), (l.lastBaseUpdate = e)
  }
  var Rc = !1
  function ou() {
    if (Rc) {
      var t = va
      if (t !== null) throw t
    }
  }
  function su(t, e, l, a) {
    Rc = !1
    var u = t.updateQueue
    dl = !1
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      f = u.shared.pending
    if (f !== null) {
      u.shared.pending = null
      var s = f,
        g = s.next
      ;(s.next = null), i === null ? (n = g) : (i.next = g), (i = s)
      var z = t.alternate
      z !== null && ((z = z.updateQueue), (f = z.lastBaseUpdate), f !== i && (f === null ? (z.firstBaseUpdate = g) : (f.next = g), (z.lastBaseUpdate = s)))
    }
    if (n !== null) {
      var C = u.baseState
      ;(i = 0), (z = g = s = null), (f = n)
      do {
        var T = f.lane & -536870913,
          A = T !== f.lane
        if (A ? (rt & T) === T : (a & T) === T) {
          T !== 0 && T === ma && (Rc = !0), z !== null && (z = z.next = { lane: 0, tag: f.tag, payload: f.payload, callback: null, next: null })
          t: {
            var Z = t,
              P = f
            T = e
            var _t = l
            switch (P.tag) {
              case 1:
                if (((Z = P.payload), typeof Z == 'function')) {
                  C = Z.call(_t, C, T)
                  break t
                }
                C = Z
                break t
              case 3:
                Z.flags = (Z.flags & -65537) | 128
              case 0:
                if (((Z = P.payload), (T = typeof Z == 'function' ? Z.call(_t, C, T) : Z), T == null)) break t
                C = et({}, C, T)
                break t
              case 2:
                dl = !0
            }
          }
          ;(T = f.callback), T !== null && ((t.flags |= 64), A && (t.flags |= 8192), (A = u.callbacks), A === null ? (u.callbacks = [T]) : A.push(T))
        } else (A = { lane: T, tag: f.tag, payload: f.payload, callback: f.callback, next: null }), z === null ? ((g = z = A), (s = C)) : (z = z.next = A), (i |= T)
        if (((f = f.next), f === null)) {
          if (((f = u.shared.pending), f === null)) break
          ;(A = f), (f = A.next), (A.next = null), (u.lastBaseUpdate = A), (u.shared.pending = null)
        }
      } while (!0)
      z === null && (s = C), (u.baseState = s), (u.firstBaseUpdate = g), (u.lastBaseUpdate = z), n === null && (u.shared.lanes = 0), (pl |= i), (t.lanes = i), (t.memoizedState = C)
    }
  }
  function Po(t, e) {
    if (typeof t != 'function') throw Error(r(191, t))
    t.call(e)
  }
  function Io(t, e) {
    var l = t.callbacks
    if (l !== null) for (t.callbacks = null, t = 0; t < l.length; t++) Po(l[t], e)
  }
  function du(t, e) {
    try {
      var l = e.updateQueue,
        a = l !== null ? l.lastEffect : null
      if (a !== null) {
        var u = a.next
        l = u
        do {
          if ((l.tag & t) === t) {
            a = void 0
            var n = l.create,
              i = l.inst
            ;(a = n()), (i.destroy = a)
          }
          l = l.next
        } while (l !== u)
      }
    } catch (f) {
      gt(e, e.return, f)
    }
  }
  function vl(t, e, l) {
    try {
      var a = e.updateQueue,
        u = a !== null ? a.lastEffect : null
      if (u !== null) {
        var n = u.next
        a = n
        do {
          if ((a.tag & t) === t) {
            var i = a.inst,
              f = i.destroy
            if (f !== void 0) {
              ;(i.destroy = void 0), (u = e)
              var s = l
              try {
                f()
              } catch (g) {
                gt(u, s, g)
              }
            }
          }
          a = a.next
        } while (a !== n)
      }
    } catch (g) {
      gt(e, e.return, g)
    }
  }
  function ts(t) {
    var e = t.updateQueue
    if (e !== null) {
      var l = t.stateNode
      try {
        Io(e, l)
      } catch (a) {
        gt(t, t.return, a)
      }
    }
  }
  function es(t, e, l) {
    ;(l.props = Xl(t.type, t.memoizedProps)), (l.state = t.memoizedState)
    try {
      l.componentWillUnmount()
    } catch (a) {
      gt(t, e, a)
    }
  }
  function Zl(t, e) {
    try {
      var l = t.ref
      if (l !== null) {
        var a = t.stateNode
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var u = a
            break
          default:
            u = a
        }
        typeof l == 'function' ? (t.refCleanup = l(u)) : (l.current = u)
      }
    } catch (n) {
      gt(t, e, n)
    }
  }
  function ne(t, e) {
    var l = t.ref,
      a = t.refCleanup
    if (l !== null)
      if (typeof a == 'function')
        try {
          a()
        } catch (u) {
          gt(t, e, u)
        } finally {
          ;(t.refCleanup = null), (t = t.alternate), t != null && (t.refCleanup = null)
        }
      else if (typeof l == 'function')
        try {
          l(null)
        } catch (u) {
          gt(t, e, u)
        }
      else l.current = null
  }
  function ls(t) {
    var e = t.type,
      l = t.memoizedProps,
      a = t.stateNode
    try {
      t: switch (e) {
        case 'button':
        case 'input':
        case 'select':
        case 'textarea':
          l.autoFocus && a.focus()
          break t
        case 'img':
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet)
      }
    } catch (u) {
      gt(t, t.return, u)
    }
  }
  function as(t, e, l) {
    try {
      var a = t.stateNode
      Q0(a, t.type, l, e), (a[It] = e)
    } catch (u) {
      gt(t, t.return, u)
    }
  }
  function us(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 || t.tag === 4
  }
  function Ac(t) {
    t: for (;;) {
      for (; t.sibling === null; ) {
        if (t.return === null || us(t.return)) return null
        t = t.return
      }
      for (t.sibling.return = t.return, t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 27 && t.tag !== 18; ) {
        if (t.flags & 2 || t.child === null || t.tag === 4) continue t
        ;(t.child.return = t), (t = t.child)
      }
      if (!(t.flags & 2)) return t.stateNode
    }
  }
  function Oc(t, e, l) {
    var a = t.tag
    if (a === 5 || a === 6) (t = t.stateNode), e ? (l.nodeType === 8 ? l.parentNode.insertBefore(t, e) : l.insertBefore(t, e)) : (l.nodeType === 8 ? ((e = l.parentNode), e.insertBefore(t, l)) : ((e = l), e.appendChild(t)), (l = l._reactRootContainer), l != null || e.onclick !== null || (e.onclick = Gn))
    else if (a !== 4 && a !== 27 && ((t = t.child), t !== null)) for (Oc(t, e, l), t = t.sibling; t !== null; ) Oc(t, e, l), (t = t.sibling)
  }
  function Dn(t, e, l) {
    var a = t.tag
    if (a === 5 || a === 6) (t = t.stateNode), e ? l.insertBefore(t, e) : l.appendChild(t)
    else if (a !== 4 && a !== 27 && ((t = t.child), t !== null)) for (Dn(t, e, l), t = t.sibling; t !== null; ) Dn(t, e, l), (t = t.sibling)
  }
  var Ke = !1,
    zt = !1,
    zc = !1,
    ns = typeof WeakSet == 'function' ? WeakSet : Set,
    Lt = null,
    is = !1
  function S0(t, e) {
    if (((t = t.containerInfo), (tf = Jn), (t = Tr(t)), _i(t))) {
      if ('selectionStart' in t) var l = { start: t.selectionStart, end: t.selectionEnd }
      else
        t: {
          l = ((l = t.ownerDocument) && l.defaultView) || window
          var a = l.getSelection && l.getSelection()
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode
            var u = a.anchorOffset,
              n = a.focusNode
            a = a.focusOffset
            try {
              l.nodeType, n.nodeType
            } catch {
              l = null
              break t
            }
            var i = 0,
              f = -1,
              s = -1,
              g = 0,
              z = 0,
              C = t,
              T = null
            e: for (;;) {
              for (var A; C !== l || (u !== 0 && C.nodeType !== 3) || (f = i + u), C !== n || (a !== 0 && C.nodeType !== 3) || (s = i + a), C.nodeType === 3 && (i += C.nodeValue.length), (A = C.firstChild) !== null; ) (T = C), (C = A)
              for (;;) {
                if (C === t) break e
                if ((T === l && ++g === u && (f = i), T === n && ++z === a && (s = i), (A = C.nextSibling) !== null)) break
                ;(C = T), (T = C.parentNode)
              }
              C = A
            }
            l = f === -1 || s === -1 ? null : { start: f, end: s }
          } else l = null
        }
      l = l || { start: 0, end: 0 }
    } else l = null
    for (ef = { focusedElem: t, selectionRange: l }, Jn = !1, Lt = e; Lt !== null; )
      if (((e = Lt), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null)) (t.return = e), (Lt = t)
      else
        for (; Lt !== null; ) {
          switch (((e = Lt), (n = e.alternate), (t = e.flags), e.tag)) {
            case 0:
              break
            case 11:
            case 15:
              break
            case 1:
              if (t & 1024 && n !== null) {
                ;(t = void 0), (l = e), (u = n.memoizedProps), (n = n.memoizedState), (a = l.stateNode)
                try {
                  var Z = Xl(l.type, u, l.elementType === l.type)
                  ;(t = a.getSnapshotBeforeUpdate(Z, n)), (a.__reactInternalSnapshotBeforeUpdate = t)
                } catch (P) {
                  gt(l, l.return, P)
                }
              }
              break
            case 3:
              if (t & 1024) {
                if (((t = e.stateNode.containerInfo), (l = t.nodeType), l === 9)) nf(t)
                else if (l === 1)
                  switch (t.nodeName) {
                    case 'HEAD':
                    case 'HTML':
                    case 'BODY':
                      nf(t)
                      break
                    default:
                      t.textContent = ''
                  }
              }
              break
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break
            default:
              if (t & 1024) throw Error(r(163))
          }
          if (((t = e.sibling), t !== null)) {
            ;(t.return = e.return), (Lt = t)
            break
          }
          Lt = e.return
        }
    return (Z = is), (is = !1), Z
  }
  function cs(t, e, l) {
    var a = l.flags
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        $e(t, l), a & 4 && du(5, l)
        break
      case 1:
        if (($e(t, l), a & 4))
          if (((t = l.stateNode), e === null))
            try {
              t.componentDidMount()
            } catch (f) {
              gt(l, l.return, f)
            }
          else {
            var u = Xl(l.type, e.memoizedProps)
            e = e.memoizedState
            try {
              t.componentDidUpdate(u, e, t.__reactInternalSnapshotBeforeUpdate)
            } catch (f) {
              gt(l, l.return, f)
            }
          }
        a & 64 && ts(l), a & 512 && Zl(l, l.return)
        break
      case 3:
        if (($e(t, l), a & 64 && ((a = l.updateQueue), a !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode
                break
              case 1:
                t = l.child.stateNode
            }
          try {
            Io(a, t)
          } catch (f) {
            gt(l, l.return, f)
          }
        }
        break
      case 26:
        $e(t, l), a & 512 && Zl(l, l.return)
        break
      case 27:
      case 5:
        $e(t, l), e === null && a & 4 && ls(l), a & 512 && Zl(l, l.return)
        break
      case 12:
        $e(t, l)
        break
      case 13:
        $e(t, l), a & 4 && os(t, l)
        break
      case 22:
        if (((u = l.memoizedState !== null || Ke), !u)) {
          e = (e !== null && e.memoizedState !== null) || zt
          var n = Ke,
            i = zt
          ;(Ke = u), (zt = e) && !i ? yl(t, l, (l.subtreeFlags & 8772) !== 0) : $e(t, l), (Ke = n), (zt = i)
        }
        a & 512 && (l.memoizedProps.mode === 'manual' ? Zl(l, l.return) : ne(l, l.return))
        break
      default:
        $e(t, l)
    }
  }
  function fs(t) {
    var e = t.alternate
    e !== null && ((t.alternate = null), fs(e)), (t.child = null), (t.deletions = null), (t.sibling = null), t.tag === 5 && ((e = t.stateNode), e !== null && di(e)), (t.stateNode = null), (t.return = null), (t.dependencies = null), (t.memoizedProps = null), (t.memoizedState = null), (t.pendingProps = null), (t.stateNode = null), (t.updateQueue = null)
  }
  var xt = null,
    ie = !1
  function Je(t, e, l) {
    for (l = l.child; l !== null; ) rs(t, e, l), (l = l.sibling)
  }
  function rs(t, e, l) {
    if (le && typeof le.onCommitFiberUnmount == 'function')
      try {
        le.onCommitFiberUnmount(Ba, l)
      } catch {}
    switch (l.tag) {
      case 26:
        zt || ne(l, e), Je(t, e, l), l.memoizedState ? l.memoizedState.count-- : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l))
        break
      case 27:
        zt || ne(l, e)
        var a = xt,
          u = ie
        for (xt = l.stateNode, Je(t, e, l), l = l.stateNode, e = l.attributes; e.length; ) l.removeAttributeNode(e[0])
        di(l), (xt = a), (ie = u)
        break
      case 5:
        zt || ne(l, e)
      case 6:
        u = xt
        var n = ie
        if (((xt = null), Je(t, e, l), (xt = u), (ie = n), xt !== null))
          if (ie)
            try {
              ;(t = xt), (a = l.stateNode), t.nodeType === 8 ? t.parentNode.removeChild(a) : t.removeChild(a)
            } catch (i) {
              gt(l, e, i)
            }
          else
            try {
              xt.removeChild(l.stateNode)
            } catch (i) {
              gt(l, e, i)
            }
        break
      case 18:
        xt !== null && (ie ? ((e = xt), (l = l.stateNode), e.nodeType === 8 ? uf(e.parentNode, l) : e.nodeType === 1 && uf(e, l), Uu(e)) : uf(xt, l.stateNode))
        break
      case 4:
        ;(a = xt), (u = ie), (xt = l.stateNode.containerInfo), (ie = !0), Je(t, e, l), (xt = a), (ie = u)
        break
      case 0:
      case 11:
      case 14:
      case 15:
        zt || vl(2, l, e), zt || vl(4, l, e), Je(t, e, l)
        break
      case 1:
        zt || (ne(l, e), (a = l.stateNode), typeof a.componentWillUnmount == 'function' && es(l, e, a)), Je(t, e, l)
        break
      case 21:
        Je(t, e, l)
        break
      case 22:
        zt || ne(l, e), (zt = (a = zt) || l.memoizedState !== null), Je(t, e, l), (zt = a)
        break
      default:
        Je(t, e, l)
    }
  }
  function os(t, e) {
    if (e.memoizedState === null && ((t = e.alternate), t !== null && ((t = t.memoizedState), t !== null && ((t = t.dehydrated), t !== null))))
      try {
        Uu(t)
      } catch (l) {
        gt(e, e.return, l)
      }
  }
  function p0(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var e = t.stateNode
        return e === null && (e = t.stateNode = new ns()), e
      case 22:
        return (t = t.stateNode), (e = t._retryCache), e === null && (e = t._retryCache = new ns()), e
      default:
        throw Error(r(435, t.tag))
    }
  }
  function Dc(t, e) {
    var l = p0(t)
    e.forEach(function (a) {
      var u = H0.bind(null, t, a)
      l.has(a) || (l.add(a), a.then(u, u))
    })
  }
  function ye(t, e) {
    var l = e.deletions
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a],
          n = t,
          i = e,
          f = i
        t: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
            case 5:
              ;(xt = f.stateNode), (ie = !1)
              break t
            case 3:
              ;(xt = f.stateNode.containerInfo), (ie = !0)
              break t
            case 4:
              ;(xt = f.stateNode.containerInfo), (ie = !0)
              break t
          }
          f = f.return
        }
        if (xt === null) throw Error(r(160))
        rs(n, i, u), (xt = null), (ie = !1), (n = u.alternate), n !== null && (n.return = null), (u.return = null)
      }
    if (e.subtreeFlags & 13878) for (e = e.child; e !== null; ) ss(e, t), (e = e.sibling)
  }
  var Re = null
  function ss(t, e) {
    var l = t.alternate,
      a = t.flags
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ye(e, t), ge(t), a & 4 && (vl(3, t, t.return), du(3, t), vl(5, t, t.return))
        break
      case 1:
        ye(e, t), ge(t), a & 512 && (zt || l === null || ne(l, l.return)), a & 64 && Ke && ((t = t.updateQueue), t !== null && ((a = t.callbacks), a !== null && ((l = t.shared.hiddenCallbacks), (t.shared.hiddenCallbacks = l === null ? a : l.concat(a)))))
        break
      case 26:
        var u = Re
        if ((ye(e, t), ge(t), a & 512 && (zt || l === null || ne(l, l.return)), a & 4)) {
          var n = l !== null ? l.memoizedState : null
          if (((a = t.memoizedState), l === null))
            if (a === null)
              if (t.stateNode === null) {
                t: {
                  ;(a = t.type), (l = t.memoizedProps), (u = u.ownerDocument || u)
                  e: switch (a) {
                    case 'title':
                      ;(n = u.getElementsByTagName('title')[0]), (!n || n[ja] || n[Vt] || n.namespaceURI === 'http://www.w3.org/2000/svg' || n.hasAttribute('itemprop')) && ((n = u.createElement(a)), u.head.insertBefore(n, u.querySelector('head > title'))), Zt(n, a, l), (n[Vt] = t), Yt(n), (a = n)
                      break t
                    case 'link':
                      var i = ld('link', 'href', u).get(a + (l.href || ''))
                      if (i) {
                        for (var f = 0; f < i.length; f++)
                          if (((n = i[f]), n.getAttribute('href') === (l.href == null ? null : l.href) && n.getAttribute('rel') === (l.rel == null ? null : l.rel) && n.getAttribute('title') === (l.title == null ? null : l.title) && n.getAttribute('crossorigin') === (l.crossOrigin == null ? null : l.crossOrigin))) {
                            i.splice(f, 1)
                            break e
                          }
                      }
                      ;(n = u.createElement(a)), Zt(n, a, l), u.head.appendChild(n)
                      break
                    case 'meta':
                      if ((i = ld('meta', 'content', u).get(a + (l.content || '')))) {
                        for (f = 0; f < i.length; f++)
                          if (((n = i[f]), n.getAttribute('content') === (l.content == null ? null : '' + l.content) && n.getAttribute('name') === (l.name == null ? null : l.name) && n.getAttribute('property') === (l.property == null ? null : l.property) && n.getAttribute('http-equiv') === (l.httpEquiv == null ? null : l.httpEquiv) && n.getAttribute('charset') === (l.charSet == null ? null : l.charSet))) {
                            i.splice(f, 1)
                            break e
                          }
                      }
                      ;(n = u.createElement(a)), Zt(n, a, l), u.head.appendChild(n)
                      break
                    default:
                      throw Error(r(468, a))
                  }
                  ;(n[Vt] = t), Yt(n), (a = n)
                }
                t.stateNode = a
              } else ad(u, t.type, t.stateNode)
            else t.stateNode = ed(u, a, t.memoizedProps)
          else n !== a ? (n === null ? l.stateNode !== null && ((l = l.stateNode), l.parentNode.removeChild(l)) : n.count--, a === null ? ad(u, t.type, t.stateNode) : ed(u, a, t.memoizedProps)) : a === null && t.stateNode !== null && as(t, t.memoizedProps, l.memoizedProps)
        }
        break
      case 27:
        if (a & 4 && t.alternate === null) {
          ;(u = t.stateNode), (n = t.memoizedProps)
          try {
            for (var s = u.firstChild; s; ) {
              var g = s.nextSibling,
                z = s.nodeName
              s[ja] || z === 'HEAD' || z === 'BODY' || z === 'SCRIPT' || z === 'STYLE' || (z === 'LINK' && s.rel.toLowerCase() === 'stylesheet') || u.removeChild(s), (s = g)
            }
            for (var C = t.type, T = u.attributes; T.length; ) u.removeAttributeNode(T[0])
            Zt(u, C, n), (u[Vt] = t), (u[It] = n)
          } catch (Z) {
            gt(t, t.return, Z)
          }
        }
      case 5:
        if ((ye(e, t), ge(t), a & 512 && (zt || l === null || ne(l, l.return)), t.flags & 32)) {
          u = t.stateNode
          try {
            la(u, '')
          } catch (Z) {
            gt(t, t.return, Z)
          }
        }
        a & 4 && t.stateNode != null && ((u = t.memoizedProps), as(t, u, l !== null ? l.memoizedProps : u)), a & 1024 && (zc = !0)
        break
      case 6:
        if ((ye(e, t), ge(t), a & 4)) {
          if (t.stateNode === null) throw Error(r(162))
          ;(a = t.memoizedProps), (l = t.stateNode)
          try {
            l.nodeValue = a
          } catch (Z) {
            gt(t, t.return, Z)
          }
        }
        break
      case 3:
        if (((Zn = null), (u = Re), (Re = Qn(e.containerInfo)), ye(e, t), (Re = u), ge(t), a & 4 && l !== null && l.memoizedState.isDehydrated))
          try {
            Uu(e.containerInfo)
          } catch (Z) {
            gt(t, t.return, Z)
          }
        zc && ((zc = !1), ds(t))
        break
      case 4:
        ;(a = Re), (Re = Qn(t.stateNode.containerInfo)), ye(e, t), ge(t), (Re = a)
        break
      case 12:
        ye(e, t), ge(t)
        break
      case 13:
        ye(e, t), ge(t), t.child.flags & 8192 && (t.memoizedState !== null) != (l !== null && l.memoizedState !== null) && (qc = De()), a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), Dc(t, a)))
        break
      case 22:
        if ((a & 512 && (zt || l === null || ne(l, l.return)), (s = t.memoizedState !== null), (g = l !== null && l.memoizedState !== null), (z = Ke), (C = zt), (Ke = z || s), (zt = C || g), ye(e, t), (zt = C), (Ke = z), ge(t), (e = t.stateNode), (e._current = t), (e._visibility &= -3), (e._visibility |= e._pendingVisibility & 2), a & 8192 && ((e._visibility = s ? e._visibility & -2 : e._visibility | 1), s && ((e = Ke || zt), l === null || g || e || pa(t)), t.memoizedProps === null || t.memoizedProps.mode !== 'manual')))
          t: for (l = null, e = t; ; ) {
            if (e.tag === 5 || e.tag === 26 || e.tag === 27) {
              if (l === null) {
                g = l = e
                try {
                  if (((u = g.stateNode), s)) (n = u.style), typeof n.setProperty == 'function' ? n.setProperty('display', 'none', 'important') : (n.display = 'none')
                  else {
                    ;(i = g.stateNode), (f = g.memoizedProps.style)
                    var A = f != null && f.hasOwnProperty('display') ? f.display : null
                    i.style.display = A == null || typeof A == 'boolean' ? '' : ('' + A).trim()
                  }
                } catch (Z) {
                  gt(g, g.return, Z)
                }
              }
            } else if (e.tag === 6) {
              if (l === null) {
                g = e
                try {
                  g.stateNode.nodeValue = s ? '' : g.memoizedProps
                } catch (Z) {
                  gt(g, g.return, Z)
                }
              }
            } else if (((e.tag !== 22 && e.tag !== 23) || e.memoizedState === null || e === t) && e.child !== null) {
              ;(e.child.return = e), (e = e.child)
              continue
            }
            if (e === t) break t
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t) break t
              l === e && (l = null), (e = e.return)
            }
            l === e && (l = null), (e.sibling.return = e.return), (e = e.sibling)
          }
        a & 4 && ((a = t.updateQueue), a !== null && ((l = a.retryQueue), l !== null && ((a.retryQueue = null), Dc(t, l))))
        break
      case 19:
        ye(e, t), ge(t), a & 4 && ((a = t.updateQueue), a !== null && ((t.updateQueue = null), Dc(t, a)))
        break
      case 21:
        break
      default:
        ye(e, t), ge(t)
    }
  }
  function ge(t) {
    var e = t.flags
    if (e & 2) {
      try {
        if (t.tag !== 27) {
          t: {
            for (var l = t.return; l !== null; ) {
              if (us(l)) {
                var a = l
                break t
              }
              l = l.return
            }
            throw Error(r(160))
          }
          switch (a.tag) {
            case 27:
              var u = a.stateNode,
                n = Ac(t)
              Dn(t, n, u)
              break
            case 5:
              var i = a.stateNode
              a.flags & 32 && (la(i, ''), (a.flags &= -33))
              var f = Ac(t)
              Dn(t, f, i)
              break
            case 3:
            case 4:
              var s = a.stateNode.containerInfo,
                g = Ac(t)
              Oc(t, g, s)
              break
            default:
              throw Error(r(161))
          }
        }
      } catch (z) {
        gt(t, t.return, z)
      }
      t.flags &= -3
    }
    e & 4096 && (t.flags &= -4097)
  }
  function ds(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null; ) {
        var e = t
        ds(e), e.tag === 5 && e.flags & 1024 && e.stateNode.reset(), (t = t.sibling)
      }
  }
  function $e(t, e) {
    if (e.subtreeFlags & 8772) for (e = e.child; e !== null; ) cs(t, e.alternate, e), (e = e.sibling)
  }
  function pa(t) {
    for (t = t.child; t !== null; ) {
      var e = t
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          vl(4, e, e.return), pa(e)
          break
        case 1:
          ne(e, e.return)
          var l = e.stateNode
          typeof l.componentWillUnmount == 'function' && es(e, e.return, l), pa(e)
          break
        case 26:
        case 27:
        case 5:
          ne(e, e.return), pa(e)
          break
        case 22:
          ne(e, e.return), e.memoizedState === null && pa(e)
          break
        default:
          pa(e)
      }
      t = t.sibling
    }
  }
  function yl(t, e, l) {
    for (l = l && (e.subtreeFlags & 8772) !== 0, e = e.child; e !== null; ) {
      var a = e.alternate,
        u = t,
        n = e,
        i = n.flags
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          yl(u, n, l), du(4, n)
          break
        case 1:
          if ((yl(u, n, l), (a = n), (u = a.stateNode), typeof u.componentDidMount == 'function'))
            try {
              u.componentDidMount()
            } catch (g) {
              gt(a, a.return, g)
            }
          if (((a = n), (u = a.updateQueue), u !== null)) {
            var f = a.stateNode
            try {
              var s = u.shared.hiddenCallbacks
              if (s !== null) for (u.shared.hiddenCallbacks = null, u = 0; u < s.length; u++) Po(s[u], f)
            } catch (g) {
              gt(a, a.return, g)
            }
          }
          l && i & 64 && ts(n), Zl(n, n.return)
          break
        case 26:
        case 27:
        case 5:
          yl(u, n, l), l && a === null && i & 4 && ls(n), Zl(n, n.return)
          break
        case 12:
          yl(u, n, l)
          break
        case 13:
          yl(u, n, l), l && i & 4 && os(u, n)
          break
        case 22:
          n.memoizedState === null && yl(u, n, l), Zl(n, n.return)
          break
        default:
          yl(u, n, l)
      }
      e = e.sibling
    }
  }
  function _c(t, e) {
    var l = null
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), (t = null), e.memoizedState !== null && e.memoizedState.cachePool !== null && (t = e.memoizedState.cachePool.pool), t !== l && (t != null && t.refCount++, l != null && lu(l))
  }
  function Mc(t, e) {
    ;(t = null), e.alternate !== null && (t = e.alternate.memoizedState.cache), (e = e.memoizedState.cache), e !== t && (e.refCount++, t != null && lu(t))
  }
  function gl(t, e, l, a) {
    if (e.subtreeFlags & 10256) for (e = e.child; e !== null; ) hs(t, e, l, a), (e = e.sibling)
  }
  function hs(t, e, l, a) {
    var u = e.flags
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        gl(t, e, l, a), u & 2048 && du(9, e)
        break
      case 3:
        gl(t, e, l, a), u & 2048 && ((t = null), e.alternate !== null && (t = e.alternate.memoizedState.cache), (e = e.memoizedState.cache), e !== t && (e.refCount++, t != null && lu(t)))
        break
      case 12:
        if (u & 2048) {
          gl(t, e, l, a), (t = e.stateNode)
          try {
            var n = e.memoizedProps,
              i = n.id,
              f = n.onPostCommit
            typeof f == 'function' && f(i, e.alternate === null ? 'mount' : 'update', t.passiveEffectDuration, -0)
          } catch (s) {
            gt(e, e.return, s)
          }
        } else gl(t, e, l, a)
        break
      case 23:
        break
      case 22:
        ;(n = e.stateNode), e.memoizedState !== null ? (n._visibility & 4 ? gl(t, e, l, a) : hu(t, e)) : n._visibility & 4 ? gl(t, e, l, a) : ((n._visibility |= 4), ba(t, e, l, a, (e.subtreeFlags & 10256) !== 0)), u & 2048 && _c(e.alternate, e)
        break
      case 24:
        gl(t, e, l, a), u & 2048 && Mc(e.alternate, e)
        break
      default:
        gl(t, e, l, a)
    }
  }
  function ba(t, e, l, a, u) {
    for (u = u && (e.subtreeFlags & 10256) !== 0, e = e.child; e !== null; ) {
      var n = t,
        i = e,
        f = l,
        s = a,
        g = i.flags
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          ba(n, i, f, s, u), du(8, i)
          break
        case 23:
          break
        case 22:
          var z = i.stateNode
          i.memoizedState !== null ? (z._visibility & 4 ? ba(n, i, f, s, u) : hu(n, i)) : ((z._visibility |= 4), ba(n, i, f, s, u)), u && g & 2048 && _c(i.alternate, i)
          break
        case 24:
          ba(n, i, f, s, u), u && g & 2048 && Mc(i.alternate, i)
          break
        default:
          ba(n, i, f, s, u)
      }
      e = e.sibling
    }
  }
  function hu(t, e) {
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) {
        var l = t,
          a = e,
          u = a.flags
        switch (a.tag) {
          case 22:
            hu(l, a), u & 2048 && _c(a.alternate, a)
            break
          case 24:
            hu(l, a), u & 2048 && Mc(a.alternate, a)
            break
          default:
            hu(l, a)
        }
        e = e.sibling
      }
  }
  var mu = 8192
  function Ea(t) {
    if (t.subtreeFlags & mu) for (t = t.child; t !== null; ) ms(t), (t = t.sibling)
  }
  function ms(t) {
    switch (t.tag) {
      case 26:
        Ea(t), t.flags & mu && t.memoizedState !== null && cm(Re, t.memoizedState, t.memoizedProps)
        break
      case 5:
        Ea(t)
        break
      case 3:
      case 4:
        var e = Re
        ;(Re = Qn(t.stateNode.containerInfo)), Ea(t), (Re = e)
        break
      case 22:
        t.memoizedState === null && ((e = t.alternate), e !== null && e.memoizedState !== null ? ((e = mu), (mu = 16777216), Ea(t), (mu = e)) : Ea(t))
        break
      default:
        Ea(t)
    }
  }
  function vs(t) {
    var e = t.alternate
    if (e !== null && ((t = e.child), t !== null)) {
      e.child = null
      do (e = t.sibling), (t.sibling = null), (t = e)
      while (t !== null)
    }
  }
  function vu(t) {
    var e = t.deletions
    if (t.flags & 16) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l]
          ;(Lt = a), gs(a, t)
        }
      vs(t)
    }
    if (t.subtreeFlags & 10256) for (t = t.child; t !== null; ) ys(t), (t = t.sibling)
  }
  function ys(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        vu(t), t.flags & 2048 && vl(9, t, t.return)
        break
      case 3:
        vu(t)
        break
      case 12:
        vu(t)
        break
      case 22:
        var e = t.stateNode
        t.memoizedState !== null && e._visibility & 4 && (t.return === null || t.return.tag !== 13) ? ((e._visibility &= -5), _n(t)) : vu(t)
        break
      default:
        vu(t)
    }
  }
  function _n(t) {
    var e = t.deletions
    if (t.flags & 16) {
      if (e !== null)
        for (var l = 0; l < e.length; l++) {
          var a = e[l]
          ;(Lt = a), gs(a, t)
        }
      vs(t)
    }
    for (t = t.child; t !== null; ) {
      switch (((e = t), e.tag)) {
        case 0:
        case 11:
        case 15:
          vl(8, e, e.return), _n(e)
          break
        case 22:
          ;(l = e.stateNode), l._visibility & 4 && ((l._visibility &= -5), _n(e))
          break
        default:
          _n(e)
      }
      t = t.sibling
    }
  }
  function gs(t, e) {
    for (; Lt !== null; ) {
      var l = Lt
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          vl(8, l, e)
          break
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool
            a != null && a.refCount++
          }
          break
        case 24:
          lu(l.memoizedState.cache)
      }
      if (((a = l.child), a !== null)) (a.return = l), (Lt = a)
      else
        t: for (l = t; Lt !== null; ) {
          a = Lt
          var u = a.sibling,
            n = a.return
          if ((fs(a), a === l)) {
            Lt = null
            break t
          }
          if (u !== null) {
            ;(u.return = n), (Lt = u)
            break t
          }
          Lt = n
        }
    }
  }
  function b0(t, e, l, a) {
    ;(this.tag = t), (this.key = l), (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null), (this.index = 0), (this.refCleanup = this.ref = null), (this.pendingProps = e), (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null), (this.mode = a), (this.subtreeFlags = this.flags = 0), (this.deletions = null), (this.childLanes = this.lanes = 0), (this.alternate = null)
  }
  function Se(t, e, l, a) {
    return new b0(t, e, l, a)
  }
  function Uc(t) {
    return (t = t.prototype), !(!t || !t.isReactComponent)
  }
  function Sl(t, e) {
    var l = t.alternate
    return l === null ? ((l = Se(t.tag, e, t.key, t.mode)), (l.elementType = t.elementType), (l.type = t.type), (l.stateNode = t.stateNode), (l.alternate = t), (t.alternate = l)) : ((l.pendingProps = e), (l.type = t.type), (l.flags = 0), (l.subtreeFlags = 0), (l.deletions = null)), (l.flags = t.flags & 31457280), (l.childLanes = t.childLanes), (l.lanes = t.lanes), (l.child = t.child), (l.memoizedProps = t.memoizedProps), (l.memoizedState = t.memoizedState), (l.updateQueue = t.updateQueue), (e = t.dependencies), (l.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), (l.sibling = t.sibling), (l.index = t.index), (l.ref = t.ref), (l.refCleanup = t.refCleanup), l
  }
  function Ss(t, e) {
    t.flags &= 31457282
    var l = t.alternate
    return l === null ? ((t.childLanes = 0), (t.lanes = e), (t.child = null), (t.subtreeFlags = 0), (t.memoizedProps = null), (t.memoizedState = null), (t.updateQueue = null), (t.dependencies = null), (t.stateNode = null)) : ((t.childLanes = l.childLanes), (t.lanes = l.lanes), (t.child = l.child), (t.subtreeFlags = 0), (t.deletions = null), (t.memoizedProps = l.memoizedProps), (t.memoizedState = l.memoizedState), (t.updateQueue = l.updateQueue), (t.type = l.type), (e = l.dependencies), (t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext })), t
  }
  function Mn(t, e, l, a, u, n) {
    var i = 0
    if (((a = t), typeof t == 'function')) Uc(t) && (i = 1)
    else if (typeof t == 'string') i = nm(t, l, ze.current) ? 26 : t === 'html' || t === 'head' || t === 'body' ? 27 : 5
    else
      t: switch (t) {
        case p:
          return Vl(l.children, u, n, e)
        case m:
          ;(i = 8), (u |= 24)
          break
        case H:
          return (t = Se(12, l, e, u | 2)), (t.elementType = H), (t.lanes = n), t
        case Y:
          return (t = Se(13, l, e, u)), (t.elementType = Y), (t.lanes = n), t
        case j:
          return (t = Se(19, l, e, u)), (t.elementType = j), (t.lanes = n), t
        case I:
          return ps(l, u, n, e)
        default:
          if (typeof t == 'object' && t !== null)
            switch (t.$$typeof) {
              case B:
              case x:
                i = 10
                break t
              case O:
                i = 9
                break t
              case D:
                i = 11
                break t
              case L:
                i = 14
                break t
              case q:
                ;(i = 16), (a = null)
                break t
            }
          ;(i = 29), (l = Error(r(130, t === null ? 'null' : typeof t, ''))), (a = null)
      }
    return (e = Se(i, l, e, u)), (e.elementType = t), (e.type = a), (e.lanes = n), e
  }
  function Vl(t, e, l, a) {
    return (t = Se(7, t, a, e)), (t.lanes = l), t
  }
  function ps(t, e, l, a) {
    ;(t = Se(22, t, a, e)), (t.elementType = I), (t.lanes = l)
    var u = {
      _visibility: 1,
      _pendingVisibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null,
      _current: null,
      detach: function () {
        var n = u._current
        if (n === null) throw Error(r(456))
        if (!(u._pendingVisibility & 2)) {
          var i = il(n, 2)
          i !== null && ((u._pendingVisibility |= 2), Ft(i, n, 2))
        }
      },
      attach: function () {
        var n = u._current
        if (n === null) throw Error(r(456))
        if (u._pendingVisibility & 2) {
          var i = il(n, 2)
          i !== null && ((u._pendingVisibility &= -3), Ft(i, n, 2))
        }
      },
    }
    return (t.stateNode = u), t
  }
  function Cc(t, e, l) {
    return (t = Se(6, t, null, e)), (t.lanes = l), t
  }
  function Hc(t, e, l) {
    return (e = Se(4, t.children !== null ? t.children : [], t.key, e)), (e.lanes = l), (e.stateNode = { containerInfo: t.containerInfo, pendingChildren: null, implementation: t.implementation }), e
  }
  function ke(t) {
    t.flags |= 4
  }
  function bs(t, e) {
    if (e.type !== 'stylesheet' || e.state.loading & 4) t.flags &= -16777217
    else if (((t.flags |= 16777216), !ud(e))) {
      if (((e = ve.current), e !== null && ((rt & 4194176) === rt ? Me !== null : ((rt & 62914560) !== rt && !(rt & 536870912)) || e !== Me))) throw ((Ia = Yi), qr)
      t.flags |= 8192
    }
  }
  function Un(t, e) {
    e !== null && (t.flags |= 4), t.flags & 16384 && ((e = t.tag !== 22 ? Yf() : 536870912), (t.lanes |= e), (Ra |= e))
  }
  function yu(t, e) {
    if (!ot)
      switch (t.tailMode) {
        case 'hidden':
          e = t.tail
          for (var l = null; e !== null; ) e.alternate !== null && (l = e), (e = e.sibling)
          l === null ? (t.tail = null) : (l.sibling = null)
          break
        case 'collapsed':
          l = t.tail
          for (var a = null; l !== null; ) l.alternate !== null && (a = l), (l = l.sibling)
          a === null ? (e || t.tail === null ? (t.tail = null) : (t.tail.sibling = null)) : (a.sibling = null)
      }
  }
  function Rt(t) {
    var e = t.alternate !== null && t.alternate.child === t.child,
      l = 0,
      a = 0
    if (e) for (var u = t.child; u !== null; ) (l |= u.lanes | u.childLanes), (a |= u.subtreeFlags & 31457280), (a |= u.flags & 31457280), (u.return = t), (u = u.sibling)
    else for (u = t.child; u !== null; ) (l |= u.lanes | u.childLanes), (a |= u.subtreeFlags), (a |= u.flags), (u.return = t), (u = u.sibling)
    return (t.subtreeFlags |= a), (t.childLanes = l), e
  }
  function E0(t, e, l) {
    var a = e.pendingProps
    switch ((Bi(e), e.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Rt(e), null
      case 1:
        return Rt(e), null
      case 3:
        return (l = e.stateNode), (a = null), t !== null && (a = t.memoizedState.cache), e.memoizedState.cache !== a && (e.flags |= 2048), Ve(Bt), Wl(), l.pendingContext && ((l.context = l.pendingContext), (l.pendingContext = null)), (t === null || t.child === null) && (ka(e) ? ke(e) : t === null || (t.memoizedState.isDehydrated && !(e.flags & 256)) || ((e.flags |= 1024), Te !== null && (Gc(Te), (Te = null)))), Rt(e), null
      case 26:
        return (l = e.memoizedState), t === null ? (ke(e), l !== null ? (Rt(e), bs(e, l)) : (Rt(e), (e.flags &= -16777217))) : l ? (l !== t.memoizedState ? (ke(e), Rt(e), bs(e, l)) : (Rt(e), (e.flags &= -16777217))) : (t.memoizedProps !== a && ke(e), Rt(e), (e.flags &= -16777217)), null
      case 27:
        Xu(e), (l = ll.current)
        var u = e.type
        if (t !== null && e.stateNode != null) t.memoizedProps !== a && ke(e)
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166))
            return Rt(e), null
          }
          ;(t = ze.current), ka(e) ? Nr(e) : ((t = Ws(u, a, l)), (e.stateNode = t), ke(e))
        }
        return Rt(e), null
      case 5:
        if ((Xu(e), (l = e.type), t !== null && e.stateNode != null)) t.memoizedProps !== a && ke(e)
        else {
          if (!a) {
            if (e.stateNode === null) throw Error(r(166))
            return Rt(e), null
          }
          if (((t = ze.current), ka(e))) Nr(e)
          else {
            switch (((u = Xn(ll.current)), t)) {
              case 1:
                t = u.createElementNS('http://www.w3.org/2000/svg', l)
                break
              case 2:
                t = u.createElementNS('http://www.w3.org/1998/Math/MathML', l)
                break
              default:
                switch (l) {
                  case 'svg':
                    t = u.createElementNS('http://www.w3.org/2000/svg', l)
                    break
                  case 'math':
                    t = u.createElementNS('http://www.w3.org/1998/Math/MathML', l)
                    break
                  case 'script':
                    ;(t = u.createElement('div')), (t.innerHTML = '<script><\/script>'), (t = t.removeChild(t.firstChild))
                    break
                  case 'select':
                    ;(t = typeof a.is == 'string' ? u.createElement('select', { is: a.is }) : u.createElement('select')), a.multiple ? (t.multiple = !0) : a.size && (t.size = a.size)
                    break
                  default:
                    t = typeof a.is == 'string' ? u.createElement(l, { is: a.is }) : u.createElement(l)
                }
            }
            ;(t[Vt] = e), (t[It] = a)
            t: for (u = e.child; u !== null; ) {
              if (u.tag === 5 || u.tag === 6) t.appendChild(u.stateNode)
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                ;(u.child.return = u), (u = u.child)
                continue
              }
              if (u === e) break t
              for (; u.sibling === null; ) {
                if (u.return === null || u.return === e) break t
                u = u.return
              }
              ;(u.sibling.return = u.return), (u = u.sibling)
            }
            e.stateNode = t
            t: switch ((Zt(t, l, a), l)) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                t = !!a.autoFocus
                break t
              case 'img':
                t = !0
                break t
              default:
                t = !1
            }
            t && ke(e)
          }
        }
        return Rt(e), (e.flags &= -16777217), null
      case 6:
        if (t && e.stateNode != null) t.memoizedProps !== a && ke(e)
        else {
          if (typeof a != 'string' && e.stateNode === null) throw Error(r(166))
          if (((t = ll.current), ka(e))) {
            if (((t = e.stateNode), (l = e.memoizedProps), (a = null), (u = Wt), u !== null))
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps
              }
            ;(t[Vt] = e), (t = !!(t.nodeValue === l || (a !== null && a.suppressHydrationWarning === !0) || Zs(t.nodeValue, l))), t || Bl(e)
          } else (t = Xn(t).createTextNode(a)), (t[Vt] = e), (e.stateNode = t)
        }
        return Rt(e), null
      case 13:
        if (((a = e.memoizedState), t === null || (t.memoizedState !== null && t.memoizedState.dehydrated !== null))) {
          if (((u = ka(e)), a !== null && a.dehydrated !== null)) {
            if (t === null) {
              if (!u) throw Error(r(318))
              if (((u = e.memoizedState), (u = u !== null ? u.dehydrated : null), !u)) throw Error(r(317))
              u[Vt] = e
            } else Wa(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4)
            Rt(e), (u = !1)
          } else Te !== null && (Gc(Te), (Te = null)), (u = !0)
          if (!u) return e.flags & 256 ? (Xe(e), e) : (Xe(e), null)
        }
        if ((Xe(e), e.flags & 128)) return (e.lanes = l), e
        if (((l = a !== null), (t = t !== null && t.memoizedState !== null), l)) {
          ;(a = e.child), (u = null), a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool)
          var n = null
          a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)
        }
        return l !== t && l && (e.child.flags |= 8192), Un(e, e.updateQueue), Rt(e), null
      case 4:
        return Wl(), t === null && Fc(e.stateNode.containerInfo), Rt(e), null
      case 10:
        return Ve(e.type), Rt(e), null
      case 19:
        if ((Ut(Nt), (u = e.memoizedState), u === null)) return Rt(e), null
        if (((a = (e.flags & 128) !== 0), (n = u.rendering), n === null))
          if (a) yu(u, !1)
          else {
            if (Dt !== 0 || (t !== null && t.flags & 128))
              for (t = e.child; t !== null; ) {
                if (((n = hn(t)), n !== null)) {
                  for (e.flags |= 128, yu(u, !1), t = n.updateQueue, e.updateQueue = t, Un(e, t), e.subtreeFlags = 0, t = l, l = e.child; l !== null; ) Ss(l, t), (l = l.sibling)
                  return Et(Nt, (Nt.current & 1) | 2), e.child
                }
                t = t.sibling
              }
            u.tail !== null && De() > Cn && ((e.flags |= 128), (a = !0), yu(u, !1), (e.lanes = 4194304))
          }
        else {
          if (!a)
            if (((t = hn(n)), t !== null)) {
              if (((e.flags |= 128), (a = !0), (t = t.updateQueue), (e.updateQueue = t), Un(e, t), yu(u, !0), u.tail === null && u.tailMode === 'hidden' && !n.alternate && !ot)) return Rt(e), null
            } else 2 * De() - u.renderingStartTime > Cn && l !== 536870912 && ((e.flags |= 128), (a = !0), yu(u, !1), (e.lanes = 4194304))
          u.isBackwards ? ((n.sibling = e.child), (e.child = n)) : ((t = u.last), t !== null ? (t.sibling = n) : (e.child = n), (u.last = n))
        }
        return u.tail !== null ? ((e = u.tail), (u.rendering = e), (u.tail = e.sibling), (u.renderingStartTime = De()), (e.sibling = null), (t = Nt.current), Et(Nt, a ? (t & 1) | 2 : t & 1), e) : (Rt(e), null)
      case 22:
      case 23:
        return Xe(e), Li(), (a = e.memoizedState !== null), t !== null ? (t.memoizedState !== null) !== a && (e.flags |= 8192) : a && (e.flags |= 8192), a ? l & 536870912 && !(e.flags & 128) && (Rt(e), e.subtreeFlags & 6 && (e.flags |= 8192)) : Rt(e), (l = e.updateQueue), l !== null && Un(e, l.retryQueue), (l = null), t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), (a = null), e.memoizedState !== null && e.memoizedState.cachePool !== null && (a = e.memoizedState.cachePool.pool), a !== l && (e.flags |= 2048), t !== null && Ut(Yl), null
      case 24:
        return (l = null), t !== null && (l = t.memoizedState.cache), e.memoizedState.cache !== l && (e.flags |= 2048), Ve(Bt), Rt(e), null
      case 25:
        return null
    }
    throw Error(r(156, e.tag))
  }
  function T0(t, e) {
    switch ((Bi(e), e.tag)) {
      case 1:
        return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      case 3:
        return Ve(Bt), Wl(), (t = e.flags), t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      case 26:
      case 27:
      case 5:
        return Xu(e), null
      case 13:
        if ((Xe(e), (t = e.memoizedState), t !== null && t.dehydrated !== null)) {
          if (e.alternate === null) throw Error(r(340))
          Wa()
        }
        return (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      case 19:
        return Ut(Nt), null
      case 4:
        return Wl(), null
      case 10:
        return Ve(e.type), null
      case 22:
      case 23:
        return Xe(e), Li(), t !== null && Ut(Yl), (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      case 24:
        return Ve(Bt), null
      case 25:
        return null
      default:
        return null
    }
  }
  function Es(t, e) {
    switch ((Bi(e), e.tag)) {
      case 3:
        Ve(Bt), Wl()
        break
      case 26:
      case 27:
      case 5:
        Xu(e)
        break
      case 4:
        Wl()
        break
      case 13:
        Xe(e)
        break
      case 19:
        Ut(Nt)
        break
      case 10:
        Ve(e.type)
        break
      case 22:
      case 23:
        Xe(e), Li(), t !== null && Ut(Yl)
        break
      case 24:
        Ve(Bt)
    }
  }
  var R0 = {
      getCacheForType: function (t) {
        var e = Kt(Bt),
          l = e.data.get(t)
        return l === void 0 && ((l = t()), e.data.set(t, l)), l
      },
    },
    A0 = typeof WeakMap == 'function' ? WeakMap : Map,
    At = 0,
    pt = null,
    it = null,
    rt = 0,
    bt = 0,
    ce = null,
    We = !1,
    Ta = !1,
    xc = !1,
    Fe = 0,
    Dt = 0,
    pl = 0,
    Kl = 0,
    Nc = 0,
    pe = 0,
    Ra = 0,
    gu = null,
    Ce = null,
    Bc = !1,
    qc = 0,
    Cn = 1 / 0,
    Hn = null,
    bl = null,
    xn = !1,
    Jl = null,
    Su = 0,
    Yc = 0,
    jc = null,
    pu = 0,
    Lc = null
  function fe() {
    if (At & 2 && rt !== 0) return rt & -rt
    if (Q.T !== null) {
      var t = ma
      return t !== 0 ? t : Jc()
    }
    return Xf()
  }
  function Ts() {
    pe === 0 && (pe = !(rt & 536870912) || ot ? qf() : 536870912)
    var t = ve.current
    return t !== null && (t.flags |= 32), pe
  }
  function Ft(t, e, l) {
    ;((t === pt && bt === 2) || t.cancelPendingCommit !== null) && (Aa(t, 0), Pe(t, rt, pe, !1)), Ya(t, l), (!(At & 2) || t !== pt) && (t === pt && (!(At & 2) && (Kl |= l), Dt === 4 && Pe(t, rt, pe, !1)), He(t))
  }
  function Rs(t, e, l) {
    if (At & 6) throw Error(r(327))
    var a = (!l && (e & 60) === 0 && (e & t.expiredLanes) === 0) || qa(t, e),
      u = a ? D0(t, e) : wc(t, e, !0),
      n = a
    do {
      if (u === 0) {
        Ta && !a && Pe(t, e, 0, !1)
        break
      } else if (u === 6) Pe(t, e, 0, !We)
      else {
        if (((l = t.current.alternate), n && !O0(l))) {
          ;(u = wc(t, e, !1)), (n = !1)
          continue
        }
        if (u === 2) {
          if (((n = e), t.errorRecoveryDisabledLanes & n)) var i = 0
          else (i = t.pendingLanes & -536870913), (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0)
          if (i !== 0) {
            e = i
            t: {
              var f = t
              u = gu
              var s = f.current.memoizedState.isDehydrated
              if ((s && (Aa(f, i).flags |= 256), (i = wc(f, i, !1)), i !== 2)) {
                if (xc && !s) {
                  ;(f.errorRecoveryDisabledLanes |= n), (Kl |= n), (u = 4)
                  break t
                }
                ;(n = Ce), (Ce = u), n !== null && Gc(n)
              }
              u = i
            }
            if (((n = !1), u !== 2)) continue
          }
        }
        if (u === 1) {
          Aa(t, 0), Pe(t, e, 0, !0)
          break
        }
        t: {
          switch (((a = t), u)) {
            case 0:
            case 1:
              throw Error(r(345))
            case 4:
              if ((e & 4194176) === e) {
                Pe(a, e, pe, !We)
                break t
              }
              break
            case 2:
              Ce = null
              break
            case 3:
            case 5:
              break
            default:
              throw Error(r(329))
          }
          if (((a.finishedWork = l), (a.finishedLanes = e), (e & 62914560) === e && ((n = qc + 300 - De()), 10 < n))) {
            if ((Pe(a, e, pe, !We), Vu(a, 0) !== 0)) break t
            a.timeoutHandle = Js(As.bind(null, a, l, Ce, Hn, Bc, e, pe, Kl, Ra, We, 2, -0, 0), n)
            break t
          }
          As(a, l, Ce, Hn, Bc, e, pe, Kl, Ra, We, 0, -0, 0)
        }
      }
      break
    } while (!0)
    He(t)
  }
  function Gc(t) {
    Ce === null ? (Ce = t) : Ce.push.apply(Ce, t)
  }
  function As(t, e, l, a, u, n, i, f, s, g, z, C, T) {
    var A = e.subtreeFlags
    if ((A & 8192 || (A & 16785408) === 16785408) && ((Ou = { stylesheets: null, count: 0, unsuspend: im }), ms(e), (e = fm()), e !== null)) {
      ;(t.cancelPendingCommit = e(Cs.bind(null, t, l, a, u, i, f, s, 1, C, T))), Pe(t, n, i, !g)
      return
    }
    Cs(t, l, a, u, i, f, s, z, C, T)
  }
  function O0(t) {
    for (var e = t; ; ) {
      var l = e.tag
      if ((l === 0 || l === 11 || l === 15) && e.flags & 16384 && ((l = e.updateQueue), l !== null && ((l = l.stores), l !== null)))
        for (var a = 0; a < l.length; a++) {
          var u = l[a],
            n = u.getSnapshot
          u = u.value
          try {
            if (!ue(n(), u)) return !1
          } catch {
            return !1
          }
        }
      if (((l = e.child), e.subtreeFlags & 16384 && l !== null)) (l.return = e), (e = l)
      else {
        if (e === t) break
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) return !0
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    }
    return !0
  }
  function Pe(t, e, l, a) {
    ;(e &= ~Nc), (e &= ~Kl), (t.suspendedLanes |= e), (t.pingedLanes &= ~e), a && (t.warmLanes |= e), (a = t.expirationTimes)
    for (var u = e; 0 < u; ) {
      var n = 31 - ae(u),
        i = 1 << n
      ;(a[n] = -1), (u &= ~i)
    }
    l !== 0 && jf(t, l, e)
  }
  function Nn() {
    return At & 6 ? !0 : (bu(0), !1)
  }
  function Xc() {
    if (it !== null) {
      if (bt === 0) var t = it.return
      else (t = it), (Ze = Ql = null), Ji(t), (da = null), (tu = 0), (t = it)
      for (; t !== null; ) Es(t.alternate, t), (t = t.return)
      it = null
    }
  }
  function Aa(t, e) {
    ;(t.finishedWork = null), (t.finishedLanes = 0)
    var l = t.timeoutHandle
    l !== -1 && ((t.timeoutHandle = -1), Z0(l)), (l = t.cancelPendingCommit), l !== null && ((t.cancelPendingCommit = null), l()), Xc(), (pt = t), (it = l = Sl(t.current, null)), (rt = e), (bt = 0), (ce = null), (We = !1), (Ta = qa(t, e)), (xc = !1), (Ra = pe = Nc = Kl = pl = Dt = 0), (Ce = gu = null), (Bc = !1), e & 8 && (e |= e & 32)
    var a = t.entangledLanes
    if (a !== 0)
      for (t = t.entanglements, a &= e; 0 < a; ) {
        var u = 31 - ae(a),
          n = 1 << u
        ;(e |= t[u]), (a &= ~n)
      }
    return (Fe = e), an(), l
  }
  function Os(t, e) {
    ;(ut = null), (Q.H = Ue), e === Pa ? ((e = Lr()), (bt = 3)) : e === qr ? ((e = Lr()), (bt = 4)) : (bt = e === jo ? 8 : e !== null && typeof e == 'object' && typeof e.then == 'function' ? 6 : 1), (ce = e), it === null && ((Dt = 1), An(t, de(e, t.current)))
  }
  function zs() {
    var t = Q.H
    return (Q.H = Ue), t === null ? Ue : t
  }
  function Ds() {
    var t = Q.A
    return (Q.A = R0), t
  }
  function Qc() {
    ;(Dt = 4), We || ((rt & 4194176) !== rt && ve.current !== null) || (Ta = !0), (!(pl & 134217727) && !(Kl & 134217727)) || pt === null || Pe(pt, rt, pe, !1)
  }
  function wc(t, e, l) {
    var a = At
    At |= 2
    var u = zs(),
      n = Ds()
    ;(pt !== t || rt !== e) && ((Hn = null), Aa(t, e)), (e = !1)
    var i = Dt
    t: do
      try {
        if (bt !== 0 && it !== null) {
          var f = it,
            s = ce
          switch (bt) {
            case 8:
              Xc(), (i = 6)
              break t
            case 3:
            case 2:
            case 6:
              ve.current === null && (e = !0)
              var g = bt
              if (((bt = 0), (ce = null), Oa(t, f, s, g), l && Ta)) {
                i = 0
                break t
              }
              break
            default:
              ;(g = bt), (bt = 0), (ce = null), Oa(t, f, s, g)
          }
        }
        z0(), (i = Dt)
        break
      } catch (z) {
        Os(t, z)
      }
    while (!0)
    return e && t.shellSuspendCounter++, (Ze = Ql = null), (At = a), (Q.H = u), (Q.A = n), it === null && ((pt = null), (rt = 0), an()), i
  }
  function z0() {
    for (; it !== null; ) _s(it)
  }
  function D0(t, e) {
    var l = At
    At |= 2
    var a = zs(),
      u = Ds()
    pt !== t || rt !== e ? ((Hn = null), (Cn = De() + 500), Aa(t, e)) : (Ta = qa(t, e))
    t: do
      try {
        if (bt !== 0 && it !== null) {
          e = it
          var n = ce
          e: switch (bt) {
            case 1:
              ;(bt = 0), (ce = null), Oa(t, e, n, 1)
              break
            case 2:
              if (Yr(n)) {
                ;(bt = 0), (ce = null), Ms(e)
                break
              }
              ;(e = function () {
                bt === 2 && pt === t && (bt = 7), He(t)
              }),
                n.then(e, e)
              break t
            case 3:
              bt = 7
              break t
            case 4:
              bt = 5
              break t
            case 7:
              Yr(n) ? ((bt = 0), (ce = null), Ms(e)) : ((bt = 0), (ce = null), Oa(t, e, n, 7))
              break
            case 5:
              var i = null
              switch (it.tag) {
                case 26:
                  i = it.memoizedState
                case 5:
                case 27:
                  var f = it
                  if (!i || ud(i)) {
                    ;(bt = 0), (ce = null)
                    var s = f.sibling
                    if (s !== null) it = s
                    else {
                      var g = f.return
                      g !== null ? ((it = g), Bn(g)) : (it = null)
                    }
                    break e
                  }
              }
              ;(bt = 0), (ce = null), Oa(t, e, n, 5)
              break
            case 6:
              ;(bt = 0), (ce = null), Oa(t, e, n, 6)
              break
            case 8:
              Xc(), (Dt = 6)
              break t
            default:
              throw Error(r(462))
          }
        }
        _0()
        break
      } catch (z) {
        Os(t, z)
      }
    while (!0)
    return (Ze = Ql = null), (Q.H = a), (Q.A = u), (At = l), it !== null ? 0 : ((pt = null), (rt = 0), an(), Dt)
  }
  function _0() {
    for (; it !== null && !Wd(); ) _s(it)
  }
  function _s(t) {
    var e = Wo(t.alternate, t, Fe)
    ;(t.memoizedProps = t.pendingProps), e === null ? Bn(t) : (it = e)
  }
  function Ms(t) {
    var e = t,
      l = e.alternate
    switch (e.tag) {
      case 15:
      case 0:
        e = Zo(l, e, e.pendingProps, e.type, void 0, rt)
        break
      case 11:
        e = Zo(l, e, e.pendingProps, e.type.render, e.ref, rt)
        break
      case 5:
        Ji(e)
      default:
        Es(l, e), (e = it = Ss(e, Fe)), (e = Wo(l, e, Fe))
    }
    ;(t.memoizedProps = t.pendingProps), e === null ? Bn(t) : (it = e)
  }
  function Oa(t, e, l, a) {
    ;(Ze = Ql = null), Ji(e), (da = null), (tu = 0)
    var u = e.return
    try {
      if (y0(t, u, e, l, rt)) {
        ;(Dt = 1), An(t, de(l, t.current)), (it = null)
        return
      }
    } catch (n) {
      if (u !== null) throw ((it = u), n)
      ;(Dt = 1), An(t, de(l, t.current)), (it = null)
      return
    }
    e.flags & 32768 ? (ot || a === 1 ? (t = !0) : Ta || rt & 536870912 ? (t = !1) : ((We = t = !0), (a === 2 || a === 3 || a === 6) && ((a = ve.current), a !== null && a.tag === 13 && (a.flags |= 16384))), Us(e, t)) : Bn(e)
  }
  function Bn(t) {
    var e = t
    do {
      if (e.flags & 32768) {
        Us(e, We)
        return
      }
      t = e.return
      var l = E0(e.alternate, e, Fe)
      if (l !== null) {
        it = l
        return
      }
      if (((e = e.sibling), e !== null)) {
        it = e
        return
      }
      it = e = t
    } while (e !== null)
    Dt === 0 && (Dt = 5)
  }
  function Us(t, e) {
    do {
      var l = T0(t.alternate, t)
      if (l !== null) {
        ;(l.flags &= 32767), (it = l)
        return
      }
      if (((l = t.return), l !== null && ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)), !e && ((t = t.sibling), t !== null))) {
        it = t
        return
      }
      it = t = l
    } while (t !== null)
    ;(Dt = 6), (it = null)
  }
  function Cs(t, e, l, a, u, n, i, f, s, g) {
    var z = Q.T,
      C = X.p
    try {
      ;(X.p = 2), (Q.T = null), M0(t, e, l, a, C, u, n, i, f, s, g)
    } finally {
      ;(Q.T = z), (X.p = C)
    }
  }
  function M0(t, e, l, a, u, n, i, f) {
    do za()
    while (Jl !== null)
    if (At & 6) throw Error(r(327))
    var s = t.finishedWork
    if (((a = t.finishedLanes), s === null)) return null
    if (((t.finishedWork = null), (t.finishedLanes = 0), s === t.current)) throw Error(r(177))
    ;(t.callbackNode = null), (t.callbackPriority = 0), (t.cancelPendingCommit = null)
    var g = s.lanes | s.childLanes
    if (
      ((g |= Hi),
      ch(t, a, g, n, i, f),
      t === pt && ((it = pt = null), (rt = 0)),
      (!(s.subtreeFlags & 10256) && !(s.flags & 10256)) ||
        xn ||
        ((xn = !0),
        (Yc = g),
        (jc = l),
        x0(Qu, function () {
          return za(), null
        })),
      (l = (s.flags & 15990) !== 0),
      s.subtreeFlags & 15990 || l ? ((l = Q.T), (Q.T = null), (n = X.p), (X.p = 2), (i = At), (At |= 4), S0(t, s), ss(s, t), Ih(ef, t.containerInfo), (Jn = !!tf), (ef = tf = null), (t.current = s), cs(t, s.alternate, s), Fd(), (At = i), (X.p = n), (Q.T = l)) : (t.current = s),
      xn ? ((xn = !1), (Jl = t), (Su = a)) : Hs(t, g),
      (g = t.pendingLanes),
      g === 0 && (bl = null),
      lh(s.stateNode),
      He(t),
      e !== null)
    )
      for (u = t.onRecoverableError, s = 0; s < e.length; s++) (g = e[s]), u(g.value, { componentStack: g.stack })
    return Su & 3 && za(), (g = t.pendingLanes), a & 4194218 && g & 42 ? (t === Lc ? pu++ : ((pu = 0), (Lc = t))) : (pu = 0), bu(0), null
  }
  function Hs(t, e) {
    ;(t.pooledCacheLanes &= e) === 0 && ((e = t.pooledCache), e != null && ((t.pooledCache = null), lu(e)))
  }
  function za() {
    if (Jl !== null) {
      var t = Jl,
        e = Yc
      Yc = 0
      var l = Gf(Su),
        a = Q.T,
        u = X.p
      try {
        if (((X.p = 32 > l ? 32 : l), (Q.T = null), Jl === null)) var n = !1
        else {
          ;(l = jc), (jc = null)
          var i = Jl,
            f = Su
          if (((Jl = null), (Su = 0), At & 6)) throw Error(r(331))
          var s = At
          if (((At |= 4), ys(i.current), hs(i, i.current, f, l), (At = s), bu(0, !1), le && typeof le.onPostCommitFiberRoot == 'function'))
            try {
              le.onPostCommitFiberRoot(Ba, i)
            } catch {}
          n = !0
        }
        return n
      } finally {
        ;(X.p = u), (Q.T = a), Hs(t, e)
      }
    }
    return !1
  }
  function xs(t, e, l) {
    ;(e = de(l, e)), (e = cc(t.stateNode, e, 2)), (t = ml(t, e, 2)), t !== null && (Ya(t, 2), He(t))
  }
  function gt(t, e, l) {
    if (t.tag === 3) xs(t, t, l)
    else
      for (; e !== null; ) {
        if (e.tag === 3) {
          xs(e, t, l)
          break
        } else if (e.tag === 1) {
          var a = e.stateNode
          if (typeof e.type.getDerivedStateFromError == 'function' || (typeof a.componentDidCatch == 'function' && (bl === null || !bl.has(a)))) {
            ;(t = de(l, t)), (l = qo(2)), (a = ml(e, l, 2)), a !== null && (Yo(l, a, e, t), Ya(a, 2), He(a))
            break
          }
        }
        e = e.return
      }
  }
  function Zc(t, e, l) {
    var a = t.pingCache
    if (a === null) {
      a = t.pingCache = new A0()
      var u = new Set()
      a.set(e, u)
    } else (u = a.get(e)), u === void 0 && ((u = new Set()), a.set(e, u))
    u.has(l) || ((xc = !0), u.add(l), (t = U0.bind(null, t, e, l)), e.then(t, t))
  }
  function U0(t, e, l) {
    var a = t.pingCache
    a !== null && a.delete(e), (t.pingedLanes |= t.suspendedLanes & l), (t.warmLanes &= ~l), pt === t && (rt & l) === l && (Dt === 4 || (Dt === 3 && (rt & 62914560) === rt && 300 > De() - qc) ? !(At & 2) && Aa(t, 0) : (Nc |= l), Ra === rt && (Ra = 0)), He(t)
  }
  function Ns(t, e) {
    e === 0 && (e = Yf()), (t = il(t, e)), t !== null && (Ya(t, e), He(t))
  }
  function C0(t) {
    var e = t.memoizedState,
      l = 0
    e !== null && (l = e.retryLane), Ns(t, l)
  }
  function H0(t, e) {
    var l = 0
    switch (t.tag) {
      case 13:
        var a = t.stateNode,
          u = t.memoizedState
        u !== null && (l = u.retryLane)
        break
      case 19:
        a = t.stateNode
        break
      case 22:
        a = t.stateNode._retryCache
        break
      default:
        throw Error(r(314))
    }
    a !== null && a.delete(e), Ns(t, l)
  }
  function x0(t, e) {
    return fi(t, e)
  }
  var qn = null,
    Da = null,
    Vc = !1,
    Yn = !1,
    Kc = !1,
    $l = 0
  function He(t) {
    t !== Da && t.next === null && (Da === null ? (qn = Da = t) : (Da = Da.next = t)), (Yn = !0), Vc || ((Vc = !0), B0(N0))
  }
  function bu(t, e) {
    if (!Kc && Yn) {
      Kc = !0
      do
        for (var l = !1, a = qn; a !== null; ) {
          if (t !== 0) {
            var u = a.pendingLanes
            if (u === 0) var n = 0
            else {
              var i = a.suspendedLanes,
                f = a.pingedLanes
              ;(n = (1 << (31 - ae(42 | t) + 1)) - 1), (n &= u & ~(i & ~f)), (n = n & 201326677 ? (n & 201326677) | 1 : n ? n | 2 : 0)
            }
            n !== 0 && ((l = !0), Ys(a, n))
          } else (n = rt), (n = Vu(a, a === pt ? n : 0)), !(n & 3) || qa(a, n) || ((l = !0), Ys(a, n))
          a = a.next
        }
      while (l)
      Kc = !1
    }
  }
  function N0() {
    Yn = Vc = !1
    var t = 0
    $l !== 0 && (w0() && (t = $l), ($l = 0))
    for (var e = De(), l = null, a = qn; a !== null; ) {
      var u = a.next,
        n = Bs(a, e)
      n === 0 ? ((a.next = null), l === null ? (qn = u) : (l.next = u), u === null && (Da = l)) : ((l = a), (t !== 0 || n & 3) && (Yn = !0)), (a = u)
    }
    bu(t)
  }
  function Bs(t, e) {
    for (var l = t.suspendedLanes, a = t.pingedLanes, u = t.expirationTimes, n = t.pendingLanes & -62914561; 0 < n; ) {
      var i = 31 - ae(n),
        f = 1 << i,
        s = u[i]
      s === -1 ? (!(f & l) || f & a) && (u[i] = ih(f, e)) : s <= e && (t.expiredLanes |= f), (n &= ~f)
    }
    if (((e = pt), (l = rt), (l = Vu(t, t === e ? l : 0)), (a = t.callbackNode), l === 0 || (t === e && bt === 2) || t.cancelPendingCommit !== null)) return a !== null && a !== null && ri(a), (t.callbackNode = null), (t.callbackPriority = 0)
    if (!(l & 3) || qa(t, l)) {
      if (((e = l & -l), e === t.callbackPriority)) return e
      switch ((a !== null && ri(a), Gf(l))) {
        case 2:
        case 8:
          l = Nf
          break
        case 32:
          l = Qu
          break
        case 268435456:
          l = Bf
          break
        default:
          l = Qu
      }
      return (a = qs.bind(null, t)), (l = fi(l, a)), (t.callbackPriority = e), (t.callbackNode = l), e
    }
    return a !== null && a !== null && ri(a), (t.callbackPriority = 2), (t.callbackNode = null), 2
  }
  function qs(t, e) {
    var l = t.callbackNode
    if (za() && t.callbackNode !== l) return null
    var a = rt
    return (a = Vu(t, t === pt ? a : 0)), a === 0 ? null : (Rs(t, a, e), Bs(t, De()), t.callbackNode != null && t.callbackNode === l ? qs.bind(null, t) : null)
  }
  function Ys(t, e) {
    if (za()) return null
    Rs(t, e, !0)
  }
  function B0(t) {
    V0(function () {
      At & 6 ? fi(xf, t) : t()
    })
  }
  function Jc() {
    return $l === 0 && ($l = qf()), $l
  }
  function js(t) {
    return t == null || typeof t == 'symbol' || typeof t == 'boolean' ? null : typeof t == 'function' ? t : Wu('' + t)
  }
  function Ls(t, e) {
    var l = e.ownerDocument.createElement('input')
    return (l.name = e.name), (l.value = e.value), t.id && l.setAttribute('form', t.id), e.parentNode.insertBefore(l, e), (t = new FormData(t)), l.parentNode.removeChild(l), t
  }
  function q0(t, e, l, a, u) {
    if (e === 'submit' && l && l.stateNode === u) {
      var n = js((u[It] || null).action),
        i = a.submitter
      i && ((e = (e = i[It] || null) ? js(e.formAction) : i.getAttribute('formAction')), e !== null && ((n = e), (i = null)))
      var f = new tn('action', 'action', null, a, u)
      t.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if ($l !== 0) {
                  var s = i ? Ls(u, i) : new FormData(u)
                  lc(l, { pending: !0, data: s, method: u.method, action: n }, null, s)
                }
              } else typeof n == 'function' && (f.preventDefault(), (s = i ? Ls(u, i) : new FormData(u)), lc(l, { pending: !0, data: s, method: u.method, action: n }, n, s))
            },
            currentTarget: u,
          },
        ],
      })
    }
  }
  for (var $c = 0; $c < Ur.length; $c++) {
    var kc = Ur[$c],
      Y0 = kc.toLowerCase(),
      j0 = kc[0].toUpperCase() + kc.slice(1)
    Ee(Y0, 'on' + j0)
  }
  Ee(Or, 'onAnimationEnd'),
    Ee(zr, 'onAnimationIteration'),
    Ee(Dr, 'onAnimationStart'),
    Ee('dblclick', 'onDoubleClick'),
    Ee('focusin', 'onFocus'),
    Ee('focusout', 'onBlur'),
    Ee(e0, 'onTransitionRun'),
    Ee(l0, 'onTransitionStart'),
    Ee(a0, 'onTransitionCancel'),
    Ee(_r, 'onTransitionEnd'),
    ta('onMouseEnter', ['mouseout', 'mouseover']),
    ta('onMouseLeave', ['mouseout', 'mouseover']),
    ta('onPointerEnter', ['pointerout', 'pointerover']),
    ta('onPointerLeave', ['pointerout', 'pointerover']),
    Ml('onChange', 'change click focusin focusout input keydown keyup selectionchange'.split(' ')),
    Ml('onSelect', 'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(' ')),
    Ml('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
    Ml('onCompositionEnd', 'compositionend focusout keydown keypress keyup mousedown'.split(' ')),
    Ml('onCompositionStart', 'compositionstart focusout keydown keypress keyup mousedown'.split(' ')),
    Ml('onCompositionUpdate', 'compositionupdate focusout keydown keypress keyup mousedown'.split(' '))
  var Eu = 'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(' '),
    L0 = new Set('beforetoggle cancel close invalid load scroll scrollend toggle'.split(' ').concat(Eu))
  function Gs(t, e) {
    e = (e & 4) !== 0
    for (var l = 0; l < t.length; l++) {
      var a = t[l],
        u = a.event
      a = a.listeners
      t: {
        var n = void 0
        if (e)
          for (var i = a.length - 1; 0 <= i; i--) {
            var f = a[i],
              s = f.instance,
              g = f.currentTarget
            if (((f = f.listener), s !== n && u.isPropagationStopped())) break t
            ;(n = f), (u.currentTarget = g)
            try {
              n(u)
            } catch (z) {
              Rn(z)
            }
            ;(u.currentTarget = null), (n = s)
          }
        else
          for (i = 0; i < a.length; i++) {
            if (((f = a[i]), (s = f.instance), (g = f.currentTarget), (f = f.listener), s !== n && u.isPropagationStopped())) break t
            ;(n = f), (u.currentTarget = g)
            try {
              n(u)
            } catch (z) {
              Rn(z)
            }
            ;(u.currentTarget = null), (n = s)
          }
      }
    }
  }
  function ct(t, e) {
    var l = e[si]
    l === void 0 && (l = e[si] = new Set())
    var a = t + '__bubble'
    l.has(a) || (Xs(e, t, 2, !1), l.add(a))
  }
  function Wc(t, e, l) {
    var a = 0
    e && (a |= 4), Xs(l, t, a, e)
  }
  var jn = '_reactListening' + Math.random().toString(36).slice(2)
  function Fc(t) {
    if (!t[jn]) {
      ;(t[jn] = !0),
        wf.forEach(function (l) {
          l !== 'selectionchange' && (L0.has(l) || Wc(l, !1, t), Wc(l, !0, t))
        })
      var e = t.nodeType === 9 ? t : t.ownerDocument
      e === null || e[jn] || ((e[jn] = !0), Wc('selectionchange', !1, e))
    }
  }
  function Xs(t, e, l, a) {
    switch (od(e)) {
      case 2:
        var u = sm
        break
      case 8:
        u = dm
        break
      default:
        u = sf
    }
    ;(l = u.bind(null, e, l, t)), (u = void 0), !pi || (e !== 'touchstart' && e !== 'touchmove' && e !== 'wheel') || (u = !0), a ? (u !== void 0 ? t.addEventListener(e, l, { capture: !0, passive: u }) : t.addEventListener(e, l, !0)) : u !== void 0 ? t.addEventListener(e, l, { passive: u }) : t.addEventListener(e, l, !1)
  }
  function Pc(t, e, l, a, u) {
    var n = a
    if (!(e & 1) && !(e & 2) && a !== null)
      t: for (;;) {
        if (a === null) return
        var i = a.tag
        if (i === 3 || i === 4) {
          var f = a.stateNode.containerInfo
          if (f === u || (f.nodeType === 8 && f.parentNode === u)) break
          if (i === 4)
            for (i = a.return; i !== null; ) {
              var s = i.tag
              if ((s === 3 || s === 4) && ((s = i.stateNode.containerInfo), s === u || (s.nodeType === 8 && s.parentNode === u))) return
              i = i.return
            }
          for (; f !== null; ) {
            if (((i = _l(f)), i === null)) return
            if (((s = i.tag), s === 5 || s === 6 || s === 26 || s === 27)) {
              a = n = i
              continue t
            }
            f = f.parentNode
          }
        }
        a = a.return
      }
    er(function () {
      var g = n,
        z = gi(l),
        C = []
      t: {
        var T = Mr.get(t)
        if (T !== void 0) {
          var A = tn,
            Z = t
          switch (t) {
            case 'keypress':
              if (Pu(l) === 0) break t
            case 'keydown':
            case 'keyup':
              A = Hh
              break
            case 'focusin':
              ;(Z = 'focus'), (A = Ri)
              break
            case 'focusout':
              ;(Z = 'blur'), (A = Ri)
              break
            case 'beforeblur':
            case 'afterblur':
              A = Ri
              break
            case 'click':
              if (l.button === 2) break t
            case 'auxclick':
            case 'dblclick':
            case 'mousedown':
            case 'mousemove':
            case 'mouseup':
            case 'mouseout':
            case 'mouseover':
            case 'contextmenu':
              A = ur
              break
            case 'drag':
            case 'dragend':
            case 'dragenter':
            case 'dragexit':
            case 'dragleave':
            case 'dragover':
            case 'dragstart':
            case 'drop':
              A = bh
              break
            case 'touchcancel':
            case 'touchend':
            case 'touchmove':
            case 'touchstart':
              A = Bh
              break
            case Or:
            case zr:
            case Dr:
              A = Rh
              break
            case _r:
              A = Yh
              break
            case 'scroll':
            case 'scrollend':
              A = Sh
              break
            case 'wheel':
              A = Lh
              break
            case 'copy':
            case 'cut':
            case 'paste':
              A = Oh
              break
            case 'gotpointercapture':
            case 'lostpointercapture':
            case 'pointercancel':
            case 'pointerdown':
            case 'pointermove':
            case 'pointerout':
            case 'pointerover':
            case 'pointerup':
              A = ir
              break
            case 'toggle':
            case 'beforetoggle':
              A = Xh
          }
          var P = (e & 4) !== 0,
            _t = !P && (t === 'scroll' || t === 'scrollend'),
            b = P ? (T !== null ? T + 'Capture' : null) : T
          P = []
          for (var y = g, E; y !== null; ) {
            var U = y
            if (((E = U.stateNode), (U = U.tag), (U !== 5 && U !== 26 && U !== 27) || E === null || b === null || ((U = Ga(y, b)), U != null && P.push(Tu(y, U, E))), _t)) break
            y = y.return
          }
          0 < P.length && ((T = new A(T, Z, null, l, z)), C.push({ event: T, listeners: P }))
        }
      }
      if (!(e & 7)) {
        t: {
          if (((T = t === 'mouseover' || t === 'pointerover'), (A = t === 'mouseout' || t === 'pointerout'), T && l !== yi && (Z = l.relatedTarget || l.fromElement) && (_l(Z) || Z[Fl]))) break t
          if ((A || T) && ((T = z.window === z ? z : (T = z.ownerDocument) ? T.defaultView || T.parentWindow : window), A ? ((Z = l.relatedTarget || l.toElement), (A = g), (Z = Z ? _l(Z) : null), Z !== null && ((_t = W(Z)), (P = Z.tag), Z !== _t || (P !== 5 && P !== 27 && P !== 6)) && (Z = null)) : ((A = null), (Z = g)), A !== Z)) {
            if (((P = ur), (U = 'onMouseLeave'), (b = 'onMouseEnter'), (y = 'mouse'), (t === 'pointerout' || t === 'pointerover') && ((P = ir), (U = 'onPointerLeave'), (b = 'onPointerEnter'), (y = 'pointer')), (_t = A == null ? T : La(A)), (E = Z == null ? T : La(Z)), (T = new P(U, y + 'leave', A, l, z)), (T.target = _t), (T.relatedTarget = E), (U = null), _l(z) === g && ((P = new P(b, y + 'enter', Z, l, z)), (P.target = E), (P.relatedTarget = _t), (U = P)), (_t = U), A && Z))
              e: {
                for (P = A, b = Z, y = 0, E = P; E; E = _a(E)) y++
                for (E = 0, U = b; U; U = _a(U)) E++
                for (; 0 < y - E; ) (P = _a(P)), y--
                for (; 0 < E - y; ) (b = _a(b)), E--
                for (; y--; ) {
                  if (P === b || (b !== null && P === b.alternate)) break e
                  ;(P = _a(P)), (b = _a(b))
                }
                P = null
              }
            else P = null
            A !== null && Qs(C, T, A, P, !1), Z !== null && _t !== null && Qs(C, _t, Z, P, !0)
          }
        }
        t: {
          if (((T = g ? La(g) : window), (A = T.nodeName && T.nodeName.toLowerCase()), A === 'select' || (A === 'input' && T.type === 'file'))) var w = mr
          else if (dr(T))
            if (vr) w = Fh
            else {
              w = kh
              var nt = $h
            }
          else (A = T.nodeName), !A || A.toLowerCase() !== 'input' || (T.type !== 'checkbox' && T.type !== 'radio') ? g && vi(g.elementType) && (w = mr) : (w = Wh)
          if (w && (w = w(t, g))) {
            hr(C, w, l, z)
            break t
          }
          nt && nt(t, T, g), t === 'focusout' && g && T.type === 'number' && g.memoizedProps.value != null && mi(T, 'number', T.value)
        }
        switch (((nt = g ? La(g) : window), t)) {
          case 'focusin':
            ;(dr(nt) || nt.contentEditable === 'true') && ((ia = nt), (Mi = g), ($a = null))
            break
          case 'focusout':
            $a = Mi = ia = null
            break
          case 'mousedown':
            Ui = !0
            break
          case 'contextmenu':
          case 'mouseup':
          case 'dragend':
            ;(Ui = !1), Rr(C, l, z)
            break
          case 'selectionchange':
            if (t0) break
          case 'keydown':
          case 'keyup':
            Rr(C, l, z)
        }
        var V
        if (Oi)
          t: {
            switch (t) {
              case 'compositionstart':
                var J = 'onCompositionStart'
                break t
              case 'compositionend':
                J = 'onCompositionEnd'
                break t
              case 'compositionupdate':
                J = 'onCompositionUpdate'
                break t
            }
            J = void 0
          }
        else na ? or(t, l) && (J = 'onCompositionEnd') : t === 'keydown' && l.keyCode === 229 && (J = 'onCompositionStart')
        J && (cr && l.locale !== 'ko' && (na || J !== 'onCompositionStart' ? J === 'onCompositionEnd' && na && (V = lr()) : ((nl = z), (bi = 'value' in nl ? nl.value : nl.textContent), (na = !0))), (nt = Ln(g, J)), 0 < nt.length && ((J = new nr(J, t, null, l, z)), C.push({ event: J, listeners: nt }), V ? (J.data = V) : ((V = sr(l)), V !== null && (J.data = V)))), (V = wh ? Zh(t, l) : Vh(t, l)) && ((J = Ln(g, 'onBeforeInput')), 0 < J.length && ((nt = new nr('onBeforeInput', 'beforeinput', null, l, z)), C.push({ event: nt, listeners: J }), (nt.data = V))), q0(C, t, g, l, z)
      }
      Gs(C, e)
    })
  }
  function Tu(t, e, l) {
    return { instance: t, listener: e, currentTarget: l }
  }
  function Ln(t, e) {
    for (var l = e + 'Capture', a = []; t !== null; ) {
      var u = t,
        n = u.stateNode
      ;(u = u.tag), (u !== 5 && u !== 26 && u !== 27) || n === null || ((u = Ga(t, l)), u != null && a.unshift(Tu(t, u, n)), (u = Ga(t, e)), u != null && a.push(Tu(t, u, n))), (t = t.return)
    }
    return a
  }
  function _a(t) {
    if (t === null) return null
    do t = t.return
    while (t && t.tag !== 5 && t.tag !== 27)
    return t || null
  }
  function Qs(t, e, l, a, u) {
    for (var n = e._reactName, i = []; l !== null && l !== a; ) {
      var f = l,
        s = f.alternate,
        g = f.stateNode
      if (((f = f.tag), s !== null && s === a)) break
      ;(f !== 5 && f !== 26 && f !== 27) || g === null || ((s = g), u ? ((g = Ga(l, n)), g != null && i.unshift(Tu(l, g, s))) : u || ((g = Ga(l, n)), g != null && i.push(Tu(l, g, s)))), (l = l.return)
    }
    i.length !== 0 && t.push({ event: e, listeners: i })
  }
  var G0 = /\r\n?/g,
    X0 = /\u0000|\uFFFD/g
  function ws(t) {
    return (typeof t == 'string' ? t : '' + t)
      .replace(
        G0,
        `
`,
      )
      .replace(X0, '')
  }
  function Zs(t, e) {
    return (e = ws(e)), ws(t) === e
  }
  function Gn() {}
  function vt(t, e, l, a, u, n) {
    switch (l) {
      case 'children':
        typeof a == 'string' ? e === 'body' || (e === 'textarea' && a === '') || la(t, a) : (typeof a == 'number' || typeof a == 'bigint') && e !== 'body' && la(t, '' + a)
        break
      case 'className':
        Ju(t, 'class', a)
        break
      case 'tabIndex':
        Ju(t, 'tabindex', a)
        break
      case 'dir':
      case 'role':
      case 'viewBox':
      case 'width':
      case 'height':
        Ju(t, l, a)
        break
      case 'style':
        If(t, a, n)
        break
      case 'data':
        if (e !== 'object') {
          Ju(t, 'data', a)
          break
        }
      case 'src':
      case 'href':
        if (a === '' && (e !== 'a' || l !== 'href')) {
          t.removeAttribute(l)
          break
        }
        if (a == null || typeof a == 'function' || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(l)
          break
        }
        ;(a = Wu('' + a)), t.setAttribute(l, a)
        break
      case 'action':
      case 'formAction':
        if (typeof a == 'function') {
          t.setAttribute(l, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')")
          break
        } else typeof n == 'function' && (l === 'formAction' ? (e !== 'input' && vt(t, e, 'name', u.name, u, null), vt(t, e, 'formEncType', u.formEncType, u, null), vt(t, e, 'formMethod', u.formMethod, u, null), vt(t, e, 'formTarget', u.formTarget, u, null)) : (vt(t, e, 'encType', u.encType, u, null), vt(t, e, 'method', u.method, u, null), vt(t, e, 'target', u.target, u, null)))
        if (a == null || typeof a == 'symbol' || typeof a == 'boolean') {
          t.removeAttribute(l)
          break
        }
        ;(a = Wu('' + a)), t.setAttribute(l, a)
        break
      case 'onClick':
        a != null && (t.onclick = Gn)
        break
      case 'onScroll':
        a != null && ct('scroll', t)
        break
      case 'onScrollEnd':
        a != null && ct('scrollend', t)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(r(61))
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(r(60))
            t.innerHTML = l
          }
        }
        break
      case 'multiple':
        t.multiple = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'muted':
        t.muted = a && typeof a != 'function' && typeof a != 'symbol'
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'defaultValue':
      case 'defaultChecked':
      case 'innerHTML':
      case 'ref':
        break
      case 'autoFocus':
        break
      case 'xlinkHref':
        if (a == null || typeof a == 'function' || typeof a == 'boolean' || typeof a == 'symbol') {
          t.removeAttribute('xlink:href')
          break
        }
        ;(l = Wu('' + a)), t.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', l)
        break
      case 'contentEditable':
      case 'spellCheck':
      case 'draggable':
      case 'value':
      case 'autoReverse':
      case 'externalResourcesRequired':
      case 'focusable':
      case 'preserveAlpha':
        a != null && typeof a != 'function' && typeof a != 'symbol' ? t.setAttribute(l, '' + a) : t.removeAttribute(l)
        break
      case 'inert':
      case 'allowFullScreen':
      case 'async':
      case 'autoPlay':
      case 'controls':
      case 'default':
      case 'defer':
      case 'disabled':
      case 'disablePictureInPicture':
      case 'disableRemotePlayback':
      case 'formNoValidate':
      case 'hidden':
      case 'loop':
      case 'noModule':
      case 'noValidate':
      case 'open':
      case 'playsInline':
      case 'readOnly':
      case 'required':
      case 'reversed':
      case 'scoped':
      case 'seamless':
      case 'itemScope':
        a && typeof a != 'function' && typeof a != 'symbol' ? t.setAttribute(l, '') : t.removeAttribute(l)
        break
      case 'capture':
      case 'download':
        a === !0 ? t.setAttribute(l, '') : a !== !1 && a != null && typeof a != 'function' && typeof a != 'symbol' ? t.setAttribute(l, a) : t.removeAttribute(l)
        break
      case 'cols':
      case 'rows':
      case 'size':
      case 'span':
        a != null && typeof a != 'function' && typeof a != 'symbol' && !isNaN(a) && 1 <= a ? t.setAttribute(l, a) : t.removeAttribute(l)
        break
      case 'rowSpan':
      case 'start':
        a == null || typeof a == 'function' || typeof a == 'symbol' || isNaN(a) ? t.removeAttribute(l) : t.setAttribute(l, a)
        break
      case 'popover':
        ct('beforetoggle', t), ct('toggle', t), Ku(t, 'popover', a)
        break
      case 'xlinkActuate':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:actuate', a)
        break
      case 'xlinkArcrole':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', a)
        break
      case 'xlinkRole':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:role', a)
        break
      case 'xlinkShow':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:show', a)
        break
      case 'xlinkTitle':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:title', a)
        break
      case 'xlinkType':
        je(t, 'http://www.w3.org/1999/xlink', 'xlink:type', a)
        break
      case 'xmlBase':
        je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:base', a)
        break
      case 'xmlLang':
        je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', a)
        break
      case 'xmlSpace':
        je(t, 'http://www.w3.org/XML/1998/namespace', 'xml:space', a)
        break
      case 'is':
        Ku(t, 'is', a)
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        ;(!(2 < l.length) || (l[0] !== 'o' && l[0] !== 'O') || (l[1] !== 'n' && l[1] !== 'N')) && ((l = yh.get(l) || l), Ku(t, l, a))
    }
  }
  function Ic(t, e, l, a, u, n) {
    switch (l) {
      case 'style':
        If(t, a, n)
        break
      case 'dangerouslySetInnerHTML':
        if (a != null) {
          if (typeof a != 'object' || !('__html' in a)) throw Error(r(61))
          if (((l = a.__html), l != null)) {
            if (u.children != null) throw Error(r(60))
            t.innerHTML = l
          }
        }
        break
      case 'children':
        typeof a == 'string' ? la(t, a) : (typeof a == 'number' || typeof a == 'bigint') && la(t, '' + a)
        break
      case 'onScroll':
        a != null && ct('scroll', t)
        break
      case 'onScrollEnd':
        a != null && ct('scrollend', t)
        break
      case 'onClick':
        a != null && (t.onclick = Gn)
        break
      case 'suppressContentEditableWarning':
      case 'suppressHydrationWarning':
      case 'innerHTML':
      case 'ref':
        break
      case 'innerText':
      case 'textContent':
        break
      default:
        if (!Zf.hasOwnProperty(l))
          t: {
            if (l[0] === 'o' && l[1] === 'n' && ((u = l.endsWith('Capture')), (e = l.slice(2, u ? l.length - 7 : void 0)), (n = t[It] || null), (n = n != null ? n[l] : null), typeof n == 'function' && t.removeEventListener(e, n, u), typeof a == 'function')) {
              typeof n != 'function' && n !== null && (l in t ? (t[l] = null) : t.hasAttribute(l) && t.removeAttribute(l)), t.addEventListener(e, a, u)
              break t
            }
            l in t ? (t[l] = a) : a === !0 ? t.setAttribute(l, '') : Ku(t, l, a)
          }
    }
  }
  function Zt(t, e, l) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'img':
        ct('error', t), ct('load', t)
        var a = !1,
          u = !1,
          n
        for (n in l)
          if (l.hasOwnProperty(n)) {
            var i = l[n]
            if (i != null)
              switch (n) {
                case 'src':
                  a = !0
                  break
                case 'srcSet':
                  u = !0
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  throw Error(r(137, e))
                default:
                  vt(t, e, n, i, l, null)
              }
          }
        u && vt(t, e, 'srcSet', l.srcSet, l, null), a && vt(t, e, 'src', l.src, l, null)
        return
      case 'input':
        ct('invalid', t)
        var f = (n = i = u = null),
          s = null,
          g = null
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var z = l[a]
            if (z != null)
              switch (a) {
                case 'name':
                  u = z
                  break
                case 'type':
                  i = z
                  break
                case 'checked':
                  s = z
                  break
                case 'defaultChecked':
                  g = z
                  break
                case 'value':
                  n = z
                  break
                case 'defaultValue':
                  f = z
                  break
                case 'children':
                case 'dangerouslySetInnerHTML':
                  if (z != null) throw Error(r(137, e))
                  break
                default:
                  vt(t, e, a, z, l, null)
              }
          }
        kf(t, n, f, s, g, i, u, !1), $u(t)
        return
      case 'select':
        ct('invalid', t), (a = i = n = null)
        for (u in l)
          if (l.hasOwnProperty(u) && ((f = l[u]), f != null))
            switch (u) {
              case 'value':
                n = f
                break
              case 'defaultValue':
                i = f
                break
              case 'multiple':
                a = f
              default:
                vt(t, e, u, f, l, null)
            }
        ;(e = n), (l = i), (t.multiple = !!a), e != null ? ea(t, !!a, e, !1) : l != null && ea(t, !!a, l, !0)
        return
      case 'textarea':
        ct('invalid', t), (n = u = a = null)
        for (i in l)
          if (l.hasOwnProperty(i) && ((f = l[i]), f != null))
            switch (i) {
              case 'value':
                a = f
                break
              case 'defaultValue':
                u = f
                break
              case 'children':
                n = f
                break
              case 'dangerouslySetInnerHTML':
                if (f != null) throw Error(r(91))
                break
              default:
                vt(t, e, i, f, l, null)
            }
        Ff(t, a, u, n), $u(t)
        return
      case 'option':
        for (s in l)
          if (l.hasOwnProperty(s) && ((a = l[s]), a != null))
            switch (s) {
              case 'selected':
                t.selected = a && typeof a != 'function' && typeof a != 'symbol'
                break
              default:
                vt(t, e, s, a, l, null)
            }
        return
      case 'dialog':
        ct('cancel', t), ct('close', t)
        break
      case 'iframe':
      case 'object':
        ct('load', t)
        break
      case 'video':
      case 'audio':
        for (a = 0; a < Eu.length; a++) ct(Eu[a], t)
        break
      case 'image':
        ct('error', t), ct('load', t)
        break
      case 'details':
        ct('toggle', t)
        break
      case 'embed':
      case 'source':
      case 'link':
        ct('error', t), ct('load', t)
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (g in l)
          if (l.hasOwnProperty(g) && ((a = l[g]), a != null))
            switch (g) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                throw Error(r(137, e))
              default:
                vt(t, e, g, a, l, null)
            }
        return
      default:
        if (vi(e)) {
          for (z in l) l.hasOwnProperty(z) && ((a = l[z]), a !== void 0 && Ic(t, e, z, a, l, void 0))
          return
        }
    }
    for (f in l) l.hasOwnProperty(f) && ((a = l[f]), a != null && vt(t, e, f, a, l, null))
  }
  function Q0(t, e, l, a) {
    switch (e) {
      case 'div':
      case 'span':
      case 'svg':
      case 'path':
      case 'a':
      case 'g':
      case 'p':
      case 'li':
        break
      case 'input':
        var u = null,
          n = null,
          i = null,
          f = null,
          s = null,
          g = null,
          z = null
        for (A in l) {
          var C = l[A]
          if (l.hasOwnProperty(A) && C != null)
            switch (A) {
              case 'checked':
                break
              case 'value':
                break
              case 'defaultValue':
                s = C
              default:
                a.hasOwnProperty(A) || vt(t, e, A, null, a, C)
            }
        }
        for (var T in a) {
          var A = a[T]
          if (((C = l[T]), a.hasOwnProperty(T) && (A != null || C != null)))
            switch (T) {
              case 'type':
                n = A
                break
              case 'name':
                u = A
                break
              case 'checked':
                g = A
                break
              case 'defaultChecked':
                z = A
                break
              case 'value':
                i = A
                break
              case 'defaultValue':
                f = A
                break
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (A != null) throw Error(r(137, e))
                break
              default:
                A !== C && vt(t, e, T, A, a, C)
            }
        }
        hi(t, i, f, s, g, z, n, u)
        return
      case 'select':
        A = i = f = T = null
        for (n in l)
          if (((s = l[n]), l.hasOwnProperty(n) && s != null))
            switch (n) {
              case 'value':
                break
              case 'multiple':
                A = s
              default:
                a.hasOwnProperty(n) || vt(t, e, n, null, a, s)
            }
        for (u in a)
          if (((n = a[u]), (s = l[u]), a.hasOwnProperty(u) && (n != null || s != null)))
            switch (u) {
              case 'value':
                T = n
                break
              case 'defaultValue':
                f = n
                break
              case 'multiple':
                i = n
              default:
                n !== s && vt(t, e, u, n, a, s)
            }
        ;(e = f), (l = i), (a = A), T != null ? ea(t, !!l, T, !1) : !!a != !!l && (e != null ? ea(t, !!l, e, !0) : ea(t, !!l, l ? [] : '', !1))
        return
      case 'textarea':
        A = T = null
        for (f in l)
          if (((u = l[f]), l.hasOwnProperty(f) && u != null && !a.hasOwnProperty(f)))
            switch (f) {
              case 'value':
                break
              case 'children':
                break
              default:
                vt(t, e, f, null, a, u)
            }
        for (i in a)
          if (((u = a[i]), (n = l[i]), a.hasOwnProperty(i) && (u != null || n != null)))
            switch (i) {
              case 'value':
                T = u
                break
              case 'defaultValue':
                A = u
                break
              case 'children':
                break
              case 'dangerouslySetInnerHTML':
                if (u != null) throw Error(r(91))
                break
              default:
                u !== n && vt(t, e, i, u, a, n)
            }
        Wf(t, T, A)
        return
      case 'option':
        for (var Z in l)
          if (((T = l[Z]), l.hasOwnProperty(Z) && T != null && !a.hasOwnProperty(Z)))
            switch (Z) {
              case 'selected':
                t.selected = !1
                break
              default:
                vt(t, e, Z, null, a, T)
            }
        for (s in a)
          if (((T = a[s]), (A = l[s]), a.hasOwnProperty(s) && T !== A && (T != null || A != null)))
            switch (s) {
              case 'selected':
                t.selected = T && typeof T != 'function' && typeof T != 'symbol'
                break
              default:
                vt(t, e, s, T, a, A)
            }
        return
      case 'img':
      case 'link':
      case 'area':
      case 'base':
      case 'br':
      case 'col':
      case 'embed':
      case 'hr':
      case 'keygen':
      case 'meta':
      case 'param':
      case 'source':
      case 'track':
      case 'wbr':
      case 'menuitem':
        for (var P in l) (T = l[P]), l.hasOwnProperty(P) && T != null && !a.hasOwnProperty(P) && vt(t, e, P, null, a, T)
        for (g in a)
          if (((T = a[g]), (A = l[g]), a.hasOwnProperty(g) && T !== A && (T != null || A != null)))
            switch (g) {
              case 'children':
              case 'dangerouslySetInnerHTML':
                if (T != null) throw Error(r(137, e))
                break
              default:
                vt(t, e, g, T, a, A)
            }
        return
      default:
        if (vi(e)) {
          for (var _t in l) (T = l[_t]), l.hasOwnProperty(_t) && T !== void 0 && !a.hasOwnProperty(_t) && Ic(t, e, _t, void 0, a, T)
          for (z in a) (T = a[z]), (A = l[z]), !a.hasOwnProperty(z) || T === A || (T === void 0 && A === void 0) || Ic(t, e, z, T, a, A)
          return
        }
    }
    for (var b in l) (T = l[b]), l.hasOwnProperty(b) && T != null && !a.hasOwnProperty(b) && vt(t, e, b, null, a, T)
    for (C in a) (T = a[C]), (A = l[C]), !a.hasOwnProperty(C) || T === A || (T == null && A == null) || vt(t, e, C, T, a, A)
  }
  var tf = null,
    ef = null
  function Xn(t) {
    return t.nodeType === 9 ? t : t.ownerDocument
  }
  function Vs(t) {
    switch (t) {
      case 'http://www.w3.org/2000/svg':
        return 1
      case 'http://www.w3.org/1998/Math/MathML':
        return 2
      default:
        return 0
    }
  }
  function Ks(t, e) {
    if (t === 0)
      switch (e) {
        case 'svg':
          return 1
        case 'math':
          return 2
        default:
          return 0
      }
    return t === 1 && e === 'foreignObject' ? 0 : t
  }
  function lf(t, e) {
    return t === 'textarea' || t === 'noscript' || typeof e.children == 'string' || typeof e.children == 'number' || typeof e.children == 'bigint' || (typeof e.dangerouslySetInnerHTML == 'object' && e.dangerouslySetInnerHTML !== null && e.dangerouslySetInnerHTML.__html != null)
  }
  var af = null
  function w0() {
    var t = window.event
    return t && t.type === 'popstate' ? (t === af ? !1 : ((af = t), !0)) : ((af = null), !1)
  }
  var Js = typeof setTimeout == 'function' ? setTimeout : void 0,
    Z0 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    $s = typeof Promise == 'function' ? Promise : void 0,
    V0 =
      typeof queueMicrotask == 'function'
        ? queueMicrotask
        : typeof $s < 'u'
          ? function (t) {
              return $s.resolve(null).then(t).catch(K0)
            }
          : Js
  function K0(t) {
    setTimeout(function () {
      throw t
    })
  }
  function uf(t, e) {
    var l = e,
      a = 0
    do {
      var u = l.nextSibling
      if ((t.removeChild(l), u && u.nodeType === 8))
        if (((l = u.data), l === '/$')) {
          if (a === 0) {
            t.removeChild(u), Uu(e)
            return
          }
          a--
        } else (l !== '$' && l !== '$?' && l !== '$!') || a++
      l = u
    } while (l)
    Uu(e)
  }
  function nf(t) {
    var e = t.firstChild
    for (e && e.nodeType === 10 && (e = e.nextSibling); e; ) {
      var l = e
      switch (((e = e.nextSibling), l.nodeName)) {
        case 'HTML':
        case 'HEAD':
        case 'BODY':
          nf(l), di(l)
          continue
        case 'SCRIPT':
        case 'STYLE':
          continue
        case 'LINK':
          if (l.rel.toLowerCase() === 'stylesheet') continue
      }
      t.removeChild(l)
    }
  }
  function J0(t, e, l, a) {
    for (; t.nodeType === 1; ) {
      var u = l
      if (t.nodeName.toLowerCase() !== e.toLowerCase()) {
        if (!a && (t.nodeName !== 'INPUT' || t.type !== 'hidden')) break
      } else if (a) {
        if (!t[ja])
          switch (e) {
            case 'meta':
              if (!t.hasAttribute('itemprop')) break
              return t
            case 'link':
              if (((n = t.getAttribute('rel')), n === 'stylesheet' && t.hasAttribute('data-precedence'))) break
              if (n !== u.rel || t.getAttribute('href') !== (u.href == null ? null : u.href) || t.getAttribute('crossorigin') !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute('title') !== (u.title == null ? null : u.title)) break
              return t
            case 'style':
              if (t.hasAttribute('data-precedence')) break
              return t
            case 'script':
              if (((n = t.getAttribute('src')), (n !== (u.src == null ? null : u.src) || t.getAttribute('type') !== (u.type == null ? null : u.type) || t.getAttribute('crossorigin') !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && t.hasAttribute('async') && !t.hasAttribute('itemprop'))) break
              return t
            default:
              return t
          }
      } else if (e === 'input' && t.type === 'hidden') {
        var n = u.name == null ? null : '' + u.name
        if (u.type === 'hidden' && t.getAttribute('name') === n) return t
      } else return t
      if (((t = Ae(t.nextSibling)), t === null)) break
    }
    return null
  }
  function $0(t, e, l) {
    if (e === '') return null
    for (; t.nodeType !== 3; ) if (((t.nodeType !== 1 || t.nodeName !== 'INPUT' || t.type !== 'hidden') && !l) || ((t = Ae(t.nextSibling)), t === null)) return null
    return t
  }
  function Ae(t) {
    for (; t != null; t = t.nextSibling) {
      var e = t.nodeType
      if (e === 1 || e === 3) break
      if (e === 8) {
        if (((e = t.data), e === '$' || e === '$!' || e === '$?' || e === 'F!' || e === 'F')) break
        if (e === '/$') return null
      }
    }
    return t
  }
  function ks(t) {
    t = t.previousSibling
    for (var e = 0; t; ) {
      if (t.nodeType === 8) {
        var l = t.data
        if (l === '$' || l === '$!' || l === '$?') {
          if (e === 0) return t
          e--
        } else l === '/$' && e++
      }
      t = t.previousSibling
    }
    return null
  }
  function Ws(t, e, l) {
    switch (((e = Xn(l)), t)) {
      case 'html':
        if (((t = e.documentElement), !t)) throw Error(r(452))
        return t
      case 'head':
        if (((t = e.head), !t)) throw Error(r(453))
        return t
      case 'body':
        if (((t = e.body), !t)) throw Error(r(454))
        return t
      default:
        throw Error(r(451))
    }
  }
  var be = new Map(),
    Fs = new Set()
  function Qn(t) {
    return typeof t.getRootNode == 'function' ? t.getRootNode() : t.ownerDocument
  }
  var Ie = X.d
  X.d = { f: k0, r: W0, D: F0, C: P0, L: I0, m: tm, X: lm, S: em, M: am }
  function k0() {
    var t = Ie.f(),
      e = Nn()
    return t || e
  }
  function W0(t) {
    var e = Pl(t)
    e !== null && e.tag === 5 && e.type === 'form' ? Ao(e) : Ie.r(t)
  }
  var Ma = typeof document > 'u' ? null : document
  function Ps(t, e, l) {
    var a = Ma
    if (a && typeof e == 'string' && e) {
      var u = oe(e)
      ;(u = 'link[rel="' + t + '"][href="' + u + '"]'), typeof l == 'string' && (u += '[crossorigin="' + l + '"]'), Fs.has(u) || (Fs.add(u), (t = { rel: t, crossOrigin: l, href: e }), a.querySelector(u) === null && ((e = a.createElement('link')), Zt(e, 'link', t), Yt(e), a.head.appendChild(e)))
    }
  }
  function F0(t) {
    Ie.D(t), Ps('dns-prefetch', t, null)
  }
  function P0(t, e) {
    Ie.C(t, e), Ps('preconnect', t, e)
  }
  function I0(t, e, l) {
    Ie.L(t, e, l)
    var a = Ma
    if (a && t && e) {
      var u = 'link[rel="preload"][as="' + oe(e) + '"]'
      e === 'image' && l && l.imageSrcSet ? ((u += '[imagesrcset="' + oe(l.imageSrcSet) + '"]'), typeof l.imageSizes == 'string' && (u += '[imagesizes="' + oe(l.imageSizes) + '"]')) : (u += '[href="' + oe(t) + '"]')
      var n = u
      switch (e) {
        case 'style':
          n = Ua(t)
          break
        case 'script':
          n = Ca(t)
      }
      be.has(n) || ((t = et({ rel: 'preload', href: e === 'image' && l && l.imageSrcSet ? void 0 : t, as: e }, l)), be.set(n, t), a.querySelector(u) !== null || (e === 'style' && a.querySelector(Ru(n))) || (e === 'script' && a.querySelector(Au(n))) || ((e = a.createElement('link')), Zt(e, 'link', t), Yt(e), a.head.appendChild(e)))
    }
  }
  function tm(t, e) {
    Ie.m(t, e)
    var l = Ma
    if (l && t) {
      var a = e && typeof e.as == 'string' ? e.as : 'script',
        u = 'link[rel="modulepreload"][as="' + oe(a) + '"][href="' + oe(t) + '"]',
        n = u
      switch (a) {
        case 'audioworklet':
        case 'paintworklet':
        case 'serviceworker':
        case 'sharedworker':
        case 'worker':
        case 'script':
          n = Ca(t)
      }
      if (!be.has(n) && ((t = et({ rel: 'modulepreload', href: t }, e)), be.set(n, t), l.querySelector(u) === null)) {
        switch (a) {
          case 'audioworklet':
          case 'paintworklet':
          case 'serviceworker':
          case 'sharedworker':
          case 'worker':
          case 'script':
            if (l.querySelector(Au(n))) return
        }
        ;(a = l.createElement('link')), Zt(a, 'link', t), Yt(a), l.head.appendChild(a)
      }
    }
  }
  function em(t, e, l) {
    Ie.S(t, e, l)
    var a = Ma
    if (a && t) {
      var u = Il(a).hoistableStyles,
        n = Ua(t)
      e = e || 'default'
      var i = u.get(n)
      if (!i) {
        var f = { loading: 0, preload: null }
        if ((i = a.querySelector(Ru(n)))) f.loading = 5
        else {
          ;(t = et({ rel: 'stylesheet', href: t, 'data-precedence': e }, l)), (l = be.get(n)) && cf(t, l)
          var s = (i = a.createElement('link'))
          Yt(s),
            Zt(s, 'link', t),
            (s._p = new Promise(function (g, z) {
              ;(s.onload = g), (s.onerror = z)
            })),
            s.addEventListener('load', function () {
              f.loading |= 1
            }),
            s.addEventListener('error', function () {
              f.loading |= 2
            }),
            (f.loading |= 4),
            wn(i, e, a)
        }
        ;(i = { type: 'stylesheet', instance: i, count: 1, state: f }), u.set(n, i)
      }
    }
  }
  function lm(t, e) {
    Ie.X(t, e)
    var l = Ma
    if (l && t) {
      var a = Il(l).hoistableScripts,
        u = Ca(t),
        n = a.get(u)
      n || ((n = l.querySelector(Au(u))), n || ((t = et({ src: t, async: !0 }, e)), (e = be.get(u)) && ff(t, e), (n = l.createElement('script')), Yt(n), Zt(n, 'link', t), l.head.appendChild(n)), (n = { type: 'script', instance: n, count: 1, state: null }), a.set(u, n))
    }
  }
  function am(t, e) {
    Ie.M(t, e)
    var l = Ma
    if (l && t) {
      var a = Il(l).hoistableScripts,
        u = Ca(t),
        n = a.get(u)
      n || ((n = l.querySelector(Au(u))), n || ((t = et({ src: t, async: !0, type: 'module' }, e)), (e = be.get(u)) && ff(t, e), (n = l.createElement('script')), Yt(n), Zt(n, 'link', t), l.head.appendChild(n)), (n = { type: 'script', instance: n, count: 1, state: null }), a.set(u, n))
    }
  }
  function Is(t, e, l, a) {
    var u = (u = ll.current) ? Qn(u) : null
    if (!u) throw Error(r(446))
    switch (t) {
      case 'meta':
      case 'title':
        return null
      case 'style':
        return typeof l.precedence == 'string' && typeof l.href == 'string' ? ((e = Ua(l.href)), (l = Il(u).hoistableStyles), (a = l.get(e)), a || ((a = { type: 'style', instance: null, count: 0, state: null }), l.set(e, a)), a) : { type: 'void', instance: null, count: 0, state: null }
      case 'link':
        if (l.rel === 'stylesheet' && typeof l.href == 'string' && typeof l.precedence == 'string') {
          t = Ua(l.href)
          var n = Il(u).hoistableStyles,
            i = n.get(t)
          if ((i || ((u = u.ownerDocument || u), (i = { type: 'stylesheet', instance: null, count: 0, state: { loading: 0, preload: null } }), n.set(t, i), (n = u.querySelector(Ru(t))) && !n._p && ((i.instance = n), (i.state.loading = 5)), be.has(t) || ((l = { rel: 'preload', as: 'style', href: l.href, crossOrigin: l.crossOrigin, integrity: l.integrity, media: l.media, hrefLang: l.hrefLang, referrerPolicy: l.referrerPolicy }), be.set(t, l), n || um(u, t, l, i.state))), e && a === null)) throw Error(r(528, ''))
          return i
        }
        if (e && a !== null) throw Error(r(529, ''))
        return null
      case 'script':
        return (e = l.async), (l = l.src), typeof l == 'string' && e && typeof e != 'function' && typeof e != 'symbol' ? ((e = Ca(l)), (l = Il(u).hoistableScripts), (a = l.get(e)), a || ((a = { type: 'script', instance: null, count: 0, state: null }), l.set(e, a)), a) : { type: 'void', instance: null, count: 0, state: null }
      default:
        throw Error(r(444, t))
    }
  }
  function Ua(t) {
    return 'href="' + oe(t) + '"'
  }
  function Ru(t) {
    return 'link[rel="stylesheet"][' + t + ']'
  }
  function td(t) {
    return et({}, t, { 'data-precedence': t.precedence, precedence: null })
  }
  function um(t, e, l, a) {
    t.querySelector('link[rel="preload"][as="style"][' + e + ']')
      ? (a.loading = 1)
      : ((e = t.createElement('link')),
        (a.preload = e),
        e.addEventListener('load', function () {
          return (a.loading |= 1)
        }),
        e.addEventListener('error', function () {
          return (a.loading |= 2)
        }),
        Zt(e, 'link', l),
        Yt(e),
        t.head.appendChild(e))
  }
  function Ca(t) {
    return '[src="' + oe(t) + '"]'
  }
  function Au(t) {
    return 'script[async]' + t
  }
  function ed(t, e, l) {
    if ((e.count++, e.instance === null))
      switch (e.type) {
        case 'style':
          var a = t.querySelector('style[data-href~="' + oe(l.href) + '"]')
          if (a) return (e.instance = a), Yt(a), a
          var u = et({}, l, { 'data-href': l.href, 'data-precedence': l.precedence, href: null, precedence: null })
          return (a = (t.ownerDocument || t).createElement('style')), Yt(a), Zt(a, 'style', u), wn(a, l.precedence, t), (e.instance = a)
        case 'stylesheet':
          u = Ua(l.href)
          var n = t.querySelector(Ru(u))
          if (n) return (e.state.loading |= 4), (e.instance = n), Yt(n), n
          ;(a = td(l)), (u = be.get(u)) && cf(a, u), (n = (t.ownerDocument || t).createElement('link')), Yt(n)
          var i = n
          return (
            (i._p = new Promise(function (f, s) {
              ;(i.onload = f), (i.onerror = s)
            })),
            Zt(n, 'link', a),
            (e.state.loading |= 4),
            wn(n, l.precedence, t),
            (e.instance = n)
          )
        case 'script':
          return (n = Ca(l.src)), (u = t.querySelector(Au(n))) ? ((e.instance = u), Yt(u), u) : ((a = l), (u = be.get(n)) && ((a = et({}, l)), ff(a, u)), (t = t.ownerDocument || t), (u = t.createElement('script')), Yt(u), Zt(u, 'link', a), t.head.appendChild(u), (e.instance = u))
        case 'void':
          return null
        default:
          throw Error(r(443, e.type))
      }
    else e.type === 'stylesheet' && !(e.state.loading & 4) && ((a = e.instance), (e.state.loading |= 4), wn(a, l.precedence, t))
    return e.instance
  }
  function wn(t, e, l) {
    for (var a = l.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = a.length ? a[a.length - 1] : null, n = u, i = 0; i < a.length; i++) {
      var f = a[i]
      if (f.dataset.precedence === e) n = f
      else if (n !== u) break
    }
    n ? n.parentNode.insertBefore(t, n.nextSibling) : ((e = l.nodeType === 9 ? l.head : l), e.insertBefore(t, e.firstChild))
  }
  function cf(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.title == null && (t.title = e.title)
  }
  function ff(t, e) {
    t.crossOrigin == null && (t.crossOrigin = e.crossOrigin), t.referrerPolicy == null && (t.referrerPolicy = e.referrerPolicy), t.integrity == null && (t.integrity = e.integrity)
  }
  var Zn = null
  function ld(t, e, l) {
    if (Zn === null) {
      var a = new Map(),
        u = (Zn = new Map())
      u.set(l, a)
    } else (u = Zn), (a = u.get(l)), a || ((a = new Map()), u.set(l, a))
    if (a.has(t)) return a
    for (a.set(t, null), l = l.getElementsByTagName(t), u = 0; u < l.length; u++) {
      var n = l[u]
      if (!(n[ja] || n[Vt] || (t === 'link' && n.getAttribute('rel') === 'stylesheet')) && n.namespaceURI !== 'http://www.w3.org/2000/svg') {
        var i = n.getAttribute(e) || ''
        i = t + i
        var f = a.get(i)
        f ? f.push(n) : a.set(i, [n])
      }
    }
    return a
  }
  function ad(t, e, l) {
    ;(t = t.ownerDocument || t), t.head.insertBefore(l, e === 'title' ? t.querySelector('head > title') : null)
  }
  function nm(t, e, l) {
    if (l === 1 || e.itemProp != null) return !1
    switch (t) {
      case 'meta':
      case 'title':
        return !0
      case 'style':
        if (typeof e.precedence != 'string' || typeof e.href != 'string' || e.href === '') break
        return !0
      case 'link':
        if (typeof e.rel != 'string' || typeof e.href != 'string' || e.href === '' || e.onLoad || e.onError) break
        switch (e.rel) {
          case 'stylesheet':
            return (t = e.disabled), typeof e.precedence == 'string' && t == null
          default:
            return !0
        }
      case 'script':
        if (e.async && typeof e.async != 'function' && typeof e.async != 'symbol' && !e.onLoad && !e.onError && e.src && typeof e.src == 'string') return !0
    }
    return !1
  }
  function ud(t) {
    return !(t.type === 'stylesheet' && !(t.state.loading & 3))
  }
  var Ou = null
  function im() {}
  function cm(t, e, l) {
    if (Ou === null) throw Error(r(475))
    var a = Ou
    if (e.type === 'stylesheet' && (typeof l.media != 'string' || matchMedia(l.media).matches !== !1) && !(e.state.loading & 4)) {
      if (e.instance === null) {
        var u = Ua(l.href),
          n = t.querySelector(Ru(u))
        if (n) {
          ;(t = n._p), t !== null && typeof t == 'object' && typeof t.then == 'function' && (a.count++, (a = Vn.bind(a)), t.then(a, a)), (e.state.loading |= 4), (e.instance = n), Yt(n)
          return
        }
        ;(n = t.ownerDocument || t), (l = td(l)), (u = be.get(u)) && cf(l, u), (n = n.createElement('link')), Yt(n)
        var i = n
        ;(i._p = new Promise(function (f, s) {
          ;(i.onload = f), (i.onerror = s)
        })),
          Zt(n, 'link', l),
          (e.instance = n)
      }
      a.stylesheets === null && (a.stylesheets = new Map()), a.stylesheets.set(e, t), (t = e.state.preload) && !(e.state.loading & 3) && (a.count++, (e = Vn.bind(a)), t.addEventListener('load', e), t.addEventListener('error', e))
    }
  }
  function fm() {
    if (Ou === null) throw Error(r(475))
    var t = Ou
    return (
      t.stylesheets && t.count === 0 && rf(t, t.stylesheets),
      0 < t.count
        ? function (e) {
            var l = setTimeout(function () {
              if ((t.stylesheets && rf(t, t.stylesheets), t.unsuspend)) {
                var a = t.unsuspend
                ;(t.unsuspend = null), a()
              }
            }, 6e4)
            return (
              (t.unsuspend = e),
              function () {
                ;(t.unsuspend = null), clearTimeout(l)
              }
            )
          }
        : null
    )
  }
  function Vn() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) rf(this, this.stylesheets)
      else if (this.unsuspend) {
        var t = this.unsuspend
        ;(this.unsuspend = null), t()
      }
    }
  }
  var Kn = null
  function rf(t, e) {
    ;(t.stylesheets = null), t.unsuspend !== null && (t.count++, (Kn = new Map()), e.forEach(rm, t), (Kn = null), Vn.call(t))
  }
  function rm(t, e) {
    if (!(e.state.loading & 4)) {
      var l = Kn.get(t)
      if (l) var a = l.get(null)
      else {
        ;(l = new Map()), Kn.set(t, l)
        for (var u = t.querySelectorAll('link[data-precedence],style[data-precedence]'), n = 0; n < u.length; n++) {
          var i = u[n]
          ;(i.nodeName === 'LINK' || i.getAttribute('media') !== 'not all') && (l.set(i.dataset.precedence, i), (a = i))
        }
        a && l.set(null, a)
      }
      ;(u = e.instance), (i = u.getAttribute('data-precedence')), (n = l.get(i) || a), n === a && l.set(null, u), l.set(i, u), this.count++, (a = Vn.bind(this)), u.addEventListener('load', a), u.addEventListener('error', a), n ? n.parentNode.insertBefore(u, n.nextSibling) : ((t = t.nodeType === 9 ? t.head : t), t.insertBefore(u, t.firstChild)), (e.state.loading |= 4)
    }
  }
  var zu = { $$typeof: x, Provider: null, Consumer: null, _currentValue: ft, _currentValue2: ft, _threadCount: 0 }
  function om(t, e, l, a, u, n, i, f) {
    ;(this.tag = 1), (this.containerInfo = t), (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null), (this.timeoutHandle = -1), (this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null), (this.callbackPriority = 0), (this.expirationTimes = oi(-1)), (this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.finishedLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0), (this.entanglements = oi(0)), (this.hiddenUpdates = oi(null)), (this.identifierPrefix = a), (this.onUncaughtError = u), (this.onCaughtError = n), (this.onRecoverableError = i), (this.pooledCache = null), (this.pooledCacheLanes = 0), (this.formState = f), (this.incompleteTransitions = new Map())
  }
  function nd(t, e, l, a, u, n, i, f, s, g, z, C) {
    return (t = new om(t, e, l, i, f, s, g, C)), (e = 1), n === !0 && (e |= 24), (n = Se(3, null, null, e)), (t.current = n), (n.stateNode = t), (e = Gi()), e.refCount++, (t.pooledCache = e), e.refCount++, (n.memoizedState = { element: a, isDehydrated: l, cache: e }), bc(n), t
  }
  function id(t) {
    return t ? ((t = ra), t) : ra
  }
  function cd(t, e, l, a, u, n) {
    ;(u = id(u)), a.context === null ? (a.context = u) : (a.pendingContext = u), (a = hl(e)), (a.payload = { element: l }), (n = n === void 0 ? null : n), n !== null && (a.callback = n), (l = ml(t, a, e)), l !== null && (Ft(l, t, e), ru(l, t, e))
  }
  function fd(t, e) {
    if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
      var l = t.retryLane
      t.retryLane = l !== 0 && l < e ? l : e
    }
  }
  function of(t, e) {
    fd(t, e), (t = t.alternate) && fd(t, e)
  }
  function rd(t) {
    if (t.tag === 13) {
      var e = il(t, 67108864)
      e !== null && Ft(e, t, 67108864), of(t, 67108864)
    }
  }
  var Jn = !0
  function sm(t, e, l, a) {
    var u = Q.T
    Q.T = null
    var n = X.p
    try {
      ;(X.p = 2), sf(t, e, l, a)
    } finally {
      ;(X.p = n), (Q.T = u)
    }
  }
  function dm(t, e, l, a) {
    var u = Q.T
    Q.T = null
    var n = X.p
    try {
      ;(X.p = 8), sf(t, e, l, a)
    } finally {
      ;(X.p = n), (Q.T = u)
    }
  }
  function sf(t, e, l, a) {
    if (Jn) {
      var u = df(a)
      if (u === null) Pc(t, e, a, $n, l), sd(t, a)
      else if (mm(u, t, e, l, a)) a.stopPropagation()
      else if ((sd(t, a), e & 4 && -1 < hm.indexOf(t))) {
        for (; u !== null; ) {
          var n = Pl(u)
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Dl(n.pendingLanes)
                  if (i !== 0) {
                    var f = n
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; i; ) {
                      var s = 1 << (31 - ae(i))
                      ;(f.entanglements[1] |= s), (i &= ~s)
                    }
                    He(n), !(At & 6) && ((Cn = De() + 500), bu(0))
                  }
                }
                break
              case 13:
                ;(f = il(n, 2)), f !== null && Ft(f, n, 2), Nn(), of(n, 2)
            }
          if (((n = df(a)), n === null && Pc(t, e, a, $n, l), n === u)) break
          u = n
        }
        u !== null && a.stopPropagation()
      } else Pc(t, e, a, null, l)
    }
  }
  function df(t) {
    return (t = gi(t)), hf(t)
  }
  var $n = null
  function hf(t) {
    if ((($n = null), (t = _l(t)), t !== null)) {
      var e = W(t)
      if (e === null) t = null
      else {
        var l = e.tag
        if (l === 13) {
          if (((t = St(e)), t !== null)) return t
          t = null
        } else if (l === 3) {
          if (e.stateNode.current.memoizedState.isDehydrated) return e.tag === 3 ? e.stateNode.containerInfo : null
          t = null
        } else e !== t && (t = null)
      }
    }
    return ($n = t), null
  }
  function od(t) {
    switch (t) {
      case 'beforetoggle':
      case 'cancel':
      case 'click':
      case 'close':
      case 'contextmenu':
      case 'copy':
      case 'cut':
      case 'auxclick':
      case 'dblclick':
      case 'dragend':
      case 'dragstart':
      case 'drop':
      case 'focusin':
      case 'focusout':
      case 'input':
      case 'invalid':
      case 'keydown':
      case 'keypress':
      case 'keyup':
      case 'mousedown':
      case 'mouseup':
      case 'paste':
      case 'pause':
      case 'play':
      case 'pointercancel':
      case 'pointerdown':
      case 'pointerup':
      case 'ratechange':
      case 'reset':
      case 'resize':
      case 'seeked':
      case 'submit':
      case 'toggle':
      case 'touchcancel':
      case 'touchend':
      case 'touchstart':
      case 'volumechange':
      case 'change':
      case 'selectionchange':
      case 'textInput':
      case 'compositionstart':
      case 'compositionend':
      case 'compositionupdate':
      case 'beforeblur':
      case 'afterblur':
      case 'beforeinput':
      case 'blur':
      case 'fullscreenchange':
      case 'focus':
      case 'hashchange':
      case 'popstate':
      case 'select':
      case 'selectstart':
        return 2
      case 'drag':
      case 'dragenter':
      case 'dragexit':
      case 'dragleave':
      case 'dragover':
      case 'mousemove':
      case 'mouseout':
      case 'mouseover':
      case 'pointermove':
      case 'pointerout':
      case 'pointerover':
      case 'scroll':
      case 'touchmove':
      case 'wheel':
      case 'mouseenter':
      case 'mouseleave':
      case 'pointerenter':
      case 'pointerleave':
        return 8
      case 'message':
        switch (Pd()) {
          case xf:
            return 2
          case Nf:
            return 8
          case Qu:
          case Id:
            return 32
          case Bf:
            return 268435456
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var mf = !1,
    El = null,
    Tl = null,
    Rl = null,
    Du = new Map(),
    _u = new Map(),
    Al = [],
    hm = 'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(' ')
  function sd(t, e) {
    switch (t) {
      case 'focusin':
      case 'focusout':
        El = null
        break
      case 'dragenter':
      case 'dragleave':
        Tl = null
        break
      case 'mouseover':
      case 'mouseout':
        Rl = null
        break
      case 'pointerover':
      case 'pointerout':
        Du.delete(e.pointerId)
        break
      case 'gotpointercapture':
      case 'lostpointercapture':
        _u.delete(e.pointerId)
    }
  }
  function Mu(t, e, l, a, u, n) {
    return t === null || t.nativeEvent !== n ? ((t = { blockedOn: e, domEventName: l, eventSystemFlags: a, nativeEvent: n, targetContainers: [u] }), e !== null && ((e = Pl(e)), e !== null && rd(e)), t) : ((t.eventSystemFlags |= a), (e = t.targetContainers), u !== null && e.indexOf(u) === -1 && e.push(u), t)
  }
  function mm(t, e, l, a, u) {
    switch (e) {
      case 'focusin':
        return (El = Mu(El, t, e, l, a, u)), !0
      case 'dragenter':
        return (Tl = Mu(Tl, t, e, l, a, u)), !0
      case 'mouseover':
        return (Rl = Mu(Rl, t, e, l, a, u)), !0
      case 'pointerover':
        var n = u.pointerId
        return Du.set(n, Mu(Du.get(n) || null, t, e, l, a, u)), !0
      case 'gotpointercapture':
        return (n = u.pointerId), _u.set(n, Mu(_u.get(n) || null, t, e, l, a, u)), !0
    }
    return !1
  }
  function dd(t) {
    var e = _l(t.target)
    if (e !== null) {
      var l = W(e)
      if (l !== null) {
        if (((e = l.tag), e === 13)) {
          if (((e = St(l)), e !== null)) {
            ;(t.blockedOn = e),
              fh(t.priority, function () {
                if (l.tag === 13) {
                  var a = fe(),
                    u = il(l, a)
                  u !== null && Ft(u, l, a), of(l, a)
                }
              })
            return
          }
        } else if (e === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null
          return
        }
      }
    }
    t.blockedOn = null
  }
  function kn(t) {
    if (t.blockedOn !== null) return !1
    for (var e = t.targetContainers; 0 < e.length; ) {
      var l = df(t.nativeEvent)
      if (l === null) {
        l = t.nativeEvent
        var a = new l.constructor(l.type, l)
        ;(yi = a), l.target.dispatchEvent(a), (yi = null)
      } else return (e = Pl(l)), e !== null && rd(e), (t.blockedOn = l), !1
      e.shift()
    }
    return !0
  }
  function hd(t, e, l) {
    kn(t) && l.delete(e)
  }
  function vm() {
    ;(mf = !1), El !== null && kn(El) && (El = null), Tl !== null && kn(Tl) && (Tl = null), Rl !== null && kn(Rl) && (Rl = null), Du.forEach(hd), _u.forEach(hd)
  }
  function Wn(t, e) {
    t.blockedOn === e && ((t.blockedOn = null), mf || ((mf = !0), c.unstable_scheduleCallback(c.unstable_NormalPriority, vm)))
  }
  var Fn = null
  function md(t) {
    Fn !== t &&
      ((Fn = t),
      c.unstable_scheduleCallback(c.unstable_NormalPriority, function () {
        Fn === t && (Fn = null)
        for (var e = 0; e < t.length; e += 3) {
          var l = t[e],
            a = t[e + 1],
            u = t[e + 2]
          if (typeof a != 'function') {
            if (hf(a || l) === null) continue
            break
          }
          var n = Pl(l)
          n !== null && (t.splice(e, 3), (e -= 3), lc(n, { pending: !0, data: u, method: l.method, action: a }, a, u))
        }
      }))
  }
  function Uu(t) {
    function e(s) {
      return Wn(s, t)
    }
    El !== null && Wn(El, t), Tl !== null && Wn(Tl, t), Rl !== null && Wn(Rl, t), Du.forEach(e), _u.forEach(e)
    for (var l = 0; l < Al.length; l++) {
      var a = Al[l]
      a.blockedOn === t && (a.blockedOn = null)
    }
    for (; 0 < Al.length && ((l = Al[0]), l.blockedOn === null); ) dd(l), l.blockedOn === null && Al.shift()
    if (((l = (t.ownerDocument || t).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var u = l[a],
          n = l[a + 1],
          i = u[It] || null
        if (typeof n == 'function') i || md(l)
        else if (i) {
          var f = null
          if (n && n.hasAttribute('formAction')) {
            if (((u = n), (i = n[It] || null))) f = i.formAction
            else if (hf(u) !== null) continue
          } else f = i.action
          typeof f == 'function' ? (l[a + 1] = f) : (l.splice(a, 3), (a -= 3)), md(l)
        }
      }
  }
  function vf(t) {
    this._internalRoot = t
  }
  ;(Pn.prototype.render = vf.prototype.render =
    function (t) {
      var e = this._internalRoot
      if (e === null) throw Error(r(409))
      var l = e.current,
        a = fe()
      cd(l, a, t, e, null, null)
    }),
    (Pn.prototype.unmount = vf.prototype.unmount =
      function () {
        var t = this._internalRoot
        if (t !== null) {
          this._internalRoot = null
          var e = t.containerInfo
          t.tag === 0 && za(), cd(t.current, 2, null, t, null, null), Nn(), (e[Fl] = null)
        }
      })
  function Pn(t) {
    this._internalRoot = t
  }
  Pn.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var e = Xf()
      t = { blockedOn: null, target: t, priority: e }
      for (var l = 0; l < Al.length && e !== 0 && e < Al[l].priority; l++);
      Al.splice(l, 0, t), l === 0 && dd(t)
    }
  }
  var vd = o.version
  if (vd !== '19.0.0') throw Error(r(527, vd, '19.0.0'))
  X.findDOMNode = function (t) {
    var e = t._reactInternals
    if (e === void 0) throw typeof t.render == 'function' ? Error(r(188)) : ((t = Object.keys(t).join(',')), Error(r(268, t)))
    return (t = N(e)), (t = t !== null ? k(t) : null), (t = t === null ? null : t.stateNode), t
  }
  var ym = { bundleType: 0, version: '19.0.0', rendererPackageName: 'react-dom', currentDispatcherRef: Q, findFiberByHostInstance: _l, reconcilerVersion: '19.0.0' }
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var In = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!In.isDisabled && In.supportsFiber)
      try {
        ;(Ba = In.inject(ym)), (le = In)
      } catch {}
  }
  return (
    (Hu.createRoot = function (t, e) {
      if (!d(t)) throw Error(r(299))
      var l = !1,
        a = '',
        u = Ho,
        n = xo,
        i = No,
        f = null
      return e != null && (e.unstable_strictMode === !0 && (l = !0), e.identifierPrefix !== void 0 && (a = e.identifierPrefix), e.onUncaughtError !== void 0 && (u = e.onUncaughtError), e.onCaughtError !== void 0 && (n = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.unstable_transitionCallbacks !== void 0 && (f = e.unstable_transitionCallbacks)), (e = nd(t, 1, !1, null, null, l, a, u, n, i, f, null)), (t[Fl] = e.current), Fc(t.nodeType === 8 ? t.parentNode : t), new vf(e)
    }),
    (Hu.hydrateRoot = function (t, e, l) {
      if (!d(t)) throw Error(r(299))
      var a = !1,
        u = '',
        n = Ho,
        i = xo,
        f = No,
        s = null,
        g = null
      return l != null && (l.unstable_strictMode === !0 && (a = !0), l.identifierPrefix !== void 0 && (u = l.identifierPrefix), l.onUncaughtError !== void 0 && (n = l.onUncaughtError), l.onCaughtError !== void 0 && (i = l.onCaughtError), l.onRecoverableError !== void 0 && (f = l.onRecoverableError), l.unstable_transitionCallbacks !== void 0 && (s = l.unstable_transitionCallbacks), l.formState !== void 0 && (g = l.formState)), (e = nd(t, 1, !0, e, l ?? null, a, u, n, i, f, s, g)), (e.context = id(null)), (l = e.current), (a = fe()), (u = hl(a)), (u.callback = null), ml(l, u, a), (e.current.lanes = a), Ya(e, a), He(e), (t[Fl] = e.current), Fc(t), new Pn(e)
    }),
    (Hu.version = '19.0.0'),
    Hu
  )
}
var Od
function Dm() {
  if (Od) return gf.exports
  Od = 1
  function c() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)
      } catch (o) {
        console.error(o)
      }
  }
  return c(), (gf.exports = zm()), gf.exports
}
var _m = Dm()
const Mm = Sm(_m)
var M = Df(),
  xu = {},
  zd
function Um() {
  if (zd) return xu
  ;(zd = 1), Object.defineProperty(xu, '__esModule', { value: !0 }), (xu.parse = R), (xu.serialize = m)
  const c = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/,
    o = /^[\u0021-\u003A\u003C-\u007E]*$/,
    h = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,
    r = /^[\u0020-\u003A\u003D-\u007E]*$/,
    d = Object.prototype.toString,
    S = (() => {
      const O = function () {}
      return (O.prototype = Object.create(null)), O
    })()
  function R(O, x) {
    const D = new S(),
      Y = O.length
    if (Y < 2) return D
    const j = (x == null ? void 0 : x.decode) || H
    let L = 0
    do {
      const q = O.indexOf('=', L)
      if (q === -1) break
      const I = O.indexOf(';', L),
        ht = I === -1 ? Y : I
      if (q > ht) {
        L = O.lastIndexOf(';', q - 1) + 1
        continue
      }
      const F = _(O, L, q),
        Tt = p(O, q, F),
        qt = O.slice(F, Tt)
      if (D[qt] === void 0) {
        let Xt = _(O, q + 1, ht),
          Q = p(O, ht, Xt)
        const et = j(O.slice(Xt, Q))
        D[qt] = et
      }
      L = ht + 1
    } while (L < Y)
    return D
  }
  function _(O, x, D) {
    do {
      const Y = O.charCodeAt(x)
      if (Y !== 32 && Y !== 9) return x
    } while (++x < D)
    return D
  }
  function p(O, x, D) {
    for (; x > D; ) {
      const Y = O.charCodeAt(--x)
      if (Y !== 32 && Y !== 9) return x + 1
    }
    return D
  }
  function m(O, x, D) {
    const Y = (D == null ? void 0 : D.encode) || encodeURIComponent
    if (!c.test(O)) throw new TypeError(`argument name is invalid: ${O}`)
    const j = Y(x)
    if (!o.test(j)) throw new TypeError(`argument val is invalid: ${x}`)
    let L = O + '=' + j
    if (!D) return L
    if (D.maxAge !== void 0) {
      if (!Number.isInteger(D.maxAge)) throw new TypeError(`option maxAge is invalid: ${D.maxAge}`)
      L += '; Max-Age=' + D.maxAge
    }
    if (D.domain) {
      if (!h.test(D.domain)) throw new TypeError(`option domain is invalid: ${D.domain}`)
      L += '; Domain=' + D.domain
    }
    if (D.path) {
      if (!r.test(D.path)) throw new TypeError(`option path is invalid: ${D.path}`)
      L += '; Path=' + D.path
    }
    if (D.expires) {
      if (!B(D.expires) || !Number.isFinite(D.expires.valueOf())) throw new TypeError(`option expires is invalid: ${D.expires}`)
      L += '; Expires=' + D.expires.toUTCString()
    }
    if ((D.httpOnly && (L += '; HttpOnly'), D.secure && (L += '; Secure'), D.partitioned && (L += '; Partitioned'), D.priority))
      switch (typeof D.priority == 'string' ? D.priority.toLowerCase() : void 0) {
        case 'low':
          L += '; Priority=Low'
          break
        case 'medium':
          L += '; Priority=Medium'
          break
        case 'high':
          L += '; Priority=High'
          break
        default:
          throw new TypeError(`option priority is invalid: ${D.priority}`)
      }
    if (D.sameSite)
      switch (typeof D.sameSite == 'string' ? D.sameSite.toLowerCase() : D.sameSite) {
        case !0:
        case 'strict':
          L += '; SameSite=Strict'
          break
        case 'lax':
          L += '; SameSite=Lax'
          break
        case 'none':
          L += '; SameSite=None'
          break
        default:
          throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)
      }
    return L
  }
  function H(O) {
    if (O.indexOf('%') === -1) return O
    try {
      return decodeURIComponent(O)
    } catch {
      return O
    }
  }
  function B(O) {
    return d.call(O) === '[object Date]'
  }
  return xu
}
Um()
/**
 * react-router v7.1.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Dd = 'popstate'
function Cm(c = {}) {
  function o(r, d) {
    let { pathname: S, search: R, hash: _ } = r.location
    return Af('', { pathname: S, search: R, hash: _ }, (d.state && d.state.usr) || null, (d.state && d.state.key) || 'default')
  }
  function h(r, d) {
    return typeof d == 'string' ? d : Bu(d)
  }
  return xm(o, h, null, c)
}
function Ot(c, o) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(o)
}
function xe(c, o) {
  if (!c) {
    typeof console < 'u' && console.warn(o)
    try {
      throw new Error(o)
    } catch {}
  }
}
function Hm() {
  return Math.random().toString(36).substring(2, 10)
}
function _d(c, o) {
  return { usr: c.state, key: c.key, idx: o }
}
function Af(c, o, h = null, r) {
  return { pathname: typeof c == 'string' ? c : c.pathname, search: '', hash: '', ...(typeof o == 'string' ? Ha(o) : o), state: h, key: (o && o.key) || r || Hm() }
}
function Bu({ pathname: c = '/', search: o = '', hash: h = '' }) {
  return o && o !== '?' && (c += o.charAt(0) === '?' ? o : '?' + o), h && h !== '#' && (c += h.charAt(0) === '#' ? h : '#' + h), c
}
function Ha(c) {
  let o = {}
  if (c) {
    let h = c.indexOf('#')
    h >= 0 && ((o.hash = c.substring(h)), (c = c.substring(0, h)))
    let r = c.indexOf('?')
    r >= 0 && ((o.search = c.substring(r)), (c = c.substring(0, r))), c && (o.pathname = c)
  }
  return o
}
function xm(c, o, h, r = {}) {
  let { window: d = document.defaultView, v5Compat: S = !1 } = r,
    R = d.history,
    _ = 'POP',
    p = null,
    m = H()
  m == null && ((m = 0), R.replaceState({ ...R.state, idx: m }, ''))
  function H() {
    return (R.state || { idx: null }).idx
  }
  function B() {
    _ = 'POP'
    let j = H(),
      L = j == null ? null : j - m
    ;(m = j), p && p({ action: _, location: Y.location, delta: L })
  }
  function O(j, L) {
    _ = 'PUSH'
    let q = Af(Y.location, j, L)
    m = H() + 1
    let I = _d(q, m),
      ht = Y.createHref(q)
    try {
      R.pushState(I, '', ht)
    } catch (F) {
      if (F instanceof DOMException && F.name === 'DataCloneError') throw F
      d.location.assign(ht)
    }
    S && p && p({ action: _, location: Y.location, delta: 1 })
  }
  function x(j, L) {
    _ = 'REPLACE'
    let q = Af(Y.location, j, L)
    m = H()
    let I = _d(q, m),
      ht = Y.createHref(q)
    R.replaceState(I, '', ht), S && p && p({ action: _, location: Y.location, delta: 0 })
  }
  function D(j) {
    let L = d.location.origin !== 'null' ? d.location.origin : d.location.href,
      q = typeof j == 'string' ? j : Bu(j)
    return (q = q.replace(/ $/, '%20')), Ot(L, `No window.location.(origin|href) available to create URL for href: ${q}`), new URL(q, L)
  }
  let Y = {
    get action() {
      return _
    },
    get location() {
      return c(d, R)
    },
    listen(j) {
      if (p) throw new Error('A history only accepts one active listener')
      return (
        d.addEventListener(Dd, B),
        (p = j),
        () => {
          d.removeEventListener(Dd, B), (p = null)
        }
      )
    },
    createHref(j) {
      return o(d, j)
    },
    createURL: D,
    encodeLocation(j) {
      let L = D(j)
      return { pathname: L.pathname, search: L.search, hash: L.hash }
    },
    push: O,
    replace: x,
    go(j) {
      return R.go(j)
    },
  }
  return Y
}
function Nd(c, o, h = '/') {
  return Nm(c, o, h, !1)
}
function Nm(c, o, h, r) {
  let d = typeof o == 'string' ? Ha(o) : o,
    S = zl(d.pathname || '/', h)
  if (S == null) return null
  let R = Bd(c)
  Bm(R)
  let _ = null
  for (let p = 0; _ == null && p < R.length; ++p) {
    let m = Km(S)
    _ = Zm(R[p], m, r)
  }
  return _
}
function Bd(c, o = [], h = [], r = '') {
  let d = (S, R, _) => {
    let p = { relativePath: _ === void 0 ? S.path || '' : _, caseSensitive: S.caseSensitive === !0, childrenIndex: R, route: S }
    p.relativePath.startsWith('/') && (Ot(p.relativePath.startsWith(r), `Absolute route path "${p.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`), (p.relativePath = p.relativePath.slice(r.length)))
    let m = tl([r, p.relativePath]),
      H = h.concat(p)
    S.children && S.children.length > 0 && (Ot(S.index !== !0, `Index routes must not have child routes. Please remove all child routes from route path "${m}".`), Bd(S.children, o, H, m)), !(S.path == null && !S.index) && o.push({ path: m, score: Qm(m, S.index), routesMeta: H })
  }
  return (
    c.forEach((S, R) => {
      var _
      if (S.path === '' || !((_ = S.path) != null && _.includes('?'))) d(S, R)
      else for (let p of qd(S.path)) d(S, R, p)
    }),
    o
  )
}
function qd(c) {
  let o = c.split('/')
  if (o.length === 0) return []
  let [h, ...r] = o,
    d = h.endsWith('?'),
    S = h.replace(/\?$/, '')
  if (r.length === 0) return d ? [S, ''] : [S]
  let R = qd(r.join('/')),
    _ = []
  return _.push(...R.map((p) => (p === '' ? S : [S, p].join('/')))), d && _.push(...R), _.map((p) => (c.startsWith('/') && p === '' ? '/' : p))
}
function Bm(c) {
  c.sort((o, h) =>
    o.score !== h.score
      ? h.score - o.score
      : wm(
          o.routesMeta.map((r) => r.childrenIndex),
          h.routesMeta.map((r) => r.childrenIndex),
        ),
  )
}
var qm = /^:[\w-]+$/,
  Ym = 3,
  jm = 2,
  Lm = 1,
  Gm = 10,
  Xm = -2,
  Md = (c) => c === '*'
function Qm(c, o) {
  let h = c.split('/'),
    r = h.length
  return h.some(Md) && (r += Xm), o && (r += jm), h.filter((d) => !Md(d)).reduce((d, S) => d + (qm.test(S) ? Ym : S === '' ? Lm : Gm), r)
}
function wm(c, o) {
  return c.length === o.length && c.slice(0, -1).every((r, d) => r === o[d]) ? c[c.length - 1] - o[o.length - 1] : 0
}
function Zm(c, o, h = !1) {
  let { routesMeta: r } = c,
    d = {},
    S = '/',
    R = []
  for (let _ = 0; _ < r.length; ++_) {
    let p = r[_],
      m = _ === r.length - 1,
      H = S === '/' ? o : o.slice(S.length) || '/',
      B = ai({ path: p.relativePath, caseSensitive: p.caseSensitive, end: m }, H),
      O = p.route
    if ((!B && m && h && !r[r.length - 1].route.index && (B = ai({ path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 }, H)), !B)) return null
    Object.assign(d, B.params), R.push({ params: d, pathname: tl([S, B.pathname]), pathnameBase: Wm(tl([S, B.pathnameBase])), route: O }), B.pathnameBase !== '/' && (S = tl([S, B.pathnameBase]))
  }
  return R
}
function ai(c, o) {
  typeof c == 'string' && (c = { path: c, caseSensitive: !1, end: !0 })
  let [h, r] = Vm(c.path, c.caseSensitive, c.end),
    d = o.match(h)
  if (!d) return null
  let S = d[0],
    R = S.replace(/(.)\/+$/, '$1'),
    _ = d.slice(1)
  return {
    params: r.reduce((m, { paramName: H, isOptional: B }, O) => {
      if (H === '*') {
        let D = _[O] || ''
        R = S.slice(0, S.length - D.length).replace(/(.)\/+$/, '$1')
      }
      const x = _[O]
      return B && !x ? (m[H] = void 0) : (m[H] = (x || '').replace(/%2F/g, '/')), m
    }, {}),
    pathname: S,
    pathnameBase: R,
    pattern: c,
  }
}
function Vm(c, o = !1, h = !0) {
  xe(c === '*' || !c.endsWith('*') || c.endsWith('/*'), `Route path "${c}" will be treated as if it were "${c.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${c.replace(/\*$/, '/*')}".`)
  let r = [],
    d =
      '^' +
      c
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (R, _, p) => (r.push({ paramName: _, isOptional: p != null }), p ? '/?([^\\/]+)?' : '/([^\\/]+)'))
  return c.endsWith('*') ? (r.push({ paramName: '*' }), (d += c === '*' || c === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$')) : h ? (d += '\\/*$') : c !== '' && c !== '/' && (d += '(?:(?=\\/|$))'), [new RegExp(d, o ? void 0 : 'i'), r]
}
function Km(c) {
  try {
    return c
      .split('/')
      .map((o) => decodeURIComponent(o).replace(/\//g, '%2F'))
      .join('/')
  } catch (o) {
    return xe(!1, `The URL path "${c}" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`), c
  }
}
function zl(c, o) {
  if (o === '/') return c
  if (!c.toLowerCase().startsWith(o.toLowerCase())) return null
  let h = o.endsWith('/') ? o.length - 1 : o.length,
    r = c.charAt(h)
  return r && r !== '/' ? null : c.slice(h) || '/'
}
function Jm(c, o = '/') {
  let { pathname: h, search: r = '', hash: d = '' } = typeof c == 'string' ? Ha(c) : c
  return { pathname: h ? (h.startsWith('/') ? h : $m(h, o)) : o, search: Fm(r), hash: Pm(d) }
}
function $m(c, o) {
  let h = o.replace(/\/+$/, '').split('/')
  return (
    c.split('/').forEach((d) => {
      d === '..' ? h.length > 1 && h.pop() : d !== '.' && h.push(d)
    }),
    h.length > 1 ? h.join('/') : '/'
  )
}
function Tf(c, o, h, r) {
  return `Cannot include a '${c}' character in a manually specified \`to.${o}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${h}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function km(c) {
  return c.filter((o, h) => h === 0 || (o.route.path && o.route.path.length > 0))
}
function Yd(c) {
  let o = km(c)
  return o.map((h, r) => (r === o.length - 1 ? h.pathname : h.pathnameBase))
}
function jd(c, o, h, r = !1) {
  let d
  typeof c == 'string' ? (d = Ha(c)) : ((d = { ...c }), Ot(!d.pathname || !d.pathname.includes('?'), Tf('?', 'pathname', 'search', d)), Ot(!d.pathname || !d.pathname.includes('#'), Tf('#', 'pathname', 'hash', d)), Ot(!d.search || !d.search.includes('#'), Tf('#', 'search', 'hash', d)))
  let S = c === '' || d.pathname === '',
    R = S ? '/' : d.pathname,
    _
  if (R == null) _ = h
  else {
    let B = o.length - 1
    if (!r && R.startsWith('..')) {
      let O = R.split('/')
      for (; O[0] === '..'; ) O.shift(), (B -= 1)
      d.pathname = O.join('/')
    }
    _ = B >= 0 ? o[B] : '/'
  }
  let p = Jm(d, _),
    m = R && R !== '/' && R.endsWith('/'),
    H = (S || R === '.') && h.endsWith('/')
  return !p.pathname.endsWith('/') && (m || H) && (p.pathname += '/'), p
}
var tl = (c) => c.join('/').replace(/\/\/+/g, '/'),
  Wm = (c) => c.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Fm = (c) => (!c || c === '?' ? '' : c.startsWith('?') ? c : '?' + c),
  Pm = (c) => (!c || c === '#' ? '' : c.startsWith('#') ? c : '#' + c)
function Im(c) {
  return c != null && typeof c.status == 'number' && typeof c.statusText == 'string' && typeof c.internal == 'boolean' && 'data' in c
}
var Ld = ['POST', 'PUT', 'PATCH', 'DELETE']
new Set(Ld)
var tv = ['GET', ...Ld]
new Set(tv)
var xa = M.createContext(null)
xa.displayName = 'DataRouter'
var ui = M.createContext(null)
ui.displayName = 'DataRouterState'
var Gd = M.createContext({ isTransitioning: !1 })
Gd.displayName = 'ViewTransition'
var ev = M.createContext(new Map())
ev.displayName = 'Fetchers'
var lv = M.createContext(null)
lv.displayName = 'Await'
var Ne = M.createContext(null)
Ne.displayName = 'Navigation'
var qu = M.createContext(null)
qu.displayName = 'Location'
var el = M.createContext({ outlet: null, matches: [], isDataRoute: !1 })
el.displayName = 'Route'
var _f = M.createContext(null)
_f.displayName = 'RouteError'
function av(c, { relative: o } = {}) {
  Ot(Yu(), 'useHref() may be used only in the context of a <Router> component.')
  let { basename: h, navigator: r } = M.useContext(Ne),
    { hash: d, pathname: S, search: R } = ju(c, { relative: o }),
    _ = S
  return h !== '/' && (_ = S === '/' ? h : tl([h, S])), r.createHref({ pathname: _, search: R, hash: d })
}
function Yu() {
  return M.useContext(qu) != null
}
function kl() {
  return Ot(Yu(), 'useLocation() may be used only in the context of a <Router> component.'), M.useContext(qu).location
}
var Xd = 'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function Qd(c) {
  M.useContext(Ne).static || M.useLayoutEffect(c)
}
function uv() {
  let { isDataRoute: c } = M.useContext(el)
  return c ? gv() : nv()
}
function nv() {
  Ot(Yu(), 'useNavigate() may be used only in the context of a <Router> component.')
  let c = M.useContext(xa),
    { basename: o, navigator: h } = M.useContext(Ne),
    { matches: r } = M.useContext(el),
    { pathname: d } = kl(),
    S = JSON.stringify(Yd(r)),
    R = M.useRef(!1)
  return (
    Qd(() => {
      R.current = !0
    }),
    M.useCallback(
      (p, m = {}) => {
        if ((xe(R.current, Xd), !R.current)) return
        if (typeof p == 'number') {
          h.go(p)
          return
        }
        let H = jd(p, JSON.parse(S), d, m.relative === 'path')
        c == null && o !== '/' && (H.pathname = H.pathname === '/' ? o : tl([o, H.pathname])), (m.replace ? h.replace : h.push)(H, m.state, m)
      },
      [o, h, S, d, c],
    )
  )
}
M.createContext(null)
function ju(c, { relative: o } = {}) {
  let { matches: h } = M.useContext(el),
    { pathname: r } = kl(),
    d = JSON.stringify(Yd(h))
  return M.useMemo(() => jd(c, JSON.parse(d), r, o === 'path'), [c, d, r, o])
}
function iv(c, o) {
  return wd(c, o)
}
function wd(c, o, h, r) {
  var L
  Ot(Yu(), 'useRoutes() may be used only in the context of a <Router> component.')
  let { navigator: d } = M.useContext(Ne),
    { matches: S } = M.useContext(el),
    R = S[S.length - 1],
    _ = R ? R.params : {},
    p = R ? R.pathname : '/',
    m = R ? R.pathnameBase : '/',
    H = R && R.route
  {
    let q = (H && H.path) || ''
    Zd(
      p,
      !H || q.endsWith('*') || q.endsWith('*?'),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${q === '/' ? '*' : `${q}/*`}">.`,
    )
  }
  let B = kl(),
    O
  if (o) {
    let q = typeof o == 'string' ? Ha(o) : o
    Ot(m === '/' || ((L = q.pathname) == null ? void 0 : L.startsWith(m)), `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${q.pathname}" was given in the \`location\` prop.`), (O = q)
  } else O = B
  let x = O.pathname || '/',
    D = x
  if (m !== '/') {
    let q = m.replace(/^\//, '').split('/')
    D = '/' + x.replace(/^\//, '').split('/').slice(q.length).join('/')
  }
  let Y = Nd(c, { pathname: D })
  xe(H || Y != null, `No routes matched location "${O.pathname}${O.search}${O.hash}" `), xe(Y == null || Y[Y.length - 1].route.element !== void 0 || Y[Y.length - 1].route.Component !== void 0 || Y[Y.length - 1].route.lazy !== void 0, `Matched leaf route at location "${O.pathname}${O.search}${O.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`)
  let j = sv(Y && Y.map((q) => Object.assign({}, q, { params: Object.assign({}, _, q.params), pathname: tl([m, d.encodeLocation ? d.encodeLocation(q.pathname).pathname : q.pathname]), pathnameBase: q.pathnameBase === '/' ? m : tl([m, d.encodeLocation ? d.encodeLocation(q.pathnameBase).pathname : q.pathnameBase]) })), S, h, r)
  return o && j ? M.createElement(qu.Provider, { value: { location: { pathname: '/', search: '', hash: '', state: null, key: 'default', ...O }, navigationType: 'POP' } }, j) : j
}
function cv() {
  let c = yv(),
    o = Im(c) ? `${c.status} ${c.statusText}` : c instanceof Error ? c.message : JSON.stringify(c),
    h = c instanceof Error ? c.stack : null,
    r = 'rgba(200,200,200, 0.5)',
    d = { padding: '0.5rem', backgroundColor: r },
    S = { padding: '2px 4px', backgroundColor: r },
    R = null
  return console.error('Error handled by React Router default ErrorBoundary:', c), (R = M.createElement(M.Fragment, null, M.createElement('p', null, '💿 Hey developer 👋'), M.createElement('p', null, 'You can provide a way better UX than this when your app throws errors by providing your own ', M.createElement('code', { style: S }, 'ErrorBoundary'), ' or', ' ', M.createElement('code', { style: S }, 'errorElement'), ' prop on your route.'))), M.createElement(M.Fragment, null, M.createElement('h2', null, 'Unexpected Application Error!'), M.createElement('h3', { style: { fontStyle: 'italic' } }, o), h ? M.createElement('pre', { style: d }, h) : null, R)
}
var fv = M.createElement(cv, null),
  rv = class extends M.Component {
    constructor(c) {
      super(c), (this.state = { location: c.location, revalidation: c.revalidation, error: c.error })
    }
    static getDerivedStateFromError(c) {
      return { error: c }
    }
    static getDerivedStateFromProps(c, o) {
      return o.location !== c.location || (o.revalidation !== 'idle' && c.revalidation === 'idle') ? { error: c.error, location: c.location, revalidation: c.revalidation } : { error: c.error !== void 0 ? c.error : o.error, location: o.location, revalidation: c.revalidation || o.revalidation }
    }
    componentDidCatch(c, o) {
      console.error('React Router caught the following error during render', c, o)
    }
    render() {
      return this.state.error !== void 0 ? M.createElement(el.Provider, { value: this.props.routeContext }, M.createElement(_f.Provider, { value: this.state.error, children: this.props.component })) : this.props.children
    }
  }
function ov({ routeContext: c, match: o, children: h }) {
  let r = M.useContext(xa)
  return r && r.static && r.staticContext && (o.route.errorElement || o.route.ErrorBoundary) && (r.staticContext._deepestRenderedBoundaryId = o.route.id), M.createElement(el.Provider, { value: c }, h)
}
function sv(c, o = [], h = null, r = null) {
  if (c == null) {
    if (!h) return null
    if (h.errors) c = h.matches
    else if (o.length === 0 && !h.initialized && h.matches.length > 0) c = h.matches
    else return null
  }
  let d = c,
    S = h == null ? void 0 : h.errors
  if (S != null) {
    let p = d.findIndex((m) => m.route.id && (S == null ? void 0 : S[m.route.id]) !== void 0)
    Ot(p >= 0, `Could not find a matching route for errors on route IDs: ${Object.keys(S).join(',')}`), (d = d.slice(0, Math.min(d.length, p + 1)))
  }
  let R = !1,
    _ = -1
  if (h)
    for (let p = 0; p < d.length; p++) {
      let m = d[p]
      if (((m.route.HydrateFallback || m.route.hydrateFallbackElement) && (_ = p), m.route.id)) {
        let { loaderData: H, errors: B } = h,
          O = m.route.loader && !H.hasOwnProperty(m.route.id) && (!B || B[m.route.id] === void 0)
        if (m.route.lazy || O) {
          ;(R = !0), _ >= 0 ? (d = d.slice(0, _ + 1)) : (d = [d[0]])
          break
        }
      }
    }
  return d.reduceRight((p, m, H) => {
    let B,
      O = !1,
      x = null,
      D = null
    h && ((B = S && m.route.id ? S[m.route.id] : void 0), (x = m.route.errorElement || fv), R && (_ < 0 && H === 0 ? (Zd('route-fallback', !1, 'No `HydrateFallback` element provided to render during initial hydration'), (O = !0), (D = null)) : _ === H && ((O = !0), (D = m.route.hydrateFallbackElement || null))))
    let Y = o.concat(d.slice(0, H + 1)),
      j = () => {
        let L
        return B ? (L = x) : O ? (L = D) : m.route.Component ? (L = M.createElement(m.route.Component, null)) : m.route.element ? (L = m.route.element) : (L = p), M.createElement(ov, { match: m, routeContext: { outlet: p, matches: Y, isDataRoute: h != null }, children: L })
      }
    return h && (m.route.ErrorBoundary || m.route.errorElement || H === 0) ? M.createElement(rv, { location: h.location, revalidation: h.revalidation, component: x, error: B, children: j(), routeContext: { outlet: null, matches: Y, isDataRoute: !0 } }) : j()
  }, null)
}
function Mf(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function dv(c) {
  let o = M.useContext(xa)
  return Ot(o, Mf(c)), o
}
function hv(c) {
  let o = M.useContext(ui)
  return Ot(o, Mf(c)), o
}
function mv(c) {
  let o = M.useContext(el)
  return Ot(o, Mf(c)), o
}
function Uf(c) {
  let o = mv(c),
    h = o.matches[o.matches.length - 1]
  return Ot(h.route.id, `${c} can only be used on routes that contain a unique "id"`), h.route.id
}
function vv() {
  return Uf('useRouteId')
}
function yv() {
  var r
  let c = M.useContext(_f),
    o = hv('useRouteError'),
    h = Uf('useRouteError')
  return c !== void 0 ? c : (r = o.errors) == null ? void 0 : r[h]
}
function gv() {
  let { router: c } = dv('useNavigate'),
    o = Uf('useNavigate'),
    h = M.useRef(!1)
  return (
    Qd(() => {
      h.current = !0
    }),
    M.useCallback(
      async (d, S = {}) => {
        xe(h.current, Xd), h.current && (typeof d == 'number' ? c.navigate(d) : await c.navigate(d, { fromRouteId: o, ...S }))
      },
      [c, o],
    )
  )
}
var Ud = {}
function Zd(c, o, h) {
  !o && !Ud[c] && ((Ud[c] = !0), xe(!1, h))
}
M.memo(Sv)
function Sv({ routes: c, future: o, state: h }) {
  return wd(c, void 0, h, o)
}
function Of(c) {
  Ot(!1, 'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.')
}
function pv({ basename: c = '/', children: o = null, location: h, navigationType: r = 'POP', navigator: d, static: S = !1 }) {
  Ot(!Yu(), 'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.')
  let R = c.replace(/^\/*/, '/'),
    _ = M.useMemo(() => ({ basename: R, navigator: d, static: S, future: {} }), [R, d, S])
  typeof h == 'string' && (h = Ha(h))
  let { pathname: p = '/', search: m = '', hash: H = '', state: B = null, key: O = 'default' } = h,
    x = M.useMemo(() => {
      let D = zl(p, R)
      return D == null ? null : { location: { pathname: D, search: m, hash: H, state: B, key: O }, navigationType: r }
    }, [R, p, m, H, B, O, r])
  return xe(x != null, `<Router basename="${R}"> is not able to match the URL "${p}${m}${H}" because it does not start with the basename, so the <Router> won't render anything.`), x == null ? null : M.createElement(Ne.Provider, { value: _ }, M.createElement(qu.Provider, { children: o, value: x }))
}
function bv({ children: c, location: o }) {
  return iv(zf(c), o)
}
function zf(c, o = []) {
  let h = []
  return (
    M.Children.forEach(c, (r, d) => {
      if (!M.isValidElement(r)) return
      let S = [...o, d]
      if (r.type === M.Fragment) {
        h.push.apply(h, zf(r.props.children, S))
        return
      }
      Ot(r.type === Of, `[${typeof r.type == 'string' ? r.type : r.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`), Ot(!r.props.index || !r.props.children, 'An index route cannot have child routes.')
      let R = { id: r.props.id || S.join('-'), caseSensitive: r.props.caseSensitive, element: r.props.element, Component: r.props.Component, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, hydrateFallbackElement: r.props.hydrateFallbackElement, HydrateFallback: r.props.HydrateFallback, errorElement: r.props.errorElement, ErrorBoundary: r.props.ErrorBoundary, hasErrorBoundary: r.props.hasErrorBoundary === !0 || r.props.ErrorBoundary != null || r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle, lazy: r.props.lazy }
      r.props.children && (R.children = zf(r.props.children, S)), h.push(R)
    }),
    h
  )
}
var ei = 'get',
  li = 'application/x-www-form-urlencoded'
function ni(c) {
  return c != null && typeof c.tagName == 'string'
}
function Ev(c) {
  return ni(c) && c.tagName.toLowerCase() === 'button'
}
function Tv(c) {
  return ni(c) && c.tagName.toLowerCase() === 'form'
}
function Rv(c) {
  return ni(c) && c.tagName.toLowerCase() === 'input'
}
function Av(c) {
  return !!(c.metaKey || c.altKey || c.ctrlKey || c.shiftKey)
}
function Ov(c, o) {
  return c.button === 0 && (!o || o === '_self') && !Av(c)
}
var ti = null
function zv() {
  if (ti === null)
    try {
      new FormData(document.createElement('form'), 0), (ti = !1)
    } catch {
      ti = !0
    }
  return ti
}
var Dv = new Set(['application/x-www-form-urlencoded', 'multipart/form-data', 'text/plain'])
function Rf(c) {
  return c != null && !Dv.has(c) ? (xe(!1, `"${c}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${li}"`), null) : c
}
function _v(c, o) {
  let h, r, d, S, R
  if (Tv(c)) {
    let _ = c.getAttribute('action')
    ;(r = _ ? zl(_, o) : null), (h = c.getAttribute('method') || ei), (d = Rf(c.getAttribute('enctype')) || li), (S = new FormData(c))
  } else if (Ev(c) || (Rv(c) && (c.type === 'submit' || c.type === 'image'))) {
    let _ = c.form
    if (_ == null) throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>')
    let p = c.getAttribute('formaction') || _.getAttribute('action')
    if (((r = p ? zl(p, o) : null), (h = c.getAttribute('formmethod') || _.getAttribute('method') || ei), (d = Rf(c.getAttribute('formenctype')) || Rf(_.getAttribute('enctype')) || li), (S = new FormData(_, c)), !zv())) {
      let { name: m, type: H, value: B } = c
      if (H === 'image') {
        let O = m ? `${m}.` : ''
        S.append(`${O}x`, '0'), S.append(`${O}y`, '0')
      } else m && S.append(m, B)
    }
  } else {
    if (ni(c)) throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">')
    ;(h = ei), (r = null), (d = li), (R = c)
  }
  return S && d === 'text/plain' && ((R = S), (S = void 0)), { action: r, method: h.toLowerCase(), encType: d, formData: S, body: R }
}
function Cf(c, o) {
  if (c === !1 || c === null || typeof c > 'u') throw new Error(o)
}
async function Mv(c, o) {
  if (c.id in o) return o[c.id]
  try {
    let h = await import(c.module)
    return (o[c.id] = h), h
  } catch (h) {
    return console.error(`Error loading route module \`${c.module}\`, reloading page...`), console.error(h), window.__reactRouterContext && window.__reactRouterContext.isSpaMode, window.location.reload(), new Promise(() => {})
  }
}
function Uv(c) {
  return c == null ? !1 : c.href == null ? c.rel === 'preload' && typeof c.imageSrcSet == 'string' && typeof c.imageSizes == 'string' : typeof c.rel == 'string' && typeof c.href == 'string'
}
async function Cv(c, o, h) {
  let r = await Promise.all(
    c.map(async (d) => {
      let S = o.routes[d.route.id]
      if (S) {
        let R = await Mv(S, h)
        return R.links ? R.links() : []
      }
      return []
    }),
  )
  return Bv(
    r
      .flat(1)
      .filter(Uv)
      .filter((d) => d.rel === 'stylesheet' || d.rel === 'preload')
      .map((d) => (d.rel === 'stylesheet' ? { ...d, rel: 'prefetch', as: 'style' } : { ...d, rel: 'prefetch' })),
  )
}
function Cd(c, o, h, r, d, S) {
  let R = (p, m) => (h[m] ? p.route.id !== h[m].route.id : !0),
    _ = (p, m) => {
      var H
      return h[m].pathname !== p.pathname || (((H = h[m].route.path) == null ? void 0 : H.endsWith('*')) && h[m].params['*'] !== p.params['*'])
    }
  return S === 'assets'
    ? o.filter((p, m) => R(p, m) || _(p, m))
    : S === 'data'
      ? o.filter((p, m) => {
          var B
          let H = r.routes[p.route.id]
          if (!H || !H.hasLoader) return !1
          if (R(p, m) || _(p, m)) return !0
          if (p.route.shouldRevalidate) {
            let O = p.route.shouldRevalidate({ currentUrl: new URL(d.pathname + d.search + d.hash, window.origin), currentParams: ((B = h[0]) == null ? void 0 : B.params) || {}, nextUrl: new URL(c, window.origin), nextParams: p.params, defaultShouldRevalidate: !0 })
            if (typeof O == 'boolean') return O
          }
          return !0
        })
      : []
}
function Hv(c, o) {
  return xv(
    c
      .map((h) => {
        let r = o.routes[h.route.id]
        if (!r) return []
        let d = [r.module]
        return r.imports && (d = d.concat(r.imports)), d
      })
      .flat(1),
  )
}
function xv(c) {
  return [...new Set(c)]
}
function Nv(c) {
  let o = {},
    h = Object.keys(c).sort()
  for (let r of h) o[r] = c[r]
  return o
}
function Bv(c, o) {
  let h = new Set()
  return (
    new Set(o),
    c.reduce((r, d) => {
      let S = JSON.stringify(Nv(d))
      return h.has(S) || (h.add(S), r.push({ key: S, link: d })), r
    }, [])
  )
}
function qv(c) {
  let o = typeof c == 'string' ? new URL(c, typeof window > 'u' ? 'server://singlefetch/' : window.location.origin) : c
  return o.pathname === '/' ? (o.pathname = '_root.data') : (o.pathname = `${o.pathname.replace(/\/$/, '')}.data`), o
}
function Yv() {
  let c = M.useContext(xa)
  return Cf(c, 'You must render this element inside a <DataRouterContext.Provider> element'), c
}
function jv() {
  let c = M.useContext(ui)
  return Cf(c, 'You must render this element inside a <DataRouterStateContext.Provider> element'), c
}
var Hf = M.createContext(void 0)
Hf.displayName = 'FrameworkContext'
function Vd() {
  let c = M.useContext(Hf)
  return Cf(c, 'You must render this element inside a <HydratedRouter> element'), c
}
function Lv(c, o) {
  let h = M.useContext(Hf),
    [r, d] = M.useState(!1),
    [S, R] = M.useState(!1),
    { onFocus: _, onBlur: p, onMouseEnter: m, onMouseLeave: H, onTouchStart: B } = o,
    O = M.useRef(null)
  M.useEffect(() => {
    if ((c === 'render' && R(!0), c === 'viewport')) {
      let Y = (L) => {
          L.forEach((q) => {
            R(q.isIntersecting)
          })
        },
        j = new IntersectionObserver(Y, { threshold: 0.5 })
      return (
        O.current && j.observe(O.current),
        () => {
          j.disconnect()
        }
      )
    }
  }, [c]),
    M.useEffect(() => {
      if (r) {
        let Y = setTimeout(() => {
          R(!0)
        }, 100)
        return () => {
          clearTimeout(Y)
        }
      }
    }, [r])
  let x = () => {
      d(!0)
    },
    D = () => {
      d(!1), R(!1)
    }
  return h ? (c !== 'intent' ? [S, O, {}] : [S, O, { onFocus: Nu(_, x), onBlur: Nu(p, D), onMouseEnter: Nu(m, x), onMouseLeave: Nu(H, D), onTouchStart: Nu(B, x) }]) : [!1, O, {}]
}
function Nu(c, o) {
  return (h) => {
    c && c(h), h.defaultPrevented || o(h)
  }
}
function Gv({ page: c, ...o }) {
  let { router: h } = Yv(),
    r = M.useMemo(() => Nd(h.routes, c, h.basename), [h.routes, c, h.basename])
  return r ? M.createElement(Qv, { page: c, matches: r, ...o }) : null
}
function Xv(c) {
  let { manifest: o, routeModules: h } = Vd(),
    [r, d] = M.useState([])
  return (
    M.useEffect(() => {
      let S = !1
      return (
        Cv(c, o, h).then((R) => {
          S || d(R)
        }),
        () => {
          S = !0
        }
      )
    }, [c, o, h]),
    r
  )
}
function Qv({ page: c, matches: o, ...h }) {
  let r = kl(),
    { manifest: d, routeModules: S } = Vd(),
    { loaderData: R, matches: _ } = jv(),
    p = M.useMemo(() => Cd(c, o, _, d, r, 'data'), [c, o, _, d, r]),
    m = M.useMemo(() => Cd(c, o, _, d, r, 'assets'), [c, o, _, d, r]),
    H = M.useMemo(() => {
      if (c === r.pathname + r.search + r.hash) return []
      let x = new Set(),
        D = !1
      if (
        (o.forEach((j) => {
          var q
          let L = d.routes[j.route.id]
          !L || !L.hasLoader || ((!p.some((I) => I.route.id === j.route.id) && j.route.id in R && (q = S[j.route.id]) != null && q.shouldRevalidate) || L.hasClientLoader ? (D = !0) : x.add(j.route.id))
        }),
        x.size === 0)
      )
        return []
      let Y = qv(c)
      return (
        D &&
          x.size > 0 &&
          Y.searchParams.set(
            '_routes',
            o
              .filter((j) => x.has(j.route.id))
              .map((j) => j.route.id)
              .join(','),
          ),
        [Y.pathname + Y.search]
      )
    }, [R, r, d, p, o, c, S]),
    B = M.useMemo(() => Hv(m, d), [m, d]),
    O = Xv(m)
  return M.createElement(
    M.Fragment,
    null,
    H.map((x) => M.createElement('link', { key: x, rel: 'prefetch', as: 'fetch', href: x, ...h })),
    B.map((x) => M.createElement('link', { key: x, rel: 'modulepreload', href: x, ...h })),
    O.map(({ key: x, link: D }) => M.createElement('link', { key: x, ...D })),
  )
}
function wv(...c) {
  return (o) => {
    c.forEach((h) => {
      typeof h == 'function' ? h(o) : h != null && (h.current = o)
    })
  }
}
var Kd = typeof window < 'u' && typeof window.document < 'u' && typeof window.document.createElement < 'u'
try {
  Kd && (window.__reactRouterVersion = '7.1.1')
} catch {}
function Zv({ basename: c, children: o, window: h }) {
  let r = M.useRef()
  r.current == null && (r.current = Cm({ window: h, v5Compat: !0 }))
  let d = r.current,
    [S, R] = M.useState({ action: d.action, location: d.location }),
    _ = M.useCallback(
      (p) => {
        M.startTransition(() => R(p))
      },
      [R],
    )
  return M.useLayoutEffect(() => d.listen(_), [d, _]), M.createElement(pv, { basename: c, children: o, location: S.location, navigationType: S.action, navigator: d })
}
var Jd = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  $d = M.forwardRef(function ({ onClick: o, discover: h = 'render', prefetch: r = 'none', relative: d, reloadDocument: S, replace: R, state: _, target: p, to: m, preventScrollReset: H, viewTransition: B, ...O }, x) {
    let { basename: D } = M.useContext(Ne),
      Y = typeof m == 'string' && Jd.test(m),
      j,
      L = !1
    if (typeof m == 'string' && Y && ((j = m), Kd))
      try {
        let Q = new URL(window.location.href),
          et = m.startsWith('//') ? new URL(Q.protocol + m) : new URL(m),
          $t = zl(et.pathname, D)
        et.origin === Q.origin && $t != null ? (m = $t + et.search + et.hash) : (L = !0)
      } catch {
        xe(!1, `<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)
      }
    let q = av(m, { relative: d }),
      [I, ht, F] = Lv(r, O),
      Tt = $v(m, { replace: R, state: _, target: p, preventScrollReset: H, relative: d, viewTransition: B })
    function qt(Q) {
      o && o(Q), Q.defaultPrevented || Tt(Q)
    }
    let Xt = M.createElement('a', { ...O, ...F, href: j || q, onClick: L || S ? o : qt, ref: wv(x, ht), target: p, 'data-discover': !Y && h === 'render' ? 'true' : void 0 })
    return I && !Y ? M.createElement(M.Fragment, null, Xt, M.createElement(Gv, { page: q })) : Xt
  })
$d.displayName = 'Link'
var Vv = M.forwardRef(function ({ 'aria-current': o = 'page', caseSensitive: h = !1, className: r = '', end: d = !1, style: S, to: R, viewTransition: _, children: p, ...m }, H) {
  let B = ju(R, { relative: m.relative }),
    O = kl(),
    x = M.useContext(ui),
    { navigator: D, basename: Y } = M.useContext(Ne),
    j = x != null && Iv(B) && _ === !0,
    L = D.encodeLocation ? D.encodeLocation(B).pathname : B.pathname,
    q = O.pathname,
    I = x && x.navigation && x.navigation.location ? x.navigation.location.pathname : null
  h || ((q = q.toLowerCase()), (I = I ? I.toLowerCase() : null), (L = L.toLowerCase())), I && Y && (I = zl(I, Y) || I)
  const ht = L !== '/' && L.endsWith('/') ? L.length - 1 : L.length
  let F = q === L || (!d && q.startsWith(L) && q.charAt(ht) === '/'),
    Tt = I != null && (I === L || (!d && I.startsWith(L) && I.charAt(L.length) === '/')),
    qt = { isActive: F, isPending: Tt, isTransitioning: j },
    Xt = F ? o : void 0,
    Q
  typeof r == 'function' ? (Q = r(qt)) : (Q = [r, F ? 'active' : null, Tt ? 'pending' : null, j ? 'transitioning' : null].filter(Boolean).join(' '))
  let et = typeof S == 'function' ? S(qt) : S
  return M.createElement($d, { ...m, 'aria-current': Xt, className: Q, ref: H, style: et, to: R, viewTransition: _ }, typeof p == 'function' ? p(qt) : p)
})
Vv.displayName = 'NavLink'
var Kv = M.forwardRef(({ discover: c = 'render', fetcherKey: o, navigate: h, reloadDocument: r, replace: d, state: S, method: R = ei, action: _, onSubmit: p, relative: m, preventScrollReset: H, viewTransition: B, ...O }, x) => {
  let D = Fv(),
    Y = Pv(_, { relative: m }),
    j = R.toLowerCase() === 'get' ? 'get' : 'post',
    L = typeof _ == 'string' && Jd.test(_),
    q = (I) => {
      if ((p && p(I), I.defaultPrevented)) return
      I.preventDefault()
      let ht = I.nativeEvent.submitter,
        F = (ht == null ? void 0 : ht.getAttribute('formmethod')) || R
      D(ht || I.currentTarget, { fetcherKey: o, method: F, navigate: h, replace: d, state: S, relative: m, preventScrollReset: H, viewTransition: B })
    }
  return M.createElement('form', { ref: x, method: j, action: Y, onSubmit: r ? p : q, ...O, 'data-discover': !L && c === 'render' ? 'true' : void 0 })
})
Kv.displayName = 'Form'
function Jv(c) {
  return `${c} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function kd(c) {
  let o = M.useContext(xa)
  return Ot(o, Jv(c)), o
}
function $v(c, { target: o, replace: h, state: r, preventScrollReset: d, relative: S, viewTransition: R } = {}) {
  let _ = uv(),
    p = kl(),
    m = ju(c, { relative: S })
  return M.useCallback(
    (H) => {
      if (Ov(H, o)) {
        H.preventDefault()
        let B = h !== void 0 ? h : Bu(p) === Bu(m)
        _(c, { replace: B, state: r, preventScrollReset: d, relative: S, viewTransition: R })
      }
    },
    [p, _, m, h, r, o, c, d, S, R],
  )
}
var kv = 0,
  Wv = () => `__${String(++kv)}__`
function Fv() {
  let { router: c } = kd('useSubmit'),
    { basename: o } = M.useContext(Ne),
    h = vv()
  return M.useCallback(
    async (r, d = {}) => {
      let { action: S, method: R, encType: _, formData: p, body: m } = _v(r, o)
      if (d.navigate === !1) {
        let H = d.fetcherKey || Wv()
        await c.fetch(H, h, d.action || S, { preventScrollReset: d.preventScrollReset, formData: p, body: m, formMethod: d.method || R, formEncType: d.encType || _, flushSync: d.flushSync })
      } else await c.navigate(d.action || S, { preventScrollReset: d.preventScrollReset, formData: p, body: m, formMethod: d.method || R, formEncType: d.encType || _, replace: d.replace, state: d.state, fromRouteId: h, flushSync: d.flushSync, viewTransition: d.viewTransition })
    },
    [c, o, h],
  )
}
function Pv(c, { relative: o } = {}) {
  let { basename: h } = M.useContext(Ne),
    r = M.useContext(el)
  Ot(r, 'useFormAction must be used inside a RouteContext')
  let [d] = r.matches.slice(-1),
    S = { ...ju(c || '.', { relative: o }) },
    R = kl()
  if (c == null) {
    S.search = R.search
    let _ = new URLSearchParams(S.search),
      p = _.getAll('index')
    if (p.some((H) => H === '')) {
      _.delete('index'), p.filter((B) => B).forEach((B) => _.append('index', B))
      let H = _.toString()
      S.search = H ? `?${H}` : ''
    }
  }
  return (!c || c === '.') && d.route.index && (S.search = S.search ? S.search.replace(/^\?/, '?index&') : '?index'), h !== '/' && (S.pathname = S.pathname === '/' ? h : tl([h, S.pathname])), Bu(S)
}
function Iv(c, o = {}) {
  let h = M.useContext(Gd)
  Ot(h != null, "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?")
  let { basename: r } = kd('useViewTransitionState'),
    d = ju(c, { relative: o.relative })
  if (!h.isTransitioning) return !1
  let S = zl(h.currentLocation.pathname, r) || h.currentLocation.pathname,
    R = zl(h.nextLocation.pathname, r) || h.nextLocation.pathname
  return ai(d.pathname, R) != null || ai(d.pathname, S) != null
}
new TextEncoder()
const Hd = { iceServers: [{ urls: 'stun:stun.l.google.com:19302' }] },
  ty = { video: !0, audio: !0 },
  ey = { status: 'unknown', status_error: null, text: '', 'peer-connect': '', 'peer-connect-button': 'Connect', 'remote-offerer': !1, 'peer-id': 'unknown', connect_attempts: 0, callCreateTriggered: !1, makingOffer: !1, isSettingRemoteAnswerPending: !1 },
  ly = 'wss',
  ay = 'signalling.hexaforce.io',
  uy = () => `${ly}://${ay}`,
  xd = WebSocket.prototype.send
WebSocket.prototype.send = function (c) {
  typeof c == 'object' && c !== null ? (console.log('send >>> : ', c), xd.call(this, JSON.stringify(c))) : typeof c == 'string' ? (console.log(`send >>> : ${c}`), xd.call(this, c)) : console.error('Data is of unsupported type:', typeof c)
}
const ny = (c) => {
    if (c.startsWith('ERROR')) return console.error(c), null
    try {
      const o = JSON.parse(c)
      return o.sdp != null && o.ice != null ? (console.error('Unknown incoming JSON: ' + o), null) : { sdp: o.sdp, ice: o.ice }
    } catch (o) {
      return o instanceof SyntaxError, console.error(o), null
    }
  },
  iy = 1,
  cy = () => {
    const [c, o] = M.useState({ ...ey })
    function h(B) {
      const { id: O, type: x, value: D, checked: Y } = B.target
      o({ ...c, [O]: x == 'checkbox' ? Y : D })
    }
    const r = M.useRef(null),
      d = M.useRef(null),
      S = M.useRef(null),
      R = M.useRef(null)
    M.useEffect(
      () => (
        (d.current = new RTCPeerConnection(Hd)),
        _(),
        () => {
          r.current && r.current.close(), d.current && d.current.close()
        }
      ),
      [],
    )
    const _ = () => {
        if (c.connect_attempts > 2) {
          o((O) => ({ ...O, connect_attempts: O.connect_attempts + 1 })), console.error('Too many connection attempts, aborting. Refresh page to try again')
          return
        }
        let B = iy
        ;(r.current = new WebSocket(uy())),
          (r.current.onopen = () => {
            r.current.send('HELLO ' + B), o((O) => ({ ...O, 'peer-id': B, 'peer-connect-button': 'Connect', connect_attempts: 0 }))
          }),
          (r.current.onmessage = async ({ type: O, data: x }) => {
            switch (x) {
              case 'HELLO':
                console.log(`receive <<< : ${x}`)
                return
              case 'SESSION_OK':
                if ((console.log(`receive <<< : ${x}`), c['remote-offerer'])) {
                  r.current.send('OFFER_REQUEST')
                  return
                }
                c.callCreateTriggered || p()
                return
              case 'OFFER_REQUEST':
                console.log(`receive <<< : ${x}`), c.callCreateTriggered || p()
                return
              default:
                const { sdp: D, ice: Y } = ny(x)
                if (D != null && Y != null) {
                  console.error('Unknown incoming JSON: ' + msg), r.current.close()
                  return
                }
                if ((c.callCreateTriggered || p(), D != null)) {
                  console.log('receive <<< : ', D)
                  try {
                    const j = !c.makingOffer && (d.current.signalingState == 'stable' || c.isSettingRemoteAnswerPending)
                    if (D.type == 'offer' && !j) return
                    if ((o((q) => ({ ...q, isSettingRemoteAnswerPending: D.type == 'answer' })), await d.current.setRemoteDescription(D), o((q) => ({ ...q, isSettingRemoteAnswerPending: !1 })), D.type == 'offer')) {
                      R.current = await navigator.mediaDevices.getUserMedia(ty)
                      for (const q of R.current.getTracks()) d.current.addTrack(q, R.current)
                      await d.current.setLocalDescription(), r.current.send({ sdp: d.current.localDescription }), d.current.iceConnectionState == 'connected' && console.log(`SDP ${d.current.localDescription.type} sent, ICE connected, all looks OK`)
                    }
                  } catch (j) {
                    console.error(j), r.current.close()
                  }
                }
                if (Y != null) {
                  console.log('receive <<< : ', Y)
                  try {
                    await d.current.addIceCandidate(new RTCIceCandidate(Y))
                  } catch (j) {
                    console.error(j)
                  }
                }
            }
          }),
          (r.current.onclose = async () => {
            console.log('Disconnected from server'), S.current && S.current.srcObject && S.current.srcObject.getTracks().forEach((D) => D.stop())
            const O = S.current
            if (O != null) {
              if (O.srcObject != null) for (const x of O.srcObject.getTracks()) x.stop()
              O.style.display = 'none'
            }
            if (R.current) for (const x of R.current.getTracks()) x.stop()
            d.current && (d.current.close(), (d.current = new RTCPeerConnection(Hd))), o((x) => ({ ...x, callCreateTriggered: !1 })), window.setTimeout(_, 1e3)
          }),
          (r.current.onerror = () => {
            console.error('Unable to connect to server, did you add an exception for the certificate?'), window.setTimeout(_, 3e3)
          })
      },
      p = (B, O) => {
        o((D) => ({ ...D, callCreateTriggered: !0 }))
        const x = d.current.createDataChannel('label', null)
        ;(x.onmessage = ({ type: D, data: Y }) => {
          ;(typeof Y == 'string' || Y instanceof String) && console.log(`type:${D} date:${Y}`), x.send('Hi! (from browser send)')
        }),
          (d.current.ondatachannel = ({ channel: D }) => {
            D.onmessage = ({ type: Y, data: j }) => {
              ;(typeof j == 'string' || j instanceof String) && console.log(`type:${Y} date:${j}`), x.send('Hi! (from browser receive)')
            }
          }),
          (d.current.ontrack = ({ receiver: D, streams: Y, track: j, transceiver: L }) => {
            if (!Y || Y.length === 0) return
            const q = S.current,
              { contentHint: I, enabled: ht, id: F, kind: Tt, label: qt, muted: Xt, readyState: Q, stats: et } = j
            ;(j.onmute = () => {
              q.style.display = 'none'
            }),
              (j.onunmute = () => {
                q.style.display = 'block'
              }),
              (q.style.display = Tt === 'audio' ? 'none' : 'block'),
              (q.srcObject = Y[0])
          }),
          (d.current.onicecandidate = (D) => {
            if (D.candidate == null) {
              console.log('ICE Candidate was null, done')
              return
            }
            r.current.send({ ice: D.candidate })
          }),
          (d.current.oniceconnectionstatechange = (D) => {
            d.current.iceConnectionState == 'connected' && console.log('ICE gathering complete')
          }),
          (d.current.onnegotiationneeded = async () => {
            if (!c['remote-offerer'])
              try {
                o((D) => ({ ...D, makingOffer: !0 })), await d.current.setLocalDescription(), r.current.send({ sdp: d.current.localDescription })
              } catch (D) {
                console.error(D), r.current.close()
              } finally {
                o((D) => ({ ...D, makingOffer: !1 }))
              }
          }),
          o((D) => ({ ...D, 'peer-connect-button': 'Disconnect' }))
      },
      m = () => {
        if (c['peer-connect-button'] == 'Disconnect') {
          r.current.close()
          return
        }
        var B = c['peer-connect']
        if (B == '') {
          alert('Peer id must be filled out')
          return
        }
        r.current.send('SESSION ' + B), o((O) => ({ ...O, 'peer-connect-button': 'Disconnect' }))
      },
      H = (B) => {
        const { type: O, code: x } = B
        return O == 'keydown' && x == 'Enter' ? (m(), !1) : !0
      }
    return yt.jsxs('div', {
      children: [
        yt.jsx('div', { id: 'video', children: yt.jsx('video', { ref: S, style: { display: 'none' }, autoPlay: !0, playsInline: !0, children: "Your browser doesn't support video" }) }),
        yt.jsxs('div', { children: ['Status: ', yt.jsx('span', { id: 'status', children: c.status })] }),
        yt.jsx('div', { children: yt.jsx('textarea', { id: 'text', cols: 40, rows: 4, value: c.text, onChange: h }) }),
        yt.jsx('br', {}),
        yt.jsxs('div', { children: [yt.jsx('label', { htmlFor: 'peer-connect', children: 'Enter peer ID' }), yt.jsx('input', { id: 'peer-connect', type: 'text', onChange: h, onKeyDown: H, required: !0 }), yt.jsx('input', { id: 'peer-connect-button', type: 'button', value: c['peer-connect-button'], onClick: m }), yt.jsx('input', { id: 'remote-offerer', type: 'checkbox', onChange: h, autoComplete: 'off' }), yt.jsx('span', { children: 'Remote offerer' })] }),
        yt.jsxs('div', { children: ['Our ID is ', yt.jsx('b', { id: 'peer-id', children: c['peer-id'] })] }),
        yt.jsx('br', {}),
        yt.jsxs('div', { children: [yt.jsx('div', { children: 'getUserMedia constraints being used:' }), yt.jsx('div', { children: yt.jsx('textarea', { id: 'constraints', cols: 40, rows: 4, onChange: h }) })] }),
      ],
    })
  }
Mm.createRoot($('root')).render(yt.jsx(Zv, { children: yt.jsxs(bv, { children: [yt.jsx(Of, { path: '/health-check', element: yt.jsx(yt.Fragment, { children: 'OK' }) }), yt.jsx(Of, { path: '/', element: yt.jsx(cy, {}) })] }) }))
