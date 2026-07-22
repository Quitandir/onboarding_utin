"use client";

import React, { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import { useCalculadora } from "../context"; // 1. O import fica aqui em cima
import { log } from "console";

interface CursoExterno {
  id: string;
  data: string;
  nome: string;
  horas: number;
  isGratuito: boolean;
}

export default function Passo2() {
  const router = useRouter();
  const { formData, updateFormData } = useCalculadora();

  // 1. Estado que gerencia a lista dinâmica de cursos (inicia com 1 linha vazia)
  const [cursos, setCursos] = useState<CursoExterno[]>([
    { id: "1", data: "", nome: "", horas: 0, isGratuito: false },
  ]);

  // 2. Função para calcular os pontos de um único curso com base nas suas regras
  const calcularPontosCurso = (horas: number, isGratuito: boolean): number => {
    if (!horas || horas <= 0) return 0;

    let multiplicadorFaixa = 0.5; // Até 11 horas

    if (horas >= 12 && horas <= 59) {
      multiplicadorFaixa = 0.75; // 12 até 59 horas
    } else if (horas >= 60) {
      multiplicadorFaixa = 1.0; // 60 ou mais horas
    }

    let pontos = horas * multiplicadorFaixa;

    // Dobra a pontuação se for gratuito (sem custo)
    if (isGratuito) {
      pontos *= 2;
    }

    return pontos;
  };

  // 3. Somatório em tempo real de todos os cursos usando useMemo (para performance)
  const totalPontosExternos = useMemo(() => {
    return cursos.reduce((soma, curso) => {
      return soma + calcularPoints(curso.horas, curso.isGratuito);
    }, 0);
  }, [cursos]);

  // Alias para facilitar o mapeamento interno
  function calcularPoints(horas: number, isGratuito: boolean) {
    return calcularPontosCurso(horas, isGratuito);
  }

  // 4. Adicionar uma nova linha de curso
  const adicionarLinha = () => {
    const novoCurso: CursoExterno = {
      id: Date.now().toString(), // Gera um ID único baseado no timestamp
      data: "",
      nome: "",
      horas: 0,
      isGratuito: false,
    };
    setCursos((prev) => [...prev, novoCurso]);
  };

  // 5. Remover uma linha de curso
  const removerLinha = (id: string) => {
    // Mantém pelo menos uma linha ativa
    if (cursos.length === 1) return;
    setCursos((prev) => prev.filter((curso) => curso.id !== id));
  };

  // 6. Atualizar dinamicamente os valores de um input específico
  const atualizarCurso = (id: string, campo: keyof CursoExterno, valor: any) => {
    setCursos((prev) =>
      prev.map((curso) => {
        if (curso.id === id) {
          return { ...curso, [campo]: valor };
        }
        return curso;
      })
    );
  };

  const handleFinalizar = () => {
    updateFormData({ pontosExternos: totalPontosExternos });
    router.push("/calculadora/resultado");
  };

  console.log(formData.dataInicio);

  return (
    <main className="max-w-5xl mx-auto p-4 md:p-8">
      {/* Resumo simples dos dados vindos do Passo 1 */}
      <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 flex flex-wrap gap-4 justify-between items-center text-xs text-slate-600">
        <div>
          <strong>Servidor (CPF):</strong> {formData.cpf || "Não informado"}
        </div>
        <div>
          <strong>Início do Ciclo:</strong>{" "}
          {formData.dataInicio ? new Date(formData.dataInicio).toLocaleDateString("pt-BR", { timeZone: "UTC" }) : "Não informado"}
        </div>
        <div>
          <strong>Faltas/Licenças:</strong> {formData.faltasLicencias} dias
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
        <div className="flex justify-between items-center mb-4">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Etapa 2 de 2
          </span>
          <span className="text-xs text-slate-500">Cursos Externos</span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-2">Cursos de Fora da Prefeitura</h1>
        <p className="text-slate-600 mb-6 text-sm">
          Insira as informações dos cursos de aperfeiçoamento realizados fora da rede municipal durante o seu ciclo.
        </p>

        {/* Tabela/Grade de Cursos */}
        <div className="space-y-4">
          {cursos.map((curso, index) => {
            const pontosDesteCurso = calcularPoints(curso.horas, curso.isGratuito);

            return (
              <div
                key={curso.id}
                className="grid grid-cols-1 md:grid-cols-12 gap-3 items-end p-4 bg-slate-50 border border-slate-200 rounded-xl relative"
              >
                {/* Data de Realização */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Data</label>
                  <input
                    type="date"
                    required
                    value={curso.data}
                    onChange={(e) => atualizarCurso(curso.id, "data", e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-slate-800 bg-white"
                  />
                </div>

                {/* Nome do Curso */}
                <div className="md:col-span-4">
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Nome da Formação</label>
                  <input
                    type="text"
                    required
                    placeholder="Ex: Metodologias Ativas"
                    value={curso.nome}
                    onChange={(e) => atualizarCurso(curso.id, "nome", e.target.value)}
                    className="w-full p-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-slate-800 bg-white"
                  />
                </div>

                {/* Carga Horária */}
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-slate-600 mb-1">Carga Horária</label>
                  <input
                    type="number"
                    min="1"
                    required
                    placeholder="Horas"
                    value={curso.horas || ""}
                    onChange={(e) => atualizarCurso(curso.id, "horas", Number(e.target.value))}
                    className="w-full p-2 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500 text-slate-800 bg-white"
                  />
                </div>

                {/* Checkbox Gratuito */}
                <div className="md:col-span-2 flex items-center h-10">
                  <label className="flex items-center gap-2 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={curso.isGratuito}
                      onChange={(e) => atualizarCurso(curso.id, "isGratuito", e.target.checked)}
                      className="w-4 h-4 text-blue-600 border-slate-300 rounded focus:ring-blue-500 cursor-pointer"
                    />
                    <span className="text-xs font-semibold text-slate-600">Sem Custo</span>
                  </label>
                </div>

                {/* Pontuação Estimada Individual e Ações */}
                <div className="md:col-span-2 flex justify-between items-center h-10 border-t border-slate-200 md:border-none pt-2 md:pt-0">
                  <div className="text-right">
                    <span className="block text-[10px] text-slate-500 uppercase font-bold">Pontos</span>
                    <span className="text-sm font-bold text-blue-600">
                      +{pontosDesteCurso.toFixed(2)}
                    </span>
                  </div>

                  {/* Botão de Excluir Linha (não aparece se houver apenas 1 linha) */}
                  {cursos.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removerLinha(curso.id)}
                      className="p-2 text-slate-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors"
                      title="Remover este curso"
                    >
                      ❌
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Botão para Adicionar Nova Linha */}
        <button
          type="button"
          onClick={adicionarLinha}
          className="mt-4 px-4 py-2 border-2 border-dashed border-blue-300 hover:border-blue-500 text-blue-600 hover:text-blue-700 font-semibold rounded-xl text-sm transition-all flex items-center gap-2 w-full justify-center bg-blue-50/30"
        >
          ➕ Adicionar Mais um Curso
        </button>

        {/* Resumo das Regras de Cálculo */}
        <div className="mt-8 p-4 bg-amber-50 border border-amber-100 rounded-xl text-xs text-amber-800">
          <h4 className="font-bold mb-1">ℹ️ Regras de Pontuação:</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li><strong>Até 11 horas:</strong> 0,5 pontos por hora realizada.</li>
            <li><strong>De 12 a 59 horas:</strong> 0,75 pontos por hora realizada.</li>
            <li><strong>60 horas ou mais:</strong> 1,0 ponto por hora realizada.</li>
            <li>💡 <strong>Cursos sem custo (Gratuitos):</strong> A pontuação total do curso é dobrada!</li>
          </ul>
        </div>

        {/* Footer com Somatório e Navegação */}
        <div className="mt-8 pt-6 border-t border-slate-200 flex flex-col md:flex-row gap-4 justify-between items-center">
          <button
            type="button"
            onClick={() => router.back()}
            className="px-6 py-2.5 border border-slate-300 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 text-sm transition-colors w-full md:w-auto"
          >
            Voltar
          </button>

          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <div className="text-center md:text-right">
              <span className="text-xs text-slate-500 block uppercase font-bold">Total Acumulado (Externo)</span>
              <span className="text-2xl font-black text-blue-600">{totalPontosExternos.toFixed(2)} pontos</span>
            </div>

            <button
              type="button"
              onClick={handleFinalizar}
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-colors w-full md:w-auto text-center"
            >
              Finalizar Simulação
            </button>
          </div>
        </div>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed my-3 text-center">Ferramenta desenvolvida por Jonathan Zotti da Silva.</p>

    </main>
  );
}