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
        "abacate": "/imagens/abacate.jpg",
        "acerola": "/imagens/acerola.jpg",
        "banana": "/imagens/banana.jpeg",
        "goiaba": "/imagens/goiaba.jpeg",
        "graviola": "/imagens/graviola.jpeg",
        "jabuticaba": "/imagens/jabuticaba.jpeg",
        "laranja": "/imagens/laranja.jpeg",
        "limao": "/imagens/limao.jpeg",
        "mexerica": "/imagens/mexerica.jpg",
        "morango": "/imagens/morango.jpeg",
        "pinha": "/imagens/pinha.jpeg",
        "pitanga": "/imagens/pitanga.jpeg",
        "pitaya": "/imagens/pitaya.jpeg",
        "roma": "/imagens/roma.jpg",
        "uva": "/imagens/uva.jpeg"
    };
    
    if(imagens[textSearch]){
        img.src = imagens[textSearch];
        tFruits.innerHTML = textSearch.toUpperCase()
    }
    else{
        img.src = "/imagens/frutas.jpeg";
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
    imgTela.src = '/imagens/frutas.jpeg'
}

