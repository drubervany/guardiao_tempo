// Dados das Missões (template - será preenchido com as imagens depois)
const missions = [
    {
        id: 1,
        title: "Missão 1: Descobrindo o Passado",
        icon: "🕰️",
        image: "assets/missao1.jpg", // Será substituído pela imagem real
        observationQuestions: [
            "O que você vê nessa figura?",
            "Você acha que isso é de hoje ou de muito tempo atrás?",
            "Quantas pessoas/objetos aparecem aqui?"
        ],
        explanation: `História é tudo aquilo que aconteceu com as pessoas no passado.
        Quando guardamos lembranças, fotos e desenhos, estamos guardando História.
        É como uma grande aventura que aconteceu antes de nós nascermos!`,
        activities: [
            {
                type: "multiple-choice",
                question: "Isso é do passado ou do presente?",
                options: [
                    { text: "Passado 🏛️", correct: true },
                    { text: "Presente 📱", correct: false }
                ]
            },
            {
                type: "true-false",
                question: "As pessoas sempre tiveram celular.",
                correct: false
            }
        ],
        successMessage: "Parabéns, Anthony! Você descobriu que História é tudo que aconteceu no passado! 🎉"
    },
    {
        id: 2,
        title: "Missão 2: Quem viveu antes de nós?",
        icon: "👴",
        image: "assets/missao2.jpg", // Será substituído pela imagem real
        observationQuestions: [
            "Que tipo de pessoas você vê?",
            "Como eram as roupas delas?",
            "O que elas estão fazendo?"
        ],
        explanation: `Muitas pessoas viveram antes de nós! Nossos avós, bisavós e muitas outras pessoas.
        Cada época tinha suas próprias roupas, brinquedos e formas de viver.
        Estudar História é conhecer essas pessoas e como elas viviam!`,
        activities: [
            {
                type: "multiple-choice",
                question: "Nossos avós viveram no passado?",
                options: [
                    { text: "Sim! ✅", correct: true },
                    { text: "Não! ❌", correct: false }
                ]
            }
        ],
        successMessage: "Excelente! Você entendeu que muitas pessoas viveram antes de nós! 🌟"
    }
    // Mais missões serão adicionadas quando as imagens chegarem
];

let currentMissionIndex = 0;

// Navegação entre páginas
function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
        page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
    
    if (pageId === 'missions-page') {
        renderMissions();
    }
}

// Renderizar lista de missões
function renderMissions() {
    const grid = document.getElementById('missions-grid');
    grid.innerHTML = '';
    
    missions.forEach((mission, index) => {
        const card = document.createElement('div');
        card.className = 'mission-card';
        if (index > 0 && !missions[index - 1].completed) {
            card.classList.add('locked');
        }
        
        card.innerHTML = `
            <div class="mission-icon">${mission.icon}</div>
            <div class="mission-card-title">${mission.title}</div>
            <div class="mission-card-subtitle">Clique para começar!</div>
        `;
        
        if (!card.classList.contains('locked')) {
            card.onclick = () => showMissionDetail(index);
        }
        
        grid.appendChild(card);
    });
}

// Mostrar detalhes da missão
function showMissionDetail(index) {
    currentMissionIndex = index;
    const mission = missions[index];
    
    // Atualizar título
    document.getElementById('mission-title').textContent = mission.title;
    
    // Atualizar imagem
    const img = document.getElementById('mission-image');
    img.src = mission.image;
    img.alt = mission.title;
    
    // Renderizar perguntas de observação
    const obsContainer = document.getElementById('observation-questions');
    obsContainer.innerHTML = '<h3 style="margin-bottom: 15px; color: #667eea;">💭 Pense sobre isso:</h3>';
    mission.observationQuestions.forEach((q, i) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'observation-question';
        questionDiv.textContent = `${i + 1}. ${q}`;
        obsContainer.appendChild(questionDiv);
    });
    
    // Renderizar explicação
    document.getElementById('explanation-text').innerHTML = 
        mission.explanation.split('\n').map(p => `<p>${p}</p>`).join('');
    
    // Renderizar atividades
    renderActivities(mission.activities);
    
    // Esconder seção de sucesso
    document.getElementById('success-section').style.display = 'none';
    
    showPage('mission-detail-page');
}

// Renderizar atividades interativas
function renderActivities(activities) {
    const container = document.getElementById('activity-container');
    container.innerHTML = '';
    
    activities.forEach((activity, index) => {
        const activityDiv = document.createElement('div');
        activityDiv.className = 'activity-item';
        activityDiv.style.marginBottom = '30px';
        
        if (activity.type === 'multiple-choice') {
            activityDiv.innerHTML = `
                <div class="activity-question">${activity.question}</div>
                <div class="options-container">
                    ${activity.options.map((opt, optIndex) => `
                        <button class="option-btn" onclick="checkAnswer(${index}, ${optIndex}, ${opt.correct})">
                            ${opt.text}
                        </button>
                    `).join('')}
                </div>
            `;
        } else if (activity.type === 'true-false') {
            activityDiv.innerHTML = `
                <div class="activity-question">${activity.question}</div>
                <div class="options-container">
                    <button class="option-btn" onclick="checkTrueFalse(${index}, true, ${activity.correct})">
                        Verdadeiro ✅
                    </button>
                    <button class="option-btn" onclick="checkTrueFalse(${index}, false, ${!activity.correct})">
                        Falso ❌
                    </button>
                </div>
            `;
        }
        
        container.appendChild(activityDiv);
    });
}

// Verificar resposta de múltipla escolha
function checkAnswer(activityIndex, optionIndex, isCorrect) {
    const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`);
    buttons.forEach(btn => {
        btn.disabled = true;
        if (btn === buttons[optionIndex]) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else if (isCorrect) {
            // Marcar a resposta correta se o usuário errou
            const correctBtn = Array.from(buttons).find((_, i) => {
                const activity = missions[currentMissionIndex].activities[activityIndex];
                return activity.options[i].correct;
            });
            if (correctBtn) correctBtn.classList.add('correct');
        }
    });
    
    checkAllActivitiesCompleted();
}

// Verificar resposta verdadeiro/falso
function checkTrueFalse(activityIndex, userAnswer, isCorrect) {
    const buttons = document.querySelectorAll(`.activity-item:nth-child(${activityIndex + 1}) .option-btn`);
    buttons.forEach(btn => {
        btn.disabled = true;
        const isTrueBtn = btn.textContent.includes('Verdadeiro');
        if ((isTrueBtn && userAnswer) || (!isTrueBtn && !userAnswer)) {
            btn.classList.add(isCorrect ? 'correct' : 'incorrect');
        } else {
            btn.classList.add(!isCorrect ? 'correct' : 'incorrect');
        }
    });
    
    checkAllActivitiesCompleted();
}

// Verificar se todas as atividades foram completadas
function checkAllActivitiesCompleted() {
    const allButtons = document.querySelectorAll('.activity-item .option-btn');
    const allDisabled = Array.from(allButtons).every(btn => btn.disabled);
    
    if (allDisabled) {
        setTimeout(() => {
            showSuccessMessage();
        }, 1000);
    }
}

// Mostrar mensagem de sucesso
function showSuccessMessage() {
    const mission = missions[currentMissionIndex];
    document.getElementById('success-message').textContent = mission.successMessage;
    document.getElementById('success-section').style.display = 'block';
    document.getElementById('success-section').scrollIntoView({ behavior: 'smooth' });
    
    // Marcar missão como completada
    mission.completed = true;
}

// Próxima missão
function nextMission() {
    if (currentMissionIndex < missions.length - 1) {
        showMissionDetail(currentMissionIndex + 1);
    } else {
        // Todas as missões completadas
        alert('🎉 Parabéns, Anthony! Você completou todas as missões! Você é um verdadeiro explorador do tempo! 🏆');
        showPage('missions-page');
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    showPage('home-page');
});

