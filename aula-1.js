function mudaCor() {
    titulo.style.color = 'red';   
}

titulo.addEventListener('click', mudaCor(titulo));
paragrafo.addEventListened('click', mudaCor(paragrafo));