export default function Footer() {
    return (
        <footer className="w-full bg-emerald-50 border-t border-gray-200 mt-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-2 py-8">
                <div className="flex flex-col justify-end items-center gap-6 md:flex-row md:justify-between md:gap-0">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-6 ">  
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-call-icon lucide-phone-call"><path d="M13 2a9 9 0 0 1 9 9" /><path d="M13 6a5 5 0 0 1 5 5" /><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384" /></svg>
                            <div className="flex flex-col">
                                <span className="font-bold">Telefone</span>
                                <span className="">(51)3452-7701</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail-check-icon lucide-mail-check"><path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /><path d="m16 19 2 2 4-4" /></svg>
                            <div className="flex flex-col">
                                <span className="font-bold">E-mail</span>
                                <span className="">time.google@canoasedu.rs.gov.br</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-6">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-house-icon lucide-map-pin-house"><path d="M15 22a1 1 0 0 1-1-1v-4a1 1 0 0 1 .445-.832l3-2a1 1 0 0 1 1.11 0l3 2A1 1 0 0 1 22 17v4a1 1 0 0 1-1 1z" /><path d="M18 10a8 8 0 0 0-16 0c0 4.993 5.539 10.193 7.399 11.799a1 1 0 0 0 .601.2" /><path d="M18 22v-3" /><circle cx="10" cy="10" r="3" /></svg>
                            <div className="flex flex-col">
                                <span className="font-bold">Endereço</span>
                                <span className="">R. Monte Castelo, 340 - Nossa Sra. das Gracas, Canoas - RS, 92025-370</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-end">
                        <span>Desenvolvido pela Unidade de Tecnologia e Inovação - TIME GOOGLE</span>
                    </div>
                </div>
            </div>

        </footer>
    )
}