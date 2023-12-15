import Image from "next/image"
import dropArrow from '@/app/assets/images/drop-arrow.svg'
interface iObject {
    image: string
    name: string
}

interface iAsideContent {
    title: string
    list: iObject[]
    height: string
}

export function Aside({ title, list, height }: iAsideContent) {
    return (
        <div>
            <article className="w-[270px] py-4 px-8 bg-custom-gray flex items-center justify-center gap-5 rounded-[40px] font-bold text-[18px] tracking-[1.8px] mb-4">
                {title}
                <Image src={dropArrow} alt='' height={17} width={17} />
            </article>
            <ul className={`w-[267px] h-[${height}] rounded-[32px] bg-custom-gray-2 p-8 flex-col items-center justify-center border border-gray-900`}>
                {list.map((item) => (
                    <li key={item.name} className='mt-[22px] h-14 p-4 rounded-[32px] hover:bg-custom-gray-3'>
                        <a href="#" className='flex gap-4 flex-nowrap text-[14px]'>
                            <Image src={item.image} alt='' width={22} height={22} />
                            {item.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}