import { ShoppingCart, MapPin } from "lucide-react"

export const Header = () => {
    return (
        <header className="flex items-center justify-between w-[90rem] py-4 mx-auto px-20">
            <div>
                <img src="/logo-coffe.svg" alt="Coffee Delivery Logo" className="logo-6" />
            </div>
            <div className="flex items-center justify-center gap-2">
                <div className="flex items-center gap-2 rounded-lg p-2 bg-brand-purple-light">
                    <MapPin className="text-brand-purple" size={22}/>
                    <p className="text-brand-purple-dark">Porto Alegre, RS</p>
                </div>
                <div className="flex items-center gap-2 bg-brand-yellow-light rounded-lg p-2">
                    <ShoppingCart size={22} className="text-brand-yellow-dark" />
                </div>
            </div>
        </header>
    )
}
