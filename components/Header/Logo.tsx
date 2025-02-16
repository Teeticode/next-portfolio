import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/">
      <Image src="/teetilogo.png" width={100} height={100} priority alt='logo'/>
    </Link>
  )
}

export default Logo