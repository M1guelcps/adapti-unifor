import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import globals from 'globals';

export default tseslint.config(
  // Habilita as regras recomendadas básicas e do TypeScript
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    // Define o ambiente Node.js (reconhece 'process', 'require', etc.)
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
    // Pastas e arquivos que o ESLint deve ignorar
    ignores: [
      "dist/",
      "node_modules/",
      "generated/"
    ],
    // Suas regras personalizadas
    rules: {
      "@typescript-eslint/no-explicit-any": "warn", // Avisa ao usar 'any'
      "@typescript-eslint/no-unused-vars": ["error", { "argsIgnorePattern": "^_" }], // Ignora variáveis não usadas se começarem com '_' (ex: _request)
      "no-console": "off" // Permite usar console.log livremente no backend
    }
  }
);