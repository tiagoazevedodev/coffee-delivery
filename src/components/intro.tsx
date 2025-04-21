
import { ShoppingCart, Timer, Package, Coffee } from "lucide-react"
import CoffeeLander from "../assets/coffee-lander.png"
import { IntroCard } from "./intro-card"

export const Intro = () => {
    return (
        <div className="flex items-center justify-between w-[90rem] mx-auto px-20">
            <div className="flex flex-col gap-4 w-1/2">
                <h1 className="text-4xl font-extrabold text-base-title">Encontre o café perfeito para qualquer hora do dia</h1>
                <p className="text-xl text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                <div className="grid grid-cols-2 gap-4">
                    <IntroCard text="Compra simples e segura" icon={<ShoppingCart size={22} className="text-base-background" />} color="bg-brand-yellow-dark" />
                    <IntroCard text="Entrega rápida e rastreada" icon={<Timer size={22} className="text-base-background" />} color="bg-brand-yellow" />
                    <IntroCard text="Embalagem mantém o café intacto" icon={<Package size={22} className="text-base-background" />} color="bg-base-text" />
                    <IntroCard text="O café chega fresquinho até você" icon={<Coffee size={22} className="text-base-background" />} color="bg-brand-purple" />
                </div>
            </div>
                <div>
                <img src={CoffeeLander} alt="Coffee Lander" />
            </div>
        </div>
    )
}   
