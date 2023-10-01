

function comentar(){

    let names = document.getElementById("name") .value
    let txt = document.getElementById("textarea").value

    let validar = validarDados(names, txt)

    if (validar == true){
        let content = document.getElementById("content")
        // let div = document.createElement('div');
        let h2Name = document.createElement('h2');
        let pTxt = document.createElement('p');

        content.appendChild(h2Name)
        content.appendChild(pTxt)
        
        h2Name.innerText = `${names}`
        pTxt.innerText = `${txt}`
        limparForm()

    }

}

function validarDados( names, txt){
    if(names.length < 3 || txt.length < 5){
        document.getElementById("span-error").innerText = "Digite um nome valido!";
        document.getElementById("span-error-txt").innerText = "Digite um texto valido!";
        return false
    }
    return true
}

function limparForm(){
    document.getElementById("name") .value = ""
    document.getElementById("textarea").value = ""
    document.getElementById("span-error").value = ""
    document.getElementById("span-error-txt") .value = ""
}
