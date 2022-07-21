import type { NextPage } from 'next'
import Link from 'next/link'
import { MianLayout } from '../components/layouts/MainLayout'

const ContactPage: NextPage = () => {
  return (
    <MianLayout>
      <>
        <h1>Contact Page</h1>
        <h1 className={'title'}>
          Go to <Link href="/">Home!</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.tsx</code>
        </p>
      </>
    </MianLayout>
  )
}

export default ContactPage
