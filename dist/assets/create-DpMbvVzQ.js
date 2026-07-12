import { ay as b, az as C, m as s } from './vendor_react-DuD2GJTP.js'
import { aX as f, aY as N, a_ as v } from './vendor_rest-CKJ42Ze8.js'
import { G as y, k as I, z as F } from './vendor_refine-BBcHqFYP.js'
import { B as E } from './breadcrumb-BtTtclC3.js'
import {
	C as w,
	F as z,
	a as B,
	b as d,
	c as m,
	d as u,
	e as L
} from './form-DCG-GUZt.js'
import {
	S as x,
	C as V,
	a as T,
	b as q,
	c as G,
	I as k,
	B as A
} from './index-_sfPXony.js'
import { S as D, a as H, b as M, c as O, d as P } from './select-CDmhZWrE.js'
import './vendor_ui-DyYjmyB8.js'
const Q = N({ classId: v.number().min(1, 'Class is required') }),
	$ = () => {
		var i
		const h = b(),
			{
				mutateAsync: j,
				mutation: { isPending: n }
			} = y(),
			{ data: e } = I(),
			{ query: r } = F({ resource: 'classes', pagination: { pageSize: 100 } }),
			c = ((i = r.data) == null ? void 0 : i.data) ?? [],
			o = r.isLoading,
			t = C({ resolver: f(Q), defaultValues: { classId: 0 } }),
			g = t.watch('classId'),
			p = async (l) => {
				if (!(e != null && e.id)) return
				const a = await j({
					resource: 'enrollments',
					values: { classId: l.classId, studentId: e.id }
				})
				h('/enrollments/confirm', {
					state: { enrollment: a == null ? void 0 : a.data }
				})
			},
			S = n || o || !(e != null && e.id) || !c.length || !g
		return s.jsxs(w, {
			className: 'class-view',
			children: [
				s.jsx(E, {}),
				s.jsx('h1', { className: 'page-title', children: 'Enroll in a Class' }),
				s.jsx('div', {
					className: 'intro-row',
					children: s.jsx('p', {
						children: 'Select a class to enroll as the current user.'
					})
				}),
				s.jsx(x, {}),
				s.jsx('div', {
					className: 'my-4 flex items-center',
					children: s.jsxs(V, {
						className: 'class-form-card',
						children: [
							s.jsx(T, {
								className: 'relative z-10',
								children: s.jsx(q, {
									className: 'text-2xl pb-0 font-bold text-gradient-orange',
									children: 'Enrollment Form'
								})
							}),
							s.jsx(x, {}),
							s.jsx(G, {
								className: 'mt-7',
								children: s.jsx(z, {
									...t,
									children: s.jsxs('form', {
										onSubmit: t.handleSubmit(p),
										className: 'space-y-5',
										children: [
											s.jsx(B, {
												control: t.control,
												name: 'classId',
												render: ({ field: l }) =>
													s.jsxs(d, {
														children: [
															s.jsxs(m, {
																children: [
																	'Class ',
																	s.jsx('span', {
																		className: 'text-orange-600',
																		children: '*'
																	})
																]
															}),
															s.jsxs(D, {
																onValueChange: (a) => l.onChange(Number(a)),
																value: l.value ? String(l.value) : '',
																disabled: o,
																children: [
																	s.jsx(u, {
																		children: s.jsx(H, {
																			className: 'w-full',
																			children: s.jsx(M, {
																				placeholder: 'Select a class'
																			})
																		})
																	}),
																	s.jsx(O, {
																		children: c.map((a) =>
																			s.jsx(
																				P,
																				{
																					value: String(a.id),
																					children: a.name
																				},
																				a.id
																			)
																		)
																	})
																]
															}),
															s.jsx(L, {})
														]
													})
											}),
											s.jsxs(d, {
												children: [
													s.jsx(m, { children: 'Student' }),
													s.jsx(u, {
														children: s.jsx(k, {
															value:
																(e == null ? void 0 : e.email) ??
																'Not signed in',
															readOnly: !0
														})
													})
												]
											}),
											s.jsx(A, {
												type: 'submit',
												size: 'lg',
												disabled: S,
												children: n ? 'Enrolling...' : 'Enroll'
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
export { $ as default }
