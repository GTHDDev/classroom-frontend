import * as Sentry from '@sentry/react'

Sentry.init({
	dsn: 'https://b4dcbd09897d847dfca6c5357923cb1a@o4507654496976896.ingest.us.sentry.io/4511821165166592',
	integrations: [
		Sentry.browserTracingIntegration(),
		Sentry.replayIntegration()
	],
	// Performance Monitoring
	tracesSampleRate: 1.0, //  Capture 100% of the transactions
	// Session Replay
	replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
	replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})
