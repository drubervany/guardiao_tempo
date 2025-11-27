# 🎮 Sistema de Jogo Roblox - Máquina do Tempo do Bairro

## ✅ Implementado

### 🎯 Sistema de Jogo Completo

1. **GameService** - Gerencia todo o estado do jogador:
   - XP e sistema de níveis (30 XP por nível)
   - Corações (vidas) - começa com 3
   - Moedas
   - Itens desbloqueados
   - Salvamento automático no localStorage

2. **AvatarComponent** - Personagem estilo Roblox:
   - Avatar quadradinho estilo Roblox
   - Itens visuais que aparecem conforme conquistas:
     - 🏘️ Camiseta Comunidade (Missão 1)
     - 🎒 Mochila Ajudante (Missão 2)
     - 📰 Boné Repórter (Missão 3)
     - 👓 Óculos Futuristas (Missão 4)
     - 🌳 Capa Verde Ambientalista (Missão 5)
     - 🧤 Luvas de Limpeza (Missão 6)
     - ⭐ Emblema Fiscal (Missão 13)

3. **HudComponent** - Interface de jogo:
   - ❤️ Corações (vidas)
   - ⭐ Barra de XP e nível
   - 🪙 Moedas

4. **Sistema de Recompensas**:
   - Cada missão dá 10 XP (Missão 13 dá 15 XP)
   - Cada missão dá 5 moedas (Missão 13 dá 10 moedas)
   - Itens são desbloqueados ao completar missões com sucesso

5. **Sistema de Punição**:
   - Cada resposta errada = -1 coração
   - Se ficar sem corações = Desafio Bônus aparece
   - Desafio Bônus = Pergunta fácil para recuperar 1 coração

6. **Layout do Jogo**:
   - Lado esquerdo: Avatar do Anthony
   - Lado direito: Missão atual
   - Topo: HUD com estatísticas

## 🎨 Visual

- Avatar estilo Roblox (quadradinho)
- Cores vibrantes e lúdicas
- Animações suaves
- Responsivo (mobile-friendly)

## 💾 Persistência

- Progresso salvo automaticamente no localStorage
- Ao fechar e abrir, continua de onde parou
- Itens conquistados permanecem salvos

## 🚀 Como Funciona

1. **Iniciar Missão**: Anthony vê o HUD e seu avatar
2. **Responder Perguntas**: 
   - Acertar = ganha pontos
   - Errar = perde coração
3. **Completar Missão**: 
   - Se acertar mínimo necessário = ganha XP, moedas e item
   - Se perder todos corações = aparece desafio bônus
4. **Evoluir**: 
   - Ganha XP → sobe de nível
   - Ganha itens → avatar fica mais "poderoso"
   - No final = Super-herói do Bairro Sustentável! 🦸

## 📊 Recompensas por Missão

| Missão | Tema | Item | XP | Moedas |
|--------|------|------|----|----|
| 1 | Comunidade | Camiseta | 10 | 5 |
| 2 | Trabalho | Mochila | 10 | 5 |
| 3 | Jornal | Boné | 10 | 5 |
| 4 | Profissões | Óculos | 10 | 5 |
| 5 | Meio Ambiente | Capa | 10 | 5 |
| 6 | Reciclagem | Luvas | 10 | 5 |
| 7-12 | Variados | - | 10 | 5 |
| 13 | Fiscal | Emblema | 15 | 10 |

---

**O jogo está completo e funcional! 🎉**

