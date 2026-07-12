import { f as t, m as e, ak as n, al as d } from './vendor_react-DuD2GJTP.js'
import { B as c } from './badge-CNMNvHZ7.js'
import { I as m } from './index-_sfPXony.js'
import { L as p, C as u } from './list-view-Ch2JzEfM.js'
import { B as h } from './breadcrumb-BtTtclC3.js'
import { S as x, D as j } from './show-OWSn2mOT.js'
import './vendor_rest-CKJ42Ze8.js'
import './vendor_refine-BBcHqFYP.js'
import './vendor_ui-DyYjmyB8.js'
import './select-CDmhZWrE.js'
const D = () => {
	const [r, i] = t.useState(''),
		o = t.useMemo(
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
							? e.jsx(c, { children: a })
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
						e.jsx('p', { className: 'column-title', children: 'Name' }),
					cell: ({ getValue: s }) =>
						e.jsx('span', { className: 'text-foreground', children: s() }),
					filterFn: 'includesString'
				},
				{
					id: 'totalSubjects',
					accessorKey: 'totalSubjects',
					size: 160,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Subjects' }),
					cell: ({ getValue: s }) => {
						const a = s()
						return e.jsx(c, { variant: 'secondary', children: a ?? 0 })
					}
				},
				{
					id: 'description',
					accessorKey: 'description',
					size: 320,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Description' }),
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
						e.jsx(x, {
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
		l = n({
			columns: o,
			refineCoreProps: {
				resource: 'departments',
				pagination: { pageSize: 10, mode: 'server' },
				filters: {
					permanent: [
						...(r
							? [
									{ field: 'name', operator: 'contains', value: r },
									{ field: 'code', operator: 'contains', value: r }
								]
							: [])
					]
				},
				sorters: { initial: [{ field: 'id', order: 'desc' }] }
			}
		})
	return e.jsxs(p, {
		children: [
			e.jsx(h, {}),
			e.jsx('h1', { className: 'page-title', children: 'Departments' }),
			e.jsxs('div', {
				className: 'intro-row',
				children: [
					e.jsx('p', {
						children: 'Quick access to essential metrics and management tools.'
					}),
					e.jsxs('div', {
						className: 'actions-row',
						children: [
							e.jsxs('div', {
								className: 'search-field',
								children: [
									e.jsx(d, { className: 'search-icon' }),
									e.jsx(m, {
										type: 'text',
										placeholder: 'Search by name or code...',
										className: 'pl-10 w-full',
										value: r,
										onChange: (s) => i(s.target.value)
									})
								]
							}),
							e.jsx(u, { resource: 'departments' })
						]
					})
				]
			}),
			e.jsx(j, { table: l })
		]
	})
}
export { D as default }
