import { ChakraProvider } from '@chakra-ui/react';
import '../styles/globals.css';
import NProgress from 'nprogress';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head></Head>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </>
    );
}

export default MyApp;
