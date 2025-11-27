# 🕰️ Máquina do Tempo da História - Projeto Angular para Anthony

Um projeto Angular lúdico e interativo para ensinar História de forma divertida para crianças de 7 anos.

## 📋 Sobre o Projeto

Este projeto foi criado especialmente para o Anthony, transformando o aprendizado de História em uma aventura interativa através do tempo usando Angular!

## 🌐 Publicar o Site

O projeto está configurado para ser publicado no **Netlify** (recomendado) ou no **GitHub Pages**!

### 🚀 Opção 1: Netlify (Recomendado - Mais Fácil)

**Vantagens:**
- ✅ Deploy automático via GitHub
- ✅ HTTPS gratuito
- ✅ CDN global (rápido em qualquer lugar)
- ✅ Domínio gratuito (ex: `seu-app-123.netlify.app`)
- ✅ Sem limite de tráfego

**Como fazer:**

1. **Faça o build de produção:**
   ```bash
   npm run build:prod
   ```

2. **Acesse:** https://app.netlify.com
   - Crie conta gratuita (pode usar GitHub)

3. **Faça o deploy:**
   - Arraste a pasta `dist/maquina-tempo-historia` para a área de deploy
   - Ou conecte com GitHub para deploy automático (recomendado!)

4. **Pronto!** Você receberá um link tipo: `https://seu-app-123.netlify.app`

**✅ Deploy Automático (Já Configurado):**
- Se você conectou o Netlify ao GitHub, cada `git push` para `main` faz deploy automático
- Não precisa fazer nada manualmente!
- Seu site atualiza automaticamente em alguns segundos após cada commit

### 📦 Opção 2: GitHub Pages

**URL do site:** https://drubervany.github.io/guardiao_tempo/

O deploy é automático sempre que você fizer push na branch `main`. O GitHub Actions irá:
1. Fazer build do projeto Angular
2. Publicar automaticamente no GitHub Pages

## 🚀 Como Instalar e Executar Localmente

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm (vem com Node.js)

### Instalação

1. **Instalar as dependências:**
```bash
npm install
```

2. **Iniciar o servidor de desenvolvimento:**
```bash
npm start
```

3. **Abrir no navegador:**
O projeto estará disponível em `http://localhost:4200`

### Build para Produção

```bash
npm run build:prod
```

Os arquivos compilados estarão na pasta `dist/maquina-tempo-historia`

**Para GitHub Pages:**
```bash
npm run build:prod -- --base-href /guardiao_tempo/
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── components/
│   │   ├── home/              # Página inicial
│   │   ├── missions/          # Lista de missões
│   │   └── mission-detail/   # Detalhe de cada missão
│   ├── models/
│   │   └── mission.model.ts  # Interfaces TypeScript
│   ├── services/
│   │   └── missions.service.ts # Serviço de gerenciamento de missões
│   ├── app.component.ts       # Componente raiz
│   └── app.module.ts          # Módulo principal
├── assets/
│   ├── imagens_livro/         # Imagens do livro (12 imagens)
│   └── caderno_mais_4/        # Imagens do caderno (4 imagens)
└── styles.css                 # Estilos globais
```

## 🎯 Funcionalidades

- ✅ Página inicial com animação da máquina do tempo
- ✅ Lista de missões com sistema de desbloqueio progressivo
- ✅ Detalhes de cada missão com:
  - 👀 Seção de observação guiada
  - 📖 Explicação em linguagem de criança
  - 🎮 Atividades interativas (múltipla escolha e verdadeiro/falso)
  - 🎉 Mensagem de sucesso ao completar
- ✅ Navegação fluida entre páginas
- ✅ Design responsivo e lúdico

## 📸 Imagens

**Imagens do Livro:**
- `src/assets/imagens_livro/` - 12 imagens (IMG-20251126-WA0012.jpg até IMG-20251126-WA0023.jpg)

**Imagens do Caderno Mais 4:**
- `src/assets/caderno_mais_4/` - 4 imagens (IMG-20251126-WA0024.jpg até IMG-20251126-WA0027.jpg)

**Aguardando:**
- ⏳ Anexos da pasta de atividades

## ✏️ Personalizando as Missões

Para adicionar ou modificar missões, edite o arquivo `src/app/services/missions.service.ts`.

Cada missão contém:
- `id`: Número da missão
- `title`: Título da missão
- `icon`: Emoji para o card
- `image`: Caminho da imagem (relativo a `src/assets/`)
- `observationQuestions`: Array com perguntas de observação
- `explanation`: Texto explicativo (em linguagem de criança)
- `activities`: Array com atividades interativas
- `successMessage`: Mensagem de parabéns ao completar

### Tipos de Atividades

**1. Múltipla Escolha:**
```typescript
{
  type: "multiple-choice",
  question: "Sua pergunta aqui?",
  options: [
    { text: "Opção 1", correct: true },
    { text: "Opção 2", correct: false }
  ]
}
```

**2. Verdadeiro ou Falso:**
```typescript
{
  type: "true-false",
  question: "Sua afirmação aqui.",
  correct: true // ou false
}
```

## 🎨 Características do Design

- Cores vibrantes e amigáveis
- Fonte Comic Sans para um visual lúdico
- Animações suaves
- Interface responsiva (funciona em tablets e computadores)
- Feedback visual imediato nas respostas

## 📝 Próximos Passos

Quando você tiver os anexos da pasta de atividades:
1. Adicione as imagens na pasta `src/assets/anexos/`
2. Crie novas missões ou atividades extras no `missions.service.ts`
3. Ou adicione como atividades bônus nas missões existentes

## 🛠️ Tecnologias Utilizadas

- Angular 17
- TypeScript
- CSS3 (com animações)
- RxJS

## 💡 Dicas

- Mantenha os textos simples e diretos (linguagem de 7 anos)
- Use emojis para tornar mais visual e divertido
- Cada missão deve ter no máximo 2-3 atividades para não cansar
- As perguntas devem ser objetivas e claras

---

**Divirta-se explorando a História, Anthony! 🎉**
