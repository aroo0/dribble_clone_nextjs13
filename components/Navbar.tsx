import { NavLinks } from '@/constans'
import Image from 'next/image'
import Link from 'next/link'
import { getCurrentUser } from '@/lib/session'

import ProfileMenu from './ProfileMenu'
import AuthProviders from './AuthProviders'


const Navbar = async () => {
  const session = await getCurrentUser()


  return (
    <nav className='flexBetween navbar w-full'>
              <Link href='/'
                className='2xl:mx-auto 2xl:order-2'>
                <Image
                  src={'/logo_black.png'}
                  width={96}
                  height={43}
                  alt='Dribble'                  >
                  </Image>
            </Link>
        <div className='flexStart gap-10  2xl:w-2/5 2xl:order-1'>
            <ul className='xl:flex hidden text-small gap-7 link_hover'>
              {NavLinks.map((link) => ( 
                <Link href={link.href} key={link.key}>{link.text}</Link>
                ))}
            </ul>
        </div>

        <div className='flex gap-4 justify-items-end justify-end items-center 2xl:w-2/5 2xl:order-3'>
        
          { session?.user ? (
            <>
            <ProfileMenu  session={session}/>
              <Link href='/create-project'>
                Share Work
              </Link>
            </>
          ) : (
            <AuthProviders />
          )
        }


        </div>
    </nav>
  )
}

export default Navbar