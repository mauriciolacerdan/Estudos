# ============================================================
#       REVISÃO - ALGORITMOS PYTHON
# ============================================================


# ========== ENTRADA DE DADOS E CONVERSÃO
nome = input(
    "Digite seu nome: "
)  # input() recebe informação do usuário. IMPORTANTE: input() sempre retorna uma string (str).
idade = int(input("Digite sua idade: "))  # int() transforma em número inteiro.
nota = float(input("Digite sua nota: "))  # float() transforma em número decimal.
idade_texto = str(idade)  # str() transforma um valor em texto.

quantidade_caracteres = len(nome)  # len() retorna a quantidade de caracteres.

contador_vogais = 0
for letra in nome:  # for percorre cada caractere de uma string.
    if letra in "aeiouAEIOU":  # "in" verifica se a letra está dentro da string.
        contador_vogais += 1

if nota >= 7:
    situacao = "Aprovado"
elif (
    nota >= 5
):  #  Testa uma alternativa apenas se a condição anterior for falsa. Você pode usar quantos elif precisar para criar várias regras em cascata.
    situacao = "Recuperação"
else:
    situacao = "Reprovado"
# Python verifica as condições de cima para baixo.
# O primeiro bloco verdadeiro é executado.


# ========== MENU PRINCIPAL

while True:  # while repete enquanto a condição for True, até o break encerrar.
    print("\n========== MENU ==========")
    print("1  - Mostrar nome")
    print("2  - Mostrar idade")
    print("3  - Verificar número (par/ímpar)")
    print("4  - Somar N números")
    print("5  - Analisar números (maior/menor/média)")
    print("6  - Contagem regressiva")
    print("7  - Operadores lógicos")
    print("8  - Calculadora")
    print("9  - Desconto por faixa de valor")
    print("10 - Validar senha")
    print("11 - Mostrar resumo")
    print("12 - Sair")
    opcao = int(input("Escolha uma opção: "))

    # match compara um valor com opções específicas (não serve para faixas).
    match opcao:
        case 1:
            print("\nSeu nome é:", nome)

        case 2:
            print("\nSua idade é:", idade)

        case 3:
            # ========== IF + ELSE + %
            numero = int(input("\nDigite um número: "))
            if numero % 2 == 0:  # % retorna o resto da divisão.
                print("O número é PAR.")
            else:
                print("O número é ÍMPAR.")

        case 4:
            # ========== FOR + RANGE + ACUMULADOR
            quantidade = int(input("\nQuantos números deseja somar? "))
            soma = 0  # Acumulador começa em 0.
            for i in range(quantidade):
                numero = float(input("Digite um número: "))
                soma += numero  # Mesmo que: soma = soma + numero
            print("Soma:", soma)

        case 5:
            # ========== WHILE + BREAK + CONTADOR + ACUMULADOR + MAIOR/MENOR
            print("\nDigite números. Digite 0 para terminar.")
            contador = 0
            soma = 0
            maior = menor = None
            while True:
                numero = float(input("Digite um número: "))
                if numero == 0:
                    break  # break encerra o loop imediatamente.
                contador += 1
                soma += numero
                if contador == 1:  # Primeiro número define maior/menor iniciais.
                    maior = menor = numero
                else:
                    if numero > maior:
                        maior = numero
                    if numero < menor:
                        menor = numero
            if contador > 0:
                media = soma / contador
                print("\n===== RESULTADO =====")
                print("Quantidade:", contador)
                print("Soma:", soma)
                print("Média:", media)
                print("Maior:", maior)
                print("Menor:", menor)
            else:
                print("Nenhum número foi informado.")

        case 6:
            # ========== FOR + RANGE COM PASSO NEGATIVO + CONTINUE
            print("\nContagem regressiva:")
            for numero in range(
                10, 0, -1
            ):  # range(início, fim, passo). início incluído. fim NÃO incluído.
                if numero == 5:
                    continue  # continue pula apenas esta repetição.
                print(numero)

        case 7:
            # ========== OPERADORES LÓGICOS
            # and = todas as condições precisam ser verdadeiras.
            # or  = pelo menos uma condição precisa ser verdadeira.
            # not = inverte True e False.
            if idade >= 18 and nota >= 7:
                print("\nMaior de idade e aprovado.")
            else:
                print("\nPelo menos uma condição não foi atendida (and).")
            if idade < 18 or nota < 5:
                print("Pelo menos uma condição foi atendida (or).")
            else:
                print("Nenhuma condição foi atendida (or).")
            bloqueado = False
            if not bloqueado:
                print("Usuário desbloqueado (not).")

        case 8:
            # ========== MATCH COM OPERAÇÕES MATEMÁTICAS
            n1 = float(input("\nPrimeiro número: "))
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
                    print("Operação inválida.")

        case 9:
            # ========== IF/ELIF EM FAIXAS DE VALOR
            valor = float(input("\nValor da compra: "))
            if valor >= 500:
                desconto = 0.20
            elif valor >= 200:
                desconto = 0.10
            else:
                desconto = 0
            final = valor * (1 - desconto)
            print("Valor final com desconto:", final)

        case 10:
            # ========== WHILE + VALIDAÇÃO DE ENTRADA
            senha = ""
            while len(senha) < 8:
                senha = input("\nCrie uma senha (mínimo 8 caracteres): ")
            print("Senha cadastrada com sucesso!")

        case 11:
            # ========== RESUMO DOS DADOS
            print("\n========== RESUMO ==========")
            print("Nome:", nome)
            print("Idade:", idade)
            print("Nota:", nota)
            print("Situação:", situacao)
            print("Caracteres do nome:", quantidade_caracteres)
            print("Vogais no nome:", contador_vogais)
            print("Idade como texto:", idade_texto)

        case 12:
            print("\nPrograma encerrado.")
            break  # break sai do while.

        case _:
            print("\nOpção inválida.")


# ============================================================
#       Exercícios de treino para a prova
# ============================================================

valorTotal = float(input("Digite o valor total da compra: "))
if valorTotal >= 500:
    percentual = 20
elif valorTotal >= 200:
    percentual = 10
else:
    percentual = 0
valorFinal = valorTotal * (1 - percentual / 100)
print("Valor Final: ", valorFinal)

palavra = input("Digite uma palavra: ")
caracteres = len(palavra)
print("Quantidade de caracteres:", caracteres)
for soletrando in palavra:
    print(soletrando)

saldo = 10000
while True:
    menu = int(input("Ditite 1 para saldo, 2 para deposito e 3 para saque e 4 sair"))
    match menu:
        case 1:
            print("seu saldo é de: ", saldo)
        case 2:
            deposito = float(input("Quanto voce quer depositar ?"))
            saldo = saldo + deposito
            print("Saldo atual: ", saldo)
        case 3:
            saque = float(input("Quanto voce quer sacar ?"))
            saldo = saldo - saque
            print("Saldo atual: ", saldo)
        case 4:
            print("Programa encerrado.")
            break

while True:
    senha = input("Digite uma senha para cadastrar: ")
    caracteres = len(senha)
    if caracteres < 8:
        print("Digite no minimo 8 caracteres")
    else:
        break
        print("Senha cadastrada com sucesso!")

while True:
    numero = int(input("Digite um número inteiro: "))
    if numero == 0:
        break
    letra = input("Digite D ou M: ")
    match letra:
        case "D":
            resultado = numero * 2
            print("Esse é o dobro: " + str(resultado))
        case "M":
            resultado = numero / 2
            print("Essa é a metade: " + str(resultado))
        case _:
            print("Opção inválida")


"""
1. Números primos (seu maior ponto cego — Questão 4 da prova real)
Peça um número inteiro e diga se é primo (o que você já viu).
Peça um número e, se não for primo, mostre qual foi o primeiro divisor encontrado (além de 1 e ele mesmo).
Peça um número inteiro positivo e mostre todos os números primos entre 1 e esse número.

2. Loop contado com acumulador (Questão 3 da prova real — "Analisador de Clima")
Peça 5 notas de uma prova (número fixo, não sentinela) e mostre a média, a maior e a menor.
Peça o preço de 4 produtos e mostre a soma total e a média de preço.
Peça a temperatura de cada dia de uma semana (7 valores) e diga em quantos dias a temperatura ficou acima da média (dica: primeiro calcule a média, depois compare de novo com cada valor guardado numa lista).

3. Loop contado com contagem de tentativas (fecha o gap da Questão 2 real)
Refaça o exercício da senha (o "Validador de Senha" que você já fez), mas agora com senha fixa "1234" e máximo de 3 tentativas. Se acertar, "Acesso Permitido". Se errar as 3, "Cofre Bloqueado".
Faça o mesmo, mas mostrando quantas tentativas restam a cada erro (ex: "Senha Incorreta. Você tem mais 2 tentativas.").

4. Menu completo com validação de saldo (fecha o gap da Questão 1 real)
Pegue o Caixa Eletrônico que você já fez e adicione a checagem de saldo insuficiente no saque: se o valor pedido for maior que o saldo, exibir "Saldo Insuficiente" e não descontar nada.
Adicione uma opção 5 no menu: "Extrato", que mostra quantos depósitos e quantos saques foram feitos até agora (use dois contadores).

5. if/elif em faixas (reforço — pode cair em variação)
Peça o salário de um funcionário e calcule o imposto: até R$ 2.000 isento; de R$ 2.000,01 a R$ 5.000 desconta 10%; acima de R$ 5.000 desconta 20%.
Peça a idade e classifique: até 12 = "Criança", 13-17 = "Adolescente", 18-59 = "Adulto", 60+ = "Idoso".

6. Combinado (nível prova — treino final, faça por último)
Faça um sistema que peça 5 números inteiros. Para cada um, diga se é primo. Ao final, mostre quantos primos foram digitados no total.
Faça um menu com 3 opções: (1) calcular média de N notas digitadas pelo usuário, (2) verificar se um número é primo, (3) sair. Use while True + match/case.
"""
