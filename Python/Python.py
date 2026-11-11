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
# Aritméticos: + - * / (decimal) | // (divisão inteira) | % (resto) | ** (potência) | math.sqrt (Raiz quadrada importada)
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
(
    len(numeros),
    min(numeros),
    max(numeros),
    sum(numeros),
)  # Retorna numero de intens em uma lista
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
# Declaração (def) → só define. Chamada → executa.
# def nome(parâmetros):
#     comandos
#     return valor
# nome(argumentos)   ← chamada


# ========== PARÂMETRO E RETURN
def soma(a, b):  # a, b = parâmetros
    return a + b  # devolve e ENCERRA a função
resultado = soma(3, 4)  # 3, 4 = argumentos; guarde ou imprima o retorno
print(resultado)  # 7
# print() só mostra | return DEVOLVE o valor para quem chamou
# Sem return, a função devolve None.


# ========== VALOR PADRÃO
# Parâmetros com padrão ficam sempre à DIREITA dos sem padrão.
def potencia(base, exp=2):
    return base**exp
potencia(3)  # 9 (usa exp=2)
potencia(3, 3)  # 27

# ========== ESCOPO
# Variável criada DENTRO da função não existe fora dela.
# O que a função precisa vem por parâmetro; o que devolve sai por return.


# ========== RETORNAR VÁRIOS VALORES
def menor_maior(lista):
    return min(lista), max(lista)  # devolve uma tupla
menor, maior = menor_maior([4, 9, 2])  # desempacota

# ========== FUNÇÃO COM LISTA
# A lista chega por referência: alterar dentro (append, remove) altera a original.
def media_lista(lista):
    return sum(lista) / len(lista)
def pares(lista):  # devolve uma NOVA lista
    novos = []
    for n in lista:
        if n % 2 == 0:
            novos.append(n)
    return novos

# ========== BOOLEANA (retorna True/False)
def eh_par(n):
    return n % 2 == 0
if eh_par(4):  # usa o retorno direto no if
    print("Par")


# ========== PADRÃO DE PROVA (funções + programa principal)
# 1) defina todas as funções  2) programa principal embaixo lê, chama e imprime.
def conta_vogais(texto):
    cont = 0
    for letra in texto:
        if letra in "aeiouAEIOU":
            cont += 1
    return cont
print("Vogais:", conta_vogais("Banana"))  # 3


# ========== ITERATIVA: FATORIAL (for)
# 3! = 1 * 2 * 3 = 6
def fat_iter(n):
    resultado = 1
    for i in range(1, n + 1):
        resultado = resultado * i
    return resultado
print("Fatorial de 3:", fat_iter(3))


# ============================================================
#       6. RECURSÃO
# ============================================================
# Função que chama a si mesma. Dois pilares:
#   1) CASO BASE → condição simples, resolve direto e para
#   2) PASSO RECURSIVO → chama a si mesma com argumento MENOR (aproxima do caso base)
# Sem caso base (ou sem se aproximar dele) → RecursionError.
# Chamadas empilham (pilha) e depois resolvem de baixo para cima.


# ========== FATORIAL RECURSIVO
# n! = n * (n-1)!   | base: 0! = 1! = 1
def fat_rec(n):
    if n <= 1:  # caso base
        return 1
    return n * fat_rec(n - 1)  # passo recursivo
print("Fatorial de 3:", fat_rec(3))  # 3 * 2 * 1 = 6


# ========== SOMATÓRIO RECURSIVO
# somarec(3) = 3 + 2 + 1 = 6   | base: n == 0 → 0 (soma vazia)
def somarec(n):
    if n == 0:
        return 0
    return n + somarec(n - 1)
print("Somatório de 4:", somarec(4))  # 10


# ========== INVERTER TEXTO RECURSIVO
# inverte o resto e coloca a 1ª letra no final   | base: vazio ou 1 letra
def inverter(texto):
    if len(texto) <= 1:
        return texto
    return inverter(texto[1:]) + texto[0]
print(inverter("abc"))  # cba
# Quando usar: problema se divide em subproblemas iguais (busca binária, ordenação, árvores/pastas).
# Evitar: operação simples de contagem → for/while gasta menos memória.
