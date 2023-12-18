import Image from 'next/image'
import selecaoImage from '@/app/assets/images/Selecao-icon.svg'
import graphic from '@/app/assets/images/graphic.png'

export function Services() {
    return (
        < section className='w-[662px] justify-start h-[620px] bg-custom-gray-3 rounded-[32px] relative' >
            <div className='flex ml-[25px] p-8 gap-4'>
                <Image src={selecaoImage} alt='' height={22} width={22} />
                <h3>Carteira Seleção</h3>
            </div>
            <article className='ml-[55px]'>
                <h1 className='w-[355px] text-[24px] font-semibold'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                </h1>
                <p className='w-[347px] mt-4 text-[16px]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                </p>
                <Image src={graphic} alt='' className='rounded-r-[32px] absolute bottom-0 right-[2px] w-[621px] h-[329px]' />
            </article>
        </section >
    )
}