import { ChakraProvider } from '@chakra-ui/react';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { Client, HydrationProvider } from 'react-hydration-provider';
import { I18nextProvider } from 'react-i18next';
import 'react-multi-carousel/lib/styles.css';
import { Provider } from 'react-redux';
import i18n from '../i18n';
import AuthProvider from '../provider/auth.provider';
import { store } from '../store/store';
import '../styles/globals.css';
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	Router.events.on('routeChangeStart', () => {
		NProgress.start();
	});
	Router.events.on('routeChangeComplete', () => {
		NProgress.done();
	});

	return (
		<HydrationProvider>
			<Provider store={store}>
				<SessionProvider session={session}>
					<I18nextProvider i18n={i18n}>
						<ChakraProvider>
							<Client>
								<AuthProvider>
									<Component {...pageProps} />
								</AuthProvider>
							</Client>
						</ChakraProvider>
					</I18nextProvider>
				</SessionProvider>
			</Provider>
		</HydrationProvider>
	);
}

export default MyApp;
