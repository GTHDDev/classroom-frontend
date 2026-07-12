import {
	m as s,
	aO as f,
	aP as u,
	f as n,
	S as x,
	aQ as F,
	aR as C
} from './vendor_react-DuD2GJTP.js'
import './breadcrumb-BtTtclC3.js'
import { h as i, L as I } from './index-_sfPXony.js'
function g({ children: e, className: t }) {
	return s.jsx('div', {
		className: i('flex flex-col', 'gap-4', t),
		children: e
	})
}
g.displayName = 'CreateView'
const p = f,
	c = n.createContext({}),
	b = ({ ...e }) =>
		s.jsx(c.Provider, {
			value: { name: e.name },
			children: s.jsx(u, { ...e })
		}),
	d = () => {
		const e = n.useContext(c),
			t = n.useContext(l),
			{ getFieldState: r } = F(),
			o = C({ name: e.name }),
			a = r(e.name, o)
		if (!e) throw new Error('useFormField should be used within <FormField>')
		const { id: m } = t
		return {
			id: m,
			name: e.name,
			formItemId: `${m}-form-item`,
			formDescriptionId: `${m}-form-item-description`,
			formMessageId: `${m}-form-item-message`,
			...a
		}
	},
	l = n.createContext({})
function S({ className: e, ...t }) {
	const r = n.useId()
	return s.jsx(l.Provider, {
		value: { id: r },
		children: s.jsx('div', {
			'data-slot': 'form-item',
			className: i('grid gap-2', e),
			...t
		})
	})
}
function $({ className: e, ...t }) {
	const { error: r, formItemId: o } = d()
	return s.jsx(I, {
		'data-slot': 'form-label',
		'data-error': !!r,
		className: i('data-[error=true]:text-destructive', e),
		htmlFor: o,
		...t
	})
}
function w({ ...e }) {
	const {
		error: t,
		formItemId: r,
		formDescriptionId: o,
		formMessageId: a
	} = d()
	return s.jsx(x, {
		'data-slot': 'form-control',
		id: r,
		'aria-describedby': t ? `${o} ${a}` : `${o}`,
		'aria-invalid': !!t,
		...e
	})
}
function N({ className: e, ...t }) {
	const { error: r, formMessageId: o } = d(),
		a = r ? String((r == null ? void 0 : r.message) ?? '') : t.children
	return a
		? s.jsx('p', {
				'data-slot': 'form-message',
				id: o,
				className: i('text-destructive text-sm', e),
				...t,
				children: a
			})
		: null
}
export { g as C, p as F, b as a, S as b, $ as c, w as d, N as e }
