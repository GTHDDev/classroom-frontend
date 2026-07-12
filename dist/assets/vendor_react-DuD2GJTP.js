import {
	r as w1,
	s as th,
	n as rb,
	a as Ad,
	e as C1,
	Q as T1,
	M as O1,
	q as Jf,
	c as M1,
	o as D1,
	b as N1,
	f as j1,
	d as L1,
	h as U1,
	g as Ey,
	l as z1,
	i as B1,
	j as P1,
	_ as V1,
	u as k1,
	k as Gl,
	m as H1,
	p as q1,
	t as G1,
	v as nh,
	w as F1,
	x as $1,
	y as I1,
	z as Y1,
	P as Ze,
	A as Q1,
	B as Ry,
	C as K1,
	D as X1,
	E as Z1,
	F as xy,
	G as J1
} from './vendor_rest-CKJ42Ze8.js'
import {
	R as W1,
	m as eR,
	Q as Ay,
	u as tR,
	a as nR,
	b as rh,
	c as ab,
	d as rR,
	e as aR,
	g as lR,
	f as iR,
	h as oR,
	i as uR,
	j as wy
} from './vendor_refine-BBcHqFYP.js'
import { c as Ee, a as Cy } from './vendor_ui-DyYjmyB8.js'
function sR(n, r) {
	for (var l = 0; l < r.length; l++) {
		const i = r[l]
		if (typeof i != 'string' && !Array.isArray(i)) {
			for (const u in i)
				if (u !== 'default' && !(u in n)) {
					const c = Object.getOwnPropertyDescriptor(i, u)
					c &&
						Object.defineProperty(
							n,
							u,
							c.get ? c : { enumerable: !0, get: () => i[u] }
						)
				}
		}
	}
	return Object.freeze(
		Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' })
	)
}
var nj =
	typeof globalThis < 'u'
		? globalThis
		: typeof window < 'u'
			? window
			: typeof global < 'u'
				? global
				: typeof self < 'u'
					? self
					: {}
function lb(n) {
	return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, 'default')
		? n.default
		: n
}
function cR(n) {
	if (Object.prototype.hasOwnProperty.call(n, '__esModule')) return n
	var r = n.default
	if (typeof r == 'function') {
		var l = function i() {
			return this instanceof i
				? Reflect.construct(r, arguments, this.constructor)
				: r.apply(this, arguments)
		}
		l.prototype = r.prototype
	} else l = {}
	return (
		Object.defineProperty(l, '__esModule', { value: !0 }),
		Object.keys(n).forEach(function (i) {
			var u = Object.getOwnPropertyDescriptor(n, i)
			Object.defineProperty(
				l,
				i,
				u.get
					? u
					: {
							enumerable: !0,
							get: function () {
								return n[i]
							}
						}
			)
		}),
		l
	)
}
var Wf = { exports: {} },
	io = {}
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ty
function fR() {
	if (Ty) return io
	Ty = 1
	var n = Symbol.for('react.transitional.element'),
		r = Symbol.for('react.fragment')
	function l(i, u, c) {
		var d = null
		if (
			(c !== void 0 && (d = '' + c),
			u.key !== void 0 && (d = '' + u.key),
			'key' in u)
		) {
			c = {}
			for (var h in u) h !== 'key' && (c[h] = u[h])
		} else c = u
		return (
			(u = c.ref),
			{ $$typeof: n, type: i, key: d, ref: u !== void 0 ? u : null, props: c }
		)
	}
	return ((io.Fragment = r), (io.jsx = l), (io.jsxs = l), io)
}
var Oy
function ah() {
	return (Oy || ((Oy = 1), (Wf.exports = fR())), Wf.exports)
}
var z = ah(),
	ed = { exports: {} },
	Ue = {}
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var My
function dR() {
	if (My) return Ue
	My = 1
	var n = Symbol.for('react.transitional.element'),
		r = Symbol.for('react.portal'),
		l = Symbol.for('react.fragment'),
		i = Symbol.for('react.strict_mode'),
		u = Symbol.for('react.profiler'),
		c = Symbol.for('react.consumer'),
		d = Symbol.for('react.context'),
		h = Symbol.for('react.forward_ref'),
		p = Symbol.for('react.suspense'),
		v = Symbol.for('react.memo'),
		y = Symbol.for('react.lazy'),
		b = Symbol.iterator
	function R(O) {
		return O === null || typeof O != 'object'
			? null
			: ((O = (b && O[b]) || O['@@iterator']),
				typeof O == 'function' ? O : null)
	}
	var A = {
			isMounted: function () {
				return !1
			},
			enqueueForceUpdate: function () {},
			enqueueReplaceState: function () {},
			enqueueSetState: function () {}
		},
		M = Object.assign,
		_ = {}
	function S(O, Y, ie) {
		;((this.props = O),
			(this.context = Y),
			(this.refs = _),
			(this.updater = ie || A))
	}
	;((S.prototype.isReactComponent = {}),
		(S.prototype.setState = function (O, Y) {
			if (typeof O != 'object' && typeof O != 'function' && O != null)
				throw Error(
					'takes an object of state variables to update or a function which returns an object of state variables.'
				)
			this.updater.enqueueSetState(this, O, Y, 'setState')
		}),
		(S.prototype.forceUpdate = function (O) {
			this.updater.enqueueForceUpdate(this, O, 'forceUpdate')
		}))
	function x() {}
	x.prototype = S.prototype
	function C(O, Y, ie) {
		;((this.props = O),
			(this.context = Y),
			(this.refs = _),
			(this.updater = ie || A))
	}
	var T = (C.prototype = new x())
	;((T.constructor = C), M(T, S.prototype), (T.isPureReactComponent = !0))
	var j = Array.isArray,
		L = { H: null, A: null, T: null, S: null, V: null },
		Q = Object.prototype.hasOwnProperty
	function te(O, Y, ie, le, pe, we) {
		return (
			(ie = we.ref),
			{
				$$typeof: n,
				type: O,
				key: Y,
				ref: ie !== void 0 ? ie : null,
				props: we
			}
		)
	}
	function fe(O, Y) {
		return te(O.type, Y, void 0, void 0, void 0, O.props)
	}
	function _e(O) {
		return typeof O == 'object' && O !== null && O.$$typeof === n
	}
	function be(O) {
		var Y = { '=': '=0', ':': '=2' }
		return (
			'$' +
			O.replace(/[=:]/g, function (ie) {
				return Y[ie]
			})
		)
	}
	var de = /\/+/g
	function I(O, Y) {
		return typeof O == 'object' && O !== null && O.key != null
			? be('' + O.key)
			: Y.toString(36)
	}
	function X() {}
	function ne(O) {
		switch (O.status) {
			case 'fulfilled':
				return O.value
			case 'rejected':
				throw O.reason
			default:
				switch (
					(typeof O.status == 'string'
						? O.then(X, X)
						: ((O.status = 'pending'),
							O.then(
								function (Y) {
									O.status === 'pending' &&
										((O.status = 'fulfilled'), (O.value = Y))
								},
								function (Y) {
									O.status === 'pending' &&
										((O.status = 'rejected'), (O.reason = Y))
								}
							)),
					O.status)
				) {
					case 'fulfilled':
						return O.value
					case 'rejected':
						throw O.reason
				}
		}
		throw O
	}
	function se(O, Y, ie, le, pe) {
		var we = typeof O
		;(we === 'undefined' || we === 'boolean') && (O = null)
		var ge = !1
		if (O === null) ge = !0
		else
			switch (we) {
				case 'bigint':
				case 'string':
				case 'number':
					ge = !0
					break
				case 'object':
					switch (O.$$typeof) {
						case n:
						case r:
							ge = !0
							break
						case y:
							return ((ge = O._init), se(ge(O._payload), Y, ie, le, pe))
					}
			}
		if (ge)
			return (
				(pe = pe(O)),
				(ge = le === '' ? '.' + I(O, 0) : le),
				j(pe)
					? ((ie = ''),
						ge != null && (ie = ge.replace(de, '$&/') + '/'),
						se(pe, Y, ie, '', function (je) {
							return je
						}))
					: pe != null &&
						(_e(pe) &&
							(pe = fe(
								pe,
								ie +
									(pe.key == null || (O && O.key === pe.key)
										? ''
										: ('' + pe.key).replace(de, '$&/') + '/') +
									ge
							)),
						Y.push(pe)),
				1
			)
		ge = 0
		var ye = le === '' ? '.' : le + ':'
		if (j(O))
			for (var Ae = 0; Ae < O.length; Ae++)
				((le = O[Ae]), (we = ye + I(le, Ae)), (ge += se(le, Y, ie, we, pe)))
		else if (((Ae = R(O)), typeof Ae == 'function'))
			for (O = Ae.call(O), Ae = 0; !(le = O.next()).done; )
				((le = le.value),
					(we = ye + I(le, Ae++)),
					(ge += se(le, Y, ie, we, pe)))
		else if (we === 'object') {
			if (typeof O.then == 'function') return se(ne(O), Y, ie, le, pe)
			throw (
				(Y = String(O)),
				Error(
					'Objects are not valid as a React child (found: ' +
						(Y === '[object Object]'
							? 'object with keys {' + Object.keys(O).join(', ') + '}'
							: Y) +
						'). If you meant to render a collection of children, use an array instead.'
				)
			)
		}
		return ge
	}
	function G(O, Y, ie) {
		if (O == null) return O
		var le = [],
			pe = 0
		return (
			se(O, le, '', '', function (we) {
				return Y.call(ie, we, pe++)
			}),
			le
		)
	}
	function re(O) {
		if (O._status === -1) {
			var Y = O._result
			;((Y = Y()),
				Y.then(
					function (ie) {
						;(O._status === 0 || O._status === -1) &&
							((O._status = 1), (O._result = ie))
					},
					function (ie) {
						;(O._status === 0 || O._status === -1) &&
							((O._status = 2), (O._result = ie))
					}
				),
				O._status === -1 && ((O._status = 0), (O._result = Y)))
		}
		if (O._status === 1) return O._result.default
		throw O._result
	}
	var ae =
		typeof reportError == 'function'
			? reportError
			: function (O) {
					if (
						typeof window == 'object' &&
						typeof window.ErrorEvent == 'function'
					) {
						var Y = new window.ErrorEvent('error', {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof O == 'object' &&
								O !== null &&
								typeof O.message == 'string'
									? String(O.message)
									: String(O),
							error: O
						})
						if (!window.dispatchEvent(Y)) return
					} else if (
						typeof process == 'object' &&
						typeof process.emit == 'function'
					) {
						process.emit('uncaughtException', O)
						return
					}
					console.error(O)
				}
	function ee() {}
	return (
		(Ue.Children = {
			map: G,
			forEach: function (O, Y, ie) {
				G(
					O,
					function () {
						Y.apply(this, arguments)
					},
					ie
				)
			},
			count: function (O) {
				var Y = 0
				return (
					G(O, function () {
						Y++
					}),
					Y
				)
			},
			toArray: function (O) {
				return (
					G(O, function (Y) {
						return Y
					}) || []
				)
			},
			only: function (O) {
				if (!_e(O))
					throw Error(
						'React.Children.only expected to receive a single React element child.'
					)
				return O
			}
		}),
		(Ue.Component = S),
		(Ue.Fragment = l),
		(Ue.Profiler = u),
		(Ue.PureComponent = C),
		(Ue.StrictMode = i),
		(Ue.Suspense = p),
		(Ue.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = L),
		(Ue.__COMPILER_RUNTIME = {
			__proto__: null,
			c: function (O) {
				return L.H.useMemoCache(O)
			}
		}),
		(Ue.cache = function (O) {
			return function () {
				return O.apply(null, arguments)
			}
		}),
		(Ue.cloneElement = function (O, Y, ie) {
			if (O == null)
				throw Error(
					'The argument must be a React element, but you passed ' + O + '.'
				)
			var le = M({}, O.props),
				pe = O.key,
				we = void 0
			if (Y != null)
				for (ge in (Y.ref !== void 0 && (we = void 0),
				Y.key !== void 0 && (pe = '' + Y.key),
				Y))
					!Q.call(Y, ge) ||
						ge === 'key' ||
						ge === '__self' ||
						ge === '__source' ||
						(ge === 'ref' && Y.ref === void 0) ||
						(le[ge] = Y[ge])
			var ge = arguments.length - 2
			if (ge === 1) le.children = ie
			else if (1 < ge) {
				for (var ye = Array(ge), Ae = 0; Ae < ge; Ae++)
					ye[Ae] = arguments[Ae + 2]
				le.children = ye
			}
			return te(O.type, pe, void 0, void 0, we, le)
		}),
		(Ue.createContext = function (O) {
			return (
				(O = {
					$$typeof: d,
					_currentValue: O,
					_currentValue2: O,
					_threadCount: 0,
					Provider: null,
					Consumer: null
				}),
				(O.Provider = O),
				(O.Consumer = { $$typeof: c, _context: O }),
				O
			)
		}),
		(Ue.createElement = function (O, Y, ie) {
			var le,
				pe = {},
				we = null
			if (Y != null)
				for (le in (Y.key !== void 0 && (we = '' + Y.key), Y))
					Q.call(Y, le) &&
						le !== 'key' &&
						le !== '__self' &&
						le !== '__source' &&
						(pe[le] = Y[le])
			var ge = arguments.length - 2
			if (ge === 1) pe.children = ie
			else if (1 < ge) {
				for (var ye = Array(ge), Ae = 0; Ae < ge; Ae++)
					ye[Ae] = arguments[Ae + 2]
				pe.children = ye
			}
			if (O && O.defaultProps)
				for (le in ((ge = O.defaultProps), ge))
					pe[le] === void 0 && (pe[le] = ge[le])
			return te(O, we, void 0, void 0, null, pe)
		}),
		(Ue.createRef = function () {
			return { current: null }
		}),
		(Ue.forwardRef = function (O) {
			return { $$typeof: h, render: O }
		}),
		(Ue.isValidElement = _e),
		(Ue.lazy = function (O) {
			return { $$typeof: y, _payload: { _status: -1, _result: O }, _init: re }
		}),
		(Ue.memo = function (O, Y) {
			return { $$typeof: v, type: O, compare: Y === void 0 ? null : Y }
		}),
		(Ue.startTransition = function (O) {
			var Y = L.T,
				ie = {}
			L.T = ie
			try {
				var le = O(),
					pe = L.S
				;(pe !== null && pe(ie, le),
					typeof le == 'object' &&
						le !== null &&
						typeof le.then == 'function' &&
						le.then(ee, ae))
			} catch (we) {
				ae(we)
			} finally {
				L.T = Y
			}
		}),
		(Ue.unstable_useCacheRefresh = function () {
			return L.H.useCacheRefresh()
		}),
		(Ue.use = function (O) {
			return L.H.use(O)
		}),
		(Ue.useActionState = function (O, Y, ie) {
			return L.H.useActionState(O, Y, ie)
		}),
		(Ue.useCallback = function (O, Y) {
			return L.H.useCallback(O, Y)
		}),
		(Ue.useContext = function (O) {
			return L.H.useContext(O)
		}),
		(Ue.useDebugValue = function () {}),
		(Ue.useDeferredValue = function (O, Y) {
			return L.H.useDeferredValue(O, Y)
		}),
		(Ue.useEffect = function (O, Y, ie) {
			var le = L.H
			if (typeof ie == 'function')
				throw Error(
					'useEffect CRUD overload is not enabled in this build of React.'
				)
			return le.useEffect(O, Y)
		}),
		(Ue.useId = function () {
			return L.H.useId()
		}),
		(Ue.useImperativeHandle = function (O, Y, ie) {
			return L.H.useImperativeHandle(O, Y, ie)
		}),
		(Ue.useInsertionEffect = function (O, Y) {
			return L.H.useInsertionEffect(O, Y)
		}),
		(Ue.useLayoutEffect = function (O, Y) {
			return L.H.useLayoutEffect(O, Y)
		}),
		(Ue.useMemo = function (O, Y) {
			return L.H.useMemo(O, Y)
		}),
		(Ue.useOptimistic = function (O, Y) {
			return L.H.useOptimistic(O, Y)
		}),
		(Ue.useReducer = function (O, Y, ie) {
			return L.H.useReducer(O, Y, ie)
		}),
		(Ue.useRef = function (O) {
			return L.H.useRef(O)
		}),
		(Ue.useState = function (O) {
			return L.H.useState(O)
		}),
		(Ue.useSyncExternalStore = function (O, Y, ie) {
			return L.H.useSyncExternalStore(O, Y, ie)
		}),
		(Ue.useTransition = function () {
			return L.H.useTransition()
		}),
		(Ue.version = '19.1.0'),
		Ue
	)
}
var Dy
function va() {
	return (Dy || ((Dy = 1), (ed.exports = dR())), ed.exports)
}
var m = va()
const ue = lb(m),
	xo = sR({ __proto__: null, default: ue }, [m])
var td = { exports: {} },
	oo = {},
	nd = { exports: {} },
	en = {}
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ny
function hR() {
	if (Ny) return en
	Ny = 1
	var n = va()
	function r(p) {
		var v = 'https://react.dev/errors/' + p
		if (1 < arguments.length) {
			v += '?args[]=' + encodeURIComponent(arguments[1])
			for (var y = 2; y < arguments.length; y++)
				v += '&args[]=' + encodeURIComponent(arguments[y])
		}
		return (
			'Minified React error #' +
			p +
			'; visit ' +
			v +
			' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
		)
	}
	function l() {}
	var i = {
			d: {
				f: l,
				r: function () {
					throw Error(r(522))
				},
				D: l,
				C: l,
				L: l,
				m: l,
				X: l,
				S: l,
				M: l
			},
			p: 0,
			findDOMNode: null
		},
		u = Symbol.for('react.portal')
	function c(p, v, y) {
		var b =
			3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
		return {
			$$typeof: u,
			key: b == null ? null : '' + b,
			children: p,
			containerInfo: v,
			implementation: y
		}
	}
	var d = n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
	function h(p, v) {
		if (p === 'font') return ''
		if (typeof v == 'string') return v === 'use-credentials' ? v : ''
	}
	return (
		(en.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = i),
		(en.createPortal = function (p, v) {
			var y =
				2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
			if (!v || (v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11))
				throw Error(r(299))
			return c(p, v, null, y)
		}),
		(en.flushSync = function (p) {
			var v = d.T,
				y = i.p
			try {
				if (((d.T = null), (i.p = 2), p)) return p()
			} finally {
				;((d.T = v), (i.p = y), i.d.f())
			}
		}),
		(en.preconnect = function (p, v) {
			typeof p == 'string' &&
				(v
					? ((v = v.crossOrigin),
						(v =
							typeof v == 'string'
								? v === 'use-credentials'
									? v
									: ''
								: void 0))
					: (v = null),
				i.d.C(p, v))
		}),
		(en.prefetchDNS = function (p) {
			typeof p == 'string' && i.d.D(p)
		}),
		(en.preinit = function (p, v) {
			if (typeof p == 'string' && v && typeof v.as == 'string') {
				var y = v.as,
					b = h(y, v.crossOrigin),
					R = typeof v.integrity == 'string' ? v.integrity : void 0,
					A = typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0
				y === 'style'
					? i.d.S(p, typeof v.precedence == 'string' ? v.precedence : void 0, {
							crossOrigin: b,
							integrity: R,
							fetchPriority: A
						})
					: y === 'script' &&
						i.d.X(p, {
							crossOrigin: b,
							integrity: R,
							fetchPriority: A,
							nonce: typeof v.nonce == 'string' ? v.nonce : void 0
						})
			}
		}),
		(en.preinitModule = function (p, v) {
			if (typeof p == 'string')
				if (typeof v == 'object' && v !== null) {
					if (v.as == null || v.as === 'script') {
						var y = h(v.as, v.crossOrigin)
						i.d.M(p, {
							crossOrigin: y,
							integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
							nonce: typeof v.nonce == 'string' ? v.nonce : void 0
						})
					}
				} else v == null && i.d.M(p)
		}),
		(en.preload = function (p, v) {
			if (
				typeof p == 'string' &&
				typeof v == 'object' &&
				v !== null &&
				typeof v.as == 'string'
			) {
				var y = v.as,
					b = h(y, v.crossOrigin)
				i.d.L(p, y, {
					crossOrigin: b,
					integrity: typeof v.integrity == 'string' ? v.integrity : void 0,
					nonce: typeof v.nonce == 'string' ? v.nonce : void 0,
					type: typeof v.type == 'string' ? v.type : void 0,
					fetchPriority:
						typeof v.fetchPriority == 'string' ? v.fetchPriority : void 0,
					referrerPolicy:
						typeof v.referrerPolicy == 'string' ? v.referrerPolicy : void 0,
					imageSrcSet:
						typeof v.imageSrcSet == 'string' ? v.imageSrcSet : void 0,
					imageSizes: typeof v.imageSizes == 'string' ? v.imageSizes : void 0,
					media: typeof v.media == 'string' ? v.media : void 0
				})
			}
		}),
		(en.preloadModule = function (p, v) {
			if (typeof p == 'string')
				if (v) {
					var y = h(v.as, v.crossOrigin)
					i.d.m(p, {
						as: typeof v.as == 'string' && v.as !== 'script' ? v.as : void 0,
						crossOrigin: y,
						integrity: typeof v.integrity == 'string' ? v.integrity : void 0
					})
				} else i.d.m(p)
		}),
		(en.requestFormReset = function (p) {
			i.d.r(p)
		}),
		(en.unstable_batchedUpdates = function (p, v) {
			return p(v)
		}),
		(en.useFormState = function (p, v, y) {
			return d.H.useFormState(p, v, y)
		}),
		(en.useFormStatus = function () {
			return d.H.useHostTransitionStatus()
		}),
		(en.version = '19.1.0'),
		en
	)
}
var jy
function ws() {
	if (jy) return nd.exports
	jy = 1
	function n() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
			} catch (r) {
				console.error(r)
			}
	}
	return (n(), (nd.exports = hR()), nd.exports)
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ly
function pR() {
	if (Ly) return oo
	Ly = 1
	var n = w1(),
		r = va(),
		l = ws()
	function i(e) {
		var t = 'https://react.dev/errors/' + e
		if (1 < arguments.length) {
			t += '?args[]=' + encodeURIComponent(arguments[1])
			for (var a = 2; a < arguments.length; a++)
				t += '&args[]=' + encodeURIComponent(arguments[a])
		}
		return (
			'Minified React error #' +
			e +
			'; visit ' +
			t +
			' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
		)
	}
	function u(e) {
		return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
	}
	function c(e) {
		var t = e,
			a = e
		if (e.alternate) for (; t.return; ) t = t.return
		else {
			e = t
			do ((t = e), (t.flags & 4098) !== 0 && (a = t.return), (e = t.return))
			while (e)
		}
		return t.tag === 3 ? a : null
	}
	function d(e) {
		if (e.tag === 13) {
			var t = e.memoizedState
			if (
				(t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
				t !== null)
			)
				return t.dehydrated
		}
		return null
	}
	function h(e) {
		if (c(e) !== e) throw Error(i(188))
	}
	function p(e) {
		var t = e.alternate
		if (!t) {
			if (((t = c(e)), t === null)) throw Error(i(188))
			return t !== e ? null : e
		}
		for (var a = e, o = t; ; ) {
			var s = a.return
			if (s === null) break
			var f = s.alternate
			if (f === null) {
				if (((o = s.return), o !== null)) {
					a = o
					continue
				}
				break
			}
			if (s.child === f.child) {
				for (f = s.child; f; ) {
					if (f === a) return (h(s), e)
					if (f === o) return (h(s), t)
					f = f.sibling
				}
				throw Error(i(188))
			}
			if (a.return !== o.return) ((a = s), (o = f))
			else {
				for (var g = !1, E = s.child; E; ) {
					if (E === a) {
						;((g = !0), (a = s), (o = f))
						break
					}
					if (E === o) {
						;((g = !0), (o = s), (a = f))
						break
					}
					E = E.sibling
				}
				if (!g) {
					for (E = f.child; E; ) {
						if (E === a) {
							;((g = !0), (a = f), (o = s))
							break
						}
						if (E === o) {
							;((g = !0), (o = f), (a = s))
							break
						}
						E = E.sibling
					}
					if (!g) throw Error(i(189))
				}
			}
			if (a.alternate !== o) throw Error(i(190))
		}
		if (a.tag !== 3) throw Error(i(188))
		return a.stateNode.current === a ? e : t
	}
	function v(e) {
		var t = e.tag
		if (t === 5 || t === 26 || t === 27 || t === 6) return e
		for (e = e.child; e !== null; ) {
			if (((t = v(e)), t !== null)) return t
			e = e.sibling
		}
		return null
	}
	var y = Object.assign,
		b = Symbol.for('react.element'),
		R = Symbol.for('react.transitional.element'),
		A = Symbol.for('react.portal'),
		M = Symbol.for('react.fragment'),
		_ = Symbol.for('react.strict_mode'),
		S = Symbol.for('react.profiler'),
		x = Symbol.for('react.provider'),
		C = Symbol.for('react.consumer'),
		T = Symbol.for('react.context'),
		j = Symbol.for('react.forward_ref'),
		L = Symbol.for('react.suspense'),
		Q = Symbol.for('react.suspense_list'),
		te = Symbol.for('react.memo'),
		fe = Symbol.for('react.lazy'),
		_e = Symbol.for('react.activity'),
		be = Symbol.for('react.memo_cache_sentinel'),
		de = Symbol.iterator
	function I(e) {
		return e === null || typeof e != 'object'
			? null
			: ((e = (de && e[de]) || e['@@iterator']),
				typeof e == 'function' ? e : null)
	}
	var X = Symbol.for('react.client.reference')
	function ne(e) {
		if (e == null) return null
		if (typeof e == 'function')
			return e.$$typeof === X ? null : e.displayName || e.name || null
		if (typeof e == 'string') return e
		switch (e) {
			case M:
				return 'Fragment'
			case S:
				return 'Profiler'
			case _:
				return 'StrictMode'
			case L:
				return 'Suspense'
			case Q:
				return 'SuspenseList'
			case _e:
				return 'Activity'
		}
		if (typeof e == 'object')
			switch (e.$$typeof) {
				case A:
					return 'Portal'
				case T:
					return (e.displayName || 'Context') + '.Provider'
				case C:
					return (e._context.displayName || 'Context') + '.Consumer'
				case j:
					var t = e.render
					return (
						(e = e.displayName),
						e ||
							((e = t.displayName || t.name || ''),
							(e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
						e
					)
				case te:
					return (
						(t = e.displayName || null),
						t !== null ? t : ne(e.type) || 'Memo'
					)
				case fe:
					;((t = e._payload), (e = e._init))
					try {
						return ne(e(t))
					} catch {}
			}
		return null
	}
	var se = Array.isArray,
		G = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		re = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
		ae = { pending: !1, data: null, method: null, action: null },
		ee = [],
		O = -1
	function Y(e) {
		return { current: e }
	}
	function ie(e) {
		0 > O || ((e.current = ee[O]), (ee[O] = null), O--)
	}
	function le(e, t) {
		;(O++, (ee[O] = e.current), (e.current = t))
	}
	var pe = Y(null),
		we = Y(null),
		ge = Y(null),
		ye = Y(null)
	function Ae(e, t) {
		switch ((le(ge, t), le(we, e), le(pe, null), t.nodeType)) {
			case 9:
			case 11:
				e = (e = t.documentElement) && (e = e.namespaceURI) ? Xv(e) : 0
				break
			default:
				if (((e = t.tagName), (t = t.namespaceURI)))
					((t = Xv(t)), (e = Zv(t, e)))
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
		;(ie(pe), le(pe, e))
	}
	function je() {
		;(ie(pe), ie(we), ie(ge))
	}
	function Be(e) {
		e.memoizedState !== null && le(ye, e)
		var t = pe.current,
			a = Zv(t, e.type)
		t !== a && (le(we, e), le(pe, a))
	}
	function Le(e) {
		;(we.current === e && (ie(pe), ie(we)),
			ye.current === e && (ie(ye), (to._currentValue = ae)))
	}
	var Pe = Object.prototype.hasOwnProperty,
		ht = n.unstable_scheduleCallback,
		pt = n.unstable_cancelCallback,
		Bt = n.unstable_shouldYield,
		Nt = n.unstable_requestPaint,
		ct = n.unstable_now,
		rr = n.unstable_getCurrentPriorityLevel,
		Ye = n.unstable_ImmediatePriority,
		Qe = n.unstable_UserBlockingPriority,
		Ge = n.unstable_NormalPriority,
		jt = n.unstable_LowPriority,
		ot = n.unstable_IdlePriority,
		Rt = n.log,
		Pt = n.unstable_setDisableYieldValue,
		xt = null,
		D = null
	function B(e) {
		if (
			(typeof Rt == 'function' && Pt(e),
			D && typeof D.setStrictMode == 'function')
		)
			try {
				D.setStrictMode(xt, e)
			} catch {}
	}
	var P = Math.clz32 ? Math.clz32 : me,
		oe = Math.log,
		he = Math.LN2
	function me(e) {
		return ((e >>>= 0), e === 0 ? 32 : (31 - ((oe(e) / he) | 0)) | 0)
	}
	var ce = 256,
		Se = 4194304
	function De(e) {
		var t = e & 42
		if (t !== 0) return t
		switch (e & -e) {
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
				return 128
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
				return e & 4194048
			case 4194304:
			case 8388608:
			case 16777216:
			case 33554432:
				return e & 62914560
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
				return e
		}
	}
	function at(e, t, a) {
		var o = e.pendingLanes
		if (o === 0) return 0
		var s = 0,
			f = e.suspendedLanes,
			g = e.pingedLanes
		e = e.warmLanes
		var E = o & 134217727
		return (
			E !== 0
				? ((o = E & ~f),
					o !== 0
						? (s = De(o))
						: ((g &= E),
							g !== 0
								? (s = De(g))
								: a || ((a = E & ~e), a !== 0 && (s = De(a)))))
				: ((E = o & ~f),
					E !== 0
						? (s = De(E))
						: g !== 0
							? (s = De(g))
							: a || ((a = o & ~e), a !== 0 && (s = De(a)))),
			s === 0
				? 0
				: t !== 0 &&
					  t !== s &&
					  (t & f) === 0 &&
					  ((f = s & -s),
					  (a = t & -t),
					  f >= a || (f === 32 && (a & 4194048) !== 0))
					? t
					: s
		)
	}
	function bt(e, t) {
		return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0
	}
	function Lt(e, t) {
		switch (e) {
			case 1:
			case 2:
			case 4:
			case 8:
			case 64:
				return t + 250
			case 16:
			case 32:
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
				return t + 5e3
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
	function on() {
		var e = ce
		return ((ce <<= 1), (ce & 4194048) === 0 && (ce = 256), e)
	}
	function ar() {
		var e = Se
		return ((Se <<= 1), (Se & 62914560) === 0 && (Se = 4194304), e)
	}
	function mn(e) {
		for (var t = [], a = 0; 31 > a; a++) t.push(e)
		return t
	}
	function vn(e, t) {
		;((e.pendingLanes |= t),
			t !== 268435456 &&
				((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0)))
	}
	function Za(e, t, a, o, s, f) {
		var g = e.pendingLanes
		;((e.pendingLanes = a),
			(e.suspendedLanes = 0),
			(e.pingedLanes = 0),
			(e.warmLanes = 0),
			(e.expiredLanes &= a),
			(e.entangledLanes &= a),
			(e.errorRecoveryDisabledLanes &= a),
			(e.shellSuspendCounter = 0))
		var E = e.entanglements,
			N = e.expirationTimes,
			q = e.hiddenUpdates
		for (a = g & ~a; 0 < a; ) {
			var K = 31 - P(a),
				W = 1 << K
			;((E[K] = 0), (N[K] = -1))
			var F = q[K]
			if (F !== null)
				for (q[K] = null, K = 0; K < F.length; K++) {
					var $ = F[K]
					$ !== null && ($.lane &= -536870913)
				}
			a &= ~W
		}
		;(o !== 0 && Ja(e, o, 0),
			f !== 0 && s === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(g & ~t)))
	}
	function Ja(e, t, a) {
		;((e.pendingLanes |= t), (e.suspendedLanes &= ~t))
		var o = 31 - P(t)
		;((e.entangledLanes |= t),
			(e.entanglements[o] = e.entanglements[o] | 1073741824 | (a & 4194090)))
	}
	function Sa(e, t) {
		var a = (e.entangledLanes |= t)
		for (e = e.entanglements; a; ) {
			var o = 31 - P(a),
				s = 1 << o
			;((s & t) | (e[o] & t) && (e[o] |= t), (a &= ~s))
		}
	}
	function ni(e) {
		switch (e) {
			case 2:
				e = 1
				break
			case 8:
				e = 4
				break
			case 32:
				e = 16
				break
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
				e = 128
				break
			case 268435456:
				e = 134217728
				break
			default:
				e = 0
		}
		return e
	}
	function ri(e) {
		return (
			(e &= -e),
			2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
		)
	}
	function ai() {
		var e = re.p
		return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : vy(e.type))
	}
	function Uo(e, t) {
		var a = re.p
		try {
			return ((re.p = e), t())
		} finally {
			re.p = a
		}
	}
	var Xt = Math.random().toString(36).slice(2),
		Vt = '__reactFiber$' + Xt,
		Zt = '__reactProps$' + Xt,
		Dr = '__reactContainer$' + Xt,
		li = '__reactEvents$' + Xt,
		Js = '__reactListeners$' + Xt,
		Fn = '__reactHandles$' + Xt,
		zo = '__reactResources$' + Xt,
		_a = '__reactMarker$' + Xt
	function ii(e) {
		;(delete e[Vt], delete e[Zt], delete e[li], delete e[Js], delete e[Fn])
	}
	function Nr(e) {
		var t = e[Vt]
		if (t) return t
		for (var a = e.parentNode; a; ) {
			if ((t = a[Dr] || a[Vt])) {
				if (
					((a = t.alternate),
					t.child !== null || (a !== null && a.child !== null))
				)
					for (e = ty(e); e !== null; ) {
						if ((a = e[Vt])) return a
						e = ty(e)
					}
				return t
			}
			;((e = a), (a = e.parentNode))
		}
		return null
	}
	function jr(e) {
		if ((e = e[Vt] || e[Dr])) {
			var t = e.tag
			if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
				return e
		}
		return null
	}
	function On(e) {
		var t = e.tag
		if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode
		throw Error(i(33))
	}
	function Lr(e) {
		var t = e[zo]
		return (
			t ||
				(t = e[zo] =
					{ hoistableStyles: new Map(), hoistableScripts: new Map() }),
			t
		)
	}
	function Tt(e) {
		e[_a] = !0
	}
	var Bo = new Set(),
		Po = {}
	function vr(e, t) {
		;(yn(e, t), yn(e + 'Capture', t))
	}
	function yn(e, t) {
		for (Po[e] = t, e = 0; e < t.length; e++) Bo.add(t[e])
	}
	var Ws = RegExp(
			'^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$'
		),
		Vo = {},
		ko = {}
	function ec(e) {
		return Pe.call(ko, e)
			? !0
			: Pe.call(Vo, e)
				? !1
				: Ws.test(e)
					? (ko[e] = !0)
					: ((Vo[e] = !0), !1)
	}
	function Wa(e, t, a) {
		if (ec(t))
			if (a === null) e.removeAttribute(t)
			else {
				switch (typeof a) {
					case 'undefined':
					case 'function':
					case 'symbol':
						e.removeAttribute(t)
						return
					case 'boolean':
						var o = t.toLowerCase().slice(0, 5)
						if (o !== 'data-' && o !== 'aria-') {
							e.removeAttribute(t)
							return
						}
				}
				e.setAttribute(t, '' + a)
			}
	}
	function el(e, t, a) {
		if (a === null) e.removeAttribute(t)
		else {
			switch (typeof a) {
				case 'undefined':
				case 'function':
				case 'symbol':
				case 'boolean':
					e.removeAttribute(t)
					return
			}
			e.setAttribute(t, '' + a)
		}
	}
	function Mn(e, t, a, o) {
		if (o === null) e.removeAttribute(a)
		else {
			switch (typeof o) {
				case 'undefined':
				case 'function':
				case 'symbol':
				case 'boolean':
					e.removeAttribute(a)
					return
			}
			e.setAttributeNS(t, a, '' + o)
		}
	}
	var Ur, Ho
	function lr(e) {
		if (Ur === void 0)
			try {
				throw Error()
			} catch (a) {
				var t = a.stack.trim().match(/\n( *(at )?)/)
				;((Ur = (t && t[1]) || ''),
					(Ho =
						-1 <
						a.stack.indexOf(`
    at`)
							? ' (<anonymous>)'
							: -1 < a.stack.indexOf('@')
								? '@unknown:0:0'
								: ''))
			}
		return (
			`
` +
			Ur +
			e +
			Ho
		)
	}
	var oi = !1
	function ui(e, t) {
		if (!e || oi) return ''
		oi = !0
		var a = Error.prepareStackTrace
		Error.prepareStackTrace = void 0
		try {
			var o = {
				DetermineComponentFrameRoot: function () {
					try {
						if (t) {
							var W = function () {
								throw Error()
							}
							if (
								(Object.defineProperty(W.prototype, 'props', {
									set: function () {
										throw Error()
									}
								}),
								typeof Reflect == 'object' && Reflect.construct)
							) {
								try {
									Reflect.construct(W, [])
								} catch ($) {
									var F = $
								}
								Reflect.construct(e, [], W)
							} else {
								try {
									W.call()
								} catch ($) {
									F = $
								}
								e.call(W.prototype)
							}
						} else {
							try {
								throw Error()
							} catch ($) {
								F = $
							}
							;(W = e()) &&
								typeof W.catch == 'function' &&
								W.catch(function () {})
						}
					} catch ($) {
						if ($ && F && typeof $.stack == 'string') return [$.stack, F.stack]
					}
					return [null, null]
				}
			}
			o.DetermineComponentFrameRoot.displayName = 'DetermineComponentFrameRoot'
			var s = Object.getOwnPropertyDescriptor(
				o.DetermineComponentFrameRoot,
				'name'
			)
			s &&
				s.configurable &&
				Object.defineProperty(o.DetermineComponentFrameRoot, 'name', {
					value: 'DetermineComponentFrameRoot'
				})
			var f = o.DetermineComponentFrameRoot(),
				g = f[0],
				E = f[1]
			if (g && E) {
				var N = g.split(`
`),
					q = E.split(`
`)
				for (
					s = o = 0;
					o < N.length && !N[o].includes('DetermineComponentFrameRoot');
				)
					o++
				for (; s < q.length && !q[s].includes('DetermineComponentFrameRoot'); )
					s++
				if (o === N.length || s === q.length)
					for (
						o = N.length - 1, s = q.length - 1;
						1 <= o && 0 <= s && N[o] !== q[s];
					)
						s--
				for (; 1 <= o && 0 <= s; o--, s--)
					if (N[o] !== q[s]) {
						if (o !== 1 || s !== 1)
							do
								if ((o--, s--, 0 > s || N[o] !== q[s])) {
									var K =
										`
` + N[o].replace(' at new ', ' at ')
									return (
										e.displayName &&
											K.includes('<anonymous>') &&
											(K = K.replace('<anonymous>', e.displayName)),
										K
									)
								}
							while (1 <= o && 0 <= s)
						break
					}
			}
		} finally {
			;((oi = !1), (Error.prepareStackTrace = a))
		}
		return (a = e ? e.displayName || e.name : '') ? lr(a) : ''
	}
	function tc(e) {
		switch (e.tag) {
			case 26:
			case 27:
			case 5:
				return lr(e.type)
			case 16:
				return lr('Lazy')
			case 13:
				return lr('Suspense')
			case 19:
				return lr('SuspenseList')
			case 0:
			case 15:
				return ui(e.type, !1)
			case 11:
				return ui(e.type.render, !1)
			case 1:
				return ui(e.type, !0)
			case 31:
				return lr('Activity')
			default:
				return ''
		}
	}
	function qo(e) {
		try {
			var t = ''
			do ((t += tc(e)), (e = e.return))
			while (e)
			return t
		} catch (a) {
			return (
				`
Error generating stack: ` +
				a.message +
				`
` +
				a.stack
			)
		}
	}
	function un(e) {
		switch (typeof e) {
			case 'bigint':
			case 'boolean':
			case 'number':
			case 'string':
			case 'undefined':
				return e
			case 'object':
				return e
			default:
				return ''
		}
	}
	function Go(e) {
		var t = e.type
		return (
			(e = e.nodeName) &&
			e.toLowerCase() === 'input' &&
			(t === 'checkbox' || t === 'radio')
		)
	}
	function si(e) {
		var t = Go(e) ? 'checked' : 'value',
			a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
			o = '' + e[t]
		if (
			!e.hasOwnProperty(t) &&
			typeof a < 'u' &&
			typeof a.get == 'function' &&
			typeof a.set == 'function'
		) {
			var s = a.get,
				f = a.set
			return (
				Object.defineProperty(e, t, {
					configurable: !0,
					get: function () {
						return s.call(this)
					},
					set: function (g) {
						;((o = '' + g), f.call(this, g))
					}
				}),
				Object.defineProperty(e, t, { enumerable: a.enumerable }),
				{
					getValue: function () {
						return o
					},
					setValue: function (g) {
						o = '' + g
					},
					stopTracking: function () {
						;((e._valueTracker = null), delete e[t])
					}
				}
			)
		}
	}
	function tl(e) {
		e._valueTracker || (e._valueTracker = si(e))
	}
	function Fo(e) {
		if (!e) return !1
		var t = e._valueTracker
		if (!t) return !0
		var a = t.getValue(),
			o = ''
		return (
			e && (o = Go(e) ? (e.checked ? 'true' : 'false') : e.value),
			(e = o),
			e !== a ? (t.setValue(e), !0) : !1
		)
	}
	function nl(e) {
		if (
			((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
		)
			return null
		try {
			return e.activeElement || e.body
		} catch {
			return e.body
		}
	}
	var nc = /[\n"\\]/g
	function sn(e) {
		return e.replace(nc, function (t) {
			return '\\' + t.charCodeAt(0).toString(16) + ' '
		})
	}
	function ci(e, t, a, o, s, f, g, E) {
		;((e.name = ''),
			g != null &&
			typeof g != 'function' &&
			typeof g != 'symbol' &&
			typeof g != 'boolean'
				? (e.type = g)
				: e.removeAttribute('type'),
			t != null
				? g === 'number'
					? ((t === 0 && e.value === '') || e.value != t) &&
						(e.value = '' + un(t))
					: e.value !== '' + un(t) && (e.value = '' + un(t))
				: (g !== 'submit' && g !== 'reset') || e.removeAttribute('value'),
			t != null
				? rl(e, g, un(t))
				: a != null
					? rl(e, g, un(a))
					: o != null && e.removeAttribute('value'),
			s == null && f != null && (e.defaultChecked = !!f),
			s != null &&
				(e.checked = s && typeof s != 'function' && typeof s != 'symbol'),
			E != null &&
			typeof E != 'function' &&
			typeof E != 'symbol' &&
			typeof E != 'boolean'
				? (e.name = '' + un(E))
				: e.removeAttribute('name'))
	}
	function $o(e, t, a, o, s, f, g, E) {
		if (
			(f != null &&
				typeof f != 'function' &&
				typeof f != 'symbol' &&
				typeof f != 'boolean' &&
				(e.type = f),
			t != null || a != null)
		) {
			if (!((f !== 'submit' && f !== 'reset') || t != null)) return
			;((a = a != null ? '' + un(a) : ''),
				(t = t != null ? '' + un(t) : a),
				E || t === e.value || (e.value = t),
				(e.defaultValue = t))
		}
		;((o = o ?? s),
			(o = typeof o != 'function' && typeof o != 'symbol' && !!o),
			(e.checked = E ? e.checked : !!o),
			(e.defaultChecked = !!o),
			g != null &&
				typeof g != 'function' &&
				typeof g != 'symbol' &&
				typeof g != 'boolean' &&
				(e.name = g))
	}
	function rl(e, t, a) {
		;(t === 'number' && nl(e.ownerDocument) === e) ||
			e.defaultValue === '' + a ||
			(e.defaultValue = '' + a)
	}
	function zr(e, t, a, o) {
		if (((e = e.options), t)) {
			t = {}
			for (var s = 0; s < a.length; s++) t['$' + a[s]] = !0
			for (a = 0; a < e.length; a++)
				((s = t.hasOwnProperty('$' + e[a].value)),
					e[a].selected !== s && (e[a].selected = s),
					s && o && (e[a].defaultSelected = !0))
		} else {
			for (a = '' + un(a), t = null, s = 0; s < e.length; s++) {
				if (e[s].value === a) {
					;((e[s].selected = !0), o && (e[s].defaultSelected = !0))
					return
				}
				t !== null || e[s].disabled || (t = e[s])
			}
			t !== null && (t.selected = !0)
		}
	}
	function Io(e, t, a) {
		if (
			t != null &&
			((t = '' + un(t)), t !== e.value && (e.value = t), a == null)
		) {
			e.defaultValue !== t && (e.defaultValue = t)
			return
		}
		e.defaultValue = a != null ? '' + un(a) : ''
	}
	function Ea(e, t, a, o) {
		if (t == null) {
			if (o != null) {
				if (a != null) throw Error(i(92))
				if (se(o)) {
					if (1 < o.length) throw Error(i(93))
					o = o[0]
				}
				a = o
			}
			;(a == null && (a = ''), (t = a))
		}
		;((a = un(t)),
			(e.defaultValue = a),
			(o = e.textContent),
			o === a && o !== '' && o !== null && (e.value = o))
	}
	function gn(e, t) {
		if (t) {
			var a = e.firstChild
			if (a && a === e.lastChild && a.nodeType === 3) {
				a.nodeValue = t
				return
			}
		}
		e.textContent = t
	}
	var Yo = new Set(
		'animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp'.split(
			' '
		)
	)
	function ir(e, t, a) {
		var o = t.indexOf('--') === 0
		a == null || typeof a == 'boolean' || a === ''
			? o
				? e.setProperty(t, '')
				: t === 'float'
					? (e.cssFloat = '')
					: (e[t] = '')
			: o
				? e.setProperty(t, a)
				: typeof a != 'number' || a === 0 || Yo.has(t)
					? t === 'float'
						? (e.cssFloat = a)
						: (e[t] = ('' + a).trim())
					: (e[t] = a + 'px')
	}
	function Qo(e, t, a) {
		if (t != null && typeof t != 'object') throw Error(i(62))
		if (((e = e.style), a != null)) {
			for (var o in a)
				!a.hasOwnProperty(o) ||
					(t != null && t.hasOwnProperty(o)) ||
					(o.indexOf('--') === 0
						? e.setProperty(o, '')
						: o === 'float'
							? (e.cssFloat = '')
							: (e[o] = ''))
			for (var s in t)
				((o = t[s]), t.hasOwnProperty(s) && a[s] !== o && ir(e, s, o))
		} else for (var f in t) t.hasOwnProperty(f) && ir(e, f, t[f])
	}
	function fi(e) {
		if (e.indexOf('-') === -1) return !1
		switch (e) {
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
	var rc = new Map([
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
			['xHeight', 'x-height']
		]),
		ac =
			/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i
	function al(e) {
		return ac.test('' + e)
			? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
			: e
	}
	var di = null
	function ll(e) {
		return (
			(e = e.target || e.srcElement || window),
			e.correspondingUseElement && (e = e.correspondingUseElement),
			e.nodeType === 3 ? e.parentNode : e
		)
	}
	var cn = null,
		Br = null
	function hi(e) {
		var t = jr(e)
		if (t && (e = t.stateNode)) {
			var a = e[Zt] || null
			e: switch (((e = t.stateNode), t.type)) {
				case 'input':
					if (
						(ci(
							e,
							a.value,
							a.defaultValue,
							a.defaultValue,
							a.checked,
							a.defaultChecked,
							a.type,
							a.name
						),
						(t = a.name),
						a.type === 'radio' && t != null)
					) {
						for (a = e; a.parentNode; ) a = a.parentNode
						for (
							a = a.querySelectorAll(
								'input[name="' + sn('' + t) + '"][type="radio"]'
							),
								t = 0;
							t < a.length;
							t++
						) {
							var o = a[t]
							if (o !== e && o.form === e.form) {
								var s = o[Zt] || null
								if (!s) throw Error(i(90))
								ci(
									o,
									s.value,
									s.defaultValue,
									s.defaultValue,
									s.checked,
									s.defaultChecked,
									s.type,
									s.name
								)
							}
						}
						for (t = 0; t < a.length; t++)
							((o = a[t]), o.form === e.form && Fo(o))
					}
					break e
				case 'textarea':
					Io(e, a.value, a.defaultValue)
					break e
				case 'select':
					;((t = a.value), t != null && zr(e, !!a.multiple, t, !1))
			}
		}
	}
	var pi = !1
	function il(e, t, a) {
		if (pi) return e(t, a)
		pi = !0
		try {
			var o = e(t)
			return o
		} finally {
			if (
				((pi = !1),
				(cn !== null || Br !== null) &&
					(Mu(), cn && ((t = cn), (e = Br), (Br = cn = null), hi(t), e)))
			)
				for (t = 0; t < e.length; t++) hi(e[t])
		}
	}
	function Pr(e, t) {
		var a = e.stateNode
		if (a === null) return null
		var o = a[Zt] || null
		if (o === null) return null
		a = o[t]
		e: switch (t) {
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
				;((o = !o.disabled) ||
					((e = e.type),
					(o = !(
						e === 'button' ||
						e === 'input' ||
						e === 'select' ||
						e === 'textarea'
					))),
					(e = !o))
				break e
			default:
				e = !1
		}
		if (e) return null
		if (a && typeof a != 'function') throw Error(i(231, t, typeof a))
		return a
	}
	var $n = !(
			typeof window > 'u' ||
			typeof window.document > 'u' ||
			typeof window.document.createElement > 'u'
		),
		mi = !1
	if ($n)
		try {
			var Vr = {}
			;(Object.defineProperty(Vr, 'passive', {
				get: function () {
					mi = !0
				}
			}),
				window.addEventListener('test', Vr, Vr),
				window.removeEventListener('test', Vr, Vr))
		} catch {
			mi = !1
		}
	var or = null,
		kr = null,
		ol = null
	function ul() {
		if (ol) return ol
		var e,
			t = kr,
			a = t.length,
			o,
			s = 'value' in or ? or.value : or.textContent,
			f = s.length
		for (e = 0; e < a && t[e] === s[e]; e++);
		var g = a - e
		for (o = 1; o <= g && t[a - o] === s[f - o]; o++);
		return (ol = s.slice(e, 1 < o ? 1 - o : void 0))
	}
	function sl(e) {
		var t = e.keyCode
		return (
			'charCode' in e
				? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
				: (e = t),
			e === 10 && (e = 13),
			32 <= e || e === 13 ? e : 0
		)
	}
	function cl() {
		return !0
	}
	function w() {
		return !1
	}
	function H(e) {
		function t(a, o, s, f, g) {
			;((this._reactName = a),
				(this._targetInst = s),
				(this.type = o),
				(this.nativeEvent = f),
				(this.target = g),
				(this.currentTarget = null))
			for (var E in e)
				e.hasOwnProperty(E) && ((a = e[E]), (this[E] = a ? a(f) : f[E]))
			return (
				(this.isDefaultPrevented = (
					f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1
				)
					? cl
					: w),
				(this.isPropagationStopped = w),
				this
			)
		}
		return (
			y(t.prototype, {
				preventDefault: function () {
					this.defaultPrevented = !0
					var a = this.nativeEvent
					a &&
						(a.preventDefault
							? a.preventDefault()
							: typeof a.returnValue != 'unknown' && (a.returnValue = !1),
						(this.isDefaultPrevented = cl))
				},
				stopPropagation: function () {
					var a = this.nativeEvent
					a &&
						(a.stopPropagation
							? a.stopPropagation()
							: typeof a.cancelBubble != 'unknown' && (a.cancelBubble = !0),
						(this.isPropagationStopped = cl))
				},
				persist: function () {},
				isPersistent: cl
			}),
			t
		)
	}
	var Z = {
			eventPhase: 0,
			bubbles: 0,
			cancelable: 0,
			timeStamp: function (e) {
				return e.timeStamp || Date.now()
			},
			defaultPrevented: 0,
			isTrusted: 0
		},
		xe = H(Z),
		mt = y({}, Z, { view: 0, detail: 0 }),
		Jt = H(mt),
		bn,
		kt,
		Hr,
		In = y({}, mt, {
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
			getModifierState: lc,
			button: 0,
			buttons: 0,
			relatedTarget: function (e) {
				return e.relatedTarget === void 0
					? e.fromElement === e.srcElement
						? e.toElement
						: e.fromElement
					: e.relatedTarget
			},
			movementX: function (e) {
				return 'movementX' in e
					? e.movementX
					: (e !== Hr &&
							(Hr && e.type === 'mousemove'
								? ((bn = e.screenX - Hr.screenX), (kt = e.screenY - Hr.screenY))
								: (kt = bn = 0),
							(Hr = e)),
						bn)
			},
			movementY: function (e) {
				return 'movementY' in e ? e.movementY : kt
			}
		}),
		vi = H(In),
		Ko = y({}, In, { dataTransfer: 0 }),
		Xo = H(Ko),
		yi = y({}, mt, { relatedTarget: 0 }),
		qr = H(yi),
		M_ = y({}, Z, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
		D_ = H(M_),
		N_ = y({}, Z, {
			clipboardData: function (e) {
				return 'clipboardData' in e ? e.clipboardData : window.clipboardData
			}
		}),
		j_ = H(N_),
		L_ = y({}, Z, { data: 0 }),
		rp = H(L_),
		U_ = {
			Esc: 'Escape',
			Spacebar: ' ',
			Left: 'ArrowLeft',
			Up: 'ArrowUp',
			Right: 'ArrowRight',
			Down: 'ArrowDown',
			Del: 'Delete',
			Win: 'OS',
			Menu: 'ContextMenu',
			Apps: 'ContextMenu',
			Scroll: 'ScrollLock',
			MozPrintableKey: 'Unidentified'
		},
		z_ = {
			8: 'Backspace',
			9: 'Tab',
			12: 'Clear',
			13: 'Enter',
			16: 'Shift',
			17: 'Control',
			18: 'Alt',
			19: 'Pause',
			20: 'CapsLock',
			27: 'Escape',
			32: ' ',
			33: 'PageUp',
			34: 'PageDown',
			35: 'End',
			36: 'Home',
			37: 'ArrowLeft',
			38: 'ArrowUp',
			39: 'ArrowRight',
			40: 'ArrowDown',
			45: 'Insert',
			46: 'Delete',
			112: 'F1',
			113: 'F2',
			114: 'F3',
			115: 'F4',
			116: 'F5',
			117: 'F6',
			118: 'F7',
			119: 'F8',
			120: 'F9',
			121: 'F10',
			122: 'F11',
			123: 'F12',
			144: 'NumLock',
			145: 'ScrollLock',
			224: 'Meta'
		},
		B_ = {
			Alt: 'altKey',
			Control: 'ctrlKey',
			Meta: 'metaKey',
			Shift: 'shiftKey'
		}
	function P_(e) {
		var t = this.nativeEvent
		return t.getModifierState
			? t.getModifierState(e)
			: (e = B_[e])
				? !!t[e]
				: !1
	}
	function lc() {
		return P_
	}
	var V_ = y({}, mt, {
			key: function (e) {
				if (e.key) {
					var t = U_[e.key] || e.key
					if (t !== 'Unidentified') return t
				}
				return e.type === 'keypress'
					? ((e = sl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
					: e.type === 'keydown' || e.type === 'keyup'
						? z_[e.keyCode] || 'Unidentified'
						: ''
			},
			code: 0,
			location: 0,
			ctrlKey: 0,
			shiftKey: 0,
			altKey: 0,
			metaKey: 0,
			repeat: 0,
			locale: 0,
			getModifierState: lc,
			charCode: function (e) {
				return e.type === 'keypress' ? sl(e) : 0
			},
			keyCode: function (e) {
				return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
			},
			which: function (e) {
				return e.type === 'keypress'
					? sl(e)
					: e.type === 'keydown' || e.type === 'keyup'
						? e.keyCode
						: 0
			}
		}),
		k_ = H(V_),
		H_ = y({}, In, {
			pointerId: 0,
			width: 0,
			height: 0,
			pressure: 0,
			tangentialPressure: 0,
			tiltX: 0,
			tiltY: 0,
			twist: 0,
			pointerType: 0,
			isPrimary: 0
		}),
		ap = H(H_),
		q_ = y({}, mt, {
			touches: 0,
			targetTouches: 0,
			changedTouches: 0,
			altKey: 0,
			metaKey: 0,
			ctrlKey: 0,
			shiftKey: 0,
			getModifierState: lc
		}),
		G_ = H(q_),
		F_ = y({}, Z, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
		$_ = H(F_),
		I_ = y({}, In, {
			deltaX: function (e) {
				return 'deltaX' in e
					? e.deltaX
					: 'wheelDeltaX' in e
						? -e.wheelDeltaX
						: 0
			},
			deltaY: function (e) {
				return 'deltaY' in e
					? e.deltaY
					: 'wheelDeltaY' in e
						? -e.wheelDeltaY
						: 'wheelDelta' in e
							? -e.wheelDelta
							: 0
			},
			deltaZ: 0,
			deltaMode: 0
		}),
		Y_ = H(I_),
		Q_ = y({}, Z, { newState: 0, oldState: 0 }),
		K_ = H(Q_),
		X_ = [9, 13, 27, 32],
		ic = $n && 'CompositionEvent' in window,
		gi = null
	$n && 'documentMode' in document && (gi = document.documentMode)
	var Z_ = $n && 'TextEvent' in window && !gi,
		lp = $n && (!ic || (gi && 8 < gi && 11 >= gi)),
		ip = ' ',
		op = !1
	function up(e, t) {
		switch (e) {
			case 'keyup':
				return X_.indexOf(t.keyCode) !== -1
			case 'keydown':
				return t.keyCode !== 229
			case 'keypress':
			case 'mousedown':
			case 'focusout':
				return !0
			default:
				return !1
		}
	}
	function sp(e) {
		return ((e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null)
	}
	var fl = !1
	function J_(e, t) {
		switch (e) {
			case 'compositionend':
				return sp(t)
			case 'keypress':
				return t.which !== 32 ? null : ((op = !0), ip)
			case 'textInput':
				return ((e = t.data), e === ip && op ? null : e)
			default:
				return null
		}
	}
	function W_(e, t) {
		if (fl)
			return e === 'compositionend' || (!ic && up(e, t))
				? ((e = ul()), (ol = kr = or = null), (fl = !1), e)
				: null
		switch (e) {
			case 'paste':
				return null
			case 'keypress':
				if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
					if (t.char && 1 < t.char.length) return t.char
					if (t.which) return String.fromCharCode(t.which)
				}
				return null
			case 'compositionend':
				return lp && t.locale !== 'ko' ? null : t.data
			default:
				return null
		}
	}
	var eE = {
		color: !0,
		date: !0,
		datetime: !0,
		'datetime-local': !0,
		email: !0,
		month: !0,
		number: !0,
		password: !0,
		range: !0,
		search: !0,
		tel: !0,
		text: !0,
		time: !0,
		url: !0,
		week: !0
	}
	function cp(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase()
		return t === 'input' ? !!eE[e.type] : t === 'textarea'
	}
	function fp(e, t, a, o) {
		;(cn ? (Br ? Br.push(o) : (Br = [o])) : (cn = o),
			(t = zu(t, 'onChange')),
			0 < t.length &&
				((a = new xe('onChange', 'change', null, a, o)),
				e.push({ event: a, listeners: t })))
	}
	var bi = null,
		Si = null
	function tE(e) {
		$v(e, 0)
	}
	function Zo(e) {
		var t = On(e)
		if (Fo(t)) return e
	}
	function dp(e, t) {
		if (e === 'change') return t
	}
	var hp = !1
	if ($n) {
		var oc
		if ($n) {
			var uc = 'oninput' in document
			if (!uc) {
				var pp = document.createElement('div')
				;(pp.setAttribute('oninput', 'return;'),
					(uc = typeof pp.oninput == 'function'))
			}
			oc = uc
		} else oc = !1
		hp = oc && (!document.documentMode || 9 < document.documentMode)
	}
	function mp() {
		bi && (bi.detachEvent('onpropertychange', vp), (Si = bi = null))
	}
	function vp(e) {
		if (e.propertyName === 'value' && Zo(Si)) {
			var t = []
			;(fp(t, Si, e, ll(e)), il(tE, t))
		}
	}
	function nE(e, t, a) {
		e === 'focusin'
			? (mp(), (bi = t), (Si = a), bi.attachEvent('onpropertychange', vp))
			: e === 'focusout' && mp()
	}
	function rE(e) {
		if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
			return Zo(Si)
	}
	function aE(e, t) {
		if (e === 'click') return Zo(t)
	}
	function lE(e, t) {
		if (e === 'input' || e === 'change') return Zo(t)
	}
	function iE(e, t) {
		return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
	}
	var Sn = typeof Object.is == 'function' ? Object.is : iE
	function _i(e, t) {
		if (Sn(e, t)) return !0
		if (
			typeof e != 'object' ||
			e === null ||
			typeof t != 'object' ||
			t === null
		)
			return !1
		var a = Object.keys(e),
			o = Object.keys(t)
		if (a.length !== o.length) return !1
		for (o = 0; o < a.length; o++) {
			var s = a[o]
			if (!Pe.call(t, s) || !Sn(e[s], t[s])) return !1
		}
		return !0
	}
	function yp(e) {
		for (; e && e.firstChild; ) e = e.firstChild
		return e
	}
	function gp(e, t) {
		var a = yp(e)
		e = 0
		for (var o; a; ) {
			if (a.nodeType === 3) {
				if (((o = e + a.textContent.length), e <= t && o >= t))
					return { node: a, offset: t - e }
				e = o
			}
			e: {
				for (; a; ) {
					if (a.nextSibling) {
						a = a.nextSibling
						break e
					}
					a = a.parentNode
				}
				a = void 0
			}
			a = yp(a)
		}
	}
	function bp(e, t) {
		return e && t
			? e === t
				? !0
				: e && e.nodeType === 3
					? !1
					: t && t.nodeType === 3
						? bp(e, t.parentNode)
						: 'contains' in e
							? e.contains(t)
							: e.compareDocumentPosition
								? !!(e.compareDocumentPosition(t) & 16)
								: !1
			: !1
	}
	function Sp(e) {
		e =
			e != null &&
			e.ownerDocument != null &&
			e.ownerDocument.defaultView != null
				? e.ownerDocument.defaultView
				: window
		for (var t = nl(e.document); t instanceof e.HTMLIFrameElement; ) {
			try {
				var a = typeof t.contentWindow.location.href == 'string'
			} catch {
				a = !1
			}
			if (a) e = t.contentWindow
			else break
			t = nl(e.document)
		}
		return t
	}
	function sc(e) {
		var t = e && e.nodeName && e.nodeName.toLowerCase()
		return (
			t &&
			((t === 'input' &&
				(e.type === 'text' ||
					e.type === 'search' ||
					e.type === 'tel' ||
					e.type === 'url' ||
					e.type === 'password')) ||
				t === 'textarea' ||
				e.contentEditable === 'true')
		)
	}
	var oE = $n && 'documentMode' in document && 11 >= document.documentMode,
		dl = null,
		cc = null,
		Ei = null,
		fc = !1
	function _p(e, t, a) {
		var o = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument
		fc ||
			dl == null ||
			dl !== nl(o) ||
			((o = dl),
			'selectionStart' in o && sc(o)
				? (o = { start: o.selectionStart, end: o.selectionEnd })
				: ((o = (
						(o.ownerDocument && o.ownerDocument.defaultView) ||
						window
					).getSelection()),
					(o = {
						anchorNode: o.anchorNode,
						anchorOffset: o.anchorOffset,
						focusNode: o.focusNode,
						focusOffset: o.focusOffset
					})),
			(Ei && _i(Ei, o)) ||
				((Ei = o),
				(o = zu(cc, 'onSelect')),
				0 < o.length &&
					((t = new xe('onSelect', 'select', null, t, a)),
					e.push({ event: t, listeners: o }),
					(t.target = dl))))
	}
	function Ra(e, t) {
		var a = {}
		return (
			(a[e.toLowerCase()] = t.toLowerCase()),
			(a['Webkit' + e] = 'webkit' + t),
			(a['Moz' + e] = 'moz' + t),
			a
		)
	}
	var hl = {
			animationend: Ra('Animation', 'AnimationEnd'),
			animationiteration: Ra('Animation', 'AnimationIteration'),
			animationstart: Ra('Animation', 'AnimationStart'),
			transitionrun: Ra('Transition', 'TransitionRun'),
			transitionstart: Ra('Transition', 'TransitionStart'),
			transitioncancel: Ra('Transition', 'TransitionCancel'),
			transitionend: Ra('Transition', 'TransitionEnd')
		},
		dc = {},
		Ep = {}
	$n &&
		((Ep = document.createElement('div').style),
		'AnimationEvent' in window ||
			(delete hl.animationend.animation,
			delete hl.animationiteration.animation,
			delete hl.animationstart.animation),
		'TransitionEvent' in window || delete hl.transitionend.transition)
	function xa(e) {
		if (dc[e]) return dc[e]
		if (!hl[e]) return e
		var t = hl[e],
			a
		for (a in t) if (t.hasOwnProperty(a) && a in Ep) return (dc[e] = t[a])
		return e
	}
	var Rp = xa('animationend'),
		xp = xa('animationiteration'),
		Ap = xa('animationstart'),
		uE = xa('transitionrun'),
		sE = xa('transitionstart'),
		cE = xa('transitioncancel'),
		wp = xa('transitionend'),
		Cp = new Map(),
		hc =
			'abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
				' '
			)
	hc.push('scrollEnd')
	function Yn(e, t) {
		;(Cp.set(e, t), vr(t, [e]))
	}
	var Tp = new WeakMap()
	function Dn(e, t) {
		if (typeof e == 'object' && e !== null) {
			var a = Tp.get(e)
			return a !== void 0
				? a
				: ((t = { value: e, source: t, stack: qo(t) }), Tp.set(e, t), t)
		}
		return { value: e, source: t, stack: qo(t) }
	}
	var Nn = [],
		pl = 0,
		pc = 0
	function Jo() {
		for (var e = pl, t = (pc = pl = 0); t < e; ) {
			var a = Nn[t]
			Nn[t++] = null
			var o = Nn[t]
			Nn[t++] = null
			var s = Nn[t]
			Nn[t++] = null
			var f = Nn[t]
			if (((Nn[t++] = null), o !== null && s !== null)) {
				var g = o.pending
				;(g === null ? (s.next = s) : ((s.next = g.next), (g.next = s)),
					(o.pending = s))
			}
			f !== 0 && Op(a, s, f)
		}
	}
	function Wo(e, t, a, o) {
		;((Nn[pl++] = e),
			(Nn[pl++] = t),
			(Nn[pl++] = a),
			(Nn[pl++] = o),
			(pc |= o),
			(e.lanes |= o),
			(e = e.alternate),
			e !== null && (e.lanes |= o))
	}
	function mc(e, t, a, o) {
		return (Wo(e, t, a, o), eu(e))
	}
	function ml(e, t) {
		return (Wo(e, null, null, t), eu(e))
	}
	function Op(e, t, a) {
		e.lanes |= a
		var o = e.alternate
		o !== null && (o.lanes |= a)
		for (var s = !1, f = e.return; f !== null; )
			((f.childLanes |= a),
				(o = f.alternate),
				o !== null && (o.childLanes |= a),
				f.tag === 22 &&
					((e = f.stateNode), e === null || e._visibility & 1 || (s = !0)),
				(e = f),
				(f = f.return))
		return e.tag === 3
			? ((f = e.stateNode),
				s &&
					t !== null &&
					((s = 31 - P(a)),
					(e = f.hiddenUpdates),
					(o = e[s]),
					o === null ? (e[s] = [t]) : o.push(t),
					(t.lane = a | 536870912)),
				f)
			: null
	}
	function eu(e) {
		if (50 < Yi) throw ((Yi = 0), (Ef = null), Error(i(185)))
		for (var t = e.return; t !== null; ) ((e = t), (t = e.return))
		return e.tag === 3 ? e.stateNode : null
	}
	var vl = {}
	function fE(e, t, a, o) {
		;((this.tag = e),
			(this.key = a),
			(this.sibling =
				this.child =
				this.return =
				this.stateNode =
				this.type =
				this.elementType =
					null),
			(this.index = 0),
			(this.refCleanup = this.ref = null),
			(this.pendingProps = t),
			(this.dependencies =
				this.memoizedState =
				this.updateQueue =
				this.memoizedProps =
					null),
			(this.mode = o),
			(this.subtreeFlags = this.flags = 0),
			(this.deletions = null),
			(this.childLanes = this.lanes = 0),
			(this.alternate = null))
	}
	function _n(e, t, a, o) {
		return new fE(e, t, a, o)
	}
	function vc(e) {
		return ((e = e.prototype), !(!e || !e.isReactComponent))
	}
	function yr(e, t) {
		var a = e.alternate
		return (
			a === null
				? ((a = _n(e.tag, t, e.key, e.mode)),
					(a.elementType = e.elementType),
					(a.type = e.type),
					(a.stateNode = e.stateNode),
					(a.alternate = e),
					(e.alternate = a))
				: ((a.pendingProps = t),
					(a.type = e.type),
					(a.flags = 0),
					(a.subtreeFlags = 0),
					(a.deletions = null)),
			(a.flags = e.flags & 65011712),
			(a.childLanes = e.childLanes),
			(a.lanes = e.lanes),
			(a.child = e.child),
			(a.memoizedProps = e.memoizedProps),
			(a.memoizedState = e.memoizedState),
			(a.updateQueue = e.updateQueue),
			(t = e.dependencies),
			(a.dependencies =
				t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
			(a.sibling = e.sibling),
			(a.index = e.index),
			(a.ref = e.ref),
			(a.refCleanup = e.refCleanup),
			a
		)
	}
	function Mp(e, t) {
		e.flags &= 65011714
		var a = e.alternate
		return (
			a === null
				? ((e.childLanes = 0),
					(e.lanes = t),
					(e.child = null),
					(e.subtreeFlags = 0),
					(e.memoizedProps = null),
					(e.memoizedState = null),
					(e.updateQueue = null),
					(e.dependencies = null),
					(e.stateNode = null))
				: ((e.childLanes = a.childLanes),
					(e.lanes = a.lanes),
					(e.child = a.child),
					(e.subtreeFlags = 0),
					(e.deletions = null),
					(e.memoizedProps = a.memoizedProps),
					(e.memoizedState = a.memoizedState),
					(e.updateQueue = a.updateQueue),
					(e.type = a.type),
					(t = a.dependencies),
					(e.dependencies =
						t === null
							? null
							: { lanes: t.lanes, firstContext: t.firstContext })),
			e
		)
	}
	function tu(e, t, a, o, s, f) {
		var g = 0
		if (((o = e), typeof e == 'function')) vc(e) && (g = 1)
		else if (typeof e == 'string')
			g = h1(e, a, pe.current)
				? 26
				: e === 'html' || e === 'head' || e === 'body'
					? 27
					: 5
		else
			e: switch (e) {
				case _e:
					return ((e = _n(31, a, t, s)), (e.elementType = _e), (e.lanes = f), e)
				case M:
					return Aa(a.children, s, f, t)
				case _:
					;((g = 8), (s |= 24))
					break
				case S:
					return (
						(e = _n(12, a, t, s | 2)),
						(e.elementType = S),
						(e.lanes = f),
						e
					)
				case L:
					return ((e = _n(13, a, t, s)), (e.elementType = L), (e.lanes = f), e)
				case Q:
					return ((e = _n(19, a, t, s)), (e.elementType = Q), (e.lanes = f), e)
				default:
					if (typeof e == 'object' && e !== null)
						switch (e.$$typeof) {
							case x:
							case T:
								g = 10
								break e
							case C:
								g = 9
								break e
							case j:
								g = 11
								break e
							case te:
								g = 14
								break e
							case fe:
								;((g = 16), (o = null))
								break e
						}
					;((g = 29),
						(a = Error(i(130, e === null ? 'null' : typeof e, ''))),
						(o = null))
			}
		return (
			(t = _n(g, a, t, s)),
			(t.elementType = e),
			(t.type = o),
			(t.lanes = f),
			t
		)
	}
	function Aa(e, t, a, o) {
		return ((e = _n(7, e, o, t)), (e.lanes = a), e)
	}
	function yc(e, t, a) {
		return ((e = _n(6, e, null, t)), (e.lanes = a), e)
	}
	function gc(e, t, a) {
		return (
			(t = _n(4, e.children !== null ? e.children : [], e.key, t)),
			(t.lanes = a),
			(t.stateNode = {
				containerInfo: e.containerInfo,
				pendingChildren: null,
				implementation: e.implementation
			}),
			t
		)
	}
	var yl = [],
		gl = 0,
		nu = null,
		ru = 0,
		jn = [],
		Ln = 0,
		wa = null,
		gr = 1,
		br = ''
	function Ca(e, t) {
		;((yl[gl++] = ru), (yl[gl++] = nu), (nu = e), (ru = t))
	}
	function Dp(e, t, a) {
		;((jn[Ln++] = gr), (jn[Ln++] = br), (jn[Ln++] = wa), (wa = e))
		var o = gr
		e = br
		var s = 32 - P(o) - 1
		;((o &= ~(1 << s)), (a += 1))
		var f = 32 - P(t) + s
		if (30 < f) {
			var g = s - (s % 5)
			;((f = (o & ((1 << g) - 1)).toString(32)),
				(o >>= g),
				(s -= g),
				(gr = (1 << (32 - P(t) + s)) | (a << s) | o),
				(br = f + e))
		} else ((gr = (1 << f) | (a << s) | o), (br = e))
	}
	function bc(e) {
		e.return !== null && (Ca(e, 1), Dp(e, 1, 0))
	}
	function Sc(e) {
		for (; e === nu; )
			((nu = yl[--gl]), (yl[gl] = null), (ru = yl[--gl]), (yl[gl] = null))
		for (; e === wa; )
			((wa = jn[--Ln]),
				(jn[Ln] = null),
				(br = jn[--Ln]),
				(jn[Ln] = null),
				(gr = jn[--Ln]),
				(jn[Ln] = null))
	}
	var rn = null,
		St = null,
		Xe = !1,
		Ta = null,
		ur = !1,
		_c = Error(i(519))
	function Oa(e) {
		var t = Error(i(418, ''))
		throw (Ai(Dn(t, e)), _c)
	}
	function Np(e) {
		var t = e.stateNode,
			a = e.type,
			o = e.memoizedProps
		switch (((t[Vt] = e), (t[Zt] = o), a)) {
			case 'dialog':
				;(qe('cancel', t), qe('close', t))
				break
			case 'iframe':
			case 'object':
			case 'embed':
				qe('load', t)
				break
			case 'video':
			case 'audio':
				for (a = 0; a < Ki.length; a++) qe(Ki[a], t)
				break
			case 'source':
				qe('error', t)
				break
			case 'img':
			case 'image':
			case 'link':
				;(qe('error', t), qe('load', t))
				break
			case 'details':
				qe('toggle', t)
				break
			case 'input':
				;(qe('invalid', t),
					$o(
						t,
						o.value,
						o.defaultValue,
						o.checked,
						o.defaultChecked,
						o.type,
						o.name,
						!0
					),
					tl(t))
				break
			case 'select':
				qe('invalid', t)
				break
			case 'textarea':
				;(qe('invalid', t), Ea(t, o.value, o.defaultValue, o.children), tl(t))
		}
		;((a = o.children),
			(typeof a != 'string' && typeof a != 'number' && typeof a != 'bigint') ||
			t.textContent === '' + a ||
			o.suppressHydrationWarning === !0 ||
			Kv(t.textContent, a)
				? (o.popover != null && (qe('beforetoggle', t), qe('toggle', t)),
					o.onScroll != null && qe('scroll', t),
					o.onScrollEnd != null && qe('scrollend', t),
					o.onClick != null && (t.onclick = Bu),
					(t = !0))
				: (t = !1),
			t || Oa(e))
	}
	function jp(e) {
		for (rn = e.return; rn; )
			switch (rn.tag) {
				case 5:
				case 13:
					ur = !1
					return
				case 27:
				case 3:
					ur = !0
					return
				default:
					rn = rn.return
			}
	}
	function Ri(e) {
		if (e !== rn) return !1
		if (!Xe) return (jp(e), (Xe = !0), !1)
		var t = e.tag,
			a
		if (
			((a = t !== 3 && t !== 27) &&
				((a = t === 5) &&
					((a = e.type),
					(a =
						!(a !== 'form' && a !== 'button') || Pf(e.type, e.memoizedProps))),
				(a = !a)),
			a && St && Oa(e),
			jp(e),
			t === 13)
		) {
			if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
				throw Error(i(317))
			e: {
				for (e = e.nextSibling, t = 0; e; ) {
					if (e.nodeType === 8)
						if (((a = e.data), a === '/$')) {
							if (t === 0) {
								St = Kn(e.nextSibling)
								break e
							}
							t--
						} else (a !== '$' && a !== '$!' && a !== '$?') || t++
					e = e.nextSibling
				}
				St = null
			}
		} else
			t === 27
				? ((t = St), aa(e.type) ? ((e = qf), (qf = null), (St = e)) : (St = t))
				: (St = rn ? Kn(e.stateNode.nextSibling) : null)
		return !0
	}
	function xi() {
		;((St = rn = null), (Xe = !1))
	}
	function Lp() {
		var e = Ta
		return (
			e !== null &&
				(hn === null ? (hn = e) : hn.push.apply(hn, e), (Ta = null)),
			e
		)
	}
	function Ai(e) {
		Ta === null ? (Ta = [e]) : Ta.push(e)
	}
	var Ec = Y(null),
		Ma = null,
		Sr = null
	function Gr(e, t, a) {
		;(le(Ec, t._currentValue), (t._currentValue = a))
	}
	function _r(e) {
		;((e._currentValue = Ec.current), ie(Ec))
	}
	function Rc(e, t, a) {
		for (; e !== null; ) {
			var o = e.alternate
			if (
				((e.childLanes & t) !== t
					? ((e.childLanes |= t), o !== null && (o.childLanes |= t))
					: o !== null && (o.childLanes & t) !== t && (o.childLanes |= t),
				e === a)
			)
				break
			e = e.return
		}
	}
	function xc(e, t, a, o) {
		var s = e.child
		for (s !== null && (s.return = e); s !== null; ) {
			var f = s.dependencies
			if (f !== null) {
				var g = s.child
				f = f.firstContext
				e: for (; f !== null; ) {
					var E = f
					f = s
					for (var N = 0; N < t.length; N++)
						if (E.context === t[N]) {
							;((f.lanes |= a),
								(E = f.alternate),
								E !== null && (E.lanes |= a),
								Rc(f.return, a, e),
								o || (g = null))
							break e
						}
					f = E.next
				}
			} else if (s.tag === 18) {
				if (((g = s.return), g === null)) throw Error(i(341))
				;((g.lanes |= a),
					(f = g.alternate),
					f !== null && (f.lanes |= a),
					Rc(g, a, e),
					(g = null))
			} else g = s.child
			if (g !== null) g.return = s
			else
				for (g = s; g !== null; ) {
					if (g === e) {
						g = null
						break
					}
					if (((s = g.sibling), s !== null)) {
						;((s.return = g.return), (g = s))
						break
					}
					g = g.return
				}
			s = g
		}
	}
	function wi(e, t, a, o) {
		e = null
		for (var s = t, f = !1; s !== null; ) {
			if (!f) {
				if ((s.flags & 524288) !== 0) f = !0
				else if ((s.flags & 262144) !== 0) break
			}
			if (s.tag === 10) {
				var g = s.alternate
				if (g === null) throw Error(i(387))
				if (((g = g.memoizedProps), g !== null)) {
					var E = s.type
					Sn(s.pendingProps.value, g.value) ||
						(e !== null ? e.push(E) : (e = [E]))
				}
			} else if (s === ye.current) {
				if (((g = s.alternate), g === null)) throw Error(i(387))
				g.memoizedState.memoizedState !== s.memoizedState.memoizedState &&
					(e !== null ? e.push(to) : (e = [to]))
			}
			s = s.return
		}
		;(e !== null && xc(t, e, a, o), (t.flags |= 262144))
	}
	function au(e) {
		for (e = e.firstContext; e !== null; ) {
			if (!Sn(e.context._currentValue, e.memoizedValue)) return !0
			e = e.next
		}
		return !1
	}
	function Da(e) {
		;((Ma = e),
			(Sr = null),
			(e = e.dependencies),
			e !== null && (e.firstContext = null))
	}
	function Wt(e) {
		return Up(Ma, e)
	}
	function lu(e, t) {
		return (Ma === null && Da(e), Up(e, t))
	}
	function Up(e, t) {
		var a = t._currentValue
		if (((t = { context: t, memoizedValue: a, next: null }), Sr === null)) {
			if (e === null) throw Error(i(308))
			;((Sr = t),
				(e.dependencies = { lanes: 0, firstContext: t }),
				(e.flags |= 524288))
		} else Sr = Sr.next = t
		return a
	}
	var dE =
			typeof AbortController < 'u'
				? AbortController
				: function () {
						var e = [],
							t = (this.signal = {
								aborted: !1,
								addEventListener: function (a, o) {
									e.push(o)
								}
							})
						this.abort = function () {
							;((t.aborted = !0),
								e.forEach(function (a) {
									return a()
								}))
						}
					},
		hE = n.unstable_scheduleCallback,
		pE = n.unstable_NormalPriority,
		Ut = {
			$$typeof: T,
			Consumer: null,
			Provider: null,
			_currentValue: null,
			_currentValue2: null,
			_threadCount: 0
		}
	function Ac() {
		return { controller: new dE(), data: new Map(), refCount: 0 }
	}
	function Ci(e) {
		;(e.refCount--,
			e.refCount === 0 &&
				hE(pE, function () {
					e.controller.abort()
				}))
	}
	var Ti = null,
		wc = 0,
		bl = 0,
		Sl = null
	function mE(e, t) {
		if (Ti === null) {
			var a = (Ti = [])
			;((wc = 0),
				(bl = Of()),
				(Sl = {
					status: 'pending',
					value: void 0,
					then: function (o) {
						a.push(o)
					}
				}))
		}
		return (wc++, t.then(zp, zp), t)
	}
	function zp() {
		if (--wc === 0 && Ti !== null) {
			Sl !== null && (Sl.status = 'fulfilled')
			var e = Ti
			;((Ti = null), (bl = 0), (Sl = null))
			for (var t = 0; t < e.length; t++) (0, e[t])()
		}
	}
	function vE(e, t) {
		var a = [],
			o = {
				status: 'pending',
				value: null,
				reason: null,
				then: function (s) {
					a.push(s)
				}
			}
		return (
			e.then(
				function () {
					;((o.status = 'fulfilled'), (o.value = t))
					for (var s = 0; s < a.length; s++) (0, a[s])(t)
				},
				function (s) {
					for (o.status = 'rejected', o.reason = s, s = 0; s < a.length; s++)
						(0, a[s])(void 0)
				}
			),
			o
		)
	}
	var Bp = G.S
	G.S = function (e, t) {
		;(typeof t == 'object' &&
			t !== null &&
			typeof t.then == 'function' &&
			mE(e, t),
			Bp !== null && Bp(e, t))
	}
	var Na = Y(null)
	function Cc() {
		var e = Na.current
		return e !== null ? e : ut.pooledCache
	}
	function iu(e, t) {
		t === null ? le(Na, Na.current) : le(Na, t.pool)
	}
	function Pp() {
		var e = Cc()
		return e === null ? null : { parent: Ut._currentValue, pool: e }
	}
	var Oi = Error(i(460)),
		Vp = Error(i(474)),
		ou = Error(i(542)),
		Tc = { then: function () {} }
	function kp(e) {
		return ((e = e.status), e === 'fulfilled' || e === 'rejected')
	}
	function uu() {}
	function Hp(e, t, a) {
		switch (
			((a = e[a]),
			a === void 0 ? e.push(t) : a !== t && (t.then(uu, uu), (t = a)),
			t.status)
		) {
			case 'fulfilled':
				return t.value
			case 'rejected':
				throw ((e = t.reason), Gp(e), e)
			default:
				if (typeof t.status == 'string') t.then(uu, uu)
				else {
					if (((e = ut), e !== null && 100 < e.shellSuspendCounter))
						throw Error(i(482))
					;((e = t),
						(e.status = 'pending'),
						e.then(
							function (o) {
								if (t.status === 'pending') {
									var s = t
									;((s.status = 'fulfilled'), (s.value = o))
								}
							},
							function (o) {
								if (t.status === 'pending') {
									var s = t
									;((s.status = 'rejected'), (s.reason = o))
								}
							}
						))
				}
				switch (t.status) {
					case 'fulfilled':
						return t.value
					case 'rejected':
						throw ((e = t.reason), Gp(e), e)
				}
				throw ((Mi = t), Oi)
		}
	}
	var Mi = null
	function qp() {
		if (Mi === null) throw Error(i(459))
		var e = Mi
		return ((Mi = null), e)
	}
	function Gp(e) {
		if (e === Oi || e === ou) throw Error(i(483))
	}
	var Fr = !1
	function Oc(e) {
		e.updateQueue = {
			baseState: e.memoizedState,
			firstBaseUpdate: null,
			lastBaseUpdate: null,
			shared: { pending: null, lanes: 0, hiddenCallbacks: null },
			callbacks: null
		}
	}
	function Mc(e, t) {
		;((e = e.updateQueue),
			t.updateQueue === e &&
				(t.updateQueue = {
					baseState: e.baseState,
					firstBaseUpdate: e.firstBaseUpdate,
					lastBaseUpdate: e.lastBaseUpdate,
					shared: e.shared,
					callbacks: null
				}))
	}
	function $r(e) {
		return { lane: e, tag: 0, payload: null, callback: null, next: null }
	}
	function Ir(e, t, a) {
		var o = e.updateQueue
		if (o === null) return null
		if (((o = o.shared), (We & 2) !== 0)) {
			var s = o.pending
			return (
				s === null ? (t.next = t) : ((t.next = s.next), (s.next = t)),
				(o.pending = t),
				(t = eu(e)),
				Op(e, null, a),
				t
			)
		}
		return (Wo(e, o, t, a), eu(e))
	}
	function Di(e, t, a) {
		if (
			((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
		) {
			var o = t.lanes
			;((o &= e.pendingLanes), (a |= o), (t.lanes = a), Sa(e, a))
		}
	}
	function Dc(e, t) {
		var a = e.updateQueue,
			o = e.alternate
		if (o !== null && ((o = o.updateQueue), a === o)) {
			var s = null,
				f = null
			if (((a = a.firstBaseUpdate), a !== null)) {
				do {
					var g = {
						lane: a.lane,
						tag: a.tag,
						payload: a.payload,
						callback: null,
						next: null
					}
					;(f === null ? (s = f = g) : (f = f.next = g), (a = a.next))
				} while (a !== null)
				f === null ? (s = f = t) : (f = f.next = t)
			} else s = f = t
			;((a = {
				baseState: o.baseState,
				firstBaseUpdate: s,
				lastBaseUpdate: f,
				shared: o.shared,
				callbacks: o.callbacks
			}),
				(e.updateQueue = a))
			return
		}
		;((e = a.lastBaseUpdate),
			e === null ? (a.firstBaseUpdate = t) : (e.next = t),
			(a.lastBaseUpdate = t))
	}
	var Nc = !1
	function Ni() {
		if (Nc) {
			var e = Sl
			if (e !== null) throw e
		}
	}
	function ji(e, t, a, o) {
		Nc = !1
		var s = e.updateQueue
		Fr = !1
		var f = s.firstBaseUpdate,
			g = s.lastBaseUpdate,
			E = s.shared.pending
		if (E !== null) {
			s.shared.pending = null
			var N = E,
				q = N.next
			;((N.next = null), g === null ? (f = q) : (g.next = q), (g = N))
			var K = e.alternate
			K !== null &&
				((K = K.updateQueue),
				(E = K.lastBaseUpdate),
				E !== g &&
					(E === null ? (K.firstBaseUpdate = q) : (E.next = q),
					(K.lastBaseUpdate = N)))
		}
		if (f !== null) {
			var W = s.baseState
			;((g = 0), (K = q = N = null), (E = f))
			do {
				var F = E.lane & -536870913,
					$ = F !== E.lane
				if ($ ? (Fe & F) === F : (o & F) === F) {
					;(F !== 0 && F === bl && (Nc = !0),
						K !== null &&
							(K = K.next =
								{
									lane: 0,
									tag: E.tag,
									payload: E.payload,
									callback: null,
									next: null
								}))
					e: {
						var Me = e,
							Te = E
						F = t
						var rt = a
						switch (Te.tag) {
							case 1:
								if (((Me = Te.payload), typeof Me == 'function')) {
									W = Me.call(rt, W, F)
									break e
								}
								W = Me
								break e
							case 3:
								Me.flags = (Me.flags & -65537) | 128
							case 0:
								if (
									((Me = Te.payload),
									(F = typeof Me == 'function' ? Me.call(rt, W, F) : Me),
									F == null)
								)
									break e
								W = y({}, W, F)
								break e
							case 2:
								Fr = !0
						}
					}
					;((F = E.callback),
						F !== null &&
							((e.flags |= 64),
							$ && (e.flags |= 8192),
							($ = s.callbacks),
							$ === null ? (s.callbacks = [F]) : $.push(F)))
				} else
					(($ = {
						lane: F,
						tag: E.tag,
						payload: E.payload,
						callback: E.callback,
						next: null
					}),
						K === null ? ((q = K = $), (N = W)) : (K = K.next = $),
						(g |= F))
				if (((E = E.next), E === null)) {
					if (((E = s.shared.pending), E === null)) break
					;(($ = E),
						(E = $.next),
						($.next = null),
						(s.lastBaseUpdate = $),
						(s.shared.pending = null))
				}
			} while (!0)
			;(K === null && (N = W),
				(s.baseState = N),
				(s.firstBaseUpdate = q),
				(s.lastBaseUpdate = K),
				f === null && (s.shared.lanes = 0),
				(ea |= g),
				(e.lanes = g),
				(e.memoizedState = W))
		}
	}
	function Fp(e, t) {
		if (typeof e != 'function') throw Error(i(191, e))
		e.call(t)
	}
	function $p(e, t) {
		var a = e.callbacks
		if (a !== null)
			for (e.callbacks = null, e = 0; e < a.length; e++) Fp(a[e], t)
	}
	var _l = Y(null),
		su = Y(0)
	function Ip(e, t) {
		;((e = Tr), le(su, e), le(_l, t), (Tr = e | t.baseLanes))
	}
	function jc() {
		;(le(su, Tr), le(_l, _l.current))
	}
	function Lc() {
		;((Tr = su.current), ie(_l), ie(su))
	}
	var Yr = 0,
		Ve = null,
		tt = null,
		Ot = null,
		cu = !1,
		El = !1,
		ja = !1,
		fu = 0,
		Li = 0,
		Rl = null,
		yE = 0
	function At() {
		throw Error(i(321))
	}
	function Uc(e, t) {
		if (t === null) return !1
		for (var a = 0; a < t.length && a < e.length; a++)
			if (!Sn(e[a], t[a])) return !1
		return !0
	}
	function zc(e, t, a, o, s, f) {
		return (
			(Yr = f),
			(Ve = t),
			(t.memoizedState = null),
			(t.updateQueue = null),
			(t.lanes = 0),
			(G.H = e === null || e.memoizedState === null ? Om : Mm),
			(ja = !1),
			(f = a(o, s)),
			(ja = !1),
			El && (f = Qp(t, a, o, s)),
			Yp(e),
			f
		)
	}
	function Yp(e) {
		G.H = yu
		var t = tt !== null && tt.next !== null
		if (((Yr = 0), (Ot = tt = Ve = null), (cu = !1), (Li = 0), (Rl = null), t))
			throw Error(i(300))
		e === null || Ht || ((e = e.dependencies), e !== null && au(e) && (Ht = !0))
	}
	function Qp(e, t, a, o) {
		Ve = e
		var s = 0
		do {
			if ((El && (Rl = null), (Li = 0), (El = !1), 25 <= s)) throw Error(i(301))
			if (((s += 1), (Ot = tt = null), e.updateQueue != null)) {
				var f = e.updateQueue
				;((f.lastEffect = null),
					(f.events = null),
					(f.stores = null),
					f.memoCache != null && (f.memoCache.index = 0))
			}
			;((G.H = xE), (f = t(a, o)))
		} while (El)
		return f
	}
	function gE() {
		var e = G.H,
			t = e.useState()[0]
		return (
			(t = typeof t.then == 'function' ? Ui(t) : t),
			(e = e.useState()[0]),
			(tt !== null ? tt.memoizedState : null) !== e && (Ve.flags |= 1024),
			t
		)
	}
	function Bc() {
		var e = fu !== 0
		return ((fu = 0), e)
	}
	function Pc(e, t, a) {
		;((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~a))
	}
	function Vc(e) {
		if (cu) {
			for (e = e.memoizedState; e !== null; ) {
				var t = e.queue
				;(t !== null && (t.pending = null), (e = e.next))
			}
			cu = !1
		}
		;((Yr = 0), (Ot = tt = Ve = null), (El = !1), (Li = fu = 0), (Rl = null))
	}
	function fn() {
		var e = {
			memoizedState: null,
			baseState: null,
			baseQueue: null,
			queue: null,
			next: null
		}
		return (Ot === null ? (Ve.memoizedState = Ot = e) : (Ot = Ot.next = e), Ot)
	}
	function Mt() {
		if (tt === null) {
			var e = Ve.alternate
			e = e !== null ? e.memoizedState : null
		} else e = tt.next
		var t = Ot === null ? Ve.memoizedState : Ot.next
		if (t !== null) ((Ot = t), (tt = e))
		else {
			if (e === null)
				throw Ve.alternate === null ? Error(i(467)) : Error(i(310))
			;((tt = e),
				(e = {
					memoizedState: tt.memoizedState,
					baseState: tt.baseState,
					baseQueue: tt.baseQueue,
					queue: tt.queue,
					next: null
				}),
				Ot === null ? (Ve.memoizedState = Ot = e) : (Ot = Ot.next = e))
		}
		return Ot
	}
	function kc() {
		return { lastEffect: null, events: null, stores: null, memoCache: null }
	}
	function Ui(e) {
		var t = Li
		return (
			(Li += 1),
			Rl === null && (Rl = []),
			(e = Hp(Rl, e, t)),
			(t = Ve),
			(Ot === null ? t.memoizedState : Ot.next) === null &&
				((t = t.alternate),
				(G.H = t === null || t.memoizedState === null ? Om : Mm)),
			e
		)
	}
	function du(e) {
		if (e !== null && typeof e == 'object') {
			if (typeof e.then == 'function') return Ui(e)
			if (e.$$typeof === T) return Wt(e)
		}
		throw Error(i(438, String(e)))
	}
	function Hc(e) {
		var t = null,
			a = Ve.updateQueue
		if ((a !== null && (t = a.memoCache), t == null)) {
			var o = Ve.alternate
			o !== null &&
				((o = o.updateQueue),
				o !== null &&
					((o = o.memoCache),
					o != null &&
						(t = {
							data: o.data.map(function (s) {
								return s.slice()
							}),
							index: 0
						})))
		}
		if (
			(t == null && (t = { data: [], index: 0 }),
			a === null && ((a = kc()), (Ve.updateQueue = a)),
			(a.memoCache = t),
			(a = t.data[t.index]),
			a === void 0)
		)
			for (a = t.data[t.index] = Array(e), o = 0; o < e; o++) a[o] = be
		return (t.index++, a)
	}
	function Er(e, t) {
		return typeof t == 'function' ? t(e) : t
	}
	function hu(e) {
		var t = Mt()
		return qc(t, tt, e)
	}
	function qc(e, t, a) {
		var o = e.queue
		if (o === null) throw Error(i(311))
		o.lastRenderedReducer = a
		var s = e.baseQueue,
			f = o.pending
		if (f !== null) {
			if (s !== null) {
				var g = s.next
				;((s.next = f.next), (f.next = g))
			}
			;((t.baseQueue = s = f), (o.pending = null))
		}
		if (((f = e.baseState), s === null)) e.memoizedState = f
		else {
			t = s.next
			var E = (g = null),
				N = null,
				q = t,
				K = !1
			do {
				var W = q.lane & -536870913
				if (W !== q.lane ? (Fe & W) === W : (Yr & W) === W) {
					var F = q.revertLane
					if (F === 0)
						(N !== null &&
							(N = N.next =
								{
									lane: 0,
									revertLane: 0,
									action: q.action,
									hasEagerState: q.hasEagerState,
									eagerState: q.eagerState,
									next: null
								}),
							W === bl && (K = !0))
					else if ((Yr & F) === F) {
						;((q = q.next), F === bl && (K = !0))
						continue
					} else
						((W = {
							lane: 0,
							revertLane: q.revertLane,
							action: q.action,
							hasEagerState: q.hasEagerState,
							eagerState: q.eagerState,
							next: null
						}),
							N === null ? ((E = N = W), (g = f)) : (N = N.next = W),
							(Ve.lanes |= F),
							(ea |= F))
					;((W = q.action),
						ja && a(f, W),
						(f = q.hasEagerState ? q.eagerState : a(f, W)))
				} else
					((F = {
						lane: W,
						revertLane: q.revertLane,
						action: q.action,
						hasEagerState: q.hasEagerState,
						eagerState: q.eagerState,
						next: null
					}),
						N === null ? ((E = N = F), (g = f)) : (N = N.next = F),
						(Ve.lanes |= W),
						(ea |= W))
				q = q.next
			} while (q !== null && q !== t)
			if (
				(N === null ? (g = f) : (N.next = E),
				!Sn(f, e.memoizedState) && ((Ht = !0), K && ((a = Sl), a !== null)))
			)
				throw a
			;((e.memoizedState = f),
				(e.baseState = g),
				(e.baseQueue = N),
				(o.lastRenderedState = f))
		}
		return (s === null && (o.lanes = 0), [e.memoizedState, o.dispatch])
	}
	function Gc(e) {
		var t = Mt(),
			a = t.queue
		if (a === null) throw Error(i(311))
		a.lastRenderedReducer = e
		var o = a.dispatch,
			s = a.pending,
			f = t.memoizedState
		if (s !== null) {
			a.pending = null
			var g = (s = s.next)
			do ((f = e(f, g.action)), (g = g.next))
			while (g !== s)
			;(Sn(f, t.memoizedState) || (Ht = !0),
				(t.memoizedState = f),
				t.baseQueue === null && (t.baseState = f),
				(a.lastRenderedState = f))
		}
		return [f, o]
	}
	function Kp(e, t, a) {
		var o = Ve,
			s = Mt(),
			f = Xe
		if (f) {
			if (a === void 0) throw Error(i(407))
			a = a()
		} else a = t()
		var g = !Sn((tt || s).memoizedState, a)
		;(g && ((s.memoizedState = a), (Ht = !0)), (s = s.queue))
		var E = Jp.bind(null, o, s, e)
		if (
			(zi(2048, 8, E, [e]),
			s.getSnapshot !== t || g || (Ot !== null && Ot.memoizedState.tag & 1))
		) {
			if (
				((o.flags |= 2048),
				xl(9, pu(), Zp.bind(null, o, s, a, t), null),
				ut === null)
			)
				throw Error(i(349))
			f || (Yr & 124) !== 0 || Xp(o, t, a)
		}
		return a
	}
	function Xp(e, t, a) {
		;((e.flags |= 16384),
			(e = { getSnapshot: t, value: a }),
			(t = Ve.updateQueue),
			t === null
				? ((t = kc()), (Ve.updateQueue = t), (t.stores = [e]))
				: ((a = t.stores), a === null ? (t.stores = [e]) : a.push(e)))
	}
	function Zp(e, t, a, o) {
		;((t.value = a), (t.getSnapshot = o), Wp(t) && em(e))
	}
	function Jp(e, t, a) {
		return a(function () {
			Wp(t) && em(e)
		})
	}
	function Wp(e) {
		var t = e.getSnapshot
		e = e.value
		try {
			var a = t()
			return !Sn(e, a)
		} catch {
			return !0
		}
	}
	function em(e) {
		var t = ml(e, 2)
		t !== null && wn(t, e, 2)
	}
	function Fc(e) {
		var t = fn()
		if (typeof e == 'function') {
			var a = e
			if (((e = a()), ja)) {
				B(!0)
				try {
					a()
				} finally {
					B(!1)
				}
			}
		}
		return (
			(t.memoizedState = t.baseState = e),
			(t.queue = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Er,
				lastRenderedState: e
			}),
			t
		)
	}
	function tm(e, t, a, o) {
		return ((e.baseState = a), qc(e, tt, typeof o == 'function' ? o : Er))
	}
	function bE(e, t, a, o, s) {
		if (vu(e)) throw Error(i(485))
		if (((e = t.action), e !== null)) {
			var f = {
				payload: s,
				action: e,
				next: null,
				isTransition: !0,
				status: 'pending',
				value: null,
				reason: null,
				listeners: [],
				then: function (g) {
					f.listeners.push(g)
				}
			}
			;(G.T !== null ? a(!0) : (f.isTransition = !1),
				o(f),
				(a = t.pending),
				a === null
					? ((f.next = t.pending = f), nm(t, f))
					: ((f.next = a.next), (t.pending = a.next = f)))
		}
	}
	function nm(e, t) {
		var a = t.action,
			o = t.payload,
			s = e.state
		if (t.isTransition) {
			var f = G.T,
				g = {}
			G.T = g
			try {
				var E = a(s, o),
					N = G.S
				;(N !== null && N(g, E), rm(e, t, E))
			} catch (q) {
				$c(e, t, q)
			} finally {
				G.T = f
			}
		} else
			try {
				;((f = a(s, o)), rm(e, t, f))
			} catch (q) {
				$c(e, t, q)
			}
	}
	function rm(e, t, a) {
		a !== null && typeof a == 'object' && typeof a.then == 'function'
			? a.then(
					function (o) {
						am(e, t, o)
					},
					function (o) {
						return $c(e, t, o)
					}
				)
			: am(e, t, a)
	}
	function am(e, t, a) {
		;((t.status = 'fulfilled'),
			(t.value = a),
			lm(t),
			(e.state = a),
			(t = e.pending),
			t !== null &&
				((a = t.next),
				a === t ? (e.pending = null) : ((a = a.next), (t.next = a), nm(e, a))))
	}
	function $c(e, t, a) {
		var o = e.pending
		if (((e.pending = null), o !== null)) {
			o = o.next
			do ((t.status = 'rejected'), (t.reason = a), lm(t), (t = t.next))
			while (t !== o)
		}
		e.action = null
	}
	function lm(e) {
		e = e.listeners
		for (var t = 0; t < e.length; t++) (0, e[t])()
	}
	function im(e, t) {
		return t
	}
	function om(e, t) {
		if (Xe) {
			var a = ut.formState
			if (a !== null) {
				e: {
					var o = Ve
					if (Xe) {
						if (St) {
							t: {
								for (var s = St, f = ur; s.nodeType !== 8; ) {
									if (!f) {
										s = null
										break t
									}
									if (((s = Kn(s.nextSibling)), s === null)) {
										s = null
										break t
									}
								}
								;((f = s.data), (s = f === 'F!' || f === 'F' ? s : null))
							}
							if (s) {
								;((St = Kn(s.nextSibling)), (o = s.data === 'F!'))
								break e
							}
						}
						Oa(o)
					}
					o = !1
				}
				o && (t = a[0])
			}
		}
		return (
			(a = fn()),
			(a.memoizedState = a.baseState = t),
			(o = {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: im,
				lastRenderedState: t
			}),
			(a.queue = o),
			(a = wm.bind(null, Ve, o)),
			(o.dispatch = a),
			(o = Fc(!1)),
			(f = Xc.bind(null, Ve, !1, o.queue)),
			(o = fn()),
			(s = { state: t, dispatch: null, action: e, pending: null }),
			(o.queue = s),
			(a = bE.bind(null, Ve, s, f, a)),
			(s.dispatch = a),
			(o.memoizedState = e),
			[t, a, !1]
		)
	}
	function um(e) {
		var t = Mt()
		return sm(t, tt, e)
	}
	function sm(e, t, a) {
		if (
			((t = qc(e, t, im)[0]),
			(e = hu(Er)[0]),
			typeof t == 'object' && t !== null && typeof t.then == 'function')
		)
			try {
				var o = Ui(t)
			} catch (g) {
				throw g === Oi ? ou : g
			}
		else o = t
		t = Mt()
		var s = t.queue,
			f = s.dispatch
		return (
			a !== t.memoizedState &&
				((Ve.flags |= 2048), xl(9, pu(), SE.bind(null, s, a), null)),
			[o, f, e]
		)
	}
	function SE(e, t) {
		e.action = t
	}
	function cm(e) {
		var t = Mt(),
			a = tt
		if (a !== null) return sm(t, a, e)
		;(Mt(), (t = t.memoizedState), (a = Mt()))
		var o = a.queue.dispatch
		return ((a.memoizedState = e), [t, o, !1])
	}
	function xl(e, t, a, o) {
		return (
			(e = { tag: e, create: a, deps: o, inst: t, next: null }),
			(t = Ve.updateQueue),
			t === null && ((t = kc()), (Ve.updateQueue = t)),
			(a = t.lastEffect),
			a === null
				? (t.lastEffect = e.next = e)
				: ((o = a.next), (a.next = e), (e.next = o), (t.lastEffect = e)),
			e
		)
	}
	function pu() {
		return { destroy: void 0, resource: void 0 }
	}
	function fm() {
		return Mt().memoizedState
	}
	function mu(e, t, a, o) {
		var s = fn()
		;((o = o === void 0 ? null : o),
			(Ve.flags |= e),
			(s.memoizedState = xl(1 | t, pu(), a, o)))
	}
	function zi(e, t, a, o) {
		var s = Mt()
		o = o === void 0 ? null : o
		var f = s.memoizedState.inst
		tt !== null && o !== null && Uc(o, tt.memoizedState.deps)
			? (s.memoizedState = xl(t, f, a, o))
			: ((Ve.flags |= e), (s.memoizedState = xl(1 | t, f, a, o)))
	}
	function dm(e, t) {
		mu(8390656, 8, e, t)
	}
	function hm(e, t) {
		zi(2048, 8, e, t)
	}
	function pm(e, t) {
		return zi(4, 2, e, t)
	}
	function mm(e, t) {
		return zi(4, 4, e, t)
	}
	function vm(e, t) {
		if (typeof t == 'function') {
			e = e()
			var a = t(e)
			return function () {
				typeof a == 'function' ? a() : t(null)
			}
		}
		if (t != null)
			return (
				(e = e()),
				(t.current = e),
				function () {
					t.current = null
				}
			)
	}
	function ym(e, t, a) {
		;((a = a != null ? a.concat([e]) : null), zi(4, 4, vm.bind(null, t, e), a))
	}
	function Ic() {}
	function gm(e, t) {
		var a = Mt()
		t = t === void 0 ? null : t
		var o = a.memoizedState
		return t !== null && Uc(t, o[1]) ? o[0] : ((a.memoizedState = [e, t]), e)
	}
	function bm(e, t) {
		var a = Mt()
		t = t === void 0 ? null : t
		var o = a.memoizedState
		if (t !== null && Uc(t, o[1])) return o[0]
		if (((o = e()), ja)) {
			B(!0)
			try {
				e()
			} finally {
				B(!1)
			}
		}
		return ((a.memoizedState = [o, t]), o)
	}
	function Yc(e, t, a) {
		return a === void 0 || (Yr & 1073741824) !== 0
			? (e.memoizedState = t)
			: ((e.memoizedState = a), (e = Ev()), (Ve.lanes |= e), (ea |= e), a)
	}
	function Sm(e, t, a, o) {
		return Sn(a, t)
			? a
			: _l.current !== null
				? ((e = Yc(e, a, o)), Sn(e, t) || (Ht = !0), e)
				: (Yr & 42) === 0
					? ((Ht = !0), (e.memoizedState = a))
					: ((e = Ev()), (Ve.lanes |= e), (ea |= e), t)
	}
	function _m(e, t, a, o, s) {
		var f = re.p
		re.p = f !== 0 && 8 > f ? f : 8
		var g = G.T,
			E = {}
		;((G.T = E), Xc(e, !1, t, a))
		try {
			var N = s(),
				q = G.S
			if (
				(q !== null && q(E, N),
				N !== null && typeof N == 'object' && typeof N.then == 'function')
			) {
				var K = vE(N, o)
				Bi(e, t, K, An(e))
			} else Bi(e, t, o, An(e))
		} catch (W) {
			Bi(e, t, { then: function () {}, status: 'rejected', reason: W }, An())
		} finally {
			;((re.p = f), (G.T = g))
		}
	}
	function _E() {}
	function Qc(e, t, a, o) {
		if (e.tag !== 5) throw Error(i(476))
		var s = Em(e).queue
		_m(
			e,
			s,
			t,
			ae,
			a === null
				? _E
				: function () {
						return (Rm(e), a(o))
					}
		)
	}
	function Em(e) {
		var t = e.memoizedState
		if (t !== null) return t
		t = {
			memoizedState: ae,
			baseState: ae,
			baseQueue: null,
			queue: {
				pending: null,
				lanes: 0,
				dispatch: null,
				lastRenderedReducer: Er,
				lastRenderedState: ae
			},
			next: null
		}
		var a = {}
		return (
			(t.next = {
				memoizedState: a,
				baseState: a,
				baseQueue: null,
				queue: {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: Er,
					lastRenderedState: a
				},
				next: null
			}),
			(e.memoizedState = t),
			(e = e.alternate),
			e !== null && (e.memoizedState = t),
			t
		)
	}
	function Rm(e) {
		var t = Em(e).next.queue
		Bi(e, t, {}, An())
	}
	function Kc() {
		return Wt(to)
	}
	function xm() {
		return Mt().memoizedState
	}
	function Am() {
		return Mt().memoizedState
	}
	function EE(e) {
		for (var t = e.return; t !== null; ) {
			switch (t.tag) {
				case 24:
				case 3:
					var a = An()
					e = $r(a)
					var o = Ir(t, e, a)
					;(o !== null && (wn(o, t, a), Di(o, t, a)),
						(t = { cache: Ac() }),
						(e.payload = t))
					return
			}
			t = t.return
		}
	}
	function RE(e, t, a) {
		var o = An()
		;((a = {
			lane: o,
			revertLane: 0,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}),
			vu(e)
				? Cm(t, a)
				: ((a = mc(e, t, a, o)), a !== null && (wn(a, e, o), Tm(a, t, o))))
	}
	function wm(e, t, a) {
		var o = An()
		Bi(e, t, a, o)
	}
	function Bi(e, t, a, o) {
		var s = {
			lane: o,
			revertLane: 0,
			action: a,
			hasEagerState: !1,
			eagerState: null,
			next: null
		}
		if (vu(e)) Cm(t, s)
		else {
			var f = e.alternate
			if (
				e.lanes === 0 &&
				(f === null || f.lanes === 0) &&
				((f = t.lastRenderedReducer), f !== null)
			)
				try {
					var g = t.lastRenderedState,
						E = f(g, a)
					if (((s.hasEagerState = !0), (s.eagerState = E), Sn(E, g)))
						return (Wo(e, t, s, 0), ut === null && Jo(), !1)
				} catch {
				} finally {
				}
			if (((a = mc(e, t, s, o)), a !== null))
				return (wn(a, e, o), Tm(a, t, o), !0)
		}
		return !1
	}
	function Xc(e, t, a, o) {
		if (
			((o = {
				lane: 2,
				revertLane: Of(),
				action: o,
				hasEagerState: !1,
				eagerState: null,
				next: null
			}),
			vu(e))
		) {
			if (t) throw Error(i(479))
		} else ((t = mc(e, a, o, 2)), t !== null && wn(t, e, 2))
	}
	function vu(e) {
		var t = e.alternate
		return e === Ve || (t !== null && t === Ve)
	}
	function Cm(e, t) {
		El = cu = !0
		var a = e.pending
		;(a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
			(e.pending = t))
	}
	function Tm(e, t, a) {
		if ((a & 4194048) !== 0) {
			var o = t.lanes
			;((o &= e.pendingLanes), (a |= o), (t.lanes = a), Sa(e, a))
		}
	}
	var yu = {
			readContext: Wt,
			use: du,
			useCallback: At,
			useContext: At,
			useEffect: At,
			useImperativeHandle: At,
			useLayoutEffect: At,
			useInsertionEffect: At,
			useMemo: At,
			useReducer: At,
			useRef: At,
			useState: At,
			useDebugValue: At,
			useDeferredValue: At,
			useTransition: At,
			useSyncExternalStore: At,
			useId: At,
			useHostTransitionStatus: At,
			useFormState: At,
			useActionState: At,
			useOptimistic: At,
			useMemoCache: At,
			useCacheRefresh: At
		},
		Om = {
			readContext: Wt,
			use: du,
			useCallback: function (e, t) {
				return ((fn().memoizedState = [e, t === void 0 ? null : t]), e)
			},
			useContext: Wt,
			useEffect: dm,
			useImperativeHandle: function (e, t, a) {
				;((a = a != null ? a.concat([e]) : null),
					mu(4194308, 4, vm.bind(null, t, e), a))
			},
			useLayoutEffect: function (e, t) {
				return mu(4194308, 4, e, t)
			},
			useInsertionEffect: function (e, t) {
				mu(4, 2, e, t)
			},
			useMemo: function (e, t) {
				var a = fn()
				t = t === void 0 ? null : t
				var o = e()
				if (ja) {
					B(!0)
					try {
						e()
					} finally {
						B(!1)
					}
				}
				return ((a.memoizedState = [o, t]), o)
			},
			useReducer: function (e, t, a) {
				var o = fn()
				if (a !== void 0) {
					var s = a(t)
					if (ja) {
						B(!0)
						try {
							a(t)
						} finally {
							B(!1)
						}
					}
				} else s = t
				return (
					(o.memoizedState = o.baseState = s),
					(e = {
						pending: null,
						lanes: 0,
						dispatch: null,
						lastRenderedReducer: e,
						lastRenderedState: s
					}),
					(o.queue = e),
					(e = e.dispatch = RE.bind(null, Ve, e)),
					[o.memoizedState, e]
				)
			},
			useRef: function (e) {
				var t = fn()
				return ((e = { current: e }), (t.memoizedState = e))
			},
			useState: function (e) {
				e = Fc(e)
				var t = e.queue,
					a = wm.bind(null, Ve, t)
				return ((t.dispatch = a), [e.memoizedState, a])
			},
			useDebugValue: Ic,
			useDeferredValue: function (e, t) {
				var a = fn()
				return Yc(a, e, t)
			},
			useTransition: function () {
				var e = Fc(!1)
				return (
					(e = _m.bind(null, Ve, e.queue, !0, !1)),
					(fn().memoizedState = e),
					[!1, e]
				)
			},
			useSyncExternalStore: function (e, t, a) {
				var o = Ve,
					s = fn()
				if (Xe) {
					if (a === void 0) throw Error(i(407))
					a = a()
				} else {
					if (((a = t()), ut === null)) throw Error(i(349))
					;(Fe & 124) !== 0 || Xp(o, t, a)
				}
				s.memoizedState = a
				var f = { value: a, getSnapshot: t }
				return (
					(s.queue = f),
					dm(Jp.bind(null, o, f, e), [e]),
					(o.flags |= 2048),
					xl(9, pu(), Zp.bind(null, o, f, a, t), null),
					a
				)
			},
			useId: function () {
				var e = fn(),
					t = ut.identifierPrefix
				if (Xe) {
					var a = br,
						o = gr
					;((a = (o & ~(1 << (32 - P(o) - 1))).toString(32) + a),
						(t = '«' + t + 'R' + a),
						(a = fu++),
						0 < a && (t += 'H' + a.toString(32)),
						(t += '»'))
				} else ((a = yE++), (t = '«' + t + 'r' + a.toString(32) + '»'))
				return (e.memoizedState = t)
			},
			useHostTransitionStatus: Kc,
			useFormState: om,
			useActionState: om,
			useOptimistic: function (e) {
				var t = fn()
				t.memoizedState = t.baseState = e
				var a = {
					pending: null,
					lanes: 0,
					dispatch: null,
					lastRenderedReducer: null,
					lastRenderedState: null
				}
				return (
					(t.queue = a),
					(t = Xc.bind(null, Ve, !0, a)),
					(a.dispatch = t),
					[e, t]
				)
			},
			useMemoCache: Hc,
			useCacheRefresh: function () {
				return (fn().memoizedState = EE.bind(null, Ve))
			}
		},
		Mm = {
			readContext: Wt,
			use: du,
			useCallback: gm,
			useContext: Wt,
			useEffect: hm,
			useImperativeHandle: ym,
			useInsertionEffect: pm,
			useLayoutEffect: mm,
			useMemo: bm,
			useReducer: hu,
			useRef: fm,
			useState: function () {
				return hu(Er)
			},
			useDebugValue: Ic,
			useDeferredValue: function (e, t) {
				var a = Mt()
				return Sm(a, tt.memoizedState, e, t)
			},
			useTransition: function () {
				var e = hu(Er)[0],
					t = Mt().memoizedState
				return [typeof e == 'boolean' ? e : Ui(e), t]
			},
			useSyncExternalStore: Kp,
			useId: xm,
			useHostTransitionStatus: Kc,
			useFormState: um,
			useActionState: um,
			useOptimistic: function (e, t) {
				var a = Mt()
				return tm(a, tt, e, t)
			},
			useMemoCache: Hc,
			useCacheRefresh: Am
		},
		xE = {
			readContext: Wt,
			use: du,
			useCallback: gm,
			useContext: Wt,
			useEffect: hm,
			useImperativeHandle: ym,
			useInsertionEffect: pm,
			useLayoutEffect: mm,
			useMemo: bm,
			useReducer: Gc,
			useRef: fm,
			useState: function () {
				return Gc(Er)
			},
			useDebugValue: Ic,
			useDeferredValue: function (e, t) {
				var a = Mt()
				return tt === null ? Yc(a, e, t) : Sm(a, tt.memoizedState, e, t)
			},
			useTransition: function () {
				var e = Gc(Er)[0],
					t = Mt().memoizedState
				return [typeof e == 'boolean' ? e : Ui(e), t]
			},
			useSyncExternalStore: Kp,
			useId: xm,
			useHostTransitionStatus: Kc,
			useFormState: cm,
			useActionState: cm,
			useOptimistic: function (e, t) {
				var a = Mt()
				return tt !== null
					? tm(a, tt, e, t)
					: ((a.baseState = e), [e, a.queue.dispatch])
			},
			useMemoCache: Hc,
			useCacheRefresh: Am
		},
		Al = null,
		Pi = 0
	function gu(e) {
		var t = Pi
		return ((Pi += 1), Al === null && (Al = []), Hp(Al, e, t))
	}
	function Vi(e, t) {
		;((t = t.props.ref), (e.ref = t !== void 0 ? t : null))
	}
	function bu(e, t) {
		throw t.$$typeof === b
			? Error(i(525))
			: ((e = Object.prototype.toString.call(t)),
				Error(
					i(
						31,
						e === '[object Object]'
							? 'object with keys {' + Object.keys(t).join(', ') + '}'
							: e
					)
				))
	}
	function Dm(e) {
		var t = e._init
		return t(e._payload)
	}
	function Nm(e) {
		function t(V, U) {
			if (e) {
				var k = V.deletions
				k === null ? ((V.deletions = [U]), (V.flags |= 16)) : k.push(U)
			}
		}
		function a(V, U) {
			if (!e) return null
			for (; U !== null; ) (t(V, U), (U = U.sibling))
			return null
		}
		function o(V) {
			for (var U = new Map(); V !== null; )
				(V.key !== null ? U.set(V.key, V) : U.set(V.index, V), (V = V.sibling))
			return U
		}
		function s(V, U) {
			return ((V = yr(V, U)), (V.index = 0), (V.sibling = null), V)
		}
		function f(V, U, k) {
			return (
				(V.index = k),
				e
					? ((k = V.alternate),
						k !== null
							? ((k = k.index), k < U ? ((V.flags |= 67108866), U) : k)
							: ((V.flags |= 67108866), U))
					: ((V.flags |= 1048576), U)
			)
		}
		function g(V) {
			return (e && V.alternate === null && (V.flags |= 67108866), V)
		}
		function E(V, U, k, J) {
			return U === null || U.tag !== 6
				? ((U = yc(k, V.mode, J)), (U.return = V), U)
				: ((U = s(U, k)), (U.return = V), U)
		}
		function N(V, U, k, J) {
			var Re = k.type
			return Re === M
				? K(V, U, k.props.children, J, k.key)
				: U !== null &&
					  (U.elementType === Re ||
							(typeof Re == 'object' &&
								Re !== null &&
								Re.$$typeof === fe &&
								Dm(Re) === U.type))
					? ((U = s(U, k.props)), Vi(U, k), (U.return = V), U)
					: ((U = tu(k.type, k.key, k.props, null, V.mode, J)),
						Vi(U, k),
						(U.return = V),
						U)
		}
		function q(V, U, k, J) {
			return U === null ||
				U.tag !== 4 ||
				U.stateNode.containerInfo !== k.containerInfo ||
				U.stateNode.implementation !== k.implementation
				? ((U = gc(k, V.mode, J)), (U.return = V), U)
				: ((U = s(U, k.children || [])), (U.return = V), U)
		}
		function K(V, U, k, J, Re) {
			return U === null || U.tag !== 7
				? ((U = Aa(k, V.mode, J, Re)), (U.return = V), U)
				: ((U = s(U, k)), (U.return = V), U)
		}
		function W(V, U, k) {
			if (
				(typeof U == 'string' && U !== '') ||
				typeof U == 'number' ||
				typeof U == 'bigint'
			)
				return ((U = yc('' + U, V.mode, k)), (U.return = V), U)
			if (typeof U == 'object' && U !== null) {
				switch (U.$$typeof) {
					case R:
						return (
							(k = tu(U.type, U.key, U.props, null, V.mode, k)),
							Vi(k, U),
							(k.return = V),
							k
						)
					case A:
						return ((U = gc(U, V.mode, k)), (U.return = V), U)
					case fe:
						var J = U._init
						return ((U = J(U._payload)), W(V, U, k))
				}
				if (se(U) || I(U))
					return ((U = Aa(U, V.mode, k, null)), (U.return = V), U)
				if (typeof U.then == 'function') return W(V, gu(U), k)
				if (U.$$typeof === T) return W(V, lu(V, U), k)
				bu(V, U)
			}
			return null
		}
		function F(V, U, k, J) {
			var Re = U !== null ? U.key : null
			if (
				(typeof k == 'string' && k !== '') ||
				typeof k == 'number' ||
				typeof k == 'bigint'
			)
				return Re !== null ? null : E(V, U, '' + k, J)
			if (typeof k == 'object' && k !== null) {
				switch (k.$$typeof) {
					case R:
						return k.key === Re ? N(V, U, k, J) : null
					case A:
						return k.key === Re ? q(V, U, k, J) : null
					case fe:
						return ((Re = k._init), (k = Re(k._payload)), F(V, U, k, J))
				}
				if (se(k) || I(k)) return Re !== null ? null : K(V, U, k, J, null)
				if (typeof k.then == 'function') return F(V, U, gu(k), J)
				if (k.$$typeof === T) return F(V, U, lu(V, k), J)
				bu(V, k)
			}
			return null
		}
		function $(V, U, k, J, Re) {
			if (
				(typeof J == 'string' && J !== '') ||
				typeof J == 'number' ||
				typeof J == 'bigint'
			)
				return ((V = V.get(k) || null), E(U, V, '' + J, Re))
			if (typeof J == 'object' && J !== null) {
				switch (J.$$typeof) {
					case R:
						return (
							(V = V.get(J.key === null ? k : J.key) || null),
							N(U, V, J, Re)
						)
					case A:
						return (
							(V = V.get(J.key === null ? k : J.key) || null),
							q(U, V, J, Re)
						)
					case fe:
						var ke = J._init
						return ((J = ke(J._payload)), $(V, U, k, J, Re))
				}
				if (se(J) || I(J)) return ((V = V.get(k) || null), K(U, V, J, Re, null))
				if (typeof J.then == 'function') return $(V, U, k, gu(J), Re)
				if (J.$$typeof === T) return $(V, U, k, lu(U, J), Re)
				bu(U, J)
			}
			return null
		}
		function Me(V, U, k, J) {
			for (
				var Re = null, ke = null, Ce = U, Oe = (U = 0), Gt = null;
				Ce !== null && Oe < k.length;
				Oe++
			) {
				Ce.index > Oe ? ((Gt = Ce), (Ce = null)) : (Gt = Ce.sibling)
				var Ke = F(V, Ce, k[Oe], J)
				if (Ke === null) {
					Ce === null && (Ce = Gt)
					break
				}
				;(e && Ce && Ke.alternate === null && t(V, Ce),
					(U = f(Ke, U, Oe)),
					ke === null ? (Re = Ke) : (ke.sibling = Ke),
					(ke = Ke),
					(Ce = Gt))
			}
			if (Oe === k.length) return (a(V, Ce), Xe && Ca(V, Oe), Re)
			if (Ce === null) {
				for (; Oe < k.length; Oe++)
					((Ce = W(V, k[Oe], J)),
						Ce !== null &&
							((U = f(Ce, U, Oe)),
							ke === null ? (Re = Ce) : (ke.sibling = Ce),
							(ke = Ce)))
				return (Xe && Ca(V, Oe), Re)
			}
			for (Ce = o(Ce); Oe < k.length; Oe++)
				((Gt = $(Ce, V, Oe, k[Oe], J)),
					Gt !== null &&
						(e &&
							Gt.alternate !== null &&
							Ce.delete(Gt.key === null ? Oe : Gt.key),
						(U = f(Gt, U, Oe)),
						ke === null ? (Re = Gt) : (ke.sibling = Gt),
						(ke = Gt)))
			return (
				e &&
					Ce.forEach(function (sa) {
						return t(V, sa)
					}),
				Xe && Ca(V, Oe),
				Re
			)
		}
		function Te(V, U, k, J) {
			if (k == null) throw Error(i(151))
			for (
				var Re = null,
					ke = null,
					Ce = U,
					Oe = (U = 0),
					Gt = null,
					Ke = k.next();
				Ce !== null && !Ke.done;
				Oe++, Ke = k.next()
			) {
				Ce.index > Oe ? ((Gt = Ce), (Ce = null)) : (Gt = Ce.sibling)
				var sa = F(V, Ce, Ke.value, J)
				if (sa === null) {
					Ce === null && (Ce = Gt)
					break
				}
				;(e && Ce && sa.alternate === null && t(V, Ce),
					(U = f(sa, U, Oe)),
					ke === null ? (Re = sa) : (ke.sibling = sa),
					(ke = sa),
					(Ce = Gt))
			}
			if (Ke.done) return (a(V, Ce), Xe && Ca(V, Oe), Re)
			if (Ce === null) {
				for (; !Ke.done; Oe++, Ke = k.next())
					((Ke = W(V, Ke.value, J)),
						Ke !== null &&
							((U = f(Ke, U, Oe)),
							ke === null ? (Re = Ke) : (ke.sibling = Ke),
							(ke = Ke)))
				return (Xe && Ca(V, Oe), Re)
			}
			for (Ce = o(Ce); !Ke.done; Oe++, Ke = k.next())
				((Ke = $(Ce, V, Oe, Ke.value, J)),
					Ke !== null &&
						(e &&
							Ke.alternate !== null &&
							Ce.delete(Ke.key === null ? Oe : Ke.key),
						(U = f(Ke, U, Oe)),
						ke === null ? (Re = Ke) : (ke.sibling = Ke),
						(ke = Ke)))
			return (
				e &&
					Ce.forEach(function (A1) {
						return t(V, A1)
					}),
				Xe && Ca(V, Oe),
				Re
			)
		}
		function rt(V, U, k, J) {
			if (
				(typeof k == 'object' &&
					k !== null &&
					k.type === M &&
					k.key === null &&
					(k = k.props.children),
				typeof k == 'object' && k !== null)
			) {
				switch (k.$$typeof) {
					case R:
						e: {
							for (var Re = k.key; U !== null; ) {
								if (U.key === Re) {
									if (((Re = k.type), Re === M)) {
										if (U.tag === 7) {
											;(a(V, U.sibling),
												(J = s(U, k.props.children)),
												(J.return = V),
												(V = J))
											break e
										}
									} else if (
										U.elementType === Re ||
										(typeof Re == 'object' &&
											Re !== null &&
											Re.$$typeof === fe &&
											Dm(Re) === U.type)
									) {
										;(a(V, U.sibling),
											(J = s(U, k.props)),
											Vi(J, k),
											(J.return = V),
											(V = J))
										break e
									}
									a(V, U)
									break
								} else t(V, U)
								U = U.sibling
							}
							k.type === M
								? ((J = Aa(k.props.children, V.mode, J, k.key)),
									(J.return = V),
									(V = J))
								: ((J = tu(k.type, k.key, k.props, null, V.mode, J)),
									Vi(J, k),
									(J.return = V),
									(V = J))
						}
						return g(V)
					case A:
						e: {
							for (Re = k.key; U !== null; ) {
								if (U.key === Re)
									if (
										U.tag === 4 &&
										U.stateNode.containerInfo === k.containerInfo &&
										U.stateNode.implementation === k.implementation
									) {
										;(a(V, U.sibling),
											(J = s(U, k.children || [])),
											(J.return = V),
											(V = J))
										break e
									} else {
										a(V, U)
										break
									}
								else t(V, U)
								U = U.sibling
							}
							;((J = gc(k, V.mode, J)), (J.return = V), (V = J))
						}
						return g(V)
					case fe:
						return ((Re = k._init), (k = Re(k._payload)), rt(V, U, k, J))
				}
				if (se(k)) return Me(V, U, k, J)
				if (I(k)) {
					if (((Re = I(k)), typeof Re != 'function')) throw Error(i(150))
					return ((k = Re.call(k)), Te(V, U, k, J))
				}
				if (typeof k.then == 'function') return rt(V, U, gu(k), J)
				if (k.$$typeof === T) return rt(V, U, lu(V, k), J)
				bu(V, k)
			}
			return (typeof k == 'string' && k !== '') ||
				typeof k == 'number' ||
				typeof k == 'bigint'
				? ((k = '' + k),
					U !== null && U.tag === 6
						? (a(V, U.sibling), (J = s(U, k)), (J.return = V), (V = J))
						: (a(V, U), (J = yc(k, V.mode, J)), (J.return = V), (V = J)),
					g(V))
				: a(V, U)
		}
		return function (V, U, k, J) {
			try {
				Pi = 0
				var Re = rt(V, U, k, J)
				return ((Al = null), Re)
			} catch (Ce) {
				if (Ce === Oi || Ce === ou) throw Ce
				var ke = _n(29, Ce, null, V.mode)
				return ((ke.lanes = J), (ke.return = V), ke)
			} finally {
			}
		}
	}
	var wl = Nm(!0),
		jm = Nm(!1),
		Un = Y(null),
		sr = null
	function Qr(e) {
		var t = e.alternate
		;(le(zt, zt.current & 1),
			le(Un, e),
			sr === null &&
				(t === null || _l.current !== null || t.memoizedState !== null) &&
				(sr = e))
	}
	function Lm(e) {
		if (e.tag === 22) {
			if ((le(zt, zt.current), le(Un, e), sr === null)) {
				var t = e.alternate
				t !== null && t.memoizedState !== null && (sr = e)
			}
		} else Kr()
	}
	function Kr() {
		;(le(zt, zt.current), le(Un, Un.current))
	}
	function Rr(e) {
		;(ie(Un), sr === e && (sr = null), ie(zt))
	}
	var zt = Y(0)
	function Su(e) {
		for (var t = e; t !== null; ) {
			if (t.tag === 13) {
				var a = t.memoizedState
				if (
					a !== null &&
					((a = a.dehydrated), a === null || a.data === '$?' || Hf(a))
				)
					return t
			} else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
				if ((t.flags & 128) !== 0) return t
			} else if (t.child !== null) {
				;((t.child.return = t), (t = t.child))
				continue
			}
			if (t === e) break
			for (; t.sibling === null; ) {
				if (t.return === null || t.return === e) return null
				t = t.return
			}
			;((t.sibling.return = t.return), (t = t.sibling))
		}
		return null
	}
	function Zc(e, t, a, o) {
		;((t = e.memoizedState),
			(a = a(o, t)),
			(a = a == null ? t : y({}, t, a)),
			(e.memoizedState = a),
			e.lanes === 0 && (e.updateQueue.baseState = a))
	}
	var Jc = {
		enqueueSetState: function (e, t, a) {
			e = e._reactInternals
			var o = An(),
				s = $r(o)
			;((s.payload = t),
				a != null && (s.callback = a),
				(t = Ir(e, s, o)),
				t !== null && (wn(t, e, o), Di(t, e, o)))
		},
		enqueueReplaceState: function (e, t, a) {
			e = e._reactInternals
			var o = An(),
				s = $r(o)
			;((s.tag = 1),
				(s.payload = t),
				a != null && (s.callback = a),
				(t = Ir(e, s, o)),
				t !== null && (wn(t, e, o), Di(t, e, o)))
		},
		enqueueForceUpdate: function (e, t) {
			e = e._reactInternals
			var a = An(),
				o = $r(a)
			;((o.tag = 2),
				t != null && (o.callback = t),
				(t = Ir(e, o, a)),
				t !== null && (wn(t, e, a), Di(t, e, a)))
		}
	}
	function Um(e, t, a, o, s, f, g) {
		return (
			(e = e.stateNode),
			typeof e.shouldComponentUpdate == 'function'
				? e.shouldComponentUpdate(o, f, g)
				: t.prototype && t.prototype.isPureReactComponent
					? !_i(a, o) || !_i(s, f)
					: !0
		)
	}
	function zm(e, t, a, o) {
		;((e = t.state),
			typeof t.componentWillReceiveProps == 'function' &&
				t.componentWillReceiveProps(a, o),
			typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
				t.UNSAFE_componentWillReceiveProps(a, o),
			t.state !== e && Jc.enqueueReplaceState(t, t.state, null))
	}
	function La(e, t) {
		var a = t
		if ('ref' in t) {
			a = {}
			for (var o in t) o !== 'ref' && (a[o] = t[o])
		}
		if ((e = e.defaultProps)) {
			a === t && (a = y({}, a))
			for (var s in e) a[s] === void 0 && (a[s] = e[s])
		}
		return a
	}
	var _u =
		typeof reportError == 'function'
			? reportError
			: function (e) {
					if (
						typeof window == 'object' &&
						typeof window.ErrorEvent == 'function'
					) {
						var t = new window.ErrorEvent('error', {
							bubbles: !0,
							cancelable: !0,
							message:
								typeof e == 'object' &&
								e !== null &&
								typeof e.message == 'string'
									? String(e.message)
									: String(e),
							error: e
						})
						if (!window.dispatchEvent(t)) return
					} else if (
						typeof process == 'object' &&
						typeof process.emit == 'function'
					) {
						process.emit('uncaughtException', e)
						return
					}
					console.error(e)
				}
	function Bm(e) {
		_u(e)
	}
	function Pm(e) {
		console.error(e)
	}
	function Vm(e) {
		_u(e)
	}
	function Eu(e, t) {
		try {
			var a = e.onUncaughtError
			a(t.value, { componentStack: t.stack })
		} catch (o) {
			setTimeout(function () {
				throw o
			})
		}
	}
	function km(e, t, a) {
		try {
			var o = e.onCaughtError
			o(a.value, {
				componentStack: a.stack,
				errorBoundary: t.tag === 1 ? t.stateNode : null
			})
		} catch (s) {
			setTimeout(function () {
				throw s
			})
		}
	}
	function Wc(e, t, a) {
		return (
			(a = $r(a)),
			(a.tag = 3),
			(a.payload = { element: null }),
			(a.callback = function () {
				Eu(e, t)
			}),
			a
		)
	}
	function Hm(e) {
		return ((e = $r(e)), (e.tag = 3), e)
	}
	function qm(e, t, a, o) {
		var s = a.type.getDerivedStateFromError
		if (typeof s == 'function') {
			var f = o.value
			;((e.payload = function () {
				return s(f)
			}),
				(e.callback = function () {
					km(t, a, o)
				}))
		}
		var g = a.stateNode
		g !== null &&
			typeof g.componentDidCatch == 'function' &&
			(e.callback = function () {
				;(km(t, a, o),
					typeof s != 'function' &&
						(ta === null ? (ta = new Set([this])) : ta.add(this)))
				var E = o.stack
				this.componentDidCatch(o.value, { componentStack: E !== null ? E : '' })
			})
	}
	function AE(e, t, a, o, s) {
		if (
			((a.flags |= 32768),
			o !== null && typeof o == 'object' && typeof o.then == 'function')
		) {
			if (
				((t = a.alternate),
				t !== null && wi(t, a, s, !0),
				(a = Un.current),
				a !== null)
			) {
				switch (a.tag) {
					case 13:
						return (
							sr === null ? xf() : a.alternate === null && _t === 0 && (_t = 3),
							(a.flags &= -257),
							(a.flags |= 65536),
							(a.lanes = s),
							o === Tc
								? (a.flags |= 16384)
								: ((t = a.updateQueue),
									t === null ? (a.updateQueue = new Set([o])) : t.add(o),
									wf(e, o, s)),
							!1
						)
					case 22:
						return (
							(a.flags |= 65536),
							o === Tc
								? (a.flags |= 16384)
								: ((t = a.updateQueue),
									t === null
										? ((t = {
												transitions: null,
												markerInstances: null,
												retryQueue: new Set([o])
											}),
											(a.updateQueue = t))
										: ((a = t.retryQueue),
											a === null ? (t.retryQueue = new Set([o])) : a.add(o)),
									wf(e, o, s)),
							!1
						)
				}
				throw Error(i(435, a.tag))
			}
			return (wf(e, o, s), xf(), !1)
		}
		if (Xe)
			return (
				(t = Un.current),
				t !== null
					? ((t.flags & 65536) === 0 && (t.flags |= 256),
						(t.flags |= 65536),
						(t.lanes = s),
						o !== _c && ((e = Error(i(422), { cause: o })), Ai(Dn(e, a))))
					: (o !== _c && ((t = Error(i(423), { cause: o })), Ai(Dn(t, a))),
						(e = e.current.alternate),
						(e.flags |= 65536),
						(s &= -s),
						(e.lanes |= s),
						(o = Dn(o, a)),
						(s = Wc(e.stateNode, o, s)),
						Dc(e, s),
						_t !== 4 && (_t = 2)),
				!1
			)
		var f = Error(i(520), { cause: o })
		if (
			((f = Dn(f, a)),
			Ii === null ? (Ii = [f]) : Ii.push(f),
			_t !== 4 && (_t = 2),
			t === null)
		)
			return !0
		;((o = Dn(o, a)), (a = t))
		do {
			switch (a.tag) {
				case 3:
					return (
						(a.flags |= 65536),
						(e = s & -s),
						(a.lanes |= e),
						(e = Wc(a.stateNode, o, e)),
						Dc(a, e),
						!1
					)
				case 1:
					if (
						((t = a.type),
						(f = a.stateNode),
						(a.flags & 128) === 0 &&
							(typeof t.getDerivedStateFromError == 'function' ||
								(f !== null &&
									typeof f.componentDidCatch == 'function' &&
									(ta === null || !ta.has(f)))))
					)
						return (
							(a.flags |= 65536),
							(s &= -s),
							(a.lanes |= s),
							(s = Hm(s)),
							qm(s, e, a, o),
							Dc(a, s),
							!1
						)
			}
			a = a.return
		} while (a !== null)
		return !1
	}
	var Gm = Error(i(461)),
		Ht = !1
	function $t(e, t, a, o) {
		t.child = e === null ? jm(t, null, a, o) : wl(t, e.child, a, o)
	}
	function Fm(e, t, a, o, s) {
		a = a.render
		var f = t.ref
		if ('ref' in o) {
			var g = {}
			for (var E in o) E !== 'ref' && (g[E] = o[E])
		} else g = o
		return (
			Da(t),
			(o = zc(e, t, a, g, f, s)),
			(E = Bc()),
			e !== null && !Ht
				? (Pc(e, t, s), xr(e, t, s))
				: (Xe && E && bc(t), (t.flags |= 1), $t(e, t, o, s), t.child)
		)
	}
	function $m(e, t, a, o, s) {
		if (e === null) {
			var f = a.type
			return typeof f == 'function' &&
				!vc(f) &&
				f.defaultProps === void 0 &&
				a.compare === null
				? ((t.tag = 15), (t.type = f), Im(e, t, f, o, s))
				: ((e = tu(a.type, null, o, t, t.mode, s)),
					(e.ref = t.ref),
					(e.return = t),
					(t.child = e))
		}
		if (((f = e.child), !uf(e, s))) {
			var g = f.memoizedProps
			if (
				((a = a.compare), (a = a !== null ? a : _i), a(g, o) && e.ref === t.ref)
			)
				return xr(e, t, s)
		}
		return (
			(t.flags |= 1),
			(e = yr(f, o)),
			(e.ref = t.ref),
			(e.return = t),
			(t.child = e)
		)
	}
	function Im(e, t, a, o, s) {
		if (e !== null) {
			var f = e.memoizedProps
			if (_i(f, o) && e.ref === t.ref)
				if (((Ht = !1), (t.pendingProps = o = f), uf(e, s)))
					(e.flags & 131072) !== 0 && (Ht = !0)
				else return ((t.lanes = e.lanes), xr(e, t, s))
		}
		return ef(e, t, a, o, s)
	}
	function Ym(e, t, a) {
		var o = t.pendingProps,
			s = o.children,
			f = e !== null ? e.memoizedState : null
		if (o.mode === 'hidden') {
			if ((t.flags & 128) !== 0) {
				if (((o = f !== null ? f.baseLanes | a : a), e !== null)) {
					for (s = t.child = e.child, f = 0; s !== null; )
						((f = f | s.lanes | s.childLanes), (s = s.sibling))
					t.childLanes = f & ~o
				} else ((t.childLanes = 0), (t.child = null))
				return Qm(e, t, o, a)
			}
			if ((a & 536870912) !== 0)
				((t.memoizedState = { baseLanes: 0, cachePool: null }),
					e !== null && iu(t, f !== null ? f.cachePool : null),
					f !== null ? Ip(t, f) : jc(),
					Lm(t))
			else
				return (
					(t.lanes = t.childLanes = 536870912),
					Qm(e, t, f !== null ? f.baseLanes | a : a, a)
				)
		} else
			f !== null
				? (iu(t, f.cachePool), Ip(t, f), Kr(), (t.memoizedState = null))
				: (e !== null && iu(t, null), jc(), Kr())
		return ($t(e, t, s, a), t.child)
	}
	function Qm(e, t, a, o) {
		var s = Cc()
		return (
			(s = s === null ? null : { parent: Ut._currentValue, pool: s }),
			(t.memoizedState = { baseLanes: a, cachePool: s }),
			e !== null && iu(t, null),
			jc(),
			Lm(t),
			e !== null && wi(e, t, o, !0),
			null
		)
	}
	function Ru(e, t) {
		var a = t.ref
		if (a === null) e !== null && e.ref !== null && (t.flags |= 4194816)
		else {
			if (typeof a != 'function' && typeof a != 'object') throw Error(i(284))
			;(e === null || e.ref !== a) && (t.flags |= 4194816)
		}
	}
	function ef(e, t, a, o, s) {
		return (
			Da(t),
			(a = zc(e, t, a, o, void 0, s)),
			(o = Bc()),
			e !== null && !Ht
				? (Pc(e, t, s), xr(e, t, s))
				: (Xe && o && bc(t), (t.flags |= 1), $t(e, t, a, s), t.child)
		)
	}
	function Km(e, t, a, o, s, f) {
		return (
			Da(t),
			(t.updateQueue = null),
			(a = Qp(t, o, a, s)),
			Yp(e),
			(o = Bc()),
			e !== null && !Ht
				? (Pc(e, t, f), xr(e, t, f))
				: (Xe && o && bc(t), (t.flags |= 1), $t(e, t, a, f), t.child)
		)
	}
	function Xm(e, t, a, o, s) {
		if ((Da(t), t.stateNode === null)) {
			var f = vl,
				g = a.contextType
			;(typeof g == 'object' && g !== null && (f = Wt(g)),
				(f = new a(o, f)),
				(t.memoizedState =
					f.state !== null && f.state !== void 0 ? f.state : null),
				(f.updater = Jc),
				(t.stateNode = f),
				(f._reactInternals = t),
				(f = t.stateNode),
				(f.props = o),
				(f.state = t.memoizedState),
				(f.refs = {}),
				Oc(t),
				(g = a.contextType),
				(f.context = typeof g == 'object' && g !== null ? Wt(g) : vl),
				(f.state = t.memoizedState),
				(g = a.getDerivedStateFromProps),
				typeof g == 'function' && (Zc(t, a, g, o), (f.state = t.memoizedState)),
				typeof a.getDerivedStateFromProps == 'function' ||
					typeof f.getSnapshotBeforeUpdate == 'function' ||
					(typeof f.UNSAFE_componentWillMount != 'function' &&
						typeof f.componentWillMount != 'function') ||
					((g = f.state),
					typeof f.componentWillMount == 'function' && f.componentWillMount(),
					typeof f.UNSAFE_componentWillMount == 'function' &&
						f.UNSAFE_componentWillMount(),
					g !== f.state && Jc.enqueueReplaceState(f, f.state, null),
					ji(t, o, f, s),
					Ni(),
					(f.state = t.memoizedState)),
				typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
				(o = !0))
		} else if (e === null) {
			f = t.stateNode
			var E = t.memoizedProps,
				N = La(a, E)
			f.props = N
			var q = f.context,
				K = a.contextType
			;((g = vl), typeof K == 'object' && K !== null && (g = Wt(K)))
			var W = a.getDerivedStateFromProps
			;((K =
				typeof W == 'function' ||
				typeof f.getSnapshotBeforeUpdate == 'function'),
				(E = t.pendingProps !== E),
				K ||
					(typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
						typeof f.componentWillReceiveProps != 'function') ||
					((E || q !== g) && zm(t, f, o, g)),
				(Fr = !1))
			var F = t.memoizedState
			;((f.state = F),
				ji(t, o, f, s),
				Ni(),
				(q = t.memoizedState),
				E || F !== q || Fr
					? (typeof W == 'function' && (Zc(t, a, W, o), (q = t.memoizedState)),
						(N = Fr || Um(t, a, N, o, F, q, g))
							? (K ||
									(typeof f.UNSAFE_componentWillMount != 'function' &&
										typeof f.componentWillMount != 'function') ||
									(typeof f.componentWillMount == 'function' &&
										f.componentWillMount(),
									typeof f.UNSAFE_componentWillMount == 'function' &&
										f.UNSAFE_componentWillMount()),
								typeof f.componentDidMount == 'function' &&
									(t.flags |= 4194308))
							: (typeof f.componentDidMount == 'function' &&
									(t.flags |= 4194308),
								(t.memoizedProps = o),
								(t.memoizedState = q)),
						(f.props = o),
						(f.state = q),
						(f.context = g),
						(o = N))
					: (typeof f.componentDidMount == 'function' && (t.flags |= 4194308),
						(o = !1)))
		} else {
			;((f = t.stateNode),
				Mc(e, t),
				(g = t.memoizedProps),
				(K = La(a, g)),
				(f.props = K),
				(W = t.pendingProps),
				(F = f.context),
				(q = a.contextType),
				(N = vl),
				typeof q == 'object' && q !== null && (N = Wt(q)),
				(E = a.getDerivedStateFromProps),
				(q =
					typeof E == 'function' ||
					typeof f.getSnapshotBeforeUpdate == 'function') ||
					(typeof f.UNSAFE_componentWillReceiveProps != 'function' &&
						typeof f.componentWillReceiveProps != 'function') ||
					((g !== W || F !== N) && zm(t, f, o, N)),
				(Fr = !1),
				(F = t.memoizedState),
				(f.state = F),
				ji(t, o, f, s),
				Ni())
			var $ = t.memoizedState
			g !== W ||
			F !== $ ||
			Fr ||
			(e !== null && e.dependencies !== null && au(e.dependencies))
				? (typeof E == 'function' && (Zc(t, a, E, o), ($ = t.memoizedState)),
					(K =
						Fr ||
						Um(t, a, K, o, F, $, N) ||
						(e !== null && e.dependencies !== null && au(e.dependencies)))
						? (q ||
								(typeof f.UNSAFE_componentWillUpdate != 'function' &&
									typeof f.componentWillUpdate != 'function') ||
								(typeof f.componentWillUpdate == 'function' &&
									f.componentWillUpdate(o, $, N),
								typeof f.UNSAFE_componentWillUpdate == 'function' &&
									f.UNSAFE_componentWillUpdate(o, $, N)),
							typeof f.componentDidUpdate == 'function' && (t.flags |= 4),
							typeof f.getSnapshotBeforeUpdate == 'function' &&
								(t.flags |= 1024))
						: (typeof f.componentDidUpdate != 'function' ||
								(g === e.memoizedProps && F === e.memoizedState) ||
								(t.flags |= 4),
							typeof f.getSnapshotBeforeUpdate != 'function' ||
								(g === e.memoizedProps && F === e.memoizedState) ||
								(t.flags |= 1024),
							(t.memoizedProps = o),
							(t.memoizedState = $)),
					(f.props = o),
					(f.state = $),
					(f.context = N),
					(o = K))
				: (typeof f.componentDidUpdate != 'function' ||
						(g === e.memoizedProps && F === e.memoizedState) ||
						(t.flags |= 4),
					typeof f.getSnapshotBeforeUpdate != 'function' ||
						(g === e.memoizedProps && F === e.memoizedState) ||
						(t.flags |= 1024),
					(o = !1))
		}
		return (
			(f = o),
			Ru(e, t),
			(o = (t.flags & 128) !== 0),
			f || o
				? ((f = t.stateNode),
					(a =
						o && typeof a.getDerivedStateFromError != 'function'
							? null
							: f.render()),
					(t.flags |= 1),
					e !== null && o
						? ((t.child = wl(t, e.child, null, s)),
							(t.child = wl(t, null, a, s)))
						: $t(e, t, a, s),
					(t.memoizedState = f.state),
					(e = t.child))
				: (e = xr(e, t, s)),
			e
		)
	}
	function Zm(e, t, a, o) {
		return (xi(), (t.flags |= 256), $t(e, t, a, o), t.child)
	}
	var tf = {
		dehydrated: null,
		treeContext: null,
		retryLane: 0,
		hydrationErrors: null
	}
	function nf(e) {
		return { baseLanes: e, cachePool: Pp() }
	}
	function rf(e, t, a) {
		return ((e = e !== null ? e.childLanes & ~a : 0), t && (e |= zn), e)
	}
	function Jm(e, t, a) {
		var o = t.pendingProps,
			s = !1,
			f = (t.flags & 128) !== 0,
			g
		if (
			((g = f) ||
				(g =
					e !== null && e.memoizedState === null ? !1 : (zt.current & 2) !== 0),
			g && ((s = !0), (t.flags &= -129)),
			(g = (t.flags & 32) !== 0),
			(t.flags &= -33),
			e === null)
		) {
			if (Xe) {
				if ((s ? Qr(t) : Kr(), Xe)) {
					var E = St,
						N
					if ((N = E)) {
						e: {
							for (N = E, E = ur; N.nodeType !== 8; ) {
								if (!E) {
									E = null
									break e
								}
								if (((N = Kn(N.nextSibling)), N === null)) {
									E = null
									break e
								}
							}
							E = N
						}
						E !== null
							? ((t.memoizedState = {
									dehydrated: E,
									treeContext: wa !== null ? { id: gr, overflow: br } : null,
									retryLane: 536870912,
									hydrationErrors: null
								}),
								(N = _n(18, null, null, 0)),
								(N.stateNode = E),
								(N.return = t),
								(t.child = N),
								(rn = t),
								(St = null),
								(N = !0))
							: (N = !1)
					}
					N || Oa(t)
				}
				if (
					((E = t.memoizedState),
					E !== null && ((E = E.dehydrated), E !== null))
				)
					return (Hf(E) ? (t.lanes = 32) : (t.lanes = 536870912), null)
				Rr(t)
			}
			return (
				(E = o.children),
				(o = o.fallback),
				s
					? (Kr(),
						(s = t.mode),
						(E = xu({ mode: 'hidden', children: E }, s)),
						(o = Aa(o, s, a, null)),
						(E.return = t),
						(o.return = t),
						(E.sibling = o),
						(t.child = E),
						(s = t.child),
						(s.memoizedState = nf(a)),
						(s.childLanes = rf(e, g, a)),
						(t.memoizedState = tf),
						o)
					: (Qr(t), af(t, E))
			)
		}
		if (
			((N = e.memoizedState), N !== null && ((E = N.dehydrated), E !== null))
		) {
			if (f)
				t.flags & 256
					? (Qr(t), (t.flags &= -257), (t = lf(e, t, a)))
					: t.memoizedState !== null
						? (Kr(), (t.child = e.child), (t.flags |= 128), (t = null))
						: (Kr(),
							(s = o.fallback),
							(E = t.mode),
							(o = xu({ mode: 'visible', children: o.children }, E)),
							(s = Aa(s, E, a, null)),
							(s.flags |= 2),
							(o.return = t),
							(s.return = t),
							(o.sibling = s),
							(t.child = o),
							wl(t, e.child, null, a),
							(o = t.child),
							(o.memoizedState = nf(a)),
							(o.childLanes = rf(e, g, a)),
							(t.memoizedState = tf),
							(t = s))
			else if ((Qr(t), Hf(E))) {
				if (((g = E.nextSibling && E.nextSibling.dataset), g)) var q = g.dgst
				;((g = q),
					(o = Error(i(419))),
					(o.stack = ''),
					(o.digest = g),
					Ai({ value: o, source: null, stack: null }),
					(t = lf(e, t, a)))
			} else if (
				(Ht || wi(e, t, a, !1), (g = (a & e.childLanes) !== 0), Ht || g)
			) {
				if (
					((g = ut),
					g !== null &&
						((o = a & -a),
						(o = (o & 42) !== 0 ? 1 : ni(o)),
						(o = (o & (g.suspendedLanes | a)) !== 0 ? 0 : o),
						o !== 0 && o !== N.retryLane))
				)
					throw ((N.retryLane = o), ml(e, o), wn(g, e, o), Gm)
				;(E.data === '$?' || xf(), (t = lf(e, t, a)))
			} else
				E.data === '$?'
					? ((t.flags |= 192), (t.child = e.child), (t = null))
					: ((e = N.treeContext),
						(St = Kn(E.nextSibling)),
						(rn = t),
						(Xe = !0),
						(Ta = null),
						(ur = !1),
						e !== null &&
							((jn[Ln++] = gr),
							(jn[Ln++] = br),
							(jn[Ln++] = wa),
							(gr = e.id),
							(br = e.overflow),
							(wa = t)),
						(t = af(t, o.children)),
						(t.flags |= 4096))
			return t
		}
		return s
			? (Kr(),
				(s = o.fallback),
				(E = t.mode),
				(N = e.child),
				(q = N.sibling),
				(o = yr(N, { mode: 'hidden', children: o.children })),
				(o.subtreeFlags = N.subtreeFlags & 65011712),
				q !== null ? (s = yr(q, s)) : ((s = Aa(s, E, a, null)), (s.flags |= 2)),
				(s.return = t),
				(o.return = t),
				(o.sibling = s),
				(t.child = o),
				(o = s),
				(s = t.child),
				(E = e.child.memoizedState),
				E === null
					? (E = nf(a))
					: ((N = E.cachePool),
						N !== null
							? ((q = Ut._currentValue),
								(N = N.parent !== q ? { parent: q, pool: q } : N))
							: (N = Pp()),
						(E = { baseLanes: E.baseLanes | a, cachePool: N })),
				(s.memoizedState = E),
				(s.childLanes = rf(e, g, a)),
				(t.memoizedState = tf),
				o)
			: (Qr(t),
				(a = e.child),
				(e = a.sibling),
				(a = yr(a, { mode: 'visible', children: o.children })),
				(a.return = t),
				(a.sibling = null),
				e !== null &&
					((g = t.deletions),
					g === null ? ((t.deletions = [e]), (t.flags |= 16)) : g.push(e)),
				(t.child = a),
				(t.memoizedState = null),
				a)
	}
	function af(e, t) {
		return (
			(t = xu({ mode: 'visible', children: t }, e.mode)),
			(t.return = e),
			(e.child = t)
		)
	}
	function xu(e, t) {
		return (
			(e = _n(22, e, null, t)),
			(e.lanes = 0),
			(e.stateNode = {
				_visibility: 1,
				_pendingMarkers: null,
				_retryCache: null,
				_transitions: null
			}),
			e
		)
	}
	function lf(e, t, a) {
		return (
			wl(t, e.child, null, a),
			(e = af(t, t.pendingProps.children)),
			(e.flags |= 2),
			(t.memoizedState = null),
			e
		)
	}
	function Wm(e, t, a) {
		e.lanes |= t
		var o = e.alternate
		;(o !== null && (o.lanes |= t), Rc(e.return, t, a))
	}
	function of(e, t, a, o, s) {
		var f = e.memoizedState
		f === null
			? (e.memoizedState = {
					isBackwards: t,
					rendering: null,
					renderingStartTime: 0,
					last: o,
					tail: a,
					tailMode: s
				})
			: ((f.isBackwards = t),
				(f.rendering = null),
				(f.renderingStartTime = 0),
				(f.last = o),
				(f.tail = a),
				(f.tailMode = s))
	}
	function ev(e, t, a) {
		var o = t.pendingProps,
			s = o.revealOrder,
			f = o.tail
		if (($t(e, t, o.children, a), (o = zt.current), (o & 2) !== 0))
			((o = (o & 1) | 2), (t.flags |= 128))
		else {
			if (e !== null && (e.flags & 128) !== 0)
				e: for (e = t.child; e !== null; ) {
					if (e.tag === 13) e.memoizedState !== null && Wm(e, a, t)
					else if (e.tag === 19) Wm(e, a, t)
					else if (e.child !== null) {
						;((e.child.return = e), (e = e.child))
						continue
					}
					if (e === t) break e
					for (; e.sibling === null; ) {
						if (e.return === null || e.return === t) break e
						e = e.return
					}
					;((e.sibling.return = e.return), (e = e.sibling))
				}
			o &= 1
		}
		switch ((le(zt, o), s)) {
			case 'forwards':
				for (a = t.child, s = null; a !== null; )
					((e = a.alternate),
						e !== null && Su(e) === null && (s = a),
						(a = a.sibling))
				;((a = s),
					a === null
						? ((s = t.child), (t.child = null))
						: ((s = a.sibling), (a.sibling = null)),
					of(t, !1, s, a, f))
				break
			case 'backwards':
				for (a = null, s = t.child, t.child = null; s !== null; ) {
					if (((e = s.alternate), e !== null && Su(e) === null)) {
						t.child = s
						break
					}
					;((e = s.sibling), (s.sibling = a), (a = s), (s = e))
				}
				of(t, !0, a, null, f)
				break
			case 'together':
				of(t, !1, null, null, void 0)
				break
			default:
				t.memoizedState = null
		}
		return t.child
	}
	function xr(e, t, a) {
		if (
			(e !== null && (t.dependencies = e.dependencies),
			(ea |= t.lanes),
			(a & t.childLanes) === 0)
		)
			if (e !== null) {
				if ((wi(e, t, a, !1), (a & t.childLanes) === 0)) return null
			} else return null
		if (e !== null && t.child !== e.child) throw Error(i(153))
		if (t.child !== null) {
			for (
				e = t.child, a = yr(e, e.pendingProps), t.child = a, a.return = t;
				e.sibling !== null;
			)
				((e = e.sibling),
					(a = a.sibling = yr(e, e.pendingProps)),
					(a.return = t))
			a.sibling = null
		}
		return t.child
	}
	function uf(e, t) {
		return (e.lanes & t) !== 0
			? !0
			: ((e = e.dependencies), !!(e !== null && au(e)))
	}
	function wE(e, t, a) {
		switch (t.tag) {
			case 3:
				;(Ae(t, t.stateNode.containerInfo),
					Gr(t, Ut, e.memoizedState.cache),
					xi())
				break
			case 27:
			case 5:
				Be(t)
				break
			case 4:
				Ae(t, t.stateNode.containerInfo)
				break
			case 10:
				Gr(t, t.type, t.memoizedProps.value)
				break
			case 13:
				var o = t.memoizedState
				if (o !== null)
					return o.dehydrated !== null
						? (Qr(t), (t.flags |= 128), null)
						: (a & t.child.childLanes) !== 0
							? Jm(e, t, a)
							: (Qr(t), (e = xr(e, t, a)), e !== null ? e.sibling : null)
				Qr(t)
				break
			case 19:
				var s = (e.flags & 128) !== 0
				if (
					((o = (a & t.childLanes) !== 0),
					o || (wi(e, t, a, !1), (o = (a & t.childLanes) !== 0)),
					s)
				) {
					if (o) return ev(e, t, a)
					t.flags |= 128
				}
				if (
					((s = t.memoizedState),
					s !== null &&
						((s.rendering = null), (s.tail = null), (s.lastEffect = null)),
					le(zt, zt.current),
					o)
				)
					break
				return null
			case 22:
			case 23:
				return ((t.lanes = 0), Ym(e, t, a))
			case 24:
				Gr(t, Ut, e.memoizedState.cache)
		}
		return xr(e, t, a)
	}
	function tv(e, t, a) {
		if (e !== null)
			if (e.memoizedProps !== t.pendingProps) Ht = !0
			else {
				if (!uf(e, a) && (t.flags & 128) === 0) return ((Ht = !1), wE(e, t, a))
				Ht = (e.flags & 131072) !== 0
			}
		else ((Ht = !1), Xe && (t.flags & 1048576) !== 0 && Dp(t, ru, t.index))
		switch (((t.lanes = 0), t.tag)) {
			case 16:
				e: {
					e = t.pendingProps
					var o = t.elementType,
						s = o._init
					if (((o = s(o._payload)), (t.type = o), typeof o == 'function'))
						vc(o)
							? ((e = La(o, e)), (t.tag = 1), (t = Xm(null, t, o, e, a)))
							: ((t.tag = 0), (t = ef(null, t, o, e, a)))
					else {
						if (o != null) {
							if (((s = o.$$typeof), s === j)) {
								;((t.tag = 11), (t = Fm(null, t, o, e, a)))
								break e
							} else if (s === te) {
								;((t.tag = 14), (t = $m(null, t, o, e, a)))
								break e
							}
						}
						throw ((t = ne(o) || o), Error(i(306, t, '')))
					}
				}
				return t
			case 0:
				return ef(e, t, t.type, t.pendingProps, a)
			case 1:
				return ((o = t.type), (s = La(o, t.pendingProps)), Xm(e, t, o, s, a))
			case 3:
				e: {
					if ((Ae(t, t.stateNode.containerInfo), e === null))
						throw Error(i(387))
					o = t.pendingProps
					var f = t.memoizedState
					;((s = f.element), Mc(e, t), ji(t, o, null, a))
					var g = t.memoizedState
					if (
						((o = g.cache),
						Gr(t, Ut, o),
						o !== f.cache && xc(t, [Ut], a, !0),
						Ni(),
						(o = g.element),
						f.isDehydrated)
					)
						if (
							((f = { element: o, isDehydrated: !1, cache: g.cache }),
							(t.updateQueue.baseState = f),
							(t.memoizedState = f),
							t.flags & 256)
						) {
							t = Zm(e, t, o, a)
							break e
						} else if (o !== s) {
							;((s = Dn(Error(i(424)), t)), Ai(s), (t = Zm(e, t, o, a)))
							break e
						} else {
							switch (((e = t.stateNode.containerInfo), e.nodeType)) {
								case 9:
									e = e.body
									break
								default:
									e = e.nodeName === 'HTML' ? e.ownerDocument.body : e
							}
							for (
								St = Kn(e.firstChild),
									rn = t,
									Xe = !0,
									Ta = null,
									ur = !0,
									a = jm(t, null, o, a),
									t.child = a;
								a;
							)
								((a.flags = (a.flags & -3) | 4096), (a = a.sibling))
						}
					else {
						if ((xi(), o === s)) {
							t = xr(e, t, a)
							break e
						}
						$t(e, t, o, a)
					}
					t = t.child
				}
				return t
			case 26:
				return (
					Ru(e, t),
					e === null
						? (a = ly(t.type, null, t.pendingProps, null))
							? (t.memoizedState = a)
							: Xe ||
								((a = t.type),
								(e = t.pendingProps),
								(o = Pu(ge.current).createElement(a)),
								(o[Vt] = t),
								(o[Zt] = e),
								Yt(o, a, e),
								Tt(o),
								(t.stateNode = o))
						: (t.memoizedState = ly(
								t.type,
								e.memoizedProps,
								t.pendingProps,
								e.memoizedState
							)),
					null
				)
			case 27:
				return (
					Be(t),
					e === null &&
						Xe &&
						((o = t.stateNode = ny(t.type, t.pendingProps, ge.current)),
						(rn = t),
						(ur = !0),
						(s = St),
						aa(t.type) ? ((qf = s), (St = Kn(o.firstChild))) : (St = s)),
					$t(e, t, t.pendingProps.children, a),
					Ru(e, t),
					e === null && (t.flags |= 4194304),
					t.child
				)
			case 5:
				return (
					e === null &&
						Xe &&
						((s = o = St) &&
							((o = e1(o, t.type, t.pendingProps, ur)),
							o !== null
								? ((t.stateNode = o),
									(rn = t),
									(St = Kn(o.firstChild)),
									(ur = !1),
									(s = !0))
								: (s = !1)),
						s || Oa(t)),
					Be(t),
					(s = t.type),
					(f = t.pendingProps),
					(g = e !== null ? e.memoizedProps : null),
					(o = f.children),
					Pf(s, f) ? (o = null) : g !== null && Pf(s, g) && (t.flags |= 32),
					t.memoizedState !== null &&
						((s = zc(e, t, gE, null, null, a)), (to._currentValue = s)),
					Ru(e, t),
					$t(e, t, o, a),
					t.child
				)
			case 6:
				return (
					e === null &&
						Xe &&
						((e = a = St) &&
							((a = t1(a, t.pendingProps, ur)),
							a !== null
								? ((t.stateNode = a), (rn = t), (St = null), (e = !0))
								: (e = !1)),
						e || Oa(t)),
					null
				)
			case 13:
				return Jm(e, t, a)
			case 4:
				return (
					Ae(t, t.stateNode.containerInfo),
					(o = t.pendingProps),
					e === null ? (t.child = wl(t, null, o, a)) : $t(e, t, o, a),
					t.child
				)
			case 11:
				return Fm(e, t, t.type, t.pendingProps, a)
			case 7:
				return ($t(e, t, t.pendingProps, a), t.child)
			case 8:
				return ($t(e, t, t.pendingProps.children, a), t.child)
			case 12:
				return ($t(e, t, t.pendingProps.children, a), t.child)
			case 10:
				return (
					(o = t.pendingProps),
					Gr(t, t.type, o.value),
					$t(e, t, o.children, a),
					t.child
				)
			case 9:
				return (
					(s = t.type._context),
					(o = t.pendingProps.children),
					Da(t),
					(s = Wt(s)),
					(o = o(s)),
					(t.flags |= 1),
					$t(e, t, o, a),
					t.child
				)
			case 14:
				return $m(e, t, t.type, t.pendingProps, a)
			case 15:
				return Im(e, t, t.type, t.pendingProps, a)
			case 19:
				return ev(e, t, a)
			case 31:
				return (
					(o = t.pendingProps),
					(a = t.mode),
					(o = { mode: o.mode, children: o.children }),
					e === null
						? ((a = xu(o, a)),
							(a.ref = t.ref),
							(t.child = a),
							(a.return = t),
							(t = a))
						: ((a = yr(e.child, o)),
							(a.ref = t.ref),
							(t.child = a),
							(a.return = t),
							(t = a)),
					t
				)
			case 22:
				return Ym(e, t, a)
			case 24:
				return (
					Da(t),
					(o = Wt(Ut)),
					e === null
						? ((s = Cc()),
							s === null &&
								((s = ut),
								(f = Ac()),
								(s.pooledCache = f),
								f.refCount++,
								f !== null && (s.pooledCacheLanes |= a),
								(s = f)),
							(t.memoizedState = { parent: o, cache: s }),
							Oc(t),
							Gr(t, Ut, s))
						: ((e.lanes & a) !== 0 && (Mc(e, t), ji(t, null, null, a), Ni()),
							(s = e.memoizedState),
							(f = t.memoizedState),
							s.parent !== o
								? ((s = { parent: o, cache: o }),
									(t.memoizedState = s),
									t.lanes === 0 &&
										(t.memoizedState = t.updateQueue.baseState = s),
									Gr(t, Ut, o))
								: ((o = f.cache),
									Gr(t, Ut, o),
									o !== s.cache && xc(t, [Ut], a, !0))),
					$t(e, t, t.pendingProps.children, a),
					t.child
				)
			case 29:
				throw t.pendingProps
		}
		throw Error(i(156, t.tag))
	}
	function Ar(e) {
		e.flags |= 4
	}
	function nv(e, t) {
		if (t.type !== 'stylesheet' || (t.state.loading & 4) !== 0)
			e.flags &= -16777217
		else if (((e.flags |= 16777216), !cy(t))) {
			if (
				((t = Un.current),
				t !== null &&
					((Fe & 4194048) === Fe
						? sr !== null
						: ((Fe & 62914560) !== Fe && (Fe & 536870912) === 0) || t !== sr))
			)
				throw ((Mi = Tc), Vp)
			e.flags |= 8192
		}
	}
	function Au(e, t) {
		;(t !== null && (e.flags |= 4),
			e.flags & 16384 &&
				((t = e.tag !== 22 ? ar() : 536870912), (e.lanes |= t), (Ml |= t)))
	}
	function ki(e, t) {
		if (!Xe)
			switch (e.tailMode) {
				case 'hidden':
					t = e.tail
					for (var a = null; t !== null; )
						(t.alternate !== null && (a = t), (t = t.sibling))
					a === null ? (e.tail = null) : (a.sibling = null)
					break
				case 'collapsed':
					a = e.tail
					for (var o = null; a !== null; )
						(a.alternate !== null && (o = a), (a = a.sibling))
					o === null
						? t || e.tail === null
							? (e.tail = null)
							: (e.tail.sibling = null)
						: (o.sibling = null)
			}
	}
	function vt(e) {
		var t = e.alternate !== null && e.alternate.child === e.child,
			a = 0,
			o = 0
		if (t)
			for (var s = e.child; s !== null; )
				((a |= s.lanes | s.childLanes),
					(o |= s.subtreeFlags & 65011712),
					(o |= s.flags & 65011712),
					(s.return = e),
					(s = s.sibling))
		else
			for (s = e.child; s !== null; )
				((a |= s.lanes | s.childLanes),
					(o |= s.subtreeFlags),
					(o |= s.flags),
					(s.return = e),
					(s = s.sibling))
		return ((e.subtreeFlags |= o), (e.childLanes = a), t)
	}
	function CE(e, t, a) {
		var o = t.pendingProps
		switch ((Sc(t), t.tag)) {
			case 31:
			case 16:
			case 15:
			case 0:
			case 11:
			case 7:
			case 8:
			case 12:
			case 9:
			case 14:
				return (vt(t), null)
			case 1:
				return (vt(t), null)
			case 3:
				return (
					(a = t.stateNode),
					(o = null),
					e !== null && (o = e.memoizedState.cache),
					t.memoizedState.cache !== o && (t.flags |= 2048),
					_r(Ut),
					je(),
					a.pendingContext &&
						((a.context = a.pendingContext), (a.pendingContext = null)),
					(e === null || e.child === null) &&
						(Ri(t)
							? Ar(t)
							: e === null ||
								(e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
								((t.flags |= 1024), Lp())),
					vt(t),
					null
				)
			case 26:
				return (
					(a = t.memoizedState),
					e === null
						? (Ar(t),
							a !== null ? (vt(t), nv(t, a)) : (vt(t), (t.flags &= -16777217)))
						: a
							? a !== e.memoizedState
								? (Ar(t), vt(t), nv(t, a))
								: (vt(t), (t.flags &= -16777217))
							: (e.memoizedProps !== o && Ar(t), vt(t), (t.flags &= -16777217)),
					null
				)
			case 27:
				;(Le(t), (a = ge.current))
				var s = t.type
				if (e !== null && t.stateNode != null) e.memoizedProps !== o && Ar(t)
				else {
					if (!o) {
						if (t.stateNode === null) throw Error(i(166))
						return (vt(t), null)
					}
					;((e = pe.current),
						Ri(t) ? Np(t) : ((e = ny(s, o, a)), (t.stateNode = e), Ar(t)))
				}
				return (vt(t), null)
			case 5:
				if ((Le(t), (a = t.type), e !== null && t.stateNode != null))
					e.memoizedProps !== o && Ar(t)
				else {
					if (!o) {
						if (t.stateNode === null) throw Error(i(166))
						return (vt(t), null)
					}
					if (((e = pe.current), Ri(t))) Np(t)
					else {
						switch (((s = Pu(ge.current)), e)) {
							case 1:
								e = s.createElementNS('http://www.w3.org/2000/svg', a)
								break
							case 2:
								e = s.createElementNS('http://www.w3.org/1998/Math/MathML', a)
								break
							default:
								switch (a) {
									case 'svg':
										e = s.createElementNS('http://www.w3.org/2000/svg', a)
										break
									case 'math':
										e = s.createElementNS(
											'http://www.w3.org/1998/Math/MathML',
											a
										)
										break
									case 'script':
										;((e = s.createElement('div')),
											(e.innerHTML = '<script><\/script>'),
											(e = e.removeChild(e.firstChild)))
										break
									case 'select':
										;((e =
											typeof o.is == 'string'
												? s.createElement('select', { is: o.is })
												: s.createElement('select')),
											o.multiple
												? (e.multiple = !0)
												: o.size && (e.size = o.size))
										break
									default:
										e =
											typeof o.is == 'string'
												? s.createElement(a, { is: o.is })
												: s.createElement(a)
								}
						}
						;((e[Vt] = t), (e[Zt] = o))
						e: for (s = t.child; s !== null; ) {
							if (s.tag === 5 || s.tag === 6) e.appendChild(s.stateNode)
							else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
								;((s.child.return = s), (s = s.child))
								continue
							}
							if (s === t) break e
							for (; s.sibling === null; ) {
								if (s.return === null || s.return === t) break e
								s = s.return
							}
							;((s.sibling.return = s.return), (s = s.sibling))
						}
						t.stateNode = e
						e: switch ((Yt(e, a, o), a)) {
							case 'button':
							case 'input':
							case 'select':
							case 'textarea':
								e = !!o.autoFocus
								break e
							case 'img':
								e = !0
								break e
							default:
								e = !1
						}
						e && Ar(t)
					}
				}
				return (vt(t), (t.flags &= -16777217), null)
			case 6:
				if (e && t.stateNode != null) e.memoizedProps !== o && Ar(t)
				else {
					if (typeof o != 'string' && t.stateNode === null) throw Error(i(166))
					if (((e = ge.current), Ri(t))) {
						if (
							((e = t.stateNode),
							(a = t.memoizedProps),
							(o = null),
							(s = rn),
							s !== null)
						)
							switch (s.tag) {
								case 27:
								case 5:
									o = s.memoizedProps
							}
						;((e[Vt] = t),
							(e = !!(
								e.nodeValue === a ||
								(o !== null && o.suppressHydrationWarning === !0) ||
								Kv(e.nodeValue, a)
							)),
							e || Oa(t))
					} else ((e = Pu(e).createTextNode(o)), (e[Vt] = t), (t.stateNode = e))
				}
				return (vt(t), null)
			case 13:
				if (
					((o = t.memoizedState),
					e === null ||
						(e.memoizedState !== null && e.memoizedState.dehydrated !== null))
				) {
					if (((s = Ri(t)), o !== null && o.dehydrated !== null)) {
						if (e === null) {
							if (!s) throw Error(i(318))
							if (
								((s = t.memoizedState),
								(s = s !== null ? s.dehydrated : null),
								!s)
							)
								throw Error(i(317))
							s[Vt] = t
						} else
							(xi(),
								(t.flags & 128) === 0 && (t.memoizedState = null),
								(t.flags |= 4))
						;(vt(t), (s = !1))
					} else
						((s = Lp()),
							e !== null &&
								e.memoizedState !== null &&
								(e.memoizedState.hydrationErrors = s),
							(s = !0))
					if (!s) return t.flags & 256 ? (Rr(t), t) : (Rr(t), null)
				}
				if ((Rr(t), (t.flags & 128) !== 0)) return ((t.lanes = a), t)
				if (
					((a = o !== null), (e = e !== null && e.memoizedState !== null), a)
				) {
					;((o = t.child),
						(s = null),
						o.alternate !== null &&
							o.alternate.memoizedState !== null &&
							o.alternate.memoizedState.cachePool !== null &&
							(s = o.alternate.memoizedState.cachePool.pool))
					var f = null
					;(o.memoizedState !== null &&
						o.memoizedState.cachePool !== null &&
						(f = o.memoizedState.cachePool.pool),
						f !== s && (o.flags |= 2048))
				}
				return (
					a !== e && a && (t.child.flags |= 8192),
					Au(t, t.updateQueue),
					vt(t),
					null
				)
			case 4:
				return (je(), e === null && jf(t.stateNode.containerInfo), vt(t), null)
			case 10:
				return (_r(t.type), vt(t), null)
			case 19:
				if ((ie(zt), (s = t.memoizedState), s === null)) return (vt(t), null)
				if (((o = (t.flags & 128) !== 0), (f = s.rendering), f === null))
					if (o) ki(s, !1)
					else {
						if (_t !== 0 || (e !== null && (e.flags & 128) !== 0))
							for (e = t.child; e !== null; ) {
								if (((f = Su(e)), f !== null)) {
									for (
										t.flags |= 128,
											ki(s, !1),
											e = f.updateQueue,
											t.updateQueue = e,
											Au(t, e),
											t.subtreeFlags = 0,
											e = a,
											a = t.child;
										a !== null;
									)
										(Mp(a, e), (a = a.sibling))
									return (le(zt, (zt.current & 1) | 2), t.child)
								}
								e = e.sibling
							}
						s.tail !== null &&
							ct() > Tu &&
							((t.flags |= 128), (o = !0), ki(s, !1), (t.lanes = 4194304))
					}
				else {
					if (!o)
						if (((e = Su(f)), e !== null)) {
							if (
								((t.flags |= 128),
								(o = !0),
								(e = e.updateQueue),
								(t.updateQueue = e),
								Au(t, e),
								ki(s, !0),
								s.tail === null &&
									s.tailMode === 'hidden' &&
									!f.alternate &&
									!Xe)
							)
								return (vt(t), null)
						} else
							2 * ct() - s.renderingStartTime > Tu &&
								a !== 536870912 &&
								((t.flags |= 128), (o = !0), ki(s, !1), (t.lanes = 4194304))
					s.isBackwards
						? ((f.sibling = t.child), (t.child = f))
						: ((e = s.last),
							e !== null ? (e.sibling = f) : (t.child = f),
							(s.last = f))
				}
				return s.tail !== null
					? ((t = s.tail),
						(s.rendering = t),
						(s.tail = t.sibling),
						(s.renderingStartTime = ct()),
						(t.sibling = null),
						(e = zt.current),
						le(zt, o ? (e & 1) | 2 : e & 1),
						t)
					: (vt(t), null)
			case 22:
			case 23:
				return (
					Rr(t),
					Lc(),
					(o = t.memoizedState !== null),
					e !== null
						? (e.memoizedState !== null) !== o && (t.flags |= 8192)
						: o && (t.flags |= 8192),
					o
						? (a & 536870912) !== 0 &&
							(t.flags & 128) === 0 &&
							(vt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
						: vt(t),
					(a = t.updateQueue),
					a !== null && Au(t, a.retryQueue),
					(a = null),
					e !== null &&
						e.memoizedState !== null &&
						e.memoizedState.cachePool !== null &&
						(a = e.memoizedState.cachePool.pool),
					(o = null),
					t.memoizedState !== null &&
						t.memoizedState.cachePool !== null &&
						(o = t.memoizedState.cachePool.pool),
					o !== a && (t.flags |= 2048),
					e !== null && ie(Na),
					null
				)
			case 24:
				return (
					(a = null),
					e !== null && (a = e.memoizedState.cache),
					t.memoizedState.cache !== a && (t.flags |= 2048),
					_r(Ut),
					vt(t),
					null
				)
			case 25:
				return null
			case 30:
				return null
		}
		throw Error(i(156, t.tag))
	}
	function TE(e, t) {
		switch ((Sc(t), t.tag)) {
			case 1:
				return (
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				)
			case 3:
				return (
					_r(Ut),
					je(),
					(e = t.flags),
					(e & 65536) !== 0 && (e & 128) === 0
						? ((t.flags = (e & -65537) | 128), t)
						: null
				)
			case 26:
			case 27:
			case 5:
				return (Le(t), null)
			case 13:
				if (
					(Rr(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
				) {
					if (t.alternate === null) throw Error(i(340))
					xi()
				}
				return (
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				)
			case 19:
				return (ie(zt), null)
			case 4:
				return (je(), null)
			case 10:
				return (_r(t.type), null)
			case 22:
			case 23:
				return (
					Rr(t),
					Lc(),
					e !== null && ie(Na),
					(e = t.flags),
					e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
				)
			case 24:
				return (_r(Ut), null)
			case 25:
				return null
			default:
				return null
		}
	}
	function rv(e, t) {
		switch ((Sc(t), t.tag)) {
			case 3:
				;(_r(Ut), je())
				break
			case 26:
			case 27:
			case 5:
				Le(t)
				break
			case 4:
				je()
				break
			case 13:
				Rr(t)
				break
			case 19:
				ie(zt)
				break
			case 10:
				_r(t.type)
				break
			case 22:
			case 23:
				;(Rr(t), Lc(), e !== null && ie(Na))
				break
			case 24:
				_r(Ut)
		}
	}
	function Hi(e, t) {
		try {
			var a = t.updateQueue,
				o = a !== null ? a.lastEffect : null
			if (o !== null) {
				var s = o.next
				a = s
				do {
					if ((a.tag & e) === e) {
						o = void 0
						var f = a.create,
							g = a.inst
						;((o = f()), (g.destroy = o))
					}
					a = a.next
				} while (a !== s)
			}
		} catch (E) {
			lt(t, t.return, E)
		}
	}
	function Xr(e, t, a) {
		try {
			var o = t.updateQueue,
				s = o !== null ? o.lastEffect : null
			if (s !== null) {
				var f = s.next
				o = f
				do {
					if ((o.tag & e) === e) {
						var g = o.inst,
							E = g.destroy
						if (E !== void 0) {
							;((g.destroy = void 0), (s = t))
							var N = a,
								q = E
							try {
								q()
							} catch (K) {
								lt(s, N, K)
							}
						}
					}
					o = o.next
				} while (o !== f)
			}
		} catch (K) {
			lt(t, t.return, K)
		}
	}
	function av(e) {
		var t = e.updateQueue
		if (t !== null) {
			var a = e.stateNode
			try {
				$p(t, a)
			} catch (o) {
				lt(e, e.return, o)
			}
		}
	}
	function lv(e, t, a) {
		;((a.props = La(e.type, e.memoizedProps)), (a.state = e.memoizedState))
		try {
			a.componentWillUnmount()
		} catch (o) {
			lt(e, t, o)
		}
	}
	function qi(e, t) {
		try {
			var a = e.ref
			if (a !== null) {
				switch (e.tag) {
					case 26:
					case 27:
					case 5:
						var o = e.stateNode
						break
					case 30:
						o = e.stateNode
						break
					default:
						o = e.stateNode
				}
				typeof a == 'function' ? (e.refCleanup = a(o)) : (a.current = o)
			}
		} catch (s) {
			lt(e, t, s)
		}
	}
	function cr(e, t) {
		var a = e.ref,
			o = e.refCleanup
		if (a !== null)
			if (typeof o == 'function')
				try {
					o()
				} catch (s) {
					lt(e, t, s)
				} finally {
					;((e.refCleanup = null),
						(e = e.alternate),
						e != null && (e.refCleanup = null))
				}
			else if (typeof a == 'function')
				try {
					a(null)
				} catch (s) {
					lt(e, t, s)
				}
			else a.current = null
	}
	function iv(e) {
		var t = e.type,
			a = e.memoizedProps,
			o = e.stateNode
		try {
			e: switch (t) {
				case 'button':
				case 'input':
				case 'select':
				case 'textarea':
					a.autoFocus && o.focus()
					break e
				case 'img':
					a.src ? (o.src = a.src) : a.srcSet && (o.srcset = a.srcSet)
			}
		} catch (s) {
			lt(e, e.return, s)
		}
	}
	function sf(e, t, a) {
		try {
			var o = e.stateNode
			;(KE(o, e.type, a, t), (o[Zt] = t))
		} catch (s) {
			lt(e, e.return, s)
		}
	}
	function ov(e) {
		return (
			e.tag === 5 ||
			e.tag === 3 ||
			e.tag === 26 ||
			(e.tag === 27 && aa(e.type)) ||
			e.tag === 4
		)
	}
	function cf(e) {
		e: for (;;) {
			for (; e.sibling === null; ) {
				if (e.return === null || ov(e.return)) return null
				e = e.return
			}
			for (
				e.sibling.return = e.return, e = e.sibling;
				e.tag !== 5 && e.tag !== 6 && e.tag !== 18;
			) {
				if (
					(e.tag === 27 && aa(e.type)) ||
					e.flags & 2 ||
					e.child === null ||
					e.tag === 4
				)
					continue e
				;((e.child.return = e), (e = e.child))
			}
			if (!(e.flags & 2)) return e.stateNode
		}
	}
	function ff(e, t, a) {
		var o = e.tag
		if (o === 5 || o === 6)
			((e = e.stateNode),
				t
					? (a.nodeType === 9
							? a.body
							: a.nodeName === 'HTML'
								? a.ownerDocument.body
								: a
						).insertBefore(e, t)
					: ((t =
							a.nodeType === 9
								? a.body
								: a.nodeName === 'HTML'
									? a.ownerDocument.body
									: a),
						t.appendChild(e),
						(a = a._reactRootContainer),
						a != null || t.onclick !== null || (t.onclick = Bu)))
		else if (
			o !== 4 &&
			(o === 27 && aa(e.type) && ((a = e.stateNode), (t = null)),
			(e = e.child),
			e !== null)
		)
			for (ff(e, t, a), e = e.sibling; e !== null; )
				(ff(e, t, a), (e = e.sibling))
	}
	function wu(e, t, a) {
		var o = e.tag
		if (o === 5 || o === 6)
			((e = e.stateNode), t ? a.insertBefore(e, t) : a.appendChild(e))
		else if (
			o !== 4 &&
			(o === 27 && aa(e.type) && (a = e.stateNode), (e = e.child), e !== null)
		)
			for (wu(e, t, a), e = e.sibling; e !== null; )
				(wu(e, t, a), (e = e.sibling))
	}
	function uv(e) {
		var t = e.stateNode,
			a = e.memoizedProps
		try {
			for (var o = e.type, s = t.attributes; s.length; )
				t.removeAttributeNode(s[0])
			;(Yt(t, o, a), (t[Vt] = e), (t[Zt] = a))
		} catch (f) {
			lt(e, e.return, f)
		}
	}
	var wr = !1,
		wt = !1,
		df = !1,
		sv = typeof WeakSet == 'function' ? WeakSet : Set,
		qt = null
	function OE(e, t) {
		if (((e = e.containerInfo), (zf = Fu), (e = Sp(e)), sc(e))) {
			if ('selectionStart' in e)
				var a = { start: e.selectionStart, end: e.selectionEnd }
			else
				e: {
					a = ((a = e.ownerDocument) && a.defaultView) || window
					var o = a.getSelection && a.getSelection()
					if (o && o.rangeCount !== 0) {
						a = o.anchorNode
						var s = o.anchorOffset,
							f = o.focusNode
						o = o.focusOffset
						try {
							;(a.nodeType, f.nodeType)
						} catch {
							a = null
							break e
						}
						var g = 0,
							E = -1,
							N = -1,
							q = 0,
							K = 0,
							W = e,
							F = null
						t: for (;;) {
							for (
								var $;
								W !== a || (s !== 0 && W.nodeType !== 3) || (E = g + s),
									W !== f || (o !== 0 && W.nodeType !== 3) || (N = g + o),
									W.nodeType === 3 && (g += W.nodeValue.length),
									($ = W.firstChild) !== null;
							)
								((F = W), (W = $))
							for (;;) {
								if (W === e) break t
								if (
									(F === a && ++q === s && (E = g),
									F === f && ++K === o && (N = g),
									($ = W.nextSibling) !== null)
								)
									break
								;((W = F), (F = W.parentNode))
							}
							W = $
						}
						a = E === -1 || N === -1 ? null : { start: E, end: N }
					} else a = null
				}
			a = a || { start: 0, end: 0 }
		} else a = null
		for (
			Bf = { focusedElem: e, selectionRange: a }, Fu = !1, qt = t;
			qt !== null;
		)
			if (
				((t = qt), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
			)
				((e.return = t), (qt = e))
			else
				for (; qt !== null; ) {
					switch (((t = qt), (f = t.alternate), (e = t.flags), t.tag)) {
						case 0:
							break
						case 11:
						case 15:
							break
						case 1:
							if ((e & 1024) !== 0 && f !== null) {
								;((e = void 0),
									(a = t),
									(s = f.memoizedProps),
									(f = f.memoizedState),
									(o = a.stateNode))
								try {
									var Me = La(a.type, s, a.elementType === a.type)
									;((e = o.getSnapshotBeforeUpdate(Me, f)),
										(o.__reactInternalSnapshotBeforeUpdate = e))
								} catch (Te) {
									lt(a, a.return, Te)
								}
							}
							break
						case 3:
							if ((e & 1024) !== 0) {
								if (
									((e = t.stateNode.containerInfo), (a = e.nodeType), a === 9)
								)
									kf(e)
								else if (a === 1)
									switch (e.nodeName) {
										case 'HEAD':
										case 'HTML':
										case 'BODY':
											kf(e)
											break
										default:
											e.textContent = ''
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
							if ((e & 1024) !== 0) throw Error(i(163))
					}
					if (((e = t.sibling), e !== null)) {
						;((e.return = t.return), (qt = e))
						break
					}
					qt = t.return
				}
	}
	function cv(e, t, a) {
		var o = a.flags
		switch (a.tag) {
			case 0:
			case 11:
			case 15:
				;(Zr(e, a), o & 4 && Hi(5, a))
				break
			case 1:
				if ((Zr(e, a), o & 4))
					if (((e = a.stateNode), t === null))
						try {
							e.componentDidMount()
						} catch (g) {
							lt(a, a.return, g)
						}
					else {
						var s = La(a.type, t.memoizedProps)
						t = t.memoizedState
						try {
							e.componentDidUpdate(s, t, e.__reactInternalSnapshotBeforeUpdate)
						} catch (g) {
							lt(a, a.return, g)
						}
					}
				;(o & 64 && av(a), o & 512 && qi(a, a.return))
				break
			case 3:
				if ((Zr(e, a), o & 64 && ((e = a.updateQueue), e !== null))) {
					if (((t = null), a.child !== null))
						switch (a.child.tag) {
							case 27:
							case 5:
								t = a.child.stateNode
								break
							case 1:
								t = a.child.stateNode
						}
					try {
						$p(e, t)
					} catch (g) {
						lt(a, a.return, g)
					}
				}
				break
			case 27:
				t === null && o & 4 && uv(a)
			case 26:
			case 5:
				;(Zr(e, a), t === null && o & 4 && iv(a), o & 512 && qi(a, a.return))
				break
			case 12:
				Zr(e, a)
				break
			case 13:
				;(Zr(e, a),
					o & 4 && hv(e, a),
					o & 64 &&
						((e = a.memoizedState),
						e !== null &&
							((e = e.dehydrated),
							e !== null && ((a = PE.bind(null, a)), n1(e, a)))))
				break
			case 22:
				if (((o = a.memoizedState !== null || wr), !o)) {
					;((t = (t !== null && t.memoizedState !== null) || wt), (s = wr))
					var f = wt
					;((wr = o),
						(wt = t) && !f ? Jr(e, a, (a.subtreeFlags & 8772) !== 0) : Zr(e, a),
						(wr = s),
						(wt = f))
				}
				break
			case 30:
				break
			default:
				Zr(e, a)
		}
	}
	function fv(e) {
		var t = e.alternate
		;(t !== null && ((e.alternate = null), fv(t)),
			(e.child = null),
			(e.deletions = null),
			(e.sibling = null),
			e.tag === 5 && ((t = e.stateNode), t !== null && ii(t)),
			(e.stateNode = null),
			(e.return = null),
			(e.dependencies = null),
			(e.memoizedProps = null),
			(e.memoizedState = null),
			(e.pendingProps = null),
			(e.stateNode = null),
			(e.updateQueue = null))
	}
	var ft = null,
		dn = !1
	function Cr(e, t, a) {
		for (a = a.child; a !== null; ) (dv(e, t, a), (a = a.sibling))
	}
	function dv(e, t, a) {
		if (D && typeof D.onCommitFiberUnmount == 'function')
			try {
				D.onCommitFiberUnmount(xt, a)
			} catch {}
		switch (a.tag) {
			case 26:
				;(wt || cr(a, t),
					Cr(e, t, a),
					a.memoizedState
						? a.memoizedState.count--
						: a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)))
				break
			case 27:
				wt || cr(a, t)
				var o = ft,
					s = dn
				;(aa(a.type) && ((ft = a.stateNode), (dn = !1)),
					Cr(e, t, a),
					Zi(a.stateNode),
					(ft = o),
					(dn = s))
				break
			case 5:
				wt || cr(a, t)
			case 6:
				if (
					((o = ft),
					(s = dn),
					(ft = null),
					Cr(e, t, a),
					(ft = o),
					(dn = s),
					ft !== null)
				)
					if (dn)
						try {
							;(ft.nodeType === 9
								? ft.body
								: ft.nodeName === 'HTML'
									? ft.ownerDocument.body
									: ft
							).removeChild(a.stateNode)
						} catch (f) {
							lt(a, t, f)
						}
					else
						try {
							ft.removeChild(a.stateNode)
						} catch (f) {
							lt(a, t, f)
						}
				break
			case 18:
				ft !== null &&
					(dn
						? ((e = ft),
							ey(
								e.nodeType === 9
									? e.body
									: e.nodeName === 'HTML'
										? e.ownerDocument.body
										: e,
								a.stateNode
							),
							lo(e))
						: ey(ft, a.stateNode))
				break
			case 4:
				;((o = ft),
					(s = dn),
					(ft = a.stateNode.containerInfo),
					(dn = !0),
					Cr(e, t, a),
					(ft = o),
					(dn = s))
				break
			case 0:
			case 11:
			case 14:
			case 15:
				;(wt || Xr(2, a, t), wt || Xr(4, a, t), Cr(e, t, a))
				break
			case 1:
				;(wt ||
					(cr(a, t),
					(o = a.stateNode),
					typeof o.componentWillUnmount == 'function' && lv(a, t, o)),
					Cr(e, t, a))
				break
			case 21:
				Cr(e, t, a)
				break
			case 22:
				;((wt = (o = wt) || a.memoizedState !== null), Cr(e, t, a), (wt = o))
				break
			default:
				Cr(e, t, a)
		}
	}
	function hv(e, t) {
		if (
			t.memoizedState === null &&
			((e = t.alternate),
			e !== null &&
				((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
		)
			try {
				lo(e)
			} catch (a) {
				lt(t, t.return, a)
			}
	}
	function ME(e) {
		switch (e.tag) {
			case 13:
			case 19:
				var t = e.stateNode
				return (t === null && (t = e.stateNode = new sv()), t)
			case 22:
				return (
					(e = e.stateNode),
					(t = e._retryCache),
					t === null && (t = e._retryCache = new sv()),
					t
				)
			default:
				throw Error(i(435, e.tag))
		}
	}
	function hf(e, t) {
		var a = ME(e)
		t.forEach(function (o) {
			var s = VE.bind(null, e, o)
			a.has(o) || (a.add(o), o.then(s, s))
		})
	}
	function En(e, t) {
		var a = t.deletions
		if (a !== null)
			for (var o = 0; o < a.length; o++) {
				var s = a[o],
					f = e,
					g = t,
					E = g
				e: for (; E !== null; ) {
					switch (E.tag) {
						case 27:
							if (aa(E.type)) {
								;((ft = E.stateNode), (dn = !1))
								break e
							}
							break
						case 5:
							;((ft = E.stateNode), (dn = !1))
							break e
						case 3:
						case 4:
							;((ft = E.stateNode.containerInfo), (dn = !0))
							break e
					}
					E = E.return
				}
				if (ft === null) throw Error(i(160))
				;(dv(f, g, s),
					(ft = null),
					(dn = !1),
					(f = s.alternate),
					f !== null && (f.return = null),
					(s.return = null))
			}
		if (t.subtreeFlags & 13878)
			for (t = t.child; t !== null; ) (pv(t, e), (t = t.sibling))
	}
	var Qn = null
	function pv(e, t) {
		var a = e.alternate,
			o = e.flags
		switch (e.tag) {
			case 0:
			case 11:
			case 14:
			case 15:
				;(En(t, e),
					Rn(e),
					o & 4 && (Xr(3, e, e.return), Hi(3, e), Xr(5, e, e.return)))
				break
			case 1:
				;(En(t, e),
					Rn(e),
					o & 512 && (wt || a === null || cr(a, a.return)),
					o & 64 &&
						wr &&
						((e = e.updateQueue),
						e !== null &&
							((o = e.callbacks),
							o !== null &&
								((a = e.shared.hiddenCallbacks),
								(e.shared.hiddenCallbacks = a === null ? o : a.concat(o))))))
				break
			case 26:
				var s = Qn
				if (
					(En(t, e),
					Rn(e),
					o & 512 && (wt || a === null || cr(a, a.return)),
					o & 4)
				) {
					var f = a !== null ? a.memoizedState : null
					if (((o = e.memoizedState), a === null))
						if (o === null)
							if (e.stateNode === null) {
								e: {
									;((o = e.type),
										(a = e.memoizedProps),
										(s = s.ownerDocument || s))
									t: switch (o) {
										case 'title':
											;((f = s.getElementsByTagName('title')[0]),
												(!f ||
													f[_a] ||
													f[Vt] ||
													f.namespaceURI === 'http://www.w3.org/2000/svg' ||
													f.hasAttribute('itemprop')) &&
													((f = s.createElement(o)),
													s.head.insertBefore(
														f,
														s.querySelector('head > title')
													)),
												Yt(f, o, a),
												(f[Vt] = e),
												Tt(f),
												(o = f))
											break e
										case 'link':
											var g = uy('link', 'href', s).get(o + (a.href || ''))
											if (g) {
												for (var E = 0; E < g.length; E++)
													if (
														((f = g[E]),
														f.getAttribute('href') ===
															(a.href == null || a.href === ''
																? null
																: a.href) &&
															f.getAttribute('rel') ===
																(a.rel == null ? null : a.rel) &&
															f.getAttribute('title') ===
																(a.title == null ? null : a.title) &&
															f.getAttribute('crossorigin') ===
																(a.crossOrigin == null ? null : a.crossOrigin))
													) {
														g.splice(E, 1)
														break t
													}
											}
											;((f = s.createElement(o)),
												Yt(f, o, a),
												s.head.appendChild(f))
											break
										case 'meta':
											if (
												(g = uy('meta', 'content', s).get(
													o + (a.content || '')
												))
											) {
												for (E = 0; E < g.length; E++)
													if (
														((f = g[E]),
														f.getAttribute('content') ===
															(a.content == null ? null : '' + a.content) &&
															f.getAttribute('name') ===
																(a.name == null ? null : a.name) &&
															f.getAttribute('property') ===
																(a.property == null ? null : a.property) &&
															f.getAttribute('http-equiv') ===
																(a.httpEquiv == null ? null : a.httpEquiv) &&
															f.getAttribute('charset') ===
																(a.charSet == null ? null : a.charSet))
													) {
														g.splice(E, 1)
														break t
													}
											}
											;((f = s.createElement(o)),
												Yt(f, o, a),
												s.head.appendChild(f))
											break
										default:
											throw Error(i(468, o))
									}
									;((f[Vt] = e), Tt(f), (o = f))
								}
								e.stateNode = o
							} else sy(s, e.type, e.stateNode)
						else e.stateNode = oy(s, o, e.memoizedProps)
					else
						f !== o
							? (f === null
									? a.stateNode !== null &&
										((a = a.stateNode), a.parentNode.removeChild(a))
									: f.count--,
								o === null
									? sy(s, e.type, e.stateNode)
									: oy(s, o, e.memoizedProps))
							: o === null &&
								e.stateNode !== null &&
								sf(e, e.memoizedProps, a.memoizedProps)
				}
				break
			case 27:
				;(En(t, e),
					Rn(e),
					o & 512 && (wt || a === null || cr(a, a.return)),
					a !== null && o & 4 && sf(e, e.memoizedProps, a.memoizedProps))
				break
			case 5:
				if (
					(En(t, e),
					Rn(e),
					o & 512 && (wt || a === null || cr(a, a.return)),
					e.flags & 32)
				) {
					s = e.stateNode
					try {
						gn(s, '')
					} catch ($) {
						lt(e, e.return, $)
					}
				}
				;(o & 4 &&
					e.stateNode != null &&
					((s = e.memoizedProps), sf(e, s, a !== null ? a.memoizedProps : s)),
					o & 1024 && (df = !0))
				break
			case 6:
				if ((En(t, e), Rn(e), o & 4)) {
					if (e.stateNode === null) throw Error(i(162))
					;((o = e.memoizedProps), (a = e.stateNode))
					try {
						a.nodeValue = o
					} catch ($) {
						lt(e, e.return, $)
					}
				}
				break
			case 3:
				if (
					((Hu = null),
					(s = Qn),
					(Qn = Vu(t.containerInfo)),
					En(t, e),
					(Qn = s),
					Rn(e),
					o & 4 && a !== null && a.memoizedState.isDehydrated)
				)
					try {
						lo(t.containerInfo)
					} catch ($) {
						lt(e, e.return, $)
					}
				df && ((df = !1), mv(e))
				break
			case 4:
				;((o = Qn),
					(Qn = Vu(e.stateNode.containerInfo)),
					En(t, e),
					Rn(e),
					(Qn = o))
				break
			case 12:
				;(En(t, e), Rn(e))
				break
			case 13:
				;(En(t, e),
					Rn(e),
					e.child.flags & 8192 &&
						(e.memoizedState !== null) !=
							(a !== null && a.memoizedState !== null) &&
						(bf = ct()),
					o & 4 &&
						((o = e.updateQueue),
						o !== null && ((e.updateQueue = null), hf(e, o))))
				break
			case 22:
				s = e.memoizedState !== null
				var N = a !== null && a.memoizedState !== null,
					q = wr,
					K = wt
				if (
					((wr = q || s),
					(wt = K || N),
					En(t, e),
					(wt = K),
					(wr = q),
					Rn(e),
					o & 8192)
				)
					e: for (
						t = e.stateNode,
							t._visibility = s ? t._visibility & -2 : t._visibility | 1,
							s && (a === null || N || wr || wt || Ua(e)),
							a = null,
							t = e;
						;
					) {
						if (t.tag === 5 || t.tag === 26) {
							if (a === null) {
								N = a = t
								try {
									if (((f = N.stateNode), s))
										((g = f.style),
											typeof g.setProperty == 'function'
												? g.setProperty('display', 'none', 'important')
												: (g.display = 'none'))
									else {
										E = N.stateNode
										var W = N.memoizedProps.style,
											F =
												W != null && W.hasOwnProperty('display')
													? W.display
													: null
										E.style.display =
											F == null || typeof F == 'boolean' ? '' : ('' + F).trim()
									}
								} catch ($) {
									lt(N, N.return, $)
								}
							}
						} else if (t.tag === 6) {
							if (a === null) {
								N = t
								try {
									N.stateNode.nodeValue = s ? '' : N.memoizedProps
								} catch ($) {
									lt(N, N.return, $)
								}
							}
						} else if (
							((t.tag !== 22 && t.tag !== 23) ||
								t.memoizedState === null ||
								t === e) &&
							t.child !== null
						) {
							;((t.child.return = t), (t = t.child))
							continue
						}
						if (t === e) break e
						for (; t.sibling === null; ) {
							if (t.return === null || t.return === e) break e
							;(a === t && (a = null), (t = t.return))
						}
						;(a === t && (a = null),
							(t.sibling.return = t.return),
							(t = t.sibling))
					}
				o & 4 &&
					((o = e.updateQueue),
					o !== null &&
						((a = o.retryQueue),
						a !== null && ((o.retryQueue = null), hf(e, a))))
				break
			case 19:
				;(En(t, e),
					Rn(e),
					o & 4 &&
						((o = e.updateQueue),
						o !== null && ((e.updateQueue = null), hf(e, o))))
				break
			case 30:
				break
			case 21:
				break
			default:
				;(En(t, e), Rn(e))
		}
	}
	function Rn(e) {
		var t = e.flags
		if (t & 2) {
			try {
				for (var a, o = e.return; o !== null; ) {
					if (ov(o)) {
						a = o
						break
					}
					o = o.return
				}
				if (a == null) throw Error(i(160))
				switch (a.tag) {
					case 27:
						var s = a.stateNode,
							f = cf(e)
						wu(e, f, s)
						break
					case 5:
						var g = a.stateNode
						a.flags & 32 && (gn(g, ''), (a.flags &= -33))
						var E = cf(e)
						wu(e, E, g)
						break
					case 3:
					case 4:
						var N = a.stateNode.containerInfo,
							q = cf(e)
						ff(e, q, N)
						break
					default:
						throw Error(i(161))
				}
			} catch (K) {
				lt(e, e.return, K)
			}
			e.flags &= -3
		}
		t & 4096 && (e.flags &= -4097)
	}
	function mv(e) {
		if (e.subtreeFlags & 1024)
			for (e = e.child; e !== null; ) {
				var t = e
				;(mv(t),
					t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
					(e = e.sibling))
			}
	}
	function Zr(e, t) {
		if (t.subtreeFlags & 8772)
			for (t = t.child; t !== null; ) (cv(e, t.alternate, t), (t = t.sibling))
	}
	function Ua(e) {
		for (e = e.child; e !== null; ) {
			var t = e
			switch (t.tag) {
				case 0:
				case 11:
				case 14:
				case 15:
					;(Xr(4, t, t.return), Ua(t))
					break
				case 1:
					cr(t, t.return)
					var a = t.stateNode
					;(typeof a.componentWillUnmount == 'function' && lv(t, t.return, a),
						Ua(t))
					break
				case 27:
					Zi(t.stateNode)
				case 26:
				case 5:
					;(cr(t, t.return), Ua(t))
					break
				case 22:
					t.memoizedState === null && Ua(t)
					break
				case 30:
					Ua(t)
					break
				default:
					Ua(t)
			}
			e = e.sibling
		}
	}
	function Jr(e, t, a) {
		for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
			var o = t.alternate,
				s = e,
				f = t,
				g = f.flags
			switch (f.tag) {
				case 0:
				case 11:
				case 15:
					;(Jr(s, f, a), Hi(4, f))
					break
				case 1:
					if (
						(Jr(s, f, a),
						(o = f),
						(s = o.stateNode),
						typeof s.componentDidMount == 'function')
					)
						try {
							s.componentDidMount()
						} catch (q) {
							lt(o, o.return, q)
						}
					if (((o = f), (s = o.updateQueue), s !== null)) {
						var E = o.stateNode
						try {
							var N = s.shared.hiddenCallbacks
							if (N !== null)
								for (s.shared.hiddenCallbacks = null, s = 0; s < N.length; s++)
									Fp(N[s], E)
						} catch (q) {
							lt(o, o.return, q)
						}
					}
					;(a && g & 64 && av(f), qi(f, f.return))
					break
				case 27:
					uv(f)
				case 26:
				case 5:
					;(Jr(s, f, a), a && o === null && g & 4 && iv(f), qi(f, f.return))
					break
				case 12:
					Jr(s, f, a)
					break
				case 13:
					;(Jr(s, f, a), a && g & 4 && hv(s, f))
					break
				case 22:
					;(f.memoizedState === null && Jr(s, f, a), qi(f, f.return))
					break
				case 30:
					break
				default:
					Jr(s, f, a)
			}
			t = t.sibling
		}
	}
	function pf(e, t) {
		var a = null
		;(e !== null &&
			e.memoizedState !== null &&
			e.memoizedState.cachePool !== null &&
			(a = e.memoizedState.cachePool.pool),
			(e = null),
			t.memoizedState !== null &&
				t.memoizedState.cachePool !== null &&
				(e = t.memoizedState.cachePool.pool),
			e !== a && (e != null && e.refCount++, a != null && Ci(a)))
	}
	function mf(e, t) {
		;((e = null),
			t.alternate !== null && (e = t.alternate.memoizedState.cache),
			(t = t.memoizedState.cache),
			t !== e && (t.refCount++, e != null && Ci(e)))
	}
	function fr(e, t, a, o) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) (vv(e, t, a, o), (t = t.sibling))
	}
	function vv(e, t, a, o) {
		var s = t.flags
		switch (t.tag) {
			case 0:
			case 11:
			case 15:
				;(fr(e, t, a, o), s & 2048 && Hi(9, t))
				break
			case 1:
				fr(e, t, a, o)
				break
			case 3:
				;(fr(e, t, a, o),
					s & 2048 &&
						((e = null),
						t.alternate !== null && (e = t.alternate.memoizedState.cache),
						(t = t.memoizedState.cache),
						t !== e && (t.refCount++, e != null && Ci(e))))
				break
			case 12:
				if (s & 2048) {
					;(fr(e, t, a, o), (e = t.stateNode))
					try {
						var f = t.memoizedProps,
							g = f.id,
							E = f.onPostCommit
						typeof E == 'function' &&
							E(
								g,
								t.alternate === null ? 'mount' : 'update',
								e.passiveEffectDuration,
								-0
							)
					} catch (N) {
						lt(t, t.return, N)
					}
				} else fr(e, t, a, o)
				break
			case 13:
				fr(e, t, a, o)
				break
			case 23:
				break
			case 22:
				;((f = t.stateNode),
					(g = t.alternate),
					t.memoizedState !== null
						? f._visibility & 2
							? fr(e, t, a, o)
							: Gi(e, t)
						: f._visibility & 2
							? fr(e, t, a, o)
							: ((f._visibility |= 2),
								Cl(e, t, a, o, (t.subtreeFlags & 10256) !== 0)),
					s & 2048 && pf(g, t))
				break
			case 24:
				;(fr(e, t, a, o), s & 2048 && mf(t.alternate, t))
				break
			default:
				fr(e, t, a, o)
		}
	}
	function Cl(e, t, a, o, s) {
		for (s = s && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
			var f = e,
				g = t,
				E = a,
				N = o,
				q = g.flags
			switch (g.tag) {
				case 0:
				case 11:
				case 15:
					;(Cl(f, g, E, N, s), Hi(8, g))
					break
				case 23:
					break
				case 22:
					var K = g.stateNode
					;(g.memoizedState !== null
						? K._visibility & 2
							? Cl(f, g, E, N, s)
							: Gi(f, g)
						: ((K._visibility |= 2), Cl(f, g, E, N, s)),
						s && q & 2048 && pf(g.alternate, g))
					break
				case 24:
					;(Cl(f, g, E, N, s), s && q & 2048 && mf(g.alternate, g))
					break
				default:
					Cl(f, g, E, N, s)
			}
			t = t.sibling
		}
	}
	function Gi(e, t) {
		if (t.subtreeFlags & 10256)
			for (t = t.child; t !== null; ) {
				var a = e,
					o = t,
					s = o.flags
				switch (o.tag) {
					case 22:
						;(Gi(a, o), s & 2048 && pf(o.alternate, o))
						break
					case 24:
						;(Gi(a, o), s & 2048 && mf(o.alternate, o))
						break
					default:
						Gi(a, o)
				}
				t = t.sibling
			}
	}
	var Fi = 8192
	function Tl(e) {
		if (e.subtreeFlags & Fi)
			for (e = e.child; e !== null; ) (yv(e), (e = e.sibling))
	}
	function yv(e) {
		switch (e.tag) {
			case 26:
				;(Tl(e),
					e.flags & Fi &&
						e.memoizedState !== null &&
						m1(Qn, e.memoizedState, e.memoizedProps))
				break
			case 5:
				Tl(e)
				break
			case 3:
			case 4:
				var t = Qn
				;((Qn = Vu(e.stateNode.containerInfo)), Tl(e), (Qn = t))
				break
			case 22:
				e.memoizedState === null &&
					((t = e.alternate),
					t !== null && t.memoizedState !== null
						? ((t = Fi), (Fi = 16777216), Tl(e), (Fi = t))
						: Tl(e))
				break
			default:
				Tl(e)
		}
	}
	function gv(e) {
		var t = e.alternate
		if (t !== null && ((e = t.child), e !== null)) {
			t.child = null
			do ((t = e.sibling), (e.sibling = null), (e = t))
			while (e !== null)
		}
	}
	function $i(e) {
		var t = e.deletions
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var a = 0; a < t.length; a++) {
					var o = t[a]
					;((qt = o), Sv(o, e))
				}
			gv(e)
		}
		if (e.subtreeFlags & 10256)
			for (e = e.child; e !== null; ) (bv(e), (e = e.sibling))
	}
	function bv(e) {
		switch (e.tag) {
			case 0:
			case 11:
			case 15:
				;($i(e), e.flags & 2048 && Xr(9, e, e.return))
				break
			case 3:
				$i(e)
				break
			case 12:
				$i(e)
				break
			case 22:
				var t = e.stateNode
				e.memoizedState !== null &&
				t._visibility & 2 &&
				(e.return === null || e.return.tag !== 13)
					? ((t._visibility &= -3), Cu(e))
					: $i(e)
				break
			default:
				$i(e)
		}
	}
	function Cu(e) {
		var t = e.deletions
		if ((e.flags & 16) !== 0) {
			if (t !== null)
				for (var a = 0; a < t.length; a++) {
					var o = t[a]
					;((qt = o), Sv(o, e))
				}
			gv(e)
		}
		for (e = e.child; e !== null; ) {
			switch (((t = e), t.tag)) {
				case 0:
				case 11:
				case 15:
					;(Xr(8, t, t.return), Cu(t))
					break
				case 22:
					;((a = t.stateNode),
						a._visibility & 2 && ((a._visibility &= -3), Cu(t)))
					break
				default:
					Cu(t)
			}
			e = e.sibling
		}
	}
	function Sv(e, t) {
		for (; qt !== null; ) {
			var a = qt
			switch (a.tag) {
				case 0:
				case 11:
				case 15:
					Xr(8, a, t)
					break
				case 23:
				case 22:
					if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
						var o = a.memoizedState.cachePool.pool
						o != null && o.refCount++
					}
					break
				case 24:
					Ci(a.memoizedState.cache)
			}
			if (((o = a.child), o !== null)) ((o.return = a), (qt = o))
			else
				e: for (a = e; qt !== null; ) {
					o = qt
					var s = o.sibling,
						f = o.return
					if ((fv(o), o === a)) {
						qt = null
						break e
					}
					if (s !== null) {
						;((s.return = f), (qt = s))
						break e
					}
					qt = f
				}
		}
	}
	var DE = {
			getCacheForType: function (e) {
				var t = Wt(Ut),
					a = t.data.get(e)
				return (a === void 0 && ((a = e()), t.data.set(e, a)), a)
			}
		},
		NE = typeof WeakMap == 'function' ? WeakMap : Map,
		We = 0,
		ut = null,
		He = null,
		Fe = 0,
		et = 0,
		xn = null,
		Wr = !1,
		Ol = !1,
		vf = !1,
		Tr = 0,
		_t = 0,
		ea = 0,
		za = 0,
		yf = 0,
		zn = 0,
		Ml = 0,
		Ii = null,
		hn = null,
		gf = !1,
		bf = 0,
		Tu = 1 / 0,
		Ou = null,
		ta = null,
		It = 0,
		na = null,
		Dl = null,
		Nl = 0,
		Sf = 0,
		_f = null,
		_v = null,
		Yi = 0,
		Ef = null
	function An() {
		if ((We & 2) !== 0 && Fe !== 0) return Fe & -Fe
		if (G.T !== null) {
			var e = bl
			return e !== 0 ? e : Of()
		}
		return ai()
	}
	function Ev() {
		zn === 0 && (zn = (Fe & 536870912) === 0 || Xe ? on() : 536870912)
		var e = Un.current
		return (e !== null && (e.flags |= 32), zn)
	}
	function wn(e, t, a) {
		;(((e === ut && (et === 2 || et === 9)) ||
			e.cancelPendingCommit !== null) &&
			(jl(e, 0), ra(e, Fe, zn, !1)),
			vn(e, a),
			((We & 2) === 0 || e !== ut) &&
				(e === ut &&
					((We & 2) === 0 && (za |= a), _t === 4 && ra(e, Fe, zn, !1)),
				dr(e)))
	}
	function Rv(e, t, a) {
		if ((We & 6) !== 0) throw Error(i(327))
		var o = (!a && (t & 124) === 0 && (t & e.expiredLanes) === 0) || bt(e, t),
			s = o ? UE(e, t) : Af(e, t, !0),
			f = o
		do {
			if (s === 0) {
				Ol && !o && ra(e, t, 0, !1)
				break
			} else {
				if (((a = e.current.alternate), f && !jE(a))) {
					;((s = Af(e, t, !1)), (f = !1))
					continue
				}
				if (s === 2) {
					if (((f = t), e.errorRecoveryDisabledLanes & f)) var g = 0
					else
						((g = e.pendingLanes & -536870913),
							(g = g !== 0 ? g : g & 536870912 ? 536870912 : 0))
					if (g !== 0) {
						t = g
						e: {
							var E = e
							s = Ii
							var N = E.current.memoizedState.isDehydrated
							if ((N && (jl(E, g).flags |= 256), (g = Af(E, g, !1)), g !== 2)) {
								if (vf && !N) {
									;((E.errorRecoveryDisabledLanes |= f), (za |= f), (s = 4))
									break e
								}
								;((f = hn),
									(hn = s),
									f !== null && (hn === null ? (hn = f) : hn.push.apply(hn, f)))
							}
							s = g
						}
						if (((f = !1), s !== 2)) continue
					}
				}
				if (s === 1) {
					;(jl(e, 0), ra(e, t, 0, !0))
					break
				}
				e: {
					switch (((o = e), (f = s), f)) {
						case 0:
						case 1:
							throw Error(i(345))
						case 4:
							if ((t & 4194048) !== t) break
						case 6:
							ra(o, t, zn, !Wr)
							break e
						case 2:
							hn = null
							break
						case 3:
						case 5:
							break
						default:
							throw Error(i(329))
					}
					if ((t & 62914560) === t && ((s = bf + 300 - ct()), 10 < s)) {
						if ((ra(o, t, zn, !Wr), at(o, 0, !0) !== 0)) break e
						o.timeoutHandle = Jv(
							xv.bind(null, o, a, hn, Ou, gf, t, zn, za, Ml, Wr, f, 2, -0, 0),
							s
						)
						break e
					}
					xv(o, a, hn, Ou, gf, t, zn, za, Ml, Wr, f, 0, -0, 0)
				}
			}
			break
		} while (!0)
		dr(e)
	}
	function xv(e, t, a, o, s, f, g, E, N, q, K, W, F, $) {
		if (
			((e.timeoutHandle = -1),
			(W = t.subtreeFlags),
			(W & 8192 || (W & 16785408) === 16785408) &&
				((eo = { stylesheets: null, count: 0, unsuspend: p1 }),
				yv(t),
				(W = v1()),
				W !== null))
		) {
			;((e.cancelPendingCommit = W(
				Dv.bind(null, e, t, f, a, o, s, g, E, N, K, 1, F, $)
			)),
				ra(e, f, g, !q))
			return
		}
		Dv(e, t, f, a, o, s, g, E, N)
	}
	function jE(e) {
		for (var t = e; ; ) {
			var a = t.tag
			if (
				(a === 0 || a === 11 || a === 15) &&
				t.flags & 16384 &&
				((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
			)
				for (var o = 0; o < a.length; o++) {
					var s = a[o],
						f = s.getSnapshot
					s = s.value
					try {
						if (!Sn(f(), s)) return !1
					} catch {
						return !1
					}
				}
			if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
				((a.return = t), (t = a))
			else {
				if (t === e) break
				for (; t.sibling === null; ) {
					if (t.return === null || t.return === e) return !0
					t = t.return
				}
				;((t.sibling.return = t.return), (t = t.sibling))
			}
		}
		return !0
	}
	function ra(e, t, a, o) {
		;((t &= ~yf),
			(t &= ~za),
			(e.suspendedLanes |= t),
			(e.pingedLanes &= ~t),
			o && (e.warmLanes |= t),
			(o = e.expirationTimes))
		for (var s = t; 0 < s; ) {
			var f = 31 - P(s),
				g = 1 << f
			;((o[f] = -1), (s &= ~g))
		}
		a !== 0 && Ja(e, a, t)
	}
	function Mu() {
		return (We & 6) === 0 ? (Qi(0), !1) : !0
	}
	function Rf() {
		if (He !== null) {
			if (et === 0) var e = He.return
			else ((e = He), (Sr = Ma = null), Vc(e), (Al = null), (Pi = 0), (e = He))
			for (; e !== null; ) (rv(e.alternate, e), (e = e.return))
			He = null
		}
	}
	function jl(e, t) {
		var a = e.timeoutHandle
		;(a !== -1 && ((e.timeoutHandle = -1), ZE(a)),
			(a = e.cancelPendingCommit),
			a !== null && ((e.cancelPendingCommit = null), a()),
			Rf(),
			(ut = e),
			(He = a = yr(e.current, null)),
			(Fe = t),
			(et = 0),
			(xn = null),
			(Wr = !1),
			(Ol = bt(e, t)),
			(vf = !1),
			(Ml = zn = yf = za = ea = _t = 0),
			(hn = Ii = null),
			(gf = !1),
			(t & 8) !== 0 && (t |= t & 32))
		var o = e.entangledLanes
		if (o !== 0)
			for (e = e.entanglements, o &= t; 0 < o; ) {
				var s = 31 - P(o),
					f = 1 << s
				;((t |= e[s]), (o &= ~f))
			}
		return ((Tr = t), Jo(), a)
	}
	function Av(e, t) {
		;((Ve = null),
			(G.H = yu),
			t === Oi || t === ou
				? ((t = qp()), (et = 3))
				: t === Vp
					? ((t = qp()), (et = 4))
					: (et =
							t === Gm
								? 8
								: t !== null &&
									  typeof t == 'object' &&
									  typeof t.then == 'function'
									? 6
									: 1),
			(xn = t),
			He === null && ((_t = 1), Eu(e, Dn(t, e.current))))
	}
	function wv() {
		var e = G.H
		return ((G.H = yu), e === null ? yu : e)
	}
	function Cv() {
		var e = G.A
		return ((G.A = DE), e)
	}
	function xf() {
		;((_t = 4),
			Wr || ((Fe & 4194048) !== Fe && Un.current !== null) || (Ol = !0),
			((ea & 134217727) === 0 && (za & 134217727) === 0) ||
				ut === null ||
				ra(ut, Fe, zn, !1))
	}
	function Af(e, t, a) {
		var o = We
		We |= 2
		var s = wv(),
			f = Cv()
		;((ut !== e || Fe !== t) && ((Ou = null), jl(e, t)), (t = !1))
		var g = _t
		e: do
			try {
				if (et !== 0 && He !== null) {
					var E = He,
						N = xn
					switch (et) {
						case 8:
							;(Rf(), (g = 6))
							break e
						case 3:
						case 2:
						case 9:
						case 6:
							Un.current === null && (t = !0)
							var q = et
							if (((et = 0), (xn = null), Ll(e, E, N, q), a && Ol)) {
								g = 0
								break e
							}
							break
						default:
							;((q = et), (et = 0), (xn = null), Ll(e, E, N, q))
					}
				}
				;(LE(), (g = _t))
				break
			} catch (K) {
				Av(e, K)
			}
		while (!0)
		return (
			t && e.shellSuspendCounter++,
			(Sr = Ma = null),
			(We = o),
			(G.H = s),
			(G.A = f),
			He === null && ((ut = null), (Fe = 0), Jo()),
			g
		)
	}
	function LE() {
		for (; He !== null; ) Tv(He)
	}
	function UE(e, t) {
		var a = We
		We |= 2
		var o = wv(),
			s = Cv()
		ut !== e || Fe !== t
			? ((Ou = null), (Tu = ct() + 500), jl(e, t))
			: (Ol = bt(e, t))
		e: do
			try {
				if (et !== 0 && He !== null) {
					t = He
					var f = xn
					t: switch (et) {
						case 1:
							;((et = 0), (xn = null), Ll(e, t, f, 1))
							break
						case 2:
						case 9:
							if (kp(f)) {
								;((et = 0), (xn = null), Ov(t))
								break
							}
							;((t = function () {
								;((et !== 2 && et !== 9) || ut !== e || (et = 7), dr(e))
							}),
								f.then(t, t))
							break e
						case 3:
							et = 7
							break e
						case 4:
							et = 5
							break e
						case 7:
							kp(f)
								? ((et = 0), (xn = null), Ov(t))
								: ((et = 0), (xn = null), Ll(e, t, f, 7))
							break
						case 5:
							var g = null
							switch (He.tag) {
								case 26:
									g = He.memoizedState
								case 5:
								case 27:
									var E = He
									if (!g || cy(g)) {
										;((et = 0), (xn = null))
										var N = E.sibling
										if (N !== null) He = N
										else {
											var q = E.return
											q !== null ? ((He = q), Du(q)) : (He = null)
										}
										break t
									}
							}
							;((et = 0), (xn = null), Ll(e, t, f, 5))
							break
						case 6:
							;((et = 0), (xn = null), Ll(e, t, f, 6))
							break
						case 8:
							;(Rf(), (_t = 6))
							break e
						default:
							throw Error(i(462))
					}
				}
				zE()
				break
			} catch (K) {
				Av(e, K)
			}
		while (!0)
		return (
			(Sr = Ma = null),
			(G.H = o),
			(G.A = s),
			(We = a),
			He !== null ? 0 : ((ut = null), (Fe = 0), Jo(), _t)
		)
	}
	function zE() {
		for (; He !== null && !Bt(); ) Tv(He)
	}
	function Tv(e) {
		var t = tv(e.alternate, e, Tr)
		;((e.memoizedProps = e.pendingProps), t === null ? Du(e) : (He = t))
	}
	function Ov(e) {
		var t = e,
			a = t.alternate
		switch (t.tag) {
			case 15:
			case 0:
				t = Km(a, t, t.pendingProps, t.type, void 0, Fe)
				break
			case 11:
				t = Km(a, t, t.pendingProps, t.type.render, t.ref, Fe)
				break
			case 5:
				Vc(t)
			default:
				;(rv(a, t), (t = He = Mp(t, Tr)), (t = tv(a, t, Tr)))
		}
		;((e.memoizedProps = e.pendingProps), t === null ? Du(e) : (He = t))
	}
	function Ll(e, t, a, o) {
		;((Sr = Ma = null), Vc(t), (Al = null), (Pi = 0))
		var s = t.return
		try {
			if (AE(e, s, t, a, Fe)) {
				;((_t = 1), Eu(e, Dn(a, e.current)), (He = null))
				return
			}
		} catch (f) {
			if (s !== null) throw ((He = s), f)
			;((_t = 1), Eu(e, Dn(a, e.current)), (He = null))
			return
		}
		t.flags & 32768
			? (Xe || o === 1
					? (e = !0)
					: Ol || (Fe & 536870912) !== 0
						? (e = !1)
						: ((Wr = e = !0),
							(o === 2 || o === 9 || o === 3 || o === 6) &&
								((o = Un.current),
								o !== null && o.tag === 13 && (o.flags |= 16384))),
				Mv(t, e))
			: Du(t)
	}
	function Du(e) {
		var t = e
		do {
			if ((t.flags & 32768) !== 0) {
				Mv(t, Wr)
				return
			}
			e = t.return
			var a = CE(t.alternate, t, Tr)
			if (a !== null) {
				He = a
				return
			}
			if (((t = t.sibling), t !== null)) {
				He = t
				return
			}
			He = t = e
		} while (t !== null)
		_t === 0 && (_t = 5)
	}
	function Mv(e, t) {
		do {
			var a = TE(e.alternate, e)
			if (a !== null) {
				;((a.flags &= 32767), (He = a))
				return
			}
			if (
				((a = e.return),
				a !== null &&
					((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
				!t && ((e = e.sibling), e !== null))
			) {
				He = e
				return
			}
			He = e = a
		} while (e !== null)
		;((_t = 6), (He = null))
	}
	function Dv(e, t, a, o, s, f, g, E, N) {
		e.cancelPendingCommit = null
		do Nu()
		while (It !== 0)
		if ((We & 6) !== 0) throw Error(i(327))
		if (t !== null) {
			if (t === e.current) throw Error(i(177))
			if (
				((f = t.lanes | t.childLanes),
				(f |= pc),
				Za(e, a, f, g, E, N),
				e === ut && ((He = ut = null), (Fe = 0)),
				(Dl = t),
				(na = e),
				(Nl = a),
				(Sf = f),
				(_f = s),
				(_v = o),
				(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
					? ((e.callbackNode = null),
						(e.callbackPriority = 0),
						kE(Ge, function () {
							return (zv(), null)
						}))
					: ((e.callbackNode = null), (e.callbackPriority = 0)),
				(o = (t.flags & 13878) !== 0),
				(t.subtreeFlags & 13878) !== 0 || o)
			) {
				;((o = G.T), (G.T = null), (s = re.p), (re.p = 2), (g = We), (We |= 4))
				try {
					OE(e, t, a)
				} finally {
					;((We = g), (re.p = s), (G.T = o))
				}
			}
			;((It = 1), Nv(), jv(), Lv())
		}
	}
	function Nv() {
		if (It === 1) {
			It = 0
			var e = na,
				t = Dl,
				a = (t.flags & 13878) !== 0
			if ((t.subtreeFlags & 13878) !== 0 || a) {
				;((a = G.T), (G.T = null))
				var o = re.p
				re.p = 2
				var s = We
				We |= 4
				try {
					pv(t, e)
					var f = Bf,
						g = Sp(e.containerInfo),
						E = f.focusedElem,
						N = f.selectionRange
					if (
						g !== E &&
						E &&
						E.ownerDocument &&
						bp(E.ownerDocument.documentElement, E)
					) {
						if (N !== null && sc(E)) {
							var q = N.start,
								K = N.end
							if ((K === void 0 && (K = q), 'selectionStart' in E))
								((E.selectionStart = q),
									(E.selectionEnd = Math.min(K, E.value.length)))
							else {
								var W = E.ownerDocument || document,
									F = (W && W.defaultView) || window
								if (F.getSelection) {
									var $ = F.getSelection(),
										Me = E.textContent.length,
										Te = Math.min(N.start, Me),
										rt = N.end === void 0 ? Te : Math.min(N.end, Me)
									!$.extend && Te > rt && ((g = rt), (rt = Te), (Te = g))
									var V = gp(E, Te),
										U = gp(E, rt)
									if (
										V &&
										U &&
										($.rangeCount !== 1 ||
											$.anchorNode !== V.node ||
											$.anchorOffset !== V.offset ||
											$.focusNode !== U.node ||
											$.focusOffset !== U.offset)
									) {
										var k = W.createRange()
										;(k.setStart(V.node, V.offset),
											$.removeAllRanges(),
											Te > rt
												? ($.addRange(k), $.extend(U.node, U.offset))
												: (k.setEnd(U.node, U.offset), $.addRange(k)))
									}
								}
							}
						}
						for (W = [], $ = E; ($ = $.parentNode); )
							$.nodeType === 1 &&
								W.push({ element: $, left: $.scrollLeft, top: $.scrollTop })
						for (
							typeof E.focus == 'function' && E.focus(), E = 0;
							E < W.length;
							E++
						) {
							var J = W[E]
							;((J.element.scrollLeft = J.left), (J.element.scrollTop = J.top))
						}
					}
					;((Fu = !!zf), (Bf = zf = null))
				} finally {
					;((We = s), (re.p = o), (G.T = a))
				}
			}
			;((e.current = t), (It = 2))
		}
	}
	function jv() {
		if (It === 2) {
			It = 0
			var e = na,
				t = Dl,
				a = (t.flags & 8772) !== 0
			if ((t.subtreeFlags & 8772) !== 0 || a) {
				;((a = G.T), (G.T = null))
				var o = re.p
				re.p = 2
				var s = We
				We |= 4
				try {
					cv(e, t.alternate, t)
				} finally {
					;((We = s), (re.p = o), (G.T = a))
				}
			}
			It = 3
		}
	}
	function Lv() {
		if (It === 4 || It === 3) {
			;((It = 0), Nt())
			var e = na,
				t = Dl,
				a = Nl,
				o = _v
			;(t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
				? (It = 5)
				: ((It = 0), (Dl = na = null), Uv(e, e.pendingLanes))
			var s = e.pendingLanes
			if (
				(s === 0 && (ta = null),
				ri(a),
				(t = t.stateNode),
				D && typeof D.onCommitFiberRoot == 'function')
			)
				try {
					D.onCommitFiberRoot(xt, t, void 0, (t.current.flags & 128) === 128)
				} catch {}
			if (o !== null) {
				;((t = G.T), (s = re.p), (re.p = 2), (G.T = null))
				try {
					for (var f = e.onRecoverableError, g = 0; g < o.length; g++) {
						var E = o[g]
						f(E.value, { componentStack: E.stack })
					}
				} finally {
					;((G.T = t), (re.p = s))
				}
			}
			;((Nl & 3) !== 0 && Nu(),
				dr(e),
				(s = e.pendingLanes),
				(a & 4194090) !== 0 && (s & 42) !== 0
					? e === Ef
						? Yi++
						: ((Yi = 0), (Ef = e))
					: (Yi = 0),
				Qi(0))
		}
	}
	function Uv(e, t) {
		;(e.pooledCacheLanes &= t) === 0 &&
			((t = e.pooledCache), t != null && ((e.pooledCache = null), Ci(t)))
	}
	function Nu(e) {
		return (Nv(), jv(), Lv(), zv())
	}
	function zv() {
		if (It !== 5) return !1
		var e = na,
			t = Sf
		Sf = 0
		var a = ri(Nl),
			o = G.T,
			s = re.p
		try {
			;((re.p = 32 > a ? 32 : a), (G.T = null), (a = _f), (_f = null))
			var f = na,
				g = Nl
			if (((It = 0), (Dl = na = null), (Nl = 0), (We & 6) !== 0))
				throw Error(i(331))
			var E = We
			if (
				((We |= 4),
				bv(f.current),
				vv(f, f.current, g, a),
				(We = E),
				Qi(0, !1),
				D && typeof D.onPostCommitFiberRoot == 'function')
			)
				try {
					D.onPostCommitFiberRoot(xt, f)
				} catch {}
			return !0
		} finally {
			;((re.p = s), (G.T = o), Uv(e, t))
		}
	}
	function Bv(e, t, a) {
		;((t = Dn(a, t)),
			(t = Wc(e.stateNode, t, 2)),
			(e = Ir(e, t, 2)),
			e !== null && (vn(e, 2), dr(e)))
	}
	function lt(e, t, a) {
		if (e.tag === 3) Bv(e, e, a)
		else
			for (; t !== null; ) {
				if (t.tag === 3) {
					Bv(t, e, a)
					break
				} else if (t.tag === 1) {
					var o = t.stateNode
					if (
						typeof t.type.getDerivedStateFromError == 'function' ||
						(typeof o.componentDidCatch == 'function' &&
							(ta === null || !ta.has(o)))
					) {
						;((e = Dn(a, e)),
							(a = Hm(2)),
							(o = Ir(t, a, 2)),
							o !== null && (qm(a, o, t, e), vn(o, 2), dr(o)))
						break
					}
				}
				t = t.return
			}
	}
	function wf(e, t, a) {
		var o = e.pingCache
		if (o === null) {
			o = e.pingCache = new NE()
			var s = new Set()
			o.set(t, s)
		} else ((s = o.get(t)), s === void 0 && ((s = new Set()), o.set(t, s)))
		s.has(a) ||
			((vf = !0), s.add(a), (e = BE.bind(null, e, t, a)), t.then(e, e))
	}
	function BE(e, t, a) {
		var o = e.pingCache
		;(o !== null && o.delete(t),
			(e.pingedLanes |= e.suspendedLanes & a),
			(e.warmLanes &= ~a),
			ut === e &&
				(Fe & a) === a &&
				(_t === 4 || (_t === 3 && (Fe & 62914560) === Fe && 300 > ct() - bf)
					? (We & 2) === 0 && jl(e, 0)
					: (yf |= a),
				Ml === Fe && (Ml = 0)),
			dr(e))
	}
	function Pv(e, t) {
		;(t === 0 && (t = ar()), (e = ml(e, t)), e !== null && (vn(e, t), dr(e)))
	}
	function PE(e) {
		var t = e.memoizedState,
			a = 0
		;(t !== null && (a = t.retryLane), Pv(e, a))
	}
	function VE(e, t) {
		var a = 0
		switch (e.tag) {
			case 13:
				var o = e.stateNode,
					s = e.memoizedState
				s !== null && (a = s.retryLane)
				break
			case 19:
				o = e.stateNode
				break
			case 22:
				o = e.stateNode._retryCache
				break
			default:
				throw Error(i(314))
		}
		;(o !== null && o.delete(t), Pv(e, a))
	}
	function kE(e, t) {
		return ht(e, t)
	}
	var ju = null,
		Ul = null,
		Cf = !1,
		Lu = !1,
		Tf = !1,
		Ba = 0
	function dr(e) {
		;(e !== Ul &&
			e.next === null &&
			(Ul === null ? (ju = Ul = e) : (Ul = Ul.next = e)),
			(Lu = !0),
			Cf || ((Cf = !0), qE()))
	}
	function Qi(e, t) {
		if (!Tf && Lu) {
			Tf = !0
			do
				for (var a = !1, o = ju; o !== null; ) {
					if (e !== 0) {
						var s = o.pendingLanes
						if (s === 0) var f = 0
						else {
							var g = o.suspendedLanes,
								E = o.pingedLanes
							;((f = (1 << (31 - P(42 | e) + 1)) - 1),
								(f &= s & ~(g & ~E)),
								(f = f & 201326741 ? (f & 201326741) | 1 : f ? f | 2 : 0))
						}
						f !== 0 && ((a = !0), qv(o, f))
					} else
						((f = Fe),
							(f = at(
								o,
								o === ut ? f : 0,
								o.cancelPendingCommit !== null || o.timeoutHandle !== -1
							)),
							(f & 3) === 0 || bt(o, f) || ((a = !0), qv(o, f)))
					o = o.next
				}
			while (a)
			Tf = !1
		}
	}
	function HE() {
		Vv()
	}
	function Vv() {
		Lu = Cf = !1
		var e = 0
		Ba !== 0 && (XE() && (e = Ba), (Ba = 0))
		for (var t = ct(), a = null, o = ju; o !== null; ) {
			var s = o.next,
				f = kv(o, t)
			;(f === 0
				? ((o.next = null),
					a === null ? (ju = s) : (a.next = s),
					s === null && (Ul = a))
				: ((a = o), (e !== 0 || (f & 3) !== 0) && (Lu = !0)),
				(o = s))
		}
		Qi(e)
	}
	function kv(e, t) {
		for (
			var a = e.suspendedLanes,
				o = e.pingedLanes,
				s = e.expirationTimes,
				f = e.pendingLanes & -62914561;
			0 < f;
		) {
			var g = 31 - P(f),
				E = 1 << g,
				N = s[g]
			;(N === -1
				? ((E & a) === 0 || (E & o) !== 0) && (s[g] = Lt(E, t))
				: N <= t && (e.expiredLanes |= E),
				(f &= ~E))
		}
		if (
			((t = ut),
			(a = Fe),
			(a = at(
				e,
				e === t ? a : 0,
				e.cancelPendingCommit !== null || e.timeoutHandle !== -1
			)),
			(o = e.callbackNode),
			a === 0 ||
				(e === t && (et === 2 || et === 9)) ||
				e.cancelPendingCommit !== null)
		)
			return (
				o !== null && o !== null && pt(o),
				(e.callbackNode = null),
				(e.callbackPriority = 0)
			)
		if ((a & 3) === 0 || bt(e, a)) {
			if (((t = a & -a), t === e.callbackPriority)) return t
			switch ((o !== null && pt(o), ri(a))) {
				case 2:
				case 8:
					a = Qe
					break
				case 32:
					a = Ge
					break
				case 268435456:
					a = ot
					break
				default:
					a = Ge
			}
			return (
				(o = Hv.bind(null, e)),
				(a = ht(a, o)),
				(e.callbackPriority = t),
				(e.callbackNode = a),
				t
			)
		}
		return (
			o !== null && o !== null && pt(o),
			(e.callbackPriority = 2),
			(e.callbackNode = null),
			2
		)
	}
	function Hv(e, t) {
		if (It !== 0 && It !== 5)
			return ((e.callbackNode = null), (e.callbackPriority = 0), null)
		var a = e.callbackNode
		if (Nu() && e.callbackNode !== a) return null
		var o = Fe
		return (
			(o = at(
				e,
				e === ut ? o : 0,
				e.cancelPendingCommit !== null || e.timeoutHandle !== -1
			)),
			o === 0
				? null
				: (Rv(e, o, t),
					kv(e, ct()),
					e.callbackNode != null && e.callbackNode === a
						? Hv.bind(null, e)
						: null)
		)
	}
	function qv(e, t) {
		if (Nu()) return null
		Rv(e, t, !0)
	}
	function qE() {
		JE(function () {
			;(We & 6) !== 0 ? ht(Ye, HE) : Vv()
		})
	}
	function Of() {
		return (Ba === 0 && (Ba = on()), Ba)
	}
	function Gv(e) {
		return e == null || typeof e == 'symbol' || typeof e == 'boolean'
			? null
			: typeof e == 'function'
				? e
				: al('' + e)
	}
	function Fv(e, t) {
		var a = t.ownerDocument.createElement('input')
		return (
			(a.name = t.name),
			(a.value = t.value),
			e.id && a.setAttribute('form', e.id),
			t.parentNode.insertBefore(a, t),
			(e = new FormData(e)),
			a.parentNode.removeChild(a),
			e
		)
	}
	function GE(e, t, a, o, s) {
		if (t === 'submit' && a && a.stateNode === s) {
			var f = Gv((s[Zt] || null).action),
				g = o.submitter
			g &&
				((t = (t = g[Zt] || null)
					? Gv(t.formAction)
					: g.getAttribute('formAction')),
				t !== null && ((f = t), (g = null)))
			var E = new xe('action', 'action', null, o, s)
			e.push({
				event: E,
				listeners: [
					{
						instance: null,
						listener: function () {
							if (o.defaultPrevented) {
								if (Ba !== 0) {
									var N = g ? Fv(s, g) : new FormData(s)
									Qc(
										a,
										{ pending: !0, data: N, method: s.method, action: f },
										null,
										N
									)
								}
							} else
								typeof f == 'function' &&
									(E.preventDefault(),
									(N = g ? Fv(s, g) : new FormData(s)),
									Qc(
										a,
										{ pending: !0, data: N, method: s.method, action: f },
										f,
										N
									))
						},
						currentTarget: s
					}
				]
			})
		}
	}
	for (var Mf = 0; Mf < hc.length; Mf++) {
		var Df = hc[Mf],
			FE = Df.toLowerCase(),
			$E = Df[0].toUpperCase() + Df.slice(1)
		Yn(FE, 'on' + $E)
	}
	;(Yn(Rp, 'onAnimationEnd'),
		Yn(xp, 'onAnimationIteration'),
		Yn(Ap, 'onAnimationStart'),
		Yn('dblclick', 'onDoubleClick'),
		Yn('focusin', 'onFocus'),
		Yn('focusout', 'onBlur'),
		Yn(uE, 'onTransitionRun'),
		Yn(sE, 'onTransitionStart'),
		Yn(cE, 'onTransitionCancel'),
		Yn(wp, 'onTransitionEnd'),
		yn('onMouseEnter', ['mouseout', 'mouseover']),
		yn('onMouseLeave', ['mouseout', 'mouseover']),
		yn('onPointerEnter', ['pointerout', 'pointerover']),
		yn('onPointerLeave', ['pointerout', 'pointerover']),
		vr(
			'onChange',
			'change click focusin focusout input keydown keyup selectionchange'.split(
				' '
			)
		),
		vr(
			'onSelect',
			'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
				' '
			)
		),
		vr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
		vr(
			'onCompositionEnd',
			'compositionend focusout keydown keypress keyup mousedown'.split(' ')
		),
		vr(
			'onCompositionStart',
			'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
		),
		vr(
			'onCompositionUpdate',
			'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
		))
	var Ki =
			'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
				' '
			),
		IE = new Set(
			'beforetoggle cancel close invalid load scroll scrollend toggle'
				.split(' ')
				.concat(Ki)
		)
	function $v(e, t) {
		t = (t & 4) !== 0
		for (var a = 0; a < e.length; a++) {
			var o = e[a],
				s = o.event
			o = o.listeners
			e: {
				var f = void 0
				if (t)
					for (var g = o.length - 1; 0 <= g; g--) {
						var E = o[g],
							N = E.instance,
							q = E.currentTarget
						if (((E = E.listener), N !== f && s.isPropagationStopped())) break e
						;((f = E), (s.currentTarget = q))
						try {
							f(s)
						} catch (K) {
							_u(K)
						}
						;((s.currentTarget = null), (f = N))
					}
				else
					for (g = 0; g < o.length; g++) {
						if (
							((E = o[g]),
							(N = E.instance),
							(q = E.currentTarget),
							(E = E.listener),
							N !== f && s.isPropagationStopped())
						)
							break e
						;((f = E), (s.currentTarget = q))
						try {
							f(s)
						} catch (K) {
							_u(K)
						}
						;((s.currentTarget = null), (f = N))
					}
			}
		}
	}
	function qe(e, t) {
		var a = t[li]
		a === void 0 && (a = t[li] = new Set())
		var o = e + '__bubble'
		a.has(o) || (Iv(t, e, 2, !1), a.add(o))
	}
	function Nf(e, t, a) {
		var o = 0
		;(t && (o |= 4), Iv(a, e, o, t))
	}
	var Uu = '_reactListening' + Math.random().toString(36).slice(2)
	function jf(e) {
		if (!e[Uu]) {
			;((e[Uu] = !0),
				Bo.forEach(function (a) {
					a !== 'selectionchange' && (IE.has(a) || Nf(a, !1, e), Nf(a, !0, e))
				}))
			var t = e.nodeType === 9 ? e : e.ownerDocument
			t === null || t[Uu] || ((t[Uu] = !0), Nf('selectionchange', !1, t))
		}
	}
	function Iv(e, t, a, o) {
		switch (vy(t)) {
			case 2:
				var s = b1
				break
			case 8:
				s = S1
				break
			default:
				s = Yf
		}
		;((a = s.bind(null, t, a, e)),
			(s = void 0),
			!mi ||
				(t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
				(s = !0),
			o
				? s !== void 0
					? e.addEventListener(t, a, { capture: !0, passive: s })
					: e.addEventListener(t, a, !0)
				: s !== void 0
					? e.addEventListener(t, a, { passive: s })
					: e.addEventListener(t, a, !1))
	}
	function Lf(e, t, a, o, s) {
		var f = o
		if ((t & 1) === 0 && (t & 2) === 0 && o !== null)
			e: for (;;) {
				if (o === null) return
				var g = o.tag
				if (g === 3 || g === 4) {
					var E = o.stateNode.containerInfo
					if (E === s) break
					if (g === 4)
						for (g = o.return; g !== null; ) {
							var N = g.tag
							if ((N === 3 || N === 4) && g.stateNode.containerInfo === s)
								return
							g = g.return
						}
					for (; E !== null; ) {
						if (((g = Nr(E)), g === null)) return
						if (((N = g.tag), N === 5 || N === 6 || N === 26 || N === 27)) {
							o = f = g
							continue e
						}
						E = E.parentNode
					}
				}
				o = o.return
			}
		il(function () {
			var q = f,
				K = ll(a),
				W = []
			e: {
				var F = Cp.get(e)
				if (F !== void 0) {
					var $ = xe,
						Me = e
					switch (e) {
						case 'keypress':
							if (sl(a) === 0) break e
						case 'keydown':
						case 'keyup':
							$ = k_
							break
						case 'focusin':
							;((Me = 'focus'), ($ = qr))
							break
						case 'focusout':
							;((Me = 'blur'), ($ = qr))
							break
						case 'beforeblur':
						case 'afterblur':
							$ = qr
							break
						case 'click':
							if (a.button === 2) break e
						case 'auxclick':
						case 'dblclick':
						case 'mousedown':
						case 'mousemove':
						case 'mouseup':
						case 'mouseout':
						case 'mouseover':
						case 'contextmenu':
							$ = vi
							break
						case 'drag':
						case 'dragend':
						case 'dragenter':
						case 'dragexit':
						case 'dragleave':
						case 'dragover':
						case 'dragstart':
						case 'drop':
							$ = Xo
							break
						case 'touchcancel':
						case 'touchend':
						case 'touchmove':
						case 'touchstart':
							$ = G_
							break
						case Rp:
						case xp:
						case Ap:
							$ = D_
							break
						case wp:
							$ = $_
							break
						case 'scroll':
						case 'scrollend':
							$ = Jt
							break
						case 'wheel':
							$ = Y_
							break
						case 'copy':
						case 'cut':
						case 'paste':
							$ = j_
							break
						case 'gotpointercapture':
						case 'lostpointercapture':
						case 'pointercancel':
						case 'pointerdown':
						case 'pointermove':
						case 'pointerout':
						case 'pointerover':
						case 'pointerup':
							$ = ap
							break
						case 'toggle':
						case 'beforetoggle':
							$ = K_
					}
					var Te = (t & 4) !== 0,
						rt = !Te && (e === 'scroll' || e === 'scrollend'),
						V = Te ? (F !== null ? F + 'Capture' : null) : F
					Te = []
					for (var U = q, k; U !== null; ) {
						var J = U
						if (
							((k = J.stateNode),
							(J = J.tag),
							(J !== 5 && J !== 26 && J !== 27) ||
								k === null ||
								V === null ||
								((J = Pr(U, V)), J != null && Te.push(Xi(U, J, k))),
							rt)
						)
							break
						U = U.return
					}
					0 < Te.length &&
						((F = new $(F, Me, null, a, K)),
						W.push({ event: F, listeners: Te }))
				}
			}
			if ((t & 7) === 0) {
				e: {
					if (
						((F = e === 'mouseover' || e === 'pointerover'),
						($ = e === 'mouseout' || e === 'pointerout'),
						F &&
							a !== di &&
							(Me = a.relatedTarget || a.fromElement) &&
							(Nr(Me) || Me[Dr]))
					)
						break e
					if (
						($ || F) &&
						((F =
							K.window === K
								? K
								: (F = K.ownerDocument)
									? F.defaultView || F.parentWindow
									: window),
						$
							? ((Me = a.relatedTarget || a.toElement),
								($ = q),
								(Me = Me ? Nr(Me) : null),
								Me !== null &&
									((rt = c(Me)),
									(Te = Me.tag),
									Me !== rt || (Te !== 5 && Te !== 27 && Te !== 6)) &&
									(Me = null))
							: (($ = null), (Me = q)),
						$ !== Me)
					) {
						if (
							((Te = vi),
							(J = 'onMouseLeave'),
							(V = 'onMouseEnter'),
							(U = 'mouse'),
							(e === 'pointerout' || e === 'pointerover') &&
								((Te = ap),
								(J = 'onPointerLeave'),
								(V = 'onPointerEnter'),
								(U = 'pointer')),
							(rt = $ == null ? F : On($)),
							(k = Me == null ? F : On(Me)),
							(F = new Te(J, U + 'leave', $, a, K)),
							(F.target = rt),
							(F.relatedTarget = k),
							(J = null),
							Nr(K) === q &&
								((Te = new Te(V, U + 'enter', Me, a, K)),
								(Te.target = k),
								(Te.relatedTarget = rt),
								(J = Te)),
							(rt = J),
							$ && Me)
						)
							t: {
								for (Te = $, V = Me, U = 0, k = Te; k; k = zl(k)) U++
								for (k = 0, J = V; J; J = zl(J)) k++
								for (; 0 < U - k; ) ((Te = zl(Te)), U--)
								for (; 0 < k - U; ) ((V = zl(V)), k--)
								for (; U--; ) {
									if (Te === V || (V !== null && Te === V.alternate)) break t
									;((Te = zl(Te)), (V = zl(V)))
								}
								Te = null
							}
						else Te = null
						;($ !== null && Yv(W, F, $, Te, !1),
							Me !== null && rt !== null && Yv(W, rt, Me, Te, !0))
					}
				}
				e: {
					if (
						((F = q ? On(q) : window),
						($ = F.nodeName && F.nodeName.toLowerCase()),
						$ === 'select' || ($ === 'input' && F.type === 'file'))
					)
						var Re = dp
					else if (cp(F))
						if (hp) Re = lE
						else {
							Re = rE
							var ke = nE
						}
					else
						(($ = F.nodeName),
							!$ ||
							$.toLowerCase() !== 'input' ||
							(F.type !== 'checkbox' && F.type !== 'radio')
								? q && fi(q.elementType) && (Re = dp)
								: (Re = aE))
					if (Re && (Re = Re(e, q))) {
						fp(W, Re, a, K)
						break e
					}
					;(ke && ke(e, F, q),
						e === 'focusout' &&
							q &&
							F.type === 'number' &&
							q.memoizedProps.value != null &&
							rl(F, 'number', F.value))
				}
				switch (((ke = q ? On(q) : window), e)) {
					case 'focusin':
						;(cp(ke) || ke.contentEditable === 'true') &&
							((dl = ke), (cc = q), (Ei = null))
						break
					case 'focusout':
						Ei = cc = dl = null
						break
					case 'mousedown':
						fc = !0
						break
					case 'contextmenu':
					case 'mouseup':
					case 'dragend':
						;((fc = !1), _p(W, a, K))
						break
					case 'selectionchange':
						if (oE) break
					case 'keydown':
					case 'keyup':
						_p(W, a, K)
				}
				var Ce
				if (ic)
					e: {
						switch (e) {
							case 'compositionstart':
								var Oe = 'onCompositionStart'
								break e
							case 'compositionend':
								Oe = 'onCompositionEnd'
								break e
							case 'compositionupdate':
								Oe = 'onCompositionUpdate'
								break e
						}
						Oe = void 0
					}
				else
					fl
						? up(e, a) && (Oe = 'onCompositionEnd')
						: e === 'keydown' &&
							a.keyCode === 229 &&
							(Oe = 'onCompositionStart')
				;(Oe &&
					(lp &&
						a.locale !== 'ko' &&
						(fl || Oe !== 'onCompositionStart'
							? Oe === 'onCompositionEnd' && fl && (Ce = ul())
							: ((or = K),
								(kr = 'value' in or ? or.value : or.textContent),
								(fl = !0))),
					(ke = zu(q, Oe)),
					0 < ke.length &&
						((Oe = new rp(Oe, e, null, a, K)),
						W.push({ event: Oe, listeners: ke }),
						Ce
							? (Oe.data = Ce)
							: ((Ce = sp(a)), Ce !== null && (Oe.data = Ce)))),
					(Ce = Z_ ? J_(e, a) : W_(e, a)) &&
						((Oe = zu(q, 'onBeforeInput')),
						0 < Oe.length &&
							((ke = new rp('onBeforeInput', 'beforeinput', null, a, K)),
							W.push({ event: ke, listeners: Oe }),
							(ke.data = Ce))),
					GE(W, e, q, a, K))
			}
			$v(W, t)
		})
	}
	function Xi(e, t, a) {
		return { instance: e, listener: t, currentTarget: a }
	}
	function zu(e, t) {
		for (var a = t + 'Capture', o = []; e !== null; ) {
			var s = e,
				f = s.stateNode
			if (
				((s = s.tag),
				(s !== 5 && s !== 26 && s !== 27) ||
					f === null ||
					((s = Pr(e, a)),
					s != null && o.unshift(Xi(e, s, f)),
					(s = Pr(e, t)),
					s != null && o.push(Xi(e, s, f))),
				e.tag === 3)
			)
				return o
			e = e.return
		}
		return []
	}
	function zl(e) {
		if (e === null) return null
		do e = e.return
		while (e && e.tag !== 5 && e.tag !== 27)
		return e || null
	}
	function Yv(e, t, a, o, s) {
		for (var f = t._reactName, g = []; a !== null && a !== o; ) {
			var E = a,
				N = E.alternate,
				q = E.stateNode
			if (((E = E.tag), N !== null && N === o)) break
			;((E !== 5 && E !== 26 && E !== 27) ||
				q === null ||
				((N = q),
				s
					? ((q = Pr(a, f)), q != null && g.unshift(Xi(a, q, N)))
					: s || ((q = Pr(a, f)), q != null && g.push(Xi(a, q, N)))),
				(a = a.return))
		}
		g.length !== 0 && e.push({ event: t, listeners: g })
	}
	var YE = /\r\n?/g,
		QE = /\u0000|\uFFFD/g
	function Qv(e) {
		return (typeof e == 'string' ? e : '' + e)
			.replace(
				YE,
				`
`
			)
			.replace(QE, '')
	}
	function Kv(e, t) {
		return ((t = Qv(t)), Qv(e) === t)
	}
	function Bu() {}
	function nt(e, t, a, o, s, f) {
		switch (a) {
			case 'children':
				typeof o == 'string'
					? t === 'body' || (t === 'textarea' && o === '') || gn(e, o)
					: (typeof o == 'number' || typeof o == 'bigint') &&
						t !== 'body' &&
						gn(e, '' + o)
				break
			case 'className':
				el(e, 'class', o)
				break
			case 'tabIndex':
				el(e, 'tabindex', o)
				break
			case 'dir':
			case 'role':
			case 'viewBox':
			case 'width':
			case 'height':
				el(e, a, o)
				break
			case 'style':
				Qo(e, o, f)
				break
			case 'data':
				if (t !== 'object') {
					el(e, 'data', o)
					break
				}
			case 'src':
			case 'href':
				if (o === '' && (t !== 'a' || a !== 'href')) {
					e.removeAttribute(a)
					break
				}
				if (
					o == null ||
					typeof o == 'function' ||
					typeof o == 'symbol' ||
					typeof o == 'boolean'
				) {
					e.removeAttribute(a)
					break
				}
				;((o = al('' + o)), e.setAttribute(a, o))
				break
			case 'action':
			case 'formAction':
				if (typeof o == 'function') {
					e.setAttribute(
						a,
						"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
					)
					break
				} else
					typeof f == 'function' &&
						(a === 'formAction'
							? (t !== 'input' && nt(e, t, 'name', s.name, s, null),
								nt(e, t, 'formEncType', s.formEncType, s, null),
								nt(e, t, 'formMethod', s.formMethod, s, null),
								nt(e, t, 'formTarget', s.formTarget, s, null))
							: (nt(e, t, 'encType', s.encType, s, null),
								nt(e, t, 'method', s.method, s, null),
								nt(e, t, 'target', s.target, s, null)))
				if (o == null || typeof o == 'symbol' || typeof o == 'boolean') {
					e.removeAttribute(a)
					break
				}
				;((o = al('' + o)), e.setAttribute(a, o))
				break
			case 'onClick':
				o != null && (e.onclick = Bu)
				break
			case 'onScroll':
				o != null && qe('scroll', e)
				break
			case 'onScrollEnd':
				o != null && qe('scrollend', e)
				break
			case 'dangerouslySetInnerHTML':
				if (o != null) {
					if (typeof o != 'object' || !('__html' in o)) throw Error(i(61))
					if (((a = o.__html), a != null)) {
						if (s.children != null) throw Error(i(60))
						e.innerHTML = a
					}
				}
				break
			case 'multiple':
				e.multiple = o && typeof o != 'function' && typeof o != 'symbol'
				break
			case 'muted':
				e.muted = o && typeof o != 'function' && typeof o != 'symbol'
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
				if (
					o == null ||
					typeof o == 'function' ||
					typeof o == 'boolean' ||
					typeof o == 'symbol'
				) {
					e.removeAttribute('xlink:href')
					break
				}
				;((a = al('' + o)),
					e.setAttributeNS('http://www.w3.org/1999/xlink', 'xlink:href', a))
				break
			case 'contentEditable':
			case 'spellCheck':
			case 'draggable':
			case 'value':
			case 'autoReverse':
			case 'externalResourcesRequired':
			case 'focusable':
			case 'preserveAlpha':
				o != null && typeof o != 'function' && typeof o != 'symbol'
					? e.setAttribute(a, '' + o)
					: e.removeAttribute(a)
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
				o && typeof o != 'function' && typeof o != 'symbol'
					? e.setAttribute(a, '')
					: e.removeAttribute(a)
				break
			case 'capture':
			case 'download':
				o === !0
					? e.setAttribute(a, '')
					: o !== !1 &&
						  o != null &&
						  typeof o != 'function' &&
						  typeof o != 'symbol'
						? e.setAttribute(a, o)
						: e.removeAttribute(a)
				break
			case 'cols':
			case 'rows':
			case 'size':
			case 'span':
				o != null &&
				typeof o != 'function' &&
				typeof o != 'symbol' &&
				!isNaN(o) &&
				1 <= o
					? e.setAttribute(a, o)
					: e.removeAttribute(a)
				break
			case 'rowSpan':
			case 'start':
				o == null || typeof o == 'function' || typeof o == 'symbol' || isNaN(o)
					? e.removeAttribute(a)
					: e.setAttribute(a, o)
				break
			case 'popover':
				;(qe('beforetoggle', e), qe('toggle', e), Wa(e, 'popover', o))
				break
			case 'xlinkActuate':
				Mn(e, 'http://www.w3.org/1999/xlink', 'xlink:actuate', o)
				break
			case 'xlinkArcrole':
				Mn(e, 'http://www.w3.org/1999/xlink', 'xlink:arcrole', o)
				break
			case 'xlinkRole':
				Mn(e, 'http://www.w3.org/1999/xlink', 'xlink:role', o)
				break
			case 'xlinkShow':
				Mn(e, 'http://www.w3.org/1999/xlink', 'xlink:show', o)
				break
			case 'xlinkTitle':
				Mn(e, 'http://www.w3.org/1999/xlink', 'xlink:title', o)
				break
			case 'xlinkType':
				Mn(e, 'http://www.w3.org/1999/xlink', 'xlink:type', o)
				break
			case 'xmlBase':
				Mn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:base', o)
				break
			case 'xmlLang':
				Mn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:lang', o)
				break
			case 'xmlSpace':
				Mn(e, 'http://www.w3.org/XML/1998/namespace', 'xml:space', o)
				break
			case 'is':
				Wa(e, 'is', o)
				break
			case 'innerText':
			case 'textContent':
				break
			default:
				;(!(2 < a.length) ||
					(a[0] !== 'o' && a[0] !== 'O') ||
					(a[1] !== 'n' && a[1] !== 'N')) &&
					((a = rc.get(a) || a), Wa(e, a, o))
		}
	}
	function Uf(e, t, a, o, s, f) {
		switch (a) {
			case 'style':
				Qo(e, o, f)
				break
			case 'dangerouslySetInnerHTML':
				if (o != null) {
					if (typeof o != 'object' || !('__html' in o)) throw Error(i(61))
					if (((a = o.__html), a != null)) {
						if (s.children != null) throw Error(i(60))
						e.innerHTML = a
					}
				}
				break
			case 'children':
				typeof o == 'string'
					? gn(e, o)
					: (typeof o == 'number' || typeof o == 'bigint') && gn(e, '' + o)
				break
			case 'onScroll':
				o != null && qe('scroll', e)
				break
			case 'onScrollEnd':
				o != null && qe('scrollend', e)
				break
			case 'onClick':
				o != null && (e.onclick = Bu)
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
				if (!Po.hasOwnProperty(a))
					e: {
						if (
							a[0] === 'o' &&
							a[1] === 'n' &&
							((s = a.endsWith('Capture')),
							(t = a.slice(2, s ? a.length - 7 : void 0)),
							(f = e[Zt] || null),
							(f = f != null ? f[a] : null),
							typeof f == 'function' && e.removeEventListener(t, f, s),
							typeof o == 'function')
						) {
							;(typeof f != 'function' &&
								f !== null &&
								(a in e
									? (e[a] = null)
									: e.hasAttribute(a) && e.removeAttribute(a)),
								e.addEventListener(t, o, s))
							break e
						}
						a in e ? (e[a] = o) : o === !0 ? e.setAttribute(a, '') : Wa(e, a, o)
					}
		}
	}
	function Yt(e, t, a) {
		switch (t) {
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
				;(qe('error', e), qe('load', e))
				var o = !1,
					s = !1,
					f
				for (f in a)
					if (a.hasOwnProperty(f)) {
						var g = a[f]
						if (g != null)
							switch (f) {
								case 'src':
									o = !0
									break
								case 'srcSet':
									s = !0
									break
								case 'children':
								case 'dangerouslySetInnerHTML':
									throw Error(i(137, t))
								default:
									nt(e, t, f, g, a, null)
							}
					}
				;(s && nt(e, t, 'srcSet', a.srcSet, a, null),
					o && nt(e, t, 'src', a.src, a, null))
				return
			case 'input':
				qe('invalid', e)
				var E = (f = g = s = null),
					N = null,
					q = null
				for (o in a)
					if (a.hasOwnProperty(o)) {
						var K = a[o]
						if (K != null)
							switch (o) {
								case 'name':
									s = K
									break
								case 'type':
									g = K
									break
								case 'checked':
									N = K
									break
								case 'defaultChecked':
									q = K
									break
								case 'value':
									f = K
									break
								case 'defaultValue':
									E = K
									break
								case 'children':
								case 'dangerouslySetInnerHTML':
									if (K != null) throw Error(i(137, t))
									break
								default:
									nt(e, t, o, K, a, null)
							}
					}
				;($o(e, f, E, N, q, g, s, !1), tl(e))
				return
			case 'select':
				;(qe('invalid', e), (o = g = f = null))
				for (s in a)
					if (a.hasOwnProperty(s) && ((E = a[s]), E != null))
						switch (s) {
							case 'value':
								f = E
								break
							case 'defaultValue':
								g = E
								break
							case 'multiple':
								o = E
							default:
								nt(e, t, s, E, a, null)
						}
				;((t = f),
					(a = g),
					(e.multiple = !!o),
					t != null ? zr(e, !!o, t, !1) : a != null && zr(e, !!o, a, !0))
				return
			case 'textarea':
				;(qe('invalid', e), (f = s = o = null))
				for (g in a)
					if (a.hasOwnProperty(g) && ((E = a[g]), E != null))
						switch (g) {
							case 'value':
								o = E
								break
							case 'defaultValue':
								s = E
								break
							case 'children':
								f = E
								break
							case 'dangerouslySetInnerHTML':
								if (E != null) throw Error(i(91))
								break
							default:
								nt(e, t, g, E, a, null)
						}
				;(Ea(e, o, s, f), tl(e))
				return
			case 'option':
				for (N in a)
					if (a.hasOwnProperty(N) && ((o = a[N]), o != null))
						switch (N) {
							case 'selected':
								e.selected = o && typeof o != 'function' && typeof o != 'symbol'
								break
							default:
								nt(e, t, N, o, a, null)
						}
				return
			case 'dialog':
				;(qe('beforetoggle', e),
					qe('toggle', e),
					qe('cancel', e),
					qe('close', e))
				break
			case 'iframe':
			case 'object':
				qe('load', e)
				break
			case 'video':
			case 'audio':
				for (o = 0; o < Ki.length; o++) qe(Ki[o], e)
				break
			case 'image':
				;(qe('error', e), qe('load', e))
				break
			case 'details':
				qe('toggle', e)
				break
			case 'embed':
			case 'source':
			case 'link':
				;(qe('error', e), qe('load', e))
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
				for (q in a)
					if (a.hasOwnProperty(q) && ((o = a[q]), o != null))
						switch (q) {
							case 'children':
							case 'dangerouslySetInnerHTML':
								throw Error(i(137, t))
							default:
								nt(e, t, q, o, a, null)
						}
				return
			default:
				if (fi(t)) {
					for (K in a)
						a.hasOwnProperty(K) &&
							((o = a[K]), o !== void 0 && Uf(e, t, K, o, a, void 0))
					return
				}
		}
		for (E in a)
			a.hasOwnProperty(E) && ((o = a[E]), o != null && nt(e, t, E, o, a, null))
	}
	function KE(e, t, a, o) {
		switch (t) {
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
				var s = null,
					f = null,
					g = null,
					E = null,
					N = null,
					q = null,
					K = null
				for ($ in a) {
					var W = a[$]
					if (a.hasOwnProperty($) && W != null)
						switch ($) {
							case 'checked':
								break
							case 'value':
								break
							case 'defaultValue':
								N = W
							default:
								o.hasOwnProperty($) || nt(e, t, $, null, o, W)
						}
				}
				for (var F in o) {
					var $ = o[F]
					if (((W = a[F]), o.hasOwnProperty(F) && ($ != null || W != null)))
						switch (F) {
							case 'type':
								f = $
								break
							case 'name':
								s = $
								break
							case 'checked':
								q = $
								break
							case 'defaultChecked':
								K = $
								break
							case 'value':
								g = $
								break
							case 'defaultValue':
								E = $
								break
							case 'children':
							case 'dangerouslySetInnerHTML':
								if ($ != null) throw Error(i(137, t))
								break
							default:
								$ !== W && nt(e, t, F, $, o, W)
						}
				}
				ci(e, g, E, N, q, K, f, s)
				return
			case 'select':
				$ = g = E = F = null
				for (f in a)
					if (((N = a[f]), a.hasOwnProperty(f) && N != null))
						switch (f) {
							case 'value':
								break
							case 'multiple':
								$ = N
							default:
								o.hasOwnProperty(f) || nt(e, t, f, null, o, N)
						}
				for (s in o)
					if (
						((f = o[s]),
						(N = a[s]),
						o.hasOwnProperty(s) && (f != null || N != null))
					)
						switch (s) {
							case 'value':
								F = f
								break
							case 'defaultValue':
								E = f
								break
							case 'multiple':
								g = f
							default:
								f !== N && nt(e, t, s, f, o, N)
						}
				;((t = E),
					(a = g),
					(o = $),
					F != null
						? zr(e, !!a, F, !1)
						: !!o != !!a &&
							(t != null ? zr(e, !!a, t, !0) : zr(e, !!a, a ? [] : '', !1)))
				return
			case 'textarea':
				$ = F = null
				for (E in a)
					if (
						((s = a[E]),
						a.hasOwnProperty(E) && s != null && !o.hasOwnProperty(E))
					)
						switch (E) {
							case 'value':
								break
							case 'children':
								break
							default:
								nt(e, t, E, null, o, s)
						}
				for (g in o)
					if (
						((s = o[g]),
						(f = a[g]),
						o.hasOwnProperty(g) && (s != null || f != null))
					)
						switch (g) {
							case 'value':
								F = s
								break
							case 'defaultValue':
								$ = s
								break
							case 'children':
								break
							case 'dangerouslySetInnerHTML':
								if (s != null) throw Error(i(91))
								break
							default:
								s !== f && nt(e, t, g, s, o, f)
						}
				Io(e, F, $)
				return
			case 'option':
				for (var Me in a)
					if (
						((F = a[Me]),
						a.hasOwnProperty(Me) && F != null && !o.hasOwnProperty(Me))
					)
						switch (Me) {
							case 'selected':
								e.selected = !1
								break
							default:
								nt(e, t, Me, null, o, F)
						}
				for (N in o)
					if (
						((F = o[N]),
						($ = a[N]),
						o.hasOwnProperty(N) && F !== $ && (F != null || $ != null))
					)
						switch (N) {
							case 'selected':
								e.selected = F && typeof F != 'function' && typeof F != 'symbol'
								break
							default:
								nt(e, t, N, F, o, $)
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
				for (var Te in a)
					((F = a[Te]),
						a.hasOwnProperty(Te) &&
							F != null &&
							!o.hasOwnProperty(Te) &&
							nt(e, t, Te, null, o, F))
				for (q in o)
					if (
						((F = o[q]),
						($ = a[q]),
						o.hasOwnProperty(q) && F !== $ && (F != null || $ != null))
					)
						switch (q) {
							case 'children':
							case 'dangerouslySetInnerHTML':
								if (F != null) throw Error(i(137, t))
								break
							default:
								nt(e, t, q, F, o, $)
						}
				return
			default:
				if (fi(t)) {
					for (var rt in a)
						((F = a[rt]),
							a.hasOwnProperty(rt) &&
								F !== void 0 &&
								!o.hasOwnProperty(rt) &&
								Uf(e, t, rt, void 0, o, F))
					for (K in o)
						((F = o[K]),
							($ = a[K]),
							!o.hasOwnProperty(K) ||
								F === $ ||
								(F === void 0 && $ === void 0) ||
								Uf(e, t, K, F, o, $))
					return
				}
		}
		for (var V in a)
			((F = a[V]),
				a.hasOwnProperty(V) &&
					F != null &&
					!o.hasOwnProperty(V) &&
					nt(e, t, V, null, o, F))
		for (W in o)
			((F = o[W]),
				($ = a[W]),
				!o.hasOwnProperty(W) ||
					F === $ ||
					(F == null && $ == null) ||
					nt(e, t, W, F, o, $))
	}
	var zf = null,
		Bf = null
	function Pu(e) {
		return e.nodeType === 9 ? e : e.ownerDocument
	}
	function Xv(e) {
		switch (e) {
			case 'http://www.w3.org/2000/svg':
				return 1
			case 'http://www.w3.org/1998/Math/MathML':
				return 2
			default:
				return 0
		}
	}
	function Zv(e, t) {
		if (e === 0)
			switch (t) {
				case 'svg':
					return 1
				case 'math':
					return 2
				default:
					return 0
			}
		return e === 1 && t === 'foreignObject' ? 0 : e
	}
	function Pf(e, t) {
		return (
			e === 'textarea' ||
			e === 'noscript' ||
			typeof t.children == 'string' ||
			typeof t.children == 'number' ||
			typeof t.children == 'bigint' ||
			(typeof t.dangerouslySetInnerHTML == 'object' &&
				t.dangerouslySetInnerHTML !== null &&
				t.dangerouslySetInnerHTML.__html != null)
		)
	}
	var Vf = null
	function XE() {
		var e = window.event
		return e && e.type === 'popstate'
			? e === Vf
				? !1
				: ((Vf = e), !0)
			: ((Vf = null), !1)
	}
	var Jv = typeof setTimeout == 'function' ? setTimeout : void 0,
		ZE = typeof clearTimeout == 'function' ? clearTimeout : void 0,
		Wv = typeof Promise == 'function' ? Promise : void 0,
		JE =
			typeof queueMicrotask == 'function'
				? queueMicrotask
				: typeof Wv < 'u'
					? function (e) {
							return Wv.resolve(null).then(e).catch(WE)
						}
					: Jv
	function WE(e) {
		setTimeout(function () {
			throw e
		})
	}
	function aa(e) {
		return e === 'head'
	}
	function ey(e, t) {
		var a = t,
			o = 0,
			s = 0
		do {
			var f = a.nextSibling
			if ((e.removeChild(a), f && f.nodeType === 8))
				if (((a = f.data), a === '/$')) {
					if (0 < o && 8 > o) {
						a = o
						var g = e.ownerDocument
						if ((a & 1 && Zi(g.documentElement), a & 2 && Zi(g.body), a & 4))
							for (a = g.head, Zi(a), g = a.firstChild; g; ) {
								var E = g.nextSibling,
									N = g.nodeName
								;(g[_a] ||
									N === 'SCRIPT' ||
									N === 'STYLE' ||
									(N === 'LINK' && g.rel.toLowerCase() === 'stylesheet') ||
									a.removeChild(g),
									(g = E))
							}
					}
					if (s === 0) {
						;(e.removeChild(f), lo(t))
						return
					}
					s--
				} else
					a === '$' || a === '$?' || a === '$!'
						? s++
						: (o = a.charCodeAt(0) - 48)
			else o = 0
			a = f
		} while (a)
		lo(t)
	}
	function kf(e) {
		var t = e.firstChild
		for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
			var a = t
			switch (((t = t.nextSibling), a.nodeName)) {
				case 'HTML':
				case 'HEAD':
				case 'BODY':
					;(kf(a), ii(a))
					continue
				case 'SCRIPT':
				case 'STYLE':
					continue
				case 'LINK':
					if (a.rel.toLowerCase() === 'stylesheet') continue
			}
			e.removeChild(a)
		}
	}
	function e1(e, t, a, o) {
		for (; e.nodeType === 1; ) {
			var s = a
			if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
				if (!o && (e.nodeName !== 'INPUT' || e.type !== 'hidden')) break
			} else if (o) {
				if (!e[_a])
					switch (t) {
						case 'meta':
							if (!e.hasAttribute('itemprop')) break
							return e
						case 'link':
							if (
								((f = e.getAttribute('rel')),
								f === 'stylesheet' && e.hasAttribute('data-precedence'))
							)
								break
							if (
								f !== s.rel ||
								e.getAttribute('href') !==
									(s.href == null || s.href === '' ? null : s.href) ||
								e.getAttribute('crossorigin') !==
									(s.crossOrigin == null ? null : s.crossOrigin) ||
								e.getAttribute('title') !== (s.title == null ? null : s.title)
							)
								break
							return e
						case 'style':
							if (e.hasAttribute('data-precedence')) break
							return e
						case 'script':
							if (
								((f = e.getAttribute('src')),
								(f !== (s.src == null ? null : s.src) ||
									e.getAttribute('type') !== (s.type == null ? null : s.type) ||
									e.getAttribute('crossorigin') !==
										(s.crossOrigin == null ? null : s.crossOrigin)) &&
									f &&
									e.hasAttribute('async') &&
									!e.hasAttribute('itemprop'))
							)
								break
							return e
						default:
							return e
					}
			} else if (t === 'input' && e.type === 'hidden') {
				var f = s.name == null ? null : '' + s.name
				if (s.type === 'hidden' && e.getAttribute('name') === f) return e
			} else return e
			if (((e = Kn(e.nextSibling)), e === null)) break
		}
		return null
	}
	function t1(e, t, a) {
		if (t === '') return null
		for (; e.nodeType !== 3; )
			if (
				((e.nodeType !== 1 || e.nodeName !== 'INPUT' || e.type !== 'hidden') &&
					!a) ||
				((e = Kn(e.nextSibling)), e === null)
			)
				return null
		return e
	}
	function Hf(e) {
		return (
			e.data === '$!' ||
			(e.data === '$?' && e.ownerDocument.readyState === 'complete')
		)
	}
	function n1(e, t) {
		var a = e.ownerDocument
		if (e.data !== '$?' || a.readyState === 'complete') t()
		else {
			var o = function () {
				;(t(), a.removeEventListener('DOMContentLoaded', o))
			}
			;(a.addEventListener('DOMContentLoaded', o), (e._reactRetry = o))
		}
	}
	function Kn(e) {
		for (; e != null; e = e.nextSibling) {
			var t = e.nodeType
			if (t === 1 || t === 3) break
			if (t === 8) {
				if (
					((t = e.data),
					t === '$' || t === '$!' || t === '$?' || t === 'F!' || t === 'F')
				)
					break
				if (t === '/$') return null
			}
		}
		return e
	}
	var qf = null
	function ty(e) {
		e = e.previousSibling
		for (var t = 0; e; ) {
			if (e.nodeType === 8) {
				var a = e.data
				if (a === '$' || a === '$!' || a === '$?') {
					if (t === 0) return e
					t--
				} else a === '/$' && t++
			}
			e = e.previousSibling
		}
		return null
	}
	function ny(e, t, a) {
		switch (((t = Pu(a)), e)) {
			case 'html':
				if (((e = t.documentElement), !e)) throw Error(i(452))
				return e
			case 'head':
				if (((e = t.head), !e)) throw Error(i(453))
				return e
			case 'body':
				if (((e = t.body), !e)) throw Error(i(454))
				return e
			default:
				throw Error(i(451))
		}
	}
	function Zi(e) {
		for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0])
		ii(e)
	}
	var Bn = new Map(),
		ry = new Set()
	function Vu(e) {
		return typeof e.getRootNode == 'function'
			? e.getRootNode()
			: e.nodeType === 9
				? e
				: e.ownerDocument
	}
	var Or = re.d
	re.d = { f: r1, r: a1, D: l1, C: i1, L: o1, m: u1, X: c1, S: s1, M: f1 }
	function r1() {
		var e = Or.f(),
			t = Mu()
		return e || t
	}
	function a1(e) {
		var t = jr(e)
		t !== null && t.tag === 5 && t.type === 'form' ? Rm(t) : Or.r(e)
	}
	var Bl = typeof document > 'u' ? null : document
	function ay(e, t, a) {
		var o = Bl
		if (o && typeof t == 'string' && t) {
			var s = sn(t)
			;((s = 'link[rel="' + e + '"][href="' + s + '"]'),
				typeof a == 'string' && (s += '[crossorigin="' + a + '"]'),
				ry.has(s) ||
					(ry.add(s),
					(e = { rel: e, crossOrigin: a, href: t }),
					o.querySelector(s) === null &&
						((t = o.createElement('link')),
						Yt(t, 'link', e),
						Tt(t),
						o.head.appendChild(t))))
		}
	}
	function l1(e) {
		;(Or.D(e), ay('dns-prefetch', e, null))
	}
	function i1(e, t) {
		;(Or.C(e, t), ay('preconnect', e, t))
	}
	function o1(e, t, a) {
		Or.L(e, t, a)
		var o = Bl
		if (o && e && t) {
			var s = 'link[rel="preload"][as="' + sn(t) + '"]'
			t === 'image' && a && a.imageSrcSet
				? ((s += '[imagesrcset="' + sn(a.imageSrcSet) + '"]'),
					typeof a.imageSizes == 'string' &&
						(s += '[imagesizes="' + sn(a.imageSizes) + '"]'))
				: (s += '[href="' + sn(e) + '"]')
			var f = s
			switch (t) {
				case 'style':
					f = Pl(e)
					break
				case 'script':
					f = Vl(e)
			}
			Bn.has(f) ||
				((e = y(
					{
						rel: 'preload',
						href: t === 'image' && a && a.imageSrcSet ? void 0 : e,
						as: t
					},
					a
				)),
				Bn.set(f, e),
				o.querySelector(s) !== null ||
					(t === 'style' && o.querySelector(Ji(f))) ||
					(t === 'script' && o.querySelector(Wi(f))) ||
					((t = o.createElement('link')),
					Yt(t, 'link', e),
					Tt(t),
					o.head.appendChild(t)))
		}
	}
	function u1(e, t) {
		Or.m(e, t)
		var a = Bl
		if (a && e) {
			var o = t && typeof t.as == 'string' ? t.as : 'script',
				s =
					'link[rel="modulepreload"][as="' + sn(o) + '"][href="' + sn(e) + '"]',
				f = s
			switch (o) {
				case 'audioworklet':
				case 'paintworklet':
				case 'serviceworker':
				case 'sharedworker':
				case 'worker':
				case 'script':
					f = Vl(e)
			}
			if (
				!Bn.has(f) &&
				((e = y({ rel: 'modulepreload', href: e }, t)),
				Bn.set(f, e),
				a.querySelector(s) === null)
			) {
				switch (o) {
					case 'audioworklet':
					case 'paintworklet':
					case 'serviceworker':
					case 'sharedworker':
					case 'worker':
					case 'script':
						if (a.querySelector(Wi(f))) return
				}
				;((o = a.createElement('link')),
					Yt(o, 'link', e),
					Tt(o),
					a.head.appendChild(o))
			}
		}
	}
	function s1(e, t, a) {
		Or.S(e, t, a)
		var o = Bl
		if (o && e) {
			var s = Lr(o).hoistableStyles,
				f = Pl(e)
			t = t || 'default'
			var g = s.get(f)
			if (!g) {
				var E = { loading: 0, preload: null }
				if ((g = o.querySelector(Ji(f)))) E.loading = 5
				else {
					;((e = y({ rel: 'stylesheet', href: e, 'data-precedence': t }, a)),
						(a = Bn.get(f)) && Gf(e, a))
					var N = (g = o.createElement('link'))
					;(Tt(N),
						Yt(N, 'link', e),
						(N._p = new Promise(function (q, K) {
							;((N.onload = q), (N.onerror = K))
						})),
						N.addEventListener('load', function () {
							E.loading |= 1
						}),
						N.addEventListener('error', function () {
							E.loading |= 2
						}),
						(E.loading |= 4),
						ku(g, t, o))
				}
				;((g = { type: 'stylesheet', instance: g, count: 1, state: E }),
					s.set(f, g))
			}
		}
	}
	function c1(e, t) {
		Or.X(e, t)
		var a = Bl
		if (a && e) {
			var o = Lr(a).hoistableScripts,
				s = Vl(e),
				f = o.get(s)
			f ||
				((f = a.querySelector(Wi(s))),
				f ||
					((e = y({ src: e, async: !0 }, t)),
					(t = Bn.get(s)) && Ff(e, t),
					(f = a.createElement('script')),
					Tt(f),
					Yt(f, 'link', e),
					a.head.appendChild(f)),
				(f = { type: 'script', instance: f, count: 1, state: null }),
				o.set(s, f))
		}
	}
	function f1(e, t) {
		Or.M(e, t)
		var a = Bl
		if (a && e) {
			var o = Lr(a).hoistableScripts,
				s = Vl(e),
				f = o.get(s)
			f ||
				((f = a.querySelector(Wi(s))),
				f ||
					((e = y({ src: e, async: !0, type: 'module' }, t)),
					(t = Bn.get(s)) && Ff(e, t),
					(f = a.createElement('script')),
					Tt(f),
					Yt(f, 'link', e),
					a.head.appendChild(f)),
				(f = { type: 'script', instance: f, count: 1, state: null }),
				o.set(s, f))
		}
	}
	function ly(e, t, a, o) {
		var s = (s = ge.current) ? Vu(s) : null
		if (!s) throw Error(i(446))
		switch (e) {
			case 'meta':
			case 'title':
				return null
			case 'style':
				return typeof a.precedence == 'string' && typeof a.href == 'string'
					? ((t = Pl(a.href)),
						(a = Lr(s).hoistableStyles),
						(o = a.get(t)),
						o ||
							((o = { type: 'style', instance: null, count: 0, state: null }),
							a.set(t, o)),
						o)
					: { type: 'void', instance: null, count: 0, state: null }
			case 'link':
				if (
					a.rel === 'stylesheet' &&
					typeof a.href == 'string' &&
					typeof a.precedence == 'string'
				) {
					e = Pl(a.href)
					var f = Lr(s).hoistableStyles,
						g = f.get(e)
					if (
						(g ||
							((s = s.ownerDocument || s),
							(g = {
								type: 'stylesheet',
								instance: null,
								count: 0,
								state: { loading: 0, preload: null }
							}),
							f.set(e, g),
							(f = s.querySelector(Ji(e))) &&
								!f._p &&
								((g.instance = f), (g.state.loading = 5)),
							Bn.has(e) ||
								((a = {
									rel: 'preload',
									as: 'style',
									href: a.href,
									crossOrigin: a.crossOrigin,
									integrity: a.integrity,
									media: a.media,
									hrefLang: a.hrefLang,
									referrerPolicy: a.referrerPolicy
								}),
								Bn.set(e, a),
								f || d1(s, e, a, g.state))),
						t && o === null)
					)
						throw Error(i(528, ''))
					return g
				}
				if (t && o !== null) throw Error(i(529, ''))
				return null
			case 'script':
				return (
					(t = a.async),
					(a = a.src),
					typeof a == 'string' &&
					t &&
					typeof t != 'function' &&
					typeof t != 'symbol'
						? ((t = Vl(a)),
							(a = Lr(s).hoistableScripts),
							(o = a.get(t)),
							o ||
								((o = {
									type: 'script',
									instance: null,
									count: 0,
									state: null
								}),
								a.set(t, o)),
							o)
						: { type: 'void', instance: null, count: 0, state: null }
				)
			default:
				throw Error(i(444, e))
		}
	}
	function Pl(e) {
		return 'href="' + sn(e) + '"'
	}
	function Ji(e) {
		return 'link[rel="stylesheet"][' + e + ']'
	}
	function iy(e) {
		return y({}, e, { 'data-precedence': e.precedence, precedence: null })
	}
	function d1(e, t, a, o) {
		e.querySelector('link[rel="preload"][as="style"][' + t + ']')
			? (o.loading = 1)
			: ((t = e.createElement('link')),
				(o.preload = t),
				t.addEventListener('load', function () {
					return (o.loading |= 1)
				}),
				t.addEventListener('error', function () {
					return (o.loading |= 2)
				}),
				Yt(t, 'link', a),
				Tt(t),
				e.head.appendChild(t))
	}
	function Vl(e) {
		return '[src="' + sn(e) + '"]'
	}
	function Wi(e) {
		return 'script[async]' + e
	}
	function oy(e, t, a) {
		if ((t.count++, t.instance === null))
			switch (t.type) {
				case 'style':
					var o = e.querySelector('style[data-href~="' + sn(a.href) + '"]')
					if (o) return ((t.instance = o), Tt(o), o)
					var s = y({}, a, {
						'data-href': a.href,
						'data-precedence': a.precedence,
						href: null,
						precedence: null
					})
					return (
						(o = (e.ownerDocument || e).createElement('style')),
						Tt(o),
						Yt(o, 'style', s),
						ku(o, a.precedence, e),
						(t.instance = o)
					)
				case 'stylesheet':
					s = Pl(a.href)
					var f = e.querySelector(Ji(s))
					if (f) return ((t.state.loading |= 4), (t.instance = f), Tt(f), f)
					;((o = iy(a)),
						(s = Bn.get(s)) && Gf(o, s),
						(f = (e.ownerDocument || e).createElement('link')),
						Tt(f))
					var g = f
					return (
						(g._p = new Promise(function (E, N) {
							;((g.onload = E), (g.onerror = N))
						})),
						Yt(f, 'link', o),
						(t.state.loading |= 4),
						ku(f, a.precedence, e),
						(t.instance = f)
					)
				case 'script':
					return (
						(f = Vl(a.src)),
						(s = e.querySelector(Wi(f)))
							? ((t.instance = s), Tt(s), s)
							: ((o = a),
								(s = Bn.get(f)) && ((o = y({}, a)), Ff(o, s)),
								(e = e.ownerDocument || e),
								(s = e.createElement('script')),
								Tt(s),
								Yt(s, 'link', o),
								e.head.appendChild(s),
								(t.instance = s))
					)
				case 'void':
					return null
				default:
					throw Error(i(443, t.type))
			}
		else
			t.type === 'stylesheet' &&
				(t.state.loading & 4) === 0 &&
				((o = t.instance), (t.state.loading |= 4), ku(o, a.precedence, e))
		return t.instance
	}
	function ku(e, t, a) {
		for (
			var o = a.querySelectorAll(
					'link[rel="stylesheet"][data-precedence],style[data-precedence]'
				),
				s = o.length ? o[o.length - 1] : null,
				f = s,
				g = 0;
			g < o.length;
			g++
		) {
			var E = o[g]
			if (E.dataset.precedence === t) f = E
			else if (f !== s) break
		}
		f
			? f.parentNode.insertBefore(e, f.nextSibling)
			: ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(e, t.firstChild))
	}
	function Gf(e, t) {
		;(e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.title == null && (e.title = t.title))
	}
	function Ff(e, t) {
		;(e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
			e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
			e.integrity == null && (e.integrity = t.integrity))
	}
	var Hu = null
	function uy(e, t, a) {
		if (Hu === null) {
			var o = new Map(),
				s = (Hu = new Map())
			s.set(a, o)
		} else ((s = Hu), (o = s.get(a)), o || ((o = new Map()), s.set(a, o)))
		if (o.has(e)) return o
		for (
			o.set(e, null), a = a.getElementsByTagName(e), s = 0;
			s < a.length;
			s++
		) {
			var f = a[s]
			if (
				!(
					f[_a] ||
					f[Vt] ||
					(e === 'link' && f.getAttribute('rel') === 'stylesheet')
				) &&
				f.namespaceURI !== 'http://www.w3.org/2000/svg'
			) {
				var g = f.getAttribute(t) || ''
				g = e + g
				var E = o.get(g)
				E ? E.push(f) : o.set(g, [f])
			}
		}
		return o
	}
	function sy(e, t, a) {
		;((e = e.ownerDocument || e),
			e.head.insertBefore(
				a,
				t === 'title' ? e.querySelector('head > title') : null
			))
	}
	function h1(e, t, a) {
		if (a === 1 || t.itemProp != null) return !1
		switch (e) {
			case 'meta':
			case 'title':
				return !0
			case 'style':
				if (
					typeof t.precedence != 'string' ||
					typeof t.href != 'string' ||
					t.href === ''
				)
					break
				return !0
			case 'link':
				if (
					typeof t.rel != 'string' ||
					typeof t.href != 'string' ||
					t.href === '' ||
					t.onLoad ||
					t.onError
				)
					break
				switch (t.rel) {
					case 'stylesheet':
						return (
							(e = t.disabled),
							typeof t.precedence == 'string' && e == null
						)
					default:
						return !0
				}
			case 'script':
				if (
					t.async &&
					typeof t.async != 'function' &&
					typeof t.async != 'symbol' &&
					!t.onLoad &&
					!t.onError &&
					t.src &&
					typeof t.src == 'string'
				)
					return !0
		}
		return !1
	}
	function cy(e) {
		return !(e.type === 'stylesheet' && (e.state.loading & 3) === 0)
	}
	var eo = null
	function p1() {}
	function m1(e, t, a) {
		if (eo === null) throw Error(i(475))
		var o = eo
		if (
			t.type === 'stylesheet' &&
			(typeof a.media != 'string' || matchMedia(a.media).matches !== !1) &&
			(t.state.loading & 4) === 0
		) {
			if (t.instance === null) {
				var s = Pl(a.href),
					f = e.querySelector(Ji(s))
				if (f) {
					;((e = f._p),
						e !== null &&
							typeof e == 'object' &&
							typeof e.then == 'function' &&
							(o.count++, (o = qu.bind(o)), e.then(o, o)),
						(t.state.loading |= 4),
						(t.instance = f),
						Tt(f))
					return
				}
				;((f = e.ownerDocument || e),
					(a = iy(a)),
					(s = Bn.get(s)) && Gf(a, s),
					(f = f.createElement('link')),
					Tt(f))
				var g = f
				;((g._p = new Promise(function (E, N) {
					;((g.onload = E), (g.onerror = N))
				})),
					Yt(f, 'link', a),
					(t.instance = f))
			}
			;(o.stylesheets === null && (o.stylesheets = new Map()),
				o.stylesheets.set(t, e),
				(e = t.state.preload) &&
					(t.state.loading & 3) === 0 &&
					(o.count++,
					(t = qu.bind(o)),
					e.addEventListener('load', t),
					e.addEventListener('error', t)))
		}
	}
	function v1() {
		if (eo === null) throw Error(i(475))
		var e = eo
		return (
			e.stylesheets && e.count === 0 && $f(e, e.stylesheets),
			0 < e.count
				? function (t) {
						var a = setTimeout(function () {
							if ((e.stylesheets && $f(e, e.stylesheets), e.unsuspend)) {
								var o = e.unsuspend
								;((e.unsuspend = null), o())
							}
						}, 6e4)
						return (
							(e.unsuspend = t),
							function () {
								;((e.unsuspend = null), clearTimeout(a))
							}
						)
					}
				: null
		)
	}
	function qu() {
		if ((this.count--, this.count === 0)) {
			if (this.stylesheets) $f(this, this.stylesheets)
			else if (this.unsuspend) {
				var e = this.unsuspend
				;((this.unsuspend = null), e())
			}
		}
	}
	var Gu = null
	function $f(e, t) {
		;((e.stylesheets = null),
			e.unsuspend !== null &&
				(e.count++,
				(Gu = new Map()),
				t.forEach(y1, e),
				(Gu = null),
				qu.call(e)))
	}
	function y1(e, t) {
		if (!(t.state.loading & 4)) {
			var a = Gu.get(e)
			if (a) var o = a.get(null)
			else {
				;((a = new Map()), Gu.set(e, a))
				for (
					var s = e.querySelectorAll(
							'link[data-precedence],style[data-precedence]'
						),
						f = 0;
					f < s.length;
					f++
				) {
					var g = s[f]
					;(g.nodeName === 'LINK' || g.getAttribute('media') !== 'not all') &&
						(a.set(g.dataset.precedence, g), (o = g))
				}
				o && a.set(null, o)
			}
			;((s = t.instance),
				(g = s.getAttribute('data-precedence')),
				(f = a.get(g) || o),
				f === o && a.set(null, s),
				a.set(g, s),
				this.count++,
				(o = qu.bind(this)),
				s.addEventListener('load', o),
				s.addEventListener('error', o),
				f
					? f.parentNode.insertBefore(s, f.nextSibling)
					: ((e = e.nodeType === 9 ? e.head : e),
						e.insertBefore(s, e.firstChild)),
				(t.state.loading |= 4))
		}
	}
	var to = {
		$$typeof: T,
		Provider: null,
		Consumer: null,
		_currentValue: ae,
		_currentValue2: ae,
		_threadCount: 0
	}
	function g1(e, t, a, o, s, f, g, E) {
		;((this.tag = 1),
			(this.containerInfo = e),
			(this.pingCache = this.current = this.pendingChildren = null),
			(this.timeoutHandle = -1),
			(this.callbackNode =
				this.next =
				this.pendingContext =
				this.context =
				this.cancelPendingCommit =
					null),
			(this.callbackPriority = 0),
			(this.expirationTimes = mn(-1)),
			(this.entangledLanes =
				this.shellSuspendCounter =
				this.errorRecoveryDisabledLanes =
				this.expiredLanes =
				this.warmLanes =
				this.pingedLanes =
				this.suspendedLanes =
				this.pendingLanes =
					0),
			(this.entanglements = mn(0)),
			(this.hiddenUpdates = mn(null)),
			(this.identifierPrefix = o),
			(this.onUncaughtError = s),
			(this.onCaughtError = f),
			(this.onRecoverableError = g),
			(this.pooledCache = null),
			(this.pooledCacheLanes = 0),
			(this.formState = E),
			(this.incompleteTransitions = new Map()))
	}
	function fy(e, t, a, o, s, f, g, E, N, q, K, W) {
		return (
			(e = new g1(e, t, a, g, E, N, q, W)),
			(t = 1),
			f === !0 && (t |= 24),
			(f = _n(3, null, null, t)),
			(e.current = f),
			(f.stateNode = e),
			(t = Ac()),
			t.refCount++,
			(e.pooledCache = t),
			t.refCount++,
			(f.memoizedState = { element: o, isDehydrated: a, cache: t }),
			Oc(f),
			e
		)
	}
	function dy(e) {
		return e ? ((e = vl), e) : vl
	}
	function hy(e, t, a, o, s, f) {
		;((s = dy(s)),
			o.context === null ? (o.context = s) : (o.pendingContext = s),
			(o = $r(t)),
			(o.payload = { element: a }),
			(f = f === void 0 ? null : f),
			f !== null && (o.callback = f),
			(a = Ir(e, o, t)),
			a !== null && (wn(a, e, t), Di(a, e, t)))
	}
	function py(e, t) {
		if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
			var a = e.retryLane
			e.retryLane = a !== 0 && a < t ? a : t
		}
	}
	function If(e, t) {
		;(py(e, t), (e = e.alternate) && py(e, t))
	}
	function my(e) {
		if (e.tag === 13) {
			var t = ml(e, 67108864)
			;(t !== null && wn(t, e, 67108864), If(e, 67108864))
		}
	}
	var Fu = !0
	function b1(e, t, a, o) {
		var s = G.T
		G.T = null
		var f = re.p
		try {
			;((re.p = 2), Yf(e, t, a, o))
		} finally {
			;((re.p = f), (G.T = s))
		}
	}
	function S1(e, t, a, o) {
		var s = G.T
		G.T = null
		var f = re.p
		try {
			;((re.p = 8), Yf(e, t, a, o))
		} finally {
			;((re.p = f), (G.T = s))
		}
	}
	function Yf(e, t, a, o) {
		if (Fu) {
			var s = Qf(o)
			if (s === null) (Lf(e, t, o, $u, a), yy(e, o))
			else if (E1(s, e, t, a, o)) o.stopPropagation()
			else if ((yy(e, o), t & 4 && -1 < _1.indexOf(e))) {
				for (; s !== null; ) {
					var f = jr(s)
					if (f !== null)
						switch (f.tag) {
							case 3:
								if (((f = f.stateNode), f.current.memoizedState.isDehydrated)) {
									var g = De(f.pendingLanes)
									if (g !== 0) {
										var E = f
										for (E.pendingLanes |= 2, E.entangledLanes |= 2; g; ) {
											var N = 1 << (31 - P(g))
											;((E.entanglements[1] |= N), (g &= ~N))
										}
										;(dr(f), (We & 6) === 0 && ((Tu = ct() + 500), Qi(0)))
									}
								}
								break
							case 13:
								;((E = ml(f, 2)), E !== null && wn(E, f, 2), Mu(), If(f, 2))
						}
					if (((f = Qf(o)), f === null && Lf(e, t, o, $u, a), f === s)) break
					s = f
				}
				s !== null && o.stopPropagation()
			} else Lf(e, t, o, null, a)
		}
	}
	function Qf(e) {
		return ((e = ll(e)), Kf(e))
	}
	var $u = null
	function Kf(e) {
		if ((($u = null), (e = Nr(e)), e !== null)) {
			var t = c(e)
			if (t === null) e = null
			else {
				var a = t.tag
				if (a === 13) {
					if (((e = d(t)), e !== null)) return e
					e = null
				} else if (a === 3) {
					if (t.stateNode.current.memoizedState.isDehydrated)
						return t.tag === 3 ? t.stateNode.containerInfo : null
					e = null
				} else t !== e && (e = null)
			}
		}
		return (($u = e), null)
	}
	function vy(e) {
		switch (e) {
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
				switch (rr()) {
					case Ye:
						return 2
					case Qe:
						return 8
					case Ge:
					case jt:
						return 32
					case ot:
						return 268435456
					default:
						return 32
				}
			default:
				return 32
		}
	}
	var Xf = !1,
		la = null,
		ia = null,
		oa = null,
		no = new Map(),
		ro = new Map(),
		ua = [],
		_1 =
			'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset'.split(
				' '
			)
	function yy(e, t) {
		switch (e) {
			case 'focusin':
			case 'focusout':
				la = null
				break
			case 'dragenter':
			case 'dragleave':
				ia = null
				break
			case 'mouseover':
			case 'mouseout':
				oa = null
				break
			case 'pointerover':
			case 'pointerout':
				no.delete(t.pointerId)
				break
			case 'gotpointercapture':
			case 'lostpointercapture':
				ro.delete(t.pointerId)
		}
	}
	function ao(e, t, a, o, s, f) {
		return e === null || e.nativeEvent !== f
			? ((e = {
					blockedOn: t,
					domEventName: a,
					eventSystemFlags: o,
					nativeEvent: f,
					targetContainers: [s]
				}),
				t !== null && ((t = jr(t)), t !== null && my(t)),
				e)
			: ((e.eventSystemFlags |= o),
				(t = e.targetContainers),
				s !== null && t.indexOf(s) === -1 && t.push(s),
				e)
	}
	function E1(e, t, a, o, s) {
		switch (t) {
			case 'focusin':
				return ((la = ao(la, e, t, a, o, s)), !0)
			case 'dragenter':
				return ((ia = ao(ia, e, t, a, o, s)), !0)
			case 'mouseover':
				return ((oa = ao(oa, e, t, a, o, s)), !0)
			case 'pointerover':
				var f = s.pointerId
				return (no.set(f, ao(no.get(f) || null, e, t, a, o, s)), !0)
			case 'gotpointercapture':
				return (
					(f = s.pointerId),
					ro.set(f, ao(ro.get(f) || null, e, t, a, o, s)),
					!0
				)
		}
		return !1
	}
	function gy(e) {
		var t = Nr(e.target)
		if (t !== null) {
			var a = c(t)
			if (a !== null) {
				if (((t = a.tag), t === 13)) {
					if (((t = d(a)), t !== null)) {
						;((e.blockedOn = t),
							Uo(e.priority, function () {
								if (a.tag === 13) {
									var o = An()
									o = ni(o)
									var s = ml(a, o)
									;(s !== null && wn(s, a, o), If(a, o))
								}
							}))
						return
					}
				} else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
					e.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null
					return
				}
			}
		}
		e.blockedOn = null
	}
	function Iu(e) {
		if (e.blockedOn !== null) return !1
		for (var t = e.targetContainers; 0 < t.length; ) {
			var a = Qf(e.nativeEvent)
			if (a === null) {
				a = e.nativeEvent
				var o = new a.constructor(a.type, a)
				;((di = o), a.target.dispatchEvent(o), (di = null))
			} else return ((t = jr(a)), t !== null && my(t), (e.blockedOn = a), !1)
			t.shift()
		}
		return !0
	}
	function by(e, t, a) {
		Iu(e) && a.delete(t)
	}
	function R1() {
		;((Xf = !1),
			la !== null && Iu(la) && (la = null),
			ia !== null && Iu(ia) && (ia = null),
			oa !== null && Iu(oa) && (oa = null),
			no.forEach(by),
			ro.forEach(by))
	}
	function Yu(e, t) {
		e.blockedOn === t &&
			((e.blockedOn = null),
			Xf ||
				((Xf = !0), n.unstable_scheduleCallback(n.unstable_NormalPriority, R1)))
	}
	var Qu = null
	function Sy(e) {
		Qu !== e &&
			((Qu = e),
			n.unstable_scheduleCallback(n.unstable_NormalPriority, function () {
				Qu === e && (Qu = null)
				for (var t = 0; t < e.length; t += 3) {
					var a = e[t],
						o = e[t + 1],
						s = e[t + 2]
					if (typeof o != 'function') {
						if (Kf(o || a) === null) continue
						break
					}
					var f = jr(a)
					f !== null &&
						(e.splice(t, 3),
						(t -= 3),
						Qc(f, { pending: !0, data: s, method: a.method, action: o }, o, s))
				}
			}))
	}
	function lo(e) {
		function t(N) {
			return Yu(N, e)
		}
		;(la !== null && Yu(la, e),
			ia !== null && Yu(ia, e),
			oa !== null && Yu(oa, e),
			no.forEach(t),
			ro.forEach(t))
		for (var a = 0; a < ua.length; a++) {
			var o = ua[a]
			o.blockedOn === e && (o.blockedOn = null)
		}
		for (; 0 < ua.length && ((a = ua[0]), a.blockedOn === null); )
			(gy(a), a.blockedOn === null && ua.shift())
		if (((a = (e.ownerDocument || e).$$reactFormReplay), a != null))
			for (o = 0; o < a.length; o += 3) {
				var s = a[o],
					f = a[o + 1],
					g = s[Zt] || null
				if (typeof f == 'function') g || Sy(a)
				else if (g) {
					var E = null
					if (f && f.hasAttribute('formAction')) {
						if (((s = f), (g = f[Zt] || null))) E = g.formAction
						else if (Kf(s) !== null) continue
					} else E = g.action
					;(typeof E == 'function'
						? (a[o + 1] = E)
						: (a.splice(o, 3), (o -= 3)),
						Sy(a))
				}
			}
	}
	function Zf(e) {
		this._internalRoot = e
	}
	;((Ku.prototype.render = Zf.prototype.render =
		function (e) {
			var t = this._internalRoot
			if (t === null) throw Error(i(409))
			var a = t.current,
				o = An()
			hy(a, o, e, t, null, null)
		}),
		(Ku.prototype.unmount = Zf.prototype.unmount =
			function () {
				var e = this._internalRoot
				if (e !== null) {
					this._internalRoot = null
					var t = e.containerInfo
					;(hy(e.current, 2, null, e, null, null), Mu(), (t[Dr] = null))
				}
			}))
	function Ku(e) {
		this._internalRoot = e
	}
	Ku.prototype.unstable_scheduleHydration = function (e) {
		if (e) {
			var t = ai()
			e = { blockedOn: null, target: e, priority: t }
			for (var a = 0; a < ua.length && t !== 0 && t < ua[a].priority; a++);
			;(ua.splice(a, 0, e), a === 0 && gy(e))
		}
	}
	var _y = r.version
	if (_y !== '19.1.0') throw Error(i(527, _y, '19.1.0'))
	re.findDOMNode = function (e) {
		var t = e._reactInternals
		if (t === void 0)
			throw typeof e.render == 'function'
				? Error(i(188))
				: ((e = Object.keys(e).join(',')), Error(i(268, e)))
		return (
			(e = p(t)),
			(e = e !== null ? v(e) : null),
			(e = e === null ? null : e.stateNode),
			e
		)
	}
	var x1 = {
		bundleType: 0,
		version: '19.1.0',
		rendererPackageName: 'react-dom',
		currentDispatcherRef: G,
		reconcilerVersion: '19.1.0'
	}
	if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
		var Xu = __REACT_DEVTOOLS_GLOBAL_HOOK__
		if (!Xu.isDisabled && Xu.supportsFiber)
			try {
				;((xt = Xu.inject(x1)), (D = Xu))
			} catch {}
	}
	return (
		(oo.createRoot = function (e, t) {
			if (!u(e)) throw Error(i(299))
			var a = !1,
				o = '',
				s = Bm,
				f = Pm,
				g = Vm,
				E = null
			return (
				t != null &&
					(t.unstable_strictMode === !0 && (a = !0),
					t.identifierPrefix !== void 0 && (o = t.identifierPrefix),
					t.onUncaughtError !== void 0 && (s = t.onUncaughtError),
					t.onCaughtError !== void 0 && (f = t.onCaughtError),
					t.onRecoverableError !== void 0 && (g = t.onRecoverableError),
					t.unstable_transitionCallbacks !== void 0 &&
						(E = t.unstable_transitionCallbacks)),
				(t = fy(e, 1, !1, null, null, a, o, s, f, g, E, null)),
				(e[Dr] = t.current),
				jf(e),
				new Zf(t)
			)
		}),
		(oo.hydrateRoot = function (e, t, a) {
			if (!u(e)) throw Error(i(299))
			var o = !1,
				s = '',
				f = Bm,
				g = Pm,
				E = Vm,
				N = null,
				q = null
			return (
				a != null &&
					(a.unstable_strictMode === !0 && (o = !0),
					a.identifierPrefix !== void 0 && (s = a.identifierPrefix),
					a.onUncaughtError !== void 0 && (f = a.onUncaughtError),
					a.onCaughtError !== void 0 && (g = a.onCaughtError),
					a.onRecoverableError !== void 0 && (E = a.onRecoverableError),
					a.unstable_transitionCallbacks !== void 0 &&
						(N = a.unstable_transitionCallbacks),
					a.formState !== void 0 && (q = a.formState)),
				(t = fy(e, 1, !0, t, a ?? null, o, s, f, g, E, N, q)),
				(t.context = dy(null)),
				(a = t.current),
				(o = An()),
				(o = ni(o)),
				(s = $r(o)),
				(s.callback = null),
				Ir(a, s, o),
				(a = o),
				(t.current.lanes = a),
				vn(t, a),
				dr(t),
				(e[Dr] = t.current),
				jf(e),
				new Ku(t)
			)
		}),
		(oo.version = '19.1.0'),
		oo
	)
}
var Uy
function mR() {
	if (Uy) return td.exports
	Uy = 1
	function n() {
		if (
			!(
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
				typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
			)
		)
			try {
				__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)
			} catch (r) {
				console.error(r)
			}
	}
	return (n(), (td.exports = pR()), td.exports)
}
var rj = mR(),
	ib = m.createContext(void 0),
	ob = (n) => {
		const r = m.useContext(ib)
		if (!r)
			throw new Error('No QueryClient set, use QueryClientProvider to set one')
		return r
	},
	aj = ({ client: n, children: r }) => (
		m.useEffect(
			() => (
				n.mount(),
				() => {
					n.unmount()
				}
			),
			[n]
		),
		z.jsx(ib.Provider, { value: n, children: r })
	),
	ub = m.createContext(!1),
	vR = () => m.useContext(ub)
ub.Provider
function yR() {
	let n = !1
	return {
		clearReset: () => {
			n = !1
		},
		reset: () => {
			n = !0
		},
		isReset: () => n
	}
}
var gR = m.createContext(yR()),
	bR = () => m.useContext(gR),
	SR = (n, r, l) => {
		const i =
			l != null && l.state.error && typeof n.throwOnError == 'function'
				? th(n.throwOnError, [l.state.error, l])
				: n.throwOnError
		;(n.suspense || n.experimental_prefetchInRender || i) &&
			(r.isReset() || (n.retryOnMount = !1))
	},
	_R = (n) => {
		m.useEffect(() => {
			n.clearReset()
		}, [n])
	},
	ER = ({
		result: n,
		errorResetBoundary: r,
		throwOnError: l,
		query: i,
		suspense: u
	}) =>
		n.isError &&
		!r.isReset() &&
		!n.isFetching &&
		i &&
		((u && n.data === void 0) || th(l, [n.error, i])),
	RR = (n) => {
		if (n.suspense) {
			const l = (u) => (u === 'static' ? u : Math.max(u ?? 1e3, 1e3)),
				i = n.staleTime
			;((n.staleTime = typeof i == 'function' ? (...u) => l(i(...u)) : l(i)),
				typeof n.gcTime == 'number' && (n.gcTime = Math.max(n.gcTime, 1e3)))
		}
	},
	xR = (n, r) => n.isLoading && n.isFetching && !r,
	AR = (n, r) => (n == null ? void 0 : n.suspense) && r.isPending,
	zy = (n, r, l) =>
		r.fetchOptimistic(n).catch(() => {
			l.clearReset()
		})
function wR(n, r, l) {
	var A, M, _, S
	const i = vR(),
		u = bR(),
		c = ob(),
		d = c.defaultQueryOptions(n)
	;(M =
		(A = c.getDefaultOptions().queries) == null
			? void 0
			: A._experimental_beforeQuery) == null || M.call(A, d)
	const h = c.getQueryCache().get(d.queryHash),
		p = n.subscribed !== !1
	;((d._optimisticResults = i ? 'isRestoring' : p ? 'optimistic' : void 0),
		RR(d),
		SR(d, u, h),
		_R(u))
	const v = !c.getQueryCache().get(d.queryHash),
		[y] = m.useState(() => new r(c, d)),
		b = y.getOptimisticResult(d),
		R = !i && p
	if (
		(m.useSyncExternalStore(
			m.useCallback(
				(x) => {
					const C = R ? y.subscribe(rb.batchCalls(x)) : Ad
					return (y.updateResult(), C)
				},
				[y, R]
			),
			() => y.getCurrentResult(),
			() => y.getCurrentResult()
		),
		m.useEffect(() => {
			y.setOptions(d)
		}, [d, y]),
		AR(d, b))
	)
		throw zy(d, y, u)
	if (
		ER({
			result: b,
			errorResetBoundary: u,
			throwOnError: d.throwOnError,
			query: h,
			suspense: d.suspense
		})
	)
		throw b.error
	if (
		((S =
			(_ = c.getDefaultOptions().queries) == null
				? void 0
				: _._experimental_afterQuery) == null || S.call(_, d, b),
		d.experimental_prefetchInRender && !C1.isServer() && xR(b, i))
	) {
		const x = v ? zy(d, y, u) : h == null ? void 0 : h.promise
		x == null ||
			x.catch(Ad).finally(() => {
				y.updateResult()
			})
	}
	return d.notifyOnChangeProps ? b : y.trackResult(b)
}
function lj(n, r) {
	return wR(n, T1)
}
function ij(n, r) {
	const l = ob(),
		[i] = m.useState(() => new O1(l, n))
	m.useEffect(() => {
		i.setOptions(n)
	}, [i, n])
	const u = m.useSyncExternalStore(
			m.useCallback((d) => i.subscribe(rb.batchCalls(d)), [i]),
			() => i.getCurrentResult(),
			() => i.getCurrentResult()
		),
		c = m.useCallback(
			(d, h) => {
				i.mutate(d, h).catch(Ad)
			},
			[i]
		)
	if (u.error && th(i.options.throwOnError, [u.error])) throw u.error
	return { ...u, mutate: c, mutateAsync: u.mutate }
}
var Xl = ws()
const oj = lb(Xl)
var rd, By
function CR() {
	if (By) return rd
	By = 1
	var n = Object.create,
		r = Object.defineProperty,
		l = Object.getOwnPropertyDescriptor,
		i = Object.getOwnPropertyNames,
		u = Object.getPrototypeOf,
		c = Object.prototype.hasOwnProperty,
		d = (_, S) => {
			for (var x in S) r(_, x, { get: S[x], enumerable: !0 })
		},
		h = (_, S, x, C) => {
			if ((S && typeof S == 'object') || typeof S == 'function')
				for (let T of i(S))
					!c.call(_, T) &&
						T !== x &&
						r(_, T, {
							get: () => S[T],
							enumerable: !(C = l(S, T)) || C.enumerable
						})
			return _
		},
		p = (_, S, x) => (
			(x = _ != null ? n(u(_)) : {}),
			h(
				!_ || !_.__esModule ? r(x, 'default', { value: _, enumerable: !0 }) : x,
				_
			)
		),
		v = (_) => h(r({}, '__esModule', { value: !0 }), _),
		y = {}
	;(d(y, { composeRefs: () => A, useComposedRefs: () => M }), (rd = v(y)))
	var b = p(va())
	function R(_, S) {
		if (typeof _ == 'function') return _(S)
		_ != null && (_.current = S)
	}
	function A(..._) {
		return (S) => {
			let x = !1
			const C = _.map((T) => {
				const j = R(T, S)
				return (!x && typeof j == 'function' && (x = !0), j)
			})
			if (x)
				return () => {
					for (let T = 0; T < C.length; T++) {
						const j = C[T]
						typeof j == 'function' ? j() : R(_[T], null)
					}
				}
		}
	}
	function M(..._) {
		return b.useCallback(A(..._), _)
	}
	return rd
}
var ad, Py
function TR() {
	if (Py) return ad
	Py = 1
	var n = Object.create,
		r = Object.defineProperty,
		l = Object.getOwnPropertyDescriptor,
		i = Object.getOwnPropertyNames,
		u = Object.getPrototypeOf,
		c = Object.prototype.hasOwnProperty,
		d = (I, X) => {
			for (var ne in X) r(I, ne, { get: X[ne], enumerable: !0 })
		},
		h = (I, X, ne, se) => {
			if ((X && typeof X == 'object') || typeof X == 'function')
				for (let G of i(X))
					!c.call(I, G) &&
						G !== ne &&
						r(I, G, {
							get: () => X[G],
							enumerable: !(se = l(X, G)) || se.enumerable
						})
			return I
		},
		p = (I, X, ne) => (
			(ne = I != null ? n(u(I)) : {}),
			h(
				!I || !I.__esModule
					? r(ne, 'default', { value: I, enumerable: !0 })
					: ne,
				I
			)
		),
		v = (I) => h(r({}, '__esModule', { value: !0 }), I),
		y = {}
	;(d(y, {
		Root: () => M,
		Slot: () => M,
		Slottable: () => x,
		createSlot: () => A,
		createSlottable: () => S
	}),
		(ad = v(y)))
	var b = p(va()),
		R = CR()
	function A(I) {
		const X = b.forwardRef((ne, se) => {
			let { children: G, ...re } = ne,
				ae = null,
				ee = !1
			const O = []
			;(te(G) && typeof de == 'function' && (G = de(G._payload)),
				b.Children.forEach(G, (pe) => {
					var we
					if (L(pe)) {
						ee = !0
						const ge = pe
						let ye = 'child' in ge.props ? ge.props.child : ge.props.children
						;(te(ye) && typeof de == 'function' && (ye = de(ye._payload)),
							(ae = C(ge, ye)),
							O.push(
								(we = ae == null ? void 0 : ae.props) == null
									? void 0
									: we.children
							))
					} else O.push(pe)
				}),
				ae
					? (ae = b.cloneElement(ae, void 0, O))
					: !ee && b.Children.count(G) === 1 && b.isValidElement(G) && (ae = G))
			const Y = ae ? j(ae) : void 0,
				ie = (0, R.useComposedRefs)(se, Y)
			if (!ae) {
				if (G || G === 0) throw new Error(ee ? be(I) : _e(I))
				return G
			}
			const le = T(re, ae.props ?? {})
			return (
				ae.type !== b.Fragment && (le.ref = se ? ie : Y),
				b.cloneElement(ae, le)
			)
		})
		return ((X.displayName = `${I}.Slot`), X)
	}
	var M = A('Slot'),
		_ = Symbol.for('radix.slottable')
	function S(I) {
		const X = (ne) => ('child' in ne ? ne.children(ne.child) : ne.children)
		return ((X.displayName = `${I}.Slottable`), (X.__radixId = _), X)
	}
	var x = S('Slottable'),
		C = (I, X) => {
			if ('child' in I.props) {
				const ne = I.props.child
				return b.isValidElement(ne)
					? b.cloneElement(ne, void 0, I.props.children(ne.props.children))
					: null
			}
			return b.isValidElement(X) ? X : null
		}
	function T(I, X) {
		const ne = { ...X }
		for (const se in X) {
			const G = I[se],
				re = X[se]
			;/^on[A-Z]/.test(se)
				? G && re
					? (ne[se] = (...ee) => {
							const O = re(...ee)
							return (G(...ee), O)
						})
					: G && (ne[se] = G)
				: se === 'style'
					? (ne[se] = { ...G, ...re })
					: se === 'className' && (ne[se] = [G, re].filter(Boolean).join(' '))
		}
		return { ...I, ...ne }
	}
	function j(I) {
		var se, G
		let X =
				(se = Object.getOwnPropertyDescriptor(I.props, 'ref')) == null
					? void 0
					: se.get,
			ne = X && 'isReactWarning' in X && X.isReactWarning
		return ne
			? I.ref
			: ((X =
					(G = Object.getOwnPropertyDescriptor(I, 'ref')) == null
						? void 0
						: G.get),
				(ne = X && 'isReactWarning' in X && X.isReactWarning),
				ne ? I.props.ref : I.props.ref || I.ref)
	}
	function L(I) {
		return (
			b.isValidElement(I) &&
			typeof I.type == 'function' &&
			'__radixId' in I.type &&
			I.type.__radixId === _
		)
	}
	var Q = Symbol.for('react.lazy')
	function te(I) {
		return (
			I != null &&
			typeof I == 'object' &&
			'$$typeof' in I &&
			I.$$typeof === Q &&
			'_payload' in I &&
			fe(I._payload)
		)
	}
	function fe(I) {
		return typeof I == 'object' && I !== null && 'then' in I
	}
	var _e = (I) =>
			`${I} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
		be = (I) =>
			`${I} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
		de = b[' use '.trim().toString()]
	return ad
}
var ld, Vy
function OR() {
	if (Vy) return ld
	Vy = 1
	var n = Object.create,
		r = Object.defineProperty,
		l = Object.getOwnPropertyDescriptor,
		i = Object.getOwnPropertyNames,
		u = Object.getPrototypeOf,
		c = Object.prototype.hasOwnProperty,
		d = (T, j) => {
			for (var L in j) r(T, L, { get: j[L], enumerable: !0 })
		},
		h = (T, j, L, Q) => {
			if ((j && typeof j == 'object') || typeof j == 'function')
				for (let te of i(j))
					!c.call(T, te) &&
						te !== L &&
						r(T, te, {
							get: () => j[te],
							enumerable: !(Q = l(j, te)) || Q.enumerable
						})
			return T
		},
		p = (T, j, L) => (
			(L = T != null ? n(u(T)) : {}),
			h(
				!T || !T.__esModule ? r(L, 'default', { value: T, enumerable: !0 }) : L,
				T
			)
		),
		v = (T) => h(r({}, '__esModule', { value: !0 }), T),
		y = {}
	;(d(y, {
		Primitive: () => S,
		Root: () => C,
		dispatchDiscreteCustomEvent: () => x
	}),
		(ld = v(y)))
	var b = p(va()),
		R = p(ws()),
		A = TR(),
		M = ah(),
		_ = [
			'a',
			'button',
			'div',
			'form',
			'h2',
			'h3',
			'img',
			'input',
			'label',
			'li',
			'nav',
			'ol',
			'p',
			'select',
			'span',
			'svg',
			'ul'
		],
		S = _.reduce((T, j) => {
			const L = (0, A.createSlot)(`Primitive.${j}`),
				Q = b.forwardRef((te, fe) => {
					const { asChild: _e, ...be } = te,
						de = _e ? L : j
					return (
						typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
						(0, M.jsx)(de, { ...be, ref: fe })
					)
				})
			return ((Q.displayName = `Primitive.${j}`), { ...T, [j]: Q })
		}, {})
	function x(T, j) {
		T && R.flushSync(() => T.dispatchEvent(j))
	}
	var C = S
	return ld
}
var id, ky
function MR() {
	if (ky) return id
	ky = 1
	var n = Object.create,
		r = Object.defineProperty,
		l = Object.getOwnPropertyDescriptor,
		i = Object.getOwnPropertyNames,
		u = Object.getPrototypeOf,
		c = Object.prototype.hasOwnProperty,
		d = (A, M) => {
			for (var _ in M) r(A, _, { get: M[_], enumerable: !0 })
		},
		h = (A, M, _, S) => {
			if ((M && typeof M == 'object') || typeof M == 'function')
				for (let x of i(M))
					!c.call(A, x) &&
						x !== _ &&
						r(A, x, {
							get: () => M[x],
							enumerable: !(S = l(M, x)) || S.enumerable
						})
			return A
		},
		p = (A, M, _) => (
			(_ = A != null ? n(u(A)) : {}),
			h(
				!A || !A.__esModule ? r(_, 'default', { value: A, enumerable: !0 }) : _,
				A
			)
		),
		v = (A) => h(r({}, '__esModule', { value: !0 }), A),
		y = {}
	;(d(y, { useLayoutEffect: () => R }), (id = v(y)))
	var b = p(va()),
		R = globalThis != null && globalThis.document ? b.useLayoutEffect : () => {}
	return id
}
var od, Hy
function uj() {
	if (Hy) return od
	Hy = 1
	var n = Object.create,
		r = Object.defineProperty,
		l = Object.getOwnPropertyDescriptor,
		i = Object.getOwnPropertyNames,
		u = Object.getPrototypeOf,
		c = Object.prototype.hasOwnProperty,
		d = (T, j) => {
			for (var L in j) r(T, L, { get: j[L], enumerable: !0 })
		},
		h = (T, j, L, Q) => {
			if ((j && typeof j == 'object') || typeof j == 'function')
				for (let te of i(j))
					!c.call(T, te) &&
						te !== L &&
						r(T, te, {
							get: () => j[te],
							enumerable: !(Q = l(j, te)) || Q.enumerable
						})
			return T
		},
		p = (T, j, L) => (
			(L = T != null ? n(u(T)) : {}),
			h(
				!T || !T.__esModule ? r(L, 'default', { value: T, enumerable: !0 }) : L,
				T
			)
		),
		v = (T) => h(r({}, '__esModule', { value: !0 }), T),
		y = {}
	;(d(y, { Portal: () => x, Root: () => C }), (od = v(y)))
	var b = p(va()),
		R = p(ws()),
		A = OR(),
		M = MR(),
		_ = ah(),
		S = 'Portal',
		x = b.forwardRef((T, j) => {
			var be
			const { container: L, ...Q } = T,
				[te, fe] = b.useState(!1)
			;(0, M.useLayoutEffect)(() => fe(!0), [])
			const _e =
				L ||
				(te &&
					((be = globalThis == null ? void 0 : globalThis.document) == null
						? void 0
						: be.body))
			return _e
				? R.createPortal((0, _.jsx)(A.Primitive.div, { ...Q, ref: j }), _e)
				: null
		})
	x.displayName = S
	var C = x
	return od
}
function ka() {
	return (
		(ka =
			Object.assign ||
			function (n) {
				for (var r = 1; r < arguments.length; r++) {
					var l = arguments[r]
					for (var i in l)
						Object.prototype.hasOwnProperty.call(l, i) && (n[i] = l[i])
				}
				return n
			}),
		ka.apply(this, arguments)
	)
}
function DR(n, r) {
	if (n == null) return {}
	var l = {},
		i = Object.keys(n),
		u,
		c
	for (c = 0; c < i.length; c++)
		((u = i[c]), !(r.indexOf(u) >= 0) && (l[u] = n[u]))
	return l
}
var NR = ['bottom', 'height', 'left', 'right', 'top', 'width'],
	jR = function (r, l) {
		return (
			r === void 0 && (r = {}),
			l === void 0 && (l = {}),
			NR.some(function (i) {
				return r[i] !== l[i]
			})
		)
	},
	ca = new Map(),
	sb,
	LR = function n() {
		var r = []
		;(ca.forEach(function (l, i) {
			var u = i.getBoundingClientRect()
			jR(u, l.rect) && ((l.rect = u), r.push(l))
		}),
			r.forEach(function (l) {
				l.callbacks.forEach(function (i) {
					return i(l.rect)
				})
			}),
			(sb = window.requestAnimationFrame(n)))
	}
function UR(n, r) {
	return {
		observe: function () {
			var i = ca.size === 0
			;(ca.has(n)
				? ca.get(n).callbacks.push(r)
				: ca.set(n, { rect: void 0, hasRectChanged: !1, callbacks: [r] }),
				i && LR())
		},
		unobserve: function () {
			var i = ca.get(n)
			if (i) {
				var u = i.callbacks.indexOf(r)
				;(u >= 0 && i.callbacks.splice(u, 1),
					i.callbacks.length || ca.delete(n),
					ca.size || cancelAnimationFrame(sb))
			}
		}
	}
}
var cs = typeof window < 'u' ? ue.useLayoutEffect : ue.useEffect
function zR(n, r) {
	r === void 0 && (r = { width: 0, height: 0 })
	var l = ue.useState(n.current),
		i = l[0],
		u = l[1],
		c = ue.useReducer(BR, r),
		d = c[0],
		h = c[1],
		p = ue.useRef(!1)
	return (
		cs(function () {
			n.current !== i && u(n.current)
		}),
		cs(
			function () {
				if (i && !p.current) {
					p.current = !0
					var v = i.getBoundingClientRect()
					h({ rect: v })
				}
			},
			[i]
		),
		ue.useEffect(
			function () {
				if (i) {
					var v = UR(i, function (y) {
						h({ rect: y })
					})
					return (
						v.observe(),
						function () {
							v.unobserve()
						}
					)
				}
			},
			[i]
		),
		d
	)
}
function BR(n, r) {
	var l = r.rect
	return n.height !== l.height || n.width !== l.width ? l : n
}
var PR = function () {
		return 50
	},
	VR = function (r) {
		return r
	},
	kR = function (r, l) {
		var i = l ? 'offsetWidth' : 'offsetHeight'
		return r[i]
	},
	cb = function (r) {
		for (
			var l = Math.max(r.start - r.overscan, 0),
				i = Math.min(r.end + r.overscan, r.size - 1),
				u = [],
				c = l;
			c <= i;
			c++
		)
			u.push(c)
		return u
	}
function HR(n) {
	var r,
		l = n.size,
		i = l === void 0 ? 0 : l,
		u = n.estimateSize,
		c = u === void 0 ? PR : u,
		d = n.overscan,
		h = d === void 0 ? 1 : d,
		p = n.paddingStart,
		v = p === void 0 ? 0 : p,
		y = n.paddingEnd,
		b = y === void 0 ? 0 : y,
		R = n.parentRef,
		A = n.horizontal,
		M = n.scrollToFn,
		_ = n.useObserver,
		S = n.initialRect,
		x = n.onScrollElement,
		C = n.scrollOffsetFn,
		T = n.keyExtractor,
		j = T === void 0 ? VR : T,
		L = n.measureSize,
		Q = L === void 0 ? kR : L,
		te = n.rangeExtractor,
		fe = te === void 0 ? cb : te,
		_e = A ? 'width' : 'height',
		be = A ? 'scrollLeft' : 'scrollTop',
		de = ue.useRef({ scrollOffset: 0, measurements: [] }),
		I = ue.useState(0),
		X = I[0],
		ne = I[1]
	de.current.scrollOffset = X
	var se = _ || zR,
		G = se(R, S),
		re = G[_e]
	de.current.outerSize = re
	var ae = ue.useCallback(
			function (Ye) {
				R.current && (R.current[be] = Ye)
			},
			[R, be]
		),
		ee = M || ae
	M = ue.useCallback(
		function (Ye) {
			ee(Ye, ae)
		},
		[ae, ee]
	)
	var O = ue.useState({}),
		Y = O[0],
		ie = O[1],
		le = ue.useCallback(function () {
			return ie({})
		}, []),
		pe = ue.useRef([]),
		we = ue.useMemo(
			function () {
				var Ye = pe.current.length > 0 ? Math.min.apply(Math, pe.current) : 0
				pe.current = []
				for (
					var Qe = de.current.measurements.slice(0, Ye), Ge = Ye;
					Ge < i;
					Ge++
				) {
					var jt = j(Ge),
						ot = Y[jt],
						Rt = Qe[Ge - 1] ? Qe[Ge - 1].end : v,
						Pt = typeof ot == 'number' ? ot : c(Ge),
						xt = Rt + Pt
					Qe[Ge] = { index: Ge, start: Rt, size: Pt, end: xt, key: jt }
				}
				return Qe
			},
			[c, Y, v, i, j]
		),
		ge = (((r = we[i - 1]) == null ? void 0 : r.end) || v) + b
	;((de.current.measurements = we), (de.current.totalSize = ge))
	var ye = x ? x.current : R.current,
		Ae = ue.useRef(C)
	;((Ae.current = C),
		cs(
			function () {
				if (!ye) {
					ne(0)
					return
				}
				var Ye = function (Ge) {
					var jt = Ae.current ? Ae.current(Ge) : ye[be]
					ne(jt)
				}
				return (
					Ye(),
					ye.addEventListener('scroll', Ye, { capture: !1, passive: !0 }),
					function () {
						ye.removeEventListener('scroll', Ye)
					}
				)
			},
			[ye, be]
		))
	var je = GR(de.current),
		Be = je.start,
		Le = je.end,
		Pe = ue.useMemo(
			function () {
				return fe({ start: Be, end: Le, overscan: h, size: we.length })
			},
			[Be, Le, h, we.length, fe]
		),
		ht = ue.useRef(Q)
	ht.current = Q
	var pt = ue.useMemo(
			function () {
				for (
					var Ye = [],
						Qe = function (Rt, Pt) {
							var xt = Pe[Rt],
								D = we[xt],
								B = ka(
									ka({}, D),
									{},
									{
										measureRef: function (oe) {
											if (oe) {
												var he = ht.current(oe, A)
												if (he !== B.size) {
													var me = de.current.scrollOffset
													;(B.start < me && ae(me + (he - B.size)),
														pe.current.push(xt),
														ie(function (ce) {
															var Se
															return ka(
																ka({}, ce),
																{},
																((Se = {}), (Se[B.key] = he), Se)
															)
														}))
												}
											}
										}
									}
								)
							Ye.push(B)
						},
						Ge = 0,
						jt = Pe.length;
					Ge < jt;
					Ge++
				)
					Qe(Ge)
				return Ye
			},
			[Pe, ae, A, we]
		),
		Bt = ue.useRef(!1)
	cs(
		function () {
			;(Bt.current && ie({}), (Bt.current = !0))
		},
		[c]
	)
	var Nt = ue.useCallback(
			function (Ye, Qe) {
				var Ge = Qe === void 0 ? {} : Qe,
					jt = Ge.align,
					ot = jt === void 0 ? 'start' : jt,
					Rt = de.current,
					Pt = Rt.scrollOffset,
					xt = Rt.outerSize
				;(ot === 'auto' &&
					(Ye <= Pt
						? (ot = 'start')
						: Ye >= Pt + xt
							? (ot = 'end')
							: (ot = 'start')),
					ot === 'start'
						? M(Ye)
						: ot === 'end'
							? M(Ye - xt)
							: ot === 'center' && M(Ye - xt / 2))
			},
			[M]
		),
		ct = ue.useCallback(
			function (Ye, Qe) {
				var Ge = Qe === void 0 ? {} : Qe,
					jt = Ge.align,
					ot = jt === void 0 ? 'auto' : jt,
					Rt = DR(Ge, ['align']),
					Pt = de.current,
					xt = Pt.measurements,
					D = Pt.scrollOffset,
					B = Pt.outerSize,
					P = xt[Math.max(0, Math.min(Ye, i - 1))]
				if (P) {
					if (ot === 'auto')
						if (P.end >= D + B) ot = 'end'
						else if (P.start <= D) ot = 'start'
						else return
					var oe =
						ot === 'center'
							? P.start + P.size / 2
							: ot === 'end'
								? P.end
								: P.start
					Nt(oe, ka({ align: ot }, Rt))
				}
			},
			[Nt, i]
		),
		rr = ue.useCallback(
			function () {
				for (
					var Ye = arguments.length, Qe = new Array(Ye), Ge = 0;
					Ge < Ye;
					Ge++
				)
					Qe[Ge] = arguments[Ge]
				;(ct.apply(void 0, Qe),
					requestAnimationFrame(function () {
						ct.apply(void 0, Qe)
					}))
			},
			[ct]
		)
	return {
		virtualItems: pt,
		totalSize: ge,
		scrollToOffset: Nt,
		scrollToIndex: rr,
		measure: le
	}
}
var qR = function (r, l, i, u) {
	for (; r <= l; ) {
		var c = ((r + l) / 2) | 0,
			d = i(c)
		if (d < u) r = c + 1
		else if (d > u) l = c - 1
		else return c
	}
	return r > 0 ? r - 1 : 0
}
function GR(n) {
	for (
		var r = n.measurements,
			l = n.outerSize,
			i = n.scrollOffset,
			u = r.length - 1,
			c = function (v) {
				return r[v].start
			},
			d = qR(0, u, c, i),
			h = d;
		h < u && r[h].end < i + l;
	)
		h++
	return { start: d, end: h }
}
const FR = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, defaultRangeExtractor: cb, useVirtual: HR },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	sj = cR(FR)
/**
 * react-router v7.17.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var qy = 'popstate'
function Gy(n) {
	return (
		typeof n == 'object' &&
		n != null &&
		'pathname' in n &&
		'search' in n &&
		'hash' in n &&
		'state' in n &&
		'key' in n
	)
}
function $R(n = {}) {
	function r(i, u) {
		var v
		let c = (v = u.state) == null ? void 0 : v.masked,
			{ pathname: d, search: h, hash: p } = c || i.location
		return wd(
			'',
			{ pathname: d, search: h, hash: p },
			(u.state && u.state.usr) || null,
			(u.state && u.state.key) || 'default',
			c
				? {
						pathname: i.location.pathname,
						search: i.location.search,
						hash: i.location.hash
					}
				: void 0
		)
	}
	function l(i, u) {
		return typeof u == 'string' ? u : yo(u)
	}
	return YR(r, l, null, n)
}
function dt(n, r) {
	if (n === !1 || n === null || typeof n > 'u') throw new Error(r)
}
function kn(n, r) {
	if (!n) {
		typeof console < 'u' && console.warn(r)
		try {
			throw new Error(r)
		} catch {}
	}
}
function IR() {
	return Math.random().toString(36).substring(2, 10)
}
function Fy(n, r) {
	return {
		usr: n.state,
		key: n.key,
		idx: r,
		masked: n.mask
			? { pathname: n.pathname, search: n.search, hash: n.hash }
			: void 0
	}
}
function wd(n, r, l = null, i, u) {
	return {
		pathname: typeof n == 'string' ? n : n.pathname,
		search: '',
		hash: '',
		...(typeof r == 'string' ? Zl(r) : r),
		state: l,
		key: (r && r.key) || i || IR(),
		mask: u
	}
}
function yo({ pathname: n = '/', search: r = '', hash: l = '' }) {
	return (
		r && r !== '?' && (n += r.charAt(0) === '?' ? r : '?' + r),
		l && l !== '#' && (n += l.charAt(0) === '#' ? l : '#' + l),
		n
	)
}
function Zl(n) {
	let r = {}
	if (n) {
		let l = n.indexOf('#')
		l >= 0 && ((r.hash = n.substring(l)), (n = n.substring(0, l)))
		let i = n.indexOf('?')
		;(i >= 0 && ((r.search = n.substring(i)), (n = n.substring(0, i))),
			n && (r.pathname = n))
	}
	return r
}
function YR(n, r, l, i = {}) {
	let { window: u = document.defaultView, v5Compat: c = !1 } = i,
		d = u.history,
		h = 'POP',
		p = null,
		v = y()
	v == null && ((v = 0), d.replaceState({ ...d.state, idx: v }, ''))
	function y() {
		return (d.state || { idx: null }).idx
	}
	function b() {
		h = 'POP'
		let S = y(),
			x = S == null ? null : S - v
		;((v = S), p && p({ action: h, location: _.location, delta: x }))
	}
	function R(S, x) {
		h = 'PUSH'
		let C = Gy(S) ? S : wd(_.location, S, x)
		v = y() + 1
		let T = Fy(C, v),
			j = _.createHref(C.mask || C)
		try {
			d.pushState(T, '', j)
		} catch (L) {
			if (L instanceof DOMException && L.name === 'DataCloneError') throw L
			u.location.assign(j)
		}
		c && p && p({ action: h, location: _.location, delta: 1 })
	}
	function A(S, x) {
		h = 'REPLACE'
		let C = Gy(S) ? S : wd(_.location, S, x)
		v = y()
		let T = Fy(C, v),
			j = _.createHref(C.mask || C)
		;(d.replaceState(T, '', j),
			c && p && p({ action: h, location: _.location, delta: 0 }))
	}
	function M(S) {
		return QR(u, S)
	}
	let _ = {
		get action() {
			return h
		},
		get location() {
			return n(u, d)
		},
		listen(S) {
			if (p) throw new Error('A history only accepts one active listener')
			return (
				u.addEventListener(qy, b),
				(p = S),
				() => {
					;(u.removeEventListener(qy, b), (p = null))
				}
			)
		},
		createHref(S) {
			return r(u, S)
		},
		createURL: M,
		encodeLocation(S) {
			let x = M(S)
			return { pathname: x.pathname, search: x.search, hash: x.hash }
		},
		push: R,
		replace: A,
		go(S) {
			return d.go(S)
		}
	}
	return _
}
function QR(n, r, l = !1) {
	let i = 'http://localhost'
	;(n &&
		(i = n.location.origin !== 'null' ? n.location.origin : n.location.href),
		dt(i, 'No window.location.(origin|href) available to create URL'))
	let u = typeof r == 'string' ? r : yo(r)
	return (
		(u = u.replace(/ $/, '%20')),
		!l && u.startsWith('//') && (u = i + u),
		new URL(u, i)
	)
}
function fb(n, r, l = '/') {
	return KR(n, r, l, !1)
}
function KR(n, r, l, i, u) {
	let c = typeof r == 'string' ? Zl(r) : r,
		d = Mr(c.pathname || '/', l)
	if (d == null) return null
	let h = XR(n),
		p = null,
		v = ux(d)
	for (let y = 0; p == null && y < h.length; ++y) p = ix(h[y], v, i)
	return p
}
function XR(n) {
	let r = db(n)
	return (ZR(r), r)
}
function db(n, r = [], l = [], i = '', u = !1) {
	let c = (d, h, p = u, v) => {
		let y = {
			relativePath: v === void 0 ? d.path || '' : v,
			caseSensitive: d.caseSensitive === !0,
			childrenIndex: h,
			route: d
		}
		if (y.relativePath.startsWith('/')) {
			if (!y.relativePath.startsWith(i) && p) return
			;(dt(
				y.relativePath.startsWith(i),
				`Absolute route path "${y.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
			),
				(y.relativePath = y.relativePath.slice(i.length)))
		}
		let b = er([i, y.relativePath]),
			R = l.concat(y)
		;(d.children &&
			d.children.length > 0 &&
			(dt(
				d.index !== !0,
				`Index routes must not have child routes. Please remove all child routes from route path "${b}".`
			),
			db(d.children, r, R, b, p)),
			!(d.path == null && !d.index) &&
				r.push({ path: b, score: ax(b, d.index), routesMeta: R }))
	}
	return (
		n.forEach((d, h) => {
			var p
			if (d.path === '' || !((p = d.path) != null && p.includes('?'))) c(d, h)
			else for (let v of hb(d.path)) c(d, h, !0, v)
		}),
		r
	)
}
function hb(n) {
	let r = n.split('/')
	if (r.length === 0) return []
	let [l, ...i] = r,
		u = l.endsWith('?'),
		c = l.replace(/\?$/, '')
	if (i.length === 0) return u ? [c, ''] : [c]
	let d = hb(i.join('/')),
		h = []
	return (
		h.push(...d.map((p) => (p === '' ? c : [c, p].join('/')))),
		u && h.push(...d),
		h.map((p) => (n.startsWith('/') && p === '' ? '/' : p))
	)
}
function ZR(n) {
	n.sort((r, l) =>
		r.score !== l.score
			? l.score - r.score
			: lx(
					r.routesMeta.map((i) => i.childrenIndex),
					l.routesMeta.map((i) => i.childrenIndex)
				)
	)
}
var JR = /^:[\w-]+$/,
	WR = 3,
	ex = 2,
	tx = 1,
	nx = 10,
	rx = -2,
	$y = (n) => n === '*'
function ax(n, r) {
	let l = n.split('/'),
		i = l.length
	return (
		l.some($y) && (i += rx),
		r && (i += ex),
		l
			.filter((u) => !$y(u))
			.reduce((u, c) => u + (JR.test(c) ? WR : c === '' ? tx : nx), i)
	)
}
function lx(n, r) {
	return n.length === r.length && n.slice(0, -1).every((i, u) => i === r[u])
		? n[n.length - 1] - r[r.length - 1]
		: 0
}
function ix(n, r, l = !1) {
	let { routesMeta: i } = n,
		u = {},
		c = '/',
		d = []
	for (let h = 0; h < i.length; ++h) {
		let p = i[h],
			v = h === i.length - 1,
			y = c === '/' ? r : r.slice(c.length) || '/',
			b = go(
				{ path: p.relativePath, caseSensitive: p.caseSensitive, end: v },
				y
			),
			R = p.route
		if (
			(!b &&
				v &&
				l &&
				!i[i.length - 1].route.index &&
				(b = go(
					{ path: p.relativePath, caseSensitive: p.caseSensitive, end: !1 },
					y
				)),
			!b)
		)
			return null
		;(Object.assign(u, b.params),
			d.push({
				params: u,
				pathname: er([c, b.pathname]),
				pathnameBase: dx(er([c, b.pathnameBase])),
				route: R
			}),
			b.pathnameBase !== '/' && (c = er([c, b.pathnameBase])))
	}
	return d
}
function go(n, r) {
	typeof n == 'string' && (n = { path: n, caseSensitive: !1, end: !0 })
	let [l, i] = ox(n.path, n.caseSensitive, n.end),
		u = r.match(l)
	if (!u) return null
	let c = u[0],
		d = c.replace(/(.)\/+$/, '$1'),
		h = u.slice(1)
	return {
		params: i.reduce((v, { paramName: y, isOptional: b }, R) => {
			if (y === '*') {
				let M = h[R] || ''
				d = c.slice(0, c.length - M.length).replace(/(.)\/+$/, '$1')
			}
			const A = h[R]
			return (
				b && !A ? (v[y] = void 0) : (v[y] = (A || '').replace(/%2F/g, '/')),
				v
			)
		}, {}),
		pathname: c,
		pathnameBase: d,
		pattern: n
	}
}
function ox(n, r = !1, l = !0) {
	kn(
		n === '*' || !n.endsWith('*') || n.endsWith('/*'),
		`Route path "${n}" will be treated as if it were "${n.replace(/\*$/, '/*')}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/, '/*')}".`
	)
	let i = [],
		u =
			'^' +
			n
				.replace(/\/*\*?$/, '')
				.replace(/^\/*/, '/')
				.replace(/[\\.*+^${}|()[\]]/g, '\\$&')
				.replace(/\/:([\w-]+)(\?)?/g, (d, h, p, v, y) => {
					if ((i.push({ paramName: h, isOptional: p != null }), p)) {
						let b = y.charAt(v + d.length)
						return b && b !== '/' ? '/([^\\/]*)' : '(?:/([^\\/]*))?'
					}
					return '/([^\\/]+)'
				})
				.replace(/\/([\w-]+)\?(\/|$)/g, '(/$1)?$2')
	return (
		n.endsWith('*')
			? (i.push({ paramName: '*' }),
				(u += n === '*' || n === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
			: l
				? (u += '\\/*$')
				: n !== '' && n !== '/' && (u += '(?:(?=\\/|$))'),
		[new RegExp(u, r ? void 0 : 'i'), i]
	)
}
function ux(n) {
	try {
		return n
			.split('/')
			.map((r) => decodeURIComponent(r).replace(/\//g, '%2F'))
			.join('/')
	} catch (r) {
		return (
			kn(
				!1,
				`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
			),
			n
		)
	}
}
function Mr(n, r) {
	if (r === '/') return n
	if (!n.toLowerCase().startsWith(r.toLowerCase())) return null
	let l = r.endsWith('/') ? r.length - 1 : r.length,
		i = n.charAt(l)
	return i && i !== '/' ? null : n.slice(l) || '/'
}
var sx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i
function cx(n, r = '/') {
	let {
			pathname: l,
			search: i = '',
			hash: u = ''
		} = typeof n == 'string' ? Zl(n) : n,
		c
	return (
		l
			? ((l = pb(l)),
				l.startsWith('/') ? (c = Iy(l.substring(1), '/')) : (c = Iy(l, r)))
			: (c = r),
		{ pathname: c, search: hx(i), hash: px(u) }
	)
}
function Iy(n, r) {
	let l = fs(r).split('/')
	return (
		n.split('/').forEach((u) => {
			u === '..' ? l.length > 1 && l.pop() : u !== '.' && l.push(u)
		}),
		l.length > 1 ? l.join('/') : '/'
	)
}
function ud(n, r, l, i) {
	return `Cannot include a '${n}' character in a manually specified \`to.${r}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${l}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`
}
function fx(n) {
	return n.filter(
		(r, l) => l === 0 || (r.route.path && r.route.path.length > 0)
	)
}
function lh(n) {
	let r = fx(n)
	return r.map((l, i) => (i === r.length - 1 ? l.pathname : l.pathnameBase))
}
function Cs(n, r, l, i = !1) {
	let u
	typeof n == 'string'
		? (u = Zl(n))
		: ((u = { ...n }),
			dt(
				!u.pathname || !u.pathname.includes('?'),
				ud('?', 'pathname', 'search', u)
			),
			dt(
				!u.pathname || !u.pathname.includes('#'),
				ud('#', 'pathname', 'hash', u)
			),
			dt(!u.search || !u.search.includes('#'), ud('#', 'search', 'hash', u)))
	let c = n === '' || u.pathname === '',
		d = c ? '/' : u.pathname,
		h
	if (d == null) h = l
	else {
		let b = r.length - 1
		if (!i && d.startsWith('..')) {
			let R = d.split('/')
			for (; R[0] === '..'; ) (R.shift(), (b -= 1))
			u.pathname = R.join('/')
		}
		h = b >= 0 ? r[b] : '/'
	}
	let p = cx(u, h),
		v = d && d !== '/' && d.endsWith('/'),
		y = (c || d === '.') && l.endsWith('/')
	return (!p.pathname.endsWith('/') && (v || y) && (p.pathname += '/'), p)
}
var pb = (n) => n.replace(/\/\/+/g, '/'),
	er = (n) => pb(n.join('/')),
	fs = (n) => n.replace(/\/+$/, ''),
	dx = (n) => fs(n).replace(/^\/*/, '/'),
	hx = (n) => (!n || n === '?' ? '' : n.startsWith('?') ? n : '?' + n),
	px = (n) => (!n || n === '#' ? '' : n.startsWith('#') ? n : '#' + n),
	mx = class {
		constructor(n, r, l, i = !1) {
			;((this.status = n),
				(this.statusText = r || ''),
				(this.internal = i),
				l instanceof Error
					? ((this.data = l.toString()), (this.error = l))
					: (this.data = l))
		}
	}
function vx(n) {
	return (
		n != null &&
		typeof n.status == 'number' &&
		typeof n.statusText == 'string' &&
		typeof n.internal == 'boolean' &&
		'data' in n
	)
}
function yx(n) {
	let r = n.map((l) => l.route.path).filter(Boolean)
	return er(r) || '/'
}
var mb =
	typeof window < 'u' &&
	typeof window.document < 'u' &&
	typeof window.document.createElement < 'u'
function vb(n, r) {
	let l = n
	if (typeof l != 'string' || !sx.test(l))
		return { absoluteURL: void 0, isExternal: !1, to: l }
	let i = l,
		u = !1
	if (mb)
		try {
			let c = new URL(window.location.href),
				d = l.startsWith('//') ? new URL(c.protocol + l) : new URL(l),
				h = Mr(d.pathname, r)
			d.origin === c.origin && h != null
				? (l = h + d.search + d.hash)
				: (u = !0)
		} catch {
			kn(
				!1,
				`<Link to="${l}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
			)
		}
	return { absoluteURL: i, isExternal: u, to: l }
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0')
var yb = ['POST', 'PUT', 'PATCH', 'DELETE']
new Set(yb)
var gx = ['GET', ...yb]
new Set(gx)
var Jl = m.createContext(null)
Jl.displayName = 'DataRouter'
var Ts = m.createContext(null)
Ts.displayName = 'DataRouterState'
var gb = m.createContext(!1)
function bx() {
	return m.useContext(gb)
}
var bb = m.createContext({ isTransitioning: !1 })
bb.displayName = 'ViewTransition'
var Sx = m.createContext(new Map())
Sx.displayName = 'Fetchers'
var _x = m.createContext(null)
_x.displayName = 'Await'
var pn = m.createContext(null)
pn.displayName = 'Navigation'
var Ao = m.createContext(null)
Ao.displayName = 'Location'
var qn = m.createContext({ outlet: null, matches: [], isDataRoute: !1 })
qn.displayName = 'Route'
var ih = m.createContext(null)
ih.displayName = 'RouteError'
var Sb = 'REACT_ROUTER_ERROR',
	Ex = 'REDIRECT',
	Rx = 'ROUTE_ERROR_RESPONSE'
function xx(n) {
	if (n.startsWith(`${Sb}:${Ex}:{`))
		try {
			let r = JSON.parse(n.slice(28))
			if (
				typeof r == 'object' &&
				r &&
				typeof r.status == 'number' &&
				typeof r.statusText == 'string' &&
				typeof r.location == 'string' &&
				typeof r.reloadDocument == 'boolean' &&
				typeof r.replace == 'boolean'
			)
				return r
		} catch {}
}
function Ax(n) {
	if (n.startsWith(`${Sb}:${Rx}:{`))
		try {
			let r = JSON.parse(n.slice(40))
			if (
				typeof r == 'object' &&
				r &&
				typeof r.status == 'number' &&
				typeof r.statusText == 'string'
			)
				return new mx(r.status, r.statusText, r.data)
		} catch {}
}
function wx(n, { relative: r } = {}) {
	dt(Wl(), 'useHref() may be used only in the context of a <Router> component.')
	let { basename: l, navigator: i } = m.useContext(pn),
		{ hash: u, pathname: c, search: d } = wo(n, { relative: r }),
		h = c
	return (
		l !== '/' && (h = c === '/' ? l : er([l, c])),
		i.createHref({ pathname: h, search: d, hash: u })
	)
}
function Wl() {
	return m.useContext(Ao) != null
}
function an() {
	return (
		dt(
			Wl(),
			'useLocation() may be used only in the context of a <Router> component.'
		),
		m.useContext(Ao).location
	)
}
var _b =
	'You should call navigate() in a React.useEffect(), not when your component is first rendered.'
function Eb(n) {
	m.useContext(pn).static || m.useLayoutEffect(n)
}
function bo() {
	let { isDataRoute: n } = m.useContext(qn)
	return n ? qx() : Cx()
}
function Cx() {
	dt(
		Wl(),
		'useNavigate() may be used only in the context of a <Router> component.'
	)
	let n = m.useContext(Jl),
		{ basename: r, navigator: l } = m.useContext(pn),
		{ matches: i } = m.useContext(qn),
		{ pathname: u } = an(),
		c = JSON.stringify(lh(i)),
		d = m.useRef(!1)
	return (
		Eb(() => {
			d.current = !0
		}),
		m.useCallback(
			(p, v = {}) => {
				if ((kn(d.current, _b), !d.current)) return
				if (typeof p == 'number') {
					l.go(p)
					return
				}
				let y = Cs(p, JSON.parse(c), u, v.relative === 'path')
				;(n == null &&
					r !== '/' &&
					(y.pathname = y.pathname === '/' ? r : er([r, y.pathname])),
					(v.replace ? l.replace : l.push)(y, v.state, v))
			},
			[r, l, c, u, n]
		)
	)
}
var Tx = m.createContext(null)
function Ox(n) {
	let r = m.useContext(qn).outlet
	return m.useMemo(
		() => r && m.createElement(Tx.Provider, { value: n }, r),
		[r, n]
	)
}
function Mx() {
	let { matches: n } = m.useContext(qn),
		r = n[n.length - 1]
	return (r == null ? void 0 : r.params) ?? {}
}
function wo(n, { relative: r } = {}) {
	let { matches: l } = m.useContext(qn),
		{ pathname: i } = an(),
		u = JSON.stringify(lh(l))
	return m.useMemo(() => Cs(n, JSON.parse(u), i, r === 'path'), [n, u, i, r])
}
function Dx(n, r) {
	return Rb(n, r)
}
function Rb(n, r, l) {
	var S
	dt(
		Wl(),
		'useRoutes() may be used only in the context of a <Router> component.'
	)
	let { navigator: i } = m.useContext(pn),
		{ matches: u } = m.useContext(qn),
		c = u[u.length - 1],
		d = c ? c.params : {},
		h = c ? c.pathname : '/',
		p = c ? c.pathnameBase : '/',
		v = c && c.route
	{
		let x = (v && v.path) || ''
		Ab(
			h,
			!v || x.endsWith('*') || x.endsWith('*?'),
			`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x === '/' ? '*' : `${x}/*`}">.`
		)
	}
	let y = an(),
		b
	if (r) {
		let x = typeof r == 'string' ? Zl(r) : r
		;(dt(
			p === '/' || ((S = x.pathname) == null ? void 0 : S.startsWith(p)),
			`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${p}" but pathname "${x.pathname}" was given in the \`location\` prop.`
		),
			(b = x))
	} else b = y
	let R = b.pathname || '/',
		A = R
	if (p !== '/') {
		let x = p.replace(/^\//, '').split('/')
		A = '/' + R.replace(/^\//, '').split('/').slice(x.length).join('/')
	}
	let M =
		l && l.state.matches.length
			? l.state.matches.map((x) =>
					Object.assign(x, { route: l.manifest[x.route.id] || x.route })
				)
			: fb(n, { pathname: A })
	;(kn(
		v || M != null,
		`No routes matched location "${b.pathname}${b.search}${b.hash}" `
	),
		kn(
			M == null ||
				M[M.length - 1].route.element !== void 0 ||
				M[M.length - 1].route.Component !== void 0 ||
				M[M.length - 1].route.lazy !== void 0,
			`Matched leaf route at location "${b.pathname}${b.search}${b.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
		))
	let _ = zx(
		M &&
			M.map((x) =>
				Object.assign({}, x, {
					params: Object.assign({}, d, x.params),
					pathname: er([
						p,
						i.encodeLocation
							? i.encodeLocation(
									x.pathname
										.replace(/%/g, '%25')
										.replace(/\?/g, '%3F')
										.replace(/#/g, '%23')
								).pathname
							: x.pathname
					]),
					pathnameBase:
						x.pathnameBase === '/'
							? p
							: er([
									p,
									i.encodeLocation
										? i.encodeLocation(
												x.pathnameBase
													.replace(/%/g, '%25')
													.replace(/\?/g, '%3F')
													.replace(/#/g, '%23')
											).pathname
										: x.pathnameBase
								])
				})
			),
		u,
		l
	)
	return r && _
		? m.createElement(
				Ao.Provider,
				{
					value: {
						location: {
							pathname: '/',
							search: '',
							hash: '',
							state: null,
							key: 'default',
							mask: void 0,
							...b
						},
						navigationType: 'POP'
					}
				},
				_
			)
		: _
}
function Nx() {
	let n = Hx(),
		r = vx(n)
			? `${n.status} ${n.statusText}`
			: n instanceof Error
				? n.message
				: JSON.stringify(n),
		l = n instanceof Error ? n.stack : null,
		i = 'rgba(200,200,200, 0.5)',
		u = { padding: '0.5rem', backgroundColor: i },
		c = { padding: '2px 4px', backgroundColor: i },
		d = null
	return (
		console.error('Error handled by React Router default ErrorBoundary:', n),
		(d = m.createElement(
			m.Fragment,
			null,
			m.createElement('p', null, '💿 Hey developer 👋'),
			m.createElement(
				'p',
				null,
				'You can provide a way better UX than this when your app throws errors by providing your own ',
				m.createElement('code', { style: c }, 'ErrorBoundary'),
				' or',
				' ',
				m.createElement('code', { style: c }, 'errorElement'),
				' prop on your route.'
			)
		)),
		m.createElement(
			m.Fragment,
			null,
			m.createElement('h2', null, 'Unexpected Application Error!'),
			m.createElement('h3', { style: { fontStyle: 'italic' } }, r),
			l ? m.createElement('pre', { style: u }, l) : null,
			d
		)
	)
}
var jx = m.createElement(Nx, null),
	xb = class extends m.Component {
		constructor(n) {
			;(super(n),
				(this.state = {
					location: n.location,
					revalidation: n.revalidation,
					error: n.error
				}))
		}
		static getDerivedStateFromError(n) {
			return { error: n }
		}
		static getDerivedStateFromProps(n, r) {
			return r.location !== n.location ||
				(r.revalidation !== 'idle' && n.revalidation === 'idle')
				? { error: n.error, location: n.location, revalidation: n.revalidation }
				: {
						error: n.error !== void 0 ? n.error : r.error,
						location: r.location,
						revalidation: n.revalidation || r.revalidation
					}
		}
		componentDidCatch(n, r) {
			this.props.onError
				? this.props.onError(n, r)
				: console.error(
						'React Router caught the following error during render',
						n
					)
		}
		render() {
			let n = this.state.error
			if (
				this.context &&
				typeof n == 'object' &&
				n &&
				'digest' in n &&
				typeof n.digest == 'string'
			) {
				const l = Ax(n.digest)
				l && (n = l)
			}
			let r =
				n !== void 0
					? m.createElement(
							qn.Provider,
							{ value: this.props.routeContext },
							m.createElement(ih.Provider, {
								value: n,
								children: this.props.component
							})
						)
					: this.props.children
			return this.context ? m.createElement(Lx, { error: n }, r) : r
		}
	}
xb.contextType = gb
var sd = new WeakMap()
function Lx({ children: n, error: r }) {
	let { basename: l } = m.useContext(pn)
	if (
		typeof r == 'object' &&
		r &&
		'digest' in r &&
		typeof r.digest == 'string'
	) {
		let i = xx(r.digest)
		if (i) {
			let u = sd.get(r)
			if (u) throw u
			let c = vb(i.location, l)
			if (mb && !sd.get(r))
				if (c.isExternal || i.reloadDocument)
					window.location.href = c.absoluteURL || c.to
				else {
					const d = Promise.resolve().then(() =>
						window.__reactRouterDataRouter.navigate(c.to, {
							replace: i.replace
						})
					)
					throw (sd.set(r, d), d)
				}
			return m.createElement('meta', {
				httpEquiv: 'refresh',
				content: `0;url=${c.absoluteURL || c.to}`
			})
		}
	}
	return n
}
function Ux({ routeContext: n, match: r, children: l }) {
	let i = m.useContext(Jl)
	return (
		i &&
			i.static &&
			i.staticContext &&
			(r.route.errorElement || r.route.ErrorBoundary) &&
			(i.staticContext._deepestRenderedBoundaryId = r.route.id),
		m.createElement(qn.Provider, { value: n }, l)
	)
}
function zx(n, r = [], l) {
	let i = l == null ? void 0 : l.state
	if (n == null) {
		if (!i) return null
		if (i.errors) n = i.matches
		else if (r.length === 0 && !i.initialized && i.matches.length > 0)
			n = i.matches
		else return null
	}
	let u = n,
		c = i == null ? void 0 : i.errors
	if (c != null) {
		let y = u.findIndex(
			(b) => b.route.id && (c == null ? void 0 : c[b.route.id]) !== void 0
		)
		;(dt(
			y >= 0,
			`Could not find a matching route for errors on route IDs: ${Object.keys(c).join(',')}`
		),
			(u = u.slice(0, Math.min(u.length, y + 1))))
	}
	let d = !1,
		h = -1
	if (l && i) {
		d = i.renderFallback
		for (let y = 0; y < u.length; y++) {
			let b = u[y]
			if (
				((b.route.HydrateFallback || b.route.hydrateFallbackElement) && (h = y),
				b.route.id)
			) {
				let { loaderData: R, errors: A } = i,
					M =
						b.route.loader &&
						!R.hasOwnProperty(b.route.id) &&
						(!A || A[b.route.id] === void 0)
				if (b.route.lazy || M) {
					;(l.isStatic && (d = !0),
						h >= 0 ? (u = u.slice(0, h + 1)) : (u = [u[0]]))
					break
				}
			}
		}
	}
	let p = l == null ? void 0 : l.onError,
		v =
			i && p
				? (y, b) => {
						var R, A
						p(y, {
							location: i.location,
							params:
								((A = (R = i.matches) == null ? void 0 : R[0]) == null
									? void 0
									: A.params) ?? {},
							pattern: yx(i.matches),
							errorInfo: b
						})
					}
				: void 0
	return u.reduceRight((y, b, R) => {
		let A,
			M = !1,
			_ = null,
			S = null
		i &&
			((A = c && b.route.id ? c[b.route.id] : void 0),
			(_ = b.route.errorElement || jx),
			d &&
				(h < 0 && R === 0
					? (Ab(
							'route-fallback',
							!1,
							'No `HydrateFallback` element provided to render during initial hydration'
						),
						(M = !0),
						(S = null))
					: h === R &&
						((M = !0), (S = b.route.hydrateFallbackElement || null))))
		let x = r.concat(u.slice(0, R + 1)),
			C = () => {
				let T
				return (
					A
						? (T = _)
						: M
							? (T = S)
							: b.route.Component
								? (T = m.createElement(b.route.Component, null))
								: b.route.element
									? (T = b.route.element)
									: (T = y),
					m.createElement(Ux, {
						match: b,
						routeContext: { outlet: y, matches: x, isDataRoute: i != null },
						children: T
					})
				)
			}
		return i && (b.route.ErrorBoundary || b.route.errorElement || R === 0)
			? m.createElement(xb, {
					location: i.location,
					revalidation: i.revalidation,
					component: _,
					error: A,
					children: C(),
					routeContext: { outlet: null, matches: x, isDataRoute: !0 },
					onError: v
				})
			: C()
	}, null)
}
function oh(n) {
	return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Bx(n) {
	let r = m.useContext(Jl)
	return (dt(r, oh(n)), r)
}
function Px(n) {
	let r = m.useContext(Ts)
	return (dt(r, oh(n)), r)
}
function Vx(n) {
	let r = m.useContext(qn)
	return (dt(r, oh(n)), r)
}
function uh(n) {
	let r = Vx(n),
		l = r.matches[r.matches.length - 1]
	return (
		dt(
			l.route.id,
			`${n} can only be used on routes that contain a unique "id"`
		),
		l.route.id
	)
}
function kx() {
	return uh('useRouteId')
}
function Hx() {
	var i
	let n = m.useContext(ih),
		r = Px('useRouteError'),
		l = uh('useRouteError')
	return n !== void 0 ? n : (i = r.errors) == null ? void 0 : i[l]
}
function qx() {
	let { router: n } = Bx('useNavigate'),
		r = uh('useNavigate'),
		l = m.useRef(!1)
	return (
		Eb(() => {
			l.current = !0
		}),
		m.useCallback(
			async (u, c = {}) => {
				;(kn(l.current, _b),
					l.current &&
						(typeof u == 'number'
							? await n.navigate(u)
							: await n.navigate(u, { fromRouteId: r, ...c })))
			},
			[n, r]
		)
	)
}
var Yy = {}
function Ab(n, r, l) {
	!r && !Yy[n] && ((Yy[n] = !0), kn(!1, l))
}
m.memo(Gx)
function Gx({
	routes: n,
	manifest: r,
	future: l,
	state: i,
	isStatic: u,
	onError: c
}) {
	return Rb(n, void 0, { manifest: r, state: i, isStatic: u, onError: c })
}
function Qy({ to: n, replace: r, state: l, relative: i }) {
	dt(
		Wl(),
		'<Navigate> may be used only in the context of a <Router> component.'
	)
	let { static: u } = m.useContext(pn)
	kn(
		!u,
		'<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.'
	)
	let { matches: c } = m.useContext(qn),
		{ pathname: d } = an(),
		h = bo(),
		p = Cs(n, lh(c), d, i === 'path'),
		v = JSON.stringify(p)
	return (
		m.useEffect(() => {
			h(JSON.parse(v), { replace: r, state: l, relative: i })
		}, [h, v, i, r, l]),
		null
	)
}
function cj(n) {
	return Ox(n.context)
}
function Fx(n) {
	dt(
		!1,
		'A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.'
	)
}
function $x({
	basename: n = '/',
	children: r = null,
	location: l,
	navigationType: i = 'POP',
	navigator: u,
	static: c = !1,
	useTransitions: d
}) {
	dt(
		!Wl(),
		'You cannot render a <Router> inside another <Router>. You should never have more than one in your app.'
	)
	let h = n.replace(/^\/*/, '/'),
		p = m.useMemo(
			() => ({
				basename: h,
				navigator: u,
				static: c,
				useTransitions: d,
				future: {}
			}),
			[h, u, c, d]
		)
	typeof l == 'string' && (l = Zl(l))
	let {
			pathname: v = '/',
			search: y = '',
			hash: b = '',
			state: R = null,
			key: A = 'default',
			mask: M
		} = l,
		_ = m.useMemo(() => {
			let S = Mr(v, h)
			return S == null
				? null
				: {
						location: {
							pathname: S,
							search: y,
							hash: b,
							state: R,
							key: A,
							mask: M
						},
						navigationType: i
					}
		}, [h, v, y, b, R, A, i, M])
	return (
		kn(
			_ != null,
			`<Router basename="${h}"> is not able to match the URL "${v}${y}${b}" because it does not start with the basename, so the <Router> won't render anything.`
		),
		_ == null
			? null
			: m.createElement(
					pn.Provider,
					{ value: p },
					m.createElement(Ao.Provider, { children: r, value: _ })
				)
	)
}
function fj({ children: n, location: r }) {
	return Dx(Cd(n), r)
}
function Cd(n, r = []) {
	let l = []
	return (
		m.Children.forEach(n, (i, u) => {
			if (!m.isValidElement(i)) return
			let c = [...r, u]
			if (i.type === m.Fragment) {
				l.push.apply(l, Cd(i.props.children, c))
				return
			}
			;(dt(
				i.type === Fx,
				`[${typeof i.type == 'string' ? i.type : i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
			),
				dt(
					!i.props.index || !i.props.children,
					'An index route cannot have child routes.'
				))
			let d = {
				id: i.props.id || c.join('-'),
				caseSensitive: i.props.caseSensitive,
				element: i.props.element,
				Component: i.props.Component,
				index: i.props.index,
				path: i.props.path,
				middleware: i.props.middleware,
				loader: i.props.loader,
				action: i.props.action,
				hydrateFallbackElement: i.props.hydrateFallbackElement,
				HydrateFallback: i.props.HydrateFallback,
				errorElement: i.props.errorElement,
				ErrorBoundary: i.props.ErrorBoundary,
				hasErrorBoundary:
					i.props.hasErrorBoundary === !0 ||
					i.props.ErrorBoundary != null ||
					i.props.errorElement != null,
				shouldRevalidate: i.props.shouldRevalidate,
				handle: i.props.handle,
				lazy: i.props.lazy
			}
			;(i.props.children && (d.children = Cd(i.props.children, c)), l.push(d))
		}),
		l
	)
}
var as = 'get',
	ls = 'application/x-www-form-urlencoded'
function Os(n) {
	return typeof HTMLElement < 'u' && n instanceof HTMLElement
}
function Ix(n) {
	return Os(n) && n.tagName.toLowerCase() === 'button'
}
function Yx(n) {
	return Os(n) && n.tagName.toLowerCase() === 'form'
}
function Qx(n) {
	return Os(n) && n.tagName.toLowerCase() === 'input'
}
function Kx(n) {
	return !!(n.metaKey || n.altKey || n.ctrlKey || n.shiftKey)
}
function Xx(n, r) {
	return n.button === 0 && (!r || r === '_self') && !Kx(n)
}
function Td(n = '') {
	return new URLSearchParams(
		typeof n == 'string' || Array.isArray(n) || n instanceof URLSearchParams
			? n
			: Object.keys(n).reduce((r, l) => {
					let i = n[l]
					return r.concat(Array.isArray(i) ? i.map((u) => [l, u]) : [[l, i]])
				}, [])
	)
}
function Zx(n, r) {
	let l = Td(n)
	return (
		r &&
			r.forEach((i, u) => {
				l.has(u) ||
					r.getAll(u).forEach((c) => {
						l.append(u, c)
					})
			}),
		l
	)
}
var Zu = null
function Jx() {
	if (Zu === null)
		try {
			;(new FormData(document.createElement('form'), 0), (Zu = !1))
		} catch {
			Zu = !0
		}
	return Zu
}
var Wx = new Set([
	'application/x-www-form-urlencoded',
	'multipart/form-data',
	'text/plain'
])
function cd(n) {
	return n != null && !Wx.has(n)
		? (kn(
				!1,
				`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${ls}"`
			),
			null)
		: n
}
function eA(n, r) {
	let l, i, u, c, d
	if (Yx(n)) {
		let h = n.getAttribute('action')
		;((i = h ? Mr(h, r) : null),
			(l = n.getAttribute('method') || as),
			(u = cd(n.getAttribute('enctype')) || ls),
			(c = new FormData(n)))
	} else if (Ix(n) || (Qx(n) && (n.type === 'submit' || n.type === 'image'))) {
		let h = n.form
		if (h == null)
			throw new Error(
				'Cannot submit a <button> or <input type="submit"> without a <form>'
			)
		let p = n.getAttribute('formaction') || h.getAttribute('action')
		if (
			((i = p ? Mr(p, r) : null),
			(l = n.getAttribute('formmethod') || h.getAttribute('method') || as),
			(u =
				cd(n.getAttribute('formenctype')) ||
				cd(h.getAttribute('enctype')) ||
				ls),
			(c = new FormData(h, n)),
			!Jx())
		) {
			let { name: v, type: y, value: b } = n
			if (y === 'image') {
				let R = v ? `${v}.` : ''
				;(c.append(`${R}x`, '0'), c.append(`${R}y`, '0'))
			} else v && c.append(v, b)
		}
	} else {
		if (Os(n))
			throw new Error(
				'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
			)
		;((l = as), (i = null), (u = ls), (d = n))
	}
	return (
		c && u === 'text/plain' && ((d = c), (c = void 0)),
		{ action: i, method: l.toLowerCase(), encType: u, formData: c, body: d }
	)
}
Object.getOwnPropertyNames(Object.prototype).sort().join('\0')
function sh(n, r) {
	if (n === !1 || n === null || typeof n > 'u') throw new Error(r)
}
function wb(n, r, l, i) {
	let u =
		typeof n == 'string'
			? new URL(
					n,
					typeof window > 'u' ? 'server://singlefetch/' : window.location.origin
				)
			: n
	return (
		l
			? u.pathname.endsWith('/')
				? (u.pathname = `${u.pathname}_.${i}`)
				: (u.pathname = `${u.pathname}.${i}`)
			: u.pathname === '/'
				? (u.pathname = `_root.${i}`)
				: r && Mr(u.pathname, r) === '/'
					? (u.pathname = `${fs(r)}/_root.${i}`)
					: (u.pathname = `${fs(u.pathname)}.${i}`),
		u
	)
}
async function tA(n, r) {
	if (n.id in r) return r[n.id]
	try {
		let l = await import(n.module)
		return ((r[n.id] = l), l)
	} catch (l) {
		return (
			console.error(
				`Error loading route module \`${n.module}\`, reloading page...`
			),
			console.error(l),
			window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
			window.location.reload(),
			new Promise(() => {})
		)
	}
}
function nA(n) {
	return n == null
		? !1
		: n.href == null
			? n.rel === 'preload' &&
				typeof n.imageSrcSet == 'string' &&
				typeof n.imageSizes == 'string'
			: typeof n.rel == 'string' && typeof n.href == 'string'
}
async function rA(n, r, l) {
	let i = await Promise.all(
		n.map(async (u) => {
			let c = r.routes[u.route.id]
			if (c) {
				let d = await tA(c, l)
				return d.links ? d.links() : []
			}
			return []
		})
	)
	return oA(
		i
			.flat(1)
			.filter(nA)
			.filter((u) => u.rel === 'stylesheet' || u.rel === 'preload')
			.map((u) =>
				u.rel === 'stylesheet'
					? { ...u, rel: 'prefetch', as: 'style' }
					: { ...u, rel: 'prefetch' }
			)
	)
}
function Ky(n, r, l, i, u, c) {
	let d = (p, v) => (l[v] ? p.route.id !== l[v].route.id : !0),
		h = (p, v) => {
			var y
			return (
				l[v].pathname !== p.pathname ||
				(((y = l[v].route.path) == null ? void 0 : y.endsWith('*')) &&
					l[v].params['*'] !== p.params['*'])
			)
		}
	return c === 'assets'
		? r.filter((p, v) => d(p, v) || h(p, v))
		: c === 'data'
			? r.filter((p, v) => {
					var b
					let y = i.routes[p.route.id]
					if (!y || !y.hasLoader) return !1
					if (d(p, v) || h(p, v)) return !0
					if (p.route.shouldRevalidate) {
						let R = p.route.shouldRevalidate({
							currentUrl: new URL(
								u.pathname + u.search + u.hash,
								window.origin
							),
							currentParams: ((b = l[0]) == null ? void 0 : b.params) || {},
							nextUrl: new URL(n, window.origin),
							nextParams: p.params,
							defaultShouldRevalidate: !0
						})
						if (typeof R == 'boolean') return R
					}
					return !0
				})
			: []
}
function aA(n, r, { includeHydrateFallback: l } = {}) {
	return lA(
		n
			.map((i) => {
				let u = r.routes[i.route.id]
				if (!u) return []
				let c = [u.module]
				return (
					u.clientActionModule && (c = c.concat(u.clientActionModule)),
					u.clientLoaderModule && (c = c.concat(u.clientLoaderModule)),
					l &&
						u.hydrateFallbackModule &&
						(c = c.concat(u.hydrateFallbackModule)),
					u.imports && (c = c.concat(u.imports)),
					c
				)
			})
			.flat(1)
	)
}
function lA(n) {
	return [...new Set(n)]
}
function iA(n) {
	let r = {},
		l = Object.keys(n).sort()
	for (let i of l) r[i] = n[i]
	return r
}
function oA(n, r) {
	let l = new Set()
	return (
		new Set(r),
		n.reduce((i, u) => {
			let c = JSON.stringify(iA(u))
			return (l.has(c) || (l.add(c), i.push({ key: c, link: u })), i)
		}, [])
	)
}
function ch() {
	let n = m.useContext(Jl)
	return (
		sh(
			n,
			'You must render this element inside a <DataRouterContext.Provider> element'
		),
		n
	)
}
function uA() {
	let n = m.useContext(Ts)
	return (
		sh(
			n,
			'You must render this element inside a <DataRouterStateContext.Provider> element'
		),
		n
	)
}
var fh = m.createContext(void 0)
fh.displayName = 'FrameworkContext'
function dh() {
	let n = m.useContext(fh)
	return (
		sh(n, 'You must render this element inside a <HydratedRouter> element'),
		n
	)
}
function sA(n, r) {
	let l = m.useContext(fh),
		[i, u] = m.useState(!1),
		[c, d] = m.useState(!1),
		{
			onFocus: h,
			onBlur: p,
			onMouseEnter: v,
			onMouseLeave: y,
			onTouchStart: b
		} = r,
		R = m.useRef(null)
	;(m.useEffect(() => {
		if ((n === 'render' && d(!0), n === 'viewport')) {
			let _ = (x) => {
					x.forEach((C) => {
						d(C.isIntersecting)
					})
				},
				S = new IntersectionObserver(_, { threshold: 0.5 })
			return (
				R.current && S.observe(R.current),
				() => {
					S.disconnect()
				}
			)
		}
	}, [n]),
		m.useEffect(() => {
			if (i) {
				let _ = setTimeout(() => {
					d(!0)
				}, 100)
				return () => {
					clearTimeout(_)
				}
			}
		}, [i]))
	let A = () => {
			u(!0)
		},
		M = () => {
			;(u(!1), d(!1))
		}
	return l
		? n !== 'intent'
			? [c, R, {}]
			: [
					c,
					R,
					{
						onFocus: uo(h, A),
						onBlur: uo(p, M),
						onMouseEnter: uo(v, A),
						onMouseLeave: uo(y, M),
						onTouchStart: uo(b, A)
					}
				]
		: [!1, R, {}]
}
function uo(n, r) {
	return (l) => {
		;(n && n(l), l.defaultPrevented || r(l))
	}
}
function cA({ page: n, ...r }) {
	let l = bx(),
		{ router: i } = ch(),
		u = m.useMemo(() => fb(i.routes, n, i.basename), [i.routes, n, i.basename])
	return u
		? l
			? m.createElement(dA, { page: n, matches: u, ...r })
			: m.createElement(hA, { page: n, matches: u, ...r })
		: null
}
function fA(n) {
	let { manifest: r, routeModules: l } = dh(),
		[i, u] = m.useState([])
	return (
		m.useEffect(() => {
			let c = !1
			return (
				rA(n, r, l).then((d) => {
					c || u(d)
				}),
				() => {
					c = !0
				}
			)
		}, [n, r, l]),
		i
	)
}
function dA({ page: n, matches: r, ...l }) {
	let i = an(),
		{ future: u } = dh(),
		{ basename: c } = ch(),
		d = m.useMemo(() => {
			if (n === i.pathname + i.search + i.hash) return []
			let h = wb(n, c, u.v8_trailingSlashAwareDataRequests, 'rsc'),
				p = !1,
				v = []
			for (let y of r)
				typeof y.route.shouldRevalidate == 'function'
					? (p = !0)
					: v.push(y.route.id)
			return (
				p && v.length > 0 && h.searchParams.set('_routes', v.join(',')),
				[h.pathname + h.search]
			)
		}, [c, u.v8_trailingSlashAwareDataRequests, n, i, r])
	return m.createElement(
		m.Fragment,
		null,
		d.map((h) =>
			m.createElement('link', {
				key: h,
				rel: 'prefetch',
				as: 'fetch',
				href: h,
				...l
			})
		)
	)
}
function hA({ page: n, matches: r, ...l }) {
	let i = an(),
		{ future: u, manifest: c, routeModules: d } = dh(),
		{ basename: h } = ch(),
		{ loaderData: p, matches: v } = uA(),
		y = m.useMemo(() => Ky(n, r, v, c, i, 'data'), [n, r, v, c, i]),
		b = m.useMemo(() => Ky(n, r, v, c, i, 'assets'), [n, r, v, c, i]),
		R = m.useMemo(() => {
			if (n === i.pathname + i.search + i.hash) return []
			let _ = new Set(),
				S = !1
			if (
				(r.forEach((C) => {
					var j
					let T = c.routes[C.route.id]
					!T ||
						!T.hasLoader ||
						((!y.some((L) => L.route.id === C.route.id) &&
							C.route.id in p &&
							(j = d[C.route.id]) != null &&
							j.shouldRevalidate) ||
						T.hasClientLoader
							? (S = !0)
							: _.add(C.route.id))
				}),
				_.size === 0)
			)
				return []
			let x = wb(n, h, u.v8_trailingSlashAwareDataRequests, 'data')
			return (
				S &&
					_.size > 0 &&
					x.searchParams.set(
						'_routes',
						r
							.filter((C) => _.has(C.route.id))
							.map((C) => C.route.id)
							.join(',')
					),
				[x.pathname + x.search]
			)
		}, [h, u.v8_trailingSlashAwareDataRequests, p, i, c, y, r, n, d]),
		A = m.useMemo(() => aA(b, c), [b, c]),
		M = fA(b)
	return m.createElement(
		m.Fragment,
		null,
		R.map((_) =>
			m.createElement('link', {
				key: _,
				rel: 'prefetch',
				as: 'fetch',
				href: _,
				...l
			})
		),
		A.map((_) =>
			m.createElement('link', { key: _, rel: 'modulepreload', href: _, ...l })
		),
		M.map(({ key: _, link: S }) =>
			m.createElement('link', {
				key: _,
				nonce: l.nonce,
				...S,
				crossOrigin: S.crossOrigin ?? l.crossOrigin
			})
		)
	)
}
function pA(...n) {
	return (r) => {
		n.forEach((l) => {
			typeof l == 'function' ? l(r) : l != null && (l.current = r)
		})
	}
}
var mA =
	typeof window < 'u' &&
	typeof window.document < 'u' &&
	typeof window.document.createElement < 'u'
try {
	mA && (window.__reactRouterVersion = '7.17.0')
} catch {}
function dj({ basename: n, children: r, useTransitions: l, window: i }) {
	let u = m.useRef()
	u.current == null && (u.current = $R({ window: i, v5Compat: !0 }))
	let c = u.current,
		[d, h] = m.useState({ action: c.action, location: c.location }),
		p = m.useCallback(
			(v) => {
				l === !1 ? h(v) : m.startTransition(() => h(v))
			},
			[l]
		)
	return (
		m.useLayoutEffect(() => c.listen(p), [c, p]),
		m.createElement($x, {
			basename: n,
			children: r,
			location: d.location,
			navigationType: d.action,
			navigator: c,
			useTransitions: l
		})
	)
}
var Cb = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
	hh = m.forwardRef(function (
		{
			onClick: r,
			discover: l = 'render',
			prefetch: i = 'none',
			relative: u,
			reloadDocument: c,
			replace: d,
			mask: h,
			state: p,
			target: v,
			to: y,
			preventScrollReset: b,
			viewTransition: R,
			defaultShouldRevalidate: A,
			...M
		},
		_
	) {
		let { basename: S, navigator: x, useTransitions: C } = m.useContext(pn),
			T = typeof y == 'string' && Cb.test(y),
			j = vb(y, S)
		y = j.to
		let L = wx(y, { relative: u }),
			Q = an(),
			te = null
		if (h) {
			let se = Cs(h, [], Q.mask ? Q.mask.pathname : '/', !0)
			;(S !== '/' &&
				(se.pathname = se.pathname === '/' ? S : er([S, se.pathname])),
				(te = x.createHref(se)))
		}
		let [fe, _e, be] = sA(i, M),
			de = bA(y, {
				replace: d,
				mask: h,
				state: p,
				target: v,
				preventScrollReset: b,
				relative: u,
				viewTransition: R,
				defaultShouldRevalidate: A,
				useTransitions: C
			})
		function I(se) {
			;(r && r(se), se.defaultPrevented || de(se))
		}
		let X = !(j.isExternal || c),
			ne = m.createElement('a', {
				...M,
				...be,
				href: (X ? te : void 0) || j.absoluteURL || L,
				onClick: X ? I : r,
				ref: pA(_, _e),
				target: v,
				'data-discover': !T && l === 'render' ? 'true' : void 0
			})
		return fe && !T
			? m.createElement(m.Fragment, null, ne, m.createElement(cA, { page: L }))
			: ne
	})
hh.displayName = 'Link'
var vA = m.forwardRef(function (
	{
		'aria-current': r = 'page',
		caseSensitive: l = !1,
		className: i = '',
		end: u = !1,
		style: c,
		to: d,
		viewTransition: h,
		children: p,
		...v
	},
	y
) {
	let b = wo(d, { relative: v.relative }),
		R = an(),
		A = m.useContext(Ts),
		{ navigator: M, basename: _ } = m.useContext(pn),
		S = A != null && xA(b) && h === !0,
		x = M.encodeLocation ? M.encodeLocation(b).pathname : b.pathname,
		C = R.pathname,
		T =
			A && A.navigation && A.navigation.location
				? A.navigation.location.pathname
				: null
	;(l ||
		((C = C.toLowerCase()),
		(T = T ? T.toLowerCase() : null),
		(x = x.toLowerCase())),
		T && _ && (T = Mr(T, _) || T))
	const j = x !== '/' && x.endsWith('/') ? x.length - 1 : x.length
	let L = C === x || (!u && C.startsWith(x) && C.charAt(j) === '/'),
		Q =
			T != null &&
			(T === x || (!u && T.startsWith(x) && T.charAt(x.length) === '/')),
		te = { isActive: L, isPending: Q, isTransitioning: S },
		fe = L ? r : void 0,
		_e
	typeof i == 'function'
		? (_e = i(te))
		: (_e = [
				i,
				L ? 'active' : null,
				Q ? 'pending' : null,
				S ? 'transitioning' : null
			]
				.filter(Boolean)
				.join(' '))
	let be = typeof c == 'function' ? c(te) : c
	return m.createElement(
		hh,
		{
			...v,
			'aria-current': fe,
			className: _e,
			ref: y,
			style: be,
			to: d,
			viewTransition: h
		},
		typeof p == 'function' ? p(te) : p
	)
})
vA.displayName = 'NavLink'
var yA = m.forwardRef(
	(
		{
			discover: n = 'render',
			fetcherKey: r,
			navigate: l,
			reloadDocument: i,
			replace: u,
			state: c,
			method: d = as,
			action: h,
			onSubmit: p,
			relative: v,
			preventScrollReset: y,
			viewTransition: b,
			defaultShouldRevalidate: R,
			...A
		},
		M
	) => {
		let { useTransitions: _ } = m.useContext(pn),
			S = EA(),
			x = RA(h, { relative: v }),
			C = d.toLowerCase() === 'get' ? 'get' : 'post',
			T = typeof h == 'string' && Cb.test(h),
			j = (L) => {
				if ((p && p(L), L.defaultPrevented)) return
				L.preventDefault()
				let Q = L.nativeEvent.submitter,
					te = (Q == null ? void 0 : Q.getAttribute('formmethod')) || d,
					fe = () =>
						S(Q || L.currentTarget, {
							fetcherKey: r,
							method: te,
							navigate: l,
							replace: u,
							state: c,
							relative: v,
							preventScrollReset: y,
							viewTransition: b,
							defaultShouldRevalidate: R
						})
				_ && l !== !1 ? m.startTransition(() => fe()) : fe()
			}
		return m.createElement('form', {
			ref: M,
			method: C,
			action: x,
			onSubmit: i ? p : j,
			...A,
			'data-discover': !T && n === 'render' ? 'true' : void 0
		})
	}
)
yA.displayName = 'Form'
function gA(n) {
	return `${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`
}
function Tb(n) {
	let r = m.useContext(Jl)
	return (dt(r, gA(n)), r)
}
function bA(
	n,
	{
		target: r,
		replace: l,
		mask: i,
		state: u,
		preventScrollReset: c,
		relative: d,
		viewTransition: h,
		defaultShouldRevalidate: p,
		useTransitions: v
	} = {}
) {
	let y = bo(),
		b = an(),
		R = wo(n, { relative: d })
	return m.useCallback(
		(A) => {
			if (Xx(A, r)) {
				A.preventDefault()
				let M = l !== void 0 ? l : yo(b) === yo(R),
					_ = () =>
						y(n, {
							replace: M,
							mask: i,
							state: u,
							preventScrollReset: c,
							relative: d,
							viewTransition: h,
							defaultShouldRevalidate: p
						})
				v ? m.startTransition(() => _()) : _()
			}
		},
		[b, y, R, l, i, u, r, n, c, d, h, p, v]
	)
}
function hj(n) {
	kn(
		typeof URLSearchParams < 'u',
		'You cannot use the `useSearchParams` hook in a browser that does not support the URLSearchParams API. If you need to support Internet Explorer 11, we recommend you load a polyfill such as https://github.com/ungap/url-search-params.'
	)
	let r = m.useRef(Td(n)),
		l = m.useRef(!1),
		i = an(),
		u = m.useMemo(() => Zx(i.search, l.current ? null : r.current), [i.search]),
		c = bo(),
		d = m.useCallback(
			(h, p) => {
				const v = Td(typeof h == 'function' ? h(new URLSearchParams(u)) : h)
				;((l.current = !0), c('?' + v, p))
			},
			[c, u]
		)
	return [u, d]
}
var SA = 0,
	_A = () => `__${String(++SA)}__`
function EA() {
	let { router: n } = Tb('useSubmit'),
		{ basename: r } = m.useContext(pn),
		l = kx(),
		i = n.fetch,
		u = n.navigate
	return m.useCallback(
		async (c, d = {}) => {
			let { action: h, method: p, encType: v, formData: y, body: b } = eA(c, r)
			if (d.navigate === !1) {
				let R = d.fetcherKey || _A()
				await i(R, l, d.action || h, {
					defaultShouldRevalidate: d.defaultShouldRevalidate,
					preventScrollReset: d.preventScrollReset,
					formData: y,
					body: b,
					formMethod: d.method || p,
					formEncType: d.encType || v,
					flushSync: d.flushSync
				})
			} else
				await u(d.action || h, {
					defaultShouldRevalidate: d.defaultShouldRevalidate,
					preventScrollReset: d.preventScrollReset,
					formData: y,
					body: b,
					formMethod: d.method || p,
					formEncType: d.encType || v,
					replace: d.replace,
					state: d.state,
					fromRouteId: l,
					flushSync: d.flushSync,
					viewTransition: d.viewTransition
				})
		},
		[i, u, r, l]
	)
}
function RA(n, { relative: r } = {}) {
	let { basename: l } = m.useContext(pn),
		i = m.useContext(qn)
	dt(i, 'useFormAction must be used inside a RouteContext')
	let [u] = i.matches.slice(-1),
		c = { ...wo(n || '.', { relative: r }) },
		d = an()
	if (n == null) {
		c.search = d.search
		let h = new URLSearchParams(c.search),
			p = h.getAll('index')
		if (p.some((y) => y === '')) {
			;(h.delete('index'),
				p.filter((b) => b).forEach((b) => h.append('index', b)))
			let y = h.toString()
			c.search = y ? `?${y}` : ''
		}
	}
	return (
		(!n || n === '.') &&
			u.route.index &&
			(c.search = c.search ? c.search.replace(/^\?/, '?index&') : '?index'),
		l !== '/' && (c.pathname = c.pathname === '/' ? l : er([l, c.pathname])),
		yo(c)
	)
}
function xA(n, { relative: r } = {}) {
	let l = m.useContext(bb)
	dt(
		l != null,
		"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
	)
	let { basename: i } = Tb('useViewTransitionState'),
		u = wo(n, { relative: r })
	if (!l.isTransitioning) return !1
	let c = Mr(l.currentLocation.pathname, i) || l.currentLocation.pathname,
		d = Mr(l.nextLocation.pathname, i) || l.nextLocation.pathname
	return go(u.pathname, d) != null || go(u.pathname, c) != null
}
var Xy = (n) => {
		if (typeof n > 'u') return n
		const r = Number(n)
		return `${r}` === n ? r : n
	},
	AA = {
		addQueryPrefix: !0,
		skipNulls: !0,
		arrayFormat: 'indices',
		encode: !1,
		encodeValuesOnly: !0
	},
	pj = {
		go: () => {
			const { search: n, hash: r } = an(),
				l = bo()
			return m.useCallback(
				({
					to: u,
					type: c,
					query: d,
					hash: h,
					options: { keepQuery: p, keepHash: v } = {}
				}) => {
					const y = {
						...(p && n && Jf.parse(n, { ignoreQueryPrefix: !0, depth: Ay })),
						...d
					}
					y.to && (y.to = encodeURIComponent(`${y.to}`))
					const b = Object.keys(y).length > 0,
						R = `#${(h || (v && r) || '').replace(/^#/, '')}`,
						A = R.length > 1,
						_ = `${u || ''}${b ? Jf.stringify(y, AA) : ''}${A ? R : ''}`
					if (c === 'path') return _
					l(_, { replace: c === 'replace' })
				},
				[r, n, l]
			)
		},
		back: () => {
			const n = bo()
			return m.useCallback(() => {
				n(-1)
			}, [n])
		},
		parse: () => {
			var n
			let r = Mx()
			const { pathname: l, search: i } = an(),
				{ resources: u } = m.useContext(W1),
				{
					resource: c,
					action: d,
					matchedRoute: h
				} = ue.useMemo(() => eR(l, u), [u, l])
			return (
				Object.entries(r).length === 0 &&
					h &&
					(r = ((n = go(h, l)) == null ? void 0 : n.params) || {}),
				m.useCallback(() => {
					const v = Jf.parse(i, { ignoreQueryPrefix: !0, depth: Ay }),
						y = { ...r, ...v }
					return {
						...(c && { resource: c }),
						...(d && { action: d }),
						...((r == null ? void 0 : r.id) && {
							id: decodeURIComponent(r.id)
						}),
						pathname: l,
						params: {
							...y,
							currentPage: Xy(y.currentPage),
							pageSize: Xy(y.pageSize),
							to: y.to ? decodeURIComponent(y.to) : void 0
						}
					}
				}, [l, i, r, c, d])
			)
		},
		Link: ue.forwardRef(function (r, l) {
			return ue.createElement(hh, { to: r.to, ...r, ref: l })
		})
	},
	mj = ({ resource: n, fallbackTo: r, meta: l }) => {
		const i = tR(),
			{ resource: u, resources: c } = nR({ resource: n }),
			d = u || c.find((h) => h.list)
		if (d) {
			const h = i({ resource: d, action: 'list', meta: l })
			return h ? ue.createElement(Qy, { to: h }) : null
		}
		return r
			? (console.warn(`No resource is found. navigation to ${r}.`),
				ue.createElement(Qy, { to: r }))
			: (console.warn(
					'No resource and "fallbackTo" is found. No navigation will be made.'
				),
				null)
	}
function wA(n, r = !0) {
	const { navigator: l } = ue.useContext(pn)
	ue.useEffect(() => {
		if (!r) return
		const i = l.go,
			u = l.push
		return (
			(l.push = (...c) => {
				n() !== !1 && u(...c)
			}),
			(l.go = (...c) => {
				n() !== !1 && i(...c)
			}),
			() => {
				;((l.push = u), (l.go = i))
			}
		)
	}, [l, n, r])
}
function CA(n, r = !0, l) {
	const i = ue.useCallback(
		(c) => (c.preventDefault(), (c.returnValue = n), c.returnValue),
		[n]
	)
	ue.useEffect(
		() => (
			r && window.addEventListener('beforeunload', i),
			() => {
				window.removeEventListener('beforeunload', i)
			}
		),
		[i, r]
	)
	const u = ue.useCallback(() => {
		const c = window.confirm(n)
		return (c && l && l(), c)
	}, [n])
	wA(u, r)
}
var vj = ({
	translationKey: n = 'warnWhenUnsavedChanges',
	message: r = 'Are you sure you want to leave? You have unsaved changes.'
}) => {
	const l = rh(),
		{ pathname: i } = an(),
		{ warnWhen: u, setWarnWhen: c } = ab()
	ue.useEffect(() => () => (c == null ? void 0 : c(!1)), [i])
	const d = ue.useMemo(() => l(n, r), [n, r, l])
	return (
		CA(d, u, () => {
			c == null || c(!1)
		}),
		null
	)
}
function yj({ handler: n }) {
	var r
	const l = an(),
		{ action: i, id: u, params: c, pathname: d, resource: h } = rR(),
		p = rh(),
		v = aR(),
		y = (h == null ? void 0 : h.identifier) ?? (h == null ? void 0 : h.name),
		R =
			((r = h == null ? void 0 : h.meta) == null ? void 0 : r.label) ??
			v(y, i === 'list' ? 'plural' : 'singular'),
		A = p(`${h == null ? void 0 : h.name}.${h == null ? void 0 : h.name}`, R)
	return (
		m.useLayoutEffect(() => {
			const M = lR(p, h, i, `${u}`, R, v)
			n
				? (document.title = n({
						action: i,
						resource: {
							...(h ?? {}),
							meta: { ...(h == null ? void 0 : h.meta), label: A }
						},
						params: c,
						pathname: d,
						autoGeneratedTitle: M
					}))
				: (document.title = M)
		}, [l]),
		ue.createElement(ue.Fragment, null)
	)
}
function Zy(n, r) {
	if (typeof n == 'function') return n(r)
	n != null && (n.current = r)
}
function TA(...n) {
	return (r) => {
		let l = !1
		const i = n.map((u) => {
			const c = Zy(u, r)
			return (!l && typeof c == 'function' && (l = !0), c)
		})
		if (l)
			return () => {
				for (let u = 0; u < i.length; u++) {
					const c = i[u]
					typeof c == 'function' ? c() : Zy(n[u], null)
				}
			}
	}
}
function $e(...n) {
	return m.useCallback(TA(...n), n)
}
function Ga(n) {
	const r = m.forwardRef((l, i) => {
		let { children: u, ...c } = l,
			d = null,
			h = !1
		const p = []
		;(Jy(u) && typeof Ju == 'function' && (u = Ju(u._payload)),
			m.Children.forEach(u, (R) => {
				var A
				if (jA(R)) {
					h = !0
					const M = R
					let _ = 'child' in M.props ? M.props.child : M.props.children
					;(Jy(_) && typeof Ju == 'function' && (_ = Ju(_._payload)),
						(d = MA(M, _)),
						p.push(
							(A = d == null ? void 0 : d.props) == null ? void 0 : A.children
						))
				} else p.push(R)
			}),
			d
				? (d = m.cloneElement(d, void 0, p))
				: !h && m.Children.count(u) === 1 && m.isValidElement(u) && (d = u))
		const v = d ? NA(d) : void 0,
			y = $e(i, v)
		if (!d) {
			if (u || u === 0) throw new Error(h ? BA(n) : zA(n))
			return u
		}
		const b = DA(c, d.props ?? {})
		return (d.type !== m.Fragment && (b.ref = i ? y : v), m.cloneElement(d, b))
	})
	return ((r.displayName = `${n}.Slot`), r)
}
var gj = Ga('Slot'),
	Ob = Symbol.for('radix.slottable')
function OA(n) {
	const r = (l) => ('child' in l ? l.children(l.child) : l.children)
	return ((r.displayName = `${n}.Slottable`), (r.__radixId = Ob), r)
}
var MA = (n, r) => {
	if ('child' in n.props) {
		const l = n.props.child
		return m.isValidElement(l)
			? m.cloneElement(l, void 0, n.props.children(l.props.children))
			: null
	}
	return m.isValidElement(r) ? r : null
}
function DA(n, r) {
	const l = { ...r }
	for (const i in r) {
		const u = n[i],
			c = r[i]
		;/^on[A-Z]/.test(i)
			? u && c
				? (l[i] = (...h) => {
						const p = c(...h)
						return (u(...h), p)
					})
				: u && (l[i] = u)
			: i === 'style'
				? (l[i] = { ...u, ...c })
				: i === 'className' && (l[i] = [u, c].filter(Boolean).join(' '))
	}
	return { ...n, ...l }
}
function NA(n) {
	var i, u
	let r =
			(i = Object.getOwnPropertyDescriptor(n.props, 'ref')) == null
				? void 0
				: i.get,
		l = r && 'isReactWarning' in r && r.isReactWarning
	return l
		? n.ref
		: ((r =
				(u = Object.getOwnPropertyDescriptor(n, 'ref')) == null
					? void 0
					: u.get),
			(l = r && 'isReactWarning' in r && r.isReactWarning),
			l ? n.props.ref : n.props.ref || n.ref)
}
function jA(n) {
	return (
		m.isValidElement(n) &&
		typeof n.type == 'function' &&
		'__radixId' in n.type &&
		n.type.__radixId === Ob
	)
}
var LA = Symbol.for('react.lazy')
function Jy(n) {
	return (
		n != null &&
		typeof n == 'object' &&
		'$$typeof' in n &&
		n.$$typeof === LA &&
		'_payload' in n &&
		UA(n._payload)
	)
}
function UA(n) {
	return typeof n == 'object' && n !== null && 'then' in n
}
var zA = (n) =>
		`${n} failed to slot onto its children. Expected a single React element child or \`Slottable\`.`,
	BA = (n) =>
		`${n} failed to slot onto its \`Slottable\`. Expected \`Slottable\` to receive a single React element child.`,
	Ju = xo[' use '.trim().toString()]
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const PA = (n) => n.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase(),
	VA = (n) =>
		n.replace(/^([A-Z])|[\s-_]+(\w)/g, (r, l, i) =>
			i ? i.toUpperCase() : l.toLowerCase()
		),
	Wy = (n) => {
		const r = VA(n)
		return r.charAt(0).toUpperCase() + r.slice(1)
	},
	Mb = (...n) =>
		n
			.filter((r, l, i) => !!r && r.trim() !== '' && i.indexOf(r) === l)
			.join(' ')
			.trim()
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var kA = {
	xmlns: 'http://www.w3.org/2000/svg',
	width: 24,
	height: 24,
	viewBox: '0 0 24 24',
	fill: 'none',
	stroke: 'currentColor',
	strokeWidth: 2,
	strokeLinecap: 'round',
	strokeLinejoin: 'round'
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const HA = m.forwardRef(
	(
		{
			color: n = 'currentColor',
			size: r = 24,
			strokeWidth: l = 2,
			absoluteStrokeWidth: i,
			className: u = '',
			children: c,
			iconNode: d,
			...h
		},
		p
	) =>
		m.createElement(
			'svg',
			{
				ref: p,
				...kA,
				width: r,
				height: r,
				stroke: n,
				strokeWidth: i ? (Number(l) * 24) / Number(r) : l,
				className: Mb('lucide', u),
				...h
			},
			[
				...d.map(([v, y]) => m.createElement(v, y)),
				...(Array.isArray(c) ? c : [c])
			]
		)
)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ie = (n, r) => {
	const l = m.forwardRef(({ className: i, ...u }, c) =>
		m.createElement(HA, {
			ref: c,
			iconNode: r,
			className: Mb(`lucide-${PA(Wy(n))}`, `lucide-${n}`, i),
			...u
		})
	)
	return ((l.displayName = Wy(n)), l)
}
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qA = [
		['path', { d: 'm12 19-7-7 7-7', key: '1l729n' }],
		['path', { d: 'M19 12H5', key: 'x3x0zl' }]
	],
	bj = Ie('arrow-left', qA)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const GA = [
		['path', { d: 'M12 7v14', key: '1akyts' }],
		[
			'path',
			{
				d: 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z',
				key: 'ruj8y'
			}
		]
	],
	Sj = Ie('book-open', GA)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const FA = [
		['path', { d: 'M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z', key: '1b4qmf' }],
		['path', { d: 'M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2', key: 'i71pzd' }],
		['path', { d: 'M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2', key: '10jefs' }],
		['path', { d: 'M10 6h4', key: '1itunk' }],
		['path', { d: 'M10 10h4', key: 'tcdvrf' }],
		['path', { d: 'M10 14h4', key: 'kelpxr' }],
		['path', { d: 'M10 18h4', key: '1ulq68' }]
	],
	_j = Ie('building-2', FA)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const $A = [['path', { d: 'M20 6 9 17l-5-5', key: '1gmf2c' }]],
	Ej = Ie('check', $A)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const IA = [['path', { d: 'm6 9 6 6 6-6', key: 'qrunsl' }]],
	Rj = Ie('chevron-down', IA)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const YA = [['path', { d: 'm15 18-6-6 6-6', key: '1wnfg3' }]],
	xj = Ie('chevron-left', YA)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const QA = [['path', { d: 'm9 18 6-6-6-6', key: 'mthhwq' }]],
	Aj = Ie('chevron-right', QA)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const KA = [['path', { d: 'm18 15-6-6-6 6', key: '153udz' }]],
	wj = Ie('chevron-up', KA)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const XA = [
		['path', { d: 'm11 17-5-5 5-5', key: '13zhaf' }],
		['path', { d: 'm18 17-5-5 5-5', key: 'h8a8et' }]
	],
	Cj = Ie('chevrons-left', XA)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ZA = [
		['path', { d: 'm6 17 5-5-5-5', key: 'xnjwq' }],
		['path', { d: 'm13 17 5-5-5-5', key: '17xmmf' }]
	],
	Tj = Ie('chevrons-right', ZA)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const JA = [
		['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
		['path', { d: 'M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3', key: '1u773s' }],
		['path', { d: 'M12 17h.01', key: 'p32p05' }]
	],
	Oj = Ie('circle-help', JA)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const WA = [
		[
			'rect',
			{
				width: '8',
				height: '4',
				x: '8',
				y: '2',
				rx: '1',
				ry: '1',
				key: 'tgr4d6'
			}
		],
		[
			'path',
			{
				d: 'M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2',
				key: '116196'
			}
		],
		['path', { d: 'm9 14 2 2 4-4', key: 'df797q' }]
	],
	Mj = Ie('clipboard-check', WA)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ew = [
		['path', { d: 'M12 13v8', key: '1l5pq0' }],
		[
			'path',
			{
				d: 'M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242',
				key: '1pljnt'
			}
		],
		['path', { d: 'm8 17 4-4 4 4', key: '1quai1' }]
	],
	Dj = Ie('cloud-upload', ew)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const tw = [
		[
			'path',
			{
				d: 'M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49',
				key: 'ct8e1f'
			}
		],
		['path', { d: 'M14.084 14.158a3 3 0 0 1-4.242-4.242', key: '151rxh' }],
		[
			'path',
			{
				d: 'M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143',
				key: '13bj9a'
			}
		],
		['path', { d: 'm2 2 20 20', key: '1ooewy' }]
	],
	Nj = Ie('eye-off', tw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const nw = [
		[
			'path',
			{
				d: 'M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0',
				key: '1nclc0'
			}
		],
		['circle', { cx: '12', cy: '12', r: '3', key: '1v7zrd' }]
	],
	jj = Ie('eye', nw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rw = [
		[
			'path',
			{
				d: 'M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z',
				key: 'j76jl0'
			}
		],
		['path', { d: 'M22 10v6', key: '1lu8f3' }],
		['path', { d: 'M6 12.5V16a6 3 0 0 0 12 0v-3.5', key: '1r8lef' }]
	],
	Lj = Ie('graduation-cap', rw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aw = [
		[
			'path',
			{ d: 'M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8', key: '5wwlr5' }
		],
		[
			'path',
			{
				d: 'M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z',
				key: '1d0kgt'
			}
		]
	],
	Uj = Ie('house', aw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lw = [
		[
			'path',
			{
				d: 'M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z',
				key: 'zw3jo'
			}
		],
		[
			'path',
			{
				d: 'M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12',
				key: '1wduqc'
			}
		],
		[
			'path',
			{
				d: 'M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17',
				key: 'kqbvx6'
			}
		]
	],
	zj = Ie('layers', lw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const iw = [
		['path', { d: 'M3 12h.01', key: 'nlz23k' }],
		['path', { d: 'M3 18h.01', key: '1tta3j' }],
		['path', { d: 'M3 6h.01', key: '1rqtza' }],
		['path', { d: 'M8 12h13', key: '1za7za' }],
		['path', { d: 'M8 18h13', key: '1lx6n3' }],
		['path', { d: 'M8 6h13', key: 'ik3vkj' }]
	],
	Bj = Ie('list', iw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ow = [['path', { d: 'M21 12a9 9 0 1 1-6.219-8.56', key: '13zald' }]],
	Pj = Ie('loader-circle', ow)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const uw = [
		['path', { d: 'M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4', key: '1uf3rs' }],
		['polyline', { points: '16 17 21 12 16 7', key: '1gabdz' }],
		['line', { x1: '21', x2: '9', y1: '12', y2: '12', key: '1uyos4' }]
	],
	Vj = Ie('log-out', uw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sw = [
		[
			'rect',
			{ width: '20', height: '14', x: '2', y: '3', rx: '2', key: '48i651' }
		],
		['line', { x1: '8', x2: '16', y1: '21', y2: '21', key: '1svkeh' }],
		['line', { x1: '12', x2: '12', y1: '17', y2: '21', key: 'vw1qmm' }]
	],
	kj = Ie('monitor', sw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cw = [
		['path', { d: 'M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z', key: 'a7tn18' }]
	],
	Hj = Ie('moon', cw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fw = [
		[
			'rect',
			{ width: '18', height: '18', x: '3', y: '3', rx: '2', key: 'afitv7' }
		],
		['path', { d: 'M9 3v18', key: 'fh3hqa' }]
	],
	qj = Ie('panel-left', fw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dw = [
		[
			'path',
			{
				d: 'M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z',
				key: '1a8usu'
			}
		],
		['path', { d: 'm15 5 4 4', key: '1mk7zo' }]
	],
	Gj = Ie('pencil', dw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hw = [
		['path', { d: 'M5 12h14', key: '1ays0h' }],
		['path', { d: 'M12 5v14', key: 's699le' }]
	],
	Fj = Ie('plus', hw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pw = [
		[
			'path',
			{ d: 'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', key: '14sxne' }
		],
		['path', { d: 'M3 3v5h5', key: '1xhq8a' }],
		[
			'path',
			{
				d: 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16',
				key: '1hlbsb'
			}
		],
		['path', { d: 'M16 16h5v5', key: 'ccwih5' }]
	],
	$j = Ie('refresh-ccw', pw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mw = [
		['path', { d: 'M14 22v-4a2 2 0 1 0-4 0v4', key: 'hhkicm' }],
		[
			'path',
			{
				d: 'm18 10 3.447 1.724a1 1 0 0 1 .553.894V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-7.382a1 1 0 0 1 .553-.894L6 10',
				key: '1xqip1'
			}
		],
		['path', { d: 'M18 5v17', key: '1sw6gf' }],
		['path', { d: 'm4 6 7.106-3.553a2 2 0 0 1 1.788 0L20 6', key: '9d2mlk' }],
		['path', { d: 'M6 5v17', key: '1xfsm0' }],
		['circle', { cx: '12', cy: '9', r: '2', key: '1092wv' }]
	],
	Ij = Ie('school', mw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const vw = [
		['circle', { cx: '11', cy: '11', r: '8', key: '4ej97u' }],
		['path', { d: 'm21 21-4.3-4.3', key: '1qie3q' }]
	],
	Yj = Ie('search', vw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const yw = [
		[
			'path',
			{
				d: 'M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z',
				key: 'oel41y'
			}
		],
		['path', { d: 'm9 12 2 2 4-4', key: 'dzmm74' }]
	],
	Qj = Ie('shield-check', yw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gw = [
		['circle', { cx: '12', cy: '12', r: '4', key: '4exip2' }],
		['path', { d: 'M12 2v2', key: 'tus03m' }],
		['path', { d: 'M12 20v2', key: '1lh1kg' }],
		['path', { d: 'm4.93 4.93 1.41 1.41', key: '149t6j' }],
		['path', { d: 'm17.66 17.66 1.41 1.41', key: 'ptbguv' }],
		['path', { d: 'M2 12h2', key: '1t8f8n' }],
		['path', { d: 'M20 12h2', key: '1q8mjw' }],
		['path', { d: 'm6.34 17.66-1.41 1.41', key: '1m8zz5' }],
		['path', { d: 'm19.07 4.93-1.41 1.41', key: '1shlcs' }]
	],
	Kj = Ie('sun', gw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const bw = [
		['path', { d: 'M3 6h18', key: 'd0wm0j' }],
		['path', { d: 'M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6', key: '4alrt4' }],
		['path', { d: 'M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2', key: 'v07s0e' }]
	],
	Xj = Ie('trash', bw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Sw = [
		['path', { d: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2', key: '1yyitq' }],
		['circle', { cx: '9', cy: '7', r: '4', key: 'nufk8' }],
		['path', { d: 'M22 21v-2a4 4 0 0 0-3-3.87', key: 'kshegd' }],
		['path', { d: 'M16 3.13a4 4 0 0 1 0 7.75', key: '1da9ce' }]
	],
	Zj = Ie('users', Sw)
/**
 * @license lucide-react v0.487.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _w = [
		['path', { d: 'M18 6 6 18', key: '1bl5f8' }],
		['path', { d: 'm6 6 12 12', key: 'd8bk6v' }]
	],
	Jj = Ie('x', _w)
function tr(n, r = []) {
	let l = []
	function i(c, d) {
		const h = m.createContext(d)
		h.displayName = c + 'Context'
		const p = l.length
		l = [...l, d]
		const v = (b) => {
			var x
			const { scope: R, children: A, ...M } = b,
				_ = ((x = R == null ? void 0 : R[n]) == null ? void 0 : x[p]) || h,
				S = m.useMemo(() => M, Object.values(M))
			return z.jsx(_.Provider, { value: S, children: A })
		}
		v.displayName = c + 'Provider'
		function y(b, R) {
			var _
			const A = ((_ = R == null ? void 0 : R[n]) == null ? void 0 : _[p]) || h,
				M = m.useContext(A)
			if (M) return M
			if (d !== void 0) return d
			throw new Error(`\`${b}\` must be used within \`${c}\``)
		}
		return [v, y]
	}
	const u = () => {
		const c = l.map((d) => m.createContext(d))
		return function (h) {
			const p = (h == null ? void 0 : h[n]) || c
			return m.useMemo(() => ({ [`__scope${n}`]: { ...h, [n]: p } }), [h, p])
		}
	}
	return ((u.scopeName = n), [i, Ew(u, ...r)])
}
function Ew(...n) {
	const r = n[0]
	if (n.length === 1) return r
	const l = () => {
		const i = n.map((u) => ({ useScope: u(), scopeName: u.scopeName }))
		return function (c) {
			const d = i.reduce((h, { useScope: p, scopeName: v }) => {
				const b = p(c)[`__scope${v}`]
				return { ...h, ...b }
			}, {})
			return m.useMemo(() => ({ [`__scope${r.scopeName}`]: d }), [d])
		}
	}
	return ((l.scopeName = r.scopeName), l)
}
function Hn(n) {
	const r = m.useRef(n)
	return (
		m.useEffect(() => {
			r.current = n
		}),
		m.useMemo(
			() =>
				(...l) => {
					var i
					return (i = r.current) == null ? void 0 : i.call(r, ...l)
				},
			[]
		)
	)
}
var Ct =
		globalThis != null && globalThis.document ? m.useLayoutEffect : () => {},
	Rw = [
		'a',
		'button',
		'div',
		'form',
		'h2',
		'h3',
		'img',
		'input',
		'label',
		'li',
		'nav',
		'ol',
		'p',
		'select',
		'span',
		'svg',
		'ul'
	],
	Ne = Rw.reduce((n, r) => {
		const l = Ga(`Primitive.${r}`),
			i = m.forwardRef((u, c) => {
				const { asChild: d, ...h } = u,
					p = d ? l : r
				return (
					typeof window < 'u' && (window[Symbol.for('radix-ui')] = !0),
					z.jsx(p, { ...h, ref: c })
				)
			})
		return ((i.displayName = `Primitive.${r}`), { ...n, [r]: i })
	}, {})
function Db(n, r) {
	n && Xl.flushSync(() => n.dispatchEvent(r))
}
var ph = 'Avatar',
	[xw] = tr(ph),
	Aw = [0, () => {}],
	[ww, Nb] = xw(ph),
	Cw = m.forwardRef((n, r) => {
		const { __scopeAvatar: l, ...i } = n,
			[u, c] = m.useState('idle'),
			[d, h] = Dw()
		return z.jsx(ww, {
			scope: l,
			imageLoadingStatus: u,
			setImageLoadingStatus: c,
			imageCount: d,
			setImageCount: h,
			children: z.jsx(Ne.span, { ...i, ref: r })
		})
	})
Cw.displayName = ph
var jb = 'AvatarImage',
	Tw = m.forwardRef((n, r) => {
		const { __scopeAvatar: l, src: i, onLoadingStatusChange: u, ...c } = n,
			d = Nb(jb, l)
		Nw(d.setImageCount)
		const h = Mw(i, {
				referrerPolicy: c.referrerPolicy,
				crossOrigin: c.crossOrigin,
				loadingStatus: d.imageLoadingStatus,
				setLoadingStatus: d.setImageLoadingStatus
			}),
			p = Hn((y) => {
				u == null || u(y)
			}),
			v = m.useRef(h)
		return (
			Ct(() => {
				const y = v.current
				;((v.current = h), h !== y && p(h))
			}, [h, p]),
			h === 'loaded' ? z.jsx(Ne.img, { ...c, ref: r, src: i }) : null
		)
	})
Tw.displayName = jb
var Lb = 'AvatarFallback',
	Ow = m.forwardRef((n, r) => {
		const { __scopeAvatar: l, delayMs: i, ...u } = n,
			c = Nb(Lb, l),
			[d, h] = m.useState(i === void 0)
		return (
			m.useEffect(() => {
				if (i !== void 0) {
					const p = window.setTimeout(() => h(!0), i)
					return () => window.clearTimeout(p)
				}
			}, [i]),
			d && c.imageLoadingStatus !== 'loaded'
				? z.jsx(Ne.span, { ...u, ref: r })
				: null
		)
	})
Ow.displayName = Lb
function Mw(
	n,
	{ loadingStatus: r, setLoadingStatus: l, referrerPolicy: i, crossOrigin: u }
) {
	return (
		Ct(() => {
			if (!n) {
				l('error')
				return
			}
			const c = new window.Image(),
				d = (p) => {
					const v = p.currentTarget
					l(eg(v))
				},
				h = () => l('error')
			return (
				c.addEventListener('load', d),
				c.addEventListener('error', h),
				i && (c.referrerPolicy = i),
				(c.crossOrigin = u ?? null),
				(c.src = n),
				l(eg(c)),
				() => {
					;(c.removeEventListener('load', d),
						c.removeEventListener('error', h),
						l('idle'))
				}
			)
		}, [n, u, i, l]),
		r
	)
}
function eg(n) {
	return n.complete ? (n.naturalWidth > 0 ? 'loaded' : 'error') : 'loading'
}
function Dw() {
	let n = Aw
	{
		n = m.useState(0)
		const [r] = n,
			l = m.useRef(!1)
		m.useEffect(() => {
			r > 1 &&
				!l.current &&
				((l.current = !0),
				console.warn(
					'Avatar: Only one `Avatar.Image` component should be rendered per `Avatar.Root`, but multiple were detected. This will lead to unexpected behavior.'
				))
		}, [r])
	}
	return n
}
function Nw(n) {
	m.useEffect(
		() => (
			n((r) => r + 1),
			() => {
				n((r) => r - 1)
			}
		),
		[n]
	)
}
var tg = xo[' useEffectEvent '.trim().toString()],
	ng = xo[' useInsertionEffect '.trim().toString()]
function jw(n) {
	if (typeof tg == 'function') return tg(n)
	const r = m.useRef(() => {
		throw new Error('Cannot call an event handler while rendering.')
	})
	return (
		typeof ng == 'function'
			? ng(() => {
					r.current = n
				})
			: Ct(() => {
					r.current = n
				}),
		m.useMemo(
			() =>
				(...l) => {
					var i
					return (i = r.current) == null ? void 0 : i.call(r, ...l)
				},
			[]
		)
	)
}
var Lw = xo[' useInsertionEffect '.trim().toString()] || Ct
function Fa({ prop: n, defaultProp: r, onChange: l = () => {}, caller: i }) {
	const [u, c, d] = Uw({ defaultProp: r, onChange: l }),
		h = n !== void 0,
		p = h ? n : u
	{
		const y = m.useRef(n !== void 0)
		m.useEffect(() => {
			const b = y.current
			;(b !== h &&
				console.warn(
					`${i} is changing from ${b ? 'controlled' : 'uncontrolled'} to ${h ? 'controlled' : 'uncontrolled'}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
				),
				(y.current = h))
		}, [h, i])
	}
	const v = m.useCallback(
		(y) => {
			var b
			if (h) {
				const R = zw(y) ? y(n) : y
				R !== n && ((b = d.current) == null || b.call(d, R))
			} else c(y)
		},
		[h, n, c, d]
	)
	return [p, v]
}
function Uw({ defaultProp: n, onChange: r }) {
	const [l, i] = m.useState(n),
		u = m.useRef(l),
		c = m.useRef(r)
	return (
		Lw(() => {
			c.current = r
		}, [r]),
		m.useEffect(() => {
			var d
			u.current !== l &&
				((d = c.current) == null || d.call(c, l), (u.current = l))
		}, [l, u]),
		[l, i, c]
	)
}
function zw(n) {
	return typeof n == 'function'
}
function mh(n) {
	const r = n + 'CollectionProvider',
		[l, i] = tr(r),
		[u, c] = l(r, { collectionRef: { current: null }, itemMap: new Map() }),
		d = (_) => {
			const { scope: S, children: x } = _,
				C = m.useRef(null),
				T = m.useRef(new Map()).current
			return z.jsx(u, { scope: S, itemMap: T, collectionRef: C, children: x })
		}
	d.displayName = r
	const h = n + 'CollectionSlot',
		p = Ga(h),
		v = m.forwardRef((_, S) => {
			const { scope: x, children: C } = _,
				T = c(h, x),
				j = $e(S, T.collectionRef)
			return z.jsx(p, { ref: j, children: C })
		})
	v.displayName = h
	const y = n + 'CollectionItemSlot',
		b = 'data-radix-collection-item',
		R = Ga(y),
		A = m.forwardRef((_, S) => {
			const { scope: x, children: C, ...T } = _,
				j = m.useRef(null),
				L = $e(S, j),
				Q = c(y, x)
			return (
				m.useEffect(
					() => (
						Q.itemMap.set(j, { ref: j, ...T }),
						() => void Q.itemMap.delete(j)
					)
				),
				z.jsx(R, { [b]: '', ref: L, children: C })
			)
		})
	A.displayName = y
	function M(_) {
		const S = c(n + 'CollectionConsumer', _)
		return m.useCallback(() => {
			const C = S.collectionRef.current
			if (!C) return []
			const T = Array.from(C.querySelectorAll(`[${b}]`))
			return Array.from(S.itemMap.values()).sort(
				(Q, te) => T.indexOf(Q.ref.current) - T.indexOf(te.ref.current)
			)
		}, [S.collectionRef, S.itemMap])
	}
	return [{ Provider: d, Slot: v, ItemSlot: A }, M, i]
}
var Bw = m.createContext(void 0)
function vh(n) {
	const r = m.useContext(Bw)
	return n || r || 'ltr'
}
var Pw = 'DismissableLayer',
	Od = 'dismissableLayer.update',
	Vw = 'dismissableLayer.pointerDownOutside',
	kw = 'dismissableLayer.focusOutside',
	rg,
	yh = m.createContext({
		layers: new Set(),
		layersWithOutsidePointerEventsDisabled: new Set(),
		branches: new Set(),
		dismissableSurfaces: new Set()
	}),
	Co = m.forwardRef((n, r) => {
		const {
				disableOutsidePointerEvents: l = !1,
				deferPointerDownOutside: i = !1,
				onEscapeKeyDown: u,
				onPointerDownOutside: c,
				onFocusOutside: d,
				onInteractOutside: h,
				onDismiss: p,
				...v
			} = n,
			y = m.useContext(yh),
			[b, R] = m.useState(null),
			A =
				(b == null ? void 0 : b.ownerDocument) ??
				(globalThis == null ? void 0 : globalThis.document),
			[, M] = m.useState({}),
			_ = $e(r, R),
			S = Array.from(y.layers),
			[x] = [...y.layersWithOutsidePointerEventsDisabled].slice(-1),
			C = S.indexOf(x),
			T = b ? S.indexOf(b) : -1,
			j = y.layersWithOutsidePointerEventsDisabled.size > 0,
			L = T >= C,
			Q = m.useRef(!1),
			te = Fw(
				(de) => {
					const I = de.target
					if (!(I instanceof Node)) return
					const X = [...y.branches].some((ne) => ne.contains(I))
					!L ||
						X ||
						(c == null || c(de),
						h == null || h(de),
						de.defaultPrevented || p == null || p())
				},
				{
					ownerDocument: A,
					deferPointerDownOutside: i,
					isDeferredPointerDownOutsideRef: Q,
					dismissableSurfaces: y.dismissableSurfaces
				}
			),
			fe = $w((de) => {
				if (i && Q.current) return
				const I = de.target
				;[...y.branches].some((ne) => ne.contains(I)) ||
					(d == null || d(de),
					h == null || h(de),
					de.defaultPrevented || p == null || p())
			}, A),
			_e = b ? T === S.length - 1 : !1,
			be = jw((de) => {
				de.key === 'Escape' &&
					(u == null || u(de),
					!de.defaultPrevented && p && (de.preventDefault(), p()))
			})
		return (
			m.useEffect(() => {
				if (_e)
					return (
						A.addEventListener('keydown', be, { capture: !0 }),
						() => A.removeEventListener('keydown', be, { capture: !0 })
					)
			}, [A, _e]),
			m.useEffect(() => {
				if (b)
					return (
						l &&
							(y.layersWithOutsidePointerEventsDisabled.size === 0 &&
								((rg = A.body.style.pointerEvents),
								(A.body.style.pointerEvents = 'none')),
							y.layersWithOutsidePointerEventsDisabled.add(b)),
						y.layers.add(b),
						ag(),
						() => {
							l &&
								(y.layersWithOutsidePointerEventsDisabled.delete(b),
								y.layersWithOutsidePointerEventsDisabled.size === 0 &&
									(A.body.style.pointerEvents = rg))
						}
					)
			}, [b, A, l, y]),
			m.useEffect(
				() => () => {
					b &&
						(y.layers.delete(b),
						y.layersWithOutsidePointerEventsDisabled.delete(b),
						ag())
				},
				[b, y]
			),
			m.useEffect(() => {
				const de = () => M({})
				return (
					document.addEventListener(Od, de),
					() => document.removeEventListener(Od, de)
				)
			}, []),
			z.jsx(Ne.div, {
				...v,
				ref: _,
				style: {
					pointerEvents: j ? (L ? 'auto' : 'none') : void 0,
					...n.style
				},
				onFocusCapture: Ee(n.onFocusCapture, fe.onFocusCapture),
				onBlurCapture: Ee(n.onBlurCapture, fe.onBlurCapture),
				onPointerDownCapture: Ee(
					n.onPointerDownCapture,
					te.onPointerDownCapture
				)
			})
		)
	})
Co.displayName = Pw
var Hw = 'DismissableLayerBranch',
	qw = m.forwardRef((n, r) => {
		const l = m.useContext(yh),
			i = m.useRef(null),
			u = $e(r, i)
		return (
			m.useEffect(() => {
				const c = i.current
				if (c)
					return (
						l.branches.add(c),
						() => {
							l.branches.delete(c)
						}
					)
			}, [l.branches]),
			z.jsx(Ne.div, { ...n, ref: u })
		)
	})
qw.displayName = Hw
function Gw() {
	const n = m.useContext(yh),
		[r, l] = m.useState(null)
	return (
		m.useEffect(() => {
			if (r)
				return (
					n.dismissableSurfaces.add(r),
					() => {
						n.dismissableSurfaces.delete(r)
					}
				)
		}, [r, n.dismissableSurfaces]),
		l
	)
}
function Fw(n, r) {
	const {
			ownerDocument: l = globalThis == null ? void 0 : globalThis.document,
			deferPointerDownOutside: i = !1,
			isDeferredPointerDownOutsideRef: u,
			dismissableSurfaces: c
		} = r,
		d = Hn(n),
		h = m.useRef(!1),
		p = m.useRef(!1),
		v = m.useRef(new Map()),
		y = m.useRef(() => {})
	return (
		m.useEffect(() => {
			function b() {
				;((p.current = !1), (u.current = !1), v.current.clear())
			}
			function R() {
				return Array.from(v.current.values()).some(Boolean)
			}
			function A(C) {
				if (!p.current) return
				const T = C.target
				;((T instanceof Node && [...c].some((L) => L.contains(T))) ||
					v.current.set(C.type, !0),
					C.type === 'click' &&
						window.setTimeout(() => {
							p.current && y.current()
						}, 0))
			}
			function M(C) {
				p.current && v.current.set(C.type, !1)
			}
			const _ = (C) => {
					if (C.target && !h.current) {
						let T = function () {
							l.removeEventListener('click', y.current)
							const L = R()
							;(b(), L || Ub(Vw, d, j, { discrete: !0 }))
						}
						const j = { originalEvent: C }
						;((p.current = !0),
							(u.current = i && C.button === 0),
							v.current.clear(),
							!i || C.button !== 0
								? T()
								: (l.removeEventListener('click', y.current),
									(y.current = T),
									l.addEventListener('click', y.current, { once: !0 })))
					} else (l.removeEventListener('click', y.current), b())
					h.current = !1
				},
				S = [
					'pointerup',
					'mousedown',
					'mouseup',
					'touchstart',
					'touchend',
					'click'
				]
			for (const C of S)
				(l.addEventListener(C, A, !0), l.addEventListener(C, M))
			const x = window.setTimeout(() => {
				l.addEventListener('pointerdown', _)
			}, 0)
			return () => {
				;(window.clearTimeout(x),
					l.removeEventListener('pointerdown', _),
					l.removeEventListener('click', y.current))
				for (const C of S)
					(l.removeEventListener(C, A, !0), l.removeEventListener(C, M))
			}
		}, [l, d, i, u, c]),
		{ onPointerDownCapture: () => (h.current = !0) }
	)
}
function $w(n, r = globalThis == null ? void 0 : globalThis.document) {
	const l = Hn(n),
		i = m.useRef(!1)
	return (
		m.useEffect(() => {
			const u = (c) => {
				c.target &&
					!i.current &&
					Ub(kw, l, { originalEvent: c }, { discrete: !1 })
			}
			return (
				r.addEventListener('focusin', u),
				() => r.removeEventListener('focusin', u)
			)
		}, [r, l]),
		{
			onFocusCapture: () => (i.current = !0),
			onBlurCapture: () => (i.current = !1)
		}
	)
}
function ag() {
	const n = new CustomEvent(Od)
	document.dispatchEvent(n)
}
function Ub(n, r, l, { discrete: i }) {
	const u = l.originalEvent.target,
		c = new CustomEvent(n, { bubbles: !1, cancelable: !0, detail: l })
	;(r && u.addEventListener(n, r, { once: !0 }),
		i ? Db(u, c) : u.dispatchEvent(c))
}
var Wu = 0,
	hr = null
function gh() {
	m.useEffect(() => {
		hr || (hr = { start: lg(), end: lg() })
		const { start: n, end: r } = hr
		return (
			document.body.firstElementChild !== n &&
				document.body.insertAdjacentElement('afterbegin', n),
			document.body.lastElementChild !== r &&
				document.body.insertAdjacentElement('beforeend', r),
			Wu++,
			() => {
				;(Wu === 1 &&
					(hr == null || hr.start.remove(),
					hr == null || hr.end.remove(),
					(hr = null)),
					(Wu = Math.max(0, Wu - 1)))
			}
		)
	}, [])
}
function lg() {
	const n = document.createElement('span')
	return (
		n.setAttribute('data-radix-focus-guard', ''),
		(n.tabIndex = 0),
		(n.style.outline = 'none'),
		(n.style.opacity = '0'),
		(n.style.position = 'fixed'),
		(n.style.pointerEvents = 'none'),
		n
	)
}
var fd = 'focusScope.autoFocusOnMount',
	dd = 'focusScope.autoFocusOnUnmount',
	ig = { bubbles: !1, cancelable: !0 },
	Iw = 'FocusScope',
	Ms = m.forwardRef((n, r) => {
		const {
				loop: l = !1,
				trapped: i = !1,
				onMountAutoFocus: u,
				onUnmountAutoFocus: c,
				...d
			} = n,
			[h, p] = m.useState(null),
			v = Hn(u),
			y = Hn(c),
			b = m.useRef(null),
			R = $e(r, p),
			A = m.useRef({
				paused: !1,
				pause() {
					this.paused = !0
				},
				resume() {
					this.paused = !1
				}
			}).current
		;(m.useEffect(() => {
			if (i) {
				let _ = function (T) {
						if (A.paused || !h) return
						const j = T.target
						h.contains(j) ? (b.current = j) : fa(b.current, { select: !0 })
					},
					S = function (T) {
						if (A.paused || !h) return
						const j = T.relatedTarget
						j !== null && (h.contains(j) || fa(b.current, { select: !0 }))
					},
					x = function (T) {
						if (document.activeElement === document.body)
							for (const L of T) L.removedNodes.length > 0 && fa(h)
					}
				;(document.addEventListener('focusin', _),
					document.addEventListener('focusout', S))
				const C = new MutationObserver(x)
				return (
					h && C.observe(h, { childList: !0, subtree: !0 }),
					() => {
						;(document.removeEventListener('focusin', _),
							document.removeEventListener('focusout', S),
							C.disconnect())
					}
				)
			}
		}, [i, h, A.paused]),
			m.useEffect(() => {
				if (h) {
					ug.add(A)
					const _ = document.activeElement
					if (!h.contains(_)) {
						const x = new CustomEvent(fd, ig)
						;(h.addEventListener(fd, v),
							h.dispatchEvent(x),
							x.defaultPrevented ||
								(Yw(Jw(zb(h)), { select: !0 }),
								document.activeElement === _ && fa(h)))
					}
					return () => {
						;(h.removeEventListener(fd, v),
							setTimeout(() => {
								const x = new CustomEvent(dd, ig)
								;(h.addEventListener(dd, y),
									h.dispatchEvent(x),
									x.defaultPrevented || fa(_ ?? document.body, { select: !0 }),
									h.removeEventListener(dd, y),
									ug.remove(A))
							}, 0))
					}
				}
			}, [h, v, y, A]))
		const M = m.useCallback(
			(_) => {
				if ((!l && !i) || A.paused) return
				const S = _.key === 'Tab' && !_.altKey && !_.ctrlKey && !_.metaKey,
					x = document.activeElement
				if (S && x) {
					const C = _.currentTarget,
						[T, j] = Qw(C)
					T && j
						? !_.shiftKey && x === j
							? (_.preventDefault(), l && fa(T, { select: !0 }))
							: _.shiftKey &&
								x === T &&
								(_.preventDefault(), l && fa(j, { select: !0 }))
						: x === C && _.preventDefault()
				}
			},
			[l, i, A.paused]
		)
		return z.jsx(Ne.div, { tabIndex: -1, ...d, ref: R, onKeyDown: M })
	})
Ms.displayName = Iw
function Yw(n, { select: r = !1 } = {}) {
	const l = document.activeElement
	for (const i of n)
		if ((fa(i, { select: r }), document.activeElement !== l)) return
}
function Qw(n) {
	const r = zb(n),
		l = og(r, n),
		i = og(r.reverse(), n)
	return [l, i]
}
function zb(n) {
	const r = [],
		l = document.createTreeWalker(n, NodeFilter.SHOW_ELEMENT, {
			acceptNode: (i) => {
				const u = i.tagName === 'INPUT' && i.type === 'hidden'
				return i.disabled || i.hidden || u
					? NodeFilter.FILTER_SKIP
					: i.tabIndex >= 0
						? NodeFilter.FILTER_ACCEPT
						: NodeFilter.FILTER_SKIP
			}
		})
	for (; l.nextNode(); ) r.push(l.currentNode)
	return r
}
function og(n, r) {
	for (const l of n) if (!Kw(l, { upTo: r })) return l
}
function Kw(n, { upTo: r }) {
	if (getComputedStyle(n).visibility === 'hidden') return !0
	for (; n; ) {
		if (r !== void 0 && n === r) return !1
		if (getComputedStyle(n).display === 'none') return !0
		n = n.parentElement
	}
	return !1
}
function Xw(n) {
	return n instanceof HTMLInputElement && 'select' in n
}
function fa(n, { select: r = !1 } = {}) {
	if (n && n.focus) {
		const l = document.activeElement
		;(n.focus({ preventScroll: !0 }), n !== l && Xw(n) && r && n.select())
	}
}
var ug = Zw()
function Zw() {
	let n = []
	return {
		add(r) {
			const l = n[0]
			;(r !== l && (l == null || l.pause()), (n = sg(n, r)), n.unshift(r))
		},
		remove(r) {
			var l
			;((n = sg(n, r)), (l = n[0]) == null || l.resume())
		}
	}
}
function sg(n, r) {
	const l = [...n],
		i = l.indexOf(r)
	return (i !== -1 && l.splice(i, 1), l)
}
function Jw(n) {
	return n.filter((r) => r.tagName !== 'A')
}
var Ww = xo[' useId '.trim().toString()] || (() => {}),
	eC = 0
function pr(n) {
	const [r, l] = m.useState(Ww())
	return (
		Ct(() => {
			l((i) => i ?? String(eC++))
		}, [n]),
		r ? `radix-${r}` : ''
	)
}
var tC = typeof document < 'u',
	nC = function () {},
	is = tC ? m.useLayoutEffect : nC
function ds(n, r) {
	if (n === r) return !0
	if (typeof n != typeof r) return !1
	if (typeof n == 'function' && n.toString() === r.toString()) return !0
	let l, i, u
	if (n && r && typeof n == 'object') {
		if (Array.isArray(n)) {
			if (((l = n.length), l !== r.length)) return !1
			for (i = l; i-- !== 0; ) if (!ds(n[i], r[i])) return !1
			return !0
		}
		if (((u = Object.keys(n)), (l = u.length), l !== Object.keys(r).length))
			return !1
		for (i = l; i-- !== 0; ) if (!{}.hasOwnProperty.call(r, u[i])) return !1
		for (i = l; i-- !== 0; ) {
			const c = u[i]
			if (!(c === '_owner' && n.$$typeof) && !ds(n[c], r[c])) return !1
		}
		return !0
	}
	return n !== n && r !== r
}
function Bb(n) {
	return typeof window > 'u'
		? 1
		: (n.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function cg(n, r) {
	const l = Bb(n)
	return Math.round(r * l) / l
}
function hd(n) {
	const r = m.useRef(n)
	return (
		is(() => {
			r.current = n
		}),
		r
	)
}
function rC(n) {
	n === void 0 && (n = {})
	const {
			placement: r = 'bottom',
			strategy: l = 'absolute',
			middleware: i = [],
			platform: u,
			elements: { reference: c, floating: d } = {},
			transform: h = !0,
			whileElementsMounted: p,
			open: v
		} = n,
		[y, b] = m.useState({
			x: 0,
			y: 0,
			strategy: l,
			placement: r,
			middlewareData: {},
			isPositioned: !1
		}),
		[R, A] = m.useState(i)
	ds(R, i) || A(i)
	const [M, _] = m.useState(null),
		[S, x] = m.useState(null),
		C = m.useCallback((ae) => {
			ae !== Q.current && ((Q.current = ae), _(ae))
		}, []),
		T = m.useCallback((ae) => {
			ae !== te.current && ((te.current = ae), x(ae))
		}, []),
		j = c || M,
		L = d || S,
		Q = m.useRef(null),
		te = m.useRef(null),
		fe = m.useRef(y),
		_e = p != null,
		be = hd(p),
		de = hd(u),
		I = hd(v),
		X = m.useCallback(() => {
			if (!Q.current || !te.current) return
			const ae = { placement: r, strategy: l, middleware: R }
			;(de.current && (ae.platform = de.current),
				M1(Q.current, te.current, ae).then((ee) => {
					const O = { ...ee, isPositioned: I.current !== !1 }
					ne.current &&
						!ds(fe.current, O) &&
						((fe.current = O),
						Xl.flushSync(() => {
							b(O)
						}))
				}))
		}, [R, r, l, de, I])
	is(() => {
		v === !1 &&
			fe.current.isPositioned &&
			((fe.current.isPositioned = !1), b((ae) => ({ ...ae, isPositioned: !1 })))
	}, [v])
	const ne = m.useRef(!1)
	;(is(
		() => (
			(ne.current = !0),
			() => {
				ne.current = !1
			}
		),
		[]
	),
		is(() => {
			if ((j && (Q.current = j), L && (te.current = L), j && L)) {
				if (be.current) return be.current(j, L, X)
				X()
			}
		}, [j, L, X, be, _e]))
	const se = m.useMemo(
			() => ({ reference: Q, floating: te, setReference: C, setFloating: T }),
			[C, T]
		),
		G = m.useMemo(() => ({ reference: j, floating: L }), [j, L]),
		re = m.useMemo(() => {
			const ae = { position: l, left: 0, top: 0 }
			if (!G.floating) return ae
			const ee = cg(G.floating, y.x),
				O = cg(G.floating, y.y)
			return h
				? {
						...ae,
						transform: 'translate(' + ee + 'px, ' + O + 'px)',
						...(Bb(G.floating) >= 1.5 && { willChange: 'transform' })
					}
				: { position: l, left: ee, top: O }
		}, [l, h, G.floating, y.x, y.y])
	return m.useMemo(
		() => ({ ...y, update: X, refs: se, elements: G, floatingStyles: re }),
		[y, X, se, G, re]
	)
}
const aC = (n) => {
		function r(l) {
			return {}.hasOwnProperty.call(l, 'current')
		}
		return {
			name: 'arrow',
			options: n,
			fn(l) {
				const { element: i, padding: u } = typeof n == 'function' ? n(l) : n
				return i && r(i)
					? i.current != null
						? Ey({ element: i.current, padding: u }).fn(l)
						: {}
					: i
						? Ey({ element: i, padding: u }).fn(l)
						: {}
			}
		}
	},
	lC = (n, r) => {
		const l = D1(n)
		return { name: l.name, fn: l.fn, options: [n, r] }
	},
	iC = (n, r) => {
		const l = N1(n)
		return { name: l.name, fn: l.fn, options: [n, r] }
	},
	oC = (n, r) => ({ fn: z1(n).fn, options: [n, r] }),
	uC = (n, r) => {
		const l = j1(n)
		return { name: l.name, fn: l.fn, options: [n, r] }
	},
	sC = (n, r) => {
		const l = L1(n)
		return { name: l.name, fn: l.fn, options: [n, r] }
	},
	cC = (n, r) => {
		const l = U1(n)
		return { name: l.name, fn: l.fn, options: [n, r] }
	},
	fC = (n, r) => {
		const l = aC(n)
		return { name: l.name, fn: l.fn, options: [n, r] }
	}
var dC = 'Arrow',
	Pb = m.forwardRef((n, r) => {
		const { children: l, width: i = 10, height: u = 5, ...c } = n
		return z.jsx(Ne.svg, {
			...c,
			ref: r,
			width: i,
			height: u,
			viewBox: '0 0 30 10',
			preserveAspectRatio: 'none',
			children: n.asChild ? l : z.jsx('polygon', { points: '0,0 30,0 15,10' })
		})
	})
Pb.displayName = dC
var hC = Pb
function Vb(n) {
	const [r, l] = m.useState(void 0)
	return (
		Ct(() => {
			if (n) {
				l({ width: n.offsetWidth, height: n.offsetHeight })
				const i = new ResizeObserver((u) => {
					if (!Array.isArray(u) || !u.length) return
					const c = u[0]
					let d, h
					if ('borderBoxSize' in c) {
						const p = c.borderBoxSize,
							v = Array.isArray(p) ? p[0] : p
						;((d = v.inlineSize), (h = v.blockSize))
					} else ((d = n.offsetWidth), (h = n.offsetHeight))
					l({ width: d, height: h })
				})
				return (i.observe(n, { box: 'border-box' }), () => i.unobserve(n))
			} else l(void 0)
		}, [n]),
		r
	)
}
var bh = 'Popper',
	[kb, ei] = tr(bh),
	[pC, Hb] = kb(bh),
	qb = (n) => {
		const { __scopePopper: r, children: l } = n,
			[i, u] = m.useState(null),
			[c, d] = m.useState(void 0)
		return z.jsx(pC, {
			scope: r,
			anchor: i,
			onAnchorChange: u,
			placementState: c,
			setPlacementState: d,
			children: l
		})
	}
qb.displayName = bh
var Gb = 'PopperAnchor',
	Fb = m.forwardRef((n, r) => {
		const { __scopePopper: l, virtualRef: i, ...u } = n,
			c = Hb(Gb, l),
			d = m.useRef(null),
			h = c.onAnchorChange,
			p = m.useCallback(
				(M) => {
					;((d.current = M), M && h(M))
				},
				[h]
			),
			v = $e(r, p),
			y = m.useRef(null)
		m.useEffect(() => {
			if (!i) return
			const M = y.current
			;((y.current = i.current), M !== y.current && h(y.current))
		})
		const b = c.placementState && _h(c.placementState),
			R = b == null ? void 0 : b[0],
			A = b == null ? void 0 : b[1]
		return i
			? null
			: z.jsx(Ne.div, {
					'data-radix-popper-side': R,
					'data-radix-popper-align': A,
					...u,
					ref: v
				})
	})
Fb.displayName = Gb
var Sh = 'PopperContent',
	[mC, vC] = kb(Sh),
	$b = m.forwardRef((n, r) => {
		var Ae, je, Be, Le, Pe, ht
		const {
				__scopePopper: l,
				side: i = 'bottom',
				sideOffset: u = 0,
				align: c = 'center',
				alignOffset: d = 0,
				arrowPadding: h = 0,
				avoidCollisions: p = !0,
				collisionBoundary: v = [],
				collisionPadding: y = 0,
				sticky: b = 'partial',
				hideWhenDetached: R = !1,
				updatePositionStrategy: A = 'optimized',
				onPlaced: M,
				..._
			} = n,
			S = Hb(Sh, l),
			[x, C] = m.useState(null),
			T = $e(r, C),
			[j, L] = m.useState(null),
			Q = Vb(j),
			te = (Q == null ? void 0 : Q.width) ?? 0,
			fe = (Q == null ? void 0 : Q.height) ?? 0,
			_e = i + (c !== 'center' ? '-' + c : ''),
			be =
				typeof y == 'number'
					? y
					: { top: 0, right: 0, bottom: 0, left: 0, ...y },
			de = Array.isArray(v) ? v : [v],
			I = de.length > 0,
			X = { padding: be, boundary: de.filter(gC), altBoundary: I },
			{
				refs: ne,
				floatingStyles: se,
				placement: G,
				isPositioned: re,
				middlewareData: ae
			} = rC({
				strategy: 'fixed',
				placement: _e,
				whileElementsMounted: (...pt) =>
					B1(...pt, { animationFrame: A === 'always' }),
				elements: { reference: S.anchor },
				middleware: [
					lC({ mainAxis: u + fe, alignmentAxis: d }),
					p &&
						iC({
							mainAxis: !0,
							crossAxis: !1,
							limiter: b === 'partial' ? oC() : void 0,
							...X
						}),
					p && uC({ ...X }),
					sC({
						...X,
						apply: ({
							elements: pt,
							rects: Bt,
							availableWidth: Nt,
							availableHeight: ct
						}) => {
							const { width: rr, height: Ye } = Bt.reference,
								Qe = pt.floating.style
							;(Qe.setProperty('--radix-popper-available-width', `${Nt}px`),
								Qe.setProperty('--radix-popper-available-height', `${ct}px`),
								Qe.setProperty('--radix-popper-anchor-width', `${rr}px`),
								Qe.setProperty('--radix-popper-anchor-height', `${Ye}px`))
						}
					}),
					j && fC({ element: j, padding: h }),
					bC({ arrowWidth: te, arrowHeight: fe }),
					R &&
						cC({
							strategy: 'referenceHidden',
							...X,
							boundary: I ? X.boundary : void 0
						})
				]
			}),
			ee = S.setPlacementState
		Ct(
			() => (
				ee(G),
				() => {
					ee(void 0)
				}
			),
			[G, ee]
		)
		const [O, Y] = _h(G),
			ie = Hn(M)
		Ct(() => {
			re && (ie == null || ie())
		}, [re, ie])
		const le = (Ae = ae.arrow) == null ? void 0 : Ae.x,
			pe = (je = ae.arrow) == null ? void 0 : je.y,
			we = ((Be = ae.arrow) == null ? void 0 : Be.centerOffset) !== 0,
			[ge, ye] = m.useState()
		return (
			Ct(() => {
				x && ye(window.getComputedStyle(x).zIndex)
			}, [x]),
			z.jsx('div', {
				ref: ne.setFloating,
				'data-radix-popper-content-wrapper': '',
				style: {
					...se,
					transform: re ? se.transform : 'translate(0, -200%)',
					minWidth: 'max-content',
					zIndex: ge,
					'--radix-popper-transform-origin': [
						(Le = ae.transformOrigin) == null ? void 0 : Le.x,
						(Pe = ae.transformOrigin) == null ? void 0 : Pe.y
					].join(' '),
					...(((ht = ae.hide) == null ? void 0 : ht.referenceHidden) && {
						visibility: 'hidden',
						pointerEvents: 'none'
					})
				},
				dir: n.dir,
				children: z.jsx(mC, {
					scope: l,
					placedSide: O,
					placedAlign: Y,
					onArrowChange: L,
					arrowX: le,
					arrowY: pe,
					shouldHideArrow: we,
					children: z.jsx(Ne.div, {
						'data-side': O,
						'data-align': Y,
						..._,
						ref: T,
						style: { ..._.style, animation: re ? void 0 : 'none' }
					})
				})
			})
		)
	})
$b.displayName = Sh
var Ib = 'PopperArrow',
	yC = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' },
	Yb = m.forwardRef(function (r, l) {
		const { __scopePopper: i, ...u } = r,
			c = vC(Ib, i),
			d = yC[c.placedSide]
		return z.jsx('span', {
			ref: c.onArrowChange,
			style: {
				position: 'absolute',
				left: c.arrowX,
				top: c.arrowY,
				[d]: 0,
				transformOrigin: {
					top: '',
					right: '0 0',
					bottom: 'center 0',
					left: '100% 0'
				}[c.placedSide],
				transform: {
					top: 'translateY(100%)',
					right: 'translateY(50%) rotate(90deg) translateX(-50%)',
					bottom: 'rotate(180deg)',
					left: 'translateY(50%) rotate(-90deg) translateX(50%)'
				}[c.placedSide],
				visibility: c.shouldHideArrow ? 'hidden' : void 0
			},
			children: z.jsx(hC, {
				...u,
				ref: l,
				style: { ...u.style, display: 'block' }
			})
		})
	})
Yb.displayName = Ib
function gC(n) {
	return n !== null
}
var bC = (n) => ({
	name: 'transformOrigin',
	options: n,
	fn(r) {
		var S, x, C
		const { placement: l, rects: i, middlewareData: u } = r,
			d = ((S = u.arrow) == null ? void 0 : S.centerOffset) !== 0,
			h = d ? 0 : n.arrowWidth,
			p = d ? 0 : n.arrowHeight,
			[v, y] = _h(l),
			b = { start: '0%', center: '50%', end: '100%' }[y],
			R = (((x = u.arrow) == null ? void 0 : x.x) ?? 0) + h / 2,
			A = (((C = u.arrow) == null ? void 0 : C.y) ?? 0) + p / 2
		let M = '',
			_ = ''
		return (
			v === 'bottom'
				? ((M = d ? b : `${R}px`), (_ = `${-p}px`))
				: v === 'top'
					? ((M = d ? b : `${R}px`), (_ = `${i.floating.height + p}px`))
					: v === 'right'
						? ((M = `${-p}px`), (_ = d ? b : `${A}px`))
						: v === 'left' &&
							((M = `${i.floating.width + p}px`), (_ = d ? b : `${A}px`)),
			{ data: { x: M, y: _ } }
		)
	}
})
function _h(n) {
	const [r, l = 'center'] = n.split('-')
	return [r, l]
}
var Qb = qb,
	Eh = Fb,
	Rh = $b,
	xh = Yb,
	SC = 'Portal',
	Ds = m.forwardRef((n, r) => {
		var h
		const { container: l, ...i } = n,
			[u, c] = m.useState(!1)
		Ct(() => c(!0), [])
		const d =
			l ||
			(u &&
				((h = globalThis == null ? void 0 : globalThis.document) == null
					? void 0
					: h.body))
		return d ? Xl.createPortal(z.jsx(Ne.div, { ...i, ref: r }), d) : null
	})
Ds.displayName = SC
function _C(n, r) {
	return m.useReducer((l, i) => r[l][i] ?? l, n)
}
var Gn = (n) => {
	const { present: r, children: l } = n,
		i = EC(r),
		u =
			typeof l == 'function' ? l({ present: i.isPresent }) : m.Children.only(l),
		c = RC(i.ref, xC(u))
	return typeof l == 'function' || i.isPresent
		? m.cloneElement(u, { ref: c })
		: null
}
Gn.displayName = 'Presence'
function EC(n) {
	const [r, l] = m.useState(),
		i = m.useRef(null),
		u = m.useRef(n),
		c = m.useRef('none'),
		d = n ? 'mounted' : 'unmounted',
		[h, p] = _C(d, {
			mounted: { UNMOUNT: 'unmounted', ANIMATION_OUT: 'unmountSuspended' },
			unmountSuspended: { MOUNT: 'mounted', ANIMATION_END: 'unmounted' },
			unmounted: { MOUNT: 'mounted' }
		})
	return (
		m.useEffect(() => {
			const v = es(i.current)
			c.current = h === 'mounted' ? v : 'none'
		}, [h]),
		Ct(() => {
			const v = i.current,
				y = u.current
			if (y !== n) {
				const R = c.current,
					A = es(v)
				;(n
					? p('MOUNT')
					: A === 'none' || (v == null ? void 0 : v.display) === 'none'
						? p('UNMOUNT')
						: p(y && R !== A ? 'ANIMATION_OUT' : 'UNMOUNT'),
					(u.current = n))
			}
		}, [n, p]),
		Ct(() => {
			if (r) {
				let v
				const y = r.ownerDocument.defaultView ?? window,
					b = (A) => {
						const _ = es(i.current).includes(CSS.escape(A.animationName))
						if (A.target === r && _ && (p('ANIMATION_END'), !u.current)) {
							const S = r.style.animationFillMode
							;((r.style.animationFillMode = 'forwards'),
								(v = y.setTimeout(() => {
									r.style.animationFillMode === 'forwards' &&
										(r.style.animationFillMode = S)
								})))
						}
					},
					R = (A) => {
						A.target === r && (c.current = es(i.current))
					}
				return (
					r.addEventListener('animationstart', R),
					r.addEventListener('animationcancel', b),
					r.addEventListener('animationend', b),
					() => {
						;(y.clearTimeout(v),
							r.removeEventListener('animationstart', R),
							r.removeEventListener('animationcancel', b),
							r.removeEventListener('animationend', b))
					}
				)
			} else p('ANIMATION_END')
		}, [r, p]),
		{
			isPresent: ['mounted', 'unmountSuspended'].includes(h),
			ref: m.useCallback((v) => {
				;((i.current = v ? getComputedStyle(v) : null), l(v))
			}, [])
		}
	)
}
function fg(n, r) {
	if (typeof n == 'function') return n(r)
	n != null && (n.current = r)
}
function RC(...n) {
	const r = m.useRef(n)
	return (
		(r.current = n),
		m.useCallback((l) => {
			const i = r.current
			let u = !1
			const c = i.map((d) => {
				const h = fg(d, l)
				return (!u && typeof h == 'function' && (u = !0), h)
			})
			if (u)
				return () => {
					for (let d = 0; d < c.length; d++) {
						const h = c[d]
						typeof h == 'function' ? h() : fg(i[d], null)
					}
				}
		}, [])
	)
}
function es(n) {
	return (n == null ? void 0 : n.animationName) || 'none'
}
function xC(n) {
	var i, u
	let r =
			(i = Object.getOwnPropertyDescriptor(n.props, 'ref')) == null
				? void 0
				: i.get,
		l = r && 'isReactWarning' in r && r.isReactWarning
	return l
		? n.ref
		: ((r =
				(u = Object.getOwnPropertyDescriptor(n, 'ref')) == null
					? void 0
					: u.get),
			(l = r && 'isReactWarning' in r && r.isReactWarning),
			l ? n.props.ref : n.props.ref || n.ref)
}
var pd = 'rovingFocusGroup.onEntryFocus',
	AC = { bubbles: !1, cancelable: !0 },
	To = 'RovingFocusGroup',
	[Md, Kb, wC] = mh(To),
	[CC, Xb] = tr(To, [wC]),
	[TC, OC] = CC(To),
	Zb = m.forwardRef((n, r) =>
		z.jsx(Md.Provider, {
			scope: n.__scopeRovingFocusGroup,
			children: z.jsx(Md.Slot, {
				scope: n.__scopeRovingFocusGroup,
				children: z.jsx(MC, { ...n, ref: r })
			})
		})
	)
Zb.displayName = To
var MC = m.forwardRef((n, r) => {
		const {
				__scopeRovingFocusGroup: l,
				orientation: i,
				loop: u = !1,
				dir: c,
				currentTabStopId: d,
				defaultCurrentTabStopId: h,
				onCurrentTabStopIdChange: p,
				onEntryFocus: v,
				preventScrollOnEntryFocus: y = !1,
				...b
			} = n,
			R = m.useRef(null),
			A = $e(r, R),
			M = vh(c),
			[_, S] = Fa({ prop: d, defaultProp: h ?? null, onChange: p, caller: To }),
			[x, C] = m.useState(!1),
			T = Hn(v),
			j = Kb(l),
			L = m.useRef(!1),
			[Q, te] = m.useState(0)
		return (
			m.useEffect(() => {
				const fe = R.current
				if (fe)
					return (
						fe.addEventListener(pd, T),
						() => fe.removeEventListener(pd, T)
					)
			}, [T]),
			z.jsx(TC, {
				scope: l,
				orientation: i,
				dir: M,
				loop: u,
				currentTabStopId: _,
				onItemFocus: m.useCallback((fe) => S(fe), [S]),
				onItemShiftTab: m.useCallback(() => C(!0), []),
				onFocusableItemAdd: m.useCallback(() => te((fe) => fe + 1), []),
				onFocusableItemRemove: m.useCallback(() => te((fe) => fe - 1), []),
				children: z.jsx(Ne.div, {
					tabIndex: x || Q === 0 ? -1 : 0,
					'data-orientation': i,
					...b,
					ref: A,
					style: { outline: 'none', ...n.style },
					onMouseDown: Ee(n.onMouseDown, () => {
						L.current = !0
					}),
					onFocus: Ee(n.onFocus, (fe) => {
						const _e = !L.current
						if (fe.target === fe.currentTarget && _e && !x) {
							const be = new CustomEvent(pd, AC)
							if ((fe.currentTarget.dispatchEvent(be), !be.defaultPrevented)) {
								const de = j().filter((G) => G.focusable),
									I = de.find((G) => G.active),
									X = de.find((G) => G.id === _),
									se = [I, X, ...de].filter(Boolean).map((G) => G.ref.current)
								e0(se, y)
							}
						}
						L.current = !1
					}),
					onBlur: Ee(n.onBlur, () => C(!1))
				})
			})
		)
	}),
	Jb = 'RovingFocusGroupItem',
	Wb = m.forwardRef((n, r) => {
		const {
				__scopeRovingFocusGroup: l,
				focusable: i = !0,
				active: u = !1,
				tabStopId: c,
				children: d,
				...h
			} = n,
			p = pr(),
			v = c || p,
			y = OC(Jb, l),
			b = y.currentTabStopId === v,
			R = Kb(l),
			{
				onFocusableItemAdd: A,
				onFocusableItemRemove: M,
				currentTabStopId: _
			} = y
		return (
			m.useEffect(() => {
				if (i) return (A(), () => M())
			}, [i, A, M]),
			z.jsx(Md.ItemSlot, {
				scope: l,
				id: v,
				focusable: i,
				active: u,
				children: z.jsx(Ne.span, {
					tabIndex: b ? 0 : -1,
					'data-orientation': y.orientation,
					...h,
					ref: r,
					onMouseDown: Ee(n.onMouseDown, (S) => {
						i ? y.onItemFocus(v) : S.preventDefault()
					}),
					onFocus: Ee(n.onFocus, () => y.onItemFocus(v)),
					onKeyDown: Ee(n.onKeyDown, (S) => {
						if (S.key === 'Tab' && S.shiftKey) {
							y.onItemShiftTab()
							return
						}
						if (S.target !== S.currentTarget) return
						const x = jC(S, y.orientation, y.dir)
						if (x !== void 0) {
							if (S.metaKey || S.ctrlKey || S.altKey || S.shiftKey) return
							S.preventDefault()
							let T = R()
								.filter((j) => j.focusable)
								.map((j) => j.ref.current)
							if (x === 'last') T.reverse()
							else if (x === 'prev' || x === 'next') {
								x === 'prev' && T.reverse()
								const j = T.indexOf(S.currentTarget)
								T = y.loop ? LC(T, j + 1) : T.slice(j + 1)
							}
							setTimeout(() => e0(T))
						}
					}),
					children:
						typeof d == 'function'
							? d({ isCurrentTabStop: b, hasTabStop: _ != null })
							: d
				})
			})
		)
	})
Wb.displayName = Jb
var DC = {
	ArrowLeft: 'prev',
	ArrowUp: 'prev',
	ArrowRight: 'next',
	ArrowDown: 'next',
	PageUp: 'first',
	Home: 'first',
	PageDown: 'last',
	End: 'last'
}
function NC(n, r) {
	return r !== 'rtl'
		? n
		: n === 'ArrowLeft'
			? 'ArrowRight'
			: n === 'ArrowRight'
				? 'ArrowLeft'
				: n
}
function jC(n, r, l) {
	const i = NC(n.key, l)
	if (
		!(r === 'vertical' && ['ArrowLeft', 'ArrowRight'].includes(i)) &&
		!(r === 'horizontal' && ['ArrowUp', 'ArrowDown'].includes(i))
	)
		return DC[i]
}
function e0(n, r = !1) {
	const l = document.activeElement
	for (const i of n)
		if (
			i === l ||
			(i.focus({ preventScroll: r }), document.activeElement !== l)
		)
			return
}
function LC(n, r) {
	return n.map((l, i) => n[(r + i) % n.length])
}
var UC = Zb,
	zC = Wb,
	os = 'right-scroll-bar-position',
	us = 'width-before-scroll-bar',
	BC = 'with-scroll-bars-hidden',
	PC = '--removed-body-scroll-bar-size',
	t0 = P1(),
	md = function () {},
	Ns = m.forwardRef(function (n, r) {
		var l = m.useRef(null),
			i = m.useState({
				onScrollCapture: md,
				onWheelCapture: md,
				onTouchMoveCapture: md
			}),
			u = i[0],
			c = i[1],
			d = n.forwardProps,
			h = n.children,
			p = n.className,
			v = n.removeScrollBar,
			y = n.enabled,
			b = n.shards,
			R = n.sideCar,
			A = n.noRelative,
			M = n.noIsolation,
			_ = n.inert,
			S = n.allowPinchZoom,
			x = n.as,
			C = x === void 0 ? 'div' : x,
			T = n.gapMode,
			j = V1(n, [
				'forwardProps',
				'children',
				'className',
				'removeScrollBar',
				'enabled',
				'shards',
				'sideCar',
				'noRelative',
				'noIsolation',
				'inert',
				'allowPinchZoom',
				'as',
				'gapMode'
			]),
			L = R,
			Q = k1([l, r]),
			te = Gl(Gl({}, j), u)
		return m.createElement(
			m.Fragment,
			null,
			y &&
				m.createElement(L, {
					sideCar: t0,
					removeScrollBar: v,
					shards: b,
					noRelative: A,
					noIsolation: M,
					inert: _,
					setCallbacks: c,
					allowPinchZoom: !!S,
					lockRef: l,
					gapMode: T
				}),
			d
				? m.cloneElement(m.Children.only(h), Gl(Gl({}, te), { ref: Q }))
				: m.createElement(C, Gl({}, te, { className: p, ref: Q }), h)
		)
	})
Ns.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }
Ns.classNames = { fullWidth: us, zeroRight: os }
function VC() {
	if (!document) return null
	var n = document.createElement('style')
	n.type = 'text/css'
	var r = H1()
	return (r && n.setAttribute('nonce', r), n)
}
function kC(n, r) {
	n.styleSheet
		? (n.styleSheet.cssText = r)
		: n.appendChild(document.createTextNode(r))
}
function HC(n) {
	var r = document.head || document.getElementsByTagName('head')[0]
	r.appendChild(n)
}
var qC = function () {
		var n = 0,
			r = null
		return {
			add: function (l) {
				;(n == 0 && (r = VC()) && (kC(r, l), HC(r)), n++)
			},
			remove: function () {
				;(n--,
					!n && r && (r.parentNode && r.parentNode.removeChild(r), (r = null)))
			}
		}
	},
	GC = function () {
		var n = qC()
		return function (r, l) {
			m.useEffect(
				function () {
					return (
						n.add(r),
						function () {
							n.remove()
						}
					)
				},
				[r && l]
			)
		}
	},
	n0 = function () {
		var n = GC(),
			r = function (l) {
				var i = l.styles,
					u = l.dynamic
				return (n(i, u), null)
			}
		return r
	},
	FC = { left: 0, top: 0, right: 0, gap: 0 },
	vd = function (n) {
		return parseInt(n || '', 10) || 0
	},
	$C = function (n) {
		var r = window.getComputedStyle(document.body),
			l = r[n === 'padding' ? 'paddingLeft' : 'marginLeft'],
			i = r[n === 'padding' ? 'paddingTop' : 'marginTop'],
			u = r[n === 'padding' ? 'paddingRight' : 'marginRight']
		return [vd(l), vd(i), vd(u)]
	},
	IC = function (n) {
		if ((n === void 0 && (n = 'margin'), typeof window > 'u')) return FC
		var r = $C(n),
			l = document.documentElement.clientWidth,
			i = window.innerWidth
		return {
			left: r[0],
			top: r[1],
			right: r[2],
			gap: Math.max(0, i - l + r[2] - r[0])
		}
	},
	YC = n0(),
	Fl = 'data-scroll-locked',
	QC = function (n, r, l, i) {
		var u = n.left,
			c = n.top,
			d = n.right,
			h = n.gap
		return (
			l === void 0 && (l = 'margin'),
			`
  .`
				.concat(
					BC,
					` {
   overflow: hidden `
				)
				.concat(
					i,
					`;
   padding-right: `
				)
				.concat(h, 'px ')
				.concat(
					i,
					`;
  }
  body[`
				)
				.concat(
					Fl,
					`] {
    overflow: hidden `
				)
				.concat(
					i,
					`;
    overscroll-behavior: contain;
    `
				)
				.concat(
					[
						r && 'position: relative '.concat(i, ';'),
						l === 'margin' &&
							`
    padding-left: `
								.concat(
									u,
									`px;
    padding-top: `
								)
								.concat(
									c,
									`px;
    padding-right: `
								)
								.concat(
									d,
									`px;
    margin-left:0;
    margin-top:0;
    margin-right: `
								)
								.concat(h, 'px ')
								.concat(
									i,
									`;
    `
								),
						l === 'padding' && 'padding-right: '.concat(h, 'px ').concat(i, ';')
					]
						.filter(Boolean)
						.join(''),
					`
  }
  
  .`
				)
				.concat(
					os,
					` {
    right: `
				)
				.concat(h, 'px ')
				.concat(
					i,
					`;
  }
  
  .`
				)
				.concat(
					us,
					` {
    margin-right: `
				)
				.concat(h, 'px ')
				.concat(
					i,
					`;
  }
  
  .`
				)
				.concat(os, ' .')
				.concat(
					os,
					` {
    right: 0 `
				)
				.concat(
					i,
					`;
  }
  
  .`
				)
				.concat(us, ' .')
				.concat(
					us,
					` {
    margin-right: 0 `
				)
				.concat(
					i,
					`;
  }
  
  body[`
				)
				.concat(
					Fl,
					`] {
    `
				)
				.concat(PC, ': ')
				.concat(
					h,
					`px;
  }
`
				)
		)
	},
	dg = function () {
		var n = parseInt(document.body.getAttribute(Fl) || '0', 10)
		return isFinite(n) ? n : 0
	},
	KC = function () {
		m.useEffect(function () {
			return (
				document.body.setAttribute(Fl, (dg() + 1).toString()),
				function () {
					var n = dg() - 1
					n <= 0
						? document.body.removeAttribute(Fl)
						: document.body.setAttribute(Fl, n.toString())
				}
			)
		}, [])
	},
	XC = function (n) {
		var r = n.noRelative,
			l = n.noImportant,
			i = n.gapMode,
			u = i === void 0 ? 'margin' : i
		KC()
		var c = m.useMemo(
			function () {
				return IC(u)
			},
			[u]
		)
		return m.createElement(YC, { styles: QC(c, !r, u, l ? '' : '!important') })
	},
	Dd = !1
if (typeof window < 'u')
	try {
		var ts = Object.defineProperty({}, 'passive', {
			get: function () {
				return ((Dd = !0), !0)
			}
		})
		;(window.addEventListener('test', ts, ts),
			window.removeEventListener('test', ts, ts))
	} catch {
		Dd = !1
	}
var kl = Dd ? { passive: !1 } : !1,
	ZC = function (n) {
		return n.tagName === 'TEXTAREA'
	},
	r0 = function (n, r) {
		if (!(n instanceof Element)) return !1
		var l = window.getComputedStyle(n)
		return (
			l[r] !== 'hidden' &&
			!(l.overflowY === l.overflowX && !ZC(n) && l[r] === 'visible')
		)
	},
	JC = function (n) {
		return r0(n, 'overflowY')
	},
	WC = function (n) {
		return r0(n, 'overflowX')
	},
	hg = function (n, r) {
		var l = r.ownerDocument,
			i = r
		do {
			typeof ShadowRoot < 'u' && i instanceof ShadowRoot && (i = i.host)
			var u = a0(n, i)
			if (u) {
				var c = l0(n, i),
					d = c[1],
					h = c[2]
				if (d > h) return !0
			}
			i = i.parentNode
		} while (i && i !== l.body)
		return !1
	},
	eT = function (n) {
		var r = n.scrollTop,
			l = n.scrollHeight,
			i = n.clientHeight
		return [r, l, i]
	},
	tT = function (n) {
		var r = n.scrollLeft,
			l = n.scrollWidth,
			i = n.clientWidth
		return [r, l, i]
	},
	a0 = function (n, r) {
		return n === 'v' ? JC(r) : WC(r)
	},
	l0 = function (n, r) {
		return n === 'v' ? eT(r) : tT(r)
	},
	nT = function (n, r) {
		return n === 'h' && r === 'rtl' ? -1 : 1
	},
	rT = function (n, r, l, i, u) {
		var c = nT(n, window.getComputedStyle(r).direction),
			d = c * i,
			h = l.target,
			p = r.contains(h),
			v = !1,
			y = d > 0,
			b = 0,
			R = 0
		do {
			if (!h) break
			var A = l0(n, h),
				M = A[0],
				_ = A[1],
				S = A[2],
				x = _ - S - c * M
			;(M || x) && a0(n, h) && ((b += x), (R += M))
			var C = h.parentNode
			h = C && C.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? C.host : C
		} while ((!p && h !== document.body) || (p && (r.contains(h) || r === h)))
		return (((y && Math.abs(b) < 1) || (!y && Math.abs(R) < 1)) && (v = !0), v)
	},
	ns = function (n) {
		return 'changedTouches' in n
			? [n.changedTouches[0].clientX, n.changedTouches[0].clientY]
			: [0, 0]
	},
	pg = function (n) {
		return [n.deltaX, n.deltaY]
	},
	mg = function (n) {
		return n && 'current' in n ? n.current : n
	},
	aT = function (n, r) {
		return n[0] === r[0] && n[1] === r[1]
	},
	lT = function (n) {
		return `
  .block-interactivity-`
			.concat(
				n,
				` {pointer-events: none;}
  .allow-interactivity-`
			)
			.concat(
				n,
				` {pointer-events: all;}
`
			)
	},
	iT = 0,
	Hl = []
function oT(n) {
	var r = m.useRef([]),
		l = m.useRef([0, 0]),
		i = m.useRef(),
		u = m.useState(iT++)[0],
		c = m.useState(n0)[0],
		d = m.useRef(n)
	;(m.useEffect(
		function () {
			d.current = n
		},
		[n]
	),
		m.useEffect(
			function () {
				if (n.inert) {
					document.body.classList.add('block-interactivity-'.concat(u))
					var _ = q1([n.lockRef.current], (n.shards || []).map(mg), !0).filter(
						Boolean
					)
					return (
						_.forEach(function (S) {
							return S.classList.add('allow-interactivity-'.concat(u))
						}),
						function () {
							;(document.body.classList.remove(
								'block-interactivity-'.concat(u)
							),
								_.forEach(function (S) {
									return S.classList.remove('allow-interactivity-'.concat(u))
								}))
						}
					)
				}
			},
			[n.inert, n.lockRef.current, n.shards]
		))
	var h = m.useCallback(function (_, S) {
			if (
				('touches' in _ && _.touches.length === 2) ||
				(_.type === 'wheel' && _.ctrlKey)
			)
				return !d.current.allowPinchZoom
			var x = ns(_),
				C = l.current,
				T = 'deltaX' in _ ? _.deltaX : C[0] - x[0],
				j = 'deltaY' in _ ? _.deltaY : C[1] - x[1],
				L,
				Q = _.target,
				te = Math.abs(T) > Math.abs(j) ? 'h' : 'v'
			if ('touches' in _ && te === 'h' && Q.type === 'range') return !1
			var fe = window.getSelection(),
				_e = fe && fe.anchorNode,
				be = _e ? _e === Q || _e.contains(Q) : !1
			if (be) return !1
			var de = hg(te, Q)
			if (!de) return !0
			if (
				(de ? (L = te) : ((L = te === 'v' ? 'h' : 'v'), (de = hg(te, Q))), !de)
			)
				return !1
			if (
				(!i.current && 'changedTouches' in _ && (T || j) && (i.current = L), !L)
			)
				return !0
			var I = i.current || L
			return rT(I, S, _, I === 'h' ? T : j)
		}, []),
		p = m.useCallback(function (_) {
			var S = _
			if (!(!Hl.length || Hl[Hl.length - 1] !== c)) {
				var x = 'deltaY' in S ? pg(S) : ns(S),
					C = r.current.filter(function (L) {
						return (
							L.name === S.type &&
							(L.target === S.target || S.target === L.shadowParent) &&
							aT(L.delta, x)
						)
					})[0]
				if (C && C.should) {
					S.cancelable && S.preventDefault()
					return
				}
				if (!C) {
					var T = (d.current.shards || [])
							.map(mg)
							.filter(Boolean)
							.filter(function (L) {
								return L.contains(S.target)
							}),
						j = T.length > 0 ? h(S, T[0]) : !d.current.noIsolation
					j && S.cancelable && S.preventDefault()
				}
			}
		}, []),
		v = m.useCallback(function (_, S, x, C) {
			var T = { name: _, delta: S, target: x, should: C, shadowParent: uT(x) }
			;(r.current.push(T),
				setTimeout(function () {
					r.current = r.current.filter(function (j) {
						return j !== T
					})
				}, 1))
		}, []),
		y = m.useCallback(function (_) {
			;((l.current = ns(_)), (i.current = void 0))
		}, []),
		b = m.useCallback(function (_) {
			v(_.type, pg(_), _.target, h(_, n.lockRef.current))
		}, []),
		R = m.useCallback(function (_) {
			v(_.type, ns(_), _.target, h(_, n.lockRef.current))
		}, [])
	m.useEffect(function () {
		return (
			Hl.push(c),
			n.setCallbacks({
				onScrollCapture: b,
				onWheelCapture: b,
				onTouchMoveCapture: R
			}),
			document.addEventListener('wheel', p, kl),
			document.addEventListener('touchmove', p, kl),
			document.addEventListener('touchstart', y, kl),
			function () {
				;((Hl = Hl.filter(function (_) {
					return _ !== c
				})),
					document.removeEventListener('wheel', p, kl),
					document.removeEventListener('touchmove', p, kl),
					document.removeEventListener('touchstart', y, kl))
			}
		)
	}, [])
	var A = n.removeScrollBar,
		M = n.inert
	return m.createElement(
		m.Fragment,
		null,
		M ? m.createElement(c, { styles: lT(u) }) : null,
		A
			? m.createElement(XC, { noRelative: n.noRelative, gapMode: n.gapMode })
			: null
	)
}
function uT(n) {
	for (var r = null; n !== null; )
		(n instanceof ShadowRoot && ((r = n.host), (n = n.host)),
			(n = n.parentNode))
	return r
}
const sT = G1(t0, oT)
var js = m.forwardRef(function (n, r) {
	return m.createElement(Ns, Gl({}, n, { ref: r, sideCar: sT }))
})
js.classNames = Ns.classNames
var Nd = ['Enter', ' '],
	cT = ['ArrowDown', 'PageUp', 'Home'],
	i0 = ['ArrowUp', 'PageDown', 'End'],
	fT = [...cT, ...i0],
	dT = { ltr: [...Nd, 'ArrowRight'], rtl: [...Nd, 'ArrowLeft'] },
	hT = { ltr: ['ArrowLeft'], rtl: ['ArrowRight'] },
	Oo = 'Menu',
	[So, pT, mT] = mh(Oo),
	[Ia, o0] = tr(Oo, [mT, ei, Xb]),
	Ls = ei(),
	u0 = Xb(),
	[vT, Ya] = Ia(Oo),
	[yT, Mo] = Ia(Oo),
	s0 = (n) => {
		const {
				__scopeMenu: r,
				open: l = !1,
				children: i,
				dir: u,
				onOpenChange: c,
				modal: d = !0
			} = n,
			h = Ls(r),
			[p, v] = m.useState(null),
			y = m.useRef(!1),
			b = Hn(c),
			R = vh(u)
		return (
			m.useEffect(() => {
				const A = () => {
						;((y.current = !0),
							document.addEventListener('pointerdown', M, {
								capture: !0,
								once: !0
							}),
							document.addEventListener('pointermove', M, {
								capture: !0,
								once: !0
							}))
					},
					M = () => (y.current = !1)
				return (
					document.addEventListener('keydown', A, { capture: !0 }),
					() => {
						;(document.removeEventListener('keydown', A, { capture: !0 }),
							document.removeEventListener('pointerdown', M, { capture: !0 }),
							document.removeEventListener('pointermove', M, { capture: !0 }))
					}
				)
			}, []),
			m.useEffect(() => {
				if (!l) return
				const A = () => b(!1)
				return (
					window.addEventListener('blur', A),
					() => window.removeEventListener('blur', A)
				)
			}, [l, b]),
			z.jsx(Qb, {
				...h,
				children: z.jsx(vT, {
					scope: r,
					open: l,
					onOpenChange: b,
					content: p,
					onContentChange: v,
					children: z.jsx(yT, {
						scope: r,
						onClose: m.useCallback(() => b(!1), [b]),
						isUsingKeyboardRef: y,
						dir: R,
						modal: d,
						children: i
					})
				})
			})
		)
	}
s0.displayName = Oo
var gT = 'MenuAnchor',
	Ah = m.forwardRef((n, r) => {
		const { __scopeMenu: l, ...i } = n,
			u = Ls(l)
		return z.jsx(Eh, { ...u, ...i, ref: r })
	})
Ah.displayName = gT
var wh = 'MenuPortal',
	[bT, c0] = Ia(wh, { forceMount: void 0 }),
	f0 = (n) => {
		const { __scopeMenu: r, forceMount: l, children: i, container: u } = n,
			c = Ya(wh, r)
		return z.jsx(bT, {
			scope: r,
			forceMount: l,
			children: z.jsx(Gn, {
				present: l || c.open,
				children: z.jsx(Ds, { asChild: !0, container: u, children: i })
			})
		})
	}
f0.displayName = wh
var Pn = 'MenuContent',
	[ST, Ch] = Ia(Pn),
	d0 = m.forwardRef((n, r) => {
		const l = c0(Pn, n.__scopeMenu),
			{ forceMount: i = l.forceMount, ...u } = n,
			c = Ya(Pn, n.__scopeMenu),
			d = Mo(Pn, n.__scopeMenu)
		return z.jsx(So.Provider, {
			scope: n.__scopeMenu,
			children: z.jsx(Gn, {
				present: i || c.open,
				children: z.jsx(So.Slot, {
					scope: n.__scopeMenu,
					children: d.modal
						? z.jsx(_T, { ...u, ref: r })
						: z.jsx(ET, { ...u, ref: r })
				})
			})
		})
	}),
	_T = m.forwardRef((n, r) => {
		const l = Ya(Pn, n.__scopeMenu),
			i = m.useRef(null),
			u = $e(r, i)
		return (
			m.useEffect(() => {
				const c = i.current
				if (c) return nh(c)
			}, []),
			z.jsx(Th, {
				...n,
				ref: u,
				trapFocus: l.open,
				disableOutsidePointerEvents: l.open,
				disableOutsideScroll: !0,
				onFocusOutside: Ee(n.onFocusOutside, (c) => c.preventDefault(), {
					checkForDefaultPrevented: !1
				}),
				onDismiss: () => l.onOpenChange(!1)
			})
		)
	}),
	ET = m.forwardRef((n, r) => {
		const l = Ya(Pn, n.__scopeMenu)
		return z.jsx(Th, {
			...n,
			ref: r,
			trapFocus: !1,
			disableOutsidePointerEvents: !1,
			disableOutsideScroll: !1,
			onDismiss: () => l.onOpenChange(!1)
		})
	}),
	RT = Ga('MenuContent.ScrollLock'),
	Th = m.forwardRef((n, r) => {
		const {
				__scopeMenu: l,
				loop: i = !1,
				trapFocus: u,
				onOpenAutoFocus: c,
				onCloseAutoFocus: d,
				disableOutsidePointerEvents: h,
				onEntryFocus: p,
				onEscapeKeyDown: v,
				onPointerDownOutside: y,
				onFocusOutside: b,
				onInteractOutside: R,
				onDismiss: A,
				disableOutsideScroll: M,
				..._
			} = n,
			S = Ya(Pn, l),
			x = Mo(Pn, l),
			C = Ls(l),
			T = u0(l),
			j = pT(l),
			[L, Q] = m.useState(null),
			te = m.useRef(null),
			fe = $e(r, te, S.onContentChange),
			_e = m.useRef(0),
			be = m.useRef(''),
			de = m.useRef(0),
			I = m.useRef(null),
			X = m.useRef('right'),
			ne = m.useRef(0),
			se = M ? js : m.Fragment,
			G = M ? { as: RT, allowPinchZoom: !0 } : void 0,
			re = (ee) => {
				var ye, Ae
				const O = be.current + ee,
					Y = j().filter((je) => !je.disabled),
					ie = document.activeElement,
					le =
						(ye = Y.find((je) => je.ref.current === ie)) == null
							? void 0
							: ye.textValue,
					pe = Y.map((je) => je.textValue),
					we = UT(pe, O, le),
					ge =
						(Ae = Y.find((je) => je.textValue === we)) == null
							? void 0
							: Ae.ref.current
				;((function je(Be) {
					;((be.current = Be),
						window.clearTimeout(_e.current),
						Be !== '' && (_e.current = window.setTimeout(() => je(''), 1e3)))
				})(O),
					ge && setTimeout(() => ge.focus()))
			}
		;(m.useEffect(() => () => window.clearTimeout(_e.current), []), gh())
		const ae = m.useCallback((ee) => {
			var Y, ie
			return (
				X.current === ((Y = I.current) == null ? void 0 : Y.side) &&
				BT(ee, (ie = I.current) == null ? void 0 : ie.area)
			)
		}, [])
		return z.jsx(ST, {
			scope: l,
			searchRef: be,
			onItemEnter: m.useCallback(
				(ee) => {
					ae(ee) && ee.preventDefault()
				},
				[ae]
			),
			onItemLeave: m.useCallback(
				(ee) => {
					var O
					ae(ee) || ((O = te.current) == null || O.focus(), Q(null))
				},
				[ae]
			),
			onTriggerLeave: m.useCallback(
				(ee) => {
					ae(ee) && ee.preventDefault()
				},
				[ae]
			),
			pointerGraceTimerRef: de,
			onPointerGraceIntentChange: m.useCallback((ee) => {
				I.current = ee
			}, []),
			children: z.jsx(se, {
				...G,
				children: z.jsx(Ms, {
					asChild: !0,
					trapped: u,
					onMountAutoFocus: Ee(c, (ee) => {
						var O
						;(ee.preventDefault(),
							(O = te.current) == null || O.focus({ preventScroll: !0 }))
					}),
					onUnmountAutoFocus: d,
					children: z.jsx(Co, {
						asChild: !0,
						disableOutsidePointerEvents: h,
						onEscapeKeyDown: v,
						onPointerDownOutside: y,
						onFocusOutside: b,
						onInteractOutside: R,
						onDismiss: A,
						children: z.jsx(UC, {
							asChild: !0,
							...T,
							dir: x.dir,
							orientation: 'vertical',
							loop: i,
							currentTabStopId: L,
							onCurrentTabStopIdChange: Q,
							onEntryFocus: Ee(p, (ee) => {
								x.isUsingKeyboardRef.current || ee.preventDefault()
							}),
							preventScrollOnEntryFocus: !0,
							children: z.jsx(Rh, {
								role: 'menu',
								'aria-orientation': 'vertical',
								'data-state': T0(S.open),
								'data-radix-menu-content': '',
								dir: x.dir,
								...C,
								..._,
								ref: fe,
								style: { outline: 'none', ..._.style },
								onKeyDown: Ee(_.onKeyDown, (ee) => {
									const Y =
											ee.target.closest('[data-radix-menu-content]') ===
											ee.currentTarget,
										ie = ee.ctrlKey || ee.altKey || ee.metaKey,
										le = ee.key.length === 1
									Y &&
										(ee.key === 'Tab' && ee.preventDefault(),
										!ie && le && re(ee.key))
									const pe = te.current
									if (ee.target !== pe || !fT.includes(ee.key)) return
									ee.preventDefault()
									const ge = j()
										.filter((ye) => !ye.disabled)
										.map((ye) => ye.ref.current)
									;(i0.includes(ee.key) && ge.reverse(), jT(ge))
								}),
								onBlur: Ee(n.onBlur, (ee) => {
									ee.currentTarget.contains(ee.target) ||
										(window.clearTimeout(_e.current), (be.current = ''))
								}),
								onPointerMove: Ee(
									n.onPointerMove,
									_o((ee) => {
										const O = ee.target,
											Y = ne.current !== ee.clientX
										if (ee.currentTarget.contains(O) && Y) {
											const ie = ee.clientX > ne.current ? 'right' : 'left'
											;((X.current = ie), (ne.current = ee.clientX))
										}
									})
								)
							})
						})
					})
				})
			})
		})
	})
d0.displayName = Pn
var xT = 'MenuGroup',
	Oh = m.forwardRef((n, r) => {
		const { __scopeMenu: l, ...i } = n
		return z.jsx(Ne.div, { role: 'group', ...i, ref: r })
	})
Oh.displayName = xT
var AT = 'MenuLabel',
	h0 = m.forwardRef((n, r) => {
		const { __scopeMenu: l, ...i } = n
		return z.jsx(Ne.div, { ...i, ref: r })
	})
h0.displayName = AT
var hs = 'MenuItem',
	vg = 'menu.itemSelect',
	Us = m.forwardRef((n, r) => {
		const { disabled: l = !1, onSelect: i, ...u } = n,
			c = m.useRef(null),
			d = Mo(hs, n.__scopeMenu),
			h = Ch(hs, n.__scopeMenu),
			p = $e(r, c),
			v = m.useRef(!1),
			y = () => {
				const b = c.current
				if (!l && b) {
					const R = new CustomEvent(vg, { bubbles: !0, cancelable: !0 })
					;(b.addEventListener(vg, (A) => (i == null ? void 0 : i(A)), {
						once: !0
					}),
						Db(b, R),
						R.defaultPrevented ? (v.current = !1) : d.onClose())
				}
			}
		return z.jsx(p0, {
			...u,
			ref: p,
			disabled: l,
			onClick: Ee(n.onClick, y),
			onPointerDown: (b) => {
				var R
				;((R = n.onPointerDown) == null || R.call(n, b), (v.current = !0))
			},
			onPointerUp: Ee(n.onPointerUp, (b) => {
				var R
				v.current || (R = b.currentTarget) == null || R.click()
			}),
			onKeyDown: Ee(n.onKeyDown, (b) => {
				const R = h.searchRef.current !== ''
				l ||
					(R && b.key === ' ') ||
					(Nd.includes(b.key) && (b.currentTarget.click(), b.preventDefault()))
			})
		})
	})
Us.displayName = hs
var p0 = m.forwardRef((n, r) => {
		const { __scopeMenu: l, disabled: i = !1, textValue: u, ...c } = n,
			d = Ch(hs, l),
			h = u0(l),
			p = m.useRef(null),
			v = $e(r, p),
			[y, b] = m.useState(!1),
			[R, A] = m.useState('')
		return (
			m.useEffect(() => {
				const M = p.current
				M && A((M.textContent ?? '').trim())
			}, [c.children]),
			z.jsx(So.ItemSlot, {
				scope: l,
				disabled: i,
				textValue: u ?? R,
				children: z.jsx(zC, {
					asChild: !0,
					...h,
					focusable: !i,
					children: z.jsx(Ne.div, {
						role: 'menuitem',
						'data-highlighted': y ? '' : void 0,
						'aria-disabled': i || void 0,
						'data-disabled': i ? '' : void 0,
						...c,
						ref: v,
						onPointerMove: Ee(
							n.onPointerMove,
							_o((M) => {
								i
									? d.onItemLeave(M)
									: (d.onItemEnter(M),
										M.defaultPrevented ||
											M.currentTarget.focus({ preventScroll: !0 }))
							})
						),
						onPointerLeave: Ee(
							n.onPointerLeave,
							_o((M) => d.onItemLeave(M))
						),
						onFocus: Ee(n.onFocus, () => b(!0)),
						onBlur: Ee(n.onBlur, () => b(!1))
					})
				})
			})
		)
	}),
	wT = 'MenuCheckboxItem',
	m0 = m.forwardRef((n, r) => {
		const { checked: l = !1, onCheckedChange: i, ...u } = n
		return z.jsx(S0, {
			scope: n.__scopeMenu,
			checked: l,
			children: z.jsx(Us, {
				role: 'menuitemcheckbox',
				'aria-checked': ps(l) ? 'mixed' : l,
				...u,
				ref: r,
				'data-state': Dh(l),
				onSelect: Ee(
					u.onSelect,
					() => (i == null ? void 0 : i(ps(l) ? !0 : !l)),
					{ checkForDefaultPrevented: !1 }
				)
			})
		})
	})
m0.displayName = wT
var v0 = 'MenuRadioGroup',
	[CT, TT] = Ia(v0, { value: void 0, onValueChange: () => {} }),
	y0 = m.forwardRef((n, r) => {
		const { value: l, onValueChange: i, ...u } = n,
			c = Hn(i)
		return z.jsx(CT, {
			scope: n.__scopeMenu,
			value: l,
			onValueChange: c,
			children: z.jsx(Oh, { ...u, ref: r })
		})
	})
y0.displayName = v0
var g0 = 'MenuRadioItem',
	b0 = m.forwardRef((n, r) => {
		const { value: l, ...i } = n,
			u = TT(g0, n.__scopeMenu),
			c = l === u.value
		return z.jsx(S0, {
			scope: n.__scopeMenu,
			checked: c,
			children: z.jsx(Us, {
				role: 'menuitemradio',
				'aria-checked': c,
				...i,
				ref: r,
				'data-state': Dh(c),
				onSelect: Ee(
					i.onSelect,
					() => {
						var d
						return (d = u.onValueChange) == null ? void 0 : d.call(u, l)
					},
					{ checkForDefaultPrevented: !1 }
				)
			})
		})
	})
b0.displayName = g0
var Mh = 'MenuItemIndicator',
	[S0, OT] = Ia(Mh, { checked: !1 }),
	_0 = m.forwardRef((n, r) => {
		const { __scopeMenu: l, forceMount: i, ...u } = n,
			c = OT(Mh, l)
		return z.jsx(Gn, {
			present: i || ps(c.checked) || c.checked === !0,
			children: z.jsx(Ne.span, { ...u, ref: r, 'data-state': Dh(c.checked) })
		})
	})
_0.displayName = Mh
var MT = 'MenuSeparator',
	E0 = m.forwardRef((n, r) => {
		const { __scopeMenu: l, ...i } = n
		return z.jsx(Ne.div, {
			role: 'separator',
			'aria-orientation': 'horizontal',
			...i,
			ref: r
		})
	})
E0.displayName = MT
var DT = 'MenuArrow',
	R0 = m.forwardRef((n, r) => {
		const { __scopeMenu: l, ...i } = n,
			u = Ls(l)
		return z.jsx(xh, { ...u, ...i, ref: r })
	})
R0.displayName = DT
var NT = 'MenuSub',
	[Wj, x0] = Ia(NT),
	fo = 'MenuSubTrigger',
	A0 = m.forwardRef((n, r) => {
		const l = Ya(fo, n.__scopeMenu),
			i = Mo(fo, n.__scopeMenu),
			u = x0(fo, n.__scopeMenu),
			c = Ch(fo, n.__scopeMenu),
			d = m.useRef(null),
			{ pointerGraceTimerRef: h, onPointerGraceIntentChange: p } = c,
			v = { __scopeMenu: n.__scopeMenu },
			y = m.useCallback(() => {
				;(d.current && window.clearTimeout(d.current), (d.current = null))
			}, [])
		;(m.useEffect(() => y, [y]),
			m.useEffect(() => {
				const R = h.current
				return () => {
					;(window.clearTimeout(R), p(null))
				}
			}, [h, p]))
		const b = $e(r, u.onTriggerChange)
		return z.jsx(Ah, {
			asChild: !0,
			...v,
			children: z.jsx(p0, {
				id: u.triggerId,
				'aria-haspopup': 'menu',
				'aria-expanded': l.open,
				'aria-controls': l.open ? u.contentId : void 0,
				'data-state': T0(l.open),
				...n,
				ref: b,
				onClick: (R) => {
					var A
					;((A = n.onClick) == null || A.call(n, R),
						!(n.disabled || R.defaultPrevented) &&
							(R.currentTarget.focus(), l.open || l.onOpenChange(!0)))
				},
				onPointerMove: Ee(
					n.onPointerMove,
					_o((R) => {
						;(c.onItemEnter(R),
							!R.defaultPrevented &&
								!n.disabled &&
								!l.open &&
								!d.current &&
								(c.onPointerGraceIntentChange(null),
								(d.current = window.setTimeout(() => {
									;(l.onOpenChange(!0), y())
								}, 100))))
					})
				),
				onPointerLeave: Ee(
					n.onPointerLeave,
					_o((R) => {
						var M, _
						y()
						const A =
							(M = l.content) == null ? void 0 : M.getBoundingClientRect()
						if (A) {
							const S = (_ = l.content) == null ? void 0 : _.dataset.side,
								x = S === 'right',
								C = x ? -5 : 5,
								T = A[x ? 'left' : 'right'],
								j = A[x ? 'right' : 'left']
							;(c.onPointerGraceIntentChange({
								area: [
									{ x: R.clientX + C, y: R.clientY },
									{ x: T, y: A.top },
									{ x: j, y: A.top },
									{ x: j, y: A.bottom },
									{ x: T, y: A.bottom }
								],
								side: S
							}),
								window.clearTimeout(h.current),
								(h.current = window.setTimeout(
									() => c.onPointerGraceIntentChange(null),
									300
								)))
						} else {
							if ((c.onTriggerLeave(R), R.defaultPrevented)) return
							c.onPointerGraceIntentChange(null)
						}
					})
				),
				onKeyDown: Ee(n.onKeyDown, (R) => {
					var M
					const A = c.searchRef.current !== ''
					n.disabled ||
						(A && R.key === ' ') ||
						(dT[i.dir].includes(R.key) &&
							(l.onOpenChange(!0),
							(M = l.content) == null || M.focus(),
							R.preventDefault()))
				})
			})
		})
	})
A0.displayName = fo
var w0 = 'MenuSubContent',
	C0 = m.forwardRef((n, r) => {
		const l = c0(Pn, n.__scopeMenu),
			{ forceMount: i = l.forceMount, align: u = 'start', ...c } = n,
			d = Ya(Pn, n.__scopeMenu),
			h = Mo(Pn, n.__scopeMenu),
			p = x0(w0, n.__scopeMenu),
			v = m.useRef(null),
			y = $e(r, v)
		return z.jsx(So.Provider, {
			scope: n.__scopeMenu,
			children: z.jsx(Gn, {
				present: i || d.open,
				children: z.jsx(So.Slot, {
					scope: n.__scopeMenu,
					children: z.jsx(Th, {
						id: p.contentId,
						'aria-labelledby': p.triggerId,
						...c,
						ref: y,
						align: u,
						side: h.dir === 'rtl' ? 'left' : 'right',
						disableOutsidePointerEvents: !1,
						disableOutsideScroll: !1,
						trapFocus: !1,
						onOpenAutoFocus: (b) => {
							var R
							;(h.isUsingKeyboardRef.current &&
								((R = v.current) == null || R.focus()),
								b.preventDefault())
						},
						onCloseAutoFocus: (b) => b.preventDefault(),
						onFocusOutside: Ee(n.onFocusOutside, (b) => {
							b.target !== p.trigger && d.onOpenChange(!1)
						}),
						onEscapeKeyDown: Ee(n.onEscapeKeyDown, (b) => {
							;(h.onClose(), b.preventDefault())
						}),
						onKeyDown: Ee(n.onKeyDown, (b) => {
							var M
							const R = b.currentTarget.contains(b.target),
								A = hT[h.dir].includes(b.key)
							R &&
								A &&
								(d.onOpenChange(!1),
								(M = p.trigger) == null || M.focus(),
								b.preventDefault())
						})
					})
				})
			})
		})
	})
C0.displayName = w0
function T0(n) {
	return n ? 'open' : 'closed'
}
function ps(n) {
	return n === 'indeterminate'
}
function Dh(n) {
	return ps(n) ? 'indeterminate' : n ? 'checked' : 'unchecked'
}
function jT(n) {
	const r = document.activeElement
	for (const l of n)
		if (l === r || (l.focus(), document.activeElement !== r)) return
}
function LT(n, r) {
	return n.map((l, i) => n[(r + i) % n.length])
}
function UT(n, r, l) {
	const u = r.length > 1 && Array.from(r).every((v) => v === r[0]) ? r[0] : r,
		c = l ? n.indexOf(l) : -1
	let d = LT(n, Math.max(c, 0))
	u.length === 1 && (d = d.filter((v) => v !== l))
	const p = d.find((v) => v.toLowerCase().startsWith(u.toLowerCase()))
	return p !== l ? p : void 0
}
function zT(n, r) {
	const { x: l, y: i } = n
	let u = !1
	for (let c = 0, d = r.length - 1; c < r.length; d = c++) {
		const h = r[c],
			p = r[d],
			v = h.x,
			y = h.y,
			b = p.x,
			R = p.y
		y > i != R > i && l < ((b - v) * (i - y)) / (R - y) + v && (u = !u)
	}
	return u
}
function BT(n, r) {
	if (!r) return !1
	const l = { x: n.clientX, y: n.clientY }
	return zT(l, r)
}
function _o(n) {
	return (r) => (r.pointerType === 'mouse' ? n(r) : void 0)
}
var PT = s0,
	VT = Ah,
	kT = f0,
	HT = d0,
	qT = Oh,
	GT = h0,
	FT = Us,
	$T = m0,
	IT = y0,
	YT = b0,
	QT = _0,
	KT = E0,
	XT = R0,
	ZT = A0,
	JT = C0,
	zs = 'DropdownMenu',
	[WT] = tr(zs, [o0]),
	ln = o0(),
	[eO, O0] = WT(zs),
	M0 = (n) => {
		const {
				__scopeDropdownMenu: r,
				children: l,
				dir: i,
				open: u,
				defaultOpen: c,
				onOpenChange: d,
				modal: h = !0
			} = n,
			p = ln(r),
			v = m.useRef(null),
			[y, b] = Fa({ prop: u, defaultProp: c ?? !1, onChange: d, caller: zs })
		return z.jsx(eO, {
			scope: r,
			triggerId: pr(),
			triggerRef: v,
			contentId: pr(),
			open: y,
			onOpenChange: b,
			onOpenToggle: m.useCallback(() => b((R) => !R), [b]),
			modal: h,
			children: z.jsx(PT, {
				...p,
				open: y,
				onOpenChange: b,
				dir: i,
				modal: h,
				children: l
			})
		})
	}
M0.displayName = zs
var D0 = 'DropdownMenuTrigger',
	N0 = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, disabled: i = !1, ...u } = n,
			c = O0(D0, l),
			d = ln(l),
			h = $e(r, c.triggerRef)
		return z.jsx(VT, {
			asChild: !0,
			...d,
			children: z.jsx(Ne.button, {
				type: 'button',
				id: c.triggerId,
				'aria-haspopup': 'menu',
				'aria-expanded': c.open,
				'aria-controls': c.open ? c.contentId : void 0,
				'data-state': c.open ? 'open' : 'closed',
				'data-disabled': i ? '' : void 0,
				disabled: i,
				...u,
				ref: h,
				onPointerDown: Ee(n.onPointerDown, (p) => {
					!i &&
						p.button === 0 &&
						p.ctrlKey === !1 &&
						(c.onOpenToggle(), c.open || p.preventDefault())
				}),
				onKeyDown: Ee(n.onKeyDown, (p) => {
					i ||
						(['Enter', ' '].includes(p.key) && c.onOpenToggle(),
						p.key === 'ArrowDown' && c.onOpenChange(!0),
						['Enter', ' ', 'ArrowDown'].includes(p.key) && p.preventDefault())
				})
			})
		})
	})
N0.displayName = D0
var tO = 'DropdownMenuPortal',
	j0 = (n) => {
		const { __scopeDropdownMenu: r, ...l } = n,
			i = ln(r)
		return z.jsx(kT, { ...i, ...l })
	}
j0.displayName = tO
var L0 = 'DropdownMenuContent',
	U0 = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = O0(L0, l),
			c = ln(l),
			d = m.useRef(!1)
		return z.jsx(HT, {
			id: u.contentId,
			'aria-labelledby': u.triggerId,
			...c,
			...i,
			ref: r,
			onCloseAutoFocus: Ee(n.onCloseAutoFocus, (h) => {
				var p
				;(d.current || (p = u.triggerRef.current) == null || p.focus(),
					(d.current = !1),
					h.preventDefault())
			}),
			onInteractOutside: Ee(n.onInteractOutside, (h) => {
				const p = h.detail.originalEvent,
					v = p.button === 0 && p.ctrlKey === !0,
					y = p.button === 2 || v
				;(!u.modal || y) && (d.current = !0)
			}),
			style: {
				...n.style,
				'--radix-dropdown-menu-content-transform-origin':
					'var(--radix-popper-transform-origin)',
				'--radix-dropdown-menu-content-available-width':
					'var(--radix-popper-available-width)',
				'--radix-dropdown-menu-content-available-height':
					'var(--radix-popper-available-height)',
				'--radix-dropdown-menu-trigger-width':
					'var(--radix-popper-anchor-width)',
				'--radix-dropdown-menu-trigger-height':
					'var(--radix-popper-anchor-height)'
			}
		})
	})
U0.displayName = L0
var nO = 'DropdownMenuGroup',
	rO = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = ln(l)
		return z.jsx(qT, { ...u, ...i, ref: r })
	})
rO.displayName = nO
var aO = 'DropdownMenuLabel',
	lO = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = ln(l)
		return z.jsx(GT, { ...u, ...i, ref: r })
	})
lO.displayName = aO
var iO = 'DropdownMenuItem',
	z0 = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = ln(l)
		return z.jsx(FT, { ...u, ...i, ref: r })
	})
z0.displayName = iO
var oO = 'DropdownMenuCheckboxItem',
	uO = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = ln(l)
		return z.jsx($T, { ...u, ...i, ref: r })
	})
uO.displayName = oO
var sO = 'DropdownMenuRadioGroup',
	cO = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = ln(l)
		return z.jsx(IT, { ...u, ...i, ref: r })
	})
cO.displayName = sO
var fO = 'DropdownMenuRadioItem',
	dO = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = ln(l)
		return z.jsx(YT, { ...u, ...i, ref: r })
	})
dO.displayName = fO
var hO = 'DropdownMenuItemIndicator',
	pO = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = ln(l)
		return z.jsx(QT, { ...u, ...i, ref: r })
	})
pO.displayName = hO
var mO = 'DropdownMenuSeparator',
	vO = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = ln(l)
		return z.jsx(KT, { ...u, ...i, ref: r })
	})
vO.displayName = mO
var yO = 'DropdownMenuArrow',
	gO = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = ln(l)
		return z.jsx(XT, { ...u, ...i, ref: r })
	})
gO.displayName = yO
var bO = 'DropdownMenuSubTrigger',
	SO = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = ln(l)
		return z.jsx(ZT, { ...u, ...i, ref: r })
	})
SO.displayName = bO
var _O = 'DropdownMenuSubContent',
	EO = m.forwardRef((n, r) => {
		const { __scopeDropdownMenu: l, ...i } = n,
			u = ln(l)
		return z.jsx(JT, {
			...u,
			...i,
			ref: r,
			style: {
				...n.style,
				'--radix-dropdown-menu-content-transform-origin':
					'var(--radix-popper-transform-origin)',
				'--radix-dropdown-menu-content-available-width':
					'var(--radix-popper-available-width)',
				'--radix-dropdown-menu-content-available-height':
					'var(--radix-popper-available-height)',
				'--radix-dropdown-menu-trigger-width':
					'var(--radix-popper-anchor-width)',
				'--radix-dropdown-menu-trigger-height':
					'var(--radix-popper-anchor-height)'
			}
		})
	})
EO.displayName = _O
var e4 = M0,
	t4 = N0,
	n4 = j0,
	r4 = U0,
	a4 = z0,
	RO = 'Separator',
	yg = 'horizontal',
	xO = ['horizontal', 'vertical'],
	B0 = m.forwardRef((n, r) => {
		const { decorative: l, orientation: i = yg, ...u } = n,
			c = AO(i) ? i : yg,
			h = l
				? { role: 'none' }
				: {
						'aria-orientation': c === 'vertical' ? c : void 0,
						role: 'separator'
					}
		return z.jsx(Ne.div, { 'data-orientation': c, ...h, ...u, ref: r })
	})
B0.displayName = RO
function AO(n) {
	return xO.includes(n)
}
var l4 = B0,
	Bs = 'Dialog',
	[P0] = tr(Bs),
	[wO, nr] = P0(Bs),
	CO = (n) => {
		const {
				__scopeDialog: r,
				children: l,
				open: i,
				defaultOpen: u,
				onOpenChange: c,
				modal: d = !0
			} = n,
			h = m.useRef(null),
			p = m.useRef(null),
			[v, y] = Fa({ prop: i, defaultProp: u ?? !1, onChange: c, caller: Bs })
		return z.jsx(wO, {
			scope: r,
			triggerRef: h,
			contentRef: p,
			contentId: pr(),
			titleId: pr(),
			descriptionId: pr(),
			open: v,
			onOpenChange: y,
			onOpenToggle: m.useCallback(() => y((b) => !b), [y]),
			modal: d,
			children: l
		})
	}
CO.displayName = Bs
var V0 = 'DialogTrigger',
	TO = m.forwardRef((n, r) => {
		const { __scopeDialog: l, ...i } = n,
			u = nr(V0, l),
			c = $e(r, u.triggerRef)
		return z.jsx(Ne.button, {
			type: 'button',
			'aria-haspopup': 'dialog',
			'aria-expanded': u.open,
			'aria-controls': u.open ? u.contentId : void 0,
			'data-state': jh(u.open),
			...i,
			ref: c,
			onClick: Ee(n.onClick, u.onOpenToggle)
		})
	})
TO.displayName = V0
var Nh = 'DialogPortal',
	[OO, k0] = P0(Nh, { forceMount: void 0 }),
	MO = (n) => {
		const { __scopeDialog: r, forceMount: l, children: i, container: u } = n,
			c = nr(Nh, r)
		return z.jsx(OO, {
			scope: r,
			forceMount: l,
			children: m.Children.map(i, (d) =>
				z.jsx(Gn, {
					present: l || c.open,
					children: z.jsx(Ds, { asChild: !0, container: u, children: d })
				})
			)
		})
	}
MO.displayName = Nh
var ms = 'DialogOverlay',
	DO = m.forwardRef((n, r) => {
		const l = k0(ms, n.__scopeDialog),
			{ forceMount: i = l.forceMount, ...u } = n,
			c = nr(ms, n.__scopeDialog)
		return c.modal
			? z.jsx(Gn, {
					present: i || c.open,
					children: z.jsx(jO, { ...u, ref: r })
				})
			: null
	})
DO.displayName = ms
var NO = Ga('DialogOverlay.RemoveScroll'),
	jO = m.forwardRef((n, r) => {
		const { __scopeDialog: l, ...i } = n,
			u = nr(ms, l),
			c = Gw(),
			d = $e(r, c)
		return z.jsx(js, {
			as: NO,
			allowPinchZoom: !0,
			shards: [u.contentRef],
			children: z.jsx(Ne.div, {
				'data-state': jh(u.open),
				...i,
				ref: d,
				style: { pointerEvents: 'auto', ...i.style }
			})
		})
	}),
	$l = 'DialogContent',
	LO = m.forwardRef((n, r) => {
		const l = k0($l, n.__scopeDialog),
			{ forceMount: i = l.forceMount, ...u } = n,
			c = nr($l, n.__scopeDialog)
		return z.jsx(Gn, {
			present: i || c.open,
			children: c.modal
				? z.jsx(UO, { ...u, ref: r })
				: z.jsx(zO, { ...u, ref: r })
		})
	})
LO.displayName = $l
var UO = m.forwardRef((n, r) => {
		const l = nr($l, n.__scopeDialog),
			i = m.useRef(null),
			u = $e(r, l.contentRef, i)
		return (
			m.useEffect(() => {
				const c = i.current
				if (c) return nh(c)
			}, []),
			z.jsx(H0, {
				...n,
				ref: u,
				trapFocus: l.open,
				disableOutsidePointerEvents: l.open,
				onCloseAutoFocus: Ee(n.onCloseAutoFocus, (c) => {
					var d
					;(c.preventDefault(), (d = l.triggerRef.current) == null || d.focus())
				}),
				onPointerDownOutside: Ee(n.onPointerDownOutside, (c) => {
					const d = c.detail.originalEvent,
						h = d.button === 0 && d.ctrlKey === !0
					;(d.button === 2 || h) && c.preventDefault()
				}),
				onFocusOutside: Ee(n.onFocusOutside, (c) => c.preventDefault())
			})
		)
	}),
	zO = m.forwardRef((n, r) => {
		const l = nr($l, n.__scopeDialog),
			i = m.useRef(!1),
			u = m.useRef(!1)
		return z.jsx(H0, {
			...n,
			ref: r,
			trapFocus: !1,
			disableOutsidePointerEvents: !1,
			onCloseAutoFocus: (c) => {
				var d, h
				;((d = n.onCloseAutoFocus) == null || d.call(n, c),
					c.defaultPrevented ||
						(i.current || (h = l.triggerRef.current) == null || h.focus(),
						c.preventDefault()),
					(i.current = !1),
					(u.current = !1))
			},
			onInteractOutside: (c) => {
				var p, v
				;((p = n.onInteractOutside) == null || p.call(n, c),
					c.defaultPrevented ||
						((i.current = !0),
						c.detail.originalEvent.type === 'pointerdown' && (u.current = !0)))
				const d = c.target
				;(((v = l.triggerRef.current) == null ? void 0 : v.contains(d)) &&
					c.preventDefault(),
					c.detail.originalEvent.type === 'focusin' &&
						u.current &&
						c.preventDefault())
			}
		})
	}),
	H0 = m.forwardRef((n, r) => {
		const {
				__scopeDialog: l,
				trapFocus: i,
				onOpenAutoFocus: u,
				onCloseAutoFocus: c,
				...d
			} = n,
			h = nr($l, l)
		return (
			gh(),
			z.jsx(z.Fragment, {
				children: z.jsx(Ms, {
					asChild: !0,
					loop: !0,
					trapped: i,
					onMountAutoFocus: u,
					onUnmountAutoFocus: c,
					children: z.jsx(Co, {
						role: 'dialog',
						id: h.contentId,
						'aria-describedby': h.descriptionId,
						'aria-labelledby': h.titleId,
						'data-state': jh(h.open),
						...d,
						ref: r,
						deferPointerDownOutside: !0,
						onDismiss: () => h.onOpenChange(!1)
					})
				})
			})
		)
	}),
	q0 = 'DialogTitle',
	BO = m.forwardRef((n, r) => {
		const { __scopeDialog: l, ...i } = n,
			u = nr(q0, l)
		return z.jsx(Ne.h2, { id: u.titleId, ...i, ref: r })
	})
BO.displayName = q0
var G0 = 'DialogDescription',
	PO = m.forwardRef((n, r) => {
		const { __scopeDialog: l, ...i } = n,
			u = nr(G0, l)
		return z.jsx(Ne.p, { id: u.descriptionId, ...i, ref: r })
	})
PO.displayName = G0
var F0 = 'DialogClose',
	VO = m.forwardRef((n, r) => {
		const { __scopeDialog: l, ...i } = n,
			u = nr(F0, l)
		return z.jsx(Ne.button, {
			type: 'button',
			...i,
			ref: r,
			onClick: Ee(n.onClick, () => u.onOpenChange(!1))
		})
	})
VO.displayName = F0
function jh(n) {
	return n ? 'open' : 'closed'
}
var $0 = Object.freeze({
		position: 'absolute',
		border: 0,
		width: 1,
		height: 1,
		padding: 0,
		margin: -1,
		overflow: 'hidden',
		clip: 'rect(0, 0, 0, 0)',
		whiteSpace: 'nowrap',
		wordWrap: 'normal'
	}),
	kO = 'VisuallyHidden',
	I0 = m.forwardRef((n, r) =>
		z.jsx(Ne.span, { ...n, ref: r, style: { ...$0, ...n.style } })
	)
I0.displayName = kO
var HO = I0,
	[Ps] = tr('Tooltip', [ei]),
	Lh = ei(),
	Y0 = 'TooltipProvider',
	qO = 700,
	gg = 'tooltip.open',
	[GO, Q0] = Ps(Y0),
	K0 = (n) => {
		const {
				__scopeTooltip: r,
				delayDuration: l = qO,
				skipDelayDuration: i = 300,
				disableHoverableContent: u = !1,
				children: c
			} = n,
			d = m.useRef(!0),
			h = m.useRef(!1),
			p = m.useRef(0)
		return (
			m.useEffect(() => {
				const v = p.current
				return () => window.clearTimeout(v)
			}, []),
			z.jsx(GO, {
				scope: r,
				isOpenDelayedRef: d,
				delayDuration: l,
				onOpen: m.useCallback(() => {
					i <= 0 || (window.clearTimeout(p.current), (d.current = !1))
				}, [i]),
				onClose: m.useCallback(() => {
					i <= 0 ||
						(window.clearTimeout(p.current),
						(p.current = window.setTimeout(() => (d.current = !0), i)))
				}, [i]),
				isPointerInTransitRef: h,
				onPointerInTransitChange: m.useCallback((v) => {
					h.current = v
				}, []),
				disableHoverableContent: u,
				children: c
			})
		)
	}
K0.displayName = Y0
var X0 = 'Tooltip',
	[i4, Vs] = Ps(X0),
	jd = 'TooltipTrigger',
	FO = m.forwardRef((n, r) => {
		const { __scopeTooltip: l, ...i } = n,
			u = Vs(jd, l),
			c = Q0(jd, l),
			d = Lh(l),
			h = m.useRef(null),
			p = $e(r, h, u.onTriggerChange),
			v = m.useRef(!1),
			y = m.useRef(!1),
			b = m.useCallback(() => (v.current = !1), [])
		return (
			m.useEffect(
				() => () => document.removeEventListener('pointerup', b),
				[b]
			),
			z.jsx(Eh, {
				asChild: !0,
				...d,
				children: z.jsx(Ne.button, {
					'aria-describedby': u.open ? u.contentId : void 0,
					'data-state': u.stateAttribute,
					...i,
					ref: p,
					onPointerMove: Ee(n.onPointerMove, (R) => {
						R.pointerType !== 'touch' &&
							!y.current &&
							!c.isPointerInTransitRef.current &&
							(u.onTriggerEnter(), (y.current = !0))
					}),
					onPointerLeave: Ee(n.onPointerLeave, () => {
						;(u.onTriggerLeave(), (y.current = !1))
					}),
					onPointerDown: Ee(n.onPointerDown, () => {
						;(u.open && u.onClose(),
							(v.current = !0),
							document.addEventListener('pointerup', b, { once: !0 }))
					}),
					onFocus: Ee(n.onFocus, () => {
						v.current || u.onOpen()
					}),
					onBlur: Ee(n.onBlur, u.onClose),
					onClick: Ee(n.onClick, u.onClose)
				})
			})
		)
	})
FO.displayName = jd
var $O = 'TooltipPortal',
	[o4, IO] = Ps($O, { forceMount: void 0 }),
	Il = 'TooltipContent',
	YO = m.forwardRef((n, r) => {
		const l = IO(Il, n.__scopeTooltip),
			{ forceMount: i = l.forceMount, side: u = 'top', ...c } = n,
			d = Vs(Il, n.__scopeTooltip)
		return z.jsx(Gn, {
			present: i || d.open,
			children: d.disableHoverableContent
				? z.jsx(Z0, { side: u, ...c, ref: r })
				: z.jsx(QO, { side: u, ...c, ref: r })
		})
	}),
	QO = m.forwardRef((n, r) => {
		const l = Vs(Il, n.__scopeTooltip),
			i = Q0(Il, n.__scopeTooltip),
			u = m.useRef(null),
			c = $e(r, u),
			[d, h] = m.useState(null),
			{ trigger: p, onClose: v } = l,
			y = u.current,
			{ onPointerInTransitChange: b } = i,
			R = m.useCallback(() => {
				;(h(null), b(!1))
			}, [b]),
			A = m.useCallback(
				(M, _) => {
					const S = M.currentTarget,
						x = { x: M.clientX, y: M.clientY },
						C = WO(x, S.getBoundingClientRect()),
						T = eM(x, C),
						j = tM(_.getBoundingClientRect()),
						L = rM([...T, ...j])
					;(h(L), b(!0))
				},
				[b]
			)
		return (
			m.useEffect(() => () => R(), [R]),
			m.useEffect(() => {
				if (p && y) {
					const M = (S) => A(S, y),
						_ = (S) => A(S, p)
					return (
						p.addEventListener('pointerleave', M),
						y.addEventListener('pointerleave', _),
						() => {
							;(p.removeEventListener('pointerleave', M),
								y.removeEventListener('pointerleave', _))
						}
					)
				}
			}, [p, y, A, R]),
			m.useEffect(() => {
				if (d) {
					const M = (_) => {
						const S = _.target,
							x = { x: _.clientX, y: _.clientY },
							C =
								(p == null ? void 0 : p.contains(S)) ||
								(y == null ? void 0 : y.contains(S)),
							T = !nM(x, d)
						C ? R() : T && (R(), v())
					}
					return (
						document.addEventListener('pointermove', M),
						() => document.removeEventListener('pointermove', M)
					)
				}
			}, [p, y, d, v, R]),
			z.jsx(Z0, { ...n, ref: c })
		)
	}),
	[KO, XO] = Ps(X0, { isInside: !1 }),
	ZO = OA('TooltipContent'),
	Z0 = m.forwardRef((n, r) => {
		const {
				__scopeTooltip: l,
				children: i,
				'aria-label': u,
				onEscapeKeyDown: c,
				onPointerDownOutside: d,
				...h
			} = n,
			p = Vs(Il, l),
			v = Lh(l),
			{ onClose: y } = p
		return (
			m.useEffect(
				() => (
					document.addEventListener(gg, y),
					() => document.removeEventListener(gg, y)
				),
				[y]
			),
			m.useEffect(() => {
				if (p.trigger) {
					const b = (R) => {
						R.target instanceof Node && R.target.contains(p.trigger) && y()
					}
					return (
						window.addEventListener('scroll', b, { capture: !0 }),
						() => window.removeEventListener('scroll', b, { capture: !0 })
					)
				}
			}, [p.trigger, y]),
			z.jsx(Co, {
				asChild: !0,
				disableOutsidePointerEvents: !1,
				onEscapeKeyDown: c,
				onPointerDownOutside: d,
				onFocusOutside: (b) => b.preventDefault(),
				onDismiss: y,
				children: z.jsxs(Rh, {
					'data-state': p.stateAttribute,
					...v,
					...h,
					ref: r,
					style: {
						...h.style,
						'--radix-tooltip-content-transform-origin':
							'var(--radix-popper-transform-origin)',
						'--radix-tooltip-content-available-width':
							'var(--radix-popper-available-width)',
						'--radix-tooltip-content-available-height':
							'var(--radix-popper-available-height)',
						'--radix-tooltip-trigger-width': 'var(--radix-popper-anchor-width)',
						'--radix-tooltip-trigger-height':
							'var(--radix-popper-anchor-height)'
					},
					children: [
						z.jsx(ZO, { children: i }),
						z.jsx(KO, {
							scope: l,
							isInside: !0,
							children: z.jsx(HO, {
								id: p.contentId,
								role: 'tooltip',
								children: u || i
							})
						})
					]
				})
			})
		)
	})
YO.displayName = Il
var J0 = 'TooltipArrow',
	JO = m.forwardRef((n, r) => {
		const { __scopeTooltip: l, ...i } = n,
			u = Lh(l)
		return XO(J0, l).isInside ? null : z.jsx(xh, { ...u, ...i, ref: r })
	})
JO.displayName = J0
function WO(n, r) {
	const l = Math.abs(r.top - n.y),
		i = Math.abs(r.bottom - n.y),
		u = Math.abs(r.right - n.x),
		c = Math.abs(r.left - n.x)
	switch (Math.min(l, i, u, c)) {
		case c:
			return 'left'
		case u:
			return 'right'
		case l:
			return 'top'
		case i:
			return 'bottom'
		default:
			throw new Error('unreachable')
	}
}
function eM(n, r, l = 5) {
	const i = []
	switch (r) {
		case 'top':
			i.push({ x: n.x - l, y: n.y + l }, { x: n.x + l, y: n.y + l })
			break
		case 'bottom':
			i.push({ x: n.x - l, y: n.y - l }, { x: n.x + l, y: n.y - l })
			break
		case 'left':
			i.push({ x: n.x + l, y: n.y - l }, { x: n.x + l, y: n.y + l })
			break
		case 'right':
			i.push({ x: n.x - l, y: n.y - l }, { x: n.x - l, y: n.y + l })
			break
	}
	return i
}
function tM(n) {
	const { top: r, right: l, bottom: i, left: u } = n
	return [
		{ x: u, y: r },
		{ x: l, y: r },
		{ x: l, y: i },
		{ x: u, y: i }
	]
}
function nM(n, r) {
	const { x: l, y: i } = n
	let u = !1
	for (let c = 0, d = r.length - 1; c < r.length; d = c++) {
		const h = r[c],
			p = r[d],
			v = h.x,
			y = h.y,
			b = p.x,
			R = p.y
		y > i != R > i && l < ((b - v) * (i - y)) / (R - y) + v && (u = !u)
	}
	return u
}
function rM(n) {
	const r = n.slice()
	return (
		r.sort((l, i) =>
			l.x < i.x ? -1 : l.x > i.x ? 1 : l.y < i.y ? -1 : l.y > i.y ? 1 : 0
		),
		aM(r)
	)
}
function aM(n) {
	if (n.length <= 1) return n.slice()
	const r = []
	for (let i = 0; i < n.length; i++) {
		const u = n[i]
		for (; r.length >= 2; ) {
			const c = r[r.length - 1],
				d = r[r.length - 2]
			if ((c.x - d.x) * (u.y - d.y) >= (c.y - d.y) * (u.x - d.x)) r.pop()
			else break
		}
		r.push(u)
	}
	r.pop()
	const l = []
	for (let i = n.length - 1; i >= 0; i--) {
		const u = n[i]
		for (; l.length >= 2; ) {
			const c = l[l.length - 1],
				d = l[l.length - 2]
			if ((c.x - d.x) * (u.y - d.y) >= (c.y - d.y) * (u.x - d.x)) l.pop()
			else break
		}
		l.push(u)
	}
	return (
		l.pop(),
		r.length === 1 && l.length === 1 && r[0].x === l[0].x && r[0].y === l[0].y
			? r
			: r.concat(l)
	)
}
var u4 = K0,
	ks = 'Collapsible',
	[lM] = tr(ks),
	[iM, Uh] = lM(ks),
	W0 = m.forwardRef((n, r) => {
		const {
				__scopeCollapsible: l,
				open: i,
				defaultOpen: u,
				disabled: c,
				onOpenChange: d,
				...h
			} = n,
			[p, v] = Fa({ prop: i, defaultProp: u ?? !1, onChange: d, caller: ks })
		return z.jsx(iM, {
			scope: l,
			disabled: c,
			contentId: pr(),
			open: p,
			onOpenToggle: m.useCallback(() => v((y) => !y), [v]),
			children: z.jsx(Ne.div, {
				'data-state': Bh(p),
				'data-disabled': c ? '' : void 0,
				...h,
				ref: r
			})
		})
	})
W0.displayName = ks
var eS = 'CollapsibleTrigger',
	oM = m.forwardRef((n, r) => {
		const { __scopeCollapsible: l, ...i } = n,
			u = Uh(eS, l)
		return z.jsx(Ne.button, {
			type: 'button',
			'aria-controls': u.open ? u.contentId : void 0,
			'aria-expanded': u.open || !1,
			'data-state': Bh(u.open),
			'data-disabled': u.disabled ? '' : void 0,
			disabled: u.disabled,
			...i,
			ref: r,
			onClick: Ee(n.onClick, u.onOpenToggle)
		})
	})
oM.displayName = eS
var zh = 'CollapsibleContent',
	uM = m.forwardRef((n, r) => {
		const { forceMount: l, ...i } = n,
			u = Uh(zh, n.__scopeCollapsible)
		return z.jsx(Gn, {
			present: l || u.open,
			children: ({ present: c }) => z.jsx(sM, { ...i, ref: r, present: c })
		})
	})
uM.displayName = zh
var sM = m.forwardRef((n, r) => {
	const { __scopeCollapsible: l, present: i, children: u, ...c } = n,
		d = Uh(zh, l),
		[h, p] = m.useState(i),
		v = m.useRef(null),
		y = $e(r, v),
		b = m.useRef(0),
		R = b.current,
		A = m.useRef(0),
		M = A.current,
		_ = d.open || h,
		S = m.useRef(_),
		x = m.useRef(void 0)
	return (
		m.useEffect(() => {
			const C = requestAnimationFrame(() => (S.current = !1))
			return () => cancelAnimationFrame(C)
		}, []),
		Ct(() => {
			const C = v.current
			if (C) {
				;((x.current = x.current || {
					transitionDuration: C.style.transitionDuration,
					animationName: C.style.animationName
				}),
					(C.style.transitionDuration = '0s'),
					(C.style.animationName = 'none'))
				const T = C.getBoundingClientRect()
				;((b.current = T.height),
					(A.current = T.width),
					S.current ||
						((C.style.transitionDuration = x.current.transitionDuration),
						(C.style.animationName = x.current.animationName)),
					p(i))
			}
		}, [d.open, i]),
		z.jsx(Ne.div, {
			'data-state': Bh(d.open),
			'data-disabled': d.disabled ? '' : void 0,
			id: d.contentId,
			hidden: !_,
			...c,
			ref: y,
			style: {
				'--radix-collapsible-content-height': R ? `${R}px` : void 0,
				'--radix-collapsible-content-width': M ? `${M}px` : void 0,
				...n.style
			},
			children: _ && u
		})
	)
})
function Bh(n) {
	return n ? 'open' : 'closed'
}
var s4 = W0
function cM(n, r = {}) {
	const l = m.useRef(n.get()),
		{ keys: i, deps: u = [n, i] } = r,
		c = m.useCallback((h) => {
			const p = (v) => {
				l.current !== v && ((l.current = v), h())
			}
			return (p(n.value), i != null && i.length ? F1(n, i, p) : n.listen(p))
		}, u),
		d = () => l.current
	return m.useSyncExternalStore(c, d, d)
}
function fM(n) {
	return `use${Y1(n)}`
}
function c4(n) {
	const {
			pluginPathMethods: r,
			pluginsActions: l,
			pluginsAtoms: i,
			$fetch: u,
			$store: c,
			atomListeners: d
		} = $1(n),
		h = {}
	for (const [p, v] of Object.entries(i)) h[fM(p)] = () => cM(v)
	return I1({ ...l, ...h, $fetch: u, $store: c }, u, r, i, d)
}
function tS(n) {
	const r = m.useRef({ value: n, previous: n })
	return m.useMemo(
		() => (
			r.current.value !== n &&
				((r.current.previous = r.current.value), (r.current.value = n)),
			r.current.previous
		),
		[n]
	)
}
var Hs = 'Checkbox',
	[dM] = tr(Hs),
	[hM, Ph] = dM(Hs)
function pM(n) {
	const {
			__scopeCheckbox: r,
			checked: l,
			children: i,
			defaultChecked: u,
			disabled: c,
			form: d,
			name: h,
			onCheckedChange: p,
			required: v,
			value: y = 'on',
			internal_do_not_use_render: b
		} = n,
		[R, A] = Fa({ prop: l, defaultProp: u ?? !1, onChange: p, caller: Hs }),
		[M, _] = m.useState(null),
		[S, x] = m.useState(null),
		C = m.useRef(!1),
		T = M ? !!d || !!M.closest('form') : !0,
		j = {
			checked: R,
			disabled: c,
			setChecked: A,
			control: M,
			setControl: _,
			name: h,
			form: d,
			value: y,
			hasConsumerStoppedPropagationRef: C,
			required: v,
			defaultChecked: pa(u) ? !1 : u,
			isFormControl: T,
			bubbleInput: S,
			setBubbleInput: x
		}
	return z.jsx(hM, { scope: r, ...j, children: yM(b) ? b(j) : i })
}
var nS = 'CheckboxTrigger',
	rS = m.forwardRef(
		({ __scopeCheckbox: n, onKeyDown: r, onClick: l, ...i }, u) => {
			const {
					control: c,
					value: d,
					disabled: h,
					checked: p,
					required: v,
					setControl: y,
					setChecked: b,
					hasConsumerStoppedPropagationRef: R,
					isFormControl: A,
					bubbleInput: M
				} = Ph(nS, n),
				_ = $e(u, y),
				S = m.useRef(p)
			return (
				m.useEffect(() => {
					const x = c == null ? void 0 : c.form
					if (x) {
						const C = () => b(S.current)
						return (
							x.addEventListener('reset', C),
							() => x.removeEventListener('reset', C)
						)
					}
				}, [c, b]),
				z.jsx(Ne.button, {
					type: 'button',
					role: 'checkbox',
					'aria-checked': pa(p) ? 'mixed' : p,
					'aria-required': v,
					'data-state': oS(p),
					'data-disabled': h ? '' : void 0,
					disabled: h,
					value: d,
					...i,
					ref: _,
					onKeyDown: Ee(r, (x) => {
						x.key === 'Enter' && x.preventDefault()
					}),
					onClick: Ee(l, (x) => {
						;(b((C) => (pa(C) ? !0 : !C)),
							M &&
								A &&
								((R.current = x.isPropagationStopped()),
								R.current || x.stopPropagation()))
					})
				})
			)
		}
	)
rS.displayName = nS
var mM = m.forwardRef((n, r) => {
	const {
		__scopeCheckbox: l,
		name: i,
		checked: u,
		defaultChecked: c,
		required: d,
		disabled: h,
		value: p,
		onCheckedChange: v,
		form: y,
		...b
	} = n
	return z.jsx(pM, {
		__scopeCheckbox: l,
		checked: u,
		defaultChecked: c,
		disabled: h,
		required: d,
		onCheckedChange: v,
		name: i,
		form: y,
		value: p,
		internal_do_not_use_render: ({ isFormControl: R }) =>
			z.jsxs(z.Fragment, {
				children: [
					z.jsx(rS, { ...b, ref: r, __scopeCheckbox: l }),
					R && z.jsx(iS, { __scopeCheckbox: l })
				]
			})
	})
})
mM.displayName = Hs
var aS = 'CheckboxIndicator',
	vM = m.forwardRef((n, r) => {
		const { __scopeCheckbox: l, forceMount: i, ...u } = n,
			c = Ph(aS, l)
		return z.jsx(Gn, {
			present: i || pa(c.checked) || c.checked === !0,
			children: z.jsx(Ne.span, {
				'data-state': oS(c.checked),
				'data-disabled': c.disabled ? '' : void 0,
				...u,
				ref: r,
				style: { pointerEvents: 'none', ...n.style }
			})
		})
	})
vM.displayName = aS
var lS = 'CheckboxBubbleInput',
	iS = m.forwardRef(({ __scopeCheckbox: n, ...r }, l) => {
		const {
				control: i,
				hasConsumerStoppedPropagationRef: u,
				checked: c,
				defaultChecked: d,
				required: h,
				disabled: p,
				name: v,
				value: y,
				form: b,
				bubbleInput: R,
				setBubbleInput: A
			} = Ph(lS, n),
			M = $e(l, A),
			_ = tS(c),
			S = Vb(i)
		m.useEffect(() => {
			const C = R
			if (!C) return
			const T = window.HTMLInputElement.prototype,
				L = Object.getOwnPropertyDescriptor(T, 'checked').set,
				Q = !u.current
			if (_ !== c && L) {
				const te = new Event('click', { bubbles: Q })
				;((C.indeterminate = pa(c)),
					L.call(C, pa(c) ? !1 : c),
					C.dispatchEvent(te))
			}
		}, [R, _, c, u])
		const x = m.useRef(pa(c) ? !1 : c)
		return z.jsx(Ne.input, {
			type: 'checkbox',
			'aria-hidden': !0,
			defaultChecked: d ?? x.current,
			required: h,
			disabled: p,
			name: v,
			value: y,
			form: b,
			...r,
			tabIndex: -1,
			ref: M,
			style: {
				...r.style,
				...S,
				position: 'absolute',
				pointerEvents: 'none',
				opacity: 0,
				margin: 0,
				transform: 'translateX(-100%)'
			}
		})
	})
iS.displayName = lS
function yM(n) {
	return typeof n == 'function'
}
function pa(n) {
	return n === 'indeterminate'
}
function oS(n) {
	return pa(n) ? 'indeterminate' : n ? 'checked' : 'unchecked'
}
var gM = 'Label',
	uS = m.forwardRef((n, r) =>
		z.jsx(Ne.label, {
			...n,
			ref: r,
			onMouseDown: (l) => {
				var u
				l.target.closest('button, input, select, textarea') ||
					((u = n.onMouseDown) == null || u.call(n, l),
					!l.defaultPrevented && l.detail > 1 && l.preventDefault())
			}
		})
	)
uS.displayName = gM
var f4 = uS,
	yd = { exports: {} },
	Je = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var bg
function bM() {
	if (bg) return Je
	bg = 1
	var n = Symbol.for('react.element'),
		r = Symbol.for('react.portal'),
		l = Symbol.for('react.fragment'),
		i = Symbol.for('react.strict_mode'),
		u = Symbol.for('react.profiler'),
		c = Symbol.for('react.provider'),
		d = Symbol.for('react.context'),
		h = Symbol.for('react.server_context'),
		p = Symbol.for('react.forward_ref'),
		v = Symbol.for('react.suspense'),
		y = Symbol.for('react.suspense_list'),
		b = Symbol.for('react.memo'),
		R = Symbol.for('react.lazy'),
		A = Symbol.for('react.offscreen'),
		M
	M = Symbol.for('react.module.reference')
	function _(S) {
		if (typeof S == 'object' && S !== null) {
			var x = S.$$typeof
			switch (x) {
				case n:
					switch (((S = S.type), S)) {
						case l:
						case u:
						case i:
						case v:
						case y:
							return S
						default:
							switch (((S = S && S.$$typeof), S)) {
								case h:
								case d:
								case p:
								case R:
								case b:
								case c:
									return S
								default:
									return x
							}
					}
				case r:
					return x
			}
		}
	}
	return (
		(Je.ContextConsumer = d),
		(Je.ContextProvider = c),
		(Je.Element = n),
		(Je.ForwardRef = p),
		(Je.Fragment = l),
		(Je.Lazy = R),
		(Je.Memo = b),
		(Je.Portal = r),
		(Je.Profiler = u),
		(Je.StrictMode = i),
		(Je.Suspense = v),
		(Je.SuspenseList = y),
		(Je.isAsyncMode = function () {
			return !1
		}),
		(Je.isConcurrentMode = function () {
			return !1
		}),
		(Je.isContextConsumer = function (S) {
			return _(S) === d
		}),
		(Je.isContextProvider = function (S) {
			return _(S) === c
		}),
		(Je.isElement = function (S) {
			return typeof S == 'object' && S !== null && S.$$typeof === n
		}),
		(Je.isForwardRef = function (S) {
			return _(S) === p
		}),
		(Je.isFragment = function (S) {
			return _(S) === l
		}),
		(Je.isLazy = function (S) {
			return _(S) === R
		}),
		(Je.isMemo = function (S) {
			return _(S) === b
		}),
		(Je.isPortal = function (S) {
			return _(S) === r
		}),
		(Je.isProfiler = function (S) {
			return _(S) === u
		}),
		(Je.isStrictMode = function (S) {
			return _(S) === i
		}),
		(Je.isSuspense = function (S) {
			return _(S) === v
		}),
		(Je.isSuspenseList = function (S) {
			return _(S) === y
		}),
		(Je.isValidElementType = function (S) {
			return (
				typeof S == 'string' ||
				typeof S == 'function' ||
				S === l ||
				S === u ||
				S === i ||
				S === v ||
				S === y ||
				S === A ||
				(typeof S == 'object' &&
					S !== null &&
					(S.$$typeof === R ||
						S.$$typeof === b ||
						S.$$typeof === c ||
						S.$$typeof === d ||
						S.$$typeof === p ||
						S.$$typeof === M ||
						S.getModuleId !== void 0))
			)
		}),
		(Je.typeOf = _),
		Je
	)
}
var Sg
function SM() {
	return (Sg || ((Sg = 1), (yd.exports = bM())), yd.exports)
}
var d4 = SM()
const { getOwnPropertyNames: _M, getOwnPropertySymbols: EM } = Object,
	{ hasOwnProperty: RM } = Object.prototype
function gd(n, r) {
	return function (i, u, c) {
		return n(i, u, c) && r(i, u, c)
	}
}
function rs(n) {
	return function (l, i, u) {
		if (!l || !i || typeof l != 'object' || typeof i != 'object')
			return n(l, i, u)
		const { cache: c } = u,
			d = c.get(l),
			h = c.get(i)
		if (d && h) return d === i && h === l
		;(c.set(l, i), c.set(i, l))
		const p = n(l, i, u)
		return (c.delete(l), c.delete(i), p)
	}
}
function xM(n) {
	return n != null ? n[Symbol.toStringTag] : void 0
}
function _g(n) {
	return _M(n).concat(EM(n))
}
const AM = Object.hasOwn || ((n, r) => RM.call(n, r))
function Qa(n, r) {
	return n === r || (!n && !r && n !== n && r !== r)
}
const wM = '__v',
	CM = '__o',
	TM = '_owner',
	{ getOwnPropertyDescriptor: Eg, keys: Rg } = Object
function OM(n, r) {
	return (
		n.byteLength === r.byteLength && vs(new Uint8Array(n), new Uint8Array(r))
	)
}
function MM(n, r, l) {
	let i = n.length
	if (r.length !== i) return !1
	for (; i-- > 0; ) if (!l.equals(n[i], r[i], i, i, n, r, l)) return !1
	return !0
}
function DM(n, r) {
	return (
		n.byteLength === r.byteLength &&
		vs(
			new Uint8Array(n.buffer, n.byteOffset, n.byteLength),
			new Uint8Array(r.buffer, r.byteOffset, r.byteLength)
		)
	)
}
function NM(n, r) {
	return Qa(n.getTime(), r.getTime())
}
function jM(n, r) {
	return (
		n.name === r.name &&
		n.message === r.message &&
		n.cause === r.cause &&
		n.stack === r.stack
	)
}
function LM(n, r) {
	return n === r
}
function xg(n, r, l) {
	const i = n.size
	if (i !== r.size) return !1
	if (!i) return !0
	const u = new Array(i),
		c = n.entries()
	let d,
		h,
		p = 0
	for (; (d = c.next()) && !d.done; ) {
		const v = r.entries()
		let y = !1,
			b = 0
		for (; (h = v.next()) && !h.done; ) {
			if (u[b]) {
				b++
				continue
			}
			const R = d.value,
				A = h.value
			if (
				l.equals(R[0], A[0], p, b, n, r, l) &&
				l.equals(R[1], A[1], R[0], A[0], n, r, l)
			) {
				y = u[b] = !0
				break
			}
			b++
		}
		if (!y) return !1
		p++
	}
	return !0
}
const UM = Qa
function zM(n, r, l) {
	const i = Rg(n)
	let u = i.length
	if (Rg(r).length !== u) return !1
	for (; u-- > 0; ) if (!sS(n, r, l, i[u])) return !1
	return !0
}
function so(n, r, l) {
	const i = _g(n)
	let u = i.length
	if (_g(r).length !== u) return !1
	let c, d, h
	for (; u-- > 0; )
		if (
			((c = i[u]),
			!sS(n, r, l, c) ||
				((d = Eg(n, c)),
				(h = Eg(r, c)),
				(d || h) &&
					(!d ||
						!h ||
						d.configurable !== h.configurable ||
						d.enumerable !== h.enumerable ||
						d.writable !== h.writable)))
		)
			return !1
	return !0
}
function BM(n, r) {
	return Qa(n.valueOf(), r.valueOf())
}
function PM(n, r) {
	return n.source === r.source && n.flags === r.flags
}
function Ag(n, r, l) {
	const i = n.size
	if (i !== r.size) return !1
	if (!i) return !0
	const u = new Array(i),
		c = n.values()
	let d, h
	for (; (d = c.next()) && !d.done; ) {
		const p = r.values()
		let v = !1,
			y = 0
		for (; (h = p.next()) && !h.done; ) {
			if (!u[y] && l.equals(d.value, h.value, d.value, h.value, n, r, l)) {
				v = u[y] = !0
				break
			}
			y++
		}
		if (!v) return !1
	}
	return !0
}
function vs(n, r) {
	let l = n.byteLength
	if (r.byteLength !== l || n.byteOffset !== r.byteOffset) return !1
	for (; l-- > 0; ) if (n[l] !== r[l]) return !1
	return !0
}
function VM(n, r) {
	return (
		n.hostname === r.hostname &&
		n.pathname === r.pathname &&
		n.protocol === r.protocol &&
		n.port === r.port &&
		n.hash === r.hash &&
		n.username === r.username &&
		n.password === r.password
	)
}
function sS(n, r, l, i) {
	return (i === TM || i === CM || i === wM) && (n.$$typeof || r.$$typeof)
		? !0
		: AM(r, i) && l.equals(n[i], r[i], i, i, n, r, l)
}
const kM = '[object ArrayBuffer]',
	HM = '[object Arguments]',
	qM = '[object Boolean]',
	GM = '[object DataView]',
	FM = '[object Date]',
	$M = '[object Error]',
	IM = '[object Map]',
	YM = '[object Number]',
	QM = '[object Object]',
	KM = '[object RegExp]',
	XM = '[object Set]',
	ZM = '[object String]',
	JM = {
		'[object Int8Array]': !0,
		'[object Uint8Array]': !0,
		'[object Uint8ClampedArray]': !0,
		'[object Int16Array]': !0,
		'[object Uint16Array]': !0,
		'[object Int32Array]': !0,
		'[object Uint32Array]': !0,
		'[object Float16Array]': !0,
		'[object Float32Array]': !0,
		'[object Float64Array]': !0,
		'[object BigInt64Array]': !0,
		'[object BigUint64Array]': !0
	},
	WM = '[object URL]',
	e2 = Object.prototype.toString
function t2({
	areArrayBuffersEqual: n,
	areArraysEqual: r,
	areDataViewsEqual: l,
	areDatesEqual: i,
	areErrorsEqual: u,
	areFunctionsEqual: c,
	areMapsEqual: d,
	areNumbersEqual: h,
	areObjectsEqual: p,
	arePrimitiveWrappersEqual: v,
	areRegExpsEqual: y,
	areSetsEqual: b,
	areTypedArraysEqual: R,
	areUrlsEqual: A,
	unknownTagComparators: M
}) {
	return function (S, x, C) {
		if (S === x) return !0
		if (S == null || x == null) return !1
		const T = typeof S
		if (T !== typeof x) return !1
		if (T !== 'object')
			return T === 'number' ? h(S, x, C) : T === 'function' ? c(S, x, C) : !1
		const j = S.constructor
		if (j !== x.constructor) return !1
		if (j === Object) return p(S, x, C)
		if (Array.isArray(S)) return r(S, x, C)
		if (j === Date) return i(S, x, C)
		if (j === RegExp) return y(S, x, C)
		if (j === Map) return d(S, x, C)
		if (j === Set) return b(S, x, C)
		const L = e2.call(S)
		if (L === FM) return i(S, x, C)
		if (L === KM) return y(S, x, C)
		if (L === IM) return d(S, x, C)
		if (L === XM) return b(S, x, C)
		if (L === QM)
			return (
				typeof S.then != 'function' && typeof x.then != 'function' && p(S, x, C)
			)
		if (L === WM) return A(S, x, C)
		if (L === $M) return u(S, x, C)
		if (L === HM) return p(S, x, C)
		if (JM[L]) return R(S, x, C)
		if (L === kM) return n(S, x, C)
		if (L === GM) return l(S, x, C)
		if (L === qM || L === YM || L === ZM) return v(S, x, C)
		if (M) {
			let Q = M[L]
			if (!Q) {
				const te = xM(S)
				te && (Q = M[te])
			}
			if (Q) return Q(S, x, C)
		}
		return !1
	}
}
function n2({ circular: n, createCustomConfig: r, strict: l }) {
	let i = {
		areArrayBuffersEqual: OM,
		areArraysEqual: l ? so : MM,
		areDataViewsEqual: DM,
		areDatesEqual: NM,
		areErrorsEqual: jM,
		areFunctionsEqual: LM,
		areMapsEqual: l ? gd(xg, so) : xg,
		areNumbersEqual: UM,
		areObjectsEqual: l ? so : zM,
		arePrimitiveWrappersEqual: BM,
		areRegExpsEqual: PM,
		areSetsEqual: l ? gd(Ag, so) : Ag,
		areTypedArraysEqual: l ? gd(vs, so) : vs,
		areUrlsEqual: VM,
		unknownTagComparators: void 0
	}
	if ((r && (i = Object.assign({}, i, r(i))), n)) {
		const u = rs(i.areArraysEqual),
			c = rs(i.areMapsEqual),
			d = rs(i.areObjectsEqual),
			h = rs(i.areSetsEqual)
		i = Object.assign({}, i, {
			areArraysEqual: u,
			areMapsEqual: c,
			areObjectsEqual: d,
			areSetsEqual: h
		})
	}
	return i
}
function r2(n) {
	return function (r, l, i, u, c, d, h) {
		return n(r, l, h)
	}
}
function a2({
	circular: n,
	comparator: r,
	createState: l,
	equals: i,
	strict: u
}) {
	if (l)
		return function (h, p) {
			const { cache: v = n ? new WeakMap() : void 0, meta: y } = l()
			return r(h, p, { cache: v, equals: i, meta: y, strict: u })
		}
	if (n)
		return function (h, p) {
			return r(h, p, {
				cache: new WeakMap(),
				equals: i,
				meta: void 0,
				strict: u
			})
		}
	const c = { cache: void 0, equals: i, meta: void 0, strict: u }
	return function (h, p) {
		return r(h, p, c)
	}
}
const l2 = ya()
ya({ strict: !0 })
ya({ circular: !0 })
ya({ circular: !0, strict: !0 })
ya({ createInternalComparator: () => Qa })
ya({ strict: !0, createInternalComparator: () => Qa })
ya({ circular: !0, createInternalComparator: () => Qa })
ya({ circular: !0, createInternalComparator: () => Qa, strict: !0 })
function ya(n = {}) {
	const {
			circular: r = !1,
			createInternalComparator: l,
			createState: i,
			strict: u = !1
		} = n,
		c = n2(n),
		d = t2(c),
		h = l ? l(d) : r2(d)
	return a2({
		circular: r,
		comparator: d,
		createState: i,
		equals: h,
		strict: u
	})
}
function i2(n) {
	typeof requestAnimationFrame < 'u' && requestAnimationFrame(n)
}
function wg(n) {
	var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
		l = -1,
		i = function u(c) {
			;(l < 0 && (l = c), c - l > r ? (n(c), (l = -1)) : i2(u))
		}
	requestAnimationFrame(i)
}
function Ld(n) {
	'@babel/helpers - typeof'
	return (
		(Ld =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (r) {
						return typeof r
					}
				: function (r) {
						return r &&
							typeof Symbol == 'function' &&
							r.constructor === Symbol &&
							r !== Symbol.prototype
							? 'symbol'
							: typeof r
					}),
		Ld(n)
	)
}
function o2(n) {
	return f2(n) || c2(n) || s2(n) || u2()
}
function u2() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function s2(n, r) {
	if (n) {
		if (typeof n == 'string') return Cg(n, r)
		var l = Object.prototype.toString.call(n).slice(8, -1)
		if (
			(l === 'Object' && n.constructor && (l = n.constructor.name),
			l === 'Map' || l === 'Set')
		)
			return Array.from(n)
		if (l === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
			return Cg(n, r)
	}
}
function Cg(n, r) {
	;(r == null || r > n.length) && (r = n.length)
	for (var l = 0, i = new Array(r); l < r; l++) i[l] = n[l]
	return i
}
function c2(n) {
	if (
		(typeof Symbol < 'u' && n[Symbol.iterator] != null) ||
		n['@@iterator'] != null
	)
		return Array.from(n)
}
function f2(n) {
	if (Array.isArray(n)) return n
}
function d2() {
	var n = {},
		r = function () {
			return null
		},
		l = !1,
		i = function u(c) {
			if (!l) {
				if (Array.isArray(c)) {
					if (!c.length) return
					var d = c,
						h = o2(d),
						p = h[0],
						v = h.slice(1)
					if (typeof p == 'number') {
						wg(u.bind(null, v), p)
						return
					}
					;(u(p), wg(u.bind(null, v)))
					return
				}
				;(Ld(c) === 'object' && ((n = c), r(n)), typeof c == 'function' && c())
			}
		}
	return {
		stop: function () {
			l = !0
		},
		start: function (c) {
			;((l = !1), i(c))
		},
		subscribe: function (c) {
			return (
				(r = c),
				function () {
					r = function () {
						return null
					}
				}
			)
		}
	}
}
function Eo(n) {
	'@babel/helpers - typeof'
	return (
		(Eo =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (r) {
						return typeof r
					}
				: function (r) {
						return r &&
							typeof Symbol == 'function' &&
							r.constructor === Symbol &&
							r !== Symbol.prototype
							? 'symbol'
							: typeof r
					}),
		Eo(n)
	)
}
function Tg(n, r) {
	var l = Object.keys(n)
	if (Object.getOwnPropertySymbols) {
		var i = Object.getOwnPropertySymbols(n)
		;(r &&
			(i = i.filter(function (u) {
				return Object.getOwnPropertyDescriptor(n, u).enumerable
			})),
			l.push.apply(l, i))
	}
	return l
}
function Og(n) {
	for (var r = 1; r < arguments.length; r++) {
		var l = arguments[r] != null ? arguments[r] : {}
		r % 2
			? Tg(Object(l), !0).forEach(function (i) {
					cS(n, i, l[i])
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
				: Tg(Object(l)).forEach(function (i) {
						Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(l, i))
					})
	}
	return n
}
function cS(n, r, l) {
	return (
		(r = h2(r)),
		r in n
			? Object.defineProperty(n, r, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (n[r] = l),
		n
	)
}
function h2(n) {
	var r = p2(n, 'string')
	return Eo(r) === 'symbol' ? r : String(r)
}
function p2(n, r) {
	if (Eo(n) !== 'object' || n === null) return n
	var l = n[Symbol.toPrimitive]
	if (l !== void 0) {
		var i = l.call(n, r)
		if (Eo(i) !== 'object') return i
		throw new TypeError('@@toPrimitive must return a primitive value.')
	}
	return (r === 'string' ? String : Number)(n)
}
var m2 = function (r, l) {
		return [Object.keys(r), Object.keys(l)].reduce(function (i, u) {
			return i.filter(function (c) {
				return u.includes(c)
			})
		})
	},
	v2 = function (r) {
		return r
	},
	y2 = function (r) {
		return r.replace(/([A-Z])/g, function (l) {
			return '-'.concat(l.toLowerCase())
		})
	},
	mo = function (r, l) {
		return Object.keys(l).reduce(function (i, u) {
			return Og(Og({}, i), {}, cS({}, u, r(u, l[u])))
		}, {})
	},
	Mg = function (r, l, i) {
		return r
			.map(function (u) {
				return ''.concat(y2(u), ' ').concat(l, 'ms ').concat(i)
			})
			.join(',')
	}
function g2(n, r) {
	return _2(n) || S2(n, r) || fS(n, r) || b2()
}
function b2() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function S2(n, r) {
	var l =
		n == null
			? null
			: (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator']
	if (l != null) {
		var i,
			u,
			c,
			d,
			h = [],
			p = !0,
			v = !1
		try {
			if (((c = (l = l.call(n)).next), r !== 0))
				for (
					;
					!(p = (i = c.call(l)).done) && (h.push(i.value), h.length !== r);
					p = !0
				);
		} catch (y) {
			;((v = !0), (u = y))
		} finally {
			try {
				if (!p && l.return != null && ((d = l.return()), Object(d) !== d))
					return
			} finally {
				if (v) throw u
			}
		}
		return h
	}
}
function _2(n) {
	if (Array.isArray(n)) return n
}
function E2(n) {
	return A2(n) || x2(n) || fS(n) || R2()
}
function R2() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function fS(n, r) {
	if (n) {
		if (typeof n == 'string') return Ud(n, r)
		var l = Object.prototype.toString.call(n).slice(8, -1)
		if (
			(l === 'Object' && n.constructor && (l = n.constructor.name),
			l === 'Map' || l === 'Set')
		)
			return Array.from(n)
		if (l === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
			return Ud(n, r)
	}
}
function x2(n) {
	if (
		(typeof Symbol < 'u' && n[Symbol.iterator] != null) ||
		n['@@iterator'] != null
	)
		return Array.from(n)
}
function A2(n) {
	if (Array.isArray(n)) return Ud(n)
}
function Ud(n, r) {
	;(r == null || r > n.length) && (r = n.length)
	for (var l = 0, i = new Array(r); l < r; l++) i[l] = n[l]
	return i
}
var ys = 1e-4,
	dS = function (r, l) {
		return [0, 3 * r, 3 * l - 6 * r, 3 * r - 3 * l + 1]
	},
	hS = function (r, l) {
		return r
			.map(function (i, u) {
				return i * Math.pow(l, u)
			})
			.reduce(function (i, u) {
				return i + u
			})
	},
	Dg = function (r, l) {
		return function (i) {
			var u = dS(r, l)
			return hS(u, i)
		}
	},
	w2 = function (r, l) {
		return function (i) {
			var u = dS(r, l),
				c = [].concat(
					E2(
						u
							.map(function (d, h) {
								return d * h
							})
							.slice(1)
					),
					[0]
				)
			return hS(c, i)
		}
	},
	Ng = function () {
		for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++)
			l[i] = arguments[i]
		var u = l[0],
			c = l[1],
			d = l[2],
			h = l[3]
		if (l.length === 1)
			switch (l[0]) {
				case 'linear':
					;((u = 0), (c = 0), (d = 1), (h = 1))
					break
				case 'ease':
					;((u = 0.25), (c = 0.1), (d = 0.25), (h = 1))
					break
				case 'ease-in':
					;((u = 0.42), (c = 0), (d = 1), (h = 1))
					break
				case 'ease-out':
					;((u = 0.42), (c = 0), (d = 0.58), (h = 1))
					break
				case 'ease-in-out':
					;((u = 0), (c = 0), (d = 0.58), (h = 1))
					break
				default: {
					var p = l[0].split('(')
					if (
						p[0] === 'cubic-bezier' &&
						p[1].split(')')[0].split(',').length === 4
					) {
						var v = p[1]
								.split(')')[0]
								.split(',')
								.map(function (S) {
									return parseFloat(S)
								}),
							y = g2(v, 4)
						;((u = y[0]), (c = y[1]), (d = y[2]), (h = y[3]))
					}
				}
			}
		var b = Dg(u, d),
			R = Dg(c, h),
			A = w2(u, d),
			M = function (x) {
				return x > 1 ? 1 : x < 0 ? 0 : x
			},
			_ = function (x) {
				for (var C = x > 1 ? 1 : x, T = C, j = 0; j < 8; ++j) {
					var L = b(T) - C,
						Q = A(T)
					if (Math.abs(L - C) < ys || Q < ys) return R(T)
					T = M(T - L / Q)
				}
				return R(T)
			}
		return ((_.isStepper = !1), _)
	},
	C2 = function () {
		var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			l = r.stiff,
			i = l === void 0 ? 100 : l,
			u = r.damping,
			c = u === void 0 ? 8 : u,
			d = r.dt,
			h = d === void 0 ? 17 : d,
			p = function (y, b, R) {
				var A = -(y - b) * i,
					M = R * c,
					_ = R + ((A - M) * h) / 1e3,
					S = (R * h) / 1e3 + y
				return Math.abs(S - b) < ys && Math.abs(_) < ys ? [b, 0] : [S, _]
			}
		return ((p.isStepper = !0), (p.dt = h), p)
	},
	T2 = function () {
		for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++)
			l[i] = arguments[i]
		var u = l[0]
		if (typeof u == 'string')
			switch (u) {
				case 'ease':
				case 'ease-in-out':
				case 'ease-out':
				case 'ease-in':
				case 'linear':
					return Ng(u)
				case 'spring':
					return C2()
				default:
					if (u.split('(')[0] === 'cubic-bezier') return Ng(u)
			}
		return typeof u == 'function' ? u : null
	}
function Ro(n) {
	'@babel/helpers - typeof'
	return (
		(Ro =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (r) {
						return typeof r
					}
				: function (r) {
						return r &&
							typeof Symbol == 'function' &&
							r.constructor === Symbol &&
							r !== Symbol.prototype
							? 'symbol'
							: typeof r
					}),
		Ro(n)
	)
}
function jg(n) {
	return D2(n) || M2(n) || pS(n) || O2()
}
function O2() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function M2(n) {
	if (
		(typeof Symbol < 'u' && n[Symbol.iterator] != null) ||
		n['@@iterator'] != null
	)
		return Array.from(n)
}
function D2(n) {
	if (Array.isArray(n)) return Bd(n)
}
function Lg(n, r) {
	var l = Object.keys(n)
	if (Object.getOwnPropertySymbols) {
		var i = Object.getOwnPropertySymbols(n)
		;(r &&
			(i = i.filter(function (u) {
				return Object.getOwnPropertyDescriptor(n, u).enumerable
			})),
			l.push.apply(l, i))
	}
	return l
}
function Qt(n) {
	for (var r = 1; r < arguments.length; r++) {
		var l = arguments[r] != null ? arguments[r] : {}
		r % 2
			? Lg(Object(l), !0).forEach(function (i) {
					zd(n, i, l[i])
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
				: Lg(Object(l)).forEach(function (i) {
						Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(l, i))
					})
	}
	return n
}
function zd(n, r, l) {
	return (
		(r = N2(r)),
		r in n
			? Object.defineProperty(n, r, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (n[r] = l),
		n
	)
}
function N2(n) {
	var r = j2(n, 'string')
	return Ro(r) === 'symbol' ? r : String(r)
}
function j2(n, r) {
	if (Ro(n) !== 'object' || n === null) return n
	var l = n[Symbol.toPrimitive]
	if (l !== void 0) {
		var i = l.call(n, r)
		if (Ro(i) !== 'object') return i
		throw new TypeError('@@toPrimitive must return a primitive value.')
	}
	return (r === 'string' ? String : Number)(n)
}
function L2(n, r) {
	return B2(n) || z2(n, r) || pS(n, r) || U2()
}
function U2() {
	throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function pS(n, r) {
	if (n) {
		if (typeof n == 'string') return Bd(n, r)
		var l = Object.prototype.toString.call(n).slice(8, -1)
		if (
			(l === 'Object' && n.constructor && (l = n.constructor.name),
			l === 'Map' || l === 'Set')
		)
			return Array.from(n)
		if (l === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
			return Bd(n, r)
	}
}
function Bd(n, r) {
	;(r == null || r > n.length) && (r = n.length)
	for (var l = 0, i = new Array(r); l < r; l++) i[l] = n[l]
	return i
}
function z2(n, r) {
	var l =
		n == null
			? null
			: (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator']
	if (l != null) {
		var i,
			u,
			c,
			d,
			h = [],
			p = !0,
			v = !1
		try {
			if (((c = (l = l.call(n)).next), r !== 0))
				for (
					;
					!(p = (i = c.call(l)).done) && (h.push(i.value), h.length !== r);
					p = !0
				);
		} catch (y) {
			;((v = !0), (u = y))
		} finally {
			try {
				if (!p && l.return != null && ((d = l.return()), Object(d) !== d))
					return
			} finally {
				if (v) throw u
			}
		}
		return h
	}
}
function B2(n) {
	if (Array.isArray(n)) return n
}
var gs = function (r, l, i) {
		return r + (l - r) * i
	},
	Pd = function (r) {
		var l = r.from,
			i = r.to
		return l !== i
	},
	P2 = function n(r, l, i) {
		var u = mo(function (c, d) {
			if (Pd(d)) {
				var h = r(d.from, d.to, d.velocity),
					p = L2(h, 2),
					v = p[0],
					y = p[1]
				return Qt(Qt({}, d), {}, { from: v, velocity: y })
			}
			return d
		}, l)
		return i < 1
			? mo(function (c, d) {
					return Pd(d)
						? Qt(
								Qt({}, d),
								{},
								{
									velocity: gs(d.velocity, u[c].velocity, i),
									from: gs(d.from, u[c].from, i)
								}
							)
						: d
				}, l)
			: n(r, u, i - 1)
	}
const V2 = function (n, r, l, i, u) {
	var c = m2(n, r),
		d = c.reduce(function (S, x) {
			return Qt(Qt({}, S), {}, zd({}, x, [n[x], r[x]]))
		}, {}),
		h = c.reduce(function (S, x) {
			return Qt(Qt({}, S), {}, zd({}, x, { from: n[x], velocity: 0, to: r[x] }))
		}, {}),
		p = -1,
		v,
		y,
		b = function () {
			return null
		},
		R = function () {
			return mo(function (x, C) {
				return C.from
			}, h)
		},
		A = function () {
			return !Object.values(h).filter(Pd).length
		},
		M = function (x) {
			v || (v = x)
			var C = x - v,
				T = C / l.dt
			;((h = P2(l, h, T)),
				u(Qt(Qt(Qt({}, n), r), R())),
				(v = x),
				A() || (p = requestAnimationFrame(b)))
		},
		_ = function (x) {
			y || (y = x)
			var C = (x - y) / i,
				T = mo(function (L, Q) {
					return gs.apply(void 0, jg(Q).concat([l(C)]))
				}, d)
			if ((u(Qt(Qt(Qt({}, n), r), T)), C < 1)) p = requestAnimationFrame(b)
			else {
				var j = mo(function (L, Q) {
					return gs.apply(void 0, jg(Q).concat([l(1)]))
				}, d)
				u(Qt(Qt(Qt({}, n), r), j))
			}
		}
	return (
		(b = l.isStepper ? M : _),
		function () {
			return (
				requestAnimationFrame(b),
				function () {
					cancelAnimationFrame(p)
				}
			)
		}
	)
}
function Yl(n) {
	'@babel/helpers - typeof'
	return (
		(Yl =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? function (r) {
						return typeof r
					}
				: function (r) {
						return r &&
							typeof Symbol == 'function' &&
							r.constructor === Symbol &&
							r !== Symbol.prototype
							? 'symbol'
							: typeof r
					}),
		Yl(n)
	)
}
var k2 = [
	'children',
	'begin',
	'duration',
	'attributeName',
	'easing',
	'isActive',
	'steps',
	'from',
	'to',
	'canBegin',
	'onAnimationEnd',
	'shouldReAnimate',
	'onAnimationReStart'
]
function H2(n, r) {
	if (n == null) return {}
	var l = q2(n, r),
		i,
		u
	if (Object.getOwnPropertySymbols) {
		var c = Object.getOwnPropertySymbols(n)
		for (u = 0; u < c.length; u++)
			((i = c[u]),
				!(r.indexOf(i) >= 0) &&
					Object.prototype.propertyIsEnumerable.call(n, i) &&
					(l[i] = n[i]))
	}
	return l
}
function q2(n, r) {
	if (n == null) return {}
	var l = {},
		i = Object.keys(n),
		u,
		c
	for (c = 0; c < i.length; c++)
		((u = i[c]), !(r.indexOf(u) >= 0) && (l[u] = n[u]))
	return l
}
function bd(n) {
	return I2(n) || $2(n) || F2(n) || G2()
}
function G2() {
	throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function F2(n, r) {
	if (n) {
		if (typeof n == 'string') return Vd(n, r)
		var l = Object.prototype.toString.call(n).slice(8, -1)
		if (
			(l === 'Object' && n.constructor && (l = n.constructor.name),
			l === 'Map' || l === 'Set')
		)
			return Array.from(n)
		if (l === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))
			return Vd(n, r)
	}
}
function $2(n) {
	if (
		(typeof Symbol < 'u' && n[Symbol.iterator] != null) ||
		n['@@iterator'] != null
	)
		return Array.from(n)
}
function I2(n) {
	if (Array.isArray(n)) return Vd(n)
}
function Vd(n, r) {
	;(r == null || r > n.length) && (r = n.length)
	for (var l = 0, i = new Array(r); l < r; l++) i[l] = n[l]
	return i
}
function Ug(n, r) {
	var l = Object.keys(n)
	if (Object.getOwnPropertySymbols) {
		var i = Object.getOwnPropertySymbols(n)
		;(r &&
			(i = i.filter(function (u) {
				return Object.getOwnPropertyDescriptor(n, u).enumerable
			})),
			l.push.apply(l, i))
	}
	return l
}
function Xn(n) {
	for (var r = 1; r < arguments.length; r++) {
		var l = arguments[r] != null ? arguments[r] : {}
		r % 2
			? Ug(Object(l), !0).forEach(function (i) {
					ho(n, i, l[i])
				})
			: Object.getOwnPropertyDescriptors
				? Object.defineProperties(n, Object.getOwnPropertyDescriptors(l))
				: Ug(Object(l)).forEach(function (i) {
						Object.defineProperty(n, i, Object.getOwnPropertyDescriptor(l, i))
					})
	}
	return n
}
function ho(n, r, l) {
	return (
		(r = mS(r)),
		r in n
			? Object.defineProperty(n, r, {
					value: l,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (n[r] = l),
		n
	)
}
function Y2(n, r) {
	if (!(n instanceof r))
		throw new TypeError('Cannot call a class as a function')
}
function Q2(n, r) {
	for (var l = 0; l < r.length; l++) {
		var i = r[l]
		;((i.enumerable = i.enumerable || !1),
			(i.configurable = !0),
			'value' in i && (i.writable = !0),
			Object.defineProperty(n, mS(i.key), i))
	}
}
function K2(n, r, l) {
	return (
		r && Q2(n.prototype, r),
		Object.defineProperty(n, 'prototype', { writable: !1 }),
		n
	)
}
function mS(n) {
	var r = X2(n, 'string')
	return Yl(r) === 'symbol' ? r : String(r)
}
function X2(n, r) {
	if (Yl(n) !== 'object' || n === null) return n
	var l = n[Symbol.toPrimitive]
	if (l !== void 0) {
		var i = l.call(n, r)
		if (Yl(i) !== 'object') return i
		throw new TypeError('@@toPrimitive must return a primitive value.')
	}
	return (r === 'string' ? String : Number)(n)
}
function Z2(n, r) {
	if (typeof r != 'function' && r !== null)
		throw new TypeError('Super expression must either be null or a function')
	;((n.prototype = Object.create(r && r.prototype, {
		constructor: { value: n, writable: !0, configurable: !0 }
	})),
		Object.defineProperty(n, 'prototype', { writable: !1 }),
		r && kd(n, r))
}
function kd(n, r) {
	return (
		(kd = Object.setPrototypeOf
			? Object.setPrototypeOf.bind()
			: function (i, u) {
					return ((i.__proto__ = u), i)
				}),
		kd(n, r)
	)
}
function J2(n) {
	var r = W2()
	return function () {
		var i = bs(n),
			u
		if (r) {
			var c = bs(this).constructor
			u = Reflect.construct(i, arguments, c)
		} else u = i.apply(this, arguments)
		return Hd(this, u)
	}
}
function Hd(n, r) {
	if (r && (Yl(r) === 'object' || typeof r == 'function')) return r
	if (r !== void 0)
		throw new TypeError(
			'Derived constructors may only return object or undefined'
		)
	return qd(n)
}
function qd(n) {
	if (n === void 0)
		throw new ReferenceError(
			"this hasn't been initialised - super() hasn't been called"
		)
	return n
}
function W2() {
	if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham)
		return !1
	if (typeof Proxy == 'function') return !0
	try {
		return (
			Boolean.prototype.valueOf.call(
				Reflect.construct(Boolean, [], function () {})
			),
			!0
		)
	} catch {
		return !1
	}
}
function bs(n) {
	return (
		(bs = Object.setPrototypeOf
			? Object.getPrototypeOf.bind()
			: function (l) {
					return l.__proto__ || Object.getPrototypeOf(l)
				}),
		bs(n)
	)
}
var Vh = (function (n) {
	Z2(l, n)
	var r = J2(l)
	function l(i, u) {
		var c
		;(Y2(this, l), (c = r.call(this, i, u)))
		var d = c.props,
			h = d.isActive,
			p = d.attributeName,
			v = d.from,
			y = d.to,
			b = d.steps,
			R = d.children,
			A = d.duration
		if (
			((c.handleStyleChange = c.handleStyleChange.bind(qd(c))),
			(c.changeStyle = c.changeStyle.bind(qd(c))),
			!h || A <= 0)
		)
			return (
				(c.state = { style: {} }),
				typeof R == 'function' && (c.state = { style: y }),
				Hd(c)
			)
		if (b && b.length) c.state = { style: b[0].style }
		else if (v) {
			if (typeof R == 'function') return ((c.state = { style: v }), Hd(c))
			c.state = { style: p ? ho({}, p, v) : v }
		} else c.state = { style: {} }
		return c
	}
	return (
		K2(l, [
			{
				key: 'componentDidMount',
				value: function () {
					var u = this.props,
						c = u.isActive,
						d = u.canBegin
					;((this.mounted = !0), !(!c || !d) && this.runAnimation(this.props))
				}
			},
			{
				key: 'componentDidUpdate',
				value: function (u) {
					var c = this.props,
						d = c.isActive,
						h = c.canBegin,
						p = c.attributeName,
						v = c.shouldReAnimate,
						y = c.to,
						b = c.from,
						R = this.state.style
					if (h) {
						if (!d) {
							var A = { style: p ? ho({}, p, y) : y }
							this.state &&
								R &&
								((p && R[p] !== y) || (!p && R !== y)) &&
								this.setState(A)
							return
						}
						if (!(l2(u.to, y) && u.canBegin && u.isActive)) {
							var M = !u.canBegin || !u.isActive
							;(this.manager && this.manager.stop(),
								this.stopJSAnimation && this.stopJSAnimation())
							var _ = M || v ? b : u.to
							if (this.state && R) {
								var S = { style: p ? ho({}, p, _) : _ }
								;((p && R[p] !== _) || (!p && R !== _)) && this.setState(S)
							}
							this.runAnimation(
								Xn(Xn({}, this.props), {}, { from: _, begin: 0 })
							)
						}
					}
				}
			},
			{
				key: 'componentWillUnmount',
				value: function () {
					this.mounted = !1
					var u = this.props.onAnimationEnd
					;(this.unSubscribe && this.unSubscribe(),
						this.manager && (this.manager.stop(), (this.manager = null)),
						this.stopJSAnimation && this.stopJSAnimation(),
						u && u())
				}
			},
			{
				key: 'handleStyleChange',
				value: function (u) {
					this.changeStyle(u)
				}
			},
			{
				key: 'changeStyle',
				value: function (u) {
					this.mounted && this.setState({ style: u })
				}
			},
			{
				key: 'runJSAnimation',
				value: function (u) {
					var c = this,
						d = u.from,
						h = u.to,
						p = u.duration,
						v = u.easing,
						y = u.begin,
						b = u.onAnimationEnd,
						R = u.onAnimationStart,
						A = V2(d, h, T2(v), p, this.changeStyle),
						M = function () {
							c.stopJSAnimation = A()
						}
					this.manager.start([R, y, M, p, b])
				}
			},
			{
				key: 'runStepAnimation',
				value: function (u) {
					var c = this,
						d = u.steps,
						h = u.begin,
						p = u.onAnimationStart,
						v = d[0],
						y = v.style,
						b = v.duration,
						R = b === void 0 ? 0 : b,
						A = function (_, S, x) {
							if (x === 0) return _
							var C = S.duration,
								T = S.easing,
								j = T === void 0 ? 'ease' : T,
								L = S.style,
								Q = S.properties,
								te = S.onAnimationEnd,
								fe = x > 0 ? d[x - 1] : S,
								_e = Q || Object.keys(L)
							if (typeof j == 'function' || j === 'spring')
								return [].concat(bd(_), [
									c.runJSAnimation.bind(c, {
										from: fe.style,
										to: L,
										duration: C,
										easing: j
									}),
									C
								])
							var be = Mg(_e, C, j),
								de = Xn(Xn(Xn({}, fe.style), L), {}, { transition: be })
							return [].concat(bd(_), [de, C, te]).filter(v2)
						}
					return this.manager.start(
						[p].concat(bd(d.reduce(A, [y, Math.max(R, h)])), [u.onAnimationEnd])
					)
				}
			},
			{
				key: 'runAnimation',
				value: function (u) {
					this.manager || (this.manager = d2())
					var c = u.begin,
						d = u.duration,
						h = u.attributeName,
						p = u.to,
						v = u.easing,
						y = u.onAnimationStart,
						b = u.onAnimationEnd,
						R = u.steps,
						A = u.children,
						M = this.manager
					if (
						((this.unSubscribe = M.subscribe(this.handleStyleChange)),
						typeof v == 'function' || typeof A == 'function' || v === 'spring')
					) {
						this.runJSAnimation(u)
						return
					}
					if (R.length > 1) {
						this.runStepAnimation(u)
						return
					}
					var _ = h ? ho({}, h, p) : p,
						S = Mg(Object.keys(_), d, v)
					M.start([y, c, Xn(Xn({}, _), {}, { transition: S }), d, b])
				}
			},
			{
				key: 'render',
				value: function () {
					var u = this.props,
						c = u.children
					u.begin
					var d = u.duration
					;(u.attributeName, u.easing)
					var h = u.isActive
					;(u.steps,
						u.from,
						u.to,
						u.canBegin,
						u.onAnimationEnd,
						u.shouldReAnimate,
						u.onAnimationReStart)
					var p = H2(u, k2),
						v = m.Children.count(c),
						y = this.state.style
					if (typeof c == 'function') return c(y)
					if (!h || v === 0 || d <= 0) return c
					var b = function (A) {
						var M = A.props,
							_ = M.style,
							S = _ === void 0 ? {} : _,
							x = M.className,
							C = m.cloneElement(
								A,
								Xn(Xn({}, p), {}, { style: Xn(Xn({}, S), y), className: x })
							)
						return C
					}
					return v === 1
						? b(m.Children.only(c))
						: ue.createElement(
								'div',
								null,
								m.Children.map(c, function (R) {
									return b(R)
								})
							)
				}
			}
		]),
		l
	)
})(m.PureComponent)
Vh.displayName = 'Animate'
Vh.defaultProps = {
	begin: 0,
	duration: 1e3,
	from: '',
	to: '',
	attributeName: '',
	easing: 'ease',
	isActive: !0,
	canBegin: !0,
	steps: [],
	onAnimationEnd: function () {},
	onAnimationStart: function () {}
}
Vh.propTypes = {
	from: Ze.oneOfType([Ze.object, Ze.string]),
	to: Ze.oneOfType([Ze.object, Ze.string]),
	attributeName: Ze.string,
	duration: Ze.number,
	begin: Ze.number,
	easing: Ze.oneOfType([Ze.string, Ze.func]),
	steps: Ze.arrayOf(
		Ze.shape({
			duration: Ze.number.isRequired,
			style: Ze.object.isRequired,
			easing: Ze.oneOfType([
				Ze.oneOf(['ease', 'ease-in', 'ease-out', 'ease-in-out', 'linear']),
				Ze.func
			]),
			properties: Ze.arrayOf('string'),
			onAnimationEnd: Ze.func
		})
	),
	children: Ze.oneOfType([Ze.node, Ze.func]),
	isActive: Ze.bool,
	canBegin: Ze.bool,
	onAnimationEnd: Ze.func,
	shouldReAnimate: Ze.bool,
	onAnimationStart: Ze.func,
	onAnimationReStart: Ze.func
}
/**
 * react-table
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function h4(n, r) {
	return n ? (eD(n) ? m.createElement(n, r) : n) : null
}
function eD(n) {
	return tD(n) || typeof n == 'function' || nD(n)
}
function tD(n) {
	return (
		typeof n == 'function' &&
		(() => {
			const r = Object.getPrototypeOf(n)
			return r.prototype && r.prototype.isReactComponent
		})()
	)
}
function nD(n) {
	return (
		typeof n == 'object' &&
		typeof n.$$typeof == 'symbol' &&
		['react.memo', 'react.forward_ref'].includes(n.$$typeof.description)
	)
}
function rD(n) {
	const r = {
			state: {},
			onStateChange: () => {},
			renderFallbackValue: null,
			...n
		},
		[l] = m.useState(() => ({ current: Q1(r) })),
		[i, u] = m.useState(() => l.current.initialState)
	return (
		l.current.setOptions((c) => ({
			...c,
			...n,
			state: { ...i, ...n.state },
			onStateChange: (d) => {
				;(u(d), n.onStateChange == null || n.onStateChange(d))
			}
		})),
		l.current
	)
}
var aD = Object.defineProperty,
	Do = (n, r) => aD(n, 'name', { value: r, configurable: !0 }),
	lD = Do(() => {
		const n = m.useRef(!0)
		return (
			m.useEffect(() => {
				n.current = !1
			}, []),
			n.current
		)
	}, 'useIsFirstRender'),
	iD = Do(
		({ columns: n, columnFilters: r }) =>
			(r == null
				? void 0
				: r.map((l) => {
						var i, u, c, d
						const h =
							l.operator ??
							((u =
								(i = n.find((y) => y.id === l.id)) == null ? void 0 : i.meta) ==
							null
								? void 0
								: u.filterOperator)
						if ((h === 'and' || h === 'or') && Array.isArray(l.value))
							return {
								key:
									((d =
										(c = n.find((b) => b.id === l.id)) == null
											? void 0
											: c.meta) == null
										? void 0
										: d.filterKey) ?? l.id,
								operator: h,
								value: l.value
							}
						const v = Array.isArray(l.value) ? 'in' : 'eq'
						return { field: l.id, operator: h ?? v, value: l.value }
					})) ?? [],
		'columnFiltersToCrudFilters'
	),
	oD = Do(
		({ nextFilters: n, coreFilters: r }) =>
			r
				.filter(
					(i) =>
						!n.some((u) => {
							const c = i.operator === 'and' || i.operator === 'or',
								d = u.operator === 'and' || u.operator === 'or',
								h = i.operator === u.operator,
								p = c && d && i.key === u.key,
								v = !c && !d && i.field === u.field
							return h && (p || v)
						})
				)
				.map((i) =>
					i.operator === 'and' || i.operator === 'or'
						? { key: i.key, operator: i.operator, value: [] }
						: { field: i.field, operator: i.operator, value: void 0 }
				),
		'getRemovedFilters'
	),
	uD = Do(
		({ columns: n, crudFilters: r }) =>
			r
				.map((l) => {
					var i
					return l.operator === 'and' || l.operator === 'or'
						? l.key
							? {
									id:
										((i = n.find((c) => {
											var d
											return (
												((d = c.meta) == null ? void 0 : d.filterKey) === l.key
											)
										})) == null
											? void 0
											: i.id) ?? l.key,
									operator: l.operator,
									value: l.value
								}
							: void 0
						: { id: l.field, operator: l.operator, value: l.value }
				})
				.filter(Boolean),
		'crudFiltersToColumnFilters'
	)
function sD({ refineCoreProps: n = {}, initialState: r = {}, ...l }) {
	var i, u, c
	const d = lD(),
		h = iR(n),
		p = (((i = n.filters) == null ? void 0 : i.mode) || 'server') === 'server',
		v = (((u = n.sorters) == null ? void 0 : u.mode) || 'server') === 'server',
		y = ((c = n.pagination) == null ? void 0 : c.mode) !== 'off',
		{
			tableQuery: { data: b },
			currentPage: R,
			setCurrentPage: A,
			pageSize: M,
			setPageSize: _,
			sorters: S,
			setSorters: x,
			filters: C,
			setFilters: T,
			pageCount: j
		} = h,
		L = rD({
			data: (b == null ? void 0 : b.data) ?? [],
			getCoreRowModel: Z1(),
			getSortedRowModel: v ? void 0 : X1(),
			getFilteredRowModel: p ? void 0 : K1(),
			initialState: {
				pagination: { pageIndex: R - 1, pageSize: M },
				sorting: S.map((X) => ({ id: X.field, desc: X.order === 'desc' })),
				columnFilters: uD({ columns: l.columns, crudFilters: C }),
				...r
			},
			pageCount: j,
			manualPagination: !0,
			manualSorting: v,
			manualFiltering: p,
			...l
		}),
		{ state: Q, columns: te } = L.options,
		{ pagination: fe, sorting: _e, columnFilters: be } = Q,
		{ pageIndex: de, pageSize: I } = fe ?? {}
	return (
		m.useEffect(() => {
			de !== void 0 && A(de + 1)
		}, [de]),
		m.useEffect(() => {
			I !== void 0 && _(I)
		}, [I]),
		m.useEffect(() => {
			if (_e !== void 0) {
				const X = _e.map((ne) => ({
					field: ne.id,
					order: ne.desc ? 'desc' : 'asc'
				}))
				;(Ry(S, X) || x(X), _e.length > 0 && y && !d && A(1))
			}
		}, [_e]),
		m.useEffect(() => {
			const X = L.getAllColumns().map((se) => se.columnDef),
				ne = iD({ columns: X, columnFilters: be })
			;(ne.push(...oD({ nextFilters: ne, coreFilters: C })),
				Ry(ne, C) || T(ne),
				ne.length > 0 && y && !d && A(1))
		}, [be, te]),
		{ reactTable: L, refineCore: h }
	)
}
Do(sD, 'useTable')
var cD = [' ', 'Enter', 'ArrowUp', 'ArrowDown'],
	fD = [' ', 'Enter'],
	$a = 'Select',
	[qs, Gs, dD] = mh($a),
	[Ka] = tr($a, [dD, ei]),
	Fs = ei(),
	[hD, ga] = Ka($a),
	[pD, mD] = Ka($a),
	vD = 'SelectProvider'
function vS(n) {
	const {
			__scopeSelect: r,
			children: l,
			open: i,
			defaultOpen: u,
			onOpenChange: c,
			value: d,
			defaultValue: h,
			onValueChange: p,
			dir: v,
			name: y,
			autoComplete: b,
			disabled: R,
			required: A,
			form: M,
			internal_do_not_use_render: _
		} = n,
		S = Fs(r),
		[x, C] = m.useState(null),
		[T, j] = m.useState(null),
		[L, Q] = m.useState(!1),
		te = vh(v),
		[fe, _e] = Fa({ prop: i, defaultProp: u ?? !1, onChange: c, caller: $a }),
		[be, de] = Fa({ prop: d, defaultProp: h, onChange: p, caller: $a }),
		I = m.useRef(null),
		X = x ? !!M || !!x.closest('form') : !0,
		[ne, se] = m.useState(new Set()),
		G = pr(),
		re = Array.from(ne)
			.map((Y) => Y.props.value)
			.join(';'),
		ae = m.useCallback((Y) => {
			se((ie) => new Set(ie).add(Y))
		}, []),
		ee = m.useCallback((Y) => {
			se((ie) => {
				const le = new Set(ie)
				return (le.delete(Y), le)
			})
		}, []),
		O = {
			required: A,
			trigger: x,
			onTriggerChange: C,
			valueNode: T,
			onValueNodeChange: j,
			valueNodeHasChildren: L,
			onValueNodeHasChildrenChange: Q,
			contentId: G,
			value: be,
			onValueChange: de,
			open: fe,
			onOpenChange: _e,
			dir: te,
			triggerPointerDownPosRef: I,
			disabled: R,
			name: y,
			autoComplete: b,
			form: M,
			nativeOptions: ne,
			nativeSelectKey: re,
			isFormControl: X
		}
	return z.jsx(Qb, {
		...S,
		children: z.jsx(hD, {
			scope: r,
			...O,
			children: z.jsx(qs.Provider, {
				scope: r,
				children: z.jsx(pD, {
					scope: r,
					onNativeOptionAdd: ae,
					onNativeOptionRemove: ee,
					children: $D(_) ? _(O) : l
				})
			})
		})
	})
}
vS.displayName = vD
var yD = (n) => {
	const { __scopeSelect: r, children: l, ...i } = n
	return z.jsx(vS, {
		__scopeSelect: r,
		...i,
		internal_do_not_use_render: ({ isFormControl: u }) =>
			z.jsxs(z.Fragment, {
				children: [l, u ? z.jsx(DS, { __scopeSelect: r }) : null]
			})
	})
}
yD.displayName = $a
var yS = 'SelectTrigger',
	gD = m.forwardRef((n, r) => {
		const { __scopeSelect: l, disabled: i = !1, ...u } = n,
			c = Fs(l),
			d = ga(yS, l),
			h = d.disabled || i,
			p = $e(r, d.onTriggerChange),
			v = Gs(l),
			y = m.useRef('touch'),
			[b, R, A] = NS((_) => {
				const S = v().filter((T) => !T.disabled),
					x = S.find((T) => T.value === d.value),
					C = jS(S, _, x)
				C !== void 0 && d.onValueChange(C.value)
			}),
			M = (_) => {
				;(h || (d.onOpenChange(!0), A()),
					_ &&
						(d.triggerPointerDownPosRef.current = {
							x: Math.round(_.pageX),
							y: Math.round(_.pageY)
						}))
			}
		return z.jsx(Eh, {
			asChild: !0,
			...c,
			children: z.jsx(Ne.button, {
				type: 'button',
				role: 'combobox',
				'aria-controls': d.open ? d.contentId : void 0,
				'aria-expanded': d.open,
				'aria-required': d.required,
				'aria-autocomplete': 'none',
				dir: d.dir,
				'data-state': d.open ? 'open' : 'closed',
				disabled: h,
				'data-disabled': h ? '' : void 0,
				'data-placeholder': $s(d.value) ? '' : void 0,
				...u,
				ref: p,
				onClick: Ee(u.onClick, (_) => {
					;(_.currentTarget.focus(), y.current !== 'mouse' && M(_))
				}),
				onPointerDown: Ee(u.onPointerDown, (_) => {
					y.current = _.pointerType
					const S = _.target
					;(S.hasPointerCapture(_.pointerId) &&
						S.releasePointerCapture(_.pointerId),
						_.button === 0 &&
							_.ctrlKey === !1 &&
							_.pointerType === 'mouse' &&
							(M(_), _.preventDefault()))
				}),
				onKeyDown: Ee(u.onKeyDown, (_) => {
					const S = b.current !== ''
					;(!(_.ctrlKey || _.altKey || _.metaKey) &&
						_.key.length === 1 &&
						R(_.key),
						!(S && _.key === ' ') &&
							cD.includes(_.key) &&
							(M(), _.preventDefault()))
				})
			})
		})
	})
gD.displayName = yS
var gS = 'SelectValue',
	bD = m.forwardRef((n, r) => {
		const {
				__scopeSelect: l,
				className: i,
				style: u,
				children: c,
				placeholder: d = '',
				...h
			} = n,
			p = ga(gS, l),
			{ onValueNodeHasChildrenChange: v } = p,
			y = c !== void 0,
			b = $e(r, p.onValueNodeChange)
		Ct(() => {
			v(y)
		}, [v, y])
		const R = $s(p.value)
		return z.jsx(Ne.span, {
			...h,
			asChild: R ? !1 : h.asChild,
			ref: b,
			style: { pointerEvents: 'none' },
			children: z.jsx(
				m.Fragment,
				{ children: R ? d : c },
				R ? 'placeholder' : 'value'
			)
		})
	})
bD.displayName = gS
var SD = 'SelectIcon',
	_D = m.forwardRef((n, r) => {
		const { __scopeSelect: l, children: i, ...u } = n
		return z.jsx(Ne.span, {
			'aria-hidden': !0,
			...u,
			ref: r,
			children: i || '▼'
		})
	})
_D.displayName = SD
var bS = 'SelectPortal',
	[ED, RD] = Ka(bS, { forceMount: void 0 }),
	xD = (n) => {
		const { __scopeSelect: r, forceMount: l, ...i } = n
		return z.jsx(ED, {
			scope: n.__scopeSelect,
			forceMount: l,
			children: z.jsx(Ds, { asChild: !0, ...i })
		})
	}
xD.displayName = bS
var ma = 'SelectContent',
	AD = m.forwardRef((n, r) => {
		const l = RD(ma, n.__scopeSelect),
			{ forceMount: i = l.forceMount, ...u } = n,
			c = ga(ma, n.__scopeSelect),
			[d, h] = m.useState()
		return (
			Ct(() => {
				h(new DocumentFragment())
			}, []),
			z.jsx(Gn, {
				present: i || c.open,
				children: ({ present: p }) =>
					p ? z.jsx(ES, { ...u, ref: r }) : z.jsx(SS, { ...u, fragment: d })
			})
		)
	})
AD.displayName = ma
var SS = m.forwardRef((n, r) => {
	const { __scopeSelect: l, children: i, fragment: u } = n
	return u
		? Xl.createPortal(
				z.jsx(_S, {
					scope: l,
					children: z.jsx(qs.Slot, {
						scope: l,
						children: z.jsx('div', { ref: r, children: i })
					})
				}),
				u
			)
		: null
})
SS.displayName = 'SelectContentFragment'
var Zn = 10,
	[_S, ba] = Ka(ma),
	wD = 'SelectContentImpl',
	CD = Ga('SelectContent.RemoveScroll'),
	ES = m.forwardRef((n, r) => {
		const { __scopeSelect: l } = n,
			{
				position: i = 'item-aligned',
				onCloseAutoFocus: u,
				onEscapeKeyDown: c,
				onPointerDownOutside: d,
				side: h,
				sideOffset: p,
				align: v,
				alignOffset: y,
				arrowPadding: b,
				collisionBoundary: R,
				collisionPadding: A,
				sticky: M,
				hideWhenDetached: _,
				avoidCollisions: S,
				...x
			} = n,
			C = ga(ma, l),
			[T, j] = m.useState(null),
			[L, Q] = m.useState(null),
			te = $e(r, j),
			[fe, _e] = m.useState(null),
			[be, de] = m.useState(null),
			I = Gs(l),
			[X, ne] = m.useState(!1),
			se = m.useRef(!1)
		;(m.useEffect(() => {
			if (T) return nh(T)
		}, [T]),
			gh())
		const G = m.useCallback(
				(ye) => {
					const [Ae, ...je] = I().map((Pe) => Pe.ref.current),
						[Be] = je.slice(-1),
						Le = document.activeElement
					for (const Pe of ye)
						if (
							Pe === Le ||
							(Pe == null || Pe.scrollIntoView({ block: 'nearest' }),
							Pe === Ae && L && (L.scrollTop = 0),
							Pe === Be && L && (L.scrollTop = L.scrollHeight),
							Pe == null || Pe.focus(),
							document.activeElement !== Le)
						)
							return
				},
				[I, L]
			),
			re = m.useCallback(() => G([fe, T]), [G, fe, T])
		m.useEffect(() => {
			X && re()
		}, [X, re])
		const { onOpenChange: ae, triggerPointerDownPosRef: ee } = C
		;(m.useEffect(() => {
			if (T) {
				let ye = { x: 0, y: 0 }
				const Ae = (Be) => {
						var Le, Pe
						ye = {
							x: Math.abs(
								Math.round(Be.pageX) -
									(((Le = ee.current) == null ? void 0 : Le.x) ?? 0)
							),
							y: Math.abs(
								Math.round(Be.pageY) -
									(((Pe = ee.current) == null ? void 0 : Pe.y) ?? 0)
							)
						}
					},
					je = (Be) => {
						;(ye.x <= 10 && ye.y <= 10
							? Be.preventDefault()
							: Be.composedPath().includes(T) || ae(!1),
							document.removeEventListener('pointermove', Ae),
							(ee.current = null))
					}
				return (
					ee.current !== null &&
						(document.addEventListener('pointermove', Ae),
						document.addEventListener('pointerup', je, {
							capture: !0,
							once: !0
						})),
					() => {
						;(document.removeEventListener('pointermove', Ae),
							document.removeEventListener('pointerup', je, { capture: !0 }))
					}
				)
			}
		}, [T, ae, ee]),
			m.useEffect(() => {
				const ye = () => ae(!1)
				return (
					window.addEventListener('blur', ye),
					window.addEventListener('resize', ye),
					() => {
						;(window.removeEventListener('blur', ye),
							window.removeEventListener('resize', ye))
					}
				)
			}, [ae]))
		const [O, Y] = NS((ye) => {
				const Ae = I().filter((Le) => !Le.disabled),
					je = Ae.find((Le) => Le.ref.current === document.activeElement),
					Be = jS(Ae, ye, je)
				Be &&
					setTimeout(() => {
						var Le
						return (Le = Be.ref.current) == null ? void 0 : Le.focus()
					})
			}),
			ie = m.useCallback(
				(ye, Ae, je) => {
					const Be = !se.current && !je
					;((C.value !== void 0 && C.value === Ae) || Be) &&
						(_e(ye), Be && (se.current = !0))
				},
				[C.value]
			),
			le = m.useCallback(() => (T == null ? void 0 : T.focus()), [T]),
			pe = m.useCallback(
				(ye, Ae, je) => {
					const Be = !se.current && !je
					;((C.value !== void 0 && C.value === Ae) || Be) && de(ye)
				},
				[C.value]
			),
			we = i === 'popper' ? Gd : RS,
			ge =
				we === Gd
					? {
							side: h,
							sideOffset: p,
							align: v,
							alignOffset: y,
							arrowPadding: b,
							collisionBoundary: R,
							collisionPadding: A,
							sticky: M,
							hideWhenDetached: _,
							avoidCollisions: S
						}
					: {}
		return z.jsx(_S, {
			scope: l,
			content: T,
			viewport: L,
			onViewportChange: Q,
			itemRefCallback: ie,
			selectedItem: fe,
			onItemLeave: le,
			itemTextRefCallback: pe,
			focusSelectedItem: re,
			selectedItemText: be,
			position: i,
			isPositioned: X,
			searchRef: O,
			children: z.jsx(js, {
				as: CD,
				allowPinchZoom: !0,
				children: z.jsx(Ms, {
					asChild: !0,
					trapped: C.open,
					onMountAutoFocus: (ye) => {
						ye.preventDefault()
					},
					onUnmountAutoFocus: Ee(u, (ye) => {
						var Ae
						;((Ae = C.trigger) == null || Ae.focus({ preventScroll: !0 }),
							ye.preventDefault())
					}),
					children: z.jsx(Co, {
						asChild: !0,
						disableOutsidePointerEvents: !0,
						onEscapeKeyDown: c,
						onPointerDownOutside: d,
						onFocusOutside: (ye) => ye.preventDefault(),
						onDismiss: () => C.onOpenChange(!1),
						children: z.jsx(we, {
							role: 'listbox',
							id: C.contentId,
							'data-state': C.open ? 'open' : 'closed',
							dir: C.dir,
							onContextMenu: (ye) => ye.preventDefault(),
							...x,
							...ge,
							onPlaced: () => ne(!0),
							ref: te,
							style: {
								display: 'flex',
								flexDirection: 'column',
								outline: 'none',
								...x.style
							},
							onKeyDown: Ee(x.onKeyDown, (ye) => {
								const Ae = ye.ctrlKey || ye.altKey || ye.metaKey
								if (
									(ye.key === 'Tab' && ye.preventDefault(),
									!Ae && ye.key.length === 1 && Y(ye.key),
									['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(ye.key))
								) {
									let Be = I()
										.filter((Le) => !Le.disabled)
										.map((Le) => Le.ref.current)
									if (
										(['ArrowUp', 'End'].includes(ye.key) &&
											(Be = Be.slice().reverse()),
										['ArrowUp', 'ArrowDown'].includes(ye.key))
									) {
										const Le = ye.target,
											Pe = Be.indexOf(Le)
										Be = Be.slice(Pe + 1)
									}
									;(setTimeout(() => G(Be)), ye.preventDefault())
								}
							})
						})
					})
				})
			})
		})
	})
ES.displayName = wD
var TD = 'SelectItemAlignedPosition',
	RS = m.forwardRef((n, r) => {
		const { __scopeSelect: l, onPlaced: i, ...u } = n,
			c = ga(ma, l),
			d = ba(ma, l),
			[h, p] = m.useState(null),
			[v, y] = m.useState(null),
			b = $e(r, y),
			R = Gs(l),
			A = m.useRef(!1),
			M = m.useRef(!0),
			{
				viewport: _,
				selectedItem: S,
				selectedItemText: x,
				focusSelectedItem: C
			} = d,
			T = m.useCallback(() => {
				if (c.trigger && c.valueNode && h && v && _ && S && x) {
					const te = c.trigger.getBoundingClientRect(),
						fe = v.getBoundingClientRect(),
						_e = c.valueNode.getBoundingClientRect(),
						be = x.getBoundingClientRect()
					if (c.dir !== 'rtl') {
						const Le = be.left - fe.left,
							Pe = _e.left - Le,
							ht = te.left - Pe,
							pt = te.width + ht,
							Bt = Math.max(pt, fe.width),
							Nt = window.innerWidth - Zn,
							ct = Cy(Pe, [Zn, Math.max(Zn, Nt - Bt)])
						;((h.style.minWidth = pt + 'px'), (h.style.left = ct + 'px'))
					} else {
						const Le = fe.right - be.right,
							Pe = window.innerWidth - _e.right - Le,
							ht = window.innerWidth - te.right - Pe,
							pt = te.width + ht,
							Bt = Math.max(pt, fe.width),
							Nt = window.innerWidth - Zn,
							ct = Cy(Pe, [Zn, Math.max(Zn, Nt - Bt)])
						;((h.style.minWidth = pt + 'px'), (h.style.right = ct + 'px'))
					}
					const de = R(),
						I = window.innerHeight - Zn * 2,
						X = _.scrollHeight,
						ne = window.getComputedStyle(v),
						se = parseInt(ne.borderTopWidth, 10),
						G = parseInt(ne.paddingTop, 10),
						re = parseInt(ne.borderBottomWidth, 10),
						ae = parseInt(ne.paddingBottom, 10),
						ee = se + G + X + ae + re,
						O = Math.min(S.offsetHeight * 5, ee),
						Y = window.getComputedStyle(_),
						ie = parseInt(Y.paddingTop, 10),
						le = parseInt(Y.paddingBottom, 10),
						pe = te.top + te.height / 2 - Zn,
						we = I - pe,
						ge = S.offsetHeight / 2,
						ye = S.offsetTop + ge,
						Ae = se + G + ye,
						je = ee - Ae
					if (Ae <= pe) {
						const Le = de.length > 0 && S === de[de.length - 1].ref.current
						h.style.bottom = '0px'
						const Pe = v.clientHeight - _.offsetTop - _.offsetHeight,
							ht = Math.max(we, ge + (Le ? le : 0) + Pe + re),
							pt = Ae + ht
						h.style.height = pt + 'px'
					} else {
						const Le = de.length > 0 && S === de[0].ref.current
						h.style.top = '0px'
						const ht = Math.max(pe, se + _.offsetTop + (Le ? ie : 0) + ge) + je
						;((h.style.height = ht + 'px'),
							(_.scrollTop = Ae - pe + _.offsetTop))
					}
					;((h.style.margin = `${Zn}px 0`),
						(h.style.minHeight = O + 'px'),
						(h.style.maxHeight = I + 'px'),
						i == null || i(),
						requestAnimationFrame(() => (A.current = !0)))
				}
			}, [R, c.trigger, c.valueNode, h, v, _, S, x, c.dir, i])
		Ct(() => T(), [T])
		const [j, L] = m.useState()
		Ct(() => {
			v && L(window.getComputedStyle(v).zIndex)
		}, [v])
		const Q = m.useCallback(
			(te) => {
				te && M.current === !0 && (T(), C == null || C(), (M.current = !1))
			},
			[T, C]
		)
		return z.jsx(MD, {
			scope: l,
			contentWrapper: h,
			shouldExpandOnScrollRef: A,
			onScrollButtonChange: Q,
			children: z.jsx('div', {
				ref: p,
				style: {
					display: 'flex',
					flexDirection: 'column',
					position: 'fixed',
					zIndex: j
				},
				children: z.jsx(Ne.div, {
					...u,
					ref: b,
					style: { boxSizing: 'border-box', maxHeight: '100%', ...u.style }
				})
			})
		})
	})
RS.displayName = TD
var OD = 'SelectPopperPosition',
	Gd = m.forwardRef((n, r) => {
		const {
				__scopeSelect: l,
				align: i = 'start',
				collisionPadding: u = Zn,
				...c
			} = n,
			d = Fs(l)
		return z.jsx(Rh, {
			...d,
			...c,
			ref: r,
			align: i,
			collisionPadding: u,
			style: {
				boxSizing: 'border-box',
				...c.style,
				'--radix-select-content-transform-origin':
					'var(--radix-popper-transform-origin)',
				'--radix-select-content-available-width':
					'var(--radix-popper-available-width)',
				'--radix-select-content-available-height':
					'var(--radix-popper-available-height)',
				'--radix-select-trigger-width': 'var(--radix-popper-anchor-width)',
				'--radix-select-trigger-height': 'var(--radix-popper-anchor-height)'
			}
		})
	})
Gd.displayName = OD
var [MD, kh] = Ka(ma, {}),
	Fd = 'SelectViewport',
	DD = m.forwardRef((n, r) => {
		const { __scopeSelect: l, nonce: i, ...u } = n,
			c = ba(Fd, l),
			d = kh(Fd, l),
			h = $e(r, c.onViewportChange),
			p = m.useRef(0)
		return z.jsxs(z.Fragment, {
			children: [
				z.jsx('style', {
					dangerouslySetInnerHTML: {
						__html:
							'[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}'
					},
					nonce: i
				}),
				z.jsx(qs.Slot, {
					scope: l,
					children: z.jsx(Ne.div, {
						'data-radix-select-viewport': '',
						role: 'presentation',
						...u,
						ref: h,
						style: {
							position: 'relative',
							flex: 1,
							overflow: 'hidden auto',
							...u.style
						},
						onScroll: Ee(u.onScroll, (v) => {
							const y = v.currentTarget,
								{ contentWrapper: b, shouldExpandOnScrollRef: R } = d
							if (R != null && R.current && b) {
								const A = Math.abs(p.current - y.scrollTop)
								if (A > 0) {
									const M = window.innerHeight - Zn * 2,
										_ = parseFloat(b.style.minHeight),
										S = parseFloat(b.style.height),
										x = Math.max(_, S)
									if (x < M) {
										const C = x + A,
											T = Math.min(M, C),
											j = C - T
										;((b.style.height = T + 'px'),
											b.style.bottom === '0px' &&
												((y.scrollTop = j > 0 ? j : 0),
												(b.style.justifyContent = 'flex-end')))
									}
								}
							}
							p.current = y.scrollTop
						})
					})
				})
			]
		})
	})
DD.displayName = Fd
var xS = 'SelectGroup',
	[ND, jD] = Ka(xS),
	LD = m.forwardRef((n, r) => {
		const { __scopeSelect: l, ...i } = n,
			u = pr()
		return z.jsx(ND, {
			scope: l,
			id: u,
			children: z.jsx(Ne.div, {
				role: 'group',
				'aria-labelledby': u,
				...i,
				ref: r
			})
		})
	})
LD.displayName = xS
var AS = 'SelectLabel',
	UD = m.forwardRef((n, r) => {
		const { __scopeSelect: l, ...i } = n,
			u = jD(AS, l)
		return z.jsx(Ne.div, { id: u.id, ...i, ref: r })
	})
UD.displayName = AS
var Ss = 'SelectItem',
	[zD, wS] = Ka(Ss),
	BD = m.forwardRef((n, r) => {
		const {
				__scopeSelect: l,
				value: i,
				disabled: u = !1,
				textValue: c,
				...d
			} = n,
			h = ga(Ss, l),
			p = ba(Ss, l),
			v = h.value === i,
			[y, b] = m.useState(c ?? ''),
			[R, A] = m.useState(!1),
			M = Hn((T) => {
				var j
				return (j = p.itemRefCallback) == null ? void 0 : j.call(p, T, i, u)
			}),
			_ = $e(r, M),
			S = pr(),
			x = m.useRef('touch'),
			C = () => {
				u || (h.onValueChange(i), h.onOpenChange(!1))
			}
		return z.jsx(zD, {
			scope: l,
			value: i,
			disabled: u,
			textId: S,
			isSelected: v,
			onItemTextChange: m.useCallback((T) => {
				b((j) => j || ((T == null ? void 0 : T.textContent) ?? '').trim())
			}, []),
			children: z.jsx(qs.ItemSlot, {
				scope: l,
				value: i,
				disabled: u,
				textValue: y,
				children: z.jsx(Ne.div, {
					role: 'option',
					'aria-labelledby': S,
					'data-highlighted': R ? '' : void 0,
					'aria-selected': v && R,
					'data-state': v ? 'checked' : 'unchecked',
					'aria-disabled': u || void 0,
					'data-disabled': u ? '' : void 0,
					tabIndex: u ? void 0 : -1,
					...d,
					ref: _,
					onFocus: Ee(d.onFocus, () => A(!0)),
					onBlur: Ee(d.onBlur, () => A(!1)),
					onClick: Ee(d.onClick, () => {
						x.current !== 'mouse' && C()
					}),
					onPointerUp: Ee(d.onPointerUp, () => {
						x.current === 'mouse' && C()
					}),
					onPointerDown: Ee(d.onPointerDown, (T) => {
						x.current = T.pointerType
					}),
					onPointerMove: Ee(d.onPointerMove, (T) => {
						var j
						;((x.current = T.pointerType),
							u
								? (j = p.onItemLeave) == null || j.call(p)
								: x.current === 'mouse' &&
									T.currentTarget.focus({ preventScroll: !0 }))
					}),
					onPointerLeave: Ee(d.onPointerLeave, (T) => {
						var j
						T.currentTarget === document.activeElement &&
							((j = p.onItemLeave) == null || j.call(p))
					}),
					onKeyDown: Ee(d.onKeyDown, (T) => {
						var L
						;(((L = p.searchRef) == null ? void 0 : L.current) !== '' &&
							T.key === ' ') ||
							(fD.includes(T.key) && C(), T.key === ' ' && T.preventDefault())
					})
				})
			})
		})
	})
BD.displayName = Ss
var po = 'SelectItemText',
	PD = m.forwardRef((n, r) => {
		const { __scopeSelect: l, className: i, style: u, ...c } = n,
			d = ga(po, l),
			h = ba(po, l),
			p = wS(po, l),
			v = mD(po, l),
			[y, b] = m.useState(null),
			R = Hn((C) => {
				var T
				return (T = h.itemTextRefCallback) == null
					? void 0
					: T.call(h, C, p.value, p.disabled)
			}),
			A = $e(r, b, p.onItemTextChange, R),
			M = y == null ? void 0 : y.textContent,
			_ = m.useMemo(
				() =>
					z.jsx(
						'option',
						{ value: p.value, disabled: p.disabled, children: M },
						p.value
					),
				[p.disabled, p.value, M]
			),
			{ onNativeOptionAdd: S, onNativeOptionRemove: x } = v
		return (
			Ct(() => (S(_), () => x(_)), [S, x, _]),
			z.jsxs(z.Fragment, {
				children: [
					z.jsx(Ne.span, { id: p.textId, ...c, ref: A }),
					p.isSelected && d.valueNode && !d.valueNodeHasChildren && !$s(d.value)
						? Xl.createPortal(c.children, d.valueNode)
						: null
				]
			})
		)
	})
PD.displayName = po
var CS = 'SelectItemIndicator',
	VD = m.forwardRef((n, r) => {
		const { __scopeSelect: l, ...i } = n
		return wS(CS, l).isSelected
			? z.jsx(Ne.span, { 'aria-hidden': !0, ...i, ref: r })
			: null
	})
VD.displayName = CS
var $d = 'SelectScrollUpButton',
	kD = m.forwardRef((n, r) => {
		const l = ba($d, n.__scopeSelect),
			i = kh($d, n.__scopeSelect),
			[u, c] = m.useState(!1),
			d = $e(r, i.onScrollButtonChange)
		return (
			Ct(() => {
				if (l.viewport && l.isPositioned) {
					let h = function () {
						const v = p.scrollTop > 0
						c(v)
					}
					const p = l.viewport
					return (
						h(),
						p.addEventListener('scroll', h),
						() => p.removeEventListener('scroll', h)
					)
				}
			}, [l.viewport, l.isPositioned]),
			u
				? z.jsx(TS, {
						...n,
						ref: d,
						onAutoScroll: () => {
							const { viewport: h, selectedItem: p } = l
							h && p && (h.scrollTop = h.scrollTop - p.offsetHeight)
						}
					})
				: null
		)
	})
kD.displayName = $d
var Id = 'SelectScrollDownButton',
	HD = m.forwardRef((n, r) => {
		const l = ba(Id, n.__scopeSelect),
			i = kh(Id, n.__scopeSelect),
			[u, c] = m.useState(!1),
			d = $e(r, i.onScrollButtonChange)
		return (
			Ct(() => {
				if (l.viewport && l.isPositioned) {
					let h = function () {
						const v = p.scrollHeight - p.clientHeight,
							y = Math.ceil(p.scrollTop) < v
						c(y)
					}
					const p = l.viewport
					return (
						h(),
						p.addEventListener('scroll', h),
						() => p.removeEventListener('scroll', h)
					)
				}
			}, [l.viewport, l.isPositioned]),
			u
				? z.jsx(TS, {
						...n,
						ref: d,
						onAutoScroll: () => {
							const { viewport: h, selectedItem: p } = l
							h && p && (h.scrollTop = h.scrollTop + p.offsetHeight)
						}
					})
				: null
		)
	})
HD.displayName = Id
var TS = m.forwardRef((n, r) => {
		const { __scopeSelect: l, onAutoScroll: i, ...u } = n,
			c = ba('SelectScrollButton', l),
			d = m.useRef(null),
			h = Gs(l),
			p = m.useCallback(() => {
				d.current !== null &&
					(window.clearInterval(d.current), (d.current = null))
			}, [])
		return (
			m.useEffect(() => () => p(), [p]),
			Ct(() => {
				var y
				const v = h().find((b) => b.ref.current === document.activeElement)
				;(y = v == null ? void 0 : v.ref.current) == null ||
					y.scrollIntoView({ block: 'nearest' })
			}, [h]),
			z.jsx(Ne.div, {
				'aria-hidden': !0,
				...u,
				ref: r,
				style: { flexShrink: 0, ...u.style },
				onPointerDown: Ee(u.onPointerDown, () => {
					d.current === null && (d.current = window.setInterval(i, 50))
				}),
				onPointerMove: Ee(u.onPointerMove, () => {
					var v
					;((v = c.onItemLeave) == null || v.call(c),
						d.current === null && (d.current = window.setInterval(i, 50)))
				}),
				onPointerLeave: Ee(u.onPointerLeave, () => {
					p()
				})
			})
		)
	}),
	qD = 'SelectSeparator',
	GD = m.forwardRef((n, r) => {
		const { __scopeSelect: l, ...i } = n
		return z.jsx(Ne.div, { 'aria-hidden': !0, ...i, ref: r })
	})
GD.displayName = qD
var OS = 'SelectArrow',
	FD = m.forwardRef((n, r) => {
		const { __scopeSelect: l, ...i } = n,
			u = Fs(l)
		return ba(OS, l).position === 'popper'
			? z.jsx(xh, { ...u, ...i, ref: r })
			: null
	})
FD.displayName = OS
var MS = 'SelectBubbleInput',
	DS = m.forwardRef(({ __scopeSelect: n, ...r }, l) => {
		const i = ga(MS, n),
			{
				value: u,
				onValueChange: c,
				required: d,
				disabled: h,
				name: p,
				autoComplete: v,
				form: y
			} = i,
			{ nativeOptions: b, nativeSelectKey: R } = i,
			A = m.useRef(null),
			M = $e(l, A),
			_ = u ?? '',
			S = tS(_),
			x = Array.from(b).some((C) => (C.props.value ?? '') === '')
		return (
			m.useEffect(() => {
				const C = A.current
				if (!C) return
				const T = window.HTMLSelectElement.prototype,
					L = Object.getOwnPropertyDescriptor(T, 'value').set
				if (S !== _ && L) {
					const Q = new Event('change', { bubbles: !0 })
					;(L.call(C, _), C.dispatchEvent(Q))
				}
			}, [S, _]),
			z.jsxs(
				Ne.select,
				{
					'aria-hidden': !0,
					required: d,
					tabIndex: -1,
					name: p,
					autoComplete: v,
					disabled: h,
					form: y,
					onChange: (C) => c(C.target.value),
					...r,
					style: { ...$0, ...r.style },
					ref: M,
					defaultValue: _,
					children: [
						$s(u) && !x ? z.jsx('option', { value: '' }) : null,
						Array.from(b)
					]
				},
				R
			)
		)
	})
DS.displayName = MS
function $D(n) {
	return typeof n == 'function'
}
function $s(n) {
	return n === '' || n === void 0
}
function NS(n) {
	const r = Hn(n),
		l = m.useRef(''),
		i = m.useRef(0),
		u = m.useCallback(
			(d) => {
				const h = l.current + d
				;(r(h),
					(function p(v) {
						;((l.current = v),
							window.clearTimeout(i.current),
							v !== '' && (i.current = window.setTimeout(() => p(''), 1e3)))
					})(h))
			},
			[r]
		),
		c = m.useCallback(() => {
			;((l.current = ''), window.clearTimeout(i.current))
		}, [])
	return (
		m.useEffect(() => () => window.clearTimeout(i.current), []),
		[l, u, c]
	)
}
function jS(n, r, l) {
	const u = r.length > 1 && Array.from(r).every((v) => v === r[0]) ? r[0] : r,
		c = l ? n.indexOf(l) : -1
	let d = ID(n, Math.max(c, 0))
	u.length === 1 && (d = d.filter((v) => v !== l))
	const p = d.find((v) => v.textValue.toLowerCase().startsWith(u.toLowerCase()))
	return p !== l ? p : void 0
}
function ID(n, r) {
	return n.map((l, i) => n[(r + i) % n.length])
}
var No = (n) => n.type === 'checkbox',
	Ha = (n) => n instanceof Date,
	Kt = (n) => n == null
const LS = (n) => typeof n == 'object'
var yt = (n) => !Kt(n) && !Array.isArray(n) && LS(n) && !Ha(n),
	Yd = (n) =>
		yt(n) && n.target ? (No(n.target) ? n.target.checked : n.target.value) : n,
	US = (n, r) =>
		r
			.split('.')
			.some((l, i, u) => !isNaN(Number(l)) && n.has(u.slice(0, i).join('.'))),
	zS = (n) => {
		const r = n.constructor && n.constructor.prototype
		return yt(r) && r.hasOwnProperty('isPrototypeOf')
	},
	Is =
		typeof window < 'u' &&
		typeof window.HTMLElement < 'u' &&
		typeof document < 'u'
function Et(n) {
	if (n instanceof Date) return new Date(n)
	const r = typeof FileList < 'u' && n instanceof FileList
	if (Is && (n instanceof Blob || r)) return n
	const l = Array.isArray(n)
	if (!l && !(yt(n) && zS(n))) return n
	const i = l ? [] : Object.create(Object.getPrototypeOf(n))
	for (const u in n)
		Object.prototype.hasOwnProperty.call(n, u) && (i[u] = Et(n[u]))
	return i
}
const da = {
		BLUR: 'blur',
		FOCUS_OUT: 'focusout',
		CHANGE: 'change',
		SUBMIT: 'submit',
		TRIGGER: 'trigger',
		VALID: 'valid'
	},
	Wn = {
		onBlur: 'onBlur',
		onChange: 'onChange',
		onSubmit: 'onSubmit',
		onTouched: 'onTouched',
		all: 'all'
	},
	Jn = {
		max: 'max',
		min: 'min',
		maxLength: 'maxLength',
		minLength: 'minLength',
		pattern: 'pattern',
		required: 'required',
		validate: 'validate'
	},
	Sd = 'form',
	BS = 'root',
	PS = ['__proto__', 'constructor', 'prototype']
var jo = (n) => /^\w*$/.test(n),
	st = (n) => n === void 0,
	Ys = (n) => n.split(/[.[\]'"]/g).filter(Boolean),
	ve = (n, r, l) => {
		if (!r || !yt(n)) return l
		const i = jo(r) ? [r] : Ys(r)
		if (i.some((c) => PS.includes(c))) return l
		const u = i.reduce((c, d) => (Kt(c) ? void 0 : c[d]), n)
		return st(u) || u === n ? (st(n[r]) ? l : n[r]) : u
	},
	Cn = (n) => typeof n == 'boolean',
	tn = (n) => typeof n == 'function',
	it = (n, r, l) => {
		let i = -1
		const u = jo(r) ? [r] : Ys(r),
			c = u.length,
			d = c - 1
		for (; ++i < c; ) {
			const h = u[i]
			let p = l
			if (i !== d) {
				const v = n[h]
				p = yt(v) || Array.isArray(v) ? v : isNaN(+u[i + 1]) ? {} : []
			}
			if (PS.includes(h)) return
			;((n[h] = p), (n = n[h]))
		}
	}
const Hh = ue.createContext(null)
Hh.displayName = 'HookFormControlContext'
const qh = () => ue.useContext(Hh)
var VS = (n, r, l, i = !0) => {
	const u = {}
	for (const c in n)
		Object.defineProperty(u, c, {
			get: () => {
				const d = c
				return (
					r._proxyFormState[d] !== Wn.all &&
						(r._proxyFormState[d] = !i || Wn.all),
					l && (l[d] = !0),
					n[d]
				)
			}
		})
	return u
}
const Gh = Is ? ue.useLayoutEffect : ue.useEffect
function YD(n) {
	const r = qh(),
		{ control: l = r, disabled: i, name: u, exact: c } = n || {},
		[d, h] = ue.useState(() => ({
			...l._formState,
			defaultValues: l._defaultValues
		})),
		p = ue.useRef({
			isDirty: !1,
			isLoading: !1,
			dirtyFields: !1,
			touchedFields: !1,
			validatingFields: !1,
			isValidating: !1,
			isValid: !1,
			errors: !1
		})
	return (
		Gh(
			() =>
				l._subscribe({
					name: u,
					formState: p.current,
					exact: c,
					callback: (v) => {
						!i && h({ ...l._formState, ...v, defaultValues: l._defaultValues })
					}
				}),
			[u, i, c]
		),
		ue.useEffect(() => {
			p.current.isValid && l._setValid(!0)
		}, [l]),
		ue.useMemo(() => VS(d, l, p.current, !1), [d, l])
	)
}
var nn = (n) => typeof n == 'string',
	Qd = (n, r, l, i, u) =>
		nn(n)
			? (i && r.watch.add(n), ve(l, n, u))
			: Array.isArray(n)
				? n.map((c) => (i && r.watch.add(c), ve(l, c)))
				: (i && (r.watchAll = !0), l),
	Kd = (n) => Kt(n) || !LS(n)
const zg = (n, r) => r.length === 0 && !Array.isArray(n) && !zS(n)
function Tn(n, r, l = new WeakMap()) {
	if (n === r) return !0
	if (Kd(n) || Kd(r)) return Object.is(n, r)
	if (Ha(n) && Ha(r)) return Object.is(n.getTime(), r.getTime())
	const i = Object.keys(n),
		u = Object.keys(r)
	if (i.length !== u.length) return !1
	if (zg(n, i) || zg(r, u)) return Object.is(n, r)
	const c = l.get(n)
	if (c && c.has(r)) return !0
	c ? c.add(r) : l.set(n, new WeakSet([r]))
	for (const d of i) {
		const h = n[d]
		if (!(d in r)) return !1
		if (d !== 'ref') {
			const p = r[d]
			if (
				(Ha(h) && Ha(p)) ||
				((yt(h) || Array.isArray(h)) && (yt(p) || Array.isArray(p)))
					? !Tn(h, p, l)
					: !Object.is(h, p)
			)
				return !1
		}
	}
	return !0
}
function QD(n) {
	const r = qh(),
		{
			control: l = r,
			name: i,
			defaultValue: u,
			disabled: c,
			exact: d,
			compute: h
		} = n || {},
		p = ue.useRef(u),
		v = ue.useRef(h),
		y = ue.useRef(void 0),
		b = ue.useRef(l),
		R = ue.useRef(i)
	v.current = h
	const [A, M] = ue.useState(() => {
			const j = l._getWatch(i, p.current)
			return v.current ? v.current(j) : j
		}),
		_ = ue.useCallback(
			(j) => {
				const L = Qd(i, l._names, j || l._formValues, !1, p.current)
				return v.current ? v.current(L) : L
			},
			[l._formValues, l._names, i]
		),
		S = ue.useCallback(
			(j) => {
				if (!c) {
					const L = Qd(i, l._names, j || l._formValues, !1, p.current)
					if (v.current) {
						const Q = v.current(L)
						Tn(Q, y.current) || (M(Q), (y.current = Q))
					} else M(L)
				}
			},
			[l._formValues, l._names, c, i]
		)
	;(Gh(
		() => (
			(b.current !== l || !Tn(R.current, i)) &&
				((b.current = l), (R.current = i), S()),
			l._subscribe({
				name: i,
				formState: { values: !0 },
				exact: d,
				callback: (j) => {
					S(j.values)
				}
			})
		),
		[l, d, i, S]
	),
		ue.useEffect(() => l._removeUnmounted()))
	const x = b.current !== l,
		C = R.current,
		T = ue.useMemo(() => {
			if (c) return null
			const j = !x && !Tn(C, i)
			return x || j ? _() : null
		}, [c, x, i, C, _])
	return T !== null ? T : A
}
function KD(n) {
	const r = qh(),
		{
			name: l,
			disabled: i,
			control: u = r,
			shouldUnregister: c,
			defaultValue: d,
			exact: h = !0
		} = n,
		p = US(u._names.array, l),
		v = ue.useMemo(
			() => ve(u._formValues, l, ve(u._defaultValues, l, d)),
			[u, l, d]
		),
		y = QD({ control: u, name: l, defaultValue: v, exact: h }),
		b = YD({ control: u, name: l, exact: h }),
		R = ue.useRef(n),
		A = ue.useRef(null),
		M = ue.useRef(
			u.register(l, {
				...n.rules,
				value: y,
				...(Cn(n.disabled) ? { disabled: n.disabled } : {})
			})
		)
	R.current = n
	const _ = ue.useMemo(
			() =>
				Object.defineProperties(
					{},
					{
						invalid: { enumerable: !0, get: () => !!ve(b.errors, l) },
						isDirty: { enumerable: !0, get: () => !!ve(b.dirtyFields, l) },
						isTouched: { enumerable: !0, get: () => !!ve(b.touchedFields, l) },
						isValidating: {
							enumerable: !0,
							get: () => !!ve(b.validatingFields, l)
						},
						error: { enumerable: !0, get: () => ve(b.errors, l) }
					}
				),
			[b, l]
		),
		S = ue.useCallback(
			(j) => {
				const L = Yd(j)
				return (
					ve(u._fields, l) ||
						(M.current = u.register(l, { ...R.current.rules, value: L })),
					M.current.onChange({
						target: { value: Yd(j), name: l },
						type: da.CHANGE
					})
				)
			},
			[l, u]
		),
		x = ue.useCallback(
			() =>
				M.current.onBlur({
					target: { value: ve(u._formValues, l), name: l },
					type: da.BLUR
				}),
			[l, u._formValues]
		),
		C = ue.useCallback(
			(j) => {
				j &&
					(A.current = {
						focus: () => tn(j.focus) && j.focus(),
						select: () => tn(j.select) && j.select(),
						setCustomValidity: (Q) =>
							tn(j.setCustomValidity) && j.setCustomValidity(Q),
						reportValidity: () => tn(j.reportValidity) && j.reportValidity()
					})
				const L = ve(u._fields, l)
				L && L._f && j && (L._f.ref = A.current)
			},
			[u._fields, l]
		),
		T = ue.useMemo(
			() => ({
				name: l,
				value: y,
				...(Cn(i) || b.disabled ? { disabled: b.disabled || i } : {}),
				onChange: S,
				onBlur: x,
				ref: C
			}),
			[l, i, b.disabled, S, x, C, y]
		)
	return (
		ue.useEffect(() => {
			const j = u._options.shouldUnregister || c
			u.register(l, {
				...R.current.rules,
				...(Cn(R.current.disabled) ? { disabled: R.current.disabled } : {})
			})
			const L = (Q, te) => {
				const fe = ve(u._fields, Q)
				fe && fe._f && (fe._f.mount = te)
			}
			if ((L(l, !0), j)) {
				const Q = Et(
					ve(
						c ? u._defaultValues : u._options.values || u._defaultValues,
						l,
						ve(u._options.defaultValues, l, R.current.defaultValue)
					)
				)
				;(it(u._defaultValues, l, Q),
					st(ve(u._formValues, l)) && it(u._formValues, l, Q))
			}
			if ((!p && u.register(l), A.current)) {
				const Q = ve(u._fields, l)
				Q && Q._f && (Q._f.ref = A.current)
			}
			return () => {
				;(p ? j && !u._state.action : j) ? u.unregister(l) : L(l, !1)
			}
		}, [l, u, p, c]),
		ue.useEffect(() => {
			u._setDisabledField({ disabled: i, name: l })
		}, [i, l, u]),
		ue.useMemo(() => ({ field: T, formState: b, fieldState: _ }), [T, b, _])
	)
}
const p4 = (n) => n.render(KD(n)),
	Fh = ue.createContext(null)
Fh.displayName = 'HookFormContext'
const m4 = () => ue.useContext(Fh),
	v4 = ({
		children: n,
		watch: r,
		getValues: l,
		getFieldState: i,
		setError: u,
		clearErrors: c,
		setValue: d,
		setValues: h,
		trigger: p,
		formState: v,
		resetField: y,
		reset: b,
		handleSubmit: R,
		unregister: A,
		control: M,
		register: _,
		setFocus: S,
		subscribe: x
	}) => {
		const C = ue.useMemo(
			() => ({
				watch: r,
				getValues: l,
				getFieldState: i,
				setError: u,
				clearErrors: c,
				setValue: d,
				setValues: h,
				trigger: p,
				formState: v,
				resetField: y,
				reset: b,
				handleSubmit: R,
				unregister: A,
				control: M,
				register: _,
				setFocus: S,
				subscribe: x
			}),
			[c, M, v, i, l, R, _, b, y, u, S, d, h, x, p, A, r]
		)
		return ue.createElement(
			Fh.Provider,
			{ value: C },
			ue.createElement(Hh.Provider, { value: C.control }, n)
		)
	}
var XD = (n, r, l, i, u) =>
		r
			? {
					...l[n],
					types: { ...(l[n] && l[n].types ? l[n].types : {}), [i]: u || !0 }
				}
			: {},
	kS = (n) => (Array.isArray(n) ? n.filter(Boolean) : []),
	ss = (n) => (Array.isArray(n) ? n : [n]),
	Bg = () => {
		let n = []
		return {
			get observers() {
				return n
			},
			next: (u) => {
				for (const c of n) c.next && c.next(u)
			},
			subscribe: (u) => (
				n.push(u),
				{
					unsubscribe: () => {
						n = n.filter((c) => c !== u)
					}
				}
			),
			unsubscribe: () => {
				n = []
			}
		}
	}
function HS(n, r) {
	const l = {}
	for (const i in n)
		if (n.hasOwnProperty(i)) {
			const u = n[i],
				c = r[i]
			if (u && yt(u) && c) {
				const d = HS(u, c)
				yt(d) && (l[i] = d)
			} else n[i] && (l[i] = c)
		}
	return l
}
var Ft = (n) => yt(n) && !Object.keys(n).length,
	$h = (n) => n.type === 'file',
	_s = (n) => {
		if (!Is) return !1
		const r = n ? n.ownerDocument : 0
		return (
			n instanceof
			(r && r.defaultView ? r.defaultView.HTMLElement : HTMLElement)
		)
	},
	qS = (n) => n.type === 'select-multiple',
	Ih = (n) => n.type === 'radio',
	ZD = (n) => Ih(n) || No(n),
	_d = (n) => _s(n) && n.isConnected
function JD(n, r) {
	const l = r.slice(0, -1).length
	let i = 0
	for (; i < l; ) {
		if (Kt(n)) {
			n = void 0
			break
		}
		;((n = n[r[i]]), i++)
	}
	return n
}
function WD(n) {
	for (const r in n) if (n.hasOwnProperty(r) && !st(n[r])) return !1
	return !0
}
function Dt(n, r) {
	if (nn(r) && Object.prototype.hasOwnProperty.call(n, r))
		return (delete n[r], n)
	const l = Array.isArray(r) ? r : jo(r) ? [r] : Ys(r),
		i = l.length === 1 ? n : JD(n, l),
		u = l.length - 1,
		c = l[u]
	return (
		i && delete i[c],
		u !== 0 &&
			((yt(i) && Ft(i)) || (Array.isArray(i) && WD(i))) &&
			Dt(n, l.slice(0, -1)),
		n
	)
}
var eN = (n) => {
	for (const r in n) if (tn(n[r])) return !0
	return !1
}
function GS(n) {
	return Array.isArray(n) || (yt(n) && !eN(n))
}
function Xd(n, r = {}) {
	for (const l in n) {
		const i = n[l]
		GS(i)
			? ((r[l] = Array.isArray(i) ? [] : {}), Xd(i, r[l]))
			: st(i) || (r[l] = !0)
	}
	return r
}
function Zd(n) {
	if (n !== !1) {
		if (n === !0) return !0
		if (Array.isArray(n)) {
			const r = n.map((l) => Zd(l))
			return r.some((l) => l !== void 0) ? r : void 0
		}
		if (yt(n)) {
			const r = {}
			for (const l in n) {
				const i = Zd(n[l])
				st(i) || (r[l] = i)
			}
			return Object.keys(r).length ? r : void 0
		}
	}
}
function Va(n, r, l) {
	l || (l = Xd(r))
	for (const i in n) {
		const u = n[i]
		if (GS(u))
			st(r) || Kd(l[i])
				? (l[i] = Xd(u, Array.isArray(u) ? [] : {}))
				: Va(u, Kt(r) ? {} : r[i], l[i])
		else {
			const c = r[i]
			l[i] = !Tn(u, c)
		}
	}
	return Zd(l) || {}
}
const Pg = { value: !1, isValid: !1 },
	Vg = { value: !0, isValid: !0 }
var FS = (n) => {
		if (Array.isArray(n)) {
			if (n.length > 1) {
				const r = n
					.filter((l) => l && l.checked && !l.disabled)
					.map((l) => l.value)
				return { value: r, isValid: !!r.length }
			}
			return n[0].checked && !n[0].disabled
				? n[0].attributes && !st(n[0].attributes.value)
					? st(n[0].value) || n[0].value === ''
						? Vg
						: { value: n[0].value, isValid: !0 }
					: Vg
				: Pg
		}
		return Pg
	},
	$S = (n, { valueAsNumber: r, valueAsDate: l, setValueAs: i }) =>
		st(n)
			? n
			: r
				? n === ''
					? NaN
					: n && +n
				: l && nn(n)
					? new Date(n)
					: i
						? i(n)
						: n
const kg = { isValid: !1, value: null }
var IS = (n) =>
	Array.isArray(n)
		? n.reduce(
				(r, l) =>
					l && l.checked && !l.disabled ? { isValid: !0, value: l.value } : r,
				kg
			)
		: kg
function Hg(n) {
	const r = n.ref
	return $h(r)
		? r.files
		: Ih(r)
			? IS(n.refs).value
			: qS(r)
				? [...r.selectedOptions].map(({ value: l }) => l)
				: No(r)
					? FS(n.refs).value
					: $S(st(r.value) ? n.ref.value : r.value, n)
}
var tN = (n, r, l, i) => {
		const u = {}
		for (const c of n) {
			const d = ve(r, c)
			d && it(u, c, d._f)
		}
		return {
			criteriaMode: l,
			names: [...n],
			fields: u,
			shouldUseNativeValidation: i
		}
	},
	Es = (n) => n instanceof RegExp,
	co = (n) =>
		st(n)
			? n
			: Es(n)
				? n.source
				: yt(n)
					? Es(n.value)
						? n.value.source
						: n.value
					: n,
	qg = (n) => ({
		isOnSubmit: !n || n === Wn.onSubmit,
		isOnBlur: n === Wn.onBlur,
		isOnChange: n === Wn.onChange,
		isOnAll: n === Wn.all,
		isOnTouch: n === Wn.onTouched
	})
const Gg = 'AsyncFunction'
var nN = (n) =>
		!!n &&
		!!n.validate &&
		!!(
			(tn(n.validate) && n.validate.constructor.name === Gg) ||
			(yt(n.validate) &&
				Object.values(n.validate).find((r) => r.constructor.name === Gg))
		),
	rN = (n) =>
		n.mount &&
		(n.required ||
			n.min ||
			n.max ||
			n.maxLength ||
			n.minLength ||
			n.pattern ||
			n.validate),
	Ed = (n, r, l) =>
		!l &&
		(r.watchAll ||
			r.watch.has(n) ||
			[...r.watch].some((i) => n.startsWith(`${i}.`)))
const vo = (n, r, l, i) => {
	for (const u of l || Object.keys(n)) {
		const c = ve(n, u)
		if (c) {
			const { _f: d, ...h } = c
			if (d) {
				if (d.refs && d.refs[0] && r(d.refs[0], u) && !i) return !0
				if (d.ref && r(d.ref, d.name) && !i) return !0
				if (vo(h, r)) break
			} else if (yt(h) && vo(h, r)) break
		}
	}
}
function Fg(n, r, l) {
	const i = ve(n, l)
	if (i || jo(l)) return { error: i, name: l }
	const u = l.split('.')
	for (; u.length; ) {
		const c = u.join('.'),
			d = ve(r, c),
			h = ve(n, c)
		if (d && !Array.isArray(d) && l !== c) return { name: l }
		if (h && h.type) return { name: c, error: h }
		if (h && h.root && h.root.type) return { name: `${c}.root`, error: h.root }
		u.pop()
	}
	return { name: l }
}
var aN = (n, r, l, i) => {
		l(n)
		const { name: u, ...c } = n
		return (
			Ft(c) ||
			(i && Object.keys(c).length >= Object.keys(r).length) ||
			Object.keys(c).find((d) => r[d] === (!i || Wn.all))
		)
	},
	lN = (n, r, l) =>
		!n ||
		!r ||
		n === r ||
		ss(n).some((i) => i && (l ? i === r : i.startsWith(r) || r.startsWith(i))),
	iN = (n, r, l, i, u) =>
		u.isOnAll
			? !1
			: !l && u.isOnTouch
				? !(r || n)
				: (l ? i.isOnBlur : u.isOnBlur)
					? !n
					: (l ? i.isOnChange : u.isOnChange)
						? n
						: !0,
	oN = (n, r) => !kS(ve(n, r)).length && Dt(n, r),
	$g = (n, r, l) => {
		const i = ve(n, l),
			u = Array.isArray(i) ? i : []
		return (it(u, BS, r[l]), it(n, l, u), n)
	}
function Ig(n, r, l = 'validate') {
	if (nn(n) || (Array.isArray(n) && n.every(nn)) || (Cn(n) && !n))
		return { type: l, message: nn(n) ? n : '', ref: r }
}
var ql = (n) => (yt(n) && !Es(n) ? n : { value: n, message: '' }),
	Yg = async (n, r, l, i, u, c) => {
		const {
				ref: d,
				refs: h,
				required: p,
				maxLength: v,
				minLength: y,
				min: b,
				max: R,
				pattern: A,
				validate: M,
				name: _,
				valueAsNumber: S,
				mount: x
			} = n._f,
			C = ve(l, _)
		if (!x || r.has(_)) return {}
		const T = h ? h[0] : d,
			j = (I) => {
				if (u && T.reportValidity) {
					const X = Cn(I) ? '' : I || ''
					;(h
						? h.forEach((ne) => ne.setCustomValidity(X))
						: T.setCustomValidity(X),
						T.reportValidity())
				}
			},
			L = {},
			Q = Ih(d),
			te = No(d),
			fe = Q || te,
			_e =
				((S || $h(d)) && st(d.value) && st(C)) ||
				(_s(d) && d.value === '') ||
				C === '' ||
				(Array.isArray(C) && !C.length),
			be = XD.bind(null, _, i, L),
			de = (I, X, ne, se = Jn.maxLength, G = Jn.minLength) => {
				const re = I ? X : ne
				L[_] = { type: I ? se : G, message: re, ref: d, ...be(I ? se : G, re) }
			}
		if (
			c
				? !Array.isArray(C) || !C.length
				: p &&
					((!fe && (_e || Kt(C))) ||
						(Cn(C) && !C) ||
						(te && !FS(h).isValid) ||
						(Q && !IS(h).isValid))
		) {
			const { value: I, message: X } = nn(p)
				? { value: !!p, message: p }
				: ql(p)
			if (
				I &&
				((L[_] = {
					type: Jn.required,
					message: X,
					ref: T,
					...be(Jn.required, X)
				}),
				!i)
			)
				return (j(X), L)
		}
		if (!_e && (!Kt(b) || !Kt(R))) {
			let I, X
			const ne = ql(R),
				se = ql(b)
			if (!Kt(C) && !isNaN(C)) {
				const G = d.valueAsNumber || (C && +C)
				;(Kt(ne.value) || (I = G > ne.value),
					Kt(se.value) || (X = G < se.value))
			} else {
				const G = d.valueAsDate || new Date(C),
					re = (O) => new Date(new Date().toDateString() + ' ' + O),
					ae = d.type == 'time',
					ee = d.type == 'week'
				;(nn(ne.value) &&
					C &&
					(I = ae
						? re(C) > re(ne.value)
						: ee
							? C > ne.value
							: G > new Date(ne.value)),
					nn(se.value) &&
						C &&
						(X = ae
							? re(C) < re(se.value)
							: ee
								? C < se.value
								: G < new Date(se.value)))
			}
			if ((I || X) && (de(!!I, ne.message, se.message, Jn.max, Jn.min), !i))
				return (j(L[_].message), L)
		}
		if ((v || y) && !_e && (nn(C) || (c && Array.isArray(C)))) {
			const I = ql(v),
				X = ql(y),
				ne = !Kt(I.value) && C.length > +I.value,
				se = !Kt(X.value) && C.length < +X.value
			if ((ne || se) && (de(ne, I.message, X.message), !i))
				return (j(L[_].message), L)
		}
		if (A && !_e && nn(C)) {
			const { value: I, message: X } = ql(A)
			if (
				Es(I) &&
				!C.match(I) &&
				((L[_] = {
					type: Jn.pattern,
					message: X,
					ref: d,
					...be(Jn.pattern, X)
				}),
				!i)
			)
				return (j(X), L)
		}
		if (M) {
			if (tn(M)) {
				const I = await M(C, l),
					X = Ig(I, T)
				if (X && ((L[_] = { ...X, ...be(Jn.validate, X.message) }), !i))
					return (j(X.message), L)
			} else if (yt(M)) {
				let I = {}
				for (const X in M) {
					if (!Ft(I) && !i) break
					const ne = Ig(await M[X](C, l), T, X)
					ne &&
						((I = { ...ne, ...be(X, ne.message) }),
						j(ne.message),
						i && (L[_] = I))
				}
				if (!Ft(I) && ((L[_] = { ref: T, ...I }), !i)) return L
			}
		}
		return (j(!0), L)
	}
const uN = {
		mode: Wn.onSubmit,
		reValidateMode: Wn.onChange,
		shouldFocusError: !0
	},
	YS = {
		submitCount: 0,
		isDirty: !1,
		isReady: !1,
		isValidating: !1,
		isSubmitted: !1,
		isSubmitting: !1,
		isSubmitSuccessful: !1,
		isValid: !1,
		touchedFields: {},
		dirtyFields: {},
		validatingFields: {}
	}
function sN(n = {}) {
	let r = { ...uN, ...n },
		l = {
			...Et(YS),
			isLoading: tn(r.defaultValues),
			errors: r.errors || {},
			disabled: r.disabled || !1
		},
		i = {},
		u =
			yt(r.defaultValues) || yt(r.values)
				? Et(r.defaultValues || r.values) || {}
				: {},
		c = r.shouldUnregister ? {} : Et(u),
		d = { action: !1, mount: !1, watch: !1, keepIsValid: !1 },
		h = {
			mount: new Set(),
			disabled: new Set(),
			unMount: new Set(),
			array: new Set(),
			watch: new Set(),
			registerName: new Set()
		},
		p,
		v = 0
	const y = {
			isDirty: !1,
			dirtyFields: !1,
			validatingFields: !1,
			touchedFields: !1,
			isValidating: !1,
			isValid: !1,
			errors: !1
		},
		b = { ...y }
	let R = { ...b }
	const A = { array: Bg(), state: Bg() },
		M = r.criteriaMode === Wn.all,
		_ = (D) => (B) => {
			;(clearTimeout(v), (v = setTimeout(D, B)))
		},
		S = async (D) => {
			if (!d.keepIsValid && !r.disabled && (b.isValid || R.isValid || D)) {
				let B
				;(r.resolver
					? ((B = Ft((await be()).errors)), x())
					: (B = await X({
							fields: i,
							onlyCheckValid: !0,
							eventType: da.VALID
						})),
					B !== l.isValid && A.state.next({ isValid: B }))
			}
		},
		x = (D, B) => {
			!r.disabled &&
				(b.isValidating ||
					b.validatingFields ||
					R.isValidating ||
					R.validatingFields) &&
				((D || Array.from(h.mount)).forEach((P) => {
					P && (B ? it(l.validatingFields, P, B) : Dt(l.validatingFields, P))
				}),
				A.state.next({
					validatingFields: l.validatingFields,
					isValidating: !Ft(l.validatingFields)
				}))
		},
		C = () => {
			l.dirtyFields = Va(u, c)
		},
		T = (D, B = [], P, oe, he = !0, me = !0) => {
			if (oe && P && !r.disabled) {
				if (((d.action = !0), me && Array.isArray(ve(i, D)))) {
					const ce = P(ve(i, D), oe.argA, oe.argB)
					he && it(i, D, ce)
				}
				if (me && Array.isArray(ve(l.errors, D))) {
					const ce = P(ve(l.errors, D), oe.argA, oe.argB)
					;(he && it(l.errors, D, ce), oN(l.errors, D))
				}
				if (
					(b.touchedFields || R.touchedFields) &&
					me &&
					Array.isArray(ve(l.touchedFields, D))
				) {
					const ce = P(ve(l.touchedFields, D), oe.argA, oe.argB)
					he && it(l.touchedFields, D, ce)
				}
				;((b.dirtyFields || R.dirtyFields) && C(),
					A.state.next({
						name: D,
						isDirty: se(D, B),
						dirtyFields: l.dirtyFields,
						errors: l.errors,
						isValid: l.isValid
					}))
			} else it(c, D, B)
		},
		j = (D, B) => {
			;(it(l.errors, D, B),
				(l.errors = { ...l.errors }),
				A.state.next({ errors: l.errors }))
		},
		L = (D) => {
			;((l.errors = D), A.state.next({ errors: l.errors, isValid: !1 }))
		},
		Q = (D) => {
			const B = jo(D) ? [D] : Ys(D)
			let P = c,
				oe = u
			for (let he = 0; he < B.length - 1; he++) {
				const me = B[he]
				if (
					((P = Kt(P) ? P : P[me]),
					(oe = Kt(oe) ? oe : oe[me]),
					P === null && oe !== null)
				)
					return !0
			}
			return !1
		},
		te = (D, B, P, oe) => {
			const he = ve(i, D)
			if (he) {
				if (Q(D)) return
				const me = st(ve(c, D)),
					ce = ve(c, D, st(P) ? ve(u, D) : P)
				;(st(ce) || (oe && oe.defaultChecked) || B
					? it(c, D, B ? ce : Hg(he._f))
					: ae(D, ce),
					d.mount &&
						!d.action &&
						(S(),
						me &&
							l.isDirty &&
							(b.isDirty || R.isDirty) &&
							(se() || ((l.isDirty = !1), A.state.next({ ...l }))),
						n.shouldUnregister &&
							me &&
							!st(ve(c, D)) &&
							Ed(D, h) &&
							(d.watch = !0)))
			}
		},
		fe = (D, B, P, oe, he) => {
			let me = !1,
				ce = !1
			const Se = { name: D }
			if (!r.disabled) {
				if (!P || oe) {
					;(b.isDirty || R.isDirty) &&
						((ce = l.isDirty),
						(l.isDirty = Se.isDirty = se()),
						(me = ce !== Se.isDirty))
					const De = Tn(ve(u, D), B)
					;((ce = !!ve(l.dirtyFields, D)),
						De !== l.isDirty
							? (l.dirtyFields = Va(u, c))
							: De
								? Dt(l.dirtyFields, D)
								: it(l.dirtyFields, D, !0),
						(Se.dirtyFields = l.dirtyFields),
						(me = me || ((b.dirtyFields || R.dirtyFields) && ce !== !De)))
				}
				if (P) {
					const De = ve(l.touchedFields, D)
					De ||
						(it(l.touchedFields, D, P),
						(Se.touchedFields = l.touchedFields),
						(me = me || ((b.touchedFields || R.touchedFields) && De !== P)))
				}
				me && he && A.state.next(Se)
			}
			return me ? Se : {}
		},
		_e = (D, B, P, oe) => {
			const he = ve(l.errors, D),
				me = (b.isValid || R.isValid) && Cn(B) && l.isValid !== B
			if (
				(r.delayError && P
					? ((p = _(() => j(D, P))), p(r.delayError))
					: (clearTimeout(v),
						(p = null),
						P ? it(l.errors, D, P) : Dt(l.errors, D),
						(l.errors = { ...l.errors })),
				(P ? !Tn(he, P) : he) || !Ft(oe) || me)
			) {
				const ce = {
					...oe,
					...(me && Cn(B) ? { isValid: B } : {}),
					errors: l.errors,
					name: D
				}
				;((l = { ...l, ...ce }), A.state.next(ce))
			}
		},
		be = async (D) => (
			x(D, !0),
			await r.resolver(
				c,
				r.context,
				tN(D || h.mount, i, r.criteriaMode, r.shouldUseNativeValidation)
			)
		),
		de = async (D) => {
			const { errors: B } = await be(D)
			if ((x(D), D)) {
				for (const P of D) {
					const oe = ve(B, P)
					oe
						? h.array.has(P) &&
							yt(oe) &&
							!Object.keys(oe).some((he) => !Number.isNaN(Number(he)))
							? $g(l.errors, { [P]: oe }, P)
							: it(l.errors, P, oe)
						: Dt(l.errors, P)
				}
				l.errors = { ...l.errors }
			} else l.errors = B
			return B
		},
		I = async ({ name: D, eventType: B }) => {
			if (n.validate) {
				const P = await n.validate({
					formValues: c,
					formState: l,
					name: D,
					eventType: B
				})
				if (yt(P))
					for (const oe in P) {
						const he = P[oe]
						he &&
							je(`${Sd}.${oe}`, {
								message: nn(he.message) ? he.message : '',
								type: he.type || Jn.validate
							})
					}
				else
					nn(P) || !P ? je(Sd, { message: P || '', type: Jn.validate }) : Ae(Sd)
				return P
			}
			return !0
		},
		X = async ({
			fields: D,
			onlyCheckValid: B,
			name: P,
			eventType: oe,
			context: he = { valid: !0, runRootValidation: !1 }
		}) => {
			if (
				n.validate &&
				((he.runRootValidation = !0),
				!(await I({ name: P, eventType: oe })) && ((he.valid = !1), B))
			)
				return he.valid
			for (const me in D) {
				const ce = D[me]
				if (ce) {
					const { _f: Se, ...De } = ce
					if (Se) {
						const at = h.array.has(Se.name),
							bt = ce._f && nN(ce._f),
							Lt =
								b.validatingFields ||
								b.isValidating ||
								R.validatingFields ||
								R.isValidating
						bt && Lt && x([Se.name], !0)
						const on = await Yg(
							ce,
							h.disabled,
							c,
							M,
							r.shouldUseNativeValidation && !B,
							at
						)
						if (
							(bt && Lt && x([Se.name]),
							(on[Se.name] && ((he.valid = !1), B)) ||
								(!B &&
									(ve(on, Se.name)
										? at
											? $g(l.errors, on, Se.name)
											: it(l.errors, Se.name, on[Se.name])
										: Dt(l.errors, Se.name)),
								n.shouldUseNativeValidation && on[Se.name]))
						)
							break
					}
					!Ft(De) &&
						(await X({
							context: he,
							onlyCheckValid: B,
							fields: De,
							name: me,
							eventType: oe
						}))
				}
			}
			return he.valid
		},
		ne = () => {
			for (const D of h.unMount) {
				const B = ve(i, D)
				B &&
					(B._f.refs ? B._f.refs.every((P) => !_d(P)) : !_d(B._f.ref)) &&
					ht(D)
			}
			h.unMount = new Set()
		},
		se = (D, B) => !r.disabled && (D && B && it(c, D, B), !Tn(ge(), u)),
		G = (D, B, P) =>
			Qd(D, h, { ...(d.mount ? c : st(B) ? u : nn(D) ? { [D]: B } : B) }, P, B),
		re = (D) =>
			kS(ve(d.mount ? c : u, D, r.shouldUnregister ? ve(u, D, []) : [])),
		ae = (D, B, P = {}, oe = !1) => {
			const he = ve(i, D)
			let me = B
			if (he) {
				const ce = he._f
				ce &&
					(!ce.disabled && it(c, D, $S(B, ce)),
					(me = _s(ce.ref) && Kt(B) ? '' : B),
					qS(ce.ref)
						? [...ce.ref.options].forEach(
								(Se) => (Se.selected = me.includes(Se.value))
							)
						: ce.refs
							? No(ce.ref)
								? ce.refs.forEach((Se) => {
										;(!Se.defaultChecked || !Se.disabled) &&
											(Array.isArray(me)
												? (Se.checked = !!me.find((De) => De === Se.value))
												: (Se.checked = me === Se.value || !!me))
									})
								: ce.refs.forEach((Se) => (Se.checked = Se.value === me))
							: $h(ce.ref)
								? (ce.ref.value = '')
								: ((ce.ref.value = me),
									ce.ref.type ||
										A.state.next({ name: D, values: oe ? c : Et(c) })))
			}
			;((P.shouldDirty || P.shouldTouch) &&
				fe(D, me, P.shouldTouch, P.shouldDirty, !0),
				P.shouldValidate && we(D))
		},
		ee = (D, B, P, oe = !1) => {
			for (const he in B) {
				if (!B.hasOwnProperty(he)) return
				const me = B[he],
					ce = D + '.' + he,
					Se = ve(i, ce)
				;(h.array.has(D) || yt(me) || (Se && !Se._f)) && !Ha(me)
					? ee(ce, me, P, oe)
					: ae(ce, me, P, oe)
			}
		},
		O = (D, B, P, oe) => {
			const he = ve(i, D),
				me = h.array.has(D),
				ce = oe ? B : Et(B),
				Se = ve(c, D),
				De = Tn(Se, ce)
			if ((De || it(c, D, ce), me))
				(A.array.next({ name: D, values: oe ? c : Et(c) }),
					(b.isDirty || b.dirtyFields || R.isDirty || R.dirtyFields) &&
						P.shouldDirty &&
						(C(),
						A.state.next({
							name: D,
							dirtyFields: l.dirtyFields,
							isDirty: se(D, ce)
						})))
			else {
				const at = (Array.isArray(ce) && !ce.length) || Ft(ce)
				!he || he._f || Kt(ce) || at ? ae(D, ce, P, oe) : ee(D, ce, P, oe)
			}
			if (!De) {
				const at = Ed(D, h),
					bt = oe ? c : Et(c)
				A.state.next({
					...(at && l),
					name: d.mount || at ? D : void 0,
					values: bt
				})
			}
		},
		Y = (D, B, P = {}) => O(D, B, P, !1),
		ie = (D, B = {}) => {
			const P = tn(D) ? D(c) : D
			if (!Tn(c, P)) {
				c = { ...c, ...P }
				for (const oe of h.mount) O(oe, ve(P, oe), B, !0)
				;(A.state.next({ ...l, name: void 0, type: void 0, values: c }),
					B.shouldValidate && S())
			}
		},
		le = async (D) => {
			d.mount = !0
			const B = D.target
			let P = B.name,
				oe = !0
			const he = ve(i, P),
				me = (De) => {
					oe =
						Number.isNaN(De) ||
						(Ha(De) && isNaN(De.getTime())) ||
						Tn(De, ve(c, P, De))
				},
				ce = qg(r.mode),
				Se = qg(r.reValidateMode)
			if (he) {
				let De, at
				const bt = B.type ? Hg(he._f) : Yd(D),
					Lt = D.type === da.BLUR || D.type === da.FOCUS_OUT,
					on =
						(!rN(he._f) &&
							!n.validate &&
							!r.resolver &&
							!ve(l.errors, P) &&
							!he._f.deps) ||
						iN(Lt, ve(l.touchedFields, P), l.isSubmitted, Se, ce),
					ar = Ed(P, h, Lt)
				;(it(c, P, bt),
					Lt
						? (!B || !B.readOnly) &&
							(he._f.onBlur && he._f.onBlur(D), p && p(0))
						: he._f.onChange && he._f.onChange(D))
				const mn = fe(P, bt, Lt),
					vn = !Ft(mn) || ar
				if ((!Lt && A.state.next({ name: P, type: D.type, values: Et(c) }), on))
					return (
						(b.isValid || R.isValid) &&
							(r.mode === 'onBlur' ? Lt && S() : Lt || S()),
						vn && A.state.next({ name: P, ...(ar ? {} : mn) })
					)
				if (
					(!r.resolver &&
						n.validate &&
						(await I({ name: P, eventType: D.type })),
					!Lt && ar && A.state.next({ ...l }),
					r.resolver)
				) {
					const { errors: Za } = await be([P])
					if ((x([P]), me(bt), !oe)) {
						!Ft(mn) && A.state.next(mn)
						return
					}
					const Ja = Fg(l.errors, i, P),
						Sa = Fg(Za, i, Ja.name || P)
					;((De = Sa.error), (P = Sa.name), (at = Ft(Za)))
				} else
					(x([P], !0),
						(De = (await Yg(he, h.disabled, c, M, r.shouldUseNativeValidation))[
							P
						]),
						x([P]),
						me(bt),
						oe &&
							(De
								? (at = !1)
								: (b.isValid || R.isValid) &&
									(at = await X({
										fields: i,
										onlyCheckValid: !0,
										name: P,
										eventType: D.type
									}))))
				oe &&
					(he._f.deps &&
						(!Array.isArray(he._f.deps) || he._f.deps.length > 0) &&
						we(he._f.deps),
					_e(P, at, De, mn))
			}
		},
		pe = (D, B) => {
			if (ve(l.errors, B) && D.focus) return (D.focus(), 1)
		},
		we = async (D, B = {}) => {
			let P, oe
			const he = ss(D)
			if (r.resolver) {
				const me = await de(st(D) ? D : he)
				;((P = Ft(me)), (oe = D ? !he.some((ce) => ve(me, ce)) : P))
			} else
				D
					? ((oe = (
							await Promise.all(
								he.map(async (me) => {
									const ce = ve(i, me)
									return await X({
										fields: ce && ce._f ? { [me]: ce } : ce,
										eventType: da.TRIGGER
									})
								})
							)
						).every(Boolean)),
						!(!oe && !l.isValid) && S())
					: (oe = P = await X({ fields: i, name: D, eventType: da.TRIGGER }))
			return (
				A.state.next({
					...(!nn(D) || ((b.isValid || R.isValid) && P !== l.isValid)
						? {}
						: { name: D }),
					...(r.resolver || !D ? { isValid: P } : {}),
					errors: l.errors
				}),
				B.shouldFocus && !oe && vo(i, pe, D ? he : h.mount),
				oe
			)
		},
		ge = (D, B) => {
			let P = { ...(d.mount ? c : u) }
			return (
				B && (P = HS(B.dirtyFields ? l.dirtyFields : l.touchedFields, P)),
				st(D) ? P : nn(D) ? ve(P, D) : D.map((oe) => ve(P, oe))
			)
		},
		ye = (D, B) => ({
			invalid: !!ve((B || l).errors, D),
			isDirty: !!ve((B || l).dirtyFields, D),
			error: ve((B || l).errors, D),
			isValidating: !!ve(l.validatingFields, D),
			isTouched: !!ve((B || l).touchedFields, D)
		}),
		Ae = (D) => {
			const B = D ? ss(D) : void 0
			;(B == null || B.forEach((P) => Dt(l.errors, P)),
				B
					? B.forEach((P) => {
							A.state.next({ name: P, errors: l.errors })
						})
					: A.state.next({ errors: {} }))
		},
		je = (D, B, P) => {
			const oe = (ve(i, D, { _f: {} })._f || {}).ref,
				he = ve(l.errors, D) || {},
				{ ref: me, message: ce, type: Se, ...De } = he
			;(it(l.errors, D, { ...De, ...B, ref: oe }),
				A.state.next({ name: D, errors: l.errors, isValid: !1 }),
				P && P.shouldFocus && oe && oe.focus && oe.focus())
		},
		Be = (D, B) =>
			tn(D)
				? A.state.subscribe({
						next: (P) => 'values' in P && D(P.values || G(void 0, B), P)
					})
				: G(D, B, !0),
		Le = (D) =>
			A.state.subscribe({
				next: (B) => {
					if (
						lN(D.name, B.name, D.exact) &&
						aN(B, D.formState || b, ot, D.reRenderRoot)
					) {
						const P = { ...c }
						D.callback({ values: P, ...l, ...B, defaultValues: u })
					}
				}
			}).unsubscribe,
		Pe = (D) => (
			(d.mount = !0),
			(R = { ...R, ...D.formState }),
			Le({ ...D, formState: { ...y, ...D.formState } })
		),
		ht = (D, B = {}) => {
			for (const P of D ? ss(D) : h.mount)
				(h.mount.delete(P),
					h.array.delete(P),
					B.keepValue || (Dt(i, P), Dt(c, P)),
					!B.keepError && Dt(l.errors, P),
					!B.keepDirty && Dt(l.dirtyFields, P),
					!B.keepTouched && Dt(l.touchedFields, P),
					!B.keepIsValidating && Dt(l.validatingFields, P),
					!r.shouldUnregister && !B.keepDefaultValue && Dt(u, P))
			;(A.state.next({ values: Et(c) }),
				A.state.next({ ...l, ...(B.keepDirty ? { isDirty: se() } : {}) }),
				!B.keepIsValid && S())
		},
		pt = ({ disabled: D, name: B }) => {
			if ((Cn(D) && d.mount) || D || h.disabled.has(B)) {
				const he = h.disabled.has(B) !== !!D
				;(D ? h.disabled.add(B) : h.disabled.delete(B),
					he && d.mount && !d.action && S())
			}
		},
		Bt = (D, B = {}) => {
			let P = ve(i, D)
			const oe = Cn(B.disabled) || Cn(r.disabled),
				he = !h.registerName.has(D) && P && P._f && !P._f.mount
			return (
				it(i, D, {
					...(P || {}),
					_f: {
						...(P && P._f ? P._f : { ref: { name: D } }),
						name: D,
						mount: !0,
						...B
					}
				}),
				h.mount.add(D),
				P && !he
					? pt({ disabled: Cn(B.disabled) ? B.disabled : r.disabled, name: D })
					: te(D, !0, B.value),
				{
					...(oe ? { disabled: B.disabled || r.disabled } : {}),
					...(r.progressive
						? {
								required: !!B.required,
								min: co(B.min),
								max: co(B.max),
								minLength: co(B.minLength),
								maxLength: co(B.maxLength),
								pattern: co(B.pattern)
							}
						: {}),
					name: D,
					onChange: le,
					onBlur: le,
					ref: (me) => {
						if (me) {
							;(h.registerName.add(D),
								Bt(D, B),
								h.registerName.delete(D),
								(P = ve(i, D)))
							const ce =
									(st(me.value) &&
										me.querySelectorAll &&
										me.querySelectorAll('input,select,textarea')[0]) ||
									me,
								Se = ZD(ce),
								De = P._f.refs || []
							if (Se ? De.find((at) => at === ce) : ce === P._f.ref) return
							;(it(i, D, {
								_f: {
									...P._f,
									...(Se
										? {
												refs: [
													...De.filter(_d),
													ce,
													...(Array.isArray(ve(u, D)) ? [{}] : [])
												],
												ref: { type: ce.type, name: D }
											}
										: { ref: ce })
								}
							}),
								te(D, !1, void 0, ce))
						} else
							((P = ve(i, D, {})),
								P._f && (P._f.mount = !1),
								(r.shouldUnregister || B.shouldUnregister) &&
									!(US(h.array, D) && d.action) &&
									h.unMount.add(D))
					}
				}
			)
		},
		Nt = () =>
			r.shouldFocusError && !r.shouldUseNativeValidation && vo(i, pe, h.mount),
		ct = (D) => {
			Cn(D) &&
				(A.state.next({ disabled: D }),
				vo(
					i,
					(B, P) => {
						const oe = ve(i, P)
						oe &&
							((B.disabled = oe._f.disabled || D),
							Array.isArray(oe._f.refs) &&
								oe._f.refs.forEach((he) => {
									he.disabled = oe._f.disabled || D
								}))
					},
					0,
					!1
				))
		},
		rr = (D, B) => async (P) => {
			let oe
			P && (P.preventDefault && P.preventDefault(), P.persist && P.persist())
			let he = Et(c)
			if ((A.state.next({ isSubmitting: !0 }), r.resolver)) {
				const { errors: me, values: ce } = await be()
				;(x(), (l.errors = me), (he = Et(ce)))
			} else await X({ fields: i, eventType: da.SUBMIT })
			if (h.disabled.size) for (const me of h.disabled) Dt(he, me)
			if ((Dt(l.errors, BS), Ft(l.errors))) {
				A.state.next({ errors: {} })
				try {
					await D(he, P)
				} catch (me) {
					oe = me
				}
			} else (B && (await B({ ...l.errors }, P)), Nt(), setTimeout(Nt))
			if (
				(A.state.next({
					isSubmitted: !0,
					isSubmitting: !1,
					isSubmitSuccessful: Ft(l.errors) && !oe,
					submitCount: l.submitCount + 1,
					errors: l.errors
				}),
				oe)
			)
				throw oe
		},
		Ye = (D, B = {}) => {
			ve(i, D) &&
				(st(B.defaultValue)
					? Y(D, Et(ve(u, D)))
					: (Y(D, B.defaultValue), it(u, D, Et(B.defaultValue))),
				B.keepTouched || Dt(l.touchedFields, D),
				B.keepDirty ||
					(Dt(l.dirtyFields, D),
					(l.isDirty = B.defaultValue ? se(D, Et(ve(u, D))) : se())),
				B.keepError || (Dt(l.errors, D), b.isValid && S()),
				A.state.next({ ...l }))
		},
		Qe = (D, B = {}) => {
			const P = D ? Et(D) : u,
				oe = Et(P),
				he = Ft(D),
				me = oe
			if ((B.keepDefaultValues || (u = P), !B.keepValues)) {
				if (B.keepDirtyValues) {
					const ce = new Set([...h.mount, ...Object.keys(Va(u, c))])
					for (const Se of Array.from(ce)) {
						const De = ve(l.dirtyFields, Se),
							at = ve(c, Se),
							bt = ve(me, Se)
						De && !st(at) ? it(me, Se, at) : !De && !st(bt) && Y(Se, bt)
					}
				} else {
					if (Is && st(D))
						for (const ce of h.mount) {
							const Se = ve(i, ce)
							if (Se && Se._f) {
								const De = Array.isArray(Se._f.refs) ? Se._f.refs[0] : Se._f.ref
								if (_s(De)) {
									const at = De.closest('form')
									if (at) {
										at.reset()
										break
									}
								}
							}
						}
					if (B.keepFieldsRef) for (const ce of h.mount) Y(ce, ve(me, ce))
					else i = {}
				}
				if (r.shouldUnregister) {
					if (((c = B.keepDefaultValues ? Et(u) : {}), B.keepFieldsRef))
						for (const ce of h.mount) it(c, ce, ve(me, ce))
				} else c = Et(me)
				;(A.array.next({ values: { ...me } }),
					A.state.next({ values: { ...me } }))
			}
			;((h = {
				mount: B.keepDirtyValues ? h.mount : new Set(),
				unMount: new Set(),
				array: new Set(),
				registerName: new Set(),
				disabled: new Set(),
				watch: new Set(),
				watchAll: !1,
				focus: ''
			}),
				(d.mount =
					!b.isValid ||
					!!B.keepIsValid ||
					!!B.keepDirtyValues ||
					(!r.shouldUnregister && !Ft(me))),
				(d.watch = !!r.shouldUnregister),
				(d.keepIsValid = !!B.keepIsValid),
				(d.action = !1),
				B.keepErrors || (l.errors = {}),
				A.state.next({
					submitCount: B.keepSubmitCount ? l.submitCount : 0,
					isDirty: he
						? !1
						: B.keepDirty
							? l.isDirty
							: B.keepValues
								? se()
								: !!(B.keepDefaultValues && !Tn(D, u)),
					isSubmitted: B.keepIsSubmitted ? l.isSubmitted : !1,
					dirtyFields: he
						? {}
						: B.keepDirtyValues
							? B.keepDefaultValues && c
								? Va(u, c)
								: l.dirtyFields
							: B.keepDefaultValues && D
								? Va(u, D)
								: B.keepDirty
									? l.dirtyFields
									: {},
					touchedFields: B.keepTouched ? l.touchedFields : {},
					errors: B.keepErrors ? l.errors : {},
					isSubmitSuccessful: B.keepIsSubmitSuccessful
						? l.isSubmitSuccessful
						: !1,
					isSubmitting: !1,
					defaultValues: u
				}))
		},
		Ge = (D, B) => Qe(tn(D) ? D(c) : D, { ...r.resetOptions, ...B }),
		jt = (D, B = {}) => {
			const P = ve(i, D),
				oe = P && P._f
			if (oe) {
				const he = oe.refs ? oe.refs[0] : oe.ref
				he.focus &&
					setTimeout(() => {
						;(he.focus(), B.shouldSelect && tn(he.select) && he.select())
					})
			}
		},
		ot = (D) => {
			l = { ...l, ...D }
		},
		xt = {
			control: {
				register: Bt,
				unregister: ht,
				getFieldState: ye,
				handleSubmit: rr,
				setError: je,
				_subscribe: Le,
				_runSchema: be,
				_updateIsValidating: x,
				_focusError: Nt,
				_getWatch: G,
				_getDirty: se,
				_setValid: S,
				_setFieldArray: T,
				_setDisabledField: pt,
				_setErrors: L,
				_getFieldArray: re,
				_reset: Qe,
				_resetDefaultValues: () =>
					tn(r.defaultValues) &&
					r.defaultValues().then((D) => {
						;(Ge(D, r.resetOptions), A.state.next({ isLoading: !1 }))
					}),
				_removeUnmounted: ne,
				_disableForm: ct,
				_subjects: A,
				_proxyFormState: b,
				get _fields() {
					return i
				},
				get _formValues() {
					return c
				},
				get _state() {
					return d
				},
				set _state(D) {
					d = D
				},
				get _defaultValues() {
					return u
				},
				get _names() {
					return h
				},
				set _names(D) {
					h = D
				},
				get _formState() {
					return l
				},
				get _options() {
					return r
				},
				set _options(D) {
					r = { ...r, ...D }
				}
			},
			subscribe: Pe,
			trigger: we,
			register: Bt,
			handleSubmit: rr,
			watch: Be,
			setValue: Y,
			setValues: ie,
			getValues: ge,
			reset: Ge,
			resetField: Ye,
			resetDefaultValues: (D, B = {}) => {
				if (((u = Et(D)), !B.keepDirty)) {
					const P = Va(u, c)
					;((l.dirtyFields = P), (l.isDirty = !Ft(P)))
				}
				;(B.keepIsValid || S(), A.state.next({ ...l, defaultValues: u }))
			},
			clearErrors: Ae,
			unregister: ht,
			setError: je,
			setFocus: jt,
			getFieldState: ye
		}
	return { ...xt, formControl: xt }
}
function cN(n = {}) {
	const r = ue.useRef(void 0),
		l = ue.useRef(void 0),
		i = ue.useRef(n.formControl),
		[u, c] = ue.useState(() => ({
			...Et(YS),
			isLoading: tn(n.defaultValues),
			errors: n.errors || {},
			disabled: n.disabled || !1,
			defaultValues: tn(n.defaultValues) ? void 0 : n.defaultValues
		}))
	if (!r.current || (n.formControl && i.current !== n.formControl))
		if (((i.current = n.formControl), n.formControl))
			((r.current = { ...n.formControl, formState: u }),
				n.defaultValues &&
					!tn(n.defaultValues) &&
					n.formControl.reset(n.defaultValues, n.resetOptions))
		else {
			const { formControl: h, ...p } = sN(n)
			r.current = { ...p, formState: u }
		}
	const d = r.current.control
	return (
		(d._options = n),
		Gh(() => {
			const h = d._subscribe({
				formState: d._proxyFormState,
				callback: () => c({ ...d._formState, defaultValues: d._defaultValues }),
				reRenderRoot: !0
			})
			return (c((p) => ({ ...p, isReady: !0 })), (d._formState.isReady = !0), h)
		}, [d]),
		ue.useEffect(() => d._disableForm(n.disabled), [d, n.disabled]),
		ue.useEffect(() => {
			;(n.mode && (d._options.mode = n.mode),
				n.reValidateMode && (d._options.reValidateMode = n.reValidateMode))
		}, [d, n.mode, n.reValidateMode]),
		ue.useEffect(() => {
			n.errors && (d._setErrors(n.errors), d._focusError())
		}, [d, n.errors]),
		ue.useEffect(() => {
			n.shouldUnregister && d._subjects.state.next({ values: d._getWatch() })
		}, [d, n.shouldUnregister]),
		ue.useEffect(() => {
			if (d._proxyFormState.isDirty) {
				const h = d._getDirty()
				h !== u.isDirty && d._subjects.state.next({ isDirty: h })
			}
		}, [d, u.isDirty]),
		ue.useEffect(() => {
			var h
			n.values && !Tn(n.values, l.current)
				? (d._reset(n.values, {
						keepFieldsRef: !0,
						...d._options.resetOptions
					}),
					(!((h = d._options.resetOptions) === null || h === void 0) &&
						h.keepIsValid) ||
						d._setValid(),
					(l.current = n.values),
					c((p) => ({ ...p })))
				: d._resetDefaultValues()
		}, [d, n.values]),
		ue.useEffect(() => {
			;(d._state.mount || (d._setValid(), (d._state.mount = !0)),
				d._state.watch &&
					((d._state.watch = !1), d._subjects.state.next({ ...d._formState })),
				d._removeUnmounted())
		}),
		(r.current.formState = ue.useMemo(() => VS(u, d), [d, u])),
		r.current
	)
}
var fN = Object.defineProperty,
	Pa = (n, r) => fN(n, 'name', { value: r, configurable: !0 }),
	y4 = Pa(
		({
			refineCoreProps: n,
			warnWhenUnsavedChanges: r,
			disableServerSideValidation: l = !1,
			...i
		} = {}) => {
			const { options: u } = oR(),
				c = (u == null ? void 0 : u.disableServerSideValidation) || l,
				d = rh(),
				{ warnWhenUnsavedChanges: h, setWarnWhen: p } = ab(),
				v = r ?? h,
				y = cN({ ...i }),
				{
					control: b,
					watch: R,
					setValue: A,
					getValues: M,
					handleSubmit: _,
					setError: S,
					formState: { dirtyFields: x }
				} = y,
				C = ue.useRef(void 0),
				T = ue.useRef(new Set()),
				j = ue.useRef(new Set()),
				L = uR({
					...n,
					onMutationError: (G, re, ae) => {
						var ee, O
						if (c) {
							;(ee = n == null ? void 0 : n.onMutationError) == null ||
								ee.call(n, G, re, ae)
							return
						}
						const Y = G == null ? void 0 : G.errors
						for (const ie in Y) {
							if (!Object.keys(wy(re)).includes(ie)) continue
							const pe = Y[ie]
							let we = ''
							;(Array.isArray(pe) && (we = pe.join(' ')),
								typeof pe == 'string' && (we = pe),
								typeof pe == 'boolean' && pe && (we = 'Field is not valid.'),
								typeof pe == 'object' &&
									'key' in pe &&
									(we = d(pe.key, pe.message)),
								S(ie, { message: we }))
						}
						;(O = n == null ? void 0 : n.onMutationError) == null ||
							O.call(n, G, re, ae)
					}
				}),
				{ query: Q, onFinish: te, formLoading: fe, onFinishAutoSave: _e } = L,
				be = Pa(() => {
					var G
					const re = ((G = b._names) == null ? void 0 : G.mount) ?? new Set()
					return new Set(re)
				}, 'getMountedFields'),
				de = Pa(() => {
					const G = new Set()
					be().forEach((ee) => G.add(ee))
					const ae = M()
					return (
						Object.keys(wy(ae)).forEach((ee) => {
							G.add(ee)
						}),
						G
					)
				}, 'getRegisteredFields'),
				I = Pa((G, re, ae = !1) => {
					G.forEach((ee) => {
						if (!T.current.has(ee)) {
							if (ae && xy(x, ee)) {
								T.current.add(ee)
								return
							}
							;(T.current.add(ee), J1(re, ee) && A(ee, xy(re, ee)))
						}
					})
				}, 'applyValuesToFields')
			;(m.useEffect(() => {
				var G
				const re = (G = Q == null ? void 0 : Q.data) == null ? void 0 : G.data
				if (!re) {
					;((C.current = void 0),
						(T.current = new Set()),
						(j.current = new Set()))
					return
				}
				let ae = !0
				const ee = Pa(() => {
					ae && I(de(), re, !1)
				}, 'applyQueryValues')
				return (
					(C.current = re),
					(T.current = new Set()),
					(j.current = be()),
					typeof queueMicrotask == 'function'
						? queueMicrotask(ee)
						: Promise.resolve().then(ee),
					() => {
						ae = !1
					}
				)
			}, [Q == null ? void 0 : Q.data, A, M]),
				m.useEffect(() => {
					const G = R((re, { type: ae }) => {
						ae === 'change' && X(re)
					})
					return () => G.unsubscribe()
				}, [R]),
				m.useEffect(() => {
					const G = C.current
					if (!G) return
					const re = be()
					if (!re.size) return
					let ae = !1
					;(re.forEach((ee) => {
						j.current.has(ee) || (ae = !0)
					}),
						ae && ((j.current = new Set(re)), I(re, G, !0)))
				}))
			const X = Pa((G) => {
					var re, ae
					if (
						(v && p(!0),
						(re = n == null ? void 0 : n.autoSave) != null && re.enabled)
					) {
						p(!1)
						const ee =
							((ae = n.autoSave) == null ? void 0 : ae.onFinish) ?? ((O) => O)
						return _e(ee(G)).catch((O) => O)
					}
					return G
				}, 'onValuesChange'),
				ne = Pa((G, re) => async (ae) => (p(!1), _(G, re)(ae)), 'handleSubmit')
			return {
				...y,
				handleSubmit: ne,
				refineCore: L,
				saveButtonProps: {
					disabled: fe,
					onClick: (G) => {
						ne(
							(re) => te(re).catch(() => {}),
							() => !1
						)(G)
					}
				}
			}
		},
		'useForm'
	),
	Rd = {},
	ha =
		typeof globalThis < 'u'
			? globalThis
			: typeof window < 'u'
				? window
				: typeof global < 'u'
					? global
					: typeof self < 'u'
						? self
						: {},
	Jd = { exports: {} }
;(function (n, r) {
	var l = 200,
		i = '__lodash_hash_undefined__',
		u = 9007199254740991,
		c = '[object Arguments]',
		d = '[object Array]',
		h = '[object Boolean]',
		p = '[object Date]',
		v = '[object Error]',
		y = '[object Function]',
		b = '[object GeneratorFunction]',
		R = '[object Map]',
		A = '[object Number]',
		M = '[object Object]',
		_ = '[object Promise]',
		S = '[object RegExp]',
		x = '[object Set]',
		C = '[object String]',
		T = '[object Symbol]',
		j = '[object WeakMap]',
		L = '[object ArrayBuffer]',
		Q = '[object DataView]',
		te = '[object Float32Array]',
		fe = '[object Float64Array]',
		_e = '[object Int8Array]',
		be = '[object Int16Array]',
		de = '[object Int32Array]',
		I = '[object Uint8Array]',
		X = '[object Uint8ClampedArray]',
		ne = '[object Uint16Array]',
		se = '[object Uint32Array]',
		G = /[\\^$.*+?()[\]{}|]/g,
		re = /\w*$/,
		ae = /^\[object .+?Constructor\]$/,
		ee = /^(?:0|[1-9]\d*)$/,
		O = {}
	;((O[c] =
		O[d] =
		O[L] =
		O[Q] =
		O[h] =
		O[p] =
		O[te] =
		O[fe] =
		O[_e] =
		O[be] =
		O[de] =
		O[R] =
		O[A] =
		O[M] =
		O[S] =
		O[x] =
		O[C] =
		O[T] =
		O[I] =
		O[X] =
		O[ne] =
		O[se] =
			!0),
		(O[v] = O[y] = O[j] = !1))
	var Y = typeof ha == 'object' && ha && ha.Object === Object && ha,
		ie = typeof self == 'object' && self && self.Object === Object && self,
		le = Y || ie || Function('return this')(),
		pe = r && !r.nodeType && r,
		we = pe && !0 && n && !n.nodeType && n,
		ge = we && we.exports === pe
	function ye(w, H) {
		return (w.set(H[0], H[1]), w)
	}
	function Ae(w, H) {
		return (w.add(H), w)
	}
	function je(w, H) {
		for (var Z = -1, xe = w ? w.length : 0; ++Z < xe && H(w[Z], Z, w) !== !1; );
		return w
	}
	function Be(w, H) {
		for (var Z = -1, xe = H.length, mt = w.length; ++Z < xe; ) w[mt + Z] = H[Z]
		return w
	}
	function Le(w, H, Z, xe) {
		for (var mt = -1, Jt = w ? w.length : 0; ++mt < Jt; ) Z = H(Z, w[mt], mt, w)
		return Z
	}
	function Pe(w, H) {
		for (var Z = -1, xe = Array(w); ++Z < w; ) xe[Z] = H(Z)
		return xe
	}
	function ht(w, H) {
		return w == null ? void 0 : w[H]
	}
	function pt(w) {
		var H = !1
		if (w != null && typeof w.toString != 'function')
			try {
				H = !!(w + '')
			} catch {}
		return H
	}
	function Bt(w) {
		var H = -1,
			Z = Array(w.size)
		return (
			w.forEach(function (xe, mt) {
				Z[++H] = [mt, xe]
			}),
			Z
		)
	}
	function Nt(w, H) {
		return function (Z) {
			return w(H(Z))
		}
	}
	function ct(w) {
		var H = -1,
			Z = Array(w.size)
		return (
			w.forEach(function (xe) {
				Z[++H] = xe
			}),
			Z
		)
	}
	var rr = Array.prototype,
		Ye = Function.prototype,
		Qe = Object.prototype,
		Ge = le['__core-js_shared__'],
		jt = (function () {
			var w = /[^.]+$/.exec((Ge && Ge.keys && Ge.keys.IE_PROTO) || '')
			return w ? 'Symbol(src)_1.' + w : ''
		})(),
		ot = Ye.toString,
		Rt = Qe.hasOwnProperty,
		Pt = Qe.toString,
		xt = RegExp(
			'^' +
				ot
					.call(Rt)
					.replace(G, '\\$&')
					.replace(
						/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
						'$1.*?'
					) +
				'$'
		),
		D = ge ? le.Buffer : void 0,
		B = le.Symbol,
		P = le.Uint8Array,
		oe = Nt(Object.getPrototypeOf, Object),
		he = Object.create,
		me = Qe.propertyIsEnumerable,
		ce = rr.splice,
		Se = Object.getOwnPropertySymbols,
		De = D ? D.isBuffer : void 0,
		at = Nt(Object.keys, Object),
		bt = gn(le, 'DataView'),
		Lt = gn(le, 'Map'),
		on = gn(le, 'Promise'),
		ar = gn(le, 'Set'),
		mn = gn(le, 'WeakMap'),
		vn = gn(Object, 'create'),
		Za = cn(bt),
		Ja = cn(Lt),
		Sa = cn(on),
		ni = cn(ar),
		ri = cn(mn),
		ai = B ? B.prototype : void 0,
		Uo = ai ? ai.valueOf : void 0
	function Xt(w) {
		var H = -1,
			Z = w ? w.length : 0
		for (this.clear(); ++H < Z; ) {
			var xe = w[H]
			this.set(xe[0], xe[1])
		}
	}
	function Vt() {
		this.__data__ = vn ? vn(null) : {}
	}
	function Zt(w) {
		return this.has(w) && delete this.__data__[w]
	}
	function Dr(w) {
		var H = this.__data__
		if (vn) {
			var Z = H[w]
			return Z === i ? void 0 : Z
		}
		return Rt.call(H, w) ? H[w] : void 0
	}
	function li(w) {
		var H = this.__data__
		return vn ? H[w] !== void 0 : Rt.call(H, w)
	}
	function Js(w, H) {
		var Z = this.__data__
		return ((Z[w] = vn && H === void 0 ? i : H), this)
	}
	;((Xt.prototype.clear = Vt),
		(Xt.prototype.delete = Zt),
		(Xt.prototype.get = Dr),
		(Xt.prototype.has = li),
		(Xt.prototype.set = Js))
	function Fn(w) {
		var H = -1,
			Z = w ? w.length : 0
		for (this.clear(); ++H < Z; ) {
			var xe = w[H]
			this.set(xe[0], xe[1])
		}
	}
	function zo() {
		this.__data__ = []
	}
	function _a(w) {
		var H = this.__data__,
			Z = Ur(H, w)
		if (Z < 0) return !1
		var xe = H.length - 1
		return (Z == xe ? H.pop() : ce.call(H, Z, 1), !0)
	}
	function ii(w) {
		var H = this.__data__,
			Z = Ur(H, w)
		return Z < 0 ? void 0 : H[Z][1]
	}
	function Nr(w) {
		return Ur(this.__data__, w) > -1
	}
	function jr(w, H) {
		var Z = this.__data__,
			xe = Ur(Z, w)
		return (xe < 0 ? Z.push([w, H]) : (Z[xe][1] = H), this)
	}
	;((Fn.prototype.clear = zo),
		(Fn.prototype.delete = _a),
		(Fn.prototype.get = ii),
		(Fn.prototype.has = Nr),
		(Fn.prototype.set = jr))
	function On(w) {
		var H = -1,
			Z = w ? w.length : 0
		for (this.clear(); ++H < Z; ) {
			var xe = w[H]
			this.set(xe[0], xe[1])
		}
	}
	function Lr() {
		this.__data__ = { hash: new Xt(), map: new (Lt || Fn)(), string: new Xt() }
	}
	function Tt(w) {
		return Ea(this, w).delete(w)
	}
	function Bo(w) {
		return Ea(this, w).get(w)
	}
	function Po(w) {
		return Ea(this, w).has(w)
	}
	function vr(w, H) {
		return (Ea(this, w).set(w, H), this)
	}
	;((On.prototype.clear = Lr),
		(On.prototype.delete = Tt),
		(On.prototype.get = Bo),
		(On.prototype.has = Po),
		(On.prototype.set = vr))
	function yn(w) {
		this.__data__ = new Fn(w)
	}
	function Ws() {
		this.__data__ = new Fn()
	}
	function Vo(w) {
		return this.__data__.delete(w)
	}
	function ko(w) {
		return this.__data__.get(w)
	}
	function ec(w) {
		return this.__data__.has(w)
	}
	function Wa(w, H) {
		var Z = this.__data__
		if (Z instanceof Fn) {
			var xe = Z.__data__
			if (!Lt || xe.length < l - 1) return (xe.push([w, H]), this)
			Z = this.__data__ = new On(xe)
		}
		return (Z.set(w, H), this)
	}
	;((yn.prototype.clear = Ws),
		(yn.prototype.delete = Vo),
		(yn.prototype.get = ko),
		(yn.prototype.has = ec),
		(yn.prototype.set = Wa))
	function el(w, H) {
		var Z = il(w) || pi(w) ? Pe(w.length, String) : [],
			xe = Z.length,
			mt = !!xe
		for (var Jt in w)
			Rt.call(w, Jt) && !(mt && (Jt == 'length' || ac(Jt, xe))) && Z.push(Jt)
		return Z
	}
	function Mn(w, H, Z) {
		var xe = w[H]
		;(!(Rt.call(w, H) && hi(xe, Z)) || (Z === void 0 && !(H in w))) &&
			(w[H] = Z)
	}
	function Ur(w, H) {
		for (var Z = w.length; Z--; ) if (hi(w[Z][0], H)) return Z
		return -1
	}
	function Ho(w, H) {
		return w && rl(H, ul(H), w)
	}
	function lr(w, H, Z, xe, mt, Jt, bn) {
		var kt
		if ((xe && (kt = Jt ? xe(w, mt, Jt, bn) : xe(w)), kt !== void 0)) return kt
		if (!kr(w)) return w
		var Hr = il(w)
		if (Hr) {
			if (((kt = Qo(w)), !H)) return $o(w, kt)
		} else {
			var In = ir(w),
				vi = In == y || In == b
			if (mi(w)) return Go(w, H)
			if (In == M || In == c || (vi && !Jt)) {
				if (pt(w)) return Jt ? w : {}
				if (((kt = fi(vi ? {} : w)), !H)) return zr(w, Ho(kt, w))
			} else {
				if (!O[In]) return Jt ? w : {}
				kt = rc(w, In, lr, H)
			}
		}
		bn || (bn = new yn())
		var Ko = bn.get(w)
		if (Ko) return Ko
		if ((bn.set(w, kt), !Hr)) var Xo = Z ? Io(w) : ul(w)
		return (
			je(Xo || w, function (yi, qr) {
				;(Xo && ((qr = yi), (yi = w[qr])),
					Mn(kt, qr, lr(yi, H, Z, xe, qr, w, bn)))
			}),
			kt
		)
	}
	function oi(w) {
		return kr(w) ? he(w) : {}
	}
	function ui(w, H, Z) {
		var xe = H(w)
		return il(w) ? xe : Be(xe, Z(w))
	}
	function tc(w) {
		return Pt.call(w)
	}
	function qo(w) {
		if (!kr(w) || di(w)) return !1
		var H = Vr(w) || pt(w) ? xt : ae
		return H.test(cn(w))
	}
	function un(w) {
		if (!ll(w)) return at(w)
		var H = []
		for (var Z in Object(w)) Rt.call(w, Z) && Z != 'constructor' && H.push(Z)
		return H
	}
	function Go(w, H) {
		if (H) return w.slice()
		var Z = new w.constructor(w.length)
		return (w.copy(Z), Z)
	}
	function si(w) {
		var H = new w.constructor(w.byteLength)
		return (new P(H).set(new P(w)), H)
	}
	function tl(w, H) {
		var Z = H ? si(w.buffer) : w.buffer
		return new w.constructor(Z, w.byteOffset, w.byteLength)
	}
	function Fo(w, H, Z) {
		var xe = H ? Z(Bt(w), !0) : Bt(w)
		return Le(xe, ye, new w.constructor())
	}
	function nl(w) {
		var H = new w.constructor(w.source, re.exec(w))
		return ((H.lastIndex = w.lastIndex), H)
	}
	function nc(w, H, Z) {
		var xe = H ? Z(ct(w), !0) : ct(w)
		return Le(xe, Ae, new w.constructor())
	}
	function sn(w) {
		return Uo ? Object(Uo.call(w)) : {}
	}
	function ci(w, H) {
		var Z = H ? si(w.buffer) : w.buffer
		return new w.constructor(Z, w.byteOffset, w.length)
	}
	function $o(w, H) {
		var Z = -1,
			xe = w.length
		for (H || (H = Array(xe)); ++Z < xe; ) H[Z] = w[Z]
		return H
	}
	function rl(w, H, Z, xe) {
		Z || (Z = {})
		for (var mt = -1, Jt = H.length; ++mt < Jt; ) {
			var bn = H[mt],
				kt = void 0
			Mn(Z, bn, kt === void 0 ? w[bn] : kt)
		}
		return Z
	}
	function zr(w, H) {
		return rl(w, Yo(w), H)
	}
	function Io(w) {
		return ui(w, ul, Yo)
	}
	function Ea(w, H) {
		var Z = w.__data__
		return al(H) ? Z[typeof H == 'string' ? 'string' : 'hash'] : Z.map
	}
	function gn(w, H) {
		var Z = ht(w, H)
		return qo(Z) ? Z : void 0
	}
	var Yo = Se ? Nt(Se, Object) : sl,
		ir = tc
	;((bt && ir(new bt(new ArrayBuffer(1))) != Q) ||
		(Lt && ir(new Lt()) != R) ||
		(on && ir(on.resolve()) != _) ||
		(ar && ir(new ar()) != x) ||
		(mn && ir(new mn()) != j)) &&
		(ir = function (w) {
			var H = Pt.call(w),
				Z = H == M ? w.constructor : void 0,
				xe = Z ? cn(Z) : void 0
			if (xe)
				switch (xe) {
					case Za:
						return Q
					case Ja:
						return R
					case Sa:
						return _
					case ni:
						return x
					case ri:
						return j
				}
			return H
		})
	function Qo(w) {
		var H = w.length,
			Z = w.constructor(H)
		return (
			H &&
				typeof w[0] == 'string' &&
				Rt.call(w, 'index') &&
				((Z.index = w.index), (Z.input = w.input)),
			Z
		)
	}
	function fi(w) {
		return typeof w.constructor == 'function' && !ll(w) ? oi(oe(w)) : {}
	}
	function rc(w, H, Z, xe) {
		var mt = w.constructor
		switch (H) {
			case L:
				return si(w)
			case h:
			case p:
				return new mt(+w)
			case Q:
				return tl(w, xe)
			case te:
			case fe:
			case _e:
			case be:
			case de:
			case I:
			case X:
			case ne:
			case se:
				return ci(w, xe)
			case R:
				return Fo(w, xe, Z)
			case A:
			case C:
				return new mt(w)
			case S:
				return nl(w)
			case x:
				return nc(w, xe, Z)
			case T:
				return sn(w)
		}
	}
	function ac(w, H) {
		return (
			(H = H ?? u),
			!!H &&
				(typeof w == 'number' || ee.test(w)) &&
				w > -1 &&
				w % 1 == 0 &&
				w < H
		)
	}
	function al(w) {
		var H = typeof w
		return H == 'string' || H == 'number' || H == 'symbol' || H == 'boolean'
			? w !== '__proto__'
			: w === null
	}
	function di(w) {
		return !!jt && jt in w
	}
	function ll(w) {
		var H = w && w.constructor,
			Z = (typeof H == 'function' && H.prototype) || Qe
		return w === Z
	}
	function cn(w) {
		if (w != null) {
			try {
				return ot.call(w)
			} catch {}
			try {
				return w + ''
			} catch {}
		}
		return ''
	}
	function Br(w) {
		return lr(w, !0, !0)
	}
	function hi(w, H) {
		return w === H || (w !== w && H !== H)
	}
	function pi(w) {
		return (
			$n(w) &&
			Rt.call(w, 'callee') &&
			(!me.call(w, 'callee') || Pt.call(w) == c)
		)
	}
	var il = Array.isArray
	function Pr(w) {
		return w != null && or(w.length) && !Vr(w)
	}
	function $n(w) {
		return ol(w) && Pr(w)
	}
	var mi = De || cl
	function Vr(w) {
		var H = kr(w) ? Pt.call(w) : ''
		return H == y || H == b
	}
	function or(w) {
		return typeof w == 'number' && w > -1 && w % 1 == 0 && w <= u
	}
	function kr(w) {
		var H = typeof w
		return !!w && (H == 'object' || H == 'function')
	}
	function ol(w) {
		return !!w && typeof w == 'object'
	}
	function ul(w) {
		return Pr(w) ? el(w) : un(w)
	}
	function sl() {
		return []
	}
	function cl() {
		return !1
	}
	n.exports = Br
})(Jd, Jd.exports)
var qa = Jd.exports,
	Rs = function () {
		return (
			(Rs =
				Object.assign ||
				function (r) {
					for (var l, i = 1, u = arguments.length; i < u; i++) {
						l = arguments[i]
						for (var c in l)
							Object.prototype.hasOwnProperty.call(l, c) && (r[c] = l[c])
					}
					return r
				}),
			Rs.apply(this, arguments)
		)
	}
function dN(n, r, l, i) {
	function u(c) {
		return c instanceof l
			? c
			: new l(function (d) {
					d(c)
				})
	}
	return new (l || (l = Promise))(function (c, d) {
		function h(y) {
			try {
				v(i.next(y))
			} catch (b) {
				d(b)
			}
		}
		function p(y) {
			try {
				v(i.throw(y))
			} catch (b) {
				d(b)
			}
		}
		function v(y) {
			y.done ? c(y.value) : u(y.value).then(h, p)
		}
		v((i = i.apply(n, [])).next())
	})
}
function hN(n, r) {
	var l = {
			label: 0,
			sent: function () {
				if (c[0] & 1) throw c[1]
				return c[1]
			},
			trys: [],
			ops: []
		},
		i,
		u,
		c,
		d = Object.create(
			(typeof Iterator == 'function' ? Iterator : Object).prototype
		)
	return (
		(d.next = h(0)),
		(d.throw = h(1)),
		(d.return = h(2)),
		typeof Symbol == 'function' &&
			(d[Symbol.iterator] = function () {
				return this
			}),
		d
	)
	function h(v) {
		return function (y) {
			return p([v, y])
		}
	}
	function p(v) {
		if (i) throw new TypeError('Generator is already executing.')
		for (; d && ((d = 0), v[0] && (l = 0)), l; )
			try {
				if (
					((i = 1),
					u &&
						(c =
							v[0] & 2
								? u.return
								: v[0]
									? u.throw || ((c = u.return) && c.call(u), 0)
									: u.next) &&
						!(c = c.call(u, v[1])).done)
				)
					return c
				switch (((u = 0), c && (v = [v[0] & 2, c.value]), v[0])) {
					case 0:
					case 1:
						c = v
						break
					case 4:
						return (l.label++, { value: v[1], done: !1 })
					case 5:
						;(l.label++, (u = v[1]), (v = [0]))
						continue
					case 7:
						;((v = l.ops.pop()), l.trys.pop())
						continue
					default:
						if (
							((c = l.trys),
							!(c = c.length > 0 && c[c.length - 1]) &&
								(v[0] === 6 || v[0] === 2))
						) {
							l = 0
							continue
						}
						if (v[0] === 3 && (!c || (v[1] > c[0] && v[1] < c[3]))) {
							l.label = v[1]
							break
						}
						if (v[0] === 6 && l.label < c[1]) {
							;((l.label = c[1]), (c = v))
							break
						}
						if (c && l.label < c[2]) {
							;((l.label = c[2]), l.ops.push(v))
							break
						}
						;(c[2] && l.ops.pop(), l.trys.pop())
						continue
				}
				v = r.call(n, l)
			} catch (y) {
				;((v = [6, y]), (u = 0))
			} finally {
				i = c = 0
			}
		if (v[0] & 5) throw v[1]
		return { value: v[0] ? v[1] : void 0, done: !0 }
	}
}
function xs(n, r, l, i, u) {
	return dN(this, void 0, void 0, function () {
		var c, d
		return hN(this, function (h) {
			switch (h.label) {
				case 0:
					if (l === void 0) return [2]
					;((d = 0), (h.label = 1))
				case 1:
					return d < l.length ? [4, l[d](n, r, i, u, l)] : [3, 4]
				case 2:
					if (((c = h.sent()), c === 'canceled')) return [3, 4]
					h.label = 3
				case 3:
					return (d++, [3, 1])
				case 4:
					return c !== 'canceled' ? [2, c] : [2]
			}
		})
	})
}
var Qg = function (n, r) {
		return (
			r === void 0 && (r = {}),
			n
				? {
						trackedAnalytics: Rs(
							Rs(
								{
									sdkCode: n.sdkCode,
									sdkSemver: n.sdkSemver,
									techVersion: n.techVersion
								},
								n.product !== void 0 && { product: n.product }
							),
							r
						)
					}
				: null
		)
	},
	pN = (function () {
		function n(r, l, i, u) {
			var c = this
			;((this.isMounted = !0),
				(this.imgElement = r),
				(this.htmlPluginState = {
					cleanupCallbacks: [],
					pluginEventSubscription: []
				}))
			var d = qa(l)
			xs(r, d, i, this.htmlPluginState, u).then(function (h) {
				if (c.isMounted) {
					c.htmlPluginState.pluginEventSubscription.forEach(function (v) {
						v()
					})
					var p = Qg(u, h)
					c.imgElement.setAttribute('src', d.toURL(p))
				}
			})
		}
		return (
			(n.prototype.update = function (r, l, i) {
				var u = this,
					c = qa(r)
				xs(this.imgElement, c, l, this.htmlPluginState).then(function (d) {
					if (u.isMounted) {
						var h = Qg(i, d)
						u.imgElement.setAttribute('src', c.toURL(h))
					}
				})
			}),
			(n.prototype.unmount = function () {
				this.isMounted = !1
			}),
			n
		)
	})()
class gt {
	constructor(r) {
		;((this.values = []),
			(this.delimiter = ':'),
			this.hasValue(r) && this.addValue(r))
	}
	toString() {
		return this.values.join(this.delimiter)
	}
	hasValue(r) {
		return typeof r < 'u' && r !== null && r !== ''
	}
	addValue(r) {
		return (
			Array.isArray(r)
				? (this.values = this.values.concat(r))
				: this.values.push(r),
			(this.values = this.values.filter((l) => this.hasValue(l))),
			this
		)
	}
	setDelimiter(r) {
		return ((this.delimiter = r), this)
	}
}
class mN extends Error {
	constructor(r = 'Unsupported') {
		super(r)
	}
}
function Yh(n) {
	return new mN(n)
}
function vN() {
	return (
		this._qualifierModel || {
			error: Yh(`unsupported qualifier ${this.constructor.name}`)
		}
	)
}
class yN {
	constructor() {
		this._qualifierModel = {}
	}
	toJson() {
		return vN.apply(this)
	}
}
class ze extends yN {
	constructor(r, l) {
		;(super(),
			(this.delimiter = '_'),
			(this.key = r),
			l instanceof gt
				? (this.qualifierValue = l)
				: ((this.qualifierValue = new gt()), this.qualifierValue.addValue(l)))
	}
	toString() {
		const { key: r, delimiter: l, qualifierValue: i } = this
		return `${r}${l}${i.toString()}`
	}
	addValue(r) {
		return (this.qualifierValue.addValue(r), this)
	}
}
class Vn extends ze {
	constructor(r, l) {
		let i
		;(l ? (i = new gt([r, `${l}`]).setDelimiter(':')) : (i = r),
			super('fl', i),
			(this.flagValue = l))
	}
	toString() {
		return super.toString().replace(/\./g, '%2E')
	}
	getFlagValue() {
		return this.flagValue
	}
}
function gN(n, r) {
	const l = Array.from(n.entries())
	return (
		r.forEach((i) => {
			l.push(['fl', i])
		}),
		l.sort().map((i) => i[1])
	)
}
function bN() {
	var n, r, l
	const i = this._actionModel && Object.keys(this._actionModel).length,
		u =
			(l =
				(r =
					(n = this._actionModel) === null || n === void 0
						? void 0
						: n.source) === null || r === void 0
					? void 0
					: r.transformation) === null || l === void 0
				? void 0
				: l.error
	return u && u instanceof Error
		? { error: u }
		: i
			? this._actionModel
			: { error: Yh(`unsupported action ${this.constructor.name}`) }
}
class SN {
	constructor() {
		this._actionModel = {}
	}
	toJson() {
		return bN.apply(this)
	}
}
class mr extends SN {
	constructor() {
		;(super(...arguments),
			(this.qualifiers = new Map()),
			(this.flags = []),
			(this.delimiter = ','),
			(this.actionTag = ''))
	}
	prepareQualifiers() {}
	getActionTag() {
		return this.actionTag
	}
	setActionTag(r) {
		return ((this.actionTag = r), this)
	}
	toString() {
		return (
			this.prepareQualifiers(),
			gN(this.qualifiers, this.flags).join(this.delimiter)
		)
	}
	addQualifier(r) {
		if (typeof r == 'string') {
			const [l, i] = r.toLowerCase().split('_')
			l === 'fl'
				? this.flags.push(new Vn(i))
				: this.qualifiers.set(l, new ze(l, i))
		} else this.qualifiers.set(r.key, r)
		return this
	}
	addFlag(r) {
		return (
			typeof r == 'string'
				? this.flags.push(new Vn(r))
				: r instanceof Vn && this.flags.push(r),
			this
		)
	}
	addValueToQualifier(r, l) {
		return (this.qualifiers.get(r).addValue(l), this)
	}
}
class Qh extends mr {
	constructor(r) {
		;(super(), (this.regionType = r), (this._actionModel.regionType = r))
	}
}
class Qs extends Qh {
	constructor() {
		super('custom')
	}
	x(r) {
		return ((this._actionModel.x = r), this.addQualifier(new ze('x', r)), this)
	}
	y(r) {
		return ((this._actionModel.y = r), this.addQualifier(new ze('y', r)), this)
	}
	width(r) {
		return (
			(this._actionModel.width = r),
			this.addQualifier(new ze('w', r)),
			this
		)
	}
	height(r) {
		return (
			(this._actionModel.height = r),
			this.addQualifier(new ze('h', r)),
			this
		)
	}
	static fromJson(r) {
		const l = new Qs()
		return (
			r.width && l.width(r.width),
			r.height && l.height(r.height),
			r.x && l.x(r.x),
			r.y && l.y(r.y),
			l
		)
	}
}
function _N() {
	return new Qs()
}
function QS() {
	return new Qh('faces')
}
function EN() {
	return new Qh('ocr_text')
}
class RN extends mr {
	constructor(r) {
		;(super(),
			(this._actionModel = {}),
			(this._strength = r),
			(this._actionModel.actionType = 'blur'),
			(this._actionModel.strength = r))
	}
	region(r) {
		return ((this._region = r), (this._actionModel.region = r.toJson()), this)
	}
	strength(r) {
		return ((this._strength = r), (this._actionModel.strength = r), this)
	}
	prepareQualifiers() {
		const r = this._strength ? `:${this._strength}` : ''
		'_region' in this
			? (this._region.qualifiers.forEach((i) => this.addQualifier(i)),
				this._region.regionType === 'custom' &&
					this.addQualifier(new ze('e', `blur_region${r}`)),
				this._region.regionType === 'ocr_text' &&
					(this.addQualifier(new ze('e', `blur_region${r}`)),
					this.addQualifier(new ze('g', 'ocr_text'))),
				this._region.regionType === 'faces' &&
					this.addQualifier(new ze('e', `blur_faces${r}`)))
			: this.addQualifier(new ze('e', `blur${r}`))
	}
	static fromJson(r) {
		const { strength: l, region: i } = r,
			u = new this(l)
		return (
			l && u.strength(l),
			i && i.regionType === 'faces' && u.region(QS()),
			i && i.regionType === 'ocr_text' && u.region(EN()),
			i && i.regionType === 'custom' && u.region(Qs.fromJson(i)),
			u
		)
	}
}
function Xa(n) {
	const r = {}
	return (
		Object.keys(n).forEach((l) => {
			r[n[l]] = l
		}),
		r
	)
}
const KS = {
		limitFit: 'limit',
		limitFill: 'lfill',
		minimumFit: 'mfit',
		thumbnail: 'thumb',
		limitPad: 'lpad',
		minimumPad: 'mpad',
		autoPad: 'auto_pad'
	},
	xN = {
		colorSpace: 'cs',
		dpr: 'dpr',
		density: 'dn',
		defaultImage: 'd',
		format: 'f',
		quality: 'q'
	},
	XS = {
		redEye: 'redeye',
		advancedRedEye: 'adv_redeye',
		oilPaint: 'oil_paint',
		unsharpMask: 'unsharp_mask',
		makeTransparent: 'make_transparent',
		generativeRestore: 'gen_restore',
		upscale: 'upscale'
	},
	ZS = {
		autoBest: 'auto:best',
		autoEco: 'auto:eco',
		autoGood: 'auto:good',
		autoLow: 'auto:low',
		jpegminiHigh: 'jpegmini:1',
		jpegminiMedium: 'jpegmini:2',
		jpegminiBest: 'jpegmini:0'
	},
	AN = {
		fullHd: 'full_hd',
		fullHdWifi: 'full_hd_wifi',
		fullHdLean: 'full_hd_lean',
		hdLean: 'hd_lean'
	},
	JS = { 444: 'CHROMA_444', 420: 'CHROMA_420' },
	wN = {
		noCmyk: 'no_cmyk',
		keepCmyk: 'keep_cmyk',
		tinySrgb: 'tinysrgb',
		srgbTrueColor: 'srgb:truecolor'
	},
	CN = Xa(JS)
Xa(wN)
const TN = Xa(KS),
	ON = Xa(xN),
	WS = Xa(XS)
Xa(ZS)
Xa(AN)
class e_ extends mr {
	constructor(r, l) {
		;(super(),
			(this._actionModel = {}),
			(this._actionModel.actionType = WS[r] || r))
		const i = this.createEffectQualifier(r, l)
		this.addQualifier(i)
	}
	createEffectQualifier(r, l) {
		let i
		return (
			l ? (i = new gt([r, `${l}`]).setDelimiter(':')) : (i = new gt(r)),
			new ze('e', i)
		)
	}
	static fromJson(r) {
		const { actionType: l, level: i, strength: u } = r,
			c = XS[l] || l
		return new this(c, i || u)
	}
}
class MN extends e_ {
	constructor(r, l) {
		;(super(r, l),
			(this.LEVEL_NAME = 'level'),
			(this._actionModel = {}),
			(this.effectType = r),
			(this._actionModel.actionType = WS[r] || r),
			l && this.setLevel(l))
	}
	setLevel(r) {
		this._actionModel[this.LEVEL_NAME] = r
		const l = this.createEffectQualifier(this.effectType, r)
		return (this.addQualifier(l), this)
	}
}
function Ks(n) {
	return n && (n.match(/^#/) ? `rgb:${n.substr(1)}` : n)
}
class DN extends mr {
	constructor() {
		;(super(),
			(this._actionModel = {}),
			(this._actionModel.actionType = 'vectorize'))
	}
	numOfColors(r) {
		return ((this._actionModel.numOfColors = r), (this._numOfColors = r), this)
	}
	detailsLevel(r) {
		return ((this._actionModel.detailLevel = r), (this._detailsLevel = r), this)
	}
	despeckleLevel(r) {
		return (
			(this._actionModel.despeckleLevel = r),
			(this._despeckleLevel = r),
			this
		)
	}
	cornersLevel(r) {
		return (
			(this._actionModel.cornersLevel = r),
			(this._cornersLevel = r),
			this
		)
	}
	paths(r) {
		return ((this._actionModel.paths = r), (this._paths = r), this)
	}
	prepareQualifiers() {
		let r = 'vectorize'
		;(this._numOfColors &&
			(r += `:${new gt(`colors:${this._numOfColors}`).toString()}`),
			this._detailsLevel &&
				(r += `:${new gt(`detail:${this._detailsLevel}`).toString()}`),
			this._despeckleLevel &&
				(r += `:${new gt(`despeckle:${this._despeckleLevel}`).toString()}`),
			this._paths && (r += `:${new gt(`paths:${this._paths}`).toString()}`),
			this._cornersLevel &&
				(r += `:${new gt(`corners:${this._cornersLevel}`).toString()}`),
			this.addQualifier(new ze('e', r)))
	}
	static fromJson(r) {
		const {
				actionType: l,
				paths: i,
				cornersLevel: u,
				despeckleLevel: c,
				detailLevel: d,
				numOfColors: h
			} = r,
			p = new this()
		return (
			i && p.paths(i),
			u && p.cornersLevel(u),
			c && p.despeckleLevel(c),
			d && p.detailsLevel(d),
			h && p.numOfColors(h),
			p
		)
	}
}
class NN extends MN {
	level(r) {
		return ((this._actionModel.level = r), this.setLevel(r))
	}
}
class jN extends mr {
	constructor() {
		;(super(),
			(this._actionModel = {}),
			(this._actionModel.actionType = 'assistColorblind'),
			this.addQualifier(new ze('e', new gt('assist_colorblind'))))
	}
	xray() {
		return (
			(this._actionModel.type = 'xray'),
			this.addQualifier(
				new ze('e', new gt(['assist_colorblind', 'xray']).setDelimiter(':'))
			)
		)
	}
	stripesStrength(r) {
		return (
			(this._actionModel.type = 'stripes'),
			(this._actionModel.stripesStrength = r),
			this.addQualifier(
				new ze('e', new gt(['assist_colorblind', r]).setDelimiter(':'))
			)
		)
	}
	static fromJson(r) {
		const { actionType: l, type: i, stripesStrength: u } = r,
			c = new this()
		return (
			i === 'xray' && c.xray(),
			i === 'stripes' && u && c.stripesStrength(u),
			c
		)
	}
}
class LN extends NN {
	color(r) {
		return (
			(this._actionModel.color = r),
			this.addQualifier(new ze('co', new gt(Ks(r))))
		)
	}
	static fromJson(r) {
		const { actionType: l, level: i, color: u } = r,
			c = new this(l, i)
		return (u && c.color(u), c)
	}
}
class UN extends mr {
	constructor(r) {
		;(super(),
			(this._actionModel = {}),
			(this._squareSize = r),
			(this._actionModel.actionType = 'pixelate'),
			(this._actionModel.squareSize = r))
	}
	region(r) {
		return (
			(this._region = r),
			(this._actionModel.region = { regionType: this._region.regionType }),
			this
		)
	}
	squareSize(r) {
		return ((this._squareSize = r), (this._actionModel.squareSize = r), this)
	}
	prepareQualifiers() {
		const r = this._squareSize ? `:${this._squareSize}` : ''
		'_region' in this
			? (this._region.qualifiers.forEach((i) => this.addQualifier(i)),
				this._region.regionType === 'custom' &&
					this.addQualifier(new ze('e', `pixelate_region${r}`)),
				this._region.regionType === 'ocr_text' &&
					(this.addQualifier(new ze('e', `pixelate_region${r}`)),
					this.addQualifier(new ze('g', 'ocr_text'))),
				this._region.regionType === 'faces' &&
					this.addQualifier(new ze('e', `pixelate_faces${r}`)))
			: this.addQualifier(new ze('e', `pixelate${r}`))
	}
	static fromJson(r) {
		const { region: l, squareSize: i } = r,
			u = new this(i)
		return (
			i && u.squareSize(i),
			l && l.regionType === 'faces' && u.region(QS()),
			l && l.regionType === 'custom' && u.region(_N()),
			u
		)
	}
}
const zN = (n) => HN(encodeURIComponent, VN, kN)(n),
	BN = /[!'()*~_.-]/g,
	PN = {
		'!': '%21',
		"'": '%27',
		'(': '%28',
		')': '%29',
		'*': '%2A',
		'~': '%7E',
		_: '%5F',
		'.': '%2E',
		'-': '%2D'
	},
	VN = (n) =>
		n.replace(BN, (r) => {
			var l
			return (l = PN[r]) !== null && l !== void 0 ? l : r
		}),
	kN = (n) => n.replace(/%20/g, ' '),
	HN =
		(...n) =>
		(r) =>
			n.reduce((l, i) => i(l), r)
function qN(n) {
	return new RN(n)
}
function GN() {
	return new e_('grayscale')
}
function Kg(n) {
	return new LN('colorize', n)
}
function FN() {
	return new DN()
}
function $N() {
	return new jN()
}
function IN(n) {
	return new UN(n)
}
class YN extends mr {
	constructor(r) {
		;(super(),
			(this._actionModel = {}),
			this.addQualifier(new ze('b', new gt(Ks(r)).setDelimiter('_'))),
			(this._actionModel.color = r),
			(this._actionModel.actionType = 'backgroundColor'))
	}
	static fromJson(r) {
		const { color: l } = r
		return new this(l)
	}
}
class Xg {
	constructor(r) {
		this.raw = r
	}
	toString() {
		return this.raw
	}
	toJson() {
		return { error: Yh(`unsupported action ${this.constructor.name}`) }
	}
}
function QN(n) {
	const r = n
	return 'error' in r && !!r.error
}
function KN() {
	return new Vn('ignore_aspect_ratio')
}
function XN() {
	return new Vn('lossy')
}
function ZN() {
	return new Vn('preserve_transparency')
}
function JN(n) {
	return new Vn('progressive', n)
}
function WN() {
	return new Vn('region_relative')
}
function e3() {
	return new Vn('relative')
}
class Kh extends gt {
	constructor(r) {
		;(super(r), (this.val = r))
	}
	getValue() {
		return this.val
	}
}
class t_ extends mr {
	constructor(r, l, i) {
		;(super(), (this._actionModel = {}))
		let u
		;(l instanceof Kh ? (u = l.getValue()) : (u = l),
			(this._actionModel.actionType = ON[r]),
			(this._actionModel[i] = u),
			this.addQualifier(new ze(r, l)))
	}
}
class t3 extends Vn {
	constructor(r) {
		super('progressive', r)
	}
}
class Wd extends t_ {
	constructor(r, l) {
		super(r, l, 'formatType')
	}
	lossy() {
		return ((this._actionModel.lossy = !0), this.addFlag(XN()), this)
	}
	progressive(r) {
		return (
			r instanceof t3
				? ((this._actionModel.progressive = { mode: r.getFlagValue() }),
					this.addFlag(r))
				: ((this._actionModel.progressive = { mode: r }), this.addFlag(JN(r))),
			this
		)
	}
	preserveTransparency() {
		return (
			(this._actionModel.preserveTransparency = !0),
			this.addFlag(ZN()),
			this
		)
	}
	static fromJson(r) {
		const {
			formatType: l,
			lossy: i,
			progressive: u,
			preserveTransparency: c
		} = r
		let d
		return (
			l ? (d = new this('f', l)) : (d = new this('f')),
			u && (u.mode ? d.progressive(u.mode) : d.progressive()),
			i && d.lossy(),
			c && d.preserveTransparency(),
			d
		)
	}
}
class ti {
	constructor() {
		this.actions = []
	}
	addAction(r) {
		let l
		if (typeof r == 'string') {
			if (r.indexOf('/') >= 0)
				throw 'addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead'
			l = new Xg(r)
		} else l = r
		return (this.actions.push(l), this)
	}
	addTransformation(r) {
		return (
			r instanceof ti
				? (this.actions = this.actions.concat(r.actions))
				: this.actions.push(new Xg(r)),
			this
		)
	}
	toString() {
		return this.actions
			.map((r) => r.toString())
			.filter((r) => r)
			.join('/')
	}
	animated(r) {
		return this.addAction(r)
	}
	border(r) {
		return this.addAction(r)
	}
	reshape(r) {
		return this.addAction(r)
	}
	resize(r) {
		return this.addAction(r)
	}
	quality(r) {
		return (this.addAction(new Wd('q', r)), this)
	}
	format(r) {
		return (this.addAction(new Wd('f', r)), this)
	}
	roundCorners(r) {
		return this.addAction(r)
	}
	overlay(r) {
		return this.addAction(r)
	}
	underlay(r) {
		return (r.setLayerType('u'), this.addAction(r))
	}
	addVariable(r) {
		return this.addAction(r)
	}
	conditional(r) {
		return this.addAction(r)
	}
	effect(r) {
		return this.addAction(r)
	}
	adjust(r) {
		return this.addAction(r)
	}
	rotate(r) {
		return this.addAction(r)
	}
	namedTransformation(r) {
		return this.addAction(r)
	}
	delivery(r) {
		return this.addAction(r)
	}
	backgroundColor(r) {
		return this.addAction(new YN(r))
	}
	psdTools(r) {
		return this.addAction(r)
	}
	extract(r) {
		return this.addAction(r)
	}
	addFlag(r) {
		const l = new mr()
		let i = r
		return (
			typeof r == 'string' && (i = new Vn(r)),
			l.addQualifier(i),
			this.addAction(l)
		)
	}
	customFunction(r) {
		return this.addAction(r)
	}
	transcode(r) {
		return this.addAction(r)
	}
	videoEdit(r) {
		return this.addAction(r)
	}
	toJson() {
		const r = []
		for (const l of this.actions) {
			const i = l.toJson()
			if (QN(i)) return i
			r.push(i)
		}
		return { actions: r }
	}
}
function Zg(n) {
	const r = n.toString()
	return r.match(/[A-Z]/gi) || (r.length > 1 && r[0] === '0')
		? r
		: !isNaN(parseFloat(r)) && r.indexOf(':') === -1 && r.indexOf('.') === -1
			? `${r}.0`
			: r
}
class n3 extends gt {}
class r3 extends mr {
	constructor(r, l, i) {
		;(super(),
			(this._actionModel = { dimensions: {} }),
			(this._actionModel.actionType = TN[r] || r),
			this.addQualifier(new ze('c', r)),
			l && this.width(l),
			i && this.height(i))
	}
	height(r) {
		return (
			(this._actionModel.dimensions.height = r),
			this.addQualifier(new ze('h', r))
		)
	}
	width(r) {
		return (
			(this._actionModel.dimensions.width = r),
			this.addQualifier(new ze('w', r))
		)
	}
	aspectRatio(r) {
		if (r instanceof n3)
			return (
				(this._actionModel.dimensions.aspectRatio = `${r}`),
				this.addQualifier(new ze('ar', r))
			)
		if (typeof r == 'number' || typeof r == 'string')
			return (
				(this._actionModel.dimensions.aspectRatio = Zg(r)),
				this.addQualifier(new ze('ar', Zg(r)))
			)
		if (r instanceof Vn)
			return (
				(this._actionModel.dimensions.aspectRatio = `${r.qualifierValue}`),
				this.addFlag(r)
			)
	}
	relative() {
		return ((this._actionModel.relative = !0), this.addFlag(e3()))
	}
	regionRelative() {
		return ((this._actionModel.regionRelative = !0), this.addFlag(WN()))
	}
	static fromJson(r) {
		const { actionType: l, dimensions: i, relative: u, regionRelative: c } = r,
			{ aspectRatio: d, width: h, height: p } = i,
			v = KS[l] || l,
			y = new this(v, h, p)
		return (
			d && y.aspectRatio(d === 'ignore_aspect_ratio' ? KN() : d),
			u && y.relative(),
			c && y.regionRelative(),
			y
		)
	}
}
class Xh extends ze {
	constructor(r) {
		super('g', new gt(r))
	}
}
class n_ extends Xh {
	constructor() {
		super('auto')
	}
	autoFocus(...r) {
		return (this.addValue(r), this)
	}
}
class r_ extends Xh {
	constructor(r) {
		super(r)
	}
	fallbackGravity(r) {
		return (this.addValue(r.qualifierValue), this)
	}
}
class a_ extends Xh {
	constructor(r) {
		super(r)
	}
}
function a3(n) {
	return new a_(n)
}
function l_(...n) {
	const r = [...n]
	return new r_(r)
}
function i_() {
	return new n_()
}
class Ql extends gt {
	constructor(r) {
		;(super(), (this.name = r))
	}
	toString() {
		return this.name
	}
}
function l3() {
	return new Ql('ocr_text')
}
function i3(n) {
	return n && `${n}`.split(':')[0] === 'auto'
}
function o3(n) {
	const r = Zh(n)
	return [
		'north',
		'center',
		'east',
		'west',
		'south',
		'north_west',
		'south_east',
		'south_west',
		'north_east'
	].includes(r)
}
function Zh(n) {
	return `${n}`.replace('g_', '')
}
function u3(n) {
	return { compass: Zh(n), gravityType: 'direction' }
}
function s3(n) {
	return Zh(n) === 'ocr_text'
}
function c3() {
	return { gravityType: 'ocr' }
}
function f3(n) {
	return `${n.qualifierValue}`.split(':')[0] === 'auto'
}
function d3(n) {
	const l = n.toString().split('_'),
		i = { object: l[0] }
	return (
		l.length > 1 && (l[1] === 'avoid' ? (i.avoid = !0) : (i.weight = +l[1])),
		i
	)
}
function o_(n) {
	let r
	const l = n === 'auto' ? new n_() : n
	return (
		`${n}`.startsWith('auto:')
			? (r = `${n}`.split(':').filter((u) => u !== 'auto'))
			: (r = l.qualifierValue.values.filter((u) => u !== 'auto')),
		{ gravityType: 'auto', autoFocus: r.map(d3) }
	)
}
function h3(n) {
	const r = `${n}`.split(':').includes('auto'),
		l = n.qualifierValue.values,
		u = {
			gravityType: 'object',
			focusOnObjects: (r ? l.slice(0, l.length - 1) : l).map((c) => `${c}`)
		}
	if (r) {
		const c = l[l.length - 1].values.slice(1),
			d = i_().autoFocus(...c)
		u.fallbackGravity = o_(d)
	}
	return u
}
function p3(n) {
	const l = n.split(':').map((i) => new Ql(i))
	return new r_(l)
}
function m3(n) {
	return o3(n)
		? u3(n)
		: s3(n)
			? c3()
			: i3(n) || f3(n)
				? o_(n)
				: h3(typeof n == 'string' ? p3(n) : n)
}
class Jh extends gt {
	constructor(r, l) {
		;(super(), (this._weight = l), (this.focusOn = r), (this.shouldAvoid = !1))
	}
	static focusOn(r, l) {
		const i = r instanceof Ql ? r : new Ql(r)
		return new Jh(i, l)
	}
	shouldAddWeight() {
		return (
			typeof this._weight == 'number' ||
			typeof this._weight == 'string' ||
			this.shouldAvoid
		)
	}
	getName() {
		return this.focusOn.name
	}
	getWeight() {
		return this.shouldAvoid ? 'avoid' : this._weight
	}
	toString() {
		return this.shouldAddWeight()
			? `${this.getName()}_${this.getWeight()}`
			: `${this.getName()}`
	}
	weight(r) {
		return ((this._weight = r), this)
	}
	avoid() {
		return ((this.shouldAvoid = !0), this)
	}
}
class u_ extends gt {
	constructor(r) {
		;(super(), (this.val = r))
	}
	toString() {
		return this.val
	}
}
function v3(n) {
	return n.gravityType === 'direction'
}
function y3(n) {
	return n.gravityType === 'ocr'
}
function g3(n) {
	return n.gravityType === 'auto'
}
function b3(n) {
	const { object: r, weight: l, avoid: i } = n,
		u = new Jh(new Ql(r))
	return ((l || l === 0) && u.weight(l), i && u.avoid(), u)
}
function s_(n) {
	const l = (n.autoFocus || []).map(b3)
	return i_().autoFocus(...l)
}
function S3(n) {
	const r = (n.focusOnObjects || []).map((i) => new Ql(i)),
		l = l_(...r)
	if (n.fallbackGravity) {
		const i = s_(n.fallbackGravity)
		l.fallbackGravity(i)
	}
	return l
}
function _3(n) {
	return v3(n)
		? new a_(new u_(n.compass))
		: y3(n)
			? l_(l3())
			: g3(n)
				? s_(n)
				: S3(n)
}
class Wh extends r3 {
	gravity(r) {
		this._actionModel.gravity = m3(r)
		const l = typeof r == 'string' ? new ze('g', r) : r
		return this.addQualifier(l)
	}
	static fromJson(r) {
		const l = super.fromJson.apply(this, [r])
		return (r.gravity && l.gravity(_3(r.gravity)), l)
	}
}
class Lo extends ze {
	constructor(r) {
		;(super('b'), r && this.addValue(r))
	}
}
const c_ = 100,
	E3 = 0
class R3 extends Lo {
	intensity(r) {
		return ((this.intensityLevel = r), this)
	}
	brightness(r) {
		return ((this.brightnessLevel = r), this)
	}
	toString() {
		const r = this.intensityLevel !== void 0 ? `:${this.intensityLevel}` : '',
			l =
				this.brightnessLevel !== void 0
					? this.intensityLevel !== void 0
						? `:${this.brightnessLevel}`
						: `:${c_}:${this.brightnessLevel}`
					: ''
		return `b_blurred${r}${l}`
	}
}
var f_ = R3
class ep extends Lo {
	constructor() {
		;(super(), (this._palette = []))
	}
	contrast() {
		return ((this._contrast = !0), this)
	}
	palette(...r) {
		return ((this._palette = r.map((l) => Ks(l))), this)
	}
}
class d_ extends ep {
	toString() {
		return `
    b_auto:border
    ${this._contrast ? '_contrast' : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '')
	}
}
class h_ extends ep {
	gradientColors(r) {
		return ((this._gradientColors = r), this)
	}
	gradientDirection(r) {
		return ((this._gradientDirection = r), this)
	}
}
class p_ extends h_ {
	toString() {
		return `
    b_auto:border_gradient
    ${this._contrast ? '_contrast' : ''}
    ${this._gradientColors ? `:${this._gradientColors}` : ''}
    ${this._gradientDirection ? `:${this._gradientDirection}` : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '')
	}
}
class m_ extends h_ {
	toString() {
		return `
    b_auto:predominant_gradient
    ${this._contrast ? '_contrast' : ''}
    ${this._gradientColors ? `:${this._gradientColors}` : ''}
    ${this._gradientDirection ? `:${this._gradientDirection}` : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '')
	}
}
class v_ extends ep {
	toString() {
		return `
    b_auto:predominant
    ${this._contrast ? '_contrast' : ''}
    ${this._palette.length ? `:palette_${this._palette.join('_')}` : ''}
    `.replace(/\s+/g, '')
	}
}
class y_ extends Lo {
	constructor() {
		;(super('gen_fill'), (this._backgroundType = 'generativeFill'))
	}
	prompt(r) {
		try {
			this._prompt = decodeURIComponent(r)
		} catch {
			this._prompt = r
		}
		return this
	}
	getPrompt() {
		return this._prompt
	}
	getBackgroundType() {
		return this._backgroundType
	}
	toString() {
		return `b_gen_fill${this._prompt ? `:prompt_${zN(this._prompt)}` : ''}`
	}
}
function g_(n) {
	return `${n}`.replace('b_', '')
}
function x3() {
	return { backgroundType: 'auto' }
}
function A3(n) {
	const { intensityLevel: r, brightnessLevel: l } = n,
		i = { backgroundType: 'blurred' }
	return (
		(r || r === 0) && (i.intensity = r),
		(l || l === 0) && (i.brightness = l),
		i
	)
}
function tp(n) {
	const r = n._contrast,
		l = n._palette,
		i = { backgroundType: '' }
	return (r && (i.contrast = !0), l && (i.palette = l), i)
}
function w3(n) {
	return Object.assign(Object.assign({}, tp(n)), { backgroundType: 'border' })
}
function b_(n) {
	const r = n._gradientColors,
		l = `${n._gradientDirection}`,
		i = tp(n)
	return (r && (i.gradientColors = r), l && (i.gradientDirection = l), i)
}
function C3(n) {
	return Object.assign(Object.assign({}, b_(n)), {
		backgroundType: 'borderGradient'
	})
}
function T3(n) {
	return { backgroundType: 'color', color: g_(n) }
}
function O3(n) {
	return Object.assign(Object.assign({}, tp(n)), {
		backgroundType: 'predominant'
	})
}
function M3(n) {
	return Object.assign(Object.assign({}, b_(n)), {
		backgroundType: 'predominantGradient'
	})
}
function D3(n) {
	return Object.assign(
		{ backgroundType: n.getBackgroundType() },
		n.getPrompt() ? { prompt: n.getPrompt() } : {}
	)
}
function N3(n) {
	return g_(n) === 'auto'
		? x3()
		: n instanceof f_
			? A3(n)
			: n instanceof d_
				? w3(n)
				: n instanceof p_
					? C3(n)
					: n instanceof v_
						? O3(n)
						: n instanceof m_
							? M3(n)
							: n instanceof y_
								? D3(n)
								: T3(n)
}
function j3() {
	return new Kh('svg')
}
function np() {
	return new Kh('auto')
}
function S_() {
	return new d_()
}
function __() {
	return new Lo('auto')
}
function E_() {
	return new p_()
}
function R_() {
	return new m_()
}
function x_() {
	return new v_()
}
function A_(n) {
	return new Lo(Ks(n))
}
function L3() {
	return new f_()
}
function w_() {
	return new y_()
}
const C_ = {
	auto: __,
	border: S_,
	borderGradient: E_,
	predominantGradient: R_,
	predominant: x_,
	color: A_,
	blurred: L3,
	generativeFill: w_
}
function U3(n) {
	const { brightness: r, intensity: l } = n,
		i = C_.blurred()
	return (i.brightness(r ?? E3), i.intensity(l ?? c_), i)
}
function Jg(n, r) {
	const { gradientColors: l, gradientDirection: i, contrast: u, palette: c } = r
	return (
		u && n.contrast(),
		c && n.palette(...c),
		l && n.gradientColors(+l),
		i && n.gradientDirection(i),
		n
	)
}
function Wg(n, r) {
	const { contrast: l, palette: i } = r
	return (l && n.contrast(), i && n.palette(...i), n)
}
function z3(n, r) {
	const { prompt: l } = r
	return (l && n.prompt(l), n)
}
function B3(n) {
	const { backgroundType: r } = n
	switch (r) {
		case 'auto':
			return __()
		case 'blurred':
			return U3(n)
		case 'border':
			return Wg(S_(), n)
		case 'borderGradient':
			return Jg(E_(), n)
		case 'predominant':
			return Wg(x_(), n)
		case 'predominantGradient':
			return Jg(R_(), n)
		case 'generativeFill':
			return z3(w_(), n)
		default:
			return A_(n.color)
	}
}
class P3 extends Wh {
	background(r) {
		return ((this._actionModel.background = N3(r)), this.addQualifier(r))
	}
	offsetX(r) {
		return ((this._actionModel.x = r), this.addQualifier(new ze('x', r)))
	}
	offsetY(r) {
		return ((this._actionModel.y = r), this.addQualifier(new ze('y', r)))
	}
	static fromJson(r) {
		const l = super.fromJson.apply(this, [r])
		return (
			r.background && l.background(B3(r.background)),
			r.x && l.offsetX(r.x),
			r.y && l.offsetY(r.y),
			r.zoom && l.zoom(r.zoom),
			l
		)
	}
}
class V3 extends Wh {
	x(r) {
		return ((this._actionModel.x = r), this.addQualifier(new ze('x', r)))
	}
	y(r) {
		return ((this._actionModel.y = r), this.addQualifier(new ze('y', r)))
	}
	zoom(r) {
		return ((this._actionModel.zoom = r), this.addQualifier(new ze('z', r)))
	}
	static fromJson(r) {
		const l = super.fromJson.apply(this, [r])
		return (r.x && l.x(r.x), r.y && l.y(r.y), r.zoom && l.zoom(r.zoom), l)
	}
}
class k3 extends Wh {
	x(r) {
		return ((this._actionModel.x = r), this.addQualifier(new ze('x', r)))
	}
	y(r) {
		return ((this._actionModel.y = r), this.addQualifier(new ze('y', r)))
	}
	static fromJson(r) {
		const l = super.fromJson.apply(this, [r])
		return (r.x && l.x(r.x), r.y && l.y(r.y), l)
	}
}
function H3(n, r) {
	return new V3('crop', n, r)
}
function q3(n, r) {
	return new k3('fill', n, r)
}
function G3(n, r) {
	return new P3('pad', n, r)
}
class F3 extends t_ {
	constructor(r) {
		super('q', r.toString(), 'level')
	}
	chromaSubSampling(r) {
		this._actionModel.chromaSubSampling = JS[r]
		const l = new gt([this._actionModel.level, r])
		return (l.setDelimiter(':'), this.addQualifier(new ze('q', l)))
	}
	quantization(r) {
		this._actionModel.quantization = r
		const l = new gt([this._actionModel.level, `qmax_${r}`]).setDelimiter(':')
		return this.addQualifier(new ze('q', l))
	}
	static fromJson(r) {
		const { level: l, chromaSubSampling: i, quantization: u } = r,
			c = ZS[l] || l,
			d = new this(c)
		if (i) {
			const h = CN[i.toUpperCase()]
			h && d.chromaSubSampling(+h)
		}
		return (u && d.quantization(u), d)
	}
}
function Xs(n) {
	return new Wd('f', n)
}
function Zs(n) {
	return new F3(n)
}
function $3() {
	return new u_('north_east')
}
;(Kg(70).color('black'), Kg(40).color('white'), GN(), $N())
new ti().effect(FN()).delivery(Zs('auto')).delivery(Xs(j3()))
new ti().effect(IN()).delivery(Zs('auto')).delivery(Xs(np()))
new ti().effect(qN(2e3)).delivery(Zs('auto')).delivery(Xs(np()))
new ti()
	.resize(G3('iw_div_2').aspectRatio(1).background(C_.auto()))
	.resize(H3(1, 1).gravity(a3($3())))
	.resize(q3().height('ih').width('iw'))
	.delivery(Zs('auto'))
	.delivery(Xs(np()))
var eb = {
		flv: 'x-flv',
		'3gp': '3gpp',
		mov: 'quicktime',
		mpg: 'mpeg',
		avi: 'x-msvideo',
		wmv: 'x-ms-wmv',
		ogv: 'ogg',
		webm: 'webm',
		mp4: 'mp4'
	},
	tb = '?_a=',
	I3 = (function () {
		function n(r, l, i, u, c, d, h) {
			var p = this
			;((this.mimeType = 'video'),
				(this.mimeSubTypes = eb),
				(this.videoElement = r),
				(this.originalVideo = l),
				(this.videoOptions = h),
				(this.htmlPluginState = {
					cleanupCallbacks: [],
					pluginEventSubscription: []
				}))
			var v = qa(l)
			xs(r, l, u, this.htmlPluginState).then(function () {
				;(p.htmlPluginState.pluginEventSubscription.forEach(function (y) {
					y()
				}),
					p.setVideoAttributes(c, d),
					p.handleSourceToVideo(v, i))
			})
		}
		return (
			(n.prototype.handleSourceToVideo = function (r, l) {
				var i = this
				if (l) this.generateUserSources(r, l)
				else {
					var u = ['webm', 'mp4', 'ogv']
					u.forEach(function (c) {
						i.appendSourceTag(qa(r), c)
					})
				}
			}),
			(n.prototype.generateUserSources = function (r, l) {
				var i = this
				l.map(function (u) {
					var c = u.type,
						d = u.codecs,
						h = u.transcode
					return i.appendSourceTag(qa(r).transcode(h), c, i.buildMimeType(c, d))
				})
			}),
			(n.prototype.appendSourceTag = function (r, l, i) {
				var u,
					c = document.createElement('source'),
					d =
						(u = this.videoOptions) === null || u === void 0
							? void 0
							: u.useFetchFormat
				d && r.format(l)
				var h = r.toURL(),
					p = h.split(tb),
					v = p[1] ? ''.concat(tb).concat(p[1]) : '',
					y = d ? '' : '.'.concat(l)
				;((c.src = ''.concat(p[0]).concat(y).concat(v)),
					(c.type = i || 'video/'.concat(eb[l] || l)),
					this.videoElement.appendChild(c))
			}),
			(n.prototype.buildMimeType = function (r, l) {
				var i = ''.concat(this.mimeType, '/').concat(this.mimeSubTypes[r] || r)
				return (
					l && (i += '; codecs=' + (Array.isArray(l) ? l.join(', ') : l)),
					i
				)
			}),
			(n.prototype.setVideoAttributes = function (r, l) {
				var i
				if ((r === void 0 && (r = {}), l === 'auto')) {
					var u = qa(this.originalVideo)
					r.poster = u
						.quality('auto')
						.format('jpg')
						.addTransformation('so_auto')
						.toURL()
				} else
					l &&
						(r.poster =
							(i = l.toURL) === null || i === void 0 ? void 0 : i.call(l))
				for (var c = 0, d = Object.entries(r); c < d.length; c++) {
					var h = d[c],
						p = h[0],
						v = h[1]
					v && this.videoElement.setAttribute(p, p === 'poster' ? v : '')
				}
			}),
			(n.prototype.update = function (r, l, i, u, c) {
				var d = this
				if (r !== this.originalVideo) {
					for (var h = this.videoElement.getElementsByTagName('SOURCE'); h[0]; )
						h[0].parentNode.removeChild(h[0])
					xs(this.videoElement, r, i, this.htmlPluginState).then(function () {
						;(d.setVideoAttributes(u, c),
							d.handleSourceToVideo(r, l),
							d.videoElement.load())
					})
				}
			}),
			n
		)
	})(),
	Y3 = typeof ha == 'object' && ha && ha.Object === Object && ha,
	Q3 = typeof self == 'object' && self && self.Object === Object && self
Y3 || Q3 || Function('return this')()
function K3() {
	return typeof window < 'u'
}
function X3(n, r, l) {
	var i = qa(r)
	if (n)
		for (var u = 0; u < n.length; u++) {
			var c = n[u](null, i)
			if (!c) break
		}
	return i.toURL(l ? { trackedAnalytics: l } : null)
}
function As(n) {
	n.cleanupCallbacks.forEach(function (r) {
		r()
	})
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var eh =
	function (n, r) {
		return (
			(eh =
				Object.setPrototypeOf ||
				({ __proto__: [] } instanceof Array &&
					function (l, i) {
						l.__proto__ = i
					}) ||
				function (l, i) {
					for (var u in i) i.hasOwnProperty(u) && (l[u] = i[u])
				}),
			eh(n, r)
		)
	}
function T_(n, r) {
	eh(n, r)
	function l() {
		this.constructor = n
	}
	n.prototype =
		r === null ? Object.create(r) : ((l.prototype = r.prototype), new l())
}
var Kl = function () {
	return (
		(Kl =
			Object.assign ||
			function (r) {
				for (var l, i = 1, u = arguments.length; i < u; i++) {
					l = arguments[i]
					for (var c in l)
						Object.prototype.hasOwnProperty.call(l, c) && (r[c] = l[c])
				}
				return r
			}),
		Kl.apply(this, arguments)
	)
}
function O_(n, r) {
	var l = {}
	for (var i in n)
		Object.prototype.hasOwnProperty.call(n, i) &&
			r.indexOf(i) < 0 &&
			(l[i] = n[i])
	if (n != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var u = 0, i = Object.getOwnPropertySymbols(n); u < i.length; u++)
			r.indexOf(i[u]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(n, i[u]) &&
				(l[i[u]] = n[i[u]])
	return l
}
function Z3() {
	return typeof process < 'u' && Rd
		? Rd.CLOUDINARY_SOURCE === 'cli' || Rd.CLD_CLI === 'true'
		: !1
}
var nb = Z3(),
	xd = Kl(
		{ sdkSemver: '1.14.4', techVersion: ue.version, sdkCode: nb ? 'H' : 'J' },
		nb && { product: 'B' }
	),
	g4 = (function (n) {
		T_(r, n)
		function r(l) {
			var i = n.call(this, l) || this
			return ((i.imageRef = ue.createRef()), i)
		}
		return (
			(r.prototype.componentDidMount = function () {
				this.htmlLayerInstance = new pN(
					this.imageRef.current,
					this.props.cldImg,
					this.props.plugins,
					xd
				)
			}),
			(r.prototype.componentDidUpdate = function () {
				;(As(this.htmlLayerInstance.htmlPluginState),
					this.htmlLayerInstance.update(
						this.props.cldImg,
						this.props.plugins,
						xd
					))
			}),
			(r.prototype.componentWillUnmount = function () {
				;(As(this.htmlLayerInstance.htmlPluginState),
					this.htmlLayerInstance.unmount())
			}),
			(r.prototype.render = function () {
				var l = this.props
				;(l.cldImg, l.plugins)
				var i = O_(l, ['cldImg', 'plugins'])
				if (K3())
					return ue.createElement(
						'img',
						Kl({ suppressHydrationWarning: !0 }, i, { ref: this.imageRef })
					)
				var u = X3(this.props.plugins, this.props.cldImg, xd)
				return ue.createElement('img', Kl({}, i, { src: u }))
			}),
			r
		)
	})(ue.Component),
	J3 = [
		'controls',
		'loop',
		'muted',
		'poster',
		'preload',
		'autoplay',
		'playsinline'
	]
;(function (n) {
	T_(r, n)
	function r(l) {
		var i = n.call(this, l) || this
		return (
			(i.videoRef = m.createRef()),
			(i.attachRef = i.attachRef.bind(i)),
			i
		)
	}
	return (
		(r.prototype.componentDidMount = function () {
			this.htmlVideoLayerInstance = new I3(
				this.videoRef && this.videoRef.current,
				this.props.cldVid,
				this.props.sources,
				this.props.plugins,
				this.getVideoAttributes(),
				this.props.cldPoster,
				{ useFetchFormat: this.props.useFetchFormat }
			)
		}),
		(r.prototype.componentDidUpdate = function () {
			;(As(this.htmlVideoLayerInstance.htmlPluginState),
				this.htmlVideoLayerInstance.update(
					this.props.cldVid,
					this.props.sources,
					this.props.plugins,
					this.getVideoAttributes(),
					this.props.cldPoster
				))
		}),
		(r.prototype.componentWillUnmount = function () {
			As(this.htmlVideoLayerInstance.htmlPluginState)
		}),
		(r.prototype.getVideoAttributes = function () {
			var l = this,
				i = {}
			return (
				J3.forEach(function (u) {
					u in l.props && (i[u] = l.props[u])
				}),
				i
			)
		}),
		(r.prototype.attachRef = function (l) {
			this.videoRef.current = l
			var i = this.props.innerRef
			i && (i instanceof Function ? i(l) : (i.current = l))
		}),
		(r.prototype.render = function () {
			var l = this.props
			;(l.cldVid,
				l.cldPoster,
				l.plugins,
				l.sources,
				l.innerRef,
				l.useFetchFormat)
			var i = O_(l, [
				'cldVid',
				'cldPoster',
				'plugins',
				'sources',
				'innerRef',
				'useFetchFormat'
			])
			return ue.createElement('video', Kl({}, i, { ref: this.attachRef }))
		}),
		r
	)
})(m.Component)
export {
	mM as $,
	Vh as A,
	PO as B,
	r4 as C,
	CO as D,
	MO as E,
	DO as F,
	u4 as G,
	qj as H,
	a4 as I,
	s4 as J,
	oM as K,
	Vj as L,
	Hj as M,
	uM as N,
	Aj as O,
	n4 as P,
	aj as Q,
	ue as R,
	gj as S,
	t4 as T,
	Bj as U,
	Lj as V,
	Ij as W,
	Jj as X,
	c4 as Y,
	Nj as Z,
	jj as _,
	lb as a,
	vM as a0,
	Ej as a1,
	f4 as a2,
	Oj as a3,
	dj as a4,
	pj as a5,
	fj as a6,
	Fx as a7,
	mj as a8,
	cj as a9,
	yD as aA,
	gD as aB,
	_D as aC,
	Rj as aD,
	bD as aE,
	xD as aF,
	AD as aG,
	DD as aH,
	BD as aI,
	VD as aJ,
	PD as aK,
	kD as aL,
	wj as aM,
	HD as aN,
	v4 as aO,
	p4 as aP,
	m4 as aQ,
	YD as aR,
	an as aS,
	$j as aT,
	Gj as aU,
	bj as aV,
	vj as aa,
	yj as ab,
	Uj as ac,
	Sj as ad,
	_j as ae,
	Zj as af,
	Mj as ag,
	rj as ah,
	Qj as ai,
	zj as aj,
	sD as ak,
	Yj as al,
	y4 as am,
	Mx as an,
	Xj as ao,
	Dj as ap,
	Pj as aq,
	g4 as ar,
	hj as as,
	Fj as at,
	Cj as au,
	xj as av,
	Tj as aw,
	h4 as ax,
	bo as ay,
	cN as az,
	uj as b,
	nj as c,
	sj as d,
	oj as e,
	m as f,
	cR as g,
	ve as h,
	XD as i,
	ob as j,
	ij as k,
	d4 as l,
	z as m,
	Cw as n,
	Tw as o,
	Ow as p,
	Kj as q,
	va as r,
	it as s,
	kj as t,
	lj as u,
	e4 as v,
	l4 as w,
	LO as x,
	VO as y,
	BO as z
}
