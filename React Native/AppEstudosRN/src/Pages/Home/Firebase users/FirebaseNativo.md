# Firebase Nativo
> Mais seguro e performático 

**(Não funciona com Expo Go.)**
- Documentação e instalação(usar npm em alguns casos): [rnfirebase.io](https://rnfirebase.io/)  
- Guias de setup: CLI, Expo, iOS  
- Tutoriais incluídos: Autenticação, Cloud Functions, etc.

caso der erro na hora de rodar:
acessar: C:\Estudos\React Native\Pratica e desafios\DevPost\android\app\build.gradle
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