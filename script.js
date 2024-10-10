function verificarGeracao() {
    let ano = parseInt(document.getElementById("ano").value);
    let resultado = document.getElementById("resultado");

    if (isNaN(ano)) {
        resultado.textContent = "Por favor, insira um ano válido!";
        return;
    }

    if (ano >= 1928 && ano <= 1945) {
        resultado.textContent = "Você pertence à Geração Silenciosa. Valorizam estabilidade e trabalho duro.";
    } else if (ano >= 1946 && ano <= 1964) {
        resultado.textContent = "Você pertence à Geração Baby Boomers. Enfrentaram grandes mudanças culturais.";
    } else if (ano >= 1965 && ano <= 1980) {
        resultado.textContent = "Você pertence à Geração X. Independentes e viram o início da era digital.";
    } else if (ano >= 1981 && ano <= 1995) {
        resultado.textContent = "Você pertence à Geração Millennials. Viram o crescimento da internet e das redes sociais.";
    } else if (ano >= 1996 && ano <= 2010) {
        resultado.textContent = "Você pertence à Geração Z. Totalmente digital e adaptados à tecnologia.";
    } else if (ano >= 2011) {
        resultado.textContent = "Você pertence à Geração Alpha. Crescendo em um mundo hiperconectado e tecnológico.";
    } else {
        resultado.textContent = "Ano de nascimento inválido.";
    }
}
