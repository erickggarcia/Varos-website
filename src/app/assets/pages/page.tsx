import arrow from '@/app/assets/images/arrow-right.svg'
import bradvisors from '@/app/assets/images/bradvisors.svg'
import flashP from '@/app/assets/images/flashP.svg'
import valor from '@/app/assets/images/valor.svg'
import tc from '@/app/assets/images/tc.svg'
import bmcNews from '@/app/assets/images/bm-news.svg'
import neoFeed from '@/app/assets/images/neofeed.svg'
import graphic from '@/app/assets/images/graphic.png'
import codigoPY from '@/app/assets/images/CODIGO.svg'
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

import Image from 'next/image'
import { Aside } from '@/components/aside-content'

export function HomePage() {
    return (
        <main className='h-screen bg-black'>
            <section className='flex justify-between mx-36 mt-[153px]'>
                <article className='w-[564px]'>
                    <h1 className='text-[64px] font-extrabold leading-[70.4px]'>
                        Investir de forma mais inteligente passa por aqui.
                    </h1>
                    <p className='mt-6 w-[469px]'>
                        Fazemos de tudo para que você possa conquistar seus sonhos da melhor forma possível.
                    </p>

                    <button className="mt-8 bg-custom-green px-12 py-4 rounded-[48px] flex items-center gap-x-2.5 text-lg text-custom-green-2 font-semibold tracking-[0.72px]">
                        Comprar agora
                        <Image src={arrow} height={24} width={24} alt='' />
                    </button>
                    <div className='mt-[88px] flex items-center justify-center bg-gradient-to-r from-gray-800 h-[76px] w-[1290px] rounded-3xl mr-[74px]'>
                        <div className='flex justify-start items-start pl-[46px] pr-8 pt-[27px] pb-[19px] gap-[90px] w-[1288px] bg-black rounded-3xl'>
                            <p>Visto em</p>
                            <Image src={bradvisors} height={26} width={67} alt='' />
                            <Image src={flashP} height={26} width={25} alt='' />
                            <Image src={valor} height={26} width={77} alt='' />
                            <Image src={tc} height={28} width={28} alt='' />
                            <Image src={bmcNews} height={28} width={29} alt='' />
                            <Image src={neoFeed} height={26} width={141} alt='' />

                        </div>

                    </div>
                </article>
                <article className='w-[325px] h-[371px] flex flex-col flex-shrink-0 mr-20'>
                    <div className=' mt-[40px] flex items-center justify-start border border-gray-600 w-[270px] h-[62px] rounded-[16px] py-2 pr-[57px] pl-[13px] gap-[19px] bg-blue-500 z-10 relative' >
                        <div className='w-20 h-[100px] z-0 relative right-[-50px] rounded-full bg-white'></div>
                        <div className='w-[51px] h-[46px] flex items-center justify-center border border-gray-600 rounded-lg'>
                            <Image src={fatorImage} height={21} width={21} alt='' />
                        </div>
                        <p>Carteira Fator</p>
                    </div>
                    <div className=' mt-[40px] pl-[13px] flex items-center justify-start border border-gray-600 w-[291px] h-[62px] rounded-[16px] gap-[19px] self-end'>
                        <div className='w-[51px] h-[46px] flex items-center justify-center border border-gray-600 rounded-lg'>
                            <Image src={dividendoImage} height={20} width={24} alt='' />
                        </div>
                        <p>Carteira de Dividendos</p>
                    </div>
                    <div className=' mt-[40px] pl-[13px] flex items-center justify-start border border-gray-600 w-[229px] h-[62px] rounded-[16px] gap-[19px] '>
                        <div className='w-[51px] h-[46px] flex items-center justify-center border border-gray-600 rounded-lg'>
                            <Image src={codigoPY} height={33} width={40} alt='' />
                        </div>
                        <p>Código<span className='text-turquoise'>.Py</span></p>
                    </div>
                </article>
            </section>
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
                            <Image src={graphic} alt='' className='rounded-[32px] absolute bottom-0 right-[2px]' />
                        </article>
                    </section>
                </div>
            </section>
        </main >
    )
}