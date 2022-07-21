import Link from 'next/link'
import { DarkLayout } from '../components/layouts/DarLayout'
import { MianLayout } from '../components/layouts/MainLayout'

const AboutPage = () => {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={'title'}>
        Go to <Link href="/">Home!</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/index.tsx</code>
      </p>
    </>
  )
}

export default AboutPage

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MianLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MianLayout>
  )
}
