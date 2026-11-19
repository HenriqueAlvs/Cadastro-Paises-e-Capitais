const paises = [
    {
        nome:"Brasil",
        capital:"Brasília"
    },
    {
        nome:"Argentina",
        capital:"Buenos Aires"
    },
    {
        nome:"Canadá",
        capital:"Ottawa"
    },
    {
        nome:"Portugal",
        capital:"Lisboa"
    },
    {
        nome:"Suíça",
        capital:"Berna"
    }
]

const formulario = document.getElementById("formPaises")
const campoNome = document.getElementById("nome")
const campoCapital = document.getElementById("capital")
const corpoTabela = document.getElementById("corpoTabela")

function exibir(){
    corpoTabela.innerHTML = "";

    for (let posicao = 0; posicao < paises.length; posicao++){

        const pais = paises[posicao]

        corpoTabela.innerHTML += `
            <tr>
                <td>${posicao}</td>
                <td>${pais.nome}</td>
                <td>${pais.capital}</td>
            </tr>
       
        `
       
    }
}

exibir();

formulario.addEventListener("submit", function(evento){
    evento.preventDefault();

    const pais = {
        nome: campoNome.value,
        capital: campoCapital.value
    }

    paises.push(pais)

    exibir()

} )