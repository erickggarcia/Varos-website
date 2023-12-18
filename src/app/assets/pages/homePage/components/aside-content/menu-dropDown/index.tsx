'use client'

import Image from "next/image"
import dropArrow from '@/app/assets/images/drop-arrow.svg'
import { useState } from "react"
interface iObject {
    image: string
    name: string
}

interface iAsideContent {
    title: string
    list: iObject[]
    height: string
}

export function MenuDropdown({ title, list, height }: iAsideContent) {

    const [active, setActive] = useState(false)
    function handleClick() {
        setActive((state) => !state)
    }
    return (
        <>
            <article className="w-[270px] py-4 px-8 bg-custom-gray flex items-center justify-center gap-5 rounded-[40px] font-bold text-[18px] tracking-[1.8px] mb-4 cursor-pointer" onClick={handleClick}>
                {title}
                {
                    active === true ?
                        <Image src={dropArrow} alt='' height={17} width={17} className='rotate-0' />
                        :
                        <Image src={dropArrow} alt='' height={17} width={17} className='-rotate-90' />
                }
            </article>
            {
                active === true ?
                    < ul className={`w-[267px] h-fit rounded-[32px] bg-custom-gray-2 flex flex-col items-center justify-center border border-gray-900 gap-8 p-2`}>
                        {list.map((item) => (
                            <li key={item.name} className=' h-14 p-4 rounded-[32px] hover:bg-custom-gray-3'>
                                <a href="#" className='flex gap-4 flex-nowrap text-[14px]'>
                                    <Image src={item.image} alt='' width={18} height={18} />
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul >
                    : ""
            }
        </>
    )
}