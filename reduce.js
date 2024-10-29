const mediasTurmaA = [7.5, 8.0, 6.5, 9.0, 7.8, 8.5, 6.9, 7.2, 8.1, 9.3];
const mediasTurmaB = [6.7, 7.4, 8.2, 5.9, 8.0, 7.1, 6.8, 9.0, 8.5, 7.6];
const mediasTurmaC = [8.8, 7.9, 6.6, 9.4, 7.5, 8.3, 7.7, 9.1, 6.9, 8.4];


function calculaMedia(mediaTurma) {
    const medias = mediaTurma.reduce((acumulador, nota) => acumulador + nota, 0)/mediaTurma.length;
    console.log(medias.toFixed(2));
}

calculaMedia(mediasTurmaA);
calculaMedia(mediasTurmaB);
calculaMedia(mediasTurmaC);