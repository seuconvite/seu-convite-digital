// --- CONTROLE DO MODAL (POP-UP) ---
var modal = document.getElementById('modalOrcamento');
var btnFechar = document.getElementById('fecharModal');
var botoesAbrir = document.querySelectorAll('.btn-abrir-modal');

botoesAbrir.forEach(function(botao) {
  botao.addEventListener('click', function(e) {
    e.preventDefault();
    if (modal) {
      modal.classList.add('active');
    }
  });
});

if (btnFechar) {
  btnFechar.addEventListener('click', function() {
    modal.classList.remove('active');
  });
}

if (modal) {
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
    modal.classList.remove('active');
  }
});

// --- ENVIO DAS INFORMAÇÕES PARA O WHATSAPP ---
var quoteForm = document.getElementById('quoteForm');

if (quoteForm) {
  quoteForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Substitua pelo seu WhatsApp (DDD + Número)
    var meuNumeroWhatsApp = '5527992497940';

    var nome = document.getElementById('nome').value;
    var tipoEvento = document.getElementById('tipoEvento').value;
    var formato = document.getElementById('formato').value;
    var dataEvento = document.getElementById('dataEvento').value;
    var observacoes = document.getElementById('observacoes').value;

    var dataFormatada = 'A definir';
    if (dataEvento) {
      var partesData = dataEvento.split('-');
      dataFormatada = partesData[2] + '/' + partesData[1] + '/' + partesData[0];
    }

    var mensagem = 'Olá! Gostaria de consultar valores para meu evento:\n\n';
    mensagem += '👤 *Nome:* ' + nome + '\n';
    mensagem += '🎉 *Tipo de Evento:* ' + tipoEvento + '\n';
    mensagem += '📱 *Formato:* ' + formato + '\n';
    mensagem += '📅 *Data Prevista:* ' + dataFormatada + '\n';

    if (observacoes.trim() !== '') {
      mensagem += '📝 *Detalhes/Tema:* ' + observacoes + '\n';
    }

    var urlWhatsApp = 'https://wa.me/' + meuNumeroWhatsApp + '?text=' + encodeURIComponent(mensagem);

    window.open(urlWhatsApp, '_blank');
    modal.classList.remove('active');
  });
}