const listaDuvidas = [
  {
    "pergunta": "Como estruturar a Proposta de Intervenção?",
    "resposta": "A proposta precisa conter 5 elementos obrigatórios: <strong>Agente</strong> (quem faz), <strong>Ação</strong> (o que faz), <strong>Meio/Modo</strong> (como faz), <strong>Efeito</strong> (para que faz) e um <strong>Detalhamento</strong>."
  },
  {
    "pergunta": "Como não zerar nas questões de Geometria?",
    "resposta": "Foque no básico: memorize as fórmulas de área plana como a do <strong>Triângulo</strong> (A = b · h / 2), <strong>Quadrado</strong> (A = l²) e <strong>Círculo</strong> (A = π · r²)."
  },
  {
    "pergunta": "Fórmulas de Física mais cobradas no ENEM",
    "resposta": "As mais recorrentes são: <strong>Velocidade Média</strong> (v = Δs / Δt), <strong>Equação Fundamental da Ondulatória</strong> (v = λ · f) e <strong>Primeira Lei de Ohm</strong> (V = R · I)."
  },
  {
    "pergunta": "Como citar repertórios socioculturais?",
    "resposta": "O repertório deve ser <strong>legítimo</strong> (filosofia, história, livros ou filmes), <strong>pertinente</strong> ao tema e <strong>produtivo</strong> (conectado ao seu argumento)."
  }
];

function carregarDuvidas() {
    const container = document.getElementById('faqContainer');
    if (!container) return;
    
    container.innerHTML = '';

    listaDuvidas.forEach(item => {
        const details = document.createElement('details');
        details.className = 'faq-item';
        details.innerHTML = `
            <summary>${item.pergunta}</summary>
            <div class="faq-answer">${item.resposta}</div>
        `;
        container.appendChild(details);
    });
}

document.addEventListener('DOMContentLoaded', carregarDuvidas);