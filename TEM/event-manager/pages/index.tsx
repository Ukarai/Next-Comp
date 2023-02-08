import Head from 'next/head'
import { CurrentEventWrapper } from '../context/current-event-context'
import LandingPage from './landing-page'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Trampoline Event Manager" />
        <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1" />
      </Head>
      <main>
        <CurrentEventWrapper>
          <LandingPage />
        </CurrentEventWrapper>
      </main>
    </>
  )
}
