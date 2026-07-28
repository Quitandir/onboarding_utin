import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Image from "next/image";
import Link from "next/link";

export default function Vitrine() {
    return (
        <div className="bg-neutral-50">
            <Header />
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
                <div className="text-center max-w-2xl mx-auto my-12">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-wide mb-4">
                        Vitrine de plataformas para cursos gratuítos e certificados
                    </h1>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="relative w-64 h-64 m-auto">
                        <Link href="https://avamec.mec.gov.br/">
                            <Image alt="logo avamec" src="/logos_instituicoes/avamec.png" fill className="object-contain" />
                        </Link>
                    </div>
                    <div className="relative w-64 h-64 m-auto">
                        <Link href="https://moodle.ifrs.edu.br/">
                            <Image alt="logo avamec" src="/logos_instituicoes/ifrs.png" fill className="object-contain" />
                        </Link>
                    </div>
                    <div className="relative w-64 h-64 m-auto">
                        <Link href="https://lumina.ufrgs.br/">
                            <Image alt="logo avamec" src="/logos_instituicoes/lumina.png" fill className="object-contain" />
                        </Link>
                    </div>
                    <div className="relative w-64 h-64 m-auto">
                        <Link href="https://aprendamais.mec.gov.br/">
                            <Image alt="logo avamec" src="/logos_instituicoes/aprenda_mais.png" fill className="object-contain" />
                        </Link>
                    </div>
                    <div className="relative w-64 h-64 m-auto">
                        <Link href="https://www.escolavirtual.gov.br/">
                            <Image alt="logo avamec" src="/logos_instituicoes/escola_virtual.png" fill className="object-contain" />
                        </Link>
                    </div>

                </div>


                <p className="text-base text-slate-600 italic">
                    A lista de plataformas apresentada possui caráter meramente informativo e de curadoria. Os logotipos e
                    marcas registradas pertencem às suas respectivas instituições. A Secretaria de Educação/UTIN não possui vínculo
                    comercial nem se responsabiliza pela gestão de certificados de plataformas terceiras.
                </p>
            </main>
            <Footer />
        </div>
    )
}

