const formulario = document.getElementById('meuFormulario');
const colecao = document.getElementById('colecao');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // 1. Pegar os valores
    const nomeValor = document.getElementById('titulo').value;
    const urlValor = document.getElementById('imagem').value;
    const perfilValor = document.getElementById('descricao').value;
    const sobreValor = document.getElementById('paragrafo').value;

    // 2. Criar o Container do Card
    const card = document.createElement('div');
    card.style.border = "1px solid #000";
    card.style.padding = "15px";
    card.style.margin = "10px";
    card.style.borderRadius = "10px";
    card.style.backgroundColor = "#fff";

    // 3. Criar a Imagem (O ponto crítico)
    const img = document.createElement('img');
    img.src = urlValor; // Define a fonte
    img.style.width = "150px"; // Define um tamanho visível
    img.style.display = "block";
    img.alt = perfilValor;

    // 4. Criar os textos
    const h3 = document.createElement('h3');
    h3.textContent = nomeValor;

    const pPerfil = document.createElement('p');
    pPerfil.innerHTML = `<strong>Perfil:</strong> ${perfilValor}`;

    const pSobre = document.createElement('p');
    pSobre.textContent = sobreValor;

    // 5. Colocar tudo dentro do card na ordem certa
    card.appendChild(h3);
    card.appendChild(img); // A imagem entra aqui
    card.appendChild(pPerfil);
    card.appendChild(pSobre);

    // 6. Jogar o card na tela
    colecao.appendChild(card);

    // 7. Limpar o formulário
    formulario.reset();
});