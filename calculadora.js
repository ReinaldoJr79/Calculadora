// função para inseção e armazenamento dos elementos
function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
// função de limpeza do resultado ou valore digitados
function clean()
{
    document.getElementById('resultado').innerHTML = "";
}
// implementação da função de cálculo
function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}