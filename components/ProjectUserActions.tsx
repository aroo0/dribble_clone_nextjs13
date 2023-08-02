import Image from 'next/image'


const ProjectUserActions = ({ applyClass }: { applyClass?: string}) => {
  return (
    <>
    <button
        type='button'
        className={`${applyClass === 'small' ? 'p-2' : 'p-3'} flexCenter  bg-white border border-[#e7e7e9] hover:border-[#dbdbde] rounded-lg transition-colors duration-300`}>
            <Image
                src='/MaterialSymbolsFavoriteOutlineRounded.svg'
                width={18}
                height={18} 
                alt='like' />
    </button>
    <button
        type='button'
        className={`${applyClass === 'small' ? 'p-2' : 'p-3'} flexCenter  bg-white border border-[#e7e7e9] hover:border-[#dbdbde] rounded-lg transition-colors duration-300`}>
            <Image
                src='/MaterialSymbolsBookmarkOutline.svg'
                width={18} 
                height={18} 
                alt='mark' />
    </button>
    </>
  )
}

export default ProjectUserActions