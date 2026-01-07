🚀 Tecnologias Utilizadas
O projeto foi construído sobre uma stack robusta:

Framework: Next.js 15.2 (App Router)

Biblioteca UI: React 19

Estilização: Tailwind CSS v4

Componentes: shadcn/ui (baseado em Radix UI)

Ícones: Lucide React

Validação de Formulários: React Hook Form + Zod

Animações: Tailwind Animate & CSS Transitions

📋 Pré-requisitos
Antes de começar, certifique-se de ter instalado em sua máquina:

Node.js: Versão 18.17 ou superior (Recomendado: v20+ para Next.js 15).

pnpm: O projeto utiliza pnpm para gerenciamento de pacotes (devido à presença do pnpm-lock.yaml).

Se não tiver o pnpm instalado, você pode ativá-lo via Corepack ou instalar globalmente:

Bash

npm install -g pnpm
🔧 Instalação e Configuração
Siga os passos abaixo para rodar o projeto localmente:

1. Clonar o repositório
Bash

git clone <url-do-seu-repositorio>
cd saudeja
2. Instalar as dependências
Como o arquivo package.json já contém todas as bibliotecas necessárias (incluindo as dependências do shadcn/ui e Tailwind), basta rodar:

Bash

pnpm install
(Se estiver usando npm ou yarn, os comandos são npm install ou yarn install, mas o pnpm é recomendado para respeitar o lockfile).

3. Rodar o servidor de desenvolvimento
Para iniciar o projeto em modo de desenvolvimento:

Bash

pnpm dev
Abra http://localhost:3000 no seu navegador para ver o resultado.

📦 Especificações das Bibliotecas
O comando de instalação acima já cuida de tudo, mas aqui está o detalhamento das principais bibliotecas incluídas no package.json para seu conhecimento:

UI e Componentes (Radix & Shadcn)
O projeto faz uso intensivo de primitivos do Radix UI para acessibilidade:

@radix-ui/react-dialog: Para os modais dos especialistas.

@radix-ui/react-accordion, @radix-ui/react-dropdown-menu, etc.: Componentes de interface.

class-variance-authority (CVA), clsx, tailwind-merge: Utilitários para gerenciar classes CSS condicionais.

Funcionalidades
lucide-react: Biblioteca de ícones (usada para os ícones médicos, menu, etc.).

react-hook-form & zod: Pronta para criação de formulários complexos (ex: agendamento).

embla-carousel-react: Para carrosséis (sliders).

sonner: Para notificações tipo "toast".

date-fns: Para manipulação de datas.

Desenvolvimento (DevDependencies)
tailwindcss (v4) & @tailwindcss/postcss: Motor de estilização.

typescript: Linguagem utilizada no projeto.

🏗️ Estrutura do Projeto
app/page.tsx: A página principal (Landing Page) contendo todas as seções (Hero, Especialidades, Especialistas, Contato).

components/ui/: Contém os componentes reutilizáveis (Botões, Cards, Dialogs) do design system.

public/: Imagens estáticas (logos, fotos dos médicos).

🚀 Build para Produção
Para criar uma versão otimizada para produção:

Bash

pnpm build
E para rodar a versão de produção localmente:

Bash

pnpm start
🎨 Personalização
Para alterar as cores principais do tema (como o verde #61B097 e azul #61A0B0), verifique o arquivo app/globals.css (variáveis CSS) ou procure pelas classes utilitárias diretamente no app/page.tsx.
