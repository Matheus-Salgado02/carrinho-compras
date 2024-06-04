let total=0;
document.getElementById('lista-produtos').innerHTML='Adicione produtos';
document.getElementById('valor-total').innerHTML='R$ 0';

function adicionar()
{   
    let nome = document.getElementById('produto').value;
    let nomeProduto=nome.split('-')[0];
    let valorProduto=nome.split('$')[1];
    let quantidade = document.getElementById("quantidade").value;

   
    let subtotal=quantidade*valorProduto;
    
   
    if(quantidade==0 || quantidade=='')
    {
        alert("Informe um valor de quantidade válido")
        document.getElementById('quantidade').innerHTML='';
    }
    else
    {
        let lista = document.getElementById('lista-produtos');
        lista.innerHTML = lista.innerHTML + `<section class="carrinho__produtos__produto">
        <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${subtotal}</span>
        </section>`

        total=total+subtotal;
        let textoTotal=document.getElementById('valor-total');
        textoTotal.textContent = `R${total}`;
        document.getElementById('quantidade').value='';
    }
    



}

function limpar()
{
    total=0;
    document.getElementById('lista-produtos').innerHTML='Adicione produtos';
    document.getElementById('valor-total').innerHTML='R$ 0';
}