import Image from "next/image"
import logo from '@/app/assets/images/logo.svg'
import user from '@/app/assets/images/User.svg'
import shoppingCart from '@/app/assets/images/shopping-cart.svg'



export function Nav() {
    return (
        <section className='py-2.5 px-36 flex justify-between w-full items-center'>
            <nav className='flex w-[680px] gap-x-20 '>
                <Image src={logo} alt='' width={80} height={15} />
                <ul className='flex gap-x-14 w-full items-center text-sm'>
                    <li><a href="">Produtos</a></li>
                    <li><a href="">Blogs</a></li>
                    <li><a href="">Conteúdos</a></li>
                    <li><a href="">Quem somos</a></li>
                </ul>
            </nav>
            <article className='w-[334px]'>
                <ul className='flex w-full text-lg font-semibold gap-x-4 '>
                    <li className='mr-4'>
                        <a href="" className='flex gap-x-4 '>
                            <Image src={shoppingCart} alt='' width={24} height={25} />
                            Assinar Agora
                        </a>
                    </li>

                    <li>
                        <a href="" className='flex gap-x-4 '>
                            <Image src={user} alt='' width={24} height={25} />
                            Entrar
                        </a>
                    </li>
                </ul>
            </article>
        </section>
    )
}