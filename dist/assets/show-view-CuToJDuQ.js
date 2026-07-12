import {
	R as N,
	m as e,
	aT as w,
	aU as B,
	aV as R
} from './vendor_react-DuD2GJTP.js'
import { B as u, h as f, S as k } from './index-_sfPXony.js'
import {
	H as y,
	I as C,
	B as S,
	e as D,
	a as j
} from './vendor_refine-BBcHqFYP.js'
import { B as E } from './breadcrumb-BtTtclC3.js'
const b = N.forwardRef(
	(
		{
			resource: a,
			recordItemId: i,
			dataProviderName: o,
			meta: x,
			children: m,
			...t
		},
		s
	) => {
		const {
				onClick: l,
				loading: n,
				label: r
			} = y({ resource: a, id: i, dataProviderName: o }),
			c = t.disabled || n
		return e.jsx(u, {
			onClick: (d) => {
				if (c) {
					d.preventDefault()
					return
				}
				l()
			},
			...t,
			ref: s,
			disabled: c,
			children:
				m ??
				e.jsxs('div', {
					className: 'flex items-center gap-2',
					children: [
						e.jsx(w, { className: f('h-4 w-4', { 'animate-spin': n }) }),
						e.jsx('span', { children: r ?? 'Refresh' })
					]
				})
		})
	}
)
b.displayName = 'RefreshButton'
const v = N.forwardRef(
	(
		{
			resource: a,
			recordItemId: i,
			accessControl: o,
			meta: x,
			children: m,
			onClick: t,
			...s
		},
		l
	) => {
		const {
				hidden: n,
				disabled: r,
				LinkComponent: c,
				to: d,
				label: g
			} = C({ resource: a, id: i, accessControl: o, meta: x }),
			p = r || s.disabled
		return n || s.hidden
			? null
			: e.jsx(u, {
					...s,
					ref: l,
					disabled: p,
					asChild: !0,
					children: e.jsx(c, {
						to: d,
						replace: !1,
						onClick: (h) => {
							if (p) {
								h.preventDefault()
								return
							}
							t && (h.preventDefault(), t(h))
						},
						children:
							m ??
							e.jsxs('div', {
								className: 'flex items-center gap-2 font-semibold',
								children: [
									e.jsx(B, { className: 'h-4 w-4' }),
									e.jsx('span', { children: g })
								]
							})
					})
				})
	}
)
v.displayName = 'EditButton'
function H({ children: a, className: i }) {
	return e.jsx('div', {
		className: f('flex flex-col', 'gap-4', i),
		children: a
	})
}
const L = ({
	resource: a,
	title: i,
	wrapperClassName: o,
	headerClassName: x
}) => {
	var d
	const m = S(),
		t = D(),
		{ resource: s, identifier: l } = j({ resource: a }),
		{ id: n } = j(),
		r = (s == null ? void 0 : s.name) ?? l,
		c =
			i ??
			t(
				((d = s == null ? void 0 : s.meta) == null ? void 0 : d.label) ??
					l ??
					(s == null ? void 0 : s.name),
				'singular'
			)
	return e.jsxs('div', {
		className: f('flex flex-col', 'gap-4', o),
		children: [
			e.jsxs('div', {
				className: 'flex items-center relative gap-2',
				children: [
					e.jsx('div', {
						className: 'bg-background z-[2] pr-4',
						children: e.jsx(E, {})
					}),
					e.jsx(k, { className: f('absolute', 'left-0', 'right-0', 'z-[1]') })
				]
			}),
			e.jsxs('div', {
				className: f(
					'flex',
					'gap-1',
					'items-center',
					'justify-between',
					'-ml-2.5',
					x
				),
				children: [
					e.jsxs('div', {
						className: 'flex items-center gap-1',
						children: [
							e.jsx(u, {
								variant: 'ghost',
								size: 'icon',
								onClick: m,
								children: e.jsx(R, { className: 'h-4 w-4' })
							}),
							e.jsx('h2', { className: 'text-2xl font-bold', children: c })
						]
					}),
					e.jsxs('div', {
						className: 'flex items-center gap-2',
						children: [
							e.jsx(b, { variant: 'outline', recordItemId: n, resource: r }),
							e.jsx(v, { variant: 'outline', recordItemId: n, resource: r })
						]
					})
				]
			})
		]
	})
}
H.displayName = 'ShowView'
export { H as S, L as a }
