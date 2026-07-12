import { an as I, f, m as e, ak as x } from './vendor_react-DuD2GJTP.js'
import { q as $, C as k } from './vendor_refine-BBcHqFYP.js'
import {
	A as g,
	d as N,
	e as b,
	C as l,
	a as c,
	b as o,
	c as d
} from './index-_sfPXony.js'
import { B as m } from './badge-CNMNvHZ7.js'
import { S as v, D as h } from './show-OWSn2mOT.js'
import { S as w, a as y } from './show-view-CuToJDuQ.js'
import './vendor_rest-CKJ42Ze8.js'
import './vendor_ui-DyYjmyB8.js'
import './select-CDmhZWrE.js'
import './breadcrumb-BtTtclC3.js'
const H = () => {
		var p
		const u = $(),
			{ id: t } = I(),
			i = t ?? '',
			{ query: n } = k({ resource: 'subjects' }),
			r = (p = n.data) == null ? void 0 : p.data,
			S = f.useMemo(
				() => [
					{
						id: 'name',
						accessorKey: 'name',
						size: 240,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Class' }),
						cell: ({ getValue: s }) =>
							e.jsx('span', { className: 'text-foreground', children: s() })
					},
					{
						id: 'teacher',
						accessorKey: 'teacher',
						size: 220,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Teacher' }),
						cell: ({ row: s }) => {
							const a = s.original.teacher
							return a
								? e.jsxs('div', {
										className: 'flex items-center gap-2',
										children: [
											e.jsxs(g, {
												className: 'size-7',
												children: [
													a.image && e.jsx(N, { src: a.image, alt: a.name }),
													e.jsx(b, { children: C(a.name) })
												]
											}),
											e.jsxs('div', {
												className: 'flex flex-col truncate',
												children: [
													e.jsx('span', {
														className: 'truncate',
														children: a.name
													}),
													e.jsx('span', {
														className: 'text-xs text-muted-foreground truncate',
														children: a.email
													})
												]
											})
										]
									})
								: e.jsx('span', {
										className: 'text-muted-foreground',
										children: 'Unassigned'
									})
						}
					},
					{
						id: 'status',
						accessorKey: 'status',
						size: 120,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Status' }),
						cell: ({ getValue: s }) => {
							const a = s()
							return e.jsx(m, {
								variant: a === 'active' ? 'default' : 'secondary',
								children: a ?? 'unknown'
							})
						}
					},
					{
						id: 'details',
						size: 140,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Details' }),
						cell: ({ row: s }) =>
							e.jsx(v, {
								resource: 'classes',
								recordItemId: s.original.id,
								variant: 'outline',
								size: 'sm',
								children: 'View'
							})
					}
				],
				[]
			),
			j = f.useMemo(
				() => [
					{
						id: 'name',
						accessorKey: 'name',
						size: 240,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'User' }),
						cell: ({ row: s }) =>
							e.jsxs('div', {
								className: 'flex items-center gap-2',
								children: [
									e.jsxs(g, {
										className: 'size-7',
										children: [
											s.original.image &&
												e.jsx(N, {
													src: s.original.image,
													alt: s.original.name
												}),
											e.jsx(b, { children: C(s.original.name) })
										]
									}),
									e.jsxs('div', {
										className: 'flex flex-col truncate',
										children: [
											e.jsx('span', {
												className: 'truncate',
												children: s.original.name
											}),
											e.jsx('span', {
												className: 'text-xs text-muted-foreground truncate',
												children: s.original.email
											})
										]
									})
								]
							})
					},
					{
						id: 'role',
						accessorKey: 'role',
						size: 140,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Role' }),
						cell: ({ getValue: s }) =>
							e.jsx(m, { variant: 'secondary', children: s() })
					},
					{
						id: 'details',
						size: 140,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Details' }),
						cell: ({ row: s }) =>
							e.jsx(v, {
								resource: 'users',
								recordItemId: s.original.id,
								variant: 'outline',
								size: 'sm',
								children: 'View'
							})
					}
				],
				[]
			),
			z = x({
				columns: S,
				refineCoreProps: {
					resource: `subjects/${i}/classes`,
					pagination: { pageSize: 10, mode: 'server' }
				}
			}),
			T = x({
				columns: j,
				refineCoreProps: {
					resource: `subjects/${i}/users`,
					pagination: { pageSize: 10, mode: 'server' },
					filters: {
						permanent: [{ field: 'role', operator: 'eq', value: 'teacher' }]
					}
				}
			}),
			D = x({
				columns: j,
				refineCoreProps: {
					resource: `subjects/${i}/users`,
					pagination: { pageSize: 10, mode: 'server' },
					filters: {
						permanent: [{ field: 'role', operator: 'eq', value: 'student' }]
					}
				}
			})
		return n.isLoading || n.isError || !r
			? e.jsxs(w, {
					className: 'class-view',
					children: [
						e.jsx(y, { resource: 'subjects', title: 'Subject Details' }),
						e.jsx('p', {
							className: 'text-sm text-muted-foreground',
							children: n.isLoading
								? 'Loading subject details...'
								: n.isError
									? 'Failed to load subject details.'
									: 'Subject details not found.'
						})
					]
				})
			: e.jsxs(w, {
					className: 'class-view space-y-6',
					children: [
						e.jsx(y, { resource: 'subjects', title: r.subject.name }),
						e.jsxs(l, {
							className: 'hover:shadow-md transition-shadow',
							children: [
								e.jsxs(c, {
									className:
										'flex w-full flex-row items-center justify-between',
									children: [
										e.jsx(o, { children: 'Subject Overview' }),
										e.jsx(m, { variant: 'secondary', children: r.subject.code })
									]
								}),
								e.jsx(d, {
									className: 'space-y-3',
									children: e.jsx('p', {
										className: 'text-sm text-muted-foreground',
										children:
											r.subject.description ?? 'No description provided.'
									})
								})
							]
						}),
						e.jsxs(l, {
							className: 'hover:shadow-md transition-shadow',
							children: [
								e.jsx(c, { children: e.jsx(o, { children: 'Department' }) }),
								e.jsx(d, {
									className: 'space-y-2',
									children: r.subject.department
										? e.jsxs(e.Fragment, {
												children: [
													e.jsx(u, {
														to: `/departments/show/${r.subject.department.id}`,
														className:
															'text-lg font-semibold text-foreground hover:underline',
														children: r.subject.department.name
													}),
													e.jsx('p', {
														className: 'text-sm text-muted-foreground',
														children:
															r.subject.department.description ??
															'No department description provided.'
													})
												]
											})
										: e.jsx('p', {
												className: 'text-sm text-muted-foreground',
												children: 'Department not assigned.'
											})
								})
							]
						}),
						e.jsxs(l, {
							className: 'hover:shadow-md transition-shadow',
							children: [
								e.jsxs(c, {
									className: 'flex flex-row items-center justify-between',
									children: [
										e.jsx(o, { children: 'Classes' }),
										e.jsx(m, {
											variant: 'secondary',
											children: r.totals.classes
										})
									]
								}),
								e.jsx(d, { children: e.jsx(h, { table: z }) })
							]
						}),
						e.jsxs('div', {
							className: 'grid gap-6 lg:grid-cols-2',
							children: [
								e.jsxs(l, {
									className: 'hover:shadow-md transition-shadow',
									children: [
										e.jsx(c, {
											className: 'flex flex-row items-center justify-between',
											children: e.jsx(o, { children: 'Teachers' })
										}),
										e.jsx(d, { children: e.jsx(h, { table: T }) })
									]
								}),
								e.jsxs(l, {
									className: 'hover:shadow-md transition-shadow',
									children: [
										e.jsx(c, {
											className: 'flex flex-row items-center justify-between',
											children: e.jsx(o, { children: 'Students' })
										}),
										e.jsx(d, { children: e.jsx(h, { table: D }) })
									]
								})
							]
						})
					]
				})
	},
	C = (u = '') => {
		var i
		const t = u.trim().split(' ').filter(Boolean)
		return t.length === 0
			? ''
			: t.length === 1
				? (((i = t[0][0]) == null ? void 0 : i.toUpperCase()) ?? '')
				: `${t[0][0] ?? ''}${t[t.length - 1][0] ?? ''}`.toUpperCase()
	}
export { H as default }
