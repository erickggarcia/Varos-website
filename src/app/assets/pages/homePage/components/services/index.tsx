import Image from 'next/image'
import { Aside } from '@/app/assets/pages/homePage/components/aside-content'
import graphic from '@/app/assets/images/graphic.png'
import selecaoImage from '@/app/assets/images/Selecao-icon.svg'
import fatorImage from '@/app/assets/images/FATOR.svg'
import dividendoImage from '@/app/assets/images/Dividendos.svg'
import essencialImage from '@/app/assets/images/asideImages/essencial.svg'
import fillsImage from '@/app/assets/images/asideImages/FIIs.svg'
import smallCapsImage from '@/app/assets/images/asideImages/smallCaps.svg'

const walletImages = [
    { image: selecaoImage, name: 'Carteira Seleção' },
    { image: fatorImage, name: 'Carteira FATOR' },
    { image: dividendoImage, name: 'Carteira Dividendos' },
    { image: essencialImage, name: 'Carteira Essencial' },
    { image: fillsImage, name: 'Carteira de FIIs' },
    { image: smallCapsImage, name: 'Carteira Small Caps' },
]

export function Services() {
    return (
        <section className='mx-36 mt-48'>
            <article>
                <h2 className='text-[38px] font-bold w-[608px] leading-[45.6px]'>Simplifique seus investimentos e alcance seus objetivos</h2>
                <p className='w-[504px] mt-4 text-[18px] text-gray-300 font-medium'>Conteúdos preparados para trazer mais segurança, independente do seu nível.</p>
            </article>

            <div className='flex justify-between  mt-10'>
                <aside>
                    <Aside title='Carteiras' list={walletImages} height={`510px`} />
                </aside>
                {/**Essa parte será posteriormente movida para a pasta components/services */}
                <section className='w-[662px] justify-start h-[536px] bg-custom-gray-3 rounded-[32px] relative'>
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
                        <Image src={graphic} alt='' className='rounded-r-[32px] absolute bottom-0 right-[2px]' />
                    </article>
                </section>
            </div>
        </section>
    )
}