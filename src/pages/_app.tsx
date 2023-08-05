import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head'

import '@styles/globals.css'

type AppOwnProps = { example: string }

export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <>
      <Head>
        <title>Musicle</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

MyApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const ctx = await App.getInitialProps(context)

  return { ...ctx, example: 'data' }
}