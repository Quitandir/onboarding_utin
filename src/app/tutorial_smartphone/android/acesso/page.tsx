import React from "react";
import Link from "next/link";
import Image from "next/image";
import { WindSong, Space_Mono } from "next/font/google";

// Fontes otimizadas
const windSong = WindSong({
    weight: "500",
    subsets: ["latin"],
    display: "swap",
});

const spaceMono = Space_Mono({
    weight: ["700"],
    subsets: ["latin"],
    display: "swap",
});

export default function AndroidAcessoPage() {
    return (
        <main className="min-h-screen bg-[#fdf6d8] text-[#211c75] px-6 md:px-10 py-8 flex flex-col justify-between selection:bg-[#211c75] selection:text-[#fdf6d8]">
            {/* Importação auxiliar para a fonte Comic Relief */}
            <link
                href="https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap"
                rel="stylesheet"
            />

            <div className="max-w-[900px] w-full mx-auto my-auto flex flex-col items-center gap-10 py-8">

                {/* Cabeçalho com Número do Passo (5) e Logo Android */}
                <header className="w-full flex items-center justify-between">
                    <div
                        className="w-12 h-12 rounded-full border-[5px] border-[#a4c639] text-[#211c75] font-bold text-xl flex items-center justify-center drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
                        style={{ fontFamily: "'Comic Relief', system-ui, sans-serif" }}
                    >
                        5
                    </div>
                    <Image
                        src="/android.png" // <-- Nome do arquivo na pasta /public
                        alt="Android"
                        width={100}
                        height={100}
                        className="h-24 w-auto object-contain drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
                        priority
                    />
                </header>

                {/* Título Cursivo */}
                <h2
                    className="text-lg sm:text-xl md:text-2xl text-center min-[600px]:text-center leading-relaxed tracking-wide font-bold"
                    style={{ fontFamily: "'Comic Relief', system-ui, sans-serif" }}        >
                    Um pedido de autorização será enviado para nós aceitarmos seu dispositivo móvel dentro do domínio @canoaedu
                </h2>

                {/* Conteúdo Principal (Texto explicativo + Ilustração) */}
                <div className="w-full flex flex-col min-[600px]:flex-row items-center justify-center gap-8 min-[600px]:gap-12 my-auto">

                    <p
                        className="text-[#ff1200] text-xs md:text-sm min-[600px]:text-left tracking-wide leading-8"
                        style={{ fontFamily: "'Comic Relief', system-ui, sans-serif" }}
                    >
                        Procure em seu dispositivo ícones do Google Workspace marcados por uma pequena maleta azul. Esses são seus primeiros apps de trabalho @canoasedu.
                    </p>
                    <p
                        className="text-[#ff1200] text-xs md:text-sm min-[600px]:text-left leading-8 tracking-wide"
                        style={{ fontFamily: "'Comic Relief', system-ui, sans-serif" }}
                    >
                        As versões mais recentes do Android permitem o acesso a conta @canoasedu direto pelos apps já presentes no seu dispositivo. Basta clicar no ícone do usuário no canto superior direito e trocar pela conta institucional.
                    </p>

                    <div className="shrink-0">
                        <Image
                            src="/user_logo.png" // <-- Imagem da troca de conta no Gmail em /public/gmail-user-switch.png
                            alt="Instrução de troca de usuário no Gmail"
                            width={150}
                            height={150}
                            className="w-[150px] min-[600px]:w-[150px] h-auto object-contain drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
                        />
                    </div>

                </div>

            </div>

            {/* Rodapé com Navegação */}
            <footer className="w-full max-w-[900px] mx-auto flex flex-col-reverse sm:flex-row justify-between items-center gap-6 pt-4">
                <a
                    href="https://sites.google.com/canoasedu.rs.gov.br/tecnologia/in%C3%ADcio"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${spaceMono.className} bg-[#211c75] text-[#fdf6d8] font-bold text-xs md:text-sm uppercase px-6 py-3 rounded-[10px] text-center hover:bg-[#3a33a1] hover:scale-95 hover:-translate-x-1 transition-all duration-300 shadow-md w-full sm:w-auto max-w-[220px]`}
                >
                    Voltar à página da UTIN
                </a>

                <Link
                    href="/tutorial_smartphone/nada_ainda" // <-- Próxima rota no Next.js (nadaainda.html)
                    className={`${spaceMono.className} bg-[#211c75] text-[#fdf6d8] font-bold text-xs md:text-sm uppercase px-8 py-3 rounded-[10px] text-center hover:bg-[#3a33a1] hover:scale-95 hover:translate-x-1 transition-all duration-300 shadow-md w-full sm:w-auto max-w-[180px]`}
                >
                    Avançar
                </Link>
            </footer>
        </main>
    );
}