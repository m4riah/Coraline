function selectCharacter(character) {
    var personagemImgs = document.getElementsByClassName("personagem-img");
    for (var i = 0; i < personagemImgs.length; i++) {
        personagemImgs[i].style.display = "none";
    }

    if (character === 'coraline') {
        document.getElementById('coraline').style.display = 'block';
        document.getElementById('maeCoraline').style.display = 'none';
        document.getElementById('paiCoraline').style.display = 'none';
        document.getElementById('wybie').style.display = 'none';
        document.getElementById('mrbobinsky').style.display = 'none';
        document.getElementById('gato').style.display = 'none';
        document.getElementById('outraMae').style.display = 'none';
        document.getElementById('outroPai').style.display = 'none';
        document.getElementById('outroWybie').style.display = 'none';
        document.getElementById('outroMrbobinsky').style.display = 'none';
        document.getElementById('criancas').style.display = 'none';
    } else if (character === 'maeCoraline') {
        document.getElementById('coraline').style.display = 'none';
        document.getElementById('maeCoraline').style.display = 'block';
        document.getElementById('paiCoraline').style.display = 'none';
        document.getElementById('wybie').style.display = 'none';
        document.getElementById('mrbobinsky').style.display = 'none';
        document.getElementById('gato').style.display = 'none';
        document.getElementById('outraMae').style.display = 'none';
        document.getElementById('outroPai').style.display = 'none';
        document.getElementById('outroWybie').style.display = 'none';
        document.getElementById('outroMrbobinsky').style.display = 'none';
        document.getElementById('criancas').style.display = 'none';
    } else if (character === 'pai') {
        document.getElementById('coraline').style.display = 'none';
        document.getElementById('maeCoraline').style.display = 'none';
        document.getElementById('paiCoraline').style.display = 'block';
        document.getElementById('wybie').style.display = 'none';
        document.getElementById('mrbobinsky').style.display = 'none';
        document.getElementById('gato').style.display = 'none';
        document.getElementById('outraMae').style.display = 'none';
        document.getElementById('outroPai').style.display = 'none';
        document.getElementById('outroWybie').style.display = 'none';
        document.getElementById('outroMrbobinsky').style.display = 'none';
        document.getElementById('criancas').style.display = 'none';
    } else if (character === 'wybie') {
        document.getElementById('coraline').style.display = 'none';
        document.getElementById('maeCoraline').style.display = 'none';
        document.getElementById('paiCoraline').style.display = 'none';
        document.getElementById('wybie').style.display = 'block';
        document.getElementById('mrbobinsky').style.display = 'none';
        document.getElementById('gato').style.display = 'none';
        document.getElementById('outraMae').style.display = 'none';
        document.getElementById('outroPai').style.display = 'none';
        document.getElementById('outroWybie').style.display = 'none';
        document.getElementById('outroMrbobinsky').style.display = 'none';
        document.getElementById('criancas').style.display = 'none';
    } else if (character === 'mrbobinsky') {
        document.getElementById('coraline').style.display = 'none';
        document.getElementById('maeCoraline').style.display = 'none';
        document.getElementById('paiCoraline').style.display = 'none';
        document.getElementById('wybie').style.display = 'none';
        document.getElementById('mrbobinsky').style.display = 'block';
        document.getElementById('gato').style.display = 'none';
        document.getElementById('outraMae').style.display = 'none';
        document.getElementById('outroPai').style.display = 'none';
        document.getElementById('outroWybie').style.display = 'none';
        document.getElementById('outroMrbobinsky').style.display = 'none';
        document.getElementById('criancas').style.display = 'none';
    } else if (character === 'gato') {
        document.getElementById('coraline').style.display = 'none';
        document.getElementById('maeCoraline').style.display = 'none';
        document.getElementById('paiCoraline').style.display = 'none';
        document.getElementById('wybie').style.display = 'none';
        document.getElementById('mrbobinsky').style.display = 'none';
        document.getElementById('gato').style.display = 'block';
        document.getElementById('outraMae').style.display = 'none';
        document.getElementById('outroPai').style.display = 'none';
        document.getElementById('outroWybie').style.display = 'none';
        document.getElementById('outroMrbobinsky').style.display = 'none';
        document.getElementById('criancas').style.display = 'none';
    } else if (character === 'outraMae') {
        document.getElementById('coraline').style.display = 'none';
        document.getElementById('maeCoraline').style.display = 'none';
        document.getElementById('paiCoraline').style.display = 'none';
        document.getElementById('wybie').style.display = 'none';
        document.getElementById('mrbobinsky').style.display = 'none';
        document.getElementById('gato').style.display = 'none';
        document.getElementById('outraMae').style.display = 'block';
        document.getElementById('outroPai').style.display = 'none';
        document.getElementById('outroWybie').style.display = 'none';
        document.getElementById('outroMrbobinsky').style.display = 'none';
        document.getElementById('criancas').style.display = 'none';
    } else if (character === 'outroPai') {
        document.getElementById('coraline').style.display = 'none';
        document.getElementById('maeCoraline').style.display = 'none';
        document.getElementById('paiCoraline').style.display = 'none';
        document.getElementById('wybie').style.display = 'none';
        document.getElementById('mrbobinsky').style.display = 'none';
        document.getElementById('gato').style.display = 'none';
        document.getElementById('outraMae').style.display = 'none';
        document.getElementById('outroPai').style.display = 'block';
        document.getElementById('outroWybie').style.display = 'none';
        document.getElementById('outroMrbobinsky').style.display = 'none';
        document.getElementById('criancas').style.display = 'none';
    } else if (character === 'outroWybie'){
        document.getElementById('coraline').style.display = 'none';
        document.getElementById('maeCoraline').style.display = 'none';
        document.getElementById('paiCoraline').style.display = 'none';
        document.getElementById('wybie').style.display = 'none';
        document.getElementById('mrbobinsky').style.display = 'none';
        document.getElementById('gato').style.display = 'none';
        document.getElementById('outraMae').style.display = 'none';
        document.getElementById('outroPai').style.display = 'none';
        document.getElementById('outroWybie').style.display = 'block';
        document.getElementById('outroMrbobinsky').style.display = 'none';
        document.getElementById('criancas').style.display = 'none';
    } else if (character === 'outroMrbobinsky') {
        document.getElementById('coraline').style.display = 'none';
        document.getElementById('maeCoraline').style.display = 'none';
        document.getElementById('paiCoraline').style.display = 'none';
        document.getElementById('wybie').style.display = 'none';
        document.getElementById('mrbobinsky').style.display = 'none';
        document.getElementById('gato').style.display = 'none';
        document.getElementById('outraMae').style.display = 'none';
        document.getElementById('outroPai').style.display = 'none';
        document.getElementById('outroWybie').style.display = 'none';
        document.getElementById('outroMrbobinsky').style.display = 'block';
        document.getElementById('criancas').style.display = 'none';
    } else if ( character === 'criancas') {
        document.getElementById('coraline').style.display = 'none';
        document.getElementById('maeCoraline').style.display = 'none';
        document.getElementById('paiCoraline').style.display = 'none';
        document.getElementById('wybie').style.display = 'none';
        document.getElementById('mrbobinsky').style.display = 'none';
        document.getElementById('gato').style.display = 'none';
        document.getElementById('outraMae').style.display = 'none';
        document.getElementById('outroPai').style.display = 'none';
        document.getElementById('outroWybie').style.display = 'none';
        document.getElementById('outroMrbobinsky').style.display = 'none';
        document.getElementById('criancas').style.display = 'block';
    }

}
