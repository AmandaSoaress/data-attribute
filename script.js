   var click = document.querySelector('#btn');
   var minhaLista = document.querySelector('.lista');

   click.addEventListener('click', btn);

   function btn() {
       minhaLista.style.display = 'none';
   }

   function voltar() {
       minhaLista.style.display = 'block';
   }