const palavras = ["banana", "python", "computador", "abacaxi", "javascript"];
const palavra = palavras[Math.floor(Math.random() * palavras.length)];
let letrasCorretas = [];
let letrasErradas = [];
let tentativas = 6;

function mostrarPalavra() {
  const palavraMostrada = palavra
    .split('')
    .map(letra => (letrasCorretas.includes(letra) ? letra : "_"))
    .join(' ');
  document.getElementById("palavra-secreta").innerText = palavraMostrada;
}

function tentarLetra() {
  const letraInput = document.getElementById("letra");
  const letra = letraInput.value.toLowerCase();
  letraInput.value = "";

  if (!letra.match(/[a-z]/i) || letra.length === 0) {
    alert("Digite uma letra válida!");
    return;
  }

  if (letrasCorretas.includes(letra) || letrasErradas.includes(letra)) {
    alert("Você já tentou essa letra!");
    return;
  }

  if (palavra.includes(letra)) {
    letrasCorretas.push(letra);
  } else {
    letrasErradas.push(letra);
    tentativas--;
  }

  atualizarJogo();
}

function atualizarJogo() {
  mostrarPalavra();
  document.getElementById("letras-usadas").innerText = "Letras usadas: " + letrasErradas.join(', ');
  document.getElementById("tentativas").innerText = `Tentativas restantes: ${tentativas}`;

  if (tentativas === 0) {
    document.getElementById("mensagem").innerText = `Você perdeu! A palavra era: ${palavra}`;
    document.getElementById("letra").disabled = true;
  }

  if (palavra.split('').every(letra => letrasCorretas.includes(letra))) {
    document.getElementById("mensagem").innerText = "🎉 Você venceu!";
    document.getElementById("letra").disabled = true;
  }
}

mostrarPalavra();
