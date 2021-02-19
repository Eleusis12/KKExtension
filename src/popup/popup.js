var resposta;
var cor;


browser.tabs.query({
    active: true,
    currentWindow: true,
    url: "*://www.kuantokusta.pt/*"
}, (tabs) => {
    $('body').show();
    browser.tabs.sendMessage(tabs[0].id, {
        action: "get_product_information",
        tabUrl: tabs[0].url
    }, response => {
        resposta = response;
        console.log("resposta:", response);
        $("#product-image-pic").attr("src", response.imagemLink);
        $("#product-name").text(response.nomeProduto);
        $("#store-name").innerText = "Loja: " + response.loja;
        $(".price-new")[0].innerText = "Preço: " + response.preco;
        $(".price-shipping")[0].innerText = "Portes: " + response.precoPortes;




    })
})

// Quando o utilizador pressiona no botão de copiar para a área de transferência
$(document).on('click', '#copy-product-info', (e) => {
    console.log("Copiar para a área de transferência");
    browser.runtime.sendMessage({
        action: "Copy",
        data: resposta
    }, res => {
        console.log(res);
    })
})

$(document).on("click", ".settings", (e) => {
    console.log("Entrar nas opcoes");
    browser.runtime.openOptionsPage();
})

$(".info-wrap").css("background-color", function () {
    browser.storage.local.get(['backgroundPopupColor'], function (result) {
        cor = result.Value;
        console.log(cor);
    });
    return cor;

})