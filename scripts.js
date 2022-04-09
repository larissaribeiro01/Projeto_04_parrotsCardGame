const baralho =[{img: 'Imagens/metalparrot.gif'},{img: 'Imagens/metalparrot.gif'}, {img: 'Imagens/bobrossparrot.gif'}, {img: 'Imagens/bobrossparrot.gif'},{img: 'Imagens/explodyparrot.gif'},{img: 'Imagens/explodyparrot.gif'},
{img: 'Imagens/fiestaparrot.gif'},{img: 'Imagens/fiestaparrot.gif'},
{img: 'Imagens/revertitparrot.gif'},{img: 'Imagens/revertitparrot.gif'}, 
{img: 'Imagens/tripletsparrot.gif'},{img: 'Imagens/tripletsparrot.gif'},
{img: 'Imagens/unicornparrot.gif'}, {img: 'Imagens/unicornparrot.gif'}]

const jogadas =[]

let numCartas=Number(prompt ("Com quantas cartas você quer jogar?"))
let rest= numCartas%2
while (rest!=0 || numCartas<4 || numCartas>14) {
    numCartas=Number(prompt ("Com quantas cartas você quer jogar?"))
    rest=numCartas%2
}

gameCards=baralho.slice(0,numCartas);
function comparador () {
    return Math.random() - 0.5;
}

gameCards=gameCards.sort(comparador);
//pares de cartas embaralhar

for (let i=0; i<numCartas; i++) {
    document.querySelector(".allCards").innerHTML +=
    `<div class="card" >
        <div class="frontFace face front" onclick="turnCards(this)" >
            <img src="${gameCards[i].img}" />
        </div>
        <div class="backFace face back" onclick="turnCards(this)">
            <img src="Imagens/front.png" />
            
            
        </div>
    </div>`
}



function comparaCards () {
    let n=jogadas.length
    if (n%2==0) {
        
        if (jogadas[n-1].imagem!==jogadas[n-2].imagem) {
            setTimeout (function () {
            jogadas[n-1].frente.classList.remove("backFace");
            jogadas[n-1].frente.classList.add("frontFace");
            jogadas[n-1].verso.classList.remove("frontFace");
            jogadas[n-1].verso.classList.add("backFace");
            jogadas[n-2].frente.classList.remove("backFace");
            jogadas[n-2].frente.classList.add("frontFace");
            jogadas[n-2].verso.classList.remove("frontFace");
            jogadas[n-2].verso.classList.add("backFace");
            }, 1000);

        }
    }
}


function turnCards (elemento) { 
    
    elemento.parentNode.querySelector(".front").classList.remove('frontFace')
    elemento.parentNode.querySelector(".front").classList.add('backFace')
    elemento.parentNode.querySelector(".back").classList.remove('backFace')
    elemento.parentNode.querySelector(".back").classList.add('frontFace')
    
    selectCard={imagem: elemento.parentNode.querySelector(".front").innerHTML , 
    frente: elemento.parentNode.querySelector(".front"), verso: elemento.parentNode.querySelector(".back") }
    jogadas.push(selectCard)

    comparaCards();


}
