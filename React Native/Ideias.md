# ========== Movix ==========

<br>

## Problema

Sistema de gestão para vans universitárias, escolares e futura mobilidade intermunicipal.
Motoristas de vans de faculdade e escolas enfrentam dificuldades para:

- saber quem vai apenas na ida ou volta;
- evitar esquecer alunos no trajeto;
- organizar presença durante o embarque;
- controlar atrasos;
- gerenciar pagamentos e inadimplência.

Hoje, muitos utilizam: grupos de WhatsApp (enquetes), papel, planilhas, memória.
Isso gera falhas operacionais e perda de organização.

<br>

## Solução

### Motorista

- cadastro e gestão de alunos;
- controle diário de ida/volta e embarque;
- locais de embarque de cada aluno;
- comunicação de aluno com motorista e geral;
- financeiro (mensalidades, inadimplência e histórico).

### Aluno

- confirmação diária de ida, volta e embarque, com notificação de atraso;
- visualizar informações da van e do motorista;
- financeiro (mensalidades, inadimplência e histórico).

### Intermunicipal (Modelo semelhante ao BlaBlaCar para geração de renda extra, como em Paraty, com viagens para eventos também)

- Passageiro: escolhe cidade, escolhe van, reserva vaga, paga online?
- Motorista: publica viagens, controla lotação e recebe passageiros.

### Futuro

- marketplace de vans disponíveis;
- mapa com rotas;
- pagamento pelo app;
- cadastro de múltiplas vans e motoristas;
- relatórios.

---

### Monetização

- R$39 a R$99/mês (simples, previsível, fácil de validar);
- R$2 a R$5 por aluno;
- 5% a 15% por corrida.

<br><br>

## Arquitetura

Mapa de telas e funcionalidades de cada tela:

2 apps ou apenas 1 app?
IOS ?

### Cliente

- Home (resumo geral);
- Configuração (informações da conta, sair da conta, configurações e alterações no cadastro).

### Motorista

- Home (resumo geral);
- Configuração (informações da conta, sair da conta, configurações e alterações no cadastro).

<br><br><br><br><br><br><br><br><br><br><br><br>

# ========== Indica Paraty ==========

<br>

## Problema

O turismo em Paraty depende muito de indicações de pousadas, hotéis e estabelecimentos locais para divulgar passeios e atividades turísticas.

Atualmente, essa divulgação acontece principalmente por meio de panfletos e murais físicos, gerando problemas:

- poluição visual e descarte excessivo de papel;
- acúmulo de poeira e trabalho para manutenção dos murais;
- dificuldade para encontrar informações atualizadas;
- turistas dependem de indicações presenciais para conhecer atividades;
- comerciantes dependem de divulgação física para conseguir clientes.

Além disso, pousadas recebem comissões por indicar turistas para determinados passeios, como escunas e barcos.

<br>

## Solução

Plataforma digital que reúne atividades, passeios, restaurantes e serviços turísticos de Paraty em um único lugar.

O objetivo é substituir os panfletos físicos por uma experiência digital de divulgação, descoberta e indicação de estabelecimentos.

### Turista

- visualizar passeios, escunas, barcos, trilhas, restaurantes e outras atividades;
- pesquisar por categorias e localização;
- visualizar fotos, descrições, preços, roteiros, cardápios e avaliações;
- consultar disponibilidade e realizar reservas;
- entrar em contato diretamente com os estabelecimentos;
- informar qual pousada indicou a plataforma ou atividade.

### Estabelecimento

- cadastro e gerenciamento do comércio ou atividade;
- página própria com fotos, informações, preços e localização;
- cadastro de roteiros, cardápios e serviços;
- gerenciamento de reservas e clientes;
- avaliações dos turistas;
- acompanhamento de indicações e comissões.

### Pousada

- QR Code exclusivo na recepção para acessar a plataforma;
- divulgação digital de todos os estabelecimentos cadastrados;
- indicação de passeios e serviços aos hóspedes;
- controle de comissões recebidas por indicações.

### Futuro

- pagamento e reservas diretamente pela plataforma;
- confirmação automática de reservas;
- painel financeiro de comissões para pousadas;
- avaliações verificadas após passeios;
- cupons e descontos exclusivos;
- recomendações personalizadas;
- expansão para outras cidades turísticas.

<br>

## Monetização

- Comissão de 5% a 15% por reserva realizada pela plataforma;
- comissão por indicação de clientes para pousadas;
- planos mensais para estabelecimentos com recursos adicionais;
- destaque patrocinado para estabelecimentos e passeios.

**Modelo inicial:** validar a plataforma com estabelecimentos gratuitos ou com baixo custo de adesão e monetizar principalmente por reservas e indicações.

<br>

## Arquitetura

Uma plataforma com três ambientes, sem necessidade inicial de desenvolver aplicativos separados.

### Turista (Site / PWA)

- Home (categorias e atividades em destaque);
- Explorar (busca, filtros e localização);
- Detalhes (fotos, informações, preços, avaliações e contato);
- Reservas (solicitação e acompanhamento);
- Perfil (dados e histórico de reservas).

### Estabelecimento (Painel Web)

- Dashboard (visualizações, reservas e indicações);
- Meu estabelecimento (cadastro e edição);
- Serviços (passeios, cardápios e preços);
- Reservas (gerenciamento de solicitações);
- Avaliações;
- Financeiro (comissões e resultados).

### Administração (Plataforma)

- gerenciamento de usuários e estabelecimentos;
- aprovação de cadastros;
- gerenciamento de categorias;
- controle de reservas e comissões;
- moderação de avaliações.

<br>

## MVP

Primeira versão para validar o negócio em Paraty:

- cadastro de estabelecimentos;
- catálogo digital de passeios e restaurantes;
- páginas individuais com informações e fotos;
- QR Code para pousadas;
- identificação da pousada responsável pela indicação;
- contato e solicitação de reservas;
- painel básico para estabelecimentos e pousadas.
