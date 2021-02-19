// import Produto from '../Model/Produto';

console.log("odasds");
browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    console.log("estou aqui")
    if (request.action === "get_product_information") {
        console.log("mensagem recebida com sucesso");


        // A versão atual necessita de interagir com a página
        // Primeiro vamos Ordenar os precos
        let ordenaPrecos = getElementByXpath("/html/body/div[2]/div[3]/div[3]/div/div[2]/div[1]/div[1]/div/ul/li[4]/a").click();

        // O comentário abaixo funciona
        // let listaPrecos = document.querySelectorAll("div.store-item-vertical > p > span.price");
        // let listaPortes = document.querySelectorAll("p.cpc-shipping span:nth-child(2),div.text-right:nth-child(2) > div:nth-child(1) > span:nth-child(1),p.cpc-shipping > span.free-shipping");
        // let arrayPortes = Array.from(listaPortes);

        // let items = Array.from(listaPrecos).map(function (e, i) {
        //     return [e.innerText, arrayPortes[i].innerText];
        // });

        // console.log(items);



        // Obter as informações do produto
        let nomeProduto = getElementByXpath("/html/body/div[2]/div[3]/div[2]/div/div/div/div[3]/h1")["innerText"];
        console.log(nomeProduto);

        let imagemLink = getElementByXpath("/html/body/div[2]/div[3]/div[2]/div/div/div/div[2]/div[2]/img")["src"];
        console.log(imagemLink);
        let loja = getElementByXpath("/html/body/div[2]/div[3]/div[3]/div/div[2]/div[1]/div[2]/div[1]/div/div/div[1]/div/div/span[1]/span/a/img")["alt"];
        console.log(loja);

        let precoParent = document.getElementsByClassName("prices-col")[0];
        let preco = precoParent.children[0].children[0].children[0].children[0].children[0].children[0].innerText;
        console.log(preco);

        let precoPortes = 0;
        // let precoPortes = $(".cpc-shipping")[0].children[0].innerText;
        // console.log(precoPortes);



        // Criar um objeto com as características
        // produto_atual = new Produto(nomeProduto, preco, precoPortes, loja, imagemLink);

        // console.log(produto_atual);
        return Promise.resolve({
            nomeProduto: nomeProduto,
            preco: preco,
            precoPortes: precoPortes,
            loja: loja,
            imagemLink: imagemLink,
            tabUrl: request.tabUrl
        });
    }
})





// Obter a o elemento através do seu xPath
function getElementByXpath(path) {
    let value = document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (typeof value === 'undefined' || value === null) {
        value = "elemento não encontrado";
    }


    return value;
}