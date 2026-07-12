import {
	f as o,
	m as e,
	ao as R,
	ap as O,
	am as W,
	aq as G
} from './vendor_react-DuD2GJTP.js'
import {
	aY as y,
	a$ as M,
	aZ as a,
	b0 as A,
	a_ as L,
	aX as Y
} from './vendor_rest-CKJ42Ze8.js'
import {
	B as U,
	f as Q,
	g as E,
	S as D,
	C as $,
	a as H,
	b as J,
	c as K,
	I as z
} from './index-_sfPXony.js'
import {
	C as X,
	F as Z,
	a as x,
	b as h,
	c as p,
	d as j,
	e as b
} from './form-DCG-GUZt.js'
import { S as T, a as k, b as B, c as F, d as _ } from './select-CDmhZWrE.js'
import { B as ee } from './breadcrumb-BtTtclC3.js'
import { T as se } from './textarea-B37M2T0V.js'
import { B as ae, z as V } from './vendor_refine-BBcHqFYP.js'
import './vendor_ui-DyYjmyB8.js'
y({
	name: a().min(2, 'Name must be at least 2 characters'),
	email: a().email('Invalid email address'),
	role: A(['admin', 'teacher', 'student'], {
		required_error: 'Please select a role'
	}),
	department: a(),
	image: a().optional(),
	imageCldPubId: a().optional()
})
y({
	name: a().min(3, 'Subject name must be at least 3 characters'),
	code: a().min(5, 'Subject code must be at least 5 characters'),
	description: a().min(5, 'Subject description must be at least 5 characters'),
	department: a().min(2, 'Subject department must be at least 2 characters')
})
const re = y({
		day: a().min(1, 'Day is required'),
		startTime: a().min(1, 'Start time is required'),
		endTime: a().min(1, 'End time is required')
	}),
	ne = y({
		name: a()
			.min(2, 'Class name must be at least 2 characters')
			.max(50, 'Class name must be at most 50 characters'),
		description: a({ required_error: 'Description is required' }).min(
			5,
			'Description must be at least 5 characters'
		),
		subjectId: L.number({
			required_error: 'Subject is required',
			invalid_type_error: 'Subject is required'
		}).min(1, 'Subject is required'),
		teacherId: a().min(1, 'Teacher is required'),
		capacity: L.number({
			required_error: 'Capacity is required',
			invalid_type_error: 'Capacity is required'
		}).min(1, 'Capacity must be at least 1'),
		status: A(['active', 'inactive']),
		bannerUrl: a({ required_error: 'Class banner is required' }).min(
			1,
			'Class banner is required'
		),
		bannerCldPubId: a({ required_error: 'Banner reference is required' }).min(
			1,
			'Banner reference is required'
		),
		inviteCode: a().optional(),
		schedules: M(re).optional()
	})
y({
	classId: L.number({
		required_error: 'Class ID is required',
		invalid_type_error: 'Class ID is required'
	}).min(1, 'Class ID is required'),
	studentId: a().min(1, 'Student ID is required')
})
function te({ value: g = null, onChange: l, disabled: S = !1 }) {
	const v = o.useRef(null),
		c = o.useRef(l),
		[u, i] = o.useState(g),
		[N, C] = o.useState(null),
		[I, f] = o.useState(!1)
	;(o.useEffect(() => {
		c.current = l
	}, [l]),
		o.useEffect(() => {
			;(i(g), g || C(null))
		}, [g]),
		o.useEffect(() => {
			if (typeof window > 'u') return
			const t = () =>
				!window.cloudinary || v.current
					? !1
					: ((v.current = window.cloudinary.createUploadWidget(
							{
								cloudName: E,
								uploadPreset: Q,
								multiple: !1,
								folder: 'uploads',
								maxFileSize: 5e6,
								clientAllowedFormats: ['png', 'jpg', 'jpeg']
							},
							(w, m) => {
								var s
								if (!w && m.event === 'success') {
									const n = {
										url: m.info.secure_url,
										publicId: m.info.public_id
									}
									;(i(n),
										C(m.info.delete_token ?? null),
										(s = c.current) == null || s.call(c, n))
								}
							}
						)),
						!0)
			if (t()) return
			const d = window.setInterval(() => {
				t() && window.clearInterval(d)
			}, 500)
			return () => window.clearInterval(d)
		}, []))
	const q = () => {
			var t
			S || (t = v.current) == null || t.open()
		},
		P = async () => {
			var t
			if (u) {
				f(!0)
				try {
					if (N) {
						const d = new URLSearchParams()
						;(d.append('token', N),
							await fetch(
								`https://api.cloudinary.com/v1_1/${E}/delete_by_token`,
								{ method: 'POST', body: d }
							))
					}
				} catch (d) {
					console.error('Failed to remove image from Cloudinary', d)
				} finally {
					;(i(null), C(null), (t = c.current) == null || t.call(c, null), f(!1))
				}
			}
		}
	return e.jsx('div', {
		className: 'space-y-2',
		children: u
			? e.jsxs('div', {
					className: 'upload-preview',
					children: [
						e.jsx('img', { src: u.url, alt: 'Uploaded file' }),
						e.jsx(U, {
							type: 'button',
							size: 'icon',
							variant: 'destructive',
							onClick: P,
							disabled: I || S,
							children: e.jsx(R, { className: 'size-4' })
						})
					]
				})
			: e.jsx('div', {
					className: 'upload-dropzone',
					role: 'button',
					tabIndex: 0,
					onClick: q,
					onKeyDown: (t) => {
						;(t.key === 'Enter' || t.key === ' ') && (t.preventDefault(), q())
					},
					children: e.jsxs('div', {
						className: 'upload-prompt',
						children: [
							e.jsx(O, { className: 'icon' }),
							e.jsxs('div', {
								children: [
									e.jsx('p', { children: 'Click to upload photo' }),
									e.jsx('p', { children: 'PNG, JPG up to 5MB' })
								]
							})
						]
					})
				})
	})
}
const pe = () => {
	var w, m
	const g = ae(),
		l = W({
			resolver: Y(ne),
			refineCoreProps: { resource: 'classes', action: 'create' },
			defaultValues: { status: 'active' }
		}),
		{
			refineCore: { onFinish: S },
			handleSubmit: v,
			formState: { isSubmitting: c, errors: u },
			control: i
		} = l,
		N = l.watch('bannerCldPubId'),
		C = async (s) => {
			try {
				await S(s)
			} catch (n) {
				console.error('Error creating class:', n)
			}
		},
		{ query: I } = V({ resource: 'subjects', pagination: { pageSize: 100 } }),
		{ query: f } = V({
			resource: 'users',
			filters: [{ field: 'role', operator: 'eq', value: 'teacher' }],
			pagination: { pageSize: 100 }
		}),
		q = ((w = f.data) == null ? void 0 : w.data) || [],
		P = f.isLoading,
		t = ((m = I.data) == null ? void 0 : m.data) || [],
		d = I.isLoading
	return e.jsxs(X, {
		className: 'class-view',
		children: [
			e.jsx(ee, {}),
			e.jsx('h1', { className: 'page-title', children: 'Create a Class' }),
			e.jsxs('div', {
				className: 'intro-row',
				children: [
					e.jsx('p', {
						children: 'Provide the required information below to add a class.'
					}),
					e.jsx(U, { onClick: () => g(), children: 'Go Back' })
				]
			}),
			e.jsx(D, {}),
			e.jsx('div', {
				className: 'my-4 flex items-center',
				children: e.jsxs($, {
					className: 'class-form-card',
					children: [
						e.jsx(H, {
							className: 'relative z-10',
							children: e.jsx(J, {
								className: 'text-2xl pb-0 font-bold text-gradient-orange',
								children: 'Fill out form'
							})
						}),
						e.jsx(D, {}),
						e.jsx(K, {
							className: 'mt-7',
							children: e.jsx(Z, {
								...l,
								children: e.jsxs('form', {
									onSubmit: v(C),
									className: 'space-y-5',
									children: [
										e.jsx(x, {
											control: i,
											name: 'bannerUrl',
											render: ({ field: s }) => {
												var n
												return e.jsxs(h, {
													children: [
														e.jsxs(p, {
															children: [
																'Banner Image ',
																e.jsx('span', {
																	className: 'text-orange-600',
																	children: '*'
																})
															]
														}),
														e.jsx(j, {
															children: e.jsx(te, {
																value: s.value
																	? { url: s.value, publicId: N ?? '' }
																	: null,
																onChange: (r) => {
																	r
																		? (s.onChange(r.url),
																			l.setValue('bannerCldPubId', r.publicId, {
																				shouldValidate: !0,
																				shouldDirty: !0
																			}))
																		: (s.onChange(''),
																			l.setValue('bannerCldPubId', '', {
																				shouldValidate: !0,
																				shouldDirty: !0
																			}))
																}
															})
														}),
														e.jsx(b, {}),
														u.bannerCldPubId &&
															!u.bannerUrl &&
															e.jsx('p', {
																className: 'text-destructive text-sm',
																children:
																	(n = u.bannerCldPubId.message) == null
																		? void 0
																		: n.toString()
															})
													]
												})
											}
										}),
										e.jsx(x, {
											control: i,
											name: 'name',
											render: ({ field: s }) =>
												e.jsxs(h, {
													children: [
														e.jsxs(p, {
															children: [
																'Class Name ',
																e.jsx('span', {
																	className: 'text-orange-600',
																	children: '*'
																})
															]
														}),
														e.jsx(j, {
															children: e.jsx(z, {
																placeholder:
																	'Introduction to Biology - Section A',
																...s
															})
														}),
														e.jsx(b, {})
													]
												})
										}),
										e.jsxs('div', {
											className: 'grid sm:grid-cols-2 gap-4',
											children: [
												e.jsx(x, {
													control: i,
													name: 'subjectId',
													render: ({ field: s }) => {
														var n
														return e.jsxs(h, {
															children: [
																e.jsxs(p, {
																	children: [
																		'Subject ',
																		e.jsx('span', {
																			className: 'text-orange-600',
																			children: '*'
																		})
																	]
																}),
																e.jsxs(T, {
																	onValueChange: (r) => s.onChange(Number(r)),
																	value:
																		(n = s.value) == null
																			? void 0
																			: n.toString(),
																	disabled: d,
																	children: [
																		e.jsx(j, {
																			children: e.jsx(k, {
																				className: 'w-full',
																				children: e.jsx(B, {
																					placeholder: 'Select a subject'
																				})
																			})
																		}),
																		e.jsx(F, {
																			children: t.map((r) =>
																				e.jsxs(
																					_,
																					{
																						value: r.id.toString(),
																						children: [
																							r.name,
																							' (',
																							r.code,
																							')'
																						]
																					},
																					r.id
																				)
																			)
																		})
																	]
																}),
																e.jsx(b, {})
															]
														})
													}
												}),
												e.jsx(x, {
													control: i,
													name: 'teacherId',
													render: ({ field: s }) => {
														var n
														return e.jsxs(h, {
															children: [
																e.jsxs(p, {
																	children: [
																		'Teacher ',
																		e.jsx('span', {
																			className: 'text-orange-600',
																			children: '*'
																		})
																	]
																}),
																e.jsxs(T, {
																	onValueChange: s.onChange,
																	value:
																		(n = s.value) == null
																			? void 0
																			: n.toString(),
																	disabled: P,
																	children: [
																		e.jsx(j, {
																			children: e.jsx(k, {
																				className: 'w-full',
																				children: e.jsx(B, {
																					placeholder: 'Select a teacher'
																				})
																			})
																		}),
																		e.jsx(F, {
																			children: q.map((r) =>
																				e.jsx(
																					_,
																					{ value: r.id, children: r.name },
																					r.id
																				)
																			)
																		})
																	]
																}),
																e.jsx(b, {})
															]
														})
													}
												})
											]
										}),
										e.jsxs('div', {
											className: 'grid sm:grid-cols-2 gap-4',
											children: [
												e.jsx(x, {
													control: i,
													name: 'capacity',
													render: ({ field: s }) =>
														e.jsxs(h, {
															children: [
																e.jsxs(p, {
																	children: [
																		'Capacity ',
																		e.jsx('span', {
																			className: 'text-orange-600',
																			children: '*'
																		})
																	]
																}),
																e.jsx(j, {
																	children: e.jsx(z, {
																		type: 'number',
																		min: 1,
																		placeholder: '30',
																		onChange: (n) => {
																			const r = n.target.value
																			s.onChange(r ? Number(r) : void 0)
																		},
																		value: s.value ?? '',
																		name: s.name,
																		ref: s.ref,
																		onBlur: s.onBlur
																	})
																}),
																e.jsx(b, {})
															]
														})
												}),
												e.jsx(x, {
													control: i,
													name: 'status',
													render: ({ field: s }) =>
														e.jsxs(h, {
															children: [
																e.jsxs(p, {
																	children: [
																		'Status ',
																		e.jsx('span', {
																			className: 'text-orange-600',
																			children: '*'
																		})
																	]
																}),
																e.jsxs(T, {
																	onValueChange: s.onChange,
																	value: s.value,
																	children: [
																		e.jsx(j, {
																			children: e.jsx(k, {
																				className: 'w-full',
																				children: e.jsx(B, {
																					placeholder: 'Select status'
																				})
																			})
																		}),
																		e.jsxs(F, {
																			children: [
																				e.jsx(_, {
																					value: 'active',
																					children: 'Active'
																				}),
																				e.jsx(_, {
																					value: 'inactive',
																					children: 'Inactive'
																				})
																			]
																		})
																	]
																}),
																e.jsx(b, {})
															]
														})
												})
											]
										}),
										e.jsx(x, {
											control: i,
											name: 'description',
											render: ({ field: s }) =>
												e.jsxs(h, {
													children: [
														e.jsxs(p, {
															children: [
																'Description ',
																e.jsx('span', {
																	className: 'text-orange-600',
																	children: '*'
																})
															]
														}),
														e.jsx(j, {
															children: e.jsx(se, {
																placeholder:
																	'Brief description about the class',
																...s
															})
														}),
														e.jsx(b, {})
													]
												})
										}),
										e.jsx(D, {}),
										e.jsx(U, {
											type: 'submit',
											size: 'lg',
											className: 'w-full',
											children: c
												? e.jsxs('div', {
														className: 'flex gap-1',
														children: [
															e.jsx('span', { children: 'Creating Class...' }),
															e.jsx(G, {
																className: 'inline-block ml-2 animate-spin'
															})
														]
													})
												: 'Create Class'
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
export { pe as default }
