========== GITHUB ==========
GitHub é uma plataforma que organiza e compartilha código usando Git para controlar versões.
Em resumo, o GitHub facilita versionar, organizar e trabalhar em equipe em projetos de software.



========== GIT ==========
Serve para criar ramificaões do codigo salvando o passado e ajudando a trabalhar em equipe
https://git-scm.com/downloads


Configuração Inicial:
git config --global user.name "Maurício"
git config --global user.email "mauriciolacerdan@gmail.com"

Gitignore: (Crie um arquivo `.gitignore` para ignorar arquivos específicos)

Estados dos Arquivos no Git:
Untracked: não rastreados
Modificado: modificado
Staged: preparados para commit
Committed: alterações salvas no repositório local

___________________________________________________________________


Criando um Repositório: (onde histórico completo de um projeto é armazenado, incluindo todos os arquivos e suas versões.)

git init  (Transforma pasta virar repositorio)


---------- Comandos Básicos: ----------
git gc (otimiza e limpa o repositorio git dando mais desempenho)

git status  (Verifica estado dos arquivos)

git add .  (Prepara arquivos para o commit) (commit:salva as alterações feitas cria um ponto de historico no projeto)

git commit -m "Mensagem"  (Cria um commit com mensagem)

git log  (Mostra histórico de commits)
git checkout -- arquivo.txt  (Desfaz alterações locais)
git reset --hard HEAD  (Desfaz todos os commits locais não enviados)


Tags(comentario):
git tag v1.0  (Cria uma tag)
git tag -a v1.0 -m "Versão 1.0 estável"  (Cria tag que mostra autor, data...)

git tag (mostra tags)
git show v1.0 (mostra detalhes de uma tag)
git push origin v1.0  (Envia a tag)


Outros:
git shortlog (mostra todos os commits ja feito)
git reflog (mostra todos os detalhes precisos feito no repositorio)
git diff (mostra a diferença do codigo atual para o codigo do repositorio)
git diff HEAD: nomearquivo.js (diferença de um arquivo específico tem que colocar pasta se tiver)


-------------------------------------------------------------------


Branches: (linha paralela de desenvolvimento do mesmo codigo)
git branch  (Lista as branches)
git branch nomebranch  (Cria nova branch(a partir da que voce esta atualmente))
git checkout nova-branch  (Muda para a branch)
git merge nova-branch  (Mescla uma branch à atual)
git branch -d nome  (Deleta a branch)

git pull origin master  (Baixa alterações do github (branch tambem))
git push origin master  (Envia alterações)

Branches Remotas:
git fetch (Busca novas branches no repositorio)
git branch -r (Ver branches remotas)
git checkout -b nome origin/nome (Baixar e mudar para uma branch remota)


-------------------------------------------------------------------


Repositórios Remotos(GitHub):
git remote add origin https://github.com/usuario/repositorio.git  (cria repositorio no github)

git push -u origin master  (Envia o repositorio para o GitHub)(main é nome da branch)

git clone https://github.com/usuario/repositorio.git  (clona repositorio)






========== Atalhos VScode ==========

🔧 GERAL
- Ctrl + Shift + P → Abrir a Command Palette
- Ctrl + P → Abrir qualquer arquivo rapidamente
- Ctrl + S → Salvar arquivo
- Ctrl + W → Fechar aba atual
- Ctrl + Q → Fechar o VS Code
- Ctrl + , → Abrir configurações
- Ctrl + B → Mostrar/ocultar barra lateral
- Ctrl + Shift + E → Abrir explorador de arquivos

🧪 TERMINAL
- Ctrl + ` (aspas simples) → Alternar terminal integrado
- Ctrl + Shift + ` → Novo terminal
- Ctrl + ' → Mostrar/ocultar terminal/painel

✍️ EDIÇÃO DE CÓDIGO
- Ctrl + / → Comentar ou descomentar linha
- Shift + Alt + ↓ ou ↑ → Duplicar linha
- Alt + ↓ ou ↑ → Mover linha para cima ou baixo
- Ctrl + Shift + K → Apagar linha atual
- Ctrl + L → Selecionar linha inteira
- Ctrl + D → Selecionar próxima ocorrência
- Alt + Click → Criar múltiplos cursores
- Shift + Alt + F → Formatar o documento
- Ctrl + Z → Desfazer
- Ctrl + Y → Refazer

🔍 BUSCA E NAVEGAÇÃO
- Ctrl + F → Buscar no arquivo atual
- Ctrl + H → Substituir no arquivo atual
- Ctrl + Shift + F → Buscar em todos os arquivos
- Ctrl + Shift + O → Mostrar funções/símbolos no arquivo
- F12 → Ir para definição (função, variável etc.)
- Alt + ← → Voltar (navegação)
- Alt + → → Avançar (navegação)
- Ctrl + Tab → Alternar entre arquivos abertos