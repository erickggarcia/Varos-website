import { BuyNow } from './components/buy-now'
import { Services } from './components/services'
import { Avaliation } from './components/avaliation'
import { NewsLetter } from './components/newsLetter'
import { Footer } from './components/footer'

export function HomePage() {
    return (
        <main className='h-screen bg-black'>
            <BuyNow />
            <Services />
            <Avaliation />
            <NewsLetter />
            <Footer />
        </main >
    )
}