import {
	f as n,
	af as U,
	V as $,
	ai as L,
	ad as Q,
	ae as z,
	aj as P,
	m as e
} from './vendor_react-DuD2GJTP.js'
import { q as E, z as h } from './vendor_refine-BBcHqFYP.js'
import { B as u } from './badge-CNMNvHZ7.js'
import { C as d, a as l, b as c, c as o, S as X } from './index-_sfPXony.js'
import {
	R as w,
	P as Y,
	b as G,
	C as H,
	T as y,
	B as D,
	X as B,
	Y as k,
	d as R
} from './vendor_ui-DyYjmyB8.js'
import './vendor_rest-CKJ42Ze8.js'
const j = ['#f97316', '#0ea5e9', '#22c55e', '#a855f7'],
	ee = () => {
		const C = E(),
			{ query: T } = h({ resource: 'users', pagination: { mode: 'off' } }),
			{ query: S } = h({ resource: 'subjects', pagination: { mode: 'off' } }),
			{ query: M } = h({
				resource: 'departments',
				pagination: { mode: 'off' }
			}),
			{ query: A } = h({ resource: 'classes', pagination: { mode: 'off' } }),
			i = n.useMemo(() => {
				var s
				return ((s = T.data) == null ? void 0 : s.data) ?? []
			}, [T.data]),
			p = n.useMemo(() => {
				var s
				return ((s = S.data) == null ? void 0 : s.data) ?? []
			}, [S.data]),
			q = n.useMemo(() => {
				var s
				return ((s = M.data) == null ? void 0 : s.data) ?? []
			}, [M.data]),
			m = n.useMemo(() => {
				var s
				return ((s = A.data) == null ? void 0 : s.data) ?? []
			}, [A.data]),
			g = n.useMemo(() => {
				const s = i.reduce((t, a) => {
					const r = a.role ?? 'unknown'
					return ((t[r] = (t[r] || 0) + 1), t)
				}, {})
				return Object.entries(s).map(([t, a]) => ({ role: t, total: a }))
			}, [i]),
			b = n.useMemo(() => {
				const s = p.reduce((t, a) => {
					var x
					const r =
						((x = a.department) == null ? void 0 : x.name) ?? 'Unassigned'
					return ((t[r] = (t[r] || 0) + 1), t)
				}, {})
				return Object.entries(s).map(([t, a]) => ({
					departmentName: t,
					totalSubjects: a
				}))
			}, [p]),
			f = n.useMemo(() => {
				const s = m.reduce((t, a) => {
					var x
					const r = ((x = a.subject) == null ? void 0 : x.name) ?? 'Unassigned'
					return ((t[r] = (t[r] || 0) + 1), t)
				}, {})
				return Object.entries(s).map(([t, a]) => ({
					subjectName: t,
					totalClasses: a
				}))
			}, [m]),
			N = n.useMemo(
				() =>
					[...m]
						.sort((s, t) => {
							const a = s.createdAt ? new Date(s.createdAt).getTime() : 0
							return (t.createdAt ? new Date(t.createdAt).getTime() : 0) - a
						})
						.slice(0, 5),
				[m]
			),
			v = n.useMemo(
				() =>
					i
						.filter((s) => s.role === 'teacher')
						.sort((s, t) => {
							const a = s.createdAt ? new Date(s.createdAt).getTime() : 0
							return (t.createdAt ? new Date(t.createdAt).getTime() : 0) - a
						})
						.slice(0, 5),
				[i]
			),
			K = n.useMemo(
				() =>
					[...b]
						.sort((s, t) => t.totalSubjects - s.totalSubjects)
						.slice(0, 5)
						.map((s, t) => ({ ...s, departmentId: t })),
				[b]
			),
			I = n.useMemo(
				() =>
					[...f]
						.sort((s, t) => t.totalClasses - s.totalClasses)
						.slice(0, 5)
						.map((s, t) => ({ ...s, subjectId: t })),
				[f]
			),
			O = [
				{
					label: 'Total Users',
					value: i.length,
					icon: U,
					accent: 'text-blue-600'
				},
				{
					label: 'Teachers',
					value: i.filter((s) => s.role === 'teacher').length,
					icon: $,
					accent: 'text-emerald-600'
				},
				{
					label: 'Admins',
					value: i.filter((s) => s.role === 'admin').length,
					icon: L,
					accent: 'text-amber-600'
				},
				{
					label: 'Subjects',
					value: p.length,
					icon: Q,
					accent: 'text-purple-600'
				},
				{
					label: 'Departments',
					value: q.length,
					icon: z,
					accent: 'text-cyan-600'
				},
				{ label: 'Classes', value: m.length, icon: P, accent: 'text-rose-600' }
			]
		return e.jsxs('div', {
			className: 'space-y-6',
			children: [
				e.jsxs('div', {
					children: [
						e.jsx('h1', { className: 'page-title', children: 'Dashboard' }),
						e.jsx('p', {
							className: 'text-muted-foreground',
							children:
								'A quick snapshot of the latest activity and key metrics.'
						})
					]
				}),
				e.jsxs(d, {
					className: 'hover:shadow-md transition-shadow',
					children: [
						e.jsx(l, { children: e.jsx(c, { children: 'Overview' }) }),
						e.jsx(o, {
							children: e.jsx('div', {
								className:
									'grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6',
								children: O.map((s) =>
									e.jsxs(
										'div',
										{
											className:
												'rounded-lg border border-border bg-muted/20 p-4 hover:border-primary/40 hover:bg-muted/40 transition-colors',
											children: [
												e.jsxs('div', {
													className: 'flex items-center justify-between',
													children: [
														e.jsx('p', {
															className:
																'text-xs font-semibold text-muted-foreground',
															children: s.label
														}),
														e.jsx(s.icon, { className: `h-4 w-4 ${s.accent}` })
													]
												}),
												e.jsx('div', {
													className: 'mt-2 text-2xl font-semibold',
													children: s.value
												})
											]
										},
										s.label
									)
								)
							})
						})
					]
				}),
				e.jsxs('div', {
					className: 'grid gap-6 lg:grid-cols-3',
					children: [
						e.jsxs(d, {
							className: 'lg:col-span-2 hover:shadow-md transition-shadow',
							children: [
								e.jsx(l, { children: e.jsx(c, { children: 'Users by Role' }) }),
								e.jsxs(o, {
									className: 'space-y-4',
									children: [
										e.jsx('div', {
											className: 'h-72',
											children: e.jsx(w, {
												width: '100%',
												height: '100%',
												children: e.jsxs(Y, {
													children: [
														e.jsx(G, {
															dataKey: 'total',
															nameKey: 'role',
															data: g,
															innerRadius: 60,
															outerRadius: 100,
															paddingAngle: 3,
															children: g.map((s, t) =>
																e.jsx(
																	H,
																	{ fill: j[t % j.length] },
																	`${s.role}-${t}`
																)
															)
														}),
														e.jsx(y, {})
													]
												})
											})
										}),
										e.jsx('div', {
											className: 'flex flex-wrap gap-2',
											children: g.map((s, t) =>
												e.jsxs(
													'span',
													{
														className:
															'inline-flex items-center gap-2 rounded-full bg-muted px-3 py-1 text-xs font-medium',
														children: [
															e.jsx('span', {
																className: 'h-2 w-2 rounded-full',
																style: { backgroundColor: j[t % j.length] }
															}),
															s.role,
															' · ',
															s.total
														]
													},
													s.role
												)
											)
										})
									]
								})
							]
						}),
						e.jsxs('div', {
							className: 'grid gap-4',
							children: [
								e.jsxs(d, {
									className: 'hover:shadow-md transition-shadow',
									children: [
										e.jsx(l, {
											children: e.jsx(c, { children: 'New Classes (last 5)' })
										}),
										e.jsxs(o, {
											children: [
												e.jsx('div', {
													className: 'text-3xl font-semibold',
													children: N.length
												}),
												e.jsx('p', {
													className: 'text-sm text-muted-foreground',
													children: 'Most recent classes added'
												})
											]
										})
									]
								}),
								e.jsxs(d, {
									className: 'hover:shadow-md transition-shadow',
									children: [
										e.jsx(l, {
											children: e.jsx(c, { children: 'New Teachers (last 5)' })
										}),
										e.jsxs(o, {
											children: [
												e.jsx('div', {
													className: 'text-3xl font-semibold',
													children: v.length
												}),
												e.jsx('p', {
													className: 'text-sm text-muted-foreground',
													children: 'Most recent teachers added'
												})
											]
										})
									]
								})
							]
						})
					]
				}),
				e.jsxs(d, {
					className: 'hover:shadow-md transition-shadow',
					children: [
						e.jsx(l, { children: e.jsx(c, { children: 'Insights' }) }),
						e.jsxs(o, {
							className: 'grid gap-6 lg:grid-cols-2',
							children: [
								e.jsxs('div', {
									className: 'space-y-3',
									children: [
										e.jsx('h3', {
											className: 'text-sm font-semibold text-muted-foreground',
											children: 'Subjects per Department'
										}),
										e.jsx('div', {
											className: 'h-80',
											children: e.jsx(w, {
												width: '100%',
												height: '100%',
												children: e.jsxs(D, {
													data: b,
													children: [
														e.jsx(B, {
															dataKey: 'departmentName',
															tick: { fontSize: 12 }
														}),
														e.jsx(k, { allowDecimals: !1 }),
														e.jsx(y, {}),
														e.jsx(R, {
															dataKey: 'totalSubjects',
															fill: '#f97316',
															radius: [6, 6, 0, 0]
														})
													]
												})
											})
										})
									]
								}),
								e.jsxs('div', {
									className: 'space-y-3',
									children: [
										e.jsx('h3', {
											className: 'text-sm font-semibold text-muted-foreground',
											children: 'Classes per Subject'
										}),
										e.jsx('div', {
											className: 'h-80',
											children: e.jsx(w, {
												width: '100%',
												height: '100%',
												children: e.jsxs(D, {
													data: f,
													children: [
														e.jsx(B, {
															dataKey: 'subjectName',
															tick: { fontSize: 12 }
														}),
														e.jsx(k, { allowDecimals: !1 }),
														e.jsx(y, {}),
														e.jsx(R, {
															dataKey: 'totalClasses',
															fill: '#0ea5e9',
															radius: [6, 6, 0, 0]
														})
													]
												})
											})
										})
									]
								})
							]
						})
					]
				}),
				e.jsxs('div', {
					className: 'grid gap-6 lg:grid-cols-2',
					children: [
						e.jsxs(d, {
							className: 'hover:shadow-md transition-shadow',
							children: [
								e.jsx(l, {
									children: e.jsx(c, { children: 'Newest Classes' })
								}),
								e.jsxs(o, {
									className: 'space-y-3',
									children: [
										N.length === 0 &&
											e.jsx('p', {
												className: 'text-sm text-muted-foreground',
												children: 'No recent classes.'
											}),
										N.map((s, t) => {
											var a, r
											return e.jsxs(
												C,
												{
													to: `/classes/show/${s.id}`,
													className:
														'flex items-center justify-between rounded-md border border-transparent px-3 py-2 transition-colors hover:border-primary/30 hover:bg-muted/40',
													children: [
														e.jsxs('div', {
															className: 'flex items-center gap-3',
															children: [
																e.jsxs('span', {
																	className:
																		'text-xs font-semibold text-muted-foreground',
																	children: ['#', t + 1]
																}),
																e.jsxs('div', {
																	children: [
																		e.jsx('p', {
																			className: 'text-sm font-medium',
																			children: s.name
																		}),
																		e.jsxs('p', {
																			className:
																				'text-xs text-muted-foreground',
																			children: [
																				((a = s.subject) == null
																					? void 0
																					: a.name) ?? 'No subject',
																				' ·',
																				' ',
																				((r = s.teacher) == null
																					? void 0
																					: r.name) ?? 'No teacher'
																			]
																		})
																	]
																})
															]
														}),
														e.jsx(u, { variant: 'secondary', children: 'New' })
													]
												},
												s.id
											)
										})
									]
								})
							]
						}),
						e.jsxs(d, {
							className: 'hover:shadow-md transition-shadow',
							children: [
								e.jsx(l, {
									children: e.jsx(c, { children: 'Newest Teachers' })
								}),
								e.jsxs(o, {
									className: 'space-y-3',
									children: [
										v.length === 0 &&
											e.jsx('p', {
												className: 'text-sm text-muted-foreground',
												children: 'No recent teachers.'
											}),
										v.map((s, t) =>
											e.jsxs(
												C,
												{
													to: `/users/show/${s.id}`,
													className:
														'flex items-center justify-between rounded-md border border-transparent px-3 py-2 transition-colors hover:border-primary/30 hover:bg-muted/40',
													children: [
														e.jsxs('div', {
															className: 'flex items-center gap-3',
															children: [
																e.jsxs('span', {
																	className:
																		'text-xs font-semibold text-muted-foreground',
																	children: ['#', t + 1]
																}),
																e.jsxs('div', {
																	children: [
																		e.jsx('p', {
																			className: 'text-sm font-medium',
																			children: s.name
																		}),
																		e.jsx('p', {
																			className:
																				'text-xs text-muted-foreground',
																			children: s.email
																		})
																	]
																})
															]
														}),
														e.jsx(u, { variant: 'secondary', children: 'New' })
													]
												},
												s.id
											)
										)
									]
								})
							]
						})
					]
				}),
				e.jsxs('div', {
					className: 'grid gap-6 lg:grid-cols-2',
					children: [
						e.jsxs(d, {
							className: 'hover:shadow-md transition-shadow',
							children: [
								e.jsx(l, {
									children: e.jsx(c, {
										children: 'Departments with Most Subjects'
									})
								}),
								e.jsx(o, {
									className: 'space-y-3',
									children: K.map((s, t) =>
										e.jsxs(
											'div',
											{
												className:
													'flex items-center justify-between rounded-md border border-transparent px-3 py-2 transition-colors hover:border-primary/30 hover:bg-muted/40',
												children: [
													e.jsxs('div', {
														className: 'flex items-center gap-3',
														children: [
															e.jsxs('span', {
																className:
																	'text-xs font-semibold text-muted-foreground',
																children: ['#', t + 1]
															}),
															e.jsxs('div', {
																children: [
																	e.jsx('p', {
																		className: 'text-sm font-medium',
																		children: s.departmentName
																	}),
																	e.jsxs('p', {
																		className: 'text-xs text-muted-foreground',
																		children: [s.totalSubjects, ' subjects']
																	})
																]
															})
														]
													}),
													e.jsx(u, { children: s.totalSubjects })
												]
											},
											s.departmentId
										)
									)
								})
							]
						}),
						e.jsxs(d, {
							className: 'hover:shadow-md transition-shadow',
							children: [
								e.jsx(l, {
									children: e.jsx(c, { children: 'Subjects with Most Classes' })
								}),
								e.jsx(o, {
									className: 'space-y-3',
									children: I.map((s, t) =>
										e.jsxs(
											'div',
											{
												className:
													'flex items-center justify-between rounded-md border border-transparent px-3 py-2 transition-colors hover:border-primary/30 hover:bg-muted/40',
												children: [
													e.jsxs('div', {
														className: 'flex items-center gap-3',
														children: [
															e.jsxs('span', {
																className:
																	'text-xs font-semibold text-muted-foreground',
																children: ['#', t + 1]
															}),
															e.jsxs('div', {
																children: [
																	e.jsx('p', {
																		className: 'text-sm font-medium',
																		children: s.subjectName
																	}),
																	e.jsxs('p', {
																		className: 'text-xs text-muted-foreground',
																		children: [s.totalClasses, ' classes']
																	})
																]
															})
														]
													}),
													e.jsx(u, { children: s.totalClasses })
												]
											},
											s.subjectId
										)
									)
								})
							]
						})
					]
				}),
				e.jsx(X, {})
			]
		})
	}
export { ee as default }
