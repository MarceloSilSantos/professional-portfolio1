
const btnMostrarFigura = document.getElementById('mostrarFigura');
const imagemContainer = document.getElementById('imagemContainer');
const imagem = document.getElementById('imagem');

btnMostrarFigura.addEventListener('click', function() {
    imagemContainer.style.display = 'block';
    imagem.src = 'src\images\projeto3.png'; 
});