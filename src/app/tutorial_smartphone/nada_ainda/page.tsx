import React from "react";
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

export default function AndroidNadaAindaPage() {
  return (
    <main className="min-h-screen bg-[#fdf6d8] text-[#211c75] px-6 md:px-10 py-8 flex flex-col justify-between selection:bg-[#211c75] selection:text-[#fdf6d8]">
      {/* Importação auxiliar para a fonte Comic Relief */}
      <link
        href="https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-[900px] w-full mx-auto my-auto flex flex-col gap-8 py-8">
        
        

        {/* Conteúdo Principal (Container de Duas Colunas) */}
        <div className="w-full flex flex-col min-[765px]:flex-row items-stretch justify-between gap-8 md:gap-12 my-auto">
          
          {/* Coluna da Esquerda: Título "Nada ainda?" e Logo da UTIN */}
          <div className="flex flex-col justify-between items-center min-[765px]:items-start w-full min-[765px]:w-5/12 gap-6">
            <h2
              className={`${windSong.className} text-4xl sm:text-5xl md:text-6xl text-center min-[765px]:text-left capitalize drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]`}
            >
              Nada ainda?
            </h2>
            <Image
              src="/logo_utin.png" // <-- Logo da UTIN na pasta /public
              alt="Logo da UTIN"
              width={300}
              height={300}
              className="w-[200px] min-[765px]:w-[280px] h-auto object-contain drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mx-auto min-[765px]:mx-0"
            />
          </div>

          {/* Coluna da Direita: Passos de Resolução de Problemas com Separadores */}
          <div
            className="flex flex-col justify-between w-full min-[765px]:w-7/12"
            style={{ fontFamily: "'Comic Relief', system-ui, sans-serif" }}
          >
            {/* Bloco 1 */}
            <div>
              <p className="text-xl md:text-2xl font-bold mb-3">Primeiramente,</p>
              <p className="text-base">
                Tente reiniciar teu telefone. Às vezes funciona assim.
              </p>
            </div>

            <div className="border-b border-dashed border-[#211c75] my-4" />

            {/* Bloco 2 */}
            <div>
              <p className="text-xl md:text-2xl font-bold mb-3">Está aparecendo, mas não acessa.</p>
              <p className="text-base">
                Volte em Configurações, Contas e delete a conta institucional do seu smartphone. Refaça esse passo a passo.
              </p>
            </div>

            <div className="border-b border-dashed border-[#211c75] my-4" />

            {/* Bloco 3 */}
            <div>
              <p className="text-xl md:text-2xl font-bold mb-3">Nada!</p>
              <p className="text-base">
                Fale conosco via telefone ou e-mail:{" "}
                <a
                  href="mailto:time.google@canoasedu.rs.gov.br"
                  className="underline hover:opacity-80 transition-opacity"
                >
                  time.google@canoasedu.rs.gov.br
                </a> - (51) 3452-7701 Ramal 5345
              </p>
            </div>

            <div className="border-b border-dashed border-[#211c75] my-4" />

            {/* Bloco 4 */}
            <div>
              <p className="text-xl md:text-2xl font-bold mb-3">Não desista!</p>
              <p className="text-base">
                Nós ainda podemos te ajudar!
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Rodapé com Apenas o Botão de Retorno (Fim do Fluxo) */}
      <footer className="w-full max-w-[900px] mx-auto flex justify-start items-center pt-4">
        <a
          href="https://sites.google.com/canoasedu.rs.gov.br/tecnologia/in%C3%ADcio"
          target="_blank"
          rel="noopener noreferrer"
          className={`${spaceMono.className} bg-[#211c75] text-[#fdf6d8] font-bold text-xs md:text-sm uppercase px-6 py-3 rounded-[10px] text-center hover:bg-[#3a33a1] hover:scale-95 hover:-translate-x-1 transition-all duration-300 shadow-md w-full sm:w-auto max-w-[220px]`}
        >
          Voltar à página da UTIN
        </a>
      </footer>
    </main>
  );
}