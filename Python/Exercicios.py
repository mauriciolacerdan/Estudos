# Lista de Exercícios 1

"""
# Exercicio 1
Media1 = (8 + 9 + 7) / 3
Media2 = (4 + 5 + 6) / 3
SomaMedias = Media1 + Media2
mediaMedias = (Media1 + Media2) / 2
print(
    "Média1:",
    Media1,
    "  Média2:",
    Media2,
    "  Soma das 2 médias:",
    SomaMedias,
    "  Média das 2 médias:",
    mediaMedias,
)
"""

"""
# Exercicio 2
nome = input("Informe o seu nome: ")
for variavel in range(10):
    print(nome)
"""
"""
# Exercicio 3
NumeroInt = 10
Sucessor = NumeroInt + 1
Antecessor = NumeroInt - 1
print("Inteiro:", NumeroInt, "  Sucessor:", Sucessor, "  Antecessor:", Antecessor)
"""
"""
# Exercicio 4
Valor = float(input("Informe um número: "))
ValorAjust = Valor + (Valor * 0.10)
print("Valor ajustado:", ValorAjust)
"""
"""
# Exercicio 5
ValorInt = int(input("Informe o primeiro número: "))
SegValorInt = int(input("Informe o segundo número: "))
TerçValorInt = int(input("Informe o terceiro número: "))
Média = (ValorInt + SegValorInt + TerçValorInt) / 3
print("Média:", Média)
"""
"""
# Exercicio 6
ValorQ = int(input("Informe o número: "))
quadrado = ValorQ * ValorQ
print("O quadrado é:", quadrado)
"""
"""
# Exercicio 7
saldo = float(input("Informe seu saldo: "))
reajuste = saldo * 0.01
saldo_reajustado = saldo + reajuste
print("Saldo reajustado:", saldo_reajustado)
"""
"""
# Exercicio 8
preco = float(input("Informe o preço: "))
desconto = preco * 0.09
novo_preco = preco - desconto
print("Novo preço:", novo_preco)
"""
"""
# Exercicio 9
ValorHora = float(input("Informe o valor de cada hora/aula: "))
AulasDadas = int(input("Informe a quantidade de aulas dadas: "))
Inss = float(input("Informe o percentual de desconto do INSS: "))
salarioBruto = ValorHora * AulasDadas
desconto = salarioBruto * (Inss / 100)
salarioLiquido = salarioBruto - desconto
print(
    "Salário bruto:",
    salarioBruto,
    "   Desconto do INSS:",
    desconto,
    "   Salário líquido:",
    salarioLiquido,
)
"""
"""
# Exercício 10
celsius = float(input("Informe a temperatura em Celsius: "))
fahrenheit = (celsius * 9 / 5) + 32
print("Temperatura em Fahrenheit:", fahrenheit)
"""
"""
# Exercício 11
Numero = int(input("Informe um numero: "))
if Numero > 20:
    print(Numero / 2)
"""
"""
# Exercício 12
Numero1 = int(input("Informe o primeiro numero: "))
Numero2 = int(input("Informe o segundo numero: "))
Soma = Numero1 + Numero2
if Soma > 10:
    print(Soma)
"""
"""
# Exercício 13
numero = float(input("Informe um número: "))
if numero > 0:
    resultado = numero ** 0.5
    print("Raiz quadrada:", resultado)
else:
    resultado = numero ** 2
    print("Quadrado:", resultado)
"""
"""
# Exercício 14
Salario = float(input("Digite seu salário: "))
Prestacao = float(input("Digite o valor da prestação: "))
if Prestacao > Salario * 0.20:
    print("Empréstimo não pode ser concedido.")
else:
    print("Empréstimo pode ser concedido.")
"""
"""
# Exercício 15
Numero = float(input("Digite um numero: "))
if Numero > 20:
    print("maior que 20")
if Numero < 20:
    print("menor que 20")
if Numero == 20:
    print("Igual a 20")
"""
"""
# Exercício 16
AnoNasc = int(input("Digite o ano que voce nasceu:"))
AnoAtual = int(input("Digite o ano atual:"))
Idade = AnoAtual - AnoNasc
print("Voce tem", Idade, "anos")
"""
"""
# Exercício 17
Limiteinferior = int(input("Digite o limite inferior: "))
Limitesuperior = int(input("Digite o limite superior: "))
for numero in range(Limiteinferior + 1, Limitesuperior):
    if numero % 2 == 0:
        print(numero)
"""
"""
# Exercício 18
NumeroInicial = int(input("Digite o número inicial: "))
NumeroFinal = int(input("Digite o número final: "))
soma = 0
for numero in range(NumeroInicial, NumeroFinal + 1):
    soma += numero
print("Somatório:", soma)
"""
"""
# Exercício 19
for numero in range(15, 200 + 1):
    quadrado = numero**2
    print(quadrado)
"""
"""
# Exercício 20
soma = 0
for numero in range(1, 101):
    soma += numero
print("Soma:", soma)
"""
"""
# Exercício 21
for numero in range(1, 200):
    if numero % 4 == 0:
        print(numero)
"""

# Exercício 22


"""
22) Elaborar um programa que efetue a leitura sucessiva de valores numéricos
e apresente no final o total do somatório, a média e o total de valores lidos.
O programa deve fazer as leituras dos valores enquanto o usuário estiver
fornecendo valores positivos. Ou seja, o programa deve parar quando o
usuário fornecer um valor negativo.

23) Elaborar um programa que efetue a leitura de valores positivos inteiros até
que um valor negativo seja informado. Ao final devem ser apresentados o
maior e menor valore informados pelo usuário.

24) Receber um número do teclado e informar se ele é divisível por 10, por 5,
por 2 ou se não é divisível por nenhum destes.

25) Um comerciante comprou um produto e quer vendê-lo com lucro de 5% se
o valor da compra for menor que 20,00; caso contrário, o lucro será de
30%. Entrar com o valor do produto e imprimir o valor da venda.

26) Receber do teclado, vários números e verificar se eles são ou não
quadrados perfeitos. O programa termina quando o usuário digitar um
número menor ou igual a zero.

27) Ler 2 valores e somar os dois. Caso a soma seja maior que 10, mostrar a
soma.

28) Entrar com um número e imprimir a raiz quadrada do número. Caso ele
seja positivo. E o quadrado dele caso seja negativo.

29) Ler um número inteiro e verificar se está compreendido entre 20 e 80. Se
tiver, imprimir “parabéns”, senão imprimir “chimpanzé”.

30) Ler um número do teclado e imprimir todos os números de 1 até o número
lido. Imprimir o produto dos números.

31) Ler um número e imprimir igual a 20, menor que 20, maior que 20.

32) Informe o tipo de carro (A, B e C). Informe o percurso rodado em km e
calcule o consumo estimado, conforme o tipo, sendo (A=8, B=9 e C=12)
km/litro

33) Escrever um programa que leia, valores inteiros, até ser lido o valor 99.
Quando isso acontecer o programa deverá escrever a soma e a média dos
valores lidos.

34) Escrever um programa que receba vários números inteiros no teclado. E no
final imprimir a média dos números múltiplos de 3. Para sair digitar 0
(zero).

35) Receber dois números e imprimi-los em ordem crescente.

36) Escrever um programa que receba vários números inteiros no teclado e no
final imprimir a média dos números múltiplos de 3. Para sair digitar 0
(zero).

37) Ler um número do teclado e imprimir todos os números de 1 até o número
lido. Imprimir o produto dos números.

38) Escrever um programa, que leia valores inteiros até ser lido o valor 99.
Quando isso acontecer o programa deverá escrever a soma e a média dos
valores lidos.

39) Solicitar a idade de várias pessoas e imprimir: Total de pessoas com menos
de 21 anos. Total de pessoas com mais de 50 anos. O programa termina
quando idade for = 99.

40) Solicitar um número entre 1 e 4. Se a pessoas digitar um número
diferente, mostrar a mensagem "entrada inválida" e solicitar o número
novamente. Se digitar correto mostrar o número digitado.

41) Solicitar um número entre 1 e 4. Se a pessoa digitar um número diferente,
mostrar a mensagem "entrada inválida" e solicitar o número novamente.
Se digitar correto mostrar o número digitado.

42) Fazer um programa que receba um valor n no teclado e determine o maior.
A cond ição de término do programa é quando o usuário digitar zero.

43) Apresentar o total da soma obtida dos cem primeiros números inteiros.

44) Receber um número e verificar se está entre 100 e 200. Se estiver na
faixa, imprimir: "Você digitouuu um número entre 100 e 200", senão estiver
na faixa, imprimir: "Você digitou um número fora da faixa entre100 e 200
"""


# ============ Lista de Exercícios 2 ============
"""
# 1)
valor = float(input("Digite um valor: "))
maior = valor
menor = valor
soma = valor
for i in range(9):
    valor = float(input("Digite um valor: "))
    if valor > maior:
        maior = valor
    if valor < menor:
        menor = valor
    soma += valor
media = soma / 10
print("Maior:", maior)
print("Menor:", menor)
print("Soma:", soma)
print("Média:", media)

# 2)
Matricula = input("Digite sua matricula: ")
Nome = input("Digite seu nome: ")
P1 = float(input("Digite nota da p1: "))
P2 = float(input("Digite nota da p2: "))
Media = (P1 + P2) / 2
if Media < 4:
    print(Nome, "foi", "Reprovado.")
elif Media < 7:
    print(Nome, "foi para", "Prova Final.")
else:
    print(Nome, "foi", "Aprovado.")

# 3)
while True:
    print("------------------------------------------------------")
    print("                    Menu Principal                    ")
    print("------------------------------------------------------")
    print("OPÇÕES")
    print("1 – NOVO JOGO")
    print("2 – CARREGAR JOGO SALVO")
    print("3 – EXCLUIR JOGO SALVO")
    print("4 – ABANDONAR JOGO")
    print("------------------------------------------------------")
    opção = int(input("DIGITE A OPÇÃO DESEJADA (1 A 4): "))
    if opção == 1 or opção == 2 or opção == 3:
        print("OPÇÃO EM IMPLEMENTAÇÃO")
    elif opção == 4:
        print("JOGO FINALIZADO")
        break
    else:
        print("OPÇÃO INEXISTENTE")

# 4)
ano = int(input("Digite um ano: "))
if (ano % 4 == 0 and ano % 100 != 0) or ano % 400 == 0:
    print("Ano bissexto")
else:
    print("Ano não bissexto")

# 5)
while True:
    numero = int(input("Digite um número: "))
    if numero == 0:
        break
    dobro = numero * 2
    print(dobro)

# 6)
frase = input("Digite uma frase: ")
contador = 0
for letra in frase:
    if letra == "e":
        contador += 1
print("Quantidade de letras e:", contador)

# 7)
for numero in range(1, 51):
    print(numero)
    if numero % 5 == 0:
        print("Múltiplo de 5")

# 8)
palavra = input("Digite uma palavra: ")
for i in range(len(palavra) - 1, -1, -1):
    print(palavra[i], end="")
"""
