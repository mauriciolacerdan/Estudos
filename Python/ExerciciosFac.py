# ============================================================
#       EXERCÍCIOS - ALGORITMOS PYTHON
# ============================================================
# ÍNDICE
#   A. RESOLVIDOS PARA CONSULTA   - os que valem relembrar
#   B. PENDENTES                  - enunciados do professor sem solução
#   C. PROVA 1                    - questões da Prova
#   D. PADRÕES DE PROVA           - modelos que se repetem
#   E. AGENDA TELEFÔNICA          - primeiro exercício com listas


# ============================================================
#       A. RESOLVIDOS PARA CONSULTA
# ============================================================
"""
# for + range: repetição simples
Lista 1, ex.2 - Peça um nome e imprima-o 10 vezes.
-----
nome = input("Informe o seu nome: ")
for i in range(10):
    print(nome)
"""

"""
# Cálculo com percentual
Lista 1, ex.9 - Dado o valor da hora, o nº de aulas e o % do INSS, calcule salário bruto, desconto e líquido.
-----
valor_hora = float(input("Valor da hora/aula: "))
aulas = int(input("Aulas dadas: "))
inss = float(input("Percentual do INSS: "))
bruto = valor_hora * aulas
desconto = bruto * (inss / 100)
liquido = bruto - desconto
print("Bruto:", bruto, "Desconto:", desconto, "Líquido:", liquido)
"""
"""
# if/else com duas operações
Lista 1, ex.13 - Número positivo: imprima a raiz quadrada. Caso contrário: o quadrado.
-----
numero = float(input("Número: "))
if numero > 0:
    print("Raiz quadrada:", numero ** 0.5)
else:
    print("Quadrado:", numero ** 2)
"""
"""
# Condição com cálculo
Lista 1, ex.14 - O empréstimo só é concedido se a prestação for no máximo 20% do salário.
-----
salario = float(input("Salário: "))
prestacao = float(input("Prestação: "))
if prestacao > salario * 0.20:
    print("Empréstimo não pode ser concedido.")
else:
    print("Empréstimo pode ser concedido.")
"""
"""
# range com limites + par
Lista 1, ex.17 - Imprima os números pares entre dois limites (sem incluir os limites).
-----
inferior = int(input("Limite inferior: "))
superior = int(input("Limite superior: "))
for numero in range(inferior + 1, superior):
    if numero % 2 == 0:
        print(numero)
"""
"""
# Somatório em intervalo
Lista 1, ex.18 - Some todos os inteiros entre dois números (inclusive). Serve também para somar de 1 a 100.
-----
inicial = int(input("Número inicial: "))
final = int(input("Número final: "))
soma = 0
for numero in range(inicial, final + 1):
    soma += numero
print("Somatório:", soma)
"""
"""
# for contado: maior, menor, soma, média
Lista 2, ex.1 - Leia 10 valores e mostre maior, menor, soma e média.
-----
valor = float(input("Valor: "))
maior = menor = soma = valor  # o 1º valor já inicializa tudo
for i in range(9):  # faltam 9 leituras
    valor = float(input("Valor: "))
    if valor > maior:
        maior = valor
    if valor < menor:
        menor = valor
    soma += valor
print("Maior:", maior, "Menor:", menor, "Soma:", soma, "Média:", soma / 10)
"""
"""
# Menu com if/elif/else
Lista 2, ex.3 - Menu: 1, 2 e 3 = 'OPÇÃO EM IMPLEMENTAÇÃO'; 4 = 'JOGO FINALIZADO' e encerra; outro = 'OPÇÃO INEXISTENTE'.
-----
while True:
    print("1 - NOVO JOGO | 2 - CARREGAR | 3 - EXCLUIR | 4 - ABANDONAR")
    opcao = int(input("Opção (1 a 4): "))
    if opcao == 1 or opcao == 2 or opcao == 3:
        print("OPÇÃO EM IMPLEMENTAÇÃO")
    elif opcao == 4:
        print("JOGO FINALIZADO")
        break
    else:
        print("OPÇÃO INEXISTENTE")
"""
"""
# Condição composta: ano bissexto
Lista 2, ex.4 - Diga se o ano é bissexto (divisível por 4 e não por 100, ou divisível por 400).
-----
ano = int(input("Ano: "))
if (ano % 4 == 0 and ano % 100 != 0) or ano % 400 == 0:
    print("Ano bissexto")
else:
    print("Ano não bissexto")
"""
"""
# Strings: contar vogais
Avaliativo 6 - Conte as vogais de uma palavra ou frase.
-----
texto = input("Texto: ")
contador = 0
for letra in texto:
    if letra in "aeiouAEIOU":
        contador += 1
print("Quantidade de vogais:", contador)
"""
"""
# Strings: percorrer de trás para frente
Lista 2, ex.8 - Imprima a palavra invertida, sem pular linha entre as letras.
-----
palavra = input("Palavra: ")
for i in range(len(palavra) - 1, -1, -1):
    print(palavra[i], end="")
"""
"""
# match: dia da semana
Avaliativo 5 - Número de 1 a 7 vira o nome do dia (1 = Domingo). Outro valor: 'Dia inválido'.
-----
dia = int(input("Número de 1 a 7: "))
match dia:
    case 1:
        print("Domingo")
    case 2:
        print("Segunda-feira")
    case 3:
        print("Terça-feira")
    case 4:
        print("Quarta-feira")
    case 5:
        print("Quinta-feira")
    case 6:
        print("Sexta-feira")
    case 7:
        print("Sábado")
    case _:
        print("Dia inválido")
"""
"""
# match: calculadora (com divisão por zero)
Avaliativo 7 - Leia dois números e uma operação (+, -, *, /) e mostre o resultado. Corrigido: trata divisão por zero.
-----
n1 = float(input("Primeiro número: "))
n2 = float(input("Segundo número: "))
operacao = input("Operação (+, -, *, /): ")
match operacao:
    case "+":
        print("Resultado:", n1 + n2)
    case "-":
        print("Resultado:", n1 - n2)
    case "*":
        print("Resultado:", n1 * n2)
    case "/":
        if n2 != 0:
            print("Resultado:", n1 / n2)
        else:
            print("Erro: divisão por zero.")
    case _:
        print("Operação inválida")
"""
"""
# Valor + dado associado (aluno destaque)
Avaliativo 9 - Leia nome e nota de 5 alunos. Mostre a média da turma e o nome do aluno com maior nota.
-----
soma_notas = 0
maior_nota = -1
destaque = ""
for i in range(5):
    nome = input("Nome do aluno: ")
    nota = float(input("Nota final: "))
    soma_notas += nota
    if nota > maior_nota:
        maior_nota = nota  # atualize os DOIS juntos
        destaque = nome
print("Média da turma:", soma_notas / 5)
print("Aluno destaque:", destaque)
"""
"""
# Menu com match
Avaliativo 10 - Menu: 1 tamanho do texto, 2 par ou ímpar, 3 sair.
-----
while True:
    print("1. Tamanho do Texto | 2. Par ou Ímpar | 3. Sair")
    opcao = int(input("Escolha uma opção: "))
    match opcao:
        case 1:
            texto = input("Texto: ")
            print("Quantidade de caracteres:", len(texto))
        case 2:
            numero = int(input("Número inteiro: "))
            if numero % 2 == 0:
                print("Par")
            else:
                print("Ímpar")
        case 3:
            print("Programa encerrado")
            break
        case _:
            print("Opção inválida")
"""


# ============================================================
#       B. PENDENTES (sem solução)
# ============================================================

"""
# PENDENTES - enunciados do professor (Lista 1) AINDA SEM SOLUÇÃO.
# Resolva no arquivo de treino e cole a solução aqui depois.
# Removidos por serem repetidos: 27=ex.12 | 28=ex.13 | 31=ex.15 | 34 e 36=Prova 1 Q1
#                                 37=30 | 38=33 | 41=40 | 43=ex.20

30) Ler um número do teclado e imprimir todos os números de 1 até o número lido.
Imprimir o produto dos números.

22) Leitura sucessiva de valores numéricos; apresentar somatório, média e total
de valores lidos. Ler enquanto os valores forem positivos (parar no negativo).

23) Ler valores positivos inteiros até que um negativo seja informado. Ao final,
apresentar o maior e o menor valor informado.

26) Receber vários números e verificar se são quadrados perfeitos. Termina quando
o usuário digitar um número menor ou igual a zero.

33) Ler valores inteiros até ser lido o valor 99. Então escrever a soma e a média
dos valores lidos.

39) Solicitar a idade de várias pessoas e imprimir: total de pessoas com menos de
21 anos e total com mais de 50 anos. Termina quando a idade for 99.

40) Solicitar um número entre 1 e 4. Se for diferente, mostrar "entrada inválida"
e solicitar novamente. Se correto, mostrar o número digitado.

42) Receber valores n no teclado e determinar o maior. O programa termina quando
o usuário digitar zero.
"""


# ============================================================
#       C. PROVA 1
# ============================================================

"""
# Q1 - Sentinela + filtro (múltiplos de 3)
Leia inteiros até digitar 0. No final: soma, média, maior e menor dos múltiplos de 3.
-----
soma = 0
contador = 0
maior = None
menor = None
while True:
    numero = int(input("Número (0 para encerrar): "))
    if numero == 0:
        break
    if numero % 3 == 0:
        soma += numero
        contador += 1
        if maior is None or numero > maior:
            maior = numero
        if menor is None or numero < menor:
            menor = numero
print("Soma dos múltiplos de 3:", soma)
if contador > 0:
    print("Média:", soma / contador)
    print("Maior:", maior, "Menor:", menor)
else:
    print("Nenhum múltiplo de 3 foi digitado.")
"""
"""
# Q2 - match definindo valor + troco
Menu da cafeteria: 1 Expresso (5.00), 2 Capuccino (7.50), 3 Macchiato (8.00). Leia a opção e o valor pago. Mostre o troco; se pago < preço: 'Saldo Insuficiente'; opção fora do menu (case _): 'Opção de bebida inválida'.
-----
print("1 - Expresso (R$ 5.00) | 2 - Capuccino (R$ 7.50) | 3 - Macchiato (R$ 8.00)")
opcao = int(input("Escolha sua bebida: "))
match opcao:
    case 1:
        preco = 5.00
    case 2:
        preco = 7.50
    case 3:
        preco = 8.00
    case _:
        preco = 0
        print("Opção de bebida inválida.")
if opcao in [1, 2, 3]:
    pagamento = float(input("Quanto você vai pagar? R$ "))
    if pagamento < preco:
        print("Saldo Insuficiente")
    else:
        print("Troco: R$", round(pagamento - preco, 2))
"""
"""
# Q3 - Contagem em string (dois contadores)
Leia uma frase e, percorrendo caractere por caractere, conte os espaços em branco e as letras 'A' (somente maiúscula).
-----
frase = input("Frase: ")
espacos = 0
letras_a = 0
for caractere in frase:
    if caractere == " ":
        espacos += 1
    if caractere == "A":
        letras_a += 1
print("Espaços:", espacos)
print("Letras A maiúsculas:", letras_a)
"""
"""
# Q4 - Validação de senha com símbolo
Peça uma senha até ter no mínimo 8 caracteres e um símbolo especial (_, - ou @; a solução aceita também #). Ao aceitar, mostre mensagem de sucesso.
-----
while True:
    senha = input("Cadastre uma senha: ")
    if len(senha) >= 8 and any(c in "_-@#" for c in senha):
        print("Senha cadastrada com sucesso!")
        break
    else:
        print("Senha inválida. Use 8+ caracteres e um símbolo (_, -, @ ou #).")
"""


# ============================================================
#       D. PADRÕES DE PROVA
# ============================================================

"""
# if/elif em faixas (desconto)
Compras >= 500: 20% de desconto; de 200 a 499.99: 10%; abaixo de 200: nenhum. Mostre o valor final.
-----
valor = float(input("Valor da compra: "))
if valor >= 500:
    percentual = 20
elif valor >= 200:
    percentual = 10
else:
    percentual = 0
print("Valor final:", valor * (1 - percentual / 100))
"""
"""
# Caixa eletrônico (match + saldo insuficiente)
Menu: 1 saldo, 2 depósito, 3 saque, 4 sair. Saque maior que o saldo: 'Saldo Insuficiente'.
-----
saldo = 10000.0
while True:
    opcao = int(input("1-Saldo 2-Depósito 3-Saque 4-Sair: "))
    match opcao:
        case 1:
            print("Saldo:", saldo)
        case 2:
            saldo += float(input("Depósito: "))
        case 3:
            saque = float(input("Saque: "))
            if saque > saldo:
                print("Saldo Insuficiente")
            else:
                saldo -= saque
        case 4:
            print("Programa encerrado.")
            break
        case _:
            print("Opção inválida")
"""
"""
# Loop + match + conversão para string
Leia inteiros até 0. Para cada um, peça D (dobro) ou M (metade) e mostre o resultado convertido para texto com str().
-----
while True:
    numero = int(input("Número inteiro (0 para sair): "))
    if numero == 0:
        break
    letra = input("D (dobro) ou M (metade): ")
    match letra:
        case "D":
            print("Dobro: " + str(numero * 2))
        case "M":
            print("Metade: " + str(numero / 2))
        case _:
            print("Opção inválida")
"""
"""
# Validação de faixa (repete até ser válido)
Peça um número entre 1 e 4. Se inválido, mostre 'entrada inválida' e peça de novo.
-----
numero = int(input("Número (1 a 4): "))
while numero < 1 or numero > 4:
    print("Entrada inválida")
    numero = int(input("Número (1 a 4): "))
print("Você digitou:", numero)
"""
"""
# Tentativas limitadas (for + break)
Senha fixa 1234, no máximo 3 tentativas. Acertou: 'Acesso Permitido'. Errou as 3: 'Cofre Bloqueado'.
-----
acesso = False
for i in range(3):
    if input("Senha: ") == "1234":
        print("Acesso Permitido")
        acesso = True
        break
    print("Senha incorreta. Restam", 3 - (i + 1), "tentativas.")
if not acesso:
    print("Cofre Bloqueado")
"""
"""
# Número primo
Diga se um número é primo. Achou um divisor entre 2 e n-1: não é primo.
-----
numero = int(input("Número: "))
primo = numero > 1
for i in range(2, numero):
    if numero % i == 0:
        primo = False
        break
print("Primo" if primo else "Não é primo")
"""


# ============================================================
#       E. AGENDA TELEFÔNICA
# ============================================================

"""
# Agenda telefônica (menu + lista)
1 Consultar, 2 Incluir, 3 Alterar (mesma posição), 4 Excluir (1ª ocorrência), 5 Imprimir, 6 Abandonar.
-----
agenda = []
while True:
    print("\n1-Consultar 2-Incluir 3-Alterar 4-Excluir 5-Imprimir 6-Abandonar")
    opcao = int(input("Opção: "))
    match opcao:
        case 1:
            nome = input("Nome: ")
            if nome in agenda:
                print("Encontrado:", nome)
            else:
                print("Não encontrado.")
        case 2:
            agenda.append(input("Nome: "))
        case 3:
            nome = input("Nome a alterar: ")
            if nome in agenda:
                pos = agenda.index(nome)
                agenda[pos] = input("Novo nome: ")
            else:
                print("Não encontrado.")
        case 4:
            nome = input("Nome a excluir: ")
            if nome in agenda:
                agenda.remove(nome)
            else:
                print("Não encontrado.")
        case 5:
            for nome in agenda:
                print(nome)
        case 6:
            break
        case _:
            print("Opção inválida.")
"""


# ============================================================
#       F. Praticando Recursividade
# ============================================================

"""
Segue uma lista de exerícios para consolidar o conhecimento apresentado.
Essa lista vai valer 1,0 ponto.
A atividade deve ser feita individualmente, manuscrita, digitalizada e postada na plataforma, no formato .PDF
A postagem deverá ser realizada até o dia 09/11.
O não cumprimento de qualquer uma das regras resultará na penalidade da nota.
Lista de Exercícios de Funções:
"""

"""
1. Soma dos Números até N
Enunciado: Crie uma função recursiva chamada soma_ate que receba um número inteiro positivo e retorne a soma de todos os números de 1 até n.
Exemplo de chamada: soma_ate(5)
Exemplo de saída: 15 (pois 5 + 4 + 3 + 2 + 1 = 15)
"""
"""
def soma_ate(numero):
    if numero == 0:
        return 0
    return numero + soma_ate(numero - 1)
numero = int(input("Digite um número: "))
print("Soma de 1 até", numero, "=", soma_ate(numero))
"""

"""
2. Contagem Regressiva
Enunciado: Escreva uma função recursiva chamada contagem_regressivaNão que receba um número e o imprima na tela. Em seguida, a função deve chamar a si mesma para imprimir o número anterior, até chegar a zero. Quando chegar a zero, imprima "Fim!".
Exemplo de chamada: contagem_regressiva(3)
Exemplo de saída: ```text 3 2 1 0 Fim!
"""
"""
def contagem_regressiva(numero):
    if numero == 0:
        print(0)
        print("Fim!")
    else:
        print(numero)
        contagem_regressiva(numero - 1)
contagem_regressiva(3)
"""

"""
3. Multiplicação por Somas Sucessivas
Enunciado: Escreva uma função recursiva chamada multiplicar(a, b) que retorne o resultado da multiplicação de a por b usando apenas o operador de soma (+). Lembre-se que multiplicar é somar o mesmo número repetidas vezes.
Exemplo de chamada: multiplicar(4, 3)
Exemplo de saída: 12 (pois 4 + 4 + 4 = 12)
"""
"""
def multiplicar(a, b):
    if b == 0:
        return 0
    return a + multiplicar(a, b - 1)
print(multiplicar(4, 3))
"""

"""
4. Potência de um Número
Enunciado: Crie uma função recursiva chamada potencia(base, expoente) que calcule o resultado de uma base elevada a um expoente. Lembre-se do caso base: qualquer número elevado a zero é 1.
Exemplo de chamada: potencia(2, 4)
Exemplo de saída: 16
"""
"""
def potencia(base, expoente):
    if expoente == 0:
        return 1
    return base * potencia(base, expoente - 1)
exp = potencia(2, 4)
print(exp)
"""

"""
5. Soma dos Elementos de uma Lista
Enunciado: Escreva uma função recursiva chamada soma_lista(lista) que receba uma lista de números e retorne a soma de todos os seus elementos. Lembre-se que você pode separar a lista no primeiro elemento (lista[0]) e no restante da lista (lista[1:]).
Exemplo de chamada: soma_lista([2, 4, 6, 8])
Exemplo de saída: 20
"""
"""
def soma_lista(lista):
    if lista == []:
        return 0
    return lista[0] + soma_lista(lista[1:])
print(soma_lista([2, 4, 6, 8]))
"""

"""
6. Contar Elementos de uma Lista
Enunciado: Crie uma função recursiva chamada tamanho_lista(lista) que calcule quantos elementos existem dentro de uma lista, sem utilizar a função nativa len(). O caso base é quando a lista fica vazia (tamanho 0).
Exemplo de chamada: tamanho_lista(['a', 'b', 'c', 'd'])
Exemplo de saída: 4
"""
"""
def tamanho_lista(lista):
    if lista == []:
        return 0
    return 1 + tamanho_lista(lista[1:])
print(tamanho_lista(["a", "b", "c", "d"]))
"""

"""
7. Contar Ocorrências de uma Letra
Enunciado: Escreva uma função recursiva chamada contar_letra(texto, letra) que receba uma string e uma letra específica. A função deve retornar quantas vezes aquela letra aparece no texto.
Exemplo de chamada: contar_letra("banana", "a")
Exemplo de saída: 3
"""
"""
def contar_letra(texto, letra):
    if texto == "":
        return 0
    if texto[0] == letra:
        return 1 + contar_letra(texto[1:], letra)
    return contar_letra(texto[1:], letra)
print(contar_letra("banana", "a"))
"""

"""
8. Procurar um Número na Lista
Enunciado: Crie uma função recursiva chamada existe_na_lista(lista, alvo) que retorne True se o número alvo estiver dentro da lista, ou False se não estiver. A função deve verificar o primeiro elemento e passar o restante da lista para a próxima chamada.
Exemplo de chamada: existe_na_lista([10, 20, 30], 20)
Exemplo de saída: True
"""
"""
def existe_na_lista(lista, alvo):
    if lista == []:
        return False
    if lista[0] == alvo:
        return True
    return existe_na_lista(lista[1:], alvo)
print(existe_na_lista([10, 20, 30], 20))
"""

"""
9. Verificar se é Palíndromo
Enunciado: Um palíndromo é uma palavra que se lê da mesma forma de trás para frente (ex: "arara"). Escreva uma função recursiva eh_palindromo(palavra) que verifique se a primeira letra é igual à última. Se for, ela deve continuar verificando o miolo da palavra. Retorne True ou False.
Exemplo de chamada: eh_palindromo("radar")
Exemplo de saída: True
"""
"""
def eh_palindromo(palavra):
    if len(palavra) <= 1:
        return True
    if palavra[0] != palavra[-1]:
        return False
    return eh_palindromo(palavra[1:-1])
print(eh_palindromo("radar"))
"""

"""
10. Imprimir Lista de Trás para Frente
Enunciado: Crie uma função recursiva chamada imprimir_invertido(lista) que receba uma lista e imprima seus elementos de trás para frente, um por linha. O segredo é fazer a chamada recursiva antes do comando de impressão (print).
Exemplo de chamada: imprimir_invertido([1, 2, 3])
Exemplo de saída: 3, 2, 1
"""
"""
def imprimir_invertido(lista):
    if lista == []:
        return
    imprimir_invertido(lista[1:])
    print(lista[0])
imprimir_invertido([1, 2, 3])
"""
