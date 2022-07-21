import { CSSProperties, FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface ActiveLinkProps {
  titleText: string,
  mainUrl: string
}

const styles: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline'
}

export const ActiveLink: FC<ActiveLinkProps> = ({titleText, mainUrl}) => {

  const { asPath } = useRouter()

  return (
    <Link href={mainUrl}>
      <a style={ asPath === mainUrl ? styles : undefined}>{titleText}</a>
    </Link>
  )
}
