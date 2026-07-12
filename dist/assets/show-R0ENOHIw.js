import { an as v, f as x, m as e, ak as h } from './vendor_react-DuD2GJTP.js'
import { C } from './vendor_refine-BBcHqFYP.js'
import {
	C as n,
	a as i,
	b as o,
	c as d,
	A as z,
	d as S,
	e as D
} from './index-_sfPXony.js'
import { B as m } from './badge-CNMNvHZ7.js'
import { S as p, D as j } from './show-OWSn2mOT.js'
import { S as f, a as N } from './show-view-CuToJDuQ.js'
import './vendor_rest-CKJ42Ze8.js'
import './vendor_ui-DyYjmyB8.js'
import './select-CDmhZWrE.js'
import './breadcrumb-BtTtclC3.js'
const k = () => {
		var u
		const { id: l } = v(),
			t = l ?? '',
			{ query: c } = C({ resource: 'users' }),
			r = (u = c.data) == null ? void 0 : u.data,
			g = x.useMemo(
				() => [
					{
						id: 'code',
						accessorKey: 'code',
						size: 120,
						header: () =>
							e.jsx('p', { className: 'column-title ml-2', children: 'Code' }),
						cell: ({ getValue: s }) => {
							const a = s()
							return a
								? e.jsx(m, { children: a })
								: e.jsx('span', {
										className: 'text-muted-foreground ml-2',
										children: 'No code'
									})
						}
					},
					{
						id: 'name',
						accessorKey: 'name',
						size: 220,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Department' }),
						cell: ({ getValue: s }) =>
							e.jsx('span', { className: 'text-foreground', children: s() })
					},
					{
						id: 'description',
						accessorKey: 'description',
						size: 320,
						header: () =>
							e.jsx('p', {
								className: 'column-title',
								children: 'Description'
							}),
						cell: ({ getValue: s }) => {
							const a = s()
							return a
								? e.jsx('span', {
										className: 'truncate line-clamp-2',
										children: a
									})
								: e.jsx('span', {
										className: 'text-muted-foreground',
										children: 'No description'
									})
						}
					},
					{
						id: 'details',
						size: 140,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Details' }),
						cell: ({ row: s }) =>
							e.jsx(p, {
								resource: 'departments',
								recordItemId: s.original.id,
								variant: 'outline',
								size: 'sm',
								children: 'View'
							})
					}
				],
				[]
			),
			w = x.useMemo(
				() => [
					{
						id: 'code',
						accessorKey: 'code',
						size: 120,
						header: () =>
							e.jsx('p', { className: 'column-title ml-2', children: 'Code' }),
						cell: ({ getValue: s }) => {
							const a = s()
							return a
								? e.jsx(m, { children: a })
								: e.jsx('span', {
										className: 'text-muted-foreground ml-2',
										children: 'No code'
									})
						}
					},
					{
						id: 'name',
						accessorKey: 'name',
						size: 220,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Subject' }),
						cell: ({ getValue: s }) =>
							e.jsx('span', { className: 'text-foreground', children: s() })
					},
					{
						id: 'department',
						accessorKey: 'department',
						size: 200,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Department' }),
						cell: ({ row: s }) => {
							const a = s.original.department
							return a
								? e.jsxs('span', {
										className: 'truncate',
										children: [a.name, a.code ? ` (${a.code})` : '']
									})
								: e.jsx('span', {
										className: 'text-muted-foreground',
										children: 'No department'
									})
						}
					},
					{
						id: 'details',
						size: 140,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Details' }),
						cell: ({ row: s }) =>
							e.jsx(p, {
								resource: 'subjects',
								recordItemId: s.original.id,
								variant: 'outline',
								size: 'sm',
								children: 'View'
							})
					}
				],
				[]
			),
			b = h({
				columns: g,
				refineCoreProps: {
					resource: `users/${t}/departments`,
					pagination: { pageSize: 10, mode: 'server' }
				}
			}),
			y = h({
				columns: w,
				refineCoreProps: {
					resource: `users/${t}/subjects`,
					pagination: { pageSize: 10, mode: 'server' }
				}
			})
		return c.isLoading || c.isError || !r
			? e.jsxs(f, {
					className: 'class-view',
					children: [
						e.jsx(N, { resource: 'users', title: 'Faculty Details' }),
						e.jsx('p', {
							className: 'text-sm text-muted-foreground',
							children: c.isLoading
								? 'Loading faculty details...'
								: c.isError
									? 'Failed to load faculty details.'
									: 'Faculty details not found.'
						})
					]
				})
			: e.jsxs(f, {
					className: 'class-view space-y-6',
					children: [
						e.jsx(N, { resource: 'users', title: r.name }),
						e.jsxs(n, {
							className: 'hover:shadow-md transition-shadow',
							children: [
								e.jsxs(i, {
									className: 'flex flex-row items-center justify-between',
									children: [
										e.jsx(o, { children: 'Profile' }),
										e.jsx(m, { variant: 'default', children: r.role })
									]
								}),
								e.jsx(d, {
									className:
										'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between',
									children: e.jsxs('div', {
										className: 'flex items-center gap-4',
										children: [
											e.jsxs(z, {
												className: 'size-12',
												children: [
													r.image && e.jsx(S, { src: r.image, alt: r.name }),
													e.jsx(D, { children: I(r.name) })
												]
											}),
											e.jsxs('div', {
												children: [
													e.jsx('p', {
														className: 'text-lg font-semibold',
														children: r.name
													}),
													e.jsx('p', {
														className: 'text-sm text-muted-foreground',
														children: r.email
													})
												]
											})
										]
									})
								})
							]
						}),
						e.jsxs('div', {
							className: 'space-y-6',
							children: [
								e.jsxs(n, {
									className: 'hover:shadow-md transition-shadow',
									children: [
										e.jsx(i, {
											children: e.jsx(o, { children: 'Departments' })
										}),
										e.jsxs(d, {
											className: 'space-y-4',
											children: [
												e.jsxs('p', {
													className: 'text-sm text-muted-foreground',
													children: [
														'Departments tied to ',
														r.name,
														' based on classes and enrollments.'
													]
												}),
												e.jsx(j, { table: b })
											]
										})
									]
								}),
								e.jsxs(n, {
									className: 'hover:shadow-md transition-shadow',
									children: [
										e.jsx(i, { children: e.jsx(o, { children: 'Subjects' }) }),
										e.jsxs(d, {
											className: 'space-y-4',
											children: [
												e.jsxs('p', {
													className: 'text-sm text-muted-foreground',
													children: [
														'Subjects associated with ',
														r.name,
														' in this term.'
													]
												}),
												e.jsx(j, { table: y })
											]
										})
									]
								})
							]
						})
					]
				})
	},
	I = (l = '') => {
		var c
		const t = l.trim().split(' ').filter(Boolean)
		return t.length === 0
			? ''
			: t.length === 1
				? (((c = t[0][0]) == null ? void 0 : c.toUpperCase()) ?? '')
				: `${t[0][0] ?? ''}${t[t.length - 1][0] ?? ''}`.toUpperCase()
	}
export { k as default }
