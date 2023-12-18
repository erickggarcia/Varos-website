import { BuyNow } from './components/buy-now'
import { Aside } from '@/app/assets/pages/homePage/components/aside-content'
import { Avaliation } from './components/avaliation'
import { NewsLetter } from './components/newsLetter'
import { Footer } from './components/footer'




export function HomePage() {
    return (
        <main className='h-screen bg-black'>
            <BuyNow />
            <Aside />
            <Avaliation />
            <NewsLetter />
            <Footer />
        </main >
    )
}