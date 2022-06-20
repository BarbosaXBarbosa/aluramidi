
const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

//para
for (i=0; i < listaDeTeclas.length; i++ ) {

    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;

    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function() {
        tecla.classList.add('ativa');
    }

}

