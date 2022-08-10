import React from 'react';
import ReactDOM from 'react-dom/client';
import { MantineProvider, DEFAULT_THEME } from '@mantine/core';
import App from './App';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<MantineProvider
			withNormalizeCSS
			withGlobalStyles
			withCSSVariables={import.meta.env.PROD}
			theme={{
				colorScheme: 'light',
				other: {
					'almost-white': 'hsl(0, 0%, 98%)',
					'medium-gray': 'hsl(0, 0%, 41%)',
					'almost-black': 'hsl(0, 0%, 8%)'
				},
				fontFamily: "'Epilogue', " + DEFAULT_THEME.fontFamily
			}}
		>
			<App />
		</MantineProvider>
	</React.StrictMode>
);
