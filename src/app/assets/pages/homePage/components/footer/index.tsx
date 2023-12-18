import Image from "next/image"
import varosIcons from '@/app/assets/images/varosIcon.svg'
import logo from '@/app/assets/images/logo.svg'

export function Footer() {
    return (
        <footer className='mx-[120px]'>
            <section className='flex w-full py-8 gap-x-96'>
                <div className="flex  flex-col gap-[10px] ">
                    <div className='bg-white w-[50px] h-[50px] py-[17px] px-[18px] rounded-[8px]'>
                        <Image src={varosIcons} alt='' width={22} height={40} />
                    </div>
                    <Image src={logo} alt='' height={13} width={50} />

                    <ul className='mt-52'>
                        <li className='font-semibold text-[14px]'>Varos 2023</li>
                        <li className='font-semibold text-[14px]'>Todos os direitos reservados</li>
                    </ul>
                </div>

                <div className='flex w-[858px] gap-14 justify-start'>
                    <ul className='flex flex-col gap-4'>
                        <h4 className='text-[24px] font-bold'>Cursos</h4>
                        <li className='font-medium text-[16px]'>Valuation do Zero ao Avançado 2.0</li>
                        <li className='font-medium text-[16px]' >Código.py</li>
                        <li className='font-medium text-[16px]'>Minicurso Reels</li>
                        <li className='font-medium text-[16px]'>Enciclopédia de FII</li>
                    </ul>

                    <ul className='flex flex-col gap-4'>
                        <h4 className='text-[24px] font-bold'>
                            Carteiras
                        </h4>
                        <li className='font-medium text-[16px]'>Carteira FATOR</li>
                        <li className='font-medium text-[16px]'>Carteira Seleção</li>
                        <li className='font-medium text-[16px]'>Carteira Essencial</li>
                        <li className='font-medium text-[16px]'>Carteira Small Caps</li>
                        <li className='font-medium text-[16px]'>Carteira Dividendos</li>
                        <li className='font-medium text-[16px]'>Carteira de FIIs</li>
                    </ul>

                    <ul className='flex flex-col gap-4'>
                        <h4 className='text-[24px] font-bold'>Sobre</h4>
                        <li className='font-medium text-[16px]'>Quem somos</li>
                    </ul>

                    <ul className='flex flex-col gap-4'>
                        <h4 className='text-[24px] font-bold'>Redes Sociais</h4>
                        <li className='font-medium text-[16px]'>Instagram</li>
                        <li className='font-medium text-[16px]'>Twitter</li>
                        <li className='font-medium text-[16px]'>Youtube</li>
                    </ul>
                </div>
            </section>
        </footer>
    )
}