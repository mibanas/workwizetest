import Link from 'next/link'

const Logo = () => {
  return (
    <Link href={'/'} className='flex items-end gap-2'>
        <div className='capitalize text-black text-xl font-bold tracking-wide'>LOGO</div>
    </Link>
  )
}

export default Logo