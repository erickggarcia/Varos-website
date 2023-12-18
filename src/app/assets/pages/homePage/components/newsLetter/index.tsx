export function NewsLetter() {
    return (
        <section className="flex justify-between gap-[122px] items-start mx-[120px] my-32">
            <div>
                <h1 className='font-bold text-[32px] w-[463px]'>Cadastre-se para receber mais informações.</h1>
                <p className='w-[368px] text-[18px] mt-2 text-gray-200 font-bold'>Fique ligado no que tem de melhor no Mercado Financeiro.</p>
            </div>
            <div className='w-[564px]'>
                <form action="" className="bg-custom-gray-3 rounded-[32px] flex flex-col items-center w-[458px] gap-4 py-[60px] px-[53px] text-gray-700">
                    <input placeholder='Nome' type="text" name="" id="" className='w-[364px] rounded-[4px] bg-custom-gray p-1.5' />
                    <input placeholder='Seu melhor e-mail' type="text" name="" id="" className='w-[364px] rounded-[4px] bg-custom-gray p-1.5' />
                    <input placeholder='Celular' type="text" name="" id="" className='w-[364px] rounded-[4px]  bg-custom-gray p-1.5' />
                    <button className='rounded-[4px] bg-custom-green-2 w-[364px] font-semibold text-black px-4 py-2.5'>Quero me inscrever</button>
                </form>
            </div>
        </section >

    )
}