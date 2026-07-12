import { f as t, m as e, ak as p, al as h } from './vendor_react-DuD2GJTP.js'
import { S as j, a as x, b as f, c as S, d as r } from './select-CDmhZWrE.js'
import { B as c } from './badge-CNMNvHZ7.js'
import { I as N, D as b } from './index-_sfPXony.js'
import { L as v, C as g } from './list-view-Ch2JzEfM.js'
import { B as y } from './breadcrumb-BtTtclC3.js'
import { S as D, D as w } from './show-OWSn2mOT.js'
import './vendor_rest-CKJ42Ze8.js'
import './vendor_refine-BBcHqFYP.js'
import './vendor_ui-DyYjmyB8.js'
const L = () => {
	const [a, i] = t.useState(''),
		[l, n] = t.useState('all'),
		o = t.useMemo(
			() => [
				{
					id: 'code',
					accessorKey: 'code',
					size: 100,
					header: () =>
						e.jsx('p', { className: 'column-title ml-2', children: 'Code' }),
					cell: ({ getValue: s }) => e.jsx(c, { children: s() })
				},
				{
					id: 'name',
					accessorKey: 'name',
					size: 200,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Name' }),
					cell: ({ getValue: s }) =>
						e.jsx('span', { className: 'text-foreground', children: s() }),
					filterFn: 'includesString'
				},
				{
					id: 'department',
					accessorKey: 'department.name',
					size: 150,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Department' }),
					cell: ({ getValue: s }) =>
						e.jsx(c, { variant: 'secondary', children: s() })
				},
				{
					id: 'description',
					accessorKey: 'description',
					size: 300,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Description' }),
					cell: ({ getValue: s }) =>
						e.jsx('span', { className: 'truncate line-clamp-2', children: s() })
				},
				{
					id: 'details',
					size: 140,
					header: () =>
						e.jsx('p', { className: 'column-title', children: 'Details' }),
					cell: ({ row: s }) =>
						e.jsx(D, {
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
		d = l === 'all' ? [] : [{ field: 'department', operator: 'eq', value: l }],
		m = a ? [{ field: 'name', operator: 'contains', value: a }] : [],
		u = p({
			columns: o,
			refineCoreProps: {
				resource: 'subjects',
				pagination: { pageSize: 10, mode: 'server' },
				filters: { permanent: [...d, ...m] },
				sorters: { initial: [{ field: 'id', order: 'desc' }] }
			}
		})
	return e.jsxs(v, {
		children: [
			e.jsx(y, {}),
			e.jsx('h1', { className: 'page-title', children: 'Subjects' }),
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
									e.jsx(h, { className: 'search-icon' }),
									e.jsx(N, {
										type: 'text',
										placeholder: 'Search by name...',
										className: 'pl-10 w-full',
										value: a,
										onChange: (s) => i(s.target.value)
									})
								]
							}),
							e.jsxs('div', {
								className: 'flex gap-2 w-full sm:w-auto',
								children: [
									e.jsxs(j, {
										value: l,
										onValueChange: n,
										children: [
											e.jsx(x, {
												className: '',
												children: e.jsx(f, {
													placeholder: 'Filter by department'
												})
											}),
											e.jsxs(S, {
												children: [
													e.jsx(r, {
														value: 'all',
														children: 'All Departments'
													}),
													b.map((s) =>
														e.jsx(
															r,
															{ value: s.value, children: s.label },
															s.value
														)
													)
												]
											})
										]
									}),
									e.jsx(g, { resource: 'subjects' })
								]
							})
						]
					})
				]
			}),
			e.jsx(w, { table: u })
		]
	})
}
export { L as default }
