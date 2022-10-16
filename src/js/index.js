/*
Clicar na aba para mostrar o conteudo da mesma.

1- pegar os elementos que representam nas abas no htmk

2- indentificar o clique na aba

3- quando clicar, desmarcar a aba

4- marcar a aba clicada como selecionada

5- esconder a aba anterior

6- mostrar a aba selecionada
*/

const abas = document.querySelectorAll(".aba");

abas.forEach(aba => {
    aba.addEventListener("click", function() {

        if(aba.classList.contains("selecionado")){
            return;
        }

        selecionarAba(aba)

        mostrarInformacoesDaAba(aba)

    });
});

function selecionarAba(aba) {
    const abaSelecionada = document.querySelector(".aba.selecionado");
        abaSelecionada.classList.remove("selecionado")

        aba.classList.add("selecionado")
}

function mostrarInformacoesDaAba(aba) {
    const informacaoSelecionada = document.querySelector(".informacao.selecionado");
        informacaoSelecionada.classList.remove("selecionado");

        const idDoElementoInformacoesDaAba = `informacao-${aba.id}`

        const informacaoASerMostrada = document.getElementById(idDoElementoInformacoesDaAba)
        informacaoASerMostrada.classList.add("selecionado")
}