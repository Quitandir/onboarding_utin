"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { cardsData } from "@/data/cardsData";


export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans ">
      <Header />

      {/*Conteúdo principal*/}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Seção de Boas-vindas */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            BEM-VINDOS, PROFES!
          </h1>
          <p className="text-base text-slate-600">
            Bem-vindo à nossa rede de ensino! Encontre aqui tudo o que você precisa para começar sua jornada com facilidade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cardsData.map((card) => (
            <Card
              key={card.id}
              title={card.title}
              description={card.description}
              icon={card.icon}
              buttonText={card.buttontext}
              bgColorClass={card.bgColorClass}
              btnColorClass={card.btnColorClass}
              link={card.link}
              support={card.support}
            />
          ))}
        </div>
      </main>
      <Footer/>
    </div>
  );
}
