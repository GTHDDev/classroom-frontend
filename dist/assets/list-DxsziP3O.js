import { f as a, m as e, ak as B, al as T } from './vendor_react-DuD2GJTP.js'
import { L as K, C as q } from './list-view-Ch2JzEfM.js'
import { B as F } from './breadcrumb-BtTtclC3.js'
import { I } from './index-_sfPXony.js'
import { S as u, a as h, b as p, c as x, d as l } from './select-CDmhZWrE.js'
import { S as V, D as L } from './show-OWSn2mOT.js'
import { B as A } from './badge-CNMNvHZ7.js'
import { z as j } from './vendor_refine-BBcHqFYP.js'
import './vendor_rest-CKJ42Ze8.js'
import './vendor_ui-DyYjmyB8.js'
const O = () => {
	var d, m
	const [r, f] = a.useState(''),
		[c, S] = a.useState('all'),
		[t, g] = a.useState('all'),
		{ query: i } = j({ resource: 'subjects', pagination: { pageSize: 100 } }),
		{ query: n } = j({
			resource: 'users',
			filters: [{ field: 'role', operator: 'eq', value: 'teacher' }],
			pagination: { pageSize: 100 }
		}),
		N = ((d = i == null ? void 0 : i.data) == null ? void 0 : d.data) || [],
		v = ((m = n == null ? void 0 : n.data) == null ? void 0 : m.data) || [],
		b = c === 'all' ? [] : [{ field: 'subject', operator: 'eq', value: c }],
		y = t === 'all' ? [] : [{ field: 'teacher', operator: 'eq', value: t }],
		C = r ? [{ field: 'name', operator: 'contains', value: r }] : [],
		w = a.useMemo(
			() => [
				{
					id: 'bannerUrl',
					accessorKey: 'bannerUrl',
					size: 80,
					header: () =>
						e.jsx('p', { className: 'column-title ml-2', children: 'Banner' }),
					cell: ({ getValue: s }) =>
						e.jsx('div', {
							className: 'flex items-center justify-center ml-2',
							children: e.jsx('img', {
								src: s() || '/placeholder-class.png',
								alt: 'Class Banner',
								className: 'w-10 h-10 rounded object-cover'
							})
						})
				},
				{
					id: 'name',
					accessorKey: 'name',
					size: 200,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Class Name' }),
					cell: ({ getValue: s }) =>
						e.jsx('span', {
							className: 'text-foreground font-medium',
							children: s()
						})
				},
				{
					id: 'status',
					accessorKey: 'status',
					size: 100,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Status' }),
					cell: ({ getValue: s }) => {
						const o = s()
						return e.jsx(A, {
							variant: o === 'active' ? 'default' : 'secondary',
							children: o.charAt(0).toUpperCase() + o.slice(1)
						})
					}
				},
				{
					id: 'subject',
					accessorKey: 'subject.name',
					size: 150,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Subject' }),
					cell: ({ getValue: s }) =>
						e.jsx('span', { className: 'text-foreground', children: s() })
				},
				{
					id: 'teacher',
					accessorKey: 'teacher.name',
					size: 150,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Teacher' }),
					cell: ({ getValue: s }) =>
						e.jsx('span', { className: 'text-foreground', children: s() })
				},
				{
					id: 'capacity',
					accessorKey: 'capacity',
					size: 100,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Capacity' }),
					cell: ({ getValue: s }) =>
						e.jsx('span', { className: 'text-foreground', children: s() })
				},
				{
					id: 'details',
					size: 140,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Details' }),
					cell: ({ row: s }) =>
						e.jsx(V, {
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
		z = B({
			columns: w,
			refineCoreProps: {
				resource: 'classes',
				pagination: { pageSize: 10, mode: 'server' },
				filters: { permanent: [...b, ...y, ...C] },
				sorters: { initial: [{ field: 'id', order: 'desc' }] }
			}
		})
	return e.jsxs(K, {
		children: [
			e.jsx(F, {}),
			e.jsx('h1', { className: 'page-title', children: 'Classes' }),
			e.jsxs('div', {
				className: 'intro-row',
				children: [
					e.jsx('p', {
						children: 'Manage your classes, subjects, and teachers.'
					}),
					e.jsxs('div', {
						className: 'actions-row',
						children: [
							e.jsxs('div', {
								className: 'search-field',
								children: [
									e.jsx(T, { className: 'search-icon' }),
									e.jsx(I, {
										type: 'text',
										placeholder: 'Search by name...',
										className: 'pl-10 w-full',
										value: r,
										onChange: (s) => f(s.target.value)
									})
								]
							}),
							e.jsxs('div', {
								className: 'flex flex-wrap gap-2 w-full sm:w-auto',
								children: [
									e.jsxs(u, {
										value: c,
										onValueChange: S,
										children: [
											e.jsx(h, {
												className: 'w-[180px]',
												children: e.jsx(p, { placeholder: 'Filter by subject' })
											}),
											e.jsxs(x, {
												children: [
													e.jsx(l, { value: 'all', children: 'All Subjects' }),
													N.map((s) =>
														e.jsx(l, { value: s.name, children: s.name }, s.id)
													)
												]
											})
										]
									}),
									e.jsxs(u, {
										value: t,
										onValueChange: g,
										children: [
											e.jsx(h, {
												className: 'w-[180px]',
												children: e.jsx(p, { placeholder: 'Filter by teacher' })
											}),
											e.jsxs(x, {
												children: [
													e.jsx(l, { value: 'all', children: 'All Teachers' }),
													v.map((s) =>
														e.jsx(l, { value: s.name, children: s.name }, s.id)
													)
												]
											})
										]
									}),
									e.jsx(q, { resource: 'classes' })
								]
							})
						]
					})
				]
			}),
			e.jsx(L, { table: z })
		]
	})
}
export { O as default }
