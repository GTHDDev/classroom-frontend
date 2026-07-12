import { m as e, O as b, f as l, ac as x } from './vendor_react-DuD2GJTP.js'
import { h as o } from './index-_sfPXony.js'
import { q as p, J as h, a as f, m as j } from './vendor_refine-BBcHqFYP.js'
function g({ ...r }) {
	return e.jsx('nav', {
		'aria-label': 'breadcrumb',
		'data-slot': 'breadcrumb',
		...r
	})
}
function k({ className: r, ...a }) {
	return e.jsx('ol', {
		'data-slot': 'breadcrumb-list',
		className: o(
			'text-muted-foreground flex flex-wrap items-center gap-1.5 text-sm break-words sm:gap-2.5',
			r
		),
		...a
	})
}
function B({ className: r, ...a }) {
	return e.jsx('li', {
		'data-slot': 'breadcrumb-item',
		className: o('inline-flex items-center gap-1.5', r),
		...a
	})
}
function y({ className: r, ...a }) {
	return e.jsx('span', {
		'data-slot': 'breadcrumb-page',
		role: 'link',
		'aria-disabled': 'true',
		'aria-current': 'page',
		className: o('text-foreground font-normal', r),
		...a
	})
}
function C({ children: r, className: a, ...c }) {
	return e.jsx('li', {
		'data-slot': 'breadcrumb-separator',
		role: 'presentation',
		'aria-hidden': 'true',
		className: o('[&>svg]:size-3.5', a),
		...c,
		children: r ?? e.jsx(b, {})
	})
}
function N() {
	const r = p(),
		{ breadcrumbs: a } = h(),
		{ resources: c } = f(),
		t = j('/', c),
		d = l.useMemo(() => {
			var n, i
			const s = []
			s.push({
				key: 'breadcrumb-item-home',
				href: t.matchedRoute ?? '/',
				Component: e.jsx(r, {
					to: t.matchedRoute ?? '/',
					children:
						((i =
							(n = t == null ? void 0 : t.resource) == null
								? void 0
								: n.meta) == null
							? void 0
							: i.icon) ?? e.jsx(x, { className: 'h-4 w-4' })
				})
			})
			for (const { label: m, href: u } of a)
				s.push({
					key: `breadcrumb-item-${m}`,
					href: u ?? '',
					Component: u
						? e.jsx(r, { to: u, children: m })
						: e.jsx('span', { children: m })
				})
			return s
		}, [a, r, t])
	return e.jsx(g, {
		children: e.jsx(k, {
			children: d.map((s, n) =>
				n === d.length - 1
					? e.jsx(y, { children: s.Component }, s.key)
					: e.jsxs(
							l.Fragment,
							{
								children: [
									e.jsx(B, { children: s.Component }, s.key),
									e.jsx(C, {})
								]
							},
							s.key
						)
			)
		})
	})
}
N.displayName = 'Breadcrumb'
export { N as B }
