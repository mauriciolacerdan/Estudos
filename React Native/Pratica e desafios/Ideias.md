# VanControl
Sistema de gestão para vans universitárias, escolares e futura mobilidade intermunicipal.

# Problema
Motoristas de vans enfrentam dificuldades para:
- controlar quais alunos irão no dia
- saber quem vai apenas na ida ou volta
- evitar esquecer alunos no trajeto
- organizar presença durante embarque
- controlar atrasos
- gerenciar pagamentos e inadimplência
Hoje muitos utilizam:
- WhatsApp
- papel
- planilhas
- memória
Isso gera falhas operacionais e perda de organização.

# Solução
Aplicativo para gestão operacional de vans.
O sistema permite:
- confirmação diária de presença
- controle de ida e volta
- checklist de embarque
- aviso de atraso
- controle financeiro
- gestão de alunos
- comunicação entre motorista e aluno

# Público-Alvo
## Inicial
- vans universitárias
## Expansão
- vans escolares
- transporte empresarial
- transporte intermunicipal

# Proposta de Valor
## Para motoristas
- menos risco de esquecer alunos
- mais organização
- economia de tempo
- controle financeiro
- profissionalização do serviço
## Para alunos/pais
- mais segurança
- comunicação rápida
- transparência

# MVP (Primeira Versão)
## Motorista
- cadastro de alunos
- lista diária
- confirmação de ida/volta
- checklist de embarque
- controle de presença
- alerta de alunos não marcados
## Aluno
- confirmar presença
- avisar ausência
- avisar atraso
- visualizar informações da van

# Funcionalidades Futuras
## Financeiro
- mensalidades
- inadimplência
- histórico de pagamentos
- PIX
- cobrança automática
## Gestão
- múltiplas vans
- múltiplos motoristas
- relatórios
- métricas de ocupação
- rotas

# Expansão Estratégica
## Marketplace Intermunicipal
Modelo semelhante a:
- Buser
- BlaBlaCar
- apps regionais de fretamento
### Passageiro
- escolhe cidade
- escolhe van
- reserva vaga
- paga online
### Motorista
- publica viagens
- controla lotação
- recebe passageiros

# Modelo de Negócio
## Fase inicial (recomendado)
### SaaS por motorista
Exemplo:
- R$39 a R$99/mês
Vantagens:
- simples
- previsível
- fácil validar

## Alternativas futuras
### Cobrança por aluno
Exemplo:
- R$2 a R$5 por aluno
### Taxa por viagem
Exemplo:
- 5% a 15% por corrida
Ideal para marketplace.

# Estratégia Recomendada
## Etapa 1
Criar MVP extremamente simples:
- cadastro de alunos
- confirmação diária
- checklist
- aviso de atraso
Objetivo:
- validar uso diário
## Etapa 2
Adicionar:
- financeiro
- PIX
- inadimplência
- relatórios
## Etapa 3
Expandir para:
- vans escolares
- transporte regional
- marketplace

# Arquitetura Sugerida
```txt
Mobile App (React Native)
        ↓
Backend API (Node.js + Express)
        ↓
PostgreSQL
        ↓
Firebase
- autenticação
- notificações
- analytics