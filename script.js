function enviarWhats(event) {
    event.preventDefault()

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5521996913856'

    const texto = `Hi! My my name is ${nome}, ${mensagem}`
    const msgFormatada = encodeURIComponent(texto)
            
    const url = `https://web.whatsapp.com/send?phone=${telefone}?text=${msgFormatada}`
    console.log(url)

    window.open(`https://web.whatsapp.com/send?phone=${telefone}?text=${msgFormatada}`, '_blank')

}

document.addEventListener('DOMContentLoaded', function() {
  const socialLinks = document.querySelectorAll('.social-link');
  
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Você pode adicionar tracking de cliques aqui
      console.log(`Link clicado: ${this.href}`);
      
      // Ou abrir em uma nova janela se não estiver usando target="_blank"
      // e.preventDefault();
      // window.open(this.href, '_blank');
    });
  });
});