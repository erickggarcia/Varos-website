import Image from 'next/image'
import arrow from '@/app/assets/images/arrow-right.svg'
import bradvisors from '@/app/assets/images/bradvisors.svg'
import flashP from '@/app/assets/images/flashP.svg'
import valor from '@/app/assets/images/valor.svg'
import tc from '@/app/assets/images/tc.svg'
import bmcNews from '@/app/assets/images/bm-news.svg'
import neoFeed from '@/app/assets/images/neofeed.svg'
import codigoPY from '@/app/assets/images/CODIGO.svg'
import fatorImage from '@/app/assets/images/FATOR.svg'
import dividendoImage from '@/app/assets/images/Dividendos.svg'

export function BuyNow() {
    return (
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
            <article className='w-[325px] h-[371px] flex flex-col flex-shrink-0 mr-32'>
                <div className=' mt-[40px] flex items-center justify-start border border-gray-600 w-[270px] h-[62px] rounded-[16px] py-2 pr-[57px] pl-[13px] gap-[19px] relative z-50' >
                    <div className='w-20 h-[100px] relative right-[-50px] rounded-full bg-white'></div>
                    <div className='relative w-[51px] h-[46px] flex items-center justify-center border border-gray-600 rounded-lg z-10'>
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
    )
}