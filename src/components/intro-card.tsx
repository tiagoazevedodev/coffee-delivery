interface IntroCardProps {
    text: string;
    icon: React.ReactNode;
    color: string;
}

export const IntroCard = ({text, icon, color}: IntroCardProps) => {
    return (
        <div className={`flex items-center gap-2 rounded-lg p-2`}>
            <div className={`flex items-center justify-center rounded-full p-2 ${color}`}>
                {icon}
            </div>
            <p className="text-base-text">{text}</p>
        </div>
    )
}
