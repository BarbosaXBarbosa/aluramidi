
const listaDeTeclas = document.querySelectorAll('.tecla');

function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}


i=0;

//enquanto
while(i < listaDeTeclas.length ) {
    listaDeTeclas[i].onclick = tocaSomPom;
    i ++;

    console.log(i);
}



/*function tocaSomPom() {
    document.querySelector('#som_tecla_pom').play();
}

document.querySelector('.tecla_pom').onclick = tocaSomPom;
*/
