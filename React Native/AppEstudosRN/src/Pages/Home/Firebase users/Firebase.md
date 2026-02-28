// ========== FIREBASE WEB ========== https://firebase.google.com/docs?hl=pt-br
// esse é um arquivo comentando e explicando o arquivo Firebase.js por motivos de segurança

// Este arquivo inicializa o Firebase e exporta as instâncias de autenticação e banco de dados Firestore para uso no app React Native.
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";//Firestore (banco de dados NoSQL)

import { initializeAuth, getReactNativePersistence } from "firebase/auth"; //autenticação e persistência
import AsyncStorage from "@react-native-async-storage/async-storage";//AsyncStorage para persistência local no dispositivo

const firebaseConfig = {
  apiKey: "",
  authDomain: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

const app = initializeApp(firebaseConfig);
// Inicializa o app Firebase com as configurações acima

const db = getFirestore(app);
// Cria uma instância do Firestore usando o app inicializado

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), // Configura a autenticação para persistir dados usando AsyncStorage no React Native
});

export { db, auth };
// Exporta as instâncias do Firestore e Auth para uso em outros arquivos





# Firebase Nativo
> Mais seguro e performático 

**(Não funciona com Expo Go.)**
- Documentação e instalação(usar npm em alguns casos): [rnfirebase.io](https://rnfirebase.io/)  
- Guias de setup: CLI, Expo, iOS  
- Tutoriais incluídos: Autenticação, Cloud Functions, etc.

caso der erro na hora de rodar:
acessar: C:\Estudos\React Native\Pratica e desafios\Projeto\android\app\build.gradle
adicionar:
    defaultConfig {
        applicationId "com.devpost"
        minSdkVersion rootProject.ext.minSdkVersion
        targetSdkVersion rootProject.ext.targetSdkVersion
        versionCode 1
        versionName "1.0"
        multiDexEnabled true //Caso de erro <<<<
        ndk {
            abiFilters "x86", "x86_64"
        }
    }





--------COMANDOS---------
# Firebase: Firestore, Realtime Database e Storage

## FIRESTORE
Banco NoSQL baseado em **documentos e coleções**.

### 1. Estrutura
-   **Coleção (collection)** → grupo de documentos\
-   **Documento (doc)** → objeto com campos\
-   **Subcoleção** → coleção dentro de documento

### 2. Operações de Escrita
-   **add(data)** → cria documento com ID automático\
-   **set(data)** → cria ou sobrescreve documento\
-   **update(data)** → atualiza campos específicos\
-   **delete()** → remove documento

### 3. Operações de Leitura
-   **get()** → busca única\
-   **onSnapshot()** → escuta mudanças em tempo real\
-   **doc.data()** → retorna os dados\
-   **doc.id** → ID do documento

### 4. Operadores de Consulta
-   **where(campo, operador, valor)**\
-   **orderBy(campo, direção)**\
-   **limit(n)**\
-   **startAt / endAt / startAfter / endBefore**

### 5. Propriedades de Snapshots
-   **snapshot.docs** → lista de documentos\
-   **snapshot.size** → quantidade\
-   **snapshot.empty** → vazio\
-   **snapshot.metadata.hasPendingWrites** → dados locais/servidor

### 6. Tipos Especiais
-   **Timestamp**\
-   **GeoPoint**\
-   **FieldValue.increment()**\
-   **FieldValue.arrayUnion()/arrayRemove()**\
-   **FieldValue.serverTimestamp()**

### 7. Índices
-   Queries complexas podem requerer índice composto

------------------------------------------------------------------------

## REALTIME DATABASE
Banco NoSQL **em árvore JSON**, otimizado para tempo real.

### 1. Estrutura
-   Árvore JSON\
-   Dados aninhados

### 2. Operações de Escrita
-   **set()**\
-   **update()**\
-   **push()** → cria ID automático\
-   **remove()**

### 3. Operações de Leitura
-   **on('value')** → tempo real\
-   **once('value')** → leitura única\
-   **snapshot.val()** → dados retornados

### 4. Consultas
-   **orderByChild()**\
-   **orderByKey()**\
-   **orderByValue()**\
-   **equalTo()**\
-   **startAt() / endAt()**\
-   **limitToFirst()/limitToLast()**

### 5. Propriedades
-   Latência muito baixa\
-   Ideal para chat, live tracking

------------------------------------------------------------------------

## STORAGE
Armazenamento de arquivos: imagens, vídeos, PDFs.

### 1. Referências
-   **ref(path)**\
-   **child('nome')**

### 2. Upload
-   **put(file)**\
-   **putString()**

### 3. Download
-   **getDownloadURL()**

### 4. Exclusão
-   **delete()**

### 5. Metadados
-   **fullPath**\
-   **name**\
-   **contentType**\
-   **size**

### 6. Regras
-   Controle de acesso via rules