
const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}


i=0;

//enquanto
while (i < listaDeTeclas.length ) {


    const tecla = listaDeTeclas[i]

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`;

    console.log(idAudio);

    tecla.onclick = function() {
        tocaSom(idAudio);
    } ;
    i ++;

    console.log(i);
}



/*function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/
