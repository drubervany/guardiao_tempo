# 🚀 Instruções Rápidas - Projeto Angular

## ⚡ Início Rápido

### 1. Instalar Dependências
```bash
npm install
```

### 2. Iniciar o Projeto
```bash
npm start
```

O projeto abrirá automaticamente em: `http://localhost:4200`

## 📁 Estrutura Criada

✅ **12 Missões criadas** baseadas nas imagens do livro:
- Missão 1: O que é uma Comunidade?
- Missão 2: O Trabalho no Bairro
- Missão 3: Histórias para Contar - Bancas de Jornal
- Missão 4: Profissionais do Bairro
- Missão 5: O que é Comunidade?
- Missão 6: Todo Mundo tem História - O Jornal
- Missão 7: O Bairro Muda e o Trabalho Também
- Missão 8: Para Organizar o Pensamento
- Missão 9: Cuidar do Meio Ambiente
- Missão 10: Limpeza nos Bairros
- Missão 11: Ambientalistas e Chico Mendes
- Missão 12: A Aventura da Reciclagem

## 📸 Imagens

✅ Todas as 12 imagens do livro foram copiadas para:
`src/assets/imagens_livro/`

⏳ **Aguardando:** 4 imagens do caderno (quando você tiver, adicione na mesma pasta e crie novas missões)

## 🎮 Como Funciona

1. **Página Inicial:** Animação da máquina do tempo
2. **Lista de Missões:** Cards com sistema de desbloqueio progressivo
3. **Cada Missão tem:**
   - 👀 Seção de observação guiada
   - 📖 Explicação em linguagem de criança
   - 🎮 Atividades interativas (múltipla escolha e verdadeiro/falso)
   - 🎉 Mensagem de sucesso

## ✏️ Adicionar Novas Missões

Edite o arquivo: `src/app/services/missions.service.ts`

Adicione um novo objeto no array `missions` seguindo o padrão das missões existentes.

## 🎨 Personalizar

- **Cores e estilos:** Edite `src/styles.css` e os arquivos `.css` dos componentes
- **Textos:** Edite `src/app/services/missions.service.ts`
- **Imagens:** Adicione em `src/assets/imagens_livro/`

## 🐛 Problemas Comuns

**Erro ao instalar:**
- Verifique se tem Node.js instalado: `node --version`
- Use Node.js 18 ou superior

**Imagens não aparecem:**
- Verifique se as imagens estão em `src/assets/imagens_livro/`
- Verifique os caminhos no `missions.service.ts`

**Erro ao compilar:**
- Delete a pasta `node_modules` e execute `npm install` novamente

## 📝 Próximos Passos

Quando você tiver as 4 imagens do caderno:
1. Adicione as imagens em `src/assets/imagens_livro/`
2. Crie novas missões (13, 14, 15, 16) no `missions.service.ts`
3. Teste cada missão

---

**Divirta-se, Anthony! 🎉**

