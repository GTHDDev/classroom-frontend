import { ay as v, az as C, m as e } from './vendor_react-DuD2GJTP.js'
import { aX as p, aY as b, aZ as f } from './vendor_rest-CKJ42Ze8.js'
import { G as y, k as g } from './vendor_refine-BBcHqFYP.js'
import { B as N } from './breadcrumb-BtTtclC3.js'
import {
	C as F,
	F as I,
	a as S,
	b as o,
	c as r,
	d as l,
	e as w
} from './form-DCG-GUZt.js'
import {
	S as d,
	C as E,
	a as J,
	b as B,
	c as z,
	I as m,
	B as T
} from './index-_sfPXony.js'
import './vendor_ui-DyYjmyB8.js'
const G = b({ inviteCode: f().min(3, 'Invite code is required') }),
	M = () => {
		const c = v(),
			{
				mutateAsync: x,
				mutation: { isPending: n }
			} = y(),
			{ data: s } = g(),
			a = C({ resolver: p(G), defaultValues: { inviteCode: '' } }),
			j = a.watch('inviteCode'),
			h = async (i) => {
				if (!(s != null && s.id)) return
				const t = await x({
					resource: 'enrollments/join',
					values: { inviteCode: i.inviteCode, studentId: s.id }
				})
				c('/enrollments/confirm', {
					state: { enrollment: t == null ? void 0 : t.data }
				})
			},
			u = n || !(s != null && s.id) || !j
		return e.jsxs(F, {
			className: 'class-view',
			children: [
				e.jsx(N, {}),
				e.jsx('h1', {
					className: 'page-title',
					children: 'Join by Invite Code'
				}),
				e.jsx('div', {
					className: 'intro-row',
					children: e.jsx('p', {
						children: 'Enter the invite code provided by your instructor.'
					})
				}),
				e.jsx(d, {}),
				e.jsx('div', {
					className: 'my-4 flex items-center',
					children: e.jsxs(E, {
						className: 'class-form-card',
						children: [
							e.jsx(J, {
								className: 'relative z-10',
								children: e.jsx(B, {
									className: 'text-2xl pb-0 font-bold text-gradient-orange',
									children: 'Join Class'
								})
							}),
							e.jsx(d, {}),
							e.jsx(z, {
								className: 'mt-7',
								children: e.jsx(I, {
									...a,
									children: e.jsxs('form', {
										onSubmit: a.handleSubmit(h),
										className: 'space-y-5',
										children: [
											e.jsx(S, {
												control: a.control,
												name: 'inviteCode',
												render: ({ field: i }) =>
													e.jsxs(o, {
														children: [
															e.jsxs(r, {
																children: [
																	'Invite Code ',
																	e.jsx('span', {
																		className: 'text-orange-600',
																		children: '*'
																	})
																]
															}),
															e.jsx(l, {
																children: e.jsx(m, {
																	placeholder: 'Enter invite code',
																	...i
																})
															}),
															e.jsx(w, {})
														]
													})
											}),
											e.jsxs(o, {
												children: [
													e.jsx(r, { children: 'Student' }),
													e.jsx(l, {
														children: e.jsx(m, {
															value:
																(s == null ? void 0 : s.email) ??
																'Not signed in',
															readOnly: !0
														})
													})
												]
											}),
											e.jsx(T, {
												type: 'submit',
												size: 'lg',
												disabled: u,
												children: n ? 'Joining...' : 'Join Class'
											})
										]
									})
								})
							})
						]
					})
				})
			]
		})
	}
export { M as default }
