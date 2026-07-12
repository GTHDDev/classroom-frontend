import { R as x, m as e, at as h } from './vendor_react-DuD2GJTP.js'
import { B as j, h as C } from './index-_sfPXony.js'
import { E as b } from './vendor_refine-BBcHqFYP.js'
import './breadcrumb-BtTtclC3.js'
const B = x.forwardRef(
	(
		{ resource: s, accessControl: t, meta: l, children: d, onClick: n, ...a },
		o
	) => {
		const {
				hidden: c,
				disabled: m,
				LinkComponent: f,
				to: u,
				label: p
			} = b({ resource: s, accessControl: t, meta: l }),
			r = m || a.disabled
		return c || a.hidden
			? null
			: e.jsx(j, {
					...a,
					ref: o,
					disabled: r,
					asChild: !0,
					children: e.jsx(f, {
						to: u,
						replace: !1,
						onClick: (i) => {
							if (r) {
								i.preventDefault()
								return
							}
							n && (i.preventDefault(), n(i))
						},
						children:
							d ??
							e.jsxs('div', {
								className: 'flex items-center gap-2 font-semibold',
								children: [
									e.jsx(h, { className: 'w-4 h-4' }),
									e.jsx('span', { children: p ?? 'Create' })
								]
							})
					})
				})
	}
)
B.displayName = 'CreateButton'
function N({ children: s, className: t }) {
	return e.jsx('div', {
		className: C('flex flex-col', 'gap-4', t),
		children: s
	})
}
N.displayName = 'ListView'
export { B as C, N as L }
