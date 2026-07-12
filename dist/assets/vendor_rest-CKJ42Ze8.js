var BO = Object.defineProperty
var Yg = (e) => {
	throw TypeError(e)
}
var VO = (e, t, r) =>
	t in e
		? BO(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
		: (e[t] = r)
var at = (e, t, r) => VO(e, typeof t != 'symbol' ? t + '' : t, r),
	su = (e, t, r) => t.has(e) || Yg('Cannot ' + r)
var C = (e, t, r) => (
		su(e, t, 'read from private field'),
		r ? r.call(e) : t.get(e)
	),
	ie = (e, t, r) =>
		t.has(e)
			? Yg('Cannot add the same private member more than once')
			: t instanceof WeakSet
				? t.add(e)
				: t.set(e, r),
	G = (e, t, r, n) => (
		su(e, t, 'write to private field'),
		n ? n.call(e, r) : t.set(e, r),
		r
	),
	J = (e, t, r) => (su(e, t, 'access private method'), r)
var xa = (e, t, r, n) => ({
	set _(i) {
		G(e, t, i, r)
	},
	get _() {
		return C(e, t, n)
	}
})
import {
	g as zO,
	c as Ni,
	a as qe,
	r as Jt,
	b as HO,
	d as GO,
	R as K,
	e as WO,
	f as Qs,
	h as xh,
	s as ou,
	i as z1
} from './vendor_react-DuD2GJTP.js'
var uu = { exports: {} },
	lu = {}
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Jg
function KO() {
	return (
		Jg ||
			((Jg = 1),
			(function (e) {
				function t(M, q) {
					var I = M.length
					M.push(q)
					e: for (; 0 < I; ) {
						var D = (I - 1) >>> 1,
							N = M[D]
						if (0 < i(N, q)) ((M[D] = q), (M[I] = N), (I = D))
						else break e
					}
				}
				function r(M) {
					return M.length === 0 ? null : M[0]
				}
				function n(M) {
					if (M.length === 0) return null
					var q = M[0],
						I = M.pop()
					if (I !== q) {
						M[0] = I
						e: for (var D = 0, N = M.length, W = N >>> 1; D < W; ) {
							var oe = 2 * (D + 1) - 1,
								B = M[oe],
								re = oe + 1,
								Z = M[re]
							if (0 > i(B, I))
								re < N && 0 > i(Z, B)
									? ((M[D] = Z), (M[re] = I), (D = re))
									: ((M[D] = B), (M[oe] = I), (D = oe))
							else if (re < N && 0 > i(Z, I))
								((M[D] = Z), (M[re] = I), (D = re))
							else break e
						}
					}
					return q
				}
				function i(M, q) {
					var I = M.sortIndex - q.sortIndex
					return I !== 0 ? I : M.id - q.id
				}
				if (
					((e.unstable_now = void 0),
					typeof performance == 'object' &&
						typeof performance.now == 'function')
				) {
					var a = performance
					e.unstable_now = function () {
						return a.now()
					}
				} else {
					var s = Date,
						o = s.now()
					e.unstable_now = function () {
						return s.now() - o
					}
				}
				var u = [],
					l = [],
					f = 1,
					c = null,
					d = 3,
					h = !1,
					g = !1,
					p = !1,
					m = !1,
					v = typeof setTimeout == 'function' ? setTimeout : null,
					_ = typeof clearTimeout == 'function' ? clearTimeout : null,
					w = typeof setImmediate < 'u' ? setImmediate : null
				function x(M) {
					for (var q = r(l); q !== null; ) {
						if (q.callback === null) n(l)
						else if (q.startTime <= M)
							(n(l), (q.sortIndex = q.expirationTime), t(u, q))
						else break
						q = r(l)
					}
				}
				function E(M) {
					if (((p = !1), x(M), !g))
						if (r(u) !== null) ((g = !0), R || ((R = !0), T()))
						else {
							var q = r(l)
							q !== null && j(E, q.startTime - M)
						}
				}
				var R = !1,
					S = -1,
					y = 5,
					b = -1
				function O() {
					return m ? !0 : !(e.unstable_now() - b < y)
				}
				function A() {
					if (((m = !1), R)) {
						var M = e.unstable_now()
						b = M
						var q = !0
						try {
							e: {
								;((g = !1), p && ((p = !1), _(S), (S = -1)), (h = !0))
								var I = d
								try {
									t: {
										for (
											x(M), c = r(u);
											c !== null && !(c.expirationTime > M && O());
										) {
											var D = c.callback
											if (typeof D == 'function') {
												;((c.callback = null), (d = c.priorityLevel))
												var N = D(c.expirationTime <= M)
												if (((M = e.unstable_now()), typeof N == 'function')) {
													;((c.callback = N), x(M), (q = !0))
													break t
												}
												;(c === r(u) && n(u), x(M))
											} else n(u)
											c = r(u)
										}
										if (c !== null) q = !0
										else {
											var W = r(l)
											;(W !== null && j(E, W.startTime - M), (q = !1))
										}
									}
									break e
								} finally {
									;((c = null), (d = I), (h = !1))
								}
								q = void 0
							}
						} finally {
							q ? T() : (R = !1)
						}
					}
				}
				var T
				if (typeof w == 'function')
					T = function () {
						w(A)
					}
				else if (typeof MessageChannel < 'u') {
					var P = new MessageChannel(),
						k = P.port2
					;((P.port1.onmessage = A),
						(T = function () {
							k.postMessage(null)
						}))
				} else
					T = function () {
						v(A, 0)
					}
				function j(M, q) {
					S = v(function () {
						M(e.unstable_now())
					}, q)
				}
				;((e.unstable_IdlePriority = 5),
					(e.unstable_ImmediatePriority = 1),
					(e.unstable_LowPriority = 4),
					(e.unstable_NormalPriority = 3),
					(e.unstable_Profiling = null),
					(e.unstable_UserBlockingPriority = 2),
					(e.unstable_cancelCallback = function (M) {
						M.callback = null
					}),
					(e.unstable_forceFrameRate = function (M) {
						0 > M || 125 < M
							? console.error(
									'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
								)
							: (y = 0 < M ? Math.floor(1e3 / M) : 5)
					}),
					(e.unstable_getCurrentPriorityLevel = function () {
						return d
					}),
					(e.unstable_next = function (M) {
						switch (d) {
							case 1:
							case 2:
							case 3:
								var q = 3
								break
							default:
								q = d
						}
						var I = d
						d = q
						try {
							return M()
						} finally {
							d = I
						}
					}),
					(e.unstable_requestPaint = function () {
						m = !0
					}),
					(e.unstable_runWithPriority = function (M, q) {
						switch (M) {
							case 1:
							case 2:
							case 3:
							case 4:
							case 5:
								break
							default:
								M = 3
						}
						var I = d
						d = M
						try {
							return q()
						} finally {
							d = I
						}
					}),
					(e.unstable_scheduleCallback = function (M, q, I) {
						var D = e.unstable_now()
						switch (
							(typeof I == 'object' && I !== null
								? ((I = I.delay),
									(I = typeof I == 'number' && 0 < I ? D + I : D))
								: (I = D),
							M)
						) {
							case 1:
								var N = -1
								break
							case 2:
								N = 250
								break
							case 5:
								N = 1073741823
								break
							case 4:
								N = 1e4
								break
							default:
								N = 5e3
						}
						return (
							(N = I + N),
							(M = {
								id: f++,
								callback: q,
								priorityLevel: M,
								startTime: I,
								expirationTime: N,
								sortIndex: -1
							}),
							I > D
								? ((M.sortIndex = I),
									t(l, M),
									r(u) === null &&
										M === r(l) &&
										(p ? (_(S), (S = -1)) : (p = !0), j(E, I - D)))
								: ((M.sortIndex = N),
									t(u, M),
									g || h || ((g = !0), R || ((R = !0), T()))),
							M
						)
					}),
					(e.unstable_shouldYield = O),
					(e.unstable_wrapCallback = function (M) {
						var q = d
						return function () {
							var I = d
							d = q
							try {
								return M.apply(this, arguments)
							} finally {
								d = I
							}
						}
					}))
			})(lu)),
		lu
	)
}
var Xg
function QB() {
	return (Xg || ((Xg = 1), (uu.exports = KO())), uu.exports)
}
var Ds = { exports: {} },
	Ns = { exports: {} },
	QO = Ns.exports,
	em
function ZO() {
	return (
		em ||
			((em = 1),
			(function (e, t) {
				;(function (r, n) {
					e.exports = n()
				})(QO, function () {
					function r(p) {
						return !isNaN(parseFloat(p)) && isFinite(p)
					}
					function n(p) {
						return p.charAt(0).toUpperCase() + p.substring(1)
					}
					function i(p) {
						return function () {
							return this[p]
						}
					}
					var a = ['isConstructor', 'isEval', 'isNative', 'isToplevel'],
						s = ['columnNumber', 'lineNumber'],
						o = ['fileName', 'functionName', 'source'],
						u = ['args'],
						l = ['evalOrigin'],
						f = a.concat(s, o, u, l)
					function c(p) {
						if (p)
							for (var m = 0; m < f.length; m++)
								p[f[m]] !== void 0 && this['set' + n(f[m])](p[f[m]])
					}
					;((c.prototype = {
						getArgs: function () {
							return this.args
						},
						setArgs: function (p) {
							if (Object.prototype.toString.call(p) !== '[object Array]')
								throw new TypeError('Args must be an Array')
							this.args = p
						},
						getEvalOrigin: function () {
							return this.evalOrigin
						},
						setEvalOrigin: function (p) {
							if (p instanceof c) this.evalOrigin = p
							else if (p instanceof Object) this.evalOrigin = new c(p)
							else
								throw new TypeError(
									'Eval Origin must be an Object or StackFrame'
								)
						},
						toString: function () {
							var p = this.getFileName() || '',
								m = this.getLineNumber() || '',
								v = this.getColumnNumber() || '',
								_ = this.getFunctionName() || ''
							return this.getIsEval()
								? p
									? '[eval] (' + p + ':' + m + ':' + v + ')'
									: '[eval]:' + m + ':' + v
								: _
									? _ + ' (' + p + ':' + m + ':' + v + ')'
									: p + ':' + m + ':' + v
						}
					}),
						(c.fromString = function (m) {
							var v = m.indexOf('('),
								_ = m.lastIndexOf(')'),
								w = m.substring(0, v),
								x = m.substring(v + 1, _).split(','),
								E = m.substring(_ + 1)
							if (E.indexOf('@') === 0)
								var R = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(E, ''),
									S = R[1],
									y = R[2],
									b = R[3]
							return new c({
								functionName: w,
								args: x || void 0,
								fileName: S,
								lineNumber: y || void 0,
								columnNumber: b || void 0
							})
						}))
					for (var d = 0; d < a.length; d++)
						((c.prototype['get' + n(a[d])] = i(a[d])),
							(c.prototype['set' + n(a[d])] = (function (p) {
								return function (m) {
									this[p] = !!m
								}
							})(a[d])))
					for (var h = 0; h < s.length; h++)
						((c.prototype['get' + n(s[h])] = i(s[h])),
							(c.prototype['set' + n(s[h])] = (function (p) {
								return function (m) {
									if (!r(m)) throw new TypeError(p + ' must be a Number')
									this[p] = Number(m)
								}
							})(s[h])))
					for (var g = 0; g < o.length; g++)
						((c.prototype['get' + n(o[g])] = i(o[g])),
							(c.prototype['set' + n(o[g])] = (function (p) {
								return function (m) {
									this[p] = String(m)
								}
							})(o[g])))
					return c
				})
			})(Ns)),
		Ns.exports
	)
}
var YO = Ds.exports,
	tm
function JO() {
	return (
		tm ||
			((tm = 1),
			(function (e, t) {
				;(function (r, n) {
					e.exports = n(ZO())
				})(YO, function (n) {
					var i = /(^|@)\S+:\d+/,
						a = /^\s*at .*(\S+:\d+|\(native\))/m,
						s = /^(eval@)?(\[native code])?$/
					return {
						parse: function (u) {
							if (
								typeof u.stacktrace < 'u' ||
								typeof u['opera#sourceloc'] < 'u'
							)
								return this.parseOpera(u)
							if (u.stack && u.stack.match(a)) return this.parseV8OrIE(u)
							if (u.stack) return this.parseFFOrSafari(u)
							throw new Error('Cannot parse given Error object')
						},
						extractLocation: function (u) {
							if (u.indexOf(':') === -1) return [u]
							var l = /(.+?)(?::(\d+))?(?::(\d+))?$/,
								f = l.exec(u.replace(/[()]/g, ''))
							return [f[1], f[2] || void 0, f[3] || void 0]
						},
						parseV8OrIE: function (u) {
							var l = u.stack
								.split(
									`
`
								)
								.filter(function (f) {
									return !!f.match(a)
								}, this)
							return l.map(function (f) {
								f.indexOf('(eval ') > -1 &&
									(f = f
										.replace(/eval code/g, 'eval')
										.replace(/(\(eval at [^()]*)|(,.*$)/g, ''))
								var c = f
										.replace(/^\s+/, '')
										.replace(/\(eval code/g, '(')
										.replace(/^.*?\s+/, ''),
									d = c.match(/ (\(.+\)$)/)
								c = d ? c.replace(d[0], '') : c
								var h = this.extractLocation(d ? d[1] : c),
									g = (d && c) || void 0,
									p = ['eval', '<anonymous>'].indexOf(h[0]) > -1 ? void 0 : h[0]
								return new n({
									functionName: g,
									fileName: p,
									lineNumber: h[1],
									columnNumber: h[2],
									source: f
								})
							}, this)
						},
						parseFFOrSafari: function (u) {
							var l = u.stack
								.split(
									`
`
								)
								.filter(function (f) {
									return !f.match(s)
								}, this)
							return l.map(function (f) {
								if (
									(f.indexOf(' > eval') > -1 &&
										(f = f.replace(
											/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g,
											':$1'
										)),
									f.indexOf('@') === -1 && f.indexOf(':') === -1)
								)
									return new n({ functionName: f })
								var c = /((.*".+"[^@]*)?[^@]*)(?:@)/,
									d = f.match(c),
									h = d && d[1] ? d[1] : void 0,
									g = this.extractLocation(f.replace(c, ''))
								return new n({
									functionName: h,
									fileName: g[0],
									lineNumber: g[1],
									columnNumber: g[2],
									source: f
								})
							}, this)
						},
						parseOpera: function (u) {
							return !u.stacktrace ||
								(u.message.indexOf(`
`) > -1 &&
									u.message.split(`
`).length >
										u.stacktrace.split(`
`).length)
								? this.parseOpera9(u)
								: u.stack
									? this.parseOpera11(u)
									: this.parseOpera10(u)
						},
						parseOpera9: function (u) {
							for (
								var l = /Line (\d+).*script (?:in )?(\S+)/i,
									f = u.message.split(`
`),
									c = [],
									d = 2,
									h = f.length;
								d < h;
								d += 2
							) {
								var g = l.exec(f[d])
								g &&
									c.push(
										new n({ fileName: g[2], lineNumber: g[1], source: f[d] })
									)
							}
							return c
						},
						parseOpera10: function (u) {
							for (
								var l =
										/Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i,
									f = u.stacktrace.split(`
`),
									c = [],
									d = 0,
									h = f.length;
								d < h;
								d += 2
							) {
								var g = l.exec(f[d])
								g &&
									c.push(
										new n({
											functionName: g[3] || void 0,
											fileName: g[2],
											lineNumber: g[1],
											source: f[d]
										})
									)
							}
							return c
						},
						parseOpera11: function (u) {
							var l = u.stack
								.split(
									`
`
								)
								.filter(function (f) {
									return !!f.match(i) && !f.match(/^Error created at/)
								}, this)
							return l.map(function (f) {
								var c = f.split('@'),
									d = this.extractLocation(c.pop()),
									h = c.shift() || '',
									g =
										h
											.replace(/<anonymous function(: (\w+))?>/, '$2')
											.replace(/\([^)]*\)/g, '') || void 0,
									p
								h.match(/\(([^)]*)\)/) &&
									(p = h.replace(/^[^(]+\(([^)]*)\)$/, '$1'))
								var m =
									p === void 0 || p === '[arguments not available]'
										? void 0
										: p.split(',')
								return new n({
									functionName: g,
									args: m,
									fileName: d[0],
									lineNumber: d[1],
									columnNumber: d[2],
									source: f
								})
							}, this)
						}
					}
				})
			})(Ds)),
		Ds.exports
	)
}
JO()
var da = class {
		constructor() {
			;((this.listeners = new Set()),
				(this.subscribe = this.subscribe.bind(this)))
		}
		subscribe(e) {
			return (
				this.listeners.add(e),
				this.onSubscribe(),
				() => {
					;(this.listeners.delete(e), this.onUnsubscribe())
				}
			)
		}
		hasListeners() {
			return this.listeners.size > 0
		}
		onSubscribe() {}
		onUnsubscribe() {}
	},
	si,
	_n,
	Bi,
	k1,
	XO =
		((k1 = class extends da {
			constructor() {
				super()
				ie(this, si)
				ie(this, _n)
				ie(this, Bi)
				G(this, Bi, (t) => {
					if (typeof window < 'u' && window.addEventListener) {
						const r = () => t()
						return (
							window.addEventListener('visibilitychange', r, !1),
							() => {
								window.removeEventListener('visibilitychange', r)
							}
						)
					}
				})
			}
			onSubscribe() {
				C(this, _n) || this.setEventListener(C(this, Bi))
			}
			onUnsubscribe() {
				var t
				this.hasListeners() ||
					((t = C(this, _n)) == null || t.call(this), G(this, _n, void 0))
			}
			setEventListener(t) {
				var r
				;(G(this, Bi, t),
					(r = C(this, _n)) == null || r.call(this),
					G(
						this,
						_n,
						t((n) => {
							typeof n == 'boolean' ? this.setFocused(n) : this.onFocus()
						})
					))
			}
			setFocused(t) {
				C(this, si) !== t && (G(this, si, t), this.onFocus())
			}
			onFocus() {
				const t = this.isFocused()
				this.listeners.forEach((r) => {
					r(t)
				})
			}
			isFocused() {
				var t
				return typeof C(this, si) == 'boolean'
					? C(this, si)
					: ((t = globalThis.document) == null ? void 0 : t.visibilityState) !==
							'hidden'
			}
		}),
		(si = new WeakMap()),
		(_n = new WeakMap()),
		(Bi = new WeakMap()),
		k1),
	Cp = new XO(),
	eC = {
		setTimeout: (e, t) => setTimeout(e, t),
		clearTimeout: (e) => clearTimeout(e),
		setInterval: (e, t) => setInterval(e, t),
		clearInterval: (e) => clearInterval(e)
	},
	bn,
	Op,
	q1,
	tC =
		((q1 = class {
			constructor() {
				ie(this, bn, eC)
				ie(this, Op, !1)
			}
			setTimeoutProvider(e) {
				G(this, bn, e)
			}
			setTimeout(e, t) {
				return C(this, bn).setTimeout(e, t)
			}
			clearTimeout(e) {
				C(this, bn).clearTimeout(e)
			}
			setInterval(e, t) {
				return C(this, bn).setInterval(e, t)
			}
			clearInterval(e) {
				C(this, bn).clearInterval(e)
			}
		}),
		(bn = new WeakMap()),
		(Op = new WeakMap()),
		q1),
	ni = new tC()
function rC(e) {
	setTimeout(e, 0)
}
var nC = typeof window > 'u' || 'Deno' in globalThis
function Qt() {}
function iC(e, t) {
	return typeof e == 'function' ? e(t) : e
}
function Rh(e) {
	return typeof e == 'number' && e >= 0 && e !== 1 / 0
}
function H1(e, t) {
	return Math.max(e + (t || 0) - Date.now(), 0)
}
function Mn(e, t) {
	return typeof e == 'function' ? e(t) : e
}
function Dt(e, t) {
	return typeof e == 'function' ? e(t) : e
}
function rm(e, t) {
	const {
		type: r = 'all',
		exact: n,
		fetchStatus: i,
		predicate: a,
		queryKey: s,
		stale: o
	} = e
	if (s) {
		if (n) {
			if (t.queryHash !== Tp(s, t.options)) return !1
		} else if (!Va(t.queryKey, s)) return !1
	}
	if (r !== 'all') {
		const u = t.isActive()
		if ((r === 'active' && !u) || (r === 'inactive' && u)) return !1
	}
	return !(
		(typeof o == 'boolean' && t.isStale() !== o) ||
		(i && i !== t.state.fetchStatus) ||
		(a && !a(t))
	)
}
function nm(e, t) {
	const { exact: r, status: n, predicate: i, mutationKey: a } = e
	if (a) {
		if (!t.options.mutationKey) return !1
		if (r) {
			if (yi(t.options.mutationKey) !== yi(a)) return !1
		} else if (!Va(t.options.mutationKey, a)) return !1
	}
	return !((n && t.state.status !== n) || (i && !i(t)))
}
function Tp(e, t) {
	return ((t == null ? void 0 : t.queryKeyHashFn) || yi)(e)
}
function yi(e) {
	return JSON.stringify(e, (t, r) =>
		Oh(r)
			? Object.keys(r)
					.sort()
					.reduce((n, i) => ((n[i] = r[i]), n), {})
			: r
	)
}
function Va(e, t) {
	return e === t
		? !0
		: typeof e != typeof t
			? !1
			: e && t && typeof e == 'object' && typeof t == 'object'
				? Object.keys(t).every((r) => Va(e[r], t[r]))
				: !1
}
var aC = Object.prototype.hasOwnProperty
function G1(e, t, r = 0) {
	if (e === t) return e
	if (r > 500) return t
	const n = im(e) && im(t)
	if (!n && !(Oh(e) && Oh(t))) return t
	const a = (n ? e : Object.keys(e)).length,
		s = n ? t : Object.keys(t),
		o = s.length,
		u = n ? new Array(o) : {}
	let l = 0
	for (let f = 0; f < o; f++) {
		const c = n ? f : s[f],
			d = e[c],
			h = t[c]
		if (d === h) {
			;((u[c] = d), (n ? f < a : aC.call(e, c)) && l++)
			continue
		}
		if (
			d === null ||
			h === null ||
			typeof d != 'object' ||
			typeof h != 'object'
		) {
			u[c] = h
			continue
		}
		const g = G1(d, h, r + 1)
		;((u[c] = g), g === d && l++)
	}
	return a === o && l === a ? e : u
}
function Zs(e, t) {
	if (!t || Object.keys(e).length !== Object.keys(t).length) return !1
	for (const r in e) if (e[r] !== t[r]) return !1
	return !0
}
function im(e) {
	return Array.isArray(e) && e.length === Object.keys(e).length
}
function Oh(e) {
	if (!am(e)) return !1
	const t = e.constructor
	if (t === void 0) return !0
	const r = t.prototype
	return !(
		!am(r) ||
		!r.hasOwnProperty('isPrototypeOf') ||
		Object.getPrototypeOf(e) !== Object.prototype
	)
}
function am(e) {
	return Object.prototype.toString.call(e) === '[object Object]'
}
function sC(e) {
	return new Promise((t) => {
		ni.setTimeout(t, e)
	})
}
function Ch(e, t, r) {
	return typeof r.structuralSharing == 'function'
		? r.structuralSharing(e, t)
		: r.structuralSharing !== !1
			? G1(e, t)
			: t
}
function ZB(e) {
	return e
}
function oC(e, t, r = 0) {
	const n = [...e, t]
	return r && n.length > r ? n.slice(1) : n
}
function uC(e, t, r = 0) {
	const n = [t, ...e]
	return r && n.length > r ? n.slice(0, -1) : n
}
var Ep = Symbol()
function W1(e, t) {
	return !e.queryFn && t != null && t.initialPromise
		? () => t.initialPromise
		: !e.queryFn || e.queryFn === Ep
			? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
			: e.queryFn
}
function YB(e, t) {
	return typeof e == 'function' ? e(...t) : !!e
}
function lC(e, t, r) {
	let n = !1,
		i
	return (
		Object.defineProperty(e, 'signal', {
			enumerable: !0,
			get: () => (
				i ?? (i = t()),
				n ||
					((n = !0),
					i.aborted ? r() : i.addEventListener('abort', r, { once: !0 })),
				i
			)
		}),
		e
	)
}
var Ys = (() => {
	let e = () => nC
	return {
		isServer() {
			return e()
		},
		setIsServer(t) {
			e = t
		}
	}
})()
function Th() {
	let e, t
	const r = new Promise((i, a) => {
		;((e = i), (t = a))
	})
	;((r.status = 'pending'), r.catch(() => {}))
	function n(i) {
		;(Object.assign(r, i), delete r.resolve, delete r.reject)
	}
	return (
		(r.resolve = (i) => {
			;(n({ status: 'fulfilled', value: i }), e(i))
		}),
		(r.reject = (i) => {
			;(n({ status: 'rejected', reason: i }), t(i))
		}),
		r
	)
}
var cC = rC
function fC() {
	let e = [],
		t = 0,
		r = (o) => {
			o()
		},
		n = (o) => {
			o()
		},
		i = cC
	const a = (o) => {
			t
				? e.push(o)
				: i(() => {
						r(o)
					})
		},
		s = () => {
			const o = e
			;((e = []),
				o.length &&
					i(() => {
						n(() => {
							o.forEach((u) => {
								r(u)
							})
						})
					}))
		}
	return {
		batch: (o) => {
			let u
			t++
			try {
				u = o()
			} finally {
				;(t--, t || s())
			}
			return u
		},
		batchCalls:
			(o) =>
			(...u) => {
				a(() => {
					o(...u)
				})
			},
		schedule: a,
		setNotifyFunction: (o) => {
			r = o
		},
		setBatchNotifyFunction: (o) => {
			n = o
		},
		setScheduler: (o) => {
			i = o
		}
	}
}
var ct = fC(),
	Vi,
	wn,
	zi,
	$1,
	dC =
		(($1 = class extends da {
			constructor() {
				super()
				ie(this, Vi, !0)
				ie(this, wn)
				ie(this, zi)
				G(this, zi, (t) => {
					if (typeof window < 'u' && window.addEventListener) {
						const r = () => t(!0),
							n = () => t(!1)
						return (
							window.addEventListener('online', r, !1),
							window.addEventListener('offline', n, !1),
							() => {
								;(window.removeEventListener('online', r),
									window.removeEventListener('offline', n))
							}
						)
					}
				})
			}
			onSubscribe() {
				C(this, wn) || this.setEventListener(C(this, zi))
			}
			onUnsubscribe() {
				var t
				this.hasListeners() ||
					((t = C(this, wn)) == null || t.call(this), G(this, wn, void 0))
			}
			setEventListener(t) {
				var r
				;(G(this, zi, t),
					(r = C(this, wn)) == null || r.call(this),
					G(this, wn, t(this.setOnline.bind(this))))
			}
			setOnline(t) {
				C(this, Vi) !== t &&
					(G(this, Vi, t),
					this.listeners.forEach((n) => {
						n(t)
					}))
			}
			isOnline() {
				return C(this, Vi)
			}
		}),
		(Vi = new WeakMap()),
		(wn = new WeakMap()),
		(zi = new WeakMap()),
		$1),
	Js = new dC()
function hC(e) {
	return Math.min(1e3 * 2 ** e, 3e4)
}
function K1(e) {
	return (e ?? 'online') === 'online' ? Js.isOnline() : !0
}
var Eh = class extends Error {
	constructor(e) {
		;(super('CancelledError'),
			(this.revert = e == null ? void 0 : e.revert),
			(this.silent = e == null ? void 0 : e.silent))
	}
}
function Q1(e) {
	let t = !1,
		r = 0,
		n
	const i = Th(),
		a = () => i.status !== 'pending',
		s = (p) => {
			var m
			if (!a()) {
				const v = new Eh(p)
				;(d(v), (m = e.onCancel) == null || m.call(e, v))
			}
		},
		o = () => {
			t = !0
		},
		u = () => {
			t = !1
		},
		l = () =>
			Cp.isFocused() &&
			(e.networkMode === 'always' || Js.isOnline()) &&
			e.canRun(),
		f = () => K1(e.networkMode) && e.canRun(),
		c = (p) => {
			a() || (n == null || n(), i.resolve(p))
		},
		d = (p) => {
			a() || (n == null || n(), i.reject(p))
		},
		h = () =>
			new Promise((p) => {
				var m
				;((n = (v) => {
					;(a() || l()) && p(v)
				}),
					(m = e.onPause) == null || m.call(e))
			}).then(() => {
				var p
				;((n = void 0), a() || (p = e.onContinue) == null || p.call(e))
			}),
		g = () => {
			if (a()) return
			let p
			const m = r === 0 ? e.initialPromise : void 0
			try {
				p = m ?? e.fn()
			} catch (v) {
				p = Promise.reject(v)
			}
			Promise.resolve(p)
				.then(c)
				.catch((v) => {
					var R
					if (a()) return
					const _ = e.retry ?? (Ys.isServer() ? 0 : 3),
						w = e.retryDelay ?? hC,
						x = typeof w == 'function' ? w(r, v) : w,
						E =
							_ === !0 ||
							(typeof _ == 'number' && r < _) ||
							(typeof _ == 'function' && _(r, v))
					if (t || !E) {
						d(v)
						return
					}
					;(r++,
						(R = e.onFail) == null || R.call(e, r, v),
						sC(x)
							.then(() => (l() ? void 0 : h()))
							.then(() => {
								t ? d(v) : g()
							}))
				})
		}
	return {
		promise: i,
		status: () => i.status,
		cancel: s,
		continue: () => (n == null || n(), i),
		cancelRetry: o,
		continueRetry: u,
		canStart: f,
		start: () => (f() ? g() : h().then(g), i)
	}
}
var oi,
	F1,
	Z1 =
		((F1 = class {
			constructor() {
				ie(this, oi)
			}
			destroy() {
				this.clearGcTimeout()
			}
			scheduleGc() {
				;(this.clearGcTimeout(),
					Rh(this.gcTime) &&
						G(
							this,
							oi,
							ni.setTimeout(() => {
								this.optionalRemove()
							}, this.gcTime)
						))
			}
			updateGcTime(e) {
				this.gcTime = Math.max(
					this.gcTime || 0,
					e ?? (Ys.isServer() ? 1 / 0 : 300 * 1e3)
				)
			}
			clearGcTimeout() {
				C(this, oi) !== void 0 &&
					(ni.clearTimeout(C(this, oi)), G(this, oi, void 0))
			}
		}),
		(oi = new WeakMap()),
		F1)
function pC(e) {
	return {
		onFetch: (t, r) => {
			var f, c, d, h, g
			const n = t.options,
				i =
					(d =
						(c = (f = t.fetchOptions) == null ? void 0 : f.meta) == null
							? void 0
							: c.fetchMore) == null
						? void 0
						: d.direction,
				a = ((h = t.state.data) == null ? void 0 : h.pages) || [],
				s = ((g = t.state.data) == null ? void 0 : g.pageParams) || []
			let o = { pages: [], pageParams: [] },
				u = 0
			const l = async () => {
				let p = !1
				const m = (w) => {
						lC(
							w,
							() => t.signal,
							() => (p = !0)
						)
					},
					v = W1(t.options, t.fetchOptions),
					_ = async (w, x, E) => {
						if (p) return Promise.reject(t.signal.reason)
						if (x == null && w.pages.length) return Promise.resolve(w)
						const S = (() => {
								const A = {
									client: t.client,
									queryKey: t.queryKey,
									pageParam: x,
									direction: E ? 'backward' : 'forward',
									meta: t.options.meta
								}
								return (m(A), A)
							})(),
							y = await v(S),
							{ maxPages: b } = t.options,
							O = E ? uC : oC
						return {
							pages: O(w.pages, y, b),
							pageParams: O(w.pageParams, x, b)
						}
					}
				if (i && a.length) {
					const w = i === 'backward',
						x = w ? gC : sm,
						E = { pages: a, pageParams: s },
						R = x(n, E)
					o = await _(E, R, w)
				} else {
					const w = e ?? a.length
					do {
						const x = u === 0 ? (s[0] ?? n.initialPageParam) : sm(n, o)
						if (u > 0 && x == null) break
						;((o = await _(o, x)), u++)
					} while (u < w)
				}
				return o
			}
			t.options.persister
				? (t.fetchFn = () => {
						var p, m
						return (m = (p = t.options).persister) == null
							? void 0
							: m.call(
									p,
									l,
									{
										client: t.client,
										queryKey: t.queryKey,
										meta: t.options.meta,
										signal: t.signal
									},
									r
								)
					})
				: (t.fetchFn = l)
		}
	}
}
function sm(e, { pages: t, pageParams: r }) {
	const n = t.length - 1
	return t.length > 0 ? e.getNextPageParam(t[n], t, r[n], r) : void 0
}
function gC(e, { pages: t, pageParams: r }) {
	var n
	return t.length > 0
		? (n = e.getPreviousPageParam) == null
			? void 0
			: n.call(e, t[0], t, r[0], r)
		: void 0
}
var Hi,
	ui,
	Gi,
	Wt,
	li,
	st,
	rs,
	ci,
	Ft,
	Y1,
	Lr,
	D1,
	mC =
		((D1 = class extends Z1 {
			constructor(t) {
				super()
				ie(this, Ft)
				ie(this, Hi)
				ie(this, ui)
				ie(this, Gi)
				ie(this, Wt)
				ie(this, li)
				ie(this, st)
				ie(this, rs)
				ie(this, ci)
				;(G(this, ci, !1),
					G(this, rs, t.defaultOptions),
					this.setOptions(t.options),
					(this.observers = []),
					G(this, li, t.client),
					G(this, Wt, C(this, li).getQueryCache()),
					(this.queryKey = t.queryKey),
					(this.queryHash = t.queryHash),
					G(this, ui, um(this.options)),
					(this.state = t.state ?? C(this, ui)),
					this.scheduleGc())
			}
			get meta() {
				return this.options.meta
			}
			get queryType() {
				return C(this, Hi)
			}
			get promise() {
				var t
				return (t = C(this, st)) == null ? void 0 : t.promise
			}
			setOptions(t) {
				if (
					((this.options = { ...C(this, rs), ...t }),
					t != null && t._type && G(this, Hi, t._type),
					this.updateGcTime(this.options.gcTime),
					this.state && this.state.data === void 0)
				) {
					const r = um(this.options)
					r.data !== void 0 &&
						(this.setState(om(r.data, r.dataUpdatedAt)), G(this, ui, r))
				}
			}
			optionalRemove() {
				!this.observers.length &&
					this.state.fetchStatus === 'idle' &&
					C(this, Wt).remove(this)
			}
			setData(t, r) {
				const n = Ch(this.state.data, t, this.options)
				return (
					J(this, Ft, Lr).call(this, {
						data: n,
						type: 'success',
						dataUpdatedAt: r == null ? void 0 : r.updatedAt,
						manual: r == null ? void 0 : r.manual
					}),
					n
				)
			}
			setState(t) {
				J(this, Ft, Lr).call(this, { type: 'setState', state: t })
			}
			cancel(t) {
				var n, i
				const r = (n = C(this, st)) == null ? void 0 : n.promise
				return (
					(i = C(this, st)) == null || i.cancel(t),
					r ? r.then(Qt).catch(Qt) : Promise.resolve()
				)
			}
			destroy() {
				;(super.destroy(), this.cancel({ silent: !0 }))
			}
			get resetState() {
				return C(this, ui)
			}
			reset() {
				;(this.destroy(), this.setState(this.resetState))
			}
			isActive() {
				return this.observers.some((t) => Dt(t.options.enabled, this) !== !1)
			}
			isDisabled() {
				return this.getObserversCount() > 0
					? !this.isActive()
					: this.options.queryFn === Ep || !this.isFetched()
			}
			isFetched() {
				return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
			}
			isStatic() {
				return this.getObserversCount() > 0
					? this.observers.some(
							(t) => Mn(t.options.staleTime, this) === 'static'
						)
					: !1
			}
			isStale() {
				return this.getObserversCount() > 0
					? this.observers.some((t) => t.getCurrentResult().isStale)
					: this.state.data === void 0 || this.state.isInvalidated
			}
			isStaleByTime(t = 0) {
				return this.state.data === void 0
					? !0
					: t === 'static'
						? !1
						: this.state.isInvalidated
							? !0
							: !H1(this.state.dataUpdatedAt, t)
			}
			onFocus() {
				var r
				const t = this.observers.find((n) => n.shouldFetchOnWindowFocus())
				;(t == null || t.refetch({ cancelRefetch: !1 }),
					(r = C(this, st)) == null || r.continue())
			}
			onOnline() {
				var r
				const t = this.observers.find((n) => n.shouldFetchOnReconnect())
				;(t == null || t.refetch({ cancelRefetch: !1 }),
					(r = C(this, st)) == null || r.continue())
			}
			addObserver(t) {
				this.observers.includes(t) ||
					(this.observers.push(t),
					this.clearGcTimeout(),
					C(this, Wt).notify({
						type: 'observerAdded',
						query: this,
						observer: t
					}))
			}
			removeObserver(t) {
				this.observers.includes(t) &&
					((this.observers = this.observers.filter((r) => r !== t)),
					this.observers.length ||
						(C(this, st) &&
							(C(this, ci) || J(this, Ft, Y1).call(this)
								? C(this, st).cancel({ revert: !0 })
								: C(this, st).cancelRetry()),
						this.scheduleGc()),
					C(this, Wt).notify({
						type: 'observerRemoved',
						query: this,
						observer: t
					}))
			}
			getObserversCount() {
				return this.observers.length
			}
			invalidate() {
				this.state.isInvalidated ||
					J(this, Ft, Lr).call(this, { type: 'invalidate' })
			}
			async fetch(t, r) {
				var l, f, c, d, h, g, p, m, v, _, w
				if (
					this.state.fetchStatus !== 'idle' &&
					((l = C(this, st)) == null ? void 0 : l.status()) !== 'rejected'
				) {
					if (this.state.data !== void 0 && r != null && r.cancelRefetch)
						this.cancel({ silent: !0 })
					else if (C(this, st))
						return (C(this, st).continueRetry(), C(this, st).promise)
				}
				if ((t && this.setOptions(t), !this.options.queryFn)) {
					const x = this.observers.find((E) => E.options.queryFn)
					x && this.setOptions(x.options)
				}
				const n = new AbortController(),
					i = (x) => {
						Object.defineProperty(x, 'signal', {
							enumerable: !0,
							get: () => (G(this, ci, !0), n.signal)
						})
					},
					a = () => {
						const x = W1(this.options, r),
							R = (() => {
								const S = {
									client: C(this, li),
									queryKey: this.queryKey,
									meta: this.meta
								}
								return (i(S), S)
							})()
						return (
							G(this, ci, !1),
							this.options.persister ? this.options.persister(x, R, this) : x(R)
						)
					},
					o = (() => {
						const x = {
							fetchOptions: r,
							options: this.options,
							queryKey: this.queryKey,
							client: C(this, li),
							state: this.state,
							fetchFn: a
						}
						return (i(x), x)
					})(),
					u =
						C(this, Hi) === 'infinite'
							? pC(this.options.pages)
							: this.options.behavior
				;(u == null || u.onFetch(o, this),
					G(this, Gi, this.state),
					(this.state.fetchStatus === 'idle' ||
						this.state.fetchMeta !==
							((f = o.fetchOptions) == null ? void 0 : f.meta)) &&
						J(this, Ft, Lr).call(this, {
							type: 'fetch',
							meta: (c = o.fetchOptions) == null ? void 0 : c.meta
						}),
					G(
						this,
						st,
						Q1({
							initialPromise: r == null ? void 0 : r.initialPromise,
							fn: o.fetchFn,
							onCancel: (x) => {
								;(x instanceof Eh &&
									x.revert &&
									this.setState({ ...C(this, Gi), fetchStatus: 'idle' }),
									n.abort())
							},
							onFail: (x, E) => {
								J(this, Ft, Lr).call(this, {
									type: 'failed',
									failureCount: x,
									error: E
								})
							},
							onPause: () => {
								J(this, Ft, Lr).call(this, { type: 'pause' })
							},
							onContinue: () => {
								J(this, Ft, Lr).call(this, { type: 'continue' })
							},
							retry: o.options.retry,
							retryDelay: o.options.retryDelay,
							networkMode: o.options.networkMode,
							canRun: () => !0
						})
					))
				try {
					const x = await C(this, st).start()
					if (x === void 0)
						throw new Error(`${this.queryHash} data is undefined`)
					return (
						this.setData(x),
						(h = (d = C(this, Wt).config).onSuccess) == null ||
							h.call(d, x, this),
						(p = (g = C(this, Wt).config).onSettled) == null ||
							p.call(g, x, this.state.error, this),
						x
					)
				} catch (x) {
					if (x instanceof Eh) {
						if (x.silent) return C(this, st).promise
						if (x.revert) {
							if (this.state.data === void 0) throw x
							return this.state.data
						}
					}
					throw (
						J(this, Ft, Lr).call(this, { type: 'error', error: x }),
						(v = (m = C(this, Wt).config).onError) == null ||
							v.call(m, x, this),
						(w = (_ = C(this, Wt).config).onSettled) == null ||
							w.call(_, this.state.data, x, this),
						x
					)
				} finally {
					this.scheduleGc()
				}
			}
		}),
		(Hi = new WeakMap()),
		(ui = new WeakMap()),
		(Gi = new WeakMap()),
		(Wt = new WeakMap()),
		(li = new WeakMap()),
		(st = new WeakMap()),
		(rs = new WeakMap()),
		(ci = new WeakMap()),
		(Ft = new WeakSet()),
		(Y1 = function () {
			return (
				this.state.fetchStatus === 'paused' && this.state.status === 'pending'
			)
		}),
		(Lr = function (t) {
			const r = (n) => {
				switch (t.type) {
					case 'failed':
						return {
							...n,
							fetchFailureCount: t.failureCount,
							fetchFailureReason: t.error
						}
					case 'pause':
						return { ...n, fetchStatus: 'paused' }
					case 'continue':
						return { ...n, fetchStatus: 'fetching' }
					case 'fetch':
						return {
							...n,
							...J1(n.data, this.options),
							fetchMeta: t.meta ?? null
						}
					case 'success':
						const i = {
							...n,
							...om(t.data, t.dataUpdatedAt),
							dataUpdateCount: n.dataUpdateCount + 1,
							...(!t.manual && {
								fetchStatus: 'idle',
								fetchFailureCount: 0,
								fetchFailureReason: null
							})
						}
						return (G(this, Gi, t.manual ? i : void 0), i)
					case 'error':
						const a = t.error
						return {
							...n,
							error: a,
							errorUpdateCount: n.errorUpdateCount + 1,
							errorUpdatedAt: Date.now(),
							fetchFailureCount: n.fetchFailureCount + 1,
							fetchFailureReason: a,
							fetchStatus: 'idle',
							status: 'error',
							isInvalidated: !0
						}
					case 'invalidate':
						return { ...n, isInvalidated: !0 }
					case 'setState':
						return { ...n, ...t.state }
				}
			}
			;((this.state = r(this.state)),
				ct.batch(() => {
					;(this.observers.forEach((n) => {
						n.onQueryUpdate()
					}),
						C(this, Wt).notify({ query: this, type: 'updated', action: t }))
				}))
		}),
		D1)
function J1(e, t) {
	return {
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchStatus: K1(t.networkMode) ? 'fetching' : 'paused',
		...(e === void 0 && { error: null, status: 'pending' })
	}
}
function om(e, t) {
	return {
		data: e,
		dataUpdatedAt: t ?? Date.now(),
		error: null,
		isInvalidated: !1,
		status: 'success'
	}
}
function um(e) {
	const t =
			typeof e.initialData == 'function' ? e.initialData() : e.initialData,
		r = t !== void 0,
		n = r
			? typeof e.initialDataUpdatedAt == 'function'
				? e.initialDataUpdatedAt()
				: e.initialDataUpdatedAt
			: 0
	return {
		data: t,
		dataUpdateCount: 0,
		dataUpdatedAt: r ? (n ?? Date.now()) : 0,
		error: null,
		errorUpdateCount: 0,
		errorUpdatedAt: 0,
		fetchFailureCount: 0,
		fetchFailureReason: null,
		fetchMeta: null,
		isInvalidated: !1,
		status: r ? 'success' : 'pending',
		fetchStatus: 'idle'
	}
}
var Rt,
	Ae,
	ns,
	_t,
	fi,
	Wi,
	Ur,
	Sn,
	is,
	Ki,
	Qi,
	di,
	hi,
	xn,
	Zi,
	$e,
	ka,
	Ah,
	Mh,
	Ph,
	Ih,
	kh,
	qh,
	$h,
	X1,
	N1,
	JB =
		((N1 = class extends da {
			constructor(t, r) {
				super()
				ie(this, $e)
				ie(this, Rt)
				ie(this, Ae)
				ie(this, ns)
				ie(this, _t)
				ie(this, fi)
				ie(this, Wi)
				ie(this, Ur)
				ie(this, Sn)
				ie(this, is)
				ie(this, Ki)
				ie(this, Qi)
				ie(this, di)
				ie(this, hi)
				ie(this, xn)
				ie(this, Zi, new Set())
				;((this.options = r),
					G(this, Rt, t),
					G(this, Sn, null),
					G(this, Ur, Th()),
					this.bindMethods(),
					this.setOptions(r))
			}
			bindMethods() {
				this.refetch = this.refetch.bind(this)
			}
			onSubscribe() {
				this.listeners.size === 1 &&
					(C(this, Ae).addObserver(this),
					lm(C(this, Ae), this.options)
						? J(this, $e, ka).call(this)
						: this.updateResult(),
					J(this, $e, Ih).call(this))
			}
			onUnsubscribe() {
				this.hasListeners() || this.destroy()
			}
			shouldFetchOnReconnect() {
				return Fh(C(this, Ae), this.options, this.options.refetchOnReconnect)
			}
			shouldFetchOnWindowFocus() {
				return Fh(C(this, Ae), this.options, this.options.refetchOnWindowFocus)
			}
			destroy() {
				;((this.listeners = new Set()),
					J(this, $e, kh).call(this),
					J(this, $e, qh).call(this),
					C(this, Ae).removeObserver(this))
			}
			setOptions(t) {
				const r = this.options,
					n = C(this, Ae)
				if (
					((this.options = C(this, Rt).defaultQueryOptions(t)),
					this.options.enabled !== void 0 &&
						typeof this.options.enabled != 'boolean' &&
						typeof this.options.enabled != 'function' &&
						typeof Dt(this.options.enabled, C(this, Ae)) != 'boolean')
				)
					throw new Error(
						'Expected enabled to be a boolean or a callback that returns a boolean'
					)
				;(J(this, $e, $h).call(this),
					C(this, Ae).setOptions(this.options),
					r._defaulted &&
						!Zs(this.options, r) &&
						C(this, Rt)
							.getQueryCache()
							.notify({
								type: 'observerOptionsUpdated',
								query: C(this, Ae),
								observer: this
							}))
				const i = this.hasListeners()
				;(i &&
					cm(C(this, Ae), n, this.options, r) &&
					J(this, $e, ka).call(this),
					this.updateResult(),
					i &&
						(C(this, Ae) !== n ||
							Dt(this.options.enabled, C(this, Ae)) !==
								Dt(r.enabled, C(this, Ae)) ||
							Mn(this.options.staleTime, C(this, Ae)) !==
								Mn(r.staleTime, C(this, Ae))) &&
						J(this, $e, Ah).call(this))
				const a = J(this, $e, Mh).call(this)
				i &&
					(C(this, Ae) !== n ||
						Dt(this.options.enabled, C(this, Ae)) !==
							Dt(r.enabled, C(this, Ae)) ||
						a !== C(this, xn)) &&
					J(this, $e, Ph).call(this, a)
			}
			getOptimisticResult(t) {
				const r = C(this, Rt).getQueryCache().build(C(this, Rt), t),
					n = this.createResult(r, t)
				return (
					yC(this, n) &&
						(G(this, _t, n),
						G(this, Wi, this.options),
						G(this, fi, C(this, Ae).state)),
					n
				)
			}
			getCurrentResult() {
				return C(this, _t)
			}
			trackResult(t, r) {
				return new Proxy(t, {
					get: (n, i) => (
						this.trackProp(i),
						r == null || r(i),
						i === 'promise' &&
							(this.trackProp('data'),
							!this.options.experimental_prefetchInRender &&
								C(this, Ur).status === 'pending' &&
								C(this, Ur).reject(
									new Error(
										'experimental_prefetchInRender feature flag is not enabled'
									)
								)),
						Reflect.get(n, i)
					)
				})
			}
			trackProp(t) {
				C(this, Zi).add(t)
			}
			getCurrentQuery() {
				return C(this, Ae)
			}
			refetch({ ...t } = {}) {
				return this.fetch({ ...t })
			}
			fetchOptimistic(t) {
				const r = C(this, Rt).defaultQueryOptions(t),
					n = C(this, Rt).getQueryCache().build(C(this, Rt), r)
				return n.fetch().then(() => this.createResult(n, r))
			}
			fetch(t) {
				return J(this, $e, ka)
					.call(this, { ...t, cancelRefetch: t.cancelRefetch ?? !0 })
					.then(() => (this.updateResult(), C(this, _t)))
			}
			createResult(t, r) {
				var b
				const n = C(this, Ae),
					i = this.options,
					a = C(this, _t),
					s = C(this, fi),
					o = C(this, Wi),
					l = t !== n ? t.state : C(this, ns),
					{ state: f } = t
				let c = { ...f },
					d = !1,
					h
				if (r._optimisticResults) {
					const O = this.hasListeners(),
						A = !O && lm(t, r),
						T = O && cm(t, n, r, i)
					;((A || T) && (c = { ...c, ...J1(f.data, t.options) }),
						r._optimisticResults === 'isRestoring' && (c.fetchStatus = 'idle'))
				}
				let { error: g, errorUpdatedAt: p, status: m } = c
				h = c.data
				let v = !1
				if (r.placeholderData !== void 0 && h === void 0 && m === 'pending') {
					let O
					;(a != null &&
					a.isPlaceholderData &&
					r.placeholderData === (o == null ? void 0 : o.placeholderData)
						? ((O = a.data), (v = !0))
						: (O =
								typeof r.placeholderData == 'function'
									? r.placeholderData(
											(b = C(this, Qi)) == null ? void 0 : b.state.data,
											C(this, Qi)
										)
									: r.placeholderData),
						O !== void 0 &&
							((m = 'success'),
							(h = Ch(a == null ? void 0 : a.data, O, r)),
							(d = !0)))
				}
				if (r.select && h !== void 0 && !v)
					if (
						a &&
						h === (s == null ? void 0 : s.data) &&
						r.select === C(this, is)
					)
						h = C(this, Ki)
					else
						try {
							;(G(this, is, r.select),
								(h = r.select(h)),
								(h = Ch(a == null ? void 0 : a.data, h, r)),
								G(this, Ki, h),
								G(this, Sn, null))
						} catch (O) {
							G(this, Sn, O)
						}
				C(this, Sn) &&
					((g = C(this, Sn)),
					(h = C(this, Ki)),
					(p = Date.now()),
					(m = 'error'))
				const _ = c.fetchStatus === 'fetching',
					w = m === 'pending',
					x = m === 'error',
					E = w && _,
					R = h !== void 0,
					y = {
						status: m,
						fetchStatus: c.fetchStatus,
						isPending: w,
						isSuccess: m === 'success',
						isError: x,
						isInitialLoading: E,
						isLoading: E,
						data: h,
						dataUpdatedAt: c.dataUpdatedAt,
						error: g,
						errorUpdatedAt: p,
						failureCount: c.fetchFailureCount,
						failureReason: c.fetchFailureReason,
						errorUpdateCount: c.errorUpdateCount,
						isFetched: t.isFetched(),
						isFetchedAfterMount:
							c.dataUpdateCount > l.dataUpdateCount ||
							c.errorUpdateCount > l.errorUpdateCount,
						isFetching: _,
						isRefetching: _ && !w,
						isLoadingError: x && !R,
						isPaused: c.fetchStatus === 'paused',
						isPlaceholderData: d,
						isRefetchError: x && R,
						isStale: Ap(t, r),
						refetch: this.refetch,
						promise: C(this, Ur),
						isEnabled: Dt(r.enabled, t) !== !1
					}
				if (this.options.experimental_prefetchInRender) {
					const O = y.data !== void 0,
						A = y.status === 'error' && !O,
						T = (j) => {
							A ? j.reject(y.error) : O && j.resolve(y.data)
						},
						P = () => {
							const j = G(this, Ur, (y.promise = Th()))
							T(j)
						},
						k = C(this, Ur)
					switch (k.status) {
						case 'pending':
							t.queryHash === n.queryHash && T(k)
							break
						case 'fulfilled':
							;(A || y.data !== k.value) && P()
							break
						case 'rejected':
							;(!A || y.error !== k.reason) && P()
							break
					}
				}
				return y
			}
			updateResult() {
				const t = C(this, _t),
					r = this.createResult(C(this, Ae), this.options)
				if (
					(G(this, fi, C(this, Ae).state),
					G(this, Wi, this.options),
					C(this, fi).data !== void 0 && G(this, Qi, C(this, Ae)),
					Zs(r, t))
				)
					return
				G(this, _t, r)
				const n = () => {
					if (!t) return !0
					const { notifyOnChangeProps: i } = this.options,
						a = typeof i == 'function' ? i() : i
					if (a === 'all' || (!a && !C(this, Zi).size)) return !0
					const s = new Set(a ?? C(this, Zi))
					return (
						this.options.throwOnError && s.add('error'),
						Object.keys(C(this, _t)).some((o) => {
							const u = o
							return C(this, _t)[u] !== t[u] && s.has(u)
						})
					)
				}
				J(this, $e, X1).call(this, { listeners: n() })
			}
			onQueryUpdate() {
				;(this.updateResult(),
					this.hasListeners() && J(this, $e, Ih).call(this))
			}
		}),
		(Rt = new WeakMap()),
		(Ae = new WeakMap()),
		(ns = new WeakMap()),
		(_t = new WeakMap()),
		(fi = new WeakMap()),
		(Wi = new WeakMap()),
		(Ur = new WeakMap()),
		(Sn = new WeakMap()),
		(is = new WeakMap()),
		(Ki = new WeakMap()),
		(Qi = new WeakMap()),
		(di = new WeakMap()),
		(hi = new WeakMap()),
		(xn = new WeakMap()),
		(Zi = new WeakMap()),
		($e = new WeakSet()),
		(ka = function (t) {
			J(this, $e, $h).call(this)
			let r = C(this, Ae).fetch(this.options, t)
			return ((t != null && t.throwOnError) || (r = r.catch(Qt)), r)
		}),
		(Ah = function () {
			J(this, $e, kh).call(this)
			const t = Mn(this.options.staleTime, C(this, Ae))
			if (Ys.isServer() || C(this, _t).isStale || !Rh(t)) return
			const n = H1(C(this, _t).dataUpdatedAt, t) + 1
			G(
				this,
				di,
				ni.setTimeout(() => {
					C(this, _t).isStale || this.updateResult()
				}, n)
			)
		}),
		(Mh = function () {
			return (
				(typeof this.options.refetchInterval == 'function'
					? this.options.refetchInterval(C(this, Ae))
					: this.options.refetchInterval) ?? !1
			)
		}),
		(Ph = function (t) {
			;(J(this, $e, qh).call(this),
				G(this, xn, t),
				!(
					Ys.isServer() ||
					Dt(this.options.enabled, C(this, Ae)) === !1 ||
					!Rh(C(this, xn)) ||
					C(this, xn) === 0
				) &&
					G(
						this,
						hi,
						ni.setInterval(
							() => {
								;(this.options.refetchIntervalInBackground || Cp.isFocused()) &&
									J(this, $e, ka).call(this)
							},
							C(this, xn)
						)
					))
		}),
		(Ih = function () {
			;(J(this, $e, Ah).call(this),
				J(this, $e, Ph).call(this, J(this, $e, Mh).call(this)))
		}),
		(kh = function () {
			C(this, di) !== void 0 &&
				(ni.clearTimeout(C(this, di)), G(this, di, void 0))
		}),
		(qh = function () {
			C(this, hi) !== void 0 &&
				(ni.clearInterval(C(this, hi)), G(this, hi, void 0))
		}),
		($h = function () {
			const t = C(this, Rt).getQueryCache().build(C(this, Rt), this.options)
			if (t === C(this, Ae)) return
			const r = C(this, Ae)
			;(G(this, Ae, t),
				G(this, ns, t.state),
				this.hasListeners() &&
					(r == null || r.removeObserver(this), t.addObserver(this)))
		}),
		(X1 = function (t) {
			ct.batch(() => {
				;(t.listeners &&
					this.listeners.forEach((r) => {
						r(C(this, _t))
					}),
					C(this, Rt)
						.getQueryCache()
						.notify({ query: C(this, Ae), type: 'observerResultsUpdated' }))
			})
		}),
		N1)
function vC(e, t) {
	return (
		Dt(t.enabled, e) !== !1 &&
		e.state.data === void 0 &&
		!(e.state.status === 'error' && Dt(t.retryOnMount, e) === !1)
	)
}
function lm(e, t) {
	return vC(e, t) || (e.state.data !== void 0 && Fh(e, t, t.refetchOnMount))
}
function Fh(e, t, r) {
	if (Dt(t.enabled, e) !== !1 && Mn(t.staleTime, e) !== 'static') {
		const n = typeof r == 'function' ? r(e) : r
		return n === 'always' || (n !== !1 && Ap(e, t))
	}
	return !1
}
function cm(e, t, r, n) {
	return (
		(e !== t || Dt(n.enabled, e) === !1) &&
		(!r.suspense || e.state.status !== 'error') &&
		Ap(e, r)
	)
}
function Ap(e, t) {
	return Dt(t.enabled, e) !== !1 && e.isStaleByTime(Mn(t.staleTime, e))
}
function yC(e, t) {
	return !Zs(e.getCurrentResult(), t)
}
var as,
	br,
	ht,
	pi,
	wr,
	dn,
	L1,
	_C =
		((L1 = class extends Z1 {
			constructor(t) {
				super()
				ie(this, wr)
				ie(this, as)
				ie(this, br)
				ie(this, ht)
				ie(this, pi)
				;(G(this, as, t.client),
					(this.mutationId = t.mutationId),
					G(this, ht, t.mutationCache),
					G(this, br, []),
					(this.state = t.state || eS()),
					this.setOptions(t.options),
					this.scheduleGc())
			}
			setOptions(t) {
				;((this.options = t), this.updateGcTime(this.options.gcTime))
			}
			get meta() {
				return this.options.meta
			}
			addObserver(t) {
				C(this, br).includes(t) ||
					(C(this, br).push(t),
					this.clearGcTimeout(),
					C(this, ht).notify({
						type: 'observerAdded',
						mutation: this,
						observer: t
					}))
			}
			removeObserver(t) {
				;(G(
					this,
					br,
					C(this, br).filter((r) => r !== t)
				),
					this.scheduleGc(),
					C(this, ht).notify({
						type: 'observerRemoved',
						mutation: this,
						observer: t
					}))
			}
			optionalRemove() {
				C(this, br).length ||
					(this.state.status === 'pending'
						? this.scheduleGc()
						: C(this, ht).remove(this))
			}
			continue() {
				var t
				return (
					((t = C(this, pi)) == null ? void 0 : t.continue()) ??
					this.execute(this.state.variables)
				)
			}
			async execute(t) {
				var s, o, u, l, f, c, d, h, g, p, m, v, _, w, x, E, R, S
				const r = () => {
						J(this, wr, dn).call(this, { type: 'continue' })
					},
					n = {
						client: C(this, as),
						meta: this.options.meta,
						mutationKey: this.options.mutationKey
					}
				G(
					this,
					pi,
					Q1({
						fn: () =>
							this.options.mutationFn
								? this.options.mutationFn(t, n)
								: Promise.reject(new Error('No mutationFn found')),
						onFail: (y, b) => {
							J(this, wr, dn).call(this, {
								type: 'failed',
								failureCount: y,
								error: b
							})
						},
						onPause: () => {
							J(this, wr, dn).call(this, { type: 'pause' })
						},
						onContinue: r,
						retry: this.options.retry ?? 0,
						retryDelay: this.options.retryDelay,
						networkMode: this.options.networkMode,
						canRun: () => C(this, ht).canRun(this)
					})
				)
				const i = this.state.status === 'pending',
					a = !C(this, pi).canStart()
				try {
					if (i) r()
					else {
						;(J(this, wr, dn).call(this, {
							type: 'pending',
							variables: t,
							isPaused: a
						}),
							C(this, ht).config.onMutate &&
								(await C(this, ht).config.onMutate(t, this, n)))
						const b = await ((o = (s = this.options).onMutate) == null
							? void 0
							: o.call(s, t, n))
						b !== this.state.context &&
							J(this, wr, dn).call(this, {
								type: 'pending',
								context: b,
								variables: t,
								isPaused: a
							})
					}
					const y = await C(this, pi).start()
					return (
						await ((l = (u = C(this, ht).config).onSuccess) == null
							? void 0
							: l.call(u, y, t, this.state.context, this, n)),
						await ((c = (f = this.options).onSuccess) == null
							? void 0
							: c.call(f, y, t, this.state.context, n)),
						await ((h = (d = C(this, ht).config).onSettled) == null
							? void 0
							: h.call(
									d,
									y,
									null,
									this.state.variables,
									this.state.context,
									this,
									n
								)),
						await ((p = (g = this.options).onSettled) == null
							? void 0
							: p.call(g, y, null, t, this.state.context, n)),
						J(this, wr, dn).call(this, { type: 'success', data: y }),
						y
					)
				} catch (y) {
					try {
						await ((v = (m = C(this, ht).config).onError) == null
							? void 0
							: v.call(m, y, t, this.state.context, this, n))
					} catch (b) {
						Promise.reject(b)
					}
					try {
						await ((w = (_ = this.options).onError) == null
							? void 0
							: w.call(_, y, t, this.state.context, n))
					} catch (b) {
						Promise.reject(b)
					}
					try {
						await ((E = (x = C(this, ht).config).onSettled) == null
							? void 0
							: E.call(
									x,
									void 0,
									y,
									this.state.variables,
									this.state.context,
									this,
									n
								))
					} catch (b) {
						Promise.reject(b)
					}
					try {
						await ((S = (R = this.options).onSettled) == null
							? void 0
							: S.call(R, void 0, y, t, this.state.context, n))
					} catch (b) {
						Promise.reject(b)
					}
					throw (J(this, wr, dn).call(this, { type: 'error', error: y }), y)
				} finally {
					C(this, ht).runNext(this)
				}
			}
		}),
		(as = new WeakMap()),
		(br = new WeakMap()),
		(ht = new WeakMap()),
		(pi = new WeakMap()),
		(wr = new WeakSet()),
		(dn = function (t) {
			const r = (n) => {
				switch (t.type) {
					case 'failed':
						return {
							...n,
							failureCount: t.failureCount,
							failureReason: t.error
						}
					case 'pause':
						return { ...n, isPaused: !0 }
					case 'continue':
						return { ...n, isPaused: !1 }
					case 'pending':
						return {
							...n,
							context: t.context,
							data: void 0,
							failureCount: 0,
							failureReason: null,
							error: null,
							isPaused: t.isPaused,
							status: 'pending',
							variables: t.variables,
							submittedAt: Date.now()
						}
					case 'success':
						return {
							...n,
							data: t.data,
							failureCount: 0,
							failureReason: null,
							error: null,
							status: 'success',
							isPaused: !1
						}
					case 'error':
						return {
							...n,
							data: void 0,
							error: t.error,
							failureCount: n.failureCount + 1,
							failureReason: t.error,
							isPaused: !1,
							status: 'error'
						}
				}
			}
			;((this.state = r(this.state)),
				ct.batch(() => {
					;(C(this, br).forEach((n) => {
						n.onMutationUpdate(t)
					}),
						C(this, ht).notify({ mutation: this, type: 'updated', action: t }))
				}))
		}),
		L1)
function eS() {
	return {
		context: void 0,
		data: void 0,
		error: null,
		failureCount: 0,
		failureReason: null,
		isPaused: !1,
		status: 'idle',
		variables: void 0,
		submittedAt: 0
	}
}
var Br,
	sr,
	ss,
	j1,
	bC =
		((j1 = class extends da {
			constructor(t = {}) {
				super()
				ie(this, Br)
				ie(this, sr)
				ie(this, ss)
				;((this.config = t),
					G(this, Br, new Set()),
					G(this, sr, new Map()),
					G(this, ss, 0))
			}
			build(t, r, n) {
				const i = new _C({
					client: t,
					mutationCache: this,
					mutationId: ++xa(this, ss)._,
					options: t.defaultMutationOptions(r),
					state: n
				})
				return (this.add(i), i)
			}
			add(t) {
				C(this, Br).add(t)
				const r = vs(t)
				if (typeof r == 'string') {
					const n = C(this, sr).get(r)
					n ? n.push(t) : C(this, sr).set(r, [t])
				}
				this.notify({ type: 'added', mutation: t })
			}
			remove(t) {
				if (C(this, Br).delete(t)) {
					const r = vs(t)
					if (typeof r == 'string') {
						const n = C(this, sr).get(r)
						if (n)
							if (n.length > 1) {
								const i = n.indexOf(t)
								i !== -1 && n.splice(i, 1)
							} else n[0] === t && C(this, sr).delete(r)
					}
				}
				this.notify({ type: 'removed', mutation: t })
			}
			canRun(t) {
				const r = vs(t)
				if (typeof r == 'string') {
					const n = C(this, sr).get(r),
						i = n == null ? void 0 : n.find((a) => a.state.status === 'pending')
					return !i || i === t
				} else return !0
			}
			runNext(t) {
				var n
				const r = vs(t)
				if (typeof r == 'string') {
					const i =
						(n = C(this, sr).get(r)) == null
							? void 0
							: n.find((a) => a !== t && a.state.isPaused)
					return (i == null ? void 0 : i.continue()) ?? Promise.resolve()
				} else return Promise.resolve()
			}
			clear() {
				ct.batch(() => {
					;(C(this, Br).forEach((t) => {
						this.notify({ type: 'removed', mutation: t })
					}),
						C(this, Br).clear(),
						C(this, sr).clear())
				})
			}
			getAll() {
				return Array.from(C(this, Br))
			}
			find(t) {
				const r = { exact: !0, ...t }
				return this.getAll().find((n) => nm(r, n))
			}
			findAll(t = {}) {
				return this.getAll().filter((r) => nm(t, r))
			}
			notify(t) {
				ct.batch(() => {
					this.listeners.forEach((r) => {
						r(t)
					})
				})
			}
			resumePausedMutations() {
				const t = this.getAll().filter((r) => r.state.isPaused)
				return ct.batch(() => Promise.all(t.map((r) => r.continue().catch(Qt))))
			}
		}),
		(Br = new WeakMap()),
		(sr = new WeakMap()),
		(ss = new WeakMap()),
		j1)
function vs(e) {
	var t
	return (t = e.options.scope) == null ? void 0 : t.id
}
var Vr,
	Rn,
	Ot,
	zr,
	Qr,
	Ls,
	Dh,
	U1,
	XB =
		((U1 = class extends da {
			constructor(t, r) {
				super()
				ie(this, Qr)
				ie(this, Vr)
				ie(this, Rn)
				ie(this, Ot)
				ie(this, zr)
				;(G(this, Vr, t),
					this.setOptions(r),
					this.bindMethods(),
					J(this, Qr, Ls).call(this))
			}
			bindMethods() {
				;((this.mutate = this.mutate.bind(this)),
					(this.reset = this.reset.bind(this)))
			}
			setOptions(t) {
				var n
				const r = this.options
				;((this.options = C(this, Vr).defaultMutationOptions(t)),
					Zs(this.options, r) ||
						C(this, Vr)
							.getMutationCache()
							.notify({
								type: 'observerOptionsUpdated',
								mutation: C(this, Ot),
								observer: this
							}),
					r != null &&
					r.mutationKey &&
					this.options.mutationKey &&
					yi(r.mutationKey) !== yi(this.options.mutationKey)
						? this.reset()
						: ((n = C(this, Ot)) == null ? void 0 : n.state.status) ===
								'pending' && C(this, Ot).setOptions(this.options))
			}
			onUnsubscribe() {
				var t
				this.hasListeners() ||
					(t = C(this, Ot)) == null ||
					t.removeObserver(this)
			}
			onMutationUpdate(t) {
				;(J(this, Qr, Ls).call(this), J(this, Qr, Dh).call(this, t))
			}
			getCurrentResult() {
				return C(this, Rn)
			}
			reset() {
				var t
				;((t = C(this, Ot)) == null || t.removeObserver(this),
					G(this, Ot, void 0),
					J(this, Qr, Ls).call(this),
					J(this, Qr, Dh).call(this))
			}
			mutate(t, r) {
				var n
				return (
					G(this, zr, r),
					(n = C(this, Ot)) == null || n.removeObserver(this),
					G(
						this,
						Ot,
						C(this, Vr).getMutationCache().build(C(this, Vr), this.options)
					),
					C(this, Ot).addObserver(this),
					C(this, Ot).execute(t)
				)
			}
		}),
		(Vr = new WeakMap()),
		(Rn = new WeakMap()),
		(Ot = new WeakMap()),
		(zr = new WeakMap()),
		(Qr = new WeakSet()),
		(Ls = function () {
			var r
			const t = ((r = C(this, Ot)) == null ? void 0 : r.state) ?? eS()
			G(this, Rn, {
				...t,
				isPending: t.status === 'pending',
				isSuccess: t.status === 'success',
				isError: t.status === 'error',
				isIdle: t.status === 'idle',
				mutate: this.mutate,
				reset: this.reset
			})
		}),
		(Dh = function (t) {
			ct.batch(() => {
				var r, n, i, a, s, o, u, l
				if (C(this, zr) && this.hasListeners()) {
					const f = C(this, Rn).variables,
						c = C(this, Rn).context,
						d = {
							client: C(this, Vr),
							meta: this.options.meta,
							mutationKey: this.options.mutationKey
						}
					if ((t == null ? void 0 : t.type) === 'success') {
						try {
							;(n = (r = C(this, zr)).onSuccess) == null ||
								n.call(r, t.data, f, c, d)
						} catch (h) {
							Promise.reject(h)
						}
						try {
							;(a = (i = C(this, zr)).onSettled) == null ||
								a.call(i, t.data, null, f, c, d)
						} catch (h) {
							Promise.reject(h)
						}
					} else if ((t == null ? void 0 : t.type) === 'error') {
						try {
							;(o = (s = C(this, zr)).onError) == null ||
								o.call(s, t.error, f, c, d)
						} catch (h) {
							Promise.reject(h)
						}
						try {
							;(l = (u = C(this, zr)).onSettled) == null ||
								l.call(u, void 0, t.error, f, c, d)
						} catch (h) {
							Promise.reject(h)
						}
					}
				}
				this.listeners.forEach((f) => {
					f(C(this, Rn))
				})
			})
		}),
		U1),
	Sr,
	B1,
	wC =
		((B1 = class extends da {
			constructor(t = {}) {
				super()
				ie(this, Sr)
				;((this.config = t), G(this, Sr, new Map()))
			}
			build(t, r, n) {
				const i = r.queryKey,
					a = r.queryHash ?? Tp(i, r)
				let s = this.get(a)
				return (
					s ||
						((s = new mC({
							client: t,
							queryKey: i,
							queryHash: a,
							options: t.defaultQueryOptions(r),
							state: n,
							defaultOptions: t.getQueryDefaults(i)
						})),
						this.add(s)),
					s
				)
			}
			add(t) {
				C(this, Sr).has(t.queryHash) ||
					(C(this, Sr).set(t.queryHash, t),
					this.notify({ type: 'added', query: t }))
			}
			remove(t) {
				const r = C(this, Sr).get(t.queryHash)
				r &&
					(t.destroy(),
					r === t && C(this, Sr).delete(t.queryHash),
					this.notify({ type: 'removed', query: t }))
			}
			clear() {
				ct.batch(() => {
					this.getAll().forEach((t) => {
						this.remove(t)
					})
				})
			}
			get(t) {
				return C(this, Sr).get(t)
			}
			getAll() {
				return [...C(this, Sr).values()]
			}
			find(t) {
				const r = { exact: !0, ...t }
				return this.getAll().find((n) => rm(r, n))
			}
			findAll(t = {}) {
				const r = this.getAll()
				return Object.keys(t).length > 0 ? r.filter((n) => rm(t, n)) : r
			}
			notify(t) {
				ct.batch(() => {
					this.listeners.forEach((r) => {
						r(t)
					})
				})
			}
			onFocus() {
				ct.batch(() => {
					this.getAll().forEach((t) => {
						t.onFocus()
					})
				})
			}
			onOnline() {
				ct.batch(() => {
					this.getAll().forEach((t) => {
						t.onOnline()
					})
				})
			}
		}),
		(Sr = new WeakMap()),
		B1),
	Ge,
	On,
	Cn,
	Yi,
	Ji,
	Tn,
	Xi,
	ea,
	V1,
	eV =
		((V1 = class {
			constructor(e = {}) {
				ie(this, Ge)
				ie(this, On)
				ie(this, Cn)
				ie(this, Yi)
				ie(this, Ji)
				ie(this, Tn)
				ie(this, Xi)
				ie(this, ea)
				;(G(this, Ge, e.queryCache || new wC()),
					G(this, On, e.mutationCache || new bC()),
					G(this, Cn, e.defaultOptions || {}),
					G(this, Yi, new Map()),
					G(this, Ji, new Map()),
					G(this, Tn, 0))
			}
			mount() {
				;(xa(this, Tn)._++,
					C(this, Tn) === 1 &&
						(G(
							this,
							Xi,
							Cp.subscribe(async (e) => {
								e && (await this.resumePausedMutations(), C(this, Ge).onFocus())
							})
						),
						G(
							this,
							ea,
							Js.subscribe(async (e) => {
								e &&
									(await this.resumePausedMutations(), C(this, Ge).onOnline())
							})
						)))
			}
			unmount() {
				var e, t
				;(xa(this, Tn)._--,
					C(this, Tn) === 0 &&
						((e = C(this, Xi)) == null || e.call(this),
						G(this, Xi, void 0),
						(t = C(this, ea)) == null || t.call(this),
						G(this, ea, void 0)))
			}
			isFetching(e) {
				return C(this, Ge).findAll({ ...e, fetchStatus: 'fetching' }).length
			}
			isMutating(e) {
				return C(this, On).findAll({ ...e, status: 'pending' }).length
			}
			getQueryData(e) {
				var r
				const t = this.defaultQueryOptions({ queryKey: e })
				return (r = C(this, Ge).get(t.queryHash)) == null
					? void 0
					: r.state.data
			}
			ensureQueryData(e) {
				const t = this.defaultQueryOptions(e),
					r = C(this, Ge).build(this, t),
					n = r.state.data
				return n === void 0
					? this.fetchQuery(e)
					: (e.revalidateIfStale &&
							r.isStaleByTime(Mn(t.staleTime, r)) &&
							this.prefetchQuery(t),
						Promise.resolve(n))
			}
			getQueriesData(e) {
				return C(this, Ge)
					.findAll(e)
					.map(({ queryKey: t, state: r }) => {
						const n = r.data
						return [t, n]
					})
			}
			setQueryData(e, t, r) {
				const n = this.defaultQueryOptions({ queryKey: e }),
					i = C(this, Ge).get(n.queryHash),
					a = i == null ? void 0 : i.state.data,
					s = iC(t, a)
				if (s !== void 0)
					return C(this, Ge)
						.build(this, n)
						.setData(s, { ...r, manual: !0 })
			}
			setQueriesData(e, t, r) {
				return ct.batch(() =>
					C(this, Ge)
						.findAll(e)
						.map(({ queryKey: n }) => [n, this.setQueryData(n, t, r)])
				)
			}
			getQueryState(e) {
				var r
				const t = this.defaultQueryOptions({ queryKey: e })
				return (r = C(this, Ge).get(t.queryHash)) == null ? void 0 : r.state
			}
			removeQueries(e) {
				const t = C(this, Ge)
				ct.batch(() => {
					t.findAll(e).forEach((r) => {
						t.remove(r)
					})
				})
			}
			resetQueries(e, t) {
				const r = C(this, Ge)
				return ct.batch(
					() => (
						r.findAll(e).forEach((n) => {
							n.reset()
						}),
						this.refetchQueries({ type: 'active', ...e }, t)
					)
				)
			}
			cancelQueries(e, t = {}) {
				const r = { revert: !0, ...t },
					n = ct.batch(() =>
						C(this, Ge)
							.findAll(e)
							.map((i) => i.cancel(r))
					)
				return Promise.all(n).then(Qt).catch(Qt)
			}
			invalidateQueries(e, t = {}) {
				return ct.batch(
					() => (
						C(this, Ge)
							.findAll(e)
							.forEach((r) => {
								r.invalidate()
							}),
						(e == null ? void 0 : e.refetchType) === 'none'
							? Promise.resolve()
							: this.refetchQueries(
									{
										...e,
										type:
											(e == null ? void 0 : e.refetchType) ??
											(e == null ? void 0 : e.type) ??
											'active'
									},
									t
								)
					)
				)
			}
			refetchQueries(e, t = {}) {
				const r = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
					n = ct.batch(() =>
						C(this, Ge)
							.findAll(e)
							.filter((i) => !i.isDisabled() && !i.isStatic())
							.map((i) => {
								let a = i.fetch(void 0, r)
								return (
									r.throwOnError || (a = a.catch(Qt)),
									i.state.fetchStatus === 'paused' ? Promise.resolve() : a
								)
							})
					)
				return Promise.all(n).then(Qt)
			}
			fetchQuery(e) {
				const t = this.defaultQueryOptions(e)
				t.retry === void 0 && (t.retry = !1)
				const r = C(this, Ge).build(this, t)
				return r.isStaleByTime(Mn(t.staleTime, r))
					? r.fetch(t)
					: Promise.resolve(r.state.data)
			}
			prefetchQuery(e) {
				return this.fetchQuery(e).then(Qt).catch(Qt)
			}
			fetchInfiniteQuery(e) {
				return ((e._type = 'infinite'), this.fetchQuery(e))
			}
			prefetchInfiniteQuery(e) {
				return this.fetchInfiniteQuery(e).then(Qt).catch(Qt)
			}
			ensureInfiniteQueryData(e) {
				return ((e._type = 'infinite'), this.ensureQueryData(e))
			}
			resumePausedMutations() {
				return Js.isOnline()
					? C(this, On).resumePausedMutations()
					: Promise.resolve()
			}
			getQueryCache() {
				return C(this, Ge)
			}
			getMutationCache() {
				return C(this, On)
			}
			getDefaultOptions() {
				return C(this, Cn)
			}
			setDefaultOptions(e) {
				G(this, Cn, e)
			}
			setQueryDefaults(e, t) {
				C(this, Yi).set(yi(e), { queryKey: e, defaultOptions: t })
			}
			getQueryDefaults(e) {
				const t = [...C(this, Yi).values()],
					r = {}
				return (
					t.forEach((n) => {
						Va(e, n.queryKey) && Object.assign(r, n.defaultOptions)
					}),
					r
				)
			}
			setMutationDefaults(e, t) {
				C(this, Ji).set(yi(e), { mutationKey: e, defaultOptions: t })
			}
			getMutationDefaults(e) {
				const t = [...C(this, Ji).values()],
					r = {}
				return (
					t.forEach((n) => {
						Va(e, n.mutationKey) && Object.assign(r, n.defaultOptions)
					}),
					r
				)
			}
			defaultQueryOptions(e) {
				if (e._defaulted) return e
				const t = {
					...C(this, Cn).queries,
					...this.getQueryDefaults(e.queryKey),
					...e,
					_defaulted: !0
				}
				return (
					t.queryHash || (t.queryHash = Tp(t.queryKey, t)),
					t.refetchOnReconnect === void 0 &&
						(t.refetchOnReconnect = t.networkMode !== 'always'),
					t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
					!t.networkMode && t.persister && (t.networkMode = 'offlineFirst'),
					t.queryFn === Ep && (t.enabled = !1),
					t
				)
			}
			defaultMutationOptions(e) {
				return e != null && e._defaulted
					? e
					: {
							...C(this, Cn).mutations,
							...((e == null ? void 0 : e.mutationKey) &&
								this.getMutationDefaults(e.mutationKey)),
							...e,
							_defaulted: !0
						}
			}
			clear() {
				;(C(this, Ge).clear(), C(this, On).clear())
			}
		}),
		(Ge = new WeakMap()),
		(On = new WeakMap()),
		(Cn = new WeakMap()),
		(Yi = new WeakMap()),
		(Ji = new WeakMap()),
		(Tn = new WeakMap()),
		(Xi = new WeakMap()),
		(ea = new WeakMap()),
		V1),
	tS =
		typeof global == 'object' && global && global.Object === Object && global,
	SC = typeof self == 'object' && self && self.Object === Object && self,
	Pr = tS || SC || Function('return this')(),
	Ar = Pr.Symbol,
	rS = Object.prototype,
	xC = rS.hasOwnProperty,
	RC = rS.toString,
	Ra = Ar ? Ar.toStringTag : void 0
function OC(e) {
	var t = xC.call(e, Ra),
		r = e[Ra]
	try {
		e[Ra] = void 0
		var n = !0
	} catch {}
	var i = RC.call(e)
	return (n && (t ? (e[Ra] = r) : delete e[Ra]), i)
}
var CC = Object.prototype,
	TC = CC.toString
function EC(e) {
	return TC.call(e)
}
var AC = '[object Null]',
	MC = '[object Undefined]',
	fm = Ar ? Ar.toStringTag : void 0
function ha(e) {
	return e == null
		? e === void 0
			? MC
			: AC
		: fm && fm in Object(e)
			? OC(e)
			: EC(e)
}
function za(e) {
	var t = typeof e
	return e != null && (t == 'object' || t == 'function')
}
var PC = '[object AsyncFunction]',
	IC = '[object Function]',
	kC = '[object GeneratorFunction]',
	qC = '[object Proxy]'
function nS(e) {
	if (!za(e)) return !1
	var t = ha(e)
	return t == IC || t == kC || t == PC || t == qC
}
var cu = Pr['__core-js_shared__'],
	dm = (function () {
		var e = /[^.]+$/.exec((cu && cu.keys && cu.keys.IE_PROTO) || '')
		return e ? 'Symbol(src)_1.' + e : ''
	})()
function $C(e) {
	return !!dm && dm in e
}
var FC = Function.prototype,
	DC = FC.toString
function Ci(e) {
	if (e != null) {
		try {
			return DC.call(e)
		} catch {}
		try {
			return e + ''
		} catch {}
	}
	return ''
}
var NC = /[\\^$.*+?()[\]{}|]/g,
	LC = /^\[object .+?Constructor\]$/,
	jC = Function.prototype,
	UC = Object.prototype,
	BC = jC.toString,
	VC = UC.hasOwnProperty,
	zC = RegExp(
		'^' +
			BC.call(VC)
				.replace(NC, '\\$&')
				.replace(
					/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
					'$1.*?'
				) +
			'$'
	)
function HC(e) {
	if (!za(e) || $C(e)) return !1
	var t = nS(e) ? zC : LC
	return t.test(Ci(e))
}
function GC(e, t) {
	return e == null ? void 0 : e[t]
}
function Ti(e, t) {
	var r = GC(e, t)
	return HC(r) ? r : void 0
}
var Ha = Ti(Object, 'create')
function WC() {
	;((this.__data__ = Ha ? Ha(null) : {}), (this.size = 0))
}
function KC(e) {
	var t = this.has(e) && delete this.__data__[e]
	return ((this.size -= t ? 1 : 0), t)
}
var QC = '__lodash_hash_undefined__',
	ZC = Object.prototype,
	YC = ZC.hasOwnProperty
function JC(e) {
	var t = this.__data__
	if (Ha) {
		var r = t[e]
		return r === QC ? void 0 : r
	}
	return YC.call(t, e) ? t[e] : void 0
}
var XC = Object.prototype,
	eT = XC.hasOwnProperty
function tT(e) {
	var t = this.__data__
	return Ha ? t[e] !== void 0 : eT.call(t, e)
}
var rT = '__lodash_hash_undefined__'
function nT(e, t) {
	var r = this.__data__
	return (
		(this.size += this.has(e) ? 0 : 1),
		(r[e] = Ha && t === void 0 ? rT : t),
		this
	)
}
function _i(e) {
	var t = -1,
		r = e == null ? 0 : e.length
	for (this.clear(); ++t < r; ) {
		var n = e[t]
		this.set(n[0], n[1])
	}
}
_i.prototype.clear = WC
_i.prototype.delete = KC
_i.prototype.get = JC
_i.prototype.has = tT
_i.prototype.set = nT
function iT() {
	;((this.__data__ = []), (this.size = 0))
}
function iS(e, t) {
	return e === t || (e !== e && t !== t)
}
function Mo(e, t) {
	for (var r = e.length; r--; ) if (iS(e[r][0], t)) return r
	return -1
}
var aT = Array.prototype,
	sT = aT.splice
function oT(e) {
	var t = this.__data__,
		r = Mo(t, e)
	if (r < 0) return !1
	var n = t.length - 1
	return (r == n ? t.pop() : sT.call(t, r, 1), --this.size, !0)
}
function uT(e) {
	var t = this.__data__,
		r = Mo(t, e)
	return r < 0 ? void 0 : t[r][1]
}
function lT(e) {
	return Mo(this.__data__, e) > -1
}
function cT(e, t) {
	var r = this.__data__,
		n = Mo(r, e)
	return (n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this)
}
function nn(e) {
	var t = -1,
		r = e == null ? 0 : e.length
	for (this.clear(); ++t < r; ) {
		var n = e[t]
		this.set(n[0], n[1])
	}
}
nn.prototype.clear = iT
nn.prototype.delete = oT
nn.prototype.get = uT
nn.prototype.has = lT
nn.prototype.set = cT
var Ga = Ti(Pr, 'Map')
function fT() {
	;((this.size = 0),
		(this.__data__ = {
			hash: new _i(),
			map: new (Ga || nn)(),
			string: new _i()
		}))
}
function dT(e) {
	var t = typeof e
	return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean'
		? e !== '__proto__'
		: e === null
}
function Po(e, t) {
	var r = e.__data__
	return dT(t) ? r[typeof t == 'string' ? 'string' : 'hash'] : r.map
}
function hT(e) {
	var t = Po(this, e).delete(e)
	return ((this.size -= t ? 1 : 0), t)
}
function pT(e) {
	return Po(this, e).get(e)
}
function gT(e) {
	return Po(this, e).has(e)
}
function mT(e, t) {
	var r = Po(this, e),
		n = r.size
	return (r.set(e, t), (this.size += r.size == n ? 0 : 1), this)
}
function an(e) {
	var t = -1,
		r = e == null ? 0 : e.length
	for (this.clear(); ++t < r; ) {
		var n = e[t]
		this.set(n[0], n[1])
	}
}
an.prototype.clear = fT
an.prototype.delete = hT
an.prototype.get = pT
an.prototype.has = gT
an.prototype.set = mT
var vT = '__lodash_hash_undefined__'
function yT(e) {
	return (this.__data__.set(e, vT), this)
}
function _T(e) {
	return this.__data__.has(e)
}
function ta(e) {
	var t = -1,
		r = e == null ? 0 : e.length
	for (this.__data__ = new an(); ++t < r; ) this.add(e[t])
}
ta.prototype.add = ta.prototype.push = yT
ta.prototype.has = _T
function bT(e, t, r, n) {
	for (var i = e.length, a = r + -1; ++a < i; ) if (t(e[a], a, e)) return a
	return -1
}
function wT(e) {
	return e !== e
}
function ST(e, t, r) {
	for (var n = r - 1, i = e.length; ++n < i; ) if (e[n] === t) return n
	return -1
}
function xT(e, t, r) {
	return t === t ? ST(e, t, r) : bT(e, wT, r)
}
function aS(e, t) {
	var r = e == null ? 0 : e.length
	return !!r && xT(e, t, 0) > -1
}
function sS(e, t, r) {
	for (var n = -1, i = e == null ? 0 : e.length; ++n < i; )
		if (r(t, e[n])) return !0
	return !1
}
function RT(e, t) {
	for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n; )
		i[r] = t(e[r], r, e)
	return i
}
function OT(e) {
	return function (t) {
		return e(t)
	}
}
function Mp(e, t) {
	return e.has(t)
}
var CT = 200
function TT(e, t, r, n) {
	var i = -1,
		a = aS,
		s = !0,
		o = e.length,
		u = [],
		l = t.length
	if (!o) return u
	n
		? ((a = sS), (s = !1))
		: t.length >= CT && ((a = Mp), (s = !1), (t = new ta(t)))
	e: for (; ++i < o; ) {
		var f = e[i],
			c = f
		if (((f = n || f !== 0 ? f : 0), s && c === c)) {
			for (var d = l; d--; ) if (t[d] === c) continue e
			u.push(f)
		} else a(t, c, n) || u.push(f)
	}
	return u
}
function oS(e, t) {
	for (var r = -1, n = t.length, i = e.length; ++r < n; ) e[i + r] = t[r]
	return e
}
function bi(e) {
	return e != null && typeof e == 'object'
}
var ET = '[object Arguments]'
function hm(e) {
	return bi(e) && ha(e) == ET
}
var uS = Object.prototype,
	AT = uS.hasOwnProperty,
	MT = uS.propertyIsEnumerable,
	Pp = hm(
		(function () {
			return arguments
		})()
	)
		? hm
		: function (e) {
				return bi(e) && AT.call(e, 'callee') && !MT.call(e, 'callee')
			},
	Zr = Array.isArray,
	pm = Ar ? Ar.isConcatSpreadable : void 0
function PT(e) {
	return Zr(e) || Pp(e) || !!(pm && e && e[pm])
}
function lS(e, t, r, n, i) {
	var a = -1,
		s = e.length
	for (r || (r = PT), i || (i = []); ++a < s; ) {
		var o = e[a]
		r(o) && oS(i, o)
	}
	return i
}
function cS(e) {
	return e
}
function IT(e, t, r) {
	switch (r.length) {
		case 0:
			return e.call(t)
		case 1:
			return e.call(t, r[0])
		case 2:
			return e.call(t, r[0], r[1])
		case 3:
			return e.call(t, r[0], r[1], r[2])
	}
	return e.apply(t, r)
}
var gm = Math.max
function kT(e, t, r) {
	return (
		(t = gm(t === void 0 ? e.length - 1 : t, 0)),
		function () {
			for (
				var n = arguments, i = -1, a = gm(n.length - t, 0), s = Array(a);
				++i < a;
			)
				s[i] = n[t + i]
			i = -1
			for (var o = Array(t + 1); ++i < t; ) o[i] = n[i]
			return ((o[t] = r(s)), IT(e, this, o))
		}
	)
}
function qT(e) {
	return function () {
		return e
	}
}
var mm = (function () {
		try {
			var e = Ti(Object, 'defineProperty')
			return (e({}, '', {}), e)
		} catch {}
	})(),
	$T = mm
		? function (e, t) {
				return mm(e, 'toString', {
					configurable: !0,
					enumerable: !1,
					value: qT(t),
					writable: !0
				})
			}
		: cS,
	FT = 800,
	DT = 16,
	NT = Date.now
function LT(e) {
	var t = 0,
		r = 0
	return function () {
		var n = NT(),
			i = DT - (n - r)
		if (((r = n), i > 0)) {
			if (++t >= FT) return arguments[0]
		} else t = 0
		return e.apply(void 0, arguments)
	}
}
var jT = LT($T)
function fS(e, t) {
	return jT(kT(e, t, cS), e + '')
}
var UT = 9007199254740991
function Ip(e) {
	return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= UT
}
function dS(e) {
	return e != null && Ip(e.length) && !nS(e)
}
function js(e) {
	return bi(e) && dS(e)
}
function hS(e) {
	var t = e == null ? 0 : e.length
	return t ? e[t - 1] : void 0
}
var tV = fS(function (e, t) {
		var r = hS(t)
		return (js(r) && (r = void 0), js(e) ? TT(e, lS(t, 1, js), void 0, r) : [])
	}),
	Li = Ti(Pr, 'Set')
function BT() {}
function kp(e) {
	var t = -1,
		r = Array(e.size)
	return (
		e.forEach(function (n) {
			r[++t] = n
		}),
		r
	)
}
var VT = 1 / 0,
	zT =
		Li && 1 / kp(new Li([, -0]))[1] == VT
			? function (e) {
					return new Li(e)
				}
			: BT,
	HT = 200
function GT(e, t, r) {
	var n = -1,
		i = aS,
		a = e.length,
		s = !0,
		o = [],
		u = o
	if (r) ((s = !1), (i = sS))
	else if (a >= HT) {
		var l = zT(e)
		if (l) return kp(l)
		;((s = !1), (i = Mp), (u = new ta()))
	} else u = o
	e: for (; ++n < a; ) {
		var f = e[n],
			c = f
		if (((f = r || f !== 0 ? f : 0), s && c === c)) {
			for (var d = u.length; d--; ) if (u[d] === c) continue e
			o.push(f)
		} else i(u, c, r) || (u !== o && u.push(c), o.push(f))
	}
	return o
}
var rV = fS(function (e) {
		var t = hS(e)
		return (
			(t = typeof t == 'function' ? t : void 0),
			GT(lS(e, 1, js), void 0, t)
		)
	}),
	fu,
	vm
function pa() {
	return (vm || ((vm = 1), (fu = TypeError)), fu)
}
const WT = {},
	KT = Object.freeze(
		Object.defineProperty(
			{ __proto__: null, default: WT },
			Symbol.toStringTag,
			{ value: 'Module' }
		)
	),
	QT = zO(KT)
var du, ym
function Io() {
	if (ym) return du
	ym = 1
	var e = typeof Map == 'function' && Map.prototype,
		t =
			Object.getOwnPropertyDescriptor && e
				? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
				: null,
		r = e && t && typeof t.get == 'function' ? t.get : null,
		n = e && Map.prototype.forEach,
		i = typeof Set == 'function' && Set.prototype,
		a =
			Object.getOwnPropertyDescriptor && i
				? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
				: null,
		s = i && a && typeof a.get == 'function' ? a.get : null,
		o = i && Set.prototype.forEach,
		u = typeof WeakMap == 'function' && WeakMap.prototype,
		l = u ? WeakMap.prototype.has : null,
		f = typeof WeakSet == 'function' && WeakSet.prototype,
		c = f ? WeakSet.prototype.has : null,
		d = typeof WeakRef == 'function' && WeakRef.prototype,
		h = d ? WeakRef.prototype.deref : null,
		g = Boolean.prototype.valueOf,
		p = Object.prototype.toString,
		m = Function.prototype.toString,
		v = String.prototype.match,
		_ = String.prototype.slice,
		w = String.prototype.replace,
		x = String.prototype.toUpperCase,
		E = String.prototype.toLowerCase,
		R = RegExp.prototype.test,
		S = Array.prototype.concat,
		y = Array.prototype.join,
		b = Array.prototype.slice,
		O = Math.floor,
		A = typeof BigInt == 'function' ? BigInt.prototype.valueOf : null,
		T = Object.getOwnPropertySymbols,
		P =
			typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
				? Symbol.prototype.toString
				: null,
		k = typeof Symbol == 'function' && typeof Symbol.iterator == 'object',
		j =
			typeof Symbol == 'function' &&
			Symbol.toStringTag &&
			(typeof Symbol.toStringTag === k || !0)
				? Symbol.toStringTag
				: null,
		M = Object.prototype.propertyIsEnumerable,
		q =
			(typeof Reflect == 'function'
				? Reflect.getPrototypeOf
				: Object.getPrototypeOf) ||
			([].__proto__ === Array.prototype
				? function ($) {
						return $.__proto__
					}
				: null)
	function I($, L) {
		if (
			$ === 1 / 0 ||
			$ === -1 / 0 ||
			$ !== $ ||
			($ && $ > -1e3 && $ < 1e3) ||
			R.call(/e/, L)
		)
			return L
		var Te = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g
		if (typeof $ == 'number') {
			var Ee = $ < 0 ? -O(-$) : O($)
			if (Ee !== $) {
				var Fe = String(Ee),
					_e = _.call(L, Fe.length + 1)
				return (
					w.call(Fe, Te, '$&_') +
					'.' +
					w.call(w.call(_e, /([0-9]{3})/g, '$&_'), /_$/, '')
				)
			}
		}
		return w.call(L, Te, '$&_')
	}
	var D = QT,
		N = D.custom,
		W = Q(N) ? N : null,
		oe = { __proto__: null, double: '"', single: "'" },
		B = { __proto__: null, double: /(["\\])/g, single: /(['\\])/g }
	du = function $(L, Te, Ee, Fe) {
		var _e = Te || {}
		if (be(_e, 'quoteStyle') && !be(oe, _e.quoteStyle))
			throw new TypeError('option "quoteStyle" must be "single" or "double"')
		if (
			be(_e, 'maxStringLength') &&
			(typeof _e.maxStringLength == 'number'
				? _e.maxStringLength < 0 && _e.maxStringLength !== 1 / 0
				: _e.maxStringLength !== null)
		)
			throw new TypeError(
				'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
			)
		var tr = be(_e, 'customInspect') ? _e.customInspect : !0
		if (typeof tr != 'boolean' && tr !== 'symbol')
			throw new TypeError(
				'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
			)
		if (
			be(_e, 'indent') &&
			_e.indent !== null &&
			_e.indent !== '	' &&
			!(parseInt(_e.indent, 10) === _e.indent && _e.indent > 0)
		)
			throw new TypeError(
				'option "indent" must be "\\t", an integer > 0, or `null`'
			)
		if (be(_e, 'numericSeparator') && typeof _e.numericSeparator != 'boolean')
			throw new TypeError(
				'option "numericSeparator", if provided, must be `true` or `false`'
			)
		var mr = _e.numericSeparator
		if (typeof L > 'u') return 'undefined'
		if (L === null) return 'null'
		if (typeof L == 'boolean') return L ? 'true' : 'false'
		if (typeof L == 'string') return tt(L, _e)
		if (typeof L == 'number') {
			if (L === 0) return 1 / 0 / L > 0 ? '0' : '-0'
			var pe = String(L)
			return mr ? I(L, pe) : pe
		}
		if (typeof L == 'bigint') {
			var De = String(L) + 'n'
			return mr ? I(L, De) : De
		}
		var Ke = typeof _e.depth > 'u' ? 5 : _e.depth
		if (
			(typeof Ee > 'u' && (Ee = 0), Ee >= Ke && Ke > 0 && typeof L == 'object')
		)
			return Ce(L) ? '[Array]' : '[Object]'
		var Qe = $r(_e, Ee)
		if (typeof Fe > 'u') Fe = []
		else if (Xe(Fe, L) >= 0) return '[Circular]'
		function ft(qi, ms, UO) {
			if ((ms && ((Fe = b.call(Fe)), Fe.push(ms)), UO)) {
				var Zg = { depth: _e.depth }
				return (
					be(_e, 'quoteStyle') && (Zg.quoteStyle = _e.quoteStyle),
					$(qi, Zg, Ee + 1, Fe)
				)
			}
			return $(qi, _e, Ee + 1, Fe)
		}
		if (typeof L == 'function' && !U(L)) {
			var Ze = we(L),
				gt = zn(L, ft)
			return (
				'[Function' +
				(Ze ? ': ' + Ze : ' (anonymous)') +
				']' +
				(gt.length > 0 ? ' { ' + y.call(gt, ', ') + ' }' : '')
			)
		}
		if (Q(L)) {
			var Hn = k ? w.call(String(L), /^(Symbol\(.*\))_[^)]*$/, '$1') : P.call(L)
			return typeof L == 'object' && !k ? At(Hn) : Hn
		}
		if (Be(L)) {
			for (
				var lt = '<' + E.call(String(L.nodeName)),
					mt = L.attributes || [],
					Gn = 0;
				Gn < mt.length;
				Gn++
			)
				lt += ' ' + mt[Gn].name + '=' + re(Z(mt[Gn].value), 'double', _e)
			return (
				(lt += '>'),
				L.childNodes && L.childNodes.length && (lt += '...'),
				(lt += '</' + E.call(String(L.nodeName)) + '>'),
				lt
			)
		}
		if (Ce(L)) {
			if (L.length === 0) return '[]'
			var rr = zn(L, ft)
			return Qe && !rt(rr)
				? '[' + cn(rr, Qe) + ']'
				: '[ ' + y.call(rr, ', ') + ' ]'
		}
		if (z(L)) {
			var gs = zn(L, ft)
			return !('cause' in Error.prototype) &&
				'cause' in L &&
				!M.call(L, 'cause')
				? '{ [' +
						String(L) +
						'] ' +
						y.call(S.call('[cause]: ' + ft(L.cause), gs), ', ') +
						' }'
				: gs.length === 0
					? '[' + String(L) + ']'
					: '{ [' + String(L) + '] ' + y.call(gs, ', ') + ' }'
		}
		if (typeof L == 'object' && tr) {
			if (W && typeof L[W] == 'function' && D) return D(L, { depth: Ke - Ee })
			if (tr !== 'symbol' && typeof L.inspect == 'function') return L.inspect()
		}
		if (We(L)) {
			var Gg = []
			return (
				n &&
					n.call(L, function (qi, ms) {
						Gg.push(ft(ms, L, !0) + ' => ' + ft(qi, L))
					}),
				zt('Map', r.call(L), Gg, Qe)
			)
		}
		if (Ue(L)) {
			var Wg = []
			return (
				o &&
					o.call(L, function (qi) {
						Wg.push(ft(qi, L))
					}),
				zt('Set', s.call(L), Wg, Qe)
			)
		}
		if (ke(L)) return Mt('WeakMap')
		if (St(L)) return Mt('WeakSet')
		if (et(L)) return Mt('WeakRef')
		if (F(L)) return At(ft(Number(L)))
		if (de(L)) return At(ft(A.call(L)))
		if (ce(L)) return At(g.call(L))
		if (V(L)) return At(ft(String(L)))
		if (typeof window < 'u' && L === window) return '{ [object Window] }'
		if (
			(typeof globalThis < 'u' && L === globalThis) ||
			(typeof Ni < 'u' && L === Ni)
		)
			return '{ [object globalThis] }'
		if (!Y(L) && !U(L)) {
			var nu = zn(L, ft),
				Kg = q
					? q(L) === Object.prototype
					: L instanceof Object || L.constructor === Object,
				iu = L instanceof Object ? '' : 'null prototype',
				Qg =
					!Kg && j && Object(L) === L && j in L
						? _.call(he(L), 8, -1)
						: iu
							? 'Object'
							: '',
				jO =
					Kg || typeof L.constructor != 'function'
						? ''
						: L.constructor.name
							? L.constructor.name + ' '
							: '',
				au =
					jO +
					(Qg || iu
						? '[' + y.call(S.call([], Qg || [], iu || []), ': ') + '] '
						: '')
			return nu.length === 0
				? au + '{}'
				: Qe
					? au + '{' + cn(nu, Qe) + '}'
					: au + '{ ' + y.call(nu, ', ') + ' }'
		}
		return String(L)
	}
	function re($, L, Te) {
		var Ee = Te.quoteStyle || L,
			Fe = oe[Ee]
		return Fe + $ + Fe
	}
	function Z($) {
		return w.call(String($), /"/g, '&quot;')
	}
	function le($) {
		return !j || !(typeof $ == 'object' && (j in $ || typeof $[j] < 'u'))
	}
	function Ce($) {
		return he($) === '[object Array]' && le($)
	}
	function Y($) {
		return he($) === '[object Date]' && le($)
	}
	function U($) {
		return he($) === '[object RegExp]' && le($)
	}
	function z($) {
		return he($) === '[object Error]' && le($)
	}
	function V($) {
		return he($) === '[object String]' && le($)
	}
	function F($) {
		return he($) === '[object Number]' && le($)
	}
	function ce($) {
		return he($) === '[object Boolean]' && le($)
	}
	function Q($) {
		if (k) return $ && typeof $ == 'object' && $ instanceof Symbol
		if (typeof $ == 'symbol') return !0
		if (!$ || typeof $ != 'object' || !P) return !1
		try {
			return (P.call($), !0)
		} catch {}
		return !1
	}
	function de($) {
		if (!$ || typeof $ != 'object' || !A) return !1
		try {
			return (A.call($), !0)
		} catch {}
		return !1
	}
	var ee =
		Object.prototype.hasOwnProperty ||
		function ($) {
			return $ in this
		}
	function be($, L) {
		return ee.call($, L)
	}
	function he($) {
		return p.call($)
	}
	function we($) {
		if ($.name) return $.name
		var L = v.call(m.call($), /^function\s*([\w$]+)/)
		return L ? L[1] : null
	}
	function Xe($, L) {
		if ($.indexOf) return $.indexOf(L)
		for (var Te = 0, Ee = $.length; Te < Ee; Te++) if ($[Te] === L) return Te
		return -1
	}
	function We($) {
		if (!r || !$ || typeof $ != 'object') return !1
		try {
			r.call($)
			try {
				s.call($)
			} catch {
				return !0
			}
			return $ instanceof Map
		} catch {}
		return !1
	}
	function ke($) {
		if (!l || !$ || typeof $ != 'object') return !1
		try {
			l.call($, l)
			try {
				c.call($, c)
			} catch {
				return !0
			}
			return $ instanceof WeakMap
		} catch {}
		return !1
	}
	function et($) {
		if (!h || !$ || typeof $ != 'object') return !1
		try {
			return (h.call($), !0)
		} catch {}
		return !1
	}
	function Ue($) {
		if (!s || !$ || typeof $ != 'object') return !1
		try {
			s.call($)
			try {
				r.call($)
			} catch {
				return !0
			}
			return $ instanceof Set
		} catch {}
		return !1
	}
	function St($) {
		if (!c || !$ || typeof $ != 'object') return !1
		try {
			c.call($, c)
			try {
				l.call($, l)
			} catch {
				return !0
			}
			return $ instanceof WeakSet
		} catch {}
		return !1
	}
	function Be($) {
		return !$ || typeof $ != 'object'
			? !1
			: typeof HTMLElement < 'u' && $ instanceof HTMLElement
				? !0
				: typeof $.nodeName == 'string' && typeof $.getAttribute == 'function'
	}
	function tt($, L) {
		if ($.length > L.maxStringLength) {
			var Te = $.length - L.maxStringLength,
				Ee = '... ' + Te + ' more character' + (Te > 1 ? 's' : '')
			return tt(_.call($, 0, L.maxStringLength), L) + Ee
		}
		var Fe = B[L.quoteStyle || 'single']
		Fe.lastIndex = 0
		var _e = w.call(w.call($, Fe, '\\$1'), /[\x00-\x1f]/g, xt)
		return re(_e, 'single', L)
	}
	function xt($) {
		var L = $.charCodeAt(0),
			Te = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[L]
		return Te ? '\\' + Te : '\\x' + (L < 16 ? '0' : '') + x.call(L.toString(16))
	}
	function At($) {
		return 'Object(' + $ + ')'
	}
	function Mt($) {
		return $ + ' { ? }'
	}
	function zt($, L, Te, Ee) {
		var Fe = Ee ? cn(Te, Ee) : y.call(Te, ', ')
		return $ + ' (' + L + ') {' + Fe + '}'
	}
	function rt($) {
		for (var L = 0; L < $.length; L++)
			if (
				Xe(
					$[L],
					`
`
				) >= 0
			)
				return !1
		return !0
	}
	function $r($, L) {
		var Te
		if ($.indent === '	') Te = '	'
		else if (typeof $.indent == 'number' && $.indent > 0)
			Te = y.call(Array($.indent + 1), ' ')
		else return null
		return { base: Te, prev: y.call(Array(L + 1), Te) }
	}
	function cn($, L) {
		if ($.length === 0) return ''
		var Te =
			`
` +
			L.prev +
			L.base
		return (
			Te +
			y.call($, ',' + Te) +
			`
` +
			L.prev
		)
	}
	function zn($, L) {
		var Te = Ce($),
			Ee = []
		if (Te) {
			Ee.length = $.length
			for (var Fe = 0; Fe < $.length; Fe++)
				Ee[Fe] = be($, Fe) ? L($[Fe], $) : ''
		}
		var _e = typeof T == 'function' ? T($) : [],
			tr
		if (k) {
			tr = {}
			for (var mr = 0; mr < _e.length; mr++) tr['$' + _e[mr]] = _e[mr]
		}
		for (var pe in $)
			be($, pe) &&
				((Te && String(Number(pe)) === pe && pe < $.length) ||
					(k && tr['$' + pe] instanceof Symbol) ||
					(R.call(/[^\w$]/, pe)
						? Ee.push(L(pe, $) + ': ' + L($[pe], $))
						: Ee.push(pe + ': ' + L($[pe], $))))
		if (typeof T == 'function')
			for (var De = 0; De < _e.length; De++)
				M.call($, _e[De]) && Ee.push('[' + L(_e[De]) + ']: ' + L($[_e[De]], $))
		return Ee
	}
	return du
}
var hu, _m
function ZT() {
	if (_m) return hu
	_m = 1
	var e = Io(),
		t = pa(),
		r = function (o, u, l) {
			for (var f = o, c; (c = f.next) != null; f = c)
				if (c.key === u)
					return ((f.next = c.next), l || ((c.next = o.next), (o.next = c)), c)
		},
		n = function (o, u) {
			if (o) {
				var l = r(o, u)
				return l && l.value
			}
		},
		i = function (o, u, l) {
			var f = r(o, u)
			f ? (f.value = l) : (o.next = { key: u, next: o.next, value: l })
		},
		a = function (o, u) {
			return o ? !!r(o, u) : !1
		},
		s = function (o, u) {
			if (o) return r(o, u, !0)
		}
	return (
		(hu = function () {
			var u,
				l = {
					assert: function (f) {
						if (!l.has(f)) throw new t('Side channel does not contain ' + e(f))
					},
					delete: function (f) {
						var c = s(u, f)
						return (c && u && !u.next && (u = void 0), !!c)
					},
					get: function (f) {
						return n(u, f)
					},
					has: function (f) {
						return a(u, f)
					},
					set: function (f, c) {
						;(u || (u = { next: void 0 }), i(u, f, c))
					}
				}
			return l
		}),
		hu
	)
}
var pu, bm
function pS() {
	return (bm || ((bm = 1), (pu = Object)), pu)
}
var gu, wm
function YT() {
	return (wm || ((wm = 1), (gu = Error)), gu)
}
var mu, Sm
function JT() {
	return (Sm || ((Sm = 1), (mu = EvalError)), mu)
}
var vu, xm
function XT() {
	return (xm || ((xm = 1), (vu = RangeError)), vu)
}
var yu, Rm
function eE() {
	return (Rm || ((Rm = 1), (yu = ReferenceError)), yu)
}
var _u, Om
function tE() {
	return (Om || ((Om = 1), (_u = SyntaxError)), _u)
}
var bu, Cm
function rE() {
	return (Cm || ((Cm = 1), (bu = URIError)), bu)
}
var wu, Tm
function nE() {
	return (Tm || ((Tm = 1), (wu = Math.abs)), wu)
}
var Su, Em
function iE() {
	return (Em || ((Em = 1), (Su = Math.floor)), Su)
}
var xu, Am
function aE() {
	return (Am || ((Am = 1), (xu = Math.max)), xu)
}
var Ru, Mm
function sE() {
	return (Mm || ((Mm = 1), (Ru = Math.min)), Ru)
}
var Ou, Pm
function oE() {
	return (Pm || ((Pm = 1), (Ou = Math.pow)), Ou)
}
var Cu, Im
function uE() {
	return (Im || ((Im = 1), (Cu = Math.round)), Cu)
}
var Tu, km
function lE() {
	return (
		km ||
			((km = 1),
			(Tu =
				Number.isNaN ||
				function (t) {
					return t !== t
				})),
		Tu
	)
}
var Eu, qm
function cE() {
	if (qm) return Eu
	qm = 1
	var e = lE()
	return (
		(Eu = function (r) {
			return e(r) || r === 0 ? r : r < 0 ? -1 : 1
		}),
		Eu
	)
}
var Au, $m
function fE() {
	return ($m || (($m = 1), (Au = Object.getOwnPropertyDescriptor)), Au)
}
var Mu, Fm
function gS() {
	if (Fm) return Mu
	Fm = 1
	var e = fE()
	if (e)
		try {
			e([], 'length')
		} catch {
			e = null
		}
	return ((Mu = e), Mu)
}
var Pu, Dm
function dE() {
	if (Dm) return Pu
	Dm = 1
	var e = Object.defineProperty || !1
	if (e)
		try {
			e({}, 'a', { value: 1 })
		} catch {
			e = !1
		}
	return ((Pu = e), Pu)
}
var Iu, Nm
function hE() {
	return (
		Nm ||
			((Nm = 1),
			(Iu = function () {
				if (
					typeof Symbol != 'function' ||
					typeof Object.getOwnPropertySymbols != 'function'
				)
					return !1
				if (typeof Symbol.iterator == 'symbol') return !0
				var t = {},
					r = Symbol('test'),
					n = Object(r)
				if (
					typeof r == 'string' ||
					Object.prototype.toString.call(r) !== '[object Symbol]' ||
					Object.prototype.toString.call(n) !== '[object Symbol]'
				)
					return !1
				var i = 42
				t[r] = i
				for (var a in t) return !1
				if (
					(typeof Object.keys == 'function' && Object.keys(t).length !== 0) ||
					(typeof Object.getOwnPropertyNames == 'function' &&
						Object.getOwnPropertyNames(t).length !== 0)
				)
					return !1
				var s = Object.getOwnPropertySymbols(t)
				if (
					s.length !== 1 ||
					s[0] !== r ||
					!Object.prototype.propertyIsEnumerable.call(t, r)
				)
					return !1
				if (typeof Object.getOwnPropertyDescriptor == 'function') {
					var o = Object.getOwnPropertyDescriptor(t, r)
					if (o.value !== i || o.enumerable !== !0) return !1
				}
				return !0
			})),
		Iu
	)
}
var ku, Lm
function pE() {
	if (Lm) return ku
	Lm = 1
	var e = typeof Symbol < 'u' && Symbol,
		t = hE()
	return (
		(ku = function () {
			return typeof e != 'function' ||
				typeof Symbol != 'function' ||
				typeof e('foo') != 'symbol' ||
				typeof Symbol('bar') != 'symbol'
				? !1
				: t()
		}),
		ku
	)
}
var qu, jm
function mS() {
	return (
		jm ||
			((jm = 1),
			(qu = (typeof Reflect < 'u' && Reflect.getPrototypeOf) || null)),
		qu
	)
}
var $u, Um
function vS() {
	if (Um) return $u
	Um = 1
	var e = pS()
	return (($u = e.getPrototypeOf || null), $u)
}
var Fu, Bm
function gE() {
	if (Bm) return Fu
	Bm = 1
	var e = 'Function.prototype.bind called on incompatible ',
		t = Object.prototype.toString,
		r = Math.max,
		n = '[object Function]',
		i = function (u, l) {
			for (var f = [], c = 0; c < u.length; c += 1) f[c] = u[c]
			for (var d = 0; d < l.length; d += 1) f[d + u.length] = l[d]
			return f
		},
		a = function (u, l) {
			for (var f = [], c = l, d = 0; c < u.length; c += 1, d += 1) f[d] = u[c]
			return f
		},
		s = function (o, u) {
			for (var l = '', f = 0; f < o.length; f += 1)
				((l += o[f]), f + 1 < o.length && (l += u))
			return l
		}
	return (
		(Fu = function (u) {
			var l = this
			if (typeof l != 'function' || t.apply(l) !== n) throw new TypeError(e + l)
			for (
				var f = a(arguments, 1),
					c,
					d = function () {
						if (this instanceof c) {
							var v = l.apply(this, i(f, arguments))
							return Object(v) === v ? v : this
						}
						return l.apply(u, i(f, arguments))
					},
					h = r(0, l.length - f.length),
					g = [],
					p = 0;
				p < h;
				p++
			)
				g[p] = '$' + p
			if (
				((c = Function(
					'binder',
					'return function (' +
						s(g, ',') +
						'){ return binder.apply(this,arguments); }'
				)(d)),
				l.prototype)
			) {
				var m = function () {}
				;((m.prototype = l.prototype),
					(c.prototype = new m()),
					(m.prototype = null))
			}
			return c
		}),
		Fu
	)
}
var Du, Vm
function ko() {
	if (Vm) return Du
	Vm = 1
	var e = gE()
	return ((Du = Function.prototype.bind || e), Du)
}
var Nu, zm
function qp() {
	return (zm || ((zm = 1), (Nu = Function.prototype.call)), Nu)
}
var Lu, Hm
function yS() {
	return (Hm || ((Hm = 1), (Lu = Function.prototype.apply)), Lu)
}
var ju, Gm
function mE() {
	return (
		Gm || ((Gm = 1), (ju = typeof Reflect < 'u' && Reflect && Reflect.apply)),
		ju
	)
}
var Uu, Wm
function vE() {
	if (Wm) return Uu
	Wm = 1
	var e = ko(),
		t = yS(),
		r = qp(),
		n = mE()
	return ((Uu = n || e.call(r, t)), Uu)
}
var Bu, Km
function _S() {
	if (Km) return Bu
	Km = 1
	var e = ko(),
		t = pa(),
		r = qp(),
		n = vE()
	return (
		(Bu = function (a) {
			if (a.length < 1 || typeof a[0] != 'function')
				throw new t('a function is required')
			return n(e, r, a)
		}),
		Bu
	)
}
var Vu, Qm
function yE() {
	if (Qm) return Vu
	Qm = 1
	var e = _S(),
		t = gS(),
		r
	try {
		r = [].__proto__ === Array.prototype
	} catch (s) {
		if (
			!s ||
			typeof s != 'object' ||
			!('code' in s) ||
			s.code !== 'ERR_PROTO_ACCESS'
		)
			throw s
	}
	var n = !!r && t && t(Object.prototype, '__proto__'),
		i = Object,
		a = i.getPrototypeOf
	return (
		(Vu =
			n && typeof n.get == 'function'
				? e([n.get])
				: typeof a == 'function'
					? function (o) {
							return a(o == null ? o : i(o))
						}
					: !1),
		Vu
	)
}
var zu, Zm
function _E() {
	if (Zm) return zu
	Zm = 1
	var e = mS(),
		t = vS(),
		r = yE()
	return (
		(zu = e
			? function (i) {
					return e(i)
				}
			: t
				? function (i) {
						if (!i || (typeof i != 'object' && typeof i != 'function'))
							throw new TypeError('getProto: not an object')
						return t(i)
					}
				: r
					? function (i) {
							return r(i)
						}
					: null),
		zu
	)
}
var Hu, Ym
function bE() {
	if (Ym) return Hu
	Ym = 1
	var e = Function.prototype.call,
		t = Object.prototype.hasOwnProperty,
		r = ko()
	return ((Hu = r.call(e, t)), Hu)
}
var Gu, Jm
function $p() {
	if (Jm) return Gu
	Jm = 1
	var e,
		t = pS(),
		r = YT(),
		n = JT(),
		i = XT(),
		a = eE(),
		s = tE(),
		o = pa(),
		u = rE(),
		l = nE(),
		f = iE(),
		c = aE(),
		d = sE(),
		h = oE(),
		g = uE(),
		p = cE(),
		m = Function,
		v = function (U) {
			try {
				return m('"use strict"; return (' + U + ').constructor;')()
			} catch {}
		},
		_ = gS(),
		w = dE(),
		x = function () {
			throw new o()
		},
		E = _
			? (function () {
					try {
						return (arguments.callee, x)
					} catch {
						try {
							return _(arguments, 'callee').get
						} catch {
							return x
						}
					}
				})()
			: x,
		R = pE()(),
		S = _E(),
		y = vS(),
		b = mS(),
		O = yS(),
		A = qp(),
		T = {},
		P = typeof Uint8Array > 'u' || !S ? e : S(Uint8Array),
		k = {
			__proto__: null,
			'%AggregateError%': typeof AggregateError > 'u' ? e : AggregateError,
			'%Array%': Array,
			'%ArrayBuffer%': typeof ArrayBuffer > 'u' ? e : ArrayBuffer,
			'%ArrayIteratorPrototype%': R && S ? S([][Symbol.iterator]()) : e,
			'%AsyncFromSyncIteratorPrototype%': e,
			'%AsyncFunction%': T,
			'%AsyncGenerator%': T,
			'%AsyncGeneratorFunction%': T,
			'%AsyncIteratorPrototype%': T,
			'%Atomics%': typeof Atomics > 'u' ? e : Atomics,
			'%BigInt%': typeof BigInt > 'u' ? e : BigInt,
			'%BigInt64Array%': typeof BigInt64Array > 'u' ? e : BigInt64Array,
			'%BigUint64Array%': typeof BigUint64Array > 'u' ? e : BigUint64Array,
			'%Boolean%': Boolean,
			'%DataView%': typeof DataView > 'u' ? e : DataView,
			'%Date%': Date,
			'%decodeURI%': decodeURI,
			'%decodeURIComponent%': decodeURIComponent,
			'%encodeURI%': encodeURI,
			'%encodeURIComponent%': encodeURIComponent,
			'%Error%': r,
			'%eval%': eval,
			'%EvalError%': n,
			'%Float16Array%': typeof Float16Array > 'u' ? e : Float16Array,
			'%Float32Array%': typeof Float32Array > 'u' ? e : Float32Array,
			'%Float64Array%': typeof Float64Array > 'u' ? e : Float64Array,
			'%FinalizationRegistry%':
				typeof FinalizationRegistry > 'u' ? e : FinalizationRegistry,
			'%Function%': m,
			'%GeneratorFunction%': T,
			'%Int8Array%': typeof Int8Array > 'u' ? e : Int8Array,
			'%Int16Array%': typeof Int16Array > 'u' ? e : Int16Array,
			'%Int32Array%': typeof Int32Array > 'u' ? e : Int32Array,
			'%isFinite%': isFinite,
			'%isNaN%': isNaN,
			'%IteratorPrototype%': R && S ? S(S([][Symbol.iterator]())) : e,
			'%JSON%': typeof JSON == 'object' ? JSON : e,
			'%Map%': typeof Map > 'u' ? e : Map,
			'%MapIteratorPrototype%':
				typeof Map > 'u' || !R || !S ? e : S(new Map()[Symbol.iterator]()),
			'%Math%': Math,
			'%Number%': Number,
			'%Object%': t,
			'%Object.getOwnPropertyDescriptor%': _,
			'%parseFloat%': parseFloat,
			'%parseInt%': parseInt,
			'%Promise%': typeof Promise > 'u' ? e : Promise,
			'%Proxy%': typeof Proxy > 'u' ? e : Proxy,
			'%RangeError%': i,
			'%ReferenceError%': a,
			'%Reflect%': typeof Reflect > 'u' ? e : Reflect,
			'%RegExp%': RegExp,
			'%Set%': typeof Set > 'u' ? e : Set,
			'%SetIteratorPrototype%':
				typeof Set > 'u' || !R || !S ? e : S(new Set()[Symbol.iterator]()),
			'%SharedArrayBuffer%':
				typeof SharedArrayBuffer > 'u' ? e : SharedArrayBuffer,
			'%String%': String,
			'%StringIteratorPrototype%': R && S ? S(''[Symbol.iterator]()) : e,
			'%Symbol%': R ? Symbol : e,
			'%SyntaxError%': s,
			'%ThrowTypeError%': E,
			'%TypedArray%': P,
			'%TypeError%': o,
			'%Uint8Array%': typeof Uint8Array > 'u' ? e : Uint8Array,
			'%Uint8ClampedArray%':
				typeof Uint8ClampedArray > 'u' ? e : Uint8ClampedArray,
			'%Uint16Array%': typeof Uint16Array > 'u' ? e : Uint16Array,
			'%Uint32Array%': typeof Uint32Array > 'u' ? e : Uint32Array,
			'%URIError%': u,
			'%WeakMap%': typeof WeakMap > 'u' ? e : WeakMap,
			'%WeakRef%': typeof WeakRef > 'u' ? e : WeakRef,
			'%WeakSet%': typeof WeakSet > 'u' ? e : WeakSet,
			'%Function.prototype.call%': A,
			'%Function.prototype.apply%': O,
			'%Object.defineProperty%': w,
			'%Object.getPrototypeOf%': y,
			'%Math.abs%': l,
			'%Math.floor%': f,
			'%Math.max%': c,
			'%Math.min%': d,
			'%Math.pow%': h,
			'%Math.round%': g,
			'%Math.sign%': p,
			'%Reflect.getPrototypeOf%': b
		}
	if (S)
		try {
			null.error
		} catch (U) {
			var j = S(S(U))
			k['%Error.prototype%'] = j
		}
	var M = function U(z) {
			var V
			if (z === '%AsyncFunction%') V = v('async function () {}')
			else if (z === '%GeneratorFunction%') V = v('function* () {}')
			else if (z === '%AsyncGeneratorFunction%') V = v('async function* () {}')
			else if (z === '%AsyncGenerator%') {
				var F = U('%AsyncGeneratorFunction%')
				F && (V = F.prototype)
			} else if (z === '%AsyncIteratorPrototype%') {
				var ce = U('%AsyncGenerator%')
				ce && S && (V = S(ce.prototype))
			}
			return ((k[z] = V), V)
		},
		q = {
			__proto__: null,
			'%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
			'%ArrayPrototype%': ['Array', 'prototype'],
			'%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
			'%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
			'%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
			'%ArrayProto_values%': ['Array', 'prototype', 'values'],
			'%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
			'%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
			'%AsyncGeneratorPrototype%': [
				'AsyncGeneratorFunction',
				'prototype',
				'prototype'
			],
			'%BooleanPrototype%': ['Boolean', 'prototype'],
			'%DataViewPrototype%': ['DataView', 'prototype'],
			'%DatePrototype%': ['Date', 'prototype'],
			'%ErrorPrototype%': ['Error', 'prototype'],
			'%EvalErrorPrototype%': ['EvalError', 'prototype'],
			'%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
			'%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
			'%FunctionPrototype%': ['Function', 'prototype'],
			'%Generator%': ['GeneratorFunction', 'prototype'],
			'%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
			'%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
			'%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
			'%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
			'%JSONParse%': ['JSON', 'parse'],
			'%JSONStringify%': ['JSON', 'stringify'],
			'%MapPrototype%': ['Map', 'prototype'],
			'%NumberPrototype%': ['Number', 'prototype'],
			'%ObjectPrototype%': ['Object', 'prototype'],
			'%ObjProto_toString%': ['Object', 'prototype', 'toString'],
			'%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
			'%PromisePrototype%': ['Promise', 'prototype'],
			'%PromiseProto_then%': ['Promise', 'prototype', 'then'],
			'%Promise_all%': ['Promise', 'all'],
			'%Promise_reject%': ['Promise', 'reject'],
			'%Promise_resolve%': ['Promise', 'resolve'],
			'%RangeErrorPrototype%': ['RangeError', 'prototype'],
			'%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
			'%RegExpPrototype%': ['RegExp', 'prototype'],
			'%SetPrototype%': ['Set', 'prototype'],
			'%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
			'%StringPrototype%': ['String', 'prototype'],
			'%SymbolPrototype%': ['Symbol', 'prototype'],
			'%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
			'%TypedArrayPrototype%': ['TypedArray', 'prototype'],
			'%TypeErrorPrototype%': ['TypeError', 'prototype'],
			'%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
			'%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
			'%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
			'%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
			'%URIErrorPrototype%': ['URIError', 'prototype'],
			'%WeakMapPrototype%': ['WeakMap', 'prototype'],
			'%WeakSetPrototype%': ['WeakSet', 'prototype']
		},
		I = ko(),
		D = bE(),
		N = I.call(A, Array.prototype.concat),
		W = I.call(O, Array.prototype.splice),
		oe = I.call(A, String.prototype.replace),
		B = I.call(A, String.prototype.slice),
		re = I.call(A, RegExp.prototype.exec),
		Z =
			/[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
		le = /\\(\\)?/g,
		Ce = function (z) {
			var V = B(z, 0, 1),
				F = B(z, -1)
			if (V === '%' && F !== '%')
				throw new s('invalid intrinsic syntax, expected closing `%`')
			if (F === '%' && V !== '%')
				throw new s('invalid intrinsic syntax, expected opening `%`')
			var ce = []
			return (
				oe(z, Z, function (Q, de, ee, be) {
					ce[ce.length] = ee ? oe(be, le, '$1') : de || Q
				}),
				ce
			)
		},
		Y = function (z, V) {
			var F = z,
				ce
			if ((D(q, F) && ((ce = q[F]), (F = '%' + ce[0] + '%')), D(k, F))) {
				var Q = k[F]
				if ((Q === T && (Q = M(F)), typeof Q > 'u' && !V))
					throw new o(
						'intrinsic ' +
							z +
							' exists, but is not available. Please file an issue!'
					)
				return { alias: ce, name: F, value: Q }
			}
			throw new s('intrinsic ' + z + ' does not exist!')
		}
	return (
		(Gu = function (z, V) {
			if (typeof z != 'string' || z.length === 0)
				throw new o('intrinsic name must be a non-empty string')
			if (arguments.length > 1 && typeof V != 'boolean')
				throw new o('"allowMissing" argument must be a boolean')
			if (re(/^%?[^%]*%?$/, z) === null)
				throw new s(
					'`%` may not be present anywhere but at the beginning and end of the intrinsic name'
				)
			var F = Ce(z),
				ce = F.length > 0 ? F[0] : '',
				Q = Y('%' + ce + '%', V),
				de = Q.name,
				ee = Q.value,
				be = !1,
				he = Q.alias
			he && ((ce = he[0]), W(F, N([0, 1], he)))
			for (var we = 1, Xe = !0; we < F.length; we += 1) {
				var We = F[we],
					ke = B(We, 0, 1),
					et = B(We, -1)
				if (
					(ke === '"' ||
						ke === "'" ||
						ke === '`' ||
						et === '"' ||
						et === "'" ||
						et === '`') &&
					ke !== et
				)
					throw new s('property names with quotes must have matching quotes')
				if (
					((We === 'constructor' || !Xe) && (be = !0),
					(ce += '.' + We),
					(de = '%' + ce + '%'),
					D(k, de))
				)
					ee = k[de]
				else if (ee != null) {
					if (!(We in ee)) {
						if (!V)
							throw new o(
								'base intrinsic for ' +
									z +
									' exists, but the property is not available.'
							)
						return
					}
					if (_ && we + 1 >= F.length) {
						var Ue = _(ee, We)
						;((Xe = !!Ue),
							Xe && 'get' in Ue && !('originalValue' in Ue.get)
								? (ee = Ue.get)
								: (ee = ee[We]))
					} else ((Xe = D(ee, We)), (ee = ee[We]))
					Xe && !be && (k[de] = ee)
				}
			}
			return ee
		}),
		Gu
	)
}
var Wu, Xm
function bS() {
	if (Xm) return Wu
	Xm = 1
	var e = $p(),
		t = _S(),
		r = t([e('%String.prototype.indexOf%')])
	return (
		(Wu = function (i, a) {
			var s = e(i, !!a)
			return typeof s == 'function' && r(i, '.prototype.') > -1 ? t([s]) : s
		}),
		Wu
	)
}
var Ku, ev
function wS() {
	if (ev) return Ku
	ev = 1
	var e = $p(),
		t = bS(),
		r = Io(),
		n = pa(),
		i = e('%Map%', !0),
		a = t('Map.prototype.get', !0),
		s = t('Map.prototype.set', !0),
		o = t('Map.prototype.has', !0),
		u = t('Map.prototype.delete', !0),
		l = t('Map.prototype.size', !0)
	return (
		(Ku =
			!!i &&
			function () {
				var c,
					d = {
						assert: function (h) {
							if (!d.has(h))
								throw new n('Side channel does not contain ' + r(h))
						},
						delete: function (h) {
							if (c) {
								var g = u(c, h)
								return (l(c) === 0 && (c = void 0), g)
							}
							return !1
						},
						get: function (h) {
							if (c) return a(c, h)
						},
						has: function (h) {
							return c ? o(c, h) : !1
						},
						set: function (h, g) {
							;(c || (c = new i()), s(c, h, g))
						}
					}
				return d
			}),
		Ku
	)
}
var Qu, tv
function wE() {
	if (tv) return Qu
	tv = 1
	var e = $p(),
		t = bS(),
		r = Io(),
		n = wS(),
		i = pa(),
		a = e('%WeakMap%', !0),
		s = t('WeakMap.prototype.get', !0),
		o = t('WeakMap.prototype.set', !0),
		u = t('WeakMap.prototype.has', !0),
		l = t('WeakMap.prototype.delete', !0)
	return (
		(Qu = a
			? function () {
					var c,
						d,
						h = {
							assert: function (g) {
								if (!h.has(g))
									throw new i('Side channel does not contain ' + r(g))
							},
							delete: function (g) {
								if (
									a &&
									g &&
									(typeof g == 'object' || typeof g == 'function')
								) {
									if (c) return l(c, g)
								} else if (n && d) return d.delete(g)
								return !1
							},
							get: function (g) {
								return a &&
									g &&
									(typeof g == 'object' || typeof g == 'function') &&
									c
									? s(c, g)
									: d && d.get(g)
							},
							has: function (g) {
								return a &&
									g &&
									(typeof g == 'object' || typeof g == 'function') &&
									c
									? u(c, g)
									: !!d && d.has(g)
							},
							set: function (g, p) {
								a && g && (typeof g == 'object' || typeof g == 'function')
									? (c || (c = new a()), o(c, g, p))
									: n && (d || (d = n()), d.set(g, p))
							}
						}
					return h
				}
			: n),
		Qu
	)
}
var Zu, rv
function SS() {
	if (rv) return Zu
	rv = 1
	var e = pa(),
		t = Io(),
		r = ZT(),
		n = wS(),
		i = wE(),
		a = i || n || r
	return (
		(Zu = function () {
			var o,
				u = {
					assert: function (l) {
						if (!u.has(l)) {
							var f = l && Object(l) === l ? 'the given object key' : t(l)
							throw new e('Side channel does not contain ' + f)
						}
					},
					delete: function (l) {
						return !!o && o.delete(l)
					},
					get: function (l) {
						return o && o.get(l)
					},
					has: function (l) {
						return !!o && o.has(l)
					},
					set: function (l, f) {
						;(o || (o = a()), o.set(l, f))
					}
				}
			return u
		}),
		Zu
	)
}
var Yu, nv
function Fp() {
	if (nv) return Yu
	nv = 1
	var e = String.prototype.replace,
		t = /%20/g,
		r = { RFC1738: 'RFC1738', RFC3986: 'RFC3986' }
	return (
		(Yu = {
			default: r.RFC3986,
			formatters: {
				RFC1738: function (n) {
					return e.call(n, t, '+')
				},
				RFC3986: function (n) {
					return String(n)
				}
			},
			RFC1738: r.RFC1738,
			RFC3986: r.RFC3986
		}),
		Yu
	)
}
var Ju, iv
function xS() {
	if (iv) return Ju
	iv = 1
	var e = Fp(),
		t = SS(),
		r = Object.prototype.hasOwnProperty,
		n = Array.isArray,
		i = t(),
		a = function (S, y) {
			return (i.set(S, y), S)
		},
		s = function (S) {
			return i.has(S)
		},
		o = function (S) {
			return i.get(S)
		},
		u = function (S, y) {
			i.set(S, y)
		},
		l = (function () {
			for (var R = [], S = 0; S < 256; ++S)
				R[R.length] = '%' + ((S < 16 ? '0' : '') + S.toString(16)).toUpperCase()
			return R
		})(),
		f = function (S) {
			for (; S.length > 1; ) {
				var y = S.pop(),
					b = y.obj[y.prop]
				if (n(b)) {
					for (var O = [], A = 0; A < b.length; ++A)
						typeof b[A] < 'u' && (O[O.length] = b[A])
					y.obj[y.prop] = O
				}
			}
		},
		c = function (S, y) {
			for (
				var b = y && y.plainObjects ? { __proto__: null } : {}, O = 0;
				O < S.length;
				++O
			)
				typeof S[O] < 'u' && (b[O] = S[O])
			return b
		},
		d = function R(S, y, b) {
			if (!y) return S
			if (typeof y != 'object' && typeof y != 'function') {
				if (n(S)) {
					var O = S.length
					if (b && typeof b.arrayLimit == 'number' && O > b.arrayLimit)
						return a(c(S.concat(y), b), O)
					S[O] = y
				} else if (S && typeof S == 'object')
					if (s(S)) {
						var A = o(S) + 1
						;((S[A] = y), u(S, A))
					} else {
						if (b && b.strictMerge) return [S, y]
						;((b && (b.plainObjects || b.allowPrototypes)) ||
							!r.call(Object.prototype, y)) &&
							(S[y] = !0)
					}
				else return [S, y]
				return S
			}
			if (!S || typeof S != 'object') {
				if (s(y)) {
					for (
						var T = Object.keys(y),
							P = b && b.plainObjects ? { __proto__: null, 0: S } : { 0: S },
							k = 0;
						k < T.length;
						k++
					) {
						var j = parseInt(T[k], 10)
						P[j + 1] = y[T[k]]
					}
					return a(P, o(y) + 1)
				}
				var M = [S].concat(y)
				return b && typeof b.arrayLimit == 'number' && M.length > b.arrayLimit
					? a(c(M, b), M.length - 1)
					: M
			}
			var q = S
			return (
				n(S) && !n(y) && (q = c(S, b)),
				n(S) && n(y)
					? (y.forEach(function (I, D) {
							if (r.call(S, D)) {
								var N = S[D]
								N && typeof N == 'object' && I && typeof I == 'object'
									? (S[D] = R(N, I, b))
									: (S[S.length] = I)
							} else S[D] = I
						}),
						S)
					: Object.keys(y).reduce(function (I, D) {
							var N = y[D]
							if (
								(r.call(I, D) ? (I[D] = R(I[D], N, b)) : (I[D] = N),
								s(y) && !s(I) && a(I, o(y)),
								s(I))
							) {
								var W = parseInt(D, 10)
								String(W) === D && W >= 0 && W > o(I) && u(I, W)
							}
							return I
						}, q)
			)
		},
		h = function (S, y) {
			return Object.keys(y).reduce(function (b, O) {
				return ((b[O] = y[O]), b)
			}, S)
		},
		g = function (R, S, y) {
			var b = R.replace(/\+/g, ' ')
			if (y === 'iso-8859-1') return b.replace(/%[0-9a-f]{2}/gi, unescape)
			try {
				return decodeURIComponent(b)
			} catch {
				return b
			}
		},
		p = 1024,
		m = function (S, y, b, O, A) {
			if (S.length === 0) return S
			var T = S
			if (
				(typeof S == 'symbol'
					? (T = Symbol.prototype.toString.call(S))
					: typeof S != 'string' && (T = String(S)),
				b === 'iso-8859-1')
			)
				return escape(T).replace(/%u[0-9a-f]{4}/gi, function (D) {
					return '%26%23' + parseInt(D.slice(2), 16) + '%3B'
				})
			for (var P = '', k = 0; k < T.length; k += p) {
				for (
					var j = T.length >= p ? T.slice(k, k + p) : T, M = [], q = 0;
					q < j.length;
					++q
				) {
					var I = j.charCodeAt(q)
					if (
						I === 45 ||
						I === 46 ||
						I === 95 ||
						I === 126 ||
						(I >= 48 && I <= 57) ||
						(I >= 65 && I <= 90) ||
						(I >= 97 && I <= 122) ||
						(A === e.RFC1738 && (I === 40 || I === 41))
					) {
						M[M.length] = j.charAt(q)
						continue
					}
					if (I < 128) {
						M[M.length] = l[I]
						continue
					}
					if (I < 2048) {
						M[M.length] = l[192 | (I >> 6)] + l[128 | (I & 63)]
						continue
					}
					if (I < 55296 || I >= 57344) {
						M[M.length] =
							l[224 | (I >> 12)] + l[128 | ((I >> 6) & 63)] + l[128 | (I & 63)]
						continue
					}
					;((q += 1),
						(I = 65536 + (((I & 1023) << 10) | (j.charCodeAt(q) & 1023))),
						(M[M.length] =
							l[240 | (I >> 18)] +
							l[128 | ((I >> 12) & 63)] +
							l[128 | ((I >> 6) & 63)] +
							l[128 | (I & 63)]))
				}
				P += M.join('')
			}
			return P
		},
		v = function (S) {
			for (
				var y = [{ obj: { o: S }, prop: 'o' }], b = [], O = 0;
				O < y.length;
				++O
			)
				for (
					var A = y[O], T = A.obj[A.prop], P = Object.keys(T), k = 0;
					k < P.length;
					++k
				) {
					var j = P[k],
						M = T[j]
					typeof M == 'object' &&
						M !== null &&
						b.indexOf(M) === -1 &&
						((y[y.length] = { obj: T, prop: j }), (b[b.length] = M))
				}
			return (f(y), S)
		},
		_ = function (S) {
			return Object.prototype.toString.call(S) === '[object RegExp]'
		},
		w = function (S) {
			return !S || typeof S != 'object'
				? !1
				: !!(
						S.constructor &&
						S.constructor.isBuffer &&
						S.constructor.isBuffer(S)
					)
		},
		x = function (S, y, b, O) {
			if (s(S)) {
				var A = o(S) + 1
				return ((S[A] = y), u(S, A), S)
			}
			var T = [].concat(S, y)
			return T.length > b ? a(c(T, { plainObjects: O }), T.length - 1) : T
		},
		E = function (S, y) {
			if (n(S)) {
				for (var b = [], O = 0; O < S.length; O += 1) b[b.length] = y(S[O])
				return b
			}
			return y(S)
		}
	return (
		(Ju = {
			arrayToObject: c,
			assign: h,
			combine: x,
			compact: v,
			decode: g,
			encode: m,
			isBuffer: w,
			isOverflow: s,
			isRegExp: _,
			markOverflow: a,
			maybeMap: E,
			merge: d
		}),
		Ju
	)
}
var Xu, av
function SE() {
	if (av) return Xu
	av = 1
	var e = SS(),
		t = xS(),
		r = Fp(),
		n = Object.prototype.hasOwnProperty,
		i = {
			brackets: function (m) {
				return m + '[]'
			},
			comma: 'comma',
			indices: function (m, v) {
				return m + '[' + v + ']'
			},
			repeat: function (m) {
				return m
			}
		},
		a = Array.isArray,
		s = Array.prototype.push,
		o = function (p, m) {
			s.apply(p, a(m) ? m : [m])
		},
		u = Date.prototype.toISOString,
		l = r.default,
		f = {
			addQueryPrefix: !1,
			allowDots: !1,
			allowEmptyArrays: !1,
			arrayFormat: 'indices',
			charset: 'utf-8',
			charsetSentinel: !1,
			commaRoundTrip: !1,
			delimiter: '&',
			encode: !0,
			encodeDotInKeys: !1,
			encoder: t.encode,
			encodeValuesOnly: !1,
			filter: void 0,
			format: l,
			formatter: r.formatters[l],
			indices: !1,
			serializeDate: function (m) {
				return u.call(m)
			},
			skipNulls: !1,
			strictNullHandling: !1
		},
		c = function (m) {
			return (
				typeof m == 'string' ||
				typeof m == 'number' ||
				typeof m == 'boolean' ||
				typeof m == 'symbol' ||
				typeof m == 'bigint'
			)
		},
		d = {},
		h = function p(m, v, _, w, x, E, R, S, y, b, O, A, T, P, k, j, M, q) {
			for (var I = m, D = q, N = 0, W = !1; (D = D.get(d)) !== void 0 && !W; ) {
				var oe = D.get(m)
				if (((N += 1), typeof oe < 'u')) {
					if (oe === N) throw new RangeError('Cyclic object value')
					W = !0
				}
				typeof D.get(d) > 'u' && (N = 0)
			}
			if (
				(typeof b == 'function'
					? (I = b(v, I))
					: I instanceof Date
						? (I = T(I))
						: _ === 'comma' &&
							a(I) &&
							(I = t.maybeMap(I, function (de) {
								return de instanceof Date ? T(de) : de
							})),
				I === null)
			) {
				if (E) return k(y && !j ? y(v, f.encoder, M, 'key', P) : v)
				I = ''
			}
			if (c(I) || t.isBuffer(I)) {
				if (y) {
					var B = j ? v : y(v, f.encoder, M, 'key', P)
					return [k(B) + '=' + k(y(I, f.encoder, M, 'value', P))]
				}
				return [k(v) + '=' + k(String(I))]
			}
			var re = []
			if (typeof I > 'u') return re
			var Z
			if (_ === 'comma' && a(I))
				(j &&
					y &&
					(I = t.maybeMap(I, function (de) {
						return de == null ? de : y(de)
					})),
					(Z = [{ value: I.length > 0 ? I.join(',') || null : void 0 }]))
			else if (a(b)) Z = b
			else {
				var le = Object.keys(I)
				Z = O ? le.sort(O) : le
			}
			var Ce = S ? String(v).replace(/\./g, '%2E') : String(v),
				Y = w && a(I) && I.length === 1 ? Ce + '[]' : Ce
			if (x && a(I) && I.length === 0) return Y + '[]'
			for (var U = 0; U < Z.length; ++U) {
				var z = Z[U],
					V = typeof z == 'object' && z && typeof z.value < 'u' ? z.value : I[z]
				if (!(R && V === null)) {
					var F = A && S ? String(z).replace(/\./g, '%2E') : String(z),
						ce = a(I)
							? typeof _ == 'function'
								? _(Y, F)
								: Y
							: Y + (A ? '.' + F : '[' + F + ']')
					q.set(m, N)
					var Q = e()
					;(Q.set(d, q),
						o(
							re,
							p(
								V,
								ce,
								_,
								w,
								x,
								E,
								R,
								S,
								_ === 'comma' && j && a(I) ? null : y,
								b,
								O,
								A,
								T,
								P,
								k,
								j,
								M,
								Q
							)
						))
				}
			}
			return re
		},
		g = function (m) {
			if (!m) return f
			if (
				typeof m.allowEmptyArrays < 'u' &&
				typeof m.allowEmptyArrays != 'boolean'
			)
				throw new TypeError(
					'`allowEmptyArrays` option can only be `true` or `false`, when provided'
				)
			if (
				typeof m.encodeDotInKeys < 'u' &&
				typeof m.encodeDotInKeys != 'boolean'
			)
				throw new TypeError(
					'`encodeDotInKeys` option can only be `true` or `false`, when provided'
				)
			if (
				m.encoder !== null &&
				typeof m.encoder < 'u' &&
				typeof m.encoder != 'function'
			)
				throw new TypeError('Encoder has to be a function.')
			var v = m.charset || f.charset
			if (
				typeof m.charset < 'u' &&
				m.charset !== 'utf-8' &&
				m.charset !== 'iso-8859-1'
			)
				throw new TypeError(
					'The charset option must be either utf-8, iso-8859-1, or undefined'
				)
			var _ = r.default
			if (typeof m.format < 'u') {
				if (!n.call(r.formatters, m.format))
					throw new TypeError('Unknown format option provided.')
				_ = m.format
			}
			var w = r.formatters[_],
				x = f.filter
			;(typeof m.filter == 'function' || a(m.filter)) && (x = m.filter)
			var E
			if (
				(m.arrayFormat in i
					? (E = m.arrayFormat)
					: 'indices' in m
						? (E = m.indices ? 'indices' : 'repeat')
						: (E = f.arrayFormat),
				'commaRoundTrip' in m && typeof m.commaRoundTrip != 'boolean')
			)
				throw new TypeError('`commaRoundTrip` must be a boolean, or absent')
			var R =
				typeof m.allowDots > 'u'
					? m.encodeDotInKeys === !0
						? !0
						: f.allowDots
					: !!m.allowDots
			return {
				addQueryPrefix:
					typeof m.addQueryPrefix == 'boolean'
						? m.addQueryPrefix
						: f.addQueryPrefix,
				allowDots: R,
				allowEmptyArrays:
					typeof m.allowEmptyArrays == 'boolean'
						? !!m.allowEmptyArrays
						: f.allowEmptyArrays,
				arrayFormat: E,
				charset: v,
				charsetSentinel:
					typeof m.charsetSentinel == 'boolean'
						? m.charsetSentinel
						: f.charsetSentinel,
				commaRoundTrip: !!m.commaRoundTrip,
				delimiter: typeof m.delimiter > 'u' ? f.delimiter : m.delimiter,
				encode: typeof m.encode == 'boolean' ? m.encode : f.encode,
				encodeDotInKeys:
					typeof m.encodeDotInKeys == 'boolean'
						? m.encodeDotInKeys
						: f.encodeDotInKeys,
				encoder: typeof m.encoder == 'function' ? m.encoder : f.encoder,
				encodeValuesOnly:
					typeof m.encodeValuesOnly == 'boolean'
						? m.encodeValuesOnly
						: f.encodeValuesOnly,
				filter: x,
				format: _,
				formatter: w,
				serializeDate:
					typeof m.serializeDate == 'function'
						? m.serializeDate
						: f.serializeDate,
				skipNulls: typeof m.skipNulls == 'boolean' ? m.skipNulls : f.skipNulls,
				sort: typeof m.sort == 'function' ? m.sort : null,
				strictNullHandling:
					typeof m.strictNullHandling == 'boolean'
						? m.strictNullHandling
						: f.strictNullHandling
			}
		}
	return (
		(Xu = function (p, m) {
			var v = p,
				_ = g(m),
				w,
				x
			typeof _.filter == 'function'
				? ((x = _.filter), (v = x('', v)))
				: a(_.filter) && ((x = _.filter), (w = x))
			var E = []
			if (typeof v != 'object' || v === null) return ''
			var R = i[_.arrayFormat],
				S = R === 'comma' && _.commaRoundTrip
			;(w || (w = Object.keys(v)), _.sort && w.sort(_.sort))
			for (var y = e(), b = 0; b < w.length; ++b) {
				var O = w[b]
				if (!(typeof O > 'u' || O === null)) {
					var A = v[O]
					;(_.skipNulls && A === null) ||
						o(
							E,
							h(
								A,
								O,
								R,
								S,
								_.allowEmptyArrays,
								_.strictNullHandling,
								_.skipNulls,
								_.encodeDotInKeys,
								_.encode ? _.encoder : null,
								_.filter,
								_.sort,
								_.allowDots,
								_.serializeDate,
								_.format,
								_.formatter,
								_.encodeValuesOnly,
								_.charset,
								y
							)
						)
				}
			}
			var T = E.join(_.delimiter),
				P = _.addQueryPrefix === !0 ? '?' : ''
			return (
				_.charsetSentinel &&
					(_.charset === 'iso-8859-1'
						? (P += 'utf8=%26%2310003%3B' + _.delimiter)
						: (P += 'utf8=%E2%9C%93' + _.delimiter)),
				T.length > 0 ? P + T : ''
			)
		}),
		Xu
	)
}
var el, sv
function xE() {
	if (sv) return el
	sv = 1
	var e = xS(),
		t = Object.prototype.hasOwnProperty,
		r = Array.isArray,
		n = {
			allowDots: !1,
			allowEmptyArrays: !1,
			allowPrototypes: !1,
			allowSparse: !1,
			arrayLimit: 20,
			charset: 'utf-8',
			charsetSentinel: !1,
			comma: !1,
			decodeDotInKeys: !1,
			decoder: e.decode,
			delimiter: '&',
			depth: 5,
			duplicates: 'combine',
			ignoreQueryPrefix: !1,
			interpretNumericEntities: !1,
			parameterLimit: 1e3,
			parseArrays: !0,
			plainObjects: !1,
			strictDepth: !1,
			strictMerge: !0,
			strictNullHandling: !1,
			throwOnLimitExceeded: !1
		},
		i = function (h) {
			return h.replace(/&#(\d+);/g, function (g, p) {
				return String.fromCharCode(parseInt(p, 10))
			})
		},
		a = function (h, g, p) {
			if (h && typeof h == 'string' && g.comma && h.indexOf(',') > -1)
				return h.split(',')
			if (g.throwOnLimitExceeded && p >= g.arrayLimit)
				throw new RangeError(
					'Array limit exceeded. Only ' +
						g.arrayLimit +
						' element' +
						(g.arrayLimit === 1 ? '' : 's') +
						' allowed in an array.'
				)
			return h
		},
		s = 'utf8=%26%2310003%3B',
		o = 'utf8=%E2%9C%93',
		u = function (g, p) {
			var m = { __proto__: null },
				v = p.ignoreQueryPrefix ? g.replace(/^\?/, '') : g
			v = v.replace(/%5B/gi, '[').replace(/%5D/gi, ']')
			var _ = p.parameterLimit === 1 / 0 ? void 0 : p.parameterLimit,
				w = v.split(
					p.delimiter,
					p.throwOnLimitExceeded && typeof _ < 'u' ? _ + 1 : _
				)
			if (p.throwOnLimitExceeded && typeof _ < 'u' && w.length > _)
				throw new RangeError(
					'Parameter limit exceeded. Only ' +
						_ +
						' parameter' +
						(_ === 1 ? '' : 's') +
						' allowed.'
				)
			var x = -1,
				E,
				R = p.charset
			if (p.charsetSentinel)
				for (E = 0; E < w.length; ++E)
					w[E].indexOf('utf8=') === 0 &&
						(w[E] === o ? (R = 'utf-8') : w[E] === s && (R = 'iso-8859-1'),
						(x = E),
						(E = w.length))
			for (E = 0; E < w.length; ++E)
				if (E !== x) {
					var S = w[E],
						y = S.indexOf(']='),
						b = y === -1 ? S.indexOf('=') : y + 1,
						O,
						A
					if (
						(b === -1
							? ((O = p.decoder(S, n.decoder, R, 'key')),
								(A = p.strictNullHandling ? null : ''))
							: ((O = p.decoder(S.slice(0, b), n.decoder, R, 'key')),
								O !== null &&
									(A = e.maybeMap(
										a(S.slice(b + 1), p, r(m[O]) ? m[O].length : 0),
										function (P) {
											return p.decoder(P, n.decoder, R, 'value')
										}
									))),
						A &&
							p.interpretNumericEntities &&
							R === 'iso-8859-1' &&
							(A = i(String(A))),
						S.indexOf('[]=') > -1 && (A = r(A) ? [A] : A),
						p.comma && r(A) && A.length > p.arrayLimit)
					) {
						if (p.throwOnLimitExceeded)
							throw new RangeError(
								'Array limit exceeded. Only ' +
									p.arrayLimit +
									' element' +
									(p.arrayLimit === 1 ? '' : 's') +
									' allowed in an array.'
							)
						A = e.combine([], A, p.arrayLimit, p.plainObjects)
					}
					if (O !== null) {
						var T = t.call(m, O)
						T && (p.duplicates === 'combine' || S.indexOf('[]=') > -1)
							? (m[O] = e.combine(m[O], A, p.arrayLimit, p.plainObjects))
							: (!T || p.duplicates === 'last') && (m[O] = A)
					}
				}
			return m
		},
		l = function (h, g, p, m) {
			var v = 0
			if (h.length > 0 && h[h.length - 1] === '[]') {
				var _ = h.slice(0, -1).join('')
				v = Array.isArray(g) && g[_] ? g[_].length : 0
			}
			for (var w = m ? g : a(g, p, v), x = h.length - 1; x >= 0; --x) {
				var E,
					R = h[x]
				if (R === '[]' && p.parseArrays)
					e.isOverflow(w)
						? (E = w)
						: (E =
								p.allowEmptyArrays &&
								(w === '' || (p.strictNullHandling && w === null))
									? []
									: e.combine([], w, p.arrayLimit, p.plainObjects))
				else {
					E = p.plainObjects ? { __proto__: null } : {}
					var S =
							R.charAt(0) === '[' && R.charAt(R.length - 1) === ']'
								? R.slice(1, -1)
								: R,
						y = p.decodeDotInKeys ? S.replace(/%2E/g, '.') : S,
						b = parseInt(y, 10),
						O =
							!isNaN(b) && R !== y && String(b) === y && b >= 0 && p.parseArrays
					if (!p.parseArrays && y === '') E = { 0: w }
					else if (O && b < p.arrayLimit) ((E = []), (E[b] = w))
					else {
						if (O && p.throwOnLimitExceeded)
							throw new RangeError(
								'Array limit exceeded. Only ' +
									p.arrayLimit +
									' element' +
									(p.arrayLimit === 1 ? '' : 's') +
									' allowed in an array.'
							)
						O
							? ((E[b] = w), e.markOverflow(E, b))
							: y !== '__proto__' && (E[y] = w)
					}
				}
				w = E
			}
			return w
		},
		f = function (g, p) {
			var m = p.allowDots ? g.replace(/\.([^.[]+)/g, '[$1]') : g
			if (p.depth <= 0)
				return !p.plainObjects &&
					t.call(Object.prototype, m) &&
					!p.allowPrototypes
					? void 0
					: [m]
			var v = [],
				_ = m.indexOf('['),
				w = _ >= 0 ? m.slice(0, _) : m
			if (w) {
				if (
					!p.plainObjects &&
					t.call(Object.prototype, w) &&
					!p.allowPrototypes
				)
					return
				v[v.length] = w
			}
			for (var x = m.length, E = _, R = 0; E >= 0 && R < p.depth; ) {
				for (var S = 1, y = E + 1, b = -1; y < x && b < 0; ) {
					var O = m.charCodeAt(y)
					;(O === 91 ? (S += 1) : O === 93 && ((S -= 1), S === 0 && (b = y)),
						(y += 1))
				}
				if (b < 0) return ((v[v.length] = '[' + m.slice(E) + ']'), v)
				var A = m.slice(E, b + 1),
					T = A.slice(1, -1)
				if (
					!p.plainObjects &&
					t.call(Object.prototype, T) &&
					!p.allowPrototypes
				)
					return
				;((v[v.length] = A), (R += 1), (E = m.indexOf('[', b + 1)))
			}
			if (E >= 0) {
				if (p.strictDepth === !0)
					throw new RangeError(
						'Input depth exceeded depth option of ' +
							p.depth +
							' and strictDepth is true'
					)
				v[v.length] = '[' + m.slice(E) + ']'
			}
			return v
		},
		c = function (g, p, m, v) {
			if (g) {
				var _ = f(g, m)
				if (_) return l(_, p, m, v)
			}
		},
		d = function (g) {
			if (!g) return n
			if (
				typeof g.allowEmptyArrays < 'u' &&
				typeof g.allowEmptyArrays != 'boolean'
			)
				throw new TypeError(
					'`allowEmptyArrays` option can only be `true` or `false`, when provided'
				)
			if (
				typeof g.decodeDotInKeys < 'u' &&
				typeof g.decodeDotInKeys != 'boolean'
			)
				throw new TypeError(
					'`decodeDotInKeys` option can only be `true` or `false`, when provided'
				)
			if (
				g.decoder !== null &&
				typeof g.decoder < 'u' &&
				typeof g.decoder != 'function'
			)
				throw new TypeError('Decoder has to be a function.')
			if (
				typeof g.charset < 'u' &&
				g.charset !== 'utf-8' &&
				g.charset !== 'iso-8859-1'
			)
				throw new TypeError(
					'The charset option must be either utf-8, iso-8859-1, or undefined'
				)
			if (
				typeof g.throwOnLimitExceeded < 'u' &&
				typeof g.throwOnLimitExceeded != 'boolean'
			)
				throw new TypeError('`throwOnLimitExceeded` option must be a boolean')
			var p = typeof g.charset > 'u' ? n.charset : g.charset,
				m = typeof g.duplicates > 'u' ? n.duplicates : g.duplicates
			if (m !== 'combine' && m !== 'first' && m !== 'last')
				throw new TypeError(
					'The duplicates option must be either combine, first, or last'
				)
			var v =
				typeof g.allowDots > 'u'
					? g.decodeDotInKeys === !0
						? !0
						: n.allowDots
					: !!g.allowDots
			return {
				allowDots: v,
				allowEmptyArrays:
					typeof g.allowEmptyArrays == 'boolean'
						? !!g.allowEmptyArrays
						: n.allowEmptyArrays,
				allowPrototypes:
					typeof g.allowPrototypes == 'boolean'
						? g.allowPrototypes
						: n.allowPrototypes,
				allowSparse:
					typeof g.allowSparse == 'boolean' ? g.allowSparse : n.allowSparse,
				arrayLimit:
					typeof g.arrayLimit == 'number' ? g.arrayLimit : n.arrayLimit,
				charset: p,
				charsetSentinel:
					typeof g.charsetSentinel == 'boolean'
						? g.charsetSentinel
						: n.charsetSentinel,
				comma: typeof g.comma == 'boolean' ? g.comma : n.comma,
				decodeDotInKeys:
					typeof g.decodeDotInKeys == 'boolean'
						? g.decodeDotInKeys
						: n.decodeDotInKeys,
				decoder: typeof g.decoder == 'function' ? g.decoder : n.decoder,
				delimiter:
					typeof g.delimiter == 'string' || e.isRegExp(g.delimiter)
						? g.delimiter
						: n.delimiter,
				depth:
					typeof g.depth == 'number' || g.depth === !1 ? +g.depth : n.depth,
				duplicates: m,
				ignoreQueryPrefix: g.ignoreQueryPrefix === !0,
				interpretNumericEntities:
					typeof g.interpretNumericEntities == 'boolean'
						? g.interpretNumericEntities
						: n.interpretNumericEntities,
				parameterLimit:
					typeof g.parameterLimit == 'number'
						? g.parameterLimit
						: n.parameterLimit,
				parseArrays: g.parseArrays !== !1,
				plainObjects:
					typeof g.plainObjects == 'boolean' ? g.plainObjects : n.plainObjects,
				strictDepth:
					typeof g.strictDepth == 'boolean' ? !!g.strictDepth : n.strictDepth,
				strictMerge:
					typeof g.strictMerge == 'boolean' ? !!g.strictMerge : n.strictMerge,
				strictNullHandling:
					typeof g.strictNullHandling == 'boolean'
						? g.strictNullHandling
						: n.strictNullHandling,
				throwOnLimitExceeded:
					typeof g.throwOnLimitExceeded == 'boolean'
						? g.throwOnLimitExceeded
						: !1
			}
		}
	return (
		(el = function (h, g) {
			var p = d(g)
			if (h === '' || h === null || typeof h > 'u')
				return p.plainObjects ? { __proto__: null } : {}
			for (
				var m = typeof h == 'string' ? u(h, p) : h,
					v = p.plainObjects ? { __proto__: null } : {},
					_ = Object.keys(m),
					w = 0;
				w < _.length;
				++w
			) {
				var x = _[w],
					E = c(x, m[x], p, typeof h == 'string')
				v = e.merge(v, E, p)
			}
			return p.allowSparse === !0 ? v : e.compact(v)
		}),
		el
	)
}
var tl, ov
function RE() {
	if (ov) return tl
	ov = 1
	var e = SE(),
		t = xE(),
		r = Fp()
	return ((tl = { formats: r, parse: t, stringify: e }), tl)
}
var OE = RE()
const nV = qe(OE)
var rl, uv
function CE() {
	if (uv) return rl
	uv = 1
	function e(t, ...r) {}
	return ((rl = e), rl)
}
var TE = CE()
const iV = qe(TE)
function EE(e, t) {
	for (var r = -1, n = e == null ? 0 : e.length, i = 0, a = []; ++r < n; ) {
		var s = e[r]
		t(s, r, e) && (a[i++] = s)
	}
	return a
}
function AE(e, t) {
	for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r)
	return n
}
function ME(e) {
	throw new Error(
		'Could not dynamically require "' +
			e +
			'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
	)
}
var Us = { exports: {} },
	PE = Us.exports,
	lv
function IE() {
	return (
		lv ||
			((lv = 1),
			(function (e, t) {
				;(function (r, n) {
					typeof ME == 'function' ? (e.exports = n()) : (r.pluralize = n())
				})(PE, function () {
					var r = [],
						n = [],
						i = {},
						a = {},
						s = {}
					function o(p) {
						return typeof p == 'string' ? new RegExp('^' + p + '$', 'i') : p
					}
					function u(p, m) {
						return p === m
							? m
							: p === p.toLowerCase()
								? m.toLowerCase()
								: p === p.toUpperCase()
									? m.toUpperCase()
									: p[0] === p[0].toUpperCase()
										? m.charAt(0).toUpperCase() + m.substr(1).toLowerCase()
										: m.toLowerCase()
					}
					function l(p, m) {
						return p.replace(/\$(\d{1,2})/g, function (v, _) {
							return m[_] || ''
						})
					}
					function f(p, m) {
						return p.replace(m[0], function (v, _) {
							var w = l(m[1], arguments)
							return u(v === '' ? p[_ - 1] : v, w)
						})
					}
					function c(p, m, v) {
						if (!p.length || i.hasOwnProperty(p)) return m
						for (var _ = v.length; _--; ) {
							var w = v[_]
							if (w[0].test(m)) return f(m, w)
						}
						return m
					}
					function d(p, m, v) {
						return function (_) {
							var w = _.toLowerCase()
							return m.hasOwnProperty(w)
								? u(_, w)
								: p.hasOwnProperty(w)
									? u(_, p[w])
									: c(w, _, v)
						}
					}
					function h(p, m, v, _) {
						return function (w) {
							var x = w.toLowerCase()
							return m.hasOwnProperty(x)
								? !0
								: p.hasOwnProperty(x)
									? !1
									: c(x, x, v) === x
						}
					}
					function g(p, m, v) {
						var _ = m === 1 ? g.singular(p) : g.plural(p)
						return (v ? m + ' ' : '') + _
					}
					return (
						(g.plural = d(s, a, r)),
						(g.isPlural = h(s, a, r)),
						(g.singular = d(a, s, n)),
						(g.isSingular = h(a, s, n)),
						(g.addPluralRule = function (p, m) {
							r.push([o(p), m])
						}),
						(g.addSingularRule = function (p, m) {
							n.push([o(p), m])
						}),
						(g.addUncountableRule = function (p) {
							if (typeof p == 'string') {
								i[p.toLowerCase()] = !0
								return
							}
							;(g.addPluralRule(p, '$0'), g.addSingularRule(p, '$0'))
						}),
						(g.addIrregularRule = function (p, m) {
							;((m = m.toLowerCase()),
								(p = p.toLowerCase()),
								(s[p] = m),
								(a[m] = p))
						}),
						[
							['I', 'we'],
							['me', 'us'],
							['he', 'they'],
							['she', 'they'],
							['them', 'them'],
							['myself', 'ourselves'],
							['yourself', 'yourselves'],
							['itself', 'themselves'],
							['herself', 'themselves'],
							['himself', 'themselves'],
							['themself', 'themselves'],
							['is', 'are'],
							['was', 'were'],
							['has', 'have'],
							['this', 'these'],
							['that', 'those'],
							['echo', 'echoes'],
							['dingo', 'dingoes'],
							['volcano', 'volcanoes'],
							['tornado', 'tornadoes'],
							['torpedo', 'torpedoes'],
							['genus', 'genera'],
							['viscus', 'viscera'],
							['stigma', 'stigmata'],
							['stoma', 'stomata'],
							['dogma', 'dogmata'],
							['lemma', 'lemmata'],
							['schema', 'schemata'],
							['anathema', 'anathemata'],
							['ox', 'oxen'],
							['axe', 'axes'],
							['die', 'dice'],
							['yes', 'yeses'],
							['foot', 'feet'],
							['eave', 'eaves'],
							['goose', 'geese'],
							['tooth', 'teeth'],
							['quiz', 'quizzes'],
							['human', 'humans'],
							['proof', 'proofs'],
							['carve', 'carves'],
							['valve', 'valves'],
							['looey', 'looies'],
							['thief', 'thieves'],
							['groove', 'grooves'],
							['pickaxe', 'pickaxes'],
							['passerby', 'passersby']
						].forEach(function (p) {
							return g.addIrregularRule(p[0], p[1])
						}),
						[
							[/s?$/i, 's'],
							[/[^\u0000-\u007F]$/i, '$0'],
							[/([^aeiou]ese)$/i, '$1'],
							[/(ax|test)is$/i, '$1es'],
							[/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
							[/(e[mn]u)s?$/i, '$1s'],
							[/([^l]ias|[aeiou]las|[ejzr]as|[iu]am)$/i, '$1'],
							[
								/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
								'$1i'
							],
							[/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
							[/(seraph|cherub)(?:im)?$/i, '$1im'],
							[/(her|at|gr)o$/i, '$1oes'],
							[
								/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|automat|quor)(?:a|um)$/i,
								'$1a'
							],
							[
								/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)(?:a|on)$/i,
								'$1a'
							],
							[/sis$/i, 'ses'],
							[/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
							[/([^aeiouy]|qu)y$/i, '$1ies'],
							[/([^ch][ieo][ln])ey$/i, '$1ies'],
							[/(x|ch|ss|sh|zz)$/i, '$1es'],
							[/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
							[/\b((?:tit)?m|l)(?:ice|ouse)$/i, '$1ice'],
							[/(pe)(?:rson|ople)$/i, '$1ople'],
							[/(child)(?:ren)?$/i, '$1ren'],
							[/eaux$/i, '$0'],
							[/m[ae]n$/i, 'men'],
							['thou', 'you']
						].forEach(function (p) {
							return g.addPluralRule(p[0], p[1])
						}),
						[
							[/s$/i, ''],
							[/(ss)$/i, '$1'],
							[
								/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i,
								'$1fe'
							],
							[/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
							[/ies$/i, 'y'],
							[
								/\b([pl]|zomb|(?:neck|cross)?t|coll|faer|food|gen|goon|group|lass|talk|goal|cut)ies$/i,
								'$1ie'
							],
							[/\b(mon|smil)ies$/i, '$1ey'],
							[/\b((?:tit)?m|l)ice$/i, '$1ouse'],
							[/(seraph|cherub)im$/i, '$1'],
							[
								/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i,
								'$1'
							],
							[
								/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i,
								'$1sis'
							],
							[/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
							[/(test)(?:is|es)$/i, '$1is'],
							[
								/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i,
								'$1us'
							],
							[
								/(agend|addend|millenni|dat|extrem|bacteri|desiderat|strat|candelabr|errat|ov|symposi|curricul|quor)a$/i,
								'$1um'
							],
							[
								/(apheli|hyperbat|periheli|asyndet|noumen|phenomen|criteri|organ|prolegomen|hedr|automat)a$/i,
								'$1on'
							],
							[/(alumn|alg|vertebr)ae$/i, '$1a'],
							[/(cod|mur|sil|vert|ind)ices$/i, '$1ex'],
							[/(matr|append)ices$/i, '$1ix'],
							[/(pe)(rson|ople)$/i, '$1rson'],
							[/(child)ren$/i, '$1'],
							[/(eau)x?$/i, '$1'],
							[/men$/i, 'man']
						].forEach(function (p) {
							return g.addSingularRule(p[0], p[1])
						}),
						[
							'adulthood',
							'advice',
							'agenda',
							'aid',
							'aircraft',
							'alcohol',
							'ammo',
							'analytics',
							'anime',
							'athletics',
							'audio',
							'bison',
							'blood',
							'bream',
							'buffalo',
							'butter',
							'carp',
							'cash',
							'chassis',
							'chess',
							'clothing',
							'cod',
							'commerce',
							'cooperation',
							'corps',
							'debris',
							'diabetes',
							'digestion',
							'elk',
							'energy',
							'equipment',
							'excretion',
							'expertise',
							'firmware',
							'flounder',
							'fun',
							'gallows',
							'garbage',
							'graffiti',
							'hardware',
							'headquarters',
							'health',
							'herpes',
							'highjinks',
							'homework',
							'housework',
							'information',
							'jeans',
							'justice',
							'kudos',
							'labour',
							'literature',
							'machinery',
							'mackerel',
							'mail',
							'media',
							'mews',
							'moose',
							'music',
							'mud',
							'manga',
							'news',
							'only',
							'personnel',
							'pike',
							'plankton',
							'pliers',
							'police',
							'pollution',
							'premises',
							'rain',
							'research',
							'rice',
							'salmon',
							'scissors',
							'series',
							'sewage',
							'shambles',
							'shrimp',
							'software',
							'species',
							'staff',
							'swine',
							'tennis',
							'traffic',
							'transportation',
							'trout',
							'tuna',
							'wealth',
							'welfare',
							'whiting',
							'wildebeest',
							'wildlife',
							'you',
							/pok[eé]mon$/i,
							/[^aeiou]ese$/i,
							/deer$/i,
							/fish$/i,
							/measles$/i,
							/o[iu]s$/i,
							/pox$/i,
							/sheep$/i
						].forEach(g.addUncountableRule),
						g
					)
				})
			})(Us)),
		Us.exports
	)
}
var kE = IE()
const aV = qe(kE)
var nl = function () {
		return Pr.Date.now()
	},
	qE = /\s/
function $E(e) {
	for (var t = e.length; t-- && qE.test(e.charAt(t)); );
	return t
}
var FE = /^\s+/
function DE(e) {
	return e && e.slice(0, $E(e) + 1).replace(FE, '')
}
var NE = '[object Symbol]'
function qo(e) {
	return typeof e == 'symbol' || (bi(e) && ha(e) == NE)
}
var cv = NaN,
	LE = /^[-+]0x[0-9a-f]+$/i,
	jE = /^0b[01]+$/i,
	UE = /^0o[0-7]+$/i,
	BE = parseInt
function fv(e) {
	if (typeof e == 'number') return e
	if (qo(e)) return cv
	if (za(e)) {
		var t = typeof e.valueOf == 'function' ? e.valueOf() : e
		e = za(t) ? t + '' : t
	}
	if (typeof e != 'string') return e === 0 ? e : +e
	e = DE(e)
	var r = jE.test(e)
	return r || UE.test(e) ? BE(e.slice(2), r ? 2 : 8) : LE.test(e) ? cv : +e
}
var VE = 'Expected a function',
	zE = Math.max,
	HE = Math.min
function sV(e, t, r) {
	var n,
		i,
		a,
		s,
		o,
		u,
		l = 0,
		f = !1,
		c = !1,
		d = !0
	if (typeof e != 'function') throw new TypeError(VE)
	;((t = fv(t) || 0),
		za(r) &&
			((f = !!r.leading),
			(c = 'maxWait' in r),
			(a = c ? zE(fv(r.maxWait) || 0, t) : a),
			(d = 'trailing' in r ? !!r.trailing : d)))
	function h(R) {
		var S = n,
			y = i
		return ((n = i = void 0), (l = R), (s = e.apply(y, S)), s)
	}
	function g(R) {
		return ((l = R), (o = setTimeout(v, t)), f ? h(R) : s)
	}
	function p(R) {
		var S = R - u,
			y = R - l,
			b = t - S
		return c ? HE(b, a - y) : b
	}
	function m(R) {
		var S = R - u,
			y = R - l
		return u === void 0 || S >= t || S < 0 || (c && y >= a)
	}
	function v() {
		var R = nl()
		if (m(R)) return _(R)
		o = setTimeout(v, p(R))
	}
	function _(R) {
		return ((o = void 0), d && n ? h(R) : ((n = i = void 0), s))
	}
	function w() {
		;(o !== void 0 && clearTimeout(o), (l = 0), (n = u = i = o = void 0))
	}
	function x() {
		return o === void 0 ? s : _(nl())
	}
	function E() {
		var R = nl(),
			S = m(R)
		if (((n = arguments), (i = this), (u = R), S)) {
			if (o === void 0) return g(u)
			if (c) return (clearTimeout(o), (o = setTimeout(v, t)), h(u))
		}
		return (o === void 0 && (o = setTimeout(v, t)), s)
	}
	return ((E.cancel = w), (E.flush = x), E)
}
function GE() {
	;((this.__data__ = new nn()), (this.size = 0))
}
function WE(e) {
	var t = this.__data__,
		r = t.delete(e)
	return ((this.size = t.size), r)
}
function KE(e) {
	return this.__data__.get(e)
}
function QE(e) {
	return this.__data__.has(e)
}
var ZE = 200
function YE(e, t) {
	var r = this.__data__
	if (r instanceof nn) {
		var n = r.__data__
		if (!Ga || n.length < ZE - 1)
			return (n.push([e, t]), (this.size = ++r.size), this)
		r = this.__data__ = new an(n)
	}
	return (r.set(e, t), (this.size = r.size), this)
}
function Pn(e) {
	var t = (this.__data__ = new nn(e))
	this.size = t.size
}
Pn.prototype.clear = GE
Pn.prototype.delete = WE
Pn.prototype.get = KE
Pn.prototype.has = QE
Pn.prototype.set = YE
function JE(e, t) {
	for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
		if (t(e[r], r, e)) return !0
	return !1
}
var XE = 1,
	eA = 2
function RS(e, t, r, n, i, a) {
	var s = r & XE,
		o = e.length,
		u = t.length
	if (o != u && !(s && u > o)) return !1
	var l = a.get(e),
		f = a.get(t)
	if (l && f) return l == t && f == e
	var c = -1,
		d = !0,
		h = r & eA ? new ta() : void 0
	for (a.set(e, t), a.set(t, e); ++c < o; ) {
		var g = e[c],
			p = t[c]
		if (n) var m = s ? n(p, g, c, t, e, a) : n(g, p, c, e, t, a)
		if (m !== void 0) {
			if (m) continue
			d = !1
			break
		}
		if (h) {
			if (
				!JE(t, function (v, _) {
					if (!Mp(h, _) && (g === v || i(g, v, r, n, a))) return h.push(_)
				})
			) {
				d = !1
				break
			}
		} else if (!(g === p || i(g, p, r, n, a))) {
			d = !1
			break
		}
	}
	return (a.delete(e), a.delete(t), d)
}
var dv = Pr.Uint8Array
function tA(e) {
	var t = -1,
		r = Array(e.size)
	return (
		e.forEach(function (n, i) {
			r[++t] = [i, n]
		}),
		r
	)
}
var rA = 1,
	nA = 2,
	iA = '[object Boolean]',
	aA = '[object Date]',
	sA = '[object Error]',
	oA = '[object Map]',
	uA = '[object Number]',
	lA = '[object RegExp]',
	cA = '[object Set]',
	fA = '[object String]',
	dA = '[object Symbol]',
	hA = '[object ArrayBuffer]',
	pA = '[object DataView]',
	hv = Ar ? Ar.prototype : void 0,
	il = hv ? hv.valueOf : void 0
function gA(e, t, r, n, i, a, s) {
	switch (r) {
		case pA:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
				return !1
			;((e = e.buffer), (t = t.buffer))
		case hA:
			return !(e.byteLength != t.byteLength || !a(new dv(e), new dv(t)))
		case iA:
		case aA:
		case uA:
			return iS(+e, +t)
		case sA:
			return e.name == t.name && e.message == t.message
		case lA:
		case fA:
			return e == t + ''
		case oA:
			var o = tA
		case cA:
			var u = n & rA
			if ((o || (o = kp), e.size != t.size && !u)) return !1
			var l = s.get(e)
			if (l) return l == t
			;((n |= nA), s.set(e, t))
			var f = RS(o(e), o(t), n, i, a, s)
			return (s.delete(e), f)
		case dA:
			if (il) return il.call(e) == il.call(t)
	}
	return !1
}
function mA(e, t, r) {
	var n = t(e)
	return Zr(e) ? n : oS(n, r(e))
}
function vA() {
	return []
}
var yA = Object.prototype,
	_A = yA.propertyIsEnumerable,
	pv = Object.getOwnPropertySymbols,
	bA = pv
		? function (e) {
				return e == null
					? []
					: ((e = Object(e)),
						EE(pv(e), function (t) {
							return _A.call(e, t)
						}))
			}
		: vA
function wA() {
	return !1
}
var OS = typeof exports == 'object' && exports && !exports.nodeType && exports,
	gv = OS && typeof module == 'object' && module && !module.nodeType && module,
	SA = gv && gv.exports === OS,
	mv = SA ? Pr.Buffer : void 0,
	xA = mv ? mv.isBuffer : void 0,
	Nh = xA || wA,
	RA = 9007199254740991,
	OA = /^(?:0|[1-9]\d*)$/
function CS(e, t) {
	var r = typeof e
	return (
		(t = t ?? RA),
		!!t &&
			(r == 'number' || (r != 'symbol' && OA.test(e))) &&
			e > -1 &&
			e % 1 == 0 &&
			e < t
	)
}
var CA = '[object Arguments]',
	TA = '[object Array]',
	EA = '[object Boolean]',
	AA = '[object Date]',
	MA = '[object Error]',
	PA = '[object Function]',
	IA = '[object Map]',
	kA = '[object Number]',
	qA = '[object Object]',
	$A = '[object RegExp]',
	FA = '[object Set]',
	DA = '[object String]',
	NA = '[object WeakMap]',
	LA = '[object ArrayBuffer]',
	jA = '[object DataView]',
	UA = '[object Float32Array]',
	BA = '[object Float64Array]',
	VA = '[object Int8Array]',
	zA = '[object Int16Array]',
	HA = '[object Int32Array]',
	GA = '[object Uint8Array]',
	WA = '[object Uint8ClampedArray]',
	KA = '[object Uint16Array]',
	QA = '[object Uint32Array]',
	Ve = {}
Ve[UA] =
	Ve[BA] =
	Ve[VA] =
	Ve[zA] =
	Ve[HA] =
	Ve[GA] =
	Ve[WA] =
	Ve[KA] =
	Ve[QA] =
		!0
Ve[CA] =
	Ve[TA] =
	Ve[LA] =
	Ve[EA] =
	Ve[jA] =
	Ve[AA] =
	Ve[MA] =
	Ve[PA] =
	Ve[IA] =
	Ve[kA] =
	Ve[qA] =
	Ve[$A] =
	Ve[FA] =
	Ve[DA] =
	Ve[NA] =
		!1
function ZA(e) {
	return bi(e) && Ip(e.length) && !!Ve[ha(e)]
}
var TS = typeof exports == 'object' && exports && !exports.nodeType && exports,
	ja = TS && typeof module == 'object' && module && !module.nodeType && module,
	YA = ja && ja.exports === TS,
	al = YA && tS.process,
	vv = (function () {
		try {
			var e = ja && ja.require && ja.require('util').types
			return e || (al && al.binding && al.binding('util'))
		} catch {}
	})(),
	yv = vv && vv.isTypedArray,
	ES = yv ? OT(yv) : ZA,
	JA = Object.prototype,
	XA = JA.hasOwnProperty
function eM(e, t) {
	var r = Zr(e),
		n = !r && Pp(e),
		i = !r && !n && Nh(e),
		a = !r && !n && !i && ES(e),
		s = r || n || i || a,
		o = s ? AE(e.length, String) : [],
		u = o.length
	for (var l in e)
		XA.call(e, l) &&
			!(
				s &&
				(l == 'length' ||
					(i && (l == 'offset' || l == 'parent')) ||
					(a && (l == 'buffer' || l == 'byteLength' || l == 'byteOffset')) ||
					CS(l, u))
			) &&
			o.push(l)
	return o
}
var tM = Object.prototype
function rM(e) {
	var t = e && e.constructor,
		r = (typeof t == 'function' && t.prototype) || tM
	return e === r
}
function nM(e, t) {
	return function (r) {
		return e(t(r))
	}
}
var iM = nM(Object.keys, Object),
	aM = Object.prototype,
	sM = aM.hasOwnProperty
function oM(e) {
	if (!rM(e)) return iM(e)
	var t = []
	for (var r in Object(e)) sM.call(e, r) && r != 'constructor' && t.push(r)
	return t
}
function uM(e) {
	return dS(e) ? eM(e) : oM(e)
}
function _v(e) {
	return mA(e, uM, bA)
}
var lM = 1,
	cM = Object.prototype,
	fM = cM.hasOwnProperty
function dM(e, t, r, n, i, a) {
	var s = r & lM,
		o = _v(e),
		u = o.length,
		l = _v(t),
		f = l.length
	if (u != f && !s) return !1
	for (var c = u; c--; ) {
		var d = o[c]
		if (!(s ? d in t : fM.call(t, d))) return !1
	}
	var h = a.get(e),
		g = a.get(t)
	if (h && g) return h == t && g == e
	var p = !0
	;(a.set(e, t), a.set(t, e))
	for (var m = s; ++c < u; ) {
		d = o[c]
		var v = e[d],
			_ = t[d]
		if (n) var w = s ? n(_, v, d, t, e, a) : n(v, _, d, e, t, a)
		if (!(w === void 0 ? v === _ || i(v, _, r, n, a) : w)) {
			p = !1
			break
		}
		m || (m = d == 'constructor')
	}
	if (p && !m) {
		var x = e.constructor,
			E = t.constructor
		x != E &&
			'constructor' in e &&
			'constructor' in t &&
			!(
				typeof x == 'function' &&
				x instanceof x &&
				typeof E == 'function' &&
				E instanceof E
			) &&
			(p = !1)
	}
	return (a.delete(e), a.delete(t), p)
}
var Lh = Ti(Pr, 'DataView'),
	jh = Ti(Pr, 'Promise'),
	Uh = Ti(Pr, 'WeakMap'),
	bv = '[object Map]',
	hM = '[object Object]',
	wv = '[object Promise]',
	Sv = '[object Set]',
	xv = '[object WeakMap]',
	Rv = '[object DataView]',
	pM = Ci(Lh),
	gM = Ci(Ga),
	mM = Ci(jh),
	vM = Ci(Li),
	yM = Ci(Uh),
	mn = ha
;((Lh && mn(new Lh(new ArrayBuffer(1))) != Rv) ||
	(Ga && mn(new Ga()) != bv) ||
	(jh && mn(jh.resolve()) != wv) ||
	(Li && mn(new Li()) != Sv) ||
	(Uh && mn(new Uh()) != xv)) &&
	(mn = function (e) {
		var t = ha(e),
			r = t == hM ? e.constructor : void 0,
			n = r ? Ci(r) : ''
		if (n)
			switch (n) {
				case pM:
					return Rv
				case gM:
					return bv
				case mM:
					return wv
				case vM:
					return Sv
				case yM:
					return xv
			}
		return t
	})
var _M = 1,
	Ov = '[object Arguments]',
	Cv = '[object Array]',
	ys = '[object Object]',
	bM = Object.prototype,
	Tv = bM.hasOwnProperty
function wM(e, t, r, n, i, a) {
	var s = Zr(e),
		o = Zr(t),
		u = s ? Cv : mn(e),
		l = o ? Cv : mn(t)
	;((u = u == Ov ? ys : u), (l = l == Ov ? ys : l))
	var f = u == ys,
		c = l == ys,
		d = u == l
	if (d && Nh(e)) {
		if (!Nh(t)) return !1
		;((s = !0), (f = !1))
	}
	if (d && !f)
		return (
			a || (a = new Pn()),
			s || ES(e) ? RS(e, t, r, n, i, a) : gA(e, t, u, r, n, i, a)
		)
	if (!(r & _M)) {
		var h = f && Tv.call(e, '__wrapped__'),
			g = c && Tv.call(t, '__wrapped__')
		if (h || g) {
			var p = h ? e.value() : e,
				m = g ? t.value() : t
			return (a || (a = new Pn()), i(p, m, r, n, a))
		}
	}
	return d ? (a || (a = new Pn()), dM(e, t, r, n, i, a)) : !1
}
function AS(e, t, r, n, i) {
	return e === t
		? !0
		: e == null || t == null || (!bi(e) && !bi(t))
			? e !== e && t !== t
			: wM(e, t, r, n, AS, i)
}
function oV(e, t) {
	return AS(e, t)
}
var Bs = { exports: {} }
/* @license
Papa Parse
v5.5.3
https://github.com/mholt/PapaParse
License: MIT
*/ var SM = Bs.exports,
	Ev
function xM() {
	return (
		Ev ||
			((Ev = 1),
			(function (e, t) {
				;((r, n) => {
					e.exports = n()
				})(SM, function r() {
					var n =
							typeof self < 'u'
								? self
								: typeof window < 'u'
									? window
									: n !== void 0
										? n
										: {},
						i,
						a = !n.document && !!n.postMessage,
						s = n.IS_PAPA_WORKER || !1,
						o = {},
						u = 0,
						l = {}
					function f(y) {
						;((this._handle = null),
							(this._finished = !1),
							(this._completed = !1),
							(this._halted = !1),
							(this._input = null),
							(this._baseIndex = 0),
							(this._partialLine = ''),
							(this._rowCount = 0),
							(this._start = 0),
							(this._nextChunk = null),
							(this.isFirstChunk = !0),
							(this._completeResults = { data: [], errors: [], meta: {} }),
							function (b) {
								var O = E(b)
								;((O.chunkSize = parseInt(O.chunkSize)),
									b.step || b.chunk || (O.chunkSize = null),
									(this._handle = new p(O)),
									((this._handle.streamer = this)._config = O))
							}.call(this, y),
							(this.parseChunk = function (b, O) {
								var A = parseInt(this._config.skipFirstNLines) || 0
								if (this.isFirstChunk && 0 < A) {
									let P = this._config.newline
									;(P ||
										((T = this._config.quoteChar || '"'),
										(P = this._handle.guessLineEndings(b, T))),
										(b = [...b.split(P).slice(A)].join(P)))
								}
								;(this.isFirstChunk &&
									S(this._config.beforeFirstChunk) &&
									(T = this._config.beforeFirstChunk(b)) !== void 0 &&
									(b = T),
									(this.isFirstChunk = !1),
									(this._halted = !1))
								var A = this._partialLine + b,
									T =
										((this._partialLine = ''),
										this._handle.parse(A, this._baseIndex, !this._finished))
								if (!this._handle.paused() && !this._handle.aborted()) {
									if (
										((b = T.meta.cursor),
										(A =
											(this._finished ||
												((this._partialLine = A.substring(b - this._baseIndex)),
												(this._baseIndex = b)),
											T && T.data && (this._rowCount += T.data.length),
											this._finished ||
												(this._config.preview &&
													this._rowCount >= this._config.preview))),
										s)
									)
										n.postMessage({
											results: T,
											workerId: l.WORKER_ID,
											finished: A
										})
									else if (S(this._config.chunk) && !O) {
										if (
											(this._config.chunk(T, this._handle),
											this._handle.paused() || this._handle.aborted())
										)
											return void (this._halted = !0)
										this._completeResults = T = void 0
									}
									return (
										this._config.step ||
											this._config.chunk ||
											((this._completeResults.data =
												this._completeResults.data.concat(T.data)),
											(this._completeResults.errors =
												this._completeResults.errors.concat(T.errors)),
											(this._completeResults.meta = T.meta)),
										this._completed ||
											!A ||
											!S(this._config.complete) ||
											(T && T.meta.aborted) ||
											(this._config.complete(
												this._completeResults,
												this._input
											),
											(this._completed = !0)),
										A || (T && T.meta.paused) || this._nextChunk(),
										T
									)
								}
								this._halted = !0
							}),
							(this._sendError = function (b) {
								S(this._config.error)
									? this._config.error(b)
									: s &&
										this._config.error &&
										n.postMessage({
											workerId: l.WORKER_ID,
											error: b,
											finished: !1
										})
							}))
					}
					function c(y) {
						var b
						;((y = y || {}).chunkSize || (y.chunkSize = l.RemoteChunkSize),
							f.call(this, y),
							(this._nextChunk = a
								? function () {
										;(this._readChunk(), this._chunkLoaded())
									}
								: function () {
										this._readChunk()
									}),
							(this.stream = function (O) {
								;((this._input = O), this._nextChunk())
							}),
							(this._readChunk = function () {
								if (this._finished) this._chunkLoaded()
								else {
									if (
										((b = new XMLHttpRequest()),
										this._config.withCredentials &&
											(b.withCredentials = this._config.withCredentials),
										a ||
											((b.onload = R(this._chunkLoaded, this)),
											(b.onerror = R(this._chunkError, this))),
										b.open(
											this._config.downloadRequestBody ? 'POST' : 'GET',
											this._input,
											!a
										),
										this._config.downloadRequestHeaders)
									) {
										var O,
											A = this._config.downloadRequestHeaders
										for (O in A) b.setRequestHeader(O, A[O])
									}
									var T
									this._config.chunkSize &&
										((T = this._start + this._config.chunkSize - 1),
										b.setRequestHeader(
											'Range',
											'bytes=' + this._start + '-' + T
										))
									try {
										b.send(this._config.downloadRequestBody)
									} catch (P) {
										this._chunkError(P.message)
									}
									a && b.status === 0 && this._chunkError()
								}
							}),
							(this._chunkLoaded = function () {
								b.readyState === 4 &&
									(b.status < 200 || 400 <= b.status
										? this._chunkError()
										: ((this._start +=
												this._config.chunkSize || b.responseText.length),
											(this._finished =
												!this._config.chunkSize ||
												this._start >=
													((O) =>
														(O = O.getResponseHeader('Content-Range')) !== null
															? parseInt(O.substring(O.lastIndexOf('/') + 1))
															: -1)(b)),
											this.parseChunk(b.responseText)))
							}),
							(this._chunkError = function (O) {
								;((O = b.statusText || O), this._sendError(new Error(O)))
							}))
					}
					function d(y) {
						;((y = y || {}).chunkSize || (y.chunkSize = l.LocalChunkSize),
							f.call(this, y))
						var b,
							O,
							A = typeof FileReader < 'u'
						;((this.stream = function (T) {
							;((this._input = T),
								(O = T.slice || T.webkitSlice || T.mozSlice),
								A
									? (((b = new FileReader()).onload = R(
											this._chunkLoaded,
											this
										)),
										(b.onerror = R(this._chunkError, this)))
									: (b = new FileReaderSync()),
								this._nextChunk())
						}),
							(this._nextChunk = function () {
								this._finished ||
									(this._config.preview &&
										!(this._rowCount < this._config.preview)) ||
									this._readChunk()
							}),
							(this._readChunk = function () {
								var T = this._input,
									P =
										(this._config.chunkSize &&
											((P = Math.min(
												this._start + this._config.chunkSize,
												this._input.size
											)),
											(T = O.call(T, this._start, P))),
										b.readAsText(T, this._config.encoding))
								A || this._chunkLoaded({ target: { result: P } })
							}),
							(this._chunkLoaded = function (T) {
								;((this._start += this._config.chunkSize),
									(this._finished =
										!this._config.chunkSize || this._start >= this._input.size),
									this.parseChunk(T.target.result))
							}),
							(this._chunkError = function () {
								this._sendError(b.error)
							}))
					}
					function h(y) {
						var b
						;(f.call(this, (y = y || {})),
							(this.stream = function (O) {
								return ((b = O), this._nextChunk())
							}),
							(this._nextChunk = function () {
								var O, A
								if (!this._finished)
									return (
										(O = this._config.chunkSize),
										(b = O
											? ((A = b.substring(0, O)), b.substring(O))
											: ((A = b), '')),
										(this._finished = !b),
										this.parseChunk(A)
									)
							}))
					}
					function g(y) {
						f.call(this, (y = y || {}))
						var b = [],
							O = !0,
							A = !1
						;((this.pause = function () {
							;(f.prototype.pause.apply(this, arguments), this._input.pause())
						}),
							(this.resume = function () {
								;(f.prototype.resume.apply(this, arguments),
									this._input.resume())
							}),
							(this.stream = function (T) {
								;((this._input = T),
									this._input.on('data', this._streamData),
									this._input.on('end', this._streamEnd),
									this._input.on('error', this._streamError))
							}),
							(this._checkIsFinished = function () {
								A && b.length === 1 && (this._finished = !0)
							}),
							(this._nextChunk = function () {
								;(this._checkIsFinished(),
									b.length ? this.parseChunk(b.shift()) : (O = !0))
							}),
							(this._streamData = R(function (T) {
								try {
									;(b.push(
										typeof T == 'string' ? T : T.toString(this._config.encoding)
									),
										O &&
											((O = !1),
											this._checkIsFinished(),
											this.parseChunk(b.shift())))
								} catch (P) {
									this._streamError(P)
								}
							}, this)),
							(this._streamError = R(function (T) {
								;(this._streamCleanUp(), this._sendError(T))
							}, this)),
							(this._streamEnd = R(function () {
								;(this._streamCleanUp(), (A = !0), this._streamData(''))
							}, this)),
							(this._streamCleanUp = R(function () {
								;(this._input.removeListener('data', this._streamData),
									this._input.removeListener('end', this._streamEnd),
									this._input.removeListener('error', this._streamError))
							}, this)))
					}
					function p(y) {
						var b,
							O,
							A,
							T,
							P = Math.pow(2, 53),
							k = -P,
							j = /^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,
							M =
								/^((\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z)))$/,
							q = this,
							I = 0,
							D = 0,
							N = !1,
							W = !1,
							oe = [],
							B = { data: [], errors: [], meta: {} }
						function re(Y) {
							return y.skipEmptyLines === 'greedy'
								? Y.join('').trim() === ''
								: Y.length === 1 && Y[0].length === 0
						}
						function Z() {
							if (
								(B &&
									A &&
									(Ce(
										'Delimiter',
										'UndetectableDelimiter',
										"Unable to auto-detect delimiting character; defaulted to '" +
											l.DefaultDelimiter +
											"'"
									),
									(A = !1)),
								y.skipEmptyLines &&
									(B.data = B.data.filter(function (V) {
										return !re(V)
									})),
								le())
							) {
								let V = function (F, ce) {
									;(S(y.transformHeader) && (F = y.transformHeader(F, ce)),
										oe.push(F))
								}
								if (B)
									if (Array.isArray(B.data[0])) {
										for (var Y = 0; le() && Y < B.data.length; Y++)
											B.data[Y].forEach(V)
										B.data.splice(0, 1)
									} else B.data.forEach(V)
							}
							function U(V, F) {
								for (var ce = y.header ? {} : [], Q = 0; Q < V.length; Q++) {
									var de = Q,
										ee = V[Q],
										ee = ((be, he) =>
											((we) => (
												y.dynamicTypingFunction &&
													y.dynamicTyping[we] === void 0 &&
													(y.dynamicTyping[we] = y.dynamicTypingFunction(we)),
												(y.dynamicTyping[we] || y.dynamicTyping) === !0
											))(be)
												? he === 'true' ||
													he === 'TRUE' ||
													(he !== 'false' &&
														he !== 'FALSE' &&
														(((we) => {
															if (
																j.test(we) &&
																((we = parseFloat(we)), k < we && we < P)
															)
																return 1
														})(he)
															? parseFloat(he)
															: M.test(he)
																? new Date(he)
																: he === ''
																	? null
																	: he))
												: he)(
											(de = y.header
												? Q >= oe.length
													? '__parsed_extra'
													: oe[Q]
												: de),
											(ee = y.transform ? y.transform(ee, de) : ee)
										)
									de === '__parsed_extra'
										? ((ce[de] = ce[de] || []), ce[de].push(ee))
										: (ce[de] = ee)
								}
								return (
									y.header &&
										(Q > oe.length
											? Ce(
													'FieldMismatch',
													'TooManyFields',
													'Too many fields: expected ' +
														oe.length +
														' fields but parsed ' +
														Q,
													D + F
												)
											: Q < oe.length &&
												Ce(
													'FieldMismatch',
													'TooFewFields',
													'Too few fields: expected ' +
														oe.length +
														' fields but parsed ' +
														Q,
													D + F
												)),
									ce
								)
							}
							var z
							B &&
								(y.header || y.dynamicTyping || y.transform) &&
								((z = 1),
								!B.data.length || Array.isArray(B.data[0])
									? ((B.data = B.data.map(U)), (z = B.data.length))
									: (B.data = U(B.data, 0)),
								y.header && B.meta && (B.meta.fields = oe),
								(D += z))
						}
						function le() {
							return y.header && oe.length === 0
						}
						function Ce(Y, U, z, V) {
							;((Y = { type: Y, code: U, message: z }),
								V !== void 0 && (Y.row = V),
								B.errors.push(Y))
						}
						;(S(y.step) &&
							((T = y.step),
							(y.step = function (Y) {
								;((B = Y),
									le()
										? Z()
										: (Z(),
											B.data.length !== 0 &&
												((I += Y.data.length),
												y.preview && I > y.preview
													? O.abort()
													: ((B.data = B.data[0]), T(B, q)))))
							})),
							(this.parse = function (Y, U, z) {
								var V = y.quoteChar || '"',
									V =
										(y.newline || (y.newline = this.guessLineEndings(Y, V)),
										(A = !1),
										y.delimiter
											? S(y.delimiter) &&
												((y.delimiter = y.delimiter(Y)),
												(B.meta.delimiter = y.delimiter))
											: ((V = ((F, ce, Q, de, ee) => {
													var be, he, we, Xe
													ee = ee || [
														',',
														'	',
														'|',
														';',
														l.RECORD_SEP,
														l.UNIT_SEP
													]
													for (var We = 0; We < ee.length; We++) {
														for (
															var ke,
																et = ee[We],
																Ue = 0,
																St = 0,
																Be = 0,
																tt =
																	((we = void 0),
																	new v({
																		comments: de,
																		delimiter: et,
																		newline: ce,
																		preview: 10
																	}).parse(F)),
																xt = 0;
															xt < tt.data.length;
															xt++
														)
															Q && re(tt.data[xt])
																? Be++
																: ((ke = tt.data[xt].length),
																	(St += ke),
																	we === void 0
																		? (we = ke)
																		: 0 < ke &&
																			((Ue += Math.abs(ke - we)), (we = ke)))
														;(0 < tt.data.length && (St /= tt.data.length - Be),
															(he === void 0 || Ue <= he) &&
																(Xe === void 0 || Xe < St) &&
																1.99 < St &&
																((he = Ue), (be = et), (Xe = St)))
													}
													return {
														successful: !!(y.delimiter = be),
														bestDelimiter: be
													}
												})(
													Y,
													y.newline,
													y.skipEmptyLines,
													y.comments,
													y.delimitersToGuess
												)).successful
													? (y.delimiter = V.bestDelimiter)
													: ((A = !0), (y.delimiter = l.DefaultDelimiter)),
												(B.meta.delimiter = y.delimiter)),
										E(y))
								return (
									y.preview && y.header && V.preview++,
									(b = Y),
									(O = new v(V)),
									(B = O.parse(b, U, z)),
									Z(),
									N ? { meta: { paused: !0 } } : B || { meta: { paused: !1 } }
								)
							}),
							(this.paused = function () {
								return N
							}),
							(this.pause = function () {
								;((N = !0),
									O.abort(),
									(b = S(y.chunk) ? '' : b.substring(O.getCharIndex())))
							}),
							(this.resume = function () {
								q.streamer._halted
									? ((N = !1), q.streamer.parseChunk(b, !0))
									: setTimeout(q.resume, 3)
							}),
							(this.aborted = function () {
								return W
							}),
							(this.abort = function () {
								;((W = !0),
									O.abort(),
									(B.meta.aborted = !0),
									S(y.complete) && y.complete(B),
									(b = ''))
							}),
							(this.guessLineEndings = function (F, V) {
								F = F.substring(0, 1048576)
								var V = new RegExp(m(V) + '([^]*?)' + m(V), 'gm'),
									z = (F = F.replace(V, '')).split('\r'),
									V = F.split(`
`),
									F = 1 < V.length && V[0].length < z[0].length
								if (z.length === 1 || F)
									return `
`
								for (var ce = 0, Q = 0; Q < z.length; Q++)
									z[Q][0] ===
										`
` && ce++
								return ce >= z.length / 2
									? `\r
`
									: '\r'
							}))
					}
					function m(y) {
						return y.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
					}
					function v(y) {
						var b = (y = y || {}).delimiter,
							O = y.newline,
							A = y.comments,
							T = y.step,
							P = y.preview,
							k = y.fastMode,
							j = null,
							M = !1,
							q = y.quoteChar == null ? '"' : y.quoteChar,
							I = q
						if (
							(y.escapeChar !== void 0 && (I = y.escapeChar),
							(typeof b != 'string' || -1 < l.BAD_DELIMITERS.indexOf(b)) &&
								(b = ','),
							A === b)
						)
							throw new Error('Comment character same as delimiter')
						;(A === !0
							? (A = '#')
							: (typeof A != 'string' || -1 < l.BAD_DELIMITERS.indexOf(A)) &&
								(A = !1),
							O !==
								`
` &&
								O !== '\r' &&
								O !==
									`\r
` &&
								(O = `
`))
						var D = 0,
							N = !1
						;((this.parse = function (W, oe, B) {
							if (typeof W != 'string')
								throw new Error('Input must be a string')
							var re = W.length,
								Z = b.length,
								le = O.length,
								Ce = A.length,
								Y = S(T),
								U = [],
								z = [],
								V = [],
								F = (D = 0)
							if (!W) return Ue()
							if (k || (k !== !1 && W.indexOf(q) === -1)) {
								for (var ce = W.split(O), Q = 0; Q < ce.length; Q++) {
									if (((V = ce[Q]), (D += V.length), Q !== ce.length - 1))
										D += O.length
									else if (B) return Ue()
									if (!A || V.substring(0, Ce) !== A) {
										if (Y) {
											if (((U = []), Xe(V.split(b)), St(), N)) return Ue()
										} else Xe(V.split(b))
										if (P && P <= Q) return ((U = U.slice(0, P)), Ue(!0))
									}
								}
								return Ue()
							}
							for (
								var de = W.indexOf(b, D),
									ee = W.indexOf(O, D),
									be = new RegExp(m(I) + m(q), 'g'),
									he = W.indexOf(q, D);
								;
							)
								if (W[D] === q)
									for (he = D, D++; ; ) {
										if ((he = W.indexOf(q, he + 1)) === -1)
											return (
												B ||
													z.push({
														type: 'Quotes',
														code: 'MissingQuotes',
														message: 'Quoted field unterminated',
														row: U.length,
														index: D
													}),
												ke()
											)
										if (he === re - 1)
											return ke(W.substring(D, he).replace(be, q))
										if (q === I && W[he + 1] === I) he++
										else if (q === I || he === 0 || W[he - 1] !== I) {
											de !== -1 && de < he + 1 && (de = W.indexOf(b, he + 1))
											var we = We(
												(ee =
													ee !== -1 && ee < he + 1
														? W.indexOf(O, he + 1)
														: ee) === -1
													? de
													: Math.min(de, ee)
											)
											if (W.substr(he + 1 + we, Z) === b) {
												;(V.push(W.substring(D, he).replace(be, q)),
													W[(D = he + 1 + we + Z)] !== q &&
														(he = W.indexOf(q, D)),
													(de = W.indexOf(b, D)),
													(ee = W.indexOf(O, D)))
												break
											}
											if (
												((we = We(ee)),
												W.substring(he + 1 + we, he + 1 + we + le) === O)
											) {
												if (
													(V.push(W.substring(D, he).replace(be, q)),
													et(he + 1 + we + le),
													(de = W.indexOf(b, D)),
													(he = W.indexOf(q, D)),
													Y && (St(), N))
												)
													return Ue()
												if (P && U.length >= P) return Ue(!0)
												break
											}
											;(z.push({
												type: 'Quotes',
												code: 'InvalidQuotes',
												message: 'Trailing quote on quoted field is malformed',
												row: U.length,
												index: D
											}),
												he++)
										}
									}
								else if (A && V.length === 0 && W.substring(D, D + Ce) === A) {
									if (ee === -1) return Ue()
									;((D = ee + le),
										(ee = W.indexOf(O, D)),
										(de = W.indexOf(b, D)))
								} else if (de !== -1 && (de < ee || ee === -1))
									(V.push(W.substring(D, de)),
										(D = de + Z),
										(de = W.indexOf(b, D)))
								else {
									if (ee === -1) break
									if ((V.push(W.substring(D, ee)), et(ee + le), Y && (St(), N)))
										return Ue()
									if (P && U.length >= P) return Ue(!0)
								}
							return ke()
							function Xe(Be) {
								;(U.push(Be), (F = D))
							}
							function We(Be) {
								var tt = 0
								return (tt =
									Be !== -1 &&
									(Be = W.substring(he + 1, Be)) &&
									Be.trim() === ''
										? Be.length
										: tt)
							}
							function ke(Be) {
								return (
									B ||
										(Be === void 0 && (Be = W.substring(D)),
										V.push(Be),
										(D = re),
										Xe(V),
										Y && St()),
									Ue()
								)
							}
							function et(Be) {
								;((D = Be), Xe(V), (V = []), (ee = W.indexOf(O, D)))
							}
							function Ue(Be) {
								if (y.header && !oe && U.length && !M) {
									var tt = U[0],
										xt = Object.create(null),
										At = new Set(tt)
									let Mt = !1
									for (let zt = 0; zt < tt.length; zt++) {
										let rt = tt[zt]
										if (
											xt[
												(rt = S(y.transformHeader)
													? y.transformHeader(rt, zt)
													: rt)
											]
										) {
											let $r,
												cn = xt[rt]
											for (; ($r = rt + '_' + cn), cn++, At.has($r); );
											;(At.add($r),
												(tt[zt] = $r),
												xt[rt]++,
												(Mt = !0),
												((j = j === null ? {} : j)[$r] = rt))
										} else ((xt[rt] = 1), (tt[zt] = rt))
										At.add(rt)
									}
									;(Mt && console.warn('Duplicate headers found and renamed.'),
										(M = !0))
								}
								return {
									data: U,
									errors: z,
									meta: {
										delimiter: b,
										linebreak: O,
										aborted: N,
										truncated: !!Be,
										cursor: F + (oe || 0),
										renamedHeaders: j
									}
								}
							}
							function St() {
								;(T(Ue()), (U = []), (z = []))
							}
						}),
							(this.abort = function () {
								N = !0
							}),
							(this.getCharIndex = function () {
								return D
							}))
					}
					function _(y) {
						var b = y.data,
							O = o[b.workerId],
							A = !1
						if (b.error) O.userError(b.error, b.file)
						else if (b.results && b.results.data) {
							var T = {
								abort: function () {
									;((A = !0),
										w(b.workerId, {
											data: [],
											errors: [],
											meta: { aborted: !0 }
										}))
								},
								pause: x,
								resume: x
							}
							if (S(O.userStep)) {
								for (
									var P = 0;
									P < b.results.data.length &&
									(O.userStep(
										{
											data: b.results.data[P],
											errors: b.results.errors,
											meta: b.results.meta
										},
										T
									),
									!A);
									P++
								);
								delete b.results
							} else
								S(O.userChunk) &&
									(O.userChunk(b.results, T, b.file), delete b.results)
						}
						b.finished && !A && w(b.workerId, b.results)
					}
					function w(y, b) {
						var O = o[y]
						;(S(O.userComplete) && O.userComplete(b),
							O.terminate(),
							delete o[y])
					}
					function x() {
						throw new Error('Not implemented.')
					}
					function E(y) {
						if (typeof y != 'object' || y === null) return y
						var b,
							O = Array.isArray(y) ? [] : {}
						for (b in y) O[b] = E(y[b])
						return O
					}
					function R(y, b) {
						return function () {
							y.apply(b, arguments)
						}
					}
					function S(y) {
						return typeof y == 'function'
					}
					return (
						(l.parse = function (y, b) {
							var O = (b = b || {}).dynamicTyping || !1
							if (
								(S(O) && ((b.dynamicTypingFunction = O), (O = {})),
								(b.dynamicTyping = O),
								(b.transform = !!S(b.transform) && b.transform),
								!b.worker || !l.WORKERS_SUPPORTED)
							)
								return (
									(O = null),
									l.NODE_STREAM_INPUT,
									typeof y == 'string'
										? ((y = ((A) =>
												A.charCodeAt(0) !== 65279 ? A : A.slice(1))(y)),
											(O = new (b.download ? c : h)(b)))
										: y.readable === !0 && S(y.read) && S(y.on)
											? (O = new g(b))
											: ((n.File && y instanceof File) ||
													y instanceof Object) &&
												(O = new d(b)),
									O.stream(y)
								)
							;(((O = (() => {
								var A
								return (
									!!l.WORKERS_SUPPORTED &&
									((A = (() => {
										var T = n.URL || n.webkitURL || null,
											P = r.toString()
										return (
											l.BLOB_URL ||
											(l.BLOB_URL = T.createObjectURL(
												new Blob(
													[
														"var global = (function() { if (typeof self !== 'undefined') { return self; } if (typeof window !== 'undefined') { return window; } if (typeof global !== 'undefined') { return global; } return {}; })(); global.IS_PAPA_WORKER=true; ",
														'(',
														P,
														')();'
													],
													{ type: 'text/javascript' }
												)
											))
										)
									})()),
									((A = new n.Worker(A)).onmessage = _),
									(A.id = u++),
									(o[A.id] = A))
								)
							})()).userStep = b.step),
								(O.userChunk = b.chunk),
								(O.userComplete = b.complete),
								(O.userError = b.error),
								(b.step = S(b.step)),
								(b.chunk = S(b.chunk)),
								(b.complete = S(b.complete)),
								(b.error = S(b.error)),
								delete b.worker,
								O.postMessage({ input: y, config: b, workerId: O.id }))
						}),
						(l.unparse = function (y, b) {
							var O = !1,
								A = !0,
								T = ',',
								P = `\r
`,
								k = '"',
								j = k + k,
								M = !1,
								q = null,
								I = !1,
								D =
									((() => {
										if (typeof b == 'object') {
											if (
												(typeof b.delimiter != 'string' ||
													l.BAD_DELIMITERS.filter(function (oe) {
														return b.delimiter.indexOf(oe) !== -1
													}).length ||
													(T = b.delimiter),
												(typeof b.quotes != 'boolean' &&
													typeof b.quotes != 'function' &&
													!Array.isArray(b.quotes)) ||
													(O = b.quotes),
												(typeof b.skipEmptyLines != 'boolean' &&
													typeof b.skipEmptyLines != 'string') ||
													(M = b.skipEmptyLines),
												typeof b.newline == 'string' && (P = b.newline),
												typeof b.quoteChar == 'string' && (k = b.quoteChar),
												typeof b.header == 'boolean' && (A = b.header),
												Array.isArray(b.columns))
											) {
												if (b.columns.length === 0)
													throw new Error('Option columns is empty')
												q = b.columns
											}
											;(b.escapeChar !== void 0 && (j = b.escapeChar + k),
												b.escapeFormulae instanceof RegExp
													? (I = b.escapeFormulae)
													: typeof b.escapeFormulae == 'boolean' &&
														b.escapeFormulae &&
														(I = /^[=+\-@\t\r].*$/))
										}
									})(),
									new RegExp(m(k), 'g'))
							if (
								(typeof y == 'string' && (y = JSON.parse(y)), Array.isArray(y))
							) {
								if (!y.length || Array.isArray(y[0])) return N(null, y, M)
								if (typeof y[0] == 'object')
									return N(q || Object.keys(y[0]), y, M)
							} else if (typeof y == 'object')
								return (
									typeof y.data == 'string' && (y.data = JSON.parse(y.data)),
									Array.isArray(y.data) &&
										(y.fields || (y.fields = (y.meta && y.meta.fields) || q),
										y.fields ||
											(y.fields = Array.isArray(y.data[0])
												? y.fields
												: typeof y.data[0] == 'object'
													? Object.keys(y.data[0])
													: []),
										Array.isArray(y.data[0]) ||
											typeof y.data[0] == 'object' ||
											(y.data = [y.data])),
									N(y.fields || [], y.data || [], M)
								)
							throw new Error('Unable to serialize unrecognized input')
							function N(oe, B, re) {
								var Z = '',
									le =
										(typeof oe == 'string' && (oe = JSON.parse(oe)),
										typeof B == 'string' && (B = JSON.parse(B)),
										Array.isArray(oe) && 0 < oe.length),
									Ce = !Array.isArray(B[0])
								if (le && A) {
									for (var Y = 0; Y < oe.length; Y++)
										(0 < Y && (Z += T), (Z += W(oe[Y], Y)))
									0 < B.length && (Z += P)
								}
								for (var U = 0; U < B.length; U++) {
									var z = (le ? oe : B[U]).length,
										V = !1,
										F = le ? Object.keys(B[U]).length === 0 : B[U].length === 0
									if (
										(re &&
											!le &&
											(V =
												re === 'greedy'
													? B[U].join('').trim() === ''
													: B[U].length === 1 && B[U][0].length === 0),
										re === 'greedy' && le)
									) {
										for (var ce = [], Q = 0; Q < z; Q++) {
											var de = Ce ? oe[Q] : Q
											ce.push(B[U][de])
										}
										V = ce.join('').trim() === ''
									}
									if (!V) {
										for (var ee = 0; ee < z; ee++) {
											0 < ee && !F && (Z += T)
											var be = le && Ce ? oe[ee] : ee
											Z += W(B[U][be], ee)
										}
										U < B.length - 1 && (!re || (0 < z && !F)) && (Z += P)
									}
								}
								return Z
							}
							function W(oe, B) {
								var re, Z
								return oe == null
									? ''
									: oe.constructor === Date
										? JSON.stringify(oe).slice(1, 25)
										: ((Z = !1),
											I &&
												typeof oe == 'string' &&
												I.test(oe) &&
												((oe = "'" + oe), (Z = !0)),
											(re = oe.toString().replace(D, j)),
											(Z =
												Z ||
												O === !0 ||
												(typeof O == 'function' && O(oe, B)) ||
												(Array.isArray(O) && O[B]) ||
												((le, Ce) => {
													for (var Y = 0; Y < Ce.length; Y++)
														if (-1 < le.indexOf(Ce[Y])) return !0
													return !1
												})(re, l.BAD_DELIMITERS) ||
												-1 < re.indexOf(T) ||
												re.charAt(0) === ' ' ||
												re.charAt(re.length - 1) === ' ')
												? k + re + k
												: re)
							}
						}),
						(l.RECORD_SEP = ''),
						(l.UNIT_SEP = ''),
						(l.BYTE_ORDER_MARK = '\uFEFF'),
						(l.BAD_DELIMITERS = [
							'\r',
							`
`,
							'"',
							l.BYTE_ORDER_MARK
						]),
						(l.WORKERS_SUPPORTED = !a && !!n.Worker),
						(l.NODE_STREAM_INPUT = 1),
						(l.LocalChunkSize = 10485760),
						(l.RemoteChunkSize = 5242880),
						(l.DefaultDelimiter = ','),
						(l.Parser = v),
						(l.ParserHandle = p),
						(l.NetworkStreamer = c),
						(l.FileStreamer = d),
						(l.StringStreamer = h),
						(l.ReadableStreamStreamer = g),
						n.jQuery &&
							((i = n.jQuery).fn.parse = function (y) {
								var b = y.config || {},
									O = []
								return (
									this.each(function (P) {
										if (
											!(
												i(this).prop('tagName').toUpperCase() === 'INPUT' &&
												i(this).attr('type').toLowerCase() === 'file' &&
												n.FileReader
											) ||
											!this.files ||
											this.files.length === 0
										)
											return !0
										for (var k = 0; k < this.files.length; k++)
											O.push({
												file: this.files[k],
												inputElem: this,
												instanceConfig: i.extend({}, b)
											})
									}),
									A(),
									this
								)
								function A() {
									if (O.length === 0) S(y.complete) && y.complete()
									else {
										var P,
											k,
											j,
											M,
											q = O[0]
										if (S(y.before)) {
											var I = y.before(q.file, q.inputElem)
											if (typeof I == 'object') {
												if (I.action === 'abort')
													return (
														(P = 'AbortError'),
														(k = q.file),
														(j = q.inputElem),
														(M = I.reason),
														void (S(y.error) && y.error({ name: P }, k, j, M))
													)
												if (I.action === 'skip') return void T()
												typeof I.config == 'object' &&
													(q.instanceConfig = i.extend(
														q.instanceConfig,
														I.config
													))
											} else if (I === 'skip') return void T()
										}
										var D = q.instanceConfig.complete
										;((q.instanceConfig.complete = function (N) {
											;(S(D) && D(N, q.file, q.inputElem), T())
										}),
											l.parse(q.file, q.instanceConfig))
									}
								}
								function T() {
									;(O.splice(0, 1), A())
								}
							}),
						s &&
							(n.onmessage = function (y) {
								;((y = y.data),
									l.WORKER_ID === void 0 && y && (l.WORKER_ID = y.workerId),
									typeof y.input == 'string'
										? n.postMessage({
												workerId: l.WORKER_ID,
												results: l.parse(y.input, y.config),
												finished: !0
											})
										: ((n.File && y.input instanceof File) ||
												y.input instanceof Object) &&
											(y = l.parse(y.input, y.config)) &&
											n.postMessage({
												workerId: l.WORKER_ID,
												results: y,
												finished: !0
											}))
							}),
						((c.prototype = Object.create(f.prototype)).constructor = c),
						((d.prototype = Object.create(f.prototype)).constructor = d),
						((h.prototype = Object.create(h.prototype)).constructor = h),
						((g.prototype = Object.create(f.prototype)).constructor = g),
						l
					)
				})
			})(Bs)),
		Bs.exports
	)
}
xM()
var RM = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	OM = /^\w*$/
function CM(e, t) {
	if (Zr(e)) return !1
	var r = typeof e
	return r == 'number' || r == 'symbol' || r == 'boolean' || e == null || qo(e)
		? !0
		: OM.test(e) || !RM.test(e) || (t != null && e in Object(t))
}
var TM = 'Expected a function'
function Dp(e, t) {
	if (typeof e != 'function' || (t != null && typeof t != 'function'))
		throw new TypeError(TM)
	var r = function () {
		var n = arguments,
			i = t ? t.apply(this, n) : n[0],
			a = r.cache
		if (a.has(i)) return a.get(i)
		var s = e.apply(this, n)
		return ((r.cache = a.set(i, s) || a), s)
	}
	return ((r.cache = new (Dp.Cache || an)()), r)
}
Dp.Cache = an
var EM = 500
function AM(e) {
	var t = Dp(e, function (n) {
			return (r.size === EM && r.clear(), n)
		}),
		r = t.cache
	return t
}
var MM =
		/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
	PM = /\\(\\)?/g,
	IM = AM(function (e) {
		var t = []
		return (
			e.charCodeAt(0) === 46 && t.push(''),
			e.replace(MM, function (r, n, i, a) {
				t.push(i ? a.replace(PM, '$1') : n || r)
			}),
			t
		)
	}),
	Av = Ar ? Ar.prototype : void 0,
	Mv = Av ? Av.toString : void 0
function MS(e) {
	if (typeof e == 'string') return e
	if (Zr(e)) return RT(e, MS) + ''
	if (qo(e)) return Mv ? Mv.call(e) : ''
	var t = e + ''
	return t == '0' && 1 / e == -1 / 0 ? '-0' : t
}
function kM(e) {
	return e == null ? '' : MS(e)
}
function PS(e, t) {
	return Zr(e) ? e : CM(e, t) ? [e] : IM(kM(e))
}
function IS(e) {
	if (typeof e == 'string' || qo(e)) return e
	var t = e + ''
	return t == '0' && 1 / e == -1 / 0 ? '-0' : t
}
function qM(e, t) {
	t = PS(t, e)
	for (var r = 0, n = t.length; e != null && r < n; ) e = e[IS(t[r++])]
	return r && r == n ? e : void 0
}
function uV(e, t, r) {
	var n = e == null ? void 0 : qM(e, t)
	return n === void 0 ? r : n
}
function $M(e, t, r) {
	t = PS(t, e)
	for (var n = -1, i = t.length, a = !1; ++n < i; ) {
		var s = IS(t[n])
		if (!(a = e != null && r(e, s))) break
		e = e[s]
	}
	return a || ++n != i
		? a
		: ((i = e == null ? 0 : e.length),
			!!i && Ip(i) && CS(s, i) && (Zr(e) || Pp(e)))
}
var Wn = {},
	Oe = {},
	Pv
function Ei() {
	if (Pv) return Oe
	Pv = 1
	var e =
			(Oe && Oe.__assign) ||
			function () {
				return (
					(e =
						Object.assign ||
						function (_) {
							for (var w, x = 1, E = arguments.length; x < E; x++) {
								w = arguments[x]
								for (var R in w)
									Object.prototype.hasOwnProperty.call(w, R) && (_[R] = w[R])
							}
							return _
						}),
					e.apply(this, arguments)
				)
			},
		t =
			(Oe && Oe.__createBinding) ||
			(Object.create
				? function (_, w, x, E) {
						;(E === void 0 && (E = x),
							Object.defineProperty(_, E, {
								enumerable: !0,
								get: function () {
									return w[x]
								}
							}))
					}
				: function (_, w, x, E) {
						;(E === void 0 && (E = x), (_[E] = w[x]))
					}),
		r =
			(Oe && Oe.__setModuleDefault) ||
			(Object.create
				? function (_, w) {
						Object.defineProperty(_, 'default', { enumerable: !0, value: w })
					}
				: function (_, w) {
						_.default = w
					}),
		n =
			(Oe && Oe.__importStar) ||
			function (_) {
				if (_ && _.__esModule) return _
				var w = {}
				if (_ != null)
					for (var x in _)
						x !== 'default' &&
							Object.prototype.hasOwnProperty.call(_, x) &&
							t(w, _, x)
				return (r(w, _), w)
			},
		i =
			(Oe && Oe.__spreadArray) ||
			function (_, w, x) {
				if (x || arguments.length === 2)
					for (var E = 0, R = w.length, S; E < R; E++)
						(S || !(E in w)) &&
							(S || (S = Array.prototype.slice.call(w, 0, E)), (S[E] = w[E]))
				return _.concat(S || Array.prototype.slice.call(w))
			}
	;(Object.defineProperty(Oe, '__esModule', { value: !0 }),
		(Oe.Priority =
			Oe.isModKey =
			Oe.shouldRejectKeystrokes =
			Oe.useThrottledValue =
			Oe.getScrollbarWidth =
			Oe.useIsomorphicLayout =
			Oe.noop =
			Oe.createAction =
			Oe.randomId =
			Oe.usePointerMovedSinceMount =
			Oe.useOuterClick =
			Oe.swallowEvent =
				void 0))
	var a = n(Jt())
	function s(_) {
		;(_.stopPropagation(), _.preventDefault())
	}
	Oe.swallowEvent = s
	function o(_, w) {
		var x = a.useRef(w)
		;((x.current = w),
			a.useEffect(
				function () {
					function E(R) {
						var S, y
						;(!((S = _.current) === null || S === void 0) &&
							S.contains(R.target)) ||
							R.target ===
								((y = _.current) === null || y === void 0
									? void 0
									: y.getRootNode().host) ||
							(R.preventDefault(), R.stopPropagation(), x.current())
					}
					return (
						window.addEventListener('pointerdown', E, !0),
						function () {
							return window.removeEventListener('pointerdown', E, !0)
						}
					)
				},
				[_]
			))
	}
	Oe.useOuterClick = o
	function u() {
		var _ = a.useState(!1),
			w = _[0],
			x = _[1]
		return (
			a.useEffect(
				function () {
					function E() {
						x(!0)
					}
					if (!w)
						return (
							window.addEventListener('pointermove', E),
							function () {
								return window.removeEventListener('pointermove', E)
							}
						)
				},
				[w]
			),
			w
		)
	}
	Oe.usePointerMovedSinceMount = u
	function l() {
		return Math.random().toString(36).substring(2, 9)
	}
	Oe.randomId = l
	function f(_) {
		return e({ id: l() }, _)
	}
	Oe.createAction = f
	function c() {}
	;((Oe.noop = c),
		(Oe.useIsomorphicLayout = typeof window > 'u' ? c : a.useLayoutEffect))
	function d() {
		var _ = document.createElement('div')
		;((_.style.visibility = 'hidden'),
			(_.style.overflow = 'scroll'),
			document.body.appendChild(_))
		var w = document.createElement('div')
		_.appendChild(w)
		var x = _.offsetWidth - w.offsetWidth
		return (_.parentNode.removeChild(_), x)
	}
	Oe.getScrollbarWidth = d
	function h(_, w) {
		w === void 0 && (w = 100)
		var x = a.useState(_),
			E = x[0],
			R = x[1],
			S = a.useRef(Date.now())
		return (
			a.useEffect(
				function () {
					if (w !== 0) {
						var y = setTimeout(
							function () {
								;(R(_), (S.current = Date.now()))
							},
							S.current - (Date.now() - w)
						)
						return function () {
							clearTimeout(y)
						}
					}
				},
				[w, _]
			),
			w === 0 ? _ : E
		)
	}
	Oe.useThrottledValue = h
	function g(_) {
		var w,
			x,
			E = _ === void 0 ? { ignoreWhenFocused: [] } : _,
			R = E.ignoreWhenFocused,
			S = i(['input', 'textarea'], R, !0).map(function (O) {
				return O.toLowerCase()
			}),
			y = document.activeElement,
			b =
				y &&
				(S.indexOf(y.tagName.toLowerCase()) !== -1 ||
					((w = y.attributes.getNamedItem('role')) === null || w === void 0
						? void 0
						: w.value) === 'textbox' ||
					((x = y.attributes.getNamedItem('contenteditable')) === null ||
					x === void 0
						? void 0
						: x.value) === 'true')
		return b
	}
	Oe.shouldRejectKeystrokes = g
	var p = typeof window > 'u',
		m = !p && window.navigator.platform === 'MacIntel'
	function v(_) {
		return m ? _.metaKey : _.ctrlKey
	}
	return (
		(Oe.isModKey = v),
		(Oe.Priority = { HIGH: 1, NORMAL: 0, LOW: -1 }),
		Oe
	)
}
var nr = {},
	Pt = {},
	Fr = {},
	vt = {},
	qa = { exports: {} },
	FM = qa.exports,
	Iv
function DM() {
	return (
		Iv ||
			((Iv = 1),
			(function (e, t) {
				;(function (r, n) {
					n(t)
				})(FM, function (r) {
					var n = typeof WeakSet == 'function',
						i = Object.keys
					function a(O, A) {
						return O === A || (O !== O && A !== A)
					}
					function s(O) {
						return O.constructor === Object || O.constructor == null
					}
					function o(O) {
						return !!O && typeof O.then == 'function'
					}
					function u(O) {
						return !!(O && O.$$typeof)
					}
					function l() {
						var O = []
						return {
							add: function (A) {
								O.push(A)
							},
							has: function (A) {
								return O.indexOf(A) !== -1
							}
						}
					}
					var f = (function (O) {
						return O
							? function () {
									return new WeakSet()
								}
							: l
					})(n)
					function c(O) {
						return function (T) {
							var P = O || T
							return function (j, M, q) {
								q === void 0 && (q = f())
								var I = !!j && typeof j == 'object',
									D = !!M && typeof M == 'object'
								if (I || D) {
									var N = I && q.has(j),
										W = D && q.has(M)
									if (N || W) return N && W
									;(I && q.add(j), D && q.add(M))
								}
								return P(j, M, q)
							}
						}
					}
					function d(O, A, T, P) {
						var k = O.length
						if (A.length !== k) return !1
						for (; k-- > 0; ) if (!T(O[k], A[k], P)) return !1
						return !0
					}
					function h(O, A, T, P) {
						var k = O.size === A.size
						if (k && O.size) {
							var j = {}
							O.forEach(function (M, q) {
								if (k) {
									var I = !1,
										D = 0
									;(A.forEach(function (N, W) {
										;(!I &&
											!j[D] &&
											((I = T(q, W, P) && T(M, N, P)), I && (j[D] = !0)),
											D++)
									}),
										(k = I))
								}
							})
						}
						return k
					}
					var g = '_owner',
						p = Function.prototype.bind.call(
							Function.prototype.call,
							Object.prototype.hasOwnProperty
						)
					function m(O, A, T, P) {
						var k = i(O),
							j = k.length
						if (i(A).length !== j) return !1
						if (j)
							for (var M = void 0; j-- > 0; ) {
								if (((M = k[j]), M === g)) {
									var q = u(O),
										I = u(A)
									if ((q || I) && q !== I) return !1
								}
								if (!p(A, M) || !T(O[M], A[M], P)) return !1
							}
						return !0
					}
					function v(O, A) {
						return (
							O.source === A.source &&
							O.global === A.global &&
							O.ignoreCase === A.ignoreCase &&
							O.multiline === A.multiline &&
							O.unicode === A.unicode &&
							O.sticky === A.sticky &&
							O.lastIndex === A.lastIndex
						)
					}
					function _(O, A, T, P) {
						var k = O.size === A.size
						if (k && O.size) {
							var j = {}
							O.forEach(function (M) {
								if (k) {
									var q = !1,
										I = 0
									;(A.forEach(function (D) {
										;(!q && !j[I] && ((q = T(M, D, P)), q && (j[I] = !0)), I++)
									}),
										(k = q))
								}
							})
						}
						return k
					}
					var w = typeof Map == 'function',
						x = typeof Set == 'function'
					function E(O) {
						var A = typeof O == 'function' ? O(T) : T
						function T(P, k, j) {
							if (P === k) return !0
							if (P && k && typeof P == 'object' && typeof k == 'object') {
								if (s(P) && s(k)) return m(P, k, A, j)
								var M = Array.isArray(P),
									q = Array.isArray(k)
								return M || q
									? M === q && d(P, k, A, j)
									: ((M = P instanceof Date),
										(q = k instanceof Date),
										M || q
											? M === q && a(P.getTime(), k.getTime())
											: ((M = P instanceof RegExp),
												(q = k instanceof RegExp),
												M || q
													? M === q && v(P, k)
													: o(P) || o(k)
														? P === k
														: w &&
															  ((M = P instanceof Map),
															  (q = k instanceof Map),
															  M || q)
															? M === q && h(P, k, A, j)
															: x &&
																  ((M = P instanceof Set),
																  (q = k instanceof Set),
																  M || q)
																? M === q && _(P, k, A, j)
																: m(P, k, A, j)))
							}
							return P !== P && k !== k
						}
						return T
					}
					var R = E(),
						S = E(function () {
							return a
						}),
						y = E(c()),
						b = E(c(a))
					;((r.circularDeepEqual = y),
						(r.circularShallowEqual = b),
						(r.createCustomEqual = E),
						(r.deepEqual = R),
						(r.sameValueZeroEqual = a),
						(r.shallowEqual = S),
						Object.defineProperty(r, '__esModule', { value: !0 }))
				})
			})(qa, qa.exports)),
		qa.exports
	)
}
var sl, kv
function Np() {
	if (kv) return sl
	kv = 1
	var e = 'Invariant failed'
	function t(r, n) {
		if (!r) throw new Error(e)
	}
	return ((sl = t), sl)
}
var Dr = {},
	Kn = {},
	Oa = {},
	qv
function NM() {
	if (qv) return Oa
	;((qv = 1),
		Object.defineProperty(Oa, '__esModule', { value: !0 }),
		(Oa.Command = void 0))
	var e = (function () {
		function t(r, n) {
			var i = this
			;(n === void 0 && (n = {}),
				(this.perform = function () {
					var a = r.perform()
					if (typeof a == 'function') {
						var s = n.history
						s &&
							(i.historyItem && s.remove(i.historyItem),
							(i.historyItem = s.add({ perform: r.perform, negate: a })),
							(i.history = {
								undo: function () {
									return s.undo(i.historyItem)
								},
								redo: function () {
									return s.redo(i.historyItem)
								}
							}))
					}
				}))
		}
		return t
	})()
	return ((Oa.Command = e), Oa)
}
var $v
function kS() {
	if ($v) return Kn
	$v = 1
	var e =
		(Kn && Kn.__importDefault) ||
		function (s) {
			return s && s.__esModule ? s : { default: s }
		}
	;(Object.defineProperty(Kn, '__esModule', { value: !0 }),
		(Kn.ActionImpl = void 0))
	var t = e(Np()),
		r = NM(),
		n = Ei(),
		i = function (s) {
			var o = s.keywords,
				u = o === void 0 ? '' : o,
				l = s.section,
				f = l === void 0 ? '' : l
			return (u + ' ' + (typeof f == 'string' ? f : f.name)).trim()
		},
		a = (function () {
			function s(o, u) {
				var l = this,
					f
				;((this.priority = n.Priority.NORMAL),
					(this.ancestors = []),
					(this.children = []),
					Object.assign(this, o),
					(this.id = o.id),
					(this.name = o.name),
					(this.keywords = i(o)))
				var c = o.perform
				if (
					((this.command =
						c &&
						new r.Command(
							{
								perform: function () {
									return c(l)
								}
							},
							{ history: u.history }
						)),
					(this.perform =
						(f = this.command) === null || f === void 0 ? void 0 : f.perform),
					o.parent)
				) {
					var d = u.store[o.parent]
					;((0, t.default)(
						d,
						'attempted to create an action whos parent: ' +
							o.parent +
							' does not exist in the store.'
					),
						d.addChild(this))
				}
			}
			return (
				(s.prototype.addChild = function (o) {
					o.ancestors.unshift(this)
					for (var u = this.parentActionImpl; u; )
						(o.ancestors.unshift(u), (u = u.parentActionImpl))
					this.children.push(o)
				}),
				(s.prototype.removeChild = function (o) {
					var u = this,
						l = this.children.indexOf(o)
					;(l !== -1 && this.children.splice(l, 1),
						o.children &&
							o.children.forEach(function (f) {
								u.removeChild(f)
							}))
				}),
				Object.defineProperty(s.prototype, 'parentActionImpl', {
					get: function () {
						return this.ancestors[this.ancestors.length - 1]
					},
					enumerable: !1,
					configurable: !0
				}),
				(s.create = function (o, u) {
					return new s(o, u)
				}),
				s
			)
		})()
	return ((Kn.ActionImpl = a), Kn)
}
var Fv
function qS() {
	if (Fv) return Dr
	Fv = 1
	var e =
			(Dr && Dr.__assign) ||
			function () {
				return (
					(e =
						Object.assign ||
						function (a) {
							for (var s, o = 1, u = arguments.length; o < u; o++) {
								s = arguments[o]
								for (var l in s)
									Object.prototype.hasOwnProperty.call(s, l) && (a[l] = s[l])
							}
							return a
						}),
					e.apply(this, arguments)
				)
			},
		t =
			(Dr && Dr.__importDefault) ||
			function (a) {
				return a && a.__esModule ? a : { default: a }
			}
	;(Object.defineProperty(Dr, '__esModule', { value: !0 }),
		(Dr.ActionInterface = void 0))
	var r = t(Np()),
		n = kS(),
		i = (function () {
			function a(s, o) {
				;(s === void 0 && (s = []),
					o === void 0 && (o = {}),
					(this.actions = {}),
					(this.options = o),
					this.add(s))
			}
			return (
				(a.prototype.add = function (s) {
					for (var o = 0; o < s.length; o++) {
						var u = s[o]
						;(u.parent &&
							(0, r.default)(
								this.actions[u.parent],
								'Attempted to create action "' +
									u.name +
									'" without registering its parent "' +
									u.parent +
									'" first.'
							),
							(this.actions[u.id] = n.ActionImpl.create(u, {
								history: this.options.historyManager,
								store: this.actions
							})))
					}
					return e({}, this.actions)
				}),
				(a.prototype.remove = function (s) {
					var o = this
					return (
						s.forEach(function (u) {
							var l = o.actions[u.id]
							if (l) {
								for (var f = l.children; f.length; ) {
									var c = f.pop()
									if (!c) return
									;(delete o.actions[c.id],
										c.parentActionImpl && c.parentActionImpl.removeChild(c),
										c.children && f.push.apply(f, c.children))
								}
								;(l.parentActionImpl && l.parentActionImpl.removeChild(l),
									delete o.actions[u.id])
							}
						}),
						e({}, this.actions)
					)
				}),
				a
			)
		})()
	return ((Dr.ActionInterface = i), Dr)
}
var Qn = {},
	Dv
function LM() {
	if (Dv) return Qn
	;((Dv = 1),
		Object.defineProperty(Qn, '__esModule', { value: !0 }),
		(Qn.history = Qn.HistoryItemImpl = void 0))
	var e = Ei(),
		t = (function () {
			function i(a) {
				;((this.perform = a.perform), (this.negate = a.negate))
			}
			return (
				(i.create = function (a) {
					return new i(a)
				}),
				i
			)
		})()
	Qn.HistoryItemImpl = t
	var r = (function () {
			function i() {
				return (
					(this.undoStack = []),
					(this.redoStack = []),
					i.instance || ((i.instance = this), this.init()),
					i.instance
				)
			}
			return (
				(i.prototype.init = function () {
					var a = this
					typeof window > 'u' ||
						window.addEventListener('keydown', function (s) {
							var o
							if (
								!(
									(!a.redoStack.length && !a.undoStack.length) ||
									(0, e.shouldRejectKeystrokes)()
								)
							) {
								var u =
									(o = s.key) === null || o === void 0
										? void 0
										: o.toLowerCase()
								s.metaKey && u === 'z' && s.shiftKey
									? a.redo()
									: s.metaKey && u === 'z' && a.undo()
							}
						})
				}),
				(i.prototype.add = function (a) {
					var s = t.create(a)
					return (this.undoStack.push(s), s)
				}),
				(i.prototype.remove = function (a) {
					var s = this.undoStack.findIndex(function (u) {
						return u === a
					})
					if (s !== -1) {
						this.undoStack.splice(s, 1)
						return
					}
					var o = this.redoStack.findIndex(function (u) {
						return u === a
					})
					o !== -1 && this.redoStack.splice(o, 1)
				}),
				(i.prototype.undo = function (a) {
					if (!a) {
						var s = this.undoStack.pop()
						return s
							? (s == null || s.negate(), this.redoStack.push(s), s)
							: void 0
					}
					var o = this.undoStack.findIndex(function (u) {
						return u === a
					})
					if (o !== -1)
						return (
							this.undoStack.splice(o, 1),
							a.negate(),
							this.redoStack.push(a),
							a
						)
				}),
				(i.prototype.redo = function (a) {
					if (!a) {
						var s = this.redoStack.pop()
						return s
							? (s == null || s.perform(), this.undoStack.push(s), s)
							: void 0
					}
					var o = this.redoStack.findIndex(function (u) {
						return u === a
					})
					if (o !== -1)
						return (
							this.redoStack.splice(o, 1),
							a.perform(),
							this.undoStack.push(a),
							a
						)
				}),
				(i.prototype.reset = function () {
					;(this.undoStack.splice(0), this.redoStack.splice(0))
				}),
				i
			)
		})(),
		n = new r()
	return ((Qn.history = n), Object.freeze(n), Qn)
}
var ol = {},
	Nv
function ga() {
	return (
		Nv ||
			((Nv = 1),
			(function (e) {
				;(Object.defineProperty(e, '__esModule', { value: !0 }),
					(e.VisualState = void 0),
					(function (t) {
						;((t.animatingIn = 'animating-in'),
							(t.showing = 'showing'),
							(t.animatingOut = 'animating-out'),
							(t.hidden = 'hidden'))
					})(e.VisualState || (e.VisualState = {})))
			})(ol)),
		ol
	)
}
var Lv
function jM() {
	if (Lv) return vt
	Lv = 1
	var e =
			(vt && vt.__assign) ||
			function () {
				return (
					(e =
						Object.assign ||
						function (g) {
							for (var p, m = 1, v = arguments.length; m < v; m++) {
								p = arguments[m]
								for (var _ in p)
									Object.prototype.hasOwnProperty.call(p, _) && (g[_] = p[_])
							}
							return g
						}),
					e.apply(this, arguments)
				)
			},
		t =
			(vt && vt.__createBinding) ||
			(Object.create
				? function (g, p, m, v) {
						;(v === void 0 && (v = m),
							Object.defineProperty(g, v, {
								enumerable: !0,
								get: function () {
									return p[m]
								}
							}))
					}
				: function (g, p, m, v) {
						;(v === void 0 && (v = m), (g[v] = p[m]))
					}),
		r =
			(vt && vt.__setModuleDefault) ||
			(Object.create
				? function (g, p) {
						Object.defineProperty(g, 'default', { enumerable: !0, value: p })
					}
				: function (g, p) {
						g.default = p
					}),
		n =
			(vt && vt.__importStar) ||
			function (g) {
				if (g && g.__esModule) return g
				var p = {}
				if (g != null)
					for (var m in g)
						m !== 'default' &&
							Object.prototype.hasOwnProperty.call(g, m) &&
							t(p, g, m)
				return (r(p, g), p)
			},
		i =
			(vt && vt.__importDefault) ||
			function (g) {
				return g && g.__esModule ? g : { default: g }
			}
	;(Object.defineProperty(vt, '__esModule', { value: !0 }),
		(vt.useStore = void 0))
	var a = DM(),
		s = n(Jt()),
		o = i(Np()),
		u = qS(),
		l = LM(),
		f = ga()
	function c(g) {
		var p = s.useRef(
				e({ animations: { enterMs: 200, exitMs: 100 } }, g.options)
			),
			m = s.useMemo(function () {
				return new u.ActionInterface(g.actions || [], {
					historyManager: p.current.enableHistory ? l.history : void 0
				})
			}, []),
			v = s.useState({
				searchQuery: '',
				currentRootActionId: null,
				visualState: f.VisualState.hidden,
				actions: e({}, m.actions),
				activeIndex: 0
			}),
			_ = v[0],
			w = v[1],
			x = s.useRef(_)
		x.current = _
		var E = s.useCallback(function () {
				return x.current
			}, []),
			R = s.useMemo(
				function () {
					return new d(E)
				},
				[E]
			)
		s.useEffect(
			function () {
				;((x.current = _), R.notify())
			},
			[_, R]
		)
		var S = s.useCallback(
				function (b) {
					return (
						w(function (O) {
							return e(e({}, O), { actions: m.add(b) })
						}),
						function () {
							w(function (A) {
								return e(e({}, A), { actions: m.remove(b) })
							})
						}
					)
				},
				[m]
			),
			y = s.useRef(null)
		return s.useMemo(
			function () {
				return {
					getState: E,
					query: {
						setCurrentRootAction: function (b) {
							w(function (O) {
								return e(e({}, O), { currentRootActionId: b })
							})
						},
						setVisualState: function (b) {
							w(function (O) {
								return e(e({}, O), {
									visualState: typeof b == 'function' ? b(O.visualState) : b
								})
							})
						},
						setSearch: function (b) {
							return w(function (O) {
								return e(e({}, O), { searchQuery: b })
							})
						},
						registerActions: S,
						toggle: function () {
							return w(function (b) {
								return e(e({}, b), {
									visualState: [
										f.VisualState.animatingOut,
										f.VisualState.hidden
									].includes(b.visualState)
										? f.VisualState.animatingIn
										: f.VisualState.animatingOut
								})
							})
						},
						setActiveIndex: function (b) {
							return w(function (O) {
								return e(e({}, O), {
									activeIndex: typeof b == 'number' ? b : b(O.activeIndex)
								})
							})
						},
						inputRefSetter: function (b) {
							y.current = b
						},
						getInput: function () {
							return (
								(0, o.default)(
									y.current,
									'Input is undefined, make sure you apple `query.inputRefSetter` to your search input.'
								),
								y.current
							)
						}
					},
					options: p.current,
					subscribe: function (b, O) {
						return R.subscribe(b, O)
					}
				}
			},
			[E, R, S]
		)
	}
	vt.useStore = c
	var d = (function () {
			function g(p) {
				;((this.subscribers = []), (this.getState = p))
			}
			return (
				(g.prototype.subscribe = function (p, m) {
					var v = this,
						_ = new h(function () {
							return p(v.getState())
						}, m)
					return (this.subscribers.push(_), this.unsubscribe.bind(this, _))
				}),
				(g.prototype.unsubscribe = function (p) {
					if (this.subscribers.length) {
						var m = this.subscribers.indexOf(p)
						if (m > -1) return this.subscribers.splice(m, 1)
					}
				}),
				(g.prototype.notify = function () {
					this.subscribers.forEach(function (p) {
						return p.collect()
					})
				}),
				g
			)
		})(),
		h = (function () {
			function g(p, m) {
				;((this.collector = p), (this.onChange = m))
			}
			return (
				(g.prototype.collect = function () {
					try {
						var p = this.collector()
						;(0, a.deepEqual)(p, this.collected) ||
							((this.collected = p),
							this.onChange && this.onChange(this.collected))
					} catch (m) {
						console.warn(m)
					}
				}),
				g
			)
		})()
	return vt
}
var It = {},
	_s = {},
	jv
function UM() {
	if (jv) return _s
	;((jv = 1), Object.defineProperty(_s, '__esModule', { value: !0 }))
	var e = ['Shift', 'Meta', 'Alt', 'Control'],
		t = 1e3,
		r = 'keydown',
		n =
			typeof navigator == 'object' &&
			/Mac|iPod|iPhone|iPad/.test(navigator.platform)
				? 'Meta'
				: 'Control'
	function i(u, l) {
		return typeof u.getModifierState == 'function' ? u.getModifierState(l) : !1
	}
	function a(u) {
		return u
			.trim()
			.split(' ')
			.map(function (l) {
				var f = l.split(/\b\+/),
					c = f.pop()
				return (
					(f = f.map(function (d) {
						return d === '$mod' ? n : d
					})),
					[f, c]
				)
			})
	}
	function s(u, l) {
		return /^[^A-Za-z0-9]$/.test(u.key) && l[1] === u.key
			? !0
			: !(
					(l[1].toUpperCase() !== u.key.toUpperCase() && l[1] !== u.code) ||
					l[0].find(function (f) {
						return !i(u, f)
					}) ||
					e.find(function (f) {
						return !l[0].includes(f) && l[1] !== f && i(u, f)
					})
				)
	}
	function o(u, l, f) {
		var c, d
		f === void 0 && (f = {})
		var h = (c = f.timeout) !== null && c !== void 0 ? c : t,
			g = (d = f.event) !== null && d !== void 0 ? d : r,
			p = Object.keys(l).map(function (w) {
				return [a(w), l[w]]
			}),
			m = new Map(),
			v = null,
			_ = function (w) {
				w instanceof KeyboardEvent &&
					(p.forEach(function (x) {
						var E = x[0],
							R = x[1],
							S = m.get(E),
							y = S || E,
							b = y[0],
							O = s(w, b)
						O
							? y.length > 1
								? m.set(E, y.slice(1))
								: (m.delete(E), R(w))
							: i(w, w.key) || m.delete(E)
					}),
					v && clearTimeout(v),
					(v = setTimeout(m.clear.bind(m), h)))
			}
		return (
			u.addEventListener(g, _),
			function () {
				u.removeEventListener(g, _)
			}
		)
	}
	return ((_s.default = o), _s)
}
var Uv
function BM() {
	if (Uv) return It
	Uv = 1
	var e =
			(It && It.__createBinding) ||
			(Object.create
				? function (m, v, _, w) {
						;(w === void 0 && (w = _),
							Object.defineProperty(m, w, {
								enumerable: !0,
								get: function () {
									return v[_]
								}
							}))
					}
				: function (m, v, _, w) {
						;(w === void 0 && (w = _), (m[w] = v[_]))
					}),
		t =
			(It && It.__setModuleDefault) ||
			(Object.create
				? function (m, v) {
						Object.defineProperty(m, 'default', { enumerable: !0, value: v })
					}
				: function (m, v) {
						m.default = v
					}),
		r =
			(It && It.__importStar) ||
			function (m) {
				if (m && m.__esModule) return m
				var v = {}
				if (m != null)
					for (var _ in m)
						_ !== 'default' &&
							Object.prototype.hasOwnProperty.call(m, _) &&
							e(v, m, _)
				return (t(v, m), v)
			},
		n =
			(It && It.__importDefault) ||
			function (m) {
				return m && m.__esModule ? m : { default: m }
			}
	;(Object.defineProperty(It, '__esModule', { value: !0 }),
		(It.InternalEvents = void 0))
	var i = r(Jt()),
		a = n(UM()),
		s = ga(),
		o = Ln(),
		u = Ei()
	function l() {
		return (f(), c(), g(), p(), null)
	}
	It.InternalEvents = l
	function f() {
		var m,
			v,
			_ = (0, o.useKBar)(function (b) {
				return {
					visualState: b.visualState,
					showing: b.visualState !== s.VisualState.hidden
				}
			}),
			w = _.query,
			x = _.options,
			E = _.visualState,
			R = _.showing
		i.useEffect(
			function () {
				var b,
					O = x.toggleShortcut || '$mod+k',
					A = (0, a.default)(
						window,
						((b = {}),
						(b[O] = function (T) {
							var P, k, j, M
							T.defaultPrevented ||
								(T.preventDefault(),
								w.toggle(),
								R
									? (k =
											(P = x.callbacks) === null || P === void 0
												? void 0
												: P.onClose) === null ||
										k === void 0 ||
										k.call(P)
									: (M =
											(j = x.callbacks) === null || j === void 0
												? void 0
												: j.onOpen) === null ||
										M === void 0 ||
										M.call(j))
						}),
						(b.Escape = function (T) {
							var P, k
							;(R &&
								(T.stopPropagation(),
								T.preventDefault(),
								(k =
									(P = x.callbacks) === null || P === void 0
										? void 0
										: P.onClose) === null ||
									k === void 0 ||
									k.call(P)),
								w.setVisualState(function (j) {
									return j === s.VisualState.hidden ||
										j === s.VisualState.animatingOut
										? j
										: s.VisualState.animatingOut
								}))
						}),
						b)
					)
				return function () {
					A()
				}
			},
			[x.callbacks, x.toggleShortcut, w, R]
		)
		var S = i.useRef(),
			y = i.useCallback(
				function (b) {
					var O,
						A,
						T = 0
					;(b === s.VisualState.animatingIn &&
						(T =
							((O = x.animations) === null || O === void 0
								? void 0
								: O.enterMs) || 0),
						b === s.VisualState.animatingOut &&
							(T =
								((A = x.animations) === null || A === void 0
									? void 0
									: A.exitMs) || 0),
						clearTimeout(S.current),
						(S.current = setTimeout(function () {
							var P = !1
							;(w.setVisualState(function () {
								var k =
									b === s.VisualState.animatingIn
										? s.VisualState.showing
										: s.VisualState.hidden
								return (k === s.VisualState.hidden && (P = !0), k)
							}),
								P && w.setCurrentRootAction(null))
						}, T)))
				},
				[
					(m = x.animations) === null || m === void 0 ? void 0 : m.enterMs,
					(v = x.animations) === null || v === void 0 ? void 0 : v.exitMs,
					w
				]
			)
		i.useEffect(
			function () {
				switch (E) {
					case s.VisualState.animatingIn:
					case s.VisualState.animatingOut:
						y(E)
						break
				}
			},
			[y, E]
		)
	}
	function c() {
		var m = (0, o.useKBar)(function (w) {
				return { visualState: w.visualState }
			}),
			v = m.visualState,
			_ = m.options
		i.useEffect(
			function () {
				if (!_.disableDocumentLock)
					if (v === s.VisualState.animatingIn) {
						if (
							((document.body.style.overflow = 'hidden'),
							!_.disableScrollbarManagement)
						) {
							var w = (0, u.getScrollbarWidth)(),
								x = getComputedStyle(document.body)['margin-right']
							;(x && (w += Number(x.replace(/\D/g, ''))),
								(document.body.style.marginRight = w + 'px'))
						}
					} else
						v === s.VisualState.hidden &&
							(document.body.style.removeProperty('overflow'),
							_.disableScrollbarManagement ||
								document.body.style.removeProperty('margin-right'))
			},
			[_.disableDocumentLock, _.disableScrollbarManagement, v]
		)
	}
	var d = new WeakSet()
	function h(m) {
		return function (v) {
			d.has(v) || (m(v), d.add(v))
		}
	}
	function g() {
		var m = (0, o.useKBar)(function (E) {
				return {
					actions: E.actions,
					open: E.visualState === s.VisualState.showing
				}
			}),
			v = m.actions,
			_ = m.query,
			w = m.open,
			x = m.options
		i.useEffect(
			function () {
				var E
				if (!w) {
					for (
						var R = Object.keys(v).map(function (M) {
								return v[M]
							}),
							S = [],
							y = 0,
							b = R;
						y < b.length;
						y++
					) {
						var O = b[y]
						!((E = O.shortcut) === null || E === void 0) &&
							E.length &&
							S.push(O)
					}
					S = S.sort(function (M, q) {
						return q.shortcut.join(' ').length - M.shortcut.join(' ').length
					})
					for (
						var A = {},
							T = function (M) {
								var q = M.shortcut.join(' ')
								A[q] = h(function (I) {
									var D, N, W, oe, B, re
									;(0, u.shouldRejectKeystrokes)() ||
										(I.preventDefault(),
										!((D = M.children) === null || D === void 0) && D.length
											? (_.setCurrentRootAction(M.id),
												_.toggle(),
												(W =
													(N = x.callbacks) === null || N === void 0
														? void 0
														: N.onOpen) === null ||
													W === void 0 ||
													W.call(N))
											: ((oe = M.command) === null ||
													oe === void 0 ||
													oe.perform(),
												(re =
													(B = x.callbacks) === null || B === void 0
														? void 0
														: B.onSelectAction) === null ||
													re === void 0 ||
													re.call(B, M)))
								})
							},
							P = 0,
							k = S;
						P < k.length;
						P++
					) {
						var O = k[P]
						T(O)
					}
					var j = (0, a.default)(window, A, { timeout: 400 })
					return function () {
						j()
					}
				}
			},
			[v, w, x.callbacks, _]
		)
	}
	function p() {
		var m = i.useRef(!0),
			v = (0, o.useKBar)(function (E) {
				return {
					isShowing:
						E.visualState === s.VisualState.showing ||
						E.visualState === s.VisualState.animatingIn
				}
			}),
			_ = v.isShowing,
			w = v.query,
			x = i.useRef(null)
		;(i.useEffect(
			function () {
				if (m.current) {
					m.current = !1
					return
				}
				if (_) {
					x.current = document.activeElement
					return
				}
				var E = document.activeElement
				;(E == null ? void 0 : E.tagName.toLowerCase()) === 'input' && E.blur()
				var R = x.current
				R && R !== E && R.focus()
			},
			[_]
		),
			i.useEffect(
				function () {
					function E(R) {
						var S = w.getInput()
						R.target !== S && S.focus()
					}
					if (_)
						return (
							window.addEventListener('keydown', E),
							function () {
								window.removeEventListener('keydown', E)
							}
						)
				},
				[_, w]
			))
	}
	return It
}
var Bv
function $S() {
	return (
		Bv ||
			((Bv = 1),
			(function (e) {
				var t =
						(Fr && Fr.__createBinding) ||
						(Object.create
							? function (u, l, f, c) {
									;(c === void 0 && (c = f),
										Object.defineProperty(u, c, {
											enumerable: !0,
											get: function () {
												return l[f]
											}
										}))
								}
							: function (u, l, f, c) {
									;(c === void 0 && (c = f), (u[c] = l[f]))
								}),
					r =
						(Fr && Fr.__setModuleDefault) ||
						(Object.create
							? function (u, l) {
									Object.defineProperty(u, 'default', {
										enumerable: !0,
										value: l
									})
								}
							: function (u, l) {
									u.default = l
								}),
					n =
						(Fr && Fr.__importStar) ||
						function (u) {
							if (u && u.__esModule) return u
							var l = {}
							if (u != null)
								for (var f in u)
									f !== 'default' &&
										Object.prototype.hasOwnProperty.call(u, f) &&
										t(l, u, f)
							return (r(l, u), l)
						}
				;(Object.defineProperty(e, '__esModule', { value: !0 }),
					(e.KBarProvider = e.KBarContext = void 0))
				var i = jM(),
					a = n(Jt()),
					s = BM()
				e.KBarContext = a.createContext({})
				var o = function (u) {
					var l = (0, i.useStore)(u)
					return a.createElement(
						e.KBarContext.Provider,
						{ value: l },
						a.createElement(s.InternalEvents, null),
						u.children
					)
				}
				e.KBarProvider = o
			})(Fr)),
		Fr
	)
}
var Vv
function Ln() {
	if (Vv) return Pt
	Vv = 1
	var e =
			(Pt && Pt.__assign) ||
			function () {
				return (
					(e =
						Object.assign ||
						function (o) {
							for (var u, l = 1, f = arguments.length; l < f; l++) {
								u = arguments[l]
								for (var c in u)
									Object.prototype.hasOwnProperty.call(u, c) && (o[c] = u[c])
							}
							return o
						}),
					e.apply(this, arguments)
				)
			},
		t =
			(Pt && Pt.__createBinding) ||
			(Object.create
				? function (o, u, l, f) {
						;(f === void 0 && (f = l),
							Object.defineProperty(o, f, {
								enumerable: !0,
								get: function () {
									return u[l]
								}
							}))
					}
				: function (o, u, l, f) {
						;(f === void 0 && (f = l), (o[f] = u[l]))
					}),
		r =
			(Pt && Pt.__setModuleDefault) ||
			(Object.create
				? function (o, u) {
						Object.defineProperty(o, 'default', { enumerable: !0, value: u })
					}
				: function (o, u) {
						o.default = u
					}),
		n =
			(Pt && Pt.__importStar) ||
			function (o) {
				if (o && o.__esModule) return o
				var u = {}
				if (o != null)
					for (var l in o)
						l !== 'default' &&
							Object.prototype.hasOwnProperty.call(o, l) &&
							t(u, o, l)
				return (r(u, o), u)
			}
	;(Object.defineProperty(Pt, '__esModule', { value: !0 }),
		(Pt.useKBar = void 0))
	var i = n(Jt()),
		a = $S()
	function s(o) {
		var u = i.useContext(a.KBarContext),
			l = u.query,
			f = u.getState,
			c = u.subscribe,
			d = u.options,
			h = i.useRef(o == null ? void 0 : o(f())),
			g = i.useRef(o),
			p = i.useCallback(
				function (w) {
					return e(e({}, w), { query: l, options: d })
				},
				[l, d]
			),
			m = i.useState(p(h.current)),
			v = m[0],
			_ = m[1]
		return (
			i.useEffect(
				function () {
					var w
					return (
						g.current &&
							(w = c(
								function (x) {
									return g.current(x)
								},
								function (x) {
									return _(p(x))
								}
							)),
						function () {
							w && w()
						}
					)
				},
				[p, c]
			),
			v
		)
	}
	return ((Pt.useKBar = s), Pt)
}
var ul, zv
function VM() {
	if (zv) return ul
	zv = 1
	var e = 1,
		t = 0.9,
		r = 0.3,
		n = 0.1,
		i = 0,
		a = 0.999,
		s = 0.9999,
		o = 0.99,
		u = /[\\\/\-_+.# \t"@\[\(\{&]/,
		l = /[\\\/\-_+.# \t"@\[\(\{&]/g
	function f(d, h, g, p, m, v) {
		if (v === h.length) return m === d.length ? e : o
		for (var _ = p.charAt(v), w = g.indexOf(_, m), x = 0, E, R, S; w >= 0; )
			((E = f(d, h, g, p, w + 1, v + 1)),
				E > x &&
					(w === m
						? (E *= e)
						: u.test(d.charAt(w - 1))
							? ((E *= t),
								(S = d.slice(m, w - 1).match(l)),
								S && m > 0 && (E *= Math.pow(a, S.length)))
							: u.test(d.slice(m, w - 1))
								? ((E *= i), m > 0 && (E *= Math.pow(a, w - m)))
								: ((E *= r), m > 0 && (E *= Math.pow(a, w - m))),
					d.charAt(w) !== h.charAt(v) && (E *= s)),
				E < n &&
					g.charAt(w - 1) === p.charAt(v + 1) &&
					g.charAt(w - 1) !== p.charAt(v) &&
					((R = f(d, h, g, p, w + 1, v + 2)), R * n > E && (E = R * n)),
				E > x && (x = E),
				(w = g.indexOf(_, w + 1)))
		return x
	}
	function c(d, h) {
		return f(d, h, d.toLowerCase(), h.toLowerCase(), 0, 0)
	}
	return ((ul = c), ul)
}
var Hv
function zM() {
	return (
		Hv ||
			((Hv = 1),
			(function (e) {
				var t =
						(nr && nr.__createBinding) ||
						(Object.create
							? function (d, h, g, p) {
									;(p === void 0 && (p = g),
										Object.defineProperty(d, p, {
											enumerable: !0,
											get: function () {
												return h[g]
											}
										}))
								}
							: function (d, h, g, p) {
									;(p === void 0 && (p = g), (d[p] = h[g]))
								}),
					r =
						(nr && nr.__setModuleDefault) ||
						(Object.create
							? function (d, h) {
									Object.defineProperty(d, 'default', {
										enumerable: !0,
										value: h
									})
								}
							: function (d, h) {
									d.default = h
								}),
					n =
						(nr && nr.__importStar) ||
						function (d) {
							if (d && d.__esModule) return d
							var h = {}
							if (d != null)
								for (var g in d)
									g !== 'default' &&
										Object.prototype.hasOwnProperty.call(d, g) &&
										t(h, d, g)
							return (r(h, d), h)
						},
					i =
						(nr && nr.__importDefault) ||
						function (d) {
							return d && d.__esModule ? d : { default: d }
						}
				;(Object.defineProperty(e, '__esModule', { value: !0 }),
					(e.useDeepMatches = e.useMatches = e.NO_GROUP = void 0))
				var a = n(Jt()),
					s = Ln(),
					o = Ei(),
					u = i(VM())
				e.NO_GROUP = { name: 'none', priority: o.Priority.NORMAL }
				function l(d, h) {
					return h.priority - d.priority
				}
				function f() {
					var d = (0, s.useKBar)(function (S) {
							return {
								search: S.searchQuery,
								actions: S.actions,
								rootActionId: S.currentRootActionId
							}
						}),
						h = d.search,
						g = d.actions,
						p = d.rootActionId,
						m = a.useMemo(
							function () {
								return Object.keys(g)
									.reduce(function (S, y) {
										var b = g[y]
										if ((!b.parent && !p && S.push(b), b.id === p))
											for (var O = 0; O < b.children.length; O++)
												S.push(b.children[O])
										return S
									}, [])
									.sort(l)
							},
							[g, p]
						),
						v = a.useCallback(function (S) {
							for (var y = [], b = 0; b < S.length; b++) y.push(S[b])
							return (function O(A, T) {
								T === void 0 && (T = y)
								for (var P = 0; P < A.length; P++)
									if (A[P].children.length > 0) {
										for (var k = A[P].children, j = 0; j < k.length; j++)
											T.push(k[j])
										O(A[P].children, T)
									}
								return T
							})(S)
						}, []),
						_ = !h,
						w = a.useMemo(
							function () {
								return _ ? m : v(m)
							},
							[v, m, _]
						),
						x = c(w, h),
						E = a.useMemo(
							function () {
								for (
									var S, y, b = {}, O = [], A = [], T = 0;
									T < x.length;
									T++
								) {
									var P = x[T],
										k = P.action,
										j = P.score || o.Priority.NORMAL,
										M = {
											name:
												typeof k.section == 'string'
													? k.section
													: ((S = k.section) === null || S === void 0
															? void 0
															: S.name) || e.NO_GROUP.name,
											priority:
												typeof k.section == 'string'
													? j
													: ((y = k.section) === null || y === void 0
															? void 0
															: y.priority) || 0 + j
										}
									;(b[M.name] || ((b[M.name] = []), O.push(M)),
										b[M.name].push({ priority: k.priority + j, action: k }))
								}
								A = O.sort(l).map(function (N) {
									return {
										name: N.name,
										actions: b[N.name].sort(l).map(function (W) {
											return W.action
										})
									}
								})
								for (var q = [], T = 0; T < A.length; T++) {
									var I = A[T]
									I.name !== e.NO_GROUP.name && q.push(I.name)
									for (var D = 0; D < I.actions.length; D++)
										q.push(I.actions[D])
								}
								return q
							},
							[x]
						),
						R = a.useMemo(
							function () {
								return p
							},
							[E]
						)
					return a.useMemo(
						function () {
							return { results: E, rootActionId: R }
						},
						[R, E]
					)
				}
				e.useMatches = f
				function c(d, h) {
					var g = a.useMemo(
							function () {
								return { filtered: d, search: h }
							},
							[d, h]
						),
						p = (0, o.useThrottledValue)(g),
						m = p.filtered,
						v = p.search
					return a.useMemo(
						function () {
							if (v.trim() === '')
								return m.map(function (R) {
									return { score: 0, action: R }
								})
							for (var _ = [], w = 0; w < m.length; w++) {
								var x = m[w],
									E = (0, u.default)(
										[x.name, x.keywords, x.subtitle].join(' '),
										v
									)
								E > 0 && _.push({ score: E, action: x })
							}
							return _
						},
						[m, v]
					)
				}
				e.useDeepMatches = f
			})(nr)),
		nr
	)
}
var ir = {},
	Gv
function HM() {
	if (Gv) return ir
	Gv = 1
	var e =
			(ir && ir.__createBinding) ||
			(Object.create
				? function (u, l, f, c) {
						;(c === void 0 && (c = f),
							Object.defineProperty(u, c, {
								enumerable: !0,
								get: function () {
									return l[f]
								}
							}))
					}
				: function (u, l, f, c) {
						;(c === void 0 && (c = f), (u[c] = l[f]))
					}),
		t =
			(ir && ir.__setModuleDefault) ||
			(Object.create
				? function (u, l) {
						Object.defineProperty(u, 'default', { enumerable: !0, value: l })
					}
				: function (u, l) {
						u.default = l
					}),
		r =
			(ir && ir.__importStar) ||
			function (u) {
				if (u && u.__esModule) return u
				var l = {}
				if (u != null)
					for (var f in u)
						f !== 'default' &&
							Object.prototype.hasOwnProperty.call(u, f) &&
							e(l, u, f)
				return (t(l, u), l)
			}
	;(Object.defineProperty(ir, '__esModule', { value: !0 }),
		(ir.KBarPortal = void 0))
	var n = HO(),
		i = r(Jt()),
		a = ga(),
		s = Ln()
	function o(u) {
		var l = (0, s.useKBar)(function (f) {
			return { showing: f.visualState !== a.VisualState.hidden }
		}).showing
		return l ? i.createElement(n.Portal, null, u.children) : null
	}
	return ((ir.KBarPortal = o), ir)
}
var yt = {},
	Wv
function GM() {
	if (Wv) return yt
	Wv = 1
	var e =
			(yt && yt.__assign) ||
			function () {
				return (
					(e =
						Object.assign ||
						function (u) {
							for (var l, f = 1, c = arguments.length; f < c; f++) {
								l = arguments[f]
								for (var d in l)
									Object.prototype.hasOwnProperty.call(l, d) && (u[d] = l[d])
							}
							return u
						}),
					e.apply(this, arguments)
				)
			},
		t =
			(yt && yt.__createBinding) ||
			(Object.create
				? function (u, l, f, c) {
						;(c === void 0 && (c = f),
							Object.defineProperty(u, c, {
								enumerable: !0,
								get: function () {
									return l[f]
								}
							}))
					}
				: function (u, l, f, c) {
						;(c === void 0 && (c = f), (u[c] = l[f]))
					}),
		r =
			(yt && yt.__setModuleDefault) ||
			(Object.create
				? function (u, l) {
						Object.defineProperty(u, 'default', { enumerable: !0, value: l })
					}
				: function (u, l) {
						u.default = l
					}),
		n =
			(yt && yt.__importStar) ||
			function (u) {
				if (u && u.__esModule) return u
				var l = {}
				if (u != null)
					for (var f in u)
						f !== 'default' &&
							Object.prototype.hasOwnProperty.call(u, f) &&
							t(l, u, f)
				return (r(l, u), l)
			},
		i =
			(yt && yt.__rest) ||
			function (u, l) {
				var f = {}
				for (var c in u)
					Object.prototype.hasOwnProperty.call(u, c) &&
						l.indexOf(c) < 0 &&
						(f[c] = u[c])
				if (u != null && typeof Object.getOwnPropertySymbols == 'function')
					for (
						var d = 0, c = Object.getOwnPropertySymbols(u);
						d < c.length;
						d++
					)
						l.indexOf(c[d]) < 0 &&
							Object.prototype.propertyIsEnumerable.call(u, c[d]) &&
							(f[c[d]] = u[c[d]])
				return f
			}
	;(Object.defineProperty(yt, '__esModule', { value: !0 }),
		(yt.KBarPositioner = void 0))
	var a = n(Jt()),
		s = {
			position: 'fixed',
			display: 'flex',
			alignItems: 'flex-start',
			justifyContent: 'center',
			width: '100%',
			inset: '0px',
			padding: '14vh 16px 16px'
		}
	function o(u) {
		return u ? e(e({}, s), u) : s
	}
	return (
		(yt.KBarPositioner = a.forwardRef(function (u, l) {
			var f = u.style,
				c = u.children,
				d = i(u, ['style', 'children'])
			return a.createElement('div', e({ ref: l, style: o(f) }, d), c)
		})),
		yt
	)
}
var kt = {},
	Kv
function FS() {
	return (
		Kv ||
			((Kv = 1),
			(function (e) {
				var t =
						(kt && kt.__assign) ||
						function () {
							return (
								(t =
									Object.assign ||
									function (c) {
										for (var d, h = 1, g = arguments.length; h < g; h++) {
											d = arguments[h]
											for (var p in d)
												Object.prototype.hasOwnProperty.call(d, p) &&
													(c[p] = d[p])
										}
										return c
									}),
								t.apply(this, arguments)
							)
						},
					r =
						(kt && kt.__createBinding) ||
						(Object.create
							? function (c, d, h, g) {
									;(g === void 0 && (g = h),
										Object.defineProperty(c, g, {
											enumerable: !0,
											get: function () {
												return d[h]
											}
										}))
								}
							: function (c, d, h, g) {
									;(g === void 0 && (g = h), (c[g] = d[h]))
								}),
					n =
						(kt && kt.__setModuleDefault) ||
						(Object.create
							? function (c, d) {
									Object.defineProperty(c, 'default', {
										enumerable: !0,
										value: d
									})
								}
							: function (c, d) {
									c.default = d
								}),
					i =
						(kt && kt.__importStar) ||
						function (c) {
							if (c && c.__esModule) return c
							var d = {}
							if (c != null)
								for (var h in c)
									h !== 'default' &&
										Object.prototype.hasOwnProperty.call(c, h) &&
										r(d, c, h)
							return (n(d, c), d)
						},
					a =
						(kt && kt.__rest) ||
						function (c, d) {
							var h = {}
							for (var g in c)
								Object.prototype.hasOwnProperty.call(c, g) &&
									d.indexOf(g) < 0 &&
									(h[g] = c[g])
							if (
								c != null &&
								typeof Object.getOwnPropertySymbols == 'function'
							)
								for (
									var p = 0, g = Object.getOwnPropertySymbols(c);
									p < g.length;
									p++
								)
									d.indexOf(g[p]) < 0 &&
										Object.prototype.propertyIsEnumerable.call(c, g[p]) &&
										(h[g[p]] = c[g[p]])
							return h
						}
				;(Object.defineProperty(e, '__esModule', { value: !0 }),
					(e.KBarSearch = e.getListboxItemId = e.KBAR_LISTBOX = void 0))
				var s = i(Jt()),
					o = ga(),
					u = Ln()
				e.KBAR_LISTBOX = 'kbar-listbox'
				var l = function (c) {
					return 'kbar-listbox-item-' + c
				}
				e.getListboxItemId = l
				function f(c) {
					var d = (0, u.useKBar)(function (S) {
							return {
								search: S.searchQuery,
								currentRootActionId: S.currentRootActionId,
								actions: S.actions,
								activeIndex: S.activeIndex,
								showing: S.visualState === o.VisualState.showing
							}
						}),
						h = d.query,
						g = d.search,
						p = d.actions,
						m = d.currentRootActionId,
						v = d.activeIndex,
						_ = d.showing,
						w = d.options,
						x = c.defaultPlaceholder,
						E = a(c, ['defaultPlaceholder'])
					s.useEffect(
						function () {
							return (
								h.setSearch(''),
								h.getInput().focus(),
								function () {
									return h.setSearch('')
								}
							)
						},
						[m, h]
					)
					var R = s.useMemo(
						function () {
							var S = x ?? 'Type a command or search…'
							return m && p[m] ? p[m].name : S
						},
						[p, m, x]
					)
					return s.createElement(
						'input',
						t({}, E, {
							ref: h.inputRefSetter,
							autoFocus: !0,
							autoComplete: 'off',
							role: 'combobox',
							spellCheck: 'false',
							'aria-expanded': _,
							'aria-controls': e.KBAR_LISTBOX,
							'aria-activedescendant': (0, e.getListboxItemId)(v),
							value: g,
							placeholder: R,
							onChange: function (S) {
								var y, b, O
								;((y = c.onChange) === null || y === void 0 || y.call(c, S),
									h.setSearch(S.target.value),
									(O =
										(b = w == null ? void 0 : w.callbacks) === null ||
										b === void 0
											? void 0
											: b.onQueryChange) === null ||
										O === void 0 ||
										O.call(b, S.target.value))
							},
							onKeyDown: function (S) {
								var y
								if (
									((y = c.onKeyDown) === null || y === void 0 || y.call(c, S),
									m && !g && S.key === 'Backspace')
								) {
									var b = p[m].parent
									h.setCurrentRootAction(b)
								}
							}
						})
					)
				}
				e.KBarSearch = f
			})(kt)),
		kt
	)
}
var qt = {},
	Qv
function WM() {
	if (Qv) return qt
	Qv = 1
	var e =
			(qt && qt.__assign) ||
			function () {
				return (
					(e =
						Object.assign ||
						function (c) {
							for (var d, h = 1, g = arguments.length; h < g; h++) {
								d = arguments[h]
								for (var p in d)
									Object.prototype.hasOwnProperty.call(d, p) && (c[p] = d[p])
							}
							return c
						}),
					e.apply(this, arguments)
				)
			},
		t =
			(qt && qt.__createBinding) ||
			(Object.create
				? function (c, d, h, g) {
						;(g === void 0 && (g = h),
							Object.defineProperty(c, g, {
								enumerable: !0,
								get: function () {
									return d[h]
								}
							}))
					}
				: function (c, d, h, g) {
						;(g === void 0 && (g = h), (c[g] = d[h]))
					}),
		r =
			(qt && qt.__setModuleDefault) ||
			(Object.create
				? function (c, d) {
						Object.defineProperty(c, 'default', { enumerable: !0, value: d })
					}
				: function (c, d) {
						c.default = d
					}),
		n =
			(qt && qt.__importStar) ||
			function (c) {
				if (c && c.__esModule) return c
				var d = {}
				if (c != null)
					for (var h in c)
						h !== 'default' &&
							Object.prototype.hasOwnProperty.call(c, h) &&
							t(d, c, h)
				return (r(d, c), d)
			}
	;(Object.defineProperty(qt, '__esModule', { value: !0 }),
		(qt.KBarResults = void 0))
	var i = n(Jt()),
		a = GO,
		s = FS(),
		o = Ln(),
		u = Ei(),
		l = 0,
		f = function (c) {
			var d = i.useRef(null),
				h = i.useRef(null),
				g = i.useRef(c.items)
			g.current = c.items
			var p = (0, a.useVirtual)({ size: g.current.length, parentRef: h }),
				m = (0, o.useKBar)(function (b) {
					return {
						search: b.searchQuery,
						currentRootActionId: b.currentRootActionId,
						activeIndex: b.activeIndex
					}
				}),
				v = m.query,
				_ = m.search,
				w = m.currentRootActionId,
				x = m.activeIndex,
				E = m.options
			i.useEffect(
				function () {
					var b = function (O) {
						var A
						O.isComposing ||
							(O.key === 'ArrowUp' || (O.ctrlKey && O.key === 'p')
								? (O.preventDefault(),
									v.setActiveIndex(function (T) {
										var P = T > l ? T - 1 : T
										if (typeof g.current[P] == 'string') {
											if (P === 0) return T
											P -= 1
										}
										return P
									}))
								: O.key === 'ArrowDown' || (O.ctrlKey && O.key === 'n')
									? (O.preventDefault(),
										v.setActiveIndex(function (T) {
											var P = T < g.current.length - 1 ? T + 1 : T
											if (typeof g.current[P] == 'string') {
												if (P === g.current.length - 1) return T
												P += 1
											}
											return P
										}))
									: O.key === 'Enter' &&
										(O.preventDefault(),
										(A = d.current) === null || A === void 0 || A.click()))
					}
					return (
						window.addEventListener('keydown', b),
						function () {
							return window.removeEventListener('keydown', b)
						}
					)
				},
				[v]
			)
			var R = p.scrollToIndex
			;(i.useEffect(
				function () {
					R(x, { align: x <= 1 ? 'end' : 'auto' })
				},
				[x, R]
			),
				i.useEffect(
					function () {
						v.setActiveIndex(typeof c.items[l] == 'string' ? l + 1 : l)
					},
					[_, w, c.items, v]
				))
			var S = i.useCallback(
					function (b) {
						var O, A
						typeof b != 'string' &&
							(b.command
								? (b.command.perform(b), v.toggle())
								: (v.setSearch(''), v.setCurrentRootAction(b.id)),
							(A =
								(O = E.callbacks) === null || O === void 0
									? void 0
									: O.onSelectAction) === null ||
								A === void 0 ||
								A.call(O, b))
					},
					[v, E]
				),
				y = (0, u.usePointerMovedSinceMount)()
			return i.createElement(
				'div',
				{
					ref: h,
					style: {
						maxHeight: c.maxHeight || 400,
						position: 'relative',
						overflow: 'auto'
					}
				},
				i.createElement(
					'div',
					{
						role: 'listbox',
						id: s.KBAR_LISTBOX,
						style: { height: p.totalSize + 'px', width: '100%' }
					},
					p.virtualItems.map(function (b) {
						var O = g.current[b.index],
							A = typeof O != 'string' && {
								onPointerMove: function () {
									return y && x !== b.index && v.setActiveIndex(b.index)
								},
								onPointerDown: function () {
									return v.setActiveIndex(b.index)
								},
								onClick: function () {
									return S(O)
								}
							},
							T = b.index === x
						return i.createElement(
							'div',
							e(
								{
									ref: T ? d : null,
									id: (0, s.getListboxItemId)(b.index),
									role: 'option',
									'aria-selected': T,
									key: b.index,
									style: {
										position: 'absolute',
										top: 0,
										left: 0,
										width: '100%',
										transform: 'translateY(' + b.start + 'px)'
									}
								},
								A
							),
							i.cloneElement(c.onRender({ item: O, active: T }), {
								ref: b.measureRef
							})
						)
					})
				)
			)
		}
	return ((qt.KBarResults = f), qt)
}
var ar = {},
	Zv
function KM() {
	if (Zv) return ar
	Zv = 1
	var e =
			(ar && ar.__createBinding) ||
			(Object.create
				? function (s, o, u, l) {
						;(l === void 0 && (l = u),
							Object.defineProperty(s, l, {
								enumerable: !0,
								get: function () {
									return o[u]
								}
							}))
					}
				: function (s, o, u, l) {
						;(l === void 0 && (l = u), (s[l] = o[u]))
					}),
		t =
			(ar && ar.__setModuleDefault) ||
			(Object.create
				? function (s, o) {
						Object.defineProperty(s, 'default', { enumerable: !0, value: o })
					}
				: function (s, o) {
						s.default = o
					}),
		r =
			(ar && ar.__importStar) ||
			function (s) {
				if (s && s.__esModule) return s
				var o = {}
				if (s != null)
					for (var u in s)
						u !== 'default' &&
							Object.prototype.hasOwnProperty.call(s, u) &&
							e(o, s, u)
				return (t(o, s), o)
			}
	;(Object.defineProperty(ar, '__esModule', { value: !0 }),
		(ar.useRegisterActions = void 0))
	var n = r(Jt()),
		i = Ln()
	function a(s, o) {
		o === void 0 && (o = [])
		var u = (0, i.useKBar)().query,
			l = n.useMemo(function () {
				return s
			}, o)
		n.useEffect(
			function () {
				if (l.length) {
					var f = u.registerActions(l)
					return function () {
						f()
					}
				}
			},
			[u, l]
		)
	}
	return ((ar.useRegisterActions = a), ar)
}
var $t = {},
	Yv
function QM() {
	if (Yv) return $t
	Yv = 1
	var e =
			($t && $t.__assign) ||
			function () {
				return (
					(e =
						Object.assign ||
						function (c) {
							for (var d, h = 1, g = arguments.length; h < g; h++) {
								d = arguments[h]
								for (var p in d)
									Object.prototype.hasOwnProperty.call(d, p) && (c[p] = d[p])
							}
							return c
						}),
					e.apply(this, arguments)
				)
			},
		t =
			($t && $t.__createBinding) ||
			(Object.create
				? function (c, d, h, g) {
						;(g === void 0 && (g = h),
							Object.defineProperty(c, g, {
								enumerable: !0,
								get: function () {
									return d[h]
								}
							}))
					}
				: function (c, d, h, g) {
						;(g === void 0 && (g = h), (c[g] = d[h]))
					}),
		r =
			($t && $t.__setModuleDefault) ||
			(Object.create
				? function (c, d) {
						Object.defineProperty(c, 'default', { enumerable: !0, value: d })
					}
				: function (c, d) {
						c.default = d
					}),
		n =
			($t && $t.__importStar) ||
			function (c) {
				if (c && c.__esModule) return c
				var d = {}
				if (c != null)
					for (var h in c)
						h !== 'default' &&
							Object.prototype.hasOwnProperty.call(c, h) &&
							t(d, c, h)
				return (r(d, c), d)
			}
	;(Object.defineProperty($t, '__esModule', { value: !0 }),
		($t.KBarAnimator = void 0))
	var i = n(Jt()),
		a = ga(),
		s = Ln(),
		o = Ei(),
		u = [
			{ opacity: 0, transform: 'scale(.99)' },
			{ opacity: 1, transform: 'scale(1.01)' },
			{ opacity: 1, transform: 'scale(1)' }
		],
		l = [
			{ transform: 'scale(1)' },
			{ transform: 'scale(.98)' },
			{ transform: 'scale(1)' }
		],
		f = function (c) {
			var d,
				h,
				g = c.children,
				p = c.style,
				m = c.className,
				v = (0, s.useKBar)(function (T) {
					return {
						visualState: T.visualState,
						currentRootActionId: T.currentRootActionId
					}
				}),
				_ = v.visualState,
				w = v.currentRootActionId,
				x = v.query,
				E = v.options,
				R = i.useRef(null),
				S = i.useRef(null),
				y =
					((d = E == null ? void 0 : E.animations) === null || d === void 0
						? void 0
						: d.enterMs) || 0,
				b =
					((h = E == null ? void 0 : E.animations) === null || h === void 0
						? void 0
						: h.exitMs) || 0
			i.useEffect(
				function () {
					if (_ !== a.VisualState.showing) {
						var T = _ === a.VisualState.animatingIn ? y : b,
							P = R.current
						P == null ||
							P.animate(u, {
								duration: T,
								easing:
									_ === a.VisualState.animatingOut ? 'ease-in' : 'ease-out',
								direction:
									_ === a.VisualState.animatingOut ? 'reverse' : 'normal',
								fill: 'forwards'
							})
					}
				},
				[E, _, y, b]
			)
			var O = i.useRef()
			i.useEffect(
				function () {
					if (_ === a.VisualState.showing) {
						var T = R.current,
							P = S.current
						if (!T || !P) return
						var k = new ResizeObserver(function (j) {
							for (var M = 0, q = j; M < q.length; M++) {
								var I = q[M],
									D = I.contentRect
								;(O.current || (O.current = D.height),
									T.animate(
										[{ height: O.current + 'px' }, { height: D.height + 'px' }],
										{ duration: y / 2, easing: 'ease-out', fill: 'forwards' }
									),
									(O.current = D.height))
							}
						})
						return (
							k.observe(P),
							function () {
								k.unobserve(P)
							}
						)
					}
				},
				[_, E, y, b]
			)
			var A = i.useRef(!0)
			return (
				i.useEffect(
					function () {
						if (A.current) {
							A.current = !1
							return
						}
						var T = R.current
						T && T.animate(l, { duration: y, easing: 'ease-out' })
					},
					[w, y]
				),
				(0, o.useOuterClick)(R, function () {
					var T, P
					;(x.setVisualState(a.VisualState.animatingOut),
						(P =
							(T = E.callbacks) === null || T === void 0
								? void 0
								: T.onClose) === null ||
							P === void 0 ||
							P.call(T))
				}),
				i.createElement(
					'div',
					{
						ref: R,
						style: e(e(e({}, u[0]), p), { pointerEvents: 'auto' }),
						className: m
					},
					i.createElement('div', { ref: S }, g)
				)
			)
		}
	return (($t.KBarAnimator = f), $t)
}
var Zn = {},
	Jv
function ZM() {
	return (
		Jv ||
			((Jv = 1),
			(function (e) {
				var t =
						(Zn && Zn.__createBinding) ||
						(Object.create
							? function (n, i, a, s) {
									;(s === void 0 && (s = a),
										Object.defineProperty(n, s, {
											enumerable: !0,
											get: function () {
												return i[a]
											}
										}))
								}
							: function (n, i, a, s) {
									;(s === void 0 && (s = a), (n[s] = i[a]))
								}),
					r =
						(Zn && Zn.__exportStar) ||
						function (n, i) {
							for (var a in n)
								a !== 'default' &&
									!Object.prototype.hasOwnProperty.call(i, a) &&
									t(i, n, a)
						}
				;(Object.defineProperty(e, '__esModule', { value: !0 }),
					r(qS(), e),
					r(kS(), e))
			})(Zn)),
		Zn
	)
}
var Xv
function YM() {
	return (
		Xv ||
			((Xv = 1),
			(function (e) {
				var t =
						(Wn && Wn.__createBinding) ||
						(Object.create
							? function (i, a, s, o) {
									;(o === void 0 && (o = s),
										Object.defineProperty(i, o, {
											enumerable: !0,
											get: function () {
												return a[s]
											}
										}))
								}
							: function (i, a, s, o) {
									;(o === void 0 && (o = s), (i[o] = a[s]))
								}),
					r =
						(Wn && Wn.__exportStar) ||
						function (i, a) {
							for (var s in i)
								s !== 'default' &&
									!Object.prototype.hasOwnProperty.call(a, s) &&
									t(a, i, s)
						}
				;(Object.defineProperty(e, '__esModule', { value: !0 }),
					(e.Priority = e.createAction = void 0))
				var n = Ei()
				;(Object.defineProperty(e, 'createAction', {
					enumerable: !0,
					get: function () {
						return n.createAction
					}
				}),
					Object.defineProperty(e, 'Priority', {
						enumerable: !0,
						get: function () {
							return n.Priority
						}
					}),
					r(zM(), e),
					r(HM(), e),
					r(GM(), e),
					r(FS(), e),
					r(WM(), e),
					r(Ln(), e),
					r(KM(), e),
					r($S(), e),
					r(QM(), e),
					r(ga(), e),
					r(ZM(), e))
			})(Wn)),
		Wn
	)
}
var lV = YM()
function JM(e) {
	if (typeof document > 'u') return
	let t = document.head || document.getElementsByTagName('head')[0],
		r = document.createElement('style')
	;((r.type = 'text/css'),
		t.appendChild(r),
		r.styleSheet
			? (r.styleSheet.cssText = e)
			: r.appendChild(document.createTextNode(e)))
}
const XM = (e) => {
		switch (e) {
			case 'success':
				return rP
			case 'info':
				return iP
			case 'warning':
				return nP
			case 'error':
				return aP
			default:
				return null
		}
	},
	eP = Array(12).fill(0),
	tP = ({ visible: e, className: t }) =>
		K.createElement(
			'div',
			{
				className: ['sonner-loading-wrapper', t].filter(Boolean).join(' '),
				'data-visible': e
			},
			K.createElement(
				'div',
				{ className: 'sonner-spinner' },
				eP.map((r, n) =>
					K.createElement('div', {
						className: 'sonner-loading-bar',
						key: `spinner-bar-${n}`
					})
				)
			)
		),
	rP = K.createElement(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 20 20',
			fill: 'currentColor',
			height: '20',
			width: '20'
		},
		K.createElement('path', {
			fillRule: 'evenodd',
			d: 'M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z',
			clipRule: 'evenodd'
		})
	),
	nP = K.createElement(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 24 24',
			fill: 'currentColor',
			height: '20',
			width: '20'
		},
		K.createElement('path', {
			fillRule: 'evenodd',
			d: 'M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z',
			clipRule: 'evenodd'
		})
	),
	iP = K.createElement(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 20 20',
			fill: 'currentColor',
			height: '20',
			width: '20'
		},
		K.createElement('path', {
			fillRule: 'evenodd',
			d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z',
			clipRule: 'evenodd'
		})
	),
	aP = K.createElement(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			viewBox: '0 0 20 20',
			fill: 'currentColor',
			height: '20',
			width: '20'
		},
		K.createElement('path', {
			fillRule: 'evenodd',
			d: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z',
			clipRule: 'evenodd'
		})
	),
	sP = K.createElement(
		'svg',
		{
			xmlns: 'http://www.w3.org/2000/svg',
			width: '12',
			height: '12',
			viewBox: '0 0 24 24',
			fill: 'none',
			stroke: 'currentColor',
			strokeWidth: '1.5',
			strokeLinecap: 'round',
			strokeLinejoin: 'round'
		},
		K.createElement('line', { x1: '18', y1: '6', x2: '6', y2: '18' }),
		K.createElement('line', { x1: '6', y1: '6', x2: '18', y2: '18' })
	),
	oP = () => {
		const [e, t] = K.useState(document.hidden)
		return (
			K.useEffect(() => {
				const r = () => {
					t(document.hidden)
				}
				return (
					document.addEventListener('visibilitychange', r),
					() => window.removeEventListener('visibilitychange', r)
				)
			}, []),
			e
		)
	}
let Bh = 1
class uP {
	constructor() {
		;((this.subscribe = (t) => (
			this.subscribers.push(t),
			() => {
				const r = this.subscribers.indexOf(t)
				this.subscribers.splice(r, 1)
			}
		)),
			(this.publish = (t) => {
				this.subscribers.forEach((r) => r(t))
			}),
			(this.addToast = (t) => {
				;(this.publish(t), (this.toasts = [...this.toasts, t]))
			}),
			(this.create = (t) => {
				var r
				const { message: n, ...i } = t,
					a =
						typeof (t == null ? void 0 : t.id) == 'number' ||
						((r = t.id) == null ? void 0 : r.length) > 0
							? t.id
							: Bh++,
					s = this.toasts.find((u) => u.id === a),
					o = t.dismissible === void 0 ? !0 : t.dismissible
				return (
					this.dismissedToasts.has(a) && this.dismissedToasts.delete(a),
					s
						? (this.toasts = this.toasts.map((u) =>
								u.id === a
									? (this.publish({ ...u, ...t, id: a, title: n }),
										{ ...u, ...t, id: a, dismissible: o, title: n })
									: u
							))
						: this.addToast({ title: n, ...i, dismissible: o, id: a }),
					a
				)
			}),
			(this.dismiss = (t) => (
				t
					? (this.dismissedToasts.add(t),
						requestAnimationFrame(() =>
							this.subscribers.forEach((r) => r({ id: t, dismiss: !0 }))
						))
					: this.toasts.forEach((r) => {
							this.subscribers.forEach((n) => n({ id: r.id, dismiss: !0 }))
						}),
				t
			)),
			(this.message = (t, r) => this.create({ ...r, message: t })),
			(this.error = (t, r) => this.create({ ...r, message: t, type: 'error' })),
			(this.success = (t, r) =>
				this.create({ ...r, type: 'success', message: t })),
			(this.info = (t, r) => this.create({ ...r, type: 'info', message: t })),
			(this.warning = (t, r) =>
				this.create({ ...r, type: 'warning', message: t })),
			(this.loading = (t, r) =>
				this.create({ ...r, type: 'loading', message: t })),
			(this.promise = (t, r) => {
				if (!r) return
				let n
				r.loading !== void 0 &&
					(n = this.create({
						...r,
						promise: t,
						type: 'loading',
						message: r.loading,
						description:
							typeof r.description != 'function' ? r.description : void 0
					}))
				const i = Promise.resolve(t instanceof Function ? t() : t)
				let a = n !== void 0,
					s
				const o = i
						.then(async (l) => {
							if (((s = ['resolve', l]), K.isValidElement(l)))
								((a = !1), this.create({ id: n, type: 'default', message: l }))
							else if (cP(l) && !l.ok) {
								a = !1
								const c =
										typeof r.error == 'function'
											? await r.error(`HTTP error! status: ${l.status}`)
											: r.error,
									d =
										typeof r.description == 'function'
											? await r.description(`HTTP error! status: ${l.status}`)
											: r.description,
									g =
										typeof c == 'object' && !K.isValidElement(c)
											? c
											: { message: c }
								this.create({ id: n, type: 'error', description: d, ...g })
							} else if (l instanceof Error) {
								a = !1
								const c =
										typeof r.error == 'function' ? await r.error(l) : r.error,
									d =
										typeof r.description == 'function'
											? await r.description(l)
											: r.description,
									g =
										typeof c == 'object' && !K.isValidElement(c)
											? c
											: { message: c }
								this.create({ id: n, type: 'error', description: d, ...g })
							} else if (r.success !== void 0) {
								a = !1
								const c =
										typeof r.success == 'function'
											? await r.success(l)
											: r.success,
									d =
										typeof r.description == 'function'
											? await r.description(l)
											: r.description,
									g =
										typeof c == 'object' && !K.isValidElement(c)
											? c
											: { message: c }
								this.create({ id: n, type: 'success', description: d, ...g })
							}
						})
						.catch(async (l) => {
							if (((s = ['reject', l]), r.error !== void 0)) {
								a = !1
								const f =
										typeof r.error == 'function' ? await r.error(l) : r.error,
									c =
										typeof r.description == 'function'
											? await r.description(l)
											: r.description,
									h =
										typeof f == 'object' && !K.isValidElement(f)
											? f
											: { message: f }
								this.create({ id: n, type: 'error', description: c, ...h })
							}
						})
						.finally(() => {
							;(a && (this.dismiss(n), (n = void 0)),
								r.finally == null || r.finally.call(r))
						}),
					u = () =>
						new Promise((l, f) =>
							o.then(() => (s[0] === 'reject' ? f(s[1]) : l(s[1]))).catch(f)
						)
				return typeof n != 'string' && typeof n != 'number'
					? { unwrap: u }
					: Object.assign(n, { unwrap: u })
			}),
			(this.custom = (t, r) => {
				const n = (r == null ? void 0 : r.id) || Bh++
				return (this.create({ jsx: t(n), id: n, ...r }), n)
			}),
			(this.getActiveToasts = () =>
				this.toasts.filter((t) => !this.dismissedToasts.has(t.id))),
			(this.subscribers = []),
			(this.toasts = []),
			(this.dismissedToasts = new Set()))
	}
}
const Ct = new uP(),
	lP = (e, t) => {
		const r = (t == null ? void 0 : t.id) || Bh++
		return (Ct.addToast({ title: e, ...t, id: r }), r)
	},
	cP = (e) =>
		e &&
		typeof e == 'object' &&
		'ok' in e &&
		typeof e.ok == 'boolean' &&
		'status' in e &&
		typeof e.status == 'number',
	fP = lP,
	dP = () => Ct.toasts,
	hP = () => Ct.getActiveToasts(),
	cV = Object.assign(
		fP,
		{
			success: Ct.success,
			info: Ct.info,
			warning: Ct.warning,
			error: Ct.error,
			custom: Ct.custom,
			message: Ct.message,
			promise: Ct.promise,
			dismiss: Ct.dismiss,
			loading: Ct.loading
		},
		{ getHistory: dP, getToasts: hP }
	)
JM(
	"[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}"
)
function bs(e) {
	return e.label !== void 0
}
const pP = 3,
	gP = '24px',
	mP = '16px',
	ey = 4e3,
	vP = 356,
	yP = 14,
	_P = 45,
	bP = 200
function vr(...e) {
	return e.filter(Boolean).join(' ')
}
function wP(e) {
	const [t, r] = e.split('-'),
		n = []
	return (t && n.push(t), r && n.push(r), n)
}
const SP = (e) => {
	var t, r, n, i, a, s, o, u, l
	const {
			invert: f,
			toast: c,
			unstyled: d,
			interacting: h,
			setHeights: g,
			visibleToasts: p,
			heights: m,
			index: v,
			toasts: _,
			expanded: w,
			removeToast: x,
			defaultRichColors: E,
			closeButton: R,
			style: S,
			cancelButtonStyle: y,
			actionButtonStyle: b,
			className: O = '',
			descriptionClassName: A = '',
			duration: T,
			position: P,
			gap: k,
			expandByDefault: j,
			classNames: M,
			icons: q,
			closeButtonAriaLabel: I = 'Close toast'
		} = e,
		[D, N] = K.useState(null),
		[W, oe] = K.useState(null),
		[B, re] = K.useState(!1),
		[Z, le] = K.useState(!1),
		[Ce, Y] = K.useState(!1),
		[U, z] = K.useState(!1),
		[V, F] = K.useState(!1),
		[ce, Q] = K.useState(0),
		[de, ee] = K.useState(0),
		be = K.useRef(c.duration || T || ey),
		he = K.useRef(null),
		we = K.useRef(null),
		Xe = v === 0,
		We = v + 1 <= p,
		ke = c.type,
		et = c.dismissible !== !1,
		Ue = c.className || '',
		St = c.descriptionClassName || '',
		Be = K.useMemo(
			() => m.findIndex((pe) => pe.toastId === c.id) || 0,
			[m, c.id]
		),
		tt = K.useMemo(() => {
			var pe
			return (pe = c.closeButton) != null ? pe : R
		}, [c.closeButton, R]),
		xt = K.useMemo(() => c.duration || T || ey, [c.duration, T]),
		At = K.useRef(0),
		Mt = K.useRef(0),
		zt = K.useRef(0),
		rt = K.useRef(null),
		[$r, cn] = P.split('-'),
		zn = K.useMemo(
			() => m.reduce((pe, De, Ke) => (Ke >= Be ? pe : pe + De.height), 0),
			[m, Be]
		),
		$ = oP(),
		L = c.invert || f,
		Te = ke === 'loading'
	;((Mt.current = K.useMemo(() => Be * k + zn, [Be, zn])),
		K.useEffect(() => {
			be.current = xt
		}, [xt]),
		K.useEffect(() => {
			re(!0)
		}, []),
		K.useEffect(() => {
			const pe = we.current
			if (pe) {
				const De = pe.getBoundingClientRect().height
				return (
					ee(De),
					g((Ke) => [
						{ toastId: c.id, height: De, position: c.position },
						...Ke
					]),
					() => g((Ke) => Ke.filter((Qe) => Qe.toastId !== c.id))
				)
			}
		}, [g, c.id]),
		K.useLayoutEffect(() => {
			if (!B) return
			const pe = we.current,
				De = pe.style.height
			pe.style.height = 'auto'
			const Ke = pe.getBoundingClientRect().height
			;((pe.style.height = De),
				ee(Ke),
				g((Qe) =>
					Qe.find((Ze) => Ze.toastId === c.id)
						? Qe.map((Ze) => (Ze.toastId === c.id ? { ...Ze, height: Ke } : Ze))
						: [{ toastId: c.id, height: Ke, position: c.position }, ...Qe]
				))
		}, [B, c.title, c.description, g, c.id, c.jsx, c.action, c.cancel]))
	const Ee = K.useCallback(() => {
		;(le(!0),
			Q(Mt.current),
			g((pe) => pe.filter((De) => De.toastId !== c.id)),
			setTimeout(() => {
				x(c)
			}, bP))
	}, [c, x, g, Mt])
	;(K.useEffect(() => {
		if (
			(c.promise && ke === 'loading') ||
			c.duration === 1 / 0 ||
			c.type === 'loading'
		)
			return
		let pe
		return (
			w || h || $
				? (() => {
						if (zt.current < At.current) {
							const Qe = new Date().getTime() - At.current
							be.current = be.current - Qe
						}
						zt.current = new Date().getTime()
					})()
				: (() => {
						be.current !== 1 / 0 &&
							((At.current = new Date().getTime()),
							(pe = setTimeout(() => {
								;(c.onAutoClose == null || c.onAutoClose.call(c, c), Ee())
							}, be.current)))
					})(),
			() => clearTimeout(pe)
		)
	}, [w, h, c, ke, $, Ee]),
		K.useEffect(() => {
			c.delete && (Ee(), c.onDismiss == null || c.onDismiss.call(c, c))
		}, [Ee, c.delete]))
	function Fe() {
		var pe
		if (q != null && q.loading) {
			var De
			return K.createElement(
				'div',
				{
					className: vr(
						M == null ? void 0 : M.loader,
						c == null || (De = c.classNames) == null ? void 0 : De.loader,
						'sonner-loader'
					),
					'data-visible': ke === 'loading'
				},
				q.loading
			)
		}
		return K.createElement(tP, {
			className: vr(
				M == null ? void 0 : M.loader,
				c == null || (pe = c.classNames) == null ? void 0 : pe.loader
			),
			visible: ke === 'loading'
		})
	}
	const _e = c.icon || (q == null ? void 0 : q[ke]) || XM(ke)
	var tr, mr
	return K.createElement(
		'li',
		{
			tabIndex: 0,
			ref: we,
			className: vr(
				O,
				Ue,
				M == null ? void 0 : M.toast,
				c == null || (t = c.classNames) == null ? void 0 : t.toast,
				M == null ? void 0 : M.default,
				M == null ? void 0 : M[ke],
				c == null || (r = c.classNames) == null ? void 0 : r[ke]
			),
			'data-sonner-toast': '',
			'data-rich-colors': (tr = c.richColors) != null ? tr : E,
			'data-styled': !(c.jsx || c.unstyled || d),
			'data-mounted': B,
			'data-promise': !!c.promise,
			'data-swiped': V,
			'data-removed': Z,
			'data-visible': We,
			'data-y-position': $r,
			'data-x-position': cn,
			'data-index': v,
			'data-front': Xe,
			'data-swiping': Ce,
			'data-dismissible': et,
			'data-type': ke,
			'data-invert': L,
			'data-swipe-out': U,
			'data-swipe-direction': W,
			'data-expanded': !!(w || (j && B)),
			'data-testid': c.testId,
			style: {
				'--index': v,
				'--toasts-before': v,
				'--z-index': _.length - v,
				'--offset': `${Z ? ce : Mt.current}px`,
				'--initial-height': j ? 'auto' : `${de}px`,
				...S,
				...c.style
			},
			onDragEnd: () => {
				;(Y(!1), N(null), (rt.current = null))
			},
			onPointerDown: (pe) => {
				pe.button !== 2 &&
					(Te ||
						!et ||
						((he.current = new Date()),
						Q(Mt.current),
						pe.target.setPointerCapture(pe.pointerId),
						pe.target.tagName !== 'BUTTON' &&
							(Y(!0), (rt.current = { x: pe.clientX, y: pe.clientY }))))
			},
			onPointerUp: () => {
				var pe, De, Ke
				if (U || !et) return
				rt.current = null
				const Qe = Number(
						((pe = we.current) == null
							? void 0
							: pe.style
									.getPropertyValue('--swipe-amount-x')
									.replace('px', '')) || 0
					),
					ft = Number(
						((De = we.current) == null
							? void 0
							: De.style
									.getPropertyValue('--swipe-amount-y')
									.replace('px', '')) || 0
					),
					Ze =
						new Date().getTime() -
						((Ke = he.current) == null ? void 0 : Ke.getTime()),
					gt = D === 'x' ? Qe : ft,
					Hn = Math.abs(gt) / Ze
				if (Math.abs(gt) >= _P || Hn > 0.11) {
					;(Q(Mt.current),
						c.onDismiss == null || c.onDismiss.call(c, c),
						oe(
							D === 'x' ? (Qe > 0 ? 'right' : 'left') : ft > 0 ? 'down' : 'up'
						),
						Ee(),
						z(!0))
					return
				} else {
					var lt, mt
					;((lt = we.current) == null ||
						lt.style.setProperty('--swipe-amount-x', '0px'),
						(mt = we.current) == null ||
							mt.style.setProperty('--swipe-amount-y', '0px'))
				}
				;(F(!1), Y(!1), N(null))
			},
			onPointerMove: (pe) => {
				var De, Ke, Qe
				if (
					!rt.current ||
					!et ||
					((De = window.getSelection()) == null
						? void 0
						: De.toString().length) > 0
				)
					return
				const Ze = pe.clientY - rt.current.y,
					gt = pe.clientX - rt.current.x
				var Hn
				const lt = (Hn = e.swipeDirections) != null ? Hn : wP(P)
				!D &&
					(Math.abs(gt) > 1 || Math.abs(Ze) > 1) &&
					N(Math.abs(gt) > Math.abs(Ze) ? 'x' : 'y')
				let mt = { x: 0, y: 0 }
				const Gn = (rr) => 1 / (1.5 + Math.abs(rr) / 20)
				if (D === 'y') {
					if (lt.includes('top') || lt.includes('bottom'))
						if (
							(lt.includes('top') && Ze < 0) ||
							(lt.includes('bottom') && Ze > 0)
						)
							mt.y = Ze
						else {
							const rr = Ze * Gn(Ze)
							mt.y = Math.abs(rr) < Math.abs(Ze) ? rr : Ze
						}
				} else if (D === 'x' && (lt.includes('left') || lt.includes('right')))
					if (
						(lt.includes('left') && gt < 0) ||
						(lt.includes('right') && gt > 0)
					)
						mt.x = gt
					else {
						const rr = gt * Gn(gt)
						mt.x = Math.abs(rr) < Math.abs(gt) ? rr : gt
					}
				;((Math.abs(mt.x) > 0 || Math.abs(mt.y) > 0) && F(!0),
					(Ke = we.current) == null ||
						Ke.style.setProperty('--swipe-amount-x', `${mt.x}px`),
					(Qe = we.current) == null ||
						Qe.style.setProperty('--swipe-amount-y', `${mt.y}px`))
			}
		},
		tt && !c.jsx && ke !== 'loading'
			? K.createElement(
					'button',
					{
						'aria-label': I,
						'data-disabled': Te,
						'data-close-button': !0,
						onClick:
							Te || !et
								? () => {}
								: () => {
										;(Ee(), c.onDismiss == null || c.onDismiss.call(c, c))
									},
						className: vr(
							M == null ? void 0 : M.closeButton,
							c == null || (n = c.classNames) == null ? void 0 : n.closeButton
						)
					},
					(mr = q == null ? void 0 : q.close) != null ? mr : sP
				)
			: null,
		(ke || c.icon || c.promise) &&
			c.icon !== null &&
			((q == null ? void 0 : q[ke]) !== null || c.icon)
			? K.createElement(
					'div',
					{
						'data-icon': '',
						className: vr(
							M == null ? void 0 : M.icon,
							c == null || (i = c.classNames) == null ? void 0 : i.icon
						)
					},
					c.promise || (c.type === 'loading' && !c.icon)
						? c.icon || Fe()
						: null,
					c.type !== 'loading' ? _e : null
				)
			: null,
		K.createElement(
			'div',
			{
				'data-content': '',
				className: vr(
					M == null ? void 0 : M.content,
					c == null || (a = c.classNames) == null ? void 0 : a.content
				)
			},
			K.createElement(
				'div',
				{
					'data-title': '',
					className: vr(
						M == null ? void 0 : M.title,
						c == null || (s = c.classNames) == null ? void 0 : s.title
					)
				},
				c.jsx ? c.jsx : typeof c.title == 'function' ? c.title() : c.title
			),
			c.description
				? K.createElement(
						'div',
						{
							'data-description': '',
							className: vr(
								A,
								St,
								M == null ? void 0 : M.description,
								c == null || (o = c.classNames) == null ? void 0 : o.description
							)
						},
						typeof c.description == 'function' ? c.description() : c.description
					)
				: null
		),
		K.isValidElement(c.cancel)
			? c.cancel
			: c.cancel && bs(c.cancel)
				? K.createElement(
						'button',
						{
							'data-button': !0,
							'data-cancel': !0,
							style: c.cancelButtonStyle || y,
							onClick: (pe) => {
								bs(c.cancel) &&
									et &&
									(c.cancel.onClick == null ||
										c.cancel.onClick.call(c.cancel, pe),
									Ee())
							},
							className: vr(
								M == null ? void 0 : M.cancelButton,
								c == null || (u = c.classNames) == null
									? void 0
									: u.cancelButton
							)
						},
						c.cancel.label
					)
				: null,
		K.isValidElement(c.action)
			? c.action
			: c.action && bs(c.action)
				? K.createElement(
						'button',
						{
							'data-button': !0,
							'data-action': !0,
							style: c.actionButtonStyle || b,
							onClick: (pe) => {
								bs(c.action) &&
									(c.action.onClick == null ||
										c.action.onClick.call(c.action, pe),
									!pe.defaultPrevented && Ee())
							},
							className: vr(
								M == null ? void 0 : M.actionButton,
								c == null || (l = c.classNames) == null
									? void 0
									: l.actionButton
							)
						},
						c.action.label
					)
				: null
	)
}
function ty() {
	if (typeof window > 'u' || typeof document > 'u') return 'ltr'
	const e = document.documentElement.getAttribute('dir')
	return e === 'auto' || !e
		? window.getComputedStyle(document.documentElement).direction
		: e
}
function xP(e, t) {
	const r = {}
	return (
		[e, t].forEach((n, i) => {
			const a = i === 1,
				s = a ? '--mobile-offset' : '--offset',
				o = a ? mP : gP
			function u(l) {
				;['top', 'right', 'bottom', 'left'].forEach((f) => {
					r[`${s}-${f}`] = typeof l == 'number' ? `${l}px` : l
				})
			}
			typeof n == 'number' || typeof n == 'string'
				? u(n)
				: typeof n == 'object'
					? ['top', 'right', 'bottom', 'left'].forEach((l) => {
							n[l] === void 0
								? (r[`${s}-${l}`] = o)
								: (r[`${s}-${l}`] =
										typeof n[l] == 'number' ? `${n[l]}px` : n[l])
						})
					: u(o)
		}),
		r
	)
}
const fV = K.forwardRef(function (t, r) {
	const {
			id: n,
			invert: i,
			position: a = 'bottom-right',
			hotkey: s = ['altKey', 'KeyT'],
			expand: o,
			closeButton: u,
			className: l,
			offset: f,
			mobileOffset: c,
			theme: d = 'light',
			richColors: h,
			duration: g,
			style: p,
			visibleToasts: m = pP,
			toastOptions: v,
			dir: _ = ty(),
			gap: w = yP,
			icons: x,
			containerAriaLabel: E = 'Notifications'
		} = t,
		[R, S] = K.useState([]),
		y = K.useMemo(
			() =>
				n ? R.filter((B) => B.toasterId === n) : R.filter((B) => !B.toasterId),
			[R, n]
		),
		b = K.useMemo(
			() =>
				Array.from(
					new Set(
						[a].concat(y.filter((B) => B.position).map((B) => B.position))
					)
				),
			[y, a]
		),
		[O, A] = K.useState([]),
		[T, P] = K.useState(!1),
		[k, j] = K.useState(!1),
		[M, q] = K.useState(
			d !== 'system'
				? d
				: typeof window < 'u' &&
					  window.matchMedia &&
					  window.matchMedia('(prefers-color-scheme: dark)').matches
					? 'dark'
					: 'light'
		),
		I = K.useRef(null),
		D = s.join('+').replace(/Key/g, '').replace(/Digit/g, ''),
		N = K.useRef(null),
		W = K.useRef(!1),
		oe = K.useCallback((B) => {
			S((re) => {
				var Z
				return (
					((Z = re.find((le) => le.id === B.id)) != null && Z.delete) ||
						Ct.dismiss(B.id),
					re.filter(({ id: le }) => le !== B.id)
				)
			})
		}, [])
	return (
		K.useEffect(
			() =>
				Ct.subscribe((B) => {
					if (B.dismiss) {
						requestAnimationFrame(() => {
							S((re) =>
								re.map((Z) => (Z.id === B.id ? { ...Z, delete: !0 } : Z))
							)
						})
						return
					}
					setTimeout(() => {
						WO.flushSync(() => {
							S((re) => {
								const Z = re.findIndex((le) => le.id === B.id)
								return Z !== -1
									? [...re.slice(0, Z), { ...re[Z], ...B }, ...re.slice(Z + 1)]
									: [B, ...re]
							})
						})
					})
				}),
			[R]
		),
		K.useEffect(() => {
			if (d !== 'system') {
				q(d)
				return
			}
			if (
				(d === 'system' &&
					(window.matchMedia &&
					window.matchMedia('(prefers-color-scheme: dark)').matches
						? q('dark')
						: q('light')),
				typeof window > 'u')
			)
				return
			const B = window.matchMedia('(prefers-color-scheme: dark)')
			try {
				B.addEventListener('change', ({ matches: re }) => {
					q(re ? 'dark' : 'light')
				})
			} catch {
				B.addListener(({ matches: Z }) => {
					try {
						q(Z ? 'dark' : 'light')
					} catch (le) {
						console.error(le)
					}
				})
			}
		}, [d]),
		K.useEffect(() => {
			R.length <= 1 && P(!1)
		}, [R]),
		K.useEffect(() => {
			const B = (re) => {
				var Z
				if (s.every((Y) => re[Y] || re.code === Y)) {
					var Ce
					;(P(!0), (Ce = I.current) == null || Ce.focus())
				}
				re.code === 'Escape' &&
					(document.activeElement === I.current ||
						((Z = I.current) != null && Z.contains(document.activeElement))) &&
					P(!1)
			}
			return (
				document.addEventListener('keydown', B),
				() => document.removeEventListener('keydown', B)
			)
		}, [s]),
		K.useEffect(() => {
			if (I.current)
				return () => {
					N.current &&
						(N.current.focus({ preventScroll: !0 }),
						(N.current = null),
						(W.current = !1))
				}
		}, [I.current]),
		K.createElement(
			'section',
			{
				ref: r,
				'aria-label': `${E} ${D}`,
				tabIndex: -1,
				'aria-live': 'polite',
				'aria-relevant': 'additions text',
				'aria-atomic': 'false',
				suppressHydrationWarning: !0
			},
			b.map((B, re) => {
				var Z
				const [le, Ce] = B.split('-')
				return y.length
					? K.createElement(
							'ol',
							{
								key: B,
								dir: _ === 'auto' ? ty() : _,
								tabIndex: -1,
								ref: I,
								className: l,
								'data-sonner-toaster': !0,
								'data-sonner-theme': M,
								'data-y-position': le,
								'data-x-position': Ce,
								style: {
									'--front-toast-height': `${((Z = O[0]) == null ? void 0 : Z.height) || 0}px`,
									'--width': `${vP}px`,
									'--gap': `${w}px`,
									...p,
									...xP(f, c)
								},
								onBlur: (Y) => {
									W.current &&
										!Y.currentTarget.contains(Y.relatedTarget) &&
										((W.current = !1),
										N.current &&
											(N.current.focus({ preventScroll: !0 }),
											(N.current = null)))
								},
								onFocus: (Y) => {
									;(Y.target instanceof HTMLElement &&
										Y.target.dataset.dismissible === 'false') ||
										W.current ||
										((W.current = !0), (N.current = Y.relatedTarget))
								},
								onMouseEnter: () => P(!0),
								onMouseMove: () => P(!0),
								onMouseLeave: () => {
									k || P(!1)
								},
								onDragEnd: () => P(!1),
								onPointerDown: (Y) => {
									;(Y.target instanceof HTMLElement &&
										Y.target.dataset.dismissible === 'false') ||
										j(!0)
								},
								onPointerUp: () => j(!1)
							},
							y
								.filter((Y) => (!Y.position && re === 0) || Y.position === B)
								.map((Y, U) => {
									var z, V
									return K.createElement(SP, {
										key: Y.id,
										icons: x,
										index: U,
										toast: Y,
										defaultRichColors: h,
										duration:
											(z = v == null ? void 0 : v.duration) != null ? z : g,
										className: v == null ? void 0 : v.className,
										descriptionClassName:
											v == null ? void 0 : v.descriptionClassName,
										invert: i,
										visibleToasts: m,
										closeButton:
											(V = v == null ? void 0 : v.closeButton) != null ? V : u,
										interacting: k,
										position: B,
										style: v == null ? void 0 : v.style,
										unstyled: v == null ? void 0 : v.unstyled,
										classNames: v == null ? void 0 : v.classNames,
										cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle,
										actionButtonStyle: v == null ? void 0 : v.actionButtonStyle,
										closeButtonAriaLabel:
											v == null ? void 0 : v.closeButtonAriaLabel,
										removeToast: oe,
										toasts: y.filter((F) => F.position == Y.position),
										heights: O.filter((F) => F.position == Y.position),
										setHeights: A,
										expandByDefault: o,
										gap: w,
										expanded: T,
										swipeDirections: t.swipeDirections
									})
								})
						)
					: null
			})
		)
	)
})
function DS(e) {
	var t,
		r,
		n = ''
	if (typeof e == 'string' || typeof e == 'number') n += e
	else if (typeof e == 'object')
		if (Array.isArray(e)) {
			var i = e.length
			for (t = 0; t < i; t++)
				e[t] && (r = DS(e[t])) && (n && (n += ' '), (n += r))
		} else for (r in e) e[r] && (n && (n += ' '), (n += r))
	return n
}
function RP() {
	for (var e, t, r = 0, n = '', i = arguments.length; r < i; r++)
		(e = arguments[r]) && (t = DS(e)) && (n && (n += ' '), (n += t))
	return n
}
const ry = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
	ny = RP,
	dV = (e, t) => (r) => {
		var n
		if ((t == null ? void 0 : t.variants) == null)
			return ny(
				e,
				r == null ? void 0 : r.class,
				r == null ? void 0 : r.className
			)
		const { variants: i, defaultVariants: a } = t,
			s = Object.keys(i).map((l) => {
				const f = r == null ? void 0 : r[l],
					c = a == null ? void 0 : a[l]
				if (f === null) return null
				const d = ry(f) || ry(c)
				return i[l][d]
			}),
			o =
				r &&
				Object.entries(r).reduce((l, f) => {
					let [c, d] = f
					return (d === void 0 || (l[c] = d), l)
				}, {}),
			u =
				t == null || (n = t.compoundVariants) === null || n === void 0
					? void 0
					: n.reduce((l, f) => {
							let { class: c, className: d, ...h } = f
							return Object.entries(h).every((g) => {
								let [p, m] = g
								return Array.isArray(m)
									? m.includes({ ...a, ...o }[p])
									: { ...a, ...o }[p] === m
							})
								? [...l, c, d]
								: l
						}, [])
		return ny(
			e,
			s,
			u,
			r == null ? void 0 : r.class,
			r == null ? void 0 : r.className
		)
	},
	OP = (e, t) => {
		const r = new Array(e.length + t.length)
		for (let n = 0; n < e.length; n++) r[n] = e[n]
		for (let n = 0; n < t.length; n++) r[e.length + n] = t[n]
		return r
	},
	CP = (e, t) => ({ classGroupId: e, validator: t }),
	NS = (e = new Map(), t = null, r) => ({
		nextPart: e,
		validators: t,
		classGroupId: r
	}),
	Xs = '-',
	iy = [],
	TP = 'arbitrary..',
	EP = (e) => {
		const t = MP(e),
			{ conflictingClassGroups: r, conflictingClassGroupModifiers: n } = e
		return {
			getClassGroupId: (s) => {
				if (s.startsWith('[') && s.endsWith(']')) return AP(s)
				const o = s.split(Xs),
					u = o[0] === '' && o.length > 1 ? 1 : 0
				return LS(o, u, t)
			},
			getConflictingClassGroupIds: (s, o) => {
				if (o) {
					const u = n[s],
						l = r[s]
					return u ? (l ? OP(l, u) : u) : l || iy
				}
				return r[s] || iy
			}
		}
	},
	LS = (e, t, r) => {
		if (e.length - t === 0) return r.classGroupId
		const i = e[t],
			a = r.nextPart.get(i)
		if (a) {
			const l = LS(e, t + 1, a)
			if (l) return l
		}
		const s = r.validators
		if (s === null) return
		const o = t === 0 ? e.join(Xs) : e.slice(t).join(Xs),
			u = s.length
		for (let l = 0; l < u; l++) {
			const f = s[l]
			if (f.validator(o)) return f.classGroupId
		}
	},
	AP = (e) =>
		e.slice(1, -1).indexOf(':') === -1
			? void 0
			: (() => {
					const t = e.slice(1, -1),
						r = t.indexOf(':'),
						n = t.slice(0, r)
					return n ? TP + n : void 0
				})(),
	MP = (e) => {
		const { theme: t, classGroups: r } = e
		return PP(r, t)
	},
	PP = (e, t) => {
		const r = NS()
		for (const n in e) {
			const i = e[n]
			Lp(i, r, n, t)
		}
		return r
	},
	Lp = (e, t, r, n) => {
		const i = e.length
		for (let a = 0; a < i; a++) {
			const s = e[a]
			IP(s, t, r, n)
		}
	},
	IP = (e, t, r, n) => {
		if (typeof e == 'string') {
			kP(e, t, r)
			return
		}
		if (typeof e == 'function') {
			qP(e, t, r, n)
			return
		}
		$P(e, t, r, n)
	},
	kP = (e, t, r) => {
		const n = e === '' ? t : jS(t, e)
		n.classGroupId = r
	},
	qP = (e, t, r, n) => {
		if (FP(e)) {
			Lp(e(n), t, r, n)
			return
		}
		;(t.validators === null && (t.validators = []), t.validators.push(CP(r, e)))
	},
	$P = (e, t, r, n) => {
		const i = Object.entries(e),
			a = i.length
		for (let s = 0; s < a; s++) {
			const [o, u] = i[s]
			Lp(u, jS(t, o), r, n)
		}
	},
	jS = (e, t) => {
		let r = e
		const n = t.split(Xs),
			i = n.length
		for (let a = 0; a < i; a++) {
			const s = n[a]
			let o = r.nextPart.get(s)
			;(o || ((o = NS()), r.nextPart.set(s, o)), (r = o))
		}
		return r
	},
	FP = (e) => 'isThemeGetter' in e && e.isThemeGetter === !0,
	DP = (e) => {
		if (e < 1) return { get: () => {}, set: () => {} }
		let t = 0,
			r = Object.create(null),
			n = Object.create(null)
		const i = (a, s) => {
			;((r[a] = s), t++, t > e && ((t = 0), (n = r), (r = Object.create(null))))
		}
		return {
			get(a) {
				let s = r[a]
				if (s !== void 0) return s
				if ((s = n[a]) !== void 0) return (i(a, s), s)
			},
			set(a, s) {
				a in r ? (r[a] = s) : i(a, s)
			}
		}
	},
	Vh = '!',
	ay = ':',
	NP = [],
	sy = (e, t, r, n, i) => ({
		modifiers: e,
		hasImportantModifier: t,
		baseClassName: r,
		maybePostfixModifierPosition: n,
		isExternal: i
	}),
	LP = (e) => {
		const { prefix: t, experimentalParseClassName: r } = e
		let n = (i) => {
			const a = []
			let s = 0,
				o = 0,
				u = 0,
				l
			const f = i.length
			for (let p = 0; p < f; p++) {
				const m = i[p]
				if (s === 0 && o === 0) {
					if (m === ay) {
						;(a.push(i.slice(u, p)), (u = p + 1))
						continue
					}
					if (m === '/') {
						l = p
						continue
					}
				}
				m === '[' ? s++ : m === ']' ? s-- : m === '(' ? o++ : m === ')' && o--
			}
			const c = a.length === 0 ? i : i.slice(u)
			let d = c,
				h = !1
			c.endsWith(Vh)
				? ((d = c.slice(0, -1)), (h = !0))
				: c.startsWith(Vh) && ((d = c.slice(1)), (h = !0))
			const g = l && l > u ? l - u : void 0
			return sy(a, h, d, g)
		}
		if (t) {
			const i = t + ay,
				a = n
			n = (s) =>
				s.startsWith(i) ? a(s.slice(i.length)) : sy(NP, !1, s, void 0, !0)
		}
		if (r) {
			const i = n
			n = (a) => r({ className: a, parseClassName: i })
		}
		return n
	},
	jP = (e) => {
		const t = new Map()
		return (
			e.orderSensitiveModifiers.forEach((r, n) => {
				t.set(r, 1e6 + n)
			}),
			(r) => {
				const n = []
				let i = []
				for (let a = 0; a < r.length; a++) {
					const s = r[a],
						o = s[0] === '[',
						u = t.has(s)
					o || u
						? (i.length > 0 && (i.sort(), n.push(...i), (i = [])), n.push(s))
						: i.push(s)
				}
				return (i.length > 0 && (i.sort(), n.push(...i)), n)
			}
		)
	},
	UP = (e) => ({
		cache: DP(e.cacheSize),
		parseClassName: LP(e),
		sortModifiers: jP(e),
		postfixLookupClassGroupIds: BP(e),
		...EP(e)
	}),
	BP = (e) => {
		const t = Object.create(null),
			r = e.postfixLookupClassGroups
		if (r) for (let n = 0; n < r.length; n++) t[r[n]] = !0
		return t
	},
	VP = /\s+/,
	zP = (e, t) => {
		const {
				parseClassName: r,
				getClassGroupId: n,
				getConflictingClassGroupIds: i,
				sortModifiers: a,
				postfixLookupClassGroupIds: s
			} = t,
			o = [],
			u = e.trim().split(VP)
		let l = ''
		for (let f = u.length - 1; f >= 0; f -= 1) {
			const c = u[f],
				{
					isExternal: d,
					modifiers: h,
					hasImportantModifier: g,
					baseClassName: p,
					maybePostfixModifierPosition: m
				} = r(c)
			if (d) {
				l = c + (l.length > 0 ? ' ' + l : l)
				continue
			}
			let v = !!m,
				_
			if (v) {
				const S = p.substring(0, m)
				_ = n(S)
				const y = _ && s[_] ? n(p) : void 0
				y && y !== _ && ((_ = y), (v = !1))
			} else _ = n(p)
			if (!_) {
				if (!v) {
					l = c + (l.length > 0 ? ' ' + l : l)
					continue
				}
				if (((_ = n(p)), !_)) {
					l = c + (l.length > 0 ? ' ' + l : l)
					continue
				}
				v = !1
			}
			const w = h.length === 0 ? '' : h.length === 1 ? h[0] : a(h).join(':'),
				x = g ? w + Vh : w,
				E = x + _
			if (o.indexOf(E) > -1) continue
			o.push(E)
			const R = i(_, v)
			for (let S = 0; S < R.length; ++S) {
				const y = R[S]
				o.push(x + y)
			}
			l = c + (l.length > 0 ? ' ' + l : l)
		}
		return l
	},
	HP = (...e) => {
		let t = 0,
			r,
			n,
			i = ''
		for (; t < e.length; )
			(r = e[t++]) && (n = US(r)) && (i && (i += ' '), (i += n))
		return i
	},
	US = (e) => {
		if (typeof e == 'string') return e
		let t,
			r = ''
		for (let n = 0; n < e.length; n++)
			e[n] && (t = US(e[n])) && (r && (r += ' '), (r += t))
		return r
	},
	GP = (e, ...t) => {
		let r, n, i, a
		const s = (u) => {
				const l = t.reduce((f, c) => c(f), e())
				return (
					(r = UP(l)),
					(n = r.cache.get),
					(i = r.cache.set),
					(a = o),
					o(u)
				)
			},
			o = (u) => {
				const l = n(u)
				if (l) return l
				const f = zP(u, r)
				return (i(u, f), f)
			}
		return ((a = s), (...u) => a(HP(...u)))
	},
	WP = [],
	nt = (e) => {
		const t = (r) => r[e] || WP
		return ((t.isThemeGetter = !0), t)
	},
	BS = /^\[(?:(\w[\w-]*):)?(.+)\]$/i,
	VS = /^\((?:(\w[\w-]*):)?(.+)\)$/i,
	KP = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/,
	QP = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
	ZP =
		/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
	YP = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/,
	JP = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
	XP =
		/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
	fn = (e) => KP.test(e),
	xe = (e) => !!e && !Number.isNaN(Number(e)),
	yr = (e) => !!e && Number.isInteger(Number(e)),
	ll = (e) => e.endsWith('%') && xe(e.slice(0, -1)),
	Nr = (e) => QP.test(e),
	zS = () => !0,
	eI = (e) => ZP.test(e) && !YP.test(e),
	jp = () => !1,
	tI = (e) => JP.test(e),
	rI = (e) => XP.test(e),
	nI = (e) => !ne(e) && !ae(e),
	iI = (e) =>
		e.startsWith('@container') &&
		((e[10] === '/' && e[11] !== void 0) ||
			(e[11] === 's' && e[16] !== void 0 && e.startsWith('-size/', 10)) ||
			(e[11] === 'n' && e[18] !== void 0 && e.startsWith('-normal/', 10))),
	aI = (e) => jn(e, WS, jp),
	ne = (e) => BS.test(e),
	Yn = (e) => jn(e, KS, eI),
	oy = (e) => jn(e, hI, xe),
	sI = (e) => jn(e, ZS, zS),
	oI = (e) => jn(e, QS, jp),
	uy = (e) => jn(e, HS, jp),
	uI = (e) => jn(e, GS, rI),
	ws = (e) => jn(e, YS, tI),
	ae = (e) => VS.test(e),
	Ca = (e) => Ai(e, KS),
	lI = (e) => Ai(e, QS),
	ly = (e) => Ai(e, HS),
	cI = (e) => Ai(e, WS),
	fI = (e) => Ai(e, GS),
	Ss = (e) => Ai(e, YS, !0),
	dI = (e) => Ai(e, ZS, !0),
	jn = (e, t, r) => {
		const n = BS.exec(e)
		return n ? (n[1] ? t(n[1]) : r(n[2])) : !1
	},
	Ai = (e, t, r = !1) => {
		const n = VS.exec(e)
		return n ? (n[1] ? t(n[1]) : r) : !1
	},
	HS = (e) => e === 'position' || e === 'percentage',
	GS = (e) => e === 'image' || e === 'url',
	WS = (e) => e === 'length' || e === 'size' || e === 'bg-size',
	KS = (e) => e === 'length',
	hI = (e) => e === 'number',
	QS = (e) => e === 'family-name',
	ZS = (e) => e === 'number' || e === 'weight',
	YS = (e) => e === 'shadow',
	pI = () => {
		const e = nt('color'),
			t = nt('font'),
			r = nt('text'),
			n = nt('font-weight'),
			i = nt('tracking'),
			a = nt('leading'),
			s = nt('breakpoint'),
			o = nt('container'),
			u = nt('spacing'),
			l = nt('radius'),
			f = nt('shadow'),
			c = nt('inset-shadow'),
			d = nt('text-shadow'),
			h = nt('drop-shadow'),
			g = nt('blur'),
			p = nt('perspective'),
			m = nt('aspect'),
			v = nt('ease'),
			_ = nt('animate'),
			w = () => [
				'auto',
				'avoid',
				'all',
				'avoid-page',
				'page',
				'left',
				'right',
				'column'
			],
			x = () => [
				'center',
				'top',
				'bottom',
				'left',
				'right',
				'top-left',
				'left-top',
				'top-right',
				'right-top',
				'bottom-right',
				'right-bottom',
				'bottom-left',
				'left-bottom'
			],
			E = () => [...x(), ae, ne],
			R = () => ['auto', 'hidden', 'clip', 'visible', 'scroll'],
			S = () => ['auto', 'contain', 'none'],
			y = () => [ae, ne, u],
			b = () => [fn, 'full', 'auto', ...y()],
			O = () => [yr, 'none', 'subgrid', ae, ne],
			A = () => ['auto', { span: ['full', yr, ae, ne] }, yr, ae, ne],
			T = () => [yr, 'auto', ae, ne],
			P = () => ['auto', 'min', 'max', 'fr', ae, ne],
			k = () => [
				'start',
				'end',
				'center',
				'between',
				'around',
				'evenly',
				'stretch',
				'baseline',
				'center-safe',
				'end-safe'
			],
			j = () => [
				'start',
				'end',
				'center',
				'stretch',
				'center-safe',
				'end-safe'
			],
			M = () => ['auto', ...y()],
			q = () => [
				fn,
				'auto',
				'full',
				'dvw',
				'dvh',
				'lvw',
				'lvh',
				'svw',
				'svh',
				'min',
				'max',
				'fit',
				...y()
			],
			I = () => [
				fn,
				'screen',
				'full',
				'dvw',
				'lvw',
				'svw',
				'min',
				'max',
				'fit',
				...y()
			],
			D = () => [
				fn,
				'screen',
				'full',
				'lh',
				'dvh',
				'lvh',
				'svh',
				'min',
				'max',
				'fit',
				...y()
			],
			N = () => [e, ae, ne],
			W = () => [...x(), ly, uy, { position: [ae, ne] }],
			oe = () => ['no-repeat', { repeat: ['', 'x', 'y', 'space', 'round'] }],
			B = () => ['auto', 'cover', 'contain', cI, aI, { size: [ae, ne] }],
			re = () => [ll, Ca, Yn],
			Z = () => ['', 'none', 'full', l, ae, ne],
			le = () => ['', xe, Ca, Yn],
			Ce = () => ['solid', 'dashed', 'dotted', 'double'],
			Y = () => [
				'normal',
				'multiply',
				'screen',
				'overlay',
				'darken',
				'lighten',
				'color-dodge',
				'color-burn',
				'hard-light',
				'soft-light',
				'difference',
				'exclusion',
				'hue',
				'saturation',
				'color',
				'luminosity'
			],
			U = () => [xe, ll, ly, uy],
			z = () => ['', 'none', g, ae, ne],
			V = () => ['none', xe, ae, ne],
			F = () => ['none', xe, ae, ne],
			ce = () => [xe, ae, ne],
			Q = () => [fn, 'full', ...y()]
		return {
			cacheSize: 500,
			theme: {
				animate: ['spin', 'ping', 'pulse', 'bounce'],
				aspect: ['video'],
				blur: [Nr],
				breakpoint: [Nr],
				color: [zS],
				container: [Nr],
				'drop-shadow': [Nr],
				ease: ['in', 'out', 'in-out'],
				font: [nI],
				'font-weight': [
					'thin',
					'extralight',
					'light',
					'normal',
					'medium',
					'semibold',
					'bold',
					'extrabold',
					'black'
				],
				'inset-shadow': [Nr],
				leading: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
				perspective: [
					'dramatic',
					'near',
					'normal',
					'midrange',
					'distant',
					'none'
				],
				radius: [Nr],
				shadow: [Nr],
				spacing: ['px', xe],
				text: [Nr],
				'text-shadow': [Nr],
				tracking: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest']
			},
			classGroups: {
				aspect: [{ aspect: ['auto', 'square', fn, ne, ae, m] }],
				container: ['container'],
				'container-type': [{ '@container': ['', 'normal', 'size', ae, ne] }],
				'container-named': [iI],
				columns: [{ columns: [xe, ne, ae, o] }],
				'break-after': [{ 'break-after': w() }],
				'break-before': [{ 'break-before': w() }],
				'break-inside': [
					{ 'break-inside': ['auto', 'avoid', 'avoid-page', 'avoid-column'] }
				],
				'box-decoration': [{ 'box-decoration': ['slice', 'clone'] }],
				box: [{ box: ['border', 'content'] }],
				display: [
					'block',
					'inline-block',
					'inline',
					'flex',
					'inline-flex',
					'table',
					'inline-table',
					'table-caption',
					'table-cell',
					'table-column',
					'table-column-group',
					'table-footer-group',
					'table-header-group',
					'table-row-group',
					'table-row',
					'flow-root',
					'grid',
					'inline-grid',
					'contents',
					'list-item',
					'hidden'
				],
				sr: ['sr-only', 'not-sr-only'],
				float: [{ float: ['right', 'left', 'none', 'start', 'end'] }],
				clear: [{ clear: ['left', 'right', 'both', 'none', 'start', 'end'] }],
				isolation: ['isolate', 'isolation-auto'],
				'object-fit': [
					{ object: ['contain', 'cover', 'fill', 'none', 'scale-down'] }
				],
				'object-position': [{ object: E() }],
				overflow: [{ overflow: R() }],
				'overflow-x': [{ 'overflow-x': R() }],
				'overflow-y': [{ 'overflow-y': R() }],
				overscroll: [{ overscroll: S() }],
				'overscroll-x': [{ 'overscroll-x': S() }],
				'overscroll-y': [{ 'overscroll-y': S() }],
				position: ['static', 'fixed', 'absolute', 'relative', 'sticky'],
				inset: [{ inset: b() }],
				'inset-x': [{ 'inset-x': b() }],
				'inset-y': [{ 'inset-y': b() }],
				start: [{ 'inset-s': b(), start: b() }],
				end: [{ 'inset-e': b(), end: b() }],
				'inset-bs': [{ 'inset-bs': b() }],
				'inset-be': [{ 'inset-be': b() }],
				top: [{ top: b() }],
				right: [{ right: b() }],
				bottom: [{ bottom: b() }],
				left: [{ left: b() }],
				visibility: ['visible', 'invisible', 'collapse'],
				z: [{ z: [yr, 'auto', ae, ne] }],
				basis: [{ basis: [fn, 'full', 'auto', o, ...y()] }],
				'flex-direction': [
					{ flex: ['row', 'row-reverse', 'col', 'col-reverse'] }
				],
				'flex-wrap': [{ flex: ['nowrap', 'wrap', 'wrap-reverse'] }],
				flex: [{ flex: [xe, fn, 'auto', 'initial', 'none', ne] }],
				grow: [{ grow: ['', xe, ae, ne] }],
				shrink: [{ shrink: ['', xe, ae, ne] }],
				order: [{ order: [yr, 'first', 'last', 'none', ae, ne] }],
				'grid-cols': [{ 'grid-cols': O() }],
				'col-start-end': [{ col: A() }],
				'col-start': [{ 'col-start': T() }],
				'col-end': [{ 'col-end': T() }],
				'grid-rows': [{ 'grid-rows': O() }],
				'row-start-end': [{ row: A() }],
				'row-start': [{ 'row-start': T() }],
				'row-end': [{ 'row-end': T() }],
				'grid-flow': [
					{ 'grid-flow': ['row', 'col', 'dense', 'row-dense', 'col-dense'] }
				],
				'auto-cols': [{ 'auto-cols': P() }],
				'auto-rows': [{ 'auto-rows': P() }],
				gap: [{ gap: y() }],
				'gap-x': [{ 'gap-x': y() }],
				'gap-y': [{ 'gap-y': y() }],
				'justify-content': [{ justify: [...k(), 'normal'] }],
				'justify-items': [{ 'justify-items': [...j(), 'normal'] }],
				'justify-self': [{ 'justify-self': ['auto', ...j()] }],
				'align-content': [{ content: ['normal', ...k()] }],
				'align-items': [{ items: [...j(), { baseline: ['', 'last'] }] }],
				'align-self': [{ self: ['auto', ...j(), { baseline: ['', 'last'] }] }],
				'place-content': [{ 'place-content': k() }],
				'place-items': [{ 'place-items': [...j(), 'baseline'] }],
				'place-self': [{ 'place-self': ['auto', ...j()] }],
				p: [{ p: y() }],
				px: [{ px: y() }],
				py: [{ py: y() }],
				ps: [{ ps: y() }],
				pe: [{ pe: y() }],
				pbs: [{ pbs: y() }],
				pbe: [{ pbe: y() }],
				pt: [{ pt: y() }],
				pr: [{ pr: y() }],
				pb: [{ pb: y() }],
				pl: [{ pl: y() }],
				m: [{ m: M() }],
				mx: [{ mx: M() }],
				my: [{ my: M() }],
				ms: [{ ms: M() }],
				me: [{ me: M() }],
				mbs: [{ mbs: M() }],
				mbe: [{ mbe: M() }],
				mt: [{ mt: M() }],
				mr: [{ mr: M() }],
				mb: [{ mb: M() }],
				ml: [{ ml: M() }],
				'space-x': [{ 'space-x': y() }],
				'space-x-reverse': ['space-x-reverse'],
				'space-y': [{ 'space-y': y() }],
				'space-y-reverse': ['space-y-reverse'],
				size: [{ size: q() }],
				'inline-size': [{ inline: ['auto', ...I()] }],
				'min-inline-size': [{ 'min-inline': ['auto', ...I()] }],
				'max-inline-size': [{ 'max-inline': ['none', ...I()] }],
				'block-size': [{ block: ['auto', ...D()] }],
				'min-block-size': [{ 'min-block': ['auto', ...D()] }],
				'max-block-size': [{ 'max-block': ['none', ...D()] }],
				w: [{ w: [o, 'screen', ...q()] }],
				'min-w': [{ 'min-w': [o, 'screen', 'none', ...q()] }],
				'max-w': [
					{ 'max-w': [o, 'screen', 'none', 'prose', { screen: [s] }, ...q()] }
				],
				h: [{ h: ['screen', 'lh', ...q()] }],
				'min-h': [{ 'min-h': ['screen', 'lh', 'none', ...q()] }],
				'max-h': [{ 'max-h': ['screen', 'lh', ...q()] }],
				'font-size': [{ text: ['base', r, Ca, Yn] }],
				'font-smoothing': ['antialiased', 'subpixel-antialiased'],
				'font-style': ['italic', 'not-italic'],
				'font-weight': [{ font: [n, dI, sI] }],
				'font-stretch': [
					{
						'font-stretch': [
							'ultra-condensed',
							'extra-condensed',
							'condensed',
							'semi-condensed',
							'normal',
							'semi-expanded',
							'expanded',
							'extra-expanded',
							'ultra-expanded',
							ll,
							ne
						]
					}
				],
				'font-family': [{ font: [lI, oI, t] }],
				'font-features': [{ 'font-features': [ne] }],
				'fvn-normal': ['normal-nums'],
				'fvn-ordinal': ['ordinal'],
				'fvn-slashed-zero': ['slashed-zero'],
				'fvn-figure': ['lining-nums', 'oldstyle-nums'],
				'fvn-spacing': ['proportional-nums', 'tabular-nums'],
				'fvn-fraction': ['diagonal-fractions', 'stacked-fractions'],
				tracking: [{ tracking: [i, ae, ne] }],
				'line-clamp': [{ 'line-clamp': [xe, 'none', ae, oy] }],
				leading: [{ leading: [a, ...y()] }],
				'list-image': [{ 'list-image': ['none', ae, ne] }],
				'list-style-position': [{ list: ['inside', 'outside'] }],
				'list-style-type': [{ list: ['disc', 'decimal', 'none', ae, ne] }],
				'text-alignment': [
					{ text: ['left', 'center', 'right', 'justify', 'start', 'end'] }
				],
				'placeholder-color': [{ placeholder: N() }],
				'text-color': [{ text: N() }],
				'text-decoration': [
					'underline',
					'overline',
					'line-through',
					'no-underline'
				],
				'text-decoration-style': [{ decoration: [...Ce(), 'wavy'] }],
				'text-decoration-thickness': [
					{ decoration: [xe, 'from-font', 'auto', ae, Yn] }
				],
				'text-decoration-color': [{ decoration: N() }],
				'underline-offset': [{ 'underline-offset': [xe, 'auto', ae, ne] }],
				'text-transform': [
					'uppercase',
					'lowercase',
					'capitalize',
					'normal-case'
				],
				'text-overflow': ['truncate', 'text-ellipsis', 'text-clip'],
				'text-wrap': [{ text: ['wrap', 'nowrap', 'balance', 'pretty'] }],
				indent: [{ indent: y() }],
				'tab-size': [{ tab: [yr, ae, ne] }],
				'vertical-align': [
					{
						align: [
							'baseline',
							'top',
							'middle',
							'bottom',
							'text-top',
							'text-bottom',
							'sub',
							'super',
							ae,
							ne
						]
					}
				],
				whitespace: [
					{
						whitespace: [
							'normal',
							'nowrap',
							'pre',
							'pre-line',
							'pre-wrap',
							'break-spaces'
						]
					}
				],
				break: [{ break: ['normal', 'words', 'all', 'keep'] }],
				wrap: [{ wrap: ['break-word', 'anywhere', 'normal'] }],
				hyphens: [{ hyphens: ['none', 'manual', 'auto'] }],
				content: [{ content: ['none', ae, ne] }],
				'bg-attachment': [{ bg: ['fixed', 'local', 'scroll'] }],
				'bg-clip': [{ 'bg-clip': ['border', 'padding', 'content', 'text'] }],
				'bg-origin': [{ 'bg-origin': ['border', 'padding', 'content'] }],
				'bg-position': [{ bg: W() }],
				'bg-repeat': [{ bg: oe() }],
				'bg-size': [{ bg: B() }],
				'bg-image': [
					{
						bg: [
							'none',
							{
								linear: [
									{ to: ['t', 'tr', 'r', 'br', 'b', 'bl', 'l', 'tl'] },
									yr,
									ae,
									ne
								],
								radial: ['', ae, ne],
								conic: [yr, ae, ne]
							},
							fI,
							uI
						]
					}
				],
				'bg-color': [{ bg: N() }],
				'gradient-from-pos': [{ from: re() }],
				'gradient-via-pos': [{ via: re() }],
				'gradient-to-pos': [{ to: re() }],
				'gradient-from': [{ from: N() }],
				'gradient-via': [{ via: N() }],
				'gradient-to': [{ to: N() }],
				rounded: [{ rounded: Z() }],
				'rounded-s': [{ 'rounded-s': Z() }],
				'rounded-e': [{ 'rounded-e': Z() }],
				'rounded-t': [{ 'rounded-t': Z() }],
				'rounded-r': [{ 'rounded-r': Z() }],
				'rounded-b': [{ 'rounded-b': Z() }],
				'rounded-l': [{ 'rounded-l': Z() }],
				'rounded-ss': [{ 'rounded-ss': Z() }],
				'rounded-se': [{ 'rounded-se': Z() }],
				'rounded-ee': [{ 'rounded-ee': Z() }],
				'rounded-es': [{ 'rounded-es': Z() }],
				'rounded-tl': [{ 'rounded-tl': Z() }],
				'rounded-tr': [{ 'rounded-tr': Z() }],
				'rounded-br': [{ 'rounded-br': Z() }],
				'rounded-bl': [{ 'rounded-bl': Z() }],
				'border-w': [{ border: le() }],
				'border-w-x': [{ 'border-x': le() }],
				'border-w-y': [{ 'border-y': le() }],
				'border-w-s': [{ 'border-s': le() }],
				'border-w-e': [{ 'border-e': le() }],
				'border-w-bs': [{ 'border-bs': le() }],
				'border-w-be': [{ 'border-be': le() }],
				'border-w-t': [{ 'border-t': le() }],
				'border-w-r': [{ 'border-r': le() }],
				'border-w-b': [{ 'border-b': le() }],
				'border-w-l': [{ 'border-l': le() }],
				'divide-x': [{ 'divide-x': le() }],
				'divide-x-reverse': ['divide-x-reverse'],
				'divide-y': [{ 'divide-y': le() }],
				'divide-y-reverse': ['divide-y-reverse'],
				'border-style': [{ border: [...Ce(), 'hidden', 'none'] }],
				'divide-style': [{ divide: [...Ce(), 'hidden', 'none'] }],
				'border-color': [{ border: N() }],
				'border-color-x': [{ 'border-x': N() }],
				'border-color-y': [{ 'border-y': N() }],
				'border-color-s': [{ 'border-s': N() }],
				'border-color-e': [{ 'border-e': N() }],
				'border-color-bs': [{ 'border-bs': N() }],
				'border-color-be': [{ 'border-be': N() }],
				'border-color-t': [{ 'border-t': N() }],
				'border-color-r': [{ 'border-r': N() }],
				'border-color-b': [{ 'border-b': N() }],
				'border-color-l': [{ 'border-l': N() }],
				'divide-color': [{ divide: N() }],
				'outline-style': [{ outline: [...Ce(), 'none', 'hidden'] }],
				'outline-offset': [{ 'outline-offset': [xe, ae, ne] }],
				'outline-w': [{ outline: ['', xe, Ca, Yn] }],
				'outline-color': [{ outline: N() }],
				shadow: [{ shadow: ['', 'none', f, Ss, ws] }],
				'shadow-color': [{ shadow: N() }],
				'inset-shadow': [{ 'inset-shadow': ['none', c, Ss, ws] }],
				'inset-shadow-color': [{ 'inset-shadow': N() }],
				'ring-w': [{ ring: le() }],
				'ring-w-inset': ['ring-inset'],
				'ring-color': [{ ring: N() }],
				'ring-offset-w': [{ 'ring-offset': [xe, Yn] }],
				'ring-offset-color': [{ 'ring-offset': N() }],
				'inset-ring-w': [{ 'inset-ring': le() }],
				'inset-ring-color': [{ 'inset-ring': N() }],
				'text-shadow': [{ 'text-shadow': ['none', d, Ss, ws] }],
				'text-shadow-color': [{ 'text-shadow': N() }],
				opacity: [{ opacity: [xe, ae, ne] }],
				'mix-blend': [{ 'mix-blend': [...Y(), 'plus-darker', 'plus-lighter'] }],
				'bg-blend': [{ 'bg-blend': Y() }],
				'mask-clip': [
					{
						'mask-clip': [
							'border',
							'padding',
							'content',
							'fill',
							'stroke',
							'view'
						]
					},
					'mask-no-clip'
				],
				'mask-composite': [
					{ mask: ['add', 'subtract', 'intersect', 'exclude'] }
				],
				'mask-image-linear-pos': [{ 'mask-linear': [xe] }],
				'mask-image-linear-from-pos': [{ 'mask-linear-from': U() }],
				'mask-image-linear-to-pos': [{ 'mask-linear-to': U() }],
				'mask-image-linear-from-color': [{ 'mask-linear-from': N() }],
				'mask-image-linear-to-color': [{ 'mask-linear-to': N() }],
				'mask-image-t-from-pos': [{ 'mask-t-from': U() }],
				'mask-image-t-to-pos': [{ 'mask-t-to': U() }],
				'mask-image-t-from-color': [{ 'mask-t-from': N() }],
				'mask-image-t-to-color': [{ 'mask-t-to': N() }],
				'mask-image-r-from-pos': [{ 'mask-r-from': U() }],
				'mask-image-r-to-pos': [{ 'mask-r-to': U() }],
				'mask-image-r-from-color': [{ 'mask-r-from': N() }],
				'mask-image-r-to-color': [{ 'mask-r-to': N() }],
				'mask-image-b-from-pos': [{ 'mask-b-from': U() }],
				'mask-image-b-to-pos': [{ 'mask-b-to': U() }],
				'mask-image-b-from-color': [{ 'mask-b-from': N() }],
				'mask-image-b-to-color': [{ 'mask-b-to': N() }],
				'mask-image-l-from-pos': [{ 'mask-l-from': U() }],
				'mask-image-l-to-pos': [{ 'mask-l-to': U() }],
				'mask-image-l-from-color': [{ 'mask-l-from': N() }],
				'mask-image-l-to-color': [{ 'mask-l-to': N() }],
				'mask-image-x-from-pos': [{ 'mask-x-from': U() }],
				'mask-image-x-to-pos': [{ 'mask-x-to': U() }],
				'mask-image-x-from-color': [{ 'mask-x-from': N() }],
				'mask-image-x-to-color': [{ 'mask-x-to': N() }],
				'mask-image-y-from-pos': [{ 'mask-y-from': U() }],
				'mask-image-y-to-pos': [{ 'mask-y-to': U() }],
				'mask-image-y-from-color': [{ 'mask-y-from': N() }],
				'mask-image-y-to-color': [{ 'mask-y-to': N() }],
				'mask-image-radial': [{ 'mask-radial': [ae, ne] }],
				'mask-image-radial-from-pos': [{ 'mask-radial-from': U() }],
				'mask-image-radial-to-pos': [{ 'mask-radial-to': U() }],
				'mask-image-radial-from-color': [{ 'mask-radial-from': N() }],
				'mask-image-radial-to-color': [{ 'mask-radial-to': N() }],
				'mask-image-radial-shape': [{ 'mask-radial': ['circle', 'ellipse'] }],
				'mask-image-radial-size': [
					{
						'mask-radial': [
							{ closest: ['side', 'corner'], farthest: ['side', 'corner'] }
						]
					}
				],
				'mask-image-radial-pos': [{ 'mask-radial-at': x() }],
				'mask-image-conic-pos': [{ 'mask-conic': [xe] }],
				'mask-image-conic-from-pos': [{ 'mask-conic-from': U() }],
				'mask-image-conic-to-pos': [{ 'mask-conic-to': U() }],
				'mask-image-conic-from-color': [{ 'mask-conic-from': N() }],
				'mask-image-conic-to-color': [{ 'mask-conic-to': N() }],
				'mask-mode': [{ mask: ['alpha', 'luminance', 'match'] }],
				'mask-origin': [
					{
						'mask-origin': [
							'border',
							'padding',
							'content',
							'fill',
							'stroke',
							'view'
						]
					}
				],
				'mask-position': [{ mask: W() }],
				'mask-repeat': [{ mask: oe() }],
				'mask-size': [{ mask: B() }],
				'mask-type': [{ 'mask-type': ['alpha', 'luminance'] }],
				'mask-image': [{ mask: ['none', ae, ne] }],
				filter: [{ filter: ['', 'none', ae, ne] }],
				blur: [{ blur: z() }],
				brightness: [{ brightness: [xe, ae, ne] }],
				contrast: [{ contrast: [xe, ae, ne] }],
				'drop-shadow': [{ 'drop-shadow': ['', 'none', h, Ss, ws] }],
				'drop-shadow-color': [{ 'drop-shadow': N() }],
				grayscale: [{ grayscale: ['', xe, ae, ne] }],
				'hue-rotate': [{ 'hue-rotate': [xe, ae, ne] }],
				invert: [{ invert: ['', xe, ae, ne] }],
				saturate: [{ saturate: [xe, ae, ne] }],
				sepia: [{ sepia: ['', xe, ae, ne] }],
				'backdrop-filter': [{ 'backdrop-filter': ['', 'none', ae, ne] }],
				'backdrop-blur': [{ 'backdrop-blur': z() }],
				'backdrop-brightness': [{ 'backdrop-brightness': [xe, ae, ne] }],
				'backdrop-contrast': [{ 'backdrop-contrast': [xe, ae, ne] }],
				'backdrop-grayscale': [{ 'backdrop-grayscale': ['', xe, ae, ne] }],
				'backdrop-hue-rotate': [{ 'backdrop-hue-rotate': [xe, ae, ne] }],
				'backdrop-invert': [{ 'backdrop-invert': ['', xe, ae, ne] }],
				'backdrop-opacity': [{ 'backdrop-opacity': [xe, ae, ne] }],
				'backdrop-saturate': [{ 'backdrop-saturate': [xe, ae, ne] }],
				'backdrop-sepia': [{ 'backdrop-sepia': ['', xe, ae, ne] }],
				'border-collapse': [{ border: ['collapse', 'separate'] }],
				'border-spacing': [{ 'border-spacing': y() }],
				'border-spacing-x': [{ 'border-spacing-x': y() }],
				'border-spacing-y': [{ 'border-spacing-y': y() }],
				'table-layout': [{ table: ['auto', 'fixed'] }],
				caption: [{ caption: ['top', 'bottom'] }],
				transition: [
					{
						transition: [
							'',
							'all',
							'colors',
							'opacity',
							'shadow',
							'transform',
							'none',
							ae,
							ne
						]
					}
				],
				'transition-behavior': [{ transition: ['normal', 'discrete'] }],
				duration: [{ duration: [xe, 'initial', ae, ne] }],
				ease: [{ ease: ['linear', 'initial', v, ae, ne] }],
				delay: [{ delay: [xe, ae, ne] }],
				animate: [{ animate: ['none', _, ae, ne] }],
				backface: [{ backface: ['hidden', 'visible'] }],
				perspective: [{ perspective: [p, ae, ne] }],
				'perspective-origin': [{ 'perspective-origin': E() }],
				rotate: [{ rotate: V() }],
				'rotate-x': [{ 'rotate-x': V() }],
				'rotate-y': [{ 'rotate-y': V() }],
				'rotate-z': [{ 'rotate-z': V() }],
				scale: [{ scale: F() }],
				'scale-x': [{ 'scale-x': F() }],
				'scale-y': [{ 'scale-y': F() }],
				'scale-z': [{ 'scale-z': F() }],
				'scale-3d': ['scale-3d'],
				skew: [{ skew: ce() }],
				'skew-x': [{ 'skew-x': ce() }],
				'skew-y': [{ 'skew-y': ce() }],
				transform: [{ transform: [ae, ne, '', 'none', 'gpu', 'cpu'] }],
				'transform-origin': [{ origin: E() }],
				'transform-style': [{ transform: ['3d', 'flat'] }],
				translate: [{ translate: Q() }],
				'translate-x': [{ 'translate-x': Q() }],
				'translate-y': [{ 'translate-y': Q() }],
				'translate-z': [{ 'translate-z': Q() }],
				'translate-none': ['translate-none'],
				zoom: [{ zoom: [yr, ae, ne] }],
				accent: [{ accent: N() }],
				appearance: [{ appearance: ['none', 'auto'] }],
				'caret-color': [{ caret: N() }],
				'color-scheme': [
					{
						scheme: [
							'normal',
							'dark',
							'light',
							'light-dark',
							'only-dark',
							'only-light'
						]
					}
				],
				cursor: [
					{
						cursor: [
							'auto',
							'default',
							'pointer',
							'wait',
							'text',
							'move',
							'help',
							'not-allowed',
							'none',
							'context-menu',
							'progress',
							'cell',
							'crosshair',
							'vertical-text',
							'alias',
							'copy',
							'no-drop',
							'grab',
							'grabbing',
							'all-scroll',
							'col-resize',
							'row-resize',
							'n-resize',
							'e-resize',
							's-resize',
							'w-resize',
							'ne-resize',
							'nw-resize',
							'se-resize',
							'sw-resize',
							'ew-resize',
							'ns-resize',
							'nesw-resize',
							'nwse-resize',
							'zoom-in',
							'zoom-out',
							ae,
							ne
						]
					}
				],
				'field-sizing': [{ 'field-sizing': ['fixed', 'content'] }],
				'pointer-events': [{ 'pointer-events': ['auto', 'none'] }],
				resize: [{ resize: ['none', '', 'y', 'x'] }],
				'scroll-behavior': [{ scroll: ['auto', 'smooth'] }],
				'scrollbar-thumb-color': [{ 'scrollbar-thumb': N() }],
				'scrollbar-track-color': [{ 'scrollbar-track': N() }],
				'scrollbar-gutter': [
					{ 'scrollbar-gutter': ['auto', 'stable', 'both'] }
				],
				'scrollbar-w': [{ scrollbar: ['auto', 'thin', 'none'] }],
				'scroll-m': [{ 'scroll-m': y() }],
				'scroll-mx': [{ 'scroll-mx': y() }],
				'scroll-my': [{ 'scroll-my': y() }],
				'scroll-ms': [{ 'scroll-ms': y() }],
				'scroll-me': [{ 'scroll-me': y() }],
				'scroll-mbs': [{ 'scroll-mbs': y() }],
				'scroll-mbe': [{ 'scroll-mbe': y() }],
				'scroll-mt': [{ 'scroll-mt': y() }],
				'scroll-mr': [{ 'scroll-mr': y() }],
				'scroll-mb': [{ 'scroll-mb': y() }],
				'scroll-ml': [{ 'scroll-ml': y() }],
				'scroll-p': [{ 'scroll-p': y() }],
				'scroll-px': [{ 'scroll-px': y() }],
				'scroll-py': [{ 'scroll-py': y() }],
				'scroll-ps': [{ 'scroll-ps': y() }],
				'scroll-pe': [{ 'scroll-pe': y() }],
				'scroll-pbs': [{ 'scroll-pbs': y() }],
				'scroll-pbe': [{ 'scroll-pbe': y() }],
				'scroll-pt': [{ 'scroll-pt': y() }],
				'scroll-pr': [{ 'scroll-pr': y() }],
				'scroll-pb': [{ 'scroll-pb': y() }],
				'scroll-pl': [{ 'scroll-pl': y() }],
				'snap-align': [{ snap: ['start', 'end', 'center', 'align-none'] }],
				'snap-stop': [{ snap: ['normal', 'always'] }],
				'snap-type': [{ snap: ['none', 'x', 'y', 'both'] }],
				'snap-strictness': [{ snap: ['mandatory', 'proximity'] }],
				touch: [{ touch: ['auto', 'none', 'manipulation'] }],
				'touch-x': [{ 'touch-pan': ['x', 'left', 'right'] }],
				'touch-y': [{ 'touch-pan': ['y', 'up', 'down'] }],
				'touch-pz': ['touch-pinch-zoom'],
				select: [{ select: ['none', 'text', 'all', 'auto'] }],
				'will-change': [
					{ 'will-change': ['auto', 'scroll', 'contents', 'transform', ae, ne] }
				],
				fill: [{ fill: ['none', ...N()] }],
				'stroke-w': [{ stroke: [xe, Ca, Yn, oy] }],
				stroke: [{ stroke: ['none', ...N()] }],
				'forced-color-adjust': [{ 'forced-color-adjust': ['auto', 'none'] }]
			},
			conflictingClassGroups: {
				'container-named': ['container-type'],
				overflow: ['overflow-x', 'overflow-y'],
				overscroll: ['overscroll-x', 'overscroll-y'],
				inset: [
					'inset-x',
					'inset-y',
					'inset-bs',
					'inset-be',
					'start',
					'end',
					'top',
					'right',
					'bottom',
					'left'
				],
				'inset-x': ['right', 'left'],
				'inset-y': ['top', 'bottom'],
				flex: ['basis', 'grow', 'shrink'],
				gap: ['gap-x', 'gap-y'],
				p: ['px', 'py', 'ps', 'pe', 'pbs', 'pbe', 'pt', 'pr', 'pb', 'pl'],
				px: ['pr', 'pl'],
				py: ['pt', 'pb'],
				m: ['mx', 'my', 'ms', 'me', 'mbs', 'mbe', 'mt', 'mr', 'mb', 'ml'],
				mx: ['mr', 'ml'],
				my: ['mt', 'mb'],
				size: ['w', 'h'],
				'font-size': ['leading'],
				'fvn-normal': [
					'fvn-ordinal',
					'fvn-slashed-zero',
					'fvn-figure',
					'fvn-spacing',
					'fvn-fraction'
				],
				'fvn-ordinal': ['fvn-normal'],
				'fvn-slashed-zero': ['fvn-normal'],
				'fvn-figure': ['fvn-normal'],
				'fvn-spacing': ['fvn-normal'],
				'fvn-fraction': ['fvn-normal'],
				'line-clamp': ['display', 'overflow'],
				rounded: [
					'rounded-s',
					'rounded-e',
					'rounded-t',
					'rounded-r',
					'rounded-b',
					'rounded-l',
					'rounded-ss',
					'rounded-se',
					'rounded-ee',
					'rounded-es',
					'rounded-tl',
					'rounded-tr',
					'rounded-br',
					'rounded-bl'
				],
				'rounded-s': ['rounded-ss', 'rounded-es'],
				'rounded-e': ['rounded-se', 'rounded-ee'],
				'rounded-t': ['rounded-tl', 'rounded-tr'],
				'rounded-r': ['rounded-tr', 'rounded-br'],
				'rounded-b': ['rounded-br', 'rounded-bl'],
				'rounded-l': ['rounded-tl', 'rounded-bl'],
				'border-spacing': ['border-spacing-x', 'border-spacing-y'],
				'border-w': [
					'border-w-x',
					'border-w-y',
					'border-w-s',
					'border-w-e',
					'border-w-bs',
					'border-w-be',
					'border-w-t',
					'border-w-r',
					'border-w-b',
					'border-w-l'
				],
				'border-w-x': ['border-w-r', 'border-w-l'],
				'border-w-y': ['border-w-t', 'border-w-b'],
				'border-color': [
					'border-color-x',
					'border-color-y',
					'border-color-s',
					'border-color-e',
					'border-color-bs',
					'border-color-be',
					'border-color-t',
					'border-color-r',
					'border-color-b',
					'border-color-l'
				],
				'border-color-x': ['border-color-r', 'border-color-l'],
				'border-color-y': ['border-color-t', 'border-color-b'],
				translate: ['translate-x', 'translate-y', 'translate-none'],
				'translate-none': [
					'translate',
					'translate-x',
					'translate-y',
					'translate-z'
				],
				'scroll-m': [
					'scroll-mx',
					'scroll-my',
					'scroll-ms',
					'scroll-me',
					'scroll-mbs',
					'scroll-mbe',
					'scroll-mt',
					'scroll-mr',
					'scroll-mb',
					'scroll-ml'
				],
				'scroll-mx': ['scroll-mr', 'scroll-ml'],
				'scroll-my': ['scroll-mt', 'scroll-mb'],
				'scroll-p': [
					'scroll-px',
					'scroll-py',
					'scroll-ps',
					'scroll-pe',
					'scroll-pbs',
					'scroll-pbe',
					'scroll-pt',
					'scroll-pr',
					'scroll-pb',
					'scroll-pl'
				],
				'scroll-px': ['scroll-pr', 'scroll-pl'],
				'scroll-py': ['scroll-pt', 'scroll-pb'],
				touch: ['touch-x', 'touch-y', 'touch-pz'],
				'touch-x': ['touch'],
				'touch-y': ['touch'],
				'touch-pz': ['touch']
			},
			conflictingClassGroupModifiers: { 'font-size': ['leading'] },
			postfixLookupClassGroups: ['container-type'],
			orderSensitiveModifiers: [
				'*',
				'**',
				'after',
				'backdrop',
				'before',
				'details-content',
				'file',
				'first-letter',
				'first-line',
				'marker',
				'placeholder',
				'selection'
			]
		}
	},
	hV = GP(pI),
	gI = ['top', 'right', 'bottom', 'left'],
	qn = Math.min,
	Nt = Math.max,
	eo = Math.round,
	xs = Math.floor,
	Cr = (e) => ({ x: e, y: e }),
	mI = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' }
function zh(e, t, r) {
	return Nt(e, qn(t, r))
}
function Yr(e, t) {
	return typeof e == 'function' ? e(t) : e
}
function Jr(e) {
	return e.split('-')[0]
}
function ma(e) {
	return e.split('-')[1]
}
function Up(e) {
	return e === 'x' ? 'y' : 'x'
}
function Bp(e) {
	return e === 'y' ? 'height' : 'width'
}
function Rr(e) {
	const t = e[0]
	return t === 't' || t === 'b' ? 'y' : 'x'
}
function Vp(e) {
	return Up(Rr(e))
}
function vI(e, t, r) {
	r === void 0 && (r = !1)
	const n = ma(e),
		i = Vp(e),
		a = Bp(i)
	let s =
		i === 'x'
			? n === (r ? 'end' : 'start')
				? 'right'
				: 'left'
			: n === 'start'
				? 'bottom'
				: 'top'
	return (t.reference[a] > t.floating[a] && (s = to(s)), [s, to(s)])
}
function yI(e) {
	const t = to(e)
	return [Hh(e), t, Hh(t)]
}
function Hh(e) {
	return e.includes('start')
		? e.replace('start', 'end')
		: e.replace('end', 'start')
}
const cy = ['left', 'right'],
	fy = ['right', 'left'],
	_I = ['top', 'bottom'],
	bI = ['bottom', 'top']
function wI(e, t, r) {
	switch (e) {
		case 'top':
		case 'bottom':
			return r ? (t ? fy : cy) : t ? cy : fy
		case 'left':
		case 'right':
			return t ? _I : bI
		default:
			return []
	}
}
function SI(e, t, r, n) {
	const i = ma(e)
	let a = wI(Jr(e), r === 'start', n)
	return (
		i && ((a = a.map((s) => s + '-' + i)), t && (a = a.concat(a.map(Hh)))),
		a
	)
}
function to(e) {
	const t = Jr(e)
	return mI[t] + e.slice(t.length)
}
function xI(e) {
	return { top: 0, right: 0, bottom: 0, left: 0, ...e }
}
function JS(e) {
	return typeof e != 'number' ? xI(e) : { top: e, right: e, bottom: e, left: e }
}
function ro(e) {
	const { x: t, y: r, width: n, height: i } = e
	return {
		width: n,
		height: i,
		top: r,
		left: t,
		right: t + n,
		bottom: r + i,
		x: t,
		y: r
	}
}
function dy(e, t, r) {
	let { reference: n, floating: i } = e
	const a = Rr(t),
		s = Vp(t),
		o = Bp(s),
		u = Jr(t),
		l = a === 'y',
		f = n.x + n.width / 2 - i.width / 2,
		c = n.y + n.height / 2 - i.height / 2,
		d = n[o] / 2 - i[o] / 2
	let h
	switch (u) {
		case 'top':
			h = { x: f, y: n.y - i.height }
			break
		case 'bottom':
			h = { x: f, y: n.y + n.height }
			break
		case 'right':
			h = { x: n.x + n.width, y: c }
			break
		case 'left':
			h = { x: n.x - i.width, y: c }
			break
		default:
			h = { x: n.x, y: n.y }
	}
	switch (ma(t)) {
		case 'start':
			h[s] -= d * (r && l ? -1 : 1)
			break
		case 'end':
			h[s] += d * (r && l ? -1 : 1)
			break
	}
	return h
}
async function RI(e, t) {
	var r
	t === void 0 && (t = {})
	const { x: n, y: i, platform: a, rects: s, elements: o, strategy: u } = e,
		{
			boundary: l = 'clippingAncestors',
			rootBoundary: f = 'viewport',
			elementContext: c = 'floating',
			altBoundary: d = !1,
			padding: h = 0
		} = Yr(t, e),
		g = JS(h),
		m = o[d ? (c === 'floating' ? 'reference' : 'floating') : c],
		v = ro(
			await a.getClippingRect({
				element:
					(r = await (a.isElement == null ? void 0 : a.isElement(m))) == null ||
					r
						? m
						: m.contextElement ||
							(await (a.getDocumentElement == null
								? void 0
								: a.getDocumentElement(o.floating))),
				boundary: l,
				rootBoundary: f,
				strategy: u
			})
		),
		_ =
			c === 'floating'
				? { x: n, y: i, width: s.floating.width, height: s.floating.height }
				: s.reference,
		w = await (a.getOffsetParent == null
			? void 0
			: a.getOffsetParent(o.floating)),
		x = (await (a.isElement == null ? void 0 : a.isElement(w)))
			? (await (a.getScale == null ? void 0 : a.getScale(w))) || { x: 1, y: 1 }
			: { x: 1, y: 1 },
		E = ro(
			a.convertOffsetParentRelativeRectToViewportRelativeRect
				? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
						elements: o,
						rect: _,
						offsetParent: w,
						strategy: u
					})
				: _
		)
	return {
		top: (v.top - E.top + g.top) / x.y,
		bottom: (E.bottom - v.bottom + g.bottom) / x.y,
		left: (v.left - E.left + g.left) / x.x,
		right: (E.right - v.right + g.right) / x.x
	}
}
const OI = 50,
	CI = async (e, t, r) => {
		const {
				placement: n = 'bottom',
				strategy: i = 'absolute',
				middleware: a = [],
				platform: s
			} = r,
			o = s.detectOverflow ? s : { ...s, detectOverflow: RI },
			u = await (s.isRTL == null ? void 0 : s.isRTL(t))
		let l = await s.getElementRects({ reference: e, floating: t, strategy: i }),
			{ x: f, y: c } = dy(l, n, u),
			d = n,
			h = 0
		const g = {}
		for (let p = 0; p < a.length; p++) {
			const m = a[p]
			if (!m) continue
			const { name: v, fn: _ } = m,
				{
					x: w,
					y: x,
					data: E,
					reset: R
				} = await _({
					x: f,
					y: c,
					initialPlacement: n,
					placement: d,
					strategy: i,
					middlewareData: g,
					rects: l,
					platform: o,
					elements: { reference: e, floating: t }
				})
			;((f = w ?? f),
				(c = x ?? c),
				(g[v] = { ...g[v], ...E }),
				R &&
					h < OI &&
					(h++,
					typeof R == 'object' &&
						(R.placement && (d = R.placement),
						R.rects &&
							(l =
								R.rects === !0
									? await s.getElementRects({
											reference: e,
											floating: t,
											strategy: i
										})
									: R.rects),
						({ x: f, y: c } = dy(l, d, u))),
					(p = -1)))
		}
		return { x: f, y: c, placement: d, strategy: i, middlewareData: g }
	},
	TI = (e) => ({
		name: 'arrow',
		options: e,
		async fn(t) {
			const {
					x: r,
					y: n,
					placement: i,
					rects: a,
					platform: s,
					elements: o,
					middlewareData: u
				} = t,
				{ element: l, padding: f = 0 } = Yr(e, t) || {}
			if (l == null) return {}
			const c = JS(f),
				d = { x: r, y: n },
				h = Vp(i),
				g = Bp(h),
				p = await s.getDimensions(l),
				m = h === 'y',
				v = m ? 'top' : 'left',
				_ = m ? 'bottom' : 'right',
				w = m ? 'clientHeight' : 'clientWidth',
				x = a.reference[g] + a.reference[h] - d[h] - a.floating[g],
				E = d[h] - a.reference[h],
				R = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(l))
			let S = R ? R[w] : 0
			;(!S || !(await (s.isElement == null ? void 0 : s.isElement(R)))) &&
				(S = o.floating[w] || a.floating[g])
			const y = x / 2 - E / 2,
				b = S / 2 - p[g] / 2 - 1,
				O = qn(c[v], b),
				A = qn(c[_], b),
				T = O,
				P = S - p[g] - A,
				k = S / 2 - p[g] / 2 + y,
				j = zh(T, k, P),
				M =
					!u.arrow &&
					ma(i) != null &&
					k !== j &&
					a.reference[g] / 2 - (k < T ? O : A) - p[g] / 2 < 0,
				q = M ? (k < T ? k - T : k - P) : 0
			return {
				[h]: d[h] + q,
				data: {
					[h]: j,
					centerOffset: k - j - q,
					...(M && { alignmentOffset: q })
				},
				reset: M
			}
		}
	}),
	EI = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'flip',
				options: e,
				async fn(t) {
					var r, n
					const {
							placement: i,
							middlewareData: a,
							rects: s,
							initialPlacement: o,
							platform: u,
							elements: l
						} = t,
						{
							mainAxis: f = !0,
							crossAxis: c = !0,
							fallbackPlacements: d,
							fallbackStrategy: h = 'bestFit',
							fallbackAxisSideDirection: g = 'none',
							flipAlignment: p = !0,
							...m
						} = Yr(e, t)
					if ((r = a.arrow) != null && r.alignmentOffset) return {}
					const v = Jr(i),
						_ = Rr(o),
						w = Jr(o) === o,
						x = await (u.isRTL == null ? void 0 : u.isRTL(l.floating)),
						E = d || (w || !p ? [to(o)] : yI(o)),
						R = g !== 'none'
					!d && R && E.push(...SI(o, p, g, x))
					const S = [o, ...E],
						y = await u.detectOverflow(t, m),
						b = []
					let O = ((n = a.flip) == null ? void 0 : n.overflows) || []
					if ((f && b.push(y[v]), c)) {
						const k = vI(i, s, x)
						b.push(y[k[0]], y[k[1]])
					}
					if (
						((O = [...O, { placement: i, overflows: b }]),
						!b.every((k) => k <= 0))
					) {
						var A, T
						const k = (((A = a.flip) == null ? void 0 : A.index) || 0) + 1,
							j = S[k]
						if (
							j &&
							(!(c === 'alignment' ? _ !== Rr(j) : !1) ||
								O.every((I) =>
									Rr(I.placement) === _ ? I.overflows[0] > 0 : !0
								))
						)
							return {
								data: { index: k, overflows: O },
								reset: { placement: j }
							}
						let M =
							(T = O.filter((q) => q.overflows[0] <= 0).sort(
								(q, I) => q.overflows[1] - I.overflows[1]
							)[0]) == null
								? void 0
								: T.placement
						if (!M)
							switch (h) {
								case 'bestFit': {
									var P
									const q =
										(P = O.filter((I) => {
											if (R) {
												const D = Rr(I.placement)
												return D === _ || D === 'y'
											}
											return !0
										})
											.map((I) => [
												I.placement,
												I.overflows
													.filter((D) => D > 0)
													.reduce((D, N) => D + N, 0)
											])
											.sort((I, D) => I[1] - D[1])[0]) == null
											? void 0
											: P[0]
									q && (M = q)
									break
								}
								case 'initialPlacement':
									M = o
									break
							}
						if (i !== M) return { reset: { placement: M } }
					}
					return {}
				}
			}
		)
	}
function hy(e, t) {
	return {
		top: e.top - t.height,
		right: e.right - t.width,
		bottom: e.bottom - t.height,
		left: e.left - t.width
	}
}
function py(e) {
	return gI.some((t) => e[t] >= 0)
}
const AI = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'hide',
				options: e,
				async fn(t) {
					const { rects: r, platform: n } = t,
						{ strategy: i = 'referenceHidden', ...a } = Yr(e, t)
					switch (i) {
						case 'referenceHidden': {
							const s = await n.detectOverflow(t, {
									...a,
									elementContext: 'reference'
								}),
								o = hy(s, r.reference)
							return {
								data: { referenceHiddenOffsets: o, referenceHidden: py(o) }
							}
						}
						case 'escaped': {
							const s = await n.detectOverflow(t, { ...a, altBoundary: !0 }),
								o = hy(s, r.floating)
							return { data: { escapedOffsets: o, escaped: py(o) } }
						}
						default:
							return {}
					}
				}
			}
		)
	},
	XS = new Set(['left', 'top'])
async function MI(e, t) {
	const { placement: r, platform: n, elements: i } = e,
		a = await (n.isRTL == null ? void 0 : n.isRTL(i.floating)),
		s = Jr(r),
		o = ma(r),
		u = Rr(r) === 'y',
		l = XS.has(s) ? -1 : 1,
		f = a && u ? -1 : 1,
		c = Yr(t, e)
	let {
		mainAxis: d,
		crossAxis: h,
		alignmentAxis: g
	} = typeof c == 'number'
		? { mainAxis: c, crossAxis: 0, alignmentAxis: null }
		: {
				mainAxis: c.mainAxis || 0,
				crossAxis: c.crossAxis || 0,
				alignmentAxis: c.alignmentAxis
			}
	return (
		o && typeof g == 'number' && (h = o === 'end' ? g * -1 : g),
		u ? { x: h * f, y: d * l } : { x: d * l, y: h * f }
	)
}
const PI = function (e) {
		return (
			e === void 0 && (e = 0),
			{
				name: 'offset',
				options: e,
				async fn(t) {
					var r, n
					const { x: i, y: a, placement: s, middlewareData: o } = t,
						u = await MI(t, e)
					return s === ((r = o.offset) == null ? void 0 : r.placement) &&
						(n = o.arrow) != null &&
						n.alignmentOffset
						? {}
						: { x: i + u.x, y: a + u.y, data: { ...u, placement: s } }
				}
			}
		)
	},
	II = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'shift',
				options: e,
				async fn(t) {
					const { x: r, y: n, placement: i, platform: a } = t,
						{
							mainAxis: s = !0,
							crossAxis: o = !1,
							limiter: u = {
								fn: (v) => {
									let { x: _, y: w } = v
									return { x: _, y: w }
								}
							},
							...l
						} = Yr(e, t),
						f = { x: r, y: n },
						c = await a.detectOverflow(t, l),
						d = Rr(Jr(i)),
						h = Up(d)
					let g = f[h],
						p = f[d]
					if (s) {
						const v = h === 'y' ? 'top' : 'left',
							_ = h === 'y' ? 'bottom' : 'right',
							w = g + c[v],
							x = g - c[_]
						g = zh(w, g, x)
					}
					if (o) {
						const v = d === 'y' ? 'top' : 'left',
							_ = d === 'y' ? 'bottom' : 'right',
							w = p + c[v],
							x = p - c[_]
						p = zh(w, p, x)
					}
					const m = u.fn({ ...t, [h]: g, [d]: p })
					return {
						...m,
						data: { x: m.x - r, y: m.y - n, enabled: { [h]: s, [d]: o } }
					}
				}
			}
		)
	},
	kI = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				options: e,
				fn(t) {
					const { x: r, y: n, placement: i, rects: a, middlewareData: s } = t,
						{ offset: o = 0, mainAxis: u = !0, crossAxis: l = !0 } = Yr(e, t),
						f = { x: r, y: n },
						c = Rr(i),
						d = Up(c)
					let h = f[d],
						g = f[c]
					const p = Yr(o, t),
						m =
							typeof p == 'number'
								? { mainAxis: p, crossAxis: 0 }
								: { mainAxis: 0, crossAxis: 0, ...p }
					if (u) {
						const w = d === 'y' ? 'height' : 'width',
							x = a.reference[d] - a.floating[w] + m.mainAxis,
							E = a.reference[d] + a.reference[w] - m.mainAxis
						h < x ? (h = x) : h > E && (h = E)
					}
					if (l) {
						var v, _
						const w = d === 'y' ? 'width' : 'height',
							x = XS.has(Jr(i)),
							E =
								a.reference[c] -
								a.floating[w] +
								((x && ((v = s.offset) == null ? void 0 : v[c])) || 0) +
								(x ? 0 : m.crossAxis),
							R =
								a.reference[c] +
								a.reference[w] +
								(x ? 0 : ((_ = s.offset) == null ? void 0 : _[c]) || 0) -
								(x ? m.crossAxis : 0)
						g < E ? (g = E) : g > R && (g = R)
					}
					return { [d]: h, [c]: g }
				}
			}
		)
	},
	qI = function (e) {
		return (
			e === void 0 && (e = {}),
			{
				name: 'size',
				options: e,
				async fn(t) {
					var r, n
					const { placement: i, rects: a, platform: s, elements: o } = t,
						{ apply: u = () => {}, ...l } = Yr(e, t),
						f = await s.detectOverflow(t, l),
						c = Jr(i),
						d = ma(i),
						h = Rr(i) === 'y',
						{ width: g, height: p } = a.floating
					let m, v
					c === 'top' || c === 'bottom'
						? ((m = c),
							(v =
								d ===
								((await (s.isRTL == null ? void 0 : s.isRTL(o.floating)))
									? 'start'
									: 'end')
									? 'left'
									: 'right'))
						: ((v = c), (m = d === 'end' ? 'top' : 'bottom'))
					const _ = p - f.top - f.bottom,
						w = g - f.left - f.right,
						x = qn(p - f[m], _),
						E = qn(g - f[v], w),
						R = !t.middlewareData.shift
					let S = x,
						y = E
					if (
						((r = t.middlewareData.shift) != null && r.enabled.x && (y = w),
						(n = t.middlewareData.shift) != null && n.enabled.y && (S = _),
						R && !d)
					) {
						const O = Nt(f.left, 0),
							A = Nt(f.right, 0),
							T = Nt(f.top, 0),
							P = Nt(f.bottom, 0)
						h
							? (y = g - 2 * (O !== 0 || A !== 0 ? O + A : Nt(f.left, f.right)))
							: (S = p - 2 * (T !== 0 || P !== 0 ? T + P : Nt(f.top, f.bottom)))
					}
					await u({ ...t, availableWidth: y, availableHeight: S })
					const b = await s.getDimensions(o.floating)
					return g !== b.width || p !== b.height ? { reset: { rects: !0 } } : {}
				}
			}
		)
	}
function $o() {
	return typeof window < 'u'
}
function va(e) {
	return ex(e) ? (e.nodeName || '').toLowerCase() : '#document'
}
function jt(e) {
	var t
	return (
		(e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) ||
		window
	)
}
function Ir(e) {
	var t
	return (t = (ex(e) ? e.ownerDocument : e.document) || window.document) == null
		? void 0
		: t.documentElement
}
function ex(e) {
	return $o() ? e instanceof Node || e instanceof jt(e).Node : !1
}
function dr(e) {
	return $o() ? e instanceof Element || e instanceof jt(e).Element : !1
}
function sn(e) {
	return $o() ? e instanceof HTMLElement || e instanceof jt(e).HTMLElement : !1
}
function gy(e) {
	return !$o() || typeof ShadowRoot > 'u'
		? !1
		: e instanceof ShadowRoot || e instanceof jt(e).ShadowRoot
}
function os(e) {
	const { overflow: t, overflowX: r, overflowY: n, display: i } = hr(e)
	return (
		/auto|scroll|overlay|hidden|clip/.test(t + n + r) &&
		i !== 'inline' &&
		i !== 'contents'
	)
}
function $I(e) {
	return /^(table|td|th)$/.test(va(e))
}
function Fo(e) {
	try {
		if (e.matches(':popover-open')) return !0
	} catch {}
	try {
		return e.matches(':modal')
	} catch {
		return !1
	}
}
const FI = /transform|translate|scale|rotate|perspective|filter/,
	DI = /paint|layout|strict|content/,
	Jn = (e) => !!e && e !== 'none'
let cl
function zp(e) {
	const t = dr(e) ? hr(e) : e
	return (
		Jn(t.transform) ||
		Jn(t.translate) ||
		Jn(t.scale) ||
		Jn(t.rotate) ||
		Jn(t.perspective) ||
		(!Hp() && (Jn(t.backdropFilter) || Jn(t.filter))) ||
		FI.test(t.willChange || '') ||
		DI.test(t.contain || '')
	)
}
function NI(e) {
	let t = $n(e)
	for (; sn(t) && !ra(t); ) {
		if (zp(t)) return t
		if (Fo(t)) return null
		t = $n(t)
	}
	return null
}
function Hp() {
	return (
		cl == null &&
			(cl =
				typeof CSS < 'u' &&
				CSS.supports &&
				CSS.supports('-webkit-backdrop-filter', 'none')),
		cl
	)
}
function ra(e) {
	return /^(html|body|#document)$/.test(va(e))
}
function hr(e) {
	return jt(e).getComputedStyle(e)
}
function Do(e) {
	return dr(e)
		? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
		: { scrollLeft: e.scrollX, scrollTop: e.scrollY }
}
function $n(e) {
	if (va(e) === 'html') return e
	const t = e.assignedSlot || e.parentNode || (gy(e) && e.host) || Ir(e)
	return gy(t) ? t.host : t
}
function tx(e) {
	const t = $n(e)
	return ra(t)
		? e.ownerDocument
			? e.ownerDocument.body
			: e.body
		: sn(t) && os(t)
			? t
			: tx(t)
}
function Wa(e, t, r) {
	var n
	;(t === void 0 && (t = []), r === void 0 && (r = !0))
	const i = tx(e),
		a = i === ((n = e.ownerDocument) == null ? void 0 : n.body),
		s = jt(i)
	if (a) {
		const o = Gh(s)
		return t.concat(
			s,
			s.visualViewport || [],
			os(i) ? i : [],
			o && r ? Wa(o) : []
		)
	} else return t.concat(i, Wa(i, [], r))
}
function Gh(e) {
	return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function rx(e) {
	const t = hr(e)
	let r = parseFloat(t.width) || 0,
		n = parseFloat(t.height) || 0
	const i = sn(e),
		a = i ? e.offsetWidth : r,
		s = i ? e.offsetHeight : n,
		o = eo(r) !== a || eo(n) !== s
	return (o && ((r = a), (n = s)), { width: r, height: n, $: o })
}
function Gp(e) {
	return dr(e) ? e : e.contextElement
}
function ji(e) {
	const t = Gp(e)
	if (!sn(t)) return Cr(1)
	const r = t.getBoundingClientRect(),
		{ width: n, height: i, $: a } = rx(t)
	let s = (a ? eo(r.width) : r.width) / n,
		o = (a ? eo(r.height) : r.height) / i
	return (
		(!s || !Number.isFinite(s)) && (s = 1),
		(!o || !Number.isFinite(o)) && (o = 1),
		{ x: s, y: o }
	)
}
const LI = Cr(0)
function nx(e) {
	const t = jt(e)
	return !Hp() || !t.visualViewport
		? LI
		: { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop }
}
function jI(e, t, r) {
	return (t === void 0 && (t = !1), !r || (t && r !== jt(e)) ? !1 : t)
}
function wi(e, t, r, n) {
	;(t === void 0 && (t = !1), r === void 0 && (r = !1))
	const i = e.getBoundingClientRect(),
		a = Gp(e)
	let s = Cr(1)
	t && (n ? dr(n) && (s = ji(n)) : (s = ji(e)))
	const o = jI(a, r, n) ? nx(a) : Cr(0)
	let u = (i.left + o.x) / s.x,
		l = (i.top + o.y) / s.y,
		f = i.width / s.x,
		c = i.height / s.y
	if (a) {
		const d = jt(a),
			h = n && dr(n) ? jt(n) : n
		let g = d,
			p = Gh(g)
		for (; p && n && h !== g; ) {
			const m = ji(p),
				v = p.getBoundingClientRect(),
				_ = hr(p),
				w = v.left + (p.clientLeft + parseFloat(_.paddingLeft)) * m.x,
				x = v.top + (p.clientTop + parseFloat(_.paddingTop)) * m.y
			;((u *= m.x),
				(l *= m.y),
				(f *= m.x),
				(c *= m.y),
				(u += w),
				(l += x),
				(g = jt(p)),
				(p = Gh(g)))
		}
	}
	return ro({ width: f, height: c, x: u, y: l })
}
function No(e, t) {
	const r = Do(e).scrollLeft
	return t ? t.left + r : wi(Ir(e)).left + r
}
function ix(e, t) {
	const r = e.getBoundingClientRect(),
		n = r.left + t.scrollLeft - No(e, r),
		i = r.top + t.scrollTop
	return { x: n, y: i }
}
function UI(e) {
	let { elements: t, rect: r, offsetParent: n, strategy: i } = e
	const a = i === 'fixed',
		s = Ir(n),
		o = t ? Fo(t.floating) : !1
	if (n === s || (o && a)) return r
	let u = { scrollLeft: 0, scrollTop: 0 },
		l = Cr(1)
	const f = Cr(0),
		c = sn(n)
	if ((c || (!c && !a)) && ((va(n) !== 'body' || os(s)) && (u = Do(n)), c)) {
		const h = wi(n)
		;((l = ji(n)), (f.x = h.x + n.clientLeft), (f.y = h.y + n.clientTop))
	}
	const d = s && !c && !a ? ix(s, u) : Cr(0)
	return {
		width: r.width * l.x,
		height: r.height * l.y,
		x: r.x * l.x - u.scrollLeft * l.x + f.x + d.x,
		y: r.y * l.y - u.scrollTop * l.y + f.y + d.y
	}
}
function BI(e) {
	return Array.from(e.getClientRects())
}
function VI(e) {
	const t = Ir(e),
		r = Do(e),
		n = e.ownerDocument.body,
		i = Nt(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
		a = Nt(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight)
	let s = -r.scrollLeft + No(e)
	const o = -r.scrollTop
	return (
		hr(n).direction === 'rtl' && (s += Nt(t.clientWidth, n.clientWidth) - i),
		{ width: i, height: a, x: s, y: o }
	)
}
const my = 25
function zI(e, t) {
	const r = jt(e),
		n = Ir(e),
		i = r.visualViewport
	let a = n.clientWidth,
		s = n.clientHeight,
		o = 0,
		u = 0
	if (i) {
		;((a = i.width), (s = i.height))
		const f = Hp()
		;(!f || (f && t === 'fixed')) && ((o = i.offsetLeft), (u = i.offsetTop))
	}
	const l = No(n)
	if (l <= 0) {
		const f = n.ownerDocument,
			c = f.body,
			d = getComputedStyle(c),
			h =
				(f.compatMode === 'CSS1Compat' &&
					parseFloat(d.marginLeft) + parseFloat(d.marginRight)) ||
				0,
			g = Math.abs(n.clientWidth - c.clientWidth - h)
		g <= my && (a -= g)
	} else l <= my && (a += l)
	return { width: a, height: s, x: o, y: u }
}
function HI(e, t) {
	const r = wi(e, !0, t === 'fixed'),
		n = r.top + e.clientTop,
		i = r.left + e.clientLeft,
		a = sn(e) ? ji(e) : Cr(1),
		s = e.clientWidth * a.x,
		o = e.clientHeight * a.y,
		u = i * a.x,
		l = n * a.y
	return { width: s, height: o, x: u, y: l }
}
function vy(e, t, r) {
	let n
	if (t === 'viewport') n = zI(e, r)
	else if (t === 'document') n = VI(Ir(e))
	else if (dr(t)) n = HI(t, r)
	else {
		const i = nx(e)
		n = { x: t.x - i.x, y: t.y - i.y, width: t.width, height: t.height }
	}
	return ro(n)
}
function ax(e, t) {
	const r = $n(e)
	return r === t || !dr(r) || ra(r)
		? !1
		: hr(r).position === 'fixed' || ax(r, t)
}
function GI(e, t) {
	const r = t.get(e)
	if (r) return r
	let n = Wa(e, [], !1).filter((o) => dr(o) && va(o) !== 'body'),
		i = null
	const a = hr(e).position === 'fixed'
	let s = a ? $n(e) : e
	for (; dr(s) && !ra(s); ) {
		const o = hr(s),
			u = zp(s)
		;(!u && o.position === 'fixed' && (i = null),
			(
				a
					? !u && !i
					: (!u &&
							o.position === 'static' &&
							!!i &&
							(i.position === 'absolute' || i.position === 'fixed')) ||
						(os(s) && !u && ax(e, s))
			)
				? (n = n.filter((f) => f !== s))
				: (i = o),
			(s = $n(s)))
	}
	return (t.set(e, n), n)
}
function WI(e) {
	let { element: t, boundary: r, rootBoundary: n, strategy: i } = e
	const s = [
			...(r === 'clippingAncestors'
				? Fo(t)
					? []
					: GI(t, this._c)
				: [].concat(r)),
			n
		],
		o = vy(t, s[0], i)
	let u = o.top,
		l = o.right,
		f = o.bottom,
		c = o.left
	for (let d = 1; d < s.length; d++) {
		const h = vy(t, s[d], i)
		;((u = Nt(h.top, u)),
			(l = qn(h.right, l)),
			(f = qn(h.bottom, f)),
			(c = Nt(h.left, c)))
	}
	return { width: l - c, height: f - u, x: c, y: u }
}
function KI(e) {
	const { width: t, height: r } = rx(e)
	return { width: t, height: r }
}
function QI(e, t, r) {
	const n = sn(t),
		i = Ir(t),
		a = r === 'fixed',
		s = wi(e, !0, a, t)
	let o = { scrollLeft: 0, scrollTop: 0 }
	const u = Cr(0)
	function l() {
		u.x = No(i)
	}
	if (n || (!n && !a))
		if (((va(t) !== 'body' || os(i)) && (o = Do(t)), n)) {
			const h = wi(t, !0, a, t)
			;((u.x = h.x + t.clientLeft), (u.y = h.y + t.clientTop))
		} else i && l()
	a && !n && i && l()
	const f = i && !n && !a ? ix(i, o) : Cr(0),
		c = s.left + o.scrollLeft - u.x - f.x,
		d = s.top + o.scrollTop - u.y - f.y
	return { x: c, y: d, width: s.width, height: s.height }
}
function fl(e) {
	return hr(e).position === 'static'
}
function yy(e, t) {
	if (!sn(e) || hr(e).position === 'fixed') return null
	if (t) return t(e)
	let r = e.offsetParent
	return (Ir(e) === r && (r = r.ownerDocument.body), r)
}
function sx(e, t) {
	const r = jt(e)
	if (Fo(e)) return r
	if (!sn(e)) {
		let i = $n(e)
		for (; i && !ra(i); ) {
			if (dr(i) && !fl(i)) return i
			i = $n(i)
		}
		return r
	}
	let n = yy(e, t)
	for (; n && $I(n) && fl(n); ) n = yy(n, t)
	return n && ra(n) && fl(n) && !zp(n) ? r : n || NI(e) || r
}
const ZI = async function (e) {
	const t = this.getOffsetParent || sx,
		r = this.getDimensions,
		n = await r(e.floating)
	return {
		reference: QI(e.reference, await t(e.floating), e.strategy),
		floating: { x: 0, y: 0, width: n.width, height: n.height }
	}
}
function YI(e) {
	return hr(e).direction === 'rtl'
}
const JI = {
	convertOffsetParentRelativeRectToViewportRelativeRect: UI,
	getDocumentElement: Ir,
	getClippingRect: WI,
	getOffsetParent: sx,
	getElementRects: ZI,
	getClientRects: BI,
	getDimensions: KI,
	getScale: ji,
	isElement: dr,
	isRTL: YI
}
function ox(e, t) {
	return (
		e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
	)
}
function XI(e, t) {
	let r = null,
		n
	const i = Ir(e)
	function a() {
		var o
		;(clearTimeout(n), (o = r) == null || o.disconnect(), (r = null))
	}
	function s(o, u) {
		;(o === void 0 && (o = !1), u === void 0 && (u = 1), a())
		const l = e.getBoundingClientRect(),
			{ left: f, top: c, width: d, height: h } = l
		if ((o || t(), !d || !h)) return
		const g = xs(c),
			p = xs(i.clientWidth - (f + d)),
			m = xs(i.clientHeight - (c + h)),
			v = xs(f),
			w = {
				rootMargin: -g + 'px ' + -p + 'px ' + -m + 'px ' + -v + 'px',
				threshold: Nt(0, qn(1, u)) || 1
			}
		let x = !0
		function E(R) {
			const S = R[0].intersectionRatio
			if (S !== u) {
				if (!x) return s()
				S
					? s(!1, S)
					: (n = setTimeout(() => {
							s(!1, 1e-7)
						}, 1e3))
			}
			;(S === 1 && !ox(l, e.getBoundingClientRect()) && s(), (x = !1))
		}
		try {
			r = new IntersectionObserver(E, { ...w, root: i.ownerDocument })
		} catch {
			r = new IntersectionObserver(E, w)
		}
		r.observe(e)
	}
	return (s(!0), a)
}
function pV(e, t, r, n) {
	n === void 0 && (n = {})
	const {
			ancestorScroll: i = !0,
			ancestorResize: a = !0,
			elementResize: s = typeof ResizeObserver == 'function',
			layoutShift: o = typeof IntersectionObserver == 'function',
			animationFrame: u = !1
		} = n,
		l = Gp(e),
		f = i || a ? [...(l ? Wa(l) : []), ...(t ? Wa(t) : [])] : []
	f.forEach((v) => {
		;(i && v.addEventListener('scroll', r, { passive: !0 }),
			a && v.addEventListener('resize', r))
	})
	const c = l && o ? XI(l, r) : null
	let d = -1,
		h = null
	s &&
		((h = new ResizeObserver((v) => {
			let [_] = v
			;(_ &&
				_.target === l &&
				h &&
				t &&
				(h.unobserve(t),
				cancelAnimationFrame(d),
				(d = requestAnimationFrame(() => {
					var w
					;(w = h) == null || w.observe(t)
				}))),
				r())
		})),
		l && !u && h.observe(l),
		t && h.observe(t))
	let g,
		p = u ? wi(e) : null
	u && m()
	function m() {
		const v = wi(e)
		;(p && !ox(p, v) && r(), (p = v), (g = requestAnimationFrame(m)))
	}
	return (
		r(),
		() => {
			var v
			;(f.forEach((_) => {
				;(i && _.removeEventListener('scroll', r),
					a && _.removeEventListener('resize', r))
			}),
				c == null || c(),
				(v = h) == null || v.disconnect(),
				(h = null),
				u && cancelAnimationFrame(g))
		}
	)
}
const gV = PI,
	mV = II,
	vV = EI,
	yV = qI,
	_V = AI,
	bV = TI,
	wV = kI,
	SV = (e, t, r) => {
		const n = new Map(),
			i = { platform: JI, ...r },
			a = { ...i.platform, _c: n }
		return CI(e, t, { ...i, platform: a })
	}
var ek = function (e) {
		if (typeof document > 'u') return null
		var t = Array.isArray(e) ? e[0] : e
		return t.ownerDocument.body
	},
	$i = new WeakMap(),
	Rs = new WeakMap(),
	Os = {},
	dl = 0,
	ux = function (e) {
		return e && (e.host || ux(e.parentNode))
	},
	tk = function (e, t) {
		return t
			.map(function (r) {
				if (e.contains(r)) return r
				var n = ux(r)
				return n && e.contains(n)
					? n
					: (console.error(
							'aria-hidden',
							r,
							'in not contained inside',
							e,
							'. Doing nothing'
						),
						null)
			})
			.filter(function (r) {
				return !!r
			})
	},
	rk = function (e, t, r, n) {
		var i = tk(t, Array.isArray(e) ? e : [e])
		Os[r] || (Os[r] = new WeakMap())
		var a = Os[r],
			s = [],
			o = new Set(),
			u = new Set(i),
			l = function (c) {
				!c || o.has(c) || (o.add(c), l(c.parentNode))
			}
		i.forEach(l)
		var f = function (c) {
			!c ||
				u.has(c) ||
				Array.prototype.forEach.call(c.children, function (d) {
					if (o.has(d)) f(d)
					else
						try {
							var h = d.getAttribute(n),
								g = h !== null && h !== 'false',
								p = ($i.get(d) || 0) + 1,
								m = (a.get(d) || 0) + 1
							;($i.set(d, p),
								a.set(d, m),
								s.push(d),
								p === 1 && g && Rs.set(d, !0),
								m === 1 && d.setAttribute(r, 'true'),
								g || d.setAttribute(n, 'true'))
						} catch (v) {
							console.error('aria-hidden: cannot operate on ', d, v)
						}
				})
		}
		return (
			f(t),
			o.clear(),
			dl++,
			function () {
				;(s.forEach(function (c) {
					var d = $i.get(c) - 1,
						h = a.get(c) - 1
					;($i.set(c, d),
						a.set(c, h),
						d || (Rs.has(c) || c.removeAttribute(n), Rs.delete(c)),
						h || c.removeAttribute(r))
				}),
					dl--,
					dl ||
						(($i = new WeakMap()),
						($i = new WeakMap()),
						(Rs = new WeakMap()),
						(Os = {})))
			}
		)
	},
	xV = function (e, t, r) {
		r === void 0 && (r = 'data-aria-hidden')
		var n = Array.from(Array.isArray(e) ? e : [e]),
			i = ek(e)
		return i
			? (n.push.apply(n, Array.from(i.querySelectorAll('[aria-live], script'))),
				rk(n, i, r, 'aria-hidden'))
			: function () {
					return null
				}
	},
	no = function () {
		return (
			(no =
				Object.assign ||
				function (t) {
					for (var r, n = 1, i = arguments.length; n < i; n++) {
						r = arguments[n]
						for (var a in r)
							Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a])
					}
					return t
				}),
			no.apply(this, arguments)
		)
	}
function nk(e, t) {
	var r = {}
	for (var n in e)
		Object.prototype.hasOwnProperty.call(e, n) &&
			t.indexOf(n) < 0 &&
			(r[n] = e[n])
	if (e != null && typeof Object.getOwnPropertySymbols == 'function')
		for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
			t.indexOf(n[i]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
				(r[n[i]] = e[n[i]])
	return r
}
function RV(e, t, r) {
	if (r || arguments.length === 2)
		for (var n = 0, i = t.length, a; n < i; n++)
			(a || !(n in t)) &&
				(a || (a = Array.prototype.slice.call(t, 0, n)), (a[n] = t[n]))
	return e.concat(a || Array.prototype.slice.call(t))
}
function hl(e, t) {
	return (typeof e == 'function' ? e(t) : e && (e.current = t), e)
}
function ik(e, t) {
	var r = Qs.useState(function () {
		return {
			value: e,
			callback: t,
			facade: {
				get current() {
					return r.value
				},
				set current(n) {
					var i = r.value
					i !== n && ((r.value = n), r.callback(n, i))
				}
			}
		}
	})[0]
	return ((r.callback = t), r.facade)
}
var ak = typeof window < 'u' ? Qs.useLayoutEffect : Qs.useEffect,
	_y = new WeakMap()
function OV(e, t) {
	var r = ik(null, function (n) {
		return e.forEach(function (i) {
			return hl(i, n)
		})
	})
	return (
		ak(
			function () {
				var n = _y.get(r)
				if (n) {
					var i = new Set(n),
						a = new Set(e),
						s = r.current
					;(i.forEach(function (o) {
						a.has(o) || hl(o, null)
					}),
						a.forEach(function (o) {
							i.has(o) || hl(o, s)
						}))
				}
				_y.set(r, e)
			},
			[e]
		),
		r
	)
}
function sk(e) {
	return e
}
function ok(e, t) {
	t === void 0 && (t = sk)
	var r = [],
		n = !1,
		i = {
			read: function () {
				if (n)
					throw new Error(
						'Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.'
					)
				return r.length ? r[r.length - 1] : e
			},
			useMedium: function (a) {
				var s = t(a, n)
				return (
					r.push(s),
					function () {
						r = r.filter(function (o) {
							return o !== s
						})
					}
				)
			},
			assignSyncMedium: function (a) {
				for (n = !0; r.length; ) {
					var s = r
					;((r = []), s.forEach(a))
				}
				r = {
					push: function (o) {
						return a(o)
					},
					filter: function () {
						return r
					}
				}
			},
			assignMedium: function (a) {
				n = !0
				var s = []
				if (r.length) {
					var o = r
					;((r = []), o.forEach(a), (s = r))
				}
				var u = function () {
						var f = s
						;((s = []), f.forEach(a))
					},
					l = function () {
						return Promise.resolve().then(u)
					}
				;(l(),
					(r = {
						push: function (f) {
							;(s.push(f), l())
						},
						filter: function (f) {
							return ((s = s.filter(f)), r)
						}
					}))
			}
		}
	return i
}
function CV(e) {
	e === void 0 && (e = {})
	var t = ok(null)
	return ((t.options = no({ async: !0, ssr: !1 }, e)), t)
}
var lx = function (e) {
	var t = e.sideCar,
		r = nk(e, ['sideCar'])
	if (!t)
		throw new Error(
			'Sidecar: please provide `sideCar` property to import the right car'
		)
	var n = t.read()
	if (!n) throw new Error('Sidecar medium not found')
	return Qs.createElement(n, no({}, r))
}
lx.isSideCarExport = !0
function TV(e, t) {
	return (e.useMedium(t), lx)
}
var EV = function () {
	if (typeof __webpack_nonce__ < 'u') return __webpack_nonce__
}
class Wh extends Error {
	constructor(r, n, i) {
		const a = r.status || r.status === 0 ? r.status : '',
			s = r.statusText ?? '',
			o = `${a} ${s}`.trim(),
			u = o ? `status code ${o}` : 'an unknown error'
		super(`Request failed with ${u}: ${n.method} ${n.url}`)
		at(this, 'response')
		at(this, 'request')
		at(this, 'options')
		;((this.name = 'HTTPError'),
			(this.response = r),
			(this.request = n),
			(this.options = i))
	}
}
class cx extends Error {
	constructor(r) {
		let n = 'Non-error value was thrown'
		try {
			typeof r == 'string'
				? (n = r)
				: r &&
					typeof r == 'object' &&
					'message' in r &&
					typeof r.message == 'string' &&
					(n = r.message)
		} catch {}
		super(n)
		at(this, 'name', 'NonError')
		at(this, 'value')
		this.value = r
	}
}
class pl extends Error {
	constructor(r) {
		const n =
			r != null && r.cause
				? r.cause instanceof Error
					? r.cause
					: new cx(r.cause)
				: void 0
		super(
			r != null && r.code ? `Forced retry: ${r.code}` : 'Forced retry',
			n ? { cause: n } : void 0
		)
		at(this, 'name', 'ForceRetryError')
		at(this, 'customDelay')
		at(this, 'code')
		at(this, 'customRequest')
		;((this.customDelay = r == null ? void 0 : r.delay),
			(this.code = r == null ? void 0 : r.code),
			(this.customRequest = r == null ? void 0 : r.request))
	}
}
const by = (() => {
		let e = !1,
			t = !1
		const r = typeof globalThis.ReadableStream == 'function',
			n = typeof globalThis.Request == 'function'
		if (r && n)
			try {
				t = new globalThis.Request('https://empty.invalid', {
					body: new globalThis.ReadableStream(),
					method: 'POST',
					get duplex() {
						return ((e = !0), 'half')
					}
				}).headers.has('Content-Type')
			} catch (i) {
				if (i instanceof Error && i.message === 'unsupported BodyInit type')
					return !1
				throw i
			}
		return e && !t
	})(),
	uk = typeof globalThis.AbortController == 'function',
	fx =
		typeof globalThis.AbortSignal == 'function' &&
		typeof globalThis.AbortSignal.any == 'function',
	lk = typeof globalThis.ReadableStream == 'function',
	ck = typeof globalThis.FormData == 'function',
	dx = ['get', 'post', 'put', 'patch', 'head', 'delete'],
	fk = {
		json: 'application/json',
		text: 'text/*',
		formData: 'multipart/form-data',
		arrayBuffer: '*/*',
		blob: '*/*',
		bytes: '*/*'
	},
	gl = 2147483647,
	dk = new TextEncoder().encode(
		'------WebKitFormBoundaryaxpyiPgbbPti10Rw'
	).length,
	hx = Symbol('stop')
class px {
	constructor(t) {
		at(this, 'options')
		this.options = t
	}
}
const hk = (e) => new px(e),
	pk = {
		json: !0,
		parseJson: !0,
		stringifyJson: !0,
		searchParams: !0,
		prefixUrl: !0,
		retry: !0,
		timeout: !0,
		hooks: !0,
		throwHttpErrors: !0,
		onDownloadProgress: !0,
		onUploadProgress: !0,
		fetch: !0,
		context: !0
	},
	gk = { next: !0 },
	mk = {
		method: !0,
		headers: !0,
		body: !0,
		mode: !0,
		credentials: !0,
		cache: !0,
		redirect: !0,
		referrer: !0,
		referrerPolicy: !0,
		integrity: !0,
		keepalive: !0,
		signal: !0,
		window: !0,
		duplex: !0
	},
	vk = (e) => {
		if (!e) return 0
		if (e instanceof FormData) {
			let t = 0
			for (const [r, n] of e)
				((t += dk),
					(t += new TextEncoder().encode(
						`Content-Disposition: form-data; name="${r}"`
					).length),
					(t +=
						typeof n == 'string' ? new TextEncoder().encode(n).length : n.size))
			return t
		}
		if (e instanceof Blob) return e.size
		if (e instanceof ArrayBuffer) return e.byteLength
		if (typeof e == 'string') return new TextEncoder().encode(e).length
		if (e instanceof URLSearchParams)
			return new TextEncoder().encode(e.toString()).length
		if ('byteLength' in e) return e.byteLength
		if (typeof e == 'object' && e !== null)
			try {
				const t = JSON.stringify(e)
				return new TextEncoder().encode(t).length
			} catch {
				return 0
			}
		return 0
	},
	gx = (e, t, r) => {
		let n,
			i = 0
		return e.pipeThrough(
			new TransformStream({
				transform(a, s) {
					if ((s.enqueue(a), n)) {
						i += n.byteLength
						let o = t === 0 ? 0 : i / t
						;(o >= 1 && (o = 1 - Number.EPSILON),
							r == null ||
								r(
									{
										percent: o,
										totalBytes: Math.max(t, i),
										transferredBytes: i
									},
									n
								))
					}
					n = a
				},
				flush() {
					n &&
						((i += n.byteLength),
						r == null ||
							r(
								{ percent: 1, totalBytes: Math.max(t, i), transferredBytes: i },
								n
							))
				}
			})
		)
	},
	yk = (e, t) => {
		if (!e.body) return e
		if (e.status === 204)
			return new Response(null, {
				status: e.status,
				statusText: e.statusText,
				headers: e.headers
			})
		const r = Math.max(0, Number(e.headers.get('content-length')) || 0)
		return new Response(gx(e.body, r, t), {
			status: e.status,
			statusText: e.statusText,
			headers: e.headers
		})
	},
	_k = (e, t, r) => {
		if (!e.body) return e
		const n = vk(r ?? e.body)
		return new Request(e, { duplex: 'half', body: gx(e.body, n, t) })
	},
	ri = (e) => e !== null && typeof e == 'object',
	Cs = (...e) => {
		for (const t of e)
			if ((!ri(t) || Array.isArray(t)) && t !== void 0)
				throw new TypeError('The `options` argument must be an object')
		return Wp({}, ...e)
	},
	mx = (e = {}, t = {}) => {
		const r = new globalThis.Headers(e),
			n = t instanceof globalThis.Headers,
			i = new globalThis.Headers(t)
		for (const [a, s] of i.entries())
			(n && s === 'undefined') || s === void 0 ? r.delete(a) : r.set(a, s)
		return r
	}
function Ts(e, t, r) {
	return Object.hasOwn(t, r) && t[r] === void 0
		? []
		: Wp(e[r] ?? [], t[r] ?? [])
}
const vx = (e = {}, t = {}) => ({
		beforeRequest: Ts(e, t, 'beforeRequest'),
		beforeRetry: Ts(e, t, 'beforeRetry'),
		afterResponse: Ts(e, t, 'afterResponse'),
		beforeError: Ts(e, t, 'beforeError')
	}),
	bk = (e, t) => {
		const r = new URLSearchParams()
		for (const n of [e, t])
			if (n !== void 0)
				if (n instanceof URLSearchParams)
					for (const [i, a] of n.entries()) r.append(i, a)
				else if (Array.isArray(n))
					for (const i of n) {
						if (!Array.isArray(i) || i.length !== 2)
							throw new TypeError(
								'Array search parameters must be provided in [[key, value], ...] format'
							)
						r.append(String(i[0]), String(i[1]))
					}
				else if (ri(n))
					for (const [i, a] of Object.entries(n))
						a !== void 0 && r.append(i, String(a))
				else {
					const i = new URLSearchParams(n)
					for (const [a, s] of i.entries()) r.append(a, s)
				}
		return r
	},
	Wp = (...e) => {
		let t = {},
			r = {},
			n = {},
			i
		const a = []
		for (const s of e)
			if (Array.isArray(s)) (Array.isArray(t) || (t = []), (t = [...t, ...s]))
			else if (ri(s)) {
				for (let [o, u] of Object.entries(s)) {
					if (o === 'signal' && u instanceof globalThis.AbortSignal) {
						a.push(u)
						continue
					}
					if (o === 'context') {
						if (u != null && (!ri(u) || Array.isArray(u)))
							throw new TypeError('The `context` option must be an object')
						t = { ...t, context: u == null ? {} : { ...t.context, ...u } }
						continue
					}
					if (o === 'searchParams') {
						u == null ? (i = void 0) : (i = i === void 0 ? u : bk(i, u))
						continue
					}
					;(ri(u) && o in t && (u = Wp(t[o], u)), (t = { ...t, [o]: u }))
				}
				;(ri(s.hooks) && ((n = vx(n, s.hooks)), (t.hooks = n)),
					ri(s.headers) && ((r = mx(r, s.headers)), (t.headers = r)))
			}
		return (
			i !== void 0 && (t.searchParams = i),
			a.length > 0 &&
				(a.length === 1
					? (t.signal = a[0])
					: fx
						? (t.signal = AbortSignal.any(a))
						: (t.signal = a.at(-1))),
			t
		)
	},
	wk = (e) => (dx.includes(e) ? e.toUpperCase() : e),
	Sk = ['get', 'put', 'head', 'delete', 'options', 'trace'],
	xk = [408, 413, 429, 500, 502, 503, 504],
	Rk = [413, 429, 503],
	wy = {
		limit: 2,
		methods: Sk,
		statusCodes: xk,
		afterStatusCodes: Rk,
		maxRetryAfter: Number.POSITIVE_INFINITY,
		backoffLimit: Number.POSITIVE_INFINITY,
		delay: (e) => 0.3 * 2 ** (e - 1) * 1e3,
		jitter: void 0,
		retryOnTimeout: !1
	},
	Ok = (e = {}) => {
		if (typeof e == 'number') return { ...wy, limit: e }
		if (e.methods && !Array.isArray(e.methods))
			throw new Error('retry.methods must be an array')
		if (
			(e.methods && (e.methods = e.methods.map((r) => r.toLowerCase())),
			e.statusCodes && !Array.isArray(e.statusCodes))
		)
			throw new Error('retry.statusCodes must be an array')
		const t = Object.fromEntries(
			Object.entries(e).filter(([, r]) => r !== void 0)
		)
		return { ...wy, ...t }
	}
class Kh extends Error {
	constructor(r) {
		super(`Request timed out: ${r.method} ${r.url}`)
		at(this, 'request')
		;((this.name = 'TimeoutError'), (this.request = r))
	}
}
async function Ck(e, t, r, n) {
	return new Promise((i, a) => {
		const s = setTimeout(() => {
			;(r && r.abort(), a(new Kh(e)))
		}, n.timeout)
		n.fetch(e, t)
			.then(i)
			.catch(a)
			.then(() => {
				clearTimeout(s)
			})
	})
}
async function Tk(e, { signal: t }) {
	return new Promise((r, n) => {
		t && (t.throwIfAborted(), t.addEventListener('abort', i, { once: !0 }))
		function i() {
			;(clearTimeout(a), n(t.reason))
		}
		const a = setTimeout(() => {
			;(t == null || t.removeEventListener('abort', i), r())
		}, e)
	})
}
const Ek = (e, t) => {
		const r = {}
		for (const n in t)
			Object.hasOwn(t, n) &&
				!(n in mk) &&
				!(n in pk) &&
				(!(n in e) || n in gk) &&
				(r[n] = t[n])
		return r
	},
	Ak = (e) =>
		e === void 0
			? !1
			: Array.isArray(e)
				? e.length > 0
				: e instanceof URLSearchParams
					? e.size > 0
					: typeof e == 'object'
						? Object.keys(e).length > 0
						: typeof e == 'string'
							? e.trim().length > 0
							: !!e
function Mk(e) {
	return e instanceof Wh || (e == null ? void 0 : e.name) === Wh.name
}
function Pk(e) {
	return e instanceof Kh || (e == null ? void 0 : e.name) === Kh.name
}
var Ao,
	yx,
	or,
	Kt,
	pt,
	te,
	En,
	xr,
	gi,
	Se,
	Vs,
	_x,
	Qh,
	zs,
	hn,
	Zh,
	bx,
	$a,
	Hs,
	Yh
const Ba = class Ba {
	constructor(t, r = {}) {
		ie(this, Se)
		at(this, 'request')
		ie(this, or)
		ie(this, Kt, 0)
		ie(this, pt)
		ie(this, te)
		ie(this, En)
		ie(this, xr)
		ie(this, gi)
		var i, a, s
		if (
			(G(this, pt, t),
			G(this, te, {
				...r,
				headers: mx(C(this, pt).headers, r.headers),
				hooks: vx(
					{
						beforeRequest: [],
						beforeRetry: [],
						beforeError: [],
						afterResponse: []
					},
					r.hooks
				),
				method: wk(r.method ?? C(this, pt).method ?? 'GET'),
				prefixUrl: String(r.prefixUrl || ''),
				retry: Ok(r.retry),
				throwHttpErrors: r.throwHttpErrors ?? !0,
				timeout: r.timeout ?? 1e4,
				fetch: r.fetch ?? globalThis.fetch.bind(globalThis),
				context: r.context ?? {}
			}),
			typeof C(this, pt) != 'string' &&
				!(
					C(this, pt) instanceof URL ||
					C(this, pt) instanceof globalThis.Request
				))
		)
			throw new TypeError('`input` must be a string, URL, or Request')
		if (C(this, te).prefixUrl && typeof C(this, pt) == 'string') {
			if (C(this, pt).startsWith('/'))
				throw new Error(
					'`input` must not begin with a slash when using `prefixUrl`'
				)
			;(C(this, te).prefixUrl.endsWith('/') || (C(this, te).prefixUrl += '/'),
				G(this, pt, C(this, te).prefixUrl + C(this, pt)))
		}
		;(uk &&
			fx &&
			(G(this, xr, C(this, te).signal ?? C(this, pt).signal),
			G(this, or, new globalThis.AbortController()),
			(C(this, te).signal = C(this, xr)
				? AbortSignal.any([C(this, xr), C(this, or).signal])
				: C(this, or).signal)),
			by && (C(this, te).duplex = 'half'),
			C(this, te).json !== void 0 &&
				((C(this, te).body =
					((a = (i = C(this, te)).stringifyJson) == null
						? void 0
						: a.call(i, C(this, te).json)) ?? JSON.stringify(C(this, te).json)),
				C(this, te).headers.set(
					'content-type',
					C(this, te).headers.get('content-type') ?? 'application/json'
				)))
		const n = r.headers && new globalThis.Headers(r.headers).has('content-type')
		if (
			(C(this, pt) instanceof globalThis.Request &&
				((ck && C(this, te).body instanceof globalThis.FormData) ||
					C(this, te).body instanceof URLSearchParams) &&
				!n &&
				C(this, te).headers.delete('content-type'),
			(this.request = new globalThis.Request(C(this, pt), C(this, te))),
			Ak(C(this, te).searchParams))
		) {
			const u =
					'?' +
					(typeof C(this, te).searchParams == 'string'
						? C(this, te).searchParams.replace(/^\?/, '')
						: new URLSearchParams(
								J((s = Ba), Ao, yx).call(s, C(this, te).searchParams)
							).toString()),
				l = this.request.url.replace(/(?:\?.*?)?(?=#|$)/, u)
			this.request = new globalThis.Request(l, C(this, te))
		}
		if (C(this, te).onUploadProgress) {
			if (typeof C(this, te).onUploadProgress != 'function')
				throw new TypeError('The `onUploadProgress` option must be a function')
			if (!by)
				throw new Error(
					'Request streams are not supported in your environment. The `duplex` option for `Request` is not available.'
				)
			this.request = J(this, Se, Yh).call(
				this,
				this.request,
				C(this, te).body ?? void 0
			)
		}
	}
	static create(t, r) {
		var s, o, u
		const n = new Ba(t, r),
			i = async () => {
				var f, c, d, h, g, p, m, v, _, w, x, E
				if (typeof C(n, te).timeout == 'number' && C(n, te).timeout > gl)
					throw new RangeError(
						`The \`timeout\` option cannot be greater than ${gl}`
					)
				await Promise.resolve()
				let l = await J((f = n), Se, bx).call(f)
				for (const R of C(n, te).hooks.afterResponse) {
					const S = J((c = n), Se, Qh).call(c, l.clone())
					let y
					try {
						y = await R(n.request, J((d = n), Se, $a).call(d), S, {
							retryCount: C(n, Kt)
						})
					} catch (O) {
						throw (
							J((h = n), Se, hn).call(h, S),
							J((g = n), Se, hn).call(g, l),
							O
						)
					}
					if (y instanceof px)
						throw (
							J((p = n), Se, hn).call(p, S),
							J((m = n), Se, hn).call(m, l),
							new pl(y.options)
						)
					const b = y instanceof globalThis.Response ? y : l
					;(S !== b && J((v = n), Se, hn).call(v, S),
						l !== b && J((_ = n), Se, hn).call(_, l),
						(l = b))
				}
				if (
					(J((w = n), Se, Qh).call(w, l),
					!l.ok &&
						(typeof C(n, te).throwHttpErrors == 'function'
							? C(n, te).throwHttpErrors(l.status)
							: C(n, te).throwHttpErrors))
				) {
					let R = new Wh(l, n.request, J((x = n), Se, $a).call(x))
					for (const S of C(n, te).hooks.beforeError)
						R = await S(R, { retryCount: C(n, Kt) })
					throw R
				}
				if (C(n, te).onDownloadProgress) {
					if (typeof C(n, te).onDownloadProgress != 'function')
						throw new TypeError(
							'The `onDownloadProgress` option must be a function'
						)
					if (!lk)
						throw new Error(
							'Streams are not supported in your environment. `ReadableStream` is missing.'
						)
					const R = l.clone()
					return (
						J((E = n), Se, hn).call(E, l),
						yk(R, C(n, te).onDownloadProgress)
					)
				}
				return l
			},
			a = J((s = n), Se, Zh)
				.call(s, i)
				.finally(() => {
					var f, c
					const l = C(n, En)
					;(J((f = n), Se, zs).call(f, (l == null ? void 0 : l.body) ?? void 0),
						J((c = n), Se, zs).call(c, n.request.body ?? void 0))
				})
		for (const [l, f] of Object.entries(fk))
			(l === 'bytes' &&
				typeof ((u =
					(o = globalThis.Response) == null ? void 0 : o.prototype) == null
					? void 0
					: u.bytes) != 'function') ||
				(a[l] = async () => {
					n.request.headers.set('accept', n.request.headers.get('accept') || f)
					const c = await a
					if (l === 'json') {
						if (c.status === 204) return ''
						const d = await c.text()
						return d === '' ? '' : r.parseJson ? r.parseJson(d) : JSON.parse(d)
					}
					return c[l]()
				})
		return a
	}
}
;((Ao = new WeakSet()),
	(yx = function (t) {
		return t &&
			typeof t == 'object' &&
			!Array.isArray(t) &&
			!(t instanceof URLSearchParams)
			? Object.fromEntries(Object.entries(t).filter(([, r]) => r !== void 0))
			: t
	}),
	(or = new WeakMap()),
	(Kt = new WeakMap()),
	(pt = new WeakMap()),
	(te = new WeakMap()),
	(En = new WeakMap()),
	(xr = new WeakMap()),
	(gi = new WeakMap()),
	(Se = new WeakSet()),
	(Vs = function () {
		const t = C(this, te).retry.delay(C(this, Kt))
		let r = t
		C(this, te).retry.jitter === !0
			? (r = Math.random() * t)
			: typeof C(this, te).retry.jitter == 'function' &&
				((r = C(this, te).retry.jitter(t)),
				(!Number.isFinite(r) || r < 0) && (r = t))
		const n = C(this, te).retry.backoffLimit ?? Number.POSITIVE_INFINITY
		return Math.min(n, r)
	}),
	(_x = async function (t) {
		if ((xa(this, Kt)._++, C(this, Kt) > C(this, te).retry.limit)) throw t
		const r = t instanceof Error ? t : new cx(t)
		if (r instanceof pl) return r.customDelay ?? J(this, Se, Vs).call(this)
		if (!C(this, te).retry.methods.includes(this.request.method.toLowerCase()))
			throw t
		if (C(this, te).retry.shouldRetry !== void 0) {
			const n = await C(this, te).retry.shouldRetry({
				error: r,
				retryCount: C(this, Kt)
			})
			if (n === !1) throw t
			if (n === !0) return J(this, Se, Vs).call(this)
		}
		if (Pk(t) && !C(this, te).retry.retryOnTimeout) throw t
		if (Mk(t)) {
			if (!C(this, te).retry.statusCodes.includes(t.response.status)) throw t
			const n =
				t.response.headers.get('Retry-After') ??
				t.response.headers.get('RateLimit-Reset') ??
				t.response.headers.get('X-RateLimit-Retry-After') ??
				t.response.headers.get('X-RateLimit-Reset') ??
				t.response.headers.get('X-Rate-Limit-Reset')
			if (n && C(this, te).retry.afterStatusCodes.includes(t.response.status)) {
				let i = Number(n) * 1e3
				Number.isNaN(i)
					? (i = Date.parse(n) - Date.now())
					: i >= Date.parse('2024-01-01') && (i -= Date.now())
				const a = C(this, te).retry.maxRetryAfter ?? i
				return i < a ? i : a
			}
			if (t.response.status === 413) throw t
		}
		return J(this, Se, Vs).call(this)
	}),
	(Qh = function (t) {
		return (
			C(this, te).parseJson &&
				(t.json = async () => C(this, te).parseJson(await t.text())),
			t
		)
	}),
	(zs = function (t) {
		t && t.cancel().catch(() => {})
	}),
	(hn = function (t) {
		J(this, Se, zs).call(this, t.body ?? void 0)
	}),
	(Zh = async function (t) {
		try {
			return await t()
		} catch (r) {
			const n = Math.min(await J(this, Se, _x).call(this, r), gl)
			if (C(this, Kt) < 1) throw r
			if (
				(await Tk(n, C(this, xr) ? { signal: C(this, xr) } : {}),
				r instanceof pl && r.customRequest)
			) {
				const i = C(this, te).signal
					? new globalThis.Request(r.customRequest, {
							signal: C(this, te).signal
						})
					: new globalThis.Request(r.customRequest)
				J(this, Se, Hs).call(this, i)
			}
			for (const i of C(this, te).hooks.beforeRetry) {
				const a = await i({
					request: this.request,
					options: J(this, Se, $a).call(this),
					error: r,
					retryCount: C(this, Kt)
				})
				if (a instanceof globalThis.Request) {
					J(this, Se, Hs).call(this, a)
					break
				}
				if (a instanceof globalThis.Response) return a
				if (a === hx) return
			}
			return J(this, Se, Zh).call(this, t)
		}
	}),
	(bx = async function () {
		var r
		;(r = C(this, or)) != null &&
			r.signal.aborted &&
			(G(this, or, new globalThis.AbortController()),
			(C(this, te).signal = C(this, xr)
				? AbortSignal.any([C(this, xr), C(this, or).signal])
				: C(this, or).signal),
			(this.request = new globalThis.Request(this.request, {
				signal: C(this, te).signal
			})))
		for (const n of C(this, te).hooks.beforeRequest) {
			const i = await n(this.request, J(this, Se, $a).call(this), {
				retryCount: C(this, Kt)
			})
			if (i instanceof Response) return i
			if (i instanceof globalThis.Request) {
				J(this, Se, Hs).call(this, i)
				break
			}
		}
		const t = Ek(this.request, C(this, te))
		return (
			G(this, En, this.request),
			(this.request = C(this, En).clone()),
			C(this, te).timeout === !1
				? C(this, te).fetch(C(this, En), t)
				: Ck(C(this, En), t, C(this, or), C(this, te))
		)
	}),
	($a = function () {
		if (!C(this, gi)) {
			const { hooks: t, ...r } = C(this, te)
			G(this, gi, Object.freeze(r))
		}
		return C(this, gi)
	}),
	(Hs = function (t) {
		;(G(this, gi, void 0), (this.request = J(this, Se, Yh).call(this, t)))
	}),
	(Yh = function (t, r) {
		return !C(this, te).onUploadProgress || !t.body
			? t
			: _k(t, C(this, te).onUploadProgress, r ?? C(this, te).body ?? void 0)
	}),
	ie(Ba, Ao))
let io = Ba
/*! MIT License © Sindre Sorhus */ const Jh = (e) => {
		const t = (r, n) => io.create(r, Cs(e, n))
		for (const r of dx) t[r] = (n, i) => io.create(n, Cs(e, i, { method: r }))
		return (
			(t.create = (r) => Jh(Cs(r))),
			(t.extend = (r) => (
				typeof r == 'function' && (r = r(e ?? {})),
				Jh(Cs(e, r))
			)),
			(t.stop = hx),
			(t.retry = hk),
			t
		)
	},
	AV = Jh()
var ml, Sy
function Ik() {
	if (Sy) return ml
	Sy = 1
	var e = function (_) {
		return t(_) && !r(_)
	}
	function t(v) {
		return !!v && typeof v == 'object'
	}
	function r(v) {
		var _ = Object.prototype.toString.call(v)
		return _ === '[object RegExp]' || _ === '[object Date]' || a(v)
	}
	var n = typeof Symbol == 'function' && Symbol.for,
		i = n ? Symbol.for('react.element') : 60103
	function a(v) {
		return v.$$typeof === i
	}
	function s(v) {
		return Array.isArray(v) ? [] : {}
	}
	function o(v, _) {
		return _.clone !== !1 && _.isMergeableObject(v) ? p(s(v), v, _) : v
	}
	function u(v, _, w) {
		return v.concat(_).map(function (x) {
			return o(x, w)
		})
	}
	function l(v, _) {
		if (!_.customMerge) return p
		var w = _.customMerge(v)
		return typeof w == 'function' ? w : p
	}
	function f(v) {
		return Object.getOwnPropertySymbols
			? Object.getOwnPropertySymbols(v).filter(function (_) {
					return Object.propertyIsEnumerable.call(v, _)
				})
			: []
	}
	function c(v) {
		return Object.keys(v).concat(f(v))
	}
	function d(v, _) {
		try {
			return _ in v
		} catch {
			return !1
		}
	}
	function h(v, _) {
		return (
			d(v, _) &&
			!(
				Object.hasOwnProperty.call(v, _) &&
				Object.propertyIsEnumerable.call(v, _)
			)
		)
	}
	function g(v, _, w) {
		var x = {}
		return (
			w.isMergeableObject(v) &&
				c(v).forEach(function (E) {
					x[E] = o(v[E], w)
				}),
			c(_).forEach(function (E) {
				h(v, E) ||
					(d(v, E) && w.isMergeableObject(_[E])
						? (x[E] = l(E, w)(v[E], _[E], w))
						: (x[E] = o(_[E], w)))
			}),
			x
		)
	}
	function p(v, _, w) {
		;((w = w || {}),
			(w.arrayMerge = w.arrayMerge || u),
			(w.isMergeableObject = w.isMergeableObject || e),
			(w.cloneUnlessOtherwiseSpecified = o))
		var x = Array.isArray(_),
			E = Array.isArray(v),
			R = x === E
		return R ? (x ? w.arrayMerge(v, _, w) : g(v, _, w)) : o(_, w)
	}
	p.all = function (_, w) {
		if (!Array.isArray(_)) throw new Error('first argument should be an array')
		return _.reduce(function (x, E) {
			return p(x, E, w)
		}, {})
	}
	var m = p
	return ((ml = m), ml)
}
var kk = Ik()
const MV = qe(kk)
var qk = {}
const Gs = Object.create(null),
	Ta = (e) => {
		var t
		return (
			qk ||
			((t = globalThis.Deno) == null ? void 0 : t.env.toObject()) ||
			globalThis.__env__ ||
			(e ? Gs : globalThis)
		)
	},
	pn = new Proxy(Gs, {
		get(e, t) {
			return Ta()[t] ?? Gs[t]
		},
		has(e, t) {
			return t in Ta() || t in Gs
		},
		set(e, t, r) {
			const n = Ta(!0)
			return ((n[t] = r), !0)
		},
		deleteProperty(e, t) {
			if (!t) return !1
			const r = Ta(!0)
			return (delete r[t], !0)
		},
		ownKeys() {
			const e = Ta(!0)
			return Object.keys(e)
		}
	})
pn.NODE_ENV
var Ws = class extends Error {
	constructor(e, t) {
		;(super(e, t),
			(this.name = 'BetterAuthError'),
			(this.message = e),
			(this.stack = ''))
	}
}
const $k = 47
function wx(e) {
	let t = e.length
	for (; t > 0 && e.charCodeAt(t - 1) === $k; ) t--
	return t === e.length ? e : e.slice(0, t)
}
function Fk(e) {
	try {
		return (wx(new URL(e).pathname) || '/') !== '/'
	} catch {
		throw new Ws(`Invalid base URL: ${e}. Please provide a valid base URL.`)
	}
}
function Dk(e) {
	try {
		const t = new URL(e)
		if (t.protocol !== 'http:' && t.protocol !== 'https:')
			throw new Ws(
				`Invalid base URL: ${e}. URL must include 'http://' or 'https://'`
			)
	} catch (t) {
		throw t instanceof Ws
			? t
			: new Ws(`Invalid base URL: ${e}. Please provide a valid base URL.`, {
					cause: t
				})
	}
}
function vl(e, t = '/api/auth') {
	if ((Dk(e), Fk(e))) return e
	const r = wx(e)
	return !t || t === '/'
		? r
		: ((t = t.startsWith('/') ? t : `/${t}`), `${r}${t}`)
}
function Nk(e, t, r, n, i) {
	if (e) return vl(e, t)
	{
		const a =
			pn.BETTER_AUTH_URL ||
			pn.NEXT_PUBLIC_BETTER_AUTH_URL ||
			pn.PUBLIC_BETTER_AUTH_URL ||
			pn.NUXT_PUBLIC_BETTER_AUTH_URL ||
			pn.NUXT_PUBLIC_AUTH_URL ||
			(pn.BASE_URL !== '/' ? pn.BASE_URL : void 0)
		if (a) return vl(a, t)
	}
	if (typeof window < 'u' && window.location)
		return vl(window.location.origin, t)
}
const Lk = {
		proto:
			/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
		constructor:
			/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
		protoShort: /"__proto__"\s*:/,
		constructorShort: /"constructor"\s*:/
	},
	jk = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/,
	xy = {
		true: !0,
		false: !1,
		null: null,
		undefined: void 0,
		nan: NaN,
		infinity: Number.POSITIVE_INFINITY,
		'-infinity': Number.NEGATIVE_INFINITY
	},
	Uk =
		/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(?:\.(\d{1,7}))?(?:Z|([+-])(\d{2}):(\d{2}))$/
function Bk(e) {
	return e instanceof Date && !isNaN(e.getTime())
}
function Vk(e) {
	const t = Uk.exec(e)
	if (!t) return null
	const [, r, n, i, a, s, o, u, l, f, c] = t,
		d = new Date(
			Date.UTC(
				parseInt(r, 10),
				parseInt(n, 10) - 1,
				parseInt(i, 10),
				parseInt(a, 10),
				parseInt(s, 10),
				parseInt(o, 10),
				u ? parseInt(u.padEnd(3, '0'), 10) : 0
			)
		)
	if (l) {
		const h = (parseInt(f, 10) * 60 + parseInt(c, 10)) * (l === '+' ? -1 : 1)
		d.setUTCMinutes(d.getUTCMinutes() + h)
	}
	return Bk(d) ? d : null
}
function zk(e, t = {}) {
	const { strict: r = !1, warnings: n = !1, reviver: i, parseDates: a = !0 } = t
	if (typeof e != 'string') return e
	const s = e.trim(),
		o = s.toLowerCase()
	if (o.length <= 9 && o in xy) return xy[o]
	if (!jk.test(s)) {
		if (r) throw new SyntaxError('[better-json] Invalid JSON')
		return e
	}
	if (
		Object.entries(Lk).some(([u, l]) => {
			const f = l.test(s)
			return (
				f &&
					n &&
					console.warn(
						`[better-json] Detected potential prototype pollution attempt using ${u} pattern`
					),
				f
			)
		}) &&
		r
	)
		throw new Error(
			'[better-json] Potential prototype pollution attempt detected'
		)
	try {
		return JSON.parse(s, (l, f) => {
			if (
				l === '__proto__' ||
				(l === 'constructor' && f && typeof f == 'object' && 'prototype' in f)
			) {
				n &&
					console.warn(
						`[better-json] Dropping "${l}" key to prevent prototype pollution`
					)
				return
			}
			if (a && typeof f == 'string') {
				const c = Vk(f)
				if (c) return c
			}
			return i ? i(l, f) : f
		})
	} catch (u) {
		if (r) throw u
		return e
	}
}
function Hk(e, t = { strict: !0 }) {
	return zk(e, t)
}
const Gk = ['javascript:', 'data:', 'vbscript:']
function Wk(e) {
	let t
	try {
		t = new URL(e)
	} catch {
		return !0
	}
	return !Gk.includes(t.protocol)
}
const Kk = {
	id: 'redirect',
	name: 'Redirect',
	hooks: {
		onSuccess(e) {
			var t, r
			if (
				(t = e.data) != null &&
				t.url &&
				(r = e.data) != null &&
				r.redirect &&
				Wk(e.data.url) &&
				typeof window < 'u' &&
				window.location &&
				window.location
			)
				try {
					window.location.href = e.data.url
				} catch {}
		}
	}
}
let lr = [],
	gn = 0
const Ks = 4,
	Qk =
		globalThis.nanostoresGlobal || (globalThis.nanostoresGlobal = { epoch: 0 })
let Zk = () => {
	for (gn = 0; gn < lr.length; gn += Ks)
		lr[gn](lr[gn + 1].value, lr[gn + 2], lr[gn + 3])
	lr.length = 0
}
const Ry = (e) => {
		let t = [],
			r = {
				get() {
					return (r.lc || r.listen(() => {})(), r.value)
				},
				init: e,
				lc: 0,
				listen(n) {
					return (
						(r.lc = t.push(n)),
						() => {
							for (let a = gn + Ks; a < lr.length; )
								lr[a] === n ? lr.splice(a, Ks) : (a += Ks)
							let i = t.indexOf(n)
							~i && (t.splice(i, 1), --r.lc || r.off())
						}
					)
				},
				notify(n, i) {
					Qk.epoch++
					let a = !lr.length && !0
					for (let s of t) lr.push(s, r, n, i)
					a && Zk()
				},
				off() {},
				set(n) {
					let i = r.value
					i !== n && ((r.value = n), r.notify(i))
				},
				subscribe(n) {
					let i = r.listen(n)
					return (n(r.value), i)
				},
				value: e
			}
		return r
	},
	Yk = 2,
	Jk = 5,
	Es = 6,
	As = 10
let Sx = (e, t, r, n) => (
		(e.events = e.events || {}),
		e.events[r + As] ||
			(e.events[r + As] = n((i) => {
				e.events[r].reduceRight((a, s) => (s(a), a), { shared: {}, ...i })
			})),
		(e.events[r] = e.events[r] || []),
		e.events[r].push(t),
		() => {
			let i = e.events[r],
				a = i.indexOf(t)
			;(i.splice(a, 1),
				i.length ||
					(delete e.events[r], e.events[r + As](), delete e.events[r + As]))
		}
	),
	Xk = (e, t) =>
		Sx(e, t, Yk, (r) => {
			let n = e.set,
				i = e.setKey
			return (
				e.setKey &&
					(e.setKey = (a, s) => {
						let o
						if (
							(r({
								abort: () => {
									o = !0
								},
								changed: a,
								newValue: { ...e.value, [a]: s }
							}),
							!o)
						)
							return i(a, s)
					}),
				(e.set = (a) => {
					let s
					if (
						(r({
							abort: () => {
								s = !0
							},
							newValue: a
						}),
						!s)
					)
						return n(a)
				}),
				() => {
					;((e.set = n), (e.setKey = i))
				}
			)
		})
const eq = 1e3
let tq = (e, t) =>
	Sx(
		e,
		(n) => {
			let i = t(n)
			i && e.events[Es].push(i)
		},
		Jk,
		(n) => {
			let i = e.listen
			e.listen = (...s) => (
				!e.lc && !e.active && ((e.active = !0), n()),
				i(...s)
			)
			let a = e.off
			return (
				(e.events[Es] = []),
				(e.off = () => {
					;(a(),
						setTimeout(() => {
							if (e.active && !e.lc) {
								e.active = !1
								for (let s of e.events[Es]) s()
								e.events[Es] = []
							}
						}, eq))
				}),
				() => {
					;((e.listen = i), (e.off = a))
				}
			)
		}
	)
function PV(e, t, r) {
	let n = new Set(t)
	return e.listen((i, a, s) => {
		;(s === void 0
			? t.some((o) => i[o] !== a[o])
			: n.has(s) || n.has(s.split(/\.|\[/)[0])) && r(i, a, s)
	})
}
function Oy(e) {
	if (typeof e != 'object' || e === null) return !1
	const t = Object.getPrototypeOf(e)
	return t === Object.prototype || t === null
}
function ao(e, t) {
	if (e === t) return !0
	if (Array.isArray(e) && Array.isArray(t)) {
		if (e.length !== t.length) return !1
		for (let r = 0; r < e.length; r++) if (!ao(e[r], t[r])) return !1
		return !0
	}
	if (Oy(e) && Oy(t)) {
		const r = Object.keys(e),
			n = Object.keys(t)
		if (r.length !== n.length) return !1
		for (const i of r) if (!(i in t) || !ao(e[i], t[i])) return !1
		return !0
	}
	return !1
}
function rq(e, t) {
	return Xk(e, ({ newValue: r, abort: n }) => {
		t(e.value, r) && n()
	})
}
const yl = Symbol.for('better-auth:broadcast-channel'),
	nq = () => Math.floor(Date.now() / 1e3)
var iq = class {
	constructor(e = 'better-auth.message') {
		at(this, 'listeners', new Set())
		at(this, 'name')
		this.name = e
	}
	subscribe(e) {
		return (
			this.listeners.add(e),
			() => {
				this.listeners.delete(e)
			}
		)
	}
	post(e) {
		if (!(typeof window > 'u'))
			try {
				localStorage.setItem(
					this.name,
					JSON.stringify({ ...e, timestamp: nq() })
				)
			} catch {}
	}
	setup() {
		if (typeof window > 'u' || typeof window.addEventListener > 'u')
			return () => {}
		const e = (t) => {
			if (t.key !== this.name) return
			const r = JSON.parse(t.newValue ?? '{}')
			;(r == null ? void 0 : r.event) !== 'session' ||
				!(r != null && r.data) ||
				this.listeners.forEach((n) => n(r))
		}
		return (
			window.addEventListener('storage', e),
			() => {
				window.removeEventListener('storage', e)
			}
		)
	}
}
function _l(e = 'better-auth.message') {
	return (globalThis[yl] || (globalThis[yl] = new iq(e)), globalThis[yl])
}
const bl = Symbol.for('better-auth:focus-manager')
var aq = class {
	constructor() {
		at(this, 'listeners', new Set())
	}
	subscribe(e) {
		return (
			this.listeners.add(e),
			() => {
				this.listeners.delete(e)
			}
		)
	}
	setFocused(e) {
		this.listeners.forEach((t) => t(e))
	}
	setup() {
		if (
			typeof window > 'u' ||
			typeof document > 'u' ||
			typeof window.addEventListener > 'u'
		)
			return () => {}
		const e = () => {
			document.visibilityState === 'visible' && this.setFocused(!0)
		}
		return (
			document.addEventListener('visibilitychange', e, !1),
			() => {
				document.removeEventListener('visibilitychange', e, !1)
			}
		)
	}
}
function Cy() {
	return (globalThis[bl] || (globalThis[bl] = new aq()), globalThis[bl])
}
const wl = Symbol.for('better-auth:online-manager')
var sq = class {
	constructor() {
		at(this, 'listeners', new Set())
		at(this, 'isOnline', typeof navigator < 'u' ? navigator.onLine : !0)
	}
	subscribe(e) {
		return (
			this.listeners.add(e),
			() => {
				this.listeners.delete(e)
			}
		)
	}
	setOnline(e) {
		;((this.isOnline = e), this.listeners.forEach((t) => t(e)))
	}
	setup() {
		if (typeof window > 'u' || typeof window.addEventListener > 'u')
			return () => {}
		const e = () => this.setOnline(!0),
			t = () => this.setOnline(!1)
		return (
			window.addEventListener('online', e, !1),
			window.addEventListener('offline', t, !1),
			() => {
				;(window.removeEventListener('online', e, !1),
					window.removeEventListener('offline', t, !1))
			}
		)
	}
}
function Sl() {
	return (globalThis[wl] || (globalThis[wl] = new sq()), globalThis[wl])
}
const xl = () => Math.floor(Date.now() / 1e3),
	oq = 5
function uq(e) {
	var w, x, E
	const {
			fetchSession: t,
			shouldPollSession: r = () => !0,
			sessionSignal: n,
			options: i = {}
		} = e,
		a = ((w = i.sessionOptions) == null ? void 0 : w.refetchInterval) ?? 0,
		s =
			((x = i.sessionOptions) == null ? void 0 : x.refetchOnWindowFocus) ?? !0,
		o = ((E = i.sessionOptions) == null ? void 0 : E.refetchWhenOffline) ?? !1,
		u = { isInitialized: !1, lastSessionRequest: 0 },
		l = () => o || Sl().isOnline,
		f = (R) => {
			if (l()) {
				if ((R == null ? void 0 : R.event) === 'storage') {
					t()
					return
				}
				if ((R == null ? void 0 : R.event) === 'poll') {
					;((u.lastSessionRequest = xl()), t())
					return
				}
				if ((R == null ? void 0 : R.event) === 'visibilitychange') {
					if (xl() - u.lastSessionRequest < oq) return
					;((u.lastSessionRequest = xl()), t())
					return
				}
				t()
			}
		},
		c = (R) => {
			_l().post({
				event: 'session',
				data: { trigger: R },
				clientId: Math.random().toString(36).substring(7)
			})
		},
		d = () => {
			a &&
				a > 0 &&
				(u.pollInterval = setInterval(() => {
					r() && f({ event: 'poll' })
				}, a * 1e3))
		},
		h = () => {
			u.unsubscribeBroadcast = _l().subscribe(() => {
				f({ event: 'storage' })
			})
		},
		g = () => {
			s &&
				(u.unsubscribeFocus = Cy().subscribe(() => {
					f({ event: 'visibilitychange' })
				}))
		},
		p = () => {
			u.unsubscribeOnline = Sl().subscribe((R) => {
				R && f({ event: 'visibilitychange' })
			})
		},
		m = () => {
			u.unsubscribeSignal = n.listen(() => {
				t()
			})
		}
	return {
		init: () => {
			u.isInitialized ||
				((u.isInitialized = !0),
				d(),
				h(),
				g(),
				p(),
				m(),
				(u.cleanupBroadcastSetup = _l().setup()),
				(u.cleanupFocusSetup = Cy().setup()),
				(u.cleanupOnlineSetup = Sl().setup()))
		},
		cleanup: () => {
			u.isInitialized &&
				(u.pollInterval &&
					(clearInterval(u.pollInterval), (u.pollInterval = void 0)),
				u.unsubscribeBroadcast &&
					(u.unsubscribeBroadcast(), (u.unsubscribeBroadcast = void 0)),
				u.unsubscribeFocus &&
					(u.unsubscribeFocus(), (u.unsubscribeFocus = void 0)),
				u.unsubscribeOnline &&
					(u.unsubscribeOnline(), (u.unsubscribeOnline = void 0)),
				u.unsubscribeSignal &&
					(u.unsubscribeSignal(), (u.unsubscribeSignal = void 0)),
				u.cleanupBroadcastSetup &&
					(u.cleanupBroadcastSetup(), (u.cleanupBroadcastSetup = void 0)),
				u.cleanupFocusSetup &&
					(u.cleanupFocusSetup(), (u.cleanupFocusSetup = void 0)),
				u.cleanupOnlineSetup &&
					(u.cleanupOnlineSetup(), (u.cleanupOnlineSetup = void 0)),
				(u.isInitialized = !1),
				(u.lastSessionRequest = 0))
		},
		triggerRefetch: f,
		broadcastSessionUpdate: c
	}
}
const lq = () => typeof window > 'u'
function Ty(e) {
	return typeof e == 'object' && e !== null && 'data' in e && 'error' in e
		? e
		: { data: e, error: null }
}
function cq(e) {
	return !e || (e.session === null && e.user === null) ? null : e
}
function fq(e, t) {
	return (
		ao(e.data, t.data) &&
		e.error === t.error &&
		e.isPending === t.isPending &&
		e.isRefetching === t.isRefetching &&
		e.refetch === t.refetch
	)
}
function dq(e, t) {
	const r = Ry(!1)
	let n
	const i = (l) => o(l),
		a = Ry({
			data: null,
			error: null,
			isPending: !0,
			isRefetching: !1,
			refetch: i
		})
	rq(a, fq)
	const s = (l) => {
			if (n !== l) return
			const f = a.get()
			;((n = void 0),
				!(!f.isPending && !f.isRefetching) &&
					a.set({ ...f, isPending: !1, isRefetching: !1, refetch: i }))
		},
		o = async (l) => {
			n == null || n.abort()
			const f = new AbortController()
			n = f
			const c = a.get()
			a.set({
				...c,
				isPending: c.data === null,
				isRefetching: !0,
				error: null,
				refetch: i
			})
			try {
				const d = await e('/get-session', {
					method: 'GET',
					query: l == null ? void 0 : l.query,
					signal: f.signal
				})
				if (f.signal.aborted) {
					s(f)
					return
				}
				let { data: h, error: g } = Ty(d)
				if (h != null && h.needsRefresh)
					try {
						const _ = await e('/get-session', {
							method: 'POST',
							signal: f.signal
						})
						if (f.signal.aborted) {
							s(f)
							return
						}
						;({ data: h, error: g } = Ty(_))
					} catch {
						if (f.signal.aborted) {
							s(f)
							return
						}
					}
				if (g) {
					const _ = a.get(),
						w = (g == null ? void 0 : g.status) === 401
					a.set({
						data: w ? null : _.data,
						error: g,
						isPending: !1,
						isRefetching: !1,
						refetch: i
					})
					return
				}
				const p = cq(h),
					m = a.get(),
					v = m.data != null && p != null && ao(m.data, p) ? m.data : p
				a.set({
					data: v,
					error: null,
					isPending: !1,
					isRefetching: !1,
					refetch: i
				})
			} catch (d) {
				if (f.signal.aborted) {
					s(f)
					return
				}
				const h = a.get()
				a.set({
					data: h.data,
					error: d,
					isPending: !1,
					isRefetching: !1,
					refetch: i
				})
			}
		}
	let u = () => {}
	return (
		tq(a, () => {
			let l
			lq() ||
				(l = setTimeout(() => {
					o()
				}, 0))
			const f = uq({
				fetchSession: o,
				shouldPollSession: () => a.get().data != null,
				sessionSignal: r,
				options: t
			})
			return (
				f.init(),
				(u = f.broadcastSessionUpdate),
				() => {
					l && clearTimeout(l)
					const c = n
					;(c == null || c.abort(), c && s(c), f.cleanup())
				}
			)
		}),
		{ session: a, $sessionSignal: r, broadcastSessionUpdate: (l) => u(l) }
	)
}
function Rl(e) {
	if (e === null || typeof e != 'object') return !1
	const t = Object.getPrototypeOf(e)
	return (t !== null &&
		t !== Object.prototype &&
		Object.getPrototypeOf(t) !== null) ||
		Symbol.iterator in e
		? !1
		: Symbol.toStringTag in e
			? Object.prototype.toString.call(e) === '[object Module]'
			: !0
}
function Xh(e, t, r = '.', n) {
	if (!Rl(t)) return Xh(e, {}, r, n)
	const i = { ...t }
	for (const a of Object.keys(e)) {
		if (a === '__proto__' || a === 'constructor') continue
		const s = e[a]
		s != null &&
			((n && n(i, a, s, r)) ||
				(Array.isArray(s) && Array.isArray(i[a])
					? (i[a] = [...s, ...i[a]])
					: Rl(s) && Rl(i[a])
						? (i[a] = Xh(s, i[a], (r ? `${r}.` : '') + a.toString(), n))
						: (i[a] = s)))
	}
	return i
}
function hq(e) {
	return (...t) => t.reduce((r, n) => Xh(r, n, '', e), {})
}
const pq = hq()
var gq = Object.defineProperty,
	mq = Object.defineProperties,
	vq = Object.getOwnPropertyDescriptors,
	Ey = Object.getOwnPropertySymbols,
	yq = Object.prototype.hasOwnProperty,
	_q = Object.prototype.propertyIsEnumerable,
	Ay = (e, t, r) =>
		t in e
			? gq(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r })
			: (e[t] = r),
	ur = (e, t) => {
		for (var r in t || (t = {})) yq.call(t, r) && Ay(e, r, t[r])
		if (Ey) for (var r of Ey(t)) _q.call(t, r) && Ay(e, r, t[r])
		return e
	},
	_r = (e, t) => mq(e, vq(t)),
	bq = class extends Error {
		constructor(e, t, r) {
			;(super(t || e.toString(), { cause: r }),
				(this.status = e),
				(this.statusText = t),
				(this.error = r),
				Error.captureStackTrace(this, this.constructor))
		}
	},
	wq = async (e, t) => {
		var r, n, i, a, s, o
		let u = t || {}
		const l = {
			onRequest: [t == null ? void 0 : t.onRequest],
			onResponse: [t == null ? void 0 : t.onResponse],
			onSuccess: [t == null ? void 0 : t.onSuccess],
			onError: [t == null ? void 0 : t.onError],
			onRetry: [t == null ? void 0 : t.onRetry]
		}
		if (!t || !(t != null && t.plugins)) return { url: e, options: u, hooks: l }
		for (const f of (t == null ? void 0 : t.plugins) || []) {
			if (f.init) {
				const c = await ((r = f.init) == null
					? void 0
					: r.call(f, e.toString(), t))
				;((u = c.options || u), (e = c.url))
			}
			;(l.onRequest.push((n = f.hooks) == null ? void 0 : n.onRequest),
				l.onResponse.push((i = f.hooks) == null ? void 0 : i.onResponse),
				l.onSuccess.push((a = f.hooks) == null ? void 0 : a.onSuccess),
				l.onError.push((s = f.hooks) == null ? void 0 : s.onError),
				l.onRetry.push((o = f.hooks) == null ? void 0 : o.onRetry))
		}
		return { url: e, options: u, hooks: l }
	},
	My = class {
		constructor(e) {
			this.options = e
		}
		shouldAttemptRetry(e, t) {
			return this.options.shouldRetry
				? Promise.resolve(
						e < this.options.attempts && this.options.shouldRetry(t)
					)
				: Promise.resolve(e < this.options.attempts)
		}
		getDelay() {
			return this.options.delay
		}
	},
	Sq = class {
		constructor(e) {
			this.options = e
		}
		shouldAttemptRetry(e, t) {
			return this.options.shouldRetry
				? Promise.resolve(
						e < this.options.attempts && this.options.shouldRetry(t)
					)
				: Promise.resolve(e < this.options.attempts)
		}
		getDelay(e) {
			return Math.min(this.options.maxDelay, this.options.baseDelay * 2 ** e)
		}
	}
function xq(e) {
	if (typeof e == 'number')
		return new My({ type: 'linear', attempts: e, delay: 1e3 })
	switch (e.type) {
		case 'linear':
			return new My(e)
		case 'exponential':
			return new Sq(e)
		default:
			throw new Error('Invalid retry strategy')
	}
}
var Rq = async (e) => {
		const t = {},
			r = async (n) => (typeof n == 'function' ? await n() : n)
		if (e != null && e.auth) {
			if (e.auth.type === 'Bearer') {
				const n = await r(e.auth.token)
				if (!n) return t
				t.authorization = `Bearer ${n}`
			} else if (e.auth.type === 'Basic') {
				const [n, i] = await Promise.all([
					r(e.auth.username),
					r(e.auth.password)
				])
				if (!n || !i) return t
				t.authorization = `Basic ${btoa(`${n}:${i}`)}`
			} else if (e.auth.type === 'Custom') {
				const [n, i] = await Promise.all([r(e.auth.prefix), r(e.auth.value)])
				if (!i) return t
				t.authorization = `${n ?? ''} ${i}`
			}
		}
		return t
	},
	Oq = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i
function Cq(e) {
	const t = e.headers.get('content-type'),
		r = new Set([
			'image/svg',
			'application/xml',
			'application/xhtml',
			'application/html'
		])
	if (!t) return 'json'
	const n = t.split(';').shift() || ''
	return Oq.test(n)
		? 'json'
		: r.has(n) || n.startsWith('text/')
			? 'text'
			: 'blob'
}
function Tq(e) {
	try {
		return (JSON.parse(e), !0)
	} catch {
		return !1
	}
}
function xx(e) {
	if (e === void 0) return !1
	const t = typeof e
	return t === 'string' || t === 'number' || t === 'boolean' || t === null
		? !0
		: t !== 'object'
			? !1
			: Array.isArray(e)
				? !0
				: e.buffer
					? !1
					: (e.constructor && e.constructor.name === 'Object') ||
						typeof e.toJSON == 'function'
}
function Py(e) {
	try {
		return JSON.parse(e)
	} catch {
		return e
	}
}
function Iy(e) {
	return typeof e == 'function'
}
function Eq(e) {
	if (e != null && e.customFetchImpl) return e.customFetchImpl
	if (typeof globalThis < 'u' && Iy(globalThis.fetch)) return globalThis.fetch
	if (typeof window < 'u' && Iy(window.fetch)) return window.fetch
	throw new Error('No fetch implementation found')
}
function Rx(...e) {
	const t = {}
	for (const r of e)
		if (r)
			if (r instanceof Headers)
				r.forEach((n, i) => {
					t[i] = n
				})
			else {
				const n = Array.isArray(r) ? r : Object.entries(r)
				for (const [i, a] of n) a != null && (t[i] = a)
			}
	return t
}
async function Aq(e) {
	const t = new Headers(Rx(e == null ? void 0 : e.headers, await Rq(e)))
	if (!t.has('content-type')) {
		const r = Mq(e == null ? void 0 : e.body)
		r && t.set('content-type', r)
	}
	return t
}
function Mq(e) {
	return xx(e) ? 'application/json' : null
}
function Pq(e) {
	const t = e.get('content-type')
	return t ? t.split(';')[0].trim().toLowerCase() : null
}
function Iq(e, t) {
	const { body: r } = e
	return r
		? !xx(r) || typeof r == 'string'
			? r
			: Pq(t) === 'application/x-www-form-urlencoded'
				? new URLSearchParams(r).toString()
				: JSON.stringify(r)
		: null
}
function kq(e, t) {
	var r
	if (t != null && t.method) return t.method.toUpperCase()
	if (e.startsWith('@')) {
		const n = (r = e.split('@')[1]) == null ? void 0 : r.split('/')[0]
		return Cx.includes(n)
			? n.toUpperCase()
			: t != null && t.body
				? 'POST'
				: 'GET'
	}
	return t != null && t.body ? 'POST' : 'GET'
}
function qq(e, t) {
	let r
	return (
		!(e != null && e.signal) &&
			e != null &&
			e.timeout &&
			(r = setTimeout(
				() => (t == null ? void 0 : t.abort()),
				e == null ? void 0 : e.timeout
			)),
		{
			abortTimeout: r,
			clearTimeout: () => {
				r && clearTimeout(r)
			}
		}
	)
}
var $q = class Ox extends Error {
	constructor(t, r) {
		;(super(r || JSON.stringify(t, null, 2)),
			(this.issues = t),
			Object.setPrototypeOf(this, Ox.prototype))
	}
}
async function Fa(e, t) {
	const r = await e['~standard'].validate(t)
	if (r.issues) throw new $q(r.issues)
	return r.value
}
var Cx = ['get', 'post', 'put', 'patch', 'delete'],
	Fq = (e) => ({
		id: 'apply-schema',
		name: 'Apply Schema',
		version: '1.0.0',
		async init(t, r) {
			var n, i, a, s
			const o =
				((i =
					(n = e.plugins) == null
						? void 0
						: n.find((u) => {
								var l
								return (l = u.schema) != null && l.config
									? t.startsWith(u.schema.config.baseURL || '') ||
											t.startsWith(u.schema.config.prefix || '')
									: !1
							})) == null
					? void 0
					: i.schema) || e.schema
			if (o) {
				let u = t
				;((a = o.config) != null &&
					a.prefix &&
					u.startsWith(o.config.prefix) &&
					((u = u.replace(o.config.prefix, '')),
					o.config.baseURL &&
						(t = t.replace(o.config.prefix, o.config.baseURL))),
					(s = o.config) != null &&
						s.baseURL &&
						u.startsWith(o.config.baseURL) &&
						(u = u.replace(o.config.baseURL, '')),
					u.startsWith('/') && u.charAt(1) === '@' && (u = u.substring(1)))
				const l = o.schema[u]
				if (l) {
					let f = r == null ? void 0 : r.headers
					if (l.headers && !(r != null && r.disableValidation)) {
						const d = {}
						if (r != null && r.headers) {
							if (r.headers instanceof Headers)
								r.headers.forEach((p, m) => {
									d[m.toLowerCase()] = p
								})
							else if (typeof r.headers == 'object')
								for (const [p, m] of Object.entries(r.headers))
									m != null && (d[p.toLowerCase()] = m)
						}
						const h = await Fa(l.headers, d),
							g = {}
						for (const [p, m] of Object.entries(h)) g[p.toLowerCase()] = m
						f = g
					}
					let c = _r(ur({}, r), {
						method: l.method,
						output: l.output,
						headers: f
					})
					return (
						(r != null && r.disableValidation) ||
							(c = _r(ur({}, c), {
								body: l.input
									? await Fa(l.input, r == null ? void 0 : r.body)
									: r == null
										? void 0
										: r.body,
								params: l.params
									? await Fa(l.params, r == null ? void 0 : r.params)
									: r == null
										? void 0
										: r.params,
								query: l.query
									? await Fa(l.query, r == null ? void 0 : r.query)
									: r == null
										? void 0
										: r.query
							})),
						{ url: t, options: c }
					)
				}
			}
			return { url: t, options: r }
		}
	}),
	Dq = (e) => {
		async function t(r, n) {
			const i = _r(ur(ur({}, e), n), {
				headers: Rx(
					e == null ? void 0 : e.headers,
					n == null ? void 0 : n.headers
				),
				plugins: [
					...((e == null ? void 0 : e.plugins) || []),
					Fq(e || {}),
					...((n == null ? void 0 : n.plugins) || [])
				]
			})
			if (e != null && e.catchAllError)
				try {
					return await ep(r, i)
				} catch (a) {
					return {
						data: null,
						error: {
							status: 500,
							statusText: 'Fetch Error',
							message:
								'Fetch related error. Captured by catchAllError option. See error property for more details.',
							error: a
						}
					}
				}
			return await ep(r, i)
		}
		return t
	},
	Nq = (e) => e === '.' || e === '..'
function Lq(e, t) {
	let r = e
	for (const [n, i] of t) r = r.replace(n, i)
	if (Nq(r))
		throw new TypeError('Path parameters cannot be reserved path segments')
	return encodeURIComponent(r)
}
function jq(e, t) {
	const {
		baseURL: r,
		params: n,
		query: i
	} = t || { query: {}, params: {}, baseURL: '' }
	let a = e.startsWith('http') ? e.split('/').slice(0, 3).join('/') : r || ''
	if (e.startsWith('@')) {
		const d = e.toString().split('@')[1].split('/')[0]
		Cx.includes(d) && (e = e.replace(`@${d}/`, '/'))
	}
	a.endsWith('/') || (a += '/')
	let [s, o] = e.replace(a, '').split('?')
	const u = new URLSearchParams(o)
	for (const [d, h] of Object.entries(i || {})) {
		if (h == null) continue
		let g
		if (typeof h == 'string') g = h
		else if (Array.isArray(h)) {
			for (const p of h) u.append(d, p)
			continue
		} else g = JSON.stringify(h)
		u.set(d, g)
	}
	const l = new Map()
	if (n)
		if (Array.isArray(n)) {
			const d = s.split('/').filter((h) => h.startsWith(':'))
			for (const [h, g] of d.entries()) {
				const p = n[h]
				l.set(g, String(p))
			}
		} else for (const [d, h] of Object.entries(n)) l.set(`:${d}`, String(h))
	;((s = s
		.split('/')
		.map((d) => Lq(d, l))
		.join('/')),
		(s = s.replace(/^\/+/, '')))
	let f = u.toString()
	return (
		(f = f.length > 0 ? `?${f}`.replace(/\+/g, '%20') : ''),
		a.startsWith('http') ? new URL(`${s}${f}`, a) : `${a}${s}${f}`
	)
}
var ep = async (e, t) => {
		var r, n, i, a, s, o, u, l
		const { hooks: f, url: c, options: d } = await wq(e, t),
			h = Eq(d),
			g = new AbortController(),
			p = (r = d.signal) != null ? r : g.signal,
			m = jq(c, d),
			v = await Aq(d),
			_ = Iq(d, v),
			w = kq(c, d),
			x = _r(ur({}, d), { url: m, headers: v, body: _, method: w, signal: p })
		for (const P of f.onRequest)
			if (P) {
				const k = await P(x)
				typeof k == 'object' && k !== null && Object.assign(x, k)
			}
		;(('pipeTo' in x && typeof x.pipeTo == 'function') ||
			typeof ((n = t == null ? void 0 : t.body) == null ? void 0 : n.pipe) ==
				'function') &&
			('duplex' in x || (x.duplex = 'half'))
		const { clearTimeout: E } = qq(d, g)
		let R = await h(x.url, x)
		E()
		const S = { response: R, request: x }
		for (const P of f.onResponse)
			if (P) {
				const k = await P(
					_r(ur({}, S), {
						response:
							(i = t == null ? void 0 : t.hookOptions) != null &&
							i.cloneResponse
								? R.clone()
								: R
					})
				)
				k instanceof Response
					? (R = k)
					: typeof k == 'object' && k !== null && (R = k.response)
			}
		if (R.ok) {
			if (!(x.method !== 'HEAD')) return { data: '', error: null }
			const k = Cq(R),
				j = { data: null, response: R, request: x }
			if (k === 'json' || k === 'text') {
				const M = await R.text(),
					q = (a = x.jsonParser) != null ? a : Py
				j.data = await q(M)
			} else j.data = await R[k]()
			x != null &&
				x.output &&
				x.output &&
				!x.disableValidation &&
				(j.data = await Fa(x.output, j.data))
			for (const M of f.onSuccess)
				M &&
					(await M(
						_r(ur({}, j), {
							response:
								(s = t == null ? void 0 : t.hookOptions) != null &&
								s.cloneResponse
									? R.clone()
									: R
						})
					))
			return t != null && t.throw ? j.data : { data: j.data, error: null }
		}
		const y = (o = t == null ? void 0 : t.jsonParser) != null ? o : Py,
			b = await R.text(),
			O = Tq(b),
			A = O ? await y(b) : null,
			T = {
				response: R,
				responseText: b,
				request: x,
				error: _r(ur({}, A), { status: R.status, statusText: R.statusText })
			}
		for (const P of f.onError)
			P &&
				(await P(
					_r(ur({}, T), {
						response:
							(u = t == null ? void 0 : t.hookOptions) != null &&
							u.cloneResponse
								? R.clone()
								: R
					})
				))
		if (t != null && t.retry) {
			const P = xq(t.retry),
				k = (l = t.retryAttempt) != null ? l : 0
			if (await P.shouldAttemptRetry(k, R)) {
				for (const M of f.onRetry) M && (await M(S))
				const j = P.getDelay(k)
				return (
					await new Promise((M) => setTimeout(M, j)),
					await ep(e, _r(ur({}, t), { retryAttempt: k + 1 }))
				)
			}
		}
		if (t != null && t.throw) throw new bq(R.status, R.statusText, O ? A : b)
		return {
			data: null,
			error: _r(ur({}, A), { status: R.status, statusText: R.statusText })
		}
	},
	Xn = {}
const Uq = (e) => {
		if (typeof process > 'u') return
		const t = e ?? '/api/auth'
		if (Xn.NEXT_PUBLIC_AUTH_URL) return Xn.NEXT_PUBLIC_AUTH_URL
		if (typeof window > 'u') {
			if (Xn.NEXTAUTH_URL)
				try {
					return Xn.NEXTAUTH_URL
				} catch {}
			if (Xn.VERCEL_URL)
				try {
					const r = Xn.VERCEL_URL.startsWith('http') ? '' : 'https://'
					return `${new URL(`${r}${Xn.VERCEL_URL}`).origin}${t}`
				} catch {}
		}
	},
	IV = (e, t) => {
		var E, R, S, y, b, O, A
		const r = 'credentials' in Request.prototype,
			n =
				Nk(e == null ? void 0 : e.baseURL, e == null ? void 0 : e.basePath) ??
				Uq(e == null ? void 0 : e.basePath) ??
				'/api/auth',
			i =
				((E = e == null ? void 0 : e.plugins) == null
					? void 0
					: E.flatMap((T) => T.fetchPlugins).filter((T) => T !== void 0)) || [],
			a = {
				id: 'lifecycle-hooks',
				name: 'lifecycle-hooks',
				hooks: {
					onSuccess:
						(R = e == null ? void 0 : e.fetchOptions) == null
							? void 0
							: R.onSuccess,
					onError:
						(S = e == null ? void 0 : e.fetchOptions) == null
							? void 0
							: S.onError,
					onRequest:
						(y = e == null ? void 0 : e.fetchOptions) == null
							? void 0
							: y.onRequest,
					onResponse:
						(b = e == null ? void 0 : e.fetchOptions) == null
							? void 0
							: b.onResponse
				}
			},
			{
				onSuccess: s,
				onError: o,
				onRequest: u,
				onResponse: l,
				...f
			} = (e == null ? void 0 : e.fetchOptions) || {},
			c = Dq({
				baseURL: n,
				...(r ? { credentials: 'include' } : {}),
				method: 'GET',
				jsonParser(T) {
					return T ? Hk(T, { strict: !1 }) : null
				},
				customFetchImpl: fetch,
				...f,
				plugins: [
					a,
					...(f.plugins || []),
					...(e != null && e.disableDefaultFetchPlugins ? [] : [Kk]),
					...i
				]
			}),
			{ $sessionSignal: d, session: h, broadcastSessionUpdate: g } = dq(c, e),
			p = (e == null ? void 0 : e.plugins) || []
		let m = {}
		const v = { $sessionSignal: d, session: h },
			_ = {
				'/sign-out': 'POST',
				'/revoke-sessions': 'POST',
				'/revoke-other-sessions': 'POST',
				'/delete-user': 'POST'
			},
			w = [
				{
					signal: '$sessionSignal',
					matcher(T) {
						return (
							T === '/sign-out' ||
							T === '/update-user' ||
							T === '/update-session' ||
							T === '/sign-up/email' ||
							T === '/sign-in/email' ||
							T === '/delete-user' ||
							T === '/verify-email' ||
							T === '/revoke-sessions' ||
							T === '/revoke-session' ||
							T === '/revoke-other-sessions' ||
							T === '/change-email' ||
							T === '/change-password'
						)
					},
					callback(T) {
						T === '/sign-out'
							? g('signout')
							: (T === '/update-user' || T === '/update-session') &&
								g('updateUser')
					}
				}
			]
		for (const T of p)
			(T.getAtoms &&
				Object.assign(v, (O = T.getAtoms) == null ? void 0 : O.call(T, c)),
				T.pathMethods && Object.assign(_, T.pathMethods),
				T.atomListeners && w.push(...T.atomListeners))
		const x = {
			notify: (T) => {
				v[T].set(!v[T].get())
			},
			listen: (T, P) => {
				v[T].subscribe(P)
			},
			atoms: v
		}
		for (const T of p)
			T.getActions &&
				(m = pq(
					((A = T.getActions) == null ? void 0 : A.call(T, c, x, e)) ?? {},
					m
				))
		return {
			get baseURL() {
				return n
			},
			pluginsActions: m,
			pluginsAtoms: v,
			pluginPathMethods: _,
			atomListeners: w,
			$fetch: c,
			$store: x
		}
	}
function Bq(e) {
	return (
		typeof e == 'object' &&
		e !== null &&
		'get' in e &&
		typeof e.get == 'function' &&
		'lc' in e &&
		typeof e.lc == 'number'
	)
}
function kV(e) {
	return e.charAt(0).toUpperCase() + e.slice(1)
}
const Vq = new RegExp(
		'[\\p{Ll}\\d]+|\\p{Lu}+(?!\\p{Ll})|\\p{Lu}[\\p{Ll}\\d]+|\\p{Lo}+',
		'gu'
	),
	zq = /['\u2019]/g
function Hq(e) {
	return e.replace(zq, '').match(Vq) ?? []
}
function Gq(e) {
	return Hq(e)
		.map((t) => t.toLowerCase())
		.join('-')
}
function Wq(e, t, r) {
	const n = t[e],
		{ fetchOptions: i, query: a, ...s } = r || {}
	return (
		n ||
		(i != null && i.method
			? i.method
			: s && Object.keys(s).length > 0
				? 'POST'
				: 'GET')
	)
}
function qV(e, t, r, n, i) {
	function a(s = []) {
		return new Proxy(function () {}, {
			get(o, u) {
				if (
					typeof u != 'string' ||
					u === 'then' ||
					u === 'catch' ||
					u === 'finally'
				)
					return
				const l = [...s, u]
				let f = e
				for (const c of l)
					if (f && typeof f == 'object' && c in f) f = f[c]
					else {
						f = void 0
						break
					}
				return typeof f == 'function' || Bq(f) ? f : a(l)
			},
			apply: async (o, u, l) => {
				const f = '/' + s.map(Gq).join('/'),
					c = l[0] || {},
					d = l[1] || {},
					{ query: h, fetchOptions: g, ...p } = c,
					m = { ...d, ...g },
					v = Wq(f, r, c)
				return await t(f, {
					...m,
					body:
						v === 'GET'
							? void 0
							: { ...p, ...((m == null ? void 0 : m.body) || {}) },
					query: h || (m == null ? void 0 : m.query),
					method: v,
					async onSuccess(_) {
						var E, R
						if (
							(await ((E = m == null ? void 0 : m.onSuccess) == null
								? void 0
								: E.call(m, _)),
							!i || m.disableSignal)
						)
							return
						const w = i.filter((S) => S.matcher(f))
						if (!w.length) return
						const x = new Set()
						for (const S of w) {
							const y = n[S.signal]
							if (!y) return
							if (x.has(S.signal)) continue
							x.add(S.signal)
							const b = y.get()
							;(setTimeout(() => {
								y.set(!b)
							}, 10),
								(R = S.callback) == null || R.call(S, f))
						}
					}
				})
			}
		})
	}
	return a()
}
var Ol, ky
function Et() {
	if (ky) return Ol
	ky = 1
	var e = Array.isArray
	return ((Ol = e), Ol)
}
var Cl, qy
function Tx() {
	if (qy) return Cl
	qy = 1
	var e = typeof Ni == 'object' && Ni && Ni.Object === Object && Ni
	return ((Cl = e), Cl)
}
var Tl, $y
function kr() {
	if ($y) return Tl
	$y = 1
	var e = Tx(),
		t = typeof self == 'object' && self && self.Object === Object && self,
		r = e || t || Function('return this')()
	return ((Tl = r), Tl)
}
var El, Fy
function us() {
	if (Fy) return El
	Fy = 1
	var e = kr(),
		t = e.Symbol
	return ((El = t), El)
}
var Al, Dy
function Kq() {
	if (Dy) return Al
	Dy = 1
	var e = us(),
		t = Object.prototype,
		r = t.hasOwnProperty,
		n = t.toString,
		i = e ? e.toStringTag : void 0
	function a(s) {
		var o = r.call(s, i),
			u = s[i]
		try {
			s[i] = void 0
			var l = !0
		} catch {}
		var f = n.call(s)
		return (l && (o ? (s[i] = u) : delete s[i]), f)
	}
	return ((Al = a), Al)
}
var Ml, Ny
function Qq() {
	if (Ny) return Ml
	Ny = 1
	var e = Object.prototype,
		t = e.toString
	function r(n) {
		return t.call(n)
	}
	return ((Ml = r), Ml)
}
var Pl, Ly
function on() {
	if (Ly) return Pl
	Ly = 1
	var e = us(),
		t = Kq(),
		r = Qq(),
		n = '[object Null]',
		i = '[object Undefined]',
		a = e ? e.toStringTag : void 0
	function s(o) {
		return o == null
			? o === void 0
				? i
				: n
			: a && a in Object(o)
				? t(o)
				: r(o)
	}
	return ((Pl = s), Pl)
}
var Il, jy
function un() {
	if (jy) return Il
	jy = 1
	function e(t) {
		return t != null && typeof t == 'object'
	}
	return ((Il = e), Il)
}
var kl, Uy
function ya() {
	if (Uy) return kl
	Uy = 1
	var e = on(),
		t = un(),
		r = '[object Symbol]'
	function n(i) {
		return typeof i == 'symbol' || (t(i) && e(i) == r)
	}
	return ((kl = n), kl)
}
var ql, By
function Kp() {
	if (By) return ql
	By = 1
	var e = Et(),
		t = ya(),
		r = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
		n = /^\w*$/
	function i(a, s) {
		if (e(a)) return !1
		var o = typeof a
		return o == 'number' || o == 'symbol' || o == 'boolean' || a == null || t(a)
			? !0
			: n.test(a) || !r.test(a) || (s != null && a in Object(s))
	}
	return ((ql = i), ql)
}
var $l, Vy
function Un() {
	if (Vy) return $l
	Vy = 1
	function e(t) {
		var r = typeof t
		return t != null && (r == 'object' || r == 'function')
	}
	return (($l = e), $l)
}
var Fl, zy
function Qp() {
	if (zy) return Fl
	zy = 1
	var e = on(),
		t = Un(),
		r = '[object AsyncFunction]',
		n = '[object Function]',
		i = '[object GeneratorFunction]',
		a = '[object Proxy]'
	function s(o) {
		if (!t(o)) return !1
		var u = e(o)
		return u == n || u == i || u == r || u == a
	}
	return ((Fl = s), Fl)
}
var Dl, Hy
function Zq() {
	if (Hy) return Dl
	Hy = 1
	var e = kr(),
		t = e['__core-js_shared__']
	return ((Dl = t), Dl)
}
var Nl, Gy
function Yq() {
	if (Gy) return Nl
	Gy = 1
	var e = Zq(),
		t = (function () {
			var n = /[^.]+$/.exec((e && e.keys && e.keys.IE_PROTO) || '')
			return n ? 'Symbol(src)_1.' + n : ''
		})()
	function r(n) {
		return !!t && t in n
	}
	return ((Nl = r), Nl)
}
var Ll, Wy
function Ex() {
	if (Wy) return Ll
	Wy = 1
	var e = Function.prototype,
		t = e.toString
	function r(n) {
		if (n != null) {
			try {
				return t.call(n)
			} catch {}
			try {
				return n + ''
			} catch {}
		}
		return ''
	}
	return ((Ll = r), Ll)
}
var jl, Ky
function Jq() {
	if (Ky) return jl
	Ky = 1
	var e = Qp(),
		t = Yq(),
		r = Un(),
		n = Ex(),
		i = /[\\^$.*+?()[\]{}|]/g,
		a = /^\[object .+?Constructor\]$/,
		s = Function.prototype,
		o = Object.prototype,
		u = s.toString,
		l = o.hasOwnProperty,
		f = RegExp(
			'^' +
				u
					.call(l)
					.replace(i, '\\$&')
					.replace(
						/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
						'$1.*?'
					) +
				'$'
		)
	function c(d) {
		if (!r(d) || t(d)) return !1
		var h = e(d) ? f : a
		return h.test(n(d))
	}
	return ((jl = c), jl)
}
var Ul, Qy
function Xq() {
	if (Qy) return Ul
	Qy = 1
	function e(t, r) {
		return t == null ? void 0 : t[r]
	}
	return ((Ul = e), Ul)
}
var Bl, Zy
function Mi() {
	if (Zy) return Bl
	Zy = 1
	var e = Jq(),
		t = Xq()
	function r(n, i) {
		var a = t(n, i)
		return e(a) ? a : void 0
	}
	return ((Bl = r), Bl)
}
var Vl, Yy
function Lo() {
	if (Yy) return Vl
	Yy = 1
	var e = Mi(),
		t = e(Object, 'create')
	return ((Vl = t), Vl)
}
var zl, Jy
function e$() {
	if (Jy) return zl
	Jy = 1
	var e = Lo()
	function t() {
		;((this.__data__ = e ? e(null) : {}), (this.size = 0))
	}
	return ((zl = t), zl)
}
var Hl, Xy
function t$() {
	if (Xy) return Hl
	Xy = 1
	function e(t) {
		var r = this.has(t) && delete this.__data__[t]
		return ((this.size -= r ? 1 : 0), r)
	}
	return ((Hl = e), Hl)
}
var Gl, e0
function r$() {
	if (e0) return Gl
	e0 = 1
	var e = Lo(),
		t = '__lodash_hash_undefined__',
		r = Object.prototype,
		n = r.hasOwnProperty
	function i(a) {
		var s = this.__data__
		if (e) {
			var o = s[a]
			return o === t ? void 0 : o
		}
		return n.call(s, a) ? s[a] : void 0
	}
	return ((Gl = i), Gl)
}
var Wl, t0
function n$() {
	if (t0) return Wl
	t0 = 1
	var e = Lo(),
		t = Object.prototype,
		r = t.hasOwnProperty
	function n(i) {
		var a = this.__data__
		return e ? a[i] !== void 0 : r.call(a, i)
	}
	return ((Wl = n), Wl)
}
var Kl, r0
function i$() {
	if (r0) return Kl
	r0 = 1
	var e = Lo(),
		t = '__lodash_hash_undefined__'
	function r(n, i) {
		var a = this.__data__
		return (
			(this.size += this.has(n) ? 0 : 1),
			(a[n] = e && i === void 0 ? t : i),
			this
		)
	}
	return ((Kl = r), Kl)
}
var Ql, n0
function a$() {
	if (n0) return Ql
	n0 = 1
	var e = e$(),
		t = t$(),
		r = r$(),
		n = n$(),
		i = i$()
	function a(s) {
		var o = -1,
			u = s == null ? 0 : s.length
		for (this.clear(); ++o < u; ) {
			var l = s[o]
			this.set(l[0], l[1])
		}
	}
	return (
		(a.prototype.clear = e),
		(a.prototype.delete = t),
		(a.prototype.get = r),
		(a.prototype.has = n),
		(a.prototype.set = i),
		(Ql = a),
		Ql
	)
}
var Zl, i0
function s$() {
	if (i0) return Zl
	i0 = 1
	function e() {
		;((this.__data__ = []), (this.size = 0))
	}
	return ((Zl = e), Zl)
}
var Yl, a0
function Zp() {
	if (a0) return Yl
	a0 = 1
	function e(t, r) {
		return t === r || (t !== t && r !== r)
	}
	return ((Yl = e), Yl)
}
var Jl, s0
function jo() {
	if (s0) return Jl
	s0 = 1
	var e = Zp()
	function t(r, n) {
		for (var i = r.length; i--; ) if (e(r[i][0], n)) return i
		return -1
	}
	return ((Jl = t), Jl)
}
var Xl, o0
function o$() {
	if (o0) return Xl
	o0 = 1
	var e = jo(),
		t = Array.prototype,
		r = t.splice
	function n(i) {
		var a = this.__data__,
			s = e(a, i)
		if (s < 0) return !1
		var o = a.length - 1
		return (s == o ? a.pop() : r.call(a, s, 1), --this.size, !0)
	}
	return ((Xl = n), Xl)
}
var ec, u0
function u$() {
	if (u0) return ec
	u0 = 1
	var e = jo()
	function t(r) {
		var n = this.__data__,
			i = e(n, r)
		return i < 0 ? void 0 : n[i][1]
	}
	return ((ec = t), ec)
}
var tc, l0
function l$() {
	if (l0) return tc
	l0 = 1
	var e = jo()
	function t(r) {
		return e(this.__data__, r) > -1
	}
	return ((tc = t), tc)
}
var rc, c0
function c$() {
	if (c0) return rc
	c0 = 1
	var e = jo()
	function t(r, n) {
		var i = this.__data__,
			a = e(i, r)
		return (a < 0 ? (++this.size, i.push([r, n])) : (i[a][1] = n), this)
	}
	return ((rc = t), rc)
}
var nc, f0
function Uo() {
	if (f0) return nc
	f0 = 1
	var e = s$(),
		t = o$(),
		r = u$(),
		n = l$(),
		i = c$()
	function a(s) {
		var o = -1,
			u = s == null ? 0 : s.length
		for (this.clear(); ++o < u; ) {
			var l = s[o]
			this.set(l[0], l[1])
		}
	}
	return (
		(a.prototype.clear = e),
		(a.prototype.delete = t),
		(a.prototype.get = r),
		(a.prototype.has = n),
		(a.prototype.set = i),
		(nc = a),
		nc
	)
}
var ic, d0
function Yp() {
	if (d0) return ic
	d0 = 1
	var e = Mi(),
		t = kr(),
		r = e(t, 'Map')
	return ((ic = r), ic)
}
var ac, h0
function f$() {
	if (h0) return ac
	h0 = 1
	var e = a$(),
		t = Uo(),
		r = Yp()
	function n() {
		;((this.size = 0),
			(this.__data__ = { hash: new e(), map: new (r || t)(), string: new e() }))
	}
	return ((ac = n), ac)
}
var sc, p0
function d$() {
	if (p0) return sc
	p0 = 1
	function e(t) {
		var r = typeof t
		return r == 'string' || r == 'number' || r == 'symbol' || r == 'boolean'
			? t !== '__proto__'
			: t === null
	}
	return ((sc = e), sc)
}
var oc, g0
function Bo() {
	if (g0) return oc
	g0 = 1
	var e = d$()
	function t(r, n) {
		var i = r.__data__
		return e(n) ? i[typeof n == 'string' ? 'string' : 'hash'] : i.map
	}
	return ((oc = t), oc)
}
var uc, m0
function h$() {
	if (m0) return uc
	m0 = 1
	var e = Bo()
	function t(r) {
		var n = e(this, r).delete(r)
		return ((this.size -= n ? 1 : 0), n)
	}
	return ((uc = t), uc)
}
var lc, v0
function p$() {
	if (v0) return lc
	v0 = 1
	var e = Bo()
	function t(r) {
		return e(this, r).get(r)
	}
	return ((lc = t), lc)
}
var cc, y0
function g$() {
	if (y0) return cc
	y0 = 1
	var e = Bo()
	function t(r) {
		return e(this, r).has(r)
	}
	return ((cc = t), cc)
}
var fc, _0
function m$() {
	if (_0) return fc
	_0 = 1
	var e = Bo()
	function t(r, n) {
		var i = e(this, r),
			a = i.size
		return (i.set(r, n), (this.size += i.size == a ? 0 : 1), this)
	}
	return ((fc = t), fc)
}
var dc, b0
function Jp() {
	if (b0) return dc
	b0 = 1
	var e = f$(),
		t = h$(),
		r = p$(),
		n = g$(),
		i = m$()
	function a(s) {
		var o = -1,
			u = s == null ? 0 : s.length
		for (this.clear(); ++o < u; ) {
			var l = s[o]
			this.set(l[0], l[1])
		}
	}
	return (
		(a.prototype.clear = e),
		(a.prototype.delete = t),
		(a.prototype.get = r),
		(a.prototype.has = n),
		(a.prototype.set = i),
		(dc = a),
		dc
	)
}
var hc, w0
function Ax() {
	if (w0) return hc
	w0 = 1
	var e = Jp(),
		t = 'Expected a function'
	function r(n, i) {
		if (typeof n != 'function' || (i != null && typeof i != 'function'))
			throw new TypeError(t)
		var a = function () {
			var s = arguments,
				o = i ? i.apply(this, s) : s[0],
				u = a.cache
			if (u.has(o)) return u.get(o)
			var l = n.apply(this, s)
			return ((a.cache = u.set(o, l) || u), l)
		}
		return ((a.cache = new (r.Cache || e)()), a)
	}
	return ((r.Cache = e), (hc = r), hc)
}
var pc, S0
function v$() {
	if (S0) return pc
	S0 = 1
	var e = Ax(),
		t = 500
	function r(n) {
		var i = e(n, function (s) {
				return (a.size === t && a.clear(), s)
			}),
			a = i.cache
		return i
	}
	return ((pc = r), pc)
}
var gc, x0
function y$() {
	if (x0) return gc
	x0 = 1
	var e = v$(),
		t =
			/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
		r = /\\(\\)?/g,
		n = e(function (i) {
			var a = []
			return (
				i.charCodeAt(0) === 46 && a.push(''),
				i.replace(t, function (s, o, u, l) {
					a.push(u ? l.replace(r, '$1') : o || s)
				}),
				a
			)
		})
	return ((gc = n), gc)
}
var mc, R0
function Xp() {
	if (R0) return mc
	R0 = 1
	function e(t, r) {
		for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
			a[n] = r(t[n], n, t)
		return a
	}
	return ((mc = e), mc)
}
var vc, O0
function _$() {
	if (O0) return vc
	O0 = 1
	var e = us(),
		t = Xp(),
		r = Et(),
		n = ya(),
		i = e ? e.prototype : void 0,
		a = i ? i.toString : void 0
	function s(o) {
		if (typeof o == 'string') return o
		if (r(o)) return t(o, s) + ''
		if (n(o)) return a ? a.call(o) : ''
		var u = o + ''
		return u == '0' && 1 / o == -1 / 0 ? '-0' : u
	}
	return ((vc = s), vc)
}
var yc, C0
function Mx() {
	if (C0) return yc
	C0 = 1
	var e = _$()
	function t(r) {
		return r == null ? '' : e(r)
	}
	return ((yc = t), yc)
}
var _c, T0
function Px() {
	if (T0) return _c
	T0 = 1
	var e = Et(),
		t = Kp(),
		r = y$(),
		n = Mx()
	function i(a, s) {
		return e(a) ? a : t(a, s) ? [a] : r(n(a))
	}
	return ((_c = i), _c)
}
var bc, E0
function Vo() {
	if (E0) return bc
	E0 = 1
	var e = ya()
	function t(r) {
		if (typeof r == 'string' || e(r)) return r
		var n = r + ''
		return n == '0' && 1 / r == -1 / 0 ? '-0' : n
	}
	return ((bc = t), bc)
}
var wc, A0
function eg() {
	if (A0) return wc
	A0 = 1
	var e = Px(),
		t = Vo()
	function r(n, i) {
		i = e(i, n)
		for (var a = 0, s = i.length; n != null && a < s; ) n = n[t(i[a++])]
		return a && a == s ? n : void 0
	}
	return ((wc = r), wc)
}
var Sc, M0
function Ix() {
	if (M0) return Sc
	M0 = 1
	var e = eg()
	function t(r, n, i) {
		var a = r == null ? void 0 : e(r, n)
		return a === void 0 ? i : a
	}
	return ((Sc = t), Sc)
}
var b$ = Ix()
const $V = qe(b$)
var xc, P0
function w$() {
	if (P0) return xc
	P0 = 1
	function e(t) {
		return t == null
	}
	return ((xc = e), xc)
}
var S$ = w$()
const FV = qe(S$)
var Rc, I0
function x$() {
	if (I0) return Rc
	I0 = 1
	var e = on(),
		t = Et(),
		r = un(),
		n = '[object String]'
	function i(a) {
		return typeof a == 'string' || (!t(a) && r(a) && e(a) == n)
	}
	return ((Rc = i), Rc)
}
var R$ = x$()
const DV = qe(R$)
var O$ = Qp()
const NV = qe(O$)
var C$ = Un()
const LV = qe(C$)
var Oc, k0
function kx() {
	if (k0) return Oc
	k0 = 1
	var e = on(),
		t = un(),
		r = '[object Number]'
	function n(i) {
		return typeof i == 'number' || (t(i) && e(i) == r)
	}
	return ((Oc = n), Oc)
}
var Cc, q0
function T$() {
	if (q0) return Cc
	q0 = 1
	var e = kx()
	function t(r) {
		return e(r) && r != +r
	}
	return ((Cc = t), Cc)
}
var E$ = T$()
const jV = qe(E$)
var A$ = kx()
const UV = qe(A$)
var Tc, $0
function M$() {
	if ($0) return Tc
	$0 = 1
	function e(t, r, n) {
		var i = -1,
			a = t.length
		;(r < 0 && (r = -r > a ? 0 : a + r),
			(n = n > a ? a : n),
			n < 0 && (n += a),
			(a = r > n ? 0 : (n - r) >>> 0),
			(r >>>= 0))
		for (var s = Array(a); ++i < a; ) s[i] = t[i + r]
		return s
	}
	return ((Tc = e), Tc)
}
var Ec, F0
function P$() {
	if (F0) return Ec
	F0 = 1
	var e = M$()
	function t(r, n, i) {
		var a = r.length
		return ((i = i === void 0 ? a : i), !n && i >= a ? r : e(r, n, i))
	}
	return ((Ec = t), Ec)
}
var Ac, D0
function qx() {
	if (D0) return Ac
	D0 = 1
	var e = '\\ud800-\\udfff',
		t = '\\u0300-\\u036f',
		r = '\\ufe20-\\ufe2f',
		n = '\\u20d0-\\u20ff',
		i = t + r + n,
		a = '\\ufe0e\\ufe0f',
		s = '\\u200d',
		o = RegExp('[' + s + e + i + a + ']')
	function u(l) {
		return o.test(l)
	}
	return ((Ac = u), Ac)
}
var Mc, N0
function I$() {
	if (N0) return Mc
	N0 = 1
	function e(t) {
		return t.split('')
	}
	return ((Mc = e), Mc)
}
var Pc, L0
function k$() {
	if (L0) return Pc
	L0 = 1
	var e = '\\ud800-\\udfff',
		t = '\\u0300-\\u036f',
		r = '\\ufe20-\\ufe2f',
		n = '\\u20d0-\\u20ff',
		i = t + r + n,
		a = '\\ufe0e\\ufe0f',
		s = '[' + e + ']',
		o = '[' + i + ']',
		u = '\\ud83c[\\udffb-\\udfff]',
		l = '(?:' + o + '|' + u + ')',
		f = '[^' + e + ']',
		c = '(?:\\ud83c[\\udde6-\\uddff]){2}',
		d = '[\\ud800-\\udbff][\\udc00-\\udfff]',
		h = '\\u200d',
		g = l + '?',
		p = '[' + a + ']?',
		m = '(?:' + h + '(?:' + [f, c, d].join('|') + ')' + p + g + ')*',
		v = p + g + m,
		_ = '(?:' + [f + o + '?', o, c, d, s].join('|') + ')',
		w = RegExp(u + '(?=' + u + ')|' + _ + v, 'g')
	function x(E) {
		return E.match(w) || []
	}
	return ((Pc = x), Pc)
}
var Ic, j0
function q$() {
	if (j0) return Ic
	j0 = 1
	var e = I$(),
		t = qx(),
		r = k$()
	function n(i) {
		return t(i) ? r(i) : e(i)
	}
	return ((Ic = n), Ic)
}
var kc, U0
function $$() {
	if (U0) return kc
	U0 = 1
	var e = P$(),
		t = qx(),
		r = q$(),
		n = Mx()
	function i(a) {
		return function (s) {
			s = n(s)
			var o = t(s) ? r(s) : void 0,
				u = o ? o[0] : s.charAt(0),
				l = o ? e(o, 1).join('') : s.slice(1)
			return u[a]() + l
		}
	}
	return ((kc = i), kc)
}
var qc, B0
function F$() {
	if (B0) return qc
	B0 = 1
	var e = $$(),
		t = e('toUpperCase')
	return ((qc = t), qc)
}
var D$ = F$()
const BV = qe(D$)
function Le(e) {
	return function () {
		return e
	}
}
const $x = Math.cos,
	so = Math.sin,
	gr = Math.sqrt,
	oo = Math.PI,
	zo = 2 * oo,
	tp = Math.PI,
	rp = 2 * tp,
	ei = 1e-6,
	N$ = rp - ei
function Fx(e) {
	this._ += e[0]
	for (let t = 1, r = e.length; t < r; ++t) this._ += arguments[t] + e[t]
}
function L$(e) {
	let t = Math.floor(e)
	if (!(t >= 0)) throw new Error(`invalid digits: ${e}`)
	if (t > 15) return Fx
	const r = 10 ** t
	return function (n) {
		this._ += n[0]
		for (let i = 1, a = n.length; i < a; ++i)
			this._ += Math.round(arguments[i] * r) / r + n[i]
	}
}
class j$ {
	constructor(t) {
		;((this._x0 = this._y0 = this._x1 = this._y1 = null),
			(this._ = ''),
			(this._append = t == null ? Fx : L$(t)))
	}
	moveTo(t, r) {
		this._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}`
	}
	closePath() {
		this._x1 !== null &&
			((this._x1 = this._x0), (this._y1 = this._y0), this._append`Z`)
	}
	lineTo(t, r) {
		this._append`L${(this._x1 = +t)},${(this._y1 = +r)}`
	}
	quadraticCurveTo(t, r, n, i) {
		this._append`Q${+t},${+r},${(this._x1 = +n)},${(this._y1 = +i)}`
	}
	bezierCurveTo(t, r, n, i, a, s) {
		this._append`C${+t},${+r},${+n},${+i},${(this._x1 = +a)},${(this._y1 = +s)}`
	}
	arcTo(t, r, n, i, a) {
		if (((t = +t), (r = +r), (n = +n), (i = +i), (a = +a), a < 0))
			throw new Error(`negative radius: ${a}`)
		let s = this._x1,
			o = this._y1,
			u = n - t,
			l = i - r,
			f = s - t,
			c = o - r,
			d = f * f + c * c
		if (this._x1 === null) this._append`M${(this._x1 = t)},${(this._y1 = r)}`
		else if (d > ei)
			if (!(Math.abs(c * u - l * f) > ei) || !a)
				this._append`L${(this._x1 = t)},${(this._y1 = r)}`
			else {
				let h = n - s,
					g = i - o,
					p = u * u + l * l,
					m = h * h + g * g,
					v = Math.sqrt(p),
					_ = Math.sqrt(d),
					w = a * Math.tan((tp - Math.acos((p + d - m) / (2 * v * _))) / 2),
					x = w / _,
					E = w / v
				;(Math.abs(x - 1) > ei && this._append`L${t + x * f},${r + x * c}`,
					this
						._append`A${a},${a},0,0,${+(c * h > f * g)},${(this._x1 = t + E * u)},${(this._y1 = r + E * l)}`)
			}
	}
	arc(t, r, n, i, a, s) {
		if (((t = +t), (r = +r), (n = +n), (s = !!s), n < 0))
			throw new Error(`negative radius: ${n}`)
		let o = n * Math.cos(i),
			u = n * Math.sin(i),
			l = t + o,
			f = r + u,
			c = 1 ^ s,
			d = s ? i - a : a - i
		;(this._x1 === null
			? this._append`M${l},${f}`
			: (Math.abs(this._x1 - l) > ei || Math.abs(this._y1 - f) > ei) &&
				this._append`L${l},${f}`,
			n &&
				(d < 0 && (d = (d % rp) + rp),
				d > N$
					? this
							._append`A${n},${n},0,1,${c},${t - o},${r - u}A${n},${n},0,1,${c},${(this._x1 = l)},${(this._y1 = f)}`
					: d > ei &&
						this
							._append`A${n},${n},0,${+(d >= tp)},${c},${(this._x1 = t + n * Math.cos(a))},${(this._y1 = r + n * Math.sin(a))}`))
	}
	rect(t, r, n, i) {
		this
			._append`M${(this._x0 = this._x1 = +t)},${(this._y0 = this._y1 = +r)}h${(n = +n)}v${+i}h${-n}Z`
	}
	toString() {
		return this._
	}
}
function tg(e) {
	let t = 3
	return (
		(e.digits = function (r) {
			if (!arguments.length) return t
			if (r == null) t = null
			else {
				const n = Math.floor(r)
				if (!(n >= 0)) throw new RangeError(`invalid digits: ${r}`)
				t = n
			}
			return e
		}),
		() => new j$(t)
	)
}
function rg(e) {
	return typeof e == 'object' && 'length' in e ? e : Array.from(e)
}
function Dx(e) {
	this._context = e
}
Dx.prototype = {
	areaStart: function () {
		this._line = 0
	},
	areaEnd: function () {
		this._line = NaN
	},
	lineStart: function () {
		this._point = 0
	},
	lineEnd: function () {
		;((this._line || (this._line !== 0 && this._point === 1)) &&
			this._context.closePath(),
			(this._line = 1 - this._line))
	},
	point: function (e, t) {
		switch (((e = +e), (t = +t), this._point)) {
			case 0:
				;((this._point = 1),
					this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t))
				break
			case 1:
				this._point = 2
			default:
				this._context.lineTo(e, t)
				break
		}
	}
}
function Nx(e) {
	return new Dx(e)
}
function Lx(e) {
	return e[0]
}
function jx(e) {
	return e[1]
}
function U$(e, t) {
	var r = Le(!0),
		n = null,
		i = Nx,
		a = null,
		s = tg(o)
	;((e = typeof e == 'function' ? e : e === void 0 ? Lx : Le(e)),
		(t = typeof t == 'function' ? t : t === void 0 ? jx : Le(t)))
	function o(u) {
		var l,
			f = (u = rg(u)).length,
			c,
			d = !1,
			h
		for (n == null && (a = i((h = s()))), l = 0; l <= f; ++l)
			(!(l < f && r((c = u[l]), l, u)) === d &&
				((d = !d) ? a.lineStart() : a.lineEnd()),
				d && a.point(+e(c, l, u), +t(c, l, u)))
		if (h) return ((a = null), h + '' || null)
	}
	return (
		(o.x = function (u) {
			return arguments.length
				? ((e = typeof u == 'function' ? u : Le(+u)), o)
				: e
		}),
		(o.y = function (u) {
			return arguments.length
				? ((t = typeof u == 'function' ? u : Le(+u)), o)
				: t
		}),
		(o.defined = function (u) {
			return arguments.length
				? ((r = typeof u == 'function' ? u : Le(!!u)), o)
				: r
		}),
		(o.curve = function (u) {
			return arguments.length ? ((i = u), n != null && (a = i(n)), o) : i
		}),
		(o.context = function (u) {
			return arguments.length
				? (u == null ? (n = a = null) : (a = i((n = u))), o)
				: n
		}),
		o
	)
}
function VV(e, t, r) {
	var n = null,
		i = Le(!0),
		a = null,
		s = Nx,
		o = null,
		u = tg(l)
	;((e = typeof e == 'function' ? e : e === void 0 ? Lx : Le(+e)),
		(t = typeof t == 'function' ? t : Le(t === void 0 ? 0 : +t)),
		(r = typeof r == 'function' ? r : r === void 0 ? jx : Le(+r)))
	function l(c) {
		var d,
			h,
			g,
			p = (c = rg(c)).length,
			m,
			v = !1,
			_,
			w = new Array(p),
			x = new Array(p)
		for (a == null && (o = s((_ = u()))), d = 0; d <= p; ++d) {
			if (!(d < p && i((m = c[d]), d, c)) === v)
				if ((v = !v)) ((h = d), o.areaStart(), o.lineStart())
				else {
					for (o.lineEnd(), o.lineStart(), g = d - 1; g >= h; --g)
						o.point(w[g], x[g])
					;(o.lineEnd(), o.areaEnd())
				}
			v &&
				((w[d] = +e(m, d, c)),
				(x[d] = +t(m, d, c)),
				o.point(n ? +n(m, d, c) : w[d], r ? +r(m, d, c) : x[d]))
		}
		if (_) return ((o = null), _ + '' || null)
	}
	function f() {
		return U$().defined(i).curve(s).context(a)
	}
	return (
		(l.x = function (c) {
			return arguments.length
				? ((e = typeof c == 'function' ? c : Le(+c)), (n = null), l)
				: e
		}),
		(l.x0 = function (c) {
			return arguments.length
				? ((e = typeof c == 'function' ? c : Le(+c)), l)
				: e
		}),
		(l.x1 = function (c) {
			return arguments.length
				? ((n = c == null ? null : typeof c == 'function' ? c : Le(+c)), l)
				: n
		}),
		(l.y = function (c) {
			return arguments.length
				? ((t = typeof c == 'function' ? c : Le(+c)), (r = null), l)
				: t
		}),
		(l.y0 = function (c) {
			return arguments.length
				? ((t = typeof c == 'function' ? c : Le(+c)), l)
				: t
		}),
		(l.y1 = function (c) {
			return arguments.length
				? ((r = c == null ? null : typeof c == 'function' ? c : Le(+c)), l)
				: r
		}),
		(l.lineX0 = l.lineY0 =
			function () {
				return f().x(e).y(t)
			}),
		(l.lineY1 = function () {
			return f().x(e).y(r)
		}),
		(l.lineX1 = function () {
			return f().x(n).y(t)
		}),
		(l.defined = function (c) {
			return arguments.length
				? ((i = typeof c == 'function' ? c : Le(!!c)), l)
				: i
		}),
		(l.curve = function (c) {
			return arguments.length ? ((s = c), a != null && (o = s(a)), l) : s
		}),
		(l.context = function (c) {
			return arguments.length
				? (c == null ? (a = o = null) : (o = s((a = c))), l)
				: a
		}),
		l
	)
}
class Ux {
	constructor(t, r) {
		;((this._context = t), (this._x = r))
	}
	areaStart() {
		this._line = 0
	}
	areaEnd() {
		this._line = NaN
	}
	lineStart() {
		this._point = 0
	}
	lineEnd() {
		;((this._line || (this._line !== 0 && this._point === 1)) &&
			this._context.closePath(),
			(this._line = 1 - this._line))
	}
	point(t, r) {
		switch (((t = +t), (r = +r), this._point)) {
			case 0: {
				;((this._point = 1),
					this._line ? this._context.lineTo(t, r) : this._context.moveTo(t, r))
				break
			}
			case 1:
				this._point = 2
			default: {
				this._x
					? this._context.bezierCurveTo(
							(this._x0 = (this._x0 + t) / 2),
							this._y0,
							this._x0,
							r,
							t,
							r
						)
					: this._context.bezierCurveTo(
							this._x0,
							(this._y0 = (this._y0 + r) / 2),
							t,
							this._y0,
							t,
							r
						)
				break
			}
		}
		;((this._x0 = t), (this._y0 = r))
	}
}
function zV(e) {
	return new Ux(e, !0)
}
function HV(e) {
	return new Ux(e, !1)
}
const B$ = {
		draw(e, t) {
			const r = gr(t / oo)
			;(e.moveTo(r, 0), e.arc(0, 0, r, 0, zo))
		}
	},
	GV = {
		draw(e, t) {
			const r = gr(t / 5) / 2
			;(e.moveTo(-3 * r, -r),
				e.lineTo(-r, -r),
				e.lineTo(-r, -3 * r),
				e.lineTo(r, -3 * r),
				e.lineTo(r, -r),
				e.lineTo(3 * r, -r),
				e.lineTo(3 * r, r),
				e.lineTo(r, r),
				e.lineTo(r, 3 * r),
				e.lineTo(-r, 3 * r),
				e.lineTo(-r, r),
				e.lineTo(-3 * r, r),
				e.closePath())
		}
	},
	Bx = gr(1 / 3),
	V$ = Bx * 2,
	WV = {
		draw(e, t) {
			const r = gr(t / V$),
				n = r * Bx
			;(e.moveTo(0, -r),
				e.lineTo(n, 0),
				e.lineTo(0, r),
				e.lineTo(-n, 0),
				e.closePath())
		}
	},
	KV = {
		draw(e, t) {
			const r = gr(t),
				n = -r / 2
			e.rect(n, n, r, r)
		}
	},
	z$ = 0.8908130915292852,
	Vx = so(oo / 10) / so((7 * oo) / 10),
	H$ = so(zo / 10) * Vx,
	G$ = -$x(zo / 10) * Vx,
	QV = {
		draw(e, t) {
			const r = gr(t * z$),
				n = H$ * r,
				i = G$ * r
			;(e.moveTo(0, -r), e.lineTo(n, i))
			for (let a = 1; a < 5; ++a) {
				const s = (zo * a) / 5,
					o = $x(s),
					u = so(s)
				;(e.lineTo(u * r, -o * r), e.lineTo(o * n - u * i, u * n + o * i))
			}
			e.closePath()
		}
	},
	$c = gr(3),
	ZV = {
		draw(e, t) {
			const r = -gr(t / ($c * 3))
			;(e.moveTo(0, r * 2),
				e.lineTo(-$c * r, -r),
				e.lineTo($c * r, -r),
				e.closePath())
		}
	},
	Ht = -0.5,
	Gt = gr(3) / 2,
	np = 1 / gr(12),
	W$ = (np / 2 + 1) * 3,
	YV = {
		draw(e, t) {
			const r = gr(t / W$),
				n = r / 2,
				i = r * np,
				a = n,
				s = r * np + r,
				o = -a,
				u = s
			;(e.moveTo(n, i),
				e.lineTo(a, s),
				e.lineTo(o, u),
				e.lineTo(Ht * n - Gt * i, Gt * n + Ht * i),
				e.lineTo(Ht * a - Gt * s, Gt * a + Ht * s),
				e.lineTo(Ht * o - Gt * u, Gt * o + Ht * u),
				e.lineTo(Ht * n + Gt * i, Ht * i - Gt * n),
				e.lineTo(Ht * a + Gt * s, Ht * s - Gt * a),
				e.lineTo(Ht * o + Gt * u, Ht * u - Gt * o),
				e.closePath())
		}
	}
function JV(e, t) {
	let r = null,
		n = tg(i)
	;((e = typeof e == 'function' ? e : Le(e || B$)),
		(t = typeof t == 'function' ? t : Le(t === void 0 ? 64 : +t)))
	function i() {
		let a
		if (
			(r || (r = a = n()),
			e.apply(this, arguments).draw(r, +t.apply(this, arguments)),
			a)
		)
			return ((r = null), a + '' || null)
	}
	return (
		(i.type = function (a) {
			return arguments.length
				? ((e = typeof a == 'function' ? a : Le(a)), i)
				: e
		}),
		(i.size = function (a) {
			return arguments.length
				? ((t = typeof a == 'function' ? a : Le(+a)), i)
				: t
		}),
		(i.context = function (a) {
			return arguments.length ? ((r = a ?? null), i) : r
		}),
		i
	)
}
function uo() {}
function lo(e, t, r) {
	e._context.bezierCurveTo(
		(2 * e._x0 + e._x1) / 3,
		(2 * e._y0 + e._y1) / 3,
		(e._x0 + 2 * e._x1) / 3,
		(e._y0 + 2 * e._y1) / 3,
		(e._x0 + 4 * e._x1 + t) / 6,
		(e._y0 + 4 * e._y1 + r) / 6
	)
}
function zx(e) {
	this._context = e
}
zx.prototype = {
	areaStart: function () {
		this._line = 0
	},
	areaEnd: function () {
		this._line = NaN
	},
	lineStart: function () {
		;((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0))
	},
	lineEnd: function () {
		switch (this._point) {
			case 3:
				lo(this, this._x1, this._y1)
			case 2:
				this._context.lineTo(this._x1, this._y1)
				break
		}
		;((this._line || (this._line !== 0 && this._point === 1)) &&
			this._context.closePath(),
			(this._line = 1 - this._line))
	},
	point: function (e, t) {
		switch (((e = +e), (t = +t), this._point)) {
			case 0:
				;((this._point = 1),
					this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t))
				break
			case 1:
				this._point = 2
				break
			case 2:
				;((this._point = 3),
					this._context.lineTo(
						(5 * this._x0 + this._x1) / 6,
						(5 * this._y0 + this._y1) / 6
					))
			default:
				lo(this, e, t)
				break
		}
		;((this._x0 = this._x1),
			(this._x1 = e),
			(this._y0 = this._y1),
			(this._y1 = t))
	}
}
function XV(e) {
	return new zx(e)
}
function Hx(e) {
	this._context = e
}
Hx.prototype = {
	areaStart: uo,
	areaEnd: uo,
	lineStart: function () {
		;((this._x0 =
			this._x1 =
			this._x2 =
			this._x3 =
			this._x4 =
			this._y0 =
			this._y1 =
			this._y2 =
			this._y3 =
			this._y4 =
				NaN),
			(this._point = 0))
	},
	lineEnd: function () {
		switch (this._point) {
			case 1: {
				;(this._context.moveTo(this._x2, this._y2), this._context.closePath())
				break
			}
			case 2: {
				;(this._context.moveTo(
					(this._x2 + 2 * this._x3) / 3,
					(this._y2 + 2 * this._y3) / 3
				),
					this._context.lineTo(
						(this._x3 + 2 * this._x2) / 3,
						(this._y3 + 2 * this._y2) / 3
					),
					this._context.closePath())
				break
			}
			case 3: {
				;(this.point(this._x2, this._y2),
					this.point(this._x3, this._y3),
					this.point(this._x4, this._y4))
				break
			}
		}
	},
	point: function (e, t) {
		switch (((e = +e), (t = +t), this._point)) {
			case 0:
				;((this._point = 1), (this._x2 = e), (this._y2 = t))
				break
			case 1:
				;((this._point = 2), (this._x3 = e), (this._y3 = t))
				break
			case 2:
				;((this._point = 3),
					(this._x4 = e),
					(this._y4 = t),
					this._context.moveTo(
						(this._x0 + 4 * this._x1 + e) / 6,
						(this._y0 + 4 * this._y1 + t) / 6
					))
				break
			default:
				lo(this, e, t)
				break
		}
		;((this._x0 = this._x1),
			(this._x1 = e),
			(this._y0 = this._y1),
			(this._y1 = t))
	}
}
function ez(e) {
	return new Hx(e)
}
function Gx(e) {
	this._context = e
}
Gx.prototype = {
	areaStart: function () {
		this._line = 0
	},
	areaEnd: function () {
		this._line = NaN
	},
	lineStart: function () {
		;((this._x0 = this._x1 = this._y0 = this._y1 = NaN), (this._point = 0))
	},
	lineEnd: function () {
		;((this._line || (this._line !== 0 && this._point === 3)) &&
			this._context.closePath(),
			(this._line = 1 - this._line))
	},
	point: function (e, t) {
		switch (((e = +e), (t = +t), this._point)) {
			case 0:
				this._point = 1
				break
			case 1:
				this._point = 2
				break
			case 2:
				this._point = 3
				var r = (this._x0 + 4 * this._x1 + e) / 6,
					n = (this._y0 + 4 * this._y1 + t) / 6
				this._line ? this._context.lineTo(r, n) : this._context.moveTo(r, n)
				break
			case 3:
				this._point = 4
			default:
				lo(this, e, t)
				break
		}
		;((this._x0 = this._x1),
			(this._x1 = e),
			(this._y0 = this._y1),
			(this._y1 = t))
	}
}
function tz(e) {
	return new Gx(e)
}
function Wx(e) {
	this._context = e
}
Wx.prototype = {
	areaStart: uo,
	areaEnd: uo,
	lineStart: function () {
		this._point = 0
	},
	lineEnd: function () {
		this._point && this._context.closePath()
	},
	point: function (e, t) {
		;((e = +e),
			(t = +t),
			this._point
				? this._context.lineTo(e, t)
				: ((this._point = 1), this._context.moveTo(e, t)))
	}
}
function rz(e) {
	return new Wx(e)
}
function V0(e) {
	return e < 0 ? -1 : 1
}
function z0(e, t, r) {
	var n = e._x1 - e._x0,
		i = t - e._x1,
		a = (e._y1 - e._y0) / (n || (i < 0 && -0)),
		s = (r - e._y1) / (i || (n < 0 && -0)),
		o = (a * i + s * n) / (n + i)
	return (
		(V0(a) + V0(s)) * Math.min(Math.abs(a), Math.abs(s), 0.5 * Math.abs(o)) || 0
	)
}
function H0(e, t) {
	var r = e._x1 - e._x0
	return r ? ((3 * (e._y1 - e._y0)) / r - t) / 2 : t
}
function Fc(e, t, r) {
	var n = e._x0,
		i = e._y0,
		a = e._x1,
		s = e._y1,
		o = (a - n) / 3
	e._context.bezierCurveTo(n + o, i + o * t, a - o, s - o * r, a, s)
}
function co(e) {
	this._context = e
}
co.prototype = {
	areaStart: function () {
		this._line = 0
	},
	areaEnd: function () {
		this._line = NaN
	},
	lineStart: function () {
		;((this._x0 = this._x1 = this._y0 = this._y1 = this._t0 = NaN),
			(this._point = 0))
	},
	lineEnd: function () {
		switch (this._point) {
			case 2:
				this._context.lineTo(this._x1, this._y1)
				break
			case 3:
				Fc(this, this._t0, H0(this, this._t0))
				break
		}
		;((this._line || (this._line !== 0 && this._point === 1)) &&
			this._context.closePath(),
			(this._line = 1 - this._line))
	},
	point: function (e, t) {
		var r = NaN
		if (((e = +e), (t = +t), !(e === this._x1 && t === this._y1))) {
			switch (this._point) {
				case 0:
					;((this._point = 1),
						this._line
							? this._context.lineTo(e, t)
							: this._context.moveTo(e, t))
					break
				case 1:
					this._point = 2
					break
				case 2:
					;((this._point = 3), Fc(this, H0(this, (r = z0(this, e, t))), r))
					break
				default:
					Fc(this, this._t0, (r = z0(this, e, t)))
					break
			}
			;((this._x0 = this._x1),
				(this._x1 = e),
				(this._y0 = this._y1),
				(this._y1 = t),
				(this._t0 = r))
		}
	}
}
function Kx(e) {
	this._context = new Qx(e)
}
;(Kx.prototype = Object.create(co.prototype)).point = function (e, t) {
	co.prototype.point.call(this, t, e)
}
function Qx(e) {
	this._context = e
}
Qx.prototype = {
	moveTo: function (e, t) {
		this._context.moveTo(t, e)
	},
	closePath: function () {
		this._context.closePath()
	},
	lineTo: function (e, t) {
		this._context.lineTo(t, e)
	},
	bezierCurveTo: function (e, t, r, n, i, a) {
		this._context.bezierCurveTo(t, e, n, r, a, i)
	}
}
function nz(e) {
	return new co(e)
}
function iz(e) {
	return new Kx(e)
}
function Zx(e) {
	this._context = e
}
Zx.prototype = {
	areaStart: function () {
		this._line = 0
	},
	areaEnd: function () {
		this._line = NaN
	},
	lineStart: function () {
		;((this._x = []), (this._y = []))
	},
	lineEnd: function () {
		var e = this._x,
			t = this._y,
			r = e.length
		if (r)
			if (
				(this._line
					? this._context.lineTo(e[0], t[0])
					: this._context.moveTo(e[0], t[0]),
				r === 2)
			)
				this._context.lineTo(e[1], t[1])
			else
				for (var n = G0(e), i = G0(t), a = 0, s = 1; s < r; ++a, ++s)
					this._context.bezierCurveTo(
						n[0][a],
						i[0][a],
						n[1][a],
						i[1][a],
						e[s],
						t[s]
					)
		;((this._line || (this._line !== 0 && r === 1)) &&
			this._context.closePath(),
			(this._line = 1 - this._line),
			(this._x = this._y = null))
	},
	point: function (e, t) {
		;(this._x.push(+e), this._y.push(+t))
	}
}
function G0(e) {
	var t,
		r = e.length - 1,
		n,
		i = new Array(r),
		a = new Array(r),
		s = new Array(r)
	for (i[0] = 0, a[0] = 2, s[0] = e[0] + 2 * e[1], t = 1; t < r - 1; ++t)
		((i[t] = 1), (a[t] = 4), (s[t] = 4 * e[t] + 2 * e[t + 1]))
	for (
		i[r - 1] = 2, a[r - 1] = 7, s[r - 1] = 8 * e[r - 1] + e[r], t = 1;
		t < r;
		++t
	)
		((n = i[t] / a[t - 1]), (a[t] -= n), (s[t] -= n * s[t - 1]))
	for (i[r - 1] = s[r - 1] / a[r - 1], t = r - 2; t >= 0; --t)
		i[t] = (s[t] - i[t + 1]) / a[t]
	for (a[r - 1] = (e[r] + i[r - 1]) / 2, t = 0; t < r - 1; ++t)
		a[t] = 2 * e[t + 1] - i[t + 1]
	return [i, a]
}
function az(e) {
	return new Zx(e)
}
function Ho(e, t) {
	;((this._context = e), (this._t = t))
}
Ho.prototype = {
	areaStart: function () {
		this._line = 0
	},
	areaEnd: function () {
		this._line = NaN
	},
	lineStart: function () {
		;((this._x = this._y = NaN), (this._point = 0))
	},
	lineEnd: function () {
		;(0 < this._t &&
			this._t < 1 &&
			this._point === 2 &&
			this._context.lineTo(this._x, this._y),
			(this._line || (this._line !== 0 && this._point === 1)) &&
				this._context.closePath(),
			this._line >= 0 &&
				((this._t = 1 - this._t), (this._line = 1 - this._line)))
	},
	point: function (e, t) {
		switch (((e = +e), (t = +t), this._point)) {
			case 0:
				;((this._point = 1),
					this._line ? this._context.lineTo(e, t) : this._context.moveTo(e, t))
				break
			case 1:
				this._point = 2
			default: {
				if (this._t <= 0)
					(this._context.lineTo(this._x, t), this._context.lineTo(e, t))
				else {
					var r = this._x * (1 - this._t) + e * this._t
					;(this._context.lineTo(r, this._y), this._context.lineTo(r, t))
				}
				break
			}
		}
		;((this._x = e), (this._y = t))
	}
}
function sz(e) {
	return new Ho(e, 0.5)
}
function oz(e) {
	return new Ho(e, 0)
}
function uz(e) {
	return new Ho(e, 1)
}
function Ka(e, t) {
	if ((s = e.length) > 1)
		for (var r = 1, n, i, a = e[t[0]], s, o = a.length; r < s; ++r)
			for (i = a, a = e[t[r]], n = 0; n < o; ++n)
				a[n][1] += a[n][0] = isNaN(i[n][1]) ? i[n][0] : i[n][1]
}
function W0(e) {
	for (var t = e.length, r = new Array(t); --t >= 0; ) r[t] = t
	return r
}
function K$(e, t) {
	return e[t]
}
function Q$(e) {
	const t = []
	return ((t.key = e), t)
}
function lz() {
	var e = Le([]),
		t = W0,
		r = Ka,
		n = K$
	function i(a) {
		var s = Array.from(e.apply(this, arguments), Q$),
			o,
			u = s.length,
			l = -1,
			f
		for (const c of a)
			for (o = 0, ++l; o < u; ++o)
				(s[o][l] = [0, +n(c, s[o].key, l, a)]).data = c
		for (o = 0, f = rg(t(s)); o < u; ++o) s[f[o]].index = o
		return (r(s, f), s)
	}
	return (
		(i.keys = function (a) {
			return arguments.length
				? ((e = typeof a == 'function' ? a : Le(Array.from(a))), i)
				: e
		}),
		(i.value = function (a) {
			return arguments.length
				? ((n = typeof a == 'function' ? a : Le(+a)), i)
				: n
		}),
		(i.order = function (a) {
			return arguments.length
				? ((t =
						a == null ? W0 : typeof a == 'function' ? a : Le(Array.from(a))),
					i)
				: t
		}),
		(i.offset = function (a) {
			return arguments.length ? ((r = a ?? Ka), i) : r
		}),
		i
	)
}
function cz(e, t) {
	if ((n = e.length) > 0) {
		for (var r, n, i = 0, a = e[0].length, s; i < a; ++i) {
			for (s = r = 0; r < n; ++r) s += e[r][i][1] || 0
			if (s) for (r = 0; r < n; ++r) e[r][i][1] /= s
		}
		Ka(e, t)
	}
}
function fz(e, t) {
	if ((i = e.length) > 0) {
		for (var r = 0, n = e[t[0]], i, a = n.length; r < a; ++r) {
			for (var s = 0, o = 0; s < i; ++s) o += e[s][r][1] || 0
			n[r][1] += n[r][0] = -o / 2
		}
		Ka(e, t)
	}
}
function dz(e, t) {
	if (!(!((s = e.length) > 0) || !((a = (i = e[t[0]]).length) > 0))) {
		for (var r = 0, n = 1, i, a, s; n < a; ++n) {
			for (var o = 0, u = 0, l = 0; o < s; ++o) {
				for (
					var f = e[t[o]],
						c = f[n][1] || 0,
						d = f[n - 1][1] || 0,
						h = (c - d) / 2,
						g = 0;
					g < o;
					++g
				) {
					var p = e[t[g]],
						m = p[n][1] || 0,
						v = p[n - 1][1] || 0
					h += m - v
				}
				;((u += c), (l += h * c))
			}
			;((i[n - 1][1] += i[n - 1][0] = r), u && (r -= l / u))
		}
		;((i[n - 1][1] += i[n - 1][0] = r), Ka(e, t))
	}
}
var Dc, K0
function Z$() {
	if (K0) return Dc
	K0 = 1
	var e = Uo()
	function t() {
		;((this.__data__ = new e()), (this.size = 0))
	}
	return ((Dc = t), Dc)
}
var Nc, Q0
function Y$() {
	if (Q0) return Nc
	Q0 = 1
	function e(t) {
		var r = this.__data__,
			n = r.delete(t)
		return ((this.size = r.size), n)
	}
	return ((Nc = e), Nc)
}
var Lc, Z0
function J$() {
	if (Z0) return Lc
	Z0 = 1
	function e(t) {
		return this.__data__.get(t)
	}
	return ((Lc = e), Lc)
}
var jc, Y0
function X$() {
	if (Y0) return jc
	Y0 = 1
	function e(t) {
		return this.__data__.has(t)
	}
	return ((jc = e), jc)
}
var Uc, J0
function eF() {
	if (J0) return Uc
	J0 = 1
	var e = Uo(),
		t = Yp(),
		r = Jp(),
		n = 200
	function i(a, s) {
		var o = this.__data__
		if (o instanceof e) {
			var u = o.__data__
			if (!t || u.length < n - 1)
				return (u.push([a, s]), (this.size = ++o.size), this)
			o = this.__data__ = new r(u)
		}
		return (o.set(a, s), (this.size = o.size), this)
	}
	return ((Uc = i), Uc)
}
var Bc, X0
function Yx() {
	if (X0) return Bc
	X0 = 1
	var e = Uo(),
		t = Z$(),
		r = Y$(),
		n = J$(),
		i = X$(),
		a = eF()
	function s(o) {
		var u = (this.__data__ = new e(o))
		this.size = u.size
	}
	return (
		(s.prototype.clear = t),
		(s.prototype.delete = r),
		(s.prototype.get = n),
		(s.prototype.has = i),
		(s.prototype.set = a),
		(Bc = s),
		Bc
	)
}
var Vc, e_
function tF() {
	if (e_) return Vc
	e_ = 1
	var e = '__lodash_hash_undefined__'
	function t(r) {
		return (this.__data__.set(r, e), this)
	}
	return ((Vc = t), Vc)
}
var zc, t_
function rF() {
	if (t_) return zc
	t_ = 1
	function e(t) {
		return this.__data__.has(t)
	}
	return ((zc = e), zc)
}
var Hc, r_
function Jx() {
	if (r_) return Hc
	r_ = 1
	var e = Jp(),
		t = tF(),
		r = rF()
	function n(i) {
		var a = -1,
			s = i == null ? 0 : i.length
		for (this.__data__ = new e(); ++a < s; ) this.add(i[a])
	}
	return (
		(n.prototype.add = n.prototype.push = t),
		(n.prototype.has = r),
		(Hc = n),
		Hc
	)
}
var Gc, n_
function Xx() {
	if (n_) return Gc
	n_ = 1
	function e(t, r) {
		for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
			if (r(t[n], n, t)) return !0
		return !1
	}
	return ((Gc = e), Gc)
}
var Wc, i_
function eR() {
	if (i_) return Wc
	i_ = 1
	function e(t, r) {
		return t.has(r)
	}
	return ((Wc = e), Wc)
}
var Kc, a_
function tR() {
	if (a_) return Kc
	a_ = 1
	var e = Jx(),
		t = Xx(),
		r = eR(),
		n = 1,
		i = 2
	function a(s, o, u, l, f, c) {
		var d = u & n,
			h = s.length,
			g = o.length
		if (h != g && !(d && g > h)) return !1
		var p = c.get(s),
			m = c.get(o)
		if (p && m) return p == o && m == s
		var v = -1,
			_ = !0,
			w = u & i ? new e() : void 0
		for (c.set(s, o), c.set(o, s); ++v < h; ) {
			var x = s[v],
				E = o[v]
			if (l) var R = d ? l(E, x, v, o, s, c) : l(x, E, v, s, o, c)
			if (R !== void 0) {
				if (R) continue
				_ = !1
				break
			}
			if (w) {
				if (
					!t(o, function (S, y) {
						if (!r(w, y) && (x === S || f(x, S, u, l, c))) return w.push(y)
					})
				) {
					_ = !1
					break
				}
			} else if (!(x === E || f(x, E, u, l, c))) {
				_ = !1
				break
			}
		}
		return (c.delete(s), c.delete(o), _)
	}
	return ((Kc = a), Kc)
}
var Qc, s_
function nF() {
	if (s_) return Qc
	s_ = 1
	var e = kr(),
		t = e.Uint8Array
	return ((Qc = t), Qc)
}
var Zc, o_
function iF() {
	if (o_) return Zc
	o_ = 1
	function e(t) {
		var r = -1,
			n = Array(t.size)
		return (
			t.forEach(function (i, a) {
				n[++r] = [a, i]
			}),
			n
		)
	}
	return ((Zc = e), Zc)
}
var Yc, u_
function ng() {
	if (u_) return Yc
	u_ = 1
	function e(t) {
		var r = -1,
			n = Array(t.size)
		return (
			t.forEach(function (i) {
				n[++r] = i
			}),
			n
		)
	}
	return ((Yc = e), Yc)
}
var Jc, l_
function aF() {
	if (l_) return Jc
	l_ = 1
	var e = us(),
		t = nF(),
		r = Zp(),
		n = tR(),
		i = iF(),
		a = ng(),
		s = 1,
		o = 2,
		u = '[object Boolean]',
		l = '[object Date]',
		f = '[object Error]',
		c = '[object Map]',
		d = '[object Number]',
		h = '[object RegExp]',
		g = '[object Set]',
		p = '[object String]',
		m = '[object Symbol]',
		v = '[object ArrayBuffer]',
		_ = '[object DataView]',
		w = e ? e.prototype : void 0,
		x = w ? w.valueOf : void 0
	function E(R, S, y, b, O, A, T) {
		switch (y) {
			case _:
				if (R.byteLength != S.byteLength || R.byteOffset != S.byteOffset)
					return !1
				;((R = R.buffer), (S = S.buffer))
			case v:
				return !(R.byteLength != S.byteLength || !A(new t(R), new t(S)))
			case u:
			case l:
			case d:
				return r(+R, +S)
			case f:
				return R.name == S.name && R.message == S.message
			case h:
			case p:
				return R == S + ''
			case c:
				var P = i
			case g:
				var k = b & s
				if ((P || (P = a), R.size != S.size && !k)) return !1
				var j = T.get(R)
				if (j) return j == S
				;((b |= o), T.set(R, S))
				var M = n(P(R), P(S), b, O, A, T)
				return (T.delete(R), M)
			case m:
				if (x) return x.call(R) == x.call(S)
		}
		return !1
	}
	return ((Jc = E), Jc)
}
var Xc, c_
function rR() {
	if (c_) return Xc
	c_ = 1
	function e(t, r) {
		for (var n = -1, i = r.length, a = t.length; ++n < i; ) t[a + n] = r[n]
		return t
	}
	return ((Xc = e), Xc)
}
var ef, f_
function sF() {
	if (f_) return ef
	f_ = 1
	var e = rR(),
		t = Et()
	function r(n, i, a) {
		var s = i(n)
		return t(n) ? s : e(s, a(n))
	}
	return ((ef = r), ef)
}
var tf, d_
function oF() {
	if (d_) return tf
	d_ = 1
	function e(t, r) {
		for (var n = -1, i = t == null ? 0 : t.length, a = 0, s = []; ++n < i; ) {
			var o = t[n]
			r(o, n, t) && (s[a++] = o)
		}
		return s
	}
	return ((tf = e), tf)
}
var rf, h_
function uF() {
	if (h_) return rf
	h_ = 1
	function e() {
		return []
	}
	return ((rf = e), rf)
}
var nf, p_
function lF() {
	if (p_) return nf
	p_ = 1
	var e = oF(),
		t = uF(),
		r = Object.prototype,
		n = r.propertyIsEnumerable,
		i = Object.getOwnPropertySymbols,
		a = i
			? function (s) {
					return s == null
						? []
						: ((s = Object(s)),
							e(i(s), function (o) {
								return n.call(s, o)
							}))
				}
			: t
	return ((nf = a), nf)
}
var af, g_
function cF() {
	if (g_) return af
	g_ = 1
	function e(t, r) {
		for (var n = -1, i = Array(t); ++n < t; ) i[n] = r(n)
		return i
	}
	return ((af = e), af)
}
var sf, m_
function fF() {
	if (m_) return sf
	m_ = 1
	var e = on(),
		t = un(),
		r = '[object Arguments]'
	function n(i) {
		return t(i) && e(i) == r
	}
	return ((sf = n), sf)
}
var of, v_
function ig() {
	if (v_) return of
	v_ = 1
	var e = fF(),
		t = un(),
		r = Object.prototype,
		n = r.hasOwnProperty,
		i = r.propertyIsEnumerable,
		a = e(
			(function () {
				return arguments
			})()
		)
			? e
			: function (s) {
					return t(s) && n.call(s, 'callee') && !i.call(s, 'callee')
				}
	return ((of = a), of)
}
var Da = { exports: {} },
	uf,
	y_
function dF() {
	if (y_) return uf
	y_ = 1
	function e() {
		return !1
	}
	return ((uf = e), uf)
}
Da.exports
var __
function nR() {
	return (
		__ ||
			((__ = 1),
			(function (e, t) {
				var r = kr(),
					n = dF(),
					i = t && !t.nodeType && t,
					a = i && !0 && e && !e.nodeType && e,
					s = a && a.exports === i,
					o = s ? r.Buffer : void 0,
					u = o ? o.isBuffer : void 0,
					l = u || n
				e.exports = l
			})(Da, Da.exports)),
		Da.exports
	)
}
var lf, b_
function ag() {
	if (b_) return lf
	b_ = 1
	var e = 9007199254740991,
		t = /^(?:0|[1-9]\d*)$/
	function r(n, i) {
		var a = typeof n
		return (
			(i = i ?? e),
			!!i &&
				(a == 'number' || (a != 'symbol' && t.test(n))) &&
				n > -1 &&
				n % 1 == 0 &&
				n < i
		)
	}
	return ((lf = r), lf)
}
var cf, w_
function sg() {
	if (w_) return cf
	w_ = 1
	var e = 9007199254740991
	function t(r) {
		return typeof r == 'number' && r > -1 && r % 1 == 0 && r <= e
	}
	return ((cf = t), cf)
}
var ff, S_
function hF() {
	if (S_) return ff
	S_ = 1
	var e = on(),
		t = sg(),
		r = un(),
		n = '[object Arguments]',
		i = '[object Array]',
		a = '[object Boolean]',
		s = '[object Date]',
		o = '[object Error]',
		u = '[object Function]',
		l = '[object Map]',
		f = '[object Number]',
		c = '[object Object]',
		d = '[object RegExp]',
		h = '[object Set]',
		g = '[object String]',
		p = '[object WeakMap]',
		m = '[object ArrayBuffer]',
		v = '[object DataView]',
		_ = '[object Float32Array]',
		w = '[object Float64Array]',
		x = '[object Int8Array]',
		E = '[object Int16Array]',
		R = '[object Int32Array]',
		S = '[object Uint8Array]',
		y = '[object Uint8ClampedArray]',
		b = '[object Uint16Array]',
		O = '[object Uint32Array]',
		A = {}
	;((A[_] = A[w] = A[x] = A[E] = A[R] = A[S] = A[y] = A[b] = A[O] = !0),
		(A[n] =
			A[i] =
			A[m] =
			A[a] =
			A[v] =
			A[s] =
			A[o] =
			A[u] =
			A[l] =
			A[f] =
			A[c] =
			A[d] =
			A[h] =
			A[g] =
			A[p] =
				!1))
	function T(P) {
		return r(P) && t(P.length) && !!A[e(P)]
	}
	return ((ff = T), ff)
}
var df, x_
function iR() {
	if (x_) return df
	x_ = 1
	function e(t) {
		return function (r) {
			return t(r)
		}
	}
	return ((df = e), df)
}
var Na = { exports: {} }
Na.exports
var R_
function pF() {
	return (
		R_ ||
			((R_ = 1),
			(function (e, t) {
				var r = Tx(),
					n = t && !t.nodeType && t,
					i = n && !0 && e && !e.nodeType && e,
					a = i && i.exports === n,
					s = a && r.process,
					o = (function () {
						try {
							var u = i && i.require && i.require('util').types
							return u || (s && s.binding && s.binding('util'))
						} catch {}
					})()
				e.exports = o
			})(Na, Na.exports)),
		Na.exports
	)
}
var hf, O_
function aR() {
	if (O_) return hf
	O_ = 1
	var e = hF(),
		t = iR(),
		r = pF(),
		n = r && r.isTypedArray,
		i = n ? t(n) : e
	return ((hf = i), hf)
}
var pf, C_
function gF() {
	if (C_) return pf
	C_ = 1
	var e = cF(),
		t = ig(),
		r = Et(),
		n = nR(),
		i = ag(),
		a = aR(),
		s = Object.prototype,
		o = s.hasOwnProperty
	function u(l, f) {
		var c = r(l),
			d = !c && t(l),
			h = !c && !d && n(l),
			g = !c && !d && !h && a(l),
			p = c || d || h || g,
			m = p ? e(l.length, String) : [],
			v = m.length
		for (var _ in l)
			(f || o.call(l, _)) &&
				!(
					p &&
					(_ == 'length' ||
						(h && (_ == 'offset' || _ == 'parent')) ||
						(g && (_ == 'buffer' || _ == 'byteLength' || _ == 'byteOffset')) ||
						i(_, v))
				) &&
				m.push(_)
		return m
	}
	return ((pf = u), pf)
}
var gf, T_
function mF() {
	if (T_) return gf
	T_ = 1
	var e = Object.prototype
	function t(r) {
		var n = r && r.constructor,
			i = (typeof n == 'function' && n.prototype) || e
		return r === i
	}
	return ((gf = t), gf)
}
var mf, E_
function sR() {
	if (E_) return mf
	E_ = 1
	function e(t, r) {
		return function (n) {
			return t(r(n))
		}
	}
	return ((mf = e), mf)
}
var vf, A_
function vF() {
	if (A_) return vf
	A_ = 1
	var e = sR(),
		t = e(Object.keys, Object)
	return ((vf = t), vf)
}
var yf, M_
function yF() {
	if (M_) return yf
	M_ = 1
	var e = mF(),
		t = vF(),
		r = Object.prototype,
		n = r.hasOwnProperty
	function i(a) {
		if (!e(a)) return t(a)
		var s = []
		for (var o in Object(a)) n.call(a, o) && o != 'constructor' && s.push(o)
		return s
	}
	return ((yf = i), yf)
}
var _f, P_
function ls() {
	if (P_) return _f
	P_ = 1
	var e = Qp(),
		t = sg()
	function r(n) {
		return n != null && t(n.length) && !e(n)
	}
	return ((_f = r), _f)
}
var bf, I_
function Go() {
	if (I_) return bf
	I_ = 1
	var e = gF(),
		t = yF(),
		r = ls()
	function n(i) {
		return r(i) ? e(i) : t(i)
	}
	return ((bf = n), bf)
}
var wf, k_
function _F() {
	if (k_) return wf
	k_ = 1
	var e = sF(),
		t = lF(),
		r = Go()
	function n(i) {
		return e(i, r, t)
	}
	return ((wf = n), wf)
}
var Sf, q_
function bF() {
	if (q_) return Sf
	q_ = 1
	var e = _F(),
		t = 1,
		r = Object.prototype,
		n = r.hasOwnProperty
	function i(a, s, o, u, l, f) {
		var c = o & t,
			d = e(a),
			h = d.length,
			g = e(s),
			p = g.length
		if (h != p && !c) return !1
		for (var m = h; m--; ) {
			var v = d[m]
			if (!(c ? v in s : n.call(s, v))) return !1
		}
		var _ = f.get(a),
			w = f.get(s)
		if (_ && w) return _ == s && w == a
		var x = !0
		;(f.set(a, s), f.set(s, a))
		for (var E = c; ++m < h; ) {
			v = d[m]
			var R = a[v],
				S = s[v]
			if (u) var y = c ? u(S, R, v, s, a, f) : u(R, S, v, a, s, f)
			if (!(y === void 0 ? R === S || l(R, S, o, u, f) : y)) {
				x = !1
				break
			}
			E || (E = v == 'constructor')
		}
		if (x && !E) {
			var b = a.constructor,
				O = s.constructor
			b != O &&
				'constructor' in a &&
				'constructor' in s &&
				!(
					typeof b == 'function' &&
					b instanceof b &&
					typeof O == 'function' &&
					O instanceof O
				) &&
				(x = !1)
		}
		return (f.delete(a), f.delete(s), x)
	}
	return ((Sf = i), Sf)
}
var xf, $_
function wF() {
	if ($_) return xf
	$_ = 1
	var e = Mi(),
		t = kr(),
		r = e(t, 'DataView')
	return ((xf = r), xf)
}
var Rf, F_
function SF() {
	if (F_) return Rf
	F_ = 1
	var e = Mi(),
		t = kr(),
		r = e(t, 'Promise')
	return ((Rf = r), Rf)
}
var Of, D_
function oR() {
	if (D_) return Of
	D_ = 1
	var e = Mi(),
		t = kr(),
		r = e(t, 'Set')
	return ((Of = r), Of)
}
var Cf, N_
function xF() {
	if (N_) return Cf
	N_ = 1
	var e = Mi(),
		t = kr(),
		r = e(t, 'WeakMap')
	return ((Cf = r), Cf)
}
var Tf, L_
function RF() {
	if (L_) return Tf
	L_ = 1
	var e = wF(),
		t = Yp(),
		r = SF(),
		n = oR(),
		i = xF(),
		a = on(),
		s = Ex(),
		o = '[object Map]',
		u = '[object Object]',
		l = '[object Promise]',
		f = '[object Set]',
		c = '[object WeakMap]',
		d = '[object DataView]',
		h = s(e),
		g = s(t),
		p = s(r),
		m = s(n),
		v = s(i),
		_ = a
	return (
		((e && _(new e(new ArrayBuffer(1))) != d) ||
			(t && _(new t()) != o) ||
			(r && _(r.resolve()) != l) ||
			(n && _(new n()) != f) ||
			(i && _(new i()) != c)) &&
			(_ = function (w) {
				var x = a(w),
					E = x == u ? w.constructor : void 0,
					R = E ? s(E) : ''
				if (R)
					switch (R) {
						case h:
							return d
						case g:
							return o
						case p:
							return l
						case m:
							return f
						case v:
							return c
					}
				return x
			}),
		(Tf = _),
		Tf
	)
}
var Ef, j_
function OF() {
	if (j_) return Ef
	j_ = 1
	var e = Yx(),
		t = tR(),
		r = aF(),
		n = bF(),
		i = RF(),
		a = Et(),
		s = nR(),
		o = aR(),
		u = 1,
		l = '[object Arguments]',
		f = '[object Array]',
		c = '[object Object]',
		d = Object.prototype,
		h = d.hasOwnProperty
	function g(p, m, v, _, w, x) {
		var E = a(p),
			R = a(m),
			S = E ? f : i(p),
			y = R ? f : i(m)
		;((S = S == l ? c : S), (y = y == l ? c : y))
		var b = S == c,
			O = y == c,
			A = S == y
		if (A && s(p)) {
			if (!s(m)) return !1
			;((E = !0), (b = !1))
		}
		if (A && !b)
			return (
				x || (x = new e()),
				E || o(p) ? t(p, m, v, _, w, x) : r(p, m, S, v, _, w, x)
			)
		if (!(v & u)) {
			var T = b && h.call(p, '__wrapped__'),
				P = O && h.call(m, '__wrapped__')
			if (T || P) {
				var k = T ? p.value() : p,
					j = P ? m.value() : m
				return (x || (x = new e()), w(k, j, v, _, x))
			}
		}
		return A ? (x || (x = new e()), n(p, m, v, _, w, x)) : !1
	}
	return ((Ef = g), Ef)
}
var Af, U_
function og() {
	if (U_) return Af
	U_ = 1
	var e = OF(),
		t = un()
	function r(n, i, a, s, o) {
		return n === i
			? !0
			: n == null || i == null || (!t(n) && !t(i))
				? n !== n && i !== i
				: e(n, i, a, s, r, o)
	}
	return ((Af = r), Af)
}
var Mf, B_
function CF() {
	if (B_) return Mf
	B_ = 1
	var e = Yx(),
		t = og(),
		r = 1,
		n = 2
	function i(a, s, o, u) {
		var l = o.length,
			f = l,
			c = !u
		if (a == null) return !f
		for (a = Object(a); l--; ) {
			var d = o[l]
			if (c && d[2] ? d[1] !== a[d[0]] : !(d[0] in a)) return !1
		}
		for (; ++l < f; ) {
			d = o[l]
			var h = d[0],
				g = a[h],
				p = d[1]
			if (c && d[2]) {
				if (g === void 0 && !(h in a)) return !1
			} else {
				var m = new e()
				if (u) var v = u(g, p, h, a, s, m)
				if (!(v === void 0 ? t(p, g, r | n, u, m) : v)) return !1
			}
		}
		return !0
	}
	return ((Mf = i), Mf)
}
var Pf, V_
function uR() {
	if (V_) return Pf
	V_ = 1
	var e = Un()
	function t(r) {
		return r === r && !e(r)
	}
	return ((Pf = t), Pf)
}
var If, z_
function TF() {
	if (z_) return If
	z_ = 1
	var e = uR(),
		t = Go()
	function r(n) {
		for (var i = t(n), a = i.length; a--; ) {
			var s = i[a],
				o = n[s]
			i[a] = [s, o, e(o)]
		}
		return i
	}
	return ((If = r), If)
}
var kf, H_
function lR() {
	if (H_) return kf
	H_ = 1
	function e(t, r) {
		return function (n) {
			return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n))
		}
	}
	return ((kf = e), kf)
}
var qf, G_
function EF() {
	if (G_) return qf
	G_ = 1
	var e = CF(),
		t = TF(),
		r = lR()
	function n(i) {
		var a = t(i)
		return a.length == 1 && a[0][2]
			? r(a[0][0], a[0][1])
			: function (s) {
					return s === i || e(s, i, a)
				}
	}
	return ((qf = n), qf)
}
var $f, W_
function AF() {
	if (W_) return $f
	W_ = 1
	function e(t, r) {
		return t != null && r in Object(t)
	}
	return (($f = e), $f)
}
var Ff, K_
function MF() {
	if (K_) return Ff
	K_ = 1
	var e = Px(),
		t = ig(),
		r = Et(),
		n = ag(),
		i = sg(),
		a = Vo()
	function s(o, u, l) {
		u = e(u, o)
		for (var f = -1, c = u.length, d = !1; ++f < c; ) {
			var h = a(u[f])
			if (!(d = o != null && l(o, h))) break
			o = o[h]
		}
		return d || ++f != c
			? d
			: ((c = o == null ? 0 : o.length),
				!!c && i(c) && n(h, c) && (r(o) || t(o)))
	}
	return ((Ff = s), Ff)
}
var Df, Q_
function PF() {
	if (Q_) return Df
	Q_ = 1
	var e = AF(),
		t = MF()
	function r(n, i) {
		return n != null && t(n, i, e)
	}
	return ((Df = r), Df)
}
var Nf, Z_
function IF() {
	if (Z_) return Nf
	Z_ = 1
	var e = og(),
		t = Ix(),
		r = PF(),
		n = Kp(),
		i = uR(),
		a = lR(),
		s = Vo(),
		o = 1,
		u = 2
	function l(f, c) {
		return n(f) && i(c)
			? a(s(f), c)
			: function (d) {
					var h = t(d, f)
					return h === void 0 && h === c ? r(d, f) : e(c, h, o | u)
				}
	}
	return ((Nf = l), Nf)
}
var Lf, Y_
function _a() {
	if (Y_) return Lf
	Y_ = 1
	function e(t) {
		return t
	}
	return ((Lf = e), Lf)
}
var jf, J_
function kF() {
	if (J_) return jf
	J_ = 1
	function e(t) {
		return function (r) {
			return r == null ? void 0 : r[t]
		}
	}
	return ((jf = e), jf)
}
var Uf, X_
function qF() {
	if (X_) return Uf
	X_ = 1
	var e = eg()
	function t(r) {
		return function (n) {
			return e(n, r)
		}
	}
	return ((Uf = t), Uf)
}
var Bf, eb
function $F() {
	if (eb) return Bf
	eb = 1
	var e = kF(),
		t = qF(),
		r = Kp(),
		n = Vo()
	function i(a) {
		return r(a) ? e(n(a)) : t(a)
	}
	return ((Bf = i), Bf)
}
var Vf, tb
function qr() {
	if (tb) return Vf
	tb = 1
	var e = EF(),
		t = IF(),
		r = _a(),
		n = Et(),
		i = $F()
	function a(s) {
		return typeof s == 'function'
			? s
			: s == null
				? r
				: typeof s == 'object'
					? n(s)
						? t(s[0], s[1])
						: e(s)
					: i(s)
	}
	return ((Vf = a), Vf)
}
var zf, rb
function cR() {
	if (rb) return zf
	rb = 1
	function e(t, r, n, i) {
		for (var a = t.length, s = n + (i ? 1 : -1); i ? s-- : ++s < a; )
			if (r(t[s], s, t)) return s
		return -1
	}
	return ((zf = e), zf)
}
var Hf, nb
function FF() {
	if (nb) return Hf
	nb = 1
	function e(t) {
		return t !== t
	}
	return ((Hf = e), Hf)
}
var Gf, ib
function DF() {
	if (ib) return Gf
	ib = 1
	function e(t, r, n) {
		for (var i = n - 1, a = t.length; ++i < a; ) if (t[i] === r) return i
		return -1
	}
	return ((Gf = e), Gf)
}
var Wf, ab
function NF() {
	if (ab) return Wf
	ab = 1
	var e = cR(),
		t = FF(),
		r = DF()
	function n(i, a, s) {
		return a === a ? r(i, a, s) : e(i, t, s)
	}
	return ((Wf = n), Wf)
}
var Kf, sb
function LF() {
	if (sb) return Kf
	sb = 1
	var e = NF()
	function t(r, n) {
		var i = r == null ? 0 : r.length
		return !!i && e(r, n, 0) > -1
	}
	return ((Kf = t), Kf)
}
var Qf, ob
function jF() {
	if (ob) return Qf
	ob = 1
	function e(t, r, n) {
		for (var i = -1, a = t == null ? 0 : t.length; ++i < a; )
			if (n(r, t[i])) return !0
		return !1
	}
	return ((Qf = e), Qf)
}
var Zf, ub
function UF() {
	if (ub) return Zf
	ub = 1
	function e() {}
	return ((Zf = e), Zf)
}
var Yf, lb
function BF() {
	if (lb) return Yf
	lb = 1
	var e = oR(),
		t = UF(),
		r = ng(),
		n = 1 / 0,
		i =
			e && 1 / r(new e([, -0]))[1] == n
				? function (a) {
						return new e(a)
					}
				: t
	return ((Yf = i), Yf)
}
var Jf, cb
function VF() {
	if (cb) return Jf
	cb = 1
	var e = Jx(),
		t = LF(),
		r = jF(),
		n = eR(),
		i = BF(),
		a = ng(),
		s = 200
	function o(u, l, f) {
		var c = -1,
			d = t,
			h = u.length,
			g = !0,
			p = [],
			m = p
		if (f) ((g = !1), (d = r))
		else if (h >= s) {
			var v = l ? null : i(u)
			if (v) return a(v)
			;((g = !1), (d = n), (m = new e()))
		} else m = l ? [] : p
		e: for (; ++c < h; ) {
			var _ = u[c],
				w = l ? l(_) : _
			if (((_ = f || _ !== 0 ? _ : 0), g && w === w)) {
				for (var x = m.length; x--; ) if (m[x] === w) continue e
				;(l && m.push(w), p.push(_))
			} else d(m, w, f) || (m !== p && m.push(w), p.push(_))
		}
		return p
	}
	return ((Jf = o), Jf)
}
var Xf, fb
function zF() {
	if (fb) return Xf
	fb = 1
	var e = qr(),
		t = VF()
	function r(n, i) {
		return n && n.length ? t(n, e(i, 2)) : []
	}
	return ((Xf = r), Xf)
}
var HF = zF()
const hz = qe(HF)
var ed, db
function GF() {
	if (db) return ed
	db = 1
	var e = us(),
		t = ig(),
		r = Et(),
		n = e ? e.isConcatSpreadable : void 0
	function i(a) {
		return r(a) || t(a) || !!(n && a && a[n])
	}
	return ((ed = i), ed)
}
var td, hb
function fR() {
	if (hb) return td
	hb = 1
	var e = rR(),
		t = GF()
	function r(n, i, a, s, o) {
		var u = -1,
			l = n.length
		for (a || (a = t), o || (o = []); ++u < l; ) {
			var f = n[u]
			i > 0 && a(f)
				? i > 1
					? r(f, i - 1, a, s, o)
					: e(o, f)
				: s || (o[o.length] = f)
		}
		return o
	}
	return ((td = r), td)
}
var rd, pb
function WF() {
	if (pb) return rd
	pb = 1
	function e(t) {
		return function (r, n, i) {
			for (var a = -1, s = Object(r), o = i(r), u = o.length; u--; ) {
				var l = o[t ? u : ++a]
				if (n(s[l], l, s) === !1) break
			}
			return r
		}
	}
	return ((rd = e), rd)
}
var nd, gb
function KF() {
	if (gb) return nd
	gb = 1
	var e = WF(),
		t = e()
	return ((nd = t), nd)
}
var id, mb
function dR() {
	if (mb) return id
	mb = 1
	var e = KF(),
		t = Go()
	function r(n, i) {
		return n && e(n, i, t)
	}
	return ((id = r), id)
}
var ad, vb
function QF() {
	if (vb) return ad
	vb = 1
	var e = ls()
	function t(r, n) {
		return function (i, a) {
			if (i == null) return i
			if (!e(i)) return r(i, a)
			for (
				var s = i.length, o = n ? s : -1, u = Object(i);
				(n ? o-- : ++o < s) && a(u[o], o, u) !== !1;
			);
			return i
		}
	}
	return ((ad = t), ad)
}
var sd, yb
function ug() {
	if (yb) return sd
	yb = 1
	var e = dR(),
		t = QF(),
		r = t(e)
	return ((sd = r), sd)
}
var od, _b
function hR() {
	if (_b) return od
	_b = 1
	var e = ug(),
		t = ls()
	function r(n, i) {
		var a = -1,
			s = t(n) ? Array(n.length) : []
		return (
			e(n, function (o, u, l) {
				s[++a] = i(o, u, l)
			}),
			s
		)
	}
	return ((od = r), od)
}
var ud, bb
function ZF() {
	if (bb) return ud
	bb = 1
	function e(t, r) {
		var n = t.length
		for (t.sort(r); n--; ) t[n] = t[n].value
		return t
	}
	return ((ud = e), ud)
}
var ld, wb
function YF() {
	if (wb) return ld
	wb = 1
	var e = ya()
	function t(r, n) {
		if (r !== n) {
			var i = r !== void 0,
				a = r === null,
				s = r === r,
				o = e(r),
				u = n !== void 0,
				l = n === null,
				f = n === n,
				c = e(n)
			if (
				(!l && !c && !o && r > n) ||
				(o && u && f && !l && !c) ||
				(a && u && f) ||
				(!i && f) ||
				!s
			)
				return 1
			if (
				(!a && !o && !c && r < n) ||
				(c && i && s && !a && !o) ||
				(l && i && s) ||
				(!u && s) ||
				!f
			)
				return -1
		}
		return 0
	}
	return ((ld = t), ld)
}
var cd, Sb
function JF() {
	if (Sb) return cd
	Sb = 1
	var e = YF()
	function t(r, n, i) {
		for (
			var a = -1, s = r.criteria, o = n.criteria, u = s.length, l = i.length;
			++a < u;
		) {
			var f = e(s[a], o[a])
			if (f) {
				if (a >= l) return f
				var c = i[a]
				return f * (c == 'desc' ? -1 : 1)
			}
		}
		return r.index - n.index
	}
	return ((cd = t), cd)
}
var fd, xb
function XF() {
	if (xb) return fd
	xb = 1
	var e = Xp(),
		t = eg(),
		r = qr(),
		n = hR(),
		i = ZF(),
		a = iR(),
		s = JF(),
		o = _a(),
		u = Et()
	function l(f, c, d) {
		c.length
			? (c = e(c, function (p) {
					return u(p)
						? function (m) {
								return t(m, p.length === 1 ? p[0] : p)
							}
						: p
				}))
			: (c = [o])
		var h = -1
		c = e(c, a(r))
		var g = n(f, function (p, m, v) {
			var _ = e(c, function (w) {
				return w(p)
			})
			return { criteria: _, index: ++h, value: p }
		})
		return i(g, function (p, m) {
			return s(p, m, d)
		})
	}
	return ((fd = l), fd)
}
var dd, Rb
function eD() {
	if (Rb) return dd
	Rb = 1
	function e(t, r, n) {
		switch (n.length) {
			case 0:
				return t.call(r)
			case 1:
				return t.call(r, n[0])
			case 2:
				return t.call(r, n[0], n[1])
			case 3:
				return t.call(r, n[0], n[1], n[2])
		}
		return t.apply(r, n)
	}
	return ((dd = e), dd)
}
var hd, Ob
function tD() {
	if (Ob) return hd
	Ob = 1
	var e = eD(),
		t = Math.max
	function r(n, i, a) {
		return (
			(i = t(i === void 0 ? n.length - 1 : i, 0)),
			function () {
				for (
					var s = arguments, o = -1, u = t(s.length - i, 0), l = Array(u);
					++o < u;
				)
					l[o] = s[i + o]
				o = -1
				for (var f = Array(i + 1); ++o < i; ) f[o] = s[o]
				return ((f[i] = a(l)), e(n, this, f))
			}
		)
	}
	return ((hd = r), hd)
}
var pd, Cb
function rD() {
	if (Cb) return pd
	Cb = 1
	function e(t) {
		return function () {
			return t
		}
	}
	return ((pd = e), pd)
}
var gd, Tb
function pR() {
	if (Tb) return gd
	Tb = 1
	var e = Mi(),
		t = (function () {
			try {
				var r = e(Object, 'defineProperty')
				return (r({}, '', {}), r)
			} catch {}
		})()
	return ((gd = t), gd)
}
var md, Eb
function nD() {
	if (Eb) return md
	Eb = 1
	var e = rD(),
		t = pR(),
		r = _a(),
		n = t
			? function (i, a) {
					return t(i, 'toString', {
						configurable: !0,
						enumerable: !1,
						value: e(a),
						writable: !0
					})
				}
			: r
	return ((md = n), md)
}
var vd, Ab
function iD() {
	if (Ab) return vd
	Ab = 1
	var e = 800,
		t = 16,
		r = Date.now
	function n(i) {
		var a = 0,
			s = 0
		return function () {
			var o = r(),
				u = t - (o - s)
			if (((s = o), u > 0)) {
				if (++a >= e) return arguments[0]
			} else a = 0
			return i.apply(void 0, arguments)
		}
	}
	return ((vd = n), vd)
}
var yd, Mb
function aD() {
	if (Mb) return yd
	Mb = 1
	var e = nD(),
		t = iD(),
		r = t(e)
	return ((yd = r), yd)
}
var _d, Pb
function sD() {
	if (Pb) return _d
	Pb = 1
	var e = _a(),
		t = tD(),
		r = aD()
	function n(i, a) {
		return r(t(i, a, e), i + '')
	}
	return ((_d = n), _d)
}
var bd, Ib
function Wo() {
	if (Ib) return bd
	Ib = 1
	var e = Zp(),
		t = ls(),
		r = ag(),
		n = Un()
	function i(a, s, o) {
		if (!n(o)) return !1
		var u = typeof s
		return (u == 'number' ? t(o) && r(s, o.length) : u == 'string' && s in o)
			? e(o[s], a)
			: !1
	}
	return ((bd = i), bd)
}
var wd, kb
function oD() {
	if (kb) return wd
	kb = 1
	var e = fR(),
		t = XF(),
		r = sD(),
		n = Wo(),
		i = r(function (a, s) {
			if (a == null) return []
			var o = s.length
			return (
				o > 1 && n(a, s[0], s[1])
					? (s = [])
					: o > 2 && n(s[0], s[1], s[2]) && (s = [s[0]]),
				t(a, e(s, 1), [])
			)
		})
	return ((wd = i), wd)
}
var uD = oD()
const pz = qe(uD)
var Sd, qb
function lD() {
	if (qb) return Sd
	qb = 1
	var e = kr(),
		t = function () {
			return e.Date.now()
		}
	return ((Sd = t), Sd)
}
var xd, $b
function cD() {
	if ($b) return xd
	$b = 1
	var e = /\s/
	function t(r) {
		for (var n = r.length; n-- && e.test(r.charAt(n)); );
		return n
	}
	return ((xd = t), xd)
}
var Rd, Fb
function fD() {
	if (Fb) return Rd
	Fb = 1
	var e = cD(),
		t = /^\s+/
	function r(n) {
		return n && n.slice(0, e(n) + 1).replace(t, '')
	}
	return ((Rd = r), Rd)
}
var Od, Db
function gR() {
	if (Db) return Od
	Db = 1
	var e = fD(),
		t = Un(),
		r = ya(),
		n = NaN,
		i = /^[-+]0x[0-9a-f]+$/i,
		a = /^0b[01]+$/i,
		s = /^0o[0-7]+$/i,
		o = parseInt
	function u(l) {
		if (typeof l == 'number') return l
		if (r(l)) return n
		if (t(l)) {
			var f = typeof l.valueOf == 'function' ? l.valueOf() : l
			l = t(f) ? f + '' : f
		}
		if (typeof l != 'string') return l === 0 ? l : +l
		l = e(l)
		var c = a.test(l)
		return c || s.test(l) ? o(l.slice(2), c ? 2 : 8) : i.test(l) ? n : +l
	}
	return ((Od = u), Od)
}
var Cd, Nb
function dD() {
	if (Nb) return Cd
	Nb = 1
	var e = Un(),
		t = lD(),
		r = gR(),
		n = 'Expected a function',
		i = Math.max,
		a = Math.min
	function s(o, u, l) {
		var f,
			c,
			d,
			h,
			g,
			p,
			m = 0,
			v = !1,
			_ = !1,
			w = !0
		if (typeof o != 'function') throw new TypeError(n)
		;((u = r(u) || 0),
			e(l) &&
				((v = !!l.leading),
				(_ = 'maxWait' in l),
				(d = _ ? i(r(l.maxWait) || 0, u) : d),
				(w = 'trailing' in l ? !!l.trailing : w)))
		function x(P) {
			var k = f,
				j = c
			return ((f = c = void 0), (m = P), (h = o.apply(j, k)), h)
		}
		function E(P) {
			return ((m = P), (g = setTimeout(y, u)), v ? x(P) : h)
		}
		function R(P) {
			var k = P - p,
				j = P - m,
				M = u - k
			return _ ? a(M, d - j) : M
		}
		function S(P) {
			var k = P - p,
				j = P - m
			return p === void 0 || k >= u || k < 0 || (_ && j >= d)
		}
		function y() {
			var P = t()
			if (S(P)) return b(P)
			g = setTimeout(y, R(P))
		}
		function b(P) {
			return ((g = void 0), w && f ? x(P) : ((f = c = void 0), h))
		}
		function O() {
			;(g !== void 0 && clearTimeout(g), (m = 0), (f = p = c = g = void 0))
		}
		function A() {
			return g === void 0 ? h : b(t())
		}
		function T() {
			var P = t(),
				k = S(P)
			if (((f = arguments), (c = this), (p = P), k)) {
				if (g === void 0) return E(p)
				if (_) return (clearTimeout(g), (g = setTimeout(y, u)), x(p))
			}
			return (g === void 0 && (g = setTimeout(y, u)), h)
		}
		return ((T.cancel = O), (T.flush = A), T)
	}
	return ((Cd = s), Cd)
}
var Td, Lb
function hD() {
	if (Lb) return Td
	Lb = 1
	var e = dD(),
		t = Un(),
		r = 'Expected a function'
	function n(i, a, s) {
		var o = !0,
			u = !0
		if (typeof i != 'function') throw new TypeError(r)
		return (
			t(s) &&
				((o = 'leading' in s ? !!s.leading : o),
				(u = 'trailing' in s ? !!s.trailing : u)),
			e(i, a, { leading: o, maxWait: a, trailing: u })
		)
	}
	return ((Td = n), Td)
}
var pD = hD()
const gz = qe(pD)
function In(e, t) {
	return e == null || t == null
		? NaN
		: e < t
			? -1
			: e > t
				? 1
				: e >= t
					? 0
					: NaN
}
function gD(e, t) {
	return e == null || t == null
		? NaN
		: t < e
			? -1
			: t > e
				? 1
				: t >= e
					? 0
					: NaN
}
function lg(e) {
	let t, r, n
	e.length !== 2
		? ((t = In), (r = (o, u) => In(e(o), u)), (n = (o, u) => e(o) - u))
		: ((t = e === In || e === gD ? e : mD), (r = e), (n = e))
	function i(o, u, l = 0, f = o.length) {
		if (l < f) {
			if (t(u, u) !== 0) return f
			do {
				const c = (l + f) >>> 1
				r(o[c], u) < 0 ? (l = c + 1) : (f = c)
			} while (l < f)
		}
		return l
	}
	function a(o, u, l = 0, f = o.length) {
		if (l < f) {
			if (t(u, u) !== 0) return f
			do {
				const c = (l + f) >>> 1
				r(o[c], u) <= 0 ? (l = c + 1) : (f = c)
			} while (l < f)
		}
		return l
	}
	function s(o, u, l = 0, f = o.length) {
		const c = i(o, u, l, f - 1)
		return c > l && n(o[c - 1], u) > -n(o[c], u) ? c - 1 : c
	}
	return { left: i, center: s, right: a }
}
function mD() {
	return 0
}
function mR(e) {
	return e === null ? NaN : +e
}
function* vD(e, t) {
	for (let r of e) r != null && (r = +r) >= r && (yield r)
}
const yD = lg(In),
	cs = yD.right
lg(mR).center
class jb extends Map {
	constructor(t, r = wD) {
		if (
			(super(),
			Object.defineProperties(this, {
				_intern: { value: new Map() },
				_key: { value: r }
			}),
			t != null)
		)
			for (const [n, i] of t) this.set(n, i)
	}
	get(t) {
		return super.get(Ub(this, t))
	}
	has(t) {
		return super.has(Ub(this, t))
	}
	set(t, r) {
		return super.set(_D(this, t), r)
	}
	delete(t) {
		return super.delete(bD(this, t))
	}
}
function Ub({ _intern: e, _key: t }, r) {
	const n = t(r)
	return e.has(n) ? e.get(n) : r
}
function _D({ _intern: e, _key: t }, r) {
	const n = t(r)
	return e.has(n) ? e.get(n) : (e.set(n, r), r)
}
function bD({ _intern: e, _key: t }, r) {
	const n = t(r)
	return (e.has(n) && ((r = e.get(n)), e.delete(n)), r)
}
function wD(e) {
	return e !== null && typeof e == 'object' ? e.valueOf() : e
}
function SD(e = In) {
	if (e === In) return vR
	if (typeof e != 'function') throw new TypeError('compare is not a function')
	return (t, r) => {
		const n = e(t, r)
		return n || n === 0 ? n : (e(r, r) === 0) - (e(t, t) === 0)
	}
}
function vR(e, t) {
	return (
		(e == null || !(e >= e)) - (t == null || !(t >= t)) ||
		(e < t ? -1 : e > t ? 1 : 0)
	)
}
const xD = Math.sqrt(50),
	RD = Math.sqrt(10),
	OD = Math.sqrt(2)
function fo(e, t, r) {
	const n = (t - e) / Math.max(0, r),
		i = Math.floor(Math.log10(n)),
		a = n / Math.pow(10, i),
		s = a >= xD ? 10 : a >= RD ? 5 : a >= OD ? 2 : 1
	let o, u, l
	return (
		i < 0
			? ((l = Math.pow(10, -i) / s),
				(o = Math.round(e * l)),
				(u = Math.round(t * l)),
				o / l < e && ++o,
				u / l > t && --u,
				(l = -l))
			: ((l = Math.pow(10, i) * s),
				(o = Math.round(e / l)),
				(u = Math.round(t / l)),
				o * l < e && ++o,
				u * l > t && --u),
		u < o && 0.5 <= r && r < 2 ? fo(e, t, r * 2) : [o, u, l]
	)
}
function ip(e, t, r) {
	if (((t = +t), (e = +e), (r = +r), !(r > 0))) return []
	if (e === t) return [e]
	const n = t < e,
		[i, a, s] = n ? fo(t, e, r) : fo(e, t, r)
	if (!(a >= i)) return []
	const o = a - i + 1,
		u = new Array(o)
	if (n)
		if (s < 0) for (let l = 0; l < o; ++l) u[l] = (a - l) / -s
		else for (let l = 0; l < o; ++l) u[l] = (a - l) * s
	else if (s < 0) for (let l = 0; l < o; ++l) u[l] = (i + l) / -s
	else for (let l = 0; l < o; ++l) u[l] = (i + l) * s
	return u
}
function ap(e, t, r) {
	return ((t = +t), (e = +e), (r = +r), fo(e, t, r)[2])
}
function sp(e, t, r) {
	;((t = +t), (e = +e), (r = +r))
	const n = t < e,
		i = n ? ap(t, e, r) : ap(e, t, r)
	return (n ? -1 : 1) * (i < 0 ? 1 / -i : i)
}
function Bb(e, t) {
	let r
	for (const n of e) n != null && (r < n || (r === void 0 && n >= n)) && (r = n)
	return r
}
function Vb(e, t) {
	let r
	for (const n of e) n != null && (r > n || (r === void 0 && n >= n)) && (r = n)
	return r
}
function yR(e, t, r = 0, n = 1 / 0, i) {
	if (
		((t = Math.floor(t)),
		(r = Math.floor(Math.max(0, r))),
		(n = Math.floor(Math.min(e.length - 1, n))),
		!(r <= t && t <= n))
	)
		return e
	for (i = i === void 0 ? vR : SD(i); n > r; ) {
		if (n - r > 600) {
			const u = n - r + 1,
				l = t - r + 1,
				f = Math.log(u),
				c = 0.5 * Math.exp((2 * f) / 3),
				d = 0.5 * Math.sqrt((f * c * (u - c)) / u) * (l - u / 2 < 0 ? -1 : 1),
				h = Math.max(r, Math.floor(t - (l * c) / u + d)),
				g = Math.min(n, Math.floor(t + ((u - l) * c) / u + d))
			yR(e, t, h, g, i)
		}
		const a = e[t]
		let s = r,
			o = n
		for (Ea(e, r, t), i(e[n], a) > 0 && Ea(e, r, n); s < o; ) {
			for (Ea(e, s, o), ++s, --o; i(e[s], a) < 0; ) ++s
			for (; i(e[o], a) > 0; ) --o
		}
		;(i(e[r], a) === 0 ? Ea(e, r, o) : (++o, Ea(e, o, n)),
			o <= t && (r = o + 1),
			t <= o && (n = o - 1))
	}
	return e
}
function Ea(e, t, r) {
	const n = e[t]
	;((e[t] = e[r]), (e[r] = n))
}
function CD(e, t, r) {
	if (((e = Float64Array.from(vD(e))), !(!(n = e.length) || isNaN((t = +t))))) {
		if (t <= 0 || n < 2) return Vb(e)
		if (t >= 1) return Bb(e)
		var n,
			i = (n - 1) * t,
			a = Math.floor(i),
			s = Bb(yR(e, a).subarray(0, a + 1)),
			o = Vb(e.subarray(a + 1))
		return s + (o - s) * (i - a)
	}
}
function TD(e, t, r = mR) {
	if (!(!(n = e.length) || isNaN((t = +t)))) {
		if (t <= 0 || n < 2) return +r(e[0], 0, e)
		if (t >= 1) return +r(e[n - 1], n - 1, e)
		var n,
			i = (n - 1) * t,
			a = Math.floor(i),
			s = +r(e[a], a, e),
			o = +r(e[a + 1], a + 1, e)
		return s + (o - s) * (i - a)
	}
}
function ED(e, t, r) {
	;((e = +e),
		(t = +t),
		(r = (i = arguments.length) < 2 ? ((t = e), (e = 0), 1) : i < 3 ? 1 : +r))
	for (
		var n = -1, i = Math.max(0, Math.ceil((t - e) / r)) | 0, a = new Array(i);
		++n < i;
	)
		a[n] = e + n * r
	return a
}
function Xt(e, t) {
	switch (arguments.length) {
		case 0:
			break
		case 1:
			this.range(e)
			break
		default:
			this.range(t).domain(e)
			break
	}
	return this
}
function ln(e, t) {
	switch (arguments.length) {
		case 0:
			break
		case 1: {
			typeof e == 'function' ? this.interpolator(e) : this.range(e)
			break
		}
		default: {
			;(this.domain(e),
				typeof t == 'function' ? this.interpolator(t) : this.range(t))
			break
		}
	}
	return this
}
const op = Symbol('implicit')
function cg() {
	var e = new jb(),
		t = [],
		r = [],
		n = op
	function i(a) {
		let s = e.get(a)
		if (s === void 0) {
			if (n !== op) return n
			e.set(a, (s = t.push(a) - 1))
		}
		return r[s % r.length]
	}
	return (
		(i.domain = function (a) {
			if (!arguments.length) return t.slice()
			;((t = []), (e = new jb()))
			for (const s of a) e.has(s) || e.set(s, t.push(s) - 1)
			return i
		}),
		(i.range = function (a) {
			return arguments.length ? ((r = Array.from(a)), i) : r.slice()
		}),
		(i.unknown = function (a) {
			return arguments.length ? ((n = a), i) : n
		}),
		(i.copy = function () {
			return cg(t, r).unknown(n)
		}),
		Xt.apply(i, arguments),
		i
	)
}
function fg() {
	var e = cg().unknown(void 0),
		t = e.domain,
		r = e.range,
		n = 0,
		i = 1,
		a,
		s,
		o = !1,
		u = 0,
		l = 0,
		f = 0.5
	delete e.unknown
	function c() {
		var d = t().length,
			h = i < n,
			g = h ? i : n,
			p = h ? n : i
		;((a = (p - g) / Math.max(1, d - u + l * 2)),
			o && (a = Math.floor(a)),
			(g += (p - g - a * (d - u)) * f),
			(s = a * (1 - u)),
			o && ((g = Math.round(g)), (s = Math.round(s))))
		var m = ED(d).map(function (v) {
			return g + a * v
		})
		return r(h ? m.reverse() : m)
	}
	return (
		(e.domain = function (d) {
			return arguments.length ? (t(d), c()) : t()
		}),
		(e.range = function (d) {
			return arguments.length ? (([n, i] = d), (n = +n), (i = +i), c()) : [n, i]
		}),
		(e.rangeRound = function (d) {
			return (([n, i] = d), (n = +n), (i = +i), (o = !0), c())
		}),
		(e.bandwidth = function () {
			return s
		}),
		(e.step = function () {
			return a
		}),
		(e.round = function (d) {
			return arguments.length ? ((o = !!d), c()) : o
		}),
		(e.padding = function (d) {
			return arguments.length ? ((u = Math.min(1, (l = +d))), c()) : u
		}),
		(e.paddingInner = function (d) {
			return arguments.length ? ((u = Math.min(1, d)), c()) : u
		}),
		(e.paddingOuter = function (d) {
			return arguments.length ? ((l = +d), c()) : l
		}),
		(e.align = function (d) {
			return arguments.length ? ((f = Math.max(0, Math.min(1, d))), c()) : f
		}),
		(e.copy = function () {
			return fg(t(), [n, i]).round(o).paddingInner(u).paddingOuter(l).align(f)
		}),
		Xt.apply(c(), arguments)
	)
}
function _R(e) {
	var t = e.copy
	return (
		(e.padding = e.paddingOuter),
		delete e.paddingInner,
		delete e.paddingOuter,
		(e.copy = function () {
			return _R(t())
		}),
		e
	)
}
function AD() {
	return _R(fg.apply(null, arguments).paddingInner(1))
}
function dg(e, t, r) {
	;((e.prototype = t.prototype = r), (r.constructor = e))
}
function bR(e, t) {
	var r = Object.create(e.prototype)
	for (var n in t) r[n] = t[n]
	return r
}
function fs() {}
var Qa = 0.7,
	ho = 1 / Qa,
	Ui = '\\s*([+-]?\\d+)\\s*',
	Za = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*',
	Tr = '\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*',
	MD = /^#([0-9a-f]{3,8})$/,
	PD = new RegExp(`^rgb\\(${Ui},${Ui},${Ui}\\)$`),
	ID = new RegExp(`^rgb\\(${Tr},${Tr},${Tr}\\)$`),
	kD = new RegExp(`^rgba\\(${Ui},${Ui},${Ui},${Za}\\)$`),
	qD = new RegExp(`^rgba\\(${Tr},${Tr},${Tr},${Za}\\)$`),
	$D = new RegExp(`^hsl\\(${Za},${Tr},${Tr}\\)$`),
	FD = new RegExp(`^hsla\\(${Za},${Tr},${Tr},${Za}\\)$`),
	zb = {
		aliceblue: 15792383,
		antiquewhite: 16444375,
		aqua: 65535,
		aquamarine: 8388564,
		azure: 15794175,
		beige: 16119260,
		bisque: 16770244,
		black: 0,
		blanchedalmond: 16772045,
		blue: 255,
		blueviolet: 9055202,
		brown: 10824234,
		burlywood: 14596231,
		cadetblue: 6266528,
		chartreuse: 8388352,
		chocolate: 13789470,
		coral: 16744272,
		cornflowerblue: 6591981,
		cornsilk: 16775388,
		crimson: 14423100,
		cyan: 65535,
		darkblue: 139,
		darkcyan: 35723,
		darkgoldenrod: 12092939,
		darkgray: 11119017,
		darkgreen: 25600,
		darkgrey: 11119017,
		darkkhaki: 12433259,
		darkmagenta: 9109643,
		darkolivegreen: 5597999,
		darkorange: 16747520,
		darkorchid: 10040012,
		darkred: 9109504,
		darksalmon: 15308410,
		darkseagreen: 9419919,
		darkslateblue: 4734347,
		darkslategray: 3100495,
		darkslategrey: 3100495,
		darkturquoise: 52945,
		darkviolet: 9699539,
		deeppink: 16716947,
		deepskyblue: 49151,
		dimgray: 6908265,
		dimgrey: 6908265,
		dodgerblue: 2003199,
		firebrick: 11674146,
		floralwhite: 16775920,
		forestgreen: 2263842,
		fuchsia: 16711935,
		gainsboro: 14474460,
		ghostwhite: 16316671,
		gold: 16766720,
		goldenrod: 14329120,
		gray: 8421504,
		green: 32768,
		greenyellow: 11403055,
		grey: 8421504,
		honeydew: 15794160,
		hotpink: 16738740,
		indianred: 13458524,
		indigo: 4915330,
		ivory: 16777200,
		khaki: 15787660,
		lavender: 15132410,
		lavenderblush: 16773365,
		lawngreen: 8190976,
		lemonchiffon: 16775885,
		lightblue: 11393254,
		lightcoral: 15761536,
		lightcyan: 14745599,
		lightgoldenrodyellow: 16448210,
		lightgray: 13882323,
		lightgreen: 9498256,
		lightgrey: 13882323,
		lightpink: 16758465,
		lightsalmon: 16752762,
		lightseagreen: 2142890,
		lightskyblue: 8900346,
		lightslategray: 7833753,
		lightslategrey: 7833753,
		lightsteelblue: 11584734,
		lightyellow: 16777184,
		lime: 65280,
		limegreen: 3329330,
		linen: 16445670,
		magenta: 16711935,
		maroon: 8388608,
		mediumaquamarine: 6737322,
		mediumblue: 205,
		mediumorchid: 12211667,
		mediumpurple: 9662683,
		mediumseagreen: 3978097,
		mediumslateblue: 8087790,
		mediumspringgreen: 64154,
		mediumturquoise: 4772300,
		mediumvioletred: 13047173,
		midnightblue: 1644912,
		mintcream: 16121850,
		mistyrose: 16770273,
		moccasin: 16770229,
		navajowhite: 16768685,
		navy: 128,
		oldlace: 16643558,
		olive: 8421376,
		olivedrab: 7048739,
		orange: 16753920,
		orangered: 16729344,
		orchid: 14315734,
		palegoldenrod: 15657130,
		palegreen: 10025880,
		paleturquoise: 11529966,
		palevioletred: 14381203,
		papayawhip: 16773077,
		peachpuff: 16767673,
		peru: 13468991,
		pink: 16761035,
		plum: 14524637,
		powderblue: 11591910,
		purple: 8388736,
		rebeccapurple: 6697881,
		red: 16711680,
		rosybrown: 12357519,
		royalblue: 4286945,
		saddlebrown: 9127187,
		salmon: 16416882,
		sandybrown: 16032864,
		seagreen: 3050327,
		seashell: 16774638,
		sienna: 10506797,
		silver: 12632256,
		skyblue: 8900331,
		slateblue: 6970061,
		slategray: 7372944,
		slategrey: 7372944,
		snow: 16775930,
		springgreen: 65407,
		steelblue: 4620980,
		tan: 13808780,
		teal: 32896,
		thistle: 14204888,
		tomato: 16737095,
		turquoise: 4251856,
		violet: 15631086,
		wheat: 16113331,
		white: 16777215,
		whitesmoke: 16119285,
		yellow: 16776960,
		yellowgreen: 10145074
	}
dg(fs, Ya, {
	copy(e) {
		return Object.assign(new this.constructor(), this, e)
	},
	displayable() {
		return this.rgb().displayable()
	},
	hex: Hb,
	formatHex: Hb,
	formatHex8: DD,
	formatHsl: ND,
	formatRgb: Gb,
	toString: Gb
})
function Hb() {
	return this.rgb().formatHex()
}
function DD() {
	return this.rgb().formatHex8()
}
function ND() {
	return wR(this).formatHsl()
}
function Gb() {
	return this.rgb().formatRgb()
}
function Ya(e) {
	var t, r
	return (
		(e = (e + '').trim().toLowerCase()),
		(t = MD.exec(e))
			? ((r = t[1].length),
				(t = parseInt(t[1], 16)),
				r === 6
					? Wb(t)
					: r === 3
						? new Tt(
								((t >> 8) & 15) | ((t >> 4) & 240),
								((t >> 4) & 15) | (t & 240),
								((t & 15) << 4) | (t & 15),
								1
							)
						: r === 8
							? Ms(
									(t >> 24) & 255,
									(t >> 16) & 255,
									(t >> 8) & 255,
									(t & 255) / 255
								)
							: r === 4
								? Ms(
										((t >> 12) & 15) | ((t >> 8) & 240),
										((t >> 8) & 15) | ((t >> 4) & 240),
										((t >> 4) & 15) | (t & 240),
										(((t & 15) << 4) | (t & 15)) / 255
									)
								: null)
			: (t = PD.exec(e))
				? new Tt(t[1], t[2], t[3], 1)
				: (t = ID.exec(e))
					? new Tt(
							(t[1] * 255) / 100,
							(t[2] * 255) / 100,
							(t[3] * 255) / 100,
							1
						)
					: (t = kD.exec(e))
						? Ms(t[1], t[2], t[3], t[4])
						: (t = qD.exec(e))
							? Ms(
									(t[1] * 255) / 100,
									(t[2] * 255) / 100,
									(t[3] * 255) / 100,
									t[4]
								)
							: (t = $D.exec(e))
								? Zb(t[1], t[2] / 100, t[3] / 100, 1)
								: (t = FD.exec(e))
									? Zb(t[1], t[2] / 100, t[3] / 100, t[4])
									: zb.hasOwnProperty(e)
										? Wb(zb[e])
										: e === 'transparent'
											? new Tt(NaN, NaN, NaN, 0)
											: null
	)
}
function Wb(e) {
	return new Tt((e >> 16) & 255, (e >> 8) & 255, e & 255, 1)
}
function Ms(e, t, r, n) {
	return (n <= 0 && (e = t = r = NaN), new Tt(e, t, r, n))
}
function LD(e) {
	return (
		e instanceof fs || (e = Ya(e)),
		e ? ((e = e.rgb()), new Tt(e.r, e.g, e.b, e.opacity)) : new Tt()
	)
}
function up(e, t, r, n) {
	return arguments.length === 1 ? LD(e) : new Tt(e, t, r, n ?? 1)
}
function Tt(e, t, r, n) {
	;((this.r = +e), (this.g = +t), (this.b = +r), (this.opacity = +n))
}
dg(
	Tt,
	up,
	bR(fs, {
		brighter(e) {
			return (
				(e = e == null ? ho : Math.pow(ho, e)),
				new Tt(this.r * e, this.g * e, this.b * e, this.opacity)
			)
		},
		darker(e) {
			return (
				(e = e == null ? Qa : Math.pow(Qa, e)),
				new Tt(this.r * e, this.g * e, this.b * e, this.opacity)
			)
		},
		rgb() {
			return this
		},
		clamp() {
			return new Tt(mi(this.r), mi(this.g), mi(this.b), po(this.opacity))
		},
		displayable() {
			return (
				-0.5 <= this.r &&
				this.r < 255.5 &&
				-0.5 <= this.g &&
				this.g < 255.5 &&
				-0.5 <= this.b &&
				this.b < 255.5 &&
				0 <= this.opacity &&
				this.opacity <= 1
			)
		},
		hex: Kb,
		formatHex: Kb,
		formatHex8: jD,
		formatRgb: Qb,
		toString: Qb
	})
)
function Kb() {
	return `#${ii(this.r)}${ii(this.g)}${ii(this.b)}`
}
function jD() {
	return `#${ii(this.r)}${ii(this.g)}${ii(this.b)}${ii((isNaN(this.opacity) ? 1 : this.opacity) * 255)}`
}
function Qb() {
	const e = po(this.opacity)
	return `${e === 1 ? 'rgb(' : 'rgba('}${mi(this.r)}, ${mi(this.g)}, ${mi(this.b)}${e === 1 ? ')' : `, ${e})`}`
}
function po(e) {
	return isNaN(e) ? 1 : Math.max(0, Math.min(1, e))
}
function mi(e) {
	return Math.max(0, Math.min(255, Math.round(e) || 0))
}
function ii(e) {
	return ((e = mi(e)), (e < 16 ? '0' : '') + e.toString(16))
}
function Zb(e, t, r, n) {
	return (
		n <= 0
			? (e = t = r = NaN)
			: r <= 0 || r >= 1
				? (e = t = NaN)
				: t <= 0 && (e = NaN),
		new cr(e, t, r, n)
	)
}
function wR(e) {
	if (e instanceof cr) return new cr(e.h, e.s, e.l, e.opacity)
	if ((e instanceof fs || (e = Ya(e)), !e)) return new cr()
	if (e instanceof cr) return e
	e = e.rgb()
	var t = e.r / 255,
		r = e.g / 255,
		n = e.b / 255,
		i = Math.min(t, r, n),
		a = Math.max(t, r, n),
		s = NaN,
		o = a - i,
		u = (a + i) / 2
	return (
		o
			? (t === a
					? (s = (r - n) / o + (r < n) * 6)
					: r === a
						? (s = (n - t) / o + 2)
						: (s = (t - r) / o + 4),
				(o /= u < 0.5 ? a + i : 2 - a - i),
				(s *= 60))
			: (o = u > 0 && u < 1 ? 0 : s),
		new cr(s, o, u, e.opacity)
	)
}
function UD(e, t, r, n) {
	return arguments.length === 1 ? wR(e) : new cr(e, t, r, n ?? 1)
}
function cr(e, t, r, n) {
	;((this.h = +e), (this.s = +t), (this.l = +r), (this.opacity = +n))
}
dg(
	cr,
	UD,
	bR(fs, {
		brighter(e) {
			return (
				(e = e == null ? ho : Math.pow(ho, e)),
				new cr(this.h, this.s, this.l * e, this.opacity)
			)
		},
		darker(e) {
			return (
				(e = e == null ? Qa : Math.pow(Qa, e)),
				new cr(this.h, this.s, this.l * e, this.opacity)
			)
		},
		rgb() {
			var e = (this.h % 360) + (this.h < 0) * 360,
				t = isNaN(e) || isNaN(this.s) ? 0 : this.s,
				r = this.l,
				n = r + (r < 0.5 ? r : 1 - r) * t,
				i = 2 * r - n
			return new Tt(
				Ed(e >= 240 ? e - 240 : e + 120, i, n),
				Ed(e, i, n),
				Ed(e < 120 ? e + 240 : e - 120, i, n),
				this.opacity
			)
		},
		clamp() {
			return new cr(Yb(this.h), Ps(this.s), Ps(this.l), po(this.opacity))
		},
		displayable() {
			return (
				((0 <= this.s && this.s <= 1) || isNaN(this.s)) &&
				0 <= this.l &&
				this.l <= 1 &&
				0 <= this.opacity &&
				this.opacity <= 1
			)
		},
		formatHsl() {
			const e = po(this.opacity)
			return `${e === 1 ? 'hsl(' : 'hsla('}${Yb(this.h)}, ${Ps(this.s) * 100}%, ${Ps(this.l) * 100}%${e === 1 ? ')' : `, ${e})`}`
		}
	})
)
function Yb(e) {
	return ((e = (e || 0) % 360), e < 0 ? e + 360 : e)
}
function Ps(e) {
	return Math.max(0, Math.min(1, e || 0))
}
function Ed(e, t, r) {
	return (
		(e < 60
			? t + ((r - t) * e) / 60
			: e < 180
				? r
				: e < 240
					? t + ((r - t) * (240 - e)) / 60
					: t) * 255
	)
}
const hg = (e) => () => e
function BD(e, t) {
	return function (r) {
		return e + r * t
	}
}
function VD(e, t, r) {
	return (
		(e = Math.pow(e, r)),
		(t = Math.pow(t, r) - e),
		(r = 1 / r),
		function (n) {
			return Math.pow(e + n * t, r)
		}
	)
}
function zD(e) {
	return (e = +e) == 1
		? SR
		: function (t, r) {
				return r - t ? VD(t, r, e) : hg(isNaN(t) ? r : t)
			}
}
function SR(e, t) {
	var r = t - e
	return r ? BD(e, r) : hg(isNaN(e) ? t : e)
}
const Jb = (function e(t) {
	var r = zD(t)
	function n(i, a) {
		var s = r((i = up(i)).r, (a = up(a)).r),
			o = r(i.g, a.g),
			u = r(i.b, a.b),
			l = SR(i.opacity, a.opacity)
		return function (f) {
			return (
				(i.r = s(f)),
				(i.g = o(f)),
				(i.b = u(f)),
				(i.opacity = l(f)),
				i + ''
			)
		}
	}
	return ((n.gamma = e), n)
})(1)
function HD(e, t) {
	t || (t = [])
	var r = e ? Math.min(t.length, e.length) : 0,
		n = t.slice(),
		i
	return function (a) {
		for (i = 0; i < r; ++i) n[i] = e[i] * (1 - a) + t[i] * a
		return n
	}
}
function GD(e) {
	return ArrayBuffer.isView(e) && !(e instanceof DataView)
}
function WD(e, t) {
	var r = t ? t.length : 0,
		n = e ? Math.min(r, e.length) : 0,
		i = new Array(n),
		a = new Array(r),
		s
	for (s = 0; s < n; ++s) i[s] = ba(e[s], t[s])
	for (; s < r; ++s) a[s] = t[s]
	return function (o) {
		for (s = 0; s < n; ++s) a[s] = i[s](o)
		return a
	}
}
function KD(e, t) {
	var r = new Date()
	return (
		(e = +e),
		(t = +t),
		function (n) {
			return (r.setTime(e * (1 - n) + t * n), r)
		}
	)
}
function go(e, t) {
	return (
		(e = +e),
		(t = +t),
		function (r) {
			return e * (1 - r) + t * r
		}
	)
}
function QD(e, t) {
	var r = {},
		n = {},
		i
	;((e === null || typeof e != 'object') && (e = {}),
		(t === null || typeof t != 'object') && (t = {}))
	for (i in t) i in e ? (r[i] = ba(e[i], t[i])) : (n[i] = t[i])
	return function (a) {
		for (i in r) n[i] = r[i](a)
		return n
	}
}
var lp = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
	Ad = new RegExp(lp.source, 'g')
function ZD(e) {
	return function () {
		return e
	}
}
function YD(e) {
	return function (t) {
		return e(t) + ''
	}
}
function JD(e, t) {
	var r = (lp.lastIndex = Ad.lastIndex = 0),
		n,
		i,
		a,
		s = -1,
		o = [],
		u = []
	for (e = e + '', t = t + ''; (n = lp.exec(e)) && (i = Ad.exec(t)); )
		((a = i.index) > r &&
			((a = t.slice(r, a)), o[s] ? (o[s] += a) : (o[++s] = a)),
			(n = n[0]) === (i = i[0])
				? o[s]
					? (o[s] += i)
					: (o[++s] = i)
				: ((o[++s] = null), u.push({ i: s, x: go(n, i) })),
			(r = Ad.lastIndex))
	return (
		r < t.length && ((a = t.slice(r)), o[s] ? (o[s] += a) : (o[++s] = a)),
		o.length < 2
			? u[0]
				? YD(u[0].x)
				: ZD(t)
			: ((t = u.length),
				function (l) {
					for (var f = 0, c; f < t; ++f) o[(c = u[f]).i] = c.x(l)
					return o.join('')
				})
	)
}
function ba(e, t) {
	var r = typeof t,
		n
	return t == null || r === 'boolean'
		? hg(t)
		: (r === 'number'
				? go
				: r === 'string'
					? (n = Ya(t))
						? ((t = n), Jb)
						: JD
					: t instanceof Ya
						? Jb
						: t instanceof Date
							? KD
							: GD(t)
								? HD
								: Array.isArray(t)
									? WD
									: (typeof t.valueOf != 'function' &&
												typeof t.toString != 'function') ||
										  isNaN(t)
										? QD
										: go)(e, t)
}
function pg(e, t) {
	return (
		(e = +e),
		(t = +t),
		function (r) {
			return Math.round(e * (1 - r) + t * r)
		}
	)
}
function XD(e, t) {
	t === void 0 && ((t = e), (e = ba))
	for (
		var r = 0, n = t.length - 1, i = t[0], a = new Array(n < 0 ? 0 : n);
		r < n;
	)
		a[r] = e(i, (i = t[++r]))
	return function (s) {
		var o = Math.max(0, Math.min(n - 1, Math.floor((s *= n))))
		return a[o](s - o)
	}
}
function eN(e) {
	return function () {
		return e
	}
}
function mo(e) {
	return +e
}
var Xb = [0, 1]
function bt(e) {
	return e
}
function cp(e, t) {
	return (t -= e = +e)
		? function (r) {
				return (r - e) / t
			}
		: eN(isNaN(t) ? NaN : 0.5)
}
function tN(e, t) {
	var r
	return (
		e > t && ((r = e), (e = t), (t = r)),
		function (n) {
			return Math.max(e, Math.min(t, n))
		}
	)
}
function rN(e, t, r) {
	var n = e[0],
		i = e[1],
		a = t[0],
		s = t[1]
	return (
		i < n ? ((n = cp(i, n)), (a = r(s, a))) : ((n = cp(n, i)), (a = r(a, s))),
		function (o) {
			return a(n(o))
		}
	)
}
function nN(e, t, r) {
	var n = Math.min(e.length, t.length) - 1,
		i = new Array(n),
		a = new Array(n),
		s = -1
	for (
		e[n] < e[0] && ((e = e.slice().reverse()), (t = t.slice().reverse()));
		++s < n;
	)
		((i[s] = cp(e[s], e[s + 1])), (a[s] = r(t[s], t[s + 1])))
	return function (o) {
		var u = cs(e, o, 1, n) - 1
		return a[u](i[u](o))
	}
}
function ds(e, t) {
	return t
		.domain(e.domain())
		.range(e.range())
		.interpolate(e.interpolate())
		.clamp(e.clamp())
		.unknown(e.unknown())
}
function Ko() {
	var e = Xb,
		t = Xb,
		r = ba,
		n,
		i,
		a,
		s = bt,
		o,
		u,
		l
	function f() {
		var d = Math.min(e.length, t.length)
		return (
			s !== bt && (s = tN(e[0], e[d - 1])),
			(o = d > 2 ? nN : rN),
			(u = l = null),
			c
		)
	}
	function c(d) {
		return d == null || isNaN((d = +d))
			? a
			: (u || (u = o(e.map(n), t, r)))(n(s(d)))
	}
	return (
		(c.invert = function (d) {
			return s(i((l || (l = o(t, e.map(n), go)))(d)))
		}),
		(c.domain = function (d) {
			return arguments.length ? ((e = Array.from(d, mo)), f()) : e.slice()
		}),
		(c.range = function (d) {
			return arguments.length ? ((t = Array.from(d)), f()) : t.slice()
		}),
		(c.rangeRound = function (d) {
			return ((t = Array.from(d)), (r = pg), f())
		}),
		(c.clamp = function (d) {
			return arguments.length ? ((s = d ? !0 : bt), f()) : s !== bt
		}),
		(c.interpolate = function (d) {
			return arguments.length ? ((r = d), f()) : r
		}),
		(c.unknown = function (d) {
			return arguments.length ? ((a = d), c) : a
		}),
		function (d, h) {
			return ((n = d), (i = h), f())
		}
	)
}
function gg() {
	return Ko()(bt, bt)
}
function iN(e) {
	return Math.abs((e = Math.round(e))) >= 1e21
		? e.toLocaleString('en').replace(/,/g, '')
		: e.toString(10)
}
function vo(e, t) {
	if (!isFinite(e) || e === 0) return null
	var r = (e = t ? e.toExponential(t - 1) : e.toExponential()).indexOf('e'),
		n = e.slice(0, r)
	return [n.length > 1 ? n[0] + n.slice(2) : n, +e.slice(r + 1)]
}
function na(e) {
	return ((e = vo(Math.abs(e))), e ? e[1] : NaN)
}
function aN(e, t) {
	return function (r, n) {
		for (
			var i = r.length, a = [], s = 0, o = e[0], u = 0;
			i > 0 &&
			o > 0 &&
			(u + o + 1 > n && (o = Math.max(1, n - u)),
			a.push(r.substring((i -= o), i + o)),
			!((u += o + 1) > n));
		)
			o = e[(s = (s + 1) % e.length)]
		return a.reverse().join(t)
	}
}
function sN(e) {
	return function (t) {
		return t.replace(/[0-9]/g, function (r) {
			return e[+r]
		})
	}
}
var oN =
	/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i
function Ja(e) {
	if (!(t = oN.exec(e))) throw new Error('invalid format: ' + e)
	var t
	return new mg({
		fill: t[1],
		align: t[2],
		sign: t[3],
		symbol: t[4],
		zero: t[5],
		width: t[6],
		comma: t[7],
		precision: t[8] && t[8].slice(1),
		trim: t[9],
		type: t[10]
	})
}
Ja.prototype = mg.prototype
function mg(e) {
	;((this.fill = e.fill === void 0 ? ' ' : e.fill + ''),
		(this.align = e.align === void 0 ? '>' : e.align + ''),
		(this.sign = e.sign === void 0 ? '-' : e.sign + ''),
		(this.symbol = e.symbol === void 0 ? '' : e.symbol + ''),
		(this.zero = !!e.zero),
		(this.width = e.width === void 0 ? void 0 : +e.width),
		(this.comma = !!e.comma),
		(this.precision = e.precision === void 0 ? void 0 : +e.precision),
		(this.trim = !!e.trim),
		(this.type = e.type === void 0 ? '' : e.type + ''))
}
mg.prototype.toString = function () {
	return (
		this.fill +
		this.align +
		this.sign +
		this.symbol +
		(this.zero ? '0' : '') +
		(this.width === void 0 ? '' : Math.max(1, this.width | 0)) +
		(this.comma ? ',' : '') +
		(this.precision === void 0 ? '' : '.' + Math.max(0, this.precision | 0)) +
		(this.trim ? '~' : '') +
		this.type
	)
}
function uN(e) {
	e: for (var t = e.length, r = 1, n = -1, i; r < t; ++r)
		switch (e[r]) {
			case '.':
				n = i = r
				break
			case '0':
				;(n === 0 && (n = r), (i = r))
				break
			default:
				if (!+e[r]) break e
				n > 0 && (n = 0)
				break
		}
	return n > 0 ? e.slice(0, n) + e.slice(i + 1) : e
}
var yo
function lN(e, t) {
	var r = vo(e, t)
	if (!r) return ((yo = void 0), e.toPrecision(t))
	var n = r[0],
		i = r[1],
		a = i - (yo = Math.max(-8, Math.min(8, Math.floor(i / 3))) * 3) + 1,
		s = n.length
	return a === s
		? n
		: a > s
			? n + new Array(a - s + 1).join('0')
			: a > 0
				? n.slice(0, a) + '.' + n.slice(a)
				: '0.' + new Array(1 - a).join('0') + vo(e, Math.max(0, t + a - 1))[0]
}
function ew(e, t) {
	var r = vo(e, t)
	if (!r) return e + ''
	var n = r[0],
		i = r[1]
	return i < 0
		? '0.' + new Array(-i).join('0') + n
		: n.length > i + 1
			? n.slice(0, i + 1) + '.' + n.slice(i + 1)
			: n + new Array(i - n.length + 2).join('0')
}
const tw = {
	'%': (e, t) => (e * 100).toFixed(t),
	b: (e) => Math.round(e).toString(2),
	c: (e) => e + '',
	d: iN,
	e: (e, t) => e.toExponential(t),
	f: (e, t) => e.toFixed(t),
	g: (e, t) => e.toPrecision(t),
	o: (e) => Math.round(e).toString(8),
	p: (e, t) => ew(e * 100, t),
	r: ew,
	s: lN,
	X: (e) => Math.round(e).toString(16).toUpperCase(),
	x: (e) => Math.round(e).toString(16)
}
function rw(e) {
	return e
}
var nw = Array.prototype.map,
	iw = [
		'y',
		'z',
		'a',
		'f',
		'p',
		'n',
		'µ',
		'm',
		'',
		'k',
		'M',
		'G',
		'T',
		'P',
		'E',
		'Z',
		'Y'
	]
function cN(e) {
	var t =
			e.grouping === void 0 || e.thousands === void 0
				? rw
				: aN(nw.call(e.grouping, Number), e.thousands + ''),
		r = e.currency === void 0 ? '' : e.currency[0] + '',
		n = e.currency === void 0 ? '' : e.currency[1] + '',
		i = e.decimal === void 0 ? '.' : e.decimal + '',
		a = e.numerals === void 0 ? rw : sN(nw.call(e.numerals, String)),
		s = e.percent === void 0 ? '%' : e.percent + '',
		o = e.minus === void 0 ? '−' : e.minus + '',
		u = e.nan === void 0 ? 'NaN' : e.nan + ''
	function l(c, d) {
		c = Ja(c)
		var h = c.fill,
			g = c.align,
			p = c.sign,
			m = c.symbol,
			v = c.zero,
			_ = c.width,
			w = c.comma,
			x = c.precision,
			E = c.trim,
			R = c.type
		;(R === 'n'
			? ((w = !0), (R = 'g'))
			: tw[R] || (x === void 0 && (x = 12), (E = !0), (R = 'g')),
			(v || (h === '0' && g === '=')) && ((v = !0), (h = '0'), (g = '=')))
		var S =
				(d && d.prefix !== void 0 ? d.prefix : '') +
				(m === '$'
					? r
					: m === '#' && /[boxX]/.test(R)
						? '0' + R.toLowerCase()
						: ''),
			y =
				(m === '$' ? n : /[%p]/.test(R) ? s : '') +
				(d && d.suffix !== void 0 ? d.suffix : ''),
			b = tw[R],
			O = /[defgprs%]/.test(R)
		x =
			x === void 0
				? 6
				: /[gprs]/.test(R)
					? Math.max(1, Math.min(21, x))
					: Math.max(0, Math.min(20, x))
		function A(T) {
			var P = S,
				k = y,
				j,
				M,
				q
			if (R === 'c') ((k = b(T) + k), (T = ''))
			else {
				T = +T
				var I = T < 0 || 1 / T < 0
				if (
					((T = isNaN(T) ? u : b(Math.abs(T), x)),
					E && (T = uN(T)),
					I && +T == 0 && p !== '+' && (I = !1),
					(P = (I ? (p === '(' ? p : o) : p === '-' || p === '(' ? '' : p) + P),
					(k =
						(R === 's' && !isNaN(T) && yo !== void 0 ? iw[8 + yo / 3] : '') +
						k +
						(I && p === '(' ? ')' : '')),
					O)
				) {
					for (j = -1, M = T.length; ++j < M; )
						if (((q = T.charCodeAt(j)), 48 > q || q > 57)) {
							;((k = (q === 46 ? i + T.slice(j + 1) : T.slice(j)) + k),
								(T = T.slice(0, j)))
							break
						}
				}
			}
			w && !v && (T = t(T, 1 / 0))
			var D = P.length + T.length + k.length,
				N = D < _ ? new Array(_ - D + 1).join(h) : ''
			switch (
				(w && v && ((T = t(N + T, N.length ? _ - k.length : 1 / 0)), (N = '')),
				g)
			) {
				case '<':
					T = P + T + k + N
					break
				case '=':
					T = P + N + T + k
					break
				case '^':
					T = N.slice(0, (D = N.length >> 1)) + P + T + k + N.slice(D)
					break
				default:
					T = N + P + T + k
					break
			}
			return a(T)
		}
		return (
			(A.toString = function () {
				return c + ''
			}),
			A
		)
	}
	function f(c, d) {
		var h = Math.max(-8, Math.min(8, Math.floor(na(d) / 3))) * 3,
			g = Math.pow(10, -h),
			p = l(((c = Ja(c)), (c.type = 'f'), c), { suffix: iw[8 + h / 3] })
		return function (m) {
			return p(g * m)
		}
	}
	return { format: l, formatPrefix: f }
}
var Is, vg, xR
fN({ thousands: ',', grouping: [3], currency: ['$', ''] })
function fN(e) {
	return ((Is = cN(e)), (vg = Is.format), (xR = Is.formatPrefix), Is)
}
function dN(e) {
	return Math.max(0, -na(Math.abs(e)))
}
function hN(e, t) {
	return Math.max(
		0,
		Math.max(-8, Math.min(8, Math.floor(na(t) / 3))) * 3 - na(Math.abs(e))
	)
}
function pN(e, t) {
	return (
		(e = Math.abs(e)),
		(t = Math.abs(t) - e),
		Math.max(0, na(t) - na(e)) + 1
	)
}
function RR(e, t, r, n) {
	var i = sp(e, t, r),
		a
	switch (((n = Ja(n ?? ',f')), n.type)) {
		case 's': {
			var s = Math.max(Math.abs(e), Math.abs(t))
			return (
				n.precision == null && !isNaN((a = hN(i, s))) && (n.precision = a),
				xR(n, s)
			)
		}
		case '':
		case 'e':
		case 'g':
		case 'p':
		case 'r': {
			n.precision == null &&
				!isNaN((a = pN(i, Math.max(Math.abs(e), Math.abs(t))))) &&
				(n.precision = a - (n.type === 'e'))
			break
		}
		case 'f':
		case '%': {
			n.precision == null &&
				!isNaN((a = dN(i))) &&
				(n.precision = a - (n.type === '%') * 2)
			break
		}
	}
	return vg(n)
}
function Bn(e) {
	var t = e.domain
	return (
		(e.ticks = function (r) {
			var n = t()
			return ip(n[0], n[n.length - 1], r ?? 10)
		}),
		(e.tickFormat = function (r, n) {
			var i = t()
			return RR(i[0], i[i.length - 1], r ?? 10, n)
		}),
		(e.nice = function (r) {
			r == null && (r = 10)
			var n = t(),
				i = 0,
				a = n.length - 1,
				s = n[i],
				o = n[a],
				u,
				l,
				f = 10
			for (
				o < s && ((l = s), (s = o), (o = l), (l = i), (i = a), (a = l));
				f-- > 0;
			) {
				if (((l = ap(s, o, r)), l === u)) return ((n[i] = s), (n[a] = o), t(n))
				if (l > 0) ((s = Math.floor(s / l) * l), (o = Math.ceil(o / l) * l))
				else if (l < 0)
					((s = Math.ceil(s * l) / l), (o = Math.floor(o * l) / l))
				else break
				u = l
			}
			return e
		}),
		e
	)
}
function OR() {
	var e = gg()
	return (
		(e.copy = function () {
			return ds(e, OR())
		}),
		Xt.apply(e, arguments),
		Bn(e)
	)
}
function CR(e) {
	var t
	function r(n) {
		return n == null || isNaN((n = +n)) ? t : n
	}
	return (
		(r.invert = r),
		(r.domain = r.range =
			function (n) {
				return arguments.length ? ((e = Array.from(n, mo)), r) : e.slice()
			}),
		(r.unknown = function (n) {
			return arguments.length ? ((t = n), r) : t
		}),
		(r.copy = function () {
			return CR(e).unknown(t)
		}),
		(e = arguments.length ? Array.from(e, mo) : [0, 1]),
		Bn(r)
	)
}
function TR(e, t) {
	e = e.slice()
	var r = 0,
		n = e.length - 1,
		i = e[r],
		a = e[n],
		s
	return (
		a < i && ((s = r), (r = n), (n = s), (s = i), (i = a), (a = s)),
		(e[r] = t.floor(i)),
		(e[n] = t.ceil(a)),
		e
	)
}
function aw(e) {
	return Math.log(e)
}
function sw(e) {
	return Math.exp(e)
}
function gN(e) {
	return -Math.log(-e)
}
function mN(e) {
	return -Math.exp(-e)
}
function vN(e) {
	return isFinite(e) ? +('1e' + e) : e < 0 ? 0 : e
}
function yN(e) {
	return e === 10 ? vN : e === Math.E ? Math.exp : (t) => Math.pow(e, t)
}
function _N(e) {
	return e === Math.E
		? Math.log
		: (e === 10 && Math.log10) ||
				(e === 2 && Math.log2) ||
				((e = Math.log(e)), (t) => Math.log(t) / e)
}
function ow(e) {
	return (t, r) => -e(-t, r)
}
function yg(e) {
	const t = e(aw, sw),
		r = t.domain
	let n = 10,
		i,
		a
	function s() {
		return (
			(i = _N(n)),
			(a = yN(n)),
			r()[0] < 0 ? ((i = ow(i)), (a = ow(a)), e(gN, mN)) : e(aw, sw),
			t
		)
	}
	return (
		(t.base = function (o) {
			return arguments.length ? ((n = +o), s()) : n
		}),
		(t.domain = function (o) {
			return arguments.length ? (r(o), s()) : r()
		}),
		(t.ticks = (o) => {
			const u = r()
			let l = u[0],
				f = u[u.length - 1]
			const c = f < l
			c && ([l, f] = [f, l])
			let d = i(l),
				h = i(f),
				g,
				p
			const m = o == null ? 10 : +o
			let v = []
			if (!(n % 1) && h - d < m) {
				if (((d = Math.floor(d)), (h = Math.ceil(h)), l > 0)) {
					for (; d <= h; ++d)
						for (g = 1; g < n; ++g)
							if (((p = d < 0 ? g / a(-d) : g * a(d)), !(p < l))) {
								if (p > f) break
								v.push(p)
							}
				} else
					for (; d <= h; ++d)
						for (g = n - 1; g >= 1; --g)
							if (((p = d > 0 ? g / a(-d) : g * a(d)), !(p < l))) {
								if (p > f) break
								v.push(p)
							}
				v.length * 2 < m && (v = ip(l, f, m))
			} else v = ip(d, h, Math.min(h - d, m)).map(a)
			return c ? v.reverse() : v
		}),
		(t.tickFormat = (o, u) => {
			if (
				(o == null && (o = 10),
				u == null && (u = n === 10 ? 's' : ','),
				typeof u != 'function' &&
					(!(n % 1) && (u = Ja(u)).precision == null && (u.trim = !0),
					(u = vg(u))),
				o === 1 / 0)
			)
				return u
			const l = Math.max(1, (n * o) / t.ticks().length)
			return (f) => {
				let c = f / a(Math.round(i(f)))
				return (c * n < n - 0.5 && (c *= n), c <= l ? u(f) : '')
			}
		}),
		(t.nice = () =>
			r(
				TR(r(), {
					floor: (o) => a(Math.floor(i(o))),
					ceil: (o) => a(Math.ceil(i(o)))
				})
			)),
		t
	)
}
function ER() {
	const e = yg(Ko()).domain([1, 10])
	return (
		(e.copy = () => ds(e, ER()).base(e.base())),
		Xt.apply(e, arguments),
		e
	)
}
function uw(e) {
	return function (t) {
		return Math.sign(t) * Math.log1p(Math.abs(t / e))
	}
}
function lw(e) {
	return function (t) {
		return Math.sign(t) * Math.expm1(Math.abs(t)) * e
	}
}
function _g(e) {
	var t = 1,
		r = e(uw(t), lw(t))
	return (
		(r.constant = function (n) {
			return arguments.length ? e(uw((t = +n)), lw(t)) : t
		}),
		Bn(r)
	)
}
function AR() {
	var e = _g(Ko())
	return (
		(e.copy = function () {
			return ds(e, AR()).constant(e.constant())
		}),
		Xt.apply(e, arguments)
	)
}
function cw(e) {
	return function (t) {
		return t < 0 ? -Math.pow(-t, e) : Math.pow(t, e)
	}
}
function bN(e) {
	return e < 0 ? -Math.sqrt(-e) : Math.sqrt(e)
}
function wN(e) {
	return e < 0 ? -e * e : e * e
}
function bg(e) {
	var t = e(bt, bt),
		r = 1
	function n() {
		return r === 1 ? e(bt, bt) : r === 0.5 ? e(bN, wN) : e(cw(r), cw(1 / r))
	}
	return (
		(t.exponent = function (i) {
			return arguments.length ? ((r = +i), n()) : r
		}),
		Bn(t)
	)
}
function wg() {
	var e = bg(Ko())
	return (
		(e.copy = function () {
			return ds(e, wg()).exponent(e.exponent())
		}),
		Xt.apply(e, arguments),
		e
	)
}
function SN() {
	return wg.apply(null, arguments).exponent(0.5)
}
function fw(e) {
	return Math.sign(e) * e * e
}
function xN(e) {
	return Math.sign(e) * Math.sqrt(Math.abs(e))
}
function MR() {
	var e = gg(),
		t = [0, 1],
		r = !1,
		n
	function i(a) {
		var s = xN(e(a))
		return isNaN(s) ? n : r ? Math.round(s) : s
	}
	return (
		(i.invert = function (a) {
			return e.invert(fw(a))
		}),
		(i.domain = function (a) {
			return arguments.length ? (e.domain(a), i) : e.domain()
		}),
		(i.range = function (a) {
			return arguments.length
				? (e.range((t = Array.from(a, mo)).map(fw)), i)
				: t.slice()
		}),
		(i.rangeRound = function (a) {
			return i.range(a).round(!0)
		}),
		(i.round = function (a) {
			return arguments.length ? ((r = !!a), i) : r
		}),
		(i.clamp = function (a) {
			return arguments.length ? (e.clamp(a), i) : e.clamp()
		}),
		(i.unknown = function (a) {
			return arguments.length ? ((n = a), i) : n
		}),
		(i.copy = function () {
			return MR(e.domain(), t).round(r).clamp(e.clamp()).unknown(n)
		}),
		Xt.apply(i, arguments),
		Bn(i)
	)
}
function PR() {
	var e = [],
		t = [],
		r = [],
		n
	function i() {
		var s = 0,
			o = Math.max(1, t.length)
		for (r = new Array(o - 1); ++s < o; ) r[s - 1] = TD(e, s / o)
		return a
	}
	function a(s) {
		return s == null || isNaN((s = +s)) ? n : t[cs(r, s)]
	}
	return (
		(a.invertExtent = function (s) {
			var o = t.indexOf(s)
			return o < 0
				? [NaN, NaN]
				: [o > 0 ? r[o - 1] : e[0], o < r.length ? r[o] : e[e.length - 1]]
		}),
		(a.domain = function (s) {
			if (!arguments.length) return e.slice()
			e = []
			for (let o of s) o != null && !isNaN((o = +o)) && e.push(o)
			return (e.sort(In), i())
		}),
		(a.range = function (s) {
			return arguments.length ? ((t = Array.from(s)), i()) : t.slice()
		}),
		(a.unknown = function (s) {
			return arguments.length ? ((n = s), a) : n
		}),
		(a.quantiles = function () {
			return r.slice()
		}),
		(a.copy = function () {
			return PR().domain(e).range(t).unknown(n)
		}),
		Xt.apply(a, arguments)
	)
}
function IR() {
	var e = 0,
		t = 1,
		r = 1,
		n = [0.5],
		i = [0, 1],
		a
	function s(u) {
		return u != null && u <= u ? i[cs(n, u, 0, r)] : a
	}
	function o() {
		var u = -1
		for (n = new Array(r); ++u < r; )
			n[u] = ((u + 1) * t - (u - r) * e) / (r + 1)
		return s
	}
	return (
		(s.domain = function (u) {
			return arguments.length ? (([e, t] = u), (e = +e), (t = +t), o()) : [e, t]
		}),
		(s.range = function (u) {
			return arguments.length
				? ((r = (i = Array.from(u)).length - 1), o())
				: i.slice()
		}),
		(s.invertExtent = function (u) {
			var l = i.indexOf(u)
			return l < 0
				? [NaN, NaN]
				: l < 1
					? [e, n[0]]
					: l >= r
						? [n[r - 1], t]
						: [n[l - 1], n[l]]
		}),
		(s.unknown = function (u) {
			return (arguments.length && (a = u), s)
		}),
		(s.thresholds = function () {
			return n.slice()
		}),
		(s.copy = function () {
			return IR().domain([e, t]).range(i).unknown(a)
		}),
		Xt.apply(Bn(s), arguments)
	)
}
function kR() {
	var e = [0.5],
		t = [0, 1],
		r,
		n = 1
	function i(a) {
		return a != null && a <= a ? t[cs(e, a, 0, n)] : r
	}
	return (
		(i.domain = function (a) {
			return arguments.length
				? ((e = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
				: e.slice()
		}),
		(i.range = function (a) {
			return arguments.length
				? ((t = Array.from(a)), (n = Math.min(e.length, t.length - 1)), i)
				: t.slice()
		}),
		(i.invertExtent = function (a) {
			var s = t.indexOf(a)
			return [e[s - 1], e[s]]
		}),
		(i.unknown = function (a) {
			return arguments.length ? ((r = a), i) : r
		}),
		(i.copy = function () {
			return kR().domain(e).range(t).unknown(r)
		}),
		Xt.apply(i, arguments)
	)
}
const Md = new Date(),
	Pd = new Date()
function it(e, t, r, n) {
	function i(a) {
		return (e((a = arguments.length === 0 ? new Date() : new Date(+a))), a)
	}
	return (
		(i.floor = (a) => (e((a = new Date(+a))), a)),
		(i.ceil = (a) => (e((a = new Date(a - 1))), t(a, 1), e(a), a)),
		(i.round = (a) => {
			const s = i(a),
				o = i.ceil(a)
			return a - s < o - a ? s : o
		}),
		(i.offset = (a, s) => (
			t((a = new Date(+a)), s == null ? 1 : Math.floor(s)),
			a
		)),
		(i.range = (a, s, o) => {
			const u = []
			if (
				((a = i.ceil(a)),
				(o = o == null ? 1 : Math.floor(o)),
				!(a < s) || !(o > 0))
			)
				return u
			let l
			do (u.push((l = new Date(+a))), t(a, o), e(a))
			while (l < a && a < s)
			return u
		}),
		(i.filter = (a) =>
			it(
				(s) => {
					if (s >= s) for (; e(s), !a(s); ) s.setTime(s - 1)
				},
				(s, o) => {
					if (s >= s)
						if (o < 0) for (; ++o <= 0; ) for (; t(s, -1), !a(s); );
						else for (; --o >= 0; ) for (; t(s, 1), !a(s); );
				}
			)),
		r &&
			((i.count = (a, s) => (
				Md.setTime(+a),
				Pd.setTime(+s),
				e(Md),
				e(Pd),
				Math.floor(r(Md, Pd))
			)),
			(i.every = (a) => (
				(a = Math.floor(a)),
				!isFinite(a) || !(a > 0)
					? null
					: a > 1
						? i.filter(
								n ? (s) => n(s) % a === 0 : (s) => i.count(0, s) % a === 0
							)
						: i
			))),
		i
	)
}
const _o = it(
	() => {},
	(e, t) => {
		e.setTime(+e + t)
	},
	(e, t) => t - e
)
_o.every = (e) => (
	(e = Math.floor(e)),
	!isFinite(e) || !(e > 0)
		? null
		: e > 1
			? it(
					(t) => {
						t.setTime(Math.floor(t / e) * e)
					},
					(t, r) => {
						t.setTime(+t + r * e)
					},
					(t, r) => (r - t) / e
				)
			: _o
)
_o.range
const Hr = 1e3,
	Zt = Hr * 60,
	Gr = Zt * 60,
	Xr = Gr * 24,
	Sg = Xr * 7,
	dw = Xr * 30,
	Id = Xr * 365,
	ai = it(
		(e) => {
			e.setTime(e - e.getMilliseconds())
		},
		(e, t) => {
			e.setTime(+e + t * Hr)
		},
		(e, t) => (t - e) / Hr,
		(e) => e.getUTCSeconds()
	)
ai.range
const xg = it(
	(e) => {
		e.setTime(e - e.getMilliseconds() - e.getSeconds() * Hr)
	},
	(e, t) => {
		e.setTime(+e + t * Zt)
	},
	(e, t) => (t - e) / Zt,
	(e) => e.getMinutes()
)
xg.range
const Rg = it(
	(e) => {
		e.setUTCSeconds(0, 0)
	},
	(e, t) => {
		e.setTime(+e + t * Zt)
	},
	(e, t) => (t - e) / Zt,
	(e) => e.getUTCMinutes()
)
Rg.range
const Og = it(
	(e) => {
		e.setTime(
			e - e.getMilliseconds() - e.getSeconds() * Hr - e.getMinutes() * Zt
		)
	},
	(e, t) => {
		e.setTime(+e + t * Gr)
	},
	(e, t) => (t - e) / Gr,
	(e) => e.getHours()
)
Og.range
const Cg = it(
	(e) => {
		e.setUTCMinutes(0, 0, 0)
	},
	(e, t) => {
		e.setTime(+e + t * Gr)
	},
	(e, t) => (t - e) / Gr,
	(e) => e.getUTCHours()
)
Cg.range
const hs = it(
	(e) => e.setHours(0, 0, 0, 0),
	(e, t) => e.setDate(e.getDate() + t),
	(e, t) => (t - e - (t.getTimezoneOffset() - e.getTimezoneOffset()) * Zt) / Xr,
	(e) => e.getDate() - 1
)
hs.range
const Qo = it(
	(e) => {
		e.setUTCHours(0, 0, 0, 0)
	},
	(e, t) => {
		e.setUTCDate(e.getUTCDate() + t)
	},
	(e, t) => (t - e) / Xr,
	(e) => e.getUTCDate() - 1
)
Qo.range
const qR = it(
	(e) => {
		e.setUTCHours(0, 0, 0, 0)
	},
	(e, t) => {
		e.setUTCDate(e.getUTCDate() + t)
	},
	(e, t) => (t - e) / Xr,
	(e) => Math.floor(e / Xr)
)
qR.range
function Pi(e) {
	return it(
		(t) => {
			;(t.setDate(t.getDate() - ((t.getDay() + 7 - e) % 7)),
				t.setHours(0, 0, 0, 0))
		},
		(t, r) => {
			t.setDate(t.getDate() + r * 7)
		},
		(t, r) =>
			(r - t - (r.getTimezoneOffset() - t.getTimezoneOffset()) * Zt) / Sg
	)
}
const Zo = Pi(0),
	bo = Pi(1),
	RN = Pi(2),
	ON = Pi(3),
	ia = Pi(4),
	CN = Pi(5),
	TN = Pi(6)
Zo.range
bo.range
RN.range
ON.range
ia.range
CN.range
TN.range
function Ii(e) {
	return it(
		(t) => {
			;(t.setUTCDate(t.getUTCDate() - ((t.getUTCDay() + 7 - e) % 7)),
				t.setUTCHours(0, 0, 0, 0))
		},
		(t, r) => {
			t.setUTCDate(t.getUTCDate() + r * 7)
		},
		(t, r) => (r - t) / Sg
	)
}
const Yo = Ii(0),
	wo = Ii(1),
	EN = Ii(2),
	AN = Ii(3),
	aa = Ii(4),
	MN = Ii(5),
	PN = Ii(6)
Yo.range
wo.range
EN.range
AN.range
aa.range
MN.range
PN.range
const Tg = it(
	(e) => {
		;(e.setDate(1), e.setHours(0, 0, 0, 0))
	},
	(e, t) => {
		e.setMonth(e.getMonth() + t)
	},
	(e, t) =>
		t.getMonth() - e.getMonth() + (t.getFullYear() - e.getFullYear()) * 12,
	(e) => e.getMonth()
)
Tg.range
const Eg = it(
	(e) => {
		;(e.setUTCDate(1), e.setUTCHours(0, 0, 0, 0))
	},
	(e, t) => {
		e.setUTCMonth(e.getUTCMonth() + t)
	},
	(e, t) =>
		t.getUTCMonth() -
		e.getUTCMonth() +
		(t.getUTCFullYear() - e.getUTCFullYear()) * 12,
	(e) => e.getUTCMonth()
)
Eg.range
const en = it(
	(e) => {
		;(e.setMonth(0, 1), e.setHours(0, 0, 0, 0))
	},
	(e, t) => {
		e.setFullYear(e.getFullYear() + t)
	},
	(e, t) => t.getFullYear() - e.getFullYear(),
	(e) => e.getFullYear()
)
en.every = (e) =>
	!isFinite((e = Math.floor(e))) || !(e > 0)
		? null
		: it(
				(t) => {
					;(t.setFullYear(Math.floor(t.getFullYear() / e) * e),
						t.setMonth(0, 1),
						t.setHours(0, 0, 0, 0))
				},
				(t, r) => {
					t.setFullYear(t.getFullYear() + r * e)
				}
			)
en.range
const tn = it(
	(e) => {
		;(e.setUTCMonth(0, 1), e.setUTCHours(0, 0, 0, 0))
	},
	(e, t) => {
		e.setUTCFullYear(e.getUTCFullYear() + t)
	},
	(e, t) => t.getUTCFullYear() - e.getUTCFullYear(),
	(e) => e.getUTCFullYear()
)
tn.every = (e) =>
	!isFinite((e = Math.floor(e))) || !(e > 0)
		? null
		: it(
				(t) => {
					;(t.setUTCFullYear(Math.floor(t.getUTCFullYear() / e) * e),
						t.setUTCMonth(0, 1),
						t.setUTCHours(0, 0, 0, 0))
				},
				(t, r) => {
					t.setUTCFullYear(t.getUTCFullYear() + r * e)
				}
			)
tn.range
function $R(e, t, r, n, i, a) {
	const s = [
		[ai, 1, Hr],
		[ai, 5, 5 * Hr],
		[ai, 15, 15 * Hr],
		[ai, 30, 30 * Hr],
		[a, 1, Zt],
		[a, 5, 5 * Zt],
		[a, 15, 15 * Zt],
		[a, 30, 30 * Zt],
		[i, 1, Gr],
		[i, 3, 3 * Gr],
		[i, 6, 6 * Gr],
		[i, 12, 12 * Gr],
		[n, 1, Xr],
		[n, 2, 2 * Xr],
		[r, 1, Sg],
		[t, 1, dw],
		[t, 3, 3 * dw],
		[e, 1, Id]
	]
	function o(l, f, c) {
		const d = f < l
		d && ([l, f] = [f, l])
		const h = c && typeof c.range == 'function' ? c : u(l, f, c),
			g = h ? h.range(l, +f + 1) : []
		return d ? g.reverse() : g
	}
	function u(l, f, c) {
		const d = Math.abs(f - l) / c,
			h = lg(([, , m]) => m).right(s, d)
		if (h === s.length) return e.every(sp(l / Id, f / Id, c))
		if (h === 0) return _o.every(Math.max(sp(l, f, c), 1))
		const [g, p] = s[d / s[h - 1][2] < s[h][2] / d ? h - 1 : h]
		return g.every(p)
	}
	return [o, u]
}
const [IN, kN] = $R(tn, Eg, Yo, qR, Cg, Rg),
	[qN, $N] = $R(en, Tg, Zo, hs, Og, xg)
function kd(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(-1, e.m, e.d, e.H, e.M, e.S, e.L)
		return (t.setFullYear(e.y), t)
	}
	return new Date(e.y, e.m, e.d, e.H, e.M, e.S, e.L)
}
function qd(e) {
	if (0 <= e.y && e.y < 100) {
		var t = new Date(Date.UTC(-1, e.m, e.d, e.H, e.M, e.S, e.L))
		return (t.setUTCFullYear(e.y), t)
	}
	return new Date(Date.UTC(e.y, e.m, e.d, e.H, e.M, e.S, e.L))
}
function Aa(e, t, r) {
	return { y: e, m: t, d: r, H: 0, M: 0, S: 0, L: 0 }
}
function FN(e) {
	var t = e.dateTime,
		r = e.date,
		n = e.time,
		i = e.periods,
		a = e.days,
		s = e.shortDays,
		o = e.months,
		u = e.shortMonths,
		l = Ma(i),
		f = Pa(i),
		c = Ma(a),
		d = Pa(a),
		h = Ma(s),
		g = Pa(s),
		p = Ma(o),
		m = Pa(o),
		v = Ma(u),
		_ = Pa(u),
		w = {
			a: q,
			A: I,
			b: D,
			B: N,
			c: null,
			d: yw,
			e: yw,
			f: aL,
			g: gL,
			G: vL,
			H: rL,
			I: nL,
			j: iL,
			L: FR,
			m: sL,
			M: oL,
			p: W,
			q: oe,
			Q: ww,
			s: Sw,
			S: uL,
			u: lL,
			U: cL,
			V: fL,
			w: dL,
			W: hL,
			x: null,
			X: null,
			y: pL,
			Y: mL,
			Z: yL,
			'%': bw
		},
		x = {
			a: B,
			A: re,
			b: Z,
			B: le,
			c: null,
			d: _w,
			e: _w,
			f: SL,
			g: IL,
			G: qL,
			H: _L,
			I: bL,
			j: wL,
			L: NR,
			m: xL,
			M: RL,
			p: Ce,
			q: Y,
			Q: ww,
			s: Sw,
			S: OL,
			u: CL,
			U: TL,
			V: EL,
			w: AL,
			W: ML,
			x: null,
			X: null,
			y: PL,
			Y: kL,
			Z: $L,
			'%': bw
		},
		E = {
			a: O,
			A,
			b: T,
			B: P,
			c: k,
			d: mw,
			e: mw,
			f: JN,
			g: gw,
			G: pw,
			H: vw,
			I: vw,
			j: KN,
			L: YN,
			m: WN,
			M: QN,
			p: b,
			q: GN,
			Q: eL,
			s: tL,
			S: ZN,
			u: UN,
			U: BN,
			V: VN,
			w: jN,
			W: zN,
			x: j,
			X: M,
			y: gw,
			Y: pw,
			Z: HN,
			'%': XN
		}
	;((w.x = R(r, w)),
		(w.X = R(n, w)),
		(w.c = R(t, w)),
		(x.x = R(r, x)),
		(x.X = R(n, x)),
		(x.c = R(t, x)))
	function R(U, z) {
		return function (V) {
			var F = [],
				ce = -1,
				Q = 0,
				de = U.length,
				ee,
				be,
				he
			for (V instanceof Date || (V = new Date(+V)); ++ce < de; )
				U.charCodeAt(ce) === 37 &&
					(F.push(U.slice(Q, ce)),
					(be = hw[(ee = U.charAt(++ce))]) != null
						? (ee = U.charAt(++ce))
						: (be = ee === 'e' ? ' ' : '0'),
					(he = z[ee]) && (ee = he(V, be)),
					F.push(ee),
					(Q = ce + 1))
			return (F.push(U.slice(Q, ce)), F.join(''))
		}
	}
	function S(U, z) {
		return function (V) {
			var F = Aa(1900, void 0, 1),
				ce = y(F, U, (V += ''), 0),
				Q,
				de
			if (ce != V.length) return null
			if ('Q' in F) return new Date(F.Q)
			if ('s' in F) return new Date(F.s * 1e3 + ('L' in F ? F.L : 0))
			if (
				(z && !('Z' in F) && (F.Z = 0),
				'p' in F && (F.H = (F.H % 12) + F.p * 12),
				F.m === void 0 && (F.m = 'q' in F ? F.q : 0),
				'V' in F)
			) {
				if (F.V < 1 || F.V > 53) return null
				;('w' in F || (F.w = 1),
					'Z' in F
						? ((Q = qd(Aa(F.y, 0, 1))),
							(de = Q.getUTCDay()),
							(Q = de > 4 || de === 0 ? wo.ceil(Q) : wo(Q)),
							(Q = Qo.offset(Q, (F.V - 1) * 7)),
							(F.y = Q.getUTCFullYear()),
							(F.m = Q.getUTCMonth()),
							(F.d = Q.getUTCDate() + ((F.w + 6) % 7)))
						: ((Q = kd(Aa(F.y, 0, 1))),
							(de = Q.getDay()),
							(Q = de > 4 || de === 0 ? bo.ceil(Q) : bo(Q)),
							(Q = hs.offset(Q, (F.V - 1) * 7)),
							(F.y = Q.getFullYear()),
							(F.m = Q.getMonth()),
							(F.d = Q.getDate() + ((F.w + 6) % 7))))
			} else
				('W' in F || 'U' in F) &&
					('w' in F || (F.w = 'u' in F ? F.u % 7 : 'W' in F ? 1 : 0),
					(de =
						'Z' in F
							? qd(Aa(F.y, 0, 1)).getUTCDay()
							: kd(Aa(F.y, 0, 1)).getDay()),
					(F.m = 0),
					(F.d =
						'W' in F
							? ((F.w + 6) % 7) + F.W * 7 - ((de + 5) % 7)
							: F.w + F.U * 7 - ((de + 6) % 7)))
			return 'Z' in F
				? ((F.H += (F.Z / 100) | 0), (F.M += F.Z % 100), qd(F))
				: kd(F)
		}
	}
	function y(U, z, V, F) {
		for (var ce = 0, Q = z.length, de = V.length, ee, be; ce < Q; ) {
			if (F >= de) return -1
			if (((ee = z.charCodeAt(ce++)), ee === 37)) {
				if (
					((ee = z.charAt(ce++)),
					(be = E[ee in hw ? z.charAt(ce++) : ee]),
					!be || (F = be(U, V, F)) < 0)
				)
					return -1
			} else if (ee != V.charCodeAt(F++)) return -1
		}
		return F
	}
	function b(U, z, V) {
		var F = l.exec(z.slice(V))
		return F ? ((U.p = f.get(F[0].toLowerCase())), V + F[0].length) : -1
	}
	function O(U, z, V) {
		var F = h.exec(z.slice(V))
		return F ? ((U.w = g.get(F[0].toLowerCase())), V + F[0].length) : -1
	}
	function A(U, z, V) {
		var F = c.exec(z.slice(V))
		return F ? ((U.w = d.get(F[0].toLowerCase())), V + F[0].length) : -1
	}
	function T(U, z, V) {
		var F = v.exec(z.slice(V))
		return F ? ((U.m = _.get(F[0].toLowerCase())), V + F[0].length) : -1
	}
	function P(U, z, V) {
		var F = p.exec(z.slice(V))
		return F ? ((U.m = m.get(F[0].toLowerCase())), V + F[0].length) : -1
	}
	function k(U, z, V) {
		return y(U, t, z, V)
	}
	function j(U, z, V) {
		return y(U, r, z, V)
	}
	function M(U, z, V) {
		return y(U, n, z, V)
	}
	function q(U) {
		return s[U.getDay()]
	}
	function I(U) {
		return a[U.getDay()]
	}
	function D(U) {
		return u[U.getMonth()]
	}
	function N(U) {
		return o[U.getMonth()]
	}
	function W(U) {
		return i[+(U.getHours() >= 12)]
	}
	function oe(U) {
		return 1 + ~~(U.getMonth() / 3)
	}
	function B(U) {
		return s[U.getUTCDay()]
	}
	function re(U) {
		return a[U.getUTCDay()]
	}
	function Z(U) {
		return u[U.getUTCMonth()]
	}
	function le(U) {
		return o[U.getUTCMonth()]
	}
	function Ce(U) {
		return i[+(U.getUTCHours() >= 12)]
	}
	function Y(U) {
		return 1 + ~~(U.getUTCMonth() / 3)
	}
	return {
		format: function (U) {
			var z = R((U += ''), w)
			return (
				(z.toString = function () {
					return U
				}),
				z
			)
		},
		parse: function (U) {
			var z = S((U += ''), !1)
			return (
				(z.toString = function () {
					return U
				}),
				z
			)
		},
		utcFormat: function (U) {
			var z = R((U += ''), x)
			return (
				(z.toString = function () {
					return U
				}),
				z
			)
		},
		utcParse: function (U) {
			var z = S((U += ''), !0)
			return (
				(z.toString = function () {
					return U
				}),
				z
			)
		}
	}
}
var hw = { '-': '', _: ' ', 0: '0' },
	ut = /^\s*\d+/,
	DN = /^%/,
	NN = /[\\^$*+?|[\]().{}]/g
function Ie(e, t, r) {
	var n = e < 0 ? '-' : '',
		i = (n ? -e : e) + '',
		a = i.length
	return n + (a < r ? new Array(r - a + 1).join(t) + i : i)
}
function LN(e) {
	return e.replace(NN, '\\$&')
}
function Ma(e) {
	return new RegExp('^(?:' + e.map(LN).join('|') + ')', 'i')
}
function Pa(e) {
	return new Map(e.map((t, r) => [t.toLowerCase(), r]))
}
function jN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 1))
	return n ? ((e.w = +n[0]), r + n[0].length) : -1
}
function UN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 1))
	return n ? ((e.u = +n[0]), r + n[0].length) : -1
}
function BN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 2))
	return n ? ((e.U = +n[0]), r + n[0].length) : -1
}
function VN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 2))
	return n ? ((e.V = +n[0]), r + n[0].length) : -1
}
function zN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 2))
	return n ? ((e.W = +n[0]), r + n[0].length) : -1
}
function pw(e, t, r) {
	var n = ut.exec(t.slice(r, r + 4))
	return n ? ((e.y = +n[0]), r + n[0].length) : -1
}
function gw(e, t, r) {
	var n = ut.exec(t.slice(r, r + 2))
	return n ? ((e.y = +n[0] + (+n[0] > 68 ? 1900 : 2e3)), r + n[0].length) : -1
}
function HN(e, t, r) {
	var n = /^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(t.slice(r, r + 6))
	return n ? ((e.Z = n[1] ? 0 : -(n[2] + (n[3] || '00'))), r + n[0].length) : -1
}
function GN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 1))
	return n ? ((e.q = n[0] * 3 - 3), r + n[0].length) : -1
}
function WN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 2))
	return n ? ((e.m = n[0] - 1), r + n[0].length) : -1
}
function mw(e, t, r) {
	var n = ut.exec(t.slice(r, r + 2))
	return n ? ((e.d = +n[0]), r + n[0].length) : -1
}
function KN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 3))
	return n ? ((e.m = 0), (e.d = +n[0]), r + n[0].length) : -1
}
function vw(e, t, r) {
	var n = ut.exec(t.slice(r, r + 2))
	return n ? ((e.H = +n[0]), r + n[0].length) : -1
}
function QN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 2))
	return n ? ((e.M = +n[0]), r + n[0].length) : -1
}
function ZN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 2))
	return n ? ((e.S = +n[0]), r + n[0].length) : -1
}
function YN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 3))
	return n ? ((e.L = +n[0]), r + n[0].length) : -1
}
function JN(e, t, r) {
	var n = ut.exec(t.slice(r, r + 6))
	return n ? ((e.L = Math.floor(n[0] / 1e3)), r + n[0].length) : -1
}
function XN(e, t, r) {
	var n = DN.exec(t.slice(r, r + 1))
	return n ? r + n[0].length : -1
}
function eL(e, t, r) {
	var n = ut.exec(t.slice(r))
	return n ? ((e.Q = +n[0]), r + n[0].length) : -1
}
function tL(e, t, r) {
	var n = ut.exec(t.slice(r))
	return n ? ((e.s = +n[0]), r + n[0].length) : -1
}
function yw(e, t) {
	return Ie(e.getDate(), t, 2)
}
function rL(e, t) {
	return Ie(e.getHours(), t, 2)
}
function nL(e, t) {
	return Ie(e.getHours() % 12 || 12, t, 2)
}
function iL(e, t) {
	return Ie(1 + hs.count(en(e), e), t, 3)
}
function FR(e, t) {
	return Ie(e.getMilliseconds(), t, 3)
}
function aL(e, t) {
	return FR(e, t) + '000'
}
function sL(e, t) {
	return Ie(e.getMonth() + 1, t, 2)
}
function oL(e, t) {
	return Ie(e.getMinutes(), t, 2)
}
function uL(e, t) {
	return Ie(e.getSeconds(), t, 2)
}
function lL(e) {
	var t = e.getDay()
	return t === 0 ? 7 : t
}
function cL(e, t) {
	return Ie(Zo.count(en(e) - 1, e), t, 2)
}
function DR(e) {
	var t = e.getDay()
	return t >= 4 || t === 0 ? ia(e) : ia.ceil(e)
}
function fL(e, t) {
	return ((e = DR(e)), Ie(ia.count(en(e), e) + (en(e).getDay() === 4), t, 2))
}
function dL(e) {
	return e.getDay()
}
function hL(e, t) {
	return Ie(bo.count(en(e) - 1, e), t, 2)
}
function pL(e, t) {
	return Ie(e.getFullYear() % 100, t, 2)
}
function gL(e, t) {
	return ((e = DR(e)), Ie(e.getFullYear() % 100, t, 2))
}
function mL(e, t) {
	return Ie(e.getFullYear() % 1e4, t, 4)
}
function vL(e, t) {
	var r = e.getDay()
	return (
		(e = r >= 4 || r === 0 ? ia(e) : ia.ceil(e)),
		Ie(e.getFullYear() % 1e4, t, 4)
	)
}
function yL(e) {
	var t = e.getTimezoneOffset()
	return (
		(t > 0 ? '-' : ((t *= -1), '+')) +
		Ie((t / 60) | 0, '0', 2) +
		Ie(t % 60, '0', 2)
	)
}
function _w(e, t) {
	return Ie(e.getUTCDate(), t, 2)
}
function _L(e, t) {
	return Ie(e.getUTCHours(), t, 2)
}
function bL(e, t) {
	return Ie(e.getUTCHours() % 12 || 12, t, 2)
}
function wL(e, t) {
	return Ie(1 + Qo.count(tn(e), e), t, 3)
}
function NR(e, t) {
	return Ie(e.getUTCMilliseconds(), t, 3)
}
function SL(e, t) {
	return NR(e, t) + '000'
}
function xL(e, t) {
	return Ie(e.getUTCMonth() + 1, t, 2)
}
function RL(e, t) {
	return Ie(e.getUTCMinutes(), t, 2)
}
function OL(e, t) {
	return Ie(e.getUTCSeconds(), t, 2)
}
function CL(e) {
	var t = e.getUTCDay()
	return t === 0 ? 7 : t
}
function TL(e, t) {
	return Ie(Yo.count(tn(e) - 1, e), t, 2)
}
function LR(e) {
	var t = e.getUTCDay()
	return t >= 4 || t === 0 ? aa(e) : aa.ceil(e)
}
function EL(e, t) {
	return ((e = LR(e)), Ie(aa.count(tn(e), e) + (tn(e).getUTCDay() === 4), t, 2))
}
function AL(e) {
	return e.getUTCDay()
}
function ML(e, t) {
	return Ie(wo.count(tn(e) - 1, e), t, 2)
}
function PL(e, t) {
	return Ie(e.getUTCFullYear() % 100, t, 2)
}
function IL(e, t) {
	return ((e = LR(e)), Ie(e.getUTCFullYear() % 100, t, 2))
}
function kL(e, t) {
	return Ie(e.getUTCFullYear() % 1e4, t, 4)
}
function qL(e, t) {
	var r = e.getUTCDay()
	return (
		(e = r >= 4 || r === 0 ? aa(e) : aa.ceil(e)),
		Ie(e.getUTCFullYear() % 1e4, t, 4)
	)
}
function $L() {
	return '+0000'
}
function bw() {
	return '%'
}
function ww(e) {
	return +e
}
function Sw(e) {
	return Math.floor(+e / 1e3)
}
var Fi, jR, UR
FL({
	dateTime: '%x, %X',
	date: '%-m/%-d/%Y',
	time: '%-I:%M:%S %p',
	periods: ['AM', 'PM'],
	days: [
		'Sunday',
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday'
	],
	shortDays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
	months: [
		'January',
		'February',
		'March',
		'April',
		'May',
		'June',
		'July',
		'August',
		'September',
		'October',
		'November',
		'December'
	],
	shortMonths: [
		'Jan',
		'Feb',
		'Mar',
		'Apr',
		'May',
		'Jun',
		'Jul',
		'Aug',
		'Sep',
		'Oct',
		'Nov',
		'Dec'
	]
})
function FL(e) {
	return (
		(Fi = FN(e)),
		(jR = Fi.format),
		Fi.parse,
		(UR = Fi.utcFormat),
		Fi.utcParse,
		Fi
	)
}
function DL(e) {
	return new Date(e)
}
function NL(e) {
	return e instanceof Date ? +e : +new Date(+e)
}
function Ag(e, t, r, n, i, a, s, o, u, l) {
	var f = gg(),
		c = f.invert,
		d = f.domain,
		h = l('.%L'),
		g = l(':%S'),
		p = l('%I:%M'),
		m = l('%I %p'),
		v = l('%a %d'),
		_ = l('%b %d'),
		w = l('%B'),
		x = l('%Y')
	function E(R) {
		return (
			u(R) < R
				? h
				: o(R) < R
					? g
					: s(R) < R
						? p
						: a(R) < R
							? m
							: n(R) < R
								? i(R) < R
									? v
									: _
								: r(R) < R
									? w
									: x
		)(R)
	}
	return (
		(f.invert = function (R) {
			return new Date(c(R))
		}),
		(f.domain = function (R) {
			return arguments.length ? d(Array.from(R, NL)) : d().map(DL)
		}),
		(f.ticks = function (R) {
			var S = d()
			return e(S[0], S[S.length - 1], R ?? 10)
		}),
		(f.tickFormat = function (R, S) {
			return S == null ? E : l(S)
		}),
		(f.nice = function (R) {
			var S = d()
			return (
				(!R || typeof R.range != 'function') &&
					(R = t(S[0], S[S.length - 1], R ?? 10)),
				R ? d(TR(S, R)) : f
			)
		}),
		(f.copy = function () {
			return ds(f, Ag(e, t, r, n, i, a, s, o, u, l))
		}),
		f
	)
}
function LL() {
	return Xt.apply(
		Ag(qN, $N, en, Tg, Zo, hs, Og, xg, ai, jR).domain([
			new Date(2e3, 0, 1),
			new Date(2e3, 0, 2)
		]),
		arguments
	)
}
function jL() {
	return Xt.apply(
		Ag(IN, kN, tn, Eg, Yo, Qo, Cg, Rg, ai, UR).domain([
			Date.UTC(2e3, 0, 1),
			Date.UTC(2e3, 0, 2)
		]),
		arguments
	)
}
function Jo() {
	var e = 0,
		t = 1,
		r,
		n,
		i,
		a,
		s = bt,
		o = !1,
		u
	function l(c) {
		return c == null || isNaN((c = +c))
			? u
			: s(
					i === 0
						? 0.5
						: ((c = (a(c) - r) * i), o ? Math.max(0, Math.min(1, c)) : c)
				)
	}
	;((l.domain = function (c) {
		return arguments.length
			? (([e, t] = c),
				(r = a((e = +e))),
				(n = a((t = +t))),
				(i = r === n ? 0 : 1 / (n - r)),
				l)
			: [e, t]
	}),
		(l.clamp = function (c) {
			return arguments.length ? ((o = !!c), l) : o
		}),
		(l.interpolator = function (c) {
			return arguments.length ? ((s = c), l) : s
		}))
	function f(c) {
		return function (d) {
			var h, g
			return arguments.length ? (([h, g] = d), (s = c(h, g)), l) : [s(0), s(1)]
		}
	}
	return (
		(l.range = f(ba)),
		(l.rangeRound = f(pg)),
		(l.unknown = function (c) {
			return arguments.length ? ((u = c), l) : u
		}),
		function (c) {
			return (
				(a = c),
				(r = c(e)),
				(n = c(t)),
				(i = r === n ? 0 : 1 / (n - r)),
				l
			)
		}
	)
}
function Vn(e, t) {
	return t
		.domain(e.domain())
		.interpolator(e.interpolator())
		.clamp(e.clamp())
		.unknown(e.unknown())
}
function BR() {
	var e = Bn(Jo()(bt))
	return (
		(e.copy = function () {
			return Vn(e, BR())
		}),
		ln.apply(e, arguments)
	)
}
function VR() {
	var e = yg(Jo()).domain([1, 10])
	return (
		(e.copy = function () {
			return Vn(e, VR()).base(e.base())
		}),
		ln.apply(e, arguments)
	)
}
function zR() {
	var e = _g(Jo())
	return (
		(e.copy = function () {
			return Vn(e, zR()).constant(e.constant())
		}),
		ln.apply(e, arguments)
	)
}
function Mg() {
	var e = bg(Jo())
	return (
		(e.copy = function () {
			return Vn(e, Mg()).exponent(e.exponent())
		}),
		ln.apply(e, arguments)
	)
}
function UL() {
	return Mg.apply(null, arguments).exponent(0.5)
}
function HR() {
	var e = [],
		t = bt
	function r(n) {
		if (n != null && !isNaN((n = +n)))
			return t((cs(e, n, 1) - 1) / (e.length - 1))
	}
	return (
		(r.domain = function (n) {
			if (!arguments.length) return e.slice()
			e = []
			for (let i of n) i != null && !isNaN((i = +i)) && e.push(i)
			return (e.sort(In), r)
		}),
		(r.interpolator = function (n) {
			return arguments.length ? ((t = n), r) : t
		}),
		(r.range = function () {
			return e.map((n, i) => t(i / (e.length - 1)))
		}),
		(r.quantiles = function (n) {
			return Array.from({ length: n + 1 }, (i, a) => CD(e, a / n))
		}),
		(r.copy = function () {
			return HR(t).domain(e)
		}),
		ln.apply(r, arguments)
	)
}
function Xo() {
	var e = 0,
		t = 0.5,
		r = 1,
		n = 1,
		i,
		a,
		s,
		o,
		u,
		l = bt,
		f,
		c = !1,
		d
	function h(p) {
		return isNaN((p = +p))
			? d
			: ((p = 0.5 + ((p = +f(p)) - a) * (n * p < n * a ? o : u)),
				l(c ? Math.max(0, Math.min(1, p)) : p))
	}
	;((h.domain = function (p) {
		return arguments.length
			? (([e, t, r] = p),
				(i = f((e = +e))),
				(a = f((t = +t))),
				(s = f((r = +r))),
				(o = i === a ? 0 : 0.5 / (a - i)),
				(u = a === s ? 0 : 0.5 / (s - a)),
				(n = a < i ? -1 : 1),
				h)
			: [e, t, r]
	}),
		(h.clamp = function (p) {
			return arguments.length ? ((c = !!p), h) : c
		}),
		(h.interpolator = function (p) {
			return arguments.length ? ((l = p), h) : l
		}))
	function g(p) {
		return function (m) {
			var v, _, w
			return arguments.length
				? (([v, _, w] = m), (l = XD(p, [v, _, w])), h)
				: [l(0), l(0.5), l(1)]
		}
	}
	return (
		(h.range = g(ba)),
		(h.rangeRound = g(pg)),
		(h.unknown = function (p) {
			return arguments.length ? ((d = p), h) : d
		}),
		function (p) {
			return (
				(f = p),
				(i = p(e)),
				(a = p(t)),
				(s = p(r)),
				(o = i === a ? 0 : 0.5 / (a - i)),
				(u = a === s ? 0 : 0.5 / (s - a)),
				(n = a < i ? -1 : 1),
				h
			)
		}
	)
}
function GR() {
	var e = Bn(Xo()(bt))
	return (
		(e.copy = function () {
			return Vn(e, GR())
		}),
		ln.apply(e, arguments)
	)
}
function WR() {
	var e = yg(Xo()).domain([0.1, 1, 10])
	return (
		(e.copy = function () {
			return Vn(e, WR()).base(e.base())
		}),
		ln.apply(e, arguments)
	)
}
function KR() {
	var e = _g(Xo())
	return (
		(e.copy = function () {
			return Vn(e, KR()).constant(e.constant())
		}),
		ln.apply(e, arguments)
	)
}
function Pg() {
	var e = bg(Xo())
	return (
		(e.copy = function () {
			return Vn(e, Pg()).exponent(e.exponent())
		}),
		ln.apply(e, arguments)
	)
}
function BL() {
	return Pg.apply(null, arguments).exponent(0.5)
}
const mz = Object.freeze(
	Object.defineProperty(
		{
			__proto__: null,
			scaleBand: fg,
			scaleDiverging: GR,
			scaleDivergingLog: WR,
			scaleDivergingPow: Pg,
			scaleDivergingSqrt: BL,
			scaleDivergingSymlog: KR,
			scaleIdentity: CR,
			scaleImplicit: op,
			scaleLinear: OR,
			scaleLog: ER,
			scaleOrdinal: cg,
			scalePoint: AD,
			scalePow: wg,
			scaleQuantile: PR,
			scaleQuantize: IR,
			scaleRadial: MR,
			scaleSequential: BR,
			scaleSequentialLog: VR,
			scaleSequentialPow: Mg,
			scaleSequentialQuantile: HR,
			scaleSequentialSqrt: UL,
			scaleSequentialSymlog: zR,
			scaleSqrt: SN,
			scaleSymlog: AR,
			scaleThreshold: kR,
			scaleTime: LL,
			scaleUtc: jL,
			tickFormat: RR
		},
		Symbol.toStringTag,
		{ value: 'Module' }
	)
)
var $d, xw
function eu() {
	if (xw) return $d
	xw = 1
	var e = ya()
	function t(r, n, i) {
		for (var a = -1, s = r.length; ++a < s; ) {
			var o = r[a],
				u = n(o)
			if (u != null && (l === void 0 ? u === u && !e(u) : i(u, l)))
				var l = u,
					f = o
		}
		return f
	}
	return (($d = t), $d)
}
var Fd, Rw
function QR() {
	if (Rw) return Fd
	Rw = 1
	function e(t, r) {
		return t > r
	}
	return ((Fd = e), Fd)
}
var Dd, Ow
function VL() {
	if (Ow) return Dd
	Ow = 1
	var e = eu(),
		t = QR(),
		r = _a()
	function n(i) {
		return i && i.length ? e(i, r, t) : void 0
	}
	return ((Dd = n), Dd)
}
var zL = VL()
const vz = qe(zL)
var Nd, Cw
function ZR() {
	if (Cw) return Nd
	Cw = 1
	function e(t, r) {
		return t < r
	}
	return ((Nd = e), Nd)
}
var Ld, Tw
function HL() {
	if (Tw) return Ld
	Tw = 1
	var e = eu(),
		t = ZR(),
		r = _a()
	function n(i) {
		return i && i.length ? e(i, r, t) : void 0
	}
	return ((Ld = n), Ld)
}
var GL = HL()
const yz = qe(GL)
var jd, Ew
function WL() {
	if (Ew) return jd
	Ew = 1
	var e = Xp(),
		t = qr(),
		r = hR(),
		n = Et()
	function i(a, s) {
		var o = n(a) ? e : r
		return o(a, t(s, 3))
	}
	return ((jd = i), jd)
}
var Ud, Aw
function KL() {
	if (Aw) return Ud
	Aw = 1
	var e = fR(),
		t = WL()
	function r(n, i) {
		return e(t(n, i), 1)
	}
	return ((Ud = r), Ud)
}
var QL = KL()
const _z = qe(QL)
var Bd, Mw
function ZL() {
	if (Mw) return Bd
	Mw = 1
	var e = og()
	function t(r, n) {
		return e(r, n)
	}
	return ((Bd = t), Bd)
}
var YL = ZL()
const bz = qe(YL)
var wa = 1e9,
	JL = {
		precision: 20,
		rounding: 4,
		toExpNeg: -7,
		toExpPos: 21,
		LN10: '2.302585092994045684017991454684364207601101488628772976033327900967572609677352480235997205089598298341967784042286'
	},
	kg,
	He = !0,
	Yt = '[DecimalError] ',
	vi = Yt + 'Invalid argument: ',
	Ig = Yt + 'Exponent out of range: ',
	Sa = Math.floor,
	ti = Math.pow,
	XL = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
	Lt,
	ot = 1e7,
	ze = 7,
	YR = 9007199254740991,
	So = Sa(YR / ze),
	se = {}
se.absoluteValue = se.abs = function () {
	var e = new this.constructor(this)
	return (e.s && (e.s = 1), e)
}
se.comparedTo = se.cmp = function (e) {
	var t,
		r,
		n,
		i,
		a = this
	if (((e = new a.constructor(e)), a.s !== e.s)) return a.s || -e.s
	if (a.e !== e.e) return (a.e > e.e) ^ (a.s < 0) ? 1 : -1
	for (n = a.d.length, i = e.d.length, t = 0, r = n < i ? n : i; t < r; ++t)
		if (a.d[t] !== e.d[t]) return (a.d[t] > e.d[t]) ^ (a.s < 0) ? 1 : -1
	return n === i ? 0 : (n > i) ^ (a.s < 0) ? 1 : -1
}
se.decimalPlaces = se.dp = function () {
	var e = this,
		t = e.d.length - 1,
		r = (t - e.e) * ze
	if (((t = e.d[t]), t)) for (; t % 10 == 0; t /= 10) r--
	return r < 0 ? 0 : r
}
se.dividedBy = se.div = function (e) {
	return Kr(this, new this.constructor(e))
}
se.dividedToIntegerBy = se.idiv = function (e) {
	var t = this,
		r = t.constructor
	return Ne(Kr(t, new r(e), 0, 1), r.precision)
}
se.equals = se.eq = function (e) {
	return !this.cmp(e)
}
se.exponent = function () {
	return Je(this)
}
se.greaterThan = se.gt = function (e) {
	return this.cmp(e) > 0
}
se.greaterThanOrEqualTo = se.gte = function (e) {
	return this.cmp(e) >= 0
}
se.isInteger = se.isint = function () {
	return this.e > this.d.length - 2
}
se.isNegative = se.isneg = function () {
	return this.s < 0
}
se.isPositive = se.ispos = function () {
	return this.s > 0
}
se.isZero = function () {
	return this.s === 0
}
se.lessThan = se.lt = function (e) {
	return this.cmp(e) < 0
}
se.lessThanOrEqualTo = se.lte = function (e) {
	return this.cmp(e) < 1
}
se.logarithm = se.log = function (e) {
	var t,
		r = this,
		n = r.constructor,
		i = n.precision,
		a = i + 5
	if (e === void 0) e = new n(10)
	else if (((e = new n(e)), e.s < 1 || e.eq(Lt))) throw Error(Yt + 'NaN')
	if (r.s < 1) throw Error(Yt + (r.s ? 'NaN' : '-Infinity'))
	return r.eq(Lt)
		? new n(0)
		: ((He = !1), (t = Kr(Xa(r, a), Xa(e, a), a)), (He = !0), Ne(t, i))
}
se.minus = se.sub = function (e) {
	var t = this
	return (
		(e = new t.constructor(e)),
		t.s == e.s ? eO(t, e) : JR(t, ((e.s = -e.s), e))
	)
}
se.modulo = se.mod = function (e) {
	var t,
		r = this,
		n = r.constructor,
		i = n.precision
	if (((e = new n(e)), !e.s)) throw Error(Yt + 'NaN')
	return r.s
		? ((He = !1), (t = Kr(r, e, 0, 1).times(e)), (He = !0), r.minus(t))
		: Ne(new n(r), i)
}
se.naturalExponential = se.exp = function () {
	return XR(this)
}
se.naturalLogarithm = se.ln = function () {
	return Xa(this)
}
se.negated = se.neg = function () {
	var e = new this.constructor(this)
	return ((e.s = -e.s || 0), e)
}
se.plus = se.add = function (e) {
	var t = this
	return (
		(e = new t.constructor(e)),
		t.s == e.s ? JR(t, e) : eO(t, ((e.s = -e.s), e))
	)
}
se.precision = se.sd = function (e) {
	var t,
		r,
		n,
		i = this
	if (e !== void 0 && e !== !!e && e !== 1 && e !== 0) throw Error(vi + e)
	if (
		((t = Je(i) + 1), (n = i.d.length - 1), (r = n * ze + 1), (n = i.d[n]), n)
	) {
		for (; n % 10 == 0; n /= 10) r--
		for (n = i.d[0]; n >= 10; n /= 10) r++
	}
	return e && t > r ? t : r
}
se.squareRoot = se.sqrt = function () {
	var e,
		t,
		r,
		n,
		i,
		a,
		s,
		o = this,
		u = o.constructor
	if (o.s < 1) {
		if (!o.s) return new u(0)
		throw Error(Yt + 'NaN')
	}
	for (
		e = Je(o),
			He = !1,
			i = Math.sqrt(+o),
			i == 0 || i == 1 / 0
				? ((t = Or(o.d)),
					(t.length + e) % 2 == 0 && (t += '0'),
					(i = Math.sqrt(t)),
					(e = Sa((e + 1) / 2) - (e < 0 || e % 2)),
					i == 1 / 0
						? (t = '5e' + e)
						: ((t = i.toExponential()),
							(t = t.slice(0, t.indexOf('e') + 1) + e)),
					(n = new u(t)))
				: (n = new u(i.toString())),
			r = u.precision,
			i = s = r + 3;
		;
	)
		if (
			((a = n),
			(n = a.plus(Kr(o, a, s + 2)).times(0.5)),
			Or(a.d).slice(0, s) === (t = Or(n.d)).slice(0, s))
		) {
			if (((t = t.slice(s - 3, s + 1)), i == s && t == '4999')) {
				if ((Ne(a, r + 1, 0), a.times(a).eq(o))) {
					n = a
					break
				}
			} else if (t != '9999') break
			s += 4
		}
	return ((He = !0), Ne(n, r))
}
se.times = se.mul = function (e) {
	var t,
		r,
		n,
		i,
		a,
		s,
		o,
		u,
		l,
		f = this,
		c = f.constructor,
		d = f.d,
		h = (e = new c(e)).d
	if (!f.s || !e.s) return new c(0)
	for (
		e.s *= f.s,
			r = f.e + e.e,
			u = d.length,
			l = h.length,
			u < l && ((a = d), (d = h), (h = a), (s = u), (u = l), (l = s)),
			a = [],
			s = u + l,
			n = s;
		n--;
	)
		a.push(0)
	for (n = l; --n >= 0; ) {
		for (t = 0, i = u + n; i > n; )
			((o = a[i] + h[n] * d[i - n - 1] + t),
				(a[i--] = (o % ot) | 0),
				(t = (o / ot) | 0))
		a[i] = ((a[i] + t) % ot) | 0
	}
	for (; !a[--s]; ) a.pop()
	return (
		t ? ++r : a.shift(),
		(e.d = a),
		(e.e = r),
		He ? Ne(e, c.precision) : e
	)
}
se.toDecimalPlaces = se.todp = function (e, t) {
	var r = this,
		n = r.constructor
	return (
		(r = new n(r)),
		e === void 0
			? r
			: (Mr(e, 0, wa),
				t === void 0 ? (t = n.rounding) : Mr(t, 0, 8),
				Ne(r, e + Je(r) + 1, t))
	)
}
se.toExponential = function (e, t) {
	var r,
		n = this,
		i = n.constructor
	return (
		e === void 0
			? (r = Si(n, !0))
			: (Mr(e, 0, wa),
				t === void 0 ? (t = i.rounding) : Mr(t, 0, 8),
				(n = Ne(new i(n), e + 1, t)),
				(r = Si(n, !0, e + 1))),
		r
	)
}
se.toFixed = function (e, t) {
	var r,
		n,
		i = this,
		a = i.constructor
	return e === void 0
		? Si(i)
		: (Mr(e, 0, wa),
			t === void 0 ? (t = a.rounding) : Mr(t, 0, 8),
			(n = Ne(new a(i), e + Je(i) + 1, t)),
			(r = Si(n.abs(), !1, e + Je(n) + 1)),
			i.isneg() && !i.isZero() ? '-' + r : r)
}
se.toInteger = se.toint = function () {
	var e = this,
		t = e.constructor
	return Ne(new t(e), Je(e) + 1, t.rounding)
}
se.toNumber = function () {
	return +this
}
se.toPower = se.pow = function (e) {
	var t,
		r,
		n,
		i,
		a,
		s,
		o = this,
		u = o.constructor,
		l = 12,
		f = +(e = new u(e))
	if (!e.s) return new u(Lt)
	if (((o = new u(o)), !o.s)) {
		if (e.s < 1) throw Error(Yt + 'Infinity')
		return o
	}
	if (o.eq(Lt)) return o
	if (((n = u.precision), e.eq(Lt))) return Ne(o, n)
	if (((t = e.e), (r = e.d.length - 1), (s = t >= r), (a = o.s), s)) {
		if ((r = f < 0 ? -f : f) <= YR) {
			for (
				i = new u(Lt), t = Math.ceil(n / ze + 4), He = !1;
				r % 2 && ((i = i.times(o)), Iw(i.d, t)), (r = Sa(r / 2)), r !== 0;
			)
				((o = o.times(o)), Iw(o.d, t))
			return ((He = !0), e.s < 0 ? new u(Lt).div(i) : Ne(i, n))
		}
	} else if (a < 0) throw Error(Yt + 'NaN')
	return (
		(a = a < 0 && e.d[Math.max(t, r)] & 1 ? -1 : 1),
		(o.s = 1),
		(He = !1),
		(i = e.times(Xa(o, n + l))),
		(He = !0),
		(i = XR(i)),
		(i.s = a),
		i
	)
}
se.toPrecision = function (e, t) {
	var r,
		n,
		i = this,
		a = i.constructor
	return (
		e === void 0
			? ((r = Je(i)), (n = Si(i, r <= a.toExpNeg || r >= a.toExpPos)))
			: (Mr(e, 1, wa),
				t === void 0 ? (t = a.rounding) : Mr(t, 0, 8),
				(i = Ne(new a(i), e, t)),
				(r = Je(i)),
				(n = Si(i, e <= r || r <= a.toExpNeg, e))),
		n
	)
}
se.toSignificantDigits = se.tosd = function (e, t) {
	var r = this,
		n = r.constructor
	return (
		e === void 0
			? ((e = n.precision), (t = n.rounding))
			: (Mr(e, 1, wa), t === void 0 ? (t = n.rounding) : Mr(t, 0, 8)),
		Ne(new n(r), e, t)
	)
}
se.toString =
	se.valueOf =
	se.val =
	se.toJSON =
	se[Symbol.for('nodejs.util.inspect.custom')] =
		function () {
			var e = this,
				t = Je(e),
				r = e.constructor
			return Si(e, t <= r.toExpNeg || t >= r.toExpPos)
		}
function JR(e, t) {
	var r,
		n,
		i,
		a,
		s,
		o,
		u,
		l,
		f = e.constructor,
		c = f.precision
	if (!e.s || !t.s) return (t.s || (t = new f(e)), He ? Ne(t, c) : t)
	if (
		((u = e.d),
		(l = t.d),
		(s = e.e),
		(i = t.e),
		(u = u.slice()),
		(a = s - i),
		a)
	) {
		for (
			a < 0
				? ((n = u), (a = -a), (o = l.length))
				: ((n = l), (i = s), (o = u.length)),
				s = Math.ceil(c / ze),
				o = s > o ? s + 1 : o + 1,
				a > o && ((a = o), (n.length = 1)),
				n.reverse();
			a--;
		)
			n.push(0)
		n.reverse()
	}
	for (
		o = u.length,
			a = l.length,
			o - a < 0 && ((a = o), (n = l), (l = u), (u = n)),
			r = 0;
		a;
	)
		((r = ((u[--a] = u[a] + l[a] + r) / ot) | 0), (u[a] %= ot))
	for (r && (u.unshift(r), ++i), o = u.length; u[--o] == 0; ) u.pop()
	return ((t.d = u), (t.e = i), He ? Ne(t, c) : t)
}
function Mr(e, t, r) {
	if (e !== ~~e || e < t || e > r) throw Error(vi + e)
}
function Or(e) {
	var t,
		r,
		n,
		i = e.length - 1,
		a = '',
		s = e[0]
	if (i > 0) {
		for (a += s, t = 1; t < i; t++)
			((n = e[t] + ''), (r = ze - n.length), r && (a += vn(r)), (a += n))
		;((s = e[t]), (n = s + ''), (r = ze - n.length), r && (a += vn(r)))
	} else if (s === 0) return '0'
	for (; s % 10 === 0; ) s /= 10
	return a + s
}
var Kr = (function () {
	function e(n, i) {
		var a,
			s = 0,
			o = n.length
		for (n = n.slice(); o--; )
			((a = n[o] * i + s), (n[o] = (a % ot) | 0), (s = (a / ot) | 0))
		return (s && n.unshift(s), n)
	}
	function t(n, i, a, s) {
		var o, u
		if (a != s) u = a > s ? 1 : -1
		else
			for (o = u = 0; o < a; o++)
				if (n[o] != i[o]) {
					u = n[o] > i[o] ? 1 : -1
					break
				}
		return u
	}
	function r(n, i, a) {
		for (var s = 0; a--; )
			((n[a] -= s), (s = n[a] < i[a] ? 1 : 0), (n[a] = s * ot + n[a] - i[a]))
		for (; !n[0] && n.length > 1; ) n.shift()
	}
	return function (n, i, a, s) {
		var o,
			u,
			l,
			f,
			c,
			d,
			h,
			g,
			p,
			m,
			v,
			_,
			w,
			x,
			E,
			R,
			S,
			y,
			b = n.constructor,
			O = n.s == i.s ? 1 : -1,
			A = n.d,
			T = i.d
		if (!n.s) return new b(n)
		if (!i.s) throw Error(Yt + 'Division by zero')
		for (
			u = n.e - i.e,
				S = T.length,
				E = A.length,
				h = new b(O),
				g = h.d = [],
				l = 0;
			T[l] == (A[l] || 0);
		)
			++l
		if (
			(T[l] > (A[l] || 0) && --u,
			a == null
				? (_ = a = b.precision)
				: s
					? (_ = a + (Je(n) - Je(i)) + 1)
					: (_ = a),
			_ < 0)
		)
			return new b(0)
		if (((_ = (_ / ze + 2) | 0), (l = 0), S == 1))
			for (f = 0, T = T[0], _++; (l < E || f) && _--; l++)
				((w = f * ot + (A[l] || 0)), (g[l] = (w / T) | 0), (f = (w % T) | 0))
		else {
			for (
				f = (ot / (T[0] + 1)) | 0,
					f > 1 &&
						((T = e(T, f)), (A = e(A, f)), (S = T.length), (E = A.length)),
					x = S,
					p = A.slice(0, S),
					m = p.length;
				m < S;
			)
				p[m++] = 0
			;((y = T.slice()), y.unshift(0), (R = T[0]), T[1] >= ot / 2 && ++R)
			do
				((f = 0),
					(o = t(T, p, S, m)),
					o < 0
						? ((v = p[0]),
							S != m && (v = v * ot + (p[1] || 0)),
							(f = (v / R) | 0),
							f > 1
								? (f >= ot && (f = ot - 1),
									(c = e(T, f)),
									(d = c.length),
									(m = p.length),
									(o = t(c, p, d, m)),
									o == 1 && (f--, r(c, S < d ? y : T, d)))
								: (f == 0 && (o = f = 1), (c = T.slice())),
							(d = c.length),
							d < m && c.unshift(0),
							r(p, c, m),
							o == -1 &&
								((m = p.length),
								(o = t(T, p, S, m)),
								o < 1 && (f++, r(p, S < m ? y : T, m))),
							(m = p.length))
						: o === 0 && (f++, (p = [0])),
					(g[l++] = f),
					o && p[0] ? (p[m++] = A[x] || 0) : ((p = [A[x]]), (m = 1)))
			while ((x++ < E || p[0] !== void 0) && _--)
		}
		return (g[0] || g.shift(), (h.e = u), Ne(h, s ? a + Je(h) + 1 : a))
	}
})()
function XR(e, t) {
	var r,
		n,
		i,
		a,
		s,
		o,
		u = 0,
		l = 0,
		f = e.constructor,
		c = f.precision
	if (Je(e) > 16) throw Error(Ig + Je(e))
	if (!e.s) return new f(Lt)
	for (He = !1, o = c, s = new f(0.03125); e.abs().gte(0.1); )
		((e = e.times(s)), (l += 5))
	for (
		n = ((Math.log(ti(2, l)) / Math.LN10) * 2 + 5) | 0,
			o += n,
			r = i = a = new f(Lt),
			f.precision = o;
		;
	) {
		if (
			((i = Ne(i.times(e), o)),
			(r = r.times(++u)),
			(s = a.plus(Kr(i, r, o))),
			Or(s.d).slice(0, o) === Or(a.d).slice(0, o))
		) {
			for (; l--; ) a = Ne(a.times(a), o)
			return ((f.precision = c), t == null ? ((He = !0), Ne(a, c)) : a)
		}
		a = s
	}
}
function Je(e) {
	for (var t = e.e * ze, r = e.d[0]; r >= 10; r /= 10) t++
	return t
}
function Vd(e, t, r) {
	if (t > e.LN10.sd())
		throw (
			(He = !0),
			r && (e.precision = r),
			Error(Yt + 'LN10 precision limit exceeded')
		)
	return Ne(new e(e.LN10), t)
}
function vn(e) {
	for (var t = ''; e--; ) t += '0'
	return t
}
function Xa(e, t) {
	var r,
		n,
		i,
		a,
		s,
		o,
		u,
		l,
		f,
		c = 1,
		d = 10,
		h = e,
		g = h.d,
		p = h.constructor,
		m = p.precision
	if (h.s < 1) throw Error(Yt + (h.s ? 'NaN' : '-Infinity'))
	if (h.eq(Lt)) return new p(0)
	if ((t == null ? ((He = !1), (l = m)) : (l = t), h.eq(10)))
		return (t == null && (He = !0), Vd(p, l))
	if (
		((l += d),
		(p.precision = l),
		(r = Or(g)),
		(n = r.charAt(0)),
		(a = Je(h)),
		Math.abs(a) < 15e14)
	) {
		for (; (n < 7 && n != 1) || (n == 1 && r.charAt(1) > 3); )
			((h = h.times(e)), (r = Or(h.d)), (n = r.charAt(0)), c++)
		;((a = Je(h)),
			n > 1 ? ((h = new p('0.' + r)), a++) : (h = new p(n + '.' + r.slice(1))))
	} else
		return (
			(u = Vd(p, l + 2, m).times(a + '')),
			(h = Xa(new p(n + '.' + r.slice(1)), l - d).plus(u)),
			(p.precision = m),
			t == null ? ((He = !0), Ne(h, m)) : h
		)
	for (
		o = s = h = Kr(h.minus(Lt), h.plus(Lt), l), f = Ne(h.times(h), l), i = 3;
		;
	) {
		if (
			((s = Ne(s.times(f), l)),
			(u = o.plus(Kr(s, new p(i), l))),
			Or(u.d).slice(0, l) === Or(o.d).slice(0, l))
		)
			return (
				(o = o.times(2)),
				a !== 0 && (o = o.plus(Vd(p, l + 2, m).times(a + ''))),
				(o = Kr(o, new p(c), l)),
				(p.precision = m),
				t == null ? ((He = !0), Ne(o, m)) : o
			)
		;((o = u), (i += 2))
	}
}
function Pw(e, t) {
	var r, n, i
	for (
		(r = t.indexOf('.')) > -1 && (t = t.replace('.', '')),
			(n = t.search(/e/i)) > 0
				? (r < 0 && (r = n), (r += +t.slice(n + 1)), (t = t.substring(0, n)))
				: r < 0 && (r = t.length),
			n = 0;
		t.charCodeAt(n) === 48;
	)
		++n
	for (i = t.length; t.charCodeAt(i - 1) === 48; ) --i
	if (((t = t.slice(n, i)), t)) {
		if (
			((i -= n),
			(r = r - n - 1),
			(e.e = Sa(r / ze)),
			(e.d = []),
			(n = (r + 1) % ze),
			r < 0 && (n += ze),
			n < i)
		) {
			for (n && e.d.push(+t.slice(0, n)), i -= ze; n < i; )
				e.d.push(+t.slice(n, (n += ze)))
			;((t = t.slice(n)), (n = ze - t.length))
		} else n -= i
		for (; n--; ) t += '0'
		if ((e.d.push(+t), He && (e.e > So || e.e < -So))) throw Error(Ig + r)
	} else ((e.s = 0), (e.e = 0), (e.d = [0]))
	return e
}
function Ne(e, t, r) {
	var n,
		i,
		a,
		s,
		o,
		u,
		l,
		f,
		c = e.d
	for (s = 1, a = c[0]; a >= 10; a /= 10) s++
	if (((n = t - s), n < 0)) ((n += ze), (i = t), (l = c[(f = 0)]))
	else {
		if (((f = Math.ceil((n + 1) / ze)), (a = c.length), f >= a)) return e
		for (l = a = c[f], s = 1; a >= 10; a /= 10) s++
		;((n %= ze), (i = n - ze + s))
	}
	if (
		(r !== void 0 &&
			((a = ti(10, s - i - 1)),
			(o = ((l / a) % 10) | 0),
			(u = t < 0 || c[f + 1] !== void 0 || l % a),
			(u =
				r < 4
					? (o || u) && (r == 0 || r == (e.s < 0 ? 3 : 2))
					: o > 5 ||
						(o == 5 &&
							(r == 4 ||
								u ||
								(r == 6 &&
									((n > 0 ? (i > 0 ? l / ti(10, s - i) : 0) : c[f - 1]) % 10) &
										1) ||
								r == (e.s < 0 ? 8 : 7))))),
		t < 1 || !c[0])
	)
		return (
			u
				? ((a = Je(e)),
					(c.length = 1),
					(t = t - a - 1),
					(c[0] = ti(10, (ze - (t % ze)) % ze)),
					(e.e = Sa(-t / ze) || 0))
				: ((c.length = 1), (c[0] = e.e = e.s = 0)),
			e
		)
	if (
		(n == 0
			? ((c.length = f), (a = 1), f--)
			: ((c.length = f + 1),
				(a = ti(10, ze - n)),
				(c[f] = i > 0 ? (((l / ti(10, s - i)) % ti(10, i)) | 0) * a : 0)),
		u)
	)
		for (;;)
			if (f == 0) {
				;(c[0] += a) == ot && ((c[0] = 1), ++e.e)
				break
			} else {
				if (((c[f] += a), c[f] != ot)) break
				;((c[f--] = 0), (a = 1))
			}
	for (n = c.length; c[--n] === 0; ) c.pop()
	if (He && (e.e > So || e.e < -So)) throw Error(Ig + Je(e))
	return e
}
function eO(e, t) {
	var r,
		n,
		i,
		a,
		s,
		o,
		u,
		l,
		f,
		c,
		d = e.constructor,
		h = d.precision
	if (!e.s || !t.s)
		return (t.s ? (t.s = -t.s) : (t = new d(e)), He ? Ne(t, h) : t)
	if (
		((u = e.d),
		(c = t.d),
		(n = t.e),
		(l = e.e),
		(u = u.slice()),
		(s = l - n),
		s)
	) {
		for (
			f = s < 0,
				f
					? ((r = u), (s = -s), (o = c.length))
					: ((r = c), (n = l), (o = u.length)),
				i = Math.max(Math.ceil(h / ze), o) + 2,
				s > i && ((s = i), (r.length = 1)),
				r.reverse(),
				i = s;
			i--;
		)
			r.push(0)
		r.reverse()
	} else {
		for (i = u.length, o = c.length, f = i < o, f && (o = i), i = 0; i < o; i++)
			if (u[i] != c[i]) {
				f = u[i] < c[i]
				break
			}
		s = 0
	}
	for (
		f && ((r = u), (u = c), (c = r), (t.s = -t.s)),
			o = u.length,
			i = c.length - o;
		i > 0;
		--i
	)
		u[o++] = 0
	for (i = c.length; i > s; ) {
		if (u[--i] < c[i]) {
			for (a = i; a && u[--a] === 0; ) u[a] = ot - 1
			;(--u[a], (u[i] += ot))
		}
		u[i] -= c[i]
	}
	for (; u[--o] === 0; ) u.pop()
	for (; u[0] === 0; u.shift()) --n
	return u[0] ? ((t.d = u), (t.e = n), He ? Ne(t, h) : t) : new d(0)
}
function Si(e, t, r) {
	var n,
		i = Je(e),
		a = Or(e.d),
		s = a.length
	return (
		t
			? (r && (n = r - s) > 0
					? (a = a.charAt(0) + '.' + a.slice(1) + vn(n))
					: s > 1 && (a = a.charAt(0) + '.' + a.slice(1)),
				(a = a + (i < 0 ? 'e' : 'e+') + i))
			: i < 0
				? ((a = '0.' + vn(-i - 1) + a), r && (n = r - s) > 0 && (a += vn(n)))
				: i >= s
					? ((a += vn(i + 1 - s)),
						r && (n = r - i - 1) > 0 && (a = a + '.' + vn(n)))
					: ((n = i + 1) < s && (a = a.slice(0, n) + '.' + a.slice(n)),
						r && (n = r - s) > 0 && (i + 1 === s && (a += '.'), (a += vn(n)))),
		e.s < 0 ? '-' + a : a
	)
}
function Iw(e, t) {
	if (e.length > t) return ((e.length = t), !0)
}
function tO(e) {
	var t, r, n
	function i(a) {
		var s = this
		if (!(s instanceof i)) return new i(a)
		if (((s.constructor = i), a instanceof i)) {
			;((s.s = a.s), (s.e = a.e), (s.d = (a = a.d) ? a.slice() : a))
			return
		}
		if (typeof a == 'number') {
			if (a * 0 !== 0) throw Error(vi + a)
			if (a > 0) s.s = 1
			else if (a < 0) ((a = -a), (s.s = -1))
			else {
				;((s.s = 0), (s.e = 0), (s.d = [0]))
				return
			}
			if (a === ~~a && a < 1e7) {
				;((s.e = 0), (s.d = [a]))
				return
			}
			return Pw(s, a.toString())
		} else if (typeof a != 'string') throw Error(vi + a)
		if (
			(a.charCodeAt(0) === 45 ? ((a = a.slice(1)), (s.s = -1)) : (s.s = 1),
			XL.test(a))
		)
			Pw(s, a)
		else throw Error(vi + a)
	}
	if (
		((i.prototype = se),
		(i.ROUND_UP = 0),
		(i.ROUND_DOWN = 1),
		(i.ROUND_CEIL = 2),
		(i.ROUND_FLOOR = 3),
		(i.ROUND_HALF_UP = 4),
		(i.ROUND_HALF_DOWN = 5),
		(i.ROUND_HALF_EVEN = 6),
		(i.ROUND_HALF_CEIL = 7),
		(i.ROUND_HALF_FLOOR = 8),
		(i.clone = tO),
		(i.config = i.set = ej),
		e === void 0 && (e = {}),
		e)
	)
		for (
			n = ['precision', 'rounding', 'toExpNeg', 'toExpPos', 'LN10'], t = 0;
			t < n.length;
		)
			e.hasOwnProperty((r = n[t++])) || (e[r] = this[r])
	return (i.config(e), i)
}
function ej(e) {
	if (!e || typeof e != 'object') throw Error(Yt + 'Object expected')
	var t,
		r,
		n,
		i = [
			'precision',
			1,
			wa,
			'rounding',
			0,
			8,
			'toExpNeg',
			-1 / 0,
			0,
			'toExpPos',
			0,
			1 / 0
		]
	for (t = 0; t < i.length; t += 3)
		if ((n = e[(r = i[t])]) !== void 0)
			if (Sa(n) === n && n >= i[t + 1] && n <= i[t + 2]) this[r] = n
			else throw Error(vi + r + ': ' + n)
	if ((n = e[(r = 'LN10')]) !== void 0)
		if (n == Math.LN10) this[r] = new this(n)
		else throw Error(vi + r + ': ' + n)
	return this
}
var kg = tO(JL)
Lt = new kg(1)
const wz = kg
var tj = 'Invariant failed'
function Sz(e, t) {
	throw new Error(tj)
}
var zd, kw
function rj() {
	if (kw) return zd
	kw = 1
	function e(t) {
		var r = t == null ? 0 : t.length
		return r ? t[r - 1] : void 0
	}
	return ((zd = e), zd)
}
var nj = rj()
const xz = qe(nj)
var Hd = { exports: {} },
	Gd,
	qw
function ij() {
	if (qw) return Gd
	qw = 1
	var e = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
	return ((Gd = e), Gd)
}
var Wd, $w
function aj() {
	if ($w) return Wd
	$w = 1
	var e = ij()
	function t() {}
	function r() {}
	return (
		(r.resetWarningCache = t),
		(Wd = function () {
			function n(s, o, u, l, f, c) {
				if (c !== e) {
					var d = new Error(
						'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
					)
					throw ((d.name = 'Invariant Violation'), d)
				}
			}
			n.isRequired = n
			function i() {
				return n
			}
			var a = {
				array: n,
				bigint: n,
				bool: n,
				func: n,
				number: n,
				object: n,
				string: n,
				symbol: n,
				any: n,
				arrayOf: i,
				element: n,
				elementType: n,
				instanceOf: i,
				node: n,
				objectOf: i,
				oneOf: i,
				oneOfType: i,
				shape: i,
				exact: i,
				checkPropTypes: r,
				resetWarningCache: t
			}
			return ((a.PropTypes = a), a)
		}),
		Wd
	)
}
var Fw
function sj() {
	return (Fw || ((Fw = 1), (Hd.exports = aj()())), Hd.exports)
}
var oj = sj()
const Rz = qe(oj)
var Kd, Dw
function uj() {
	if (Dw) return Kd
	Dw = 1
	var e = eu(),
		t = QR(),
		r = qr()
	function n(i, a) {
		return i && i.length ? e(i, r(a, 2), t) : void 0
	}
	return ((Kd = n), Kd)
}
var lj = uj()
const Oz = qe(lj)
var Qd, Nw
function cj() {
	if (Nw) return Qd
	Nw = 1
	var e = eu(),
		t = qr(),
		r = ZR()
	function n(i, a) {
		return i && i.length ? e(i, t(a, 2), r) : void 0
	}
	return ((Qd = n), Qd)
}
var fj = cj()
const Cz = qe(fj)
var Zd, Lw
function dj() {
	if (Lw) return Zd
	Lw = 1
	var e = sR(),
		t = e(Object.getPrototypeOf, Object)
	return ((Zd = t), Zd)
}
var Yd, jw
function hj() {
	if (jw) return Yd
	jw = 1
	var e = on(),
		t = dj(),
		r = un(),
		n = '[object Object]',
		i = Function.prototype,
		a = Object.prototype,
		s = i.toString,
		o = a.hasOwnProperty,
		u = s.call(Object)
	function l(f) {
		if (!r(f) || e(f) != n) return !1
		var c = t(f)
		if (c === null) return !0
		var d = o.call(c, 'constructor') && c.constructor
		return typeof d == 'function' && d instanceof d && s.call(d) == u
	}
	return ((Yd = l), Yd)
}
var pj = hj()
const Tz = qe(pj)
var Jd, Uw
function gj() {
	if (Uw) return Jd
	Uw = 1
	var e = on(),
		t = un(),
		r = '[object Boolean]'
	function n(i) {
		return i === !0 || i === !1 || (t(i) && e(i) == r)
	}
	return ((Jd = n), Jd)
}
var mj = gj()
const Ez = qe(mj)
var Xd, Bw
function vj() {
	if (Bw) return Xd
	Bw = 1
	var e = Math.ceil,
		t = Math.max
	function r(n, i, a, s) {
		for (var o = -1, u = t(e((i - n) / (a || 1)), 0), l = Array(u); u--; )
			((l[s ? u : ++o] = n), (n += a))
		return l
	}
	return ((Xd = r), Xd)
}
var eh, Vw
function rO() {
	if (Vw) return eh
	Vw = 1
	var e = gR(),
		t = 1 / 0,
		r = 17976931348623157e292
	function n(i) {
		if (!i) return i === 0 ? i : 0
		if (((i = e(i)), i === t || i === -t)) {
			var a = i < 0 ? -1 : 1
			return a * r
		}
		return i === i ? i : 0
	}
	return ((eh = n), eh)
}
var th, zw
function yj() {
	if (zw) return th
	zw = 1
	var e = vj(),
		t = Wo(),
		r = rO()
	function n(i) {
		return function (a, s, o) {
			return (
				o && typeof o != 'number' && t(a, s, o) && (s = o = void 0),
				(a = r(a)),
				s === void 0 ? ((s = a), (a = 0)) : (s = r(s)),
				(o = o === void 0 ? (a < s ? 1 : -1) : r(o)),
				e(a, s, o, i)
			)
		}
	}
	return ((th = n), th)
}
var rh, Hw
function _j() {
	if (Hw) return rh
	Hw = 1
	var e = yj(),
		t = e()
	return ((rh = t), rh)
}
var bj = _j()
const Az = qe(bj)
var nh, Gw
function wj() {
	if (Gw) return nh
	Gw = 1
	var e = ug()
	function t(r, n) {
		var i
		return (
			e(r, function (a, s, o) {
				return ((i = n(a, s, o)), !i)
			}),
			!!i
		)
	}
	return ((nh = t), nh)
}
var ih, Ww
function Sj() {
	if (Ww) return ih
	Ww = 1
	var e = Xx(),
		t = qr(),
		r = wj(),
		n = Et(),
		i = Wo()
	function a(s, o, u) {
		var l = n(s) ? e : r
		return (u && i(s, o, u) && (o = void 0), l(s, t(o, 3)))
	}
	return ((ih = a), ih)
}
var xj = Sj()
const Mz = qe(xj)
var ah, Kw
function Rj() {
	if (Kw) return ah
	Kw = 1
	var e = pR()
	function t(r, n, i) {
		n == '__proto__' && e
			? e(r, n, { configurable: !0, enumerable: !0, value: i, writable: !0 })
			: (r[n] = i)
	}
	return ((ah = t), ah)
}
var sh, Qw
function Oj() {
	if (Qw) return sh
	Qw = 1
	var e = Rj(),
		t = dR(),
		r = qr()
	function n(i, a) {
		var s = {}
		return (
			(a = r(a, 3)),
			t(i, function (o, u, l) {
				e(s, u, a(o, u, l))
			}),
			s
		)
	}
	return ((sh = n), sh)
}
var Cj = Oj()
const Pz = qe(Cj)
var oh, Zw
function Tj() {
	if (Zw) return oh
	Zw = 1
	function e(t, r) {
		for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
			if (!r(t[n], n, t)) return !1
		return !0
	}
	return ((oh = e), oh)
}
var uh, Yw
function Ej() {
	if (Yw) return uh
	Yw = 1
	var e = ug()
	function t(r, n) {
		var i = !0
		return (
			e(r, function (a, s, o) {
				return ((i = !!n(a, s, o)), i)
			}),
			i
		)
	}
	return ((uh = t), uh)
}
var lh, Jw
function Aj() {
	if (Jw) return lh
	Jw = 1
	var e = Tj(),
		t = Ej(),
		r = qr(),
		n = Et(),
		i = Wo()
	function a(s, o, u) {
		var l = n(s) ? e : t
		return (u && i(s, o, u) && (o = void 0), l(s, r(o, 3)))
	}
	return ((lh = a), lh)
}
var Mj = Aj()
const Iz = qe(Mj)
var ch, Xw
function Pj() {
	if (Xw) return ch
	Xw = 1
	var e = qr(),
		t = ls(),
		r = Go()
	function n(i) {
		return function (a, s, o) {
			var u = Object(a)
			if (!t(a)) {
				var l = e(s, 3)
				;((a = r(a)),
					(s = function (c) {
						return l(u[c], c, u)
					}))
			}
			var f = i(a, s, o)
			return f > -1 ? u[l ? a[f] : f] : void 0
		}
	}
	return ((ch = n), ch)
}
var fh, e1
function Ij() {
	if (e1) return fh
	e1 = 1
	var e = rO()
	function t(r) {
		var n = e(r),
			i = n % 1
		return n === n ? (i ? n - i : n) : 0
	}
	return ((fh = t), fh)
}
var dh, t1
function kj() {
	if (t1) return dh
	t1 = 1
	var e = cR(),
		t = qr(),
		r = Ij(),
		n = Math.max
	function i(a, s, o) {
		var u = a == null ? 0 : a.length
		if (!u) return -1
		var l = o == null ? 0 : r(o)
		return (l < 0 && (l = n(u + l, 0)), e(a, t(s, 3), l))
	}
	return ((dh = i), dh)
}
var hh, r1
function qj() {
	if (r1) return hh
	r1 = 1
	var e = Pj(),
		t = kj(),
		r = e(t)
	return ((hh = r), hh)
}
qj()
var $j = Ax()
const kz = qe($j)
var ph = { exports: {} },
	n1
function Fj() {
	return (
		n1 ||
			((n1 = 1),
			(function (e) {
				var t = Object.prototype.hasOwnProperty,
					r = '~'
				function n() {}
				Object.create &&
					((n.prototype = Object.create(null)), new n().__proto__ || (r = !1))
				function i(u, l, f) {
					;((this.fn = u), (this.context = l), (this.once = f || !1))
				}
				function a(u, l, f, c, d) {
					if (typeof f != 'function')
						throw new TypeError('The listener must be a function')
					var h = new i(f, c || u, d),
						g = r ? r + l : l
					return (
						u._events[g]
							? u._events[g].fn
								? (u._events[g] = [u._events[g], h])
								: u._events[g].push(h)
							: ((u._events[g] = h), u._eventsCount++),
						u
					)
				}
				function s(u, l) {
					--u._eventsCount === 0 ? (u._events = new n()) : delete u._events[l]
				}
				function o() {
					;((this._events = new n()), (this._eventsCount = 0))
				}
				;((o.prototype.eventNames = function () {
					var l = [],
						f,
						c
					if (this._eventsCount === 0) return l
					for (c in (f = this._events))
						t.call(f, c) && l.push(r ? c.slice(1) : c)
					return Object.getOwnPropertySymbols
						? l.concat(Object.getOwnPropertySymbols(f))
						: l
				}),
					(o.prototype.listeners = function (l) {
						var f = r ? r + l : l,
							c = this._events[f]
						if (!c) return []
						if (c.fn) return [c.fn]
						for (var d = 0, h = c.length, g = new Array(h); d < h; d++)
							g[d] = c[d].fn
						return g
					}),
					(o.prototype.listenerCount = function (l) {
						var f = r ? r + l : l,
							c = this._events[f]
						return c ? (c.fn ? 1 : c.length) : 0
					}),
					(o.prototype.emit = function (l, f, c, d, h, g) {
						var p = r ? r + l : l
						if (!this._events[p]) return !1
						var m = this._events[p],
							v = arguments.length,
							_,
							w
						if (m.fn) {
							switch ((m.once && this.removeListener(l, m.fn, void 0, !0), v)) {
								case 1:
									return (m.fn.call(m.context), !0)
								case 2:
									return (m.fn.call(m.context, f), !0)
								case 3:
									return (m.fn.call(m.context, f, c), !0)
								case 4:
									return (m.fn.call(m.context, f, c, d), !0)
								case 5:
									return (m.fn.call(m.context, f, c, d, h), !0)
								case 6:
									return (m.fn.call(m.context, f, c, d, h, g), !0)
							}
							for (w = 1, _ = new Array(v - 1); w < v; w++)
								_[w - 1] = arguments[w]
							m.fn.apply(m.context, _)
						} else {
							var x = m.length,
								E
							for (w = 0; w < x; w++)
								switch (
									(m[w].once && this.removeListener(l, m[w].fn, void 0, !0), v)
								) {
									case 1:
										m[w].fn.call(m[w].context)
										break
									case 2:
										m[w].fn.call(m[w].context, f)
										break
									case 3:
										m[w].fn.call(m[w].context, f, c)
										break
									case 4:
										m[w].fn.call(m[w].context, f, c, d)
										break
									default:
										if (!_)
											for (E = 1, _ = new Array(v - 1); E < v; E++)
												_[E - 1] = arguments[E]
										m[w].fn.apply(m[w].context, _)
								}
						}
						return !0
					}),
					(o.prototype.on = function (l, f, c) {
						return a(this, l, f, c, !1)
					}),
					(o.prototype.once = function (l, f, c) {
						return a(this, l, f, c, !0)
					}),
					(o.prototype.removeListener = function (l, f, c, d) {
						var h = r ? r + l : l
						if (!this._events[h]) return this
						if (!f) return (s(this, h), this)
						var g = this._events[h]
						if (g.fn)
							g.fn === f &&
								(!d || g.once) &&
								(!c || g.context === c) &&
								s(this, h)
						else {
							for (var p = 0, m = [], v = g.length; p < v; p++)
								(g[p].fn !== f ||
									(d && !g[p].once) ||
									(c && g[p].context !== c)) &&
									m.push(g[p])
							m.length
								? (this._events[h] = m.length === 1 ? m[0] : m)
								: s(this, h)
						}
						return this
					}),
					(o.prototype.removeAllListeners = function (l) {
						var f
						return (
							l
								? ((f = r ? r + l : l), this._events[f] && s(this, f))
								: ((this._events = new n()), (this._eventsCount = 0)),
							this
						)
					}),
					(o.prototype.off = o.prototype.removeListener),
					(o.prototype.addListener = o.prototype.on),
					(o.prefixed = r),
					(o.EventEmitter = o),
					(e.exports = o))
			})(ph)),
		ph.exports
	)
}
var Dj = Fj()
const qz = qe(Dj)
/**
 * table-core
 *
 * Copyright (c) TanStack
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function An(e, t) {
	return typeof e == 'function' ? e(t) : e
}
function Ut(e, t) {
	return (r) => {
		t.setState((n) => ({ ...n, [e]: An(r, n[e]) }))
	}
}
function tu(e) {
	return e instanceof Function
}
function Nj(e) {
	return Array.isArray(e) && e.every((t) => typeof t == 'number')
}
function Lj(e, t) {
	const r = [],
		n = (i) => {
			i.forEach((a) => {
				r.push(a)
				const s = t(a)
				s != null && s.length && n(s)
			})
		}
	return (n(e), r)
}
function ge(e, t, r) {
	let n = [],
		i
	return (a) => {
		let s
		r.key && r.debug && (s = Date.now())
		const o = e(a)
		if (!(o.length !== n.length || o.some((f, c) => n[c] !== f))) return i
		n = o
		let l
		if (
			(r.key && r.debug && (l = Date.now()),
			(i = t(...o)),
			r == null || r.onChange == null || r.onChange(i),
			r.key && r.debug && r != null && r.debug())
		) {
			const f = Math.round((Date.now() - s) * 100) / 100,
				c = Math.round((Date.now() - l) * 100) / 100,
				d = c / 16,
				h = (g, p) => {
					for (g = String(g); g.length < p; ) g = ' ' + g
					return g
				}
			console.info(
				`%c⏱ ${h(c, 5)} /${h(f, 5)} ms`,
				`
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(0, Math.min(120 - 120 * d, 120))}deg 100% 31%);`,
				r == null ? void 0 : r.key
			)
		}
		return i
	}
}
function me(e, t, r, n) {
	return {
		debug: () => {
			var i
			return (i = e == null ? void 0 : e.debugAll) != null ? i : e[t]
		},
		key: !1,
		onChange: n
	}
}
function jj(e, t, r, n) {
	const i = () => {
			var s
			return (s = a.getValue()) != null ? s : e.options.renderFallbackValue
		},
		a = {
			id: `${t.id}_${r.id}`,
			row: t,
			column: r,
			getValue: () => t.getValue(n),
			renderValue: i,
			getContext: ge(
				() => [e, r, t, a],
				(s, o, u, l) => ({
					table: s,
					column: o,
					row: u,
					cell: l,
					getValue: l.getValue,
					renderValue: l.renderValue
				}),
				me(e.options, 'debugCells')
			)
		}
	return (
		e._features.forEach((s) => {
			s.createCell == null || s.createCell(a, r, t, e)
		}, {}),
		a
	)
}
function Uj(e, t, r, n) {
	var i, a
	const o = { ...e._getDefaultColumnDef(), ...t },
		u = o.accessorKey
	let l =
			(i =
				(a = o.id) != null
					? a
					: u
						? typeof String.prototype.replaceAll == 'function'
							? u.replaceAll('.', '_')
							: u.replace(/\./g, '_')
						: void 0) != null
				? i
				: typeof o.header == 'string'
					? o.header
					: void 0,
		f
	if (
		(o.accessorFn
			? (f = o.accessorFn)
			: u &&
				(u.includes('.')
					? (f = (d) => {
							let h = d
							for (const p of u.split('.')) {
								var g
								h = (g = h) == null ? void 0 : g[p]
							}
							return h
						})
					: (f = (d) => d[o.accessorKey])),
		!l)
	)
		throw new Error()
	let c = {
		id: `${String(l)}`,
		accessorFn: f,
		parent: n,
		depth: r,
		columnDef: o,
		columns: [],
		getFlatColumns: ge(
			() => [!0],
			() => {
				var d
				return [
					c,
					...((d = c.columns) == null
						? void 0
						: d.flatMap((h) => h.getFlatColumns()))
				]
			},
			me(e.options, 'debugColumns')
		),
		getLeafColumns: ge(
			() => [e._getOrderColumnsFn()],
			(d) => {
				var h
				if ((h = c.columns) != null && h.length) {
					let g = c.columns.flatMap((p) => p.getLeafColumns())
					return d(g)
				}
				return [c]
			},
			me(e.options, 'debugColumns')
		)
	}
	for (const d of e._features) d.createColumn == null || d.createColumn(c, e)
	return c
}
const dt = 'debugHeaders'
function i1(e, t, r) {
	var n
	let a = {
		id: (n = r.id) != null ? n : t.id,
		column: t,
		index: r.index,
		isPlaceholder: !!r.isPlaceholder,
		placeholderId: r.placeholderId,
		depth: r.depth,
		subHeaders: [],
		colSpan: 0,
		rowSpan: 0,
		headerGroup: null,
		getLeafHeaders: () => {
			const s = [],
				o = (u) => {
					;(u.subHeaders && u.subHeaders.length && u.subHeaders.map(o),
						s.push(u))
				}
			return (o(a), s)
		},
		getContext: () => ({ table: e, header: a, column: t })
	}
	return (
		e._features.forEach((s) => {
			s.createHeader == null || s.createHeader(a, e)
		}),
		a
	)
}
const Bj = {
	createTable: (e) => {
		;((e.getHeaderGroups = ge(
			() => [
				e.getAllColumns(),
				e.getVisibleLeafColumns(),
				e.getState().columnPinning.left,
				e.getState().columnPinning.right
			],
			(t, r, n, i) => {
				var a, s
				const o =
						(a =
							n == null
								? void 0
								: n.map((c) => r.find((d) => d.id === c)).filter(Boolean)) !=
						null
							? a
							: [],
					u =
						(s =
							i == null
								? void 0
								: i.map((c) => r.find((d) => d.id === c)).filter(Boolean)) !=
						null
							? s
							: [],
					l = r.filter(
						(c) =>
							!(n != null && n.includes(c.id)) &&
							!(i != null && i.includes(c.id))
					)
				return ks(t, [...o, ...l, ...u], e)
			},
			me(e.options, dt)
		)),
			(e.getCenterHeaderGroups = ge(
				() => [
					e.getAllColumns(),
					e.getVisibleLeafColumns(),
					e.getState().columnPinning.left,
					e.getState().columnPinning.right
				],
				(t, r, n, i) => (
					(r = r.filter(
						(a) =>
							!(n != null && n.includes(a.id)) &&
							!(i != null && i.includes(a.id))
					)),
					ks(t, r, e, 'center')
				),
				me(e.options, dt)
			)),
			(e.getLeftHeaderGroups = ge(
				() => [
					e.getAllColumns(),
					e.getVisibleLeafColumns(),
					e.getState().columnPinning.left
				],
				(t, r, n) => {
					var i
					const a =
						(i =
							n == null
								? void 0
								: n.map((s) => r.find((o) => o.id === s)).filter(Boolean)) !=
						null
							? i
							: []
					return ks(t, a, e, 'left')
				},
				me(e.options, dt)
			)),
			(e.getRightHeaderGroups = ge(
				() => [
					e.getAllColumns(),
					e.getVisibleLeafColumns(),
					e.getState().columnPinning.right
				],
				(t, r, n) => {
					var i
					const a =
						(i =
							n == null
								? void 0
								: n.map((s) => r.find((o) => o.id === s)).filter(Boolean)) !=
						null
							? i
							: []
					return ks(t, a, e, 'right')
				},
				me(e.options, dt)
			)),
			(e.getFooterGroups = ge(
				() => [e.getHeaderGroups()],
				(t) => [...t].reverse(),
				me(e.options, dt)
			)),
			(e.getLeftFooterGroups = ge(
				() => [e.getLeftHeaderGroups()],
				(t) => [...t].reverse(),
				me(e.options, dt)
			)),
			(e.getCenterFooterGroups = ge(
				() => [e.getCenterHeaderGroups()],
				(t) => [...t].reverse(),
				me(e.options, dt)
			)),
			(e.getRightFooterGroups = ge(
				() => [e.getRightHeaderGroups()],
				(t) => [...t].reverse(),
				me(e.options, dt)
			)),
			(e.getFlatHeaders = ge(
				() => [e.getHeaderGroups()],
				(t) => t.map((r) => r.headers).flat(),
				me(e.options, dt)
			)),
			(e.getLeftFlatHeaders = ge(
				() => [e.getLeftHeaderGroups()],
				(t) => t.map((r) => r.headers).flat(),
				me(e.options, dt)
			)),
			(e.getCenterFlatHeaders = ge(
				() => [e.getCenterHeaderGroups()],
				(t) => t.map((r) => r.headers).flat(),
				me(e.options, dt)
			)),
			(e.getRightFlatHeaders = ge(
				() => [e.getRightHeaderGroups()],
				(t) => t.map((r) => r.headers).flat(),
				me(e.options, dt)
			)),
			(e.getCenterLeafHeaders = ge(
				() => [e.getCenterFlatHeaders()],
				(t) =>
					t.filter((r) => {
						var n
						return !((n = r.subHeaders) != null && n.length)
					}),
				me(e.options, dt)
			)),
			(e.getLeftLeafHeaders = ge(
				() => [e.getLeftFlatHeaders()],
				(t) =>
					t.filter((r) => {
						var n
						return !((n = r.subHeaders) != null && n.length)
					}),
				me(e.options, dt)
			)),
			(e.getRightLeafHeaders = ge(
				() => [e.getRightFlatHeaders()],
				(t) =>
					t.filter((r) => {
						var n
						return !((n = r.subHeaders) != null && n.length)
					}),
				me(e.options, dt)
			)),
			(e.getLeafHeaders = ge(
				() => [
					e.getLeftHeaderGroups(),
					e.getCenterHeaderGroups(),
					e.getRightHeaderGroups()
				],
				(t, r, n) => {
					var i, a, s, o, u, l
					return [
						...((i = (a = t[0]) == null ? void 0 : a.headers) != null ? i : []),
						...((s = (o = r[0]) == null ? void 0 : o.headers) != null ? s : []),
						...((u = (l = n[0]) == null ? void 0 : l.headers) != null ? u : [])
					]
						.map((f) => f.getLeafHeaders())
						.flat()
				},
				me(e.options, dt)
			)))
	}
}
function ks(e, t, r, n) {
	var i, a
	let s = 0
	const o = function (d, h) {
		;(h === void 0 && (h = 1),
			(s = Math.max(s, h)),
			d
				.filter((g) => g.getIsVisible())
				.forEach((g) => {
					var p
					;(p = g.columns) != null && p.length && o(g.columns, h + 1)
				}, 0))
	}
	o(e)
	let u = []
	const l = (d, h) => {
			const g = {
					depth: h,
					id: [n, `${h}`].filter(Boolean).join('_'),
					headers: []
				},
				p = []
			;(d.forEach((m) => {
				const v = [...p].reverse()[0],
					_ = m.column.depth === g.depth
				let w,
					x = !1
				if (
					(_ && m.column.parent
						? (w = m.column.parent)
						: ((w = m.column), (x = !0)),
					v && (v == null ? void 0 : v.column) === w)
				)
					v.subHeaders.push(m)
				else {
					const E = i1(r, w, {
						id: [n, h, w.id, m == null ? void 0 : m.id]
							.filter(Boolean)
							.join('_'),
						isPlaceholder: x,
						placeholderId: x
							? `${p.filter((R) => R.column === w).length}`
							: void 0,
						depth: h,
						index: p.length
					})
					;(E.subHeaders.push(m), p.push(E))
				}
				;(g.headers.push(m), (m.headerGroup = g))
			}),
				u.push(g),
				h > 0 && l(p, h - 1))
		},
		f = t.map((d, h) => i1(r, d, { depth: s, index: h }))
	;(l(f, s - 1), u.reverse())
	const c = (d) =>
		d
			.filter((g) => g.column.getIsVisible())
			.map((g) => {
				let p = 0,
					m = 0,
					v = [0]
				g.subHeaders && g.subHeaders.length
					? ((v = []),
						c(g.subHeaders).forEach((w) => {
							let { colSpan: x, rowSpan: E } = w
							;((p += x), v.push(E))
						}))
					: (p = 1)
				const _ = Math.min(...v)
				return (
					(m = m + _),
					(g.colSpan = p),
					(g.rowSpan = m),
					{ colSpan: p, rowSpan: m }
				)
			})
	return (c((i = (a = u[0]) == null ? void 0 : a.headers) != null ? i : []), u)
}
const qg = (e, t, r, n, i, a, s) => {
		let o = {
			id: t,
			index: n,
			original: r,
			depth: i,
			parentId: s,
			_valuesCache: {},
			_uniqueValuesCache: {},
			getValue: (u) => {
				if (o._valuesCache.hasOwnProperty(u)) return o._valuesCache[u]
				const l = e.getColumn(u)
				if (l != null && l.accessorFn)
					return (
						(o._valuesCache[u] = l.accessorFn(o.original, n)),
						o._valuesCache[u]
					)
			},
			getUniqueValues: (u) => {
				if (o._uniqueValuesCache.hasOwnProperty(u))
					return o._uniqueValuesCache[u]
				const l = e.getColumn(u)
				if (l != null && l.accessorFn)
					return l.columnDef.getUniqueValues
						? ((o._uniqueValuesCache[u] = l.columnDef.getUniqueValues(
								o.original,
								n
							)),
							o._uniqueValuesCache[u])
						: ((o._uniqueValuesCache[u] = [o.getValue(u)]),
							o._uniqueValuesCache[u])
			},
			renderValue: (u) => {
				var l
				return (l = o.getValue(u)) != null ? l : e.options.renderFallbackValue
			},
			subRows: [],
			getLeafRows: () => Lj(o.subRows, (u) => u.subRows),
			getParentRow: () => (o.parentId ? e.getRow(o.parentId, !0) : void 0),
			getParentRows: () => {
				let u = [],
					l = o
				for (;;) {
					const f = l.getParentRow()
					if (!f) break
					;(u.push(f), (l = f))
				}
				return u.reverse()
			},
			getAllCells: ge(
				() => [e.getAllLeafColumns()],
				(u) => u.map((l) => jj(e, o, l, l.id)),
				me(e.options, 'debugRows')
			),
			_getAllCellsByColumnId: ge(
				() => [o.getAllCells()],
				(u) => u.reduce((l, f) => ((l[f.column.id] = f), l), {}),
				me(e.options, 'debugRows')
			)
		}
		for (let u = 0; u < e._features.length; u++) {
			const l = e._features[u]
			l == null || l.createRow == null || l.createRow(o, e)
		}
		return o
	},
	Vj = {
		createColumn: (e, t) => {
			;((e._getFacetedRowModel =
				t.options.getFacetedRowModel && t.options.getFacetedRowModel(t, e.id)),
				(e.getFacetedRowModel = () =>
					e._getFacetedRowModel
						? e._getFacetedRowModel()
						: t.getPreFilteredRowModel()),
				(e._getFacetedUniqueValues =
					t.options.getFacetedUniqueValues &&
					t.options.getFacetedUniqueValues(t, e.id)),
				(e.getFacetedUniqueValues = () =>
					e._getFacetedUniqueValues ? e._getFacetedUniqueValues() : new Map()),
				(e._getFacetedMinMaxValues =
					t.options.getFacetedMinMaxValues &&
					t.options.getFacetedMinMaxValues(t, e.id)),
				(e.getFacetedMinMaxValues = () => {
					if (e._getFacetedMinMaxValues) return e._getFacetedMinMaxValues()
				}))
		}
	},
	nO = (e, t, r) => {
		var n, i
		const a = r == null || (n = r.toString()) == null ? void 0 : n.toLowerCase()
		return !!(
			!(
				(i = e.getValue(t)) == null ||
				(i = i.toString()) == null ||
				(i = i.toLowerCase()) == null
			) && i.includes(a)
		)
	}
nO.autoRemove = (e) => fr(e)
const iO = (e, t, r) => {
	var n
	return !!(
		!((n = e.getValue(t)) == null || (n = n.toString()) == null) &&
		n.includes(r)
	)
}
iO.autoRemove = (e) => fr(e)
const aO = (e, t, r) => {
	var n
	return (
		((n = e.getValue(t)) == null || (n = n.toString()) == null
			? void 0
			: n.toLowerCase()) === (r == null ? void 0 : r.toLowerCase())
	)
}
aO.autoRemove = (e) => fr(e)
const sO = (e, t, r) => {
	var n
	return (n = e.getValue(t)) == null ? void 0 : n.includes(r)
}
sO.autoRemove = (e) => fr(e)
const oO = (e, t, r) =>
	!r.some((n) => {
		var i
		return !((i = e.getValue(t)) != null && i.includes(n))
	})
oO.autoRemove = (e) => fr(e) || !(e != null && e.length)
const uO = (e, t, r) =>
	r.some((n) => {
		var i
		return (i = e.getValue(t)) == null ? void 0 : i.includes(n)
	})
uO.autoRemove = (e) => fr(e) || !(e != null && e.length)
const lO = (e, t, r) => e.getValue(t) === r
lO.autoRemove = (e) => fr(e)
const cO = (e, t, r) => e.getValue(t) == r
cO.autoRemove = (e) => fr(e)
const $g = (e, t, r) => {
	let [n, i] = r
	const a = e.getValue(t)
	return a >= n && a <= i
}
$g.resolveFilterValue = (e) => {
	let [t, r] = e,
		n = typeof t != 'number' ? parseFloat(t) : t,
		i = typeof r != 'number' ? parseFloat(r) : r,
		a = t === null || Number.isNaN(n) ? -1 / 0 : n,
		s = r === null || Number.isNaN(i) ? 1 / 0 : i
	if (a > s) {
		const o = a
		;((a = s), (s = o))
	}
	return [a, s]
}
$g.autoRemove = (e) => fr(e) || (fr(e[0]) && fr(e[1]))
const jr = {
	includesString: nO,
	includesStringSensitive: iO,
	equalsString: aO,
	arrIncludes: sO,
	arrIncludesAll: oO,
	arrIncludesSome: uO,
	equals: lO,
	weakEquals: cO,
	inNumberRange: $g
}
function fr(e) {
	return e == null || e === ''
}
const zj = {
	getDefaultColumnDef: () => ({ filterFn: 'auto' }),
	getInitialState: (e) => ({ columnFilters: [], ...e }),
	getDefaultOptions: (e) => ({
		onColumnFiltersChange: Ut('columnFilters', e),
		filterFromLeafRows: !1,
		maxLeafRowFilterDepth: 100
	}),
	createColumn: (e, t) => {
		;((e.getAutoFilterFn = () => {
			const r = t.getCoreRowModel().flatRows[0],
				n = r == null ? void 0 : r.getValue(e.id)
			return typeof n == 'string'
				? jr.includesString
				: typeof n == 'number'
					? jr.inNumberRange
					: typeof n == 'boolean' || (n !== null && typeof n == 'object')
						? jr.equals
						: Array.isArray(n)
							? jr.arrIncludes
							: jr.weakEquals
		}),
			(e.getFilterFn = () => {
				var r, n
				return tu(e.columnDef.filterFn)
					? e.columnDef.filterFn
					: e.columnDef.filterFn === 'auto'
						? e.getAutoFilterFn()
						: (r =
									(n = t.options.filterFns) == null
										? void 0
										: n[e.columnDef.filterFn]) != null
							? r
							: jr[e.columnDef.filterFn]
			}),
			(e.getCanFilter = () => {
				var r, n, i
				return (
					((r = e.columnDef.enableColumnFilter) != null ? r : !0) &&
					((n = t.options.enableColumnFilters) != null ? n : !0) &&
					((i = t.options.enableFilters) != null ? i : !0) &&
					!!e.accessorFn
				)
			}),
			(e.getIsFiltered = () => e.getFilterIndex() > -1),
			(e.getFilterValue = () => {
				var r
				return (r = t.getState().columnFilters) == null ||
					(r = r.find((n) => n.id === e.id)) == null
					? void 0
					: r.value
			}),
			(e.getFilterIndex = () => {
				var r, n
				return (r =
					(n = t.getState().columnFilters) == null
						? void 0
						: n.findIndex((i) => i.id === e.id)) != null
					? r
					: -1
			}),
			(e.setFilterValue = (r) => {
				t.setColumnFilters((n) => {
					const i = e.getFilterFn(),
						a = n == null ? void 0 : n.find((f) => f.id === e.id),
						s = An(r, a ? a.value : void 0)
					if (a1(i, s, e)) {
						var o
						return (o = n == null ? void 0 : n.filter((f) => f.id !== e.id)) !=
							null
							? o
							: []
					}
					const u = { id: e.id, value: s }
					if (a) {
						var l
						return (l =
							n == null ? void 0 : n.map((f) => (f.id === e.id ? u : f))) !=
							null
							? l
							: []
					}
					return n != null && n.length ? [...n, u] : [u]
				})
			}))
	},
	createRow: (e, t) => {
		;((e.columnFilters = {}), (e.columnFiltersMeta = {}))
	},
	createTable: (e) => {
		;((e.setColumnFilters = (t) => {
			const r = e.getAllLeafColumns(),
				n = (i) => {
					var a
					return (a = An(t, i)) == null
						? void 0
						: a.filter((s) => {
								const o = r.find((u) => u.id === s.id)
								if (o) {
									const u = o.getFilterFn()
									if (a1(u, s.value, o)) return !1
								}
								return !0
							})
				}
			e.options.onColumnFiltersChange == null ||
				e.options.onColumnFiltersChange(n)
		}),
			(e.resetColumnFilters = (t) => {
				var r, n
				e.setColumnFilters(
					t
						? []
						: (r = (n = e.initialState) == null ? void 0 : n.columnFilters) !=
							  null
							? r
							: []
				)
			}),
			(e.getPreFilteredRowModel = () => e.getCoreRowModel()),
			(e.getFilteredRowModel = () => (
				!e._getFilteredRowModel &&
					e.options.getFilteredRowModel &&
					(e._getFilteredRowModel = e.options.getFilteredRowModel(e)),
				e.options.manualFiltering || !e._getFilteredRowModel
					? e.getPreFilteredRowModel()
					: e._getFilteredRowModel()
			)))
	}
}
function a1(e, t, r) {
	return (
		(e && e.autoRemove ? e.autoRemove(t, r) : !1) ||
		typeof t > 'u' ||
		(typeof t == 'string' && !t)
	)
}
const Hj = (e, t, r) =>
		r.reduce((n, i) => {
			const a = i.getValue(e)
			return n + (typeof a == 'number' ? a : 0)
		}, 0),
	Gj = (e, t, r) => {
		let n
		return (
			r.forEach((i) => {
				const a = i.getValue(e)
				a != null && (n > a || (n === void 0 && a >= a)) && (n = a)
			}),
			n
		)
	},
	Wj = (e, t, r) => {
		let n
		return (
			r.forEach((i) => {
				const a = i.getValue(e)
				a != null && (n < a || (n === void 0 && a >= a)) && (n = a)
			}),
			n
		)
	},
	Kj = (e, t, r) => {
		let n, i
		return (
			r.forEach((a) => {
				const s = a.getValue(e)
				s != null &&
					(n === void 0
						? s >= s && (n = i = s)
						: (n > s && (n = s), i < s && (i = s)))
			}),
			[n, i]
		)
	},
	Qj = (e, t) => {
		let r = 0,
			n = 0
		if (
			(t.forEach((i) => {
				let a = i.getValue(e)
				a != null && (a = +a) >= a && (++r, (n += a))
			}),
			r)
		)
			return n / r
	},
	Zj = (e, t) => {
		if (!t.length) return
		const r = t.map((a) => a.getValue(e))
		if (!Nj(r)) return
		if (r.length === 1) return r[0]
		const n = Math.floor(r.length / 2),
			i = r.sort((a, s) => a - s)
		return r.length % 2 !== 0 ? i[n] : (i[n - 1] + i[n]) / 2
	},
	Yj = (e, t) => Array.from(new Set(t.map((r) => r.getValue(e))).values()),
	Jj = (e, t) => new Set(t.map((r) => r.getValue(e))).size,
	Xj = (e, t) => t.length,
	gh = {
		sum: Hj,
		min: Gj,
		max: Wj,
		extent: Kj,
		mean: Qj,
		median: Zj,
		unique: Yj,
		uniqueCount: Jj,
		count: Xj
	},
	e2 = {
		getDefaultColumnDef: () => ({
			aggregatedCell: (e) => {
				var t, r
				return (t =
					(r = e.getValue()) == null || r.toString == null
						? void 0
						: r.toString()) != null
					? t
					: null
			},
			aggregationFn: 'auto'
		}),
		getInitialState: (e) => ({ grouping: [], ...e }),
		getDefaultOptions: (e) => ({
			onGroupingChange: Ut('grouping', e),
			groupedColumnMode: 'reorder'
		}),
		createColumn: (e, t) => {
			;((e.toggleGrouping = () => {
				t.setGrouping((r) =>
					r != null && r.includes(e.id)
						? r.filter((n) => n !== e.id)
						: [...(r ?? []), e.id]
				)
			}),
				(e.getCanGroup = () => {
					var r, n
					return (
						((r = e.columnDef.enableGrouping) != null ? r : !0) &&
						((n = t.options.enableGrouping) != null ? n : !0) &&
						(!!e.accessorFn || !!e.columnDef.getGroupingValue)
					)
				}),
				(e.getIsGrouped = () => {
					var r
					return (r = t.getState().grouping) == null ? void 0 : r.includes(e.id)
				}),
				(e.getGroupedIndex = () => {
					var r
					return (r = t.getState().grouping) == null ? void 0 : r.indexOf(e.id)
				}),
				(e.getToggleGroupingHandler = () => {
					const r = e.getCanGroup()
					return () => {
						r && e.toggleGrouping()
					}
				}),
				(e.getAutoAggregationFn = () => {
					const r = t.getCoreRowModel().flatRows[0],
						n = r == null ? void 0 : r.getValue(e.id)
					if (typeof n == 'number') return gh.sum
					if (Object.prototype.toString.call(n) === '[object Date]')
						return gh.extent
				}),
				(e.getAggregationFn = () => {
					var r, n
					if (!e) throw new Error()
					return tu(e.columnDef.aggregationFn)
						? e.columnDef.aggregationFn
						: e.columnDef.aggregationFn === 'auto'
							? e.getAutoAggregationFn()
							: (r =
										(n = t.options.aggregationFns) == null
											? void 0
											: n[e.columnDef.aggregationFn]) != null
								? r
								: gh[e.columnDef.aggregationFn]
				}))
		},
		createTable: (e) => {
			;((e.setGrouping = (t) =>
				e.options.onGroupingChange == null
					? void 0
					: e.options.onGroupingChange(t)),
				(e.resetGrouping = (t) => {
					var r, n
					e.setGrouping(
						t
							? []
							: (r = (n = e.initialState) == null ? void 0 : n.grouping) != null
								? r
								: []
					)
				}),
				(e.getPreGroupedRowModel = () => e.getFilteredRowModel()),
				(e.getGroupedRowModel = () => (
					!e._getGroupedRowModel &&
						e.options.getGroupedRowModel &&
						(e._getGroupedRowModel = e.options.getGroupedRowModel(e)),
					e.options.manualGrouping || !e._getGroupedRowModel
						? e.getPreGroupedRowModel()
						: e._getGroupedRowModel()
				)))
		},
		createRow: (e, t) => {
			;((e.getIsGrouped = () => !!e.groupingColumnId),
				(e.getGroupingValue = (r) => {
					if (e._groupingValuesCache.hasOwnProperty(r))
						return e._groupingValuesCache[r]
					const n = t.getColumn(r)
					return n != null && n.columnDef.getGroupingValue
						? ((e._groupingValuesCache[r] = n.columnDef.getGroupingValue(
								e.original
							)),
							e._groupingValuesCache[r])
						: e.getValue(r)
				}),
				(e._groupingValuesCache = {}))
		},
		createCell: (e, t, r, n) => {
			;((e.getIsGrouped = () =>
				t.getIsGrouped() && t.id === r.groupingColumnId),
				(e.getIsPlaceholder = () => !e.getIsGrouped() && t.getIsGrouped()),
				(e.getIsAggregated = () => {
					var i
					return (
						!e.getIsGrouped() &&
						!e.getIsPlaceholder() &&
						!!((i = r.subRows) != null && i.length)
					)
				}))
		}
	}
function t2(e, t, r) {
	if (!(t != null && t.length) || !r) return e
	const n = e.filter((a) => !t.includes(a.id))
	return r === 'remove'
		? n
		: [...t.map((a) => e.find((s) => s.id === a)).filter(Boolean), ...n]
}
const r2 = {
		getInitialState: (e) => ({ columnOrder: [], ...e }),
		getDefaultOptions: (e) => ({ onColumnOrderChange: Ut('columnOrder', e) }),
		createColumn: (e, t) => {
			;((e.getIndex = ge(
				(r) => [Ua(t, r)],
				(r) => r.findIndex((n) => n.id === e.id),
				me(t.options, 'debugColumns')
			)),
				(e.getIsFirstColumn = (r) => {
					var n
					return ((n = Ua(t, r)[0]) == null ? void 0 : n.id) === e.id
				}),
				(e.getIsLastColumn = (r) => {
					var n
					const i = Ua(t, r)
					return ((n = i[i.length - 1]) == null ? void 0 : n.id) === e.id
				}))
		},
		createTable: (e) => {
			;((e.setColumnOrder = (t) =>
				e.options.onColumnOrderChange == null
					? void 0
					: e.options.onColumnOrderChange(t)),
				(e.resetColumnOrder = (t) => {
					var r
					e.setColumnOrder(
						t ? [] : (r = e.initialState.columnOrder) != null ? r : []
					)
				}),
				(e._getOrderColumnsFn = ge(
					() => [
						e.getState().columnOrder,
						e.getState().grouping,
						e.options.groupedColumnMode
					],
					(t, r, n) => (i) => {
						let a = []
						if (!(t != null && t.length)) a = i
						else {
							const s = [...t],
								o = [...i]
							for (; o.length && s.length; ) {
								const u = s.shift(),
									l = o.findIndex((f) => f.id === u)
								l > -1 && a.push(o.splice(l, 1)[0])
							}
							a = [...a, ...o]
						}
						return t2(a, r, n)
					},
					me(e.options, 'debugTable')
				)))
		}
	},
	mh = () => ({ left: [], right: [] }),
	n2 = {
		getInitialState: (e) => ({ columnPinning: mh(), ...e }),
		getDefaultOptions: (e) => ({
			onColumnPinningChange: Ut('columnPinning', e)
		}),
		createColumn: (e, t) => {
			;((e.pin = (r) => {
				const n = e
					.getLeafColumns()
					.map((i) => i.id)
					.filter(Boolean)
				t.setColumnPinning((i) => {
					var a, s
					if (r === 'right') {
						var o, u
						return {
							left: ((o = i == null ? void 0 : i.left) != null ? o : []).filter(
								(c) => !(n != null && n.includes(c))
							),
							right: [
								...((u = i == null ? void 0 : i.right) != null ? u : []).filter(
									(c) => !(n != null && n.includes(c))
								),
								...n
							]
						}
					}
					if (r === 'left') {
						var l, f
						return {
							left: [
								...((l = i == null ? void 0 : i.left) != null ? l : []).filter(
									(c) => !(n != null && n.includes(c))
								),
								...n
							],
							right: ((f = i == null ? void 0 : i.right) != null
								? f
								: []
							).filter((c) => !(n != null && n.includes(c)))
						}
					}
					return {
						left: ((a = i == null ? void 0 : i.left) != null ? a : []).filter(
							(c) => !(n != null && n.includes(c))
						),
						right: ((s = i == null ? void 0 : i.right) != null ? s : []).filter(
							(c) => !(n != null && n.includes(c))
						)
					}
				})
			}),
				(e.getCanPin = () =>
					e.getLeafColumns().some((n) => {
						var i, a, s
						return (
							((i = n.columnDef.enablePinning) != null ? i : !0) &&
							((a =
								(s = t.options.enableColumnPinning) != null
									? s
									: t.options.enablePinning) != null
								? a
								: !0)
						)
					})),
				(e.getIsPinned = () => {
					const r = e.getLeafColumns().map((o) => o.id),
						{ left: n, right: i } = t.getState().columnPinning,
						a = r.some((o) => (n == null ? void 0 : n.includes(o))),
						s = r.some((o) => (i == null ? void 0 : i.includes(o)))
					return a ? 'left' : s ? 'right' : !1
				}),
				(e.getPinnedIndex = () => {
					var r, n
					const i = e.getIsPinned()
					return i
						? (r =
								(n = t.getState().columnPinning) == null || (n = n[i]) == null
									? void 0
									: n.indexOf(e.id)) != null
							? r
							: -1
						: 0
				}))
		},
		createRow: (e, t) => {
			;((e.getCenterVisibleCells = ge(
				() => [
					e._getAllVisibleCells(),
					t.getState().columnPinning.left,
					t.getState().columnPinning.right
				],
				(r, n, i) => {
					const a = [...(n ?? []), ...(i ?? [])]
					return r.filter((s) => !a.includes(s.column.id))
				},
				me(t.options, 'debugRows')
			)),
				(e.getLeftVisibleCells = ge(
					() => [e._getAllVisibleCells(), t.getState().columnPinning.left],
					(r, n) =>
						(n ?? [])
							.map((a) => r.find((s) => s.column.id === a))
							.filter(Boolean)
							.map((a) => ({ ...a, position: 'left' })),
					me(t.options, 'debugRows')
				)),
				(e.getRightVisibleCells = ge(
					() => [e._getAllVisibleCells(), t.getState().columnPinning.right],
					(r, n) =>
						(n ?? [])
							.map((a) => r.find((s) => s.column.id === a))
							.filter(Boolean)
							.map((a) => ({ ...a, position: 'right' })),
					me(t.options, 'debugRows')
				)))
		},
		createTable: (e) => {
			;((e.setColumnPinning = (t) =>
				e.options.onColumnPinningChange == null
					? void 0
					: e.options.onColumnPinningChange(t)),
				(e.resetColumnPinning = (t) => {
					var r, n
					return e.setColumnPinning(
						t
							? mh()
							: (r = (n = e.initialState) == null ? void 0 : n.columnPinning) !=
								  null
								? r
								: mh()
					)
				}),
				(e.getIsSomeColumnsPinned = (t) => {
					var r
					const n = e.getState().columnPinning
					if (!t) {
						var i, a
						return !!(
							((i = n.left) != null && i.length) ||
							((a = n.right) != null && a.length)
						)
					}
					return !!((r = n[t]) != null && r.length)
				}),
				(e.getLeftLeafColumns = ge(
					() => [e.getAllLeafColumns(), e.getState().columnPinning.left],
					(t, r) =>
						(r ?? []).map((n) => t.find((i) => i.id === n)).filter(Boolean),
					me(e.options, 'debugColumns')
				)),
				(e.getRightLeafColumns = ge(
					() => [e.getAllLeafColumns(), e.getState().columnPinning.right],
					(t, r) =>
						(r ?? []).map((n) => t.find((i) => i.id === n)).filter(Boolean),
					me(e.options, 'debugColumns')
				)),
				(e.getCenterLeafColumns = ge(
					() => [
						e.getAllLeafColumns(),
						e.getState().columnPinning.left,
						e.getState().columnPinning.right
					],
					(t, r, n) => {
						const i = [...(r ?? []), ...(n ?? [])]
						return t.filter((a) => !i.includes(a.id))
					},
					me(e.options, 'debugColumns')
				)))
		}
	}
function i2(e) {
	return e || (typeof document < 'u' ? document : null)
}
const qs = { size: 150, minSize: 20, maxSize: Number.MAX_SAFE_INTEGER },
	vh = () => ({
		startOffset: null,
		startSize: null,
		deltaOffset: null,
		deltaPercentage: null,
		isResizingColumn: !1,
		columnSizingStart: []
	}),
	a2 = {
		getDefaultColumnDef: () => qs,
		getInitialState: (e) => ({
			columnSizing: {},
			columnSizingInfo: vh(),
			...e
		}),
		getDefaultOptions: (e) => ({
			columnResizeMode: 'onEnd',
			columnResizeDirection: 'ltr',
			onColumnSizingChange: Ut('columnSizing', e),
			onColumnSizingInfoChange: Ut('columnSizingInfo', e)
		}),
		createColumn: (e, t) => {
			;((e.getSize = () => {
				var r, n, i
				const a = t.getState().columnSizing[e.id]
				return Math.min(
					Math.max(
						(r = e.columnDef.minSize) != null ? r : qs.minSize,
						(n = a ?? e.columnDef.size) != null ? n : qs.size
					),
					(i = e.columnDef.maxSize) != null ? i : qs.maxSize
				)
			}),
				(e.getStart = ge(
					(r) => [r, Ua(t, r), t.getState().columnSizing],
					(r, n) =>
						n.slice(0, e.getIndex(r)).reduce((i, a) => i + a.getSize(), 0),
					me(t.options, 'debugColumns')
				)),
				(e.getAfter = ge(
					(r) => [r, Ua(t, r), t.getState().columnSizing],
					(r, n) =>
						n.slice(e.getIndex(r) + 1).reduce((i, a) => i + a.getSize(), 0),
					me(t.options, 'debugColumns')
				)),
				(e.resetSize = () => {
					t.setColumnSizing((r) => {
						let { [e.id]: n, ...i } = r
						return i
					})
				}),
				(e.getCanResize = () => {
					var r, n
					return (
						((r = e.columnDef.enableResizing) != null ? r : !0) &&
						((n = t.options.enableColumnResizing) != null ? n : !0)
					)
				}),
				(e.getIsResizing = () =>
					t.getState().columnSizingInfo.isResizingColumn === e.id))
		},
		createHeader: (e, t) => {
			;((e.getSize = () => {
				let r = 0
				const n = (i) => {
					if (i.subHeaders.length) i.subHeaders.forEach(n)
					else {
						var a
						r += (a = i.column.getSize()) != null ? a : 0
					}
				}
				return (n(e), r)
			}),
				(e.getStart = () => {
					if (e.index > 0) {
						const r = e.headerGroup.headers[e.index - 1]
						return r.getStart() + r.getSize()
					}
					return 0
				}),
				(e.getResizeHandler = (r) => {
					const n = t.getColumn(e.column.id),
						i = n == null ? void 0 : n.getCanResize()
					return (a) => {
						if (
							!n ||
							!i ||
							(a.persist == null || a.persist(),
							yh(a) && a.touches && a.touches.length > 1)
						)
							return
						const s = e.getSize(),
							o = e
								? e
										.getLeafHeaders()
										.map((v) => [v.column.id, v.column.getSize()])
								: [[n.id, n.getSize()]],
							u = yh(a) ? Math.round(a.touches[0].clientX) : a.clientX,
							l = {},
							f = (v, _) => {
								typeof _ == 'number' &&
									(t.setColumnSizingInfo((w) => {
										var x, E
										const R =
												t.options.columnResizeDirection === 'rtl' ? -1 : 1,
											S =
												(_ -
													((x = w == null ? void 0 : w.startOffset) != null
														? x
														: 0)) *
												R,
											y = Math.max(
												S /
													((E = w == null ? void 0 : w.startSize) != null
														? E
														: 0),
												-0.999999
											)
										return (
											w.columnSizingStart.forEach((b) => {
												let [O, A] = b
												l[O] = Math.round(Math.max(A + A * y, 0) * 100) / 100
											}),
											{ ...w, deltaOffset: S, deltaPercentage: y }
										)
									}),
									(t.options.columnResizeMode === 'onChange' || v === 'end') &&
										t.setColumnSizing((w) => ({ ...w, ...l })))
							},
							c = (v) => f('move', v),
							d = (v) => {
								;(f('end', v),
									t.setColumnSizingInfo((_) => ({
										..._,
										isResizingColumn: !1,
										startOffset: null,
										startSize: null,
										deltaOffset: null,
										deltaPercentage: null,
										columnSizingStart: []
									})))
							},
							h = i2(r),
							g = {
								moveHandler: (v) => c(v.clientX),
								upHandler: (v) => {
									;(h == null ||
										h.removeEventListener('mousemove', g.moveHandler),
										h == null || h.removeEventListener('mouseup', g.upHandler),
										d(v.clientX))
								}
							},
							p = {
								moveHandler: (v) => (
									v.cancelable && (v.preventDefault(), v.stopPropagation()),
									c(v.touches[0].clientX),
									!1
								),
								upHandler: (v) => {
									var _
									;(h == null ||
										h.removeEventListener('touchmove', p.moveHandler),
										h == null || h.removeEventListener('touchend', p.upHandler),
										v.cancelable && (v.preventDefault(), v.stopPropagation()),
										d((_ = v.touches[0]) == null ? void 0 : _.clientX))
								}
							},
							m = s2() ? { passive: !1 } : !1
						;(yh(a)
							? (h == null || h.addEventListener('touchmove', p.moveHandler, m),
								h == null || h.addEventListener('touchend', p.upHandler, m))
							: (h == null || h.addEventListener('mousemove', g.moveHandler, m),
								h == null || h.addEventListener('mouseup', g.upHandler, m)),
							t.setColumnSizingInfo((v) => ({
								...v,
								startOffset: u,
								startSize: s,
								deltaOffset: 0,
								deltaPercentage: 0,
								columnSizingStart: o,
								isResizingColumn: n.id
							})))
					}
				}))
		},
		createTable: (e) => {
			;((e.setColumnSizing = (t) =>
				e.options.onColumnSizingChange == null
					? void 0
					: e.options.onColumnSizingChange(t)),
				(e.setColumnSizingInfo = (t) =>
					e.options.onColumnSizingInfoChange == null
						? void 0
						: e.options.onColumnSizingInfoChange(t)),
				(e.resetColumnSizing = (t) => {
					var r
					e.setColumnSizing(
						t ? {} : (r = e.initialState.columnSizing) != null ? r : {}
					)
				}),
				(e.resetHeaderSizeInfo = (t) => {
					var r
					e.setColumnSizingInfo(
						t ? vh() : (r = e.initialState.columnSizingInfo) != null ? r : vh()
					)
				}),
				(e.getTotalSize = () => {
					var t, r
					return (t =
						(r = e.getHeaderGroups()[0]) == null
							? void 0
							: r.headers.reduce((n, i) => n + i.getSize(), 0)) != null
						? t
						: 0
				}),
				(e.getLeftTotalSize = () => {
					var t, r
					return (t =
						(r = e.getLeftHeaderGroups()[0]) == null
							? void 0
							: r.headers.reduce((n, i) => n + i.getSize(), 0)) != null
						? t
						: 0
				}),
				(e.getCenterTotalSize = () => {
					var t, r
					return (t =
						(r = e.getCenterHeaderGroups()[0]) == null
							? void 0
							: r.headers.reduce((n, i) => n + i.getSize(), 0)) != null
						? t
						: 0
				}),
				(e.getRightTotalSize = () => {
					var t, r
					return (t =
						(r = e.getRightHeaderGroups()[0]) == null
							? void 0
							: r.headers.reduce((n, i) => n + i.getSize(), 0)) != null
						? t
						: 0
				}))
		}
	}
let $s = null
function s2() {
	if (typeof $s == 'boolean') return $s
	let e = !1
	try {
		const t = {
				get passive() {
					return ((e = !0), !1)
				}
			},
			r = () => {}
		;(window.addEventListener('test', r, t),
			window.removeEventListener('test', r))
	} catch {
		e = !1
	}
	return (($s = e), $s)
}
function yh(e) {
	return e.type === 'touchstart'
}
const o2 = {
	getInitialState: (e) => ({ columnVisibility: {}, ...e }),
	getDefaultOptions: (e) => ({
		onColumnVisibilityChange: Ut('columnVisibility', e)
	}),
	createColumn: (e, t) => {
		;((e.toggleVisibility = (r) => {
			e.getCanHide() &&
				t.setColumnVisibility((n) => ({ ...n, [e.id]: r ?? !e.getIsVisible() }))
		}),
			(e.getIsVisible = () => {
				var r, n
				const i = e.columns
				return (r = i.length
					? i.some((a) => a.getIsVisible())
					: (n = t.getState().columnVisibility) == null
						? void 0
						: n[e.id]) != null
					? r
					: !0
			}),
			(e.getCanHide = () => {
				var r, n
				return (
					((r = e.columnDef.enableHiding) != null ? r : !0) &&
					((n = t.options.enableHiding) != null ? n : !0)
				)
			}),
			(e.getToggleVisibilityHandler = () => (r) => {
				e.toggleVisibility == null || e.toggleVisibility(r.target.checked)
			}))
	},
	createRow: (e, t) => {
		;((e._getAllVisibleCells = ge(
			() => [e.getAllCells(), t.getState().columnVisibility],
			(r) => r.filter((n) => n.column.getIsVisible()),
			me(t.options, 'debugRows')
		)),
			(e.getVisibleCells = ge(
				() => [
					e.getLeftVisibleCells(),
					e.getCenterVisibleCells(),
					e.getRightVisibleCells()
				],
				(r, n, i) => [...r, ...n, ...i],
				me(t.options, 'debugRows')
			)))
	},
	createTable: (e) => {
		const t = (r, n) =>
			ge(
				() => [
					n(),
					n()
						.filter((i) => i.getIsVisible())
						.map((i) => i.id)
						.join('_')
				],
				(i) =>
					i.filter((a) => (a.getIsVisible == null ? void 0 : a.getIsVisible())),
				me(e.options, 'debugColumns')
			)
		;((e.getVisibleFlatColumns = t('getVisibleFlatColumns', () =>
			e.getAllFlatColumns()
		)),
			(e.getVisibleLeafColumns = t('getVisibleLeafColumns', () =>
				e.getAllLeafColumns()
			)),
			(e.getLeftVisibleLeafColumns = t('getLeftVisibleLeafColumns', () =>
				e.getLeftLeafColumns()
			)),
			(e.getRightVisibleLeafColumns = t('getRightVisibleLeafColumns', () =>
				e.getRightLeafColumns()
			)),
			(e.getCenterVisibleLeafColumns = t('getCenterVisibleLeafColumns', () =>
				e.getCenterLeafColumns()
			)),
			(e.setColumnVisibility = (r) =>
				e.options.onColumnVisibilityChange == null
					? void 0
					: e.options.onColumnVisibilityChange(r)),
			(e.resetColumnVisibility = (r) => {
				var n
				e.setColumnVisibility(
					r ? {} : (n = e.initialState.columnVisibility) != null ? n : {}
				)
			}),
			(e.toggleAllColumnsVisible = (r) => {
				var n
				;((r = (n = r) != null ? n : !e.getIsAllColumnsVisible()),
					e.setColumnVisibility(
						e.getAllLeafColumns().reduce(
							(i, a) => ({
								...i,
								[a.id]: r || !(a.getCanHide != null && a.getCanHide())
							}),
							{}
						)
					))
			}),
			(e.getIsAllColumnsVisible = () =>
				!e
					.getAllLeafColumns()
					.some((r) => !(r.getIsVisible != null && r.getIsVisible()))),
			(e.getIsSomeColumnsVisible = () =>
				e
					.getAllLeafColumns()
					.some((r) => (r.getIsVisible == null ? void 0 : r.getIsVisible()))),
			(e.getToggleAllColumnsVisibilityHandler = () => (r) => {
				var n
				e.toggleAllColumnsVisible((n = r.target) == null ? void 0 : n.checked)
			}))
	}
}
function Ua(e, t) {
	return t
		? t === 'center'
			? e.getCenterVisibleLeafColumns()
			: t === 'left'
				? e.getLeftVisibleLeafColumns()
				: e.getRightVisibleLeafColumns()
		: e.getVisibleLeafColumns()
}
const u2 = {
		createTable: (e) => {
			;((e._getGlobalFacetedRowModel =
				e.options.getFacetedRowModel &&
				e.options.getFacetedRowModel(e, '__global__')),
				(e.getGlobalFacetedRowModel = () =>
					e.options.manualFiltering || !e._getGlobalFacetedRowModel
						? e.getPreFilteredRowModel()
						: e._getGlobalFacetedRowModel()),
				(e._getGlobalFacetedUniqueValues =
					e.options.getFacetedUniqueValues &&
					e.options.getFacetedUniqueValues(e, '__global__')),
				(e.getGlobalFacetedUniqueValues = () =>
					e._getGlobalFacetedUniqueValues
						? e._getGlobalFacetedUniqueValues()
						: new Map()),
				(e._getGlobalFacetedMinMaxValues =
					e.options.getFacetedMinMaxValues &&
					e.options.getFacetedMinMaxValues(e, '__global__')),
				(e.getGlobalFacetedMinMaxValues = () => {
					if (e._getGlobalFacetedMinMaxValues)
						return e._getGlobalFacetedMinMaxValues()
				}))
		}
	},
	l2 = {
		getInitialState: (e) => ({ globalFilter: void 0, ...e }),
		getDefaultOptions: (e) => ({
			onGlobalFilterChange: Ut('globalFilter', e),
			globalFilterFn: 'auto',
			getColumnCanGlobalFilter: (t) => {
				var r
				const n =
					(r = e.getCoreRowModel().flatRows[0]) == null ||
					(r = r._getAllCellsByColumnId()[t.id]) == null
						? void 0
						: r.getValue()
				return typeof n == 'string' || typeof n == 'number'
			}
		}),
		createColumn: (e, t) => {
			e.getCanGlobalFilter = () => {
				var r, n, i, a
				return (
					((r = e.columnDef.enableGlobalFilter) != null ? r : !0) &&
					((n = t.options.enableGlobalFilter) != null ? n : !0) &&
					((i = t.options.enableFilters) != null ? i : !0) &&
					((a =
						t.options.getColumnCanGlobalFilter == null
							? void 0
							: t.options.getColumnCanGlobalFilter(e)) != null
						? a
						: !0) &&
					!!e.accessorFn
				)
			}
		},
		createTable: (e) => {
			;((e.getGlobalAutoFilterFn = () => jr.includesString),
				(e.getGlobalFilterFn = () => {
					var t, r
					const { globalFilterFn: n } = e.options
					return tu(n)
						? n
						: n === 'auto'
							? e.getGlobalAutoFilterFn()
							: (t = (r = e.options.filterFns) == null ? void 0 : r[n]) != null
								? t
								: jr[n]
				}),
				(e.setGlobalFilter = (t) => {
					e.options.onGlobalFilterChange == null ||
						e.options.onGlobalFilterChange(t)
				}),
				(e.resetGlobalFilter = (t) => {
					e.setGlobalFilter(t ? void 0 : e.initialState.globalFilter)
				}))
		}
	},
	c2 = {
		getInitialState: (e) => ({ expanded: {}, ...e }),
		getDefaultOptions: (e) => ({
			onExpandedChange: Ut('expanded', e),
			paginateExpandedRows: !0
		}),
		createTable: (e) => {
			let t = !1,
				r = !1
			;((e._autoResetExpanded = () => {
				var n, i
				if (!t) {
					e._queue(() => {
						t = !0
					})
					return
				}
				if (
					(n =
						(i = e.options.autoResetAll) != null
							? i
							: e.options.autoResetExpanded) != null
						? n
						: !e.options.manualExpanding
				) {
					if (r) return
					;((r = !0),
						e._queue(() => {
							;(e.resetExpanded(), (r = !1))
						}))
				}
			}),
				(e.setExpanded = (n) =>
					e.options.onExpandedChange == null
						? void 0
						: e.options.onExpandedChange(n)),
				(e.toggleAllRowsExpanded = (n) => {
					;(n ?? !e.getIsAllRowsExpanded())
						? e.setExpanded(!0)
						: e.setExpanded({})
				}),
				(e.resetExpanded = (n) => {
					var i, a
					e.setExpanded(
						n
							? {}
							: (i = (a = e.initialState) == null ? void 0 : a.expanded) != null
								? i
								: {}
					)
				}),
				(e.getCanSomeRowsExpand = () =>
					e.getPrePaginationRowModel().flatRows.some((n) => n.getCanExpand())),
				(e.getToggleAllRowsExpandedHandler = () => (n) => {
					;(n.persist == null || n.persist(), e.toggleAllRowsExpanded())
				}),
				(e.getIsSomeRowsExpanded = () => {
					const n = e.getState().expanded
					return n === !0 || Object.values(n).some(Boolean)
				}),
				(e.getIsAllRowsExpanded = () => {
					const n = e.getState().expanded
					return typeof n == 'boolean'
						? n === !0
						: !(
								!Object.keys(n).length ||
								e.getRowModel().flatRows.some((i) => !i.getIsExpanded())
							)
				}),
				(e.getExpandedDepth = () => {
					let n = 0
					return (
						(e.getState().expanded === !0
							? Object.keys(e.getRowModel().rowsById)
							: Object.keys(e.getState().expanded)
						).forEach((a) => {
							const s = a.split('.')
							n = Math.max(n, s.length)
						}),
						n
					)
				}),
				(e.getPreExpandedRowModel = () => e.getSortedRowModel()),
				(e.getExpandedRowModel = () => (
					!e._getExpandedRowModel &&
						e.options.getExpandedRowModel &&
						(e._getExpandedRowModel = e.options.getExpandedRowModel(e)),
					e.options.manualExpanding || !e._getExpandedRowModel
						? e.getPreExpandedRowModel()
						: e._getExpandedRowModel()
				)))
		},
		createRow: (e, t) => {
			;((e.toggleExpanded = (r) => {
				t.setExpanded((n) => {
					var i
					const a = n === !0 ? !0 : !!(n != null && n[e.id])
					let s = {}
					if (
						(n === !0
							? Object.keys(t.getRowModel().rowsById).forEach((o) => {
									s[o] = !0
								})
							: (s = n),
						(r = (i = r) != null ? i : !a),
						!a && r)
					)
						return { ...s, [e.id]: !0 }
					if (a && !r) {
						const { [e.id]: o, ...u } = s
						return u
					}
					return n
				})
			}),
				(e.getIsExpanded = () => {
					var r
					const n = t.getState().expanded
					return !!((r =
						t.options.getIsRowExpanded == null
							? void 0
							: t.options.getIsRowExpanded(e)) != null
						? r
						: n === !0 || (n != null && n[e.id]))
				}),
				(e.getCanExpand = () => {
					var r, n, i
					return (r =
						t.options.getRowCanExpand == null
							? void 0
							: t.options.getRowCanExpand(e)) != null
						? r
						: ((n = t.options.enableExpanding) != null ? n : !0) &&
								!!((i = e.subRows) != null && i.length)
				}),
				(e.getIsAllParentsExpanded = () => {
					let r = !0,
						n = e
					for (; r && n.parentId; )
						((n = t.getRow(n.parentId, !0)), (r = n.getIsExpanded()))
					return r
				}),
				(e.getToggleExpandedHandler = () => {
					const r = e.getCanExpand()
					return () => {
						r && e.toggleExpanded()
					}
				}))
		}
	},
	fp = 0,
	dp = 10,
	_h = () => ({ pageIndex: fp, pageSize: dp }),
	f2 = {
		getInitialState: (e) => ({
			...e,
			pagination: { ..._h(), ...(e == null ? void 0 : e.pagination) }
		}),
		getDefaultOptions: (e) => ({ onPaginationChange: Ut('pagination', e) }),
		createTable: (e) => {
			let t = !1,
				r = !1
			;((e._autoResetPageIndex = () => {
				var n, i
				if (!t) {
					e._queue(() => {
						t = !0
					})
					return
				}
				if (
					(n =
						(i = e.options.autoResetAll) != null
							? i
							: e.options.autoResetPageIndex) != null
						? n
						: !e.options.manualPagination
				) {
					if (r) return
					;((r = !0),
						e._queue(() => {
							;(e.resetPageIndex(), (r = !1))
						}))
				}
			}),
				(e.setPagination = (n) => {
					const i = (a) => An(n, a)
					return e.options.onPaginationChange == null
						? void 0
						: e.options.onPaginationChange(i)
				}),
				(e.resetPagination = (n) => {
					var i
					e.setPagination(
						n ? _h() : (i = e.initialState.pagination) != null ? i : _h()
					)
				}),
				(e.setPageIndex = (n) => {
					e.setPagination((i) => {
						let a = An(n, i.pageIndex)
						const s =
							typeof e.options.pageCount > 'u' || e.options.pageCount === -1
								? Number.MAX_SAFE_INTEGER
								: e.options.pageCount - 1
						return ((a = Math.max(0, Math.min(a, s))), { ...i, pageIndex: a })
					})
				}),
				(e.resetPageIndex = (n) => {
					var i, a
					e.setPageIndex(
						n
							? fp
							: (i =
										(a = e.initialState) == null || (a = a.pagination) == null
											? void 0
											: a.pageIndex) != null
								? i
								: fp
					)
				}),
				(e.resetPageSize = (n) => {
					var i, a
					e.setPageSize(
						n
							? dp
							: (i =
										(a = e.initialState) == null || (a = a.pagination) == null
											? void 0
											: a.pageSize) != null
								? i
								: dp
					)
				}),
				(e.setPageSize = (n) => {
					e.setPagination((i) => {
						const a = Math.max(1, An(n, i.pageSize)),
							s = i.pageSize * i.pageIndex,
							o = Math.floor(s / a)
						return { ...i, pageIndex: o, pageSize: a }
					})
				}),
				(e.setPageCount = (n) =>
					e.setPagination((i) => {
						var a
						let s = An(n, (a = e.options.pageCount) != null ? a : -1)
						return (
							typeof s == 'number' && (s = Math.max(-1, s)),
							{ ...i, pageCount: s }
						)
					})),
				(e.getPageOptions = ge(
					() => [e.getPageCount()],
					(n) => {
						let i = []
						return (
							n && n > 0 && (i = [...new Array(n)].fill(null).map((a, s) => s)),
							i
						)
					},
					me(e.options, 'debugTable')
				)),
				(e.getCanPreviousPage = () => e.getState().pagination.pageIndex > 0),
				(e.getCanNextPage = () => {
					const { pageIndex: n } = e.getState().pagination,
						i = e.getPageCount()
					return i === -1 ? !0 : i === 0 ? !1 : n < i - 1
				}),
				(e.previousPage = () => e.setPageIndex((n) => n - 1)),
				(e.nextPage = () => e.setPageIndex((n) => n + 1)),
				(e.firstPage = () => e.setPageIndex(0)),
				(e.lastPage = () => e.setPageIndex(e.getPageCount() - 1)),
				(e.getPrePaginationRowModel = () => e.getExpandedRowModel()),
				(e.getPaginationRowModel = () => (
					!e._getPaginationRowModel &&
						e.options.getPaginationRowModel &&
						(e._getPaginationRowModel = e.options.getPaginationRowModel(e)),
					e.options.manualPagination || !e._getPaginationRowModel
						? e.getPrePaginationRowModel()
						: e._getPaginationRowModel()
				)),
				(e.getPageCount = () => {
					var n
					return (n = e.options.pageCount) != null
						? n
						: Math.ceil(e.getRowCount() / e.getState().pagination.pageSize)
				}),
				(e.getRowCount = () => {
					var n
					return (n = e.options.rowCount) != null
						? n
						: e.getPrePaginationRowModel().rows.length
				}))
		}
	},
	bh = () => ({ top: [], bottom: [] }),
	d2 = {
		getInitialState: (e) => ({ rowPinning: bh(), ...e }),
		getDefaultOptions: (e) => ({ onRowPinningChange: Ut('rowPinning', e) }),
		createRow: (e, t) => {
			;((e.pin = (r, n, i) => {
				const a = n
						? e.getLeafRows().map((u) => {
								let { id: l } = u
								return l
							})
						: [],
					s = i
						? e.getParentRows().map((u) => {
								let { id: l } = u
								return l
							})
						: [],
					o = new Set([...s, e.id, ...a])
				t.setRowPinning((u) => {
					var l, f
					if (r === 'bottom') {
						var c, d
						return {
							top: ((c = u == null ? void 0 : u.top) != null ? c : []).filter(
								(p) => !(o != null && o.has(p))
							),
							bottom: [
								...((d = u == null ? void 0 : u.bottom) != null
									? d
									: []
								).filter((p) => !(o != null && o.has(p))),
								...Array.from(o)
							]
						}
					}
					if (r === 'top') {
						var h, g
						return {
							top: [
								...((h = u == null ? void 0 : u.top) != null ? h : []).filter(
									(p) => !(o != null && o.has(p))
								),
								...Array.from(o)
							],
							bottom: ((g = u == null ? void 0 : u.bottom) != null
								? g
								: []
							).filter((p) => !(o != null && o.has(p)))
						}
					}
					return {
						top: ((l = u == null ? void 0 : u.top) != null ? l : []).filter(
							(p) => !(o != null && o.has(p))
						),
						bottom: ((f = u == null ? void 0 : u.bottom) != null
							? f
							: []
						).filter((p) => !(o != null && o.has(p)))
					}
				})
			}),
				(e.getCanPin = () => {
					var r
					const { enableRowPinning: n, enablePinning: i } = t.options
					return typeof n == 'function' ? n(e) : (r = n ?? i) != null ? r : !0
				}),
				(e.getIsPinned = () => {
					const r = [e.id],
						{ top: n, bottom: i } = t.getState().rowPinning,
						a = r.some((o) => (n == null ? void 0 : n.includes(o))),
						s = r.some((o) => (i == null ? void 0 : i.includes(o)))
					return a ? 'top' : s ? 'bottom' : !1
				}),
				(e.getPinnedIndex = () => {
					var r, n
					const i = e.getIsPinned()
					if (!i) return -1
					const a =
						(r = i === 'top' ? t.getTopRows() : t.getBottomRows()) == null
							? void 0
							: r.map((s) => {
									let { id: o } = s
									return o
								})
					return (n = a == null ? void 0 : a.indexOf(e.id)) != null ? n : -1
				}))
		},
		createTable: (e) => {
			;((e.setRowPinning = (t) =>
				e.options.onRowPinningChange == null
					? void 0
					: e.options.onRowPinningChange(t)),
				(e.resetRowPinning = (t) => {
					var r, n
					return e.setRowPinning(
						t
							? bh()
							: (r = (n = e.initialState) == null ? void 0 : n.rowPinning) !=
								  null
								? r
								: bh()
					)
				}),
				(e.getIsSomeRowsPinned = (t) => {
					var r
					const n = e.getState().rowPinning
					if (!t) {
						var i, a
						return !!(
							((i = n.top) != null && i.length) ||
							((a = n.bottom) != null && a.length)
						)
					}
					return !!((r = n[t]) != null && r.length)
				}),
				(e._getPinnedRows = (t, r, n) => {
					var i
					return (
						(i = e.options.keepPinnedRows) == null || i
							? (r ?? []).map((s) => {
									const o = e.getRow(s, !0)
									return o.getIsAllParentsExpanded() ? o : null
								})
							: (r ?? []).map((s) => t.find((o) => o.id === s))
					)
						.filter(Boolean)
						.map((s) => ({ ...s, position: n }))
				}),
				(e.getTopRows = ge(
					() => [e.getRowModel().rows, e.getState().rowPinning.top],
					(t, r) => e._getPinnedRows(t, r, 'top'),
					me(e.options, 'debugRows')
				)),
				(e.getBottomRows = ge(
					() => [e.getRowModel().rows, e.getState().rowPinning.bottom],
					(t, r) => e._getPinnedRows(t, r, 'bottom'),
					me(e.options, 'debugRows')
				)),
				(e.getCenterRows = ge(
					() => [
						e.getRowModel().rows,
						e.getState().rowPinning.top,
						e.getState().rowPinning.bottom
					],
					(t, r, n) => {
						const i = new Set([...(r ?? []), ...(n ?? [])])
						return t.filter((a) => !i.has(a.id))
					},
					me(e.options, 'debugRows')
				)))
		}
	},
	h2 = {
		getInitialState: (e) => ({ rowSelection: {}, ...e }),
		getDefaultOptions: (e) => ({
			onRowSelectionChange: Ut('rowSelection', e),
			enableRowSelection: !0,
			enableMultiRowSelection: !0,
			enableSubRowSelection: !0
		}),
		createTable: (e) => {
			;((e.setRowSelection = (t) =>
				e.options.onRowSelectionChange == null
					? void 0
					: e.options.onRowSelectionChange(t)),
				(e.resetRowSelection = (t) => {
					var r
					return e.setRowSelection(
						t ? {} : (r = e.initialState.rowSelection) != null ? r : {}
					)
				}),
				(e.toggleAllRowsSelected = (t) => {
					e.setRowSelection((r) => {
						t = typeof t < 'u' ? t : !e.getIsAllRowsSelected()
						const n = { ...r },
							i = e.getPreGroupedRowModel().flatRows
						return (
							t
								? i.forEach((a) => {
										a.getCanSelect() && (n[a.id] = !0)
									})
								: i.forEach((a) => {
										delete n[a.id]
									}),
							n
						)
					})
				}),
				(e.toggleAllPageRowsSelected = (t) =>
					e.setRowSelection((r) => {
						const n = typeof t < 'u' ? t : !e.getIsAllPageRowsSelected(),
							i = { ...r }
						return (
							e.getRowModel().rows.forEach((a) => {
								hp(i, a.id, n, !0, e)
							}),
							i
						)
					})),
				(e.getPreSelectedRowModel = () => e.getCoreRowModel()),
				(e.getSelectedRowModel = ge(
					() => [e.getState().rowSelection, e.getCoreRowModel()],
					(t, r) =>
						Object.keys(t).length
							? wh(e, r)
							: { rows: [], flatRows: [], rowsById: {} },
					me(e.options, 'debugTable')
				)),
				(e.getFilteredSelectedRowModel = ge(
					() => [e.getState().rowSelection, e.getFilteredRowModel()],
					(t, r) =>
						Object.keys(t).length
							? wh(e, r)
							: { rows: [], flatRows: [], rowsById: {} },
					me(e.options, 'debugTable')
				)),
				(e.getGroupedSelectedRowModel = ge(
					() => [e.getState().rowSelection, e.getSortedRowModel()],
					(t, r) =>
						Object.keys(t).length
							? wh(e, r)
							: { rows: [], flatRows: [], rowsById: {} },
					me(e.options, 'debugTable')
				)),
				(e.getIsAllRowsSelected = () => {
					const t = e.getFilteredRowModel().flatRows,
						{ rowSelection: r } = e.getState()
					let n = !!(t.length && Object.keys(r).length)
					return (
						n && t.some((i) => i.getCanSelect() && !r[i.id]) && (n = !1),
						n
					)
				}),
				(e.getIsAllPageRowsSelected = () => {
					const t = e
							.getPaginationRowModel()
							.flatRows.filter((i) => i.getCanSelect()),
						{ rowSelection: r } = e.getState()
					let n = !!t.length
					return (n && t.some((i) => !r[i.id]) && (n = !1), n)
				}),
				(e.getIsSomeRowsSelected = () => {
					var t
					const r = Object.keys(
						(t = e.getState().rowSelection) != null ? t : {}
					).length
					return r > 0 && r < e.getFilteredRowModel().flatRows.length
				}),
				(e.getIsSomePageRowsSelected = () => {
					const t = e.getPaginationRowModel().flatRows
					return e.getIsAllPageRowsSelected()
						? !1
						: t
								.filter((r) => r.getCanSelect())
								.some((r) => r.getIsSelected() || r.getIsSomeSelected())
				}),
				(e.getToggleAllRowsSelectedHandler = () => (t) => {
					e.toggleAllRowsSelected(t.target.checked)
				}),
				(e.getToggleAllPageRowsSelectedHandler = () => (t) => {
					e.toggleAllPageRowsSelected(t.target.checked)
				}))
		},
		createRow: (e, t) => {
			;((e.toggleSelected = (r, n) => {
				const i = e.getIsSelected()
				t.setRowSelection((a) => {
					var s
					if (((r = typeof r < 'u' ? r : !i), e.getCanSelect() && i === r))
						return a
					const o = { ...a }
					return (
						hp(
							o,
							e.id,
							r,
							(s = n == null ? void 0 : n.selectChildren) != null ? s : !0,
							t
						),
						o
					)
				})
			}),
				(e.getIsSelected = () => {
					const { rowSelection: r } = t.getState()
					return Fg(e, r)
				}),
				(e.getIsSomeSelected = () => {
					const { rowSelection: r } = t.getState()
					return pp(e, r) === 'some'
				}),
				(e.getIsAllSubRowsSelected = () => {
					const { rowSelection: r } = t.getState()
					return pp(e, r) === 'all'
				}),
				(e.getCanSelect = () => {
					var r
					return typeof t.options.enableRowSelection == 'function'
						? t.options.enableRowSelection(e)
						: (r = t.options.enableRowSelection) != null
							? r
							: !0
				}),
				(e.getCanSelectSubRows = () => {
					var r
					return typeof t.options.enableSubRowSelection == 'function'
						? t.options.enableSubRowSelection(e)
						: (r = t.options.enableSubRowSelection) != null
							? r
							: !0
				}),
				(e.getCanMultiSelect = () => {
					var r
					return typeof t.options.enableMultiRowSelection == 'function'
						? t.options.enableMultiRowSelection(e)
						: (r = t.options.enableMultiRowSelection) != null
							? r
							: !0
				}),
				(e.getToggleSelectedHandler = () => {
					const r = e.getCanSelect()
					return (n) => {
						var i
						r && e.toggleSelected((i = n.target) == null ? void 0 : i.checked)
					}
				}))
		}
	},
	hp = (e, t, r, n, i) => {
		var a
		const s = i.getRow(t, !0)
		;(r
			? (s.getCanMultiSelect() || Object.keys(e).forEach((o) => delete e[o]),
				s.getCanSelect() && (e[t] = !0))
			: delete e[t],
			n &&
				(a = s.subRows) != null &&
				a.length &&
				s.getCanSelectSubRows() &&
				s.subRows.forEach((o) => hp(e, o.id, r, n, i)))
	}
function wh(e, t) {
	const r = e.getState().rowSelection,
		n = [],
		i = {},
		a = function (s, o) {
			return s
				.map((u) => {
					var l
					const f = Fg(u, r)
					if (
						(f && (n.push(u), (i[u.id] = u)),
						(l = u.subRows) != null &&
							l.length &&
							(u = { ...u, subRows: a(u.subRows) }),
						f)
					)
						return u
				})
				.filter(Boolean)
		}
	return { rows: a(t.rows), flatRows: n, rowsById: i }
}
function Fg(e, t) {
	var r
	return (r = t[e.id]) != null ? r : !1
}
function pp(e, t, r) {
	var n
	if (!((n = e.subRows) != null && n.length)) return !1
	let i = !0,
		a = !1
	return (
		e.subRows.forEach((s) => {
			if (
				!(a && !i) &&
				(s.getCanSelect() && (Fg(s, t) ? (a = !0) : (i = !1)),
				s.subRows && s.subRows.length)
			) {
				const o = pp(s, t)
				o === 'all' ? (a = !0) : (o === 'some' && (a = !0), (i = !1))
			}
		}),
		i ? 'all' : a ? 'some' : !1
	)
}
const gp = /([0-9]+)/gm,
	p2 = (e, t, r) =>
		fO(Fn(e.getValue(r)).toLowerCase(), Fn(t.getValue(r)).toLowerCase()),
	g2 = (e, t, r) => fO(Fn(e.getValue(r)), Fn(t.getValue(r))),
	m2 = (e, t, r) =>
		Dg(Fn(e.getValue(r)).toLowerCase(), Fn(t.getValue(r)).toLowerCase()),
	v2 = (e, t, r) => Dg(Fn(e.getValue(r)), Fn(t.getValue(r))),
	y2 = (e, t, r) => {
		const n = e.getValue(r),
			i = t.getValue(r)
		return n > i ? 1 : n < i ? -1 : 0
	},
	_2 = (e, t, r) => Dg(e.getValue(r), t.getValue(r))
function Dg(e, t) {
	return e === t ? 0 : e > t ? 1 : -1
}
function Fn(e) {
	return typeof e == 'number'
		? isNaN(e) || e === 1 / 0 || e === -1 / 0
			? ''
			: String(e)
		: typeof e == 'string'
			? e
			: ''
}
function fO(e, t) {
	const r = e.split(gp).filter(Boolean),
		n = t.split(gp).filter(Boolean)
	for (; r.length && n.length; ) {
		const i = r.shift(),
			a = n.shift(),
			s = parseInt(i, 10),
			o = parseInt(a, 10),
			u = [s, o].sort()
		if (isNaN(u[0])) {
			if (i > a) return 1
			if (a > i) return -1
			continue
		}
		if (isNaN(u[1])) return isNaN(s) ? -1 : 1
		if (s > o) return 1
		if (o > s) return -1
	}
	return r.length - n.length
}
const Ia = {
		alphanumeric: p2,
		alphanumericCaseSensitive: g2,
		text: m2,
		textCaseSensitive: v2,
		datetime: y2,
		basic: _2
	},
	b2 = {
		getInitialState: (e) => ({ sorting: [], ...e }),
		getDefaultColumnDef: () => ({ sortingFn: 'auto', sortUndefined: 1 }),
		getDefaultOptions: (e) => ({
			onSortingChange: Ut('sorting', e),
			isMultiSortEvent: (t) => t.shiftKey
		}),
		createColumn: (e, t) => {
			;((e.getAutoSortingFn = () => {
				const r = t.getFilteredRowModel().flatRows.slice(10)
				let n = !1
				for (const i of r) {
					const a = i == null ? void 0 : i.getValue(e.id)
					if (Object.prototype.toString.call(a) === '[object Date]')
						return Ia.datetime
					if (typeof a == 'string' && ((n = !0), a.split(gp).length > 1))
						return Ia.alphanumeric
				}
				return n ? Ia.text : Ia.basic
			}),
				(e.getAutoSortDir = () => {
					const r = t.getFilteredRowModel().flatRows[0]
					return typeof (r == null ? void 0 : r.getValue(e.id)) == 'string'
						? 'asc'
						: 'desc'
				}),
				(e.getSortingFn = () => {
					var r, n
					if (!e) throw new Error()
					return tu(e.columnDef.sortingFn)
						? e.columnDef.sortingFn
						: e.columnDef.sortingFn === 'auto'
							? e.getAutoSortingFn()
							: (r =
										(n = t.options.sortingFns) == null
											? void 0
											: n[e.columnDef.sortingFn]) != null
								? r
								: Ia[e.columnDef.sortingFn]
				}),
				(e.toggleSorting = (r, n) => {
					const i = e.getNextSortingOrder(),
						a = typeof r < 'u' && r !== null
					t.setSorting((s) => {
						const o = s == null ? void 0 : s.find((h) => h.id === e.id),
							u = s == null ? void 0 : s.findIndex((h) => h.id === e.id)
						let l = [],
							f,
							c = a ? r : i === 'desc'
						if (
							(s != null && s.length && e.getCanMultiSort() && n
								? o
									? (f = 'toggle')
									: (f = 'add')
								: s != null && s.length && u !== s.length - 1
									? (f = 'replace')
									: o
										? (f = 'toggle')
										: (f = 'replace'),
							f === 'toggle' && (a || i || (f = 'remove')),
							f === 'add')
						) {
							var d
							;((l = [...s, { id: e.id, desc: c }]),
								l.splice(
									0,
									l.length -
										((d = t.options.maxMultiSortColCount) != null
											? d
											: Number.MAX_SAFE_INTEGER)
								))
						} else
							f === 'toggle'
								? (l = s.map((h) => (h.id === e.id ? { ...h, desc: c } : h)))
								: f === 'remove'
									? (l = s.filter((h) => h.id !== e.id))
									: (l = [{ id: e.id, desc: c }])
						return l
					})
				}),
				(e.getFirstSortDir = () => {
					var r, n
					return (
						(r =
							(n = e.columnDef.sortDescFirst) != null
								? n
								: t.options.sortDescFirst) != null
							? r
							: e.getAutoSortDir() === 'desc'
					)
						? 'desc'
						: 'asc'
				}),
				(e.getNextSortingOrder = (r) => {
					var n, i
					const a = e.getFirstSortDir(),
						s = e.getIsSorted()
					return s
						? s !== a &&
							((n = t.options.enableSortingRemoval) == null || n) &&
							(!(r && (i = t.options.enableMultiRemove) != null) || i)
							? !1
							: s === 'desc'
								? 'asc'
								: 'desc'
						: a
				}),
				(e.getCanSort = () => {
					var r, n
					return (
						((r = e.columnDef.enableSorting) != null ? r : !0) &&
						((n = t.options.enableSorting) != null ? n : !0) &&
						!!e.accessorFn
					)
				}),
				(e.getCanMultiSort = () => {
					var r, n
					return (r =
						(n = e.columnDef.enableMultiSort) != null
							? n
							: t.options.enableMultiSort) != null
						? r
						: !!e.accessorFn
				}),
				(e.getIsSorted = () => {
					var r
					const n =
						(r = t.getState().sorting) == null
							? void 0
							: r.find((i) => i.id === e.id)
					return n ? (n.desc ? 'desc' : 'asc') : !1
				}),
				(e.getSortIndex = () => {
					var r, n
					return (r =
						(n = t.getState().sorting) == null
							? void 0
							: n.findIndex((i) => i.id === e.id)) != null
						? r
						: -1
				}),
				(e.clearSorting = () => {
					t.setSorting((r) =>
						r != null && r.length ? r.filter((n) => n.id !== e.id) : []
					)
				}),
				(e.getToggleSortingHandler = () => {
					const r = e.getCanSort()
					return (n) => {
						r &&
							(n.persist == null || n.persist(),
							e.toggleSorting == null ||
								e.toggleSorting(
									void 0,
									e.getCanMultiSort()
										? t.options.isMultiSortEvent == null
											? void 0
											: t.options.isMultiSortEvent(n)
										: !1
								))
					}
				}))
		},
		createTable: (e) => {
			;((e.setSorting = (t) =>
				e.options.onSortingChange == null
					? void 0
					: e.options.onSortingChange(t)),
				(e.resetSorting = (t) => {
					var r, n
					e.setSorting(
						t
							? []
							: (r = (n = e.initialState) == null ? void 0 : n.sorting) != null
								? r
								: []
					)
				}),
				(e.getPreSortedRowModel = () => e.getGroupedRowModel()),
				(e.getSortedRowModel = () => (
					!e._getSortedRowModel &&
						e.options.getSortedRowModel &&
						(e._getSortedRowModel = e.options.getSortedRowModel(e)),
					e.options.manualSorting || !e._getSortedRowModel
						? e.getPreSortedRowModel()
						: e._getSortedRowModel()
				)))
		}
	},
	w2 = [Bj, o2, r2, n2, Vj, zj, u2, l2, b2, e2, c2, f2, d2, h2, a2]
function $z(e) {
	var t, r
	const n = [...w2, ...((t = e._features) != null ? t : [])]
	let i = { _features: n }
	const a = i._features.reduce(
			(d, h) =>
				Object.assign(
					d,
					h.getDefaultOptions == null ? void 0 : h.getDefaultOptions(i)
				),
			{}
		),
		s = (d) =>
			i.options.mergeOptions ? i.options.mergeOptions(a, d) : { ...a, ...d }
	let u = { ...{}, ...((r = e.initialState) != null ? r : {}) }
	i._features.forEach((d) => {
		var h
		u =
			(h = d.getInitialState == null ? void 0 : d.getInitialState(u)) != null
				? h
				: u
	})
	const l = []
	let f = !1
	const c = {
		_features: n,
		options: { ...a, ...e },
		initialState: u,
		_queue: (d) => {
			;(l.push(d),
				f ||
					((f = !0),
					Promise.resolve()
						.then(() => {
							for (; l.length; ) l.shift()()
							f = !1
						})
						.catch((h) =>
							setTimeout(() => {
								throw h
							})
						)))
		},
		reset: () => {
			i.setState(i.initialState)
		},
		setOptions: (d) => {
			const h = An(d, i.options)
			i.options = s(h)
		},
		getState: () => i.options.state,
		setState: (d) => {
			i.options.onStateChange == null || i.options.onStateChange(d)
		},
		_getRowId: (d, h, g) => {
			var p
			return (p =
				i.options.getRowId == null ? void 0 : i.options.getRowId(d, h, g)) !=
				null
				? p
				: `${g ? [g.id, h].join('.') : h}`
		},
		getCoreRowModel: () => (
			i._getCoreRowModel || (i._getCoreRowModel = i.options.getCoreRowModel(i)),
			i._getCoreRowModel()
		),
		getRowModel: () => i.getPaginationRowModel(),
		getRow: (d, h) => {
			let g = (h ? i.getPrePaginationRowModel() : i.getRowModel()).rowsById[d]
			if (!g && ((g = i.getCoreRowModel().rowsById[d]), !g)) throw new Error()
			return g
		},
		_getDefaultColumnDef: ge(
			() => [i.options.defaultColumn],
			(d) => {
				var h
				return (
					(d = (h = d) != null ? h : {}),
					{
						header: (g) => {
							const p = g.header.column.columnDef
							return p.accessorKey ? p.accessorKey : p.accessorFn ? p.id : null
						},
						cell: (g) => {
							var p, m
							return (p =
								(m = g.renderValue()) == null || m.toString == null
									? void 0
									: m.toString()) != null
								? p
								: null
						},
						...i._features.reduce(
							(g, p) =>
								Object.assign(
									g,
									p.getDefaultColumnDef == null
										? void 0
										: p.getDefaultColumnDef()
								),
							{}
						),
						...d
					}
				)
			},
			me(e, 'debugColumns')
		),
		_getColumnDefs: () => i.options.columns,
		getAllColumns: ge(
			() => [i._getColumnDefs()],
			(d) => {
				const h = function (g, p, m) {
					return (
						m === void 0 && (m = 0),
						g.map((v) => {
							const _ = Uj(i, v, m, p),
								w = v
							return ((_.columns = w.columns ? h(w.columns, _, m + 1) : []), _)
						})
					)
				}
				return h(d)
			},
			me(e, 'debugColumns')
		),
		getAllFlatColumns: ge(
			() => [i.getAllColumns()],
			(d) => d.flatMap((h) => h.getFlatColumns()),
			me(e, 'debugColumns')
		),
		_getAllFlatColumnsById: ge(
			() => [i.getAllFlatColumns()],
			(d) => d.reduce((h, g) => ((h[g.id] = g), h), {}),
			me(e, 'debugColumns')
		),
		getAllLeafColumns: ge(
			() => [i.getAllColumns(), i._getOrderColumnsFn()],
			(d, h) => {
				let g = d.flatMap((p) => p.getLeafColumns())
				return h(g)
			},
			me(e, 'debugColumns')
		),
		getColumn: (d) => i._getAllFlatColumnsById()[d]
	}
	Object.assign(i, c)
	for (let d = 0; d < i._features.length; d++) {
		const h = i._features[d]
		h == null || h.createTable == null || h.createTable(i)
	}
	return i
}
function Fz() {
	return (e) =>
		ge(
			() => [e.options.data],
			(t) => {
				const r = { rows: [], flatRows: [], rowsById: {} },
					n = function (i, a, s) {
						a === void 0 && (a = 0)
						const o = []
						for (let l = 0; l < i.length; l++) {
							const f = qg(
								e,
								e._getRowId(i[l], l, s),
								i[l],
								l,
								a,
								void 0,
								s == null ? void 0 : s.id
							)
							if (
								(r.flatRows.push(f),
								(r.rowsById[f.id] = f),
								o.push(f),
								e.options.getSubRows)
							) {
								var u
								;((f.originalSubRows = e.options.getSubRows(i[l], l)),
									(u = f.originalSubRows) != null &&
										u.length &&
										(f.subRows = n(f.originalSubRows, a + 1, f)))
							}
						}
						return o
					}
				return ((r.rows = n(t)), r)
			},
			me(e.options, 'debugTable', 'getRowModel', () => e._autoResetPageIndex())
		)
}
function S2(e, t, r) {
	return r.options.filterFromLeafRows ? x2(e, t, r) : R2(e, t, r)
}
function x2(e, t, r) {
	var n
	const i = [],
		a = {},
		s = (n = r.options.maxLeafRowFilterDepth) != null ? n : 100,
		o = function (u, l) {
			l === void 0 && (l = 0)
			const f = []
			for (let d = 0; d < u.length; d++) {
				var c
				let h = u[d]
				const g = qg(r, h.id, h.original, h.index, h.depth, void 0, h.parentId)
				if (
					((g.columnFilters = h.columnFilters),
					(c = h.subRows) != null && c.length && l < s)
				) {
					if (
						((g.subRows = o(h.subRows, l + 1)),
						(h = g),
						t(h) && !g.subRows.length)
					) {
						;(f.push(h), (a[h.id] = h), i.push(h))
						continue
					}
					if (t(h) || g.subRows.length) {
						;(f.push(h), (a[h.id] = h), i.push(h))
						continue
					}
				} else ((h = g), t(h) && (f.push(h), (a[h.id] = h), i.push(h)))
			}
			return f
		}
	return { rows: o(e), flatRows: i, rowsById: a }
}
function R2(e, t, r) {
	var n
	const i = [],
		a = {},
		s = (n = r.options.maxLeafRowFilterDepth) != null ? n : 100,
		o = function (u, l) {
			l === void 0 && (l = 0)
			const f = []
			for (let d = 0; d < u.length; d++) {
				let h = u[d]
				if (t(h)) {
					var c
					if ((c = h.subRows) != null && c.length && l < s) {
						const p = qg(
							r,
							h.id,
							h.original,
							h.index,
							h.depth,
							void 0,
							h.parentId
						)
						;((p.subRows = o(h.subRows, l + 1)), (h = p))
					}
					;(f.push(h), i.push(h), (a[h.id] = h))
				}
			}
			return f
		}
	return { rows: o(e), flatRows: i, rowsById: a }
}
function Dz() {
	return (e) =>
		ge(
			() => [
				e.getPreFilteredRowModel(),
				e.getState().columnFilters,
				e.getState().globalFilter
			],
			(t, r, n) => {
				if (!t.rows.length || (!(r != null && r.length) && !n)) {
					for (let d = 0; d < t.flatRows.length; d++)
						((t.flatRows[d].columnFilters = {}),
							(t.flatRows[d].columnFiltersMeta = {}))
					return t
				}
				const i = [],
					a = []
				;(r ?? []).forEach((d) => {
					var h
					const g = e.getColumn(d.id)
					if (!g) return
					const p = g.getFilterFn()
					p &&
						i.push({
							id: d.id,
							filterFn: p,
							resolvedValue:
								(h =
									p.resolveFilterValue == null
										? void 0
										: p.resolveFilterValue(d.value)) != null
									? h
									: d.value
						})
				})
				const s = (r ?? []).map((d) => d.id),
					o = e.getGlobalFilterFn(),
					u = e.getAllLeafColumns().filter((d) => d.getCanGlobalFilter())
				n &&
					o &&
					u.length &&
					(s.push('__global__'),
					u.forEach((d) => {
						var h
						a.push({
							id: d.id,
							filterFn: o,
							resolvedValue:
								(h =
									o.resolveFilterValue == null
										? void 0
										: o.resolveFilterValue(n)) != null
									? h
									: n
						})
					}))
				let l, f
				for (let d = 0; d < t.flatRows.length; d++) {
					const h = t.flatRows[d]
					if (((h.columnFilters = {}), i.length))
						for (let g = 0; g < i.length; g++) {
							l = i[g]
							const p = l.id
							h.columnFilters[p] = l.filterFn(h, p, l.resolvedValue, (m) => {
								h.columnFiltersMeta[p] = m
							})
						}
					if (a.length) {
						for (let g = 0; g < a.length; g++) {
							f = a[g]
							const p = f.id
							if (
								f.filterFn(h, p, f.resolvedValue, (m) => {
									h.columnFiltersMeta[p] = m
								})
							) {
								h.columnFilters.__global__ = !0
								break
							}
						}
						h.columnFilters.__global__ !== !0 &&
							(h.columnFilters.__global__ = !1)
					}
				}
				const c = (d) => {
					for (let h = 0; h < s.length; h++)
						if (d.columnFilters[s[h]] === !1) return !1
					return !0
				}
				return S2(t.rows, c, e)
			},
			me(e.options, 'debugTable', 'getFilteredRowModel', () =>
				e._autoResetPageIndex()
			)
		)
}
function Nz() {
	return (e) =>
		ge(
			() => [e.getState().sorting, e.getPreSortedRowModel()],
			(t, r) => {
				if (!r.rows.length || !(t != null && t.length)) return r
				const n = e.getState().sorting,
					i = [],
					a = n.filter((u) => {
						var l
						return (l = e.getColumn(u.id)) == null ? void 0 : l.getCanSort()
					}),
					s = {}
				a.forEach((u) => {
					const l = e.getColumn(u.id)
					l &&
						(s[u.id] = {
							sortUndefined: l.columnDef.sortUndefined,
							invertSorting: l.columnDef.invertSorting,
							sortingFn: l.getSortingFn()
						})
				})
				const o = (u) => {
					const l = u.map((f) => ({ ...f }))
					return (
						l.sort((f, c) => {
							for (let h = 0; h < a.length; h += 1) {
								var d
								const g = a[h],
									p = s[g.id],
									m = p.sortUndefined,
									v = (d = g == null ? void 0 : g.desc) != null ? d : !1
								let _ = 0
								if (m) {
									const w = f.getValue(g.id),
										x = c.getValue(g.id),
										E = w === void 0,
										R = x === void 0
									if (E || R) {
										if (m === 'first') return E ? -1 : 1
										if (m === 'last') return E ? 1 : -1
										_ = E && R ? 0 : E ? m : -m
									}
								}
								if ((_ === 0 && (_ = p.sortingFn(f, c, g.id)), _ !== 0))
									return (v && (_ *= -1), p.invertSorting && (_ *= -1), _)
							}
							return f.index - c.index
						}),
						l.forEach((f) => {
							var c
							;(i.push(f),
								(c = f.subRows) != null &&
									c.length &&
									(f.subRows = o(f.subRows)))
						}),
						l
					)
				}
				return { rows: o(r.rows), flatRows: i, rowsById: r.rowsById }
			},
			me(e.options, 'debugTable', 'getSortedRowModel', () =>
				e._autoResetPageIndex()
			)
		)
}
const s1 = (e, t, r) => {
		if (e && 'reportValidity' in e) {
			const n = xh(r, t)
			;(e.setCustomValidity((n && n.message) || ''), e.reportValidity())
		}
	},
	mp = (e, t) => {
		for (const r in t.fields) {
			const n = t.fields[r]
			n && n.ref && 'reportValidity' in n.ref
				? s1(n.ref, r, e)
				: n && n.refs && n.refs.forEach((i) => s1(i, r, e))
		}
	},
	o1 = (e, t) => {
		t.shouldUseNativeValidation && mp(e, t)
		const r = {}
		for (const n in e) {
			const i = xh(t.fields, n),
				a = Object.assign(e[n] || {}, { ref: i && i.ref })
			if (O2(t.names || Object.keys(e), n)) {
				const s = Object.assign({}, xh(r, n))
				;(ou(s, 'root', a), ou(r, n, s))
			} else ou(r, n, a)
		}
		return r
	},
	O2 = (e, t) => {
		const r = u1(t).replace(/[.*+?^${}()|\\]/g, '\\$&')
		return e.some((n) => u1(n).match(`^${r}\\.\\d+`))
	}
function u1(e) {
	return e.replace(/[\[\]]/g, '')
}
function dO(e, t, r) {
	function n(o, u) {
		var l
		;(Object.defineProperty(o, '_zod', { value: o._zod ?? {}, enumerable: !1 }),
			(l = o._zod).traits ?? (l.traits = new Set()),
			o._zod.traits.add(e),
			t(o, u))
		for (const f in s.prototype)
			f in o || Object.defineProperty(o, f, { value: s.prototype[f].bind(o) })
		;((o._zod.constr = s), (o._zod.def = u))
	}
	const i = (r == null ? void 0 : r.Parent) ?? Object
	class a extends i {}
	Object.defineProperty(a, 'name', { value: e })
	function s(o) {
		var u
		const l = r != null && r.Parent ? new a() : this
		;(n(l, o), (u = l._zod).deferred ?? (u.deferred = []))
		for (const f of l._zod.deferred) f()
		return l
	}
	return (
		Object.defineProperty(s, 'init', { value: n }),
		Object.defineProperty(s, Symbol.hasInstance, {
			value: (o) => {
				var u, l
				return r != null && r.Parent && o instanceof r.Parent
					? !0
					: (l =
								(u = o == null ? void 0 : o._zod) == null
									? void 0
									: u.traits) == null
						? void 0
						: l.has(e)
			}
		}),
		Object.defineProperty(s, 'name', { value: e }),
		s
	)
}
class C2 extends Error {
	constructor() {
		super(
			'Encountered Promise during synchronous parse. Use .parseAsync() instead.'
		)
	}
}
const T2 = {}
function hO(e) {
	return T2
}
function E2(e, t) {
	return typeof t == 'bigint' ? t.toString() : t
}
const pO = Error.captureStackTrace ? Error.captureStackTrace : (...e) => {}
function Fs(e) {
	return typeof e == 'string' ? e : e == null ? void 0 : e.message
}
function gO(e, t, r) {
	var i, a, s, o, u, l
	const n = { ...e, path: e.path ?? [] }
	if (!e.message) {
		const f =
			Fs(
				(s =
					(a = (i = e.inst) == null ? void 0 : i._zod.def) == null
						? void 0
						: a.error) == null
					? void 0
					: s.call(a, e)
			) ??
			Fs((o = t == null ? void 0 : t.error) == null ? void 0 : o.call(t, e)) ??
			Fs((u = r.customError) == null ? void 0 : u.call(r, e)) ??
			Fs((l = r.localeError) == null ? void 0 : l.call(r, e)) ??
			'Invalid input'
		n.message = f
	}
	return (
		delete n.inst,
		delete n.continue,
		(t != null && t.reportInput) || delete n.input,
		n
	)
}
const mO = (e, t) => {
		;((e.name = '$ZodError'),
			Object.defineProperty(e, '_zod', { value: e._zod, enumerable: !1 }),
			Object.defineProperty(e, 'issues', { value: t, enumerable: !1 }),
			Object.defineProperty(e, 'message', {
				get() {
					return JSON.stringify(t, E2, 2)
				},
				enumerable: !0
			}),
			Object.defineProperty(e, 'toString', {
				value: () => e.message,
				enumerable: !1
			}))
	},
	A2 = dO('$ZodError', mO),
	vO = dO('$ZodError', mO, { Parent: Error }),
	M2 = (e) => (t, r, n, i) => {
		const a = n ? Object.assign(n, { async: !1 }) : { async: !1 },
			s = t._zod.run({ value: r, issues: [] }, a)
		if (s instanceof Promise) throw new C2()
		if (s.issues.length) {
			const o = new ((i == null ? void 0 : i.Err) ?? e)(
				s.issues.map((u) => gO(u, a, hO()))
			)
			throw (pO(o, i == null ? void 0 : i.callee), o)
		}
		return s.value
	},
	P2 = M2(vO),
	I2 = (e) => async (t, r, n, i) => {
		const a = n ? Object.assign(n, { async: !0 }) : { async: !0 }
		let s = t._zod.run({ value: r, issues: [] }, a)
		if ((s instanceof Promise && (s = await s), s.issues.length)) {
			const o = new ((i == null ? void 0 : i.Err) ?? e)(
				s.issues.map((u) => gO(u, a, hO()))
			)
			throw (pO(o, i == null ? void 0 : i.callee), o)
		}
		return s.value
	},
	k2 = I2(vO)
function vp() {
	return (
		(vp = Object.assign
			? Object.assign.bind()
			: function (e) {
					for (var t = 1; t < arguments.length; t++) {
						var r = arguments[t]
						for (var n in r) ({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
					}
					return e
				}),
		vp.apply(null, arguments)
	)
}
function l1(e, t) {
	try {
		var r = e()
	} catch (n) {
		return t(n)
	}
	return r && r.then ? r.then(void 0, t) : r
}
function q2(e, t) {
	for (var r = {}; e.length; ) {
		var n = e[0],
			i = n.code,
			a = n.message,
			s = n.path.join('.')
		if (!r[s])
			if ('unionErrors' in n) {
				var o = n.unionErrors[0].errors[0]
				r[s] = { message: o.message, type: o.code }
			} else r[s] = { message: a, type: i }
		if (
			('unionErrors' in n &&
				n.unionErrors.forEach(function (f) {
					return f.errors.forEach(function (c) {
						return e.push(c)
					})
				}),
			t)
		) {
			var u = r[s].types,
				l = u && u[n.code]
			r[s] = z1(s, t, r, i, l ? [].concat(l, n.message) : n.message)
		}
		e.shift()
	}
	return r
}
function $2(e, t) {
	for (
		var r = {},
			n = function () {
				var i = e[0],
					a = i.code,
					s = i.message,
					o = i.path.join('.')
				if (!r[o])
					if (i.code === 'invalid_union' && i.errors.length > 0) {
						var u = i.errors[0][0]
						r[o] = { message: u.message, type: u.code }
					} else r[o] = { message: s, type: a }
				if (
					(i.code === 'invalid_union' &&
						i.errors.forEach(function (c) {
							return c.forEach(function (d) {
								return e.push(vp({}, d, { path: [].concat(i.path, d.path) }))
							})
						}),
					t)
				) {
					var l = r[o].types,
						f = l && l[i.code]
					r[o] = z1(o, t, r, a, f ? [].concat(f, i.message) : i.message)
				}
				e.shift()
			};
		e.length;
	)
		n()
	return r
}
function Lz(e, t, r) {
	if (
		(r === void 0 && (r = {}),
		(function (n) {
			return '_def' in n && typeof n._def == 'object' && 'typeName' in n._def
		})(e))
	)
		return function (n, i, a) {
			try {
				return Promise.resolve(
					l1(
						function () {
							return Promise.resolve(
								e[r.mode === 'sync' ? 'parse' : 'parseAsync'](n, t)
							).then(function (s) {
								return (
									a.shouldUseNativeValidation && mp({}, a),
									{ errors: {}, values: r.raw ? Object.assign({}, n) : s }
								)
							})
						},
						function (s) {
							if (
								(function (o) {
									return Array.isArray(o == null ? void 0 : o.issues)
								})(s)
							)
								return {
									values: {},
									errors: o1(
										q2(
											s.errors,
											!a.shouldUseNativeValidation && a.criteriaMode === 'all'
										),
										a
									)
								}
							throw s
						}
					)
				)
			} catch (s) {
				return Promise.reject(s)
			}
		}
	if (
		(function (n) {
			return '_zod' in n && typeof n._zod == 'object'
		})(e)
	)
		return function (n, i, a) {
			try {
				return Promise.resolve(
					l1(
						function () {
							return Promise.resolve(
								(r.mode === 'sync' ? P2 : k2)(e, n, t)
							).then(function (s) {
								return (
									a.shouldUseNativeValidation && mp({}, a),
									{ errors: {}, values: r.raw ? Object.assign({}, n) : s }
								)
							})
						},
						function (s) {
							if (
								(function (o) {
									return o instanceof A2
								})(s)
							)
								return {
									values: {},
									errors: o1(
										$2(
											s.issues,
											!a.shouldUseNativeValidation && a.criteriaMode === 'all'
										),
										a
									)
								}
							throw s
						}
					)
				)
			} catch (s) {
				return Promise.reject(s)
			}
		}
	throw new Error('Invalid input: not a Zod schema')
}
var F2 = Object.prototype,
	D2 = F2.hasOwnProperty
function N2(e, t) {
	return e != null && D2.call(e, t)
}
function jz(e, t) {
	return e != null && $M(e, t, N2)
}
var Pe
;(function (e) {
	e.assertEqual = (i) => {}
	function t(i) {}
	e.assertIs = t
	function r(i) {
		throw new Error()
	}
	;((e.assertNever = r),
		(e.arrayToEnum = (i) => {
			const a = {}
			for (const s of i) a[s] = s
			return a
		}),
		(e.getValidEnumValues = (i) => {
			const a = e.objectKeys(i).filter((o) => typeof i[i[o]] != 'number'),
				s = {}
			for (const o of a) s[o] = i[o]
			return e.objectValues(s)
		}),
		(e.objectValues = (i) =>
			e.objectKeys(i).map(function (a) {
				return i[a]
			})),
		(e.objectKeys =
			typeof Object.keys == 'function'
				? (i) => Object.keys(i)
				: (i) => {
						const a = []
						for (const s in i)
							Object.prototype.hasOwnProperty.call(i, s) && a.push(s)
						return a
					}),
		(e.find = (i, a) => {
			for (const s of i) if (a(s)) return s
		}),
		(e.isInteger =
			typeof Number.isInteger == 'function'
				? (i) => Number.isInteger(i)
				: (i) =>
						typeof i == 'number' && Number.isFinite(i) && Math.floor(i) === i))
	function n(i, a = ' | ') {
		return i.map((s) => (typeof s == 'string' ? `'${s}'` : s)).join(a)
	}
	;((e.joinValues = n),
		(e.jsonStringifyReplacer = (i, a) =>
			typeof a == 'bigint' ? a.toString() : a))
})(Pe || (Pe = {}))
var c1
;(function (e) {
	e.mergeShapes = (t, r) => ({ ...t, ...r })
})(c1 || (c1 = {}))
const ue = Pe.arrayToEnum([
		'string',
		'nan',
		'number',
		'integer',
		'float',
		'boolean',
		'date',
		'bigint',
		'symbol',
		'function',
		'undefined',
		'null',
		'array',
		'object',
		'unknown',
		'promise',
		'void',
		'never',
		'map',
		'set'
	]),
	yn = (e) => {
		switch (typeof e) {
			case 'undefined':
				return ue.undefined
			case 'string':
				return ue.string
			case 'number':
				return Number.isNaN(e) ? ue.nan : ue.number
			case 'boolean':
				return ue.boolean
			case 'function':
				return ue.function
			case 'bigint':
				return ue.bigint
			case 'symbol':
				return ue.symbol
			case 'object':
				return Array.isArray(e)
					? ue.array
					: e === null
						? ue.null
						: e.then &&
							  typeof e.then == 'function' &&
							  e.catch &&
							  typeof e.catch == 'function'
							? ue.promise
							: typeof Map < 'u' && e instanceof Map
								? ue.map
								: typeof Set < 'u' && e instanceof Set
									? ue.set
									: typeof Date < 'u' && e instanceof Date
										? ue.date
										: ue.object
			default:
				return ue.unknown
		}
	},
	H = Pe.arrayToEnum([
		'invalid_type',
		'invalid_literal',
		'custom',
		'invalid_union',
		'invalid_union_discriminator',
		'invalid_enum_value',
		'unrecognized_keys',
		'invalid_arguments',
		'invalid_return_type',
		'invalid_date',
		'invalid_string',
		'too_small',
		'too_big',
		'invalid_intersection_types',
		'not_multiple_of',
		'not_finite'
	])
class rn extends Error {
	get errors() {
		return this.issues
	}
	constructor(t) {
		;(super(),
			(this.issues = []),
			(this.addIssue = (n) => {
				this.issues = [...this.issues, n]
			}),
			(this.addIssues = (n = []) => {
				this.issues = [...this.issues, ...n]
			}))
		const r = new.target.prototype
		;(Object.setPrototypeOf
			? Object.setPrototypeOf(this, r)
			: (this.__proto__ = r),
			(this.name = 'ZodError'),
			(this.issues = t))
	}
	format(t) {
		const r =
				t ||
				function (a) {
					return a.message
				},
			n = { _errors: [] },
			i = (a) => {
				for (const s of a.issues)
					if (s.code === 'invalid_union') s.unionErrors.map(i)
					else if (s.code === 'invalid_return_type') i(s.returnTypeError)
					else if (s.code === 'invalid_arguments') i(s.argumentsError)
					else if (s.path.length === 0) n._errors.push(r(s))
					else {
						let o = n,
							u = 0
						for (; u < s.path.length; ) {
							const l = s.path[u]
							;(u === s.path.length - 1
								? ((o[l] = o[l] || { _errors: [] }), o[l]._errors.push(r(s)))
								: (o[l] = o[l] || { _errors: [] }),
								(o = o[l]),
								u++)
						}
					}
			}
		return (i(this), n)
	}
	static assert(t) {
		if (!(t instanceof rn)) throw new Error(`Not a ZodError: ${t}`)
	}
	toString() {
		return this.message
	}
	get message() {
		return JSON.stringify(this.issues, Pe.jsonStringifyReplacer, 2)
	}
	get isEmpty() {
		return this.issues.length === 0
	}
	flatten(t = (r) => r.message) {
		const r = {},
			n = []
		for (const i of this.issues)
			if (i.path.length > 0) {
				const a = i.path[0]
				;((r[a] = r[a] || []), r[a].push(t(i)))
			} else n.push(t(i))
		return { formErrors: n, fieldErrors: r }
	}
	get formErrors() {
		return this.flatten()
	}
}
rn.create = (e) => new rn(e)
const yp = (e, t) => {
	let r
	switch (e.code) {
		case H.invalid_type:
			e.received === ue.undefined
				? (r = 'Required')
				: (r = `Expected ${e.expected}, received ${e.received}`)
			break
		case H.invalid_literal:
			r = `Invalid literal value, expected ${JSON.stringify(e.expected, Pe.jsonStringifyReplacer)}`
			break
		case H.unrecognized_keys:
			r = `Unrecognized key(s) in object: ${Pe.joinValues(e.keys, ', ')}`
			break
		case H.invalid_union:
			r = 'Invalid input'
			break
		case H.invalid_union_discriminator:
			r = `Invalid discriminator value. Expected ${Pe.joinValues(e.options)}`
			break
		case H.invalid_enum_value:
			r = `Invalid enum value. Expected ${Pe.joinValues(e.options)}, received '${e.received}'`
			break
		case H.invalid_arguments:
			r = 'Invalid function arguments'
			break
		case H.invalid_return_type:
			r = 'Invalid function return type'
			break
		case H.invalid_date:
			r = 'Invalid date'
			break
		case H.invalid_string:
			typeof e.validation == 'object'
				? 'includes' in e.validation
					? ((r = `Invalid input: must include "${e.validation.includes}"`),
						typeof e.validation.position == 'number' &&
							(r = `${r} at one or more positions greater than or equal to ${e.validation.position}`))
					: 'startsWith' in e.validation
						? (r = `Invalid input: must start with "${e.validation.startsWith}"`)
						: 'endsWith' in e.validation
							? (r = `Invalid input: must end with "${e.validation.endsWith}"`)
							: Pe.assertNever(e.validation)
				: e.validation !== 'regex'
					? (r = `Invalid ${e.validation}`)
					: (r = 'Invalid')
			break
		case H.too_small:
			e.type === 'array'
				? (r = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'more than'} ${e.minimum} element(s)`)
				: e.type === 'string'
					? (r = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at least' : 'over'} ${e.minimum} character(s)`)
					: e.type === 'number'
						? (r = `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`)
						: e.type === 'bigint'
							? (r = `Number must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${e.minimum}`)
							: e.type === 'date'
								? (r = `Date must be ${e.exact ? 'exactly equal to ' : e.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(e.minimum))}`)
								: (r = 'Invalid input')
			break
		case H.too_big:
			e.type === 'array'
				? (r = `Array must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'less than'} ${e.maximum} element(s)`)
				: e.type === 'string'
					? (r = `String must contain ${e.exact ? 'exactly' : e.inclusive ? 'at most' : 'under'} ${e.maximum} character(s)`)
					: e.type === 'number'
						? (r = `Number must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
						: e.type === 'bigint'
							? (r = `BigInt must be ${e.exact ? 'exactly' : e.inclusive ? 'less than or equal to' : 'less than'} ${e.maximum}`)
							: e.type === 'date'
								? (r = `Date must be ${e.exact ? 'exactly' : e.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(e.maximum))}`)
								: (r = 'Invalid input')
			break
		case H.custom:
			r = 'Invalid input'
			break
		case H.invalid_intersection_types:
			r = 'Intersection results could not be merged'
			break
		case H.not_multiple_of:
			r = `Number must be a multiple of ${e.multipleOf}`
			break
		case H.not_finite:
			r = 'Number must be finite'
			break
		default:
			;((r = t.defaultError), Pe.assertNever(e))
	}
	return { message: r }
}
let L2 = yp
function j2() {
	return L2
}
const U2 = (e) => {
	const { data: t, path: r, errorMaps: n, issueData: i } = e,
		a = [...r, ...(i.path || [])],
		s = { ...i, path: a }
	if (i.message !== void 0) return { ...i, path: a, message: i.message }
	let o = ''
	const u = n
		.filter((l) => !!l)
		.slice()
		.reverse()
	for (const l of u) o = l(s, { data: t, defaultError: o }).message
	return { ...i, path: a, message: o }
}
function X(e, t) {
	const r = j2(),
		n = U2({
			issueData: t,
			data: e.data,
			path: e.path,
			errorMaps: [
				e.common.contextualErrorMap,
				e.schemaErrorMap,
				r,
				r === yp ? void 0 : yp
			].filter((i) => !!i)
		})
	e.common.issues.push(n)
}
class Bt {
	constructor() {
		this.value = 'valid'
	}
	dirty() {
		this.value === 'valid' && (this.value = 'dirty')
	}
	abort() {
		this.value !== 'aborted' && (this.value = 'aborted')
	}
	static mergeArray(t, r) {
		const n = []
		for (const i of r) {
			if (i.status === 'aborted') return ve
			;(i.status === 'dirty' && t.dirty(), n.push(i.value))
		}
		return { status: t.value, value: n }
	}
	static async mergeObjectAsync(t, r) {
		const n = []
		for (const i of r) {
			const a = await i.key,
				s = await i.value
			n.push({ key: a, value: s })
		}
		return Bt.mergeObjectSync(t, n)
	}
	static mergeObjectSync(t, r) {
		const n = {}
		for (const i of r) {
			const { key: a, value: s } = i
			if (a.status === 'aborted' || s.status === 'aborted') return ve
			;(a.status === 'dirty' && t.dirty(),
				s.status === 'dirty' && t.dirty(),
				a.value !== '__proto__' &&
					(typeof s.value < 'u' || i.alwaysSet) &&
					(n[a.value] = s.value))
		}
		return { status: t.value, value: n }
	}
}
const ve = Object.freeze({ status: 'aborted' }),
	La = (e) => ({ status: 'dirty', value: e }),
	er = (e) => ({ status: 'valid', value: e }),
	f1 = (e) => e.status === 'aborted',
	d1 = (e) => e.status === 'dirty',
	sa = (e) => e.status === 'valid',
	xo = (e) => typeof Promise < 'u' && e instanceof Promise
var fe
;(function (e) {
	;((e.errToObj = (t) => (typeof t == 'string' ? { message: t } : t || {})),
		(e.toString = (t) =>
			typeof t == 'string' ? t : t == null ? void 0 : t.message))
})(fe || (fe = {}))
class Dn {
	constructor(t, r, n, i) {
		;((this._cachedPath = []),
			(this.parent = t),
			(this.data = r),
			(this._path = n),
			(this._key = i))
	}
	get path() {
		return (
			this._cachedPath.length ||
				(Array.isArray(this._key)
					? this._cachedPath.push(...this._path, ...this._key)
					: this._cachedPath.push(...this._path, this._key)),
			this._cachedPath
		)
	}
}
const h1 = (e, t) => {
	if (sa(t)) return { success: !0, data: t.value }
	if (!e.common.issues.length)
		throw new Error('Validation failed but no issues detected.')
	return {
		success: !1,
		get error() {
			if (this._error) return this._error
			const r = new rn(e.common.issues)
			return ((this._error = r), this._error)
		}
	}
}
function Re(e) {
	if (!e) return {}
	const {
		errorMap: t,
		invalid_type_error: r,
		required_error: n,
		description: i
	} = e
	if (t && (r || n))
		throw new Error(
			`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`
		)
	return t
		? { errorMap: t, description: i }
		: {
				errorMap: (s, o) => {
					const { message: u } = e
					return s.code === 'invalid_enum_value'
						? { message: u ?? o.defaultError }
						: typeof o.data > 'u'
							? { message: u ?? n ?? o.defaultError }
							: s.code !== 'invalid_type'
								? { message: o.defaultError }
								: { message: u ?? r ?? o.defaultError }
				},
				description: i
			}
}
class Me {
	get description() {
		return this._def.description
	}
	_getType(t) {
		return yn(t.data)
	}
	_getOrReturnCtx(t, r) {
		return (
			r || {
				common: t.parent.common,
				data: t.data,
				parsedType: yn(t.data),
				schemaErrorMap: this._def.errorMap,
				path: t.path,
				parent: t.parent
			}
		)
	}
	_processInputParams(t) {
		return {
			status: new Bt(),
			ctx: {
				common: t.parent.common,
				data: t.data,
				parsedType: yn(t.data),
				schemaErrorMap: this._def.errorMap,
				path: t.path,
				parent: t.parent
			}
		}
	}
	_parseSync(t) {
		const r = this._parse(t)
		if (xo(r)) throw new Error('Synchronous parse encountered promise.')
		return r
	}
	_parseAsync(t) {
		const r = this._parse(t)
		return Promise.resolve(r)
	}
	parse(t, r) {
		const n = this.safeParse(t, r)
		if (n.success) return n.data
		throw n.error
	}
	safeParse(t, r) {
		const n = {
				common: {
					issues: [],
					async: (r == null ? void 0 : r.async) ?? !1,
					contextualErrorMap: r == null ? void 0 : r.errorMap
				},
				path: (r == null ? void 0 : r.path) || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: t,
				parsedType: yn(t)
			},
			i = this._parseSync({ data: t, path: n.path, parent: n })
		return h1(n, i)
	}
	'~validate'(t) {
		var n, i
		const r = {
			common: { issues: [], async: !!this['~standard'].async },
			path: [],
			schemaErrorMap: this._def.errorMap,
			parent: null,
			data: t,
			parsedType: yn(t)
		}
		if (!this['~standard'].async)
			try {
				const a = this._parseSync({ data: t, path: [], parent: r })
				return sa(a) ? { value: a.value } : { issues: r.common.issues }
			} catch (a) {
				;((i =
					(n = a == null ? void 0 : a.message) == null
						? void 0
						: n.toLowerCase()) != null &&
					i.includes('encountered') &&
					(this['~standard'].async = !0),
					(r.common = { issues: [], async: !0 }))
			}
		return this._parseAsync({ data: t, path: [], parent: r }).then((a) =>
			sa(a) ? { value: a.value } : { issues: r.common.issues }
		)
	}
	async parseAsync(t, r) {
		const n = await this.safeParseAsync(t, r)
		if (n.success) return n.data
		throw n.error
	}
	async safeParseAsync(t, r) {
		const n = {
				common: {
					issues: [],
					contextualErrorMap: r == null ? void 0 : r.errorMap,
					async: !0
				},
				path: (r == null ? void 0 : r.path) || [],
				schemaErrorMap: this._def.errorMap,
				parent: null,
				data: t,
				parsedType: yn(t)
			},
			i = this._parse({ data: t, path: n.path, parent: n }),
			a = await (xo(i) ? i : Promise.resolve(i))
		return h1(n, a)
	}
	refine(t, r) {
		const n = (i) =>
			typeof r == 'string' || typeof r > 'u'
				? { message: r }
				: typeof r == 'function'
					? r(i)
					: r
		return this._refinement((i, a) => {
			const s = t(i),
				o = () => a.addIssue({ code: H.custom, ...n(i) })
			return typeof Promise < 'u' && s instanceof Promise
				? s.then((u) => (u ? !0 : (o(), !1)))
				: s
					? !0
					: (o(), !1)
		})
	}
	refinement(t, r) {
		return this._refinement((n, i) =>
			t(n) ? !0 : (i.addIssue(typeof r == 'function' ? r(n, i) : r), !1)
		)
	}
	_refinement(t) {
		return new la({
			schema: this,
			typeName: ye.ZodEffects,
			effect: { type: 'refinement', refinement: t }
		})
	}
	superRefine(t) {
		return this._refinement(t)
	}
	constructor(t) {
		;((this.spa = this.safeParseAsync),
			(this._def = t),
			(this.parse = this.parse.bind(this)),
			(this.safeParse = this.safeParse.bind(this)),
			(this.parseAsync = this.parseAsync.bind(this)),
			(this.safeParseAsync = this.safeParseAsync.bind(this)),
			(this.spa = this.spa.bind(this)),
			(this.refine = this.refine.bind(this)),
			(this.refinement = this.refinement.bind(this)),
			(this.superRefine = this.superRefine.bind(this)),
			(this.optional = this.optional.bind(this)),
			(this.nullable = this.nullable.bind(this)),
			(this.nullish = this.nullish.bind(this)),
			(this.array = this.array.bind(this)),
			(this.promise = this.promise.bind(this)),
			(this.or = this.or.bind(this)),
			(this.and = this.and.bind(this)),
			(this.transform = this.transform.bind(this)),
			(this.brand = this.brand.bind(this)),
			(this.default = this.default.bind(this)),
			(this.catch = this.catch.bind(this)),
			(this.describe = this.describe.bind(this)),
			(this.pipe = this.pipe.bind(this)),
			(this.readonly = this.readonly.bind(this)),
			(this.isNullable = this.isNullable.bind(this)),
			(this.isOptional = this.isOptional.bind(this)),
			(this['~standard'] = {
				version: 1,
				vendor: 'zod',
				validate: (r) => this['~validate'](r)
			}))
	}
	optional() {
		return kn.create(this, this._def)
	}
	nullable() {
		return ca.create(this, this._def)
	}
	nullish() {
		return this.nullable().optional()
	}
	array() {
		return Er.create(this)
	}
	promise() {
		return To.create(this, this._def)
	}
	or(t) {
		return Oo.create([this, t], this._def)
	}
	and(t) {
		return Co.create(this, t, this._def)
	}
	transform(t) {
		return new la({
			...Re(this._def),
			schema: this,
			typeName: ye.ZodEffects,
			effect: { type: 'transform', transform: t }
		})
	}
	default(t) {
		const r = typeof t == 'function' ? t : () => t
		return new bp({
			...Re(this._def),
			innerType: this,
			defaultValue: r,
			typeName: ye.ZodDefault
		})
	}
	brand() {
		return new cU({ typeName: ye.ZodBranded, type: this, ...Re(this._def) })
	}
	catch(t) {
		const r = typeof t == 'function' ? t : () => t
		return new wp({
			...Re(this._def),
			innerType: this,
			catchValue: r,
			typeName: ye.ZodCatch
		})
	}
	describe(t) {
		const r = this.constructor
		return new r({ ...this._def, description: t })
	}
	pipe(t) {
		return Ng.create(this, t)
	}
	readonly() {
		return Sp.create(this)
	}
	isOptional() {
		return this.safeParse(void 0).success
	}
	isNullable() {
		return this.safeParse(null).success
	}
}
const B2 = /^c[^\s-]{8,}$/i,
	V2 = /^[0-9a-z]+$/,
	z2 = /^[0-9A-HJKMNP-TV-Z]{26}$/i,
	H2 =
		/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
	G2 = /^[a-z0-9_-]{21}$/i,
	W2 = /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_]*$/,
	K2 =
		/^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
	Q2 =
		/^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
	Z2 = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$'
let Sh
const Y2 =
		/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
	J2 =
		/^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/(3[0-2]|[12]?[0-9])$/,
	X2 =
		/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))$/,
	eU =
		/^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/,
	tU = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
	rU = /^([0-9a-zA-Z-_]{4})*(([0-9a-zA-Z-_]{2}(==)?)|([0-9a-zA-Z-_]{3}(=)?))?$/,
	yO =
		'((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
	nU = new RegExp(`^${yO}$`)
function _O(e) {
	let t = '[0-5]\\d'
	e.precision
		? (t = `${t}\\.\\d{${e.precision}}`)
		: e.precision == null && (t = `${t}(\\.\\d+)?`)
	const r = e.precision ? '+' : '?'
	return `([01]\\d|2[0-3]):[0-5]\\d(:${t})${r}`
}
function iU(e) {
	return new RegExp(`^${_O(e)}$`)
}
function aU(e) {
	let t = `${yO}T${_O(e)}`
	const r = []
	return (
		r.push(e.local ? 'Z?' : 'Z'),
		e.offset && r.push('([+-]\\d{2}:?\\d{2})'),
		(t = `${t}(${r.join('|')})`),
		new RegExp(`^${t}$`)
	)
}
function sU(e, t) {
	return !!(
		((t === 'v4' || !t) && Y2.test(e)) ||
		((t === 'v6' || !t) && X2.test(e))
	)
}
function oU(e, t) {
	if (!W2.test(e)) return !1
	try {
		const [r] = e.split('.')
		if (!r) return !1
		const n = r
				.replace(/-/g, '+')
				.replace(/_/g, '/')
				.padEnd(r.length + ((4 - (r.length % 4)) % 4), '='),
			i = JSON.parse(atob(n))
		return !(
			typeof i != 'object' ||
			i === null ||
			('typ' in i && (i == null ? void 0 : i.typ) !== 'JWT') ||
			!i.alg ||
			(t && i.alg !== t)
		)
	} catch {
		return !1
	}
}
function uU(e, t) {
	return !!(
		((t === 'v4' || !t) && J2.test(e)) ||
		((t === 'v6' || !t) && eU.test(e))
	)
}
class Wr extends Me {
	_parse(t) {
		if (
			(this._def.coerce && (t.data = String(t.data)),
			this._getType(t) !== ue.string)
		) {
			const a = this._getOrReturnCtx(t)
			return (
				X(a, {
					code: H.invalid_type,
					expected: ue.string,
					received: a.parsedType
				}),
				ve
			)
		}
		const n = new Bt()
		let i
		for (const a of this._def.checks)
			if (a.kind === 'min')
				t.data.length < a.value &&
					((i = this._getOrReturnCtx(t, i)),
					X(i, {
						code: H.too_small,
						minimum: a.value,
						type: 'string',
						inclusive: !0,
						exact: !1,
						message: a.message
					}),
					n.dirty())
			else if (a.kind === 'max')
				t.data.length > a.value &&
					((i = this._getOrReturnCtx(t, i)),
					X(i, {
						code: H.too_big,
						maximum: a.value,
						type: 'string',
						inclusive: !0,
						exact: !1,
						message: a.message
					}),
					n.dirty())
			else if (a.kind === 'length') {
				const s = t.data.length > a.value,
					o = t.data.length < a.value
				;(s || o) &&
					((i = this._getOrReturnCtx(t, i)),
					s
						? X(i, {
								code: H.too_big,
								maximum: a.value,
								type: 'string',
								inclusive: !0,
								exact: !0,
								message: a.message
							})
						: o &&
							X(i, {
								code: H.too_small,
								minimum: a.value,
								type: 'string',
								inclusive: !0,
								exact: !0,
								message: a.message
							}),
					n.dirty())
			} else if (a.kind === 'email')
				Q2.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					X(i, {
						validation: 'email',
						code: H.invalid_string,
						message: a.message
					}),
					n.dirty())
			else if (a.kind === 'emoji')
				(Sh || (Sh = new RegExp(Z2, 'u')),
					Sh.test(t.data) ||
						((i = this._getOrReturnCtx(t, i)),
						X(i, {
							validation: 'emoji',
							code: H.invalid_string,
							message: a.message
						}),
						n.dirty()))
			else if (a.kind === 'uuid')
				H2.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					X(i, {
						validation: 'uuid',
						code: H.invalid_string,
						message: a.message
					}),
					n.dirty())
			else if (a.kind === 'nanoid')
				G2.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					X(i, {
						validation: 'nanoid',
						code: H.invalid_string,
						message: a.message
					}),
					n.dirty())
			else if (a.kind === 'cuid')
				B2.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					X(i, {
						validation: 'cuid',
						code: H.invalid_string,
						message: a.message
					}),
					n.dirty())
			else if (a.kind === 'cuid2')
				V2.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					X(i, {
						validation: 'cuid2',
						code: H.invalid_string,
						message: a.message
					}),
					n.dirty())
			else if (a.kind === 'ulid')
				z2.test(t.data) ||
					((i = this._getOrReturnCtx(t, i)),
					X(i, {
						validation: 'ulid',
						code: H.invalid_string,
						message: a.message
					}),
					n.dirty())
			else if (a.kind === 'url')
				try {
					new URL(t.data)
				} catch {
					;((i = this._getOrReturnCtx(t, i)),
						X(i, {
							validation: 'url',
							code: H.invalid_string,
							message: a.message
						}),
						n.dirty())
				}
			else
				a.kind === 'regex'
					? ((a.regex.lastIndex = 0),
						a.regex.test(t.data) ||
							((i = this._getOrReturnCtx(t, i)),
							X(i, {
								validation: 'regex',
								code: H.invalid_string,
								message: a.message
							}),
							n.dirty()))
					: a.kind === 'trim'
						? (t.data = t.data.trim())
						: a.kind === 'includes'
							? t.data.includes(a.value, a.position) ||
								((i = this._getOrReturnCtx(t, i)),
								X(i, {
									code: H.invalid_string,
									validation: { includes: a.value, position: a.position },
									message: a.message
								}),
								n.dirty())
							: a.kind === 'toLowerCase'
								? (t.data = t.data.toLowerCase())
								: a.kind === 'toUpperCase'
									? (t.data = t.data.toUpperCase())
									: a.kind === 'startsWith'
										? t.data.startsWith(a.value) ||
											((i = this._getOrReturnCtx(t, i)),
											X(i, {
												code: H.invalid_string,
												validation: { startsWith: a.value },
												message: a.message
											}),
											n.dirty())
										: a.kind === 'endsWith'
											? t.data.endsWith(a.value) ||
												((i = this._getOrReturnCtx(t, i)),
												X(i, {
													code: H.invalid_string,
													validation: { endsWith: a.value },
													message: a.message
												}),
												n.dirty())
											: a.kind === 'datetime'
												? aU(a).test(t.data) ||
													((i = this._getOrReturnCtx(t, i)),
													X(i, {
														code: H.invalid_string,
														validation: 'datetime',
														message: a.message
													}),
													n.dirty())
												: a.kind === 'date'
													? nU.test(t.data) ||
														((i = this._getOrReturnCtx(t, i)),
														X(i, {
															code: H.invalid_string,
															validation: 'date',
															message: a.message
														}),
														n.dirty())
													: a.kind === 'time'
														? iU(a).test(t.data) ||
															((i = this._getOrReturnCtx(t, i)),
															X(i, {
																code: H.invalid_string,
																validation: 'time',
																message: a.message
															}),
															n.dirty())
														: a.kind === 'duration'
															? K2.test(t.data) ||
																((i = this._getOrReturnCtx(t, i)),
																X(i, {
																	validation: 'duration',
																	code: H.invalid_string,
																	message: a.message
																}),
																n.dirty())
															: a.kind === 'ip'
																? sU(t.data, a.version) ||
																	((i = this._getOrReturnCtx(t, i)),
																	X(i, {
																		validation: 'ip',
																		code: H.invalid_string,
																		message: a.message
																	}),
																	n.dirty())
																: a.kind === 'jwt'
																	? oU(t.data, a.alg) ||
																		((i = this._getOrReturnCtx(t, i)),
																		X(i, {
																			validation: 'jwt',
																			code: H.invalid_string,
																			message: a.message
																		}),
																		n.dirty())
																	: a.kind === 'cidr'
																		? uU(t.data, a.version) ||
																			((i = this._getOrReturnCtx(t, i)),
																			X(i, {
																				validation: 'cidr',
																				code: H.invalid_string,
																				message: a.message
																			}),
																			n.dirty())
																		: a.kind === 'base64'
																			? tU.test(t.data) ||
																				((i = this._getOrReturnCtx(t, i)),
																				X(i, {
																					validation: 'base64',
																					code: H.invalid_string,
																					message: a.message
																				}),
																				n.dirty())
																			: a.kind === 'base64url'
																				? rU.test(t.data) ||
																					((i = this._getOrReturnCtx(t, i)),
																					X(i, {
																						validation: 'base64url',
																						code: H.invalid_string,
																						message: a.message
																					}),
																					n.dirty())
																				: Pe.assertNever(a)
		return { status: n.value, value: t.data }
	}
	_regex(t, r, n) {
		return this.refinement((i) => t.test(i), {
			validation: r,
			code: H.invalid_string,
			...fe.errToObj(n)
		})
	}
	_addCheck(t) {
		return new Wr({ ...this._def, checks: [...this._def.checks, t] })
	}
	email(t) {
		return this._addCheck({ kind: 'email', ...fe.errToObj(t) })
	}
	url(t) {
		return this._addCheck({ kind: 'url', ...fe.errToObj(t) })
	}
	emoji(t) {
		return this._addCheck({ kind: 'emoji', ...fe.errToObj(t) })
	}
	uuid(t) {
		return this._addCheck({ kind: 'uuid', ...fe.errToObj(t) })
	}
	nanoid(t) {
		return this._addCheck({ kind: 'nanoid', ...fe.errToObj(t) })
	}
	cuid(t) {
		return this._addCheck({ kind: 'cuid', ...fe.errToObj(t) })
	}
	cuid2(t) {
		return this._addCheck({ kind: 'cuid2', ...fe.errToObj(t) })
	}
	ulid(t) {
		return this._addCheck({ kind: 'ulid', ...fe.errToObj(t) })
	}
	base64(t) {
		return this._addCheck({ kind: 'base64', ...fe.errToObj(t) })
	}
	base64url(t) {
		return this._addCheck({ kind: 'base64url', ...fe.errToObj(t) })
	}
	jwt(t) {
		return this._addCheck({ kind: 'jwt', ...fe.errToObj(t) })
	}
	ip(t) {
		return this._addCheck({ kind: 'ip', ...fe.errToObj(t) })
	}
	cidr(t) {
		return this._addCheck({ kind: 'cidr', ...fe.errToObj(t) })
	}
	datetime(t) {
		return typeof t == 'string'
			? this._addCheck({
					kind: 'datetime',
					precision: null,
					offset: !1,
					local: !1,
					message: t
				})
			: this._addCheck({
					kind: 'datetime',
					precision:
						typeof (t == null ? void 0 : t.precision) > 'u'
							? null
							: t == null
								? void 0
								: t.precision,
					offset: (t == null ? void 0 : t.offset) ?? !1,
					local: (t == null ? void 0 : t.local) ?? !1,
					...fe.errToObj(t == null ? void 0 : t.message)
				})
	}
	date(t) {
		return this._addCheck({ kind: 'date', message: t })
	}
	time(t) {
		return typeof t == 'string'
			? this._addCheck({ kind: 'time', precision: null, message: t })
			: this._addCheck({
					kind: 'time',
					precision:
						typeof (t == null ? void 0 : t.precision) > 'u'
							? null
							: t == null
								? void 0
								: t.precision,
					...fe.errToObj(t == null ? void 0 : t.message)
				})
	}
	duration(t) {
		return this._addCheck({ kind: 'duration', ...fe.errToObj(t) })
	}
	regex(t, r) {
		return this._addCheck({ kind: 'regex', regex: t, ...fe.errToObj(r) })
	}
	includes(t, r) {
		return this._addCheck({
			kind: 'includes',
			value: t,
			position: r == null ? void 0 : r.position,
			...fe.errToObj(r == null ? void 0 : r.message)
		})
	}
	startsWith(t, r) {
		return this._addCheck({ kind: 'startsWith', value: t, ...fe.errToObj(r) })
	}
	endsWith(t, r) {
		return this._addCheck({ kind: 'endsWith', value: t, ...fe.errToObj(r) })
	}
	min(t, r) {
		return this._addCheck({ kind: 'min', value: t, ...fe.errToObj(r) })
	}
	max(t, r) {
		return this._addCheck({ kind: 'max', value: t, ...fe.errToObj(r) })
	}
	length(t, r) {
		return this._addCheck({ kind: 'length', value: t, ...fe.errToObj(r) })
	}
	nonempty(t) {
		return this.min(1, fe.errToObj(t))
	}
	trim() {
		return new Wr({
			...this._def,
			checks: [...this._def.checks, { kind: 'trim' }]
		})
	}
	toLowerCase() {
		return new Wr({
			...this._def,
			checks: [...this._def.checks, { kind: 'toLowerCase' }]
		})
	}
	toUpperCase() {
		return new Wr({
			...this._def,
			checks: [...this._def.checks, { kind: 'toUpperCase' }]
		})
	}
	get isDatetime() {
		return !!this._def.checks.find((t) => t.kind === 'datetime')
	}
	get isDate() {
		return !!this._def.checks.find((t) => t.kind === 'date')
	}
	get isTime() {
		return !!this._def.checks.find((t) => t.kind === 'time')
	}
	get isDuration() {
		return !!this._def.checks.find((t) => t.kind === 'duration')
	}
	get isEmail() {
		return !!this._def.checks.find((t) => t.kind === 'email')
	}
	get isURL() {
		return !!this._def.checks.find((t) => t.kind === 'url')
	}
	get isEmoji() {
		return !!this._def.checks.find((t) => t.kind === 'emoji')
	}
	get isUUID() {
		return !!this._def.checks.find((t) => t.kind === 'uuid')
	}
	get isNANOID() {
		return !!this._def.checks.find((t) => t.kind === 'nanoid')
	}
	get isCUID() {
		return !!this._def.checks.find((t) => t.kind === 'cuid')
	}
	get isCUID2() {
		return !!this._def.checks.find((t) => t.kind === 'cuid2')
	}
	get isULID() {
		return !!this._def.checks.find((t) => t.kind === 'ulid')
	}
	get isIP() {
		return !!this._def.checks.find((t) => t.kind === 'ip')
	}
	get isCIDR() {
		return !!this._def.checks.find((t) => t.kind === 'cidr')
	}
	get isBase64() {
		return !!this._def.checks.find((t) => t.kind === 'base64')
	}
	get isBase64url() {
		return !!this._def.checks.find((t) => t.kind === 'base64url')
	}
	get minLength() {
		let t = null
		for (const r of this._def.checks)
			r.kind === 'min' && (t === null || r.value > t) && (t = r.value)
		return t
	}
	get maxLength() {
		let t = null
		for (const r of this._def.checks)
			r.kind === 'max' && (t === null || r.value < t) && (t = r.value)
		return t
	}
}
Wr.create = (e) =>
	new Wr({
		checks: [],
		typeName: ye.ZodString,
		coerce: (e == null ? void 0 : e.coerce) ?? !1,
		...Re(e)
	})
function lU(e, t) {
	const r = (e.toString().split('.')[1] || '').length,
		n = (t.toString().split('.')[1] || '').length,
		i = r > n ? r : n,
		a = Number.parseInt(e.toFixed(i).replace('.', '')),
		s = Number.parseInt(t.toFixed(i).replace('.', ''))
	return (a % s) / 10 ** i
}
class xi extends Me {
	constructor() {
		;(super(...arguments),
			(this.min = this.gte),
			(this.max = this.lte),
			(this.step = this.multipleOf))
	}
	_parse(t) {
		if (
			(this._def.coerce && (t.data = Number(t.data)),
			this._getType(t) !== ue.number)
		) {
			const a = this._getOrReturnCtx(t)
			return (
				X(a, {
					code: H.invalid_type,
					expected: ue.number,
					received: a.parsedType
				}),
				ve
			)
		}
		let n
		const i = new Bt()
		for (const a of this._def.checks)
			a.kind === 'int'
				? Pe.isInteger(t.data) ||
					((n = this._getOrReturnCtx(t, n)),
					X(n, {
						code: H.invalid_type,
						expected: 'integer',
						received: 'float',
						message: a.message
					}),
					i.dirty())
				: a.kind === 'min'
					? (a.inclusive ? t.data < a.value : t.data <= a.value) &&
						((n = this._getOrReturnCtx(t, n)),
						X(n, {
							code: H.too_small,
							minimum: a.value,
							type: 'number',
							inclusive: a.inclusive,
							exact: !1,
							message: a.message
						}),
						i.dirty())
					: a.kind === 'max'
						? (a.inclusive ? t.data > a.value : t.data >= a.value) &&
							((n = this._getOrReturnCtx(t, n)),
							X(n, {
								code: H.too_big,
								maximum: a.value,
								type: 'number',
								inclusive: a.inclusive,
								exact: !1,
								message: a.message
							}),
							i.dirty())
						: a.kind === 'multipleOf'
							? lU(t.data, a.value) !== 0 &&
								((n = this._getOrReturnCtx(t, n)),
								X(n, {
									code: H.not_multiple_of,
									multipleOf: a.value,
									message: a.message
								}),
								i.dirty())
							: a.kind === 'finite'
								? Number.isFinite(t.data) ||
									((n = this._getOrReturnCtx(t, n)),
									X(n, { code: H.not_finite, message: a.message }),
									i.dirty())
								: Pe.assertNever(a)
		return { status: i.value, value: t.data }
	}
	gte(t, r) {
		return this.setLimit('min', t, !0, fe.toString(r))
	}
	gt(t, r) {
		return this.setLimit('min', t, !1, fe.toString(r))
	}
	lte(t, r) {
		return this.setLimit('max', t, !0, fe.toString(r))
	}
	lt(t, r) {
		return this.setLimit('max', t, !1, fe.toString(r))
	}
	setLimit(t, r, n, i) {
		return new xi({
			...this._def,
			checks: [
				...this._def.checks,
				{ kind: t, value: r, inclusive: n, message: fe.toString(i) }
			]
		})
	}
	_addCheck(t) {
		return new xi({ ...this._def, checks: [...this._def.checks, t] })
	}
	int(t) {
		return this._addCheck({ kind: 'int', message: fe.toString(t) })
	}
	positive(t) {
		return this._addCheck({
			kind: 'min',
			value: 0,
			inclusive: !1,
			message: fe.toString(t)
		})
	}
	negative(t) {
		return this._addCheck({
			kind: 'max',
			value: 0,
			inclusive: !1,
			message: fe.toString(t)
		})
	}
	nonpositive(t) {
		return this._addCheck({
			kind: 'max',
			value: 0,
			inclusive: !0,
			message: fe.toString(t)
		})
	}
	nonnegative(t) {
		return this._addCheck({
			kind: 'min',
			value: 0,
			inclusive: !0,
			message: fe.toString(t)
		})
	}
	multipleOf(t, r) {
		return this._addCheck({
			kind: 'multipleOf',
			value: t,
			message: fe.toString(r)
		})
	}
	finite(t) {
		return this._addCheck({ kind: 'finite', message: fe.toString(t) })
	}
	safe(t) {
		return this._addCheck({
			kind: 'min',
			inclusive: !0,
			value: Number.MIN_SAFE_INTEGER,
			message: fe.toString(t)
		})._addCheck({
			kind: 'max',
			inclusive: !0,
			value: Number.MAX_SAFE_INTEGER,
			message: fe.toString(t)
		})
	}
	get minValue() {
		let t = null
		for (const r of this._def.checks)
			r.kind === 'min' && (t === null || r.value > t) && (t = r.value)
		return t
	}
	get maxValue() {
		let t = null
		for (const r of this._def.checks)
			r.kind === 'max' && (t === null || r.value < t) && (t = r.value)
		return t
	}
	get isInt() {
		return !!this._def.checks.find(
			(t) =>
				t.kind === 'int' || (t.kind === 'multipleOf' && Pe.isInteger(t.value))
		)
	}
	get isFinite() {
		let t = null,
			r = null
		for (const n of this._def.checks) {
			if (n.kind === 'finite' || n.kind === 'int' || n.kind === 'multipleOf')
				return !0
			n.kind === 'min'
				? (r === null || n.value > r) && (r = n.value)
				: n.kind === 'max' && (t === null || n.value < t) && (t = n.value)
		}
		return Number.isFinite(r) && Number.isFinite(t)
	}
}
xi.create = (e) =>
	new xi({
		checks: [],
		typeName: ye.ZodNumber,
		coerce: (e == null ? void 0 : e.coerce) || !1,
		...Re(e)
	})
class Ri extends Me {
	constructor() {
		;(super(...arguments), (this.min = this.gte), (this.max = this.lte))
	}
	_parse(t) {
		if (this._def.coerce)
			try {
				t.data = BigInt(t.data)
			} catch {
				return this._getInvalidInput(t)
			}
		if (this._getType(t) !== ue.bigint) return this._getInvalidInput(t)
		let n
		const i = new Bt()
		for (const a of this._def.checks)
			a.kind === 'min'
				? (a.inclusive ? t.data < a.value : t.data <= a.value) &&
					((n = this._getOrReturnCtx(t, n)),
					X(n, {
						code: H.too_small,
						type: 'bigint',
						minimum: a.value,
						inclusive: a.inclusive,
						message: a.message
					}),
					i.dirty())
				: a.kind === 'max'
					? (a.inclusive ? t.data > a.value : t.data >= a.value) &&
						((n = this._getOrReturnCtx(t, n)),
						X(n, {
							code: H.too_big,
							type: 'bigint',
							maximum: a.value,
							inclusive: a.inclusive,
							message: a.message
						}),
						i.dirty())
					: a.kind === 'multipleOf'
						? t.data % a.value !== BigInt(0) &&
							((n = this._getOrReturnCtx(t, n)),
							X(n, {
								code: H.not_multiple_of,
								multipleOf: a.value,
								message: a.message
							}),
							i.dirty())
						: Pe.assertNever(a)
		return { status: i.value, value: t.data }
	}
	_getInvalidInput(t) {
		const r = this._getOrReturnCtx(t)
		return (
			X(r, {
				code: H.invalid_type,
				expected: ue.bigint,
				received: r.parsedType
			}),
			ve
		)
	}
	gte(t, r) {
		return this.setLimit('min', t, !0, fe.toString(r))
	}
	gt(t, r) {
		return this.setLimit('min', t, !1, fe.toString(r))
	}
	lte(t, r) {
		return this.setLimit('max', t, !0, fe.toString(r))
	}
	lt(t, r) {
		return this.setLimit('max', t, !1, fe.toString(r))
	}
	setLimit(t, r, n, i) {
		return new Ri({
			...this._def,
			checks: [
				...this._def.checks,
				{ kind: t, value: r, inclusive: n, message: fe.toString(i) }
			]
		})
	}
	_addCheck(t) {
		return new Ri({ ...this._def, checks: [...this._def.checks, t] })
	}
	positive(t) {
		return this._addCheck({
			kind: 'min',
			value: BigInt(0),
			inclusive: !1,
			message: fe.toString(t)
		})
	}
	negative(t) {
		return this._addCheck({
			kind: 'max',
			value: BigInt(0),
			inclusive: !1,
			message: fe.toString(t)
		})
	}
	nonpositive(t) {
		return this._addCheck({
			kind: 'max',
			value: BigInt(0),
			inclusive: !0,
			message: fe.toString(t)
		})
	}
	nonnegative(t) {
		return this._addCheck({
			kind: 'min',
			value: BigInt(0),
			inclusive: !0,
			message: fe.toString(t)
		})
	}
	multipleOf(t, r) {
		return this._addCheck({
			kind: 'multipleOf',
			value: t,
			message: fe.toString(r)
		})
	}
	get minValue() {
		let t = null
		for (const r of this._def.checks)
			r.kind === 'min' && (t === null || r.value > t) && (t = r.value)
		return t
	}
	get maxValue() {
		let t = null
		for (const r of this._def.checks)
			r.kind === 'max' && (t === null || r.value < t) && (t = r.value)
		return t
	}
}
Ri.create = (e) =>
	new Ri({
		checks: [],
		typeName: ye.ZodBigInt,
		coerce: (e == null ? void 0 : e.coerce) ?? !1,
		...Re(e)
	})
class Ro extends Me {
	_parse(t) {
		if (
			(this._def.coerce && (t.data = !!t.data), this._getType(t) !== ue.boolean)
		) {
			const n = this._getOrReturnCtx(t)
			return (
				X(n, {
					code: H.invalid_type,
					expected: ue.boolean,
					received: n.parsedType
				}),
				ve
			)
		}
		return er(t.data)
	}
}
Ro.create = (e) =>
	new Ro({
		typeName: ye.ZodBoolean,
		coerce: (e == null ? void 0 : e.coerce) || !1,
		...Re(e)
	})
class oa extends Me {
	_parse(t) {
		if (
			(this._def.coerce && (t.data = new Date(t.data)),
			this._getType(t) !== ue.date)
		) {
			const a = this._getOrReturnCtx(t)
			return (
				X(a, {
					code: H.invalid_type,
					expected: ue.date,
					received: a.parsedType
				}),
				ve
			)
		}
		if (Number.isNaN(t.data.getTime())) {
			const a = this._getOrReturnCtx(t)
			return (X(a, { code: H.invalid_date }), ve)
		}
		const n = new Bt()
		let i
		for (const a of this._def.checks)
			a.kind === 'min'
				? t.data.getTime() < a.value &&
					((i = this._getOrReturnCtx(t, i)),
					X(i, {
						code: H.too_small,
						message: a.message,
						inclusive: !0,
						exact: !1,
						minimum: a.value,
						type: 'date'
					}),
					n.dirty())
				: a.kind === 'max'
					? t.data.getTime() > a.value &&
						((i = this._getOrReturnCtx(t, i)),
						X(i, {
							code: H.too_big,
							message: a.message,
							inclusive: !0,
							exact: !1,
							maximum: a.value,
							type: 'date'
						}),
						n.dirty())
					: Pe.assertNever(a)
		return { status: n.value, value: new Date(t.data.getTime()) }
	}
	_addCheck(t) {
		return new oa({ ...this._def, checks: [...this._def.checks, t] })
	}
	min(t, r) {
		return this._addCheck({
			kind: 'min',
			value: t.getTime(),
			message: fe.toString(r)
		})
	}
	max(t, r) {
		return this._addCheck({
			kind: 'max',
			value: t.getTime(),
			message: fe.toString(r)
		})
	}
	get minDate() {
		let t = null
		for (const r of this._def.checks)
			r.kind === 'min' && (t === null || r.value > t) && (t = r.value)
		return t != null ? new Date(t) : null
	}
	get maxDate() {
		let t = null
		for (const r of this._def.checks)
			r.kind === 'max' && (t === null || r.value < t) && (t = r.value)
		return t != null ? new Date(t) : null
	}
}
oa.create = (e) =>
	new oa({
		checks: [],
		coerce: (e == null ? void 0 : e.coerce) || !1,
		typeName: ye.ZodDate,
		...Re(e)
	})
class p1 extends Me {
	_parse(t) {
		if (this._getType(t) !== ue.symbol) {
			const n = this._getOrReturnCtx(t)
			return (
				X(n, {
					code: H.invalid_type,
					expected: ue.symbol,
					received: n.parsedType
				}),
				ve
			)
		}
		return er(t.data)
	}
}
p1.create = (e) => new p1({ typeName: ye.ZodSymbol, ...Re(e) })
class g1 extends Me {
	_parse(t) {
		if (this._getType(t) !== ue.undefined) {
			const n = this._getOrReturnCtx(t)
			return (
				X(n, {
					code: H.invalid_type,
					expected: ue.undefined,
					received: n.parsedType
				}),
				ve
			)
		}
		return er(t.data)
	}
}
g1.create = (e) => new g1({ typeName: ye.ZodUndefined, ...Re(e) })
class m1 extends Me {
	_parse(t) {
		if (this._getType(t) !== ue.null) {
			const n = this._getOrReturnCtx(t)
			return (
				X(n, {
					code: H.invalid_type,
					expected: ue.null,
					received: n.parsedType
				}),
				ve
			)
		}
		return er(t.data)
	}
}
m1.create = (e) => new m1({ typeName: ye.ZodNull, ...Re(e) })
class v1 extends Me {
	constructor() {
		;(super(...arguments), (this._any = !0))
	}
	_parse(t) {
		return er(t.data)
	}
}
v1.create = (e) => new v1({ typeName: ye.ZodAny, ...Re(e) })
class y1 extends Me {
	constructor() {
		;(super(...arguments), (this._unknown = !0))
	}
	_parse(t) {
		return er(t.data)
	}
}
y1.create = (e) => new y1({ typeName: ye.ZodUnknown, ...Re(e) })
class Nn extends Me {
	_parse(t) {
		const r = this._getOrReturnCtx(t)
		return (
			X(r, {
				code: H.invalid_type,
				expected: ue.never,
				received: r.parsedType
			}),
			ve
		)
	}
}
Nn.create = (e) => new Nn({ typeName: ye.ZodNever, ...Re(e) })
class _1 extends Me {
	_parse(t) {
		if (this._getType(t) !== ue.undefined) {
			const n = this._getOrReturnCtx(t)
			return (
				X(n, {
					code: H.invalid_type,
					expected: ue.void,
					received: n.parsedType
				}),
				ve
			)
		}
		return er(t.data)
	}
}
_1.create = (e) => new _1({ typeName: ye.ZodVoid, ...Re(e) })
class Er extends Me {
	_parse(t) {
		const { ctx: r, status: n } = this._processInputParams(t),
			i = this._def
		if (r.parsedType !== ue.array)
			return (
				X(r, {
					code: H.invalid_type,
					expected: ue.array,
					received: r.parsedType
				}),
				ve
			)
		if (i.exactLength !== null) {
			const s = r.data.length > i.exactLength.value,
				o = r.data.length < i.exactLength.value
			;(s || o) &&
				(X(r, {
					code: s ? H.too_big : H.too_small,
					minimum: o ? i.exactLength.value : void 0,
					maximum: s ? i.exactLength.value : void 0,
					type: 'array',
					inclusive: !0,
					exact: !0,
					message: i.exactLength.message
				}),
				n.dirty())
		}
		if (
			(i.minLength !== null &&
				r.data.length < i.minLength.value &&
				(X(r, {
					code: H.too_small,
					minimum: i.minLength.value,
					type: 'array',
					inclusive: !0,
					exact: !1,
					message: i.minLength.message
				}),
				n.dirty()),
			i.maxLength !== null &&
				r.data.length > i.maxLength.value &&
				(X(r, {
					code: H.too_big,
					maximum: i.maxLength.value,
					type: 'array',
					inclusive: !0,
					exact: !1,
					message: i.maxLength.message
				}),
				n.dirty()),
			r.common.async)
		)
			return Promise.all(
				[...r.data].map((s, o) => i.type._parseAsync(new Dn(r, s, r.path, o)))
			).then((s) => Bt.mergeArray(n, s))
		const a = [...r.data].map((s, o) =>
			i.type._parseSync(new Dn(r, s, r.path, o))
		)
		return Bt.mergeArray(n, a)
	}
	get element() {
		return this._def.type
	}
	min(t, r) {
		return new Er({
			...this._def,
			minLength: { value: t, message: fe.toString(r) }
		})
	}
	max(t, r) {
		return new Er({
			...this._def,
			maxLength: { value: t, message: fe.toString(r) }
		})
	}
	length(t, r) {
		return new Er({
			...this._def,
			exactLength: { value: t, message: fe.toString(r) }
		})
	}
	nonempty(t) {
		return this.min(1, t)
	}
}
Er.create = (e, t) =>
	new Er({
		type: e,
		minLength: null,
		maxLength: null,
		exactLength: null,
		typeName: ye.ZodArray,
		...Re(t)
	})
function Di(e) {
	if (e instanceof Ye) {
		const t = {}
		for (const r in e.shape) {
			const n = e.shape[r]
			t[r] = kn.create(Di(n))
		}
		return new Ye({ ...e._def, shape: () => t })
	} else
		return e instanceof Er
			? new Er({ ...e._def, type: Di(e.element) })
			: e instanceof kn
				? kn.create(Di(e.unwrap()))
				: e instanceof ca
					? ca.create(Di(e.unwrap()))
					: e instanceof Oi
						? Oi.create(e.items.map((t) => Di(t)))
						: e
}
class Ye extends Me {
	constructor() {
		;(super(...arguments),
			(this._cached = null),
			(this.nonstrict = this.passthrough),
			(this.augment = this.extend))
	}
	_getCached() {
		if (this._cached !== null) return this._cached
		const t = this._def.shape(),
			r = Pe.objectKeys(t)
		return ((this._cached = { shape: t, keys: r }), this._cached)
	}
	_parse(t) {
		if (this._getType(t) !== ue.object) {
			const l = this._getOrReturnCtx(t)
			return (
				X(l, {
					code: H.invalid_type,
					expected: ue.object,
					received: l.parsedType
				}),
				ve
			)
		}
		const { status: n, ctx: i } = this._processInputParams(t),
			{ shape: a, keys: s } = this._getCached(),
			o = []
		if (
			!(this._def.catchall instanceof Nn && this._def.unknownKeys === 'strip')
		)
			for (const l in i.data) s.includes(l) || o.push(l)
		const u = []
		for (const l of s) {
			const f = a[l],
				c = i.data[l]
			u.push({
				key: { status: 'valid', value: l },
				value: f._parse(new Dn(i, c, i.path, l)),
				alwaysSet: l in i.data
			})
		}
		if (this._def.catchall instanceof Nn) {
			const l = this._def.unknownKeys
			if (l === 'passthrough')
				for (const f of o)
					u.push({
						key: { status: 'valid', value: f },
						value: { status: 'valid', value: i.data[f] }
					})
			else if (l === 'strict')
				o.length > 0 &&
					(X(i, { code: H.unrecognized_keys, keys: o }), n.dirty())
			else if (l !== 'strip')
				throw new Error('Internal ZodObject error: invalid unknownKeys value.')
		} else {
			const l = this._def.catchall
			for (const f of o) {
				const c = i.data[f]
				u.push({
					key: { status: 'valid', value: f },
					value: l._parse(new Dn(i, c, i.path, f)),
					alwaysSet: f in i.data
				})
			}
		}
		return i.common.async
			? Promise.resolve()
					.then(async () => {
						const l = []
						for (const f of u) {
							const c = await f.key,
								d = await f.value
							l.push({ key: c, value: d, alwaysSet: f.alwaysSet })
						}
						return l
					})
					.then((l) => Bt.mergeObjectSync(n, l))
			: Bt.mergeObjectSync(n, u)
	}
	get shape() {
		return this._def.shape()
	}
	strict(t) {
		return (
			fe.errToObj,
			new Ye({
				...this._def,
				unknownKeys: 'strict',
				...(t !== void 0
					? {
							errorMap: (r, n) => {
								var a, s
								const i =
									((s = (a = this._def).errorMap) == null
										? void 0
										: s.call(a, r, n).message) ?? n.defaultError
								return r.code === 'unrecognized_keys'
									? { message: fe.errToObj(t).message ?? i }
									: { message: i }
							}
						}
					: {})
			})
		)
	}
	strip() {
		return new Ye({ ...this._def, unknownKeys: 'strip' })
	}
	passthrough() {
		return new Ye({ ...this._def, unknownKeys: 'passthrough' })
	}
	extend(t) {
		return new Ye({
			...this._def,
			shape: () => ({ ...this._def.shape(), ...t })
		})
	}
	merge(t) {
		return new Ye({
			unknownKeys: t._def.unknownKeys,
			catchall: t._def.catchall,
			shape: () => ({ ...this._def.shape(), ...t._def.shape() }),
			typeName: ye.ZodObject
		})
	}
	setKey(t, r) {
		return this.augment({ [t]: r })
	}
	catchall(t) {
		return new Ye({ ...this._def, catchall: t })
	}
	pick(t) {
		const r = {}
		for (const n of Pe.objectKeys(t))
			t[n] && this.shape[n] && (r[n] = this.shape[n])
		return new Ye({ ...this._def, shape: () => r })
	}
	omit(t) {
		const r = {}
		for (const n of Pe.objectKeys(this.shape)) t[n] || (r[n] = this.shape[n])
		return new Ye({ ...this._def, shape: () => r })
	}
	deepPartial() {
		return Di(this)
	}
	partial(t) {
		const r = {}
		for (const n of Pe.objectKeys(this.shape)) {
			const i = this.shape[n]
			t && !t[n] ? (r[n] = i) : (r[n] = i.optional())
		}
		return new Ye({ ...this._def, shape: () => r })
	}
	required(t) {
		const r = {}
		for (const n of Pe.objectKeys(this.shape))
			if (t && !t[n]) r[n] = this.shape[n]
			else {
				let a = this.shape[n]
				for (; a instanceof kn; ) a = a._def.innerType
				r[n] = a
			}
		return new Ye({ ...this._def, shape: () => r })
	}
	keyof() {
		return bO(Pe.objectKeys(this.shape))
	}
}
Ye.create = (e, t) =>
	new Ye({
		shape: () => e,
		unknownKeys: 'strip',
		catchall: Nn.create(),
		typeName: ye.ZodObject,
		...Re(t)
	})
Ye.strictCreate = (e, t) =>
	new Ye({
		shape: () => e,
		unknownKeys: 'strict',
		catchall: Nn.create(),
		typeName: ye.ZodObject,
		...Re(t)
	})
Ye.lazycreate = (e, t) =>
	new Ye({
		shape: e,
		unknownKeys: 'strip',
		catchall: Nn.create(),
		typeName: ye.ZodObject,
		...Re(t)
	})
class Oo extends Me {
	_parse(t) {
		const { ctx: r } = this._processInputParams(t),
			n = this._def.options
		function i(a) {
			for (const o of a) if (o.result.status === 'valid') return o.result
			for (const o of a)
				if (o.result.status === 'dirty')
					return (r.common.issues.push(...o.ctx.common.issues), o.result)
			const s = a.map((o) => new rn(o.ctx.common.issues))
			return (X(r, { code: H.invalid_union, unionErrors: s }), ve)
		}
		if (r.common.async)
			return Promise.all(
				n.map(async (a) => {
					const s = { ...r, common: { ...r.common, issues: [] }, parent: null }
					return {
						result: await a._parseAsync({
							data: r.data,
							path: r.path,
							parent: s
						}),
						ctx: s
					}
				})
			).then(i)
		{
			let a
			const s = []
			for (const u of n) {
				const l = { ...r, common: { ...r.common, issues: [] }, parent: null },
					f = u._parseSync({ data: r.data, path: r.path, parent: l })
				if (f.status === 'valid') return f
				;(f.status === 'dirty' && !a && (a = { result: f, ctx: l }),
					l.common.issues.length && s.push(l.common.issues))
			}
			if (a) return (r.common.issues.push(...a.ctx.common.issues), a.result)
			const o = s.map((u) => new rn(u))
			return (X(r, { code: H.invalid_union, unionErrors: o }), ve)
		}
	}
	get options() {
		return this._def.options
	}
}
Oo.create = (e, t) => new Oo({ options: e, typeName: ye.ZodUnion, ...Re(t) })
function _p(e, t) {
	const r = yn(e),
		n = yn(t)
	if (e === t) return { valid: !0, data: e }
	if (r === ue.object && n === ue.object) {
		const i = Pe.objectKeys(t),
			a = Pe.objectKeys(e).filter((o) => i.indexOf(o) !== -1),
			s = { ...e, ...t }
		for (const o of a) {
			const u = _p(e[o], t[o])
			if (!u.valid) return { valid: !1 }
			s[o] = u.data
		}
		return { valid: !0, data: s }
	} else if (r === ue.array && n === ue.array) {
		if (e.length !== t.length) return { valid: !1 }
		const i = []
		for (let a = 0; a < e.length; a++) {
			const s = e[a],
				o = t[a],
				u = _p(s, o)
			if (!u.valid) return { valid: !1 }
			i.push(u.data)
		}
		return { valid: !0, data: i }
	} else
		return r === ue.date && n === ue.date && +e == +t
			? { valid: !0, data: e }
			: { valid: !1 }
}
class Co extends Me {
	_parse(t) {
		const { status: r, ctx: n } = this._processInputParams(t),
			i = (a, s) => {
				if (f1(a) || f1(s)) return ve
				const o = _p(a.value, s.value)
				return o.valid
					? ((d1(a) || d1(s)) && r.dirty(), { status: r.value, value: o.data })
					: (X(n, { code: H.invalid_intersection_types }), ve)
			}
		return n.common.async
			? Promise.all([
					this._def.left._parseAsync({ data: n.data, path: n.path, parent: n }),
					this._def.right._parseAsync({ data: n.data, path: n.path, parent: n })
				]).then(([a, s]) => i(a, s))
			: i(
					this._def.left._parseSync({ data: n.data, path: n.path, parent: n }),
					this._def.right._parseSync({ data: n.data, path: n.path, parent: n })
				)
	}
}
Co.create = (e, t, r) =>
	new Co({ left: e, right: t, typeName: ye.ZodIntersection, ...Re(r) })
class Oi extends Me {
	_parse(t) {
		const { status: r, ctx: n } = this._processInputParams(t)
		if (n.parsedType !== ue.array)
			return (
				X(n, {
					code: H.invalid_type,
					expected: ue.array,
					received: n.parsedType
				}),
				ve
			)
		if (n.data.length < this._def.items.length)
			return (
				X(n, {
					code: H.too_small,
					minimum: this._def.items.length,
					inclusive: !0,
					exact: !1,
					type: 'array'
				}),
				ve
			)
		!this._def.rest &&
			n.data.length > this._def.items.length &&
			(X(n, {
				code: H.too_big,
				maximum: this._def.items.length,
				inclusive: !0,
				exact: !1,
				type: 'array'
			}),
			r.dirty())
		const a = [...n.data]
			.map((s, o) => {
				const u = this._def.items[o] || this._def.rest
				return u ? u._parse(new Dn(n, s, n.path, o)) : null
			})
			.filter((s) => !!s)
		return n.common.async
			? Promise.all(a).then((s) => Bt.mergeArray(r, s))
			: Bt.mergeArray(r, a)
	}
	get items() {
		return this._def.items
	}
	rest(t) {
		return new Oi({ ...this._def, rest: t })
	}
}
Oi.create = (e, t) => {
	if (!Array.isArray(e))
		throw new Error('You must pass an array of schemas to z.tuple([ ... ])')
	return new Oi({ items: e, typeName: ye.ZodTuple, rest: null, ...Re(t) })
}
class b1 extends Me {
	get keySchema() {
		return this._def.keyType
	}
	get valueSchema() {
		return this._def.valueType
	}
	_parse(t) {
		const { status: r, ctx: n } = this._processInputParams(t)
		if (n.parsedType !== ue.map)
			return (
				X(n, {
					code: H.invalid_type,
					expected: ue.map,
					received: n.parsedType
				}),
				ve
			)
		const i = this._def.keyType,
			a = this._def.valueType,
			s = [...n.data.entries()].map(([o, u], l) => ({
				key: i._parse(new Dn(n, o, n.path, [l, 'key'])),
				value: a._parse(new Dn(n, u, n.path, [l, 'value']))
			}))
		if (n.common.async) {
			const o = new Map()
			return Promise.resolve().then(async () => {
				for (const u of s) {
					const l = await u.key,
						f = await u.value
					if (l.status === 'aborted' || f.status === 'aborted') return ve
					;((l.status === 'dirty' || f.status === 'dirty') && r.dirty(),
						o.set(l.value, f.value))
				}
				return { status: r.value, value: o }
			})
		} else {
			const o = new Map()
			for (const u of s) {
				const l = u.key,
					f = u.value
				if (l.status === 'aborted' || f.status === 'aborted') return ve
				;((l.status === 'dirty' || f.status === 'dirty') && r.dirty(),
					o.set(l.value, f.value))
			}
			return { status: r.value, value: o }
		}
	}
}
b1.create = (e, t, r) =>
	new b1({ valueType: t, keyType: e, typeName: ye.ZodMap, ...Re(r) })
class es extends Me {
	_parse(t) {
		const { status: r, ctx: n } = this._processInputParams(t)
		if (n.parsedType !== ue.set)
			return (
				X(n, {
					code: H.invalid_type,
					expected: ue.set,
					received: n.parsedType
				}),
				ve
			)
		const i = this._def
		;(i.minSize !== null &&
			n.data.size < i.minSize.value &&
			(X(n, {
				code: H.too_small,
				minimum: i.minSize.value,
				type: 'set',
				inclusive: !0,
				exact: !1,
				message: i.minSize.message
			}),
			r.dirty()),
			i.maxSize !== null &&
				n.data.size > i.maxSize.value &&
				(X(n, {
					code: H.too_big,
					maximum: i.maxSize.value,
					type: 'set',
					inclusive: !0,
					exact: !1,
					message: i.maxSize.message
				}),
				r.dirty()))
		const a = this._def.valueType
		function s(u) {
			const l = new Set()
			for (const f of u) {
				if (f.status === 'aborted') return ve
				;(f.status === 'dirty' && r.dirty(), l.add(f.value))
			}
			return { status: r.value, value: l }
		}
		const o = [...n.data.values()].map((u, l) =>
			a._parse(new Dn(n, u, n.path, l))
		)
		return n.common.async ? Promise.all(o).then((u) => s(u)) : s(o)
	}
	min(t, r) {
		return new es({
			...this._def,
			minSize: { value: t, message: fe.toString(r) }
		})
	}
	max(t, r) {
		return new es({
			...this._def,
			maxSize: { value: t, message: fe.toString(r) }
		})
	}
	size(t, r) {
		return this.min(t, r).max(t, r)
	}
	nonempty(t) {
		return this.min(1, t)
	}
}
es.create = (e, t) =>
	new es({
		valueType: e,
		minSize: null,
		maxSize: null,
		typeName: ye.ZodSet,
		...Re(t)
	})
class w1 extends Me {
	get schema() {
		return this._def.getter()
	}
	_parse(t) {
		const { ctx: r } = this._processInputParams(t)
		return this._def.getter()._parse({ data: r.data, path: r.path, parent: r })
	}
}
w1.create = (e, t) => new w1({ getter: e, typeName: ye.ZodLazy, ...Re(t) })
class S1 extends Me {
	_parse(t) {
		if (t.data !== this._def.value) {
			const r = this._getOrReturnCtx(t)
			return (
				X(r, {
					received: r.data,
					code: H.invalid_literal,
					expected: this._def.value
				}),
				ve
			)
		}
		return { status: 'valid', value: t.data }
	}
	get value() {
		return this._def.value
	}
}
S1.create = (e, t) => new S1({ value: e, typeName: ye.ZodLiteral, ...Re(t) })
function bO(e, t) {
	return new ua({ values: e, typeName: ye.ZodEnum, ...Re(t) })
}
class ua extends Me {
	_parse(t) {
		if (typeof t.data != 'string') {
			const r = this._getOrReturnCtx(t),
				n = this._def.values
			return (
				X(r, {
					expected: Pe.joinValues(n),
					received: r.parsedType,
					code: H.invalid_type
				}),
				ve
			)
		}
		if (
			(this._cache || (this._cache = new Set(this._def.values)),
			!this._cache.has(t.data))
		) {
			const r = this._getOrReturnCtx(t),
				n = this._def.values
			return (
				X(r, { received: r.data, code: H.invalid_enum_value, options: n }),
				ve
			)
		}
		return er(t.data)
	}
	get options() {
		return this._def.values
	}
	get enum() {
		const t = {}
		for (const r of this._def.values) t[r] = r
		return t
	}
	get Values() {
		const t = {}
		for (const r of this._def.values) t[r] = r
		return t
	}
	get Enum() {
		const t = {}
		for (const r of this._def.values) t[r] = r
		return t
	}
	extract(t, r = this._def) {
		return ua.create(t, { ...this._def, ...r })
	}
	exclude(t, r = this._def) {
		return ua.create(
			this.options.filter((n) => !t.includes(n)),
			{ ...this._def, ...r }
		)
	}
}
ua.create = bO
class x1 extends Me {
	_parse(t) {
		const r = Pe.getValidEnumValues(this._def.values),
			n = this._getOrReturnCtx(t)
		if (n.parsedType !== ue.string && n.parsedType !== ue.number) {
			const i = Pe.objectValues(r)
			return (
				X(n, {
					expected: Pe.joinValues(i),
					received: n.parsedType,
					code: H.invalid_type
				}),
				ve
			)
		}
		if (
			(this._cache ||
				(this._cache = new Set(Pe.getValidEnumValues(this._def.values))),
			!this._cache.has(t.data))
		) {
			const i = Pe.objectValues(r)
			return (
				X(n, { received: n.data, code: H.invalid_enum_value, options: i }),
				ve
			)
		}
		return er(t.data)
	}
	get enum() {
		return this._def.values
	}
}
x1.create = (e, t) =>
	new x1({ values: e, typeName: ye.ZodNativeEnum, ...Re(t) })
class To extends Me {
	unwrap() {
		return this._def.type
	}
	_parse(t) {
		const { ctx: r } = this._processInputParams(t)
		if (r.parsedType !== ue.promise && r.common.async === !1)
			return (
				X(r, {
					code: H.invalid_type,
					expected: ue.promise,
					received: r.parsedType
				}),
				ve
			)
		const n = r.parsedType === ue.promise ? r.data : Promise.resolve(r.data)
		return er(
			n.then((i) =>
				this._def.type.parseAsync(i, {
					path: r.path,
					errorMap: r.common.contextualErrorMap
				})
			)
		)
	}
}
To.create = (e, t) => new To({ type: e, typeName: ye.ZodPromise, ...Re(t) })
class la extends Me {
	innerType() {
		return this._def.schema
	}
	sourceType() {
		return this._def.schema._def.typeName === ye.ZodEffects
			? this._def.schema.sourceType()
			: this._def.schema
	}
	_parse(t) {
		const { status: r, ctx: n } = this._processInputParams(t),
			i = this._def.effect || null,
			a = {
				addIssue: (s) => {
					;(X(n, s), s.fatal ? r.abort() : r.dirty())
				},
				get path() {
					return n.path
				}
			}
		if (((a.addIssue = a.addIssue.bind(a)), i.type === 'preprocess')) {
			const s = i.transform(n.data, a)
			if (n.common.async)
				return Promise.resolve(s).then(async (o) => {
					if (r.value === 'aborted') return ve
					const u = await this._def.schema._parseAsync({
						data: o,
						path: n.path,
						parent: n
					})
					return u.status === 'aborted'
						? ve
						: u.status === 'dirty' || r.value === 'dirty'
							? La(u.value)
							: u
				})
			{
				if (r.value === 'aborted') return ve
				const o = this._def.schema._parseSync({
					data: s,
					path: n.path,
					parent: n
				})
				return o.status === 'aborted'
					? ve
					: o.status === 'dirty' || r.value === 'dirty'
						? La(o.value)
						: o
			}
		}
		if (i.type === 'refinement') {
			const s = (o) => {
				const u = i.refinement(o, a)
				if (n.common.async) return Promise.resolve(u)
				if (u instanceof Promise)
					throw new Error(
						'Async refinement encountered during synchronous parse operation. Use .parseAsync instead.'
					)
				return o
			}
			if (n.common.async === !1) {
				const o = this._def.schema._parseSync({
					data: n.data,
					path: n.path,
					parent: n
				})
				return o.status === 'aborted'
					? ve
					: (o.status === 'dirty' && r.dirty(),
						s(o.value),
						{ status: r.value, value: o.value })
			} else
				return this._def.schema
					._parseAsync({ data: n.data, path: n.path, parent: n })
					.then((o) =>
						o.status === 'aborted'
							? ve
							: (o.status === 'dirty' && r.dirty(),
								s(o.value).then(() => ({ status: r.value, value: o.value })))
					)
		}
		if (i.type === 'transform')
			if (n.common.async === !1) {
				const s = this._def.schema._parseSync({
					data: n.data,
					path: n.path,
					parent: n
				})
				if (!sa(s)) return ve
				const o = i.transform(s.value, a)
				if (o instanceof Promise)
					throw new Error(
						'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.'
					)
				return { status: r.value, value: o }
			} else
				return this._def.schema
					._parseAsync({ data: n.data, path: n.path, parent: n })
					.then((s) =>
						sa(s)
							? Promise.resolve(i.transform(s.value, a)).then((o) => ({
									status: r.value,
									value: o
								}))
							: ve
					)
		Pe.assertNever(i)
	}
}
la.create = (e, t, r) =>
	new la({ schema: e, typeName: ye.ZodEffects, effect: t, ...Re(r) })
la.createWithPreprocess = (e, t, r) =>
	new la({
		schema: t,
		effect: { type: 'preprocess', transform: e },
		typeName: ye.ZodEffects,
		...Re(r)
	})
class kn extends Me {
	_parse(t) {
		return this._getType(t) === ue.undefined
			? er(void 0)
			: this._def.innerType._parse(t)
	}
	unwrap() {
		return this._def.innerType
	}
}
kn.create = (e, t) =>
	new kn({ innerType: e, typeName: ye.ZodOptional, ...Re(t) })
class ca extends Me {
	_parse(t) {
		return this._getType(t) === ue.null
			? er(null)
			: this._def.innerType._parse(t)
	}
	unwrap() {
		return this._def.innerType
	}
}
ca.create = (e, t) =>
	new ca({ innerType: e, typeName: ye.ZodNullable, ...Re(t) })
class bp extends Me {
	_parse(t) {
		const { ctx: r } = this._processInputParams(t)
		let n = r.data
		return (
			r.parsedType === ue.undefined && (n = this._def.defaultValue()),
			this._def.innerType._parse({ data: n, path: r.path, parent: r })
		)
	}
	removeDefault() {
		return this._def.innerType
	}
}
bp.create = (e, t) =>
	new bp({
		innerType: e,
		typeName: ye.ZodDefault,
		defaultValue: typeof t.default == 'function' ? t.default : () => t.default,
		...Re(t)
	})
class wp extends Me {
	_parse(t) {
		const { ctx: r } = this._processInputParams(t),
			n = { ...r, common: { ...r.common, issues: [] } },
			i = this._def.innerType._parse({
				data: n.data,
				path: n.path,
				parent: { ...n }
			})
		return xo(i)
			? i.then((a) => ({
					status: 'valid',
					value:
						a.status === 'valid'
							? a.value
							: this._def.catchValue({
									get error() {
										return new rn(n.common.issues)
									},
									input: n.data
								})
				}))
			: {
					status: 'valid',
					value:
						i.status === 'valid'
							? i.value
							: this._def.catchValue({
									get error() {
										return new rn(n.common.issues)
									},
									input: n.data
								})
				}
	}
	removeCatch() {
		return this._def.innerType
	}
}
wp.create = (e, t) =>
	new wp({
		innerType: e,
		typeName: ye.ZodCatch,
		catchValue: typeof t.catch == 'function' ? t.catch : () => t.catch,
		...Re(t)
	})
class R1 extends Me {
	_parse(t) {
		if (this._getType(t) !== ue.nan) {
			const n = this._getOrReturnCtx(t)
			return (
				X(n, {
					code: H.invalid_type,
					expected: ue.nan,
					received: n.parsedType
				}),
				ve
			)
		}
		return { status: 'valid', value: t.data }
	}
}
R1.create = (e) => new R1({ typeName: ye.ZodNaN, ...Re(e) })
class cU extends Me {
	_parse(t) {
		const { ctx: r } = this._processInputParams(t),
			n = r.data
		return this._def.type._parse({ data: n, path: r.path, parent: r })
	}
	unwrap() {
		return this._def.type
	}
}
class Ng extends Me {
	_parse(t) {
		const { status: r, ctx: n } = this._processInputParams(t)
		if (n.common.async)
			return (async () => {
				const a = await this._def.in._parseAsync({
					data: n.data,
					path: n.path,
					parent: n
				})
				return a.status === 'aborted'
					? ve
					: a.status === 'dirty'
						? (r.dirty(), La(a.value))
						: this._def.out._parseAsync({
								data: a.value,
								path: n.path,
								parent: n
							})
			})()
		{
			const i = this._def.in._parseSync({
				data: n.data,
				path: n.path,
				parent: n
			})
			return i.status === 'aborted'
				? ve
				: i.status === 'dirty'
					? (r.dirty(), { status: 'dirty', value: i.value })
					: this._def.out._parseSync({ data: i.value, path: n.path, parent: n })
		}
	}
	static create(t, r) {
		return new Ng({ in: t, out: r, typeName: ye.ZodPipeline })
	}
}
class Sp extends Me {
	_parse(t) {
		const r = this._def.innerType._parse(t),
			n = (i) => (sa(i) && (i.value = Object.freeze(i.value)), i)
		return xo(r) ? r.then((i) => n(i)) : n(r)
	}
	unwrap() {
		return this._def.innerType
	}
}
Sp.create = (e, t) =>
	new Sp({ innerType: e, typeName: ye.ZodReadonly, ...Re(t) })
var ye
;(function (e) {
	;((e.ZodString = 'ZodString'),
		(e.ZodNumber = 'ZodNumber'),
		(e.ZodNaN = 'ZodNaN'),
		(e.ZodBigInt = 'ZodBigInt'),
		(e.ZodBoolean = 'ZodBoolean'),
		(e.ZodDate = 'ZodDate'),
		(e.ZodSymbol = 'ZodSymbol'),
		(e.ZodUndefined = 'ZodUndefined'),
		(e.ZodNull = 'ZodNull'),
		(e.ZodAny = 'ZodAny'),
		(e.ZodUnknown = 'ZodUnknown'),
		(e.ZodNever = 'ZodNever'),
		(e.ZodVoid = 'ZodVoid'),
		(e.ZodArray = 'ZodArray'),
		(e.ZodObject = 'ZodObject'),
		(e.ZodUnion = 'ZodUnion'),
		(e.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
		(e.ZodIntersection = 'ZodIntersection'),
		(e.ZodTuple = 'ZodTuple'),
		(e.ZodRecord = 'ZodRecord'),
		(e.ZodMap = 'ZodMap'),
		(e.ZodSet = 'ZodSet'),
		(e.ZodFunction = 'ZodFunction'),
		(e.ZodLazy = 'ZodLazy'),
		(e.ZodLiteral = 'ZodLiteral'),
		(e.ZodEnum = 'ZodEnum'),
		(e.ZodEffects = 'ZodEffects'),
		(e.ZodNativeEnum = 'ZodNativeEnum'),
		(e.ZodOptional = 'ZodOptional'),
		(e.ZodNullable = 'ZodNullable'),
		(e.ZodDefault = 'ZodDefault'),
		(e.ZodCatch = 'ZodCatch'),
		(e.ZodPromise = 'ZodPromise'),
		(e.ZodBranded = 'ZodBranded'),
		(e.ZodPipeline = 'ZodPipeline'),
		(e.ZodReadonly = 'ZodReadonly'))
})(ye || (ye = {}))
const Uz = Wr.create
xi.create
Ri.create
Ro.create
oa.create
Nn.create
const Bz = Er.create,
	Vz = Ye.create
Oo.create
Co.create
Oi.create
const zz = ua.create
To.create
kn.create
ca.create
const Hz = {
	string: (e) => Wr.create({ ...e, coerce: !0 }),
	number: (e) => xi.create({ ...e, coerce: !0 }),
	boolean: (e) => Ro.create({ ...e, coerce: !0 }),
	bigint: (e) => Ri.create({ ...e, coerce: !0 }),
	date: (e) => oa.create({ ...e, coerce: !0 })
}
function fU(e) {
	return !(typeof e != 'object' || e instanceof Array)
}
class dU {
	filterOutNonSupportedKeys(t, r) {
		const n = Object.create({})
		return fU(t)
			? (Object.keys(t).forEach((i) => {
					r.indexOf(i) >= 0
						? (n[i] = t[i])
						: console.warn(
								'Warning - unsupported key provided to configuration: ',
								i
							)
				}),
				n)
			: Object.create({})
	}
}
const O1 = [
	'cname',
	'secureDistribution',
	'privateCdn',
	'signUrl',
	'longUrlSignature',
	'shorten',
	'useRootPath',
	'secure',
	'forceVersion',
	'analytics',
	'queryParams'
]
class Lg extends dU {
	constructor(t) {
		super()
		const r = this.filterOutNonSupportedKeys(t, O1)
		Object.assign(this, { secure: !0 }, r)
	}
	extend(t) {
		const r = this.filterOutNonSupportedKeys(t, O1)
		return new Lg(Object.assign({}, this, r))
	}
	setCname(t) {
		return ((this.cname = t), this)
	}
	setSecureDistribution(t) {
		return ((this.secureDistribution = t), this)
	}
	setPrivateCdn(t) {
		return ((this.privateCdn = t), this)
	}
	setSignUrl(t) {
		return ((this.signUrl = t), this)
	}
	setLongUrlSignature(t) {
		return ((this.longUrlSignature = t), this)
	}
	setShorten(t) {
		return ((this.shorten = t), this)
	}
	setUseRootPath(t) {
		return ((this.useRootPath = t), this)
	}
	setSecure(t) {
		return ((this.secure = t), this)
	}
	setForceVersion(t) {
		return ((this.forceVersion = t), this)
	}
	setQueryParams(t) {
		return ((this.queryParams = t), this)
	}
}
class Vt {
	constructor(t) {
		;((this.values = []),
			(this.delimiter = ':'),
			this.hasValue(t) && this.addValue(t))
	}
	toString() {
		return this.values.join(this.delimiter)
	}
	hasValue(t) {
		return typeof t < 'u' && t !== null && t !== ''
	}
	addValue(t) {
		return (
			Array.isArray(t)
				? (this.values = this.values.concat(t))
				: this.values.push(t),
			(this.values = this.values.filter((r) => this.hasValue(r))),
			this
		)
	}
	setDelimiter(t) {
		return ((this.delimiter = t), this)
	}
}
class hU extends Error {
	constructor(t = 'Unsupported') {
		super(t)
	}
}
function jg(e) {
	return new hU(e)
}
function pU() {
	return (
		this._qualifierModel || {
			error: jg(`unsupported qualifier ${this.constructor.name}`)
		}
	)
}
class Ug {
	constructor() {
		this._qualifierModel = {}
	}
	toJson() {
		return pU.apply(this)
	}
}
class je extends Ug {
	constructor(t, r) {
		;(super(),
			(this.delimiter = '_'),
			(this.key = t),
			r instanceof Vt
				? (this.qualifierValue = r)
				: ((this.qualifierValue = new Vt()), this.qualifierValue.addValue(r)))
	}
	toString() {
		const { key: t, delimiter: r, qualifierValue: n } = this
		return `${t}${r}${n.toString()}`
	}
	addValue(t) {
		return (this.qualifierValue.addValue(t), this)
	}
}
class wt extends je {
	constructor(t, r) {
		let n
		;(r ? (n = new Vt([t, `${r}`]).setDelimiter(':')) : (n = t),
			super('fl', n),
			(this.flagValue = r))
	}
	toString() {
		return super.toString().replace(/\./g, '%2E')
	}
	getFlagValue() {
		return this.flagValue
	}
}
function gU(e, t) {
	const r = Array.from(e.entries())
	return (
		t.forEach((n) => {
			r.push(['fl', n])
		}),
		r.sort().map((n) => n[1])
	)
}
function mU() {
	var e, t, r
	const n = this._actionModel && Object.keys(this._actionModel).length,
		i =
			(r =
				(t =
					(e = this._actionModel) === null || e === void 0
						? void 0
						: e.source) === null || t === void 0
					? void 0
					: t.transformation) === null || r === void 0
				? void 0
				: r.error
	return i && i instanceof Error
		? { error: i }
		: n
			? this._actionModel
			: { error: jg(`unsupported action ${this.constructor.name}`) }
}
class vU {
	constructor() {
		this._actionModel = {}
	}
	toJson() {
		return mU.apply(this)
	}
}
class pr extends vU {
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
	setActionTag(t) {
		return ((this.actionTag = t), this)
	}
	toString() {
		return (
			this.prepareQualifiers(),
			gU(this.qualifiers, this.flags).join(this.delimiter)
		)
	}
	addQualifier(t) {
		if (typeof t == 'string') {
			const [r, n] = t.toLowerCase().split('_')
			r === 'fl'
				? this.flags.push(new wt(n))
				: this.qualifiers.set(r, new je(r, n))
		} else this.qualifiers.set(t.key, t)
		return this
	}
	addFlag(t) {
		return (
			typeof t == 'string'
				? this.flags.push(new wt(t))
				: t instanceof wt && this.flags.push(t),
			this
		)
	}
	addValueToQualifier(t, r) {
		return (this.qualifiers.get(t).addValue(r), this)
	}
}
function xp(e) {
	return e && (e.match(/^#/) ? `rgb:${e.substr(1)}` : e)
}
class yU extends pr {
	constructor(t) {
		;(super(),
			(this._actionModel = {}),
			this.addQualifier(new je('b', new Vt(xp(t)).setDelimiter('_'))),
			(this._actionModel.color = t),
			(this._actionModel.actionType = 'backgroundColor'))
	}
	static fromJson(t) {
		const { color: r } = t
		return new this(r)
	}
}
class C1 {
	constructor(t) {
		this.raw = t
	}
	toString() {
		return this.raw
	}
	toJson() {
		return { error: jg(`unsupported action ${this.constructor.name}`) }
	}
}
function _U(e) {
	const t = e
	return 'error' in t && !!t.error
}
function bU() {
	return new wt('ignore_aspect_ratio')
}
function wU() {
	return new wt('lossy')
}
function SU() {
	return new wt('no_overflow')
}
function xU() {
	return new wt('preserve_transparency')
}
function RU(e) {
	return new wt('progressive', e)
}
function OU() {
	return new wt('region_relative')
}
function CU() {
	return new wt('relative')
}
function TU() {
	return new wt('tiled')
}
class wO extends Vt {
	constructor(t) {
		;(super(t), (this.val = t))
	}
	getValue() {
		return this.val
	}
}
function ki(e) {
	const t = {}
	return (
		Object.keys(e).forEach((r) => {
			t[e[r]] = r
		}),
		t
	)
}
const SO = {
		limitFit: 'limit',
		limitFill: 'lfill',
		minimumFit: 'mfit',
		thumbnail: 'thumb',
		limitPad: 'lpad',
		minimumPad: 'mpad',
		autoPad: 'auto_pad'
	},
	EU = {
		colorSpace: 'cs',
		dpr: 'dpr',
		density: 'dn',
		defaultImage: 'd',
		format: 'f',
		quality: 'q'
	},
	AU = {
		redEye: 'redeye',
		advancedRedEye: 'adv_redeye',
		oilPaint: 'oil_paint',
		unsharpMask: 'unsharp_mask',
		makeTransparent: 'make_transparent',
		generativeRestore: 'gen_restore',
		upscale: 'upscale'
	},
	xO = {
		autoBest: 'auto:best',
		autoEco: 'auto:eco',
		autoGood: 'auto:good',
		autoLow: 'auto:low',
		jpegminiHigh: 'jpegmini:1',
		jpegminiMedium: 'jpegmini:2',
		jpegminiBest: 'jpegmini:0'
	},
	MU = {
		fullHd: 'full_hd',
		fullHdWifi: 'full_hd_wifi',
		fullHdLean: 'full_hd_lean',
		hdLean: 'hd_lean'
	},
	RO = { 444: 'CHROMA_444', 420: 'CHROMA_420' },
	PU = {
		noCmyk: 'no_cmyk',
		keepCmyk: 'keep_cmyk',
		tinySrgb: 'tinysrgb',
		srgbTrueColor: 'srgb:truecolor'
	},
	IU = { antiRemoval: 'anti_removal' },
	kU = ki(RO)
ki(PU)
const qU = ki(SO),
	$U = ki(EU)
ki(AU)
ki(xO)
ki(MU)
class OO extends pr {
	constructor(t, r, n) {
		;(super(), (this._actionModel = {}))
		let i
		;(r instanceof wO ? (i = r.getValue()) : (i = r),
			(this._actionModel.actionType = $U[t]),
			(this._actionModel[n] = i),
			this.addQualifier(new je(t, r)))
	}
}
class FU extends wt {
	constructor(t) {
		super('progressive', t)
	}
}
class ts extends OO {
	constructor(t, r) {
		super(t, r, 'formatType')
	}
	lossy() {
		return ((this._actionModel.lossy = !0), this.addFlag(wU()), this)
	}
	progressive(t) {
		return (
			t instanceof FU
				? ((this._actionModel.progressive = { mode: t.getFlagValue() }),
					this.addFlag(t))
				: ((this._actionModel.progressive = { mode: t }), this.addFlag(RU(t))),
			this
		)
	}
	preserveTransparency() {
		return (
			(this._actionModel.preserveTransparency = !0),
			this.addFlag(xU()),
			this
		)
	}
	static fromJson(t) {
		const {
			formatType: r,
			lossy: n,
			progressive: i,
			preserveTransparency: a
		} = t
		let s
		return (
			r ? (s = new this('f', r)) : (s = new this('f')),
			i && (i.mode ? s.progressive(i.mode) : s.progressive()),
			n && s.lossy(),
			a && s.preserveTransparency(),
			s
		)
	}
}
class ru {
	constructor() {
		this.actions = []
	}
	addAction(t) {
		let r
		if (typeof t == 'string') {
			if (t.indexOf('/') >= 0)
				throw 'addAction cannot accept a string with a forward slash in it - /, use .addTransformation() instead'
			r = new C1(t)
		} else r = t
		return (this.actions.push(r), this)
	}
	addTransformation(t) {
		return (
			t instanceof ru
				? (this.actions = this.actions.concat(t.actions))
				: this.actions.push(new C1(t)),
			this
		)
	}
	toString() {
		return this.actions
			.map((t) => t.toString())
			.filter((t) => t)
			.join('/')
	}
	animated(t) {
		return this.addAction(t)
	}
	border(t) {
		return this.addAction(t)
	}
	reshape(t) {
		return this.addAction(t)
	}
	resize(t) {
		return this.addAction(t)
	}
	quality(t) {
		return (this.addAction(new ts('q', t)), this)
	}
	format(t) {
		return (this.addAction(new ts('f', t)), this)
	}
	roundCorners(t) {
		return this.addAction(t)
	}
	overlay(t) {
		return this.addAction(t)
	}
	underlay(t) {
		return (t.setLayerType('u'), this.addAction(t))
	}
	addVariable(t) {
		return this.addAction(t)
	}
	conditional(t) {
		return this.addAction(t)
	}
	effect(t) {
		return this.addAction(t)
	}
	adjust(t) {
		return this.addAction(t)
	}
	rotate(t) {
		return this.addAction(t)
	}
	namedTransformation(t) {
		return this.addAction(t)
	}
	delivery(t) {
		return this.addAction(t)
	}
	backgroundColor(t) {
		return this.addAction(new yU(t))
	}
	psdTools(t) {
		return this.addAction(t)
	}
	extract(t) {
		return this.addAction(t)
	}
	addFlag(t) {
		const r = new pr()
		let n = t
		return (
			typeof t == 'string' && (n = new wt(t)),
			r.addQualifier(n),
			this.addAction(r)
		)
	}
	customFunction(t) {
		return this.addAction(t)
	}
	transcode(t) {
		return this.addAction(t)
	}
	videoEdit(t) {
		return this.addAction(t)
	}
	toJson() {
		const t = []
		for (const r of this.actions) {
			const n = r.toJson()
			if (_U(n)) return n
			t.push(n)
		}
		return { actions: t }
	}
}
class DU extends ru {}
class NU extends ru {}
function T1(e) {
	let t = ''
	return (
		typeof window < 'u'
			? (t = btoa(encodeURI(decodeURI(e))))
			: (t = global.Buffer.from(e).toString('base64')),
		t.replace(/\+/g, '-').replace(/\//g, '_')
	)
}
function Rp(e) {
	const t = e.toString()
	return t.match(/[A-Z]/gi) || (t.length > 1 && t[0] === '0')
		? t
		: !isNaN(parseFloat(t)) && t.indexOf(':') === -1 && t.indexOf('.') === -1
			? `${t}.0`
			: t
}
class LU extends Vt {}
class jU extends pr {
	constructor(t, r, n) {
		;(super(),
			(this._actionModel = { dimensions: {} }),
			(this._actionModel.actionType = qU[t] || t),
			this.addQualifier(new je('c', t)),
			r && this.width(r),
			n && this.height(n))
	}
	height(t) {
		return (
			(this._actionModel.dimensions.height = t),
			this.addQualifier(new je('h', t))
		)
	}
	width(t) {
		return (
			(this._actionModel.dimensions.width = t),
			this.addQualifier(new je('w', t))
		)
	}
	aspectRatio(t) {
		if (t instanceof LU)
			return (
				(this._actionModel.dimensions.aspectRatio = `${t}`),
				this.addQualifier(new je('ar', t))
			)
		if (typeof t == 'number' || typeof t == 'string')
			return (
				(this._actionModel.dimensions.aspectRatio = Rp(t)),
				this.addQualifier(new je('ar', Rp(t)))
			)
		if (t instanceof wt)
			return (
				(this._actionModel.dimensions.aspectRatio = `${t.qualifierValue}`),
				this.addFlag(t)
			)
	}
	relative() {
		return ((this._actionModel.relative = !0), this.addFlag(CU()))
	}
	regionRelative() {
		return ((this._actionModel.regionRelative = !0), this.addFlag(OU()))
	}
	static fromJson(t) {
		const { actionType: r, dimensions: n, relative: i, regionRelative: a } = t,
			{ aspectRatio: s, width: o, height: u } = n,
			l = SO[r] || r,
			f = new this(l, o, u)
		return (
			s && f.aspectRatio(s === 'ignore_aspect_ratio' ? bU() : s),
			i && f.relative(),
			a && f.regionRelative(),
			f
		)
	}
}
class Bg extends je {
	constructor(t) {
		super('g', new Vt(t))
	}
}
class CO extends Bg {
	constructor() {
		super('auto')
	}
	autoFocus(...t) {
		return (this.addValue(t), this)
	}
}
class TO extends Bg {
	constructor(t) {
		super(t)
	}
	fallbackGravity(t) {
		return (this.addValue(t.qualifierValue), this)
	}
}
class EO extends Bg {
	constructor(t) {
		super(t)
	}
}
function Gz(e) {
	return new EO(e)
}
function AO(...e) {
	const t = [...e]
	return new TO(t)
}
function MO() {
	return new CO()
}
class fa extends Vt {
	constructor(t) {
		;(super(), (this.name = t))
	}
	toString() {
		return this.name
	}
}
function UU() {
	return new fa('ocr_text')
}
function BU(e) {
	return e && `${e}`.split(':')[0] === 'auto'
}
function VU(e) {
	const t = Vg(e)
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
	].includes(t)
}
function Vg(e) {
	return `${e}`.replace('g_', '')
}
function zU(e) {
	return { compass: Vg(e), gravityType: 'direction' }
}
function HU(e) {
	return Vg(e) === 'ocr_text'
}
function GU() {
	return { gravityType: 'ocr' }
}
function WU(e) {
	return `${e.qualifierValue}`.split(':')[0] === 'auto'
}
function KU(e) {
	const r = e.toString().split('_'),
		n = { object: r[0] }
	return (
		r.length > 1 && (r[1] === 'avoid' ? (n.avoid = !0) : (n.weight = +r[1])),
		n
	)
}
function PO(e) {
	let t
	const r = e === 'auto' ? new CO() : e
	return (
		`${e}`.startsWith('auto:')
			? (t = `${e}`.split(':').filter((i) => i !== 'auto'))
			: (t = r.qualifierValue.values.filter((i) => i !== 'auto')),
		{ gravityType: 'auto', autoFocus: t.map(KU) }
	)
}
function QU(e) {
	const t = `${e}`.split(':').includes('auto'),
		r = e.qualifierValue.values,
		i = {
			gravityType: 'object',
			focusOnObjects: (t ? r.slice(0, r.length - 1) : r).map((a) => `${a}`)
		}
	if (t) {
		const a = r[r.length - 1].values.slice(1),
			s = MO().autoFocus(...a)
		i.fallbackGravity = PO(s)
	}
	return i
}
function ZU(e) {
	const r = e.split(':').map((n) => new fa(n))
	return new TO(r)
}
function IO(e) {
	return VU(e)
		? zU(e)
		: HU(e)
			? GU()
			: BU(e) || WU(e)
				? PO(e)
				: QU(typeof e == 'string' ? ZU(e) : e)
}
class zg extends Vt {
	constructor(t, r) {
		;(super(), (this._weight = r), (this.focusOn = t), (this.shouldAvoid = !1))
	}
	static focusOn(t, r) {
		const n = t instanceof fa ? t : new fa(t)
		return new zg(n, r)
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
	weight(t) {
		return ((this._weight = t), this)
	}
	avoid() {
		return ((this.shouldAvoid = !0), this)
	}
}
class YU extends Vt {
	constructor(t) {
		;(super(), (this.val = t))
	}
	toString() {
		return this.val
	}
}
function JU(e) {
	return e.gravityType === 'direction'
}
function XU(e) {
	return e.gravityType === 'ocr'
}
function eB(e) {
	return e.gravityType === 'auto'
}
function tB(e) {
	const { object: t, weight: r, avoid: n } = e,
		i = new zg(new fa(t))
	return ((r || r === 0) && i.weight(r), n && i.avoid(), i)
}
function kO(e) {
	const r = (e.autoFocus || []).map(tB)
	return MO().autoFocus(...r)
}
function rB(e) {
	const t = (e.focusOnObjects || []).map((n) => new fa(n)),
		r = AO(...t)
	if (e.fallbackGravity) {
		const n = kO(e.fallbackGravity)
		r.fallbackGravity(n)
	}
	return r
}
function qO(e) {
	return JU(e)
		? new EO(new YU(e.compass))
		: XU(e)
			? AO(UU())
			: eB(e)
				? kO(e)
				: rB(e)
}
class nB extends jU {
	gravity(t) {
		this._actionModel.gravity = IO(t)
		const r = typeof t == 'string' ? new je('g', t) : t
		return this.addQualifier(r)
	}
	static fromJson(t) {
		const r = super.fromJson.apply(this, [t])
		return (t.gravity && r.gravity(qO(t.gravity)), r)
	}
}
function iB() {
	return ''
}
function $O(e, t) {
	return `bo_${e}px_solid_${t}`
}
class aB extends pr {
	constructor() {
		;(super(), (this._actionModel = {}))
	}
	gravity(t) {
		return (this.addQualifier(t), (this._actionModel.gravity = IO(t)), this)
	}
	tiled() {
		return (this.addFlag(TU()), (this._actionModel.tiled = !0), this)
	}
	allowOverflow(t = !0) {
		return (
			t === !1 && this.addFlag(SU()),
			(this._actionModel.allowOverflow = t),
			this
		)
	}
	offsetX(t) {
		return (
			this.addQualifier(new je('x', t)),
			(this._actionModel.offsetX = t),
			this
		)
	}
	offsetY(t) {
		return (
			this.addQualifier(new je('y', t)),
			(this._actionModel.offsetY = t),
			this
		)
	}
}
function sB() {
	return 'normal'
}
function oB() {
	return 'normal'
}
class ps extends Ug {
	encodeAssetPublicID(t) {
		return t.replace(/\//g, ':')
	}
	transformation(t) {
		return (
			(this._qualifierModel.transformation = t.toJson()),
			(this._transformation = t),
			this
		)
	}
	getTransformation() {
		return this._transformation
	}
}
class uB extends ps {
	constructor(t) {
		;(super(),
			(this._publicID = t),
			(this._qualifierModel = { publicId: t, sourceType: 'video' }))
	}
	getOpenSourceString(t) {
		const r = this.encodeAssetPublicID(this._publicID)
		return `${t}_video:${r}`
	}
	static fromJson(t, r) {
		const { publicId: n, transformation: i } = t,
			a = new this(n)
		return (i && a.transformation(r(i)), a)
	}
}
class lB extends ps {
	constructor(t) {
		;(super(),
			(this._publicID = t),
			(this._qualifierModel = { publicId: t, sourceType: 'image' }))
	}
	getOpenSourceString(t) {
		const r = this.encodeAssetPublicID(this._publicID)
		return this._format ? `${t}_${r}.${this._format.toString()}` : `${t}_${r}`
	}
	format(t) {
		return ((this._format = t), this)
	}
	toJson() {
		const t = super.toJson()
		return (
			t.publicId &&
				this._format &&
				(t.publicId = `${t.publicId}.${this._format.toString()}`),
			t
		)
	}
	static fromJson(t, r) {
		const { publicId: n, transformation: i } = t,
			a = new this(n)
		return (i && a.transformation(r(i)), a)
	}
}
function FO(e = '') {
	return e.replace(/,/g, '%2C').replace(/\//g, '%2F')
}
function cB(e) {
	return typeof e == 'object' && e.width != null && e.color != null
}
class DO extends Ug {
	constructor(t, r) {
		if ((super(), !t || !r))
			throw 'You must provide a fontFamily and fontSize to a TextStyle'
		;((this._qualifierModel.fontFamily = t),
			(this._qualifierModel.fontSize = r))
	}
	lineSpacing(t) {
		return ((this._qualifierModel.lineSpacing = t), this)
	}
	letterSpacing(t) {
		return ((this._qualifierModel.letterSpacing = t), this)
	}
	fontAntialias(t) {
		return ((this._qualifierModel.fontAntialias = t), this)
	}
	fontFamily(t) {
		return ((this._qualifierModel.fontFamily = t), this)
	}
	fontSize(t) {
		return ((this._qualifierModel.fontSize = t), this)
	}
	fontWeight(t) {
		return ((this._qualifierModel.fontWeight = t), this)
	}
	fontStyle(t) {
		return ((this._qualifierModel.fontStyle = t), this)
	}
	fontHinting(t) {
		return ((this._qualifierModel.fontHinting = t), this)
	}
	textDecoration(t) {
		return ((this._qualifierModel.textDecoration = t), this)
	}
	textAlignment(t) {
		return ((this._qualifierModel.textAlignment = t), this)
	}
	stroke(t) {
		if (t) {
			const r = t.split('_')
			this._qualifierModel.stroke = {
				width: +r[1].replace('px', ''),
				color: r[r.length - 1]
			}
		} else this._qualifierModel.stroke = !0
		return this
	}
	toString() {
		const { stroke: t } = this._qualifierModel
		let r = ''
		return (
			t && (r = cB(t) ? `stroke_${$O(t.width, t.color)}` : 'stroke'),
			[
				`${FO(this._qualifierModel.fontFamily)}_${this._qualifierModel.fontSize}`,
				this._qualifierModel.fontWeight !== sB() &&
					this._qualifierModel.fontWeight,
				this._qualifierModel.fontStyle !== oB() &&
					this._qualifierModel.fontStyle,
				this._qualifierModel.textDecoration !== iB() &&
					this._qualifierModel.textDecoration,
				this._qualifierModel.textAlignment,
				r,
				this._qualifierModel.letterSpacing &&
					`letter_spacing_${this._qualifierModel.letterSpacing}`,
				this._qualifierModel.lineSpacing &&
					`line_spacing_${this._qualifierModel.lineSpacing}`,
				this._qualifierModel.fontAntialias &&
					`antialias_${this._qualifierModel.fontAntialias}`,
				this._qualifierModel.fontHinting &&
					`hinting_${this._qualifierModel.fontHinting}`
			]
				.filter((n) => n)
				.join('_')
		)
	}
}
class fB extends ps {
	constructor(t, r) {
		;(super(),
			(this.type = 'text'),
			(this.text = t),
			(this._textStyle = r),
			(this._qualifierModel.sourceType = 'text'),
			(this._qualifierModel.text = t),
			r instanceof DO && (this._qualifierModel.textStyle = r.toJson()))
	}
	encodeText(t) {
		return FO(t)
	}
	textColor(t) {
		return ((this._textColor = t), (this._qualifierModel.textColor = t), this)
	}
	backgroundColor(t) {
		return (
			(this._backgroundColor = t),
			(this._qualifierModel.backgroundColor = t),
			this
		)
	}
	textFit(t) {
		return ((this._textFit = t), this)
	}
	getOpenSourceString(t) {
		const r = [
				this.type,
				this._textStyle && this._textStyle.toString(),
				this.encodeText(this.text)
			]
				.filter((i) => i)
				.join(':'),
			n = new pr()
		return (
			n.addQualifier(new je(t, r)),
			this._textColor && n.addQualifier(new je('co', xp(this._textColor))),
			this._backgroundColor &&
				n.addQualifier(new je('b', xp(this._backgroundColor))),
			this._textFit && n.addQualifier(this._textFit),
			n.toString()
		)
	}
}
class dB extends ps {
	constructor(t) {
		;(super(),
			(this._qualifierModel = { sourceType: 'fetch', url: t }),
			(this._remoteURL = t))
	}
	getOpenSourceString(t) {
		return this._format
			? `${t}_fetch:${T1(this._remoteURL)}.${this._format.toString()}`
			: `${t}_fetch:${T1(this._remoteURL)}`
	}
	format(t) {
		return (
			(this._qualifierModel.format = t.toString()),
			(this._format = t),
			this
		)
	}
	static fromJson(t, r) {
		const { url: n, transformation: i, format: a } = t,
			s = new this(n)
		return (i && s.transformation(r(i)), a && s.format(new wO(a)), s)
	}
}
function hB(e) {
	const {
			fontFamily: t,
			fontSize: r,
			fontWeight: n,
			fontStyle: i,
			fontAntialias: a,
			fontHinting: s,
			textDecoration: o,
			textAlignment: u,
			stroke: l,
			letterSpacing: f,
			lineSpacing: c
		} = e,
		d = new DO(t, r)
	return (
		n && d.fontWeight(n),
		i && d.fontStyle(i),
		a && d.fontAntialias(a),
		s && d.fontHinting(s),
		o && d.textDecoration(o),
		u && d.textAlignment(u),
		l && (d.stroke(), typeof l != 'boolean' && d.stroke($O(l.width, l.color))),
		f && d.letterSpacing(f),
		c && d.lineSpacing(c),
		d
	)
}
class NO extends fB {
	constructor(t, r) {
		super(t, r)
	}
	static fromJson(t, r) {
		const {
				text: n,
				textStyle: i,
				textColor: a,
				backgroundColor: s,
				transformation: o
			} = t,
			u = new this(n, i ? hB(i) : void 0)
		return (
			o && u.transformation(r(o)),
			a && u.textColor(a),
			s && u.backgroundColor(s),
			u
		)
	}
}
class pB extends ps {
	constructor(t) {
		;(super(), (this._qualifierModel = { sourceType: 'audio', publicId: t }))
	}
	getOpenSourceString(t) {
		const r = this.encodeAssetPublicID(this._qualifierModel.publicId)
		return `${t}_audio:${r}`
	}
	static fromJson(t, r) {
		const { publicId: n, transformation: i } = t,
			a = new this(n)
		return (i && a.transformation(r(i)), a)
	}
}
function Wz(e, t) {
	return new NO(e, t)
}
class gB extends nB {
	x(t) {
		return ((this._actionModel.x = t), this.addQualifier(new je('x', t)))
	}
	y(t) {
		return ((this._actionModel.y = t), this.addQualifier(new je('y', t)))
	}
	static fromJson(t) {
		const r = super.fromJson.apply(this, [t])
		return (t.x && r.x(t.x), t.y && r.y(t.y), r)
	}
}
function Kz(e, t) {
	return new gB('fill', e, t)
}
class E1 extends pr {
	constructor(t, r) {
		;(super(), this.addQualifier(new je('e', new Vt([t, r]))))
	}
}
function mB(e) {
	return e && e.sourceType === 'image'
}
function vB(e) {
	return e && e.sourceType === 'fetch'
}
function yB(e) {
	return e && e.sourceType === 'text'
}
function _B(e) {
	return e && e.sourceType === 'audio'
}
function bB(e, t) {
	return yB(e)
		? NO.fromJson(e, t)
		: mB(e)
			? lB.fromJson(e, t)
			: vB(e)
				? dB.fromJson(e, t)
				: _B(e)
					? pB.fromJson(e, t)
					: uB.fromJson(e, t)
}
function wB(e) {
	const { offsetX: t, offsetY: r, tiled: n, allowOverflow: i, gravity: a } = e,
		s = new aB()
	return (
		t && s.offsetX(t),
		r && s.offsetY(r),
		n && s.tiled(),
		i != null && s.allowOverflow(i),
		a && s.gravity(qO(a)),
		s
	)
}
class SB extends pr {
	constructor() {
		;(super(), (this._actionModel = {}))
	}
	startOffset(t) {
		const r = new je('so', t)
		return (
			this.addQualifier(r),
			(this._actionModel.startOffset = r.qualifierValue.toString()),
			this
		)
	}
	endOffset(t) {
		const r = new je('eo', t)
		return (
			this.addQualifier(r),
			(this._actionModel.endOffset = r.qualifierValue.toString()),
			this
		)
	}
	duration(t) {
		const r = new je('du', t)
		return (
			this.addQualifier(r),
			(this._actionModel.duration = r.qualifierValue.toString()),
			this
		)
	}
}
function xB(e) {
	const { startOffset: t, endOffset: r, duration: n } = e,
		i = new SB()
	return (t && i.startOffset(t), r && i.endOffset(r), n && i.duration(n), i)
}
class RB extends pr {
	constructor(t) {
		;(super(),
			(this.source = t),
			(this._actionModel = { actionType: 'overlay', source: t.toJson() }))
	}
	setLayerType(t) {
		return (
			(this.layerType = t),
			(this._actionModel.actionType = t === 'u' ? 'underlay' : 'overlay'),
			this
		)
	}
	timeline(t) {
		return (
			(this._timelinePosition = t),
			(this._actionModel.timelinePosition = t.toJson()),
			this
		)
	}
	position(t) {
		return (
			(this._position = t),
			(this._actionModel.position = t.toJson()),
			this
		)
	}
	blendMode(t) {
		this._blendMode = t
		const [r, n] = `${t}`.replace('e_', '').split(':')
		return (
			r === 'anti_removal'
				? (this._actionModel.blendMode = n
						? { blendModeType: 'antiRemoval', level: n }
						: { blendModeType: 'antiRemoval' })
				: (this._actionModel.blendMode = { blendModeType: r }),
			this
		)
	}
	closeLayer() {
		var t, r, n, i
		const a = new pr().addFlag(new wt('layer_apply'))
		return (
			(t = this._position) === null ||
				t === void 0 ||
				t.qualifiers.forEach((s) => {
					a.addQualifier(s)
				}),
			(r = this._position) === null ||
				r === void 0 ||
				r.flags.forEach((s) => {
					a.addFlag(s)
				}),
			typeof this._blendMode == 'string'
				? a.addQualifier(new je('e', this._blendMode))
				: (n = this._blendMode) === null ||
					n === void 0 ||
					n.qualifiers.forEach((s) => {
						a.addQualifier(s)
					}),
			(i = this._timelinePosition) === null ||
				i === void 0 ||
				i.qualifiers.forEach((s) => {
					a.addQualifier(s)
				}),
			a
		)
	}
	openLayer() {
		return `${this.source.getOpenSourceString(this.layerType)}`
	}
	toString() {
		return [
			this.openLayer(),
			this.source.getTransformation() &&
				this.source.getTransformation().toString(),
			this.closeLayer()
		]
			.filter((t) => t)
			.join('/')
	}
	static fromJson(t, r) {
		const {
				source: n,
				actionType: i,
				position: a,
				timelinePosition: s,
				blendMode: o
			} = t,
			u = bB(n, r),
			l = new this(u),
			f = i === 'overlay' ? 'l' : 'u'
		if (
			(l.setLayerType(f), a && l.position(wB(a)), s && l.timeline(xB(s)), o)
		) {
			const c = IU[o.blendModeType] || o.blendModeType
			o != null && o.level
				? l.blendMode(new E1(c, o.level))
				: l.blendMode(new E1(c))
		}
		return l
	}
}
function Qz(e) {
	return new RB(e).setLayerType('l')
}
class OB extends OO {
	constructor(t) {
		super('q', t.toString(), 'level')
	}
	chromaSubSampling(t) {
		this._actionModel.chromaSubSampling = RO[t]
		const r = new Vt([this._actionModel.level, t])
		return (r.setDelimiter(':'), this.addQualifier(new je('q', r)))
	}
	quantization(t) {
		this._actionModel.quantization = t
		const r = new Vt([this._actionModel.level, `qmax_${t}`]).setDelimiter(':')
		return this.addQualifier(new je('q', r))
	}
	static fromJson(t) {
		const { level: r, chromaSubSampling: n, quantization: i } = t,
			a = xO[r] || r,
			s = new this(a)
		if (n) {
			const o = kU[n.toUpperCase()]
			o && s.chromaSubSampling(+o)
		}
		return (i && s.quantization(i), s)
	}
}
class CB extends pr {
	constructor(t) {
		;(super(), (this._actionModel = { actionType: 'dpr' }))
		const r = Rp(t)
		;((this._actionModel.dpr = r), this.addQualifier(new je('dpr', r)))
	}
	static fromJson(t) {
		const { dpr: r } = t
		return new this(r)
	}
}
function Zz(e) {
	return new ts('f', e)
}
function Yz(e) {
	return new CB(e)
}
function Jz(e) {
	return new OB(e)
}
function TB(e) {
	return e.match(/^https?:\//)
}
function EB(e) {
	return e.indexOf('/') < 0
}
function AB(e) {
	return e.match(/^v[0-9]+/)
}
function MB(e, t) {
	const r = t.secure,
		n = t.privateCdn,
		i = t.cname,
		a = t.secureDistribution
	return !r && !i
		? `http://res.cloudinary.com/${e}`
		: r && !a && n
			? `https://${e}-res.cloudinary.com`
			: r && !a
				? `https://res.cloudinary.com/${e}`
				: r && a && n
					? `https://${a}`
					: r && a
						? `https://${a}/${e}`
						: !r && i
							? `http://${i}/${e}`
							: 'ERROR'
}
function PB(e) {
	return e || 'image'
}
function IB(e) {
	return e || 'upload'
}
function kB(e, t, r) {
	const n = r !== !1
	return t ? `v${t}` : AB(e) || TB(e) || EB(e) ? '' : n ? 'v1' : ''
}
function Hg(e, t, r) {
	let n = t >> 0,
		i = String(r)
	return e.length > n
		? String(e)
		: ((n = n - e.length),
			n > i.length && (i += qB(i, n / i.length)),
			i.slice(0, n) + String(e))
}
function qB(e, t) {
	let r = t,
		n = ''
	for (; r > 0; ) ((n += e), r--)
	return n
}
const $B = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
	Eo = {}
let A1 = 0
$B.split('').forEach((e) => {
	let t = A1.toString(2)
	;((t = Hg(t, 6, '0')), (Eo[t] = e), A1++)
})
function FB(e) {
	if (e.split('.').length < 2)
		throw new Error('invalid semVer, must have at least two segments')
	return e.split('.').reverse().join('.')
}
function DB(e) {
	if (e.split('.').length < 2)
		throw new Error('invalid semVer, must have at least two segments')
	return e
		.split('.')
		.map((t) => {
			const r = +t
			if (isNaN(r) || r < 0) throw 'Invalid version number provided'
			return Hg(t, 2, '0')
		})
		.join('.')
}
function M1(e) {
	let t = ''
	const n = e.split('.').length * 6,
		i = FB(e),
		a = DB(i)
	let o = parseInt(a.split('.').join('')).toString(2)
	if (((o = Hg(o, n, '0')), o.length % 6 !== 0))
		throw 'Version must be smaller than 43.21.26)'
	return (
		o.match(/.{1,6}/g).forEach((u) => {
			t += Eo[u]
		}),
		t
	)
}
function NB(e) {
	const t = {
		sdkSemver: e.sdkSemver,
		techVersion: e.techVersion,
		sdkCode: e.sdkCode,
		product: e.product,
		feature: '0',
		osType: e.osType,
		osVersion: e.osVersion
	}
	return (
		e.accessibility && (t.feature = 'D'),
		e.lazyload && (t.feature = 'C'),
		e.responsive && (t.feature = 'A'),
		e.placeholder && (t.feature = 'B'),
		e.feature && (t.feature = e.feature),
		t
	)
}
const LB = '1.22.0'
function jB(e) {
	const [t, r] = e.split('.'),
		n = parseInt(t).toString(2),
		i = parseInt(r).toString(2),
		a = n.padStart(6, '0'),
		s = i.padStart(6, '0')
	return Eo[a] + Eo[s]
}
function UB() {
	const e = '0.0.0'
	if (typeof window < 'u') return e
	try {
		return process.versions.node || e
	} catch {
		return e
	}
}
function BB(e) {
	const t = {
		techVersion: UB(),
		sdkCode: 'T',
		sdkSemver: LB.split('-')[0],
		product: 'A',
		osType: 'Z',
		osVersion: '0.0',
		responsive: !1,
		placeholder: !1,
		lazyload: !1,
		accessibility: !1
	}
	return e ? Object.assign(Object.assign({}, t), e) : t
}
function P1(e) {
	const t = BB(e),
		r = NB(t)
	try {
		const n = VB(r.techVersion),
			i = M1(r.sdkSemver),
			a = M1(n),
			s = jB(r.osVersion),
			o = r.feature,
			u = r.sdkCode,
			{ product: l, osType: f } = r
		return `D${l}${u}${i}${a}${f}${s}${o}`
	} catch {
		return 'E'
	}
}
function VB(e) {
	const t = e.split('.')
	return `${t[0]}.${t[1]}`
}
const I1 = {
	'image/upload': 'images',
	'image/private': 'private_images',
	'image/authenticated': 'authenticated_images',
	'raw/upload': 'files',
	'video/upload': 'videos'
}
class zB {
	constructor(t, r = {}, n) {
		;(this.setPublicID(t), this.setCloudConfig(r), this.setURLConfig(n))
	}
	setURLConfig(t) {
		return ((this.urlConfig = new Lg(t)), this)
	}
	setCloudConfig(t) {
		return (
			(this.cloudName = t.cloudName),
			(this.apiKey = t.apiKey),
			(this.apiSecret = t.apiSecret),
			(this.authToken = t.authToken),
			this
		)
	}
	setPublicID(t) {
		return ((this.publicID = t ? t.toString() : ''), this)
	}
	setDeliveryType(t) {
		return ((this.deliveryType = t), this)
	}
	setSuffix(t) {
		return ((this.suffix = t), this)
	}
	setSignature(t) {
		return ((this.signature = t), this)
	}
	setVersion(t) {
		return (t && (this.version = t), this)
	}
	setAssetType(t) {
		return (t && (this.assetType = t), this)
	}
	sign() {
		return this
	}
	toURL(t = {}) {
		return this.createCloudinaryURL(null, t.trackedAnalytics)
	}
	validateAssetForURLCreation() {
		if (typeof this.cloudName > 'u')
			throw 'You must supply a cloudName when initializing the asset'
		const t = this.suffix && this.suffix.indexOf('.') >= 0,
			r = this.suffix && this.suffix.indexOf('/') >= 0
		if (t || r) throw '`suffix`` should not include . or /'
	}
	getResourceType() {
		const t = PB(this.assetType),
			r = IB(this.deliveryType),
			n = !!this.suffix,
			i = `${t}/${r}`,
			a = I1[`${t}/${r}`],
			s = this.urlConfig.useRootPath,
			o = this.urlConfig.shorten
		if (s) {
			if (i === 'image/upload') return ''
			throw new Error(
				`useRootPath can only be used with assetType: 'image' and deliveryType: 'upload'. Provided: ${i} instead`
			)
		}
		if (o && i === 'image/upload') return 'iu'
		if (n) {
			if (a) return a
			throw new Error(
				`URL Suffix only supported for ${Object.keys(I1).join(', ')}, Provided: ${i} instead`
			)
		}
		return i
	}
	getSignature() {
		return this.signature ? `s--${this.signature}--` : ''
	}
	createCloudinaryURL(t, r) {
		if (!this.publicID) return ''
		this.validateAssetForURLCreation()
		const n = MB(this.cloudName, this.urlConfig),
			i = t ? t.toString() : '',
			a = kB(this.publicID, this.version, this.urlConfig.forceVersion),
			s = this.publicID
		if (typeof t == 'string')
			return [
				n,
				this.getResourceType(),
				this.getSignature(),
				i,
				a,
				s.replace(/,/g, '%2C'),
				this.suffix
			]
				.filter((u) => u)
				.join('/')
		{
			const o = [
					encodeURI(n),
					this.getResourceType(),
					this.getSignature(),
					encodeURI(i),
					a,
					encodeURI(s).replace(/,/g, '%2C'),
					this.suffix && encodeURI(this.suffix)
				]
					.filter((f) => f)
					.join('/')
					.replace(/\?/g, '%3F')
					.replace(/=/g, '%3D'),
				u = this.urlConfig.analytics !== !1 && !s.includes('?')
			let l = ''
			if (typeof this.urlConfig.queryParams == 'object')
				try {
					const f = new URLSearchParams(this.urlConfig.queryParams)
					;(u && f.set('_a', P1(r)), (l = f.toString()))
				} catch {
					console.error(
						'Error: URLSearchParams is not available so the queryParams object cannot be parsed, please try passing as an already parsed string'
					)
				}
			else
				((l = this.urlConfig.queryParams || ''),
					u && (l += `${l.length > 0 ? '&' : ''}_a=${P1(r)}`))
			return l ? `${o}?${l}` : o
		}
	}
}
class LO extends zB {
	constructor(t, r, n, i) {
		;(super(t, r, n), (this.transformation = i))
	}
	animated(t) {
		return (this.transformation.animated(t), this)
	}
	border(t) {
		return (this.transformation.border(t), this)
	}
	reshape(t) {
		return (this.transformation.reshape(t), this)
	}
	resize(t) {
		return (this.transformation.resize(t), this)
	}
	quality(t) {
		return (this.addAction(new ts('q', t)), this)
	}
	format(t) {
		return (this.addAction(new ts('f', t)), this)
	}
	roundCorners(t) {
		return (this.transformation.roundCorners(t), this)
	}
	overlay(t) {
		return (this.transformation.overlay(t), this)
	}
	addVariable(t) {
		return (this.transformation.addVariable(t), this)
	}
	conditional(t) {
		return (this.transformation.conditional(t), this)
	}
	effect(t) {
		return (this.transformation.effect(t), this)
	}
	adjust(t) {
		return (this.transformation.adjust(t), this)
	}
	rotate(t) {
		return (this.transformation.rotate(t), this)
	}
	namedTransformation(t) {
		return (this.transformation.namedTransformation(t), this)
	}
	delivery(t) {
		return (this.transformation.delivery(t), this)
	}
	backgroundColor(t) {
		return (this.transformation.backgroundColor(t), this)
	}
	psdTools(t) {
		return (this.transformation.psdTools(t), this)
	}
	extract(t) {
		return (this.transformation.extract(t), this)
	}
	addFlag(t) {
		return (this.transformation.addFlag(t), this)
	}
	customFunction(t) {
		return (this.transformation.customFunction(t), this)
	}
	addAction(t) {
		return (this.transformation.addAction(t), this)
	}
	addTransformation(t) {
		return (this.transformation.addTransformation(t), this)
	}
	toString() {
		return this.transformation.toString()
	}
	underlay(t) {
		return (this.transformation.underlay(t), this)
	}
	toURL(t = {}) {
		return this.createCloudinaryURL(
			this.transformation,
			t == null ? void 0 : t.trackedAnalytics
		)
	}
}
class HB extends LO {
	constructor(t, r, n) {
		super(t, r, n, new DU())
	}
}
class GB extends LO {
	constructor(t, r, n) {
		;(super(t, r, n, new NU()), (this.assetType = 'video'))
	}
	transcode(t) {
		return (this.transformation.transcode(t), this)
	}
	videoEdit(t) {
		return (this.transformation.videoEdit(t), this)
	}
}
class Xz {
	constructor(t) {
		t && (this.cloudinaryConfig = t)
	}
	image(t) {
		return new HB(t, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url)
	}
	video(t) {
		return new GB(t, this.cloudinaryConfig.cloud, this.cloudinaryConfig.url)
	}
	setConfig(t) {
		return ((this.cloudinaryConfig = t), this)
	}
	getConfig() {
		return this.cloudinaryConfig
	}
	extendConfig() {}
}
export {
	LV as $,
	$z as A,
	bz as B,
	Dz as C,
	Nz as D,
	Fz as E,
	uV as F,
	jz as G,
	iV as H,
	tV as I,
	oV as J,
	rV as K,
	aV as L,
	XB as M,
	eV as N,
	ZB as O,
	Rz as P,
	JB as Q,
	sV as R,
	lV as S,
	MV as T,
	AV as U,
	DV as V,
	UV as W,
	jV as X,
	$V as Y,
	FV as Z,
	nk as _,
	Qt as a,
	Bz as a$,
	NV as a0,
	RP as a1,
	JV as a2,
	BV as a3,
	YV as a4,
	ZV as a5,
	QV as a6,
	KV as a7,
	WV as a8,
	GV as a9,
	iz as aA,
	nz as aB,
	Nx as aC,
	rz as aD,
	HV as aE,
	zV as aF,
	XV as aG,
	tz as aH,
	ez as aI,
	Oz as aJ,
	Cz as aK,
	Tz as aL,
	Ez as aM,
	Az as aN,
	Iz as aO,
	Pz as aP,
	kz as aQ,
	Mz as aR,
	qz as aS,
	fV as aT,
	hV as aU,
	dV as aV,
	cV as aW,
	Lz as aX,
	Vz as aY,
	Uz as aZ,
	Hz as a_,
	B$ as aa,
	hz as ab,
	pz as ac,
	gz as ad,
	wz as ae,
	Sz as af,
	lz as ag,
	W0 as ah,
	dz as ai,
	fz as aj,
	Ka as ak,
	cz as al,
	_z as am,
	yz as an,
	vz as ao,
	fg as ap,
	OR as aq,
	AD as ar,
	mz as as,
	xz as at,
	VV as au,
	U$ as av,
	oz as aw,
	uz as ax,
	sz as ay,
	az,
	mV as b,
	zz as b0,
	Xz as b1,
	Kz as b2,
	Zz as b3,
	Jz as b4,
	Yz as b5,
	Qz as b6,
	Wz as b7,
	DO as b8,
	aB as b9,
	Gz as ba,
	SV as c,
	yV as d,
	Ys as e,
	vV as f,
	bV as g,
	_V as h,
	pV as i,
	CV as j,
	no as k,
	wV as l,
	EV as m,
	ct as n,
	gV as o,
	RV as p,
	nV as q,
	QB as r,
	YB as s,
	TV as t,
	OV as u,
	xV as v,
	PV as w,
	IV as x,
	qV as y,
	kV as z
}
