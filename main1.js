document.addEventListener("DOMContentLoaded", () => {
    let fruits = document.querySelectorAll('li');
    
    fruits.forEach((fruta) => {
        fruta.addEventListener("mouseover", () => {
            imagemTela(fruta.textContent.trim().toLowerCase());
        });
        fruta.addEventListener("mouseout", () => {
            setTimeout(() => {
                limpaTela()
            }, 2000);
        });
    });
});

function imagemTela(textSearch) {
    let img = document.getElementById("imgSelect");
    let tFruits = document.getElementById('hTitle');

    let imagens = {
        "abacate": "/frutas/imagens/abacate.jpg",
        "acerola": "/frutas/imagens/acerola.jpg",
        "banana": "/frutas/imagens/banana.jpeg",
        "goiaba": "/frutas/imagens/goiaba.jpeg",
        "graviola": "/frutas/imagens/graviola.jpeg",
        "jabuticaba": "/frutas/imagens/jabuticaba.jpeg",
        "laranja": "/frutas/imagens/laranja.jpeg",
        "limao": "/frutas/imagens/limao.jpeg",
        "mexerica": "/frutas/frutas/imagens/mexerica.jpg",
        "morango": "/frutas/imagens/morango.jpeg",
        "pinha": "/frutas/imagens/pinha.jpeg",
        "pitanga": "/frutas/imagens/pitanga.jpeg",
        "pitaya": "/frutas/imagens/pitaya.jpeg",
        "roma": "/frutas/imagens/roma.jpg",
        "uva": "/frutas/imagens/uva.jpeg"
    };
    
    if(imagens[textSearch]){
        img.src = imagens[textSearch];
        tFruits.innerHTML = textSearch.toUpperCase()
    }
    else{
        img.src = "/frutas/imagens/frutas.jpeg";
        tFruits.innerHTML = "Search List";
    }
}

function frutas() {
    let fruits = document.querySelectorAll('li');
    let hrs = document.querySelectorAll('hr');
    let textSearch = document.getElementById('inputFruits').value.trim().toLowerCase();
    let noFruit = document.getElementById('noFruit');
    let found = false;

    if (textSearch.length > 0) {
        fruits.forEach((fruta, index) => {
            if (fruta.textContent.toLowerCase().includes(textSearch)) {
                fruta.style.display = "list-item";
                hrs[index].style.display = "block";
                found = true;
            } else {
                fruta.style.display = "none";
                hrs[index].style.display = "none";
            }
        });

        if (!found) {
            noFruit.innerHTML = `Fruta: <span style="color:black;">${textSearch.toUpperCase()}</span> - não encontrada!`;
        } else {
            noFruit.innerHTML = ""; // Limpa a mensagem de erro se encontrar a fruta
            imagemTela(textSearch); // Mostra a imagem correspondente
        }
    } else {
        fruits.forEach((fruta, index) => {
            fruta.style.display = "list-item";
            hrs[index].style.display = "block";
        });
        noFruit.innerHTML = '';
    }
}

function limpaTela(){
    let titleTela = document.getElementById('hTitle');
    let imgTela = document.getElementById('imgSelect');

    titleTela.innerHTML = 'Search List';
    imgTela.src = '/frutas/imagens/frutas.jpeg'
}

