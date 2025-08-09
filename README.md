# ☕ Cafezão da Computação

Sistema inteligente de café para a comunidade acadêmica, desenvolvido com React Native e Expo.

## 📱 Sobre o App

O **Cafezão da Computação** é uma aplicação móvel que gerencia o sistema de café da comunidade acadêmica, oferecendo controle de créditos, assinaturas, histórico de transações e notificações em tempo real.

### ✨ Funcionalidades Principais

- 🔐 **Autenticação Segura** - Login e registro de usuários
- 💳 **Sistema de Créditos** - Controle de saldo e transações
- 📦 **Assinaturas** - Planos mensais com benefícios
- 📊 **Estatísticas** - Histórico detalhado de consumo
- 🔔 **Notificações** - Alertas em tempo real
- 🔄 **Recuperação de Senha** - Sistema completo via email
- 👨‍💼 **Painel Administrativo** - Controle total para super admins

## 🛠️ Tecnologias Utilizadas

- **React Native** - Framework mobile
- **Expo** - Plataforma de desenvolvimento
- **TypeScript** - Tipagem estática
- **Firebase** - Backend e autenticação
- **Firestore** - Banco de dados
- **Expo Router** - Navegação
- **Linear Gradient** - Efeitos visuais
- **AsyncStorage** - Armazenamento local

## 🚀 Como Executar

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI
- Android Studio (para emulador Android)
- Xcode (para simulador iOS - apenas macOS)

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/cafezao-da-computacao.git
   cd cafezao-da-computacao
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure as variáveis de ambiente**
   ```bash
   # Crie um arquivo .env na raiz do projeto
   cp .env.example .env
   # Edite o arquivo .env com suas configurações
   ```

4. **Inicie o servidor de desenvolvimento**
   ```bash
   npx expo start
   ```

### Opções de Execução

Após executar `npx expo start`, você terá as seguintes opções:

- 📱 **Expo Go** - Teste no seu dispositivo físico
- 🤖 **Android Emulator** - Execute no emulador Android
- 🍎 **iOS Simulator** - Execute no simulador iOS (apenas macOS)
- 🌐 **Web** - Execute no navegador

## 📁 Estrutura do Projeto

```
cafezao-da-computacao/
├── app/                    # Rotas e telas principais
│   ├── (tabs)/            # Telas com tabs
│   ├── acesso/            # Autenticação
│   └── telas_extras/      # Telas administrativas
├── assets/                 # Recursos estáticos
│   ├── images/            # Imagens
│   └── fonts/             # Fontes
├── components/             # Componentes reutilizáveis
├── config/                 # Configurações
├── constants/              # Constantes e cores
├── utils/                  # Utilitários
└── types/                  # Definições de tipos
```

## 🎨 Design System

### Cores Principais
- **Primária**: `#8B4513` (Marrom café)
- **Secundária**: `#4A2C2A` (Marrom escuro)
- **Acento**: `#A0522D` (Marrom claro)
- **Fundo**: `#2C1810` (Marrom muito escuro)

### Componentes
- **CoffeeModal** - Modal personalizado
- **LinearGradient** - Gradientes temáticos
- **Custom Buttons** - Botões com gradientes
- **Status Indicators** - Indicadores de status

## 🔧 Configuração do Build

### Build de Desenvolvimento
```bash
# APK para desenvolvimento
eas build --platform android --profile development
```

### Build de Produção
```bash
# AAB para Google Play Store
eas build --platform android --profile production
```

### Build Local
```bash
# Build local (requer Android SDK)
eas build --platform android --profile local --local
```

## 📱 Funcionalidades Detalhadas

### 🔐 Autenticação
- **Login** - Email e senha
- **Registro** - Criação de conta
- **Recuperação de Senha** - Via email com template HTML
- **Persistência** - Login mantido entre sessões

### 💳 Sistema de Créditos
- **Saldo** - Visualização em tempo real
- **Histórico** - Transações detalhadas
- **Recarregamento** - Adição de créditos
- **Limites** - Controle de consumo diário

### 📦 Assinaturas
- **Planos Mensais** - Benefícios exclusivos
- **Status** - Ativo, inativo, em avaliação
- **Renovação** - Automática ou manual
- **Cancelamento** - Controle total

### 📊 Estatísticas
- **Consumo Diário** - Cafés por dia
- **Histórico Mensal** - Tendências de uso
- **Preferências** - Horários favoritos
- **Gráficos** - Visualizações interativas

### 🔔 Notificações
- **Tempo Real** - Push notifications
- **Filtros** - Por tipo e data
- **Marcação** - Lido/não lido
- **Configurações** - Personalização

### 👨‍💼 Painel Administrativo
- **Super Admin** - Controle total
- **Gestão de Usuários** - CRUD completo
- **Alteração de Senhas** - Modal por etapas
- **Configurações do Sistema** - Parâmetros globais
- **Estatísticas** - Métricas detalhadas

## 🔒 Segurança

### Autenticação
- **Firebase Auth** - Autenticação segura
- **JWT Tokens** - Sessões criptografadas
- **Validação** - Verificação de dados
- **Rate Limiting** - Proteção contra spam

### Dados
- **Firestore** - Banco de dados seguro
- **Regras de Segurança** - Controle de acesso
- **Criptografia** - Dados sensíveis protegidos
- **Backup** - Sincronização automática

## 📧 Sistema de Email

### Recuperação de Senha
- **Template HTML** - Design profissional
- **API Externa** - Envio via serviço dedicado
- **Códigos de Verificação** - 6 dígitos
- **Expiração** - 15 minutos de validade

### Funcionalidades
- **Responsivo** - Funciona em todos os clientes
- **Fallbacks** - Compatibilidade máxima
- **Tracking** - Logs de envio
- **Retry** - Tentativas automáticas

## 🧪 Testes

### Desenvolvimento
```bash
# Testar funcionalidades
npm test

# Testar build
eas build --platform android --profile preview
```

### Qualidade
- **TypeScript** - Tipagem estática
- **ESLint** - Linting de código
- **Prettier** - Formatação automática
- **Husky** - Git hooks

## 📦 Deploy

### Google Play Store
1. **Build de Produção**
   ```bash
   eas build --platform android --profile production
   ```

2. **Upload do AAB**
   - Acesse Google Play Console
   - Faça upload do arquivo `.aab`
   - Configure metadados
   - Publique

### Configurações
- **Version Code**: Incrementado automaticamente
- **Version Name**: Controlado via `app.json`
- **Permissions**: Configuradas no manifesto
- **Signing**: Certificado de produção

## 🤝 Contribuição

### Como Contribuir
1. **Fork** o projeto
2. **Crie** uma branch para sua feature
3. **Commit** suas mudanças
4. **Push** para a branch
5. **Abra** um Pull Request

### Padrões
- **Commits** - Conventional Commits
- **Código** - ESLint + Prettier
- **Testes** - Coverage mínimo 80%
- **Documentação** - README atualizado

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Equipe

- **Desenvolvedor Principal** - [Seu Nome](https://github.com/seu-usuario)
- **Design** - [Designer](https://github.com/designer)
- **QA** - [Tester](https://github.com/tester)

## 📞 Suporte

- **Email**: cafezaocomputacao@gmail.com
- **WhatsApp**: (66) 99908-6599
- **Issues**: [GitHub Issues](https://github.com/seu-usuario/cafezao-da-computacao/issues)

## 🚀 Roadmap

### Versão 1.1
- [ ] Notificações push
- [ ] Modo offline
- [ ] Temas personalizáveis

### Versão 1.2
- [ ] Integração com pagamentos
- [ ] Relatórios avançados
- [ ] API pública

### Versão 2.0
- [ ] Web app
- [ ] Integração com IoT
- [ ] Machine Learning

---

**☕ Cafezão da Computação** - Mantendo a comunidade conectada, um café de cada vez! 🚀
