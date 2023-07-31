import { footerLinks } from '@/constans'
import Image from 'next/image'
import Link from 'next/link'
import SocialNav from './SocialNav';


type ColumnProps = {
  title: string,
  links: Array<string>;
}

const FooterColumn = ({ title, links }: ColumnProps ) => (
  <div className='footer_column'>
    <h4 className='font-semibold text-[#0d0c22]'>{title}</h4>
    <ul className='flex flex-col gap-2 font-normal'>
      {links.map((link) => ( 
      <Link 
        href='/' 
        key={link}
        className='link_hover transition py-1'
      >{link}</Link>))}

    </ul>

  </div>
)

const Footer = () => {
  return (
    <footer className='flexStart footer '>
      <div className='flex flex-col xl:flex-row gap-24 w-full  lg:max-w-8xl border-b  border-[#e7e7e9] py-20'>
        <div className='flex items-start flex-col'>
          <Image 
            src='/logo_pink.png'
            width={115}
            height={38}
            alt='Dribble'
            />
          <p className='text-start text-sm font-normal mt-5 max-w-xs'>
            Dribbble is the world’s leading community for creatives to share, grow, and get hired.
          </p>
          <SocialNav />
        </div>
        <div className='flex flex-wrap xl:flex-nowrap gap-12'>
          <FooterColumn title={footerLinks[0].title} links={footerLinks[0].links} />

        <div className='flex-1 flex flex-col gap-4'>
          <FooterColumn title={footerLinks[1].title} links={footerLinks[1].links} />
          <FooterColumn title={footerLinks[2].title} links={footerLinks[2].links} />
        </div>
        <FooterColumn title={footerLinks[3].title} links={footerLinks[3].links} />
        <div className='flex-1 flex flex-col gap-4'>
          <FooterColumn title={footerLinks[4].title} links={footerLinks[4].links} />
          <FooterColumn title={footerLinks[5].title} links={footerLinks[5].links} />
        </div>
        <FooterColumn title={footerLinks[6].title} links={footerLinks[6].links} />
        </div>
      </div>
      <div className='flexBetween footer_copyright lg:max-w-8xl m-auto py-10 text-[#6e6d7a]'>
        <p>@ 2023 Dribbble. All rights reserved.</p>
        <div className='flex gap-2 items-center'>
        <p >
          <span className='text-black font-semibold'>10,214</span> shots dribbbled
        </p>
        <Image
          src='/logo.png'
          width={25}
          height={25}
          alt='logo' />
        </div>
      </div>

    </footer>
  )
}

export default Footer