import { BuyNow } from './components/buy-now'
import { Services } from './components/services'
import { Avaliation } from './components/avaliation'

export function HomePage() {
    return (
        <main className='h-screen bg-black'>
            <BuyNow />
            <Services />
            <Avaliation />
        </main >
    )
}