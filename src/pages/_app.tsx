import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Musicle',
  description: 'Generated by create next app',
}

type AppOwnProps = { example: string }

export default function MyApp({
  Component,
  pageProps,
  example,
}: AppProps & AppOwnProps) {
  return (
    <>
      <p>Data: {example}</p>
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