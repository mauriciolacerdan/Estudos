#  -----  Entrada e saída de dados  -----

nome = input(
    "Informe o seu nome: "
)  # input() Usado para receber info rmações digitadas pelo usuário.(sempre retorna uma str (string), mesmo que o usuário digite um número.
idade = input("Informe a sua idade: ")
print("Olá ", nome)  # print() Usado para exibir informações na tela.
print("Sua idade é: ", idade)

# Conversão de tipos (Para transformar o valor recebido)
idade = int(input("Informe sua idade: "))
altura = float(input("Informe sua altura: "))
# int() → transforma em número inteiro.
# float() → transforma em número decimal.
# str() → transforma em string.
# bool() → transforma em booleano.
# Atenção: strings não vazias são consideradas True.
# Exemplo:
ano_nasc = int(input("Informe o ano do seu nascimento: "))
idade = 2026 - ano_nasc
print("Sua idade é:", idade)


#  -----  Tipos de dados básicos  -----
nome = "Maurício"  # str
idade = 20  # int
altura = 1.60  # float
aprovado = True  # bool
# True e False são os valores booleanos e começam com letra maiúscula.


#  -----  Operadores de comparação  -----
# São utilizados para comparar valores. O resultado de uma comparação é sempre True ou False.
# == igual
# != diferente
# >	 maior
# <  menor
# >= maior ou igual
# <= menor ou igual
# = é atribuição, enquanto == é comparação.
# Exemplo:
idade = 20
if idade >= 18:
    print("Maior de idade")
else:
    print("Menor de idade")


#  -----  Estruturas condicionais  -----
# if	Executa um bloco quando a condição for verdadeira.
# else	Testa outra condição caso as anteriores sejam falsas.
# elif  Executa quando nenhuma condição anterior for verdadeira.
# Condições aninhadas: Um if pode existir dentro de outro if.
# O Python verifica as condições de cima para baixo e executa apenas o primeiro bloco que for verdadeiro.
# Exemplo:
nota = float(input("Informe sua nota: "))
if nota >= 7:
    print("Aprovado")
elif nota >= 5:
    print("Recuperação")
else:
    print("Reprovado")
# Indentação → espaço no início da linha que define a qual bloco de código ela pertence. É obrigatória no Python.


#  -----  Operadores lógicos  -----
# Os operadores lógicos servem para combinar ou inverter condições.
# and → E: todas as condições precisam ser verdadeiras.
# or → OU: pelo menos uma condição precisa ser verdadeira.
# not → NÃO: inverte o resultado (True ↔ False).
# Exemplo completo:
idade = 20
possui_cnh = True
bloqueado = False
if idade >= 18 and possui_cnh and not bloqueado:
    print("Pode dirigir")
else:
    print("Não pode dirigir")
# É possível combinar vários operadores lógicos e comparações. Exemplo:
# idade >= 18 and possui_cnh
# idade < 18 or possui_autorizacao
# not bloqueado


#  -----  match e case  -----
# Usados para comparar uma variável com valores específicos.
# Exemplo:
opcao = 2
match opcao:  # match → valor que será analisado.
    case 1:  # case → cada possibilidade.
        print("Iniciar")
    case 2:
        print("Configurações")
    case 3:
        print("Sair")
    case _:  # case _ → opção padrão, semelhante ao else
        print("Opção inválida")

# Quando usar?
# if / elif / else → quando precisar testar condições, como maior, menor, intervalos ou combinações.
# Exemplo: idade >= 18      Exemplo: nota >= 7
# match / case → quando precisar comparar valores específicos.
# Exemplo: opcao == 1, opcao == 2, opcao == 3



#  -----  Estruturas de repetição  -----
# Estruturas de repetição servem para executar um bloco de código várias vezes.
# Os principais laços em Python são:
# for  → usado quando sabemos ou conseguimos prever quantas vezes repetir.
# while → usado quando a repetição depende de uma condição.


#  -----  Laço for  -----
# O for repete um bloco de código para cada item de uma sequência ou intervalo. É muito utilizado quando sabemos quantas vezes queremos repetir algo.
# Sintaxe:
for variavel in sequencia:
    # código que será repetido
# Exemplo:
for i in range(5):
    print(i)
# Resultado:
# 0
# 1
# 2
# 3
# 4
# Atenção:
# range(5) começa em 0 e vai até 4.
# O número informado no final NÃO é incluído.


#  -----  Função range()  -----
# range() cria uma sequência de números para ser usada em repetições.
# range(fim)
# Começa em 0 e vai até antes do fim.
for numero in range(5):
    print(numero)
# 0, 1, 2, 3, 4

# range(início, fim)
# Começa no início e vai até antes do fim.
for numero in range(1, 6):
    print(numero)
# 1, 2, 3, 4, 5

# range(início, fim, passo)
# O terceiro valor define de quanto em quanto o número aumenta.
for numero in range(0, 11, 2):
    print(numero)
# 0, 2, 4, 6, 8, 10

# Também é possível usar passo negativo para fazer contagem regressiva.
for numero in range(10, 0, -1):
    print(numero)
# 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

# Regra importante do range():
# início → incluído
# fim → não incluído
# passo → quantidade que será adicionada ou diminuída a cada repetição.


#  -----  for com Strings  -----
# O for também pode percorrer cada caractere de uma string.
nome = "Python"
for letra in nome:
    print(letra)
# Resultado:
# P
# y
# t
# h
# o
# n

#  -----  Indentação no for  -----
# Tudo que estiver indentado pertence ao laço e será repetido.
for numero in range(3):
    print("Número:", numero)
    print("Essa mensagem também será repetida")
print("Fim")
# O print("Fim") está fora do laço e executa apenas uma vez.



#  -----  Laço while  -----
# O while repete um bloco de código ENQUANTO uma condição for verdadeira.
# É mais utilizado quando não sabemos exatamente quantas vezes será necessário repetir.
# Sintaxe:
while condição:
    # código que será repetido
# Exemplo:
contador = 0
while contador < 5:
    print(contador)
    contador = contador + 1
# Resultado:
# 0
# 1
# 2
# 3
# 4
# O while verifica a condição antes de cada repetição.
# Quando a condição se torna False, o laço termina.

#  -----  Atualização da variável no while  -----
# É importante alterar a variável usada na condição.
# Caso contrário, a condição pode permanecer True para sempre.
contador = 0
while contador < 5:
    print(contador)
    contador += 1
# contador += 1 é uma forma reduzida de:
# contador = contador + 1

#  -----  Loop infinito  -----
# Um loop infinito acontece quando a condição do while nunca se torna False.
# CUIDADO:
# O exemplo abaixo nunca termina sozinho.
# contador = 0
# while contador < 5:
#     print(contador)
# Como contador nunca muda, contador < 5 continuará sendo True.

#  -----  while com input()  -----
# O while é muito útil para repetir uma ação até o usuário informar algo específico.
senha = ""
while senha != "1234":
    senha = input("Digite a senha: ")
print("Acesso liberado!")


#  -----  break  -----
# break interrompe o laço imediatamente.
# Quando o Python encontra break, ele sai da repetição.
for numero in range(1, 11):
    print(numero)
    if numero == 5:
        break
print("Fim")
# O laço para quando numero == 5.
# Os números 6 até 10 não são executados.

#  -----  continue  -----
# continue pula o restante da repetição atual
# e vai diretamente para a próxima repetição.
for numero in range(1, 6):
    if numero == 3:
        continue
    print(numero)
# Resultado:
# 1
# 2
# 4
# 5
# O número 3 foi ignorado.


#  -----  for x while  -----
# Use for quando:
# → o número de repetições for conhecido ou previsível.
# → precisar percorrer uma sequência.
# Use while quando:
# → o número de repetições for desconhecido.
# → a repetição depender de uma condição.