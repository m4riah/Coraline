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
    textCard(character)
}

function textCard(character) {
    var personagens = {
        'coraline': {
            nome: 'Coraline',
            descricao: 'Coraline é a protagonista corajosa e curiosa da história. Ao explorar um mundo paralelo, ela descobre uma versão alternativa de sua vida e enfrenta desafios assustadores. Com determinação e astúcia, Coraline enfrenta perigos e luta para proteger sua família e si mesma, mostrando a força de sua personalidade e sua capacidade de superação.'
        },
        'maeCoraline': {
            nome: 'Mel Jones',
            descricao: 'Uma mãe ocupada para Coraline, ele quase sempre se vê escrevendo um catálogo de plantas para seu trabalho. . No decorrer da história, a relação entre mãe e filha é posta à prova, destacando a importância da família e do vínculo entre eles.'
        },
        'pai': {
            nome: 'Charles Jones',
            descricao: 'Pai de Coraline, igualmente ocupado por trabalhar também no catálogo. Ele dá um pouco mais de atenção à menina do que à mãe, mas quase nada.'
        },
        'wybie': {
            nome: 'Wybie Lovat',
            descricao: 'Ele é neto da dona do apartamento onde mora Coraline. É vizinho de Coraline que a acompanha em sua jornada no mundo paralelo. Ele é curioso e se mostra um aliado para Coraline, mesmo que inicialmente pareça um pouco estranho. Sua presença traz um elemento de companheirismo e cumplicidade à história, ajudando Coraline a enfrentar os desafios que encontra.'
        },
        'mrbobinsky': {
            nome: 'MR Bobinsky',
            descricao: 'Uma ginasta russo aposentado que mora no andar de cima do Palácio Rosa e é um dos vizinhos dos Jones.'
        },
        'gato': {
            nome: 'Gato',
            descricao: 'Um gato preto do mundo de Coraline. Ele pode sumir e aparecer em qualquer lugar. Ele é capaz de falar no outro mundo e é o principal guia e ajudante de Coraline em ambos os mundos para sobreviver às armadilhas da "Outra Mãe".'
        },
        'outraMae': {
            nome: 'Beldam',
            descricao:'A "Outra Mãe" de Coraline é uma personagem enigmática e sedutora, que vive em um mundo paralelo. Ela inicialmente se apresenta como uma mãe ideal, mas esconde segredos obscuros que Coraline precisa descobrir.'
        },
        'outroPai': {
            nome: 'Sr. Jones',
            descricao: 'O "Outro Pai" de Coraline é uma figura encantadora que vive no mundo paralelo. Ele é um contraponto ao pai real de Coraline, oferecendo atenção e afeto. No entanto, também esconde aspectos misteriosos e perigosos que Coraline precisa enfrentar.'
        },
        'outroWybie': {
            nome: 'Outro Wybie',
            descricao: 'o "Outro Wybie" é um garoto silencioso que se assemelha ao Wybie real. Ele é um companheiro solitário e curioso, mas apresenta diferenças marcantes em relação ao seu comportamento e personalidade. Sua presença acrescenta uma camada de mistério à história de Coraline.'
        },
        'outroMrbobinsky': {
            nome: 'Outro Sr. Bobinsky',
            descricao: 'O "Outro Sr. Bobinsky" é um personagem peculiar e excêntrico que vive no mundo paralelo de Coraline. Ele é um vizinho excêntrico que possui uma paixão pelo circo e pela dança. Sua presença e comportamento imprevisível adicionam um elemento intrigante à história de Coraline.'
        },
        'criancas':{
            nome: 'Crianças Fantasmas',
            descricao: 'As "crianças fantasmas" são personagens misteriosas encontradas por Coraline em sua jornada. Elas são almas presas no mundo paralelo, que buscam a ajuda de Coraline para resolver seus problemas. Sua presença adiciona um elemento sobrenatural à história, trazendo um senso de perigo e mistério.'
        }
    };

    if (personagens.hasOwnProperty(character)) {
        var personagem = personagens[character];
        document.getElementById('nome-personagem').textContent = personagem.nome;
        document.getElementById('descricao-personagem').textContent = personagem.descricao;
    }
}

window.addEventListener('DOMContentLoaded', function() {
    const wrapper = document.querySelector('.wrapper');
    const images = Array.from(wrapper.querySelectorAll('img'));
    const imageWidth = images[0].offsetWidth; // Obtém a largura de uma imagem
  
    // Clona as imagens e adiciona-as ao final do wrapper
    images.forEach(function(image) {
      const clone = image.cloneNode(true);
      wrapper.appendChild(clone);
    });
  
    let currentPosition = 0;
  
    function animate() {
      currentPosition -= 0.9; // velocidade da rolagem 
      wrapper.style.transform = `translateX(${currentPosition}px)`;
  
      if (currentPosition <= -wrapper.offsetWidth) {
        currentPosition = 0;
        wrapper.style.transform = 'translateX(0)';
      }
  
      requestAnimationFrame(animate);
    }
  
    animate();
  });
  