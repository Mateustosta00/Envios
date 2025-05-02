














  window.addEventListener("pageshow", function (event) {
    // Se for uma navegação de volta (ex: botão "Voltar")
    if (event.persisted || window.performance.getEntriesByType("navigation")[0].type === "back_forward") {
      sessionStorage.clear(); // limpa sessão
      document.getElementById("login-area").style.display = "none";
      document.getElementById("lista-setores").style.display = "block";
      document.getElementById("senha").value = "";
      document.getElementById("erro-senha").textContent = "";
    }
  });

document.getElementById('transportForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Captura os dados dos campos
  const setor = document.getElementById('setorSolicitante').value.trim();
  const motivo = document.getElementById('motivo').value;
  const dataSolicitacao = document.getElementById('dataSolicitacao').value;
  const procedimento = document.getElementById('procedimento').value.trim();
  const destino = document.getElementById('destino').value.trim();
  const responsavel = document.getElementById('responsavel').value.trim();
  const dataSaida = document.getElementById('dataSaida').value;
  const horario = document.getElementById('horario').value;
  const coordenador = document.getElementById('coordenador').value.trim();
  const observacoes = document.getElementById('observacoes').value.trim();

  // Monta a mensagem
  let mensagem = `🚌 *Solicitação de Transporte*\n\n`;
  mensagem += `📌 *Setor Solicitante:* ${setor}\n`;
  mensagem += `📄 *Motivo:* ${motivo}\n`;
  mensagem += `📅 *Data da Solicitação:* ${dataSolicitacao}\n`;
  mensagem += `📝 *Procedimento/Atividade:* ${procedimento}\n`;
  mensagem += `📍 *Destino:* ${destino}\n`;
  mensagem += `👤 *Responsável:* ${responsavel}\n`;
  mensagem += `🚐 *Data de Saída:* ${dataSaida}\n`;
  mensagem += `🕒 *Horário de Saída:* ${horario}\n`;

  mensagem += `👨‍💼 *Coordenador Responsável:* ${coordenador}`;

  // Adiciona observações se houver
  if (observacoes) {
    mensagem += `\n🗒️ *Observações:* ${observacoes}`;
  }

  // Codifica a mensagem para a URL
  const mensagemCodificada = encodeURIComponent(mensagem);

  // Número do WhatsApp
  const numero = "71983560631";

  // Abre o WhatsApp
  window.open(`https://wa.me/55${numero}?text=${mensagemCodificada}`, '_blank');
});

  // Reseta o formulário
  this.reset();


