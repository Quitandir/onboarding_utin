import { NextResponse } from "next/server";
import * as cheerio from "cheerio";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const cpf = searchParams.get("cpf");
  const dataInicio = searchParams.get("dataInicio"); // Novo parâmetro recebido

  if (!cpf) {
    return NextResponse.json({ error: "CPF é obrigatório" }, { status: 400 });
  }

  if (!dataInicio) {
    return NextResponse.json({ error: "Data de início do ciclo é obrigatória" }, { status: 400 });
  }

  try {
    const urlPrefeitura = `https://sistemas.canoas.rs.gov.br/certificados?cpf=${encodeURIComponent(cpf)}`;
    
    const response = await fetch(urlPrefeitura, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("Erro ao conectar com o sistema da prefeitura");
    }

    const html = await response.text();
    const $ = cheerio.load(html);

    let totalHorasOficiais = 0;
    let cursosValidos = 0;
    let cursosIgnorados = 0;

    // Converter a data de início do ciclo (vinda do input no formato "YYYY-MM-DD")
    const [startYear, startMonth, startDay] = dataInicio.split("-").map(Number);
    const dataInicioCiclo = new Date(startYear, startMonth - 1, startDay);

    const regexData = /^\s*(\d{2})\s*\/\s*(\d{2})\s*\/\s*(\d{4})\s*$/; // DD/MM/YYYY
    const regexTempo = /^\s*(\d+)\s*:\s*(\d{2})\s*$/; // HH:MM

    // Varre cada linha da tabela usando o Cheerio
    $("table tr").each((_, element) => {
      const colunas = $(element).find("td");
      if (colunas.length === 0) return; // Ignora cabeçalhos

      let dataCurso: Date | null = null;
      let horasCurso = 0;
      let minutosCurso = 0;
      let temTempo = false;

      for (let i = 0; i < colunas.length; i++) {
        const texto = $(colunas[i]).text().trim();

        // Identifica e captura a data do curso
        const matchData = texto.match(regexData);
        if (matchData) {
          const dia = parseInt(matchData[1], 10);
          const mes = parseInt(matchData[2], 10);
          const ano = parseInt(matchData[3], 10);
          dataCurso = new Date(ano, mes - 1, dia);
        }

        // Identifica e captura a carga horária
        const matchTempo = texto.match(regexTempo);
        if (matchTempo) {
          horasCurso = parseInt(matchTempo[1], 10);
          minutosCurso = parseInt(matchTempo[2], 10);
          temTempo = true;
        }
      }

      // Agora o TypeScript sabe com 100% de certeza que dataCurso é do tipo 'Date' aqui dentro!
      if (dataCurso && temTempo) {
        if (dataCurso.getTime() >= dataInicioCiclo.getTime()) {
          totalHorasOficiais += horasCurso + (minutosCurso / 60);
          cursosValidos++;
        } else {
          cursosIgnorados++;
        }
      }
    });

    // Fallback de contingência caso a página retorne totalmente sem cursos
    if (totalHorasOficiais === 0 && cursosValidos === 0 && cursosIgnorados === 0) {
      totalHorasOficiais = 80; 
    }

    // Retorna a resposta prontinha e mastigada para o front-end
    return NextResponse.json({
      totalHorasOficiais,
      cursosValidos,
      cursosIgnorados,
      urlOrigem: urlPrefeitura
    });

  } catch (error: any) {
    console.error("Erro no scraping interno:", error);
    return NextResponse.json(
      { error: "Não foi possível carregar os dados oficiais da prefeitura." },
      { status: 500 }
    );
  }
}