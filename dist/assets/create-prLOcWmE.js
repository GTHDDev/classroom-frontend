import { am as C, m as e } from './vendor_react-DuD2GJTP.js'
import { aX as N, aY as g, aZ as a } from './vendor_rest-CKJ42Ze8.js'
import { B as F } from './vendor_refine-BBcHqFYP.js'
import {
	C as D,
	F as S,
	a as t,
	b as n,
	c,
	d as o,
	e as i
} from './form-DCG-GUZt.js'
import { B as y } from './breadcrumb-BtTtclC3.js'
import {
	B as d,
	S as x,
	C as B,
	a as v,
	b as w,
	c as T,
	I as p
} from './index-_sfPXony.js'
import { T as k } from './textarea-B37M2T0V.js'
import './vendor_ui-DyYjmyB8.js'
const I = g({
		code: a().min(2, 'Department code must be at least 2 characters'),
		name: a().min(3, 'Department name must be at least 3 characters'),
		description: a().min(
			5,
			'Department description must be at least 5 characters'
		)
	}),
	M = () => {
		const h = F(),
			m = C({
				resolver: N(I),
				refineCoreProps: { resource: 'departments', action: 'create' },
				defaultValues: { code: '', name: '', description: '' }
			}),
			{
				refineCore: { onFinish: j },
				handleSubmit: u,
				formState: { isSubmitting: l },
				control: r
			} = m,
			f = async (s) => {
				try {
					await j(s)
				} catch (b) {
					console.error('Error creating department:', b)
				}
			}
		return e.jsxs(D, {
			className: 'class-view',
			children: [
				e.jsx(y, {}),
				e.jsx('h1', {
					className: 'page-title',
					children: 'Create a Department'
				}),
				e.jsxs('div', {
					className: 'intro-row',
					children: [
						e.jsx('p', {
							children:
								'Provide the required information below to add a department.'
						}),
						e.jsx(d, { onClick: () => h(), children: 'Go Back' })
					]
				}),
				e.jsx(x, {}),
				e.jsx('div', {
					className: 'my-4 flex items-center',
					children: e.jsxs(B, {
						className: 'class-form-card',
						children: [
							e.jsx(v, {
								className: 'relative z-10',
								children: e.jsx(w, {
									className: 'text-2xl pb-0 font-bold text-gradient-orange',
									children: 'Fill out form'
								})
							}),
							e.jsx(x, {}),
							e.jsx(T, {
								className: 'mt-7',
								children: e.jsx(S, {
									...m,
									children: e.jsxs('form', {
										onSubmit: u(f),
										className: 'space-y-5',
										children: [
											e.jsx(t, {
												control: r,
												name: 'code',
												render: ({ field: s }) =>
													e.jsxs(n, {
														children: [
															e.jsxs(c, {
																children: [
																	'Department Code',
																	' ',
																	e.jsx('span', {
																		className: 'text-orange-600',
																		children: '*'
																	})
																]
															}),
															e.jsx(o, {
																children: e.jsx(p, { placeholder: 'CS', ...s })
															}),
															e.jsx(i, {})
														]
													})
											}),
											e.jsx(t, {
												control: r,
												name: 'name',
												render: ({ field: s }) =>
													e.jsxs(n, {
														children: [
															e.jsxs(c, {
																children: [
																	'Department Name',
																	' ',
																	e.jsx('span', {
																		className: 'text-orange-600',
																		children: '*'
																	})
																]
															}),
															e.jsx(o, {
																children: e.jsx(p, {
																	placeholder: 'Computer Science',
																	...s
																})
															}),
															e.jsx(i, {})
														]
													})
											}),
											e.jsx(t, {
												control: r,
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
															e.jsx(o, {
																children: e.jsx(k, {
																	placeholder:
																		'Describe the department focus...',
																	className: 'min-h-28',
																	...s
																})
															}),
															e.jsx(i, {})
														]
													})
											}),
											e.jsx(d, {
												type: 'submit',
												size: 'lg',
												disabled: l,
												children: l ? 'Creating...' : 'Create Department'
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
