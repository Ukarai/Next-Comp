import Head from 'next/head'
import LandingPage from './landing-page'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Trampoline Event Manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <LandingPage />
      </main>
    </>
  )
}
