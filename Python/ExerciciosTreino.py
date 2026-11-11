# ============================================================
#       TREINO PARA PROVA 2 - ALGORITMOS PYTHON (prova dia 25)
# ============================================================
# ÍNDICE
#   A. Estilo P1 (feitos)           D. Funções extras
#   P1. Rever a Prova 1 (completa)  R. Recursividade
#   B. Listas                       S. Simulados
#   C. Funções (lista do professor) O. Opcionais (só se sobrar tempo)
#
# CRONOGRAMA (dia 12 ao dia 24) - PROVA DIA 25
#   Dia 11 -> nada obrigatório
#   Dia 12 -> REVER P1 completa (4 questões no papel, 1h, sem consultar) + B2, B3
#   Dia 13 -> B4, B5, B7, B8
#   Dia 14 -> B10, B12 + Prof. 1, 2, 3
#   Dia 15 -> Prof. 4, 5, 6, 9
#   Dia 16 -> Prof. 16, 15, 17, 18
#   Dia 17 -> Prof. 19, 20, D1 + refazer o que marcou "# REFAZER"
#   Dia 18 -> dia leve: D2, D3, A18 + opcionais rápidos (Prof. 11 a 14) + refazer erros
#   Dia 19 -> R1 a R6 (recursão)
#   Dia 20 -> R7 a R12 (recursão)
#   Dia 21 -> opcionais médios (C5, C9, Prof. 7, D6) + refazer erros
#   Dia 22 -> SIMULADO 1 (4 questões, SEM consultar, cronometre 1h30)
#   Dia 23 -> corrigir o simulado + refazer só o que errou
#   Dia 24 -> SIMULADO 2 (mais leve) + revisão leve do Python_Resumo.py
#   Dia 25 -> PROVA (nada de conteúdo novo; descanse na véspera)
#
# SE ATRASAR, corte nesta ordem: Prof. 7 e D6 -> R9 e R10 -> D1 -> Prof. 19 e 20 -> B10.
# NÃO corte: P1 completa, Prof. 5 (primo), recursão R1 a R8, os dois simulados.
#
# REGRAS DE TREINO
#   1. Tente SEM olhar suas anotações por pelo menos 15 min.
#   2. Escreva a solução abaixo de cada enunciado e TESTE rodando de verdade.
#   3. Errou ou travou? Marque com "# REFAZER" e refaça 2 dias depois.
#   4. Na prova é MANUSCRITO: nos exercícios de função/recursão, faça o teste de mesa
#      no papel (chamada por chamada) para treinar.
#   5. Erros para vigiar: esquecer int()/float() no input, esquecer o break na sentinela,
#      dividir por zero, = no lugar de ==, index()/remove() sem testar "in",
#      print no lugar de return, flag que volta a False dentro do laço,
#      recursão sem caso base ou sem diminuir o argumento.
# ============================================================


# ============================================================
#       A. ESTILO PROVA 1 (while/for, if, match, strings) - FEITOS
# ============================================================
# A21 (primo) foi substituído pelo Prof. 5 e Prof. 18 (parte C).

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

"""
A5) Cardápio da lanchonete:
1 - Hot Dog (R$ 6.00) | 2 - X-Burger (R$ 12.50) | 3 - Pizza fatia (R$ 9.00)
Leia a opção, a quantidade e o valor pago. Use match para definir o preço.
Total = preço * quantidade. Se pago < total: "Saldo Insuficiente".
Senão mostre o troco. Opção fora do menu (case _): "Opção inválida".
"""
"""
print("1 - Hot Dog (R$ 6.00) | 2 - X-Burger (R$ 12.50) | 3 - Pizza fatia (R$ 9.00)")
numero = int(input("Digite sua escolha: "))
quantidade = int(input("Digite a quantidade: "))
pago = float(input("Digite o valor pago: "))
valor = 0
troco = 0
match numero:
    case 1:
        valor = quantidade * 6.00
        troco = pago - valor
        if troco < 0:
            print("Saldo Insuficiente")
        else:
            print(quantidade, "Hot Dog, Valor total:", valor, "Troco:", troco)
    case 2:
        valor = quantidade * 12.50
        troco = pago - valor
        if troco < 0:
            print("Saldo Insuficiente")
        else:
            print(quantidade, "X-Burger, Valor total:", valor, "Troco:", troco)
    case 3:
        valor = quantidade * 9.00
        troco = pago - valor
        if troco < 0:
            print("Saldo Insuficiente")
        else:
            print(quantidade, "Pizza fatia, Valor total:", valor, "Troco:", troco)
    case _:
        print("Opção inválida")
"""

"""
A6) Conversor de moeda com match:
1 - Dólar (R$ 5.00) | 2 - Euro (R$ 5.50) | 3 - Libra (R$ 6.50)
Leia o valor em reais e a opção, e mostre quanto vale na moeda escolhida (valor / cotação).
Opção inexistente: "Moeda inválida".
"""
"""
print("1 - Dólar (R$ 5.00) | 2 - Euro (R$ 5.50) | 3 - Libra (R$ 6.50)")
moeda = int(input("Digite a moeda desejada: "))
valor = float(input("Digite o valor em reais: "))
match moeda:
    case 1:
        convertido = valor / 5.00
        print("Valor em dólares:", convertido)
    case 2:
        convertido = valor / 5.50
        print("Valor em euros:", convertido)
    case 3:
        convertido = valor / 6.50
        print("Valor em libras:", convertido)
    case _:
        print("Moeda inválida")
"""

"""
A7) Leia uma letra de conceito (A, B, C ou D) e use match para mostrar:
A = "Excelente" | B = "Bom" | C = "Regular" | D = "Reprovado".
Qualquer outra letra: "Conceito inválido".
"""
"""
letra = input("Digite A, B, C ou D")
match letra:
    case "A":
        print("Excelente")
    case "B":
        print("Bom")
    case "C":
        print("Regular")
    case "D":
        print("Reprovado")
    case _:
        print("Conceito inválido")
"""

"""
A8) Leia dois números e a operação (+, -, *, /, // ou %) e mostre o resultado com match.
Trate divisão por zero (para /, // e %) e operação inválida.
"""
"""
numero1 = float(input("Digite o primeiro numero: "))
numero2 = float(input("Digite o segundo numero: "))
operacao = input("Digite a operação (+, -, *, /, // ou %): ")
match operacao:
    case "+":
        resultado = numero1 + numero2
        print("Resultado:", resultado)
    case "-":
        resultado = numero1 - numero2
        print("Resultado:", resultado)
    case "*":
        resultado = numero1 * numero2
        print("Resultado:", resultado)
    case "/":
        if numero2 == 0:
            print("Não é possível dividir por zero")
        else:
            resultado = numero1 / numero2
            print("Resultado:", resultado)
    case "//":
        if numero2 == 0:
            print("Não é possível dividir por zero")
        else:
            resultado = numero1 // numero2
            print("Resultado:", resultado)
    case "%":
        if numero2 == 0:
            print("Não é possível dividir por zero")
        else:
            resultado = numero1 % numero2
            print("Resultado:", resultado)
    case _:
        print("Operação inválida")
"""

"""
A9) Imposto sobre salário:
até 2000.00 -> isento | de 2000.01 a 4000.00 -> 10% | acima de 4000.00 -> 20%
Leia o salário e mostre o valor do imposto e o salário líquido.
"""
"""
salario = float(input("Digite o seu salario: "))
if salario <= 2000:
    imposto = 0
elif salario <= 4000:
    imposto = salario * 0.10
else:
    imposto = salario * 0.20
liquido = salario - imposto
print("Imposto:", imposto)
print("Salario liquido:", liquido)
"""

"""
A10) Leia peso e altura e calcule o IMC (peso / altura ** 2). Mostre a classificação:
abaixo de 18.5 "Abaixo do peso" | até 24.99 "Normal" | até 29.99 "Sobrepeso" | 30 ou mais "Obesidade".
"""
"""
peso = float(input("Digite o seu peso: "))
altura = float(input("Digite a sua altura: "))
imc = peso / altura**2
if imc < 18.5:
    print("Abaixo do peso")
elif imc < 25:
    print("Normal")
elif imc < 30:
    print("Sobrepeso")
else:
    print("Obesidade")
"""

"""
A11) Ingresso do cinema: leia a idade e se é estudante ("s" ou "n").
Menores de 12 e maiores de 60 pagam R$ 10. Estudantes (fora dessas idades) pagam R$ 15.
Os demais pagam R$ 30. Mostre o valor. (Pratique and / or com parênteses.)
"""
"""
idade = int(input("Digite sua idade: "))
estudante = input("Você é estudante (s ou n): ")
if idade < 12 or idade > 60:
    print("Paga 10 reais.")
elif estudante == "s":
    print("Paga 15 reais.")
else:
    print("Paga 30 reais.")
"""

"""
A12) Leia 3 notas (0 a 10) e calcule a média.
média >= 7 "Aprovado" | média >= 5 "Recuperação" | abaixo disso "Reprovado".
Se alguma nota estiver fora de 0 a 10, mostre "Nota inválida" e não calcule a média.
"""
"""
nota1 = float(input("Digite a primeira nota: "))
nota2 = float(input("Digite a segunda nota: "))
nota3 = float(input("Digite a terceira nota: "))
if nota1 < 0 or nota1 > 10 or nota2 < 0 or nota2 > 10 or nota3 < 0 or nota3 > 10:
    print("Nota inválida")
else:
    media = (nota1 + nota2 + nota3) / 3
    if media >= 7:
        print("Aprovado")
    elif media >= 5:
        print("Recuperação")
    else:
        print("Reprovado")
"""

"""
A13) Leia uma frase. Percorrendo caractere por caractere, conte:
quantos espaços em branco e quantas letras 'e' (minúsculas) existem.
Depois mostre também a quantidade de palavras (espaços + 1).
"""
"""
# Esse fiz sozinho mas precisei consultar nas anotações de for in range
contador = 0
contadorLet = 0
frase = input("Digite uma frase: ")
for i in range(len(frase)):
    if frase[i] == "e":
        contadorLet += 1
    if frase[i] == " ":
        contador += 1
quantidadePalavras = contador + 1
print("Essa frase tem", contadorLet, "letras e, e", contador, "espaços em branco.")
print("Quantidade de palavras:", quantidadePalavras)
"""

"""
A15) Leia uma palavra e diga se ela é um palíndromo (lida de trás para frente é igual).
Exemplos: "arara", "radar" -> sim | "banana" -> não.
Monte a palavra invertida percorrendo de trás para frente.
"""
"""
# Esse nao consegui sozinho, minha tentativa:
palavra = input("Digite uma palavra: ")
palavra_invertida = palavra[::-1]
if i in range(len(palavra)):
    if palavra == palavra_invertida:
        print("Políndromo:", palavra_invertida)
    else:
        print("Não é palidromo")
"""
"""
palavra = input("Digite uma palavra: ")
palavra_invertida = ""
for i in range(len(palavra) - 1, -1, -1):
    palavra_invertida += palavra[i]
if palavra == palavra_invertida:
    print("É um palíndromo:", palavra_invertida)
else:
    print("Não é um palíndromo.")
"""

"""
A17) Cadastro de senha: peça a senha até ela ter no mínimo 6 caracteres e pelo menos um dígito numérico. Ao aceitar, mostre "Senha cadastrada!". Enquanto inválida, mostre o que está faltando.
"""
"""
# Fiz sozinho porem depois percebi que tem jeitos mais simples de fazer e entendi o jeito mais simples
caracteres = False
numero = False
while True:
    senha = input("Digite uma senha de 6 caracteres: ")
    if len(senha) >= 6:
        caracteres = True
    else:
        print("Precisa ter 6 digitos")
    for caractere in senha:
        if caractere.isdigit():
            numero = True
        else:
            numero = False
    if numero == False:
        print("Falta numero")
    if numero == True and caracteres == True:
        print("Senha cadastrada!")
        break

# Simples que o chatgpt fez e eu entendi e achei mais facil mesmo:
while True:
    senha = input("Digite uma senha: ")

    if len(senha) < 6:
        print("Precisa ter pelo menos 6 caracteres.")

    elif not any(c.isdigit() for c in senha):
        print("Precisa ter pelo menos um número.")

    else:
        print("Senha cadastrada!")
        break
"""

"""
A19) Caixa com PIN fixo 4321 e no máximo 3 tentativas.
Acertou: "Acesso Permitido" (e encerra). Errou as 3: "Cartão Bloqueado".
Mostre quantas tentativas restam a cada erro.
"""
"""
# Fiz sozinho porem depois percebi que tem jeitos mais simples de fazer e entendi o jeito mais simples tambem
pin = 4321
tentativa = 0
while True:
    digitado = int(input("Digite o PIN: "))
    if digitado == pin:
        print("Acesso Permitido")
        break
    else:
        tentativa = tentativa + 1
        if tentativa == 1:
            print("Restam 2 tentativas")
        if tentativa == 2:
            print("Restam 1 tentativas")
        if tentativa >= 3:
            print("Restam 0 tentativas")
            print("Cartão Bloqueado")
            break
"""

"""
A23) Caixa eletrônico: saldo inicial R$ 500.00.
Menu: 1 saldo | 2 depósito | 3 saque | 4 sair (use while + match).
Saque maior que o saldo: "Saldo Insuficiente". Valor negativo ou zero: "Valor inválido".
"""
"""
saldo = 500.00
while True:
    print("Menu: 1 saldo | 2 depósito | 3 saque | 4 sair (use while + match).")
    opcao = int(input("Digite uma opção: "))
    match opcao:
        case 1:
            print("Seu saldo é de:", saldo)
        case 2:
            deposito = float(input("Digite um valor para depositar: "))
            if deposito <= 0:
                print("Valor inválido")
            else:
                saldo = saldo + deposito
                print("Seu saldo é de:", saldo)
        case 3:
            saque = float(input("Digite um valor para sacar: "))
            if saque <= 0:
                print("Valor inválido")
            elif saque > saldo:
                print("Saldo Insuficiente")
            else:
                saldo = saldo - saque
                print("Seu saldo é de:", saldo)
        case 4:
            print("Encerrado")
            break
        case _:
            print("Opção invalida")
"""


# ============================================================
#       P1. REVER A PROVA 1 (completa) - DIA 12
# ============================================================
# No PAPEL, sem consultar, 1 hora. Os enunciados estão no seu ExerciciosFac.py (seção C).
#   - Q1: sentinela + filtro (múltiplos de 3): soma, média, maior e menor.
#   - Q2: menu da cafeteria com match e troco.
#   - Q3: contar espaços e letras 'A' percorrendo a frase.
#   - Q4: senha com mínimo de 8 caracteres e um símbolo (_, - ou @).
# Acertou 3 ou 4: P1 resolvida, não volte mais nela.
# Errou alguma: refaça só essa no dia 17.


# ============================================================
#       B. LISTAS
# ============================================================
# Revise antes (suas anotações, seção 4): append, pop, remove, insert, index, count,
# sort, in, len/min/max/sum, fatiamento [a:b], for item in lista, for i in range(len(lista)).

# ---------- DIA 12 ----------
"""
B2) Leia 6 números e guarde em uma lista (append dentro de um for). Mostre a lista,
o maior, o menor, a soma e a média (pode usar max, min, sum, len).
"""

"""
B3) Leia números inteiros até digitarem 0 (sentinela), guardando-os em uma lista.
No final mostre: quantos números foram lidos e uma nova lista só com os PARES.
"""

# ---------- DIA 13 ----------
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
B7) Lista de compras com menu (while + match):
1 incluir item | 2 remover item | 3 listar | 4 sair.
Ao remover, se o item não existir, mostre "Item não encontrado".
Ao listar, mostre o número de cada item (use enumerate) e o total de itens.
"""

"""
B8) Leia 6 números. Mostre a lista em ordem crescente, em ordem decrescente
e os 3 MAIORES valores (dica: sort decrescente + fatiamento [:3]).
"""

# ---------- DIA 14 ----------
"""
B10) Duas listas paralelas: leia o nome e a nota de 5 alunos (nomes[i] corresponde a notas[i]).
Mostre o nome do aluno de maior nota e a média da turma.
(Dica: use notas.index(max(notas)) para achar a posição.)
"""

"""
B12) Fila de atendimento (FIFO: append + pop(0)):
Menu: 1 chegar (digita o nome) | 2 atender (remove o primeiro e mostra quem foi) |
3 mostrar fila | 4 sair.
Se tentar atender com a fila vazia: "Ninguém na fila".
"""


# ============================================================
#       C. FUNÇÕES - LISTA DO PROFESSOR (sem recursão)
# ============================================================
# Revise antes: def nome(parametros): ... return valor | chamada | valor padrão.
# return DEVOLVE o valor (quem chamou usa/imprime) | print só mostra.
# Variável criada DENTRO da função não existe fora dela.
# Padrão: funções definidas em cima, programa principal embaixo lê, chama e imprime.

# ---------- DIA 14 ----------
"""
Prof. 1) Saudações
Escreva uma função chamada saudacao que recebe um nome como parâmetro e imprime
"Olá, [nome]!". Teste a função com diferentes nomes.
"""

"""
Prof. 2) Soma Simples
Crie uma função chamada soma que recebe dois números como parâmetros e retorna a soma
deles. Teste a função com diferentes pares de números.
(Extra: dê valor padrão 0 ao segundo parâmetro e teste soma(5).)
"""

"""
Prof. 3) Verificação Par ou Ímpar
Elabore uma função chamada verifica_par que recebe um número inteiro e retorna True
se o número for par e False se for ímpar. No programa principal, use o retorno para
mostrar "Par" ou "Ímpar".
"""

# ---------- DIA 15 ----------
"""
Prof. 4) Fatorial
Crie uma função chamada fatorial que recebe um número inteiro não negativo e retorna
o fatorial desse número. Lembre-se que o fatorial de 0 é 1.
"""

"""
Prof. 5) Números Primos
Escreva uma função chamada eh_primo que recebe um número inteiro e retorna True se o
número for primo e False caso contrário.
(Dica: primo = numero > 1; teste os divisores de 2 até numero - 1;
se algum der resto 0, primo = False e break.)
"""

"""
Prof. 6) Contagem de Vogais
Desenvolva uma função chamada conta_vogais que recebe uma string e retorna o número
de vogais (a, e, i, o, u) presentes na string.
"""

"""
Prof. 9) Palíndromo
Elabore uma função chamada eh_palindromo que recebe uma string e retorna True se a
string for um palíndromo (lê-se igual de trás para frente) e False caso contrário.
Ignore espaços e diferenças entre maiúsculas e minúsculas.
(Dica: texto.lower() deixa tudo minúsculo e texto.replace(" ", "") tira os espaços.)
"""

# ---------- DIA 16 ----------
"""
Prof. 16) Inverter String
Desenvolva uma função chamada inverter_string que recebe uma string e retorna a mesma
string invertida.
"""

"""
Prof. 15) Lista de Números Pares
Escreva uma função chamada lista_pares que recebe uma lista de números e retorna uma
nova lista contendo apenas os números pares.
"""

"""
Prof. 17) Média Aritmética
Crie uma função chamada media que recebe uma lista de números e retorna a média
aritmética desses números.
"""

"""
Prof. 18) Números Primos até N
Escreva uma função chamada numeros_primos_ate que recebe um número inteiro n e retorna
uma lista com todos os números primos até n. (Reaproveite a eh_primo do Prof. 5.)
"""

# ---------- DIA 17 ----------
"""
Prof. 19) Substituir Vogais
Elabore uma função chamada substituir_vogais que recebe uma string e um caractere.
A função deve substituir todas as vogais da string pelo caractere fornecido e retornar
a nova string.
"""

"""
Prof. 20) Juntar Listas
Crie uma função chamada juntar_listas que recebe duas listas e retorna uma única lista
contendo os elementos de ambas, sem duplicatas.
"""


# ============================================================
#       D. FUNÇÕES EXTRAS (o que a lista do professor não cobre)
# ============================================================

# ---------- DIA 17 ----------
"""
D1) Crie a função maior_valor(lista) que retorna o maior elemento SEM usar max().
(Comece com maior = lista[0] e percorra com for.) Teste com uma lista lida do teclado.
"""

# ---------- DIA 18 ----------
"""
D2) Crie a função menor_maior(lista) que retorna DOIS valores: o menor e o maior elemento
da lista (sem usar min() e max(): percorra com for). No programa principal, leia 6 números
numa lista, faça  menor, maior = menor_maior(lista)  e mostre os dois.
(Dica: return menor, maior)
"""

"""
D3) Crie a função conta_pares_impares(lista) que retorna DOIS valores: quantos números
pares e quantos ímpares existem na lista. Leia 8 números numa lista e mostre os dois
totais no programa principal.
(Dica: pares, impares = conta_pares_impares(lista))
"""


# ============================================================
#       R. RECURSIVIDADE
# ============================================================
# MOLDE (vale para todos):
#   1) CASO BASE: qual é o caso mais simples? (0, lista vazia "[]", texto vazio "")
#      -> if com return direto.
#   2) MINHA PARTE: o que esta chamada faz? (somar n, olhar lista[0], olhar texto[0])
#   3) DELEGO O RESTO: chame a própria função com algo MENOR
#      (n - 1 | lista[1:] | texto[1:]) e sempre com TODOS os parâmetros.
# Caso base compara com o tipo certo: 0 para número, [] para lista, "" para texto.
# Os de nº "Prof." são da lista de recursão do professor (refazer sem consultar a solução antiga).

# ---------- DIA 19 ----------
"""
R1) (Prof. 2) Crie contagem_regressiva(numero) que imprime o número e chama a si mesma
com o anterior, até chegar a zero. No zero, imprima 0 e depois "Fim!".
Chamada: contagem_regressiva(3)  ->  3 2 1 0 Fim!  (um por linha)
"""

"""
R2) (Prof. 3) Crie multiplicar(a, b) que retorna a * b usando apenas soma (+).
Chamada: multiplicar(4, 3)  ->  12  (4 + 4 + 4)
"""

"""
R3) (Prof. 4) Crie potencia(base, expoente) recursiva.
Caso base: qualquer número elevado a 0 é 1.
Chamada: potencia(2, 4)  ->  16
"""

"""
R4) (Prof. 5) Crie soma_lista(lista) recursiva que retorna a soma dos elementos.
Use lista[0] e lista[1:].
Chamada: soma_lista([2, 4, 6, 8])  ->  20
"""

"""
R5) (Prof. 7) Crie contar_letra(texto, letra) recursiva que retorna quantas vezes a letra
aparece no texto.
Chamada: contar_letra("banana", "a")  ->  3
"""

"""
R6) (Prof. 8) Crie existe_na_lista(lista, alvo) recursiva que retorna True se o alvo
estiver na lista e False se não estiver.
Chamada: existe_na_lista([10, 20, 30], 20)  ->  True
"""

# ---------- DIA 20 ----------
"""
R7) (Prof. 9) Crie eh_palindromo(palavra) recursiva: se a primeira letra for igual à última,
continue verificando o miolo (palavra[1:-1]). Retorna True ou False.
Chamada: eh_palindromo("radar")  ->  True
"""

"""
R8) (Prof. 10) Crie imprimir_invertido(lista) recursiva que imprime os elementos de trás
para frente, um por linha. A chamada recursiva vem ANTES do print.
Chamada: imprimir_invertido([1, 2, 3])  ->  3, 2, 1
"""

"""
R9) Fibonacci: crie fibonacci(n) recursiva que retorna o n-ésimo termo da sequência
0, 1, 1, 2, 3, 5, 8, ...  Casos base: fibonacci(0) = 0 e fibonacci(1) = 1.
Caso geral: fibonacci(n) = fibonacci(n - 1) + fibonacci(n - 2).
Chamada: fibonacci(6)  ->  8
"""

"""
R10) Soma dos dígitos: crie soma_digitos(n) recursiva que retorna a soma dos dígitos de n.
Dica: n % 10 é o último dígito e n // 10 é o número sem o último dígito.
Chamada: soma_digitos(1234)  ->  10
"""

"""
R11) Maior da lista: crie maior_lista(lista) recursiva que retorna o maior elemento
(a lista nunca vem vazia). Caso base: lista com 1 elemento.
Dica: compare lista[0] com o maior do restante.
Chamada: maior_lista([3, 9, 2])  ->  9
"""

"""
R12) Inverter texto: crie inverter_texto(texto) recursiva que retorna o texto invertido.
Dica: inverta o restante (texto[1:]) e coloque texto[0] no final.
Chamada: inverter_texto("abc")  ->  "cba"
"""


# ============================================================
#       S. SIMULADOS
# ============================================================

# ---------- SIMULADO 1 (DIA 22) - sem consultar nada, 1h30 ----------
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
S1-Q4) Crie a função RECURSIVA soma_pares(lista) que retorna a soma dos números pares
da lista (lista vazia retorna 0).
Chamada: soma_pares([1, 2, 3, 4])  ->  6
"""

# ---------- SIMULADO 2 (DIA 24) - depois revise seus erros ----------
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
S2-Q4) Crie a função RECURSIVA contar_maiores(lista, limite) que retorna quantos
elementos da lista são maiores que o limite (lista vazia retorna 0).
Chamada: contar_maiores([5, 12, 8, 20], 10)  ->  2
"""


# ============================================================
#       O. OPCIONAIS (só se sobrar tempo, nesta ordem)
# ============================================================
# Rápidos (2 a 5 min cada, dia 18): Prof. 11, 12, 13, 14.
# Médios (dia 21): C5, C9, Prof. 7, D6. Difícil (só se sobrar): Prof. 8.
# Prof. 10 (dicionário): só faça se o professor confirmar que cai na P2.

"""
A18) Leia uma nota entre 0 e 10 repetindo até ser válida ("Entrada inválida" e pede de novo).
Faça isso para 3 notas e depois mostre a média.
"""

"""
Prof. 11) Área do Círculo
Escreva uma função chamada area_circulo que recebe o raio de um círculo e retorna a
área. Use a fórmula: area = pi * raio ** 2  (use import math e math.pi).
"""

"""
Prof. 12) Potência
Crie uma função chamada potencia que recebe dois números, a base e o expoente, e
retorna o resultado da base elevada ao expoente.
"""

"""
Prof. 13) Comprimento da String
Elabore uma função chamada comprimento_string que recebe uma string e retorna o
comprimento dela (sem usar len(): conte percorrendo com for).
"""

"""
Prof. 14) Raiz Quadrada
Crie uma função chamada raiz_quadrada que recebe um número e retorna sua raiz
quadrada. Utilize a função math.sqrt().
"""

"""
C5) Crie a função media(n1, n2, n3) que retorna a média e a função situacao(media)
que retorna "Aprovado", "Recuperação" ou "Reprovado". Leia 3 notas e mostre a média e a
situação chamando as duas funções.
"""

"""
C9) Crie a função calcula_desconto(valor) com as regras:
compras >= 500: 20% | de 200 a 499.99: 10% | abaixo de 200: nenhum.
A função retorna o valor final. Leia valores até digitarem 0 e mostre o valor final de cada um.
"""

"""
Prof. 7) Fibonacci
Crie uma função chamada fibonacci que recebe um número inteiro n e retorna uma lista
com os n primeiros números da sequência de Fibonacci.
"""

"""
Prof. 8) Ordenação Personalizada
Escreva uma função chamada ordenar_lista que recebe uma lista de números e retorna a
lista ordenada em ordem crescente sem usar funções de ordenação prontas
(como sort() ou sorted()).
"""

"""
D6) Mini agenda com funções: crie incluir(agenda, nome), excluir(agenda, nome) e
consultar(agenda, nome) (esta retorna True/False). O programa principal tem o menu
(while + match) e só chama as funções. Opções: 1 incluir | 2 excluir | 3 consultar |
4 imprimir | 5 sair.
"""

"""
Prof. 10) Contagem de Palavras (DICIONÁRIO - só se cair na P2)
Crie uma função chamada conta_palavras que recebe uma string e retorna um dicionário
com a contagem de cada palavra que aparece na string. Considere palavras separadas
por espaços.
"""
