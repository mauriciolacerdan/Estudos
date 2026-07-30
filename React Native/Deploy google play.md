# Finalizando o app

## Alterar o nome do aplicativo

- No arquivo `app.json`, altere `displayName`.
- No Android, altere também o valor de `app_name` em:
  - `android/app/src/main/res/values/strings.xml`

## Alterar o ícone do aplicativo

Os ícones ficam em:

```text
android/app/src/main/res/
```

Substitua os arquivos das pastas `mipmap-*` pelos novos ícones, mantendo os mesmos nomes e resoluções.

> Caso utilize ícones adaptativos, verifique também os arquivos da pasta `mipmap-anydpi-v26`.
> Após alterar o nome ou o ícone, gere uma nova build do aplicativo para aplicar as mudanças.

---

# Preparando o app para publicação

## Documentação

- Android: https://reactnative.dev/docs/signed-apk-android

## 1. Gerar a Upload Key

Execute o comando da documentação para gerar a chave de assinatura.
É possível alterar:

- `my-upload-key.keystore` → nome do arquivo da chave (ex.: `produtivo.keystore`)
- `my-key-alias` → nome do alias da chave
  Durante a execução serão solicitados:
- Senha da chave (não aparece enquanto é digitada).
- Informações como nome, organização, empresa, cidade e país.
  Ao final será gerado um arquivo `.keystore`.
  > **Importante:** faça um backup do arquivo `.keystore` e das senhas em um local seguro. Nunca envie esse arquivo para o GitHub. Se perder a chave ou as senhas, poderá ter dificuldades para publicar novas versões do aplicativo.

## 2. Copiar a chave

Copie o arquivo `.keystore` para:

```text
android/app/
```

## 3. Configurar o Gradle

No arquivo:

```text
android/gradle.properties
```

Adicione ao final:

```properties
MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
MYAPP_UPLOAD_STORE_PASSWORD=*****
MYAPP_UPLOAD_KEY_PASSWORD=*****
```

Substitua os nomes e senhas pelos valores definidos durante a criação da chave.

> **Importante:** não envie esse arquivo para um repositório público caso ele contenha suas senhas.

## 4. Configurar o build.gradle

No arquivo:

```text
android/app/build.gradle
```

Configure o bloco `signingConfigs.release` conforme a documentação.
No bloco `buildTypes.release`, utilize:

```gradle
signingConfig signingConfigs.release
```

## 5. Gerar o arquivo para publicação

Entre na pasta `android`:

```bash
cd android
```

Execute:

```bash
# Windows
.\gradlew bundleRelease
# Linux/macOS
./gradlew bundleRelease
```

Esse comando gera um arquivo `.aab`, que é o formato recomendado para publicação na Google Play.
O arquivo será criado em:

```text
android/app/build/outputs/bundle/release/app-release.aab
```

---

## Atualizar uma versão do aplicativo

Antes de gerar uma nova versão, atualize em:

```text
android/app/build.gradle
```

No bloco `defaultConfig`:

- Aumente obrigatoriamente o `versionCode`.
- Atualize o `versionName` para representar a nova versão do aplicativo.
  Exemplo:

```gradle
versionCode 2
versionName "1.1.0"
```

Depois gere novamente o arquivo:

```bash
cd android
gradlew bundleRelease
```

---

# Publicando no Google Play Console

Acesse o Google Play Console.
Na primeira publicação será necessário:

- Criar a conta de desenvolvedor.
- Efetuar o pagamento da taxa.
- Aceitar os termos.
- Configurar os dados da conta, incluindo o nome do desenvolvedor exibido publicamente.
  > Contas pessoais novas podem precisar concluir um teste fechado antes de publicar diretamente em produção.
  > Depois:

1. Crie um novo aplicativo.
2. Preencha as informações do app (nome, descrição, imagens etc.).
3. Complete as etapas obrigatórias solicitadas pelo Console (classificação de conteúdo, segurança dos dados, público-alvo, preços e distribuição, entre outras).
4. Acesse **Produção** (ou **Teste**, quando aplicável).
5. Crie uma nova versão.
6. Envie o arquivo `app-release.aab`.
7. Revise possíveis erros.
8. Envie para análise da Google.
   Após a aprovação, o aplicativo será publicado e poderá ser acompanhado pelo Google Play Console, onde também ficam disponíveis estatísticas, avaliações e futuras atualizações.
