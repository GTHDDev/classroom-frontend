import { aS as N, ay as C, m as s } from './vendor_react-DuD2GJTP.js'
import { B as l } from './badge-CNMNvHZ7.js'
import { C as n, a as r, b as t, c, B as i, S as p } from './index-_sfPXony.js'
import { S as u } from './show-view-CuToJDuQ.js'
import './vendor_rest-CKJ42Ze8.js'
import './vendor_refine-BBcHqFYP.js'
import './vendor_ui-DyYjmyB8.js'
import './breadcrumb-BtTtclC3.js'
const E = () => {
	var o, d, m, x, h
	const f = N(),
		a = C(),
		e = (o = f.state) == null ? void 0 : o.enrollment
	return e
		? s.jsxs(u, {
				className: 'class-view space-y-6',
				children: [
					s.jsxs(n, {
						children: [
							s.jsx(r, {
								children: s.jsx(t, { children: 'Enrollment Confirmed' })
							}),
							s.jsxs(c, {
								className: 'space-y-4',
								children: [
									s.jsx('p', {
										className: 'text-sm text-muted-foreground',
										children: 'You have been enrolled successfully.'
									}),
									s.jsxs('div', {
										className: 'flex flex-wrap gap-2',
										children: [
											e.department &&
												s.jsx(l, {
													variant: 'secondary',
													children: e.department.name
												}),
											e.subject &&
												s.jsx(l, {
													variant: 'outline',
													children: e.subject.name
												}),
											e.class &&
												s.jsx(l, { variant: 'outline', children: e.class.name })
										]
									})
								]
							})
						]
					}),
					s.jsxs(n, {
						children: [
							s.jsx(r, { children: s.jsx(t, { children: 'Class Details' }) }),
							s.jsxs(c, {
								className: 'space-y-3',
								children: [
									s.jsxs('div', {
										children: [
											s.jsx('p', {
												className: 'text-sm text-muted-foreground',
												children: 'Class'
											}),
											s.jsx('p', {
												className: 'text-base font-semibold',
												children:
													((d = e.class) == null ? void 0 : d.name) ?? 'Unknown'
											})
										]
									}),
									s.jsx(p, {}),
									s.jsxs('div', {
										children: [
											s.jsx('p', {
												className: 'text-sm text-muted-foreground',
												children: 'Teacher'
											}),
											s.jsx('p', {
												className: 'text-base font-semibold',
												children:
													((m = e.teacher) == null ? void 0 : m.name) ??
													'Unknown'
											}),
											s.jsx('p', {
												className: 'text-xs text-muted-foreground',
												children:
													((x = e.teacher) == null ? void 0 : x.email) ??
													'No email'
											})
										]
									}),
									s.jsx(p, {}),
									s.jsxs('div', {
										className: 'flex gap-2',
										children: [
											s.jsx(i, {
												onClick: () => a('/classes'),
												children: 'View Classes'
											}),
											((h = e.class) == null ? void 0 : h.id) &&
												s.jsx(i, {
													variant: 'outline',
													onClick: () => {
														var j
														return a(
															`/classes/show/${(j = e.class) == null ? void 0 : j.id}`
														)
													},
													children: 'Go to Class'
												})
										]
									})
								]
							})
						]
					})
				]
			})
		: s.jsx(u, {
				className: 'class-view',
				children: s.jsxs(n, {
					children: [
						s.jsx(r, { children: s.jsx(t, { children: 'Enrollment' }) }),
						s.jsxs(c, {
							children: [
								s.jsx('p', {
									className: 'text-sm text-muted-foreground',
									children: 'No enrollment details found.'
								}),
								s.jsx(i, {
									className: 'mt-4',
									onClick: () => a('/classes'),
									children: 'Browse Classes'
								})
							]
						})
					]
				})
			})
}
export { E as default }
