import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'

const style = {
    color: '#0070f3',
    textDecoration: 'underlin'
}

interface Props {
  text: string;
  href: string;
}

const ActiveLink = ( { text, href } ) => {

    const { asPath }  = useRouter();
    
  return (
   <Link href={ href }>
    <a style={ asPath === href ? style : null }>{ text }</a>
    </Link>
  )
}

export default ActiveLink