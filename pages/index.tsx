import type { NextPage } from 'next'
import Link from 'next/link'
import { MianLayout } from '../components/layouts/MainLayout'

const Home: NextPage = () => {
  return (
    <MianLayout>
      <>
        <h1>Home Page</h1>
        <h1 className={'title'}>
          Go to <Link href="/about">About!</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.tsx</code>
        </p>
      </>
    </MianLayout>
  )
}

export default Home
