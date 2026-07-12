import {
	u as Ke,
	R as h,
	f as C,
	j as _e,
	Q as Mn,
	k as ye
} from './vendor_react-DuD2GJTP.js'
import {
	H as ke,
	I as tt,
	J as Te,
	q as me,
	K as Ut,
	L as _t,
	N as kt,
	O as _n,
	R as kn,
	S as ue,
	T as An,
	U as At
} from './vendor_rest-CKJ42Ze8.js'
function ie(e, t, n) {
	return { hookName: '', trace: [], resourcePath: null }
}
var qn = Object.defineProperty,
	s = (e, t) => qn(e, 'name', { value: t, configurable: !0 }),
	Ot = h.createContext({}),
	$n = s(({ children: e, isProvided: t, ...n }) => {
		const r = _e(),
			o = s(async (m) => {
				var l
				try {
					return await ((l = n.login) == null ? void 0 : l.call(n, m))
				} catch (y) {
					return (
						console.warn(
							'Unhandled Error in login: refine always expects a resolved promise.',
							y
						),
						Promise.reject(y)
					)
				}
			}, 'handleLogin'),
			a = s(async (m) => {
				var l
				try {
					return await ((l = n.register) == null ? void 0 : l.call(n, m))
				} catch (y) {
					return (
						console.warn(
							'Unhandled Error in register: refine always expects a resolved promise.',
							y
						),
						Promise.reject(y)
					)
				}
			}, 'handleRegister'),
			i = s(async (m) => {
				var l
				try {
					const y = await ((l = n.logout) == null ? void 0 : l.call(n, m))
					return (r.invalidateQueries(), y)
				} catch (y) {
					return (
						console.warn(
							'Unhandled Error in logout: refine always expects a resolved promise.',
							y
						),
						Promise.reject(y)
					)
				}
			}, 'handleLogout'),
			c = s(async (m) => {
				var l
				try {
					const y = await ((l = n.check) == null ? void 0 : l.call(n, m))
					return Promise.resolve(y)
				} catch (y) {
					return (
						console.warn(
							'Unhandled Error in check: refine always expects a resolved promise.',
							y
						),
						Promise.reject(y)
					)
				}
			}, 'handleCheck'),
			u = s(async (m) => {
				var l
				try {
					const y = await ((l = n.forgotPassword) == null
						? void 0
						: l.call(n, m))
					return Promise.resolve(y)
				} catch (y) {
					return (
						console.warn(
							'Unhandled Error in forgotPassword: refine always expects a resolved promise.',
							y
						),
						Promise.reject(y)
					)
				}
			}, 'handleForgotPassword'),
			f = s(async (m) => {
				var l
				try {
					const y = await ((l = n.updatePassword) == null
						? void 0
						: l.call(n, m))
					return Promise.resolve(y)
				} catch (y) {
					return (
						console.warn(
							'Unhandled Error in updatePassword: refine always expects a resolved promise.',
							y
						),
						Promise.reject(y)
					)
				}
			}, 'handleUpdatePassword')
		return h.createElement(
			Ot.Provider,
			{
				value: {
					...n,
					login: o,
					logout: i,
					check: c,
					register: a,
					forgotPassword: u,
					updatePassword: f,
					isProvided: t
				}
			},
			e
		)
	}, 'AuthProviderContextProvider'),
	he = s(() => h.useContext(Ot), 'useAuthProviderContext'),
	Ln = 10,
	Tn = s((e) => {
		const {
			currentPage: t,
			pageSize: n,
			sorters: r,
			sorter: o,
			filters: a
		} = me.parse(e.substring(1), { depth: Ln })
		return {
			parsedCurrentPage: t && Number(t),
			parsedPageSize: n && Number(n),
			parsedSorter: r || o || [],
			parsedFilters: a ?? []
		}
	}, 'parseTableParams'),
	jt = s(
		(e, t) =>
			e.operator !== 'and' &&
			e.operator !== 'or' &&
			t.operator !== 'and' &&
			t.operator !== 'or'
				? ('field' in e ? e.field : void 0) ===
						('field' in t ? t.field : void 0) && e.operator === t.operator
				: ('key' in e ? e.key : void 0) === ('key' in t ? t.key : void 0) &&
					e.operator === t.operator,
		'compareFilters'
	),
	Ht = s((e, t) => e.field === t.field, 'compareSorters'),
	Ze = s(
		(e, t, n = []) => (
			t.filter((o) => (o.operator === 'or' || o.operator === 'and') && !o.key)
				.length > 1 &&
				ke(
					!0,
					`[conditionalFilters]: You have created multiple Conditional Filters at the top level, this requires the key parameter. 
For more information, see https://refine.dev/docs/advanced-tutorials/data-provider/handling-filters/#top-level-multiple-conditional-filters-usage`
				),
			Ut(e, t, n, jt).filter(
				(o) =>
					o.value !== void 0 &&
					o.value !== null &&
					(o.operator !== 'or' ||
						(o.operator === 'or' && o.value.length !== 0)) &&
					(o.operator !== 'and' ||
						(o.operator === 'and' && o.value.length !== 0))
			)
		),
		'unionFilters'
	),
	qt = s(
		(e, t) =>
			Ut(e, t, Ht).filter((n) => n.order !== void 0 && n.order !== null),
		'unionSorters'
	),
	$t = s((e, t) => [...tt(t, e, jt), ...e], 'setInitialFilters'),
	Lt = s((e, t) => [...tt(t, e, Ht), ...e], 'setInitialSorters'),
	ct = s((e) => e / 1e3, 'userFriendlySecond'),
	In = s((e, t) => (!e || !t ? !1 : !!e.find((n) => n === t)), 'hasPermission'),
	Nn = s(
		(e) => (
			(e = e.replace(/([a-z]{1})([A-Z]{1})/g, '$1-$2')),
			(e = e.replace(/([A-Z]{1})([A-Z]{1})([a-z]{1})/g, '$1-$2$3')),
			(e = e
				.toLowerCase()
				.replace(/[_-]+/g, ' ')
				.replace(/\s{2,}/g, ' ')
				.trim()),
			(e = e.charAt(0).toUpperCase() + e.slice(1)),
			e
		),
		'humanizeString'
	),
	Kn = {
		icon: h.createElement(
			'svg',
			{
				width: 24,
				height: 24,
				viewBox: '0 0 24 24',
				fill: 'none',
				xmlns: 'http://www.w3.org/2000/svg',
				'data-testid': 'refine-logo',
				id: 'refine-default-logo'
			},
			h.createElement('path', {
				fillRule: 'evenodd',
				clipRule: 'evenodd',
				d: 'M13.7889 0.422291C12.6627 -0.140764 11.3373 -0.140764 10.2111 0.422291L2.21115 4.42229C0.85601 5.09986 0 6.48491 0 8V16C0 17.5151 0.85601 18.9001 2.21115 19.5777L10.2111 23.5777C11.3373 24.1408 12.6627 24.1408 13.7889 23.5777L21.7889 19.5777C23.144 18.9001 24 17.5151 24 16V8C24 6.48491 23.144 5.09986 21.7889 4.42229L13.7889 0.422291ZM8 8C8 5.79086 9.79086 4 12 4C14.2091 4 16 5.79086 16 8V16C16 18.2091 14.2091 20 12 20C9.79086 20 8 18.2091 8 16V8Z',
				fill: 'currentColor'
			}),
			h.createElement('path', {
				d: 'M14 8C14 9.10457 13.1046 10 12 10C10.8954 10 10 9.10457 10 8C10 6.89543 10.8954 6 12 6C13.1046 6 14 6.89543 14 8Z',
				fill: 'currentColor'
			})
		),
		text: 'Refine Project'
	},
	se = {
		mutationMode: 'pessimistic',
		syncWithLocation: !1,
		undoableTimeout: 5e3,
		warnWhenUnsavedChanges: !1,
		liveMode: 'off',
		redirect: { afterCreate: 'list', afterClone: 'list', afterEdit: 'list' },
		overtime: { enabled: !0, interval: 1e3 },
		textTransformers: {
			humanize: Nn,
			plural: _t.plural,
			singular: _t.singular
		},
		disableServerSideValidation: !1,
		disableRouteChangeHandler: !1,
		title: Kn
	},
	Se = h.createContext({
		mutationMode: 'pessimistic',
		warnWhenUnsavedChanges: !1,
		syncWithLocation: !1,
		undoableTimeout: 5e3,
		liveMode: 'off',
		onLiveEvent: void 0,
		options: se
	}),
	Dn = s(
		({
			mutationMode: e,
			warnWhenUnsavedChanges: t,
			syncWithLocation: n,
			undoableTimeout: r,
			children: o,
			liveMode: a = 'off',
			onLiveEvent: i,
			options: c
		}) =>
			h.createElement(
				Se.Provider,
				{
					value: {
						__initialized: !0,
						mutationMode: e,
						warnWhenUnsavedChanges: t,
						syncWithLocation: n,
						undoableTimeout: r,
						liveMode: a,
						onLiveEvent: i,
						options: c
					}
				},
				o
			),
		'RefineContextProvider'
	),
	Bn = s(
		({
			options: e,
			disableTelemetry: t,
			liveMode: n,
			mutationMode: r,
			reactQueryClientConfig: o,
			reactQueryDevtoolConfig: a,
			syncWithLocation: i,
			undoableTimeout: c,
			warnWhenUnsavedChanges: u,
			disableRouteChangeHandler: f
		} = {}) => {
			var m, l, y, b, v, d, p, g, w, M, x
			const A = {
					breadcrumb: e == null ? void 0 : e.breadcrumb,
					mutationMode:
						(e == null ? void 0 : e.mutationMode) ?? r ?? se.mutationMode,
					undoableTimeout:
						(e == null ? void 0 : e.undoableTimeout) ?? c ?? se.undoableTimeout,
					syncWithLocation:
						(e == null ? void 0 : e.syncWithLocation) ??
						i ??
						se.syncWithLocation,
					warnWhenUnsavedChanges:
						(e == null ? void 0 : e.warnWhenUnsavedChanges) ??
						u ??
						se.warnWhenUnsavedChanges,
					liveMode: (e == null ? void 0 : e.liveMode) ?? n ?? se.liveMode,
					redirect: {
						afterCreate:
							((m = e == null ? void 0 : e.redirect) == null
								? void 0
								: m.afterCreate) ?? se.redirect.afterCreate,
						afterClone:
							((l = e == null ? void 0 : e.redirect) == null
								? void 0
								: l.afterClone) ?? se.redirect.afterClone,
						afterEdit:
							((y = e == null ? void 0 : e.redirect) == null
								? void 0
								: y.afterEdit) ?? se.redirect.afterEdit
					},
					overtime: (e == null ? void 0 : e.overtime) ?? se.overtime,
					textTransformers: {
						humanize:
							((b = e == null ? void 0 : e.textTransformers) == null
								? void 0
								: b.humanize) ?? se.textTransformers.humanize,
						plural:
							((v = e == null ? void 0 : e.textTransformers) == null
								? void 0
								: v.plural) ?? se.textTransformers.plural,
						singular:
							((d = e == null ? void 0 : e.textTransformers) == null
								? void 0
								: d.singular) ?? se.textTransformers.singular
					},
					disableServerSideValidation:
						(e == null ? void 0 : e.disableServerSideValidation) ??
						se.disableServerSideValidation,
					projectId: e == null ? void 0 : e.projectId,
					title: {
						icon:
							typeof ((p = e == null ? void 0 : e.title) == null
								? void 0
								: p.icon) > 'u'
								? se.title.icon
								: (g = e == null ? void 0 : e.title) == null
									? void 0
									: g.icon,
						text:
							typeof ((w = e == null ? void 0 : e.title) == null
								? void 0
								: w.text) > 'u'
								? se.title.text
								: (M = e == null ? void 0 : e.title) == null
									? void 0
									: M.text
					},
					disableRouteChangeHandler:
						(e == null ? void 0 : e.disableRouteChangeHandler) ??
						f ??
						se.disableRouteChangeHandler
				},
				T = (e == null ? void 0 : e.disableTelemetry) ?? t ?? !1,
				B = {
					clientConfig:
						((x = e == null ? void 0 : e.reactQuery) == null
							? void 0
							: x.clientConfig) ??
						o ??
						{},
					devtoolConfig: a ?? {}
				}
			return {
				optionsWithDefaults: A,
				disableTelemetryWithDefault: T,
				reactQueryWithDefaults: B
			}
		},
		'handleRefineOptions'
	),
	Fn = s(({ redirectFromProps: e, action: t, redirectOptions: n }) => {
		if (e || e === !1) return e
		switch (t) {
			case 'clone':
				return n.afterClone
			case 'create':
				return n.afterCreate
			case 'edit':
				return n.afterEdit
			default:
				return !1
		}
	}, 'redirectPage'),
	ge = s((e, t = []) => {
		if (!e) return
		let n = t.find((r) => r.identifier === e)
		return (n || (n = t.find((r) => r.name === e)), n)
	}, 'pickResource'),
	oe = s((e, t, n) => {
		if (t) return t
		const r = ge(e, n),
			o = r == null ? void 0 : r.meta
		return o != null && o.dataProviderName ? o.dataProviderName : 'default'
	}, 'pickDataProvider'),
	ft = s((e) => e.startsWith(':'), 'isParameter'),
	Ie = s((e) => e.split('/').filter((n) => n !== ''), 'splitToSegments'),
	Wn = s((e, t) => {
		const n = Ie(e),
			r = Ie(t)
		return n.length === r.length
	}, 'isSegmentCountsSame'),
	Oe = s((e) => e.replace(/^\/|\/$/g, ''), 'removeLeadingTrailingSlashes'),
	Qn = s((e, t) => {
		const n = Oe(e),
			r = Oe(t)
		if (!Wn(n, r)) return !1
		const o = Ie(n)
		return Ie(r).every((i, c) => ft(i) || i === o[c])
	}, 'checkBySegments'),
	Re = s((e, t) => {
		const n = []
		return (
			['list', 'show', 'edit', 'create', 'clone'].forEach((o) => {
				const a = e[o]
				a &&
					n.push({ action: o, resource: e, route: `/${a.replace(/^\//, '')}` })
			}),
			n
		)
	}, 'getActionRoutesFromResource'),
	zn = s((e) => {
		var t
		if (e.length === 0) return
		if (e.length === 1) return e[0]
		const n = e.map((a) => ({ ...a, splitted: Ie(Oe(a.route)) })),
			r = ((t = n[0]) == null ? void 0 : t.splitted.length) ?? 0
		let o = [...n]
		for (let a = 0; a < r; a++) {
			const i = o.filter((c) => !ft(c.splitted[a]))
			if (i.length !== 0) {
				if (i.length === 1) {
					o = i
					break
				}
				o = i
			}
		}
		return o[0]
	}, 'pickMatchedRoute'),
	Co = s((e, t) => {
		const r = t.flatMap((a) => Re(a, t)).filter((a) => Qn(e, a.route)),
			o = zn(r)
		return {
			found: !!o,
			resource: o == null ? void 0 : o.resource,
			action: o == null ? void 0 : o.action,
			matchedRoute: o == null ? void 0 : o.route
		}
	}, 'matchResourceFromRoute'),
	Ne = s((e, t) => {
		var n
		const r = (n = e.meta) == null ? void 0 : n.parent
		return r
			? (t.find((a) => (a.identifier ?? a.name) === r) ?? { name: r })
			: void 0
	}, 'getParentResource'),
	Un = s(
		(e) => Ie(Oe(e)).flatMap((n) => (ft(n) ? [n.slice(1)] : [])),
		'pickRouteParams'
	),
	On = s(
		(e, t = {}) =>
			e.reduce((n, r) => {
				const o = t[r]
				return (typeof o < 'u' && (n[r] = o), n)
			}, {}),
		'prepareRouteParams'
	),
	Me = s((e, t = {}, n = {}, r = {}) => {
		const o = Un(e),
			a = On(o, {
				...t,
				...(typeof (n == null ? void 0 : n.id) < 'u' ? { id: n.id } : {}),
				...(typeof (n == null ? void 0 : n.action) < 'u'
					? { action: n.action }
					: {}),
				...(typeof (n == null ? void 0 : n.resource) < 'u'
					? { resource: n.resource }
					: {}),
				...(n == null ? void 0 : n.params),
				...r
			})
		return e.replace(/:([^\/]+)/g, (i, c) => {
			const u = a[c]
			return typeof u < 'u' ? `${u}` : i
		})
	}, 'composeRoute'),
	Vt = s(() => {
		const e = he()
		return e.isProvided ? e : null
	}, 'useActiveAuthProvider'),
	jn = s(({ pagination: e } = {}) => {
		const t = (e == null ? void 0 : e.mode) ?? 'server',
			n = (e == null ? void 0 : e.currentPage) ?? 1,
			r = (e == null ? void 0 : e.pageSize) ?? 10
		return { currentPage: n, pageSize: r, mode: t }
	}, 'handlePaginationParams'),
	lt = s((e, t, n, r) => {
		const o = r ? e(t, r, n) : e(t, n),
			a = n ?? t
		return o === t || typeof o > 'u' ? a : o
	}, 'safeTranslate'),
	nt = s((e, t) => {
		const { mutationMode: n, undoableTimeout: r } = C.useContext(Se)
		return { mutationMode: e ?? n, undoableTimeout: t ?? r }
	}, 'useMutationMode'),
	Gt = h.createContext({}),
	Hn = s(({ children: e }) => {
		const [t, n] = C.useState(!1)
		return h.createElement(
			Gt.Provider,
			{ value: { warnWhen: t, setWarnWhen: n } },
			e
		)
	}, 'UnsavedWarnContextProvider'),
	Jt = s(() => {
		const { warnWhenUnsavedChanges: e } = C.useContext(Se),
			{ warnWhen: t, setWarnWhen: n } = C.useContext(Gt)
		return {
			warnWhenUnsavedChanges: e,
			warnWhen: !!t,
			setWarnWhen: n ?? (() => {})
		}
	}, 'useWarnAboutChange'),
	Vn = s(() => {
		const { syncWithLocation: e } = C.useContext(Se)
		return { syncWithLocation: e }
	}, 'useSyncWithLocation'),
	Ae = s(() => {
		const {
			mutationMode: e,
			syncWithLocation: t,
			undoableTimeout: n,
			warnWhenUnsavedChanges: r,
			liveMode: o,
			onLiveEvent: a,
			options: i,
			__initialized: c
		} = C.useContext(Se)
		return {
			__initialized: c,
			mutationMode: e,
			syncWithLocation: t,
			undoableTimeout: n,
			warnWhenUnsavedChanges: r,
			liveMode: o,
			onLiveEvent: a,
			options: i
		}
	}, 'useRefineContext'),
	rt = s(() => {
		const {
			options: { textTransformers: e }
		} = Ae()
		return s((n = '', r) => {
			const o = e.humanize(n)
			return r === 'singular' ? e.singular(o) : e.plural(o)
		}, 'getFriendlyName')
	}, 'useUserFriendlyName')
function Gn(e, t, n, r, o, a) {
	var i
	const c = a || rt(),
		u = {
			create: 'Create new ',
			clone: `#${r ?? ''} Clone `,
			edit: `#${r ?? ''} Edit `,
			show: `#${r ?? ''} Show `,
			list: ''
		},
		f = (t == null ? void 0 : t.identifier) ?? (t == null ? void 0 : t.name),
		m =
			((i = t == null ? void 0 : t.meta) == null ? void 0 : i.label) ??
			(f && c(f, n === 'list' ? 'plural' : 'singular')),
		l = o ?? m,
		y = lt(e, 'documentTitle.default', 'Refine'),
		b = lt(e, 'documentTitle.suffix', ' | Refine')
	let v = y
	return (
		n &&
			f &&
			(v = lt(e, `documentTitle.${f}.${n}`, `${u[n] ?? ''}${l}${b}`, {
				id: r
			})),
		v
	)
}
s(Gn, 'generateDefaultDocumentTitle')
var de = class {
	constructor(e = []) {
		;((this.segments = []), (this.segments = e))
	}
	key() {
		return this.segments
	}
	get() {
		return this.segments
	}
}
s(de, 'BaseKeyBuilder')
var we = class extends de {
	params(e) {
		return new de([...this.segments, e])
	}
}
s(we, 'ParamsKeyBuilder')
var Yt = class extends de {
	id(e) {
		return new we([...this.segments, e ? String(e) : void 0])
	}
}
s(Yt, 'DataIdRequiringKeyBuilder')
var Zt = class extends de {
	ids(...e) {
		return new we([
			...this.segments,
			...(e.length ? [e.map((t) => String(t))] : [])
		])
	}
}
s(Zt, 'DataIdsRequiringKeyBuilder')
var Xt = class extends de {
	action(e) {
		if (e === 'one') return new Yt([...this.segments, e])
		if (e === 'many') return new Zt([...this.segments, e])
		if (['list', 'infinite'].includes(e)) return new we([...this.segments, e])
		throw new Error('Invalid action type')
	}
}
s(Xt, 'DataResourceKeyBuilder')
var en = class extends de {
	resource(e) {
		return new Xt([...this.segments, e])
	}
	mutation(e) {
		return new we([...(e === 'custom' ? this.segments : [this.segments[0]]), e])
	}
}
s(en, 'DataKeyBuilder')
var tn = class extends de {
	action(e) {
		return new we([...this.segments, e])
	}
}
s(tn, 'AuthKeyBuilder')
var nn = class extends de {
	action(e) {
		return new we([...this.segments, e])
	}
}
s(nn, 'AccessResourceKeyBuilder')
var rn = class extends de {
	resource(e) {
		return new nn([...this.segments, e])
	}
}
s(rn, 'AccessKeyBuilder')
var on = class extends de {
	action(e) {
		return new we([...this.segments, e])
	}
}
s(on, 'AuditActionKeyBuilder')
var an = class extends de {
	resource(e) {
		return new on([...this.segments, e])
	}
	action(e) {
		return new we([...this.segments, e])
	}
}
s(an, 'AuditKeyBuilder')
var sn = class extends de {
	data(e) {
		return new en(['data', e || 'default'])
	}
	auth() {
		return new tn(['auth'])
	}
	access() {
		return new rn(['access'])
	}
	audit() {
		return new an(['audit'])
	}
}
s(sn, 'KeyBuilder')
var Jn = s(() => new sn([]), 'keys'),
	Tt = s((e) => typeof e == 'object' && e !== null, 'isNested'),
	Yn = s((e) => Array.isArray(e), 'isArray'),
	It = s(
		(e, t = '') =>
			Tt(e)
				? Object.keys(e).reduce((n, r) => {
						const o = t.length ? `${t}.` : ''
						return (
							Tt(e[r]) &&
								Object.keys(e[r]).length &&
								(Yn(e[r]) && e[r].length
									? e[r].forEach((a, i) => {
											Object.assign(n, It(a, `${o + r}.${i}`))
										})
									: Object.assign(n, It(e[r], o + r))),
							(n[o + r] = e[r]),
							n
						)
					}, {})
				: { [t]: e },
		'flattenObjectKeys'
	),
	Nt = s((e) => {
		setTimeout(e, 0)
	}, 'deferExecution'),
	Zn = s((e, t = 1e3, n) => {
		let r = []
		const o = s(() => {
				;(r.forEach((c) => {
					var u
					return (u = c.reject) == null ? void 0 : u.call(c, n)
				}),
					(r = []))
			}, 'cancelPrevious'),
			a = kn((...c) => {
				const { resolve: u, reject: f } = r.pop() || {}
				Promise.resolve(e(...c))
					.then(u)
					.catch(f)
			}, t),
			i = s(
				(...c) =>
					new Promise((u, f) => {
						;(o(), r.push({ resolve: u, reject: f }), a(...c))
					}),
				'runner'
			)
		return (
			(i.flush = () => a.flush()),
			(i.cancel = () => {
				;(a.cancel(), o())
			}),
			i
		)
	}, 'asyncDebounce'),
	un = s((e) => {
		const t = { queryKey: e.queryKey, signal: void 0 }
		return (
			Object.defineProperty(t, 'signal', {
				enumerable: !0,
				get: () => e.signal
			}),
			t
		)
	}, 'prepareQueryContext'),
	ne = s(() => ({ keys: Jn }), 'useKeys')
function Xn({ options: e, params: t }) {
	const { getPermissions: n } = he(),
		{ keys: r } = ne()
	return Ke({
		queryKey: r().auth().action('permissions').get(),
		queryFn: n ? () => n(t) : () => Promise.resolve(void 0),
		enabled: !!n,
		...e,
		meta: { ...(e == null ? void 0 : e.meta), ...ie() }
	})
}
s(Xn, 'usePermissions')
function cn({ queryOptions: e } = {}) {
	const { getIdentity: t } = he(),
		{ keys: n } = ne()
	return Ke({
		queryKey: n().auth().action('identity').get(),
		queryFn: t ?? (() => Promise.resolve({})),
		retry: !1,
		enabled: !!t,
		...e,
		meta: { ...(e == null ? void 0 : e.meta), ...ie() }
	})
}
s(cn, 'useGetIdentity')
var mt = s(() => {
	const e = _e(),
		{ keys: t } = ne()
	return s(async () => {
		await Promise.all(
			['check', 'identity', 'permissions'].map((r) =>
				e.invalidateQueries({ queryKey: t().auth().action(r).get() })
			)
		)
	}, 'invalidate')
}, 'useInvalidateAuthStore')
function ln({ mutationOptions: e } = {}) {
	const t = mt(),
		n = fe(),
		{ open: r, close: o } = qe(),
		{ logout: a } = he(),
		{ keys: i } = ne()
	return {
		...ye({
			mutationKey: i().auth().action('logout').get(),
			mutationFn: a,
			...e,
			onSuccess: (u, f) => {
				const {
						success: m,
						error: l,
						redirectTo: y,
						successNotification: b
					} = u,
					{ redirectPath: v } = f ?? {},
					d = v ?? y
				;(m &&
					(o == null || o('useLogout-error'), b && (r == null || r(er(b)))),
					(l || !m) && (r == null || r(Kt(l))),
					d !== !1 && d && n({ to: d }),
					t())
			},
			onError: (u) => {
				r == null || r(Kt(u))
			},
			meta: { ...(e == null ? void 0 : e.meta), ...ie() }
		})
	}
}
s(ln, 'useLogout')
var Kt = s(
		(e) => ({
			key: 'useLogout-error',
			type: 'error',
			message: (e == null ? void 0 : e.name) || 'Logout Error',
			description:
				(e == null ? void 0 : e.message) || 'Something went wrong during logout'
		}),
		'buildNotification'
	),
	er = s(
		(e) => ({
			message: e.message,
			description: e.description,
			key: 'logout-success',
			type: 'success'
		}),
		'buildSuccessNotification'
	)
function tr({ mutationOptions: e } = {}) {
	var t
	const n = mt(),
		r = fe(),
		o = ve(),
		{ close: a, open: i } = qe(),
		{ login: c } = he(),
		{ keys: u } = ne(),
		f = (t = o.params) == null ? void 0 : t.to
	return {
		...ye({
			mutationKey: u().auth().action('login').get(),
			mutationFn: c,
			onSuccess: async ({
				success: l,
				redirectTo: y,
				error: b,
				successNotification: v
			}) => {
				;(l && (a == null || a('login-error'), v && (i == null || i(nr(v)))),
					(b || !l) && (i == null || i(Dt(b))),
					l &&
						(f
							? r({ to: f, type: 'replace' })
							: y && r({ to: y, type: 'replace' })),
					setTimeout(() => {
						n()
					}, 32))
			},
			onError: (l) => {
				i == null || i(Dt(l))
			},
			...e,
			meta: { ...(e == null ? void 0 : e.meta), ...ie() }
		})
	}
}
s(tr, 'useLogin')
var Dt = s(
		(e) => ({
			message: (e == null ? void 0 : e.name) || 'Login Error',
			description: (e == null ? void 0 : e.message) || 'Invalid credentials',
			key: 'login-error',
			type: 'error'
		}),
		'buildNotification'
	),
	nr = s(
		(e) => ({
			message: e.message,
			description: e.description,
			key: 'login-success',
			type: 'success'
		}),
		'buildSuccessNotification'
	)
function rr({ mutationOptions: e } = {}) {
	const t = mt(),
		n = fe(),
		{ close: r, open: o } = qe(),
		{ register: a } = he(),
		{ keys: i } = ne()
	return {
		...ye({
			mutationKey: i().auth().action('register').get(),
			mutationFn: a,
			onSuccess: async ({
				success: u,
				redirectTo: f,
				error: m,
				successNotification: l
			}) => {
				;(u && (r == null || r('register-error'), l && (o == null || o(or(l)))),
					(m || !u) && (o == null || o(Bt(m))),
					f && n({ to: f, type: 'replace' }),
					u &&
						setTimeout(() => {
							t()
						}, 32))
			},
			onError: (u) => {
				o == null || o(Bt(u))
			},
			...e,
			meta: { ...(e == null ? void 0 : e.meta), ...ie() }
		})
	}
}
s(rr, 'useRegister')
var Bt = s(
		(e) => ({
			message: (e == null ? void 0 : e.name) || 'Register Error',
			description:
				(e == null ? void 0 : e.message) || 'Error while registering',
			key: 'register-error',
			type: 'error'
		}),
		'buildNotification'
	),
	or = s(
		(e) => ({
			message: e.message,
			description: e.description,
			key: 'register-success',
			type: 'success'
		}),
		'buildSuccessNotification'
	)
function ar({ mutationOptions: e } = {}) {
	const t = fe(),
		{ open: n, close: r } = qe(),
		{ forgotPassword: o } = he(),
		{ keys: a } = ne()
	return {
		...ye({
			mutationKey: a().auth().action('forgotPassword').get(),
			mutationFn: o,
			onSuccess: ({
				success: c,
				redirectTo: u,
				error: f,
				successNotification: m
			}) => {
				;(c &&
					(r == null || r('forgot-password-error'),
					m && (n == null || n(sr(m)))),
					(f || !c) && (n == null || n(Ft(f))),
					u && t({ to: u, type: 'replace' }))
			},
			onError: (c) => {
				n == null || n(Ft(c))
			},
			...e,
			meta: { ...(e == null ? void 0 : e.meta), ...ie() }
		})
	}
}
s(ar, 'useForgotPassword')
var Ft = s(
		(e) => ({
			message: (e == null ? void 0 : e.name) || 'Forgot Password Error',
			description:
				(e == null ? void 0 : e.message) || 'Error while resetting password',
			key: 'forgot-password-error',
			type: 'error'
		}),
		'buildNotification'
	),
	sr = s(
		(e) => ({
			message: e.message,
			description: e.description,
			key: 'forgot-password-success',
			type: 'success'
		}),
		'buildSuccessNotification'
	)
function ir({ mutationOptions: e } = {}) {
	const t = fe(),
		{ updatePassword: n } = he(),
		{ close: r, open: o } = qe(),
		{ keys: a } = ne(),
		c = ve().params ?? {}
	return {
		...ye({
			mutationKey: a().auth().action('updatePassword').get(),
			mutationFn: async (f) => (n == null ? void 0 : n({ ...c, ...f })),
			onSuccess: ({
				success: f,
				redirectTo: m,
				error: l,
				successNotification: y
			}) => {
				;(f &&
					(r == null || r('update-password-error'),
					y && (o == null || o(ur(y)))),
					(l || !f) && (o == null || o(Wt(l))),
					m && t({ to: m, type: 'replace' }))
			},
			onError: (f) => {
				o == null || o(Wt(f))
			},
			...e,
			meta: { ...(e == null ? void 0 : e.meta), ...ie() }
		})
	}
}
s(ir, 'useUpdatePassword')
var Wt = s(
		(e) => ({
			message: (e == null ? void 0 : e.name) || 'Update Password Error',
			description:
				(e == null ? void 0 : e.message) || 'Error while updating password',
			key: 'update-password-error',
			type: 'error'
		}),
		'buildNotification'
	),
	ur = s(
		(e) => ({
			message: e.message,
			description: e.description,
			key: 'update-password-success',
			type: 'success'
		}),
		'buildSuccessNotification'
	)
function dn({ queryOptions: e, params: t } = {}) {
	const { check: n } = he(),
		{ keys: r } = ne()
	return Ke({
		queryKey: r().auth().action('check').get(),
		queryFn: async () =>
			(await (n == null ? void 0 : n(t))) ?? { authenticated: !0 },
		retry: !1,
		...e,
		meta: { ...(e == null ? void 0 : e.meta), ...ie() }
	})
}
s(dn, 'useIsAuthenticated')
function De() {
	const e = fe(),
		{ onError: t } = he(),
		{ keys: n } = ne(),
		{ mutate: r } = ln()
	return {
		...ye({
			mutationKey: n().auth().action('onError').get(),
			...(t
				? {
						mutationFn: t,
						onSuccess: ({ logout: a, redirectTo: i }) => {
							if (a) {
								r({ redirectPath: i })
								return
							}
							if (i) {
								e({ to: i, type: 'replace' })
								return
							}
						}
					}
				: { mutationFn: () => ({}) }),
			meta: { ...ie() }
		})
	}
}
s(De, 'useOnError')
var cr = s(() => {
		const { isProvided: e } = he()
		return !!e
	}, 'useIsExistAuthentication'),
	Be = s(({ enabled: e, isLoading: t, interval: n, onInterval: r }) => {
		const [o, a] = C.useState(void 0),
			{ options: i } = Ae(),
			{ overtime: c } = i,
			u = n ?? c.interval,
			f = r ?? (c == null ? void 0 : c.onInterval),
			m = typeof e < 'u' ? e : typeof c.enabled < 'u' ? c.enabled : !0
		return (
			C.useEffect(() => {
				let l
				return (
					m &&
						t &&
						(l = setInterval(() => {
							a((y) => (y === void 0 ? u : y + u))
						}, u)),
					() => {
						;(typeof l < 'u' && clearInterval(l), a(void 0))
					}
				)
			}, [t, u, m]),
			C.useEffect(() => {
				f && o && f(o)
			}, [o]),
			{ elapsedTime: o }
		)
	}, 'useLoadingOvertime'),
	lr = Object.freeze([]),
	dr = s(
		({
			resource: e,
			filters: t,
			pagination: n,
			sorters: r,
			queryOptions: o,
			successNotification: a,
			errorNotification: i,
			meta: c,
			liveMode: u,
			onLiveEvent: f,
			liveParams: m,
			dataProviderName: l,
			overtimeOptions: y
		} = {}) => {
			var b, v, d
			const { resources: p, resource: g, identifier: w } = Z({ resource: e }),
				M = je(),
				x = ce(),
				{ mutate: A } = De(),
				T = He(),
				B = xe(),
				{ keys: W } = ne(),
				F = oe(w, l, p),
				z = c,
				E = t,
				R = r,
				S = jn({ pagination: n }),
				D = S.mode === 'server',
				N = B({ resource: g, meta: z }),
				q = {
					meta: N,
					filters: E,
					hasPagination: D,
					pagination: S,
					sorters: R
				},
				K =
					(o == null ? void 0 : o.enabled) === void 0 ||
					(o == null ? void 0 : o.enabled) === !0,
				{ getList: G } = M(F)
			yn({
				resource: w,
				types: ['*'],
				params: {
					meta: N,
					pagination: S,
					hasPagination: D,
					sorters: R,
					filters: E,
					subscriptionType: 'useList',
					...m
				},
				channel: `resources/${g == null ? void 0 : g.name}`,
				enabled: K,
				liveMode: u,
				onLiveEvent: f,
				meta: { ...c, dataProviderName: F }
			})
			const H = C.useMemo(
					() => (L) => {
						var I
						let U = L
						return (
							S.mode === 'client' &&
								(U = {
									...U,
									data: U.data.slice(
										(S.currentPage - 1) * S.pageSize,
										S.currentPage * S.pageSize
									),
									total: U.total
								}),
							o != null && o.select
								? (I = o == null ? void 0 : o.select) == null
									? void 0
									: I.call(o, U)
								: U
						)
					},
					[S.currentPage, S.pageSize, S.mode, o == null ? void 0 : o.select]
				),
				P = Ke({
					queryKey: W()
						.data(F)
						.resource(w ?? '')
						.action('list')
						.params({
							...(z || {}),
							filters: E,
							...(D && { pagination: S }),
							...(r && { sorters: r })
						})
						.get(),
					queryFn: (L) => {
						const I = { ...N, ...un(L) }
						return G({
							resource: (g == null ? void 0 : g.name) ?? '',
							pagination: S,
							filters: E,
							sorters: R,
							meta: I
						})
					},
					...o,
					enabled:
						typeof (o == null ? void 0 : o.enabled) < 'u'
							? o == null
								? void 0
								: o.enabled
							: !!(g != null && g.name),
					select: H,
					meta: {
						...(o == null ? void 0 : o.meta),
						...ie('useList', g == null ? void 0 : g.name)
					}
				})
			;(C.useEffect(() => {
				if (P.isSuccess && P.data) {
					const L = typeof a == 'function' ? a(P.data, q, w) : a
					T(L)
				}
			}, [P.isSuccess, P.data, a]),
				C.useEffect(() => {
					if (P.isError && P.error) {
						A(P.error)
						const L = typeof i == 'function' ? i(P.error, q, w) : i
						T(L, {
							key: `${w}-useList-notification`,
							message: x(
								'notifications.error',
								{ statusCode: P.error.statusCode },
								`Error (status code: ${P.error.statusCode})`
							),
							description: P.error.message,
							type: 'error'
						})
					}
				}, [P.isError, (b = P.error) == null ? void 0 : b.message]))
			const { elapsedTime: k } = Be({ ...y, isLoading: P.isFetching })
			return {
				query: P,
				result: {
					...(P == null ? void 0 : P.data),
					data:
						((v = P == null ? void 0 : P.data) == null ? void 0 : v.data) || lr,
					total: (d = P == null ? void 0 : P.data) == null ? void 0 : d.total
				},
				overtime: { elapsedTime: k }
			}
		},
		'useList'
	),
	vn = s(
		({
			resource: e,
			id: t,
			queryOptions: n,
			successNotification: r,
			errorNotification: o,
			meta: a,
			liveMode: i,
			onLiveEvent: c,
			liveParams: u,
			dataProviderName: f,
			overtimeOptions: m
		}) => {
			var l, y
			const { resources: b, resource: v, identifier: d } = Z({ resource: e }),
				p = je(),
				g = ce(),
				{ mutate: w } = De(),
				M = He(),
				x = xe(),
				{ keys: A } = ne(),
				T = a,
				B = oe(d, f, b),
				{ getOne: W } = p(B),
				F = x({ resource: v, meta: T }),
				z =
					typeof (n == null ? void 0 : n.enabled) < 'u'
						? (n == null ? void 0 : n.enabled) === !0
						: typeof (v == null ? void 0 : v.name) < 'u' && typeof t < 'u'
			yn({
				resource: d,
				types: ['*'],
				channel: `resources/${v == null ? void 0 : v.name}`,
				params: {
					ids: t ? [t] : [],
					id: t,
					meta: F,
					subscriptionType: 'useOne',
					...u
				},
				enabled: z,
				liveMode: i,
				onLiveEvent: c,
				meta: { ...a, dataProviderName: B }
			})
			const E = Ke({
				queryKey: A()
					.data(B)
					.resource(d ?? '')
					.action('one')
					.id(t ?? '')
					.params({ ...(T || {}) })
					.get(),
				queryFn: (S) =>
					W({
						resource: (v == null ? void 0 : v.name) ?? '',
						id: t,
						meta: { ...F, ...un(S) }
					}),
				...n,
				enabled: z,
				meta: {
					...(n == null ? void 0 : n.meta),
					...ie('useOne', v == null ? void 0 : v.name)
				}
			})
			;(C.useEffect(() => {
				if (E.isSuccess && E.data) {
					const S = typeof r == 'function' ? r(E.data, { id: t, ...F }, d) : r
					M(S)
				}
			}, [E.isSuccess, E.data, r]),
				C.useEffect(() => {
					if (E.isError && E.error) {
						w(E.error)
						const S =
							typeof o == 'function' ? o(E.error, { id: t, ...F }, d) : o
						M(S, {
							key: `${t}-${d}-getOne-notification`,
							message: g(
								'notifications.error',
								{ statusCode: E.error.statusCode },
								`Error (status code: ${E.error.statusCode})`
							),
							description: E.error.message,
							type: 'error'
						})
					}
				}, [E.isError, (l = E.error) == null ? void 0 : l.message]))
			const { elapsedTime: R } = Be({ ...m, isLoading: E.isFetching })
			return {
				query: E,
				result: (y = E.data) == null ? void 0 : y.data,
				overtime: { elapsedTime: R }
			}
		},
		'useOne'
	),
	vr = s(
		({
			id: e,
			resource: t,
			values: n,
			dataProviderName: r,
			successNotification: o,
			errorNotification: a,
			meta: i,
			mutationMode: c,
			undoableTimeout: u,
			onCancel: f,
			optimisticUpdateMap: m,
			invalidates: l,
			mutationOptions: y,
			overtimeOptions: b
		} = {}) => {
			const { resources: v, select: d } = Z({ resource: t }),
				p = _e(),
				g = je(),
				{ mutationMode: w, undoableTimeout: M } = nt(),
				{ mutate: x } = De(),
				A = ce(),
				T = ht(),
				{ log: B } = Pt(),
				{ notificationDispatch: W } = gt(),
				F = He(),
				z = Fe(),
				E = xe(),
				{
					options: { textTransformers: R }
				} = Ae(),
				{ keys: S } = ne(),
				D = ye({
					mutationFn: ({
						id: P = e,
						values: k = n,
						resource: L = t,
						mutationMode: I = c,
						undoableTimeout: U = u,
						onCancel: _ = f,
						meta: $ = i,
						dataProviderName: O = r
					}) => {
						if (typeof P > 'u') throw Ue
						if (!k) throw Xe
						if (!L) throw ze
						const { resource: V, identifier: j } = d(L),
							X = E({ resource: V, meta: $ }),
							Y = I ?? w,
							ae = U ?? M
						return Y !== 'undoable'
							? g(oe(j, O, v)).update({
									resource: V.name,
									id: P,
									variables: k,
									meta: X
								})
							: new Promise((Q, ee) => {
									const te = s(() => {
											g(oe(j, O, v))
												.update({
													resource: V.name,
													id: P,
													variables: k,
													meta: X
												})
												.then((pe) => Q(pe))
												.catch((pe) => ee(pe))
										}, 'doMutation'),
										J = s(() => {
											ee({ message: 'mutationCancelled' })
										}, 'cancelMutation')
									;(_ && _(J),
										W({
											type: 'ADD',
											payload: {
												id: P,
												resource: j,
												cancelMutation: J,
												doMutation: te,
												seconds: ae,
												isSilent: !!_
											}
										}))
								})
					},
					onMutate: async ({
						resource: P = t,
						id: k = e,
						mutationMode: L = c,
						values: I = n,
						dataProviderName: U = r,
						meta: _ = i,
						optimisticUpdateMap: $ = m ?? { list: !0, many: !0, detail: !0 }
					}) => {
						if (typeof k > 'u') throw Ue
						if (!I) throw Xe
						if (!P) throw ze
						const { identifier: O } = d(P),
							{ gqlMutation: V, gqlQuery: j, ...X } = _ ?? {},
							Y = S()
								.data(oe(O, U, v))
								.resource(O),
							ae = p.getQueriesData({ queryKey: Y.get() }),
							le = L ?? w
						return (
							await p.cancelQueries({ queryKey: Y.get() }),
							le !== 'pessimistic' &&
								($.list &&
									p.setQueriesData(
										{
											queryKey: Y.action('list')
												.params(X ?? {})
												.get()
										},
										(Q) => {
											if (typeof $.list == 'function') return $.list(Q, I, k)
											if (!Q) return null
											const ee = Q.data.map((te) => {
												var J
												return ((J = te.id) == null ? void 0 : J.toString()) ===
													(k == null ? void 0 : k.toString())
													? { id: k, ...te, ...I }
													: te
											})
											return { ...Q, data: ee }
										}
									),
								$.many &&
									p.setQueriesData(
										{ queryKey: Y.action('many').get() },
										(Q) => {
											if (typeof $.many == 'function') return $.many(Q, I, k)
											if (!Q) return null
											const ee = Q.data.map((te) => {
												var J
												return (
													((J = te.id) == null ? void 0 : J.toString()) ===
														(k == null ? void 0 : k.toString()) &&
														(te = { id: k, ...te, ...I }),
													te
												)
											})
											return { ...Q, data: ee }
										}
									),
								$.detail &&
									p.setQueriesData(
										{
											queryKey: Y.action('one')
												.id(k)
												.params(X ?? {})
												.get()
										},
										(Q) =>
											typeof $.detail == 'function'
												? $.detail(Q, I, k)
												: Q
													? { ...Q, data: { ...Q.data, ...I } }
													: null
									)),
							{ previousQueries: ae }
						)
					},
					onSettled: (P, k, L, I) => {
						var U
						const {
							id: _ = e,
							resource: $ = t,
							dataProviderName: O = r,
							invalidates: V = l ?? ['list', 'many', 'detail']
						} = L
						if (typeof _ > 'u') throw Ue
						if (!$) throw ze
						const { identifier: j } = d($)
						;(z({
							resource: j,
							dataProviderName: oe(j, O, v),
							invalidates: V,
							id: _
						}),
							W({ type: 'REMOVE', payload: { id: _, resource: j } }),
							(U = y == null ? void 0 : y.onSettled) == null ||
								U.call(y, P, k, L, I))
					},
					onSuccess: (P, k, L) => {
						var I, U
						const {
							id: _ = e,
							resource: $ = t,
							successNotification: O = o,
							dataProviderName: V = r,
							values: j = n,
							meta: X = i
						} = k
						if (typeof _ > 'u') throw Ue
						if (!j) throw Xe
						if (!$) throw ze
						const { resource: Y, identifier: ae } = d($),
							le = R.singular(ae),
							Q = oe(ae, V, v),
							ee = E({ resource: Y, meta: X }),
							te = typeof O == 'function' ? O(P, { id: _, values: j }, ae) : O
						;(F(te, {
							key: `${_}-${ae}-notification`,
							description: A('notifications.success', 'Successful'),
							message: A(
								'notifications.editSuccess',
								{ resource: A(`${ae}.${ae}`, le) },
								`Successfully updated ${le}`
							),
							type: 'success'
						}),
							T == null ||
								T({
									channel: `resources/${Y.name}`,
									type: 'updated',
									payload: {
										ids: (I = P.data) != null && I.id ? [P.data.id] : void 0
									},
									date: new Date(),
									meta: { ...ee, dataProviderName: Q }
								}))
						let J
						if (L) {
							const Ge = S()
									.data(oe(ae, Q, v))
									.resource(ae),
								Je = p.getQueryData(Ge.action('one').id(_).get())
							J = Object.keys(j || {}).reduce((Ye, be) => {
								var Qe
								return (
									(Ye[be] =
										(Qe = Je == null ? void 0 : Je.data) == null
											? void 0
											: Qe[be]),
									Ye
								)
							}, {})
						}
						const { fields: pe, operation: We, variables: ut, ...Pe } = ee || {}
						;(B == null ||
							B.mutate({
								action: 'update',
								resource: Y.name,
								data: j,
								previousData: J,
								meta: { ...Pe, dataProviderName: Q, id: _ }
							}),
							(U = y == null ? void 0 : y.onSuccess) == null ||
								U.call(y, P, k, L))
					},
					onError: (P, k, L) => {
						var I
						const {
							id: U = e,
							resource: _ = t,
							errorNotification: $ = a,
							values: O = n
						} = k
						if (typeof U > 'u') throw Ue
						if (!O) throw Xe
						if (!_) throw ze
						const { identifier: V } = d(_)
						if (L != null && L.previousQueries)
							for (const j of L.previousQueries) p.setQueryData(j[0], j[1])
						if (P.message !== 'mutationCancelled') {
							x == null || x(P)
							const j = R.singular(V),
								X = typeof $ == 'function' ? $(P, { id: U, values: O }, V) : $
							F(X, {
								key: `${U}-${V}-notification`,
								message: A(
									'notifications.editError',
									{ resource: A(`${V}.${V}`, j), statusCode: P.statusCode },
									`Error when updating ${j} (status code: ${P.statusCode})`
								),
								description: P.message,
								type: 'error'
							})
						}
						;(I = y == null ? void 0 : y.onError) == null || I.call(y, P, k, L)
					},
					mutationKey: S().data().mutation('update').get(),
					...y,
					meta: { ...(y == null ? void 0 : y.meta), ...ie() }
				}),
				{ mutate: N, mutateAsync: q } = D,
				{ elapsedTime: K } = Be({ ...b, isLoading: D.isPending })
			return {
				mutation: D,
				mutate: s((P, k) => N(P || {}, k), 'handleMutation'),
				mutateAsync: s((P, k) => q(P || {}, k), 'handleMutateAsync'),
				overtime: { elapsedTime: K }
			}
		},
		'useUpdate'
	),
	ze = new Error(
		'[useUpdate]: `resource` is not defined or not matched but is required'
	),
	Ue = new Error(
		'[useUpdate]: `id` is not defined but is required in edit and clone actions'
	),
	Xe = new Error('[useUpdate]: `values` is not provided but is required'),
	fr = s(
		({
			resource: e,
			values: t,
			dataProviderName: n,
			successNotification: r,
			errorNotification: o,
			invalidates: a,
			meta: i,
			mutationOptions: c,
			overtimeOptions: u
		} = {}) => {
			const { mutate: f } = De(),
				m = je(),
				l = Fe(),
				{ resources: y, select: b } = Z(),
				v = ce(),
				d = ht(),
				{ log: p } = Pt(),
				g = He(),
				w = xe(),
				{
					options: { textTransformers: M }
				} = Ae(),
				{ keys: x } = ne(),
				A = ye({
					mutationFn: ({
						resource: R = e,
						values: S = t,
						meta: D = i,
						dataProviderName: N = n
					}) => {
						if (!S) throw vt
						if (!R) throw dt
						const { resource: q, identifier: K } = b(R),
							G = w({ resource: q, meta: D })
						return m(oe(K, N, y)).create({
							resource: q.name,
							variables: S,
							meta: G
						})
					},
					onSuccess: (R, S, D) => {
						var N, q, K
						const {
							resource: G = e,
							successNotification: H = r,
							dataProviderName: P = n,
							invalidates: k = a ?? ['list', 'many'],
							values: L = t,
							meta: I = i
						} = S
						if (!L) throw vt
						if (!G) throw dt
						const { resource: U, identifier: _ } = b(G),
							$ = M.singular(_),
							O = oe(_, P, y),
							V = w({ resource: U, meta: I }),
							j = typeof H == 'function' ? H(R, L, _) : H
						;(g(j, {
							key: `create-${_}-notification`,
							message: v(
								'notifications.createSuccess',
								{ resource: v(`${_}.${_}`, $) },
								`Successfully created ${$}`
							),
							description: v('notifications.success', 'Success'),
							type: 'success'
						}),
							l({ resource: _, dataProviderName: O, invalidates: k }),
							d == null ||
								d({
									channel: `resources/${U.name}`,
									type: 'created',
									payload: {
										ids:
											(N = R == null ? void 0 : R.data) != null && N.id
												? [R.data.id]
												: void 0
									},
									date: new Date(),
									meta: { ...V, dataProviderName: O }
								}))
						const { fields: X, operation: Y, variables: ae, ...le } = V || {}
						;(p == null ||
							p.mutate({
								action: 'create',
								resource: U.name,
								data: L,
								meta: {
									...le,
									dataProviderName: O,
									id:
										((q = R == null ? void 0 : R.data) == null
											? void 0
											: q.id) ?? void 0
								}
							}),
							(K = c == null ? void 0 : c.onSuccess) == null ||
								K.call(c, R, S, D))
					},
					onError: (R, S, D) => {
						var N
						const {
							resource: q = e,
							errorNotification: K = o,
							values: G = t
						} = S
						if (!G) throw vt
						if (!q) throw dt
						f(R)
						const { identifier: H } = b(q),
							P = M.singular(H),
							k = typeof K == 'function' ? K(R, G, H) : K
						;(g(k, {
							key: `create-${H}-notification`,
							description: R.message,
							message: v(
								'notifications.createError',
								{ resource: v(`${H}.${H}`, P), statusCode: R.statusCode },
								`There was an error creating ${P} (status code: ${R.statusCode})`
							),
							type: 'error'
						}),
							(N = c == null ? void 0 : c.onError) == null ||
								N.call(c, R, S, D))
					},
					mutationKey: x().data().mutation('create').get(),
					...c,
					meta: { ...(c == null ? void 0 : c.meta), ...ie() }
				}),
				{ mutate: T, mutateAsync: B, ...W } = A,
				{ elapsedTime: F } = Be({ ...u, isLoading: W.isPending })
			return {
				mutation: A,
				mutate: s((R, S) => T(R || {}, S), 'handleMutation'),
				mutateAsync: s((R, S) => B(R || {}, S), 'handleMutateAsync'),
				overtime: { elapsedTime: F }
			}
		},
		'useCreate'
	),
	dt = new Error(
		'[useCreate]: `resource` is not defined or not matched but is required'
	),
	vt = new Error('[useCreate]: `values` is not provided but is required'),
	fn = s(({ mutationOptions: e, overtimeOptions: t } = {}) => {
		const { mutate: n } = De(),
			r = je(),
			{ resources: o, select: a } = Z(),
			i = _e(),
			{ mutationMode: c, undoableTimeout: u } = nt(),
			{ notificationDispatch: f } = gt(),
			m = ce(),
			l = ht(),
			{ log: y } = Pt(),
			b = He(),
			v = Fe(),
			d = xe(),
			{
				options: { textTransformers: p }
			} = Ae(),
			{ keys: g } = ne(),
			w = ye({
				mutationFn: ({
					id: x,
					mutationMode: A,
					undoableTimeout: T,
					resource: B,
					onCancel: W,
					meta: F,
					dataProviderName: z,
					values: E
				}) => {
					const { resource: R, identifier: S } = a(B),
						D = d({ resource: R, meta: F }),
						N = A ?? c,
						q = T ?? u
					return N !== 'undoable'
						? r(oe(S, z, o)).deleteOne({
								resource: R.name,
								id: x,
								meta: D,
								variables: E
							})
						: new Promise((G, H) => {
								const P = s(() => {
										r(oe(S, z, o))
											.deleteOne({
												resource: R.name,
												id: x,
												meta: D,
												variables: E
											})
											.then((L) => G(L))
											.catch((L) => H(L))
									}, 'doMutation'),
									k = s(() => {
										H({ message: 'mutationCancelled' })
									}, 'cancelMutation')
								;(W && W(k),
									f({
										type: 'ADD',
										payload: {
											id: x,
											resource: S,
											cancelMutation: k,
											doMutation: P,
											seconds: q,
											isSilent: !!W
										}
									}))
							})
				},
				onMutate: async ({
					id: x,
					resource: A,
					mutationMode: T,
					dataProviderName: B,
					meta: W
				}) => {
					const { identifier: F } = a(A),
						{ gqlMutation: z, gqlQuery: E, ...R } = W ?? {},
						S = g()
							.data(oe(F, B, o))
							.resource(F),
						D = T ?? c
					await i.cancelQueries({ queryKey: S.get() })
					const N = i.getQueriesData({ queryKey: S.get() })
					return (
						D !== 'pessimistic' &&
							(i.setQueriesData(
								{
									queryKey: S.action('list')
										.params(R ?? {})
										.get()
								},
								(q) =>
									q
										? {
												data: q.data.filter((G) => {
													var H
													return (
														((H = G.id) == null ? void 0 : H.toString()) !==
														x.toString()
													)
												}),
												total: q.total - 1
											}
										: null
							),
							i.setQueriesData({ queryKey: S.action('many').get() }, (q) => {
								if (!q) return null
								const K = q.data.filter((G) => {
									var H
									return (
										((H = G.id) == null ? void 0 : H.toString()) !==
										(x == null ? void 0 : x.toString())
									)
								})
								return { ...q, data: K }
							})),
						{ previousQueries: N, queryKey: S.get() }
					)
				},
				onSettled: (
					x,
					A,
					{
						id: T,
						resource: B,
						dataProviderName: W,
						invalidates: F = ['list', 'many']
					}
				) => {
					const { identifier: z } = a(B)
					;(v({ resource: z, dataProviderName: oe(z, W, o), invalidates: F }),
						f({ type: 'REMOVE', payload: { id: T, resource: z } }))
				},
				onSuccess: (
					x,
					{
						id: A,
						resource: T,
						successNotification: B,
						dataProviderName: W,
						meta: F
					},
					z
				) => {
					const { resource: E, identifier: R } = a(T),
						S = p.singular(R),
						D = oe(R, W, o),
						N = d({ resource: E, meta: F }),
						q = g()
							.data(oe(R, D, o))
							.resource(R)
					i.removeQueries({ queryKey: q.action('one').get() })
					const K = typeof B == 'function' ? B(x, A, R) : B
					;(b(K, {
						key: `${A}-${R}-notification`,
						description: m('notifications.success', 'Success'),
						message: m(
							'notifications.deleteSuccess',
							{ resource: m(`${R}.${R}`, S) },
							`Successfully deleted a ${S}`
						),
						type: 'success'
					}),
						l == null ||
							l({
								channel: `resources/${E.name}`,
								type: 'deleted',
								payload: { ids: [A] },
								date: new Date(),
								meta: { ...N, dataProviderName: D }
							}))
					const { fields: G, operation: H, variables: P, ...k } = N || {}
					;(y == null ||
						y.mutate({
							action: 'delete',
							resource: E.name,
							meta: { ...k, dataProviderName: D, id: A }
						}),
						i.removeQueries({ queryKey: q.action('one').get() }))
				},
				onError: (x, { id: A, resource: T, errorNotification: B }, W) => {
					const { identifier: F } = a(T)
					if (W) for (const z of W.previousQueries) i.setQueryData(z[0], z[1])
					if (x.message !== 'mutationCancelled') {
						n(x)
						const z = p.singular(F),
							E = typeof B == 'function' ? B(x, A, F) : B
						b(E, {
							key: `${A}-${F}-notification`,
							message: m(
								'notifications.deleteError',
								{ resource: z, statusCode: x.statusCode },
								`Error (status code: ${x.statusCode})`
							),
							description: x.message,
							type: 'error'
						})
					}
				},
				mutationKey: g().data().mutation('delete').get(),
				...e,
				meta: { ...(e == null ? void 0 : e.meta), ...ie() }
			}),
			{ elapsedTime: M } = Be({ ...t, isLoading: w.isPending })
		return {
			mutation: w,
			mutate: w.mutate,
			mutateAsync: w.mutateAsync,
			overtime: { elapsedTime: M }
		}
	}, 'useDelete'),
	mn = { default: {} },
	yt = h.createContext(mn),
	mr = s(({ children: e, dataProvider: t }) => {
		let n = mn
		return (
			t &&
				(!('default' in t) && ('getList' in t || 'getOne' in t)
					? (n = { default: t })
					: (n = t)),
			h.createElement(yt.Provider, { value: n }, e)
		)
	}, 'DataContextProvider'),
	je = s(() => {
		const e = C.useContext(yt)
		return C.useCallback(
			(n) => {
				if (n) {
					const r = e == null ? void 0 : e[n]
					if (!r) throw new Error(`"${n}" Data provider not found`)
					if (r && !(e != null && e.default))
						throw new Error(
							'If you have multiple data providers, you must provide default data provider property'
						)
					return e[n]
				}
				if (e.default) return e.default
				throw new Error(
					'There is no "default" data provider. Please pass dataProviderName.'
				)
			},
			[e]
		)
	}, 'useDataProvider'),
	ot = h.createContext({}),
	yr = s(
		({ liveProvider: e, children: t }) =>
			h.createElement(ot.Provider, { value: { liveProvider: e } }, t),
		'LiveContextProvider'
	),
	Fe = s(() => {
		const { resources: e } = Z(),
			t = _e(),
			{ keys: n } = ne()
		return C.useCallback(
			async ({
				resource: o,
				dataProviderName: a,
				invalidates: i,
				id: c,
				invalidationFilters: u = { type: 'all', refetchType: 'active' },
				invalidationOptions: f = { cancelRefetch: !1 }
			}) => {
				if (i === !1) return
				const m = oe(o, a, e),
					l = n()
						.data(m)
						.resource(o ?? '')
				await Promise.all(
					i.map((y) => {
						switch (y) {
							case 'all':
								return t.invalidateQueries({
									queryKey: n().data(m).get(),
									...u,
									...f
								})
							case 'list':
								return t.invalidateQueries({
									queryKey: l.action('list').get(),
									...u,
									...f
								})
							case 'many':
								return t.invalidateQueries({
									queryKey: l.action('many').get(),
									...u,
									...f
								})
							case 'resourceAll':
								return t.invalidateQueries({ queryKey: l.get(), ...u, ...f })
							case 'detail':
								return t.invalidateQueries({
									queryKey: l
										.action('one')
										.id(c || '')
										.get(),
									...u,
									...f
								})
							default:
								return
						}
					})
				)
			},
			[]
		)
	}, 'useInvalidate'),
	yn = s(
		({
			resource: e,
			params: t,
			channel: n,
			types: r,
			enabled: o = !0,
			liveMode: a,
			onLiveEvent: i,
			meta: c
		}) => {
			var u
			const { resource: f, identifier: m } = Z({ resource: e }),
				{ liveProvider: l } = C.useContext(ot),
				{ liveMode: y, onLiveEvent: b } = C.useContext(Se),
				v = a ?? y,
				d = Fe(),
				p =
					(c == null ? void 0 : c.dataProviderName) ??
					((u = f == null ? void 0 : f.meta) == null
						? void 0
						: u.dataProviderName)
			C.useEffect(() => {
				let g
				const w = s((M) => {
					;(v === 'auto' &&
						d({
							resource: m,
							dataProviderName: p,
							invalidates: ['resourceAll'],
							invalidationFilters: { type: 'active', refetchType: 'active' },
							invalidationOptions: { cancelRefetch: !1 }
						}),
						i == null || i(M),
						b == null || b(M))
				}, 'callback')
				return (
					v &&
						v !== 'off' &&
						o &&
						(g =
							l == null
								? void 0
								: l.subscribe({
										channel: n,
										params: { resource: f == null ? void 0 : f.name, ...t },
										types: r,
										callback: w,
										meta: { ...c, dataProviderName: p }
									})),
					() => {
						g && (l == null || l.unsubscribe(g))
					}
				)
			}, [o])
		},
		'useResourceSubscription'
	),
	hr = s((e) => {
		const { liveMode: t } = C.useContext(Se)
		return e ?? t
	}, 'useLiveMode'),
	ht = s(() => {
		const { liveProvider: e } = C.useContext(ot)
		return e == null ? void 0 : e.publish
	}, 'usePublish'),
	hn = C.createContext({ notifications: [], notificationDispatch: () => !1 }),
	gr = [],
	pr = s((e, t) => {
		switch (t.type) {
			case 'ADD':
				return [
					...e.filter(
						(r) =>
							!(Te(r.id, t.payload.id) && r.resource === t.payload.resource)
					),
					{ ...t.payload, isRunning: !0 }
				]
			case 'REMOVE':
				return e.filter(
					(n) => !(Te(n.id, t.payload.id) && n.resource === t.payload.resource)
				)
			case 'DECREASE_NOTIFICATION_SECOND':
				return e.map((n) =>
					Te(n.id, t.payload.id) && n.resource === t.payload.resource
						? { ...n, seconds: t.payload.seconds - 1e3 }
						: n
				)
			default:
				return e
		}
	}, 'undoableQueueReducer'),
	br = s(({ children: e }) => {
		const [t, n] = C.useReducer(pr, gr),
			r = { notifications: t, notificationDispatch: n }
		return h.createElement(
			hn.Provider,
			{ value: r },
			e,
			typeof window < 'u'
				? t.map((o) =>
						h.createElement(uo, {
							key: `${o.id}-${o.resource}-queue`,
							notification: o
						})
					)
				: null
		)
	}, 'UndoableQueueContextProvider'),
	gt = s(() => {
		const { notifications: e, notificationDispatch: t } = C.useContext(hn)
		return { notifications: e, notificationDispatch: t }
	}, 'useCancelNotification'),
	pt = C.createContext({}),
	Cr = s(
		({ open: e, close: t, children: n }) =>
			h.createElement(pt.Provider, { value: { open: e, close: t } }, n),
		'NotificationContextProvider'
	),
	qe = s(() => {
		const { open: e, close: t } = C.useContext(pt)
		return { open: e, close: t }
	}, 'useNotification'),
	He = s(() => {
		const { open: e } = qe()
		return C.useCallback((n, r) => {
			n !== !1 && (n ? e == null || e(n) : r && (e == null || e(r)))
		}, [])
	}, 'useHandleNotification'),
	at = h.createContext({}),
	wr = s(
		({ children: e, i18nProvider: t }) =>
			h.createElement(at.Provider, { value: { i18nProvider: t } }, e),
		'I18nContextProvider'
	),
	ce = s(() => {
		const { i18nProvider: e } = C.useContext(at)
		return C.useMemo(() => {
			function n(r, o, a) {
				return (
					(e == null ? void 0 : e.translate(r, o, a)) ??
					a ??
					(typeof o == 'string' && typeof a > 'u' ? o : r)
				)
			}
			return (s(n, 'translate'), n)
		}, [e])
	}, 'useTranslate'),
	wo = s((e = {}) => {
		var t, n, r, o
		const a = xe(),
			i = Fe(),
			{ redirect: c } = Et(),
			{ mutationMode: u } = nt(),
			{ setWarnWhen: f } = Jt(),
			m = Mr(),
			l = e.meta,
			y = e.mutationMode ?? u,
			{
				id: b,
				setId: v,
				resource: d,
				identifier: p,
				formAction: g
			} = Z({ resource: e.resource, id: e.id, action: e.action }),
			[w, M] = h.useState(!1),
			x = g === 'edit',
			A = g === 'clone',
			T = g === 'create',
			B = a({ resource: d, meta: l }),
			W = (x || A) && !!e.resource,
			F = typeof e.id < 'u',
			z = ((t = e.queryOptions) == null ? void 0 : t.enabled) === !1
		ke(W && !F && !z, xr(g, p, b))
		const E = Fn({
				redirectFromProps: e.redirect,
				action: g,
				redirectOptions: c
			}),
			R = s((_ = x ? 'list' : 'edit', $ = b, O = {}) => {
				m({ redirect: _, resource: d, id: $, meta: { ...l, ...O } })
			}, 'redirect'),
			S = vn({
				resource: p,
				id: b,
				queryOptions: {
					...e.queryOptions,
					enabled:
						!T &&
						b !== void 0 &&
						(((n = e.queryOptions) == null ? void 0 : n.enabled) ?? !0)
				},
				liveMode: e.liveMode,
				onLiveEvent: e.onLiveEvent,
				liveParams: e.liveParams,
				meta: { ...B, ...e.queryMeta },
				dataProviderName: e.dataProviderName,
				overtimeOptions: { enabled: !1 }
			}),
			D = fr({
				mutationOptions: e.createMutationOptions,
				overtimeOptions: { enabled: !1 }
			}),
			N = vr({
				mutationOptions: e.updateMutationOptions,
				overtimeOptions: { enabled: !1 }
			}),
			q = x ? N : D,
			G = q.mutation.isPending || S.query.isFetching,
			{ elapsedTime: H } = Be({ ...e.overtimeOptions, isLoading: G })
		h.useEffect(
			() => () => {
				var _
				;(_ = e.autoSave) != null &&
					_.invalidateOnUnmount &&
					w &&
					p &&
					typeof b < 'u' &&
					i({
						id: b,
						invalidates: e.invalidates || ['list', 'many', 'detail'],
						dataProviderName: e.dataProviderName,
						resource: p
					})
			},
			[(r = e.autoSave) == null ? void 0 : r.invalidateOnUnmount, w]
		)
		const P = s(async (_, { isAutosave: $ = !1 } = {}) => {
				const O = y === 'pessimistic'
				f(!1)
				const V = s((X) => R(E, X), 'onSuccessRedirect')
				return new Promise((X, Y) => {
					if (!d) return Y(Pr)
					if (A && !b) return Y(Er)
					if (!_) return Y(Rr)
					if ($ && !x) return Y(Sr)
					!O && !$ && (Nt(() => V()), X())
					const ae = {
							values: _,
							resource: p ?? d.name,
							meta: { ...B, ...e.mutationMeta },
							dataProviderName: e.dataProviderName,
							invalidates: $ ? [] : e.invalidates,
							successNotification: $ ? !1 : e.successNotification,
							errorNotification: $ ? !1 : e.errorNotification,
							...(x
								? {
										id: b ?? '',
										mutationMode: y,
										undoableTimeout: e.undoableTimeout,
										optimisticUpdateMap: e.optimisticUpdateMap
									}
								: {})
						},
						{ mutateAsync: le } = x ? N : D
					le(ae, {
						onSuccess: e.onMutationSuccess
							? (Q, ee, te) => {
									var J
									;(J = e.onMutationSuccess) == null || J.call(e, Q, _, te, $)
								}
							: void 0,
						onError: e.onMutationError
							? (Q, ee, te) => {
									var J
									;(J = e.onMutationError) == null || J.call(e, Q, _, te, $)
								}
							: void 0
					})
						.then((Q) => {
							;(O &&
								!$ &&
								Nt(() => {
									var ee
									return V(
										(ee = Q == null ? void 0 : Q.data) == null ? void 0 : ee.id
									)
								}),
								$ && M(!0),
								X(Q))
						})
						.catch(Y)
				})
			}, 'onFinish'),
			k = h.useRef(P)
		h.useEffect(() => {
			k.current = P
		}, [P])
		const L = h.useMemo(() => {
			var _
			return Zn(
				($) => k.current($, { isAutosave: !0 }),
				((_ = e.autoSave) == null ? void 0 : _.debounce) ?? 1e3,
				'Cancelled by debounce'
			)
		}, [(o = e.autoSave) == null ? void 0 : o.debounce])
		h.useEffect(
			() => () => {
				L.cancel()
			},
			[L]
		)
		const I = { elapsedTime: H },
			U = {
				status: N.mutation.status,
				data: N.mutation.data,
				error: N.mutation.error
			}
		return {
			onFinish: P,
			onFinishAutoSave: L,
			formLoading: G,
			mutation: q.mutation,
			query: S.query,
			autoSaveProps: U,
			id: b,
			setId: v,
			redirect: R,
			overtime: I
		}
	}, 'useForm'),
	Pr = new Error(
		'[useForm]: `resource` is not defined or not matched but is required'
	),
	Er = new Error(
		'[useForm]: `id` is not defined but is required in edit and clone actions'
	),
	Rr = new Error('[useForm]: `values` is not provided but is required'),
	Sr = new Error('[useForm]: `autoSave` is only allowed in edit action'),
	xr = s(
		(e, t, n) => `[useForm]: action: "${e}", resource: "${t}", id: ${n}

If you don't use the \`setId\` method to set the \`id\`, you should pass the \`id\` prop to \`useForm\`. Otherwise, \`useForm\` will not be able to infer the \`id\` from the current URL with custom resource provided.

See https://refine.dev/docs/data/hooks/use-form/#id-`,
		'idWarningMessage'
	),
	Mr = s(() => {
		const { show: e, edit: t, list: n, create: r } = Cn()
		return C.useCallback(
			({ redirect: a, resource: i, id: c, meta: u = {} }) => {
				if (a && i)
					return i.show && a === 'show' && c
						? e(i, c, void 0, u)
						: i.edit && a === 'edit' && c
							? t(i, c, void 0, u)
							: i.create && a === 'create'
								? r(i, void 0, u)
								: n(i, 'push', u)
			},
			[]
		)
	}, 'useRedirectionAfterSubmission'),
	gn = {},
	$e = C.createContext(gn),
	_r = s(
		({ children: e, router: t }) =>
			h.createElement($e.Provider, { value: t ?? gn }, e),
		'RouterContextProvider'
	),
	kr = s((e) => {
		const t = C.useRef(e)
		return (Te(t.current, e) || (t.current = e), t.current)
	}, 'useMemoized'),
	pn = s((e, t) => {
		const n = kr(t)
		return C.useMemo(e, n)
	}, 'useDeepMemo'),
	st = h.createContext({ resources: [] }),
	Ar = s(({ resources: e, children: t }) => {
		const n = pn(() => e ?? [], [e])
		return h.createElement(st.Provider, { value: { resources: n } }, t)
	}, 'ResourceContextProvider'),
	qr = s(() => {
		const e = C.useContext($e)
		return h.useMemo(
			() => (e == null ? void 0 : e.parse) ?? (() => () => ({})),
			[e == null ? void 0 : e.parse]
		)()
	}, 'useParse'),
	ve = s(() => {
		const e = qr()
		return h.useMemo(() => e(), [e])
	}, 'useParsed'),
	$r = s((e) => {
		const t = ve()
		return e ?? t.id
	}, 'useId'),
	Lr = s((e) => {
		const t = ve()
		return e ?? t.action
	}, 'useAction')
function bn(e) {
	const { resources: t } = C.useContext(st),
		n = ve(),
		r = s((i, c = !0) => {
			const u = ge(i, t)
			if (u) return { resource: u, identifier: u.identifier ?? u.name }
			if (c) {
				const f = { name: i, identifier: i },
					m = f.identifier ?? f.name
				return { resource: f, identifier: m }
			}
		}, 'select')
	let o
	const a = e
	if (a) {
		const i = ge(a, t)
		i ? (o = i) : (o = { name: a })
	} else n != null && n.resource && (o = n.resource)
	return {
		resources: t,
		resource: o,
		select: r,
		identifier:
			(o == null ? void 0 : o.identifier) ?? (o == null ? void 0 : o.name)
	}
}
s(bn, 'useResource')
function Z(e) {
	const { resources: t } = C.useContext(st),
		{ select: n, identifier: r, resource: o } = bn(),
		a = (e == null ? void 0 : e.resource) ?? r,
		{ identifier: i = void 0, resource: c = void 0 } = a ? n(a, !0) : {},
		u = r === i,
		f = $r(),
		m = Lr(e == null ? void 0 : e.action),
		l = h.useMemo(
			() =>
				u ? ((e == null ? void 0 : e.id) ?? f) : e == null ? void 0 : e.id,
			[u, e == null ? void 0 : e.id, f]
		),
		[y, b] = h.useState(l)
	h.useMemo(() => b(l), [l])
	const v = h.useMemo(
		() =>
			!u && !(e != null && e.action)
				? 'create'
				: m === 'edit' || m === 'clone'
					? m
					: 'create',
		[m, u, e == null ? void 0 : e.action]
	)
	return {
		id: y,
		setId: b,
		resource: c || o,
		resources: t,
		action: m,
		identifier: i,
		formAction: v,
		select: n
	}
}
s(Z, 'useResourceParams')
var bt = s(() => {
		const { resource: e, resources: t } = Z(),
			n = ve()
		return h.useCallback(
			({ resource: o, action: a, meta: i }) => {
				var c
				const u = o || e
				if (!u) return
				const f =
						t.find((b) =>
							!b.identifier || !u.identifier
								? !1
								: b.identifier === u.identifier
						) ??
						t.find((b) => (b.identifier ? b.identifier === u.name : !1)) ??
						t.find((b) => b.name === u.name) ??
						u,
					l =
						(c = Re(f, t).find((b) => b.action === a)) == null
							? void 0
							: c.route
				if (!l) {
					ke(
						!0,
						`[useGetToPath]: Could not find a route for the "${a}" action of the "${u.name}" resource. Please make sure that the resource has the "${a}" property defined.`
					)
					return
				}
				return Me(l, f == null ? void 0 : f.meta, n, i)
			},
			[t, e, n]
		)
	}, 'useGetToPath'),
	fe = s(() => {
		const e = C.useContext($e),
			{ select: t } = Z(),
			n = bt(),
			o = h.useMemo(
				() => (e == null ? void 0 : e.go) ?? (() => () => {}),
				[e == null ? void 0 : e.go]
			)()
		return C.useCallback(
			(i) => {
				if (typeof i.to != 'object') return o({ ...i, to: i.to })
				const { resource: c } = t(i.to.resource)
				Tr(i.to, c)
				const u = n({
					resource: c,
					action: i.to.action,
					meta: { id: i.to.id, ...i.to.meta }
				})
				return o({ ...i, to: u })
			},
			[t, o]
		)
	}, 'useGo'),
	Tr = s((e, t) => {
		if (!(e != null && e.action) || !(e != null && e.resource))
			throw new Error('[useGo]: "action" or "resource" is required.')
		if (
			['edit', 'show', 'clone'].includes(e == null ? void 0 : e.action) &&
			!e.id
		)
			throw new Error(
				`[useGo]: [action: ${e.action}] requires an "id" for resource [resource: ${e.resource}]`
			)
		if (!t[e.action])
			throw new Error(
				`[useGo]: [action: ${e.action}] is not defined for [resource: ${e.resource}]`
			)
	}, 'handleResourceErrors'),
	Cn = s(() => {
		const { resources: e } = Z(),
			t = ve(),
			n = fe(),
			r = s((v, d = 'push') => {
				n({ to: v, type: d })
			}, 'handleUrl'),
			o = s((v, d = {}) => {
				var p
				const g = typeof v == 'string' ? (ge(v, e) ?? { name: v }) : v,
					w =
						(p = Re(g, e).find((M) => M.action === 'create')) == null
							? void 0
							: p.route
				return w
					? n({
							to: Me(w, g == null ? void 0 : g.meta, t, d),
							type: 'path',
							query: d.query
						})
					: ''
			}, 'createUrl'),
			a = s((v, d, p = {}) => {
				var g
				const w = encodeURIComponent(d),
					M = typeof v == 'string' ? (ge(v, e) ?? { name: v }) : v,
					x =
						(g = Re(M, e).find((A) => A.action === 'edit')) == null
							? void 0
							: g.route
				return x
					? n({
							to: Me(x, M == null ? void 0 : M.meta, t, { ...p, id: w }),
							type: 'path',
							query: p.query
						})
					: ''
			}, 'editUrl'),
			i = s((v, d, p = {}) => {
				var g
				const w = encodeURIComponent(d),
					M = typeof v == 'string' ? (ge(v, e) ?? { name: v }) : v,
					x =
						(g = Re(M, e).find((A) => A.action === 'clone')) == null
							? void 0
							: g.route
				return x
					? n({
							to: Me(x, M == null ? void 0 : M.meta, t, { ...p, id: w }),
							type: 'path',
							query: p.query
						})
					: ''
			}, 'cloneUrl'),
			c = s((v, d, p = {}) => {
				var g
				const w = encodeURIComponent(d),
					M = typeof v == 'string' ? (ge(v, e) ?? { name: v }) : v,
					x =
						(g = Re(M, e).find((A) => A.action === 'show')) == null
							? void 0
							: g.route
				return x
					? n({
							to: Me(x, M == null ? void 0 : M.meta, t, { ...p, id: w }),
							type: 'path',
							query: p.query
						})
					: ''
			}, 'showUrl'),
			u = s((v, d = {}) => {
				var p
				const g = typeof v == 'string' ? (ge(v, e) ?? { name: v }) : v,
					w =
						(p = Re(g, e).find((M) => M.action === 'list')) == null
							? void 0
							: p.route
				return w
					? n({
							to: Me(w, g == null ? void 0 : g.meta, t, d),
							type: 'path',
							query: d.query
						})
					: ''
			}, 'listUrl')
		return {
			create: s((v, d = 'push', p = {}) => {
				r(o(v, p), d)
			}, 'create'),
			createUrl: o,
			edit: s((v, d, p = 'push', g = {}) => {
				r(a(v, d, g), p)
			}, 'edit'),
			editUrl: a,
			clone: s((v, d, p = 'push', g = {}) => {
				r(i(v, d, g), p)
			}, 'clone'),
			cloneUrl: i,
			show: s((v, d, p = 'push', g = {}) => {
				r(c(v, d, g), p)
			}, 'show'),
			showUrl: c,
			list: s((v, d = 'push', p = {}) => {
				r(u(v, p), d)
			}, 'list'),
			listUrl: u
		}
	}, 'useNavigation'),
	Po = s(
		({
			resource: e,
			id: t,
			meta: n,
			queryOptions: r,
			overtimeOptions: o,
			...a
		} = {}) => {
			const {
					resource: i,
					identifier: c,
					id: u,
					setId: f
				} = Z({ id: t, resource: e }),
				l = xe()({ resource: i, meta: n })
			ke(!!e && !u, Ir(c, u))
			const y = vn({
				resource: c,
				id: u ?? '',
				queryOptions: { enabled: u !== void 0, ...r },
				meta: l,
				overtimeOptions: o,
				...a
			})
			return {
				query: y.query,
				result: y.result,
				showId: u,
				setShowId: f,
				overtime: y.overtime
			}
		},
		'useShow'
	),
	Ir = s(
		(e, t) => `[useShow]: resource: "${e}", id: ${t} 

If you don't use the \`setShowId\` method to set the \`showId\`, you should pass the \`id\` prop to \`useShow\`. Otherwise, \`useShow\` will not be able to infer the \`id\` from the current URL. 

See https://refine.dev/docs/data/hooks/use-show/#resource`,
		'idWarningMessage'
	),
	Eo = s(() => {
		const e = C.useContext($e)
		return h.useMemo(
			() => (e == null ? void 0 : e.back) ?? (() => () => {}),
			[e == null ? void 0 : e.back]
		)()
	}, 'useBack'),
	Nr = s((e, t) => {
		const n = C.useContext($e),
			r = n == null ? void 0 : n.Link,
			o = fe()
		let a = ''
		return (
			'go' in e &&
				((n != null && n.go) ||
					ke(
						!0,
						'[Link]: `routerProvider` is not found. To use `go`, Please make sure that you have provided the `routerProvider` for `<Refine />` https://refine.dev/docs/routing/router-provider/ \n'
					),
				(a = o({ ...e.go, type: 'path' }))),
			'to' in e && (a = e.to),
			r
				? h.createElement(r, { ref: t, ...e, to: a, go: void 0 })
				: h.createElement('a', {
						ref: t,
						href: a,
						...e,
						to: void 0,
						go: void 0
					})
		)
	}, 'LinkComponent'),
	Kr = C.forwardRef(Nr),
	Dr = s(() => Kr, 'useLink'),
	Ve = h.createContext({
		options: { buttons: { enableAccessControl: !0, hideIfUnauthorized: !1 } }
	}),
	Br = s(
		({ can: e, children: t, options: n }) =>
			h.createElement(
				Ve.Provider,
				{
					value: {
						can: e,
						options: n
							? {
									...n,
									buttons: {
										enableAccessControl: !0,
										hideIfUnauthorized: !1,
										...n.buttons
									}
								}
							: {
									buttons: { enableAccessControl: !0, hideIfUnauthorized: !1 },
									queryOptions: void 0
								}
					}
				},
				t
			),
		'AccessControlContextProvider'
	),
	Ct = s((e) => {
		if (!e) return
		const {
				list: t,
				edit: n,
				create: r,
				show: o,
				clone: a,
				children: i,
				meta: c,
				icon: u,
				...f
			} = e,
			{ icon: m, ...l } = c ?? {}
		return { ...f, ...(c ? { meta: l } : {}) }
	}, 'sanitizeResource'),
	Fr = s(({ action: e, resource: t, params: n, queryOptions: r }) => {
		const { can: o, options: a } = C.useContext(Ve),
			{ keys: i } = ne(),
			{ queryOptions: c } = a || {},
			u = { ...c, ...r },
			{ resource: f, ...m } = n ?? {},
			l = Ct(f),
			y = Ke({
				queryKey: i()
					.access()
					.resource(t)
					.action(e)
					.params({
						params: { ...m, resource: l },
						enabled: u == null ? void 0 : u.enabled
					})
					.get(),
				queryFn: () =>
					(o == null
						? void 0
						: o({ action: e, resource: t, params: { ...m, resource: l } })) ??
					Promise.resolve({ can: !0 }),
				enabled: typeof o < 'u',
				...u,
				meta: { ...(u == null ? void 0 : u.meta), ...ie() },
				retry: !1
			})
		return typeof o > 'u' ? { data: { can: !0 } } : y
	}, 'useCan'),
	Wr = s(() => {
		const { can: e } = h.useContext(Ve)
		return {
			can: h.useMemo(
				() =>
					e
						? s(async ({ params: r, ...o }) => {
								const a = r != null && r.resource ? Ct(r.resource) : void 0
								return e({
									...o,
									...(r ? { params: { ...r, resource: a } } : {})
								})
							}, 'canWithSanitizedResource')
						: void 0,
				[e]
			)
		}
	}, 'useCanWithoutCache'),
	Qr = [],
	zr = [],
	Ur = Object.freeze([])
function Or({
	pagination: e,
	filters: t,
	sorters: n,
	syncWithLocation: r,
	resource: o,
	successNotification: a,
	errorNotification: i,
	queryOptions: c,
	liveMode: u,
	onLiveEvent: f,
	liveParams: m,
	meta: l,
	dataProviderName: y,
	overtimeOptions: b
} = {}) {
	var v, d, p, g, w, M, x, A, T
	const { syncWithLocation: B } = Vn(),
		W = r ?? B,
		F = hr(u),
		z = xe(),
		E = ve(),
		R = ((t == null ? void 0 : t.mode) || 'server') === 'server',
		S = ((n == null ? void 0 : n.mode) || 'server') === 'server',
		D = (e == null ? void 0 : e.mode) !== 'off',
		N = e == null ? void 0 : e.currentPage,
		q = e == null ? void 0 : e.pageSize,
		K = l,
		{
			parsedCurrentPage: G,
			parsedPageSize: H,
			parsedSorter: P,
			parsedFilters: k
		} = Tn(((v = E.params) == null ? void 0 : v.search) ?? '?'),
		L = t == null ? void 0 : t.initial,
		I = (t == null ? void 0 : t.permanent) ?? Qr,
		U = n == null ? void 0 : n.initial,
		_ = (n == null ? void 0 : n.permanent) ?? zr,
		$ = (t == null ? void 0 : t.defaultBehavior) ?? 'merge'
	let O, V, j, X
	W
		? ((O =
				((d = E == null ? void 0 : E.params) == null
					? void 0
					: d.currentPage) ||
				G ||
				N ||
				1),
			(V =
				((p = E == null ? void 0 : E.params) == null ? void 0 : p.pageSize) ||
				H ||
				q ||
				10),
			(j =
				((g = E == null ? void 0 : E.params) == null ? void 0 : g.sorters) ||
				(P.length ? P : U)),
			(X =
				((w = E == null ? void 0 : E.params) == null ? void 0 : w.filters) ||
				(k.length ? k : L)))
		: ((O = N || 1), (V = q || 10), (j = U), (X = L))
	const Y = fe(),
		{ resource: ae, identifier: le } = Z({ resource: o }),
		Q = z({ resource: ae, meta: K })
	h.useEffect(() => {
		ke(typeof le > 'u', 'useTable: `resource` is not defined.')
	}, [le])
	const [ee, te] = C.useState(Lt(_, j ?? [])),
		[J, pe] = C.useState($t(I, X ?? [])),
		[We, ut] = C.useState(O),
		[Pe, Ge] = C.useState(V),
		Je = s(() => {
			const {
				sorters: re,
				filters: Ee,
				pageSize: xt,
				current: Mt,
				...xn
			} = (E == null ? void 0 : E.params) ?? {}
			return xn
		}, 'getCurrentQueryParams'),
		Ye = s(
			({
				pagination: { currentPage: re, pageSize: Ee },
				sorters: xt,
				filters: Mt
			}) =>
				Y({
					type: 'path',
					options: { keepHash: !0, keepQuery: !0 },
					query: {
						...(D ? { currentPage: re, pageSize: Ee } : {}),
						sorters: xt,
						filters: Mt,
						...Je()
					}
				}) ?? '',
			'createLinkForSyncWithLocation'
		)
	;(C.useEffect(() => {
		var re
		;((re = E == null ? void 0 : E.params) == null ? void 0 : re.search) ===
			'' && (ut(O), Ge(V), te(Lt(_, j ?? [])), pe($t(I, X ?? [])))
	}, [(M = E == null ? void 0 : E.params) == null ? void 0 : M.search]),
		C.useEffect(() => {
			W &&
				Y({
					type: 'replace',
					options: { keepQuery: !0 },
					query: {
						...(D ? { pageSize: Pe, currentPage: We } : {}),
						sorters: tt(ee, _, Te),
						filters: tt(J, I, Te)
					}
				})
		}, [W, We, Pe, ee, J]))
	const be = dr({
			resource: le,
			pagination: {
				currentPage: We,
				pageSize: Pe,
				mode: e == null ? void 0 : e.mode
			},
			filters: R ? Ze(I, J) : void 0,
			sorters: S ? qt(_, ee) : void 0,
			queryOptions: c,
			overtimeOptions: b,
			successNotification: a,
			errorNotification: i,
			meta: Q,
			liveMode: F,
			liveParams: m,
			onLiveEvent: f,
			dataProviderName: y
		}),
		Qe = C.useCallback(
			(re) => {
				pe((Ee) => Ze(I, re, Ee))
			},
			[I]
		),
		Rt = C.useCallback(
			(re) => {
				pe(Ze(I, re))
			},
			[I]
		),
		St = C.useCallback(
			(re) => {
				pe((Ee) => Ze(I, re(Ee)))
			},
			[I]
		),
		Rn = C.useCallback(
			(re, Ee = $) => {
				typeof re == 'function' ? St(re) : Ee === 'replace' ? Rt(re) : Qe(re)
			},
			[St, Rt, Qe]
		),
		Sn = C.useCallback(
			(re) => {
				te(() => qt(_, re))
			},
			[_]
		)
	return {
		tableQuery: be.query,
		sorters: ee,
		setSorters: Sn,
		filters: J,
		setFilters: Rn,
		currentPage: We,
		setCurrentPage: ut,
		pageSize: Pe,
		setPageSize: Ge,
		pageCount: Pe
			? Math.ceil((((x = be.result) == null ? void 0 : x.total) ?? 0) / Pe)
			: 1,
		createLinkForSyncWithLocation: Ye,
		overtime: be.overtime,
		result: {
			...be.result,
			data: ((A = be.result) == null ? void 0 : A.data) || Ur,
			total: (T = be.result) == null ? void 0 : T.total
		}
	}
}
s(Or, 'useTable')
var wt = h.createContext({}),
	jr = s(
		({ create: e, get: t, update: n, children: r }) =>
			h.createElement(
				wt.Provider,
				{ value: { create: e, get: t, update: n } },
				r
			),
		'AuditLogContextProvider'
	),
	Pt = s(({ logMutationOptions: e, renameMutationOptions: t } = {}) => {
		const n = _e(),
			r = C.useContext(wt),
			{ keys: o } = ne(),
			{ resources: a } = C.useContext(st),
			{
				data: i,
				refetch: c,
				isLoading: u
			} = cn({ queryOptions: { enabled: !!(r != null && r.create) } }),
			f = ye({
				mutationFn: async (l) => {
					var y, b
					const v = ge(l.resource, a),
						d = (y = v == null ? void 0 : v.meta) == null ? void 0 : y.audit
					if (d && !In(d, l.action)) return
					let p
					return (
						u && r != null && r.create && (p = await c()),
						await ((b = r.create) == null
							? void 0
							: b.call(r, { ...l, author: i ?? (p == null ? void 0 : p.data) }))
					)
				},
				mutationKey: o().audit().action('log').get(),
				...e,
				meta: { ...(e == null ? void 0 : e.meta), ...ie() }
			}),
			m = ye({
				mutationFn: async (l) => {
					var y
					return await ((y = r.update) == null ? void 0 : y.call(r, l))
				},
				onSuccess: (l) => {
					l != null &&
						l.resource &&
						n.invalidateQueries({
							queryKey: o()
								.audit()
								.resource((l == null ? void 0 : l.resource) ?? '')
								.action('list')
								.get()
						})
				},
				mutationKey: o().audit().action('rename').get(),
				...t,
				meta: { ...(t == null ? void 0 : t.meta), ...ie() }
			})
		return { log: f, rename: m }
	}, 'useLog'),
	Ro = s(({ meta: e = {} } = {}) => {
		const { i18nProvider: t } = C.useContext(at),
			n = ve(),
			r = ce(),
			{ action: o, resource: a, resources: i } = Z(),
			{
				options: { textTransformers: c }
			} = Ae(),
			u = []
		if (!(a != null && a.name)) return { breadcrumbs: u }
		const f = s((m) => {
			var l, y, b, v
			const d = typeof m == 'string' ? (ge(m, i) ?? { name: m }) : m
			if (d) {
				const p = (l = d == null ? void 0 : d.meta) == null ? void 0 : l.parent
				p && f(p)
				const g = Re(d, i).find((x) => x.action === 'list'),
					w =
						(y = g == null ? void 0 : g.resource) != null && y.list
							? g == null
								? void 0
								: g.route
							: void 0,
					M = w ? Me(w, d == null ? void 0 : d.meta, n, e) : void 0
				u.push({
					label:
						((b = d.meta) == null ? void 0 : b.label) ??
						r(`${d.name}.${d.name}`, c.humanize(d.name)),
					href: M,
					icon: (v = d.meta) == null ? void 0 : v.icon
				})
			}
		}, 'addBreadcrumb')
		if ((f(a), o && o !== 'list')) {
			const m = `actions.${o}`,
				l = r(m)
			typeof t < 'u' && l === m
				? (ke(
						!0,
						`[useBreadcrumb]: Breadcrumb missing translate key for the "${o}" action. Please add "actions.${o}" key to your translation file.
For more information, see https://refine.dev/docs/api-reference/core/hooks/useBreadcrumb/#i18n-support`
					),
					u.push({ label: r(`buttons.${o}`, c.humanize(o)) }))
				: u.push({ label: r(m, c.humanize(o)) })
		}
		return { breadcrumbs: u }
	}, 'useBreadcrumb'),
	et = s((e, t) => {
		const n = []
		let r = Ne(e, t)
		for (; r; ) (n.push(r), (r = Ne(r, t)))
		return (
			n.reverse(),
			`/${[...n, e]
				.map((a) => Oe(a.identifier ?? a.name))
				.join('/')
				.replace(/^\//, '')}`
		)
	}, 'createResourceKey'),
	Hr = s((e) => {
		const t = { item: { name: '__root__' }, children: {} }
		e.forEach((r) => {
			const o = []
			let a = Ne(r, e)
			for (; a; ) (o.push(a), (a = Ne(a, e)))
			o.reverse()
			let i = t
			o.forEach((u) => {
				const f = u.identifier ?? u.name
				;(i.children[f] || (i.children[f] = { item: u, children: {} }),
					(i = i.children[f]))
			})
			const c = r.identifier ?? r.name
			i.children[c] || (i.children[c] = { item: r, children: {} })
		})
		const n = s((r) => {
			const o = []
			return (
				Object.keys(r.children).forEach((a) => {
					const i = et(r.children[a].item, e),
						c = { ...r.children[a].item, key: i, children: n(r.children[a]) }
					o.push(c)
				}),
				o
			)
		}, 'flatten')
		return n(t)
	}, 'createTree'),
	Vr = s(
		(e) =>
			e
				.split('?')[0]
				.split('#')[0]
				.replace(/(.+)(\/$)/, '$1'),
		'getCleanPath'
	),
	So = s(
		(
			{ meta: e, hideOnMissingParameter: t = !0 } = {
				hideOnMissingParameter: !0
			}
		) => {
			const n = ce(),
				r = bt(),
				{ resource: o, resources: a } = Z(),
				{ pathname: i } = ve(),
				c = rt(),
				f = `/${((i ? Vr(i) : void 0) ?? '').replace(/^\//, '')}`,
				m = o ? et(o, a) : (f ?? ''),
				l = h.useMemo(() => {
					if (!o) return []
					let v = Ne(o, a)
					const d = [et(o, a)]
					for (; v; ) (d.push(et(v, a)), (v = Ne(v, a)))
					return d
				}, []),
				y = h.useCallback(
					(v) => {
						var d, p, g
						if (
							((d = v == null ? void 0 : v.meta) != null && d.hide) ||
							(!(v != null && v.list) && v.children.length === 0)
						)
							return
						const w = v.list
							? r({ resource: v, action: 'list', meta: e })
							: void 0
						if (!(t && w && w.match(/(\/|^):(.+?)(\/|$){1}/)))
							return {
								...v,
								route: w,
								icon: (p = v.meta) == null ? void 0 : p.icon,
								label:
									((g = v == null ? void 0 : v.meta) == null
										? void 0
										: g.label) ?? n(`${v.name}.${v.name}`, c(v.name, 'plural'))
							}
					},
					[e, r, n, t]
				),
				b = h.useMemo(() => {
					const v = Hr(a),
						d = s(
							(p) =>
								p.flatMap((g) => {
									const w = d(g.children),
										M = y({ ...g, children: w })
									return M ? [M] : []
								}),
							'prepare'
						)
					return d(v)
				}, [a, y])
			return { defaultOpenKeys: l, selectedKey: m, menuItems: b }
		},
		'useMenu'
	),
	Qt = C.createContext({}),
	Gr = s(() => {
		if (!C.useContext(Qt))
			throw new Error(
				'useMetaContext must be used within a MetaContextProvider'
			)
		return C.useContext(Qt)
	}, 'useMetaContext'),
	xe = s(() => {
		const { params: e } = ve(),
			t = Gr()
		return s(({ resource: r, meta: o } = {}) => {
			const { meta: a } = Ct(r) ?? { meta: {} },
				{ filters: i, sorters: c, currentPage: u, pageSize: f, ...m } = e ?? {},
				l = { ...a, ...m, ...o }
			return (t != null && t.tenantId && (l.tenantId = t.tenantId), l)
		}, 'getMetaFn')
	}, 'useMeta'),
	Et = s(() => {
		const { options: e } = h.useContext(Se)
		return e
	}, 'useRefineOptions')
function Jr({ type: e }) {
	const t = ce(),
		{
			textTransformers: { humanize: n }
		} = Et(),
		r = `buttons.${e}`,
		o = n(e)
	return { label: t(r, o) }
}
s(Jr, 'useActionableButton')
var wn = s((e) => {
	var t, n, r
	const o = ce(),
		a = h.useContext(Ve),
		i =
			((t = e.accessControl) == null ? void 0 : t.enabled) ??
			a.options.buttons.enableAccessControl,
		c =
			((n = e.accessControl) == null ? void 0 : n.hideIfUnauthorized) ??
			a.options.buttons.hideIfUnauthorized,
		{ data: u } = Fr({
			resource: (r = e.resource) == null ? void 0 : r.name,
			action: e.action === 'clone' ? 'create' : e.action,
			params: { meta: e.meta, id: e.id, resource: e.resource },
			queryOptions: { enabled: i }
		}),
		f = h.useMemo(
			() =>
				u != null && u.can
					? ''
					: u != null && u.reason
						? u.reason
						: o(
								'buttons.notAccessTitle',
								"You don't have permission to access"
							),
			[u == null ? void 0 : u.can, u == null ? void 0 : u.reason, o]
		),
		m = i && c && !(u != null && u.can),
		l = (u == null ? void 0 : u.can) === !1
	return { title: f, hidden: m, disabled: l, canAccess: u }
}, 'useButtonCanAccess')
function it(e) {
	var t
	const n = Cn(),
		r = Dr(),
		o = ce(),
		a = rt(),
		{
			textTransformers: { humanize: i }
		} = Et(),
		{
			id: c,
			resource: u,
			identifier: f
		} = Z({ resource: e.resource, id: e.action === 'create' ? void 0 : e.id }),
		{
			canAccess: m,
			title: l,
			hidden: y,
			disabled: b
		} = wn({
			action: e.action,
			accessControl: e.accessControl,
			meta: e.meta,
			id: c,
			resource: u
		}),
		v = r,
		d = h.useMemo(() => {
			if (!u) return ''
			switch (e.action) {
				case 'create':
				case 'list':
					return n[`${e.action}Url`](u, e.meta)
				default:
					return c ? n[`${e.action}Url`](u, c, e.meta) : ''
			}
		}, [u, c, e.meta, n[`${e.action}Url`]]),
		p =
			e.action === 'list'
				? o(
						`${f ?? e.resource}.titles.list`,
						a(
							((t = u == null ? void 0 : u.meta) == null ? void 0 : t.label) ??
								f ??
								e.resource,
							'plural'
						)
					)
				: o(`buttons.${e.action}`, i(e.action))
	return {
		to: d,
		label: p,
		title: l,
		disabled: b,
		hidden: y,
		canAccess: m,
		LinkComponent: v
	}
}
s(it, 'useNavigationButton')
function Yr(e) {
	const t = ce(),
		{
			mutation: { mutate: n, isPending: r, variables: o }
		} = fn(),
		{ setWarnWhen: a } = Jt(),
		{ mutationMode: i } = nt(e.mutationMode),
		{
			id: c,
			resource: u,
			identifier: f
		} = Z({ resource: e.resource, id: e.id }),
		{
			title: m,
			disabled: l,
			hidden: y,
			canAccess: b
		} = wn({
			action: 'delete',
			accessControl: e.accessControl,
			meta: e.meta,
			id: c,
			resource: u
		}),
		v = t('buttons.delete', 'Delete'),
		d = t('buttons.delete', 'Delete'),
		p = t('buttons.confirm', 'Are you sure?'),
		g = t('buttons.cancel', 'Cancel'),
		w = c === (o == null ? void 0 : o.id) && r
	return {
		label: v,
		title: m,
		hidden: y,
		disabled: l,
		canAccess: b,
		loading: w,
		confirmOkLabel: d,
		cancelLabel: g,
		confirmTitle: p,
		onConfirm: s(() => {
			c &&
				f &&
				(a(!1),
				n(
					{
						id: c,
						resource: f,
						mutationMode: i,
						successNotification: e.successNotification,
						errorNotification: e.errorNotification,
						meta: e.meta,
						dataProviderName: e.dataProviderName,
						invalidates: e.invalidates
					},
					{ onSuccess: e.onSuccess }
				))
		}, 'onConfirm')
	}
}
s(Yr, 'useDeleteButton')
function Zr(e) {
	const t = ce(),
		{ keys: n } = ne(),
		r = _e(),
		o = Fe(),
		{
			identifier: a,
			id: i,
			resources: c
		} = Z({ resource: e.resource, id: e.id }),
		u = !!r.isFetching({
			queryKey: n()
				.data(oe(a, e.dataProviderName, c))
				.resource(a)
				.action('one')
				.get()
		}),
		f = s(() => {
			o({
				id: i,
				invalidates: ['detail'],
				dataProviderName: e.dataProviderName,
				resource: a
			})
		}, 'onClick'),
		m = t('buttons.refresh', 'Refresh')
	return { onClick: f, label: m, loading: u }
}
s(Zr, 'useRefreshButton')
var xo = s((e) => it({ ...e, action: 'show' }), 'useShowButton'),
	Mo = s((e) => it({ ...e, action: 'edit' }), 'useEditButton'),
	_o = s((e) => it({ ...e, action: 'create' }), 'useCreateButton'),
	Xr = '5.0.12',
	eo = s(() => {
		var e
		const t = cr(),
			n = C.useContext(wt),
			{ liveProvider: r } = C.useContext(ot),
			o = C.useContext($e),
			a = C.useContext(yt),
			{ i18nProvider: i } = C.useContext(at),
			c = C.useContext(pt),
			u = C.useContext(Ve),
			{ resources: f } = Z(),
			m = Ae(),
			l = !!n.create || !!n.get || !!n.update,
			y =
				!!(r != null && r.publish) ||
				!!(r != null && r.subscribe) ||
				!!(r != null && r.unsubscribe),
			b = !!o.Link || !!o.go || !!o.back || !!o.parse,
			v = !!a,
			d =
				!!(i != null && i.changeLocale) ||
				!!(i != null && i.getLocale) ||
				!!(i != null && i.translate),
			p = !!c.close || !!c.open,
			g = !!u.can,
			w = (e = m == null ? void 0 : m.options) == null ? void 0 : e.projectId
		return {
			providers: {
				auth: t,
				auditLog: l,
				live: y,
				router: b,
				data: v,
				i18n: d,
				notification: p,
				accessControl: g
			},
			version: Xr,
			resourceCount: f.length,
			projectId: w
		}
	}, 'useTelemetryData'),
	to = s((e) => {
		try {
			const t = JSON.stringify(e || {})
			return typeof btoa < 'u' ? btoa(t) : Buffer.from(t).toString('base64')
		} catch {
			return
		}
	}, 'encode'),
	no = s((e) => {
		const t = new Image()
		t.src = e
	}, 'throughImage'),
	ro = s((e) => {
		fetch(e)
	}, 'throughFetch'),
	oo = s((e) => {
		typeof Image < 'u' ? no(e) : typeof fetch < 'u' && ro(e)
	}, 'transport'),
	ao = s(() => {
		const e = eo(),
			t = h.useRef(!1)
		return (
			h.useEffect(() => {
				if (t.current) return
				const n = to(e)
				n &&
					(oo(`https://telemetry.refine.dev/telemetry?payload=${n}`),
					(t.current = !0))
			}, []),
			null
		)
	}, 'Telemetry'),
	so = s((e) => {
		const t = ['go', 'parse', 'back', 'Link'],
			n = Object.keys(e).filter((o) => !t.includes(o))
		return n.length > 0
			? (console.warn(
					`Unsupported properties are found in \`routerProvider\` prop. You provided \`${n.join(', ')}\`. Supported properties are \`${t.join(', ')}\`. You may wanted to use \`legacyRouterProvider\` prop instead.`
				),
				!0)
			: !1
	}, 'checkRouterPropMisuse'),
	io = s((e) => {
		const t = h.useRef(!1)
		h.useEffect(() => {
			t.current === !1 && e && so(e) && (t.current = !0)
		}, [e])
	}, 'useRouterMisuseWarning'),
	ko = s(
		({
			authProvider: e,
			dataProvider: t,
			routerProvider: n,
			notificationProvider: r,
			accessControlProvider: o,
			auditLogProvider: a,
			resources: i,
			children: c,
			liveProvider: u,
			i18nProvider: f,
			onLiveEvent: m,
			options: l
		}) => {
			const {
					optionsWithDefaults: y,
					disableTelemetryWithDefault: b,
					reactQueryWithDefaults: v
				} = Bn({ options: l }),
				d = y.disableRouteChangeHandler,
				p = pn(() => {
					var M
					return v.clientConfig instanceof kt
						? v.clientConfig
						: new kt({
								...v.clientConfig,
								defaultOptions: {
									...v.clientConfig.defaultOptions,
									queries: {
										refetchOnWindowFocus: !1,
										placeholderData: _n,
										...((M = v.clientConfig.defaultOptions) == null
											? void 0
											: M.queries)
									}
								}
							})
				}, [v.clientConfig]),
				w = h.useMemo(() => (typeof r == 'function' ? r : () => r), [r])()
			return (
				io(n),
				h.createElement(
					Mn,
					{ client: p },
					h.createElement(
						Cr,
						{ ...w },
						h.createElement(
							$n,
							{ ...(e ?? {}), isProvided: !!e },
							h.createElement(
								mr,
								{ dataProvider: t },
								h.createElement(
									yr,
									{ liveProvider: u },
									h.createElement(
										_r,
										{ router: n },
										h.createElement(
											Ar,
											{ resources: i ?? [] },
											h.createElement(
												wr,
												{ i18nProvider: f },
												h.createElement(
													Br,
													{ ...(o ?? {}) },
													h.createElement(
														jr,
														{ ...(a ?? {}) },
														h.createElement(
															br,
															null,
															h.createElement(
																Dn,
																{
																	mutationMode: y.mutationMode,
																	warnWhenUnsavedChanges:
																		y.warnWhenUnsavedChanges,
																	syncWithLocation: y.syncWithLocation,
																	undoableTimeout: y.undoableTimeout,
																	liveMode: y.liveMode,
																	onLiveEvent: m,
																	options: y
																},
																h.createElement(
																	Hn,
																	null,
																	h.createElement(
																		h.Fragment,
																		null,
																		c,
																		!b && h.createElement(ao, null),
																		!d && h.createElement(vo, null)
																	)
																)
															)
														)
													)
												)
											)
										)
									)
								)
							)
						)
					)
				)
			)
		},
		'Refine'
	),
	uo = s(({ notification: e }) => {
		const t = ce(),
			{ notificationDispatch: n } = gt(),
			{ open: r } = qe(),
			[o, a] = C.useState(),
			i = s(() => {
				if (
					e.isRunning === !0 &&
					(e.seconds === 0 && e.doMutation(),
					e.isSilent ||
						r == null ||
						r({
							key: `${e.id}-${e.resource}-notification`,
							type: 'progress',
							message: t(
								'notifications.undoable',
								{ seconds: ct(e.seconds) },
								`You have ${ct(e.seconds)} seconds to undo`
							),
							cancelMutation: e.cancelMutation,
							undoableTimeout: ct(e.seconds)
						}),
					e.seconds > 0)
				) {
					o && clearTimeout(o)
					const c = setTimeout(() => {
						n({
							type: 'DECREASE_NOTIFICATION_SECOND',
							payload: { id: e.id, seconds: e.seconds, resource: e.resource }
						})
					}, 1e3)
					a(c)
				}
			}, 'cancelNotification')
		return (
			C.useEffect(() => {
				i()
			}, [e]),
			null
		)
	}, 'UndoableQueue')
function co({
	redirectOnFail: e = !0,
	appendCurrentPathToQuery: t = !0,
	children: n,
	fallback: r,
	loading: o,
	params: a
}) {
	var i
	const c = Vt(),
		u = !!(c != null && c.isProvided),
		f = ve(),
		m = fe(),
		{ isFetching: l, data: { authenticated: y, redirectTo: b } = {} } = dn({
			params: a
		}),
		v = u ? y : !0
	if (!u) return h.createElement(h.Fragment, null, n ?? null)
	if (l) return h.createElement(h.Fragment, null, o ?? null)
	if (v) return h.createElement(h.Fragment, null, n ?? null)
	if (typeof r < 'u') return h.createElement(h.Fragment, null, r ?? null)
	const d = typeof e == 'string' ? e : b,
		p = `${f.pathname}`.replace(/(\?.*|#.*)$/, '')
	if (d) {
		const g =
			(i = f.params) != null && i.to
				? f.params.to
				: m({ to: p, options: { keepQuery: !0 }, type: 'path' })
		return h.createElement(lo, {
			config: {
				to: d,
				query: t && (g ?? '').length > 1 ? { to: g } : void 0,
				type: 'replace'
			}
		})
	}
	return null
}
s(co, 'Authenticated')
var lo = s(({ config: e }) => {
		const t = fe()
		return (
			h.useEffect(() => {
				t(e)
			}, [t, e]),
			null
		)
	}, 'Redirect'),
	vo = s(() => {
		var e, t
		const n = C.useContext($e),
			r = Vt(),
			o = (e = n.parse) == null ? void 0 : e.call(n),
			a = ((t = o == null ? void 0 : o()) == null ? void 0 : t.pathname) || ''
		return (
			C.useEffect(() => {
				var i
				;(i = r == null ? void 0 : r.check) == null || i.call(r).catch(() => !1)
			}, [a]),
			null
		)
	}, 'RouteChangeHandler'),
	Ao = ({ children: e }) => e,
	fo = Object.defineProperty,
	Ce = (e, t) => fo(e, 'name', { value: t, configurable: !0 }),
	Le = Ce(
		(e) =>
			e.replace(
				/\w\S*/g,
				(t) => t.charAt(0).toUpperCase() + t.slice(1).toLowerCase()
			),
		'capitalize'
	),
	mo = Ce(() => {
		const e = ce(),
			{ id: t, action: n, resource: r, resources: o } = Z(),
			a = bt(),
			i = fe(),
			{
				mutation: { mutate: c }
			} = fn(),
			u = rt(),
			f = C.useContext(ue.KBarContext),
			{ can: m } = Wr(),
			[l, y] = C.useState([])
		;(C.useEffect(() => {
			Ce(
				async () => await Promise.all(b().flatMap((p) => v(p))),
				'preaparedActions'
			)().then((p) => y(p.flatMap((g) => g)))
		}, [o, t, r, n]),
			C.useEffect(() => {
				l.length === 0 && f.query.setVisualState(ue.VisualState.hidden)
			}, [l]))
		const b = Ce(() => {
				const d = [...o],
					p =
						d == null
							? void 0
							: d.findIndex(
									(g) =>
										(g.identifier ?? (g == null ? void 0 : g.name)) ===
										((r == null ? void 0 : r.identifier) ??
											(r == null ? void 0 : r.name))
								)
				if (p > 0) {
					const g = d[p]
					;(d.splice(p, 1), d.splice(0, 0, g))
				}
				return d
			}, 'moveActionToFirst'),
			v = Ce(async (d) => {
				var p, g, w, M, x, A
				const { name: T, list: B, create: W, show: F, edit: z } = d,
					E = (p = d == null ? void 0 : d.meta) == null ? void 0 : p.label,
					R = (g = d == null ? void 0 : d.meta) == null ? void 0 : g.icon,
					S = (w = d == null ? void 0 : d.meta) == null ? void 0 : w.canDelete,
					D = E ?? e(`${d.name}.${d.name}`, u(d.name, 'plural')),
					N = []
				if (
					B &&
					((r !== void 0 && (r == null ? void 0 : r.name) !== T) ||
						(n !== void 0 && (r == null ? void 0 : r.name) === T))
				) {
					const { can: q } = (await (m == null
						? void 0
						: m({
								resource: T,
								action: 'list',
								params: { id: t, resource: d }
							}))) || { can: !0 }
					q &&
						N.push(
							ue.createAction({
								name: e('actions.list', Le('list')),
								section: D,
								icon: R,
								perform: () => {
									const K = a({ resource: d, action: 'list' })
									K && i({ to: K })
								}
							})
						)
				}
				if (
					(((M = d == null ? void 0 : d.meta) != null && M.canCreate) || W) &&
					W &&
					(n !== 'create' || (r == null ? void 0 : r.name) !== T)
				) {
					const { can: q } = (await (m == null
						? void 0
						: m({
								resource: T,
								action: 'create',
								params: { resource: d }
							}))) || { can: !0 }
					q &&
						N.push(
							ue.createAction({
								name: e('actions.create', Le('create')),
								section: D,
								icon: R,
								keywords: 'new',
								perform: () => {
									const K = a({ resource: d, action: 'create' })
									K && i({ to: K })
								}
							})
						)
				}
				if ((r == null ? void 0 : r.name) === T && t) {
					if (
						(((x = d == null ? void 0 : d.meta) != null && x.canShow) || F) &&
						F &&
						n !== 'show'
					) {
						const { can: q } = (await (m == null
							? void 0
							: m({
									resource: T,
									action: 'show',
									params: { id: t, resource: d }
								}))) || { can: !0 }
						q &&
							N.push(
								ue.createAction({
									name: e('actions.show', Le('show')),
									section: D,
									icon: R,
									perform: () => {
										const K = a({
											resource: d,
											action: 'show',
											meta: { id: t }
										})
										K && i({ to: K })
									}
								})
							)
					}
					if (
						(((A = d == null ? void 0 : d.meta) != null && A.canEdit) || z) &&
						z &&
						n !== 'edit'
					) {
						const { can: q } = (await (m == null
							? void 0
							: m({
									resource: T,
									action: 'edit',
									params: { id: t, resource: d }
								}))) || { can: !0 }
						q &&
							N.push(
								ue.createAction({
									name: e('actions.edit', Le('edit')),
									section: D,
									icon: R,
									perform: () => {
										const K = a({
											resource: d,
											action: 'edit',
											meta: { id: t }
										})
										K && i({ to: K })
									}
								})
							)
					}
					if (S) {
						const { can: q } = (await (m == null
							? void 0
							: m({
									resource: T,
									action: 'delete',
									params: { id: t, resource: d }
								}))) || { can: !0 }
						q &&
							N.push(
								{
									id: 'delete',
									name: e('actions.delete', Le('delete')),
									section: D,
									icon: R
								},
								ue.createAction({
									name: e('buttons.delete', Le('delete')),
									section: e('buttons.confirm', 'Are you sure?'),
									parent: 'delete',
									perform: () => {
										c(
											{ resource: d.name, id: t },
											{
												onSuccess: () => {
													const K = a({ resource: d, action: 'list' })
													K && i({ to: K })
												}
											}
										)
									}
								}),
								ue.createAction({
									name: e('buttons.cancel', 'Cancel'),
									parent: 'delete',
									perform: () => null
								})
							)
					}
				}
				return N
			}, 'createActionWithResource')
		ue.useRegisterActions(l, [l])
	}, 'useRefineKbar'),
	yo = Ce(() => {
		const e = {
				padding: '12px 16px',
				fontSize: '16px',
				width: '100%',
				boxSizing: 'border-box',
				outline: 'none',
				border: 'none',
				background: 'rgb(252 252 252)',
				color: 'black'
			},
			t = {
				maxWidth: '600px',
				width: '100%',
				background: 'white',
				color: 'black',
				borderRadius: '8px',
				overflow: 'hidden',
				boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'
			},
			n = {
				opacity: 1,
				transition: 'background 0.35s cubic-bezier(0.4, 0, 0.2, 1) 0s',
				backdropFilter: 'saturate(180%) blur(1px)',
				background: 'rgba(0, 0, 0, 0.1)',
				zIndex: '9999'
			}
		return h.createElement(
			ue.KBarPortal,
			null,
			h.createElement(
				ue.KBarPositioner,
				{ style: n },
				h.createElement(
					ue.KBarAnimator,
					{ style: t },
					h.createElement(ue.KBarSearch, { style: e }),
					h.createElement(go, null)
				)
			)
		)
	}, 'CommandBar'),
	ho = {
		padding: '8px 16px',
		fontSize: '14px',
		textTransform: 'uppercase',
		fontWeight: 'bold',
		opacity: 0.5
	},
	go = Ce(() => {
		const { results: e, rootActionId: t } = ue.useMatches()
		return h.createElement(ue.KBarResults, {
			items: e,
			onRender: ({ item: n, active: r }) =>
				typeof n == 'string'
					? h.createElement('div', { style: ho }, n)
					: h.createElement(Pn, {
							action: n,
							active: r,
							currentRootActionId: t
						})
		})
	}, 'RenderResults'),
	Pn = h.forwardRef(({ action: e, active: t, currentRootActionId: n }, r) => {
		var o
		const a = h.useMemo(() => {
			if (!n) return e.ancestors
			const i = e.ancestors.findIndex((c) => c.id === n)
			return e.ancestors.slice(i + 1)
		}, [e.ancestors, n])
		return h.createElement(
			'div',
			{
				ref: r,
				style: {
					padding: '12px 16px',
					background: t ? 'rgba(0 0 0 / 0.05)' : 'transparent',
					borderLeft: `2px solid ${t ? 'rgb(28 28 29)' : 'transparent'}`,
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					cursor: 'pointer'
				}
			},
			h.createElement(
				'div',
				{
					style: {
						display: 'flex',
						gap: '8px',
						alignItems: 'center',
						fontSize: 14
					}
				},
				e.icon && e.icon,
				h.createElement(
					'div',
					{ style: { display: 'flex', flexDirection: 'column' } },
					h.createElement(
						'div',
						null,
						a.length > 0 &&
							a.map((i) =>
								h.createElement(
									h.Fragment,
									{ key: i.id },
									h.createElement(
										'span',
										{ style: { opacity: 0.5, marginRight: 8 } },
										i.name
									),
									h.createElement('span', { style: { marginRight: 8 } }, '›')
								)
							),
						h.createElement(
							'span',
							{
								style: {
									color:
										e.name.toLocaleUpperCase() === 'DELETE' ? 'red' : 'black'
								}
							},
							e.name
						)
					),
					e.subtitle &&
						h.createElement('span', { style: { fontSize: 12 } }, e.subtitle)
				)
			),
			(o = e.shortcut) != null && o.length
				? h.createElement(
						'div',
						{
							'aria-hidden': !0,
							style: { display: 'grid', gridAutoFlow: 'column', gap: '4px' }
						},
						e.shortcut.map((i) =>
							h.createElement(
								'kbd',
								{
									key: i,
									style: {
										padding: '4px 6px',
										background: 'rgba(0 0 0 / .1)',
										borderRadius: '4px',
										fontSize: 14
									}
								},
								i
							)
						)
					)
				: null
		)
	})
Pn.displayName = 'ResultItem'
var qo = Ce(({ commandBarProps: e }) => {
		const t = C.useContext(En)
		mo()
		const n = { ...t, ...e }
		return h.createElement(yo, { ...n })
	}, 'RefineKbar'),
	En = C.createContext({}),
	$o = Ce(
		({ children: e, commandBarProps: t }) =>
			h.createElement(
				En.Provider,
				{ value: t ?? {} },
				h.createElement(ue.KBarProvider, null, e)
			),
		'RefineKbarProvider'
	),
	zt = {
		getList: {
			getEndpoint(e) {
				return `${e.resource}`
			},
			async buildHeaders(e) {
				var t
				return ((t = e.meta) == null ? void 0 : t.headers) ?? {}
			},
			async buildQueryParams(e) {
				var t
				const { filters: n, sorters: r, pagination: o } = e
				return {
					filters: n,
					sorters: r,
					pagination: o,
					...((t = e.meta) == null ? void 0 : t.query)
				}
			},
			async mapResponse(e, t) {
				return await e.json()
			},
			async getTotalCount(e, t) {
				return -1
			}
		},
		getOne: {
			getEndpoint(e) {
				return `${e.resource}/${e.id}`
			},
			async buildHeaders(e) {
				var t
				return ((t = e.meta) == null ? void 0 : t.headers) ?? {}
			},
			async buildQueryParams(e) {
				var t
				return ((t = e.meta) == null ? void 0 : t.query) ?? {}
			},
			async mapResponse(e, t) {
				return await e.json()
			}
		},
		create: {
			getEndpoint(e) {
				return e.resource
			},
			async buildHeaders(e) {
				var t
				return ((t = e.meta) == null ? void 0 : t.headers) ?? {}
			},
			async buildQueryParams(e) {
				var t
				return ((t = e.meta) == null ? void 0 : t.query) ?? {}
			},
			async buildBodyParams(e) {
				return e.variables
			},
			async mapResponse(e, t) {
				return await e.json()
			},
			async transformError(e, t) {
				const n = await e.json()
				return {
					message: JSON.stringify({ ...n, variables: t.variables }),
					statusCode: e.status
				}
			}
		},
		update: {
			getEndpoint(e) {
				return `${e.resource}/${e.id}`
			},
			getRequestMethod(e) {
				var t
				return ((t = e.meta) == null ? void 0 : t.method) ?? 'patch'
			},
			async buildHeaders(e) {
				var t
				return ((t = e.meta) == null ? void 0 : t.headers) ?? {}
			},
			async buildQueryParams(e) {
				var t
				return ((t = e.meta) == null ? void 0 : t.query) ?? {}
			},
			async buildBodyParams(e) {
				return e.variables
			},
			async mapResponse(e, t) {
				return await e.json()
			},
			async transformError(e, t) {
				const n = await e.json()
				return {
					message: JSON.stringify({ ...n, id: t.id, variables: t.variables }),
					statusCode: e.status
				}
			}
		},
		deleteOne: {
			getEndpoint(e) {
				return `${e.resource}/${e.id}`
			},
			async buildHeaders(e) {
				var t
				return ((t = e.meta) == null ? void 0 : t.headers) ?? {}
			},
			async buildQueryParams(e) {
				var t
				return ((t = e.meta) == null ? void 0 : t.query) ?? {}
			},
			async mapResponse(e, t) {},
			async transformError(e, t) {
				const n = await e.json()
				return {
					message: JSON.stringify({ ...n, id: t.id }),
					statusCode: e.status
				}
			}
		},
		custom: {
			async buildQueryParams(e) {
				return e.query ?? {}
			},
			async buildHeaders(e) {
				return e.headers ?? {}
			},
			async buildBodyParams(e) {
				return e.payload ?? {}
			},
			async mapResponse(e, t) {
				return await e.json()
			},
			async transformError(e, t) {
				const n = await e.json()
				return {
					message: JSON.stringify({ ...n, params: t }),
					statusCode: e.status
				}
			}
		}
	},
	Lo = (e, t = zt, n = {}) => {
		const r = An(zt, t),
			o = At.create({
				prefixUrl: e,
				...n,
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
					...n.headers
				},
				throwHttpErrors: !1
			})
		return {
			kyInstance: o,
			dataProvider: {
				getList: async (a) => {
					const i = r.getList.getEndpoint(a),
						c = await r.getList.buildHeaders(a),
						u = await r.getList.buildQueryParams(a),
						f = await o(i, {
							headers: c,
							searchParams: me.stringify(u, { encodeValuesOnly: !0 })
						}),
						m = await r.getList.mapResponse(f.clone(), a),
						l = await r.getList.getTotalCount(f.clone(), a)
					return { data: m, total: l }
				},
				getOne: async (a) => {
					const i = r.getOne.getEndpoint(a),
						c = await r.getOne.buildHeaders(a),
						u = await r.getOne.buildQueryParams(a),
						f = await o(i, {
							headers: c,
							searchParams: me.stringify(u, { encodeValuesOnly: !0 })
						})
					return { data: await r.getOne.mapResponse(f, a) }
				},
				getMany: r.getMany
					? async (a) => {
							var i, c, u, f, m, l
							const y =
									((c = (i = r.getMany).getEndpoint) == null
										? void 0
										: c.call(i, a)) ?? a.resource,
								b =
									(await ((f = (u = r.getMany).buildHeaders) == null
										? void 0
										: f.call(u, a))) ?? {},
								v =
									(await ((l = (m = r.getMany).buildQueryParams) == null
										? void 0
										: l.call(m, a))) ?? {},
								d = await o(y, {
									headers: b,
									searchParams: me.stringify(v, { encodeValuesOnly: !0 })
								})
							if (d.ok) return { data: await r.getMany.mapResponse(d, a) }
							let p
							throw (
								r.getMany.transformError
									? (p = await r.getMany.transformError(d, a))
									: (p = await d.json()),
								p
							)
						}
					: void 0,
				create: async (a) => {
					const i = r.create.getEndpoint(a),
						c = await r.create.buildHeaders(a),
						u = await r.create.buildQueryParams(a),
						f = await r.create.buildBodyParams(a),
						m = await o(i, {
							method: 'post',
							headers: c,
							searchParams: me.stringify(u, { encodeValuesOnly: !0 }),
							body: JSON.stringify(f)
						})
					if (m.ok) return { data: await r.create.mapResponse(m, a) }
					throw await r.create.transformError(m, a)
				},
				createMany: r.createMany
					? async (a) => {
							var i, c, u, f, m, l, y
							const b =
									((c = (i = r.createMany).getEndpoint) == null
										? void 0
										: c.call(i, a)) ?? a.resource,
								v =
									(await ((f = (u = r.createMany).buildHeaders) == null
										? void 0
										: f.call(u, a))) ?? {},
								d =
									(await ((l = (m = r.createMany).buildQueryParams) == null
										? void 0
										: l.call(m, a))) ?? {},
								p = await r.createMany.buildBodyParams(a),
								g = await o(b, {
									method: 'post',
									headers: v,
									searchParams: me.stringify(d, { encodeValuesOnly: !0 }),
									body: JSON.stringify(p)
								})
							if (g.ok) return { data: await r.createMany.mapResponse(g, a) }
							let w
							throw (
								r.createMany.transformError
									? (w = await ((y = r.createMany) == null
											? void 0
											: y.transformError(g, a)))
									: (w = await g.json()),
								w
							)
						}
					: void 0,
				update: async (a) => {
					const i = r.update.getEndpoint(a),
						c = r.update.getRequestMethod(a),
						u = await r.update.buildHeaders(a),
						f = await r.update.buildQueryParams(a),
						m = await r.update.buildBodyParams(a),
						l = await o(i, {
							method: c,
							headers: u,
							searchParams: me.stringify(f, { encodeValuesOnly: !0 }),
							body: JSON.stringify(m)
						})
					if (l.ok) return { data: await r.update.mapResponse(l, a) }
					throw await r.update.transformError(l, a)
				},
				updateMany: r.updateMany
					? async (a) => {
							var i, c, u, f, m, l
							const y = r.updateMany.getEndpoint(a),
								b =
									((c = (i = r.updateMany).getRequestMethod) == null
										? void 0
										: c.call(i, a)) ?? 'patch',
								v =
									(await ((f = (u = r.updateMany).buildHeaders) == null
										? void 0
										: f.call(u, a))) ?? {},
								d =
									(await ((l = (m = r.updateMany).buildQueryParams) == null
										? void 0
										: l.call(m, a))) ?? {},
								p = await r.updateMany.buildBodyParams(a),
								g = await o(y, {
									method: b,
									headers: v,
									searchParams: me.stringify(d, { encodeValuesOnly: !0 }),
									body: JSON.stringify(p)
								})
							if (g.ok) return { data: await r.updateMany.mapResponse(g, a) }
							let w
							throw (
								r.updateMany.transformError
									? (w = await r.updateMany.transformError(g, a))
									: (w = await g.json()),
								w
							)
						}
					: void 0,
				deleteOne: async (a) => {
					const i = r.deleteOne.getEndpoint(a),
						c = await r.deleteOne.buildHeaders(a),
						u = await r.deleteOne.buildQueryParams(a),
						f = await o(i, {
							method: 'delete',
							headers: c,
							searchParams: me.stringify(u, { encodeValuesOnly: !0 })
						})
					if (f.ok) return { data: await r.deleteOne.mapResponse(f, a) }
					throw await r.deleteOne.transformError(f, a)
				},
				deleteMany: r.deleteMany
					? async (a) => {
							var i, c, u, f, m, l
							const y =
									((c = (i = r.deleteMany).getEndpoint) == null
										? void 0
										: c.call(i, a)) ?? a.resource,
								b =
									(await ((f = (u = r.deleteMany).buildHeaders) == null
										? void 0
										: f.call(u, a))) ?? {},
								v =
									(await ((l = (m = r.deleteMany).buildQueryParams) == null
										? void 0
										: l.call(m, a))) ?? {},
								d = await o(y, {
									method: 'delete',
									headers: b,
									searchParams: me.stringify(v, { encodeValuesOnly: !0 })
								})
							return r.deleteMany.mapResponse
								? { data: await r.deleteMany.mapResponse(d, a) }
								: { data: void 0 }
						}
					: void 0,
				custom: async (a) => {
					const { method: i, url: c } = a
					let u = At.create({ method: i, ...n })
					const f = await r.custom.buildHeaders(a)
					f && (u = u.extend({ headers: f }))
					const m = await r.custom.buildQueryParams(a)
					if (
						(m &&
							(u = u.extend({
								searchParams: me.stringify(m, { encodeValuesOnly: !0 })
							})),
						['post', 'put', 'patch'].includes(i))
					) {
						const b = await r.custom.buildBodyParams(a)
						b && (u = u.extend({ body: JSON.stringify(b) }))
					}
					const l = await u(c)
					if (l.ok) return { data: await r.custom.mapResponse(l, a) }
					throw await r.custom.transformError(l, a)
				},
				getApiUrl: () => e
			}
		}
	}
export {
	co as A,
	Eo as B,
	Po as C,
	Ao as D,
	_o as E,
	xo as F,
	fr as G,
	Zr as H,
	Mo as I,
	Ro as J,
	Ln as Q,
	st as R,
	Z as a,
	ce as b,
	Jt as c,
	ve as d,
	rt as e,
	Or as f,
	Gn as g,
	Ae as h,
	wo as i,
	It as j,
	cn as k,
	Et as l,
	Co as m,
	ln as n,
	Vt as o,
	So as p,
	Dr as q,
	Lo as r,
	tr as s,
	qe as t,
	bt as u,
	rr as v,
	$o as w,
	ko as x,
	qo as y,
	dr as z
}
