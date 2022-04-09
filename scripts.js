const baralho =[{img: 'Imagens/metalparrot.gif'},{img: 'Imagens/metalparrot.gif'}, {img: 'Imagens/bobrossparrot.gif'}, {img: 'Imagens/bobrossparrot.gif'},{img: 'Imagens/explodyparrot.gif'},{img: 'Imagens/explodyparrot.gif'},
{img: 'Imagens/fiestaparrot.gif'},{img: 'Imagens/fiestaparrot.gif'},
{img: 'Imagens/revertitparrot.gif'},{img: 'Imagens/revertitparrot.gif'}, 
{img: 'Imagens/tripletsparrot.gif'},{img: 'Imagens/tripletsparrot.gif'},
{img: 'Imagens/unicornparrot.gif'}, {img: 'Imagens/unicornparrot.gif'}]


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
        <div class="frontFace face first" onclick="turnCards(this)" >
            <img src="${gameCards[i].img}" />
        </div>
        <div class="backFace face second" onclick="turnCards(this)">
            <img src="Imagens/front.png" />
            
            
        </div>
    </div>`
}




function turnCards (elemento) {
    elemento.parentNode.querySelector(".face.first").classList.remove('frontFace')
    elemento.parentNode.querySelector(".face.first").classList.add('backFace')
    elemento.parentNode.querySelector(".face.second").classList.remove('backFace')
    elemento.parentNode.querySelector(".face.second").classList.add('frontFace')
    
    
    

    

}
