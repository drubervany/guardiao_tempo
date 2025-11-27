export interface ActivityOption {
  text: string;
  correct: boolean;
  image?: string; // Imagem opcional para a opção
}

export interface MatchPair {
  image: string;
  description: string;
  matchId: string;
}

export interface Activity {
  type: 'multiple-choice' | 'true-false' | 'match' | 'environment-check';
  question: string;
  options?: ActivityOption[];
  correct?: boolean;
  allowMultiple?: boolean; // Permite múltiplas respostas corretas
  matchPairs?: MatchPair[]; // Para atividade de ligar colunas
  environmentImages?: { image: string; hasProblem: boolean; problemDescription?: string }[]; // Para fiscal do meio ambiente
}

export interface Mission {
  id: number;
  title: string;
  icon: string;
  image: string;
  observationQuestions: string[];
  explanation: string;
  activities: Activity[];
  successMessage: string;
  completed?: boolean;
  textContent?: string; // Texto para mostrar no lugar da imagem
  textTitle?: string; // Título do texto
  showImageIcon?: boolean; // Mostrar ícone para visualizar imagem original
  textImages?: string[]; // Imagens para mostrar no texto (lado a lado)
  textImageTitles?: string[]; // Títulos para cada imagem
  bonusQuestion?: string; // Pergunta bônus quando perde todas as vidas
  bonusCorrectAnswer?: string; // Resposta correta da pergunta bônus
}

