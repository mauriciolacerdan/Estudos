========== GITHUB ==========

GitHub é uma plataforma que organiza e compartilha código usando Git para controlar versões.
Em resumo, o GitHub facilita versionar, organizar e trabalhar em equipe em projetos de software.

Pull Requests:
Permite propor alterações em projetos, revisar código e colaborar antes de integrar ao branch principal.
Fluxo básico: fork/clonar → criar branch → commit → push → abrir pull request → revisão → merge.



========== GIT ==========
Serve para criar ramificações do código, salvando o histórico e facilitando o trabalho em equipe.
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
git gc (otimiza e limpa o repositório git dando mais desempenho)
git gc --aggressive (usado em casos raros para otimização mais pesada)

git add .  (Prepara arquivos para o commit)
git commit -m "Mensagem"  (Cria um commit com mensagem)
git log  (Mostra histórico de commits)

git status  (Verifica estado dos arquivos)
git add .  (Prepara arquivos para o commit)
git commit -m "Mensagem"  (Cria um commit com mensagem)
git log  (Mostra histórico de commits)
git checkout -- arquivo.txt  (Desfaz alterações locais)
git reset --hard HEAD  (Desfaz todos os commits locais não enviados)
git revert <hash>  (Desfaz um commit já enviado, criando um novo commit de reversão)
git stash  (Guarda alterações temporariamente)
git stash pop  (Recupera alterações guardadas)
git rm --cached arquivo  (Remove arquivo do controle do git, mas mantém localmente)


git tag (mostra tags)

Tags (marcação de versão):
git tag v1.0  (Cria uma tag)
git tag -a v1.0 -m "Versão 1.0 estável"  (Cria tag anotada com autor, data, mensagem)
git tag  (Mostra todas as tags)
git show v1.0  (Mostra detalhes de uma tag)
git push origin v1.0  (Envia a tag)


git shortlog (mostra todos os commits ja feito)
git reflog (mostra todos os detalhes precisos feito no repositorio)
git diff (mostra a diferença do codigo atual para o codigo do repositorio)
git diff HEAD: nomearquivo.js (diferença de um arquivo específico tem que colocar pasta se tiver)

Outros:
git shortlog (mostra todos os commits já feitos)
git reflog (mostra todos os detalhes precisos feitos no repositório)
git diff (mostra a diferença do código atual para o código do repositório)
git diff HEAD: nomearquivo.js (diferença de um arquivo específico; coloque o caminho se necessário)


-------------------------------------------------------------------


git pull origin master  (Baixa alterações do github (branch tambem))
git push origin master  (Envia alterações)
git fetch (Busca novas branches no repositorio)
git branch -r (Ver branches remotas)
git checkout -b nome origin/nome (Baixar e mudar para uma branch remota)

Branches: (linha paralela de desenvolvimento do mesmo código)
git branch  (Lista as branches)
git branch nomebranch  (Cria nova branch)
git checkout nomebranch  (Muda para a branch)
git branch -m novo-nome  (Renomeia a branch atual)
git merge nomebranch  (Mescla uma branch à atual)
git branch -d nome  (Deleta a branch)

git pull origin master  (Baixa alterações do GitHub)
git push origin master  (Envia alterações)

Branches Remotas:
git fetch  (Busca novas branches no repositório)
git branch -r  (Ver branches remotas)
git checkout -b nome origin/nome  (Baixar e mudar para uma branch remota)


-------------------------------------------------------------------

⚠️ ATENÇÃO! Antes de executar o git push, sempre verifique se não há arquivos sensíveis no repositório (por exemplo, APIs, senhas, chaves). Caso existam, adicione-os ao .gitignore.

Resolvendo conflitos de merge:
1. O Git marca os arquivos em conflito.
2. Edite os arquivos para resolver os conflitos (procure por <<<<<<<, =======, >>>>>>>).
3. Após resolver, use git add arquivo para marcar como resolvido.
4. Finalize com git commit.
            
git remote add origin https://github.com/usuario/repositorio.git  (cria repositorio no github)
git push -u origin master  (Envia o repositorio para o GitHub)(main é nome da branch)
git clone https://github.com/usuario/repositorio.git  (clona repositorio)

Repositórios Remotos (GitHub):
git remote add origin https://github.com/usuario/repositorio.git  (Adiciona repositório remoto)
git push -u origin master  (Envia o repositório para o GitHub)
git clone https://github.com/usuario/repositorio.git  (Clona repositório)







========== Atalhos VS Code ==========


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
- Ctrl + ` (crase) → Alternar terminal integrado
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
- Ctrl + Alt + ↓ ou ↑ → Adicionar múltiplos cursores
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
- Ctrl + Shift + Tab → Alternar para aba anterior

💡 Dicas VS Code:
- Use arquivos README.md para documentar projetos (suporta Markdown)
- Extensões recomendadas para Git/GitHub: GitLens, Git Graph