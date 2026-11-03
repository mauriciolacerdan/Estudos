# ============================================================
#       TREINO PARA PROVA 2 - ALGORITMOS PYTHON (prova dia 20)
# ============================================================
# CRONOGRAMA (dia 3 ao dia 19)
#   Dias 3 a 8   -> PARTE A: estilo Prova 1 (4 exercícios/dia = 24)
#   Dias 9 a 12  -> PARTE B: listas (3 exercícios/dia = 12)
#   Dias 13 a 15 -> PARTE C: funções (3 exercícios/dia = 9)
#   Dias 16 e 17 -> PARTE D: listas + funções juntas (3/dia = 6)
#   Dia 18       -> SIMULADO 1 (4 questões, SEM consultar, cronometre 1h30)
#   Dia 19       -> refazer o que errou no simulado + SIMULADO 2 leve
#
# REGRAS DE TREINO
#   1. Tente SEM olhar suas anotações por pelo menos 15 min.
#   2. Escreva a solução abaixo de cada enunciado (dentro de um bloco de comentário
#      ou comentando o código anterior), e TESTE rodando de verdade.
#   3. Errou ou travou? Marque com "# REFAZER" e volte nele 2 dias depois.
#   4. Erros comuns da P1 para vigiar: esquecer int()/float() no input,
#      esquecer o break na sentinela, dividir por zero na média, indentação,
#      usar = no lugar de ==.
# ============================================================


# ============================================================
#       PARTE A - ESTILO PROVA 1 (while/for, if, match, strings)
# ============================================================

# ---------- DIA 3: sentinela e contadores ----------
"""
A1) Leia números inteiros até o usuário digitar 0.
No final mostre: soma, média, maior e menor dos números PARES digitados.
Se nenhum par foi digitado, mostre "Nenhum par digitado".
(Cuidado com divisão por zero e com maior/menor começando em None.)
"""

"""
soma = 0
contador = 0
maior = None
menor = None
while True:
    numero = int(input("Digite um numero: "))
    if numero == 0:
        break
    if numero % 2 == 0:
        contador = contador + 1
        soma = soma + numero
        if maior is None or numero > maior:
            maior = numero
        if menor is None or numero < menor:
            menor = numero
if contador > 0:
    print("Soma:", soma, "Média:", (soma / contador), "Menor:", menor, "Maior:", maior)
else:
    print("Nenhum par digitado")
"""

"""
A2) Leia idades de várias pessoas até digitarem 99 (o 99 não conta).
Mostre quantas pessoas têm menos de 21 anos e quantas têm mais de 50 anos.
"""
"""
contador21 = 0
contador50 = 0
while True:
    idade = int(input("Digite sua idade:"))
    if idade == 99:
        break
    if idade < 21:
        contador21 = contador21 + 1
    if idade > 50:
        contador50 = contador50 + 1
print(contador21, "pessoas têm menos de 21 anos e", contador50, "têm mais de 50 anos.")
"""

"""
A3) Leia números até o usuário digitar um valor negativo.
Mostre o somatório, a média e a quantidade de números positivos lidos (sem contar o negativo).
"""
"""
contador = 0
soma = 0
while True:
    numero = float(input("Digite um numero: "))
    if numero < 0:
        break
    if numero > 0:
        contador = contador + 1
    soma = soma + numero
if contador > 0:
    print("Somatório:", soma, "Quantidade:", contador, "Média:", soma / contador)
else:
    print("Nenhum número positivo foi digitado")
"""

"""
A4) Leia exatamente 8 números inteiros (use for).
Mostre quantos são múltiplos de 5 e a soma somente desses múltiplos.
"""
"""
contador = 0
soma = 0
for i in range(8):
    numero = int(input("Digite um numero: "))
    if numero % 5 == 0:
        contador = contador + 1
        soma = soma + numero
print(contador, "são multiplos de 5", "Soma dos multiplos de 5:", soma)
"""


# ---------- DIA 4: match/case e troco ----------
"""
A5) Cardápio da lanchonete:
1 - Hot Dog (R$ 6.00) | 2 - X-Burger (R$ 12.50) | 3 - Pizza fatia (R$ 9.00)
Leia a opção, a quantidade e o valor pago. Use match para definir o preço.
Total = preço * quantidade. Se pago < total: "Saldo Insuficiente".
Senão mostre o troco. Opção fora do menu (case _): "Opção inválida".
"""

"""
A6) Conversor de moeda com match:
1 - Dólar (R$ 5.00) | 2 - Euro (R$ 5.50) | 3 - Libra (R$ 6.50)
Leia o valor em reais e a opção, e mostre quanto vale na moeda escolhida (valor / cotação).
Opção inexistente: "Moeda inválida".
"""

"""
A7) Leia uma letra de conceito (A, B, C ou D) e use match para mostrar:
A = "Excelente" | B = "Bom" | C = "Regular" | D = "Reprovado".
Qualquer outra letra: "Conceito inválido".
"""

"""
A8) Leia dois números e a operação (+, -, *, /, // ou %) e mostre o resultado com match.
Trate divisão por zero (para /, // e %) e operação inválida.
"""

# ---------- DIA 5: if / elif / else em faixas ----------
"""
A9) Imposto sobre salário:
até 2000.00 -> isento | de 2000.01 a 4000.00 -> 10% | acima de 4000.00 -> 20%
Leia o salário e mostre o valor do imposto e o salário líquido.
"""

"""
A10) Leia peso e altura e calcule o IMC (peso / altura ** 2). Mostre a classificação:
abaixo de 18.5 "Abaixo do peso" | até 24.99 "Normal" | até 29.99 "Sobrepeso" | 30 ou mais "Obesidade".
"""

"""
A11) Ingresso do cinema: leia a idade e se é estudante ("s" ou "n").
Menores de 12 e maiores de 60 pagam R$ 10. Estudantes (fora dessas idades) pagam R$ 15.
Os demais pagam R$ 30. Mostre o valor. (Pratique and / or com parênteses.)
"""

"""
A12) Leia 3 notas (0 a 10) e calcule a média.
média >= 7 "Aprovado" | média >= 5 "Recuperação" | abaixo disso "Reprovado".
Se alguma nota estiver fora de 0 a 10, mostre "Nota inválida" e não calcule a média.
"""

# ---------- DIA 6: strings ----------
"""
A13) Leia uma frase. Percorrendo caractere por caractere, conte:
quantos espaços em branco e quantas letras 'e' (minúsculas) existem.
Depois mostre também a quantidade de palavras (espaços + 1).
"""

"""
A14) Leia um texto e conte quantos dígitos numéricos ("0123456789") e
quantas letras MAIÚSCULAS ("ABCDEFGHIJKLMNOPQRSTUVWXYZ") ele possui.
(Dica: use "in" com uma string, como nas vogais.)
"""

"""
A15) Leia uma palavra e diga se ela é um palíndromo (lida de trás para frente é igual).
Exemplos: "arara", "radar" -> sim | "banana" -> não.
Monte a palavra invertida percorrendo de trás para frente.
"""

"""
A16) Leia uma frase e um caractere. Mostre quantas vezes o caractere aparece na frase
e imprima a frase com cada letra em uma linha separada.
"""

# ---------- DIA 7: validações e tentativas ----------
"""
A17) Cadastro de senha: peça a senha até ela ter no mínimo 6 caracteres
E pelo menos um dígito numérico. Ao aceitar, mostre "Senha cadastrada!".
Enquanto inválida, mostre o que está faltando.
"""

"""
A18) Leia uma nota entre 0 e 10 repetindo até ser válida ("Entrada inválida" e pede de novo).
Faça isso para 3 notas e depois mostre a média.
"""

"""
A19) Caixa com PIN fixo 4321 e no máximo 3 tentativas.
Acertou: "Acesso Permitido" (e encerra). Errou as 3: "Cartão Bloqueado".
Mostre quantas tentativas restam a cada erro.
"""

"""
A20) Jogo de adivinhação: o número secreto é 7. O usuário tem até 5 tentativas.
A cada erro diga se o palpite foi "maior" ou "menor" que o secreto.
Acertou: "Parabéns, acertou em X tentativas". Acabaram: "Você perdeu".
"""

# ---------- DIA 8: números e menus ----------
"""
A21) Leia um número e diga se é primo. Depois, liste todos os primos de 1 a 50.
"""

"""
A22) Leia um número N e mostre a tabuada de N de 1 a 10 no formato "N x i = resultado".
Depois calcule e mostre o fatorial de N (5! = 5*4*3*2*1).
"""

"""
A23) Caixa eletrônico: saldo inicial R$ 500.00.
Menu: 1 saldo | 2 depósito | 3 saque | 4 sair (use while + match).
Saque maior que o saldo: "Saldo Insuficiente". Valor negativo ou zero: "Valor inválido".
"""

"""
A24) Menu com while + match:
1 - Par ou ímpar de um número | 2 - Tabuada | 3 - Inverter um texto | 4 - Sair
Opção inválida: mostre mensagem e mostre o menu de novo.
"""


# ============================================================
#       PARTE B - LISTAS
# ============================================================
# Revise antes (suas anotações, seção 4): append, pop, remove, insert, index, count,
# sort, in, len/min/max/sum, fatiamento [a:b], for item in lista, for i in range(len(lista)).

# ---------- DIA 9 ----------
"""
B1) Leia 5 nomes e guarde em uma lista (use append dentro de um for).
No final, imprima a lista e depois imprima um nome por linha.
"""

"""
B2) Leia 6 números e guarde em uma lista. Mostre a lista, o maior, o menor,
a soma e a média (pode usar max, min, sum, len).
"""

"""
B3) Leia números inteiros até digitarem 0 (sentinela), guardando-os em uma lista.
No final mostre: quantos números foram lidos e uma nova lista só com os PARES.
"""

# ---------- DIA 10 ----------
"""
B4) Leia 5 notas e guarde em lista. Calcule a média e mostre quais notas estão
acima da média e quantas são.
"""

"""
B5) Dada a lista numeros = [4, 9, 2, 9, 7, 4, 9], leia um número do teclado e mostre:
se ele existe na lista (use in), quantas vezes aparece (count) e a posição da primeira
ocorrência (index). Se não existir, NÃO use index (dá erro!) -> mostre "Não encontrado".
"""

"""
B6) Leia 5 números e mostre a lista invertida de DUAS formas:
a) com for e range(len(lista) - 1, -1, -1)
b) com fatiamento lista[::-1]
"""

# ---------- DIA 11 ----------
"""
B7) Lista de compras com menu (while + match):
1 incluir item | 2 remover item | 3 listar | 4 sair.
Ao remover, se o item não existir, mostre "Item não encontrado".
Ao listar, mostre o número de cada item (use enumerate) e o total de itens.
"""

"""
B8) Leia 6 números. Mostre a lista em ordem crescente, em ordem decrescente
e os 3 MAIORES valores (dica: sort decrescente + fatiamento [:3]).
"""

"""
B9) Leia 8 números e crie uma segunda lista SEM repetições
(só adicione se o número ainda não estiver na nova lista). Mostre as duas listas.
"""

# ---------- DIA 12 ----------
"""
B10) Duas listas paralelas: leia o nome e a nota de 5 alunos (nomes[i] corresponde a notas[i]).
Mostre o nome do aluno de maior nota e a média da turma.
(Dica: use notas.index(max(notas)) para achar a posição.)
"""

"""
B11) Crie uma lista com 10 números lidos do teclado. Mostre usando fatiamento:
os 3 primeiros, os 3 últimos, os elementos de posição par (lista[::2])
e a lista do meio (sem o primeiro e sem o último).
"""

"""
B12) Fila de atendimento (FIFO: append + pop(0)):
Menu: 1 chegar (digita o nome) | 2 atender (remove o primeiro e mostra quem foi) |
3 mostrar fila | 4 sair.
Se tentar atender com a fila vazia: "Ninguém na fila".
"""


# ============================================================
#       PARTE C - FUNÇÕES
# ============================================================
# Revise antes: def nome(parametros): ... return valor | chamada | valor padrão.
# Lembrete: variável criada DENTRO da função não existe fora dela.
# Função com return devolve o valor (quem chamou usa/imprime); sem return só faz ação.

# ---------- DIA 13 ----------
"""
C1) Crie a função saudacao(nome) que imprime "Olá, <nome>! Bem-vindo(a)!".
Chame a função com um nome lido do teclado e outro escrito direto no código.
"""

"""
C2) Crie a função soma(a, b) que RETORNA a soma. Leia dois números e mostre o resultado
fora da função. Depois crie subtracao, multiplicacao e divisao (esta retorna None
se o divisor for 0 e quem chamou mostra "Erro").
"""

"""
C3) Crie a função eh_par(numero) que retorna True se par e False se ímpar.
Leia 5 números e use a função para mostrar "Par" ou "Ímpar" de cada um.
"""

# ---------- DIA 14 ----------
"""
C4) Crie a função area_retangulo(base, altura=1) que retorna base * altura.
Chame com os dois valores e depois só com a base, observando o valor padrão.
"""

"""
C5) Crie a função media(n1, n2, n3) que retorna a média e a função situacao(media)
que retorna "Aprovado", "Recuperação" ou "Reprovado". Leia 3 notas e mostre a média e a situação
chamando as duas funções.
"""

"""
C6) Crie a função eh_primo(numero) que retorna True ou False.
Use-a para listar todos os primos de 1 a 50 (refaça o A21 só que usando a função).
"""

# ---------- DIA 15 ----------
"""
C7) Crie a função fatorial(n) que retorna n!. Leia um número e mostre o fatorial.
Depois mostre o fatorial de todos os números de 1 a 6 usando for.
"""

"""
C8) Crie a função conta_vogais(texto) que retorna a quantidade de vogais.
Leia 3 frases e mostre as vogais de cada uma.
"""

"""
C9) Crie a função calcula_desconto(valor) com as regras:
compras >= 500: 20% | de 200 a 499.99: 10% | abaixo de 200: nenhum.
A função retorna o valor final. Leia valores até digitarem 0 e mostre o valor final de cada um.
"""


# ============================================================
#       PARTE D - LISTAS + FUNÇÕES
# ============================================================

# ---------- DIA 16 ----------
"""
D1) Crie a função maior_valor(lista) que retorna o maior elemento SEM usar max().
(Comece com maior = lista[0] e percorra com for.) Teste com uma lista lida do teclado.
"""

"""
D2) Crie a função media_lista(lista) e a função acima_da_media(lista) que retorna
uma NOVA lista só com os valores maiores que a média. Teste com 6 números lidos.
"""

"""
D3) Crie a função filtra_pares(lista) que retorna uma lista só com os números pares.
Leia números até 0 guardando em lista, chame a função e mostre o resultado.
"""

# ---------- DIA 17 ----------
"""
D4) Crie a função conta_ocorrencias(lista, valor) que retorna quantas vezes o valor aparece
na lista SEM usar count(). Teste com uma lista de 8 números e um valor lido.
"""

"""
D5) Crie a função le_notas(qtd) que lê qtd notas, guarda em uma lista e RETORNA a lista.
Use junto com media_lista e maior_valor (do D1 e D2) para mostrar média, maior nota
e quantas notas são >= 7.
"""

"""
D6) Mini agenda com funções: crie incluir(agenda, nome), excluir(agenda, nome) e
consultar(agenda, nome) (esta retorna True/False). O programa principal tem o menu
(while + match) e só chama as funções. Opções: 1 incluir | 2 excluir | 3 consultar |
4 imprimir | 5 sair.
"""


# ============================================================
#       SIMULADO 1 (DIA 18) - sem consultar nada, 1h30
# ============================================================
"""
S1-Q1) Leia inteiros até digitar 0, guardando-os em uma lista.
Crie a função soma_multiplos_de_3(lista) que retorna a soma dos múltiplos de 3.
No programa principal mostre a lista, essa soma, o maior e o menor valor da lista.
Se a lista estiver vazia, mostre "Nenhum número informado".
"""

"""
S1-Q2) Menu de uma sorveteria: 1 Casquinha (R$ 6.00) | 2 Milkshake (R$ 14.00) | 3 Sundae (R$ 11.50).
Crie a função calcula_troco(preco, pago) que retorna o troco, ou None se o valor for insuficiente.
Use match para definir o preço (case _ = "Opção inválida"). Mostre "Saldo Insuficiente"
quando a função retornar None.
"""

"""
S1-Q3) Leia uma frase. Crie a função conta_caracteres(frase) que retorna DOIS valores:
quantidade de espaços e quantidade de letras 'O' (maiúsculas). Mostre os dois no programa principal.
(Dica: return a, b  e  x, y = funcao(...))
"""

"""
S1-Q4) Crie a função senha_valida(senha) que retorna True se a senha tem no mínimo 8 caracteres
e pelo menos um símbolo entre "_", "-" e "@". Peça a senha em loop até ser válida,
com no máximo 5 tentativas. Acertou: "Senha cadastrada". Esgotou: "Cadastro bloqueado".
"""


# ============================================================
#       SIMULADO 2 (DIA 19) - mais leve, depois revise seus erros
# ============================================================
"""
S2-Q1) Leia idades até digitarem 99 (guarde em uma lista). Crie a função
conta_faixas(lista) que retorna quantos têm menos de 21 e quantos têm mais de 50.
Mostre a média das idades e esses dois totais.
"""

"""
S2-Q2) Caixa eletrônico com saldo inicial 1000.0 e menu: 1 saldo | 2 depósito | 3 saque | 4 sair.
Crie a função sacar(saldo, valor) que retorna o novo saldo, ou o mesmo saldo se não houver
saldo suficiente (o programa principal avisa "Saldo Insuficiente" comparando os valores).
"""

"""
S2-Q3) Lista de nomes com menu: 1 incluir | 2 alterar (mesma posição) | 3 excluir | 4 imprimir | 5 sair.
Crie a função existe(lista, nome) que retorna True/False e use-a antes de alterar ou excluir.
"""

"""
S2-Q4) Leia 5 notas em uma lista. Crie a função situacao(media) e mostre: a média,
a situação, a maior e a menor nota (sem max/min, usando for).
"""
