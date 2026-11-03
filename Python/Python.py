# ============================================================
#       1. FUNDAMENTOS
# ============================================================

# ========== ENTRADA, SAÍDA E CONVERSÃO
nome = input("Nome: ")  # input() SEMPRE retorna str, mesmo que digitem um número.
idade = int(input("Idade: "))  # int()   → inteiro
altura = float(input("Altura: "))  # float() → decimal
texto = str(idade)  # str()   → texto
print("Olá,", nome)  # print() exibe na tela.
print("Idade: " + str(idade))  # com "+", é obrigatório converter com str().
# bool(): string não vazia é True (bool("False") é True!). True e False começam com maiúscula.
# Tipos: str (texto) | int (inteiro) | float (decimal) | bool (True/False)
round(3.14159, 2)  # 3.14 → arredonda para 2 casas decimais
print("a", end="")  # end="" imprime sem pular de linha

# ========== OPERADORES
# Comparação: == igual | != diferente | > < >= <=   ( = atribui, == compara )
# Aritméticos: + - * / (decimal) | // (divisão inteira) | % (resto) | ** (potência)
# Lógicos (pode combinar):
#   and → todas verdadeiras | or → pelo menos uma | not → inverte
# CUIDADO: and/or misturados exigem parênteses.
ano = 2024
if (ano % 4 == 0 and ano % 100 != 0) or ano % 400 == 0:  # bissexto
    print("Bissexto")
if ano % 2 == 0:  # resto 0 na divisão por 2 → par (senão, ímpar)
    print("Par")

# ========== IF / ELIF / ELSE
# Python lê de cima para baixo e executa SÓ o primeiro bloco verdadeiro.
# Indentação é obrigatória: define o que pertence ao bloco.
nota = 6.5
if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
# Um if pode ficar dentro de outro (aninhado).

# ========== MATCH / CASE
# match → valores EXATOS (menus, opções). if/elif → intervalos e condições.
opcao = 2
match opcao:
    case 1:
        print("Iniciar")
    case 2:
        print("Configurações")
    case _:  # coringa, igual ao else
        print("Opção inválida")


# ============================================================
#       2. REPETIÇÃO
# ============================================================
# for   → quantidade conhecida ou percorrer uma sequência.
# while → repete enquanto a condição for True (quantidade desconhecida).

# ========== FOR + RANGE
# range(fim) | range(início, fim) | range(início, fim, passo)
# início INCLUÍDO, fim NÃO incluído.
for i in range(5):  # 0, 1, 2, 3, 4
    print(i)
for i in range(1, 6):  # 1 a 5
    print(i)
for i in range(0, 11, 2):  # 0, 2, 4, 6, 8, 10
    print(i)
for i in range(10, 0, -1):  # 10 a 1 (passo negativo)
    print(i)

# ========== WHILE
# Precisa alterar a variável da condição, senão vira loop infinito.
contador = 0
while contador < 5:
    print(contador)
    contador += 1  # mesmo que: contador = contador + 1

# ========== BREAK E CONTINUE
# break    → encerra o laço imediatamente.
# continue → pula só esta repetição e vai para a próxima.
for i in range(1, 6):
    if i == 3:
        continue  # ignora o 3
    if i == 5:
        break  # para no 5
    print(i)


# ============================================================
#       3. STRINGS
# ============================================================
frase = "Banana Amarela"
len(frase)  # quantidade de caracteres (inclui espaços)
for letra in frase:  # percorre caractere por caractere
    print(letra)
"a" in "banana"  # True → verifica se existe dentro
for i in range(len(frase) - 1, -1, -1):  # percorre de trás para frente
    print(frase[i], end="")  # end="" evita pular linha


# ============================================================
#       4. LISTAS  [PRIORIDADE]
# ============================================================
# Ordenada, mutável, aceita tipos misturados. Índice começa em 0.
frutas = ["maçã", "banana", "uva"]
frutas[0]  # "maçã"
frutas[-1]  # "uva" (último)
frutas[1] = "pera"  # altera o item
# Índice inexistente → IndexError.

for fruta in frutas:  # percorre os itens
    print(fruta)
for i in range(len(frutas)):  # percorre pelo índice
    print(i, frutas[i])
for i, fruta in enumerate(frutas):  # índice e item juntos
    print(i, fruta)

# ========== MÉTODOS
lista = [10, 20, 30]
lista.append(40)  # adiciona no FINAL
lista.insert(1, 15)  # insere na posição 1
lista.extend([50, 60])  # adiciona vários no final
lista.pop()  # remove o último (retorna o item)
lista.pop(0)  # remove pelo ÍNDICE
lista.remove(30)  # remove a 1ª ocorrência do VALOR (ValueError se não existir)
lista.clear()  # esvazia

numeros = [5, 8, 5, 2]
numeros.index(5)  # 0 → índice da 1ª ocorrência
numeros.count(5)  # 2 → quantas vezes aparece
8 in numeros  # True → confira ANTES de usar index/remove
numeros.sort()  # crescente (altera a própria lista)
numeros.sort(reverse=True)  # decrescente
numeros.reverse()  # inverte a ordem
len(numeros), min(numeros), max(numeros), sum(numeros) # Retorna numero de intens em uma lista
copia = numeros.copy()  # cópia real (copia = numeros só aponta para a mesma lista)

# ========== FATIAMENTO
l = [10, 20, 30, 40, 50]
# l[1:4] → [20, 30, 40]   (fim NÃO incluído)
# l[:3]  → [10, 20, 30]   | l[2:] → [30, 40, 50]
# l[::-1] → inverte

# ========== PADRÕES COM LISTA
notas = []
for i in range(5):
    notas.append(float(input("Nota: ")))
media = sum(notas) / len(notas)
acima = 0
for n in notas:  # vantagem da lista: comparar de novo depois
    if n > media:
        acima += 1

maior = notas[0]  # busca linear: começa pelo primeiro item
for n in notas:
    if n > maior:
        maior = n

# Pilha (LIFO): append() + pop()   | Fila (FIFO): append() + pop(0)


# ============================================================
#       5. FUNÇÕES  [PRIORIDADE]
# ============================================================

"""
Estrutura de uma função
- declaração
- chamada
 
Sintaxe:
def nome_da_funcao(<parâmetros>):  # Declaração
    comandos
    comandos
    comandos
    ...
    return <valores de retorno>
 
nome_da_funcao(valor passado)      # Chamada
"""

# def nomedafunção(paramtro a ser passado)   (oque passa dentro de uma função nao consegue ser ultilizada fora dela como variaveis)
def somavalores(valor1=5, valor2=7): # o =5, =7 serve para quando nao receber nenhum valor ele usa esses padroes ja definidos (sempre deixar o valor padrao como o da direita nao deixar apenas o da esquerda)
    return int(valor1) + int(valor2)
# Programa em baixo da função
val1 = input("Digite o primeiro valor: ")
val2 = input("Digite o segundo valor: ")
#soma = somavalores(val1, val2)  # Chamando funçao pelo nome e passando os parametros para ela
print("A soma dos valores é: ", somavalores(val1, val2))


