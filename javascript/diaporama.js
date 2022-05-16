var slide = new Array("../image/diaporama/place_vatican.jpg", "../image/diaporama/place_vatican2.jpg", "../image/diaporama/place_vatican3.jpg");
//var slide = new Array("foret-peuplier.jpg", "paysage-montagne.jpg", "chemin-automne.jpg", "prairie-alpes.jpg");
var numero = 0;
setInterval("ChangeSlide(1)", 4000);
function ChangeSlide(sens) {
    numero = numero + sens;
    if (numero < 0)
        numero = slide.length - 1;
    if (numero > slide.length - 1)
        numero = 0;
    document.getElementById("slide").src = slide[numero];
}