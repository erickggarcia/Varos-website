import { MenuDropdown } from "./menu-dropDown";
import { Services } from "./services";

import selecaoImage from '@/app/assets/images/Selecao-icon.svg'
import fatorImage from '@/app/assets/images/FATOR.svg'
import dividendoImage from '@/app/assets/images/Dividendos.svg'
import essencialImage from '@/app/assets/images/asideImages/essencial.svg'
import fillsImage from '@/app/assets/images/asideImages/FIIs.svg'
import smallCapsImage from '@/app/assets/images/asideImages/smallCaps.svg'
import valuationImage from '@/app/assets/images/coursesImages/valuation.svg'
import dashPy from '@/app/assets/images/coursesImages/dash.svg'
import cursoReels from '@/app/assets/images/coursesImages/reels.svg'
import enciclopedia from '@/app/assets/images/coursesImages/Enciclopedia.svg'
import codigoPy from '@/app/assets/images/CODIGO.svg'





const walletImages = [
    { image: selecaoImage, name: 'Carteira Seleção' },
    { image: fatorImage, name: 'Carteira FATOR' },
    { image: dividendoImage, name: 'Carteira Dividendos' },
    { image: essencialImage, name: 'Carteira Essencial' },
    { image: fillsImage, name: 'Carteira de FIIs' },
    { image: smallCapsImage, name: 'Carteira Small Caps' },
]

const courseImage = [
    { image: valuationImage, name: 'Valuation 2.0' },
    { image: codigoPy, name: 'Código.py' },
    { image: dashPy, name: 'Dash.py' },
    { image: essencialImage, name: 'Carteira Essencial' },
    { image: cursoReels, name: 'Curso Reels' },
    { image: enciclopedia, name: 'Enciclopédia de FII' },
]

const consultant = [
    { image: valuationImage, name: 'Consultoria VAROS' },
]

export function Aside() {

    return (
        <article className='mx-[120px] mt-64'>
            <h2 className='text-[38px] font-bold w-[608px] leading-[45.6px]'>Simplifique seus investimentos e alcance seus objetivos</h2>
            <p className='w-[504px] mt-4 text-[18px] text-gray-300 font-medium'>Conteúdos preparados para trazer mais segurança, independente do seu nível.</p>
            <aside>
                <div className='flex justify-between mt-8'>
                    <div className='flex flex-col gap-2'>
                        <MenuDropdown title='Carteiras' list={walletImages} height={'510'} />
                        <MenuDropdown title='Cursos' list={courseImage} height={'510'} />
                        <MenuDropdown title='Consultoria' list={consultant} height={'510'} />
                    </div>
                    <  Services />
                </div>
            </aside>
        </article>
    )
}