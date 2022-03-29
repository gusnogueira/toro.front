<p align="center">
  <img src="https://github.com/gusnogueira/toro.front/blob/master/Desafio-Toro-Google-Chrome-2022-03-28-22-14-33.gif"/>
</p>

## Este é o desafio feito para o processo seletivo da Toro Investimentos
#### O projeto consiste basicamente em um dashboard de exibição de investimentos onde o usuário pode verificar e ocultar seus valores de saldo e patrimônio, além de conferir uma listagem dos ativos que compõem sua carteira. Além da listagem de investimentos, também tomei a liberdade de inserir três cards mostrando:
#### - Investimento Principal (Investimento de maior representatividade na carteira);
#### - Investimento de maior lucro;
#### - Investimento de maior prejuízo;

## Tecnologias:
#### Para o desenvolvimento deste projeto foi usado React.JS em conjunto com TypeScript, Styled Components para estilização, Context API para gerenciamento de estado,  React Testing Library com Jest para os testes, e Axios para a comunicação com o back-end.

## Utilização:
#### Para executar o projeto é necessário clonar este repositório e em seguida navegar até a pasta e por último usar o comando npm install para instalar as dependências.
#### Para a execução dos testes basta navegar até o diretório do projeto e executar o comando npm test e em seguida apertar a tecla "a" para executar todos os testes.
#### Para que haja a conexão entre back e front, atenção à URL base disponível no arquivo AxiosInstance.ts localizado em src > shared > util.

## Back-end:
#### Foi desenvolvida também uma api utilizando .net core 5.0 para a disponibilização dos dados para o front. O código fonte da api pode ser acessado através do link: <a href="https://github.com/gusnogueira/toro.back"><b>projeto back-end</b></a>
