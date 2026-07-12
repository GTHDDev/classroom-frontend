import {
	as as d,
	f as c,
	m as e,
	ak as h,
	al as u
} from './vendor_react-DuD2GJTP.js'
import { B as p } from './badge-CNMNvHZ7.js'
import { A as x, d as f, e as j, I as g } from './index-_sfPXony.js'
import { L as N } from './list-view-Ch2JzEfM.js'
import { B as v } from './breadcrumb-BtTtclC3.js'
import { S as y, D as b } from './show-OWSn2mOT.js'
import './vendor_rest-CKJ42Ze8.js'
import './vendor_refine-BBcHqFYP.js'
import './vendor_ui-DyYjmyB8.js'
import './select-CDmhZWrE.js'
const P = () => {
		const [t] = d(),
			[s, r] = c.useState(t.get('search') ?? ''),
			o = c.useMemo(
				() => [
					{
						id: 'name',
						accessorKey: 'name',
						size: 220,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Name' }),
						cell: ({ row: a, getValue: m }) => {
							const l = m(),
								i = a.original.image
							return e.jsxs('div', {
								className: 'flex items-center gap-3',
								children: [
									e.jsxs(x, {
										children: [
											i && e.jsx(f, { src: i, alt: l }),
											e.jsx(j, { children: S(l) })
										]
									}),
									e.jsx('span', { className: 'text-foreground', children: l })
								]
							})
						}
					},
					{
						id: 'email',
						accessorKey: 'email',
						size: 240,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Email' }),
						cell: ({ getValue: a }) =>
							e.jsx('span', { className: 'text-foreground', children: a() })
					},
					{
						id: 'role',
						accessorKey: 'role',
						size: 120,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Role' }),
						cell: ({ getValue: a }) => e.jsx(p, { children: a() })
					},
					{
						id: 'details',
						size: 140,
						header: () =>
							e.jsx('p', { className: 'column-title', children: 'Details' }),
						cell: ({ row: a }) =>
							e.jsx(y, {
								resource: 'users',
								recordItemId: a.original.id,
								variant: 'outline',
								size: 'sm',
								children: 'View'
							})
					}
				],
				[]
			),
			n = h({
				columns: o,
				refineCoreProps: {
					resource: 'users',
					pagination: { pageSize: 10, mode: 'server' },
					filters: {
						permanent: [
							{ field: 'role', operator: 'eq', value: 'teacher' },
							...(s
								? [{ field: 'search', operator: 'contains', value: s }]
								: [])
						]
					},
					sorters: { initial: [{ field: 'id', order: 'desc' }] }
				}
			})
		return e.jsxs(N, {
			children: [
				e.jsx(v, {}),
				e.jsx('h1', { className: 'page-title', children: 'Faculty' }),
				e.jsxs('div', {
					className: 'intro-row',
					children: [
						e.jsx('p', { children: 'Browse and manage faculty members.' }),
						e.jsx('div', {
							className: 'actions-row',
							children: e.jsxs('div', {
								className: 'search-field',
								children: [
									e.jsx(u, { className: 'search-icon' }),
									e.jsx(g, {
										type: 'text',
										placeholder: 'Search by name or email...',
										className: 'pl-10 w-full',
										value: s,
										onChange: (a) => r(a.target.value)
									})
								]
							})
						})
					]
				}),
				e.jsx(b, { table: n })
			]
		})
	},
	S = (t = '') => {
		var r
		const s = t.trim().split(' ')
		return s.length === 0
			? ''
			: s.length === 1
				? (((r = s[0][0]) == null ? void 0 : r.toUpperCase()) ?? '')
				: `${s[0][0] ?? ''}${s[s.length - 1][0] ?? ''}`.toUpperCase()
	}
export { P as default }
