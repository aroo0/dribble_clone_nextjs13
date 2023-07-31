import Image from 'next/image'

const SocialNav = () => {
  return (
    <div className='flex gap-4 items-center py-8'>
        <Image
            src='/socials/dribbble-icon.svg'
            width={18}
            height={18}
            alt='dribble'
            className='opacity-80 hover:opacity-100 transition_opacity'
        />
        <Image
            src='/socials/PhTwitterLogoFill.svg'
            width={20}
            height={20}
            alt='dribble'
            className='opacity-80 hover:opacity-100 transition_opacity'
        />
        <Image
            src='/socials/BxBxlFacebookSquare.svg'
            width={20}
            height={20}
            alt='dribble'
            className='opacity-80 hover:opacity-100 transition_opacity'
        />
        <Image
            src='/socials/PhInstagramLogo.svg'
            width={20}
            height={20}
            alt='dribble'
            className='opacity-80 hover:opacity-100 transition_opacity'
        />
        <Image
            src='/socials/MdiPinterest.svg'
            width={20}
            height={20}
            alt='dribble'
            className='opacity-80 hover:opacity-100 transition_opacity'
        />


    </div>
  )
}

export default SocialNav