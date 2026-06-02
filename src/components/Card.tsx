import Link from "next/link";

interface CardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    buttonText: string;
    bgColorClass: string;
    btnColorClass: string;
    link: string;
    support: string;
}

export default function Card({ title, description, icon, buttonText, bgColorClass, btnColorClass, link, support }: CardProps) {
    return (
        <div className={`flex flex-col items-center text-center 
                    p-6 rounded-2xl border border-gray-100 
                    shadow-sm hover:shadow-md transition-shadow ${bgColorClass}`}>

            {/*ícone*/}
            <div className="text-5xl mb-4">
                {icon}
            </div>

            {/*Textos*/}
            <h3 className="font-bold text-lg text-slate-800 mb-2">{title}</h3>
            <p className="text-sm text-slate-600 mb-6 flex-grow">{description}</p>
            <p className="text-sm text-slate-600 mb-6 flex-grow italic">{support}</p>
            {/*Botões*/}
            <Link href={link} >
                <button className={`cursor-pointer mt-auto px-6 py-2 text-white text-sm font-bold rounded-full w-full hover:opacity-90 transition opacity ${btnColorClass}`}>
                    {buttonText}
                </button>
            </Link>
        </div>
    )


}