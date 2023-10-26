function rolarParaImagem(imageId) {
    const image = document.getElementById(imageId);
    if (image) {
        window.scrollTo({
            behavior: 'smooth',
            top: image.offsetTop
        });
    }
}

document.querySelectorAll('header a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const imageId = link.textContent.toLowerCase().replace(' ', ''); // Obtém o ID da imagem a partir do texto do link
        rolarParaImagem(imageId);
    });
});
