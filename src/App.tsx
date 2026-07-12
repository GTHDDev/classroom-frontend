import { Authenticated, Refine } from '@refinedev/core'
import { DevtoolsProvider } from '@refinedev/devtools'
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar'
import { Suspense, lazy } from 'react'

import routerProvider, {
	DocumentTitleHandler,
	NavigateToResource,
	UnsavedChangesNotifier
} from '@refinedev/react-router'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router'
import './App.css'
import { Toaster } from './components/refine-ui/notification/toaster'
import { useNotificationProvider } from './components/refine-ui/notification/use-notification-provider'
import { ThemeProvider } from './components/refine-ui/theme/theme-provider'
import {
	BookOpen,
	Building2,
	ClipboardCheck,
	GraduationCap,
	Home,
	Users
} from 'lucide-react'
import { Layout } from './components/refine-ui/layout/layout'

import { dataProvider } from './providers/data'
import { authProvider } from './providers/auth'
import { Login } from './pages/login'
import { Register } from './pages/register'

const Dashboard = lazy(() => import('./pages/Dashboard'))
const SubjectsList = lazy(() => import('./pages/subjects/List'))
const SubjectsCreate = lazy(() => import('./pages/subjects/Create'))
const SubjectsShow = lazy(() => import('./pages/subjects/show'))
const ClassesList = lazy(() => import('./pages/classes/list'))
const ClassesCreate = lazy(() => import('./pages/classes/create'))
const ClassesShow = lazy(() => import('./pages/classes/show'))
const DepartmentsList = lazy(() => import('./pages/departments/list'))
const DepartmentsCreate = lazy(() => import('./pages/departments/create'))
const DepartmentShow = lazy(() => import('./pages/departments/show'))
const FacultyList = lazy(() => import('./pages/faculty/list'))
const FacultyShow = lazy(() => import('./pages/faculty/show'))
const EnrollmentsCreate = lazy(() => import('./pages/enrollments/create'))
const EnrollmentsJoin = lazy(() => import('./pages/enrollments/join'))
const EnrollmentConfirm = lazy(() => import('./pages/enrollments/confirm'))

function App() {
	return (
		<BrowserRouter>
			<RefineKbarProvider>
				<ThemeProvider>
					<DevtoolsProvider>
						<Refine
							dataProvider={dataProvider}
							authProvider={authProvider}
							notificationProvider={useNotificationProvider()}
							routerProvider={routerProvider}
							options={{
								syncWithLocation: true,
								warnWhenUnsavedChanges: true,
								projectId: 'AIJwJa-6HALX1-eNJXj3'
							}}
							resources={[
								{
									name: 'dashboard',
									list: '/',
									meta: {
										label: 'Home',
										icon: <Home />
									}
								},
								{
									name: 'subjects',
									list: '/subjects',
									create: '/subjects/create',
									show: '/subjects/show/:id',
									meta: {
										label: 'Subjects',
										icon: <BookOpen />
									}
								},
								{
									name: 'departments',
									list: '/departments',
									show: '/departments/show/:id',
									create: '/departments/create',
									meta: {
										label: 'Departments',
										icon: <Building2 />
									}
								},
								{
									name: 'users',
									list: '/faculty',
									show: '/faculty/show/:id',
									meta: {
										label: 'Faculty',
										icon: <Users />
									}
								},
								{
									name: 'enrollments',
									list: '/enrollments/create',
									create: '/enrollments/create',
									meta: {
										label: 'Enrollments',
										icon: <ClipboardCheck />
									}
								},
								{
									name: 'classes',
									list: '/classes',
									create: '/classes/create',
									show: '/classes/show/:id',
									meta: {
										label: 'Classes',
										icon: <GraduationCap />
									}
								}
							]}
						>
							<Suspense fallback={<div>Loading...</div>}>
								<Routes>
									<Route
										element={
											<Authenticated key='public-routes' fallback={<Outlet />}>
												<NavigateToResource fallbackTo='/' />
											</Authenticated>
										}
									>
										<Route path='/login' element={<Login />} />
										<Route path='/register' element={<Register />} />
									</Route>

									<Route
										element={
											<Authenticated key='private-routes' fallback={<Login />}>
												<Layout>
													<Outlet />
												</Layout>
											</Authenticated>
										}
									>
										<Route path='/' element={<Dashboard />} />

										<Route path='subjects'>
											<Route index element={<SubjectsList />} />
											<Route path='create' element={<SubjectsCreate />} />
											<Route path='show/:id' element={<SubjectsShow />} />
										</Route>

										<Route path='departments'>
											<Route index element={<DepartmentsList />} />
											<Route path='create' element={<DepartmentsCreate />} />
											<Route path='show/:id' element={<DepartmentShow />} />
										</Route>

										<Route path='faculty'>
											<Route index element={<FacultyList />} />
											<Route path='show/:id' element={<FacultyShow />} />
										</Route>

										<Route path='enrollments'>
											<Route path='create' element={<EnrollmentsCreate />} />
											<Route path='join' element={<EnrollmentsJoin />} />
											<Route path='confirm' element={<EnrollmentConfirm />} />
										</Route>

										<Route path='classes'>
											<Route index element={<ClassesList />} />
											<Route path='create' element={<ClassesCreate />} />
											<Route path='show/:id' element={<ClassesShow />} />
										</Route>
									</Route>
								</Routes>
							</Suspense>
							<Toaster />
							<RefineKbar />
							<UnsavedChangesNotifier />
							<DocumentTitleHandler />
						</Refine>
					</DevtoolsProvider>
				</ThemeProvider>
			</RefineKbarProvider>
		</BrowserRouter>
	)
}

export default App
