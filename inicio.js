const setores = {
    setor1: {
      nome: "ENFERMAGEM",
      senha: "senha",
      imagem: "enfermagem.jpg"
    },
    setor2: {
      nome: "FARMÁCIA",
      senha: "abc456",
      imagem: "24075-simbolo-farmacia-1200-4 (1).webp"
    },
    setor3: {
      nome: "LABORATÓRIO",
      senha: "minhasenha",
      imagem: "vetor-de-_C3_ADcone-laboratorial-sinal-ilustra_C3_A7_C3_A3o-an_C3_A1lises-s_C3_ADmbolo-laborat_C3_B3rio-logotipo-qu_C3_ADmica-pode-ser-usado-em-sites-ou-233778580.jpg"
    }
  };
  
  let setorAtual = null;
  
  function mostrarLista() {
    document.getElementById('lista-setores').style.display = 'block';
    document.getElementById('login-area').style.display = 'none';
    document.getElementById('erro-senha').textContent = '';
  }
  
  function mostrarLogin(id) {
    setorAtual = id;
    const setor = setores[id];
  
    document.getElementById('lista-setores').style.display = 'none';
    document.getElementById('login-area').style.display = 'block';
    document.getElementById('foto-setor').src = setor.imagem;
    document.getElementById('senha').value = '';
    document.getElementById('erro-senha').textContent = '';
  }
  
  function verificarSenha() {
    const senhaDigitada = document.getElementById('senha').value;
    const setor = setores[setorAtual];
  
    if (senhaDigitada === setor.senha) {
      // Salvando dados no localStorage
      sessionStorage.setItem("setorNome", setor.nome);
      sessionStorage.setItem("setorImagem", setor.imagem);
      
      
      window.location.href = 'user.html';
    } else {
      document.getElementById('erro-senha').textContent = 'Senha incorreta!';
    }
  }
  
  
  // Bloquear F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
  document.addEventListener('keydown', function (e) {
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J')) ||
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault();
      alert("Ação bloqueada!");
      return false;
    }
  });
  
  // Bloquear clique com botão direito
  document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
    alert("Função desabilitada!");
  });
  


  