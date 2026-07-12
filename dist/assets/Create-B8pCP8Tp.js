import { am as v, m as e } from './vendor_react-DuD2GJTP.js'
import { aX as F, aY as y, aZ as l, a_ as I } from './vendor_rest-CKJ42Ze8.js'
import { B, z as q } from './vendor_refine-BBcHqFYP.js'
import {
	C as w,
	F as D,
	a as t,
	b as n,
	c,
	d as i,
	e as o
} from './form-DCG-GUZt.js'
import { B as T } from './breadcrumb-BtTtclC3.js'
import {
	B as u,
	S as h,
	C as k,
	a as z,
	b as L,
	c as V,
	I as p
} from './index-_sfPXony.js'
import { T as _ } from './textarea-B37M2T0V.js'
import { S as P, a as E, b as G, c as H, d as M } from './select-CDmhZWrE.js'
import './vendor_ui-DyYjmyB8.js'
const Q = y({
		departmentId: I.number({
			required_error: 'Department is required',
			invalid_type_error: 'Department is required'
		}).min(1, 'Department is required'),
		name: l().min(3, 'Subject name must be at least 3 characters'),
		code: l().min(3, 'Subject code must be at least 3 characters'),
		description: l().min(5, 'Subject description must be at least 5 characters')
	}),
	W = () => {
		var x
		const b = B(),
			d = v({
				resolver: F(Q),
				refineCoreProps: { resource: 'subjects', action: 'create' },
				defaultValues: { departmentId: 0, name: '', code: '', description: '' }
			}),
			{
				refineCore: { onFinish: S },
				handleSubmit: g,
				formState: { isSubmitting: m },
				control: a
			} = d,
			{ query: j } = q({
				resource: 'departments',
				pagination: { pageSize: 100 }
			}),
			C = ((x = j.data) == null ? void 0 : x.data) ?? [],
			f = j.isLoading,
			N = async (s) => {
				try {
					await S(s)
				} catch (r) {
					console.error('Error creating subject:', r)
				}
			}
		return e.jsxs(w, {
			className: 'class-view',
			children: [
				e.jsx(T, {}),
				e.jsx('h1', { className: 'page-title', children: 'Create a Subject' }),
				e.jsxs('div', {
					className: 'intro-row',
					children: [
						e.jsx('p', {
							children:
								'Provide the required information below to add a subject.'
						}),
						e.jsx(u, { onClick: () => b(), children: 'Go Back' })
					]
				}),
				e.jsx(h, {}),
				e.jsx('div', {
					className: 'my-4 flex items-center',
					children: e.jsxs(k, {
						className: 'class-form-card',
						children: [
							e.jsx(z, {
								className: 'relative z-10',
								children: e.jsx(L, {
									className: 'text-2xl pb-0 font-bold text-gradient-orange',
									children: 'Fill out form'
								})
							}),
							e.jsx(h, {}),
							e.jsx(V, {
								className: 'mt-7',
								children: e.jsx(D, {
									...d,
									children: e.jsxs('form', {
										onSubmit: g(N),
										className: 'space-y-5',
										children: [
											e.jsx(t, {
												control: a,
												name: 'departmentId',
												render: ({ field: s }) =>
													e.jsxs(n, {
														children: [
															e.jsxs(c, {
																children: [
																	'Department ',
																	e.jsx('span', {
																		className: 'text-orange-600',
																		children: '*'
																	})
																]
															}),
															e.jsxs(P, {
																onValueChange: (r) => s.onChange(Number(r)),
																value: s.value ? String(s.value) : '',
																disabled: f,
																children: [
																	e.jsx(i, {
																		children: e.jsx(E, {
																			className: 'w-full',
																			children: e.jsx(G, {
																				placeholder: 'Select a department'
																			})
																		})
																	}),
																	e.jsx(H, {
																		children: C.map((r) =>
																			e.jsx(
																				M,
																				{
																					value: String(r.id),
																					children: r.name
																				},
																				r.id
																			)
																		)
																	})
																]
															}),
															e.jsx(o, {})
														]
													})
											}),
											e.jsx(t, {
												control: a,
												name: 'name',
												render: ({ field: s }) =>
													e.jsxs(n, {
														children: [
															e.jsxs(c, {
																children: [
																	'Subject Name ',
																	e.jsx('span', {
																		className: 'text-orange-600',
																		children: '*'
																	})
																]
															}),
															e.jsx(i, {
																children: e.jsx(p, {
																	placeholder: 'Intro to Programming',
																	...s
																})
															}),
															e.jsx(o, {})
														]
													})
											}),
											e.jsx(t, {
												control: a,
												name: 'code',
												render: ({ field: s }) =>
													e.jsxs(n, {
														children: [
															e.jsxs(c, {
																children: [
																	'Subject Code ',
																	e.jsx('span', {
																		className: 'text-orange-600',
																		children: '*'
																	})
																]
															}),
															e.jsx(i, {
																children: e.jsx(p, {
																	placeholder: 'CS101',
																	...s
																})
															}),
															e.jsx(o, {})
														]
													})
											}),
											e.jsx(t, {
												control: a,
												name: 'description',
												render: ({ field: s }) =>
													e.jsxs(n, {
														children: [
															e.jsxs(c, {
																children: [
																	'Description ',
																	e.jsx('span', {
																		className: 'text-orange-600',
																		children: '*'
																	})
																]
															}),
															e.jsx(i, {
																children: e.jsx(_, {
																	placeholder: 'Describe the subject focus...',
																	className: 'min-h-28',
																	...s
																})
															}),
															e.jsx(o, {})
														]
													})
											}),
											e.jsx(u, {
												type: 'submit',
												size: 'lg',
												disabled: m,
												children: m ? 'Creating...' : 'Create Subject'
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
export { W as default }
