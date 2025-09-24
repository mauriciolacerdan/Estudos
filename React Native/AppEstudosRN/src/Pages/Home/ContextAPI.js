// Context API permite compartilhar dados entre componentes e paginas sem precisar passar props manualmente.
// Assim, informações (ex.: de uma API ou banco de dados) ficam centralizadas e acessíveis em todo o app.

import React, { createContext, useState } from "react";

// Cria o contexto para autenticação
export const AuthContext = createContext({});

function AuthProvider({ children }) {
  // Estado inicial do usuário (pode ser atualizado futuramente com dados reais)
  const [userC, setUserC] = useState({ nome: "Matheus Teste" });

  return (
    // Provider disponibiliza "user" para todos os componentes filhos
    <AuthContext.Provider value={{ userC }}>{children}</AuthContext.Provider>
  );
}

// Exporta o Provider para envolver a aplicação principal (geralmente no App.js)
export default AuthProvider;

//continuação no App.js e Home
