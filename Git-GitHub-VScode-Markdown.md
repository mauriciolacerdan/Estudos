
# ========== GIT-GITHUB ==========


## 1) Configuração inicial
git config --global user.name "Maurício"
git config --global user.email "mauriciolacerdan@gmail.com"

## 2) Conceitos básicos
Gitignore:
- Crie um arquivo `.gitignore` para ignorar arquivos específicos.

Estados dos arquivos:
- Untracked: não rastreados
- Modified: modificados
- Staged: preparados para commit
- Committed: salvos no repositório local



## 3) Fluxo básico
clonar → branch → editar → git add → git commit → push → PR → merge → tag(opicional).



## 4) Repositório: (onde histórico completo de um projeto é armazenado, incluindo todos os arquivos e suas versões.)
git init  (Cria um repositório Git na pasta atual.)
git clone https://github.com/usuario/repositorio.git  (Clona um repositório remoto.)
git remote add origin https://github.com/usuario/repositorio.git (Conecta o repositório local ao remoto.)


## 5) Branches: (linha paralela de desenvolvimento do mesmo código)
git branch nomebranch  (Cria nova branch)
git switch nomebranch  (Muda para a branch)
git branch  (Lista as branches e ver atual)

 ### Avançado:
 git branch -m novo-nome  (Renomeia a branch atual)
 git branch -d nomebranch  (Deleta a branch)
 Branches Remotas:
 git fetch  (Busca atualizações do remoto sem mesclar.)
 git branch -r  (Ver branches remotas)
 git switch -c nome --track origin/nome (Cria branch local baseada em uma branch remota.)


## 6) Commit: um ponto salvo do seu código no tempo (com descrição do que mudou).
git add .  (Prepara arquivos para commit.)
git commit -m "Mensagem"  (Cria um commit.)
git status  (Mostra estado dos arquivos.)

 ### Avançado:
 git log  (Mostra histórico de commits)
 git restore arquivo.txt  (Desfaz alterações locais)
 git reset --hard HEAD  (Desfaz todos os commits locais não enviados)
 git revert <hash>  (Desfaz um commit já enviado, criando um novo commit de reversão)
 git stash  (Guarda alterações temporariamente)
 git stash pop  (Recupera alterações guardadas)
 git rm --cached arquivo  (Remove arquivo do controle do git, mas mantém localmente)
 git reflog (Mostra histórico de ações locais (HEAD))
 git diff (mostra a diferença do codigo atual para o codigo do repositorio)
 git diff HEAD nomearquivo.js (diferença de um arquivo específico tem que colocar pasta se tiver)
 git gc (otimiza e limpa o repositório git dando mais desempenho)


## 7) Enviar e baixar alterações:
⚠️ Antes de dar push, verifique se não há arquivos sensíveis no repositório.
git pull origin main  (Baixa e integra alterações da branch main.)
git push (Envia alterações, quando já existe vínculo.)
git push origin main  (Envia explicitamente para a branch main.)
git push -u origin main  (Envia e cria vínculo entre branch local e remota.)


## 8) Pull Request(feito no github): Permite propor alterações, revisar código e colaborar antes do merge.


## 9) Merge:
git merge nomebranch  (Mescla uma branch à atual)
 ### Conflitos de merge:
 1. O Git marca os arquivos em conflito.
 2. Edite os arquivos para resolver os conflitos (procure por <<<<<<<, =======, >>>>>>>).
 3. Após resolver, use git add arquivo para marcar como resolvido.
 4. Finalize com git commit.


## 10) Tags(marcação de versão):
git tag -a v1.0 -m "Versão 1.0 estável"  (Cria tag anotada com autor, data, mensagem)
git tag  (Lista tags.)
git show v1.0  (Mostra detalhes de uma tag)
git push origin v1.0  (Envia a tag)





# ========== VS Code ==========

# CONFIGS(ideais):
  "editor.fontFamily": "'Fira Code', monospace",  https://www.1001freefonts.com/fira-code.font?utm_source=chatgpt.com
  "editor.fontLigatures": true,

# ATALHOS:

## GERAL

- Alt  +  \ → Sujestão de codigo
- Ctrl + Shift + P → Abrir a Command Palette
- Ctrl + P → Abrir qualquer arquivo rapidamente
- Ctrl + S → Salvar arquivo
- Ctrl + W → Fechar aba atual
- Ctrl + , → Abrir configurações
- Ctrl + B → Mostrar/ocultar barra lateral
- Ctrl + Shift + E → Abrir Explorador

## TERMINAL
- Ctrl + ` → Alternar terminal integrado
- Ctrl + Shift + ` → Novo terminal
- Ctrl + J → Mostrar/ocultar painel

## EDIÇÃO DE CÓDIGO
- Ctrl + / → Comentar ou descomentar linha
- Shift + Alt + ↓ ou ↑ → Duplicar linha
- Alt + ↓ ou ↑ → Mover linha para cima ou baixo
- Ctrl + Shift + K → Apagar linha atual
- Ctrl + L → Selecionar linha inteira
- Ctrl + D → Selecionar próxima ocorrência
- Alt + Click → Criar múltiplos cursores
- Ctrl + Alt + ↓ ou ↑ → Adicionar múltiplos cursores
- Shift + Alt + F → Formatar documento
- Ctrl + Z → Desfazer
- Ctrl + Y → Refazer

## BUSCA E NAVEGAÇÃO
- Ctrl + F → Buscar no arquivo atual
- Ctrl + H → Substituir no arquivo atual
- Ctrl + Shift + F → Buscar em todos os arquivos
- Ctrl + Shift + O → Mostrar símbolos no arquivo
- F12 → Ir para definição
- Alt + ← → Voltar
- Alt + → → Avançar
- Ctrl + Tab → Alternar entre arquivos abertos
- Ctrl + Shift + Tab → Alternar para a aba anterior

## DICAS
- Use README.md para documentar projetos
- Extensões úteis: GitLens, Git Graph





# ========== Guia Markdown ==========

# Título 1
## Título 2
### Título 3

<br>

<!-- Comentário Invisíveis -->

Separador:
---

**Negrito** · *Itálico* · ~~Tachado~~ · ***Negrito+Itálico***  

<details>
  <summary>Detalhes</summary>
  Conteúdo oculto
</details>

Use `Para Marcar` uma parte.

```
fundo preto
```

Com destaque da linguagem:
```js
console.log('Hello')
```

```json
{
  "name": "app",
  "version": "1.0.0"
}
```

```bash
npm install
```

```md
# Título
```

> Blockquote
>> Subcitação

Links externos:
[Google](https://google.com)

Links internos (âncoras):
[Ir para Tabelas](#8-tabelas)

Links de referência:
[Site][ref]
[ref]: https://exemplo.com

Emails e URLs automáticos:
<email@dominio.com>
<https://exemplo.com>

Listas não ordenadas:
- Item A
- Item B
  - Subitem

Lista por ponto:
* Item A
* Item B

Listas ordenadas:
1. Primeiro
2. Segundo
3. Terceiro

Listas aninhadas:
1. Pai
   1. Filho
      - Neto

Listas de tarefas (checkbox):
- [x] Concluído
- [ ] Pendente

Imagens
![Alt](imagem.png)

Texto alternativo:
![Logo do projeto](logo.png)

Imagem com link:
[![Alt](img.png)](https://site.com)

Tabelas:
| Coluna A | Coluna B |
|---------|----------|
| Valor 1 | Valor 2  |