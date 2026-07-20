"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useCalculadora } from "../context";

export default function ResultadoCalculadora() {
  const router = useRouter();
  const { formData } = useCalculadora();

  const [loading, setLoading] = useState(true);
  const [horasSME, setHorasSME] = useState(0);
  const [cursosValidos, setCursosValidos] = useState(0);
  const [cursosIgnorados, setCursosIgnorados] = useState(0);
  const [erroSME, setErroSME] = useState<string | null>(null);

  // 1. Função para formatar o CPF (000.000.000-00) necessário para a consulta
  const formatarCpf = (cpfLimpo: string) => {
    const d = cpfLimpo.replace(/\D/g, "");
    return d
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
  };

  // 2. Função matemática para somar 5 anos e adicionar os dias de licenças/faltas
  const calcularDataFimCiclo = (dataInicioStr: string, diasFalta: number): string => {
    if (!dataInicioStr) return "Não informada";

    // Divide a string "YYYY-MM-DD" para evitar problemas de fuso horário local
    const [ano, mes, dia] = dataInicioStr.split("-").map(Number);
    const data = new Date(ano, mes - 1, dia);

    // Soma exata de 5 anos
    data.setFullYear(data.getFullYear() + 5);

    // Prorroga o ciclo somando os dias de faltas/licenças
    data.setDate(data.getDate() + diasFalta);

    return data.toLocaleDateString("pt-BR");
  };

  // 3. Buscar os dados do site da prefeitura via nosso Proxy
  useEffect(() => {
    const buscarDadosDaApi = async () => {
      if (!formData.cpf || !formData.dataInicio) {
        setLoading(false);
        return;
      }

      try {
        // Passamos o CPF e a Data de Início na própria URL da nossa API
        const urlParams = `?cpf=${encodeURIComponent(formData.cpf)}&dataInicio=${encodeURIComponent(formData.dataInicio)}`;
        const response = await fetch(`/api/cursos-prefeitura${urlParams}`);

        if (!response.ok) throw new Error("Erro na resposta da API interna");

        const dados = await response.json();

        // Setamos os estados diretamente com o que o back-end já calculou
        setHorasSME(dados.totalHorasOficiais);
        setCursosValidos(dados.cursosValidos || 0);
        setCursosIgnorados(dados.cursosIgnorados || 0);

      } catch (err) {
        console.error("Erro ao chamar API local:", err);
        setErroSME("Não foi possível acessar os dados em tempo real. Usando estimativa.");
        setHorasSME(40); // Fallback seguro
      } finally {
        setLoading(false);
      }
    };

    buscarDadosDaApi();
  }, [formData.cpf, formData.dataInicio]);

  // Regra de pontos da prefeitura (exemplo: 1 ponto por hora oficial realizada)
  const pontosSME = horasSME * 1.0;
  const pontuacaoTotalGeral = formData.pontosExternos + pontosSME;
  const dataFimCicloFormatada = calcularDataFimCiclo(formData.dataInicio, formData.faltasLicencias);

  if (loading) {
    return (
      <div className="max-w-2xl mx-auto p-12 text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-slate-600 font-medium">Buscando seus certificados oficiais no sistema de Canoas...</p>
      </div>
    );
  }

  return (
    <main className="max-w-3xl mx-auto p-6 md:p-12">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm space-y-8">

        {/* Cabeçalho de Sucesso */}
        <div className="text-center">
          <span className="text-4xl">🎉</span>
          <h1 className="text-2xl font-extrabold text-slate-900 mt-3">Simulação Concluída!</h1>
          <p className="text-slate-500 text-sm mt-1">
            Aqui está o panorama completo do seu ciclo avaliativo de 5 anos.
          </p>
        </div>

        {/* Card com a Nova Data de Fechamento */}
        <div className="bg-blue-50 border border-blue-150 rounded-2xl p-6 text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Período do Ciclo Funcional</span>
          <div className="flex justify-center items-center gap-4 mt-2">
            <div>
              <p className="text-xs text-slate-500">Início do Ciclo</p>
              <p className="text-base font-bold text-slate-800">
                {formData.dataInicio ? new Date(formData.dataInicio).toLocaleDateString("pt-BR") : "—"}
              </p>
            </div>
            <div className="text-slate-300">➡️</div>
            <div>
              <p className="text-xs text-slate-500">Fim do Ciclo (Prorrogado)</p>
              <p className="text-lg font-black text-blue-900">{dataFimCicloFormatada}</p>
            </div>
          </div>
          <p className="text-[11px] text-blue-700 mt-3 italic">
            * Seu ciclo foi prorrogado em <strong>{formData.faltasLicencias} dias</strong> devido às faltas e licenças declaradas.
          </p>
        </div>

        {/* Divisão dos Pontos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Box de Cursos de Fora (Passo 2) */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 block">Cursos Externos</span>
            <span className="text-xl font-bold text-slate-800 mt-1 block">Realizados por você</span>
            <div className="mt-4 flex justify-between items-baseline">
              <span className="text-xs text-slate-500">Pontuação calculada:</span>
              <span className="text-lg font-extrabold text-slate-700">+{formData.pontosExternos.toFixed(2)} pts</span>
            </div>
          </div>

          {/* Box de Cursos da Prefeitura (Capturados via API) */}
          <div className="border border-slate-200 rounded-xl p-5 bg-slate-50 relative">
            <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 block">Cursos SME / Canoas</span>
            <span className="text-xl font-bold text-slate-800 mt-1 block">Buscados automaticamente</span>
            {erroSME && (
              <span className="text-[10px] text-amber-600 font-semibold block mt-1">{erroSME}</span>
            )}
            <div className="mt-4 flex justify-between items-baseline">
              <span className="text-xs text-slate-500">Carga Horária ({horasSME}h):</span>
              <span className="text-lg font-extrabold text-blue-600">+{pontosSME.toFixed(2)} pts</span>
            </div>
          </div>

        </div>

        {/* Placar Final */}
        <div className="border-t border-slate-200 pt-6 text-center">
          <span className="text-xs text-slate-400 uppercase font-bold tracking-widest block">Soma Estimada Total</span>
          <span className="text-4xl font-black text-slate-900 mt-1 block">{pontuacaoTotalGeral.toFixed(2)} Pontos</span>

          <p className="text-xs text-slate-500 max-w-md mx-auto mt-4 leading-relaxed">
            Consulte a tabela de transição de carreira de Canoas para verificar em qual classe salarial este acúmulo de pontos lhe posicionará no próximo ciclo!
          </p>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-3 pt-4">
          <button
            type="button"
            onClick={() => router.push("/calculadora")}
            className="flex-1 py-3 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 text-sm transition-colors"
          >
            Refazer Simulação
          </button>

          <a
            href={`https://sistemas.canoas.rs.gov.br/certificados?cpf=${formatarCpf(formData.cpf)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-3 bg-slate-800 hover:bg-slate-900 text-white font-semibold rounded-xl text-sm transition-colors text-center block"
          >
            Ver Certificados Oficiais ↗
          </a>
        </div>

      </div>
      <p className="text-slate-600 text-sm leading-relaxed my-3 text-center">Ferramenta desenvolvida por Jonathan Zotti da Silva.</p>

    </main>
  );
}