# redirect-loc
Funcionalidade que redireciona a página de acordo com o país do IP

Exemplo de uso:

<code>
<script src="https://lucashelion.com.br/dev/redirect-loc/assets/redirect-loc.js"></script>
<script>
	addRegra('BR', true, '#');
	addRegra('PT', true, 'pt.html');
	addRegra('BR', false, 'xx.html');
	executarRegras();
</script>
</code>

A função addRegra é responsável por estabelecer as regras de direcionamento por país. 
Ela recebe 3 parâmetros:
 1) Sigla do país: string com 2 caracteres
 2) Booleano que indica se é pra seguir ou não o país indicado
 3) URL de destino

Se eu quero que a página seja direcionada para o site https://lucashelion.com.br caso o usuário esteja em Portugal, devo adicionar essa regra, da seguinte forma:

addRegra('PT', true, 'https://lucashelion.com.br');

Se eu quero que a página seja direcionada para o site https://lucashelion.com.br caso o usuário NÃO esteja em Portugal (qualquer país que não Portugal, por exemplo), devo adicionar essa regra, da seguinte forma:

addRegra('PT', false, 'https://lucashelion.com.br');

A regras são executadas de forma sequêncial. Isso significa que a ordem das regras é relevante.

Por exemplo, vamos supor que eu queira uma regra para o Brasil, uma regra para quem estiver fora do Brasil e uma regra espefícia para a Espanha. 
Nesse caso, a regra da Espanha deve ser colocada antes da regra de fora do Brasil, dessa forma:

<script src="https://lucashelion.com.br/dev/redirect-loc/assets/redirect-loc.js"></script>
<script>
	addRegra('BR', true, 'br.html');
	addRegra('ES', true, 'es.html');
	addRegra('BR', false, 'xx.html');
	executarRegras();
</script>

Por fim, logo após as regras, deve-se invocar a função executarRegras() para que os redirecionamentos sejam executados.
