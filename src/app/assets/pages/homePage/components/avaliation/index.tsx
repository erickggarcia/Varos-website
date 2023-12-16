import Image from 'next/image'
import quote from '@/app/assets/images/quote.svg'
import founder1 from '@/app/assets/images/founders/Brenno5.png'
import founder2 from '@/app/assets/images/founders/DSC03149.png'
import founder3 from '@/app/assets/images/founders/foto1.png'

export function Avaliation() {
    return (
        <section className='flex justify-between items-center mt-[202px] ml-36 mr-[120px] relative gap-[77px]'>
            <div>
                <h1 className='w-[420px] text-[38px] font-bold leading-[45.6px]'>
                    Didática de verdade
                </h1>
                <p className='text-[18px] font-bold leading-[21.6px] mt-2'>
                    Garantindo seu aprendizado
                </p>
                <article className='mt-20 bg-custom-gray-2 flex flex-col justify-center items-center h-[328px] w-[368px] rounded-[24px] border border-gray-900 relative z-50'>
                    <div className='flex justify-start w-full'>
                        <Image className='ml-[24px]' src={quote} alt='' width={21} height={23} />
                    </div>
                    <blockquote className='w-[276px] ml-[14px] text-[18px] font-medium leading-[21.6px] text-gray-400'>
                        Conteúdos preparados para trazer mais segurança, independente do seu nível. Conteúdos preparados para trazer mais segurança, independente do seu nível.Conteúdos preparados para trazer mais segurança, independente do seu nível.
                    </blockquote>
                    <div className='flex w-full justify-start mt-[22px]'>
                        <cite className='ml-[50px] text-gray-200 italic font-medium'>Assinante VAROS</cite>
                    </div>
                </article>

                {/** Aqui vai ser outra citação, só para ver como fica */}

                <article className='mt-20 bg-custom-gray-2 flex flex-col justify-center items-center h-[328px] w-[368px] rounded-[24px] border border-gray-900 absolute top-36 left-36 opacity-[0.3]'>
                    <div className='flex justify-start w-full'>
                        <Image className='ml-[24px]' src={quote} alt='' width={21} height={23} />
                    </div>
                    <blockquote className='w-[276px] ml-[14px] text-[18px] font-medium leading-[21.6px] text-gray-400'>
                        Conteúdos preparados para trazer mais segurança, independente do seu nível. Conteúdos preparados para trazer mais segurança, independente do seu nível.Conteúdos preparados para trazer mais segurança, independente do seu nível.
                    </blockquote>
                    <div className='flex w-full justify-start mt-[22px]'>
                        <cite className='ml-[50px] text-gray-200 italic font-medium'>Assinante VAROS</cite>
                    </div>
                </article>
            </div>

            <div className='flex items-start flex-col w-[564px] h-[573px] gap-[73px]'>
                <Image className='relative z-20 left-20 top-[85px]' src={founder1} alt='foto do fundador' height={300} width={300} />
                <Image className='absolute z-50 top-10 right-1' src={founder2} alt='foto do fundador' height={240} width={240} />
                <Image className='absolute top-8 right-36' src={founder3} alt='foto do fundador' height={160} width={160} />

                <div className='w-full flex justify-end gap-x-2 mt-[70px]'>
                    <div className=' flex items-center justify-end bg-gradient-to-r from-gray-800 h-[110px] w-[466px] rounded-3xl'>
                        <div className='flex h-[108px] justify-center items-center w-[465px] bg-black rounded-3xl gap-x-8 text-center'>
                            <div className='w-[106px] h-[65px]'>
                                <h3 className='text-[18px] text-gray-300'>+ 1000</h3>
                                <p className='text-[14px]'>Nota média geral das aulas</p>
                            </div>
                            <div className='w-[104px] h-[65px]'>
                                <h3 className='text-[18px] text-custom-green-2'>4,8/5</h3>
                                <p className='text-[14px]' >Nota média geral das aulas</p>
                            </div>
                            <div className='w-[80px] h-[65px] text-gray-300'>
                                <h3 className='text-[18px]'>10k +</h3>
                                <p className='text-[14px]'>Comunidade</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
