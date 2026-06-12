
const visor = document.getElementById("visor");


// Adiciona números e operadores ao visor
function adicionar(valor) {
    visor.value += valor;
}


// Limpa o visor
function limpar() {
    visor.value = "";
}


// Realiza o cálculo
function calcular() {

    if (visor.value === "") {
        return;
    }

    try {

        // Impede divisão por zero
        if (visor.value.includes("/0")) {
            visor.value = "Erro";
            return;
        }

        let resultado = eval(visor.value);

        visor.value = resultado;

    } catch (erro) {

        visor.value = "Erro";

    }

}
