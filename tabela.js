/*Tabela*/
let tabela = document.getElementById("minha-linda-tabela")
let soma = 0
let dark = 0;

for(let i = 1; i < tabela.rows.length-1; i++){
    if(Number(tabela.rows[i].cells[3].innerText) < 0){
        tabela.rows[i].classList.add("table-danger")
    }
    else{
        tabela.rows[i].classList.add("table-success")
    }
    soma = soma+Number(tabela.rows[i].cells[3].innerText);
}
tabela.rows[tabela.rows.length-1].cells[1].innerText = soma.toFixed(2)

/*Dark Mode*/
let btn = document.getElementById("toggle-dark-mode").children[0] //button
let tableHeader = document.getElementById("minha-linda-tabela").rows[0] //table first row
let tableFooter = document.getElementById("minha-linda-tabela").rows[tabela.rows.length] //table last row
let headerText = document.getElementById("meu-nav").children[0] //header text
let tableHeaderText = document.getElementsByTagName("th") //table text
let bg = document.body.children[0] //background

btn.onclick = function(){
    if(dark === 0){
        bg.classList.remove("bg-light")
        bg.classList.add("bg-dark")
        headerText.classList.add("text-dark")
        btn.classList.add("bg-light","text-dark")
        btn.classList.remove("bg-dark","text-light")
        for(let i = 0; i < 4; i++){
            tableHeaderText[i].classList.remove("text-dark","bg-light")
            tableHeaderText[i].classList.add("text-light","bg-dark")
        }
        for(let i = tableHeaderText.length-2; i < tableHeaderText.length; i++){
            tableHeaderText[i].classList.remove("text-dark")
            tableHeaderText[i].classList.add("text-light")
        }
        dark = 1;
    }
    else{
        bg.classList.remove("bg-dark")
        bg.classList.add("bg-light")
        headerText.classList.remove("text-dark")
        btn.classList.add("bg-dark","text-light")
        btn.classList.remove("bg-light","text-dark")
        for(let i = 0; i < 4; i++){
            tableHeaderText[i].classList.remove("text-light","bg-dark")
            tableHeaderText[i].classList.add("text-dark","bg-light")
        }
        for(let i = tableHeaderText.length-2; i < tableHeaderText.length; i++){
            tableHeaderText[i].classList.remove("text-light")
            tableHeaderText[i].classList.add("text-dark")
        }
        dark = 0
    }
}