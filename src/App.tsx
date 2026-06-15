import { GitHubBanner, Refine } from '@refinedev/core'
import { DevtoolsPanel, DevtoolsProvider } from '@refinedev/devtools'
import { RefineKbar, RefineKbarProvider } from '@refinedev/kbar'

import routerProvider, {
	DocumentTitleHandler,
	UnsavedChangesNotifier
} from '@refinedev/react-router'
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import { Toaster } from './components/refine-ui/notification/toaster'
import { useNotificationProvider } from './components/refine-ui/notification/use-notification-provider'
import { ThemeProvider } from './components/refine-ui/theme/theme-provider'
import { dataProvider } from './providers/data'
import Dashboard from './pages/dashboard'
import { Home } from 'lucide-react'

function App() {
	return (
		<BrowserRouter>
			<GitHubBanner />
			<RefineKbarProvider>
				<ThemeProvider>
					<DevtoolsProvider>
						<Refine
							dataProvider={dataProvider}
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
								}
							]}
						>
							<Routes>
								<Route index element={<Dashboard />} />
							</Routes>
							<Toaster />
							<RefineKbar />
							<UnsavedChangesNotifier />
							<DocumentTitleHandler />
						</Refine>
						<DevtoolsPanel />
					</DevtoolsProvider>
				</ThemeProvider>
			</RefineKbarProvider>
		</BrowserRouter>
	)
}

export default App
// export default App
