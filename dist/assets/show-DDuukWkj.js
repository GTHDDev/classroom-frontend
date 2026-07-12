import {
	an as I,
	f as U,
	m as e,
	ak as A,
	ar as z
} from './vendor_react-DuD2GJTP.js'
import { C as B } from './vendor_refine-BBcHqFYP.js'
import { S as P, D as k } from './show-OWSn2mOT.js'
import { S as f, a as g } from './show-view-CuToJDuQ.js'
import {
	g as E,
	A as L,
	d as T,
	e as J,
	C as b,
	S as C,
	B as $,
	a as q,
	b as R,
	c as V
} from './index-_sfPXony.js'
import { B as l } from './badge-CNMNvHZ7.js'
import {
	b1 as _,
	b2 as F,
	b3 as H,
	b4 as M,
	b5 as O,
	b6 as Y,
	b7 as K,
	b8 as Q,
	b9 as W,
	ba as X
} from './vendor_rest-CKJ42Ze8.js'
import './vendor_ui-DyYjmyB8.js'
import './select-CDmhZWrE.js'
import './breadcrumb-BtTtclC3.js'
const G = new _({ cloud: { cloudName: E } }),
	Z = (t, a) =>
		G.image(t)
			.resize(F().width(1200).height(297))
			.delivery(H('auto'))
			.delivery(M('auto'))
			.delivery(O('auto'))
			.overlay(
				Y(
					K(a, new Q('roboto', 42).fontWeight('bold')).textColor('white')
				).position(new W().gravity(X('south_west')).offsetY(0.2).offsetX(0.02))
			),
	oe = () => {
		var c, d, o, m, h, x, j, u, p
		const { id: t } = I(),
			a = t ?? '',
			{ query: i } = B({ resource: 'classes' }),
			s = (c = i.data) == null ? void 0 : c.data,
			N = U.useMemo(
				() => [
					{
						id: 'name',
						accessorKey: 'name',
						size: 240,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Student' }),
						cell: ({ row: r }) =>
							e.jsxs('div', {
								className: 'flex items-center gap-2',
								children: [
									e.jsxs(L, {
										className: 'size-7',
										children: [
											r.original.image &&
												e.jsx(T, {
													src: r.original.image,
													alt: r.original.name
												}),
											e.jsx(J, { children: D(r.original.name) })
										]
									}),
									e.jsxs('div', {
										className: 'flex flex-col truncate',
										children: [
											e.jsx('span', {
												className: 'truncate',
												children: r.original.name
											}),
											e.jsx('span', {
												className: 'text-xs text-muted-foreground truncate',
												children: r.original.email
											})
										]
									})
								]
							})
					},
					{
						id: 'details',
						size: 140,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Details' }),
						cell: ({ row: r }) =>
							e.jsx(P, {
								resource: 'users',
								recordItemId: r.original.id,
								variant: 'outline',
								size: 'sm',
								children: 'View'
							})
					}
				],
				[]
			),
			w = A({
				columns: N,
				refineCoreProps: {
					resource: `classes/${a}/users`,
					pagination: { pageSize: 3, mode: 'server' },
					filters: {
						permanent: [{ field: 'role', operator: 'eq', value: 'student' }]
					}
				}
			})
		if (i.isLoading || i.isError || !s)
			return e.jsxs(f, {
				className: 'class-view class-show',
				children: [
					e.jsx(g, { resource: 'classes', title: 'Class Details' }),
					e.jsx('p', {
						className: 'state-message',
						children: i.isLoading
							? 'Loading class details...'
							: i.isError
								? 'Failed to load class details.'
								: 'Class details not found.'
					})
				]
			})
		const n = ((d = s.teacher) == null ? void 0 : d.name) ?? 'Unknown',
			y = n
				.split(' ')
				.filter(Boolean)
				.slice(0, 2)
				.map((r) => {
					var v
					return (v = r[0]) == null ? void 0 : v.toUpperCase()
				})
				.join(''),
			S = `https://placehold.co/600x400?text=${encodeURIComponent(y || 'NA')}`
		return e.jsxs(f, {
			className: 'class-view class-show space-y-6',
			children: [
				e.jsx(g, { resource: 'classes', title: 'Class Details' }),
				e.jsx('div', {
					className: 'banner',
					children: s.bannerUrl
						? s.bannerUrl.includes('res.cloudinary.com') && s.bannerCldPubId
							? e.jsx(z, {
									cldImg: Z(s.bannerCldPubId ?? '', s.name),
									alt: 'Class Banner'
								})
							: e.jsx('img', { src: s.bannerUrl, alt: s.name, loading: 'lazy' })
						: e.jsx('div', { className: 'placeholder' })
				}),
				e.jsxs(b, {
					className: 'details-card',
					children: [
						e.jsxs('div', {
							children: [
								e.jsxs('div', {
									className: 'details-header',
									children: [
										e.jsxs('div', {
											children: [
												e.jsx('h1', { children: s.name }),
												e.jsx('p', { children: s.description })
											]
										}),
										e.jsxs('div', {
											children: [
												e.jsxs(l, {
													variant: 'outline',
													children: [s.capacity, ' spots']
												}),
												e.jsx(l, {
													variant:
														s.status === 'active' ? 'default' : 'secondary',
													'data-status': s.status,
													children: s.status.toUpperCase()
												})
											]
										})
									]
								}),
								e.jsxs('div', {
									className: 'details-grid',
									children: [
										e.jsxs('div', {
											className: 'instructor',
											children: [
												e.jsx('p', { children: '👨‍🏫 Instructor' }),
												e.jsxs('div', {
													children: [
														e.jsx('img', {
															src:
																((o = s.teacher) == null ? void 0 : o.image) ??
																S,
															alt: n
														}),
														e.jsxs('div', {
															children: [
																e.jsx('p', { children: n }),
																e.jsx('p', {
																	children:
																		(m = s == null ? void 0 : s.teacher) == null
																			? void 0
																			: m.email
																})
															]
														})
													]
												})
											]
										}),
										e.jsxs('div', {
											className: 'department',
											children: [
												e.jsx('p', { children: '🏛️ Department' }),
												e.jsxs('div', {
													children: [
														e.jsx('p', {
															children:
																(h = s == null ? void 0 : s.department) == null
																	? void 0
																	: h.name
														}),
														e.jsx('p', {
															children:
																(x = s == null ? void 0 : s.department) == null
																	? void 0
																	: x.description
														})
													]
												})
											]
										})
									]
								})
							]
						}),
						e.jsx(C, {}),
						e.jsxs('div', {
							className: 'subject',
							children: [
								e.jsx('p', { children: '📚 Subject' }),
								e.jsxs('div', {
									children: [
										e.jsxs(l, {
											variant: 'outline',
											children: [
												'Code: ',
												e.jsx('span', {
													children:
														(j = s == null ? void 0 : s.subject) == null
															? void 0
															: j.code
												})
											]
										}),
										e.jsx('p', {
											children:
												(u = s == null ? void 0 : s.subject) == null
													? void 0
													: u.name
										}),
										e.jsx('p', {
											children:
												(p = s == null ? void 0 : s.subject) == null
													? void 0
													: p.description
										})
									]
								})
							]
						}),
						e.jsx(C, {}),
						e.jsxs('div', {
							className: 'join',
							children: [
								e.jsx('h2', { children: '🎓 Join Class' }),
								e.jsxs('ol', {
									children: [
										e.jsx('li', {
											children: 'Ask your teacher for the invite code.'
										}),
										e.jsx('li', { children: 'Click on "Join Class" button.' }),
										e.jsx('li', { children: 'Paste the code and click "Join"' })
									]
								})
							]
						}),
						e.jsx($, {
							size: 'lg',
							className: 'w-full',
							children: 'Join Class'
						})
					]
				}),
				e.jsxs(b, {
					className: 'hover:shadow-md transition-shadow',
					children: [
						e.jsx(q, {
							className: 'flex flex-row items-center justify-between',
							children: e.jsx(R, { children: 'Enrolled Students' })
						}),
						e.jsx(V, { children: e.jsx(k, { table: w }) })
					]
				})
			]
		})
	},
	D = (t = '') => {
		var i
		const a = t.trim().split(' ').filter(Boolean)
		return a.length === 0
			? ''
			: a.length === 1
				? (((i = a[0][0]) == null ? void 0 : i.toUpperCase()) ?? '')
				: `${a[0][0] ?? ''}${a[a.length - 1][0] ?? ''}`.toUpperCase()
	}
export { oe as default }
