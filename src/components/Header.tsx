import Image from 'next/image';

export default function Header() {
    return (
        <header className="w-full bg-emerald-50 border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-center gap-6">
                <Image src='/canoeiro_utin.png' alt='logo da utin' width={50} height={50} className='object-contain' />
                <span className="font-bold text-2xl text-slate-800 tracking-tight text-sm">ONBOARDING DOS DOCENTES DA REDE DO MUNICÍPIO DE CANOAS</span>
            </div>
        </header>
    )
}