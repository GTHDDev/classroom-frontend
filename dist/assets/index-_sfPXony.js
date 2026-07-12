const __vite__mapDeps = (
	i,
	m = __vite__mapDeps,
	d = m.f ||
		(m.f = [
			'assets/Dashboard-_Qjl8Sw7.js',
			'assets/vendor_react-DuD2GJTP.js',
			'assets/vendor_rest-CKJ42Ze8.js',
			'assets/vendor_refine-BBcHqFYP.js',
			'assets/vendor_ui-DyYjmyB8.js',
			'assets/badge-CNMNvHZ7.js',
			'assets/List-OImPfy2f.js',
			'assets/select-CDmhZWrE.js',
			'assets/list-view-Ch2JzEfM.js',
			'assets/breadcrumb-BtTtclC3.js',
			'assets/show-OWSn2mOT.js',
			'assets/Create-B8pCP8Tp.js',
			'assets/form-DCG-GUZt.js',
			'assets/textarea-B37M2T0V.js',
			'assets/show-BcVFcuyU.js',
			'assets/show-view-CuToJDuQ.js',
			'assets/list-DxsziP3O.js',
			'assets/create-BtKm5Z9_.js',
			'assets/show-DDuukWkj.js',
			'assets/list-DSPAzxRS.js',
			'assets/create-prLOcWmE.js',
			'assets/show-DkIwKfi9.js',
			'assets/list-BFVFYt_8.js',
			'assets/show-R0ENOHIw.js',
			'assets/create-DpMbvVzQ.js',
			'assets/join-D8ISP3XZ.js',
			'assets/confirm-KQwZRCoO.js'
		])
) => i.map((i) => d[i])
import {
	f as c,
	m as e,
	S as be,
	R as V,
	n as je,
	o as ve,
	p as we,
	q as ye,
	M as Ce,
	t as Ne,
	v as Se,
	T as _e,
	P as Ee,
	C as ke,
	I as Pe,
	w as Ie,
	D as Le,
	x as Te,
	y as De,
	X as Re,
	z as Ae,
	B as Oe,
	E as ze,
	F as Ue,
	G as Me,
	H as Be,
	L as He,
	J as Fe,
	K as $e,
	N as Ve,
	O as We,
	U as qe,
	V as W,
	W as Ge,
	Y as Ke,
	Z as Je,
	_ as Ze,
	$ as Xe,
	a0 as Ye,
	a1 as Qe,
	a2 as et,
	a3 as tt,
	a4 as st,
	a5 as at,
	a6 as rt,
	a7 as x,
	a8 as nt,
	a9 as B,
	aa as ot,
	ab as it,
	ac as lt,
	ad as dt,
	ae as ct,
	af as ut,
	ag as mt,
	ah as xt
} from './vendor_react-DuD2GJTP.js'
import {
	b as ft,
	k as pt,
	l as k,
	n as ht,
	o as gt,
	p as bt,
	q as P,
	r as jt,
	s as vt,
	t as wt,
	v as yt,
	w as Ct,
	D as Nt,
	x as St,
	A as H,
	y as _t
} from './vendor_refine-BBcHqFYP.js'
import {
	aT as Et,
	aU as kt,
	a1 as Pt,
	aV as It,
	aW as _
} from './vendor_rest-CKJ42Ze8.js'
import './vendor_ui-DyYjmyB8.js'
;(function () {
	const s = document.createElement('link').relList
	if (s && s.supports && s.supports('modulepreload')) return
	for (const o of document.querySelectorAll('link[rel="modulepreload"]')) n(o)
	new MutationObserver((o) => {
		for (const i of o)
			if (i.type === 'childList')
				for (const l of i.addedNodes)
					l.tagName === 'LINK' && l.rel === 'modulepreload' && n(l)
	}).observe(document, { childList: !0, subtree: !0 })
	function r(o) {
		const i = {}
		return (
			o.integrity && (i.integrity = o.integrity),
			o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
			o.crossOrigin === 'use-credentials'
				? (i.credentials = 'include')
				: o.crossOrigin === 'anonymous'
					? (i.credentials = 'omit')
					: (i.credentials = 'same-origin'),
			i
		)
	}
	function n(o) {
		if (o.ep) return
		o.ep = !0
		const i = r(o)
		fetch(o.href, i)
	}
})()
const Lt = 'modulepreload',
	Tt = function (t) {
		return '/' + t
	},
	F = {},
	p = function (s, r, n) {
		let o = Promise.resolve()
		if (r && r.length > 0) {
			let l = function (u) {
				return Promise.all(
					u.map((g) =>
						Promise.resolve(g).then(
							(b) => ({ status: 'fulfilled', value: b }),
							(b) => ({ status: 'rejected', reason: b })
						)
					)
				)
			}
			document.getElementsByTagName('link')
			const d = document.querySelector('meta[property=csp-nonce]'),
				f =
					(d == null ? void 0 : d.nonce) ||
					(d == null ? void 0 : d.getAttribute('nonce'))
			o = l(
				r.map((u) => {
					if (((u = Tt(u)), u in F)) return
					F[u] = !0
					const g = u.endsWith('.css'),
						b = g ? '[rel="stylesheet"]' : ''
					if (document.querySelector(`link[href="${u}"]${b}`)) return
					const m = document.createElement('link')
					if (
						((m.rel = g ? 'stylesheet' : Lt),
						g || (m.as = 'script'),
						(m.crossOrigin = ''),
						(m.href = u),
						f && m.setAttribute('nonce', f),
						document.head.appendChild(m),
						g)
					)
						return new Promise((h, N) => {
							;(m.addEventListener('load', h),
								m.addEventListener('error', () =>
									N(new Error(`Unable to preload CSS for ${u}`))
								))
						})
				})
			)
		}
		function i(l) {
			const d = new Event('vite:preloadError', { cancelable: !0 })
			if (((d.payload = l), window.dispatchEvent(d), !d.defaultPrevented))
				throw l
		}
		return o.then((l) => {
			for (const d of l || []) d.status === 'rejected' && i(d.reason)
			return s().catch(i)
		})
	},
	Dt = { theme: 'system', setTheme: () => null },
	q = c.createContext(Dt)
function D({
	children: t,
	defaultTheme: s = 'system',
	storageKey: r = 'refine-ui-theme',
	...n
}) {
	const [o, i] = c.useState(() => localStorage.getItem(r) || s)
	c.useEffect(() => {
		const d = window.document.documentElement
		if ((d.classList.remove('light', 'dark'), o === 'system')) {
			const f = window.matchMedia('(prefers-color-scheme: dark)').matches
				? 'dark'
				: 'light'
			d.classList.add(f)
			return
		}
		d.classList.add(o)
	}, [o])
	const l = {
		theme: o,
		setTheme: (d) => {
			;(localStorage.setItem(r, d), i(d))
		}
	}
	return e.jsx(q.Provider, { ...n, value: l, children: t })
}
function G() {
	const t = c.useContext(q)
	return (
		t === void 0 &&
			console.error('useTheme must be used within a ThemeProvider'),
		t
	)
}
D.displayName = 'ThemeProvider'
function Rt({ ...t }) {
	const { theme: s = 'system' } = G()
	return e.jsx(Et, {
		theme: s,
		className: 'toaster group',
		style: {
			'--normal-bg': 'var(--popover)',
			'--normal-text': 'var(--popover-foreground)',
			'--normal-border': 'var(--border)'
		},
		...t
	})
}
function a(...t) {
	return kt(Pt(t))
}
const At = It(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
	{
		variants: {
			variant: {
				default:
					'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
				destructive:
					'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
				outline:
					'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
				secondary:
					'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
				ghost:
					'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
				link: 'text-primary underline-offset-4 hover:underline'
			},
			size: {
				default: 'h-9 px-4 py-2 has-[>svg]:px-3',
				sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
				lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
				icon: 'size-9'
			}
		},
		defaultVariants: { variant: 'default', size: 'default' }
	}
)
function v({ className: t, variant: s, size: r, asChild: n = !1, ...o }) {
	const i = n ? be : 'button'
	return e.jsx(i, {
		'data-slot': 'button',
		className: a(At({ variant: s, size: r, className: t })),
		...o
	})
}
function K({
	message: t,
	description: s,
	undoableTimeout: r = 5,
	cancelMutation: n,
	onClose: o
}) {
	const i = ft()
	V.useEffect(() => {
		const d = setTimeout(() => {
			o == null || o()
		}, r * 1e3)
		return () => clearTimeout(d)
	}, [o, r])
	const l = () => {
		;(n == null || n(), o == null || o())
	}
	return e.jsx('div', {
		className: a(
			'bg-card',
			'text-card-foreground',
			'rounded-lg',
			'p-4',
			'shadow-xl',
			'border',
			'border-border',
			'min-w-[320px]',
			'max-w-md'
		),
		children: e.jsxs('div', {
			className: a('flex', 'items-center', 'justify-between'),
			children: [
				e.jsxs('div', {
					className: a('flex-1', 'mr-4'),
					children: [
						e.jsx('div', {
							className: a('font-medium', 'text-foreground', 'text-sm'),
							children: t
						}),
						s &&
							e.jsx('div', {
								className: a('text-muted-foreground', 'text-sm', 'mt-1'),
								children: s
							})
					]
				}),
				e.jsx(v, {
					variant: 'secondary',
					size: 'sm',
					onClick: l,
					className: a(
						'bg-secondary',
						'hover:bg-secondary/80',
						'text-secondary-foreground',
						'border-0',
						'px-4',
						'py-2',
						'text-sm',
						'font-medium',
						'rounded-md'
					),
					children: i('buttons.undo', 'Undo')
				})
			]
		})
	})
}
K.displayName = 'UndoableNotification'
function Ot() {
	return {
		open: ({
			key: t,
			type: s,
			message: r,
			description: n,
			undoableTimeout: o,
			cancelMutation: i
		}) => {
			switch (s) {
				case 'success':
					_.success(r, { id: t, description: n, richColors: !0 })
					return
				case 'error':
					_.error(r, { id: t, description: n, richColors: !0 })
					return
				case 'progress': {
					const l = t || Date.now()
					_(
						() =>
							e.jsx(K, {
								message: r,
								description: n,
								undoableTimeout: o,
								cancelMutation: i,
								onClose: () => _.dismiss(l)
							}),
						{ id: l, duration: (o || 5) * 1e3, unstyled: !0 }
					)
					return
				}
				default:
					return
			}
		},
		close: (t) => {
			_.dismiss(t)
		}
	}
}
function zt({ className: t, ...s }) {
	return e.jsx(je, {
		'data-slot': 'avatar',
		className: a(
			'relative flex size-8 shrink-0 overflow-hidden rounded-full',
			t
		),
		...s
	})
}
function Ut({ className: t, ...s }) {
	return e.jsx(ve, {
		'data-slot': 'avatar-image',
		className: a('aspect-square size-full', t),
		...s
	})
}
function Mt({ className: t, ...s }) {
	return e.jsx(we, {
		'data-slot': 'avatar-fallback',
		className: a(
			'bg-muted flex size-full items-center justify-center rounded-full',
			t
		),
		...s
	})
}
function Bt({ className: t, ...s }) {
	return e.jsx('div', {
		'data-slot': 'skeleton',
		className: a('bg-accent animate-pulse rounded-md', t),
		...s
	})
}
function J() {
	const { data: t, isLoading: s } = pt()
	if (s || !t)
		return e.jsx(Bt, { className: a('h-10', 'w-10', 'rounded-full') })
	const { fullName: r, avatar: n } = t
	return e.jsxs(zt, {
		className: a('h-10', 'w-10'),
		children: [
			n && e.jsx(Ut, { src: n, alt: r }),
			e.jsx(Mt, { children: Ht(r) })
		]
	})
}
const Ht = (t = '') => {
	const s = t.split(' ')
	let r = s[0].substring(0, 1).toUpperCase()
	return (
		s.length > 1 && (r += s[s.length - 1].substring(0, 1).toUpperCase()),
		r
	)
}
J.displayName = 'UserAvatar'
function R({ className: t }) {
	const { theme: s, setTheme: r } = G(),
		n = () => {
			switch (s) {
				case 'light':
					r('dark')
					break
				case 'dark':
					r('system')
					break
				case 'system':
					r('light')
					break
				default:
					r('light')
			}
		}
	return e.jsxs(v, {
		variant: 'outline',
		size: 'icon',
		onClick: n,
		className: a(
			'rounded-full',
			'border-sidebar-border',
			'bg-transparent',
			t,
			'h-10',
			'w-10'
		),
		children: [
			e.jsx(ye, {
				className: a(
					'h-[1.2rem]',
					'w-[1.2rem]',
					'rotate-0',
					'scale-100',
					'transition-all',
					'duration-200',
					{ '-rotate-90 scale-0': s === 'dark' || s === 'system' }
				)
			}),
			e.jsx(Ce, {
				className: a(
					'absolute',
					'h-[1.2rem]',
					'w-[1.2rem]',
					'rotate-90',
					'scale-0',
					'transition-all',
					'duration-200',
					{
						'rotate-0 scale-100': s === 'dark',
						'rotate-90 scale-0': s === 'light' || s === 'system'
					}
				)
			}),
			e.jsx(Ne, {
				className: a(
					'absolute',
					'h-[1.2rem]',
					'w-[1.2rem]',
					'rotate-0',
					'scale-0',
					'transition-all',
					'duration-200',
					{
						'scale-100': s === 'system',
						'scale-0': s === 'light' || s === 'dark'
					}
				)
			}),
			e.jsx('span', {
				className: 'sr-only',
				children: 'Toggle theme (Light → Dark → System)'
			})
		]
	})
}
R.displayName = 'ThemeToggle'
function Z({ ...t }) {
	return e.jsx(Se, { 'data-slot': 'dropdown-menu', ...t })
}
function X({ ...t }) {
	return e.jsx(_e, { 'data-slot': 'dropdown-menu-trigger', ...t })
}
function Y({ className: t, sideOffset: s = 4, ...r }) {
	return e.jsx(Ee, {
		children: e.jsx(ke, {
			'data-slot': 'dropdown-menu-content',
			sideOffset: s,
			className: a(
				'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
				t
			),
			...r
		})
	})
}
function Q({ className: t, inset: s, variant: r = 'default', ...n }) {
	return e.jsx(Pe, {
		'data-slot': 'dropdown-menu-item',
		'data-inset': s,
		'data-variant': r,
		className: a(
			"focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/20 data-[variant=destructive]:focus:text-destructive data-[variant=destructive]:*:[svg]:!text-destructive [&_svg:not([class*='text-'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[inset]:pl-8 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
			t
		),
		...n
	})
}
function A({ className: t, type: s, ...r }) {
	return e.jsx('input', {
		type: s,
		'data-slot': 'input',
		className: a(
			'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
			'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
			'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
			t
		),
		...r
	})
}
function C({
	className: t,
	orientation: s = 'horizontal',
	decorative: r = !0,
	...n
}) {
	return e.jsx(Ie, {
		'data-slot': 'separator',
		decorative: r,
		orientation: s,
		className: a(
			'bg-border shrink-0 data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px',
			t
		),
		...n
	})
}
function Ft({ ...t }) {
	return e.jsx(Le, { 'data-slot': 'sheet', ...t })
}
function $t({ ...t }) {
	return e.jsx(ze, { 'data-slot': 'sheet-portal', ...t })
}
function Vt({ className: t, ...s }) {
	return e.jsx(Ue, {
		'data-slot': 'sheet-overlay',
		className: a(
			'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
			t
		),
		...s
	})
}
function Wt({ className: t, children: s, side: r = 'right', ...n }) {
	return e.jsxs($t, {
		children: [
			e.jsx(Vt, {}),
			e.jsxs(Te, {
				'data-slot': 'sheet-content',
				className: a(
					'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out fixed z-50 flex flex-col gap-4 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500',
					r === 'right' &&
						'data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
					r === 'left' &&
						'data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
					r === 'top' &&
						'data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top inset-x-0 top-0 h-auto border-b',
					r === 'bottom' &&
						'data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom inset-x-0 bottom-0 h-auto border-t',
					t
				),
				...n,
				children: [
					s,
					e.jsxs(De, {
						className:
							'ring-offset-background focus:ring-ring data-[state=open]:bg-secondary absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none',
						children: [
							e.jsx(Re, { className: 'size-4' }),
							e.jsx('span', { className: 'sr-only', children: 'Close' })
						]
					})
				]
			})
		]
	})
}
function qt({ className: t, ...s }) {
	return e.jsx('div', {
		'data-slot': 'sheet-header',
		className: a('flex flex-col gap-1.5 p-4', t),
		...s
	})
}
function Gt({ className: t, ...s }) {
	return e.jsx(Ae, {
		'data-slot': 'sheet-title',
		className: a('text-foreground font-semibold', t),
		...s
	})
}
function Kt({ className: t, ...s }) {
	return e.jsx(Oe, {
		'data-slot': 'sheet-description',
		className: a('text-muted-foreground text-sm', t),
		...s
	})
}
function Jt({ delayDuration: t = 0, ...s }) {
	return e.jsx(Me, { 'data-slot': 'tooltip-provider', delayDuration: t, ...s })
}
const I = 768
function Zt() {
	const [t, s] = c.useState(void 0)
	return (
		c.useEffect(() => {
			const r = window.matchMedia(`(max-width: ${I - 1}px)`),
				n = () => {
					s(window.innerWidth < I)
				}
			return (
				r.addEventListener('change', n),
				s(window.innerWidth < I),
				() => r.removeEventListener('change', n)
			)
		}, []),
		!!t
	)
}
const Xt = 'sidebar_state',
	Yt = 3600 * 24 * 7,
	Qt = '16rem',
	es = '18rem',
	ts = '3rem',
	ss = 'b',
	ee = c.createContext(null)
function w() {
	const t = c.useContext(ee)
	if (!t) throw new Error('useSidebar must be used within a SidebarProvider.')
	return t
}
function as({
	defaultOpen: t = !0,
	open: s,
	onOpenChange: r,
	className: n,
	style: o,
	children: i,
	...l
}) {
	const d = Zt(),
		[f, u] = c.useState(!1),
		[g, b] = c.useState(t),
		m = s ?? g,
		h = c.useCallback(
			(j) => {
				const y = typeof j == 'function' ? j(m) : j
				;(r ? r(y) : b(y),
					(document.cookie = `${Xt}=${y}; path=/; max-age=${Yt}`))
			},
			[r, m]
		),
		N = c.useCallback(() => (d ? u((j) => !j) : h((j) => !j)), [d, h, u])
	c.useEffect(() => {
		const j = (y) => {
			y.key === ss && (y.metaKey || y.ctrlKey) && (y.preventDefault(), N())
		}
		return (
			window.addEventListener('keydown', j),
			() => window.removeEventListener('keydown', j)
		)
	}, [N])
	const M = m ? 'expanded' : 'collapsed',
		ge = c.useMemo(
			() => ({
				state: M,
				open: m,
				setOpen: h,
				isMobile: d,
				openMobile: f,
				setOpenMobile: u,
				toggleSidebar: N
			}),
			[M, m, h, d, f, u, N]
		)
	return e.jsx(ee.Provider, {
		value: ge,
		children: e.jsx(Jt, {
			delayDuration: 0,
			children: e.jsx('div', {
				'data-slot': 'sidebar-wrapper',
				style: { '--sidebar-width': Qt, '--sidebar-width-icon': ts, ...o },
				className: a(
					'group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full',
					n
				),
				...l,
				children: i
			})
		})
	})
}
function rs({
	side: t = 'left',
	variant: s = 'sidebar',
	collapsible: r = 'offcanvas',
	className: n,
	children: o,
	...i
}) {
	const { isMobile: l, state: d, openMobile: f, setOpenMobile: u } = w()
	return r === 'none'
		? e.jsx('div', {
				'data-slot': 'sidebar',
				className: a(
					'bg-sidebar text-sidebar-foreground flex h-full w-(--sidebar-width) flex-col',
					n
				),
				...i,
				children: o
			})
		: l
			? e.jsx(Ft, {
					open: f,
					onOpenChange: u,
					...i,
					children: e.jsxs(Wt, {
						'data-sidebar': 'sidebar',
						'data-slot': 'sidebar',
						'data-mobile': 'true',
						className:
							'bg-sidebar text-sidebar-foreground w-(--sidebar-width) p-0 [&>button]:hidden',
						style: { '--sidebar-width': es },
						side: t,
						children: [
							e.jsxs(qt, {
								className: 'sr-only',
								children: [
									e.jsx(Gt, { children: 'Sidebar' }),
									e.jsx(Kt, { children: 'Displays the mobile sidebar.' })
								]
							}),
							e.jsx('div', {
								className: 'flex h-full w-full flex-col',
								children: o
							})
						]
					})
				})
			: e.jsxs('div', {
					className: 'group peer text-sidebar-foreground hidden md:block',
					'data-state': d,
					'data-collapsible': d === 'collapsed' ? r : '',
					'data-variant': s,
					'data-side': t,
					'data-slot': 'sidebar',
					children: [
						e.jsx('div', {
							'data-slot': 'sidebar-gap',
							className: a(
								'relative w-(--sidebar-width) bg-transparent transition-[width] duration-200 ease-linear',
								'group-data-[collapsible=offcanvas]:w-0',
								'group-data-[side=right]:rotate-180',
								s === 'floating' || s === 'inset'
									? 'group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4)))]'
									: 'group-data-[collapsible=icon]:w-(--sidebar-width-icon)'
							)
						}),
						e.jsx('div', {
							'data-slot': 'sidebar-container',
							className: a(
								'fixed inset-y-0 z-10 hidden h-svh w-(--sidebar-width) transition-[left,right,width] duration-200 ease-linear md:flex',
								t === 'left'
									? 'left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]'
									: 'right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]',
								s === 'floating' || s === 'inset'
									? 'p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)+(--spacing(4))+2px)]'
									: 'group-data-[collapsible=icon]:w-(--sidebar-width-icon) group-data-[side=left]:border-r group-data-[side=right]:border-l',
								n
							),
							...i,
							children: e.jsx('div', {
								'data-sidebar': 'sidebar',
								'data-slot': 'sidebar-inner',
								className:
									'bg-sidebar group-data-[variant=floating]:border-sidebar-border flex h-full w-full flex-col group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:shadow-sm',
								children: o
							})
						})
					]
				})
}
function te({ className: t, onClick: s, ...r }) {
	const { toggleSidebar: n } = w()
	return e.jsxs(v, {
		'data-sidebar': 'trigger',
		'data-slot': 'sidebar-trigger',
		variant: 'ghost',
		size: 'icon',
		className: a('size-7', t),
		onClick: (o) => {
			;(s == null || s(o), n())
		},
		...r,
		children: [
			e.jsx(Be, {}),
			e.jsx('span', { className: 'sr-only', children: 'Toggle Sidebar' })
		]
	})
}
function ns({ className: t, ...s }) {
	const { toggleSidebar: r } = w()
	return e.jsx('button', {
		'data-sidebar': 'rail',
		'data-slot': 'sidebar-rail',
		'aria-label': 'Toggle Sidebar',
		tabIndex: -1,
		onClick: r,
		title: 'Toggle Sidebar',
		className: a(
			'hover:after:bg-sidebar-border absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear group-data-[side=left]:-right-4 group-data-[side=right]:left-0 after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] sm:flex',
			'in-data-[side=left]:cursor-w-resize in-data-[side=right]:cursor-e-resize',
			'[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize',
			'hover:group-data-[collapsible=offcanvas]:bg-sidebar group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full',
			'[[data-side=left][data-collapsible=offcanvas]_&]:-right-2',
			'[[data-side=right][data-collapsible=offcanvas]_&]:-left-2',
			t
		),
		...s
	})
}
function os({ className: t, ...s }) {
	return e.jsx('main', {
		'data-slot': 'sidebar-inset',
		className: a(
			'bg-background relative flex w-full flex-1 flex-col',
			'md:peer-data-[variant=inset]:m-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow-sm md:peer-data-[variant=inset]:peer-data-[state=collapsed]:ml-2',
			t
		),
		...s
	})
}
function is({ className: t, ...s }) {
	return e.jsx('div', {
		'data-slot': 'sidebar-header',
		'data-sidebar': 'header',
		className: a('flex flex-col gap-2 p-2', t),
		...s
	})
}
function ls({ className: t, ...s }) {
	return e.jsx('div', {
		'data-slot': 'sidebar-content',
		'data-sidebar': 'content',
		className: a(
			'flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden',
			t
		),
		...s
	})
}
const se = () => {
	const { isMobile: t } = w()
	return e.jsx(e.Fragment, { children: t ? e.jsx(re, {}) : e.jsx(ae, {}) })
}
function ae() {
	return e.jsxs('header', {
		className: a(
			'sticky',
			'top-0',
			'flex',
			'h-16',
			'shrink-0',
			'items-center',
			'gap-4',
			'border-b',
			'border-border',
			'bg-sidebar',
			'pr-3',
			'justify-end',
			'z-40'
		),
		children: [e.jsx(R, {}), e.jsx(ds, {})]
	})
}
function re() {
	const { open: t, isMobile: s } = w(),
		{ title: r } = k()
	return e.jsxs('header', {
		className: a(
			'sticky',
			'top-0',
			'flex',
			'h-12',
			'shrink-0',
			'items-center',
			'gap-2',
			'border-b',
			'border-border',
			'bg-sidebar',
			'pr-3',
			'justify-between',
			'z-40'
		),
		children: [
			e.jsx(te, {
				className: a('text-muted-foreground', 'rotate-180', 'ml-1', {
					'opacity-0': t,
					'opacity-100': !t || s,
					'pointer-events-auto': !t || s,
					'pointer-events-none': t && !s
				})
			}),
			e.jsxs('div', {
				className: a(
					'whitespace-nowrap',
					'flex',
					'flex-row',
					'h-full',
					'items-center',
					'justify-start',
					'gap-2',
					'transition-discrete',
					'duration-200',
					{ 'pl-3': !t, 'pl-5': t }
				),
				children: [
					e.jsx('div', { children: r.icon }),
					e.jsx('h2', {
						className: a(
							'text-sm',
							'font-bold',
							'transition-opacity',
							'duration-200',
							{ 'opacity-0': !t, 'opacity-100': t }
						),
						children: r.text
					})
				]
			}),
			e.jsx(R, { className: a('h-8', 'w-8') })
		]
	})
}
const ds = () => {
	const { mutate: t, isPending: s } = ht(),
		r = gt()
	return r != null && r.getIdentity
		? e.jsxs(Z, {
				children: [
					e.jsx(X, { children: e.jsx(J, {}) }),
					e.jsx(Y, {
						align: 'end',
						children: e.jsxs(Q, {
							onClick: () => {
								t()
							},
							children: [
								e.jsx(He, {
									className: a('text-destructive', 'hover:text-destructive')
								}),
								e.jsx('span', {
									className: a('text-destructive', 'hover:text-destructive'),
									children: s ? 'Logging out...' : 'Logout'
								})
							]
						})
					})
				]
			})
		: null
}
se.displayName = 'Header'
re.displayName = 'MobileHeader'
ae.displayName = 'DesktopHeader'
function cs({ ...t }) {
	return e.jsx(Fe, { 'data-slot': 'collapsible', ...t })
}
function us({ ...t }) {
	return e.jsx($e, { 'data-slot': 'collapsible-trigger', ...t })
}
function ms({ ...t }) {
	return e.jsx(Ve, { 'data-slot': 'collapsible-content', ...t })
}
function ne() {
	const { open: t } = w(),
		{ menuItems: s, selectedKey: r } = bt()
	return e.jsxs(rs, {
		collapsible: 'icon',
		className: a('border-none'),
		children: [
			e.jsx(ns, {}),
			e.jsx(gs, {}),
			e.jsx(ls, {
				className: a(
					'transition-discrete',
					'duration-200',
					'flex',
					'flex-col',
					'gap-2',
					'pt-2',
					'pb-2',
					'border-r',
					'border-border',
					{ 'px-3': t, 'px-1': !t }
				),
				children: s.map((n) =>
					e.jsx(O, { item: n, selectedKey: r }, n.key || n.name)
				)
			})
		]
	})
}
function O({ item: t, selectedKey: s }) {
	var n
	const { open: r } = w()
	return (n = t.meta) != null && n.group
		? e.jsx(xs, { item: t, selectedKey: s })
		: t.children && t.children.length > 0
			? r
				? e.jsx(fs, { item: t, selectedKey: s })
				: e.jsx(ps, { item: t, selectedKey: s })
			: e.jsx(hs, { item: t, selectedKey: s })
}
function xs({ item: t, selectedKey: s }) {
	const { children: r } = t,
		{ open: n } = w()
	return e.jsxs('div', {
		className: a('border-t', 'border-sidebar-border', 'pt-4'),
		children: [
			e.jsx('span', {
				className: a(
					'ml-3',
					'block',
					'text-xs',
					'font-semibold',
					'uppercase',
					'text-muted-foreground',
					'transition-all',
					'duration-200',
					{
						'h-8': n,
						'h-0': !n,
						'opacity-0': !n,
						'opacity-100': n,
						'pointer-events-none': !n,
						'pointer-events-auto': n
					}
				),
				children: z(t)
			}),
			r &&
				r.length > 0 &&
				e.jsx('div', {
					className: a('flex', 'flex-col'),
					children: r.map((o) =>
						e.jsx(O, { item: o, selectedKey: s }, o.key || o.name)
					)
				})
		]
	})
}
function fs({ item: t, selectedKey: s }) {
	const { name: r, children: n } = t,
		o = e.jsx(We, {
			className: a(
				'h-4',
				'w-4',
				'shrink-0',
				'text-muted-foreground',
				'transition-transform',
				'duration-200',
				'group-data-[state=open]:rotate-90'
			)
		})
	return e.jsxs(
		cs,
		{
			className: a('w-full', 'group'),
			children: [
				e.jsx(us, {
					asChild: !0,
					children: e.jsx(U, { item: t, rightIcon: o })
				}),
				e.jsx(ms, {
					className: a('ml-6', 'flex', 'flex-col', 'gap-2'),
					children:
						n == null
							? void 0
							: n.map((i) =>
									e.jsx(O, { item: i, selectedKey: s }, i.key || i.name)
								)
				})
			]
		},
		`collapsible-${r}`
	)
}
function ps({ item: t, selectedKey: s }) {
	const { children: r } = t,
		n = P()
	return e.jsxs(Z, {
		children: [
			e.jsx(X, { asChild: !0, children: e.jsx(U, { item: t }) }),
			e.jsx(Y, {
				side: 'right',
				align: 'start',
				children:
					r == null
						? void 0
						: r.map((o) => {
								var d
								const { key: i } = o,
									l = i === s
								return e.jsx(
									Q,
									{
										asChild: !0,
										children: e.jsxs(n, {
											to: o.route || '',
											className: a('flex w-full items-center gap-2', {
												'bg-accent text-accent-foreground': l
											}),
											children: [
												e.jsx(oe, {
													icon:
														((d = o.meta) == null ? void 0 : d.icon) ?? o.icon,
													isSelected: l
												}),
												e.jsx('span', { children: z(o) })
											]
										})
									},
									i || o.name
								)
							})
			})
		]
	})
}
function hs({ item: t, selectedKey: s }) {
	const r = t.key === s
	return e.jsx(U, { item: t, isSelected: r, asLink: !0 })
}
function gs() {
	const { title: t } = k(),
		{ open: s, isMobile: r } = w()
	return e.jsxs(is, {
		className: a(
			'p-0',
			'h-16',
			'border-b',
			'border-border',
			'flex-row',
			'items-center',
			'justify-between',
			'overflow-hidden'
		),
		children: [
			e.jsxs('div', {
				className: a(
					'whitespace-nowrap',
					'flex',
					'flex-row',
					'h-full',
					'items-center',
					'justify-start',
					'gap-2',
					'transition-discrete',
					'duration-200',
					{ 'pl-3': !s, 'pl-5': s }
				),
				children: [
					e.jsx('div', { children: t.icon }),
					e.jsx('h2', {
						className: a(
							'text-sm',
							'font-bold',
							'transition-opacity',
							'duration-200',
							{ 'opacity-0': !s, 'opacity-100': s }
						),
						children: t.text
					})
				]
			}),
			e.jsx(te, {
				className: a('text-muted-foreground', 'mr-1.5', {
					'opacity-0': !s,
					'opacity-100': s || r,
					'pointer-events-auto': s || r,
					'pointer-events-none': !s && !r
				})
			})
		]
	})
}
function z(t) {
	var s
	return ((s = t.meta) == null ? void 0 : s.label) ?? t.label ?? t.name
}
function oe({ icon: t, isSelected: s }) {
	return e.jsx('div', {
		className: a('w-4', {
			'text-muted-foreground': !s,
			'text-sidebar-primary-foreground': s
		}),
		children: t ?? e.jsx(qe, {})
	})
}
function U({
	item: t,
	isSelected: s = !1,
	rightIcon: r,
	asLink: n = !1,
	className: o,
	onClick: i,
	...l
}) {
	var u
	const d = P(),
		f = e.jsxs(e.Fragment, {
			children: [
				e.jsx(oe, {
					icon: ((u = t.meta) == null ? void 0 : u.icon) ?? t.icon,
					isSelected: s
				}),
				e.jsx('span', {
					className: a('tracking-[-0.00875rem]', {
						'flex-1': r,
						'text-left': r,
						'line-clamp-1': !r,
						truncate: !r,
						'font-normal': !s,
						'font-semibold': s,
						'text-sidebar-primary-foreground': s,
						'text-foreground': !s
					}),
					children: z(t)
				}),
				r
			]
		})
	return e.jsx(v, {
		asChild: !!(n && t.route),
		variant: 'ghost',
		size: 'lg',
		className: a(
			'flex w-full items-center justify-start gap-2 py-2 !px-3 text-sm',
			{
				'bg-sidebar-primary': s,
				'hover:!bg-sidebar-primary/90': s,
				'text-sidebar-primary-foreground': s,
				'hover:text-sidebar-primary-foreground': s
			},
			o
		),
		onClick: i,
		...l,
		children:
			n && t.route
				? e.jsx(d, {
						to: t.route,
						className: a('flex w-full items-center gap-2'),
						children: f
					})
				: f
	})
}
ne.displayName = 'Sidebar'
function ie({ children: t }) {
	return e.jsx(D, {
		children: e.jsxs(as, {
			children: [
				e.jsx(ne, {}),
				e.jsxs(os, {
					children: [
						e.jsx(se, {}),
						e.jsx('main', {
							className: a(
								'@container/main',
								'container',
								'mx-auto',
								'relative',
								'w-full',
								'flex',
								'flex-col',
								'flex-1',
								'px-2',
								'pt-4',
								'md:p-4',
								'lg:px-6',
								'lg:pt-6'
							),
							children: t
						})
					]
				})
			]
		})
	})
}
ie.displayName = 'Layout'
const T = { STUDENT: 'student', TEACHER: 'teacher', ADMIN: 'admin' }
;(T.STUDENT, W, T.TEACHER, Ge)
const bs = [
		'Computer Science',
		'Mathematics',
		'Physics',
		'Chemistry',
		'Biology',
		'English',
		'History',
		'Geography',
		'Economics',
		'Business Administration',
		'Engineering',
		'Psychology',
		'Sociology',
		'Political Science',
		'Philosophy',
		'Education',
		'Fine Arts',
		'Music',
		'Physical Education',
		'Law'
	],
	qs = bs.map((t) => ({ value: t, label: t })),
	Gs = 'odlx3o8u',
	le = 'https://classroom-backend-production-72eb.up.railway.app/api/',
	Ks = 'classroom_app',
	js = {
		getList: {
			getEndpoint: ({ resource: t }) => t,
			buildQueryParams: async ({ resource: t, pagination: s, filters: r }) => {
				const n = {}
				if ((s == null ? void 0 : s.mode) !== 'off') {
					const o = (s == null ? void 0 : s.currentPage) ?? 1,
						i = (s == null ? void 0 : s.pageSize) ?? 10
					;((n.page = o), (n.limit = i))
				}
				return (
					r == null ||
						r.forEach((o) => {
							const i = 'field' in o ? o.field : '',
								l = String(o.value)
							;(i === 'role' && (n.role = l),
								t === 'departments' &&
									(i === 'name' || i === 'code') &&
									(n.search = l),
								t === 'users' &&
									(i === 'search' || i === 'name' || i === 'email') &&
									(n.search = l),
								t === 'subjects' &&
									(i === 'department' && (n.department = l),
									(i === 'name' || i === 'code') && (n.search = l)),
								t === 'classes' &&
									(i === 'name' && (n.search = l),
									i === 'subject' && (n.subject = l),
									i === 'teacher' && (n.teacher = l)))
						}),
					n
				)
			},
			mapResponse: async (t) => (await t.json()).data ?? [],
			getTotalCount: async (t) => {
				var r, n
				const s = await t.json()
				return (
					((r = s.pagination) == null ? void 0 : r.total) ??
					((n = s.data) == null ? void 0 : n.length) ??
					0
				)
			}
		},
		create: {
			getEndpoint: ({ resource: t }) => t,
			buildBodyParams: async ({ variables: t }) => t,
			mapResponse: async (t) => (await t.json()).data ?? {}
		},
		getOne: {
			getEndpoint: ({ resource: t, id: s }) => `${t}/${s}`,
			mapResponse: async (t) => (await t.json()).data ?? {}
		}
	},
	{ dataProvider: vs } = jt(le, js),
	L = Ke({
		baseURL: `${le}auth`,
		user: {
			additionalFields: {
				role: { type: T, required: !0, defaultValue: 'student', input: !0 },
				department: { type: 'string', required: !1, input: !0 },
				imageCldPubId: { type: 'string', required: !1, input: !0 }
			}
		}
	}),
	ws = {
		register: async ({
			email: t,
			password: s,
			name: r,
			role: n,
			image: o,
			imageCldPubId: i
		}) => {
			try {
				const { data: l, error: d } = await L.signUp.email({
					name: r,
					email: t,
					password: s,
					image: o,
					role: n,
					imageCldPubId: i
				})
				return d
					? {
							success: !1,
							error: {
								name: 'Registration failed',
								message:
									(d == null ? void 0 : d.message) ||
									'Unable to create account. Please try again.'
							}
						}
					: (localStorage.setItem('user', JSON.stringify(l.user)),
						{ success: !0, redirectTo: '/' })
			} catch (l) {
				return (
					console.error('Register error:', l),
					{
						success: !1,
						error: {
							name: 'Registration failed',
							message: 'Unable to create account. Please try again.'
						}
					}
				)
			}
		},
		login: async ({ email: t, password: s }) => {
			try {
				const { data: r, error: n } = await L.signIn.email({
					email: t,
					password: s
				})
				return n
					? (console.error('Login error from auth client:', n),
						{
							success: !1,
							error: {
								name: 'Login failed',
								message:
									(n == null ? void 0 : n.message) || 'Please try again later.'
							}
						})
					: (localStorage.setItem('user', JSON.stringify(r.user)),
						{ success: !0, redirectTo: '/' })
			} catch (r) {
				return (
					console.error('Login exception:', r),
					{
						success: !1,
						error: { name: 'Login failed', message: 'Please try again later.' }
					}
				)
			}
		},
		logout: async () => {
			const { error: t } = await L.signOut()
			return t
				? (console.error('Logout error:', t),
					{
						success: !1,
						error: {
							name: 'Logout failed',
							message: 'Unable to log out. Please try again.'
						}
					})
				: (localStorage.removeItem('user'),
					{ success: !0, redirectTo: '/login' })
		},
		onError: async (t) => {
			var s
			return ((s = t.response) == null ? void 0 : s.status) === 401
				? { logout: !0 }
				: { error: t }
		},
		check: async () =>
			localStorage.getItem('user')
				? { authenticated: !0 }
				: {
						authenticated: !1,
						logout: !0,
						redirectTo: '/login',
						error: { name: 'Unauthorized', message: 'Check failed' }
					},
		getPermissions: async () => {
			const t = localStorage.getItem('user')
			return t ? { role: JSON.parse(t).role } : null
		},
		getIdentity: async () => {
			const t = localStorage.getItem('user')
			if (!t) return null
			const s = JSON.parse(t)
			return {
				id: s.id,
				name: s.name,
				email: s.email,
				image: s.image,
				role: s.role,
				imageCldPubId: s.imageCldPubId
			}
		}
	},
	E = ({ className: t, ...s }) => {
		const [r, n] = c.useState(!1)
		return e.jsxs('div', {
			className: a('relative'),
			children: [
				e.jsx(A, { type: r ? 'text' : 'password', className: a(t), ...s }),
				e.jsx('button', {
					type: 'button',
					className: a(
						'appearance-none',
						'absolute right-3 top-1/2 -translate-y-1/2'
					),
					onClick: () => n(!r),
					children: r
						? e.jsx(Je, { size: 18, className: a('text-gray-500') })
						: e.jsx(Ze, { size: 18, className: a('text-gray-500') })
				})
			]
		})
	}
E.displayName = 'InputPassword'
function de({ className: t, ...s }) {
	return e.jsx('div', {
		'data-slot': 'card',
		className: a(
			'bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm',
			t
		),
		...s
	})
}
function ce({ className: t, ...s }) {
	return e.jsx('div', {
		'data-slot': 'card-header',
		className: a(
			'@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6',
			t
		),
		...s
	})
}
function ue({ className: t, ...s }) {
	return e.jsx('div', {
		'data-slot': 'card-title',
		className: a('leading-none font-semibold', t),
		...s
	})
}
function me({ className: t, ...s }) {
	return e.jsx('div', {
		'data-slot': 'card-description',
		className: a('text-muted-foreground text-sm', t),
		...s
	})
}
function xe({ className: t, ...s }) {
	return e.jsx('div', {
		'data-slot': 'card-content',
		className: a('px-6', t),
		...s
	})
}
function fe({ className: t, ...s }) {
	return e.jsx('div', {
		'data-slot': 'card-footer',
		className: a('flex items-center px-6 [.border-t]:pt-6', t),
		...s
	})
}
function ys({ className: t, ...s }) {
	return e.jsx(Xe, {
		'data-slot': 'checkbox',
		className: a(
			'peer border-input dark:bg-input/30 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground dark:data-[state=checked]:bg-primary data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive size-4 shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50',
			t
		),
		...s,
		children: e.jsx(Ye, {
			'data-slot': 'checkbox-indicator',
			className:
				'flex items-center justify-center text-current transition-none',
			children: e.jsx(Qe, { className: 'size-3.5' })
		})
	})
}
function S({ className: t, ...s }) {
	return e.jsx(et, {
		'data-slot': 'label',
		className: a(
			'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
			t
		),
		...s
	})
}
const pe = () => {
	const [t, s] = c.useState(!1),
		[r, n] = c.useState(''),
		[o, i] = c.useState(''),
		l = P(),
		{ title: d } = k(),
		{ mutate: f } = vt(),
		u = async (m) => {
			;(m.preventDefault(), f({ email: r, password: o }))
		},
		g = () => {
			f({ providerName: 'google' })
		},
		b = () => {
			f({ providerName: 'github' })
		}
	return e.jsxs('div', {
		className: a(
			'flex',
			'flex-col',
			'items-center',
			'justify-center',
			'px-6',
			'py-8',
			'min-h-svh'
		),
		children: [
			e.jsx('div', {
				className: a('flex', 'items-center', 'justify-center'),
				children:
					d.icon &&
					e.jsx('div', {
						className: a('text-foreground', '[&>svg]:w-12', '[&>svg]:h-12'),
						children: d.icon
					})
			}),
			e.jsxs(de, {
				className: a('sm:w-[456px]', 'p-12', 'mt-6'),
				children: [
					e.jsxs(ce, {
						className: a('px-0'),
						children: [
							e.jsx(ue, {
								className: a(
									'text-blue-600',
									'dark:text-blue-400',
									'text-3xl',
									'font-semibold'
								),
								children: 'Sign in'
							}),
							e.jsx(me, {
								className: a('text-muted-foreground', 'font-medium'),
								children: 'Welcome back'
							})
						]
					}),
					e.jsx(C, {}),
					e.jsx(xe, {
						className: a('px-0'),
						children: e.jsxs('form', {
							onSubmit: u,
							children: [
								e.jsxs('div', {
									className: a('flex', 'flex-col', 'gap-2'),
									children: [
										e.jsx(S, { htmlFor: 'email', children: 'Email' }),
										e.jsx(A, {
											id: 'email',
											type: 'email',
											placeholder: '',
											required: !0,
											value: r,
											onChange: (m) => n(m.target.value)
										})
									]
								}),
								e.jsxs('div', {
									className: a('relative', 'flex', 'flex-col', 'gap-2', 'mt-6'),
									children: [
										e.jsx(S, { htmlFor: 'password', children: 'Password' }),
										e.jsx(E, {
											value: o,
											onChange: (m) => i(m.target.value),
											required: !0
										})
									]
								}),
								e.jsxs('div', {
									className: a(
										'flex items-center justify-between',
										'flex-wrap',
										'gap-2',
										'mt-4'
									),
									children: [
										e.jsxs('div', {
											className: a('flex items-center', 'space-x-2'),
											children: [
												e.jsx(ys, {
													id: 'remember',
													checked: t,
													onCheckedChange: (m) =>
														s(m === 'indeterminate' ? !1 : m)
												}),
												e.jsx(S, {
													htmlFor: 'remember',
													children: 'Remember me'
												})
											]
										}),
										e.jsxs(l, {
											to: '/forgot-password',
											className: a(
												'text-sm',
												'flex',
												'items-center',
												'gap-2',
												'text-primary hover:underline',
												'text-blue-600',
												'dark:text-blue-400'
											),
											children: [
												e.jsx('span', { children: 'Forgot password' }),
												e.jsx(tt, { className: a('w-4', 'h-4') })
											]
										})
									]
								}),
								e.jsx(v, {
									type: 'submit',
									size: 'lg',
									className: a('w-full', 'mt-6'),
									children: 'Sign in'
								}),
								e.jsxs('div', {
									className: a('flex', 'items-center', 'gap-4', 'mt-6'),
									children: [
										e.jsx(C, { className: a('flex-1') }),
										e.jsx('span', {
											className: a('text-sm', 'text-muted-foreground'),
											children: 'or'
										}),
										e.jsx(C, { className: a('flex-1') })
									]
								}),
								e.jsxs('div', {
									className: a('flex', 'flex-col', 'gap-4', 'mt-6'),
									children: [
										e.jsx('p', {
											className: a('text-sm', 'font-medium'),
											children: 'Sign in using'
										}),
										e.jsxs('div', {
											className: a('grid grid-cols-2', 'gap-6'),
											children: [
												e.jsxs(v, {
													variant: 'outline',
													className: a('flex', 'items-center', 'gap-2'),
													onClick: g,
													type: 'button',
													children: [
														e.jsx('svg', {
															width: '21',
															height: '20',
															viewBox: '0 0 21 20',
															fill: 'none',
															xmlns: 'http://www.w3.org/2000/svg',
															children: e.jsx('path', {
																d: 'M18.8375 8.63637C16.1151 8.63503 13.3926 8.6357 10.6702 8.63601C10.6705 9.76521 10.6688 10.8944 10.6708 12.0233C12.2475 12.0229 13.8242 12.0226 15.4005 12.0233C15.2178 13.1053 14.5747 14.0949 13.6628 14.704C13.0895 15.0895 12.4309 15.3397 11.7519 15.4586C11.0685 15.5752 10.3623 15.5902 9.68064 15.4522C8.9874 15.3138 8.32566 15.025 7.74838 14.6179C6.82531 13.9694 6.12086 13.0205 5.75916 11.9527C5.38931 10.8666 5.38659 9.65804 5.76085 8.57294C6.02053 7.80816 6.45275 7.10169 7.02054 6.52677C7.7209 5.80979 8.63145 5.29725 9.61248 5.08707C10.4525 4.90775 11.3383 4.94197 12.1607 5.19078C12.8597 5.40301 13.5041 5.78605 14.032 6.29013C14.5655 5.75959 15.0964 5.22602 15.629 4.6945C15.9083 4.4084 16.2019 4.13482 16.4724 3.84092C15.6636 3.09241 14.7154 2.49071 13.6794 2.11035C11.8143 1.42392 9.7108 1.40935 7.83312 2.05923C5.71711 2.78366 3.91535 4.36606 2.91636 6.36616C2.56856 7.05534 2.31463 7.79094 2.16209 8.54757C1.77834 10.4327 2.04582 12.4426 2.91533 14.1596C3.48044 15.2803 4.29063 16.2766 5.27339 17.0577C6.20055 17.797 7.28124 18.3431 8.42705 18.6479C9.87286 19.0357 11.4119 19.0269 12.8672 18.6957C14.1825 18.393 15.4269 17.7645 16.4205 16.8472C17.4707 15.882 18.2199 14.6105 18.6165 13.244C19.0491 11.7534 19.1088 10.1622 18.8375 8.63637Z',
																fill: 'currentColor'
															})
														}),
														e.jsx('div', { children: 'Google' })
													]
												}),
												e.jsxs(v, {
													variant: 'outline',
													className: a('flex', 'items-center', 'gap-2'),
													onClick: b,
													type: 'button',
													children: [
														e.jsx('svg', {
															width: '21',
															height: '20',
															viewBox: '0 0 21 20',
															fill: 'none',
															xmlns: 'http://www.w3.org/2000/svg',
															children: e.jsx('path', {
																fillRule: 'evenodd',
																clipRule: 'evenodd',
																d: 'M10.5 1.25C5.66797 1.25 1.75 5.26563 1.75 10.2227C1.75 14.1875 4.25781 17.5469 7.73438 18.7344C8.17188 18.8164 8.33203 18.5391 8.33203 18.3008C8.33203 18.0859 8.32422 17.5234 8.32031 16.7734C5.88672 17.3164 5.37109 15.5703 5.37109 15.5703C4.97266 14.5352 4.39844 14.2578 4.39844 14.2578C3.60547 13.6992 4.45703 13.7109 4.45703 13.7109C5.33594 13.7734 5.79688 14.6367 5.79688 14.6367C6.57812 16.0078 7.84375 15.6133 8.34375 15.3828C8.42188 14.8047 8.64844 14.4062 8.89844 14.1836C6.95703 13.957 4.91406 13.1875 4.91406 9.75C4.91406 8.76953 5.25391 7.96875 5.8125 7.34375C5.72266 7.11719 5.42188 6.20312 5.89844 4.96875C5.89844 4.96875 6.63281 4.72656 8.30469 5.88672C9.00391 5.6875 9.75 5.58984 10.4961 5.58594C11.2383 5.58984 11.9883 5.6875 12.6875 5.88672C14.3594 4.72656 15.0898 4.96875 15.0898 4.96875C15.5664 6.20312 15.2656 7.11719 15.1758 7.34375C15.7344 7.97266 16.0742 8.77344 16.0742 9.75C16.0742 13.1953 14.0273 13.9531 12.0781 14.1758C12.3906 14.4531 12.6719 15 12.6719 15.8359C12.6719 17.0352 12.6602 18.0039 12.6602 18.2969C12.6602 18.5352 12.8164 18.8164 13.2617 18.7266C16.7461 17.543 19.25 14.1836 19.25 10.2227C19.25 5.26563 15.332 1.25 10.5 1.25Z',
																fill: 'currentColor'
															})
														}),
														e.jsx('div', { children: 'GitHub' })
													]
												})
											]
										})
									]
								})
							]
						})
					}),
					e.jsx(C, {}),
					e.jsx(fe, {
						children: e.jsxs('div', {
							className: a('w-full', 'text-center text-sm'),
							children: [
								e.jsxs('span', {
									className: a('text-sm', 'text-muted-foreground'),
									children: ['No account?', ' ']
								}),
								e.jsx(l, {
									to: '/register',
									className: a(
										'text-green-600',
										'dark:text-green-400',
										'font-semibold',
										'underline'
									),
									children: 'Sign up'
								})
							]
						})
					})
				]
			})
		]
	})
}
pe.displayName = 'SignInForm'
const $ = () => e.jsx(pe, {}),
	he = () => {
		const [t, s] = c.useState(''),
			[r, n] = c.useState(''),
			[o, i] = c.useState(''),
			{ open: l } = wt(),
			d = P(),
			{ title: f } = k(),
			{ mutate: u } = yt(),
			g = async (h) => {
				if ((h.preventDefault(), r !== o)) {
					l == null ||
						l({
							type: 'error',
							message: "Passwords don't match",
							description:
								'Please make sure both password fields contain the same value.'
						})
					return
				}
				u({ email: t, password: r })
			},
			b = () => {
				u({ providerName: 'google' })
			},
			m = () => {
				u({ providerName: 'github' })
			}
		return e.jsxs('div', {
			className: a(
				'flex',
				'flex-col',
				'items-center',
				'justify-center',
				'px-6',
				'py-8',
				'min-h-svh'
			),
			children: [
				e.jsx('div', {
					className: a('flex', 'items-center', 'justify-center', 'gap-2'),
					children:
						f.icon &&
						e.jsx('div', {
							className: a('text-foreground', '[&>svg]:w-12', '[&>svg]:h-12'),
							children: f.icon
						})
				}),
				e.jsxs(de, {
					className: a('sm:w-[456px]', 'p-12', 'mt-6'),
					children: [
						e.jsxs(ce, {
							className: a('px-0'),
							children: [
								e.jsx(ue, {
									className: a(
										'text-green-600',
										'dark:text-green-400',
										'text-3xl',
										'font-semibold'
									),
									children: 'Sign up'
								}),
								e.jsx(me, {
									className: a('text-muted-foreground', 'font-medium'),
									children: 'Welcome to lorem ipsum dolor.'
								})
							]
						}),
						e.jsx(C, {}),
						e.jsx(xe, {
							className: a('px-0'),
							children: e.jsxs('form', {
								onSubmit: g,
								children: [
									e.jsxs('div', {
										className: a('flex', 'flex-col', 'gap-2'),
										children: [
											e.jsx(S, { htmlFor: 'email', children: 'Email' }),
											e.jsx(A, {
												id: 'email',
												type: 'email',
												placeholder: '',
												required: !0,
												value: t,
												onChange: (h) => s(h.target.value)
											})
										]
									}),
									e.jsxs('div', {
										className: a(
											'relative',
											'flex',
											'flex-col',
											'gap-2',
											'mt-6'
										),
										children: [
											e.jsx(S, { htmlFor: 'password', children: 'Password' }),
											e.jsx(E, {
												id: 'password',
												value: r,
												onChange: (h) => n(h.target.value),
												required: !0
											})
										]
									}),
									e.jsxs('div', {
										className: a(
											'relative',
											'flex',
											'flex-col',
											'gap-2',
											'mt-6'
										),
										children: [
											e.jsx(S, {
												htmlFor: 'confirmPassword',
												children: 'Confirm password'
											}),
											e.jsx(E, {
												id: 'confirmPassword',
												value: o,
												onChange: (h) => i(h.target.value),
												required: !0
											})
										]
									}),
									e.jsx(v, {
										type: 'submit',
										size: 'lg',
										className: a(
											'w-full',
											'mt-6',
											'bg-green-600',
											'hover:bg-green-700',
											'text-white'
										),
										children: 'Sign up'
									}),
									e.jsxs('div', {
										className: a('flex', 'items-center', 'gap-4', 'mt-6'),
										children: [
											e.jsx(C, { className: a('flex-1') }),
											e.jsx('span', {
												className: a('text-sm', 'text-muted-foreground'),
												children: 'or'
											}),
											e.jsx(C, { className: a('flex-1') })
										]
									}),
									e.jsx('div', {
										className: a('flex', 'flex-col', 'gap-4', 'mt-6'),
										children: e.jsxs('div', {
											className: a('grid grid-cols-2', 'gap-6'),
											children: [
												e.jsxs(v, {
													variant: 'outline',
													className: a('flex', 'items-center', 'gap-2'),
													onClick: b,
													type: 'button',
													children: [
														e.jsx('svg', {
															width: '21',
															height: '20',
															viewBox: '0 0 21 20',
															fill: 'none',
															xmlns: 'http://www.w3.org/2000/svg',
															children: e.jsx('path', {
																d: 'M18.8375 8.63637C16.1151 8.63503 13.3926 8.6357 10.6702 8.63601C10.6705 9.76521 10.6688 10.8944 10.6708 12.0233C12.2475 12.0229 13.8242 12.0226 15.4005 12.0233C15.2178 13.1053 14.5747 14.0949 13.6628 14.704C13.0895 15.0895 12.4309 15.3397 11.7519 15.4586C11.0685 15.5752 10.3623 15.5902 9.68064 15.4522C8.9874 15.3138 8.32566 15.025 7.74838 14.6179C6.82531 13.9694 6.12086 13.0205 5.75916 11.9527C5.38931 10.8666 5.38659 9.65804 5.76085 8.57294C6.02053 7.80816 6.45275 7.10169 7.02054 6.52677C7.7209 5.80979 8.63145 5.29725 9.61248 5.08707C10.4525 4.90775 11.3383 4.94197 12.1607 5.19078C12.8597 5.40301 13.5041 5.78605 14.032 6.29013C14.5655 5.75959 15.0964 5.22602 15.629 4.6945C15.9083 4.4084 16.2019 4.13482 16.4724 3.84092C15.6636 3.09241 14.7154 2.49071 13.6794 2.11035C11.8143 1.42392 9.7108 1.40935 7.83312 2.05923C5.71711 2.78366 3.91535 4.36606 2.91636 6.36616C2.56856 7.05534 2.31463 7.79094 2.16209 8.54757C1.77834 10.4327 2.04582 12.4426 2.91533 14.1596C3.48044 15.2803 4.29063 16.2766 5.27339 17.0577C6.20055 17.797 7.28124 18.3431 8.42705 18.6479C9.87286 19.0357 11.4119 19.0269 12.8672 18.6957C14.1825 18.393 15.4269 17.7645 16.4205 16.8472C17.4707 15.882 18.2199 14.6105 18.6165 13.244C19.0491 11.7534 19.1088 10.1622 18.8375 8.63637Z',
																fill: 'currentColor'
															})
														}),
														e.jsx('div', { children: 'Google' })
													]
												}),
												e.jsxs(v, {
													variant: 'outline',
													className: a('flex', 'items-center', 'gap-2'),
													onClick: m,
													type: 'button',
													children: [
														e.jsx('svg', {
															width: '21',
															height: '20',
															viewBox: '0 0 21 20',
															fill: 'none',
															xmlns: 'http://www.w3.org/2000/svg',
															children: e.jsx('path', {
																fillRule: 'evenodd',
																clipRule: 'evenodd',
																d: 'M10.5 1.25C5.66797 1.25 1.75 5.26563 1.75 10.2227C1.75 14.1875 4.25781 17.5469 7.73438 18.7344C8.17188 18.8164 8.33203 18.5391 8.33203 18.3008C8.33203 18.0859 8.32422 17.5234 8.32031 16.7734C5.88672 17.3164 5.37109 15.5703 5.37109 15.5703C4.97266 14.5352 4.39844 14.2578 4.39844 14.2578C3.60547 13.6992 4.45703 13.7109 4.45703 13.7109C5.33594 13.7734 5.79688 14.6367 5.79688 14.6367C6.57812 16.0078 7.84375 15.6133 8.34375 15.3828C8.42188 14.8047 8.64844 14.4062 8.89844 14.1836C6.95703 13.957 4.91406 13.1875 4.91406 9.75C4.91406 8.76953 5.25391 7.96875 5.8125 7.34375C5.72266 7.11719 5.42188 6.20312 5.89844 4.96875C5.89844 4.96875 6.63281 4.72656 8.30469 5.88672C9.00391 5.6875 9.75 5.58984 10.4961 5.58594C11.2383 5.58984 11.9883 5.6875 12.6875 5.88672C14.3594 4.72656 15.0898 4.96875 15.0898 4.96875C15.5664 6.20312 15.2656 7.11719 15.1758 7.34375C15.7344 7.97266 16.0742 8.77344 16.0742 9.75C16.0742 13.1953 14.0273 13.9531 12.0781 14.1758C12.3906 14.4531 12.6719 15 12.6719 15.8359C12.6719 17.0352 12.6602 18.0039 12.6602 18.2969C12.6602 18.5352 12.8164 18.8164 13.2617 18.7266C16.7461 17.543 19.25 14.1836 19.25 10.2227C19.25 5.26563 15.332 1.25 10.5 1.25Z',
																fill: 'currentColor'
															})
														}),
														e.jsx('div', { children: 'GitHub' })
													]
												})
											]
										})
									})
								]
							})
						}),
						e.jsx(C, {}),
						e.jsx(fe, {
							children: e.jsxs('div', {
								className: a('w-full', 'text-center text-sm'),
								children: [
									e.jsxs('span', {
										className: a('text-sm', 'text-muted-foreground'),
										children: ['Have an account?', ' ']
									}),
									e.jsx(d, {
										to: '/login',
										className: a(
											'text-blue-600',
											'dark:text-blue-400',
											'font-semibold',
											'underline'
										),
										children: 'Sign in'
									})
								]
							})
						})
					]
				})
			]
		})
	}
he.displayName = 'SignUpForm'
const Cs = () => e.jsx(he, {}),
	Ns = c.lazy(() =>
		p(
			() => import('./Dashboard-_Qjl8Sw7.js'),
			__vite__mapDeps([0, 1, 2, 3, 4, 5])
		)
	),
	Ss = c.lazy(() =>
		p(
			() => import('./List-OImPfy2f.js'),
			__vite__mapDeps([6, 1, 2, 3, 4, 7, 5, 8, 9, 10])
		)
	),
	_s = c.lazy(() =>
		p(
			() => import('./Create-B8pCP8Tp.js'),
			__vite__mapDeps([11, 1, 2, 3, 4, 12, 9, 13, 7])
		)
	),
	Es = c.lazy(() =>
		p(
			() => import('./show-BcVFcuyU.js'),
			__vite__mapDeps([14, 1, 2, 3, 4, 5, 10, 7, 15, 9])
		)
	),
	ks = c.lazy(() =>
		p(
			() => import('./list-DxsziP3O.js'),
			__vite__mapDeps([16, 1, 2, 3, 4, 8, 9, 7, 10, 5])
		)
	),
	Ps = c.lazy(() =>
		p(
			() => import('./create-BtKm5Z9_.js'),
			__vite__mapDeps([17, 1, 2, 3, 4, 12, 9, 7, 13])
		)
	),
	Is = c.lazy(() =>
		p(
			() => import('./show-DDuukWkj.js'),
			__vite__mapDeps([18, 1, 2, 3, 4, 10, 7, 15, 9, 5])
		)
	),
	Ls = c.lazy(() =>
		p(
			() => import('./list-DSPAzxRS.js'),
			__vite__mapDeps([19, 1, 2, 3, 4, 5, 8, 9, 10, 7])
		)
	),
	Ts = c.lazy(() =>
		p(
			() => import('./create-prLOcWmE.js'),
			__vite__mapDeps([20, 1, 2, 3, 4, 12, 9, 13])
		)
	),
	Ds = c.lazy(() =>
		p(
			() => import('./show-DkIwKfi9.js'),
			__vite__mapDeps([21, 1, 2, 3, 4, 5, 10, 7, 15, 9])
		)
	),
	Rs = c.lazy(() =>
		p(
			() => import('./list-BFVFYt_8.js'),
			__vite__mapDeps([22, 1, 2, 3, 4, 5, 8, 9, 10, 7])
		)
	),
	As = c.lazy(() =>
		p(
			() => import('./show-R0ENOHIw.js'),
			__vite__mapDeps([23, 1, 2, 3, 4, 5, 10, 7, 15, 9])
		)
	),
	Os = c.lazy(() =>
		p(
			() => import('./create-DpMbvVzQ.js'),
			__vite__mapDeps([24, 1, 2, 3, 4, 9, 12, 7])
		)
	),
	zs = c.lazy(() =>
		p(
			() => import('./join-D8ISP3XZ.js'),
			__vite__mapDeps([25, 1, 2, 3, 4, 9, 12])
		)
	),
	Us = c.lazy(() =>
		p(
			() => import('./confirm-KQwZRCoO.js'),
			__vite__mapDeps([26, 1, 2, 3, 4, 5, 15, 9])
		)
	)
function Ms() {
	return e.jsx(st, {
		children: e.jsx(Ct, {
			children: e.jsx(D, {
				children: e.jsx(Nt, {
					children: e.jsxs(St, {
						dataProvider: vs,
						authProvider: ws,
						notificationProvider: Ot(),
						routerProvider: at,
						options: {
							syncWithLocation: !0,
							warnWhenUnsavedChanges: !0,
							projectId: 'AIJwJa-6HALX1-eNJXj3'
						},
						resources: [
							{
								name: 'dashboard',
								list: '/',
								meta: { label: 'Home', icon: e.jsx(lt, {}) }
							},
							{
								name: 'subjects',
								list: '/subjects',
								create: '/subjects/create',
								show: '/subjects/show/:id',
								meta: { label: 'Subjects', icon: e.jsx(dt, {}) }
							},
							{
								name: 'departments',
								list: '/departments',
								show: '/departments/show/:id',
								create: '/departments/create',
								meta: { label: 'Departments', icon: e.jsx(ct, {}) }
							},
							{
								name: 'users',
								list: '/faculty',
								show: '/faculty/show/:id',
								meta: { label: 'Faculty', icon: e.jsx(ut, {}) }
							},
							{
								name: 'enrollments',
								list: '/enrollments/create',
								create: '/enrollments/create',
								meta: { label: 'Enrollments', icon: e.jsx(mt, {}) }
							},
							{
								name: 'classes',
								list: '/classes',
								create: '/classes/create',
								show: '/classes/show/:id',
								meta: { label: 'Classes', icon: e.jsx(W, {}) }
							}
						],
						children: [
							e.jsx(c.Suspense, {
								fallback: e.jsx('div', { children: 'Loading...' }),
								children: e.jsxs(rt, {
									children: [
										e.jsxs(x, {
											element: e.jsx(
												H,
												{
													fallback: e.jsx(B, {}),
													children: e.jsx(nt, { fallbackTo: '/' })
												},
												'public-routes'
											),
											children: [
												e.jsx(x, { path: '/login', element: e.jsx($, {}) }),
												e.jsx(x, { path: '/register', element: e.jsx(Cs, {}) })
											]
										}),
										e.jsxs(x, {
											element: e.jsx(
												H,
												{
													fallback: e.jsx($, {}),
													children: e.jsx(ie, { children: e.jsx(B, {}) })
												},
												'private-routes'
											),
											children: [
												e.jsx(x, { path: '/', element: e.jsx(Ns, {}) }),
												e.jsxs(x, {
													path: 'subjects',
													children: [
														e.jsx(x, { index: !0, element: e.jsx(Ss, {}) }),
														e.jsx(x, {
															path: 'create',
															element: e.jsx(_s, {})
														}),
														e.jsx(x, {
															path: 'show/:id',
															element: e.jsx(Es, {})
														})
													]
												}),
												e.jsxs(x, {
													path: 'departments',
													children: [
														e.jsx(x, { index: !0, element: e.jsx(Ls, {}) }),
														e.jsx(x, {
															path: 'create',
															element: e.jsx(Ts, {})
														}),
														e.jsx(x, {
															path: 'show/:id',
															element: e.jsx(Ds, {})
														})
													]
												}),
												e.jsxs(x, {
													path: 'faculty',
													children: [
														e.jsx(x, { index: !0, element: e.jsx(Rs, {}) }),
														e.jsx(x, {
															path: 'show/:id',
															element: e.jsx(As, {})
														})
													]
												}),
												e.jsxs(x, {
													path: 'enrollments',
													children: [
														e.jsx(x, {
															path: 'create',
															element: e.jsx(Os, {})
														}),
														e.jsx(x, { path: 'join', element: e.jsx(zs, {}) }),
														e.jsx(x, {
															path: 'confirm',
															element: e.jsx(Us, {})
														})
													]
												}),
												e.jsxs(x, {
													path: 'classes',
													children: [
														e.jsx(x, { index: !0, element: e.jsx(ks, {}) }),
														e.jsx(x, {
															path: 'create',
															element: e.jsx(Ps, {})
														}),
														e.jsx(x, {
															path: 'show/:id',
															element: e.jsx(Is, {})
														})
													]
												})
											]
										})
									]
								})
							}),
							e.jsx(Rt, {}),
							e.jsx(_t, {}),
							e.jsx(ot, {}),
							e.jsx(it, {})
						]
					})
				})
			})
		})
	})
}
const Bs = document.getElementById('root'),
	Hs = xt.createRoot(Bs)
Hs.render(e.jsx(V.StrictMode, { children: e.jsx(Ms, {}) }))
export {
	zt as A,
	v as B,
	de as C,
	qs as D,
	A as I,
	S as L,
	C as S,
	ce as a,
	ue as b,
	xe as c,
	Ut as d,
	Mt as e,
	Ks as f,
	Gs as g,
	a as h
}
