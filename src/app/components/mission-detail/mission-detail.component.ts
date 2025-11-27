import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MissionsService } from '../../services/missions.service';
import { GameService } from '../../services/game.service';
import { MissionRewardsService } from '../../services/mission-rewards.service';
import { Mission, Activity } from '../../models/mission.model';

@Component({
  selector: 'app-mission-detail',
  templateUrl: './mission-detail.component.html',
  styleUrls: ['./mission-detail.component.css']
})
export class MissionDetailComponent implements OnInit {
  mission: Mission | undefined;
  allActivitiesCompleted = false;
  showOriginalImage = false; // Para mostrar/esconder imagem quando clicar no ícone
  selectedMatches: { [key: string]: string } = {}; // Para atividade de match
  selectedImageForMatch: { [activityIndex: number]: string | null } = {}; // Imagem selecionada para match
  shuffledMatchPairs: { [activityIndex: number]: { images: any[], texts: any[] } } = {}; // Arrays embaralhados para match
  shuffledOptions: { [activityIndex: number]: any[] } = {}; // Opções embaralhadas para múltipla escolha
  environmentAnswers: { [key: number]: boolean | null } = {}; // Para fiscal do meio ambiente
  
  // Sistema de jogo
  correctAnswers = 0;
  totalQuestions = 0;
  wrongAnswers = 0;
  showBonusChallenge = false;
  bonusChallengeCompleted = false;
  completedActivities: boolean[] = []; // Rastrear atividades completadas corretamente
  bonusAnswerSelected: string | null = null; // Resposta selecionada no desafio bônus
  showHeartAnimation = false; // Mostrar animação de coração recuperado
  showFinalCard = false; // Mostrar card de conclusão de todas as missões
  showCoinsLossCard = false; // Mostrar card de perda de moedas
  coinsLost = 0; // Quantidade de moedas perdidas

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private missionsService: MissionsService,
    public gameService: GameService, // Tornar público para usar no template
    private rewardsService: MissionRewardsService
  ) {}

  ngOnInit(): void {
    // Usar subscribe para detectar mudanças nos parâmetros da rota
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.loadMission(id);
    });

    // Escutar mudanças nas vidas do jogador para fechar o popup do bônus quando recuperar vida
    this.gameService.player$.subscribe(player => {
      // Se o popup do bônus está aberto e o jogador recuperou uma vida (não está mais em 0)
      if (this.showBonusChallenge && !this.bonusChallengeCompleted && player.hearts > 0) {
        // Fechar o popup do bônus e reabilitar atividades
        this.bonusChallengeCompleted = true;
        this.showBonusChallenge = false;
        this.enableAllActivities();
      }
    });
  }

  loadMission(id: number): void {
    this.mission = this.missionsService.getMissionById(id);
    this.allActivitiesCompleted = false; // Reset do estado
    // Se tem texto ou textImages, esconder imagem original por padrão; se não tem, mostrar imagem
    this.showOriginalImage = !(this.mission?.textContent || this.mission?.textImages);
    this.selectedMatches = {}; // Reset matches
    this.selectedImageForMatch = {}; // Reset imagem selecionada
    this.environmentAnswers = {}; // Reset environment answers
    this.shuffledMatchPairs = {}; // Reset arrays embaralhados
    this.shuffledOptions = {}; // Reset opções embaralhadas
    
    // Embaralhar atividades se existirem
    if (this.mission) {
      this.mission.activities.forEach((activity, activityIndex) => {
        if (activity.type === 'match' && activity.matchPairs) {
          this.shuffleMatchPairs(activityIndex, activity.matchPairs);
        } else if (activity.type === 'multiple-choice' && activity.options) {
          this.shuffleOptions(activityIndex, activity.options);
        }
      });
    }
    this.correctAnswers = 0; // Reset contadores
    // Calcular total de perguntas: para match, contar cada par; para outras, contar como 1
    this.totalQuestions = 0;
    if (this.mission) {
      this.mission.activities.forEach(activity => {
        if (activity.type === 'match' && activity.matchPairs) {
          this.totalQuestions += activity.matchPairs.length;
        } else {
          this.totalQuestions += 1;
        }
      });
    }
    this.wrongAnswers = 0;
    this.showBonusChallenge = false;
    this.bonusChallengeCompleted = false;
    this.bonusAnswerSelected = null;
    this.showHeartAnimation = false;
    this.showCoinsLossCard = false;
    this.coinsLost = 0;
    this.completedActivities = new Array(this.totalQuestions).fill(false); // Reset atividades completadas
    
    if (!this.mission) {
      this.router.navigate(['/missions']);
      return;
    }
    
    // Resetar estilos dos botões quando carregar nova missão
    setTimeout(() => {
      const buttons = document.querySelectorAll('.activity-item .option-btn');
      buttons.forEach((btn: any) => {
        btn.disabled = false;
        btn.classList.remove('correct', 'incorrect', 'selected');
      });
      
      // Esconder seção de sucesso
      const successSection = document.getElementById('success-section');
      if (successSection) {
        successSection.style.display = 'none';
      }
    }, 100);
  }

  toggleOriginalImage(): void {
    this.showOriginalImage = !this.showOriginalImage;
  }

  getTextParagraphs(): string[] {
    if (!this.mission || !this.mission.textContent) {
      return [];
    }
    return this.mission.textContent.split('\n').filter(p => p.trim());
  }

  hasImagesInOptions(activity: Activity): boolean {
    return activity.options?.some(opt => !!opt.image) || false;
  }

  goBack(): void {
    this.router.navigate(['/missions']);
  }

  checkAnswer(activityIndex: number, optionIndex: number, isCorrect: boolean, option?: any): void {
    if (!this.mission) return;
    
    // Verificar se tem vidas antes de responder
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    // Se o desafio bônus está ativo e não foi completado, não permitir responder
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    
    const activity = this.mission.activities[activityIndex];
    // Usar opções embaralhadas se existirem, senão usar as originais
    const options = this.shuffledOptions[activityIndex] || activity.options || [];
    const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`) as NodeListOf<HTMLElement>;
    
    // Se permite múltiplas respostas, não desabilita os botões imediatamente
    if (activity.allowMultiple) {
      const clickedBtn = buttons[optionIndex];
      const wasSelected = clickedBtn.classList.contains('selected');
      
      if (wasSelected) {
        // Se já estava selecionado, desmarca
        clickedBtn.classList.remove('selected', isCorrect ? 'correct' : 'incorrect');
      } else {
        // Marca como selecionado
        clickedBtn.classList.add('selected');
        clickedBtn.classList.add(isCorrect ? 'correct' : 'incorrect');
        
        // Se selecionou uma resposta incorreta, perde uma vida
        if (!isCorrect) {
          this.wrongAnswers++;
          this.gameService.loseHeart();
          // Verificar se perdeu todas as vidas e mostrar desafio bônus imediatamente
          this.checkForBonusChallenge();
        }
      }
      
      // Verifica se todas as respostas corretas foram selecionadas E nenhuma incorreta foi selecionada
      const allCorrectSelected = options.every((opt: any, idx: number) => {
        if (opt.correct) {
          return buttons[idx].classList.contains('selected');
        }
        return true;
      });
      
      const noIncorrectSelected = options.every((opt: any, idx: number) => {
        if (!opt.correct) {
          return !buttons[idx].classList.contains('selected');
        }
        return true;
      });
      
      const activityCorrect = allCorrectSelected && noIncorrectSelected;
      
      // Se todas as corretas foram selecionadas e nenhuma incorreta, marca atividade como completa
      if (allCorrectSelected && activityCorrect && !this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = true;
        this.correctAnswers++;
        buttons.forEach((btn: any) => {
          btn.disabled = true;
          // Marca incorretas como incorretas se não foram selecionadas
          options.forEach((opt: any, idx: number) => {
            if (!opt.correct && !buttons[idx].classList.contains('selected')) {
              buttons[idx].classList.add('incorrect');
            }
          });
        });
        this.checkAllActivitiesCompleted();
      } else if (!activityCorrect && this.completedActivities[activityIndex]) {
        // Se estava completa mas agora não está mais (desmarcou algo), remove o acerto
        this.completedActivities[activityIndex] = false;
        this.correctAnswers--;
      } else if (activityCorrect) {
        // Se está correta mas ainda não foi marcada como completa, verificar novamente
        this.checkAllActivitiesCompleted();
      }
    } else {
      // Comportamento original para escolha única
      buttons.forEach((btn: any, index: number) => {
        btn.disabled = true;
        const currentOption = options[index];
        
        if (index === optionIndex) {
          // Botão clicado
          btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (isCorrect) {
          // Se acertou, marcar todas as opções corretas como corretas
          if (currentOption && currentOption.correct) {
            btn.classList.add('correct');
          }
        }
      });
      
      // Marca atividade como completa se acertou
      if (isCorrect && !this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = true;
        this.correctAnswers++;
      } else if (!isCorrect) {
        this.wrongAnswers++;
        this.gameService.loseHeart();
        // Verificar se perdeu todas as vidas e mostrar desafio bônus imediatamente
        this.checkForBonusChallenge();
      }
      
      this.checkAllActivitiesCompleted();
    }
  }
  
  checkForBonusChallenge(): void {
    // Verificar se perdeu todas as vidas e pode fazer desafio bônus
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      // Se o bônus ainda não está sendo mostrado, mostrar agora
      if (!this.showBonusChallenge) {
        this.showBonusChallenge = true;
        // Desabilitar todas as atividades
        this.disableAllActivities();
        // Esconder mensagem de sucesso se estiver visível
        const successSection = document.getElementById('success-section');
        if (successSection) {
          successSection.style.display = 'none';
        }
        // Scroll para o topo para ver o popup
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      // Se o bônus já está sendo mostrado, garantir que continue visível
      // (útil caso o popup tenha sido fechado acidentalmente ou por algum bug)
    }
  }
  
  closeBonusPopup(): void {
    // Não permitir fechar o popup sem completar o desafio
    // O popup só fecha quando o desafio é completado
  }
  
  disableAllActivities(): void {
    if (!this.mission) return;
    
    // Desabilitar todos os botões de atividades
    this.mission.activities.forEach((activity, activityIndex) => {
      const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`);
      buttons.forEach((btn: any) => {
        if (!btn.disabled || !btn.classList.contains('correct')) {
          btn.disabled = true;
          btn.style.opacity = '0.5';
          btn.style.cursor = 'not-allowed';
        }
      });
    });
  }
  
  enableAllActivities(): void {
    if (!this.mission) return;
    
    // Reabilitar todos os botões de atividades que não foram completadas
    this.mission.activities.forEach((activity, activityIndex) => {
      if (!this.completedActivities[activityIndex]) {
        const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`);
        buttons.forEach((btn: any) => {
          if (!btn.classList.contains('correct')) {
            btn.disabled = false;
            btn.style.opacity = '1';
            btn.style.cursor = 'pointer';
          }
        });
      }
    });
  }

  checkTrueFalse(activityIndex: number, userAnswer: boolean, isCorrect: boolean): void {
    if (!this.mission) return;
    
    // Verificar se tem vidas antes de responder
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    // Se o desafio bônus está ativo e não foi completado, não permitir responder
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    
    // Registrar resposta
    const isActivityCorrect = isCorrect === userAnswer;
    if (isActivityCorrect && !this.completedActivities[activityIndex]) {
      this.completedActivities[activityIndex] = true;
      this.correctAnswers++;
    } else if (!isActivityCorrect) {
      this.wrongAnswers++;
      this.gameService.loseHeart();
      // Verificar se perdeu todas as vidas e mostrar desafio bônus imediatamente
      this.checkForBonusChallenge();
    }
    
    const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`);
    buttons.forEach((btn: any) => {
      btn.disabled = true;
      const isTrueBtn = btn.textContent.includes('Verdadeiro');
      if ((isTrueBtn && userAnswer) || (!isTrueBtn && !userAnswer)) {
        btn.classList.add(isCorrect ? 'correct' : 'incorrect');
      } else {
        btn.classList.add(!isCorrect ? 'correct' : 'incorrect');
      }
    });
    
    this.checkAllActivitiesCompleted();
  }

  checkAllActivitiesCompleted(): void {
    if (!this.mission) return;
    
    let allCompleted = true;
    
    // Verificar cada atividade
    this.mission.activities.forEach((activity, activityIndex) => {
      if (activity.type === 'multiple-choice' || activity.type === 'true-false') {
        // Para múltipla escolha, verificar se a atividade foi marcada como completa
        if (activity.allowMultiple) {
          if (!this.completedActivities[activityIndex]) {
            allCompleted = false;
          }
        } else {
          // Para escolha única, verificar se os botões estão desabilitados
          const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`);
          const allDisabled = Array.from(buttons).every((btn: any) => btn.disabled);
          if (!allDisabled) {
            allCompleted = false;
          }
        }
      } else if (activity.type === 'match') {
        // Verificar se todos os matches foram feitos
        if (activity.matchPairs) {
          const allMatched = activity.matchPairs.every((pair, idx) => {
            const key = `${activityIndex}-${pair.matchId}`;
            return this.selectedMatches[key] === pair.description;
          });
          if (!allMatched) {
            allCompleted = false;
          }
        }
      } else if (activity.type === 'environment-check') {
        // Verificar se todas as imagens foram avaliadas
        if (activity.environmentImages) {
          const allAnswered = activity.environmentImages.every((_, idx) => {
            return this.environmentAnswers[idx] !== null && this.environmentAnswers[idx] !== undefined;
          });
          if (!allAnswered) {
            allCompleted = false;
          }
        }
      }
    });
    
    if (allCompleted && !this.allActivitiesCompleted) {
      this.allActivitiesCompleted = true;
      // Verificar se há desafio bônus pendente antes de mostrar sucesso
      const player = this.gameService.getPlayer();
      if (player.hearts === 0 && !this.bonusChallengeCompleted) {
        // Se não tem vidas e o desafio bônus não foi completado, não mostrar sucesso ainda
        this.checkForBonusChallenge();
        return;
      }
      setTimeout(() => {
        this.showSuccessMessage();
      }, 1000);
    }
  }

  showSuccessMessage(): void {
    if (this.mission) {
      // Não mostrar mensagem de sucesso se o desafio bônus estiver ativo e não foi completado
      if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
        return;
      }
      
      this.missionsService.markMissionAsCompleted(this.mission.id);
      
      // Processar recompensas do jogo
      const reward = this.rewardsService.getReward(this.mission.id);
      if (reward) {
        const success = this.gameService.completeMission(reward, this.correctAnswers, this.totalQuestions);
      }
      
      const successSection = document.getElementById('success-section');
      if (successSection) {
        successSection.style.display = 'block';
        successSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  selectBonusAnswer(answer: string): void {
    this.bonusAnswerSelected = answer;
  }

  completeBonusChallenge(): void {
    if (!this.mission || !this.bonusAnswerSelected) return;
    
    // Verificar se a resposta está correta
    let correctAnswer: string;
    if (this.mission.bonusQuestion) {
      // Se tem pergunta bônus específica, usar a resposta correta definida
      correctAnswer = this.mission.bonusCorrectAnswer || "Sim";
    } else {
      // Se não tem pergunta específica, usar a resposta padrão da pergunta sobre comunidade
      correctAnswer = "Um conjunto de pessoas que compartilham um espaço";
    }
    
    const isCorrect = this.bonusAnswerSelected === correctAnswer;
    
    if (isCorrect) {
      // Recuperar vida - sempre deve recuperar quando acerta o bônus
      // A função recoverHeart() já verifica se pode recuperar (não excede maxHearts)
      this.gameService.recoverHeart();
      
      // Marcar bônus como completo e fechar popup
      this.bonusChallengeCompleted = true;
      this.showBonusChallenge = false;
      
      // Reabilitar todas as atividades
      this.enableAllActivities();
      
      // Mostrar animação de coração recuperado
      this.showHeartAnimation = true;
      setTimeout(() => {
        this.showHeartAnimation = false;
        // Verificar se todas as atividades já estavam completas antes do desafio bônus
        // Se sim, mostrar mensagem de sucesso
        if (this.allActivitiesCompleted) {
          this.showSuccessMessage();
        } else {
          // Verificar novamente se todas estão completas agora
          this.checkAllActivitiesCompleted();
        }
      }, 3000); // Animação dura 3 segundos
    } else {
      // Resposta incorreta: descontar 3 moedas por vida perdida
      const player = this.gameService.getPlayer();
      const livesLost = player.maxHearts - player.hearts; // Vidas perdidas
      const coinsToDeduct = livesLost * 3; // 3 moedas por vida perdida
      
      if (coinsToDeduct > 0) {
        this.coinsLost = coinsToDeduct;
        this.gameService.removeCoins(coinsToDeduct);
        // Mostrar card lúdico de perda de moedas
        this.showCoinsLossCard = true;
        // Fechar o card após 3 segundos
        setTimeout(() => {
          this.showCoinsLossCard = false;
        }, 3000);
      }
      
      // Reset para tentar novamente - manter o popup aberto
      this.bonusAnswerSelected = null;
      // Garantir que o popup continue visível
      this.showBonusChallenge = true;
      // Garantir que as atividades continuem desabilitadas
      this.disableAllActivities();
      // Scroll para o topo para ver o popup novamente
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  nextMission(): void {
    if (!this.mission) return;
    
    const nextId = this.mission.id + 1;
    const nextMission = this.missionsService.getMissionById(nextId);
    
    if (nextMission) {
      // Sempre permitir ir para a próxima missão se ela existir
      // O sistema de desbloqueio é apenas para a lista de missões
      this.router.navigate(['/mission', nextId]).then(() => {
        // Scroll para o topo da página
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    } else {
      // Todas as missões foram completadas - mostrar card final
      this.showFinalCard = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  closeFinalCard(): void {
    this.showFinalCard = false;
    this.router.navigate(['/missions']);
  }

  // Embaralhar opções de múltipla escolha
  shuffleOptions(activityIndex: number, options: any[]): void {
    // Função para embaralhar array (Fisher-Yates shuffle)
    const shuffle = (array: any[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    // Embaralhar opções
    this.shuffledOptions[activityIndex] = shuffle(options);
  }

  // Embaralhar arrays de match pairs
  shuffleMatchPairs(activityIndex: number, matchPairs: any[]): void {
    // Criar cópias dos arrays para embaralhar
    const images = [...matchPairs];
    const texts = [...matchPairs];
    
    // Função para embaralhar array (Fisher-Yates shuffle)
    const shuffle = (array: any[]) => {
      const shuffled = [...array];
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };
    
    // Embaralhar imagens e textos separadamente
    this.shuffledMatchPairs[activityIndex] = {
      images: shuffle(images),
      texts: shuffle(texts)
    };
  }

  // Selecionar imagem para match
  selectImageForMatch(activityIndex: number, imageId: string): void {
    if (!this.mission) return;
    
    // Verificar se tem vidas antes de responder
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    // Se o desafio bônus está ativo e não foi completado, não permitir responder
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    
    // Se já está selecionada, desmarca
    if (this.selectedImageForMatch[activityIndex] === imageId) {
      this.selectedImageForMatch[activityIndex] = null;
    } else {
      // Seleciona a nova imagem
      this.selectedImageForMatch[activityIndex] = imageId;
    }
  }

  // Selecionar texto para fazer match com a imagem selecionada
  selectMatch(activityIndex: number, imageId: string, description: string): void {
    if (!this.mission) return;
    
    // Verificar se tem vidas antes de responder
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    // Se o desafio bônus está ativo e não foi completado, não permitir responder
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    
    // Se não tem imagem selecionada, não faz nada
    if (!this.selectedImageForMatch[activityIndex]) {
      return;
    }
    
    const selectedImageId = this.selectedImageForMatch[activityIndex];
    const key = `${activityIndex}-${selectedImageId}`;
    
    // Verificar se a correspondência está correta
    const activity = this.mission.activities[activityIndex];
    if (activity.matchPairs) {
      const correctPair = activity.matchPairs.find(pair => pair.matchId === selectedImageId);
      const isCorrect = correctPair && correctPair.description === description;
      
      if (isCorrect) {
        // Match correto - verificar se já estava marcado para não contar duplicado
        const wasAlreadyMatched = this.selectedMatches[key] !== undefined;
        this.selectedMatches[key] = description;
        
        // Só incrementa se não estava marcado antes
        if (!wasAlreadyMatched) {
          this.correctAnswers++;
        }
        
        // Desmarca a imagem selecionada
        this.selectedImageForMatch[activityIndex] = null;
      } else {
        // Match incorreto - perde uma vida
        this.wrongAnswers++;
        this.gameService.loseHeart();
        this.checkForBonusChallenge();
        // Desmarca a imagem selecionada para tentar novamente
        this.selectedImageForMatch[activityIndex] = null;
      }
      
      // Verificar se todas as correspondências estão corretas
      const allCorrect = activity.matchPairs.every(pair => {
        const matchKey = `${activityIndex}-${pair.matchId}`;
        return this.selectedMatches[matchKey] === pair.description;
      });
      
      const allMatched = activity.matchPairs.every(pair => {
        const matchKey = `${activityIndex}-${pair.matchId}`;
        return this.selectedMatches[matchKey] !== undefined;
      });
      
      // Marcar atividade como completa quando todas as correspondências estiverem corretas
      if (allCorrect && allMatched && !this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = true;
        this.checkAllActivitiesCompleted();
      } else if ((!allCorrect || !allMatched) && this.completedActivities[activityIndex]) {
        // Se estava completa mas agora não está mais, remove o status de completa
        this.completedActivities[activityIndex] = false;
      }
    }
  }

  // Função para fiscal do meio ambiente
  checkEnvironment(activityIndex: number, imageIndex: number, hasProblem: boolean): void {
    if (!this.mission) return;
    
    // Verificar se tem vidas antes de responder
    const player = this.gameService.getPlayer();
    if (player.hearts === 0 && !this.bonusChallengeCompleted) {
      this.checkForBonusChallenge();
      return;
    }
    
    // Se o desafio bônus está ativo e não foi completado, não permitir responder
    if (this.showBonusChallenge && !this.bonusChallengeCompleted) {
      return;
    }
    const activity = this.mission.activities[activityIndex];
    if (activity.type === 'environment-check' && activity.environmentImages) {
      // Armazenar a resposta do usuário (true = tem problema, false = não tem problema)
      this.environmentAnswers[imageIndex] = hasProblem;
      
      const correct = activity.environmentImages[imageIndex].hasProblem === hasProblem;
      
      // Verificar se todas as imagens foram respondidas
      const allAnswered = activity.environmentImages.every((img, idx) => {
        return this.environmentAnswers[idx] !== null && this.environmentAnswers[idx] !== undefined;
      });
      
      // Verificar se todas as respostas estão corretas
      let allImagesCorrect = true;
      for (let i = 0; i < activity.environmentImages.length; i++) {
        const img = activity.environmentImages[i];
        const userAnswer = this.environmentAnswers[i];
        if (userAnswer === null || userAnswer === undefined) {
          allImagesCorrect = false;
          break;
        }
        // A resposta está correta se o usuário marcou "tem problema" quando realmente tem, ou "não tem" quando não tem
        if (userAnswer !== img.hasProblem) {
          allImagesCorrect = false;
          break;
        }
      }
      
      if (allImagesCorrect && allAnswered && !this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = true;
        this.correctAnswers++;
        this.checkAllActivitiesCompleted();
      } else if ((!allImagesCorrect || !allAnswered) && this.completedActivities[activityIndex]) {
        this.completedActivities[activityIndex] = false;
        this.correctAnswers--;
      } else if (!correct) {
        this.wrongAnswers++;
        this.gameService.loseHeart();
        // Verificar se perdeu todas as vidas e mostrar desafio bônus imediatamente
        this.checkForBonusChallenge();
      }
    }
  }

  isEnvironmentCorrect(imageIndex: number): boolean | null {
    return this.environmentAnswers[imageIndex] ?? null;
  }

  getCurrentHeartsArray(): boolean[] {
    const player = this.gameService.getPlayer();
    return Array(player.maxHearts).fill(false).map((_, i) => i < player.hearts);
  }
}

