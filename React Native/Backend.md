= Exeplos de backend e manipulação no FinancaspessoaisAPP


========== Insomnia ==========
Insomnia é uma ferramenta para testar APIs (interfaces que conectam frontend e backend). Ele permite enviar requisições HTTP (GET, POST, PUT, DELETE) e ver a resposta do servidor.
rodar na pasta do backend: npm run dev

Tipos de requisição:
Tipo	           Função	                 Exemplo
GET	Pegar dados   (leitura)	                 Buscar lista de posts
POST	          Criar novos dados	         Criar usuário
PUT            	Atualizar todos os dados	 Atualizar usuário completo
PATCH	          Atualizar parcialmente	 Atualizar só o nome do usuário
DELETE	          Apagar dados	             Deletar usuário

Passo a passo:

Criar workspace:
“Create → New Workspace” → nome → Design ou Debug.

Criar requisição:
“New Request” → nome → tipo (GET, POST etc.) → adicionar URL.

Adicionar headers / body (se precisar):
Headers: ex. Authorization: Bearer <token>

Body (JSON): { "nome": "Maurício" }

Enviar requisição:
Clique “Send” → veja resposta no painel.






========== Beekeeper ==========
Beekeeper Studio é um cliente de banco de dados, ou seja, um software para você se conectar, consultar e gerenciar bancos de dados SQL (como MySQL, PostgreSQL, SQLite, etc.). Beekeeper é ótimo para testar queries que o app vai usar e para analisar dados do Firebase (Firestore) ou backend SQL.
rodar na pasta do backend: npm run dev

Baixe em https://www.beekeeperstudio.io e instale.

== Criar conexão:
Clique em “New Connection”.
Escolha tipo de banco (PostgreSQL, MySQL etc.).
Preencha host, porta, usuário, senha e banco.
Teste e salve.

== Abrir banco de dados:
Clique na conexão → veja tabelas.
Executar queries
Vá para aba SQL → digite query → clique em “Run”.

== Principais comandos / queries SQL:
Selecionar dados:
SELECT * FROM usuarios;

Filtrar dados:
SELECT * FROM usuarios WHERE idade > 20;

Inserir dados:
INSERT INTO usuarios (nome, idade) VALUES ('Maurício', 20);

Atualizar dados:
UPDATE usuarios SET idade = 21 WHERE nome = 'Maurício';

Deletar dados:
DELETE FROM usuarios WHERE nome = 'Maurício';