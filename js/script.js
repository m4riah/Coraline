function selectCharacter(character) {
    var personagemImgs = document.getElementsByClassName("personagem-img");
    for (var i = 0; i < personagemImgs.length; i++) {
        personagemImgs[i].style.display = "none";
    }

    var personagens = {
        'coraline': 'coraline',
        'maeCoraline': 'maeCoraline',
        'pai': 'paiCoraline',
        'wybie': 'wybie',
        'mrbobinsky': 'mrbobinsky',
        'gato': 'gato',
        'outraMae': 'outraMae',
        'outroPai': 'outroPai',
        'outroWybie': 'outroWybie',
        'outroMrbobinsky': 'outroMrbobinsky',
        'criancas': 'criancas'
    };

    if (personagens.hasOwnProperty(character)) {
        document.getElementById(personagens[character]).style.display = 'block';
    }
}
