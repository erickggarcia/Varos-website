'use client'

import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const newNewsLetterSubscriptionSchema = zod.object({
    name: zod.string().min(10),
    email: zod.string().min(10),
    cellphone: zod.string().min(11).max(11)
})

type newNewsLetterSubscriptionData = zod.infer<typeof newNewsLetterSubscriptionSchema>

export function NewsLetter() {

    const { register, handleSubmit, watch, reset } = useForm<newNewsLetterSubscriptionData>({
        resolver: zodResolver(newNewsLetterSubscriptionSchema),
        defaultValues: {
            name: '',
            email: '',
            cellphone: '',
        }
    })

    const inputName = watch('name')
    const inputEmail = watch('email')
    const inputCellphone = watch('cellphone')

    const isButtonDisabled = !(inputName && inputEmail && inputCellphone)

    const cursorType = isButtonDisabled ? 'cursor-not-allowed' : 'cursor-pointer'

    function assignNewsLetter(data: newNewsLetterSubscriptionData) {
        console.log(data)
        reset()
    }

    return (
        <section className="flex justify-between gap-[122px] items-start mx-[120px] my-32">
            <div>
                <h1 className='font-bold text-[32px] w-[463px]'>Cadastre-se para receber mais informações.</h1>
                <p className='w-[368px] text-[18px] mt-2 text-gray-200 font-bold'>Fique ligado no que tem de melhor no Mercado Financeiro.</p>
            </div>
            <div className='w-[564px]'>

                <form onSubmit={handleSubmit(assignNewsLetter)} className="bg-custom-gray-3 rounded-[32px] flex flex-col items-center w-[458px] gap-4 py-[60px] px-[53px] text-gray-300">
                    <input
                        placeholder='Nome'
                        type="text"
                        id="name"
                        {...register('name')}
                        className='w-[364px] 
                                rounded-[4px] 
                                bg-custom-gray 
                                p-1.5'
                        minLength={10}
                    />

                    <input
                        placeholder='Seu melhor e-mail'
                        type="text"
                        id="email"
                        {...register('email')}
                        className='w-[364px] 
                            rounded-[4px] 
                            bg-custom-gray 
                            p-1.5'
                        minLength={10}
                    />

                    <input
                        placeholder='Celular'
                        type="text"
                        id="cellphone"
                        {...register('cellphone')}
                        className='w-[364px] 
                            rounded-[4px]  
                            bg-custom-gray p-1.5'
                        minLength={11}
                        maxLength={11}
                    />
                    <button
                        className={`rounded-[4px] 
                        bg-custom-green-2 
                        w-[364px] 
                        font-semibold 
                        text-black 
                        px-4 py-2.5
                        ${cursorType}
                        `}
                        disabled={isButtonDisabled}
                    >
                        Quero me inscrever
                    </button>

                </form>
            </div>
        </section >

    )
}