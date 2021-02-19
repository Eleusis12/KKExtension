// function updateClipboard(newClip) {

// }



browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "Copy") {
        console.log("request:", request.data);
        console.log(request.data);


        try {

            // const imgURL = request.imagemLink;
            // const data = fetch(imgURL);
            // const blob = data.blob;

            // // navigator.clipboard.write([
            // //     new ClipboardItem({
            // //         [blob.type]: blob
            // //     })
            // // ]);


            // const type = 'text/plain';
            // const blob = new Blob([request.data.nomeProduto + "\nLoja: " + request.data.loja + "\nPreço: " + request.data.preco + "\nPortes: " + request.data.precoPortes], {
            //     type
            // });




            navigator.clipboard.writeText(request.data.nomeProduto + "\nLoja: " +
                request.data.loja + "\nPreço: " + request.data.preco +
                "\nPortes: " + request.data.precoPortes + "\nLink: " + request.data.tabUrl
            ).then(function () {
                /* clipboard successfully set */
            }, function () {
                /* clipboard write failed */
            });






            sendResponse("Feito");

        } catch (err) {
            console.error(err.name, err.message);
            sendResponse("Erro");
        }




    }
})