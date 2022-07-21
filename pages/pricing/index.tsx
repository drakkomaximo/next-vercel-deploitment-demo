import type { NextPage } from 'next'
import Link from 'next/link'
import { MianLayout } from '../../components/layouts/MainLayout'

const PricingPage: any = () => {
  return (
    <>
      <h1>Pricing Page</h1>
      <h1 className={'title'}>
        Go to <Link href="/">Home!</Link>
      </h1>

      <p className={'description'}>
        Get started by editing{' '}
        <code className={'code'}>pages/Pricing.tsx</code>
      </p>
    </>
  )
}

export default PricingPage

PricingPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MianLayout>
        {page}
    </MianLayout>
  )
}