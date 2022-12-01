Esse projeto foi iniciado com [Create React App](https://github.com/facebook/create-react-app). (Vamos adiantar algumas coisas por aqui hehe!)

## hiae-react-test
Seja muito bem vindo.  
Sim, mas é claro! Se vc chegou até aqui, considere-se importante para nós.  

Esse teste foi desenvolvido especialmente para vc. E sabemos que vc tem as skills necessárias para finalizá-lo.  

Okay... cerimônias a parte, vamos ao que interessa!  
Esse teste tem como objetivo a criação de uma aplicação para exibir valores de ações, através de chamadas em uma API.  
Teremos 2 telas para tal:
* Home
    * Mostre um campo autocomplete (Olha a dica haha) que lista os símbolos/nome de empresas. (Ex: FB, listará Facebook e mais algumas empresas, etc...)
* Details
    * Aqui mostraremos os detalhes do símbolo que vc selecionou na tela anterior, alem de campos para filtros por data: de/para

#### API  
Nós vamos utilizar a API do [Alpha Advantage][https://www.alphavantage.co/documentation/].  

Busca de Símbolos: [Search Endpoint][https://www.alphavantage.co/documentation/#symbolsearch]  
Informações de ações para cada símbolo: [Daily][https://www.alphavantage.co/documentation/#daily] (estamos interessados apenas no `close`)
> Vc deve enviar o `apikey` em todas as requisições. Acesse [aqui][https://www.alphavantage.co/support/#api-key] e solicite uma `apikey`. It's freeeee!


#### Desafio 1
* Utilize o endpoint `Search Endpoint` para buscar os items na API e preencher o campo de autocomplete.  
* Além disso, ao selecionar um item do autocomplete, precisamos mover o usuário para a página de detalhes: `:symbol/details`.  
> dica: vc pode utilizar o axios como client para requisições. Mas se estiver familiarizado com outro client, fique a vontade.

#### Desafio 2
* Faça uma requisição para o endpoint `Daily` e guarde os dados retornados no estado, para futuras filtragens.  
* Monte um gráfico com a evolução do valor das ações.
> dica: utilize o recharts para montagem do gráfico.

#### Desafio 3
* Nossa aplicação não possui testes. É interessante que possamos garantir o funcionamento de cada componente e integração.  
* Garanta também que seus componentes não sejam re-renderizados (a menos que necessário).  

Ufa... agora, respira, e não pira!

#### Desafios Extras - se vc quiser fazer um pouquinho mais
* Crie containers para centralizar sua lógica, e componentes de apresentação reutilizáveis.
* Nós não possuímos um layout definido, apenas um [wireframe][https://github.com/HIAE/react-test/tree/master/specs]. Mas capriche na apresentação (nós utilizamos o [Material UI][https://material-ui.com/] como DS)
* Não se esqueça dos amiguinhos do mobile. Será que conseguimos tornar nossa applicação responsiva?
* Como desenvolvedor front-end, vc não pode, em hipoteze alguma, esquecer da semântica. Uma `<div>` não pode ficar dentro de um `<p>`;
* Animação marquee. Crie um componente para exibir o valor e variação percentual de ações gerais, no topo da página;
> dica: veja um exemplo no site do [Bloomberg](https://www.bloomberg.com) no topo da página.

#### Diferenciais - se vc quiser SUPERAR as expectativas
* Utilize o Redux para controle de estado.
* Vc pode utilizar o Reselect para seleções específicas no estado.
* Lembre-se dos `Hooks`. Eles podem te ajudar em diversos aspectos.
* Queremos acompanhar a evolução do seu desenvolvimento então, não economize nos commits ;)

Agora sim. Finalizamos por aqui.  
Faça um fork desse projeto, e ao final envie-nos uma PR :D  
Não se esqueça: faça algo que se orgulhe, algo incrível!  
Quando tiver dúvidas, ou encontrar algum problema, abra uma issue. Estaremos de olho.  

Beijos e queijos <3

[https://www.alphavantage.co/documentation/#symbolsearch]: https://www.alphavantage.co/documentation/#symbolsearch

[https://www.alphavantage.co/documentation/#daily]: https://www.alphavantage.co/documentation/#daily

[https://www.alphavantage.co/support/#api-key]: https://www.alphavantage.co/support/#api-key

[https://material-ui.com/]: https://material-ui.com/

[https://www.alphavantage.co/documentation/]: https://www.alphavantage.co/documentation/

[https://github.com/HIAE/react-test/tree/master/specs]: https://github.com/HIAE/react-test/tree/master/specs
